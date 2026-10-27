// Ask My Site：把全站内容聚合成分块知识库，问题按 BM25 检索出最相关的块，
// 再交给 BYOK 大模型回答。检索在浏览器本地完成，不依赖向量服务。
import { algorithmProblems } from '../data/algorithm'
import { algorithmMeta } from '../data/algorithmMeta'
import { blogPosts } from '../data/blogData'
import { diaryEntries } from '../data/diaryData'
import { metricCards, movementHighlights, muscleVolumes, prs } from '../data/fitnessData'
import { projects } from '../data/projectsData'
import { lessons } from '../data/lessons'
import { loadJournal } from './journalStore'
import { buildStats, scoreDoc, type Bm25Doc } from './bm25'

export type KnowledgeChunk = {
  id: string
  source: '博客' | '训练日志' | '算法题解' | '日记' | '项目' | '训练数据' | '观澜'
  title: string
  date?: string
  text: string
}

const clip = (text: string, max = 420) => (text.length > max ? `${text.slice(0, max)}…` : text)

// 静态内容（博客/训练日志/算法/项目）只构建一次并缓存；
// 日记来自 localStorage 且会变化，所以每次调用都重新读取，保证不陈旧。
let staticCache: KnowledgeChunk[] | null = null

const buildStaticChunks = (): KnowledgeChunk[] => {
  const chunks: KnowledgeChunk[] = []

  // 博客按小节分块：整篇裁 900 字会把多个话题揉在一起，命中噪音大。
  // 现在每节独立成块（标题带小节名，便于精准命中），另保留一篇总览块。
  for (const post of blogPosts) {
    chunks.push({
      id: `blog-${post.slug}`,
      source: '博客',
      title: post.title,
      date: post.date,
      text: clip(
        `${post.subtitle}\n${post.summary}\n小节：${post.sections.map((section) => section.heading).join('、')}`,
        500,
      ),
    })
    post.sections.forEach((section, index) => {
      chunks.push({
        id: `blog-${post.slug}-${index}`,
        source: '博客',
        title: `${post.title} · ${section.heading}`,
        date: post.date,
        text: clip(section.body.join(' '), 600),
      })
    })
  }

  for (const lesson of lessons) {
    chunks.push({
      id: `lesson-${lesson.slug}`,
      source: '观澜',
      title: lesson.title,
      date: lesson.date,
      text: clip(
        `${lesson.summary} 术语：${lesson.keyTerms.map((term) => `${term.term}（${term.text}）`).join('、')}。` +
          `小节：${lesson.sections.map((section) => section.heading).join('、')}。` +
          `来源视频：${lesson.source.author}，${lesson.source.url}`,
        700,
      ),
    })
  }

  for (const entry of diaryEntries) {
    chunks.push({
      id: `diary-${entry.id}`,
      source: '训练日志',
      title: `${entry.date} ${entry.title}`,
      date: entry.date,
      text: clip(
        `${entry.title}。肌群：${entry.tags.join('、')}。时长 ${entry.durationMin} 分钟，吨位 ${entry.tonnage}kg，RPE ${entry.rpe}。` +
          `动作：${entry.movements.map((m) => `${m.name} ${m.topSet}`).join('；')}。` +
          `收获：${entry.highlight} 复盘：${entry.notes}`,
        500,
      ),
    })
  }

  chunks.push({
    id: 'fitness-summary',
    source: '训练数据',
    title: '2026 训练总览',
    text: clip(
      metricCards.map((card) => `${card.label}：${card.value}（${card.detail}）`).join('；') +
        '。肌群周组数：' +
        muscleVolumes.map((volume) => `${volume.muscle} ${volume.sets}组/${volume.status}`).join('、') +
        '。PR 时间线：' +
        prs.map((record) => `${record.date} ${record.movement} ${record.result}`).join('；'),
      700,
    ),
  })

  for (const movement of movementHighlights) {
    chunks.push({
      id: `movement-${movement.id}`,
      source: '训练数据',
      title: `${movement.label} 动作档案`,
      text: clip(
        `${movement.label}：目标肌群 ${movement.target}，器械 ${movement.equipment}。` +
          `最佳成绩 ${movement.bestSet}（${movement.bestDate}），估算 1RM ${movement.estimatedOneRm}kg，` +
          `正式组 ${movement.totalSets} 组，容量 ${movement.tonnage}kg。要点：${movement.cue}`,
        400,
      ),
    })
  }

  for (const problem of algorithmProblems) {
    chunks.push({
      id: `algo-${problem.slug}`,
      source: '算法题解',
      title: `${problem.id}. ${problem.title}（${problem.difficulty}，${problem.category}）`,
      text: clip(
        `核心：${problem.thoughts.slice(0, 3).join('；')}` +
          (problem.pitfalls.length ? `。易错点：${problem.pitfalls.slice(0, 2).join('；')}` : ''),
        400,
      ),
    })
  }

  chunks.push({
    id: 'algo-summary',
    source: '算法题解',
    title: '算法学习总览',
    text: `LeetCode Hot100 已完成 ${algorithmMeta.solved}/${algorithmMeta.total}，另有拓展加练题。` +
      `分类进度：${[...new Set(algorithmProblems.map((problem) => problem.category))].slice(0, 20).join('、')}` +
      ' 等 17 个分类。',
  })

  for (const project of projects) {
    chunks.push({
      id: `project-${project.id}`,
      source: '项目',
      title: project.name,
      text: clip(`${project.tagline} ${project.description} 亮点：${project.highlights.join('；')}`, 450),
    })
  }

  return chunks
}

const journalChunks = (): KnowledgeChunk[] =>
  loadJournal().map((entry) => ({
    id: `journal-${entry.id}`,
    source: '日记',
    title: entry.title,
    date: entry.createdAt.slice(0, 10),
    text: clip(`${entry.title}（心情 ${entry.mood}/5）\n${entry.body}`, 500),
  }))

export const buildKnowledgeChunks = (): KnowledgeChunk[] => {
  const staticChunks = (staticCache ??= buildStaticChunks())
  return [...staticChunks, ...journalChunks()]
}

const toDoc = (chunk: KnowledgeChunk): Bm25Doc => ({ id: chunk.id, title: chunk.title, text: chunk.text })

// BM25 检索：词频饱和 + 长度归一 + IDF 稀有词加权，标题命中加权。
export const retrieveChunks = (query: string, chunks: KnowledgeChunk[], k = 6): KnowledgeChunk[] => {
  const docs = chunks.map(toDoc)
  const stats = buildStats(docs)
  const scored = docs
    .map((doc, index) => ({ chunk: chunks[index], score: scoreDoc(query, doc, stats) }))
    .filter((item) => item.score > 0)
    .sort((first, second) => second.score - first.score)

  const top = scored.slice(0, k).map((item) => item.chunk)
  if (top.length === 0) {
    // 没有命中时回退：最近动态 + 总览
    return chunks.filter((chunk) =>
      ['fitness-summary', 'algo-summary'].includes(chunk.id) ||
      chunk.source === '日记' ||
      chunk.source === '训练日志',
    ).slice(0, k)
  }
  return top
}
