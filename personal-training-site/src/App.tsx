import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { Link, Navigate, NavLink, Route, Routes, useLocation, useNavigationType } from 'react-router-dom'
import { Dumbbell, Home, Menu, MoreHorizontal, Moon, Search, Settings, Sun, TrendingUp, X } from 'lucide-react'
import './App.css'
import './styles/design-system.css'
import './styles/theme-light.css'
import { SettingsModal } from './components/SettingsModal'
import { useDialogFocus } from './hooks/useDialogFocus'
import { loadTheme, toggleTheme, type SiteTheme } from './utils/theme'

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
const ProjectsPage = lazy(() =>
  import('./pages/ProjectsPage').then((module) => ({ default: module.ProjectsPage })),
)
const MovementDetailPage = lazy(() =>
  import('./pages/MovementDetailPage').then((module) => ({ default: module.MovementDetailPage })),
)
const TrainingPage = lazy(() => import('./pages/TrainingPage').then((module) => ({ default: module.TrainingPage })))
const XunjiLogPage = lazy(() => import('./pages/XunjiLogPage').then((module) => ({ default: module.XunjiLogPage })))
const WrappedPage = lazy(() => import('./pages/WrappedPage').then((module) => ({ default: module.WrappedPage })))

// label 是栏目名，同时用于浏览器标题与各页封面，不轻易改动；hint 是给导航用的白话注解。
const navItems = [
  { label: '首页', hint: '工作台首页', to: '/' },
  { label: '日知', hint: '博客 · 文章', to: '/blog' },
  { label: '磨剑', hint: '训练 · 日记', to: '/training' },
  { label: '攻玉', hint: '求职 · 课程', to: '/career' },
  { label: '货殖', hint: '行情 · 股票', to: '/stock' },
  { label: '营造', hint: '项目 · 作品', to: '/projects' },
  { label: '岁晏', hint: '年度 · 回顾', to: '/wrapped' },
]

// 滚动位置按 pathname 存 sessionStorage，返回手势（POP）时恢复，前进导航仍回顶部。
const SCROLL_STORAGE_KEY = 'site-scroll-positions'

function readScrollMap(): Record<string, number> {
  try {
    return JSON.parse(sessionStorage.getItem(SCROLL_STORAGE_KEY) ?? '{}') as Record<string, number>
  } catch {
    return {}
  }
}

function writeScrollPosition(pathname: string, top: number) {
  try {
    const map = readScrollMap()
    map[pathname] = Math.round(top)
    sessionStorage.setItem(SCROLL_STORAGE_KEY, JSON.stringify(map))
  } catch {
    // sessionStorage 不可用（隐私模式）时仅本页返回可用，静默降级
  }
}

