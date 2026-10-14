import { useEffect, useState } from 'react'
import { ArrowUpRight, CalendarPlus2, Radio, Trash2 } from 'lucide-react'
import scheduleSnapshot from '../data/sportsSchedule.json'

type Match = { league: 'NBA' | '英超' | '欧冠'; title: string; at: string; url: string }
type Room = { name: string; url: string; platform: string }

const fallbackMatches: Match[] = [
  { league: 'NBA', title: '篮网 vs 热火 · 季前赛', at: '2026-10-15T07:30:00+08:00', url: 'https://www.nba.com/schedule' },
  { league: 'NBA', title: '掘金 vs 快船 · 季前赛', at: '2026-10-15T10:30:00+08:00', url: 'https://www.nba.com/schedule' },
  { league: '英超', title: '布伦特福德 vs 利物浦', at: '2026-10-17T22:00:00+08:00', url: 'https://www.premierleague.com/en/matches/premier-league/2026-27/matchweek-7' },
]
const officialSchedules = [
  { label: 'NBA 赛程', url: 'https://www.nba.com/schedule' },
  { label: '英超赛程', url: 'https://www.premierleague.com/en/matches' },
  { label: '欧冠赛程', url: 'https://www.uefa.com/uefachampionsleague/fixtures-results/' },
]
const starterRoom: Room = { name: '墨衣moyi', platform: '斗鱼', url: 'https://www.douyu.com/8834570' }
const storageKey = 'lam-watch-rooms-v1'
const watchUrl = 'https://www.jrkan2023.com/'
const scheduleSources: { league: Match['league']; path: string }[] = [
  { league: 'NBA', path: 'basketball/nba' },
  { league: '英超', path: 'soccer/eng.1' },
  { league: '欧冠', path: 'soccer/uefa.champions' },
]

type EspnEvent = { id: string; name: string; date: string; links?: { href: string }[] }

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
    return data.events.map((event): Match => ({
      league: source.league,
      title: event.name,
      at: event.date,
      url: event.links?.[0]?.href || officialSchedules.find((item) => item.label.startsWith(source.league))?.url || 'https://www.nba.com/schedule',
    }))
  }))
  const results = await Promise.allSettled(requests)
  const loaded = results.flatMap((result) => result.status === 'fulfilled' ? result.value : [])
  if (!loaded.length) throw new Error('赛程源暂时不可用')
  return [...new Map(loaded.map((match) => [`${match.league}-${match.at}-${match.title}`, match])).values()]
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
  const body = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Lam Watch Hub//ZH', 'BEGIN:VEVENT', `DTSTART:${stamp(date)}`, `DTEND:${stamp(new Date(date.getTime() + 2 * 60 * 60 * 1000))}`, `SUMMARY:${match.title}`, `URL:${match.url}`, 'END:VEVENT', 'END:VCALENDAR'].join('\r\n')
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(body)}`
}

export function WatchHub() {
  const [rooms, setRooms] = useState<Room[]>(readRooms)
  const [roomInput, setRoomInput] = useState('')
  const [error, setError] = useState('')
  const [league, setLeague] = useState('全部')
  const [today] = useState(() => Date.now())
  const [matches, setMatches] = useState<Match[]>(() => scheduleSnapshot.matches.length ? scheduleSnapshot.matches as Match[] : fallbackMatches)
  const [scheduleState, setScheduleState] = useState(() => scheduleSnapshot.matches.length
    ? `更新于 ${new Intl.DateTimeFormat('zh-CN', { timeZone: 'Asia/Shanghai', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }).format(new Date(scheduleSnapshot.generatedAt))}`
    : '显示备用赛程')
  const upcoming = matches.filter((match) => new Date(match.at).getTime() > today && (league === '全部' || match.league === league)).slice(0, 8)

  useEffect(() => {
    let active = true
    loadSchedule().then((items) => {
      if (!active) return
      setMatches(items)
      setScheduleState(`已自动同步 · ${new Intl.DateTimeFormat('zh-CN', { timeZone: 'Asia/Shanghai', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }).format(new Date())}`)
    }).catch(() => { /* 保留构建时生成的赛程快照。 */ })
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
      <div><p className="eyebrow">THE GAME DESK / 观赛中心</p><h2 id="watch-heading">比赛，就在眼前。</h2><p>接下来的比赛、常看的直播间，一个入口就够了。</p></div>
      <span className="watch-timezone">ASIA / SHANGHAI · UTC+8</span>
    </div>
    <div className="watch-grid">
      <div className="watch-panel watch-board">
        <div className="watch-panel-title"><div><span className="watch-section-label">01 / MATCH SCHEDULE</span><h3>近期赛程</h3></div><span className="watch-sync" role="status"><span />{scheduleState}</span></div>
        <div className="watch-filters" aria-label="赛事筛选">{['全部', 'NBA', '英超', '欧冠'].map((item) => <button className={league === item ? 'active' : ''} type="button" key={item} onClick={() => setLeague(item)} aria-pressed={league === item}>{item}</button>)}</div>
        <div className="watch-table-head"><span>北京时间</span><span>赛事 / 对阵</span><span>日历</span></div>
        {upcoming.length ? <div className="watch-match-list">{upcoming.map((match) => <div className="watch-match" key={`${match.league}-${match.at}-${match.title}`}>
          <time dateTime={match.at}><strong>{new Intl.DateTimeFormat('zh-CN', { timeZone: 'Asia/Shanghai', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date(match.at))}</strong><span>{new Intl.DateTimeFormat('zh-CN', { timeZone: 'Asia/Shanghai', month: 'numeric', day: 'numeric', weekday: 'short' }).format(new Date(match.at))}</span></time>
          <div><span className="watch-league">{match.league}</span><a className="watch-fixture" href={match.url} target="_blank" rel="noopener noreferrer">{match.title}<ArrowUpRight size={14} /></a></div>
          <a className="watch-calendar-add" href={calendarHref(match)} download={`match-${match.at.slice(0, 10)}.ics`} title="添加到日历" aria-label={`将${match.title}添加到日历`}><CalendarPlus2 size={17} /></a>
        </div>)}</div> : <p className="watch-empty">目前没有该赛事的近期比赛，请查看赛事官网。</p>}
        <div className="watch-official">{officialSchedules.map((item) => <a key={item.label} href={item.url} target="_blank" rel="noopener noreferrer">{item.label}<ArrowUpRight size={14} /></a>)}</div>
        <p className="watch-note">赛程数据来自 ESPN，每日构建快照，并在访问时尝试刷新。比赛时间以赛事官网为准。</p>
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
