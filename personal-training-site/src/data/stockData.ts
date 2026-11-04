// 本文件由 scripts/generateStockData.mjs 自动生成，请勿手改。
// 数据源: hithink-finance（同花顺金融数据服务），数据日期: 2026-11-02 收盘
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
  openTimes: number | string // 数据缺失时生成脚本写入 '—'
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
  "updatedAt": "2026-11-02 收盘",
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
    "value": "3,638.03",
    "change": "+39.01",
    "changePct": "+1.08%",
    "trend": [
      3735.37,
      3713.03,
      3658.03,
      3690.48,
      3697.52,
      3648.3,
      3681.47,
      3651.43,
      3599.02,
      3638.03
    ]
  },
  {
    "name": "沪深300",
    "symbol": "000300.SH",
    "region": "核心资产",
    "value": "4,016.92",
    "change": "+31.42",
    "changePct": "+0.79%",
    "trend": [
      4152.11,
      4111.93,
      4036.3,
      4105.33,
      4103.54,
      4049.55,
      4083.87,
      4041.84,
      3985.5,
      4016.92
    ]
  },
  {
    "name": "中证500",
    "symbol": "000905.SH",
    "region": "中盘成长",
    "value": "6,420.23",
    "change": "+154.04",
    "changePct": "+2.46%",
    "trend": [
      6841.44,
      6840.56,
      6655.25,
      6814.44,
      6712.73,
      6511.42,
      6640.89,
      6453.72,
      6266.19,
      6420.23
    ]
  },
  {
    "name": "中证1000",
    "symbol": "000852.SH",
    "region": "小盘弹性",
    "value": "6,329.34",
    "change": "+168.11",
    "changePct": "+2.73%",
    "trend": [
      6766.9,
      6780.26,
      6578.27,
      6734.55,
      6630.78,
      6427.17,
      6578.1,
      6378.78,
      6161.23,
      6329.34
    ]
  },
  {
    "name": "创业板指",
    "symbol": "399006.SZ",
    "region": "成长风格",
    "value": "2,458.70",
    "change": "+45.07",
    "changePct": "+1.87%",
    "trend": [
      2739.203,
      2694.713,
      2576.901,
      2684.097,
      2638.231,
      2548.149,
      2634.76,
      2517.588,
      2413.629,
      2458.698
    ]
  },
  {
    "name": "科创50",
    "symbol": "000688.SH",
    "region": "硬科技",
    "value": "1,196.94",
    "change": "+36.10",
    "changePct": "+3.11%",
    "trend": [
      1342.42,
      1343.28,
      1305.87,
      1345.51,
      1315.5,
      1252.28,
      1282.93,
      1228.09,
      1160.84,
      1196.94
    ]
  },
  {
    "name": "深证成指",
    "symbol": "399001.SZ",
    "region": "深市主板",
    "value": "11,010.68",
    "change": "+176.89",
    "changePct": "+1.63%",
    "trend": [
      11801.29,
      11704.354,
      11357.32,
      11673.826,
      11534.379,
      11245.732,
      11473.18,
      11138.198,
      10833.784,
      11010.677
    ]
  }
]

export const watchlist: WatchItem[] = [
  {
    "symbol": "510300",
    "name": "沪深300ETF",
    "category": "核心仓",
    "price": "4.085",
    "changePct": "+0.49%",
    "note": "用于观察大盘核心资产，不等同于买入建议。"
  },
  {
    "symbol": "510500",
    "name": "中证500ETF",
    "category": "中盘",
    "price": "6.456",
    "changePct": "+2.39%",
    "note": "适合作为中盘景气和市场广度的观察锚。"
  },
  {
    "symbol": "512100",
    "name": "中证1000ETF",
    "category": "小盘",
    "price": "2.574",
    "changePct": "+2.67%",
    "note": "波动弹性高，50w 账户要限制仓位拥挤。"
  },
  {
    "symbol": "588000",
    "name": "科创50ETF",
    "category": "硬科技",
    "price": "1.260",
    "changePct": "+2.61%",
    "note": "关注半导体、AI、创新药等成长估值修复。"
  },
  {
    "symbol": "159915",
    "name": "创业板ETF",
    "category": "成长",
    "price": "2.473",
    "changePct": "+1.56%",
    "note": "和风险偏好、美债利率、成长股情绪联动更强。"
  },
  {
    "symbol": "512480",
    "name": "半导体ETF",
    "category": "行业主题",
    "price": "0.738",
    "changePct": "+2.50%",
    "note": "主题弹性大，适合监控成交额和拥挤度。"
  },
  {
    "symbol": "515880",
    "name": "通信ETF",
    "category": "AI链条",
    "price": "0.435",
    "changePct": "+0.69%",
    "note": "关注算力、光模块、运营商资本开支。"
  },
  {
    "symbol": "512800",
    "name": "银行ETF",
    "category": "红利/防御",
    "price": "0.885",
    "changePct": "-0.90%",
    "note": "适合观察高股息、防御风格和利率预期。"
  },
  {
    "symbol": "513180",
    "name": "恒生科技ETF",
    "category": "港股弹性",
    "price": "0.479",
    "changePct": "+2.35%",
    "note": "受港股流动性、美元利率和互联网监管预期影响。"
  },
  {
    "symbol": "159941",
    "name": "纳指ETF",
    "category": "海外映射",
    "price": "1.653",
    "changePct": "+0.24%",
    "note": "不作为 A 股替代，只看全球科技风险偏好。"
  }
]

