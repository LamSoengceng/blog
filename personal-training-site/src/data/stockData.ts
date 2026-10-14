// 本文件由 scripts/generateStockData.mjs 自动生成，请勿手改。
// 数据源: hithink-finance（同花顺金融数据服务），数据日期: 2026-10-14 收盘
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
  "updatedAt": "2026-10-14 收盘",
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
    "value": "3,767.23",
    "change": "-33.63",
    "changePct": "-0.88%",
    "trend": [
      3936.52,
      3888.37,
      3823.62,
      3830.45,
      3842.19,
      3811.9,
      3813.79,
      3797.24,
      3800.86,
      3767.23
    ]
  },
  {
    "name": "沪深300",
    "symbol": "000300.SH",
    "region": "核心资产",
    "value": "4,217.68",
    "change": "-58.00",
    "changePct": "-1.36%",
    "trend": [
      4517.28,
      4439.14,
      4340.76,
      4345.21,
      4357.62,
      4310.28,
      4317.25,
      4287.98,
      4275.68,
      4217.68
    ]
  },
  {
    "name": "中证500",
    "symbol": "000905.SH",
    "region": "中盘成长",
    "value": "6,980.11",
    "change": "-104.98",
    "changePct": "-1.48%",
    "trend": [
      7791.82,
      7624.07,
      7402.3,
      7439.63,
      7435.16,
      7248.43,
      7251.01,
      7093.02,
      7085.09,
      6980.11
    ]
  },
  {
    "name": "中证1000",
    "symbol": "000852.SH",
    "region": "小盘弹性",
    "value": "6,905.17",
    "change": "-118.05",
    "changePct": "-1.68%",
    "trend": [
      7745.56,
      7570.14,
      7294.17,
      7325.35,
      7298.82,
      7138.58,
      7155.91,
      7021.47,
      7023.22,
      6905.17
    ]
  },
  {
    "name": "创业板指",
    "symbol": "399006.SZ",
    "region": "成长风格",
    "value": "2,866.76",
    "change": "-91.58",
    "changePct": "-3.10%",
    "trend": [
      3379.61,
      3288.948,
      3139.825,
      3142.563,
      3135.277,
      3036.657,
      3043.335,
      2963.824,
      2958.345,
      2866.763
    ]
  },
  {
    "name": "科创50",
    "symbol": "000688.SH",
    "region": "硬科技",
    "value": "1,380.26",
    "change": "-46.92",
    "changePct": "-3.29%",
    "trend": [
      1660.85,
      1621.87,
      1555.98,
      1569.34,
      1530.01,
      1456.32,
      1457.27,
      1426.72,
      1427.18,
      1380.26
    ]
  },
  {
    "name": "深证成指",
    "symbol": "399001.SZ",
    "region": "深市主板",
    "value": "12,110.59",
    "change": "-243.11",
    "changePct": "-1.97%",
    "trend": [
      13636.074,
      13316.969,
      12858.753,
      12901.947,
      12887.62,
      12620.897,
      12641.858,
      12384.869,
      12353.699,
      12110.591
    ]
  }
]

export const watchlist: WatchItem[] = [
  {
    "symbol": "510300",
    "name": "沪深300ETF",
    "category": "核心仓",
    "price": "4.294",
    "changePct": "-1.17%",
    "note": "用于观察大盘核心资产，不等同于买入建议。"
  },
  {
    "symbol": "510500",
    "name": "中证500ETF",
    "category": "中盘",
    "price": "7.025",
    "changePct": "-1.18%",
    "note": "适合作为中盘景气和市场广度的观察锚。"
  },
  {
    "symbol": "512100",
    "name": "中证1000ETF",
    "category": "小盘",
    "price": "2.810",
    "changePct": "-1.47%",
    "note": "波动弹性高，50w 账户要限制仓位拥挤。"
  },
  {
    "symbol": "588000",
    "name": "科创50ETF",
    "category": "硬科技",
    "price": "1.458",
    "changePct": "-3.25%",
    "note": "关注半导体、AI、创新药等成长估值修复。"
  },
  {
    "symbol": "159915",
    "name": "创业板ETF",
    "category": "成长",
    "price": "2.891",
    "changePct": "-2.79%",
    "note": "和风险偏好、美债利率、成长股情绪联动更强。"
  },
  {
    "symbol": "512480",
    "name": "半导体ETF",
    "category": "行业主题",
    "price": "0.858",
    "changePct": "-3.16%",
    "note": "主题弹性大，适合监控成交额和拥挤度。"
  },
  {
    "symbol": "515880",
    "name": "通信ETF",
    "category": "AI链条",
    "price": "0.548",
    "changePct": "-4.20%",
    "note": "关注算力、光模块、运营商资本开支。"
  },
  {
    "symbol": "512800",
    "name": "银行ETF",
    "category": "红利/防御",
    "price": "0.865",
    "changePct": "+0.12%",
    "note": "适合观察高股息、防御风格和利率预期。"
  },
  {
    "symbol": "513180",
    "name": "恒生科技ETF",
    "category": "港股弹性",
    "price": "0.526",
    "changePct": "+1.54%",
    "note": "受港股流动性、美元利率和互联网监管预期影响。"
  },
  {
    "symbol": "159941",
    "name": "纳指ETF",
    "category": "海外映射",
    "price": "1.767",
    "changePct": "+0.45%",
    "note": "不作为 A 股替代，只看全球科技风险偏好。"
  }
]

