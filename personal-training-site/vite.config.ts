import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

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
        // 把 Pyodide 运行时（~20MB，含 10MB wasm）也纳入预缓存，离线可用
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2}', 'python/**'],
        maximumFileSizeToCacheInBytes: 25 * 1024 * 1024,
      },
    }),
  ],
})
