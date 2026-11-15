#!/usr/bin/env python3
"""抖音收藏采集（浏览器方案）：Playwright 真浏览器打开收藏页，从 DOM 抄视频列表，
并在同一浏览器会话内下载视频、交给本地 AMD whisper 转写。

背景（2026-10 实测）：抖音对详情 API 全面升级风控（bd-ticket-guard），f2 模拟请求 403、
yt-dlp 单视频下载同样 403（Fresh cookies needed），但真实浏览器里页面自己带全部签名。
因此列表与媒体都在浏览器会话内获取：列表抄 DOM（a[href*="/video/"]），
视频从 <video> 的带签名流地址用会话内 request 下载。

用法（本地电脑）：
    python douyin_collect_web.py --login       # 有头浏览器扫码登录（登录态存 data/pw_profile，一次即可）
    python douyin_collect_web.py --list        # 只滚动采集收藏列表存 JSON，不下载
    python douyin_collect_web.py               # 采集列表 + 新视频下载转写进 inbox（--max N 限流试跑）

产出：data/douyin_favorites.json（[{id,title,url,author}]）+ 最新 cookie 导出
      cookies_douyin_web.txt（供 main.py 的 yt-dlp 下载 B站等其他任务使用）
      video2kb-inbox/transcripts/抖音-收藏/<视频ID>/transcript.srt（sync 模式）
"""
import argparse
import json
import re
import subprocess
import time
from pathlib import Path

from playwright.sync_api import sync_playwright, TimeoutError as PWTimeout

import main

ROOT = main.ROOT
CONFIG = main.CONFIG
FAV_JSON = main.WORK / "douyin_favorites.json"
PROFILE = ROOT / "data" / "pw_profile"  # 持久化浏览器用户目录（登录态在里面）
FAV_URL = "https://www.douyin.com/user/self?showTab=favorite_collection"
FRESH_COOKIES = ROOT / "cookies_douyin_web.txt"
SCROLL_ROUNDS = 400          # 滚动轮数上限（每轮 ~1.2s，8 分钟封顶）
NO_NEW_STOP = 4              # 连续 N 轮无新视频就停
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0")
# 收藏页网格在内部滚动容器里（window 不滚），把所有可滚动容器都推一遍
SCROLL_JS = """
() => {
  const els = [...document.querySelectorAll('*')].filter(
    e => e.scrollHeight > e.clientHeight + 50 && e.clientHeight > 300);
  for (const el of els) el.scrollTop += 900;
  window.scrollBy(0, 900);
  return els.length;
}
"""
EXTRACT_JS = """
() => [...document.querySelectorAll('a[href*="/video/"]')]
  .map(a => ({
    id: (a.href.match(/video\\/(\\d+)/) || [])[1],
    alt: (a.querySelector('img') || {}).alt || ''
  }))
  .filter(v => v.id)
"""


def open_context(p, headless):
    """持久化用户目录：完整保留 cookie/localStorage/IndexedDB，--login 扫一次即可。"""
    return p.chromium.launch_persistent_context(
        user_data_dir=str(PROFILE), headless=headless,
        user_agent=UA, viewport={"width": 1280, "height": 800})


def logged_in(page):
    """在 user/self 页判断：无登录弹窗且出现个人页 tabbar 才算登录。

    注意不能用「存在指向 /user/self 的链接」——未登录时左侧导航也有该链接。
    """
    try:
        return (page.get_by_text("扫码登录").count() == 0
                and page.locator("#user-tabbar").count() > 0)
    except Exception:
        return False


def export_fresh_cookies(ctx):
    """把浏览器上下文里的最新 douyin cookie 导出为 Netscape cookies.txt。

    旧 cookies.txt 里的抖音段来自手工复制的 Cookie 头，会过期；
    持久化目录里的会话刚被真实浏览器刷新过，导出后供 main.ydl_opts 优先使用
    （含 HttpOnly 的 sessionid）。空名字条目会让 yt-dlp 报格式错误，过滤掉。
    """
    lines = ["# Netscape HTTP Cookie File"]
    for c in ctx.cookies():
        if "douyin" not in c.get("domain", ""):
            continue
        if not c.get("name") or not c.get("value"):
            continue
        exp = c.get("expires") or 0
        if exp < 0:
            exp = 0
        secure = "TRUE" if c.get("secure") else "FALSE"
        domain = c["domain"]
        if not domain.startswith("."):
            domain = "." + domain  # Netscape 格式：includeSubdomains=TRUE 要求前导点
        lines.append(f"{domain}\tTRUE\t{c.get('path', '/')}\t{secure}\t{int(exp)}\t"
                     f"{c['name']}\t{c['value']}")
    if len(lines) > 1:
        FRESH_COOKIES.write_text("\n".join(lines) + "\n", encoding="utf-8")
        print(f"已导出最新 douyin cookie（{len(lines)-1} 条）到 {FRESH_COOKIES.name}")


