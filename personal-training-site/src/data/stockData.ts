// 本文件由 scripts/generateStockData.mjs 自动生成，请勿手改。
// 数据源: hithink-finance（同花顺金融数据服务），数据日期: 2026-11-24 收盘
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
  "updatedAt": "2026-11-24 收盘",
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
    "value": "3,548.37",
    "change": "+9.42",
    "changePct": "+0.27%",
    "trend": [
      3680.64,
      3655.83,
      3634.35,
      3602.57,
      3584.58,
      3587.83,
      3577.62,
      3533.79,
      3538.95,
      3548.37
    ]
  },
  {
    "name": "沪深300",
    "symbol": "000300.SH",
    "region": "核心资产",
    "value": "3,963.82",
    "change": "+5.53",
    "changePct": "+0.14%",
    "trend": [
      4075.71,
      4043.93,
      4016.29,
      3979.8,
      3976.46,
      3983.77,
      3984.84,
      3954.57,
      3958.29,
      3963.82
    ]
  },
  {
    "name": "中证500",
    "symbol": "000905.SH",
    "region": "中盘成长",
    "value": "6,112.43",
    "change": "-16.56",
    "changePct": "-0.27%",
    "trend": [
      6713.18,
      6604.15,
      6465.49,
      6297.18,
      6283.01,
      6282.22,
      6251.96,
      6006.08,
      6128.99,
      6112.43
    ]
  },
  {
    "name": "中证1000",
    "symbol": "000852.SH",
    "region": "小盘弹性",
    "value": "5,799.01",
    "change": "-13.31",
    "changePct": "-0.23%",
    "trend": [
      6669.55,
      6537.84,
      6357.26,
      6164.62,
      6092.39,
      6052.82,
      5938.9,
      5648.63,
      5812.32,
      5799.01
    ]
  },
  {
    "name": "创业板指",
    "symbol": "399006.SZ",
    "region": "成长风格",
    "value": "2,278.99",
    "change": "-1.21",
    "changePct": "-0.05%",
    "trend": [
      2572.067,
      2509.429,
      2426.085,
      2320.02,
      2292.204,
      2311.621,
      2293.342,
      2212.127,
      2280.204,
      2278.994
    ]
  },
  {
    "name": "科创50",
    "symbol": "000688.SH",
    "region": "硬科技",
    "value": "1,250.09",
    "change": "+22.20",
    "changePct": "+1.81%",
    "trend": [
      1300.38,
      1309.84,
      1279.66,
      1213.68,
      1221.19,
      1247.99,
      1270.78,
      1231.09,
      1227.89,
      1250.09
    ]
  },
  {
    "name": "深证成指",
    "symbol": "399001.SZ",
    "region": "深市主板",
    "value": "10,423.60",
    "change": "-30.77",
    "changePct": "-0.29%",
    "trend": [
      11389.737,
      11197.976,
      10968.787,
      10690.778,
      10638.524,
      10659.412,
      10583.204,
      10256.389,
      10454.37,
      10423.603
    ]
  }
]

export const watchlist: WatchItem[] = [
  {
    "symbol": "510300",
    "name": "沪深300ETF",
    "category": "核心仓",
    "price": "4.033",
    "changePct": "+0.25%",
    "note": "用于观察大盘核心资产，不等同于买入建议。"
  },
  {
    "symbol": "510500",
    "name": "中证500ETF",
    "category": "中盘",
    "price": "6.126",
    "changePct": "-0.55%",
    "note": "适合作为中盘景气和市场广度的观察锚。"
  },
  {
    "symbol": "512100",
    "name": "中证1000ETF",
    "category": "小盘",
    "price": "2.354",
    "changePct": "-0.34%",
    "note": "波动弹性高，50w 账户要限制仓位拥挤。"
  },
  {
    "symbol": "588000",
    "name": "科创50ETF",
    "category": "硬科技",
    "price": "1.319",
    "changePct": "+1.62%",
    "note": "关注半导体、AI、创新药等成长估值修复。"
  },
  {
    "symbol": "159915",
    "name": "创业板ETF",
    "category": "成长",
    "price": "2.292",
    "changePct": "-0.13%",
    "note": "和风险偏好、美债利率、成长股情绪联动更强。"
  },
  {
    "symbol": "512480",
    "name": "半导体ETF",
    "category": "行业主题",
    "price": "0.759",
    "changePct": "+1.47%",
    "note": "主题弹性大，适合监控成交额和拥挤度。"
  },
  {
    "symbol": "515880",
    "name": "通信ETF",
    "category": "AI链条",
    "price": "0.384",
    "changePct": "+0.79%",
    "note": "关注算力、光模块、运营商资本开支。"
  },
  {
    "symbol": "512800",
    "name": "银行ETF",
    "category": "红利/防御",
    "price": "0.923",
    "changePct": "+0.76%",
    "note": "适合观察高股息、防御风格和利率预期。"
  },
  {
    "symbol": "513180",
    "name": "恒生科技ETF",
    "category": "港股弹性",
    "price": "0.432",
    "changePct": "-1.82%",
    "note": "受港股流动性、美元利率和互联网监管预期影响。"
  },
  {
    "symbol": "159941",
    "name": "纳指ETF",
    "category": "海外映射",
    "price": "1.560",
    "changePct": "+2.83%",
    "note": "不作为 A 股替代，只看全球科技风险偏好。"
  }
]

