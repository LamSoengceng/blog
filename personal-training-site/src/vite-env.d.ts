/// <reference types="vite/client" />

// 构建期由 vite.config.ts 的 lessons-meta-virtual 插件读盘生成（观澜讲义元数据）。
declare module 'virtual:lessons-meta' {
  import type { LessonMeta } from './data/lessons/types'

  const lessonsMeta: (LessonMeta & { __file: string })[]
  export default lessonsMeta
}
