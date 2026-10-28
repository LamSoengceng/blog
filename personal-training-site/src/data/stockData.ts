// 本文件由 scripts/generateStockData.mjs 自动生成，请勿手改。
// 数据源: hithink-finance（同花顺金融数据服务），数据日期: 2026-10-28 收盘
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
  "updatedAt": "2026-10-28 收盘",
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
    "value": "3,681.47",
    "change": "+33.17",
    "changePct": "+0.91%",
    "trend": [
      3707.48,
      3716.28,
      3730.92,
      3735.37,
      3713.03,
      3658.03,
      3690.48,
      3697.52,
      3648.3,
      3681.47
    ]
  },
  {
    "name": "沪深300",
    "symbol": "000300.SH",
    "region": "核心资产",
    "value": "4,083.87",
    "change": "+34.32",
    "changePct": "+0.85%",
    "trend": [
      4166.01,
      4170.61,
      4174.53,
      4152.11,
      4111.93,
      4036.3,
      4105.33,
      4103.54,
      4049.55,
      4083.87
    ]
  },
  {
    "name": "中证500",
    "symbol": "000905.SH",
    "region": "中盘成长",
    "value": "6,640.89",
    "change": "+129.47",
    "changePct": "+1.99%",
    "trend": [
      6769.25,
      6772.75,
      6800.66,
      6841.44,
      6840.56,
      6655.25,
      6814.44,
      6712.73,
      6511.42,
      6640.89
    ]
  },
  {
    "name": "中证1000",
    "symbol": "000852.SH",
    "region": "小盘弹性",
    "value": "6,578.10",
    "change": "+150.93",
    "changePct": "+2.35%",
    "trend": [
      6678.65,
      6681.94,
      6698.3,
      6766.9,
      6780.26,
      6578.27,
      6734.55,
      6630.78,
      6427.17,
      6578.1
    ]
  },
  {
    "name": "创业板指",
    "symbol": "399006.SZ",
    "region": "成长风格",
    "value": "2,634.76",
    "change": "+86.61",
    "changePct": "+3.40%",
    "trend": [
      2783.175,
      2772.384,
      2746.291,
      2739.203,
      2694.713,
      2576.901,
      2684.097,
      2638.231,
      2548.149,
      2634.76
    ]
  },
  {
    "name": "科创50",
    "symbol": "000688.SH",
    "region": "硬科技",
    "value": "1,282.93",
    "change": "+30.65",
    "changePct": "+2.45%",
    "trend": [
      1359.52,
      1358.65,
      1329.19,
      1342.42,
      1343.28,
      1305.87,
      1345.51,
      1315.5,
      1252.28,
      1282.93
    ]
  },
  {
    "name": "深证成指",
    "symbol": "399001.SZ",
    "region": "深市主板",
    "value": "11,473.18",
    "change": "+227.45",
    "changePct": "+2.02%",
    "trend": [
      11816.789,
      11802.459,
      11817.423,
      11801.29,
      11704.354,
      11357.32,
      11673.826,
      11534.379,
      11245.732,
      11473.18
    ]
  }
]

export const watchlist: WatchItem[] = [
  {
    "symbol": "510300",
    "name": "沪深300ETF",
    "category": "核心仓",
    "price": "4.152",
    "changePct": "+0.70%",
    "note": "用于观察大盘核心资产，不等同于买入建议。"
  },
  {
    "symbol": "510500",
    "name": "中证500ETF",
    "category": "中盘",
    "price": "6.672",
    "changePct": "+2.07%",
    "note": "适合作为中盘景气和市场广度的观察锚。"
  },
  {
    "symbol": "512100",
    "name": "中证1000ETF",
    "category": "小盘",
    "price": "2.675",
    "changePct": "+2.41%",
    "note": "波动弹性高，50w 账户要限制仓位拥挤。"
  },
  {
    "symbol": "588000",
    "name": "科创50ETF",
    "category": "硬科技",
    "price": "1.354",
    "changePct": "+2.58%",
    "note": "关注半导体、AI、创新药等成长估值修复。"
  },
  {
    "symbol": "159915",
    "name": "创业板ETF",
    "category": "成长",
    "price": "2.649",
    "changePct": "+3.36%",
    "note": "和风险偏好、美债利率、成长股情绪联动更强。"
  },
  {
    "symbol": "512480",
    "name": "半导体ETF",
    "category": "行业主题",
    "price": "0.797",
    "changePct": "+4.18%",
    "note": "主题弹性大，适合监控成交额和拥挤度。"
  },
  {
    "symbol": "515880",
    "name": "通信ETF",
    "category": "AI链条",
    "price": "0.503",
    "changePct": "+5.45%",
    "note": "关注算力、光模块、运营商资本开支。"
  },
  {
    "symbol": "512800",
    "name": "银行ETF",
    "category": "红利/防御",
    "price": "0.872",
    "changePct": "-0.46%",
    "note": "适合观察高股息、防御风格和利率预期。"
  },
  {
    "symbol": "513180",
    "name": "恒生科技ETF",
    "category": "港股弹性",
    "price": "0.480",
    "changePct": "+1.05%",
    "note": "受港股流动性、美元利率和互联网监管预期影响。"
  },
  {
    "symbol": "159941",
    "name": "纳指ETF",
    "category": "海外映射",
    "price": "1.708",
    "changePct": "+2.83%",
    "note": "不作为 A 股替代，只看全球科技风险偏好。"
  }
]

