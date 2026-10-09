// 本文件由 scripts/generateStockData.mjs 自动生成，请勿手改。
// 数据源: hithink-finance（同花顺金融数据服务），数据日期: 2026-10-09 收盘
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
  "updatedAt": "2026-10-09 收盘",
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
    "value": "3,813.79",
    "change": "+1.89",
    "changePct": "+0.05%",
    "trend": [
      3911.87,
      3949.91,
      3952.13,
      3936.52,
      3888.37,
      3823.62,
      3830.45,
      3842.19,
      3811.9,
      3813.79
    ]
  },
  {
    "name": "沪深300",
    "symbol": "000300.SH",
    "region": "核心资产",
    "value": "4,317.25",
    "change": "+6.97",
    "changePct": "+0.16%",
    "trend": [
      4507.39,
      4539.57,
      4544.59,
      4517.28,
      4439.14,
      4340.76,
      4345.21,
      4357.62,
      4310.28,
      4317.25
    ]
  },
  {
    "name": "中证500",
    "symbol": "000905.SH",
    "region": "中盘成长",
    "value": "7,251.01",
    "change": "+2.58",
    "changePct": "+0.04%",
    "trend": [
      7799.61,
      7850.48,
      7828.94,
      7791.82,
      7624.07,
      7402.3,
      7439.63,
      7435.16,
      7248.43,
      7251.01
    ]
  },
  {
    "name": "中证1000",
    "symbol": "000852.SH",
    "region": "小盘弹性",
    "value": "7,155.91",
    "change": "+17.33",
    "changePct": "+0.24%",
    "trend": [
      7687.59,
      7766.33,
      7759.03,
      7745.56,
      7570.14,
      7294.17,
      7325.35,
      7298.82,
      7138.58,
      7155.91
    ]
  },
  {
    "name": "创业板指",
    "symbol": "399006.SZ",
    "region": "成长风格",
    "value": "3,043.33",
    "change": "+6.68",
    "changePct": "+0.22%",
    "trend": [
      3372.676,
      3399.59,
      3399.93,
      3379.61,
      3288.948,
      3139.825,
      3142.563,
      3135.277,
      3036.657,
      3043.335
    ]
  },
  {
    "name": "科创50",
    "symbol": "000688.SH",
    "region": "硬科技",
    "value": "1,457.27",
    "change": "+0.95",
    "changePct": "+0.07%",
    "trend": [
      1652.63,
      1657.48,
      1665.04,
      1660.85,
      1621.87,
      1555.98,
      1569.34,
      1530.01,
      1456.32,
      1457.27
    ]
  },
  {
    "name": "深证成指",
    "symbol": "399001.SZ",
    "region": "深市主板",
    "value": "12,641.86",
    "change": "+20.96",
    "changePct": "+0.17%",
    "trend": [
      13640.873,
      13730.02,
      13723.735,
      13636.074,
      13316.969,
      12858.753,
      12901.947,
      12887.62,
      12620.897,
      12641.858
    ]
  }
]

export const watchlist: WatchItem[] = [
  {
    "symbol": "510300",
    "name": "沪深300ETF",
    "category": "核心仓",
    "price": "4.385",
    "changePct": "-0.09%",
    "note": "用于观察大盘核心资产，不等同于买入建议。"
  },
  {
    "symbol": "510500",
    "name": "中证500ETF",
    "category": "中盘",
    "price": "7.282",
    "changePct": "+0.04%",
    "note": "适合作为中盘景气和市场广度的观察锚。"
  },
  {
    "symbol": "512100",
    "name": "中证1000ETF",
    "category": "小盘",
    "price": "2.909",
    "changePct": "+0.17%",
    "note": "波动弹性高，50w 账户要限制仓位拥挤。"
  },
  {
    "symbol": "588000",
    "name": "科创50ETF",
    "category": "硬科技",
    "price": "1.541",
    "changePct": "+0.26%",
    "note": "关注半导体、AI、创新药等成长估值修复。"
  },
  {
    "symbol": "159915",
    "name": "创业板ETF",
    "category": "成长",
    "price": "3.064",
    "changePct": "+0.36%",
    "note": "和风险偏好、美债利率、成长股情绪联动更强。"
  },
  {
    "symbol": "512480",
    "name": "半导体ETF",
    "category": "行业主题",
    "price": "0.911",
    "changePct": "-0.33%",
    "note": "主题弹性大，适合监控成交额和拥挤度。"
  },
  {
    "symbol": "515880",
    "name": "通信ETF",
    "category": "AI链条",
    "price": "0.592",
    "changePct": "-0.34%",
    "note": "关注算力、光模块、运营商资本开支。"
  },
  {
    "symbol": "512800",
    "name": "银行ETF",
    "category": "红利/防御",
    "price": "0.850",
    "changePct": "-1.05%",
    "note": "适合观察高股息、防御风格和利率预期。"
  },
  {
    "symbol": "513180",
    "name": "恒生科技ETF",
    "category": "港股弹性",
    "price": "0.525",
    "changePct": "+1.74%",
    "note": "受港股流动性、美元利率和互联网监管预期影响。"
  },
  {
    "symbol": "159941",
    "name": "纳指ETF",
    "category": "海外映射",
    "price": "1.769",
    "changePct": "+1.32%",
    "note": "不作为 A 股替代，只看全球科技风险偏好。"
  }
]

