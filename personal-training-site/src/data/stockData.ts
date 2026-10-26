// 本文件由 scripts/generateStockData.mjs 自动生成，请勿手改。
// 数据源: hithink-finance（同花顺金融数据服务），数据日期: 2026-10-26 收盘
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
  "updatedAt": "2026-10-26 收盘",
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
    "value": "3,697.52",
    "change": "+7.04",
    "changePct": "+0.19%",
    "trend": [
      3800.86,
      3767.23,
      3707.48,
      3716.28,
      3730.92,
      3735.37,
      3713.03,
      3658.03,
      3690.48,
      3697.52
    ]
  },
  {
    "name": "沪深300",
    "symbol": "000300.SH",
    "region": "核心资产",
    "value": "4,103.54",
    "change": "-1.79",
    "changePct": "-0.04%",
    "trend": [
      4275.68,
      4217.68,
      4166.01,
      4170.61,
      4174.53,
      4152.11,
      4111.93,
      4036.3,
      4105.33,
      4103.54
    ]
  },
  {
    "name": "中证500",
    "symbol": "000905.SH",
    "region": "中盘成长",
    "value": "6,712.73",
    "change": "-101.71",
    "changePct": "-1.49%",
    "trend": [
      7085.09,
      6980.11,
      6769.25,
      6772.75,
      6800.66,
      6841.44,
      6840.56,
      6655.25,
      6814.44,
      6712.73
    ]
  },
  {
    "name": "中证1000",
    "symbol": "000852.SH",
    "region": "小盘弹性",
    "value": "6,630.78",
    "change": "-103.77",
    "changePct": "-1.54%",
    "trend": [
      7023.22,
      6905.17,
      6678.65,
      6681.94,
      6698.3,
      6766.9,
      6780.26,
      6578.27,
      6734.55,
      6630.78
    ]
  },
  {
    "name": "创业板指",
    "symbol": "399006.SZ",
    "region": "成长风格",
    "value": "2,638.23",
    "change": "-45.87",
    "changePct": "-1.71%",
    "trend": [
      2958.345,
      2866.763,
      2783.175,
      2772.384,
      2746.291,
      2739.203,
      2694.713,
      2576.901,
      2684.097,
      2638.231
    ]
  },
  {
    "name": "科创50",
    "symbol": "000688.SH",
    "region": "硬科技",
    "value": "1,315.50",
    "change": "-30.01",
    "changePct": "-2.23%",
    "trend": [
      1427.18,
      1380.26,
      1359.52,
      1358.65,
      1329.19,
      1342.42,
      1343.28,
      1305.87,
      1345.51,
      1315.5
    ]
  },
  {
    "name": "深证成指",
    "symbol": "399001.SZ",
    "region": "深市主板",
    "value": "11,534.38",
    "change": "-139.45",
    "changePct": "-1.19%",
    "trend": [
      12353.699,
      12110.591,
      11816.789,
      11802.459,
      11817.423,
      11801.29,
      11704.354,
      11357.32,
      11673.826,
      11534.379
    ]
  }
]

