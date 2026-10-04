import { describe, expect, it } from 'vitest'
import { buildRequestMessages, DEFAULT_MAX_ASK_TURNS } from './askContext'

const turn = (role: 'user' | 'assistant', content: string): { role: 'user' | 'assistant'; content: string } => ({
  role,
  content,
})

describe('buildRequestMessages', () => {
  it('system 提示在最前，历史不超过窗口时全量带上', () => {
    const history = [turn('user', 'q1'), turn('assistant', 'a1'), turn('user', 'q2')]
    expect(buildRequestMessages(history, 'SYS')).toEqual([
      { role: 'system', content: 'SYS' },
      ...history,
    ])
  })

  it('超过窗口只保留最近 maxTurns 轮，且从 user 开始', () => {
    const history = Array.from({ length: 25 }, (_, index) =>
      turn(index % 2 === 0 ? 'user' : 'assistant', `msg-${index}`),
    )
    const out = buildRequestMessages(history, 'SYS', DEFAULT_MAX_ASK_TURNS)
    expect(out[0]).toEqual({ role: 'system', content: 'SYS' })
    // 25 条 = 12.5 轮：保留最近 8 轮，但末尾 16 条从 assistant 开始，须裁掉半组 → 15 条对话
    expect(out).toHaveLength(1 + DEFAULT_MAX_ASK_TURNS * 2 - 1)
    expect(out[1].role).toBe('user')
    expect(out[out.length - 1].content).toBe('msg-24') // 最新的用户提问一定在
  })

  it('历史为奇数条时裁剪后不从 assistant 开头', () => {
    const history = [
      turn('user', 'q0'),
      turn('assistant', 'a0'),
      turn('user', 'q1'),
      turn('assistant', 'a1'),
      turn('user', 'q2'),
    ]
    const out = buildRequestMessages(history, 'SYS', 2)
    expect(out.map((m) => m.content)).toEqual(['SYS', 'q1', 'a1', 'q2'])
  })

  it('空历史只返回 system', () => {
    expect(buildRequestMessages([], 'SYS')).toEqual([{ role: 'system', content: 'SYS' }])
  })
})
