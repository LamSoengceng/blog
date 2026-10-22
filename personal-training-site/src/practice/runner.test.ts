import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { runPython } from './runner'
import type { PracticeSpec } from './types'
class MockWorker {
  static current: MockWorker
  onmessage: ((event: { data: unknown }) => void) | null = null
  onerror: ((event: { message: string }) => void) | null = null
  terminate=vi.fn()
  postMessage=vi.fn()
  constructor() { MockWorker.current=this }
  send(data: unknown) { this.onmessage?.({ data }) }
}
beforeEach(() => { vi.useFakeTimers();vi.stubGlobal('Worker',MockWorker);vi.stubGlobal('location',{ origin:'http://localhost' }) })
afterEach(() => { vi.useRealTimers();vi.unstubAllGlobals() })
const spec={ id:'1',method:'twoSum' } as PracticeSpec
describe('Python Worker 生命周期',() => {
  it('初始化失败与执行超时使用不同计时器，始终终止 Worker',async () => {
    const loading=runPython(spec,'pass',[],vi.fn())
    const failure=expect(loading.promise).rejects.toThrow('初始化超过 60 秒')
    await vi.advanceTimersByTimeAsync(60001);await failure
    expect(MockWorker.current.terminate).toHaveBeenCalled()
    const ready=vi.fn();const executing=runPython(spec,'while True: pass',[],ready)
    MockWorker.current.send({ type:'ready' });expect(ready).toHaveBeenCalled()
    const timeout=expect(executing.promise).rejects.toThrow('超过 10 秒')
    await vi.advanceTimersByTimeAsync(10001);await timeout
    expect(MockWorker.current.terminate).toHaveBeenCalled()
  })
  it('手动停止后可以建立新 Worker 并返回结果',async () => {
    const old=runPython(spec,'pass',[],vi.fn());const stopped=expect(old.promise).rejects.toThrow('已停止运行');old.stop();await stopped
    const next=runPython(spec,'pass',[],vi.fn());MockWorker.current.send({ type:'ready' });MockWorker.current.send({ type:'result',result:{ cases:[],stdout:'' } })
    await expect(next.promise).resolves.toEqual({ cases:[],stdout:'' })
    expect(MockWorker.current.terminate).toHaveBeenCalled()
  })
  it('ACM 模式明确发送原始 stdin 和执行模式',async () => {
    const cases=[{ name:'stdin',args:[],expected:'3\n',stdin:'1 2\n',stdout:'3\n' }]
    const task=runPython(spec,'print(sum(map(int,input().split())))',cases,vi.fn(),'acm')
    expect(MockWorker.current.postMessage).toHaveBeenCalledWith(expect.objectContaining({ payload:expect.objectContaining({ mode:'acm',spec:expect.objectContaining({ tests:cases }) }) }))
    MockWorker.current.send({ type:'result',result:{ cases:[],stdout:'' } })
    await task.promise
  })
})
