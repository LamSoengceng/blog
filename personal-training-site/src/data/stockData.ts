// 本文件由 scripts/generateStockData.mjs 自动生成，请勿手改。
// 数据源: hithink-finance（同花顺金融数据服务），数据日期: 2026-10-22 收盘
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
  "updatedAt": "2026-10-22 收盘",
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
    "value": "3,658.03",
    "change": "-55.00",
    "changePct": "-1.48%",
    "trend": [
      3813.79,
      3797.24,
      3800.86,
      3767.23,
      3707.48,
      3716.28,
      3730.92,
      3735.37,
      3713.03,
      3658.03
    ]
  },
  {
    "name": "沪深300",
    "symbol": "000300.SH",
    "region": "核心资产",
    "value": "4,036.30",
    "change": "-75.63",
    "changePct": "-1.84%",
    "trend": [
      4317.25,
      4287.98,
      4275.68,
      4217.68,
      4166.01,
      4170.61,
      4174.53,
      4152.11,
      4111.93,
      4036.3
    ]
  },
  {
    "name": "中证500",
    "symbol": "000905.SH",
    "region": "中盘成长",
    "value": "6,655.25",
    "change": "-185.31",
    "changePct": "-2.71%",
    "trend": [
      7251.01,
      7093.02,
      7085.09,
      6980.11,
      6769.25,
      6772.75,
      6800.66,
      6841.44,
      6840.56,
      6655.25
    ]
  },
  {
    "name": "中证1000",
    "symbol": "000852.SH",
    "region": "小盘弹性",
    "value": "6,578.27",
    "change": "-201.99",
    "changePct": "-2.98%",
    "trend": [
      7155.91,
      7021.47,
      7023.22,
      6905.17,
      6678.65,
      6681.94,
      6698.3,
      6766.9,
      6780.26,
      6578.27
    ]
  },
  {
    "name": "创业板指",
    "symbol": "399006.SZ",
    "region": "成长风格",
    "value": "2,576.90",
    "change": "-117.81",
    "changePct": "-4.37%",
    "trend": [
      3043.335,
      2963.824,
      2958.345,
      2866.763,
      2783.175,
      2772.384,
      2746.291,
      2739.203,
      2694.713,
      2576.901
    ]
  },
  {
    "name": "科创50",
    "symbol": "000688.SH",
    "region": "硬科技",
    "value": "1,305.87",
    "change": "-37.41",
    "changePct": "-2.78%",
    "trend": [
      1457.27,
      1426.72,
      1427.18,
      1380.26,
      1359.52,
      1358.65,
      1329.19,
      1342.42,
      1343.28,
      1305.87
    ]
  },
  {
    "name": "深证成指",
    "symbol": "399001.SZ",
    "region": "深市主板",
    "value": "11,357.32",
    "change": "-347.03",
    "changePct": "-2.96%",
    "trend": [
      12641.858,
      12384.869,
      12353.699,
      12110.591,
      11816.789,
      11802.459,
      11817.423,
      11801.29,
      11704.354,
      11357.32
    ]
  }
]

export const watchlist: WatchItem[] = [
  {
    "symbol": "510300",
    "name": "沪深300ETF",
    "category": "核心仓",
    "price": "4.107",
    "changePct": "-1.86%",
    "note": "用于观察大盘核心资产，不等同于买入建议。"
  },
  {
    "symbol": "510500",
    "name": "中证500ETF",
    "category": "中盘",
    "price": "6.684",
    "changePct": "-2.62%",
    "note": "适合作为中盘景气和市场广度的观察锚。"
  },
  {
    "symbol": "512100",
    "name": "中证1000ETF",
    "category": "小盘",
    "price": "2.672",
    "changePct": "-2.80%",
    "note": "波动弹性高，50w 账户要限制仓位拥挤。"
  },
  {
    "symbol": "588000",
    "name": "科创50ETF",
    "category": "硬科技",
    "price": "1.377",
    "changePct": "-2.89%",
    "note": "关注半导体、AI、创新药等成长估值修复。"
  },
  {
    "symbol": "159915",
    "name": "创业板ETF",
    "category": "成长",
    "price": "2.592",
    "changePct": "-4.46%",
    "note": "和风险偏好、美债利率、成长股情绪联动更强。"
  },
  {
    "symbol": "512480",
    "name": "半导体ETF",
    "category": "行业主题",
    "price": "0.808",
    "changePct": "-2.77%",
    "note": "主题弹性大，适合监控成交额和拥挤度。"
  },
  {
    "symbol": "515880",
    "name": "通信ETF",
    "category": "AI链条",
    "price": "0.503",
    "changePct": "-5.98%",
    "note": "关注算力、光模块、运营商资本开支。"
  },
  {
    "symbol": "512800",
    "name": "银行ETF",
    "category": "红利/防御",
    "price": "0.863",
    "changePct": "+0.12%",
    "note": "适合观察高股息、防御风格和利率预期。"
  },
  {
    "symbol": "513180",
    "name": "恒生科技ETF",
    "category": "港股弹性",
    "price": "0.475",
    "changePct": "-5.19%",
    "note": "受港股流动性、美元利率和互联网监管预期影响。"
  },
  {
    "symbol": "159941",
    "name": "纳指ETF",
    "category": "海外映射",
    "price": "1.682",
    "changePct": "-1.75%",
    "note": "不作为 A 股替代，只看全球科技风险偏好。"
  }
]

