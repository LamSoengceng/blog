// 站点偏好设置：存浏览器 localStorage，设置弹窗（App 级）修改，各页面订阅生效。
export type ReviewPrefs = {
  queueLimit: number // 每轮复习题数上限，0 = 全部
  showBlanks: boolean // 是否显示填空回忆区
  autoExpandCode: boolean // 进入下一题时代码是否默认展开
}

export const defaultReviewPrefs: ReviewPrefs = {
  queueLimit: 0,
  showBlanks: true,
  autoExpandCode: false,
}

const REVIEW_PREFS_KEY = 'review-prefs-v1'

export const loadReviewPrefs = (): ReviewPrefs => {
  try {
    const raw = window.localStorage.getItem(REVIEW_PREFS_KEY)
    if (!raw) return defaultReviewPrefs
    return { ...defaultReviewPrefs, ...(JSON.parse(raw) as Partial<ReviewPrefs>) }
  } catch {
    return defaultReviewPrefs
  }
}

export const saveReviewPrefs = (prefs: ReviewPrefs) => {
  try {
    window.localStorage.setItem(REVIEW_PREFS_KEY, JSON.stringify(prefs))
  } catch {
    // localStorage 不可用时静默降级，仅本次会话有效
  }
  window.dispatchEvent(new Event('review-prefs-changed'))
}

export const onReviewPrefsChange = (callback: () => void) => {
  window.addEventListener('review-prefs-changed', callback)
  return () => window.removeEventListener('review-prefs-changed', callback)
}

// 任意页面调用即可打开全局设置弹窗（App 根部监听）
export const openSiteSettings = () => {
  window.dispatchEvent(new CustomEvent('open-site-settings'))
}
