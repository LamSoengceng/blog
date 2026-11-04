import { useEffect, useState } from 'react'
import { ArrowUpRight, CalendarPlus2, Radio, Trash2 } from 'lucide-react'
import scheduleSnapshot from '../data/sportsSchedule.json'
import standingsSnapshot from '../data/sportsStandings.json'
import { matchTitleZh, teamZh } from '../utils/sportsZh'

type League = 'NBA' | '英超' | '皇马' | 'AC 米兰' | '欧冠' | '欧联'
type Match = { id: string; league: League; title: string; at: string; url: string }
type Room = { name: string; url: string; platform: string }
const officialSchedules = [
  { label: 'NBA 赛程', url: 'https://www.nba.com/schedule' },
  { label: '英超赛程', url: 'https://www.premierleague.com/en/matches' },
  { label: '西甲赛程', url: 'https://www.laliga.com/laliga-easports/calendario' },
  { label: '意甲赛程', url: 'https://www.legaseriea.it/en/serie-a/match-report' },
  { label: '欧冠赛程', url: 'https://www.uefa.com/uefachampionsleague/fixtures-results/' },
  { label: '欧联赛程', url: 'https://www.uefa.com/uefaeuropaleague/fixtures-results/' },
]
const starterRoom: Room = { name: '墨衣moyi', platform: '斗鱼', url: 'https://www.douyu.com/8834570' }
const storageKey = 'lam-watch-rooms-v1'
const watchUrl = 'https://www.jrkan2023.com/'
const scheduleSources: { league: League; path: string; team?: string; url: string }[] = [
  { league: 'NBA', path: 'basketball/nba', url: officialSchedules[0].url },
  { league: '英超', path: 'soccer/eng.1', url: officialSchedules[1].url },
  { league: '皇马', path: 'soccer/esp.1', team: 'Real Madrid', url: officialSchedules[2].url },
  { league: 'AC 米兰', path: 'soccer/ita.1', team: 'AC Milan', url: officialSchedules[3].url },
  { league: '欧冠', path: 'soccer/uefa.champions', url: officialSchedules[4].url },
  { league: '欧联', path: 'soccer/uefa.europa', url: officialSchedules[5].url },
]

type EspnEvent = { id: string; name: string; date: string; links?: { href: string }[]; competitions?: { competitors?: { team?: { displayName?: string } }[] }[] }
type StandingsRow = { rank: number; team: string; played: string; wins: string; draws: string; losses: string; goalDifference: string; points: string }
type StandingsTable = { league: string; url: string; rows: StandingsRow[] }
type EspnStandingEntry = { team?: { displayName?: string }; stats?: { name?: string; displayValue?: string }[] }

const standingsSources: { league: string; path: string }[] = [
  { league: '英超', path: 'soccer/eng.1' },
  { league: '西甲', path: 'soccer/esp.1' },
  { league: '意甲', path: 'soccer/ita.1' },
  { league: '欧冠', path: 'soccer/uefa.champions' },
  { league: '欧联', path: 'soccer/uefa.europa' },
]

