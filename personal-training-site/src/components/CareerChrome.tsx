import { useEffect, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { CAREER_MODULES, type CareerModuleId, type CareerSectionId } from './careerModules'

/** 攻玉唯一模块入口：左侧固定竖直导航（窄屏自动变成吸顶横向条），当前模块高亮，点击切换。
 * CareerPage 传 onSectionChange 在区块间原地切换；运筹等独立子页不传时，四个区块渲染成 /career#hash 链接。 */
export function CareerChrome({ active, onSectionChange, railDesc, children }: {
  active: CareerModuleId
  onSectionChange?: (id: CareerSectionId) => void
  railDesc?: Partial<Record<CareerModuleId, string>>
  children: ReactNode
}) {
  // rail 吸顶偏移跟随站头实际高度（桌面/移动端不同）
  useEffect(() => {
    const header = document.querySelector('.workbench-header, .site-header, header')
    if (!header) return
    const apply = () => document.documentElement.style.setProperty('--header-h', `${header.getBoundingClientRect().height}px`)
    apply()
    window.addEventListener('resize', apply)
    return () => window.removeEventListener('resize', apply)
  }, [])

  const renderModule = (module: (typeof CAREER_MODULES)[number]) => {
    const body = <>
      <b>{module.name}</b>
      <small>{railDesc?.[module.id] ?? module.desc}</small>
    </>
    if (module.id === 'algorithm') {
      return <Link key={module.id} className={active === module.id ? 'active' : ''} to="/algorithm" onClick={() => window.scrollTo({ top: 0 })}>{body}</Link>
    }
    // 走到这里必然不是运筹，TS 无法从联合类型自动收窄
    const sectionId = module.id as CareerSectionId
    return onSectionChange
      ? <button type="button" key={module.id} className={active === module.id ? 'active' : ''} onClick={() => onSectionChange(sectionId)}>{body}</button>
      : <Link key={module.id} className={active === module.id ? 'active' : ''} to={`/career#${sectionId}`}>{body}</Link>
  }

  return (
    <div className="career-page content-band after-cover career-with-rail">
      <nav className="career-rail" aria-label="攻玉模块导航">
        {CAREER_MODULES.map(renderModule)}
      </nav>
      <div className="career-main">
        {children}
      </div>
    </div>
  )
}
