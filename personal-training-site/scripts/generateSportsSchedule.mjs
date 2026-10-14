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

const standingsSources = [
  { league: '英超', path: 'soccer/eng.1', format: 'football', url: 'https://www.premierleague.com/en/tables' },
  { league: '西甲', path: 'soccer/esp.1', format: 'football', url: 'https://www.laliga.com/laliga-easports/standing' },
  { league: '意甲', path: 'soccer/ita.1', format: 'football', url: 'https://www.legaseriea.it/en/serie-a/standing' },
  { league: '德甲', path: 'soccer/ger.1', format: 'football', url: 'https://www.bundesliga.com/en/bundesliga/table' },
  { league: '法甲', path: 'soccer/fra.1', format: 'football', url: 'https://www.ligue1.com/classement' },
  { league: 'NBA', path: 'basketball/nba', format: 'nba', url: 'https://www.nba.com/standings' },
  { league: 'F1 车手', path: 'racing/f1', format: 'f1-driver', group: 'Driver Standings', url: 'https://www.formula1.com/en/results.html/2026/drivers.html' },
  { league: 'F1 车队', path: 'racing/f1', format: 'f1-team', group: 'Constructor Standings', url: 'https://www.formula1.com/en/results.html/2026/team.html' },
]
const stat = (entry, name) => entry.stats?.find((item) => item.name === name)?.displayValue || '—'
const standingsUrl = (source) => source.url
const tableRequests = standingsSources.map(async (source) => {
  const response = await fetch(`https://site.api.espn.com/apis/v2/sports/${source.path}/standings`, { signal: AbortSignal.timeout(20000) })
  if (!response.ok) throw new Error(`${source.league} standings: HTTP ${response.status}`)
  const data = await response.json()
  const group = source.group ? data.children?.find((child) => child.name === source.group) : null
  const entries = group
    ? group.standings?.entries
    : data.children?.flatMap((child) => child.standings?.entries || [])
  if (!entries?.length) throw new Error(`${source.league} standings: empty response`)
  const entryRecords = source.format === 'nba'
    ? data.children?.flatMap((child) => (child.standings?.entries || []).map((entry, index) => ({ entry, conference: child.name, conferenceRank: index + 1 })))
    : entries.map((entry) => ({ entry, conference: undefined, conferenceRank: undefined }))
  return {
    league: source.league,
    format: source.format,
    url: standingsUrl(source),
    rows: entryRecords.map(({ entry, conference, conferenceRank }, index) => {
      const rank = stat(entry, 'rank') === '—' ? String(source.format === 'nba' ? conferenceRank : index + 1) : stat(entry, 'rank')
      const team = entry.team?.displayName || entry.athlete?.displayName || '未知'
      if (source.format === 'nba') {
        const wins = stat(entry, 'wins')
        const losses = stat(entry, 'losses')
        const gamesPlayed = stat(entry, 'gamesPlayed')
        return {
          rank,
          team,
          conference: conference?.toLowerCase().includes('east') ? '东部' : conference?.toLowerCase().includes('west') ? '西部' : conference,
          played: gamesPlayed === '—' && wins !== '—' && losses !== '—' ? String(Number(wins) + Number(losses)) : gamesPlayed,
          wins,
          losses,
          winRate: stat(entry, 'winPercent'),
          pointDifference: stat(entry, 'pointDifferential'),
          gamesBehind: stat(entry, 'gamesBehind'),
        }
      }
      if (source.format === 'f1-driver') {
        return { rank, team, races: '2026', points: stat(entry, 'championshipPts') }
      }
      if (source.format === 'f1-team') {
        return { rank, team, races: '2026', points: stat(entry, 'points') }
      }
      return {
        rank,
        team,
        played: stat(entry, 'gamesPlayed'),
        wins: stat(entry, 'wins'),
        draws: stat(entry, 'ties'),
        losses: stat(entry, 'losses'),
        goalDifference: stat(entry, 'pointDifferential'),
        points: stat(entry, 'points'),
      }
    }),
  }
})
const tableResults = await Promise.allSettled(tableRequests)
for (const result of tableResults) if (result.status === 'rejected') console.warn(result.reason)
const tables = tableResults.flatMap((result) => result.status === 'fulfilled' ? [result.value] : [])
if (tables.length) {
  await writeFile(standingsTarget, `${JSON.stringify({ generatedAt: now.toISOString(), tables }, null, 2)}\n`)
  console.log(`Saved ${tables.length} standings tables to ${standingsTarget}`)
} else console.warn('No standings response; retaining the previous snapshot.')
