// 本文件由 scripts/generateStockData.mjs 自动生成，请勿手改。
// 数据源: hithink-finance（同花顺金融数据服务），数据日期: 2026-10-08 收盘
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
  "updatedAt": "2026-10-08 收盘",
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
    "value": "3,811.90",
    "change": "-30.29",
    "changePct": "-0.79%",
    "trend": [
      3875.6,
      3911.87,
      3949.91,
      3952.13,
      3936.52,
      3888.37,
      3823.62,
      3830.45,
      3842.19,
      3811.9
    ]
  },
  {
    "name": "沪深300",
    "symbol": "000300.SH",
    "region": "核心资产",
    "value": "4,310.28",
    "change": "-47.34",
    "changePct": "-1.09%",
    "trend": [
      4460.16,
      4507.39,
      4539.57,
      4544.59,
      4517.28,
      4439.14,
      4340.76,
      4345.21,
      4357.62,
      4310.28
    ]
  },
  {
    "name": "中证500",
    "symbol": "000905.SH",
    "region": "中盘成长",
    "value": "7,248.43",
    "change": "-186.73",
    "changePct": "-2.51%",
    "trend": [
      7654.98,
      7799.61,
      7850.48,
      7828.94,
      7791.82,
      7624.07,
      7402.3,
      7439.63,
      7435.16,
      7248.43
    ]
  },
  {
    "name": "中证1000",
    "symbol": "000852.SH",
    "region": "小盘弹性",
    "value": "7,138.58",
    "change": "-160.24",
    "changePct": "-2.20%",
    "trend": [
      7548.82,
      7687.59,
      7766.33,
      7759.03,
      7745.56,
      7570.14,
      7294.17,
      7325.35,
      7298.82,
      7138.58
    ]
  },
  {
    "name": "创业板指",
    "symbol": "399006.SZ",
    "region": "成长风格",
    "value": "3,036.66",
    "change": "-98.62",
    "changePct": "-3.15%",
    "trend": [
      3298.31,
      3372.676,
      3399.59,
      3399.93,
      3379.61,
      3288.948,
      3139.825,
      3142.563,
      3135.277,
      3036.657
    ]
  },
  {
    "name": "科创50",
    "symbol": "000688.SH",
    "region": "硬科技",
    "value": "1,456.32",
    "change": "-73.69",
    "changePct": "-4.82%",
    "trend": [
      1606.29,
      1652.63,
      1657.48,
      1665.04,
      1660.85,
      1621.87,
      1555.98,
      1569.34,
      1530.01,
      1456.32
    ]
  },
  {
    "name": "深证成指",
    "symbol": "399001.SZ",
    "region": "深市主板",
    "value": "12,620.90",
    "change": "-266.72",
    "changePct": "-2.07%",
    "trend": [
      13409.908,
      13640.873,
      13730.02,
      13723.735,
      13636.074,
      13316.969,
      12858.753,
      12901.947,
      12887.62,
      12620.897
    ]
  }
]

export const watchlist: WatchItem[] = [
  {
    "symbol": "510300",
    "name": "沪深300ETF",
    "category": "核心仓",
    "price": "4.389",
    "changePct": "-0.97%",
    "note": "用于观察大盘核心资产，不等同于买入建议。"
  },
  {
    "symbol": "510500",
    "name": "中证500ETF",
    "category": "中盘",
    "price": "7.279",
    "changePct": "-2.58%",
    "note": "适合作为中盘景气和市场广度的观察锚。"
  },
  {
    "symbol": "512100",
    "name": "中证1000ETF",
    "category": "小盘",
    "price": "2.904",
    "changePct": "-2.26%",
    "note": "波动弹性高，50w 账户要限制仓位拥挤。"
  },
  {
    "symbol": "588000",
    "name": "科创50ETF",
    "category": "硬科技",
    "price": "1.537",
    "changePct": "-4.89%",
    "note": "关注半导体、AI、创新药等成长估值修复。"
  },
  {
    "symbol": "159915",
    "name": "创业板ETF",
    "category": "成长",
    "price": "3.053",
    "changePct": "-3.20%",
    "note": "和风险偏好、美债利率、成长股情绪联动更强。"
  },
  {
    "symbol": "512480",
    "name": "半导体ETF",
    "category": "行业主题",
    "price": "0.914",
    "changePct": "-4.29%",
    "note": "主题弹性大，适合监控成交额和拥挤度。"
  },
  {
    "symbol": "515880",
    "name": "通信ETF",
    "category": "AI链条",
    "price": "0.594",
    "changePct": "-5.11%",
    "note": "关注算力、光模块、运营商资本开支。"
  },
  {
    "symbol": "512800",
    "name": "银行ETF",
    "category": "红利/防御",
    "price": "0.859",
    "changePct": "+0.70%",
    "note": "适合观察高股息、防御风格和利率预期。"
  },
  {
    "symbol": "513180",
    "name": "恒生科技ETF",
    "category": "港股弹性",
    "price": "0.516",
    "changePct": "-3.37%",
    "note": "受港股流动性、美元利率和互联网监管预期影响。"
  },
  {
    "symbol": "159941",
    "name": "纳指ETF",
    "category": "海外映射",
    "price": "1.746",
    "changePct": "+0.63%",
    "note": "不作为 A 股替代，只看全球科技风险偏好。"
  }
]

