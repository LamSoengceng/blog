// 分支模式发布：把 dist/ 作为一次孤立提交强推到 github 远程的 gh-pages 分支。
// 背景（2026-11-13）：Actions 管线停摆（疑似账户计费），Pages 源改为 gh-pages 分支 legacy 构建；
// Actions 恢复后可切回 build_type=workflow 并弃用本脚本。
// 用法：npm run deploy:branch   （先跑 build:pages，再推 github 远程的 gh-pages）
import { execSync } from 'node:child_process'
import { existsSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const dist = join(root, 'dist')
const remote = process.argv[2] || 'https://github.com/LamSoengceng/blog.git'

const run = (cmd, cwd = root) => execSync(cmd, { cwd, stdio: 'inherit' })

console.log('① 构建产物（build:pages）…')
run('npm run build:pages', root)

console.log('② 在 dist/ 内构造孤立提交…')
rmSync(join(dist, '.git'), { force: true, recursive: true })
run('git init -q .', dist)
// .nojekyll：跳过 Jekyll，否则 Pages 分支构建的目录解析会出现怪异 404
if (!existsSync(join(dist, '.nojekyll'))) writeFileSync(join(dist, '.nojekyll'), '')
run('git add -A', dist)
run('git -c user.name="LamSoengceng" -c user.email="lamsoengceng@users.noreply.github.io" commit -qm "Deploy: branch-mode publish from local build"', dist)

console.log('③ 强推到 github 的 gh-pages…')
run(`git push "${remote}" HEAD:refs/heads/gh-pages --force`, dist)

rmSync(join(dist, '.git'), { force: true, recursive: true })
console.log('✅ 完成。Pages 分支构建约需 1-2 分钟生效（构建时重命名 dist/.git 已清理）。')
