#!/usr/bin/env python3
"""fetch_articles - 抓取公众号技术文章正文，写入 video2kb-inbox/articles/ 供课程深加工。

用法：
    python fetch_articles.py --check data/article-links.txt  # 只预检：能否抓到正文、标题/公众号/字数
    python fetch_articles.py data/article-links.txt          # 抓取正文写入 inbox

链接文件每行：「URL | 公众号名(可选) | 标题(可选)」，# 开头为注释。公众号名与标题
缺省时从页面解析。已抓过的（inbox 里已有 article.md）自动跳过，可反复重跑做增量。

产物布局：video2kb-inbox/articles/<公众号>/<articleId>/article.md，
由每日 22:00 深加工任务（video2kb-lesson skill）读走，source.platform 记为 wechat。

安全边界（防 SSRF）：只接受 https://mp.weixin.qq.com/ 的直链，请求前解析域名并
拒绝解析到私网/环回/链路本地/保留地址的结果，且禁用重定向。
"""
import argparse
import ipaddress
import json
import re
import socket
import sys
import time
from datetime import date
from pathlib import Path
from urllib.parse import urlparse

import requests

try:
    from bs4 import BeautifulSoup
except ImportError:
    sys.exit("缺少依赖：pip install beautifulsoup4")

ROOT = Path(__file__).parent
CONFIG = json.loads((ROOT / "config.json").read_text(encoding="utf-8"))
INBOX = ROOT.parent / CONFIG.get("inbox_dir", "video2kb-inbox/transcripts").replace(
    "/transcripts", "/articles")

ALLOWED_HOST = "mp.weixin.qq.com"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                  "(KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Referer": "https://mp.weixin.qq.com/",
}


def parse_links_file(path):
    """读链接文件，每行「URL | 公众号名(可选) | 标题(可选)」，# 开头为注释。"""
    path = Path(path)
    if not path.is_absolute():
        path = Path.cwd() / path
    items = []
    for line in path.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        parts = [x.strip() for x in line.split("|")]
        url = parts[0]
        account = parts[1] if len(parts) > 1 and parts[1] else None
        title = parts[2] if len(parts) > 2 and parts[2] else None
        items.append((url, account, title))
    return items


def article_id(url):
    """微信文章 ID：/s/ 短链 token，或查询串里的 sn。"""
    m = re.search(r"mp\.weixin\.qq\.com/s/([A-Za-z0-9_-]+)", url)
    if m:
        return m.group(1)
    m = re.search(r"[?&]sn=([A-Za-z0-9_-]+)", url)
    return m.group(1) if m else None


def guard_url(url):
    """SSRF 边界：协议/域名白名单 + 解析结果不得指向内网。返回错误文案或 None。"""
    p = urlparse(url)
    if p.scheme != "https" or (p.hostname or "").lower() != ALLOWED_HOST:
        return f"仅支持 https://{ALLOWED_HOST}/ 的文章链接"
    try:
        infos = socket.getaddrinfo(p.hostname, 443, proto=socket.IPPROTO_TCP)
    except OSError as e:
        return f"域名解析失败: {str(e)[:80]}"
    for info in infos:
        ip = ipaddress.ip_address(info[4][0])
        if ip.is_private or ip.is_loopback or ip.is_link_local or ip.is_reserved:
            return f"域名解析到内网地址（{ip}），拒绝请求"
    return None


def fetch_article(url):
    """抓取并解析一篇公众号文章，返回 dict 或 (None, 错误原因)。"""
    err = guard_url(url)
    if err:
        return None, err
    try:
        r = requests.get(url, headers=HEADERS, timeout=20, allow_redirects=False)
    except Exception as e:
        return None, f"请求失败: {str(e)[:120]}"
    if 300 <= r.status_code < 400:
        return None, "微信返回重定向，已按安全策略拒绝跟随（请使用文章最终链接）"
    if r.status_code != 200:
        return None, f"HTTP {r.status_code}"
    html = r.text
    if "js_content" not in html:
        if "环境异常" in html or "verify" in html.lower():
            return None, "触发微信验证页，稍后重试或换网络"
        return None, "页面没有正文（js_content 缺失，可能是被删/仅关注可见）"
    soup = BeautifulSoup(html, "html.parser")
    title = None
    el = soup.select_one("#activity-name")
    if el:
        title = " ".join(el.get_text().split())
    if not title:
        og = soup.find("meta", attrs={"property": "og:title"})
        title = og["content"].strip() if og and og.get("content") else None
    account = None
    el = soup.select_one("#js_name")
    if el:
        account = " ".join(el.get_text().split())
    if not account:
        el = soup.select_one(".rich_media_meta_nickname a, #profileBt")
        account = " ".join(el.get_text().split()) if el else None
    author = None
    el = soup.select_one("#js_author_name, .rich_media_meta_text")
    if el:
        candidate = " ".join(el.get_text().split())
        if candidate and candidate not in ("", account):
            author = candidate
    content = soup.select_one("#js_content")
    if content is None:
        return None, "js_content 为空"
    body = extract_text(content)
    if len(body) < 200:
        return None, f"正文过短（{len(body)} 字），疑似未加载完整"
    return {
        "title": title,
        "account": account,
        "author": author,
        "body": body,
        "chars": len(body),
    }, None


