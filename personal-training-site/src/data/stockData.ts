// 本文件由 scripts/generateStockData.mjs 自动生成，请勿手改。
// 数据源: hithink-finance（同花顺金融数据服务），数据日期: 2026-10-29 收盘
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
  "updatedAt": "2026-10-29 收盘",
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
    "value": "3,651.43",
    "change": "-30.04",
    "changePct": "-0.82%",
    "trend": [
      3716.28,
      3730.92,
      3735.37,
      3713.03,
      3658.03,
      3690.48,
      3697.52,
      3648.3,
      3681.47,
      3651.43
    ]
  },
  {
    "name": "沪深300",
    "symbol": "000300.SH",
    "region": "核心资产",
    "value": "4,041.84",
    "change": "-42.03",
    "changePct": "-1.03%",
    "trend": [
      4170.61,
      4174.53,
      4152.11,
      4111.93,
      4036.3,
      4105.33,
      4103.54,
      4049.55,
      4083.87,
      4041.84
    ]
  },
  {
    "name": "中证500",
    "symbol": "000905.SH",
    "region": "中盘成长",
    "value": "6,453.72",
    "change": "-187.17",
    "changePct": "-2.82%",
    "trend": [
      6772.75,
      6800.66,
      6841.44,
      6840.56,
      6655.25,
      6814.44,
      6712.73,
      6511.42,
      6640.89,
      6453.72
    ]
  },
  {
    "name": "中证1000",
    "symbol": "000852.SH",
    "region": "小盘弹性",
    "value": "6,378.78",
    "change": "-199.32",
    "changePct": "-3.03%",
    "trend": [
      6681.94,
      6698.3,
      6766.9,
      6780.26,
      6578.27,
      6734.55,
      6630.78,
      6427.17,
      6578.1,
      6378.78
    ]
  },
  {
    "name": "创业板指",
    "symbol": "399006.SZ",
    "region": "成长风格",
    "value": "2,517.59",
    "change": "-117.17",
    "changePct": "-4.45%",
    "trend": [
      2772.384,
      2746.291,
      2739.203,
      2694.713,
      2576.901,
      2684.097,
      2638.231,
      2548.149,
      2634.76,
      2517.588
    ]
  },
  {
    "name": "科创50",
    "symbol": "000688.SH",
    "region": "硬科技",
    "value": "1,228.09",
    "change": "-54.84",
    "changePct": "-4.27%",
    "trend": [
      1358.65,
      1329.19,
      1342.42,
      1343.28,
      1305.87,
      1345.51,
      1315.5,
      1252.28,
      1282.93,
      1228.09
    ]
  },
  {
    "name": "深证成指",
    "symbol": "399001.SZ",
    "region": "深市主板",
    "value": "11,138.20",
    "change": "-334.98",
    "changePct": "-2.92%",
    "trend": [
      11802.459,
      11817.423,
      11801.29,
      11704.354,
      11357.32,
      11673.826,
      11534.379,
      11245.732,
      11473.18,
      11138.198
    ]
  }
]

export const watchlist: WatchItem[] = [
  {
    "symbol": "510300",
    "name": "沪深300ETF",
    "category": "核心仓",
    "price": "4.111",
    "changePct": "-0.99%",
    "note": "用于观察大盘核心资产，不等同于买入建议。"
  },
  {
    "symbol": "510500",
    "name": "中证500ETF",
    "category": "中盘",
    "price": "6.490",
    "changePct": "-2.73%",
    "note": "适合作为中盘景气和市场广度的观察锚。"
  },
  {
    "symbol": "512100",
    "name": "中证1000ETF",
    "category": "小盘",
    "price": "2.596",
    "changePct": "-2.95%",
    "note": "波动弹性高，50w 账户要限制仓位拥挤。"
  },
  {
    "symbol": "588000",
    "name": "科创50ETF",
    "category": "硬科技",
    "price": "1.293",
    "changePct": "-4.51%",
    "note": "关注半导体、AI、创新药等成长估值修复。"
  },
  {
    "symbol": "159915",
    "name": "创业板ETF",
    "category": "成长",
    "price": "2.535",
    "changePct": "-4.30%",
    "note": "和风险偏好、美债利率、成长股情绪联动更强。"
  },
  {
    "symbol": "512480",
    "name": "半导体ETF",
    "category": "行业主题",
    "price": "0.757",
    "changePct": "-5.02%",
    "note": "主题弹性大，适合监控成交额和拥挤度。"
  },
  {
    "symbol": "515880",
    "name": "通信ETF",
    "category": "AI链条",
    "price": "0.463",
    "changePct": "-7.95%",
    "note": "关注算力、光模块、运营商资本开支。"
  },
  {
    "symbol": "512800",
    "name": "银行ETF",
    "category": "红利/防御",
    "price": "0.887",
    "changePct": "+1.72%",
    "note": "适合观察高股息、防御风格和利率预期。"
  },
  {
    "symbol": "513180",
    "name": "恒生科技ETF",
    "category": "港股弹性",
    "price": "0.470",
    "changePct": "-2.08%",
    "note": "受港股流动性、美元利率和互联网监管预期影响。"
  },
  {
    "symbol": "159941",
    "name": "纳指ETF",
    "category": "海外映射",
    "price": "1.690",
    "changePct": "-1.05%",
    "note": "不作为 A 股替代，只看全球科技风险偏好。"
  }
]

