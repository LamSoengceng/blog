import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import {
  algorithmCategories,
  algorithmProblems,
  algorithmRecentProblems,
  algorithmReviewQueue,
  type AlgorithmProblem,
} from '../data/algorithm'
import { algorithmMeta } from '../data/algorithmMeta'
import { countDueReviews, loadReviewStore } from '../utils/reviewStore'

const difficultyClass = (difficulty: string) => {
  if (difficulty === '简单') return 'easy'
  if (difficulty === '困难') return 'hard'
  return 'medium'
}

const cleanNote = (note?: string) => {
  const cleaned = note?.replace(/=+/g, '').trim() ?? ''
  if (!cleaned || cleaned === '踩坑记录' || cleaned === '易错点/误区：' || cleaned === '易错点/误区:') {
    return ''
  }
  return cleaned
}

const usefulPitfall = (problem: AlgorithmProblem) =>
  problem.pitfalls.map(cleanNote).find(Boolean) ?? '复习时补充第一次卡住的判断条件。'

const featuredAlgorithmProblems = algorithmReviewQueue
  .map((item) => algorithmProblems.find((problem) => problem.slug === item.slug))
  .filter((problem): problem is AlgorithmProblem => Boolean(problem))
  .slice(0, 8)

const algorithmCompletion = Math.round((algorithmMeta.solved / algorithmMeta.total) * 100)
const completedProblems = algorithmProblems.filter((problem) => problem.completed)
const leetcodeLinkedProblems = algorithmProblems.filter((problem) => problem.leetcodeUrl)
const pendingProblems = algorithmProblems.filter((problem) => !problem.completed)
const categoriesByWeakness = [...algorithmCategories].sort((first, second) => {
  const firstRatio = first.solved / first.total
  const secondRatio = second.solved / second.total
  if (firstRatio === secondRatio) return second.total - first.total
  return firstRatio - secondRatio
})
const focusCategories = categoriesByWeakness.slice(0, 4)
const categoryBoards = algorithmCategories.map((category) => ({
  ...category,
  problems: algorithmProblems.filter((problem) => problem.category === category.name).slice(0, 5),
}))
const nextFocusProblems = pendingProblems
  .filter((problem) => focusCategories.some((category) => category.name === problem.category))
  .slice(0, 6)

const allCleared = pendingProblems.length === 0
const reReviewPatternPage = /需二刷|待二刷|三刷|再刷一遍/
const reviewPoolSlugs = algorithmProblems
  .filter((problem) => problem.completed)
  .filter((problem) => problem.thoughts.some((t) => reReviewPatternPage.test(t)) || problem.pitfalls.some((t) => reReviewPatternPage.test(t)))
  .map((problem) => problem.slug)
const dueReviewCount = countDueReviews(reviewPoolSlugs, loadReviewStore())
const hardSolvedCount = completedProblems.filter((problem) => problem.difficulty === '困难').length
const extensionCount = completedProblems.filter((problem) => problem.sourceBanks.includes('本地补充')).length
const reReviewPattern = /需二刷|待二刷|三刷|再刷一遍/
const reReviewTotal = algorithmProblems.filter(
  (problem) =>
    problem.thoughts.some((thought) => reReviewPattern.test(thought)) ||
    problem.pitfalls.some((pitfall) => reReviewPattern.test(pitfall)),
).length
const reReviewProblems = algorithmProblems
  .filter(
    (problem) =>
      problem.thoughts.some((thought) => reReviewPattern.test(thought)) ||
      problem.pitfalls.some((pitfall) => reReviewPattern.test(pitfall)),
  )
  .sort((first, second) => (second.lastUpdatedAt ?? '').localeCompare(first.lastUpdatedAt ?? ''))
  .slice(0, 6)
const difficultyBreakdown = (['简单', '中等', '困难'] as const).map((level) => ({
  level,
  count: algorithmProblems.filter((problem) => problem.difficulty === level).length,
}))
type ProgressStyle = CSSProperties & { '--progress': string }

