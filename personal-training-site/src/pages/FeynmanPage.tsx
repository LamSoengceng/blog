import { useState } from 'react'
import { algorithmCategories, algorithmProblems } from '../data/algorithmData'
import { chatCompletion, loadAiConfig } from '../utils/aiChat'
import {
  addFeynmanRecord,
  feynmanStats,
  loadFeynmanRecords,
  removeFeynmanRecord,
  saveFeynmanRecords,
} from '../utils/feynmanRecords'
import { openSiteSettings } from '../utils/settings'
import { parseFeynmanScore } from '../utils/feynmanStore'
import { DictationButton } from '../components/DictationButton'
import { SketchPad, requestSketchExport } from '../components/SketchPad'
import type { FeynmanRecord } from '../utils/feynmanRecords'

// 根据主题匹配站内标准笔记：命中算法分类或题目时，评估会附上你的本地注释作对照
const findReferenceNotes = (topic: string): string | null => {
  const clean = topic.trim()
  if (!clean) return null

  const category = algorithmCategories.find((item) => item.name === clean)
  if (category) {
    const problems = algorithmProblems.filter((problem) => problem.category === clean).slice(0, 6)
    return (
      `这是站点里「${clean}」分类下的本地笔记摘要，作为评估对照：\n` +
      problems
        .map(
          (problem) =>
            `- ${problem.id}. ${problem.title}：核心 ${problem.thoughts[0] ?? ''}；易错 ${problem.pitfalls[0] ?? '无'}`,
        )
        .join('\n')
    )
  }

  const problem = algorithmProblems.find(
    (item) => item.title === clean || item.id === clean || item.title.includes(clean),
  )
  if (problem) {
    return (
      `这是站点里「${problem.id}. ${problem.title}」的本地笔记，作为评估对照：\n` +
      `核心：${problem.thoughts.slice(0, 4).join('；')}\n` +
      `易错点：${problem.pitfalls.slice(0, 3).join('；') || '无'}\n` +
      `复杂度：${problem.solutionGuide.complexity}`
    )
  }

  return null
}

const buildSystemPrompt = (topic: string, referenceNotes: string | null) =>
  [
    '你是费曼学习法教练。学生选择了一个知识点，不看资料、用自己的话把它讲清楚，你负责评估。',
    referenceNotes
      ? '下面附有站内标准笔记，请重点对照笔记判断对错与遗漏。'
      : '没有站内笔记，请依据你自己的知识评估正确性，不确定的内容要注明。',
    '输出三部分，用简体中文：',
    '✓ 讲对了：正确的要点（简短列出）',
    '⚠️ 问题：讲错、含糊或遗漏的关键点；如果整体正确就明确说通过',
    '💡 一句话版本：把这个知识点讲给完全不懂的人听的一句话',
    '最后单独一行输出「费曼得分：N/5」（5 = 清晰正确，能教会别人）。',
    '不要复述学生的原文。',
    '',
    `知识点：${topic}`,
    referenceNotes ? `\n${referenceNotes}` : '',
  ].join('\n')

