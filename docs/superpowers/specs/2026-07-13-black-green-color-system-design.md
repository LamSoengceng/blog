# Black Green Color System Design

## Goal

保留黑色和绿色作为品牌主色，同时增加深绿、薄荷绿、青蓝和琥珀色的语义层级，让首页、博客、训练、算法和市场页面拥有更丰富的颜色衔接。

## Rules

- 黑色只作为页面底色，不让所有卡片都落在纯黑上。
- 深绿用于内容区和普通卡片，中绿用于提升层级和边框。
- 薄荷绿只用于当前状态、关键数字、主要操作和高亮信息。
- 青蓝只用于信息类状态和图表辅助色。
- 琥珀只用于时间节点、提醒和风险提示。
- 正文和次要文字使用偏绿的浅灰，保证深色背景上的阅读对比度。
- 不改变页面布局、文案、数据和交互逻辑。

## Token Set

`--page: #050806`, `--surface: #0b1510`, `--surface-strong: #102018`, `--surface-raised: #195335`, `--accent: #42c979`, `--accent-soft: #8fffc0`, `--info: #75c7db`, `--signal: #e5b86f`, `--text: #ddebe2`.

## Application

- `index.css` owns global tokens, body background, focus rings and shared motion-safe transitions.
- `App.css` owns card surfaces, links, badges, charts, market states and responsive navigation colors.
- Existing `.positive`, `.negative`, `.up`, `.down`, `.warning`, `.impact` selectors map to semantic colors instead of hard-coded green/orange values.

## Verification

- Run `npm run build`.
- Inspect `/`, `/blog`, `/training`, `/algorithm`, `/market` at desktop and 390px widths.
- Verify readable text, visible focus states, positive/negative data distinction, and no console errors.
