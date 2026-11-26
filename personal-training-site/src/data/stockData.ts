// 本文件由 scripts/generateStockData.mjs 自动生成，请勿手改。
// 数据源: hithink-finance（同花顺金融数据服务），数据日期: 2026-11-26 收盘
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
  "updatedAt": "2026-11-26 收盘",
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
    "value": "3,476.88",
    "change": "+0.41",
    "changePct": "+0.01%",
    "trend": [
      3634.35,
      3602.57,
      3584.58,
      3587.83,
      3577.62,
      3533.79,
      3538.95,
      3548.37,
      3476.47,
      3476.88
    ]
  },
  {
    "name": "沪深300",
    "symbol": "000300.SH",
    "region": "核心资产",
    "value": "3,900.55",
    "change": "+2.31",
    "changePct": "+0.06%",
    "trend": [
      4016.29,
      3979.8,
      3976.46,
      3983.77,
      3984.84,
      3954.57,
      3958.29,
      3963.82,
      3898.24,
      3900.55
    ]
  },
  {
    "name": "中证500",
    "symbol": "000905.SH",
    "region": "中盘成长",
    "value": "5,863.34",
    "change": "-27.07",
    "changePct": "-0.46%",
    "trend": [
      6465.49,
      6297.18,
      6283.01,
      6282.22,
      6251.96,
      6006.08,
      6128.99,
      6112.43,
      5890.41,
      5863.34
    ]
  },
  {
    "name": "中证1000",
    "symbol": "000852.SH",
    "region": "小盘弹性",
    "value": "5,531.84",
    "change": "-9.71",
    "changePct": "-0.18%",
    "trend": [
      6357.26,
      6164.62,
      6092.39,
      6052.82,
      5938.9,
      5648.63,
      5812.32,
      5799.01,
      5541.55,
      5531.84
    ]
  },
  {
    "name": "创业板指",
    "symbol": "399006.SZ",
    "region": "成长风格",
    "value": "2,189.82",
    "change": "+6.24",
    "changePct": "+0.29%",
    "trend": [
      2426.085,
      2320.02,
      2292.204,
      2311.621,
      2293.342,
      2212.127,
      2280.204,
      2278.994,
      2183.584,
      2189.823
    ]
  },
  {
    "name": "科创50",
    "symbol": "000688.SH",
    "region": "硬科技",
    "value": "1,169.99",
    "change": "-16.15",
    "changePct": "-1.36%",
    "trend": [
      1279.66,
      1213.68,
      1221.19,
      1247.99,
      1270.78,
      1231.09,
      1227.89,
      1250.09,
      1186.14,
      1169.99
    ]
  },
  {
    "name": "深证成指",
    "symbol": "399001.SZ",
    "region": "深市主板",
    "value": "10,084.04",
    "change": "-2.31",
    "changePct": "-0.02%",
    "trend": [
      10968.787,
      10690.778,
      10638.524,
      10659.412,
      10583.204,
      10256.389,
      10454.37,
      10423.603,
      10086.355,
      10084.044
    ]
  }
]

