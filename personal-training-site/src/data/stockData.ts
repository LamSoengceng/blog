// 本文件由 scripts/generateStockData.mjs 自动生成，请勿手改。
// 数据源: hithink-finance（同花顺金融数据服务），数据日期: 2026-10-21 收盘
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
  "updatedAt": "2026-10-21 收盘",
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
    "value": "3,713.03",
    "change": "-22.34",
    "changePct": "-0.60%",
    "trend": [
      3811.9,
      3813.79,
      3797.24,
      3800.86,
      3767.23,
      3707.48,
      3716.28,
      3730.92,
      3735.37,
      3713.03
    ]
  },
  {
    "name": "沪深300",
    "symbol": "000300.SH",
    "region": "核心资产",
    "value": "4,111.93",
    "change": "-40.18",
    "changePct": "-0.97%",
    "trend": [
      4310.28,
      4317.25,
      4287.98,
      4275.68,
      4217.68,
      4166.01,
      4170.61,
      4174.53,
      4152.11,
      4111.93
    ]
  },
  {
    "name": "中证500",
    "symbol": "000905.SH",
    "region": "中盘成长",
    "value": "6,840.56",
    "change": "-0.88",
    "changePct": "-0.01%",
    "trend": [
      7248.43,
      7251.01,
      7093.02,
      7085.09,
      6980.11,
      6769.25,
      6772.75,
      6800.66,
      6841.44,
      6840.56
    ]
  },
  {
    "name": "中证1000",
    "symbol": "000852.SH",
    "region": "小盘弹性",
    "value": "6,780.26",
    "change": "+13.36",
    "changePct": "+0.20%",
    "trend": [
      7138.58,
      7155.91,
      7021.47,
      7023.22,
      6905.17,
      6678.65,
      6681.94,
      6698.3,
      6766.9,
      6780.26
    ]
  },
  {
    "name": "创业板指",
    "symbol": "399006.SZ",
    "region": "成长风格",
    "value": "2,694.71",
    "change": "-44.49",
    "changePct": "-1.62%",
    "trend": [
      3036.657,
      3043.335,
      2963.824,
      2958.345,
      2866.763,
      2783.175,
      2772.384,
      2746.291,
      2739.203,
      2694.713
    ]
  },
  {
    "name": "科创50",
    "symbol": "000688.SH",
    "region": "硬科技",
    "value": "1,343.28",
    "change": "+0.86",
    "changePct": "+0.06%",
    "trend": [
      1456.32,
      1457.27,
      1426.72,
      1427.18,
      1380.26,
      1359.52,
      1358.65,
      1329.19,
      1342.42,
      1343.28
    ]
  },
  {
    "name": "深证成指",
    "symbol": "399001.SZ",
    "region": "深市主板",
    "value": "11,704.35",
    "change": "-96.94",
    "changePct": "-0.82%",
    "trend": [
      12620.897,
      12641.858,
      12384.869,
      12353.699,
      12110.591,
      11816.789,
      11802.459,
      11817.423,
      11801.29,
      11704.354
    ]
  }
]

export const watchlist: WatchItem[] = [
  {
    "symbol": "510300",
    "name": "沪深300ETF",
    "category": "核心仓",
    "price": "4.185",
    "changePct": "-0.83%",
    "note": "用于观察大盘核心资产，不等同于买入建议。"
  },
  {
    "symbol": "510500",
    "name": "中证500ETF",
    "category": "中盘",
    "price": "6.864",
    "changePct": "-0.10%",
    "note": "适合作为中盘景气和市场广度的观察锚。"
  },
  {
    "symbol": "512100",
    "name": "中证1000ETF",
    "category": "小盘",
    "price": "2.749",
    "changePct": "-0.11%",
    "note": "波动弹性高，50w 账户要限制仓位拥挤。"
  },
  {
    "symbol": "588000",
    "name": "科创50ETF",
    "category": "硬科技",
    "price": "1.418",
    "changePct": "+0.07%",
    "note": "关注半导体、AI、创新药等成长估值修复。"
  },
  {
    "symbol": "159915",
    "name": "创业板ETF",
    "category": "成长",
    "price": "2.713",
    "changePct": "-1.56%",
    "note": "和风险偏好、美债利率、成长股情绪联动更强。"
  },
  {
    "symbol": "512480",
    "name": "半导体ETF",
    "category": "行业主题",
    "price": "0.831",
    "changePct": "+0.24%",
    "note": "主题弹性大，适合监控成交额和拥挤度。"
  },
  {
    "symbol": "515880",
    "name": "通信ETF",
    "category": "AI链条",
    "price": "0.535",
    "changePct": "+1.13%",
    "note": "关注算力、光模块、运营商资本开支。"
  },
  {
    "symbol": "512800",
    "name": "银行ETF",
    "category": "红利/防御",
    "price": "0.862",
    "changePct": "-0.46%",
    "note": "适合观察高股息、防御风格和利率预期。"
  },
  {
    "symbol": "513180",
    "name": "恒生科技ETF",
    "category": "港股弹性",
    "price": "0.501",
    "changePct": "-1.57%",
    "note": "受港股流动性、美元利率和互联网监管预期影响。"
  },
  {
    "symbol": "159941",
    "name": "纳指ETF",
    "category": "海外映射",
    "price": "1.712",
    "changePct": "+0.23%",
    "note": "不作为 A 股替代，只看全球科技风险偏好。"
  }
]

