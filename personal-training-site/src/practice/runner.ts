import type { PracticeMode, PracticeSpec, RunResult, TestCase } from './types'

export const runPython = (
  spec: PracticeSpec, code: string, tests: TestCase[], onReady: () => void, mode: PracticeMode = 'core',
): { promise: Promise<RunResult>; stop: () => void } => {
  const worker = new Worker(new URL('./python.worker.ts', import.meta.url), { type: 'module' })
  let timer: ReturnType<typeof setTimeout>
  let rejectRun: (reason: Error) => void = () => {}
  const close = () => { clearTimeout(timer); worker.terminate() }
  const promise = new Promise<RunResult>((resolve, reject) => {
    rejectRun = reject
    timer = setTimeout(() => { close(); reject(new Error('Python 初始化超过 60 秒，请重试。草稿已保留。')) }, 60000)
    worker.onmessage = ({ data }) => {
      if (data.type === 'ready') {
        clearTimeout(timer); onReady()
        timer = setTimeout(() => { close(); reject(new Error('代码执行超过 10 秒，已停止。请检查循环和递归。')) }, 10000)
      } else if (data.type === 'result') { close(); resolve(data.result) }
      else if (data.type === 'error') { close(); reject(new Error(`运行环境或执行异常：${data.message}`)) }
    }
    worker.onerror = (event) => { close(); reject(new Error(`Python 加载失败：${event.message}`)) }
    const base = new URL(import.meta.env.BASE_URL, location.origin).href
    worker.postMessage({ base, payload: { spec: { id: spec.id, method: spec.method, tests }, code, mode } })
  })
  return { promise, stop: () => { close(); rejectRun(new Error('已停止运行，草稿已保留。')) } }
}
