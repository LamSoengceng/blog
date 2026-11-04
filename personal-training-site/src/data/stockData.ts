// 本文件由 scripts/generateStockData.mjs 自动生成，请勿手改。
// 数据源: hithink-finance（同花顺金融数据服务），数据日期: 2026-11-04 收盘
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
  "updatedAt": "2026-11-04 收盘",
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
    "value": "3,686.17",
    "change": "+78.07",
    "changePct": "+2.16%",
    "trend": [
      3658.03,
      3690.48,
      3697.52,
      3648.3,
      3681.47,
      3651.43,
      3599.02,
      3638.03,
      3608.1,
      3686.17
    ]
  },
  {
    "name": "沪深300",
    "symbol": "000300.SH",
    "region": "核心资产",
    "value": "4,101.34",
    "change": "+92.47",
    "changePct": "+2.31%",
    "trend": [
      4036.3,
      4105.33,
      4103.54,
      4049.55,
      4083.87,
      4041.84,
      3985.5,
      4016.92,
      4008.87,
      4101.34
    ]
  },
  {
    "name": "中证500",
    "symbol": "000905.SH",
    "region": "中盘成长",
    "value": "6,622.03",
    "change": "+294.98",
    "changePct": "+4.66%",
    "trend": [
      6655.25,
      6814.44,
      6712.73,
      6511.42,
      6640.89,
      6453.72,
      6266.19,
      6420.23,
      6327.05,
      6622.03
    ]
  },
  {
    "name": "中证1000",
    "symbol": "000852.SH",
    "region": "小盘弹性",
    "value": "6,511.81",
    "change": "+290.58",
    "changePct": "+4.67%",
    "trend": [
      6578.27,
      6734.55,
      6630.78,
      6427.17,
      6578.1,
      6378.78,
      6161.23,
      6329.34,
      6221.23,
      6511.81
    ]
  },
  {
    "name": "创业板指",
    "symbol": "399006.SZ",
    "region": "成长风格",
    "value": "2,544.73",
    "change": "+153.08",
    "changePct": "+6.40%",
    "trend": [
      2576.901,
      2684.097,
      2638.231,
      2548.149,
      2634.76,
      2517.588,
      2413.629,
      2458.698,
      2391.652,
      2544.73
    ]
  },
  {
    "name": "科创50",
    "symbol": "000688.SH",
    "region": "硬科技",
    "value": "1,265.47",
    "change": "+114.19",
    "changePct": "+9.92%",
    "trend": [
      1305.87,
      1345.51,
      1315.5,
      1252.28,
      1282.93,
      1228.09,
      1160.84,
      1196.94,
      1151.28,
      1265.47
    ]
  },
  {
    "name": "深证成指",
    "symbol": "399001.SZ",
    "region": "深市主板",
    "value": "11,335.69",
    "change": "+458.70",
    "changePct": "+4.22%",
    "trend": [
      11357.32,
      11673.826,
      11534.379,
      11245.732,
      11473.18,
      11138.198,
      10833.784,
      11010.677,
      10876.989,
      11335.687
    ]
  }
]

export const watchlist: WatchItem[] = [
  {
    "symbol": "510300",
    "name": "沪深300ETF",
    "category": "核心仓",
    "price": "4.175",
    "changePct": "+2.03%",
    "note": "用于观察大盘核心资产，不等同于买入建议。"
  },
  {
    "symbol": "510500",
    "name": "中证500ETF",
    "category": "中盘",
    "price": "6.661",
    "changePct": "+4.40%",
    "note": "适合作为中盘景气和市场广度的观察锚。"
  },
  {
    "symbol": "512100",
    "name": "中证1000ETF",
    "category": "小盘",
    "price": "2.652",
    "changePct": "+4.62%",
    "note": "波动弹性高，50w 账户要限制仓位拥挤。"
  },
  {
    "symbol": "588000",
    "name": "科创50ETF",
    "category": "硬科技",
    "price": "1.340",
    "changePct": "+10.29%",
    "note": "关注半导体、AI、创新药等成长估值修复。"
  },
  {
    "symbol": "159915",
    "name": "创业板ETF",
    "category": "成长",
    "price": "2.561",
    "changePct": "+6.58%",
    "note": "和风险偏好、美债利率、成长股情绪联动更强。"
  },
  {
    "symbol": "512480",
    "name": "半导体ETF",
    "category": "行业主题",
    "price": "0.772",
    "changePct": "+9.97%",
    "note": "主题弹性大，适合监控成交额和拥挤度。"
  },
  {
    "symbol": "515880",
    "name": "通信ETF",
    "category": "AI链条",
    "price": "0.436",
    "changePct": "+8.19%",
    "note": "关注算力、光模块、运营商资本开支。"
  },
  {
    "symbol": "512800",
    "name": "银行ETF",
    "category": "红利/防御",
    "price": "0.874",
    "changePct": "-0.68%",
    "note": "适合观察高股息、防御风格和利率预期。"
  },
  {
    "symbol": "513180",
    "name": "恒生科技ETF",
    "category": "港股弹性",
    "price": "0.491",
    "changePct": "+2.08%",
    "note": "受港股流动性、美元利率和互联网监管预期影响。"
  },
  {
    "symbol": "159941",
    "name": "纳指ETF",
    "category": "海外映射",
    "price": "1.644",
    "changePct": "+2.11%",
    "note": "不作为 A 股替代，只看全球科技风险偏好。"
  }
]

