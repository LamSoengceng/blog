import harness from './harness.py?raw'
import type { RunResult } from './types'

type PythonRuntime = { runPython: (code: string) => unknown; globals: { set: (key: string, value: string) => void; delete: (key: string) => void } }
const scope = self as unknown as { onmessage: ((event: MessageEvent) => void) | null; postMessage: (data: unknown) => void }
scope.onmessage = async (event: MessageEvent) => {
  let phase = '加载运行模块'
  let libraryUrl: string | undefined
  const startupLog: string[] = []
  const originalConsoleError = console.error
  console.error = (...args: unknown[]) => {
    startupLog.push(args.map((value) => value instanceof Error ? `${value.message}\n${value.stack ?? ''}` : String(value)).join(' '))
    originalConsoleError(...args)
  }
  try {
    const { base, payload } = event.data
    const module = await import(/* @vite-ignore */ `${base}python/0.27.7/pyodide.mjs`)
    phase = '验证 Python 标准库'
    const libraryResponse = await fetch(`${base}python/0.27.7/python_stdlib.data`)
    if (!libraryResponse.ok) throw new Error(`标准库 HTTP ${libraryResponse.status}`)
    const library = await libraryResponse.arrayBuffer()
    const hash = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', library)), (b) => b.toString(16).padStart(2,'0')).join('')
    startupLog.push(`标准库 ${library.byteLength} bytes / SHA256 ${hash}`)
    if (hash !== '16611534726e5d8ac2bd8f926410b2dcb8d6f49aa24913463533b457a2115c16') throw new Error('标准库下载不完整或缓存不匹配，请刷新后重试。')
    libraryUrl = URL.createObjectURL(new Blob([library], { type: 'application/octet-stream' }))
    phase = '初始化 Python'
    const py: PythonRuntime = await module.loadPyodide({ indexURL: `${base}python/0.27.7/`, stdLibURL: libraryUrl, stdout: (text: string) => startupLog.push(text), stderr: (text: string) => startupLog.push(text) })
    phase = '初始化测试适配器'
    py.runPython(harness)
    scope.postMessage({ type: 'ready' })
    phase = '运行代码'
    py.globals.set('_request_json', JSON.stringify(payload))
    const result = JSON.parse(py.runPython('json.dumps(run_suite(json.loads(_request_json)), ensure_ascii=False)') as string) as RunResult
    py.globals.delete('_request_json')
    scope.postMessage({ type: 'result', result })
  } catch (error) {
    const detail = error instanceof Error ? `${error.message}\n${error.stack ?? ''}` : typeof error === 'object' && error ? JSON.stringify(error, Object.getOwnPropertyNames(error)) : String(error)
    scope.postMessage({ type: 'error', message: `${phase}：${detail}\n${startupLog.slice(0,60).join('\n')}` })
  } finally {
    console.error = originalConsoleError
    if (libraryUrl) URL.revokeObjectURL(libraryUrl)
  }
}