def parse_title(alt, vid):
    """alt 格式多为「作者名：标题」，拆开；没有冒号就整段当标题。"""
    alt = alt.strip()
    if "：" in alt:
        author, _, title = alt.partition("：")
        if len(author) <= 30:
            return title.strip() or vid, author.strip()
    return alt or vid, ""


def collect_list(ctx):
    """在已登录会话里打开收藏页滚动到底，返回 [{id,title,url,author}]（去重保序）。"""
    page = ctx.new_page()
    page.goto(FAV_URL, wait_until="domcontentloaded")
    page.wait_for_timeout(5000)
    if not logged_in(page) and page.get_by_text("扫码登录").count() > 0:
        page.close()
        raise SystemExit("登录态失效（出现登录弹窗）。请跑 python douyin_collect_web.py --login 重新扫码。")
    if "showTab" not in (page.url or ""):
        page.close()
        raise SystemExit(f"未进入收藏页（当前 {page.url}），请检查登录态")
    seen = {}
    no_new = 0
    # 首屏防护：网格未渲染完成时首抽可能是 0，重试等待而不是直接空跑
    first = page.evaluate(EXTRACT_JS)
    for _ in range(5):
        if first:
            break
        page.wait_for_timeout(4000)
        first = page.evaluate(EXTRACT_JS)
    for v in first:
        seen[v["id"]] = v
    for r in range(SCROLL_ROUNDS):
        for v in page.evaluate(EXTRACT_JS):
            if v["id"] not in seen:
                seen[v["id"]] = v
                no_new = 0
        page.evaluate(SCROLL_JS)
        page.wait_for_timeout(1200)
        if r % 10 == 9:
            print(f"  第 {r+1} 轮：已抓 {len(seen)} 条")
        no_new += 1
        if no_new >= NO_NEW_STOP:
            break
    export_fresh_cookies(ctx)
    page.close()
    items = []
    for v in seen.values():
        title, author = parse_title(v["alt"], v["id"])
        items.append({"id": v["id"], "title": title,
                      "url": f"https://www.douyin.com/video/{v['id']}", "author": author})
    if not items:
        print("警告：收藏拉到 0 条 —— 登录态失效或页面结构变了")
    return items


VIDEO_SRC_JS = """
() => {
  const v = document.querySelector('video');
  if (!v) return '';
  return v.src || (v.querySelector('source') || {}).src || v.currentSrc || '';
}
"""


CHUNK = 4 * 1024 * 1024  # Range 分块 4MB


def _download_stream(ctx, url, dest: Path) -> int:
    """按 Range 分块下载一个带签名 CDN 流（DASH 单轨），返回写入字节数。

    dest 已由调用方校验在 data/ 工作区内；分块累积后一次性落盘。
    """
    total, start = None, 0
    chunks = []
    while True:
        end = start + CHUNK - 1
        r = ctx.request.get(url, headers={
            "Range": f"bytes={start}-{end}",
            "Referer": "https://www.douyin.com/", "User-Agent": UA})
        if not r.ok:
            raise RuntimeError(f"HTTP {r.status} @ bytes={start}")
        body = r.body()
        chunks.append(body)
        start += len(body)
        if total is None:
            cr = r.headers.get("content-range", "")
            if "/" in cr:
                try:
                    total = int(cr.rsplit("/", 1)[1])
                except ValueError:
                    total = None
        if total is not None and start >= total:
            break
        if total is None and len(body) < CHUNK:
            break  # 服务器返回 200 全量或末块
        time.sleep(0.3)
    data = b"".join(chunks)
    dest.write_bytes(data)
    return len(data)


