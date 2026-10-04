// 本文件由 scripts/generateStockData.mjs 自动生成，请勿手改。
// 数据源: hithink-finance（同花顺金融数据服务），数据日期: 2026-09-30 收盘
// 生成时间: 2026-10-04T01:49:22.086Z
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
  "updatedAt": "2026-09-30 收盘",
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
    "value": "3,842.19",
    "change": "+11.74",
    "changePct": "+0.31%",
    "trend": [
      3891.6,
      3875.6,
      3911.87,
      3949.91,
      3952.13,
      3936.52,
      3888.37,
      3823.62,
      3830.45,
      3842.19
    ]
  },
  {
    "name": "沪深300",
    "symbol": "000300.SH",
    "region": "核心资产",
    "value": "4,357.62",
    "change": "+12.41",
    "changePct": "+0.29%",
    "trend": [
      4480.27,
      4460.16,
      4507.39,
      4539.57,
      4544.59,
      4517.28,
      4439.14,
      4340.76,
      4345.21,
      4357.62
    ]
  },
  {
    "name": "中证500",
    "symbol": "000905.SH",
    "region": "中盘成长",
    "value": "7,435.16",
    "change": "-4.47",
    "changePct": "-0.06%",
    "trend": [
      7683.47,
      7654.98,
      7799.61,
      7850.48,
      7828.94,
      7791.82,
      7624.07,
      7402.3,
      7439.63,
      7435.16
    ]
  },
  {
    "name": "中证1000",
    "symbol": "000852.SH",
    "region": "小盘弹性",
    "value": "7,298.82",
    "change": "-26.53",
    "changePct": "-0.36%",
    "trend": [
      7587.43,
      7548.82,
      7687.59,
      7766.33,
      7759.03,
      7745.56,
      7570.14,
      7294.17,
      7325.35,
      7298.82
    ]
  },
  {
    "name": "创业板指",
    "symbol": "399006.SZ",
    "region": "成长风格",
    "value": "3,135.28",
    "change": "-7.29",
    "changePct": "-0.23%",
    "trend": [
      3311.474,
      3298.31,
      3372.676,
      3399.59,
      3399.93,
      3379.61,
      3288.948,
      3139.825,
      3142.563,
      3135.277
    ]
  },
  {
    "name": "科创50",
    "symbol": "000688.SH",
    "region": "硬科技",
    "value": "1,530.01",
    "change": "-39.33",
    "changePct": "-2.51%",
    "trend": [
      1616.19,
      1606.29,
      1652.63,
      1657.48,
      1665.04,
      1660.85,
      1621.87,
      1555.98,
      1569.34,
      1530.01
    ]
  },
  {
    "name": "深证成指",
    "symbol": "399001.SZ",
    "region": "深市主板",
    "value": "12,887.62",
    "change": "-14.33",
    "changePct": "-0.11%",
    "trend": [
      13454.743,
      13409.908,
      13640.873,
      13730.02,
      13723.735,
      13636.074,
      13316.969,
      12858.753,
      12901.947,
      12887.62
    ]
  }
]

export const watchlist: WatchItem[] = [
  {
    "symbol": "510300",
    "name": "沪深300ETF",
    "category": "核心仓",
    "price": "4.432",
    "changePct": "+0.36%",
    "note": "用于观察大盘核心资产，不等同于买入建议。"
  },
  {
    "symbol": "510500",
    "name": "中证500ETF",
    "category": "中盘",
    "price": "7.472",
    "changePct": "-0.05%",
    "note": "适合作为中盘景气和市场广度的观察锚。"
  },
  {
    "symbol": "512100",
    "name": "中证1000ETF",
    "category": "小盘",
    "price": "2.971",
    "changePct": "-0.30%",
    "note": "波动弹性高，50w 账户要限制仓位拥挤。"
  },
  {
    "symbol": "588000",
    "name": "科创50ETF",
    "category": "硬科技",
    "price": "1.616",
    "changePct": "-2.47%",
    "note": "关注半导体、AI、创新药等成长估值修复。"
  },
  {
    "symbol": "159915",
    "name": "创业板ETF",
    "category": "成长",
    "price": "3.154",
    "changePct": "-0.25%",
    "note": "和风险偏好、美债利率、成长股情绪联动更强。"
  },
  {
    "symbol": "512480",
    "name": "半导体ETF",
    "category": "行业主题",
    "price": "0.955",
    "changePct": "-3.05%",
    "note": "主题弹性大，适合监控成交额和拥挤度。"
  },
  {
    "symbol": "515880",
    "name": "通信ETF",
    "category": "AI链条",
    "price": "0.626",
    "changePct": "-0.48%",
    "note": "关注算力、光模块、运营商资本开支。"
  },
  {
    "symbol": "512800",
    "name": "银行ETF",
    "category": "红利/防御",
    "price": "0.853",
    "changePct": "+1.43%",
    "note": "适合观察高股息、防御风格和利率预期。"
  },
  {
    "symbol": "513180",
    "name": "恒生科技ETF",
    "category": "港股弹性",
    "price": "0.534",
    "changePct": "-0.37%",
    "note": "受港股流动性、美元利率和互联网监管预期影响。"
  },
  {
    "symbol": "159941",
    "name": "纳指ETF",
    "category": "海外映射",
    "price": "1.735",
    "changePct": "+1.58%",
    "note": "不作为 A 股替代，只看全球科技风险偏好。"
  }
]

