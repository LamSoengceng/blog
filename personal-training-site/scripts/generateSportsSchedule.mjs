import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const target = fileURLToPath(new URL('../src/data/sportsSchedule.json', import.meta.url))
const sources = [
  { league: 'NBA', path: 'basketball/nba', url: 'https://www.nba.com/schedule' },
  { league: '英超', path: 'soccer/eng.1', url: 'https://www.premierleague.com/en/matches' },
  { league: '欧冠', path: 'soccer/uefa.champions', url: 'https://www.uefa.com/uefachampionsleague/fixtures-results/' },
]
const now = new Date()
const months = [0, 1].map((offset) => {
  const date = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + offset, 1))
  return `${date.getUTCFullYear()}${String(date.getUTCMonth() + 1).padStart(2, '0')}`
})

const requests = sources.flatMap((source) => months.map(async (month) => {
  const url = `https://site.api.espn.com/apis/site/v2/sports/${source.path}/scoreboard?dates=${month}`
  const response = await fetch(url, { signal: AbortSignal.timeout(20000) })
  if (!response.ok) throw new Error(`${source.league} ${month}: HTTP ${response.status}`)
  const data = await response.json()
  if (!Array.isArray(data.events)) throw new Error(`${source.league} ${month}: invalid response`)
  return data.events.map((event) => ({
    league: source.league,
    title: event.name,
    at: event.date,
    url: event.links?.[0]?.href || source.url,
  })).filter((event) => event.title && !Number.isNaN(Date.parse(event.at)))
}))

const results = await Promise.allSettled(requests)
const items = results.flatMap((result) => result.status === 'fulfilled' ? result.value : [])
if (!items.length) {
  console.warn('No sports schedule response; retaining the previous snapshot.')
  process.exit(0)
}
for (const result of results) {
  if (result.status === 'rejected') console.warn(result.reason)
}
const matches = [...new Map(items.map((item) => [`${item.league}-${item.at}-${item.title}`, item])).values()]
  .sort((a, b) => Date.parse(a.at) - Date.parse(b.at))
const snapshot = { generatedAt: now.toISOString(), matches }
await writeFile(target, `${JSON.stringify(snapshot, null, 2)}\n`)
console.log(`Saved ${matches.length} matches to ${target}`)
