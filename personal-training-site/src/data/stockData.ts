// 本文件由 scripts/generateStockData.mjs 自动生成，请勿手改。
// 数据源: hithink-finance（同花顺金融数据服务），数据日期: 2026-10-13 收盘
// 刻意不写入生成时间戳：数据无变化时保持零 diff，GitHub Actions 自动提交才不会每天空转。
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

export const stockMeta = {
  "updatedAt": "2026-10-13 收盘",
  "sourceMode": "hithink-finance（同花顺）真实行情",
  "trackedMarkets": 7,
  "watchlistSize": 10,
  "nextRefresh": "交易日收盘后运行更新脚本刷新",
  "capitalProfile": "50w RMB reference account"
}

export const capitalMetrics: CapitalMetric[] = [
  {
    "label": "参考资金规模",
    "value": "50w",
    "note": "页面按中等资金账户设计，强调仓位、回撤和流动性。"
  },
  {
    "label": "单一方向上限",
    "value": "15%",
    "note": "主题、行业或个股暴露过高时需要提示。"
  },
  {
    "label": "现金/货基缓冲",
    "value": "20%",
    "note": "用于应对波动、补仓和错过行情后的再平衡。"
  },
  {
    "label": "回撤预警",
    "value": "-8%",
    "note": "不是强制止损线，而是触发复盘和降风险的阈值。"
  }
]

export const stockIndices: StockIndex[] = [
  {
    "name": "上证指数",
    "symbol": "000001.SH",
    "region": "A股主板",
    "value": "3,800.86",
    "change": "+3.62",
    "changePct": "+0.10%",
    "trend": [
      3952.13,
      3936.52,
      3888.37,
      3823.62,
      3830.45,
      3842.19,
      3811.9,
      3813.79,
      3797.24,
      3800.86
    ]
  },
  {
    "name": "沪深300",
    "symbol": "000300.SH",
    "region": "核心资产",
    "value": "4,275.68",
    "change": "-12.30",
    "changePct": "-0.29%",
    "trend": [
      4544.59,
      4517.28,
      4439.14,
      4340.76,
      4345.21,
      4357.62,
      4310.28,
      4317.25,
      4287.98,
      4275.68
    ]
  },
  {
    "name": "中证500",
    "symbol": "000905.SH",
    "region": "中盘成长",
    "value": "7,085.09",
    "change": "-7.93",
    "changePct": "-0.11%",
    "trend": [
      7828.94,
      7791.82,
      7624.07,
      7402.3,
      7439.63,
      7435.16,
      7248.43,
      7251.01,
      7093.02,
      7085.09
    ]
  },
  {
    "name": "中证1000",
    "symbol": "000852.SH",
    "region": "小盘弹性",
    "value": "7,023.22",
    "change": "+1.75",
    "changePct": "+0.02%",
    "trend": [
      7759.03,
      7745.56,
      7570.14,
      7294.17,
      7325.35,
      7298.82,
      7138.58,
      7155.91,
      7021.47,
      7023.22
    ]
  },
  {
    "name": "创业板指",
    "symbol": "399006.SZ",
    "region": "成长风格",
    "value": "2,958.34",
    "change": "-5.48",
    "changePct": "-0.18%",
    "trend": [
      3399.93,
      3379.61,
      3288.948,
      3139.825,
      3142.563,
      3135.277,
      3036.657,
      3043.335,
      2963.824,
      2958.345
    ]
  },
  {
    "name": "科创50",
    "symbol": "000688.SH",
    "region": "硬科技",
    "value": "1,427.18",
    "change": "+0.46",
    "changePct": "+0.03%",
    "trend": [
      1665.04,
      1660.85,
      1621.87,
      1555.98,
      1569.34,
      1530.01,
      1456.32,
      1457.27,
      1426.72,
      1427.18
    ]
  },
  {
    "name": "深证成指",
    "symbol": "399001.SZ",
    "region": "深市主板",
    "value": "12,353.70",
    "change": "-31.17",
    "changePct": "-0.25%",
    "trend": [
      13723.735,
      13636.074,
      13316.969,
      12858.753,
      12901.947,
      12887.62,
      12620.897,
      12641.858,
      12384.869,
      12353.699
    ]
  }
]

