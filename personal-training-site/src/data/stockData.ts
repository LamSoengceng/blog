// 本文件由 scripts/generateStockData.mjs 自动生成，请勿手改。
// 数据源: hithink-finance（同花顺金融数据服务），数据日期: 2026-10-16 收盘
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

export type StockEvent = {
  date: string
  title: string
  impact: 'High' | 'Medium' | 'Low'
  note: string
}

export type CapitalMetric = {
  label: string
  value: string
  note: string
}

export type GlobalSignal = {
  name: string
  value: string
  change: string
  read: string
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
  "updatedAt": "2026-10-16 收盘",
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
    "value": "3,716.28",
    "change": "+8.80",
    "changePct": "+0.24%",
    "trend": [
      3823.62,
      3830.45,
      3842.19,
      3811.9,
      3813.79,
      3797.24,
      3800.86,
      3767.23,
      3707.48,
      3716.28
    ]
  },
  {
    "name": "沪深300",
    "symbol": "000300.SH",
    "region": "核心资产",
    "value": "4,170.61",
    "change": "+4.60",
    "changePct": "+0.11%",
    "trend": [
      4340.76,
      4345.21,
      4357.62,
      4310.28,
      4317.25,
      4287.98,
      4275.68,
      4217.68,
      4166.01,
      4170.61
    ]
  },
  {
    "name": "中证500",
    "symbol": "000905.SH",
    "region": "中盘成长",
    "value": "6,772.75",
    "change": "+3.50",
    "changePct": "+0.05%",
    "trend": [
      7402.3,
      7439.63,
      7435.16,
      7248.43,
      7251.01,
      7093.02,
      7085.09,
      6980.11,
      6769.25,
      6772.75
    ]
  },
  {
    "name": "中证1000",
    "symbol": "000852.SH",
    "region": "小盘弹性",
    "value": "6,681.94",
    "change": "+3.29",
    "changePct": "+0.05%",
    "trend": [
      7294.17,
      7325.35,
      7298.82,
      7138.58,
      7155.91,
      7021.47,
      7023.22,
      6905.17,
      6678.65,
      6681.94
    ]
  },
  {
    "name": "创业板指",
    "symbol": "399006.SZ",
    "region": "成长风格",
    "value": "2,772.38",
    "change": "-10.79",
    "changePct": "-0.39%",
    "trend": [
      3139.825,
      3142.563,
      3135.277,
      3036.657,
      3043.335,
      2963.824,
      2958.345,
      2866.763,
      2783.175,
      2772.384
    ]
  },
  {
    "name": "科创50",
    "symbol": "000688.SH",
    "region": "硬科技",
    "value": "1,358.65",
    "change": "-0.87",
    "changePct": "-0.06%",
    "trend": [
      1555.98,
      1569.34,
      1530.01,
      1456.32,
      1457.27,
      1426.72,
      1427.18,
      1380.26,
      1359.52,
      1358.65
    ]
  },
  {
    "name": "深证成指",
    "symbol": "399001.SZ",
    "region": "深市主板",
    "value": "11,802.46",
    "change": "-14.33",
    "changePct": "-0.12%",
    "trend": [
      12858.753,
      12901.947,
      12887.62,
      12620.897,
      12641.858,
      12384.869,
      12353.699,
      12110.591,
      11816.789,
      11802.459
    ]
  }
]