export const sectorPulse: SectorPulse[] = [
  {
    "name": "半导体",
    "changePct": "-2.95%",
    "breadth": "n/a",
    "note": "高弹性行业，重点看成交额放大是否持续。（指数代码 881121.TI）"
  },
  {
    "name": "AI算力",
    "changePct": "-1.76%",
    "breadth": "n/a",
    "note": "东数西算(算力)概念指数，主题强时容易拥挤。（指数代码 885957.TI）"
  },
  {
    "name": "高股息",
    "changePct": "+0.32%",
    "breadth": "n/a",
    "note": "高股息精选概念，防御风格，和利率、避险偏好相关。（指数代码 886072.TI）"
  },
  {
    "name": "消费复苏",
    "changePct": "-1.24%",
    "breadth": "n/a",
    "note": "以白酒行业指数代表消费链条景气验证。（指数代码 881273.TI）"
  },
  {
    "name": "新能源",
    "changePct": "-2.45%",
    "breadth": "n/a",
    "note": "光伏概念指数，供给出清和价格周期是核心变量。（指数代码 885531.TI）"
  },
  {
    "name": "券商",
    "changePct": "+0.04%",
    "breadth": "n/a",
    "note": "证券行业指数，常作为风险偏好和成交额弹性的放大器。（指数代码 881157.TI）"
  }
]