export const sectorPulse: SectorPulse[] = [
  {
    "name": "半导体",
    "changePct": "-4.98%",
    "breadth": "n/a",
    "note": "高弹性行业，重点看成交额放大是否持续。（指数代码 881121.TI）"
  },
  {
    "name": "AI算力",
    "changePct": "-1.93%",
    "breadth": "n/a",
    "note": "东数西算(算力)概念指数，主题强时容易拥挤。（指数代码 885957.TI）"
  },
  {
    "name": "高股息",
    "changePct": "+0.74%",
    "breadth": "n/a",
    "note": "高股息精选概念，防御风格，和利率、避险偏好相关。（指数代码 886072.TI）"
  },
  {
    "name": "消费复苏",
    "changePct": "-0.47%",
    "breadth": "n/a",
    "note": "以白酒行业指数代表消费链条景气验证。（指数代码 881273.TI）"
  },
  {
    "name": "新能源",
    "changePct": "-1.14%",
    "breadth": "n/a",
    "note": "光伏概念指数，供给出清和价格周期是核心变量。（指数代码 885531.TI）"
  },
  {
    "name": "券商",
    "changePct": "-1.52%",
    "breadth": "n/a",
    "note": "证券行业指数，常作为风险偏好和成交额弹性的放大器。（指数代码 881157.TI）"
  }
]

