export type LessonBlock =
  | { type: 'p'; text: string }
  | { type: 'callout'; tone?: 'key' | 'warn' | 'note'; title?: string; text: string }
  | { type: 'steps'; items: string[] }
  | { type: 'compare'; columns: string[]; rows: string[][] }
  | { type: 'quote'; text: string; note?: string }
  | { type: 'cards'; items: { term: string; text: string }[] }
  | { type: 'mermaid'; title?: string; code: string }

export type LessonSection = {
  heading: string
  blocks: LessonBlock[]
}

export type LessonSourcePlatform = 'bilibili' | 'douyin' | 'wechat'

export type LessonSource = {
  platform: LessonSourcePlatform
  author: string
  /** 视频（bilibili/douyin）必填；文章（wechat）不填 */
  videoId?: string
  /** 公众号文章必填：/s/ 短链 token 或 sn 参数 */
  articleId?: string
  /** 原文标题。视频可省略（页面展示视频链接即可）；公众号文章必填 */
  sourceTitle?: string
  url: string
}

export const platformLabels: Record<LessonSourcePlatform, string> = {
  bilibili: 'B站',
  douyin: '抖音',
  wechat: '公众号',
}

export function sourceKindLabel(source: LessonSource): string {
  return source.platform === 'wechat' ? '原文' : '原视频'
}

export type Lesson = {
  slug: string
  title: string
  summary: string
  date: string
  minutes: number
  tags: string[]
  source: LessonSource
  keyTerms: { term: string; text: string }[]
  sections: LessonSection[]
  quiz: { q: string; a: string }[]
}
