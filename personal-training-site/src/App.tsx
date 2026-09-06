import { lazy, Suspense, useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { Menu, Settings } from 'lucide-react'
import './App.css'
import { SettingsModal } from './components/SettingsModal'

const AlgorithmPage = lazy(() => import('./pages/AlgorithmPage').then((module) => ({ default: module.AlgorithmPage })))
const AlgorithmReviewPage = lazy(() =>
  import('./pages/AlgorithmReviewPage').then((module) => ({ default: module.AlgorithmReviewPage })),
)
const AlgorithmDetailPage = lazy(() =>
  import('./pages/AlgorithmDetailPage').then((module) => ({ default: module.AlgorithmDetailPage })),
)
const BlogPage = lazy(() => import('./pages/BlogPage').then((module) => ({ default: module.BlogPage })))
const BlogDetailPage = lazy(() =>
  import('./pages/BlogDetailPage').then((module) => ({ default: module.BlogDetailPage })),
)
const HomePage = lazy(() => import('./pages/HomePage').then((module) => ({ default: module.HomePage })))
const MarketPage = lazy(() => import('./pages/MarketPage').then((module) => ({ default: module.MarketPage })))
const ProjectsPage = lazy(() =>
  import('./pages/ProjectsPage').then((module) => ({ default: module.ProjectsPage })),
)
const MovementDetailPage = lazy(() =>
  import('./pages/MovementDetailPage').then((module) => ({ default: module.MovementDetailPage })),
)
const TrainingPage = lazy(() => import('./pages/TrainingPage').then((module) => ({ default: module.TrainingPage })))

const navItems = [
  { label: 'Blog', to: '/blog' },
  { label: 'Growth', to: '/training' },
  { label: 'Algorithm', to: '/algorithm' },
  { label: 'Market', to: '/market' },
  { label: 'Projects', to: '/projects' },
  { label: 'Notes', to: '/blog/personal-site-as-lab' },
]

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (location.hash) {
        document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' })
      }
    })

    return () => window.cancelAnimationFrame(frame)
  }, [location.pathname, location.hash])

  return null
}

function PageFallback() {
  return <div className="page-loading" role="status">Loading page...</div>
}

function NotFoundPage() {
  return (
    <section className="not-found-page">
      <p className="eyebrow">404 / Not found</p>
      <h1>页面不存在</h1>
      <p className="hero-text">这个地址没有对应的公开内容。</p>
      <Link className="primary-link" to="/">返回首页</Link>
    </section>
  )
}

function App() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const openSettings = () => setSettingsOpen(true)
    window.addEventListener('open-site-settings', openSettings)
    return () => window.removeEventListener('open-site-settings', openSettings)
  }, [])

  return (
    <main className="min-h-screen bg-[#050806] tracking-[-0.02em]" style={{ fontFamily: 'var(--font-sans)' }}>
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between border-b border-white/5 bg-[#050806]/70 p-4 backdrop-blur-sm sm:p-5">
        <Link className="flex items-center gap-2" to="/" aria-label="返回首页">
          <svg width="26" height="26" viewBox="0 0 256 256" fill="#ffffff" aria-hidden="true">
            <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
          </svg>
          <span className="text-white text-2xl font-playfair italic">Lam</span>
        </Link>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-2 py-2 items-center gap-1 shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
          {navItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                `text-white/80 hover:bg-white/20 hover:text-white transition-colors px-4 py-1.5 rounded-full text-sm font-medium ${isActive ? 'bg-white/20 text-white' : ''}`
              }
              key={item.label}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            className="settings-trigger"
            type="button"
            aria-label="网站设置"
            title="网站设置"
            onClick={() => setSettingsOpen(true)}
          >
            <Settings size={18} />
          </button>
          <Link className="hidden md:block bg-[#30f27b] text-[#031006] text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#94ffbd] transition-colors shadow-lg shadow-[#30f27b]/20" to="/blog">
            Read Blog
          </Link>
          <button
            className="md:hidden text-white"
            type="button"
            aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Menu size={28} strokeWidth={2} />
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div className="mobile-navigation" id="mobile-navigation">
          {navItems.map((item) => (
            <NavLink className="mobile-navigation-link" key={item.label} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </div>
      ) : null}

      <ScrollManager />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:postSlug" element={<BlogDetailPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/algorithm" element={<AlgorithmPage />} />
          <Route path="/algorithm/review" element={<AlgorithmReviewPage />} />
          <Route path="/market" element={<MarketPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/training/:movementId" element={<MovementDetailPage />} />
          <Route path="/fitness/:movementId" element={<MovementDetailPage />} />
          <Route path="/algorithm/:problemSlug" element={<AlgorithmDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <SettingsModal open={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </main>
  )
}

export default App
