// @vitest-environment jsdom
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { lessons } from '../../data/lessons'
import { LessonToc } from './LessonToc'
import { lessonTocItems } from './lessonTocItems'

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
  const lesson = lessons[0]
  const items = lessonTocItems(lesson)
  expect(items[0]).toEqual({ id: 'lesson-keyterms', label: '先认几个术语' })
  expect(items.at(-1)).toEqual({ id: 'lesson-quiz', label: '理解自测' })
  for (const section of lesson.sections) expect(items.some((item) => item.label === section.heading)).toBe(true)
  // id 与渲染器里的锚点一致，点击才能滚动到位
  for (const section of lesson.sections) expect(items.find((item) => item.label === section.heading)?.id).toBe(`lesson-heading-${section.heading.replace(/\s+/g, '-')}`)
})

it('渲染目录导航且链接指向渲染器锚点', () => {
  const lesson = lessons[0]
  render(<LessonToc lesson={lesson} />)
  expect(screen.getByText('目录')).toBeTruthy()
  const items = lessonTocItems(lesson)
  for (const item of items) expect(screen.getByRole('link', { name: item.label }).getAttribute('href')).toBe(`#${item.id}`)
})