export const sectorPulse: SectorPulse[] = [
  {
    "name": "半导体",
    "changePct": "+10.55%",
    "breadth": "n/a",
    "note": "高弹性行业，重点看成交额放大是否持续。（指数代码 881121.TI）"
  },
  {
    "name": "AI算力",
    "changePct": "+3.94%",
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
    "changePct": "-1.67%",
    "breadth": "n/a",
    "note": "以白酒行业指数代表消费链条景气验证。（指数代码 881273.TI）"
  },
  {
    "name": "新能源",
    "changePct": "+4.08%",
    "breadth": "n/a",
    "note": "光伏概念指数，供给出清和价格周期是核心变量。（指数代码 885531.TI）"
  },
  {
    "name": "券商",
    "changePct": "+0.89%",
    "breadth": "n/a",
    "note": "证券行业指数，常作为风险偏好和成交额弹性的放大器。（指数代码 881157.TI）"
  }
]

export const domesticFlows: DomesticFlow[] = [
  {
    "name": "两市成交额",
    "value": "2.04万亿",
    "state": "2.04万亿（沪+深）",
    "note": "沪市+深市成交额合计（hithink 指数快照口径），判断行情级别的第一层过滤器。"
  },
  {
    "name": "沪市成交额",
    "value": "9533亿",
    "state": "占两市 46.8%",
    "note": "沪市主板与科创板合计成交，观察权重与大盘活跃度。"
  },
  {
    "name": "深市成交额",
    "value": "1.08万亿",
    "state": "占两市 53.2%",
    "note": "深市主板与中小盘成交，观察成长与题材活跃度。"
  },
  {
    "name": "创业板成交额",
    "value": "5493亿",
    "state": "占深市 50.7%",
    "note": "成长风格成交占比，50w 账户重点关注 ETF 资金而不是短线热榜。"
  }
]

export const stockBreadth = {
  "tradeDate": "2026-11-04",
  "limitUpCount": 119,
  "limitBreakCount": 30,
  "hotStockCount": 30
}

