// 本文件由 scripts/generateStockData.mjs 自动生成，请勿手改。
// 数据源: hithink-finance（同花顺金融数据服务），数据日期: 2026-10-27 收盘
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
  "updatedAt": "2026-10-27 收盘",
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
    "value": "3,648.30",
    "change": "-49.22",
    "changePct": "-1.33%",
    "trend": [
      3767.23,
      3707.48,
      3716.28,
      3730.92,
      3735.37,
      3713.03,
      3658.03,
      3690.48,
      3697.52,
      3648.3
    ]
  },
  {
    "name": "沪深300",
    "symbol": "000300.SH",
    "region": "核心资产",
    "value": "4,049.55",
    "change": "-53.99",
    "changePct": "-1.32%",
    "trend": [
      4217.68,
      4166.01,
      4170.61,
      4174.53,
      4152.11,
      4111.93,
      4036.3,
      4105.33,
      4103.54,
      4049.55
    ]
  },
  {
    "name": "中证500",
    "symbol": "000905.SH",
    "region": "中盘成长",
    "value": "6,511.42",
    "change": "-201.31",
    "changePct": "-3.00%",
    "trend": [
      6980.11,
      6769.25,
      6772.75,
      6800.66,
      6841.44,
      6840.56,
      6655.25,
      6814.44,
      6712.73,
      6511.42
    ]
  },
  {
    "name": "中证1000",
    "symbol": "000852.SH",
    "region": "小盘弹性",
    "value": "6,427.17",
    "change": "-203.61",
    "changePct": "-3.07%",
    "trend": [
      6905.17,
      6678.65,
      6681.94,
      6698.3,
      6766.9,
      6780.26,
      6578.27,
      6734.55,
      6630.78,
      6427.17
    ]
  },
  {
    "name": "创业板指",
    "symbol": "399006.SZ",
    "region": "成长风格",
    "value": "2,548.15",
    "change": "-90.08",
    "changePct": "-3.41%",
    "trend": [
      2866.763,
      2783.175,
      2772.384,
      2746.291,
      2739.203,
      2694.713,
      2576.901,
      2684.097,
      2638.231,
      2548.149
    ]
  },
  {
    "name": "科创50",
    "symbol": "000688.SH",
    "region": "硬科技",
    "value": "1,252.28",
    "change": "-63.22",
    "changePct": "-4.81%",
    "trend": [
      1380.26,
      1359.52,
      1358.65,
      1329.19,
      1342.42,
      1343.28,
      1305.87,
      1345.51,
      1315.5,
      1252.28
    ]
  },
  {
    "name": "深证成指",
    "symbol": "399001.SZ",
    "region": "深市主板",
    "value": "11,245.73",
    "change": "-288.65",
    "changePct": "-2.50%",
    "trend": [
      12110.591,
      11816.789,
      11802.459,
      11817.423,
      11801.29,
      11704.354,
      11357.32,
      11673.826,
      11534.379,
      11245.732
    ]
  }
]

export const watchlist: WatchItem[] = [
  {
    "symbol": "510300",
    "name": "沪深300ETF",
    "category": "核心仓",
    "price": "4.123",
    "changePct": "-1.34%",
    "note": "用于观察大盘核心资产，不等同于买入建议。"
  },
  {
    "symbol": "510500",
    "name": "中证500ETF",
    "category": "中盘",
    "price": "6.537",
    "changePct": "-3.16%",
    "note": "适合作为中盘景气和市场广度的观察锚。"
  },
  {
    "symbol": "512100",
    "name": "中证1000ETF",
    "category": "小盘",
    "price": "2.612",
    "changePct": "-3.22%",
    "note": "波动弹性高，50w 账户要限制仓位拥挤。"
  },
  {
    "symbol": "588000",
    "name": "科创50ETF",
    "category": "硬科技",
    "price": "1.320",
    "changePct": "-4.42%",
    "note": "关注半导体、AI、创新药等成长估值修复。"
  },
  {
    "symbol": "159915",
    "name": "创业板ETF",
    "category": "成长",
    "price": "2.563",
    "changePct": "-3.32%",
    "note": "和风险偏好、美债利率、成长股情绪联动更强。"
  },
  {
    "symbol": "512480",
    "name": "半导体ETF",
    "category": "行业主题",
    "price": "0.765",
    "changePct": "-4.49%",
    "note": "主题弹性大，适合监控成交额和拥挤度。"
  },
  {
    "symbol": "515880",
    "name": "通信ETF",
    "category": "AI链条",
    "price": "0.477",
    "changePct": "-3.64%",
    "note": "关注算力、光模块、运营商资本开支。"
  },
  {
    "symbol": "512800",
    "name": "银行ETF",
    "category": "红利/防御",
    "price": "0.876",
    "changePct": "+1.39%",
    "note": "适合观察高股息、防御风格和利率预期。"
  },
  {
    "symbol": "513180",
    "name": "恒生科技ETF",
    "category": "港股弹性",
    "price": "0.475",
    "changePct": "-1.45%",
    "note": "受港股流动性、美元利率和互联网监管预期影响。"
  },
  {
    "symbol": "159941",
    "name": "纳指ETF",
    "category": "海外映射",
    "price": "1.661",
    "changePct": "0.00%",
    "note": "不作为 A 股替代，只看全球科技风险偏好。"
  }
]

