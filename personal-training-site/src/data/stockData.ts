// 本文件由 scripts/generateStockData.mjs 自动生成，请勿手改。
// 数据源: hithink-finance（同花顺金融数据服务），数据日期: 2026-11-19 收盘
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

export type CapitalMetric = {
  label: string
  value: string
  note: string
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
  openTimes: number | string // 数据缺失时写入 '—'
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
  "updatedAt": "2026-11-19 收盘",
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
    "value": "3,577.62",
    "change": "-10.21",
    "changePct": "-0.28%",
    "trend": [
      3649.18,
      3660.79,
      3663.72,
      3680.64,
      3655.83,
      3634.35,
      3602.57,
      3584.58,
      3587.83,
      3577.62
    ]
  },
  {
    "name": "沪深300",
    "symbol": "000300.SH",
    "region": "核心资产",
    "value": "3,984.84",
    "change": "+1.07",
    "changePct": "+0.03%",
    "trend": [
      4054.28,
      4056.11,
      4059.11,
      4075.71,
      4043.93,
      4016.29,
      3979.8,
      3976.46,
      3983.77,
      3984.84
    ]
  },
  {
    "name": "中证500",
    "symbol": "000905.SH",
    "region": "中盘成长",
    "value": "6,251.96",
    "change": "-30.26",
    "changePct": "-0.48%",
    "trend": [
      6597.35,
      6586.18,
      6645.89,
      6713.18,
      6604.15,
      6465.49,
      6297.18,
      6283.01,
      6282.22,
      6251.96
    ]
  },
  {
    "name": "中证1000",
    "symbol": "000852.SH",
    "region": "小盘弹性",
    "value": "5,938.90",
    "change": "-113.92",
    "changePct": "-1.88%",
    "trend": [
      6505.35,
      6499.74,
      6579.36,
      6669.55,
      6537.84,
      6357.26,
      6164.62,
      6092.39,
      6052.82,
      5938.9
    ]
  },
  {
    "name": "创业板指",
    "symbol": "399006.SZ",
    "region": "成长风格",
    "value": "2,293.34",
    "change": "-18.28",
    "changePct": "-0.79%",
    "trend": [
      2465.232,
      2458.562,
      2494.397,
      2572.067,
      2509.429,
      2426.085,
      2320.02,
      2292.204,
      2311.621,
      2293.342
    ]
  },
  {
    "name": "科创50",
    "symbol": "000688.SH",
    "region": "硬科技",
    "value": "1,270.78",
    "change": "+22.79",
    "changePct": "+1.83%",
    "trend": [
      1253.2,
      1256.96,
      1265.02,
      1300.38,
      1309.84,
      1279.66,
      1213.68,
      1221.19,
      1247.99,
      1270.78
    ]
  },
  {
    "name": "深证成指",
    "symbol": "399001.SZ",
    "region": "深市主板",
    "value": "10,583.20",
    "change": "-76.21",
    "changePct": "-0.71%",
    "trend": [
      11175.781,
      11145.491,
      11241.536,
      11389.737,
      11197.976,
      10968.787,
      10690.778,
      10638.524,
      10659.412,
      10583.204
    ]
  }
]

export const watchlist: WatchItem[] = [
  {
    "symbol": "510300",
    "name": "沪深300ETF",
    "category": "核心仓",
    "price": "4.060",
    "changePct": "+0.05%",
    "note": "用于观察大盘核心资产，不等同于买入建议。"
  },
  {
    "symbol": "510500",
    "name": "中证500ETF",
    "category": "中盘",
    "price": "6.286",
    "changePct": "-0.36%",
    "note": "适合作为中盘景气和市场广度的观察锚。"
  },
  {
    "symbol": "512100",
    "name": "中证1000ETF",
    "category": "小盘",
    "price": "2.416",
    "changePct": "-1.91%",
    "note": "波动弹性高，50w 账户要限制仓位拥挤。"
  },
  {
    "symbol": "588000",
    "name": "科创50ETF",
    "category": "硬科技",
    "price": "1.344",
    "changePct": "+1.66%",
    "note": "关注半导体、AI、创新药等成长估值修复。"
  },
  {
    "symbol": "159915",
    "name": "创业板ETF",
    "category": "成长",
    "price": "2.308",
    "changePct": "-0.86%",
    "note": "和风险偏好、美债利率、成长股情绪联动更强。"
  },
  {
    "symbol": "512480",
    "name": "半导体ETF",
    "category": "行业主题",
    "price": "0.779",
    "changePct": "+1.04%",
    "note": "主题弹性大，适合监控成交额和拥挤度。"
  },
  {
    "symbol": "515880",
    "name": "通信ETF",
    "category": "AI链条",
    "price": "0.380",
    "changePct": "-0.52%",
    "note": "关注算力、光模块、运营商资本开支。"
  },
  {
    "symbol": "512800",
    "name": "银行ETF",
    "category": "红利/防御",
    "price": "0.915",
    "changePct": "+0.11%",
    "note": "适合观察高股息、防御风格和利率预期。"
  },
  {
    "symbol": "513180",
    "name": "恒生科技ETF",
    "category": "港股弹性",
    "price": "0.456",
    "changePct": "-2.36%",
    "note": "受港股流动性、美元利率和互联网监管预期影响。"
  },
  {
    "symbol": "159941",
    "name": "纳指ETF",
    "category": "海外映射",
    "price": "1.610",
    "changePct": "+0.50%",
    "note": "不作为 A 股替代，只看全球科技风险偏好。"
  }
]