export const sectorPulse: SectorPulse[] = [
  {
    "name": "半导体",
    "changePct": "-2.92%",
    "breadth": "n/a",
    "note": "高弹性行业，重点看成交额放大是否持续。（指数代码 881121.TI）"
  },
  {
    "name": "AI算力",
    "changePct": "-1.22%",
    "breadth": "n/a",
    "note": "东数西算(算力)概念指数，主题强时容易拥挤。（指数代码 885957.TI）"
  },
  {
    "name": "高股息",
    "changePct": "+1.08%",
    "breadth": "n/a",
    "note": "高股息精选概念，防御风格，和利率、避险偏好相关。（指数代码 886072.TI）"
  },
  {
    "name": "消费复苏",
    "changePct": "+2.82%",
    "breadth": "n/a",
    "note": "以白酒行业指数代表消费链条景气验证。（指数代码 881273.TI）"
  },
  {
    "name": "新能源",
    "changePct": "-0.72%",
    "breadth": "n/a",
    "note": "光伏概念指数，供给出清和价格周期是核心变量。（指数代码 885531.TI）"
  },
  {
    "name": "券商",
    "changePct": "+0.25%",
    "breadth": "n/a",
    "note": "证券行业指数，常作为风险偏好和成交额弹性的放大器。（指数代码 881157.TI）"
  }
]

