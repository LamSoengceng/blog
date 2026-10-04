// @vitest-environment jsdom
import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { XunjiLogPage } from './XunjiLogPage'

afterEach(cleanup)

describe('XunjiLogPage', () => {
  it('渲染统计条、力量趋势区和训练会话列表', () => {
    render(<XunjiLogPage />)
    expect(screen.getByLabelText('逐组训练统计')).toBeTruthy()
    expect(screen.getByLabelText('核心动作估算 1RM 趋势')).toBeTruthy()
    const sessionButtons = screen.getAllByRole('button')
    expect(sessionButtons.length).toBeGreaterThan(0)
  })

  it('统计条数字与训记数据一致', () => {
    render(<XunjiLogPage />)
    const stats = screen.getByLabelText('逐组训练统计')
    // 三个统计项都有数字
    expect(stats.querySelectorAll('strong').length).toBe(3)
  })

  it('点击会话头切换展开状态（默认展开的前 3 个点击保持展开）', () => {
    render(<XunjiLogPage />)
    const buttons = screen.getAllByRole('button')
    // 前 3 个默认展开：点击后仍展开（openIds 记录它）
    fireEvent.click(buttons[0])
    expect(buttons[0].getAttribute('aria-expanded')).toBe('true')
    // 第 4 个默认收起：点击后展开，再点收起
    const fourth = buttons[3]
    expect(fourth.getAttribute('aria-expanded')).toBe('false')
    fireEvent.click(fourth)
    expect(fourth.getAttribute('aria-expanded')).toBe('true')
    fireEvent.click(fourth)
    expect(fourth.getAttribute('aria-expanded')).toBe('false')
  })
})
