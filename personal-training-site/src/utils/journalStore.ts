// 用户手写的日记：存浏览器 localStorage，纯本地，不上传。
// 与结构化的训练日志（diaryData.ts）分开：这里是真正的自由书写。
export type JournalKind = '随笔' | '身体' | '内心'

export type JournalEntry = {
  id: string
  createdAt: string // ISO
  kind: JournalKind
  mood: number // 1-5
  title: string
  body: string
}

const STORAGE_KEY = 'journal-entries-v1'

export const journalKinds: JournalKind[] = ['随笔', '身体', '内心']

export const moodLabels = ['低落', '一般', '平静', '不错', '很好']

export const loadJournal = (): JournalEntry[] => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter((entry) => entry?.id && typeof entry?.body === 'string')
  } catch {
    return []
  }
}

export const saveJournal = (entries: JournalEntry[]) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
  } catch {
    // localStorage 不可用（隐私模式等）时静默降级，仅本次会话有效
  }
  // 通知同页的心情曲线等只读消费者刷新（它们与日记编辑器是兄弟组件）
  window.dispatchEvent(new Event('journal-changed'))
}

export const onJournalChange = (callback: () => void) => {
  window.addEventListener('journal-changed', callback)
  return () => window.removeEventListener('journal-changed', callback)
}

export const addJournalEntry = (
  entries: JournalEntry[],
  draft: { kind: JournalKind; mood: number; title: string; body: string },
): JournalEntry[] => {
  const entry: JournalEntry = {
    id: `j-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    createdAt: new Date().toISOString(),
    ...draft,
  }
  return [entry, ...entries]
}

export const removeJournalEntry = (entries: JournalEntry[], id: string): JournalEntry[] =>
  entries.filter((entry) => entry.id !== id)

export const todayInputValue = () => {
  const now = new Date()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${now.getFullYear()}-${month}-${day}`
}

export const formatJournalDate = (iso: string) => {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return iso
  const pad = (value: number) => String(value).padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`
}
