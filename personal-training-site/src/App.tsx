import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { Link, Navigate, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, Search, Settings, X } from 'lucide-react'
import './App.css'
import './styles/design-system.css'
import { SettingsModal } from './components/SettingsModal'
import { useDialogFocus } from './hooks/useDialogFocus'

const AlgorithmPage = lazy(() => import('./pages/AlgorithmPage').then((module) => ({ default: module.AlgorithmPage })))
const AlgorithmPracticePage = lazy(() => import('./pages/AlgorithmPracticePage').then((module) => ({ default: module.AlgorithmPracticePage })))
const CareerPage = lazy(() => import('./pages/CareerPage').then((module) => ({ default: module.CareerPage })))
const LessonDetailPage = lazy(() => import('./pages/LessonDetailPage').then((module) => ({ default: module.LessonDetailPage })))
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
const StockPage = lazy(() => import('./pages/StockPage').then((module) => ({ default: module.StockPage })))
const AskPage = lazy(() => import('./pages/AskPage').then((module) => ({ default: module.AskPage })))
const FeynmanPage = lazy(() => import('./pages/FeynmanPage').then((module) => ({ default: module.FeynmanPage })))
const ProjectsPage = lazy(() =>
  import('./pages/ProjectsPage').then((module) => ({ default: module.ProjectsPage })),
)
const MovementDetailPage = lazy(() =>
  import('./pages/MovementDetailPage').then((module) => ({ default: module.MovementDetailPage })),
)
const TrainingPage = lazy(() => import('./pages/TrainingPage').then((module) => ({ default: module.TrainingPage })))
const XunjiLogPage = lazy(() => import('./pages/XunjiLogPage').then((module) => ({ default: module.XunjiLogPage })))
const WrappedPage = lazy(() => import('./pages/WrappedPage').then((module) => ({ default: module.WrappedPage })))

const navItems = [
  { label: '首页', to: '/' },
  { label: '博客', to: '/blog' },
  { label: '自我提升', to: '/training' },
  { label: '职业成长', to: '/career' },
  { label: '费曼练习', to: '/feynman' },
  { label: '股票观察', to: '/stock' },
  { label: '项目', to: '/projects' },
  { label: '年度回顾', to: '/wrapped' },
]

function ScrollManager() {
  const location = useLocation()
  const firstRender = useRef(true)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (location.hash) {
        document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'auto' })
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' })
      }
      if (!firstRender.current && !location.hash) document.getElementById('main-content')?.focus({ preventScroll: true })
      firstRender.current = false
    })

    return () => window.cancelAnimationFrame(frame)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const label = location.pathname.startsWith('/ask') ? '问我的站'
      : location.pathname.startsWith('/xunji-log') ? '训练日志'
      : location.pathname.startsWith('/algorithm') ? '算法练习'
      : navItems.find((item) => item.to !== '/' && location.pathname.startsWith(item.to))?.label ?? '个人工作台'
    document.title = `${label} · Lam Soengceng`
  }, [location.pathname])

  return null
}

function PageFallback() {
  return <div className="page-loading" role="status">正在加载页面…</div>
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
  const [lastLocation, setLastLocation] = useState(location)
  const menuRef = useRef<HTMLDivElement>(null)
  const closeMenu = useCallback(() => setMenuOpen(false), [])
  const closeSettings = useCallback(() => setSettingsOpen(false), [])
  useDialogFocus(menuOpen, menuRef, closeMenu)

  // 路由变化时收起菜单：渲染期对比 location，比 effect 里同步 setState 少一次级联渲染
  if (lastLocation !== location) {
    setLastLocation(location)
    setMenuOpen(false)
  }

  useEffect(() => {
    const openSettings = () => { setMenuOpen(false); setSettingsOpen(true) }
    window.addEventListener('open-site-settings', openSettings)
    return () => window.removeEventListener('open-site-settings', openSettings)
  }, [])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1180px)')
    const handleResize = () => { if (desktop.matches) closeMenu() }
    desktop.addEventListener('change', handleResize)
    return () => desktop.removeEventListener('change', handleResize)
  }, [closeMenu])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">跳到主要内容</a>
      <header className="workbench-header">
        <Link className="workbench-brand" to="/" aria-label="Lam 的工作台，返回首页">
          <svg width="26" height="26" viewBox="0 0 256 256" fill="#ffffff" aria-hidden="true">
            <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
          </svg>
          <span><b className="font-playfair">Lam</b><small>个人工作台</small></span>
        </Link>

        <nav className="workbench-navigation" aria-label="主导航">
          {navItems.map((item) => (
            <NavLink
              className="workbench-nav-link"
              end={item.to === '/'}
              key={item.label}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="workbench-header-actions">
          <NavLink className="workbench-ask-link" to="/ask"><Search size={16} /><span>问我的站</span></NavLink>
          <button
            className="settings-trigger workbench-icon-button"
            type="button"
            aria-label="网站设置"
            title="网站设置"
            onClick={() => setSettingsOpen(true)}
          >
            <Settings size={18} />
          </button>
          <button
            className="workbench-menu-button workbench-icon-button"
            type="button"
            aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {menuOpen ? (
        <div className="workbench-menu-overlay" onClick={closeMenu} role="presentation">
          <div className="workbench-menu-panel" id="mobile-navigation" ref={menuRef} role="dialog" aria-modal="true" aria-label="网站导航" tabIndex={-1} onClick={(event) => event.stopPropagation()}>
            <div className="workbench-menu-heading"><span>去哪里看看？</span><button className="workbench-icon-button" type="button" aria-label="关闭导航" onClick={closeMenu}><X size={22} /></button></div>
            <nav aria-label="折叠导航">
              {[...navItems, { label: '问我的站', to: '/ask' }].map((item) => (
                <NavLink className="workbench-menu-link" end={item.to === '/'} key={item.to} to={item.to}>
                  {item.label}<ArrowUpRight size={16} />
                </NavLink>
              ))}
            </nav>
            <Link className="workbench-menu-review" to="/algorithm/review">继续算法复习 →</Link>
          </div>
        </div>
      ) : null}

      <main id="main-content" tabIndex={-1}>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:postSlug" element={<BlogDetailPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/xunji-log" element={<XunjiLogPage />} />
          <Route path="/algorithm" element={<AlgorithmPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/career/lessons/:lessonSlug" element={<LessonDetailPage />} />
          <Route path="/algorithm/review" element={<AlgorithmReviewPage />} />
          <Route path="/algorithm/practice/:problemSlug" element={<AlgorithmPracticePage />} />
          <Route path="/stock" element={<StockPage />} />
          <Route path="/market" element={<Navigate to="/stock" replace />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/wrapped" element={<WrappedPage />} />
          <Route path="/ask" element={<AskPage />} />
          <Route path="/feynman" element={<FeynmanPage />} />
          <Route path="/training/:movementId" element={<MovementDetailPage />} />
          <Route path="/fitness/:movementId" element={<MovementDetailPage />} />
          <Route path="/algorithm/:problemSlug" element={<AlgorithmDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <ScrollManager />
      </Suspense>
      </main>
      <footer className="workbench-footer">
        <div><Link to="/" className="font-playfair">Lam Soengceng</Link><p>记录过程，也记录每一点进步。</p></div>
        <nav aria-label="页脚导航"><Link to="/blog">读博客</Link><Link to="/projects">看项目</Link><Link to="/ask">问我的站</Link></nav>
      </footer>
      <SettingsModal open={settingsOpen} onClose={closeSettings} />
    </div>
  )
}

export default App
