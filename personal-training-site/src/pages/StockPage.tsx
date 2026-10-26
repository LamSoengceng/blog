import {
  BarChart3,
  DatabaseZap,
  Flame,
  LineChart,
  Rocket,
  TrendingUp,
  Trophy,
  Zap,
} from 'lucide-react'
import {
  domesticFlows,
  dragonTigerTop,
  hotStocks,
  ladderBoards,
  ladderDate,
  limitBreakTop,
  limitUpTop,
  sectorPulse,
  skyrockets,
  stockBreadth,
  stockIndices,
  stockMeta,
  type DragonTigerItem,
  type LimitBreakItem,
  type LimitUpItem,
  type RankItem,
  type StockIndex,
  watchlist,
} from '../data/stockData'

function isPositive(value: string) {
  return value.trim().startsWith('+')
}

function isStatic(value: string) {
  return value === '静态参考' || value === '—'
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

function IndexCard({ item }: { item: StockIndex }) {
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

function LimitUpRow({ item }: { item: LimitUpItem }) {
  return (
    <div className="stock-row stock-limitup-row">
      <div className="stock-row-main">
        <strong>{item.name}</strong>
        <span>{item.ticker}</span>
      </div>
      <b className="stock-boards">{item.boards}</b>
      <span className="stock-time">{item.limitUpTime}</span>
      <em className={isPositive(item.pct) ? 'positive' : 'negative'}>{item.pct}</em>
      <p className="stock-reason">{item.reason || '—'}</p>
      <i className="stock-seal">{item.sealMoney}</i>
    </div>
  )
}

function LimitBreakRow({ item }: { item: LimitBreakItem }) {
  return (
    <div className="stock-row stock-break-row">
      <div className="stock-row-main">
        <strong>{item.name}</strong>
        <span>{item.ticker}</span>
      </div>
      <em className={isPositive(item.pct) ? 'positive' : 'negative'}>{item.pct}</em>
      <span className="stock-time">炸板 {item.openTimes} 次</span>
      <i className="stock-seal">{item.turnover}</i>
    </div>
  )
}

function RankRow({ item, accent }: { item: RankItem; accent: string }) {
  return (
    <div className="stock-rank-row">
      <b className={`stock-rank ${accent}`}>{item.rank}</b>
      <div className="stock-row-main">
        <strong>{item.name}</strong>
        <span>{item.ticker}</span>
      </div>
      <em>{Number(item.heat).toLocaleString('zh-CN')}</em>
      {item.rankChange > 0 ? (
        <i className="positive">↑{item.rankChange}</i>
      ) : item.rankChange < 0 ? (
        <i className="negative">↓{Math.abs(item.rankChange)}</i>
      ) : (
        <i className="muted">—</i>
      )}
    </div>
  )
}

function DragonTigerRow({ item }: { item: DragonTigerItem }) {
  return (
    <div className="stock-row stock-dragon-row">
      <div className="stock-row-main">
        <strong>{item.name}</strong>
        <span>{item.ticker}</span>
      </div>
      <em className={isPositive(item.pct) ? 'positive' : 'negative'}>{item.pct}</em>
      <div className="stock-dragon-money">
        <span>
          净买入 <b>{item.netValue}</b>
        </span>
        <span>
          机构 <b>{item.orgNet}</b>
        </span>
        <span>
          游资 <b>{item.hotMoneyNet}</b>
        </span>
      </div>
      <p className="stock-reason">{item.concepts.length > 0 ? item.concepts.join(' · ') : '—'}</p>
    </div>
  )
}

export function StockPage() {
  const positiveIndices = stockIndices.filter((item) => isPositive(item.changePct)).length
  const indexBreadth = `${positiveIndices}/${stockIndices.length}`

  return (
    <section className="market-page page-band">
      <div className="market-hero">
        <div>
          <p className="eyebrow">A-share stock watch</p>
          <h1 className="page-title">A 股股票观察</h1>
        </div>
        <aside className="market-refresh-card">
          <DatabaseZap size={24} />
          <span>Last update</span>
          <strong>{stockMeta.updatedAt}</strong>
          <p>{stockMeta.sourceMode} · {stockMeta.nextRefresh}</p>
        </aside>
      </div>

      <div className="market-overview-grid">
        <article>
          <LineChart size={22} />
          <span>Tracked indices</span>
          <strong>{stockMeta.trackedMarkets}</strong>
        </article>
        <article>
          <Zap className="stock-overview-icon" size={22} />
          <span>Limit-up</span>
          <strong>{stockBreadth.limitUpCount}</strong>
        </article>
        <article>
          <TrendingUp size={22} />
          <span>Index breadth</span>
          <strong>{indexBreadth}</strong>
        </article>
        <article>
          <BarChart3 size={22} />
          <span>Watchlist</span>
          <strong>{stockMeta.watchlistSize}</strong>
        </article>
      </div>

      <section className="market-section">
        <div className="section-heading">
          <p className="eyebrow">Index pulse</p>
          <h2>指数行情</h2>
        </div>
        <div className="market-index-rail">
          {stockIndices.map((item) => (
            <IndexCard item={item} key={item.symbol} />
          ))}
        </div>
      </section>

      <section className="market-lab-grid">
        <article className="market-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Limit-up watch</p>
              <h3>涨停池</h3>
            </div>
            <span>{stockBreadth.tradeDate ?? '—'} · {stockBreadth.limitUpCount} 家</span>
          </div>
          <div className="stock-list">
            {limitUpTop.map((item) => (
              <LimitUpRow item={item} key={item.ticker} />
            ))}
          </div>
        </article>

        <aside className="market-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Limit-break</p>
              <h3>炸板池</h3>
            </div>
            <span>{stockBreadth.limitBreakCount} 家</span>
          </div>
          <div className="stock-list">
            {limitBreakTop.map((item) => (
              <LimitBreakRow item={item} key={item.ticker} />
            ))}
          </div>
        </aside>
      </section>

      <section className="market-section">
        <div className="section-heading">
          <p className="eyebrow">Limit-up ladder</p>
          <h2>连板天梯{ladderDate ? ` · ${ladderDate}` : ''}</h2>
        </div>
        <div className="stock-ladder">
          {ladderBoards.map((tier) => (
            <div className="stock-ladder-tier" key={tier.label}>
              <b>{tier.label}</b>
              <strong>{tier.count} 家</strong>
              <span>{tier.names.join('、')}{tier.names.length < tier.count ? ' 等' : ''}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="market-lab-grid">
        <article className="market-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Heat ranking</p>
              <h3>热股榜</h3>
            </div>
            <Flame size={18} />
          </div>
          <div className="stock-rank-list">
            {hotStocks.map((item) => (
              <RankRow item={item} key={item.ticker} accent="heat" />
            ))}
          </div>
        </article>

        <aside className="market-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Skyrocket</p>
              <h3>飙升榜</h3>
            </div>
            <Rocket size={18} />
          </div>
          <div className="stock-rank-list">
            {skyrockets.map((item) => (
              <RankRow item={item} key={item.ticker} accent="sky" />
            ))}
          </div>
        </aside>
      </section>

      <section className="market-support-grid">
        <article className="market-panel">
          <div className="market-panel-title">
            <Trophy size={22} />
            <div>
              <p className="eyebrow">Dragon-tiger board</p>
              <h3>龙虎榜</h3>
            </div>
          </div>
          <div className="stock-list">
            {dragonTigerTop.map((item) => (
              <DragonTigerRow item={item} key={item.ticker} />
            ))}
          </div>
        </article>
      </section>

      <section className="market-section">
        <div className="section-heading">
          <p className="eyebrow">Domestic flows</p>
          <h2>资金与成交结构</h2>
        </div>
        <div className="domestic-flow-grid">
          {domesticFlows.map((flow) => (
            <div className="domestic-flow-card" key={flow.name}>
              <span>{flow.name}</span>
              <strong>{flow.value}</strong>
              <b>{flow.state}</b>
            </div>
          ))}
        </div>
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
                <span className="watch-price">{item.price}</span>
                <b className={isPositive(item.changePct) ? 'positive' : 'negative'}>{item.changePct}</b>
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
                </div>
                <b className={isPositive(sector.changePct) ? 'positive' : 'negative'}>{sector.changePct}</b>
                <em className={isStatic(sector.breadth) ? 'muted' : ''}>
                  {isStatic(sector.breadth) ? '—' : sector.breadth}
                </em>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <p className="market-disclaimer">
        本页数据来源 hithink-finance（同花顺）公开行情，更新于 {stockMeta.updatedAt}，仅供参考，不构成投资建议。
      </p>
    </section>
  )
}
