// 本文件由 scripts/generateStockData.mjs 自动生成，请勿手改。
// 数据源: hithink-finance（同花顺金融数据服务），数据日期: 2026-11-23 收盘
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
  "updatedAt": "2026-11-23 收盘",
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
    "value": "3,538.95",
    "change": "+5.16",
    "changePct": "+0.15%",
    "trend": [
      3663.72,
      3680.64,
      3655.83,
      3634.35,
      3602.57,
      3584.58,
      3587.83,
      3577.62,
      3533.79,
      3538.95
    ]
  },
  {
    "name": "沪深300",
    "symbol": "000300.SH",
    "region": "核心资产",
    "value": "3,958.29",
    "change": "+3.72",
    "changePct": "+0.09%",
    "trend": [
      4059.11,
      4075.71,
      4043.93,
      4016.29,
      3979.8,
      3976.46,
      3983.77,
      3984.84,
      3954.57,
      3958.29
    ]
  },
  {
    "name": "中证500",
    "symbol": "000905.SH",
    "region": "中盘成长",
    "value": "6,128.99",
    "change": "+122.91",
    "changePct": "+2.05%",
    "trend": [
      6645.89,
      6713.18,
      6604.15,
      6465.49,
      6297.18,
      6283.01,
      6282.22,
      6251.96,
      6006.08,
      6128.99
    ]
  },
  {
    "name": "中证1000",
    "symbol": "000852.SH",
    "region": "小盘弹性",
    "value": "5,812.32",
    "change": "+163.69",
    "changePct": "+2.90%",
    "trend": [
      6579.36,
      6669.55,
      6537.84,
      6357.26,
      6164.62,
      6092.39,
      6052.82,
      5938.9,
      5648.63,
      5812.32
    ]
  },
  {
    "name": "创业板指",
    "symbol": "399006.SZ",
    "region": "成长风格",
    "value": "2,280.20",
    "change": "+68.08",
    "changePct": "+3.08%",
    "trend": [
      2494.397,
      2572.067,
      2509.429,
      2426.085,
      2320.02,
      2292.204,
      2311.621,
      2293.342,
      2212.127,
      2280.204
    ]
  },
  {
    "name": "科创50",
    "symbol": "000688.SH",
    "region": "硬科技",
    "value": "1,227.89",
    "change": "-3.20",
    "changePct": "-0.26%",
    "trend": [
      1265.02,
      1300.38,
      1309.84,
      1279.66,
      1213.68,
      1221.19,
      1247.99,
      1270.78,
      1231.09,
      1227.89
    ]
  },
  {
    "name": "深证成指",
    "symbol": "399001.SZ",
    "region": "深市主板",
    "value": "10,454.37",
    "change": "+197.98",
    "changePct": "+1.93%",
    "trend": [
      11241.536,
      11389.737,
      11197.976,
      10968.787,
      10690.778,
      10638.524,
      10659.412,
      10583.204,
      10256.389,
      10454.37
    ]
  }
]

export const watchlist: WatchItem[] = [
  {
    "symbol": "510300",
    "name": "沪深300ETF",
    "category": "核心仓",
    "price": "4.023",
    "changePct": "+0.12%",
    "note": "用于观察大盘核心资产，不等同于买入建议。"
  },
  {
    "symbol": "510500",
    "name": "中证500ETF",
    "category": "中盘",
    "price": "6.160",
    "changePct": "+1.77%",
    "note": "适合作为中盘景气和市场广度的观察锚。"
  },
  {
    "symbol": "512100",
    "name": "中证1000ETF",
    "category": "小盘",
    "price": "2.362",
    "changePct": "+2.70%",
    "note": "波动弹性高，50w 账户要限制仓位拥挤。"
  },
  {
    "symbol": "588000",
    "name": "科创50ETF",
    "category": "硬科技",
    "price": "1.298",
    "changePct": "-0.15%",
    "note": "关注半导体、AI、创新药等成长估值修复。"
  },
  {
    "symbol": "159915",
    "name": "创业板ETF",
    "category": "成长",
    "price": "2.295",
    "changePct": "+2.91%",
    "note": "和风险偏好、美债利率、成长股情绪联动更强。"
  },
  {
    "symbol": "512480",
    "name": "半导体ETF",
    "category": "行业主题",
    "price": "0.748",
    "changePct": "+0.40%",
    "note": "主题弹性大，适合监控成交额和拥挤度。"
  },
  {
    "symbol": "515880",
    "name": "通信ETF",
    "category": "AI链条",
    "price": "0.381",
    "changePct": "+5.25%",
    "note": "关注算力、光模块、运营商资本开支。"
  },
  {
    "symbol": "512800",
    "name": "银行ETF",
    "category": "红利/防御",
    "price": "0.916",
    "changePct": "-1.08%",
    "note": "适合观察高股息、防御风格和利率预期。"
  },
  {
    "symbol": "513180",
    "name": "恒生科技ETF",
    "category": "港股弹性",
    "price": "0.440",
    "changePct": "+0.23%",
    "note": "受港股流动性、美元利率和互联网监管预期影响。"
  },
  {
    "symbol": "159941",
    "name": "纳指ETF",
    "category": "海外映射",
    "price": "1.517",
    "changePct": "-0.59%",
    "note": "不作为 A 股替代，只看全球科技风险偏好。"
  }
]

