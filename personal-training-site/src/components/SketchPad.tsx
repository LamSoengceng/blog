import { useEffect, useRef, useState } from 'react'

// 小黑板：粉笔手绘板，讲解时画数组、指针、树结构。
// 笔画保存在内存里，通过 onExport 输出 dataURL 随费曼记录存档。
type Point = { x: number; y: number }
type Stroke = { color: string; size: number; points: Point[] }

const CHALK_COLORS = [
  { color: '#f3fff7', label: '白' },
  { color: '#8fffc0', label: '绿' },
  { color: '#f0cf95', label: '黄' },
  { color: '#ffb0a5', label: '红' },
]

const BOARD_BG = '#0c1410'

export function SketchPad({ width = 760, height = 360 }: { width?: number; height?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const strokesRef = useRef<Stroke[]>([])
  const drawingRef = useRef<Stroke | null>(null)
  const [color, setColor] = useState(CHALK_COLORS[1].color)
  const [erasing, setErasing] = useState(false)
  const [strokeCount, setStrokeCount] = useState(0)

  const redraw = () => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return
    context.fillStyle = BOARD_BG
    context.fillRect(0, 0, canvas.width, canvas.height)
    const all = drawingRef.current ? [...strokesRef.current, drawingRef.current] : strokesRef.current
    for (const stroke of all) {
      context.strokeStyle = stroke.color
      context.lineWidth = stroke.size
      context.lineCap = 'round'
      context.lineJoin = 'round'
      context.beginPath()
      stroke.points.forEach((point, index) => {
        if (index === 0) context.moveTo(point.x, point.y)
        else context.lineTo(point.x, point.y)
      })
      if (stroke.points.length === 1) {
        context.lineTo(stroke.points[0].x + 0.1, stroke.points[0].y)
      }
      context.stroke()
    }
  }

  useEffect(() => {
    redraw()
  }, [])

  const canvasPoint = (event: React.PointerEvent<HTMLCanvasElement>): Point => {
    const canvas = canvasRef.current!
    const rect = canvas.getBoundingClientRect()
    return {
      x: ((event.clientX - rect.left) / rect.width) * canvas.width,
      y: ((event.clientY - rect.top) / rect.height) * canvas.height,
    }
  }

  const onPointerDown = (event: React.PointerEvent<HTMLCanvasElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId)
    drawingRef.current = {
      color: erasing ? BOARD_BG : color,
      size: erasing ? 22 : 3,
      points: [canvasPoint(event)],
    }
    redraw()
  }

  const onPointerMove = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawingRef.current) return
    if (event.buttons === 0 && event.pointerType === 'mouse') return
    drawingRef.current.points.push(canvasPoint(event))
    redraw()
  }

  const onPointerUp = () => {
    if (!drawingRef.current) return
    strokesRef.current.push(drawingRef.current)
    drawingRef.current = null
    setStrokeCount(strokesRef.current.length)
    redraw()
  }

  const undo = () => {
    strokesRef.current.pop()
    setStrokeCount(strokesRef.current.length)
    redraw()
  }

  const clear = () => {
    strokesRef.current = []
    setStrokeCount(0)
    redraw()
  }

  const exportImage = (): string => {
    redraw()
    return canvasRef.current?.toDataURL('image/jpeg', 0.6) ?? ''
  }

  // 把导出能力暴露给父组件：通过 data-export 事件总线最简单
  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<{ callback: (dataUrl: string) => void }>).detail
      detail.callback(exportImage())
    }
    window.addEventListener('sketchpad-export', handler)
    return () => window.removeEventListener('sketchpad-export', handler)
  })

  return (
    <div className="sketchpad">
      <div className="sketchpad-toolbar">
        <div className="sketchpad-colors">
          {CHALK_COLORS.map((item) => (
            <button
              className={`sketchpad-chalk ${color === item.color && !erasing ? 'active' : ''}`}
              type="button"
              key={item.color}
              aria-label={`${item.label}粉笔`}
              style={{ background: item.color }}
              onClick={() => {
                setColor(item.color)
                setErasing(false)
              }}
            />
          ))}
        </div>
        <button
          className={`journal-kind ${erasing ? 'active' : ''}`}
          type="button"
          onClick={() => setErasing((prev) => !prev)}
        >
          {erasing ? '橡皮中' : '橡皮'}
        </button>
        <button className="journal-kind" type="button" onClick={undo} disabled={!strokeCount}>
          撤销
        </button>
        <button className="journal-kind" type="button" onClick={clear} disabled={!strokeCount}>
          清空
        </button>
        <span className="sketchpad-hint">用鼠标或手指在黑板上画，随讲解一起记录</span>
      </div>
      <canvas
        ref={canvasRef}
        className="sketchpad-canvas"
        width={width}
        height={height}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      />
    </div>
  )
}

// 请求当前挂载的小黑板导出图片（若没有小黑板则返回空串）
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