export const sectorPulse: SectorPulse[] = [
  {
    "name": "半导体",
    "changePct": "-5.54%",
    "breadth": "n/a",
    "note": "高弹性行业，重点看成交额放大是否持续。（指数代码 881121.TI）"
  },
  {
    "name": "AI算力",
    "changePct": "-3.73%",
    "breadth": "n/a",
    "note": "东数西算(算力)概念指数，主题强时容易拥挤。（指数代码 885957.TI）"
  },
  {
    "name": "高股息",
    "changePct": "+0.28%",
    "breadth": "n/a",
    "note": "高股息精选概念，防御风格，和利率、避险偏好相关。（指数代码 886072.TI）"
  },
  {
    "name": "消费复苏",
    "changePct": "+0.04%",
    "breadth": "n/a",
    "note": "以白酒行业指数代表消费链条景气验证。（指数代码 881273.TI）"
  },
  {
    "name": "新能源",
    "changePct": "-3.08%",
    "breadth": "n/a",
    "note": "光伏概念指数，供给出清和价格周期是核心变量。（指数代码 885531.TI）"
  },
  {
    "name": "券商",
    "changePct": "-2.13%",
    "breadth": "n/a",
    "note": "证券行业指数，常作为风险偏好和成交额弹性的放大器。（指数代码 881157.TI）"
  }
]

export const domesticFlows: DomesticFlow[] = [
  {
    "name": "两市成交额",
    "value": "1.56万亿",
    "state": "1.56万亿（沪+深）",
    "note": "沪市+深市成交额合计（hithink 指数快照口径），判断行情级别的第一层过滤器。"
  },
  {
    "name": "沪市成交额",
    "value": "7156亿",
    "state": "占两市 46.0%",
    "note": "沪市主板与科创板合计成交，观察权重与大盘活跃度。"
  },
  {
    "name": "深市成交额",
    "value": "8409亿",
    "state": "占两市 54.0%",
    "note": "深市主板与中小盘成交，观察成长与题材活跃度。"
  },
  {
    "name": "创业板成交额",
    "value": "4214亿",
    "state": "占深市 50.1%",
    "note": "成长风格成交占比，50w 账户重点关注 ETF 资金而不是短线热榜。"
  }
]

export const stockBreadth = {
  "tradeDate": "2026-10-29",
  "limitUpCount": 39,
  "limitBreakCount": 25,
  "hotStockCount": 30
}