export const sectorPulse: SectorPulse[] = [
  {
    "name": "半导体",
    "changePct": "+4.85%",
    "breadth": "n/a",
    "note": "高弹性行业，重点看成交额放大是否持续。（指数代码 881121.TI）"
  },
  {
    "name": "AI算力",
    "changePct": "+2.08%",
    "breadth": "n/a",
    "note": "东数西算(算力)概念指数，主题强时容易拥挤。（指数代码 885957.TI）"
  },
  {
    "name": "高股息",
    "changePct": "+0.30%",
    "breadth": "n/a",
    "note": "高股息精选概念，防御风格，和利率、避险偏好相关。（指数代码 886072.TI）"
  },
  {
    "name": "消费复苏",
    "changePct": "-2.35%",
    "breadth": "n/a",
    "note": "以白酒行业指数代表消费链条景气验证。（指数代码 881273.TI）"
  },
  {
    "name": "新能源",
    "changePct": "+2.27%",
    "breadth": "n/a",
    "note": "光伏概念指数，供给出清和价格周期是核心变量。（指数代码 885531.TI）"
  },
  {
    "name": "券商",
    "changePct": "-0.66%",
    "breadth": "n/a",
    "note": "证券行业指数，常作为风险偏好和成交额弹性的放大器。（指数代码 881157.TI）"
  }
]

export const domesticFlows: DomesticFlow[] = [
  {
    "name": "两市成交额",
    "value": "1.63万亿",
    "state": "1.63万亿（沪+深）",
    "note": "沪市+深市成交额合计（hithink 指数快照口径），判断行情级别的第一层过滤器。"
  },
  {
    "name": "沪市成交额",
    "value": "7510亿",
    "state": "占两市 46.1%",
    "note": "沪市主板与科创板合计成交，观察权重与大盘活跃度。"
  },
  {
    "name": "深市成交额",
    "value": "8775亿",
    "state": "占两市 53.9%",
    "note": "深市主板与中小盘成交，观察成长与题材活跃度。"
  },
  {
    "name": "创业板成交额",
    "value": "4540亿",
    "state": "占深市 51.7%",
    "note": "成长风格成交占比，50w 账户重点关注 ETF 资金而不是短线热榜。"
  }
]

export const stockBreadth = {
  "tradeDate": "2026-10-28",
  "limitUpCount": 70,
  "limitBreakCount": 30,
  "hotStockCount": 30
}

