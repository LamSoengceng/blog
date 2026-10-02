// 本文件由 scripts/generateAlgorithmData.mjs 自动生成，请勿手改。
import type { AlgorithmProblem } from '../types'

export const slidingWindowProblems: AlgorithmProblem[] = [
  {
    "id": "3",
    "slug": "3-无重复字符的最长子串",
    "title": "无重复字符的最长子串",
    "titleEn": "Longest Substring Without Repeating Characters",
    "category": "滑动窗口",
    "difficulty": "中等",
    "topic": "窗口伸缩 + 哈希记录",
    "completed": true,
    "leetcodeSlug": "longest-substring-without-repeating-characters",
    "leetcodeUrl": "https://leetcode.cn/problems/longest-substring-without-repeating-characters/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%97%A0%E9%87%8D%E5%A4%8D%E5%AD%97%E7%AC%A6%E7%9A%84%E6%9C%80%E9%95%BF%E5%AD%90%E4%B8%B2",
    "acceptanceRate": 42.9,
    "solutionCount": 20405,
    "companyTagCount": 320,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "滑动窗口",
      "窗口伸缩 + 哈希记录",
      "哈希表",
      "字符串"
    ],
    "sourcePath": "hot100/03_滑动窗口/3.无重复字符的最长子串.py",
    "lastUpdated": "2026-06-01",
    "lastUpdatedAt": "2026-06-01T15:19:25.241Z",
    "interviewPattern": "维护窗口内的计数和有效条件，右指针扩张，左指针只在条件满足或失效时收缩。",
    "thoughts": [
      "需二刷：经典滑动窗口（求最长子串）",
      "时间 O(N)，其中 N 是 s 的长度。",
      "空间 O(C)，C 为字符集大小（ASCII 码最多 128/256 个）。"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：经典＿＿＿（求最长子串）",
        "answer": "滑动窗口"
      }
    ],
    "solutionGuide": {
      "idea": "需二刷：经典滑动窗口（求最长子串）",
      "interviewSteps": [
        "先说明核心考点：窗口伸缩 + 哈希记录。",
        "维护窗口内的计数和有效条件，右指针扩张，左指针只在条件满足或失效时收缩。",
        "关键词：滑动窗口 / 窗口伸缩 + 哈希记录 / 哈希表 / 字符串。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    },
    "codePreview": "class Solution(object):\n    def lengthOfLongestSubstring(self, s):\n        \"\"\"\n        :type s: str\n        :rtype: int\n        \"\"\"\n        # 📌 需二刷：经典滑动窗口（求最长子串）\n        #\n        # 思路：这道题找的是“最长”的无重复子串，不需要固定窗口大小。\n        # 只要新加入的字符 c 导致了窗口内出现了重复（window[c] > 1），\n        # 就不断移动 left 缩小窗口，直到把重复的那个字符移出去为止。\n        # 当窗口内再次没有重复字符时，更新最大长度。\n        # 时间 O(N)，其中 N 是 s 的长度。\n        # 空间 O(C)，C 为字符集大小（ASCII 码最多 128/256 个）。\n        #\n        # ⚠️ 易错点/误区：\n        # 1. 更新最大长度的位置：result = max(...) 必须放在内层 while 循环结束之后。因为只有在剔除重复字符后，当前窗口内的子串才是合法的“无重复”子串。\n        # 2. 收缩条件：这道题不需要像 567 题那样判断 right - left 的长度，而是直接用 window[c] > 1 作为收缩条件，直击要害。\n        left = 0\n        right = 0\n        result = 0\n        window = {}\n        while right < len(s):\n            c = s[right]  # 即将移入窗口的字符\n            right += 1    # 右移窗口\n            window[c] = window.get(c, 0) + 1\n            # 判断左侧窗口是否要收缩（如果移入 c 后导致了重复）\n            while window[c] > 1:\n                d = s[left]  # 即将移出窗口的字符\n                left += 1    # 左移窗口\n                window[d] = window.get(d, 0) - 1\n            # 到这里，窗口内一定没有重复字符了，更新最长结果\n            result = max(result, right - left)\n        return result",
    "statement": "给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串 的长度。\n\n \n\n示例 1:\n\n输入: s = \"abcabcbb\"\n输出: 3 \n解释: 因为无重复字符的最长子串是 \"abc\"，所以其长度为 3。注意 \"bca\" 和 \"cab\" 也是正确答案。\n\n示例 2:\n\n输入: s = \"bbbbb\"\n输出: 1\n解释: 因为无重复字符的最长子串是 \"b\"，所以其长度为 1。\n\n示例 3:\n\n输入: s = \"pwwkew\"\n输出: 3\n解释: 因为无重复字符的最长子串是 \"wke\"，所以其长度为 3。\n     请注意，你的答案必须是 子串 的长度，\"pwke\" 是一个子序列，不是子串。\n\n \n\n提示：\n\n\t0 <= s.length <= 105\n\n\ts 由英文字母、数字、符号和空格组成"
  },
  {
    "id": "438",
    "slug": "438-找到字符串中所有字母异位词",
    "title": "找到字符串中所有字母异位词",
    "titleEn": "Find All Anagrams in a String",
    "category": "滑动窗口",
    "difficulty": "中等",
    "topic": "固定窗口 + 计数器",
    "completed": true,
    "leetcodeSlug": "find-all-anagrams-in-a-string",
    "leetcodeUrl": "https://leetcode.cn/problems/find-all-anagrams-in-a-string/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%89%BE%E5%88%B0%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E6%89%80%E6%9C%89%E5%AD%97%E6%AF%8D%E5%BC%82%E4%BD%8D%E8%AF%8D",
    "acceptanceRate": 54.6,
    "solutionCount": 4458,
    "companyTagCount": 55,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "滑动窗口",
      "固定窗口 + 计数器",
      "哈希表",
      "字符串"
    ],
    "sourcePath": "hot100/03_滑动窗口/438.找到字符串中所有字母异位词.py",
    "lastUpdated": "2026-06-01",
    "lastUpdatedAt": "2026-06-01T15:10:26.505Z",
    "interviewPattern": "维护窗口内的计数和有效条件，右指针扩张，左指针只在条件满足或失效时收缩。",
    "thoughts": [
      "需二刷：滑动窗口寻找所有固定长度的子串（异位词/排列）",
      "时间 O(N + M)，其中 N 是 s 的长度，M 是 p 的长度。",
      "空间 O(C)，C 为字符集大小，本题最多 26 个字母。"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：＿＿＿寻找所有固定长度的子串（异位词/排列）",
        "answer": "滑动窗口"
      }
    ],
    "solutionGuide": {
      "idea": "需二刷：滑动窗口寻找所有固定长度的子串（异位词/排列）",
      "interviewSteps": [
        "先说明核心考点：固定窗口 + 计数器。",
        "维护窗口内的计数和有效条件，右指针扩张，左指针只在条件满足或失效时收缩。",
        "关键词：滑动窗口 / 固定窗口 + 计数器 / 哈希表 / 字符串。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    },
    "codePreview": "class Solution(object):\n    def findAnagrams(self, s, p):\n        \"\"\"\n        :type s: str\n        :type p: str\n        :rtype: List[int]\n        \"\"\"\n        # 📌 需二刷：滑动窗口寻找所有固定长度的子串（异位词/排列）\n        #\n        # 思路：异位词本质上就是字符串的排列。这道题和 567 题（字符串的排列）逻辑完全一致。\n        # 区别仅仅在于：567 题找到一个就 return True，本题需要把所有找到的起始索引 left 存入结果数组中。\n        # 时间 O(N + M)，其中 N 是 s 的长度，M 是 p 的长度。\n        # 空间 O(C)，C 为字符集大小，本题最多 26 个字母。\n        #\n        # ⚠️ 易错点/误区：\n        # 1. 结果收集的位置：必须在窗口大小达到 p 的长度时进行判断，且记录的索引是当前的 left。\n        # 2. window 收缩条件：依然是 right - left >= len(p)，保证窗口长度严格等于 p 的长度。\n        need = {}\n        window = {}\n        for c in p:\n            need[c] = need.get(c, 0) + 1\n        left = 0\n        right = 0\n        valid = 0\n        result = []\n        while right < len(s):\n            c = s[right]  # 即将移入窗口的字符\n            right += 1    # 右移窗口\n            # 窗口内数据的一系列更新\n            if c in need:\n                window[c] = window.get(c, 0) + 1\n                if window[c] == need[c]:\n                    valid += 1\n            # 判断左侧窗口是否要收缩 (异位词长度必须等于 p 的长度)\n            while right - left >= len(p):\n                # 找到一个合法的异位词，将起始索引 left 加入结果集\n                if valid == len(need):\n                    result.append(left)\n                d = s[left]  # 即将移出窗口的字符\n                left += 1    # 左移窗口\n                # 窗口内数据的一系列更新\n                if d in need:\n                    if window[d] == need[d]:\n                        valid -= 1\n                    window[d] -= 1\n        return result",
    "statement": "给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。\n\n \n\n示例 1:\n\n输入: s = \"cbaebabacd\", p = \"abc\"\n输出: [0,6]\n解释:\n起始索引等于 0 的子串是 \"cba\", 它是 \"abc\" 的异位词。\n起始索引等于 6 的子串是 \"bac\", 它是 \"abc\" 的异位词。\n\n 示例 2:\n\n输入: s = \"abab\", p = \"ab\"\n输出: [0,1,2]\n解释:\n起始索引等于 0 的子串是 \"ab\", 它是 \"ab\" 的异位词。\n起始索引等于 1 的子串是 \"ba\", 它是 \"ab\" 的异位词。\n起始索引等于 2 的子串是 \"ab\", 它是 \"ab\" 的异位词。\n\n \n\n提示:\n\n\t1 <= s.length, p.length <= 3 * 104\n\n\ts 和 p 仅包含小写字母"
  },
  {
    "id": "239",
    "slug": "239-滑动窗口最大值",
    "title": "滑动窗口最大值",
    "titleEn": "Sliding Window Maximum",
    "category": "滑动窗口",
    "difficulty": "困难",
    "topic": "单调队列",
    "completed": true,
    "leetcodeSlug": "sliding-window-maximum",
    "leetcodeUrl": "https://leetcode.cn/problems/sliding-window-maximum/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3%E6%9C%80%E5%A4%A7%E5%80%BC",
    "acceptanceRate": 50.3,
    "solutionCount": 5417,
    "companyTagCount": 113,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "滑动窗口",
      "单调队列",
      "队列",
      "数组",
      "堆（优先队列）",
      "区间最值查询"
    ],
    "sourcePath": "hot100/04_子串/239.滑动窗口最大值.py",
    "lastUpdated": "2026-08-19",
    "lastUpdatedAt": "2026-08-19T18:08:57.927Z",
    "interviewPattern": "维护窗口内的计数和有效条件，右指针扩张，左指针只在条件满足或失效时收缩。",
    "thoughts": [
      "需二刷：单调队列核心题型，与 84/739 单调栈是镜像概念",
      "时间 O(n)，空间 O(k)"
    ],
    "pitfalls": [
      "1. 队列必须存「下标」而非「值」，否则无法判断元素是否滑出窗口过期",
      "2. 过期边界是 queue[0] < i - k + 1，不是 i - k",
      "窗口 [i-k+1, i] 共 k 个元素，i - k 就是左边界的前一格，是 off-by-one 高频坑",
      "3. 必须用 collections.deque，不能用 list：",
      "4. 操作顺序不能乱：先清队尾 → 入队 → 清过期队首 → 输出",
      "3. 过期清理：队首下标滑出窗口左边界则弹出"
    ],
    "recallBlanks": [
      {
        "prompt": "1. ＿＿＿必须存「下标」而非「值」，否则无法判断元素是否滑出窗口过期",
        "answer": "队列"
      },
      {
        "prompt": "需二刷：＿＿＿核心题型，与 84/739 ＿＿＿是镜像概念",
        "answer": "单调队列"
      }
    ],
    "solutionGuide": {
      "idea": "需二刷：单调队列核心题型，与 84/739 单调栈是镜像概念",
      "interviewSteps": [
        "先说明核心考点：单调队列。",
        "维护窗口内的计数和有效条件，右指针扩张，左指针只在条件满足或失效时收缩。",
        "关键词：滑动窗口 / 单调队列 / 队列 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 队列必须存「下标」而非「值」，否则无法判断元素是否滑出窗口过期"
    },
    "codePreview": "# 📌 需二刷：单调队列核心题型，与 84/739 单调栈是镜像概念\n#\n# 思路：维护一个存「下标」的递减 deque，队首始终是当前窗口最大值的下标\n# 时间 O(n)，空间 O(k)\n#\n# ⚠️ 易错点/误区：\n# 1. 队列必须存「下标」而非「值」，否则无法判断元素是否滑出窗口过期\n#    （同值可能重复出现，也可能值相等但一个在窗内一个在窗外）\n# 2. 过期边界是 queue[0] < i - k + 1，不是 i - k\n#    窗口 [i-k+1, i] 共 k 个元素，i - k 就是左边界的前一格，是 off-by-one 高频坑\n# 3. 必须用 collections.deque，不能用 list：\n#    list.pop(0) 是 O(n)，整体退化成 O(n²)；deque.popleft() 是 O(1)\n# 4. 操作顺序不能乱：先清队尾 → 入队 → 清过期队首 → 输出\n#    如果入队在清队尾之前，你刚加进去的元素会被自己的 while 循环误伤\n# 5. 只有当 i >= k - 1 时才输出，也就是窗口第一次「装满」k 个元素之后\n#    装不满就输出会得到非窗口的脏数据\nfrom collections import deque\nclass Solution:\n    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:\n        n = len(nums)\n        queue = deque()                       # 递减队列，存的是下标；nums[queue] 递减\n        res = [0] * (n - k + 1)                # 滑 n-k+1 次窗口，共这么多答案\n        idx = 0                                # res 的写入指针\n        for i in range(n):\n            # 1. 入队前清理：弹出队尾所有比 nums[i] 小的候选\n            #    它们比 nums[i] 小、又比 i 早出窗，永远不可能再成为未来任何窗口的 max\n            while queue and nums[queue[-1]] < nums[i]:\n                queue.pop()\n            # 2. 当前下标入队；清完队尾后入队，保证队列仍然递减\n            queue.append(i)\n            # 3. 过期清理：队首下标滑出窗口左边界则弹出\n            #    因为入队时下标天然递增，过期元素只会出现在队首，不用检查后面\n            if queue[0] < i - k + 1:\n                queue.popleft()\n            # 4. 窗口装满 k 个元素后，队首就是当前窗口最大值\n            if i >= k - 1:\n                res[idx] = nums[queue[0]]\n                idx += 1\n        return res",
    "statement": "给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。\n\n返回 滑动窗口中的最大值 。\n\n \n\n示例 1：\n\n输入：nums = [1,3,-1,-3,5,3,6,7], k = 3\n输出：[3,3,5,5,6,7]\n解释：\n滑动窗口的位置                最大值\n---------------               -----\n[1  3  -1] -3  5  3  6  7       3\n 1 [3  -1  -3] 5  3  6  7       3\n 1  3 [-1  -3  5] 3  6  7       5\n 1  3  -1 [-3  5  3] 6  7       5\n 1  3  -1  -3 [5  3  6] 7       6\n 1  3  -1  -3  5 [3  6  7]      7\n\n示例 2：\n\n输入：nums = [1], k = 1\n输出：[1]\n\n \n\n提示：\n\n\t1 <= nums.length <= 105\n\n\t-104 <= nums[i] <= 104\n\n\t1 <= k <= nums.length"
  }
]
