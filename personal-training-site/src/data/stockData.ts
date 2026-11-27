// 本文件由 scripts/generateStockData.mjs 自动生成，请勿手改。
// 数据源: hithink-finance（同花顺金融数据服务），数据日期: 2026-11-27 收盘
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
  "updatedAt": "2026-11-27 收盘",
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
    "value": "3,606.49",
    "change": "+129.61",
    "changePct": "+3.73%",
    "trend": [
      3602.57,
      3584.58,
      3587.83,
      3577.62,
      3533.79,
      3538.95,
      3548.37,
      3476.47,
      3476.88,
      3606.49
    ]
  },
  {
    "name": "沪深300",
    "symbol": "000300.SH",
    "region": "核心资产",
    "value": "4,063.06",
    "change": "+162.51",
    "changePct": "+4.17%",
    "trend": [
      3979.8,
      3976.46,
      3983.77,
      3984.84,
      3954.57,
      3958.29,
      3963.82,
      3898.24,
      3900.55,
      4063.06
    ]
  },
  {
    "name": "中证500",
    "symbol": "000905.SH",
    "region": "中盘成长",
    "value": "6,313.63",
    "change": "+450.29",
    "changePct": "+7.68%",
    "trend": [
      6297.18,
      6283.01,
      6282.22,
      6251.96,
      6006.08,
      6128.99,
      6112.43,
      5890.41,
      5863.34,
      6313.63
    ]
  },
  {
    "name": "中证1000",
    "symbol": "000852.SH",
    "region": "小盘弹性",
    "value": "5,982.91",
    "change": "+451.07",
    "changePct": "+8.15%",
    "trend": [
      6164.62,
      6092.39,
      6052.82,
      5938.9,
      5648.63,
      5812.32,
      5799.01,
      5541.55,
      5531.84,
      5982.91
    ]
  },
  {
    "name": "创业板指",
    "symbol": "399006.SZ",
    "region": "成长风格",
    "value": "2,443.96",
    "change": "+254.14",
    "changePct": "+11.61%",
    "trend": [
      2320.02,
      2292.204,
      2311.621,
      2293.342,
      2212.127,
      2280.204,
      2278.994,
      2183.584,
      2189.823,
      2443.964
    ]
  },
  {
    "name": "科创50",
    "symbol": "000688.SH",
    "region": "硬科技",
    "value": "1,346.25",
    "change": "+176.26",
    "changePct": "+15.07%",
    "trend": [
      1213.68,
      1221.19,
      1247.99,
      1270.78,
      1231.09,
      1227.89,
      1250.09,
      1186.14,
      1169.99,
      1346.25
    ]
  },
  {
    "name": "深证成指",
    "symbol": "399001.SZ",
    "region": "深市主板",
    "value": "10,814.02",
    "change": "+729.97",
    "changePct": "+7.24%",
    "trend": [
      10690.778,
      10638.524,
      10659.412,
      10583.204,
      10256.389,
      10454.37,
      10423.603,
      10086.355,
      10084.044,
      10814.019
    ]
  }
]

export const watchlist: WatchItem[] = [
  {
    "symbol": "510300",
    "name": "沪深300ETF",
    "category": "核心仓",
    "price": "4.162",
    "changePct": "+5.13%",
    "note": "用于观察大盘核心资产，不等同于买入建议。"
  },
  {
    "symbol": "510500",
    "name": "中证500ETF",
    "category": "中盘",
    "price": "6.404",
    "changePct": "+8.76%",
    "note": "适合作为中盘景气和市场广度的观察锚。"
  },
  {
    "symbol": "512100",
    "name": "中证1000ETF",
    "category": "小盘",
    "price": "2.464",
    "changePct": "+9.56%",
    "note": "波动弹性高，50w 账户要限制仓位拥挤。"
  },
  {
    "symbol": "588000",
    "name": "科创50ETF",
    "category": "硬科技",
    "price": "1.447",
    "changePct": "+17.36%",
    "note": "关注半导体、AI、创新药等成长估值修复。"
  },
  {
    "symbol": "159915",
    "name": "创业板ETF",
    "category": "成长",
    "price": "2.471",
    "changePct": "+11.46%",
    "note": "和风险偏好、美债利率、成长股情绪联动更强。"
  },
  {
    "symbol": "512480",
    "name": "半导体ETF",
    "category": "行业主题",
    "price": "0.766",
    "changePct": "+10.06%",
    "note": "主题弹性大，适合监控成交额和拥挤度。"
  },
  {
    "symbol": "515880",
    "name": "通信ETF",
    "category": "AI链条",
    "price": "0.421",
    "changePct": "+9.92%",
    "note": "关注算力、光模块、运营商资本开支。"
  },
  {
    "symbol": "512800",
    "name": "银行ETF",
    "category": "红利/防御",
    "price": "0.913",
    "changePct": "-1.51%",
    "note": "适合观察高股息、防御风格和利率预期。"
  },
  {
    "symbol": "513180",
    "name": "恒生科技ETF",
    "category": "港股弹性",
    "price": "0.454",
    "changePct": "+5.58%",
    "note": "受港股流动性、美元利率和互联网监管预期影响。"
  },
  {
    "symbol": "159941",
    "name": "纳指ETF",
    "category": "海外映射",
    "price": "1.571",
    "changePct": "+3.29%",
    "note": "不作为 A 股替代，只看全球科技风险偏好。"
  }
]

