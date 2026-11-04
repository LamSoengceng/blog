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

// 把浏览器识别错误码翻译成用户能看懂的中文；未知错误码保留原文，方便排查。
export const describeSpeechError = (code: string): string => {
  if (code === 'no-speech') return '没听到内容，再试一次。'
  if (code === 'not-allowed' || code === 'permission-denied') return '需要麦克风权限：请在浏览器地址栏允许麦克风后重试。'
  if (code === 'network' || code === 'service-not-allowed') return '语音服务当前不可用，请检查网络后重试。'
  if (code === 'audio-capture') return '没有检测到麦克风设备，请检查麦克风连接。'
  return `语音识别出错：${code}`
}

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
    // 语音识别在浏览器里走在线服务，离线时 start 只会得到一个含糊的 network 错误，先直接提示
    if (typeof navigator !== 'undefined' && navigator.onLine === false) {
      setError('当前离线，语音识别需要联网才能使用，请检查网络。')
      return
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
      setError(describeSpeechError(event.error))
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
