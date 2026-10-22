import snapshot from '../data/practice/hot100.json'
import { algorithmProblems } from '../data/algorithm'
import type { PracticeSpec } from './types'
import drills from '../data/practice/acm-drills.json'
export const acmDrills = drills as PracticeSpec[]

export const hot100 = snapshot.questions
export const hot100Ids = new Set(hot100.map((q) => q.id))
export const hot100Solved = algorithmProblems.filter((p) => hot100Ids.has(p.id) && p.completed).length
export const practiceSlug = (id: string) => {
  const question = hot100.find((q) => q.id === id)
  return question ? `${id}-${question.leetcodeSlug}` : acmDrills.find((q) => q.id === id)?.slug ?? null
}
export const validPracticeId = (id: string) => hot100Ids.has(id) || acmDrills.some((d) => d.id === id)
let cache: Promise<PracticeSpec[]> | undefined
export const loadPracticeSpecs = () => cache ??= Promise.all([import('../data/practice/specs.json'),import('../data/practice/acm-specs.json')]).then(([m,a]) => [...(m.default as PracticeSpec[]).map((s) => ({ ...s, acm: a.default[s.id as keyof typeof a.default] })),...acmDrills])
export const generatedAt = snapshot.fetchedAt
