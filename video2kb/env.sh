# video2kb 运行环境：faster-whisper 需要 pip 版 CUDA 运行库
# 用法: source /root/video2kb/env.sh（服务器/Linux）；Windows 本地无需此文件
SP=/opt/conda/lib/python3.12/site-packages/nvidia
export LD_LIBRARY_PATH="$SP/cublas/lib:$SP/cudnn/lib:$LD_LIBRARY_PATH"
export HF_ENDPOINT=https://hf-mirror.com

# API key 等私密配置放 .env（不进版本库）
if [ -f /root/video2kb/.env ]; then
  . /root/video2kb/.env
fi
