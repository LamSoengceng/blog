// 轻量 BM25：为「问我的站」本地检索服务（几百条知识块量级，每次查询重算语料统计即可）。
// 相比旧的关键词命中计数，改进三点：
//   1. 词频饱和（k1）——同一词重复出现不会线性堆分；
//   2. 文档长度归一（b）——长文档不会因篇幅大而占便宜；
//   3. IDF 稀有词加权——「髋推」这类关键词比「训练」这种高频词更有区分度。
// 标题命中额外乘 TITLE_BOOST（与旧实现「标题命中 ×3」口径一致）。
// 分词与旧实现保持一致：整词 + 中文二元组。
export type Bm25Doc = {
  id: string
  title: string
  text: string
}

export type Bm25Stats = {
  avgLength: number
  idf: Map<string, number>
}

const K1 = 1.5
const B = 0.75
export const TITLE_BOOST = 3

// 中文友好的极简分词：查询词与文档统一用整词 + 二元组（字符类里 [ 无需转义，] 必须转义）
export const tokenize = (text: string): string[] => {
  const clean = text.replace(/[\s，。？?！、,.\-—:：；;（）()【】["'`\]]+/g, ' ').trim()
  if (!clean) return []
  const terms: string[] = []
  for (const word of clean.split(/\s+/)) {
    terms.push(word)
    for (let i = 0; i < word.length - 1; i += 1) {
      terms.push(word.slice(i, i + 2))
    }
  }
  return terms
}

const termCounts = (terms: string[]): Map<string, number> => {
  const counts = new Map<string, number>()
  for (const term of terms) counts.set(term, (counts.get(term) ?? 0) + 1)
  return counts
}

// 语料统计：平均长度 + 每个词的逆文档频率（IDF，平滑版避免 log(0)）
export const buildStats = (docs: Bm25Doc[]): Bm25Stats => {
  const lengths = docs.map((doc) => tokenize(doc.title).length + tokenize(doc.text).length)
  const avgLength = lengths.reduce((sum, length) => sum + length, 0) / Math.max(1, docs.length)
  const df = new Map<string, number>()
  for (const doc of docs) {
    const seen = new Set([...tokenize(doc.title), ...tokenize(doc.text)])
    for (const term of seen) df.set(term, (df.get(term) ?? 0) + 1)
  }
  const idf = new Map<string, number>()
  const total = Math.max(1, docs.length)
  for (const [term, count] of df) {
    idf.set(term, Math.log(1 + (total - count + 0.5) / (count + 0.5)))
  }
  return { avgLength, idf }
}

const scoreField = (
  queryTerms: string[],
  fieldTerms: string[],
  idf: Map<string, number>,
  avgLength: number,
  boost = 1,
): number => {
  if (!fieldTerms.length) return 0
  const counts = termCounts(fieldTerms)
  const length = fieldTerms.length
  let score = 0
  for (const term of new Set(queryTerms)) {
    const frequency = counts.get(term) ?? 0
    if (!frequency) continue
    const weight = idf.get(term) ?? 0
    const denominator = frequency + K1 * (1 - B + B * (length / Math.max(1, avgLength)))
    score += weight * ((frequency * (K1 + 1)) / denominator)
  }
  return score * boost
}

// 单文档 BM25 得分 = 标题字段（加权）× 正文字段
export const scoreDoc = (query: string, doc: Bm25Doc, stats: Bm25Stats): number => {
  const queryTerms = tokenize(query)
  if (!queryTerms.length) return 0
  return (
    scoreField(queryTerms, tokenize(doc.title), stats.idf, stats.avgLength, TITLE_BOOST) +
    scoreField(queryTerms, tokenize(doc.text), stats.idf, stats.avgLength)
  )
}
