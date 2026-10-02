import { useRef, useState } from 'react'
import { chatCompletionStream, loadAiConfig } from '../utils/aiChat'
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
import { SketchPad } from '../components/SketchPad'
import { requestSketchExport } from '../utils/sketchExport'
import type { FeynmanRecord } from '../utils/feynmanRecords'
import { pickRandomPoint, splitDocIntoPoints, type KnowledgePoint } from '../utils/knowledgePool'
import { useFeynmanLibrary } from '../hooks/useFeynmanLibrary'
import { FeynmanLibrary } from '../components/feynman/FeynmanLibrary'
import { RubricFeedback } from '../components/feynman/RubricFeedback'

// 通用费曼评估：模型不扮演特定角色，只根据用户资料与知识点给出结构化建议。
const buildSystemPrompt = (topic: string, referenceNotes: string | null) =>
  [
    '你是费曼学习法教练。用户刚刚用自己的话解释了一个知识点。你的任务是帮助他发现理解中的缺口，而不是替他作答。',
    referenceNotes
      ? '下面附有用户上传资料中与该知识点相关的原文，请以它为主要对照依据，同时指出资料本身可能遗漏的地方。'
      : '没有附带资料，请依据你的知识评估；不确定时明确标注，不要编造资料来源。',
    '用简体中文、严格按以下结构输出评语：',
    '✓ 讲对了：列出理解正确的要点（简短）',
    '⚠️ 错与漏：纠正讲错的内容，指出遗漏的关键机制或边界',
    '🔍 理解深度：判断是否讲到了因果机制、不变量和适用边界，而不只是罗列名词，并说明理由',
    '🎤 下一步练习：给出 1-2 个帮助用户继续思考的问题，但不要直接给答案',
    '💡 一句话版本：把这个知识点讲给完全不懂的人听的一句话',
    '最后单独一行输出「费曼得分：N/5」（5 = 能清楚、正确、带机制地教会别人）。',
    '不要复述用户的整段原文，也不要替用户写完整答案。',
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
  const [feedback, setFeedback] = useState('')
  const [picked, setPicked] = useState<KnowledgePoint | null>(null)
  const { docs: library, addPaste, importFiles, remove: removeDoc } = useFeynmanLibrary()
  const [libraryOpen, setLibraryOpen] = useState(false)
  const abortRef = useRef<AbortController | null>(null)

  const stats = feynmanStats(records)
  const canSubmit = topic.trim() && text.trim().length >= 10
  const referenceNotes = picked?.reference ?? null

  const flash = (message: string) => {
    setSavedFlash(message)
    setTimeout(() => setSavedFlash(''), 1800)
  }

  const persist = (next: FeynmanRecord[]) => {
    setRecords(next)
    saveFeynmanRecords(next)
  }

  // 从用户上传资料中随机抽取一个知识点，避开上一题。 
  const drawRandom = () => {
    const pool = library.flatMap(splitDocIntoPoints)
    if (!pool.length) {
      flash('资料库为空：请先上传 .md / .txt 文件')
      setLibraryOpen(true)
      return
    }
    const point = pickRandomPoint(pool, picked?.topic ?? topic)
    setPicked(point)
    setTopic(point.topic)
    setFeedback('')
    flash('已随机抽取一个知识点')
  }

  const handleAddPaste = (title: string, text: string) => {
    addPaste(title, text)
    flash('资料已入库')
  }

  const handleImportFiles = async (files: FileList | null) => {
    const count = await importFiles(files)
    if (count) flash(`已导入 ${count} 份资料`)
  }

  const stopGrading = () => abortRef.current?.abort()

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
    setFeedback('')
    const controller = new AbortController()
    abortRef.current = controller
    try {
      const full = await chatCompletionStream(
        aiConfig,
        [
          { role: 'system', content: buildSystemPrompt(cleanTopic, referenceNotes) },
          { role: 'user', content: cleanText },
        ],
        (delta) => setFeedback((prev) => prev + delta),
        controller.signal,
      )
      const score = parseFeynmanScore(full)
      persist(
        addFeynmanRecord(records, {
          topic: cleanTopic,
          text: cleanText,
          score: score && score >= 1 ? score : null,
          feedback: full,
          sourceNotes: Boolean(referenceNotes),
          sketch: sketchDataUrl || undefined,
        }),
      )
      setText('')
      flash('评估完成 ✓')
    } catch (caught) {
      if (caught instanceof DOMException && caught.name === 'AbortError') flash('评估已停止（未保存）')
      else setError(caught instanceof Error ? caught.message : String(caught))
    } finally {
      setGrading(false)
      abortRef.current = null
    }
  }

  return (
    <section className="content-band page-band feynman-page">
      <div className="section-heading">
        <p className="eyebrow">Feynman Technique</p>
        <h1 className="page-title">费曼练习</h1>
        <p>
          费曼学习法：从你的资料库随机抽取一个知识点，先用自己的话讲清楚，再由大模型流式给出结构化建议——
          讲对了什么、错漏在哪、理解是否深入、下一步怎么继续练习。
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
          <div className="feynman-draw-row">
            <button className="review-btn primary review-btn-small" type="button" onClick={drawRandom}>
              🎲 随机知识点
            </button>
            <button
              className={`journal-kind ${libraryOpen ? 'active' : ''}`}
              type="button"
              onClick={() => setLibraryOpen((prev) => !prev)}
            >
              📚 上传资料（{library.length}）
            </button>
          </div>

          {libraryOpen ? (
            <FeynmanLibrary
              docs={library}
              onAddPaste={handleAddPaste}
              onImportFiles={handleImportFiles}
              onRemove={removeDoc}
            />
          ) : null}

          <label className="feynman-topic-label" htmlFor="feynman-topic">知识点</label>
          <input
            id="feynman-topic"
            className="feynman-topic-input"
            type="text"
            value={topic}
            onChange={(event) => {
              setPicked(null)
              setTopic(event.target.value)
            }}
            placeholder="手动输入知识点，或从上传资料中随机抽取一个……"
            maxLength={60}
          />
          {topic.trim() ? (
            <p className="feynman-note-state">
              {picked ? `已从资料库抽取：${picked.topic} · 对照资料已附` : referenceNotes ? '✓ 已附资料对照' : '未选择资料对照，大模型将按自身知识评估'}
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
            placeholder={
              picked
                ? `刚才从资料中抽到「${picked.topic}」——合上资料，先用自己的话解释：它是什么？为什么？怎么用？边界在哪里？`
                : '合上资料，开始讲：这个知识点是什么？为什么？怎么用？容易错在哪？——也可以点麦克风口述，或打开小黑板画图。'
            }
          />
          {showSketch ? <SketchPad /> : null}
        </div>


        <div className="journal-composer-actions">
          <button className="review-btn primary" type="submit" disabled={!canSubmit || grading}>
            {grading ? '评估中…' : '讲述完毕，请大模型评估'}
          </button>
          <button
            className="review-btn ghost"
            type="button"
            disabled={!canSubmit || grading}
            onClick={() => void evaluate(true)}
          >
            仅保存，稍后评估
          </button>
          {grading ? (
            <button className="review-btn warn" type="button" onClick={stopGrading}>
              停止
            </button>
          ) : null}
          <span className="journal-char-count">{text.length} 字</span>
          {savedFlash ? <span className="settings-saved">{savedFlash}</span> : null}
        </div>
        {error ? <p className="ai-note ai-error">{error}</p> : null}
        {grading || feedback ? (
          <div className="feynman-stream" aria-live="polite">
            {feedback ? <RubricFeedback text={feedback} streaming={grading} /> : '大模型正在阅读你的讲解……'}
          </div>
        ) : null}
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
            还没有练习记录。上传一份资料或手动输入知识点，写下你的第一段讲解——讲不清楚的地方就是还没学会的地方。
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
                  <summary>{record.score ? '查看大模型评语' : '未评估'}</summary>
                  <RubricFeedback text={record.feedback} />
                </details>
              ) : null}
            </article>
          ))
        )}
      </div>
    </section>
  )
}
