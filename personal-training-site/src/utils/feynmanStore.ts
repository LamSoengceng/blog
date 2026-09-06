// 费曼学习法：每道题保存用户「用自己的话讲解」的草稿与最近一次 AI 点评。
// 存浏览器 localStorage，key 为题目 slug。
export type FeynmanDraft = {
  text: string
  updatedAt: string
  feedback?: string
  feedbackAt?: string
}

const STORAGE_KEY = 'feynman-drafts-v1'

const loadAll = (): Record<string, FeynmanDraft> => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Record<string, FeynmanDraft>) : {}
  } catch {
    return {}
  }
}

export const loadFeynmanDraft = (slug: string): FeynmanDraft =>
  loadAll()[slug] ?? { text: '', updatedAt: '' }

export const saveFeynmanDraft = (slug: string, draft: FeynmanDraft) => {
  try {
    const all = loadAll()
    all[slug] = draft
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(all))
  } catch {
    // localStorage 不可用时静默降级，仅本次会话有效
  }
}

// 已完成费曼讲解的题目数（与算法复习池取交集时由调用方过滤）
export const countFeynmanDrafts = () =>
  Object.values(loadAll()).filter((draft) => draft.text.trim().length > 0).length
