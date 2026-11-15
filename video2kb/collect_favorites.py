#!/usr/bin/env python3
"""个人收藏夹采集：把 B站/抖音 收藏的视频转进知识库。

用法（本地电脑）：
    python collect_favorites.py --list                   # 只列出收藏夹和视频清单，不下载
    python collect_favorites.py --bili                   # 同步B站全部收藏夹到 inbox
    python collect_favorites.py --bili --fid 2256390136  # 只同步指定收藏夹
    python collect_favorites.py --douyin                 # 同步抖音收藏到 inbox

B站：列表走官方 Web API（读 cookie_header_bilibili.txt，无需 Wbi 签名），
     下载/转写复用 main.py 的 CC 字幕 + AMD 本地 whisper 流程。
抖音：收藏接口有 a_bogus 签名，列表用 f2 库（pip install f2，读 cookie_header_douyin.txt），
      音频下载/转写同样复用 main.py（走 douyin cookie）。
产出：video2kb-inbox/transcripts/<收藏夹名>/<视频ID>/transcript.srt
      之后由夜间任务与其它 inbox 视频一起加工。
"""
import argparse
import asyncio
import re
import time
from pathlib import Path

import requests

import main

ROOT = main.ROOT
CONFIG = main.CONFIG
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36")


def _cookie_header(name):
    p = main.find_file(name)
    if p is None:
        raise SystemExit(f"缺少 {name}（源项目目录也没有）")
    return re.sub(r"^Cookie\s*:\s*", "", p.read_text(encoding="utf-8").strip(), flags=re.I)


# ---------------- B站 ----------------

def bili_api(path, params, cookie):
    h = {"Cookie": cookie, "User-Agent": UA, "Referer": "https://space.bilibili.com/"}
    d = None
    for attempt in range(3):  # 网络闪断/偶发风控时重试
        try:
            r = requests.get(f"https://api.bilibili.com{path}", params=params, headers=h, timeout=15)
            d = r.json()
            break
        except (requests.RequestException, ValueError):
            if attempt == 2:
                raise
            time.sleep(3 * (attempt + 1))
    if d.get("code") != 0:
        raise SystemExit(f"B站 API 出错 code={d.get('code')} {d.get('message')} "
                         f"（-101 说明 cookie 过期，请更新 cookie_header_bilibili.txt）")
    return d.get("data") or {}


def bili_folders(cookie):
    fav = CONFIG.get("favorites", {})
    uid = fav.get("bili_uid")
    if not uid:
        m = re.search(r"DedeUserID=(\d+)", cookie)
        if not m:
            raise SystemExit("config 里没有 favorites.bili_uid，cookie 里也没有 DedeUserID")
        uid = m.group(1)
    data = bili_api("/x/v3/fav/folder/created/list-all",
                    {"up_mid": uid, "jsonp": "jsonp"}, cookie)
    return data.get("list") or []


def bili_fav_videos(fid, cookie):
    videos, pn = [], 1
    while True:
        data = bili_api("/x/v3/fav/resource/list",
                        {"media_id": fid, "pn": pn, "ps": 20, "order": "mtime",
                         "type": 2, "tid": 0, "platform": "web"}, cookie)
        medias = data.get("medias") or []
        for m in medias:
            if not m.get("bvid"):
                continue  # 失效/私密/非视频条目
            videos.append({"id": m["bvid"], "title": m.get("title") or m["bvid"],
                           "url": f"https://www.bilibili.com/video/{m['bvid']}"})
        if len(videos) >= (data.get("info") or {}).get("media_count", 0) or not medias:
            break
        pn += 1
        time.sleep(1.5)  # 收藏夹接口有频率风控(-352)，翻页放慢
    return videos


def bili_view(bvid, cookie):
    """查视频详情（分P数/时长），失败返回空 dict（不阻塞主流程）。"""
    h = {"Cookie": cookie, "User-Agent": UA, "Referer": "https://www.bilibili.com/"}
    try:
        r = requests.get("https://api.bilibili.com/x/web-interface/view",
                         params={"bvid": bvid}, headers=h, timeout=10)
        return (r.json() or {}).get("data") or {}
    except Exception:
        return {}