export const sectorPulse: SectorPulse[] = [
  {
    "name": "半导体",
    "changePct": "-1.27%",
    "breadth": "n/a",
    "note": "高弹性行业，重点看成交额放大是否持续。（指数代码 881121.TI）"
  },
  {
    "name": "AI算力",
    "changePct": "+0.55%",
    "breadth": "n/a",
    "note": "东数西算(算力)概念指数，主题强时容易拥挤。（指数代码 885957.TI）"
  },
  {
    "name": "高股息",
    "changePct": "+0.84%",
    "breadth": "n/a",
    "note": "高股息精选概念，防御风格，和利率、避险偏好相关。（指数代码 886072.TI）"
  },
  {
    "name": "消费复苏",
    "changePct": "+0.83%",
    "breadth": "n/a",
    "note": "以白酒行业指数代表消费链条景气验证。（指数代码 881273.TI）"
  },
  {
    "name": "新能源",
    "changePct": "-0.48%",
    "breadth": "n/a",
    "note": "光伏概念指数，供给出清和价格周期是核心变量。（指数代码 885531.TI）"
  },
  {
    "name": "券商",
    "changePct": "+2.32%",
    "breadth": "n/a",
    "note": "证券行业指数，常作为风险偏好和成交额弹性的放大器。（指数代码 881157.TI）"
  }
]

