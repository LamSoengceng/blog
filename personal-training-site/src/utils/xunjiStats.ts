// 训记逐组数据的实时推导：把 xunjiTrains（真实训练记录）折算成动作级指标。
// 与 fitnessData.ts 的关系：fitnessData 保留手工整理的「知识字段」（target/equipment/cue…）
// 与 5-6 月的静态快照作为兜底；本模块只做可推导字段（bestSet/e1RM/容量/趋势）的实时计算，
// 页面「实时优先、无数据回退」——有训记数据的动作显示最新真实数字，没有的沿用静态快照。
import { xunjiTrains, type XunjiSet, type XunjiTrain } from '../data/xunjiTrains'
import { movementHighlights } from '../data/fitnessData'

// Epley 公式：估算 1RM ≈ 重量 × (1 + 次数/30)。假设单位为 kg（训记里力量动作基本是 kg）。
export const EPL = (weight: number, reps: number) => weight * (1 + reps / 30)

const round1 = (value: number) => Math.round(value * 10) / 10

// 动作 id → 训记里的动作名（别名按优先级排列；同训练日多别名取 e1RM 最高的一条）
export const MOVEMENT_ALIASES: Record<string, string[]> = {
  bench: ['杠铃卧推'],
  squat: ['深蹲'],
  deadlift: ['硬拉'],
  'strict-press': ['站姿杠铃推举'],
  'hip-thrust': ['悍马机臀冲'],
  'lat-pulldown': ['宽距高位下拉', '对握高位下拉'],
}

export type SessionPoint = {
  date: string // MM-DD（展示用）
  fullDate: string // YYYY-MM-DD（排序用）
  e1rm: number
  topSet: string
  sets: number
  tonnage: number
}

// 一组动作的重量×次数：超级组取 items 里最好的一条；自重组（weight ≤ 0）无法算 e1RM，跳过
const setWeightReps = (set: XunjiSet): { weight: number; reps: number } | null => {
  if (set.items?.length) {
    let best: { weight: number; reps: number } | null = null
    for (const item of set.items) {
      if (item.weight != null && item.reps != null && item.weight > 0) {
        if (!best || item.weight > best.weight) best = { weight: item.weight, reps: item.reps }
      }
    }
    return best
  }
  if (set.weight != null && set.reps != null && set.weight > 0) {
    return { weight: set.weight, reps: set.reps }
  }
  return null
}

const countSession = (train: XunjiTrain, name: string): SessionPoint | null => {
  const movement = train.movements.find((item) => item.name === name)
  if (!movement) return null
  let best: { weight: number; reps: number } | null = null
  let sets = 0
  let tonnage = 0
  for (const set of movement.sets) {
    if (!set.done) continue
    const weightReps = setWeightReps(set)
    if (!weightReps) continue
    sets += 1
    tonnage += weightReps.weight * weightReps.reps
    if (!best || weightReps.weight > best.weight) best = weightReps
  }
  if (!best) return null
  return {
    date: train.datestr.slice(5), // YYYY-MM-DD → MM-DD
    fullDate: train.datestr,
    e1rm: round1(EPL(best.weight, best.reps)),
    topSet: `${best.weight}kg × ${best.reps}`,
    sets,
    tonnage: Math.round(tonnage),
  }
}

// 单个动作名的时间序列（每次训练一个点，用当天最好的一组算 e1RM），按日期升序
export const movementSessionSeries = (name: string): SessionPoint[] =>
  xunjiTrains
    .map((train) => countSession(train, name))
    .filter((point): point is SessionPoint => point != null)
    .sort((first, second) => first.fullDate.localeCompare(second.fullDate))

export type MovementLiveStats = {
  bestSet: string
  bestDate: string
  estimatedOneRm: number
  totalSets: number
  tonnage: number
  delta: number
  trend: Array<{ date: string; value: number }>
  sessions: number
}

// 动作 id → 实时推导指标；别名无数据或不足 2 次训练返回 null（调用方回退到静态快照）
export const movementLiveStats = (id: string): MovementLiveStats | null => {
  const aliases = MOVEMENT_ALIASES[id]
  if (!aliases?.length) return null
  const byDate = new Map<string, SessionPoint>()
  for (const name of aliases) {
    for (const point of movementSessionSeries(name)) {
      const existing = byDate.get(point.fullDate)
      if (!existing || point.e1rm > existing.e1rm) byDate.set(point.fullDate, point)
    }
  }
  const points = [...byDate.values()].sort((first, second) => first.fullDate.localeCompare(second.fullDate))
  if (points.length < 2) return null

  let best = points[0]
  for (const point of points) if (point.e1rm > best.e1rm) best = point
  const first = points[0]
  const latest = points[points.length - 1]
  return {
    bestSet: best.topSet,
    bestDate: best.date,
    estimatedOneRm: latest.e1rm,
    totalSets: points.reduce((sum, point) => sum + point.sets, 0),
    tonnage: points.reduce((sum, point) => sum + point.tonnage, 0),
    delta: round1(latest.e1rm - first.e1rm),
    trend: points.map((point) => ({ date: point.date, value: point.e1rm })),
    sessions: points.length,
  }
}

export type MovementTrend = {
  key: string
  label: string
  points: SessionPoint[]
}

// 逐组页用的「力量趋势」：自动发现训记里出现过的动作（别名归并到核心动作名），
// 只保留训练次数足够的，按频次降序取前 limit 个。
export const allMovementTrends = (minSessions = 3, limit = 8): MovementTrend[] => {
  const curatedLabels = new Map(movementHighlights.map((movement) => [movement.id, movement.label]))
  const aliasLabel = new Map<string, string>()
  for (const [id, aliases] of Object.entries(MOVEMENT_ALIASES)) {
    for (const alias of aliases) aliasLabel.set(alias, curatedLabels.get(id) ?? alias)
  }

  const counts = new Map<string, number>()
  for (const train of xunjiTrains) {
    for (const movement of train.movements) {
      const hasData = movement.sets.some((set) => set.done && setWeightReps(set) != null)
      if (hasData) counts.set(movement.name, (counts.get(movement.name) ?? 0) + 1)
    }
  }

  return [...counts.entries()]
    .filter(([, count]) => count >= minSessions)
    .sort((first, second) => second[1] - first[1])
    .slice(0, limit)
    .map(([name]) => ({
      key: name,
      label: aliasLabel.get(name) ?? name,
      points: movementSessionSeries(name),
    }))
    .filter((trend) => trend.points.length >= minSessions)
}
