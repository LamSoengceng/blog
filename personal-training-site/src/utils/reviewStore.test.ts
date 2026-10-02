import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  FEYNMAN_BOOST_SCORE,
  REVIEW_INTERVALS,
  buildDueQueue,
  countDueReviews,
  countDueWithinDay,
  loadReviewStore,
  recordReview,
  saveReviewStore,
  type ReviewStore,
} from './reviewStore'

// store 只在函数调用时访问 window.localStorage，用内存桩替换即可在 node 下测试
const memory = new Map<string, string>()
vi.stubGlobal('window', {
  localStorage: {
    getItem: (key: string) => memory.get(key) ?? null,
    setItem: (key: string, value: string) => void memory.set(key, value),
    removeItem: (key: string) => void memory.delete(key),
    clear: () => memory.clear(),
  },
})

const daysFromNow = (days: number) => new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString()
const daysAgo = (days: number) => daysFromNow(-days)

// recordReview 内部的 now 和断言处的 now 有毫秒级差，按「约等于 N 天后」比较
const expectDueInDays = (due: string, days: number) => {
  const diffDays = (new Date(due).getTime() - Date.now()) / (24 * 60 * 60 * 1000)
  expect(Math.abs(diffDays - days)).toBeLessThan(0.01)
}

const entry = (status: 'known' | 'again', dueDays: number, box = 0) => ({
  status,
  at: daysAgo(1),
  box,
  due: dueDays >= 0 ? daysFromNow(dueDays) : daysAgo(-dueDays),
})

describe('recordReview', () => {
  it('记住了：箱级 +1，间隔取阶梯第 1 档', () => {
    const next = recordReview({}, 'two-sum', 'known')
    expect(next['two-sum'].box).toBe(1)
    expectDueInDays(next['two-sum'].due, REVIEW_INTERVALS[0])
  })

  it(`费曼得分 ≥ ${FEYNMAN_BOOST_SCORE}：箱级 +2（加速一档）`, () => {
    const next = recordReview({}, 'two-sum', 'known', FEYNMAN_BOOST_SCORE)
    expect(next['two-sum'].box).toBe(2)
    expectDueInDays(next['two-sum'].due, REVIEW_INTERVALS[1])
  })

  it('费曼得分低于分数线：正常 +1', () => {
    const next = recordReview({}, 'two-sum', 'known', FEYNMAN_BOOST_SCORE - 1)
    expect(next['two-sum'].box).toBe(1)
    expectDueInDays(next['two-sum'].due, REVIEW_INTERVALS[0])
  })

  it('箱级到达阶梯顶端后：箱级继续累计，间隔封顶 60 天', () => {
    const store: ReviewStore = { 'two-sum': entry('known', 1, REVIEW_INTERVALS.length) }
    const next = recordReview(store, 'two-sum', 'known')
    expect(next['two-sum'].box).toBe(REVIEW_INTERVALS.length + 1)
    expectDueInDays(next['two-sum'].due, REVIEW_INTERVALS[REVIEW_INTERVALS.length - 1])
  })

  it('没记住：箱级清零，明天再来', () => {
    const store: ReviewStore = { 'two-sum': entry('known', 30, 4) }
    const next = recordReview(store, 'two-sum', 'again')
    expect(next['two-sum'].box).toBe(0)
    expectDueInDays(next['two-sum'].due, 1)
  })
})

describe('buildDueQueue', () => {
  it('到期题按最久未复习优先，未复习的新题按传入顺序排在其后', () => {
    const store: ReviewStore = {
      b: entry('known', -2, 1), // 最久到期
      a: entry('known', -1, 1),
      skip: entry('known', 5, 1), // 未到期，不进队
    }
    const queue = buildDueQueue(['fresh-2', 'b', 'skip', 'a', 'fresh-1'], store)
    expect(queue).toEqual(['b', 'a', 'fresh-2', 'fresh-1'])
  })
})

describe('countDueReviews / countDueWithinDay', () => {
  const store: ReviewStore = {
    past: entry('known', -1, 1),
    soon: entry('known', 0.5, 1),
    later: entry('known', 3, 1),
  }

  it('只统计已到期（含此刻）的题', () => {
    expect(countDueReviews(['past', 'soon', 'later', 'unknown'], store)).toBe(1)
  })

  it('未来 24 小时内到期计数，排除已过期与更晚的', () => {
    expect(countDueWithinDay(store)).toBe(1)
  })
})

describe('loadReviewStore 迁移与容错', () => {
  beforeEach(() => memory.clear())

  it('旧数据缺 box/due：迁移为箱 0、立即到期', () => {
    memory.set('algorithm-review-v1', JSON.stringify({ legacy: { status: 'known', at: '2026-01-01T00:00:00.000Z' } }))
    const store = loadReviewStore()
    expect(store.legacy).toEqual({
      status: 'known',
      at: '2026-01-01T00:00:00.000Z',
      box: 0,
      due: new Date(0).toISOString(),
    })
  })

  it('损坏的 JSON 返回空 store，不抛错', () => {
    memory.set('algorithm-review-v1', '{oops')
    expect(loadReviewStore()).toEqual({})
  })

  it('save 后 load 还原', () => {
    saveReviewStore({ 'two-sum': entry('known', 3, 2) })
    expect(loadReviewStore()['two-sum'].box).toBe(2)
  })
})
