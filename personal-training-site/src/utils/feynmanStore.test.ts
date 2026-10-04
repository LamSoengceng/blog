import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  countFeynmanDrafts,
  loadFeynmanDraft,
  loadFeynmanScore,
  parseFeynmanScore,
  saveFeynmanDraft,
  type FeynmanDraft,
} from './feynmanStore'

// store 只在函数调用时访问 window.localStorage，用内存桩替换即可在 node 下测试
const memory = new Map<string, string>()
vi.stubGlobal('window', {
  localStorage: {
    getItem: (key: string) => memory.get(key) ?? null,
    setItem: (key: string, value: string) => void memory.set(key, value),
    removeItem: (key: string) => void memory.delete(key),
    clear: () => memory.clear(),
  },
})

beforeEach(() => memory.clear())

describe('parseFeynmanScore', () => {
  it.each([
    ['……总结得不错。\n{"score": 4}', 4],
    ['{"score":5}', 5],
    ['{"score": 3, "note": "保持"}', 3],
    ['评语结束\n{"score": 2}', 2],
    ['……总结得不错。费曼得分：4/5', 4],
    ['费曼得分: 5/5', 5],
    ['费曼得分3/5', 3],
    ['费曼得分： 1 / 5', 1],
  ])('解析「%s」为 %i', (feedback, expected) => {
    expect(parseFeynmanScore(feedback)).toBe(expected)
  })

  it.each([
    '没有得分行',
    '费曼得分：6/5',
    '费曼得分：0/5',
    '费曼得分：/5',
    '{"score": 6}',
    '{"score": 4.5}',
    '{"score": 0}',
  ])('无法解析「%s」返回 null', (feedback) => {
    expect(parseFeynmanScore(feedback)).toBeNull()
  })
})

describe('草稿存取', () => {
  it('未存过的 slug 返回空白草稿', () => {
    expect(loadFeynmanDraft('two-sum')).toEqual({ text: '', updatedAt: '' })
  })

  it('保存后原样读回', () => {
    const draft: FeynmanDraft = { text: '用哈希表存补数', updatedAt: '2026-10-02T00:00:00.000Z', score: 4 }
    saveFeynmanDraft('two-sum', draft)
    expect(loadFeynmanDraft('two-sum')).toEqual(draft)
  })

  it('不同 slug 互不覆盖', () => {
    saveFeynmanDraft('a', { text: 'A', updatedAt: '' })
    saveFeynmanDraft('b', { text: 'B', updatedAt: '' })
    expect(loadFeynmanDraft('a').text).toBe('A')
  })
})

describe('统计', () => {
  it('countFeynmanDrafts 只数有内容的草稿', () => {
    saveFeynmanDraft('a', { text: '讲解内容', updatedAt: '' })
    saveFeynmanDraft('b', { text: '   ', updatedAt: '' })
    expect(countFeynmanDrafts()).toBe(1)
  })

  it('loadFeynmanScore：有分返回分数，没讲过返回 null', () => {
    saveFeynmanDraft('a', { text: 'x', updatedAt: '', score: 5 })
    expect(loadFeynmanScore('a')).toBe(5)
    expect(loadFeynmanScore('never')).toBeNull()
  })
})
