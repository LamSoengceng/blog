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

// 模型评语里的费曼得分统一从这里解析，复习页与费曼页共用同一规则。
// 优先识别结构化 JSON 行 {"score": N}（当前提示词要求的输出格式，机器可校验），
// 兼容旧版「费曼得分：N/5」自由文本（历史存档与旧提示词的评语）。
const SCORE_PATTERNS: RegExp[] = [
  /"score"\s*:\s*([1-5])(?=\s*[,}])/,
  /费曼得分[:：]?\s*([1-5])\s*\/\s*5/,
]

export const parseFeynmanScore = (feedback: string): number | null => {
  for (const pattern of SCORE_PATTERNS) {
    const matched = feedback.match(pattern)?.[1]
    if (matched) {
      const score = Number(matched)
      if (score >= 1 && score <= 5) return score
    }
  }
  return null
}

// 某道题最近一次费曼检验得分；没讲过或没评估过返回 null
export const loadFeynmanScore = (slug: string): number | null => loadAll()[slug]?.score ?? null
