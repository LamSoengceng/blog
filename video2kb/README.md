# video2kb — B站/抖音视频批量转知识库

批量把指定博主的视频转成结构化 Markdown 笔记。在带 GPU 的云服务器（智川云 2080 Ti）上运行；本地无 GPU 机器可用 `--local-subtitle` 只抓 CC 字幕（零 GPU）。

## 流程

```
博主主页 → 拉视频列表 → 优先下CC字幕（免费）
                      └→ 无字幕则下音轨 → faster-whisper large-v3 转写（GPU）
          → LLM 加工（核心结论/大纲/知识卡片/追问）
          → knowledge_base/博主名/*.md + 总索引
```

## 部署

### 服务器（hz01）

依赖已装好（faster-whisper、yt-dlp、zhipuai、CUDA 运行库），模型已缓存。
每次新开 shell 先激活环境：

```bash
source /root/video2kb/env.sh     # 设置 CUDA 库路径 + HF 国内镜像
export ZHIPU_API_KEY=你的key      # glm-4-flash 免费模型
```

### 本地（Windows，无 NVIDIA GPU 也可）

本地走 **Const-me/Whisper CLI（DirectCompute）**，支持 AMD / Intel / NVIDIA 显卡：

```bash
pip install yt-dlp zhipuai
python main.py --local-subtitle   # 只抓 CC 字幕 → video2kb-inbox/transcripts/<创作者>/<视频ID>/transcript.srt
python main.py --links links.txt  # 按任意 B站 链接抓字幕/转写（每行 "URL | 标题"）
```

