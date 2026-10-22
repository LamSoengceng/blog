import 'fake-indexeddb/auto'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { addManualReview, exportPractice, importPractice, independentAllowed, manualReviews, readAttempts, readDraft, scheduleAttempt, writeAttempt, writeDraft } from './store'
import type { Draft, PracticeAttempt } from './types'

const memory = new Map<string,string>()
const storage = { getItem: (k: string) => memory.get(k) ?? null, setItem: (k: string,v: string) => { memory.set(k,v) } }
vi.stubGlobal('localStorage',storage)
vi.stubGlobal('window',{ localStorage: storage })
const draft: Draft = { id: '1', code: 'pass', elapsed: 12, hint: 0, updatedAt: '2026-10-22T10:00:00.000Z' }
const attempt = (outcome: PracticeAttempt['outcome']): PracticeAttempt => ({ ...draft, key: outcome, outcome, tags: ['边界条件'], explanation: '未检验', result: null, note: '测试复盘' })
beforeEach(() => { memory.clear() })
describe('训练记录',() => {
  it('草稿和历史分别存入 IndexedDB，后续草稿不覆盖历史',async () => {
    await writeDraft(draft);await writeAttempt(attempt('stuck'));await writeDraft({ ...draft,code:'changed' })
    expect((await readDraft('1'))?.code).toBe('changed')
    expect((await readAttempts()).find((a) => a.key==='stuck')?.code).toBe('pass')
  })
  it('提示、旧代码结果、自定义用例不能获得独立完成资格',() => {
    expect(independentAllowed(draft,'pass',true)).toBe(true)
    expect(independentAllowed({ ...draft,hint:1 },'pass',true)).toBe(false)
    expect(independentAllowed(draft,'older',true)).toBe(false)
    expect(independentAllowed(draft,'pass',false)).toBe(false)
  })
  it('同题的两种模式使用不同草稿键，旧草稿默认仍为核心代码模式',async () => {
    await writeDraft({ ...draft,code:'core draft',hint:0 })
    await writeDraft({ ...draft,mode:'acm',code:'acm draft',hint:2,elapsed:50 })
    expect((await readDraft('1'))?.code).toBe('core draft')
    expect((await readDraft('1','acm'))?.code).toBe('acm draft')
    expect((await readDraft('1','acm'))?.hint).toBe(2)
    const backup=await exportPractice()
    expect(backup.drafts.filter((d) => d.id==='1')).toHaveLength(2)
    await importPractice(JSON.stringify(backup))
    expect((await readDraft('1'))?.hint).toBe(0)
  })
  it('ACM 调度不修改同题的核心代码间隔，支持专项题备份',async () => {
    scheduleAttempt(attempt('independent'))
    const core=JSON.parse(memory.get('algorithm-review-v1')!)
    scheduleAttempt({ ...attempt('assisted'),mode:'acm' })
    const both=JSON.parse(memory.get('algorithm-review-v1')!)
    expect(Object.keys(both).some((k) => k.startsWith('acm:'))).toBe(true)
    for (const key of Object.keys(core))expect(both[key]).toEqual(core[key])
    await writeDraft({ ...draft,id:'io-eof',mode:'acm',code:'print(1)' })
    await importPractice(JSON.stringify(await exportPractice()))
    expect((await readDraft('io-eof','acm'))?.code).toBe('print(1)')
  })
  it('非独立完成安排次日重写，解释成绩不会延长间隔',() => {
    scheduleAttempt(attempt('assisted'))
    const records = JSON.parse(memory.get('algorithm-review-v1')!)
    const record = Object.values(records)[0] as { intervalDays: number; status: string }
    expect(record.intervalDays).toBe(1);expect(record.status).toBe('again');expect(manualReviews()).toContain('1')
  })
  it('独立完成沿用现有调度并保留其他旧记录',() => {
    memory.set('algorithm-review-v1',JSON.stringify({ unrelated:{ status:'known', at:draft.updatedAt, repetitions:2,easeFactor:2.5,intervalDays:6,due:draft.updatedAt } }))
    scheduleAttempt(attempt('independent'))
    const records=JSON.parse(memory.get('algorithm-review-v1')!)
    expect(records.unrelated.repetitions).toBe(2)
    expect(Object.values(records).some((r) => (r as { repetitions:number }).repetitions===1)).toBe(true)
  })
  it('导出导入可往返合并，较老备份不覆盖较新草稿',async () => {
    await writeDraft(draft);addManualReview('1')
    const backup=await exportPractice()
    await writeDraft({ ...draft,code:'newer',updatedAt:'2026-10-23T10:00:00.000Z' })
    await importPractice(JSON.stringify(backup))
    expect((await readDraft('1'))?.code).toBe('newer')
    expect(manualReviews()).toEqual(['1'])
  })
  it('拒绝无效版本、未知题号、损坏提示层级和无效调度',async () => {
    const good=await exportPractice()
    for (const invalid of [{ ...good,version:2 },{ ...good,drafts:[{ ...draft,id:'999999' }] },{ ...good,drafts:[{ ...draft,hint:5 }] },{ ...good,review:{ broken:{ status:'known' } } }]) {
      await expect(importPractice(JSON.stringify(invalid))).rejects.toThrow()
    }
  })
})
it('错误卡随旧版兼容备份保留，并拒绝无效确认字段',async()=>{
 const saved:PracticeAttempt={...attempt('failed'),key:'mistake-backup',mistake:{reason:'边界遗漏',check:'空输入处理了吗？',confirmed:true,correctedCode:'return 0'}}
 await writeAttempt(saved)
 const backup=await exportPractice()
 await importPractice(JSON.stringify(backup))
 expect((await readAttempts()).find((a)=>a.key===saved.key)?.mistake).toEqual(saved.mistake)
 await expect(importPractice(JSON.stringify({...backup,attempts:[{...saved,mistake:{...saved.mistake,confirmed:'yes'}}]}))).rejects.toThrow('备份格式')
})