def fetch_video_file(ctx, url, dest: Path) -> bool:
    """在浏览器会话内获取完整视频，返回 True 表示 dest 有效（>300KB）。

    优先取 <video> 直链（短视频）；MSE blob 流（长视频）则监听播放器发出的
    CDN 分轨请求（v*.douyinvod.com，视频/音频分离），按 Range 拉全两条轨后
    用 ffmpeg -c copy 合流。dest 必须在 data/ 工作区内。
    """
    ffmpeg = main._resolve_ffmpeg()
    if not ffmpeg:
        print("  ffmpeg 缺失，无法处理视频")
        return False
    dest = Path(dest).resolve()
    if main.WORK.resolve() not in dest.parents:
        print("  目标路径越界，拒绝写入")
        return False
    page = ctx.new_page()
    try:
        page.goto(url, wait_until="domcontentloaded")
        page.wait_for_timeout(4000)
        src = page.evaluate(VIDEO_SRC_JS)
        if src.startswith("//"):
            src = "https:" + src
        if src and src.startswith("http"):
            resp = ctx.request.get(src, headers={"Referer": "https://www.douyin.com/", "User-Agent": UA})
            if resp.ok:
                body = resp.body()
                if len(body) >= 300_000:
                    dest.write_bytes(body)
                    return True
        # blob 流：触发播放并等待两条轨的 CDN 请求出现
        try:
            page.locator("video").first.click(timeout=3000)
        except Exception:
            pass
        v_urls, a_urls = [], []
        for _ in range(10):
            page.wait_for_timeout(1500)
            v_urls = page.evaluate(
                "() => { const u=performance.getEntriesByType('resource')"
                ".map(e=>e.name).filter(n=>n.includes('media-video')); return [...new Set(u)]; }")
            a_urls = page.evaluate(
                "() => { const u=performance.getEntriesByType('resource')"
                ".map(e=>e.name).filter(n=>n.includes('media-audio')); return [...new Set(u)]; }")
            if v_urls and a_urls:
                break
        if not (v_urls and a_urls):
            print(f"  未捕获到 CDN 分轨流（video={len(v_urls)} audio={len(a_urls)}）")
            return False
        vpart, apart = dest.with_suffix(".v.mp4"), dest.with_suffix(".a.mp4")
        nv = _download_stream(ctx, v_urls[0], vpart)
        na = _download_stream(ctx, a_urls[0], apart)
        print(f"  分轨下载完成 video={nv // 1024}KB audio={na // 1024}KB")
        subprocess.run(
            [ffmpeg, "-y", "-loglevel", "error", "-i", str(vpart), "-i", str(apart),
             "-c", "copy", str(dest)],
            check=True, capture_output=True)
        vpart.unlink(missing_ok=True)
        apart.unlink(missing_ok=True)
        return dest.exists() and dest.stat().st_size > 300_000
    except Exception as e:
        print("  浏览器下载失败:", str(e)[:150])
        return False
    finally:
        page.close()


