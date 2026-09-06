import { useMemo, useState } from 'react'
import Model, { type IExerciseData, type IMuscleStats, type Muscle } from 'react-body-highlighter'
import { movementHighlights } from '../data/fitnessData'

const movementMuscles: Record<string, Muscle[]> = {
  bench: ['chest', 'triceps', 'front-deltoids'],
  squat: ['quadriceps', 'gluteal', 'hamstring', 'abs'],
  deadlift: ['gluteal', 'hamstring', 'lower-back', 'upper-back', 'forearm'],
  'strict-press': ['front-deltoids', 'triceps', 'trapezius', 'abs'],
  'hip-thrust': ['gluteal', 'hamstring'],
  'lat-pulldown': ['upper-back', 'biceps', 'forearm'],
}

const muscleLabels: Record<string, string> = {
  abs: '腹直肌',
  biceps: '二头',
  calves: '小腿',
  chest: '胸',
  forearm: '前臂',
  gluteal: '臀',
  hamstring: '腿后侧',
  'front-deltoids': '肩前束',
  'back-deltoids': '肩后束',
  'lower-back': '下背',
  obliques: '腹斜肌',
  quadriceps: '股四头',
  trapezius: '斜方肌',
  triceps: '三头',
  'upper-back': '上背',
}

const highlightedColors = ['#154a2a', '#1f6f3d', '#2ca75c', '#30f27b', '#94ffbd', '#e7fff0']

export function BodyHeatmap() {
  const heatmapData = useMemo<IExerciseData[]>(
    () =>
      movementHighlights.map((movement) => ({
        name: movement.label,
        muscles: movementMuscles[movement.id] ?? [],
        frequency: Math.max(1, Math.min(6, Math.round(movement.totalSets / 24))),
      })),
    [],
  )
  const [selected, setSelected] = useState<IMuscleStats | null>(null)

  const selectedLabel = selected ? (muscleLabels[selected.muscle] ?? selected.muscle) : '选择肌肉'
  const selectedExercises = selected?.data.exercises ?? []
  const selectedFrequency = selected?.data.frequency ?? 0

  return (
    <article className="body-heatmap-panel">
      <div className="panel-heading">
        <h3>肌群覆盖</h3>
        <span>front / back</span>
      </div>

      <div className="body-heatmap-grid">
        <div className="body-model-wrap" aria-label="正面肌群热力图">
          <Model
            data={heatmapData}
            type="anterior"
            bodyColor="#162119"
            highlightedColors={highlightedColors}
            onClick={setSelected}
            style={{ width: '100%', height: '100%' }}
            svgStyle={{ filter: 'drop-shadow(0 18px 32px rgba(0, 0, 0, 0.32))' }}
          />
          <span>Front</span>
        </div>
        <div className="body-model-wrap" aria-label="背面肌群热力图">
          <Model
            data={heatmapData}
            type="posterior"
            bodyColor="#162119"
            highlightedColors={highlightedColors}
            onClick={setSelected}
            style={{ width: '100%', height: '100%' }}
            svgStyle={{ filter: 'drop-shadow(0 18px 32px rgba(0, 0, 0, 0.32))' }}
          />
          <span>Back</span>
        </div>
      </div>

      <div className="body-heatmap-info">
        <div>
          <span>Selected</span>
          <strong>{selectedLabel}</strong>
        </div>
        <p>
          {selected
            ? `关联动作：${selectedExercises.length ? selectedExercises.join(' / ') : '暂无'}；热度 ${selectedFrequency}`
            : '颜色越亮代表今年重点动作覆盖越多。当前根据核心动作正式组数归一化。'}
        </p>
      </div>
      <div className="heatmap-legend" aria-label="肌群热度图例">
        <span>Low</span>
        {highlightedColors.map((color) => (
          <i key={color} style={{ background: color }} />
        ))}
        <span>High</span>
      </div>
    </article>
  )
}
