import { Mic, MicOff } from 'lucide-react'
import { useDictation } from '../utils/speech'

// 麦克风按钮：口述转文字，最终结果追加到 onText 回调（调用方负责拼进输入框）。
export function DictationButton({ onText }: { onText: (text: string) => void }) {
  const { supported, listening, interim, error, start, stop } = useDictation((text) =>
    onText(text),
  )

  if (!supported) {
    return (
      <button
        className="dictation-btn"
        type="button"
        title="当前浏览器不支持语音识别（建议 Chrome / Edge）"
        disabled
      >
        <MicOff size={16} />
      </button>
    )
  }

  return (
    <>
      <button
        className={`dictation-btn ${listening ? 'listening' : ''}`}
        type="button"
        aria-label={listening ? '停止听写' : '开始口述转文字'}
        title={listening ? '停止听写' : '口述转文字'}
        onClick={() => (listening ? stop() : start())}
      >
        <Mic size={16} />
      </button>
      {listening ? (
        <span className="dictation-interim">{interim || '正在听…'}</span>
      ) : null}
      {error ? (
        <span className="dictation-error" role="status">
          {error}
        </span>
      ) : null}
    </>
  )
}
