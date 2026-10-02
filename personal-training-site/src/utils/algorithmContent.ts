// 算法题的题面/代码不在轻量索引里，按类别文件动态加载，和索引合并成完整题目。
// 结果按 slug 缓存：同一次会话里复习页/详情页反复切题不会重复请求。
import { algorithmProblems, categorySlugs, type AlgorithmProblem } from '../data/algorithm'

type ProblemContent = { codePreview?: string; statement?: string }

const contentCache = new Map<string, Promise<AlgorithmProblem | null>>()

export const loadAlgorithmContent = (slug: string): Promise<AlgorithmProblem | null> => {
  const cached = contentCache.get(slug)
  if (cached) return cached

  const summary = algorithmProblems.find((item) => item.slug === slug)
  if (!summary) return Promise.resolve(null)

  const fileSlug = categorySlugs[summary.category]
  const pending = fileSlug
    ? import(`../data/algorithm/problems/${fileSlug}.ts`)
        .then((module: { categoryContent: Record<string, ProblemContent> }) => {
          const content = module.categoryContent[slug]
          return content ? { ...summary, ...content } : summary
        })
        .catch(() => summary)
    : Promise.resolve(summary)

  contentCache.set(slug, pending)
  return pending
}
