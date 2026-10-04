// 间隔复习调度（SM-2）：每题记录连续答对次数、易度因子与下次到期时间。
// SM-2 用质量分 q 驱动：q >= 3 记为一次成功并增长间隔（1 天 → 6 天 → 间隔×EF），
// q < 3 重置计数、间隔回到 1 天；每次复习都按公式微调 EF（下限 1.3）。
// 旧版 Leitner 条目（box/due）载入时自动迁移为等价的 SM-2 状态。
export type ReviewStatus = 'known' | 'again'

export type ReviewEntry = {
  status: ReviewStatus
  at: string
  repetitions: number // 连续答对次数（SM-2 的 n，答错清零）
  easeFactor: number // 易度因子 EF：初始 2.5，下限 1.3，答对/答错按质量分调整
  intervalDays: number // 当前排定的间隔（天）
  due: string
}

export type ReviewStore = Record<string, ReviewEntry>

const STORAGE_KEY = 'algorithm-review-v1'

// 费曼检验讲清楚过的分数线：达到即认为理解到位，按满分质量（q=5）计入调度
export const FEYNMAN_BOOST_SCORE = 4

// 旧 Leitner 档位间隔，仅用于把旧数据迁移成 SM-2 的 intervalDays
const LEGACY_INTERVALS = [1, 3, 7, 14, 30, 60]

const DAY_MS = 24 * 60 * 60 * 1000
const MIN_EASE_FACTOR = 1.3

const addDays = (days: number) => new Date(Date.now() + days * DAY_MS).toISOString()

export const loadReviewStore = (): ReviewStore => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw) as Record<string, Record<string, unknown>>
    const store: ReviewStore = {}
    for (const [slug, entry] of Object.entries(parsed)) {
      if (!entry?.status || (entry.status !== 'known' && entry.status !== 'again')) continue
      const box = typeof entry.box === 'number' ? entry.box : 0
      store[slug] = {
        status: entry.status,
        at: typeof entry.at === 'string' ? entry.at : new Date(0).toISOString(),
        // 旧数据没有 repetitions/intervalDays：按 Leitner 的 box 等价迁移
        repetitions: typeof entry.repetitions === 'number' ? entry.repetitions : box,
        easeFactor: typeof entry.easeFactor === 'number' ? entry.easeFactor : 2.5,
        intervalDays:
          typeof entry.intervalDays === 'number'
            ? entry.intervalDays
            : box >= 1
              ? LEGACY_INTERVALS[Math.min(box - 1, LEGACY_INTERVALS.length - 1)]
              : 0,
        due: typeof entry.due === 'string' ? entry.due : new Date(0).toISOString(),
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
    // localStorage 不可用（隐私模式等）时静默降级，仅本次会话内有效
  }
}

// 质量分映射：没记住 q=2（失败）；记住了 q=4；费曼得分 ≥ 分数线视为完美回忆 q=5。
// SM-2 间隔阶梯：第 1 次成功 1 天、第 2 次 6 天、之后 = round(上次间隔 × EF)。
export const recordReview = (
  store: ReviewStore,
  slug: string,
  status: ReviewStatus,
  feynmanScore?: number | null,
): ReviewStore => {
  const previous = store[slug]
  const now = new Date().toISOString()

  if (status === 'again') {
    const easeFactor = Math.max(
      MIN_EASE_FACTOR,
      (previous?.easeFactor ?? 2.5) + 0.1 - (5 - 2) * (0.08 + (5 - 2) * 0.02),
    )
    return {
      ...store,
      [slug]: { status, at: now, repetitions: 0, easeFactor, intervalDays: 1, due: addDays(1) },
    }
  }

  const quality = feynmanScore != null && feynmanScore >= FEYNMAN_BOOST_SCORE ? 5 : 4
  const repetitions = (previous?.repetitions ?? 0) + 1
  // 间隔用「本次更新前」的 EF 计算（SM-2 经典顺序），EF 更新供下次使用
  const previousEaseFactor = previous?.easeFactor ?? 2.5
  const easeFactor = Math.max(
    MIN_EASE_FACTOR,
    previousEaseFactor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02),
  )
  const intervalDays =
    repetitions === 1 ? 1 : repetitions === 2 ? 6 : Math.max(1, Math.round((previous?.intervalDays ?? 1) * previousEaseFactor))
  return {
    ...store,
    [slug]: { status, at: now, repetitions, easeFactor, intervalDays, due: addDays(intervalDays) },
  }
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

// 把 SM-2 状态映射回 1-6 的掌握档位（沿用旧「箱级」的展示口径，供年度回顾等统计）
export const masteryLevel = (entry: ReviewEntry): number => {
  if (entry.intervalDays >= 60) return 6
  if (entry.intervalDays >= 30) return 5
  if (entry.intervalDays >= 14) return 4
  if (entry.intervalDays >= 7) return 3
  if (entry.intervalDays >= 3) return 2
  if (entry.intervalDays >= 1) return 1
  return 0
}
