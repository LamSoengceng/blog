import { ChevronLeft, ChevronRight, Pause, Play, RotateCcw } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type { AlgorithmStep } from './types'

type AlgorithmStepPlayerProps = {
  steps: AlgorithmStep[]
  currentStep: number
  playing: boolean
  onStepChange: (step: number) => void
  onPlayingChange: (playing: boolean) => void
}

const isFormElement = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) return false
  return ['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON'].includes(target.tagName)
}

export function AlgorithmStepPlayer({
  steps,
  currentStep,
  playing,
  onStepChange,
  onPlayingChange,
}: AlgorithmStepPlayerProps) {
  const playerRef = useRef<HTMLDivElement>(null)
  const step = steps[currentStep]
  const isFirst = currentStep === 0
  const isLast = currentStep >= steps.length - 1
  const progress = steps.length > 0 ? ((currentStep + 1) / steps.length) * 100 : 0

  useEffect(() => {
    if (!playing || steps.length === 0 || isLast) {
      if (playing && isLast) onPlayingChange(false)
      return undefined
    }

    const timer = window.setInterval(() => {
      if (currentStep >= steps.length - 1) {
        onPlayingChange(false)
        return
      }
      onStepChange(currentStep + 1)
    }, 900)

    return () => window.clearInterval(timer)
  }, [currentStep, isLast, onPlayingChange, onStepChange, playing, steps.length])

  const moveTo = (nextStep: number) => {
    onPlayingChange(false)
    onStepChange(Math.max(0, Math.min(nextStep, steps.length - 1)))
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (isFormElement(event.target)) return
    if (event.key === ' ') {
      event.preventDefault()
      onPlayingChange(!playing && !isLast)
    }
    if (event.key === 'ArrowLeft' && !isFirst) moveTo(currentStep - 1)
    if (event.key === 'ArrowRight' && !isLast) moveTo(currentStep + 1)
  }

  if (!step) return null

  return (
    <div
      ref={playerRef}
      className="algorithm-step-player"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label="算法步骤播放器"
    >
      <div className="algorithm-step-player-head">
        <div className="algorithm-step-copy" key={currentStep}>
          <span className="algorithm-visualizer-kicker">Execution timeline</span>
          <strong>{step.title}</strong>
        </div>
        <span className="algorithm-step-count">
          {currentStep + 1} / {steps.length}
        </span>
      </div>

      <div className="algorithm-step-progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>

      <p className="algorithm-step-explanation algorithm-step-copy" key={`explanation-${currentStep}`}>
        {step.explanation}
      </p>

      <div className="algorithm-step-controls" aria-label="步骤控制">
        <button
          type="button"
          className="algorithm-icon-button"
          onClick={() => moveTo(currentStep - 1)}
          disabled={isFirst}
          title="上一步"
          aria-label="上一步"
        >
          <ChevronLeft size={17} aria-hidden="true" />
        </button>
        <button
          type="button"
          className="algorithm-play-button"
          onClick={() => onPlayingChange(!playing && !isLast)}
          disabled={isLast && !playing}
          title={playing ? '暂停' : '播放'}
        >
          {playing ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
          <span>{playing ? '暂停' : '播放'}</span>
        </button>
        <button
          type="button"
          className="algorithm-icon-button"
          onClick={() => moveTo(currentStep + 1)}
          disabled={isLast}
          title="下一步"
          aria-label="下一步"
        >
          <ChevronRight size={17} aria-hidden="true" />
        </button>
        <button
          type="button"
          className="algorithm-icon-button"
          onClick={() => moveTo(0)}
          title="重置"
          aria-label="重置"
        >
          <RotateCcw size={16} aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