export const watchlist: WatchItem[] = [
  {
    "symbol": "510300",
    "name": "沪深300ETF",
    "category": "核心仓",
    "price": "3.959",
    "changePct": "-0.28%",
    "note": "用于观察大盘核心资产，不等同于买入建议。"
  },
  {
    "symbol": "510500",
    "name": "中证500ETF",
    "category": "中盘",
    "price": "5.888",
    "changePct": "-0.57%",
    "note": "适合作为中盘景气和市场广度的观察锚。"
  },
  {
    "symbol": "512100",
    "name": "中证1000ETF",
    "category": "小盘",
    "price": "2.249",
    "changePct": "-0.22%",
    "note": "波动弹性高，50w 账户要限制仓位拥挤。"
  },
  {
    "symbol": "588000",
    "name": "科创50ETF",
    "category": "硬科技",
    "price": "1.233",
    "changePct": "-1.67%",
    "note": "关注半导体、AI、创新药等成长估值修复。"
  },
  {
    "symbol": "159915",
    "name": "创业板ETF",
    "category": "成长",
    "price": "2.217",
    "changePct": "+0.82%",
    "note": "和风险偏好、美债利率、成长股情绪联动更强。"
  },
  {
    "symbol": "512480",
    "name": "半导体ETF",
    "category": "行业主题",
    "price": "0.696",
    "changePct": "-1.69%",
    "note": "主题弹性大，适合监控成交额和拥挤度。"
  },
  {
    "symbol": "515880",
    "name": "通信ETF",
    "category": "AI链条",
    "price": "0.383",
    "changePct": "+2.68%",
    "note": "关注算力、光模块、运营商资本开支。"
  },
  {
    "symbol": "512800",
    "name": "银行ETF",
    "category": "红利/防御",
    "price": "0.927",
    "changePct": "+0.65%",
    "note": "适合观察高股息、防御风格和利率预期。"
  },
  {
    "symbol": "513180",
    "name": "恒生科技ETF",
    "category": "港股弹性",
    "price": "0.430",
    "changePct": "+1.42%",
    "note": "受港股流动性、美元利率和互联网监管预期影响。"
  },
  {
    "symbol": "159941",
    "name": "纳指ETF",
    "category": "海外映射",
    "price": "1.521",
    "changePct": "+1.67%",
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
    "changePct": "+0.37%",
    "breadth": "n/a",
    "note": "东数西算(算力)概念指数，主题强时容易拥挤。（指数代码 885957.TI）"
  },
  {
    "name": "高股息",
    "changePct": "+0.26%",
    "breadth": "n/a",
    "note": "高股息精选概念，防御风格，和利率、避险偏好相关。（指数代码 886072.TI）"
  },
  {
    "name": "消费复苏",
    "changePct": "-1.47%",
    "breadth": "n/a",
    "note": "以白酒行业指数代表消费链条景气验证。（指数代码 881273.TI）"
  },
  {
    "name": "新能源",
    "changePct": "-0.42%",
    "breadth": "n/a",
    "note": "光伏概念指数，供给出清和价格周期是核心变量。（指数代码 885531.TI）"
  },
  {
    "name": "券商",
    "changePct": "-1.27%",
    "breadth": "n/a",
    "note": "证券行业指数，常作为风险偏好和成交额弹性的放大器。（指数代码 881157.TI）"
  }
]

export const domesticFlows: DomesticFlow[] = [
  {
    "name": "两市成交额",
    "value": "1.32万亿",
    "state": "1.32万亿（沪+深）",
    "note": "沪市+深市成交额合计（hithink 指数快照口径），判断行情级别的第一层过滤器。"
  },
  {
    "name": "沪市成交额",
    "value": "6133亿",
    "state": "占两市 46.6%",
    "note": "沪市主板与科创板合计成交，观察权重与大盘活跃度。"
  },
  {
    "name": "深市成交额",
    "value": "7040亿",
    "state": "占两市 53.4%",
    "note": "深市主板与中小盘成交，观察成长与题材活跃度。"
  },
  {
    "name": "创业板成交额",
    "value": "3379亿",
    "state": "占深市 48.0%",
    "note": "成长风格成交占比，50w 账户重点关注 ETF 资金而不是短线热榜。"
  }
]

export const stockBreadth = {
  "tradeDate": "2026-11-26",
  "limitUpCount": 68,
  "limitBreakCount": 29,
  "hotStockCount": 30
}

