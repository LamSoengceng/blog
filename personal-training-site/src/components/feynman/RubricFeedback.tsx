import { parseRubric } from '../../utils/rubric'

// 面试官评语分块渲染：rubric 文本按节拆成独立卡片（讲对了/错与漏/深度判定/追问/一句话），
// 流式时最后一块跟随打字、得分实时上牌；无标记文本（旧记录）整段原样回退。
export function RubricFeedback({ text, streaming = false }: { text: string; streaming?: boolean }) {
  const { blocks, score } = parseRubric(text)

  if (!blocks.length) {
    return (
      <p className="feynman-record-feedback">
        {text}
        {streaming ? <span className="feynman-caret" /> : null}
      </p>
    )
  }

  const caretOnLast = streaming && !score

  return (
    <div className="rubric-blocks">
      {blocks.map((block, index) => (
        <div
          className={`rubric-block rubric-${block.key}${block.key === 'raw' ? ' is-raw' : ''}`}
          key={`${block.key}-${index}`}
        >
          {block.title ? (
            <span className="rubric-head">
              {block.icon} {block.title}
            </span>
          ) : null}
          <p>
            {block.body}
            {caretOnLast && index === blocks.length - 1 ? <span className="feynman-caret" /> : null}
          </p>
        </div>
      ))}
      {score ? <b className="rubric-score">费曼得分 {score}/5</b> : null}
    </div>
  )
}
