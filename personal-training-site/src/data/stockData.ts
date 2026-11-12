// 本文件由 scripts/generateStockData.mjs 自动生成，请勿手改。
// 数据源: hithink-finance（同花顺金融数据服务），数据日期: 2026-11-12 收盘
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
  "updatedAt": "2026-11-12 收盘",
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
    "value": "3,655.83",
    "change": "-24.81",
    "changePct": "-0.67%",
    "trend": [
      3599.02,
      3638.03,
      3608.1,
      3686.17,
      3689.91,
      3649.18,
      3660.79,
      3663.72,
      3680.64,
      3655.83
    ]
  },
  {
    "name": "沪深300",
    "symbol": "000300.SH",
    "region": "核心资产",
    "value": "4,043.93",
    "change": "-31.78",
    "changePct": "-0.78%",
    "trend": [
      3985.5,
      4016.92,
      4008.87,
      4101.34,
      4113.41,
      4054.28,
      4056.11,
      4059.11,
      4075.71,
      4043.93
    ]
  },
  {
    "name": "中证500",
    "symbol": "000905.SH",
    "region": "中盘成长",
    "value": "6,604.15",
    "change": "-109.03",
    "changePct": "-1.62%",
    "trend": [
      6266.19,
      6420.23,
      6327.05,
      6622.03,
      6740.93,
      6597.35,
      6586.18,
      6645.89,
      6713.18,
      6604.15
    ]
  },
  {
    "name": "中证1000",
    "symbol": "000852.SH",
    "region": "小盘弹性",
    "value": "6,537.84",
    "change": "-131.71",
    "changePct": "-1.97%",
    "trend": [
      6161.23,
      6329.34,
      6221.23,
      6511.81,
      6650.14,
      6505.35,
      6499.74,
      6579.36,
      6669.55,
      6537.84
    ]
  },
  {
    "name": "创业板指",
    "symbol": "399006.SZ",
    "region": "成长风格",
    "value": "2,509.43",
    "change": "-62.64",
    "changePct": "-2.44%",
    "trend": [
      2413.629,
      2458.698,
      2391.652,
      2544.73,
      2566.803,
      2465.232,
      2458.562,
      2494.397,
      2572.067,
      2509.429
    ]
  },
  {
    "name": "科创50",
    "symbol": "000688.SH",
    "region": "硬科技",
    "value": "1,309.84",
    "change": "+9.46",
    "changePct": "+0.73%",
    "trend": [
      1160.84,
      1196.94,
      1151.28,
      1265.47,
      1286.68,
      1253.2,
      1256.96,
      1265.02,
      1300.38,
      1309.84
    ]
  },
  {
    "name": "深证成指",
    "symbol": "399001.SZ",
    "region": "深市主板",
    "value": "11,197.98",
    "change": "-191.76",
    "changePct": "-1.68%",
    "trend": [
      10833.784,
      11010.677,
      10876.989,
      11335.687,
      11471.094,
      11175.781,
      11145.491,
      11241.536,
      11389.737,
      11197.976
    ]
  }
]

export const watchlist: WatchItem[] = [
  {
    "symbol": "510300",
    "name": "沪深300ETF",
    "category": "核心仓",
    "price": "4.114",
    "changePct": "-0.87%",
    "note": "用于观察大盘核心资产，不等同于买入建议。"
  },
  {
    "symbol": "510500",
    "name": "中证500ETF",
    "category": "中盘",
    "price": "6.628",
    "changePct": "-1.78%",
    "note": "适合作为中盘景气和市场广度的观察锚。"
  },
  {
    "symbol": "512100",
    "name": "中证1000ETF",
    "category": "小盘",
    "price": "2.657",
    "changePct": "-2.03%",
    "note": "波动弹性高，50w 账户要限制仓位拥挤。"
  },
  {
    "symbol": "588000",
    "name": "科创50ETF",
    "category": "硬科技",
    "price": "1.381",
    "changePct": "+0.44%",
    "note": "关注半导体、AI、创新药等成长估值修复。"
  },
  {
    "symbol": "159915",
    "name": "创业板ETF",
    "category": "成长",
    "price": "2.524",
    "changePct": "-2.55%",
    "note": "和风险偏好、美债利率、成长股情绪联动更强。"
  },
  {
    "symbol": "512480",
    "name": "半导体ETF",
    "category": "行业主题",
    "price": "0.813",
    "changePct": "+0.49%",
    "note": "主题弹性大，适合监控成交额和拥挤度。"
  },
  {
    "symbol": "515880",
    "name": "通信ETF",
    "category": "AI链条",
    "price": "0.443",
    "changePct": "-3.49%",
    "note": "关注算力、光模块、运营商资本开支。"
  },
  {
    "symbol": "512800",
    "name": "银行ETF",
    "category": "红利/防御",
    "price": "0.885",
    "changePct": "+0.34%",
    "note": "适合观察高股息、防御风格和利率预期。"
  },
  {
    "symbol": "513180",
    "name": "恒生科技ETF",
    "category": "港股弹性",
    "price": "0.491",
    "changePct": "-2.77%",
    "note": "受港股流动性、美元利率和互联网监管预期影响。"
  },
  {
    "symbol": "159941",
    "name": "纳指ETF",
    "category": "海外映射",
    "price": "1.638",
    "changePct": "-1.15%",
    "note": "不作为 A 股替代，只看全球科技风险偏好。"
  }
]

