// 年度回顾：把训练、算法、复习、费曼、日记和习惯的全年数据聚合成一页。
// 静态数据来自 src/data，个人记录来自浏览器 localStorage；数据不足的板块如实标注。
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { algorithmMeta } from '../data/algorithmMeta'
import { diaryEntries } from '../data/diaryData'
import { metricCards, prs } from '../data/fitnessData'
import { xunjiDaySummaries } from '../data/xunjiData'
import { feynmanStats, loadFeynmanRecords } from '../utils/feynmanRecords'
import { loadJournal } from '../utils/journalStore'
import { currentStreak, habits, loadHabitCheckins } from '../utils/habitStore'
import { loadReviewStore } from '../utils/reviewStore'

const year = new Date().getFullYear()

const metricValue = (keyword: string) =>
  metricCards.find((card) => card.label.includes(keyword))?.value ?? '--'

const buildSnapshot = () => {
  const reviewStore = loadReviewStore()
  const reviewEntries = Object.values(reviewStore)
  const boxes = reviewEntries.map((entry) => entry.box)
  const avgBox = boxes.length
    ? (boxes.reduce((sum, box) => sum + box, 0) / boxes.length).toFixed(1)
    : null
  const solidCount = boxes.filter((box) => box >= 4).length

  const feynman = feynmanStats(loadFeynmanRecords())

  const journal = loadJournal()
  const moodAvg = journal.length
    ? (journal.reduce((sum, entry) => sum + entry.mood, 0) / journal.length).toFixed(1)
    : null

  const checkins = loadHabitCheckins()
  const habitStreaks = habits.map((habit) => ({ ...habit, streak: currentStreak(checkins, habit.id) }))
  const bestStreak = habitStreaks.reduce((best, item) => Math.max(best, item.streak), 0)
  const totalCheckins = Object.values(checkins).reduce(
    (sum, day) => sum + Object.keys(day).length,
    0,
  )

  const xunjiMinutes = xunjiDaySummaries.reduce((sum, day) => sum + day.durationMin, 0)
  const xunjiKcal = xunjiDaySummaries.reduce((sum, day) => sum + day.kcal, 0)

  return {
    review: { tracked: reviewEntries.length, avgBox, solidCount },
    feynman: { total: feynman.total, avgScore: feynman.avgScore },
    journal: { count: journal.length, moodAvg },
    habits: { streaks: habitStreaks, bestStreak, totalCheckins },
    xunji: { days: xunjiDaySummaries.length, minutes: xunjiMinutes, kcal: xunjiKcal },
  }
}

