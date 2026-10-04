/**
 * fetchHithinkData.mjs
 * 用 hithink-finance CLI（同花顺金融数据服务）拉取 MarketPage 需要的真实数据，
 * 落盘到 scripts/cache/ 供 generateMarketData.mjs 合成 marketData.ts。
 *
 * 用法: node scripts/fetchHithinkData.mjs
 * 依赖: hithink-finance CLI 已安装并登录（hithink-finance auth status ok=true）
 * 安全: 不读写 API Key；本脚本不向任何参数传入 Key（CLI 使用系统凭据库）。
 */
import { execSync } from 'node:child_process'
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const cacheDir = join(root, 'scripts', 'cache')
mkdirSync(cacheDir, { recursive: true })

// Windows 下 npm 全局安装的 CLI 是 .cmd shim，Node spawn 需要完整路径或 .cmd 后缀
function resolveCli() {
  if (process.platform === 'win32') {
    try {
      const out = execSync('where hithink-finance', { encoding: 'utf8', shell: 'cmd.exe' })
      const line = out
        .split(/\r?\n/)
        .map((l) => l.trim())
        .find((l) => /hithink-finance\.cmd$/i.test(l))
      if (line) return line
    } catch {
      /* fall through */
    }
  }
  return 'hithink-finance'
}
const CLI = resolveCli()

// 页面需要的指数（A 股部分）+ 深证成指（算两市成交额）
export const INDEX_CODES = [
  '000001.SH', // 上证指数
  '000300.SH', // 沪深300
  '000905.SH', // 中证500
  '000852.SH', // 中证1000
  '399006.SZ', // 创业板指
  '000688.SH', // 科创50
  '399001.SZ', // 深证成指（成交额合计用）
]

// 行业/概念板块指数（对应页面 sectorPulse）
export const SECTOR_CODES = [
  '881121.TI', // 半导体
  '885957.TI', // 东数西算(算力) → AI算力
  '886072.TI', // 高股息精选
  '881273.TI', // 白酒 → 消费复苏代表
  '885531.TI', // 光伏概念 → 新能源
  '881157.TI', // 证券 → 券商
]

// 页面 watchlist 的 ETF（代码带市场后缀）
export const FUND_CODES = [
  '510300.SH', // 沪深300ETF
  '510500.SH', // 中证500ETF
  '512100.SH', // 中证1000ETF
  '588000.SH', // 科创50ETF
  '159915.SZ', // 创业板ETF
  '512480.SH', // 半导体ETF
  '515880.SH', // 通信ETF
  '512800.SH', // 银行ETF
  '513180.SH', // 恒生科技ETF
  '159941.SZ', // 纳指ETF
]

// 显式按参数拼接调用（本脚本参数均为公开标的代码与本地路径，无注入面）
function runCli(args) {
  const cmd = `${CLI} ${args.map((a) => `"${a}"`).join(' ')}`
  const stdout = execSync(cmd, {
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
  })
  const json = JSON.parse(stdout)
  if (json.ok !== true) {
    throw new Error(`CLI 信封失败: ${cmd} -> ${JSON.stringify(json).slice(0, 500)}`)
  }
  return json
}

// 落盘类命令：信封 data 只含 {path, format, count}，真实数据在输出文件里
function runCliToFile(args) {
  const json = runCli(args)
  const path = json.data?.path
  if (!path) throw new Error(`CLI 未返回输出路径: ${args.join(' ')}`)
  return JSON.parse(readFileSync(path, 'utf8'))
}

// ---- 1. 指数快照（含行业/概念） ----
const indexCodes = [...INDEX_CODES, ...SECTOR_CODES]
const indexSnapshotEnvelope = runCliToFile([
  'index', 'snapshot',
  '--thscodes', indexCodes.join(','),
  '--output', join(cacheDir, 'index-snapshot.json'),
  '--format', 'json',
])
const indexSnapshotItems = indexSnapshotEnvelope.data?.item ?? []
console.log(`index snapshot: ${indexCodes.length} codes -> ${indexSnapshotItems.length} items`)

// ---- 2. 指数历史（trend 迷你走势，最近 ~45 天日线） ----
const endMs = Date.now()
const startMs = endMs - 45 * 24 * 60 * 60 * 1000 // 45 天足够覆盖 10 个交易日（含假期）
const history = {}
for (const code of indexCodes) {
  const env = runCliToFile([
    'index', 'history',
    '--thscode', code,
    '--start-ms', String(startMs),
    '--end-ms', String(endMs),
    '--output', join(cacheDir, `index-history-${code.replace(/[./]/g, '_')}.json`),
    '--format', 'json',
  ])
  const items = env.data?.item ?? env.data?.items ?? []
  history[code] = items
  console.log(`index history: ${code} -> ${items.length} bars`)
}

// ---- 3. ETF 基金快照 ----
const fundSnapshots = {}
for (const code of FUND_CODES) {
  try {
    const env = runCliToFile([
      'fund', 'snapshot',
      '--thscode', code,
      '--output', join(cacheDir, `fund-snapshot-${code.replace(/[./]/g, '_')}.json`),
      '--format', 'json',
    ])
    const item = env.data?.item?.[0] ?? null
    fundSnapshots[code] = item
    console.log(`fund snapshot: ${code} -> ${item ? item.last_price : 'NO ITEM'}`)
  } catch (err) {
    console.warn(`fund snapshot FAILED: ${code} -> ${err.message.slice(0, 200)}`)
    fundSnapshots[code] = null
  }
}

// ---- 4. 特色数据（涨停/炸板/连板/热榜/飙升/龙虎榜） ----
// 榜单日期：取指数历史最后一条 bar 的 date_ms（最近交易日，Asia/Shanghai 零点）
const lastTradeMs = history['000001.SH']?.at(-1)?.date_ms ?? null
console.log(`special data trade date_ms: ${lastTradeMs}`)

function specialToFile(name, sub, args) {
  try {
    const outPath = join(cacheDir, `${name}.json`)
    const env = runCliToFile(['special', sub, ...args, '--output', outPath, '--format', 'json'])
    const items = env.data?.item ?? env.data?.stock_items ?? []
    console.log(`special ${sub}: ${items.length} items`)
    return env.data
  } catch (err) {
    console.warn(`special ${sub} FAILED: ${err.message.slice(0, 200)}`)
    return null
  }
}

const special = {
  fetchedAt: new Date().toISOString(),
  lastTradeMs,
  limitUp: lastTradeMs
    ? specialToFile('special-limit-up', 'limit-up-pool', ['--date-ms', String(lastTradeMs), '--size', '30'])
    : null,
  limitBreak: lastTradeMs
    ? specialToFile('special-limit-break', 'limit-break-pool', ['--date-ms', String(lastTradeMs), '--size', '30'])
    : null,
  ladder: specialToFile('special-ladder', 'limit-up-ladder', []),
  hotStock: specialToFile('special-hot-stock', 'hot-stock', []),
  skyrocket: specialToFile('special-skyrocket', 'skyrocket', []),
  dragonTiger: specialToFile('special-dragon-tiger', 'dragon-tiger', []),
}

const bundle = {
  fetchedAt: new Date().toISOString(),
  indexCodes,
  indexSnapshot: indexSnapshotItems,
  history,
  fundSnapshots,
  special,
}
writeFileSync(join(cacheDir, 'hithink-bundle.json'), JSON.stringify(bundle, null, 2))
console.log(`bundle written: ${join(cacheDir, 'hithink-bundle.json')}`)
