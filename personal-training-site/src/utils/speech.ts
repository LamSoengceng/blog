// 口述转文字：基于浏览器原生 Web Speech API（Chrome/Edge 内置，免费，支持 zh-CN）。
// 不依赖任何第三方服务密钥；不支持的浏览器会得到明确提示。
import { useCallback, useEffect, useRef, useState } from 'react'

type RecognitionResultEvent = {
  resultIndex: number
  results: ArrayLike<ArrayLike<{ transcript: string }> & { isFinal: boolean }>
}

type RecognitionLike = {
  lang: string
  continuous: boolean
  interimResults: boolean
  start: () => void
  stop: () => void
  onresult: ((event: RecognitionResultEvent) => void) | null
  onerror: ((event: { error: string }) => void) | null
  onend: (() => void) | null
}

type RecognitionConstructor = new () => RecognitionLike

const getRecognitionConstructor = (): RecognitionConstructor | null => {
  if (typeof window === 'undefined') return null
  const holder = window as unknown as {
    SpeechRecognition?: RecognitionConstructor
    webkitSpeechRecognition?: RecognitionConstructor
  }
  return holder.SpeechRecognition ?? holder.webkitSpeechRecognition ?? null
}

export const isDictationSupported = () => getRecognitionConstructor() !== null

// 听写钩子：最终识别结果通过 onFinal 回调交给调用方拼进输入框；
// 中间结果显示在按钮旁边，让「正在听」可见。
export function useDictation(onFinal: (text: string) => void) {
  const [listening, setListening] = useState(false)
  const [interim, setInterim] = useState('')
  const [error, setError] = useState('')
  const recognitionRef = useRef<RecognitionLike | null>(null)
  const onFinalRef = useRef(onFinal)

  useEffect(() => {
    onFinalRef.current = onFinal
  }, [onFinal])

  const stop = useCallback(() => {
    recognitionRef.current?.stop()
  }, [])

  const start = useCallback(() => {
    const Constructor = getRecognitionConstructor()
    if (!Constructor) {
      setError('当前浏览器不支持语音识别，请使用 Chrome 或 Edge。')
      return
    }
    if (recognitionRef.current) {
      recognitionRef.current.stop()
      recognitionRef.current = null
    }
    setError('')
    const recognition = new Constructor()
    recognition.lang = 'zh-CN'
    recognition.continuous = true
    recognition.interimResults = true
    recognition.onresult = (event) => {
      let finalText = ''
      let interimText = ''
      for (let i = event.resultIndex; i < event.results.length; i += 1) {
        const result = event.results[i]
        const transcript = result[0]?.transcript ?? ''
        if (result.isFinal) finalText += transcript
        else interimText += transcript
      }
      if (finalText.trim()) onFinalRef.current(finalText.trim())
      setInterim(interimText)
    }
    recognition.onerror = (event) => {
      if (event.error === 'no-speech') setError('没听到内容，再试一次。')
      else if (event.error === 'not-allowed') setError('麦克风权限被拒绝，请在浏览器地址栏允许麦克风。')
      else setError(`语音识别出错：${event.error}`)
    }
    recognition.onend = () => {
      setListening(false)
      setInterim('')
      recognitionRef.current = null
    }
    recognitionRef.current = recognition
    recognition.start()
    setListening(true)
  }, [])

  useEffect(() => () => recognitionRef.current?.stop(), [])

  return { supported: isDictationSupported(), listening, interim, error, start, stop }
}
