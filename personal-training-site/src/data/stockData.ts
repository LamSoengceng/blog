// 本文件由 scripts/generateStockData.mjs 自动生成，请勿手改。
// 数据源: hithink-finance（同花顺金融数据服务），数据日期: 2026-10-30 收盘
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
  "updatedAt": "2026-10-30 收盘",
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
    "value": "3,599.02",
    "change": "-52.41",
    "changePct": "-1.44%",
    "trend": [
      3730.92,
      3735.37,
      3713.03,
      3658.03,
      3690.48,
      3697.52,
      3648.3,
      3681.47,
      3651.43,
      3599.02
    ]
  },
  {
    "name": "沪深300",
    "symbol": "000300.SH",
    "region": "核心资产",
    "value": "3,985.50",
    "change": "-56.34",
    "changePct": "-1.39%",
    "trend": [
      4174.53,
      4152.11,
      4111.93,
      4036.3,
      4105.33,
      4103.54,
      4049.55,
      4083.87,
      4041.84,
      3985.5
    ]
  },
  {
    "name": "中证500",
    "symbol": "000905.SH",
    "region": "中盘成长",
    "value": "6,266.19",
    "change": "-187.53",
    "changePct": "-2.91%",
    "trend": [
      6800.66,
      6841.44,
      6840.56,
      6655.25,
      6814.44,
      6712.73,
      6511.42,
      6640.89,
      6453.72,
      6266.19
    ]
  },
  {
    "name": "中证1000",
    "symbol": "000852.SH",
    "region": "小盘弹性",
    "value": "6,161.23",
    "change": "-217.55",
    "changePct": "-3.41%",
    "trend": [
      6698.3,
      6766.9,
      6780.26,
      6578.27,
      6734.55,
      6630.78,
      6427.17,
      6578.1,
      6378.78,
      6161.23
    ]
  },
  {
    "name": "创业板指",
    "symbol": "399006.SZ",
    "region": "成长风格",
    "value": "2,413.63",
    "change": "-103.96",
    "changePct": "-4.13%",
    "trend": [
      2746.291,
      2739.203,
      2694.713,
      2576.901,
      2684.097,
      2638.231,
      2548.149,
      2634.76,
      2517.588,
      2413.629
    ]
  },
  {
    "name": "科创50",
    "symbol": "000688.SH",
    "region": "硬科技",
    "value": "1,160.84",
    "change": "-67.25",
    "changePct": "-5.48%",
    "trend": [
      1329.19,
      1342.42,
      1343.28,
      1305.87,
      1345.51,
      1315.5,
      1252.28,
      1282.93,
      1228.09,
      1160.84
    ]
  },
  {
    "name": "深证成指",
    "symbol": "399001.SZ",
    "region": "深市主板",
    "value": "10,833.78",
    "change": "-304.41",
    "changePct": "-2.73%",
    "trend": [
      11817.423,
      11801.29,
      11704.354,
      11357.32,
      11673.826,
      11534.379,
      11245.732,
      11473.18,
      11138.198,
      10833.784
    ]
  }
]

export const watchlist: WatchItem[] = [
  {
    "symbol": "510300",
    "name": "沪深300ETF",
    "category": "核心仓",
    "price": "4.065",
    "changePct": "-1.12%",
    "note": "用于观察大盘核心资产，不等同于买入建议。"
  },
  {
    "symbol": "510500",
    "name": "中证500ETF",
    "category": "中盘",
    "price": "6.305",
    "changePct": "-2.85%",
    "note": "适合作为中盘景气和市场广度的观察锚。"
  },
  {
    "symbol": "512100",
    "name": "中证1000ETF",
    "category": "小盘",
    "price": "2.507",
    "changePct": "-3.43%",
    "note": "波动弹性高，50w 账户要限制仓位拥挤。"
  },
  {
    "symbol": "588000",
    "name": "科创50ETF",
    "category": "硬科技",
    "price": "1.228",
    "changePct": "-5.03%",
    "note": "关注半导体、AI、创新药等成长估值修复。"
  },
  {
    "symbol": "159915",
    "name": "创业板ETF",
    "category": "成长",
    "price": "2.435",
    "changePct": "-3.94%",
    "note": "和风险偏好、美债利率、成长股情绪联动更强。"
  },
  {
    "symbol": "512480",
    "name": "半导体ETF",
    "category": "行业主题",
    "price": "0.720",
    "changePct": "-4.89%",
    "note": "主题弹性大，适合监控成交额和拥挤度。"
  },
  {
    "symbol": "515880",
    "name": "通信ETF",
    "category": "AI链条",
    "price": "0.432",
    "changePct": "-6.70%",
    "note": "关注算力、光模块、运营商资本开支。"
  },
  {
    "symbol": "512800",
    "name": "银行ETF",
    "category": "红利/防御",
    "price": "0.893",
    "changePct": "+0.68%",
    "note": "适合观察高股息、防御风格和利率预期。"
  },
  {
    "symbol": "513180",
    "name": "恒生科技ETF",
    "category": "港股弹性",
    "price": "0.468",
    "changePct": "-0.43%",
    "note": "受港股流动性、美元利率和互联网监管预期影响。"
  },
  {
    "symbol": "159941",
    "name": "纳指ETF",
    "category": "海外映射",
    "price": "1.649",
    "changePct": "-2.43%",
    "note": "不作为 A 股替代，只看全球科技风险偏好。"
  }
]

