// 本文件由 scripts/generateStockData.mjs 自动生成，请勿手改。
// 数据源: hithink-finance（同花顺金融数据服务），数据日期: 2026-11-25 收盘
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
  "updatedAt": "2026-11-25 收盘",
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
    "value": "3,476.47",
    "change": "-71.90",
    "changePct": "-2.03%",
    "trend": [
      3655.83,
      3634.35,
      3602.57,
      3584.58,
      3587.83,
      3577.62,
      3533.79,
      3538.95,
      3548.37,
      3476.47
    ]
  },
  {
    "name": "沪深300",
    "symbol": "000300.SH",
    "region": "核心资产",
    "value": "3,898.24",
    "change": "-65.58",
    "changePct": "-1.65%",
    "trend": [
      4043.93,
      4016.29,
      3979.8,
      3976.46,
      3983.77,
      3984.84,
      3954.57,
      3958.29,
      3963.82,
      3898.24
    ]
  },
  {
    "name": "中证500",
    "symbol": "000905.SH",
    "region": "中盘成长",
    "value": "5,890.41",
    "change": "-222.02",
    "changePct": "-3.63%",
    "trend": [
      6604.15,
      6465.49,
      6297.18,
      6283.01,
      6282.22,
      6251.96,
      6006.08,
      6128.99,
      6112.43,
      5890.41
    ]
  },
  {
    "name": "中证1000",
    "symbol": "000852.SH",
    "region": "小盘弹性",
    "value": "5,541.55",
    "change": "-257.46",
    "changePct": "-4.44%",
    "trend": [
      6537.84,
      6357.26,
      6164.62,
      6092.39,
      6052.82,
      5938.9,
      5648.63,
      5812.32,
      5799.01,
      5541.55
    ]
  },
  {
    "name": "创业板指",
    "symbol": "399006.SZ",
    "region": "成长风格",
    "value": "2,183.58",
    "change": "-95.41",
    "changePct": "-4.19%",
    "trend": [
      2509.429,
      2426.085,
      2320.02,
      2292.204,
      2311.621,
      2293.342,
      2212.127,
      2280.204,
      2278.994,
      2183.584
    ]
  },
  {
    "name": "科创50",
    "symbol": "000688.SH",
    "region": "硬科技",
    "value": "1,186.14",
    "change": "-63.95",
    "changePct": "-5.12%",
    "trend": [
      1309.84,
      1279.66,
      1213.68,
      1221.19,
      1247.99,
      1270.78,
      1231.09,
      1227.89,
      1250.09,
      1186.14
    ]
  },
  {
    "name": "深证成指",
    "symbol": "399001.SZ",
    "region": "深市主板",
    "value": "10,086.36",
    "change": "-337.25",
    "changePct": "-3.24%",
    "trend": [
      11197.976,
      10968.787,
      10690.778,
      10638.524,
      10659.412,
      10583.204,
      10256.389,
      10454.37,
      10423.603,
      10086.355
    ]
  }
]

export const watchlist: WatchItem[] = [
  {
    "symbol": "510300",
    "name": "沪深300ETF",
    "category": "核心仓",
    "price": "3.970",
    "changePct": "-1.56%",
    "note": "用于观察大盘核心资产，不等同于买入建议。"
  },
  {
    "symbol": "510500",
    "name": "中证500ETF",
    "category": "中盘",
    "price": "5.922",
    "changePct": "-3.33%",
    "note": "适合作为中盘景气和市场广度的观察锚。"
  },
  {
    "symbol": "512100",
    "name": "中证1000ETF",
    "category": "小盘",
    "price": "2.254",
    "changePct": "-4.25%",
    "note": "波动弹性高，50w 账户要限制仓位拥挤。"
  },
  {
    "symbol": "588000",
    "name": "科创50ETF",
    "category": "硬科技",
    "price": "1.254",
    "changePct": "-4.93%",
    "note": "关注半导体、AI、创新药等成长估值修复。"
  },
  {
    "symbol": "159915",
    "name": "创业板ETF",
    "category": "成长",
    "price": "2.199",
    "changePct": "-4.06%",
    "note": "和风险偏好、美债利率、成长股情绪联动更强。"
  },
  {
    "symbol": "512480",
    "name": "半导体ETF",
    "category": "行业主题",
    "price": "0.708",
    "changePct": "-6.72%",
    "note": "主题弹性大，适合监控成交额和拥挤度。"
  },
  {
    "symbol": "515880",
    "name": "通信ETF",
    "category": "AI链条",
    "price": "0.373",
    "changePct": "-2.86%",
    "note": "关注算力、光模块、运营商资本开支。"
  },
  {
    "symbol": "512800",
    "name": "银行ETF",
    "category": "红利/防御",
    "price": "0.921",
    "changePct": "-0.22%",
    "note": "适合观察高股息、防御风格和利率预期。"
  },
  {
    "symbol": "513180",
    "name": "恒生科技ETF",
    "category": "港股弹性",
    "price": "0.424",
    "changePct": "-1.85%",
    "note": "受港股流动性、美元利率和互联网监管预期影响。"
  },
  {
    "symbol": "159941",
    "name": "纳指ETF",
    "category": "海外映射",
    "price": "1.496",
    "changePct": "-4.10%",
    "note": "不作为 A 股替代，只看全球科技风险偏好。"
  }
]

