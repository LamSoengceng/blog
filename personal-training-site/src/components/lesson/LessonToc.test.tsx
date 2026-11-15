// @vitest-environment jsdom
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { LessonToc } from './LessonToc'
import { lessonTocItems } from './lessonTocItems'
import type { Lesson } from '../../data/lessons/types'

// 完整讲义 fixture（正文按需加载后，语料不再是渲染测试的输入）
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
    { heading: '背景', blocks: [{ type: 'p', text: '背景段落' }] },
    { heading: '机制', blocks: [{ type: 'p', text: '机制段落' }] },
    { heading: '总结', blocks: [{ type: 'p', text: '总结段落' }] },
  ],
  quiz: [
    { q: '第一题', a: '答案一' },
    { q: '第二题', a: '答案二' },
  ],
}

// jsdom 没有 scrollIntoView，补空实现（目录点击会用）
beforeEach(() => {
  if (!Element.prototype.scrollIntoView) Element.prototype.scrollIntoView = () => { }
  vi.spyOn(Element.prototype, 'scrollIntoView').mockImplementation(() => { })
})
afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
})

it('目录条目覆盖术语、各小节标题与自测', () => {
  const lesson = fixtureLesson
  const items = lessonTocItems(lesson)
  expect(items[0]).toEqual({ id: 'lesson-keyterms', label: '先认几个术语' })
  expect(items.at(-1)).toEqual({ id: 'lesson-quiz', label: '理解自测' })
  for (const section of lesson.sections) expect(items.some((item) => item.label === section.heading)).toBe(true)
  // id 与渲染器里的锚点一致，点击才能滚动到位
  for (const section of lesson.sections) expect(items.find((item) => item.label === section.heading)?.id).toBe(`lesson-heading-${section.heading.replace(/\s+/g, '-')}`)
})

it('渲染目录导航且链接指向渲染器锚点', () => {
  const lesson = fixtureLesson
  render(<LessonToc lesson={lesson} />)
  expect(screen.getByText('目录')).toBeTruthy()
  const items = lessonTocItems(lesson)
  for (const item of items) expect(screen.getByRole('link', { name: item.label }).getAttribute('href')).toBe(`#${item.id}`)
})