export const sectorPulse: SectorPulse[] = [
  {
    "name": "半导体",
    "changePct": "+0.11%",
    "breadth": "n/a",
    "note": "高弹性行业，重点看成交额放大是否持续。（指数代码 881121.TI）"
  },
  {
    "name": "AI算力",
    "changePct": "+0.81%",
    "breadth": "n/a",
    "note": "东数西算(算力)概念指数，主题强时容易拥挤。（指数代码 885957.TI）"
  },
  {
    "name": "高股息",
    "changePct": "-0.89%",
    "breadth": "n/a",
    "note": "高股息精选概念，防御风格，和利率、避险偏好相关。（指数代码 886072.TI）"
  },
  {
    "name": "消费复苏",
    "changePct": "-1.40%",
    "breadth": "n/a",
    "note": "以白酒行业指数代表消费链条景气验证。（指数代码 881273.TI）"
  },
  {
    "name": "新能源",
    "changePct": "-0.24%",
    "breadth": "n/a",
    "note": "光伏概念指数，供给出清和价格周期是核心变量。（指数代码 885531.TI）"
  },
  {
    "name": "券商",
    "changePct": "-1.21%",
    "breadth": "n/a",
    "note": "证券行业指数，常作为风险偏好和成交额弹性的放大器。（指数代码 881157.TI）"
  }
]