export const watchlist: WatchItem[] = [
  {
    "symbol": "510300",
    "name": "沪深300ETF",
    "category": "核心仓",
    "price": "4.345",
    "changePct": "-0.34%",
    "note": "用于观察大盘核心资产，不等同于买入建议。"
  },
  {
    "symbol": "510500",
    "name": "中证500ETF",
    "category": "中盘",
    "price": "7.109",
    "changePct": "-0.22%",
    "note": "适合作为中盘景气和市场广度的观察锚。"
  },
  {
    "symbol": "512100",
    "name": "中证1000ETF",
    "category": "小盘",
    "price": "2.852",
    "changePct": "-0.14%",
    "note": "波动弹性高，50w 账户要限制仓位拥挤。"
  },
  {
    "symbol": "588000",
    "name": "科创50ETF",
    "category": "硬科技",
    "price": "1.507",
    "changePct": "+0.07%",
    "note": "关注半导体、AI、创新药等成长估值修复。"
  },
  {
    "symbol": "159915",
    "name": "创业板ETF",
    "category": "成长",
    "price": "2.974",
    "changePct": "-0.30%",
    "note": "和风险偏好、美债利率、成长股情绪联动更强。"
  },
  {
    "symbol": "512480",
    "name": "半导体ETF",
    "category": "行业主题",
    "price": "0.886",
    "changePct": "-0.23%",
    "note": "主题弹性大，适合监控成交额和拥挤度。"
  },
  {
    "symbol": "515880",
    "name": "通信ETF",
    "category": "AI链条",
    "price": "0.572",
    "changePct": "+1.78%",
    "note": "关注算力、光模块、运营商资本开支。"
  },
  {
    "symbol": "512800",
    "name": "银行ETF",
    "category": "红利/防御",
    "price": "0.864",
    "changePct": "-0.46%",
    "note": "适合观察高股息、防御风格和利率预期。"
  },
  {
    "symbol": "513180",
    "name": "恒生科技ETF",
    "category": "港股弹性",
    "price": "0.518",
    "changePct": "-0.96%",
    "note": "受港股流动性、美元利率和互联网监管预期影响。"
  },
  {
    "symbol": "159941",
    "name": "纳指ETF",
    "category": "海外映射",
    "price": "1.759",
    "changePct": "-0.51%",
    "note": "不作为 A 股替代，只看全球科技风险偏好。"
  }
]

export const sectorPulse: SectorPulse[] = [
  {
    "name": "半导体",
    "changePct": "+0.01%",
    "breadth": "n/a",
    "note": "高弹性行业，重点看成交额放大是否持续。（指数代码 881121.TI）"
  },
  {
    "name": "AI算力",
    "changePct": "+0.57%",
    "breadth": "n/a",
    "note": "东数西算(算力)概念指数，主题强时容易拥挤。（指数代码 885957.TI）"
  },
  {
    "name": "高股息",
    "changePct": "-0.18%",
    "breadth": "n/a",
    "note": "高股息精选概念，防御风格，和利率、避险偏好相关。（指数代码 886072.TI）"
  },
  {
    "name": "消费复苏",
    "changePct": "+0.99%",
    "breadth": "n/a",
    "note": "以白酒行业指数代表消费链条景气验证。（指数代码 881273.TI）"
  },
  {
    "name": "新能源",
    "changePct": "+0.34%",
    "breadth": "n/a",
    "note": "光伏概念指数，供给出清和价格周期是核心变量。（指数代码 885531.TI）"
  },
  {
    "name": "券商",
    "changePct": "+0.01%",
    "breadth": "n/a",
    "note": "证券行业指数，常作为风险偏好和成交额弹性的放大器。（指数代码 881157.TI）"
  }
]