export const sectorPulse: SectorPulse[] = [
  {
    "name": "半导体",
    "changePct": "+2.76%",
    "breadth": "n/a",
    "note": "高弹性行业，重点看成交额放大是否持续。（指数代码 881121.TI）"
  },
  {
    "name": "AI算力",
    "changePct": "+3.38%",
    "breadth": "n/a",
    "note": "东数西算(算力)概念指数，主题强时容易拥挤。（指数代码 885957.TI）"
  },
  {
    "name": "高股息",
    "changePct": "+1.12%",
    "breadth": "n/a",
    "note": "高股息精选概念，防御风格，和利率、避险偏好相关。（指数代码 886072.TI）"
  },
  {
    "name": "消费复苏",
    "changePct": "+4.95%",
    "breadth": "n/a",
    "note": "以白酒行业指数代表消费链条景气验证。（指数代码 881273.TI）"
  },
  {
    "name": "新能源",
    "changePct": "+2.20%",
    "breadth": "n/a",
    "note": "光伏概念指数，供给出清和价格周期是核心变量。（指数代码 885531.TI）"
  },
  {
    "name": "券商",
    "changePct": "+4.48%",
    "breadth": "n/a",
    "note": "证券行业指数，常作为风险偏好和成交额弹性的放大器。（指数代码 881157.TI）"
  }
]

export const domesticFlows: DomesticFlow[] = [
  {
    "name": "两市成交额",
    "value": "1.78万亿",
    "state": "1.78万亿（沪+深）",
    "note": "沪市+深市成交额合计（hithink 指数快照口径），判断行情级别的第一层过滤器。"
  },
  {
    "name": "沪市成交额",
    "value": "8475亿",
    "state": "占两市 47.5%",
    "note": "沪市主板与科创板合计成交，观察权重与大盘活跃度。"
  },
  {
    "name": "深市成交额",
    "value": "9362亿",
    "state": "占两市 52.5%",
    "note": "深市主板与中小盘成交，观察成长与题材活跃度。"
  },
  {
    "name": "创业板成交额",
    "value": "4687亿",
    "state": "占深市 50.1%",
    "note": "成长风格成交占比，50w 账户重点关注 ETF 资金而不是短线热榜。"
  }
]

export const stockBreadth = {
  "tradeDate": "2026-11-02",
  "limitUpCount": 131,
  "limitBreakCount": 28,
  "hotStockCount": 30
}

