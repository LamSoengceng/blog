import { describe, expect, it } from 'vitest'
import { buildStats, scoreDoc, tokenize, type Bm25Doc } from './bm25'

const doc = (id: string, title: string, text: string): Bm25Doc => ({ id, title, text })

const corpus: Bm25Doc[] = [
  doc('squat', '深蹲', '深蹲要膝盖对准脚尖方向，核心收紧，杠铃压在斜方肌上。'),
  doc('bench', '卧推', '卧推肩胛骨后缩下沉，杠铃下放到胸口，小臂垂直地面。'),
  doc('hip', '髋推', '髋推顶峰收缩，臀部完全伸展，不要用腰代偿。'),
  doc('algo', '算法复习', '双指针、二分、动态规划是算法复习的常见分类。'),
  doc('journal-1', '日记 2026-10-01', '今天练了深蹲和卧推，状态一般。'),
]

const stats = buildStats(corpus)

describe('tokenize', () => {
  it('整词 + 中文二元组，标点被清洗', () => {
    expect(tokenize('深蹲')).toEqual(['深蹲', '深蹲'])
    expect(tokenize('今天，深蹲了')).toEqual(['今天', '今天', '深蹲了', '深蹲', '蹲了'])
  })

  it('空文本返回空数组', () => {
    expect(tokenize('')).toEqual([])
    expect(tokenize('   ，。  ')).toEqual([])
  })
})

describe('scoreDoc', () => {
  it('关键词命中的文档得分 > 0，无关文档为 0', () => {
    const hit = scoreDoc('深蹲', corpus[0], stats)
    expect(hit).toBeGreaterThan(0)
    expect(scoreDoc('深蹲', corpus[2], stats)).toBe(0)
  })

  it('稀有词（IDF）比高频词更有区分度', () => {
    const rare = scoreDoc('髋推', corpus[2], stats)
    const common = scoreDoc('训练', corpus[0], stats)
    expect(rare).toBeGreaterThan(common)
  })

  it('标题命中比正文命中更值钱（TITLE_BOOST）', () => {
    const titleHit = scoreDoc('深蹲', corpus[0], stats)
    const bodyOnly = scoreDoc('深蹲', corpus[4], stats)
    expect(titleHit).toBeGreaterThan(bodyOnly)
  })

  it('长文档不因篇幅占便宜（长度归一）', () => {
    const padded: Bm25Doc = { id: 'pad', title: '无关标题', text: '深蹲 '.repeat(50).trim() }
    const paddedStats = buildStats([...corpus, padded])
    expect(scoreDoc('深蹲', corpus[0], paddedStats)).toBeGreaterThan(scoreDoc('深蹲', padded, paddedStats))
  })

  it('空查询得 0 分', () => {
    expect(scoreDoc('   ', corpus[0], stats)).toBe(0)
  })
})

describe('buildStats', () => {
  it('只有一种文档的词 IDF 更高（更稀有）', () => {
    const single = buildStats([doc('a', '唯一', '唯一词 髋推')])
    expect(single.idf.get('髋推')).toBeGreaterThan(0)
  })

  it('出现在所有文档里的词 IDF 接近 0', () => {
    const universal = buildStats(corpus.map((c) => doc(c.id, c.title, `${c.text} 训练`)))
    expect(universal.idf.get('训练')).toBeLessThanOrEqual(0.7)
  })
})