export const domesticFlows: DomesticFlow[] = [
  {
    "name": "两市成交额",
    "value": "1.68万亿",
    "state": "1.68万亿（沪+深）",
    "note": "沪市+深市成交额合计（hithink 指数快照口径），判断行情级别的第一层过滤器。"
  },
  {
    "name": "沪市成交额",
    "value": "7793亿",
    "state": "占两市 46.5%",
    "note": "沪市主板与科创板合计成交，观察权重与大盘活跃度。"
  },
  {
    "name": "深市成交额",
    "value": "8966亿",
    "state": "占两市 53.5%",
    "note": "深市主板与中小盘成交，观察成长与题材活跃度。"
  },
  {
    "name": "创业板成交额",
    "value": "4520亿",
    "state": "占深市 50.4%",
    "note": "成长风格成交占比，50w 账户重点关注 ETF 资金而不是短线热榜。"
  }
]

export const globalSignals: GlobalSignal[] = [
  {
    "name": "美元兑离岸人民币",
    "value": "静态参考",
    "change": "—",
    "read": "hithink A 股服务不提供汇率行情；人民币压力上升时外资和港股风险偏好通常承压。"
  },
  {
    "name": "10Y美债收益率",
    "value": "静态参考",
    "change": "—",
    "read": "美债下行通常利好成长估值，需结合通胀数据；建议接入 FRED 等外部源。"
  },
  {
    "name": "美元指数",
    "value": "静态参考",
    "change": "—",
    "read": "美元走强会影响新兴市场资金和大宗商品。"
  },
  {
    "name": "COMEX黄金",
    "value": "静态参考",
    "change": "—",
    "read": "避险或实际利率变化会影响有色、贵金属和风险偏好。"
  },
  {
    "name": "布伦特原油",
    "value": "静态参考",
    "change": "—",
    "read": "油价影响通胀预期、化工链和航空运输成本。"
  },
  {
    "name": "纳指期货",
    "value": "静态参考",
    "change": "—",
    "read": "用于判断全球科技链条对 A 股成长风格的外溢影响。"
  }
]

export const stockEvents: StockEvent[] = [
  {
    "date": "每周",
    "title": "国内宏观数据：社融、M2、CPI/PPI（需外部源）",
    "impact": "High",
    "note": "决定政策预期、顺周期风格和债股跷跷板；hithink 不提供宏观日历。"
  },
  {
    "date": "每周",
    "title": "重要行业政策与交易所公告",
    "impact": "High",
    "note": "A 股主题交易对政策边际变化非常敏感。"
  },
  {
    "date": "每周",
    "title": "美股科技财报与纳指波动",
    "impact": "Medium",
    "note": "影响 AI、半导体、港股科技和成长风格映射。"
  },
  {
    "date": "每月",
    "title": "美国 CPI / 非农 / FOMC",
    "impact": "High",
    "note": "通过美元、美债、人民币汇率影响国内风险偏好。"
  }
]

export const stockChecklist = [
  "仓位：总仓位、单行业暴露、单一主题暴露是否超过计划。",
  "市场状态：指数方向、成交额、涨停家数与连板高度是否支持进攻。",
  "涨停结构：首板/连板梯队是否健康，炸板率是否抬升。",
  "资金结构：两市成交额与 ETF 行情是否一致；融资余额等需外部源补充。",
  "行业拥挤：热门行业是否只有少数龙头上涨，还是板块广度同步扩散。",
  "龙虎榜与热榜：观察机构/游资动向，不机械跟随热度。",
  "外部变量：美元/人民币、美债、纳指、黄金、原油是否改变风险预算。"
]

