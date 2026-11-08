// 训记（Xunji）真实训练数据同步脚本（Open API v2）。
// 用法（token 只放本机 .env.local，绝不提交）：
//   node --env-file-if-exists=.env.local scripts/sync-xunji.mjs            # 默认同步最近 14 天
//   node --env-file-if-exists=.env.local scripts/sync-xunji.mjs --days=275 # 从更早开始回填
//   node --env-file-if-exists=.env.local scripts/sync-xunji.mjs --date=2026-07-20 --force
// 需要环境变量 XUNJI_API_KEY（训记 App 内申请的 LLM 训练数据 Key）。
// 数据源：POST https://trains.xunjiapp.cn/api_trains_for_llm_v2（Bearer 鉴权，同一训练日轻量读取 15 秒限频）。
// 输出合并「全部缓存过的日期」，所以历史不会因为窗口滑动而丢失；空日期也会落缓存，不重复请求。
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const projectRoot = join(__dirname, '..')
const cacheDir = join(projectRoot, 'scripts', 'cache', 'xunji')
const outputPath = join(projectRoot, 'src', 'data', 'xunjiData.ts')

const API_URL = 'https://trains.xunjiapp.cn/api_trains_for_llm_v2'
const SCHEMA_VERSION = 'train_open_api_v2'
// 健身房单次训练极少超过 4 小时；end-start 超过这个值基本是「忘记停止训练」，时长不可信。
const MAX_TRUSTED_DURATION_MIN = 240

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

const toNumber = (value) => {
  const num = Number(value)
  return Number.isFinite(num) ? num : null
}

// 单次训练 → 站点活动记录。距离/卡路里只取有氧动作的 metrics，不猜力量训练的消耗。
const toRecord = (train, dateKey) => {
  const startMs = toNumber(train.start)
  const endMs = toNumber(train.end)
  const durationRaw = startMs && endMs && endMs > startMs ? Math.round((endMs - startMs) / 60000) : null
  let distanceKm = null
  let kcal = null
  for (const movement of train.movements ?? []) {
    const metrics = movement.metrics ?? {}
    const distance = toNumber(metrics.distance)
    const movementKcal = toNumber(metrics.kcal ?? metrics.calories)
    if (distance != null) distanceKm = Number(((distanceKm ?? 0) + distance).toFixed(2))
    if (movementKcal != null) kcal = Math.round((kcal ?? 0) + movementKcal)
  }
  return {
    date: dateKey,
    id: String(train.localid ?? ''),
    type: train.title || '训练',
    source: '训记',
    durationMin: durationRaw != null && durationRaw <= MAX_TRUSTED_DURATION_MIN ? Math.max(1, durationRaw) : null,
    distanceKm,
    kcal,
    startIso: startMs ? new Date(startMs).toISOString() : undefined,
  }
}

// 结构化逐组数据，供页面后续展示（超级组保留 items 子动作）。
const toTrainShape = (train) => ({
  localid: train.localid,
  datestr: train.datestr,
  title: train.title || '训练',
  startIso: train.start ? new Date(train.start).toISOString() : undefined,
  endIso: train.end ? new Date(train.end).toISOString() : undefined,
  durationMin: toRecord(train, train.datestr).durationMin,
  note: typeof train.note === 'string' ? train.note : undefined,
  movements: (train.movements ?? []).map((movement) => ({
    name: movement.name,
    sets: (movement.sets ?? []).map((set) => ({
      done: Boolean(set.done),
      weight: toNumber(set.weight),
      unit: set.unit || undefined,
      reps: toNumber(set.reps),
      selfWeight: Boolean(set.selfWeight) || undefined,
      items: Array.isArray(set.items)
        ? set.items.map((item) => ({
            name: item.name,
            weight: toNumber(item.set?.weight),
            unit: item.set?.unit || undefined,
            reps: toNumber(item.set?.reps),
          }))
        : undefined,
    })),
  })),
})

const fetchDate = async (dateKey, retryCount = 0) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json', authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({ schema_version: SCHEMA_VERSION, datestr: dateKey, include_full_data: false }),
  })
  const text = await response.text()
  if (response.status === 401 || /apikey (missing|invalid)/.test(text)) {
    throw Object.assign(new Error('XUNJI_API_KEY 无效（训记 App 内重新申请后更新 .env.local）'), { fatal: true })
  }
  if (!response.ok) throw new Error(`${response.status} ${text.slice(0, 160)}`)

  let payload
  try {
    payload = JSON.parse(text)
  } catch {
    payload = null
  }
  // 限频/维护提示可能以纯文本或 JSON 错误返回；按提示等待后重试，封顶 3 次防无限递归烧配额
  const retryAfter = payload?.retry_after_ms ?? Number(text.match(/(\d+)\s*s/i)?.[1]) * 1000
  if (!payload?.res?.trains) {
    if (retryAfter) {
      if (retryCount >= 3) throw new Error(`限频重试 ${retryCount} 次仍未成功，放弃 ${dateKey}`)
      const waitMs = Number(retryAfter) + 2000
      console.log(`  限频提示，等待 ${Math.round(waitMs / 1000)}s 后重试（第 ${retryCount + 1}/3 次）…`)
      await sleep(waitMs)
      return fetchDate(dateKey, retryCount + 1)
    }
    throw new Error(`非预期响应：${text.slice(0, 160)}`)
  }
  const trains = Array.isArray(payload.res.trains) ? payload.res.trains : []
  return { trains, records: trains.map((train) => toRecord(train, dateKey)) }
}

