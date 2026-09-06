import { Link } from 'react-router-dom'
import { BodyHeatmap } from '../components/BodyHeatmap'
import {
  movementHighlights,
  muscleVolumes,
  nextWeekPlan,
  prs,
  strengthTrend,
} from '../data/fitnessData'
import { toChartPoints, toPolyline } from '../utils/chartGeometry'

const trendChart = {
  width: 720,
  height: 280,
  padding: { top: 18, right: 24, bottom: 34, left: 42 },
}

const sparklineChart = {
  width: 220,
  height: 58,
  padding: { top: 8, right: 8, bottom: 8, left: 8 },
}

const maxStrength = Math.max(
  1,
  ...strengthTrend.flatMap((point) => [
    point.bench,
    point.squat,
    point.hipThrust,
    point.press,
  ]),
)

const formatDelta = (value: number) => `${value >= 0 ? '+' : ''}${value}kg`

const trendSeries = [
  {
    label: '卧推',
    className: 'bench',
    values: strengthTrend.map((point) => point.bench),
  },
  {
    label: '深蹲',
    className: 'squat',
    values: strengthTrend.map((point) => point.squat),
  },
  {
    label: '臀冲',
    className: 'hip',
    values: strengthTrend.map((point) => point.hipThrust),
  },
  {
    label: '推举',
    className: 'press',
    values: strengthTrend.map((point) => point.press),
  },
]