export const sectorPulse: SectorPulse[] = [
  {
    "name": "半导体",
    "changePct": "-5.44%",
    "breadth": "n/a",
    "note": "高弹性行业，重点看成交额放大是否持续。（指数代码 881121.TI）"
  },
  {
    "name": "AI算力",
    "changePct": "-4.90%",
    "breadth": "n/a",
    "note": "东数西算(算力)概念指数，主题强时容易拥挤。（指数代码 885957.TI）"
  },
  {
    "name": "高股息",
    "changePct": "+0.16%",
    "breadth": "n/a",
    "note": "高股息精选概念，防御风格，和利率、避险偏好相关。（指数代码 886072.TI）"
  },
  {
    "name": "消费复苏",
    "changePct": "+5.27%",
    "breadth": "n/a",
    "note": "以白酒行业指数代表消费链条景气验证。（指数代码 881273.TI）"
  },
  {
    "name": "新能源",
    "changePct": "-3.81%",
    "breadth": "n/a",
    "note": "光伏概念指数，供给出清和价格周期是核心变量。（指数代码 885531.TI）"
  },
  {
    "name": "券商",
    "changePct": "-1.72%",
    "breadth": "n/a",
    "note": "证券行业指数，常作为风险偏好和成交额弹性的放大器。（指数代码 881157.TI）"
  }
]

export const domesticFlows: DomesticFlow[] = [
  {
    "name": "两市成交额",
    "value": "1.67万亿",
    "state": "1.67万亿（沪+深）",
    "note": "沪市+深市成交额合计（hithink 指数快照口径），判断行情级别的第一层过滤器。"
  },
  {
    "name": "沪市成交额",
    "value": "7642亿",
    "state": "占两市 45.6%",
    "note": "沪市主板与科创板合计成交，观察权重与大盘活跃度。"
  },
  {
    "name": "深市成交额",
    "value": "9102亿",
    "state": "占两市 54.4%",
    "note": "深市主板与中小盘成交，观察成长与题材活跃度。"
  },
  {
    "name": "创业板成交额",
    "value": "4542亿",
    "state": "占深市 49.9%",
    "note": "成长风格成交占比，50w 账户重点关注 ETF 资金而不是短线热榜。"
  }
]

export const stockBreadth = {
  "tradeDate": "2026-10-30",
  "limitUpCount": 49,
  "limitBreakCount": 30,
  "hotStockCount": 30
}

