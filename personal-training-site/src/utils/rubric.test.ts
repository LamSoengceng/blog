import { describe, expect, it } from 'vitest'
import { parseRubric } from './rubric'

const FULL = `✓ 讲对了：快慢指针找中点的思路正确，反转后半段的说法也没问题
⚠️ 错与漏：没提奇偶长度两种情况的收尾处理
🔍 深度判定：属于讲到了机制——说清了"为什么反转后可以逐个比对"
🎤 面试官追问：如果要求保留原链表结构怎么办？
💡 一句话版本：找中点、反转一半、逐个对值。
费曼得分：4/5`

describe('parseRubric', () => {
  it('完整评语拆成五个块并提取得分', () => {
    const { blocks, score } = parseRubric(FULL)
    expect(score).toBe(4)
    expect(blocks.map((block) => block.key)).toEqual(['correct', 'gaps', 'depth', 'followup', 'oneliner'])
    expect(blocks[0].body).toBe('快慢指针找中点的思路正确，反转后半段的说法也没问题')
    expect(blocks[3].body).toBe('如果要求保留原链表结构怎么办？')
    expect(blocks[4].body).toBe('找中点、反转一半、逐个对值。')
  })

  it('流式半截文本：最后一节不完整也能解析，未完成的得分行不进正文', () => {
    const { blocks, score } = parseRubric(`✓ 讲对了：思路对
🔍 深度判定：还停在表面
🎤 面试官追问：为什么
💡 一句话版本：
费曼得分：`)
    expect(score).toBeNull()
    expect(blocks).toHaveLength(4)
    expect(blocks[3].body).toBe('')
  })

  it('多行正文归入所属块，无标记引言进 raw 块', () => {
    const { blocks } = parseRubric(`先总体说一下：
✓ 讲对了：方向正确
细节补充：
- 反转要用临时变量
- 中点要区分奇偶`)
    expect(blocks[0].key).toBe('raw')
    expect(blocks[0].body).toContain('先总体说一下：')
    expect(blocks[1].key).toBe('correct')
    expect(blocks[1].body).toContain('细节补充：')
    expect(blocks[1].body).toContain('- 中点要区分奇偶')
  })

  it('完全无标记的自由格式评语：整段进 raw 块，内联得分照提且不重复进正文', () => {
    const legacy = '整体讲得不错，但边界情况漏了。费曼得分：3/5'
    const { blocks, score } = parseRubric(legacy)
    expect(score).toBe(3)
    expect(blocks).toHaveLength(1)
    expect(blocks[0].key).toBe('raw')
    expect(blocks[0].body).toBe('整体讲得不错，但边界情况漏了。')
  })

  it('同一节标题重复出现时续写而不是另开块', () => {
    const { blocks } = parseRubric(`✓ 讲对了：中点找对了
✓ 讲对了：反转顺序也对`)
    expect(blocks.filter((block) => block.key === 'correct')).toHaveLength(1)
    expect(blocks[0].body).toContain('反转顺序也对')
  })

  it('空文本返回空块', () => {
    expect(parseRubric('')).toEqual({ blocks: [], score: null })
  })
})