export const limitUpTop: LimitUpItem[] = [
  {
    "ticker": "605058",
    "name": "澳弘电子",
    "price": "42.48",
    "pct": "+9.99%",
    "limitUpTime": "10:12",
    "boards": "首板",
    "reason": "AI算力电源PCB+高端PCB扩产+HDI板",
    "sealMoney": "0.8亿"
  },
  {
    "ticker": "603324",
    "name": "盛剑科技",
    "price": "35.50",
    "pct": "+10.01%",
    "limitUpTime": "14:56",
    "boards": "2连板",
    "reason": "光刻胶配套+电子化学品+半导体附属装备",
    "sealMoney": "0.0亿"
  },
  {
    "ticker": "603373",
    "name": "安邦护卫",
    "price": "32.79",
    "pct": "+10.00%",
    "limitUpTime": "13:06",
    "boards": "首板",
    "reason": "低空安全+海外安保+金融安全+国企改革",
    "sealMoney": "0.0亿"
  },
  {
    "ticker": "603203",
    "name": "快克智能",
    "price": "30.95",
    "pct": "+9.99%",
    "limitUpTime": "09:48",
    "boards": "首板",
    "reason": "光模块检测+先进封装+三季报增长",
    "sealMoney": "0.7亿"
  },
  {
    "ticker": "301190",
    "name": "善水科技",
    "price": "28.56",
    "pct": "+20.00%",
    "limitUpTime": "09:43",
    "boards": "首板",
    "reason": "染料中间体+农药医药中间体",
    "sealMoney": "0.6亿"
  },
  {
    "ticker": "603396",
    "name": "金辰股份",
    "price": "25.48",
    "pct": "+10.02%",
    "limitUpTime": "09:25",
    "boards": "首板",
    "reason": "半导体装备+玻璃基封装+光伏设备+股份回购",
    "sealMoney": "0.4亿"
  },
  {
    "ticker": "000603",
    "name": "盛达资源",
    "price": "23.86",
    "pct": "+10.00%",
    "limitUpTime": "10:18",
    "boards": "首板",
    "reason": "白银采选+贵金属+拟购方鑫矿业+三季报高增",
    "sealMoney": "0.2亿"
  },
  {
    "ticker": "000678",
    "name": "襄阳轴承",
    "price": "21.96",
    "pct": "+10.02%",
    "limitUpTime": "11:18",
    "boards": "首板",
    "reason": "机器人轴承+湖北国资+“羊”字辈",
    "sealMoney": "1.2亿"
  },
  {
    "ticker": "603051",
    "name": "鹿山新材",
    "price": "21.78",
    "pct": "+10.00%",
    "limitUpTime": "11:15",
    "boards": "首板",
    "reason": "电子皮肤+太空光伏+光伏胶膜+回购",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "002261",
    "name": "拓维信息",
    "price": "20.96",
    "pct": "+10.03%",
    "limitUpTime": "13:18",
    "boards": "首板",
    "reason": "华为昇腾+算力+机器人",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "603960",
    "name": "克来机电",
    "price": "20.46",
    "pct": "+10.00%",
    "limitUpTime": "09:31",
    "boards": "5连板",
    "reason": "工业机器人+柔性自动化装备",
    "sealMoney": "0.7亿"
  },
  {
    "ticker": "600520",
    "name": "三佳科技",
    "price": "20.06",
    "pct": "+9.98%",
    "limitUpTime": "09:48",
    "boards": "首板",
    "reason": "半导体封装装备+合肥国资+机器人",
    "sealMoney": "0.2亿"
  }
]

export const limitBreakTop: LimitBreakItem[] = [
  {
    "ticker": "301282",
    "name": "金禄电子",
    "price": "34.98",
    "pct": "+19.39%",
    "openTimes": 1,
    "turnover": "13亿"
  },
  {
    "ticker": "301112",
    "name": "信邦智能",
    "price": "27.93",
    "pct": "+19.05%",
    "openTimes": 7,
    "turnover": "2亿"
  },
  {
    "ticker": "688820",
    "name": "盛合晶微",
    "price": "101.10",
    "pct": "+18.94%",
    "openTimes": 2,
    "turnover": "41亿"
  },
  {
    "ticker": "301041",
    "name": "金百泽",
    "price": "27.63",
    "pct": "+16.88%",
    "openTimes": 1,
    "turnover": "6亿"
  },
  {
    "ticker": "002148",
    "name": "北纬科技",
    "price": "11.30",
    "pct": "+10.03%",
    "openTimes": 3,
    "turnover": "25亿"
  },
  {
    "ticker": "603708",
    "name": "家家悦",
    "price": "10.65",
    "pct": "+10.02%",
    "openTimes": 4,
    "turnover": "6亿"
  },
  {
    "ticker": "002913",
    "name": "奥士康",
    "price": "62.97",
    "pct": "+9.91%",
    "openTimes": 2,
    "turnover": "11亿"
  },
  {
    "ticker": "301210",
    "name": "金杨精密",
    "price": "24.31",
    "pct": "+9.65%",
    "openTimes": 1,
    "turnover": "4亿"
  }
]

export const ladderDate: string | null = "2026-11-26"

export const ladderBoards: LadderBoard[] = [
  {
    "label": "2板",
    "count": 8,
    "names": [
      "中央商场",
      "城市传媒",
      "好当家"
    ]
  },
  {
    "label": "3板",
    "count": 4,
    "names": [
      "全筑股份",
      "利君股份",
      "天圣制药"
    ]
  },
  {
    "label": "4板",
    "count": 1,
    "names": [
      "杭州解百"
    ]
  },
  {
    "label": "5板",
    "count": 1,
    "names": [
      "克来机电"
    ]
  }
]

export const hotStocks: RankItem[] = [
  {
    "rank": 1,
    "ticker": "002242",
    "name": "九阳股份",
    "heat": "14277263",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "002148",
    "name": "北纬科技",
    "heat": "7621386",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "600410",
    "name": "华胜天成",
    "heat": "6115661",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "000530",
    "name": "冰山冷热",
    "heat": "5963656",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "002579",
    "name": "中京电子",
    "heat": "5899288",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "002685",
    "name": "华东重机",
    "heat": "4580657",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "002086",
    "name": "东方海洋",
    "heat": "4282328",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "300308",
    "name": "中际旭创",
    "heat": "4163432",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "600103",
    "name": "青山纸业",
    "heat": "3814760",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "000678",
    "name": "襄阳轴承",
    "heat": "3564890",
    "rankChange": 0
  }
]

