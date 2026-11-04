// 攻玉五个子模块：运筹是独立路由页（/algorithm），其余四个是 CareerPage 内的区块（#hash 切换）
export const CAREER_SECTION_IDS = ['interview-bank', 'video-lessons', 'feynman', 'work-notes'] as const
export type CareerSectionId = (typeof CAREER_SECTION_IDS)[number]
export type CareerModuleId = CareerSectionId | 'algorithm'

export const CAREER_MODULES: { id: CareerModuleId; name: string; desc: string }[] = [
  { id: 'algorithm', name: '运筹', desc: '算法练习 · 间隔复习' },
  { id: 'interview-bank', name: '问津', desc: '面经题库' },
  { id: 'video-lessons', name: '观澜', desc: '视频与文章讲义' },
  { id: 'feynman', name: '解惑', desc: '费曼技巧' },
  { id: 'work-notes', name: '省身', desc: '工作复盘' },
]
