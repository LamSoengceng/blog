// 本文件由 scripts/generateStockData.mjs 自动生成，请勿手改。
// 数据源: hithink-finance（同花顺金融数据服务），数据日期: 2026-10-20 收盘
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
  "updatedAt": "2026-10-20 收盘",
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
    "value": "3,735.37",
    "change": "+4.45",
    "changePct": "+0.12%",
    "trend": [
      3842.19,
      3811.9,
      3813.79,
      3797.24,
      3800.86,
      3767.23,
      3707.48,
      3716.28,
      3730.92,
      3735.37
    ]
  },
  {
    "name": "沪深300",
    "symbol": "000300.SH",
    "region": "核心资产",
    "value": "4,152.11",
    "change": "-22.42",
    "changePct": "-0.54%",
    "trend": [
      4357.62,
      4310.28,
      4317.25,
      4287.98,
      4275.68,
      4217.68,
      4166.01,
      4170.61,
      4174.53,
      4152.11
    ]
  },
  {
    "name": "中证500",
    "symbol": "000905.SH",
    "region": "中盘成长",
    "value": "6,841.44",
    "change": "+40.78",
    "changePct": "+0.60%",
    "trend": [
      7435.16,
      7248.43,
      7251.01,
      7093.02,
      7085.09,
      6980.11,
      6769.25,
      6772.75,
      6800.66,
      6841.44
    ]
  },
  {
    "name": "中证1000",
    "symbol": "000852.SH",
    "region": "小盘弹性",
    "value": "6,766.90",
    "change": "+68.60",
    "changePct": "+1.02%",
    "trend": [
      7298.82,
      7138.58,
      7155.91,
      7021.47,
      7023.22,
      6905.17,
      6678.65,
      6681.94,
      6698.3,
      6766.9
    ]
  },
  {
    "name": "创业板指",
    "symbol": "399006.SZ",
    "region": "成长风格",
    "value": "2,739.20",
    "change": "-7.09",
    "changePct": "-0.26%",
    "trend": [
      3135.277,
      3036.657,
      3043.335,
      2963.824,
      2958.345,
      2866.763,
      2783.175,
      2772.384,
      2746.291,
      2739.203
    ]
  },
  {
    "name": "科创50",
    "symbol": "000688.SH",
    "region": "硬科技",
    "value": "1,342.42",
    "change": "+13.23",
    "changePct": "+1.00%",
    "trend": [
      1530.01,
      1456.32,
      1457.27,
      1426.72,
      1427.18,
      1380.26,
      1359.52,
      1358.65,
      1329.19,
      1342.42
    ]
  },
  {
    "name": "深证成指",
    "symbol": "399001.SZ",
    "region": "深市主板",
    "value": "11,801.29",
    "change": "-16.13",
    "changePct": "-0.14%",
    "trend": [
      12887.62,
      12620.897,
      12641.858,
      12384.869,
      12353.699,
      12110.591,
      11816.789,
      11802.459,
      11817.423,
      11801.29
    ]
  }
]

export const watchlist: WatchItem[] = [
  {
    "symbol": "510300",
    "name": "沪深300ETF",
    "category": "核心仓",
    "price": "4.220",
    "changePct": "-0.47%",
    "note": "用于观察大盘核心资产，不等同于买入建议。"
  },
  {
    "symbol": "510500",
    "name": "中证500ETF",
    "category": "中盘",
    "price": "6.871",
    "changePct": "+0.60%",
    "note": "适合作为中盘景气和市场广度的观察锚。"
  },
  {
    "symbol": "512100",
    "name": "中证1000ETF",
    "category": "小盘",
    "price": "2.752",
    "changePct": "+1.10%",
    "note": "波动弹性高，50w 账户要限制仓位拥挤。"
  },
  {
    "symbol": "588000",
    "name": "科创50ETF",
    "category": "硬科技",
    "price": "1.417",
    "changePct": "+0.85%",
    "note": "关注半导体、AI、创新药等成长估值修复。"
  },
  {
    "symbol": "159915",
    "name": "创业板ETF",
    "category": "成长",
    "price": "2.756",
    "changePct": "-0.22%",
    "note": "和风险偏好、美债利率、成长股情绪联动更强。"
  },
  {
    "symbol": "512480",
    "name": "半导体ETF",
    "category": "行业主题",
    "price": "0.829",
    "changePct": "+1.10%",
    "note": "主题弹性大，适合监控成交额和拥挤度。"
  },
  {
    "symbol": "515880",
    "name": "通信ETF",
    "category": "AI链条",
    "price": "0.529",
    "changePct": "+1.15%",
    "note": "关注算力、光模块、运营商资本开支。"
  },
  {
    "symbol": "512800",
    "name": "银行ETF",
    "category": "红利/防御",
    "price": "0.866",
    "changePct": "-1.25%",
    "note": "适合观察高股息、防御风格和利率预期。"
  },
  {
    "symbol": "513180",
    "name": "恒生科技ETF",
    "category": "港股弹性",
    "price": "0.509",
    "changePct": "-0.78%",
    "note": "受港股流动性、美元利率和互联网监管预期影响。"
  },
  {
    "symbol": "159941",
    "name": "纳指ETF",
    "category": "海外映射",
    "price": "1.708",
    "changePct": "-0.87%",
    "note": "不作为 A 股替代，只看全球科技风险偏好。"
  }
]

