// 与 scripts/generateAlgorithmData.mjs 里的挖空词表保持同一套术语来源。
const TECH_TERMS = [
  '快慢指针', '双指针', '滑动窗口', '单调栈', '单调队列', '前缀和', '差分数组', '哈希表', '并查集',
  '拓扑排序', '动态规划', '记忆化搜索', '状态压缩', '位运算', '摩尔投票', '二分查找', '快速幂',
  '分治', '归并排序', '快速排序', '三路快排', '桶排序', '计数排序', '基数排序', '堆排序',
  '大顶堆', '小顶堆', '优先队列', '反转链表', '环形链表', '虚拟头节点', 'dummy 节点', '哨兵节点',
  '层序遍历', '前序遍历', '中序遍历', '后序遍历', 'Morris 遍历', '深度优先搜索', '广度优先搜索',
  'DFS', 'BFS', 'Dijkstra', 'Bellman-Ford', 'Floyd', 'Kruskal', 'Prim', 'KMP', 'Manacher',
  '字典树', 'Trie', '线段树', '树状数组', '滚动数组', '01 背包', '完全背包', '状压 DP', '树形 DP',
  '区间 DP', '打表', '离散化', '异或前缀和', '接雨水', '回文子串', '最长递增子序列', '编辑距离',
  '原地哈希', '差分', '贪心', '回溯', '剪枝', '递归', '堆', '栈', '队列',
]

const techTermPattern = new RegExp(`${TECH_TERMS.join('|')}`, 'g')

export type HighlightSegment = { text: string; highlight: boolean }

export const splitByTechTerms = (text: string): HighlightSegment[] => {
  const segments: HighlightSegment[] = []
  let lastIndex = 0
  techTermPattern.lastIndex = 0
  for (const match of text.matchAll(techTermPattern)) {
    const start = match.index ?? 0
    if (start > lastIndex) segments.push({ text: text.slice(lastIndex, start), highlight: false })
    segments.push({ text: match[0], highlight: true })
    lastIndex = start + match[0].length
  }
  if (lastIndex < text.length) segments.push({ text: text.slice(lastIndex), highlight: false })
  return segments
}

export function HighlightText({ text }: { text: string }) {
  const segments = splitByTechTerms(text)
  return (
    <>
      {segments.map((segment, index) =>
        segment.highlight ? (
          <mark className="kw" key={index}>
            {segment.text}
          </mark>
        ) : (
          <span key={index}>{segment.text}</span>
        ),
      )}
    </>
  )
}
