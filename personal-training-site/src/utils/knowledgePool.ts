// 用户资料库：只负责本地文件/文本资料的存取与知识点拆分。
// 抽取池 = 上传资料 + 站内板块（面经题库、观澜讲义）；费曼页从这里随机抽取后让大模型评估。
import type { InterviewQuestion } from './interviewBank'

export type KnowledgePoint = {
  topic: string
  reference: string
  source: '资料库' | '面经题库' | '观澜讲义'
}

export type LibraryDoc = {
  id: string
  title: string
  text: string
  addedAt: string
}

const LIBRARY_KEY = 'feynman-library-v1'
const REFERENCE_CLIP = 1600

const clip = (text: string, max = REFERENCE_CLIP) => (text.length > max ? `${text.slice(0, max)}…` : text)

export const loadLibrary = (): LibraryDoc[] => {
  try {
    const raw = window.localStorage.getItem(LIBRARY_KEY)
    const parsed = raw ? (JSON.parse(raw) as LibraryDoc[]) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export const saveLibrary = (docs: LibraryDoc[]) => {
  try {
    window.localStorage.setItem(LIBRARY_KEY, JSON.stringify(docs))
  } catch {
    // localStorage 不可用时静默降级，仅本次会话有效
  }
}

export const addLibraryDoc = (docs: LibraryDoc[], title: string, text: string): LibraryDoc[] => {
  const next = [
    {
      id: crypto.randomUUID(),
      title: title.trim() || '未命名资料',
      text: text.trim(),
      addedAt: new Date().toISOString(),
    },
    ...docs,
  ]
  saveLibrary(next)
  return next
}

export const removeLibraryDoc = (docs: LibraryDoc[], id: string): LibraryDoc[] => {
  const next = docs.filter((doc) => doc.id !== id)
  saveLibrary(next)
  return next
}

// 一份资料按 markdown 小标题（#/##/###）切分；没有标题就整篇算一个知识点。
export const splitDocIntoPoints = (doc: LibraryDoc): KnowledgePoint[] => {
  const sections: { title: string; body: string[] }[] = []
  let current: { title: string; body: string[] } | null = null
  for (const line of doc.text.split(/\r?\n/)) {
    const heading = line.match(/^#{1,4}\s+(.+)/)
    if (heading) {
      current = { title: heading[1].trim(), body: [] }
      sections.push(current)
      continue
    }
    if (!current) {
      current = { title: doc.title, body: [] }
      sections.push(current)
    }
    current.body.push(line)
  }

  const points = sections
    .filter((section) => section.title || section.body.join('').trim())
    .map((section) => ({
      topic: section.title || doc.title,
      reference: clip(`用户资料《${doc.title}》相关段落：\n${(section.body.join('\n') || section.title).trim()}`),
      source: '资料库' as const,
    }))
  return points.length ? points : [{ topic: doc.title, reference: clip(`用户资料：\n${doc.text}`), source: '资料库' }]
}

export const buildKnowledgePool = (docs: LibraryDoc[]): KnowledgePoint[] => docs.flatMap(splitDocIntoPoints)

// 站内板块作为抽取来源：面经题库（题目 + 已生成的参考答案作对照）、观澜讲义（标题 + 摘要）。
export const buildSitePool = (
  questions: InterviewQuestion[],
  lessonPoints: { title: string; summary: string; tags: string[] }[],
): KnowledgePoint[] => [
  ...questions.map((question) => ({
    topic: question.text.replace(/[?？]\s*$/, '').slice(0, 60),
    reference: question.answer ? clip(`面经题库《${question.sourceTitle}》中这道题的参考答案：\n${question.answer}`) : '',
    source: '面经题库' as const,
  })),
  ...lessonPoints.map((lesson) => ({
    topic: lesson.title.slice(0, 60),
    reference: clip(`观澜讲义《${lesson.title}》要点：${lesson.summary}${lesson.tags.length ? `（${lesson.tags.join('、')}）` : ''}`),
    source: '观澜讲义' as const,
  })),
]

export const pickRandomPoint = (pool: KnowledgePoint[], avoidTopic?: string): KnowledgePoint => {
  const candidates = pool.length > 1 && avoidTopic ? pool.filter((point) => point.topic !== avoidTopic) : pool
  const randomValue = crypto.getRandomValues(new Uint32Array(1))[0]
  return candidates[randomValue % candidates.length]
}
