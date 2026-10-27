// @vitest-environment jsdom
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

vi.mock('./pages/HomePage', () => ({ HomePage: () => <h1>首页测试内容</h1> }))
vi.mock('./pages/BlogPage', () => ({ BlogPage: () => <h1>博客测试内容</h1> }))
vi.mock('./pages/TrainingPage', () => ({ TrainingPage: () => <h1 id="journal">日记测试内容</h1> }))

beforeEach(() => {
  vi.stubGlobal('matchMedia', () => ({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() }))
  vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => { callback(0); return 1 })
  vi.stubGlobal('cancelAnimationFrame', vi.fn())
  vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
})
afterEach(() => { cleanup(); vi.restoreAllMocks(); vi.unstubAllGlobals() })

it('折叠菜单可以用 Escape 关闭，并把焦点返回入口', async () => {
  render(<MemoryRouter><App /></MemoryRouter>)
  await screen.findByRole('heading', { name: '首页测试内容' })
  const trigger = screen.getByRole('button', { name: '打开菜单' })
  trigger.focus()
  fireEvent.click(trigger)
  expect(screen.getByRole('dialog', { name: '网站导航' })).toBeTruthy()
  expect(document.activeElement).toBe(screen.getByRole('button', { name: '关闭导航' }))
  fireEvent.keyDown(document, { key: 'Escape' })
  expect(screen.queryByRole('dialog')).toBeNull()
  expect(document.activeElement).toBe(trigger)
  expect(document.body.style.overflow).toBe('')
})

it('通过折叠菜单切换页面后收起菜单，更新标题和当前导航', async () => {
  render(<MemoryRouter><App /></MemoryRouter>)
  await screen.findByRole('heading', { name: '首页测试内容' })
  fireEvent.click(screen.getByRole('button', { name: '打开菜单' }))
  fireEvent.click(within(screen.getByRole('dialog')).getByRole('link', { name: '日知' }))
  await screen.findByRole('heading', { name: '博客测试内容' })
  expect(screen.queryByRole('dialog')).toBeNull()
  expect(document.title).toBe('日知 · Lam Soengceng')
  expect(within(screen.getByRole('navigation', { name: '主导航' })).getByRole('link', { name: '日知' }).getAttribute('aria-current')).toBe('page')
})

it('首次打开带日记锚点的懒加载页面，等正文挂载后再定位', async () => {
  const scrollIntoView = vi.fn()
  Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', { configurable: true, value: scrollIntoView })
  render(<MemoryRouter initialEntries={['/training#journal']}><App /></MemoryRouter>)
  await screen.findByRole('heading', { name: '日记测试内容' })
  expect(scrollIntoView).toHaveBeenCalledOnce()
})
