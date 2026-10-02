import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { algorithmProblems, type AlgorithmProblem, type AlgorithmProblemSummary } from '../data/algorithm'
import { HighlightText } from '../utils/HighlightText'
import { FeynmanCheck } from '../components/FeynmanCheck'
import { loadFeynmanScore } from '../utils/feynmanStore'
import { chatCompletion, loadAiConfig } from '../utils/aiChat'
import { loadReviewPrefs, onReviewPrefsChange, openSiteSettings, type ReviewPrefs } from '../utils/settings'
import { loadAlgorithmContent } from '../utils/algorithmContent'
import { insightByCategory } from '../data/categoryInsights'
import { problemEssences } from '../data/problemEssences'
import {
  buildDueQueue,
  countDueWithinDay,
  loadReviewStore,
  recordReview,
  saveReviewStore,
  type ReviewStatus,
  type ReviewStore,
} from '../utils/reviewStore'

const difficultyClass = (difficulty: string) => {
  if (difficulty === '简单') return 'easy'
  if (difficulty === '困难') return 'hard'
  return 'medium'
}

const reReviewPattern = /需二刷|待二刷|三刷|再刷一遍/

const isReReview = (problem: AlgorithmProblemSummary) =>
  problem.thoughts.some((thought) => reReviewPattern.test(thought)) ||
  problem.pitfalls.some((pitfall) => reReviewPattern.test(pitfall))

const reviewPool = algorithmProblems
  .filter(isReReview)
  .sort((first, second) => (first.lastUpdatedAt ?? '').localeCompare(second.lastUpdatedAt ?? ''))

type BlankState = 'idle' | 'correct' | 'wrong' | 'revealed'

type BlankEntry = { value: string; state: BlankState }

const normalizeAnswer = (text: string) =>
  text
    .toLowerCase()
    .replace(/[\s（）()、，。·\-_/\\]+/g, '')
    .trim()

const buildAiContext = (problem: AlgorithmProblemSummary, codePreview?: string) =>
  [
    '你是算法面试教练，用简体中文简明回答，重点讲核心技巧、不变量和易错点，不要复述题面，不要说空话。',
    `当前复习题：${problem.id}. ${problem.title}（${problem.difficulty}，${problem.category}，考点：${problem.topic}）`,
    `本地笔记-思路：${problem.thoughts.join('；') || '无'}`,
    `本地笔记-易错点：${problem.pitfalls.join('；') || '无'}`,
    `复杂度：${problem.solutionGuide.complexity}`,
    codePreview ? `本地题解代码：\n${codePreview.slice(0, 3000)}` : '',
  ]
    .filter(Boolean)
    .join('\n')

const applyQueueLimit = (slugs: string[], limit: number) => (limit > 0 ? slugs.slice(0, limit) : slugs)

