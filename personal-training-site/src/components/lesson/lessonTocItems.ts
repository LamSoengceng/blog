import type { Lesson } from '../../data/lessons/types'

// 目录条目 id 与 LessonRenderer 里的锚点保持一致（section 的 h2 用同一转换）
const headingId = (heading: string) => `lesson-heading-${heading.replace(/\s+/g, '-')}`

/** 讲义目录条目：术语区 → 各小节 → 自测区，供 LessonToc 渲染与详情页判断是否有目录。 */
export function lessonTocItems(lesson: Lesson): { id: string; label: string }[] {
  return [
    ...(lesson.keyTerms.length ? [{ id: 'lesson-keyterms', label: '先认几个术语' }] : []),
    ...lesson.sections.map((section) => ({ id: headingId(section.heading), label: section.heading })),
    ...(lesson.quiz.length ? [{ id: 'lesson-quiz', label: '理解自测' }] : []),
  ]
}
