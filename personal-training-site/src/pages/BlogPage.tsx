import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { blogCategories, blogPosts, featuredBlogPost } from '../data/blogData'
import { SectionCover } from '../components/SectionCover'

export function BlogPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('全部')
  const filtering = Boolean(query.trim()) || category !== '全部'
  const recentPosts = useMemo(() => blogPosts.filter((post) => {
    if (!filtering && post.slug === featuredBlogPost.slug) return false
    const matchesCategory = category === '全部' || post.category === category
    const searchable = [post.title, post.summary, ...post.tags].join(' ').toLocaleLowerCase()
    return matchesCategory && searchable.includes(query.trim().toLocaleLowerCase())
  }), [query, category, filtering])
  const resetFilters = () => { setQuery(''); setCategory('全部') }
  const categoryCounts = blogCategories.map((category) => ({
    category,
    count: blogPosts.filter((post) => post.category === category).length,
  }))

  return (
    <>
      <SectionCover
        eyebrow="Blog / Notes"
        title="日知"
        quote="「日知其所亡，月无忘其所能。」——《论语·子张》"
        intro="每天知道一点自己不知道的，每月不忘记已经掌握的。记录训练、算法、Agent 开发和这个网站本身的迭代——它不是单独的文章仓库，而是长期学习日志。"
        stats={[
          { value: blogPosts.length, label: '篇文章' },
          { value: blogCategories.length, label: '个主题' },
        ]}
        cueHref="#blog-content"
      />
      <div className="content-band after-cover blog-page" id="blog-content">
      {!filtering ? <Link className="blog-feature-card" to={`/blog/${featuredBlogPost.slug}`}>
        <div>
          <p className="eyebrow">{featuredBlogPost.category}</p>
          <h2>{featuredBlogPost.title}</h2>
          <p>{featuredBlogPost.summary}</p>
          <div className="blog-meta-row">
            <span>{featuredBlogPost.date}</span>
            <span>{featuredBlogPost.readingMinutes} min read</span>
          </div>
        </div>
        <strong>{featuredBlogPost.heroMetric}</strong>
      </Link> : null}

      <div className="blog-directory-layout">
        <aside className="blog-sidebar" aria-label="博客索引">
          <div>
            <p className="eyebrow">Topics</p>
            <h3>主题</h3>
            <div className="blog-topic-list">
              {categoryCounts.map((item) => (
                <span key={item.category}>
                  {item.category}
                  <b>{item.count}</b>
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">Archive</p>
            <h3>归档</h3>
            <ol className="blog-archive-list">
              {blogPosts.map((post) => (
                <li key={post.slug}>
                  <time dateTime={post.date}>{post.date}</time>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        <div>
          <div className="blog-search-toolbar">
            <label className="blog-search-label" htmlFor="blog-search">搜索文章</label>
            <div className="blog-search-field"><Search size={18} aria-hidden="true" /><input id="blog-search" type="search" placeholder="搜索标题、摘要或标签…" value={query} onChange={(event) => setQuery(event.target.value)} />{query ? <button type="button" aria-label="清空搜索" onClick={() => setQuery('')}><X size={18} /></button> : null}</div>
          </div>
          <div className="blog-category-row blog-filter-buttons" role="group" aria-label="博客分类">
            {['全部', ...blogCategories].map((item) => (
              <button type="button" key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>
            ))}
          </div>
          <p className="blog-result-count" role="status">{filtering ? `找到 ${recentPosts.length} 篇文章` : `共 ${blogPosts.length} 篇文章 · 精选文章置顶`}{filtering ? <button type="button" onClick={resetFilters}>重置筛选</button> : null}</p>
          {recentPosts.length === 0 ? <div className="blog-empty-state"><Search size={28} aria-hidden="true" /><h3>还没有找到相关文章</h3><p>试试更短的关键词，或者切换到其他主题。</p><button type="button" className="review-btn ghost" onClick={resetFilters}>查看全部文章</button></div> : null}
          <div className="blog-post-grid">
            {recentPosts.map((post) => (
              <Link className="blog-post-card" key={post.slug} to={`/blog/${post.slug}`}>
                <div className="blog-card-topline">
                  <span>{post.category}</span>
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
                <div className="blog-tag-row">
                  {post.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
