import type { Lesson } from './types'

// 讲义数据（原「视频课程」）：由 video2kb-lesson skill 生成，scripts/validateLessons.mjs 校验。
// 新增课程只需把 JSON 放进本目录，下面自动收录（按加工日期倒序）。
const modules = import.meta.glob('./*.json', { eager: true }) as Record<string, { default: Lesson }>

export const lessons: Lesson[] = Object.values(modules)
  .map((module) => module.default)
  .sort((a, b) => b.date.localeCompare(a.date))

export function getLesson(slug: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.slug === slug)
}