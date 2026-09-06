// 本文件由 scripts/sync-xunji.mjs 自动生成，请勿手改。
// 数据来源：训记 App API（真实训练活动），最后同步时间见 xunjiLastSyncedAt。
export type XunjiActivity = {
  date: string
  type: string
  source: string
  durationMin: number | null
  distanceKm: number | null
  kcal: number | null
  startIso?: string
}

export type XunjiDaySummary = {
  date: string
  sessions: number
  durationMin: number
  kcal: number
  distanceKm: number
  types: string[]
}

export const xunjiLastSyncedAt = "2026-09-06T23:40:09.810Z"

export const xunjiStaleDates: string[] = ["2026-09-06"]

export const xunjiActivities: XunjiActivity[] = []

export const xunjiDaySummaries: XunjiDaySummary[] = []
