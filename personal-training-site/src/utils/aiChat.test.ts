import { afterEach, describe, expect, it, vi } from 'vitest'
import { chatCompletionStream, extractStreamDelta, type AiChatConfig } from './aiChat'

const config: AiChatConfig = { baseUrl: 'https://api.test/v1', model: 'test-model', apiKey: 'sk-test' }

describe('extractStreamDelta', () => {
  it.each([
    ['data: {"choices":[{"delta":{"content":"你"}}]}', '你'],
    ['data:{"choices":[{"delta":{"content":"好"}}]}', '好'],
    ['data: {"choices":[{"delta":{}}]}', null], // 无 content 的结尾块
    ['data: [DONE]', null],
    [': keep-alive 注释', null],
    ['普通行', null],
    ['data: {broken json', null],
  ])('解析「%s」→ %j', (line, expected) => {
    expect(extractStreamDelta(line)).toBe(expected)
  })
})

describe('chatCompletionStream', () => {
  afterEach(() => vi.unstubAllGlobals())

  const sseResponse = (chunks: string[]) =>
    new Response(
      new ReadableStream({
        start(controller) {
          const encoder = new TextEncoder()
          for (const chunk of chunks) controller.enqueue(encoder.encode(chunk))
          controller.close()
        },
      }),
    )

  it('按序回调所有增量并返回完整文本', async () => {
    const mockFetch = vi.fn().mockResolvedValue(
      sseResponse([
        'data: {"choices":[{"delta":{"content":"讲"}}]}\n\n',
        'data: {"choices":[{"delta":{"content":"对了"}}]}\n\n',
        'data: {"choices":[{"delta":{"content":"，边界没提"}}]}\n\n',
        'data: [DONE]\n\n',
      ]),
    )
    vi.stubGlobal('fetch', mockFetch)

    const deltas: string[] = []
    const full = await chatCompletionStream(config, [{ role: 'user', content: '讲解' }], (d) => deltas.push(d))

    expect(deltas).toEqual(['讲', '对了', '，边界没提'])
    expect(full).toBe('讲对了，边界没提')
    expect(mockFetch.mock.calls[0][1].body).toContain('"stream":true')
  })

  it('跨 chunk 拆断的 SSE 行能正确拼接', async () => {
    const mockFetch = vi.fn().mockResolvedValue(
      sseResponse([
        'data: {"choices":[{"delta":{"con',
        'tent":"跨行"}}]}\n\ndata: {"choices":[{"delta":{"content":"增量"}}]}\n',
      ]),
    )
    vi.stubGlobal('fetch', mockFetch)

    const deltas: string[] = []
    const full = await chatCompletionStream(config, [{ role: 'user', content: 'x' }], (d) => deltas.push(d))
    expect(deltas).toEqual(['跨行', '增量'])
    expect(full).toBe('跨行增量')
  })

  it('HTTP 错误抛出带状态的异常', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('quota', { status: 429 })))
    await expect(chatCompletionStream(config, [], () => {})).rejects.toThrow('API 返回 429')
  })
})