export const watchlist: WatchItem[] = [
  {
    "symbol": "510300",
    "name": "沪深300ETF",
    "category": "核心仓",
    "price": "4.236",
    "changePct": "-0.14%",
    "note": "用于观察大盘核心资产，不等同于买入建议。"
  },
  {
    "symbol": "510500",
    "name": "中证500ETF",
    "category": "中盘",
    "price": "6.809",
    "changePct": "+0.10%",
    "note": "适合作为中盘景气和市场广度的观察锚。"
  },
  {
    "symbol": "512100",
    "name": "中证1000ETF",
    "category": "小盘",
    "price": "2.719",
    "changePct": "+0.52%",
    "note": "波动弹性高，50w 账户要限制仓位拥挤。"
  },
  {
    "symbol": "588000",
    "name": "科创50ETF",
    "category": "硬科技",
    "price": "1.430",
    "changePct": "-0.56%",
    "note": "关注半导体、AI、创新药等成长估值修复。"
  },
  {
    "symbol": "159915",
    "name": "创业板ETF",
    "category": "成长",
    "price": "2.789",
    "changePct": "-0.61%",
    "note": "和风险偏好、美债利率、成长股情绪联动更强。"
  },
  {
    "symbol": "512480",
    "name": "半导体ETF",
    "category": "行业主题",
    "price": "0.834",
    "changePct": "-0.71%",
    "note": "主题弹性大，适合监控成交额和拥挤度。"
  },
  {
    "symbol": "515880",
    "name": "通信ETF",
    "category": "AI链条",
    "price": "0.522",
    "changePct": "+0.19%",
    "note": "关注算力、光模块、运营商资本开支。"
  },
  {
    "symbol": "512800",
    "name": "银行ETF",
    "category": "红利/防御",
    "price": "0.864",
    "changePct": "+0.12%",
    "note": "适合观察高股息、防御风格和利率预期。"
  },
  {
    "symbol": "513180",
    "name": "恒生科技ETF",
    "category": "港股弹性",
    "price": "0.514",
    "changePct": "+0.78%",
    "note": "受港股流动性、美元利率和互联网监管预期影响。"
  },
  {
    "symbol": "159941",
    "name": "纳指ETF",
    "category": "海外映射",
    "price": "1.738",
    "changePct": "+1.58%",
    "note": "不作为 A 股替代，只看全球科技风险偏好。"
  }
]

export const sectorPulse: SectorPulse[] = [
  {
    "name": "半导体",
    "changePct": "-0.74%",
    "breadth": "n/a",
    "note": "高弹性行业，重点看成交额放大是否持续。（指数代码 881121.TI）"
  },
  {
    "name": "AI算力",
    "changePct": "-0.06%",
    "breadth": "n/a",
    "note": "东数西算(算力)概念指数，主题强时容易拥挤。（指数代码 885957.TI）"
  },
  {
    "name": "高股息",
    "changePct": "+0.53%",
    "breadth": "n/a",
    "note": "高股息精选概念，防御风格，和利率、避险偏好相关。（指数代码 886072.TI）"
  },
  {
    "name": "消费复苏",
    "changePct": "+1.95%",
    "breadth": "n/a",
    "note": "以白酒行业指数代表消费链条景气验证。（指数代码 881273.TI）"
  },
  {
    "name": "新能源",
    "changePct": "+0.51%",
    "breadth": "n/a",
    "note": "光伏概念指数，供给出清和价格周期是核心变量。（指数代码 885531.TI）"
  },
  {
    "name": "券商",
    "changePct": "-1.24%",
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
    "value": "7325亿",
    "state": "占两市 47.1%",
    "note": "沪市主板与科创板合计成交，观察权重与大盘活跃度。"
  },
  {
    "name": "深市成交额",
    "value": "8229亿",
    "state": "占两市 52.9%",
    "note": "深市主板与中小盘成交，观察成长与题材活跃度。"
  },
  {
    "name": "创业板成交额",
    "value": "3962亿",
    "state": "占深市 48.1%",
    "note": "成长风格成交占比，50w 账户重点关注 ETF 资金而不是短线热榜。"
  }
]

export const globalSignals: GlobalSignal[] = [
  {
    "name": "美元兑离岸人民币",
    "value": "静态参考",
    "change": "—",
    "read": "hithink A 股服务不提供汇率行情；人民币压力上升时外资和港股风险偏好通常承压。"
  },
  {
    "name": "10Y美债收益率",
    "value": "静态参考",
    "change": "—",
    "read": "美债下行通常利好成长估值，需结合通胀数据；建议接入 FRED 等外部源。"
  },
  {
    "name": "美元指数",
    "value": "静态参考",
    "change": "—",
    "read": "美元走强会影响新兴市场资金和大宗商品。"
  },
  {
    "name": "COMEX黄金",
    "value": "静态参考",
    "change": "—",
    "read": "避险或实际利率变化会影响有色、贵金属和风险偏好。"
  },
  {
    "name": "布伦特原油",
    "value": "静态参考",
    "change": "—",
    "read": "油价影响通胀预期、化工链和航空运输成本。"
  },
  {
    "name": "纳指期货",
    "value": "静态参考",
    "change": "—",
    "read": "用于判断全球科技链条对 A 股成长风格的外溢影响。"
  }
]

