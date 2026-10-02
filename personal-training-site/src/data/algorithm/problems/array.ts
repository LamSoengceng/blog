// 本文件由 scripts/generateAlgorithmData.mjs 自动生成，请勿手改。
import type { AlgorithmProblem } from '../types'

export const arrayProblems: AlgorithmProblem[] = [
  {
    "id": "53",
    "slug": "53-最大子数组和",
    "title": "最大子数组和",
    "titleEn": "Maximum Subarray",
    "category": "普通数组",
    "difficulty": "中等",
    "topic": "贪心 / DP",
    "completed": true,
    "leetcodeSlug": "maximum-subarray",
    "leetcodeUrl": "https://leetcode.cn/problems/maximum-subarray/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%9C%80%E5%A4%A7%E5%AD%90%E6%95%B0%E7%BB%84%E5%92%8C",
    "acceptanceRate": 56.9,
    "solutionCount": 10155,
    "companyTagCount": 209,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "普通数组",
      "贪心 / DP",
      "数组",
      "分治",
      "动态规划"
    ],
    "sourcePath": "hot100/05_普通数组/53.最大子数组和.py",
    "lastUpdated": "2026-03-20",
    "lastUpdatedAt": "2026-03-20T09:22:34.855Z",
    "interviewPattern": "优先找一次遍历、前后缀、原地标记或排序后的结构性，避免暴力枚举。",
    "thoughts": [
      "需二刷：Kadane 算法（动态规划思想）",
      "时间 O(n)，空间 O(1)",
      "核心决策：加入之前的子数组 vs 从自己重新开始"
    ],
    "pitfalls": [
      "1. max_sum 不能初始化为 0，否则全负数数组（如 [-3,-2,-1]）会返回 0"
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：Kadane 算法（＿＿＿思想）",
        "answer": "动态规划"
      }
    ],
    "solutionGuide": {
      "idea": "需二刷：Kadane 算法（动态规划思想）",
      "interviewSteps": [
        "先说明核心考点：贪心 / DP。",
        "优先找一次遍历、前后缀、原地标记或排序后的结构性，避免暴力枚举。",
        "关键词：普通数组 / 贪心 / DP / 数组 / 分治。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. max_sum 不能初始化为 0，否则全负数数组（如 [-3,-2,-1]）会返回 0"
    },
    "codePreview": "# 📌 需二刷：Kadane 算法（动态规划思想）\n#\n# 思路：遍历数组，维护\"以当前元素结尾的最大子数组和\"(current_sum)\n#       每一步做决策：是把当前元素加入之前的子数组，还是从当前元素重新开始\n#       如果之前的累积和是负数 → 拖后腿 → 从当前元素重新开始\n#       同时用 max_sum 追踪全局最大值\n#\n# 时间 O(n)，空间 O(1)\n#\n# ⚠️ 易错点/误区：\n# 1. max_sum 不能初始化为 0，否则全负数数组（如 [-3,-2,-1]）会返回 0\n#    → 应该初始化为 nums[0] 或 float('-inf')\n# 2. max_sum = max(current_sum, num) 是错的！current_sum >= num 恒成立\n#    这样等于每次都覆盖，没有在追踪\"全局\"最大值\n#    → 应该是 max_sum = max(max_sum, current_sum)\nclass Solution:\n    # ✅ 面试推荐写法\n    def maxSubArray(self, nums: List[int]) -> int:\n        current_sum = nums[0]  # 以当前元素结尾的最大子数组和\n        max_sum = nums[0]      # 全局最大子数组和\n        for num in nums[1:]:   # 从第二个元素开始\n            # 核心决策：加入之前的子数组 vs 从自己重新开始\n            current_sum = max(num, current_sum + num)\n            # 更新全局最大值\n            max_sum = max(max_sum, current_sum)\n        return max_sum",
    "statement": "给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。\n\n子数组 是数组中的一个连续部分。\n\n \n\n示例 1：\n\n输入：nums = [-2,1,-3,4,-1,2,1,-5,4]\n输出：6\n解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。\n\n示例 2：\n\n输入：nums = [1]\n输出：1\n\n示例 3：\n\n输入：nums = [5,4,-1,7,8]\n输出：23\n\n \n\n提示：\n\n\t1 <= nums.length <= 105\n\n\t-104 <= nums[i] <= 104\n\n \n\n进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。"
  },
  {
    "id": "56",
    "slug": "56-合并区间",
    "title": "合并区间",
    "titleEn": "Merge Intervals",
    "category": "普通数组",
    "difficulty": "中等",
    "topic": "排序 + 合并",
    "completed": true,
    "leetcodeSlug": "merge-intervals",
    "leetcodeUrl": "https://leetcode.cn/problems/merge-intervals/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%90%88%E5%B9%B6%E5%8C%BA%E9%97%B4",
    "acceptanceRate": 54.1,
    "solutionCount": 6834,
    "companyTagCount": 176,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "普通数组",
      "排序 + 合并",
      "数组",
      "排序",
      "快速排序"
    ],
    "sourcePath": "hot100/05_普通数组/56.合并区间.py",
    "lastUpdated": "2026-03-23",
    "lastUpdatedAt": "2026-03-23T12:59:37.793Z",
    "interviewPattern": "优先找一次遍历、前后缀、原地标记或排序后的结构性，避免暴力枚举。",
    "thoughts": [
      "时间 O(nlogn)，空间 O(n)"
    ],
    "pitfalls": [
      "和 result 最后一个区间比较，有重叠就合并（更新 end），否则直接加入",
      "2. 合并时 end 要取 max，不能直接赋值（如 [1,6] 和 [2,4]，end 应该是 6 不是 4）",
      "4. 用 result[-1] 获取最后一个区间，不能用 result[i-1]（result 和 intervals 长度不同）",
      "5. if/elif/else 三个分支只走一个，不能用连续的 if 导致重复处理"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "时间 O(nlogn)，空间 O(n)",
      "interviewSteps": [
        "先说明核心考点：排序 + 合并。",
        "优先找一次遍历、前后缀、原地标记或排序后的结构性，避免暴力枚举。",
        "关键词：普通数组 / 排序 + 合并 / 数组 / 排序。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "和 result 最后一个区间比较，有重叠就合并（更新 end），否则直接加入"
    },
    "codePreview": "# 📌 需二刷：排序 + 贪心合并\n#\n# 思路：先按区间起点排序，然后遍历每个区间，\n#       和 result 最后一个区间比较，有重叠就合并（更新 end），否则直接加入\n# 时间 O(nlogn)，空间 O(n)\n#\n# ⚠️ 易错点/误区：\n# 1. sort() 要加括号！.sort 只是引用方法，不会执行排序\n# 2. 合并时 end 要取 max，不能直接赋值（如 [1,6] 和 [2,4]，end 应该是 6 不是 4）\n# 3. 判断重叠用 <=（相等也算重叠，如 [1,3] 和 [3,5]）\n# 4. 用 result[-1] 获取最后一个区间，不能用 result[i-1]（result 和 intervals 长度不同）\n# 5. if/elif/else 三个分支只走一个，不能用连续的 if 导致重复处理\nclass Solution:\n    def merge(self, intervals: List[List[int]]) -> List[List[int]]:\n        result = []\n        intervals.sort()  # 按区间起点升序排序\n        for i in range(0, len(intervals)):\n            if not result:\n                # result 为空，直接放入第一个区间\n                result.append(intervals[i])\n            elif intervals[i][0] <= result[-1][1]:\n                # 有重叠：当前区间起点 <= result 最后区间的终点\n                # 合并：更新终点为两者的较大值\n                result[-1][1] = max(result[-1][1], intervals[i][1])\n            else:\n                # 无重叠：直接加入 result\n                result.append(intervals[i])\n        return result\n# ————————————————————————————————————\n# ✅ 面试推荐写法（更简洁，逻辑一样）：\n#\n# def merge(self, intervals):\n#     intervals.sort()\n#     result = []\n#     for interval in intervals:\n#         # 如果 result 为空 或 无重叠，直接加入\n#         if not result or interval[0] > result[-1][1]:\n#             result.append(interval)\n#         else:\n#             # 有重叠，合并\n#             result[-1][1] = max(result[-1][1], interval[1])\n#     return result\n#\n# 👆 推荐原因：\n# - 用 for interval in intervals 代替 for i in range(...)，更 Pythonic\n# - 把 \"空\" 和 \"无重叠\" 合并成一个条件，减少分支\n# ————————————————————————————————————",
    "statement": "以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。\n\n \n\n示例 1：\n\n输入：intervals = [[1,3],[2,6],[8,10],[15,18]]\n输出：[[1,6],[8,10],[15,18]]\n解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].\n\n示例 2：\n\n输入：intervals = [[1,4],[4,5]]\n输出：[[1,5]]\n解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。\n\n示例 3：\n\n输入：intervals = [[4,7],[1,4]]\n输出：[[1,7]]\n解释：区间 [1,4] 和 [4,7] 可被视为重叠区间。\n\n \n\n提示：\n\n\t1 <= intervals.length <= 104\n\n\tintervals[i].length == 2\n\n\t0 <= starti <= endi <= 104"
  },
  {
    "id": "238",
    "slug": "238-除自身以外数组的乘积",
    "title": "除了自身以外数组的乘积",
    "titleEn": "Product of Array Except Self",
    "category": "普通数组",
    "difficulty": "中等",
    "topic": "前缀积 / 后缀积",
    "completed": true,
    "leetcodeSlug": "product-of-array-except-self",
    "leetcodeUrl": "https://leetcode.cn/problems/product-of-array-except-self/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E9%99%A4%E4%BA%86%E8%87%AA%E8%BA%AB%E4%BB%A5%E5%A4%96%E6%95%B0%E7%BB%84%E7%9A%84%E4%B9%98%E7%A7%AF",
    "acceptanceRate": 77.7,
    "solutionCount": 3924,
    "companyTagCount": 95,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "普通数组",
      "前缀积 / 后缀积",
      "数组",
      "前缀和"
    ],
    "sourcePath": "hot100/05_普通数组/238.除了自身以外数组的乘积.py",
    "lastUpdated": "2026-03-27",
    "lastUpdatedAt": "2026-03-27T08:13:52.777Z",
    "interviewPattern": "优先找一次遍历、前后缀、原地标记或排序后的结构性，避免暴力枚举。",
    "thoughts": [
      "时间 O(n)，空间 O(n)",
      "---------- 面试 follow-up：O(1) 额外空间优化版 ----------",
      "时间 O(n)，空间 O(1)（不算返回数组）"
    ],
    "pitfalls": [
      "2. right 数组要从右往左递推，range(n-2, -1, -1)，注意终点写 -1 才能包含下标 0"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "时间 O(n)，空间 O(n)",
      "interviewSteps": [
        "先说明核心考点：前缀积 / 后缀积。",
        "优先找一次遍历、前后缀、原地标记或排序后的结构性，避免暴力枚举。",
        "关键词：普通数组 / 前缀积 / 后缀积 / 数组 / 前缀和。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "2. right 数组要从右往左递推，range(n-2, -1, -1)，注意终点写 -1 才能包含下标 0"
    },
    "codePreview": "# 📌 需二刷：前缀积 × 后缀积\n#\n# 思路：answer[i] = i左边所有数的乘积 × i右边所有数的乘积\n# 时间 O(n)，空间 O(n)\n#\n# ⚠️ 易错点/误区：\n# 1. left[0] 和 right[n-1] 的初始值是 1（不是 0），因为\"没有元素\"的乘积是 1\n# 2. right 数组要从右往左递推，range(n-2, -1, -1)，注意终点写 -1 才能包含下标 0\n# 3. 递推公式：left[i] = left[i-1] * nums[i-1]（乘的是前一个元素，不是当前元素）\nclass Solution:\n    def productExceptSelf(self, nums: List[int]) -> List[int]:\n        n = len(nums)\n        # 前缀积：left[i] = nums[0] * nums[1] * ... * nums[i-1]\n        left = [0] * n\n        left[0] = 1  # 第0个元素左边没有数，乘积为1\n        for i in range(1, n):\n            left[i] = left[i - 1] * nums[i - 1]\n        # 后缀积：right[i] = nums[i+1] * nums[i+2] * ... * nums[n-1]\n        right = [0] * n\n        right[n - 1] = 1  # 最后一个元素右边没有数，乘积为1\n        for i in range(n - 2, -1, -1):\n            right[i] = right[i + 1] * nums[i + 1]\n        # 结果：左边乘积 × 右边乘积\n        answer = [0] * n\n        for i in range(n):\n            answer[i] = left[i] * right[i]\n        return answer\n# ---------- 面试 follow-up：O(1) 额外空间优化版 ----------\n# 思路：复用 answer 数组先存前缀积，再用一个变量累积后缀积，边算边乘\n# 时间 O(n)，空间 O(1)（不算返回数组）\nclass Solution2:\n    def productExceptSelf(self, nums: List[int]) -> List[int]:\n        n = len(nums)\n        answer = [1] * n\n        # 第一遍：从左到右，answer[i] 存 i 左边的前缀积\n        for i in range(1, n):\n            answer[i] = answer[i - 1] * nums[i - 1]\n        # 第二遍：从右到左，用变量累积后缀积，直接乘到 answer 上\n        right_product = 1\n        for i in range(n - 2, -1, -1):\n            right_product *= nums[i + 1]\n            answer[i] *= right_product\n        return answer",
    "statement": "给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除了 nums[i] 之外其余各元素的乘积 。\n\n题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。\n\n请 不要使用除法，且在 O(n) 时间复杂度内完成此题。\n\n \n\n示例 1:\n\n输入: nums = [1,2,3,4]\n输出: [24,12,8,6]\n\n示例 2:\n\n输入: nums = [-1,1,0,-3,3]\n输出: [0,0,9,0,0]\n\n \n\n提示：\n\n\t2 <= nums.length <= 105\n\n\t-30 <= nums[i] <= 30\n\n\t输入 保证 数组 answer[i] 在  32 位 整数范围内\n\n \n\n进阶：你可以在 O(1) 的额外空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组 不被视为 额外空间。）"
  },
  {
    "id": "41",
    "slug": "41-缺失的第一个正数",
    "title": "缺失的第一个正数",
    "titleEn": "First Missing Positive",
    "category": "普通数组",
    "difficulty": "困难",
    "topic": "原地哈希",
    "completed": true,
    "leetcodeSlug": "first-missing-positive",
    "leetcodeUrl": "https://leetcode.cn/problems/first-missing-positive/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E7%BC%BA%E5%A4%B1%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%AD%A3%E6%95%B0",
    "acceptanceRate": 49.8,
    "solutionCount": 3881,
    "companyTagCount": 110,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "普通数组",
      "原地哈希",
      "数组",
      "哈希表"
    ],
    "sourcePath": "hot100/05_普通数组/41.缺失的第一个正数.py",
    "lastUpdated": "2026-04-02",
    "lastUpdatedAt": "2026-04-02T09:02:39.200Z",
    "interviewPattern": "优先找一次遍历、前后缀、原地标记或排序后的结构性，避免暴力枚举。",
    "thoughts": [
      "需二刷：原地哈希 / 原地循环排序（Cyclic Sort）",
      "时间 O(n)，空间 O(1)",
      "🎯 面试推荐：原地循环排序（本解法）",
      "- 面试官考察重点：能否在 O(1) 空间内解决\"找缺失\"问题",
      "- 核心思想：数组本身当哈希表，下标 i 存放值 i+1"
    ],
    "pitfalls": [
      "2. while 循环条件中 nums[nums[i]-1] ! nums[i] 是防止死循环",
      "→ 如果目标位置已经有正确的值（说明有重复），必须停下来，否则无限交换",
      "3. 边界条件 1 < nums[i] < n：只处理 [1, n] 范围内的数"
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：＿＿＿ / 原地循环排序（Cyclic Sort）",
        "answer": "原地哈希"
      },
      {
        "prompt": "- 核心思想：数组本身当＿＿＿，下标 i 存放值 i+1",
        "answer": "哈希表"
      }
    ],
    "solutionGuide": {
      "idea": "需二刷：原地哈希 / 原地循环排序（Cyclic Sort）",
      "interviewSteps": [
        "先说明核心考点：原地哈希。",
        "优先找一次遍历、前后缀、原地标记或排序后的结构性，避免暴力枚举。",
        "关键词：普通数组 / 原地哈希 / 数组 / 哈希表。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "2. while 循环条件中 nums[nums[i]-1] ! nums[i] 是防止死循环"
    },
    "codePreview": "# 📌 需二刷：原地哈希 / 原地循环排序（Cyclic Sort）\n#\n# 思路：把每个数 x 放到下标 x-1 的位置上，然后扫一遍找第一个 nums[i] != i+1 的位置\n# 时间 O(n)，空间 O(1)\n#\n# 🎯 面试推荐：原地循环排序（本解法）\n#   - 面试官考察重点：能否在 O(1) 空间内解决\"找缺失\"问题\n#   - 核心思想：数组本身当哈希表，下标 i 存放值 i+1\n#   - 适用题型：找缺失/重复的正整数（41, 268, 287, 442, 448）\n#\n# ⚠️ 易错点/误区：\n# 1. 交换时赋值顺序：必须写 nums[nums[i]-1], nums[i] = nums[i], nums[nums[i]-1]\n#    而不是 nums[i], nums[nums[i]-1] = nums[nums[i]-1], nums[i]\n#    → Python 先算右边再赋值左边，左边从左到右赋值。如果先写 nums[i] = ...\n#      会导致 nums[i] 被改变后，nums[nums[i]-1] 就指向错误位置了\n# 2. while 循环条件中 nums[nums[i]-1] != nums[i] 是防止死循环\n#    → 如果目标位置已经有正确的值（说明有重复），必须停下来，否则无限交换\n# 3. 边界条件 1 <= nums[i] <= n：只处理 [1, n] 范围内的数\n#    → 负数、0、大于 n 的数不可能是答案（答案最大就是 n+1）\nclass Solution:\n    def firstMissingPositive(self, nums: List[int]) -> int:\n        n = len(nums)\n        # 第一步：原地循环排序，把每个数放到\"该去的位置\"\n        for i in range(n):\n            # 只要 nums[i] 在合法范围内，且还没放对位置，就交换\n            while 1 <= nums[i] <= n and nums[nums[i]-1] != nums[i]:\n                # 把 nums[i] 放到下标 nums[i]-1 处\n                nums[nums[i]-1], nums[i] = nums[i], nums[nums[i]-1]\n        # 第二步：扫描找到第一个没放对的位置\n        for i in range(n):\n            if nums[i] != i + 1:\n                return i + 1    # 下标 i 该放 i+1，但没放对 → i+1 缺失\n        return n + 1             # 1~n 全齐了，缺的是 n+1",
    "statement": "给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。\n\n请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。\n\n \n\n示例 1：\n\n输入：nums = [1,2,0]\n输出：3\n解释：范围 [1,2] 中的数字都在数组中。\n\n示例 2：\n\n输入：nums = [3,4,-1,1]\n输出：2\n解释：1 在数组中，但 2 没有。\n\n示例 3：\n\n输入：nums = [7,8,9,11,12]\n输出：1\n解释：最小的正数 1 没有出现。\n\n \n\n提示：\n\n\t1 <= nums.length <= 105\n\n\t-231 <= nums[i] <= 231 - 1"
  },
  {
    "id": "189",
    "slug": "189-轮转数组",
    "title": "轮转数组",
    "titleEn": "Rotate Array",
    "category": "普通数组",
    "difficulty": "中等",
    "topic": "三次翻转",
    "completed": true,
    "leetcodeSlug": "rotate-array",
    "leetcodeUrl": "https://leetcode.cn/problems/rotate-array/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E8%BD%AE%E8%BD%AC%E6%95%B0%E7%BB%84",
    "acceptanceRate": 48.6,
    "solutionCount": 6333,
    "companyTagCount": 92,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "普通数组",
      "三次翻转",
      "数组",
      "数学",
      "双指针"
    ],
    "sourcePath": "hot100/05_普通数组/189.轮转数组.py",
    "lastUpdated": "2026-08-21",
    "lastUpdatedAt": "2026-08-21T14:03:05.262Z",
    "interviewPattern": "优先找一次遍历、前后缀、原地标记或排序后的结构性，避免暴力枚举。",
    "thoughts": [
      "时间 O(n × k)，空间 O(1)",
      "时间 O(n)，空间 O(n)",
      "需二刷：O(1) 空间轮转数组的标准解法，思路极其反直觉",
      "时间 O(n)：总共交换 n/2 + k/2 + (n-k)/2  n 次，线性",
      "空间 O(1)：只有双指针变量，不开任何额外数组",
      "嵌套辅助函数：翻转 nums[left..right] 闭区间，双指针交换 O(1) 空间"
    ],
    "pitfalls": [
      "2. 必须用 nums[:]  new_nums，不能 nums  new_nums",
      "nums[:]  new_nums                    # 就地替换原列表内容（不能少了 [:]）",
      "1. 代码缩进不能乱：reverse 函数定义完后，n/k/三次调用必须和 def reverse 平级",
      "2. 三次调用右边界全部是闭区间：全翻 n-1、前k个 k-1、不能多写1",
      "reverse(nums, 0, n) 会越界 nums[n]，off-by-one 90% 的人踩过",
      "3. 传原数组 + 边界控制，绝对不能传切片 nums[0:k]",
      "4. 后 n-k 个的左边界是 k 不是 k+1"
    ],
    "recallBlanks": [
      {
        "prompt": "空间 O(1)：只有＿＿＿变量，不开任何额外数组",
        "answer": "双指针"
      }
    ],
    "solutionGuide": {
      "idea": "时间 O(n × k)，空间 O(1)",
      "interviewSteps": [
        "先说明核心考点：三次翻转。",
        "优先找一次遍历、前后缀、原地标记或排序后的结构性，避免暴力枚举。",
        "关键词：普通数组 / 三次翻转 / 数组 / 数学。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "2. 必须用 nums[:]  new_nums，不能 nums  new_nums"
    },
    "codePreview": "# 📌 需二刷：轮转数组经典题，掌握三种方法（暴力/额外数组/三次翻转）\n# ==================== 方法 1：暴力法 ====================\n# 思路：每次向右轮转 1 个位置（最后一个元素搬到最前），重复 k 次\n# 时间 O(n × k)，空间 O(1)\n#\n# ⚠️ 易错点/误区：\n# 1. 元素移动必须「从后往前」，从前往后会覆盖尚未读取的数据（a→1号位后，b就读不到了）\n# 2. 每次轮转前都要重新保存 nums[-1]，如果 tmp 只在循环外保存一次，第 2 轮起全错\n# 3. k 必须先对 n 取模：轮转 n 次等于没转，k=1e5 n=7 时实际只转 3 次\n# 4. if k==0 的判断完全多余：k%n==0 时 range(0) 是空循环，一次都不会跑\n# 5. 暴力法在 LeetCode 会 TLE（n=1e5, k=5e4 时操作≈5e9 次），仅作理解基础用\n# class Solution:\n#     def rotate(self, nums: list[int], k: int) -> None:\n#         \"\"\"\n#         Do not return anything, modify nums in-place instead.\n#         \"\"\"\n#         n = len(nums)\n#         k = k % n                              # 消除多余轮转：7个元素转10次 ≡ 转3次\n#         for _ in range(k):                     # 外层：一共轮转 k 次\n#             temp = nums[-1]                    # 每次轮转前保存最后一个元素，马上会被覆盖\n#             for j in range(n - 2, -1, -1):     # 内层：从倒数第 2 个开始往前挪\n#                 nums[j + 1] = nums[j]          # 前一个位置的元素往后挪 1 格\n#             nums[0] = temp                     # 最后把保存的元素放到最开头\n# ==================== 方法 2：额外数组法 ====================\n# 思路：直接用反推公式「新椅子 j ← 原椅子 (j-k)%n」一次性搬家，不用挪来挪去\n# 时间 O(n)，空间 O(n)\n#\n# ⚠️ 易错点/误区：\n# 1. 反推公式别搞反：是 nums[(j - k) % n]，不是 nums[(j + k) % n]\n#    正推是「人找椅子 i→(i+k)%n」，反推是「椅子找人 j←(j-k)%n」，方向相反！\n# 2. 必须用 nums[:] = new_nums，不能 nums = new_nums\n#    后者只是改了函数局部变量的指向，外面的原列表根本没变（Python 无引用传递）\n# 3. Python 中 (-3) % 7 = 4，自动处理负数余数，不用手动 (j - k + n) % n\n#    但 C++/Java 中负数取模会报错，面试写别的语言要手动加 n\n# class Solution:\n#     def rotate(self, nums: list[int], k: int) -> None:\n#         \"\"\"\n#         Do not return anything, modify nums in-place instead.\n#         \"\"\"\n#         n = len(nums)\n#         k = k % n                             # 消除多余轮转\n#         new_nums = [0] * n                    # 开个新柜子放结果\n#         for j in range(n):\n#             new_nums[j] = nums[(j - k) % n]   # 椅子 j 去找 (j-k)%n 号椅子上的人\n#         nums[:] = new_nums                    # 就地替换原列表内容（不能少了 [:]）\n# ==================== 方法 3：三次翻转（O(1) 原地最优解 ✅ 已通过） ====================\n# 📌 需二刷：O(1) 空间轮转数组的标准解法，思路极其反直觉\n#\n# 本质：向右轮转 k 个位置 = 把数组切成「A(n-k个) + B(k个)」两块，变成 B + A\n#       三次翻转利用了「翻转 + 再翻转 = 还原」的性质，原地交换块顺序：\n#         ① 全翻  → 两块同时倒序 + 块顺序交换\n#         ② 翻B块 → B块恢复正序\n#         ③ 翻A块 → A块恢复正序\n#       例：[1,2,3,4,5,6,7] k=3 → A=[1,2,3,4] B=[5,6,7]\n#           ① 全翻   → [7,6,5, 4,3,2,1] （B倒序在前，A倒序在后）\n#           ② 翻前3个 → [5,6,7, 4,3,2,1] （B恢复正序 ✅）\n#           ③ 翻后4个 → [5,6,7, 1,2,3,4] （A恢复正序 ✅，得到 B+A）\n# 时间 O(n)：总共交换 n/2 + k/2 + (n-k)/2 = n 次，线性\n# 空间 O(1)：只有双指针变量，不开任何额外数组\n#\n# ⚠️ 易错点/误区（4 个高频坑）：\n# 1. 代码缩进不能乱：reverse 函数定义完后，n/k/三次调用必须和 def reverse 平级\n#    缩进多一层会导致三次调用写在 reverse 内部，触发死循环\n# 2. 三次调用右边界全部是闭区间：全翻 n-1、前k个 k-1、不能多写1\n#    reverse(nums, 0, n) 会越界 nums[n]，off-by-one 90% 的人踩过\n# 3. 传原数组 + 边界控制，绝对不能传切片 nums[0:k]\n#    Python 切片会创建副本，翻转副本白做了，原 nums 纹丝不动\n# 4. 后 n-k 个的左边界是 k 不是 k+1\n#    k=3 时后 4 个从下标 3 开始不是 4，漏掉下标 k 会导致那个元素没翻\nclass Solution:\n    def rotate(self, nums: list[int], k: int) -> None:\n        \"\"\"\n        Do not return anything, modify nums in-place instead.\n        \"\"\"\n        # 嵌套辅助函数：翻转 nums[left..right] 闭区间，双指针交换 O(1) 空间\n        def reverse(nums, left, right):\n            while left < right:\n                tmp = nums[left]\n                nums[left] = nums[right]\n                nums[right] = tmp\n                left += 1\n                right -= 1\n        n = len(nums)\n        k = k % n                           # 消除多余轮转：n=7, k=10 → k=3\n        reverse(nums, 0, n - 1)             # ① 翻转整个数组\n        reverse(nums, 0, k - 1)             # ② 翻转前 k 个（左闭右闭：0 ~ k-1）\n        reverse(nums, k, n - 1)             # ③ 翻转后 n-k 个（左闭右闭：k ~ n-1）",
    "statement": "给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。\n\n \n\n示例 1:\n\n输入: nums = [1,2,3,4,5,6,7], k = 3\n输出: [5,6,7,1,2,3,4]\n解释:\n向右轮转 1 步: [7,1,2,3,4,5,6]\n向右轮转 2 步: [6,7,1,2,3,4,5]\n向右轮转 3 步: [5,6,7,1,2,3,4]\n\n示例 2:\n\n输入：nums = [-1,-100,3,99], k = 2\n输出：[3,99,-1,-100]\n解释: \n向右轮转 1 步: [99,-1,-100,3]\n向右轮转 2 步: [3,99,-1,-100]\n\n \n\n提示：\n\n\t1 <= nums.length <= 105\n\n\t-231 <= nums[i] <= 231 - 1\n\n\t0 <= k <= 105\n\n \n\n进阶：\n\n\t尽可能想出更多的解决方案，至少有 三种 不同的方法可以解决这个问题。\n\n\t你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？"
  }
]
