import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { acmDrills, generatedAt, hot100, hot100Ids, hot100Solved, loadPracticeSpecs, practiceSlug } from './catalog'
import { download, draftKey, exportPractice, importPractice, manualReviews, readAttempts, readDrafts, reviewSlug } from './store'
import { loadReviewStore } from '../utils/reviewStore'
import { algorithmMeta } from '../data/algorithmMeta'
import type { Draft, PracticeAttempt, PracticeMode, PracticeSpec } from './types'
import './practice.css'

export function PracticeDashboard() {
  const [specs, setSpecs] = useState<PracticeSpec[]>([])
  const [drafts, setDrafts] = useState<Draft[]>([])
  const [attempts, setAttempts] = useState<PracticeAttempt[]>([])
  const [message, setMessage] = useState('')
  const [filter, setFilter] = useState('')
  const [mixed, setMixed] = useState<string[]>([])
  const [trainingMode, setTrainingMode] = useState<PracticeMode>('core')
  const [now] = useState(() => Date.now())
  const refresh = async () => {
    try { const [s,d,a] = await Promise.all([loadPracticeSpecs(),readDrafts(),readAttempts()]);setSpecs(s);setDrafts(d);setAttempts(a) }
    catch { setMessage('无法读取本机训练记录。题目仍可打开，训练代码请另行下载备份。') }
  }
  useEffect(() => { void Promise.resolve().then(refresh) }, [])
  const review = loadReviewStore()
  const manual = new Set(manualReviews())
  const latest = new Map<string,PracticeAttempt>()
  const latestByMode = new Map<string,PracticeAttempt>()
  for (const a of [...attempts].sort((a,b) => a.updatedAt.localeCompare(b.updatedAt))) {
    latestByMode.set(draftKey(a),a)
    if ((a.mode ?? 'core') === trainingMode) latest.set(a.id,a)
  }
  const scheduled = (id: string) => review[`${trainingMode === 'acm' ? 'acm:' : ''}${reviewSlug(id)}`]
  const titleFor = (id: string) => hot100.find((q) => q.id === id)?.title ?? acmDrills.find((q) => q.id === id)?.title ?? id
  const trainingUrl = (id: string,mode:PracticeMode = trainingMode) => `/algorithm/practice/${practiceSlug(id)}?mode=${mode}`
  const sorted = [...hot100].sort((a,b) => {
    const score = (id: string) => {
      const entry = scheduled(id)
      if (entry && Date.parse(entry.due) <= now) return 0
      if (entry && Date.parse(entry.due) > now) return 4
      if (manual.has(id) || latest.get(id)?.outcome && latest.get(id)?.outcome !== 'independent') return 1
      if (specs.find((s) => s.id === id)?.mistakes.length) return 2
      return latest.get(id)?.outcome === 'independent' ? 4 : 3
    }
    const diff = score(a.id)-score(b.id)
    if (diff) return diff
    return (scheduled(a.id)?.due ?? '').localeCompare(scheduled(b.id)?.due ?? '')
  })
  const today = sorted.filter((q) => { const entry = scheduled(q.id); return !entry || Date.parse(entry.due) <= now }).slice(0,5)
  const resumable = drafts.filter((d) => !d.finished && d.code !== (d.mode === 'acm' ? specs.find((s) => s.id === d.id)?.acm?.template : specs.find((s) => s.id === d.id)?.template) && (!latestByMode.get(draftKey(d)) || latestByMode.get(draftKey(d))!.updatedAt < d.updatedAt)).sort((a,b) => b.updatedAt.localeCompare(a.updatedAt)).slice(0,3)
  const failed = [...attempts].filter((a) => a.outcome !== 'independent' && !a.note.startsWith('重新练习前')).sort((a,b) => b.updatedAt.localeCompare(a.updatedAt)).slice(0,5)
  const frequencies = new Map<string,number>()
  for (const a of failed) for (const tag of a.tags) frequencies.set(tag,(frequencies.get(tag) ?? 0)+1)
  const rows = mixed.length ? mixed.map((id) => hot100.find((q) => q.id === id)!) : today
  return <section className="practice-dashboard">
    <header className="practice-header career-section-heading"><div><p className="eyebrow">算法练习 · 间隔复习</p><h1>运筹</h1><p className="career-quote">「运筹帷幄之中，决胜千里之外。」——《史记·高祖本纪》</p></div><div className="practice-header-side"><p>把做过的题，变成能独立写出来的代码。题单来自 Hot100 与 ACM 专项，题解复盘来自本地代码和注释；训练记录保存在当前浏览器。</p><Link className="practice-quick" to="/algorithm/review">快速回忆 →</Link></div></header>
    {message && <p role="status">{message}</p>}
    <div className="practice-overview"><span>官方 Hot100 <b>{hot100Solved}/100</b> 已有本地作答</span>{(['core','acm'] as PracticeMode[]).map((mode) => <span key={mode}>{mode === 'core' ? '核心代码' : 'ACM'} 独立完成 <b>{[...latestByMode.values()].filter((a) => hot100Ids.has(a.id) && (a.mode ?? 'core') === mode && a.outcome === 'independent').length}</b> 题</span>)}</div>
    <nav className="practice-mode-switch" aria-label="今日训练模式"><button aria-pressed={trainingMode === 'core'} onClick={() => setTrainingMode('core')}>核心代码训练</button><button aria-pressed={trainingMode === 'acm'} onClick={() => setTrainingMode('acm')}>ACM 完整程序训练</button><span>当前队列按{trainingMode === 'acm' ? ' ACM' : '核心代码'}模式的复习记录安排。</span></nav>
    {resumable.length > 0 && <article className="practice-panel"><h2>继续未完成训练</h2><div className="practice-button-row">{resumable.map((d) => <Link key={draftKey(d)} to={trainingUrl(d.id,d.mode ?? 'core')}>{titleFor(d.id)} · {d.mode === 'acm' ? 'ACM' : '核心代码'} · {Math.floor(d.elapsed/60)} 分钟</Link>)}</div></article>}
    <div className="practice-dashboard-grid"><article className="practice-panel"><div className="practice-panel-head"><h2>{mixed.length ? '本轮混合训练' : '今日训练 · 最多五题'}</h2><button onClick={() => {
      const ids = hot100.map((q) => q.id)
      for (let i=ids.length-1;i>0;i--) { const j=Math.floor(Math.random()*(i+1));[ids[i],ids[j]]=[ids[j],ids[i]] }
      setMixed(ids.slice(0,5))
    }}>混合抽题 / 模拟面试</button>{mixed.length > 0 && <button onClick={() => setMixed([])}>回到到期队列</button>}</div><p className="practice-muted">到期题优先，其次复发错误与未验证题。训练中默认隐藏题型和方法。</p>{rows.length ? rows.map((q,i) => <Link className="practice-training-row" key={q.id} to={trainingUrl(q.id)}><span>{i+1}</span><strong>{q.id}. {q.title}</strong><span>独立手撕 →</span></Link>) : <p>今日暂无到期题，可以混合抽题或自行选题。</p>}</article>
    <article className="practice-panel"><h2>最近暴露的问题</h2>{failed.length ? failed.map((a) => <div className="practice-training-row" key={a.key}><Link to={trainingUrl(a.id,a.mode ?? 'core')}>{titleFor(a.id)} · {a.mode === 'acm' ? 'ACM' : '核心代码'}</Link><span>{a.tags.join(' / ') || '待补充错误标签'}</span></div>) : <p className="practice-muted">完成一次手撕并记录卡点后，这里会显示你的真实错误。</p>}<div className="practice-tags">{[...frequencies].sort((a,b) => b[1]-a[1]).map(([tag,count]) => <span className="practice-badge" key={tag}>{tag} × {count}</span>)}</div></article></div>
    <details className="practice-panel practice-io-drills"><summary>ACM 输入输出专项 <span>8 关 · 每关 5 个测试</span></summary><div className="practice-disclosure-body"><div className="practice-panel-head"><h2>ACM 输入输出专项 · 8 关</h2><span>来自你的本地 acm_mode 练习 · 每关 5 个自动测试</span></div><p className="practice-muted">先练会读数据、分组、处理 EOF 与空行，再练网格和链表的完整输入输出。</p><div className="practice-problem-grid">{acmDrills.map((d,i) => <Link key={d.id} to={trainingUrl(d.id,'acm')}><span>{String(i+1).padStart(2,'0')}</span>{d.title}{latestByMode.get(`acm:${d.id}`)?.outcome === 'independent' ? ' ✓' : ''}</Link>)}</div></div></details>
    <details className="practice-panel practice-library"><summary>Hot100 题库 <span>100 题 · 搜索与自由选题</span></summary><div className="practice-disclosure-body"><div className="practice-panel-head"><h2>Hot100 全部训练题</h2><input aria-label="搜索 Hot100" placeholder="题号或题名" value={filter} onChange={(e) => setFilter(e.target.value)} /></div><div className="practice-problem-grid">{hot100.filter((q) => `${q.id} ${q.title}`.includes(filter)).map((q) => <Link key={q.id} to={trainingUrl(q.id)}><span>{q.id}</span>{q.title}{latest.get(q.id)?.outcome === 'independent' ? ' ✓' : ''}</Link>)}</div></div></details>
    <details className="practice-backup-panel"><summary>备份与资料信息</summary><div className="practice-backup"><button onClick={() => { void exportPractice().then((data) => download(JSON.stringify(data,null,2),'hot100-backup.json','application/json')).catch(() => setMessage('导出失败，请检查本机存储权限。')) }}>导出训练备份</button><label className="practice-file-label">导入训练备份<input type="file" accept="application/json,.json" onChange={(e) => { const file=e.target.files?.[0]; if (file) void file.text().then(importPractice).then(() => { setMessage('已合并导入训练记录。');void refresh() }).catch((error) => setMessage(`导入失败：${String(error)}`));e.target.value='' }} /></label><p>记录和代码保存在当前浏览器。题单核对：{new Date(generatedAt).toLocaleDateString('zh-CN')} · 资料快照：{new Date(algorithmMeta.generatedAt).toLocaleString('zh-CN')}。本地内容需手动同步。</p></div></details>
  </section>
}