export const watchlist: WatchItem[] = [
  {
    "symbol": "510300",
    "name": "沪深300ETF",
    "category": "核心仓",
    "price": "4.179",
    "changePct": "+0.02%",
    "note": "用于观察大盘核心资产，不等同于买入建议。"
  },
  {
    "symbol": "510500",
    "name": "中证500ETF",
    "category": "中盘",
    "price": "6.750",
    "changePct": "-1.56%",
    "note": "适合作为中盘景气和市场广度的观察锚。"
  },
  {
    "symbol": "512100",
    "name": "中证1000ETF",
    "category": "小盘",
    "price": "2.699",
    "changePct": "-1.57%",
    "note": "波动弹性高，50w 账户要限制仓位拥挤。"
  },
  {
    "symbol": "588000",
    "name": "科创50ETF",
    "category": "硬科技",
    "price": "1.381",
    "changePct": "-2.88%",
    "note": "关注半导体、AI、创新药等成长估值修复。"
  },
  {
    "symbol": "159915",
    "name": "创业板ETF",
    "category": "成长",
    "price": "2.651",
    "changePct": "-1.89%",
    "note": "和风险偏好、美债利率、成长股情绪联动更强。"
  },
  {
    "symbol": "512480",
    "name": "半导体ETF",
    "category": "行业主题",
    "price": "0.801",
    "changePct": "-4.19%",
    "note": "主题弹性大，适合监控成交额和拥挤度。"
  },
  {
    "symbol": "515880",
    "name": "通信ETF",
    "category": "AI链条",
    "price": "0.495",
    "changePct": "-3.70%",
    "note": "关注算力、光模块、运营商资本开支。"
  },
  {
    "symbol": "512800",
    "name": "银行ETF",
    "category": "红利/防御",
    "price": "0.864",
    "changePct": "+1.77%",
    "note": "适合观察高股息、防御风格和利率预期。"
  },
  {
    "symbol": "513180",
    "name": "恒生科技ETF",
    "category": "港股弹性",
    "price": "0.482",
    "changePct": "-1.03%",
    "note": "受港股流动性、美元利率和互联网监管预期影响。"
  },
  {
    "symbol": "159941",
    "name": "纳指ETF",
    "category": "海外映射",
    "price": "1.661",
    "changePct": "-0.42%",
    "note": "不作为 A 股替代，只看全球科技风险偏好。"
  }
]

export const sectorPulse: SectorPulse[] = [
  {
    "name": "半导体",
    "changePct": "-3.84%",
    "breadth": "n/a",
    "note": "高弹性行业，重点看成交额放大是否持续。（指数代码 881121.TI）"
  },
  {
    "name": "AI算力",
    "changePct": "-0.99%",
    "breadth": "n/a",
    "note": "东数西算(算力)概念指数，主题强时容易拥挤。（指数代码 885957.TI）"
  },
  {
    "name": "高股息",
    "changePct": "+0.75%",
    "breadth": "n/a",
    "note": "高股息精选概念，防御风格，和利率、避险偏好相关。（指数代码 886072.TI）"
  },
  {
    "name": "消费复苏",
    "changePct": "+2.50%",
    "breadth": "n/a",
    "note": "以白酒行业指数代表消费链条景气验证。（指数代码 881273.TI）"
  },
  {
    "name": "新能源",
    "changePct": "-1.45%",
    "breadth": "n/a",
    "note": "光伏概念指数，供给出清和价格周期是核心变量。（指数代码 885531.TI）"
  },
  {
    "name": "券商",
    "changePct": "+0.15%",
    "breadth": "n/a",
    "note": "证券行业指数，常作为风险偏好和成交额弹性的放大器。（指数代码 881157.TI）"
  }
]

export const domesticFlows: DomesticFlow[] = [
  {
    "name": "两市成交额",
    "value": "1.61万亿",
    "state": "1.61万亿（沪+深）",
    "note": "沪市+深市成交额合计（hithink 指数快照口径），判断行情级别的第一层过滤器。"
  },
  {
    "name": "沪市成交额",
    "value": "7465亿",
    "state": "占两市 46.4%",
    "note": "沪市主板与科创板合计成交，观察权重与大盘活跃度。"
  },
  {
    "name": "深市成交额",
    "value": "8623亿",
    "state": "占两市 53.6%",
    "note": "深市主板与中小盘成交，观察成长与题材活跃度。"
  },
  {
    "name": "创业板成交额",
    "value": "4297亿",
    "state": "占深市 49.8%",
    "note": "成长风格成交占比，50w 账户重点关注 ETF 资金而不是短线热榜。"
  }
]

export const stockBreadth = {
  "tradeDate": "2026-10-26",
  "limitUpCount": 59,
  "limitBreakCount": 23,
  "hotStockCount": 30
}

