import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUpRight, BookOpen, Code2, Dumbbell, FolderGit2, MessageCircle, TrendingUp } from 'lucide-react'
import { algorithmMeta } from '../data/algorithmMeta'
import { blogPosts, featuredBlogPost } from '../data/blogData'
import { xunjiDaySummaries } from '../data/xunjiData'
import { stockMeta } from '../data/stockData'

function PersonalHero() {
  const heroRef = useRef<HTMLElement | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero || !window.matchMedia('(pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let cursorX = -999
    let cursorY = -999

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = hero.getBoundingClientRect()
      cursorX = event.clientX - bounds.left
      cursorY = event.clientY - bounds.top
      if (rafRef.current !== null) return

      rafRef.current = window.requestAnimationFrame(() => {
        hero.style.setProperty('--cursor-x', `${cursorX}px`)
        hero.style.setProperty('--cursor-y', `${cursorY}px`)
        rafRef.current = null
      })
    }

    hero.addEventListener('pointermove', handlePointerMove)

    return () => {
      hero.removeEventListener('pointermove', handlePointerMove)
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <section className="workspace-hero" aria-labelledby="home-title">
      <div className="workspace-hero-copy">
        <p className="workspace-kicker"><span /> PERSONAL WORKSPACE / 持续生长</p>
        <h1 id="home-title"><span className="font-playfair">Lam</span><span className="font-playfair">Soengceng<span className="workspace-title-dot">.</span></span></h1>
        <h2>把每一点进步，记在这里。</h2>
        <p className="workspace-intro">训练身体，练习思考，认真记录。这里是我的博客，也是把算法、训练和项目慢慢做扎实的个人工作台。</p>
        <div className="workspace-hero-actions">
          <Link className="workspace-action-primary" to="/career">进入职业成长<ArrowUpRight size={18} /></Link>
          <Link className="workspace-action-secondary" to="/training#journal">写一篇日记<BookOpen size={17} /></Link>
        </div>
        <Link className="workspace-browse" to="/#explore">探索我的工作台<ArrowDown size={15} /></Link>
      </div>
      <aside ref={heroRef} className="workspace-hero-art" aria-label="工作台封面">
        <div className="workspace-art-image" aria-hidden="true" />
        <div className="hero-reveal-layer workspace-art-image" aria-hidden="true" />
        <div className="workspace-art-shade" aria-hidden="true" />
        <div className="workspace-art-label"><span>THE LONG GAME</span><span>01 / 记录与生长</span></div>
        <div className="workspace-art-center" aria-hidden="true"><span>01</span><span className="workspace-art-orbit" /><span className="workspace-art-orbit workspace-art-orbit-small" /></div>
        <div className="workspace-art-caption"><span>一点一点，成为想成为的人。</span><p>BUILD · LEARN · REPEAT</p></div>
      </aside>
    </section>
  )
}

const homeModules = [
  {
    eyebrow: 'Blog',
    icon: BookOpen,
    title: '个人博客',
    description: '训练、算法、Agent 开发和网站迭代的长期记录。文章是入口，专题页是证据。',
    stat: blogPosts.length.toString(),
    detail: '篇记录',
    to: '/blog',
    action: '进入博客',
  },
  {
    eyebrow: 'Training',
    icon: Dumbbell,
    title: '自我提升',
    description: '写给自己看的日记，加上身体训练的长期数据：频率、主项变化、肌群覆盖和 PR。',
    stat: xunjiDaySummaries.filter((day) => day.sessions > 0).length.toString(),
    detail: '个训练日 · 已同步记录',
    to: '/training',
    action: '进入提升页',
  },
  {
    eyebrow: 'Career',
    icon: Code2,
    title: '职业成长',
    description: '把算法复习、面经问题和未来的工作复盘串成一条学习路径。',
    stat: `${algorithmMeta.solved}/${algorithmMeta.total}`,
    detail: '题已完成 · 含拓展',
    to: '/career',
    action: '进入职业页',
  },
  {
    eyebrow: 'Feynman',
    icon: MessageCircle,
    title: '费曼练习',
    description: '用自己的话讲清一个知识点，再通过反馈找到理解中的缺口。',
    stat: '讲清楚',
    detail: '才算真正理解',
    to: '/feynman',
    action: '开始讲述',
  },
  {
    eyebrow: 'Stock',
    icon: TrendingUp,
    title: 'A 股股票观察',
    description: '查看指数、行业和市场结构，结合数据日期阅读已同步的市场快照。',
    stat: stockMeta.trackedMarkets.toString(),
    detail: '个观察标的',
    to: '/stock',
    action: '进入股票页',
  },
  {
    eyebrow: 'Projects',
    icon: FolderGit2,
    title: '项目与实践',
    description: '从一个想法到可以使用的作品，留下实现过程、技术选择与复盘。',
    stat: '边做边学',
    detail: '让想法落地',
    to: '/projects',
    action: '查看项目',
  },
]