export const sectorPulse: SectorPulse[] = [
  {
    "name": "半导体",
    "changePct": "+2.92%",
    "breadth": "n/a",
    "note": "高弹性行业，重点看成交额放大是否持续。（指数代码 881121.TI）"
  },
  {
    "name": "AI算力",
    "changePct": "+1.96%",
    "breadth": "n/a",
    "note": "东数西算(算力)概念指数，主题强时容易拥挤。（指数代码 885957.TI）"
  },
  {
    "name": "高股息",
    "changePct": "-0.74%",
    "breadth": "n/a",
    "note": "高股息精选概念，防御风格，和利率、避险偏好相关。（指数代码 886072.TI）"
  },
  {
    "name": "消费复苏",
    "changePct": "-1.17%",
    "breadth": "n/a",
    "note": "以白酒行业指数代表消费链条景气验证。（指数代码 881273.TI）"
  },
  {
    "name": "新能源",
    "changePct": "+1.30%",
    "breadth": "n/a",
    "note": "光伏概念指数，供给出清和价格周期是核心变量。（指数代码 885531.TI）"
  },
  {
    "name": "券商",
    "changePct": "-1.08%",
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
    "value": "7000亿",
    "state": "占两市 48.1%",
    "note": "沪市主板与科创板合计成交，观察权重与大盘活跃度。"
  },
  {
    "name": "深市成交额",
    "value": "7561亿",
    "state": "占两市 51.9%",
    "note": "深市主板与中小盘成交，观察成长与题材活跃度。"
  },
  {
    "name": "创业板成交额",
    "value": "3765亿",
    "state": "占深市 49.8%",
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
  "tradeDate": "2026-10-20",
  "limitUpCount": 54,
  "limitBreakCount": 29,
  "hotStockCount": 30
}

export const limitUpTop: LimitUpItem[] = [
  {
    "ticker": "603893",
    "name": "瑞芯微",
    "price": "189.04",
    "pct": "+10.00%",
    "limitUpTime": "10:49",
    "boards": "首板",
    "reason": "端侧AI+机器人+业绩增长",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "688608",
    "name": "恒玄科技",
    "price": "106.32",
    "pct": "+20.00%",
    "limitUpTime": "10:47",
    "boards": "首板",
    "reason": "低功耗SoC+AI眼镜+智能可穿戴",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "603236",
    "name": "移远通信",
    "price": "76.11",
    "pct": "+10.00%",
    "limitUpTime": "10:04",
    "boards": "首板",
    "reason": "业绩增长+端侧AI+通信模组+机器人",
    "sealMoney": "1.3亿"
  },
  {
    "ticker": "605389",
    "name": "长龄液压",
    "price": "57.97",
    "pct": "+10.00%",
    "limitUpTime": "10:31",
    "boards": "首板",
    "reason": "回购提议+AGV减速器+液压元件+工程机械",
    "sealMoney": "0.4亿"
  },
  {
    "ticker": "001283",
    "name": "豪鹏科技",
    "price": "51.06",
    "pct": "+10.00%",
    "limitUpTime": "10:34",
    "boards": "首板",
    "reason": "消费电子电池+机器人电池+AI眼镜+三季报预增",
    "sealMoney": "0.5亿"
  },
  {
    "ticker": "002929",
    "name": "润建股份",
    "price": "51.04",
    "pct": "+10.00%",
    "limitUpTime": "14:20",
    "boards": "2连板",
    "reason": "签境外词元大单+算力网络+通信运维",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "603119",
    "name": "浙江荣泰",
    "price": "50.46",
    "pct": "+10.01%",
    "limitUpTime": "10:03",
    "boards": "2连板",
    "reason": "人形机器人+云母制品+精密结构件",
    "sealMoney": "0.7亿"
  },
  {
    "ticker": "603407",
    "name": "长裕集团",
    "price": "48.29",
    "pct": "+10.00%",
    "limitUpTime": "10:20",
    "boards": "首板",
    "reason": "锆基材料+半导体材料+氧氯化锆+次新股",
    "sealMoney": "0.6亿"
  },
  {
    "ticker": "301313",
    "name": "凡拓数创",
    "price": "46.80",
    "pct": "+20.00%",
    "limitUpTime": "09:51",
    "boards": "2连板",
    "reason": "物理AI数据+具身仿真+AI数字孪生",
    "sealMoney": "1.5亿"
  },
  {
    "ticker": "603400",
    "name": "华之杰",
    "price": "42.46",
    "pct": "+10.00%",
    "limitUpTime": "13:00",
    "boards": "首板",
    "reason": "机器人+液冷+电子水泵+新能源汽车",
    "sealMoney": "0.4亿"
  },
  {
    "ticker": "603068",
    "name": "博通集成",
    "price": "41.67",
    "pct": "+10.01%",
    "limitUpTime": "10:33",
    "boards": "首板",
    "reason": "端侧AI+无线芯片+AIoT量产",
    "sealMoney": "0.4亿"
  },
  {
    "ticker": "002881",
    "name": "美格智能",
    "price": "38.51",
    "pct": "+10.00%",
    "limitUpTime": "10:18",
    "boards": "首板",
    "reason": "物理AI+高算力模组+无线网关+光通信",
    "sealMoney": "0.4亿"
  }
]

export const limitBreakTop: LimitBreakItem[] = [
  {
    "ticker": "688689",
    "name": "银河微电",
    "price": "39.34",
    "pct": "+16.22%",
    "openTimes": 2,
    "turnover": "7亿"
  },
  {
    "ticker": "300461",
    "name": "田中精机",
    "price": "33.80",
    "pct": "+14.50%",
    "openTimes": 2,
    "turnover": "6亿"
  },
  {
    "ticker": "688626",
    "name": "翔宇医疗",
    "price": "41.08",
    "pct": "+13.32%",
    "openTimes": 1,
    "turnover": "3亿"
  },
  {
    "ticker": "002792",
    "name": "通宇通讯",
    "price": "29.17",
    "pct": "+9.29%",
    "openTimes": 1,
    "turnover": "12亿"
  },
  {
    "ticker": "600629",
    "name": "华建集团",
    "price": "18.86",
    "pct": "+9.14%",
    "openTimes": 2,
    "turnover": "11亿"
  },
  {
    "ticker": "001400",
    "name": "江顺科技",
    "price": "79.67",
    "pct": "+9.12%",
    "openTimes": 4,
    "turnover": "3亿"
  },
  {
    "ticker": "603179",
    "name": "新泉股份",
    "price": "37.76",
    "pct": "+8.91%",
    "openTimes": 6,
    "turnover": "15亿"
  },
  {
    "ticker": "688768",
    "name": "容知日新",
    "price": "54.65",
    "pct": "+8.63%",
    "openTimes": 2,
    "turnover": "1亿"
  }
]

export const ladderBoards: LadderBoard[] = [
  {
    "label": "2板",
    "count": 8,
    "names": [
      "凡拓数创",
      "宁波东力",
      "慕思股份"
    ]
  },
  {
    "label": "3板",
    "count": 5,
    "names": [
      "东安动力",
      "京城股份",
      "大业股份"
    ]
  },
  {
    "label": "4板",
    "count": 1,
    "names": [
      "吉大正元"
    ]
  }
]

export const hotStocks: RankItem[] = [
  {
    "rank": 1,
    "ticker": "688836",
    "name": "宇树科技",
    "heat": "6021972",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "600825",
    "name": "新华传媒",
    "heat": "5448997",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "002242",
    "name": "九阳股份",
    "heat": "4744302",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "600487",
    "name": "亨通光电",
    "heat": "4123063",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "688825",
    "name": "长鑫科技",
    "heat": "3637344",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "000530",
    "name": "冰山冷热",
    "heat": "3209307",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "000823",
    "name": "超声电子",
    "heat": "2672595",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "002085",
    "name": "万丰奥威",
    "heat": "2605853",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "003029",
    "name": "吉大正元",
    "heat": "2415176",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "300308",
    "name": "中际旭创",
    "heat": "2330948",
    "rankChange": 0
  }
]

export const skyrockets: RankItem[] = [
  {
    "rank": 1,
    "ticker": "300750",
    "name": "宁德时代",
    "heat": "128681.5",
    "rankChange": 2
  },
  {
    "rank": 2,
    "ticker": "002428",
    "name": "云南锗业",
    "heat": "48159.1",
    "rankChange": 13
  },
  {
    "rank": 3,
    "ticker": "002242",
    "name": "九阳股份",
    "heat": "35974.3",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "300115",
    "name": "长盈精密",
    "heat": "27474.3",
    "rankChange": 1
  },
  {
    "rank": 5,
    "ticker": "002181",
    "name": "粤传媒",
    "heat": "21559.8",
    "rankChange": 3
  },
  {
    "rank": 6,
    "ticker": "603993",
    "name": "洛阳钼业",
    "heat": "19478.9",
    "rankChange": 1
  },
  {
    "rank": 7,
    "ticker": "603636",
    "name": "南威软件",
    "heat": "19276.2",
    "rankChange": 2
  },
  {
    "rank": 8,
    "ticker": "002696",
    "name": "百洋股份",
    "heat": "17228.7",
    "rankChange": 1
  },
  {
    "rank": 9,
    "ticker": "000823",
    "name": "超声电子",
    "heat": "16364.3",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "002347",
    "name": "泰尔股份",
    "heat": "15029.0",
    "rankChange": 19
  }
]

export const dragonTigerTop: DragonTigerItem[] = [
  {
    "rank": 1,
    "ticker": "600825",
    "name": "新华传媒",
    "pct": "+2.77%",
    "netValue": "-0.45亿",
    "orgNet": "—",
    "hotMoneyNet": "2.02亿",
    "concepts": [
      "文化传媒概念",
      "AI语料",
      "无人零售"
    ]
  },
  {
    "rank": 2,
    "ticker": "002242",
    "name": "九阳股份",
    "pct": "+5.06%",
    "netValue": "0.99亿",
    "orgNet": "—",
    "hotMoneyNet": "0.22亿",
    "concepts": [
      "净水概念",
      "绿色电力",
      "家用电器"
    ]
  },
  {
    "rank": 4,
    "ticker": "000530",
    "name": "冰山冷热",
    "pct": "+2.36%",
    "netValue": "0.40亿",
    "orgNet": "0.05亿",
    "hotMoneyNet": "—",
    "concepts": [
      "冰雪产业",
      "体育产业",
      "中俄贸易概念"
    ]
  },
  {
    "rank": 5,
    "ticker": "002343",
    "name": "慈文传媒",
    "pct": "+9.97%",
    "netValue": "2.16亿",
    "orgNet": "0.76亿",
    "hotMoneyNet": "—",
    "concepts": [
      "富时罗素概念股",
      "文化传媒概念",
      "手机游戏"
    ]
  },
  {
    "rank": 5,
    "ticker": "002343",
    "name": "慈文传媒",
    "pct": "+9.97%",
    "netValue": "1.83亿",
    "orgNet": "0.41亿",
    "hotMoneyNet": "—",
    "concepts": [
      "富时罗素概念股",
      "文化传媒概念",
      "手机游戏"
    ]
  },
  {
    "rank": 7,
    "ticker": "688836",
    "name": "宇树科技",
    "pct": "+16.15%",
    "netValue": "1.82亿",
    "orgNet": "—",
    "hotMoneyNet": "0.92亿",
    "concepts": [
      "科创次新股",
      "人形机器人",
      "注册制次新股"
    ]
  },
  {
    "rank": 11,
    "ticker": "002085",
    "name": "万丰奥威",
    "pct": "+9.99%",
    "netValue": "1.27亿",
    "orgNet": "0.15亿",
    "hotMoneyNet": "0.34亿",
    "concepts": [
      "碳中和",
      "共同富裕示范区",
      "风电"
    ]
  },
  {
    "rank": 11,
    "ticker": "002085",
    "name": "万丰奥威",
    "pct": "+9.99%",
    "netValue": "-0.41亿",
    "orgNet": "0.01亿",
    "hotMoneyNet": "-1.59亿",
    "concepts": [
      "碳中和",
      "共同富裕示范区",
      "风电"
    ]
  },
  {
    "rank": 14,
    "ticker": "600127",
    "name": "金健米业",
    "pct": "-9.99%",
    "netValue": "-1.72亿",
    "orgNet": "—",
    "hotMoneyNet": "-1.60亿",
    "concepts": [
      "玉米",
      "粮食概念",
      "乳业"
    ]
  },
  {
    "rank": 16,
    "ticker": "600241",
    "name": "时代万恒",
    "pct": "-9.96%",
    "netValue": "0.16亿",
    "orgNet": "—",
    "hotMoneyNet": "0.05亿",
    "concepts": [
      "锂电池概念",
      "国企改革"
    ]
  }
]