def sync_bili(fids, state, inbox_root, max_n=0):
    cookie = _cookie_header("cookie_header_bilibili.txt")
    folders = bili_folders(cookie)
    if fids:
        folders = [f for f in folders if str(f["id"]) in fids]
        if not folders:
            raise SystemExit(f"没找到 fid={fids} 的收藏夹")
    prefix = CONFIG.get("favorites", {}).get("bili_creator_prefix", "B站-")
    pending = []
    quota = max_n  # 全局剩余配额，跨收藏夹共享
    for folder in folders:
        if quota == 0:
            print("\n（已达本次 --max 上限，其余收藏夹下次继续）")
            break
        name = f"{prefix}{folder['title']}"
        videos = bili_fav_videos(folder["id"], cookie)
        print(f"\n=== {name}：{len(videos)} 个视频 ===")
        verdicts = main.classify_knowledge(videos)  # 只收知识类，判定结果有缓存
        for i, v in enumerate(videos, 1):
            if quota == 0:
                print("（已达本次 --max 上限）")
                break
            if v["id"] in state or any(inbox_root.glob(f"*/{v['id']}/transcript.srt")):
                print(f"[{i}/{len(videos)}] 跳过（已完成）: {v['title']}")
                continue
            if not verdicts.get(v["id"]):
                print(f"[{i}/{len(videos)}] 跳过（非知识类）: {v['title']}")
                continue
            info = bili_view(v["id"], cookie)
            p = info.get("pages")
            n_pages = len(p) if isinstance(p, list) else int(p or 1)  # view API 的 pages 是分P对象数组
            if n_pages > 1:
                # 多分P合集：单P转录没意义（fetch_audio 只取第一P），直接跳过
                print(f"[{i}/{len(videos)}] 跳过（多分P合集 {n_pages}P）: {v['title']}")
                continue
            vdir = main.WORK / "local" / v["id"]
            vdir.mkdir(parents=True, exist_ok=True)
            dest = inbox_root / name / v["id"]
            srt = main.fetch_subtitle(v, vdir)
            if srt:
                dest.mkdir(parents=True, exist_ok=True)
                (dest / "transcript.srt").write_bytes(srt.read_bytes())
                print(f"[{i}/{len(videos)}] 字幕已写入 inbox: {v['title']}")
            elif main.local_transcribe_video(v, vdir, dest / "transcript.srt"):
                print(f"[{i}/{len(videos)}] AMD 本地转写完成: {v['title']}")
            else:
                pending.append(v)
                print(f"[{i}/{len(videos)}] 无字幕且本地转写不可用 → 需服务器: {v['title']} {v['url']}")
                continue
            state[v["id"]] = {"title": v["title"], "url": v["url"]}
            main.save_state(state)
            if quota:
                quota -= 1
            time.sleep(2)


# ---------------- 抖音 ----------------

def douyin_favorites(limit=0):
    """用 f2 拉收藏列表，返回 [{id,title,url,author,duration}]。"""
    try:
        import f2
        from f2.apps.douyin.handler import DouyinHandler
        from f2.apps.douyin.utils import ClientConfManager, ConfigManager
    except ImportError:
        raise SystemExit("抖音收藏需要 f2 库：pip install f2")

    cfg = ConfigManager(f2.APP_CONFIG_FILE_PATH).get_config("douyin")
    cfg["cookie"] = _cookie_header("cookie_header_douyin.txt")
    # UA 必须用 f2 自带的 Edge 指纹：a_bogus 签名参数与 UA 不一致会被 403
    cfg["headers"] = {"User-Agent": ClientConfManager.user_agent(),
                      "Referer": "https://www.douyin.com/"}
    cfg["timeout"] = 3      # f2 用它做翻页间隔
    cfg["max_retries"] = 3
    cfg["mode"] = "collection"

    items = []

    async def run():
        handler = DouyinHandler(cfg)
        async for page in handler.fetch_user_collection_videos(page_counts=20):
            for aid, desc, nick, dur in zip(
                    page.aweme_id, page.desc, page.nickname, page.video_duration):
                items.append({"id": aid, "title": (desc or "").strip() or aid,
                              "url": f"https://www.douyin.com/video/{aid}",
                              "author": nick, "duration": dur})
            if limit and len(items) >= limit:
                break

    asyncio.run(run())
    if limit:
        items = items[:limit]
    if not items:
        print("警告：抖音收藏拉到 0 条 —— 大概率 cookie 过期，请更新 cookie_header_douyin.txt")
    return items