export function HomePage() {
  const latestPosts = blogPosts.filter((post) => post.slug !== featuredBlogPost.slug).slice(0, 3)

  return (
    <>
      <PersonalHero />

      <div className="home-after-hero">
        <section className="workspace-explore-heading" id="explore"><div><p className="eyebrow">Explore / 从这里开始</p><h2>今天，想做点什么？</h2></div><p>留一点时间，给长期值得做的事。</p></section>
        <section className="home-module-grid workspace-module-grid" aria-label="网站主板块">
          {homeModules.map((module) => (
            <Link className="home-module-card" key={module.title} to={module.to}>
              <div>
                <div className="workspace-module-top"><p className="eyebrow">{module.eyebrow}</p><module.icon size={21} strokeWidth={1.5} /></div>
                <h2>{module.title}</h2>
                <p>{module.description}</p>
              </div>
              <div className="module-stat-row">
                <strong>{module.stat}</strong>
                <span>{module.detail}</span>
              </div>
              <b>{module.action}<ArrowUpRight size={16} /></b>
            </Link>
          ))}
        </section>

        <section className="home-writing-section" aria-label="最近文章">
          <div className="section-heading">
            <p className="eyebrow">Latest Notes</p>
            <h2>最近写了什么</h2>
            <p>
              博客是这个站点的主线：每篇文章解释一个阶段的判断，专题页负责把训练、算法和项目数据展开。
            </p>
          </div>
          <div className="home-writing-layout">
            <Link className="home-feature-post" to={`/blog/${featuredBlogPost.slug}`}>
              <span>{featuredBlogPost.category}</span>
              <h3>{featuredBlogPost.title}</h3>
              <p>{featuredBlogPost.summary}</p>
              <b>{featuredBlogPost.date}</b>
            </Link>
            <div className="home-post-list">
              {latestPosts.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`}>
                  <time dateTime={post.date}>{post.date}</time>
                  <strong>{post.title}</strong>
                  <span>{post.category}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="split-section" id="projects">
          <div>
            <p className="eyebrow">Projects</p>
            <h2>这个博客本身就是一个作品集项目。</h2>
          </div>
          <p>
            它可以展示 React、TypeScript、数据可视化、静态部署、本地同步脚本、
            API 安全设计和 Agent 工作流。文章提供上下文，专题页面提供可验证的结果。
          </p>
          <Link className="primary-link" to="/projects">
            查看项目清单
          </Link>
        </section>

        <section className="workflow-section" id="workflow">
          <div className="section-heading">
            <p className="eyebrow">Data workflow</p>
            <h2>记录如何来到这里。</h2>
          </div>
          <div className="workflow-grid">
            <article>
              <span>01</span>
              <h3>本地同步</h3>
              <p>本地脚本调用训记 API 或读取 LeetCode 文件，生成静态公开数据。</p>
            </article>
            <article>
              <span>02</span>
              <h3>脱敏聚合</h3>
              <p>训练只展示公开指标；算法只展示题解、相对路径和复习信息。</p>
            </article>
            <article>
              <span>03</span>
              <h3>静态发布</h3>
              <p>网站展示已生成的数据快照；同步密钥只用于本地脚本，不随网页发布。</p>
            </article>
          </div>
        </section>

        <section className="split-section" id="writing">
          <div>
            <p className="eyebrow">Writing</p>
            <h2>博客记录过程，专题页沉淀结果。</h2>
          </div>
          <p>
            后续可以加入训练周报、前端学习笔记、Agent 开发复盘和项目 changelog。
            这个站点会同时成为个人博客、作品集和学习档案。
          </p>
        </section>
      </div>
    </>
  )
}
