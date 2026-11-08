import { lessonTocItems } from './lessonTocItems'
import type { Lesson } from '../../data/lessons/types'
import { scrollToAnchor, useScrollSpy } from '../../hooks/useScrollSpy'

/** 讲义目录：点击平滑滚动到对应小节，滚动时高亮当前小节（scroll-spy）。父组件用 key={lesson.slug} 在换篇时重挂载。 */
export function LessonToc({ lesson }: { lesson: Lesson }) {
  const items = lessonTocItems(lesson)
  const activeId = useScrollSpy(items.map((item) => item.id))

  if (!items.length) return null
  return (
    <nav className="lesson-toc" aria-label="讲义目录">
      <p className="lesson-toc-title">目录</p>
      <ul>
        {items.map((item) => (
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
      </ul>
    </nav>
  )
}
