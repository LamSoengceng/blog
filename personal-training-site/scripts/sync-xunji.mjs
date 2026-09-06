// 训记（Xunji）真实训练数据同步脚本。
// 用法（token 只放本机 .env.local，绝不提交）：
//   node --env-file-if-exists=.env.local scripts/sync-xunji.mjs            # 默认同步最近 14 天
//   node --env-file-if-exists=.env.local scripts/sync-xunji.mjs --days=30  # 指定天数
//   node --env-file-if-exists=.env.local scripts/sync-xunji.mjs --date=2026-09-05 --force
// 需要环境变量 XUNJI_API_KEY（训记 App 内获取）。
// 数据源：POST https://trains.xunjiapp.cn/api_trains_for_llm（Bearer 鉴权，同日期 90 秒限频）。
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const projectRoot = join(__dirname, '..')
const cacheDir = join(projectRoot, 'scripts', 'cache', 'xunji')
const outputPath = join(projectRoot, 'src', 'data', 'xunjiData.ts')

const apiKey = process.env.XUNJI_API_KEY
if (!apiKey) {
  console.error('缺少 XUNJI_API_KEY。请在项目根目录 .env.local 里写入：XUNJI_API_KEY=你的token（该文件已被 .gitignore 排除）')
  process.exit(1)
}

const args = process.argv.slice(2)
const days = Number(args.find((arg) => arg.startsWith('--days='))?.slice(7) ?? 14)
const singleDate = args.find((arg) => arg.startsWith('--date='))?.slice(7)
const force = args.includes('--force')

