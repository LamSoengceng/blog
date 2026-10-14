// @vitest-environment jsdom
import { afterEach, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { MarkdownContent } from './MarkdownContent'

afterEach(cleanup)

it('排版标题、加粗、列表、代码和表格，长内容放入各自的滚动容器', () => {
  const { container } = render(<MarkdownContent text={'## 训练建议\n\n- **动作进展**：深蹲\n\n```python\nprint("progress")\n```\n\n| 动作 | 次数 |\n| --- | --- |\n| 深蹲 | 5 |'} />)
  expect(screen.getByRole('heading', { name: '训练建议' })).toBeTruthy()
  expect(screen.getByText('动作进展', { selector: 'strong' })).toBeTruthy()
  expect(container.querySelectorAll('ul li')).toHaveLength(1)
  expect(container.querySelector('pre code')?.textContent).toContain('print("progress")')
  expect(screen.getByRole('region', { name: '表格（可横向滚动）' }).querySelector('table')).toBeTruthy()
})

it('不执行原始 HTML，不生成脚本链接，也不自动加载回答中的远程图片', () => {
  const { container } = render(<MarkdownContent text={'<script>alert(1)</script>\n\n[坏链接](javascript:alert%281%29)\n\n![图示](https://example.invalid/tracker.png)\n\n[参考](https://example.com)'} />)
  expect(container.querySelector('script')).toBeNull()
  expect(container.querySelector('img')).toBeNull()
  expect(screen.getByText('坏链接').getAttribute('href')).toBeNull()
  expect(screen.getByRole('link', { name: '参考' }).getAttribute('rel')).toContain('noopener')
})

it('流式片段完成后更新加粗显示并移除光标', () => {
  const { rerender } = render(<MarkdownContent text="**训练" streaming />)
  expect(screen.getByLabelText('正在回答')).toBeTruthy()
  rerender(<MarkdownContent text="**训练进展**" />)
  expect(screen.getByText('训练进展', { selector: 'strong' })).toBeTruthy()
  expect(screen.queryByLabelText('正在回答')).toBeNull()
})