export const sectorPulse: SectorPulse[] = [
  {
    "name": "半导体",
    "changePct": "+1.07%",
    "breadth": "n/a",
    "note": "高弹性行业，重点看成交额放大是否持续。（指数代码 881121.TI）"
  },
  {
    "name": "AI算力",
    "changePct": "+0.16%",
    "breadth": "n/a",
    "note": "东数西算(算力)概念指数，主题强时容易拥挤。（指数代码 885957.TI）"
  },
  {
    "name": "高股息",
    "changePct": "-0.79%",
    "breadth": "n/a",
    "note": "高股息精选概念，防御风格，和利率、避险偏好相关。（指数代码 886072.TI）"
  },
  {
    "name": "消费复苏",
    "changePct": "-0.42%",
    "breadth": "n/a",
    "note": "以白酒行业指数代表消费链条景气验证。（指数代码 881273.TI）"
  },
  {
    "name": "新能源",
    "changePct": "-0.10%",
    "breadth": "n/a",
    "note": "光伏概念指数，供给出清和价格周期是核心变量。（指数代码 885531.TI）"
  },
  {
    "name": "券商",
    "changePct": "-1.56%",
    "breadth": "n/a",
    "note": "证券行业指数，常作为风险偏好和成交额弹性的放大器。（指数代码 881157.TI）"
  }
]

export const domesticFlows: DomesticFlow[] = [
  {
    "name": "两市成交额",
    "value": "1.66万亿",
    "state": "1.66万亿（沪+深）",
    "note": "沪市+深市成交额合计（hithink 指数快照口径），判断行情级别的第一层过滤器。"
  },
  {
    "name": "沪市成交额",
    "value": "7719亿",
    "state": "占两市 46.6%",
    "note": "沪市主板与科创板合计成交，观察权重与大盘活跃度。"
  },
  {
    "name": "深市成交额",
    "value": "8832亿",
    "state": "占两市 53.4%",
    "note": "深市主板与中小盘成交，观察成长与题材活跃度。"
  },
  {
    "name": "创业板成交额",
    "value": "4539亿",
    "state": "占深市 51.4%",
    "note": "成长风格成交占比，50w 账户重点关注 ETF 资金而不是短线热榜。"
  }
]

export const stockBreadth = {
  "tradeDate": "2026-11-24",
  "limitUpCount": 64,
  "limitBreakCount": 30,
  "hotStockCount": 30
}