export const sectorPulse: SectorPulse[] = [
  {
    "name": "半导体",
    "changePct": "-0.80%",
    "breadth": "n/a",
    "note": "高弹性行业，重点看成交额放大是否持续。（指数代码 881121.TI）"
  },
  {
    "name": "AI算力",
    "changePct": "-3.38%",
    "breadth": "n/a",
    "note": "东数西算(算力)概念指数，主题强时容易拥挤。（指数代码 885957.TI）"
  },
  {
    "name": "高股息",
    "changePct": "-0.68%",
    "breadth": "n/a",
    "note": "高股息精选概念，防御风格，和利率、避险偏好相关。（指数代码 886072.TI）"
  },
  {
    "name": "消费复苏",
    "changePct": "-1.88%",
    "breadth": "n/a",
    "note": "以白酒行业指数代表消费链条景气验证。（指数代码 881273.TI）"
  },
  {
    "name": "新能源",
    "changePct": "-2.43%",
    "breadth": "n/a",
    "note": "光伏概念指数，供给出清和价格周期是核心变量。（指数代码 885531.TI）"
  },
  {
    "name": "券商",
    "changePct": "-0.05%",
    "breadth": "n/a",
    "note": "证券行业指数，常作为风险偏好和成交额弹性的放大器。（指数代码 881157.TI）"
  }
]

export const domesticFlows: DomesticFlow[] = [
  {
    "name": "两市成交额",
    "value": "1.31万亿",
    "state": "1.31万亿（沪+深）",
    "note": "沪市+深市成交额合计（hithink 指数快照口径），判断行情级别的第一层过滤器。"
  },
  {
    "name": "沪市成交额",
    "value": "6369亿",
    "state": "占两市 48.8%",
    "note": "沪市主板与科创板合计成交，观察权重与大盘活跃度。"
  },
  {
    "name": "深市成交额",
    "value": "6682亿",
    "state": "占两市 51.2%",
    "note": "深市主板与中小盘成交，观察成长与题材活跃度。"
  },
  {
    "name": "创业板成交额",
    "value": "3144亿",
    "state": "占深市 47.0%",
    "note": "成长风格成交占比，50w 账户重点关注 ETF 资金而不是短线热榜。"
  }
]

export const stockBreadth = {
  "tradeDate": "2026-11-19",
  "limitUpCount": 26,
  "limitBreakCount": 24,
  "hotStockCount": 30
}

