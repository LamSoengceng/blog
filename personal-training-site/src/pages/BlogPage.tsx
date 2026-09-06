import { Link } from 'react-router-dom'
import { blogCategories, blogPosts, featuredBlogPost } from '../data/blogData'

export function BlogPage() {
  const recentPosts = blogPosts.filter((post) => post.slug !== featuredBlogPost.slug)
  const categoryCounts = blogCategories.map((category) => ({
    category,
    count: blogPosts.filter((post) => post.category === category).length,
  }))

  return (
    <section className="content-band page-band blog-page">
      <div className="blog-hero">
        <div>
          <p className="eyebrow">Blog / Notes</p>
          <h1 className="page-title">个人博客</h1>
          <p className="hero-text">
            记录训练、算法、Agent 开发和这个网站本身的迭代。它不是单独的文章仓库，
            而是 LamSoengceng 的长期学习日志。
          </p>
        </div>
        <aside className="blog-index-card">
          <span>Archive</span>
          <strong>{blogPosts.length}</strong>
          <p>篇文章 · {blogCategories.length} 个主题</p>
        </aside>
      </div>

      <Link className="blog-feature-card" to={`/blog/${featuredBlogPost.slug}`}>
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
      </Link>

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
          <div className="blog-category-row" aria-label="博客分类">
            {blogCategories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>

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
    </section>
  )
}
