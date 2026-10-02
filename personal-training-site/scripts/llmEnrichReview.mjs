// 可选脚本：用大模型离线提炼每道题的复习要点和填空题，覆盖 generateAlgorithmData.mjs 的确定性挖空。
// 用法（Key 只放环境变量，绝不能提交到 Git）：
//   LLM_API_KEY=sk-xxx LLM_BASE_URL=https://api.deepseek.com LLM_MODEL=deepseek-chat node scripts/llmEnrichReview.mjs
// 输出写入 scripts/cache/review-enrichment.json，generateAlgorithmData.mjs 会自动合并。
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const projectRoot = join(__dirname, '..')
const problemsDir = join(projectRoot, 'src', 'data', 'algorithm', 'problems')
const cachePath = join(projectRoot, 'scripts', 'cache', 'review-enrichment.json')

const apiKey = process.env.LLM_API_KEY
const baseUrl = process.env.LLM_BASE_URL ?? 'https://api.deepseek.com'
const model = process.env.LLM_MODEL ?? 'deepseek-chat'
const limit = Number(process.env.LLM_LIMIT ?? 0) // 调试时可设为小数字，只提炼前 N 道

if (!apiKey) {
  console.error('缺少 LLM_API_KEY 环境变量。Key 只应存在于本机环境变量或 .env.local，不要提交。')
  process.exit(1)
}

// 题目数据按类别拆在 algorithm/problems/*.ts，由脚本生成，直接从各模块提取 JSON 段。
const problemFiles = readdirSync(problemsDir).filter((name) => name.endsWith('.ts')).sort()
const problems = problemFiles.flatMap((name) => {
  const source = readFileSync(join(problemsDir, name), 'utf8')
  const match = source.match(/= (\[[\s\S]*\])\n?$/)
  if (!match) {
    console.error(`无法从 ${name} 解析 problems 数据，请先运行 npm run generate:algorithms`)
    process.exit(1)
  }
  return JSON.parse(match[1])
})

const cache = existsSync(cachePath) ? JSON.parse(readFileSync(cachePath, 'utf8')) : {}
const targets = limit ? problems.slice(0, limit) : problems
console.log(`待提炼 ${targets.length} 道，已有缓存 ${Object.keys(cache).length} 道`)

const chat = async (messages) => {
  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      model,
      temperature: 0.3,
      messages,
      response_format: { type: 'json_object' },
    }),
  })
  if (!response.ok) throw new Error(`${response.status} ${await response.text()}`)
  const payload = await response.json()
  return JSON.parse(payload.choices[0].message.content)
}

const systemPrompt = `你是算法面试教练。根据给定的题目和本地笔记，输出严格 JSON：
{
  "keyPoints": string[],  // 3-5 条复习要点，每条一句话，突出核心技巧和不变量，不要复述题面
  "blanks": [{ "prompt": string, "answer": string }]  // 2-3 道填空题：把笔记句子里的关键技术术语替换为＿＿＿，answer 是被挖的术语；挖空必须是主动回忆有价值的概念
}`
let updated = 0
for (const problem of targets) {
  const signature = `${problem.id}`
  if (cache[signature]?.keyPoints?.length) continue
  const userPrompt = [
    `题号：${problem.id} ${problem.title}（${problem.difficulty}，${problem.category}）`,
    `标签：${problem.tags.join('、')}`,
    `本地笔记-思路：${problem.thoughts.join(' / ') || '无'}`,
    `本地笔记-易错点：${problem.pitfalls.join(' / ') || '无'}`,
    `复杂度：${problem.solutionGuide.complexity}`,
  ].join('\n')
  try {
    const result = await chat([
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ])
    if (Array.isArray(result.keyPoints) && Array.isArray(result.blanks)) {
      cache[signature] = { title: problem.title, keyPoints: result.keyPoints.slice(0, 5), blanks: result.blanks.slice(0, 3) }
      updated += 1
      console.log(`✓ ${problem.id} ${problem.title}`)
    }
  } catch (error) {
    console.warn(`✗ ${problem.id}: ${error.message}`)
  }
  // 轻微限速，避免触发服务商限流
  await new Promise((resolve) => setTimeout(resolve, 300))
}

mkdirSync(dirname(cachePath), existsSync(cachePath) ? undefined : { recursive: true })
writeFileSync(cachePath, JSON.stringify(cache, null, 2), 'utf8')
console.log(`完成：新增 ${updated} 道，缓存共 ${Object.keys(cache).length} 道 -> ${cachePath}`)
console.log('重新运行 npm run generate:algorithms 即可把提炼结果合并进站点数据')