export const limitUpTop: LimitUpItem[] = [
  {
    "ticker": "000596",
    "name": "古井贡酒",
    "price": "95.70",
    "pct": "+10.00%",
    "limitUpTime": "09:54",
    "boards": "首板",
    "reason": "中期分红+三季报+白酒",
    "sealMoney": "0.4亿"
  },
  {
    "ticker": "000568",
    "name": "泸州老窖",
    "price": "77.07",
    "pct": "+10.01%",
    "limitUpTime": "13:27",
    "boards": "首板",
    "reason": "业绩环增+高端白酒+库存去化",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "002636",
    "name": "金安国纪",
    "price": "63.68",
    "pct": "+10.00%",
    "limitUpTime": "10:03",
    "boards": "首板",
    "reason": "三季报高增+覆铜板+AI服务器",
    "sealMoney": "0.5亿"
  },
  {
    "ticker": "688045",
    "name": "必易微",
    "price": "61.87",
    "pct": "+20.00%",
    "limitUpTime": "09:32",
    "boards": "首板",
    "reason": "三季报扭亏+数字电源+机器人传感+模拟芯片",
    "sealMoney": "0.4亿"
  },
  {
    "ticker": "301520",
    "name": "万邦医药",
    "price": "60.06",
    "pct": "+20.00%",
    "limitUpTime": "13:00",
    "boards": "首板",
    "reason": "CRO+创新药+赛德盛并购+数智化",
    "sealMoney": "1.4亿"
  },
  {
    "ticker": "002432",
    "name": "九安医疗",
    "price": "56.24",
    "pct": "+9.99%",
    "limitUpTime": "09:33",
    "boards": "首板",
    "reason": "三季报大增+科创投资+糖尿病照护",
    "sealMoney": "1.2亿"
  },
  {
    "ticker": "301132",
    "name": "满坤科技",
    "price": "56.08",
    "pct": "+20.01%",
    "limitUpTime": "11:26",
    "boards": "首板",
    "reason": "三季报增长+PCB+服务器电源+光模块",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "603200",
    "name": "上海洗霸",
    "price": "51.72",
    "pct": "+10.00%",
    "limitUpTime": "13:07",
    "boards": "首板",
    "reason": "固态电池+数据中心液冷+水处理",
    "sealMoney": "0.5亿"
  },
  {
    "ticker": "605058",
    "name": "澳弘电子",
    "price": "50.26",
    "pct": "+10.00%",
    "limitUpTime": "10:18",
    "boards": "首板",
    "reason": "PCB+HDI板+AI服务器+三季报增长",
    "sealMoney": "0.5亿"
  },
  {
    "ticker": "603198",
    "name": "迎驾贡酒",
    "price": "44.47",
    "pct": "+9.99%",
    "limitUpTime": "09:44",
    "boards": "首板",
    "reason": "三季报增长+徽酒代表+中高档白酒",
    "sealMoney": "0.8亿"
  },
  {
    "ticker": "600113",
    "name": "浙江东日",
    "price": "24.62",
    "pct": "+10.01%",
    "limitUpTime": "13:02",
    "boards": "首板",
    "reason": "农批市场+大消费+温州国资",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "600285",
    "name": "羚锐制药",
    "price": "22.00",
    "pct": "+10.00%",
    "limitUpTime": "09:32",
    "boards": "首板",
    "reason": "三季报增长+中药+高股息",
    "sealMoney": "0.5亿"
  }
]

export const limitBreakTop: LimitBreakItem[] = [
  {
    "ticker": "688073",
    "name": "毕得医药",
    "price": "67.00",
    "pct": "+19.01%",
    "openTimes": 6,
    "turnover": "6亿"
  },
  {
    "ticker": "301015",
    "name": "百洋医药",
    "price": "26.08",
    "pct": "+14.84%",
    "openTimes": 2,
    "turnover": "9亿"
  },
  {
    "ticker": "300829",
    "name": "金丹科技",
    "price": "24.34",
    "pct": "+13.84%",
    "openTimes": 1,
    "turnover": "9亿"
  },
  {
    "ticker": "300739",
    "name": "明阳电路",
    "price": "22.20",
    "pct": "+11.50%",
    "openTimes": 2,
    "turnover": "9亿"
  },
  {
    "ticker": "300149",
    "name": "睿智医药",
    "price": "8.89",
    "pct": "+11.26%",
    "openTimes": 1,
    "turnover": "7亿"
  },
  {
    "ticker": "603278",
    "name": "大业股份",
    "price": "19.52",
    "pct": "+9.17%",
    "openTimes": 3,
    "turnover": "21亿"
  },
  {
    "ticker": "600688",
    "name": "上海石化",
    "price": "3.05",
    "pct": "+8.93%",
    "openTimes": 3,
    "turnover": "9亿"
  },
  {
    "ticker": "300980",
    "name": "祥源新材",
    "price": "15.60",
    "pct": "+7.73%",
    "openTimes": 1,
    "turnover": "6亿"
  }
]

export const ladderDate: string | null = "2026-10-30"

export const ladderBoards: LadderBoard[] = [
  {
    "label": "2板",
    "count": 6,
    "names": [
      "东方海洋",
      "传智教育",
      "巴比食品"
    ]
  },
  {
    "label": "3板",
    "count": 2,
    "names": [
      "上海沪工",
      "澳洋健康"
    ]
  },
  {
    "label": "5板",
    "count": 1,
    "names": [
      "青岛食品"
    ]
  }
]

export const hotStocks: RankItem[] = [
  {
    "rank": 1,
    "ticker": "300502",
    "name": "新易盛",
    "heat": "5656205",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "300308",
    "name": "中际旭创",
    "heat": "5097379",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "000678",
    "name": "襄阳轴承",
    "heat": "4651246",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "603278",
    "name": "大业股份",
    "heat": "4428500",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "688836",
    "name": "宇树科技",
    "heat": "4378661",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "002724",
    "name": "海洋王",
    "heat": "3645648",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "300394",
    "name": "天孚通信",
    "heat": "2962334",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "002242",
    "name": "九阳股份",
    "heat": "2642760",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "600825",
    "name": "新华传媒",
    "heat": "2606551",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "688825",
    "name": "长鑫科技",
    "heat": "2541836",
    "rankChange": 0
  }
]

