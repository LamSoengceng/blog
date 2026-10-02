// 组件单独成文件：fast refresh 要求一个文件只导出组件，术语切分逻辑在 ./techTerms.ts。
import { splitByTechTerms } from './techTerms'

export function HighlightText({ text }: { text: string }) {
  const segments = splitByTechTerms(text)
  return (
    <>
      {segments.map((segment, index) =>
        segment.highlight ? (
          <mark className="kw" key={index}>
            {segment.text}
          </mark>
        ) : (
          <span key={index}>{segment.text}</span>
        ),
      )}
    </>
  )
}