export const limitUpTop: LimitUpItem[] = [
  {
    "ticker": "600118",
    "name": "中国卫星",
    "price": "55.90",
    "pct": "+10.00%",
    "limitUpTime": "10:24",
    "boards": "首板",
    "reason": "三季报增长+卫星制造+商业航天",
    "sealMoney": "0.8亿"
  },
  {
    "ticker": "002865",
    "name": "钧达股份",
    "price": "38.62",
    "pct": "+10.00%",
    "limitUpTime": "09:58",
    "boards": "首板",
    "reason": "商业航天+光伏电池+土耳其产能",
    "sealMoney": "1.1亿"
  },
  {
    "ticker": "301079",
    "name": "邵阳液压",
    "price": "34.00",
    "pct": "+20.01%",
    "limitUpTime": "09:58",
    "boards": "首板",
    "reason": "航天+液压主业+三季报增长+生肖炒作",
    "sealMoney": "1.2亿"
  },
  {
    "ticker": "001225",
    "name": "和泰机电",
    "price": "32.92",
    "pct": "+9.99%",
    "limitUpTime": "09:45",
    "boards": "首板",
    "reason": "物料输送设备+输送链+海外拓展",
    "sealMoney": "0.0亿"
  },
  {
    "ticker": "002149",
    "name": "西部材料",
    "price": "32.31",
    "pct": "+10.01%",
    "limitUpTime": "10:54",
    "boards": "首板",
    "reason": "商业航天+航天铌合金+稀贵金属+超导",
    "sealMoney": "1.0亿"
  },
  {
    "ticker": "002943",
    "name": "宇晶股份",
    "price": "27.62",
    "pct": "+10.00%",
    "limitUpTime": "13:00",
    "boards": "2连板",
    "reason": "机器人+碳化硅设备+磷化铟设备",
    "sealMoney": "0.8亿"
  },
  {
    "ticker": "605598",
    "name": "上海港湾",
    "price": "24.90",
    "pct": "+9.98%",
    "limitUpTime": "10:02",
    "boards": "首板",
    "reason": "商业航天+卫星能源+钙钛矿电池",
    "sealMoney": "0.5亿"
  },
  {
    "ticker": "605179",
    "name": "一鸣食品",
    "price": "23.77",
    "pct": "+10.00%",
    "limitUpTime": "10:12",
    "boards": "首板",
    "reason": "低温乳品+烘焙食品+米制鲜食",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "002708",
    "name": "光洋股份",
    "price": "20.83",
    "pct": "+9.98%",
    "limitUpTime": "09:25",
    "boards": "4连板",
    "reason": "人形机器人+PCB+汽车零部件+“羊”字辈",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "603382",
    "name": "海阳科技",
    "price": "19.87",
    "pct": "+10.02%",
    "limitUpTime": "10:00",
    "boards": "首板",
    "reason": "尼龙6+帘子布+涤纶工业丝+“羊”字辈",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "605338",
    "name": "巴比食品",
    "price": "18.98",
    "pct": "+10.03%",
    "limitUpTime": "09:59",
    "boards": "首板",
    "reason": "三季报净利增+中式面点+中期分红+小笼包扩张",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "001219",
    "name": "青岛食品",
    "price": "18.13",
    "pct": "+10.01%",
    "limitUpTime": "09:25",
    "boards": "4连板",
    "reason": "股权转让+三季报增长+饼干食品",
    "sealMoney": "1.7亿"
  }
]

export const limitBreakTop: LimitBreakItem[] = [
  {
    "ticker": "301232",
    "name": "飞沃科技",
    "price": "80.30",
    "pct": "+17.09%",
    "openTimes": 2,
    "turnover": "14亿"
  },
  {
    "ticker": "300177",
    "name": "中海达",
    "price": "7.16",
    "pct": "+14.19%",
    "openTimes": 1,
    "turnover": "9亿"
  },
  {
    "ticker": "603279",
    "name": "景津装备",
    "price": "12.49",
    "pct": "+9.27%",
    "openTimes": 10,
    "turnover": "6亿"
  },
  {
    "ticker": "600728",
    "name": "佳都科技",
    "price": "4.95",
    "pct": "+8.55%",
    "openTimes": 1,
    "turnover": "7亿"
  },
  {
    "ticker": "000678",
    "name": "襄阳轴承",
    "price": "18.75",
    "pct": "+6.47%",
    "openTimes": 31,
    "turnover": "37亿"
  },
  {
    "ticker": "002164",
    "name": "宁波东力",
    "price": "17.99",
    "pct": "+6.45%",
    "openTimes": 3,
    "turnover": "20亿"
  },
  {
    "ticker": "605118",
    "name": "力鼎光电",
    "price": "32.79",
    "pct": "+6.39%",
    "openTimes": 4,
    "turnover": "5亿"
  },
  {
    "ticker": "001379",
    "name": "腾达科技",
    "price": "15.83",
    "pct": "+6.38%",
    "openTimes": 2,
    "turnover": "1亿"
  }
]

export const ladderDate: string | null = "2026-10-29"

export const ladderBoards: LadderBoard[] = [
  {
    "label": "2板",
    "count": 6,
    "names": [
      "上海沪工",
      "宇晶股份",
      "实丰文化"
    ]
  },
  {
    "label": "3板",
    "count": 2,
    "names": [
      "东贝集团",
      "文投控股"
    ]
  },
  {
    "label": "4板",
    "count": 2,
    "names": [
      "光洋股份",
      "青岛食品"
    ]
  }
]

export const hotStocks: RankItem[] = [
  {
    "rank": 1,
    "ticker": "000678",
    "name": "襄阳轴承",
    "heat": "6719148",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "688836",
    "name": "宇树科技",
    "heat": "5826290",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "300394",
    "name": "天孚通信",
    "heat": "4949344",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "300308",
    "name": "中际旭创",
    "heat": "4375962",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "002708",
    "name": "光洋股份",
    "heat": "3366044",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "300502",
    "name": "新易盛",
    "heat": "3289620",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "002242",
    "name": "九阳股份",
    "heat": "3092434",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "600825",
    "name": "新华传媒",
    "heat": "2816652",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "000530",
    "name": "冰山冷热",
    "heat": "2768150",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "600838",
    "name": "上海九百",
    "heat": "2588809",
    "rankChange": 0
  }
]

