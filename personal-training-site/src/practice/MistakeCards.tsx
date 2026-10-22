import type { MistakeCard } from './types'

const labels = { personal: '本人错误记录', local: '本地通用提醒', supplement: '整理补充' }
export function MistakeCards({ cards }: { cards: MistakeCard[] }) {
  return cards.length ? <div className="mistake-cards">{cards.map((card, index) => <article className="mistake-card" key={`${card.line}-${index}`}>
    <span className="practice-badge">{labels[card.source]}</span>
    <dl>{[['错误写法',card.wrong],['最小反例',card.counterexample],['原因',card.reason],['修正',card.correction],['自检',card.check]].map(([label,value]) => <div key={label}><dt>{label}</dt><dd>{value || '原文未明确记录'}</dd></div>)}</dl>
    <details><summary>查看原始注释 · {card.sourcePath ?? '补充记录'}:{card.line}</summary><pre>{card.original}</pre></details>
  </article>)}</div> : <p className="practice-muted">尚无明确错误记录，完成本次训练后可补充复盘。</p>
}