export const sectorPulse: SectorPulse[] = [
  {
    "name": "半导体",
    "changePct": "+14.97%",
    "breadth": "n/a",
    "note": "高弹性行业，重点看成交额放大是否持续。（指数代码 881121.TI）"
  },
  {
    "name": "AI算力",
    "changePct": "+10.34%",
    "breadth": "n/a",
    "note": "东数西算(算力)概念指数，主题强时容易拥挤。（指数代码 885957.TI）"
  },
  {
    "name": "高股息",
    "changePct": "+1.55%",
    "breadth": "n/a",
    "note": "高股息精选概念，防御风格，和利率、避险偏好相关。（指数代码 886072.TI）"
  },
  {
    "name": "消费复苏",
    "changePct": "+2.46%",
    "breadth": "n/a",
    "note": "以白酒行业指数代表消费链条景气验证。（指数代码 881273.TI）"
  },
  {
    "name": "新能源",
    "changePct": "+8.39%",
    "breadth": "n/a",
    "note": "光伏概念指数，供给出清和价格周期是核心变量。（指数代码 885531.TI）"
  },
  {
    "name": "券商",
    "changePct": "+6.15%",
    "breadth": "n/a",
    "note": "证券行业指数，常作为风险偏好和成交额弹性的放大器。（指数代码 881157.TI）"
  }
]

export const domesticFlows: DomesticFlow[] = [
  {
    "name": "两市成交额",
    "value": "2.00万亿",
    "state": "2.00万亿（沪+深）",
    "note": "沪市+深市成交额合计（hithink 指数快照口径），判断行情级别的第一层过滤器。"
  },
  {
    "name": "沪市成交额",
    "value": "9298亿",
    "state": "占两市 46.5%",
    "note": "沪市主板与科创板合计成交，观察权重与大盘活跃度。"
  },
  {
    "name": "深市成交额",
    "value": "1.07万亿",
    "state": "占两市 53.5%",
    "note": "深市主板与中小盘成交，观察成长与题材活跃度。"
  },
  {
    "name": "创业板成交额",
    "value": "5503亿",
    "state": "占深市 51.4%",
    "note": "成长风格成交占比，50w 账户重点关注 ETF 资金而不是短线热榜。"
  }
]

export const stockBreadth = {
  "tradeDate": "2026-11-27",
  "limitUpCount": 423,
  "limitBreakCount": 30,
  "hotStockCount": 30
}

