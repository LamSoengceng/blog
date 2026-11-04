import { useEffect, useMemo, useRef, useState } from 'react'
import { chatCompletionStream, loadAiConfig } from '../utils/aiChat'
import { buildKnowledgeChunks, retrieveChunks, type KnowledgeChunk } from '../utils/siteKnowledge'
import { buildRequestMessages } from '../utils/askContext'
import { openSiteSettings } from '../utils/settings'
import { MarkdownContent } from '../components/MarkdownContent'

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
  const [streamingText, setStreamingText] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const abortRef = useRef<AbortController | null>(null)
  // 离线检测：navigator.onLine 配合 online/offline 事件，恢复网络后提示自动消失、可再次提问
  const [isOnline, setIsOnline] = useState(() => (typeof navigator === 'undefined' ? true : navigator.onLine))

  useEffect(() => {
    const goOnline = () => setIsOnline(true)
    const goOffline = () => setIsOnline(false)
    window.addEventListener('online', goOnline)
    window.addEventListener('offline', goOffline)
    return () => {
      window.removeEventListener('online', goOnline)
      window.removeEventListener('offline', goOffline)
    }
  }, [])

  // 输入时实时显示将被检索的资料，让检索过程可见（仅随输入变化重算）
  const previewChunks = useMemo(
    () => (input.trim().length >= 2 ? retrieveChunks(input, buildKnowledgeChunks(), 4) : []),
    [input],
  )

  const ask = async () => {
    const question = input.trim()
    if (!question || loading) return
    // 离线时请求注定失败，直接拦截并交给输入区旁的行内提示，而不是报一串网络错误
    if (!isOnline) return
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
    setStreamingText('')
    setLoading(true)
    const controller = new AbortController()
    abortRef.current = controller
    try {
      const answer = await chatCompletionStream(
        aiConfig,
        buildRequestMessages(nextMessages, buildSystemPrompt(chunks)),
        (delta) => setStreamingText((prev) => prev + delta),
        controller.signal,
      )
      setMessages((prev) => [...prev, { role: 'assistant', content: answer }])
      setStreamingText('')
    } catch (caught) {
      if (caught instanceof DOMException && caught.name === 'AbortError') setError('已停止回答。')
      else setError(caught instanceof Error ? caught.message : String(caught))
    } finally {
      setLoading(false)
      abortRef.current = null
    }
  }

  const stop = () => abortRef.current?.abort()

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
            {message.role === 'assistant' ? <MarkdownContent text={message.content} /> : <p>{message.content}</p>}
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
        {loading || streamingText ? (
          <div className="ask-message assistant">
            <span>站内助手</span>
            <MarkdownContent text={streamingText} streaming={loading} />
          </div>
        ) : null}
        {error ? <p className="ai-note ai-error">{error}</p> : null}
      </div>

      <div className="ask-input-row">
        <div className="ask-input-stack">
          <textarea
            aria-label="你的问题"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) {
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
          {!isOnline ? (
            <p className="ai-note ai-error" role="status">
              当前处于离线状态，暂时无法提问；网络恢复后即可继续使用。
            </p>
          ) : null}
        </div>
        {loading ? (
          <button className="review-btn warn" type="button" onClick={stop}>
            停止
          </button>
        ) : (
          <button
            className="review-btn primary"
            type="button"
            onClick={ask}
            disabled={loading || !isOnline}
            title={isOnline ? undefined : '当前离线，无法提问'}
          >
            提问
          </button>
        )}
      </div>
    </section>
  )
}
