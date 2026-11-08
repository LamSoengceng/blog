// @vitest-environment jsdom
import { expect, it } from 'vitest'
import { describeSpeechError } from './speech'

it('把语音识别错误码翻译成用户能看懂的中文', () => {
  expect(describeSpeechError('not-allowed')).toContain('麦克风权限')
  expect(describeSpeechError('network')).toContain('语音服务当前不可用')
  expect(describeSpeechError('service-not-allowed')).toContain('语音服务当前不可用')
  expect(describeSpeechError('no-speech')).toContain('没听到内容')
  // 未知错误码保留原文，便于排查
  expect(describeSpeechError('some-future-code')).toContain('some-future-code')
})
