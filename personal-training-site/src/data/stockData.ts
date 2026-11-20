// 本文件由 scripts/generateStockData.mjs 自动生成，请勿手改。
// 数据源: hithink-finance（同花顺金融数据服务），数据日期: 2026-11-20 收盘
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
  "updatedAt": "2026-11-20 收盘",
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
    "value": "3,533.79",
    "change": "-43.83",
    "changePct": "-1.23%",
    "trend": [
      3660.79,
      3663.72,
      3680.64,
      3655.83,
      3634.35,
      3602.57,
      3584.58,
      3587.83,
      3577.62,
      3533.79
    ]
  },
  {
    "name": "沪深300",
    "symbol": "000300.SH",
    "region": "核心资产",
    "value": "3,954.57",
    "change": "-30.27",
    "changePct": "-0.76%",
    "trend": [
      4056.11,
      4059.11,
      4075.71,
      4043.93,
      4016.29,
      3979.8,
      3976.46,
      3983.77,
      3984.84,
      3954.57
    ]
  },
  {
    "name": "中证500",
    "symbol": "000905.SH",
    "region": "中盘成长",
    "value": "6,006.08",
    "change": "-245.88",
    "changePct": "-3.93%",
    "trend": [
      6586.18,
      6645.89,
      6713.18,
      6604.15,
      6465.49,
      6297.18,
      6283.01,
      6282.22,
      6251.96,
      6006.08
    ]
  },
  {
    "name": "中证1000",
    "symbol": "000852.SH",
    "region": "小盘弹性",
    "value": "5,648.63",
    "change": "-290.27",
    "changePct": "-4.89%",
    "trend": [
      6499.74,
      6579.36,
      6669.55,
      6537.84,
      6357.26,
      6164.62,
      6092.39,
      6052.82,
      5938.9,
      5648.63
    ]
  },
  {
    "name": "创业板指",
    "symbol": "399006.SZ",
    "region": "成长风格",
    "value": "2,212.13",
    "change": "-81.21",
    "changePct": "-3.54%",
    "trend": [
      2458.562,
      2494.397,
      2572.067,
      2509.429,
      2426.085,
      2320.02,
      2292.204,
      2311.621,
      2293.342,
      2212.127
    ]
  },
  {
    "name": "科创50",
    "symbol": "000688.SH",
    "region": "硬科技",
    "value": "1,231.09",
    "change": "-39.69",
    "changePct": "-3.12%",
    "trend": [
      1256.96,
      1265.02,
      1300.38,
      1309.84,
      1279.66,
      1213.68,
      1221.19,
      1247.99,
      1270.78,
      1231.09
    ]
  },
  {
    "name": "深证成指",
    "symbol": "399001.SZ",
    "region": "深市主板",
    "value": "10,256.39",
    "change": "-326.82",
    "changePct": "-3.09%",
    "trend": [
      11145.491,
      11241.536,
      11389.737,
      11197.976,
      10968.787,
      10690.778,
      10638.524,
      10659.412,
      10583.204,
      10256.389
    ]
  }
]

export const watchlist: WatchItem[] = [
  {
    "symbol": "510300",
    "name": "沪深300ETF",
    "category": "核心仓",
    "price": "4.018",
    "changePct": "-1.03%",
    "note": "用于观察大盘核心资产，不等同于买入建议。"
  },
  {
    "symbol": "510500",
    "name": "中证500ETF",
    "category": "中盘",
    "price": "6.053",
    "changePct": "-3.71%",
    "note": "适合作为中盘景气和市场广度的观察锚。"
  },
  {
    "symbol": "512100",
    "name": "中证1000ETF",
    "category": "小盘",
    "price": "2.300",
    "changePct": "-4.80%",
    "note": "波动弹性高，50w 账户要限制仓位拥挤。"
  },
  {
    "symbol": "588000",
    "name": "科创50ETF",
    "category": "硬科技",
    "price": "1.300",
    "changePct": "-3.27%",
    "note": "关注半导体、AI、创新药等成长估值修复。"
  },
  {
    "symbol": "159915",
    "name": "创业板ETF",
    "category": "成长",
    "price": "2.230",
    "changePct": "-3.38%",
    "note": "和风险偏好、美债利率、成长股情绪联动更强。"
  },
  {
    "symbol": "512480",
    "name": "半导体ETF",
    "category": "行业主题",
    "price": "0.745",
    "changePct": "-4.36%",
    "note": "主题弹性大，适合监控成交额和拥挤度。"
  },
  {
    "symbol": "515880",
    "name": "通信ETF",
    "category": "AI链条",
    "price": "0.362",
    "changePct": "-4.74%",
    "note": "关注算力、光模块、运营商资本开支。"
  },
  {
    "symbol": "512800",
    "name": "银行ETF",
    "category": "红利/防御",
    "price": "0.926",
    "changePct": "+1.20%",
    "note": "适合观察高股息、防御风格和利率预期。"
  },
  {
    "symbol": "513180",
    "name": "恒生科技ETF",
    "category": "港股弹性",
    "price": "0.439",
    "changePct": "-3.73%",
    "note": "受港股流动性、美元利率和互联网监管预期影响。"
  },
  {
    "symbol": "159941",
    "name": "纳指ETF",
    "category": "海外映射",
    "price": "1.526",
    "changePct": "-5.22%",
    "note": "不作为 A 股替代，只看全球科技风险偏好。"
  }
]