export const stockEvents: StockEvent[] = [
  {
    "date": "每周",
    "title": "国内宏观数据：社融、M2、CPI/PPI（需外部源）",
    "impact": "High",
    "note": "决定政策预期、顺周期风格和债股跷跷板；hithink 不提供宏观日历。"
  },
  {
    "date": "每周",
    "title": "重要行业政策与交易所公告",
    "impact": "High",
    "note": "A 股主题交易对政策边际变化非常敏感。"
  },
  {
    "date": "每周",
    "title": "美股科技财报与纳指波动",
    "impact": "Medium",
    "note": "影响 AI、半导体、港股科技和成长风格映射。"
  },
  {
    "date": "每月",
    "title": "美国 CPI / 非农 / FOMC",
    "impact": "High",
    "note": "通过美元、美债、人民币汇率影响国内风险偏好。"
  }
]

export const stockChecklist = [
  "仓位：总仓位、单行业暴露、单一主题暴露是否超过计划。",
  "市场状态：指数方向、成交额、涨停家数与连板高度是否支持进攻。",
  "涨停结构：首板/连板梯队是否健康，炸板率是否抬升。",
  "资金结构：两市成交额与 ETF 行情是否一致；融资余额等需外部源补充。",
  "行业拥挤：热门行业是否只有少数龙头上涨，还是板块广度同步扩散。",
  "龙虎榜与热榜：观察机构/游资动向，不机械跟随热度。",
  "外部变量：美元/人民币、美债、纳指、黄金、原油是否改变风险预算。"
]

export const stockDataPlan = [
  "真实行情：hithink-finance CLI（同花顺）index snapshot / fund snapshot 拉取指数与 ETF 快照。",
  "涨停结构：special limit-up-pool / limit-break-pool / limit-up-ladder 取涨停池、炸板池与连板天梯。",
  "市场热度：special hot-stock / skyrocket / dragon-tiger 取热股榜、飙升榜与龙虎榜。",
  "行业板块：index catalog 行业/概念指数（.TI）映射页面 6 个板块，取真实涨跌幅。",
  "更新链路：npm run update:stock（交易日收盘后运行）。",
  "前端只读取生成的数据文件，不暴露任何 API key；失败时保留上一版并显示 stale 状态。"
]

export const stockBreadth = {
  "tradeDate": "2026-10-16",
  "limitUpCount": 59,
  "limitBreakCount": 30,
  "hotStockCount": 30
}

export const limitUpTop: LimitUpItem[] = [
  {
    "ticker": "605178",
    "name": "时空科技",
    "price": "61.44",
    "pct": "+10.01%",
    "limitUpTime": "10:55",
    "boards": "首板",
    "reason": "半导体存储+重组审核中止+智慧城市",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "301586",
    "name": "佳力奇",
    "price": "33.00",
    "pct": "+20.00%",
    "limitUpTime": "13:13",
    "boards": "首板",
    "reason": "低空经济+军工复材",
    "sealMoney": "0.0亿"
  },
  {
    "ticker": "601606",
    "name": "长城军工",
    "price": "31.92",
    "pct": "+9.99%",
    "limitUpTime": "09:38",
    "boards": "首板",
    "reason": "弹药装备+订单交付+军民协同",
    "sealMoney": "2.1亿"
  },
  {
    "ticker": "603173",
    "name": "福斯达",
    "price": "30.05",
    "pct": "+9.99%",
    "limitUpTime": "10:41",
    "boards": "首板",
    "reason": "深冷装备+空气分离设备+海外业务",
    "sealMoney": "0.6亿"
  },
  {
    "ticker": "603197",
    "name": "保隆科技",
    "price": "29.39",
    "pct": "+9.99%",
    "limitUpTime": "09:30",
    "boards": "首板",
    "reason": "飞行汽车+特斯拉概念+机器人传感器",
    "sealMoney": "1.9亿"
  },
  {
    "ticker": "601811",
    "name": "新华文轩",
    "price": "28.14",
    "pct": "+10.01%",
    "limitUpTime": "09:56",
    "boards": "3连板",
    "reason": "出版传媒+数字教育+民族出版收购",
    "sealMoney": "0.2亿"
  },
  {
    "ticker": "002683",
    "name": "广东宏大",
    "price": "27.90",
    "pct": "+10.02%",
    "limitUpTime": "09:45",
    "boards": "首板",
    "reason": "防务装备+卫星星座+矿服民爆",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "002933",
    "name": "新兴装备",
    "price": "27.75",
    "pct": "+9.99%",
    "limitUpTime": "09:45",
    "boards": "首板",
    "reason": "航空装备+机器人",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "688592",
    "name": "司南导航",
    "price": "24.98",
    "pct": "+19.98%",
    "limitUpTime": "09:48",
    "boards": "首板",
    "reason": "商业航天+北斗导航+无人机",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "001358",
    "name": "兴欣新材",
    "price": "24.92",
    "pct": "+10.02%",
    "limitUpTime": "09:30",
    "boards": "首板",
    "reason": "光刻胶原料+电子化学品+有机胺",
    "sealMoney": "0.2亿"
  },
  {
    "ticker": "603955",
    "name": "大千生态",
    "price": "23.57",
    "pct": "+9.99%",
    "limitUpTime": "10:28",
    "boards": "首板",
    "reason": "宠物消费+生态建设+文旅运营",
    "sealMoney": "0.6亿"
  },
  {
    "ticker": "600418",
    "name": "江淮汽车",
    "price": "22.37",
    "pct": "+9.98%",
    "limitUpTime": "09:31",
    "boards": "首板",
    "reason": "三部门联合调查+尊界V800",
    "sealMoney": "2.3亿"
  }
]

