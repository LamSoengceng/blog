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

## 拉回本地

```bash
scp -r server:/path/video2kb/knowledge_base ./ 
```

knowledge_base 目录直接拖进 Obsidian 即可作为知识库。
