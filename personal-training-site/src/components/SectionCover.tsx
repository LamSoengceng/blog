import type { ReactNode } from 'react'
import { ArrowDown } from 'lucide-react'

// 板块封面屏：每个板块页开头一整屏居中（大标题 + 出处 + 简介 + 关键数字），
// 功能内容在封面之后的 .after-cover 容器里，向下滚动到达。
export function SectionCover({ eyebrow, title, quote, intro, stats, cueHref }: {
  eyebrow: string
  title: string
  quote: string
  intro: string
  stats?: { value: ReactNode; label: string }[]
  cueHref?: string
}) {
  return (
    <section className="section-cover" aria-label={`${title}封面`}>
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="page-title">{title}</h1>
      <p className="classical-quote">{quote}</p>
      <p className="section-cover-intro">{intro}</p>
      {stats?.length ? (
        <div className="section-cover-stats">
          {stats.map((item) => (
            <div key={item.label}>
              <b>{item.value}</b>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      ) : null}
      {cueHref ? (
        <a className="section-cover-cue" href={cueHref}>
          <ArrowDown size={14} aria-hidden="true" />SCROLL
        </a>
      ) : null}
    </section>
  )
}
