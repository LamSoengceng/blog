import { useState } from 'react'
import { X } from 'lucide-react'
import { DictationButton } from './DictationButton'
import {
  addJournalEntry,
  formatJournalDate,
  journalKinds,
  loadJournal,
  moodLabels,
  removeJournalEntry,
  saveJournal,
  todayInputValue,
  type JournalEntry,
  type JournalKind,
} from '../utils/journalStore'

const moodEmoji = ['😞', '😕', '😐', '🙂', '😄']

export function JournalSection() {
  const [entries, setEntries] = useState<JournalEntry[]>(loadJournal)
  const [date, setDate] = useState(todayInputValue())
  const [kind, setKind] = useState<JournalKind>('随笔')
  const [mood, setMood] = useState(3)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [savedFlash, setSavedFlash] = useState(false)

  const canSave = body.trim().length > 0

  const save = () => {
    if (!canSave) return
    const next = addJournalEntry(entries, {
      kind,
      mood,
      title: title.trim() || `${kind} · ${date}`,
      body: body.trim(),
    })
    setEntries(next)
    saveJournal(next)
    setTitle('')
    setBody('')
    setSavedFlash(true)
    setTimeout(() => setSavedFlash(false), 1800)
  }

  const remove = (id: string) => {
    const next = removeJournalEntry(entries, id)
    setEntries(next)
    saveJournal(next)
  }

  return (
    <div className="journal-shell">
      <form
        className="journal-composer"
        onSubmit={(event) => {
          event.preventDefault()
          save()
        }}
      >
        <div className="journal-composer-row">
          <label className="journal-field journal-field-date">
            <span>日期</span>
            <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
          </label>
          <div className="journal-field">
            <span>类型</span>
            <div className="journal-kind-row">
              {journalKinds.map((item) => (
                <button
                  className={`journal-kind ${kind === item ? 'active' : ''}`}
                  type="button"
                  key={item}
                  onClick={() => setKind(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="journal-field">
            <span>心情</span>
            <div className="journal-mood-row">
              {moodEmoji.map((emoji, index) => (
                <button
                  className={`journal-mood ${mood === index + 1 ? 'active' : ''}`}
                  type="button"
                  key={emoji}
                  aria-label={`${index + 1} 分 ${moodLabels[index]}`}
                  onClick={() => setMood(index + 1)}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        </div>

        <input
          className="journal-title-input"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="标题（可留空，会自动用类型 + 日期）"
          maxLength={60}
        />
        <div className="journal-input-block">
          <div className="journal-input-tools">
            <DictationButton onText={(spoken) => setBody((prev) => (prev ? `${prev} ${spoken}` : spoken))} />
            <span className="journal-input-tools-hint">口述转文字（Chrome / Edge）</span>
          </div>
          <textarea
            className="journal-body-input"
            value={body}
            onChange={(event) => setBody(event.target.value)}
            rows={5}
            placeholder="今天练了什么、想了什么、情绪怎么样——写给未来的自己。"
          />
        </div>
        <div className="journal-composer-actions">
          <button className="review-btn primary" type="submit" disabled={!canSave}>
            写下这一篇
          </button>
          <span className="journal-char-count">{body.length} 字</span>
          {savedFlash ? <span className="settings-saved">已保存到本机 ✓</span> : null}
        </div>
      </form>

      <div className="journal-timeline" aria-label="我的日记">
        {entries.length === 0 ? (
          <p className="empty-note journal-empty">
            还没有日记。上面写下第一篇——它只存在你自己的浏览器里，不会上传到任何地方。
          </p>
        ) : (
          entries.map((entry) => (
            <article className="journal-entry" key={entry.id}>
              <div className="journal-entry-head">
                <span className={`journal-kind-badge ${entry.kind}`}>{entry.kind}</span>
                <time>{formatJournalDate(entry.createdAt)}</time>
                <span className="journal-mood-badge" title={`心情 ${entry.mood} 分 ${moodLabels[entry.mood - 1]}`}>
                  {moodEmoji[entry.mood - 1]}
                </span>
                <button
                  className="journal-delete"
                  type="button"
                  aria-label="删除这篇日记"
                  onClick={() => remove(entry.id)}
                >
                  <X size={14} />
                </button>
              </div>
              <h3>{entry.title}</h3>
              <p>{entry.body}</p>
            </article>
          ))
        )}
      </div>
    </div>
  )
}
