// 本文件由 scripts/generateAlgorithmData.mjs 自动生成，请勿手改。
export type AlgorithmProblem = {
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
  statement?: string
  solutionGuide: {
    idea: string
    interviewSteps: string[]
    complexity: string
    keyMistake: string
  }
  codePreview?: string
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