const toDateKey = (date) => {
  const pad = (value) => String(value).padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

// 待同步的日期列表（从旧到新）
const dates = []
if (singleDate) {
  dates.push(singleDate)
} else {
  const today = new Date()
  for (let offset = days - 1; offset >= 0; offset -= 1) {
    const date = new Date(today)
    date.setDate(today.getDate() - offset)
    dates.push(toDateKey(date))
  }
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const parseRecord = (line, dateKey) => {
  const fields = line.split(',')
  const record = { date: dateKey, type: '', source: '', durationMin: null, distanceKm: null, kcal: null, raw: line }
  for (const field of fields) {
    const value = field.trim()
    if (!value) continue
    if (value.startsWith('id:')) {
      record.id = value.slice(3)
    } else if (value.startsWith('train_time:')) {
      const [start, end] = value.slice('train_time:'.length).split('-')
      const startMs = Number(start)
      const endMs = Number(end)
      if (Number.isFinite(startMs) && Number.isFinite(endMs)) {
        record.startIso = new Date(startMs).toISOString()
        record.durationMin = Math.max(1, Math.round((endMs - startMs) / 60000))
      }
    } else if (value.startsWith('time:')) {
      const seconds = Number(value.slice(5).replace('s', ''))
      if (Number.isFinite(seconds) && record.durationMin == null) {
        record.durationMin = Math.max(1, Math.round(seconds / 60))
      }
    } else if (value.endsWith('km') && Number.isFinite(Number(value.slice(0, -2)))) {
      record.distanceKm = Number(value.slice(0, -2))
    } else if (value.endsWith('kcal') && Number.isFinite(Number(value.slice(0, -4)))) {
      record.kcal = Number(value.slice(0, -4))
    } else if (/^\d+\./.test(value)) {
      record.source = value.replace(/^\d+\./, '')
    } else if (!record.type) {
      record.type = value
    }
  }
  record.type ||= '训练'
  return record
}

const fetchDate = async (dateKey) => {
  const response = await fetch('https://trains.xunjiapp.cn/api_trains_for_llm', {
    method: 'POST',
    headers: { 'content-type': 'application/json', authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({ datestr: dateKey }),
  })
  const text = await response.text()
  if (!response.ok) throw new Error(`${response.status} ${text.slice(0, 160)}`)

  // 同日期 90 秒限频：返回纯文本提示时等待后重试一次
  if (!text.startsWith('{')) {
    const waitMatch = text.match(/(\d+)\s*s/i)
    if (waitMatch) {
      const waitSec = Number(waitMatch[1]) + 2
      console.log(`  限频提示，等待 ${waitSec}s 后重试…`)
      await sleep(waitSec * 1000)
      return fetchDate(dateKey)
    }
    throw new Error(`非 JSON 响应：${text.slice(0, 160)}`)
  }

  const payload = JSON.parse(text)
  if (!payload.success) throw new Error(`success=false：${text.slice(0, 160)}`)
  const lines = Array.isArray(payload.res) ? payload.res : []
  return lines
    .filter((line) => typeof line === 'string' && line.includes('id:'))
    .map((line) => parseRecord(line, dateKey))
}

const activities = []
const staleDates = []
const now = Date.now()

for (const dateKey of dates) {
  const cacheFile = join(cacheDir, `${dateKey}.json`)
  if (existsSync(cacheFile) && !force) {
    try {
      const cached = JSON.parse(readFileSync(cacheFile, 'utf8'))
      activities.push(...cached.records)
      continue
    } catch {
      // 缓存损坏则重新抓取
    }
  }
  console.log(`同步 ${dateKey} …`)
  try {
    const records = await fetchDate(dateKey)
    mkdirSync(cacheDir, { recursive: true })
    writeFileSync(cacheFile, JSON.stringify({ fetchedAt: new Date().toISOString(), records }, null, 2), 'utf8')
    activities.push(...records)
    console.log(`  ${records.length} 条记录`)
  } catch (error) {
    console.warn(`  失败：${error.message}`)
    staleDates.push(dateKey)
  }
  // 礼貌限速：不同日期也稍作间隔
  await sleep(1200)
}

activities.sort((first, second) => (second.startIso ?? second.date).localeCompare(first.startIso ?? first.date))

const summaryByDate = new Map()
for (const activity of activities) {
  const summary = summaryByDate.get(activity.date) ?? { date: activity.date, sessions: 0, durationMin: 0, kcal: 0, distanceKm: 0, types: [] }
  summary.sessions += 1
  summary.durationMin += activity.durationMin ?? 0
  summary.kcal += activity.kcal ?? 0
  summary.distanceKm = Number((summary.distanceKm + (activity.distanceKm ?? 0)).toFixed(2))
  if (!summary.types.includes(activity.type)) summary.types.push(activity.type)
  summaryByDate.set(activity.date, summary)
}
const days_summary = [...summaryByDate.values()].sort((first, second) => second.date.localeCompare(first.date))

const output = `// 本文件由 scripts/sync-xunji.mjs 自动生成，请勿手改。
// 数据来源：训记 App API（真实训练活动），最后同步时间见 xunjiLastSyncedAt。
export type XunjiActivity = {
  date: string
  type: string
  source: string
  durationMin: number | null
  distanceKm: number | null
  kcal: number | null
  startIso?: string
}

export type XunjiDaySummary = {
  date: string
  sessions: number
  durationMin: number
  kcal: number
  distanceKm: number
  types: string[]
}

export const xunjiLastSyncedAt = ${JSON.stringify(new Date().toISOString())}

export const xunjiStaleDates: string[] = ${JSON.stringify(staleDates)}

export const xunjiActivities: XunjiActivity[] = ${JSON.stringify(activities, null, 2)}

export const xunjiDaySummaries: XunjiDaySummary[] = ${JSON.stringify(days_summary, null, 2)}
`

writeFileSync(outputPath, output, 'utf8')
console.log(`\n完成：${activities.length} 条活动记录（${days_summary.length} 天）-> ${outputPath}`)
if (staleDates.length) {
  console.log(`以下日期抓取失败（可重跑补齐）：${staleDates.join('、')}`)
}
console.log('距离上一次同日期请求需间隔 90 秒；缓存命中不消耗请求。')