export const sectorPulse: SectorPulse[] = [
  {
    "name": "半导体",
    "changePct": "-4.56%",
    "breadth": "n/a",
    "note": "高弹性行业，重点看成交额放大是否持续。（指数代码 881121.TI）"
  },
  {
    "name": "AI算力",
    "changePct": "-3.64%",
    "breadth": "n/a",
    "note": "东数西算(算力)概念指数，主题强时容易拥挤。（指数代码 885957.TI）"
  },
  {
    "name": "高股息",
    "changePct": "-0.77%",
    "breadth": "n/a",
    "note": "高股息精选概念，防御风格，和利率、避险偏好相关。（指数代码 886072.TI）"
  },
  {
    "name": "消费复苏",
    "changePct": "-0.95%",
    "breadth": "n/a",
    "note": "以白酒行业指数代表消费链条景气验证。（指数代码 881273.TI）"
  },
  {
    "name": "新能源",
    "changePct": "-2.99%",
    "breadth": "n/a",
    "note": "光伏概念指数，供给出清和价格周期是核心变量。（指数代码 885531.TI）"
  },
  {
    "name": "券商",
    "changePct": "-2.08%",
    "breadth": "n/a",
    "note": "证券行业指数，常作为风险偏好和成交额弹性的放大器。（指数代码 881157.TI）"
  }
]

export const domesticFlows: DomesticFlow[] = [
  {
    "name": "两市成交额",
    "value": "1.46万亿",
    "state": "1.46万亿（沪+深）",
    "note": "沪市+深市成交额合计（hithink 指数快照口径），判断行情级别的第一层过滤器。"
  },
  {
    "name": "沪市成交额",
    "value": "6724亿",
    "state": "占两市 46.0%",
    "note": "沪市主板与科创板合计成交，观察权重与大盘活跃度。"
  },
  {
    "name": "深市成交额",
    "value": "7885亿",
    "state": "占两市 54.0%",
    "note": "深市主板与中小盘成交，观察成长与题材活跃度。"
  },
  {
    "name": "创业板成交额",
    "value": "3833亿",
    "state": "占深市 48.6%",
    "note": "成长风格成交占比，50w 账户重点关注 ETF 资金而不是短线热榜。"
  }
]

export const stockBreadth = {
  "tradeDate": "2026-10-27",
  "limitUpCount": 42,
  "limitBreakCount": 28,
  "hotStockCount": 30
}

