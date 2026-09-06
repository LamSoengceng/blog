import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { algorithmMeta } from '../data/algorithmMeta'
import { blogPosts, featuredBlogPost } from '../data/blogData'
import { metricCards } from '../data/fitnessData'
import { marketMeta } from '../data/marketData'

const BG_IMAGE_1 =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_195923_b0ba8ace-1d1d-4f2c-9a28-1ab84b330680.png&w=1280&q=85'
const BG_IMAGE_2 =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=1280&q=85'
function PersonalHero() {
  const heroRef = useRef<HTMLElement | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero || !window.matchMedia('(pointer: fine)').matches) return undefined

    let cursorX = -999
    let cursorY = -999

    const handlePointerMove = (event: PointerEvent) => {
      cursorX = event.clientX
      cursorY = event.clientY
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
    <section ref={heroRef} className="personal-hero relative w-full overflow-hidden h-screen bg-black" style={{ height: '100dvh' }}>
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat z-10 hero-zoom"
        style={{ backgroundImage: `url(${BG_IMAGE_1})` }}
      />
      <div
        className="hero-reveal-layer absolute inset-0 bg-center bg-cover bg-no-repeat z-30 pointer-events-none"
        aria-hidden="true"
        style={{ backgroundImage: `url(${BG_IMAGE_2})` }}
      />

      <div className="absolute top-[14%] left-0 right-0 flex flex-col items-center text-center px-5 pointer-events-none z-50">
        <h1 className="text-white leading-[0.95]">
          <span
            className="block font-playfair italic font-normal text-5xl sm:text-7xl md:text-8xl hero-anim hero-reveal"
            style={{ letterSpacing: '-0.05em', animationDelay: '0.25s' }}
          >
            Lam
          </span>
          <span
            className="block font-playfair italic font-normal text-5xl sm:text-7xl md:text-8xl -mt-1 hero-anim hero-reveal"
            style={{ letterSpacing: '-0.08em', animationDelay: '0.42s' }}
          >
            Soengceng
          </span>
        </h1>
        <p
          className="mt-5 max-w-[560px] text-xs sm:text-sm text-white/70 leading-relaxed hero-anim hero-fade"
          style={{ animationDelay: '0.6s' }}
        >
          Personal blog about training data, algorithm practice, frontend learning, and agent-built projects.
        </p>
      </div>

      <div
        className="hidden sm:block absolute bottom-14 left-10 md:left-14 max-w-[260px] z-50 hero-anim hero-fade"
        style={{ animationDelay: '0.7s' }}
      >
        <p className="text-sm text-white/80 leading-relaxed">
          这里不是一个静态名片页，而是我把训练、算法、前端和 Agent 开发持续沉淀下来的公开工作台。
        </p>
      </div>

      <div
        className="absolute bottom-10 sm:bottom-24 left-5 right-5 sm:left-auto sm:right-10 md:right-14 max-w-full sm:max-w-[260px] flex flex-col items-start gap-4 sm:gap-5 z-50 hero-anim hero-fade"
        style={{ animationDelay: '0.85s' }}
      >
        <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
          数据来自本地脚本和公开内容：训练看长期变化，算法看题型与错因，博客记录每次技术选择。
        </p>
        <Link
          className="bg-[#30f27b] hover:bg-[#94ffbd] text-[#031006] text-sm font-semibold px-7 py-3 rounded-full transition-all hover:scale-[1.03] active:scale-95 hover:shadow-lg hover:shadow-[#30f27b]/30"
          to="/blog"
        >
          Read Notes
        </Link>
      </div>
    </section>
  )
}

const homeModules = [
  {
    eyebrow: 'Blog',
    title: '个人博客',
    description: '训练、算法、Agent 开发和网站迭代的长期记录。文章是入口，专题页是证据。',
    stat: blogPosts.length.toString(),
    detail: 'Posts',
    to: '/blog',
    action: '进入博客',
  },
  {
    eyebrow: 'Training',
    title: '自我提升',
    description: '写给自己看的日记，加上身体训练的长期数据：频率、主项变化、肌群覆盖和 PR。',
    stat: metricCards[0].value,
    detail: metricCards[2].value,
    to: '/training',
    action: '进入提升页',
  },
  {
    eyebrow: 'Algorithm',
    title: '算法专题',
    description: 'Hot100 进度、题型分类、面试写法，以及从本地 Python 注释提取的踩坑记录。',
    stat: `${algorithmMeta.solved}/${algorithmMeta.total}`,
    detail: 'Hot100',
    to: '/algorithm',
    action: '进入算法页',
  },
  {
    eyebrow: 'Market',
    title: '股市观察',
    description: '面向 50w 资金量的 A 股驾驶舱：仓位约束、指数、行业、资金流和海外变量。',
    stat: marketMeta.trackedMarkets.toString(),
    detail: 'Markets',
    to: '/market',
    action: '进入股市页',
  },
]

export function HomePage() {
  const latestPosts = blogPosts.filter((post) => post.slug !== featuredBlogPost.slug).slice(0, 3)

  return (
    <>
      <PersonalHero />

      <div className="home-after-hero">
        <section className="home-module-grid" aria-label="网站主板块">
          {homeModules.map((module) => (
            <Link className="home-module-card" key={module.title} to={module.to}>
              <div>
                <p className="eyebrow">{module.eyebrow}</p>
                <h2>{module.title}</h2>
                <p>{module.description}</p>
              </div>
              <div className="module-stat-row">
                <strong>{module.stat}</strong>
                <span>{module.detail}</span>
              </div>
              <b>{module.action}</b>
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
            <h2>公开网页不直接碰私密接口。</h2>
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
              <p>GitHub Pages 只托管前端和公开数据，浏览器不会看到 API key。</p>
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