export function TrainingPage() {
  return (
    <section className="content-band page-band" id="training">
      <div className="section-heading">
        <p className="eyebrow">Training / 2026 YTD</p>
        <h1 className="page-title">训练数据</h1>
        <p>
          重点展示三大项、实力推、臀冲和高位下拉。这里是独立训练页，只放训练表现、
          肌群覆盖、PR 时间线和后续 Agent 复盘相关内容。
        </p>
      </div>

      <section className="highlight-rail" aria-label="核心动作横向展示">
        {movementHighlights.map((movement, index) => {
          const trendValues = movement.trend.map((point) => point.value)
          const minTrend = Math.min(...trendValues)
          const maxTrend = Math.max(...trendValues)
          const sparklinePoints = toChartPoints(
            trendValues,
            sparklineChart.width,
            sparklineChart.height,
            sparklineChart.padding,
            maxTrend,
            minTrend,
          )
          const firstTrend = movement.trend[0]
          const lastTrend = movement.trend[movement.trend.length - 1]

          return (
            <Link
              className={`highlight-card highlight-${movement.id}`}
              key={movement.id}
              to={`/training/${movement.id}`}
            >
              <div className="highlight-topline">
                <span>{movement.tag}</span>
                <b>{String(index + 1).padStart(2, '0')}</b>
              </div>
              <div className="dataset-badge">
                <span>EXERCISE DATASET</span>
                <b>
                  {movement.target} / {movement.equipment}
                </b>
              </div>
              <div className="highlight-title-row">
                <h3>{movement.label}</h3>
                <time>{movement.bestDate}</time>
              </div>
              <span className="best-label">Best set</span>
              <strong>{movement.bestSet}</strong>
              <div className="highlight-stats">
                <div>
                  <span>估算 1RM</span>
                  <b>{movement.estimatedOneRm}kg</b>
                </div>
                <div>
                  <span>正式组</span>
                  <b>{movement.totalSets}</b>
                </div>
                <div>
                  <span>容量</span>
                  <b>{Math.round(movement.tonnage / 1000)}t</b>
                </div>
              </div>
              <div className="knowledge-strip" aria-label={`${movement.label} 动作知识`}>
                <span>{movement.target}</span>
                <span>{movement.equipment}</span>
                <span>{movement.secondaryMuscles?.join(' / ')}</span>
              </div>
              <p className="movement-cue">{movement.cue}</p>
              <div className="trend-header">
                <span>Recent signal</span>
                <em className={movement.delta >= 0 ? 'up' : 'down'}>
                  {formatDelta(movement.delta)}
                </em>
              </div>
              <div className="mini-trend" aria-label={`${movement.label} 最近趋势`}>
                <svg
                  className="sparkline"
                  viewBox={`0 0 ${sparklineChart.width} ${sparklineChart.height}`}
                  role="img"
                  aria-label={`${movement.label} 最近估算 1RM 折线`}
                >
                  <title>
                    {movement.trend.map((point) => `${point.date}: ${point.value}kg`).join(' / ')}
                  </title>
                  <polyline points={toPolyline(sparklinePoints)} />
                  {sparklinePoints.map((point, pointIndex) => (
                    <circle
                      key={`${movement.id}-${movement.trend[pointIndex].date}`}
                      cx={point.x}
                      cy={point.y}
                      r="2.8"
                    />
                  ))}
                </svg>
              </div>
              <p className="highlight-footnote">
                <span>{firstTrend?.date ?? '--'}</span>
                <span>{lastTrend?.date ?? '--'}</span>
              </p>
            </Link>
          )
        })}
      </section>

      <div className="fitness-lab-grid">
        <article className="chart-panel">
          <div className="panel-heading">
            <h3>主项估算 1RM 趋势</h3>
            <span>kg</span>
          </div>
          <div className="line-chart" aria-label="主项估算 1RM 趋势图">
            <svg
              className="trend-svg"
              viewBox={`0 0 ${trendChart.width} ${trendChart.height}`}
              role="img"
              aria-label="卧推、深蹲、臀冲和推举估算 1RM 折线图"
            >
              {[0.25, 0.5, 0.75, 1].map((ratio) => {
                const usableHeight =
                  trendChart.height - trendChart.padding.top - trendChart.padding.bottom
                const y = trendChart.padding.top + usableHeight - ratio * usableHeight

                return (
                  <line
                    className="chart-grid-line"
                    key={ratio}
                    x1={trendChart.padding.left}
                    x2={trendChart.width - trendChart.padding.right}
                    y1={y}
                    y2={y}
                  />
                )
              })}
              {strengthTrend.map((point, index) => {
                const usableWidth =
                  trendChart.width - trendChart.padding.left - trendChart.padding.right
                const x =
                  trendChart.padding.left +
                  (strengthTrend.length <= 1
                    ? usableWidth / 2
                    : (index / (strengthTrend.length - 1)) * usableWidth)

                return (
                  <text className="chart-axis-label" key={point.date} x={x} y="270">
                    {point.date}
                  </text>
                )
              })}
              {trendSeries.map((series) => {
                const points = toChartPoints(
                  series.values,
                  trendChart.width,
                  trendChart.height,
                  trendChart.padding,
                  maxStrength,
                )

                return (
                  <g className={`trend-series ${series.className}`} key={series.className}>
                    <polyline
                      className={`trend-line ${series.className}`}
                      points={toPolyline(points)}
                    />
                    {points.map((point, pointIndex) => (
                      <circle
                        className={`trend-point ${series.className}`}
                        key={`${series.className}-${strengthTrend[pointIndex].date}`}
                        cx={point.x}
                        cy={point.y}
                        r="4"
                      >
                        <title>
                          {series.label} {strengthTrend[pointIndex].date}:{' '}
                          {series.values[pointIndex]}kg
                        </title>
                      </circle>
                    ))}
                  </g>
                )
              })}
            </svg>
          </div>
          <div className="legend">
            <span className="legend-item bench">卧推</span>
            <span className="legend-item squat">深蹲</span>
            <span className="legend-item hip">臀冲</span>
            <span className="legend-item press">推举</span>
          </div>
        </article>
        <BodyHeatmap />
      </div>

      <div className="fitness-support-grid">
        <article className="volume-panel">
          <div className="panel-heading">
            <h3>最近 4 周肌群容量</h3>
            <span>周均正式组</span>
          </div>
          <div className="volume-list">
            {muscleVolumes.map((item) => (
              <div className="volume-row" key={item.muscle}>
                <div>
                  <strong>{item.muscle}</strong>
                  <span>{item.sets} 组</span>
                </div>
                <div className="volume-track">
                  <span
                    className={`volume-fill ${item.status}`}
                    style={{ width: `${Math.min(item.sets * 3, 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="timeline-panel">
          <div className="panel-heading">
            <h3>2026 PR 时间线</h3>
            <span>公开摘要</span>
          </div>
          <ol className="timeline">
            {prs.map((record) => (
              <li key={`${record.date}-${record.movement}`}>
                <time>{record.date}</time>
                <div>
                  <strong>
                    {record.movement} / {record.result}
                  </strong>
                  <p>{record.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </article>

        <article className="plan-panel">
          <div className="panel-heading">
            <h3>页面可以给出的判断</h3>
            <span>Agent-ready</span>
          </div>
          <ul className="plan-list">
            {nextWeekPlan.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
