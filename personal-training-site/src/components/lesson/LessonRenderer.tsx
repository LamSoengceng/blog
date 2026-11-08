import type { ReactNode } from 'react'
import type { Lesson, LessonBlock, LessonSection } from '../../data/lessons/types'
import { platformLabels, sourceKindLabel } from '../../data/lessons/types'
import { MermaidDiagram } from './MermaidDiagram'

/** 讲义渲染器：把结构化讲义 JSON（视频转录/公众号文章深加工产物）渲染成图文并茂的学习页。 */
export function LessonRenderer({ lesson, tocSlot }: { lesson: Lesson; tocSlot?: ReactNode }) {
  const kind = sourceKindLabel(lesson.source)
  return (
    <article className="lesson-renderer">
      <header className="lesson-hero">
        <div className="lesson-hero-meta"><span>{platformLabels[lesson.source.platform]} · {lesson.source.author}</span><span>{lesson.date} 加工</span><span>约 {lesson.minutes} 分钟读完</span></div>
        <h1>{lesson.title}</h1>
        <p className="lesson-summary">{lesson.summary}</p>
        {lesson.tags.length ? <div className="lesson-tags">{lesson.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div> : null}
        <a className="lesson-source-link" href={lesson.source.url} target="_blank" rel="noopener noreferrer">{kind === '原文' ? '阅读原文 ↗' : '观看原视频 ↗'}</a>
      </header>

      {tocSlot}

      <section className="lesson-keyterms" id="lesson-keyterms" aria-labelledby="lesson-keyterms-title">
        <h2 id="lesson-keyterms-title">先认几个术语</h2>
        <ul>{lesson.keyTerms.map((term) => <li key={term.term}><b>{term.term}</b><span>{term.text}</span></li>)}</ul>
      </section>

      {lesson.sections.map((section) => <LessonSectionView key={section.heading} section={section} />)}

      <section className="lesson-quiz" id="lesson-quiz" aria-labelledby="lesson-quiz-title">
        <h2 id="lesson-quiz-title">理解自测</h2>
        <ol>{lesson.quiz.map((item, index) => (
          <li key={index}><details><summary>{item.q}</summary><p>{item.a}</p></details></li>
        ))}</ol>
      </section>

      <footer className="lesson-source-footer">
        <p>
          本文为个人学习笔记，由 {platformLabels[lesson.source.platform]}「{lesson.source.author}」的{kind}
          {lesson.source.sourceTitle ? <>《{lesson.source.sourceTitle}》</> : null}
          提炼改写而成，观点归原作者所有。
        </p>
        <a href={lesson.source.url} target="_blank" rel="noopener noreferrer">{kind === '原文' ? '查看原文 ↗' : '查看原视频 ↗'}</a>
      </footer>
    </article>
  )
}

const toneLabel: Record<string, string> = { key: '关键结论', warn: '易错', note: '补充' }

function LessonSectionView({ section }: { section: LessonSection }) {
  return (
    <section className="lesson-section" aria-labelledby={`lesson-heading-${section.heading.replace(/\s+/g, '-')}`}>
      <h2 id={`lesson-heading-${section.heading.replace(/\s+/g, '-')}`}><span className="lesson-section-marker" aria-hidden="true" />{section.heading}</h2>
      <div className="lesson-blocks">
        {section.blocks.map((block, index) => <LessonBlockView key={index} block={block} />)}
      </div>
    </section>
  )
}

function LessonBlockView({ block }: { block: LessonBlock }) {
  switch (block.type) {
    case 'p':
      return <p className="lesson-p">{block.text}</p>
    case 'callout':
      return (
        <aside className={`lesson-callout lesson-callout-${block.tone || 'key'}`} role="note">
          {block.tone && toneLabel[block.tone] ? <span className="lesson-callout-label">{toneLabel[block.tone]}</span> : null}
          {block.title ? <b>{block.title}</b> : null}
          <p>{block.text}</p>
        </aside>
      )
    case 'steps':
      return <ol className="lesson-steps">{block.items.map((item, index) => <li key={index}>{item}</li>)}</ol>
    case 'compare':
      return (
        <div className="lesson-compare-scroll" role="region" aria-label="对比表（可横向滚动）" tabIndex={0}>
          <table className="lesson-compare">
            <thead><tr>{block.columns.map((column) => <th key={column}>{column}</th>)}</tr></thead>
            <tbody>{block.rows.map((row, index) => <tr key={index}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
      )
    case 'quote':
      return <blockquote className="lesson-quote"><p>{block.text}</p>{block.note ? <footer>{block.note}</footer> : null}</blockquote>
    case 'cards':
      return (
        <ul className="lesson-cards">{block.items.map((item) => (
          <li key={item.term}><b>{item.term}</b><p>{item.text}</p></li>
        ))}</ul>
      )
    case 'mermaid':
      return <MermaidDiagram code={block.code} title={block.title} />
  }
}