export const domesticFlows: DomesticFlow[] = [
  {
    "name": "两市成交额",
    "value": "1.90万亿",
    "state": "1.90万亿（沪+深）",
    "note": "沪市+深市成交额合计（hithink 指数快照口径），判断行情级别的第一层过滤器。"
  },
  {
    "name": "沪市成交额",
    "value": "8886亿",
    "state": "占两市 46.8%",
    "note": "沪市主板与科创板合计成交，观察权重与大盘活跃度。"
  },
  {
    "name": "深市成交额",
    "value": "1.01万亿",
    "state": "占两市 53.2%",
    "note": "深市主板与中小盘成交，观察成长与题材活跃度。"
  },
  {
    "name": "创业板成交额",
    "value": "4948亿",
    "state": "占深市 48.9%",
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
  "tradeDate": "2026-10-09",
  "limitUpCount": 72,
  "limitBreakCount": 13,
  "hotStockCount": 30
}

export const limitUpTop: LimitUpItem[] = [
  {
    "ticker": "002979",
    "name": "雷赛智能",
    "price": "55.58",
    "pct": "+9.99%",
    "limitUpTime": "14:26",
    "boards": "首板",
    "reason": "人形机器人+伺服系统+半年报增长",
    "sealMoney": "0.7亿"
  },
  {
    "ticker": "605058",
    "name": "澳弘电子",
    "price": "53.35",
    "pct": "+10.00%",
    "limitUpTime": "14:38",
    "boards": "首板",
    "reason": "PCB+AI服务器电源+具身智能",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "605168",
    "name": "三人行",
    "price": "52.10",
    "pct": "+10.01%",
    "limitUpTime": "14:27",
    "boards": "首板",
    "reason": "数据中心+AI营销+体育营销",
    "sealMoney": "0.0亿"
  },
  {
    "ticker": "688152",
    "name": "麒麟信安",
    "price": "45.85",
    "pct": "+19.99%",
    "limitUpTime": "14:15",
    "boards": "首板",
    "reason": "信息安全+国产操作系统+智算一体机",
    "sealMoney": "0.5亿"
  },
  {
    "ticker": "603067",
    "name": "振华股份",
    "price": "42.31",
    "pct": "+10.01%",
    "limitUpTime": "13:11",
    "boards": "首板",
    "reason": "SOFC+金属铬+铬盐龙头",
    "sealMoney": "1.1亿"
  },
  {
    "ticker": "605287",
    "name": "德才股份",
    "price": "40.18",
    "pct": "+9.99%",
    "limitUpTime": "13:39",
    "boards": "首板",
    "reason": "AI漫剧+火山引擎合作+建筑装饰",
    "sealMoney": "0.8亿"
  },
  {
    "ticker": "300530",
    "name": "领湃科技",
    "price": "28.90",
    "pct": "+20.02%",
    "limitUpTime": "09:54",
    "boards": "2连板",
    "reason": "储能电池+新能源综合服务+衡阳国资",
    "sealMoney": "0.4亿"
  },
  {
    "ticker": "002912",
    "name": "中新赛克",
    "price": "28.55",
    "pct": "+10.02%",
    "limitUpTime": "13:25",
    "boards": "首板",
    "reason": "AI安全+网络安全+数据安全",
    "sealMoney": "0.5亿"
  },
  {
    "ticker": "605177",
    "name": "东亚药业",
    "price": "28.29",
    "pct": "+9.99%",
    "limitUpTime": "13:30",
    "boards": "首板",
    "reason": "抗生素+头孢产品+制剂一体化",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "601069",
    "name": "西部黄金",
    "price": "26.55",
    "pct": "+9.98%",
    "limitUpTime": "13:14",
    "boards": "首板",
    "reason": "黄金业务+股东合并+业绩增长",
    "sealMoney": "1.0亿"
  },
  {
    "ticker": "002317",
    "name": "众生药业",
    "price": "25.49",
    "pct": "+10.01%",
    "limitUpTime": "14:08",
    "boards": "首板",
    "reason": "减肥药+脂肪肝药+创新药",
    "sealMoney": "1.0亿"
  },
  {
    "ticker": "603533",
    "name": "掌阅科技",
    "price": "25.44",
    "pct": "+9.99%",
    "limitUpTime": "14:09",
    "boards": "首板",
    "reason": "AI短剧+短剧出海+数字阅读",
    "sealMoney": "0.9亿"
  }
]

export const limitBreakTop: LimitBreakItem[] = [
  {
    "ticker": "300340",
    "name": "科恒股份",
    "price": "10.72",
    "pct": "+15.89%",
    "openTimes": 3,
    "turnover": "7亿"
  },
  {
    "ticker": "300111",
    "name": "向日葵",
    "price": "3.41",
    "pct": "+14.81%",
    "openTimes": 3,
    "turnover": "9亿"
  },
  {
    "ticker": "002709",
    "name": "天赐材料",
    "price": "35.68",
    "pct": "+9.15%",
    "openTimes": 2,
    "turnover": "71亿"
  },
  {
    "ticker": "600785",
    "name": "新华百货",
    "price": "11.59",
    "pct": "+7.71%",
    "openTimes": 1,
    "turnover": "6亿"
  },
  {
    "ticker": "002105",
    "name": "信隆健康",
    "price": "6.51",
    "pct": "+5.51%",
    "openTimes": 4,
    "turnover": "2亿"
  },
  {
    "ticker": "002083",
    "name": "孚日股份",
    "price": "10.19",
    "pct": "+4.84%",
    "openTimes": 1,
    "turnover": "9亿"
  },
  {
    "ticker": "001318",
    "name": "阳光乳业",
    "price": "13.43",
    "pct": "+4.68%",
    "openTimes": 1,
    "turnover": "4亿"
  },
  {
    "ticker": "603810",
    "name": "丰山集团",
    "price": "12.95",
    "pct": "+4.35%",
    "openTimes": 1,
    "turnover": "1亿"
  }
]

export const ladderBoards: LadderBoard[] = [
  {
    "label": "2板",
    "count": 8,
    "names": [
      "三柏硕",
      "丰元股份",
      "华北制药"
    ]
  },
  {
    "label": "4板",
    "count": 1,
    "names": [
      "紫竹高科"
    ]
  },
  {
    "label": "5板",
    "count": 2,
    "names": [
      "九阳股份",
      "时代万恒"
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
    "ticker": "600418",
    "name": "江淮汽车",
    "heat": "8207339",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "600127",
    "name": "金健米业",
    "heat": "3856184",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "002242",
    "name": "九阳股份",
    "heat": "3616585",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "600825",
    "name": "新华传媒",
    "heat": "3472245",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "002487",
    "name": "大金重工",
    "heat": "3343719",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "002384",
    "name": "东山精密",
    "heat": "2793906",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "002709",
    "name": "天赐材料",
    "heat": "2682232",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "300308",
    "name": "中际旭创",
    "heat": "2601356",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "688825",
    "name": "长鑫科技",
    "heat": "2568476",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "300750",
    "name": "宁德时代",
    "heat": "2068466",
    "rankChange": 0
  }
]

export const skyrockets: RankItem[] = [
  {
    "rank": 1,
    "ticker": "300364",
    "name": "中文在线",
    "heat": "33088.4",
    "rankChange": 1
  },
  {
    "rank": 2,
    "ticker": "300413",
    "name": "芒果超媒",
    "heat": "29413.6",
    "rankChange": 2
  },
  {
    "rank": 3,
    "ticker": "601086",
    "name": "国芳集团",
    "heat": "20966.5",
    "rankChange": 1
  },
  {
    "rank": 4,
    "ticker": "601118",
    "name": "海南橡胶",
    "heat": "19786.4",
    "rankChange": 5
  },
  {
    "rank": 5,
    "ticker": "600176",
    "name": "中国巨石",
    "heat": "19596.2",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "300369",
    "name": "绿盟科技",
    "heat": "17946.2",
    "rankChange": 3
  },
  {
    "rank": 7,
    "ticker": "002709",
    "name": "天赐材料",
    "heat": "17620.7",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "603228",
    "name": "景旺电子",
    "heat": "16913.3",
    "rankChange": 11
  },
  {
    "rank": 9,
    "ticker": "601929",
    "name": "吉视传媒",
    "heat": "15687.6",
    "rankChange": 10
  },
  {
    "rank": 10,
    "ticker": "002487",
    "name": "大金重工",
    "heat": "15603.2",
    "rankChange": 0
  }
]

export const dragonTigerTop: DragonTigerItem[] = [
  {
    "rank": 1,
    "ticker": "600418",
    "name": "江淮汽车",
    "pct": "-10.01%",
    "netValue": "0.62亿",
    "orgNet": "—",
    "hotMoneyNet": "3.80亿",
    "concepts": [
      "百度概念",
      "华为汽车",
      "DeepSeek概念"
    ]
  },
  {
    "rank": 2,
    "ticker": "002384",
    "name": "东山精密",
    "pct": "-10.00%",
    "netValue": "3.70亿",
    "orgNet": "0.44亿",
    "hotMoneyNet": "—",
    "concepts": [
      "PCB概念",
      "同花顺果指数",
      "共封装光学(CPO)"
    ]
  },
  {
    "rank": 3,
    "ticker": "600825",
    "name": "新华传媒",
    "pct": "+10.05%",
    "netValue": "0.29亿",
    "orgNet": "—",
    "hotMoneyNet": "0.15亿",
    "concepts": [
      "上海国企改革",
      "AI语料",
      "无人零售"
    ]
  },
  {
    "rank": 3,
    "ticker": "600825",
    "name": "新华传媒",
    "pct": "+10.05%",
    "netValue": "0.00亿",
    "orgNet": "—",
    "hotMoneyNet": "—",
    "concepts": [
      "上海国企改革",
      "AI语料",
      "无人零售"
    ]
  },
  {
    "rank": 6,
    "ticker": "600127",
    "name": "金健米业",
    "pct": "+5.02%",
    "netValue": "1.24亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.80亿",
    "concepts": [
      "乳业",
      "玉米",
      "粮食概念"
    ]
  },
  {
    "rank": 7,
    "ticker": "002580",
    "name": "圣阳股份",
    "pct": "+9.43%",
    "netValue": "1.89亿",
    "orgNet": "0.55亿",
    "hotMoneyNet": "0.05亿",
    "concepts": [
      "钠离子电池",
      "动力电池回收",
      "固态电池"
    ]
  },
  {
    "rank": 8,
    "ticker": "002242",
    "name": "九阳股份",
    "pct": "+10.00%",
    "netValue": "-0.14亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.24亿",
    "concepts": [
      "家用电器",
      "净水概念",
      "绿色电力"
    ]
  },
  {
    "rank": 9,
    "ticker": "002074",
    "name": "国轩高科",
    "pct": "+6.10%",
    "netValue": "0.48亿",
    "orgNet": "-0.05亿",
    "hotMoneyNet": "-0.03亿",
    "concepts": [
      "动力电池回收",
      "钠离子电池",
      "两轮车"
    ]
  },
  {
    "rank": 10,
    "ticker": "000678",
    "name": "襄阳轴承",
    "pct": "-5.04%",
    "netValue": "-0.85亿",
    "orgNet": "0.43亿",
    "hotMoneyNet": "0.06亿",
    "concepts": [
      "股权转让(并购重组)",
      "减速器",
      "军民融合"
    ]
  },
  {
    "rank": 11,
    "ticker": "601091",
    "name": "沈鼓集团",
    "pct": "+4.54%",
    "netValue": "0.17亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.51亿",
    "concepts": [
      "注册制次新股",
      "天然气",
      "煤化工概念"
    ]
  }
]
