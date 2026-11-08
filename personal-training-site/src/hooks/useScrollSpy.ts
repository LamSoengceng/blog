import { useEffect, useState } from 'react'

/** 滚动时把「视口上沿 18% 处」所在的最后一个已过小节视为当前小节；不用 IntersectionObserver，
 * 部分内嵌浏览环境不派发其回调，scroll 事件计算在所有环境都可靠。ids 以拼接签名为依赖，
 * 每次渲染传新数组不会导致 effect 重挂。 */
export function useScrollSpy(ids: string[]): string {
  const signature = ids.join('\n')
  const [activeId, setActiveId] = useState(() => ids[0] ?? '')
  useEffect(() => {
    const entries = signature.split('\n')
    const compute = () => {
      const bandTop = window.innerHeight * 0.18
      let current = entries[0] ?? ''
      for (const id of entries) {
        const element = document.getElementById(id)
        if (!element || element.getBoundingClientRect().top > bandTop) break
        current = id
      }
      setActiveId(current)
    }
    // 挂载时延迟一帧再算，避免在 effect 里同步 setState；也覆盖恢复滚动位置/锚点直达的场景
    const frame = requestAnimationFrame(compute)
    window.addEventListener('scroll', compute, { passive: true })
    window.addEventListener('resize', compute)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', compute)
      window.removeEventListener('resize', compute)
    }
  }, [signature])
  return activeId
}

/** 平滑滚动到锚点并同步地址栏（不触发页面跳转，供目录点击复用）。 */
export function scrollToAnchor(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  window.history.replaceState(null, '', `#${id}`)
}
