// 请求当前挂载的小黑板导出图片（若没有小黑板则返回空串）。
// 与 SketchPad 组件通过 window 事件解耦，方便非组件代码（如 FeynmanPage）调用。
export const requestSketchExport = (): Promise<string> =>
  new Promise((resolve) => {
    const handler = (event: Event) => {
      event.preventDefault()
      resolve((event as CustomEvent<{ dataUrl: string }>).detail.dataUrl)
    }
    window.addEventListener('sketchpad-export-response', handler, { once: true })
    window.dispatchEvent(new CustomEvent('sketchpad-export', { detail: { callback: (dataUrl: string) => {
      window.dispatchEvent(new CustomEvent('sketchpad-export-response', { detail: { dataUrl } }))
    } } }))
    setTimeout(() => resolve(''), 300)
  })
