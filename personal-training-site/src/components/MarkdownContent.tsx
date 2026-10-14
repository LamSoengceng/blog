import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

/** Model output stays Markdown; raw HTML is never injected into the page. */
export function MarkdownContent({ text, streaming = false }: { text: string; streaming?: boolean }) {
  return (
    <div className="markdown-content">
      <Markdown remarkPlugins={[remarkGfm]} skipHtml components={{
        a: ({ href, children }) => <a href={href || undefined} target="_blank" rel="noopener noreferrer">{children}</a>,
        img: ({ alt }) => <span className="markdown-image-alt">{alt || '图片'}</span>,
        h1: ({ children }) => <h2>{children}</h2>,
        table: ({ children }) => <div className="markdown-table-scroll" role="region" aria-label="表格（可横向滚动）" tabIndex={0}><table>{children}</table></div>,
      }}>{text}</Markdown>
      {streaming ? <span className="feynman-caret" aria-label="正在回答" /> : null}
    </div>
  )
}