export const sectorPulse: SectorPulse[] = [
  {
    "name": "半导体",
    "changePct": "-0.87%",
    "breadth": "n/a",
    "note": "高弹性行业，重点看成交额放大是否持续。（指数代码 881121.TI）"
  },
  {
    "name": "AI算力",
    "changePct": "-2.17%",
    "breadth": "n/a",
    "note": "东数西算(算力)概念指数，主题强时容易拥挤。（指数代码 885957.TI）"
  },
  {
    "name": "高股息",
    "changePct": "-0.70%",
    "breadth": "n/a",
    "note": "高股息精选概念，防御风格，和利率、避险偏好相关。（指数代码 886072.TI）"
  },
  {
    "name": "消费复苏",
    "changePct": "+0.79%",
    "breadth": "n/a",
    "note": "以白酒行业指数代表消费链条景气验证。（指数代码 881273.TI）"
  },
  {
    "name": "新能源",
    "changePct": "-1.86%",
    "breadth": "n/a",
    "note": "光伏概念指数，供给出清和价格周期是核心变量。（指数代码 885531.TI）"
  },
  {
    "name": "券商",
    "changePct": "-0.90%",
    "breadth": "n/a",
    "note": "证券行业指数，常作为风险偏好和成交额弹性的放大器。（指数代码 881157.TI）"
  }
]

export const domesticFlows: DomesticFlow[] = [
  {
    "name": "两市成交额",
    "value": "1.93万亿",
    "state": "1.93万亿（沪+深）",
    "note": "沪市+深市成交额合计（hithink 指数快照口径），判断行情级别的第一层过滤器。"
  },
  {
    "name": "沪市成交额",
    "value": "8795亿",
    "state": "占两市 45.5%",
    "note": "沪市主板与科创板合计成交，观察权重与大盘活跃度。"
  },
  {
    "name": "深市成交额",
    "value": "1.05万亿",
    "state": "占两市 54.5%",
    "note": "深市主板与中小盘成交，观察成长与题材活跃度。"
  },
  {
    "name": "创业板成交额",
    "value": "5274亿",
    "state": "占深市 50.1%",
    "note": "成长风格成交占比，50w 账户重点关注 ETF 资金而不是短线热榜。"
  }
]

export const stockBreadth = {
  "tradeDate": "2026-11-12",
  "limitUpCount": 37,
  "limitBreakCount": 30,
  "hotStockCount": 30
}