export const stockDataPlan = [
  "真实行情：hithink-finance CLI（同花顺）index snapshot / fund snapshot 拉取指数与 ETF 快照。",
  "涨停结构：special limit-up-pool / limit-break-pool / limit-up-ladder 取涨停池、炸板池与连板天梯。",
  "市场热度：special hot-stock / skyrocket / dragon-tiger 取热股榜、飙升榜与龙虎榜。",
  "行业板块：index catalog 行业/概念指数（.TI）映射页面 6 个板块，取真实涨跌幅。",
  "更新链路：npm run update:stock（交易日收盘后运行）。",
  "前端只读取生成的数据文件，不暴露任何 API key；失败时保留上一版并显示 stale 状态。"
]

export const stockBreadth = {
  "tradeDate": "2026-10-13",
  "limitUpCount": 70,
  "limitBreakCount": 19,
  "hotStockCount": 30
}

export const limitUpTop: LimitUpItem[] = [
  {
    "ticker": "002980",
    "name": "华盛昌",
    "price": "116.05",
    "pct": "+10.00%",
    "limitUpTime": "13:06",
    "boards": "首板",
    "reason": "光通信测试+硅光产品+伽蓝特收购",
    "sealMoney": "1.1亿"
  },
  {
    "ticker": "688655",
    "name": "迅捷兴",
    "price": "70.79",
    "pct": "+20.00%",
    "limitUpTime": "11:29",
    "boards": "首板",
    "reason": "印制电路板+高速光模块+定增获批",
    "sealMoney": "0.2亿"
  },
  {
    "ticker": "605058",
    "name": "澳弘电子",
    "price": "60.39",
    "pct": "+10.00%",
    "limitUpTime": "10:20",
    "boards": "首板",
    "reason": "PCB+AI服务器电源+具身智能",
    "sealMoney": "0.8亿"
  },
  {
    "ticker": "600593",
    "name": "大连圣亚",
    "price": "49.83",
    "pct": "+10.00%",
    "limitUpTime": "10:56",
    "boards": "首板",
    "reason": "哈尔滨景区+景区经营+海洋馆",
    "sealMoney": "1.6亿"
  },
  {
    "ticker": "603099",
    "name": "长白山",
    "price": "45.85",
    "pct": "+10.00%",
    "limitUpTime": "13:04",
    "boards": "首板",
    "reason": "冰雪旅游+旅游客运+温泉度假",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "001229",
    "name": "魅视科技",
    "price": "41.76",
    "pct": "+10.01%",
    "limitUpTime": "11:18",
    "boards": "首板",
    "reason": "磷化铟+专业视听+AI视觉",
    "sealMoney": "0.2亿"
  },
  {
    "ticker": "605258",
    "name": "协和电子",
    "price": "40.55",
    "pct": "+10.01%",
    "limitUpTime": "10:39",
    "boards": "首板",
    "reason": "PCB+高频通讯+新能源电池",
    "sealMoney": "0.6亿"
  },
  {
    "ticker": "301041",
    "name": "金百泽",
    "price": "40.14",
    "pct": "+20.00%",
    "limitUpTime": "11:27",
    "boards": "首板",
    "reason": "PCB+AI算力+业绩增长",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "600391",
    "name": "航发科技",
    "price": "38.78",
    "pct": "+10.01%",
    "limitUpTime": "13:09",
    "boards": "首板",
    "reason": "航空发动机+长江1000A+外贸配套",
    "sealMoney": "0.8亿"
  },
  {
    "ticker": "603353",
    "name": "和顺石油",
    "price": "37.90",
    "pct": "+10.01%",
    "limitUpTime": "13:00",
    "boards": "首板",
    "reason": "半导体IP+成品油",
    "sealMoney": "0.5亿"
  },
  {
    "ticker": "001231",
    "name": "农心科技",
    "price": "28.17",
    "pct": "+10.00%",
    "limitUpTime": "09:30",
    "boards": "2连板",
    "reason": "农药制剂+原药投产+海外登记",
    "sealMoney": "3.0亿"
  },
  {
    "ticker": "002430",
    "name": "杭氧股份",
    "price": "27.52",
    "pct": "+9.99%",
    "limitUpTime": "13:45",
    "boards": "首板",
    "reason": "电子气体+工业气体+空分设备",
    "sealMoney": "0.7亿"
  }
]

