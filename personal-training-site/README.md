# Personal Training Site

一个个人主页 demo，健身数据作为其中一个内容栏目展示。当前版本使用静态脱敏数据，后续可以接入训记 Open API 的本地同步脚本，把训练数据聚合成公开 JSON 后再展示到 GitHub Pages。

## 技术栈

- Vite
- React
- TypeScript
- CSS
- GitHub Pages friendly static build

## 当前 demo 包含

- 个人主页首屏
- 独立主板块路由：`/training`、`/algorithm`
- 健身数据核心指标
- 主项估算 1RM 趋势图
- 肌群热力图：基于 `react-body-highlighter` 展示前后视图肌群覆盖
- 核心动作知识标签，部分来自 `hasaneyldrm/exercises-dataset`
- 核心动作详情页：`/training/:movementId`
- 动作媒体占位区，后续可接入授权 GIF 或视频
- 肌群周组数示例
- PR 时间线
- 下周训练策略
- 算法学习栏目：`/algorithm`
- LeetCode 题目详情页：`/algorithm/:problemSlug`
- Hot100 分类进度、面试写法、题解思路和本地注释里的踩坑记录
- 数据更新流程说明
- 项目和日志栏目占位

## 安全设计

前端不直接请求训记 API，也不保存 API key。推荐流程是：

```text
训记 API -> 本地同步脚本 -> 脱敏聚合 JSON -> 静态网页展示
```

后续真实接入时，API key 只放在本机 `.env.local` 或其他不提交到 Git 的本地配置中。

## 数据来源

- 训练表现数据：训记 Open API 的本地缓存聚合结果。
- 动作知识元数据：[`hasaneyldrm/exercises-dataset`](https://github.com/hasaneyldrm/exercises-dataset)，当前只使用动作名称、器械、目标肌群、协同肌群和中文提示摘要。
- 肌群热力图：[`react-body-highlighter`](https://github.com/GV79/react-body-highlighter)，其 SVG polygons 来源说明见该库 README。
- 算法学习数据：本机 `C:/Project/leetcode` 下的 `LeetCode-Hot100-Progress.md` 和 Python 题解注释生成。

## 本地运行

```bash
npm install
npm run dev
```

默认开发地址：

```text
http://localhost:5173
```

## 构建

```bash
npm run build
```

构建产物会生成到 `dist/`。

## 更新算法学习数据

继续刷题或修改 Python 注释后，运行：

```bash
npm run generate:algorithms
```

脚本会读取 `C:/Project/leetcode`，重新生成 `src/data/algorithmData.ts`。网页只展示题号、题名、相对文件名、思路、易错点和代码摘录；不会把本地绝对路径写进前端数据。

## 建议学习路线

1. 先读 `src/App.tsx`，理解页面如何由组件和数组数据渲染出来。
2. 再读 `src/data/fitnessData.ts`，理解 TypeScript 类型和静态数据结构。
3. 修改 `src/App.css`，练习布局、响应式和视觉样式。
4. 后续加入 `public/data/*.json`，把静态 TS 数据替换为 fetch JSON。
5. 再写 `scripts/sync-xunji-data.ts`，从训记 API 生成公开数据。
6. 读 `scripts/generateAlgorithmData.mjs`，理解如何从 Markdown 和 Python 注释生成前端数据。

## 后续迭代方向

- 把项目页、日志页继续拆成独立路由。
- 接入 Recharts 或 ECharts，替换当前 CSS demo 图表。
- 增加训练日历热力图。
- 增加“计划 vs 实际”完成率。
- 增加 Agent 周报生成。
- 增加人工确认后写回训记的私有后台。
- 在动作详情页接入授权明确的 GIF 或视频资源。
- 把算法题解数据从静态 TS 文件升级为公开 JSON。
- 增加题型筛选、搜索、复习状态和刷题时间线。
