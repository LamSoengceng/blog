import { useState } from 'react'
import type { PracticeAttempt } from './types'

const printable = (value: unknown) => typeof value === 'string' ? value : JSON.stringify(value,null,2)
function CodeComparison({ before,after }: { before:string;after:string }) {
  const oldLines=before.split('\n'),newLines=after.split('\n')
  let prefix=0,suffix=0
  while (prefix<Math.min(oldLines.length,newLines.length) && oldLines[prefix]===newLines[prefix]) prefix++
  while (suffix<Math.min(oldLines.length,newLines.length)-prefix && oldLines[oldLines.length-1-suffix]===newLines[newLines.length-1-suffix]) suffix++
  return <div className="mistake-code-comparison">{[{ title:'失败代码',lines:oldLines },{ title:'通过测试的修正代码',lines:newLines }].map(({ title,lines }) => <div key={title}><h4>{title}</h4><pre>{lines.map((line,i) => <span className={i>=prefix && i<lines.length-suffix ? 'mistake-changed-line' : ''} key={i}>{String(i+1).padStart(3)} {line}{'\n'}</span>)}</pre></div>)}</div>
}
export function PersonalMistakes({ attempts,code,passed,onReveal,onSave }: { attempts:PracticeAttempt[];code:string;passed:boolean;onReveal:()=>void;onSave:(attempt:PracticeAttempt)=>Promise<void> }) {
  const records=attempts.filter((a) => a.mistake)
  const [selected,setSelected]=useState<string | null>(null)
  const [reason,setReason]=useState(''),[check,setCheck]=useState('')
  const [tags,setTags]=useState<string[]>([])
  const [answer,setAnswer]=useState(''),[revealed,setRevealed]=useState(false)
  const [saving,setSaving]=useState(false),[error,setError]=useState('')
  const current=records.find((a) => a.key===selected)
  if (!records.length) return null
  const open=(a:PracticeAttempt) => { setSelected(a.key);setReason(a.mistake!.reason);setCheck(a.mistake!.check);setTags(a.tags);setAnswer('');setRevealed(false);setError('') }
  const confirmed=records.filter((a) => a.mistake?.confirmed)
  return <article className="practice-panel personal-mistakes"><div className="practice-panel-head"><h2>我的错误复习</h2><span>{confirmed.length} 张已确认 · {records.length-confirmed.length} 次待复盘</span></div>
    {!current ? <div className="practice-button-row">{confirmed.length>0 && <button onClick={() => open(confirmed[0])}>先做旧错自检</button>}<button onClick={() => open(records[0])}>记住这次错误</button><details><summary>全部失败记录</summary>{records.map((a) => <button key={a.key} onClick={() => open(a)}>{new Date(a.updatedAt).toLocaleString('zh-CN')} · {a.mistake?.confirmed ? '已确认' : '待复盘'}</button>)}</details></div> : <>
      <button onClick={() => setSelected(null)}>收起错误卡</button>
      {current.mistake?.confirmed && !revealed ? <><p><b>先自检：</b>{current.mistake.check || '这道题上次错在哪里？写完后该检查什么？'}</p><textarea aria-label="旧错自检回答" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="先写下你的判断，再看上次的错误…" /><button onClick={() => { onReveal();setRevealed(true) }}>查看上次错误（计为提示）</button></> : <>
        <p className="practice-muted">失败代码与测试输出为自动保留的事实；原因、自检问题由你确认，不自动推断。</p>
        <details open><summary>失败现场 · {new Date(current.updatedAt).toLocaleString('zh-CN')}</summary>{current.result?.error && <pre>{current.result.error}</pre>}{current.result?.cases.filter((c) => !c.passed).map((c,i) => <details key={i} open={i===0}><summary>{c.name}</summary><pre>输入：{printable(c.input)}{'\n'}预期：{printable(c.expected)}{'\n'}实际：{printable(c.actual) ?? '无返回值'}{c.error ? `\n异常位置与信息：\n${c.error}` : ''}{c.stderr ? `\n标准错误：\n${c.stderr}` : ''}</pre></details>)}<pre>{current.code.split('\n').map((line,i) => `${i+1}  ${line}`).join('\n')}</pre></details>
        <label>我确认的错误原因<textarea value={reason} onChange={(e) => setReason(e.target.value)} placeholder="例如：只枚举字符中心，漏掉偶数长度回文。" /></label><label>下次的自检问题<textarea value={check} onChange={(e) => setCheck(e.target.value)} placeholder="例如：奇数和偶数两类中心都处理了吗？" /></label>
        <fieldset className="practice-tags"><legend>错误标签（可选）</legend>{['方法识别','边界条件','初始化','状态更新','输入解析','EOF / 空行','输出格式','复杂度'].map((tag) => <label key={tag}><input type="checkbox" checked={tags.includes(tag)} onChange={() => setTags(tags.includes(tag) ? tags.filter((t) => t!==tag) : [...tags,tag])} />{tag}</label>)}</fieldset>
        {(current.mistake?.correctedCode || passed) && <details><summary>修改前后对比（高亮变化范围）</summary><CodeComparison before={current.code} after={passed ? code : current.mistake!.correctedCode!} /></details>}
        <button disabled={saving || !reason.trim() || !check.trim()} onClick={() => { setSaving(true);setError('');void onSave({ ...current,tags,mistake:{ reason:reason.trim(),check:check.trim(),confirmed:true,correctedCode:passed ? code : current.mistake?.correctedCode } }).then(() => setSelected(null)).catch(() => setError('错误卡保存失败，请重试或下载代码备份。')).finally(() => setSaving(false)) }}>{saving ? '保存中…' : '确认错误卡并加入复习'}</button>
        {passed && <p className="practice-muted">保存时一并保留当前通过本站测试的修正代码。</p>}
      </>}{error && <p role="alert">{error}</p>}
    </>}
  </article>
}