def extract_text(content):
    """正文提取：代码块先占位保护，get_text 后还原为围栏代码块。"""
    codes = []
    for pre in content.find_all("pre"):
        codes.append(pre.get_text())
        pre.replace_with(f"\n@@CODE{len(codes) - 1}@@\n")
    for tag in content.find_all(["script", "style"]):
        tag.decompose()
    lines = [ln.strip() for ln in content.get_text("\n").splitlines()]
    out, blank = [], 0
    for ln in lines:
        if not ln:
            blank += 1
            if blank <= 1:
                out.append("")
            continue
        blank = 0
        m = re.fullmatch(r"@@CODE(\d+)@@", ln)
        if m:
            code = codes[int(m.group(1))].rstrip()
            out.append("```")
            out.extend(code.splitlines())
            out.append("```")
        else:
            out.append(ln)
    return "\n".join(out).strip()


def safe_name(s):
    return re.sub(r'[\\/:*?"<>|\s]+', "-", s)[:40] or "未知公众号"


def process(items, check_only=False):
    ok, failed = [], []
    for i, (url, account_hint, title_hint) in enumerate(items, 1):
        aid = article_id(url)
        if not aid:
            print(f"[{i}/{len(items)}] ✗ 无法解析文章 ID（需 mp.weixin.qq.com/s/ 或 sn= 链接）: {url[:80]}")
            failed.append((url, "无法解析文章 ID"))
            continue
        dest = INBOX / safe_name(account_hint or "") / aid
        if not check_only and (dest / "article.md").exists():
            print(f"[{i}/{len(items)}] ↷ 已抓过，跳过: {aid}")
            continue
        data, err = fetch_article(url)
        if data is None:
            print(f"[{i}/{len(items)}] ✗ {err}: {url[:80]}")
            failed.append((url, err))
            continue
        account = account_hint or data["account"] or "未知公众号"
        title = title_hint or data["title"] or aid
        print(f"[{i}/{len(items)}] ✓《{title}》—— {account}，{data['chars']} 字"
              + (f"，署名 {data['author']}" if data["author"] else ""))
        ok.append((aid, account, title, data["chars"]))
        if not check_only:
            dest.mkdir(parents=True, exist_ok=True)
            meta = [
                "---",
                f"来源: {url}",
                f"公众号: {account}",
                f"标题: {title}",
            ]
            if data["author"]:
                meta.append(f"署名: {data['author']}")
            meta.append(f"抓取日期: {date.today().isoformat()}")
            (dest / "article.md").write_text(
                "\n".join(meta) + "\n---\n\n" + data["body"] + "\n", encoding="utf-8")
            print(f"    -> {dest / 'article.md'}")
        time.sleep(1.5)  # 微信对同 IP 连续请求有频率限制
    print(f"\n完成：成功 {len(ok)}，失败 {len(failed)}")
    for url, err in failed:
        print(f"  ✗ {url[:80]} —— {err}")
    return ok, failed


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("links", nargs="?", default="data/article-links.txt",
                    help="链接文件（每行 URL | 公众号名(可选) | 标题(可选)）")
    ap.add_argument("--check", action="store_true", help="只预检不落盘")
    args = ap.parse_args()
    items = parse_links_file(args.links)
    if not items:
        print(f"{args.links} 没有待处理链接（每行 URL | 公众号名(可选)，# 为注释）")
        return
    print(f"共 {len(items)} 条链接{'（预检模式）' if args.check else ''}")
    if not args.check:
        INBOX.mkdir(parents=True, exist_ok=True)
    process(items, check_only=args.check)


if __name__ == "__main__":
    main()