export const limitUpTop: LimitUpItem[] = [
  {
    "ticker": "688585",
    "name": "上纬新材",
    "price": "151.57",
    "pct": "+20.00%",
    "limitUpTime": "13:28",
    "boards": "首板",
    "reason": "具身智能+机器人下线+风电树脂",
    "sealMoney": "0.6亿"
  },
  {
    "ticker": "301502",
    "name": "华阳智能",
    "price": "77.76",
    "pct": "+20.00%",
    "limitUpTime": "09:25",
    "boards": "3连板",
    "reason": "机器人关节模组+无框电机+微特电机",
    "sealMoney": "0.0亿"
  },
  {
    "ticker": "301314",
    "name": "科瑞思",
    "price": "56.14",
    "pct": "+20.01%",
    "limitUpTime": "09:25",
    "boards": "首板",
    "reason": "光通信重组+磁性元器件",
    "sealMoney": "0.8亿"
  },
  {
    "ticker": "001317",
    "name": "三羊马",
    "price": "53.68",
    "pct": "+10.00%",
    "limitUpTime": "14:52",
    "boards": "首板",
    "reason": "“羊”字辈+汽车物流+多式联运",
    "sealMoney": "0.7亿"
  },
  {
    "ticker": "300976",
    "name": "达瑞电子",
    "price": "53.40",
    "pct": "+20.00%",
    "limitUpTime": "11:24",
    "boards": "首板",
    "reason": "回购+折叠屏+光模块散热",
    "sealMoney": "1.0亿"
  },
  {
    "ticker": "603200",
    "name": "上海洗霸",
    "price": "50.41",
    "pct": "+9.99%",
    "limitUpTime": "11:04",
    "boards": "首板",
    "reason": "固态电池+水处理+数据中心液冷",
    "sealMoney": "0.8亿"
  },
  {
    "ticker": "688386",
    "name": "泛亚微透",
    "price": "46.56",
    "pct": "+20.00%",
    "limitUpTime": "13:22",
    "boards": "首板",
    "reason": "机器人+电子皮肤+微透膜",
    "sealMoney": "0.4亿"
  },
  {
    "ticker": "603337",
    "name": "杰克科技",
    "price": "43.19",
    "pct": "+10.01%",
    "limitUpTime": "09:30",
    "boards": "2连板",
    "reason": "人形机器人+数字成套+工业缝纫机",
    "sealMoney": "2.4亿"
  },
  {
    "ticker": "002931",
    "name": "锋龙股份",
    "price": "42.37",
    "pct": "+9.99%",
    "limitUpTime": "13:00",
    "boards": "2连板",
    "reason": "机器人概念+优必选入主+机电组件+电控产品",
    "sealMoney": "0.7亿"
  },
  {
    "ticker": "605488",
    "name": "福莱新材",
    "price": "41.97",
    "pct": "+10.01%",
    "limitUpTime": "09:30",
    "boards": "2连板",
    "reason": "数据采集手套+机器人触觉+广告喷墨",
    "sealMoney": "1.1亿"
  },
  {
    "ticker": "300949",
    "name": "奥雅股份",
    "price": "35.58",
    "pct": "+20.00%",
    "limitUpTime": "14:33",
    "boards": "首板",
    "reason": "奥创引擎+IP+综合文旅+景观设计",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "001331",
    "name": "胜通能源",
    "price": "35.02",
    "pct": "+9.99%",
    "limitUpTime": "10:27",
    "boards": "首板",
    "reason": "机器人产业链+LNG运贸",
    "sealMoney": "0.6亿"
  }
]