export const limitUpTop: LimitUpItem[] = [
  {
    "ticker": "002371",
    "name": "北方华创",
    "price": "535.50",
    "pct": "+10.00%",
    "limitUpTime": "13:47",
    "boards": "首板",
    "reason": "半导体设备+存储芯片+混合键合",
    "sealMoney": "3.6亿"
  },
  {
    "ticker": "688072",
    "name": "拓荆科技",
    "price": "487.79",
    "pct": "+20.00%",
    "limitUpTime": "14:33",
    "boards": "首板",
    "reason": "半导体设备+先进封装+拟收购资产",
    "sealMoney": "1.2亿"
  },
  {
    "ticker": "688835",
    "name": "高凯技术",
    "price": "297.28",
    "pct": "+20.00%",
    "limitUpTime": "14:38",
    "boards": "首板",
    "reason": "存储芯片+半导体流控+订单增长+科创次新股",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "688536",
    "name": "思瑞浦",
    "price": "269.24",
    "pct": "+20.00%",
    "limitUpTime": "14:27",
    "boards": "首板",
    "reason": "模拟芯片+光模块+三季报增长",
    "sealMoney": "0.2亿"
  },
  {
    "ticker": "688361",
    "name": "中科飞测",
    "price": "246.74",
    "pct": "+20.00%",
    "limitUpTime": "14:00",
    "boards": "首板",
    "reason": "拟回购+半导体量检测+存储芯片",
    "sealMoney": "1.5亿"
  },
  {
    "ticker": "603061",
    "name": "金海通",
    "price": "228.69",
    "pct": "+10.00%",
    "limitUpTime": "13:56",
    "boards": "首板",
    "reason": "半导体测试分选机+三季报增长",
    "sealMoney": "0.5亿"
  },
  {
    "ticker": "002916",
    "name": "深南电路",
    "price": "225.60",
    "pct": "+10.00%",
    "limitUpTime": "14:27",
    "boards": "首板",
    "reason": "算力PCB订单饱满+超跌反弹+三季报增长",
    "sealMoney": "1.5亿"
  },
  {
    "ticker": "688809",
    "name": "强一股份",
    "price": "223.91",
    "pct": "+20.00%",
    "limitUpTime": "14:03",
    "boards": "首板",
    "reason": "晶圆测试探针卡+存储探针卡+回购",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "688200",
    "name": "华峰测控",
    "price": "218.53",
    "pct": "+20.00%",
    "limitUpTime": "13:52",
    "boards": "首板",
    "reason": "半导体设备+超跌反弹+三季报增长",
    "sealMoney": "1.5亿"
  },
  {
    "ticker": "688037",
    "name": "芯源微",
    "price": "211.37",
    "pct": "+20.00%",
    "limitUpTime": "13:58",
    "boards": "首板",
    "reason": "先进封装+涂胶显影+化学清洗",
    "sealMoney": "1.1亿"
  },
  {
    "ticker": "603893",
    "name": "瑞芯微",
    "price": "198.01",
    "pct": "+10.00%",
    "limitUpTime": "14:01",
    "boards": "首板",
    "reason": "机器人芯片+端侧AI+半导体",
    "sealMoney": "1.4亿"
  },
  {
    "ticker": "300489",
    "name": "光智科技",
    "price": "190.30",
    "pct": "+20.00%",
    "limitUpTime": "14:00",
    "boards": "首板",
    "reason": "磷化铟衬底+光通信材料+三季度业绩增长",
    "sealMoney": "0.9亿"
  }
]

export const limitBreakTop: LimitBreakItem[] = [
  {
    "ticker": "301658",
    "name": "首航新能",
    "price": "25.40",
    "pct": "+19.98%",
    "openTimes": 26,
    "turnover": "8亿"
  },
  {
    "ticker": "688082",
    "name": "盛美上海",
    "price": "191.00",
    "pct": "+19.82%",
    "openTimes": 1,
    "turnover": "15亿"
  },
  {
    "ticker": "688627",
    "name": "精智达",
    "price": "233.11",
    "pct": "+19.64%",
    "openTimes": 1,
    "turnover": "22亿"
  },
  {
    "ticker": "603067",
    "name": "振华股份",
    "price": "23.80",
    "pct": "+9.98%",
    "openTimes": 10,
    "turnover": "11亿"
  },
  {
    "ticker": "600605",
    "name": "汇通能源",
    "price": "27.55",
    "pct": "+9.98%",
    "openTimes": 11,
    "turnover": "4亿"
  },
  {
    "ticker": "605358",
    "name": "立昂微",
    "price": "30.90",
    "pct": "+9.61%",
    "openTimes": 2,
    "turnover": "14亿"
  },
  {
    "ticker": "000636",
    "name": "风华高科",
    "price": "33.10",
    "pct": "+9.57%",
    "openTimes": 1,
    "turnover": "33亿"
  },
  {
    "ticker": "600172",
    "name": "黄河旋风",
    "price": "11.53",
    "pct": "+8.88%",
    "openTimes": 3,
    "turnover": "19亿"
  }
]

export const ladderDate: string | null = "2026-11-04"

export const ladderBoards: LadderBoard[] = [
  {
    "label": "2板",
    "count": 6,
    "names": [
      "大连友谊",
      "宝明科技",
      "扬子新材"
    ]
  },
  {
    "label": "3板",
    "count": 6,
    "names": [
      "大晟文化",
      "浙文影业",
      "紫竹高科"
    ]
  }
]

export const hotStocks: RankItem[] = [
  {
    "rank": 1,
    "ticker": "300308",
    "name": "中际旭创",
    "heat": "6021762",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "688825",
    "name": "长鑫科技",
    "heat": "4005164",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "300502",
    "name": "新易盛",
    "heat": "3859898",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "001381",
    "name": "皇冠新材",
    "heat": "3575892",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "002029",
    "name": "七匹狼",
    "heat": "3504320",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "002086",
    "name": "东方海洋",
    "heat": "3466338",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "688836",
    "name": "宇树科技",
    "heat": "3286527",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "000678",
    "name": "襄阳轴承",
    "heat": "3189666",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "000530",
    "name": "冰山冷热",
    "heat": "3044153",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "002428",
    "name": "云南锗业",
    "heat": "2981878",
    "rankChange": 0
  }
]

