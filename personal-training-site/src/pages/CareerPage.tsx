import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ImageUp, ListPlus, Sparkles, Trash2, X } from 'lucide-react'
import { MarkdownContent } from '../components/MarkdownContent'
import { SectionCover } from '../components/SectionCover'
import { chatCompletionStream, loadAiConfig } from '../utils/aiChat'
import { extractQuestions, getLastOrganizedAt, inferQuestionCategory, isQuestionText, isReorganizationDue, loadInterviewQuestions, loadInterviewSources, mergeInterviewSource, rankInterviewQuestions, reorganizeInterviewQuestions, saveInterviewQuestions, saveInterviewSources, setLastOrganizedAt, sourceUrl, splitPoints, type InterviewQuestion, type InterviewSource } from '../utils/interviewBank'
import { openSiteSettings } from '../utils/settings'
import { lessons } from '../data/lessons'
import { platformLabels } from '../data/lessons/types'
import { algorithmMeta } from '../data/algorithmMeta'
import { CareerChrome } from '../components/CareerChrome'
import { CAREER_SECTION_IDS, type CareerModuleId, type CareerSectionId } from '../components/careerModules'
import { FeynmanSection } from './FeynmanPage'

// 识别 / 粘贴的文字按行拆成分点，逐点确认后再入题库
type RecognizedPoint = { id: string; text: string; include: boolean }

function parsePoints(raw: string): RecognizedPoint[] {
  return raw.split(/\r?\n/).flatMap(splitPoints)
    .map((text) => ({ id: crypto.randomUUID(), text, include: true }))
}

// 导入历史卡片：直接展示识别出的问题列表，原文收在底部
function SourceHistoryCard({ source, onSearch }: { source: InterviewSource; onSearch: (text: string) => void }) {
  const extracted = extractQuestions(source.text)
  return (
    <li className="career-source-card">
      <div className="career-source-head">
        <strong>{source.title}</strong>
        <span>{new Date(source.addedAt).toLocaleDateString('zh-CN')} · {extracted.length} 道问题</span>
        {source.url ? <a href={source.url} target="_blank" rel="noopener noreferrer">原帖 ↗</a> : null}
      </div>
      {extracted.length
        ? <ol className="career-source-questions">{extracted.map((text, index) => <li key={index}><button type="button" title="在题库中检索这道题" onClick={() => onSearch(text)}>{text}</button></li>)}</ol>
        : <p className="career-source-empty">未从中识别出问题，可点击下方原文查看识别质量。</p>}
      <details className="career-source-raw"><summary>查看原文</summary><pre>{source.text}</pre></details>
    </li>
  )
}