- 有 CC 字幕：直接抓字幕，零 GPU 成本。
- 无 CC 字幕：自动下载音轨 → ffmpeg 转 16kHz 单声道 → 本地 GPU 转写（`config.json` 的 `local_whisper`）。
- **需要的文件（不入 git，需自行放置）**：
  - `tools/whisper-cli/main.exe` + `Whisper.dll`（来自 [Const-me/Whisper](https://github.com/Const-me/Whisper/releases) 的 `cli.zip`）
  - `models/ggml-large-v2.bin`（约 3GB，来自 [whisper.cpp 模型库](https://huggingface.co/ggerganov/whisper.cpp) 或 `hf-mirror.com`）。**注意：这版 Const-me CLI（1.12.0）不支持 large-v3**，会报 `model is not multilingual` 并输出乱码，请用 large-v2 或 medium。
  - 没有 large-v3 时会退回 `models/ggml-base.bin`（质量较低）
- 显卡选择：`python main.py --links ...` 使用 `config.json` 的 `local_whisper.gpu`；可用 `tools/whisper-cli/main.exe -la` 查看可用显卡编号。
- 本地转写失败（模型/CLI/ffmpeg 缺失）时，才会把这些视频标为「需服务器转写」。

**cookie（抖音必需，B站建议）**：用浏览器插件 "Get cookies.txt" 导出
douyin.com（或 bilibili.com）登录后的 cookie，存为 `cookie_header_bilibili.txt` /
`cookie_header_douyin.txt`（F12 复制的 Cookie 头亦可）。密钥文件不在 git 仓库内，
本仓库通过 `config.json` 的 `config_dir` 回退到源项目目录读取。

## 配置 config.json

把 `creators` 换成你要的博主：

```json
{
  "creators": [
    {"name": "某UP主", "platform": "bilibili", "url": "https://space.bilibili.com/123456/video"},
    {"name": "某博主", "platform": "douyin", "url": "https://www.douyin.com/user/xxxxx"}
  ],
  "max_videos_per_creator": 0
}
```

`max_videos_per_creator` 设为 0 处理全部；先试跑可设 3。

## 使用

```bash
python main.py --list-only        # 先只拉列表，确认能取到视频
python main.py --creator 0        # 处理第一个博主
python main.py                    # 全部博主
python main.py --local-subtitle   # 本地无 GPU：只抓 CC 字幕
```

长时间批量跑建议放 tmux 里（`tmux new -s kb`），断开 SSH 不中断。

- 断点续跑：中断后重跑自动跳过已完成的（记录在 `data/processed.json`）
- 视频列表有缓存（`data/list_*.json`），博主更新了新视频就删掉对应缓存重拉
- 转写完自动删除音频；只保留字幕文件，磁盘占用很小
- 按量计费的云服务器，跑完记得关机

## 投稿链接（user-links.txt）

想把任意视频收进知识库，不必等收藏同步或选题搜索：把链接写进
`data/user-links.txt`（每行 `URL | 标题(可选)`，`#` 是注释），每晚 23:00 的
搜集转录任务会**先预检再处理**本文件，可行的链接与当晚搜到的视频一起转录。

```bash
python main.py --check-links data/user-links.txt  # 只预检：平台支持/视频存在/时长/分P/是否已处理，不下载
python main.py --links data/user-links.txt        # 预检通过的链接抓 CC 字幕，无字幕走本地 AMD 转写
```

- 预检规则：B站单P、时长 ≤60 分钟的视频可收；多分P合集、超长视频、已处理过的会被拒并给出原因。
- 抖音直链暂不支持（详情 API 风控），先收藏进账号，由每晚 01:00 的收藏同步任务消化。
- 预检时顺带探测是否有 CC 字幕（无字幕将本地转写，耗时更长但可收）。

## 个人收藏夹 → 知识库（collect_favorites.py）

把 **自己账号的收藏**（而不仅是博主作品）也转进知识库，产出和博主链路相同：
`video2kb-inbox/transcripts/<收藏夹名>/<视频ID>/transcript.srt`，之后由夜间任务统一加工。

```bash
python collect_favorites.py --list                  # 只列出收藏夹和视频清单
python collect_favorites.py --bili                  # 同步B站全部收藏夹到 inbox
python collect_favorites.py --bili --fid 2256390136 # 只同步指定收藏夹
python collect_favorites.py --douyin                # 同步抖音收藏到 inbox（实验性）
```

- **B站（已验证可用）**：列表走官方 Web API（收藏夹列表 + 收藏夹内容，带 Cookie 即可，无需 Wbi 签名），
  API 有 3 次重试 + 翻页 1.5s 间隔（收藏夹接口有 -352 频率风控）。
  UID 自动从 Cookie 的 `DedeUserID` 读取，也可在 `config.json` 的 `favorites.bili_uid` 指定。
- **抖音（浏览器方案，已全链路验证，2026-10 实测抓到 597 条收藏并转写成功）**：`douyin_collect_web.py`。
  抖音已对详情 API 全面升级风控（bd-ticket-guard）：f2 模拟请求 403、yt-dlp 单视频下载同样
  403（Fresh cookies needed），但真实浏览器不受影响。方案 = Playwright 持久化用户目录
  （`data/pw_profile`，扫码一次长期用），列表从收藏页 DOM 抄 `/video/` 链接（网格在内部
  滚动容器里，脚本把所有可滚动容器都推一遍直到连续 4 轮无新视频）；视频在会话内获取：
  短视频走 `<video>` 直链，长视频（MSE blob 流）监听 CDN 分轨请求按 Range 拉全后
  ffmpeg 合流，再交本地 AMD whisper 转写进 inbox。每次运行还会导出浏览器最新 cookie 到
  `cookies_douyin_web.txt`，`main.py` 会优先用它（手工复制的 F12 头会过期）。
  首次需 `python -m playwright install chromium`。
  ```bash
  python douyin_collect_web.py --login   # 有头浏览器扫码登录（一次即可，登录态持久）
  python douyin_collect_web.py --list    # 无头滚动采集收藏列表存 data/douyin_favorites.json
  python douyin_collect_web.py           # 采集 + 新视频自动下载转写进 inbox（--max N 限流试跑）
  ```
  注意：登录账号要与想采集的收藏所属账号一致（多账号可复制脚本换 PROFILE 目录）；
  本地转写不再传提示词（Const-me 带 prompt 遇开场音乐会陷入"请用简体中文字幕"回声死循环）。
- **收藏只收 Agent/编程相关**（用户指定）：两个采集器同步时经 `main.classify_knowledge` 过滤——
  LLM（glm-4-flash）按标题批量判定（15 条/批，偶发 500 自动重试），关键词兜底，
  结果缓存 `data/knowledge_filter.json`（判定一次永久生效）。API key 从 `config_dir/.env`
  自动读取（支持 export 前缀）。想调范围改 `FOCUS_KEYWORDS` 与 classify 的 prompt；
  想重判某条删缓存里对应 id 即可。
- 跳过逻辑与博主链路一致：`data/processed.json` 已有、或 inbox 里已有 transcript 的视频自动跳过，
  可反复重跑做增量同步。
- Cookie 过期的表现：B站 API 返回 code -101、抖音浏览器方案出现登录弹窗（跑 `--login` 重扫）。

## 公众号文章 → 知识库（fetch_articles.py）

把公众号技术文章（腾讯技术、美团技术团队、阿里云开发者等）的正文抓进知识库，
与视频链路共用同一套深加工流程：

```bash
python fetch_articles.py --check data/article-links.txt  # 只预检：能否抓到正文、标题/公众号/字数
python fetch_articles.py data/article-links.txt          # 抓正文 → video2kb-inbox/articles/<公众号>/<文章ID>/article.md
```

- 链接文件每行 `URL | 公众号名(可选) | 标题(可选)`，`#` 是注释。在微信里看到好文章，
  右上角「复制链接」粘贴进来即可；每晚 23:00 任务自动抓取，22:00 深加工任务
  （video2kb-lesson skill）提炼成「观澜」讲义，页面标注「公众号 · 名称」与原文链接。
- 只支持 `https://mp.weixin.qq.com/s/...` 或含 `sn=` 参数的直链；脚本内置 SSRF 边界
  （仅微信域名、禁重定向、拒绝解析到内网的 IP）。公众号没有公开的文章列表 API，
  搜索引擎也不收录，所以**自动追更不可行，手动投链接是唯一稳定通路**——与
  user-links.txt 的用法一致。
- 抓取失败常见原因：微信验证页（稍后重试/换网络）、文章被删或仅关注可见、
  短链被复用（预检会显示实际标题，投喂前可据此核对内容是否符合预期）。
- 依赖 `beautifulsoup4`（`pip install beautifulsoup4`）。

## 拉回本地

```bash
scp -r server:/path/video2kb/knowledge_base ./ 
```

knowledge_base 目录直接拖进 Obsidian 即可作为知识库。
