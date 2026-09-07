// 费曼练习记录：每次「讲述知识点 → 模型评估」沉淀一条记录，存浏览器 localStorage。
export type FeynmanRecord = {
  id: string
  topic: string
  createdAt: string // ISO
  text: string
  score: number | null // 1-5，未评估为 null
  feedback: string // 模型评语，未评估为空
  sourceNotes: boolean // 评估时是否附带了站内标准笔记
  sketch?: string // 小黑板草图（dataURL）
}

const STORAGE_KEY = 'feynman-records-v1'

export const loadFeynmanRecords = (): FeynmanRecord[] => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed)
      ? parsed.filter((record) => record?.id && typeof record?.topic === 'string')
      : []
  } catch {
    return []
  }
}

export const saveFeynmanRecords = (records: FeynmanRecord[]) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(records))
  } catch {
    // localStorage 不可用时静默降级，仅本次会话有效
  }
}

export const addFeynmanRecord = (
  records: FeynmanRecord[],
  draft: { topic: string; text: string; score: number | null; feedback: string; sourceNotes: boolean; sketch?: string },
): FeynmanRecord[] => [
  {
    id: `f-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    createdAt: new Date().toISOString(),
    ...draft,
  },
  ...records,
]

export const removeFeynmanRecord = (records: FeynmanRecord[], id: string): FeynmanRecord[] =>
  records.filter((record) => record.id !== id)

export const feynmanStats = (records: FeynmanRecord[]) => {
  const graded = records.filter((record) => record.score != null)
  const recent = graded.slice(0, 5).map((record) => record.score as number)
  const recentAvg = recent.length
    ? (recent.reduce((sum, value) => sum + value, 0) / recent.length).toFixed(1)
    : '--'
  return {
    total: records.length,
    avgScore: graded.length
      ? (graded.reduce((sum, record) => sum + (record.score ?? 0), 0) / graded.length).toFixed(1)
      : '--',
    recentAvg,
  }
}