export function CareerPage() {
  const [questions, setQuestions] = useState(loadInterviewQuestions)
  const [sources, setSources] = useState(loadInterviewSources)
  const [lastOrganizedAt, setOrganizedAt] = useState(getLastOrganizedAt)
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [points, setPoints] = useState<RecognizedPoint[]>([])
  const [pasteOpen, setPasteOpen] = useState(false)
  const [pasteText, setPasteText] = useState('')
  const [notice, setNotice] = useState('')
  const [selected, setSelected] = useState<string | null>(null)
  const [answer, setAnswer] = useState('')
  const [working, setWorking] = useState(false)
  const [recognizing, setRecognizing] = useState(false)
  const [ocrProgress, setOcrProgress] = useState('')
  const [category, setCategory] = useState('全部')
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState<'hot' | 'new'>('hot')
  // 观澜讲义：检索 / 标签筛选 / 排序（lessons 本身按加工日期倒序，最早 = 反转）
  const [lessonQuery, setLessonQuery] = useState('')
  const [lessonTag, setLessonTag] = useState<string | null>(null)
  const [lessonSort, setLessonSort] = useState<'new' | 'old'>('new')
  const controller = useRef<AbortController | null>(null)
  const [activeSection, setActiveSection] = useState<CareerSectionId>('interview-bank')
  // 封面只在无深链时首次显示；一旦进入某个区块（#hash 深链、rail/封面卡片切换），直达内容不再回落到封面
  const [coverVisible, setCoverVisible] = useState(() => !(CAREER_SECTION_IDS as readonly string[]).includes(window.location.hash.slice(1)))

  // 模块改为点击进入：支持 #hash 深链（封面导语、外部分享）
  useEffect(() => {
    const apply = () => {
      const id = window.location.hash.slice(1)
      if ((CAREER_SECTION_IDS as readonly string[]).includes(id)) {
        setActiveSection(id as CareerSectionId)
        setCoverVisible(false)
      }
    }
    apply()
    window.addEventListener('hashchange', apply)
    return () => window.removeEventListener('hashchange', apply)
  }, [])

  const openSection = (id: CareerSectionId) => {
    setActiveSection(id)
    setCoverVisible(false)
    window.history.replaceState(null, '', `#${id}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // 左侧竖栏里给有内容的模块带上实时计数，一眼看到题库/讲义规模
  const railDesc: Partial<Record<CareerModuleId, string>> = {
    'interview-bank': questions.length ? `面经题库 · ${questions.length} 题` : undefined,
    'video-lessons': lessons.length ? `讲义库 · ${lessons.length} 篇` : undefined,
  }

  const recognizeImages = async (files: FileList | null) => {
    if (!files?.length) return
    const images = Array.from(files)
    if (images.length > 4 || images.some((file) => !file.type.startsWith('image/') || file.size > 8 * 1024 * 1024)) {
      setNotice('一次最多上传 4 张图片，每张不超过 8 MB。')
      return
    }
    setRecognizing(true)
    setNotice('')
    try {
      const { createWorker } = await import('tesseract.js')
      const worker = await createWorker(['chi_sim', 'eng'])
      try {
        const results: string[] = []
        for (const [index, file] of images.entries()) {
          setOcrProgress(`正在识别第 ${index + 1} / ${images.length} 张截图…`)
          const result = await worker.recognize(file)
          results.push(result.data.text.trim())
        }
        const recognized = results.filter(Boolean).join('\n')
        const parsed = parsePoints(recognized)
        if (!parsed.length) setNotice('没有识别出文字。可换一张清晰截图，或直接粘贴问题。')
        else {
          setPoints((previous) => [...previous, ...parsed])
          setNotice(`识别出 ${parsed.length} 行文字，已按行分点列出。逐点勾选、改错字后，再点“加入题库”。`)
        }
      } finally { await worker.terminate() }
    } catch (error) { setNotice(error instanceof Error ? `识别失败：${error.message}` : '识别失败，请直接粘贴问题。') }
    finally { setRecognizing(false); setOcrProgress('') }
  }

  const applyPaste = () => {
    const parsed = parsePoints(pasteText)
    if (!parsed.length) { setNotice('粘贴内容为空。'); return }
    setPoints((previous) => [...previous, ...parsed])
    setPasteText('')
    setPasteOpen(false)
    setNotice(`已解析 ${parsed.length} 行，逐点确认后加入题库。`)
  }

  const addQuestions = () => {
    const includedText = points.filter((point) => point.include).map((point) => point.text.trim()).filter(Boolean).join('\n')
    const safeUrl = sourceUrl(url)
    if (safeUrl === null) { setNotice('来源链接需要是 http 或 https 地址。'); return }
    const extracted = extractQuestions(includedText)
    if (!extracted.length) { setNotice('勾选的条目里没有识别到问题。以问号结尾，或以“如何 / 为什么 / 请”等开头。'); return }
    if (sources.some((source) => source.text.trim() === includedText && source.url === (safeUrl || ''))) {
      setNotice('这份内容已经导入过，未重复计入题目热度。')
      return
    }
    const source: InterviewSource = { id: crypto.randomUUID(), title: title.trim() || '面经笔记', url: safeUrl || '', text: includedText, addedAt: new Date().toISOString() }
    const next = mergeInterviewSource(questions, source)
    const incoming = next.length - questions.length
    try {
      saveInterviewSources([source, ...sources])
      saveInterviewQuestions(next)
      setSources([source, ...sources])
      setQuestions(next)
      setNotice(`已保存导入记录，新增 ${incoming} 道问题${extracted.length > incoming ? '；重复问题已合并来源' : ''}。`)
      setPoints([])
    } catch { setNotice('浏览器存储失败，请检查存储空间或隐私设置。') }
  }

  const reorganize = () => {
    try {
      const next = reorganizeInterviewQuestions(questions, sources)
      const date = new Date().toISOString()
      saveInterviewQuestions(next)
      setLastOrganizedAt(date)
      setQuestions(next)
      setOrganizedAt(date)
      setNotice(`已重新检查 ${sources.length} 条导入记录，更新题目标签与出现次数。`)
    } catch { setNotice('整理结果未能保存，请检查浏览器存储。') }
  }

  const removeQuestion = (id: string) => {
    const next = questions.filter((question) => question.id !== id)
    try { saveInterviewQuestions(next); setQuestions(next); if (selected === id) { setSelected(null); setAnswer('') } }
    catch { setNotice('删除未能保存，请检查浏览器存储。') }
  }

  const generateAnswer = async (question: InterviewQuestion) => {
    const config = loadAiConfig()
    if (!config.apiKey) { openSiteSettings(); setNotice('先在设置中配置 API Key，再生成参考答案。'); return }
    controller.current?.abort()
    const current = new AbortController()
    controller.current = current
    setSelected(question.id)
    setAnswer('')
    setNotice('')
    setWorking(true)
    try {
      const completed = await chatCompletionStream(config, [
        { role: 'system', content: '你是软件开发/算法岗位的校招面试教练。请给应届生一份可在面试现场口述、准确且有层次的中文参考答案。先用 30～60 秒给出“直接回答”，再写“原理与关键机制”“一个简短例子或代码思路”“常见追问与应答”“容易答错的边界”。算法题必须说明思路、时间与空间复杂度，并在有必要时说明边界用例；工程或项目题要区分通用知识和候选人自己的经历，绝不编造候选人的实习或项目事实。题意含糊时先声明假设；不确定时明确指出。答案是 AI 生成的练习参考，不是原帖作者或面试官的标准答案；不要引用未提供的原帖内容。' },
        { role: 'user', content: question.text },
      ], (delta) => setAnswer((text) => text + delta), current.signal)
      const next = questions.map((item) => item.id === question.id ? { ...item, answer: completed, answeredAt: new Date().toISOString(), askedCount: (item.askedCount || 0) + 1 } : item)
      saveInterviewQuestions(next)
      setQuestions(next)
    } catch (error) {
      if (!(error instanceof DOMException && error.name === 'AbortError')) setNotice(error instanceof Error ? error.message : '生成失败，请稍后重试。')
    } finally { if (controller.current === current) { setWorking(false); controller.current = null } }
  }

  const visibleQuestions = rankInterviewQuestions(questions, query, sort).filter((question) => category === '全部' || (question.category || inferQuestionCategory(question.text)) === category)

  // 观澜：出现频次最高的标签作为筛选候选；检索覆盖标题、摘要、作者与标签
  const lessonTags = useMemo(() => {
    const counts = new Map<string, number>()
    for (const lesson of lessons) for (const tag of lesson.tags) counts.set(tag, (counts.get(tag) || 0) + 1)
    return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10).map(([tag]) => tag)
  }, [])
  const visibleLessons = useMemo(() => {
    const keyword = lessonQuery.trim().toLowerCase()
    const matched = lessons.filter((lesson) => {
      if (lessonTag && !lesson.tags.includes(lessonTag)) return false
      if (!keyword) return true
      return [lesson.title, lesson.summary, lesson.source.author, ...lesson.tags].join(' ').toLowerCase().includes(keyword)
    })
    return lessonSort === 'new' ? matched : [...matched].reverse()
  }, [lessonQuery, lessonTag, lessonSort])

  return (
    <>
      {coverVisible ? (
        <SectionCover
          eyebrow="Career / 软件开发"
          title="攻玉"
          quote="「他山之石，可以攻玉。」——《诗经·小雅·鹤鸣》"
          intro="别人的面经、讲义和复盘，都是打磨自己的石头。选一个模块开始琢磨：算法、面经、讲义、费曼与复盘放在一起，逐块过。"
        >
          <div className="career-launcher" aria-label="攻玉模块入口">
            <Link className="career-launcher-card" to="/algorithm"><b>运筹</b><small>算法练习 · 间隔复习</small><span>{algorithmMeta.solved}/{algorithmMeta.total} 题</span></Link>
            <button type="button" className="career-launcher-card" onClick={() => openSection('interview-bank')}><b>问津</b><small>面经题库</small><span>{questions.length ? `${questions.length} 题` : '从一篇面经开始'}</span></button>
            <button type="button" className="career-launcher-card" onClick={() => openSection('video-lessons')}><b>观澜</b><small>视频与文章讲义</small><span>{lessons.length} 篇</span></button>
            <button type="button" className="career-launcher-card" onClick={() => openSection('feynman')}><b>解惑</b><small>费曼技巧</small><span>讲一个知识点</span></button>
            <button type="button" className="career-launcher-card" onClick={() => openSection('work-notes')}><b>省身</b><small>工作复盘</small><span>吾日三省</span></button>
          </div>
        </SectionCover>
      ) : null}
      <CareerChrome active={activeSection} onSectionChange={openSection} railDesc={railDesc}>

    {activeSection === 'interview-bank' ? <section className="career-section" id="interview-bank" aria-labelledby="interview-title">
      <div className="career-section-heading"><div><p className="eyebrow">面经题库 · 求职问路</p><h2 id="interview-title">问津</h2></div><p>上传面经截图或粘贴文字，按行分点确认后加入题库。保留来源链接以便回看；题目仅存此浏览器。</p></div>
      <div className="career-import">
        <label className="career-upload"><ImageUp size={22} aria-hidden="true" /><span>上传面经截图</span><small>PNG / JPG 等图片，最多 4 张，每张不超过 8 MB；在浏览器内识别文字</small><input type="file" accept="image/*" multiple disabled={recognizing} onChange={(event) => { void recognizeImages(event.target.files); event.target.value = '' }} /></label>
        {recognizing ? <p className="career-ocr-status" role="status">{ocrProgress || '正在载入中文识别模型…首次使用需下载模型。'}</p> : null}
        <label>来源标题<input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="例如：后端开发一面" maxLength={100} /></label>
        <label>原帖链接（可选）<input type="url" value={url} onChange={(event) => setUrl(event.target.value)} placeholder="https://www.xiaohongshu.com/..." /></label>
        <div className="career-import-text career-points">
          <div className="career-points-head">
            <span>识别与粘贴的分点{points.length ? `（${points.filter((point) => point.include).length}/${points.length} 已勾选）` : ''}</span>
            <button type="button" onClick={() => setPasteOpen((open) => !open)}><ListPlus size={15} aria-hidden="true" />粘贴文本</button>
          </div>
          {pasteOpen ? <div className="career-paste">
            <textarea value={pasteText} onChange={(event) => setPasteText(event.target.value)} placeholder={'每行一个问题或一段原文，解析后按行分点：\n什么是 TCP 三次握手？\n如何设计一个缓存系统？'} rows={4} />
            <div className="career-paste-actions"><button type="button" onClick={applyPaste}>解析为分点</button><button type="button" className="career-quiet" onClick={() => { setPasteOpen(false); setPasteText('') }}><X size={14} aria-hidden="true" />取消</button></div>
          </div> : null}
          {points.length
            ? <ul className="career-point-list">{points.map((point) => <li className="career-point" key={point.id}>
                <label className="career-point-include"><input type="checkbox" checked={point.include} onChange={(event) => setPoints((previous) => previous.map((item) => item.id === point.id ? { ...item, include: event.target.checked } : item))} /></label>
                <input value={point.text} onChange={(event) => setPoints((previous) => previous.map((item) => item.id === point.id ? { ...item, text: event.target.value } : item))} aria-label="分点内容" />
                <span className={isQuestionText(point.text.trim()) ? 'career-point-tag ok' : 'career-point-tag'}>{isQuestionText(point.text.trim()) ? '问题' : '说明'}</span>
                <button type="button" className="career-point-remove" aria-label="删除这条分点" onClick={() => setPoints((previous) => previous.filter((item) => item.id !== point.id))}><Trash2 size={14} aria-hidden="true" /></button>
              </li>)}</ul>
            : <p className="career-points-empty">上传截图或粘贴文本后，识别结果会按行分点显示在这里；也可以直接补充。每点单独勾选、编辑。</p>}
        </div>
        <div className="career-import-actions"><button type="button" onClick={addQuestions} disabled={recognizing}>整理并加入题库</button><span>只把勾选的条目计入题库；标为“说明”的行默认也会一起保存为原文。</span></div>
      </div>
      {notice ? <p className="career-notice" role="status">{notice}</p> : null}
      {sources.length ? <section className="career-history" aria-label="面经导入历史"><div className="career-history-heading"><div><h3>导入历史</h3><p>{sources.length} 条记录 · {lastOrganizedAt ? `上次整理：${new Date(lastOrganizedAt).toLocaleDateString('zh-CN')}` : '尚未定期整理'}{isReorganizationDue(lastOrganizedAt) ? ' · 建议重新整理' : ''}</p></div><button type="button" onClick={reorganize}>重新整理标签与热度</button></div><ul>{sources.map((source) => <SourceHistoryCard key={source.id} source={source} onSearch={(text) => { setQuery(text); setCategory('全部') }} />)}</ul></section> : null}
      {questions.length ? <div className="career-search-row"><label>检索题目、标签与答案<input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="例如：TCP、缓存、项目表达" /></label><label>排序<select value={sort} onChange={(event) => setSort(event.target.value as 'hot' | 'new')}><option value="hot">按题目热度</option><option value="new">按导入时间</option></select></label></div> : null}
      {questions.length ? <p className="career-ranking-note">题目热度依据已导入面经中的出现次数和你的练习次数；检索时优先显示题目与标签匹配的结果。</p> : null}
      {questions.length ? <div className="career-filters" aria-label="按主题筛选问题">{['全部', '算法与数据结构', '计算机基础', '工程与设计', '项目与表达', '综合问题'].map((item) => <button type="button" className={category === item ? 'active' : ''} onClick={() => setCategory(item)} key={item}>{item}</button>)}</div> : null}
      <div className="career-question-list">
        {visibleQuestions.map((question) => <article className="career-question" key={question.id}>
          <div className="career-question-top"><span>{question.category || inferQuestionCategory(question.text)} · {question.sourceTitle}</span><span>{question.sourceIds?.length || 1} 篇面经提及 · 练习 {question.askedCount || 0} 次</span>{question.sourceUrl ? <a href={question.sourceUrl} target="_blank" rel="noopener noreferrer">查看来源 ↗</a> : null}</div>
          <h3>{question.text}</h3>
          {question.tags?.length ? <div className="career-tags">{question.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div> : null}
          <div className="career-question-actions"><button type="button" onClick={() => generateAnswer(question)} disabled={working}><Sparkles size={16} aria-hidden="true" />{question.answer ? '重新生成答案' : '生成参考答案'}</button><button type="button" className="career-delete" onClick={() => removeQuestion(question.id)} aria-label={`删除问题：${question.text}`}><Trash2 size={16} aria-hidden="true" /></button></div>
          {selected === question.id ? <div className="career-answer"><b>AI 参考答案</b>{answer ? <MarkdownContent text={answer} streaming={working} /> : working ? <p>正在生成…</p> : null}{working ? <button type="button" onClick={() => controller.current?.abort()}>停止生成</button> : null}</div> : question.answer ? <details className="career-answer"><summary>查看已保存的 AI 参考答案{question.answeredAt ? ` · ${new Date(question.answeredAt).toLocaleDateString('zh-CN')}` : ''}</summary><MarkdownContent text={question.answer} /></details> : null}
        </article>)}
        {!visibleQuestions.length ? <p className="career-empty">{questions.length ? '没有匹配的问题，试试其他关键词或分类。' : '题库还没有问题。添加一篇面经中的提问，开始建立自己的复习清单。'}</p> : null}
      </div>
    </section> : null}
    {activeSection === 'video-lessons' ? <section className="career-section career-video-lessons" id="video-lessons" aria-labelledby="lessons-title">
      <div className="career-section-heading"><div><p className="eyebrow">视频与文章讲义</p><h2 id="lessons-title">观澜</h2><p className="career-quote">「观水有术，必观其澜。」——《孟子·尽心上》</p></div><p>看视频如观水，贵在取其波澜。把 B站/抖音 的技术视频与公众号的技术文章，经本地 Agent 深加工成图文讲义：核心结论、术语卡片、流程图、对比表与自测。每一篇都标注出处，可回溯原文。</p></div>
      <div className="career-search-row lesson-search-row">
        <label>检索讲义<input type="search" value={lessonQuery} onChange={(event) => setLessonQuery(event.target.value)} placeholder="标题、摘要、标签或作者" /></label>
        <label>排序<select value={lessonSort} onChange={(event) => setLessonSort(event.target.value as 'new' | 'old')} aria-label="讲义排序"><option value="new">最新加工</option><option value="old">最早加工</option></select></label>
      </div>
      <div className="career-filters" aria-label="按标签筛选讲义">
        <button type="button" className={lessonTag === null ? 'active' : ''} onClick={() => setLessonTag(null)}>全部</button>
        {lessonTags.map((tag) => <button type="button" className={lessonTag === tag ? 'active' : ''} key={tag} onClick={() => setLessonTag(lessonTag === tag ? null : tag)}>#{tag}</button>)}
      </div>
      <div className="lesson-list">
        {visibleLessons.map((lesson, index) => (
          <Link className="lesson-card" style={{ animationDelay: `${Math.min(index, 8) * 45}ms` }} to={`/career/lessons/${lesson.slug}`} key={lesson.slug}>
            <div className="lesson-card-top"><span className="lesson-card-platform">{platformLabels[lesson.source.platform]}</span><span>{lesson.source.author} · {lesson.date} · 约 {lesson.minutes} 分钟</span></div>
            <h3>{lesson.title}</h3>
            <p>{lesson.summary}</p>
            <div className="lesson-card-meta">{lesson.sections.length} 个章节 · {lesson.quiz.length} 道自测{lesson.keyTerms.length ? ` · ${lesson.keyTerms.length} 个术语` : ''}</div>
            <div className="lesson-card-tags">{lesson.tags.slice(0, 4).map((tag) => <span key={tag}>#{tag}</span>)}</div>
            <span className="lesson-card-more">进入课程 <ArrowUpRight size={15} aria-hidden="true" /></span>
          </Link>
        ))}
        {!visibleLessons.length ? <p className="career-empty">{lessons.length ? '没有匹配的讲义，试试其他关键词或标签。' : '还没有讲义。video2kb 转录深加工后会自动出现在这里。'}</p> : null}
      </div>
    </section> : null}
    {activeSection === 'feynman' ? <section className="career-section" id="feynman" aria-labelledby="feynman-title">
      <div className="career-section-heading"><div><p className="eyebrow">费曼技巧</p><h2 id="feynman-title">解惑</h2><p className="career-quote">「师者，所以传道受业解惑也。」——唐·韩愈《师说》</p></div><p>把自己讲明白，才算真的解惑：从资料库随机抽一个知识点，先用自己的话讲清楚，再由大模型流式给出结构化建议——评估时会自动检索站内其他板块（博客、算法题解、观澜讲义）的相关内容作参照。</p></div>
      <FeynmanSection />
    </section> : null}
    {activeSection === 'work-notes' ? <section className="career-section career-work-notes" id="work-notes" aria-labelledby="work-notes-title">
      <div className="career-section-heading"><div><p className="eyebrow">工作复盘 · 吾日三省</p><h2 id="work-notes-title">省身</h2><p className="career-quote">「吾日三省吾身。」——《论语·学而》</p></div><p>未来的工作内容可以按「背景 → 我的决策 → 结果 → 下次会怎么做」记录。先从已有的项目实践开始，不虚构任职经历。</p></div>
      <Link to="/projects">查看现有项目 <ArrowUpRight size={16} aria-hidden="true" /></Link>
    </section> : null}
      </CareerChrome>
    </>
  )
}
