// 本文件由 scripts/generateStockData.mjs 自动生成，请勿手改。
// 数据源: hithink-finance（同花顺金融数据服务），数据日期: 2026-10-23 收盘
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
  "updatedAt": "2026-10-23 收盘",
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
    "value": "3,690.48",
    "change": "+32.45",
    "changePct": "+0.89%",
    "trend": [
      3797.24,
      3800.86,
      3767.23,
      3707.48,
      3716.28,
      3730.92,
      3735.37,
      3713.03,
      3658.03,
      3690.48
    ]
  },
  {
    "name": "沪深300",
    "symbol": "000300.SH",
    "region": "核心资产",
    "value": "4,105.33",
    "change": "+69.03",
    "changePct": "+1.71%",
    "trend": [
      4287.98,
      4275.68,
      4217.68,
      4166.01,
      4170.61,
      4174.53,
      4152.11,
      4111.93,
      4036.3,
      4105.33
    ]
  },
  {
    "name": "中证500",
    "symbol": "000905.SH",
    "region": "中盘成长",
    "value": "6,814.44",
    "change": "+159.19",
    "changePct": "+2.39%",
    "trend": [
      7093.02,
      7085.09,
      6980.11,
      6769.25,
      6772.75,
      6800.66,
      6841.44,
      6840.56,
      6655.25,
      6814.44
    ]
  },
  {
    "name": "中证1000",
    "symbol": "000852.SH",
    "region": "小盘弹性",
    "value": "6,734.55",
    "change": "+156.28",
    "changePct": "+2.38%",
    "trend": [
      7021.47,
      7023.22,
      6905.17,
      6678.65,
      6681.94,
      6698.3,
      6766.9,
      6780.26,
      6578.27,
      6734.55
    ]
  },
  {
    "name": "创业板指",
    "symbol": "399006.SZ",
    "region": "成长风格",
    "value": "2,684.10",
    "change": "+107.20",
    "changePct": "+4.16%",
    "trend": [
      2963.824,
      2958.345,
      2866.763,
      2783.175,
      2772.384,
      2746.291,
      2739.203,
      2694.713,
      2576.901,
      2684.097
    ]
  },
  {
    "name": "科创50",
    "symbol": "000688.SH",
    "region": "硬科技",
    "value": "1,345.51",
    "change": "+39.64",
    "changePct": "+3.04%",
    "trend": [
      1426.72,
      1427.18,
      1380.26,
      1359.52,
      1358.65,
      1329.19,
      1342.42,
      1343.28,
      1305.87,
      1345.51
    ]
  },
  {
    "name": "深证成指",
    "symbol": "399001.SZ",
    "region": "深市主板",
    "value": "11,673.83",
    "change": "+316.51",
    "changePct": "+2.79%",
    "trend": [
      12384.869,
      12353.699,
      12110.591,
      11816.789,
      11802.459,
      11817.423,
      11801.29,
      11704.354,
      11357.32,
      11673.826
    ]
  }
]

export const watchlist: WatchItem[] = [
  {
    "symbol": "510300",
    "name": "沪深300ETF",
    "category": "核心仓",
    "price": "4.178",
    "changePct": "+1.73%",
    "note": "用于观察大盘核心资产，不等同于买入建议。"
  },
  {
    "symbol": "510500",
    "name": "中证500ETF",
    "category": "中盘",
    "price": "6.857",
    "changePct": "+2.59%",
    "note": "适合作为中盘景气和市场广度的观察锚。"
  },
  {
    "symbol": "512100",
    "name": "中证1000ETF",
    "category": "小盘",
    "price": "2.742",
    "changePct": "+2.62%",
    "note": "波动弹性高，50w 账户要限制仓位拥挤。"
  },
  {
    "symbol": "588000",
    "name": "科创50ETF",
    "category": "硬科技",
    "price": "1.422",
    "changePct": "+3.27%",
    "note": "关注半导体、AI、创新药等成长估值修复。"
  },
  {
    "symbol": "159915",
    "name": "创业板ETF",
    "category": "成长",
    "price": "2.702",
    "changePct": "+4.24%",
    "note": "和风险偏好、美债利率、成长股情绪联动更强。"
  },
  {
    "symbol": "512480",
    "name": "半导体ETF",
    "category": "行业主题",
    "price": "0.836",
    "changePct": "+3.47%",
    "note": "主题弹性大，适合监控成交额和拥挤度。"
  },
  {
    "symbol": "515880",
    "name": "通信ETF",
    "category": "AI链条",
    "price": "0.514",
    "changePct": "+2.19%",
    "note": "关注算力、光模块、运营商资本开支。"
  },
  {
    "symbol": "512800",
    "name": "银行ETF",
    "category": "红利/防御",
    "price": "0.849",
    "changePct": "-1.62%",
    "note": "适合观察高股息、防御风格和利率预期。"
  },
  {
    "symbol": "513180",
    "name": "恒生科技ETF",
    "category": "港股弹性",
    "price": "0.487",
    "changePct": "+2.53%",
    "note": "受港股流动性、美元利率和互联网监管预期影响。"
  },
  {
    "symbol": "159941",
    "name": "纳指ETF",
    "category": "海外映射",
    "price": "1.668",
    "changePct": "-0.83%",
    "note": "不作为 A 股替代，只看全球科技风险偏好。"
  }
]

