import { useEffect, useState } from 'react'
import { AlgorithmStepPlayer } from './AlgorithmStepPlayer'
import { ArrayRenderer } from './ArrayRenderer'
import type { AlgorithmStep } from './types'

type AlgorithmVisualizerProps = {
  steps: AlgorithmStep[]
}

export function AlgorithmVisualizer({ steps }: AlgorithmVisualizerProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [playing, setPlaying] = useState(false)
  const step = steps[currentStep]

  useEffect(() => {
    setCurrentStep(0)
    setPlaying(false)
  }, [steps])

  if (!step) return null

  return (
    <article className="algorithm-visualizer-panel">
      <div className="algorithm-visualizer-head">
        <div>
          <span className="eyebrow">Algorithm Lab</span>
          <h3>把指针移动过程看清楚</h3>
          <p>用固定示例逐步还原双指针判断，先观察状态，再回到代码。</p>
        </div>
        <span className="difficulty-pill medium">双指针 · 数组</span>
      </div>

      <div className="algorithm-visualizer-layout">
        {step.visualizationType === 'array' ? <ArrayRenderer step={step} /> : null}

        <AlgorithmStepPlayer
          steps={steps}
          currentStep={currentStep}
          playing={playing}
          onStepChange={setCurrentStep}
          onPlayingChange={setPlaying}
        />

        <aside className="algorithm-variable-panel">
          <h4>当前变量</h4>
          <dl className="algorithm-variable-list">
            {Object.entries(step.variables).map(([name, value]) => (
              <div className={`algorithm-variable-row ${name === 'maxArea' ? 'is-result' : ''}`} key={name}>
                <dt>{name}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </article>
  )
}
