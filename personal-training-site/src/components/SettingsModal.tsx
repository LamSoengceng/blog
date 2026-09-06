import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { chatCompletion, loadAiConfig, saveAiConfig, type AiChatConfig } from '../utils/aiChat'
import { loadReviewPrefs, saveReviewPrefs, type ReviewPrefs } from '../utils/settings'

const reviewPoolSafeMax = 500

export function SettingsModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [aiForm, setAiForm] = useState<AiChatConfig>(loadAiConfig)
  const [aiSaved, setAiSaved] = useState(false)
  const [aiTesting, setAiTesting] = useState(false)
  const [aiTestResult, setAiTestResult] = useState('')
  const [prefs, setPrefs] = useState<ReviewPrefs>(loadReviewPrefs)

  useEffect(() => {
    if (!open) return
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  if (!open) return null

  const saveAi = async () => {
    saveAiConfig(aiForm)
    setAiSaved(true)
    setTimeout(() => setAiSaved(false), 2000)
    // 顺手验证配置是否可用
    if (aiForm.apiKey) {
      setAiTesting(true)
      setAiTestResult('')
      try {
        const reply = await chatCompletion(aiForm, [
          { role: 'user', content: '回复"连接成功"四个字，不要其他内容。' },
        ])
        setAiTestResult(reply ? `✓ 连接成功（${aiForm.model}）` : '⚠ 连接成功但返回为空')
      } catch (error) {
        setAiTestResult(`✗ ${error instanceof Error ? error.message : String(error)}`)
      } finally {
        setAiTesting(false)
      }
    }
  }

  const updatePrefs = (patch: Partial<ReviewPrefs>) => {
    const next = { ...prefs, ...patch }
    setPrefs(next)
    saveReviewPrefs(next)
  }

  return (
    <div className="settings-overlay" onClick={onClose} role="presentation">
      <div
        className="settings-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="网站设置"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="settings-head">
          <h2>网站设置</h2>
          <button className="settings-close" type="button" aria-label="关闭设置" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <section className="settings-section">
          <h3>AI 助手</h3>
          <p className="ai-note">
            API Key 只保存在本机浏览器（localStorage），不会提交到代码仓库。兼容 OpenAI Chat
            Completions 协议（DeepSeek / Kimi / Qwen 兼容模式 / OpenAI 等）。
          </p>
          <div className="ai-settings-grid">
            <label>
              Base URL
              <input
                type="text"
                value={aiForm.baseUrl}
                onChange={(event) => setAiForm({ ...aiForm, baseUrl: event.target.value })}
                placeholder="https://api.deepseek.com"
              />
            </label>
            <label>
              模型
              <input
                type="text"
                value={aiForm.model}
                onChange={(event) => setAiForm({ ...aiForm, model: event.target.value })}
                placeholder="deepseek-chat"
              />
            </label>
            <label>
              API Key
              <input
                type="password"
                value={aiForm.apiKey}
                onChange={(event) => setAiForm({ ...aiForm, apiKey: event.target.value })}
                placeholder="sk-..."
              />
            </label>
          </div>
          <div className="settings-actions">
            <button className="review-btn primary review-btn-small" type="button" onClick={saveAi} disabled={aiTesting}>
              {aiTesting ? '验证中…' : '保存并验证'}
            </button>
            {aiSaved ? <span className="settings-saved">已保存</span> : null}
          </div>
          {aiTestResult ? <p className="ai-test-result">{aiTestResult}</p> : null}
        </section>

        <section className="settings-section">
          <h3>复习偏好</h3>
          <label className="settings-check-row">
            <span>每轮复习题数上限</span>
            <input
              type="number"
              min={0}
              max={reviewPoolSafeMax}
              value={prefs.queueLimit}
              onChange={(event) => updatePrefs({ queueLimit: Math.max(0, Number(event.target.value) || 0) })}
            />
          </label>
          <p className="ai-note">0 = 不限制（当前标记二刷共 50 道）。改动在下一轮队列生效。</p>
          <label className="settings-check-row">
            <input
              type="checkbox"
              checked={prefs.showBlanks}
              onChange={(event) => updatePrefs({ showBlanks: event.target.checked })}
            />
            <span>显示填空回忆区</span>
          </label>
          <label className="settings-check-row">
            <input
              type="checkbox"
              checked={prefs.autoExpandCode}
              onChange={(event) => updatePrefs({ autoExpandCode: event.target.checked })}
            />
            <span>切换题目时代码默认展开</span>
          </label>
        </section>
      </div>
    </div>
  )
}