def sync_inbox(ctx, items, state, inbox_root, max_n=0):
    """新视频 -> 浏览器下载 mp4 -> AMD whisper 本地转写 -> 写 inbox。"""
    creator = CONFIG.get("favorites", {}).get("douyin_creator_name", "抖音-收藏")
    pending = []
    todo = [v for v in items
            if v["id"] not in state and not any(inbox_root.glob(f"*/{v['id']}/transcript.srt"))
            and not state.get(v["id"], {}).get("no_speech")
            and not state.get(v["id"], {}).get("unfetchable")]
    # 先过滤知识类（判定有缓存，几乎零成本），--max 只数真正要处理的；
    # 反过来先切片会让非知识类白白占掉每晚名额
    if todo:
        verdicts = main.classify_knowledge(todo)
        non_knowledge = [v for v in todo if not verdicts.get(v["id"])]
        todo = [v for v in todo if verdicts.get(v["id"])]
        if non_knowledge:
            print(f"知识类过滤：跳过 {len(non_knowledge)} 条非知识内容")
    if max_n:
        todo = todo[:max_n]
    print(f"\n=== {creator}：共 {len(items)} 条收藏，待处理 {len(todo)} 条 ===")
    for i, v in enumerate(todo, 1):
        if not re.fullmatch(r"\d{10,25}", str(v["id"])):
            print(f"[{i}/{len(todo)}] 跳过（非法视频ID）: {v['title'][:40]}")
            continue
        vdir = (main.WORK / "local" / v["id"]).resolve()
        if main.WORK.resolve() not in vdir.parents:
            print(f"[{i}/{len(todo)}] 跳过（路径越界）")
            continue
        vdir.mkdir(parents=True, exist_ok=True)
        dest = inbox_root / creator / v["id"]
        mp4 = vdir / f"{v['id']}.mp4"
        if mp4.exists() or fetch_video_file(ctx, v["url"], mp4):
            print(f"[{i}/{len(todo)}] 已下载，转写中: {v['title'][:40]}")
            srt_path = dest / "transcript.srt"
            if main.local_transcribe_video(v, vdir, srt_path, audio_path=mp4):
                # 关键帧截图：屏幕演示/图表类视频的画面信息，存 inbox frames/ 供深加工取用
                nf = main.extract_keyframes(mp4, dest / "frames")
                if nf:
                    print(f"[{i}/{len(todo)}] 关键帧 {nf} 张 -> {dest / 'frames'}")
                # 纯音乐/无解说的视频转出来只有 (音乐) 标记，不进 inbox，标记跳过
                core = re.sub(r"[（(]\s*(音乐|音樂|\?\?|外语)\s*[)）]", "",
                              main.srt_to_text(srt_path)).strip() if srt_path.exists() else ""
                if len(core) < 50:
                    srt_path.unlink(missing_ok=True)
                    import shutil
                    shutil.rmtree(dest / "frames", ignore_errors=True)  # 无语音的视频截图也没价值
                    state[v["id"]] = {"title": v["title"], "url": v["url"], "no_speech": True}
                    main.save_state(state)
                    print(f"[{i}/{len(todo)}] 无有效语音（纯音乐/环境音），已跳过")
                else:
                    print(f"[{i}/{len(todo)}] AMD 本地转写完成: {srt_path}")
                    state[v["id"]] = {"title": v["title"], "url": v["url"]}
                    main.save_state(state)
            else:
                pending.append(v)
                print(f"[{i}/{len(todo)}] 转写失败 → 需服务器: {v['title'][:40]} {v['url']}")
            mp4.unlink(missing_ok=True)  # 转写完删视频省空间
        else:
            pending.append(v)
            print(f"[{i}/{len(todo)}] 下载失败 → 稍后重跑: {v['title'][:40]} {v['url']}")
    if pending:
        print("\n== 未完成清单（重跑本脚本会自动重试） ==")
        for v in pending:
            print(f"  {v['url']}  {v['title'][:50]}")


def main_cli():
    ap = argparse.ArgumentParser(description="抖音收藏采集（浏览器 DOM 方案）")
    ap.add_argument("--list", action="store_true", help="只采集收藏列表存 JSON")
    ap.add_argument("--login", action="store_true",
                    help="开有头浏览器手动扫码，登录态存 data/pw_profile")
    ap.add_argument("--max", type=int, default=0,
                    help="本次最多转写 N 条新视频（0=全部），试跑用")
    args = ap.parse_args()

    if args.login:
        with sync_playwright() as p:
            ctx = open_context(p, headless=False)
            page = ctx.new_page()
            page.goto("https://www.douyin.com/user/self", wait_until="domcontentloaded")
            page.wait_for_timeout(3000)
            if logged_in(page):
                print("已有登录态，无需重新扫码")
            else:
                print("请在弹出的浏览器窗口里扫码登录目标账号，等待登录成功 ...")
                ok = False
                for _ in range(60):
                    page.wait_for_timeout(3000)
                    if logged_in(page):
                        ok = True
                        break
                print("登录成功" if ok else "3 分钟内未检测到登录成功（可重跑 --login）")
            export_fresh_cookies(ctx)
            ctx.close()
        print(f"登录态保存在 {PROFILE}，之后采集自动带上")
        return

    with sync_playwright() as p:
        ctx = open_context(p, headless=True)
        print("滚动采集收藏列表中 ...")
        items = collect_list(ctx)
        FAV_JSON.parent.mkdir(parents=True, exist_ok=True)
        FAV_JSON.write_text(json.dumps(items, ensure_ascii=False, indent=1), encoding="utf-8")
        print(f"已保存 {len(items)} 条收藏到 {FAV_JSON.name}")
        if args.list:
            for v in items[:20]:
                print(f"  {v['id']}  [{v['author']}] {v['title'][:40]}")
            if len(items) > 20:
                print(f"  ... 共 {len(items)} 条")
            ctx.close()
            return
        state = main.load_state()
        inbox_root = ROOT.parent / CONFIG.get("inbox_dir", "video2kb-inbox/transcripts")
        inbox_root.mkdir(parents=True, exist_ok=True)
        sync_inbox(ctx, items, state, inbox_root, max_n=args.max)
        ctx.close()


if __name__ == "__main__":
    main_cli()