async function loadStandings(): Promise<StandingsTable[]> {
  const stat = (entry: EspnStandingEntry, name: string) => entry.stats?.find((item) => item.name === name)?.displayValue || '—'
  const requests = standingsSources.map(async (source) => {
    const response = await fetch(`https://site.api.espn.com/apis/v2/sports/${source.path}/standings`, { signal: AbortSignal.timeout(10000) })
    if (!response.ok) throw new Error(`积分榜请求失败：${response.status}`)
    const data = await response.json() as { children?: { standings?: { entries?: EspnStandingEntry[] } }[] }
    const entries = data.children?.flatMap((child) => child.standings?.entries || []) ?? []
    if (!entries.length) throw new Error('积分榜格式不正确')
    return {
      league: source.league,
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
  const results = await Promise.allSettled(requests)
  if (results.every((result) => result.status === 'rejected')) throw new Error('积分榜源暂时不可用')
  const loaded = results.flatMap((result) => result.status === 'fulfilled' ? [result.value] : [])
  return standingsSources.map((source) => loaded.find((table) => table.league === source.league)).filter((table) => table !== undefined)
}

async function loadSchedule(): Promise<Match[]> {
  const now = new Date()
  const months = [0, 1].map((offset) => {
    const date = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + offset, 1))
    return `${date.getUTCFullYear()}${String(date.getUTCMonth() + 1).padStart(2, '0')}`
  })
  const requests = scheduleSources.flatMap((source) => months.map(async (month) => {
    const url = `https://site.api.espn.com/apis/site/v2/sports/${source.path}/scoreboard?dates=${month}`
    const response = await fetch(url, { signal: AbortSignal.timeout(10000) })
    if (!response.ok) throw new Error(`赛程请求失败：${response.status}`)
    const data = await response.json() as { events?: EspnEvent[] }
    if (!Array.isArray(data.events)) throw new Error('赛程格式不正确')
    return data.events.filter((event) => !source.team || event.competitions?.[0]?.competitors?.some((competitor) => competitor.team?.displayName === source.team)).map((event): Match => ({
      id: event.id,
      league: source.league,
      title: event.name,
      at: event.date,
      url: event.links?.[0]?.href || source.url,
    }))
  }))
  const results = await Promise.allSettled(requests)
  if (results.some((result) => result.status === 'rejected')) throw new Error('部分赛程未能同步')
  const loaded = results.flatMap((result) => result.status === 'fulfilled' ? result.value : [])
  if (!loaded.length) throw new Error('赛程源暂时不可用')
  return [...new Map(loaded.map((match) => [match.id, match])).values()]
    .sort((a, b) => new Date(a.at).getTime() - new Date(b.at).getTime())
}

function readRooms(): Room[] {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '[]') as Room[]
    return [starterRoom, ...saved.filter((room) => room.url !== starterRoom.url)]
  } catch {
    return [starterRoom]
  }
}

function parseRoomUrl(input: string): Room | null {
  try {
    const url = new URL(input.trim())
    if (url.protocol !== 'https:') return null
    const host = url.hostname.toLowerCase()
    const platform = host === 'www.douyu.com' || host === 'douyu.com' ? '斗鱼'
      : host === 'live.bilibili.com' ? 'B站'
        : host === 'www.huya.com' || host === 'huya.com' ? '虎牙' : null
    const id = url.pathname.split('/').filter(Boolean)[0]
    if (!platform || !id || !/^[\w-]+$/.test(id)) return null
    const canonicalHost = platform === 'B站' ? 'live.bilibili.com' : platform === '斗鱼' ? 'www.douyu.com' : 'www.huya.com'
    return { name: `${platform} · ${id}`, platform, url: `https://${canonicalHost}/${id}` }
  } catch {
    return null
  }
}