export const sectorPulse: SectorPulse[] = [
  {
    "name": "半导体",
    "changePct": "-6.85%",
    "breadth": "n/a",
    "note": "高弹性行业，重点看成交额放大是否持续。（指数代码 881121.TI）"
  },
  {
    "name": "AI算力",
    "changePct": "-5.57%",
    "breadth": "n/a",
    "note": "东数西算(算力)概念指数，主题强时容易拥挤。（指数代码 885957.TI）"
  },
  {
    "name": "高股息",
    "changePct": "-1.51%",
    "breadth": "n/a",
    "note": "高股息精选概念，防御风格，和利率、避险偏好相关。（指数代码 886072.TI）"
  },
  {
    "name": "消费复苏",
    "changePct": "-3.86%",
    "breadth": "n/a",
    "note": "以白酒行业指数代表消费链条景气验证。（指数代码 881273.TI）"
  },
  {
    "name": "新能源",
    "changePct": "-5.27%",
    "breadth": "n/a",
    "note": "光伏概念指数，供给出清和价格周期是核心变量。（指数代码 885531.TI）"
  },
  {
    "name": "券商",
    "changePct": "-1.32%",
    "breadth": "n/a",
    "note": "证券行业指数，常作为风险偏好和成交额弹性的放大器。（指数代码 881157.TI）"
  }
]

export const domesticFlows: DomesticFlow[] = [
  {
    "name": "两市成交额",
    "value": "1.42万亿",
    "state": "1.42万亿（沪+深）",
    "note": "沪市+深市成交额合计（hithink 指数快照口径），判断行情级别的第一层过滤器。"
  },
  {
    "name": "沪市成交额",
    "value": "7026亿",
    "state": "占两市 49.4%",
    "note": "沪市主板与科创板合计成交，观察权重与大盘活跃度。"
  },
  {
    "name": "深市成交额",
    "value": "7196亿",
    "state": "占两市 50.6%",
    "note": "深市主板与中小盘成交，观察成长与题材活跃度。"
  },
  {
    "name": "创业板成交额",
    "value": "3388亿",
    "state": "占深市 47.1%",
    "note": "成长风格成交占比，50w 账户重点关注 ETF 资金而不是短线热榜。"
  }
]

export const stockBreadth = {
  "tradeDate": "2026-11-20",
  "limitUpCount": 30,
  "limitBreakCount": 7,
  "hotStockCount": 30
}