export const limitUpTop: LimitUpItem[] = [
  {
    "ticker": "301413",
    "name": "安培龙",
    "price": "89.71",
    "pct": "+20.00%",
    "limitUpTime": "09:53",
    "boards": "2连板",
    "reason": "人形机器人+力传感器+压力传感器",
    "sealMoney": "0.0亿"
  },
  {
    "ticker": "603662",
    "name": "柯力传感",
    "price": "53.01",
    "pct": "+10.00%",
    "limitUpTime": "09:42",
    "boards": "2连板",
    "reason": "六维力传感器+人形机器人+触觉传感器+战略投资知行机器人",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "605488",
    "name": "福莱新材",
    "price": "51.45",
    "pct": "+10.01%",
    "limitUpTime": "09:33",
    "boards": "2连板",
    "reason": "柔性传感+数据采集手套+人形机器人",
    "sealMoney": "1.4亿"
  },
  {
    "ticker": "603516",
    "name": "淳中科技",
    "price": "49.92",
    "pct": "+10.00%",
    "limitUpTime": "09:25",
    "boards": "2连板",
    "reason": "液冷服务器+音视频芯片+显控系统",
    "sealMoney": "0.7亿"
  },
  {
    "ticker": "002827",
    "name": "高争民爆",
    "price": "49.06",
    "pct": "+10.00%",
    "limitUpTime": "13:03",
    "boards": "首板",
    "reason": "民爆+铜锂矿注入+西藏国资",
    "sealMoney": "0.8亿"
  },
  {
    "ticker": "002931",
    "name": "锋龙股份",
    "price": "46.71",
    "pct": "+10.01%",
    "limitUpTime": "09:25",
    "boards": "2连板",
    "reason": "机器人关节+优必选+机电组件",
    "sealMoney": "1.5亿"
  },
  {
    "ticker": "301189",
    "name": "奥尼电子",
    "price": "43.72",
    "pct": "+20.01%",
    "limitUpTime": "09:33",
    "boards": "首板",
    "reason": "AI推理算力+英伟达概念+华为昇腾",
    "sealMoney": "0.6亿"
  },
  {
    "ticker": "301252",
    "name": "同星科技",
    "price": "42.48",
    "pct": "+20.00%",
    "limitUpTime": "09:46",
    "boards": "2连板",
    "reason": "液冷服务器+人形机器人+换热器",
    "sealMoney": "0.2亿"
  },
  {
    "ticker": "603040",
    "name": "新坐标",
    "price": "36.39",
    "pct": "+10.01%",
    "limitUpTime": "09:33",
    "boards": "2连板",
    "reason": "机器人丝杠+冷精密成形+汽车零部件",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "002242",
    "name": "九阳股份",
    "price": "35.05",
    "pct": "+10.01%",
    "limitUpTime": "09:31",
    "boards": "2连板",
    "reason": "厨房小家电+机器人投资+“羊”字辈",
    "sealMoney": "3.2亿"
  },
  {
    "ticker": "301575",
    "name": "艾芬达",
    "price": "34.42",
    "pct": "+20.01%",
    "limitUpTime": "09:30",
    "boards": "2连板",
    "reason": "机器人结构件+北美头部机器人供应链+卫浴毛巾架",
    "sealMoney": "1.6亿"
  },
  {
    "ticker": "001358",
    "name": "兴欣新材",
    "price": "31.77",
    "pct": "+10.01%",
    "limitUpTime": "13:11",
    "boards": "2连板",
    "reason": "光刻胶剥离液+电子化学品项目+股份回购",
    "sealMoney": "0.2亿"
  }
]

export const limitBreakTop: LimitBreakItem[] = [
  {
    "ticker": "300550",
    "name": "和仁科技",
    "price": "16.80",
    "pct": "+17.73%",
    "openTimes": 2,
    "turnover": "4亿"
  },
  {
    "ticker": "301313",
    "name": "凡拓数创",
    "price": "82.80",
    "pct": "+16.64%",
    "openTimes": 2,
    "turnover": "29亿"
  },
  {
    "ticker": "300825",
    "name": "阿尔特",
    "price": "12.24",
    "pct": "+14.29%",
    "openTimes": 3,
    "turnover": "11亿"
  },
  {
    "ticker": "300508",
    "name": "维宏股份",
    "price": "43.93",
    "pct": "+14.22%",
    "openTimes": 1,
    "turnover": "6亿"
  },
  {
    "ticker": "301398",
    "name": "星源卓镁",
    "price": "42.90",
    "pct": "+13.43%",
    "openTimes": 1,
    "turnover": "3亿"
  },
  {
    "ticker": "301716",
    "name": "鸿富诚",
    "price": "317.00",
    "pct": "+10.13%",
    "openTimes": 1,
    "turnover": "15亿"
  },
  {
    "ticker": "301316",
    "name": "慧博云通",
    "price": "29.70",
    "pct": "+9.68%",
    "openTimes": 2,
    "turnover": "10亿"
  },
  {
    "ticker": "002199",
    "name": "东晶电子",
    "price": "11.40",
    "pct": "+9.62%",
    "openTimes": 6,
    "turnover": "2亿"
  }
]

export const ladderDate: string | null = "2026-11-24"

export const ladderBoards: LadderBoard[] = [
  {
    "label": "2板",
    "count": 25,
    "names": [
      "一彬科技",
      "九阳股份",
      "亿嘉和"
    ]
  },
  {
    "label": "3板",
    "count": 4,
    "names": [
      "东方海洋",
      "克来机电",
      "金新农"
    ]
  },
  {
    "label": "4板",
    "count": 1,
    "names": [
      "中京电子"
    ]
  }
]

