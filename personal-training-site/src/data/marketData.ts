export type MarketIndex = {
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

export type MarketEvent = {
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

export const marketMeta = {
  updatedAt: '2026-07-10 18:00 CST',
  sourceMode: 'A-share core + global risk variables',
  trackedMarkets: 8,
  watchlistSize: 10,
  nextRefresh: 'A股收盘后 + 美股盘前补充',
  capitalProfile: '50w RMB reference account',
}

export const capitalMetrics: CapitalMetric[] = [
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

export const marketIndices: MarketIndex[] = [
  {
    name: '上证指数',
    symbol: '000001.SH',
    region: 'A股主板',
    value: '3,214.80',
    change: '+18.42',
    changePct: '+0.58%',
    trend: [42, 41, 43, 44, 47, 46, 49, 51, 50, 54],
  },
  {
    name: '沪深300',
    symbol: '000300.SH',
    region: '核心资产',
    value: '3,642.10',
    change: '+16.80',
    changePct: '+0.46%',
    trend: [39, 40, 42, 41, 44, 46, 45, 47, 49, 50],
  },
  {
    name: '中证500',
    symbol: '000905.SH',
    region: '中盘成长',
    value: '5,481.34',
    change: '+41.12',
    changePct: '+0.76%',
    trend: [36, 38, 40, 43, 42, 45, 47, 50, 51, 53],
  },
  {
    name: '中证1000',
    symbol: '000852.SH',
    region: '小盘弹性',
    value: '5,812.22',
    change: '-22.35',
    changePct: '-0.38%',
    trend: [54, 55, 53, 52, 50, 51, 49, 47, 48, 46],
  },
  {
    name: '创业板指',
    symbol: '399006.SZ',
    region: '成长风格',
    value: '1,912.70',
    change: '+23.20',
    changePct: '+1.23%',
    trend: [35, 37, 39, 38, 42, 44, 47, 49, 53, 56],
  },
  {
    name: '科创50',
    symbol: '000688.SH',
    region: '硬科技',
    value: '842.55',
    change: '+9.44',
    changePct: '+1.13%',
    trend: [33, 34, 36, 38, 37, 41, 44, 48, 50, 52],
  },
  {
    name: '恒生科技',
    symbol: 'HSTECH',
    region: '港股科技',
    value: '4,186.10',
    change: '+36.80',
    changePct: '+0.89%',
    trend: [38, 36, 40, 43, 42, 45, 47, 49, 48, 52],
  },
  {
    name: '纳斯达克100',
    symbol: 'NDX',
    region: '海外风险偏好',
    value: '20,318.10',
    change: '+142.70',
    changePct: '+0.71%',
    trend: [39, 42, 45, 44, 48, 52, 50, 55, 57, 61],
  },
]

export const watchlist: WatchItem[] = [
  {
    symbol: '510300',
    name: '沪深300ETF',
    category: '核心仓',
    price: '3.52',
    changePct: '+0.31%',
    note: '用于观察大盘核心资产，不等同于买入建议。',
  },
  {
    symbol: '510500',
    name: '中证500ETF',
    category: '中盘',
    price: '5.62',
    changePct: '+0.66%',
    note: '适合作为中盘景气和市场广度的观察锚。',
  },
  {
    symbol: '512100',
    name: '中证1000ETF',
    category: '小盘',
    price: '2.41',
    changePct: '-0.42%',
    note: '波动弹性高，50w 账户要限制仓位拥挤。',
  },
  {
    symbol: '588000',
    name: '科创50ETF',
    category: '硬科技',
    price: '0.86',
    changePct: '+1.08%',
    note: '关注半导体、AI、创新药等成长估值修复。',
  },
  {
    symbol: '159915',
    name: '创业板ETF',
    category: '成长',
    price: '1.88',
    changePct: '+1.16%',
    note: '和风险偏好、美债利率、成长股情绪联动更强。',
  },
  {
    symbol: '512480',
    name: '半导体ETF',
    category: '行业主题',
    price: '0.92',
    changePct: '+1.74%',
    note: '主题弹性大，适合监控成交额和拥挤度。',
  },
  {
    symbol: '515880',
    name: '通信ETF',
    category: 'AI链条',
    price: '1.21',
    changePct: '+0.93%',
    note: '关注算力、光模块、运营商资本开支。',
  },
  {
    symbol: '512800',
    name: '银行ETF',
    category: '红利/防御',
    price: '1.38',
    changePct: '-0.18%',
    note: '适合观察高股息、防御风格和利率预期。',
  },
  {
    symbol: '513180',
    name: '恒生科技ETF',
    category: '港股弹性',
    price: '0.58',
    changePct: '+0.82%',
    note: '受港股流动性、美元利率和互联网监管预期影响。',
  },
  {
    symbol: '159941',
    name: '纳指ETF',
    category: '海外映射',
    price: '1.56',
    changePct: '+0.70%',
    note: '不作为 A 股替代，只看全球科技风险偏好。',
  },
]

export const sectorPulse: SectorPulse[] = [
  { name: '半导体', changePct: '+1.74%', breadth: '72%上涨', note: '高弹性行业，重点看成交额放大是否持续。' },
  { name: 'AI算力', changePct: '+1.18%', breadth: '67%上涨', note: '主题强时容易拥挤，需要跟踪龙头分化。' },
  { name: '高股息', changePct: '-0.12%', breadth: '48%上涨', note: '防御风格，和利率、资金避险偏好相关。' },
  { name: '消费复苏', changePct: '+0.36%', breadth: '55%上涨', note: '看社零、白酒、家电和出行链条验证。' },
  { name: '新能源', changePct: '+0.22%', breadth: '51%上涨', note: '供给出清和价格周期是核心变量。' },
  { name: '券商', changePct: '+0.68%', breadth: '61%上涨', note: '常作为市场风险偏好和成交额弹性的放大器。' },
]

export const domesticFlows: DomesticFlow[] = [
  {
    name: '两市成交额',
    value: '8,420亿',
    state: '温和放量',
    note: '成交额是判断行情级别的第一层过滤器。',
  },
  {
    name: '融资余额',
    value: '1.52万亿',
    state: '小幅回升',
    note: '杠杆资金回升代表风险偏好改善，也可能增加波动。',
  },
  {
    name: 'ETF净申购',
    value: '+46亿',
    state: '宽基流入',
    note: '50w 账户适合重点关注 ETF 资金而不是短线热榜。',
  },
  {
    name: '互联互通成交',
    value: '活跃',
    state: '港股联动',
    note: '关注成交与权重股联动，不机械解读单日净流向。',
  },
]

export const globalSignals: GlobalSignal[] = [
  {
    name: '美元兑离岸人民币',
    value: '7.27',
    change: '+0.08%',
    read: '人民币压力上升时，外资和港股风险偏好通常承压。',
  },
  {
    name: '10Y美债收益率',
    value: '4.28%',
    change: '-3bp',
    read: '美债下行通常利好成长估值，但要结合通胀数据。',
  },
  {
    name: '美元指数',
    value: '104.2',
    change: '+0.12%',
    read: '美元走强会影响新兴市场资金和大宗商品。',
  },
  {
    name: 'COMEX黄金',
    value: '$2,382',
    change: '+0.45%',
    read: '避险或实际利率变化会影响有色、贵金属和风险偏好。',
  },
  {
    name: '布伦特原油',
    value: '$84.6',
    change: '-0.31%',
    read: '油价影响通胀预期、化工链和航空运输成本。',
  },
  {
    name: '纳指期货',
    value: '+0.36%',
    change: '盘前',
    read: '用于判断全球科技链条对 A 股成长风格的外溢影响。',
  },
]

export const marketEvents: MarketEvent[] = [
  {
    date: '本周',
    title: '国内宏观数据：社融、M2、CPI/PPI',
    impact: 'High',
    note: '决定政策预期、顺周期风格和债股跷跷板。',
  },
  {
    date: '本周',
    title: '重要行业政策与交易所公告',
    impact: 'High',
    note: 'A 股主题交易对政策边际变化非常敏感。',
  },
  {
    date: '本周',
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

export const marketLearningChecklist = [
  '仓位：总仓位、单行业暴露、单一主题暴露是否超过计划。',
  '市场状态：指数方向、成交额、上涨家数、涨停/跌停结构是否支持进攻。',
  '资金结构：融资余额、ETF 申购、互联互通成交、港股联动是否一致。',
  '行业拥挤：热门行业是否只有少数龙头上涨，还是板块广度同步扩散。',
  '外部变量：美元/人民币、美债、纳指、黄金、原油是否改变风险预算。',
  '事件风险：财报、政策、宏观数据前是否需要降低短线暴露。',
]

export const marketDataPlan = [
  'A 股行情与板块：优先用 AKShare 或 Baostock 做每日收盘后批量更新。',
  '深度指标：Tushare 可补充指数成分、财务、资金流等，但要注意积分和权限。',
  '官方校验：上交所、深交所、港交所、央行、统计局、证监会用于公告和宏观校验。',
  '海外变量：用 Alpha Vantage / Stooq / FRED / 财经日历抓取美股指数、汇率、美债和商品。',
  '前端只读取静态 JSON，不暴露任何 API key；失败时保留上一版并显示 stale 状态。',
]