export const limitUpTop: LimitUpItem[] = [
  {
    "ticker": "603061",
    "name": "金海通",
    "price": "260.15",
    "pct": "+10.00%",
    "limitUpTime": "13:13",
    "boards": "首板",
    "reason": "半导体测试分选机+三季报增长",
    "sealMoney": "0.5亿"
  },
  {
    "ticker": "688137",
    "name": "近岸蛋白",
    "price": "127.20",
    "pct": "+20.00%",
    "limitUpTime": "13:14",
    "boards": "首板",
    "reason": "mRNA原料酶+智能蛋白设计+重组抗体",
    "sealMoney": "0.4亿"
  },
  {
    "ticker": "301080",
    "name": "百普赛斯",
    "price": "101.24",
    "pct": "+20.00%",
    "limitUpTime": "13:12",
    "boards": "首板",
    "reason": "重组蛋白+三季报增长+回购提价",
    "sealMoney": "0.4亿"
  },
  {
    "ticker": "301488",
    "name": "豪恩汽电",
    "price": "97.87",
    "pct": "+20.00%",
    "limitUpTime": "09:30",
    "boards": "首板",
    "reason": "前一交易日竞价波动+机器人域控+机器人感知+智能驾驶",
    "sealMoney": "0.8亿"
  },
  {
    "ticker": "001400",
    "name": "江顺科技",
    "price": "88.31",
    "pct": "+10.00%",
    "limitUpTime": "11:05",
    "boards": "2连板",
    "reason": "三季报增长+3D打印+铝挤压模具+液冷",
    "sealMoney": "0.6亿"
  },
  {
    "ticker": "002975",
    "name": "博杰股份",
    "price": "85.12",
    "pct": "+10.00%",
    "limitUpTime": "14:31",
    "boards": "首板",
    "reason": "机器人测试+磷化铟+MLCC设备+液冷测试",
    "sealMoney": "0.8亿"
  },
  {
    "ticker": "001270",
    "name": "铖昌科技",
    "price": "80.00",
    "pct": "+10.00%",
    "limitUpTime": "13:27",
    "boards": "首板",
    "reason": "卫星通信+相控阵T/R芯片+订单交付",
    "sealMoney": "0.8亿"
  },
  {
    "ticker": "300613",
    "name": "富瀚微",
    "price": "72.48",
    "pct": "+20.00%",
    "limitUpTime": "09:32",
    "boards": "首板",
    "reason": "三季报高增+视觉芯片+端侧AI+供货机器人",
    "sealMoney": "1.5亿"
  },
  {
    "ticker": "605288",
    "name": "凯迪股份",
    "price": "65.40",
    "pct": "+10.01%",
    "limitUpTime": "09:51",
    "boards": "首板",
    "reason": "具身机器人送样+线性驱动+汽车零部件",
    "sealMoney": "0.4亿"
  },
  {
    "ticker": "301261",
    "name": "恒工精密",
    "price": "62.89",
    "pct": "+20.00%",
    "limitUpTime": "09:48",
    "boards": "首板",
    "reason": "三季报增长+人形机器人+减速器零部件",
    "sealMoney": "0.6亿"
  },
  {
    "ticker": "002636",
    "name": "金安国纪",
    "price": "58.59",
    "pct": "+10.01%",
    "limitUpTime": "09:25",
    "boards": "首板",
    "reason": "覆铜板+三季报高增+产能扩张",
    "sealMoney": "3.3亿"
  },
  {
    "ticker": "688045",
    "name": "必易微",
    "price": "55.87",
    "pct": "+20.00%",
    "limitUpTime": "11:04",
    "boards": "首板",
    "reason": "模拟芯片+数字电源+机器人传感",
    "sealMoney": "0.3亿"
  }
]

export const limitBreakTop: LimitBreakItem[] = [
  {
    "ticker": "300461",
    "name": "田中精机",
    "price": "40.00",
    "pct": "+19.05%",
    "openTimes": 4,
    "turnover": "9亿"
  },
  {
    "ticker": "688698",
    "name": "伟创电气",
    "price": "45.04",
    "pct": "+18.84%",
    "openTimes": 1,
    "turnover": "8亿"
  },
  {
    "ticker": "300223",
    "name": "君正股份",
    "price": "111.98",
    "pct": "+18.37%",
    "openTimes": 2,
    "turnover": "73亿"
  },
  {
    "ticker": "688315",
    "name": "诺禾致源",
    "price": "19.89",
    "pct": "+18.11%",
    "openTimes": 1,
    "turnover": "6亿"
  },
  {
    "ticker": "688691",
    "name": "灿芯股份",
    "price": "57.27",
    "pct": "+17.50%",
    "openTimes": 1,
    "turnover": "7亿"
  },
  {
    "ticker": "301047",
    "name": "义翘神州",
    "price": "118.99",
    "pct": "+17.23%",
    "openTimes": 3,
    "turnover": "15亿"
  },
  {
    "ticker": "301052",
    "name": "果麦文化",
    "price": "38.03",
    "pct": "+17.20%",
    "openTimes": 1,
    "turnover": "14亿"
  },
  {
    "ticker": "688818",
    "name": "电科蓝天",
    "price": "41.47",
    "pct": "+15.90%",
    "openTimes": 3,
    "turnover": "10亿"
  }
]

export const ladderDate: string | null = "2026-10-28"

export const ladderBoards: LadderBoard[] = [
  {
    "label": "2板",
    "count": 5,
    "names": [
      "东贝集团",
      "凯众股份",
      "文投控股"
    ]
  },
  {
    "label": "3板",
    "count": 2,
    "names": [
      "光洋股份",
      "青岛食品"
    ]
  },
  {
    "label": "5板",
    "count": 1,
    "names": [
      "襄阳轴承"
    ]
  }
]

export const hotStocks: RankItem[] = [
  {
    "rank": 1,
    "ticker": "688836",
    "name": "宇树科技",
    "heat": "7493898",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "000678",
    "name": "襄阳轴承",
    "heat": "4488616",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "300308",
    "name": "中际旭创",
    "heat": "3965778",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "600838",
    "name": "上海九百",
    "heat": "3643894",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "002249",
    "name": "大洋电机",
    "heat": "3271734",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "002185",
    "name": "华天科技",
    "heat": "3245585",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "002724",
    "name": "海洋王",
    "heat": "3090069",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "688825",
    "name": "长鑫科技",
    "heat": "2959863",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "603278",
    "name": "大业股份",
    "heat": "2696610",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "002636",
    "name": "金安国纪",
    "heat": "2455427",
    "rankChange": 1
  }
]

