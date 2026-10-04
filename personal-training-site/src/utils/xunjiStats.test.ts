import { describe, expect, it } from 'vitest'
import {
  EPL,
  MOVEMENT_ALIASES,
  allMovementTrends,
  movementLiveStats,
  movementSessionSeries,
} from './xunjiStats'

describe('EPL', () => {
  it('次数越多，估算 1RM 越高', () => {
    expect(EPL(100, 1)).toBeCloseTo(103.33)
    expect(EPL(100, 5)).toBeCloseTo(116.67)
    expect(EPL(80, 3)).toBeCloseTo(88)
  })
})

describe('movementSessionSeries（真实训记数据）', () => {
  it('三大项都有覆盖且序列有序、字段齐全', () => {
    for (const alias of [MOVEMENT_ALIASES.bench[0], MOVEMENT_ALIASES.squat[0], MOVEMENT_ALIASES.deadlift[0]]) {
      const series = movementSessionSeries(alias)
      expect(series.length).toBeGreaterThanOrEqual(2)
      const dates = series.map((point) => point.fullDate)
      expect([...dates].sort()).toEqual(dates) // 按日期升序
      for (const point of series) {
        expect(point.e1rm).toBeGreaterThan(0)
        expect(point.sets).toBeGreaterThan(0)
        expect(point.tonnage).toBeGreaterThan(0)
        expect(point.topSet).toMatch(/kg × \d+/)
      }
    }
  })

  it('未知动作名返回空序列', () => {
    expect(movementSessionSeries('不存在动作xyz')).toEqual([])
  })
})

describe('movementLiveStats', () => {
  it('bench 有实时指标：趋势 >= 2 点，latest 等于序列末点，delta 与首末差一致', () => {
    const live = movementLiveStats('bench')
    expect(live).not.toBeNull()
    const points = movementSessionSeries(MOVEMENT_ALIASES.bench[0])
    expect(live!.sessions).toBe(points.length)
    expect(live!.estimatedOneRm).toBe(points[points.length - 1].e1rm)
    expect(live!.delta).toBeCloseTo(points[points.length - 1].e1rm - points[0].e1rm)
    expect(live!.trend.length).toBe(points.length)
    expect(live!.totalSets).toBeGreaterThan(0)
    expect(live!.tonnage).toBeGreaterThan(0)
  })

  it('多别名动作（lat-pulldown）会合并同训练日并取最好的一条', () => {
    const live = movementLiveStats('lat-pulldown')
    expect(live).not.toBeNull()
    expect(live!.sessions).toBeGreaterThanOrEqual(2)
  })

  it('未知 id 返回 null', () => {
    expect(movementLiveStats('does-not-exist')).toBeNull()
  })
})

describe('allMovementTrends', () => {
  it('自动发现动作并按频次降序，别名归并为核心动作名', () => {
    const trends = allMovementTrends(3, 8)
    expect(trends.length).toBeGreaterThan(0)
    expect(trends.length).toBeLessThanOrEqual(8)
    for (const trend of trends) {
      expect(trend.points.length).toBeGreaterThanOrEqual(3)
      expect(trend.label).toBeTruthy()
      // 卧推别名应归并为「卧推」
      if (trend.key === MOVEMENT_ALIASES.bench[0]) expect(trend.label).toBe('卧推')
    }
    // 频次降序
    const counts = trends.map((trend) => trend.points.length)
    expect([...counts].sort((a, b) => b - a)).toEqual(counts)
  })
})
