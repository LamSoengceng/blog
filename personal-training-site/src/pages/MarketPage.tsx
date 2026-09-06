import {
  BarChart3,
  CalendarClock,
  DatabaseZap,
  Gauge,
  LineChart,
  PieChart,
  ShieldAlert,
} from 'lucide-react'
import {
  capitalMetrics,
  domesticFlows,
  globalSignals,
  marketDataPlan,
  marketEvents,
  marketIndices,
  marketLearningChecklist,
  marketMeta,
  sectorPulse,
  watchlist,
  type MarketIndex,
} from '../data/marketData'

function isPositive(value: string) {
  return value.trim().startsWith('+')
}

function Sparkline({ points, positive }: { points: number[]; positive: boolean }) {
  const max = Math.max(...points)
  const min = Math.min(...points)
  const range = Math.max(max - min, 1)
  const coordinates = points
    .map((point, index) => {
      const x = (index / Math.max(points.length - 1, 1)) * 100
      const y = 48 - ((point - min) / range) * 42
      return `${x},${y}`
    })
    .join(' ')

  return (
    <svg className="market-sparkline" viewBox="0 0 100 54" preserveAspectRatio="none" aria-hidden="true">
      <polyline className={positive ? 'positive' : 'negative'} points={coordinates} />
    </svg>
  )
}

function IndexCard({ item }: { item: MarketIndex }) {
  const positive = isPositive(item.changePct)

  return (
    <article className="market-index-card">
      <div className="market-card-topline">
        <span>{item.region}</span>
        <b>{item.symbol}</b>
      </div>
      <h3>{item.name}</h3>
      <strong>{item.value}</strong>
      <div className="market-change-row">
        <span className={positive ? 'positive' : 'negative'}>{item.changePct}</span>
        <em>{item.change}</em>
      </div>
      <Sparkline points={item.trend} positive={positive} />
    </article>
  )
}

