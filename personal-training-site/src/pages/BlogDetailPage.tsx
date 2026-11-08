import { Link, Navigate, useParams } from 'react-router-dom'
import { blogPosts } from '../data/blogData'
import { scrollToAnchor, useScrollSpy } from '../hooks/useScrollSpy'

// 锚点 id 不能含空格（浏览器会把空格编码成 %20，getElementById 匹配不到）；与讲义页同一转换
const headingId = (heading: string) => `blog-heading-${heading.replace(/\s+/g, '-')}`

export function BlogDetailPage() {
  const { postSlug } = useParams()
  const post = blogPosts.find((item) => item.slug === postSlug)

  // hook 需在提前 return 之前无条件调用；post 不存在时给空目录
  const tocItems = post ? post.sections.map((section) => ({ id: headingId(section.heading), label: section.heading })) : []
  const activeId = useScrollSpy(tocItems.map((item) => item.id))

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const relatedPosts = blogPosts
    .filter((item) => item.category === post.category && item.slug !== post.slug)
    .slice(0, 3)
  const currentIndex = blogPosts.findIndex((item) => item.slug === post.slug)
  const previousPost = blogPosts[currentIndex + 1]
  const nextPost = blogPosts[currentIndex - 1]

  return (
    <article className="blog-detail-page">
      <Link className="back-link" to="/blog">
        返回博客
      </Link>

      <header className="blog-article-header">
        <p className="eyebrow">{post.category}</p>
        <h1>{post.title}</h1>
        <p className="hero-subtitle">{post.subtitle}</p>
        <div className="blog-meta-row article-meta">
          <time dateTime={post.date}>{post.date}</time>
          <span>{post.readingMinutes} min read</span>
          <span>{post.tags.join(' / ')}</span>
        </div>
      </header>

      <div className="blog-reading-layout">
        <aside className="blog-toc" aria-label="文章目录">
          <p className="eyebrow">Contents</p>
          <ol>
            {tocItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeId === item.id ? 'active' : ''}
                  aria-current={activeId === item.id ? 'location' : undefined}
                  onClick={(event) => {
                    event.preventDefault()
                    scrollToAnchor(item.id)
                  }}
                >{item.label}</a>
              </li>
            ))}
          </ol>
        </aside>

        <div className="blog-article-body">
          {post.sections.map((section) => (
            <section id={headingId(section.heading)} key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </div>

      <nav className="blog-post-nav" aria-label="文章前后导航">
        {previousPost ? (
          <Link to={`/blog/${previousPost.slug}`}>
            <span>上一篇</span>
            <strong>{previousPost.title}</strong>
          </Link>
        ) : <span />}
        {nextPost ? (
          <Link to={`/blog/${nextPost.slug}`}>
            <span>下一篇</span>
            <strong>{nextPost.title}</strong>
          </Link>
        ) : <span />}
      </nav>

      {relatedPosts.length > 0 ? (
        <section className="blog-related">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Related</p>
            <h2>同主题文章</h2>
          </div>
          <div className="blog-post-grid compact">
            {relatedPosts.map((item) => (
              <Link className="blog-post-card" key={item.slug} to={`/blog/${item.slug}`}>
                <div className="blog-card-topline">
                  <span>{item.category}</span>
                  <time dateTime={item.date}>{item.date}</time>
                </div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </article>
  )
}
