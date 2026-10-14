import { useState } from 'react'
import { ArrowUpRight, CalendarDays, Plus, Radio, Trash2 } from 'lucide-react'

type Match = { league: 'NBA' | '英超' | '欧冠'; title: string; at: string; url: string }
type Room = { name: string; url: string; platform: string }

const matches: Match[] = [
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
  const upcoming = matches.filter((match) => new Date(match.at).getTime() > today && (league === '全部' || match.league === league))

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
    <div className="watch-heading"><div><p className="eyebrow">Watch / 观赛与直播</p><h2 id="watch-heading">下一场，直接去看。</h2><p>比赛时间按北京时间显示；常看的直播间留在手边。</p></div><CalendarDays size={30} strokeWidth={1.3} /></div>
    <div className="watch-grid">
      <div className="watch-panel"><div className="watch-panel-title"><h3>近期比赛</h3><span>赛程快照 · 2026.10.14</span></div>
        <div className="watch-filters" aria-label="赛事筛选">{['全部', 'NBA', '英超', '欧冠'].map((item) => <button className={league === item ? 'active' : ''} type="button" key={item} onClick={() => setLeague(item)} aria-pressed={league === item}>{item}</button>)}</div>
        {upcoming.length ? <div className="watch-match-list">{upcoming.map((match) => <div className="watch-match" key={match.title}><time dateTime={match.at}>{new Intl.DateTimeFormat('zh-CN', { timeZone: 'Asia/Shanghai', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date(match.at))}</time><div><span>{match.league}</span><strong>{match.title}</strong></div><a href={calendarHref(match)} download={`match-${match.at.slice(0, 10)}.ics`} title="添加到日历" aria-label={`将${match.title}添加到日历`}><Plus size={17} /></a></div>)}</div> : <p className="watch-empty">当前筛选下暂无已核对的近期比赛，请查看官方赛程。</p>}
        <div className="watch-official">{officialSchedules.map((item) => <a key={item.label} href={item.url} target="_blank" rel="noopener noreferrer">{item.label}<ArrowUpRight size={14} /></a>)}</div>
        <p className="watch-note">开赛时间可能调整，以赛事官网为准；本站暂无自动赛程同步。</p>
      </div>
      <div className="watch-panel"><div className="watch-panel-title"><h3>我的直播间</h3><Radio size={18} /></div><div className="watch-room-list">{rooms.map((room) => <div className="watch-room" key={room.url}><div><span>{room.platform}</span><strong>{room.name}</strong><small>开播状态待核实</small></div><a href={room.url} target="_blank" rel="noopener noreferrer">进入直播间<ArrowUpRight size={15} /></a>{room.url !== starterRoom.url && <button type="button" onClick={() => saveRooms(rooms.filter((item) => item.url !== room.url))} aria-label={`删除${room.name}`}><Trash2 size={15} /></button>}</div>)}</div>
        <form className="watch-add-room" onSubmit={addRoom}><label htmlFor="watch-room-url">添加常看的直播间</label><div><input id="watch-room-url" type="url" value={roomInput} onChange={(event) => setRoomInput(event.target.value)} placeholder="粘贴 B站 / 斗鱼 / 虎牙链接" required /><button type="submit">收藏</button></div>{error && <p role="alert">{error}</p>}</form><p className="watch-note">收藏保存在当前浏览器。平台未开放可直接调用的跨域状态接口，因此暂不显示可能失准的开播标记。</p>
      </div>
    </div>
  </section>
}