export const limitBreakTop: LimitBreakItem[] = [
  {
    "ticker": "301428",
    "name": "世纪恒通",
    "price": "38.43",
    "pct": "+17.74%",
    "openTimes": 3,
    "turnover": "13亿"
  },
  {
    "ticker": "688218",
    "name": "江苏北人",
    "price": "40.20",
    "pct": "+15.98%",
    "openTimes": 3,
    "turnover": "4亿"
  },
  {
    "ticker": "301015",
    "name": "百洋医药",
    "price": "25.00",
    "pct": "+10.62%",
    "openTimes": 1,
    "turnover": "6亿"
  },
  {
    "ticker": "300552",
    "name": "万集科技",
    "price": "22.50",
    "pct": "+9.38%",
    "openTimes": 1,
    "turnover": "4亿"
  },
  {
    "ticker": "603007",
    "name": "顺景科技",
    "price": "4.59",
    "pct": "+8.77%",
    "openTimes": 3,
    "turnover": "4亿"
  },
  {
    "ticker": "688228",
    "name": "开普云",
    "price": "82.59",
    "pct": "+8.67%",
    "openTimes": 6,
    "turnover": "8亿"
  },
  {
    "ticker": "603886",
    "name": "元祖股份",
    "price": "12.93",
    "pct": "+8.11%",
    "openTimes": 3,
    "turnover": "2亿"
  },
  {
    "ticker": "603278",
    "name": "大业股份",
    "price": "17.25",
    "pct": "+8.08%",
    "openTimes": 11,
    "turnover": "23亿"
  }
]

export const ladderDate: string | null = "2026-10-26"

export const ladderBoards: LadderBoard[] = [
  {
    "label": "2板",
    "count": 8,
    "names": [
      "万向钱潮",
      "创维数字",
      "大名城"
    ]
  },
  {
    "label": "3板",
    "count": 6,
    "names": [
      "华阳智能",
      "多伦科技",
      "林州重机"
    ]
  },
  {
    "label": "4板",
    "count": 1,
    "names": [
      "上海九百"
    ]
  }
]

export const hotStocks: RankItem[] = [
  {
    "rank": 1,
    "ticker": "688836",
    "name": "宇树科技",
    "heat": "10014803",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "603278",
    "name": "大业股份",
    "heat": "5365661",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "002354",
    "name": "天娱数科",
    "heat": "4429897",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "001309",
    "name": "德明利",
    "heat": "3701667",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "002724",
    "name": "海洋王",
    "heat": "3581841",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "600825",
    "name": "新华传媒",
    "heat": "3251178",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "000678",
    "name": "襄阳轴承",
    "heat": "3111318",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "300308",
    "name": "中际旭创",
    "heat": "3095427",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "301313",
    "name": "凡拓数创",
    "heat": "3001082",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "300750",
    "name": "宁德时代",
    "heat": "2768806",
    "rankChange": 0
  }
]

export const skyrockets: RankItem[] = [
  {
    "rank": 1,
    "ticker": "601857",
    "name": "中国石油",
    "heat": "39959.9",
    "rankChange": 1
  },
  {
    "rank": 2,
    "ticker": "000651",
    "name": "格力电器",
    "heat": "28856.5",
    "rankChange": 16
  },
  {
    "rank": 3,
    "ticker": "603259",
    "name": "药明康德",
    "heat": "26543.7",
    "rankChange": 6
  },
  {
    "rank": 4,
    "ticker": "600558",
    "name": "大西洋",
    "heat": "16034.8",
    "rankChange": 11
  },
  {
    "rank": 5,
    "ticker": "000810",
    "name": "创维数字",
    "heat": "15448.0",
    "rankChange": 4
  },
  {
    "rank": 6,
    "ticker": "000559",
    "name": "万向钱潮",
    "heat": "15341.8",
    "rankChange": 1
  },
  {
    "rank": 7,
    "ticker": "002696",
    "name": "百洋股份",
    "heat": "14585.1",
    "rankChange": -1
  },
  {
    "rank": 8,
    "ticker": "002086",
    "name": "东方海洋",
    "heat": "14103.5",
    "rankChange": 8
  },
  {
    "rank": 9,
    "ticker": "300475",
    "name": "香农芯创",
    "heat": "14075.3",
    "rankChange": 4
  },
  {
    "rank": 10,
    "ticker": "002178",
    "name": "延华智能",
    "heat": "13787.8",
    "rankChange": 8
  }
]

