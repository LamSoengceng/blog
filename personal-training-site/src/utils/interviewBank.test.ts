// @vitest-environment jsdom
import { beforeEach, describe, expect, it } from 'vitest'
import { extractQuestions, inferQuestionCategory, isReorganizationDue, loadInterviewQuestions, mergeInterviewSource, rankInterviewQuestions, reorganizeInterviewQuestions, saveInterviewQuestions, sourceUrl } from './interviewBank'

describe('面经题库', () => {
  beforeEach(() => localStorage.clear())

  it('从笔记中提取问题并去重，保留原问题文本', () => {
    expect(extractQuestions('面试记录\n1. 什么是 TCP 三次握手？\n- 如何设计缓存系统？\n什么是 TCP 三次握手？\n感受：有点紧张')).toEqual([
      '什么是 TCP 三次握手？', '如何设计缓存系统？',
    ])
  })

  it('把 OCR 挤在一行的多个问题按序号和问号分点提取', () => {
    expect(extractQuestions('一面记录 1. 什么是 TCP 三次握手？2、如何设计缓存系统？3. 说说事件循环。4. 聊聊项目')).toEqual([
      '什么是 TCP 三次握手？', '如何设计缓存系统？', '说说事件循环。',
    ])
    expect(extractQuestions('补充：浮点数 3.5 不能精确表示\n为什么需要三次握手？原因是防止旧连接')).toEqual(['为什么需要三次握手？'])
  })

  it('只接受网页来源并能恢复本地题库', () => {
    expect(sourceUrl('javascript:alert(1)')).toBeNull()
    expect(sourceUrl('https://www.xiaohongshu.com/explore/123')).toBe('https://www.xiaohongshu.com/explore/123')
    const item = { id: 'q1', text: '什么是闭包？', sourceTitle: '前端面经', sourceUrl: '', addedAt: '2026-10-14' }
    saveInterviewQuestions([item])
    expect(loadInterviewQuestions()).toEqual([item])
  })

  it('将软件开发校招问题归入可浏览的主题', () => {
    expect(inferQuestionCategory('TCP 三次握手为什么需要三次？')).toBe('计算机基础')
    expect(inferQuestionCategory('如何设计一个缓存系统？')).toBe('工程与设计')
    expect(inferQuestionCategory('讲讲你的项目经历')).toBe('项目与表达')
  })

  it('合并重复面经来源，保留已生成答案，并按出现次数排序', () => {
    const first = { id: 's1', title: '一面', url: '', text: '什么是 TCP 三次握手？\n如何设计缓存？', addedAt: '2026-10-01' }
    const second = { id: 's2', title: '二面', url: '', text: '什么是 TCP 三次握手？', addedAt: '2026-10-02' }
    const initial = mergeInterviewSource([], first).map((item) => item.text.includes('TCP') ? { ...item, answer: '已保存答案' } : item)
    const merged = mergeInterviewSource(initial, second)
    expect(merged).toHaveLength(2)
    expect(rankInterviewQuestions(merged, '', 'hot')[0].sourceIds).toEqual(['s1', 's2'])
    expect(reorganizeInterviewQuestions(merged, [first, second])[0].answer).toBe('已保存答案')
  })

  it('整理满 30 天时提示重新整理', () => {
    expect(isReorganizationDue('2026-09-01', new Date('2026-10-14'))).toBe(true)
    expect(isReorganizationDue('2026-10-01', new Date('2026-10-14'))).toBe(false)
  })
})
