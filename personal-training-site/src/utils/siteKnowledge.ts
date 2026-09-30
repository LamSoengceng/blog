// Ask My Site：把全站内容聚合成分块知识库，问题按关键词检索出最相关的块，
// 再交给 BYOK 大模型回答。检索在浏览器本地完成，不依赖向量服务。
import { algorithmProblems } from '../data/algorithmData'
import { algorithmMeta } from '../data/algorithmMeta'
import { blogPosts } from '../data/blogData'
import { diaryEntries } from '../data/diaryData'
import { metricCards, movementHighlights, muscleVolumes, prs } from '../data/fitnessData'
import { projects } from '../data/projectsData'
import { loadJournal } from './journalStore'

export type KnowledgeChunk = {
  id: string
  source: '博客' | '训练日志' | '算法题解' | '日记' | '项目' | '训练数据'
  title: string
  date?: string
  text: string
}

const clip = (text: string, max = 420) => (text.length > max ? `${text.slice(0, max)}…` : text)

let cache: KnowledgeChunk[] | null = null

export const buildKnowledgeChunks = (): KnowledgeChunk[] => {
  if (cache) return cache
  const chunks: KnowledgeChunk[] = []

  for (const post of blogPosts) {
    const body = post.sections
      .map((section) => `${section.heading}：${section.body.join(' ')}`)
      .join('\n')
    chunks.push({
      id: `blog-${post.slug}`,
      source: '博客',
      title: post.title,
      date: post.date,
      text: clip(`${post.subtitle}\n${post.summary}\n${body}`, 900),
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
      `分类进度：${algorithmProblems.length ? '' : ''}` +
      [...new Set(algorithmProblems.map((problem) => problem.category))]
        .slice(0, 20)
        .join('、') +
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

  for (const entry of loadJournal()) {
    chunks.push({
      id: `journal-${entry.id}`,
      source: '日记',
      title: entry.title,
      date: entry.createdAt.slice(0, 10),
      text: clip(`${entry.title}（心情 ${entry.mood}/5）\n${entry.body}`, 500),
    })
  }

  cache = chunks
  return chunks
}

// 极简中文友好的关键词检索：查询词 + 二元组，标题命中加权，返回最相关的 K 块。
export const retrieveChunks = (query: string, chunks: KnowledgeChunk[], k = 6): KnowledgeChunk[] => {
  const clean = query.replace(/[\s，。？?！、,.\-—:：；;（）()【】\[\]"'`]+/g, ' ').trim()
  if (!clean) return []

  const terms = new Set<string>()
  for (const word of clean.split(/\s+/)) {
    terms.add(word)
    for (let i = 0; i < word.length - 1; i += 1) {
      terms.add(word.slice(i, i + 2))
    }
  }

  const scored = chunks
    .map((chunk) => {
      const titleHits = [...terms].filter((term) => chunk.title.includes(term)).length
      const bodyHits = [...terms].filter((term) => chunk.text.includes(term)).length
      return { chunk, score: titleHits * 3 + bodyHits }
    })
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