export function AlgorithmPage() {
  return (
    <section className="content-band page-band algorithm-section" id="algorithm">
      <div className="algorithm-workbench">
        <div className="algorithm-command-panel">
          <p className="eyebrow">Algorithm / LeetCode Hot100</p>
          <h1 className="page-title">算法学习</h1>
          <p>
            从本地 LeetCode Python 文件、Hot100 进度表和 LeetCode 公开题库元数据生成：
            页面只展示题目链接、标签、通过率等公开信息；题解复盘来自你的本地代码和注释。
          </p>
          <div className="algorithm-command-stats" aria-label="算法学习总览">
            <div>
              <span>完成</span>
              <strong>{algorithmMeta.solved}</strong>
            </div>
            <div>
              <span>困难攻克</span>
              <strong>{hardSolvedCount}</strong>
            </div>
            <div>
              <span>拓展加练</span>
              <strong>{extensionCount}</strong>
            </div>
            <div>
              <span>匹配题库</span>
              <strong>{leetcodeLinkedProblems.length}</strong>
            </div>
          </div>
        </div>

        <aside className="algorithm-progress-panel">
          <div className="algorithm-progress-ring" style={{ '--progress': `${algorithmCompletion}%` } as ProgressStyle}>
            <span>{algorithmCompletion}%</span>
          </div>
          <div>
            <span>{allCleared ? '🏆 Hot 100 全通' : 'Hot100 progress'}</span>
            <strong>
              {algorithmMeta.solved}/{algorithmMeta.total}
            </strong>
            <p>
              {allCleared
                ? `Hot 100 全部完成，另有 ${extensionCount} 道拓展加练；${reReviewTotal} 道题标记了二刷，复习队列里有 ${algorithmReviewQueue.length} 道带错误记录。`
                : `已同步 ${completedProblems.length} 道本地题解，复习队列里有 ${algorithmReviewQueue.length} 道带错误记录的题。`}
            </p>
            <Link className="review-entry" to="/algorithm/review">
              {dueReviewCount > 0 ? `开始复习 · 今日到期 ${dueReviewCount} 道 →` : '开始快速复习 →'}
            </Link>
          </div>
        </aside>
      </div>

      {allCleared ? (
        <div className="algorithm-focus-grid">
          <article className="algorithm-focus-panel">
            <div className="panel-heading">
              <h3>二刷清单</h3>
              <span>{reReviewTotal} marked for re-solve</span>
            </div>
            <div className="algorithm-focus-list">
              {reReviewProblems.map((problem) => (
                <Link className="algorithm-focus-row" key={problem.slug} to={`/algorithm/${problem.slug}`}>
                  <div>
                    <strong>
                      {problem.id}. {problem.title}
                    </strong>
                    <span>{problem.lastUpdated ?? 'recent'}</span>
                  </div>
                  <span>{problem.category}</span>
                  <em>{problem.difficulty}</em>
                </Link>
              ))}
            </div>
          </article>

          <article className="algorithm-next-panel">
            <div className="panel-heading">
              <h3>难度分布</h3>
              <span>difficulty mix</span>
            </div>
            <div className="algorithm-focus-list">
              {difficultyBreakdown.map(({ level, count }) => (
                <div className="algorithm-focus-row" key={level}>
                  <div>
                    <strong>{level}</strong>
                    <span>{count} 道 · 占总数 {Math.round((count / algorithmMeta.total) * 100)}%</span>
                  </div>
                  <div className="category-track">
                    <span style={{ width: `${Math.round((count / algorithmMeta.total) * 100)}%` }} />
                  </div>
                  <b>{count}</b>
                </div>
              ))}
            </div>
          </article>
        </div>
      ) : (
        <div className="algorithm-focus-grid">
          <article className="algorithm-focus-panel">
            <div className="panel-heading">
              <h3>下一轮重点</h3>
              <span>weak categories</span>
            </div>
            <div className="algorithm-focus-list">
              {focusCategories.map((category) => (
                <div className="algorithm-focus-row" key={category.name}>
                  <div>
                    <strong>{category.name}</strong>
                    <span>{category.total - category.solved} 道待补 · {category.hard} 道困难</span>
                  </div>
                  <div className="category-track">
                    <span style={{ width: `${Math.round((category.solved / category.total) * 100)}%` }} />
                  </div>
                  <b>{Math.round((category.solved / category.total) * 100)}%</b>
                </div>
              ))}
            </div>
          </article>

          <article className="algorithm-next-panel">
            <div className="panel-heading">
              <h3>待补题目</h3>
              <span>next problems</span>
            </div>
            <div className="algorithm-mini-list">
              {nextFocusProblems.map((problem) => (
                <Link className="algorithm-mini-row" key={problem.slug} to={`/algorithm/${problem.slug}`}>
                  <span>{problem.id}</span>
                  <strong>{problem.title}</strong>
                  <em>{problem.category}</em>
                </Link>
              ))}
            </div>
          </article>
        </div>
      )}

      <div className="section-heading compact-heading">
        <p className="eyebrow">Latest Commits</p>
        <h2>最近写的题目</h2>
      </div>
      <div className="algorithm-recent-rail" aria-label="最近写的算法题">
        {algorithmRecentProblems.map((problem) => (
          <article className="algorithm-recent-card" key={problem.slug}>
            <div className="algorithm-card-topline">
              <span>{problem.lastUpdated ?? 'recent'}</span>
              <b>{problem.id}</b>
            </div>
            <Link className="algorithm-recent-title" to={`/algorithm/${problem.slug}`}>
              <span className={`difficulty-pill ${difficultyClass(problem.difficulty)}`}>
                {problem.difficulty}
              </span>
              <h3>{problem.title}</h3>
            </Link>
            <p>{problem.topic}</p>
            <div className="algorithm-tag-row">
              {problem.tags.slice(0, 4).map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            {problem.sourcePath ? <code className="algorithm-recent-source">{problem.sourcePath}</code> : null}
            <pre>
              <code>{problem.codePreview}</code>
            </pre>
          </article>
        ))}
      </div>

      <div className="algorithm-category-rail" aria-label="Hot100 题型分类">
        {algorithmCategories.map((category) => (
          <article className="algorithm-category-card" key={category.name}>
            <div>
              <span>{category.name}</span>
              <strong>
                {category.solved}/{category.total}
              </strong>
            </div>
            <div className="category-track">
              <span style={{ width: `${Math.round((category.solved / category.total) * 100)}%` }} />
            </div>
            <p>{category.hard} 道困难题</p>
          </article>
        ))}
      </div>

      <div className="section-heading compact-heading">
        <p className="eyebrow">Review First</p>
        <h2>带着错误复习</h2>
      </div>
      <div className="algorithm-review-lane">
        {featuredAlgorithmProblems.map((problem) => (
          <Link className="algorithm-problem-card" key={problem.slug} to={`/algorithm/${problem.slug}`}>
            <div className="algorithm-card-topline">
              <span>{problem.category}</span>
              <b>{problem.id}</b>
            </div>
            <span className={`difficulty-pill ${difficultyClass(problem.difficulty)}`}>
              {problem.difficulty}
            </span>
            <h3>{problem.title}</h3>
            <p>{problem.topic}</p>
            <div className="algorithm-tag-row">
              {problem.tags.slice(0, 3).map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="algorithm-card-meta">
              <span>{problem.acceptanceRate ? `通过率 ${problem.acceptanceRate}%` : '本地题解'}</span>
              <span>{problem.solutionCount ? `${problem.solutionCount} 题解` : problem.sourceBanks[0]}</span>
            </div>
            <p className="algorithm-review-note">{usefulPitfall(problem)}</p>
          </Link>
        ))}
      </div>

      <div className="section-heading compact-heading algorithm-board-heading">
        <p className="eyebrow">Topic Board</p>
        <h2>题型地图</h2>
      </div>
      <div className="algorithm-board-grid">
        {categoryBoards.map((category) => (
          <article className="algorithm-board-card" key={category.name}>
            <div className="algorithm-board-head">
              <div>
                <span>{category.name}</span>
                <strong>
                  {category.solved}/{category.total}
                </strong>
              </div>
              <b>{category.total - category.solved} left</b>
            </div>
            <div className="category-track">
              <span style={{ width: `${Math.round((category.solved / category.total) * 100)}%` }} />
            </div>
            <div className="algorithm-board-list">
              {category.problems.map((problem) => (
                <Link className="algorithm-board-row" key={problem.slug} to={`/algorithm/${problem.slug}`}>
                  <span className={problem.completed ? 'status-dot done' : 'status-dot'} />
                  <strong>{problem.id}. {problem.title}</strong>
                  <em>{problem.difficulty}</em>
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