export const domesticFlows: DomesticFlow[] = [
  {
    "name": "两市成交额",
    "value": "1.44万亿",
    "state": "1.44万亿（沪+深）",
    "note": "沪市+深市成交额合计（hithink 指数快照口径），判断行情级别的第一层过滤器。"
  },
  {
    "name": "沪市成交额",
    "value": "6794亿",
    "state": "占两市 47.2%",
    "note": "沪市主板与科创板合计成交，观察权重与大盘活跃度。"
  },
  {
    "name": "深市成交额",
    "value": "7586亿",
    "state": "占两市 52.8%",
    "note": "深市主板与中小盘成交，观察成长与题材活跃度。"
  },
  {
    "name": "创业板成交额",
    "value": "3690亿",
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
  "tradeDate": "2026-09-30",
  "limitUpCount": 56,
  "limitBreakCount": 12,
  "hotStockCount": 30
}

export const limitUpTop: LimitUpItem[] = [
  {
    "ticker": "688185",
    "name": "康希诺",
    "price": "102.64",
    "pct": "+20.00%",
    "limitUpTime": "09:38",
    "boards": "首板",
    "reason": "mRNA肿瘤疫苗+病毒载体服务+成人疫苗",
    "sealMoney": "1.8亿"
  },
  {
    "ticker": "605288",
    "name": "凯迪股份",
    "price": "71.83",
    "pct": "+10.00%",
    "limitUpTime": "10:00",
    "boards": "首板",
    "reason": "具身机器人送样+智能线性驱动+汽车零部件",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "603127",
    "name": "昭衍新药",
    "price": "49.30",
    "pct": "+10.00%",
    "limitUpTime": "10:49",
    "boards": "首板",
    "reason": "创新药CRO+实验猴+订单回暖",
    "sealMoney": "2.2亿"
  },
  {
    "ticker": "603200",
    "name": "上海洗霸",
    "price": "44.74",
    "pct": "+10.01%",
    "limitUpTime": "10:11",
    "boards": "2连板",
    "reason": "固态电池+液冷服务器+水处理",
    "sealMoney": "0.5亿"
  },
  {
    "ticker": "001266",
    "name": "宏英智能",
    "price": "39.96",
    "pct": "+9.99%",
    "limitUpTime": "13:59",
    "boards": "首板",
    "reason": "液冷储能+智能电控+业绩增长",
    "sealMoney": "0.4亿"
  },
  {
    "ticker": "605287",
    "name": "德才股份",
    "price": "37.39",
    "pct": "+10.00%",
    "limitUpTime": "10:20",
    "boards": "首板",
    "reason": "AI漫剧+火山引擎合作+建筑装饰",
    "sealMoney": "0.4亿"
  },
  {
    "ticker": "301190",
    "name": "善水科技",
    "price": "35.93",
    "pct": "+20.01%",
    "limitUpTime": "09:31",
    "boards": "3连板",
    "reason": "染料中间体+氯代吡啶+业绩增长",
    "sealMoney": "1.1亿"
  },
  {
    "ticker": "603590",
    "name": "康辰药业",
    "price": "32.11",
    "pct": "+10.00%",
    "limitUpTime": "09:55",
    "boards": "首板",
    "reason": "创新药+血凝酶+肿瘤管线+业绩增长",
    "sealMoney": "0.2亿"
  },
  {
    "ticker": "688806",
    "name": "泰诺麦博",
    "price": "30.67",
    "pct": "+19.99%",
    "limitUpTime": "09:57",
    "boards": "首板",
    "reason": "合胞病毒预防+医保放量+全人源单抗",
    "sealMoney": "0.4亿"
  },
  {
    "ticker": "605303",
    "name": "园林股份",
    "price": "28.66",
    "pct": "+10.02%",
    "limitUpTime": "09:25",
    "boards": "2连板",
    "reason": "复牌+重大资产重组+存储芯片+园林工程",
    "sealMoney": "1.7亿"
  },
  {
    "ticker": "603538",
    "name": "美诺华",
    "price": "28.59",
    "pct": "+10.00%",
    "limitUpTime": "09:48",
    "boards": "首板",
    "reason": "JH389+医药CDMO+制剂一体化",
    "sealMoney": "1.9亿"
  },
  {
    "ticker": "603948",
    "name": "建业股份",
    "price": "21.36",
    "pct": "+9.99%",
    "limitUpTime": "09:33",
    "boards": "首板",
    "reason": "电子化学品+超纯氨+环保增塑剂",
    "sealMoney": "0.2亿"
  }
]

export const limitBreakTop: LimitBreakItem[] = [
  {
    "ticker": "688265",
    "name": "南模生物",
    "price": "64.98",
    "pct": "+19.87%",
    "openTimes": 1,
    "turnover": "4亿"
  },
  {
    "ticker": "000668",
    "name": "荣丰控股",
    "price": "18.69",
    "pct": "+9.94%",
    "openTimes": 1,
    "turnover": "1亿"
  },
  {
    "ticker": "002513",
    "name": "蓝丰生化",
    "price": "5.86",
    "pct": "+7.13%",
    "openTimes": 1,
    "turnover": "3亿"
  },
  {
    "ticker": "600719",
    "name": "大连热电",
    "price": "8.72",
    "pct": "+6.60%",
    "openTimes": 4,
    "turnover": "6亿"
  },
  {
    "ticker": "002262",
    "name": "恩华药业",
    "price": "22.73",
    "pct": "+5.72%",
    "openTimes": 1,
    "turnover": "7亿"
  },
  {
    "ticker": "002043",
    "name": "兔宝宝",
    "price": "12.02",
    "pct": "+5.72%",
    "openTimes": 2,
    "turnover": "5亿"
  },
  {
    "ticker": "600418",
    "name": "江淮汽车",
    "price": "27.47",
    "pct": "+5.49%",
    "openTimes": 1,
    "turnover": "75亿"
  },
  {
    "ticker": "603982",
    "name": "泉峰汽车",
    "price": "6.77",
    "pct": "+4.48%",
    "openTimes": 2,
    "turnover": "2亿"
  }
]

export const ladderBoards: LadderBoard[] = [
  {
    "label": "2板",
    "count": 6,
    "names": [
      "上海洗霸",
      "亚邦股份",
      "传艺科技"
    ]
  },
  {
    "label": "3板",
    "count": 4,
    "names": [
      "九阳股份",
      "善水科技",
      "时代万恒"
    ]
  },
  {
    "label": "4板",
    "count": 1,
    "names": [
      "襄阳轴承"
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
    "ticker": "001246",
    "name": "力勤资源",
    "heat": "4210938",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "002242",
    "name": "九阳股份",
    "heat": "4094651",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "000678",
    "name": "襄阳轴承",
    "heat": "3572708",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "601127",
    "name": "赛力斯",
    "heat": "3308564",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "002487",
    "name": "大金重工",
    "heat": "3045469",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "000002",
    "name": "万科A",
    "heat": "2725343",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "600825",
    "name": "新华传媒",
    "heat": "2638993",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "600127",
    "name": "金健米业",
    "heat": "2239015",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "600418",
    "name": "江淮汽车",
    "heat": "2195218",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "300308",
    "name": "中际旭创",
    "heat": "1981458",
    "rankChange": 0
  }
]

export const skyrockets: RankItem[] = [
  {
    "rank": 1,
    "ticker": "002242",
    "name": "九阳股份",
    "heat": "75052.7",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "603816",
    "name": "顾家家居",
    "heat": "25533.2",
    "rankChange": 265
  },
  {
    "rank": 3,
    "ticker": "600664",
    "name": "哈药股份",
    "heat": "21627.1",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "600363",
    "name": "ST联光",
    "heat": "20881.4",
    "rankChange": 1
  },
  {
    "rank": 5,
    "ticker": "002185",
    "name": "华天科技",
    "heat": "19993.0",
    "rankChange": 1
  },
  {
    "rank": 6,
    "ticker": "002203",
    "name": "海亮股份",
    "heat": "18404.4",
    "rankChange": 119
  },
  {
    "rank": 7,
    "ticker": "000678",
    "name": "襄阳轴承",
    "heat": "18212.7",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "603833",
    "name": "欧派家居",
    "heat": "18000.5",
    "rankChange": 88
  },
  {
    "rank": 9,
    "ticker": "001246",
    "name": "力勤资源",
    "heat": "17531.3",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "688008",
    "name": "澜起科技",
    "heat": "16278.0",
    "rankChange": 2
  }
]

export const dragonTigerTop: DragonTigerItem[] = [
  {
    "rank": 1,
    "ticker": "000002",
    "name": "万科A",
    "pct": "+4.41%",
    "netValue": "0.71亿",
    "orgNet": "1.18亿",
    "hotMoneyNet": "0.36亿",
    "concepts": [
      "租售同权",
      "物业管理",
      "养老概念"
    ]
  },
  {
    "rank": 2,
    "ticker": "001246",
    "name": "力勤资源",
    "pct": "+206.59%",
    "netValue": "5.04亿",
    "orgNet": "—",
    "hotMoneyNet": "3.07亿",
    "concepts": []
  },
  {
    "rank": 3,
    "ticker": "000560",
    "name": "我爱我家",
    "pct": "-1.60%",
    "netValue": "1.71亿",
    "orgNet": "0.35亿",
    "hotMoneyNet": "0.05亿",
    "concepts": [
      "租售同权",
      "AIGC概念",
      "物业管理"
    ]
  },
  {
    "rank": 4,
    "ticker": "600418",
    "name": "江淮汽车",
    "pct": "+5.49%",
    "netValue": "-0.39亿",
    "orgNet": "—",
    "hotMoneyNet": "-5.97亿",
    "concepts": [
      "百度概念",
      "华为汽车",
      "DeepSeek概念"
    ]
  },
  {
    "rank": 6,
    "ticker": "000678",
    "name": "襄阳轴承",
    "pct": "+9.98%",
    "netValue": "1.39亿",
    "orgNet": "0.18亿",
    "hotMoneyNet": "0.23亿",
    "concepts": [
      "股权转让(并购重组)",
      "减速器",
      "军民融合"
    ]
  },
  {
    "rank": 6,
    "ticker": "000678",
    "name": "襄阳轴承",
    "pct": "+9.98%",
    "netValue": "1.46亿",
    "orgNet": "0.17亿",
    "hotMoneyNet": "0.24亿",
    "concepts": [
      "股权转让(并购重组)",
      "减速器",
      "军民融合"
    ]
  },
  {
    "rank": 7,
    "ticker": "600127",
    "name": "金健米业",
    "pct": "-1.65%",
    "netValue": "-1.29亿",
    "orgNet": "—",
    "hotMoneyNet": "0.39亿",
    "concepts": [
      "乳业",
      "玉米",
      "粮食概念"
    ]
  },
  {
    "rank": 9,
    "ticker": "601091",
    "name": "沈鼓集团",
    "pct": "-8.10%",
    "netValue": "-0.43亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.14亿",
    "concepts": [
      "注册制次新股",
      "煤化工概念",
      "天然气"
    ]
  },
  {
    "rank": 10,
    "ticker": "600825",
    "name": "新华传媒",
    "pct": "+9.99%",
    "netValue": "0.92亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.11亿",
    "concepts": [
      "文化传媒概念",
      "AI语料",
      "无人零售"
    ]
  },
  {
    "rank": 18,
    "ticker": "600721",
    "name": "百花医药",
    "pct": "+1.24%",
    "netValue": "-0.66亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.53亿",
    "concepts": [
      "青蒿素",
      "CRO概念",
      "细胞免疫治疗"
    ]
  }
]
