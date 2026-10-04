/**
 * generateStockData.mjs
 * 读取 scripts/cache/hithink-bundle.json（由 fetchHithinkData.mjs 生成），
 * 合成 src/data/stockData.ts —— StockPage（A 股股票观察页）的数据源。
 *
 * 用法: node scripts/generateStockData.mjs
 * 安全: 输出只含公开行情数据，不含任何 API Key。
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const bundle = JSON.parse(
  readFileSync(join(root, 'scripts', 'cache', 'hithink-bundle.json'), 'utf8'),
)

const fmtPrice = (v) =>
  v == null
    ? '—'
    : v.toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
const fmtSigned = (v) => (v == null ? '—' : `${v > 0 ? '+' : ''}${v.toFixed(2)}`)
const fmtPct = (v) => (v == null ? '—' : `${v > 0 ? '+' : ''}${v.toFixed(2)}%`)
const fmtYi = (yuan) => {
  if (yuan == null) return '—'
  const yi = yuan / 1e8
  return yi >= 10000 ? `${(yi / 1e4).toFixed(2)}万亿` : `${yi.toFixed(0)}亿`
}
const fmtYi2 = (yuan) => (yuan == null ? '—' : `${(yuan / 1e8).toFixed(2)}亿`)

// 交易日：历史最后一条 bar 的 date_ms（上游按 UTC 零点给出，交易日按北京时间 +8 取日期）
function tradingDateOf(history) {
  const last = history.at(-1)
  if (!last?.date_ms) return null
  const d = new Date(last.date_ms + 8 * 3600 * 1000)
  const y = d.getUTCFullYear()
  const m = String(d.getUTCMonth() + 1).padStart(2, '0')
  const day = String(d.getUTCDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

// 指数名称表（thscode -> 展示信息）
const INDEX_META = {
  '000001.SH': { name: '上证指数', region: 'A股主板' },
  '000300.SH': { name: '沪深300', region: '核心资产' },
  '000905.SH': { name: '中证500', region: '中盘成长' },
  '000852.SH': { name: '中证1000', region: '小盘弹性' },
  '399006.SZ': { name: '创业板指', region: '成长风格' },
  '000688.SH': { name: '科创50', region: '硬科技' },
  '399001.SZ': { name: '深证成指', region: '深市主板' },
}

// ---- stockIndices：真实 A 股指数（含深证成指） ----
const stockIndices = []
for (const snap of bundle.indexSnapshot) {
  const meta = INDEX_META[snap.thscode]
  if (!meta) continue
  const hist = bundle.history[snap.thscode] ?? []
  const trend = hist.slice(-10).map((bar) => bar.close_price)
  stockIndices.push({
    name: meta.name,
    symbol: snap.thscode,
    region: meta.region,
    value: fmtPrice(snap.last_price),
    change: fmtSigned(snap.price_change),
    changePct: fmtPct(snap.price_change_ratio_pct),
    trend,
  })
}

// ---- sectorPulse：行业/概念指数（真实涨跌幅） ----
const SECTOR_META = [
  { code: '881121.TI', name: '半导体', note: '高弹性行业，重点看成交额放大是否持续。' },
  { code: '885957.TI', name: 'AI算力', note: '东数西算(算力)概念指数，主题强时容易拥挤。' },
  { code: '886072.TI', name: '高股息', note: '高股息精选概念，防御风格，和利率、避险偏好相关。' },
  { code: '881273.TI', name: '消费复苏', note: '以白酒行业指数代表消费链条景气验证。' },
  { code: '885531.TI', name: '新能源', note: '光伏概念指数，供给出清和价格周期是核心变量。' },
  { code: '881157.TI', name: '券商', note: '证券行业指数，常作为风险偏好和成交额弹性的放大器。' },
]
const sectorPulse = []
for (const meta of SECTOR_META) {
  const snap = bundle.indexSnapshot.find((i) => i.thscode === meta.code)
  if (!snap) continue
  sectorPulse.push({
    name: meta.name,
    changePct: fmtPct(snap.price_change_ratio_pct),
    breadth: 'n/a', // hithink 快照不提供板块内上涨家数占比
    note: `${meta.note}（指数代码 ${meta.code}）`,
  })
}

// ---- watchlist：ETF 基金快照（真实行情） ----
const FUND_META = {
  '510300.SH': { name: '沪深300ETF', category: '核心仓', note: '用于观察大盘核心资产，不等同于买入建议。' },
  '510500.SH': { name: '中证500ETF', category: '中盘', note: '适合作为中盘景气和市场广度的观察锚。' },
  '512100.SH': { name: '中证1000ETF', category: '小盘', note: '波动弹性高，50w 账户要限制仓位拥挤。' },
  '588000.SH': { name: '科创50ETF', category: '硬科技', note: '关注半导体、AI、创新药等成长估值修复。' },
  '159915.SZ': { name: '创业板ETF', category: '成长', note: '和风险偏好、美债利率、成长股情绪联动更强。' },
  '512480.SH': { name: '半导体ETF', category: '行业主题', note: '主题弹性大，适合监控成交额和拥挤度。' },
  '515880.SH': { name: '通信ETF', category: 'AI链条', note: '关注算力、光模块、运营商资本开支。' },
  '512800.SH': { name: '银行ETF', category: '红利/防御', note: '适合观察高股息、防御风格和利率预期。' },
  '513180.SH': { name: '恒生科技ETF', category: '港股弹性', note: '受港股流动性、美元利率和互联网监管预期影响。' },
  '159941.SZ': { name: '纳指ETF', category: '海外映射', note: '不作为 A 股替代，只看全球科技风险偏好。' },
}
const watchlist = []
for (const [code, meta] of Object.entries(FUND_META)) {
  const snap = bundle.fundSnapshots[code]
  if (!snap) continue
  watchlist.push({
    symbol: snap.ticker,
    name: meta.name,
    category: meta.category,
    price: snap.last_price?.toFixed(3) ?? '—',
    changePct: fmtPct(snap.price_change_ratio_pct),
    note: meta.note,
  })
}

// ---- domesticFlows：真实成交额（turnover 单位元） ----
function turnoverOf(code) {
  return bundle.indexSnapshot.find((i) => i.thscode === code)?.turnover ?? null
}
const shTurnover = turnoverOf('000001.SH')
const szTurnover = turnoverOf('399001.SZ')
const cybTurnover = turnoverOf('399006.SZ')
const totalTurnover = shTurnover != null && szTurnover != null ? shTurnover + szTurnover : null
const pctOf = (part, whole) =>
  part != null && whole != null && whole > 0 ? `${((part / whole) * 100).toFixed(1)}%` : '—'
const domesticFlows = [
  {
    name: '两市成交额',
    value: fmtYi(totalTurnover),
    state: totalTurnover != null ? `${fmtYi(totalTurnover)}（沪+深）` : '—',
    note: '沪市+深市成交额合计（hithink 指数快照口径），判断行情级别的第一层过滤器。',
  },
  {
    name: '沪市成交额',
    value: fmtYi(shTurnover),
    state: `占两市 ${pctOf(shTurnover, totalTurnover)}`,
    note: '沪市主板与科创板合计成交，观察权重与大盘活跃度。',
  },
  {
    name: '深市成交额',
    value: fmtYi(szTurnover),
    state: `占两市 ${pctOf(szTurnover, totalTurnover)}`,
    note: '深市主板与中小盘成交，观察成长与题材活跃度。',
  },
  {
    name: '创业板成交额',
    value: fmtYi(cybTurnover),
    state: `占深市 ${pctOf(cybTurnover, szTurnover)}`,
    note: '成长风格成交占比，50w 账户重点关注 ETF 资金而不是短线热榜。',
  },
]

// ---- stockMeta ----
const tradingDate = tradingDateOf(bundle.history['000001.SH'] ?? [])
const stockMeta = {
  updatedAt: tradingDate ? `${tradingDate} 收盘` : '—',
  sourceMode: 'hithink-finance（同花顺）真实行情',
  trackedMarkets: stockIndices.length,
  watchlistSize: watchlist.length,
  nextRefresh: '交易日收盘后运行更新脚本刷新',
  capitalProfile: '50w RMB reference account',
}

// ---- 特色数据（special-data） ----
const special = bundle.special ?? {}

// 涨停池：第一页（按封单/连板排序展示 top）
const limitUpItems = special.limitUp?.item ?? []
const limitUpTotal = special.limitUp?.pagination?.total ?? limitUpItems.length
const limitUpTop = limitUpItems.slice(0, 12).map((it) => ({
  ticker: it.ticker,
  name: it.name,
  price: it.last_price?.toFixed(2) ?? '—',
  pct: fmtPct(it.price_change_ratio_pct),
  limitUpTime: it.limit_up_time ?? '—',
  boards: it.continue_day_text ?? `${it.continue_day_cnt ?? 1}板`,
  reason: it.limit_up_reason ?? '',
  sealMoney: it.seal_money != null ? `${(it.seal_money / 1e8).toFixed(1)}亿` : '—',
}))

// 炸板池
const limitBreakItems = special.limitBreak?.item ?? []
const limitBreakTop = limitBreakItems.slice(0, 8).map((it) => ({
  ticker: it.ticker,
  name: it.name,
  price: it.last_price?.toFixed(2) ?? '—',
  pct: fmtPct(it.price_change_ratio_pct),
  openTimes: it.open_times ?? '—',
  turnover: it.turnover != null ? fmtYi(it.turnover) : '—',
}))

// 连板天梯：30 天窗口，取最新交易日的各档位
const ladderItems = special.ladder?.item ?? []
const ladderLatest = ladderItems[0] // date 降序，第一条最新
const BOARD_LABELS = [
  { key: 'two_board', label: '2板' },
  { key: 'three_board', label: '3板' },
  { key: 'four_board', label: '4板' },
  { key: 'five_board', label: '5板' },
  { key: 'six_board', label: '6板' },
  { key: 'seven_over', label: '7板+' },
]
const ladderBoards = (ladderLatest?.boards
  ? BOARD_LABELS.map(({ key, label }) => {
      const list = ladderLatest.boards[key] ?? []
      return {
        label,
        count: list.length,
        names: list.slice(0, 3).map((b) => b.name),
      }
    })
  : []
).filter((b) => b.count > 0)

// 热股榜
const hotStockItems = special.hotStock?.item ?? []
const hotStocks = hotStockItems.slice(0, 10).map((it) => ({
  rank: it.rank,
  ticker: it.ticker,
  name: it.name,
  heat: it.heat ?? '—',
  rankChange: it.rank_change ?? 0,
}))

// 飙升榜
const skyrocketItems = special.skyrocket?.item ?? []
const skyrockets = skyrocketItems.slice(0, 10).map((it) => ({
  rank: it.rank,
  ticker: it.ticker,
  name: it.name,
  heat: it.heat ?? '—',
  rankChange: it.rank_change ?? 0,
}))

// 龙虎榜
const dragonItems = special.dragonTiger?.stock_items ?? []
const dragonTigerTop = dragonItems.slice(0, 10).map((it) => ({
  rank: it.hot_rank ?? '—',
  ticker: it.ticker,
  name: it.name,
  pct: fmtPct((it.change ?? 0) * 100),
  netValue: fmtYi2(it.net_value),
  orgNet: fmtYi2(it.org_net_value),
  hotMoneyNet: fmtYi2(it.hot_money_net_value),
  concepts: (it.concept_list ?? []).map((c) => c.name).slice(0, 3),
}))

// 广度汇总（涨停家数 / 炸板家数 / 榜单日期）
const stockBreadth = {
  tradeDate: special.limitUp?.pagination ? tradingDate : null,
  limitUpCount: limitUpTotal,
  limitBreakCount: limitBreakItems.length,
  hotStockCount: hotStockItems.length,
}

// ---- 海外变量与事件（hithink A 股数据服务不覆盖，保留为静态参考） ----
const globalSignals = [
  {
    name: '美元兑离岸人民币',
    value: '静态参考',
    change: '—',
    read: 'hithink A 股服务不提供汇率行情；人民币压力上升时外资和港股风险偏好通常承压。',
  },
  {
    name: '10Y美债收益率',
    value: '静态参考',
    change: '—',
    read: '美债下行通常利好成长估值，需结合通胀数据；建议接入 FRED 等外部源。',
  },
  {
    name: '美元指数',
    value: '静态参考',
    change: '—',
    read: '美元走强会影响新兴市场资金和大宗商品。',
  },
  {
    name: 'COMEX黄金',
    value: '静态参考',
    change: '—',
    read: '避险或实际利率变化会影响有色、贵金属和风险偏好。',
  },
  {
    name: '布伦特原油',
    value: '静态参考',
    change: '—',
    read: '油价影响通胀预期、化工链和航空运输成本。',
  },
  {
    name: '纳指期货',
    value: '静态参考',
    change: '—',
    read: '用于判断全球科技链条对 A 股成长风格的外溢影响。',
  },
]

const stockEvents = [
  {
    date: '每周',
    title: '国内宏观数据：社融、M2、CPI/PPI（需外部源）',
    impact: 'High',
    note: '决定政策预期、顺周期风格和债股跷跷板；hithink 不提供宏观日历。',
  },
  {
    date: '每周',
    title: '重要行业政策与交易所公告',
    impact: 'High',
    note: 'A 股主题交易对政策边际变化非常敏感。',
  },
  {
    date: '每周',
    title: '美股科技财报与纳指波动',
    impact: 'Medium',
    note: '影响 AI、半导体、港股科技和成长风格映射。',
  },
  {
    date: '每月',
    title: '美国 CPI / 非农 / FOMC',
    impact: 'High',
    note: '通过美元、美债、人民币汇率影响国内风险偏好。',
  },
]

const capitalMetrics = [
  {
    label: '参考资金规模',
    value: '50w',
    note: '页面按中等资金账户设计，强调仓位、回撤和流动性。',
  },
  {
    label: '单一方向上限',
    value: '15%',
    note: '主题、行业或个股暴露过高时需要提示。',
  },
  {
    label: '现金/货基缓冲',
    value: '20%',
    note: '用于应对波动、补仓和错过行情后的再平衡。',
  },
  {
    label: '回撤预警',
    value: '-8%',
    note: '不是强制止损线，而是触发复盘和降风险的阈值。',
  },
]

const stockChecklist = [
  '仓位：总仓位、单行业暴露、单一主题暴露是否超过计划。',
  '市场状态：指数方向、成交额、涨停家数与连板高度是否支持进攻。',
  '涨停结构：首板/连板梯队是否健康，炸板率是否抬升。',
  '资金结构：两市成交额与 ETF 行情是否一致；融资余额等需外部源补充。',
  '行业拥挤：热门行业是否只有少数龙头上涨，还是板块广度同步扩散。',
  '龙虎榜与热榜：观察机构/游资动向，不机械跟随热度。',
  '外部变量：美元/人民币、美债、纳指、黄金、原油是否改变风险预算。',
]

const stockDataPlan = [
  '真实行情：hithink-finance CLI（同花顺）index snapshot / fund snapshot 拉取指数与 ETF 快照。',
  '涨停结构：special limit-up-pool / limit-break-pool / limit-up-ladder 取涨停池、炸板池与连板天梯。',
  '市场热度：special hot-stock / skyrocket / dragon-tiger 取热股榜、飙升榜与龙虎榜。',
  '行业板块：index catalog 行业/概念指数（.TI）映射页面 6 个板块，取真实涨跌幅。',
  '更新链路：npm run update:stock（交易日收盘后运行）。',
  '前端只读取生成的数据文件，不暴露任何 API key；失败时保留上一版并显示 stale 状态。',
]

// ---- 输出 stockData.ts ----
const output = `// 本文件由 scripts/generateStockData.mjs 自动生成，请勿手改。
// 数据源: hithink-finance（同花顺金融数据服务），数据日期: ${stockMeta.updatedAt}
// 生成时间: ${new Date().toISOString()}
export type StockIndex = {
  name: string
  symbol: string
  region: string
  value: string
  change: string
  changePct: string
  trend: number[]
}

export type WatchItem = {
  symbol: string
  name: string
  category: string
  price: string
  changePct: string
  note: string
}

export type SectorPulse = {
  name: string
  changePct: string
  breadth: string
  note: string
}

export type StockEvent = {
  date: string
  title: string
  impact: 'High' | 'Medium' | 'Low'
  note: string
}

export type CapitalMetric = {
  label: string
  value: string
  note: string
}

export type GlobalSignal = {
  name: string
  value: string
  change: string
  read: string
}

export type DomesticFlow = {
  name: string
  value: string
  state: string
  note: string
}

export type LimitUpItem = {
  ticker: string
  name: string
  price: string
  pct: string
  limitUpTime: string
  boards: string
  reason: string
  sealMoney: string
}

export type LimitBreakItem = {
  ticker: string
  name: string
  price: string
  pct: string
  openTimes: number
  turnover: string
}

export type LadderBoard = {
  label: string
  count: number
  names: string[]
}

export type RankItem = {
  rank: number
  ticker: string
  name: string
  heat: string
  rankChange: number
}

export type DragonTigerItem = {
  rank: number | string
  ticker: string
  name: string
  pct: string
  netValue: string
  orgNet: string
  hotMoneyNet: string
  concepts: string[]
}

export const stockMeta = ${JSON.stringify(stockMeta, null, 2)}

export const capitalMetrics: CapitalMetric[] = ${JSON.stringify(capitalMetrics, null, 2)}

export const stockIndices: StockIndex[] = ${JSON.stringify(stockIndices, null, 2)}

export const watchlist: WatchItem[] = ${JSON.stringify(watchlist, null, 2)}

export const sectorPulse: SectorPulse[] = ${JSON.stringify(sectorPulse, null, 2)}

export const domesticFlows: DomesticFlow[] = ${JSON.stringify(domesticFlows, null, 2)}

export const globalSignals: GlobalSignal[] = ${JSON.stringify(globalSignals, null, 2)}

export const stockEvents: StockEvent[] = ${JSON.stringify(stockEvents, null, 2)}

export const stockChecklist = ${JSON.stringify(stockChecklist, null, 2)}

export const stockDataPlan = ${JSON.stringify(stockDataPlan, null, 2)}

export const stockBreadth = ${JSON.stringify(stockBreadth, null, 2)}

export const limitUpTop: LimitUpItem[] = ${JSON.stringify(limitUpTop, null, 2)}

export const limitBreakTop: LimitBreakItem[] = ${JSON.stringify(limitBreakTop, null, 2)}

export const ladderBoards: LadderBoard[] = ${JSON.stringify(ladderBoards, null, 2)}

export const hotStocks: RankItem[] = ${JSON.stringify(hotStocks, null, 2)}

export const skyrockets: RankItem[] = ${JSON.stringify(skyrockets, null, 2)}

export const dragonTigerTop: DragonTigerItem[] = ${JSON.stringify(dragonTigerTop, null, 2)}
`

writeFileSync(join(root, 'src', 'data', 'stockData.ts'), output)
console.log(
  `stockData.ts regenerated: ${stockIndices.length} indices, ${watchlist.length} watch, ${sectorPulse.length} sectors, ${limitUpTop.length} limit-up, ${ladderBoards.length} ladder tiers, ${dragonTigerTop.length} dragon-tiger`,
)
