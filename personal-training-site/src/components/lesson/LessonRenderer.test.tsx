// @vitest-environment jsdom
import { afterEach, expect, it, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { lessons } from '../../data/lessons'
import { LessonRenderer } from './LessonRenderer'
import type { Lesson } from '../../data/lessons/types'

// 渲染测试用本地 fixture（完整讲义含正文与自测）；语料完整性测试走元数据（正文按需加载）。
const fixtureLesson: Lesson = {
  slug: 'fixture-lesson',
  title: '测试讲义： fixture',
  summary: '这是一篇用于渲染测试的讲义。',
  date: '2026-11-16',
  minutes: 3,
  tags: ['测试'],
  source: { platform: 'bilibili', author: '测试作者', videoId: '123', url: 'https://www.bilibili.com/video/123' },
  keyTerms: [{ term: 'Cerebro', text: '总控容器' }],
  sections: [
    { heading: '背景', blocks: [{ type: 'p', text: '背景段落' }, { type: 'mermaid', code: 'graph TD; A-->B' }] },
    { heading: '机制', blocks: [{ type: 'p', text: '机制段落' }] },
    { heading: '总结', blocks: [{ type: 'p', text: '总结段落' }] },
  ],
  quiz: [
    { q: '第一题', a: '答案一' },
    { q: '第二题', a: '答案二' },
  ],
}

vi.mock('./MermaidDiagram', () => ({
  MermaidDiagram: ({ code, title }: { code: string; title?: string }) =>
    <figure data-testid="mermaid-mock">{title}{code}</figure>,
}))

afterEach(cleanup)

it('讲义元数据至少包含一篇，字段完整', () => {
  expect(lessons.length).toBeGreaterThan(0)
  const slugs = new Set<string>()
  for (const item of lessons) {
    expect(item.slug).toMatch(/^[a-z0-9-]{1,60}$/)
    expect(slugs.has(item.slug)).toBe(false)
    slugs.add(item.slug)
    expect(item.title).toBeTruthy()
    expect(item.summary).toBeTruthy()
    expect(item.source.url.startsWith('https://')).toBe(true)
    expect(item.sections.length).toBeGreaterThanOrEqual(3)
    expect(item.quizCount).toBeGreaterThanOrEqual(2)
  }
})

it('渲染标题、术语卡片、小节正文与自测', () => {
  const lesson = fixtureLesson
  render(<LessonRenderer lesson={lesson} />)
  expect(screen.getByRole('heading', { name: lesson.title })).toBeTruthy()
  expect(screen.getByText(lesson.summary)).toBeTruthy()
  expect(screen.getByRole('heading', { name: '先认几个术语' })).toBeTruthy()
  for (const term of lesson.keyTerms.slice(0, 3)) expect(screen.getAllByText(term.term).length).toBeGreaterThan(0)
  for (const section of lesson.sections.slice(0, 3)) expect(screen.getByRole('heading', { name: section.heading })).toBeTruthy()
  expect(screen.getByRole('heading', { name: '理解自测' })).toBeTruthy()
  expect(screen.getByText(lesson.quiz[0].q)).toBeTruthy()
  expect(screen.getByText(lesson.quiz[0].a)).toBeTruthy()
  expect(screen.getByRole('link', { name: '观看原视频 ↗' }).getAttribute('href')).toBe(lesson.source.url)
})

it('mermaid 块懒加载渲染（测试环境走 mock）', () => {
  render(<LessonRenderer lesson={fixtureLesson} />)
  expect(screen.getAllByTestId('mermaid-mock').length).toBeGreaterThan(0)
})
