// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import specs from '../data/practice/specs.json'
import { AlgorithmPracticePage } from './AlgorithmPracticePage'
import { readAttempts, readDraft, writeDraft, writeAttempt } from '../practice/store'
import { runPython } from '../practice/runner'
const spec=specs[0]
vi.mock('../practice/catalog',() => ({ loadPracticeSpecs:async () => {
  const [base,acm,drills]=await Promise.all([import('../data/practice/specs.json'),import('../data/practice/acm-specs.json'),import('../data/practice/acm-drills.json')])
  return [...base.default.map((s) => ({ ...s,acm:acm.default[s.id as keyof typeof acm.default] })),...drills.default]
},practiceSlug:(id: string) => id }))
vi.mock('../practice/store',() => ({ readDraft:vi.fn(),readAttempts:vi.fn(),writeDraft:vi.fn(),writeAttempt:vi.fn(),scheduleAttempt:vi.fn(),addManualReview:vi.fn(),download:vi.fn(),independentAllowed:(d: { hint:number;code:string },tested: string,passed: boolean) => d.hint===0 && passed && d.code===tested }))
vi.mock('../practice/runner',() => ({ runPython:vi.fn() }))
vi.mock('@uiw/react-codemirror',() => ({ default:({ value,onChange,editable }: { value:string;onChange:(value:string)=>void;editable:boolean }) => <textarea aria-label="测试代码编辑器" value={value} disabled={!editable} onChange={(e) => onChange(e.target.value)} /> }))
const mount=(path=`/algorithm/practice/${spec.slug}`) => render(<MemoryRouter initialEntries={[path]}><Routes><Route path="/algorithm/practice/:problemSlug" element={<AlgorithmPracticePage />} /></Routes></MemoryRouter>)
beforeEach(() => {
  vi.clearAllMocks()
  vi.mocked(readDraft).mockResolvedValue(undefined);vi.mocked(readAttempts).mockResolvedValue([])
  vi.mocked(writeDraft).mockResolvedValue('1');vi.mocked(writeAttempt).mockResolvedValue('1')
  vi.mocked(runPython).mockImplementation(() => ({ stop:vi.fn(),promise:Promise.resolve({ stdout:'',cases:spec.tests.map((t) => ({ name:t.name,input:t.args,expected:t.expected,actual:t.expected,passed:true })) }) }))
})
afterEach(cleanup)
it('首次显示空模板，答案隐藏；当前代码通过完整测试后才能确认独立完成',async () => {
  mount();const editor=await screen.findByLabelText('测试代码编辑器')
  await waitFor(() => expect((editor as HTMLTextAreaElement).disabled).toBe(false))
  expect((editor as HTMLTextAreaElement).value).toBe(spec.template)
  expect(screen.queryByText(spec.recall.invariant)).toBeNull()
  expect((screen.getByRole('button',{ name:'独立完成' }) as HTMLButtonElement).disabled).toBe(true)
  fireEvent.change(editor,{ target:{ value:'correct code' } });fireEvent.keyDown(editor,{ key:'Enter',ctrlKey:true })
  await screen.findByText('通过本站测试 5/5')
  expect((screen.getByRole('button',{ name:'独立完成' }) as HTMLButtonElement).disabled).toBe(false)
  fireEvent.change(editor,{ target:{ value:'edited code' } })
  expect((screen.getByRole('button',{ name:'独立完成' }) as HTMLButtonElement).disabled).toBe(true)
  expect(screen.getByText('代码已修改，请重新运行验证。')).toBeTruthy()
})
it('查看提示后即使测试全过也不能算独立完成，刷新恢复提示状态',async () => {
  vi.mocked(readDraft).mockResolvedValue({ id:spec.id,code:'saved code',hint:2,elapsed:120,updatedAt:'2026-10-22T10:00:00Z' })
  mount();await screen.findByText('02:00')
  expect(screen.getByText(spec.recall.invariant)).toBeTruthy()
  fireEvent.click(screen.getByRole('button',{ name:'运行本站测试' }));await screen.findByText('通过本站测试 5/5')
  expect((screen.getByRole('button',{ name:'独立完成' }) as HTMLButtonElement).disabled).toBe(true)
  fireEvent.click(screen.getByRole('button',{ name:'提示后完成' }))
  await waitFor(() => expect(writeAttempt).toHaveBeenCalledWith(expect.objectContaining({ hint:2,outcome:'assisted',code:'saved code' })))
  await screen.findByText(/本轮已归档/)
  expect((screen.getByRole('button',{ name:'提示后完成' }) as HTMLButtonElement).disabled).toBe(true)
})
it('存储失败时展示明确提示和代码下载入口',async () => {
  vi.mocked(readDraft).mockRejectedValue(new Error('denied'))
  mount();expect(await screen.findByRole('alert')).toBeTruthy()
  expect(screen.getAllByRole('button',{ name:'下载代码' }).length).toBeGreaterThan(0)
})
it('切换模式加载各自草稿，核心代码通过的结果不会带到 ACM 模式',async () => {
  vi.mocked(readDraft).mockImplementation(async (id,mode) => ({ id,mode,code:mode==='acm' ? 'saved ACM program' : 'saved core code',hint:0,elapsed:0,updatedAt:'2026-10-22T10:00:00Z' }))
  mount();await screen.findByDisplayValue('saved core code')
  fireEvent.click(screen.getByRole('button',{ name:'运行本站测试' }));await screen.findByText('通过本站测试 5/5')
  expect((screen.getByRole('button',{ name:'独立完成' }) as HTMLButtonElement).disabled).toBe(false)
  fireEvent.click(screen.getByRole('button',{ name:'ACM 模式' }))
  await screen.findByDisplayValue('saved ACM program')
  expect((screen.getByRole('button',{ name:'独立完成' }) as HTMLButtonElement).disabled).toBe(true)
  expect(screen.queryByText('通过本站测试 5/5')).toBeNull()
  fireEvent.click(screen.getByRole('button',{ name:'核心代码模式' }))
  await screen.findByDisplayValue('saved core code')
  expect(readDraft).toHaveBeenCalledWith(spec.id,'acm')
})
it('ACM 自定义输入按原始多行文本传给运行器，不需要 JSON 编码',async () => {
  mount(`/algorithm/practice/${spec.slug}?mode=acm`)
  const editor=await screen.findByLabelText('测试代码编辑器')
  await waitFor(() => expect((editor as HTMLTextAreaElement).disabled).toBe(false))
  expect((editor as HTMLTextAreaElement).value).toContain("if __name__ == '__main__':")
  fireEvent.click(screen.getByRole('checkbox',{ name:'自定义输入' }))
  fireEvent.change(screen.getByLabelText('标准输入 stdin（原始文本，支持多行）'),{ target:{ value:'4\n2 7 11 15\n9\n' } })
  fireEvent.change(screen.getByLabelText('预期标准输出 stdout（原始文本）'),{ target:{ value:'0 1\n' } })
  fireEvent.click(screen.getByRole('button',{ name:'运行自定义用例' }))
  await waitFor(() => expect(runPython).toHaveBeenCalledWith(expect.anything(),expect.any(String),[expect.objectContaining({ stdin:'4\n2 7 11 15\n9\n',stdout:'0 1\n',custom:true })],expect.any(Function),'acm'))
  expect((screen.getByRole('button',{ name:'独立完成' }) as HTMLButtonElement).disabled).toBe(true)
})
it('本地 I/O 专项只提供 ACM 模式并展示输入输出样例',async () => {
  mount('/algorithm/practice/io-eof')
  await screen.findByRole('heading',{ name:'读到 EOF：A + B',level:1 })
  expect((screen.getByRole('button',{ name:'核心代码模式' }) as HTMLButtonElement).disabled).toBe(true)
  expect(screen.getByRole('heading',{ name:'样例输入' })).toBeTruthy()
  expect(screen.getByRole('heading',{ name:'样例输出' })).toBeTruthy()
})
it('失败时自动保留实际运行代码和测试现场，编辑草稿不改写失败历史',async()=>{
 const output={stdout:'',cases:[{name:'边界',input:[[]],expected:0,actual:1,passed:false}]}
 vi.mocked(runPython).mockReturnValue({stop:vi.fn(),promise:Promise.resolve(output)})
 mount();const editor=await screen.findByLabelText('测试代码编辑器')
 await waitFor(()=>expect((editor as HTMLTextAreaElement).disabled).toBe(false))
 fireEvent.change(editor,{target:{value:'wrong code'}})
 fireEvent.click(screen.getByRole('button',{name:'运行本站测试'}))
 await screen.findByText('通过本站测试 0/1')
 await waitFor(()=>expect(writeAttempt).toHaveBeenCalledWith(expect.objectContaining({code:'wrong code',outcome:'failed',result:output,mistake:{reason:'',check:'',confirmed:false}})))
 fireEvent.change(editor,{target:{value:'new draft'}})
 expect(screen.getByRole('button',{name:'记住这次错误'})).toBeTruthy()
})