export const limitBreakTop: LimitBreakItem[] = [
  {
    "ticker": "300006",
    "name": "莱美药业",
    "price": "9.75",
    "pct": "+19.93%",
    "openTimes": 5,
    "turnover": "30亿"
  },
  {
    "ticker": "688385",
    "name": "复旦微电",
    "price": "54.21",
    "pct": "+14.61%",
    "openTimes": 4,
    "turnover": "25亿"
  },
  {
    "ticker": "301230",
    "name": "泓博医药",
    "price": "36.71",
    "pct": "+14.22%",
    "openTimes": 8,
    "turnover": "15亿"
  },
  {
    "ticker": "300900",
    "name": "广联航空",
    "price": "21.28",
    "pct": "+13.43%",
    "openTimes": 2,
    "turnover": "11亿"
  },
  {
    "ticker": "300810",
    "name": "中科海讯",
    "price": "24.58",
    "pct": "+13.22%",
    "openTimes": 1,
    "turnover": "3亿"
  },
  {
    "ticker": "000678",
    "name": "襄阳轴承",
    "price": "10.93",
    "pct": "+9.96%",
    "openTimes": 2,
    "turnover": "6亿"
  },
  {
    "ticker": "002531",
    "name": "天顺风能",
    "price": "7.41",
    "pct": "+9.94%",
    "openTimes": 5,
    "turnover": "13亿"
  },
  {
    "ticker": "002976",
    "name": "瑞玛精密",
    "price": "19.91",
    "pct": "+9.52%",
    "openTimes": 3,
    "turnover": "4亿"
  }
]

export const ladderBoards: LadderBoard[] = [
  {
    "label": "2板",
    "count": 4,
    "names": [
      "东方嘉盛",
      "吉大正元",
      "尖峰集团"
    ]
  },
  {
    "label": "3板",
    "count": 1,
    "names": [
      "新华文轩"
    ]
  },
  {
    "label": "4板",
    "count": 1,
    "names": [
      "冰山冷热"
    ]
  },
  {
    "label": "7板+",
    "count": 1,
    "names": [
      "新华传媒"
    ]
  }
]

export const hotStocks: RankItem[] = [
  {
    "rank": 1,
    "ticker": "600825",
    "name": "新华传媒",
    "heat": "4795503",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "601811",
    "name": "新华文轩",
    "heat": "4304358",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "600418",
    "name": "江淮汽车",
    "heat": "3837406",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "600127",
    "name": "金健米业",
    "heat": "3320417",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "000530",
    "name": "冰山冷热",
    "heat": "3298488",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "688825",
    "name": "长鑫科技",
    "heat": "3107002",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "002343",
    "name": "慈文传媒",
    "heat": "3000967",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "300308",
    "name": "中际旭创",
    "heat": "2855051",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "600869",
    "name": "远东股份",
    "heat": "2646031",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "600693",
    "name": "东百集团",
    "heat": "2294135",
    "rankChange": 0
  }
]

