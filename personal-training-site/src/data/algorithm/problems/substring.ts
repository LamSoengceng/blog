// 本文件由 scripts/generateAlgorithmData.mjs 自动生成，请勿手改。
import type { AlgorithmProblem } from '../types'

export const substringProblems: AlgorithmProblem[] = [
  {
    "id": "560",
    "slug": "560-和为-k-的子数组",
    "title": "和为 K 的子数组",
    "titleEn": "Subarray Sum Equals K",
    "category": "子串",
    "difficulty": "中等",
    "topic": "前缀和 + 哈希表",
    "completed": true,
    "leetcodeSlug": "subarray-sum-equals-k",
    "leetcodeUrl": "https://leetcode.cn/problems/subarray-sum-equals-k/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%92%8C%E4%B8%BA%20K%20%E7%9A%84%E5%AD%90%E6%95%B0%E7%BB%84",
    "acceptanceRate": 46.9,
    "solutionCount": 3783,
    "companyTagCount": 100,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "子串",
      "前缀和 + 哈希表",
      "数组",
      "哈希表",
      "前缀和"
    ],
    "sourcePath": "hot100/04_子串/560.和为-k-的子数组.py",
    "lastUpdated": "2026-04-02",
    "lastUpdatedAt": "2026-04-02T07:06:05.956Z",
    "interviewPattern": "核心是频次表和窗口有效性，面试中要把 need/window、valid 或 missing 变量说清楚。",
    "thoughts": [
      "需二刷：前缀和 + 哈希表",
      "时间 O(n)，空间 O(n)",
      "1. 哈希表必须初始化 {0: 1}，代表空前缀（前缀和为0出现1次），",
      "2. 哈希表存的是「前缀和出现的次数」，不是 count"
    ],
    "pitfalls": [
      "否则会漏掉从下标0开始、和刚好等于k的子数组",
      "3. 必须先查找再记录（顺序不能反），否则当 k0 时会把自己算进去"
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：＿＿＿ + ＿＿＿",
        "answer": "前缀和"
      },
      {
        "prompt": "1. ＿＿＿必须初始化 {0: 1}，代表空前缀（＿＿＿为0出现1次），",
        "answer": "哈希表"
      }
    ],
    "solutionGuide": {
      "idea": "需二刷：前缀和 + 哈希表",
      "interviewSteps": [
        "先说明核心考点：前缀和 + 哈希表。",
        "核心是频次表和窗口有效性，面试中要把 need/window、valid 或 missing 变量说清楚。",
        "关键词：子串 / 前缀和 + 哈希表 / 数组 / 哈希表。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "否则会漏掉从下标0开始、和刚好等于k的子数组"
    },
    "codePreview": "from collections import defaultdict\nclass Solution:\n    # 📌 需二刷：前缀和 + 哈希表\n    #\n    # 思路：prefix[j] - prefix[i-1] = k → 找之前有多少个前缀和等于 prefix_sum - k\n    # 时间 O(n)，空间 O(n)\n    #\n    # ⚠️ 易错点/误区：\n    # 1. 哈希表必须初始化 {0: 1}，代表空前缀（前缀和为0出现1次），\n    #    否则会漏掉从下标0开始、和刚好等于k的子数组\n    # 2. 哈希表存的是「前缀和出现的次数」，不是 count\n    # 3. 必须先查找再记录（顺序不能反），否则当 k=0 时会把自己算进去\n    def subarraySum(self, nums: List[int], k: int) -> int:\n        prefix_count = defaultdict(int)  # key: 前缀和, value: 出现次数\n        prefix_count[0] = 1             # 空前缀：和为0出现1次\n        prefix_sum = 0\n        count = 0\n        for num in nums:\n            prefix_sum += num                              # 累加当前前缀和\n            count += prefix_count[prefix_sum - k]          # 查：之前有几个前缀和 = prefix_sum - k\n            prefix_count[prefix_sum] += 1                  # 记：当前前缀和出现次数+1\n        return count",
    "statement": "给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。\n\n子数组是数组中元素的连续非空序列。\n\n \n\n示例 1：\n\n输入：nums = [1,1,1], k = 2\n输出：2\n\n示例 2：\n\n输入：nums = [1,2,3], k = 3\n输出：2\n\n \n\n提示：\n\n\t1 <= nums.length <= 2 * 104\n\n\t-1000 <= nums[i] <= 1000\n\n\t-107 <= k <= 107"
  },
  {
    "id": "76",
    "slug": "76-最小覆盖子串",
    "title": "最小覆盖子串",
    "titleEn": "Minimum Window Substring",
    "category": "子串",
    "difficulty": "困难",
    "topic": "滑动窗口 + 频次统计",
    "completed": true,
    "leetcodeSlug": "minimum-window-substring",
    "leetcodeUrl": "https://leetcode.cn/problems/minimum-window-substring/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%9C%80%E5%B0%8F%E8%A6%86%E7%9B%96%E5%AD%90%E4%B8%B2",
    "acceptanceRate": 49.6,
    "solutionCount": 5704,
    "companyTagCount": 89,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "子串",
      "滑动窗口 + 频次统计",
      "哈希表",
      "字符串",
      "滑动窗口"
    ],
    "sourcePath": "hot100/04_子串/76.最小覆盖子串.py",
    "lastUpdated": "2026-06-01",
    "lastUpdatedAt": "2026-06-01T12:40:05.533Z",
    "interviewPattern": "核心是频次表和窗口有效性，面试中要把 need/window、valid 或 missing 变量说清楚。",
    "thoughts": [
      "需二刷：[滑动窗口经典套路，寻找最小覆盖子串]",
      "时间 O(N)，空间 O(C) (C为字符集大小)"
    ],
    "pitfalls": [
      "注意这里的返回值是 \"\" 而不是 \" \""
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：[＿＿＿经典套路，寻找最小覆盖子串]",
        "answer": "滑动窗口"
      }
    ],
    "solutionGuide": {
      "idea": "需二刷：[滑动窗口经典套路，寻找最小覆盖子串]",
      "interviewSteps": [
        "先说明核心考点：滑动窗口 + 频次统计。",
        "核心是频次表和窗口有效性，面试中要把 need/window、valid 或 missing 变量说清楚。",
        "关键词：子串 / 滑动窗口 + 频次统计 / 哈希表 / 字符串。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "注意这里的返回值是 \"\" 而不是 \" \""
    },
    "codePreview": "class Solution(object):\n    def minWindow(self, s, t):\n        \"\"\"\n        :type s: str\n        :type t: str\n        :rtype: str\n        \"\"\"\n        # 📌 需二刷：[滑动窗口经典套路，寻找最小覆盖子串]\n        #\n        # 思路：用 right 指针不断向右移动扩大窗口，直到窗口包含了 t 中所有字符。\n        #       然后用 left 指针向右移动缩小窗口，尽力找到更短的符合条件的子串。\n        # 时间 O(N)，空间 O(C) (C为字符集大小)\n        #\n        # ⚠️ 易错点/误区：\n        # 1. 找不到符合条件的子串时，题目要求返回空字符串 `\"\"`，而不是包含空格的 `\" \"`。\n        # 2. 窗口长度计算：此时 right 已经 += 1，所以窗口长度就是 right - left，不需要加一。\n        need, window = {}, {}\n        for c in t:\n            need[c] = need.get(c, 0) + 1\n        left = 0\n        right = 0 \n        valid = 0   # 记录窗口中已经满足 need 要求的字符种类数\n        start = 0   # 记录最小覆盖子串的起始位置\n        length = float('inf') # 记录最小覆盖子串的长度\n        while right < len(s):\n            # c 是将移入窗口的字符\n            c = s[right]\n            right += 1\n            # 进行窗口内数据的一系列更新\n            if c in need:\n                window[c] = window.get(c, 0) + 1\n                if window[c] == need[c]:\n                    valid += 1\n            # 判断左侧窗口是否要收缩 (当窗口涵盖了 t 中所有字符时)\n            while valid == len(need):\n                # 在这里更新最小覆盖子串\n                if right - left < length:\n                    start = left\n                    length = right - left\n                # d 是将移出窗口的字符\n                d = s[left]\n                left += 1\n                # 进行窗口内数据的一系列更新\n                if d in need:\n                    if window[d] == need[d]:\n                        valid -= 1\n                    window[d] -= 1\n        # 注意这里的返回值是 \"\" 而不是 \" \"\n        return \"\" if length == float('inf') else s[start: start + length]",
    "statement": "给定两个字符串 s 和 t，长度分别是 m 和 n，返回 s 中的 最短窗口 子串，使得该子串包含 t 中的每一个字符（包括重复字符）。如果没有这样的子串，返回空字符串 \"\"。\n\n测试用例保证答案唯一。\n\n \n\n示例 1：\n\n输入：s = \"ADOBECODEBANC\", t = \"ABC\"\n输出：\"BANC\"\n解释：最小覆盖子串 \"BANC\" 包含来自字符串 t 的 'A'、'B' 和 'C'。\n\n示例 2：\n\n输入：s = \"a\", t = \"a\"\n输出：\"a\"\n解释：整个字符串 s 是最小覆盖子串。\n\n示例 3:\n\n输入: s = \"a\", t = \"aa\"\n输出: \"\"\n解释: t 中两个字符 'a' 均应包含在 s 的子串中，\n因此没有符合条件的子字符串，返回空字符串。\n\n \n\n提示：\n\n\tm == s.length\n\n\tn == t.length\n\n\t1 <= m, n <= 105\n\n\ts 和 t 由英文字母组成\n\n \n\n进阶：你能设计一个在 O(m + n) 时间内解决此问题的算法吗？"
  },
  {
    "id": "239",
    "slug": "239-滑动窗口最大值",
    "title": "滑动窗口最大值",
    "titleEn": "Sliding Window Maximum",
    "category": "子串",
    "difficulty": "困难",
    "topic": "（同上，已在上方列出）",
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
      "子串",
      "（同上，已在上方列出）",
      "队列",
      "数组",
      "滑动窗口",
      "单调队列",
      "堆（优先队列）",
      "区间最值查询"
    ],
    "sourcePath": "hot100/04_子串/239.滑动窗口最大值.py",
    "lastUpdated": "2026-08-19",
    "lastUpdatedAt": "2026-08-19T18:08:57.927Z",
    "interviewPattern": "核心是频次表和窗口有效性，面试中要把 need/window、valid 或 missing 变量说清楚。",
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
        "先说明核心考点：（同上，已在上方列出）。",
        "核心是频次表和窗口有效性，面试中要把 need/window、valid 或 missing 变量说清楚。",
        "关键词：子串 / （同上，已在上方列出） / 队列 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 队列必须存「下标」而非「值」，否则无法判断元素是否滑出窗口过期"
    },
    "codePreview": "# 📌 需二刷：单调队列核心题型，与 84/739 单调栈是镜像概念\n#\n# 思路：维护一个存「下标」的递减 deque，队首始终是当前窗口最大值的下标\n# 时间 O(n)，空间 O(k)\n#\n# ⚠️ 易错点/误区：\n# 1. 队列必须存「下标」而非「值」，否则无法判断元素是否滑出窗口过期\n#    （同值可能重复出现，也可能值相等但一个在窗内一个在窗外）\n# 2. 过期边界是 queue[0] < i - k + 1，不是 i - k\n#    窗口 [i-k+1, i] 共 k 个元素，i - k 就是左边界的前一格，是 off-by-one 高频坑\n# 3. 必须用 collections.deque，不能用 list：\n#    list.pop(0) 是 O(n)，整体退化成 O(n²)；deque.popleft() 是 O(1)\n# 4. 操作顺序不能乱：先清队尾 → 入队 → 清过期队首 → 输出\n#    如果入队在清队尾之前，你刚加进去的元素会被自己的 while 循环误伤\n# 5. 只有当 i >= k - 1 时才输出，也就是窗口第一次「装满」k 个元素之后\n#    装不满就输出会得到非窗口的脏数据\nfrom collections import deque\nclass Solution:\n    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:\n        n = len(nums)\n        queue = deque()                       # 递减队列，存的是下标；nums[queue] 递减\n        res = [0] * (n - k + 1)                # 滑 n-k+1 次窗口，共这么多答案\n        idx = 0                                # res 的写入指针\n        for i in range(n):\n            # 1. 入队前清理：弹出队尾所有比 nums[i] 小的候选\n            #    它们比 nums[i] 小、又比 i 早出窗，永远不可能再成为未来任何窗口的 max\n            while queue and nums[queue[-1]] < nums[i]:\n                queue.pop()\n            # 2. 当前下标入队；清完队尾后入队，保证队列仍然递减\n            queue.append(i)\n            # 3. 过期清理：队首下标滑出窗口左边界则弹出\n            #    因为入队时下标天然递增，过期元素只会出现在队首，不用检查后面\n            if queue[0] < i - k + 1:\n                queue.popleft()\n            # 4. 窗口装满 k 个元素后，队首就是当前窗口最大值\n            if i >= k - 1:\n                res[idx] = nums[queue[0]]\n                idx += 1\n        return res",
    "statement": "给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。\n\n返回 滑动窗口中的最大值 。\n\n \n\n示例 1：\n\n输入：nums = [1,3,-1,-3,5,3,6,7], k = 3\n输出：[3,3,5,5,6,7]\n解释：\n滑动窗口的位置                最大值\n---------------               -----\n[1  3  -1] -3  5  3  6  7       3\n 1 [3  -1  -3] 5  3  6  7       3\n 1  3 [-1  -3  5] 3  6  7       5\n 1  3  -1 [-3  5  3] 6  7       5\n 1  3  -1  -3 [5  3  6] 7       6\n 1  3  -1  -3  5 [3  6  7]      7\n\n示例 2：\n\n输入：nums = [1], k = 1\n输出：[1]\n\n \n\n提示：\n\n\t1 <= nums.length <= 105\n\n\t-104 <= nums[i] <= 104\n\n\t1 <= k <= nums.length"
  }
]
