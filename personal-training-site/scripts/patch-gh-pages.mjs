// GitHub Pages 的 SPA 深链兜底：GH Pages 对未知路径只会返回 404.html。
// 所以把 index.html 复制成 404.html 并注入「记下真实路径 → 跳回 base」脚本；
// index.html 注入「读回路径 → replaceState 还原」脚本，随后 React Router 按 basename 正常接管。
// 用法：node scripts/patch-gh-pages.mjs /blog/   （参数 = 部署子路径，与 build:pages 里 --base 一致）
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const projectRoot = join(__dirname, '..')
const distDir = join(projectRoot, 'dist')
// 部署子路径必填：默认值容易在手动裸跑时产出错误子路径的兜底页
const base = process.argv[2]
if (!base || !base.startsWith('/') || !base.endsWith('/')) {
  console.error('用法：node scripts/patch-gh-pages.mjs /blog/   （参数 = 部署子路径，与 build:pages 里 --base 一致）')
  process.exit(1)
}
const storageKey = 'xunji-gh-redirect'

const indexPath = join(distDir, 'index.html')
let index = readFileSync(indexPath, 'utf8')
if (!index.includes('<head>')) {
  console.error('dist/index.html 里找不到 <head>，构建产物可能不完整')
  process.exit(1)
}

const restoreSnippet = `<script>
      (function () {
        var target = sessionStorage.getItem('${storageKey}')
        if (target && target !== location.pathname + location.search + location.hash) {
          sessionStorage.removeItem('${storageKey}')
          history.replaceState(null, '', target)
        }
      })()
    </script>`

index = index.replace('<head>', `<head>\n    ${restoreSnippet}`)
writeFileSync(indexPath, index, 'utf8')

const redirectSnippet = `<script>
      sessionStorage.setItem('${storageKey}', location.pathname + location.search + location.hash)
      location.replace('${base}')
    </script>`

writeFileSync(join(distDir, '404.html'), index.replace(restoreSnippet, redirectSnippet), 'utf8')
console.log(`GitHub Pages 兜底就绪：404.html（跳回 ${base}）+ index.html（还原路径）`)
