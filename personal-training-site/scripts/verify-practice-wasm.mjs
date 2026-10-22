import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { loadPyodide } from 'pyodide'
const root = new URL('../', import.meta.url)
const py = await loadPyodide({ indexURL: fileURLToPath(new URL('node_modules/pyodide/', root)) })
py.runPython(readFileSync(new URL('src/practice/harness.py',root),'utf8'))
const specs = JSON.parse(readFileSync(new URL('src/data/practice/specs.json',root),'utf8'))
let count=0
for (const spec of specs) {
  py.globals.set('_payload',JSON.stringify({ spec,code:spec.reference }))
  const result=JSON.parse(py.runPython('json.dumps(run_suite(json.loads(_payload)))'))
  const failures=result.cases.filter((c) => !c.passed)
  if (result.error || failures.length) throw new Error(`${spec.id}: ${JSON.stringify(failures.length ? failures : result)}`)
  count+=result.cases.length
}
console.log(`Pyodide 0.27.7 WASM verification: ${specs.length}/100 problems, ${count}/500 cases passed`)
const acm = JSON.parse(readFileSync(new URL('src/data/practice/acm-specs.json',root),'utf8'))
const drills = JSON.parse(readFileSync(new URL('src/data/practice/acm-drills.json',root),'utf8'))
let acmCount=0
for (const spec of [...specs.map((s) => ({ ...s,acm:acm[s.id] })),...drills]) {
  py.globals.set('_payload',JSON.stringify({ spec:{ id:spec.id,tests:spec.acm.tests },code:spec.acm.reference,mode:'acm' }))
  const result=JSON.parse(py.runPython('json.dumps(run_suite(json.loads(_payload)))'))
  const failures=result.cases.filter((c) => !c.passed)
  if (result.error || failures.length) throw new Error(`ACM ${spec.id}: ${JSON.stringify(failures.length ? failures : result)}`)
  acmCount+=result.cases.length
}
console.log(`Pyodide ACM verification: 108/108 problems, ${acmCount}/540 stdin/stdout cases passed`)
