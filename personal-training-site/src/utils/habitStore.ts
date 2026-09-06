// 习惯打卡：每天给若干习惯打勾，存浏览器 localStorage。
// 结构：{ 'YYYY-MM-DD': { habitId: true } }
export type Habit = { id: string; label: string }

export const habits: Habit[] = [
  { id: 'meditation', label: '冥想' },
  { id: 'reading', label: '阅读' },
  { id: 'exercise', label: '锻炼' },
  { id: 'sleep', label: '早睡' },
]

const STORAGE_KEY = 'habit-checkins-v1'

export type HabitCheckins = Record<string, Record<string, boolean>>

export const loadHabitCheckins = (): HabitCheckins => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    return typeof parsed === 'object' && parsed !== null ? parsed : {}
  } catch {
    return {}
  }
}

export const saveHabitCheckins = (checkins: HabitCheckins) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checkins))
  } catch {
    // localStorage 不可用（隐私模式等）时静默降级，仅本次会话有效
  }
}

export const toDateKey = (date: Date) => {
  const pad = (value: number) => String(value).padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

export const toggleHabit = (checkins: HabitCheckins, dateKey: string, habitId: string): HabitCheckins => {
  const next: HabitCheckins = { ...checkins, [dateKey]: { ...(checkins[dateKey] ?? {}) } }
  if (next[dateKey][habitId]) {
    delete next[dateKey][habitId]
  } else {
    next[dateKey][habitId] = true
  }
  if (Object.keys(next[dateKey]).length === 0) delete next[dateKey]
  return next
}

// 最近 N 天的日期键（含今天，从旧到新）
export const lastNDays = (n: number) => {
  const today = new Date()
  return Array.from({ length: n }, (_, index) => {
    const date = new Date(today)
    date.setDate(today.getDate() - (n - 1 - index))
    return toDateKey(date)
  })
}

// 从今天（或昨天，若今天未打卡）往回数的连续打卡天数
export const currentStreak = (checkins: HabitCheckins, habitId: string) => {
  const today = new Date()
  let streak = 0
  let cursor = new Date(today)
  if (!checkins[toDateKey(cursor)]?.[habitId]) {
    cursor.setDate(cursor.getDate() - 1)
  }
  while (checkins[toDateKey(cursor)]?.[habitId]) {
    streak += 1
    cursor.setDate(cursor.getDate() - 1)
  }
  return streak
}