export const dragonTigerTop: DragonTigerItem[] = [
  {
    "rank": 2,
    "ticker": "603278",
    "name": "大业股份",
    "pct": "+9.99%",
    "netValue": "-0.20亿",
    "orgNet": "—",
    "hotMoneyNet": "0.02亿",
    "concepts": [
      "商业航天",
      "人形机器人",
      "高端装备"
    ]
  },
  {
    "rank": 5,
    "ticker": "000678",
    "name": "襄阳轴承",
    "pct": "+9.98%",
    "netValue": "1.22亿",
    "orgNet": "-0.21亿",
    "hotMoneyNet": "0.75亿",
    "concepts": [
      "股权转让(并购重组)",
      "减速器",
      "军民融合"
    ]
  },
  {
    "rank": 6,
    "ticker": "002343",
    "name": "慈文传媒",
    "pct": "+10.00%",
    "netValue": "0.13亿",
    "orgNet": "-0.44亿",
    "hotMoneyNet": "-0.10亿",
    "concepts": [
      "富时罗素概念股",
      "手机游戏",
      "短剧游戏"
    ]
  },
  {
    "rank": 7,
    "ticker": "002354",
    "name": "天娱数科",
    "pct": "+10.00%",
    "netValue": "4.89亿",
    "orgNet": "0.67亿",
    "hotMoneyNet": "4.02亿",
    "concepts": [
      "快手概念",
      "AI视频",
      "小红书概念"
    ]
  },
  {
    "rank": 10,
    "ticker": "600293",
    "name": "三峡新材",
    "pct": "-6.12%",
    "netValue": "0.28亿",
    "orgNet": "—",
    "hotMoneyNet": "0.83亿",
    "concepts": [
      "股权转让(并购重组)",
      "参股银行",
      "国企改革"
    ]
  },
  {
    "rank": 11,
    "ticker": "000530",
    "name": "冰山冷热",
    "pct": "+0.42%",
    "netValue": "-1.01亿",
    "orgNet": "-0.37亿",
    "hotMoneyNet": "0.08亿",
    "concepts": [
      "冰雪产业",
      "无人零售",
      "军民融合"
    ]
  },
  {
    "rank": 12,
    "ticker": "688836",
    "name": "宇树科技",
    "pct": "+20.00%",
    "netValue": "2.11亿",
    "orgNet": "2.41亿",
    "hotMoneyNet": "1.42亿",
    "concepts": [
      "人形机器人",
      "科创次新股",
      "注册制次新股"
    ]
  },
  {
    "rank": 13,
    "ticker": "002724",
    "name": "海洋王",
    "pct": "+9.99%",
    "netValue": "0.79亿",
    "orgNet": "—",
    "hotMoneyNet": "—",
    "concepts": [
      "军工",
      "智慧城市",
      "智慧灯杆"
    ]
  },
  {
    "rank": 16,
    "ticker": "002249",
    "name": "大洋电机",
    "pct": "+7.37%",
    "netValue": "0.27亿",
    "orgNet": "-0.11亿",
    "hotMoneyNet": "0.01亿",
    "concepts": [
      "燃料电池",
      "长安汽车概念",
      "风电"
    ]
  },
  {
    "rank": 18,
    "ticker": "001216",
    "name": "华瓷股份",
    "pct": "+10.02%",
    "netValue": "1.42亿",
    "orgNet": "0.18亿",
    "hotMoneyNet": "0.46亿",
    "concepts": [
      "牙科医疗",
      "NFT概念",
      "智能穿戴"
    ]
  }
]