export const sectorPulse: SectorPulse[] = [
  {
    "name": "半导体",
    "changePct": "-2.96%",
    "breadth": "n/a",
    "note": "高弹性行业，重点看成交额放大是否持续。（指数代码 881121.TI）"
  },
  {
    "name": "AI算力",
    "changePct": "-3.57%",
    "breadth": "n/a",
    "note": "东数西算(算力)概念指数，主题强时容易拥挤。（指数代码 885957.TI）"
  },
  {
    "name": "高股息",
    "changePct": "-1.70%",
    "breadth": "n/a",
    "note": "高股息精选概念，防御风格，和利率、避险偏好相关。（指数代码 886072.TI）"
  },
  {
    "name": "消费复苏",
    "changePct": "-2.92%",
    "breadth": "n/a",
    "note": "以白酒行业指数代表消费链条景气验证。（指数代码 881273.TI）"
  },
  {
    "name": "新能源",
    "changePct": "-2.48%",
    "breadth": "n/a",
    "note": "光伏概念指数，供给出清和价格周期是核心变量。（指数代码 885531.TI）"
  },
  {
    "name": "券商",
    "changePct": "-1.13%",
    "breadth": "n/a",
    "note": "证券行业指数，常作为风险偏好和成交额弹性的放大器。（指数代码 881157.TI）"
  }
]