export const limitUpTop: LimitUpItem[] = [
  {
    "ticker": "301218",
    "name": "华是科技",
    "price": "81.44",
    "pct": "+19.99%",
    "limitUpTime": "11:22",
    "boards": "首板",
    "reason": "AI短剧+机器人投资+智慧城市",
    "sealMoney": "1.3亿"
  },
  {
    "ticker": "301326",
    "name": "捷邦科技",
    "price": "75.84",
    "pct": "+20.00%",
    "limitUpTime": "13:37",
    "boards": "首板",
    "reason": "液冷散热+均热板部件+北美大客户",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "603713",
    "name": "密尔克卫",
    "price": "72.69",
    "pct": "+10.00%",
    "limitUpTime": "13:58",
    "boards": "首板",
    "reason": "半导体物流+化工供应链+三季报增长",
    "sealMoney": "0.2亿"
  },
  {
    "ticker": "605288",
    "name": "凯迪股份",
    "price": "64.57",
    "pct": "+10.00%",
    "limitUpTime": "11:18",
    "boards": "首板",
    "reason": "具身机器人送样+线性驱动+汽车零部件",
    "sealMoney": "0.0亿"
  },
  {
    "ticker": "600259",
    "name": "中稀有色",
    "price": "57.97",
    "pct": "+10.00%",
    "limitUpTime": "09:25",
    "boards": "首板",
    "reason": "三季报大增+中重稀土+磁材",
    "sealMoney": "0.8亿"
  },
  {
    "ticker": "002827",
    "name": "高争民爆",
    "price": "56.98",
    "pct": "+10.00%",
    "limitUpTime": "09:25",
    "boards": "首板",
    "reason": "重组复牌+拟注铜锂矿+民爆+西藏国资",
    "sealMoney": "8.9亿"
  },
  {
    "ticker": "002929",
    "name": "润建股份",
    "price": "54.54",
    "pct": "+10.00%",
    "limitUpTime": "10:09",
    "boards": "首板",
    "reason": "算力网络+词元出海+净利大增",
    "sealMoney": "1.2亿"
  },
  {
    "ticker": "688376",
    "name": "美埃科技",
    "price": "50.76",
    "pct": "+20.00%",
    "limitUpTime": "09:41",
    "boards": "首板",
    "reason": "三季报高增+洁净室设备+海外扩产",
    "sealMoney": "0.6亿"
  },
  {
    "ticker": "605287",
    "name": "德才股份",
    "price": "47.05",
    "pct": "+10.01%",
    "limitUpTime": "11:04",
    "boards": "首板",
    "reason": "AI漫剧+智能体+建筑装饰",
    "sealMoney": "0.4亿"
  },
  {
    "ticker": "603171",
    "name": "税友股份",
    "price": "45.95",
    "pct": "+10.01%",
    "limitUpTime": "11:13",
    "boards": "首板",
    "reason": "AI智能体+财税数字化+三季报增长",
    "sealMoney": "0.6亿"
  },
  {
    "ticker": "300508",
    "name": "维宏股份",
    "price": "43.92",
    "pct": "+20.00%",
    "limitUpTime": "13:31",
    "boards": "首板",
    "reason": "灵巧手电机+伺服系统+数控系统",
    "sealMoney": "0.2亿"
  },
  {
    "ticker": "688596",
    "name": "正帆科技",
    "price": "42.62",
    "pct": "+19.99%",
    "limitUpTime": "11:22",
    "boards": "首板",
    "reason": "三季报增长+新签订单+半导体零部件",
    "sealMoney": "0.4亿"
  }
]

export const limitBreakTop: LimitBreakItem[] = [
  {
    "ticker": "300872",
    "name": "天阳科技",
    "price": "15.90",
    "pct": "+15.89%",
    "openTimes": "—",
    "turnover": "10亿"
  },
  {
    "ticker": "688004",
    "name": "博汇科技",
    "price": "40.90",
    "pct": "+10.54%",
    "openTimes": "—",
    "turnover": "7亿"
  },
  {
    "ticker": "300637",
    "name": "扬帆新材",
    "price": "9.99",
    "pct": "+10.39%",
    "openTimes": "—",
    "turnover": "3亿"
  },
  {
    "ticker": "000917",
    "name": "电广传媒",
    "price": "6.59",
    "pct": "+10.02%",
    "openTimes": "—",
    "turnover": "4亿"
  },
  {
    "ticker": "300892",
    "name": "品渥食品",
    "price": "23.44",
    "pct": "+9.79%",
    "openTimes": "—",
    "turnover": "2亿"
  },
  {
    "ticker": "002774",
    "name": "快意电梯",
    "price": "14.71",
    "pct": "+9.37%",
    "openTimes": "—",
    "turnover": "2亿"
  },
  {
    "ticker": "603927",
    "name": "中科软",
    "price": "14.08",
    "pct": "+9.23%",
    "openTimes": "—",
    "turnover": "4亿"
  },
  {
    "ticker": "603179",
    "name": "新泉股份",
    "price": "45.00",
    "pct": "+9.20%",
    "openTimes": "—",
    "turnover": "20亿"
  }
]

export const ladderDate: string | null = "2026-11-02"

export const ladderBoards: LadderBoard[] = [
  {
    "label": "2板",
    "count": 6,
    "names": [
      "合百集团",
      "地素时尚",
      "沈阳机床"
    ]
  },
  {
    "label": "3板",
    "count": 3,
    "names": [
      "东方海洋",
      "桂林三金",
      "阳光照明"
    ]
  },
  {
    "label": "4板",
    "count": 1,
    "names": [
      "澳洋健康"
    ]
  },
  {
    "label": "6板",
    "count": 1,
    "names": [
      "青岛食品"
    ]
  }
]