export const limitUpTop: LimitUpItem[] = [
  {
    "ticker": "688498",
    "name": "源杰科技",
    "price": "704.40",
    "pct": "+20.00%",
    "limitUpTime": "13:29",
    "boards": "首板",
    "reason": "光芯片+CPO+17.44亿订单",
    "sealMoney": "1.0亿"
  },
  {
    "ticker": "688072",
    "name": "拓荆科技",
    "price": "547.37",
    "pct": "+20.00%",
    "limitUpTime": "13:47",
    "boards": "首板",
    "reason": "半导体设备+并购重组+薄膜沉积",
    "sealMoney": "0.6亿"
  },
  {
    "ticker": "002371",
    "name": "北方华创",
    "price": "527.38",
    "pct": "+10.00%",
    "limitUpTime": "13:01",
    "boards": "首板",
    "reason": "半导体设备+存储芯片+HBM设备",
    "sealMoney": "4.3亿"
  },
  {
    "ticker": "688502",
    "name": "茂莱光学",
    "price": "427.20",
    "pct": "+20.00%",
    "limitUpTime": "13:49",
    "boards": "首板",
    "reason": "半导体光学+AR/VR检测+光刻机",
    "sealMoney": "0.2亿"
  },
  {
    "ticker": "688037",
    "name": "芯源微",
    "price": "275.40",
    "pct": "+20.00%",
    "limitUpTime": "13:53",
    "boards": "首板",
    "reason": "半导体设备+涂胶显影+化学清洗",
    "sealMoney": "0.2亿"
  },
  {
    "ticker": "688012",
    "name": "中微公司",
    "price": "269.10",
    "pct": "+20.00%",
    "limitUpTime": "14:44",
    "boards": "首板",
    "reason": "半导体设备+存储芯片+回购",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "688361",
    "name": "中科飞测",
    "price": "260.84",
    "pct": "+20.00%",
    "limitUpTime": "13:03",
    "boards": "首板",
    "reason": "半导体量检测+存储芯片+回购",
    "sealMoney": "1.4亿"
  },
  {
    "ticker": "301717",
    "name": "超纯应材",
    "price": "259.42",
    "pct": "+20.00%",
    "limitUpTime": "13:22",
    "boards": "首板",
    "reason": "半导体设备+特殊涂层+在手订单充足",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "688809",
    "name": "强一股份",
    "price": "259.14",
    "pct": "+20.00%",
    "limitUpTime": "13:03",
    "boards": "首板",
    "reason": "存储探针卡+AI算力测试+股份回购",
    "sealMoney": "0.4亿"
  },
  {
    "ticker": "688630",
    "name": "芯碁微装",
    "price": "251.16",
    "pct": "+20.00%",
    "limitUpTime": "11:20",
    "boards": "首板",
    "reason": "拟回购+PCB直写光刻+先进封装",
    "sealMoney": "1.3亿"
  },
  {
    "ticker": "688082",
    "name": "盛美上海",
    "price": "244.80",
    "pct": "+20.00%",
    "limitUpTime": "14:27",
    "boards": "首板",
    "reason": "半导体设备+在手订单高增+清洗设备",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "688019",
    "name": "安集科技",
    "price": "228.85",
    "pct": "+20.00%",
    "limitUpTime": "13:47",
    "boards": "首板",
    "reason": "半导体材料+先进封装+存储芯片",
    "sealMoney": "0.1亿"
  }
]

export const limitBreakTop: LimitBreakItem[] = [
  {
    "ticker": "300706",
    "name": "阿石创",
    "price": "37.03",
    "pct": "+19.95%",
    "openTimes": 6,
    "turnover": "6亿"
  },
  {
    "ticker": "688836",
    "name": "宇树科技",
    "price": "798.70",
    "pct": "+19.92%",
    "openTimes": 1,
    "turnover": "54亿"
  },
  {
    "ticker": "688835",
    "name": "高凯技术",
    "price": "252.65",
    "pct": "+19.74%",
    "openTimes": 2,
    "turnover": "4亿"
  },
  {
    "ticker": "301119",
    "name": "正强股份",
    "price": "25.52",
    "pct": "+19.64%",
    "openTimes": 12,
    "turnover": "3亿"
  },
  {
    "ticker": "301716",
    "name": "鸿富诚",
    "price": "348.20",
    "pct": "+19.52%",
    "openTimes": 4,
    "turnover": "13亿"
  },
  {
    "ticker": "300931",
    "name": "通用电梯",
    "price": "12.78",
    "pct": "+19.44%",
    "openTimes": 9,
    "turnover": "1亿"
  },
  {
    "ticker": "300916",
    "name": "朗特智能",
    "price": "31.76",
    "pct": "+18.91%",
    "openTimes": 2,
    "turnover": "4亿"
  },
  {
    "ticker": "300998",
    "name": "宁波方正",
    "price": "28.55",
    "pct": "+16.06%",
    "openTimes": 1,
    "turnover": "3亿"
  }
]

export const ladderDate: string | null = "2026-11-27"

export const ladderBoards: LadderBoard[] = [
  {
    "label": "2板",
    "count": 22,
    "names": [
      "三佳科技",
      "东易日盛",
      "东晶电子"
    ]
  },
  {
    "label": "3板",
    "count": 3,
    "names": [
      "中央商场",
      "宏达高科",
      "证通电子"
    ]
  },
  {
    "label": "4板",
    "count": 3,
    "names": [
      "全筑股份",
      "利君股份",
      "天圣制药"
    ]
  },
  {
    "label": "6板",
    "count": 1,
    "names": [
      "克来机电"
    ]
  }
]

