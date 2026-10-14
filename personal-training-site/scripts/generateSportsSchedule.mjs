import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

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
  const matches = [...new Map(items.map((item) => [item.id, item])).values()].sort((a, b) => Date.parse(a.at) - Date.parse(b.at))
  await writeFile(scheduleTarget, `${JSON.stringify({ generatedAt: now.toISOString(), matches }, null, 2)}\n`)
  console.log(`Saved ${matches.length} matches to ${scheduleTarget}`)
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
  await writeFile(standingsTarget, `${JSON.stringify({ generatedAt: now.toISOString(), tables }, null, 2)}\n`)
  console.log(`Saved ${tables.length} standings tables to ${standingsTarget}`)
} else console.warn('No standings response; retaining the previous snapshot.')
