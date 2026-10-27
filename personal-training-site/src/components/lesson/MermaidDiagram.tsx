import { useEffect, useRef, useState } from 'react'

let mermaidPromise: Promise<typeof import('mermaid')> | null = null

/**
 * Mermaid 图（懒加载）：课程里只有出现 mermaid 块才拉取 mermaid 库，
 * 站点已有 tesseract.js / pyodide 的先例，重库都放浏览器端按需加载。
 * 渲染失败时展示代码原文，课程内容不至于整块丢失。
 */
export function MermaidDiagram({ code, title }: { code: string; title?: string }) {
  const boxRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState('')
  useEffect(() => {
    let cancelled = false
    mermaidPromise ??= import('mermaid')
    mermaidPromise
      .then(async ({ default: mermaid }) => {
        if (cancelled) return
        // 跟随全站深浅主题：浅色用 default（深色线条），深色用 dark
        mermaid.initialize({
          startOnLoad: false,
          theme: document.documentElement.dataset.theme === 'light' ? 'default' : 'dark',
          securityLevel: 'strict',
          fontFamily: 'ui-sans-serif, system-ui, sans-serif',
        })
        const id = `lesson-mermaid-${Math.random().toString(36).slice(2, 9)}`
        const { svg } = await mermaid.render(id, code)
        if (cancelled || !boxRef.current) return
        boxRef.current.innerHTML = svg
      })
      .catch((reason: unknown) => { if (!cancelled) setError(reason instanceof Error ? reason.message : '图表渲染失败') })
    return () => { cancelled = true }
  }, [code])
  return (
    <figure className="lesson-mermaid" aria-label={title || '图表'}>
      {title ? <figcaption>{title}</figcaption> : null}
      {error ? <pre className="lesson-mermaid-error" role="note">图表未能渲染：{error}</pre> : <div ref={boxRef} className="lesson-mermaid-box" />}
    </figure>
  )
}