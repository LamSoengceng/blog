import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUp } from 'lucide-react'
import { loadLesson, lessons } from '../data/lessons'
import { LessonRenderer } from '../components/lesson/LessonRenderer'
import { LessonToc } from '../components/lesson/LessonToc'
import { lessonTocItems } from '../components/lesson/lessonTocItems'
import type { Lesson } from '../data/lessons/types'

export function LessonDetailPage() {
  const { lessonSlug } = useParams()
  // 正文按需动态加载（index/content 分离）：undefined=加载中，missing=确认无此课。
  // 换课时用渲染期重置（React 官方模式），避免 effect 里同步 setState。
  const [lesson, setLesson] = useState<Lesson | undefined>()
  const [missing, setMissing] = useState(false)
  const [loadedSlug, setLoadedSlug] = useState(lessonSlug)
  if (loadedSlug !== lessonSlug) {
    setLoadedSlug(lessonSlug)
    setLesson(undefined)
    setMissing(false)
  }
  // 阅读进度（顶部细线）与回到顶部按钮；监听放在最前，避免 404 分支提前 return 打乱 hooks
  const [progress, setProgress] = useState(0)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    let active = true
    loadLesson(lessonSlug).then((data) => {
      if (!active) return
      if (data === undefined) setMissing(true)
      else setLesson(data)
    })
    return () => { active = false }
  }, [lessonSlug])

  useEffect(() => {
    const onScroll = () => {
      const remaining = document.documentElement.scrollHeight - window.innerHeight
      setProgress(remaining > 0 ? Math.min(window.scrollY / remaining, 1) : 0)
      setShowTop(window.scrollY > window.innerHeight)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll) }
  }, [lessonSlug])

  if (!lesson) {
    if (!missing) return <section className="not-found-page" aria-busy="true" />
    return (
      <section className="not-found-page">
        <p className="eyebrow">404 / Lesson not found</p>
        <h1>课程不存在</h1>
        <p className="hero-text">这个地址没有对应的视频讲义。</p>
        <Link className="primary-link" to="/career">回到攻玉</Link>
      </section>
    )
  }

  const index = lessons.findIndex((item) => item.slug === lesson.slug)
  const previous = lessons[index + 1]
  const next = lessons[index - 1]
  const toc = <LessonToc key={lesson.slug} lesson={lesson} />
  return (
    <div className="lesson-detail content-band page-band">
      <Link className="lesson-back" to="/career"><ArrowLeft size={16} aria-hidden="true" />返回攻玉</Link>
      <div className="lesson-detail-body">
        <div className="lesson-detail-main">
          <LessonRenderer lesson={lesson} tocSlot={lessonTocItems(lesson).length > 1
            ? <details className="lesson-toc-collapse"><summary>本篇目录</summary>{toc}</details>
            : undefined} />
          <nav className="lesson-pager" aria-label="课程翻页">
            {previous ? <Link to={`/career/lessons/${previous.slug}`}>上一篇：{previous.title}</Link> : <span />}
            {next ? <Link to={`/career/lessons/${next.slug}`}>下一篇：{next.title}</Link> : <span />}
          </nav>
        </div>
        <aside className="lesson-toc-aside" aria-label="讲义目录侧栏">{toc}</aside>
      </div>
      <div className="lesson-progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>
      {showTop ? <button type="button" className="lesson-back-top" aria-label="回到顶部" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><ArrowUp size={16} aria-hidden="true" /></button> : null}
    </div>
  )
}
