// @vitest-environment jsdom
import { afterEach, expect, it, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { lessons } from '../../data/lessons'
import { LessonRenderer } from './LessonRenderer'

vi.mock('./MermaidDiagram', () => ({
  MermaidDiagram: ({ code, title }: { code: string; title?: string }) =>
    <figure data-testid="mermaid-mock">{title}{code}</figure>,
}))

afterEach(cleanup)

it('课程数据至少包含一篇，字段完整', () => {
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
    expect(item.quiz.length).toBeGreaterThanOrEqual(2)
  }
})

it('渲染标题、术语卡片、小节正文与自测', () => {
  const lesson = lessons[0]
  render(<LessonRenderer lesson={lesson} />)
  expect(screen.getByRole('heading', { name: lesson.title })).toBeTruthy()
  expect(screen.getByText(lesson.summary)).toBeTruthy()
  expect(screen.getByRole('heading', { name: '先认几个术语' })).toBeTruthy()
  for (const term of lesson.keyTerms.slice(0, 3)) expect(screen.getByText(term.term)).toBeTruthy()
  for (const section of lesson.sections.slice(0, 3)) expect(screen.getByRole('heading', { name: section.heading })).toBeTruthy()
  expect(screen.getByRole('heading', { name: '理解自测' })).toBeTruthy()
  expect(screen.getByText(lesson.quiz[0].q)).toBeTruthy()
  expect(screen.getByText(lesson.quiz[0].a)).toBeTruthy()
  expect(screen.getByRole('link', { name: '观看原视频 ↗' }).getAttribute('href')).toBe(lesson.source.url)
})

it('mermaid 块懒加载渲染（测试环境走 mock）', () => {
  const lesson = lessons.find((item) => item.sections.some((section) => section.blocks.some((block) => block.type === 'mermaid'))) ?? lessons[0]
  render(<LessonRenderer lesson={lesson} />)
  expect(screen.getAllByTestId('mermaid-mock').length).toBeGreaterThan(0)
})