export const limitUpTop: LimitUpItem[] = [
  {
    "ticker": "301682",
    "name": "宏明电子",
    "price": "102.10",
    "pct": "+20.00%",
    "limitUpTime": "09:55",
    "boards": "首板",
    "reason": "精密零组件+人形机器人+特种电容",
    "sealMoney": "0.7亿"
  },
  {
    "ticker": "001400",
    "name": "江顺科技",
    "price": "80.28",
    "pct": "+10.00%",
    "limitUpTime": "09:35",
    "boards": "首板",
    "reason": "3D打印+液冷+商业航天+铝挤压模具",
    "sealMoney": "0.8亿"
  },
  {
    "ticker": "301314",
    "name": "科瑞思",
    "price": "67.37",
    "pct": "+20.00%",
    "limitUpTime": "13:46",
    "boards": "2连板",
    "reason": "重大重组+光通信+磁性元器件",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "301479",
    "name": "弘景光电",
    "price": "56.15",
    "pct": "+20.00%",
    "limitUpTime": "09:57",
    "boards": "首板",
    "reason": "机器人视觉+全景相机+光通信",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "001331",
    "name": "胜通能源",
    "price": "38.52",
    "pct": "+9.99%",
    "limitUpTime": "09:39",
    "boards": "2连板",
    "reason": "工业机器人+LNG运贸",
    "sealMoney": "0.9亿"
  },
  {
    "ticker": "603370",
    "name": "华新精科",
    "price": "30.81",
    "pct": "+10.00%",
    "limitUpTime": "10:51",
    "boards": "首板",
    "reason": "人形机器人+关节电机铁芯+新能源车铁芯",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "603376",
    "name": "大明电子",
    "price": "26.30",
    "pct": "+10.00%",
    "limitUpTime": "09:48",
    "boards": "首板",
    "reason": "汽车电子+驾驶辅助+新能源车型",
    "sealMoney": "0.0亿"
  },
  {
    "ticker": "603813",
    "name": "原尚股份",
    "price": "24.20",
    "pct": "+10.00%",
    "limitUpTime": "10:34",
    "boards": "首板",
    "reason": "汽车物流+仓储资源",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "605333",
    "name": "沪光股份",
    "price": "19.91",
    "pct": "+10.00%",
    "limitUpTime": "10:21",
    "boards": "2连板",
    "reason": "具身智能+机器人量产+汽车线束",
    "sealMoney": "0.0亿"
  },
  {
    "ticker": "300539",
    "name": "横河精密",
    "price": "19.68",
    "pct": "+20.00%",
    "limitUpTime": "10:04",
    "boards": "首板",
    "reason": "减速器+精密模具+汽车零部件",
    "sealMoney": "0.4亿"
  },
  {
    "ticker": "002623",
    "name": "亚玛顿",
    "price": "18.78",
    "pct": "+10.02%",
    "limitUpTime": "13:19",
    "boards": "首板",
    "reason": "玻璃基板+光伏玻璃+钙钛矿玻璃",
    "sealMoney": "0.4亿"
  },
  {
    "ticker": "300504",
    "name": "天邑股份",
    "price": "17.69",
    "pct": "+20.01%",
    "limitUpTime": "11:12",
    "boards": "首板",
    "reason": "三季报扭亏+通信设备+MPO跳线",
    "sealMoney": "0.5亿"
  }
]

export const limitBreakTop: LimitBreakItem[] = [
  {
    "ticker": "301361",
    "name": "众智科技",
    "price": "30.46",
    "pct": "+16.35%",
    "openTimes": 2,
    "turnover": "3亿"
  },
  {
    "ticker": "600865",
    "name": "百大集团",
    "price": "12.62",
    "pct": "+10.03%",
    "openTimes": 4,
    "turnover": "9亿"
  },
  {
    "ticker": "600826",
    "name": "兰生股份",
    "price": "9.04",
    "pct": "+9.98%",
    "openTimes": 10,
    "turnover": "6亿"
  },
  {
    "ticker": "603489",
    "name": "八方股份",
    "price": "29.90",
    "pct": "+9.28%",
    "openTimes": 4,
    "turnover": "3亿"
  },
  {
    "ticker": "002196",
    "name": "方正电机",
    "price": "10.97",
    "pct": "+9.05%",
    "openTimes": 4,
    "turnover": "11亿"
  },
  {
    "ticker": "688252",
    "name": "天德钰",
    "price": "19.82",
    "pct": "+8.37%",
    "openTimes": 1,
    "turnover": "5亿"
  },
  {
    "ticker": "002300",
    "name": "太阳电缆",
    "price": "7.49",
    "pct": "+6.85%",
    "openTimes": 1,
    "turnover": "6亿"
  },
  {
    "ticker": "002181",
    "name": "粤传媒",
    "price": "10.40",
    "pct": "+6.56%",
    "openTimes": 5,
    "turnover": "19亿"
  }
]

export const ladderDate: string | null = "2026-10-27"

export const ladderBoards: LadderBoard[] = [
  {
    "label": "2板",
    "count": 8,
    "names": [
      "光洋股份",
      "国脉科技",
      "桂发祥"
    ]
  },
  {
    "label": "4板",
    "count": 3,
    "names": [
      "多伦科技",
      "襄阳轴承",
      "赛福天"
    ]
  },
  {
    "label": "5板",
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
    "heat": "5720464",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "002724",
    "name": "海洋王",
    "heat": "4819308",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "000678",
    "name": "襄阳轴承",
    "heat": "4419647",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "603278",
    "name": "大业股份",
    "heat": "3563782",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "688825",
    "name": "长鑫科技",
    "heat": "3265376",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "002354",
    "name": "天娱数科",
    "heat": "3227919",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "002185",
    "name": "华天科技",
    "heat": "3194244",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "600825",
    "name": "新华传媒",
    "heat": "2989939",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "600838",
    "name": "上海九百",
    "heat": "2822913",
    "rankChange": 1
  },
  {
    "rank": 10,
    "ticker": "000530",
    "name": "冰山冷热",
    "heat": "2811023",
    "rankChange": -1
  }
]

