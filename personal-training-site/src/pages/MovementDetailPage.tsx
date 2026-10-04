import { Link, Navigate, useParams } from 'react-router-dom'
import { movementHighlights } from '../data/fitnessData'
import { movementLiveStats } from '../utils/xunjiStats'
import { toChartPoints, toPolyline } from '../utils/chartGeometry'

const detailChart = {
  width: 620,
  height: 280,
  padding: { top: 24, right: 24, bottom: 42, left: 46 },
}

export function MovementDetailPage() {
  const { movementId } = useParams()
  const curated = movementHighlights.find((item) => item.id === movementId)

  if (!curated) {
    return <Navigate to="/" replace />
  }

  // 实时优先：训记有足够数据时用真实推导值，否则回退到静态快照
  const live = movementLiveStats(curated.id)
  const movement = live ? { ...curated, ...live } : curated

  const trendValues = movement.trend.map((point) => point.value)
  const minTrend = Math.min(...trendValues)
  const maxTrend = Math.max(...trendValues)
  const detailPoints = toChartPoints(
    trendValues,
    detailChart.width,
    detailChart.height,
    detailChart.padding,
    maxTrend,
    minTrend,
  )

  return (
    <section className="detail-page">
      <Link className="back-link" to="/training">
        返回核心动作
      </Link>

      <div className="detail-hero">
        <div>
          <p className="eyebrow">{movement.tag} / Movement profile</p>
          <h1>{movement.label}</h1>
          <p className="hero-subtitle">{movement.bestSet}</p>
          <p className="hero-text">
            这里把你的训记表现数据和动作知识库合在一起。动图暂时留空，等后续素材授权清晰后再接入。
          </p>
        </div>

        <aside className="media-placeholder" aria-label={`${movement.label} 动作媒体占位`}>
          <span>MEDIA RESERVED</span>
          <strong>GIF 暂留空位</strong>
          <p>当前只展示公开安全的数据和动作知识，不嵌入版权不明确的外部动图。</p>
          <div className="media-frame-lines" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
        </aside>
      </div>

      <div className="detail-stat-grid">
        <article>
          <span>估算 1RM</span>
          <strong>{movement.estimatedOneRm}kg</strong>
        </article>
        <article>
          <span>年度正式组</span>
          <strong>{movement.totalSets}</strong>
        </article>
        <article>
          <span>年度容量</span>
          <strong>{Math.round(movement.tonnage / 1000)}t</strong>
        </article>
        <article>
          <span>最佳日期</span>
          <strong>{movement.bestDate}</strong>
        </article>
      </div>

      <div className="detail-grid">
        <article className="detail-panel">
          <div className="panel-heading">
            <h3>动作知识</h3>
            <span>{movement.source}</span>
          </div>
          <dl className="knowledge-list">
            <div>
              <dt>数据集动作</dt>
              <dd>{movement.datasetName}</dd>
            </div>
            <div>
              <dt>目标肌群</dt>
              <dd>{movement.target}</dd>
            </div>
            <div>
              <dt>器械</dt>
              <dd>{movement.equipment}</dd>
            </div>
            <div>
              <dt>协同肌群</dt>
              <dd>{movement.secondaryMuscles?.join(' / ')}</dd>
            </div>
          </dl>
          <p className="detail-cue">{movement.cue}</p>
        </article>

        <article className="detail-panel">
          <div className="panel-heading">
            <h3>最近趋势</h3>
            <span>{live ? '训记实时 · estimated 1RM' : 'estimated 1RM'}</span>
          </div>
          <div className="detail-trend">
            <svg
              className="detail-line-chart"
              viewBox={`0 0 ${detailChart.width} ${detailChart.height}`}
              role="img"
              aria-label={`${movement.label} 最近估算 1RM 折线图`}
            >
              {[0.25, 0.5, 0.75, 1].map((ratio) => {
                const usableHeight =
                  detailChart.height - detailChart.padding.top - detailChart.padding.bottom
                const y = detailChart.padding.top + usableHeight - ratio * usableHeight

                return (
                  <line
                    className="chart-grid-line"
                    key={ratio}
                    x1={detailChart.padding.left}
                    x2={detailChart.width - detailChart.padding.right}
                    y1={y}
                    y2={y}
                  />
                )
              })}
              <polyline className="trend-line bench" points={toPolyline(detailPoints)} />
              {detailPoints.map((point, index) => (
                <g className="detail-chart-point" key={movement.trend[index].date}>
                  <circle cx={point.x} cy={point.y} r="5">
                    <title>
                      {movement.trend[index].date}: {movement.trend[index].value}kg
                    </title>
                  </circle>
                  <text x={point.x} y={Math.max(16, point.y - 10)}>
                    {movement.trend[index].value}
                  </text>
                </g>
              ))}
              {movement.trend.map((point, index) => {
                const usableWidth =
                  detailChart.width - detailChart.padding.left - detailChart.padding.right
                const x =
                  detailChart.padding.left +
                  (movement.trend.length <= 1
                    ? usableWidth / 2
                    : (index / (movement.trend.length - 1)) * usableWidth)

                return (
                  <text className="chart-axis-label" key={point.date} x={x} y="268">
                    {point.date}
                  </text>
                )
              })}
            </svg>
          </div>
        </article>
      </div>
    </section>
  )
}
