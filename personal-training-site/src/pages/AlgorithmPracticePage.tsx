import { useEffect, useRef, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import CodeMirror from '@uiw/react-codemirror'
import { python } from '@codemirror/lang-python'
import { EditorView } from '@codemirror/view'
import { loadPracticeSpecs, practiceSlug } from '../practice/catalog'
import { runPython } from '../practice/runner'
import { addManualReview, download, independentAllowed, readAttempts, readDraft, scheduleAttempt, writeAttempt, writeDraft } from '../practice/store'
import { PersonalMistakes } from '../practice/PersonalMistakes'
import { MistakeCards } from '../practice/MistakeCards'
import { MarkdownContent } from '../components/MarkdownContent'
import type { Draft, Outcome, PracticeAttempt, PracticeMode, PracticeSpec, RunResult, TestCase } from '../practice/types'
import '../practice/practice.css'

const outcomeLabels: Record<Outcome, string> = { 'no-idea': '未想出方法', stuck: '实现卡住', failed: '测试失败', assisted: '提示后完成', independent: '独立完成' }
const tags = ['方法识别','初始化','边界条件','二分区间','链表连接','递归返回值','回溯撤销','DP 转移','复杂度','输入解析','EOF / 空行','输出格式']
const formatTime = (seconds: number) => `${Math.floor(seconds / 60).toString().padStart(2,'0')}:${(seconds % 60).toString().padStart(2,'0')}`
const timestamp = () => new Date().toISOString()
export function AlgorithmPracticePage() {
  const { problemSlug } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const [specs, setSpecs] = useState<PracticeSpec[] | null>(null)
  const [loadError, setLoadError] = useState('')
  useEffect(() => { void loadPracticeSpecs().then(setSpecs).catch(() => setLoadError('训练题库加载失败，请刷新重试。')) }, [])
  if (loadError) return <p role="alert">{loadError}</p>
  if (!specs) return <p role="status">正在加载 Hot100 训练题库…</p>
  const spec = specs.find((s) => s.slug === problemSlug)
  const mode: PracticeMode = spec?.acmOnly || searchParams.get('mode') === 'acm' ? 'acm' : 'core'
  return spec ? <PracticeSession key={`${spec.id}:${mode}`} spec={spec} mode={mode} switchMode={(next) => { const params = new URLSearchParams(searchParams);params.set('mode',next);setSearchParams(params,{ replace:true }) }} /> : <section><h1>未找到训练题目</h1><Link to="/algorithm">返回算法训练</Link></section>
}

function PracticeSession({ spec,mode,switchMode }: { spec: PracticeSpec;mode:PracticeMode;switchMode:(mode:PracticeMode)=>void }) {
  const isAcm = mode === 'acm'
  const template = isAcm ? spec.acm!.template : spec.template
  const suite = isAcm ? spec.acm!.tests : spec.tests
  const reference = isAcm ? spec.acm!.reference : spec.reference
  const [draft, setDraft] = useState<Draft>(() => ({ id: spec.id, mode,code: template, elapsed: 0, hint: 0, updatedAt: new Date().toISOString() }))
  const draftRef = useRef(draft)
  const [loaded, setLoaded] = useState(false)
  const [storageError, setStorageError] = useState('')
  const [message, setMessage] = useState('')
  const [running, setRunning] = useState(false)
  const [phase, setPhase] = useState('')
  const [error, setError] = useState('')
  const [result, setResult] = useState<RunResult | null>(null)
  const [testedCode, setTestedCode] = useState<string | null>(null)
  const [fullTestPassed, setFullTestPassed] = useState(false)
  const [custom, setCustom] = useState(false)
  const [input, setInput] = useState(isAcm ? suite[0].stdin! : JSON.stringify(suite[0].args))
  const [expected, setExpected] = useState(isAcm ? suite[0].stdout! : JSON.stringify(suite[0].expected))
  const [activeTab, setActiveTab] = useState('题目')
  const [paused, setPaused] = useState(false)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [note, setNote] = useState('')
  const [explanation, setExplanation] = useState('未检验')
  const [attempts, setAttempts] = useState<PracticeAttempt[]>([])
  const [recording, setRecording] = useState(false)
  const runRef = useRef<ReturnType<typeof runPython> | null>(null)
  const alive = useRef(true)
  const loadedRef = useRef(false)
  useEffect(() => {
    alive.current = true
    void Promise.all([readDraft(spec.id,mode),readAttempts()]).then(([saved,history]) => {
      if (!alive.current) return
      if (saved) { draftRef.current = saved; setDraft(saved);setPaused(Boolean(saved.finished)) }
      setAttempts(history.filter((a) => a.id === spec.id && (a.mode ?? 'core') === mode).sort((a,b) => b.updatedAt.localeCompare(a.updatedAt)))
    }).catch(() => { if (alive.current) setStorageError('本机存储不可用；请下载代码以免丢失。') }).finally(() => { if (alive.current) { loadedRef.current = true;setLoaded(true) } })
    return () => { alive.current = false; runRef.current?.stop() }
  }, [spec.id,mode])
  const update = (patch: Partial<Draft>) => {
    const next = { ...draftRef.current, ...patch, updatedAt: new Date().toISOString() }
    draftRef.current = next; setDraft(next)
  }
  useEffect(() => {
    if (!loaded) return
    const timer = setTimeout(() => { void writeDraft(draft).catch(() => { if (alive.current) setStorageError('保存失败；请下载代码备份。') }) }, 300)
    return () => clearTimeout(timer)
  }, [draft, loaded])
  useEffect(() => {
    if (!loaded || paused) return
    const timer = setInterval(() => { if (document.visibilityState === 'visible') update({ elapsed: draftRef.current.elapsed + 1 }) }, 1000)
    return () => clearInterval(timer)
  }, [loaded, paused])
  // Flush on navigation; the ref always holds the newest editor content.
  useEffect(() => () => { if (loadedRef.current) void writeDraft(draftRef.current).catch(() => {}) }, [])
  const reveal = (level: number) => { update({ hint: Math.max(draftRef.current.hint, level) }); setMessage('本轮已记录提示使用；重新练习可开始新的独立作答。') }
  const execute = async () => {
    if (running || !loaded) return
    setError(''); setResult(null); setTestedCode(null); setFullTestPassed(false)
    let tests: TestCase[] = suite
    try {
      if (custom) {
        if (isAcm) tests = [{ name:'自定义标准输入',args:[],expected,stdin:input,stdout:expected,custom:true }]
        else {
          const args: unknown = JSON.parse(input)
          if (!Array.isArray(args)) throw new Error('参数必须是 JSON 数组。')
          tests = [{ name: '自定义用例', args, expected: JSON.parse(expected) }]
        }
      }
    } catch (e) { setError(`输入格式错误：${String(e)}`); return }
    setActiveTab('结果'); setRunning(true); setPhase('首次运行将加载本地 Python 环境…')
    const code = draftRef.current.code
    try {
      const task = runPython(spec,code,tests,() => setPhase('Python 已就绪，正在运行测试…'),mode)
      runRef.current = task
      const output = await task.promise
      if (!alive.current) return
      setResult(output); setTestedCode(code)
      if (output.error || output.cases.some((c) => !c.passed)) {
        const failure: PracticeAttempt = { ...draftRef.current, code, key: crypto.randomUUID(), updatedAt: timestamp(), outcome: 'failed', tags: [], explanation: '未检验', result: output, note: '自动保留的失败现场', mistake: { reason: '', check: '', confirmed: false } }
        try {
          await writeAttempt(failure)
          if (alive.current) setAttempts((items) => [failure,...items])
        } catch { if (alive.current) setStorageError('失败现场保存失败，请下载代码备份。') }
      }
      setFullTestPassed(!custom && !output.error && output.cases.length === suite.length && output.cases.every((c) => c.passed))
    } catch (e) { if (alive.current) setError(String(e instanceof Error ? e.message : e)) }
    finally { if (alive.current) { setRunning(false); setPhase(''); runRef.current = null } }
  }
  const allowed = independentAllowed(draft,testedCode,fullTestPassed)
  const finish = async (outcome: Outcome) => {
    if (recording || draftRef.current.finished || (outcome === 'independent' && !allowed)) return
    setRecording(true)
    const attempt: PracticeAttempt = { ...draftRef.current, key: crypto.randomUUID(), updatedAt: timestamp(), outcome, tags: selectedTags, explanation, result, note }
    try {
      await writeAttempt(attempt); scheduleAttempt(attempt)
      update({ finished: true })
      setAttempts((items) => [attempt,...items]); setPaused(true)
      setMessage(`已记录：${outcomeLabels[outcome]}。${outcome === 'independent' ? '已更新间隔复习。' : '明天安排再次独立重写。'}`)
    } catch { setStorageError('记录或调度保存失败，请导出代码并重试。') }
    finally { setRecording(false) }
  }
  const restart = async () => {
    runRef.current?.stop()
    const current = draftRef.current
    try {
      await writeAttempt({ ...current, key: crypto.randomUUID(), outcome: 'stuck', tags: selectedTags, explanation, result, note: note || '重新练习前自动保留的草稿' })
      const next = { id: spec.id,mode,code: template, elapsed: 0, hint: 0, updatedAt: new Date().toISOString() }
      draftRef.current = next; setDraft(next); await writeDraft(next)
      setResult(null);setTestedCode(null);setFullTestPassed(false);setPaused(false);setMessage('已保留上轮作答，开始新的独立练习。');setNote('');setSelectedTags([]);setExplanation('未检验');setError('');setCustom(false);setActiveTab('代码')
      setAttempts((await readAttempts()).filter((a) => a.id === spec.id && (a.mode ?? 'core') === mode).sort((a,b) => b.updatedAt.localeCompare(a.updatedAt)))
    } catch { setStorageError('无法保存上轮作答，未清空当前代码。') }
  }
  return <section className="practice-page">
    <Link className="back-link" to="/algorithm">← 返回算法训练</Link>
    <header className="practice-header"><div><p className="eyebrow">{spec.acmOnly ? 'ACM / 输入输出专项' : 'HOT100 / 手撕训练'}</p><h1>{spec.acmOnly ? spec.title : `${spec.id}. ${spec.title}`}</h1></div><div className="practice-clock"><strong>{formatTime(draft.elapsed)}</strong><button onClick={() => setPaused(!paused)}>{paused ? '继续计时' : '暂停'}</button></div></header>
    <nav className="practice-mode-switch" aria-label="作答模式"><button aria-pressed={!isAcm} disabled={running || Boolean(spec.acmOnly)} onClick={() => switchMode('core')}>核心代码模式</button><button aria-pressed={isAcm} disabled={running || !spec.acm} onClick={() => switchMode('acm')}>ACM 模式</button><span>{isAcm ? '完整程序 · 标准输入 → 标准输出 · 自己导入模块、构造结构' : '只实现函数 / 类 · 平台构造参数并校验返回值'}</span></nav>
    <details className="practice-mode-help"><summary>模式说明</summary><p className="practice-muted">{isAcm ? '完整程序：自己导入模块、读取标准输入并打印答案。' : '核心代码：只实现函数或类，由平台构造参数并校验返回值。'}两种模式的代码、计时、提示和历史分别保存；切换后需要重新运行测试。Python 在本机浏览器执行。</p></details>
    {storageError && <p role="alert" className="practice-alert">{storageError} <button onClick={() => download(draft.code,`${spec.id}-${mode}.py`)}>下载代码</button></p>}
    {message && <p role="status" className="practice-message">{message}</p>}
    <nav className="practice-tabs" aria-label="训练区域">{['题目','代码','结果'].map((tab) => <button key={tab} aria-pressed={tab === activeTab} onClick={() => setActiveTab(tab)}>{tab}</button>)}</nav>
    <div className="practice-layout">
      <aside className={`practice-question ${activeTab === '题目' ? 'mobile-active' : ''}`}>
        <PersonalMistakes attempts={attempts} code={draft.code} passed={Boolean(fullTestPassed && testedCode === draft.code)} onReveal={() => reveal(2)} onSave={async (attempt) => { await writeAttempt(attempt);scheduleAttempt(attempt);setAttempts((items) => items.map((a) => a.key === attempt.key ? attempt : a)) }} />
        <article className="practice-panel"><h2>题目与输入</h2>{spec.statement ? <MarkdownContent text={spec.statement} /> : <><p>本地快照暂无完整题面，请打开原题阅读；代码与测试仍可在本站运行。</p><p>调用：<code>{spec.method}({spec.parameters.join(', ')})</code></p></>}
          {spec.leetcodeSlug && <a href={`https://leetcode.cn/problems/${spec.leetcodeSlug}/`} target="_blank" rel="noreferrer">打开 LeetCode 原题与提交 ↗</a>}
          {isAcm ? <div className="practice-acm-contract"><h3>本站 ACM 输入格式</h3><p>{spec.acmOnly ? '本题来自本地输入输出专项，直接按以下标准输入输出作答。' : '原题采用函数接口；下列是本站的完整程序训练约定，不是 LeetCode 官方 stdin 格式。'}</p><pre>{spec.acm!.inputFormat}</pre><h3>输出格式</h3><p>{spec.acm!.outputFormat}</p><p>程序只打印答案，不要输出“请输入”等提示语。每个测试都会获得独立的标准输入。</p><h3>样例输入</h3><pre>{suite[0].stdin || '（空输入）'}</pre><h3>样例输出</h3><pre>{suite[0].stdout || '（不输出内容）'}</pre></div> : <details><summary>输入约定与本站样例</summary><p>自定义输入填写位置参数的 JSON 数组。链表为值数组，树为层序数组（null 表示空位）。环链表为 [值数组,入口下标]；相交链表为 [前缀A,前缀B,共享尾部]；LCA 使用层序数组中的节点下标；随机链表为 [[值,random下标],…]。设计题为 [操作名数组,参数数组]。</p><p>最长回文的预期值填写最长长度；平衡 BST 填 true；环入口填下标或 null；相交链表填 true，运行器校验身份；LCA 填节点下标。</p><pre>{JSON.stringify(spec.tests[0],null,2)}</pre></details>}
        </article>
        <details className="practice-panel practice-hints" open={draft.hint > 0}><summary>提示与旧错 <span>已用 {draft.hint}/4 层 · 展开不会使用提示</span></summary><div className="practice-disclosure-body"><p className="practice-muted">提示使用会计入本轮记录。当前第 {draft.hint} 层 / 4 层。方法卡为整理补充，原始本地笔记另列来源。</p>
          <div className="practice-button-row">{['方向','关键定义','代码骨架','完整题解'].map((label,i) => <button key={label} disabled={!loaded} onClick={() => reveal(i+1)}>{i+1}. {label}</button>)}</div>
          {draft.hint >= 1 && <p><b>识别与选择：</b>{spec.recall.signal}<br />{spec.recall.choice}</p>}
          {draft.hint >= 2 && <p><b>关键定义：</b>{spec.recall.invariant}</p>}
          {draft.hint >= 3 && <p><b>实现骨架：</b>{spec.recall.skeleton}</p>}
          {draft.hint >= 4 && <><p>{isAcm ? '整理补充：标准输入输出适配 + 参考算法' : spec.referenceSource === 'local' ? '本地参考实现' : '整理补充参考实现'} · {spec.recall.complexity}</p><pre>{reference}</pre>{spec.solutions.map((s,i) => <details key={i}><summary>{s.name}</summary><pre>{s.code}</pre></details>)}</>}
          <button disabled={!loaded} onClick={() => reveal(2)}>查看个人错误与易混题（计为提示）</button>
          {draft.hint >= 2 && <><MistakeCards cards={spec.mistakes} />{spec.related.map((r) => <p key={r.id}><Link to={`/algorithm/practice/${practiceSlug(r.id)}?mode=${mode}`}>对照第 {r.id} 题</Link>：{r.distinction}</p>)}</>}
        </div></details>
      </aside>
      <div className="practice-workspace">
        <article className={`practice-panel practice-editor ${activeTab === '代码' ? 'mobile-active' : ''}`} onKeyDown={(event) => { if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) { event.preventDefault();void execute() } }}><div className="practice-panel-head"><h2>{isAcm ? 'Python 3 完整程序' : 'Python 3 作答'}</h2><span>{loaded ? '自动保存至本机 · Ctrl+Enter 运行' : '正在恢复草稿…'}</span></div>
          <CodeMirror theme="dark" value={draft.code} extensions={[python(),EditorView.lineWrapping]} minHeight="400px" editable={loaded && !running} onChange={(code) => update({ code })} aria-label="Python 代码编辑器" />
          <div className="practice-button-row"><button className="primary" disabled={running || !loaded} onClick={() => void execute()}>{running ? '运行中…' : custom ? '运行自定义用例' : '运行本站测试'}</button>{running && <button onClick={() => runRef.current?.stop()}>停止运行</button>}<details className="practice-more"><summary>更多操作</summary><div><button onClick={() => download(draft.code,`${spec.id}-${mode}.py`)}>下载代码</button><button disabled={!loaded || running} onClick={() => void restart()}>重新练习</button></div></details></div>
          <label><input type="checkbox" checked={custom} disabled={running} onChange={(e) => setCustom(e.target.checked)} /> 自定义输入</label>
          {custom && <div className="practice-custom"><label>{isAcm ? '标准输入 stdin（原始文本，支持多行）' : '参数 JSON'}<textarea value={input} onChange={(e) => setInput(e.target.value)} /></label><label>{isAcm ? '预期标准输出 stdout（原始文本）' : '预期结果 JSON'}<textarea value={expected} onChange={(e) => setExpected(e.target.value)} /></label><p>自定义用例通过不计为通过本站完整测试。</p></div>}
        </article>
        <article className={`practice-panel practice-results ${activeTab === '结果' ? 'mobile-active' : ''}`} aria-live="polite"><h2>运行结果</h2>{phase && <p role="status">{phase}</p>}{running && <button onClick={() => runRef.current?.stop()}>停止当前执行</button>}{error && <p role="alert" className="practice-alert">{error}</p>}
          {!running && !result && !error && <p className="practice-muted">写完后运行。通过本站测试不等同于通过 LeetCode 判题。</p>}
          {result && <><p className="practice-result-summary">{result.error ? '语法错误' : `通过${custom ? '自定义用例' : '本站测试'} ${result.cases.filter((c) => c.passed).length}/${result.cases.length}`}</p>{isAcm && <p className="practice-muted">当前为 ACM 标准输入输出校验。</p>}{testedCode !== draft.code && <p className="practice-alert">代码已修改，请重新运行验证。</p>}{result.error && <pre>{result.error}</pre>}{result.cases.map((c,i) => <details key={i} open={!c.passed}><summary>{c.passed ? '✓' : '✗'} {c.name}</summary>{isAcm ? <div className="practice-stdio-result"><h4>标准输入 stdin</h4><pre>{String(c.input) || '（空输入）'}</pre><h4>预期输出</h4><pre>{String(c.expected) || '（不输出内容）'}</pre><h4>实际输出</h4><pre>{String(c.actual ?? '') || '（未输出）'}</pre>{c.error && <pre>{c.error}</pre>}{c.stderr && <><h4>标准错误 stderr（不参与答案比较）</h4><pre>{c.stderr}</pre></>}</div> : <pre>输入：{JSON.stringify(c.input)}{'\n'}预期：{JSON.stringify(c.expected)}{'\n'}实际：{JSON.stringify(c.actual)}{c.error ? `\n${c.error}` : ''}</pre>}</details>)}{result.stdout && <details><summary>标准输出</summary><pre>{result.stdout}</pre></details>}</>}
        </article>
        <article className={`practice-panel practice-recap ${activeTab === '结果' ? 'mobile-active' : ''}`}><details className="practice-recap-form"><summary>本轮复盘 <span>记录卡点、评价与复习安排</span></summary><div className="practice-disclosure-body"><div className="practice-tags">{tags.map((tag) => <label key={tag}><input type="checkbox" checked={selectedTags.includes(tag)} onChange={() => setSelectedTags(selectedTags.includes(tag) ? selectedTags.filter((t) => t !== tag) : [...selectedTags,tag])} />{tag}</label>)}</div><label>解释能力（单独记录）<select value={explanation} onChange={(e) => setExplanation(e.target.value)}>{['未检验','能解释方法','能说明不变量与复杂度','解释仍卡住'].map((v) => <option key={v}>{v}</option>)}</select></label><label>这次错在哪？下次怎样自检？<textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="写下错误写法、反例、原因和修正…" /></label></div></details>
          <div className="practice-button-row">{(Object.keys(outcomeLabels) as Outcome[]).map((outcome) => <button key={outcome} disabled={!loaded || running || recording || draft.finished || (outcome === 'independent' && !allowed)} onClick={() => void finish(outcome)}>{outcomeLabels[outcome]}</button>)}</div><p className="practice-muted">{draft.finished ? '本轮已归档。点击“重新练习”开始下一轮，避免重复延长复习间隔。' : '独立完成须本轮未用提示、当前代码通过全部本站测试，并由你点击确认。'}</p><button onClick={() => { try { addManualReview(spec.id);setMessage('已加入复习池。') } catch { setStorageError('无法保存复习标记。') } }}>手动加入复习</button>
          {attempts.length > 0 && <details><summary>{isAcm ? 'ACM' : '核心代码'}历史作答 · {attempts.length} 次</summary>{attempts.map((a) => <details key={a.key}><summary>{new Date(a.updatedAt).toLocaleString('zh-CN')} · {outcomeLabels[a.outcome]} · {formatTime(a.elapsed)} · 提示 {a.hint}</summary><p>{a.tags.join(' / ')} · {a.explanation}</p><p>{a.note}</p><pre>{a.code}</pre></details>)}</details>}
        </article>
      </div>
    </div>
    <details className="practice-source"><summary>来源与同步信息</summary><p className="practice-muted">题单快照与本地源文件按同步时内容生成，不会实时监视本地文件。{spec.sourcePath} · {spec.sourceUpdatedAt ? new Date(spec.sourceUpdatedAt).toLocaleString('zh-CN') : '补充参考实现'}{spec.needsRecheck ? ' · 源文件已变化，回忆卡待核对' : ''}</p></details>
  </section>
}
