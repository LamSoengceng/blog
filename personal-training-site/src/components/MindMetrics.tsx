import { useEffect, useState } from 'react'
import {
  currentStreak,
  habits,
  lastNDays,
  loadHabitCheckins,
  saveHabitCheckins,
  toDateKey,
  toggleHabit,
} from '../utils/habitStore'
import { loadJournal, onJournalChange } from '../utils/journalStore'
import { toChartPoints, toPolyline } from '../utils/chartGeometry'

const moodChart = {
  width: 420,
  height: 200,
  padding: { top: 16, right: 16, bottom: 30, left: 34 },
}

const moodEmoji = ['😞', '😕', '😐', '🙂', '😄']

const TRACK_DAYS = 28

export function MindMetricsSection() {
  const [checkins, setCheckins] = useState(loadHabitCheckins)
  const [journal, setJournal] = useState(loadJournal)
  // 日期只在挂载时取一次，避免渲染期调用 new Date()（跨零点时旧值也够用：下次挂载即刷新）
  const [today] = useState(() => ({ key: toDateKey(new Date()), days: lastNDays(TRACK_DAYS) }))

  useEffect(() => onJournalChange(() => setJournal(loadJournal())), [])

  const { days, key: todayKey } = today

  const toggle = (dateKey: string, habitId: string) => {
    // 函数式更新：同一帧内连续点击多格也能逐次生效
    setCheckins((prev) => {
      const next = toggleHabit(prev, dateKey, habitId)
      saveHabitCheckins(next)
      return next
    })
  }

  // 心情曲线：取日记按时间正序，展示最近 14 条
  const moodEntries = [...journal]
    .sort((first, second) => first.createdAt.localeCompare(second.createdAt))
    .slice(-14)
  const moodValues = moodEntries.map((entry) => entry.mood)
  const hasMoodChart = moodValues.length >= 2
  const moodPoints = hasMoodChart
    ? toChartPoints(
        moodValues,
        moodChart.width,
        moodChart.height,
        moodChart.padding,
        5,
        1,
      )
    : []
  const avgMood = moodValues.length
    ? (moodValues.reduce((sum, value) => sum + value, 0) / moodValues.length).toFixed(1)
    : '--'

  const todayChecked = habits.filter((habit) => checkins[todayKey]?.[habit.id]).length

  return (
    <div className="mind-grid">
      <article className="mind-panel">
        <div className="panel-heading">
          <h3>心情曲线</h3>
          <span>近 {moodValues.length || 0} 篇日记 · 均值 {avgMood}</span>
        </div>
        {hasMoodChart ? (
          <div className="mood-chart">
            <svg
              viewBox={`0 0 ${moodChart.width} ${moodChart.height}`}
              role="img"
              aria-label="心情随日记变化的曲线"
            >
              {[1, 2, 3, 4, 5].map((level) => {
                const usableHeight = moodChart.height - moodChart.padding.top - moodChart.padding.bottom
                const y = moodChart.padding.top + usableHeight - ((level - 1) / 4) * usableHeight
                return (
                  <g key={level}>
                    <line className="chart-grid-line" x1={moodChart.padding.left} x2={moodChart.width - moodChart.padding.right} y1={y} y2={y} />
                    <text className="chart-axis-label" x={moodChart.padding.left - 6} y={y + 4} textAnchor="end">
                      {moodEmoji[level - 1]}
                    </text>
                  </g>
                )
              })}
              <polyline className="mood-line" points={toPolyline(moodPoints)} />
              {moodPoints.map((point, index) => (
                <circle
                  className="mood-point"
                  key={moodEntries[index].id}
                  cx={point.x}
                  cy={point.y}
                  r="4"
                >
                  <title>
                    {moodEntries[index].title}：心情 {moodEntries[index].mood} 分（{moodLabelsText(moodEntries[index].mood)}）
                  </title>
                </circle>
              ))}
              {moodPoints.length > 0 ? (
                <text className="chart-axis-label" x={moodPoints[0].x} y={moodChart.height - 8} textAnchor="start">
                  {moodEntries[0].createdAt.slice(5, 10)}
                </text>
              ) : null}
              {moodPoints.length > 1 ? (
                <text
                  className="chart-axis-label"
                  x={moodPoints[moodPoints.length - 1].x}
                  y={moodChart.height - 8}
                  textAnchor="end"
                >
                  {moodEntries[moodEntries.length - 1].createdAt.slice(5, 10)}
                </text>
              ) : null}
            </svg>
          </div>
        ) : (
          <p className="empty-note">写满 2 篇日记后，这里会出现你的心情曲线。</p>
        )}
      </article>

      <article className="mind-panel">
        <div className="panel-heading">
          <h3>习惯打卡</h3>
          <span>今天 {todayChecked}/{habits.length} · 近 {TRACK_DAYS} 天</span>
        </div>
        <div className="habit-board">
          {habits.map((habit) => (
            <div className="habit-row" key={habit.id}>
              <div className="habit-label">
                <strong>{habit.label}</strong>
                <span>连续 {currentStreak(checkins, habit.id)} 天</span>
              </div>
              <div className="habit-cells">
                {days.map((dayKey) => {
                  const checked = Boolean(checkins[dayKey]?.[habit.id])
                  return (
                    <button
                      className={`habit-cell ${checked ? 'checked' : ''} ${dayKey === todayKey ? 'today' : ''}`}
                      type="button"
                      key={dayKey}
                      aria-label={`${dayKey} ${habit.label} ${checked ? '已打卡' : '未打卡'}`}
                      aria-pressed={checked}
                      title={`${dayKey} ${habit.label}`}
                      onClick={() => toggle(dayKey, habit.id)}
                    />
                  )
                })}
              </div>
            </div>
          ))}
        </div>
        <p className="habit-hint">点格子补打卡或取消；格子从左到右是最近 28 天。</p>
      </article>
    </div>
  )
}

const moodLabelsText = (mood: number) => ['低落', '一般', '平静', '不错', '很好'][mood - 1] ?? ''