export const sectorPulse: SectorPulse[] = [
  {
    "name": "半导体",
    "changePct": "-7.89%",
    "breadth": "n/a",
    "note": "高弹性行业，重点看成交额放大是否持续。（指数代码 881121.TI）"
  },
  {
    "name": "AI算力",
    "changePct": "-4.49%",
    "breadth": "n/a",
    "note": "东数西算(算力)概念指数，主题强时容易拥挤。（指数代码 885957.TI）"
  },
  {
    "name": "高股息",
    "changePct": "-1.12%",
    "breadth": "n/a",
    "note": "高股息精选概念，防御风格，和利率、避险偏好相关。（指数代码 886072.TI）"
  },
  {
    "name": "消费复苏",
    "changePct": "-0.54%",
    "breadth": "n/a",
    "note": "以白酒行业指数代表消费链条景气验证。（指数代码 881273.TI）"
  },
  {
    "name": "新能源",
    "changePct": "-4.97%",
    "breadth": "n/a",
    "note": "光伏概念指数，供给出清和价格周期是核心变量。（指数代码 885531.TI）"
  },
  {
    "name": "券商",
    "changePct": "-1.46%",
    "breadth": "n/a",
    "note": "证券行业指数，常作为风险偏好和成交额弹性的放大器。（指数代码 881157.TI）"
  }
]

export const domesticFlows: DomesticFlow[] = [
  {
    "name": "两市成交额",
    "value": "1.38万亿",
    "state": "1.38万亿（沪+深）",
    "note": "沪市+深市成交额合计（hithink 指数快照口径），判断行情级别的第一层过滤器。"
  },
  {
    "name": "沪市成交额",
    "value": "6527亿",
    "state": "占两市 47.2%",
    "note": "沪市主板与科创板合计成交，观察权重与大盘活跃度。"
  },
  {
    "name": "深市成交额",
    "value": "7304亿",
    "state": "占两市 52.8%",
    "note": "深市主板与中小盘成交，观察成长与题材活跃度。"
  },
  {
    "name": "创业板成交额",
    "value": "3595亿",
    "state": "占深市 49.2%",
    "note": "成长风格成交占比，50w 账户重点关注 ETF 资金而不是短线热榜。"
  }
]

export const stockBreadth = {
  "tradeDate": "2026-11-25",
  "limitUpCount": 57,
  "limitBreakCount": 30,
  "hotStockCount": 30
}

