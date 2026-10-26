#!/usr/bin/env python3
"""本地抖音抓取（抖音 API 风控严格，改用分享链接 + yt-dlp 单视频下载）。

用法（在本地电脑）：
    1. 在抖音把要转的视频逐个「分享 -> 复制链接」，粘贴进 links.txt（一行一个）
    2. python douyin_local.py --fetch        # 下载到 douyin_inbox/
    3. python douyin_local.py --upload       # 传到 hz01 服务器转写加工
"""
import argparse
import json
import re
from pathlib import Path

import yt_dlp

ROOT = Path(__file__).parent
CONFIG = json.loads((ROOT / "config.json").read_text(encoding="utf-8"))
INBOX = ROOT / "douyin_inbox"
LINKS = ROOT / "links.txt"


def build_cookies():
    """把 F12 Cookie 头转成 Netscape cookies.txt。密钥文件不在 git 内，回退到源项目目录读取。"""
    config_dir = Path(CONFIG.get("config_dir", str(ROOT)))
    header = None
    for base in (ROOT, config_dir):
        p = base / "cookie_header_douyin.txt"
        if p.exists():
            header = p
            break
    if header is None:
        raise SystemExit("缺少 cookie_header_douyin.txt（源项目目录也没有）")
    raw = re.sub(r"^Cookie\s*:\s*", "", header.read_text(encoding="utf-8").strip(), flags=re.I)
    merged = []
    for pair in raw.split(";"):
        if "=" not in pair:
            continue
        k, v = pair.strip().split("=", 1)
        k, v = k.strip(), v.strip()
        if not k or any(c in k for c in "\t "):
            continue
        merged.append(f".douyin.com\tTRUE\t/\tTRUE\t0\t{k}\t{v}")
    out = ROOT / "cookies_douyin.txt"
    out.write_text("# Netscape HTTP Cookie File\n" + "\n".join(merged) + "\n", encoding="utf-8")
    return out


def safe_name(s):
    return re.sub(r'[\\/:*?"<>|\s]+', "-", s)[:60] or "untitled"


def fetch():
    if not LINKS.exists():
        raise SystemExit("请先创建 links.txt，每行一个分享链接")
    links = [l.strip() for l in LINKS.read_text(encoding="utf-8").splitlines() if l.strip()]
    INBOX.mkdir(exist_ok=True)
    cookiefile = str(build_cookies())
    for i, url in enumerate(links, 1):
        print(f"[{i}/{len(links)}] {url[:60]}")
        opts = {
            "cookiefile": cookiefile,
            "outtmpl": str(INBOX / "%(id)s %(title).80s.%(ext)s"),
            "format": "best",
            "quiet": True, "noplaylist": True, "retries": 3,
        }
        try:
            with yt_dlp.YoutubeDL(opts) as ydl:
                info = ydl.extract_info(url, download=True)
                print("  ->", info.get("title", "")[:50])
        except Exception as e:
            print("  失败:", str(e)[:150])


def upload():
    import subprocess
    subprocess.run(["scp", "-r", str(INBOX), "hz01:/root/video2kb/data/"], check=True)
    print("已上传到 hz01:/root/video2kb/data/douyin_inbox/，接着在服务器跑: python main.py --inbox")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--fetch", action="store_true")
    ap.add_argument("--upload", action="store_true")
    args = ap.parse_args()
    if args.fetch:
        fetch()
    elif args.upload:
        upload()
    else:
        ap.print_help()


if __name__ == "__main__":
    main()
