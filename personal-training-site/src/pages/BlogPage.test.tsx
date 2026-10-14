// @vitest-environment jsdom
import { afterEach, expect, it } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { BlogPage } from './BlogPage'
import { blogPosts, featuredBlogPost } from '../data/blogData'

afterEach(cleanup)

it('搜索包含精选文章，分类与关键词可以组合筛选', () => {
  render(<MemoryRouter><BlogPage /></MemoryRouter>)
  fireEvent.change(screen.getByRole('searchbox', { name: '搜索文章' }), { target: { value: featuredBlogPost.title } })
  expect(screen.getByRole('status').textContent).toContain('找到 1 篇文章')
  expect(screen.getByRole('heading', { name: featuredBlogPost.title }).closest('a')?.getAttribute('href')).toBe(`/blog/${featuredBlogPost.slug}`)
  const otherCategory = blogPosts.find((post) => post.category !== featuredBlogPost.category)!.category
  fireEvent.click(screen.getByRole('button', { name: otherCategory }))
  expect(screen.getByText('还没有找到相关文章')).toBeTruthy()
  fireEvent.click(screen.getByRole('button', { name: '查看全部文章' }))
  expect((screen.getByRole('searchbox') as HTMLInputElement).value).toBe('')
  expect(screen.queryByText('还没有找到相关文章')).toBeNull()
})