export const skyrockets: RankItem[] = [
  {
    "rank": 1,
    "ticker": "688825",
    "name": "长鑫科技",
    "heat": "37584.2",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "002636",
    "name": "金安国纪",
    "heat": "34764.2",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "603278",
    "name": "大业股份",
    "heat": "28818.8",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "600519",
    "name": "贵州茅台",
    "heat": "24947.3",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "000568",
    "name": "泸州老窖",
    "heat": "23438.9",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "002724",
    "name": "海洋王",
    "heat": "20664.0",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "000995",
    "name": "皇台酒业",
    "heat": "18738.5",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "301520",
    "name": "万邦医药",
    "heat": "15425.5",
    "rankChange": 1
  },
  {
    "rank": 9,
    "ticker": "600721",
    "name": "百花医药",
    "heat": "14524.9",
    "rankChange": 5
  },
  {
    "rank": 10,
    "ticker": "002129",
    "name": "TCL中环",
    "heat": "13967.1",
    "rankChange": 12
  }
]

export const dragonTigerTop: DragonTigerItem[] = [
  {
    "rank": 1,
    "ticker": "000678",
    "name": "襄阳轴承",
    "pct": "+6.47%",
    "netValue": "1.57亿",
    "orgNet": "1.06亿",
    "hotMoneyNet": "-0.79亿",
    "concepts": [
      "股权转让(并购重组)",
      "减速器",
      "农机"
    ]
  },
  {
    "rank": 2,
    "ticker": "300394",
    "name": "天孚通信",
    "pct": "-19.77%",
    "netValue": "-5.11亿",
    "orgNet": "-4.82亿",
    "hotMoneyNet": "—",
    "concepts": [
      "共封装光学(CPO)",
      "光纤概念",
      "先进封装"
    ]
  },
  {
    "rank": 3,
    "ticker": "000530",
    "name": "冰山冷热",
    "pct": "+10.03%",
    "netValue": "1.51亿",
    "orgNet": "0.10亿",
    "hotMoneyNet": "-0.07亿",
    "concepts": [
      "冰雪产业",
      "无人零售",
      "中俄贸易概念"
    ]
  },
  {
    "rank": 8,
    "ticker": "601086",
    "name": "国芳集团",
    "pct": "+3.42%",
    "netValue": "-0.12亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.06亿",
    "concepts": [
      "参股券商",
      "西部大开发",
      "IP经济(谷子经济)"
    ]
  },
  {
    "rank": 11,
    "ticker": "600838",
    "name": "上海九百",
    "pct": "-2.57%",
    "netValue": "-0.21亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.36亿",
    "concepts": [
      "国企改革",
      "参股券商",
      "物业管理"
    ]
  },
  {
    "rank": 12,
    "ticker": "002249",
    "name": "大洋电机",
    "pct": "+3.24%",
    "netValue": "0.10亿",
    "orgNet": "0.05亿",
    "hotMoneyNet": "0.09亿",
    "concepts": [
      "燃料电池",
      "长安汽车概念",
      "人形机器人"
    ]
  },
  {
    "rank": 13,
    "ticker": "002708",
    "name": "光洋股份",
    "pct": "+9.98%",
    "netValue": "-0.03亿",
    "orgNet": "0.13亿",
    "hotMoneyNet": "1.21亿",
    "concepts": [
      "减速器",
      "长安汽车概念",
      "人形机器人"
    ]
  },
  {
    "rank": 14,
    "ticker": "603278",
    "name": "大业股份",
    "pct": "-0.22%",
    "netValue": "0.33亿",
    "orgNet": "—",
    "hotMoneyNet": "0.36亿",
    "concepts": [
      "风电",
      "人形机器人",
      "高端装备"
    ]
  },
  {
    "rank": 15,
    "ticker": "002384",
    "name": "东山精密",
    "pct": "-10.00%",
    "netValue": "-1.29亿",
    "orgNet": "-4.35亿",
    "hotMoneyNet": "-1.35亿",
    "concepts": [
      "同花顺果指数",
      "共封装光学(CPO)",
      "光纤概念"
    ]
  },
  {
    "rank": 16,
    "ticker": "002696",
    "name": "百洋股份",
    "pct": "+4.93%",
    "netValue": "-1.06亿",
    "orgNet": "-0.58亿",
    "hotMoneyNet": "0.08亿",
    "concepts": [
      "预制菜",
      "垃圾分类",
      "乡村振兴"
    ]
  }
]
