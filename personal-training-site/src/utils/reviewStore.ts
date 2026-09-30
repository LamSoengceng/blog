// 间隔复习调度（Leitner 记忆箱）：记录每道题的掌握箱级与下次到期时间。
// 旧版存储条目没有 box/due 字段，载入时自动迁移为「立即到期」。
export type ReviewStatus = 'known' | 'again'

export type ReviewEntry = {
  status: ReviewStatus
  at: string
  box: number
  due: string
}

export type ReviewStore = Record<string, ReviewEntry>

const STORAGE_KEY = 'algorithm-review-v1'

// 记住了的间隔阶梯（天）：连对次数越多，间隔越长
export const REVIEW_INTERVALS = [1, 3, 7, 14, 30, 60]

// 费曼检验讲清楚过的分数线：达到即认为理解到位，间隔加速一档
export const FEYNMAN_BOOST_SCORE = 4

const DAY_MS = 24 * 60 * 60 * 1000

const addDays = (days: number) => new Date(Date.now() + days * DAY_MS).toISOString()

export const loadReviewStore = (): ReviewStore => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw) as Record<string, Partial<ReviewEntry> & { status?: ReviewStatus }>
    const store: ReviewStore = {}
    for (const [slug, entry] of Object.entries(parsed)) {
      if (!entry?.status) continue
      store[slug] = {
        status: entry.status,
        at: entry.at ?? new Date(0).toISOString(),
        box: entry.box ?? 0,
        // 旧数据没有 due：立即到期
        due: entry.due ?? new Date(0).toISOString(),
      }
    }
    return store
  } catch {
    return {}
  }
}

export const saveReviewStore = (store: ReviewStore) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store))
  } catch {
    // localStorage 不可用（隐私模式等）时静默降级，仅本次会话内生效
  }
}

// feynmanScore 为本题最近一次费曼检验得分（1-5），达到 FEYNMAN_BOOST_SCORE 时升级加速一档。
export const recordReview = (
  store: ReviewStore,
  slug: string,
  status: ReviewStatus,
  feynmanScore?: number | null,
): ReviewStore => {
  const previous = store[slug]
  const next: ReviewEntry =
    status === 'known'
      ? (() => {
          const box = previous?.box ?? 0
          const step = feynmanScore != null && feynmanScore >= FEYNMAN_BOOST_SCORE ? 2 : 1
          const interval = REVIEW_INTERVALS[Math.min(box + step - 1, REVIEW_INTERVALS.length - 1)]
          return { status, at: new Date().toISOString(), box: box + step, due: addDays(interval) }
        })()
      : { status, at: new Date().toISOString(), box: 0, due: addDays(1) }
  return { ...store, [slug]: next }
}

// 到期题目：按最久未复习优先；从未复习过的排在其后（保持传入 pool 的顺序）
export const buildDueQueue = (pool: string[], store: ReviewStore) => {
  const now = Date.now()
  const due = pool
    .filter((slug) => store[slug] && new Date(store[slug].due).getTime() <= now)
    .sort((first, second) => new Date(store[first].due).getTime() - new Date(store[second].due).getTime())
  const dueSet = new Set(due)
  const fresh = pool.filter((slug) => !store[slug] && !dueSet.has(slug))
  return [...due, ...fresh]
}

export const countDueReviews = (pool: string[], store: ReviewStore) => {
  const now = Date.now()
  return pool.filter((slug) => {
    const entry = store[slug]
    return entry && new Date(entry.due).getTime() <= now
  }).length
}

// 未来 24 小时内到期的题数（用于完成页提示）
export const countDueWithinDay = (store: ReviewStore) => {
  const now = Date.now()
  const horizon = now + DAY_MS
  return Object.values(store).filter((entry) => {
    const due = new Date(entry.due).getTime()
    return due > now && due <= horizon
  }).length
}
