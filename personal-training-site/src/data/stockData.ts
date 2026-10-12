// 本文件由 scripts/generateStockData.mjs 自动生成，请勿手改。
// 数据源: hithink-finance（同花顺金融数据服务），数据日期: 2026-10-12 收盘
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
  "updatedAt": "2026-10-12 收盘",
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
    "value": "3,797.24",
    "change": "-16.55",
    "changePct": "-0.43%",
    "trend": [
      3949.91,
      3952.13,
      3936.52,
      3888.37,
      3823.62,
      3830.45,
      3842.19,
      3811.9,
      3813.79,
      3797.24
    ]
  },
  {
    "name": "沪深300",
    "symbol": "000300.SH",
    "region": "核心资产",
    "value": "4,287.98",
    "change": "-29.27",
    "changePct": "-0.68%",
    "trend": [
      4539.57,
      4544.59,
      4517.28,
      4439.14,
      4340.76,
      4345.21,
      4357.62,
      4310.28,
      4317.25,
      4287.98
    ]
  },
  {
    "name": "中证500",
    "symbol": "000905.SH",
    "region": "中盘成长",
    "value": "7,093.02",
    "change": "-157.99",
    "changePct": "-2.18%",
    "trend": [
      7850.48,
      7828.94,
      7791.82,
      7624.07,
      7402.3,
      7439.63,
      7435.16,
      7248.43,
      7251.01,
      7093.02
    ]
  },
  {
    "name": "中证1000",
    "symbol": "000852.SH",
    "region": "小盘弹性",
    "value": "7,021.47",
    "change": "-134.44",
    "changePct": "-1.88%",
    "trend": [
      7766.33,
      7759.03,
      7745.56,
      7570.14,
      7294.17,
      7325.35,
      7298.82,
      7138.58,
      7155.91,
      7021.47
    ]
  },
  {
    "name": "创业板指",
    "symbol": "399006.SZ",
    "region": "成长风格",
    "value": "2,963.82",
    "change": "-79.51",
    "changePct": "-2.61%",
    "trend": [
      3399.59,
      3399.93,
      3379.61,
      3288.948,
      3139.825,
      3142.563,
      3135.277,
      3036.657,
      3043.335,
      2963.824
    ]
  },
  {
    "name": "科创50",
    "symbol": "000688.SH",
    "region": "硬科技",
    "value": "1,426.72",
    "change": "-30.55",
    "changePct": "-2.10%",
    "trend": [
      1657.48,
      1665.04,
      1660.85,
      1621.87,
      1555.98,
      1569.34,
      1530.01,
      1456.32,
      1457.27,
      1426.72
    ]
  },
  {
    "name": "深证成指",
    "symbol": "399001.SZ",
    "region": "深市主板",
    "value": "12,384.87",
    "change": "-256.99",
    "changePct": "-2.03%",
    "trend": [
      13730.02,
      13723.735,
      13636.074,
      13316.969,
      12858.753,
      12901.947,
      12887.62,
      12620.897,
      12641.858,
      12384.869
    ]
  }
]

export const watchlist: WatchItem[] = [
  {
    "symbol": "510300",
    "name": "沪深300ETF",
    "category": "核心仓",
    "price": "4.360",
    "changePct": "-0.57%",
    "note": "用于观察大盘核心资产，不等同于买入建议。"
  },
  {
    "symbol": "510500",
    "name": "中证500ETF",
    "category": "中盘",
    "price": "7.125",
    "changePct": "-2.16%",
    "note": "适合作为中盘景气和市场广度的观察锚。"
  },
  {
    "symbol": "512100",
    "name": "中证1000ETF",
    "category": "小盘",
    "price": "2.856",
    "changePct": "-1.82%",
    "note": "波动弹性高，50w 账户要限制仓位拥挤。"
  },
  {
    "symbol": "588000",
    "name": "科创50ETF",
    "category": "硬科技",
    "price": "1.506",
    "changePct": "-2.27%",
    "note": "关注半导体、AI、创新药等成长估值修复。"
  },
  {
    "symbol": "159915",
    "name": "创业板ETF",
    "category": "成长",
    "price": "2.983",
    "changePct": "-2.64%",
    "note": "和风险偏好、美债利率、成长股情绪联动更强。"
  },
  {
    "symbol": "512480",
    "name": "半导体ETF",
    "category": "行业主题",
    "price": "0.888",
    "changePct": "-2.52%",
    "note": "主题弹性大，适合监控成交额和拥挤度。"
  },
  {
    "symbol": "515880",
    "name": "通信ETF",
    "category": "AI链条",
    "price": "0.562",
    "changePct": "-5.07%",
    "note": "关注算力、光模块、运营商资本开支。"
  },
  {
    "symbol": "512800",
    "name": "银行ETF",
    "category": "红利/防御",
    "price": "0.868",
    "changePct": "+2.12%",
    "note": "适合观察高股息、防御风格和利率预期。"
  },
  {
    "symbol": "513180",
    "name": "恒生科技ETF",
    "category": "港股弹性",
    "price": "0.523",
    "changePct": "-0.38%",
    "note": "受港股流动性、美元利率和互联网监管预期影响。"
  },
  {
    "symbol": "159941",
    "name": "纳指ETF",
    "category": "海外映射",
    "price": "1.768",
    "changePct": "-0.06%",
    "note": "不作为 A 股替代，只看全球科技风险偏好。"
  }
]

