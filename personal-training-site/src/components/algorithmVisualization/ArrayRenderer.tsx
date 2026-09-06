import type { CSSProperties } from 'react'
import type { AlgorithmRendererProps } from './types'

type BarStyle = CSSProperties & { '--bar-height': string }

export function ArrayRenderer({ step }: AlgorithmRendererProps) {
  const { snapshot } = step
  const pointers = snapshot.pointers ?? {}
  const activeRange = snapshot.activeRange ?? [0, snapshot.values.length - 1]
  const compared = new Set(snapshot.compared ?? [])
  const settled = new Set(snapshot.settled ?? [])
  const leftIndex = pointers.left ?? activeRange[0]
  const rightIndex = pointers.right ?? activeRange[1]
  const leftHeight = snapshot.values[leftIndex] ?? 0
  const rightHeight = snapshot.values[rightIndex] ?? 0
  const waterHeight = Math.max(8, Math.min(leftHeight, rightHeight) * 22)

  return (
    <div className="algorithm-array-renderer" aria-label="数组算法可视化">
      <div className="algorithm-array-legend" aria-hidden="true">
        <span><i className="legend-swatch pointer" />指针</span>
        <span><i className="legend-swatch active" />当前比较</span>
        <span><i className="legend-swatch result" />最大结果</span>
      </div>
      <div className="algorithm-array-viewport">
        <div className="algorithm-array-stage">
          <div
            className="algorithm-array-water"
            style={{
              '--water-left': `${activeRange[0] * 76 + 20}px`,
              '--water-width': `${Math.max(76, (activeRange[1] - activeRange[0]) * 76 + 52)}px`,
              '--water-height': `${waterHeight}px`,
            } as CSSProperties}
          />
          {leftIndex === rightIndex ? (
            <div
              className="algorithm-array-pointer-marker meeting"
              style={{ '--pointer-x': `${leftIndex * 76 + 58}px` } as CSSProperties}
              aria-hidden="true"
            >
              <span>left = right</span>
            </div>
          ) : (
            <>
              <div
                className="algorithm-array-pointer-marker left"
                style={{ '--pointer-x': `${leftIndex * 76 + 58}px` } as CSSProperties}
                aria-hidden="true"
              >
                <span>left</span>
              </div>
              <div
                className="algorithm-array-pointer-marker right"
                style={{ '--pointer-x': `${rightIndex * 76 + 58}px` } as CSSProperties}
                aria-hidden="true"
              >
                <span>right</span>
              </div>
            </>
          )}
          {snapshot.values.map((value, index) => {
            const isCompared = compared.has(index)
            const isSettled = settled.has(index)
            const isActive = index >= activeRange[0] && index <= activeRange[1]
            const className = [
              'algorithm-array-cell',
              isActive ? 'is-active-range' : '',
              isCompared ? 'is-compared' : '',
              isSettled ? 'is-settled' : '',
            ].filter(Boolean).join(' ')

            return (
              <div className={className} key={`${index}-${value}`}>
                <div className="algorithm-array-index">{index}</div>
                <div className="algorithm-array-bar-wrap">
                  <div className="algorithm-array-bar" style={{ '--bar-height': `${Math.max(28, value * 22)}px` } as BarStyle}>
                    <strong>{value}</strong>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="algorithm-array-caption">
        <span>当前容器区间 [{activeRange[0]}, {activeRange[1]}]</span>
        <strong>{snapshot.result !== undefined ? `最大面积 ${snapshot.result}` : '等待比较'}</strong>
      </div>
    </div>
  )
}