export const domesticFlows: DomesticFlow[] = [
  {
    "name": "两市成交额",
    "value": "1.68万亿",
    "state": "1.68万亿（沪+深）",
    "note": "沪市+深市成交额合计（hithink 指数快照口径），判断行情级别的第一层过滤器。"
  },
  {
    "name": "沪市成交额",
    "value": "8112亿",
    "state": "占两市 48.2%",
    "note": "沪市主板与科创板合计成交，观察权重与大盘活跃度。"
  },
  {
    "name": "深市成交额",
    "value": "8709亿",
    "state": "占两市 51.8%",
    "note": "深市主板与中小盘成交，观察成长与题材活跃度。"
  },
  {
    "name": "创业板成交额",
    "value": "4253亿",
    "state": "占深市 48.8%",
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
  "tradeDate": "2026-10-08",
  "limitUpCount": 44,
  "limitBreakCount": 30,
  "hotStockCount": 30
}

export const limitUpTop: LimitUpItem[] = [
  {
    "ticker": "603200",
    "name": "上海洗霸",
    "price": "49.21",
    "pct": "+9.99%",
    "limitUpTime": "10:05",
    "boards": "3连板",
    "reason": "固态电池+液冷服务器+水处理",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "605298",
    "name": "必得科技",
    "price": "44.97",
    "pct": "+10.00%",
    "limitUpTime": "09:43",
    "boards": "首板",
    "reason": "轨道交通+半导体注入猜测+股份转让",
    "sealMoney": "0.8亿"
  },
  {
    "ticker": "688196",
    "name": "卓越新能",
    "price": "36.12",
    "pct": "+20.00%",
    "limitUpTime": "11:00",
    "boards": "首板",
    "reason": "生物柴油+绿色燃料+海外扩产",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "605303",
    "name": "园林股份",
    "price": "31.53",
    "pct": "+10.01%",
    "limitUpTime": "09:25",
    "boards": "3连板",
    "reason": "重大重组+复牌+存储芯片+园林工程",
    "sealMoney": "1.5亿"
  },
  {
    "ticker": "301697",
    "name": "贝特利",
    "price": "31.51",
    "pct": "+19.99%",
    "limitUpTime": "09:38",
    "boards": "首板",
    "reason": "半导体材料+低温光伏浆料+三季报预增",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "300530",
    "name": "领湃科技",
    "price": "24.08",
    "pct": "+19.98%",
    "limitUpTime": "11:00",
    "boards": "首板",
    "reason": "新能源电池模组+新能源EPC+储能+衡阳国资",
    "sealMoney": "0.3亿"
  },
  {
    "ticker": "603073",
    "name": "彩蝶实业",
    "price": "22.97",
    "pct": "+10.01%",
    "limitUpTime": "09:59",
    "boards": "首板",
    "reason": "涤纶面料+功能性面料+埃及产能",
    "sealMoney": "0.2亿"
  },
  {
    "ticker": "600026",
    "name": "中远海能",
    "price": "22.62",
    "pct": "+10.02%",
    "limitUpTime": "09:31",
    "boards": "首板",
    "reason": "油运景气+LNG运输+上海LNG增资",
    "sealMoney": "1.8亿"
  },
  {
    "ticker": "002058",
    "name": "紫竹高科",
    "price": "22.22",
    "pct": "+10.00%",
    "limitUpTime": "09:25",
    "boards": "3连板",
    "reason": "固态电池+铝塑膜+电池客户",
    "sealMoney": "1.4亿"
  },
  {
    "ticker": "603906",
    "name": "龙蟠科技",
    "price": "20.94",
    "pct": "+9.98%",
    "limitUpTime": "13:13",
    "boards": "2连板",
    "reason": "磷酸铁锂+固态电池材料+液冷+半年报扭亏",
    "sealMoney": "0.1亿"
  },
  {
    "ticker": "001336",
    "name": "楚环科技",
    "price": "20.65",
    "pct": "+10.02%",
    "limitUpTime": "10:00",
    "boards": "首板",
    "reason": "废气治理+半导体环保+航空航天投资",
    "sealMoney": "0.2亿"
  },
  {
    "ticker": "603137",
    "name": "恒尚节能",
    "price": "19.56",
    "pct": "+10.01%",
    "limitUpTime": "09:40",
    "boards": "首板",
    "reason": "存储模组+建筑幕墙+光伏幕墙",
    "sealMoney": "0.6亿"
  }
]

export const limitBreakTop: LimitBreakItem[] = [
  {
    "ticker": "300619",
    "name": "金银河",
    "price": "28.17",
    "pct": "+17.57%",
    "openTimes": 1,
    "turnover": "7亿"
  },
  {
    "ticker": "603823",
    "name": "百合花",
    "price": "46.59",
    "pct": "+9.86%",
    "openTimes": 3,
    "turnover": "18亿"
  },
  {
    "ticker": "002580",
    "name": "圣阳股份",
    "price": "21.36",
    "pct": "+9.43%",
    "openTimes": 2,
    "turnover": "25亿"
  },
  {
    "ticker": "601872",
    "name": "招商轮船",
    "price": "22.03",
    "pct": "+9.33%",
    "openTimes": 58,
    "turnover": "50亿"
  },
  {
    "ticker": "002496",
    "name": "辉丰股份",
    "price": "2.29",
    "pct": "+9.05%",
    "openTimes": 2,
    "turnover": "3亿"
  },
  {
    "ticker": "002149",
    "name": "西部材料",
    "price": "33.62",
    "pct": "+8.45%",
    "openTimes": 14,
    "turnover": "20亿"
  },
  {
    "ticker": "603727",
    "name": "博迈科",
    "price": "20.25",
    "pct": "+8.23%",
    "openTimes": 2,
    "turnover": "3亿"
  },
  {
    "ticker": "603002",
    "name": "宏昌电子",
    "price": "18.69",
    "pct": "+7.79%",
    "openTimes": 15,
    "turnover": "25亿"
  }
]

export const ladderBoards: LadderBoard[] = [
  {
    "label": "2板",
    "count": 3,
    "names": [
      "兴业股份",
      "陆家嘴",
      "龙蟠科技"
    ]
  },
  {
    "label": "3板",
    "count": 4,
    "names": [
      "上海洗霸",
      "传艺科技",
      "园林股份"
    ]
  },
  {
    "label": "4板",
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
    "heat": "4107558",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "001246",
    "name": "力勤资源",
    "heat": "3764910",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "002384",
    "name": "东山精密",
    "heat": "3352692",
    "rankChange": 0
  },
  {
    "rank": 4,
    "ticker": "601091",
    "name": "沈鼓集团",
    "heat": "3269523",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "600825",
    "name": "新华传媒",
    "heat": "3178867",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "600127",
    "name": "金健米业",
    "heat": "3095234",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "688825",
    "name": "长鑫科技",
    "heat": "3043002",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "002487",
    "name": "大金重工",
    "heat": "3007206",
    "rankChange": 0
  },
  {
    "rank": 9,
    "ticker": "300308",
    "name": "中际旭创",
    "heat": "2704818",
    "rankChange": 0
  },
  {
    "rank": 10,
    "ticker": "000002",
    "name": "万科A",
    "heat": "2676872",
    "rankChange": 0
  }
]

export const skyrockets: RankItem[] = [
  {
    "rank": 1,
    "ticker": "600418",
    "name": "江淮汽车",
    "heat": "116500.3",
    "rankChange": 0
  },
  {
    "rank": 2,
    "ticker": "002384",
    "name": "东山精密",
    "heat": "30519.3",
    "rankChange": 0
  },
  {
    "rank": 3,
    "ticker": "300821",
    "name": "东岳硅材",
    "heat": "25139.1",
    "rankChange": 45
  },
  {
    "rank": 4,
    "ticker": "002580",
    "name": "圣阳股份",
    "heat": "22860.2",
    "rankChange": 0
  },
  {
    "rank": 5,
    "ticker": "600241",
    "name": "时代万恒",
    "heat": "22342.7",
    "rankChange": 0
  },
  {
    "rank": 6,
    "ticker": "600825",
    "name": "新华传媒",
    "heat": "20558.5",
    "rankChange": 0
  },
  {
    "rank": 7,
    "ticker": "002074",
    "name": "国轩高科",
    "heat": "18404.7",
    "rankChange": 0
  },
  {
    "rank": 8,
    "ticker": "002733",
    "name": "雄韬股份",
    "heat": "17829.8",
    "rankChange": 6
  },
  {
    "rank": 9,
    "ticker": "000333",
    "name": "美的集团",
    "heat": "17238.1",
    "rankChange": 15
  },
  {
    "rank": 10,
    "ticker": "600722",
    "name": "金牛化工",
    "heat": "16939.1",
    "rankChange": 0
  }
]

export const dragonTigerTop: DragonTigerItem[] = [
  {
    "rank": 1,
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
    "ticker": "600127",
    "name": "金健米业",
    "pct": "+5.02%",
    "netValue": "1.24亿",
    "orgNet": "—",
    "hotMoneyNet": "-0.80亿",
    "concepts": [
      "玉米",
      "粮食概念",
      "乳业"
    ]
  },
  {
    "rank": 5,
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
    "rank": 6,
    "ticker": "002580",
    "name": "圣阳股份",
    "pct": "+9.43%",
    "netValue": "1.89亿",
    "orgNet": "0.55亿",
    "hotMoneyNet": "0.05亿",
    "concepts": [
      "动力电池回收",
      "钠离子电池",
      "固态电池"
    ]
  },
  {
    "rank": 8,
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
    "rank": 9,
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
    "rank": 9,
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
    "rank": 10,
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
  },
  {
    "rank": 11,
    "ticker": "600418",
    "name": "江淮汽车",
    "pct": "-10.01%",
    "netValue": "0.62亿",
    "orgNet": "—",
    "hotMoneyNet": "3.80亿",
    "concepts": [
      "华为汽车",
      "百度概念",
      "DeepSeek概念"
    ]
  },
  {
    "rank": 14,
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
  }
]