export const limitUpTop: LimitUpItem[] = [
  {
    "ticker": "603175",
    "name": "超颖电子",
    "price": "99.54",
    "pct": "+10.00%",
    "limitUpTime": "09:38",
    "boards": "首板",
    "reason": "AI算力PCB+存储PCB+高阶PCB认证",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "605255",
    "name": "天普股份",
    "price": "67.11",
    "pct": "+10.00%",
    "limitUpTime": "09:41",
    "boards": "3连板",
    "reason": "中昊芯英+实控人变更+汽车管路",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "601606",
    "name": "长城军工",
    "price": "32.62",
    "pct": "+10.02%",
    "limitUpTime": "13:52",
    "boards": "首板",
    "reason": "弹药装备+兵装重组+央企",
    "sealMoney": "0.5亿"
  },
  {
    "ticker": "603396",
    "name": "金辰股份",
    "price": "32.11",
    "pct": "+10.00%",
    "limitUpTime": "09:25",
    "boards": "2连板",
    "reason": "光伏设备+半导体装备+玻璃基封装+股份回购",
    "sealMoney": "2.5亿"
  },
  {
    "ticker": "603706",
    "name": "东方环宇",
    "price": "26.87",
    "pct": "+9.99%",
    "limitUpTime": "11:00",
    "boards": "4连板",
    "reason": "“东方系”+寒潮供暖+天然气+集中供热",
    "sealMoney": "0.4亿"
  },
  {
    "ticker": "002623",
    "name": "亚玛顿",
    "price": "25.66",
    "pct": "+9.99%",
    "limitUpTime": "09:25",
    "boards": "4连板",
    "reason": "复牌+控制权变更+光伏玻璃+玻璃基板",
    "sealMoney": "1.7亿"
  },
  {
    "ticker": "001358",
    "name": "兴欣新材",
    "price": "24.22",
    "pct": "+9.99%",
    "limitUpTime": "09:55",
    "boards": "首板",
    "reason": "光刻胶剥离液+电子化学品+股份回购",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "601091",
    "name": "沈鼓集团",
    "price": "20.92",
    "pct": "+9.99%",
    "limitUpTime": "13:29",
    "boards": "首板",
    "reason": "天然气压缩机+离心压缩机+煤化工装备+次新股",
    "sealMoney": "0.7亿"
  },
  {
    "ticker": "605222",
    "name": "起帆电缆",
    "price": "20.55",
    "pct": "+10.01%",
    "limitUpTime": "11:20",
    "boards": "首板",
    "reason": "机器人电缆+商业航天+海缆",
    "sealMoney": "0.5亿"
  },
  {
    "ticker": "603958",
    "name": "哈森股份",
    "price": "18.38",
    "pct": "+9.99%",
    "limitUpTime": "10:53",
    "boards": "首板",
    "reason": "苹果产业链+机器人+资产重组",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "000995",
    "name": "皇台酒业",
    "price": "18.32",
    "pct": "+10.03%",
    "limitUpTime": "13:07",
    "boards": "首板",
    "reason": "白酒+老窖池+董事会换届",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "600857",
    "name": "宁波中百",
    "price": "15.00",
    "pct": "+9.97%",
    "limitUpTime": "10:01",
    "boards": "首板",
    "reason": "商业零售+黄金珠宝+杭州金帝入主",
    "sealMoney": "0.5亿"
  }
]

export const limitBreakTop: LimitBreakItem[] = [
  {
    "ticker": "300829",
    "name": "金丹科技",
    "price": "28.47",
    "pct": "+13.61%",
    "openTimes": 1,
    "turnover": "11亿"
  },
  {
    "ticker": "002838",
    "name": "道恩股份",
    "price": "23.24",
    "pct": "+7.84%",
    "openTimes": 6,
    "turnover": "6亿"
  },
  {
    "ticker": "000635",
    "name": "英力特",
    "price": "11.00",
    "pct": "+7.74%",
    "openTimes": 2,
    "turnover": "5亿"
  },
  {
    "ticker": "002164",
    "name": "宁波东力",
    "price": "23.52",
    "pct": "+7.35%",
    "openTimes": 11,
    "turnover": "26亿"
  },
  {
    "ticker": "301209",
    "name": "联合化学",
    "price": "44.81",
    "pct": "+7.25%",
    "openTimes": 1,
    "turnover": "5亿"
  },
  {
    "ticker": "002647",
    "name": "仁东控股",
    "price": "7.70",
    "pct": "+6.94%",
    "openTimes": 2,
    "turnover": "6亿"
  },
  {
    "ticker": "000710",
    "name": "贝瑞基因",
    "price": "10.91",
    "pct": "+6.65%",
    "openTimes": 3,
    "turnover": "10亿"
  },
  {
    "ticker": "002931",
    "name": "锋龙股份",
    "price": "56.60",
    "pct": "+6.63%",
    "openTimes": 6,
    "turnover": "28亿"
  }
]

export const ladderDate: string | null = "2026-11-12"

export const ladderBoards: LadderBoard[] = [
  {
    "label": "2板",
    "count": 5,
    "names": [
      "中重科技",
      "北纬科技",
      "天安新材"
    ]
  },
  {
    "label": "3板",
    "count": 2,
    "names": [
      "天普股份",
      "惠发食品"
    ]
  },
  {
    "label": "4板",
    "count": 2,
    "names": [
      "东方环宇",
      "亚玛顿"
    ]
  },
  {
    "label": "5板",
    "count": 2,
    "names": [
      "大东方",
      "日出东方"
    ]
  }
]

export const hotStocks: RankItem[] = [
  {
    "rank": 1,
    "ticker": "002086",
    "name": "东方海洋",
    "heat": "5751985",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "300308",
    "name": "中际旭创",
    "heat": "4992623",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "000678",
    "name": "襄阳轴承",
    "heat": "4799646",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "603366",
    "name": "日出东方",
    "heat": "4263417",
    "rankChange": 1
  },
  {
    "rank": 5,
    "ticker": "002384",
    "name": "东山精密",
    "heat": "4259222",
    "rankChange": -1
  },
  {
    "rank": 6,
    "ticker": "300058",
    "name": "蓝色光标",
    "heat": "4006636",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "600715",
    "name": "文投控股",
    "heat": "3768596",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "600327",
    "name": "大东方",
    "heat": "3719642",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "300502",
    "name": "新易盛",
    "heat": "3118768",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "688836",
    "name": "宇树科技",
    "heat": "3031304",
    "rankChange": 0
  }
]