export const limitBreakTop: LimitBreakItem[] = [
  {
    "ticker": "688004",
    "name": "博汇科技",
    "price": "42.73",
    "pct": "+14.71%",
    "openTimes": 1,
    "turnover": "9亿"
  },
  {
    "ticker": "301313",
    "name": "凡拓数创",
    "price": "33.01",
    "pct": "+13.91%",
    "openTimes": 1,
    "turnover": "5亿"
  },
  {
    "ticker": "300929",
    "name": "华骐环保",
    "price": "16.57",
    "pct": "+10.47%",
    "openTimes": 1,
    "turnover": "3亿"
  },
  {
    "ticker": "600316",
    "name": "洪都航空",
    "price": "33.66",
    "pct": "+9.75%",
    "openTimes": 3,
    "turnover": "9亿"
  },
  {
    "ticker": "600318",
    "name": "新力金融",
    "price": "7.53",
    "pct": "+9.13%",
    "openTimes": 4,
    "turnover": "6亿"
  },
  {
    "ticker": "603669",
    "name": "灵康药业",
    "price": "7.24",
    "pct": "+7.58%",
    "openTimes": 1,
    "turnover": "5亿"
  },
  {
    "ticker": "002913",
    "name": "奥士康",
    "price": "89.87",
    "pct": "+6.78%",
    "openTimes": 2,
    "turnover": "16亿"
  },
  {
    "ticker": "002724",
    "name": "海洋王",
    "price": "7.08",
    "pct": "+6.63%",
    "openTimes": 1,
    "turnover": "3亿"
  }
]

export const ladderBoards: LadderBoard[] = [
  {
    "label": "2板",
    "count": 5,
    "names": [
      "东百集团",
      "农心科技",
      "广电网络"
    ]
  },
  {
    "label": "3板",
    "count": 5,
    "names": [
      "丽人丽妆",
      "慈文传媒",
      "新经典"
    ]
  }
]

export const hotStocks: RankItem[] = [
  {
    "rank": 1,
    "ticker": "600418",
    "name": "江淮汽车",
    "heat": "5666245",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "600127",
    "name": "金健米业",
    "heat": "4810702",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "002242",
    "name": "九阳股份",
    "heat": "4360950",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "301660",
    "name": "粤芯半导体",
    "heat": "4010361",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "601127",
    "name": "赛力斯",
    "heat": "3217136",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "300308",
    "name": "中际旭创",
    "heat": "2865234",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "600693",
    "name": "东百集团",
    "heat": "2849685",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "605577",
    "name": "龙版传媒",
    "heat": "2546661",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "600664",
    "name": "哈药股份",
    "heat": "2483853",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "600241",
    "name": "时代万恒",
    "heat": "2465239",
    "rankChange": 0
  }
]

export const skyrockets: RankItem[] = [
  {
    "rank": 1,
    "ticker": "301660",
    "name": "粤芯半导体",
    "heat": "40429.8",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "002639",
    "name": "雪人集团",
    "heat": "38752.3",
    "rankChange": 1
  },
  {
    "rank": 3,
    "ticker": "000823",
    "name": "超声电子",
    "heat": "35131.1",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "000530",
    "name": "冰山冷热",
    "heat": "32942.1",
    "rankChange": 19
  },
  {
    "rank": 5,
    "ticker": "605058",
    "name": "澳弘电子",
    "heat": "28726.2",
    "rankChange": 1
  },
  {
    "rank": 6,
    "ticker": "605189",
    "name": "富春染织",
    "heat": "26180.5",
    "rankChange": 74
  },
  {
    "rank": 7,
    "ticker": "605577",
    "name": "龙版传媒",
    "heat": "25887.3",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "000833",
    "name": "粤桂股份",
    "heat": "23808.7",
    "rankChange": 5
  },
  {
    "rank": 9,
    "ticker": "002552",
    "name": "宝鼎科技",
    "heat": "21390.4",
    "rankChange": 8
  },
  {
    "rank": 10,
    "ticker": "603188",
    "name": "亚邦股份",
    "heat": "19379.3",
    "rankChange": 4
  }
]