export const domesticFlows: DomesticFlow[] = [
  {
    "name": "两市成交额",
    "value": "1.53万亿",
    "state": "1.53万亿（沪+深）",
    "note": "沪市+深市成交额合计（hithink 指数快照口径），判断行情级别的第一层过滤器。"
  },
  {
    "name": "沪市成交额",
    "value": "7061亿",
    "state": "占两市 46.2%",
    "note": "沪市主板与科创板合计成交，观察权重与大盘活跃度。"
  },
  {
    "name": "深市成交额",
    "value": "8226亿",
    "state": "占两市 53.8%",
    "note": "深市主板与中小盘成交，观察成长与题材活跃度。"
  },
  {
    "name": "创业板成交额",
    "value": "4062亿",
    "state": "占深市 49.4%",
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
  "tradeDate": "2026-10-22",
  "limitUpCount": 33,
  "limitBreakCount": 22,
  "hotStockCount": 30
}

export const limitUpTop: LimitUpItem[] = [
  {
    "ticker": "003021",
    "name": "兆威机电",
    "price": "83.39",
    "pct": "+10.00%",
    "limitUpTime": "09:30",
    "boards": "首板",
    "reason": "人形机器人+灵巧手+微型传动",
    "sealMoney": "0.7亿"
  },
  {
    "ticker": "603728",
    "name": "鸣志电器",
    "price": "54.47",
    "pct": "+10.00%",
    "limitUpTime": "09:43",
    "boards": "首板",
    "reason": "人形机器人+运动控制+数据中心液冷",
    "sealMoney": "0.0亿"
  },
  {
    "ticker": "301502",
    "name": "华阳智能",
    "price": "54.00",
    "pct": "+20.00%",
    "limitUpTime": "09:36",
    "boards": "首板",
    "reason": "机器人关节+无框电机+微特电机",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "301023",
    "name": "奕帆传动",
    "price": "32.48",
    "pct": "+19.99%",
    "limitUpTime": "11:10",
    "boards": "首板",
    "reason": "人形机器人+微特减速电机+伺服电机",
    "sealMoney": "0.2亿"
  },
  {
    "ticker": "603350",
    "name": "安乃达",
    "price": "29.48",
    "pct": "+10.00%",
    "limitUpTime": "09:34",
    "boards": "首板",
    "reason": "具身智能+两轮电驱+系统集成",
    "sealMoney": "0.5亿"
  },
  {
    "ticker": "603280",
    "name": "南方路机",
    "price": "29.06",
    "pct": "+9.99%",
    "limitUpTime": "09:43",
    "boards": "首板",
    "reason": "工程搅拌+智能机器人+AI智能体",
    "sealMoney": "0.5亿"
  },
  {
    "ticker": "603370",
    "name": "华新精科",
    "price": "28.71",
    "pct": "+10.00%",
    "limitUpTime": "14:53",
    "boards": "首板",
    "reason": "人形机器人+精密铁芯",
    "sealMoney": "0.0亿"
  },
  {
    "ticker": "002983",
    "name": "芯瑞达",
    "price": "23.43",
    "pct": "+10.00%",
    "limitUpTime": "14:35",
    "boards": "首板",
    "reason": "Mini/Micro-LED+AR-AI显示+像素车灯",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "601091",
    "name": "沈鼓集团",
    "price": "21.58",
    "pct": "+9.99%",
    "limitUpTime": "09:37",
    "boards": "首板",
    "reason": "离心压缩机+煤化工+核电装备",
    "sealMoney": "0.2亿"
  },
  {
    "ticker": "300839",
    "name": "博汇股份",
    "price": "19.92",
    "pct": "+20.00%",
    "limitUpTime": "09:31",
    "boards": "首板",
    "reason": "液冷算力+特种油升级+三季报增长",
    "sealMoney": "0.4亿"
  },
  {
    "ticker": "603933",
    "name": "睿能科技",
    "price": "19.04",
    "pct": "+9.99%",
    "limitUpTime": "13:59",
    "boards": "首板",
    "reason": "人形机器人+工业自动化+IC分销",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "001360",
    "name": "南矿集团",
    "price": "18.58",
    "pct": "+10.01%",
    "limitUpTime": "09:25",
    "boards": "首板",
    "reason": "矿山装备+金属矿山+智能运维",
    "sealMoney": "3.3亿"
  }
]

export const limitBreakTop: LimitBreakItem[] = [
  {
    "ticker": "301563",
    "name": "云汉芯城",
    "price": "110.35",
    "pct": "+16.16%",
    "openTimes": 1,
    "turnover": "6亿"
  },
  {
    "ticker": "002185",
    "name": "华天科技",
    "price": "15.55",
    "pct": "+9.12%",
    "openTimes": 1,
    "turnover": "34亿"
  },
  {
    "ticker": "002593",
    "name": "日上集团",
    "price": "4.87",
    "pct": "+8.95%",
    "openTimes": 3,
    "turnover": "3亿"
  },
  {
    "ticker": "002520",
    "name": "日发精机",
    "price": "6.10",
    "pct": "+7.77%",
    "openTimes": 5,
    "turnover": "6亿"
  },
  {
    "ticker": "603126",
    "name": "中材节能",
    "price": "6.45",
    "pct": "+6.09%",
    "openTimes": 5,
    "turnover": "3亿"
  },
  {
    "ticker": "002877",
    "name": "智能自控",
    "price": "7.61",
    "pct": "+5.69%",
    "openTimes": 1,
    "turnover": "2亿"
  },
  {
    "ticker": "600360",
    "name": "华微电子",
    "price": "9.76",
    "pct": "+5.63%",
    "openTimes": 1,
    "turnover": "6亿"
  },
  {
    "ticker": "601177",
    "name": "杭齿前进",
    "price": "13.94",
    "pct": "+5.37%",
    "openTimes": 1,
    "turnover": "4亿"
  }
]

export const ladderBoards: LadderBoard[] = [
  {
    "label": "2板",
    "count": 5,
    "names": [
      "上海九百",
      "出版传媒",
      "哈空调"
    ]
  },
  {
    "label": "3板",
    "count": 2,
    "names": [
      "三峡新材",
      "星光股份"
    ]
  },
  {
    "label": "5板",
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
    "ticker": "300750",
    "name": "宁德时代",
    "heat": "7418537",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "000530",
    "name": "冰山冷热",
    "heat": "4604903",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "600825",
    "name": "新华传媒",
    "heat": "4536572",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "300308",
    "name": "中际旭创",
    "heat": "4511029",
    "rankChange": 1
  },
  {
    "rank": 5,
    "ticker": "002242",
    "name": "九阳股份",
    "heat": "4417962",
    "rankChange": -1
  },
  {
    "rank": 6,
    "ticker": "300502",
    "name": "新易盛",
    "heat": "4142882",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "002185",
    "name": "华天科技",
    "heat": "3481899",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "688836",
    "name": "宇树科技",
    "heat": "3260538",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "002724",
    "name": "海洋王",
    "heat": "3256793",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "688825",
    "name": "长鑫科技",
    "heat": "3229528",
    "rankChange": 0
  }
]

export const skyrockets: RankItem[] = [
  {
    "rank": 1,
    "ticker": "300502",
    "name": "新易盛",
    "heat": "77227.7",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "300308",
    "name": "中际旭创",
    "heat": "74493.4",
    "rankChange": 1
  },
  {
    "rank": 3,
    "ticker": "002185",
    "name": "华天科技",
    "heat": "68930.3",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "600584",
    "name": "长电科技",
    "heat": "36774.6",
    "rankChange": 1
  },
  {
    "rank": 5,
    "ticker": "002388",
    "name": "新亚制程",
    "heat": "27261.7",
    "rankChange": 2
  },
  {
    "rank": 6,
    "ticker": "000678",
    "name": "襄阳轴承",
    "heat": "26892.0",
    "rankChange": 1
  },
  {
    "rank": 7,
    "ticker": "002249",
    "name": "大洋电机",
    "heat": "24897.6",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "603186",
    "name": "华正新材",
    "heat": "22127.1",
    "rankChange": 11
  },
  {
    "rank": 9,
    "ticker": "601091",
    "name": "沈鼓集团",
    "heat": "20826.7",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "003021",
    "name": "兆威机电",
    "heat": "18725.9",
    "rankChange": 3
  }
]

export const dragonTigerTop: DragonTigerItem[] = [
  {
    "rank": 2,
    "ticker": "002242",
    "name": "九阳股份",
    "pct": "+10.02%",
    "netValue": "0.77亿",
    "orgNet": "0.19亿",
    "hotMoneyNet": "-0.86亿",
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
    "pct": "+10.02%",
    "netValue": "0.22亿",
    "orgNet": "-0.21亿",
    "hotMoneyNet": "—",
    "concepts": [
      "家用电器",
      "净水概念",
      "绿色电力"
    ]
  },
  {
    "rank": 3,
    "ticker": "000530",
    "name": "冰山冷热",
    "pct": "+5.63%",
    "netValue": "0.72亿",
    "orgNet": "0.19亿",
    "hotMoneyNet": "-0.03亿",
    "concepts": [
      "冰雪产业",
      "体育产业",
      "中俄贸易概念"
    ]
  },
  {
    "rank": 5,
    "ticker": "002639",
    "name": "雪人集团",
    "pct": "+10.00%",
    "netValue": "2.10亿",
    "orgNet": "—",
    "hotMoneyNet": "0.15亿",
    "concepts": [
      "冰雪产业",
      "空气能热泵",
      "天然气"
    ]
  },
  {
    "rank": 6,
    "ticker": "003029",
    "name": "吉大正元",
    "pct": "-3.57%",
    "netValue": "-0.53亿",
    "orgNet": "—",
    "hotMoneyNet": "0.09亿",
    "concepts": [
      "数字货币",
      "电子身份证",
      "跨境支付(CIPS)"
    ]
  },
  {
    "rank": 8,
    "ticker": "600127",
    "name": "金健米业",
    "pct": "+2.79%",
    "netValue": "-0.66亿",
    "orgNet": "—",
    "hotMoneyNet": "0.12亿",
    "concepts": [
      "乳业",
      "玉米",
      "粮食概念"
    ]
  },
  {
    "rank": 11,
    "ticker": "002724",
    "name": "海洋王",
    "pct": "+10.04%",
    "netValue": "-0.19亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.48亿",
    "concepts": [
      "军工",
      "智慧灯杆",
      "新型城镇化"
    ]
  },
  {
    "rank": 13,
    "ticker": "002696",
    "name": "百洋股份",
    "pct": "+10.04%",
    "netValue": "1.11亿",
    "orgNet": "0.33亿",
    "hotMoneyNet": "-0.02亿",
    "concepts": [
      "乡村振兴",
      "预制菜",
      "国企改革"
    ]
  },
  {
    "rank": 14,
    "ticker": "603278",
    "name": "大业股份",
    "pct": "+10.01%",
    "netValue": "0.35亿",
    "orgNet": "—",
    "hotMoneyNet": "0.09亿",
    "concepts": [
      "风电",
      "人形机器人",
      "高端装备"
    ]
  },
  {
    "rank": 15,
    "ticker": "600178",
    "name": "东安动力",
    "pct": "+9.99%",
    "netValue": "0.26亿",
    "orgNet": "—",
    "hotMoneyNet": "0.02亿",
    "concepts": [
      "振兴东北",
      "央企国企改革",
      "国企改革"
    ]
  }
]
