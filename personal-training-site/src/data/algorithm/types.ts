// 本文件由 scripts/generateAlgorithmData.mjs 自动生成，请勿手改。
// AlgorithmProblemSummary 是列表/索引用的轻量类型（不含题面与代码），
// 完整内容（codePreview/statement）按需从 problems/*.ts 动态加载。
export type AlgorithmProblemSummary = {
  id: string
  slug: string
  title: string
  titleEn?: string
  category: string
  difficulty: string
  topic: string
  completed: boolean
  leetcodeSlug?: string
  leetcodeUrl?: string
  nowcoderUrl?: string
  acceptanceRate?: number
  solutionCount?: number
  companyTagCount?: number
  paidOnly?: boolean
  sourceBanks: string[]
  tags: string[]
  sourcePath?: string
  lastUpdated?: string
  lastUpdatedAt?: string
  interviewPattern: string
  thoughts: string[]
  pitfalls: string[]
  recallBlanks: { prompt: string; answer: string }[]
  keyPoints?: string[]
  ask?: string
  constraints?: string[]
  solutionGuide: {
    idea: string
    interviewSteps: string[]
    complexity: string
    keyMistake: string
  }
}

export type AlgorithmProblem = AlgorithmProblemSummary & {
  codePreview?: string
  statement?: string
}

export type AlgorithmCategory = {
  name: string
  total: number
  solved: number
  hard: number
}

export type AlgorithmReviewItem = {
  id: string
  title: string
  slug: string
  reason: string
}

export type AlgorithmRecentItem = {
  id: string
  slug: string
  title: string
  category: string
  difficulty: string
  topic: string
  tags: string[]
  sourcePath?: string
  lastUpdated?: string
  leetcodeUrl?: string
  codePreview: string
}
