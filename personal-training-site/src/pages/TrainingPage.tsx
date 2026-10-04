import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BodyHeatmap } from '../components/BodyHeatmap'
import { JournalSection } from '../components/JournalSection'
import { MindMetricsSection } from '../components/MindMetrics'
import { diaryEntries, diaryStats } from '../data/diaryData'
import { xunjiDaySummaries, xunjiLastSyncedAt } from '../data/xunjiData'
import {
  movementHighlights,
  muscleVolumes,
  nextWeekPlan,
  prs,
  strengthTrend,
} from '../data/fitnessData'
import { toChartPoints, toPolyline } from '../utils/chartGeometry'
import { movementLiveStats } from '../utils/xunjiStats'

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
  const [expandedDiary, setExpandedDiary] = useState<string[]>([diaryEntries[0]?.id ?? ''])

  const toggleDiary = (id: string) => {
    setExpandedDiary((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }

  return (
    <section className="content-band page-band" id="training">
      <div className="section-heading">
        <p className="eyebrow">Growth / Body &amp; Mind</p>
        <h1 className="page-title">自我提升</h1>
        <p>
          身心和肌肉一样，都是练出来的。这里记录两件事：写给自己看的日记（心迹），
          以及身体训练的长期数据——力量趋势、肌群覆盖、训练日志和 PR 时间线。
        </p>
      </div>

      <div className="section-heading compact-heading">
        <p className="eyebrow">Journal · 心迹</p>
        <h2>写一篇日记</h2>
        <p>
          真正的日记：想到什么写什么。只存在你自己浏览器的 localStorage 里，不上传、不公开。
        </p>
      </div>

      <JournalSection />

      <div className="section-heading compact-heading mind-section-heading">
        <p className="eyebrow">Mind · 心迹数据</p>
        <h2>心情与习惯</h2>
        <p>日记里的心情连成曲线；每天给想坚持的习惯打个勾。都只存在本机浏览器。</p>
      </div>

      <MindMetricsSection />

      <div className="section-heading compact-heading body-section-heading">
        <p className="eyebrow">Body · 身体训练</p>
        <h2>身体的记录</h2>
        <p>
          三大项、实力推、臀冲和高位下拉的长期信号：训练频率、主项变化、肌群覆盖和 PR 时间线。
        </p>
      </div>

      <section className="highlight-rail" aria-label="核心动作横向展示">
        {movementHighlights.map((movement, index) => {
          // 实时优先：训记有足够数据时用真实推导值，否则回退到静态快照
          const live = movementLiveStats(movement.id)
          const card = live ? { ...movement, ...live } : movement
          const trendValues = card.trend.map((point) => point.value)
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
          const firstTrend = card.trend[0]
          const lastTrend = card.trend[card.trend.length - 1]

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
                <time>{card.bestDate}</time>
              </div>
              <span className="best-label">Best set{live ? ' · 训记实时' : ''}</span>
              <strong>{card.bestSet}</strong>
              <div className="highlight-stats">
                <div>
                  <span>估算 1RM</span>
                  <b>{card.estimatedOneRm}kg</b>
                </div>
                <div>
                  <span>正式组</span>
                  <b>{card.totalSets}</b>
                </div>
                <div>
                  <span>容量</span>
                  <b>{Math.round(card.tonnage / 1000)}t</b>
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
                <em className={card.delta >= 0 ? 'up' : 'down'}>
                  {formatDelta(card.delta)}
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
                    {card.trend.map((point) => `${point.date}: ${point.value}kg`).join(' / ')}
                  </title>
                  <polyline points={toPolyline(sparklinePoints)} />
                  {sparklinePoints.map((point, pointIndex) => (
                    <circle
                      key={`${movement.id}-${card.trend[pointIndex].date}`}
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

      <div className="section-heading compact-heading">
        <p className="eyebrow">Training Diary</p>
        <h2>训练日记</h2>
        <p>
          每一次训练的动作、顶级组、吨位和主观感受。字段按「训记 API → 本地同步 →
          JSON」的管道设计，当前为本地日志数据，接入后自动更新。
        </p>
      </div>

      <div className="diary-stat-strip" aria-label="近期训练统计">
        <div>
          <span>近段训练</span>
          <strong>{diaryStats.sessions} 次</strong>
        </div>
        <div>
          <span>累计吨位</span>
          <strong>{(diaryStats.totalTonnage / 1000).toFixed(1)} t</strong>
        </div>
        <div>
          <span>平均时长</span>
          <strong>{diaryStats.avgDuration} min</strong>
        </div>
        <div>
          <span>平均 RPE</span>
          <strong>{diaryStats.avgRpe}</strong>
        </div>
      </div>

      <div className="diary-list">
        {diaryEntries.map((entry, index) => {
          const expanded = expandedDiary.includes(entry.id)
          return (
            <article className={`diary-entry ${index === 0 ? 'latest' : ''}`} key={entry.id}>
              <div className="diary-date-rail" aria-hidden="true">
                <time>{entry.date.slice(5).replace('-', ' / ')}</time>
                <span>{entry.weekday}</span>
              </div>
              <div className="diary-body">
                <button
                  className="diary-toggle"
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => toggleDiary(entry.id)}
                >
                  <span className="diary-title">
                    {index === 0 ? <b className="diary-new">最新</b> : null}
                    {entry.title}
                  </span>
                  <span className="diary-toggle-meta">
                    {entry.movements.length} 个动作 · {entry.durationMin} min · {entry.tonnage} kg · RPE {entry.rpe}
                  </span>
                </button>
                <div className="diary-tag-row">
                  {entry.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {expanded ? (
                  <div className="diary-detail">
                    <ul className="diary-movements">
                      {entry.movements.map((movement) => (
                        <li key={movement.name}>
                          <strong>{movement.name}</strong>
                          <em>{movement.topSet}</em>
                        </li>
                      ))}
                    </ul>
                    <p className="diary-highlight">{entry.highlight}</p>
                    <p className="diary-notes">{entry.notes}</p>
                  </div>
                ) : null}
              </div>
            </article>
          )
        })}
      </div>

      <div className="section-heading compact-heading xunji-heading">
        <p className="eyebrow">Xunji Sync · 客观记录</p>
        <h2>训记同步</h2>
        <p>
          来自训记 App 的真实活动数据（时长、距离、卡路里），和上面的主观日记互为印证。
          数据只在本机同步脚本里拉取，前端不持有任何密钥。
        </p>
      </div>

      {xunjiDaySummaries.length ? (
        <div className="xunji-panel">
          <div className="xunji-badge-row">
            <span className="xunji-badge">真实数据</span>
            <span className="xunji-synced-at">同步于 {xunjiLastSyncedAt.slice(0, 16).replace('T', ' ')}</span>
          </div>
          <div className="xunji-list">
            {xunjiDaySummaries.map((day) => (
              <div className="xunji-day" key={day.date}>
                <time>{day.date.slice(5)}</time>
                <strong>{day.types.join(' + ')}</strong>
                <em>
                  {day.sessions} 次
                  {day.durationMin ? ` · ${day.durationMin} min` : ''}
                  {day.kcal ? ` · ${day.kcal} kcal` : ''}
                  {day.distanceKm ? ` · ${day.distanceKm} km` : ''}
                </em>
              </div>
            ))}
          </div>
          <div className="xunji-list-more">
            <Link className="review-btn ghost review-btn-small" to="/xunji-log">
              查看逐组明细（动作 / 重量 / 次数）→
            </Link>
          </div>
        </div>
      ) : (
        <div className="xunji-panel xunji-empty">
          <p className="empty-note">
            还没有同步过训记数据。在项目根目录的 <code>.env.local</code> 写入
            <code>XUNJI_API_KEY=你的token</code>（训记 App 内获取），然后运行
            <code>npm run sync:xunji</code>，这里就会出现真实的活动记录。
          </p>
        </div>
      )}
    </section>
  )
}
