import { useState } from 'react'
import { Annoyed, Frown, Laugh, Meh, Pencil, Smile, X } from 'lucide-react'
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
  updateJournalEntry,
  type JournalEntry,
  type JournalKind,
} from '../utils/journalStore'

const moodIcons = [Frown, Annoyed, Meh, Smile, Laugh]

/** 本地时区的 YYYY-MM-DD（编辑回填与日期改动比较都用本地口径，和列表显示一致） */
const localDateValue = (iso: string) => {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return todayInputValue()
  const pad = (value: number) => String(value).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

function MoodIcon({ mood, size = 18 }: { mood: number; size?: number }) {
  const Icon = moodIcons[mood - 1] ?? Meh
  return <Icon size={size} aria-hidden="true" />
}

export function JournalSection() {
  const [entries, setEntries] = useState<JournalEntry[]>(loadJournal)
  const [date, setDate] = useState(todayInputValue())
  const [kind, setKind] = useState<JournalKind>('随笔')
  const [mood, setMood] = useState(3)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [savedFlash, setSavedFlash] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)

  const canSave = body.trim().length > 0

  const resetComposer = () => {
    setDate(todayInputValue())
    setKind('随笔')
    setMood(3)
    setTitle('')
    setBody('')
  }

  const save = () => {
    if (!canSave) return
    const nextTitle = title.trim() || `${kind} · ${date}`
    if (editingId) {
      const original = entries.find((entry) => entry.id === editingId)
      const patch: Parameters<typeof updateJournalEntry>[2] = {
        kind,
        mood,
        title: nextTitle,
        body: body.trim(),
      }
      // 用户改了日期时，保留原有的时分秒（本地时区），只换日期部分（createdAt 不再撒谎）
      if (original) {
        if (date && date !== localDateValue(original.createdAt)) {
          const orig = new Date(original.createdAt)
          const next = Number.isNaN(orig.getTime())
            ? new Date(`${date}T00:00:00`)
            : new Date(
                Number(date.slice(0, 4)),
                Number(date.slice(5, 7)) - 1,
                Number(date.slice(8, 10)),
                orig.getHours(),
                orig.getMinutes(),
                orig.getSeconds(),
              )
          if (!Number.isNaN(next.getTime())) patch.createdAt = next.toISOString()
        }
        const updated = updateJournalEntry(entries, editingId, patch)
        setEntries(updated)
        saveJournal(updated)
      }
      setEditingId(null)
    } else {
      const next = addJournalEntry(entries, { kind, mood, title: nextTitle, body: body.trim() })
      setEntries(next)
      saveJournal(next)
    }
    resetComposer()
    setSavedFlash(true)
    setTimeout(() => setSavedFlash(false), 1800)
  }

  const startEdit = (entry: JournalEntry) => {
    setEditingId(entry.id)
    setDate(localDateValue(entry.createdAt))
    setKind(entry.kind)
    setMood(entry.mood)
    setTitle(entry.title)
    setBody(entry.body)
  }

  const cancelEdit = () => {
    setEditingId(null)
    resetComposer()
  }

  const remove = (id: string) => {
    if (editingId === id) cancelEdit()
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
              {moodIcons.map((Icon, index) => (
                <button
                  className={`journal-mood ${mood === index + 1 ? 'active' : ''}`}
                  type="button"
                  key={moodLabels[index]}
                  aria-label={`${index + 1} 分 ${moodLabels[index]}`}
                  onClick={() => setMood(index + 1)}
                >
                  <Icon size={18} aria-hidden="true" />
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
        {editingId ? (
          <p className="journal-editing-note">正在编辑一篇旧日记，改完点「保存修改」，或取消回到新写。</p>
        ) : null}
        <div className="journal-composer-actions">
          {editingId ? (
            <>
              <button className="review-btn primary" type="submit" disabled={!canSave}>
                保存修改
              </button>
              <button className="review-btn ghost" type="button" onClick={cancelEdit}>
                取消
              </button>
            </>
          ) : (
            <button className="review-btn primary" type="submit" disabled={!canSave}>
              写下这一篇
            </button>
          )}
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
            <article className={`journal-entry ${editingId === entry.id ? 'editing' : ''}`} key={entry.id}>
              <div className="journal-entry-head">
                <span className={`journal-kind-badge ${entry.kind}`}>{entry.kind}</span>
                <time>{formatJournalDate(entry.createdAt)}</time>
                {entry.updatedAt ? <span className="journal-edited">已编辑</span> : null}
                <span className="journal-mood-badge" title={`心情 ${entry.mood} 分 ${moodLabels[entry.mood - 1]}`}>
                  <MoodIcon mood={entry.mood} size={14} />
                </span>
                <button
                  className="journal-edit"
                  type="button"
                  aria-label="编辑这篇日记"
                  onClick={() => startEdit(entry)}
                >
                  <Pencil size={14} />
                </button>
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