export function FeynmanPage() {
  const [records, setRecords] = useState<FeynmanRecord[]>(loadFeynmanRecords)
  const [topic, setTopic] = useState('')
  const [text, setText] = useState('')
  const [grading, setGrading] = useState(false)
  const [error, setError] = useState('')
  const [savedFlash, setSavedFlash] = useState('')
  const [showSketch, setShowSketch] = useState(false)

  const stats = feynmanStats(records)
  const canSubmit = topic.trim() && text.trim().length >= 10
  const referenceNotes = findReferenceNotes(topic)

  const flash = (message: string) => {
    setSavedFlash(message)
    setTimeout(() => setSavedFlash(''), 1800)
  }

  const persist = (next: FeynmanRecord[]) => {
    setRecords(next)
    saveFeynmanRecords(next)
  }

  const evaluate = async (saveOnly: boolean) => {
    if (!canSubmit) return
    const cleanTopic = topic.trim()
    const cleanText = text.trim()

    const sketchDataUrl = showSketch ? await requestSketchExport() : ''
    if (saveOnly) {
      persist(addFeynmanRecord(records, { topic: cleanTopic, text: cleanText, score: null, feedback: '', sourceNotes: Boolean(referenceNotes), sketch: sketchDataUrl || undefined }))
      setText('')
      flash('已保存（未评估）✓')
      return
    }

    const aiConfig = loadAiConfig()
    if (!aiConfig.apiKey) {
      openSiteSettings()
      setError('模型评估需要在设置里配置 API Key；或点「仅保存」先存下来。')
      return
    }

    setGrading(true)
    setError('')
    try {
      const feedback = await chatCompletion(aiConfig, [
        { role: 'system', content: buildSystemPrompt(cleanTopic, referenceNotes) },
        { role: 'user', content: cleanText },
      ])
      const score = parseFeynmanScore(feedback)
      persist(
        addFeynmanRecord(records, {
          topic: cleanTopic,
          text: cleanText,
          score: score && score >= 1 ? score : null,
          feedback,
          sourceNotes: Boolean(referenceNotes),
          sketch: sketchDataUrl || undefined,
        }),
      )
      setText('')
      flash('评估完成 ✓')
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : String(caught))
    } finally {
      setGrading(false)
    }
  }

  return (
    <section className="content-band page-band feynman-page">
      <div className="section-heading">
        <p className="eyebrow">Feynman Technique</p>
        <h1 className="page-title">费曼练习</h1>
        <p>
          费曼学习法：选一个知识点，不看资料、用自己的话把它讲清楚。模型评估对错与遗漏并打分，
          每次练习都记录在案——讲不清的地方，就是还没学会的地方。
        </p>
      </div>

      <form
        className="feynman-composer"
        onSubmit={(event) => {
          event.preventDefault()
          void evaluate(false)
        }}
      >
        <div className="feynman-topic-block">
          <label className="feynman-topic-label" htmlFor="feynman-topic">知识点</label>
          <input
            id="feynman-topic"
            className="feynman-topic-input"
            type="text"
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
            placeholder="例如：二分查找、滑动窗口、动态规划、栈……（命中算法分类时会自动附上你的本地笔记作对照）"
            maxLength={40}
          />
          <div className="feynman-topic-chips">
            {algorithmCategories.map((category) => (
              <button
                className={`journal-kind ${topic === category.name ? 'active' : ''}`}
                type="button"
                key={category.name}
                onClick={() => setTopic(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>
          {topic.trim() ? (
            <p className="feynman-note-state">
              {referenceNotes ? '✓ 已匹配到站内笔记，评估时会附上对照' : '未命中站内笔记，模型将按自身知识评估'}
            </p>
          ) : null}
        </div>

        <div className="feynman-input-block">
          <div className="feynman-input-tools">
            <DictationButton onText={(spoken) => setText((prev) => (prev ? `${prev} ${spoken}` : spoken))} />
            <button
              className={`journal-kind ${showSketch ? 'active' : ''}`}
              type="button"
              onClick={() => setShowSketch((prev) => !prev)}
            >
              {showSketch ? '收起小黑板' : '🖍 小黑板'}
            </button>
          </div>
          <textarea
            className="feynman-explain-input"
            value={text}
            onChange={(event) => setText(event.target.value)}
            rows={7}
            placeholder="合上资料，开始讲：这个知识点是什么？解决什么问题？怎么用？容易错在哪？——就当对面坐着一个完全没学过的人。也可以点麦克风口述，或打开小黑板画图。"
          />
          {showSketch ? <SketchPad /> : null}
        </div>

        <div className="journal-composer-actions">
          <button className="review-btn primary" type="submit" disabled={!canSubmit || grading}>
            {grading ? '评估中…' : '讲述完毕，请模型评估'}
          </button>
          <button
            className="review-btn ghost"
            type="button"
            disabled={!canSubmit || grading}
            onClick={() => void evaluate(true)}
          >
            仅保存，稍后评估
          </button>
          <span className="journal-char-count">{text.length} 字</span>
          {savedFlash ? <span className="settings-saved">{savedFlash}</span> : null}
        </div>
        {error ? <p className="ai-note ai-error">{error}</p> : null}
      </form>

      <div className="feynman-stats" aria-label="费曼练习统计">
        <div>
          <span>累计练习</span>
          <strong>{stats.total} 次</strong>
        </div>
        <div>
          <span>平均得分</span>
          <strong>{stats.avgScore}</strong>
        </div>
        <div>
          <span>最近 5 次均分</span>
          <strong>{stats.recentAvg}</strong>
        </div>
      </div>

      <div className="feynman-records">
        {records.length === 0 ? (
          <p className="empty-note">
            还没有练习记录。选一个知识点，写下你的第一段讲解——讲不清楚的地方就是还没学会的地方。
          </p>
        ) : (
          records.map((record) => (
            <article className="feynman-record" key={record.id}>
              <div className="journal-entry-head">
                <span className={`journal-kind-badge ${record.sourceNotes ? '身体' : '随笔'}`}>
                  {record.sourceNotes ? '对照笔记' : '自由主题'}
                </span>
                <strong className="feynman-record-topic">{record.topic}</strong>
                {record.score ? <b className="feynman-score">{record.score}/5</b> : <b className="feynman-score pending">未评估</b>}
                <time>{record.createdAt.slice(0, 16).replace('T', ' ')}</time>
                <button
                  className="journal-delete"
                  type="button"
                  aria-label="删除这条记录"
                  onClick={() => persist(removeFeynmanRecord(records, record.id))}
                >
                  ×
                </button>
              </div>
              <p className="feynman-record-text">{record.text}</p>
              {record.sketch ? <img className="feynman-sketch" src={record.sketch} alt={`${record.topic} 的小黑板草图`} /> : null}
              {record.feedback ? (
                <details className="ask-sources" open={record.score == null}>
                  <summary>{record.score ? '查看模型评语' : '未评估'}</summary>
                  <p className="feynman-record-feedback">{record.feedback}</p>
                </details>
              ) : null}
            </article>
          ))
        )}
      </div>
    </section>
  )
}