export const limitUpTop: LimitUpItem[] = [
  {
    "ticker": "605178",
    "name": "时空科技",
    "price": "53.25",
    "pct": "+10.00%",
    "limitUpTime": "10:56",
    "boards": "首板",
    "reason": "存储芯片+拟收购嘉合劲威+智慧城市",
    "sealMoney": "0.6亿"
  },
  {
    "ticker": "002242",
    "name": "九阳股份",
    "price": "31.21",
    "pct": "+10.01%",
    "limitUpTime": "10:24",
    "boards": "首板",
    "reason": "厨房小家电+机器人投资+“羊”字辈",
    "sealMoney": "0.6亿"
  },
  {
    "ticker": "603931",
    "name": "格林达",
    "price": "29.15",
    "pct": "+10.00%",
    "limitUpTime": "09:31",
    "boards": "首板",
    "reason": "湿电子化学品+先进封装+光刻胶",
    "sealMoney": "0.8亿"
  },
  {
    "ticker": "001358",
    "name": "兴欣新材",
    "price": "28.55",
    "pct": "+10.02%",
    "limitUpTime": "13:07",
    "boards": "首板",
    "reason": "光刻胶剥离液+电子化学品项目+股份回购",
    "sealMoney": "0.2亿"
  },
  {
    "ticker": "603078",
    "name": "江化微",
    "price": "26.86",
    "pct": "+9.99%",
    "limitUpTime": "13:06",
    "boards": "首板",
    "reason": "湿电子化学品+存储芯片+上海国资",
    "sealMoney": "0.8亿"
  },
  {
    "ticker": "603324",
    "name": "盛剑科技",
    "price": "25.19",
    "pct": "+10.00%",
    "limitUpTime": "09:37",
    "boards": "3连板",
    "reason": "光刻胶+半导体附属装备+电子化学品",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "603813",
    "name": "原尚股份",
    "price": "22.90",
    "pct": "+9.99%",
    "limitUpTime": "10:17",
    "boards": "首板",
    "reason": "氢能物流+空港物流+跨境电商",
    "sealMoney": "0.7亿"
  },
  {
    "ticker": "600520",
    "name": "三佳科技",
    "price": "22.17",
    "pct": "+10.02%",
    "limitUpTime": "09:42",
    "boards": "首板",
    "reason": "先进封装+半导体封装装备+合肥国资",
    "sealMoney": "0.6亿"
  },
  {
    "ticker": "301348",
    "name": "蓝箭电子",
    "price": "21.66",
    "pct": "+20.00%",
    "limitUpTime": "10:16",
    "boards": "首板",
    "reason": "半导体封测+存储芯片封装+芯片设计",
    "sealMoney": "0.5亿"
  },
  {
    "ticker": "000678",
    "name": "襄阳轴承",
    "price": "16.74",
    "pct": "+9.99%",
    "limitUpTime": "09:43",
    "boards": "首板",
    "reason": "机器人轴承+汽车轴承+湖北国资+“羊”字辈",
    "sealMoney": "0.5亿"
  },
  {
    "ticker": "600619",
    "name": "海立股份",
    "price": "15.07",
    "pct": "+10.00%",
    "limitUpTime": "10:48",
    "boards": "首板",
    "reason": "光刻机冷却+空调压缩机+上海国资",
    "sealMoney": "0.7亿"
  },
  {
    "ticker": "002771",
    "name": "真视通",
    "price": "14.38",
    "pct": "+10.02%",
    "limitUpTime": "09:25",
    "boards": "3连板",
    "reason": "液冷算力+华为+多媒体视讯",
    "sealMoney": "2.1亿"
  }
]

export const limitBreakTop: LimitBreakItem[] = [
  {
    "ticker": "301391",
    "name": "卡莱特",
    "price": "55.98",
    "pct": "+19.97%",
    "openTimes": 2,
    "turnover": "8亿"
  },
  {
    "ticker": "688691",
    "name": "灿芯股份",
    "price": "61.27",
    "pct": "+15.30%",
    "openTimes": 1,
    "turnover": "13亿"
  },
  {
    "ticker": "688172",
    "name": "燕东微",
    "price": "37.51",
    "pct": "+11.37%",
    "openTimes": 1,
    "turnover": "17亿"
  },
  {
    "ticker": "688419",
    "name": "耐科装备",
    "price": "37.71",
    "pct": "+10.75%",
    "openTimes": 1,
    "turnover": "2亿"
  },
  {
    "ticker": "002146",
    "name": "荣盛发展",
    "price": "1.02",
    "pct": "+9.68%",
    "openTimes": 1,
    "turnover": "4亿"
  },
  {
    "ticker": "603486",
    "name": "科沃斯",
    "price": "50.33",
    "pct": "+7.66%",
    "openTimes": 1,
    "turnover": "8亿"
  },
  {
    "ticker": "001219",
    "name": "青岛食品",
    "price": "18.07",
    "pct": "+7.37%",
    "openTimes": 4,
    "turnover": "9亿"
  },
  {
    "ticker": "600103",
    "name": "青山纸业",
    "price": "3.36",
    "pct": "+7.01%",
    "openTimes": 4,
    "turnover": "17亿"
  }
]

export const ladderDate: string | null = "2026-11-19"

export const ladderBoards: LadderBoard[] = [
  {
    "label": "2板",
    "count": 2,
    "names": [
      "京蓝科技",
      "华升股份"
    ]
  },
  {
    "label": "3板",
    "count": 3,
    "names": [
      "全筑股份",
      "盛剑科技",
      "真视通"
    ]
  }
]

export const hotStocks: RankItem[] = [
  {
    "rank": 1,
    "ticker": "002242",
    "name": "九阳股份",
    "heat": "16006292",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "600410",
    "name": "华胜天成",
    "heat": "6991520",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "300308",
    "name": "中际旭创",
    "heat": "5497818",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "002685",
    "name": "华东重机",
    "heat": "4564427",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "300502",
    "name": "新易盛",
    "heat": "4484744",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "000530",
    "name": "冰山冷热",
    "heat": "3595573",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "002148",
    "name": "北纬科技",
    "heat": "3536485",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "000678",
    "name": "襄阳轴承",
    "heat": "3511308",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "000158",
    "name": "常山北明",
    "heat": "3052335",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "002086",
    "name": "东方海洋",
    "heat": "2723578",
    "rankChange": 0
  }
]

