// 深浅色主题：存浏览器 localStorage，头部按钮切换，html[data-theme] 驱动全站 CSS 变量。
// index.html 里有同 key 的内联脚本在首帧前设置 data-theme，避免刷新闪色。
const THEME_KEY = 'site-theme'

export type SiteTheme = 'dark' | 'light'

export function loadTheme(): SiteTheme {
  try {
    return window.localStorage.getItem(THEME_KEY) === 'light' ? 'light' : 'dark'
  } catch {
    return 'dark'
  }
}

export function applyTheme(theme: SiteTheme) {
  try {
    window.localStorage.setItem(THEME_KEY, theme)
  } catch {
    // localStorage 不可用（隐私模式）时仅本次会话生效
  }
  document.documentElement.dataset.theme = theme
  window.dispatchEvent(new Event('site-theme-changed'))
}

export function toggleTheme() {
  applyTheme(loadTheme() === 'light' ? 'dark' : 'light')
}