export const hotStocks: RankItem[] = [
  {
    "rank": 1,
    "ticker": "000678",
    "name": "襄阳轴承",
    "heat": "4803824",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "688836",
    "name": "宇树科技",
    "heat": "4575667",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "002384",
    "name": "东山精密",
    "heat": "3839125",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "300308",
    "name": "中际旭创",
    "heat": "3306619",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "600825",
    "name": "新华传媒",
    "heat": "3027589",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "002242",
    "name": "九阳股份",
    "heat": "2990188",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "603278",
    "name": "大业股份",
    "heat": "2821715",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "002172",
    "name": "澳洋健康",
    "heat": "2819697",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "002086",
    "name": "东方海洋",
    "heat": "2734960",
    "rankChange": 1
  },
  {
    "rank": 10,
    "ticker": "300502",
    "name": "新易盛",
    "heat": "2733038",
    "rankChange": -1
  }
]

export const skyrockets: RankItem[] = [
  {
    "rank": 1,
    "ticker": "600715",
    "name": "文投控股",
    "heat": "10399.0",
    "rankChange": 1
  },
  {
    "rank": 2,
    "ticker": "000678",
    "name": "襄阳轴承",
    "heat": "7415.4",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "300413",
    "name": "芒果超媒",
    "heat": "6681.0",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "000530",
    "name": "冰山冷热",
    "heat": "4838.3",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "300182",
    "name": "捷成股份",
    "heat": "4782.1",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "600892",
    "name": "大晟文化",
    "heat": "4563.5",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "603533",
    "name": "掌阅科技",
    "heat": "4301.5",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "002029",
    "name": "七匹狼",
    "heat": "4024.5",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "001219",
    "name": "青岛食品",
    "heat": "3958.3",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "605577",
    "name": "龙版传媒",
    "heat": "3896.3",
    "rankChange": 0
  }
]

export const dragonTigerTop: DragonTigerItem[] = [
  {
    "rank": 1,
    "ticker": "000678",
    "name": "襄阳轴承",
    "pct": "+10.01%",
    "netValue": "1.29亿",
    "orgNet": "-0.12亿",
    "hotMoneyNet": "—",
    "concepts": [
      "股权转让(并购重组)",
      "减速器",
      "农机"
    ]
  },
  {
    "rank": 2,
    "ticker": "002172",
    "name": "澳洋健康",
    "pct": "+9.98%",
    "netValue": "-0.09亿",
    "orgNet": "-0.22亿",
    "hotMoneyNet": "0.02亿",
    "concepts": [
      "高压氧舱",
      "民营医院",
      "毛发医疗"
    ]
  },
  {
    "rank": 8,
    "ticker": "001219",
    "name": "青岛食品",
    "pct": "+9.98%",
    "netValue": "-0.29亿",
    "orgNet": "0.02亿",
    "hotMoneyNet": "—",
    "concepts": [
      "乳业",
      "网红经济",
      "中韩自贸区"
    ]
  },
  {
    "rank": 9,
    "ticker": "000530",
    "name": "冰山冷热",
    "pct": "+9.97%",
    "netValue": "1.50亿",
    "orgNet": "0.23亿",
    "hotMoneyNet": "-0.21亿",
    "concepts": [
      "冰雪产业",
      "中俄贸易概念",
      "无人零售"
    ]
  },
  {
    "rank": 10,
    "ticker": "002724",
    "name": "海洋王",
    "pct": "-9.99%",
    "netValue": "0.09亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.01亿",
    "concepts": [
      "军工",
      "无人机",
      "智慧灯杆"
    ]
  },
  {
    "rank": 12,
    "ticker": "603703",
    "name": "盛洋科技",
    "pct": "-1.76%",
    "netValue": "-1.16亿",
    "orgNet": "—",
    "hotMoneyNet": "0.03亿",
    "concepts": [
      "卫星导航",
      "铜缆高速连接",
      "光纤概念"
    ]
  },
  {
    "rank": 14,
    "ticker": "600838",
    "name": "上海九百",
    "pct": "-4.24%",
    "netValue": "0.42亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.20亿",
    "concepts": [
      "国企改革",
      "参股券商",
      "物业管理"
    ]
  },
  {
    "rank": 15,
    "ticker": "300085",
    "name": "银之杰",
    "pct": "+20.02%",
    "netValue": "2.45亿",
    "orgNet": "0.03亿",
    "hotMoneyNet": "0.66亿",
    "concepts": [
      "数字货币",
      "富媒体",
      "互联网金融"
    ]
  },
  {
    "rank": 16,
    "ticker": "603278",
    "name": "大业股份",
    "pct": "-9.99%",
    "netValue": "-0.31亿",
    "orgNet": "—",
    "hotMoneyNet": "0.12亿",
    "concepts": [
      "风电",
      "人形机器人",
      "高端装备"
    ]
  },
  {
    "rank": 17,
    "ticker": "603131",
    "name": "上海沪工",
    "pct": "-1.42%",
    "netValue": "0.04亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.27亿",
    "concepts": [
      "机器人概念",
      "商业航天",
      "工业母机"
    ]
  }
]