export const skyrockets: RankItem[] = [
  {
    "rank": 1,
    "ticker": "688836",
    "name": "宇树科技",
    "heat": "52923.0",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "688525",
    "name": "佰维存储",
    "heat": "37358.2",
    "rankChange": 5
  },
  {
    "rank": 3,
    "ticker": "000559",
    "name": "万向钱潮",
    "heat": "37069.1",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "000678",
    "name": "襄阳轴承",
    "heat": "25708.4",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "603667",
    "name": "五洲新春",
    "heat": "24864.0",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "002172",
    "name": "澳洋健康",
    "heat": "19062.4",
    "rankChange": 6
  },
  {
    "rank": 7,
    "ticker": "002526",
    "name": "山东矿机",
    "heat": "18766.4",
    "rankChange": 16
  },
  {
    "rank": 8,
    "ticker": "002164",
    "name": "宁波东力",
    "heat": "17493.7",
    "rankChange": 3
  },
  {
    "rank": 9,
    "ticker": "605488",
    "name": "福莱新材",
    "heat": "16709.4",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "603533",
    "name": "掌阅科技",
    "heat": "16208.0",
    "rankChange": 4
  }
]

export const dragonTigerTop: DragonTigerItem[] = [
  {
    "rank": 1,
    "ticker": "002724",
    "name": "海洋王",
    "pct": "+10.00%",
    "netValue": "1.33亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.05亿",
    "concepts": [
      "军工",
      "无人机",
      "智慧灯杆"
    ]
  },
  {
    "rank": 2,
    "ticker": "000678",
    "name": "襄阳轴承",
    "pct": "+10.03%",
    "netValue": "-1.11亿",
    "orgNet": "0.45亿",
    "hotMoneyNet": "-0.43亿",
    "concepts": [
      "股权转让(并购重组)",
      "减速器",
      "军民融合"
    ]
  },
  {
    "rank": 3,
    "ticker": "600838",
    "name": "上海九百",
    "pct": "+10.00%",
    "netValue": "-0.26亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.08亿",
    "concepts": [
      "参股券商",
      "物业管理",
      "国企改革"
    ]
  },
  {
    "rank": 5,
    "ticker": "603278",
    "name": "大业股份",
    "pct": "+0.87%",
    "netValue": "-0.00亿",
    "orgNet": "—",
    "hotMoneyNet": "0.02亿",
    "concepts": [
      "商业航天",
      "人形机器人",
      "高端装备"
    ]
  },
  {
    "rank": 6,
    "ticker": "002249",
    "name": "大洋电机",
    "pct": "+10.00%",
    "netValue": "3.01亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.26亿",
    "concepts": [
      "长安汽车概念",
      "人形机器人",
      "机器人概念"
    ]
  },
  {
    "rank": 7,
    "ticker": "002354",
    "name": "天娱数科",
    "pct": "+1.10%",
    "netValue": "-0.53亿",
    "orgNet": "0.98亿",
    "hotMoneyNet": "-0.27亿",
    "concepts": [
      "快手概念",
      "AI视频",
      "小红书概念"
    ]
  },
  {
    "rank": 8,
    "ticker": "000530",
    "name": "冰山冷热",
    "pct": "-4.43%",
    "netValue": "-0.00亿",
    "orgNet": "—",
    "hotMoneyNet": "0.12亿",
    "concepts": [
      "冰雪产业",
      "中俄贸易概念",
      "无人零售"
    ]
  },
  {
    "rank": 9,
    "ticker": "002343",
    "name": "慈文传媒",
    "pct": "-10.00%",
    "netValue": "1.62亿",
    "orgNet": "0.35亿",
    "hotMoneyNet": "0.30亿",
    "concepts": [
      "富时罗素概念股",
      "手机游戏",
      "短剧游戏"
    ]
  },
  {
    "rank": 12,
    "ticker": "002696",
    "name": "百洋股份",
    "pct": "-5.14%",
    "netValue": "-0.55亿",
    "orgNet": "0.07亿",
    "hotMoneyNet": "-0.33亿",
    "concepts": [
      "垃圾分类",
      "乡村振兴",
      "预制菜"
    ]
  },
  {
    "rank": 13,
    "ticker": "603528",
    "name": "多伦科技",
    "pct": "+10.06%",
    "netValue": "0.12亿",
    "orgNet": "—",
    "hotMoneyNet": "0.08亿",
    "concepts": [
      "ChatGPT概念",
      "华为鲲鹏",
      "人形机器人"
    ]
  }
]
