// 面试官评语的分块解析：把流式/完整的 rubric 文本拆成结构化块。
// 容忍半截文本（流式中最后一节还没写完）和无标记文本（旧记录的自由格式评语整段回退）。
export type RubricBlock = {
  key: string
  icon: string
  title: string
  body: string
}

export type ParsedRubric = {
  blocks: RubricBlock[]
  score: number | null
}

const SECTION_DEFS: { key: string; icon: string; title: string; test: (line: string) => boolean }[] = [
  { key: 'correct', icon: '✓', title: '讲对了', test: (l) => l.startsWith('✓') || l.startsWith('√') || /^(讲对了|正确的要点)/.test(l) },
  { key: 'gaps', icon: '⚠️', title: '错与漏', test: (l) => l.startsWith('⚠') || /^(错与漏|错漏|问题|遗漏)/.test(l) },
  { key: 'depth', icon: '🔍', title: '深度判定', test: (l) => l.startsWith('🔍') || l.startsWith('深度') },
  { key: 'followup', icon: '🎤', title: '面试官追问', test: (l) => l.startsWith('🎤') || l.startsWith('追问') || l.startsWith('面试官追') },
  { key: 'oneliner', icon: '💡', title: '一句话版本', test: (l) => l.startsWith('💡') || l.startsWith('一句话') },
]

const SCORE_PATTERN = /费曼得分[:：]?\s*([1-5])\s*\/\s*5/
// 结构化 JSON 得分行（当前提示词要求模型最后单独输出 {"score": N}）
const JSON_SCORE_PATTERN = /"score"\s*:\s*([1-5])(?=\s*[,}])/

// 去掉行首的图标、图标与标题间的空格、标题和冒号，剩下的是正文
const stripMarker = (line: string, def: { icon: string; title: string }) => {
  let rest = line
  for (const prefix of [def.icon, def.icon[0]]) {
    if (rest.startsWith(prefix)) {
      rest = rest.slice(prefix.length)
      break
    }
  }
  rest = rest.replace(/^[ \t]+/, '')
  if (rest.startsWith(def.title)) rest = rest.slice(def.title.length)
  return rest.replace(/^[:：\s]+/, '').trim()
}

export const parseRubric = (text: string): ParsedRubric => {
  const blocks: RubricBlock[] = []
  let score: number | null = null

  const appendToRaw = (line: string) => {
    const raw = blocks.find((block) => block.key === 'raw')
    if (raw) raw.body = `${raw.body}\n${line}`.trim()
    else blocks.push({ key: 'raw', icon: '', title: '', body: line })
  }

  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim()
    if (!line) continue

    // 得分行：结构化 JSON（当前提示词）或旧文本格式（历史记录），含流式半截都识别
    const jsonScore = line.match(JSON_SCORE_PATTERN)
    if (jsonScore) {
      score = Number(jsonScore[1])
      continue // 完整 JSON 得分行：单独成行取值，不进正文
    }
    if (line.includes('"score"')) continue // 半截的 JSON 得分行（数字还没打出来）不进正文
    const inlineScore = line.match(SCORE_PATTERN)
    if (inlineScore) score = Number(inlineScore[1])
    if (line.startsWith('费曼得分')) continue // 半截得分行（数字还没打出来）不进正文
    const cleanedLine = inlineScore
      ? line.replace(/[，,]?\s*费曼得分[:：]?\s*[1-5]\s*\/\s*5\s*$/, '').trim()
      : line

    const def = SECTION_DEFS.find((candidate) => candidate.test(cleanedLine))
    if (def) {
      const body = stripMarker(cleanedLine, def)
      const existing = blocks.find((block) => block.key === def.key)
      // 同一节再次出现就续写，不另开块
      if (existing) existing.body = `${existing.body}\n${body}`.trim()
      else blocks.push({ key: def.key, icon: def.icon, title: def.title, body })
      continue
    }

    // 标记前的引言行进 raw 块；标记后的延续行归入当前节
    if (blocks.length && blocks[blocks.length - 1].key !== 'raw') {
      const last = blocks[blocks.length - 1]
      last.body = `${last.body}\n${cleanedLine}`
    } else {
      appendToRaw(cleanedLine)
    }
  }

  return { blocks, score }
}
