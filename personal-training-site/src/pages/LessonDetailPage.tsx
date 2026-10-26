import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { getLesson, lessons } from '../data/lessons'
import { LessonRenderer } from '../components/lesson/LessonRenderer'

export function LessonDetailPage() {
  const { lessonSlug } = useParams()
  const lesson = lessonSlug ? getLesson(lessonSlug) : undefined
  if (!lesson) {
    return (
      <section className="not-found-page">
        <p className="eyebrow">404 / Lesson not found</p>
        <h1>课程不存在</h1>
        <p className="hero-text">这个地址没有对应的视频课程。</p>
        <Link className="primary-link" to="/career">回到职业成长</Link>
      </section>
    )
  }
  const index = lessons.findIndex((item) => item.slug === lesson.slug)
  const previous = lessons[index + 1]
  const next = lessons[index - 1]
  return (
    <div className="lesson-detail content-band page-band">
      <Link className="lesson-back" to="/career"><ArrowLeft size={16} aria-hidden="true" />返回职业成长</Link>
      <LessonRenderer lesson={lesson} />
      <nav className="lesson-pager" aria-label="课程翻页">
        {previous ? <Link to={`/career/lessons/${previous.slug}`}>上一篇：{previous.title}</Link> : <span />}
        {next ? <Link to={`/career/lessons/${next.slug}`}>下一篇：{next.title}</Link> : <span />}
      </nav>
    </div>
  )
}