export const limitUpTop: LimitUpItem[] = [
  {
    "ticker": "002242",
    "name": "九阳股份",
    "price": "38.56",
    "pct": "+10.01%",
    "limitUpTime": "09:45",
    "boards": "3连板",
    "reason": "机器人投资+厨房小家电+“羊”字辈",
    "sealMoney": "2.7亿"
  },
  {
    "ticker": "603324",
    "name": "盛剑科技",
    "price": "32.27",
    "pct": "+9.99%",
    "limitUpTime": "09:59",
    "boards": "首板",
    "reason": "光刻胶配套+电子化学品+半导体附属装备",
    "sealMoney": "0.2亿"
  },
  {
    "ticker": "002164",
    "name": "宁波东力",
    "price": "21.70",
    "pct": "+9.98%",
    "limitUpTime": "09:30",
    "boards": "3连板",
    "reason": "人形机器人+精密减速器+尼得科合作",
    "sealMoney": "1.3亿"
  },
  {
    "ticker": "301089",
    "name": "拓新药业",
    "price": "21.34",
    "pct": "+20.02%",
    "limitUpTime": "09:39",
    "boards": "首板",
    "reason": "流感+核苷原料药",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "000593",
    "name": "德龙汇能",
    "price": "20.54",
    "pct": "+10.02%",
    "limitUpTime": "09:30",
    "boards": "首板",
    "reason": "天然气+参股半导体+氢能",
    "sealMoney": "1.5亿"
  },
  {
    "ticker": "605577",
    "name": "龙版传媒",
    "price": "20.03",
    "pct": "+9.99%",
    "limitUpTime": "14:23",
    "boards": "首板",
    "reason": "AI漫剧+出版发行+黑龙江国资",
    "sealMoney": "0.7亿"
  },
  {
    "ticker": "002864",
    "name": "盘龙药业",
    "price": "19.86",
    "pct": "+10.03%",
    "limitUpTime": "09:38",
    "boards": "首板",
    "reason": "中药创新药+盘龙七片+回购",
    "sealMoney": "0.2亿"
  },
  {
    "ticker": "603960",
    "name": "克来机电",
    "price": "18.60",
    "pct": "+9.99%",
    "limitUpTime": "09:25",
    "boards": "4连板",
    "reason": "工业机器人+柔性自动化装备+汽车零部件",
    "sealMoney": "3.1亿"
  },
  {
    "ticker": "603926",
    "name": "铁流股份",
    "price": "17.97",
    "pct": "+9.98%",
    "limitUpTime": "09:35",
    "boards": "3连板",
    "reason": "机器人零部件+电机轴+三季报净利增长",
    "sealMoney": "0.0亿"
  },
  {
    "ticker": "002579",
    "name": "中京电子",
    "price": "17.82",
    "pct": "+10.00%",
    "limitUpTime": "14:54",
    "boards": "5连板",
    "reason": "高阶HDI+算力+光模块PCB+人形机器人",
    "sealMoney": "1.1亿"
  },
  {
    "ticker": "300703",
    "name": "创源股份",
    "price": "17.80",
    "pct": "+20.03%",
    "limitUpTime": "10:15",
    "boards": "3连板",
    "reason": "祈福文创+IP文创+AI玩具+国企改革",
    "sealMoney": "0.7亿"
  },
  {
    "ticker": "002275",
    "name": "桂林三金",
    "price": "13.82",
    "pct": "+10.03%",
    "limitUpTime": "09:40",
    "boards": "首板",
    "reason": "流感+中成药",
    "sealMoney": "0.3亿"
  }
]

export const limitBreakTop: LimitBreakItem[] = [
  {
    "ticker": "600156",
    "name": "华升股份",
    "price": "9.32",
    "pct": "+8.88%",
    "openTimes": 2,
    "turnover": "9亿"
  },
  {
    "ticker": "002190",
    "name": "成飞集成",
    "price": "20.81",
    "pct": "+8.84%",
    "openTimes": 11,
    "turnover": "5亿"
  },
  {
    "ticker": "000407",
    "name": "胜利股份",
    "price": "3.74",
    "pct": "+8.41%",
    "openTimes": 2,
    "turnover": "3亿"
  },
  {
    "ticker": "002737",
    "name": "葵花药业",
    "price": "11.73",
    "pct": "+8.11%",
    "openTimes": 5,
    "turnover": "2亿"
  },
  {
    "ticker": "603395",
    "name": "红四方",
    "price": "18.97",
    "pct": "+7.78%",
    "openTimes": 1,
    "turnover": "2亿"
  },
  {
    "ticker": "002607",
    "name": "中公教育",
    "price": "1.53",
    "pct": "+6.99%",
    "openTimes": 1,
    "turnover": "7亿"
  },
  {
    "ticker": "600865",
    "name": "百大集团",
    "price": "9.86",
    "pct": "+6.48%",
    "openTimes": 1,
    "turnover": "6亿"
  },
  {
    "ticker": "000566",
    "name": "海南海药",
    "price": "3.66",
    "pct": "+6.40%",
    "openTimes": 1,
    "turnover": "4亿"
  }
]

export const ladderDate: string | null = "2026-11-25"