function calendarHref(match: Match) {
  const date = new Date(match.at)
  const stamp = (value: Date) => value.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
  const body = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Lam Watch Hub//ZH', 'BEGIN:VEVENT', `DTSTART:${stamp(date)}`, `DTEND:${stamp(new Date(date.getTime() + 2 * 60 * 60 * 1000))}`, `SUMMARY:${matchTitleZh(match.title)}`, `URL:${match.url}`, 'END:VEVENT', 'END:VCALENDAR'].join('\r\n')
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(body)}`
}

export function WatchHub() {
  const [rooms, setRooms] = useState<Room[]>(readRooms)
  const [roomInput, setRoomInput] = useState('')
  const [error, setError] = useState('')
  const [view, setView] = useState<'schedule' | 'standings'>('schedule')
  const [standingsLeague, setStandingsLeague] = useState('英超')
  const [standingsTables, setStandingsTables] = useState<StandingsTable[]>(() => standingsSnapshot.tables as StandingsTable[])
  const [standingsSync, setStandingsSync] = useState(() => standingsSnapshot.generatedAt
    ? `快照 ${new Intl.DateTimeFormat('zh-CN', { timeZone: 'Asia/Shanghai', month: 'numeric', day: 'numeric' }).format(new Date(standingsSnapshot.generatedAt))}`
    : '显示备用积分榜')
  const [visibleCount, setVisibleCount] = useState(12)
  const [today] = useState(() => Date.now())
  const [matches, setMatches] = useState<Match[]>(() => scheduleSnapshot.matches as Match[])
  const [scheduleState, setScheduleState] = useState(() => scheduleSnapshot.matches.length
    ? `更新于 ${new Intl.DateTimeFormat('zh-CN', { timeZone: 'Asia/Shanghai', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }).format(new Date(scheduleSnapshot.generatedAt))}`
    : '显示备用赛程')
  const futureMatches = matches.filter((match) => new Date(match.at).getTime() > today)
    .sort((a, b) => new Date(a.at).getTime() - new Date(b.at).getTime())
  const upcoming = futureMatches.slice(0, visibleCount)
  const standings = standingsTables.find((table) => table.league === standingsLeague)

  useEffect(() => {
    let active = true
    loadSchedule().then((items) => {
      if (!active) return
      setMatches(items)
      setScheduleState(`已自动同步 · ${new Intl.DateTimeFormat('zh-CN', { timeZone: 'Asia/Shanghai', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }).format(new Date())}`)
    }).catch(() => { /* 保留构建时生成的赛程快照。 */ })
    loadStandings().then((tables) => {
      if (!active) return
      setStandingsTables(tables)
      setStandingsSync(`${tables.length < standingsSources.length ? '部分联赛未能同步 · ' : '已自动同步 · '}${new Intl.DateTimeFormat('zh-CN', { timeZone: 'Asia/Shanghai', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }).format(new Date())}`)
    }).catch(() => { /* 保留构建时生成的积分榜快照。 */ })
    return () => { active = false }
  }, [])

  function saveRooms(next: Room[]) {
    setRooms(next)
    localStorage.setItem(storageKey, JSON.stringify(next.filter((room) => room.url !== starterRoom.url)))
  }

  function addRoom(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const room = parseRoomUrl(roomInput)
    if (!room) { setError('请粘贴 B站、斗鱼或虎牙的直播间完整链接。'); return }
    if (rooms.some((item) => item.url === room.url)) { setError('这个直播间已经收藏了。'); return }
    saveRooms([...rooms, room])
    setRoomInput('')
    setError('')
  }

  return <section className="watch-hub" aria-labelledby="watch-heading">
    <div className="watch-heading">
      <div><p className="eyebrow">THE GAME DESK / 观赛中心</p><h2 id="watch-heading">比赛，就在眼前。</h2><p>关注 NBA、皇马、AC 米兰、英超、欧冠与欧联。</p></div>
      <span className="watch-timezone">ASIA / SHANGHAI · UTC+8</span>
    </div>
    <div className="watch-grid">
      <div className="watch-panel watch-board">
        <div className="watch-panel-title"><div><span className="watch-section-label">01 / MATCH CENTER</span><h3>赛程与积分榜</h3></div><span className="watch-sync" role="status"><span />{scheduleState}</span></div>
        <div className="watch-view-switch" role="tablist" aria-label="观赛信息"><button type="button" role="tab" aria-selected={view === 'schedule'} className={view === 'schedule' ? 'active' : ''} onClick={() => setView('schedule')}>赛程</button><button type="button" role="tab" aria-selected={view === 'standings'} className={view === 'standings' ? 'active' : ''} onClick={() => setView('standings')}>积分榜</button></div>
        {view === 'schedule' ? <div role="tabpanel">
          <p className="watch-list-intro">全部关注赛事 · 按北京时间先后排序</p>
          <div className="watch-table-head"><span>北京时间</span><span>赛事 / 对阵</span><span>日历</span></div>
          {upcoming.length ? <div className="watch-match-list">{upcoming.map((match) => <div className="watch-match" key={match.id}>
            <time dateTime={match.at}><strong>{new Intl.DateTimeFormat('zh-CN', { timeZone: 'Asia/Shanghai', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date(match.at))}</strong><span>{new Intl.DateTimeFormat('zh-CN', { timeZone: 'Asia/Shanghai', month: 'numeric', day: 'numeric', weekday: 'short' }).format(new Date(match.at))}</span></time>
            <div><span className="watch-league">{match.league}</span><a className="watch-fixture" href={match.url} target="_blank" rel="noopener noreferrer">{matchTitleZh(match.title)}<ArrowUpRight size={14} /></a></div>
            <a className="watch-calendar-add" href={calendarHref(match)} download={`match-${match.at.slice(0, 10)}.ics`} title="添加到日历" aria-label={`将${matchTitleZh(match.title)}添加到日历`}><CalendarPlus2 size={17} /></a>
          </div>)}</div> : <p className="watch-empty">目前没有近期比赛，请查看赛事官网。</p>}
          {futureMatches.length > visibleCount && <button type="button" className="watch-more" onClick={() => setVisibleCount((count) => count + 12)}>显示更多比赛 <span>+12</span></button>}
          <div className="watch-official">{officialSchedules.map((item) => <a key={item.label} href={item.url} target="_blank" rel="noopener noreferrer">{item.label}<ArrowUpRight size={14} /></a>)}</div>
          <p className="watch-note">赛程来自 ESPN，每日生成快照并在访问时尝试刷新；比赛时间以赛事官网为准。</p>
        </div> : <div className="watch-standings" role="tabpanel">
          <div className="watch-standings-controls"><label htmlFor="watch-standings-league">联赛 / 杯赛</label><select id="watch-standings-league" value={standingsLeague} onChange={(event) => setStandingsLeague(event.target.value)}>{standingsTables.map((table) => <option key={table.league} value={table.league}>{table.league}</option>)}</select><span className="watch-sync" role="status"><span />{standingsSync}</span>{standings && <a href={standings.url} target="_blank" rel="noopener noreferrer">完整榜单<ArrowUpRight size={14} /></a>}</div>
          {standings ? <div className="watch-standings-scroll"><table><thead><tr><th scope="col">排名</th><th scope="col">球队</th><th scope="col">赛</th><th scope="col">胜</th><th scope="col">平</th><th scope="col">负</th><th scope="col">净胜球</th><th scope="col">积分</th></tr></thead><tbody>{standings.rows.map((row) => <tr key={row.team} className={row.team === 'Real Madrid' || row.team === 'AC Milan' ? 'watch-followed-team' : ''}><td>{row.rank}</td><th scope="row">{teamZh(row.team)}</th><td>{row.played}</td><td>{row.wins}</td><td>{row.draws}</td><td>{row.losses}</td><td>{row.goalDifference}</td><td><strong>{row.points}</strong></td></tr>)}</tbody></table></div> : <p className="watch-empty">积分榜暂时无法更新，请查看赛事官网。</p>}
          <p className="watch-note">积分榜在访问时自动同步，最新数据来自 ESPN；皇马与 AC 米兰已在对应联赛中标出。</p>
        </div>}
      </div>
      <aside className="watch-panel watch-side">
        <div className="watch-panel-title"><div><span className="watch-section-label">02 / YOUR CHANNELS</span><h3>直播捷径</h3></div><Radio size={21} /></div>
        <a className="watch-feature-link" href={watchUrl} target="_blank" rel="noopener noreferrer"><span>赛事直播入口</span><strong>打开 JRKAN</strong><ArrowUpRight size={20} /></a>
        <div className="watch-room-heading"><span>已收藏的直播间</span><small>{rooms.length} 个</small></div>
        <div className="watch-room-list">{rooms.map((room) => <div className="watch-room" key={room.url}><div><span>{room.platform}</span><strong>{room.name}</strong><small>点击进入查看开播状态</small></div><a href={room.url} target="_blank" rel="noopener noreferrer" aria-label={`进入${room.name}直播间`}><ArrowUpRight size={17} /></a>{room.url !== starterRoom.url && <button type="button" onClick={() => saveRooms(rooms.filter((item) => item.url !== room.url))} aria-label={`删除${room.name}`}><Trash2 size={15} /></button>}</div>)}</div>
        <form className="watch-add-room" onSubmit={addRoom}><label htmlFor="watch-room-url">收藏直播间</label><div><input id="watch-room-url" type="url" value={roomInput} onChange={(event) => setRoomInput(event.target.value)} placeholder="B站 / 斗鱼 / 虎牙链接" required /><button type="submit">添加</button></div>{error && <p role="alert">{error}</p>}</form>
        <p className="watch-note">收藏保存在当前浏览器；开播状态请进入直播间查看。</p>
      </aside>
    </div>
  </section>
}
