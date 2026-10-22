export type PracticeMode = 'core' | 'acm'
export type TestCase = { name: string; args: unknown[]; expected: unknown; stdin?: string; stdout?: string; custom?: boolean }
export type AcmSpec = { template: string; reference: string; inputFormat: string; outputFormat: string; tests: TestCase[] }
export type MistakeCard = {
  source: 'personal' | 'local' | 'supplement'
  original: string
  sourcePath?: string
  line: number
  wrong?: string
  counterexample?: string
  reason?: string
  correction?: string
  check: string
}
export type PracticeSpec = {
  id: string; slug: string; title: string; category: string; leetcodeSlug: string
  method: string; parameters: string[]; template: string; reference: string
  referenceSource: 'local' | 'supplement'; sourcePath?: string; sourceHash?: string
  sourceUpdatedAt?: string; needsRecheck: boolean; statement: string
  solutions: { name: string; code: string }[]
  recall: { signal: string; choice: string; invariant: string; skeleton: string; complexity: string }
  mistakes: MistakeCard[]; tests: TestCase[]
  related: { id: string; distinction: string }[]
  acm?: AcmSpec; acmOnly?: boolean
}
export type CaseResult = { name: string; input: unknown; expected: unknown; actual?: unknown; passed: boolean; error?: string; stderr?: string }
export type RunResult = { cases: CaseResult[]; stdout: string; error?: string; kind?: 'syntax' | 'runtime' }
export type Outcome = 'no-idea' | 'stuck' | 'failed' | 'assisted' | 'independent'
export type Draft = { id: string; code: string; elapsed: number; hint: number; updatedAt: string; finished?: boolean; mode?: PracticeMode }
export type PracticeAttempt = Draft & { key: string; outcome: Outcome; tags: string[]; explanation: string; result: RunResult | null; note: string; mistake?: { reason: string; check: string; confirmed: boolean; correctedCode?: string } }