export const sectorPulse: SectorPulse[] = [
  {
    "name": "半导体",
    "changePct": "-2.73%",
    "breadth": "n/a",
    "note": "高弹性行业，重点看成交额放大是否持续。（指数代码 881121.TI）"
  },
  {
    "name": "AI算力",
    "changePct": "-1.48%",
    "breadth": "n/a",
    "note": "东数西算(算力)概念指数，主题强时容易拥挤。（指数代码 885957.TI）"
  },
  {
    "name": "高股息",
    "changePct": "+0.27%",
    "breadth": "n/a",
    "note": "高股息精选概念，防御风格，和利率、避险偏好相关。（指数代码 886072.TI）"
  },
  {
    "name": "消费复苏",
    "changePct": "-0.43%",
    "breadth": "n/a",
    "note": "以白酒行业指数代表消费链条景气验证。（指数代码 881273.TI）"
  },
  {
    "name": "新能源",
    "changePct": "-1.53%",
    "breadth": "n/a",
    "note": "光伏概念指数，供给出清和价格周期是核心变量。（指数代码 885531.TI）"
  },
  {
    "name": "券商",
    "changePct": "+0.09%",
    "breadth": "n/a",
    "note": "证券行业指数，常作为风险偏好和成交额弹性的放大器。（指数代码 881157.TI）"
  }
]

