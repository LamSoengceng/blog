// @vitest-environment jsdom
import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { RubricFeedback } from './RubricFeedback'

afterEach(cleanup)

const RUBRIC = `✓ 讲对了：思路对
⚠️ 错与漏：边界没提
💡 一句话版本：找中点、反转一半。
{"score": 4}`

describe('RubricFeedback', () => {
  it('把 rubric 文本拆成块并显示得分徽章，JSON 得分行不进正文', () => {
    render(<RubricFeedback text={RUBRIC} />)
    expect(screen.getByText(/讲对了/)).toBeTruthy()
    expect(screen.getByText(/错与漏/)).toBeTruthy()
    expect(screen.getByText('费曼得分 4/5')).toBeTruthy()
    expect(screen.getByText('思路对')).toBeTruthy()
    expect(screen.queryByText(/"score"/)).toBeNull()
  })

  it('无标记的自由格式文本整段原样渲染', () => {
    render(<RubricFeedback text="整体讲得不错，边界情况漏了。" />)
    expect(screen.getByText('整体讲得不错，边界情况漏了。')).toBeTruthy()
  })

  it('流式中在最后一个分块显示光标', () => {
    const { container } = render(<RubricFeedback text={'✓ 讲对了：思路对\n💡 一句话版本：'} streaming />)
    expect(container.querySelector('.feynman-caret')).toBeTruthy()
  })

  it('得分已完整时流式不显示光标', () => {
    const { container } = render(<RubricFeedback text={`✓ 讲对了：思路对\n{"score": 5}`} streaming />)
    expect(container.querySelector('.feynman-caret')).toBeNull()
  })

  it('空文本渲染为空', () => {
    const { container } = render(<RubricFeedback text="" />)
    expect(container.querySelector('.rubric-blocks')).toBeNull()
  })
})