export const sectorPulse: SectorPulse[] = [
  {
    "name": "半导体",
    "changePct": "+3.65%",
    "breadth": "n/a",
    "note": "高弹性行业，重点看成交额放大是否持续。（指数代码 881121.TI）"
  },
  {
    "name": "AI算力",
    "changePct": "+2.55%",
    "breadth": "n/a",
    "note": "东数西算(算力)概念指数，主题强时容易拥挤。（指数代码 885957.TI）"
  },
  {
    "name": "高股息",
    "changePct": "+0.33%",
    "breadth": "n/a",
    "note": "高股息精选概念，防御风格，和利率、避险偏好相关。（指数代码 886072.TI）"
  },
  {
    "name": "消费复苏",
    "changePct": "+2.54%",
    "breadth": "n/a",
    "note": "以白酒行业指数代表消费链条景气验证。（指数代码 881273.TI）"
  },
  {
    "name": "新能源",
    "changePct": "+1.87%",
    "breadth": "n/a",
    "note": "光伏概念指数，供给出清和价格周期是核心变量。（指数代码 885531.TI）"
  },
  {
    "name": "券商",
    "changePct": "+1.30%",
    "breadth": "n/a",
    "note": "证券行业指数，常作为风险偏好和成交额弹性的放大器。（指数代码 881157.TI）"
  }
]

