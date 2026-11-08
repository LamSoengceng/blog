import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

async function readJson(target) {
  try { return JSON.parse(await readFile(target, 'utf8')) } catch { return null }
}

const scheduleTarget = fileURLToPath(new URL('../src/data/sportsSchedule.json', import.meta.url))
const standingsTarget = fileURLToPath(new URL('../src/data/sportsStandings.json', import.meta.url))
const sources = [
  { league: 'NBA', path: 'basketball/nba', url: 'https://www.nba.com/schedule' },
  { league: '英超', path: 'soccer/eng.1', url: 'https://www.premierleague.com/en/matches' },
  { league: '皇马', path: 'soccer/esp.1', team: 'Real Madrid', url: 'https://www.laliga.com/laliga-easports/calendario' },
  { league: 'AC 米兰', path: 'soccer/ita.1', team: 'AC Milan', url: 'https://www.legaseriea.it/en/serie-a/match-report' },
  { league: '欧冠', path: 'soccer/uefa.champions', url: 'https://www.uefa.com/uefachampionsleague/fixtures-results/' },
  { league: '欧联', path: 'soccer/uefa.europa', url: 'https://www.uefa.com/uefaeuropaleague/fixtures-results/' },
]
const now = new Date()
const months = [0, 1].map((offset) => {
  const date = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + offset, 1))
  return `${date.getUTCFullYear()}${String(date.getUTCMonth() + 1).padStart(2, '0')}`
})

const requests = sources.flatMap((source) => months.map(async (month) => {
  const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/${source.path}/scoreboard?dates=${month}`, { signal: AbortSignal.timeout(20000) })
  if (!response.ok) throw new Error(`${source.league} ${month}: HTTP ${response.status}`)
  const data = await response.json()
  if (!Array.isArray(data.events)) throw new Error(`${source.league} ${month}: invalid response`)
  return data.events.filter((event) => !source.team || event.competitions?.[0]?.competitors?.some((competitor) => competitor.team?.displayName === source.team))
    .map((event) => ({ id: event.id, league: source.league, title: event.name, at: event.date, url: event.links?.[0]?.href || source.url }))
    .filter((event) => event.id && event.title && !Number.isNaN(Date.parse(event.at)))
}))
const results = await Promise.allSettled(requests)
for (const result of results) if (result.status === 'rejected') console.warn(result.reason)
const items = results.flatMap((result) => result.status === 'fulfilled' ? result.value : [])
if (items.length) {
  const okLeagues = new Set(items.map((item) => item.league))
  const previous = await readJson(scheduleTarget)
  const previousCount = Array.isArray(previous?.matches) ? previous.matches.length : 0
  // 护栏：抓取残缺时中止写入（CI step 失败、不部署），避免残缺快照覆盖全量数据。
  if (okLeagues.size < Math.ceil(sources.length / 2)) {
    throw new Error(`赛程抓取成功源不足（${okLeagues.size}/${sources.length} 联赛）；中止写入，保留旧快照。`)
  }
  if (previousCount && items.length < previousCount * 0.5) {
    throw new Error(`赛程抓取数量掉幅异常（${items.length} 场，上次快照 ${previousCount} 场）；中止写入，保留旧快照。`)
  }
  const matches = [...new Map(items.map((item) => [item.id, item])).values()].sort((a, b) => Date.parse(a.at) - Date.parse(b.at))
  await writeFile(scheduleTarget, `${JSON.stringify({ generatedAt: now.toISOString(), matches }, null, 2)}\n`)
  console.log(`Saved ${matches.length} matches from ${okLeagues.size} leagues to ${scheduleTarget}`)
} else console.warn('No sports schedule response; retaining the previous snapshot.')

const standingsSources = sources.filter((source) => !['NBA'].includes(source.league))
const stat = (entry, name) => entry.stats?.find((item) => item.name === name)?.displayValue || '—'
const tableRequests = standingsSources.map(async (source) => {
  const response = await fetch(`https://site.api.espn.com/apis/v2/sports/${source.path}/standings`, { signal: AbortSignal.timeout(20000) })
  if (!response.ok) throw new Error(`${source.league} standings: HTTP ${response.status}`)
  const data = await response.json()
  const entries = data.children?.flatMap((child) => child.standings?.entries || [])
  if (!entries?.length) throw new Error(`${source.league} standings: empty response`)
  return {
    league: source.league === '皇马' ? '西甲' : source.league === 'AC 米兰' ? '意甲' : source.league,
    url: `https://www.espn.com/soccer/standings/_/league/${source.path.split('/')[1]}`,
    rows: entries.map((entry, index) => ({
      rank: index + 1,
      team: entry.team?.displayName || '未知球队',
      played: stat(entry, 'gamesPlayed'),
      wins: stat(entry, 'wins'),
      draws: stat(entry, 'ties'),
      losses: stat(entry, 'losses'),
      goalDifference: stat(entry, 'pointDifferential'),
      points: stat(entry, 'points'),
    })),
  }
})
const tableResults = await Promise.allSettled(tableRequests)
for (const result of tableResults) if (result.status === 'rejected') console.warn(result.reason)
const tables = tableResults.flatMap((result) => result.status === 'fulfilled' ? [result.value] : [])
if (tables.length) {
  if (tables.length < Math.ceil(standingsSources.length / 2)) {
    throw new Error(`积分榜抓取成功源不足（${tables.length}/${standingsSources.length} 联赛）；中止写入，保留旧快照。`)
  }
  const previous = await readJson(standingsTarget)
  const previousRows = new Map((Array.isArray(previous?.tables) ? previous.tables : []).map((table) => [table.league, table.rows?.length || 0]))
  const shrunk = tables.find((table) => {
    const count = previousRows.get(table.league)
    return count !== undefined && table.rows.length < count * 0.5
  })
  if (shrunk) {
    throw new Error(`积分榜「${shrunk.league}」行数掉幅异常（${shrunk.rows.length} 行，上次快照 ${previousRows.get(shrunk.league)} 行）；中止写入，保留旧快照。`)
  }
  await writeFile(standingsTarget, `${JSON.stringify({ generatedAt: now.toISOString(), tables }, null, 2)}\n`)
  console.log(`Saved ${tables.length} standings tables to ${standingsTarget}`)
} else console.warn('No standings response; retaining the previous snapshot.')