export const limitUpTop: LimitUpItem[] = [
  {
    "ticker": "301313",
    "name": "凡拓数创",
    "price": "59.16",
    "pct": "+20.00%",
    "limitUpTime": "10:44",
    "boards": "首板",
    "reason": "物理AI数据基座+具身智能数据",
    "sealMoney": "0.9亿"
  },
  {
    "ticker": "301132",
    "name": "满坤科技",
    "price": "51.07",
    "pct": "+20.00%",
    "limitUpTime": "11:20",
    "boards": "首板",
    "reason": "AI服务器电源PCB+供货台达+回购",
    "sealMoney": "1.2亿"
  },
  {
    "ticker": "605058",
    "name": "澳弘电子",
    "price": "42.92",
    "pct": "+9.99%",
    "limitUpTime": "10:04",
    "boards": "首板",
    "reason": "AI算力电源PCB+高端PCB扩产+HDI板",
    "sealMoney": "0.9亿"
  },
  {
    "ticker": "603324",
    "name": "盛剑科技",
    "price": "27.71",
    "pct": "+10.00%",
    "limitUpTime": "09:25",
    "boards": "4连板",
    "reason": "光刻胶配套+半导体附属装备+电子化学品",
    "sealMoney": "0.4亿"
  },
  {
    "ticker": "603948",
    "name": "建业股份",
    "price": "19.56",
    "pct": "+10.01%",
    "limitUpTime": "09:37",
    "boards": "首板",
    "reason": "电子化学品+半导体客户+超纯氨",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "002741",
    "name": "光华科技",
    "price": "18.76",
    "pct": "+10.03%",
    "limitUpTime": "09:36",
    "boards": "首板",
    "reason": "光刻胶+PCB化学品+硫化锂",
    "sealMoney": "0.5亿"
  },
  {
    "ticker": "000823",
    "name": "超声电子",
    "price": "18.51",
    "pct": "+9.98%",
    "limitUpTime": "10:00",
    "boards": "首板",
    "reason": "印制电路板+覆铜板+商业航天+三季报增长",
    "sealMoney": "1.7亿"
  },
  {
    "ticker": "603004",
    "name": "鼎龙科技",
    "price": "18.22",
    "pct": "+10.02%",
    "limitUpTime": "10:30",
    "boards": "首板",
    "reason": "光刻胶+PSPI单体+特种工程材料单体平台",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "300812",
    "name": "易天股份",
    "price": "18.00",
    "pct": "+20.00%",
    "limitUpTime": "09:42",
    "boards": "首板",
    "reason": "硅基OLED+先进封装+光模块设备",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "000593",
    "name": "德龙汇能",
    "price": "17.51",
    "pct": "+9.99%",
    "limitUpTime": "13:00",
    "boards": "首板",
    "reason": "天然气+氢能+参股半导体",
    "sealMoney": "0.5亿"
  },
  {
    "ticker": "605577",
    "name": "龙版传媒",
    "price": "16.19",
    "pct": "+9.99%",
    "limitUpTime": "09:47",
    "boards": "首板",
    "reason": "AI漫剧+出版发行+黑龙江国资",
    "sealMoney": "0.6亿"
  },
  {
    "ticker": "002771",
    "name": "真视通",
    "price": "15.82",
    "pct": "+10.01%",
    "limitUpTime": "09:30",
    "boards": "4连板",
    "reason": "液冷算力+华为算力+多媒体视讯",
    "sealMoney": "1.6亿"
  }
]

export const limitBreakTop: LimitBreakItem[] = [
  {
    "ticker": "002148",
    "name": "北纬科技",
    "price": "10.06",
    "pct": "+8.17%",
    "openTimes": 3,
    "turnover": "23亿"
  },
  {
    "ticker": "002348",
    "name": "高乐股份",
    "price": "7.76",
    "pct": "+7.78%",
    "openTimes": 2,
    "turnover": "6亿"
  },
  {
    "ticker": "603081",
    "name": "大丰实业",
    "price": "9.79",
    "pct": "+4.93%",
    "openTimes": 1,
    "turnover": "2亿"
  },
  {
    "ticker": "002520",
    "name": "日发精机",
    "price": "6.16",
    "pct": "+3.88%",
    "openTimes": 1,
    "turnover": "8亿"
  },
  {
    "ticker": "600408",
    "name": "安泰集团",
    "price": "3.54",
    "pct": "+3.81%",
    "openTimes": 1,
    "turnover": "9亿"
  },
  {
    "ticker": "002453",
    "name": "华软科技",
    "price": "4.30",
    "pct": "-0.46%",
    "openTimes": 1,
    "turnover": "3亿"
  },
  {
    "ticker": "003007",
    "name": "直真科技",
    "price": "32.26",
    "pct": "-1.04%",
    "openTimes": 1,
    "turnover": "3亿"
  }
]

export const ladderDate: string | null = "2026-11-20"

