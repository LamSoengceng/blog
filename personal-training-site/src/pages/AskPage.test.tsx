// @vitest-environment jsdom
import { afterEach, expect, it, vi } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { AskPage } from './AskPage'
import { chatCompletionStream } from '../utils/aiChat'

vi.mock('../utils/aiChat', () => ({
  loadAiConfig: () => ({ apiKey: 'test-only', baseUrl: 'https://example.invalid', model: 'test' }),
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