export const skyrockets: RankItem[] = [
  {
    "rank": 1,
    "ticker": "002242",
    "name": "九阳股份",
    "heat": "43767.4",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "000678",
    "name": "襄阳轴承",
    "heat": "36025.9",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "002579",
    "name": "中京电子",
    "heat": "23312.7",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "301348",
    "name": "蓝箭电子",
    "heat": "21378.9",
    "rankChange": 2
  },
  {
    "rank": 5,
    "ticker": "603078",
    "name": "江化微",
    "heat": "21139.7",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "600619",
    "name": "海立股份",
    "heat": "19320.6",
    "rankChange": 2
  },
  {
    "rank": 7,
    "ticker": "002077",
    "name": "大港股份",
    "heat": "18053.5",
    "rankChange": 4
  },
  {
    "rank": 8,
    "ticker": "600584",
    "name": "长电科技",
    "heat": "17281.2",
    "rankChange": 1
  },
  {
    "rank": 9,
    "ticker": "300502",
    "name": "新易盛",
    "heat": "17227.4",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "600103",
    "name": "青山纸业",
    "heat": "16793.8",
    "rankChange": 1
  }
]

export const dragonTigerTop: DragonTigerItem[] = [
  {
    "rank": 1,
    "ticker": "002242",
    "name": "九阳股份",
    "pct": "+10.01%",
    "netValue": "1.06亿",
    "orgNet": "0.15亿",
    "hotMoneyNet": "—",
    "concepts": [
      "智能家居",
      "净水概念",
      "绿色电力"
    ]
  },
  {
    "rank": 2,
    "ticker": "600410",
    "name": "华胜天成",
    "pct": "-0.71%",
    "netValue": "-0.94亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.59亿",
    "concepts": [
      "云计算",
      "东数西算(算力)",
      "网络安全"
    ]
  },
  {
    "rank": 3,
    "ticker": "000530",
    "name": "冰山冷热",
    "pct": "-9.99%",
    "netValue": "-0.57亿",
    "orgNet": "-1.64亿",
    "hotMoneyNet": "0.67亿",
    "concepts": [
      "空气能热泵",
      "冰雪产业",
      "无人零售"
    ]
  },
  {
    "rank": 4,
    "ticker": "002685",
    "name": "华东重机",
    "pct": "+4.07%",
    "netValue": "0.37亿",
    "orgNet": "—",
    "hotMoneyNet": "0.69亿",
    "concepts": [
      "航运概念",
      "信创",
      "DeepSeek概念"
    ]
  },
  {
    "rank": 5,
    "ticker": "002086",
    "name": "东方海洋",
    "pct": "-8.58%",
    "netValue": "0.80亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.03亿",
    "concepts": [
      "幽门螺杆菌概念",
      "预制菜",
      "猴痘概念"
    ]
  },
  {
    "rank": 6,
    "ticker": "000678",
    "name": "襄阳轴承",
    "pct": "+9.99%",
    "netValue": "1.93亿",
    "orgNet": "-0.46亿",
    "hotMoneyNet": "—",
    "concepts": [
      "股权转让(并购重组)",
      "减速器",
      "农机"
    ]
  },
  {
    "rank": 7,
    "ticker": "002148",
    "name": "北纬科技",
    "pct": "+4.26%",
    "netValue": "-0.41亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.31亿",
    "concepts": [
      "手机游戏",
      "抖音概念(字节概念)",
      "网络游戏"
    ]
  },
  {
    "rank": 9,
    "ticker": "600715",
    "name": "文投控股",
    "pct": "-9.90%",
    "netValue": "-0.93亿",
    "orgNet": "—",
    "hotMoneyNet": "0.13亿",
    "concepts": [
      "手机游戏",
      "网络游戏",
      "短剧游戏"
    ]
  },
  {
    "rank": 11,
    "ticker": "000158",
    "name": "常山北明",
    "pct": "+4.83%",
    "netValue": "1.65亿",
    "orgNet": "-0.09亿",
    "hotMoneyNet": "1.05亿",
    "concepts": [
      "华为昇腾",
      "华为盘古",
      "算力租赁"
    ]
  },
  {
    "rank": 20,
    "ticker": "600327",
    "name": "大东方",
    "pct": "-6.79%",
    "netValue": "0.18亿",
    "orgNet": "—",
    "hotMoneyNet": "0.39亿",
    "concepts": [
      "信托概念",
      "民营医院",
      "预制菜"
    ]
  }
]
