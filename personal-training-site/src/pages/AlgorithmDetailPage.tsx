import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { algorithmProblems, type AlgorithmProblem } from '../data/algorithm'
import { AlgorithmVisualizer } from '../components/algorithmVisualization/AlgorithmVisualizer'
import { getAlgorithmSteps } from '../components/algorithmVisualization/containerSteps'
import { loadAlgorithmContent } from '../utils/algorithmContent'

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

export function AlgorithmDetailPage() {
  const { problemSlug } = useParams()
  const problem = useMemo(() => algorithmProblems.find((item) => item.slug === problemSlug), [problemSlug])
  // 内容按 slug 记录，渲染期校验归属：切题瞬间旧题内容不会闪现，也无需在 effect 里同步清空
  const [contentState, setContentState] = useState<{ slug: string; problem: AlgorithmProblem | null } | null>(null)
  const content = contentState && contentState.slug === problem?.slug ? contentState.problem : null

  useEffect(() => {
    if (!problem) return
    void loadAlgorithmContent(problem.slug).then((loaded) => {
      setContentState({ slug: problem.slug, problem: loaded })
    })
  }, [problem])

  if (!problem) {
    return <Navigate to="/" replace />
  }

  const relatedProblems = algorithmProblems
    .filter((item) => item.category === problem.category && item.slug !== problem.slug)
    .slice(0, 5)
  const cleanedPitfalls = problem.pitfalls.map(cleanNote).filter(Boolean)
  const visualizationSteps = getAlgorithmSteps(problem.slug)

  return (
    <section className="algorithm-detail-page">
      <Link className="back-link" to="/algorithm">
        返回算法学习
      </Link>

      <div className="algorithm-detail-hero">
        <div>
          <p className="eyebrow">Algorithm / Hot100</p>
          <h1>
            {problem.id}. {problem.title}
          </h1>
          <p className="hero-subtitle">{problem.category}</p>
          <p className="hero-text">{problem.interviewPattern}</p>
          <div className="algorithm-status-strip" aria-label="题目信息">
            <div>
              <span>难度</span>
              <strong>{problem.difficulty}</strong>
            </div>
            <div>
              <span>状态</span>
              <strong>{problem.completed ? '已做过' : '待完成'}</strong>
            </div>
            <div>
              <span>题型</span>
              <strong>{problem.category}</strong>
            </div>
            <div>
              <span>通过率</span>
              <strong>{problem.acceptanceRate ? `${problem.acceptanceRate}%` : '未匹配'}</strong>
            </div>
          </div>
        </div>

        <aside className="algorithm-status-card">
          <span className={`difficulty-pill ${difficultyClass(problem.difficulty)}`}>
            {problem.difficulty}
          </span>
          <strong>{problem.completed ? '已做过' : '待完成'}</strong>
          <p>{problem.topic}</p>
          <div className="algorithm-source-stack">
            <span>{problem.sourceBanks.join(' / ')}</span>
            {problem.solutionCount ? <span>{problem.solutionCount} 篇公开题解</span> : null}
            {problem.companyTagCount ? <span>{problem.companyTagCount} 个公司标签</span> : null}
          </div>
          {problem.leetcodeUrl ? (
            <a className="algorithm-external-link" href={problem.leetcodeUrl} target="_blank" rel="noreferrer">
              打开 LeetCode
            </a>
          ) : null}
          {problem.nowcoderUrl ? (
            <a className="algorithm-external-link" href={problem.nowcoderUrl} target="_blank" rel="noreferrer">
              牛客题解
            </a>
          ) : null}
          <Link className="algorithm-external-link" to={`/algorithm/review?slug=${problem.slug}`}>
            在复习模式中过这道题
          </Link>
          {problem.sourcePath ? <code>{problem.sourcePath}</code> : <code>progress only</code>}
        </aside>
      </div>

      <article className="detail-panel algorithm-guide-panel">
        <div className="panel-heading">
          <h3>原创面试复盘</h3>
          <span>local guide</span>
        </div>
        <p className="algorithm-pattern">{problem.solutionGuide.idea}</p>
        <div className="algorithm-tag-row detail-tags">
          {problem.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="algorithm-guide-grid">
          <div>
            <span>讲题顺序</span>
            <ol className="algorithm-step-list">
              {problem.solutionGuide.interviewSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <span>复杂度</span>
            <strong>{problem.solutionGuide.complexity}</strong>
            <span>最该记住的错</span>
            <strong>{problem.solutionGuide.keyMistake}</strong>
          </div>
        </div>
      </article>

      {visualizationSteps ? <AlgorithmVisualizer key={problem.slug} steps={visualizationSteps} /> : null}

      <div className="algorithm-detail-grid">
        <article className="detail-panel">
          <div className="panel-heading">
            <h3>面试推荐写法</h3>
            <span>pattern</span>
          </div>
          <p className="algorithm-pattern">{problem.interviewPattern}</p>
          <ul className="algorithm-note-list">
            {problem.thoughts.map((thought) => (
              <li key={thought}>{thought}</li>
            ))}
          </ul>
        </article>

        <article className="detail-panel">
          <div className="panel-heading">
            <h3>当时犯过的错</h3>
            <span>local comments</span>
          </div>
          {cleanedPitfalls.length > 0 ? (
            <ul className="algorithm-note-list warning">
              {cleanedPitfalls.map((pitfall) => (
                <li key={pitfall}>{pitfall}</li>
              ))}
            </ul>
          ) : (
            <p className="empty-note">本地注释里还没有可展示的明确踩坑点，复习后可以补充第一次卡住的位置。</p>
          )}
        </article>
      </div>

      <article className="detail-panel code-panel">
        <div className="panel-heading">
          <h3>本地题解摘录</h3>
          <span>{problem.lastUpdated ?? 'not synced'}</span>
        </div>
        {content === null ? (
          <p className="empty-note">题解内容加载中…</p>
        ) : content.codePreview ? (
          <pre>
            <code>{content.codePreview}</code>
          </pre>
        ) : (
          <p className="empty-note">这道题还没有同步到本地 Python 题解文件。</p>
        )}
      </article>

      <section className="related-problems" aria-label="同类题目">
        <div className="section-heading">
          <p className="eyebrow">Same Type</p>
          <h2>同类型题目</h2>
        </div>
        <div className="algorithm-problem-grid compact">
          {relatedProblems.map((item) => (
            <Link className="algorithm-problem-card" key={item.slug} to={`/algorithm/${item.slug}`}>
              <span className={`difficulty-pill ${difficultyClass(item.difficulty)}`}>
                {item.difficulty}
              </span>
              <h3>
                {item.id}. {item.title}
              </h3>
              <p>{item.topic}</p>
            </Link>
          ))}
        </div>
      </section>
    </section>
  )
}