export const skyrockets: RankItem[] = [
  {
    "rank": 1,
    "ticker": "301488",
    "name": "豪恩汽电",
    "heat": "49957.9",
    "rankChange": 18
  },
  {
    "rank": 2,
    "ticker": "601208",
    "name": "东材科技",
    "heat": "47183.4",
    "rankChange": 36
  },
  {
    "rank": 3,
    "ticker": "002249",
    "name": "大洋电机",
    "heat": "43036.0",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "002724",
    "name": "海洋王",
    "heat": "32698.6",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "600838",
    "name": "上海九百",
    "heat": "31838.4",
    "rankChange": 1
  },
  {
    "rank": 6,
    "ticker": "601086",
    "name": "国芳集团",
    "heat": "28426.7",
    "rankChange": 1
  },
  {
    "rank": 7,
    "ticker": "600601",
    "name": "方正科技",
    "heat": "23572.6",
    "rankChange": 19
  },
  {
    "rank": 8,
    "ticker": "000678",
    "name": "襄阳轴承",
    "heat": "21961.1",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "600785",
    "name": "新华百货",
    "heat": "20038.1",
    "rankChange": 2
  },
  {
    "rank": 10,
    "ticker": "002639",
    "name": "雪人集团",
    "heat": "18860.5",
    "rankChange": 0
  }
]

export const dragonTigerTop: DragonTigerItem[] = [
  {
    "rank": 1,
    "ticker": "688836",
    "name": "宇树科技",
    "pct": "+7.69%",
    "netValue": "-0.04亿",
    "orgNet": "5.53亿",
    "hotMoneyNet": "-3.17亿",
    "concepts": [
      "人形机器人",
      "科创次新股",
      "注册制次新股"
    ]
  },
  {
    "rank": 2,
    "ticker": "603278",
    "name": "大业股份",
    "pct": "+8.08%",
    "netValue": "0.11亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.24亿",
    "concepts": [
      "商业航天",
      "人形机器人",
      "高端装备"
    ]
  },
  {
    "rank": 3,
    "ticker": "002354",
    "name": "天娱数科",
    "pct": "+1.49%",
    "netValue": "-3.70亿",
    "orgNet": "-0.64亿",
    "hotMoneyNet": "-4.07亿",
    "concepts": [
      "快手概念",
      "AI视频",
      "小红书概念"
    ]
  },
  {
    "rank": 5,
    "ticker": "000678",
    "name": "襄阳轴承",
    "pct": "+9.98%",
    "netValue": "-0.46亿",
    "orgNet": "0.16亿",
    "hotMoneyNet": "-0.21亿",
    "concepts": [
      "股权转让(并购重组)",
      "减速器",
      "军民融合"
    ]
  },
  {
    "rank": 8,
    "ticker": "002696",
    "name": "百洋股份",
    "pct": "+10.05%",
    "netValue": "0.56亿",
    "orgNet": "-0.25亿",
    "hotMoneyNet": "0.38亿",
    "concepts": [
      "垃圾分类",
      "乡村振兴",
      "预制菜"
    ]
  },
  {
    "rank": 10,
    "ticker": "000530",
    "name": "冰山冷热",
    "pct": "-9.97%",
    "netValue": "-0.70亿",
    "orgNet": "-0.32亿",
    "hotMoneyNet": "0.04亿",
    "concepts": [
      "冰雪产业",
      "中俄贸易概念",
      "无人零售"
    ]
  },
  {
    "rank": 12,
    "ticker": "000559",
    "name": "万向钱潮",
    "pct": "+10.04%",
    "netValue": "3.74亿",
    "orgNet": "0.85亿",
    "hotMoneyNet": "0.30亿",
    "concepts": [
      "小米汽车",
      "机器人概念",
      "人形机器人"
    ]
  },
  {
    "rank": 14,
    "ticker": "002343",
    "name": "慈文传媒",
    "pct": "-10.01%",
    "netValue": "-1.41亿",
    "orgNet": "—",
    "hotMoneyNet": "0.18亿",
    "concepts": [
      "富时罗素概念股",
      "手机游戏",
      "短剧游戏"
    ]
  },
  {
    "rank": 19,
    "ticker": "301313",
    "name": "凡拓数创",
    "pct": "+10.43%",
    "netValue": "-1.25亿",
    "orgNet": "-1.06亿",
    "hotMoneyNet": "-0.26亿",
    "concepts": [
      "虚拟现实",
      "空间计算",
      "智谱AI"
    ]
  },
  {
    "rank": 25,
    "ticker": "603138",
    "name": "海量数据",
    "pct": "+10.03%",
    "netValue": "0.49亿",
    "orgNet": "—",
    "hotMoneyNet": "0.05亿",
    "concepts": [
      "数据安全",
      "信创",
      "华为鲲鹏"
    ]
  }
]