export const sectorPulse: SectorPulse[] = [
  {
    "name": "半导体",
    "changePct": "+3.19%",
    "breadth": "n/a",
    "note": "高弹性行业，重点看成交额放大是否持续。（指数代码 881121.TI）"
  },
  {
    "name": "AI算力",
    "changePct": "+3.08%",
    "breadth": "n/a",
    "note": "东数西算(算力)概念指数，主题强时容易拥挤。（指数代码 885957.TI）"
  },
  {
    "name": "高股息",
    "changePct": "-0.15%",
    "breadth": "n/a",
    "note": "高股息精选概念，防御风格，和利率、避险偏好相关。（指数代码 886072.TI）"
  },
  {
    "name": "消费复苏",
    "changePct": "+1.23%",
    "breadth": "n/a",
    "note": "以白酒行业指数代表消费链条景气验证。（指数代码 881273.TI）"
  },
  {
    "name": "新能源",
    "changePct": "+2.96%",
    "breadth": "n/a",
    "note": "光伏概念指数，供给出清和价格周期是核心变量。（指数代码 885531.TI）"
  },
  {
    "name": "券商",
    "changePct": "+0.67%",
    "breadth": "n/a",
    "note": "证券行业指数，常作为风险偏好和成交额弹性的放大器。（指数代码 881157.TI）"
  }
]

export const domesticFlows: DomesticFlow[] = [
  {
    "name": "两市成交额",
    "value": "1.55万亿",
    "state": "1.55万亿（沪+深）",
    "note": "沪市+深市成交额合计（hithink 指数快照口径），判断行情级别的第一层过滤器。"
  },
  {
    "name": "沪市成交额",
    "value": "7385亿",
    "state": "占两市 47.6%",
    "note": "沪市主板与科创板合计成交，观察权重与大盘活跃度。"
  },
  {
    "name": "深市成交额",
    "value": "8144亿",
    "state": "占两市 52.4%",
    "note": "深市主板与中小盘成交，观察成长与题材活跃度。"
  },
  {
    "name": "创业板成交额",
    "value": "4046亿",
    "state": "占深市 49.7%",
    "note": "成长风格成交占比，50w 账户重点关注 ETF 资金而不是短线热榜。"
  }
]

export const stockBreadth = {
  "tradeDate": "2026-11-23",
  "limitUpCount": 150,
  "limitBreakCount": 23,
  "hotStockCount": 30
}