export const ladderBoards: LadderBoard[] = [
  {
    "label": "2板",
    "count": 5,
    "names": [
      "全筑股份",
      "利君股份",
      "天圣制药"
    ]
  },
  {
    "label": "3板",
    "count": 6,
    "names": [
      "九阳股份",
      "创源股份",
      "宁波东力"
    ]
  },
  {
    "label": "4板",
    "count": 2,
    "names": [
      "克来机电",
      "金新农"
    ]
  },
  {
    "label": "5板",
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
    "heat": "12710799",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "600410",
    "name": "华胜天成",
    "heat": "5654205",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "000530",
    "name": "冰山冷热",
    "heat": "5478640",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "002579",
    "name": "中京电子",
    "heat": "5293865",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "300394",
    "name": "天孚通信",
    "heat": "4208362",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "300308",
    "name": "中际旭创",
    "heat": "4089877",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "002685",
    "name": "华东重机",
    "heat": "4014529",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "300502",
    "name": "新易盛",
    "heat": "3638291",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "002086",
    "name": "东方海洋",
    "heat": "3528545",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "002771",
    "name": "真视通",
    "heat": "3375715",
    "rankChange": 0
  }
]

export const skyrockets: RankItem[] = [
  {
    "rank": 1,
    "ticker": "600103",
    "name": "青山纸业",
    "heat": "16544.9",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "300750",
    "name": "宁德时代",
    "heat": "14670.2",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "600467",
    "name": "好当家",
    "heat": "12913.9",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "000530",
    "name": "冰山冷热",
    "heat": "9068.4",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "600814",
    "name": "杭州解百",
    "heat": "8595.8",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "002579",
    "name": "中京电子",
    "heat": "8244.2",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "300086",
    "name": "康芝药业",
    "heat": "8197.2",
    "rankChange": 2
  },
  {
    "rank": 8,
    "ticker": "300394",
    "name": "天孚通信",
    "heat": "7819.5",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "002728",
    "name": "特一药业",
    "heat": "7472.1",
    "rankChange": 6
  },
  {
    "rank": 10,
    "ticker": "002197",
    "name": "证通电子",
    "heat": "7346.4",
    "rankChange": 2
  }
]

export const dragonTigerTop: DragonTigerItem[] = [
  {
    "rank": 1,
    "ticker": "002242",
    "name": "九阳股份",
    "pct": "+10.01%",
    "netValue": "0.63亿",
    "orgNet": "1.36亿",
    "hotMoneyNet": "1.24亿",
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
    "pct": "+4.37%",
    "netValue": "1.24亿",
    "orgNet": "—",
    "hotMoneyNet": "1.79亿",
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
    "pct": "+9.54%",
    "netValue": "-0.73亿",
    "orgNet": "-0.13亿",
    "hotMoneyNet": "0.04亿",
    "concepts": [
      "空气能热泵",
      "冰雪产业",
      "无人零售"
    ]
  },
  {
    "rank": 4,
    "ticker": "002579",
    "name": "中京电子",
    "pct": "+10.00%",
    "netValue": "-0.55亿",
    "orgNet": "-0.04亿",
    "hotMoneyNet": "-1.39亿",
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
    "pct": "-4.41%",
    "netValue": "-1.70亿",
    "orgNet": "-0.01亿",
    "hotMoneyNet": "—",
    "concepts": [
      "幽门螺杆菌概念",
      "预制菜",
      "猴痘概念"
    ]
  },
  {
    "rank": 7,
    "ticker": "600103",
    "name": "青山纸业",
    "pct": "+9.88%",
    "netValue": "2.53亿",
    "orgNet": "—",
    "hotMoneyNet": "0.20亿",
    "concepts": [
      "海峡两岸",
      "5G",
      "共封装光学(CPO)"
    ]
  },
  {
    "rank": 8,
    "ticker": "002771",
    "name": "真视通",
    "pct": "+8.08%",
    "netValue": "-0.14亿",
    "orgNet": "-0.11亿",
    "hotMoneyNet": "-0.00亿",
    "concepts": [
      "时空大数据",
      "算力租赁",
      "东数西算(算力)"
    ]
  },
  {
    "rank": 9,
    "ticker": "002685",
    "name": "华东重机",
    "pct": "+0.45%",
    "netValue": "0.00亿",
    "orgNet": "—",
    "hotMoneyNet": "—",
    "concepts": [
      "航运概念",
      "信创",
      "DeepSeek概念"
    ]
  },
  {
    "rank": 11,
    "ticker": "600715",
    "name": "文投控股",
    "pct": "-9.87%",
    "netValue": "-0.72亿",
    "orgNet": "—",
    "hotMoneyNet": "0.68亿",
    "concepts": [
      "手机游戏",
      "网络游戏",
      "短剧游戏"
    ]
  },
  {
    "rank": 12,
    "ticker": "600722",
    "name": "金牛化工",
    "pct": "+10.04%",
    "netValue": "-0.51亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.65亿",
    "concepts": [
      "国企改革",
      "京津冀一体化",
      "周期"
    ]
  }
]
