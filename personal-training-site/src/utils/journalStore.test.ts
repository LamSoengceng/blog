// @vitest-environment jsdom
import { expect, it } from 'vitest'
import {
  addJournalEntry,
  loadJournal,
  removeJournalEntry,
  saveJournal,
  updateJournalEntry,
  type JournalEntry,
} from './journalStore'

const seed = (): JournalEntry[] => [
  { id: 'j-1', createdAt: '2026-11-09T08:30:00.000Z', kind: '随笔', mood: 3, title: '早课', body: '卧推 5x5' },
  { id: 'j-2', createdAt: '2026-11-08T22:00:00.000Z', kind: '内心', mood: 4, title: '睡前', body: '今天状态不错' },
]

it('新增条目排在最前且带上时间戳 id', () => {
  const next = addJournalEntry(seed(), { kind: '身体', mood: 5, title: '', body: '跑步十公里' })
  expect(next).toHaveLength(3)
  expect(next[0].body).toBe('跑步十公里')
  expect(next[0].title).toBe('') // store 只透传，空标题由调用方补
  expect(next[0].id).toMatch(/^j-/)
  expect(next[0].updatedAt).toBeUndefined()
})

it('编辑只覆盖传入字段，createdAt 保留并记录 updatedAt', () => {
  const before = new Date()
  const next = updateJournalEntry(seed(), 'j-2', { mood: 2, body: '其实有点疲惫' })
  const edited = next.find((entry) => entry.id === 'j-2')
  expect(edited?.mood).toBe(2)
  expect(edited?.body).toBe('其实有点疲惫')
  expect(edited?.title).toBe('睡前')
  expect(edited?.kind).toBe('内心')
  expect(edited?.createdAt).toBe('2026-11-08T22:00:00.000Z')
  expect(edited?.updatedAt).toBeDefined()
  expect(new Date(edited!.updatedAt!).getTime()).toBeGreaterThanOrEqual(before.getTime() - 1000)
  // 未编辑的条目不动
  expect(next[0].updatedAt).toBeUndefined()
})

it('编辑不存在的 id 是无害 no-op', () => {
  const before = seed()
  const next = updateJournalEntry(before, 'missing', { title: 'x' })
  expect(next).toHaveLength(2)
  expect(next).toEqual(before)
})

it('改日期由调用方经 patch 传入 createdAt', () => {
  const next = updateJournalEntry(seed(), 'j-1', { createdAt: '2026-11-01T08:30:00.000Z' })
  expect(next[0].createdAt).toBe('2026-11-01T08:30:00.000Z')
})

it('删除与持久化往返', () => {
  const removed = removeJournalEntry(seed(), 'j-1')
  expect(removed.map((entry) => entry.id)).toEqual(['j-2'])
  saveJournal(removed)
  expect(loadJournal().map((entry) => entry.id)).toEqual(['j-2'])
})