export const skyrockets: RankItem[] = [
  {
    "rank": 1,
    "ticker": "603259",
    "name": "药明康德",
    "heat": "65268.4",
    "rankChange": 1
  },
  {
    "rank": 2,
    "ticker": "600418",
    "name": "江淮汽车",
    "heat": "40864.8",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "600825",
    "name": "新华传媒",
    "heat": "36134.2",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "002085",
    "name": "万丰奥威",
    "heat": "24343.4",
    "rankChange": 3
  },
  {
    "rank": 5,
    "ticker": "001696",
    "name": "宗申动力",
    "heat": "18827.3",
    "rankChange": 1
  },
  {
    "rank": 6,
    "ticker": "601606",
    "name": "长城军工",
    "heat": "18389.2",
    "rankChange": 4
  },
  {
    "rank": 7,
    "ticker": "300903",
    "name": "科翔股份",
    "heat": "16609.4",
    "rankChange": 18
  },
  {
    "rank": 8,
    "ticker": "300045",
    "name": "华力创通",
    "heat": "15716.0",
    "rankChange": 4
  },
  {
    "rank": 9,
    "ticker": "300411",
    "name": "金盾股份",
    "heat": "14446.1",
    "rankChange": 14
  },
  {
    "rank": 10,
    "ticker": "603197",
    "name": "保隆科技",
    "heat": "14300.1",
    "rankChange": 21
  }
]

export const dragonTigerTop: DragonTigerItem[] = [
  {
    "rank": 1,
    "ticker": "000823",
    "name": "超声电子",
    "pct": "+5.38%",
    "netValue": "-2.37亿",
    "orgNet": "-1.64亿",
    "hotMoneyNet": "-1.08亿",
    "concepts": [
      "PCB概念",
      "共封装光学(CPO)",
      "MiniLED"
    ]
  },
  {
    "rank": 3,
    "ticker": "600869",
    "name": "远东股份",
    "pct": "+6.79%",
    "netValue": "2.64亿",
    "orgNet": "-0.35亿",
    "hotMoneyNet": "1.70亿",
    "concepts": [
      "PET铜箔",
      "铜缆高速连接",
      "光纤概念"
    ]
  },
  {
    "rank": 4,
    "ticker": "601811",
    "name": "新华文轩",
    "pct": "+10.02%",
    "netValue": "0.13亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.18亿",
    "concepts": [
      "文化传媒概念",
      "知识产权保护",
      "NFT概念"
    ]
  },
  {
    "rank": 4,
    "ticker": "601811",
    "name": "新华文轩",
    "pct": "+10.02%",
    "netValue": "0.45亿",
    "orgNet": "—",
    "hotMoneyNet": "0.27亿",
    "concepts": [
      "文化传媒概念",
      "知识产权保护",
      "NFT概念"
    ]
  },
  {
    "rank": 5,
    "ticker": "600812",
    "name": "华北制药",
    "pct": "+10.05%",
    "netValue": "0.76亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.03亿",
    "concepts": [
      "生物疫苗",
      "仿制药一致性评价",
      "维生素"
    ]
  },
  {
    "rank": 6,
    "ticker": "000530",
    "name": "冰山冷热",
    "pct": "+10.00%",
    "netValue": "-0.14亿",
    "orgNet": "-0.06亿",
    "hotMoneyNet": "-0.70亿",
    "concepts": [
      "冰雪产业",
      "体育产业",
      "中俄贸易概念"
    ]
  },
  {
    "rank": 8,
    "ticker": "600693",
    "name": "东百集团",
    "pct": "-10.01%",
    "netValue": "-0.19亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.13亿",
    "concepts": [
      "免税店",
      "旅游概念",
      "IP经济(谷子经济)"
    ]
  },
  {
    "rank": 10,
    "ticker": "600127",
    "name": "金健米业",
    "pct": "-9.01%",
    "netValue": "0.72亿",
    "orgNet": "—",
    "hotMoneyNet": "0.26亿",
    "concepts": [
      "乳业",
      "玉米",
      "粮食概念"
    ]
  },
  {
    "rank": 11,
    "ticker": "002639",
    "name": "雪人集团",
    "pct": "+1.12%",
    "netValue": "0.99亿",
    "orgNet": "0.44亿",
    "hotMoneyNet": "—",
    "concepts": [
      "天然气",
      "冰雪产业",
      "空气能热泵"
    ]
  },
  {
    "rank": 12,
    "ticker": "002343",
    "name": "慈文传媒",
    "pct": "+10.00%",
    "netValue": "-0.18亿",
    "orgNet": "-0.23亿",
    "hotMoneyNet": "0.27亿",
    "concepts": [
      "富时罗素概念股",
      "文化传媒概念",
      "手机游戏"
    ]
  }
]
