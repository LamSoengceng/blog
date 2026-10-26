#!/usr/bin/env python3
"""video2kb - 批量把 B站/抖音博主的视频转成 Markdown 知识库。

在 GPU 服务器上运行：
    python main.py              # 处理 config.json 里所有博主
    python main.py --creator 0  # 只处理第一个博主
    python main.py --list-only  # 只拉取视频列表，不下载

本地无 GPU 机器（Windows）上运行：
    python main.py --local-subtitle            # 只抓 CC 字幕写本地 inbox（零 GPU）
    python main.py --local-subtitle --creator 0

流程：拉视频列表 -> 优先下CC字幕 -> 无字幕则下音轨+faster-whisper转写
      -> LLM 加工成 Markdown -> 汇总索引
断点续跑：data/processed.json 记录已完成视频，重跑自动跳过。
"""
import argparse
import json
import re
import shutil
import subprocess
from pathlib import Path

import yt_dlp

ROOT = Path(__file__).parent
CONFIG = json.loads((ROOT / "config.json").read_text(encoding="utf-8"))
WORK = ROOT / CONFIG["work_dir"]
OUT = ROOT / CONFIG["output_dir"]
STATE = WORK / "processed.json"

# 密钥/cookie 不在仓库里：先找本项目目录，找不到回退到源项目目录。
# .env 由运行时 source / 读取设置 ZHIPU_API_KEY 环境变量（见 env.sh / README）。
CONFIG_DIR = Path(CONFIG.get("config_dir", str(ROOT)))


def load_state():
    if STATE.exists():
        return json.loads(STATE.read_text(encoding="utf-8"))
    return {}


def save_state(state):
    STATE.parent.mkdir(parents=True, exist_ok=True)
    STATE.write_text(json.dumps(state, ensure_ascii=False, indent=2), encoding="utf-8")


def find_file(name):
    """优先项目目录，回退到源项目目录（密钥文件不在仓库内）。"""
    for base in (ROOT, CONFIG_DIR):
        p = base / name
        if p.exists():
            return p
    return None


def ydl_opts(**extra):
    opts = {"quiet": True, "no_warnings": True, "retries": 3}
    # 支持 F12 复制的 Cookie 头：cookie_header_bilibili.txt / cookie_header_douyin.txt
    # 自动转换并合并成单个 cookies.txt（Netscape 格式支持多域名）
    headers = []
    for n in ("cookie_header_bilibili.txt", "cookie_header_douyin.txt"):
        p = find_file(n)
        if p is not None:
            headers.append(p)
    if headers:
        merged = []
        for h in headers:
            raw = h.read_text(encoding="utf-8").strip()
            raw = re.sub(r"^Cookie\s*:\s*", "", raw, flags=re.I)
            domain = ".douyin.com" if "douyin" in h.name else ".bilibili.com"
            for pair in raw.split(";"):
                if "=" not in pair:
                    continue
                k, v = pair.strip().split("=", 1)
                k, v = k.strip(), v.strip()
                if not k or any(c in k for c in "\t "):
                    continue
                merged.append(f"{domain}\tTRUE\t/\tTRUE\t0\t{k}\t{v}")
        if merged:
            (ROOT / "cookies.txt").write_text(
                "# Netscape HTTP Cookie File\n" + "\n".join(merged) + "\n", encoding="utf-8")
            print(f"已将 Cookie 头合并转换为 cookies.txt（{len(merged)} 条）")
    cookies = find_file(CONFIG["cookies_file"])
    if cookies is not None:
        opts["cookiefile"] = str(cookies)
    opts.update(extra)
    return opts