export const limitUpTop: LimitUpItem[] = [
  {
    "ticker": "688836",
    "name": "宇树科技",
    "price": "708.00",
    "pct": "+20.00%",
    "limitUpTime": "13:44",
    "boards": "首板",
    "reason": "人形机器人+物理AI+具身智能",
    "sealMoney": "2.4亿"
  },
  {
    "ticker": "603893",
    "name": "瑞芯微",
    "price": "202.88",
    "pct": "+10.00%",
    "limitUpTime": "11:07",
    "boards": "首板",
    "reason": "端侧AI+机器人芯片+协处理器",
    "sealMoney": "2.1亿"
  },
  {
    "ticker": "688585",
    "name": "上纬新材",
    "price": "178.99",
    "pct": "+20.00%",
    "limitUpTime": "13:23",
    "boards": "首板",
    "reason": "人形机器人+战略合作+智元入主+风电树脂",
    "sealMoney": "1.1亿"
  },
  {
    "ticker": "301529",
    "name": "福赛科技",
    "price": "154.80",
    "pct": "+20.00%",
    "limitUpTime": "13:40",
    "boards": "首板",
    "reason": "机器人零部件+汽车内饰+新能源三电嵌件",
    "sealMoney": "0.2亿"
  },
  {
    "ticker": "688667",
    "name": "菱电电控",
    "price": "95.04",
    "pct": "+20.00%",
    "limitUpTime": "10:02",
    "boards": "首板",
    "reason": "汽车电控+低空飞行+混动电控",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "603175",
    "name": "超颖电子",
    "price": "89.32",
    "pct": "+10.00%",
    "limitUpTime": "13:48",
    "boards": "首板",
    "reason": "AI算力PCB+存储PCB+高阶PCB认证",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "301218",
    "name": "华是科技",
    "price": "87.00",
    "pct": "+20.00%",
    "limitUpTime": "14:03",
    "boards": "首板",
    "reason": "AI短剧+机器人投资+智慧城市",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "003021",
    "name": "兆威机电",
    "price": "84.51",
    "pct": "+10.00%",
    "limitUpTime": "13:25",
    "boards": "首板",
    "reason": "人形机器人+灵巧手+微型传动",
    "sealMoney": "1.2亿"
  },
  {
    "ticker": "603236",
    "name": "移远通信",
    "price": "81.25",
    "pct": "+10.01%",
    "limitUpTime": "13:17",
    "boards": "首板",
    "reason": "机器人+端侧AI+物联网模组",
    "sealMoney": "0.7亿"
  },
  {
    "ticker": "301413",
    "name": "安培龙",
    "price": "74.76",
    "pct": "+20.00%",
    "limitUpTime": "09:59",
    "boards": "首板",
    "reason": "人形机器人+力传感器+压力传感器",
    "sealMoney": "0.8亿"
  },
  {
    "ticker": "301313",
    "name": "凡拓数创",
    "price": "70.99",
    "pct": "+20.00%",
    "limitUpTime": "11:03",
    "boards": "2连板",
    "reason": "具身智能数据+物理AI数据基座+机器人训练场",
    "sealMoney": "0.9亿"
  },
  {
    "ticker": "001400",
    "name": "江顺科技",
    "price": "66.66",
    "pct": "+10.00%",
    "limitUpTime": "13:42",
    "boards": "首板",
    "reason": "3D打印+铝挤压模具",
    "sealMoney": "0.1亿"
  }
]

export const limitBreakTop: LimitBreakItem[] = [
  {
    "ticker": "688090",
    "name": "瑞松科技",
    "price": "51.45",
    "pct": "+19.29%",
    "openTimes": 3,
    "turnover": "7亿"
  },
  {
    "ticker": "300945",
    "name": "曼卡龙",
    "price": "9.81",
    "pct": "+16.09%",
    "openTimes": 1,
    "turnover": "2亿"
  },
  {
    "ticker": "301176",
    "name": "逸豪新材",
    "price": "38.96",
    "pct": "+15.27%",
    "openTimes": 2,
    "turnover": "7亿"
  },
  {
    "ticker": "300949",
    "name": "奥雅股份",
    "price": "57.30",
    "pct": "+13.33%",
    "openTimes": 1,
    "turnover": "6亿"
  },
  {
    "ticker": "002979",
    "name": "雷赛智能",
    "price": "45.52",
    "pct": "+9.55%",
    "openTimes": 11,
    "turnover": "8亿"
  },
  {
    "ticker": "002472",
    "name": "双环传动",
    "price": "38.77",
    "pct": "+9.37%",
    "openTimes": 1,
    "turnover": "15亿"
  },
  {
    "ticker": "603665",
    "name": "康隆达",
    "price": "18.12",
    "pct": "+9.16%",
    "openTimes": 2,
    "turnover": "1亿"
  },
  {
    "ticker": "603683",
    "name": "晶华新材",
    "price": "13.01",
    "pct": "+9.05%",
    "openTimes": 1,
    "turnover": "5亿"
  }
]

export const ladderDate: string | null = "2026-11-23"

export const ladderBoards: LadderBoard[] = [
  {
    "label": "2板",
    "count": 13,
    "names": [
      "东方海洋",
      "东晶电子",
      "克来机电"
    ]
  },
  {
    "label": "3板",
    "count": 1,
    "names": [
      "中京电子"
    ]
  },
  {
    "label": "5板",
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
    "heat": "7138157",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "688836",
    "name": "宇树科技",
    "heat": "5158265",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "300502",
    "name": "新易盛",
    "heat": "5066760",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "300308",
    "name": "中际旭创",
    "heat": "5043186",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "000530",
    "name": "冰山冷热",
    "heat": "4410139",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "002148",
    "name": "北纬科技",
    "heat": "4009148",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "600410",
    "name": "华胜天成",
    "heat": "3825635",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "002579",
    "name": "中京电子",
    "heat": "3648374",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "002086",
    "name": "东方海洋",
    "heat": "3544691",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "600715",
    "name": "文投控股",
    "heat": "3388118",
    "rankChange": 0
  }
]

