// 面试官出题的知识池：站内内容（算法分类 / 训练动作档案 / 博客文章）
// + 用户资料库（localStorage，可粘贴文本或导入 .md/.txt，一份资料按小标题拆成多个知识点）。
// 每个知识点都携带「对照资料」，评估时随题附给模型当批改依据。
import { algorithmCategories, algorithmProblems } from '../data/algorithm'
import { insightByCategory } from '../data/categoryInsights'
import { blogPosts } from '../data/blogData'
import { movementHighlights } from '../data/fitnessData'

export type KnowledgeSource = '算法' | '训练' | '博客' | '资料库'

export type KnowledgePoint = {
  topic: string
  reference: string
  source: KnowledgeSource
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

// 一份资料拆成知识点：按 markdown 小标题（#/##/###）切分；没有标题就整篇算一个点。
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
      reference: clip(
        `用户资料《${doc.title}》相关段落：\n${(section.body.join('\n') || section.title).trim()}`,
      ),
      source: '资料库' as const,
    }))
  return points.length ? points : [{ topic: doc.title, reference: clip(`用户资料：\n${doc.text}`), source: '资料库' }]
}

const buildAlgorithmPoints = (): KnowledgePoint[] =>
  algorithmCategories.map((category) => {
    const insight = insightByCategory[category.name]
    const reference = insight
      ? `分类标准笔记——一句话：${insight.surface} 机制：${insight.mechanism} 常见理解缺口：${insight.implication}`
      : clip(
          algorithmProblems
            .filter((problem) => problem.category === category.name)
            .slice(0, 5)
            .map((problem) => `${problem.title}：${problem.thoughts[0] ?? ''}`)
            .join('；'),
          900,
        )
    return { topic: category.name, reference, source: '算法' as const }
  })

const buildMovementPoints = (): KnowledgePoint[] =>
  movementHighlights.map((movement) => ({
    topic: `${movement.label}（${movement.target}）`,
    reference: clip(
      `训练动作档案：${movement.label}，目标肌群 ${movement.target}，器械 ${movement.equipment}。` +
        `最佳成绩 ${movement.bestSet}（${movement.bestDate}），正式组 ${movement.totalSets} 组。` +
        `要点：${movement.cue}`,
      900,
    ),
    source: '训练',
  }))

const buildBlogPoints = (): KnowledgePoint[] =>
  blogPosts.map((post) => ({
    topic: post.title,
    reference: clip(
      `博客《${post.title}》：${post.subtitle} ${post.summary}` +
        post.sections.map((section) => ` ${section.heading}`).join('、'),
      900,
    ),
    source: '博客',
  }))

export const buildKnowledgePool = (docs: LibraryDoc[]): KnowledgePoint[] => [
  ...buildAlgorithmPoints(),
  ...buildMovementPoints(),
  ...buildBlogPoints(),
  ...docs.flatMap(splitDocIntoPoints),
]

export const pickRandomPoint = (pool: KnowledgePoint[], avoidTopic?: string): KnowledgePoint => {
  const candidates = pool.length > 1 && avoidTopic ? pool.filter((point) => point.topic !== avoidTopic) : pool
  return candidates[Math.floor(Math.random() * candidates.length)]
}