const fetchAllCachedDates = () =>
  existsSync(cacheDir)
    ? readdirSync(cacheDir)
        .filter((name) => name.endsWith('.json'))
        .map((name) => name.slice(0, -5))
    : []

const loadCache = (dateKey) => {
  const cacheFile = join(cacheDir, `${dateKey}.json`)
  if (!existsSync(cacheFile)) return null
  try {
    const cached = JSON.parse(readFileSync(cacheFile, 'utf8'))
    return cached.source === 'v2' ? cached : null // v1 时代的缓存格式不同，直接重抓
  } catch {
    return null
  }
}

const freshDates = []
const staleDates = []
let successCount = 0

for (const dateKey of dates) {
  const cached = force ? null : loadCache(dateKey)
  if (cached) {
    successCount += 1
    continue
  }
  console.log(`同步 ${dateKey} …`)
  try {
    const { trains, records } = await fetchDate(dateKey)
    mkdirSync(cacheDir, { recursive: true })
    writeFileSync(
      join(cacheDir, `${dateKey}.json`),
      JSON.stringify({ fetchedAt: new Date().toISOString(), source: 'v2', trains, records }, null, 2),
      'utf8',
    )
    freshDates.push(dateKey)
    successCount += 1
    console.log(`  ${records.length} 条训练`)
  } catch (error) {
    if (error.fatal) {
      console.error(`  ${error.message}`)
      process.exit(1)
    }
    console.warn(`  失败：${error.message}`)
    staleDates.push(dateKey)
  }
  // 同一训练日 15 秒限频；不同日期之间稍作间隔即可
  await sleep(1200)
}

// 一个日期都没拿到（如网络全挂）：保留上一份数据，不要改写成「刚同步过」的空文件。
if (successCount === 0) {
  console.error(`\n全部 ${dates.length} 个日期抓取失败，未写入 ${outputPath}；现有数据保持不变。`)
  process.exit(1)
}

// 输出覆盖「所有缓存过的日期」：历史数据随缓存累积，不会被新的同步窗口截断。
const allDates = [...new Set([...fetchAllCachedDates(), ...dates])].sort()
const trains = []
const activities = []
for (const dateKey of allDates) {
  const cached = loadCache(dateKey)
  if (!cached) continue
  trains.push(...(cached.trains ?? []).map(toTrainShape))
  activities.push(...(cached.records ?? []))
}

activities.sort((first, second) => (second.startIso ?? second.date).localeCompare(first.startIso ?? first.date))
trains.sort((first, second) => (second.startIso ?? second.datestr).localeCompare(first.startIso ?? first.datestr))

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

const summaryOutput = `// 本文件由 scripts/sync-xunji.mjs 自动生成，请勿手改。
// 数据来源：训记 App Open API v2（真实训练记录），最后同步时间见 xunjiLastSyncedAt。
export type XunjiActivity = {
  date: string
  id?: string
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

// 逐组明细单独成文件：列表页只读汇总，不该因此下载全部重量次数。
const trainsOutputPath = join(projectRoot, 'src', 'data', 'xunjiTrains.ts')
const trainsOutput = `// 本文件由 scripts/sync-xunji.mjs 自动生成，请勿手改。
// 数据来源：训记 App Open API v2（逐组重量次数明细）。
export type XunjiSetItem = {
  name: string
  weight: number | null
  unit?: string
  reps: number | null
}

export type XunjiSet = {
  done: boolean
  weight: number | null
  unit?: string
  reps: number | null
  selfWeight?: boolean
  items?: XunjiSetItem[]
}

export type XunjiTrain = {
  localid: number | string
  datestr: string
  title: string
  startIso?: string
  endIso?: string
  durationMin: number | null
  note?: string
  movements: {
    name: string
    sets: XunjiSet[]
  }[]
}

export const xunjiTrains: XunjiTrain[] = ${JSON.stringify(trains, null, 2)}
`

writeFileSync(outputPath, summaryOutput, 'utf8')
writeFileSync(trainsOutputPath, trainsOutput, 'utf8')
console.log(`\n完成：${activities.length} 条训练记录、${trains.length} 个训练日明细（${days_summary.length} 天有训练）-> ${outputPath}`)
if (staleDates.length) {
  console.log(`以下日期抓取失败（可重跑补齐）：${staleDates.join('、')}`)
}
