// BYOK（Bring Your Own Key）：API Key 只存在浏览器 localStorage，绝不进入代码仓库或构建产物。
// 兼容 OpenAI Chat Completions 协议的服务（DeepSeek / 月之暗面 / Qwen DashScope 兼容模式 / OpenAI 等）。
export type AiChatConfig = {
  baseUrl: string
  model: string
  apiKey: string
}

const AI_CONFIG_KEY = 'ai-chat-config-v1'

export const defaultAiConfig: AiChatConfig = {
  baseUrl: 'https://api.deepseek.com',
  model: 'deepseek-chat',
  apiKey: '',
}

export const loadAiConfig = (): AiChatConfig => {
  try {
    const raw = window.localStorage.getItem(AI_CONFIG_KEY)
    if (!raw) return defaultAiConfig
    return { ...defaultAiConfig, ...(JSON.parse(raw) as Partial<AiChatConfig>) }
  } catch {
    return defaultAiConfig
  }
}

export const saveAiConfig = (config: AiChatConfig) => {
  try {
    window.localStorage.setItem(AI_CONFIG_KEY, JSON.stringify(config))
  } catch {
    // localStorage 不可用时静默降级：配置仅本次会话有效
  }
}

export const chatCompletion = async (config: AiChatConfig, messages: { role: string; content: string }[]) => {
  const response = await fetch(`${config.baseUrl.replace(/\/$/, '')}/chat/completions`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${config.apiKey}`,
    },
    body: JSON.stringify({
      model: config.model,
      temperature: 0.4,
      messages,
    }),
  })
  if (!response.ok) {
    const detail = await response.text().catch(() => '')
    throw new Error(`API 返回 ${response.status}：${detail.slice(0, 200)}`)
  }
  const payload = await response.json()
  return String(payload?.choices?.[0]?.message?.content ?? '').trim()
}

// 从一条 SSE 行提取增量文本；非数据行 / [DONE] / 解析失败都返回 null。
export const extractStreamDelta = (line: string): string | null => {
  const trimmed = line.trim()
  if (!trimmed.startsWith('data:')) return null
  const data = trimmed.slice(5).trim()
  if (!data || data === '[DONE]') return null
  try {
    return JSON.parse(data)?.choices?.[0]?.delta?.content ?? null
  } catch {
    return null
  }
}

// 流式版本：增量通过 onDelta 逐段回调（打字机效果），返回完整文本；signal 可中断。
export const chatCompletionStream = async (
  config: AiChatConfig,
  messages: { role: string; content: string }[],
  onDelta: (delta: string) => void,
  signal?: AbortSignal,
): Promise<string> => {
  const response = await fetch(`${config.baseUrl.replace(/\/$/, '')}/chat/completions`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${config.apiKey}`,
    },
    body: JSON.stringify({
      model: config.model,
      temperature: 0.4,
      messages,
      stream: true,
    }),
    signal,
  })
  if (!response.ok) {
    const detail = await response.text().catch(() => '')
    throw new Error(`API 返回 ${response.status}：${detail.slice(0, 200)}`)
  }
  if (!response.body) throw new Error('响应没有内容流')

  const reader = response.body.getReader()
  const decoder = new TextDecoder()
  let buffer = ''
  let full = ''
  for (;;) {
    const { done, value } = await reader.read()
    if (done) break
    buffer += decoder.decode(value, { stream: true })
    const lines = buffer.split('\n')
    buffer = lines.pop() ?? ''
    for (const line of lines) {
      const delta = extractStreamDelta(line)
      if (delta) {
        full += delta
        onDelta(delta)
      }
    }
  }
  return full
}