export const domesticFlows: DomesticFlow[] = [
  {
    "name": "两市成交额",
    "value": "1.96万亿",
    "state": "1.96万亿（沪+深）",
    "note": "沪市+深市成交额合计（hithink 指数快照口径），判断行情级别的第一层过滤器。"
  },
  {
    "name": "沪市成交额",
    "value": "8987亿",
    "state": "占两市 45.9%",
    "note": "沪市主板与科创板合计成交，观察权重与大盘活跃度。"
  },
  {
    "name": "深市成交额",
    "value": "1.06万亿",
    "state": "占两市 54.1%",
    "note": "深市主板与中小盘成交，观察成长与题材活跃度。"
  },
  {
    "name": "创业板成交额",
    "value": "5369亿",
    "state": "占深市 50.8%",
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
  "tradeDate": "2026-10-23",
  "limitUpCount": 82,
  "limitBreakCount": 12,
  "hotStockCount": 30
}

export const limitUpTop: LimitUpItem[] = [
  {
    "ticker": "688836",
    "name": "宇树科技-W",
    "price": "624.00",
    "pct": "+20.00%",
    "limitUpTime": "14:15",
    "boards": "首板",
    "reason": "人形机器人+物理AI+H2-X",
    "sealMoney": "4.0亿"
  },
  {
    "ticker": "688686",
    "name": "奥普特",
    "price": "153.20",
    "pct": "+20.00%",
    "limitUpTime": "14:42",
    "boards": "首板",
    "reason": "具身智能+机器视觉+工业智能",
    "sealMoney": "0.5亿"
  },
  {
    "ticker": "688787",
    "name": "海天瑞声",
    "price": "141.00",
    "pct": "+20.00%",
    "limitUpTime": "13:42",
    "boards": "首板",
    "reason": "具身智能+训练数据+数据要素",
    "sealMoney": "1.2亿"
  },
  {
    "ticker": "688368",
    "name": "晶丰明源",
    "price": "105.96",
    "pct": "+20.00%",
    "limitUpTime": "13:46",
    "boards": "首板",
    "reason": "三季报增长+充电管理+算力电源",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "003021",
    "name": "兆威机电",
    "price": "91.73",
    "pct": "+10.00%",
    "limitUpTime": "09:43",
    "boards": "2连板",
    "reason": "人形机器人+灵巧手+微型传动",
    "sealMoney": "1.3亿"
  },
  {
    "ticker": "001359",
    "name": "平安电工",
    "price": "74.91",
    "pct": "+10.00%",
    "limitUpTime": "14:46",
    "boards": "首板",
    "reason": "电子布+PCB概念+泰国建厂",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "603713",
    "name": "密尔克卫",
    "price": "66.66",
    "pct": "+10.00%",
    "limitUpTime": "13:32",
    "boards": "首板",
    "reason": "三季报增长+半导体物流+化工供应链",
    "sealMoney": "0.6亿"
  },
  {
    "ticker": "301502",
    "name": "华阳智能",
    "price": "64.80",
    "pct": "+20.00%",
    "limitUpTime": "09:33",
    "boards": "2连板",
    "reason": "机器人关节模组+无框电机+微特电机",
    "sealMoney": "0.7亿"
  },
  {
    "ticker": "301313",
    "name": "凡拓数创",
    "price": "61.44",
    "pct": "+20.00%",
    "limitUpTime": "13:24",
    "boards": "首板",
    "reason": "物理AI+数字孪生+具身智能",
    "sealMoney": "0.9亿"
  },
  {
    "ticker": "001283",
    "name": "豪鹏科技",
    "price": "57.27",
    "pct": "+10.01%",
    "limitUpTime": "14:18",
    "boards": "首板",
    "reason": "机器人电池+智能眼镜电池+三季报增长",
    "sealMoney": "0.0亿"
  },
  {
    "ticker": "603160",
    "name": "汇顶科技",
    "price": "56.49",
    "pct": "+10.01%",
    "limitUpTime": "13:43",
    "boards": "首板",
    "reason": "指纹识别+超声波指纹传感器+端侧安全+折叠屏",
    "sealMoney": "0.5亿"
  },
  {
    "ticker": "603448",
    "name": "天博智能",
    "price": "56.24",
    "pct": "+9.99%",
    "limitUpTime": "13:42",
    "boards": "首板",
    "reason": "机器人+六维力传感器+液冷+次新股",
    "sealMoney": "0.3亿"
  }
]

export const limitBreakTop: LimitBreakItem[] = [
  {
    "ticker": "301083",
    "name": "百胜智能",
    "price": "15.55",
    "pct": "+14.76%",
    "openTimes": 1,
    "turnover": "3亿"
  },
  {
    "ticker": "603728",
    "name": "鸣志电器",
    "price": "59.90",
    "pct": "+9.97%",
    "openTimes": 1,
    "turnover": "16亿"
  },
  {
    "ticker": "603626",
    "name": "科森科技",
    "price": "26.52",
    "pct": "+9.95%",
    "openTimes": 18,
    "turnover": "22亿"
  },
  {
    "ticker": "600851",
    "name": "海欣股份",
    "price": "9.24",
    "pct": "+8.71%",
    "openTimes": 1,
    "turnover": "3亿"
  },
  {
    "ticker": "002164",
    "name": "宁波东力",
    "price": "17.78",
    "pct": "+7.11%",
    "openTimes": 1,
    "turnover": "16亿"
  },
  {
    "ticker": "603600",
    "name": "永艺股份",
    "price": "10.79",
    "pct": "+6.62%",
    "openTimes": 1,
    "turnover": "3亿"
  },
  {
    "ticker": "603559",
    "name": "中通国脉",
    "price": "8.73",
    "pct": "+6.33%",
    "openTimes": 1,
    "turnover": "2亿"
  },
  {
    "ticker": "603186",
    "name": "华正新材",
    "price": "201.65",
    "pct": "+6.19%",
    "openTimes": 1,
    "turnover": "66亿"
  }
]

export const ladderBoards: LadderBoard[] = [
  {
    "label": "2板",
    "count": 9,
    "names": [
      "兆威机电",
      "华阳智能",
      "南方路机"
    ]
  },
  {
    "label": "3板",
    "count": 1,
    "names": [
      "上海九百"
    ]
  },
  {
    "label": "6板",
    "count": 2,
    "names": [
      "大业股份",
      "海洋王"
    ]
  }
]

export const hotStocks: RankItem[] = [
  {
    "rank": 1,
    "ticker": "688836",
    "name": "宇树科技",
    "heat": "6192570",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "300750",
    "name": "宁德时代",
    "heat": "5644375",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "002185",
    "name": "华天科技",
    "heat": "5080651",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "300308",
    "name": "中际旭创",
    "heat": "4879342",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "600825",
    "name": "新华传媒",
    "heat": "4169761",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "688825",
    "name": "长鑫科技",
    "heat": "4039382",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "603278",
    "name": "大业股份",
    "heat": "4009483",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "002724",
    "name": "海洋王",
    "heat": "3961316",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "300502",
    "name": "新易盛",
    "heat": "3829941",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "002242",
    "name": "九阳股份",
    "heat": "3069111",
    "rankChange": 0
  }
]

export const skyrockets: RankItem[] = [
  {
    "rank": 1,
    "ticker": "688836",
    "name": "宇树科技",
    "heat": "86669.0",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "002354",
    "name": "天娱数科",
    "heat": "28945.3",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "688256",
    "name": "寒武纪",
    "heat": "28800.3",
    "rankChange": 2
  },
  {
    "rank": 4,
    "ticker": "301313",
    "name": "凡拓数创",
    "heat": "27012.5",
    "rankChange": 1
  },
  {
    "rank": 5,
    "ticker": "000636",
    "name": "风华高科",
    "heat": "25399.9",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "002241",
    "name": "歌尔股份",
    "heat": "22357.5",
    "rankChange": 5
  },
  {
    "rank": 7,
    "ticker": "688825",
    "name": "长鑫科技",
    "heat": "20303.5",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "300296",
    "name": "利亚德",
    "heat": "18654.6",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "002343",
    "name": "慈文传媒",
    "heat": "18046.5",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "603278",
    "name": "大业股份",
    "heat": "16830.3",
    "rankChange": 0
  }
]

export const dragonTigerTop: DragonTigerItem[] = [
  {
    "rank": 2,
    "ticker": "000530",
    "name": "冰山冷热",
    "pct": "+9.97%",
    "netValue": "0.53亿",
    "orgNet": "-0.16亿",
    "hotMoneyNet": "-0.06亿",
    "concepts": [
      "冰雪产业",
      "无人零售",
      "军民融合"
    ]
  },
  {
    "rank": 2,
    "ticker": "000530",
    "name": "冰山冷热",
    "pct": "+9.97%",
    "netValue": "0.38亿",
    "orgNet": "-0.18亿",
    "hotMoneyNet": "—",
    "concepts": [
      "冰雪产业",
      "无人零售",
      "军民融合"
    ]
  },
  {
    "rank": 8,
    "ticker": "002724",
    "name": "海洋王",
    "pct": "+10.01%",
    "netValue": "0.83亿",
    "orgNet": "—",
    "hotMoneyNet": "—",
    "concepts": [
      "军工",
      "智慧城市",
      "智慧灯杆"
    ]
  },
  {
    "rank": 10,
    "ticker": "601091",
    "name": "沈鼓集团",
    "pct": "+9.99%",
    "netValue": "1.70亿",
    "orgNet": "—",
    "hotMoneyNet": "0.78亿",
    "concepts": [
      "注册制次新股",
      "天然气",
      "煤化工概念"
    ]
  },
  {
    "rank": 11,
    "ticker": "002696",
    "name": "百洋股份",
    "pct": "-6.75%",
    "netValue": "-0.01亿",
    "orgNet": "0.21亿",
    "hotMoneyNet": "—",
    "concepts": [
      "垃圾分类",
      "乡村振兴",
      "预制菜"
    ]
  },
  {
    "rank": 16,
    "ticker": "000678",
    "name": "襄阳轴承",
    "pct": "+9.96%",
    "netValue": "1.00亿",
    "orgNet": "-0.14亿",
    "hotMoneyNet": "0.27亿",
    "concepts": [
      "股权转让(并购重组)",
      "减速器",
      "军民融合"
    ]
  },
  {
    "rank": 17,
    "ticker": "003029",
    "name": "吉大正元",
    "pct": "-7.64%",
    "netValue": "-0.26亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.04亿",
    "concepts": [
      "电子身份证",
      "跨境支付(CIPS)",
      "数字水印"
    ]
  },
  {
    "rank": 18,
    "ticker": "600178",
    "name": "东安动力",
    "pct": "-9.96%",
    "netValue": "-0.21亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.09亿",
    "concepts": [
      "振兴东北",
      "减速器",
      "华为汽车"
    ]
  },
  {
    "rank": 19,
    "ticker": "600293",
    "name": "三峡新材",
    "pct": "+10.11%",
    "netValue": "-0.06亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.12亿",
    "concepts": [
      "股权转让(并购重组)",
      "参股银行",
      "国企改革"
    ]
  },
  {
    "rank": 21,
    "ticker": "002076",
    "name": "星光股份",
    "pct": "+10.20%",
    "netValue": "0.27亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.32亿",
    "concepts": [
      "创投",
      "数据要素",
      "智慧城市"
    ]
  }
]
