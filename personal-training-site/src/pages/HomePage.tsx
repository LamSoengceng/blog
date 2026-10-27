import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, BookOpen, CalendarDays } from 'lucide-react'
import { WatchHubModal } from '../components/WatchHubModal'

function PersonalHero() {
  const heroRef = useRef<HTMLElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const [watchOpen, setWatchOpen] = useState(false)

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
          <Link className="workspace-action-primary" to="/career">进入攻玉<ArrowUpRight size={18} /></Link>
          <Link className="workspace-action-secondary" to="/training#journal">写一篇日记<BookOpen size={17} /></Link>
          <button className="workspace-action-secondary" type="button" onClick={() => setWatchOpen(true)}>
            赛程中心<CalendarDays size={17} />
          </button>
        </div>
      </div>
      <aside ref={heroRef} className="workspace-hero-art" aria-label="工作台封面">
        <div className="workspace-art-image" aria-hidden="true" />
        <div className="hero-reveal-layer workspace-art-image" aria-hidden="true" />
        <div className="workspace-art-shade" aria-hidden="true" />
        <div className="workspace-art-label"><span>THE LONG GAME</span><span>01 / 记录与生长</span></div>
        <div className="workspace-art-center" aria-hidden="true"><span>01</span><span className="workspace-art-orbit" /><span className="workspace-art-orbit workspace-art-orbit-small" /></div>
        <div className="workspace-art-caption"><span>一点一点，成为想成为的人。</span><p>BUILD · LEARN · REPEAT</p></div>
      </aside>
      <WatchHubModal open={watchOpen} onClose={() => setWatchOpen(false)} />
    </section>
  )
}

export function HomePage() {
  return <PersonalHero />
}