export const skyrockets: RankItem[] = [
  {
    "rank": 1,
    "ticker": "600825",
    "name": "新华传媒",
    "heat": "11102.1",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "300058",
    "name": "蓝色光标",
    "heat": "9034.1",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "601929",
    "name": "吉视传媒",
    "heat": "5912.2",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "603366",
    "name": "日出东方",
    "heat": "5544.5",
    "rankChange": 1
  },
  {
    "rank": 5,
    "ticker": "601606",
    "name": "长城军工",
    "heat": "5390.0",
    "rankChange": 1
  },
  {
    "rank": 6,
    "ticker": "601188",
    "name": "龙江交通",
    "heat": "5373.7",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "603536",
    "name": "惠发食品",
    "heat": "4906.1",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "002172",
    "name": "澳洋健康",
    "heat": "4883.0",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "002086",
    "name": "东方海洋",
    "heat": "4715.4",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "002156",
    "name": "通富微电",
    "heat": "4428.5",
    "rankChange": 0
  }
]

export const dragonTigerTop: DragonTigerItem[] = [
  {
    "rank": 1,
    "ticker": "002086",
    "name": "东方海洋",
    "pct": "+10.02%",
    "netValue": "-0.71亿",
    "orgNet": "-0.41亿",
    "hotMoneyNet": "0.38亿",
    "concepts": [
      "幽门螺杆菌概念",
      "预制菜",
      "猴痘概念"
    ]
  },
  {
    "rank": 4,
    "ticker": "000678",
    "name": "襄阳轴承",
    "pct": "+3.54%",
    "netValue": "1.47亿",
    "orgNet": "-0.08亿",
    "hotMoneyNet": "0.32亿",
    "concepts": [
      "股权转让(并购重组)",
      "减速器",
      "农机"
    ]
  },
  {
    "rank": 6,
    "ticker": "600715",
    "name": "文投控股",
    "pct": "-1.59%",
    "netValue": "-2.46亿",
    "orgNet": "—",
    "hotMoneyNet": "-1.93亿",
    "concepts": [
      "手机游戏",
      "网络游戏",
      "短剧游戏"
    ]
  },
  {
    "rank": 7,
    "ticker": "600327",
    "name": "大东方",
    "pct": "+9.95%",
    "netValue": "0.15亿",
    "orgNet": "—",
    "hotMoneyNet": "0.09亿",
    "concepts": [
      "信托概念",
      "民营医院",
      "预制菜"
    ]
  },
  {
    "rank": 9,
    "ticker": "000530",
    "name": "冰山冷热",
    "pct": "-2.93%",
    "netValue": "-1.67亿",
    "orgNet": "-1.06亿",
    "hotMoneyNet": "-0.32亿",
    "concepts": [
      "冰雪产业",
      "无人零售",
      "军民融合"
    ]
  },
  {
    "rank": 11,
    "ticker": "002310",
    "name": "东方新能",
    "pct": "+2.71%",
    "netValue": "-0.39亿",
    "orgNet": "—",
    "hotMoneyNet": "0.20亿",
    "concepts": [
      "新型城镇化",
      "PPP概念",
      "汽车拆解概念"
    ]
  },
  {
    "rank": 19,
    "ticker": "002172",
    "name": "澳洋健康",
    "pct": "+10.08%",
    "netValue": "2.18亿",
    "orgNet": "-0.59亿",
    "hotMoneyNet": "0.51亿",
    "concepts": [
      "高压氧舱",
      "民营医院",
      "毛发医疗"
    ]
  },
  {
    "rank": 20,
    "ticker": "002343",
    "name": "慈文传媒",
    "pct": "+3.51%",
    "netValue": "-0.03亿",
    "orgNet": "-0.11亿",
    "hotMoneyNet": "0.19亿",
    "concepts": [
      "手机游戏",
      "短剧游戏",
      "AI语料"
    ]
  },
  {
    "rank": 24,
    "ticker": "603466",
    "name": "风语筑",
    "pct": "-4.92%",
    "netValue": "2.40亿",
    "orgNet": "0.35亿",
    "hotMoneyNet": "2.37亿",
    "concepts": [
      "空间计算",
      "AI视频",
      "抖音概念(字节概念)"
    ]
  },
  {
    "rank": 32,
    "ticker": "600127",
    "name": "金健米业",
    "pct": "+2.74%",
    "netValue": "0.79亿",
    "orgNet": "—",
    "hotMoneyNet": "0.77亿",
    "concepts": [
      "玉米",
      "粮食概念",
      "乳业"
    ]
  }
]
