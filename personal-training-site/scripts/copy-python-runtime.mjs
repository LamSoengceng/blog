import { cpSync, mkdirSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const version = JSON.parse(readFileSync(join(root, 'node_modules/pyodide/package.json'), 'utf8')).version
if (version !== '0.27.7') throw new Error(`Unexpected Python runtime: ${version}`)
const target = join(root, 'public/python/0.27.7')
mkdirSync(target, { recursive: true })
for (const file of ['pyodide.mjs', 'pyodide.asm.js', 'pyodide.asm.wasm', 'python_stdlib.zip', 'pyodide-lock.json']) {
  cpSync(join(root, 'node_modules/pyodide', file), join(target, file === 'python_stdlib.zip' ? 'python_stdlib.data' : file))
}
console.log('Local Pyodide 0.27.7 runtime prepared')