export function MarketPage() {
  const positiveIndices = marketIndices.filter((item) => isPositive(item.changePct)).length
  const marketBreadth = `${positiveIndices}/${marketIndices.length}`

  return (
    <section className="market-page page-band">
      <div className="market-hero">
        <div>
          <p className="eyebrow">A-share cockpit</p>
          <h1 className="page-title">50w 投资驾驶舱</h1>
          <p className="market-hero-copy">
            面向中等资金量账户的 A 股观察框架：以国内指数、成交额、行业轮动和 ETF 资金为主线，
            同时跟踪人民币、美债、纳指、商品和港股科技这些外部变量。页面服务于仓位管理、风险预算和复盘，不做买卖指令。
          </p>
        </div>
        <aside className="market-refresh-card">
          <DatabaseZap size={24} />
          <span>Last update</span>
          <strong>{marketMeta.updatedAt}</strong>
          <p>{marketMeta.sourceMode} · {marketMeta.nextRefresh}</p>
        </aside>
      </div>

      <div className="market-overview-grid">
        <article>
          <LineChart size={22} />
          <span>Tracked assets</span>
          <strong>{marketMeta.trackedMarkets}</strong>
          <p>A 股宽基、成长风格、港股科技和海外风险偏好。</p>
        </article>
        <article>
          <PieChart size={22} />
          <span>Capital profile</span>
          <strong>50w</strong>
          <p>按中等资金量账户设计，强调仓位和回撤控制。</p>
        </article>
        <article>
          <BarChart3 size={22} />
          <span>Index breadth</span>
          <strong>{marketBreadth}</strong>
          <p>示例指数里上涨数量 / 观察指数总数。</p>
        </article>
        <article>
          <CalendarClock size={22} />
          <span>Watchlist</span>
          <strong>{marketMeta.watchlistSize}</strong>
          <p>以宽基 ETF、行业 ETF 和海外映射为主。</p>
        </article>
      </div>

      <section className="market-section">
        <div className="section-heading">
          <p className="eyebrow">Risk budget</p>
          <h2>先定义资金约束，再看行情机会。</h2>
          <p>
            50w 账户最怕的问题不是“看不懂一只股票”，而是仓位过满、主题过挤、回撤超出心理预算。
            所以页面先把仓位、现金、单方向暴露和回撤预警放在前面。
          </p>
        </div>
        <div className="capital-metric-grid">
          {capitalMetrics.map((item) => (
            <article className="capital-metric-card" key={item.label}>
              <Gauge size={20} />
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="market-section">
        <div className="section-heading">
          <p className="eyebrow">Domestic pulse</p>
          <h2>A 股主线：指数、成交额、风格和板块扩散。</h2>
          <p>
            国内市场的观察顺序应当是：宽基指数状态、成交额和上涨家数、行业轮动、ETF 资金和政策催化。
            海外变量只作为风险预算调节器，不抢国内主线。
          </p>
        </div>
        <div className="market-index-rail">
          {marketIndices.map((item) => (
            <IndexCard item={item} key={item.symbol} />
          ))}
        </div>
      </section>

      <section className="market-lab-grid">
        <article className="market-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Domestic flows</p>
              <h3>资金与成交结构</h3>
            </div>
            <span>A-share</span>
          </div>
          <div className="domestic-flow-grid">
            {domesticFlows.map((flow) => (
              <div className="domestic-flow-card" key={flow.name}>
                <span>{flow.name}</span>
                <strong>{flow.value}</strong>
                <b>{flow.state}</b>
                <p>{flow.note}</p>
              </div>
            ))}
          </div>
        </article>

        <aside className="market-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Global read-through</p>
              <h3>海外变量</h3>
            </div>
            <span>macro</span>
          </div>
          <div className="global-signal-list">
            {globalSignals.map((signal) => (
              <div className="global-signal-row" key={signal.name}>
                <div>
                  <strong>{signal.name}</strong>
                  <span>{signal.read}</span>
                </div>
                <b>{signal.value}</b>
                <em className={isPositive(signal.change) ? 'positive' : 'negative'}>{signal.change}</em>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="market-lab-grid">
        <article className="market-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Watchlist</p>
              <h3>核心观察池</h3>
            </div>
            <span>ETF / themes</span>
          </div>
          <div className="market-watch-list">
            {watchlist.map((item) => (
              <div className="market-watch-row" key={item.symbol}>
                <div>
                  <strong>{item.symbol}</strong>
                  <span>{item.name}</span>
                </div>
                <em>{item.category}</em>
                <b className={isPositive(item.changePct) ? 'positive' : 'negative'}>{item.changePct}</b>
                <p>{item.note}</p>
              </div>
            ))}
          </div>
        </article>

        <aside className="market-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Sectors</p>
              <h3>行业拥挤度</h3>
            </div>
            <span>breadth</span>
          </div>
          <div className="sector-pulse-list">
            {sectorPulse.map((sector) => (
              <div className="sector-pulse-row" key={sector.name}>
                <div>
                  <strong>{sector.name}</strong>
                  <span>{sector.note}</span>
                </div>
                <b className={isPositive(sector.changePct) ? 'positive' : 'negative'}>{sector.changePct}</b>
                <em>{sector.breadth}</em>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="market-support-grid">
        <article className="market-panel">
          <div className="market-panel-title">
            <ShieldAlert size={22} />
            <div>
              <p className="eyebrow">Daily discipline</p>
              <h3>每日投资检查清单</h3>
            </div>
          </div>
          <ol className="market-check-list">
            {marketLearningChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </article>

        <article className="market-panel">
          <div className="market-panel-title">
            <CalendarClock size={22} />
            <div>
              <p className="eyebrow">Calendar</p>
              <h3>国内外事件风险</h3>
            </div>
          </div>
          <div className="market-event-list">
            {marketEvents.map((event) => (
              <div className="market-event-row" key={`${event.date}-${event.title}`}>
                <time>{event.date}</time>
                <strong>{event.title}</strong>
                <span className={`impact ${event.impact.toLowerCase()}`}>{event.impact}</span>
                <p>{event.note}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="market-panel market-agent-panel">
          <div className="market-panel-title">
            <ShieldAlert size={22} />
            <div>
              <p className="eyebrow">Agent workflow</p>
              <h3>每日更新链路</h3>
            </div>
          </div>
          <ul className="market-agent-list">
            {marketDataPlan.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="market-disclaimer">
            这个页面是研究框架和复盘工具，不是荐股系统。50w 账户更需要纪律和风险预算：
            页面必须显示数据来源、更新时间和失败状态；不要在前端暴露任何 API key。
          </p>
        </article>
      </section>
    </section>
  )
}