export const hotStocks: RankItem[] = [
  {
    "rank": 1,
    "ticker": "002242",
    "name": "九阳股份",
    "heat": "7390489",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "300308",
    "name": "中际旭创",
    "heat": "5718521",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "600410",
    "name": "华胜天成",
    "heat": "5616540",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "002384",
    "name": "东山精密",
    "heat": "4879364",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "300502",
    "name": "新易盛",
    "heat": "4385099",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "002685",
    "name": "华东重机",
    "heat": "4283008",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "000530",
    "name": "冰山冷热",
    "heat": "4077714",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "002086",
    "name": "东方海洋",
    "heat": "3700290",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "688836",
    "name": "宇树科技",
    "heat": "3624438",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "601138",
    "name": "工业富联",
    "heat": "3525375",
    "rankChange": 0
  }
]

export const skyrockets: RankItem[] = [
  {
    "rank": 1,
    "ticker": "002242",
    "name": "九阳股份",
    "heat": "14145.2",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "600410",
    "name": "华胜天成",
    "heat": "10104.8",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "603030",
    "name": "全筑股份",
    "heat": "9358.2",
    "rankChange": 3
  },
  {
    "rank": 4,
    "ticker": "600722",
    "name": "金牛化工",
    "heat": "8618.7",
    "rankChange": 1
  },
  {
    "rank": 5,
    "ticker": "002685",
    "name": "华东重机",
    "heat": "7005.8",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "002086",
    "name": "东方海洋",
    "heat": "5740.3",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "002611",
    "name": "东方精工",
    "heat": "5566.9",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "600715",
    "name": "文投控股",
    "heat": "5373.1",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "600261",
    "name": "阳光照明",
    "heat": "4932.8",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "002548",
    "name": "金新农",
    "heat": "4174.4",
    "rankChange": 0
  }
]

export const dragonTigerTop: DragonTigerItem[] = [
  {
    "rank": 1,
    "ticker": "002242",
    "name": "九阳股份",
    "pct": "+10.01%",
    "netValue": "2.21亿",
    "orgNet": "—",
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
    "pct": "+3.12%",
    "netValue": "-3.87亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.15亿",
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
    "pct": "-0.74%",
    "netValue": "-0.44亿",
    "orgNet": "0.31亿",
    "hotMoneyNet": "—",
    "concepts": [
      "空气能热泵",
      "冰雪产业",
      "无人零售"
    ]
  },
  {
    "rank": 4,
    "ticker": "002086",
    "name": "东方海洋",
    "pct": "+9.93%",
    "netValue": "-0.27亿",
    "orgNet": "—",
    "hotMoneyNet": "-1.84亿",
    "concepts": [
      "幽门螺杆菌概念",
      "预制菜",
      "猴痘概念"
    ]
  },
  {
    "rank": 6,
    "ticker": "002685",
    "name": "华东重机",
    "pct": "+9.95%",
    "netValue": "-4.17亿",
    "orgNet": "—",
    "hotMoneyNet": "-2.89亿",
    "concepts": [
      "航运概念",
      "信创",
      "DeepSeek概念"
    ]
  },
  {
    "rank": 9,
    "ticker": "002771",
    "name": "真视通",
    "pct": "-0.40%",
    "netValue": "-1.42亿",
    "orgNet": "0.06亿",
    "hotMoneyNet": "-0.01亿",
    "concepts": [
      "时空大数据",
      "算力租赁",
      "东数西算(算力)"
    ]
  },
  {
    "rank": 12,
    "ticker": "600715",
    "name": "文投控股",
    "pct": "+10.18%",
    "netValue": "0.62亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.71亿",
    "concepts": [
      "手机游戏",
      "网络游戏",
      "短剧游戏"
    ]
  },
  {
    "rank": 13,
    "ticker": "002148",
    "name": "北纬科技",
    "pct": "+3.07%",
    "netValue": "-2.30亿",
    "orgNet": "0.06亿",
    "hotMoneyNet": "-0.47亿",
    "concepts": [
      "手机游戏",
      "抖音概念(字节概念)",
      "网络游戏"
    ]
  },
  {
    "rank": 23,
    "ticker": "603324",
    "name": "盛剑科技",
    "pct": "-3.74%",
    "netValue": "-0.38亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.56亿",
    "concepts": [
      "中芯国际概念",
      "光刻胶",
      "先进封装"
    ]
  },
  {
    "rank": 26,
    "ticker": "301313",
    "name": "凡拓数创",
    "pct": "+16.64%",
    "netValue": "0.68亿",
    "orgNet": "1.06亿",
    "hotMoneyNet": "—",
    "concepts": [
      "元宇宙",
      "空间计算",
      "智谱AI"
    ]
  }
]
