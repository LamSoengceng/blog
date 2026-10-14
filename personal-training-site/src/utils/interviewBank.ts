export type InterviewQuestion = { id: string; text: string; sourceTitle: string; sourceUrl: string; addedAt: string; category?: string; tags?: string[]; sourceIds?: string[]; answer?: string; answeredAt?: string; askedCount?: number }
export type InterviewSource = { id: string; title: string; url: string; text: string; addedAt: string }

const STORAGE_KEY = 'career-interview-questions-v1'
const SOURCE_KEY = 'career-interview-sources-v1'
const ORGANIZED_KEY = 'career-interview-organized-at-v1'

export function extractQuestions(raw: string): string[] {
  const lines = raw.split(/\r?\n/).map((line) => line.trim()).filter(Boolean)
  const found = lines.map((line) => line.replace(/^(?:[-*•]|\d+[.、)）])\s*/, '').trim())
    .filter((line) => /[?？]$/.test(line) || /^(?:请|如何|怎么|为什么|什么是|说说|介绍|解释|实现|设计|手写|谈谈|讲讲|区别|有哪些)/.test(line))
    .map((line) => line.slice(0, 240))
  return [...new Set(found)].slice(0, 40)
}

export function inferQuestionCategory(text: string): string {
  if (/项目|业务|实习|团队|协作|冲突|困难|经历|介绍自己|自我介绍|为什么选择/.test(text)) return '项目与表达'
  if (/算法|复杂度|二分|动态规划|链表|树|图|排序|数组|栈|队列|哈希|滑动窗口|回溯/.test(text)) return '算法与数据结构'
  if (/网络|TCP|HTTP|DNS|浏览器|进程|线程|锁|内存|操作系统|数据库|SQL|事务|索引/.test(text)) return '计算机基础'
  if (/React|Vue|前端|后端|接口|缓存|Redis|微服务|部署|架构|系统设计|设计一个/.test(text)) return '工程与设计'
  return '综合问题'
}

export function inferQuestionTags(text: string): string[] {
  const topics: [RegExp, string][] = [
    [/TCP|UDP|HTTP|DNS|网络/i, '计算机网络'], [/线程|进程|内存|锁|操作系统/, '操作系统'],
    [/数据库|SQL|事务|索引|MySQL/i, '数据库'], [/React|Vue|前端|浏览器/i, '前端'],
    [/Java|Spring|后端|接口|微服务/i, '后端'], [/缓存|Redis/i, '缓存'],
    [/动态规划|二分|链表|哈希|数组|树|图|排序|复杂度/, '算法'],
    [/项目|实习|协作|团队|自我介绍/, '项目表达'],
  ]
  return topics.filter(([pattern]) => pattern.test(text)).map(([, tag]) => tag).slice(0, 4)
}

export function normalizeQuestion(text: string): string {
  return text.toLowerCase().replace(/[\s，。,.!！?？:：；;（）()“”"'、]/g, '')
}

export function mergeInterviewSource(questions: InterviewQuestion[], source: InterviewSource): InterviewQuestion[] {
  const next = [...questions]
  const indexByText = new Map(next.map((question, index) => [normalizeQuestion(question.text), index]))
  for (const text of extractQuestions(source.text)) {
    const key = normalizeQuestion(text)
    const index = indexByText.get(key)
    if (index !== undefined) {
      const old = next[index]
      next[index] = { ...old, sourceIds: [...new Set([...(old.sourceIds || []), source.id])], category: old.category || inferQuestionCategory(text), tags: [...new Set([...(old.tags || []), ...inferQuestionTags(text)])] }
    } else {
      indexByText.set(key, next.length)
      next.push({ id: crypto.randomUUID(), text, sourceTitle: source.title, sourceUrl: source.url, addedAt: source.addedAt, category: inferQuestionCategory(text), tags: inferQuestionTags(text), sourceIds: [source.id], askedCount: 0 })
    }
  }
  return next
}

export function reorganizeInterviewQuestions(questions: InterviewQuestion[], sources: InterviewSource[]): InterviewQuestion[] {
  const appearances = new Map<string, string[]>()
  for (const source of sources) for (const text of extractQuestions(source.text)) {
    const key = normalizeQuestion(text)
    appearances.set(key, [...new Set([...(appearances.get(key) || []), source.id])])
  }
  return questions.map((question) => ({ ...question, category: inferQuestionCategory(question.text), tags: inferQuestionTags(`${question.text}\n${question.answer || ''}`), sourceIds: appearances.get(normalizeQuestion(question.text)) || question.sourceIds || [] }))
}

export function rankInterviewQuestions(questions: InterviewQuestion[], query: string, sort: 'hot' | 'new'): InterviewQuestion[] {
  const term = query.trim().toLowerCase()
  const relevance = (question: InterviewQuestion) => !term ? 0 :
    (question.text.toLowerCase().includes(term) ? 4 : 0) +
    (question.tags || []).filter((tag) => tag.toLowerCase().includes(term)).length * 3 +
    (question.sourceTitle.toLowerCase().includes(term) ? 2 : 0) +
    ((question.answer || '').toLowerCase().includes(term) ? 1 : 0)
  return questions.filter((question) => !term || [question.text, question.sourceTitle, ...(question.tags || []), question.answer || ''].some((value) => value.toLowerCase().includes(term)))
    .sort((a, b) => (term ? relevance(b) - relevance(a) : 0) || (sort === 'new' ? b.addedAt.localeCompare(a.addedAt) :
      ((b.sourceIds?.length || 1) - (a.sourceIds?.length || 1)) || ((b.askedCount || 0) - (a.askedCount || 0)) || b.addedAt.localeCompare(a.addedAt))
    )
}

export function loadInterviewQuestions(): InterviewQuestion[] {
  try {
    const data: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    return Array.isArray(data) ? data.filter((item): item is InterviewQuestion =>
      item && typeof item.id === 'string' && typeof item.text === 'string' && typeof item.sourceTitle === 'string' && typeof item.sourceUrl === 'string' && typeof item.addedAt === 'string') : []
  } catch { return [] }
}

export function saveInterviewQuestions(questions: InterviewQuestion[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(questions))
}

export function loadInterviewSources(): InterviewSource[] {
  try {
    const data: unknown = JSON.parse(localStorage.getItem(SOURCE_KEY) || '[]')
    return Array.isArray(data) ? data.filter((item): item is InterviewSource =>
      item && typeof item.id === 'string' && typeof item.title === 'string' && typeof item.url === 'string' && typeof item.text === 'string' && typeof item.addedAt === 'string') : []
  } catch { return [] }
}

export function saveInterviewSources(sources: InterviewSource[]) {
  localStorage.setItem(SOURCE_KEY, JSON.stringify(sources))
}

export function getLastOrganizedAt(): string {
  try { return localStorage.getItem(ORGANIZED_KEY) || '' } catch { return '' }
}
export function setLastOrganizedAt(date: string) { localStorage.setItem(ORGANIZED_KEY, date) }
export function isReorganizationDue(lastOrganizedAt: string, now = new Date()): boolean {
  if (!lastOrganizedAt) return true
  const then = new Date(lastOrganizedAt).getTime()
  return !Number.isFinite(then) || now.getTime() - then >= 30 * 24 * 60 * 60 * 1000
}

export function sourceUrl(value: string): string | null {
  if (!value.trim()) return ''
  try {
    const url = new URL(value.trim())
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : null
  } catch { return null }
}