def list_videos(creator):
    """返回 [{id,title,url}]。"""
    cache = WORK / f"list_{creator['name']}.json"
    cache.parent.mkdir(parents=True, exist_ok=True)
    if cache.exists():
        return json.loads(cache.read_text(encoding="utf-8"))

    plat = creator["platform"]
    with yt_dlp.YoutubeDL(ydl_opts(extract_flat="in_playlist", playlistend=200)) as ydl:
        info = ydl.extract_info(creator["url"], download=False)
    entries = info.get("entries") or []
    videos = []
    for e in entries:
        vid = e.get("id")
        if not vid:
            continue
        link = (f"https://www.bilibili.com/video/{vid}" if plat == "bilibili"
                else f"https://www.douyin.com/video/{vid}")
        videos.append({"id": vid, "title": e.get("title") or vid, "url": link})
    if not videos:
        raise SystemExit(f"未获取到视频列表，请检查链接/cookie（{creator['name']}）")
    limit = CONFIG.get("max_videos_per_creator", 0)
    if limit:
        videos = videos[:limit]
    cache.write_text(json.dumps(videos, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"  共 {len(videos)} 个视频（缓存于 {cache.name}，删除可刷新）")
    return videos


def fetch_subtitle(video, dest_dir):
    """尝试下载 CC/自动字幕，成功返回 srt 路径。"""
    opts = ydl_opts(
        skip_download=True, writesubtitles=True, writeautomaticsub=True,
        subtitleslangs=["zh-CN", "zh-Hans", "zh"],
        convertsubtitles="srt",
        outtmpl=str(dest_dir / "%(id)s.%(ext)s"),
    )
    try:
        with yt_dlp.YoutubeDL(opts) as ydl:
            ydl.download([video["url"]])
    except yt_dlp.utils.DownloadError as e:
        print("  字幕下载失败:", str(e)[:200])
    files = list(dest_dir.glob(f"{video['id']}*.srt"))
    return files[0] if files else None


def fetch_audio(video, dest_dir):
    opts = ydl_opts(
        format="bestaudio/best",
        outtmpl=str(dest_dir / "%(id)s.%(ext)s"),
        postprocessors=[{"key": "FFmpegExtractAudio", "preferredcodec": "mp3",
                         "preferredquality": "5"}],
    )
    try:
        with yt_dlp.YoutubeDL(opts) as ydl:
            ydl.download([video["url"]])
    except yt_dlp.utils.DownloadError as e:
        print("  音频下载失败:", str(e)[:200])
        return None
    files = list(dest_dir.glob(f"{video['id']}*.mp3"))
    return files[0] if files else None


_model = None


def load_model():
    global _model
    if _model is None:
        from faster_whisper import WhisperModel
        print("  加载 faster-whisper large-v3 (int8_float16) ...")
        _model = WhisperModel("large-v3", device="cuda", compute_type="int8_float16")
    return _model


def transcribe(audio_path):
    model = load_model()
    segments, _ = model.transcribe(
        str(audio_path), vad_filter=True,
        initial_prompt="以下是普通话的句子，请用简体中文。",
    )
    lines, srt = [], []

    def ts(t):
        return f"{int(t // 3600):02d}:{int(t % 3600 // 60):02d}:{int(t % 60):02d},{int(t % 1 * 1000):03d}"

    for i, seg in enumerate(segments, 1):
        line = seg.text.strip()
        lines.append(line)
        srt.append(f"{i}\n{ts(seg.start)} --> {ts(seg.end)}\n{line}\n")
    return "\n".join(lines), "\n".join(srt)


def _resolve_ffmpeg():
    ff = CONFIG.get("ffmpeg") or "ffmpeg"
    found = shutil.which(ff)
    if found:
        return found
    fallback = Path(r"C:\Users\10328\AppData\Local\Microsoft\WinGet\Links\ffmpeg.exe")
    return str(fallback) if fallback.exists() else None


def local_transcribe_video(video, work_dir, dest_srt):
    """无 GPU/CUDA 环境下的本地转写：Const-me Whisper CLI（DirectCompute，支持 AMD）。

    音频 -> 16kHz 单声道 wav -> main.exe -osrt -> 复制 srt 到 inbox。
    成功返回 True；模型/CLI/ffmpeg 缺失或转写失败返回 False（由调用方降级到服务器）。
    """
    conf = CONFIG.get("local_whisper", {})
    if not conf.get("enabled"):
        return False
    cli = ROOT / conf.get("cli", "tools/whisper-cli/main.exe")
    model = ROOT / conf.get("model", "models/ggml-large-v3.bin")
    if not cli.exists():
        print("  本地 whisper CLI 缺失:", cli)
        return False
    if not model.exists() or model.stat().st_size < 1_000_000_000:
        # 大模型（large 系列）正常 >2GB；文件过小说明下载未完成，避免用半截模型转出乱码
        alt = ROOT / "models" / "ggml-base.bin"
        if alt.exists() and alt.stat().st_size > 100_000_000:
            print(f"  配置模型缺失或未下载完，临时改用 {alt.name}（质量较低）")
            model = alt
        else:
            print("  本地 whisper 模型缺失或未下载完:", model)
            return False
    ffmpeg = _resolve_ffmpeg()
    if not ffmpeg:
        print("  ffmpeg 缺失，无法转写")
        return False

    audio = fetch_audio(video, work_dir)
    if not audio:
        return False
    wav = work_dir / f"{video['id']}.wav"
    try:
        subprocess.run(
            [ffmpeg, "-y", "-loglevel", "error", "-i", str(audio),
             "-ar", "16000", "-ac", "1", str(wav)],
            check=True,
        )
    except subprocess.CalledProcessError as e:
        print("  音频转 wav 失败:", str(e)[:200])
        audio.unlink(missing_ok=True)
        return False

    print(f"  本地 AMD whisper 转写中（{model.name}）...")
    lang = conf.get("language", "zh")
    gpu = str(conf.get("gpu", 0))
    try:
        if conf.get("prompt"):
            subprocess.run(
                [str(cli), "-m", str(model), "-f", str(wav), "-l", lang,
                 "-gpu", gpu, "-osrt", "-otxt", "--prompt", conf["prompt"]],
                check=True, capture_output=True,
            )
        else:
            subprocess.run(
                [str(cli), "-m", str(model), "-f", str(wav), "-l", lang,
                 "-gpu", gpu, "-osrt", "-otxt"],
                check=True, capture_output=True,
            )
    except subprocess.CalledProcessError as e:
        err = (e.stderr or b"").decode("utf-8", "ignore").strip()
        print("  本地转写失败:", err[:300])
        audio.unlink(missing_ok=True)
        wav.unlink(missing_ok=True)
        return False

    produced = wav.with_suffix(".srt")
    if not produced.exists():
        print("  本地转写未生成 srt")
        return False
    dest_srt.parent.mkdir(parents=True, exist_ok=True)
    dest_srt.write_bytes(produced.read_bytes())
    audio.unlink(missing_ok=True)
    wav.unlink(missing_ok=True)
    produced.unlink(missing_ok=True)
    wav.with_suffix(".txt").unlink(missing_ok=True)
    return True


def srt_to_text(srt_path):
    text = srt_path.read_text(encoding="utf-8", errors="ignore")
    text = re.sub(r"^\d+\n\d{2}:.*?\n", "", text, flags=re.M)
    return text.replace("\n\n", "\n").strip()


def llm_process(creator, video, text):
    import os
    from zhipuai import ZhipuAI
    client = ZhipuAI(api_key=os.environ[CONFIG["llm"]["api_key_env"]])
    prompt = f"""以下是视频《{video['title']}》的完整字幕（作者：{creator['name']}，平台：{creator['platform']}）。
请输出一份 Markdown 学习笔记，包含：
1. 一句话核心结论
2. 分章节大纲（保留论述逻辑和关键论据）
3. 知识卡片：5-10 条，每条格式为「**术语**：解释（原文例证）」
4. 值得追问的 3 个问题
只输出笔记内容本身，不要加额外说明。

字幕内容：
{text}"""
    r = client.chat.completions.create(
        model=CONFIG["llm"]["model"],
        messages=[{"role": "user", "content": prompt}],
    )
    return r.choices[0].message.content


def safe_name(s):
    return re.sub(r'[\\/:*?"<>|\s]+', "-", s)[:60]


def process_creator(creator, state):
    if creator["platform"] == "douyin":
        print(f"\n抖音（{creator['name']}）不走服务器抓取（API 风控）。"
              "请在本地跑 douyin_local.py --fetch/--upload 后用 --inbox 处理。")
        return
    print(f"\n=== {creator['name']} ({creator['platform']}) ===")
    videos = list_videos(creator)
    cdir = OUT / creator["name"]
    cdir.mkdir(parents=True, exist_ok=True)
    model_needed = False

    for i, v in enumerate(videos, 1):
        if v["id"] in state:
            print(f"[{i}/{len(videos)}] 跳过（已完成）: {v['title']}")
            continue
        print(f"[{i}/{len(videos)}] {v['title']}")
        vdir = WORK / creator["name"] / v["id"]
        vdir.mkdir(parents=True, exist_ok=True)

        text = None
        srt = fetch_subtitle(v, vdir)
        if srt:
            print("  使用CC字幕")
            text = srt_to_text(srt)
        if not text or len(text) < 200:  # 字幕缺失或过短，转写兜底
            audio = fetch_audio(v, vdir)
            if not audio:
                continue
            print("  转写中 ...")
            text, srt_text = transcribe(audio)
            (vdir / "transcript.srt").write_text(srt_text, encoding="utf-8")
            audio.unlink(missing_ok=True)  # 转写完删音频省空间

        note = llm_process(creator, v, text)
        md = cdir / f"{safe_name(v['title'])}.md"
        md.write_text(
            f"---\n来源: {v['url']}\n作者: {creator['name']}\n平台: {creator['platform']}\n---\n\n{note}\n",
            encoding="utf-8",
        )
        state[v["id"]] = {"title": v["title"], "file": str(md.relative_to(ROOT))}
        save_state(state)
        print(f"  -> {md.name}")


def process_local_subtitles(creator, state):
    """本地无 GPU：只抓 CC 字幕写 video2kb-inbox/transcripts/<vid>/transcript.srt。

    无字幕的视频打印「需服务器转写」清单，不下载音轨、不跑 whisper。
    """
    print(f"\n=== 本地字幕抓取 {creator['name']} ({creator['platform']}) ===")
    videos = list_videos(creator)
    inbox_root = ROOT.parent / CONFIG.get("inbox_dir", "video2kb-inbox/transcripts")
    inbox_root.mkdir(parents=True, exist_ok=True)
    pending = []

    for i, v in enumerate(videos, 1):
        if v["id"] in state or any(inbox_root.glob(f"*/{v['id']}/transcript.srt")):
            print(f"[{i}/{len(videos)}] 跳过（已完成）: {v['title']}")
            continue
        vdir = WORK / "local" / v["id"]
        vdir.mkdir(parents=True, exist_ok=True)
        dest = inbox_root / creator["name"] / v["id"]
        srt = fetch_subtitle(v, vdir)
        if srt:
            dest.mkdir(parents=True, exist_ok=True)
            (dest / "transcript.srt").write_bytes(srt.read_bytes())
            print(f"[{i}/{len(videos)}] 字幕已写入 inbox: {dest / 'transcript.srt'}")
        elif local_transcribe_video(v, vdir, dest / "transcript.srt"):
            print(f"[{i}/{len(videos)}] AMD 本地转写完成: {dest / 'transcript.srt'}")
        else:
            pending.append(v)
            print(f"[{i}/{len(videos)}] 无字幕且本地转写不可用 → 需服务器转写: {v['title']} {v['url']}")
            continue
        state[v["id"]] = {"title": v["title"], "url": v["url"]}
        save_state(state)

    if pending:
        print("\n== 需服务器 whisper 转写的视频（hz01 开机后提交） ==")
        for v in pending:
            print(f"  {v['url']}  {v['title']}")


def process_links_subtitles(links, state):
    """按给定链接抓 CC 字幕写 inbox（夜间任务搜到任意视频后用）。

    links: [(url, title)] 或 url 字符串列表。无字幕的打印「需服务器转写」清单。
    """
    inbox_root = ROOT.parent / CONFIG.get("inbox_dir", "video2kb-inbox/transcripts")
    inbox_root.mkdir(parents=True, exist_ok=True)
    creator_name = CONFIG.get("links_creator_name", "B站-Agent面试")
    pending = []
    for i, item in enumerate(links, 1):
        if isinstance(item, tuple):
            url, title = item
        else:
            url, title = item, item
        m = re.search(r"(BV[0-9A-Za-z]{10})", url)
        if not m:
            print(f"[{i}/{len(links)}] 无法识别 BV 号，跳过: {url}")
            continue
        vid = m.group(1)
        if vid in state or any(inbox_root.glob(f"*/{vid}/transcript.srt")):
            print(f"[{i}/{len(links)}] 跳过（已完成）: {title}")
            continue
        v = {"id": vid, "title": title, "url": f"https://www.bilibili.com/video/{vid}"}
        vdir = WORK / "local" / vid
        vdir.mkdir(parents=True, exist_ok=True)
        dest = inbox_root / creator_name / vid
        srt = fetch_subtitle(v, vdir)
        if srt:
            dest.mkdir(parents=True, exist_ok=True)
            (dest / "transcript.srt").write_bytes(srt.read_bytes())
            print(f"[{i}/{len(links)}] 字幕已写入 inbox: {dest / 'transcript.srt'}")
        elif local_transcribe_video(v, vdir, dest / "transcript.srt"):
            print(f"[{i}/{len(links)}] AMD 本地转写完成: {dest / 'transcript.srt'}")
        else:
            pending.append(v)
            print(f"[{i}/{len(links)}] 无字幕且本地转写不可用 → 需服务器: {title} {v['url']}")
            continue
        state[vid] = {"title": title, "url": v["url"]}
        save_state(state)

    if pending:
        print("\n== 需服务器 whisper 转写的视频（hz01 开机后提交） ==")
        for v in pending:
            print(f"  {v['url']}  {v['title']}")
    return pending


def build_index(state):
    lines = ["# 知识库索引\n"]
    for vid, info in state.items():
        lines.append(f"- [{info['title']}]({Path(info['file']).as_posix()})")
    (OUT / "index.md").write_text("\n".join(lines), encoding="utf-8")
    print(f"\n索引已更新: {OUT / 'index.md'}")


def process_inbox(creator, state):
    """处理本地抖音视频（data/douyin_inbox/ 里 'id title.mp4'，由本地电脑下载上传）。"""
    inbox = WORK / "douyin_inbox"
    if not inbox.exists():
        raise SystemExit("没有 data/douyin_inbox/，请先在本地跑 douyin_local.py --fetch/--upload")
    cdir = OUT / creator["name"]
    cdir.mkdir(parents=True, exist_ok=True)
    files = sorted(p for p in inbox.iterdir() if p.suffix.lower() in (".mp4", ".mkv", ".m4a", ".mp3"))
    print(f"\n=== 抖音收件箱 {creator['name']}：{len(files)} 个文件 ===")
    load_model()
    for i, f in enumerate(files, 1):
        vid = f.stem.split(" ")[0]
        title = f.stem[len(vid):].strip() or vid
        if vid in state:
            print(f"[{i}/{len(files)}] 跳过（已完成）: {title}")
            continue
        print(f"[{i}/{len(files)}] {title}")
        text, srt_text = transcribe(f)
        v = {"id": vid, "title": title, "url": f"https://www.douyin.com/video/{vid}"}
        (WORK / creator["name"] / vid).mkdir(parents=True, exist_ok=True)
        (WORK / creator["name"] / vid / "transcript.srt").write_text(srt_text, encoding="utf-8")
        note = llm_process(creator, v, text)
        md = cdir / f"{safe_name(title)}.md"
        md.write_text(
            f"---\n来源: {v['url']}\n作者: {creator['name']}\n平台: douyin\n---\n\n{note}\n",
            encoding="utf-8",
        )
        state[vid] = {"title": title, "file": str(md.relative_to(ROOT))}
        save_state(state)
        f.unlink(missing_ok=True)  # 处理完删视频省空间
        print(f"  -> {md.name}")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--creator", type=int, help="只处理 config 中第 N 个博主（从0开始）")
    ap.add_argument("--list-only", action="store_true")
    ap.add_argument("--inbox", action="store_true", help="处理本地抖音收件箱视频")
    ap.add_argument("--local-subtitle", action="store_true",
                    help="本地无 GPU 模式：只抓 CC 字幕写 video2kb-inbox，无字幕的列出待服务器转写")
    ap.add_argument("--links", help="按链接文件抓字幕（每行一个 B站 链接，可选 'URL | 标题'）")
    args = ap.parse_args()

    state = load_state()
    if args.links:
        path = Path(args.links)
        if not path.is_absolute():
            path = Path.cwd() / path
        items = []
        for line in path.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if "|" in line:
                url, title = [x.strip() for x in line.split("|", 1)]
            else:
                url, title = line, line
            items.append((url, title))
        process_links_subtitles(items, state)
        return
    if args.local_subtitle:
        creators = CONFIG["creators"] if args.creator is None else [CONFIG["creators"][args.creator]]
        for c in creators:
            if c["platform"] == "bilibili":
                process_local_subtitles(c, state)
        return
    if args.inbox:
        douyin = [c for c in CONFIG["creators"] if c["platform"] == "douyin"]
        process_inbox(douyin[0] if douyin else {"name": "抖音"}, state)
        build_index(state)
        return
    creators = CONFIG["creators"] if args.creator is None else [CONFIG["creators"][args.creator]]
    if args.list_only:
        for c in creators:
            list_videos(c)
        return
    for c in creators:
        process_creator(c, state)
    build_index(state)


if __name__ == "__main__":
    main()
