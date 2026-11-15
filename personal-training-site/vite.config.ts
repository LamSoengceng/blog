import { readFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// 观澜讲义 index/content 分离：列表与检索只需要元数据（标题/摘要/术语/小节标题/自测题数），
// 正文 blocks 与 quiz 题面由详情页按需动态加载（见 src/data/lessons/index.ts）。
// 元数据走构建期虚拟模块读盘生成，避免全文打进多个 lazy 页面共享的 chunk；
// JSON 新增/修改时整页刷新，保持「丢 JSON 自动收录」的管线约定。
const lessonsDir = join(dirname(fileURLToPath(import.meta.url)), 'src/data/lessons')

function lessonsMetaVirtual(): Plugin {
  const virtualId = 'virtual:lessons-meta'
  const resolvedId = '\0' + virtualId
  const buildMeta = () =>
    readdirSync(lessonsDir)
      .filter((file) => file.endsWith('.json'))
      .map((file) => {
        const { sections, quiz, ...meta } = JSON.parse(readFileSync(join(lessonsDir, file), 'utf8'))
        return { ...meta, __file: file, sections: sections.map((section: { heading: string }) => ({ heading: section.heading })), quizCount: quiz.length }
      })
  return {
    name: 'lessons-meta-virtual',
    enforce: 'pre',
    resolveId(id) {
      if (id === virtualId) return resolvedId
    },
    load(id) {
      if (id === resolvedId) return `export default ${JSON.stringify(buildMeta())}`
    },
    handleHotUpdate(ctx) {
      if (ctx.file.startsWith(lessonsDir)) {
        ctx.server.ws.send({ type: 'full-reload' })
        return []
      }
    },
  }
}


// https://vite.dev/config/
export default defineConfig({
  server: {
    watch: {
      // Pyodide 大文件（wasm/data）会被浏览器 SW 或杀软短暂锁定，
      // watcher 碰上会抛 EBUSY 直接杀掉 dev server；源码变更不涉及该目录，排除之
      ignored: ['**/public/python/**'],
    },
  },
  plugins: [
    lessonsMetaVirtual(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icons.svg'],
      manifest: {
        name: 'Lam Soengceng · 个人工作台',
        short_name: '个人工作台',
        description: '个人工作台：训练数据、算法复习、费曼练习和学习记录。',
        lang: 'zh-CN',
        theme_color: '#050806',
        background_color: '#050806',
        display: 'standalone',
        // 相对于 manifest.webmanifest 所在目录解析，/blog/ 部署与本地预览都成立
        start_url: '.',
        scope: '.',
        icons: [
          { src: 'pwa/pwa-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa/pwa-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'pwa/pwa-maskable-192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
          { src: 'pwa/pwa-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        // Pyodide 运行时（~11MB）不进 precache，改在首次进入练习页时由 runtimeCaching 缓存：
        // 预缓存曾让首访者后台下载 ~24.7MB（实测 145 entries / 24688 KiB），费曼页用户完全用不到
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2}'],
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
        runtimeCaching: [
          {
            urlPattern: /\/python\//,
            handler: 'CacheFirst',
            options: {
              cacheName: 'python-runtime',
              expiration: { maxEntries: 32, maxAgeSeconds: 60 * 60 * 24 * 30 },
              cacheableResponse: { statuses: [200] },
            },
          },
        ],
      },
    }),
  ],
})