export const domesticFlows: DomesticFlow[] = [
  {
    "name": "两市成交额",
    "value": "1.41万亿",
    "state": "1.41万亿（沪+深）",
    "note": "沪市+深市成交额合计（hithink 指数快照口径），判断行情级别的第一层过滤器。"
  },
  {
    "name": "沪市成交额",
    "value": "6625亿",
    "state": "占两市 46.8%",
    "note": "沪市主板与科创板合计成交，观察权重与大盘活跃度。"
  },
  {
    "name": "深市成交额",
    "value": "7519亿",
    "state": "占两市 53.2%",
    "note": "深市主板与中小盘成交，观察成长与题材活跃度。"
  },
  {
    "name": "创业板成交额",
    "value": "3619亿",
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
  "tradeDate": "2026-10-14",
  "limitUpCount": 39,
  "limitBreakCount": 24,
  "hotStockCount": 30
}

export const limitUpTop: LimitUpItem[] = [
  {
    "ticker": "002552",
    "name": "宝鼎科技",
    "price": "45.80",
    "pct": "+9.99%",
    "limitUpTime": "09:25",
    "boards": "首板",
    "reason": "业绩预增+覆铜板+黄金采选",
    "sealMoney": "2.7亿"
  },
  {
    "ticker": "600391",
    "name": "航发科技",
    "price": "42.66",
    "pct": "+10.01%",
    "limitUpTime": "10:06",
    "boards": "2连板",
    "reason": "航空发动机+长江1000A+外贸转包",
    "sealMoney": "1.6亿"
  },
  {
    "ticker": "603533",
    "name": "掌阅科技",
    "price": "29.92",
    "pct": "+10.00%",
    "limitUpTime": "10:05",
    "boards": "首板",
    "reason": "AI短剧+短剧出海+数字阅读",
    "sealMoney": "1.6亿"
  },
  {
    "ticker": "002813",
    "name": "路畅科技",
    "price": "29.02",
    "pct": "+10.01%",
    "limitUpTime": "09:56",
    "boards": "2连板",
    "reason": "控制权变更+复牌+智能座舱+抬头显示",
    "sealMoney": "0.5亿"
  },
  {
    "ticker": "601858",
    "name": "中国科传",
    "price": "26.11",
    "pct": "+9.98%",
    "limitUpTime": "11:01",
    "boards": "首板",
    "reason": "AI应用+数字教育+出版+央企",
    "sealMoney": "0.2亿"
  },
  {
    "ticker": "603992",
    "name": "松霖科技",
    "price": "24.61",
    "pct": "+10.01%",
    "limitUpTime": "14:52",
    "boards": "首板",
    "reason": "服务机器人+大健康硬件+智能厨卫",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "000823",
    "name": "超声电子",
    "price": "24.55",
    "pct": "+9.99%",
    "limitUpTime": "09:25",
    "boards": "2连板",
    "reason": "三季报预增+覆铜板+印制板+高阶HDI",
    "sealMoney": "2.6亿"
  },
  {
    "ticker": "001216",
    "name": "华瓷股份",
    "price": "23.99",
    "pct": "+10.00%",
    "limitUpTime": "14:18",
    "boards": "首板",
    "reason": "氧化锆粉体+MLCC验证+越南基地+日用陶瓷",
    "sealMoney": "0.2亿"
  },
  {
    "ticker": "601811",
    "name": "新华文轩",
    "price": "23.25",
    "pct": "+9.98%",
    "limitUpTime": "11:07",
    "boards": "首板",
    "reason": "出版传媒+数字教育+民族出版收购",
    "sealMoney": "0.0亿"
  },
  {
    "ticker": "603096",
    "name": "新经典",
    "price": "23.07",
    "pct": "+10.01%",
    "limitUpTime": "09:30",
    "boards": "4连板",
    "reason": "AI应用+自有IP+图书出版",
    "sealMoney": "0.5亿"
  },
  {
    "ticker": "000668",
    "name": "荣丰控股",
    "price": "22.62",
    "pct": "+10.02%",
    "limitUpTime": "09:25",
    "boards": "2连板",
    "reason": "控制权变更+复牌+要约收购+跨境物流",
    "sealMoney": "0.6亿"
  },
  {
    "ticker": "603598",
    "name": "引力传媒",
    "price": "21.91",
    "pct": "+9.99%",
    "limitUpTime": "10:27",
    "boards": "首板",
    "reason": "AI短剧+全域营销+AI用研",
    "sealMoney": "0.2亿"
  }
]

export const limitBreakTop: LimitBreakItem[] = [
  {
    "ticker": "301132",
    "name": "满坤科技",
    "price": "75.00",
    "pct": "+18.32%",
    "openTimes": 16,
    "turnover": "15亿"
  },
  {
    "ticker": "301052",
    "name": "果麦文化",
    "price": "34.06",
    "pct": "+14.49%",
    "openTimes": 1,
    "turnover": "12亿"
  },
  {
    "ticker": "300516",
    "name": "久之洋",
    "price": "36.93",
    "pct": "+11.91%",
    "openTimes": 1,
    "turnover": "9亿"
  },
  {
    "ticker": "301036",
    "name": "双乐股份",
    "price": "24.92",
    "pct": "+11.40%",
    "openTimes": 3,
    "turnover": "3亿"
  },
  {
    "ticker": "605318",
    "name": "法狮龙",
    "price": "76.46",
    "pct": "+8.15%",
    "openTimes": 8,
    "turnover": "3亿"
  },
  {
    "ticker": "605287",
    "name": "德才股份",
    "price": "48.90",
    "pct": "+6.77%",
    "openTimes": 3,
    "turnover": "16亿"
  },
  {
    "ticker": "600715",
    "name": "文投控股",
    "price": "1.88",
    "pct": "+6.21%",
    "openTimes": 1,
    "turnover": "5亿"
  },
  {
    "ticker": "603727",
    "name": "博迈科",
    "price": "20.55",
    "pct": "+6.15%",
    "openTimes": 1,
    "turnover": "3亿"
  }
]

export const ladderBoards: LadderBoard[] = [
  {
    "label": "2板",
    "count": 11,
    "names": [
      "万里股份",
      "冰山冷热",
      "哈空调"
    ]
  },
  {
    "label": "3板",
    "count": 1,
    "names": [
      "醋化股份"
    ]
  },
  {
    "label": "4板",
    "count": 3,
    "names": [
      "慈文传媒",
      "新经典",
      "百洋股份"
    ]
  }
]

export const hotStocks: RankItem[] = [
  {
    "rank": 1,
    "ticker": "605577",
    "name": "龙版传媒",
    "heat": "3984070",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "600127",
    "name": "金健米业",
    "heat": "3844788",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "002639",
    "name": "雪人集团",
    "heat": "3728926",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "600693",
    "name": "东百集团",
    "heat": "3665138",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "600418",
    "name": "江淮汽车",
    "heat": "3380949",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "601811",
    "name": "新华文轩",
    "heat": "3303084",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "301660",
    "name": "粤芯半导体",
    "heat": "3032393",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "002242",
    "name": "九阳股份",
    "heat": "2999544",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "000823",
    "name": "超声电子",
    "heat": "2799650",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "300308",
    "name": "中际旭创",
    "heat": "2663239",
    "rankChange": 0
  }
]

export const skyrockets: RankItem[] = [
  {
    "rank": 1,
    "ticker": "601811",
    "name": "新华文轩",
    "heat": "44314.9",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "603533",
    "name": "掌阅科技",
    "heat": "28949.6",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "002493",
    "name": "荣盛石化",
    "heat": "27468.1",
    "rankChange": 154
  },
  {
    "rank": 4,
    "ticker": "601088",
    "name": "中国神华",
    "heat": "24562.2",
    "rankChange": 8
  },
  {
    "rank": 5,
    "ticker": "300299",
    "name": "富春股份",
    "heat": "24248.6",
    "rankChange": 2
  },
  {
    "rank": 6,
    "ticker": "002029",
    "name": "七匹狼",
    "heat": "23910.9",
    "rankChange": 8
  },
  {
    "rank": 7,
    "ticker": "002080",
    "name": "中材科技",
    "heat": "22788.3",
    "rankChange": 3
  },
  {
    "rank": 8,
    "ticker": "688388",
    "name": "嘉元科技",
    "heat": "21963.6",
    "rankChange": 145
  },
  {
    "rank": 9,
    "ticker": "600121",
    "name": "郑州煤电",
    "heat": "21583.2",
    "rankChange": 2
  },
  {
    "rank": 10,
    "ticker": "000601",
    "name": "韶能股份",
    "heat": "19931.2",
    "rankChange": 6
  }
]

export const dragonTigerTop: DragonTigerItem[] = [
  {
    "rank": 2,
    "ticker": "600127",
    "name": "金健米业",
    "pct": "+4.68%",
    "netValue": "-0.92亿",
    "orgNet": "—",
    "hotMoneyNet": "1.36亿",
    "concepts": [
      "乳业",
      "玉米",
      "粮食概念"
    ]
  },
  {
    "rank": 3,
    "ticker": "002242",
    "name": "九阳股份",
    "pct": "+6.19%",
    "netValue": "1.50亿",
    "orgNet": "0.29亿",
    "hotMoneyNet": "0.93亿",
    "concepts": [
      "家用电器",
      "净水概念",
      "绿色电力"
    ]
  },
  {
    "rank": 7,
    "ticker": "301660",
    "name": "粤芯半导体",
    "pct": "+223.06%",
    "netValue": "3.82亿",
    "orgNet": "—",
    "hotMoneyNet": "2.76亿",
    "concepts": []
  },
  {
    "rank": 8,
    "ticker": "605058",
    "name": "澳弘电子",
    "pct": "+10.00%",
    "netValue": "-0.21亿",
    "orgNet": "0.67亿",
    "hotMoneyNet": "-0.52亿",
    "concepts": [
      "PCB概念",
      "毫米波雷达",
      "共封装光学(CPO)"
    ]
  },
  {
    "rank": 11,
    "ticker": "600241",
    "name": "时代万恒",
    "pct": "-0.62%",
    "netValue": "0.06亿",
    "orgNet": "—",
    "hotMoneyNet": "0.75亿",
    "concepts": [
      "锂电池概念",
      "国企改革"
    ]
  },
  {
    "rank": 12,
    "ticker": "601811",
    "name": "新华文轩",
    "pct": "-8.09%",
    "netValue": "-0.09亿",
    "orgNet": "-0.27亿",
    "hotMoneyNet": "-0.04亿",
    "concepts": [
      "文化传媒概念",
      "知识产权保护",
      "NFT概念"
    ]
  },
  {
    "rank": 13,
    "ticker": "002487",
    "name": "大金重工",
    "pct": "-10.00%",
    "netValue": "-2.36亿",
    "orgNet": "0.20亿",
    "hotMoneyNet": "0.09亿",
    "concepts": [
      "振兴东北",
      "风电",
      "绿色电力"
    ]
  },
  {
    "rank": 14,
    "ticker": "002639",
    "name": "雪人集团",
    "pct": "+10.03%",
    "netValue": "1.33亿",
    "orgNet": "0.50亿",
    "hotMoneyNet": "—",
    "concepts": [
      "空气能热泵",
      "核电",
      "海工装备"
    ]
  },
  {
    "rank": 19,
    "ticker": "600812",
    "name": "华北制药",
    "pct": "-9.95%",
    "netValue": "-0.11亿",
    "orgNet": "—",
    "hotMoneyNet": "0.58亿",
    "concepts": [
      "仿制药一致性评价",
      "流感",
      "维生素"
    ]
  },
  {
    "rank": 21,
    "ticker": "001330",
    "name": "博纳影业",
    "pct": "-3.52%",
    "netValue": "-0.95亿",
    "orgNet": "0.24亿",
    "hotMoneyNet": "-1.16亿",
    "concepts": [
      "文化传媒概念",
      "短剧游戏",
      "AI视频"
    ]
  }
]
