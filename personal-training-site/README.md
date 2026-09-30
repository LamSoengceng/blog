# Personal Training Site

个人工作台站点：训练数据、算法复习、费曼练习、手写日记和学习记录集中在一个静态前端里。
训练与算法数据由本地脚本从私有来源生成成静态 JSON/TS，前端只读取公开数据，不持有任何密钥。

## 技术栈

- Vite + React + TypeScript
- Tailwind（局部）+ 手写 CSS
- react-router 路由，页面级懒加载
- 静态构建，可托管在任意静态服务

## 页面

| 路由 | 内容 |
| --- | --- |
| `/` | 首页：站点导览与各板块入口 |
| `/blog`、`/blog/:slug` | 博客列表与详情 |
| `/training` | 自我提升：训练指标、1RM 趋势、肌群热力图、PR、手写日记、心情曲线、习惯打卡、训记同步面板 |
| `/training/:movementId` | 动作详情：知识标签、进步趋势、训练建议 |
| `/algorithm`、`/algorithm/:slug` | Hot100 进度、分类、题解思路、踩坑记录与代码 |
| `/algorithm/review` | 快速复习：原题、要点、填空回忆、费曼检验、Leitner 间隔调度 |
| `/feynman` | 费曼练习：选知识点讲述 → 模型评估 → 记录沉淀（含口述输入与小黑板） |
| `/market` | A 股观察面板 |
| `/projects` | 项目清单 |
| `/wrapped` | 年度回顾：全站数据聚合成一页 |
| `/ask` | Ask My Site：站内内容本地检索 + BYOK 问答 |

个人记录（日记、复习进度、费曼记录、习惯打卡、设置）全部存在浏览器 `localStorage`，不上传。

## 安全设计

前端不直接请求训记 API，也不保存 API key：

```text
训记 API -> 本地同步脚本 -> 聚合后的静态数据 -> 静态网页展示
```

API key 只放在本机 `.env.local`（已被 `.gitignore` 排除）。浏览器的 BYOK AI Key 只存
`localStorage`，由用户自己填写。

## 数据来源

- 训练数据：训记 App API 的本地同步结果（`npm run sync:xunji`）。
- 动作知识元数据：[`hasaneyldrm/exercises-dataset`](https://github.com/hasaneyldrm/exercises-dataset)。
- 肌群热力图：[`react-body-highlighter`](https://github.com/GV79/react-body-highlighter)。
- 算法学习数据：本机 `C:/Project/leetcode` 下的进度表和 Python 题解注释。

## 本地运行

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # 产物在 dist/
npm run preview  # 预览构建产物，http://localhost:4173
```

## 数据更新

```bash
npm run generate:algorithms   # 读 C:/Project/leetcode，重新生成题库数据（有缓存可离线）
npm run enrich:llm            # 可选：用 LLM 提炼复习要点
npm run sync:xunji            # 同步训记活动数据（需 .env.local 里的 XUNJI_API_KEY）
```

两个脚本都只写 `src/data/` 下的公开数据，不把本地绝对路径写进前端。
`sync:xunji` 同日期有 90 秒限频；若全部日期都抓取失败（如 token 失效），脚本会保留旧数据并退出。