export function WrappedPage() {
  const [snapshot] = useState(buildSnapshot)

  const heroStats = [
    { label: '训练', value: metricValue('训练日'), detail: metricCards[0]?.detail ?? '' },
    { label: '总容量', value: metricValue('总训练容量'), detail: '按合理重量组估算' },
    {
      label: '算法题',
      value: `${algorithmMeta.solved}/${algorithmMeta.total}`,
      detail: `Hot100 完成率 ${Math.round((algorithmMeta.solved / algorithmMeta.total) * 100)}%`,
    },
    {
      label: '费曼练习',
      value: snapshot.feynman.total ? String(snapshot.feynman.total) : '--',
      detail: snapshot.feynman.total ? `平均 ${snapshot.feynman.avgScore} / 5` : '还没开始，随时可补',
    },
    {
      label: '日记',
      value: snapshot.journal.count ? String(snapshot.journal.count) : '--',
      detail: snapshot.journal.moodAvg ? `平均心情 ${snapshot.journal.moodAvg} / 5` : '还没写过',
    },
    {
      label: '最长连续打卡',
      value: snapshot.habits.bestStreak ? `${snapshot.habits.bestStreak} 天` : '--',
      detail: `累计打卡 ${snapshot.habits.totalCheckins} 次`,
    },
  ]

  return (
    <section className="content-band page-band wrapped-page" id="wrapped">
      <div className="section-heading">
        <p className="eyebrow">{year} / Wrapped</p>
        <h1 className="page-title">这一年</h1>
        <p>
          把训练、算法和个人记录摊在一页上。数字来自站内数据和浏览器本机记录，
          哪些是长期积累、哪些刚起步，一眼能看出来。
        </p>
      </div>

      <div className="wrapped-hero-grid">
        {heroStats.map((stat) => (
          <article className="wrapped-hero-card" key={stat.label}>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
            <em>{stat.detail}</em>
          </article>
        ))}
      </div>

      <div className="wrapped-grid">
        <article className="wrapped-panel">
          <h2>训练</h2>
          <div className="wrapped-rows">
            <div className="wrapped-row">
              <strong>{metricValue('训练记录')}</strong>
              <span>有记录的正式训练</span>
            </div>
            <div className="wrapped-row">
              <strong>{metricValue('周均正式组')}</strong>
              <span>周均正式组数</span>
            </div>
            <div className="wrapped-row">
              <strong>{diaryEntries.length} 篇</strong>
              <span>详细训练日记（含 RPE 与复盘）</span>
            </div>
          </div>
          {prs.length ? (
            <div className="wrapped-sublist">
              <span>今年 PR</span>
              <ul>
                {prs.slice(0, 4).map((record) => (
                  <li key={`${record.movement}-${record.date}`}>
                    <b>{record.movement}</b>
                    <em>{record.result}</em>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </article>

        <article className="wrapped-panel">
          <h2>算法与复习</h2>
          <div className="wrapped-rows">
            <div className="wrapped-row">
              <strong>
                {algorithmMeta.solved}/{algorithmMeta.total}
              </strong>
              <span>Hot100 全通，另有拓展加练</span>
            </div>
            <div className="wrapped-row">
              <strong>{snapshot.review.tracked ? `${snapshot.review.tracked} 题` : '--'}</strong>
              <span>纳入间隔复习的题目</span>
            </div>
            {snapshot.review.avgBox ? (
              <div className="wrapped-row">
                <strong>
                  {snapshot.review.avgBox} / 6
                </strong>
                <span>平均掌握箱级{snapshot.review.solidCount ? `，${snapshot.review.solidCount} 题进入长间隔` : ''}</span>
              </div>
            ) : null}
          </div>
          <p className="wrapped-note">
            <Link to="/algorithm/review">继续复习 →</Link>
          </p>
        </article>

        <article className="wrapped-panel">
          <h2>费曼与日记</h2>
          <div className="wrapped-rows">
            <div className="wrapped-row">
              <strong>{snapshot.feynman.total ? `${snapshot.feynman.total} 次` : '--'}</strong>
              <span>费曼讲解练习{snapshot.feynman.total ? `，平均 ${snapshot.feynman.avgScore} / 5` : ''}</span>
            </div>
            <div className="wrapped-row">
              <strong>{snapshot.journal.count ? `${snapshot.journal.count} 篇` : '--'}</strong>
              <span>手写日记{snapshot.journal.moodAvg ? `，平均心情 ${snapshot.journal.moodAvg} / 5` : ''}</span>
            </div>
          </div>
          <p className="wrapped-note">
            <Link to="/feynman">去练费曼 →</Link>
            <Link to="/training">查看成长页 →</Link>
          </p>
        </article>

        <article className="wrapped-panel">
          <h2>习惯</h2>
          <div className="wrapped-habit-rows">
            {snapshot.habits.streaks.map((item) => (
              <div className="wrapped-habit-row" key={item.id}>
                <span>{item.label}</span>
                <em>{item.streak ? `连续 ${item.streak} 天` : '今天还没打卡'}</em>
              </div>
            ))}
          </div>
          <p className="wrapped-note">打卡在成长页，每天 4 项，坚持按自己的节奏来。</p>
        </article>

        {snapshot.xunji.days ? (
          <article className="wrapped-panel">
            <h2>训记同步</h2>
            <div className="wrapped-rows">
              <div className="wrapped-row">
                <strong>{snapshot.xunji.days} 天</strong>
                <span>有真实活动记录的日子</span>
              </div>
              <div className="wrapped-row">
                <strong>{snapshot.xunji.minutes} 分钟</strong>
                <span>累计活动时长</span>
              </div>
              {snapshot.xunji.kcal ? (
                <div className="wrapped-row">
                  <strong>{snapshot.xunji.kcal} kcal</strong>
                  <span>累计消耗</span>
                </div>
              ) : null}
            </div>
          </article>
        ) : null}
      </div>

      <p className="wrapped-footer">
        页面只统计你自己的记录：算法数据来自本地题解快照，个人记录存在这台电脑的浏览器里，
        不上传任何服务器。
      </p>
    </section>
  )
}