function ScrollManager() {
  const location = useLocation()
  const navigationType = useNavigationType()
  const firstRender = useRef(true)
  const latestScrollY = useRef(0)
  const previousPathname = useRef<string | null>(null)

  // 滚动时记下当前位置：离开页面的瞬间 DOM 已切换，事后读 scrollY 会被新页面钳到 0
  useEffect(() => {
    latestScrollY.current = window.scrollY
    const record = () => { latestScrollY.current = window.scrollY }
    window.addEventListener('scroll', record, { passive: true })
    return () => window.removeEventListener('scroll', record)
  }, [])

  useEffect(() => {
    if (!firstRender.current && previousPathname.current) {
      writeScrollPosition(previousPathname.current, latestScrollY.current)
    }
    previousPathname.current = location.pathname

    // 安卓返回手势对应 POP；带锚点时仍走锚点定位，优先级更高
    const savedTop = !firstRender.current && !location.hash && navigationType === 'POP'
      ? readScrollMap()[location.pathname]
      : undefined

    let frame = 0
    let attempts = 0
    const scrollNow = () => {
      if (typeof savedTop === 'number') {
        // 懒加载正文可能还没撑开页面，逐帧等高度到位再恢复，约 0.7s 上限
        if (document.documentElement.scrollHeight >= savedTop + window.innerHeight || attempts++ >= 45) {
          window.scrollTo({ top: savedTop, behavior: 'auto' })
        } else {
          frame = window.requestAnimationFrame(scrollNow)
          return
        }
      } else if (location.hash) {
        const target = document.getElementById(location.hash.slice(1))
        if (target) {
          target.scrollIntoView({ behavior: 'auto' })
        } else if (attempts++ < 45) {
          // 懒加载页面的锚点元素可能还没挂载，逐帧重试约 0.7s
          frame = window.requestAnimationFrame(scrollNow)
          return
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' })
      }
      if (!firstRender.current && !location.hash) document.getElementById('main-content')?.focus({ preventScroll: true })
      firstRender.current = false
    }
    frame = window.requestAnimationFrame(scrollNow)

    return () => window.cancelAnimationFrame(frame)
  }, [location.pathname, location.hash, navigationType])

  useEffect(() => {
    const label = location.pathname.startsWith('/ask') ? '问我的站'
      : location.pathname.startsWith('/xunji-log') ? '训练日志'
      : location.pathname.startsWith('/algorithm') ? '算法练习'
      : navItems.find((item) => item.to !== '/' && location.pathname.startsWith(item.to))?.label ?? '个人工作台'
    document.title = `${label} · Lam Soengceng`
  }, [location.pathname])

  return null
}

// 骨架屏占位：视觉块给等待感，role=status 让读屏用户仍能听到加载提示
function PageFallback() {
  return (
    <div className="page-skeleton" role="status" aria-label="正在加载页面">
      <span className="skeleton-block skeleton-eyebrow" aria-hidden="true" />
      <span className="skeleton-block skeleton-title" aria-hidden="true" />
      <span className="skeleton-block skeleton-line" aria-hidden="true" />
      <span className="skeleton-block skeleton-line skeleton-line-short" aria-hidden="true" />
    </div>
  )
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
  const [theme, setTheme] = useState<SiteTheme>(loadTheme)
  const [offline, setOffline] = useState(() => !window.navigator.onLine)
  const [lastLocation, setLastLocation] = useState(location)
  const menuRef = useRef<HTMLDivElement>(null)
  const closeMenu = useCallback(() => setMenuOpen(false), [])
  const closeSettings = useCallback(() => setSettingsOpen(false), [])
  useDialogFocus(menuOpen, menuRef, closeMenu)

  useEffect(() => {
    const syncTheme = () => setTheme(loadTheme())
    window.addEventListener('site-theme-changed', syncTheme)
    return () => window.removeEventListener('site-theme-changed', syncTheme)
  }, [])

  // 主题色随主题同步到状态栏：深色沿用 index.html 的首帧值，浅色取浅色主题的页面底色
  useEffect(() => {
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#eef3f0' : '#050806')
  }, [theme])

  useEffect(() => {
    const goOffline = () => setOffline(true)
    const goOnline = () => setOffline(false)
    window.addEventListener('offline', goOffline)
    window.addEventListener('online', goOnline)
    return () => {
      window.removeEventListener('offline', goOffline)
      window.removeEventListener('online', goOnline)
    }
  }, [])

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
              title={item.hint}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="workbench-header-actions">
          <NavLink className="workbench-ask-link" to="/ask"><Search size={16} /><span>问我的站</span></NavLink>
          <button
            className="workbench-icon-button"
            type="button"
            aria-label={theme === 'light' ? '切换到深色' : '切换到浅色'}
            title={theme === 'light' ? '切换到深色' : '切换到浅色'}
            onClick={() => toggleTheme()}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
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

      {offline ? <p className="offline-banner" role="status">当前离线，部分功能不可用</p> : null}

      {menuOpen ? (
        <div className="workbench-menu-overlay" onClick={closeMenu} role="presentation">
          <div className="workbench-menu-panel" id="mobile-navigation" ref={menuRef} role="dialog" aria-modal="true" aria-label="网站导航" tabIndex={-1} onClick={(event) => event.stopPropagation()}>
            <div className="workbench-menu-heading"><span>Navigate · 去哪里看看</span><button className="workbench-icon-button" type="button" aria-label="关闭导航" onClick={closeMenu}><X size={22} /></button></div>
            <nav aria-label="折叠导航">
              {[...navItems, { label: '问我的站', hint: '站内问答', to: '/ask' }].map((item, index) => (
                <NavLink className="workbench-menu-link" aria-label={item.label} end={item.to === '/'} key={item.to} to={item.to}>
                  <span className="workbench-menu-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="workbench-menu-label">{item.label}</span>
                  <span className="workbench-menu-hint">{item.hint}</span>
                </NavLink>
              ))}
            </nav>
            <Link className="workbench-menu-review" to="/algorithm/review">继续算法复习 →</Link>
          </div>
        </div>
      ) : null}

      <main id="main-content" tabIndex={-1}>
      <Suspense fallback={<PageFallback />}>
        {/* ScrollManager 在 Suspense 内：懒加载页解析后才挂载，锚点重试预算从正文就绪起算；
            在 keyed div 外：实例跨路由存活，滚动位置才能写入/读回 sessionStorage */}
        <div key={location.pathname.split('/')[1] ?? ''} className="page-transition">
        {/* key 取路由第一段：跨栏目切换重挂载触发淡入，同栏目参数导航（如 /blog/a → /blog/b）保留页面本地 state */}
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
          <Route path="/feynman" element={<Navigate to="/career#feynman" replace />} />
          <Route path="/training/:movementId" element={<MovementDetailPage />} />
          <Route path="/fitness/:movementId" element={<MovementDetailPage />} />
          <Route path="/algorithm/:problemSlug" element={<AlgorithmDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </div>
        <ScrollManager />
      </Suspense>
      </main>
      <footer className="workbench-footer">
        <div><Link to="/" className="font-playfair">Lam Soengceng</Link><p>记录过程，也记录每一点进步。</p></div>
        <nav aria-label="页脚导航"><Link to="/blog">读博客</Link><Link to="/projects">看项目</Link><Link to="/ask">问我的站</Link></nav>
      </footer>
      <nav className="mobile-tab-bar" aria-label="底部导航">
        {[
          { label: '首页', to: '/', icon: Home, title: '首页' },
          { label: '训练', to: '/training', icon: Dumbbell, title: '磨剑 · 训练与日记' },
          { label: '行情', to: '/stock', icon: TrendingUp, title: '货殖 · 股票行情' },
          { label: '问我的站', to: '/ask', icon: Search, title: '问我的站 · 站内问答' },
        ].map(({ label, to, icon: Icon, title }) => (
          <NavLink className="mobile-tab-link" end={to === '/'} key={label} to={to} title={title} aria-label={title}>
            <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
            <span>{label}</span>
          </NavLink>
        ))}
        <button
          className="mobile-tab-link mobile-tab-more"
          type="button"
          aria-haspopup="dialog"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <MoreHorizontal size={20} strokeWidth={1.75} aria-hidden="true" />
          <span>更多</span>
        </button>
      </nav>
      <SettingsModal open={settingsOpen} onClose={closeSettings} />
    </div>
  )
}

export default App
