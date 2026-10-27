/**
 * validateLessons.mjs
 * 校验 src/data/lessons/*.json 是否符合 video2kb-lesson skill 的 schema。
 * 用法: node scripts/validateLessons.mjs          # 校验全部，通过输出 OK
 * 安全: 只读校验，不修改任何文件。
 */
import { readdirSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const lessonsDir = join(root, 'src', 'data', 'lessons')
const BLOCK_TYPES = new Set(['p', 'callout', 'steps', 'compare', 'quote', 'cards', 'mermaid'])
const TONES = new Set(['key', 'warn', 'note'])

const errors = []
const slugs = new Set()

if (!readdirSync(lessonsDir, { withFileTypes: true }).some((entry) => entry.isFile() && entry.name.endsWith('.json'))) {
  console.log('OK (no lesson files)')
  process.exit(0)
}

for (const file of readdirSync(lessonsDir)) {
  if (!file.endsWith('.json')) continue
  let lesson
  try { lesson = JSON.parse(readFileSync(join(lessonsDir, file), 'utf8')) }
  catch (error) { errors.push(`${file}: 不是合法 JSON（${error.message}）`); continue }

  const where = (msg) => errors.push(`${file}: ${msg}`)
  const str = (v) => typeof v === 'string' && v.trim().length > 0

  if (!str(lesson.slug)) where('slug 缺失或为空')
  else if (slugs.has(lesson.slug)) where(`slug 重复: ${lesson.slug}`)
  else {
    slugs.add(lesson.slug)
    if (!/^[a-z0-9-]{1,60}$/.test(lesson.slug)) where(`slug 需小写字母/数字/连字符且 ≤60: ${lesson.slug}`)
  }
  if (!str(lesson.title)) where('title 缺失')
  if (!str(lesson.summary)) where('summary 缺失')
  if (!/^\d{4}-\d{2}-\d{2}$/.test(lesson.date || '')) where('date 需为 YYYY-MM-DD')
  if (!Number.isFinite(lesson.minutes) || lesson.minutes <= 0) where('minutes 需为正数')
  if (!Array.isArray(lesson.tags) || lesson.tags.length < 2 || lesson.tags.length > 5) where('tags 需 2~5 个')
  const src = lesson.source
  if (!src || !str(src.platform) || !str(src.author) || !str(src.url)) {
    where('source.platform/author/url 缺失')
  } else if (!['bilibili', 'douyin', 'wechat'].includes(src.platform)) {
    where('source.platform 需为 bilibili|douyin|wechat')
  } else if (src.platform === 'wechat') {
    if (!str(src.articleId)) where('wechat 来源需 articleId（/s/ 短链 token 或 sn 参数）')
    if (!str(src.sourceTitle)) where('wechat 来源需 sourceTitle（原文标题）')
  } else if (!str(src.videoId)) {
    where(`${src.platform} 来源需 videoId`)
  }
  if (src && str(src.url) && !src.url.startsWith('http')) where('source.url 需为 http(s) 链接')

  if (!Array.isArray(lesson.keyTerms) || lesson.keyTerms.length < 3 || lesson.keyTerms.length > 8) where('keyTerms 需 3~8 条')
  else for (const term of lesson.keyTerms) {
    if (!str(term.term) || !str(term.text)) where('keyTerms 条目需含 term 与 text')
  }

  if (!Array.isArray(lesson.sections) || lesson.sections.length < 3 || lesson.sections.length > 6) where('sections 需 3~6 节')
  else for (const [sectionIndex, section] of lesson.sections.entries()) {
    if (!str(section.heading)) where(`sections[${sectionIndex}].heading 缺失`)
    if (!Array.isArray(section.blocks) || section.blocks.length === 0 || section.blocks.length > 8) where(`sections[${sectionIndex}].blocks 需 1~8 块`)
    for (const [blockIndex, block] of (section.blocks || []).entries()) {
      const at = `sections[${sectionIndex}].blocks[${blockIndex}]`
      if (!BLOCK_TYPES.has(block?.type)) { where(`${at}.type 需为 ${[...BLOCK_TYPES].join('|')}`); continue }
      if (block.type === 'p' && !str(block.text)) where(`${at} 缺 text`)
      if (block.type === 'callout') {
        if (!TONES.has(block.tone || 'key')) where(`${at}.tone 需为 key|warn|note`)
        if (!str(block.text)) where(`${at} 缺 text`)
      }
      if (block.type === 'steps' && (!Array.isArray(block.items) || block.items.length < 3 || block.items.length > 6 || block.items.some((item) => !str(item)))) where(`${at}.items 需 3~6 条非空字符串`)
      if (block.type === 'compare') {
        if (!Array.isArray(block.columns) || block.columns.length < 2 || block.columns.length > 3) where(`${at}.columns 需 2~3 列`)
        if (!Array.isArray(block.rows) || block.rows.length === 0 || block.rows.some((row) => !Array.isArray(row) || row.length !== block.columns?.length)) where(`${at}.rows 每行须与 columns 等长`)
      }
      if (block.type === 'quote' && (!str(block.text) || block.text.length > 80)) where(`${at}.text 需为 ≤80 字的短引用`)
      if (block.type === 'cards' && (!Array.isArray(block.items) || block.items.length < 2 || block.items.some((item) => !str(item.term) || !str(item.text)))) where(`${at}.items 需含 term 与 text 的卡片组`)
      if (block.type === 'mermaid' && (!str(block.code) || block.code.split('\n').length > 25)) where(`${at}.code 需为 ≤25 行的 mermaid`)
    }
  }

  if (!Array.isArray(lesson.quiz) || lesson.quiz.length < 2 || lesson.quiz.length > 4) where('quiz 需 2~4 题')
  else for (const item of lesson.quiz) {
    if (!str(item.q) || !str(item.a)) where('quiz 条目需含 q 与 a')
  }

  // 视觉编排：至少 1 个 mermaid/compare/cards，且纯 p 连排 ≤3
  const blocks = lesson.sections.flatMap((section) => section.blocks)
  if (!blocks.some((block) => ['mermaid', 'compare', 'cards'].includes(block.type))) where('需至少一个 mermaid/compare/cards 视觉块')
  let pRun = 0
  for (const block of blocks) {
    pRun = block.type === 'p' ? pRun + 1 : 0
    if (pRun > 3) where('纯 p 段连排超过 3 块')
  }
}

if (errors.length) {
  console.error(`校验失败：${errors.length} 个问题`)
  for (const error of errors) console.error(` - ${error}`)
  process.exit(1)
}
console.log(`OK (${[...slugs].length} lessons)`)
