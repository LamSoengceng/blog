import { useState } from 'react'
import { loadAiConfig, chatCompletion } from '../utils/aiChat'
import {
  loadFeynmanDraft,
  parseFeynmanScore,
  saveFeynmanDraft,
  type FeynmanDraft,
} from '../utils/feynmanStore'
import { FEYNMAN_BOOST_SCORE } from '../utils/reviewStore'
import { openSiteSettings } from '../utils/settings'
import type { AlgorithmProblem } from '../data/algorithmData'

const buildPrompt = (problem: AlgorithmProblem, explanation: string) =>
  [
    `题目：${problem.id}. ${problem.title}（${problem.difficulty}，${problem.category}，考点：${problem.topic}）`,
    '',
    '—— 标准笔记（来自本地题解注释）——',
    `思路：${problem.thoughts.slice(0, 5).join('；')}`,
    problem.pitfalls.length ? `易错点：${problem.pitfalls.slice(0, 3).join('；')}` : '',
    `复杂度：${problem.solutionGuide.complexity}`,
    '',
    `—— 学生自己的讲解（费曼检验）——`,
    explanation,
  ]
    .filter(Boolean)
    .join('\n')

const systemPrompt =
  '你是费曼学习法教练。学生不看笔记、用自己的话讲解一道算法题，你对照标准笔记评改。' +
  '输出三部分，用简体中文：\n' +
  '✓ 讲对了：列出理解正确的要点（简短）\n' +
  '⚠️ 缺口：对照笔记指漏掉或讲错的关键点，特别是易错点\n' +
  '💡 讲给外行：给一句把核心思路讲给完全不懂的人听的类比或一句话总结\n' +
  '最后单独一行输出「费曼得分：N/5」（5 = 可以直接教会别人）。不要复述题面。'

export function FeynmanCheck({ problem }: { problem: AlgorithmProblem }) {
  const [draft, setDraft] = useState<FeynmanDraft>(() => loadFeynmanDraft(problem.slug))
  const [expanded, setExpanded] = useState(false)
  const [grading, setGrading] = useState(false)
  const [error, setError] = useState('')

  const update = (patch: Partial<FeynmanDraft>) => {
    const next = { ...draft, ...patch, updatedAt: new Date().toISOString() }
    setDraft(next)
    saveFeynmanDraft(problem.slug, next)
  }

  const grade = async () => {
    if (grading) return
    if (!draft.text.trim()) {
      setError('先写下你的讲解，再请 AI 点评。')
      return
    }
    const aiConfig = loadAiConfig()
    if (!aiConfig.apiKey) {
      openSiteSettings()
      setError('AI 点评需要在设置里配置 API Key。')
      return
    }
    setGrading(true)
    setError('')
    try {
      const feedback = await chatCompletion(aiConfig, [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: buildPrompt(problem, draft.text) },
      ])
      const now = new Date().toISOString()
      const score = parseFeynmanScore(feedback)
      update({ feedback, feedbackAt: now, score: score ?? undefined, scoreAt: score ? now : undefined })
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : String(caught))
    } finally {
      setGrading(false)
    }
  }

  return (
    <div className="feynman-block">
      <button className="feynman-head" type="button" onClick={() => setExpanded((prev) => !prev)} aria-expanded={expanded}>
        <strong>费曼检验：合上笔记，用自己的话讲这道题</strong>
        <span>
          {draft.score != null ? `费曼得分 ${draft.score}/5` : draft.text.trim() ? '已有草稿 ✓' : '未开始'}
        </span>
      </button>
      {expanded ? (
        <div className="feynman-body">
          <textarea
            value={draft.text}
            onChange={(event) => setDraft({ ...draft, text: event.target.value })}
            onBlur={() => update({})}
            rows={4}
            placeholder="想象对面坐着一个没做过这道题的人：这道题在考什么？你的解法为什么对？边界在哪里？"
          />
          <div className="feynman-actions">
            <button className="review-btn ghost review-btn-small" type="button" onClick={() => update({})}>
              保存草稿
            </button>
            <button className="review-btn primary review-btn-small" type="button" onClick={grade} disabled={grading}>
              {grading ? '点评中…' : 'AI 对照笔记点评'}
            </button>
            <span className="feynman-hint">草稿存本机；点评前请先自己讲一遍，再展开下方笔记对照。</span>
          </div>
          {error ? <p className="ai-note ai-error">{error}</p> : null}
          {draft.feedback ? (
            <div className="feynman-feedback">
              <p>{draft.feedback}</p>
              {draft.score != null && draft.score >= FEYNMAN_BOOST_SCORE ? (
                <p className="feynman-hint">
                  讲清楚了：本题下次标记「记住了」时，复习间隔会加速一档。
                </p>
              ) : null}
              {draft.feedbackAt ? <em>点评于 {draft.feedbackAt.slice(0, 16).replace('T', ' ')}</em> : null}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
