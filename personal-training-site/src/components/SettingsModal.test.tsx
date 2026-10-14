// @vitest-environment jsdom
import { afterEach, expect, it, vi } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { SettingsModal } from './SettingsModal'

afterEach(() => {
  cleanup()
  document.body.style.overflow = ''
  window.localStorage.clear()
})

it('设置打开后聚焦关闭按钮，Tab 在弹窗内循环，关闭后恢复焦点和滚动', () => {
  const trigger = document.createElement('button')
  document.body.append(trigger)
  trigger.focus()
  const onClose = vi.fn()
  const { rerender } = render(<SettingsModal open onClose={onClose} />)
  const close = screen.getByRole('button', { name: '关闭设置' })
  expect(document.activeElement).toBe(close)
  expect(document.body.style.overflow).toBe('hidden')
  fireEvent.keyDown(document, { key: 'Tab', shiftKey: true })
  expect(document.activeElement).toBe(screen.getByLabelText('切换题目时代码默认展开'))
  fireEvent.keyDown(document, { key: 'Tab' })
  expect(document.activeElement).toBe(close)
  fireEvent.keyDown(document, { key: 'Escape' })
  expect(onClose).toHaveBeenCalledOnce()
  rerender(<SettingsModal open={false} onClose={onClose} />)
  expect(document.activeElement).toBe(trigger)
  expect(document.body.style.overflow).toBe('')
  trigger.remove()
})

it('复习题数不能超过输入框声明的上限', () => {
  render(<SettingsModal open onClose={() => {}} />)
  fireEvent.change(screen.getByLabelText('每轮复习题数上限'), { target: { value: '999' } })
  expect(JSON.parse(window.localStorage.getItem('review-prefs-v1')!).queueLimit).toBe(500)
})