export const skyrockets: RankItem[] = [
  {
    "rank": 1,
    "ticker": "002384",
    "name": "东山精密",
    "heat": "4236.5",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "300308",
    "name": "中际旭创",
    "heat": "4226.4",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "601138",
    "name": "工业富联",
    "heat": "3133.9",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "603960",
    "name": "克来机电",
    "heat": "2593.7",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "000636",
    "name": "风华高科",
    "heat": "2571.0",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "300502",
    "name": "新易盛",
    "heat": "2480.3",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "300476",
    "name": "胜宏科技",
    "heat": "2393.2",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "002036",
    "name": "联创电子",
    "heat": "2064.8",
    "rankChange": 2
  },
  {
    "rank": 9,
    "ticker": "600206",
    "name": "有研新材",
    "heat": "2032.7",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "601599",
    "name": "浙文影业",
    "heat": "1869.5",
    "rankChange": 0
  }
]

export const dragonTigerTop: DragonTigerItem[] = [
  {
    "rank": 1,
    "ticker": "002148",
    "name": "北纬科技",
    "pct": "+10.04%",
    "netValue": "0.12亿",
    "orgNet": "-0.03亿",
    "hotMoneyNet": "-0.22亿",
    "concepts": [
      "手机游戏",
      "抖音概念(字节概念)",
      "网络游戏"
    ]
  },
  {
    "rank": 2,
    "ticker": "600715",
    "name": "文投控股",
    "pct": "+4.01%",
    "netValue": "0.21亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.18亿",
    "concepts": [
      "手机游戏",
      "网络游戏",
      "短剧游戏"
    ]
  },
  {
    "rank": 6,
    "ticker": "301313",
    "name": "凡拓数创",
    "pct": "+20.00%",
    "netValue": "0.08亿",
    "orgNet": "-0.78亿",
    "hotMoneyNet": "—",
    "concepts": [
      "元宇宙",
      "空间计算",
      "智谱AI"
    ]
  },
  {
    "rank": 11,
    "ticker": "600327",
    "name": "大东方",
    "pct": "+9.94%",
    "netValue": "-0.27亿",
    "orgNet": "—",
    "hotMoneyNet": "0.15亿",
    "concepts": [
      "信托概念",
      "民营医院",
      "预制菜"
    ]
  },
  {
    "rank": 17,
    "ticker": "000636",
    "name": "风华高科",
    "pct": "+10.02%",
    "netValue": "1.80亿",
    "orgNet": "0.91亿",
    "hotMoneyNet": "—",
    "concepts": [
      "5G",
      "共封装光学(CPO)",
      "MLCC概念"
    ]
  },
  {
    "rank": 22,
    "ticker": "300829",
    "name": "金丹科技",
    "pct": "+20.00%",
    "netValue": "0.68亿",
    "orgNet": "0.68亿",
    "hotMoneyNet": "0.35亿",
    "concepts": [
      "可降解塑料",
      "土地流转",
      "玉米"
    ]
  },
  {
    "rank": 33,
    "ticker": "301660",
    "name": "粤芯半导体",
    "pct": "+4.54%",
    "netValue": "-0.10亿",
    "orgNet": "-1.36亿",
    "hotMoneyNet": "0.03亿",
    "concepts": [
      "注册制次新股",
      "汽车芯片",
      "共封装光学(CPO)"
    ]
  },
  {
    "rank": 56,
    "ticker": "605018",
    "name": "长华集团",
    "pct": "+10.04%",
    "netValue": "0.06亿",
    "orgNet": "—",
    "hotMoneyNet": "0.22亿",
    "concepts": [
      "一体化压铸",
      "长安汽车概念",
      "飞行汽车(eVTOL)"
    ]
  },
  {
    "rank": 111,
    "ticker": "001358",
    "name": "兴欣新材",
    "pct": "+10.02%",
    "netValue": "0.67亿",
    "orgNet": "0.22亿",
    "hotMoneyNet": "-0.07亿",
    "concepts": [
      "碳中和",
      "净水概念",
      "光刻胶"
    ]
  },
  {
    "rank": 123,
    "ticker": "002242",
    "name": "九阳股份",
    "pct": "+10.01%",
    "netValue": "3.22亿",
    "orgNet": "1.12亿",
    "hotMoneyNet": "-0.21亿",
    "concepts": [
      "智能家居",
      "净水概念",
      "绿色电力"
    ]
  }
]