export const domesticFlows: DomesticFlow[] = [
  {
    "name": "两市成交额",
    "value": "1.43万亿",
    "state": "1.43万亿（沪+深）",
    "note": "沪市+深市成交额合计（hithink 指数快照口径），判断行情级别的第一层过滤器。"
  },
  {
    "name": "沪市成交额",
    "value": "6428亿",
    "state": "占两市 45.0%",
    "note": "沪市主板与科创板合计成交，观察权重与大盘活跃度。"
  },
  {
    "name": "深市成交额",
    "value": "7866亿",
    "state": "占两市 55.0%",
    "note": "深市主板与中小盘成交，观察成长与题材活跃度。"
  },
  {
    "name": "创业板成交额",
    "value": "3999亿",
    "state": "占深市 50.8%",
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
  "tradeDate": "2026-10-21",
  "limitUpCount": 50,
  "limitBreakCount": 19,
  "hotStockCount": 30
}

export const limitUpTop: LimitUpItem[] = [
  {
    "ticker": "603629",
    "name": "利通电子",
    "price": "92.03",
    "pct": "+10.00%",
    "limitUpTime": "09:54",
    "boards": "首板",
    "reason": "算力租赁+Token业务+英伟达合作",
    "sealMoney": "1.4亿"
  },
  {
    "ticker": "603236",
    "name": "移远通信",
    "price": "83.72",
    "pct": "+10.00%",
    "limitUpTime": "09:46",
    "boards": "2连板",
    "reason": "端侧AI+机器人+通信模组+业绩增长",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "002929",
    "name": "润建股份",
    "price": "56.14",
    "pct": "+9.99%",
    "limitUpTime": "09:35",
    "boards": "3连板",
    "reason": "词元出海+网络安全大模型+算力网络",
    "sealMoney": "1.5亿"
  },
  {
    "ticker": "688286",
    "name": "敏芯股份",
    "price": "52.81",
    "pct": "+20.00%",
    "limitUpTime": "13:25",
    "boards": "首板",
    "reason": "机器人传感+MEMS传感+高可靠应用",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "301159",
    "name": "三维天地",
    "price": "38.76",
    "pct": "+20.00%",
    "limitUpTime": "11:21",
    "boards": "首板",
    "reason": "数据要素+AI应用+具身机器人+检验检测",
    "sealMoney": "0.4亿"
  },
  {
    "ticker": "688500",
    "name": "慧辰股份",
    "price": "37.56",
    "pct": "+20.00%",
    "limitUpTime": "11:27",
    "boards": "首板",
    "reason": "数据要素+数据分析+具身智能+AI应用",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "002792",
    "name": "通宇通讯",
    "price": "32.09",
    "pct": "+10.01%",
    "limitUpTime": "09:52",
    "boards": "首板",
    "reason": "卫星通信+SpaceX+海外客户",
    "sealMoney": "0.6亿"
  },
  {
    "ticker": "001216",
    "name": "华瓷股份",
    "price": "25.20",
    "pct": "+10.00%",
    "limitUpTime": "09:54",
    "boards": "首板",
    "reason": "MLCC粉体+酒器+日用陶瓷",
    "sealMoney": "0.6亿"
  },
  {
    "ticker": "002811",
    "name": "郑中设计",
    "price": "24.16",
    "pct": "+10.02%",
    "limitUpTime": "10:04",
    "boards": "首板",
    "reason": "半导体入股+AI设计+室内设计",
    "sealMoney": "0.7亿"
  },
  {
    "ticker": "002242",
    "name": "九阳股份",
    "price": "22.62",
    "pct": "+10.02%",
    "limitUpTime": "14:24",
    "boards": "2连板",
    "reason": "机器人投资+厨房小家电+豆浆机+“羊”字辈",
    "sealMoney": "0.4亿"
  },
  {
    "ticker": "603721",
    "name": "中广天择",
    "price": "20.82",
    "pct": "+9.98%",
    "limitUpTime": "14:40",
    "boards": "首板",
    "reason": "AI语料+AI漫剧+传媒内容",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "001201",
    "name": "东瑞股份",
    "price": "15.96",
    "pct": "+9.99%",
    "limitUpTime": "09:52",
    "boards": "首板",
    "reason": "生猪养殖+供港活猪+降本增效",
    "sealMoney": "0.3亿"
  }
]

export const limitBreakTop: LimitBreakItem[] = [
  {
    "ticker": "301486",
    "name": "致尚科技",
    "price": "209.72",
    "pct": "+17.12%",
    "openTimes": 2,
    "turnover": "23亿"
  },
  {
    "ticker": "000592",
    "name": "平潭发展",
    "price": "7.19",
    "pct": "+7.47%",
    "openTimes": 10,
    "turnover": "28亿"
  },
  {
    "ticker": "002940",
    "name": "昂利康",
    "price": "25.38",
    "pct": "+7.41%",
    "openTimes": 1,
    "turnover": "8亿"
  },
  {
    "ticker": "603838",
    "name": "四通股份",
    "price": "13.09",
    "pct": "+7.38%",
    "openTimes": 1,
    "turnover": "1亿"
  },
  {
    "ticker": "600319",
    "name": "亚星化学",
    "price": "6.72",
    "pct": "+7.35%",
    "openTimes": 4,
    "turnover": "3亿"
  },
  {
    "ticker": "605488",
    "name": "福莱新材",
    "price": "32.91",
    "pct": "+6.20%",
    "openTimes": 1,
    "turnover": "17亿"
  },
  {
    "ticker": "002355",
    "name": "兴民智通",
    "price": "4.90",
    "pct": "+6.06%",
    "openTimes": 1,
    "turnover": "3亿"
  },
  {
    "ticker": "002777",
    "name": "久远银海",
    "price": "14.50",
    "pct": "+5.99%",
    "openTimes": 2,
    "turnover": "8亿"
  }
]

export const ladderBoards: LadderBoard[] = [
  {
    "label": "2板",
    "count": 12,
    "names": [
      "三峡新材",
      "九阳股份",
      "南威软件"
    ]
  },
  {
    "label": "3板",
    "count": 1,
    "names": [
      "润建股份"
    ]
  },
  {
    "label": "4板",
    "count": 3,
    "names": [
      "东安动力",
      "大业股份",
      "海洋王"
    ]
  }
]

export const hotStocks: RankItem[] = [
  {
    "rank": 1,
    "ticker": "300750",
    "name": "宁德时代",
    "heat": "9663840",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "002242",
    "name": "九阳股份",
    "heat": "5826217",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "600825",
    "name": "新华传媒",
    "heat": "5565742",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "000530",
    "name": "冰山冷热",
    "heat": "3519712",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "002428",
    "name": "云南锗业",
    "heat": "3125510",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "688836",
    "name": "宇树科技",
    "heat": "3093951",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "003029",
    "name": "吉大正元",
    "heat": "2982835",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "688825",
    "name": "长鑫科技",
    "heat": "2660499",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "600487",
    "name": "亨通光电",
    "heat": "2339353",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "300308",
    "name": "中际旭创",
    "heat": "2312120",
    "rankChange": 0
  }
]

export const skyrockets: RankItem[] = [
  {
    "rank": 1,
    "ticker": "002639",
    "name": "雪人集团",
    "heat": "38772.1",
    "rankChange": 1
  },
  {
    "rank": 2,
    "ticker": "603636",
    "name": "南威软件",
    "heat": "31506.7",
    "rankChange": 3
  },
  {
    "rank": 3,
    "ticker": "300296",
    "name": "利亚德",
    "heat": "29781.6",
    "rankChange": 5
  },
  {
    "rank": 4,
    "ticker": "603629",
    "name": "利通电子",
    "heat": "27717.5",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "300750",
    "name": "宁德时代",
    "heat": "27087.2",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "000651",
    "name": "格力电器",
    "heat": "24253.3",
    "rankChange": 2
  },
  {
    "rank": 7,
    "ticker": "002368",
    "name": "太极股份",
    "heat": "23087.2",
    "rankChange": 2
  },
  {
    "rank": 8,
    "ticker": "000592",
    "name": "平潭发展",
    "heat": "21976.8",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "002086",
    "name": "东方海洋",
    "heat": "20846.0",
    "rankChange": 10
  },
  {
    "rank": 10,
    "ticker": "000530",
    "name": "冰山冷热",
    "heat": "20508.1",
    "rankChange": 0
  }
]

export const dragonTigerTop: DragonTigerItem[] = [
  {
    "rank": 1,
    "ticker": "002242",
    "name": "九阳股份",
    "pct": "+10.01%",
    "netValue": "1.05亿",
    "orgNet": "0.40亿",
    "hotMoneyNet": "-0.85亿",
    "concepts": [
      "绿色电力",
      "家用电器",
      "净水概念"
    ]
  },
  {
    "rank": 2,
    "ticker": "688836",
    "name": "宇树科技",
    "pct": "+6.07%",
    "netValue": "2.33亿",
    "orgNet": "1.59亿",
    "hotMoneyNet": "0.52亿",
    "concepts": [
      "人形机器人",
      "注册制次新股",
      "科创次新股"
    ]
  },
  {
    "rank": 5,
    "ticker": "000823",
    "name": "超声电子",
    "pct": "+3.64%",
    "netValue": "-0.96亿",
    "orgNet": "-2.83亿",
    "hotMoneyNet": "—",
    "concepts": [
      "PCB概念",
      "共封装光学(CPO)",
      "MiniLED"
    ]
  },
  {
    "rank": 7,
    "ticker": "000530",
    "name": "冰山冷热",
    "pct": "+4.74%",
    "netValue": "-0.42亿",
    "orgNet": "-0.26亿",
    "hotMoneyNet": "0.12亿",
    "concepts": [
      "冰雪产业",
      "体育产业",
      "中俄贸易概念"
    ]
  },
  {
    "rank": 8,
    "ticker": "003029",
    "name": "吉大正元",
    "pct": "+10.00%",
    "netValue": "0.17亿",
    "orgNet": "—",
    "hotMoneyNet": "—",
    "concepts": [
      "数字货币",
      "电子身份证",
      "跨境支付(CIPS)"
    ]
  },
  {
    "rank": 8,
    "ticker": "003029",
    "name": "吉大正元",
    "pct": "+10.00%",
    "netValue": "0.18亿",
    "orgNet": "—",
    "hotMoneyNet": "0.34亿",
    "concepts": [
      "数字货币",
      "电子身份证",
      "跨境支付(CIPS)"
    ]
  },
  {
    "rank": 12,
    "ticker": "600127",
    "name": "金健米业",
    "pct": "+0.61%",
    "netValue": "0.23亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.98亿",
    "concepts": [
      "乳业",
      "玉米",
      "粮食概念"
    ]
  },
  {
    "rank": 15,
    "ticker": "600241",
    "name": "时代万恒",
    "pct": "+6.91%",
    "netValue": "0.43亿",
    "orgNet": "—",
    "hotMoneyNet": "0.65亿",
    "concepts": [
      "锂电池概念",
      "国企改革"
    ]
  },
  {
    "rank": 17,
    "ticker": "002343",
    "name": "慈文传媒",
    "pct": "-0.10%",
    "netValue": "-1.03亿",
    "orgNet": "-0.75亿",
    "hotMoneyNet": "-0.06亿",
    "concepts": [
      "富时罗素概念股",
      "文化传媒概念",
      "手机游戏"
    ]
  },
  {
    "rank": 18,
    "ticker": "600178",
    "name": "东安动力",
    "pct": "+10.02%",
    "netValue": "0.26亿",
    "orgNet": "—",
    "hotMoneyNet": "—",
    "concepts": [
      "振兴东北",
      "央企国企改革",
      "国企改革"
    ]
  }
]