export const skyrockets: RankItem[] = [
  {
    "rank": 1,
    "ticker": "002428",
    "name": "云南锗业",
    "heat": "33316.9",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "002081",
    "name": "金螳螂",
    "heat": "31662.4",
    "rankChange": 5
  },
  {
    "rank": 3,
    "ticker": "300666",
    "name": "江丰电子",
    "heat": "20896.9",
    "rankChange": 2
  },
  {
    "rank": 4,
    "ticker": "002156",
    "name": "通富微电",
    "heat": "19860.2",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "600206",
    "name": "有研新材",
    "heat": "19473.5",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "000530",
    "name": "冰山冷热",
    "heat": "19404.3",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "300139",
    "name": "晓程科技",
    "heat": "18564.3",
    "rankChange": 1
  },
  {
    "rank": 8,
    "ticker": "002636",
    "name": "金安国纪",
    "heat": "16918.9",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "603381",
    "name": "永臻股份",
    "heat": "16743.2",
    "rankChange": 4
  },
  {
    "rank": 10,
    "ticker": "603259",
    "name": "药明康德",
    "heat": "16116.4",
    "rankChange": 0
  }
]

export const dragonTigerTop: DragonTigerItem[] = [
  {
    "rank": 1,
    "ticker": "002086",
    "name": "东方海洋",
    "pct": "-4.09%",
    "netValue": "0.51亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.18亿",
    "concepts": [
      "幽门螺杆菌概念",
      "预制菜",
      "猴痘概念"
    ]
  },
  {
    "rank": 2,
    "ticker": "002029",
    "name": "七匹狼",
    "pct": "-9.97%",
    "netValue": "-1.31亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.52亿",
    "concepts": [
      "参股保险",
      "数字经济",
      "跨境电商"
    ]
  },
  {
    "rank": 5,
    "ticker": "000678",
    "name": "襄阳轴承",
    "pct": "-3.85%",
    "netValue": "-1.02亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.23亿",
    "concepts": [
      "股权转让(并购重组)",
      "减速器",
      "农机"
    ]
  },
  {
    "rank": 6,
    "ticker": "000530",
    "name": "冰山冷热",
    "pct": "+10.00%",
    "netValue": "1.98亿",
    "orgNet": "0.50亿",
    "hotMoneyNet": "-0.20亿",
    "concepts": [
      "冰雪产业",
      "中俄贸易概念",
      "无人零售"
    ]
  },
  {
    "rank": 7,
    "ticker": "601566",
    "name": "九牧王",
    "pct": "-5.19%",
    "netValue": "-0.49亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.54亿",
    "concepts": [
      "福建自贸区",
      "IP经济(谷子经济)",
      "网红经济"
    ]
  },
  {
    "rank": 10,
    "ticker": "600715",
    "name": "文投控股",
    "pct": "+0.41%",
    "netValue": "-1.25亿",
    "orgNet": "—",
    "hotMoneyNet": "0.53亿",
    "concepts": [
      "文化传媒概念",
      "短剧游戏",
      "AI视频"
    ]
  },
  {
    "rank": 13,
    "ticker": "002724",
    "name": "海洋王",
    "pct": "-8.62%",
    "netValue": "2.54亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.10亿",
    "concepts": [
      "军工",
      "无人机",
      "智慧灯杆"
    ]
  },
  {
    "rank": 14,
    "ticker": "603278",
    "name": "大业股份",
    "pct": "-8.16%",
    "netValue": "0.07亿",
    "orgNet": "—",
    "hotMoneyNet": "0.42亿",
    "concepts": [
      "风电",
      "人形机器人",
      "高端装备"
    ]
  },
  {
    "rank": 15,
    "ticker": "000995",
    "name": "皇台酒业",
    "pct": "-4.66%",
    "netValue": "0.34亿",
    "orgNet": "0.89亿",
    "hotMoneyNet": "-0.20亿",
    "concepts": [
      "白酒概念",
      "乡村振兴",
      "农业种植"
    ]
  },
  {
    "rank": 16,
    "ticker": "002172",
    "name": "澳洋健康",
    "pct": "-10.00%",
    "netValue": "-0.49亿",
    "orgNet": "0.63亿",
    "hotMoneyNet": "—",
    "concepts": [
      "高压氧舱",
      "民营医院",
      "毛发医疗"
    ]
  }
]
