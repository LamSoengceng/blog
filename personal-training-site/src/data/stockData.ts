// 本文件由 scripts/generateStockData.mjs 自动生成，请勿手改。
// 数据源: hithink-finance（同花顺金融数据服务），数据日期: 2026-10-15 收盘
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
  "updatedAt": "2026-10-15 收盘",
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
    "value": "3,707.48",
    "change": "-59.75",
    "changePct": "-1.59%",
    "trend": [
      3888.37,
      3823.62,
      3830.45,
      3842.19,
      3811.9,
      3813.79,
      3797.24,
      3800.86,
      3767.23,
      3707.48
    ]
  },
  {
    "name": "沪深300",
    "symbol": "000300.SH",
    "region": "核心资产",
    "value": "4,166.01",
    "change": "-51.67",
    "changePct": "-1.23%",
    "trend": [
      4439.14,
      4340.76,
      4345.21,
      4357.62,
      4310.28,
      4317.25,
      4287.98,
      4275.68,
      4217.68,
      4166.01
    ]
  },
  {
    "name": "中证500",
    "symbol": "000905.SH",
    "region": "中盘成长",
    "value": "6,769.25",
    "change": "-210.86",
    "changePct": "-3.02%",
    "trend": [
      7624.07,
      7402.3,
      7439.63,
      7435.16,
      7248.43,
      7251.01,
      7093.02,
      7085.09,
      6980.11,
      6769.25
    ]
  },
  {
    "name": "中证1000",
    "symbol": "000852.SH",
    "region": "小盘弹性",
    "value": "6,678.65",
    "change": "-226.52",
    "changePct": "-3.28%",
    "trend": [
      7570.14,
      7294.17,
      7325.35,
      7298.82,
      7138.58,
      7155.91,
      7021.47,
      7023.22,
      6905.17,
      6678.65
    ]
  },
  {
    "name": "创业板指",
    "symbol": "399006.SZ",
    "region": "成长风格",
    "value": "2,783.17",
    "change": "-83.59",
    "changePct": "-2.92%",
    "trend": [
      3288.948,
      3139.825,
      3142.563,
      3135.277,
      3036.657,
      3043.335,
      2963.824,
      2958.345,
      2866.763,
      2783.175
    ]
  },
  {
    "name": "科创50",
    "symbol": "000688.SH",
    "region": "硬科技",
    "value": "1,359.52",
    "change": "-20.74",
    "changePct": "-1.50%",
    "trend": [
      1621.87,
      1555.98,
      1569.34,
      1530.01,
      1456.32,
      1457.27,
      1426.72,
      1427.18,
      1380.26,
      1359.52
    ]
  },
  {
    "name": "深证成指",
    "symbol": "399001.SZ",
    "region": "深市主板",
    "value": "11,816.79",
    "change": "-293.80",
    "changePct": "-2.43%",
    "trend": [
      13316.969,
      12858.753,
      12901.947,
      12887.62,
      12620.897,
      12641.858,
      12384.869,
      12353.699,
      12110.591,
      11816.789
    ]
  }
]

export const watchlist: WatchItem[] = [
  {
    "symbol": "510300",
    "name": "沪深300ETF",
    "category": "核心仓",
    "price": "4.242",
    "changePct": "-1.21%",
    "note": "用于观察大盘核心资产，不等同于买入建议。"
  },
  {
    "symbol": "510500",
    "name": "中证500ETF",
    "category": "中盘",
    "price": "6.802",
    "changePct": "-3.17%",
    "note": "适合作为中盘景气和市场广度的观察锚。"
  },
  {
    "symbol": "512100",
    "name": "中证1000ETF",
    "category": "小盘",
    "price": "2.705",
    "changePct": "-3.74%",
    "note": "波动弹性高，50w 账户要限制仓位拥挤。"
  },
  {
    "symbol": "588000",
    "name": "科创50ETF",
    "category": "硬科技",
    "price": "1.438",
    "changePct": "-1.37%",
    "note": "关注半导体、AI、创新药等成长估值修复。"
  },
  {
    "symbol": "159915",
    "name": "创业板ETF",
    "category": "成长",
    "price": "2.806",
    "changePct": "-2.94%",
    "note": "和风险偏好、美债利率、成长股情绪联动更强。"
  },
  {
    "symbol": "512480",
    "name": "半导体ETF",
    "category": "行业主题",
    "price": "0.840",
    "changePct": "-2.10%",
    "note": "主题弹性大，适合监控成交额和拥挤度。"
  },
  {
    "symbol": "515880",
    "name": "通信ETF",
    "category": "AI链条",
    "price": "0.521",
    "changePct": "-4.93%",
    "note": "关注算力、光模块、运营商资本开支。"
  },
  {
    "symbol": "512800",
    "name": "银行ETF",
    "category": "红利/防御",
    "price": "0.863",
    "changePct": "-0.23%",
    "note": "适合观察高股息、防御风格和利率预期。"
  },
  {
    "symbol": "513180",
    "name": "恒生科技ETF",
    "category": "港股弹性",
    "price": "0.510",
    "changePct": "-3.04%",
    "note": "受港股流动性、美元利率和互联网监管预期影响。"
  },
  {
    "symbol": "159941",
    "name": "纳指ETF",
    "category": "海外映射",
    "price": "1.711",
    "changePct": "-3.17%",
    "note": "不作为 A 股替代，只看全球科技风险偏好。"
  }
]

