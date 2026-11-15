import lessonsMetaRaw from 'virtual:lessons-meta'
import type { Lesson, LessonMeta } from './types'

// 讲义数据（原「视频课程」）：由 video2kb-lesson skill 生成，scripts/validateLessons.mjs 校验。
// index/content 分离：元数据（标题/摘要/术语/小节标题/自测题数）构建期由 vite.config.ts 的
// lessons-meta-virtual 插件读盘生成，供列表与检索；正文 blocks 与 quiz 题面按需动态加载，
// 不再随 105+ 篇全量打进共享 chunk。新增课程仍只需把 JSON 放进本目录（自动收录，按加工日期倒序）。
export const lessons: LessonMeta[] = lessonsMetaRaw
  .map(({ __file, ...meta }) => meta)
  .sort((a, b) => b.date.localeCompare(a.date))

const loaderBySlug = new Map(lessonsMetaRaw.map((item) => [item.slug, item.__file]))

const loaders = import.meta.glob('./*.json', { import: 'default' }) as Record<
  string,
  () => Promise<Lesson>
>

/** 按需加载单篇完整讲义（含正文与自测），详情页专用。slug 不存在时返回 undefined。 */
export async function loadLesson(slug: string | undefined): Promise<Lesson | undefined> {
  if (!slug) return undefined
  const file = loaderBySlug.get(slug)
  if (!file) return undefined
  return loaders[`./${file}`]?.()
}
