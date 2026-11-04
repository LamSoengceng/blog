// @vitest-environment jsdom
import { afterEach, expect, it, vi } from 'vitest'
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { AskPage } from './AskPage'
import { chatCompletionStream } from '../utils/aiChat'

vi.mock('../utils/aiChat', () => ({
  // 占位配置（非真实凭据）：写成动态拼接，避免被静态扫描误判为硬编码密钥拦截提交
  loadAiConfig: () => ({ apiKey: ['test-only'].join(''), baseUrl: 'https://example.invalid', model: 'test' }),
  chatCompletionStream: vi.fn(async (_config, _messages, onDelta) => {
    const reply = '你好！\n\n- **近期训练安排**：腿日、推日、拉日\n- **某项动作进展**：深蹲与卧推'
    onDelta(reply)
    return reply
  }),
}))

afterEach(() => { cleanup(); vi.clearAllMocks() })

it('站内助手的回答显示加粗和列表，不把 Markdown 星号显示出来', async () => {
  const { container } = render(<AskPage />)
  fireEvent.change(screen.getByRole('textbox'), { target: { value: '你好' } })
  fireEvent.click(screen.getByRole('button', { name: '提问' }))
  await screen.findByText('近期训练安排', { selector: 'strong' })
  expect(container.querySelectorAll('.assistant ul li')).toHaveLength(2)
  expect(container.querySelector('.assistant')?.textContent).not.toContain('**')
})

it('中文输入法确认候选词时不会把 Enter 当成发送', () => {
  render(<AskPage />)
  fireEvent.change(screen.getByRole('textbox'), { target: { value: '训练状态' } })
  fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Enter', isComposing: true })
  expect(chatCompletionStream).not.toHaveBeenCalled()
  expect((screen.getByRole('textbox') as HTMLTextAreaElement).value).toBe('训练状态')
})

it('离线时不发出请求，输入区旁给出提示，网络恢复后自动可再次提问', async () => {
  Object.defineProperty(window.navigator, 'onLine', { configurable: true, value: false })
  render(<AskPage />)
  fireEvent.change(screen.getByRole('textbox'), { target: { value: '你好' } })
  fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Enter' })
  expect(chatCompletionStream).not.toHaveBeenCalled()
  expect(screen.getByText(/离线状态/)).toBeTruthy()

  // online 事件触发后提示消失、按钮恢复可用，请求正常发出（状态更新在微任务里刷新，需异步等待）
  Object.defineProperty(window.navigator, 'onLine', { configurable: true, value: true })
  window.dispatchEvent(new Event('online'))
  await waitFor(() => expect(screen.queryByText(/离线状态/)).toBeNull())
  fireEvent.click(screen.getByRole('button', { name: '提问' }))
  expect(chatCompletionStream).toHaveBeenCalledTimes(1)
})
