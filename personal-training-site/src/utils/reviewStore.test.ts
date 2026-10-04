import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  FEYNMAN_BOOST_SCORE,
  buildDueQueue,
  countDueReviews,
  countDueWithinDay,
  loadReviewStore,
  masteryLevel,
  recordReview,
  saveReviewStore,
  type ReviewEntry,
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

const entry = (status: 'known' | 'again', dueDays: number, overrides: Partial<ReviewEntry> = {}): ReviewEntry => ({
  status,
  at: daysAgo(1),
  repetitions: 0,
  easeFactor: 2.5,
  intervalDays: 0,
  due: dueDays >= 0 ? daysFromNow(dueDays) : daysAgo(-dueDays),
  ...overrides,
})

describe('recordReview（SM-2）', () => {
  it('第一次记住：间隔 1 天，EF 保持 2.5', () => {
    const next = recordReview({}, 'two-sum', 'known')
    expect(next['two-sum'].repetitions).toBe(1)
    expect(next['two-sum'].easeFactor).toBe(2.5)
    expect(next['two-sum'].intervalDays).toBe(1)
    expectDueInDays(next['two-sum'].due, 1)
  })

  it('连续第二次记住：间隔 6 天（SM-2 固定阶梯）', () => {
    const store: ReviewStore = { 'two-sum': entry('known', 1, { repetitions: 1, intervalDays: 1 }) }
    const next = recordReview(store, 'two-sum', 'known')
    expect(next['two-sum'].repetitions).toBe(2)
    expect(next['two-sum'].intervalDays).toBe(6)
    expectDueInDays(next['two-sum'].due, 6)
  })

  it('第三次起间隔 = round(上次间隔 × EF)，q=4 时 EF 不变', () => {
    const store: ReviewStore = { 'two-sum': entry('known', 6, { repetitions: 2, intervalDays: 6 }) }
    const next = recordReview(store, 'two-sum', 'known')
    expect(next['two-sum'].intervalDays).toBe(15) // round(6 × 2.5)
    expect(next['two-sum'].easeFactor).toBe(2.5)
  })

  it(`费曼得分 ≥ ${FEYNMAN_BOOST_SCORE}：按 q=5 计入，EF 每次 +0.1，间隔增长更快`, () => {
    const first = recordReview({}, 'two-sum', 'known', FEYNMAN_BOOST_SCORE)
    expect(first['two-sum'].easeFactor).toBe(2.6)
    const second = recordReview(first, 'two-sum', 'known', FEYNMAN_BOOST_SCORE)
    expect(second['two-sum'].intervalDays).toBe(6)
    expect(second['two-sum'].easeFactor).toBe(2.7)
    const third = recordReview(second, 'two-sum', 'known', FEYNMAN_BOOST_SCORE)
    expect(third['two-sum'].intervalDays).toBe(16) // round(6 × 2.6)
  })

  it('费曼得分低于分数线：按 q=4 计入，EF 不变', () => {
    const next = recordReview({}, 'two-sum', 'known', FEYNMAN_BOOST_SCORE - 1)
    expect(next['two-sum'].easeFactor).toBe(2.5)
    expect(next['two-sum'].intervalDays).toBe(1)
  })

  it('没记住：计数清零、间隔回 1 天、EF 下调', () => {
    const store: ReviewStore = {
      'two-sum': entry('known', 30, { repetitions: 4, intervalDays: 14, easeFactor: 2.5 }),
    }
    const next = recordReview(store, 'two-sum', 'again')
    expect(next['two-sum'].repetitions).toBe(0)
    expect(next['two-sum'].intervalDays).toBe(1)
    expect(next['two-sum'].easeFactor).toBeCloseTo(2.18)
    expectDueInDays(next['two-sum'].due, 1)
  })

  it('连续答错：EF 触底下限 1.3', () => {
    let store: ReviewStore = {}
    for (let i = 0; i < 5; i += 1) store = recordReview(store, 'two-sum', 'again')
    expect(store['two-sum'].easeFactor).toBe(1.3)
  })

  it('已进长间隔的题继续答对：间隔按 EF 增长', () => {
    const store: ReviewStore = {
      'two-sum': entry('known', 14, { repetitions: 3, intervalDays: 15, easeFactor: 2.5 }),
    }
    const next = recordReview(store, 'two-sum', 'known')
    expect(next['two-sum'].intervalDays).toBe(38) // round(15 × 2.5)
    expect(next['two-sum'].repetitions).toBe(4)
  })
})

describe('masteryLevel', () => {
  it.each([
    [0, 0],
    [1, 1],
    [6, 2],
    [10, 3],
    [14, 4],
    [29, 4],
    [30, 5],
    [59, 5],
    [60, 6],
    [120, 6],
  ])('间隔 %i 天 → 掌握档位 %i', (intervalDays, level) => {
    expect(masteryLevel(entry('known', 1, { intervalDays }))).toBe(level)
  })
})

describe('buildDueQueue', () => {
  it('到期题按最久未复习优先，未复习的新题按传入顺序排在其后', () => {
    const store: ReviewStore = {
      b: entry('known', -2, { intervalDays: 30 }), // 最久到期
      a: entry('known', -1, { intervalDays: 14 }),
      skip: entry('known', 5, { intervalDays: 7 }), // 未到期，不进队
    }
    const queue = buildDueQueue(['fresh-2', 'b', 'skip', 'a', 'fresh-1'], store)
    expect(queue).toEqual(['b', 'a', 'fresh-2', 'fresh-1'])
  })
})

describe('countDueReviews / countDueWithinDay', () => {
  const store: ReviewStore = {
    past: entry('known', -1),
    soon: entry('known', 0.5),
    later: entry('known', 3),
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

  it('旧 Leitner 数据（box/due）迁移为等价的 SM-2 状态', () => {
    memory.set(
      'algorithm-review-v1',
      JSON.stringify({
        legacy: { status: 'known', at: '2026-01-01T00:00:00.000Z', box: 4, due: '2026-10-20T00:00:00.000Z' },
      }),
    )
    const store = loadReviewStore()
    expect(store.legacy).toEqual({
      status: 'known',
      at: '2026-01-01T00:00:00.000Z',
      repetitions: 4,
      easeFactor: 2.5,
      intervalDays: 14, // box 4 → 旧档位第 4 档（14 天）
      due: '2026-10-20T00:00:00.000Z',
    })
  })

  it('旧数据缺字段：迁移为立即到期、从零开始', () => {
    memory.set('algorithm-review-v1', JSON.stringify({ legacy: { status: 'known', at: '2026-01-01T00:00:00.000Z' } }))
    const store = loadReviewStore()
    expect(store.legacy).toEqual({
      status: 'known',
      at: '2026-01-01T00:00:00.000Z',
      repetitions: 0,
      easeFactor: 2.5,
      intervalDays: 0,
      due: new Date(0).toISOString(),
    })
  })

  it('非法 status 的条目被跳过', () => {
    memory.set('algorithm-review-v1', JSON.stringify({ bad: { status: 'weird', at: 'x' } }))
    expect(loadReviewStore()).toEqual({})
  })

  it('损坏的 JSON 返回空 store，不抛错', () => {
    memory.set('algorithm-review-v1', '{oops')
    expect(loadReviewStore()).toEqual({})
  })

  it('save 后 load 还原', () => {
    saveReviewStore({ 'two-sum': entry('known', 3, { repetitions: 2, intervalDays: 6 }) })
    expect(loadReviewStore()['two-sum'].repetitions).toBe(2)
  })
})
