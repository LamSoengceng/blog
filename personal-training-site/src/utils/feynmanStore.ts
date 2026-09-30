// 费曼学习法：每道题保存用户「用自己的话讲解」的草稿与最近一次 AI 点评。
// 存浏览器 localStorage，key 为题目 slug。
export type FeynmanDraft = {
  text: string
  updatedAt: string
  feedback?: string
  feedbackAt?: string
  score?: number // 最近一次点评的费曼得分（1-5），复习调度用它加速间隔
  scoreAt?: string
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

// 模型评语里的「费曼得分：N/5」统一从这里解析，复习页与费曼页共用同一规则。
const SCORE_PATTERN = /费曼得分[:：]?\s*([1-5])\s*\/\s*5/

export const parseFeynmanScore = (feedback: string): number | null => {
  const matched = feedback.match(SCORE_PATTERN)?.[1]
  if (!matched) return null
  const score = Number(matched)
  return score >= 1 && score <= 5 ? score : null
}

// 某道题最近一次费曼检验得分；没讲过或没评估过返回 null
export const loadFeynmanScore = (slug: string): number | null => loadAll()[slug]?.score ?? null