export const skyrockets: RankItem[] = [
  {
    "rank": 1,
    "ticker": "300308",
    "name": "中际旭创",
    "heat": "73653.8",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "300394",
    "name": "天孚通信",
    "heat": "71303.0",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "300502",
    "name": "新易盛",
    "heat": "69674.8",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "300476",
    "name": "胜宏科技",
    "heat": "69304.9",
    "rankChange": 2
  },
  {
    "rank": 5,
    "ticker": "002384",
    "name": "东山精密",
    "heat": "38090.3",
    "rankChange": 1
  },
  {
    "rank": 6,
    "ticker": "600261",
    "name": "阳光照明",
    "heat": "37813.9",
    "rankChange": 8
  },
  {
    "rank": 7,
    "ticker": "601995",
    "name": "中金公司",
    "heat": "35017.1",
    "rankChange": 1
  },
  {
    "rank": 8,
    "ticker": "600118",
    "name": "中国卫星",
    "heat": "32429.1",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "603131",
    "name": "上海沪工",
    "heat": "31634.2",
    "rankChange": 5
  },
  {
    "rank": 10,
    "ticker": "600825",
    "name": "新华传媒",
    "heat": "30785.7",
    "rankChange": 0
  }
]

export const dragonTigerTop: DragonTigerItem[] = [
  {
    "rank": 4,
    "ticker": "600838",
    "name": "上海九百",
    "pct": "+5.11%",
    "netValue": "-0.40亿",
    "orgNet": "—",
    "hotMoneyNet": "0.60亿",
    "concepts": [
      "国企改革",
      "参股券商",
      "物业管理"
    ]
  },
  {
    "rank": 6,
    "ticker": "000559",
    "name": "万向钱潮",
    "pct": "+10.02%",
    "netValue": "2.82亿",
    "orgNet": "-0.20亿",
    "hotMoneyNet": "—",
    "concepts": [
      "人形机器人",
      "小米汽车",
      "机器人概念"
    ]
  },
  {
    "rank": 7,
    "ticker": "603278",
    "name": "大业股份",
    "pct": "+2.99%",
    "netValue": "-0.29亿",
    "orgNet": "—",
    "hotMoneyNet": "0.15亿",
    "concepts": [
      "商业航天",
      "人形机器人",
      "高端装备"
    ]
  },
  {
    "rank": 11,
    "ticker": "002636",
    "name": "金安国纪",
    "pct": "+10.01%",
    "netValue": "1.31亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.82亿",
    "concepts": [
      "医疗器械概念",
      "PCB概念",
      "2026中报预增"
    ]
  },
  {
    "rank": 12,
    "ticker": "000530",
    "name": "冰山冷热",
    "pct": "-8.78%",
    "netValue": "0.35亿",
    "orgNet": "0.08亿",
    "hotMoneyNet": "-0.00亿",
    "concepts": [
      "冰雪产业",
      "中俄贸易概念",
      "无人零售"
    ]
  },
  {
    "rank": 13,
    "ticker": "601086",
    "name": "国芳集团",
    "pct": "+4.20%",
    "netValue": "0.14亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.08亿",
    "concepts": [
      "参股券商",
      "西部大开发",
      "IP经济(谷子经济)"
    ]
  },
  {
    "rank": 14,
    "ticker": "605488",
    "name": "福莱新材",
    "pct": "+10.00%",
    "netValue": "-0.34亿",
    "orgNet": "-1.08亿",
    "hotMoneyNet": "1.10亿",
    "concepts": [
      "苹果概念",
      "人形机器人",
      "传感器"
    ]
  },
  {
    "rank": 16,
    "ticker": "603028",
    "name": "赛福天",
    "pct": "+0.68%",
    "netValue": "-0.36亿",
    "orgNet": "-0.57亿",
    "hotMoneyNet": "0.10亿",
    "concepts": [
      "光伏建筑一体化",
      "机器人概念",
      "人形机器人"
    ]
  },
  {
    "rank": 18,
    "ticker": "002696",
    "name": "百洋股份",
    "pct": "+10.00%",
    "netValue": "0.81亿",
    "orgNet": "0.06亿",
    "hotMoneyNet": "-0.06亿",
    "concepts": [
      "乡村振兴",
      "预制菜",
      "垃圾分类"
    ]
  },
  {
    "rank": 19,
    "ticker": "603528",
    "name": "多伦科技",
    "pct": "-9.95%",
    "netValue": "-0.58亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.04亿",
    "concepts": [
      "ChatGPT概念",
      "华为鲲鹏",
      "人形机器人"
    ]
  }
]