export const ladderBoards: LadderBoard[] = [
  {
    "label": "2板",
    "count": 1,
    "names": [
      "中京电子"
    ]
  },
  {
    "label": "4板",
    "count": 2,
    "names": [
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
    "heat": "10424455",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "600410",
    "name": "华胜天成",
    "heat": "6043438",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "000530",
    "name": "冰山冷热",
    "heat": "5233322",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "600715",
    "name": "文投控股",
    "heat": "5104898",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "300308",
    "name": "中际旭创",
    "heat": "4754270",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "300502",
    "name": "新易盛",
    "heat": "3995836",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "002148",
    "name": "北纬科技",
    "heat": "3740722",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "002086",
    "name": "东方海洋",
    "heat": "3695101",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "000678",
    "name": "襄阳轴承",
    "heat": "3479980",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "601398",
    "name": "工商银行",
    "heat": "3450662",
    "rankChange": 0
  }
]

export const skyrockets: RankItem[] = [
  {
    "rank": 1,
    "ticker": "601398",
    "name": "工商银行",
    "heat": "39878.2",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "000892",
    "name": "欢瑞世纪",
    "heat": "21315.6",
    "rankChange": 36
  },
  {
    "rank": 3,
    "ticker": "000823",
    "name": "超声电子",
    "heat": "17970.1",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "601939",
    "name": "建设银行",
    "heat": "16790.5",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "603986",
    "name": "兆易创新",
    "heat": "16267.0",
    "rankChange": 1
  },
  {
    "rank": 6,
    "ticker": "601857",
    "name": "中国石油",
    "heat": "14405.6",
    "rankChange": 2
  },
  {
    "rank": 7,
    "ticker": "600900",
    "name": "长江电力",
    "heat": "12408.9",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "600519",
    "name": "贵州茅台",
    "heat": "11029.9",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "601127",
    "name": "赛力斯",
    "heat": "10959.3",
    "rankChange": 6
  },
  {
    "rank": 10,
    "ticker": "301313",
    "name": "凡拓数创",
    "heat": "10857.5",
    "rankChange": 0
  }
]

export const dragonTigerTop: DragonTigerItem[] = [
  {
    "rank": 2,
    "ticker": "000530",
    "name": "冰山冷热",
    "pct": "+10.03%",
    "netValue": "2.99亿",
    "orgNet": "0.58亿",
    "hotMoneyNet": "0.81亿",
    "concepts": [
      "空气能热泵",
      "冰雪产业",
      "无人零售"
    ]
  },
  {
    "rank": 3,
    "ticker": "600410",
    "name": "华胜天成",
    "pct": "+3.71%",
    "netValue": "0.07亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.65亿",
    "concepts": [
      "云计算",
      "东数西算(算力)",
      "网络安全"
    ]
  },
  {
    "rank": 4,
    "ticker": "002086",
    "name": "东方海洋",
    "pct": "+9.97%",
    "netValue": "3.14亿",
    "orgNet": "—",
    "hotMoneyNet": "1.01亿",
    "concepts": [
      "幽门螺杆菌概念",
      "预制菜",
      "猴痘概念"
    ]
  },
  {
    "rank": 5,
    "ticker": "002685",
    "name": "华东重机",
    "pct": "-3.52%",
    "netValue": "0.08亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.17亿",
    "concepts": [
      "航运概念",
      "信创",
      "DeepSeek概念"
    ]
  },
  {
    "rank": 6,
    "ticker": "000678",
    "name": "襄阳轴承",
    "pct": "+1.43%",
    "netValue": "-2.70亿",
    "orgNet": "-1.20亿",
    "hotMoneyNet": "0.20亿",
    "concepts": [
      "股权转让(并购重组)",
      "减速器",
      "农机"
    ]
  },
  {
    "rank": 7,
    "ticker": "600715",
    "name": "文投控股",
    "pct": "+0.37%",
    "netValue": "0.27亿",
    "orgNet": "—",
    "hotMoneyNet": "0.50亿",
    "concepts": [
      "手机游戏",
      "网络游戏",
      "短剧游戏"
    ]
  },
  {
    "rank": 8,
    "ticker": "002579",
    "name": "中京电子",
    "pct": "+10.02%",
    "netValue": "2.44亿",
    "orgNet": "0.01亿",
    "hotMoneyNet": "1.36亿",
    "concepts": [
      "PCB概念",
      "MiniLED",
      "共封装光学(CPO)"
    ]
  },
  {
    "rank": 10,
    "ticker": "002148",
    "name": "北纬科技",
    "pct": "+8.17%",
    "netValue": "1.12亿",
    "orgNet": "0.43亿",
    "hotMoneyNet": "0.59亿",
    "concepts": [
      "手机游戏",
      "抖音概念(字节概念)",
      "网络游戏"
    ]
  },
  {
    "rank": 11,
    "ticker": "000823",
    "name": "超声电子",
    "pct": "+9.98%",
    "netValue": "4.41亿",
    "orgNet": "0.43亿",
    "hotMoneyNet": "1.11亿",
    "concepts": [
      "PCB概念",
      "共封装光学(CPO)",
      "MiniLED"
    ]
  },
  {
    "rank": 13,
    "ticker": "601188",
    "name": "龙江交通",
    "pct": "-8.32%",
    "netValue": "0.06亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.09亿",
    "concepts": [
      "黑龙江自贸区",
      "旅游概念",
      "冰雪产业"
    ]
  }
]
