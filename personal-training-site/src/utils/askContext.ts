// Ask 多轮对话的上下文裁剪：模型只收到最近 maxTurns 轮（组），UI 仍保留全部历史。
// 长会话里旧轮次会持续占用 token 直到顶爆上下文窗口，而且其中的检索块早已过时；
// 裁剪后系统提示 + 最近几轮 + 本轮检索块始终在窗口内。
export const DEFAULT_MAX_ASK_TURNS = 8

export type AskMessage = { role: 'user' | 'assistant'; content: string }

// 返回发送给模型的 messages（system 在最前，后接最近 maxTurns 轮的对话）。
// 裁剪从 user 消息开始，保证不会把半组（assistant 开头）送出去。
export const buildRequestMessages = (
  history: AskMessage[],
  system: string,
  maxTurns = DEFAULT_MAX_ASK_TURNS,
): { role: string; content: string }[] => {
  let start = Math.max(0, history.length - maxTurns * 2)
  if (history[start]?.role === 'assistant') start += 1
  return [
    { role: 'system', content: system },
    ...history.slice(start).map(({ role, content }) => ({ role, content })),
  ]
}