export const sectorPulse: SectorPulse[] = [
  {
    "name": "半导体",
    "changePct": "-3.67%",
    "breadth": "n/a",
    "note": "高弹性行业，重点看成交额放大是否持续。（指数代码 881121.TI）"
  },
  {
    "name": "AI算力",
    "changePct": "-3.35%",
    "breadth": "n/a",
    "note": "东数西算(算力)概念指数，主题强时容易拥挤。（指数代码 885957.TI）"
  },
  {
    "name": "高股息",
    "changePct": "-1.94%",
    "breadth": "n/a",
    "note": "高股息精选概念，防御风格，和利率、避险偏好相关。（指数代码 886072.TI）"
  },
  {
    "name": "消费复苏",
    "changePct": "+1.22%",
    "breadth": "n/a",
    "note": "以白酒行业指数代表消费链条景气验证。（指数代码 881273.TI）"
  },
  {
    "name": "新能源",
    "changePct": "-3.37%",
    "breadth": "n/a",
    "note": "光伏概念指数，供给出清和价格周期是核心变量。（指数代码 885531.TI）"
  },
  {
    "name": "券商",
    "changePct": "+0.32%",
    "breadth": "n/a",
    "note": "证券行业指数，常作为风险偏好和成交额弹性的放大器。（指数代码 881157.TI）"
  }
]

