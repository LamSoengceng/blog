import { useRef, useState } from 'react'
import { chatCompletionStream, loadAiConfig } from '../utils/aiChat'
import { algorithmCategories, algorithmProblems } from '../data/algorithm'
import { insightByCategory } from '../data/categoryInsights'
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
import {
  addLibraryDoc,
  buildKnowledgePool,
  loadLibrary,
  pickRandomPoint,
  removeLibraryDoc,
  type KnowledgePoint,
  type KnowledgeSource,
} from '../utils/knowledgePool'

const SOURCE_OPTIONS: { key: KnowledgeSource; label: string }[] = [
  { key: '算法', label: '算法' },
  { key: '训练', label: '训练动作' },
  { key: '博客', label: '博客' },
  { key: '资料库', label: '我的资料' },
]

// 根据主题匹配站内标准笔记：命中算法分类或题目时，评估会附上你的本地注释作对照
const findReferenceNotes = (topic: string): string | null => {
  const clean = topic.trim()
  if (!clean) return null

  const category = algorithmCategories.find((item) => item.name === clean)
  if (category) {
    const insight = insightByCategory[clean]
    const problems = algorithmProblems.filter((problem) => problem.category === clean).slice(0, 6)
    return (
      (insight
        ? `分类标准笔记：一句话：${insight.surface} 机制：${insight.mechanism} 常见理解缺口：${insight.implication}\n`
        : '') +
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

// 面试官评估标准：对照参考笔记按四段 rubric 批改，追问不给答案，最后单独一行打分
const buildSystemPrompt = (topic: string, referenceNotes: string | null) =>
  [
    '你是技术面试官兼费曼学习法教练。学生被问到下面的知识点，像面试作答一样讲解，你对照参考笔记评改。',
    referenceNotes
      ? '参考笔记附在最后，重点对照它判断对错与遗漏。'
      : '没有参考笔记，依据你自己的知识评估，不确定的内容要注明。',
    '用简体中文、严格按以下结构输出评语：',
    '✓ 讲对了：列出理解正确的要点（简短）',
    '⚠️ 错与漏：讲错的当场纠正、漏掉的关键机制逐条指出',
    '🔍 深度判定：明确说这次讲解属于「表面罗列名词」还是「讲到了机制与边界」，并用一句话说明理由',
    '🎤 面试官追问：给出你接下来最可能追问的 1-2 个问题（只提问，不给答案）',
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
  const [feedback, setFeedback] = useState('')
  const [picked, setPicked] = useState<KnowledgePoint | null>(null)
  const [sources, setSources] = useState<Record<KnowledgeSource, boolean>>({
    算法: true,
    训练: true,
    博客: true,
    资料库: true,
  })
  const [library, setLibrary] = useState(loadLibrary)
  const [libraryOpen, setLibraryOpen] = useState(false)
  const [pasteTitle, setPasteTitle] = useState('')
  const [pasteText, setPasteText] = useState('')
  const abortRef = useRef<AbortController | null>(null)

  const stats = feynmanStats(records)
  const canSubmit = topic.trim() && text.trim().length >= 10
  const referenceNotes = picked ? picked.reference : findReferenceNotes(topic)
  const insight = topic.trim() && !picked ? insightByCategory[topic.trim()] : undefined

  const flash = (message: string) => {
    setSavedFlash(message)
    setTimeout(() => setSavedFlash(''), 1800)
  }

  const persist = (next: FeynmanRecord[]) => {
    setRecords(next)
    saveFeynmanRecords(next)
  }

  // 面试官出题：从勾选的来源池里随机抽一个知识点
  const drawRandom = () => {
    const pool = buildKnowledgePool(library).filter((point) => sources[point.source])
    if (!pool.length) {
      flash('知识池为空：勾选至少一个来源，或往资料库导入内容')
      return
    }
    const point = pickRandomPoint(pool, picked?.topic ?? topic)
    setPicked(point)
    setTopic(point.topic)
    setFeedback('')
    flash('面试官出题完成，开始作答')
  }

  const importFiles = async (fileList: FileList | null) => {
    if (!fileList?.length) return
    let next = library
    for (const file of Array.from(fileList)) {
      next = addLibraryDoc(next, file.name.replace(/\.[^.]+$/, ''), await file.text())
    }
    setLibrary(next)
    flash(`已导入 ${fileList.length} 份资料`)
  }

  const addPaste = () => {
    if (!pasteText.trim()) return
    setLibrary(addLibraryDoc(library, pasteTitle, pasteText))
    setPasteTitle('')
    setPasteText('')
    flash('资料已入库')
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
          费曼学习法：面试官从知识池随机出题（算法 / 训练动作 / 博客 / 你的资料库），你不看资料、像面试作答一样讲清楚，
          模型流式给出结构化评语：讲对了什么、错漏在哪、深度够不够、还会追问什么——讲不清的地方，就是还没学会的地方。
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
              🎲 面试官出题
            </button>
            {SOURCE_OPTIONS.map(({ key, label }) => (
              <button
                key={key}
                className={`journal-kind ${sources[key] ? 'active' : ''}`}
                type="button"
                title={`出题池${sources[key] ? '包含' : '排除'}：${label}`}
                onClick={() => setSources({ ...sources, [key]: !sources[key] })}
              >
                {label}
              </button>
            ))}
            <button
              className={`journal-kind ${libraryOpen ? 'active' : ''}`}
              type="button"
              onClick={() => setLibraryOpen((prev) => !prev)}
            >
              📚 我的资料库（{library.length}）
            </button>
          </div>

          {libraryOpen ? (
            <div className="feynman-library">
              <p className="feynman-library-hint">
                资料存在本机浏览器。支持粘贴文本或导入 .md / .txt，一份资料按小标题拆成多个知识点进入出题池。
              </p>
              <div className="feynman-library-import">
                <input
                  className="feynman-topic-input"
                  type="text"
                  value={pasteTitle}
                  onChange={(event) => setPasteTitle(event.target.value)}
                  placeholder="资料标题（可选）"
                  maxLength={60}
                />
                <label className="journal-kind feynman-lib-file">
                  导入 .md / .txt
                  <input
                    type="file"
                    accept=".md,.markdown,.txt,text/markdown,text/plain"
                    multiple
                    onChange={(event) => {
                      void importFiles(event.target.files)
                      event.target.value = ''
                    }}
                  />
                </label>
              </div>
              <textarea
                className="feynman-explain-input"
                value={pasteText}
                onChange={(event) => setPasteText(event.target.value)}
                rows={4}
                placeholder="粘贴资料内容……支持 markdown，# 小标题会拆成独立知识点"
              />
              <button className="review-btn ghost review-btn-small" type="button" onClick={addPaste} disabled={!pasteText.trim()}>
                存入资料库
              </button>
              {library.length ? (
                <ul className="feynman-library-list">
                  {library.map((doc) => (
                    <li key={doc.id}>
                      <span>{doc.title}</span>
                      <em>{doc.text.length} 字</em>
                      <button
                        type="button"
                        aria-label={`删除资料 ${doc.title}`}
                        onClick={() => setLibrary(removeLibraryDoc(library, doc.id))}
                      >
                        ×
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="empty-note">资料库还是空的。粘贴一段笔记，或导入一份 .md，出题池就会带上它。</p>
              )}
            </div>
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
            placeholder="手动输入，或点「面试官出题」随机抽一个……"
            maxLength={60}
          />
          <div className="feynman-topic-chips">
            {algorithmCategories.map((category) => (
              <button
                className={`journal-kind ${topic === category.name ? 'active' : ''}`}
                type="button"
                key={category.name}
                onClick={() => {
                  setPicked(null)
                  setTopic(category.name)
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
          {topic.trim() ? (
            <p className="feynman-note-state">
              {picked
                ? `面试官已出题：${picked.topic}（来源：${picked.source}）· 对照资料已附`
                : referenceNotes
                  ? '✓ 已匹配到站内笔记，评估时会附上对照'
                  : '未命中站内笔记，模型将按自身知识评估'}
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
                ? `面试官刚问到你「${picked.topic}」——合上资料，像面试作答一样开讲：是什么？解决什么问题？怎么用？容易错在哪？`
                : '合上资料，开始讲：这个知识点是什么？解决什么问题？怎么用？容易错在哪？——就当对面坐着一个完全没学过的人。也可以点麦克风口述，或打开小黑板画图。'
            }
          />
          {showSketch ? <SketchPad /> : null}
        </div>

        {/* 费曼纪律：先合上资料讲，讲完再展开对照，所以默认折叠 */}
        {insight ? (
          <details className="feynman-canonical">
            <summary>标准笔记 · {insight.category}（讲完再展开对照）</summary>
            <div className="feynman-canonical-body">
              <p><b>一句话</b>{insight.surface}</p>
              <p><b>机制</b>{insight.mechanism}</p>
              <p><b>不懂会栽在哪</b>{insight.implication}</p>
              <p><b>类比 · {insight.analogyFrom}</b>{insight.analogy}</p>
            </div>
          </details>
        ) : null}

        <div className="journal-composer-actions">
          <button className="review-btn primary" type="submit" disabled={!canSubmit || grading}>
            {grading ? '评估中…' : '讲述完毕，请面试官评估'}
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
            {feedback || '面试官正在读你的讲解……'}
            {grading ? <span className="feynman-caret" /> : null}
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
            还没有练习记录。点「面试官出题」，写下你的第一段讲解——讲不清楚的地方就是还没学会的地方。
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
                  <summary>{record.score ? '查看面试官评语' : '未评估'}</summary>
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