def sync_douyin(state, inbox_root):
    fav = CONFIG.get("favorites", {})
    limit = fav.get("douyin_max_sync", 0)
    creator = fav.get("douyin_creator_name", "抖音-收藏")
    items = douyin_favorites(limit)
    print(f"\n=== {creator}：{len(items)} 个收藏 ===")
    pending = []
    for i, v in enumerate(items, 1):
        if v["id"] in state or any(inbox_root.glob(f"*/{v['id']}/transcript.srt")):
            print(f"[{i}/{len(items)}] 跳过（已完成）: {v['title']}")
            continue
        if not v.get("duration"):
            print(f"[{i}/{len(items)}] 跳过（图集/无时长）: {v['title']}")
            continue
        vdir = main.WORK / "local" / v["id"]
        vdir.mkdir(parents=True, exist_ok=True)
        dest = inbox_root / creator / v["id"]
        srt = main.fetch_subtitle(v, vdir)
        if srt:
            dest.mkdir(parents=True, exist_ok=True)
            (dest / "transcript.srt").write_bytes(srt.read_bytes())
            print(f"[{i}/{len(items)}] 字幕已写入 inbox: {v['title']}")
        elif main.local_transcribe_video(v, vdir, dest / "transcript.srt"):
            print(f"[{i}/{len(items)}] AMD 本地转写完成: {v['title']}")
        else:
            pending.append(v)
            print(f"[{i}/{len(items)}] 无字幕且本地转写不可用 → 需服务器: {v['title']} {v['url']}")
            continue
        state[v["id"]] = {"title": v["title"], "url": v["url"]}
        main.save_state(state)
    if pending:
        print("\n== 需服务器 whisper 转写的视频（hz01 开机后提交） ==")
        for v in pending:
            print(f"  {v['url']}  {v['title']}")


# ---------------- 入口 ----------------

def main_cli():
    ap = argparse.ArgumentParser(description="把B站/抖音个人收藏转进知识库 inbox")
    ap.add_argument("--list", action="store_true", help="只列出收藏夹和视频清单，不下载")
    ap.add_argument("--bili", action="store_true")
    ap.add_argument("--douyin", action="store_true")
    ap.add_argument("--fid", action="append", help="只同步指定B站收藏夹ID，可多次传")
    ap.add_argument("--max", type=int, default=0,
                    help="本次最多处理 N 条新视频（0=全部），试跑/夜间限流用")
    args = ap.parse_args()
    if not args.bili and not args.douyin:
        ap.print_help()
        return

    state = main.load_state()
    inbox_root = ROOT.parent / CONFIG.get("inbox_dir", "video2kb-inbox/transcripts")
    inbox_root.mkdir(parents=True, exist_ok=True)

    if args.bili:
        if args.list:
            cookie = _cookie_header("cookie_header_bilibili.txt")
            for f in bili_folders(cookie):
                videos = bili_fav_videos(f["id"], cookie)
                print(f"\n[{f['id']}] {f['title']}（{f.get('media_count')} 条）")
                for v in videos[:10]:
                    print(f"   {v['id']}  {v['title'][:50]}")
                if len(videos) > 10:
                    print(f"   ... 共 {len(videos)} 条")
            return
        sync_bili([str(x) for x in (args.fid or [])], state, inbox_root, max_n=args.max)

    if args.douyin:
        if args.list:
            for v in douyin_favorites():
                print(f"   {v['id']}  [{v['author']}] {v['title'][:50]} ({v['duration']}s)")
            return
        sync_douyin(state, inbox_root)


if __name__ == "__main__":
    main_cli()