export const domesticFlows: DomesticFlow[] = [
  {
    "name": "两市成交额",
    "value": "1.54万亿",
    "state": "1.54万亿（沪+深）",
    "note": "沪市+深市成交额合计（hithink 指数快照口径），判断行情级别的第一层过滤器。"
  },
  {
    "name": "沪市成交额",
    "value": "7149亿",
    "state": "占两市 46.5%",
    "note": "沪市主板与科创板合计成交，观察权重与大盘活跃度。"
  },
  {
    "name": "深市成交额",
    "value": "8229亿",
    "state": "占两市 53.5%",
    "note": "深市主板与中小盘成交，观察成长与题材活跃度。"
  },
  {
    "name": "创业板成交额",
    "value": "3945亿",
    "state": "占深市 47.9%",
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
  "tradeDate": "2026-10-12",
  "limitUpCount": 48,
  "limitBreakCount": 25,
  "hotStockCount": 30
}

export const limitUpTop: LimitUpItem[] = [
  {
    "ticker": "002990",
    "name": "盛视科技",
    "price": "55.95",
    "pct": "+10.01%",
    "limitUpTime": "09:54",
    "boards": "首板",
    "reason": "智算业务+机器人+智慧口岸",
    "sealMoney": "1.0亿"
  },
  {
    "ticker": "601127",
    "name": "赛力斯",
    "price": "51.24",
    "pct": "+10.00%",
    "limitUpTime": "14:31",
    "boards": "首板",
    "reason": "海外出海+宁德合作+华为合作",
    "sealMoney": "3.1亿"
  },
  {
    "ticker": "301419",
    "name": "阿莱德",
    "price": "47.70",
    "pct": "+20.00%",
    "limitUpTime": "09:55",
    "boards": "首板",
    "reason": "光通信散热+重大资产重组+热管理材料",
    "sealMoney": "0.4亿"
  },
  {
    "ticker": "605287",
    "name": "德才股份",
    "price": "44.20",
    "pct": "+10.01%",
    "limitUpTime": "09:25",
    "boards": "2连板",
    "reason": "AI漫剧+火山引擎合作+建筑装饰",
    "sealMoney": "2.4亿"
  },
  {
    "ticker": "688004",
    "name": "博汇科技",
    "price": "37.25",
    "pct": "+20.01%",
    "limitUpTime": "10:31",
    "boards": "首板",
    "reason": "AI内容安全+视听大数据+传媒安全+协议转让",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "301052",
    "name": "果麦文化",
    "price": "30.47",
    "pct": "+20.01%",
    "limitUpTime": "10:07",
    "boards": "首板",
    "reason": "AI出版+短剧+AIGC+教辅图书",
    "sealMoney": "0.5亿"
  },
  {
    "ticker": "300829",
    "name": "金丹科技",
    "price": "28.02",
    "pct": "+20.00%",
    "limitUpTime": "09:47",
    "boards": "首板",
    "reason": "聚乳酸+乳酸提价+可降解材料",
    "sealMoney": "1.3亿"
  },
  {
    "ticker": "603533",
    "name": "掌阅科技",
    "price": "27.98",
    "pct": "+9.98%",
    "limitUpTime": "10:10",
    "boards": "2连板",
    "reason": "AI短剧+短剧出海+数字阅读",
    "sealMoney": "0.9亿"
  },
  {
    "ticker": "601595",
    "name": "上海电影",
    "price": "27.21",
    "pct": "+9.98%",
    "limitUpTime": "10:21",
    "boards": "2连板",
    "reason": "AIGC+知识产权运营+院线经营",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "301658",
    "name": "首航新能",
    "price": "27.12",
    "pct": "+20.00%",
    "limitUpTime": "13:15",
    "boards": "首板",
    "reason": "储能系统+光伏逆变器+海外布局",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "001231",
    "name": "农心科技",
    "price": "25.61",
    "pct": "+10.01%",
    "limitUpTime": "13:23",
    "boards": "首板",
    "reason": "农药制剂+原药投产+海外登记",
    "sealMoney": "2.0亿"
  },
  {
    "ticker": "002667",
    "name": "*ST威领",
    "price": "24.41",
    "pct": "+10.00%",
    "limitUpTime": "09:25",
    "boards": "首板",
    "reason": "复牌+要约收购+锂电材料+有色金属矿",
    "sealMoney": "1.3亿"
  }
]

export const limitBreakTop: LimitBreakItem[] = [
  {
    "ticker": "300690",
    "name": "双一科技",
    "price": "27.02",
    "pct": "+9.79%",
    "openTimes": 1,
    "turnover": "7亿"
  },
  {
    "ticker": "603730",
    "name": "岱美股份",
    "price": "10.42",
    "pct": "+7.87%",
    "openTimes": 5,
    "turnover": "5亿"
  },
  {
    "ticker": "300389",
    "name": "艾比森",
    "price": "13.61",
    "pct": "+7.84%",
    "openTimes": 1,
    "turnover": "4亿"
  },
  {
    "ticker": "002487",
    "name": "大金重工",
    "price": "47.10",
    "pct": "+7.66%",
    "openTimes": 1,
    "turnover": "46亿"
  },
  {
    "ticker": "603810",
    "name": "丰山集团",
    "price": "13.88",
    "pct": "+7.18%",
    "openTimes": 1,
    "turnover": "2亿"
  },
  {
    "ticker": "001356",
    "name": "富岭股份",
    "price": "9.93",
    "pct": "+6.89%",
    "openTimes": 2,
    "turnover": "2亿"
  },
  {
    "ticker": "002919",
    "name": "名臣健康",
    "price": "17.44",
    "pct": "+6.86%",
    "openTimes": 1,
    "turnover": "2亿"
  },
  {
    "ticker": "603956",
    "name": "威派格",
    "price": "7.41",
    "pct": "+6.31%",
    "openTimes": 3,
    "turnover": "5亿"
  }
]

export const ladderBoards: LadderBoard[] = [
  {
    "label": "2板",
    "count": 14,
    "names": [
      "上海电影",
      "丽人丽妆",
      "博纳影业"
    ]
  },
  {
    "label": "3板",
    "count": 1,
    "names": [
      "华北制药"
    ]
  },
  {
    "label": "6板",
    "count": 2,
    "names": [
      "九阳股份",
      "时代万恒"
    ]
  },
  {
    "label": "7板+",
    "count": 1,
    "names": [
      "新华传媒"
    ]
  }
]

export const hotStocks: RankItem[] = [
  {
    "rank": 1,
    "ticker": "600127",
    "name": "金健米业",
    "heat": "6640100",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "600418",
    "name": "江淮汽车",
    "heat": "5455472",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "600825",
    "name": "新华传媒",
    "heat": "4761895",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "002242",
    "name": "九阳股份",
    "heat": "4329249",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "002487",
    "name": "大金重工",
    "heat": "3206382",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "600241",
    "name": "时代万恒",
    "heat": "3096689",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "601127",
    "name": "赛力斯",
    "heat": "2849143",
    "rankChange": 3
  },
  {
    "rank": 8,
    "ticker": "600664",
    "name": "哈药股份",
    "heat": "2835536",
    "rankChange": -1
  },
  {
    "rank": 9,
    "ticker": "600693",
    "name": "东百集团",
    "heat": "2795634",
    "rankChange": -1
  },
  {
    "rank": 10,
    "ticker": "300308",
    "name": "中际旭创",
    "heat": "2772079",
    "rankChange": -1
  }
]

export const skyrockets: RankItem[] = [
  {
    "rank": 1,
    "ticker": "601127",
    "name": "赛力斯",
    "heat": "27788.8",
    "rankChange": 2
  },
  {
    "rank": 2,
    "ticker": "688808",
    "name": "联讯仪器",
    "heat": "13191.8",
    "rankChange": 2
  },
  {
    "rank": 3,
    "ticker": "002343",
    "name": "慈文传媒",
    "heat": "10173.6",
    "rankChange": 1
  },
  {
    "rank": 4,
    "ticker": "688498",
    "name": "源杰科技",
    "heat": "10109.9",
    "rankChange": 3
  },
  {
    "rank": 5,
    "ticker": "600825",
    "name": "新华传媒",
    "heat": "10084.0",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "300308",
    "name": "中际旭创",
    "heat": "8124.0",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "002692",
    "name": "远程股份",
    "heat": "7560.3",
    "rankChange": 3
  },
  {
    "rank": 8,
    "ticker": "603096",
    "name": "新经典",
    "heat": "7382.2",
    "rankChange": 4
  },
  {
    "rank": 9,
    "ticker": "300199",
    "name": "翰宇药业",
    "heat": "7067.0",
    "rankChange": 4
  },
  {
    "rank": 10,
    "ticker": "002264",
    "name": "新华都",
    "heat": "6880.4",
    "rankChange": 1
  }
]

export const dragonTigerTop: DragonTigerItem[] = [
  {
    "rank": 1,
    "ticker": "600127",
    "name": "金健米业",
    "pct": "-8.43%",
    "netValue": "0.65亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.04亿",
    "concepts": [
      "玉米",
      "粮食概念",
      "乳业"
    ]
  },
  {
    "rank": 2,
    "ticker": "002242",
    "name": "九阳股份",
    "pct": "+9.98%",
    "netValue": "-1.59亿",
    "orgNet": "-0.38亿",
    "hotMoneyNet": "-0.16亿",
    "concepts": [
      "家用电器",
      "净水概念",
      "绿色电力"
    ]
  },
  {
    "rank": 2,
    "ticker": "002242",
    "name": "九阳股份",
    "pct": "+9.98%",
    "netValue": "-0.37亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.01亿",
    "concepts": [
      "家用电器",
      "净水概念",
      "绿色电力"
    ]
  },
  {
    "rank": 6,
    "ticker": "601811",
    "name": "新华文轩",
    "pct": "+10.00%",
    "netValue": "-0.40亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.56亿",
    "concepts": [
      "文化传媒概念",
      "知识产权保护",
      "NFT概念"
    ]
  },
  {
    "rank": 7,
    "ticker": "600664",
    "name": "哈药股份",
    "pct": "-10.01%",
    "netValue": "0.58亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.04亿",
    "concepts": [
      "振兴东北",
      "流感",
      "维生素"
    ]
  },
  {
    "rank": 8,
    "ticker": "600241",
    "name": "时代万恒",
    "pct": "+10.03%",
    "netValue": "-0.72亿",
    "orgNet": "-0.34亿",
    "hotMoneyNet": "0.19亿",
    "concepts": [
      "锂电池概念",
      "国企改革"
    ]
  },
  {
    "rank": 8,
    "ticker": "600241",
    "name": "时代万恒",
    "pct": "+10.03%",
    "netValue": "-0.74亿",
    "orgNet": "-0.34亿",
    "hotMoneyNet": "0.19亿",
    "concepts": [
      "锂电池概念",
      "国企改革"
    ]
  },
  {
    "rank": 9,
    "ticker": "600693",
    "name": "东百集团",
    "pct": "+10.04%",
    "netValue": "0.05亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.12亿",
    "concepts": [
      "免税店",
      "冷链物流",
      "IP经济(谷子经济)"
    ]
  },
  {
    "rank": 9,
    "ticker": "600693",
    "name": "东百集团",
    "pct": "+10.04%",
    "netValue": "0.87亿",
    "orgNet": "—",
    "hotMoneyNet": "0.32亿",
    "concepts": [
      "免税店",
      "冷链物流",
      "IP经济(谷子经济)"
    ]
  },
  {
    "rank": 10,
    "ticker": "001330",
    "name": "博纳影业",
    "pct": "+10.04%",
    "netValue": "0.86亿",
    "orgNet": "-0.21亿",
    "hotMoneyNet": "1.35亿",
    "concepts": [
      "文化传媒概念",
      "短剧游戏",
      "AI视频"
    ]
  }
]