export const hotStocks: RankItem[] = [
  {
    "rank": 1,
    "ticker": "002242",
    "name": "九阳股份",
    "heat": "13121594",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "600410",
    "name": "华胜天成",
    "heat": "5347924",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "002148",
    "name": "北纬科技",
    "heat": "4907541",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "300308",
    "name": "中际旭创",
    "heat": "4696335",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "000530",
    "name": "冰山冷热",
    "heat": "4535397",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "300502",
    "name": "新易盛",
    "heat": "4497735",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "002579",
    "name": "中京电子",
    "heat": "3885143",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "002685",
    "name": "华东重机",
    "heat": "3409804",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "000158",
    "name": "常山北明",
    "heat": "3395877",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "000678",
    "name": "襄阳轴承",
    "heat": "3204819",
    "rankChange": 0
  }
]

export const skyrockets: RankItem[] = [
  {
    "rank": 1,
    "ticker": "300502",
    "name": "新易盛",
    "heat": "15378.0",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "688836",
    "name": "宇树科技",
    "heat": "14860.1",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "300308",
    "name": "中际旭创",
    "heat": "10933.3",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "300339",
    "name": "润和软件",
    "heat": "8223.7",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "000158",
    "name": "常山北明",
    "heat": "7271.5",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "300394",
    "name": "天孚通信",
    "heat": "6574.2",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "300085",
    "name": "银之杰",
    "heat": "6370.4",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "301236",
    "name": "软通动力",
    "heat": "5882.2",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "688825",
    "name": "长鑫科技",
    "heat": "5072.4",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "920799",
    "name": "艾融软件",
    "heat": "4907.7",
    "rankChange": 1
  }
]

export const dragonTigerTop: DragonTigerItem[] = [
  {
    "rank": 1,
    "ticker": "002242",
    "name": "九阳股份",
    "pct": "+0.60%",
    "netValue": "3.63亿",
    "orgNet": "2.53亿",
    "hotMoneyNet": "—",
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
    "pct": "+10.00%",
    "netValue": "0.69亿",
    "orgNet": "—",
    "hotMoneyNet": "1.22亿",
    "concepts": [
      "东数西算(算力)",
      "云计算",
      "网络安全"
    ]
  },
  {
    "rank": 3,
    "ticker": "000530",
    "name": "冰山冷热",
    "pct": "-4.45%",
    "netValue": "-3.42亿",
    "orgNet": "-3.35亿",
    "hotMoneyNet": "0.13亿",
    "concepts": [
      "无人零售",
      "空气能热泵",
      "冰雪产业"
    ]
  },
  {
    "rank": 4,
    "ticker": "002148",
    "name": "北纬科技",
    "pct": "-5.66%",
    "netValue": "0.22亿",
    "orgNet": "—",
    "hotMoneyNet": "0.13亿",
    "concepts": [
      "网络游戏",
      "手机游戏",
      "抖音概念(字节概念)"
    ]
  },
  {
    "rank": 6,
    "ticker": "002685",
    "name": "华东重机",
    "pct": "-4.70%",
    "netValue": "-1.32亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.01亿",
    "concepts": [
      "航运概念",
      "信创",
      "DeepSeek概念"
    ]
  },
  {
    "rank": 7,
    "ticker": "002086",
    "name": "东方海洋",
    "pct": "-9.01%",
    "netValue": "-1.53亿",
    "orgNet": "0.28亿",
    "hotMoneyNet": "0.15亿",
    "concepts": [
      "幽门螺杆菌概念",
      "猴痘概念",
      "预制菜"
    ]
  },
  {
    "rank": 8,
    "ticker": "000678",
    "name": "襄阳轴承",
    "pct": "-6.06%",
    "netValue": "-1.91亿",
    "orgNet": "0.16亿",
    "hotMoneyNet": "0.64亿",
    "concepts": [
      "股权转让(并购重组)",
      "减速器",
      "农机"
    ]
  },
  {
    "rank": 11,
    "ticker": "600103",
    "name": "青山纸业",
    "pct": "-2.17%",
    "netValue": "-2.18亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.38亿",
    "concepts": [
      "5G",
      "海峡两岸",
      "共封装光学(CPO)"
    ]
  },
  {
    "rank": 13,
    "ticker": "300502",
    "name": "新易盛",
    "pct": "+20.00%",
    "netValue": "6.28亿",
    "orgNet": "-1.28亿",
    "hotMoneyNet": "-1.98亿",
    "concepts": [
      "5G",
      "芯片概念",
      "共封装光学(CPO)"
    ]
  },
  {
    "rank": 17,
    "ticker": "600467",
    "name": "好当家",
    "pct": "-4.04%",
    "netValue": "0.07亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.87亿",
    "concepts": [
      "预制菜",
      "白酒概念",
      "中韩自贸区"
    ]
  }
]