export const domesticFlows: DomesticFlow[] = [
  {
    "name": "两市成交额",
    "value": "1.63万亿",
    "state": "1.63万亿（沪+深）",
    "note": "沪市+深市成交额合计（hithink 指数快照口径），判断行情级别的第一层过滤器。"
  },
  {
    "name": "沪市成交额",
    "value": "7744亿",
    "state": "占两市 47.4%",
    "note": "沪市主板与科创板合计成交，观察权重与大盘活跃度。"
  },
  {
    "name": "深市成交额",
    "value": "8586亿",
    "state": "占两市 52.6%",
    "note": "深市主板与中小盘成交，观察成长与题材活跃度。"
  },
  {
    "name": "创业板成交额",
    "value": "4171亿",
    "state": "占深市 48.6%",
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
  "tradeDate": "2026-10-15",
  "limitUpCount": 36,
  "limitBreakCount": 7,
  "hotStockCount": 30
}

export const limitUpTop: LimitUpItem[] = [
  {
    "ticker": "605058",
    "name": "澳弘电子",
    "price": "70.49",
    "pct": "+10.00%",
    "limitUpTime": "10:08",
    "boards": "首板",
    "reason": "PCB+AI服务器电源+汽车电子",
    "sealMoney": "0.2亿"
  },
  {
    "ticker": "603200",
    "name": "上海洗霸",
    "price": "53.35",
    "pct": "+10.00%",
    "limitUpTime": "14:12",
    "boards": "首板",
    "reason": "固态电池+水处理+数据中心液冷",
    "sealMoney": "0.8亿"
  },
  {
    "ticker": "301282",
    "name": "金禄电子",
    "price": "49.92",
    "pct": "+20.00%",
    "limitUpTime": "09:33",
    "boards": "首板",
    "reason": "AI算力PCB+业绩预增+汽车PCB",
    "sealMoney": "2.8亿"
  },
  {
    "ticker": "001225",
    "name": "和泰机电",
    "price": "38.50",
    "pct": "+10.00%",
    "limitUpTime": "09:31",
    "boards": "首板",
    "reason": "物料输送设备+一带一路+水泥建材",
    "sealMoney": "2.6亿"
  },
  {
    "ticker": "605003",
    "name": "众望布艺",
    "price": "25.96",
    "pct": "+10.00%",
    "limitUpTime": "11:18",
    "boards": "首板",
    "reason": "装饰面料+外销+股权激励",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "601811",
    "name": "新华文轩",
    "price": "25.58",
    "pct": "+10.02%",
    "limitUpTime": "14:49",
    "boards": "2连板",
    "reason": "出版传媒+数字教育+民族出版收购",
    "sealMoney": "0.2亿"
  },
  {
    "ticker": "002134",
    "name": "天津普林",
    "price": "24.34",
    "pct": "+9.99%",
    "limitUpTime": "09:35",
    "boards": "首板",
    "reason": "PCB+股票期权+产能释放",
    "sealMoney": "0.2亿"
  },
  {
    "ticker": "603690",
    "name": "至纯科技",
    "price": "23.77",
    "pct": "+10.00%",
    "limitUpTime": "10:06",
    "boards": "首板",
    "reason": "半导体湿法设备+HBM+高纯工艺系统",
    "sealMoney": "0.7亿"
  },
  {
    "ticker": "002815",
    "name": "崇达技术",
    "price": "23.25",
    "pct": "+9.98%",
    "limitUpTime": "09:25",
    "boards": "首板",
    "reason": "业绩预增+高端PCB+服务器PCB",
    "sealMoney": "3.3亿"
  },
  {
    "ticker": "603172",
    "name": "万丰股份",
    "price": "20.53",
    "pct": "+10.02%",
    "limitUpTime": "13:39",
    "boards": "首板",
    "reason": "分散染料+产能翻番+业绩增长",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "603386",
    "name": "骏亚科技",
    "price": "20.25",
    "pct": "+9.99%",
    "limitUpTime": "09:58",
    "boards": "首板",
    "reason": "PCB+高多层HDI+人形机器人",
    "sealMoney": "0.6亿"
  },
  {
    "ticker": "003029",
    "name": "吉大正元",
    "price": "19.99",
    "pct": "+10.02%",
    "limitUpTime": "09:49",
    "boards": "首板",
    "reason": "密码安全+数字货币+商业航天",
    "sealMoney": "0.3亿"
  }
]

export const limitBreakTop: LimitBreakItem[] = [
  {
    "ticker": "688648",
    "name": "中邮科技",
    "price": "30.10",
    "pct": "+12.78%",
    "openTimes": 2,
    "turnover": "3亿"
  },
  {
    "ticker": "301025",
    "name": "读客文化",
    "price": "11.73",
    "pct": "+7.42%",
    "openTimes": 1,
    "turnover": "7亿"
  },
  {
    "ticker": "000892",
    "name": "欢瑞世纪",
    "price": "5.45",
    "pct": "+6.24%",
    "openTimes": 8,
    "turnover": "15亿"
  },
  {
    "ticker": "000692",
    "name": "惠天热电",
    "price": "4.73",
    "pct": "+4.65%",
    "openTimes": 1,
    "turnover": "4亿"
  },
  {
    "ticker": "000710",
    "name": "贝瑞基因",
    "price": "11.00",
    "pct": "+4.17%",
    "openTimes": 1,
    "turnover": "8亿"
  },
  {
    "ticker": "603258",
    "name": "电魂网络",
    "price": "16.81",
    "pct": "+4.09%",
    "openTimes": 2,
    "turnover": "6亿"
  },
  {
    "ticker": "603533",
    "name": "掌阅科技",
    "price": "29.01",
    "pct": "-3.04%",
    "openTimes": 2,
    "turnover": "35亿"
  }
]

export const ladderBoards: LadderBoard[] = [
  {
    "label": "2板",
    "count": 2,
    "names": [
      "富春染织",
      "新华文轩"
    ]
  },
  {
    "label": "3板",
    "count": 2,
    "names": [
      "冰山冷热",
      "阳光乳业"
    ]
  },
  {
    "label": "5板",
    "count": 2,
    "names": [
      "慈文传媒",
      "百洋股份"
    ]
  }
]

export const hotStocks: RankItem[] = [
  {
    "rank": 1,
    "ticker": "601811",
    "name": "新华文轩",
    "heat": "4019293",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "000823",
    "name": "超声电子",
    "heat": "3584704",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "300308",
    "name": "中际旭创",
    "heat": "3381486",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "600693",
    "name": "东百集团",
    "heat": "3031231",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "000530",
    "name": "冰山冷热",
    "heat": "2937987",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "688825",
    "name": "长鑫科技",
    "heat": "2926224",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "002343",
    "name": "慈文传媒",
    "heat": "2833669",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "600127",
    "name": "金健米业",
    "heat": "2732754",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "301569",
    "name": "联亚药业",
    "heat": "2630418",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "605058",
    "name": "澳弘电子",
    "heat": "2588014",
    "rankChange": 0
  }
]

export const skyrockets: RankItem[] = [
  {
    "rank": 1,
    "ticker": "301308",
    "name": "江波龙",
    "heat": "58368.4",
    "rankChange": 8
  },
  {
    "rank": 2,
    "ticker": "688041",
    "name": "海光信息",
    "heat": "31425.7",
    "rankChange": 19
  },
  {
    "rank": 3,
    "ticker": "002460",
    "name": "赣锋锂业",
    "heat": "29755.8",
    "rankChange": 12
  },
  {
    "rank": 4,
    "ticker": "301569",
    "name": "联亚药业",
    "heat": "25347.0",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "603200",
    "name": "上海洗霸",
    "heat": "23221.0",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "688825",
    "name": "长鑫科技",
    "heat": "21460.7",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "300014",
    "name": "亿纬锂能",
    "heat": "20258.7",
    "rankChange": 24
  },
  {
    "rank": 8,
    "ticker": "300502",
    "name": "新易盛",
    "heat": "19411.3",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "300111",
    "name": "向日葵",
    "heat": "19046.3",
    "rankChange": 1
  },
  {
    "rank": 10,
    "ticker": "600721",
    "name": "百花医药",
    "heat": "18416.2",
    "rankChange": 1
  }
]

export const dragonTigerTop: DragonTigerItem[] = [
  {
    "rank": 1,
    "ticker": "600693",
    "name": "东百集团",
    "pct": "-0.89%",
    "netValue": "-0.26亿",
    "orgNet": "—",
    "hotMoneyNet": "1.00亿",
    "concepts": [
      "冷链物流",
      "免税店",
      "IP经济(谷子经济)"
    ]
  },
  {
    "rank": 2,
    "ticker": "605577",
    "name": "龙版传媒",
    "pct": "-3.32%",
    "netValue": "-0.53亿",
    "orgNet": "—",
    "hotMoneyNet": "0.24亿",
    "concepts": [
      "文化传媒概念",
      "IP经济(谷子经济)",
      "AI视频"
    ]
  },
  {
    "rank": 3,
    "ticker": "601811",
    "name": "新华文轩",
    "pct": "+9.98%",
    "netValue": "0.32亿",
    "orgNet": "—",
    "hotMoneyNet": "0.23亿",
    "concepts": [
      "文化传媒概念",
      "知识产权保护",
      "NFT概念"
    ]
  },
  {
    "rank": 4,
    "ticker": "600127",
    "name": "金健米业",
    "pct": "+1.44%",
    "netValue": "-0.99亿",
    "orgNet": "—",
    "hotMoneyNet": "-1.21亿",
    "concepts": [
      "乳业",
      "玉米",
      "粮食概念"
    ]
  },
  {
    "rank": 5,
    "ticker": "002639",
    "name": "雪人集团",
    "pct": "+4.18%",
    "netValue": "0.73亿",
    "orgNet": "0.38亿",
    "hotMoneyNet": "—",
    "concepts": [
      "空气能热泵",
      "核电",
      "海工装备"
    ]
  },
  {
    "rank": 9,
    "ticker": "002343",
    "name": "慈文传媒",
    "pct": "+10.05%",
    "netValue": "0.43亿",
    "orgNet": "0.11亿",
    "hotMoneyNet": "0.08亿",
    "concepts": [
      "富时罗素概念股",
      "文化传媒概念",
      "手机游戏"
    ]
  },
  {
    "rank": 10,
    "ticker": "000823",
    "name": "超声电子",
    "pct": "+9.99%",
    "netValue": "0.82亿",
    "orgNet": "-0.22亿",
    "hotMoneyNet": "1.42亿",
    "concepts": [
      "PCB概念",
      "共封装光学(CPO)",
      "MiniLED"
    ]
  },
  {
    "rank": 10,
    "ticker": "000823",
    "name": "超声电子",
    "pct": "+9.99%",
    "netValue": "-0.01亿",
    "orgNet": "—",
    "hotMoneyNet": "0.26亿",
    "concepts": [
      "PCB概念",
      "共封装光学(CPO)",
      "MiniLED"
    ]
  },
  {
    "rank": 11,
    "ticker": "600241",
    "name": "时代万恒",
    "pct": "+2.72%",
    "netValue": "-1.65亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.41亿",
    "concepts": [
      "国企改革",
      "锂电池概念"
    ]
  },
  {
    "rank": 15,
    "ticker": "605136",
    "name": "丽人丽妆",
    "pct": "-8.93%",
    "netValue": "-0.54亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.68亿",
    "concepts": [
      "拼多多概念",
      "三胎概念",
      "网红经济"
    ]
  }
]