export const dragonTigerTop: DragonTigerItem[] = [
  {
    "rank": 2,
    "ticker": "600127",
    "name": "金健米业",
    "pct": "+4.68%",
    "netValue": "-0.92亿",
    "orgNet": "—",
    "hotMoneyNet": "1.36亿",
    "concepts": [
      "玉米",
      "粮食概念",
      "乳业"
    ]
  },
  {
    "rank": 4,
    "ticker": "002242",
    "name": "九阳股份",
    "pct": "+6.19%",
    "netValue": "1.50亿",
    "orgNet": "0.29亿",
    "hotMoneyNet": "0.93亿",
    "concepts": [
      "家用电器",
      "净水概念",
      "绿色电力"
    ]
  },
  {
    "rank": 7,
    "ticker": "301660",
    "name": "粤芯半导体",
    "pct": "+223.06%",
    "netValue": "3.82亿",
    "orgNet": "—",
    "hotMoneyNet": "2.76亿",
    "concepts": []
  },
  {
    "rank": 8,
    "ticker": "600241",
    "name": "时代万恒",
    "pct": "-0.62%",
    "netValue": "0.06亿",
    "orgNet": "—",
    "hotMoneyNet": "0.75亿",
    "concepts": [
      "锂电池概念",
      "国企改革"
    ]
  },
  {
    "rank": 10,
    "ticker": "605058",
    "name": "澳弘电子",
    "pct": "+10.00%",
    "netValue": "-0.21亿",
    "orgNet": "0.67亿",
    "hotMoneyNet": "-0.52亿",
    "concepts": [
      "PCB概念",
      "毫米波雷达",
      "共封装光学(CPO)"
    ]
  },
  {
    "rank": 12,
    "ticker": "601811",
    "name": "新华文轩",
    "pct": "-8.09%",
    "netValue": "-0.09亿",
    "orgNet": "-0.27亿",
    "hotMoneyNet": "-0.04亿",
    "concepts": [
      "文化传媒概念",
      "知识产权保护",
      "NFT概念"
    ]
  },
  {
    "rank": 14,
    "ticker": "002487",
    "name": "大金重工",
    "pct": "-10.00%",
    "netValue": "-2.36亿",
    "orgNet": "0.20亿",
    "hotMoneyNet": "0.09亿",
    "concepts": [
      "振兴东北",
      "风电",
      "绿色电力"
    ]
  },
  {
    "rank": 15,
    "ticker": "002636",
    "name": "金安国纪",
    "pct": "+4.15%",
    "netValue": "0.93亿",
    "orgNet": "0.33亿",
    "hotMoneyNet": "-0.09亿",
    "concepts": [
      "PCB概念",
      "医疗器械概念",
      "2026中报预增"
    ]
  },
  {
    "rank": 17,
    "ticker": "001330",
    "name": "博纳影业",
    "pct": "-3.52%",
    "netValue": "-0.95亿",
    "orgNet": "0.24亿",
    "hotMoneyNet": "-1.16亿",
    "concepts": [
      "文化传媒概念",
      "短剧游戏",
      "AI视频"
    ]
  },
  {
    "rank": 20,
    "ticker": "600812",
    "name": "华北制药",
    "pct": "-9.95%",
    "netValue": "-0.11亿",
    "orgNet": "—",
    "hotMoneyNet": "0.58亿",
    "concepts": [
      "流感",
      "仿制药一致性评价",
      "维生素"
    ]
  }
]
