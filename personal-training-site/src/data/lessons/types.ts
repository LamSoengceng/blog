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

export type Lesson = {
  slug: string
  title: string
  summary: string
  date: string
  minutes: number
  tags: string[]
  source: { platform: 'bilibili' | 'douyin'; author: string; videoId: string; url: string }
  keyTerms: { term: string; text: string }[]
  sections: LessonSection[]
  quiz: { q: string; a: string }[]
}