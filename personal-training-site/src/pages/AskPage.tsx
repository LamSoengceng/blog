import { useState } from 'react'
import { chatCompletion, loadAiConfig } from '../utils/aiChat'
import { buildKnowledgeChunks, retrieveChunks, type KnowledgeChunk } from '../utils/siteKnowledge'
import { openSiteSettings } from '../utils/settings'

type AskMessage = { role: 'user' | 'assistant'; content: string; sources?: KnowledgeChunk[] }

const buildSystemPrompt = (chunks: KnowledgeChunk[]) =>
  [
    '你是「Lam 的站点」的站内助手。用户会用自然语言提问，下面是从站点内容里检索到的最相关资料。',
    '回答规则：只依据资料和常识回答，不要编造站点里不存在的细节；引用资料时自然融入，不要逐字大段照搬。',
    '如果资料不足以回答，就直说站点里没有相关记录，并建议用户补充内容。用简体中文回答，简洁分点。',
    '',
    '—— 站内检索资料 ——',
    ...chunks.flatMap((chunk) => [`【${chunk.source}】${chunk.title}${chunk.date ? `（${chunk.date}）` : ''}`, chunk.text]),
  ].join('\n')

const sampleQuestions = ['我最近的训练状态怎么样？', '深蹲有什么易错点？', '这个站是怎么做数据管道的？', '我最近心情如何？']

export function AskPage() {
  const [messages, setMessages] = useState<AskMessage[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // 输入时实时显示将被检索的资料，让检索过程可见
  const previewChunks =
    input.trim().length >= 2 ? retrieveChunks(input, buildKnowledgeChunks(), 4) : []

  const ask = async () => {
    const question = input.trim()
    if (!question || loading) return
    const aiConfig = loadAiConfig()
    if (!aiConfig.apiKey) {
      openSiteSettings()
      setError('先在设置里填入 API Key 才能提问。')
      return
    }

    const chunks = retrieveChunks(question, buildKnowledgeChunks())
    const nextMessages: AskMessage[] = [...messages, { role: 'user', content: question, sources: chunks }]
    setMessages(nextMessages)
    setInput('')
    setError('')
    setLoading(true)
    try {
      const answer = await chatCompletion(aiConfig, [
        { role: 'system', content: buildSystemPrompt(chunks) },
        ...nextMessages.map((message) => ({ role: message.role, content: message.content })),
      ])
      setMessages((prev) => [...prev, { role: 'assistant', content: answer }])
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : String(caught))
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="content-band page-band ask-page">
      <div className="section-heading">
        <p className="eyebrow">Ask My Site</p>
        <h1 className="page-title">问我的站</h1>
        <p>
          把问题交给站内助手：它会在本地检索你的博客、训练日志、题解笔记、日记和项目资料，
          把最相关的片段交给大模型回答。需要 API Key（设置里配置），检索本身不联网。
        </p>
      </div>

      <div className="ask-samples">
        {sampleQuestions.map((question) => (
          <button
            className="ask-sample"
            type="button"
            key={question}
            onClick={() => {
              setInput(question)
            }}
          >
            {question}
          </button>
        ))}
      </div>

      <div className="ask-thread" aria-live="polite">
        {messages.length === 0 && !loading ? (
          <p className="empty-note">还没有提问。试试上面的问题，或者直接输入。</p>
        ) : null}
        {messages.map((message, index) => (
          <div className={`ask-message ${message.role}`} key={index}>
            <span>{message.role === 'user' ? '我' : '站内助手'}</span>
            <p>{message.content}</p>
            {message.sources?.length ? (
              <details className="ask-sources">
                <summary>引用了 {message.sources.length} 段站内资料</summary>
                <ul>
                  {message.sources.map((source) => (
                    <li key={source.id}>
                      【{source.source}】{source.title}
                    </li>
                  ))}
                </ul>
              </details>
            ) : null}
          </div>
        ))}
        {loading ? <p className="ai-note">检索资料并思考中…</p> : null}
        {error ? <p className="ai-note ai-error">{error}</p> : null}
      </div>

      <div className="ask-input-row">
        <div className="ask-input-stack">
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault()
                ask()
              }
            }}
            rows={3}
            placeholder="问任何关于这个站的问题…（Enter 发送，Shift+Enter 换行）"
          />
          {previewChunks.length ? (
            <p className="ask-preview">
              将检索：
              {previewChunks.map((chunk) => `【${chunk.source}】${chunk.title}`).join(' · ')}
            </p>
          ) : null}
        </div>
        <button className="review-btn primary" type="button" onClick={ask} disabled={loading}>
          提问
        </button>
      </div>
    </section>
  )
}
