import { useState } from 'react'
import { xunjiTrains, type XunjiSet, type XunjiTrain } from '../data/xunjiTrains'

// 把一组动作的「重量 × 次数」渲染成文字：自重（weight 为 0）和超组（items）都归一处理。
const setLabel = (set: XunjiSet): string => {
  if (set.items?.length) {
    return set.items
      .map((item) => `${item.weight ?? ''}${item.unit ?? ''} × ${item.reps ?? ''}`)
      .join(' / ')
  }
  if (set.selfWeight) return `自重 × ${set.reps ?? ''}`
  if ((set.weight == null || set.weight === 0) && set.unit) return `自重 × ${set.reps ?? ''}`
  if (set.weight == null && set.reps == null) return '—'
  return `${set.weight ?? ''}${set.unit ?? ''} × ${set.reps ?? ''}`
}

const orderSessions = (trains: XunjiTrain[]): XunjiTrain[] =>
  [...trains].sort((a, b) => String(b.localid).localeCompare(String(a.localid)))

export function XunjiLogPage() {
  const [openIds, setOpenIds] = useState<string[]>([])

  const sessions = orderSessions(xunjiTrains)
  const days = new Set(sessions.map((session) => session.datestr)).size
  const doneSets = sessions.reduce(
    (total, session) =>
      total +
      session.movements.reduce(
        (count, movement) => count + movement.sets.filter((set) => set.done).length,
        0,
      ),
    0,
  )

  const toggle = (id: string) => {
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section className="content-band page-band">
      <div className="section-heading">
        <p className="eyebrow">Xunji Log · 逐组明细</p>
        <h1 className="page-title">训练逐组记录</h1>
        <p>
          训记 App 同步下来的真实训练：每一次训练的每个动作、每组重量与次数。
          数据在本机同步脚本里拉取，页面只读展示，前端不持有任何密钥。
        </p>
      </div>

      <div className="diary-stat-strip" aria-label="逐组训练统计">
        <div>
          <span>训练次数</span>
          <strong>{sessions.length}</strong>
        </div>
        <div>
          <span>训练天数</span>
          <strong>{days}</strong>
        </div>
        <div>
          <span>完成组数</span>
          <strong>{doneSets}</strong>
        </div>
      </div>

      {sessions.length === 0 ? (
        <div className="xunji-panel xunji-empty">
          <p className="empty-note">还没有同步过训记数据。运行 <code>npm run sync:xunji</code> 后这里会出现逐组记录。</p>
        </div>
      ) : (
        <div className="xlog-list">
          {sessions.map((session, index) => {
            const open = openIds.includes(String(session.localid)) || (index < 3 && openIds.length === 0)
            return (
              <article className={`xlog-session ${open ? 'open' : ''}`} key={session.localid}>
                <button
                  className="xlog-session-head"
                  type="button"
                  aria-expanded={open}
                  onClick={() => toggle(String(session.localid))}
                >
                  <time>{session.datestr}</time>
                  <strong>{session.title}</strong>
                  <span className="xlog-session-meta">
                    {session.movements.length} 个动作
                    {session.durationMin != null ? ` · ${session.durationMin} min` : ''}
                    {session.note?.startsWith('calorie:') ? ` · ${session.note.split(':')[1]} kcal` : ''}
                  </span>
                </button>
                {open ? (
                  <div className="xlog-body">
                    {session.movements.map((movement) => (
                      <div className="xlog-movement" key={movement.name}>
                        <strong>{movement.name}</strong>
                        <div className="xlog-sets">
                          {movement.sets.length === 0 ? (
                            <span className="xlog-set dim">无记录</span>
                          ) : (
                            movement.sets.map((set, setIndex) => (
                              <span className={`xlog-set${set.done ? '' : ' dim'}`} key={setIndex}>
                                {setLabel(set)}
                              </span>
                            ))
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </article>
            )
          })}
        </div>
      )}
    </section>
  )
}