export const skyrockets: RankItem[] = [
  {
    "rank": 1,
    "ticker": "002148",
    "name": "北纬科技",
    "heat": "30078.4",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "000158",
    "name": "常山北明",
    "heat": "18277.5",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "002261",
    "name": "拓维信息",
    "heat": "17757.8",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "000678",
    "name": "襄阳轴承",
    "heat": "15093.8",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "002081",
    "name": "金螳螂",
    "heat": "14386.3",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "600127",
    "name": "金健米业",
    "heat": "12071.7",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "600722",
    "name": "金牛化工",
    "heat": "10551.5",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "300324",
    "name": "旋极信息",
    "heat": "10163.8",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "002565",
    "name": "顺灏股份",
    "heat": "10027.3",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "002815",
    "name": "崇达技术",
    "heat": "9264.5",
    "rankChange": 1
  }
]

export const dragonTigerTop: DragonTigerItem[] = [
  {
    "rank": 2,
    "ticker": "000530",
    "name": "冰山冷热",
    "pct": "+10.00%",
    "netValue": "1.19亿",
    "orgNet": "2.02亿",
    "hotMoneyNet": "—",
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
    "pct": "+6.03%",
    "netValue": "-1.22亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.20亿",
    "concepts": [
      "云计算",
      "东数西算(算力)",
      "网络安全"
    ]
  },
  {
    "rank": 4,
    "ticker": "002579",
    "name": "中京电子",
    "pct": "+7.91%",
    "netValue": "0.12亿",
    "orgNet": "-0.07亿",
    "hotMoneyNet": "0.41亿",
    "concepts": [
      "PCB概念",
      "MiniLED",
      "共封装光学(CPO)"
    ]
  },
  {
    "rank": 5,
    "ticker": "002086",
    "name": "东方海洋",
    "pct": "+9.91%",
    "netValue": "0.97亿",
    "orgNet": "-0.46亿",
    "hotMoneyNet": "—",
    "concepts": [
      "幽门螺杆菌概念",
      "预制菜",
      "猴痘概念"
    ]
  },
  {
    "rank": 6,
    "ticker": "600103",
    "name": "青山纸业",
    "pct": "+10.05%",
    "netValue": "0.40亿",
    "orgNet": "—",
    "hotMoneyNet": "0.69亿",
    "concepts": [
      "海峡两岸",
      "5G",
      "共封装光学(CPO)"
    ]
  },
  {
    "rank": 8,
    "ticker": "600467",
    "name": "好当家",
    "pct": "+10.00%",
    "netValue": "-0.09亿",
    "orgNet": "—",
    "hotMoneyNet": "0.48亿",
    "concepts": [
      "预制菜",
      "白酒概念",
      "中韩自贸区"
    ]
  },
  {
    "rank": 10,
    "ticker": "000678",
    "name": "襄阳轴承",
    "pct": "+10.02%",
    "netValue": "1.16亿",
    "orgNet": "-0.17亿",
    "hotMoneyNet": "0.10亿",
    "concepts": [
      "股权转让(并购重组)",
      "减速器",
      "农机"
    ]
  },
  {
    "rank": 11,
    "ticker": "002685",
    "name": "华东重机",
    "pct": "-10.01%",
    "netValue": "-2.55亿",
    "orgNet": "-0.65亿",
    "hotMoneyNet": "-0.09亿",
    "concepts": [
      "航运概念",
      "信创",
      "DeepSeek概念"
    ]
  },
  {
    "rank": 13,
    "ticker": "002548",
    "name": "金新农",
    "pct": "+6.39%",
    "netValue": "-0.52亿",
    "orgNet": "-0.24亿",
    "hotMoneyNet": "-0.36亿",
    "concepts": [
      "猪肉",
      "生态农业",
      "乡村振兴"
    ]
  },
  {
    "rank": 15,
    "ticker": "002148",
    "name": "北纬科技",
    "pct": "+10.03%",
    "netValue": "-1.66亿",
    "orgNet": "-0.59亿",
    "hotMoneyNet": "-0.66亿",
    "concepts": [
      "手机游戏",
      "抖音概念(字节概念)",
      "网络游戏"
    ]
  }
]
