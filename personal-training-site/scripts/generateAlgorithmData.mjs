import { existsSync, mkdirSync, readdirSync, rmSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { basename, dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const projectRoot = join(__dirname, '..')
const leetcodeRoot = process.env.LEETCODE_ROOT ?? 'C:\\Project\\leetcode'
const progressPath = join(leetcodeRoot, 'LeetCode-Hot100-Progress.md')
const algorithmDir = join(projectRoot, 'src', 'data', 'algorithm')
const algorithmProblemsDir = join(algorithmDir, 'problems')
const metaOutputPath = join(projectRoot, 'src', 'data', 'algorithmMeta.ts')
const cacheDir = join(projectRoot, 'scripts', 'cache')
const leetcodeCachePath = join(cacheDir, 'leetcode-question-bank.json')
const llmEnrichmentPath = join(cacheDir, 'review-enrichment.json')
const statementCacheDir = join(cacheDir, 'statements')

const difficultyMap = new Map([
  ['🟢', '简单'],
  ['🟡', '中等'],
  ['🔴', '困难'],
])

const fallbackPatterns = {
  哈希表: '先明确 key/value 设计，再判断是查补数、分组还是去重；面试写法优先使用 dict/set 保持 O(n)。',
  双指针: '先排序或确定单调性，再定义左右指针移动规则；每次移动必须能排除一批不可能答案。',
  滑动窗口: '维护窗口内的计数和有效条件，右指针扩张，左指针只在条件满足或失效时收缩。',
  子串: '核心是频次表和窗口有效性，面试中要把 need/window、valid 或 missing 变量说清楚。',
  普通数组: '优先找一次遍历、前后缀、原地标记或排序后的结构性，避免暴力枚举。',
  矩阵: '先定义坐标边界和访问顺序，任何原地操作都要说明覆盖风险。',
  链表: '画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。',
  二叉树: '先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。',
  图论: '先建模节点、边和访问状态，BFS 适合最短层数，DFS 适合连通块和搜索。',
  回溯: '定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。',
  二分查找: '先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。',
  栈: '遇到最近未匹配、嵌套结构、下一个更大/更小值时优先想栈；单调栈要说明栈内维护什么顺序。',
  堆: 'Top K 和数据流问题优先考虑堆；Python 小顶堆处理最大堆时注意符号反转。',
  贪心: '写出局部选择为什么不会破坏全局最优，面试中要用覆盖范围或交换论证解释。',
  动态规划: '先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。',
  技巧: '关注位运算、投票、原地交换等模板题，先写不变量再写代码。',
}

const leetcodeDifficultyMap = new Map([
  ['EASY', '简单'],
  ['MEDIUM', '中等'],
  ['HARD', '困难'],
])

const cleanComment = (line) =>
  line
    .replace(/^\s*#\s?/, '')
    .replace(/[═=📌⚠️✅❌🟢🟡🔴`]/g, '')
    .trim()

const isCommentHeading = (line) =>
  /^(解题思路|思路|正确解法|解法|踩坑记录|易错点\/误区|注意事项|复杂度分析)(\s*[（(:：].*)?$/.test(line)

const slugify = (id, title) =>
  `${id}-${title}`
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[()（）]/g, '')

const walk = (dir) => {
  const entries = readdirSync(dir, { withFileTypes: true })
  return entries.flatMap((entry) => {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (['.history', '.lcpr_data', '.vscode', '__pycache__'].includes(entry.name)) {
        return []
      }
      return walk(fullPath)
    }
    return entry.isFile() && entry.name.endsWith('.py') ? [fullPath] : []
  })
}

const readUtf8 = (path) => readFileSync(path, 'utf8').replace(/^\uFEFF/, '')

const readJsonCache = (path) => {
  if (!existsSync(path)) return null
  try {
    return JSON.parse(readUtf8(path))
  } catch {
    return null
  }
}

const fetchLeetcodeCatalog = async () => {
  const cached = readJsonCache(leetcodeCachePath)
  if (process.env.LEETCODE_FETCH === '0') return cached?.questions ?? cached ?? []

  try {
    const fetchPage = async (skip) => {
      const response = await fetch('https://leetcode.cn/graphql/', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          referer: 'https://leetcode.cn/problemset/',
        },
        body: JSON.stringify({
          operationName: 'problemsetQuestionList',
          variables: { categorySlug: '', skip, limit: 100, filters: {} },
          query: `query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {
            problemsetQuestionList(categorySlug: $categorySlug, limit: $limit, skip: $skip, filters: $filters) {
              total
              questions {
                frontendQuestionId
                title
                titleCn
                titleSlug
                difficulty
                acRate
                solutionNum
                paidOnly
                topicTags {
                  name
                  nameTranslated
                  slug
                }
                extra {
                  companyTagNum
                }
              }
            }
          }`,
        }),
      })

      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`)

      const payload = await response.json()
      const list = payload?.data?.problemsetQuestionList
      return {
        total: list?.total ?? 0,
        questions: list?.questions ?? [],
      }
    }

    const firstPage = await fetchPage(0)
    const questions = [...firstPage.questions]
    for (let skip = questions.length; skip < firstPage.total; skip += 100) {
      const page = await fetchPage(skip)
      if (!Array.isArray(page.questions) || page.questions.length === 0) break
      questions.push(...page.questions)
    }

    if (!Array.isArray(questions) || questions.length === 0) {
      throw new Error('LeetCode question list is empty')
    }

    mkdirSync(cacheDir, { recursive: true })
    writeFileSync(
      leetcodeCachePath,
      JSON.stringify(
        {
          fetchedAt: new Date().toISOString(),
          source: 'https://leetcode.cn/problemset/',
          questions,
        },
        null,
        2,
      ),
      'utf8',
    )
    return questions
  } catch (error) {
    console.warn(`LeetCode metadata fetch failed, using cache if available: ${error.message}`)
    return cached?.questions ?? cached ?? []
  }
}

const parseProblemFromFilename = (path) => {
  const match = basename(path).match(/^(\d+)\.(.+)\.py$/)
  if (!match) return null
  return {
    id: match[1],
    title: match[2].replace(/-/g, ' '),
  }
}

const extractCommentNotes = (source) => {
  const lines = source.split(/\r?\n/)
  const comments = lines
    .filter((line) => /^\s*#/.test(line))
    .map(cleanComment)
    .filter(Boolean)
    .filter((line) => !isCommentHeading(line))
    .filter((line) => !/^@lc/.test(line) && !/^\[\d+\]/.test(line))

  const thoughts = comments
    .filter((line) => /思路|解法|核心|时间|空间|状态|递归|BFS|DFS|双指针|滑动窗口|单调|动态规划|哈希|堆|栈/.test(line))
    .slice(0, 7)

  const pitfalls = comments
    .filter((line) => /易错|误区|踩坑|坑\d*|注意|忘|边界|越界|反了|混淆|不能|否则|防止/.test(line))
    .slice(0, 8)

  const codeMatch = source.match(/# @lc code=start([\s\S]*?)# @lc code=end/)
  const codeSource = (codeMatch?.[1] ?? source)
    .split(/\r?\n/)
    .filter((line) => line.trim() && !line.trim().startsWith('# @lc'))
    .slice(0, 90)
    .join('\n')
    .trim()

  return {
    thoughts,
    pitfalls,
    codePreview: codeSource,
  }
}

const extractComplexity = (thoughts) =>
  thoughts.find((line) => /时间复杂度|空间复杂度|复杂度/.test(line)) ?? '面试时补充时间复杂度和空间复杂度。'

const cleanNoteText = (note) => {
  const cleaned = (note ?? '').replace(/=+/g, '').trim()
  if (!cleaned || cleaned === '踩坑记录' || cleaned === '易错点/误区：' || cleaned === '易错点/误区:') {
    return ''
  }
  return cleaned
}

const unique = (items) => [...new Set(items.filter(Boolean))]

// 复习填空：把注释句子里的关键技术术语挖空，做成主动回忆题。
const techTermPattern = new RegExp(
  [
    '快慢指针', '双指针', '滑动窗口', '单调栈', '单调队列', '前缀和', '差分数组', '哈希表', '并查集',
    '拓扑排序', '动态规划', '记忆化搜索', '状态压缩', '位运算', '摩尔投票', '二分查找', '快速幂',
    '分治', '归并排序', '快速排序', '三路快排', '桶排序', '计数排序', '基数排序', '堆排序',
    '大顶堆', '小顶堆', '优先队列', '反转链表', '环形链表', '虚拟头节点', 'dummy 节点', '哨兵节点',
    '层序遍历', '前序遍历', '中序遍历', '后序遍历', 'Morris 遍历', '深度优先搜索', '广度优先搜索',
    'DFS', 'BFS', 'Dijkstra', 'Bellman-Ford', 'Floyd', 'Kruskal', 'Prim', 'KMP', 'Manacher',
    '字典树', 'Trie', '线段树', '树状数组', '滚动数组', '01 背包', '完全背包', '状压 DP', '树形 DP',
    '区间 DP', '打表', '离散化', '异或前缀和', '接雨水', '回文子串', '最长递增子序列', '编辑距离',
    '零拷贝', '原地哈希', '差分', '贪心', '回溯', '剪枝', '递归', '堆', '栈', '队列',
  ].join('|'),
  'gi',
)

const buildRecallBlanks = ({ thoughts, pitfalls }) => {
  const candidates = [
    ...pitfalls.map((pitfall) => cleanNoteText(pitfall)),
    ...thoughts,
  ]
    .filter((line) => line.length >= 12 && line.length <= 120)
    .filter((line) => !/^\d+\.\s*$/.test(line))

  const blanks = []
  const seenAnswers = new Set()
  for (const line of candidates) {
    const match = line.match(techTermPattern)
    if (!match) continue
    const answer = match[0]
    const key = answer.toLowerCase()
    if (seenAnswers.has(key)) continue
    seenAnswers.add(key)
    blanks.push({
      prompt: line.replace(techTermPattern, '＿＿＿'),
      answer,
    })
    if (blanks.length >= 3) break
  }
  return blanks
}

const buildSolutionGuide = ({ row, thoughts, pitfalls, tags }) => {
  const firstUsefulThought = thoughts.find((line) => !/时间复杂度|空间复杂度/.test(line))
  const keyMistake = pitfalls.map(cleanNoteText).find(Boolean)

  return {
    idea: firstUsefulThought ?? `围绕「${row.topic}」组织解法，先确认输入输出和边界，再选择对应模板。`,
    interviewSteps: [
      `先说明核心考点：${row.topic}。`,
      fallbackPatterns[row.category] ?? '先讲清楚暴力解，再给出数据结构优化。再补充复杂度。',
      tags.length ? `关键词：${tags.slice(0, 4).join(' / ')}。` : '写代码前先列出边界条件。',
    ],
    complexity: extractComplexity(thoughts),
    keyMistake: keyMistake ?? '本地注释里还没有明确错误记录，复习后补充第一次卡住的位置。',
  }
}

const parseProgress = () => {
  const content = readUtf8(progressPath)
  const rows = []
  let currentCategory = '未分类'

  for (const rawLine of content.split(/\r?\n/)) {
    const heading = rawLine.match(/^##\s+(?:[一二三四五六七八九十]+、)?(.+?)(?:\s+✅.*)?$/)
    if (heading && !/需要复习|当前推荐|统计/.test(heading[1])) {
      currentCategory = heading[1].trim()
      continue
    }

    const cells = rawLine
      .trim()
      .split('|')
      .map((cell) => cell.trim().replace(/\*\*/g, ''))
      .filter(Boolean)

    if (cells.length < 5 || !/^[✅❌]$/.test(cells[0])) continue

    rows.push({
      completed: cells[0] === '✅',
      id: cells[1],
      title: cells[2],
      difficulty: difficultyMap.get(cells[3]) ?? cells[3],
      topic: cells[4],
      category: currentCategory,
    })
  }

  return rows
}

// 原题描述：逐题从 LeetCode 抓取，转换为纯文本并落盘缓存，避免重复请求。
const htmlToText = (html) =>
  html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(p|div|pre|li|h3)>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/[\t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()

const fetchStatement = async (titleSlug) => {
  const response = await fetch('https://leetcode.cn/graphql/', {
    method: 'POST',
    headers: { 'content-type': 'application/json', referer: 'https://leetcode.cn/' },
    body: JSON.stringify({
      operationName: 'questionDetail',
      variables: { titleSlug },
      query: 'query questionDetail($titleSlug: String!) { question(titleSlug: $titleSlug) { translatedContent } }',
    }),
  })
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`)
  const payload = await response.json()
  return htmlToText(payload?.data?.question?.translatedContent ?? '')
}

const fetchStatements = async (titleSlugs) => {
  mkdirSync(statementCacheDir, { recursive: true })
  const statements = new Map()
  for (const slug of titleSlugs) {
    if (!slug) continue
    const cacheFile = join(statementCacheDir, `${slug}.json`)
    if (existsSync(cacheFile)) {
      try {
        statements.set(slug, JSON.parse(readUtf8(cacheFile)).text ?? '')
        continue
      } catch {
        // 缓存损坏则重新抓取
      }
    }
    if (process.env.LEETCODE_FETCH === '0') continue
    try {
      const text = await fetchStatement(slug)
      if (text) {
        writeFileSync(cacheFile, JSON.stringify({ fetchedAt: new Date().toISOString(), text }, null, 2), 'utf8')
        statements.set(slug, text)
        console.log(`statement cached: ${slug}`)
      }
      await new Promise((resolve) => setTimeout(resolve, 250))
    } catch (error) {
      console.warn(`statement fetch failed for ${slug}: ${error.message}`)
    }
  }
  return statements
}

const leetcodeQuestions = await fetchLeetcodeCatalog()
const leetcodeById = new Map(leetcodeQuestions.map((question) => [String(question.frontendQuestionId), question]))
const leetcodeByTitleCn = new Map(leetcodeQuestions.map((question) => [question.titleCn, question]))

const fileRecords = walk(leetcodeRoot)
  .map((path) => {
    const parsed = parseProblemFromFilename(path)
    if (!parsed) return null
    const stats = statSync(path)
    const source = readUtf8(path)
    const notes = extractCommentNotes(source)
    return {
      ...parsed,
      path,
      sourcePath: relative(leetcodeRoot, path).replaceAll('\\', '/'),
      lastUpdated: stats.mtime.toISOString().slice(0, 10),
      lastUpdatedAt: stats.mtime.toISOString(),
      ...notes,
    }
  })
  .filter(Boolean)

const filesById = new Map()
for (const record of fileRecords) {
  const existing = filesById.get(record.id)
  if (!existing || record.path.includes(`${join('hot100', '')}`) || record.lastUpdated > existing.lastUpdated) {
    filesById.set(record.id, record)
  }
}

const progressRows = parseProgress()
const progressIds = new Set(progressRows.map((row) => row.id))
const rows = [
  ...progressRows,
  ...fileRecords
    .filter((record) => !progressIds.has(record.id))
    .map((record) => ({
      completed: true,
      id: record.id,
      title: record.title,
      difficulty: '未标注',
      topic: '本地提交',
      category: record.path.includes(`${join('hot100', '')}`) ? 'Hot100 补充' : '本地补充',
    })),
]

const llmEnrichment = readJsonCache(llmEnrichmentPath) ?? {}

const problems = rows.map((row) => {
  const file = filesById.get(row.id)
  const leetcode = leetcodeById.get(row.id) ?? leetcodeByTitleCn.get(row.title)
  const leetcodeTags = leetcode?.topicTags?.map((tag) => tag.nameTranslated || tag.name) ?? []  // 不在进度表里的本地补充题没有人工标注考点，用 LeetCode 官方标签顶替，避免出现「本地提交」这种无效考点。
  const resolvedTopic =
    row.topic && !/^(本地提交|未标注)$/.test(row.topic) ? row.topic : leetcodeTags[0] ?? row.topic
  const tags = unique([row.category, resolvedTopic, ...leetcodeTags])
  const thoughts = file?.thoughts?.length
    ? file.thoughts
    : [`核心考点：${resolvedTopic}`, fallbackPatterns[row.category] ?? '先整理输入输出和边界，再选择合适的数据结构。']
  const pitfalls = file?.pitfalls?.length
    ? file.pitfalls
    : row.completed
      ? ['本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。']
      : ['尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。']

  return {
    id: row.id,
    slug: slugify(row.id, row.title),
    title: leetcode?.titleCn ?? row.title,
    titleEn: leetcode?.title,
    category: row.category,
    difficulty: row.difficulty === '未标注' && leetcode?.difficulty
      ? leetcodeDifficultyMap.get(leetcode.difficulty) ?? row.difficulty
      : row.difficulty,
    topic: resolvedTopic,
    completed: row.completed || Boolean(file),
    leetcodeSlug: leetcode?.titleSlug,
    leetcodeUrl: leetcode?.titleSlug ? `https://leetcode.cn/problems/${leetcode.titleSlug}/` : undefined,
    nowcoderUrl: `https://www.nowcoder.com/search/all?query=${encodeURIComponent(leetcode?.titleCn ?? row.title)}`,
    acceptanceRate: typeof leetcode?.acRate === 'number' ? Number((leetcode.acRate * 100).toFixed(1)) : undefined,
    solutionCount: leetcode?.solutionNum,
    companyTagCount: leetcode?.extra?.companyTagNum,
    paidOnly: leetcode?.paidOnly,
    sourceBanks: [progressIds.has(row.id) ? 'LeetCode Hot 100' : '本地补充'],
    tags,
    sourcePath: file?.sourcePath,
    lastUpdated: file?.lastUpdated,
    lastUpdatedAt: file?.lastUpdatedAt,
    interviewPattern: fallbackPatterns[row.category] ?? '先讲清楚暴力解，再给出数据结构优化，并补充复杂度。',
    thoughts,
    pitfalls,
    recallBlanks: buildRecallBlanks({ thoughts, pitfalls }),
    llmReview: llmEnrichment[row.id] ?? null,
    solutionGuide: buildSolutionGuide({ row: { ...row, topic: resolvedTopic }, thoughts, pitfalls, tags }),
    codePreview: file?.codePreview,
  }
})

// 原题描述
const statements = await fetchStatements(problems.map((problem) => problem.leetcodeSlug).filter(Boolean))

// 大模型提炼结果（scripts/llmEnrichReview.mjs 生成）优先于确定性挖空
const problemsWithReview = problems.map((problem) => {
  const { llmReview, ...rest } = problem
  const enrichment = llmReview
  const statement = statements.get(rest.leetcodeSlug ?? '') ?? undefined
  if (!enrichment) return { ...rest, statement }
  return {
    ...rest,
    statement,
    recallBlanks: Array.isArray(enrichment.blanks) ? enrichment.blanks : problem.recallBlanks,
    keyPoints: Array.isArray(enrichment.keyPoints) ? enrichment.keyPoints : undefined,
  }
})

const recentProblems = problemsWithReview
  .filter((problem) => problem.codePreview && problem.lastUpdatedAt)
  .sort((first, second) => new Date(second.lastUpdatedAt).getTime() - new Date(first.lastUpdatedAt).getTime())
  .slice(0, 10)
  .map((problem) => ({
    id: problem.id,
    slug: problem.slug,
    title: problem.title,
    category: problem.category,
    difficulty: problem.difficulty,
    topic: problem.topic,
    tags: problem.tags.slice(0, 5),
    sourcePath: problem.sourcePath,
    lastUpdated: problem.lastUpdated,
    leetcodeUrl: problem.leetcodeUrl,
    codePreview: problem.codePreview,
  }))

const categoryNames = [...new Set(problemsWithReview.map((problem) => problem.category))]

const categories = categoryNames.map((category) => {
  const items = problemsWithReview.filter((problem) => problem.category === category)
  return {
    name: category,
    total: items.length,
    solved: items.filter((problem) => problem.completed).length,
    hard: items.filter((problem) => problem.difficulty === '困难').length,
  }
})

const reviewQueue = problemsWithReview
  .filter((problem) => problem.completed && problem.pitfalls.some((pitfall) => !pitfall.includes('暂未提取')))
  .slice(0, 8)
  .map((problem) => ({
    id: problem.id,
    title: problem.title,
    slug: problem.slug,
    reason: problem.pitfalls[0],
  }))

// 中文类别名 -> 模块文件名；进度表里出现新类别时在这里登记，否则回退成 cat-<序号>。
const categorySlugMap = new Map([
  ['哈希表', 'hash-table'],
  ['双指针', 'two-pointers'],
  ['滑动窗口', 'sliding-window'],
  ['子串', 'substring'],
  ['普通数组', 'array'],
  ['矩阵', 'matrix'],
  ['链表', 'linked-list'],
  ['二叉树', 'binary-tree'],
  ['图论', 'graph'],
  ['回溯', 'backtracking'],
  ['二分查找', 'binary-search'],
  ['栈', 'stack'],
  ['堆', 'heap'],
  ['贪心', 'greedy'],
  ['动态规划', 'dynamic-programming'],
  ['技巧', 'tricks'],
  ['Hot100 补充', 'hot100-extra'],
  ['本地补充', 'local-extra'],
  ['未分类', 'uncategorized'],
])

const toCamel = (slug) => slug.replace(/-([a-z0-9])/g, (_, char) => char.toUpperCase())

const typesOutput = `// 本文件由 scripts/generateAlgorithmData.mjs 自动生成，请勿手改。
export type AlgorithmProblem = {
  id: string
  slug: string
  title: string
  titleEn?: string
  category: string
  difficulty: string
  topic: string
  completed: boolean
  leetcodeSlug?: string
  leetcodeUrl?: string
  nowcoderUrl?: string
  acceptanceRate?: number
  solutionCount?: number
  companyTagCount?: number
  paidOnly?: boolean
  sourceBanks: string[]
  tags: string[]
  sourcePath?: string
  lastUpdated?: string
  lastUpdatedAt?: string
  interviewPattern: string
  thoughts: string[]
  pitfalls: string[]
  recallBlanks: { prompt: string; answer: string }[]
  keyPoints?: string[]
  statement?: string
  solutionGuide: {
    idea: string
    interviewSteps: string[]
    complexity: string
    keyMistake: string
  }
  codePreview?: string
}

export type AlgorithmCategory = {
  name: string
  total: number
  solved: number
  hard: number
}

export type AlgorithmReviewItem = {
  id: string
  title: string
  slug: string
  reason: string
}

export type AlgorithmRecentItem = {
  id: string
  slug: string
  title: string
  category: string
  difficulty: string
  topic: string
  tags: string[]
  sourcePath?: string
  lastUpdated?: string
  leetcodeUrl?: string
  codePreview: string
}
`

rmSync(algorithmProblemsDir, { recursive: true, force: true })
mkdirSync(algorithmProblemsDir, { recursive: true })
writeFileSync(join(algorithmDir, 'types.ts'), typesOutput, 'utf8')

const categoryModules = categoryNames.map((name, index) => {
  const slug = categorySlugMap.get(name) ?? `cat-${index + 1}`
  const varName = `${toCamel(slug)}Problems`
  const items = problemsWithReview.filter((problem) => problem.category === name)
  const moduleOutput = `// 本文件由 scripts/generateAlgorithmData.mjs 自动生成，请勿手改。
import type { AlgorithmProblem } from '../types'

export const ${varName}: AlgorithmProblem[] = ${JSON.stringify(items, null, 2)}
`
  writeFileSync(join(algorithmProblemsDir, `${slug}.ts`), moduleOutput, 'utf8')
  return { slug, varName }
})

const indexOutput = `// 本文件由 scripts/generateAlgorithmData.mjs 自动生成，请勿手改。
${categoryModules.map((module) => `import { ${module.varName} } from './problems/${module.slug}'`).join('\n')}
import type { AlgorithmCategory, AlgorithmProblem, AlgorithmRecentItem, AlgorithmReviewItem } from './types'

export type { AlgorithmCategory, AlgorithmProblem, AlgorithmRecentItem, AlgorithmReviewItem } from './types'

export const algorithmProblems: AlgorithmProblem[] = [
${categoryModules.map((module) => `  ...${module.varName},`).join('\n')}
]

export const algorithmCategories: AlgorithmCategory[] = ${JSON.stringify(categories, null, 2)}

export const algorithmReviewQueue: AlgorithmReviewItem[] = ${JSON.stringify(reviewQueue, null, 2)}

export const algorithmRecentProblems: AlgorithmRecentItem[] = ${JSON.stringify(recentProblems, null, 2)}
`

writeFileSync(join(algorithmDir, 'index.ts'), indexOutput, 'utf8')

// 汇总数据单独成文件：首页/知识库只需要这几个数字，不应因此下载整个题库。
const metaOutput = `// 本文件由 scripts/generateAlgorithmData.mjs 自动生成，请勿手改。
export const algorithmMeta = ${JSON.stringify(
  {
    sourceLabel: 'Local LeetCode snapshot',
    generatedAt: new Date().toISOString(),
    leetcodeCatalogSource: 'https://leetcode.cn/problemset/',
    leetcodeCatalogFetchedAt: readJsonCache(leetcodeCachePath)?.fetchedAt,
    total: problemsWithReview.length,
    solved: problemsWithReview.filter((problem) => problem.completed).length,
  },
  null,
  2,
)} as const
`

writeFileSync(metaOutputPath, metaOutput, 'utf8')
console.log(
  `Generated ${problemsWithReview.length} algorithm problems in ${categoryNames.length} categories -> ${algorithmDir}`,
)
console.log(`Generated algorithmMeta -> ${metaOutputPath}`)