export function AlgorithmReviewPage() {
  const [searchParams] = useSearchParams()
  const focusSlug = searchParams.get('slug')
  const [prefs, setPrefs] = useState<ReviewPrefs>(loadReviewPrefs)
  useEffect(() => onReviewPrefsChange(() => setPrefs(loadReviewPrefs())), [])

  // 队列：没记住/跳过的题挪到队尾循环，直到全部「记住了」
  const [queue, setQueue] = useState<string[]>(() => {
    const pool = buildDueQueue(reviewPool.map((problem) => problem.slug), loadReviewStore())
    if (!focusSlug) return applyQueueLimit(pool, prefs.queueLimit)
    const rest = pool.filter((slug) => slug !== focusSlug)
    return [focusSlug, ...applyQueueLimit(rest, prefs.queueLimit)]
  })
  const [showCode, setShowCode] = useState(false)
  const [store, setStore] = useState<ReviewStore>(loadReviewStore)
  const [sessionTotal, setSessionTotal] = useState(queue.length)

  const current = useMemo(
    () => (queue.length ? algorithmProblems.find((problem) => problem.slug === queue[0]) : undefined),
    [queue],
  )

  // 题面/代码不在轻量索引里：切题时按需加载，内容按 slug 记录避免旧题闪现
  const [contentState, setContentState] = useState<{ slug: string; problem: AlgorithmProblem | null } | null>(null)
  const content = contentState && contentState.slug === current?.slug ? contentState.problem : null
  const essence = current ? problemEssences[current.id] : undefined
  const insight = current ? insightByCategory[current.category] : undefined
  useEffect(() => {
    if (!current) return
    void loadAlgorithmContent(current.slug).then((loaded) => {
      setContentState({ slug: current.slug, problem: loaded })
    })
  }, [current])

  // 填空回忆：每道题独立的作答状态；切题时在渲染期重置（比 effect 同步 setState 少一次级联渲染）
  const [blanks, setBlanks] = useState<BlankEntry[]>([])
  const [blankSlug, setBlankSlug] = useState(current?.slug)
  if (blankSlug !== current?.slug) {
    setBlankSlug(current?.slug)
    setBlanks((current?.recallBlanks ?? []).map(() => ({ value: '', state: 'idle' as BlankState })))
    setShowCode(loadReviewPrefs().autoExpandCode)
  }

  const knownCount = Object.values(store).filter((item) => item.status === 'known').length
  const againCount = Object.values(store).filter((item) => item.status === 'again').length

  const record = (slug: string, status: ReviewStatus) => {
    // 费曼检验讲清楚过（≥4 分）的题，「记住了」时多升一个箱级
    const next = recordReview(store, slug, status, loadFeynmanScore(slug))
    setStore(next)
    saveReviewStore(next)
  }

  const advance = (status: ReviewStatus | 'skip') => {
    if (!current) return
    if (status !== 'skip') record(current.slug, status)
    setQueue((prev) => {
      const [head, ...rest] = prev
      return status === 'known' ? rest : [...rest, head]
    })
  }

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      // 输入框里打字/空格不能触发快捷键
      const target = event.target as HTMLElement | null
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) return

      if (event.key === ' ') {
        event.preventDefault()
        setShowCode((prev) => !prev)
      } else if (event.key === 'ArrowRight') {
        advance('skip')
      } else if (event.key === '1') {
        advance('known')
      } else if (event.key === '2') {
        advance('again')
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  })

  const resetProgress = () => {
    setStore({})
    saveReviewStore({})
    const pool = applyQueueLimit(reviewPool.map((p) => p.slug), prefs.queueLimit)
    const nextQueue = focusSlug ? [focusSlug, ...pool.filter((s) => s !== focusSlug)] : pool
    setQueue(nextQueue)
    setSessionTotal(nextQueue.length)
  }

  const restartQueue = () => {
    const nextQueue = applyQueueLimit(
      buildDueQueue(reviewPool.map((problem) => problem.slug), store),
      prefs.queueLimit,
    )
    setQueue(nextQueue)
    setSessionTotal(nextQueue.length)
  }

  const setBlank = (index: number, patch: Partial<BlankEntry>) => {
    setBlanks((prev) => prev.map((entry, i) => (i === index ? { ...entry, ...patch } : entry)))
  }

  const checkBlank = (index: number) => {
    const problem = current
    const entry = blanks[index]
    if (!problem || !entry) return
    const expected = problem.recallBlanks[index]?.answer ?? ''
    const correct = normalizeAnswer(entry.value) === normalizeAnswer(expected) && entry.value.trim() !== ''
    setBlank(index, { state: correct ? 'correct' : 'wrong' })
  }

  // 问 AI（BYOK）：配置在全局设置弹窗里维护，Key 只存在本机浏览器
  const [aiOpen, setAiOpen] = useState(false)
  const [aiMessages, setAiMessages] = useState<{ role: string; content: string }[]>([])
  const [aiInput, setAiInput] = useState('')
  const [aiLoading, setAiLoading] = useState(false)
  const [aiError, setAiError] = useState('')

  const [aiSlug, setAiSlug] = useState(current?.slug)
  if (aiSlug !== current?.slug) {
    setAiSlug(current?.slug)
    setAiMessages([])
    setAiError('')
  }

  const askAi = async () => {
    const question = aiInput.trim()
    if (!question || aiLoading || !current) return
    const aiConfig = loadAiConfig()
    if (!aiConfig.apiKey) {
      openSiteSettings()
      setAiError('先在设置里填入 API Key 才能提问。')
      return
    }
    const nextMessages = [...aiMessages, { role: 'user', content: question }]
    setAiMessages(nextMessages)
    setAiInput('')
    setAiLoading(true)
    setAiError('')
    try {
      const answer = await chatCompletion(aiConfig, [
        { role: 'system', content: buildAiContext(current, content?.codePreview) },
        ...nextMessages,
      ])
      setAiMessages((prev) => [...prev, { role: 'assistant', content: answer }])
    } catch (error) {
      setAiError(error instanceof Error ? error.message : String(error))
    } finally {
      setAiLoading(false)
    }
  }

  if (!reviewPool.length) {
    return (
      <section className="content-band page-band">
        <p className="eyebrow">Algorithm / Review</p>
        <h1 className="page-title">快速复习</h1>
        <p className="empty-note">还没有标记「需二刷」的题目。在本地题解注释里写上「需二刷」后重新生成数据，这里就会出现复习队列。</p>
        <Link className="primary-link" to="/algorithm">返回算法学习</Link>
      </section>
    )
  }

  if (!current) {
    const againSlugs = Object.entries(store)
      .filter(([, item]) => item.status === 'again')
      .map(([slug]) => slug)
    const dueTomorrow = countDueWithinDay(store)
    return (
      <section className="content-band page-band">
        <div className="review-done">
          <p className="eyebrow">Session Complete</p>
          <h1 className="page-title">本轮复习完成 🎉</h1>
          <p>
            本轮共过完 {sessionTotal} 道标记题目：累计记住 {knownCount} 道，待巩固 {againCount} 道。
          </p>
          {againSlugs.length ? (
            <p>建议稍后针对「待巩固」的题再过一轮，或者直接开始新一轮。</p>
          ) : null}
          {dueTomorrow > 0 ? <p>明天有 {dueTomorrow} 道题到期，记得回来复习。</p> : null}
          <div className="review-actions review-actions-center">
            <button className="review-btn primary" type="button" onClick={restartQueue}>
              再来一轮
            </button>
            <Link className="review-btn ghost" to="/algorithm">返回算法学习</Link>
          </div>
        </div>
      </section>
    )
  }

  const keyPoints = current.keyPoints ?? current.thoughts

  return (
    <section className="content-band page-band review-shell">
      <div className="review-topbar">
        <div>
          <p className="eyebrow">Algorithm / Review</p>
          <h1 className="page-title">快速复习</h1>
        </div>
        <div className="review-topbar-stats">
          <span>
            队列剩余 <strong>{queue.length}</strong> / {sessionTotal}
          </span>
          <span className="review-stat-known">已记住 {knownCount}</span>
          <span className="review-stat-again">待巩固 {againCount}</span>
          <button className="review-btn ghost review-btn-small" type="button" onClick={resetProgress}>
            重置进度
          </button>
        </div>
      </div>
      <div className="review-progress category-track">
        <span style={{ width: `${sessionTotal ? Math.round(((sessionTotal - queue.length) / sessionTotal) * 100) : 0}%` }} />
      </div>

      <article className="review-card" key={current.slug}>
        <div className="algorithm-card-topline">
          <span>
            {current.category} · {current.lastUpdated ?? 'recent'}
          </span>
          <b>{current.id}</b>
        </div>
        <h2>
          {current.id}. {current.title}
        </h2>
        <div className="review-pill-row">
          <span className={`difficulty-pill ${difficultyClass(current.difficulty)}`}>{current.difficulty}</span>
          <span className="review-pill-plain">{current.topic}</span>
        {current.leetcodeUrl ? (
          <a href={current.leetcodeUrl} target="_blank" rel="noreferrer">
            打开 LeetCode ↗
          </a>
        ) : null}
        {current.nowcoderUrl ? (
          <a href={current.nowcoderUrl} target="_blank" rel="noreferrer">
            牛客 ↗
          </a>
        ) : null}
      </div>

      <div className="review-glance">
        {current.ask ? (
          <div className="glance-row">
            <span>问法</span>
            <p>{current.ask}</p>
          </div>
        ) : null}
        <div className="glance-row">
          <span>考点</span>
          <div className="glance-chips">
            <em className="glance-chip is-primary">{current.category}</em>
            <em className="glance-chip">{current.topic}</em>
            {current.tags.filter((tag) => tag !== current.category && tag !== current.topic).slice(0, 5).map((tag) => (
              <em className="glance-chip" key={tag}>{tag}</em>
            ))}
          </div>
        </div>
        {current.constraints?.length ? (
          <div className="glance-row">
            <span>边界</span>
            <div className="glance-chips">
              {current.constraints.map((constraint) => (
                <code className="glance-chip is-mono" key={constraint}>{constraint}</code>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {essence ? (
        <div className="review-glance essence-cue">
          <div className="glance-row">
            <span>本质</span>
            <p>{essence.essence}</p>
          </div>
          <details className="essence-reveal">
            <summary>解法核心与易漏边界（先自己推，再展开）</summary>
            <div className="feynman-canonical-body">
              <p><b>核心</b>{essence.core}</p>
              {essence.edge ? <p><b>易漏</b>{essence.edge}</p> : null}
            </div>
          </details>
        </div>
      ) : null}

        {content?.statement ? (
          <div className="review-section review-statement">
            <span>原题</span>
            <div className="statement-body">
              {(() => {
                const lines = content.statement.split('\n').filter((line) => line.trim())
                // 速览条已展示问法（题面首行），原题区跳过重复的首行
                const askLine = current.ask?.replace(/…$/, '')
                const bodyLines = askLine && lines[0]?.trim() === askLine ? lines.slice(1) : lines
                return bodyLines.map((line) => <p key={line}>{line}</p>)
              })()}
            </div>
          </div>
        ) : null}

        <div className="review-section">
          <span>要点回顾 · 先回忆再往下看</span>
          <ul className="review-points">
            {keyPoints.map((point) => (
              <li key={point}>
                <HighlightText text={point} />
              </li>
            ))}
          </ul>
        </div>

        {prefs.showBlanks && current.recallBlanks.length ? (
          <div className="review-section">
            <span>填空回忆 · 主动想再作答</span>
            <div className="recall-list">
              {current.recallBlanks.map((blank, index) => {
                const entry = blanks[index] ?? { value: '', state: 'idle' as BlankState }
                const [before, after = ''] = blank.prompt.split('＿＿＿')
                return (
                  <div className={`recall-blank ${entry.state}`} key={blank.prompt}>
                    <span className="recall-index">{index + 1}</span>
                    <div className="recall-main">
                      <p className="recall-prompt">
                        {before}
                        <input
                          className="recall-input"
                          type="text"
                          value={entry.state === 'revealed' ? blank.answer : entry.value}
                          onChange={(event) => setBlank(index, { value: event.target.value, state: 'idle' })}
                          placeholder="填术语"
                          aria-label={`填空 ${index + 1}`}
                          disabled={entry.state === 'correct' || entry.state === 'revealed'}
                        />
                        {after}
                      </p>
                      <div className="recall-feedback">
                        {entry.state === 'correct' ? <b>✓ 答对了</b> : null}
                        {entry.state === 'wrong' ? <b>✗ 不对，答案是「{blank.answer}」</b> : null}
                        {entry.state === 'revealed' ? <b>答案：{blank.answer}</b> : null}
                        {entry.state === 'idle' ? (
                          <>
                            <button className="review-btn ghost review-btn-small" type="button" onClick={() => checkBlank(index)}>
                              检查
                            </button>
                            <button
                              className="review-btn ghost review-btn-small"
                              type="button"
                              onClick={() => setBlank(index, { state: 'revealed' })}
                            >
                              直接看答案
                            </button>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ) : null}

        <FeynmanCheck problem={current} />

        {insight ? (
          <details className="feynman-canonical">
            <summary>标准笔记 · {current.category}（讲完再展开对照）</summary>
            <div className="feynman-canonical-body">
              <p><b>一句话</b>{insight.surface}</p>
              <p><b>机制</b>{insight.mechanism}</p>
              <p><b>不懂会栽在哪</b>{insight.implication}</p>
              <p><b>类比 · {insight.analogyFrom}</b>{insight.analogy}</p>
            </div>
          </details>
        ) : null}

        <div className="review-section">
          <span>最该记住的错</span>
          <p className="review-mistake">
            <HighlightText text={current.solutionGuide.keyMistake} />
          </p>
          <p className="review-complexity">{current.solutionGuide.complexity}</p>
        </div>

        {content?.codePreview ? (
          <div className="review-section">
            <span>本地题解（先回忆，再对照）</span>
            <pre className="review-code" hidden={!showCode}>
              <code>{content.codePreview}</code>
            </pre>
          </div>
        ) : null}

        <div className="review-actions">
          <button className="review-btn primary" type="button" onClick={() => advance('known')}>
            记住了（1）
          </button>
          <button className="review-btn warn" type="button" onClick={() => advance('again')}>
            没记住（2）
          </button>
          {content?.codePreview ? (
            <button className="review-btn ghost" type="button" onClick={() => setShowCode((prev) => !prev)}>
              {showCode ? '收起代码' : '看代码（空格）'}
            </button>
          ) : null}
          <button className="review-btn ghost" type="button" onClick={() => advance('skip')}>
            跳过（→）
          </button>
        </div>

        <div className="ai-panel">
          <div className="ai-panel-head">
            <button className="review-btn ghost review-btn-small" type="button" onClick={() => setAiOpen((prev) => !prev)}>
              {aiOpen ? '收起 AI 助手' : '问 AI 助手'}
            </button>
            <button className="review-btn ghost review-btn-small" type="button" onClick={() => openSiteSettings()}>
              设置
            </button>
          </div>

          {aiOpen ? (
            <div className="ai-chat">
              {aiMessages.map((message, index) => (
                <div className={`ai-message ${message.role}`} key={index}>
                  <span>{message.role === 'user' ? '我' : 'AI'}</span>
                  <p>{message.content}</p>
                </div>
              ))}
              {aiLoading ? <p className="ai-note">AI 思考中…</p> : null}
              {aiError ? <p className="ai-note ai-error">{aiError}</p> : null}
              <div className="ai-input-row">
                <textarea
                  value={aiInput}
                  onChange={(event) => setAiInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
                      event.preventDefault()
                      askAi()
                    }
                  }}
                  rows={2}
                  placeholder="问这道题的任何问题，例如「如果不能用堆还能怎么做？」（Ctrl+Enter 发送）"
                />
                <button className="review-btn primary review-btn-small" type="button" onClick={askAi} disabled={aiLoading}>
                  发送
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </article>

      <p className="review-hint">
        快捷键：空格 = 展开/收起代码 · 1 = 记住了 · 2 = 没记住 · → = 跳过。进度保存在本机浏览器，
        <Link to={`/algorithm/${current.slug}`}>查看完整题解页</Link>
      </p>
    </section>
  )
}
