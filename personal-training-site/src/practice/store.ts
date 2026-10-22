import { loadReviewStore, recordReview, saveReviewStore } from '../utils/reviewStore'
import { algorithmProblems } from '../data/algorithm'
import { validPracticeId } from './catalog'
import type { Draft, PracticeAttempt, PracticeMode } from './types'

type ExportData = { version: 1; drafts: Draft[]; attempts: PracticeAttempt[]; review: ReturnType<typeof loadReviewStore>; manual: string[] }
let connection: Promise<IDBDatabase> | undefined
const connect = () => connection ??= new Promise((resolve, reject) => {
  const request = indexedDB.open('hot100-practice', 1)
  request.onupgradeneeded = () => {
    request.result.createObjectStore('drafts', { keyPath: 'id' })
    request.result.createObjectStore('attempts', { keyPath: 'key' })
  }
  request.onsuccess = () => resolve(request.result)
  request.onerror = () => { connection = undefined; reject(request.error) }
})
const operation = async <T>(store: 'drafts' | 'attempts', mode: IDBTransactionMode, action: (s: IDBObjectStore) => IDBRequest<T>) => {
  const db = await connect()
  return new Promise<T>((resolve, reject) => {
    const tx = db.transaction(store, mode)
    const request = action(tx.objectStore(store))
    tx.oncomplete = () => resolve(request.result)
    tx.onerror = () => reject(tx.error)
    tx.onabort = () => reject(tx.error ?? new Error('本机存储事务已中止'))
  })
}
type StoredDraft = Draft & { problemId?: string }
export const draftKey = (draft: Pick<Draft,'id' | 'mode'>) => draft.mode === 'acm' ? `acm:${draft.id}` : draft.id
const storedDraft = (draft: Draft): StoredDraft => ({ ...draft, id: draftKey(draft), problemId: draft.id })
const restoredDraft = (draft: StoredDraft): Draft => ({ ...draft, id: draft.problemId ?? draft.id })
export const readDraft = async (id: string, mode: PracticeMode = 'core') => {
  const draft = await operation<StoredDraft | undefined>('drafts','readonly',(s) => s.get(draftKey({ id,mode })))
  return draft ? restoredDraft(draft) : undefined
}
export const writeDraft = (draft: Draft) => operation('drafts', 'readwrite', (s) => s.put(storedDraft(draft)))
export const readDrafts = async () => (await operation<StoredDraft[]>('drafts', 'readonly', (s) => s.getAll())).map(restoredDraft)
export const readAttempts = () => operation<PracticeAttempt[]>('attempts', 'readonly', (s) => s.getAll())
export const writeAttempt = (attempt: PracticeAttempt) => operation('attempts', 'readwrite', (s) => s.put(attempt))
const manualKey = 'hot100-manual-review-v1'
export const manualReviews = (): string[] => {
  try { const ids: unknown = JSON.parse(localStorage.getItem(manualKey) ?? '[]'); return Array.isArray(ids) ? ids.filter((i): i is string => typeof i === 'string' && validPracticeId(i)) : [] }
  catch { return [] }
}
export const addManualReview = (id: string) => {
  localStorage.setItem(manualKey, JSON.stringify([...new Set([...manualReviews(), id])]))
}
export const reviewSlug = (id: string) => algorithmProblems.find((p) => p.id === id)?.slug ?? `hot100-${id}`
export const scheduleAttempt = (attempt: PracticeAttempt) => {
  const slug = attempt.mode === 'acm' ? `acm:${reviewSlug(attempt.id)}` : reviewSlug(attempt.id)
  const next = recordReview(loadReviewStore(), slug, attempt.outcome === 'independent' ? 'known' : 'again')
  saveReviewStore(next)
  if (window.localStorage.getItem('algorithm-review-v1') !== JSON.stringify(next)) throw new Error('复习调度保存失败')
  if (attempt.outcome !== 'independent') addManualReview(attempt.id)
}
export const independentAllowed = (draft: Pick<Draft, 'hint' | 'code'>, testedCode: string | null, passed: boolean) => draft.hint === 0 && passed && draft.code === testedCode
const validDraft = (item: unknown): item is Draft => {
  if (!item || typeof item !== 'object') return false
  const d = item as Draft
  return validPracticeId(d.id) && (d.mode === undefined || d.mode === 'core' || d.mode === 'acm') && typeof d.code === 'string' && d.code.length <= 1000000 && Number.isFinite(d.elapsed) && d.elapsed >= 0 && Number.isInteger(d.hint) && d.hint >= 0 && d.hint <= 4 && typeof d.updatedAt === 'string' && Number.isFinite(Date.parse(d.updatedAt)) && (d.finished === undefined || typeof d.finished === 'boolean')
}
const validAttempt = (item: unknown): item is PracticeAttempt => {
  if (!validDraft(item)) return false
  const a = item as PracticeAttempt
  const validResult = a.result === null || (a.result && typeof a.result === 'object' && typeof a.result.stdout === 'string' && Array.isArray(a.result.cases) && a.result.cases.every((c) => c && typeof c.name === 'string' && typeof c.passed === 'boolean'))
  const validIndependent = a.outcome !== 'independent' || (a.hint === 0 && a.result && !a.result.error && a.result.cases.length >= 5 && a.result.cases.every((c) => c.passed))
  return Boolean(typeof a.key === 'string' && ['no-idea','stuck','failed','assisted','independent'].includes(a.outcome) && Array.isArray(a.tags) && a.tags.every((t) => typeof t === 'string') && typeof a.explanation === 'string' && typeof a.note === 'string' && validResult && validIndependent && (a.mistake === undefined || (a.mistake && typeof a.mistake.reason === 'string' && typeof a.mistake.check === 'string' && typeof a.mistake.confirmed === 'boolean' && (a.mistake.correctedCode === undefined || typeof a.mistake.correctedCode === 'string'))))
}
export const exportPractice = async (): Promise<ExportData> => ({ version: 1, drafts: await readDrafts(), attempts: await readAttempts(), review: loadReviewStore(), manual: manualReviews() })
export const importPractice = async (text: string) => {
  const value = JSON.parse(text) as ExportData
  if (value.version !== 1 || !Array.isArray(value.drafts) || !value.drafts.every(validDraft) || !Array.isArray(value.attempts) || !value.attempts.every(validAttempt) || !Array.isArray(value.manual) || !value.manual.every(validPracticeId) || !value.review || typeof value.review !== 'object' || Array.isArray(value.review)) throw new Error('备份格式不正确；未写入任何数据。')
  for (const entry of Object.values(value.review)) {
    if (!entry || !['known','again'].includes(entry.status) || !Number.isFinite(Date.parse(entry.due)) || !Number.isFinite(Date.parse(entry.at)) || !Number.isFinite(entry.intervalDays) || !Number.isFinite(entry.repetitions) || !Number.isFinite(entry.easeFactor)) throw new Error('备份中的复习记录无效。')
  }
  const db = await connect()
  const drafts = new Map((await readDrafts()).map((d) => [draftKey(d), d]))
  // Merge only newer drafts; historical attempts have stable unique keys.
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(['drafts','attempts'], 'readwrite')
    for (const d of value.drafts) if (!drafts.has(draftKey(d)) || d.updatedAt > drafts.get(draftKey(d))!.updatedAt) tx.objectStore('drafts').put(storedDraft(d))
    for (const a of value.attempts) tx.objectStore('attempts').put(a)
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
    tx.onabort = () => reject(tx.error ?? new Error('导入事务已中止'))
  })
  const review = loadReviewStore()
  for (const [slug, entry] of Object.entries(value.review)) if (!review[slug] || entry.at > review[slug].at) review[slug] = entry
  saveReviewStore(review)
  localStorage.setItem(manualKey, JSON.stringify([...new Set([...manualReviews(), ...value.manual])]))
}
export const download = (text: string, name: string, type = 'text/plain') => {
  const url = URL.createObjectURL(new Blob([text], { type }))
  const link = document.createElement('a'); link.href = url; link.download = name; link.click()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
