import { algorithmMeta } from './algorithmMeta'

export { algorithmMeta }

export type AlgorithmProblem = {
  id: string
  slug: string
  title: string
  titleEn?: string
  category: string
  difficulty: string
  topic: string
  completed: boolean
  leetcodeSlug?: string
  leetcodeUrl?: string
  acceptanceRate?: number
  solutionCount?: number
  companyTagCount?: number
  paidOnly?: boolean
  sourceBanks: string[]
  tags: string[]
  sourcePath?: string
  lastUpdated?: string
  lastUpdatedAt?: string
  interviewPattern: string
  thoughts: string[]
  pitfalls: string[]
  solutionGuide: {
    idea: string
    interviewSteps: string[]
    complexity: string
    keyMistake: string
  }
  codePreview?: string
}

export type AlgorithmCategory = {
  name: string
  total: number
  solved: number
  hard: number
}

export type AlgorithmReviewItem = {
  id: string
  title: string
  slug: string
  reason: string
}

export type AlgorithmRecentItem = {
  id: string
  slug: string
  title: string
  category: string
  difficulty: string
  topic: string
  tags: string[]
  sourcePath?: string
  lastUpdated?: string
  leetcodeUrl?: string
  codePreview: string
}

export const algorithmCategories: AlgorithmCategory[] = [
  {
    "name": "哈希表",
    "total": 3,
    "solved": 3,
    "hard": 0
  },
  {
    "name": "双指针",
    "total": 4,
    "solved": 4,
    "hard": 1
  },
  {
    "name": "滑动窗口",
    "total": 3,
    "solved": 2,
    "hard": 1
  },
  {
    "name": "子串",
    "total": 3,
    "solved": 2,
    "hard": 2
  },
  {
    "name": "普通数组",
    "total": 5,
    "solved": 4,
    "hard": 1
  },
  {
    "name": "矩阵",
    "total": 4,
    "solved": 2,
    "hard": 0
  },
  {
    "name": "链表",
    "total": 12,
    "solved": 7,
    "hard": 1
  },
  {
    "name": "二叉树",
    "total": 15,
    "solved": 7,
    "hard": 1
  },
  {
    "name": "图论",
    "total": 4,
    "solved": 2,
    "hard": 0
  },
  {
    "name": "回溯",
    "total": 8,
    "solved": 6,
    "hard": 1
  },
  {
    "name": "二分查找",
    "total": 6,
    "solved": 2,
    "hard": 1
  },
  {
    "name": "栈",
    "total": 5,
    "solved": 5,
    "hard": 1
  },
  {
    "name": "堆",
    "total": 3,
    "solved": 3,
    "hard": 1
  },
  {
    "name": "贪心",
    "total": 4,
    "solved": 1,
    "hard": 0
  },
  {
    "name": "动态规划",
    "total": 16,
    "solved": 4,
    "hard": 2
  },
  {
    "name": "技巧",
    "total": 5,
    "solved": 3,
    "hard": 0
  },
  {
    "name": "本地补充",
    "total": 7,
    "solved": 7,
    "hard": 0
  },
  {
    "name": "Hot100 补充",
    "total": 2,
    "solved": 2,
    "hard": 0
  }
]

export const algorithmReviewQueue: AlgorithmReviewItem[] = [
  {
    "id": "11",
    "title": "盛最多水的容器",
    "slug": "11-盛最多水的容器",
    "reason": "坑1: area 初始化写成 area  () (空元组)，不能和 int 比大小"
  },
  {
    "id": "15",
    "title": "三数之和",
    "slug": "15-三数之和",
    "reason": "去重：跳过重复的第一个数（i > 0 防止越界）"
  },
  {
    "id": "42",
    "title": "接雨水",
    "slug": "42-接雨水",
    "reason": "# 创建备忘录"
  },
  {
    "id": "560",
    "title": "和为 K 的子数组",
    "slug": "560-和为-k-的子数组",
    "reason": "否则会漏掉从下标0开始、和刚好等于k的子数组"
  },
  {
    "id": "76",
    "title": "最小覆盖子串",
    "slug": "76-最小覆盖子串",
    "reason": "注意这里的返回值是 \"\" 而不是 \" \""
  },
  {
    "id": "53",
    "title": "最大子数组和",
    "slug": "53-最大子数组和",
    "reason": "1. max_sum 不能初始化为 0，否则全负数数组（如 [-3,-2,-1]）会返回 0"
  },
  {
    "id": "56",
    "title": "合并区间",
    "slug": "56-合并区间",
    "reason": "和 result 最后一个区间比较，有重叠就合并（更新 end），否则直接加入"
  },
  {
    "id": "238",
    "title": "除了自身以外数组的乘积",
    "slug": "238-除自身以外数组的乘积",
    "reason": "2. right 数组要从右往左递推，range(n-2, -1, -1)，注意终点写 -1 才能包含下标 0"
  }
]

export const algorithmRecentProblems: AlgorithmRecentItem[] = [
  {
    "id": "3756",
    "slug": "3756-连接非零数字并乘以其数字和-ii",
    "title": "连接非零数字并乘以其数字和 II",
    "category": "本地补充",
    "difficulty": "中等",
    "topic": "本地提交",
    "tags": [
      "本地补充",
      "本地提交",
      "数学",
      "字符串",
      "前缀和"
    ],
    "sourcePath": "3756.连接非零数字并乘以其数字和 II.py",
    "lastUpdated": "2026-07-08",
    "leetcodeUrl": "https://leetcode.cn/problems/concatenate-non-zero-digits-and-multiply-by-sum-ii/",
    "codePreview": "from typing import List\nclass Solution:\n    def sumAndMultiply(self, s: str, queries: List[List[int]]) -> List[int]:\n        # 📌 需二刷：前缀和 + 模运算提取子串拼接值\n        #\n        # 思路：\n        #   预处理两个前缀数组，查询 O(1)：\n        #     cnt[i]     = s[0..i-1] 中的非零数字个数\n        #     concat[i]  = s[0..i-1] 中非零数字拼接成的数 (mod MOD)\n        #     digitsum[i]= s[0..i-1] 中非零数字之和\n        #\n        #   对于子串 [l, r]：\n        #     设 k = cnt[r+1] - cnt[l]（子串中非零数字个数）\n        #     psum[r+1] = (前缀的拼接数) × 10^k + (子串的拼接数)\n        #     → 子串拼接数 = psum[r+1] - psum[l] × 10^k\n        #\n        # 时间 O(m + Q)，空间 O(m)\n        MOD = 10**9 + 7\n        n = len(s)\n        cnt = [0] * (n + 1)\n        concat = [0] * (n + 1)\n        digitsum = [0] * (n + 1)\n        for i in range(n):\n            c = s[i]\n            cnt[i + 1] = cnt[i]\n            concat[i + 1] = concat[i]\n            digitsum[i + 1] = digitsum[i]\n            if c != '0':\n                d = ord(c) - 48\n                cnt[i + 1] += 1\n                concat[i + 1] = (concat[i + 1] * 10 + d) % MOD\n                digitsum[i + 1] += d\n        res = []\n        for l, r in queries:\n            k = cnt[r + 1] - cnt[l]           # 子串中非零数字个数\n            if k == 0:\n                res.append(0)\n                continue\n            # 子串拼接数 (mod MOD)\n            x = (concat[r + 1] - concat[l] * pow(10, k, MOD)) % MOD\n            # 子串数字和\n            s_sum = digitsum[r + 1] - digitsum[l]\n            res.append(x * (s_sum % MOD) % MOD)\n        return res"
  },
  {
    "id": "42",
    "slug": "42-接雨水",
    "title": "接雨水",
    "category": "双指针",
    "difficulty": "困难",
    "topic": "双指针 / 单调栈",
    "tags": [
      "双指针",
      "双指针 / 单调栈",
      "栈",
      "数组",
      "动态规划"
    ],
    "sourcePath": "42.接雨水.py",
    "lastUpdated": "2026-07-08",
    "leetcodeUrl": "https://leetcode.cn/problems/trapping-rain-water/",
    "codePreview": "# class Solution:\n#     def trap(self, height: List[int]) -> int:\n#         if len(height) == 0:\n#             return 0\n#         n = len(height)\n#         res = 0\n#         # 创建备忘录\n#         l_max = [0] * n\n#         r_max = [0] * n\n#         # 初始化\n#         l_max[0] = height[0]\n#         r_max[n-1] = height[n-1]\n#         for i in range(1, n):\n#             l_max[i] = max(height[i], l_max[i - 1])\n#         for i in range(n - 2, -1, -1):\n#             r_max[i] = max(height[i], r_max[i + 1])\n#         for i in range(1, n - 1):\n#             res += min(l_max[i],r_max[i]) - height[i]\n#         return res\nclass Solution:\n    def trap(self, height: List[int]) -> int:\n        if len(height) == 0:\n            return 0\n        n = len(height)\n        res = 0\n        left, right = 0, n - 1\n        l_max, r_max = height[0], height[n-1]\n        while left < right:\n            if l_max < r_max:\n                left += 1\n                l_max = max(l_max, height[left])\n                res += l_max - height[left]\n            else:\n                right -= 1\n                r_max = max(r_max, height[right])\n                res += r_max - height[right]\n        return res"
  },
  {
    "id": "84",
    "slug": "84-柱状图中最大的矩形",
    "title": "柱状图中最大的矩形",
    "category": "栈",
    "difficulty": "困难",
    "topic": "单调栈",
    "tags": [
      "栈",
      "单调栈",
      "数组"
    ],
    "sourcePath": "84.柱状图中最大的矩形.py",
    "lastUpdated": "2026-06-18",
    "leetcodeUrl": "https://leetcode.cn/problems/largest-rectangle-in-histogram/",
    "codePreview": "# 📌 需二刷：单调栈求最大矩形（递增栈 + 哨兵技巧）\n#\n# 思路：维护一个递增栈（存下标），当新柱子比栈顶矮时触发弹栈。\n#       被弹柱子的高度能形成的矩形，左边界是左边第一个更矮的（新栈顶），\n#       右边界是当前柱子 i。宽度 = right - left - 1。\n#       末尾加高度 0 的哨兵强制清空栈，省去收尾循环。\n# 时间 O(n)，空间 O(n)\n#\n# ⚠️ 易错点/误区：\n# 1. left = stack[-1] if stack else -1 ——栈空时左边界为 -1，宽度才能算对\n# 2. right = i 是当前下标，不是被弹柱子的下标 idx\n# 3. 哨兵高度为 0，比所有柱子矮，能强制弹出所有剩余柱子\n# 4. 弹栈时算的面积是 heights[idx] × width，不是 heights[i]\nclass Solution:\n    def largestRectangleArea(self, heights: List[int]) -> int:\n        stack = []               # 递增栈，存下标，对应高度递增\n        result = 0\n        heights = heights + [0]  # 哨兵：强制清空栈，省去收尾逻辑\n        for i in range(len(heights)):\n            # 新柱子比栈顶矮 → 栈顶柱子的右边界确定，弹栈算面积\n            while stack and heights[i] < heights[stack[-1]]:\n                idx = stack.pop()                     # 被弹的柱子\n                left = stack[-1] if stack else -1     # 左边第一个更矮的\n                right = i                              # 右边第一个更矮的\n                width = right - left - 1               # 被弹柱子能覆盖的宽度\n                result = max(result, width * heights[idx])\n            stack.append(i)   # 当前柱子入栈（递增关系已恢复）\n        return result"
  },
  {
    "id": "295",
    "slug": "295-数据流的中位数",
    "title": "数据流的中位数",
    "category": "堆",
    "difficulty": "困难",
    "topic": "双堆设计",
    "tags": [
      "堆",
      "双堆设计",
      "设计",
      "双指针",
      "数据流"
    ],
    "sourcePath": "295.数据流的中位数.py",
    "lastUpdated": "2026-06-17",
    "leetcodeUrl": "https://leetcode.cn/problems/find-median-from-data-stream/",
    "codePreview": "# 📌 需二刷：双堆配合求数据流中位数（大顶堆 + 小顶堆）\n#\n# 思路：将数据流分成两半——较小的一半用大顶堆（存负数模拟），较大的一半用小顶堆。\n#       保持两个堆大小平衡（最多差 1），中位数由堆顶计算得出。\n# 时间 O(log n)（每次 addNum），空间 O(n)\n#\n# ⚠️ 易错点/误区：\n# 1. Python 只有最小堆，用存负值模拟最大堆，取值时要取反\n# 2. heappushpop 传参符号：往 large 过一道传正数，往 small 过一道传负数\n# 3. 两个堆的大小差不能超过 1，否则中位数计算错误\n# 4. findMedian 要考虑奇偶两种长度情况\nimport heapq\nclass MedianFinder:\n    def __init__(self):\n        self.large = []      # 大顶堆（存负数）→ 存较小的一半，堆顶是较小半的最大值\n        self.small = []      # 小顶堆（存正数）→ 存较大的一半，堆顶是较大半的最小值\n    def addNum(self, num: int) -> None:\n        # 维持两个堆大小平衡：large 始终 <= small <= large+1\n        if len(self.large) < len(self.small):\n            # large 比 small 少 → 往 large 加一个\n            # 先把 num 扔进 small 过一道，取出 small 最小值，取反给 large\n            heapq.heappush(self.large, -heapq.heappushpop(self.small, num))\n        else:\n            # large 够了或相等 → 往 small 加一个\n            # 先把 -num 扔进 large 过一道，取出 large 最大值（即 -堆顶），取反给 small\n            heapq.heappush(self.small, -heapq.heappushpop(self.large, -num))\n    def findMedian(self) -> float:\n        if len(self.large) < len(self.small):\n            return self.small[0]            # 较大半多一个，直接取小顶堆堆顶\n        elif len(self.large) > len(self.small):\n            return -self.large[0]           # 较小半多一个，取大顶堆堆顶取反\n        else:\n            return (-self.large[0] + self.small[0]) / 2  # 一样多，取平均值\n# Your MedianFinder object will be instantiated and called as such:\n# obj = MedianFinder()\n# obj.addNum(num)\n# param_2 = obj.findMedian()"
  },
  {
    "id": "347",
    "slug": "347-前-k-个高频元素",
    "title": "前 K 个高频元素",
    "category": "堆",
    "difficulty": "中等",
    "topic": "map + 堆",
    "tags": [
      "堆",
      "map + 堆",
      "数组",
      "哈希表",
      "分治"
    ],
    "sourcePath": "347.前 K 个高频元素.py",
    "lastUpdated": "2026-06-16",
    "leetcodeUrl": "https://leetcode.cn/problems/top-k-frequent-elements/",
    "codePreview": "# 📌 需二刷：map 统计频率 + 最小堆维护 Top K（堆存元组 (频率, 元素)）\n#\n# 思路：先用 map 统计每个元素的出现频率，再遍历 map，往大小为 k 的最小堆里推\n#       (频率, 元素) 元组，堆按频率排序，堆顶是频率最低的，超了就弹出。\n#       最终堆里剩下频率最高的 k 个元素。\n# 时间 O(n log k)，空间 O(n)\n#\n# 替代写法：可用 Counter 替代手写频率统计\n#   from collections import Counter\n#   freq = Counter(nums)  # 一行搞定，结果和下面 freq 一样\n#\n# ⚠️ 易错点/误区：\n# 1. 堆里存 (count, num) 而不是 (num, count) —— heapq 按元组第一个元素排序\n#    如果存 (num, count)，堆会按 num 的大小排序，完全错了\n# 2. 遍历 freq.items() 时，解包顺序是 (num, count)，和推入堆的 (count, num) 相反\n# 3. 最后从堆里取元素时，要取元组的第二个值 num，不是 count\nimport heapq\nclass Solution:\n    def topKFrequent(self, nums: List[int], k: int) -> List[int]:\n        freq = {}\n        for num in nums:\n            freq[num] = freq.get(num, 0) + 1\n        pq = []\n        for num, count in freq.items():\n            heapq.heappush(pq, (count, num))   # 元组 (频率, 元素)，堆按频率排序\n            if len(pq) > k:\n                heapq.heappop(pq)               # 弹出频率最低的\n        result = []\n        for count, num in pq:                   # 解包元组，只取元素\n            result.append(num)\n        return result"
  },
  {
    "id": "215",
    "slug": "215-数组中的第-k-个最大元素",
    "title": "数组中的第K个最大元素",
    "category": "堆",
    "difficulty": "中等",
    "topic": "堆 / 快速选择",
    "tags": [
      "堆",
      "堆 / 快速选择",
      "数组",
      "分治",
      "快速选择"
    ],
    "sourcePath": "215.数组中的第K个最大元素.py",
    "lastUpdated": "2026-06-12",
    "leetcodeUrl": "https://leetcode.cn/problems/kth-largest-element-in-an-array/",
    "codePreview": "# import heapq\n# class Solution:\n#     def findKthLargest(self, nums: List[int], k: int) -> int:\n#         pq = []\n#         for e in nums:\n#             heapq.heappush(pq,e)\n#             if len(pq) > k:\n#                 heapq.heappop(pq)\n#         return pq[0]\nimport random\nclass Solution:\n    def findKthLargest(self, nums: List[int],k: int) -> int:\n        random.shuffle(nums)\n        lo, hi = 0, len(nums)-1\n        k = len(nums) - k\n        while lo <= hi:\n            p = self.partition(nums, lo, hi)\n            if p < k:\n                lo = p + 1\n            elif p > k:\n                hi = p - 1\n            else:\n                return nums[p]\n        return -1\n    def partition(self, nums:List[int], lo: int, hi: int):\n        pivot = nums[lo]\n        i, j = lo + 1, hi\n        while i <= j:\n            while i <= hi and nums[i] < pivot:\n                i += 1\n            while j >= lo and nums[j] > pivot:\n                j -= 1\n            if i >= j:\n                break\n            nums[i], nums[j] = nums[j], nums[i]\n            i += 1\n            j -= 1\n        nums[lo], nums[j] = nums[j], nums[lo]\n        return j"
  },
  {
    "id": "703",
    "slug": "703-数据流中的第-k-大元素",
    "title": "数据流中的第 K 大元素",
    "category": "本地补充",
    "difficulty": "简单",
    "topic": "本地提交",
    "tags": [
      "本地补充",
      "本地提交",
      "树",
      "设计",
      "二叉搜索树"
    ],
    "sourcePath": "703.数据流中的第 K 大元素.py",
    "lastUpdated": "2026-06-12",
    "leetcodeUrl": "https://leetcode.cn/problems/kth-largest-element-in-a-stream/",
    "codePreview": "# 📌 需二刷：最小堆维护 Top K（数据流实时求第 K 大的入门模板）\n#\n# 思路：维护一个大小为 k 的最小堆，堆里始终保存当前前 k 大的元素，\n#       堆顶（最小值）就是第 k 大的元素。新元素比堆顶大才值得入堆。\n# 时间 O(n log k)，空间 O(k)\n#\n# ⚠️ 易错点/误区：\n# 1. heapq 是最小堆，要第 K 大直接用小堆存前 K 大元素即可，不需要取反\n# 2. 初始化时 nums 长度可能小于 k，此时堆没满，堆顶就是最小值（不是真正第 k 大）\n#    但题目保证 add 调用次数足够多，最终堆会填满\n# 3. 容易漏掉 len(self.pq) > self.k 的判断条件，写成 >= 就把唯一元素弹出了\nimport heapq\nclass KthLargest:\n    def __init__(self, k: int, nums: List[int]):\n        self.k = k\n        self.pq = []                      # 最小堆，存前 k 大的元素\n        for e in nums:\n            heapq.heappush(self.pq, e)    # 逐个入堆\n            if len(self.pq) > k:\n                heapq.heappop(self.pq)    # 超了就把最小的弹出（第 k+1 大）\n    def add(self, val: int) -> int:\n        heapq.heappush(self.pq, val)      # 新元素先入堆\n        if len(self.pq) > self.k:\n            heapq.heappop(self.pq)        # 超了弹出最小元素（可能是 val 本身）\n        return self.pq[0]                 # 堆顶 = 第 k 大\n# Your KthLargest object will be instantiated and called as such:\n# obj = KthLargest(k, nums)\n# param_1 = obj.add(val)"
  },
  {
    "id": "146",
    "slug": "146-lru-缓存",
    "title": "LRU 缓存",
    "category": "本地补充",
    "difficulty": "中等",
    "topic": "本地提交",
    "tags": [
      "本地补充",
      "本地提交",
      "设计",
      "哈希表",
      "链表"
    ],
    "sourcePath": "146.LRU 缓存.py",
    "lastUpdated": "2026-06-12",
    "leetcodeUrl": "https://leetcode.cn/problems/lru-cache/",
    "codePreview": "# 📌 需二刷：哈希表 + 双向链表实现 LRU（空间换时间经典设计）\n#\n# 思路：map 负责 O(1) 查找节点，双向链表维护访问顺序。\n#       每次访问（get/put）将节点移到链表尾部表示\"最近使用\"，\n#       缓存满时淘汰链表头部节点（最久未使用）\n# 时间 O(1)，空间 O(capacity)\n#\n# ⚠️ 易错点/误区：\n# 1. map 和链表是\"同个 Node 对象\"的两种视角，不是副本关系\n# 2. 容易忘了在 put 更新已有 key 时，要先删再重建节点（否则链表顺序错乱）\n# 3. removeLeastRecently 要注意链表为空的情况\nclass Node:\n    # 链表节点：同时存储 key（用于从被删节点反查 map 的 key）和 val\n    def __init__(self, key, val):\n        self.key = key\n        self.val = val\n        self.prev = None\n        self.next = None\nclass DoulelistNode:\n    def __init__(self):\n        self.head = Node(0,0)\n        self.tail = Node(0,0)\n        self._size = 0\n        self.head.next = self.tail\n        self.tail.prev = self.head\n    def addlast(self,x):\n        x.prev = self.tail.prev\n        x.next = self.tail\n        self.tail.prev.next = x\n        self.tail.prev = x\n        self._size += 1\n    def remove(self,x):\n        x.next.prev = x.prev\n        x.prev.next = x.next\n        self._size -= 1\n    def removefirst(self):\n        if self.head.next == self.tail:\n            return None\n        first = self.head.next\n        self.remove(first)\n        return first\n    def size(self):\n        return self._size\nclass LRUCache:\n    def __init__(self, capacity: int):\n        self.map = {}                # key → Node，O(1) 定位节点\n        self.cache = DoulelistNode() # 双向链表，维护访问顺序\n        self.cap = capacity\n    def get(self, key: int) -> int:\n        if key not in self.map:\n            return -1\n        self.makerecently(key)       # ⚠️ 这里容易写成 x，但 makerecently 接收的是 key\n        return self.map[key].val\n    def put(self, key: int, val: int) -> None:\n        # 情况 1：key 已存在 → 先删旧节点，再插新节点（更新值和顺序）\n        if key in self.map:\n            self.deletekey(key)\n            self.addrecently(key, val)\n            return\n        # 情况 2：缓存满 → 淘汰最久未使用的头节点\n        if self.cap == self.cache.size():\n            self.removeLeastRecently()\n        # 情况 3：直接插入新节点\n        self.addrecently(key, val)\n    # 将 key 对应的节点移到链表尾部（标记为最近使用）\n    def makerecently(self, key: int):\n        x = self.map[key]\n        self.cache.remove(x)         # 先删\n        self.cache.addlast(x)        # 再放到尾部\n    # 新建节点并添加到链表尾部，同时在 map 中注册\n    def addrecently(self, key: int, val: int):\n        x = Node(key, val)\n        self.cache.addlast(x)\n        self.map[key] = x\n    # 删除指定 key 的节点（更新操作时用）\n    def deletekey(self, key: int):\n        x = self.map[key]\n        self.cache.remove(x)\n        self.map.pop(key)\n    # 淘汰最久未使用的元素（链表头部节点）\n    def removeLeastRecently(self):\n        deletedNode = self.cache.removefirst()\n        deletedKey = deletedNode.key  # 从节点中拿到 key，去 map 中清除\n        self.map.pop(deletedKey)\n# Your LRUCache object will be instantiated and called as such:\n# obj = LRUCache(capacity)\n# param_1 = obj.get(key)\n# obj.put(key,value)"
  },
  {
    "id": "75",
    "slug": "75-颜色分类",
    "title": "颜色分类",
    "category": "技巧",
    "difficulty": "中等",
    "topic": "三指针",
    "tags": [
      "技巧",
      "三指针",
      "数组",
      "双指针",
      "排序"
    ],
    "sourcePath": "75.颜色分类.py",
    "lastUpdated": "2026-06-04",
    "leetcodeUrl": "https://leetcode.cn/problems/sort-colors/",
    "codePreview": "# 📌 需二刷：荷兰国旗问题（三路分区），和 912 的三路快排是同一套思路\n#\n# 思路：用三个指针 p0 / p / p2 将数组划分为 0 / 1 / 2 三个区域，\n#       一次遍历完成排序\n# 时间 O(n)，空间 O(1)\n#\n# 类比 912：三路快排的简化版——pivot 固定为 1，不需要递归\nclass Solution:\n    def sortColors(self, nums: List[int]) -> None:\n        p0 = 0          # 0 区的右边界，nums[0..p0-1] == 0\n        p2 = len(nums) - 1  # 2 区的左边界，nums[p2+1..] == 2\n        p = 0           # 当前遍历指针\n        while p <= p2:\n            if nums[p] == 0:\n                # 把 0 换到左边，p0 和 p 都前进\n                nums[p], nums[p0] = nums[p0], nums[p]\n                p0 += 1\n            elif nums[p] == 2:\n                # 把 2 换到右边，p2 左移，p 不动（换来的元素没检查过）\n                nums[p], nums[p2] = nums[p2], nums[p]\n                p2 -= 1\n            else:\n                # nums[p] == 1，留在中间\n                p += 1\n            # p 落后 p0 时补上（0 换走后 p0 推进，但 p 没加，需要对齐）\n            if p < p0:\n                p = p0\n        #\n        # ⚠️ 易错点/误区：\n        # 1. nums[p] == 2 交换后 p 不能 +1，右边换来的元素还没检查\n        # 2. 循环条件是 p <= p2，不是 p < p2（漏掉 p == p2 时的情况）\n        # 3. p2 初始值是 len(nums) - 1 不是 len(nums)，否则 nums[p2] 越界\n        # 4. nums[p] == 0 交换后 p 可以放心 +1，\n        #    因为换过来的 nums[p0] 只可能是 1（p0 指向 1 区开头），不可能是 2"
  },
  {
    "id": "912",
    "slug": "912-排序数组",
    "title": "排序数组",
    "category": "本地补充",
    "difficulty": "中等",
    "topic": "本地提交",
    "tags": [
      "本地补充",
      "本地提交",
      "数组",
      "分治",
      "桶排序"
    ],
    "sourcePath": "912.排序数组.py",
    "lastUpdated": "2026-06-04",
    "leetcodeUrl": "https://leetcode.cn/problems/sort-an-array/",
    "codePreview": "import random\nclass Solution(object):\n    def sortArray(self, nums):\n        # 📌 需二刷：三路快排（3-way Quick Sort），处理大量重复元素的核心技巧\n        #\n        # 思路：随机选 pivot，将数组分为 <pivot / ==pivot / >pivot 三个区域\n        # 时间 O(n log n) 平均，O(n²) 最坏（几乎不会出现），空间 O(log n)\n        self.quicksort(nums, 0, len(nums) - 1)\n        return nums\n    def quicksort(self, nums, left, right):\n        if left >= right:\n            return\n        # 随机选 pivot，避免有序数组导致 O(n²)\n        rand_idx = random.randint(left, right)\n        nums[left], nums[rand_idx] = nums[rand_idx], nums[left]\n        pivot = nums[left]\n        # 三路分区：三个指针维护三个区间\n        # lt: 小于区的右边界，nums[left..lt-1] < pivot\n        # gt: 大于区的左边界，nums[gt+1..right] > pivot\n        # i: 当前遍历的位置\n        lt, gt, i = left, right, left\n        while i <= gt:\n            if nums[i] < pivot:\n                # 当前元素 < pivot，换到左边\n                nums[lt], nums[i] = nums[i], nums[lt]\n                lt += 1\n                i += 1\n            elif nums[i] > pivot:\n                # 当前元素 > pivot，换到右边\n                # 换回来的元素没检查过，所以 i 不动\n                nums[gt], nums[i] = nums[i], nums[gt]\n                gt -= 1\n            else:\n                # 当前元素 == pivot，留在中间\n                i += 1\n        # 递归处理小于区和大于区，等于区已在正确位置\n        self.quicksort(nums, left, lt - 1)\n        self.quicksort(nums, gt + 1, right)\n        #\n        # ⚠️ 易错点/误区：\n        # 1. nums[i] > pivot 交换后 i 不能 +1，因为右边换来的元素未检查过\n        # 2. 终止条件是 i <= gt，不是 i < gt，否则会漏掉 nums[gt]\n        # 3. 递归区间是 (left, lt-1) 和 (gt+1, right)，不是 (left, lt) 和 (gt, right)"
  }
]

export const algorithmProblems: AlgorithmProblem[] = [
  {
    "id": "1",
    "slug": "1-两数之和",
    "title": "两数之和",
    "titleEn": "Two Sum",
    "category": "哈希表",
    "difficulty": "简单",
    "topic": "字典查表",
    "completed": true,
    "leetcodeSlug": "two-sum",
    "leetcodeUrl": "https://leetcode.cn/problems/two-sum/",
    "acceptanceRate": 55.2,
    "solutionCount": 30218,
    "companyTagCount": 452,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "哈希表",
      "字典查表",
      "数组"
    ],
    "sourcePath": "hot100/0316/1.两数之和.py",
    "lastUpdated": "2026-03-16",
    "lastUpdatedAt": "2026-03-16T10:38:36.695Z",
    "interviewPattern": "先明确 key/value 设计，再判断是查补数、分组还是去重；面试写法优先使用 dict/set 保持 O(n)。",
    "thoughts": [
      "思路：哈希表（一遍遍历）",
      "- 查哈希表中是否已有 complement，有则返回两个下标",
      "- 没有则把当前数存入哈希表，继续遍历",
      "核心技巧：用哈希表把 O(n) 的查找变成 O(1)，总时间从 O(n²) 降到 O(n)",
      "时间复杂度：O(n)   空间复杂度：O(n)"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "solutionGuide": {
      "idea": "思路：哈希表（一遍遍历）",
      "interviewSteps": [
        "先说明核心考点：字典查表。",
        "先明确 key/value 设计，再判断是查补数、分组还是去重；面试写法优先使用 dict/set 保持 O(n)。",
        "关键词：哈希表 / 字典查表 / 数组。"
      ],
      "complexity": "时间复杂度：O(n)   空间复杂度：O(n)",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    },
    "codePreview": "class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        hash_map = {}                          # 哈希表：{值: 下标}\n        for i, num in enumerate(nums):         # 遍历数组，i=下标, num=值\n            complement = target - num          # 计算需要的\"搭档\"\n            if complement in hash_map:         # 搭档来过吗？O(1) 查找\n                return [hash_map[complement], i]  # 找到了，返回两个下标\n            hash_map[num] = i                  # 没找到，登记自己等着\n        return []"
  },
  {
    "id": "49",
    "slug": "49-字母异位词分组",
    "title": "字母异位词分组",
    "titleEn": "Group Anagrams",
    "category": "哈希表",
    "difficulty": "中等",
    "topic": "排序数组作 Key",
    "completed": true,
    "leetcodeSlug": "group-anagrams",
    "leetcodeUrl": "https://leetcode.cn/problems/group-anagrams/",
    "acceptanceRate": 69.5,
    "solutionCount": 5519,
    "companyTagCount": 127,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "哈希表",
      "排序数组作 Key",
      "数组",
      "字符串",
      "排序"
    ],
    "sourcePath": "hot100/0317/49.字母异位词分组.py",
    "lastUpdated": "2026-03-17",
    "lastUpdatedAt": "2026-03-17T13:20:17.656Z",
    "interviewPattern": "先明确 key/value 设计，再判断是查补数、分组还是去重；面试写法优先使用 dict/set 保持 O(n)。",
    "thoughts": [
      "核心考点：排序数组作 Key",
      "先明确 key/value 设计，再判断是查补数、分组还是去重；面试写法优先使用 dict/set 保持 O(n)。"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "solutionGuide": {
      "idea": "核心考点：排序数组作 Key",
      "interviewSteps": [
        "先说明核心考点：排序数组作 Key。",
        "先明确 key/value 设计，再判断是查补数、分组还是去重；面试写法优先使用 dict/set 保持 O(n)。",
        "关键词：哈希表 / 排序数组作 Key / 数组 / 字符串。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    },
    "codePreview": "class Solution:\n    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:"
  },
  {
    "id": "128",
    "slug": "128-最长连续序列",
    "title": "最长连续序列",
    "titleEn": "Longest Consecutive Sequence",
    "category": "哈希表",
    "difficulty": "中等",
    "topic": "Set 去重",
    "completed": true,
    "leetcodeSlug": "longest-consecutive-sequence",
    "leetcodeUrl": "https://leetcode.cn/problems/longest-consecutive-sequence/",
    "acceptanceRate": 48.8,
    "solutionCount": 6111,
    "companyTagCount": 93,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "哈希表",
      "Set 去重",
      "并查集",
      "数组"
    ],
    "sourcePath": "hot100/0316/128.最长连续序列.py",
    "lastUpdated": "2026-03-16",
    "lastUpdatedAt": "2026-03-16T14:41:07.592Z",
    "interviewPattern": "先明确 key/value 设计，再判断是查补数、分组还是去重；面试写法优先使用 dict/set 保持 O(n)。",
    "thoughts": [
      "方法：哈希集合",
      "核心思想：把所有数字放入 set，利用 O(1) 的查找速度",
      "时间复杂度：O(n)，每个数字最多被访问两次",
      "空间复杂度：O(n)，存储 set"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "solutionGuide": {
      "idea": "方法：哈希集合",
      "interviewSteps": [
        "先说明核心考点：Set 去重。",
        "先明确 key/value 设计，再判断是查补数、分组还是去重；面试写法优先使用 dict/set 保持 O(n)。",
        "关键词：哈希表 / Set 去重 / 并查集 / 数组。"
      ],
      "complexity": "时间复杂度：O(n)，每个数字最多被访问两次",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    },
    "codePreview": "# 方法：哈希集合\n# 核心思想：把所有数字放入 set，利用 O(1) 的查找速度\n# 只从每个连续序列的\"起点\"开始向后扩展，避免重复遍历\n# 时间复杂度：O(n)，每个数字最多被访问两次\n# 空间复杂度：O(n)，存储 set\nclass Solution:\n    def longestConsecutive(self, nums: List[int]) -> int:\n        num_set = set(nums)           # 将所有数字放入集合，查找 O(1)\n        longest = 0                   # 记录全局最长连续序列长度\n        for num in num_set:\n            # 关键优化：如果 num-1 存在，说明 num 不是序列起点，跳过\n            # 只从序列的最小值开始扩展，保证每个序列只遍历一次\n            if num-1 not in num_set:\n                current = num         # 当前正在检查的数字\n                length = 1            # 当前连续序列的长度（至少包含 num 自己）\n                # 不断向后查找 current+1 是否存在，存在则序列长度+1\n                while current+1 in num_set:\n                    current += 1\n                    length += 1\n                longest = max(longest,length)  # 更新全局最长长度\n        return longest"
  },
  {
    "id": "283",
    "slug": "283-移动零",
    "title": "移动零",
    "titleEn": "Move Zeroes",
    "category": "双指针",
    "difficulty": "简单",
    "topic": "快慢指针",
    "completed": true,
    "leetcodeSlug": "move-zeroes",
    "leetcodeUrl": "https://leetcode.cn/problems/move-zeroes/",
    "acceptanceRate": 63.8,
    "solutionCount": 11283,
    "companyTagCount": 114,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "双指针",
      "快慢指针",
      "数组"
    ],
    "sourcePath": "hot100/0316/283.移动零.py",
    "lastUpdated": "2026-03-16",
    "lastUpdatedAt": "2026-03-16T15:29:44.444Z",
    "interviewPattern": "先排序或确定单调性，再定义左右指针移动规则；每次移动必须能排除一批不可能答案。",
    "thoughts": [
      "核心思想,slow遇到0不动,等待fast找到非0值进行交换",
      "双指针交换"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "solutionGuide": {
      "idea": "核心思想,slow遇到0不动,等待fast找到非0值进行交换",
      "interviewSteps": [
        "先说明核心考点：快慢指针。",
        "先排序或确定单调性，再定义左右指针移动规则；每次移动必须能排除一批不可能答案。",
        "关键词：双指针 / 快慢指针 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    },
    "codePreview": "class Solution:\n    def moveZeroes(self, nums: List[int]) -> None:\n        \"\"\"\n        Do not return anything, modify nums in-place instead.\n        \"\"\"\n        # 核心思想,slow遇到0不动,等待fast找到非0值进行交换\n        # 单指针填0\n        # a = 0\n        # for i in range(len(nums)):\n        #     if nums[i] != 0:\n        #         nums[a] = nums[i]\n        #         a += 1\n        # for i in range(a, len(nums)):\n        #     nums[i] = 0\n        # 双指针交换\n        slow = 0\n        for fast in range(len(nums)):\n            if nums[fast] != 0:\n                nums[slow], nums[fast] = nums[fast], nums[slow]\n                slow += 1"
  },
  {
    "id": "11",
    "slug": "11-盛最多水的容器",
    "title": "盛最多水的容器",
    "titleEn": "Container With Most Water",
    "category": "双指针",
    "difficulty": "中等",
    "topic": "左右夹逼",
    "completed": true,
    "leetcodeSlug": "container-with-most-water",
    "leetcodeUrl": "https://leetcode.cn/problems/container-with-most-water/",
    "acceptanceRate": 61.9,
    "solutionCount": 9237,
    "companyTagCount": 197,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "双指针",
      "左右夹逼",
      "贪心",
      "数组"
    ],
    "sourcePath": "hot100/0317/11.盛最多水的容器.py",
    "lastUpdated": "2026-03-17",
    "lastUpdatedAt": "2026-03-17T13:17:48.803Z",
    "interviewPattern": "先排序或确定单调性，再定义左右指针移动规则；每次移动必须能排除一批不可能答案。",
    "thoughts": [
      "双指针从两端向中间移动，每次移动较短的一边",
      "暴力解法 O(n²) — 超时",
      "双指针解法 O(n)"
    ],
    "pitfalls": [
      "坑1: area 初始化写成 area  () (空元组)，不能和 int 比大小",
      "坑2: for i in height 遍历的是\"值\"不是\"索引\"",
      "坑3: 先移动指针再算面积，导致漏算第一对、且用错了指针位置",
      "坑4: 两个 if 不是互斥的，第一个 if 改了 front 后，",
      "坑5: while front < back，当 front  back 时宽度为 0，没有意义"
    ],
    "solutionGuide": {
      "idea": "双指针从两端向中间移动，每次移动较短的一边",
      "interviewSteps": [
        "先说明核心考点：左右夹逼。",
        "先排序或确定单调性，再定义左右指针移动规则；每次移动必须能排除一批不可能答案。",
        "关键词：双指针 / 左右夹逼 / 贪心 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "坑1: area 初始化写成 area  () (空元组)，不能和 int 比大小"
    },
    "codePreview": "class Solution:\n    def maxArea(self, height: List[int]) -> int:\n        # ========== 解题思路 ==========\n        # 面积 = min(左高, 右高) × 宽度\n        # 双指针从两端向中间移动，每次移动较短的一边\n        # 因为：宽度一定变小，只有移动短边才有可能让 min(高) 变大，从而面积变大\n        #       移动长边 → min(高) 不变或更小 → 面积一定变小，没意义\n        # ========== 暴力解法 O(n²) — 超时 ==========\n        # area = 0\n        # for i in range(len(height)):\n        #     for s in range(i+1, len(height)):\n        #         area = max(min(height[i],height[s]) * (s-i),area)\n        # return area\n        # ========== 双指针解法 O(n) ==========\n        front = 0\n        back = len(height)-1\n        area = 0\n        while front < back:\n            # 先算面积，再移动指针\n            area = max(min(height[front],height[back]) * (back - front),area)\n            if height[front] <= height[back]:\n                front += 1\n            else:\n                back -= 1\n        return area\n        # ========== 踩坑记录 ==========\n        # 坑1: area 初始化写成 area = () (空元组)，不能和 int 比大小\n        #       → 初始化数值型变量用 0，不要用 () 或 None\n        #\n        # 坑2: for i in height 遍历的是\"值\"不是\"索引\"\n        #       → 需要索引时一定用 range(len(height))\n        #\n        # 坑3: 先移动指针再算面积，导致漏算第一对、且用错了指针位置\n        #       → 应该先算面积，再移动指针\n        #\n        # 坑4: 两个 if 不是互斥的，第一个 if 改了 front 后，\n        #       第二个 if 用的是新的 front，可能一轮移动两个指针\n        #       → 用 if/else 保证每轮只移动一个指针\n        #\n        # 坑5: while front <= back，当 front == back 时宽度为 0，没有意义\n        #       → 用 while front < back"
  },
  {
    "id": "15",
    "slug": "15-三数之和",
    "title": "三数之和",
    "titleEn": "3Sum",
    "category": "双指针",
    "difficulty": "中等",
    "topic": "排序 + 双指针",
    "completed": true,
    "leetcodeSlug": "3sum",
    "leetcodeUrl": "https://leetcode.cn/problems/3sum/",
    "acceptanceRate": 40.5,
    "solutionCount": 9675,
    "companyTagCount": 222,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "双指针",
      "排序 + 双指针",
      "数组",
      "排序"
    ],
    "sourcePath": "hot100/0317/15.三数之和.py",
    "lastUpdated": "2026-03-17",
    "lastUpdatedAt": "2026-03-17T14:02:17.702Z",
    "interviewPattern": "先排序或确定单调性，再定义左右指针移动规则；每次移动必须能排除一批不可能答案。",
    "thoughts": [
      "排序 + 双指针，时间复杂度 O(n²)",
      "1. 先排序，让数组有序，才能用双指针判断移动方向",
      "3. left 和 right 双指针在 i 右边区间找另外两个数"
    ],
    "pitfalls": [
      "去重：跳过重复的第一个数（i > 0 防止越界）",
      "坑1: nums  nums.sort() → .sort() 返回 None，直接 nums.sort()",
      "坑2: for i in height 遍历值不是索引 → 用 range(len(nums))",
      "坑3: left  i - 1 → 应该是 i + 1，在 i 的右边搜索",
      "坑4: total < 0 时 right - 1（方向反了）",
      "坑5: result.append(a, b, c) → append 只接受一个参数",
      "坑6: 用 result.set() 去重 → list 没有 set() 方法",
      "坑7: & 是位运算，逻辑与用 and"
    ],
    "solutionGuide": {
      "idea": "1. 先排序，让数组有序，才能用双指针判断移动方向",
      "interviewSteps": [
        "先说明核心考点：排序 + 双指针。",
        "先排序或确定单调性，再定义左右指针移动规则；每次移动必须能排除一批不可能答案。",
        "关键词：双指针 / 排序 + 双指针 / 数组 / 排序。"
      ],
      "complexity": "排序 + 双指针，时间复杂度 O(n²)",
      "keyMistake": "去重：跳过重复的第一个数（i > 0 防止越界）"
    },
    "codePreview": "class Solution:\n    def threeSum(self, nums: list[int]) -> list[list[int]]:\n        # ========== 解题思路 ==========\n        # 排序 + 双指针，时间复杂度 O(n²)\n        # 1. 先排序，让数组有序，才能用双指针判断移动方向\n        # 2. for 循环固定第一个数 nums[i]\n        # 3. left 和 right 双指针在 i 右边区间找另外两个数\n        # 4. 通过 total 的大小判断移动哪个指针\n        # ========== 正确解法 ==========\n        nums.sort()  # 排序是前提！.sort() 原地排序，返回 None，不要写 nums = nums.sort()\n        result = []\n        for i in range(len(nums)):\n            # 剪枝：排序后如果 nums[i] > 0，三数之和不可能为 0\n            if nums[i] > 0:\n                break\n            # 去重：跳过重复的第一个数（i > 0 防止越界）\n            if i > 0 and nums[i] == nums[i - 1]:\n                continue\n            left = i + 1\n            right = len(nums) - 1\n            while left < right:\n                total = nums[i] + nums[left] + nums[right]\n                if total < 0:\n                    left += 1    # 和太小，left 右移找更大的数\n                elif total > 0:\n                    right -= 1   # 和太大，right 左移找更小的数\n                else:\n                    # 找到一组答案\n                    result.append([nums[i], nums[left], nums[right]])\n                    # 去重：跳过重复的 left 和 right\n                    while left < right and nums[left] == nums[left + 1]:\n                        left += 1\n                    while left < right and nums[right] == nums[right - 1]:\n                        right -= 1\n                    # 两个指针同时移动，继续找下一组\n                    left += 1\n                    right -= 1\n        return result\n        # ========== 踩坑记录（⚠️ 需要二刷） ==========\n        # 坑1: nums = nums.sort() → .sort() 返回 None，直接 nums.sort()\n        # 坑2: for i in height 遍历值不是索引 → 用 range(len(nums))\n        # 坑3: left = i - 1 → 应该是 i + 1，在 i 的右边搜索\n        # 坑4: total < 0 时 right -= 1（方向反了）\n        #       → 和太小应该 left += 1（往右找更大的数）\n        #       → 和太大应该 right -= 1（往左找更小的数）\n        # 坑5: result.append(a, b, c) → append 只接受一个参数\n        #       → 应该传一个列表 result.append([a, b, c])\n        # 坑6: 用 result.set() 去重 → list 没有 set() 方法\n        #       → 正确做法是在循环中跳过相同的数\n        # 坑7: & 是位运算，逻辑与用 and"
  },
  {
    "id": "42",
    "slug": "42-接雨水",
    "title": "接雨水",
    "titleEn": "Trapping Rain Water",
    "category": "双指针",
    "difficulty": "困难",
    "topic": "双指针 / 单调栈",
    "completed": true,
    "leetcodeSlug": "trapping-rain-water",
    "leetcodeUrl": "https://leetcode.cn/problems/trapping-rain-water/",
    "acceptanceRate": 66.1,
    "solutionCount": 8080,
    "companyTagCount": 192,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "双指针",
      "双指针 / 单调栈",
      "栈",
      "数组",
      "动态规划",
      "单调栈"
    ],
    "sourcePath": "42.接雨水.py",
    "lastUpdated": "2026-07-08",
    "lastUpdatedAt": "2026-07-08T16:48:47.909Z",
    "interviewPattern": "先排序或确定单调性，再定义左右指针移动规则；每次移动必须能排除一批不可能答案。",
    "thoughts": [
      "核心考点：双指针 / 单调栈",
      "先排序或确定单调性，再定义左右指针移动规则；每次移动必须能排除一批不可能答案。"
    ],
    "pitfalls": [
      "# 创建备忘录"
    ],
    "solutionGuide": {
      "idea": "核心考点：双指针 / 单调栈",
      "interviewSteps": [
        "先说明核心考点：双指针 / 单调栈。",
        "先排序或确定单调性，再定义左右指针移动规则；每次移动必须能排除一批不可能答案。",
        "关键词：双指针 / 双指针 / 单调栈 / 栈 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "# 创建备忘录"
    },
    "codePreview": "# class Solution:\n#     def trap(self, height: List[int]) -> int:\n#         if len(height) == 0:\n#             return 0\n#         n = len(height)\n#         res = 0\n#         # 创建备忘录\n#         l_max = [0] * n\n#         r_max = [0] * n\n#         # 初始化\n#         l_max[0] = height[0]\n#         r_max[n-1] = height[n-1]\n#         for i in range(1, n):\n#             l_max[i] = max(height[i], l_max[i - 1])\n#         for i in range(n - 2, -1, -1):\n#             r_max[i] = max(height[i], r_max[i + 1])\n#         for i in range(1, n - 1):\n#             res += min(l_max[i],r_max[i]) - height[i]\n#         return res\nclass Solution:\n    def trap(self, height: List[int]) -> int:\n        if len(height) == 0:\n            return 0\n        n = len(height)\n        res = 0\n        left, right = 0, n - 1\n        l_max, r_max = height[0], height[n-1]\n        while left < right:\n            if l_max < r_max:\n                left += 1\n                l_max = max(l_max, height[left])\n                res += l_max - height[left]\n            else:\n                right -= 1\n                r_max = max(r_max, height[right])\n                res += r_max - height[right]\n        return res"
  },
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
    "acceptanceRate": 42.6,
    "solutionCount": 20248,
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
    "sourcePath": "3.无重复字符的最长子串.py",
    "lastUpdated": "2026-06-01",
    "lastUpdatedAt": "2026-06-01T15:19:25.241Z",
    "interviewPattern": "维护窗口内的计数和有效条件，右指针扩张，左指针只在条件满足或失效时收缩。",
    "thoughts": [
      "需二刷：经典滑动窗口（求最长子串）",
      "思路：这道题找的是“最长”的无重复子串，不需要固定窗口大小。",
      "时间 O(N)，其中 N 是 s 的长度。",
      "空间 O(C)，C 为字符集大小（ASCII 码最多 128/256 个）。"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
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
    "codePreview": "class Solution(object):\n    def lengthOfLongestSubstring(self, s):\n        \"\"\"\n        :type s: str\n        :rtype: int\n        \"\"\"\n        # 📌 需二刷：经典滑动窗口（求最长子串）\n        #\n        # 思路：这道题找的是“最长”的无重复子串，不需要固定窗口大小。\n        # 只要新加入的字符 c 导致了窗口内出现了重复（window[c] > 1），\n        # 就不断移动 left 缩小窗口，直到把重复的那个字符移出去为止。\n        # 当窗口内再次没有重复字符时，更新最大长度。\n        # 时间 O(N)，其中 N 是 s 的长度。\n        # 空间 O(C)，C 为字符集大小（ASCII 码最多 128/256 个）。\n        #\n        # ⚠️ 易错点/误区：\n        # 1. 更新最大长度的位置：result = max(...) 必须放在内层 while 循环结束之后。因为只有在剔除重复字符后，当前窗口内的子串才是合法的“无重复”子串。\n        # 2. 收缩条件：这道题不需要像 567 题那样判断 right - left 的长度，而是直接用 window[c] > 1 作为收缩条件，直击要害。\n        left = 0\n        right = 0\n        result = 0\n        window = {}\n        while right < len(s):\n            c = s[right]  # 即将移入窗口的字符\n            right += 1    # 右移窗口\n            window[c] = window.get(c, 0) + 1\n            # 判断左侧窗口是否要收缩（如果移入 c 后导致了重复）\n            while window[c] > 1:\n                d = s[left]  # 即将移出窗口的字符\n                left += 1    # 左移窗口\n                window[d] = window.get(d, 0) - 1\n            # 到这里，窗口内一定没有重复字符了，更新最长结果\n            result = max(result, right - left)\n        return result"
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
    "acceptanceRate": 54.6,
    "solutionCount": 4374,
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
    "sourcePath": "438.找到字符串中所有字母异位词.py",
    "lastUpdated": "2026-06-01",
    "lastUpdatedAt": "2026-06-01T15:10:26.505Z",
    "interviewPattern": "维护窗口内的计数和有效条件，右指针扩张，左指针只在条件满足或失效时收缩。",
    "thoughts": [
      "需二刷：滑动窗口寻找所有固定长度的子串（异位词/排列）",
      "思路：异位词本质上就是字符串的排列。这道题和 567 题（字符串的排列）逻辑完全一致。",
      "时间 O(N + M)，其中 N 是 s 的长度，M 是 p 的长度。",
      "空间 O(C)，C 为字符集大小，本题最多 26 个字母。"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
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
    "codePreview": "class Solution(object):\n    def findAnagrams(self, s, p):\n        \"\"\"\n        :type s: str\n        :type p: str\n        :rtype: List[int]\n        \"\"\"\n        # 📌 需二刷：滑动窗口寻找所有固定长度的子串（异位词/排列）\n        #\n        # 思路：异位词本质上就是字符串的排列。这道题和 567 题（字符串的排列）逻辑完全一致。\n        # 区别仅仅在于：567 题找到一个就 return True，本题需要把所有找到的起始索引 left 存入结果数组中。\n        # 时间 O(N + M)，其中 N 是 s 的长度，M 是 p 的长度。\n        # 空间 O(C)，C 为字符集大小，本题最多 26 个字母。\n        #\n        # ⚠️ 易错点/误区：\n        # 1. 结果收集的位置：必须在窗口大小达到 p 的长度时进行判断，且记录的索引是当前的 left。\n        # 2. window 收缩条件：依然是 right - left >= len(p)，保证窗口长度严格等于 p 的长度。\n        need = {}\n        window = {}\n        for c in p:\n            need[c] = need.get(c, 0) + 1\n        left = 0\n        right = 0\n        valid = 0\n        result = []\n        while right < len(s):\n            c = s[right]  # 即将移入窗口的字符\n            right += 1    # 右移窗口\n            # 窗口内数据的一系列更新\n            if c in need:\n                window[c] = window.get(c, 0) + 1\n                if window[c] == need[c]:\n                    valid += 1\n            # 判断左侧窗口是否要收缩 (异位词长度必须等于 p 的长度)\n            while right - left >= len(p):\n                # 找到一个合法的异位词，将起始索引 left 加入结果集\n                if valid == len(need):\n                    result.append(left)\n                d = s[left]  # 即将移出窗口的字符\n                left += 1    # 左移窗口\n                # 窗口内数据的一系列更新\n                if d in need:\n                    if window[d] == need[d]:\n                        valid -= 1\n                    window[d] -= 1\n        return result"
  },
  {
    "id": "239",
    "slug": "239-滑动窗口最大值",
    "title": "滑动窗口最大值",
    "titleEn": "Sliding Window Maximum",
    "category": "滑动窗口",
    "difficulty": "困难",
    "topic": "单调队列",
    "completed": false,
    "leetcodeSlug": "sliding-window-maximum",
    "leetcodeUrl": "https://leetcode.cn/problems/sliding-window-maximum/",
    "acceptanceRate": 50.3,
    "solutionCount": 5366,
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
      "堆（优先队列）"
    ],
    "interviewPattern": "维护窗口内的计数和有效条件，右指针扩张，左指针只在条件满足或失效时收缩。",
    "thoughts": [
      "核心考点：单调队列",
      "维护窗口内的计数和有效条件，右指针扩张，左指针只在条件满足或失效时收缩。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：单调队列",
      "interviewSteps": [
        "先说明核心考点：单调队列。",
        "维护窗口内的计数和有效条件，右指针扩张，左指针只在条件满足或失效时收缩。",
        "关键词：滑动窗口 / 单调队列 / 队列 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
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
    "acceptanceRate": 46.7,
    "solutionCount": 3695,
    "companyTagCount": 101,
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
    "sourcePath": "hot100/0327/560.和为-k-的子数组.py",
    "lastUpdated": "2026-04-02",
    "lastUpdatedAt": "2026-04-02T07:06:05.956Z",
    "interviewPattern": "核心是频次表和窗口有效性，面试中要把 need/window、valid 或 missing 变量说清楚。",
    "thoughts": [
      "需二刷：前缀和 + 哈希表",
      "思路：prefix[j] - prefix[i-1]  k → 找之前有多少个前缀和等于 prefix_sum - k",
      "时间 O(n)，空间 O(n)",
      "1. 哈希表必须初始化 {0: 1}，代表空前缀（前缀和为0出现1次），",
      "2. 哈希表存的是「前缀和出现的次数」，不是 count"
    ],
    "pitfalls": [
      "否则会漏掉从下标0开始、和刚好等于k的子数组",
      "3. 必须先查找再记录（顺序不能反），否则当 k0 时会把自己算进去"
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
    "codePreview": "from collections import defaultdict\nclass Solution:\n    # 📌 需二刷：前缀和 + 哈希表\n    #\n    # 思路：prefix[j] - prefix[i-1] = k → 找之前有多少个前缀和等于 prefix_sum - k\n    # 时间 O(n)，空间 O(n)\n    #\n    # ⚠️ 易错点/误区：\n    # 1. 哈希表必须初始化 {0: 1}，代表空前缀（前缀和为0出现1次），\n    #    否则会漏掉从下标0开始、和刚好等于k的子数组\n    # 2. 哈希表存的是「前缀和出现的次数」，不是 count\n    # 3. 必须先查找再记录（顺序不能反），否则当 k=0 时会把自己算进去\n    def subarraySum(self, nums: List[int], k: int) -> int:\n        prefix_count = defaultdict(int)  # key: 前缀和, value: 出现次数\n        prefix_count[0] = 1             # 空前缀：和为0出现1次\n        prefix_sum = 0\n        count = 0\n        for num in nums:\n            prefix_sum += num                              # 累加当前前缀和\n            count += prefix_count[prefix_sum - k]          # 查：之前有几个前缀和 = prefix_sum - k\n            prefix_count[prefix_sum] += 1                  # 记：当前前缀和出现次数+1\n        return count"
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
    "acceptanceRate": 49.4,
    "solutionCount": 5630,
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
    "sourcePath": "76.最小覆盖子串.py",
    "lastUpdated": "2026-06-01",
    "lastUpdatedAt": "2026-06-01T12:40:05.533Z",
    "interviewPattern": "核心是频次表和窗口有效性，面试中要把 need/window、valid 或 missing 变量说清楚。",
    "thoughts": [
      "需二刷：[滑动窗口经典套路，寻找最小覆盖子串]",
      "思路：用 right 指针不断向右移动扩大窗口，直到窗口包含了 t 中所有字符。",
      "时间 O(N)，空间 O(C) (C为字符集大小)"
    ],
    "pitfalls": [
      "注意这里的返回值是 \"\" 而不是 \" \""
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
    "codePreview": "class Solution(object):\n    def minWindow(self, s, t):\n        \"\"\"\n        :type s: str\n        :type t: str\n        :rtype: str\n        \"\"\"\n        # 📌 需二刷：[滑动窗口经典套路，寻找最小覆盖子串]\n        #\n        # 思路：用 right 指针不断向右移动扩大窗口，直到窗口包含了 t 中所有字符。\n        #       然后用 left 指针向右移动缩小窗口，尽力找到更短的符合条件的子串。\n        # 时间 O(N)，空间 O(C) (C为字符集大小)\n        #\n        # ⚠️ 易错点/误区：\n        # 1. 找不到符合条件的子串时，题目要求返回空字符串 `\"\"`，而不是包含空格的 `\" \"`。\n        # 2. 窗口长度计算：此时 right 已经 += 1，所以窗口长度就是 right - left，不需要加一。\n        need, window = {}, {}\n        for c in t:\n            need[c] = need.get(c, 0) + 1\n        left = 0\n        right = 0 \n        valid = 0   # 记录窗口中已经满足 need 要求的字符种类数\n        start = 0   # 记录最小覆盖子串的起始位置\n        length = float('inf') # 记录最小覆盖子串的长度\n        while right < len(s):\n            # c 是将移入窗口的字符\n            c = s[right]\n            right += 1\n            # 进行窗口内数据的一系列更新\n            if c in need:\n                window[c] = window.get(c, 0) + 1\n                if window[c] == need[c]:\n                    valid += 1\n            # 判断左侧窗口是否要收缩 (当窗口涵盖了 t 中所有字符时)\n            while valid == len(need):\n                # 在这里更新最小覆盖子串\n                if right - left < length:\n                    start = left\n                    length = right - left\n                # d 是将移出窗口的字符\n                d = s[left]\n                left += 1\n                # 进行窗口内数据的一系列更新\n                if d in need:\n                    if window[d] == need[d]:\n                        valid -= 1\n                    window[d] -= 1\n        # 注意这里的返回值是 \"\" 而不是 \" \"\n        return \"\" if length == float('inf') else s[start: start + length]"
  },
  {
    "id": "239",
    "slug": "239-滑动窗口最大值",
    "title": "滑动窗口最大值",
    "titleEn": "Sliding Window Maximum",
    "category": "子串",
    "difficulty": "困难",
    "topic": "（同上，已在上方列出）",
    "completed": false,
    "leetcodeSlug": "sliding-window-maximum",
    "leetcodeUrl": "https://leetcode.cn/problems/sliding-window-maximum/",
    "acceptanceRate": 50.3,
    "solutionCount": 5366,
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
      "堆（优先队列）"
    ],
    "interviewPattern": "核心是频次表和窗口有效性，面试中要把 need/window、valid 或 missing 变量说清楚。",
    "thoughts": [
      "核心考点：（同上，已在上方列出）",
      "核心是频次表和窗口有效性，面试中要把 need/window、valid 或 missing 变量说清楚。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：（同上，已在上方列出）",
      "interviewSteps": [
        "先说明核心考点：（同上，已在上方列出）。",
        "核心是频次表和窗口有效性，面试中要把 need/window、valid 或 missing 变量说清楚。",
        "关键词：子串 / （同上，已在上方列出） / 队列 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
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
    "acceptanceRate": 56.8,
    "solutionCount": 10048,
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
    "sourcePath": "hot100/0320/53.最大子数组和.py",
    "lastUpdated": "2026-03-20",
    "lastUpdatedAt": "2026-03-20T09:22:34.855Z",
    "interviewPattern": "优先找一次遍历、前后缀、原地标记或排序后的结构性，避免暴力枚举。",
    "thoughts": [
      "需二刷：Kadane 算法（动态规划思想）",
      "思路：遍历数组，维护\"以当前元素结尾的最大子数组和\"(current_sum)",
      "时间 O(n)，空间 O(1)",
      "核心决策：加入之前的子数组 vs 从自己重新开始"
    ],
    "pitfalls": [
      "1. max_sum 不能初始化为 0，否则全负数数组（如 [-3,-2,-1]）会返回 0"
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
    "codePreview": "# 📌 需二刷：Kadane 算法（动态规划思想）\n#\n# 思路：遍历数组，维护\"以当前元素结尾的最大子数组和\"(current_sum)\n#       每一步做决策：是把当前元素加入之前的子数组，还是从当前元素重新开始\n#       如果之前的累积和是负数 → 拖后腿 → 从当前元素重新开始\n#       同时用 max_sum 追踪全局最大值\n#\n# 时间 O(n)，空间 O(1)\n#\n# ⚠️ 易错点/误区：\n# 1. max_sum 不能初始化为 0，否则全负数数组（如 [-3,-2,-1]）会返回 0\n#    → 应该初始化为 nums[0] 或 float('-inf')\n# 2. max_sum = max(current_sum, num) 是错的！current_sum >= num 恒成立\n#    这样等于每次都覆盖，没有在追踪\"全局\"最大值\n#    → 应该是 max_sum = max(max_sum, current_sum)\nclass Solution:\n    # ✅ 面试推荐写法\n    def maxSubArray(self, nums: List[int]) -> int:\n        current_sum = nums[0]  # 以当前元素结尾的最大子数组和\n        max_sum = nums[0]      # 全局最大子数组和\n        for num in nums[1:]:   # 从第二个元素开始\n            # 核心决策：加入之前的子数组 vs 从自己重新开始\n            current_sum = max(num, current_sum + num)\n            # 更新全局最大值\n            max_sum = max(max_sum, current_sum)\n        return max_sum"
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
    "acceptanceRate": 53.8,
    "solutionCount": 6758,
    "companyTagCount": 176,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "普通数组",
      "排序 + 合并",
      "数组",
      "排序"
    ],
    "sourcePath": "hot100/0323/56.合并区间.py",
    "lastUpdated": "2026-03-23",
    "lastUpdatedAt": "2026-03-23T12:59:37.793Z",
    "interviewPattern": "优先找一次遍历、前后缀、原地标记或排序后的结构性，避免暴力枚举。",
    "thoughts": [
      "思路：先按区间起点排序，然后遍历每个区间，",
      "时间 O(nlogn)，空间 O(n)"
    ],
    "pitfalls": [
      "和 result 最后一个区间比较，有重叠就合并（更新 end），否则直接加入",
      "2. 合并时 end 要取 max，不能直接赋值（如 [1,6] 和 [2,4]，end 应该是 6 不是 4）",
      "4. 用 result[-1] 获取最后一个区间，不能用 result[i-1]（result 和 intervals 长度不同）",
      "5. if/elif/else 三个分支只走一个，不能用连续的 if 导致重复处理"
    ],
    "solutionGuide": {
      "idea": "思路：先按区间起点排序，然后遍历每个区间，",
      "interviewSteps": [
        "先说明核心考点：排序 + 合并。",
        "优先找一次遍历、前后缀、原地标记或排序后的结构性，避免暴力枚举。",
        "关键词：普通数组 / 排序 + 合并 / 数组 / 排序。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "和 result 最后一个区间比较，有重叠就合并（更新 end），否则直接加入"
    },
    "codePreview": "# 📌 需二刷：排序 + 贪心合并\n#\n# 思路：先按区间起点排序，然后遍历每个区间，\n#       和 result 最后一个区间比较，有重叠就合并（更新 end），否则直接加入\n# 时间 O(nlogn)，空间 O(n)\n#\n# ⚠️ 易错点/误区：\n# 1. sort() 要加括号！.sort 只是引用方法，不会执行排序\n# 2. 合并时 end 要取 max，不能直接赋值（如 [1,6] 和 [2,4]，end 应该是 6 不是 4）\n# 3. 判断重叠用 <=（相等也算重叠，如 [1,3] 和 [3,5]）\n# 4. 用 result[-1] 获取最后一个区间，不能用 result[i-1]（result 和 intervals 长度不同）\n# 5. if/elif/else 三个分支只走一个，不能用连续的 if 导致重复处理\nclass Solution:\n    def merge(self, intervals: List[List[int]]) -> List[List[int]]:\n        result = []\n        intervals.sort()  # 按区间起点升序排序\n        for i in range(0, len(intervals)):\n            if not result:\n                # result 为空，直接放入第一个区间\n                result.append(intervals[i])\n            elif intervals[i][0] <= result[-1][1]:\n                # 有重叠：当前区间起点 <= result 最后区间的终点\n                # 合并：更新终点为两者的较大值\n                result[-1][1] = max(result[-1][1], intervals[i][1])\n            else:\n                # 无重叠：直接加入 result\n                result.append(intervals[i])\n        return result\n# ————————————————————————————————————\n# ✅ 面试推荐写法（更简洁，逻辑一样）：\n#\n# def merge(self, intervals):\n#     intervals.sort()\n#     result = []\n#     for interval in intervals:\n#         # 如果 result 为空 或 无重叠，直接加入\n#         if not result or interval[0] > result[-1][1]:\n#             result.append(interval)\n#         else:\n#             # 有重叠，合并\n#             result[-1][1] = max(result[-1][1], interval[1])\n#     return result\n#\n# 👆 推荐原因：\n# - 用 for interval in intervals 代替 for i in range(...)，更 Pythonic\n# - 把 \"空\" 和 \"无重叠\" 合并成一个条件，减少分支\n# ————————————————————————————————————"
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
    "acceptanceRate": 77.8,
    "solutionCount": 3857,
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
    "sourcePath": "hot100/0327/238.除了自身以外数组的乘积.py",
    "lastUpdated": "2026-03-27",
    "lastUpdatedAt": "2026-03-27T08:13:52.777Z",
    "interviewPattern": "优先找一次遍历、前后缀、原地标记或排序后的结构性，避免暴力枚举。",
    "thoughts": [
      "思路：answer[i]  i左边所有数的乘积 × i右边所有数的乘积",
      "时间 O(n)，空间 O(n)",
      "---------- 面试 follow-up：O(1) 额外空间优化版 ----------",
      "思路：复用 answer 数组先存前缀积，再用一个变量累积后缀积，边算边乘",
      "时间 O(n)，空间 O(1)（不算返回数组）"
    ],
    "pitfalls": [
      "2. right 数组要从右往左递推，range(n-2, -1, -1)，注意终点写 -1 才能包含下标 0"
    ],
    "solutionGuide": {
      "idea": "思路：answer[i]  i左边所有数的乘积 × i右边所有数的乘积",
      "interviewSteps": [
        "先说明核心考点：前缀积 / 后缀积。",
        "优先找一次遍历、前后缀、原地标记或排序后的结构性，避免暴力枚举。",
        "关键词：普通数组 / 前缀积 / 后缀积 / 数组 / 前缀和。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "2. right 数组要从右往左递推，range(n-2, -1, -1)，注意终点写 -1 才能包含下标 0"
    },
    "codePreview": "# 📌 需二刷：前缀积 × 后缀积\n#\n# 思路：answer[i] = i左边所有数的乘积 × i右边所有数的乘积\n# 时间 O(n)，空间 O(n)\n#\n# ⚠️ 易错点/误区：\n# 1. left[0] 和 right[n-1] 的初始值是 1（不是 0），因为\"没有元素\"的乘积是 1\n# 2. right 数组要从右往左递推，range(n-2, -1, -1)，注意终点写 -1 才能包含下标 0\n# 3. 递推公式：left[i] = left[i-1] * nums[i-1]（乘的是前一个元素，不是当前元素）\nclass Solution:\n    def productExceptSelf(self, nums: List[int]) -> List[int]:\n        n = len(nums)\n        # 前缀积：left[i] = nums[0] * nums[1] * ... * nums[i-1]\n        left = [0] * n\n        left[0] = 1  # 第0个元素左边没有数，乘积为1\n        for i in range(1, n):\n            left[i] = left[i - 1] * nums[i - 1]\n        # 后缀积：right[i] = nums[i+1] * nums[i+2] * ... * nums[n-1]\n        right = [0] * n\n        right[n - 1] = 1  # 最后一个元素右边没有数，乘积为1\n        for i in range(n - 2, -1, -1):\n            right[i] = right[i + 1] * nums[i + 1]\n        # 结果：左边乘积 × 右边乘积\n        answer = [0] * n\n        for i in range(n):\n            answer[i] = left[i] * right[i]\n        return answer\n# ---------- 面试 follow-up：O(1) 额外空间优化版 ----------\n# 思路：复用 answer 数组先存前缀积，再用一个变量累积后缀积，边算边乘\n# 时间 O(n)，空间 O(1)（不算返回数组）\nclass Solution2:\n    def productExceptSelf(self, nums: List[int]) -> List[int]:\n        n = len(nums)\n        answer = [1] * n\n        # 第一遍：从左到右，answer[i] 存 i 左边的前缀积\n        for i in range(1, n):\n            answer[i] = answer[i - 1] * nums[i - 1]\n        # 第二遍：从右到左，用变量累积后缀积，直接乘到 answer 上\n        right_product = 1\n        for i in range(n - 2, -1, -1):\n            right_product *= nums[i + 1]\n            answer[i] *= right_product\n        return answer"
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
    "acceptanceRate": 49.5,
    "solutionCount": 3811,
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
    "sourcePath": "hot100/0327/41.缺失的第一个正数.py",
    "lastUpdated": "2026-04-02",
    "lastUpdatedAt": "2026-04-02T09:02:39.200Z",
    "interviewPattern": "优先找一次遍历、前后缀、原地标记或排序后的结构性，避免暴力枚举。",
    "thoughts": [
      "需二刷：原地哈希 / 原地循环排序（Cyclic Sort）",
      "思路：把每个数 x 放到下标 x-1 的位置上，然后扫一遍找第一个 nums[i] ! i+1 的位置",
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
    "codePreview": "# 📌 需二刷：原地哈希 / 原地循环排序（Cyclic Sort）\n#\n# 思路：把每个数 x 放到下标 x-1 的位置上，然后扫一遍找第一个 nums[i] != i+1 的位置\n# 时间 O(n)，空间 O(1)\n#\n# 🎯 面试推荐：原地循环排序（本解法）\n#   - 面试官考察重点：能否在 O(1) 空间内解决\"找缺失\"问题\n#   - 核心思想：数组本身当哈希表，下标 i 存放值 i+1\n#   - 适用题型：找缺失/重复的正整数（41, 268, 287, 442, 448）\n#\n# ⚠️ 易错点/误区：\n# 1. 交换时赋值顺序：必须写 nums[nums[i]-1], nums[i] = nums[i], nums[nums[i]-1]\n#    而不是 nums[i], nums[nums[i]-1] = nums[nums[i]-1], nums[i]\n#    → Python 先算右边再赋值左边，左边从左到右赋值。如果先写 nums[i] = ...\n#      会导致 nums[i] 被改变后，nums[nums[i]-1] 就指向错误位置了\n# 2. while 循环条件中 nums[nums[i]-1] != nums[i] 是防止死循环\n#    → 如果目标位置已经有正确的值（说明有重复），必须停下来，否则无限交换\n# 3. 边界条件 1 <= nums[i] <= n：只处理 [1, n] 范围内的数\n#    → 负数、0、大于 n 的数不可能是答案（答案最大就是 n+1）\nclass Solution:\n    def firstMissingPositive(self, nums: List[int]) -> int:\n        n = len(nums)\n        # 第一步：原地循环排序，把每个数放到\"该去的位置\"\n        for i in range(n):\n            # 只要 nums[i] 在合法范围内，且还没放对位置，就交换\n            while 1 <= nums[i] <= n and nums[nums[i]-1] != nums[i]:\n                # 把 nums[i] 放到下标 nums[i]-1 处\n                nums[nums[i]-1], nums[i] = nums[i], nums[nums[i]-1]\n        # 第二步：扫描找到第一个没放对的位置\n        for i in range(n):\n            if nums[i] != i + 1:\n                return i + 1    # 下标 i 该放 i+1，但没放对 → i+1 缺失\n        return n + 1             # 1~n 全齐了，缺的是 n+1"
  },
  {
    "id": "189",
    "slug": "189-轮转数组",
    "title": "轮转数组",
    "titleEn": "Rotate Array",
    "category": "普通数组",
    "difficulty": "中等",
    "topic": "三次翻转",
    "completed": false,
    "leetcodeSlug": "rotate-array",
    "leetcodeUrl": "https://leetcode.cn/problems/rotate-array/",
    "acceptanceRate": 48.4,
    "solutionCount": 6263,
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
    "interviewPattern": "优先找一次遍历、前后缀、原地标记或排序后的结构性，避免暴力枚举。",
    "thoughts": [
      "核心考点：三次翻转",
      "优先找一次遍历、前后缀、原地标记或排序后的结构性，避免暴力枚举。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：三次翻转",
      "interviewSteps": [
        "先说明核心考点：三次翻转。",
        "优先找一次遍历、前后缀、原地标记或排序后的结构性，避免暴力枚举。",
        "关键词：普通数组 / 三次翻转 / 数组 / 数学。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "73",
    "slug": "73-矩阵置零",
    "title": "矩阵置零",
    "titleEn": "Set Matrix Zeroes",
    "category": "矩阵",
    "difficulty": "中等",
    "topic": "标记数组",
    "completed": true,
    "leetcodeSlug": "set-matrix-zeroes",
    "leetcodeUrl": "https://leetcode.cn/problems/set-matrix-zeroes/",
    "acceptanceRate": 71.6,
    "solutionCount": 3480,
    "companyTagCount": 59,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "矩阵",
      "标记数组",
      "数组",
      "哈希表"
    ],
    "sourcePath": "hot100/0327/73.矩阵置零.py",
    "lastUpdated": "2026-03-27",
    "lastUpdatedAt": "2026-03-27T13:11:08.095Z",
    "interviewPattern": "先定义坐标边界和访问顺序，任何原地操作都要说明覆盖风险。",
    "thoughts": [
      "思路：用两个 set 记录哪些行/列需要置零，再统一处理",
      "时间 O(m*n)，空间 O(m+n)",
      "需二刷：方法二——常量空间（进阶）",
      "思路：用矩阵的第 0 行当\"列标记\"，第 0 列当\"行标记\"，省掉额外 set",
      "时间 O(m*n)，空间 O(1)"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "solutionGuide": {
      "idea": "思路：用两个 set 记录哪些行/列需要置零，再统一处理",
      "interviewSteps": [
        "先说明核心考点：标记数组。",
        "先定义坐标边界和访问顺序，任何原地操作都要说明覆盖风险。",
        "关键词：矩阵 / 标记数组 / 数组 / 哈希表。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    },
    "codePreview": "# =============================================\n# ✅ 方法一：标记法（面试推荐，简洁易懂）\n# =============================================\n# 思路：用两个 set 记录哪些行/列需要置零，再统一处理\n# 时间 O(m*n)，空间 O(m+n)\n#\n# ⚠️ 易错点/误区：\n# 1. 条件是 or 不是 and：行或列有0就要置零\n# 2. == 是比较，= 才是赋值\n# 3. 遍历范围是矩阵大小，不是 set 的大小\nclass Solution:\n    def setZeroes(self, matrix: List[List[int]]) -> None:\n        m, n = len(matrix), len(matrix[0])\n        rows = set()\n        cols = set()\n        # 第一遍：记录哪些行/列有 0\n        for i in range(m):\n            for j in range(n):\n                if matrix[i][j] == 0:\n                    rows.add(i)\n                    cols.add(j)\n        # 第二遍：根据标记置零\n        for i in range(m):\n            for j in range(n):\n                if i in rows or j in cols:\n                    matrix[i][j] = 0\n# =============================================\n# 📌 需二刷：方法二——常量空间（进阶）\n# =============================================\n# 思路：用矩阵的第 0 行当\"列标记\"，第 0 列当\"行标记\"，省掉额外 set\n# 时间 O(m*n)，空间 O(1)\n#\n# 关键：第 0 行和第 0 列本身可能也有 0，所以需要一个额外变量 col0\n#       置零时必须从后往前，因为第 0 行/列是\"标记区\"，要最后才能动\n#\n# ⚠️ 易错点/误区：\n# 1. matrix[0][0] 同时属于第0行和第0列，只能标记一个，所以需要 col0 单独标记第0列\n# 2. 置零必须从后往前！如果从前往后会破坏第 0 行的列标记\n# 3. 标记阶段 j 从 1 开始（第0列用 col0 单独处理）\nclass Solution2:\n    def setZeroes(self, matrix: List[List[int]]) -> None:\n        m, n = len(matrix), len(matrix[0])\n        col0 = False  # 单独标记第 0 列是否需要置零\n        # 第一步：扫描矩阵，在第 0 行/列做标记\n        for i in range(m):\n            if matrix[i][0] == 0:\n                col0 = True           # 第 0 列本身有 0\n            for j in range(1, n):     # 从第 1 列开始（第 0 列用 col0 处理）\n                if matrix[i][j] == 0:\n                    matrix[i][0] = 0  # 行标记：第 i 行需要置零\n                    matrix[0][j] = 0  # 列标记：第 j 列需要置零\n        # 第二步：从后往前，根据标记置零（保护第 0 行/列的标记不被提前破坏）\n        for i in range(m - 1, -1, -1):\n            for j in range(n - 1, 0, -1):   # 注意：到 1 为止，第 0 列单独处理\n                if matrix[i][0] == 0 or matrix[0][j] == 0:\n                    matrix[i][j] = 0\n            if col0:                         # 最后处理第 0 列\n                matrix[i][0] = 0"
  },
  {
    "id": "48",
    "slug": "48-旋转图像",
    "title": "旋转图像",
    "titleEn": "Rotate Image",
    "category": "矩阵",
    "difficulty": "中等",
    "topic": "原地旋转 / 翻转",
    "completed": true,
    "leetcodeSlug": "rotate-image",
    "leetcodeUrl": "https://leetcode.cn/problems/rotate-image/",
    "acceptanceRate": 79.5,
    "solutionCount": 6845,
    "companyTagCount": 126,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "矩阵",
      "原地旋转 / 翻转",
      "数组",
      "数学"
    ],
    "sourcePath": "hot100/0322/48.旋转图像.py",
    "lastUpdated": "2026-03-22",
    "lastUpdatedAt": "2026-03-22T13:32:18.572Z",
    "interviewPattern": "先定义坐标边界和访问顺序，任何原地操作都要说明覆盖风险。",
    "thoughts": [
      "思路：逐层处理，每次对四个对称位置做循环交换，只遍历左上角 ~1/4 区域",
      "时间 O(n²)，空间 O(1)"
    ],
    "pitfalls": [
      "1. 映射公式是 (i,j)→(j,n-1-i)，不是 (j,n-i)，注意 0-indexed 要减 1",
      "2. 遍历范围必须缩小到 ~1/4，否则同一组位置会被重复旋转导致结果错误",
      "3. 四步赋值要从 loc4 开始存 tmp，逆着循环链赋值，否则值会被覆盖"
    ],
    "solutionGuide": {
      "idea": "思路：逐层处理，每次对四个对称位置做循环交换，只遍历左上角 ~1/4 区域",
      "interviewSteps": [
        "先说明核心考点：原地旋转 / 翻转。",
        "先定义坐标边界和访问顺序，任何原地操作都要说明覆盖风险。",
        "关键词：矩阵 / 原地旋转 / 翻转 / 数组 / 数学。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 映射公式是 (i,j)→(j,n-1-i)，不是 (j,n-i)，注意 0-indexed 要减 1"
    },
    "codePreview": "# 📌 需二刷：原地旋转的四元素循环交换 + 遍历范围控制\n#\n# 思路：逐层处理，每次对四个对称位置做循环交换，只遍历左上角 ~1/4 区域\n# 时间 O(n²)，空间 O(1)\n#\n# ⚠️ 易错点/误区：\n# 1. 映射公式是 (i,j)→(j,n-1-i)，不是 (j,n-i)，注意 0-indexed 要减 1\n# 2. 遍历范围必须缩小到 ~1/4，否则同一组位置会被重复旋转导致结果错误\n#    i: n//2, j: (n+1)//2（向上取整处理奇数 n 中心行多一个元素的情况）\n# 3. 四步赋值要从 loc4 开始存 tmp，逆着循环链赋值，否则值会被覆盖\nclass Solution:\n    def rotate(self, matrix: List[List[int]]) -> None:\n        \"\"\"\n        Do not return anything, modify matrix in-place instead.\n        \"\"\"\n        n = len(matrix[0])\n        # 只遍历左上角 ~1/4 区域，每次处理 4 个对称位置\n        for i in range(n // 2):\n            for j in range((n + 1) // 2):\n                # 四个位置的循环链：\n                # loc1 (i,j) → loc2 (j,n-1-i) → loc3 (n-1-i,n-1-j) → loc4 (n-1-j,i) → loc1\n                tmp = matrix[n-1-j][i]              # 暂存 loc4\n                matrix[n-1-j][i] = matrix[n-1-i][n-1-j]    # loc4 ← loc3\n                matrix[n-1-i][n-1-j] = matrix[j][n-1-i]    # loc3 ← loc2\n                matrix[j][n-1-i] = matrix[i][j]             # loc2 ← loc1\n                matrix[i][j] = tmp                           # loc1 ← tmp(原 loc4)"
  },
  {
    "id": "54",
    "slug": "54-螺旋矩阵",
    "title": "螺旋矩阵",
    "titleEn": "Spiral Matrix",
    "category": "矩阵",
    "difficulty": "中等",
    "topic": "模拟遍历",
    "completed": false,
    "leetcodeSlug": "spiral-matrix",
    "leetcodeUrl": "https://leetcode.cn/problems/spiral-matrix/",
    "acceptanceRate": 55.4,
    "solutionCount": 7075,
    "companyTagCount": 151,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "矩阵",
      "模拟遍历",
      "数组",
      "模拟"
    ],
    "interviewPattern": "先定义坐标边界和访问顺序，任何原地操作都要说明覆盖风险。",
    "thoughts": [
      "核心考点：模拟遍历",
      "先定义坐标边界和访问顺序，任何原地操作都要说明覆盖风险。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：模拟遍历",
      "interviewSteps": [
        "先说明核心考点：模拟遍历。",
        "先定义坐标边界和访问顺序，任何原地操作都要说明覆盖风险。",
        "关键词：矩阵 / 模拟遍历 / 数组 / 模拟。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "240",
    "slug": "240-搜索二维矩阵-ii",
    "title": "搜索二维矩阵 II",
    "titleEn": "Search a 2D Matrix II",
    "category": "矩阵",
    "difficulty": "中等",
    "topic": "Z 字形搜索",
    "completed": false,
    "leetcodeSlug": "search-a-2d-matrix-ii",
    "leetcodeUrl": "https://leetcode.cn/problems/search-a-2d-matrix-ii/",
    "acceptanceRate": 57.3,
    "solutionCount": 2784,
    "companyTagCount": 82,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "矩阵",
      "Z 字形搜索",
      "数组",
      "二分查找",
      "分治"
    ],
    "interviewPattern": "先定义坐标边界和访问顺序，任何原地操作都要说明覆盖风险。",
    "thoughts": [
      "核心考点：Z 字形搜索",
      "先定义坐标边界和访问顺序，任何原地操作都要说明覆盖风险。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：Z 字形搜索",
      "interviewSteps": [
        "先说明核心考点：Z 字形搜索。",
        "先定义坐标边界和访问顺序，任何原地操作都要说明覆盖风险。",
        "关键词：矩阵 / Z 字形搜索 / 数组 / 二分查找。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "160",
    "slug": "160-相交链表",
    "title": "相交链表",
    "titleEn": "Intersection of Two Linked Lists",
    "category": "链表",
    "difficulty": "简单",
    "topic": "双指针",
    "completed": true,
    "leetcodeSlug": "intersection-of-two-linked-lists",
    "leetcodeUrl": "https://leetcode.cn/problems/intersection-of-two-linked-lists/",
    "acceptanceRate": 68.4,
    "solutionCount": 5844,
    "companyTagCount": 90,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "链表",
      "双指针",
      "哈希表"
    ],
    "sourcePath": "hot100/0316/160.相交链表.py",
    "lastUpdated": "2026-03-16",
    "lastUpdatedAt": "2026-03-16T12:48:28.757Z",
    "interviewPattern": "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
    "thoughts": [
      "思路：双指针法",
      "时间 O(m+n)  空间 O(1)"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "solutionGuide": {
      "idea": "思路：双指针法",
      "interviewSteps": [
        "先说明核心考点：双指针。",
        "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
        "关键词：链表 / 双指针 / 哈希表。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    },
    "codePreview": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n# 思路：双指针法\n# 两个指针分别从 A、B 链表出发，走完自己的链表后跳到对方的链表继续走\n# 因为两者总路程相同（lenA + lenB），所以一定会在交点相遇\n# 如果不相交，两者会同时到达 None，循环也会正常结束\n# 时间 O(m+n)  空间 O(1)\nclass Solution:\n    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:\n        a, b = headA, headB               # 双指针分别指向两条链表的头\n        while a != b:                      # 还没相遇就继续走\n            a = a.next if a else headB     # a 走到末尾就跳到 B 链表头\n            b = b.next if b else headA     # b 走到末尾就跳到 A 链表头\n        return a                           # 相遇点即交点，或 None（不相交）"
  },
  {
    "id": "206",
    "slug": "206-反转链表",
    "title": "反转链表",
    "titleEn": "Reverse Linked List",
    "category": "链表",
    "difficulty": "简单",
    "topic": "迭代 / 递归",
    "completed": true,
    "leetcodeSlug": "reverse-linked-list",
    "leetcodeUrl": "https://leetcode.cn/problems/reverse-linked-list/",
    "acceptanceRate": 76.5,
    "solutionCount": 14880,
    "companyTagCount": 219,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "链表",
      "迭代 / 递归",
      "递归"
    ],
    "sourcePath": "hot100/0316/206.反转链表.py",
    "lastUpdated": "2026-03-16",
    "lastUpdatedAt": "2026-03-16T13:17:51.544Z",
    "interviewPattern": "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
    "thoughts": [
      "思路：栈（后进先出）",
      "把所有节点压入栈，再依次弹出重新串联，顺序自然就反了",
      "时间 O(n)  空间 O(n)（栈存了所有节点）",
      "# 第一步：遍历链表，所有节点入栈",
      "# 第二步：弹出栈顶作为新头，依次串起来",
      "new_head  stack.pop()           # 栈顶就是原链表的最后一个节点"
    ],
    "pitfalls": [
      "把所有节点压入栈，再依次弹出重新串联，顺序自然就反了",
      "if not head:                     # 边界情况：空链表直接返回",
      "cur.next  None                  #  原头节点的 next 要断开，否则成环"
    ],
    "solutionGuide": {
      "idea": "思路：栈（后进先出）",
      "interviewSteps": [
        "先说明核心考点：迭代 / 递归。",
        "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
        "关键词：链表 / 迭代 / 递归 / 递归。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "把所有节点压入栈，再依次弹出重新串联，顺序自然就反了"
    },
    "codePreview": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\n# 思路：栈（后进先出）\n# 把所有节点压入栈，再依次弹出重新串联，顺序自然就反了\n# 时间 O(n)  空间 O(n)（栈存了所有节点）\n# class Solution:\n#     def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:\n#         if not head:                     # 边界情况：空链表直接返回\n#             return None\n#         # 第一步：遍历链表，所有节点入栈\n#         stack = []\n#         cur = head\n#         while cur:\n#             stack.append(cur)\n#             cur = cur.next\n#         # 第二步：弹出栈顶作为新头，依次串起来\n#         new_head = stack.pop()           # 栈顶就是原链表的最后一个节点\n#         cur = new_head\n#         while stack:\n#             cur.next = stack.pop()       # 把弹出的节点接到 cur 后面\n#             cur = cur.next               # cur 往后走一步\n#         cur.next = None                  # ⚠️ 原头节点的 next 要断开，否则成环\n#         return new_head\n# 原地反转\nclass Solution:\n    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        cur = head\n        prev = None\n        while cur:\n            nxt = cur.next\n            cur.next = prev\n            prev = cur\n            cur = nxt\n        return prev"
  },
  {
    "id": "234",
    "slug": "234-回文链表",
    "title": "回文链表",
    "titleEn": "Palindrome Linked List",
    "category": "链表",
    "difficulty": "简单",
    "topic": "快慢指针 + 反转",
    "completed": true,
    "leetcodeSlug": "palindrome-linked-list",
    "leetcodeUrl": "https://leetcode.cn/problems/palindrome-linked-list/",
    "acceptanceRate": 58.4,
    "solutionCount": 5361,
    "companyTagCount": 95,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "链表",
      "快慢指针 + 反转",
      "栈",
      "递归",
      "双指针"
    ],
    "sourcePath": "hot100/0317/234.回文链表.py",
    "lastUpdated": "2026-03-17",
    "lastUpdatedAt": "2026-03-17T14:29:00.564Z",
    "interviewPattern": "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
    "thoughts": [
      "需二刷：快慢指针 + 反转链表是链表题的核心技巧，务必熟练掌握",
      "思路：快慢指针找中点 → 反转后半链表 → 逐一比较",
      "时间 O(n)，空间 O(1)",
      "--- 法一：转数组（简单直观，空间 O(n)）---",
      "--- 法二：快慢指针 + 反转后半链表（最优，空间 O(1)）---"
    ],
    "pitfalls": [
      "2. 反转链表时要用临时变量 nxt 保存 slow.next，否则链会断"
    ],
    "solutionGuide": {
      "idea": "需二刷：快慢指针 + 反转链表是链表题的核心技巧，务必熟练掌握",
      "interviewSteps": [
        "先说明核心考点：快慢指针 + 反转。",
        "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
        "关键词：链表 / 快慢指针 + 反转 / 栈 / 递归。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "2. 反转链表时要用临时变量 nxt 保存 slow.next，否则链会断"
    },
    "codePreview": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\n# 📌 需二刷：快慢指针 + 反转链表是链表题的核心技巧，务必熟练掌握\n#\n# 思路：快慢指针找中点 → 反转后半链表 → 逐一比较\n# 时间 O(n)，空间 O(1)\n#\n# ⚠️ 易错点/误区：\n# 1. 快慢指针的终止条件是 fast and fast.next，两个都要判断（偶数/奇数长度）\n# 2. 反转链表时要用临时变量 nxt 保存 slow.next，否则链会断\n# 3. 比较阶段用 right 控制循环，因为后半长度 ≤ 前半（奇数时中间节点归后半，反转后多一个）\n# 4. left, right = head, prev 是元组解包赋值，等价于分别赋值\nclass Solution:\n    def isPalindrome(self, head: Optional[ListNode]) -> bool:\n        # --- 法一：转数组（简单直观，空间 O(n)）---\n        # vals = []\n        # while head:\n        #     vals.append(head.val)\n        #     head = head.next\n        # return vals == vals[::-1]\n        # --- 法二：快慢指针 + 反转后半链表（最优，空间 O(1)）---\n        # 第一步：快慢指针找中点\n        # fast 走两步，slow 走一步，fast 到底时 slow 在中间\n        fast = slow = head\n        while fast and fast.next:\n            slow = slow.next\n            fast = fast.next.next\n        # 第二步：反转后半部分链表\n        # prev 最终指向反转后的头节点\n        prev = None\n        while slow:\n            nxt = slow.next      # 先保存下一个节点\n            slow.next = prev     # 反转指向\n            prev = slow          # prev 前进\n            slow = nxt           # slow 前进\n        # 第三步：从两端同时遍历比较\n        left, right = head, prev\n        while right:             # right 是较短的那半，用它控制循环\n            if left.val != right.val:\n                return False\n            left = left.next\n            right = right.next\n        return True"
  },
  {
    "id": "141",
    "slug": "141-环形链表",
    "title": "环形链表",
    "titleEn": "Linked List Cycle",
    "category": "链表",
    "difficulty": "简单",
    "topic": "快慢指针",
    "completed": true,
    "leetcodeSlug": "linked-list-cycle",
    "leetcodeUrl": "https://leetcode.cn/problems/linked-list-cycle/",
    "acceptanceRate": 54.9,
    "solutionCount": 7368,
    "companyTagCount": 132,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "链表",
      "快慢指针",
      "哈希表",
      "双指针"
    ],
    "sourcePath": "hot100/0317/141.环形链表.py",
    "lastUpdated": "2026-03-17",
    "lastUpdatedAt": "2026-03-17T15:31:19.523Z",
    "interviewPattern": "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
    "thoughts": [
      "思路：快指针走2步，慢指针走1步，有环则必相遇；无环则快指针先到 None",
      "时间 O(n)，空间 O(1)"
    ],
    "pitfalls": [
      "1. 循环条件必须是 while fast and fast.next，不能写 while fast.next.next",
      "→ 如果 fast 是 None，访问 .next 会报 AttributeError（本次踩坑）",
      "3. 不能用数组存节点然后判断，有环会导致 while 死循环，内存爆掉（本次踩坑）",
      "4. slow ! fast 时应该继续循环，不能直接 return，否则第一轮就退出了（本次踩坑）"
    ],
    "solutionGuide": {
      "idea": "思路：快指针走2步，慢指针走1步，有环则必相遇；无环则快指针先到 None",
      "interviewSteps": [
        "先说明核心考点：快慢指针。",
        "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
        "关键词：链表 / 快慢指针 / 哈希表 / 双指针。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 循环条件必须是 while fast and fast.next，不能写 while fast.next.next"
    },
    "codePreview": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n# 📌 需二刷：快慢指针判环（龟兔赛跑），和 234 题共用同一技巧\n#\n# 思路：快指针走2步，慢指针走1步，有环则必相遇；无环则快指针先到 None\n# 时间 O(n)，空间 O(1)\n#\n# ⚠️ 易错点/误区：\n# 1. 循环条件必须是 while fast and fast.next，不能写 while fast.next.next\n#    → 如果 fast 是 None，访问 .next 会报 AttributeError（本次踩坑）\n# 2. and 有短路特性：fast 为 None 时，fast.next 不会被执行，避免崩溃\n# 3. 不能用数组存节点然后判断，有环会导致 while 死循环，内存爆掉（本次踩坑）\n# 4. slow != fast 时应该继续循环，不能直接 return，否则第一轮就退出了（本次踩坑）\nclass Solution:\n    def hasCycle(self, head: Optional[ListNode]) -> bool:\n        slow = fast = head\n        while fast and fast.next:  # 保证 fast 能安全走两步\n            slow = slow.next       # 慢指针走 1 步\n            fast = fast.next.next  # 快指针走 2 步\n            if slow == fast:       # 相遇 → 有环\n                return True\n        return False               # fast 到底了 → 无环"
  },
  {
    "id": "142",
    "slug": "142-环形链表-ii",
    "title": "环形链表 II",
    "titleEn": "Linked List Cycle II",
    "category": "链表",
    "difficulty": "中等",
    "topic": "快慢指针 + 数学",
    "completed": true,
    "leetcodeSlug": "linked-list-cycle-ii",
    "leetcodeUrl": "https://leetcode.cn/problems/linked-list-cycle-ii/",
    "acceptanceRate": 63.1,
    "solutionCount": 6110,
    "companyTagCount": 83,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "链表",
      "快慢指针 + 数学",
      "哈希表",
      "双指针"
    ],
    "sourcePath": "hot100/0320/142.环形链表-ii.py",
    "lastUpdated": "2026-03-20",
    "lastUpdatedAt": "2026-03-20T11:18:37.099Z",
    "interviewPattern": "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
    "thoughts": [
      "思路：两步走 —— ① 快慢指针判环并找到相遇点 ② 双指针从 head 和相遇点同速走，再次相遇即入口",
      "时间 O(n)，空间 O(1)"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "solutionGuide": {
      "idea": "思路：两步走 —— ① 快慢指针判环并找到相遇点 ② 双指针从 head 和相遇点同速走，再次相遇即入口",
      "interviewSteps": [
        "先说明核心考点：快慢指针 + 数学。",
        "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
        "关键词：链表 / 快慢指针 + 数学 / 哈希表 / 双指针。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    },
    "codePreview": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n# 📌 需二刷：快慢指针找环入口的数学推导\n#\n# 思路：两步走 —— ① 快慢指针判环并找到相遇点 ② 双指针从 head 和相遇点同速走，再次相遇即入口\n# 时间 O(n)，空间 O(1)\n#\n# 关键推导：相遇时 fast 走了 2(a+b)，也走了 a+b+nL\n#   → a+b = nL → a = nL-b\n#   → 从 head 走 a 步 = 从相遇点走 a 步，都到达环入口\n#\n# ⚠️ 易错点/误区：\n# 1. return 的位置：return ans 要在内层 while 之后（找到入口才返回），\n#    return None 要在外层 while 之后（循环结束才确认无环）\n# 2. 口诀：return 放在\"让你知道答案的那个循环\"的外面\nclass Solution:\n    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        fast = slow = ans = head\n        while fast and fast.next:\n            slow = slow.next             # 慢指针走 1 步\n            fast = fast.next.next        # 快指针走 2 步\n            if slow == fast:             # 相遇，说明有环\n                while ans != slow:       # 找环入口：ans 从 head 出发，slow 从相遇点出发\n                    ans = ans.next\n                    slow = slow.next\n                return ans               # ans == slow 时就是环入口\n        return None                      # 外层循环结束，无环"
  },
  {
    "id": "21",
    "slug": "21-合并两个有序链表",
    "title": "合并两个有序链表",
    "titleEn": "Merge Two Sorted Lists",
    "category": "链表",
    "difficulty": "简单",
    "topic": "递归 / 迭代",
    "completed": true,
    "leetcodeSlug": "merge-two-sorted-lists",
    "leetcodeUrl": "https://leetcode.cn/problems/merge-two-sorted-lists/",
    "acceptanceRate": 68.2,
    "solutionCount": 10014,
    "companyTagCount": 218,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "链表",
      "递归 / 迭代",
      "递归"
    ],
    "sourcePath": "hot100/0318/21.合并两个有序链表.py",
    "lastUpdated": "2026-03-18",
    "lastUpdatedAt": "2026-03-18T15:13:47.783Z",
    "interviewPattern": "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
    "thoughts": [
      "思路：利用两个链表已有序的特性，每次取较小的节点拼接到结果链表",
      "方法一：迭代（dummy 虚拟头节点 + 双指针） 时间 O(m+n)，空间 O(1)",
      "方法二：递归，每次比较头节点，较小的 .next 指向剩余部分的合并结果 时间 O(m+n)，空间 O(m+n)",
      "3. 递归解法中，终止条件必须放在最前面（否则访问 None.val 会报错）",
      "4. 递归解法中，return 的是当前节点本身（如 list1），不是 list1.next",
      "方法一：迭代（dummy 虚拟头节点 + 双指针）",
      "方法二：递归"
    ],
    "pitfalls": [
      "1. 初始化结果链表时不能用 ans  None，因为 None 没有 .next 属性",
      "2. 尾部拼接剩余链表时注意 a/b 不要写反",
      "3. 递归解法中，终止条件必须放在最前面（否则访问 None.val 会报错）"
    ],
    "solutionGuide": {
      "idea": "思路：利用两个链表已有序的特性，每次取较小的节点拼接到结果链表",
      "interviewSteps": [
        "先说明核心考点：递归 / 迭代。",
        "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
        "关键词：链表 / 递归 / 迭代 / 递归。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 初始化结果链表时不能用 ans  None，因为 None 没有 .next 属性"
    },
    "codePreview": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\n# 思路：利用两个链表已有序的特性，每次取较小的节点拼接到结果链表\n# 方法一：迭代（dummy 虚拟头节点 + 双指针） 时间 O(m+n)，空间 O(1)\n# 方法二：递归，每次比较头节点，较小的 .next 指向剩余部分的合并结果 时间 O(m+n)，空间 O(m+n)\n#\n# ⚠️ 易错点/误区：\n# 1. 初始化结果链表时不能用 ans = None，因为 None 没有 .next 属性\n#    → 用 dummy 虚拟头节点统一处理\n# 2. 尾部拼接剩余链表时注意 a/b 不要写反\n# 3. 递归解法中，终止条件必须放在最前面（否则访问 None.val 会报错）\n# 4. 递归解法中，return 的是当前节点本身（如 list1），不是 list1.next\nclass Solution:\n    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:\n        # ===== 方法一：迭代（dummy 虚拟头节点 + 双指针）=====\n        # a = list1\n        # b = list2\n        # dummy = ListNode(-1)          # 虚拟头节点，避免单独处理第一个节点\n        # cur = dummy                   # cur 追踪结果链表的尾部\n        # while a and b:                # 两个链表都还有节点时，比较取较小的\n        #     if a.val < b.val:\n        #         cur.next = a\n        #         a = a.next\n        #     else:\n        #         cur.next = b\n        #         b = b.next\n        #     cur = cur.next\n        # cur.next = a or b             # 剩余部分直接拼接（已有序，无需逐个比较）\n        # return dummy.next             # dummy.next 才是真正的头节点\n        # ===== 方法二：递归 =====\n        # 终止条件：某个链表为空，直接返回另一个\n        if not list1: return list2\n        if not list2: return list1\n        # 比较头节点，较小的作为当前头，其 next 指向剩余部分合并的结果\n        if list1.val < list2.val:\n            list1.next = self.mergeTwoLists(list1.next, list2)\n            return list1            # 返回当前节点本身（它是这一层的头）\n        else:\n            list2.next = self.mergeTwoLists(list1, list2.next)\n            return list2"
  },
  {
    "id": "2",
    "slug": "2-两数相加",
    "title": "两数相加",
    "titleEn": "Add Two Numbers",
    "category": "链表",
    "difficulty": "中等",
    "topic": "链表遍历 + 进位",
    "completed": true,
    "leetcodeSlug": "add-two-numbers",
    "leetcodeUrl": "https://leetcode.cn/problems/add-two-numbers/",
    "acceptanceRate": 47,
    "solutionCount": 16366,
    "companyTagCount": 232,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "链表",
      "链表遍历 + 进位",
      "递归",
      "数学"
    ],
    "sourcePath": "2.两数相加.py",
    "lastUpdated": "2026-04-10",
    "lastUpdatedAt": "2026-04-10T13:57:00.054Z",
    "interviewPattern": "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
    "thoughts": [
      "核心考点：链表遍历 + 进位",
      "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "solutionGuide": {
      "idea": "核心考点：链表遍历 + 进位",
      "interviewSteps": [
        "先说明核心考点：链表遍历 + 进位。",
        "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
        "关键词：链表 / 链表遍历 + 进位 / 递归 / 数学。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    },
    "codePreview": "# Definition for singly-linked list.\nclass ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\nclass Solution:\n    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:\n        dummy = ListNode(0)\n        cur = dummy\n        carry = 0\n        while l1 or l2 or carry:\n            if l1:\n                v1 = l1.val\n            else:\n                v1 = 0\n            if l2:\n                v2 = l2.val\n            else:\n                v2 = 0\n            tmp = v1 + v2 + carry\n            cur.next = ListNode(tmp % 10)"
  },
  {
    "id": "19",
    "slug": "19-删除链表的倒数第-n-个结点",
    "title": "删除链表的倒数第 N 个结点",
    "titleEn": "Remove Nth Node From End of List",
    "category": "链表",
    "difficulty": "中等",
    "topic": "快慢指针",
    "completed": false,
    "leetcodeSlug": "remove-nth-node-from-end-of-list",
    "leetcodeUrl": "https://leetcode.cn/problems/remove-nth-node-from-end-of-list/",
    "acceptanceRate": 53.5,
    "solutionCount": 11338,
    "companyTagCount": 131,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "链表",
      "快慢指针",
      "双指针"
    ],
    "interviewPattern": "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
    "thoughts": [
      "核心考点：快慢指针",
      "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：快慢指针",
      "interviewSteps": [
        "先说明核心考点：快慢指针。",
        "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
        "关键词：链表 / 快慢指针 / 双指针。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "24",
    "slug": "24-两两交换链表中的节点",
    "title": "两两交换链表中的节点",
    "titleEn": "Swap Nodes in Pairs",
    "category": "链表",
    "difficulty": "中等",
    "topic": "递归 / 迭代",
    "completed": false,
    "leetcodeSlug": "swap-nodes-in-pairs",
    "leetcodeUrl": "https://leetcode.cn/problems/swap-nodes-in-pairs/",
    "acceptanceRate": 75.1,
    "solutionCount": 7163,
    "companyTagCount": 88,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "链表",
      "递归 / 迭代",
      "递归"
    ],
    "interviewPattern": "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
    "thoughts": [
      "核心考点：递归 / 迭代",
      "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：递归 / 迭代",
      "interviewSteps": [
        "先说明核心考点：递归 / 迭代。",
        "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
        "关键词：链表 / 递归 / 迭代 / 递归。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "25",
    "slug": "25-k-个一组翻转链表",
    "title": "K 个一组翻转链表",
    "titleEn": "Reverse Nodes in k-Group",
    "category": "链表",
    "difficulty": "困难",
    "topic": "递归",
    "completed": false,
    "leetcodeSlug": "reverse-nodes-in-k-group",
    "leetcodeUrl": "https://leetcode.cn/problems/reverse-nodes-in-k-group/",
    "acceptanceRate": 70,
    "solutionCount": 6335,
    "companyTagCount": 98,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "链表",
      "递归"
    ],
    "interviewPattern": "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
    "thoughts": [
      "核心考点：递归",
      "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：递归",
      "interviewSteps": [
        "先说明核心考点：递归。",
        "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
        "关键词：链表 / 递归。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "138",
    "slug": "138-随机链表的复制",
    "title": "随机链表的复制",
    "titleEn": "Copy List with Random Pointer",
    "category": "链表",
    "difficulty": "中等",
    "topic": "哈希表 / 节点拆分",
    "completed": false,
    "leetcodeSlug": "copy-list-with-random-pointer",
    "leetcodeUrl": "https://leetcode.cn/problems/copy-list-with-random-pointer/",
    "acceptanceRate": 70.6,
    "solutionCount": 2682,
    "companyTagCount": 79,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "链表",
      "哈希表 / 节点拆分",
      "哈希表"
    ],
    "interviewPattern": "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
    "thoughts": [
      "核心考点：哈希表 / 节点拆分",
      "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：哈希表 / 节点拆分",
      "interviewSteps": [
        "先说明核心考点：哈希表 / 节点拆分。",
        "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
        "关键词：链表 / 哈希表 / 节点拆分 / 哈希表。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "148",
    "slug": "148-排序链表",
    "title": "排序链表",
    "titleEn": "Sort List",
    "category": "链表",
    "difficulty": "中等",
    "topic": "归并排序",
    "completed": false,
    "leetcodeSlug": "sort-list",
    "leetcodeUrl": "https://leetcode.cn/problems/sort-list/",
    "acceptanceRate": 67.7,
    "solutionCount": 3620,
    "companyTagCount": 89,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "链表",
      "归并排序",
      "双指针",
      "分治",
      "排序"
    ],
    "interviewPattern": "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
    "thoughts": [
      "核心考点：归并排序",
      "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：归并排序",
      "interviewSteps": [
        "先说明核心考点：归并排序。",
        "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
        "关键词：链表 / 归并排序 / 双指针 / 分治。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "94",
    "slug": "94-二叉树的中序遍历",
    "title": "二叉树的中序遍历",
    "titleEn": "Binary Tree Inorder Traversal",
    "category": "二叉树",
    "difficulty": "简单",
    "topic": "递归 / 栈",
    "completed": true,
    "leetcodeSlug": "binary-tree-inorder-traversal",
    "leetcodeUrl": "https://leetcode.cn/problems/binary-tree-inorder-traversal/",
    "acceptanceRate": 78.3,
    "solutionCount": 6140,
    "companyTagCount": 88,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "递归 / 栈",
      "栈",
      "树",
      "深度优先搜索"
    ],
    "sourcePath": "hot100/0316/94.二叉树的中序遍历.py",
    "lastUpdated": "2026-03-16",
    "lastUpdatedAt": "2026-03-16T10:38:44.978Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "解法一：递归（直观好理解）",
      "思路：对每个节点，先递归左子树，再记录自己，最后递归右子树",
      "时间 O(n)  空间 O(n)",
      "--- 递归方法 ---",
      "dfs(node.left)              # 1. 先递归左子树",
      "dfs(node.right)             # 3. 再递归右子树",
      "解法二：迭代（用栈模拟递归）"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "solutionGuide": {
      "idea": "解法一：递归（直观好理解）",
      "interviewSteps": [
        "先说明核心考点：递归 / 栈。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / 递归 / 栈 / 栈 / 树。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    },
    "codePreview": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\n# --- 递归方法 ---\n# class Solution:\n#     def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\n#         result = []\n#         def dfs(node):\n#             if not node: return         # 终止条件：空节点\n#             dfs(node.left)              # 1. 先递归左子树\n#             result.append(node.val)     # 2. 记录当前节点（根在中间）\n#             dfs(node.right)             # 3. 再递归右子树\n#         dfs(root)\n#         return result\n# ═══════════════════════════════════════════\n# 解法二：迭代（用栈模拟递归）\n# 思路：不断\"向左走到底→弹出记录→转向右子树\"\n# 时间 O(n)  空间 O(n)\n# ═══════════════════════════════════════════\n# --- 迭代方法：栈 ---\nclass Solution:\n    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\n        result = []\n        stack = []\n        node = root\n        while node or stack:               # 还有节点未处理就继续\n            while node:                    # 一路向左走到底\n                stack.append(node)         # 沿途节点全部压栈\n                node = node.left\n            node = stack.pop()             # 到底了，弹出最左节点\n            result.append(node.val)        # 记录值\n            node = node.right              # 转向右子树，重复上述过程\n        return result"
  },
  {
    "id": "104",
    "slug": "104-二叉树的最大深度",
    "title": "二叉树的最大深度",
    "titleEn": "Maximum Depth of Binary Tree",
    "category": "二叉树",
    "difficulty": "简单",
    "topic": "DFS",
    "completed": true,
    "leetcodeSlug": "maximum-depth-of-binary-tree",
    "leetcodeUrl": "https://leetcode.cn/problems/maximum-depth-of-binary-tree/",
    "acceptanceRate": 79,
    "solutionCount": 7383,
    "companyTagCount": 103,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "DFS",
      "树",
      "深度优先搜索",
      "广度优先搜索"
    ],
    "sourcePath": "hot100/0319/104.二叉树的最大深度.py",
    "lastUpdated": "2026-03-19",
    "lastUpdatedAt": "2026-03-19T10:58:09.850Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "思路：递归求深度，当前节点深度  max(左子树深度, 右子树深度) + 1",
      "时间 O(n)，空间 O(h)，h 为树高",
      "2. 类方法递归调用要用 self.maxDepth()，不能直接写 maxDepth()"
    ],
    "pitfalls": [
      "1. 别忘了 +1（当前节点自己也算一层）",
      "2. 类方法递归调用要用 self.maxDepth()，不能直接写 maxDepth()"
    ],
    "solutionGuide": {
      "idea": "思路：递归求深度，当前节点深度  max(左子树深度, 右子树深度) + 1",
      "interviewSteps": [
        "先说明核心考点：DFS。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / DFS / 树 / 深度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 别忘了 +1（当前节点自己也算一层）"
    },
    "codePreview": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\n# 思路：递归求深度，当前节点深度 = max(左子树深度, 右子树深度) + 1\n# 时间 O(n)，空间 O(h)，h 为树高\n#\n# ⚠️ 易错点/误区：\n# 1. 别忘了 +1（当前节点自己也算一层）\n# 2. 类方法递归调用要用 self.maxDepth()，不能直接写 maxDepth()\nclass Solution:\n    def maxDepth(self, root: Optional[TreeNode]) -> int:\n        if not root: return 0                        # 空节点深度为 0\n        left = self.maxDepth(root.left)              # 左子树深度\n        right = self.maxDepth(root.right)            # 右子树深度\n        return max(left, right) + 1                  # 取更深的 + 当前层"
  },
  {
    "id": "226",
    "slug": "226-翻转二叉树",
    "title": "翻转二叉树",
    "titleEn": "Invert Binary Tree",
    "category": "二叉树",
    "difficulty": "简单",
    "topic": "递归",
    "completed": true,
    "leetcodeSlug": "invert-binary-tree",
    "leetcodeUrl": "https://leetcode.cn/problems/invert-binary-tree/",
    "acceptanceRate": 82.5,
    "solutionCount": 6046,
    "companyTagCount": 83,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "递归",
      "树",
      "深度优先搜索",
      "广度优先搜索"
    ],
    "sourcePath": "hot100/0319/226.翻转二叉树.py",
    "lastUpdated": "2026-03-19",
    "lastUpdatedAt": "2026-03-19T08:14:32.715Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "思路：翻转  每个节点的左右孩子互换，然后递归翻转子树",
      "时间 O(n)，空间 O(h)，h 为树高（递归栈深度）",
      "递归"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "solutionGuide": {
      "idea": "思路：翻转  每个节点的左右孩子互换，然后递归翻转子树",
      "interviewSteps": [
        "先说明核心考点：递归。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / 递归 / 树 / 深度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    },
    "codePreview": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\n# 思路：翻转 = 每个节点的左右孩子互换，然后递归翻转子树\n# 时间 O(n)，空间 O(h)，h 为树高（递归栈深度）\n#\n# ⚠️ 易错点/误区：\n# 1. 翻转是交换节点引用（node.left, node.right 互换），不是交换 .val\n# 2. None 节点也能参与交换，不需要对\"一个孩子为 None\"单独处理\n# 3. Python 可以用 a, b = b, a 一行完成交换，不需要 tmp 变量\nclass Solution:\n    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:\n        # 递归\n        def changeposition(node):\n            if not node: return node               # base case：空节点直接返回\n            node.left, node.right = node.right, node.left  # 交换左右孩子\n            changeposition(node.left)              # 递归翻转左子树\n            changeposition(node.right)             # 递归翻转右子树\n            return node\n        return changeposition(root)"
  },
  {
    "id": "101",
    "slug": "101-对称二叉树",
    "title": "对称二叉树",
    "titleEn": "Symmetric Tree",
    "category": "二叉树",
    "difficulty": "简单",
    "topic": "递归 / 队列",
    "completed": true,
    "leetcodeSlug": "symmetric-tree",
    "leetcodeUrl": "https://leetcode.cn/problems/symmetric-tree/",
    "acceptanceRate": 63.7,
    "solutionCount": 6467,
    "companyTagCount": 92,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "递归 / 队列",
      "树",
      "深度优先搜索",
      "广度优先搜索"
    ],
    "sourcePath": "hot100/0319/101.对称二叉树.py",
    "lastUpdated": "2026-03-19",
    "lastUpdatedAt": "2026-03-19T07:37:10.455Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "需二刷：栈存配对节点 / 递归对称比较",
      "思路：对称  左子树和右子树互为镜像",
      "时间 O(n)，空间 O(n)",
      "1. 栈方法中 while 条件不能写 while root.left and root.right（永远不变，死循环），应该写 while stack",
      "2. 栈里每次 pop 两个、append 两个一组，栈元素有顺序不是\"并列\"",
      "4. 递归调用必须 return，不 return 结果会丢失",
      "5. 递归中最后一步要用 and 连接两个子问题，两个都对称才是真的对称"
    ],
    "pitfalls": [
      "1. 栈方法中 while 条件不能写 while root.left and root.right（永远不变，死循环），应该写 while stack",
      "3. 不能只比较值不比较结构：跳过 None 会丢失结构信息，导致结构不同但值相同的树误判为对称"
    ],
    "solutionGuide": {
      "idea": "需二刷：栈存配对节点 / 递归对称比较",
      "interviewSteps": [
        "先说明核心考点：递归 / 队列。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / 递归 / 队列 / 树 / 深度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 栈方法中 while 条件不能写 while root.left and root.right（永远不变，死循环），应该写 while stack"
    },
    "codePreview": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\n# 📌 需二刷：栈存配对节点 / 递归对称比较\n#\n# 思路：对称 = 左子树和右子树互为镜像\n#       每次比较一对节点（左的左 配 右的右，左的右 配 右的左）\n# 时间 O(n)，空间 O(n)\n#\n# ⚠️ 易错点/误区：\n# 1. 栈方法中 while 条件不能写 while root.left and root.right（永远不变，死循环），应该写 while stack\n# 2. 栈里每次 pop 两个、append 两个一组，栈元素有顺序不是\"并列\"\n# 3. 不能只比较值不比较结构：跳过 None 会丢失结构信息，导致结构不同但值相同的树误判为对称\n# 4. 递归调用必须 return，不 return 结果会丢失\n# 5. 递归中最后一步要用 and 连接两个子问题，两个都对称才是真的对称\nclass Solution:\n    def isSymmetric(self, root: Optional[TreeNode]) -> bool:\n        # ========== 方法一：栈（迭代） ==========\n        # 核心：栈里成对存入需要比较的节点，每次弹出一对来比较\n        # if not root: return True\n        # stack = [root.left, root.right]       # 初始放入第一对\n        # while stack:                          # 栈不空就继续\n        #     nodeR = stack.pop()               # 后进先出，先弹右\n        #     nodeL = stack.pop()               # 再弹左\n        #     if not nodeL and not nodeR:       # 都是 None → 这一对 OK，继续\n        #         continue\n        #     if not nodeL or not nodeR:        # 一个 None 一个不是 → 不对称\n        #         return False\n        #     if nodeL.val != nodeR.val:        # 值不等 → 不对称\n        #         return False\n        #     stack.append(nodeL.left)          # 外侧对：左的左 配 右的右\n        #     stack.append(nodeR.right)\n        #     stack.append(nodeL.right)         # 内侧对：左的右 配 右的左\n        #     stack.append(nodeR.left)\n        # return True\n        # ========== 方法二：递归 ==========\n        # 核心：check(left, right) 判断两个节点是否互为镜像\n        def check(left, right) -> bool:\n            if not left and not right:          # 都是 None → 对称 ✓\n                return True\n            if not left or not right:           # 一个 None 一个不是 → 不对称 ✗\n                return False\n            if left.val != right.val:           # 值不等 → 不对称 ✗\n                return False\n            # 外侧对称 且 内侧对称 → 才是真正对称\n            return check(left.left, right.right) and check(left.right, right.left)\n        return check(root.left, root.right)"
  },
  {
    "id": "543",
    "slug": "543-二叉树的直径",
    "title": "二叉树的直径",
    "titleEn": "Diameter of Binary Tree",
    "category": "二叉树",
    "difficulty": "简单",
    "topic": "DFS",
    "completed": true,
    "leetcodeSlug": "diameter-of-binary-tree",
    "leetcodeUrl": "https://leetcode.cn/problems/diameter-of-binary-tree/",
    "acceptanceRate": 64.3,
    "solutionCount": 3381,
    "companyTagCount": 75,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "DFS",
      "树",
      "深度优先搜索"
    ],
    "sourcePath": "hot100/0319/543.二叉树的直径.py",
    "lastUpdated": "2026-03-19",
    "lastUpdatedAt": "2026-03-19T09:23:26.105Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "需二刷：在求深度的递归中\"顺便\"更新全局最大直径",
      "思路：直径  某个节点的左子树深度 + 右子树深度 + 2（边数）",
      "在递归求深度时，顺便用 self.ans 记录经过每个节点的最大路径长度",
      "时间 O(n)，空间 O(h)，h 为树高"
    ],
    "pitfalls": [
      "1. 直径不一定经过根节点！所以不能只算根的左深度+右深度",
      "4. 函数返回的是\"深度\"，直径通过 self.ans 在过程中更新，不能用返回值传递直径"
    ],
    "solutionGuide": {
      "idea": "需二刷：在求深度的递归中\"顺便\"更新全局最大直径",
      "interviewSteps": [
        "先说明核心考点：DFS。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / DFS / 树 / 深度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 直径不一定经过根节点！所以不能只算根的左深度+右深度"
    },
    "codePreview": "#\n#\n# [543] 二叉树的直径\n#\n# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\n# 📌 需二刷：在求深度的递归中\"顺便\"更新全局最大直径\n#\n# 思路：直径 = 某个节点的左子树深度 + 右子树深度 + 2（边数）\n#       在递归求深度时，顺便用 self.ans 记录经过每个节点的最大路径长度\n# 时间 O(n)，空间 O(h)，h 为树高\n#\n# ⚠️ 易错点/误区：\n# 1. 直径不一定经过根节点！所以不能只算根的左深度+右深度\n# 2. None 返回 -1（边数计算）时，直径公式要 +2；None 返回 0（节点数计算）时，直径公式不用 +2\n# 3. 深度用 max(左,右)+1，直径用 左+右+2，别搞混\n# 4. 函数返回的是\"深度\"，直径通过 self.ans 在过程中更新，不能用返回值传递直径\nclass Solution:\n    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:\n        # ========== 方法一：None 返回 -1（按边数算深度） ==========\n        self.ans = 0\n        def caldepth(node):\n            if not node: return -1                       # 空节点深度为 -1\n            left = caldepth(node.left)                   # 左子树深度\n            right = caldepth(node.right)                 # 右子树深度\n            self.ans = max(self.ans, left + right + 2)   # 更新直径（+2 因为左右各多一条边到当前节点）\n            return max(left, right) + 1                  # 返回当前节点深度\n        caldepth(root)\n        return self.ans\n        # ========== 方法二：None 返回 0（按节点数算深度） ==========\n        # self.ans = 0\n        # def caldepth(node):\n        #     if not node: return 0                      # 空节点深度为 0\n        #     left = caldepth(node.left)\n        #     right = caldepth(node.right)\n        #     self.ans = max(self.ans, left + right)     # 不用 +2，因为深度多算了 1\n        #     return max(left, right) + 1\n        #\n        # caldepth(root)\n        # return self.ans\n        # ========== 方法三：nonlocal（避免污染类属性） ==========\n        # ans = 0\n        # def caldepth(node):\n        #     nonlocal ans                               # 声明修改外部变量\n        #     if not node: return 0\n        #     left = caldepth(node.left)\n        #     right = caldepth(node.right)\n        #     ans = max(ans, left + right)\n        #     return max(left, right) + 1\n        #\n        # caldepth(root)\n        # return ans\n        # ========== 方法四：列表包装（闭包可修改列表元素） ==========\n        # ans = [0]\n        # def caldepth(node):\n        #     if not node: return 0\n        #     left = caldepth(node.left)\n        #     right = caldepth(node.right)\n        #     ans[0] = max(ans[0], left + right)         # 列表元素可在闭包中修改\n        #     return max(left, right) + 1\n        #\n        # caldepth(root)\n        # return ans[0]"
  },
  {
    "id": "102",
    "slug": "102-二叉树的层序遍历",
    "title": "二叉树的层序遍历",
    "titleEn": "Binary Tree Level Order Traversal",
    "category": "二叉树",
    "difficulty": "中等",
    "topic": "BFS",
    "completed": true,
    "leetcodeSlug": "binary-tree-level-order-traversal",
    "leetcodeUrl": "https://leetcode.cn/problems/binary-tree-level-order-traversal/",
    "acceptanceRate": 70.7,
    "solutionCount": 6487,
    "companyTagCount": 134,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "BFS",
      "树",
      "广度优先搜索"
    ],
    "sourcePath": "hot100/0320/102.二叉树的层序遍历.py",
    "lastUpdated": "2026-03-20",
    "lastUpdatedAt": "2026-03-20T12:14:23.814Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "需二刷：BFS 层序遍历模板题",
      "思路：用队列 BFS，每轮通过 len(queue) 确定当前层节点数，按层分组",
      "时间 O(n)，空间 O(n)（队列最多存一层的节点）",
      "方法一：BFS（面试首推 ⭐⭐⭐）",
      "方法二：DFS（面试备选）",
      "用递归 DFS，通过 depth 参数知道当前在第几层"
    ],
    "pitfalls": [
      "3. 入队孩子要判空：if node.left，否则 None.val 报错"
    ],
    "solutionGuide": {
      "idea": "需二刷：BFS 层序遍历模板题",
      "interviewSteps": [
        "先说明核心考点：BFS。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / BFS / 树 / 广度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "3. 入队孩子要判空：if node.left，否则 None.val 报错"
    },
    "codePreview": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\n# 📌 需二刷：BFS 层序遍历模板题\n#\n# 思路：用队列 BFS，每轮通过 len(queue) 确定当前层节点数，按层分组\n# 时间 O(n)，空间 O(n)（队列最多存一层的节点）\n#\n# ⚠️ 易错点/误区：\n# 1. queue 里放的是节点对象，不是值（需要访问 .left/.right）\n# 2. deque([root]) 不是 deque(root)（deque 接收可迭代对象，会逐个拆开）\n# 3. 入队孩子要判空：if node.left，否则 None.val 报错\n# 4. result 初始化为 []，不是 [[]]\n# 5. queue.append() 是往已有队列加，不要用 queue = deque(...) 覆盖整个队列\nfrom collections import deque\nclass Solution:\n    # ===== 方法一：BFS（面试首推 ⭐⭐⭐）=====\n    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:\n        if not root:                        # 边界：空树直接返回\n            return []\n        result = []\n        queue = deque([root])               # 根节点入队\n        while queue:                        # 队列不为空就继续\n            level_size = len(queue)          # 当前层有多少个节点\n            level = []                       # 存当前层的值\n            for i in range(level_size):      # 只处理当前层的节点\n                node = queue.popleft()       # 出队\n                level.append(node.val)       # 收集值\n                if node.left:                # 左孩子入队（下一层）\n                    queue.append(node.left)\n                if node.right:               # 右孩子入队（下一层）\n                    queue.append(node.right)\n            result.append(level)             # 当前层收集完毕\n        return result\n    # ===== 方法二：DFS（面试备选）=====\n    # 用递归 DFS，通过 depth 参数知道当前在第几层\n    # def levelOrder(self, root):\n    #     result = []\n    #     def dfs(node, depth):\n    #         if not node:\n    #             return\n    #         if depth == len(result):     # 第一次到这层，新建子列表\n    #             result.append([])\n    #         result[depth].append(node.val)\n    #         dfs(node.left, depth + 1)\n    #         dfs(node.right, depth + 1)\n    #     dfs(root, 0)\n    #     return result"
  },
  {
    "id": "108",
    "slug": "108-将有序数组转换为二叉搜索树",
    "title": "将有序数组转换为二叉搜索树",
    "titleEn": "Convert Sorted Array to Binary Search Tree",
    "category": "二叉树",
    "difficulty": "简单",
    "topic": "递归构建",
    "completed": true,
    "leetcodeSlug": "convert-sorted-array-to-binary-search-tree",
    "leetcodeUrl": "https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/",
    "acceptanceRate": 80.6,
    "solutionCount": 3185,
    "companyTagCount": 63,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "递归构建",
      "树",
      "二叉搜索树",
      "数组",
      "分治"
    ],
    "sourcePath": "hot100/0319/108.将有序数组转换为二叉搜索树.py",
    "lastUpdated": "2026-03-19",
    "lastUpdatedAt": "2026-03-19T11:42:34.444Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "核心考点：递归构建",
      "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "solutionGuide": {
      "idea": "核心考点：递归构建",
      "interviewSteps": [
        "先说明核心考点：递归构建。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / 递归构建 / 树 / 二叉搜索树。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    },
    "codePreview": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:\n        if not nums:return None\n        mid = len(nums)//2\n        node = TreeNode(nums[mid])\n        node.left = self.sortedArrayToBST(nums[:mid])\n        node.right = self.sortedArrayToBST(nums[mid+1:])\n        return node"
  },
  {
    "id": "98",
    "slug": "98-验证二叉搜索树",
    "title": "验证二叉搜索树",
    "titleEn": "Validate Binary Search Tree",
    "category": "二叉树",
    "difficulty": "中等",
    "topic": "中序遍历 / 区间递归",
    "completed": false,
    "leetcodeSlug": "validate-binary-search-tree",
    "leetcodeUrl": "https://leetcode.cn/problems/validate-binary-search-tree/",
    "acceptanceRate": 41.1,
    "solutionCount": 5798,
    "companyTagCount": 97,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "中序遍历 / 区间递归",
      "树",
      "深度优先搜索",
      "二叉搜索树"
    ],
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "核心考点：中序遍历 / 区间递归",
      "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：中序遍历 / 区间递归",
      "interviewSteps": [
        "先说明核心考点：中序遍历 / 区间递归。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / 中序遍历 / 区间递归 / 树 / 深度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "230",
    "slug": "230-二叉搜索树中第-k-小的元素",
    "title": "二叉搜索树中第 K 小的元素",
    "titleEn": "Kth Smallest Element in a BST",
    "category": "二叉树",
    "difficulty": "中等",
    "topic": "中序遍历",
    "completed": false,
    "leetcodeSlug": "kth-smallest-element-in-a-bst",
    "leetcodeUrl": "https://leetcode.cn/problems/kth-smallest-element-in-a-bst/",
    "acceptanceRate": 79.8,
    "solutionCount": 3089,
    "companyTagCount": 48,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "中序遍历",
      "树",
      "深度优先搜索",
      "二叉搜索树"
    ],
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "核心考点：中序遍历",
      "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：中序遍历",
      "interviewSteps": [
        "先说明核心考点：中序遍历。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / 中序遍历 / 树 / 深度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "199",
    "slug": "199-二叉树的右视图",
    "title": "二叉树的右视图",
    "titleEn": "Binary Tree Right Side View",
    "category": "二叉树",
    "difficulty": "中等",
    "topic": "BFS / DFS",
    "completed": false,
    "leetcodeSlug": "binary-tree-right-side-view",
    "leetcodeUrl": "https://leetcode.cn/problems/binary-tree-right-side-view/",
    "acceptanceRate": 73.6,
    "solutionCount": 4803,
    "companyTagCount": 90,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "BFS / DFS",
      "树",
      "深度优先搜索",
      "广度优先搜索"
    ],
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "核心考点：BFS / DFS",
      "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：BFS / DFS",
      "interviewSteps": [
        "先说明核心考点：BFS / DFS。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / BFS / DFS / 树 / 深度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "114",
    "slug": "114-二叉树展开为链表",
    "title": "二叉树展开为链表",
    "titleEn": "Flatten Binary Tree to Linked List",
    "category": "二叉树",
    "difficulty": "中等",
    "topic": "前序遍历",
    "completed": false,
    "leetcodeSlug": "flatten-binary-tree-to-linked-list",
    "leetcodeUrl": "https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/",
    "acceptanceRate": 76.2,
    "solutionCount": 4555,
    "companyTagCount": 56,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "前序遍历",
      "栈",
      "树",
      "深度优先搜索",
      "链表"
    ],
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "核心考点：前序遍历",
      "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：前序遍历",
      "interviewSteps": [
        "先说明核心考点：前序遍历。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / 前序遍历 / 栈 / 树。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "105",
    "slug": "105-从前序与中序遍历序列构造二叉树",
    "title": "从前序与中序遍历序列构造二叉树",
    "titleEn": "Construct Binary Tree from Preorder and Inorder Traversal",
    "category": "二叉树",
    "difficulty": "中等",
    "topic": "递归分治",
    "completed": false,
    "leetcodeSlug": "construct-binary-tree-from-preorder-and-inorder-traversal",
    "leetcodeUrl": "https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
    "acceptanceRate": 73.3,
    "solutionCount": 4041,
    "companyTagCount": 76,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "递归分治",
      "树",
      "数组",
      "哈希表",
      "分治"
    ],
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "核心考点：递归分治",
      "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：递归分治",
      "interviewSteps": [
        "先说明核心考点：递归分治。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / 递归分治 / 树 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "437",
    "slug": "437-路径总和-iii",
    "title": "路径总和 III",
    "titleEn": "Path Sum III",
    "category": "二叉树",
    "difficulty": "中等",
    "topic": "前缀和 + DFS",
    "completed": false,
    "leetcodeSlug": "path-sum-iii",
    "leetcodeUrl": "https://leetcode.cn/problems/path-sum-iii/",
    "acceptanceRate": 49.1,
    "solutionCount": 2488,
    "companyTagCount": 46,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "前缀和 + DFS",
      "树",
      "深度优先搜索"
    ],
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "核心考点：前缀和 + DFS",
      "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：前缀和 + DFS",
      "interviewSteps": [
        "先说明核心考点：前缀和 + DFS。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / 前缀和 + DFS / 树 / 深度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "236",
    "slug": "236-二叉树的最近公共祖先",
    "title": "二叉树的最近公共祖先",
    "titleEn": "Lowest Common Ancestor of a Binary Tree",
    "category": "二叉树",
    "difficulty": "中等",
    "topic": "递归",
    "completed": false,
    "leetcodeSlug": "lowest-common-ancestor-of-a-binary-tree",
    "leetcodeUrl": "https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/",
    "acceptanceRate": 75.2,
    "solutionCount": 4516,
    "companyTagCount": 112,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "递归",
      "树",
      "深度优先搜索"
    ],
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "核心考点：递归",
      "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：递归",
      "interviewSteps": [
        "先说明核心考点：递归。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / 递归 / 树 / 深度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "124",
    "slug": "124-二叉树中的最大路径和",
    "title": "二叉树中的最大路径和",
    "titleEn": "Binary Tree Maximum Path Sum",
    "category": "二叉树",
    "difficulty": "困难",
    "topic": "DFS + 贡献值",
    "completed": false,
    "leetcodeSlug": "binary-tree-maximum-path-sum",
    "leetcodeUrl": "https://leetcode.cn/problems/binary-tree-maximum-path-sum/",
    "acceptanceRate": 48.2,
    "solutionCount": 3057,
    "companyTagCount": 100,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "DFS + 贡献值",
      "树",
      "深度优先搜索",
      "动态规划"
    ],
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "核心考点：DFS + 贡献值",
      "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：DFS + 贡献值",
      "interviewSteps": [
        "先说明核心考点：DFS + 贡献值。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / DFS + 贡献值 / 树 / 深度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "200",
    "slug": "200-岛屿数量",
    "title": "岛屿数量",
    "titleEn": "Number of Islands",
    "category": "图论",
    "difficulty": "中等",
    "topic": "DFS / BFS",
    "completed": true,
    "leetcodeSlug": "number-of-islands",
    "leetcodeUrl": "https://leetcode.cn/problems/number-of-islands/",
    "acceptanceRate": 64,
    "solutionCount": 5666,
    "companyTagCount": 179,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "图论",
      "DFS / BFS",
      "深度优先搜索",
      "广度优先搜索",
      "并查集",
      "数组",
      "矩阵"
    ],
    "sourcePath": "hot100/0327/200.岛屿数量.py",
    "lastUpdated": "2026-03-27",
    "lastUpdatedAt": "2026-03-27T07:39:32.812Z",
    "interviewPattern": "先建模节点、边和访问状态，BFS 适合最短层数，DFS 适合连通块和搜索。",
    "thoughts": [
      "需二刷：DFS 淹岛法（Flood Fill）",
      "思路：遍历网格，遇到 '1' 则岛屿数+1，然后用 DFS 把整座岛\"淹\"成 '0'",
      "时间 O(m*n)，空间 O(m*n)（最坏情况递归栈深度）",
      "2. DFS 进入后要立即标记 grid[i][j]  '0'，否则相邻格子互相递归导致无限循环"
    ],
    "pitfalls": [
      "2. DFS 进入后要立即标记 grid[i][j]  '0'，否则相邻格子互相递归导致无限循环",
      "先把当前格子淹掉，防止重复访问",
      "邻居在边界内且是陆地，继续淹"
    ],
    "solutionGuide": {
      "idea": "需二刷：DFS 淹岛法（Flood Fill）",
      "interviewSteps": [
        "先说明核心考点：DFS / BFS。",
        "先建模节点、边和访问状态，BFS 适合最短层数，DFS 适合连通块和搜索。",
        "关键词：图论 / DFS / BFS / 深度优先搜索 / 广度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "2. DFS 进入后要立即标记 grid[i][j]  '0'，否则相邻格子互相递归导致无限循环"
    },
    "codePreview": "# 📌 需二刷：DFS 淹岛法（Flood Fill）\n#\n# 思路：遍历网格，遇到 '1' 则岛屿数+1，然后用 DFS 把整座岛\"淹\"成 '0'\n# 时间 O(m*n)，空间 O(m*n)（最坏情况递归栈深度）\n#\n# ⚠️ 易错点/误区：\n# 1. grid 中的值是字符串 '1'/'0'，不是整数 1/0\n# 2. DFS 进入后要立即标记 grid[i][j] = '0'，否则相邻格子互相递归导致无限循环\n# 3. grid[ni][nj] = '0' 是赋值（单等号），== 是比较，不会修改值\n# 4. 不需要回溯！与 79.单词搜索 不同，访问过的陆地不需要恢复\nclass Solution:\n    def numIslands(self, grid: List[List[str]]) -> int:\n        m, n = len(grid), len(grid[0])\n        count = 0\n        def dfs(i, j):\n            # 先把当前格子淹掉，防止重复访问\n            grid[i][j] = '0'\n            # 上下左右四个方向扩散\n            for di, dj in [(-1, 0), (1, 0), (0, -1), (0, 1)]:\n                ni, nj = i + di, j + dj\n                # 邻居在边界内且是陆地，继续淹\n                if 0 <= ni < m and 0 <= nj < n and grid[ni][nj] == '1':\n                    dfs(ni, nj)\n        # 遍历每个格子，发现新的 '1' 就是一座新岛\n        for i in range(m):\n            for j in range(n):\n                if grid[i][j] == '1':\n                    count += 1  # 发现新岛\n                    dfs(i, j)   # 把整座岛淹掉\n        return count"
  },
  {
    "id": "994",
    "slug": "994-腐烂的橘子",
    "title": "腐烂的橘子",
    "titleEn": "Rotting Oranges",
    "category": "图论",
    "difficulty": "中等",
    "topic": "BFS 多源",
    "completed": true,
    "leetcodeSlug": "rotting-oranges",
    "leetcodeUrl": "https://leetcode.cn/problems/rotting-oranges/",
    "acceptanceRate": 55.7,
    "solutionCount": 3564,
    "companyTagCount": 56,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "图论",
      "BFS 多源",
      "广度优先搜索",
      "数组",
      "矩阵"
    ],
    "sourcePath": "hot100/0327/994.腐烂的橘子.py",
    "lastUpdated": "2026-03-27",
    "lastUpdatedAt": "2026-03-27T09:25:25.788Z",
    "interviewPattern": "先建模节点、边和访问状态，BFS 适合最短层数，DFS 适合连通块和搜索。",
    "thoughts": [
      "需二刷：多源 BFS + 层序遍历",
      "思路：把所有腐烂橘子作为起点同时入队，BFS 逐层扩散，每扩一层 time+1",
      "时间 O(m*n)，空间 O(m*n)",
      "第一步：遍历网格，找出所有烂橘子（BFS 起点）和统计新鲜橘子数量",
      "第二步：多源 BFS，层序遍历（每一层  1 分钟）"
    ],
    "pitfalls": [
      "2. 感染后必须 grid[nx][ny]  2，否则同一个橘子会被重复入队",
      "4. 边界：一开始就没有新鲜橘子，直接返回 0",
      "边界：没有新鲜橘子，直接返回 0"
    ],
    "solutionGuide": {
      "idea": "需二刷：多源 BFS + 层序遍历",
      "interviewSteps": [
        "先说明核心考点：BFS 多源。",
        "先建模节点、边和访问状态，BFS 适合最短层数，DFS 适合连通块和搜索。",
        "关键词：图论 / BFS 多源 / 广度优先搜索 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "2. 感染后必须 grid[nx][ny]  2，否则同一个橘子会被重复入队"
    },
    "codePreview": "# 📌 需二刷：多源 BFS + 层序遍历\n#\n# 思路：把所有腐烂橘子作为起点同时入队，BFS 逐层扩散，每扩一层 time+1\n# 时间 O(m*n)，空间 O(m*n)\n#\n# ⚠️ 易错点/误区：\n# 1. time += 1 要放在层序 for 循环外面，不是每个橘子/每个方向都 +1\n# 2. 感染后必须 grid[nx][ny] = 2，否则同一个橘子会被重复入队\n# 3. 最后 return time-1，因为最后一层（无新感染）也会 +1，多算了一次\n# 4. 边界：一开始就没有新鲜橘子，直接返回 0\nfrom collections import deque\nclass Solution:\n    def orangesRotting(self, grid: List[List[int]]) -> int:\n        m, n = len(grid), len(grid[0])\n        bad = deque()\n        fresh = 0\n        # 第一步：遍历网格，找出所有烂橘子（BFS 起点）和统计新鲜橘子数量\n        for i in range(m):\n            for j in range(n):\n                if grid[i][j] == 2:\n                    bad.append((i, j))\n                elif grid[i][j] == 1:\n                    fresh += 1\n        # 边界：没有新鲜橘子，直接返回 0\n        if fresh == 0:\n            return 0\n        time = 0\n        direction = [(-1, 0), (1, 0), (0, -1), (0, 1)]\n        # 第二步：多源 BFS，层序遍历（每一层 = 1 分钟）\n        while bad:\n            for _ in range(len(bad)):       # 处理当前层所有烂橘子\n                x, y = bad.popleft()\n                for dx, dy in direction:    # 向四个方向扩散\n                    nx, ny = x + dx, y + dy\n                    if 0 <= nx < m and 0 <= ny < n and grid[nx][ny] == 1:\n                        grid[nx][ny] = 2    # 标记为腐烂，防止重复入队\n                        bad.append((nx, ny))\n                        fresh -= 1\n            time += 1                       # 一整层处理完，时间 +1\n        # 第三步：检查是否还有新鲜橘子\n        # time-1 是因为最后一层处理完发现没有新感染，但 time 还是 +1 了\n        return -1 if fresh > 0 else time - 1"
  },
  {
    "id": "207",
    "slug": "207-课程表",
    "title": "课程表",
    "titleEn": "Course Schedule",
    "category": "图论",
    "difficulty": "中等",
    "topic": "拓扑排序",
    "completed": false,
    "leetcodeSlug": "course-schedule",
    "leetcodeUrl": "https://leetcode.cn/problems/course-schedule/",
    "acceptanceRate": 57.3,
    "solutionCount": 3453,
    "companyTagCount": 91,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "图论",
      "拓扑排序",
      "深度优先搜索",
      "广度优先搜索",
      "图"
    ],
    "interviewPattern": "先建模节点、边和访问状态，BFS 适合最短层数，DFS 适合连通块和搜索。",
    "thoughts": [
      "核心考点：拓扑排序",
      "先建模节点、边和访问状态，BFS 适合最短层数，DFS 适合连通块和搜索。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：拓扑排序",
      "interviewSteps": [
        "先说明核心考点：拓扑排序。",
        "先建模节点、边和访问状态，BFS 适合最短层数，DFS 适合连通块和搜索。",
        "关键词：图论 / 拓扑排序 / 深度优先搜索 / 广度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "208",
    "slug": "208-实现-trie-前缀树",
    "title": "实现 Trie (前缀树)",
    "titleEn": "Implement Trie (Prefix Tree)",
    "category": "图论",
    "difficulty": "中等",
    "topic": "字典树设计",
    "completed": false,
    "leetcodeSlug": "implement-trie-prefix-tree",
    "leetcodeUrl": "https://leetcode.cn/problems/implement-trie-prefix-tree/",
    "acceptanceRate": 72.6,
    "solutionCount": 2429,
    "companyTagCount": 84,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "图论",
      "字典树设计",
      "设计",
      "字典树",
      "哈希表",
      "字符串"
    ],
    "interviewPattern": "先建模节点、边和访问状态，BFS 适合最短层数，DFS 适合连通块和搜索。",
    "thoughts": [
      "核心考点：字典树设计",
      "先建模节点、边和访问状态，BFS 适合最短层数，DFS 适合连通块和搜索。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：字典树设计",
      "interviewSteps": [
        "先说明核心考点：字典树设计。",
        "先建模节点、边和访问状态，BFS 适合最短层数，DFS 适合连通块和搜索。",
        "关键词：图论 / 字典树设计 / 设计 / 字典树。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "46",
    "slug": "46-全排列",
    "title": "全排列",
    "titleEn": "Permutations",
    "category": "回溯",
    "difficulty": "中等",
    "topic": "排列树",
    "completed": true,
    "leetcodeSlug": "permutations",
    "leetcodeUrl": "https://leetcode.cn/problems/permutations/",
    "acceptanceRate": 80.2,
    "solutionCount": 7793,
    "companyTagCount": 186,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "回溯",
      "排列树",
      "数组"
    ],
    "sourcePath": "hot100/0321/46.全排列.py",
    "lastUpdated": "2026-03-21",
    "lastUpdatedAt": "2026-03-21T03:51:54.988Z",
    "interviewPattern": "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",
    "thoughts": [
      "思路：回溯法（决策树遍历）",
      "- 递归返回后撤销选择（pop），尝试下一个分支",
      "时间 O(n! * n)，空间 O(n)",
      "- 递归栈深度 O(n)"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "solutionGuide": {
      "idea": "思路：回溯法（决策树遍历）",
      "interviewSteps": [
        "先说明核心考点：排列树。",
        "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",
        "关键词：回溯 / 排列树 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    },
    "codePreview": "# 📌 需二刷：回溯法求全排列（回溯经典入门题）\n#\n# 思路：回溯法（决策树遍历）\n#   - 每一层从 nums 中选一个「还没被选过」的数加入 path\n#   - 当 path 长度 == nums 长度时，说明排列完成，收集结果\n#   - 递归返回后撤销选择（pop），尝试下一个分支\n#\n# 时间 O(n! * n)，空间 O(n)\n#   - n! 个排列，每个排列复制到 result 需要 O(n)\n#   - 递归栈深度 O(n)\n#\n# ⚠️ 易错点/误区：\n# 1. result.append(path) 存的是引用，path 变了 result 也变 → 必须用 path.copy()\n# 2. 撤销选择是 path.pop()，不是 path.remove() 或 path.reverse()\n# 3. 判断「是否已选过」要在 append 之前，选过就 continue 跳过\n#\n# 💡 面试推荐写法：\n#   本题用 `if num in path` 判断是否选过，简洁直观，面试中推荐此写法。\n#   如果 nums 很大或有重复元素，可改用 used[] 布尔数组标记，效率更高：\n#     used = [False] * len(nums)\n#     for i in range(len(nums)):\n#         if used[i]: continue\n#         used[i] = True\n#         path.append(nums[i])\n#         backtrack()\n#         path.pop()\n#         used[i] = False\nclass Solution:\n    def permute(self, nums: List[int]) -> List[List[int]]:\n        path = []       # 当前路径（已做的选择）\n        result = []     # 收集所有排列结果\n        def backtrack(nums):\n            # 终止条件：path 中的元素个数等于 nums 长度，说明排列完成\n            if len(path) == len(nums):\n                result.append(path.copy())  # ⚠️ 必须用 copy，否则存的是引用\n                return\n            # 遍历所有可选数字\n            for num in nums:\n                if num in path:     # 已经选过的数字，跳过\n                    continue\n                path.append(num)    # 做选择\n                backtrack(nums)     # 递归进入下一层\n                path.pop()          # 撤销选择（回溯）\n        backtrack(nums)\n        return result"
  },
  {
    "id": "78",
    "slug": "78-子集",
    "title": "子集",
    "titleEn": "Subsets",
    "category": "回溯",
    "difficulty": "中等",
    "topic": "子集树",
    "completed": true,
    "leetcodeSlug": "subsets",
    "leetcodeUrl": "https://leetcode.cn/problems/subsets/",
    "acceptanceRate": 81.9,
    "solutionCount": 5850,
    "companyTagCount": 98,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "回溯",
      "子集树",
      "位运算",
      "数组"
    ],
    "sourcePath": "hot100/0321/78.子集.py",
    "lastUpdated": "2026-03-21",
    "lastUpdatedAt": "2026-03-21T09:45:01.128Z",
    "interviewPattern": "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",
    "thoughts": [
      "思路：回溯树的每个节点都是一个合法子集，进入 backtrack 时先收集当前 path，",
      "时间 O(n * 2^n)，空间 O(n)（递归栈深度）",
      "2. 递归时传 i+1 而不是 startIndex+1，否则会重复选择元素"
    ],
    "pitfalls": [
      "1. 不能用 if num in path 去重（那是全排列的做法），子集用 startIndex 去重",
      "2. 递归时传 i+1 而不是 startIndex+1，否则会重复选择元素",
      "3. 收集结果必须用 path.copy()，否则 result 中所有引用指向同一个 path"
    ],
    "solutionGuide": {
      "idea": "思路：回溯树的每个节点都是一个合法子集，进入 backtrack 时先收集当前 path，",
      "interviewSteps": [
        "先说明核心考点：子集树。",
        "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",
        "关键词：回溯 / 子集树 / 位运算 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 不能用 if num in path 去重（那是全排列的做法），子集用 startIndex 去重"
    },
    "codePreview": "# 📌 需二刷：回溯法求子集（与全排列对比理解 startIndex）\n#\n# 思路：回溯树的每个节点都是一个合法子集，进入 backtrack 时先收集当前 path，\n#       然后从 startIndex 开始向后选择，保证不往回选，避免重复子集。\n# 时间 O(n * 2^n)，空间 O(n)（递归栈深度）\n#\n# ⚠️ 易错点/误区：\n# 1. 不能用 `if num in path` 去重（那是全排列的做法），子集用 startIndex 去重\n# 2. 递归时传 i+1 而不是 startIndex+1，否则会重复选择元素\n# 3. 收集结果必须用 path.copy()，否则 result 中所有引用指向同一个 path\nclass Solution:\n    def subsets(self, nums: List[int]) -> List[List[int]]:\n        result = []\n        path = []\n        def backtrack(startIndex):\n            # 每个节点都是合法子集，进入就收集（包括空集）\n            result.append(path.copy())\n            # 从 startIndex 开始选，保证只往后选，不产生重复子集\n            for i in range(startIndex, len(nums)):\n                path.append(nums[i])    # 做选择\n                backtrack(i + 1)        # 递归，下一层从 i+1 开始\n                path.pop()             # 撤销选择\n        backtrack(0)\n        return result"
  },
  {
    "id": "17",
    "slug": "17-电话号码的字母组合",
    "title": "电话号码的字母组合",
    "titleEn": "Letter Combinations of a Phone Number",
    "category": "回溯",
    "difficulty": "中等",
    "topic": "组合",
    "completed": true,
    "leetcodeSlug": "letter-combinations-of-a-phone-number",
    "leetcodeUrl": "https://leetcode.cn/problems/letter-combinations-of-a-phone-number/",
    "acceptanceRate": 63.8,
    "solutionCount": 7763,
    "companyTagCount": 115,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "回溯",
      "组合",
      "哈希表",
      "字符串"
    ],
    "sourcePath": "hot100/0322/17.电话号码的字母组合.py",
    "lastUpdated": "2026-03-22",
    "lastUpdatedAt": "2026-03-22T09:24:36.443Z",
    "interviewPattern": "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",
    "thoughts": [
      "需二刷：回溯法 —— 每层递归的选择列表不同（由当前数字决定）",
      "思路：每个数字对应一组字母，用 index 控制当前处理第几个数字，",
      "每层递归遍历该数字对应的字母，选择→递归→撤销",
      "时间 O(3^m × 4^n)，m 是对应 3 个字母的数字个数，n 是对应 4 个字母的数字个数",
      "空间 O(len(digits))，递归栈深度",
      "4. 空字符串判断放在递归函数外面，避免每次递归都重复检查"
    ],
    "pitfalls": [
      "边界情况：空字符串直接返回空列表"
    ],
    "solutionGuide": {
      "idea": "需二刷：回溯法 —— 每层递归的选择列表不同（由当前数字决定）",
      "interviewSteps": [
        "先说明核心考点：组合。",
        "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",
        "关键词：回溯 / 组合 / 哈希表 / 字符串。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "边界情况：空字符串直接返回空列表"
    },
    "codePreview": "# 📌 需二刷：回溯法 —— 每层递归的选择列表不同（由当前数字决定）\n#\n# 思路：每个数字对应一组字母，用 index 控制当前处理第几个数字，\n#       每层递归遍历该数字对应的字母，选择→递归→撤销\n# 时间 O(3^m × 4^n)，m 是对应 3 个字母的数字个数，n 是对应 4 个字母的数字个数\n# 空间 O(len(digits))，递归栈深度\n#\n# ⚠️ 易错点/误区：\n# 1. form(0) 不是 form(len(digits))！index 从 0 开始，表示从第一个数字开始处理\n# 2. for 循环遍历的是 phone[digits[index]]（当前数字的字母），不是 digits 本身\n# 3. 不需要像全排列那样判断 \"char not in path\"，因为不同层的字母可以重复\n# 4. 空字符串判断放在递归函数外面，避免每次递归都重复检查\n# 5. 收集结果时用 ''.join(path) 拼成字符串，而不是 path.copy()\nclass Solution:\n    def letterCombinations(self, digits: str) -> List[str]:\n        # 边界情况：空字符串直接返回空列表\n        if not digits:\n            return []\n        # 数字到字母的映射\n        phone = {\n            \"2\": \"abc\", \"3\": \"def\", \"4\": \"ghi\", \"5\": \"jkl\",\n            \"6\": \"mno\", \"7\": \"pqrs\", \"8\": \"tuv\", \"9\": \"wxyz\"\n        }\n        path = []    # 当前组合路径\n        result = []  # 收集所有组合\n        def form(index):\n            # 终止条件：处理完所有数字，收集结果\n            if index == len(digits):\n                result.append(''.join(path))  # 拼成字符串\n                return\n            # 取出当前数字对应的字母（每层的选择列表不同！）\n            letters = phone[digits[index]]\n            for char in letters:\n                path.append(char)    # 选择\n                form(index + 1)      # 递归到下一个数字\n                path.pop()           # 撤销（回溯）\n        form(0)  # 从第 0 个数字开始\n        return result"
  },
  {
    "id": "39",
    "slug": "39-组合总和",
    "title": "组合总和",
    "titleEn": "Combination Sum",
    "category": "回溯",
    "difficulty": "中等",
    "topic": "剪枝",
    "completed": true,
    "leetcodeSlug": "combination-sum",
    "leetcodeUrl": "https://leetcode.cn/problems/combination-sum/",
    "acceptanceRate": 74.1,
    "solutionCount": 5665,
    "companyTagCount": 101,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "回溯",
      "剪枝",
      "数组"
    ],
    "sourcePath": "hot100/0322/39.组合总和.py",
    "lastUpdated": "2026-03-22",
    "lastUpdatedAt": "2026-03-22T12:53:17.167Z",
    "interviewPattern": "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",
    "thoughts": [
      "思路：对 candidates 排序后，用回溯框架从每个位置开始尝试选数，",
      "由于同一个数可以重复使用，递归时传 i 而不是 i+1。",
      "时间 O(n^(target/min))，空间 O(target/min)",
      "1. 递归传 i 不是 i+1 —— 因为同一个数可以重复选",
      "放在 pop() 之后就白白递归了一次，浪费时间"
    ],
    "pitfalls": [
      "3. path.copy() 别忘括号！path.copy 不加括号只是引用，不会真正复制"
    ],
    "solutionGuide": {
      "idea": "思路：对 candidates 排序后，用回溯框架从每个位置开始尝试选数，",
      "interviewSteps": [
        "先说明核心考点：剪枝。",
        "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",
        "关键词：回溯 / 剪枝 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "3. path.copy() 别忘括号！path.copy 不加括号只是引用，不会真正复制"
    },
    "codePreview": "# 📌 需二刷：回溯 + 剪枝（可重复选元素的组合问题）\n#\n# 面试推荐方法：排序 + 回溯 + 剪枝\n# 思路：对 candidates 排序后，用回溯框架从每个位置开始尝试选数，\n#       每选一个数就从 target 中减去，直到 target == 0 收集结果。\n#       由于同一个数可以重复使用，递归时传 i 而不是 i+1。\n# 时间 O(n^(target/min))，空间 O(target/min)\n#\n# ⚠️ 易错点/误区：\n# 1. 递归传 i 不是 i+1 —— 因为同一个数可以重复选\n#    对比 78.子集 传 i+1（每个数只能选一次）\n# 2. 剪枝 if candidates[i] > target: break 必须放在选择之前\n#    放在 pop() 之后就白白递归了一次，浪费时间\n# 3. path.copy() 别忘括号！path.copy 不加括号只是引用，不会真正复制\n# 4. break 不是 continue —— 排序后当前数太大，后面更大，全部跳过\nclass Solution:\n    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:\n        path = []\n        result = []\n        # 排序是剪枝的前提：保证后面的数 >= 当前数\n        candidates.sort()\n        def method(start, target):\n            # 终止条件：凑齐了，收集当前路径\n            if target == 0:\n                result.append(path.copy())\n                return \n            for i in range(start, len(candidates)):\n                # 剪枝：当前数已经比剩余 target 大，后面的更大，直接跳出\n                if candidates[i] > target:\n                    break\n                path.append(candidates[i])          # 做选择\n                method(i, target - candidates[i])   # 递归（传 i，允许重复选）\n                path.pop()                          # 撤销选择（回溯）\n        method(0, target)\n        return result"
  },
  {
    "id": "22",
    "slug": "22-括号生成",
    "title": "括号生成",
    "titleEn": "Generate Parentheses",
    "category": "回溯",
    "difficulty": "中等",
    "topic": "有效性剪枝",
    "completed": true,
    "leetcodeSlug": "generate-parentheses",
    "leetcodeUrl": "https://leetcode.cn/problems/generate-parentheses/",
    "acceptanceRate": 79,
    "solutionCount": 6667,
    "companyTagCount": 138,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "回溯",
      "有效性剪枝",
      "字符串",
      "动态规划"
    ],
    "sourcePath": "hot100/0322/22.括号生成.py",
    "lastUpdated": "2026-03-22",
    "lastUpdatedAt": "2026-03-22T07:58:19.094Z",
    "interviewPattern": "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",
    "thoughts": [
      "思路：回溯法，每一步选择放'('或')'，通过 left/right 计数器剪枝",
      "时间 O(4^n / √n)（第n个卡特兰数），空间 O(n)（递归栈深度）",
      "🎯 面试推荐：回溯法是本题的最佳解法，也是面试官最期待的方法",
      "- 思路清晰，容易讲解",
      "- 完美体现\"选择 → 递归 → 撤销\"的回溯模板"
    ],
    "pitfalls": [
      "1. 放')'的条件是 right < left，不是 right < n（否则会生成非法括号如 \")(\"）",
      "3. 每次选择后必须 path.pop() 回溯，否则路径会越来越长"
    ],
    "solutionGuide": {
      "idea": "思路：回溯法，每一步选择放'('或')'，通过 left/right 计数器剪枝",
      "interviewSteps": [
        "先说明核心考点：有效性剪枝。",
        "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",
        "关键词：回溯 / 有效性剪枝 / 字符串 / 动态规划。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 放')'的条件是 right < left，不是 right < n（否则会生成非法括号如 \")(\"）"
    },
    "codePreview": "# 📌 需二刷：回溯法生成合法括号\n#\n# 思路：回溯法，每一步选择放'('或')'，通过 left/right 计数器剪枝\n#       关键约束 —— 放'('：left < n ；放')'：right < left（保证括号能\"消消乐\"配对）\n# 时间 O(4^n / √n)（第n个卡特兰数），空间 O(n)（递归栈深度）\n#\n# 🎯 面试推荐：回溯法是本题的最佳解法，也是面试官最期待的方法\n#    - 思路清晰，容易讲解\n#    - 完美体现\"选择 → 递归 → 撤销\"的回溯模板\n#    - 剪枝条件简洁优雅，天然无重复\n#\n# ⚠️ 易错点/误区：\n# 1. 放')'的条件是 right < left，不是 right < n（否则会生成非法括号如 \")(\"）\n# 2. 收集结果时要用 ''.join(path) 把列表拼成字符串，不是 path.copy()\n# 3. 每次选择后必须 path.pop() 回溯，否则路径会越来越长\nclass Solution:\n    def generateParenthesis(self, n: int) -> List[str]:\n        path = []\n        result = []\n        def makestr(n, left, right):\n            # 终止条件：path长度达到2n，说明一个完整括号串已生成\n            if len(path) == 2 * n:\n                result.append(''.join(path))\n                return\n            # 分支1：可以放'(' —— 左括号还没用完\n            if left < n:\n                path.append('(')           # 做选择\n                makestr(n, left + 1, right) # 递归\n                path.pop()                  # 撤销选择\n            # 分支2：可以放')' —— 右括号数量必须 < 左括号（保证有'('来配对）\n            if right < left:\n                path.append(')')            # 做选择\n                makestr(n, left, right + 1) # 递归\n                path.pop()                  # 撤销选择\n        makestr(n, 0, 0)\n        return result"
  },
  {
    "id": "79",
    "slug": "79-单词搜索",
    "title": "单词搜索",
    "titleEn": "Word Search",
    "category": "回溯",
    "difficulty": "中等",
    "topic": "矩阵回溯",
    "completed": true,
    "leetcodeSlug": "word-search",
    "leetcodeUrl": "https://leetcode.cn/problems/word-search/",
    "acceptanceRate": 51.2,
    "solutionCount": 3775,
    "companyTagCount": 90,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "回溯",
      "矩阵回溯",
      "深度优先搜索",
      "数组",
      "字符串",
      "矩阵"
    ],
    "sourcePath": "hot100/0322/79.单词搜索.py",
    "lastUpdated": "2026-03-22",
    "lastUpdatedAt": "2026-03-22T12:06:39.457Z",
    "interviewPattern": "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",
    "thoughts": [
      "需二刷：DFS + 回溯在二维网格上的应用",
      "思路：遍历 board 每个格子作为起点，用 DFS 沿上下左右四个方向",
      "时间 O(m * n * 4^L)，空间 O(m * n)  （L  word 长度）",
      "遍历 board 每个格子作为 DFS 起点"
    ],
    "pitfalls": [
      "不要在 dfs 内部检查 word[index+1]，会导致最后一个字母时越界",
      "2. visited 标记必须在 for 循环结束后撤销（回溯），否则会影响其他路径",
      "3. 边界检查用 0 < ni < m 而不是 ni > m，因为下标从 0 开始",
      "4. dfs 返回值要用 if dfs(...): return True 接住，否则找到路径也传不回去",
      "访问矩阵，防止同一条路径中重复使用同一个格子",
      "新坐标在边界内且未被访问过"
    ],
    "solutionGuide": {
      "idea": "需二刷：DFS + 回溯在二维网格上的应用",
      "interviewSteps": [
        "先说明核心考点：矩阵回溯。",
        "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",
        "关键词：回溯 / 矩阵回溯 / 深度优先搜索 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "不要在 dfs 内部检查 word[index+1]，会导致最后一个字母时越界"
    },
    "codePreview": "# 📌 需二刷：DFS + 回溯在二维网格上的应用\n#\n# 思路：遍历 board 每个格子作为起点，用 DFS 沿上下左右四个方向\n#       逐个匹配 word 中的字母，走不通就回溯（撤销 visited 标记）\n# 时间 O(m * n * 4^L)，空间 O(m * n)  （L = word 长度）\n#\n# ⚠️ 易错点/误区：\n# 1. 字母匹配应统一在 dfs 入口检查 board[i][j] == word[index]\n#    不要在 dfs 内部检查 word[index+1]，会导致最后一个字母时越界\n# 2. visited 标记必须在 for 循环结束后撤销（回溯），否则会影响其他路径\n# 3. 边界检查用 0 <= ni < m 而不是 ni > m，因为下标从 0 开始\n# 4. dfs 返回值要用 if dfs(...): return True 接住，否则找到路径也传不回去\nclass Solution:\n    def exist(self, board: List[List[str]], word: str) -> bool:\n        # 上、下、右、左 四个方向的坐标偏移量\n        direction = [(-1,0),(1,0),(0,1),(0,-1)]\n        m,n = len(board), len(board[0])\n        # 访问矩阵，防止同一条路径中重复使用同一个格子\n        visited = [[False]*n for _ in range(m)]\n        def dfs(i,j,index):\n            # 当前格子字母不匹配，剪枝\n            if board[i][j] != word[index]:\n                return False\n            # 所有字母都匹配完了，找到了合法路径\n            if index == len(word) - 1:\n                return True\n            # 标记当前格子为已访问\n            visited[i][j] = True\n            # 尝试上下左右四个方向\n            for di,dj in direction:\n                ni,nj = i+di,j+dj\n                # 新坐标在边界内且未被访问过\n                if 0 <= ni < m and 0 <= nj < n and not visited[ni][nj]:\n                    if dfs(ni,nj,index+1):\n                        return True\n            # 回溯：撤销标记，让其他路径可以使用这个格子\n            visited[i][j] = False\n            return False\n        # 遍历 board 每个格子作为 DFS 起点\n        for i in range(m):\n            for j in range(n):\n                if dfs(i, j, 0):\n                    return True\n        return False"
  },
  {
    "id": "131",
    "slug": "131-分割回文串",
    "title": "分割回文串",
    "titleEn": "Palindrome Partitioning",
    "category": "回溯",
    "difficulty": "中等",
    "topic": "回溯 + 回文判断",
    "completed": false,
    "leetcodeSlug": "palindrome-partitioning",
    "leetcodeUrl": "https://leetcode.cn/problems/palindrome-partitioning/",
    "acceptanceRate": 75.1,
    "solutionCount": 2865,
    "companyTagCount": 54,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "回溯",
      "回溯 + 回文判断",
      "字符串",
      "动态规划"
    ],
    "interviewPattern": "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",
    "thoughts": [
      "核心考点：回溯 + 回文判断",
      "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：回溯 + 回文判断",
      "interviewSteps": [
        "先说明核心考点：回溯 + 回文判断。",
        "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",
        "关键词：回溯 / 回溯 + 回文判断 / 字符串 / 动态规划。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "51",
    "slug": "51-n-皇后",
    "title": "N 皇后",
    "titleEn": "N-Queens",
    "category": "回溯",
    "difficulty": "困难",
    "topic": "棋盘回溯",
    "completed": false,
    "leetcodeSlug": "n-queens",
    "leetcodeUrl": "https://leetcode.cn/problems/n-queens/",
    "acceptanceRate": 75.3,
    "solutionCount": 4447,
    "companyTagCount": 77,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "回溯",
      "棋盘回溯",
      "数组"
    ],
    "interviewPattern": "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",
    "thoughts": [
      "核心考点：棋盘回溯",
      "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：棋盘回溯",
      "interviewSteps": [
        "先说明核心考点：棋盘回溯。",
        "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",
        "关键词：回溯 / 棋盘回溯 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "33",
    "slug": "33-搜索旋转排序数组",
    "title": "搜索旋转排序数组",
    "titleEn": "Search in Rotated Sorted Array",
    "category": "二分查找",
    "difficulty": "中等",
    "topic": "二分变形",
    "completed": true,
    "leetcodeSlug": "search-in-rotated-sorted-array",
    "leetcodeUrl": "https://leetcode.cn/problems/search-in-rotated-sorted-array/",
    "acceptanceRate": 46.3,
    "solutionCount": 6580,
    "companyTagCount": 153,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二分查找",
      "二分变形",
      "数组"
    ],
    "sourcePath": "hot100/0326/33.搜索旋转排序数组.py",
    "lastUpdated": "2026-03-26",
    "lastUpdatedAt": "2026-03-26T08:05:20.985Z",
    "interviewPattern": "先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。",
    "thoughts": [
      "思路：每次取 mid，必有一半有序。在有序半边判断 target 是否在范围内，",
      "时间 O(log n)，空间 O(1)"
    ],
    "pitfalls": [
      "3. 判断 target 范围时注意 < 和 < 的区别：",
      "- 面试时 mid 的计算推荐写 left + (right - left) // 2，防止整数溢出"
    ],
    "solutionGuide": {
      "idea": "思路：每次取 mid，必有一半有序。在有序半边判断 target 是否在范围内，",
      "interviewSteps": [
        "先说明核心考点：二分变形。",
        "先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。",
        "关键词：二分查找 / 二分变形 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "3. 判断 target 范围时注意 < 和 < 的区别："
    },
    "codePreview": "# 📌 需二刷：旋转数组二分查找（判断有序半边 + 范围收缩）\n#\n# 思路：每次取 mid，必有一半有序。在有序半边判断 target 是否在范围内，\n#       在就往那边缩，不在就去另一边。\n# 时间 O(log n)，空间 O(1)\n#\n# ⚠️ 易错点/误区：\n# 1. 循环条件必须是 left <= right（下标），不是 nums[left] 和 nums[right] 比值\n#    → 旋转数组的值关系不稳定，用值判断会导致提前退出循环\n# 2. 判断左半边有序用 <=：nums[left] <= nums[mid]（等号处理 left == mid 的情况）\n# 3. 判断 target 范围时注意 < 和 <= 的区别：\n#    nums[mid] 已经判断过不等于 target，所以和 mid 比较用严格 <\n# 4. 不需要嵌套二分！while 循环本身就在不断二分，每次只移动 left 或 right\n#\n# 💡 面试技巧：\n# - 先跟面试官确认：数组中有无重复元素？（有重复是 81 题，更复杂）\n# - 可以先画图说明旋转数组的两段递增结构，再推导二分逻辑\n# - 面试时 mid 的计算推荐写 left + (right - left) // 2，防止整数溢出\n#   （Python 无溢出问题，但 Java/C++ 面试中这是加分项）\nclass Solution:\n    def search(self, nums: List[int], target: int) -> int:\n        left, right = 0, len(nums) - 1\n        while left <= right:\n            mid = left + (right - left) // 2  # 面试推荐写法，防溢出\n            # 找到了，直接返回\n            if nums[mid] == target:\n                return mid\n            # 判断哪半边有序\n            if nums[left] <= nums[mid]:\n                # 左半边 [left, mid] 有序\n                if nums[left] <= target < nums[mid]:\n                    right = mid - 1   # target 在有序的左半边，去左边找\n                else:\n                    left = mid + 1    # target 不在左半边，去右边找\n            else:\n                # 右半边 [mid, right] 有序\n                if nums[mid] < target <= nums[right]:\n                    left = mid + 1    # target 在有序的右半边，去右边找\n                else:\n                    right = mid - 1   # target 不在右半边，去左边找\n        return -1"
  },
  {
    "id": "34",
    "slug": "34-在排序数组中查找首尾位置",
    "title": "在排序数组中查找元素的第一个和最后一个位置",
    "titleEn": "Find First and Last Position of Element in Sorted Array",
    "category": "二分查找",
    "difficulty": "中等",
    "topic": "二分边界",
    "completed": true,
    "leetcodeSlug": "find-first-and-last-position-of-element-in-sorted-array",
    "leetcodeUrl": "https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/",
    "acceptanceRate": 46.9,
    "solutionCount": 10571,
    "companyTagCount": 102,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二分查找",
      "二分边界",
      "数组"
    ],
    "sourcePath": "hot100/0327/34.在排序数组中查找元素的第一个和最后一个位置.py",
    "lastUpdated": "2026-04-02",
    "lastUpdatedAt": "2026-04-02T09:55:07.616Z",
    "interviewPattern": "先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。",
    "thoughts": [
      "思路：两次二分查找，分别找 target 的第一个位置（左边界）和最后一个位置（右边界）",
      "时间 O(log n)，空间 O(1)",
      "核心思想：把「找左边界」和「找右边界」统一为一个函数"
    ],
    "pitfalls": [
      "需二刷：二分查找找边界（左边界 + 右边界）",
      "思路：两次二分查找，分别找 target 的第一个位置（左边界）和最后一个位置（右边界）",
      "- 找左边界：nums[mid] > target 时收缩右边界（right  mid），让搜索往左逼近",
      "- 找右边界：nums[mid] < target 时收缩左边界（left  mid + 1），让搜索往右逼近",
      "2. 找右边界时方向容易搞反——nums[mid] < target 应该让 left 右移而非 right 左移",
      "3. 找右边界用 right  mid（不要 mid-1），配合 while left ! right 使用，",
      "否则 left 可能跳过 right 导致死循环",
      "需要在左边界二分后验证 nums[left]  target"
    ],
    "solutionGuide": {
      "idea": "思路：两次二分查找，分别找 target 的第一个位置（左边界）和最后一个位置（右边界）",
      "interviewSteps": [
        "先说明核心考点：二分边界。",
        "先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。",
        "关键词：二分查找 / 二分边界 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "需二刷：二分查找找边界（左边界 + 右边界）"
    },
    "codePreview": "# 📌 需二刷：二分查找找边界（左边界 + 右边界）\n#\n# 思路：两次二分查找，分别找 target 的第一个位置（左边界）和最后一个位置（右边界）\n#   - 找左边界：nums[mid] >= target 时收缩右边界（right = mid），让搜索往左逼近\n#   - 找右边界：nums[mid] <= target 时收缩左边界（left = mid + 1），让搜索往右逼近\n# 时间 O(log n)，空间 O(1)\n#\n# ⚠️ 易错点/误区：\n# 1. left = mid 会导致死循环（当 left+1 == right 时 mid == left，永远不变）\n#    正确做法：left = mid + 1，确保搜索范围一定缩小\n# 2. 找右边界时方向容易搞反——nums[mid] <= target 应该让 left 右移而非 right 左移\n# 3. 找右边界用 right = mid（不要 mid-1），配合 while left != right 使用，\n#    否则 left 可能跳过 right 导致死循环\n# 4. target 可能不在数组中但在 nums[0] 和 nums[-1] 范围内（如 [1,3,5] 找 2），\n#    需要在左边界二分后验证 nums[left] == target\n# 5. 右边界的结果是 right - 1（因为 left = mid + 1 会多走一步）\nclass Solution:\n    def searchRange(self, nums: List[int], target: int) -> List[int]:\n        # 空数组直接返回\n        if not nums:\n            return [-1,-1]\n        # target 超出数组范围，不可能存在\n        if nums[0] > target or nums[-1] < target:\n            return [-1,-1]\n        # ===== 第一次二分：找左边界 =====\n        left = 0\n        right = len(nums)                       # 右边界用 len(nums)，左闭右开 [left, right)\n        while left != right:\n            mid = (left + right) // 2\n            if nums[mid] >= target:              # mid 可能是答案或答案在更左边\n                right = mid                      # 收缩右边界\n            else:                                # nums[mid] < target，mid 肯定不是答案\n                left = mid + 1                   # 跳过 mid，避免死循环\n        tmpleft = left                           # 循环结束时 left == right，即左边界位置\n        # 验证：target 可能根本不存在于数组中\n        if tmpleft >= len(nums) or nums[tmpleft] != target:\n            return [-1, -1]\n        # ===== 第二次二分：找右边界 =====\n        left = 0\n        right = len(nums)\n        while left != right:\n            mid = (left + right) // 2\n            if nums[mid] <= target:              # mid 可能是答案或答案在更右边\n                left = mid + 1                   # 收缩左边界，跳过 mid 避免死循环\n            else:                                # nums[mid] > target，mid 肯定不是答案\n                right = mid                      # 收缩右边界\n        return [tmpleft, right - 1]              # right-1 因为 left = mid+1 多走了一步\n# ======================================================\n# 📝 面试推荐写法：提取通用 bisect 函数\n# ======================================================\n# 核心思想：把「找左边界」和「找右边界」统一为一个函数\n# bisect_left(target)  → 第一个 >= target 的位置\n# bisect_right(target) → 第一个 > target 的位置（即 bisect_left(target+1)）\n# 右边界 = bisect_right(target) - 1\n#\n# class Solution:\n#     def searchRange(self, nums: List[int], target: int) -> List[int]:\n#         def bisect_left(target):\n#             \"\"\"找第一个 >= target 的位置\"\"\"\n#             lo, hi = 0, len(nums)\n#             while lo < hi:\n#                 mid = (lo + hi) // 2\n#                 if nums[mid] >= target:\n#                     hi = mid\n#                 else:\n#                     lo = mid + 1\n#             return lo\n#\n#         left = bisect_left(target)\n#         # target 不存在\n#         if left >= len(nums) or nums[left] != target:\n#             return [-1, -1]\n#         # 右边界 = 第一个 > target 的位置 - 1 = bisect_left(target+1) - 1\n#         right = bisect_left(target + 1) - 1\n#         return [left, right]\n# ======================================================"
  },
  {
    "id": "35",
    "slug": "35-搜索插入位置",
    "title": "搜索插入位置",
    "titleEn": "Search Insert Position",
    "category": "二分查找",
    "difficulty": "简单",
    "topic": "标准二分",
    "completed": false,
    "leetcodeSlug": "search-insert-position",
    "leetcodeUrl": "https://leetcode.cn/problems/search-insert-position/",
    "acceptanceRate": 49.7,
    "solutionCount": 10501,
    "companyTagCount": 71,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二分查找",
      "标准二分",
      "数组"
    ],
    "interviewPattern": "先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。",
    "thoughts": [
      "核心考点：标准二分",
      "先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：标准二分",
      "interviewSteps": [
        "先说明核心考点：标准二分。",
        "先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。",
        "关键词：二分查找 / 标准二分 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "74",
    "slug": "74-搜索二维矩阵",
    "title": "搜索二维矩阵",
    "titleEn": "Search a 2D Matrix",
    "category": "二分查找",
    "difficulty": "中等",
    "topic": "二分 / Z 字形",
    "completed": false,
    "leetcodeSlug": "search-a-2d-matrix",
    "leetcodeUrl": "https://leetcode.cn/problems/search-a-2d-matrix/",
    "acceptanceRate": 52.8,
    "solutionCount": 4409,
    "companyTagCount": 78,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二分查找",
      "二分 / Z 字形",
      "数组",
      "矩阵"
    ],
    "interviewPattern": "先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。",
    "thoughts": [
      "核心考点：二分 / Z 字形",
      "先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：二分 / Z 字形",
      "interviewSteps": [
        "先说明核心考点：二分 / Z 字形。",
        "先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。",
        "关键词：二分查找 / 二分 / Z 字形 / 数组 / 矩阵。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "153",
    "slug": "153-寻找旋转排序数组中的最小值",
    "title": "寻找旋转排序数组中的最小值",
    "titleEn": "Find Minimum in Rotated Sorted Array",
    "category": "二分查找",
    "difficulty": "中等",
    "topic": "二分变形",
    "completed": false,
    "leetcodeSlug": "find-minimum-in-rotated-sorted-array",
    "leetcodeUrl": "https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/",
    "acceptanceRate": 59.4,
    "solutionCount": 3879,
    "companyTagCount": 77,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二分查找",
      "二分变形",
      "数组"
    ],
    "interviewPattern": "先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。",
    "thoughts": [
      "核心考点：二分变形",
      "先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：二分变形",
      "interviewSteps": [
        "先说明核心考点：二分变形。",
        "先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。",
        "关键词：二分查找 / 二分变形 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "4",
    "slug": "4-寻找两个正序数组的中位数",
    "title": "寻找两个正序数组的中位数",
    "titleEn": "Median of Two Sorted Arrays",
    "category": "二分查找",
    "difficulty": "困难",
    "topic": "划分数组",
    "completed": false,
    "leetcodeSlug": "median-of-two-sorted-arrays",
    "leetcodeUrl": "https://leetcode.cn/problems/median-of-two-sorted-arrays/",
    "acceptanceRate": 44.7,
    "solutionCount": 9530,
    "companyTagCount": 196,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二分查找",
      "划分数组",
      "数组",
      "分治"
    ],
    "interviewPattern": "先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。",
    "thoughts": [
      "核心考点：划分数组",
      "先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：划分数组",
      "interviewSteps": [
        "先说明核心考点：划分数组。",
        "先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。",
        "关键词：二分查找 / 划分数组 / 数组 / 分治。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "20",
    "slug": "20-有效的括号",
    "title": "有效的括号",
    "titleEn": "Valid Parentheses",
    "category": "栈",
    "difficulty": "简单",
    "topic": "栈匹配",
    "completed": true,
    "leetcodeSlug": "valid-parentheses",
    "leetcodeUrl": "https://leetcode.cn/problems/valid-parentheses/",
    "acceptanceRate": 45.7,
    "solutionCount": 13204,
    "companyTagCount": 255,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "栈",
      "栈匹配",
      "字符串"
    ],
    "sourcePath": "hot100/0320/20.有效的括号.py",
    "lastUpdated": "2026-03-19",
    "lastUpdatedAt": "2026-03-19T15:49:01.615Z",
    "interviewPattern": "遇到最近未匹配、嵌套结构、下一个更大/更小值时优先想栈；单调栈要说明栈内维护什么顺序。",
    "thoughts": [
      "思路：栈——左括号入栈，遇右括号弹栈顶检查是否配对",
      "时间 O(n)，空间 O(n)",
      "3. pop 之前必须先检查栈是否为空，否则空栈 pop 报 IndexError"
    ],
    "pitfalls": [
      "3. pop 之前必须先检查栈是否为空，否则空栈 pop 报 IndexError"
    ],
    "solutionGuide": {
      "idea": "思路：栈——左括号入栈，遇右括号弹栈顶检查是否配对",
      "interviewSteps": [
        "先说明核心考点：栈匹配。",
        "遇到最近未匹配、嵌套结构、下一个更大/更小值时优先想栈；单调栈要说明栈内维护什么顺序。",
        "关键词：栈 / 栈匹配 / 字符串。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "3. pop 之前必须先检查栈是否为空，否则空栈 pop 报 IndexError"
    },
    "codePreview": "class Solution:\n    # 思路：栈——左括号入栈，遇右括号弹栈顶检查是否配对\n    # 时间 O(n)，空间 O(n)\n    #\n    # ⚠️ 易错点/误区：\n    # 1. if char == '(' or '[' or '{' 永远为 True！非空字符串是 truthy\n    #    正确写法：if char in '([{'\n    # 2. 字典方向要对：key 是右括号，value 是左括号（因为遇到右括号时查表）\n    # 3. pop 之前必须先检查栈是否为空，否则空栈 pop 报 IndexError\n    # 4. 最终检查 stack 是否为空要放在 for 循环外面，放里面会每次迭代都判断\n    def isValid(self, s: str) -> bool:\n        stack = []\n        matchpair = {                       # 右括号 → 对应的左括号\n            '}':'{',\n            ']':'[',\n            ')':'('\n        }\n        for char in s:\n            if char in '([{':               # 左括号 → 入栈\n                stack.append(char)\n            else:                           # 右括号 → 弹栈检查配对\n                if not stack:               # 栈空说明多出右括号\n                    return False\n                top = stack.pop()\n                if top != matchpair[char]:  # 栈顶和当前右括号不配对\n                    return False\n        return not stack                    # 栈空=有效，栈非空=多出左括号"
  },
  {
    "id": "155",
    "slug": "155-最小栈",
    "title": "最小栈",
    "titleEn": "Min Stack",
    "category": "栈",
    "difficulty": "中等",
    "topic": "辅助栈设计",
    "completed": true,
    "leetcodeSlug": "min-stack",
    "leetcodeUrl": "https://leetcode.cn/problems/min-stack/",
    "acceptanceRate": 62.8,
    "solutionCount": 3673,
    "companyTagCount": 105,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "栈",
      "辅助栈设计",
      "设计"
    ],
    "sourcePath": "hot100/0320/155.最小栈.py",
    "lastUpdated": "2026-03-20",
    "lastUpdatedAt": "2026-03-20T12:42:39.552Z",
    "interviewPattern": "遇到最近未匹配、嵌套结构、下一个更大/更小值时优先想栈；单调栈要说明栈内维护什么顺序。",
    "thoughts": [
      "思路：用一个辅助栈 minval 同步记录每一层的最小值",
      "两个栈同进同退，minval 栈顶永远是当前最小值",
      "时间 O(1)（每个操作），空间 O(n)",
      "2. 查看栈顶用 [-1]，不要用 pop()，pop 会删除元素",
      "取 val 和当前最小值中较小的，压入辅助栈",
      "两个栈同时弹出，最小值自动回退",
      "minval 栈顶就是当前最小值"
    ],
    "pitfalls": [
      "1. __init__ 中变量要用 self.，否则只是局部变量，其他方法访问不到"
    ],
    "solutionGuide": {
      "idea": "思路：用一个辅助栈 minval 同步记录每一层的最小值",
      "interviewSteps": [
        "先说明核心考点：辅助栈设计。",
        "遇到最近未匹配、嵌套结构、下一个更大/更小值时优先想栈；单调栈要说明栈内维护什么顺序。",
        "关键词：栈 / 辅助栈设计 / 设计。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. __init__ 中变量要用 self.，否则只是局部变量，其他方法访问不到"
    },
    "codePreview": "#\n# 思路：用一个辅助栈 minval 同步记录每一层的最小值\n#       两个栈同进同退，minval 栈顶永远是当前最小值\n# 时间 O(1)（每个操作），空间 O(n)\n#\n# ⚠️ 易错点/误区：\n# 1. __init__ 中变量要用 self.，否则只是局部变量，其他方法访问不到\n# 2. 查看栈顶用 [-1]，不要用 pop()，pop 会删除元素\n# 3. minval 每次 push 都要追加一个值（取 min），保持和 stack 等长\n#\nclass MinStack:\n    def __init__(self):\n        self.stack = []       # 主栈：存所有元素\n        self.minval = []      # 辅助栈：每一层对应的最小值\n    def push(self, val: int) -> None:\n        self.stack.append(val)\n        if self.minval:\n            # 取 val 和当前最小值中较小的，压入辅助栈\n            self.minval.append(min(val, self.minval[-1]))\n        else:\n            # 第一个元素，直接压入\n            self.minval.append(val)\n    def pop(self) -> None:\n        # 两个栈同时弹出，最小值自动回退\n        self.stack.pop()\n        self.minval.pop()\n    def top(self) -> int:\n        return self.stack[-1]\n    def getMin(self) -> int:\n        # minval 栈顶就是当前最小值\n        return self.minval[-1]\n# Your MinStack object will be instantiated and called as such:\n# obj = MinStack()\n# obj.push(val)\n# obj.pop()\n# param_3 = obj.top()\n# param_4 = obj.getMin()"
  },
  {
    "id": "394",
    "slug": "394-字符串解码",
    "title": "字符串解码",
    "titleEn": "Decode String",
    "category": "栈",
    "difficulty": "中等",
    "topic": "栈嵌套",
    "completed": true,
    "leetcodeSlug": "decode-string",
    "leetcodeUrl": "https://leetcode.cn/problems/decode-string/",
    "acceptanceRate": 61.7,
    "solutionCount": 3666,
    "companyTagCount": 95,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "栈",
      "栈嵌套",
      "递归",
      "字符串"
    ],
    "sourcePath": "hot100/0320/394.字符串解码.py",
    "lastUpdated": "2026-03-20",
    "lastUpdatedAt": "2026-03-20T14:38:03.235Z",
    "interviewPattern": "遇到最近未匹配、嵌套结构、下一个更大/更小值时优先想栈；单调栈要说明栈内维护什么顺序。",
    "thoughts": [
      "需二刷：双栈解码嵌套结构",
      "思路：用两个栈分别存数字和字符串，遇到 [ 压栈保存上下文，遇到 ] 弹栈拼接结果",
      "时间 O(n)，n 为解码后字符串长度（每个字符最多入栈出栈一次）",
      "空间 O(n)，栈的深度取决于嵌套层数",
      "\udca1 面试推荐：双栈法（本解法）",
      "- 思路直观，容易讲清楚",
      "- 另一种方法是递归，但栈的写法更不容易出错，推荐优先用栈"
    ],
    "pitfalls": [
      "1. 数字可能是多位的（如 \"12[a]\"），不能直接 cur_num  int(char)，",
      "2. 遇到字母时要用 cur_str + char（拼接），不能用  （会覆盖之前的字母）",
      "是「之前的字符串 + 重复次数 × 当前字符串」，顺序不能反"
    ],
    "solutionGuide": {
      "idea": "需二刷：双栈解码嵌套结构",
      "interviewSteps": [
        "先说明核心考点：栈嵌套。",
        "遇到最近未匹配、嵌套结构、下一个更大/更小值时优先想栈；单调栈要说明栈内维护什么顺序。",
        "关键词：栈 / 栈嵌套 / 递归 / 字符串。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 数字可能是多位的（如 \"12[a]\"），不能直接 cur_num  int(char)，"
    },
    "codePreview": "# 📌 需二刷：双栈解码嵌套结构\n#\n# 思路：用两个栈分别存数字和字符串，遇到 [ 压栈保存上下文，遇到 ] 弹栈拼接结果\n# 时间 O(n)，n 为解码后字符串长度（每个字符最多入栈出栈一次）\n# 空间 O(n)，栈的深度取决于嵌套层数\n#\n# 💡 面试推荐：双栈法（本解法）\n#   - 思路直观，容易讲清楚\n#   - 面试官容易追问：如何处理多位数字？→ cur_num * 10 + int(char)\n#   - 另一种方法是递归，但栈的写法更不容易出错，推荐优先用栈\n#\n# ⚠️ 易错点/误区：\n# 1. 数字可能是多位的（如 \"12[a]\"），不能直接 cur_num = int(char)，\n#    要用 cur_num = cur_num * 10 + int(char) 来逐位拼接\n# 2. 遇到字母时要用 cur_str += char（拼接），不能用 = （会覆盖之前的字母）\n# 3. ] 弹栈时的拼接顺序：letterstack.pop() + numstack.pop() * cur_str\n#    是「之前的字符串 + 重复次数 × 当前字符串」，顺序不能反\n# 4. 压栈时机是遇到 [，不是遇到数字或字母时\nclass Solution:\n    def decodeString(self, s: str) -> str:\n        numstack = []       # 存数字（重复次数）\n        letterstack = []    # 存字符串（进入 [ 之前的上下文）\n        cur_num = 0         # 当前正在拼的数字\n        cur_str = ''        # 当前正在拼的字符串\n        for char in s:\n            if char.isdigit():\n                # 处理多位数字，如 \"12\" → 1*10+2 = 12\n                cur_num = cur_num * 10 + int(char)\n            elif char == '[':\n                # 遇到 [：保存当前上下文到栈，然后重置\n                numstack.append(cur_num)\n                letterstack.append(cur_str)\n                cur_num = 0\n                cur_str = ''\n            elif char == ']':\n                # 遇到 ]：弹栈，拼接 = 之前的字符串 + 重复次数 × 当前字符串\n                cur_str = letterstack.pop() + numstack.pop() * cur_str\n            else:\n                # 普通字母，拼接到当前字符串\n                cur_str += char\n        return cur_str"
  },
  {
    "id": "739",
    "slug": "739-每日温度",
    "title": "每日温度",
    "titleEn": "Daily Temperatures",
    "category": "栈",
    "difficulty": "中等",
    "topic": "单调栈",
    "completed": true,
    "leetcodeSlug": "daily-temperatures",
    "leetcodeUrl": "https://leetcode.cn/problems/daily-temperatures/",
    "acceptanceRate": 69.7,
    "solutionCount": 4047,
    "companyTagCount": 79,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "栈",
      "单调栈",
      "数组"
    ],
    "sourcePath": "hot100/0320/739.每日温度.py",
    "lastUpdated": "2026-03-20",
    "lastUpdatedAt": "2026-03-20T13:28:34.496Z",
    "interviewPattern": "遇到最近未匹配、嵌套结构、下一个更大/更小值时优先想栈；单调栈要说明栈内维护什么顺序。",
    "thoughts": [
      "需二刷：单调栈模板题",
      "思路：维护一个单调递减栈（栈底到栈顶递减），栈中存下标。",
      "遍历温度数组，当前温度 > 栈顶温度时，说明栈顶那天等到了更高温度，",
      "弹出栈顶并计算等待天数（当前下标 - 栈顶下标）。",
      "时间 O(n)，空间 O(n)",
      "2. 比较温度时是 temperatures[stack[-1]]（栈顶下标对应的温度），",
      "3. 栈里存的是下标而非温度值，一个下标三个用途：取值、算距离、定位 result"
    ],
    "pitfalls": [
      "1. result 要用 [0]*n 初始化，不能用 []，因为后面要通过下标赋值"
    ],
    "solutionGuide": {
      "idea": "需二刷：单调栈模板题",
      "interviewSteps": [
        "先说明核心考点：单调栈。",
        "遇到最近未匹配、嵌套结构、下一个更大/更小值时优先想栈；单调栈要说明栈内维护什么顺序。",
        "关键词：栈 / 单调栈 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. result 要用 [0]*n 初始化，不能用 []，因为后面要通过下标赋值"
    },
    "codePreview": "# 📌 需二刷：单调栈模板题\n#\n# 思路：维护一个单调递减栈（栈底到栈顶递减），栈中存下标。\n#       遍历温度数组，当前温度 > 栈顶温度时，说明栈顶那天等到了更高温度，\n#       弹出栈顶并计算等待天数（当前下标 - 栈顶下标）。\n# 时间 O(n)，空间 O(n)\n#\n# ⚠️ 易错点/误区：\n# 1. result 要用 [0]*n 初始化，不能用 []，因为后面要通过下标赋值\n# 2. 比较温度时是 temperatures[stack[-1]]（栈顶下标对应的温度），\n#    不是 temperatures[-1]（温度数组的最后一个元素）\n# 3. 栈里存的是下标而非温度值，一个下标三个用途：取值、算距离、定位 result\nclass Solution:\n    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:\n        stack = []  # 单调递减栈，存下标\n        result = [0] * len(temperatures)  # 初始化为0，等不到更高温度的位置自然为0\n        for i in range(len(temperatures)):\n            # 当前温度比栈顶大 → 栈顶那天等到了更高温度\n            while stack and temperatures[i] > temperatures[stack[-1]]:\n                idx = stack.pop()\n                result[idx] = i - idx  # 等待天数 = 当前下标 - 栈顶下标\n            stack.append(i)  # 当前下标入栈，等待未来更高温度\n        return result"
  },
  {
    "id": "84",
    "slug": "84-柱状图中最大的矩形",
    "title": "柱状图中最大的矩形",
    "titleEn": "Largest Rectangle in Histogram",
    "category": "栈",
    "difficulty": "困难",
    "topic": "单调栈",
    "completed": true,
    "leetcodeSlug": "largest-rectangle-in-histogram",
    "leetcodeUrl": "https://leetcode.cn/problems/largest-rectangle-in-histogram/",
    "acceptanceRate": 49.6,
    "solutionCount": 2915,
    "companyTagCount": 83,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "栈",
      "单调栈",
      "数组"
    ],
    "sourcePath": "84.柱状图中最大的矩形.py",
    "lastUpdated": "2026-06-18",
    "lastUpdatedAt": "2026-06-18T15:20:29.616Z",
    "interviewPattern": "遇到最近未匹配、嵌套结构、下一个更大/更小值时优先想栈；单调栈要说明栈内维护什么顺序。",
    "thoughts": [
      "需二刷：单调栈求最大矩形（递增栈 + 哨兵技巧）",
      "思路：维护一个递增栈（存下标），当新柱子比栈顶矮时触发弹栈。",
      "被弹柱子的高度能形成的矩形，左边界是左边第一个更矮的（新栈顶），",
      "末尾加高度 0 的哨兵强制清空栈，省去收尾循环。",
      "时间 O(n)，空间 O(n)",
      "1. left  stack[-1] if stack else -1 ——栈空时左边界为 -1，宽度才能算对",
      "4. 弹栈时算的面积是 heights[idx] × width，不是 heights[i]"
    ],
    "pitfalls": [
      "被弹柱子的高度能形成的矩形，左边界是左边第一个更矮的（新栈顶），",
      "右边界是当前柱子 i。宽度  right - left - 1。",
      "1. left  stack[-1] if stack else -1 ——栈空时左边界为 -1，宽度才能算对",
      "新柱子比栈顶矮 → 栈顶柱子的右边界确定，弹栈算面积"
    ],
    "solutionGuide": {
      "idea": "需二刷：单调栈求最大矩形（递增栈 + 哨兵技巧）",
      "interviewSteps": [
        "先说明核心考点：单调栈。",
        "遇到最近未匹配、嵌套结构、下一个更大/更小值时优先想栈；单调栈要说明栈内维护什么顺序。",
        "关键词：栈 / 单调栈 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "被弹柱子的高度能形成的矩形，左边界是左边第一个更矮的（新栈顶），"
    },
    "codePreview": "# 📌 需二刷：单调栈求最大矩形（递增栈 + 哨兵技巧）\n#\n# 思路：维护一个递增栈（存下标），当新柱子比栈顶矮时触发弹栈。\n#       被弹柱子的高度能形成的矩形，左边界是左边第一个更矮的（新栈顶），\n#       右边界是当前柱子 i。宽度 = right - left - 1。\n#       末尾加高度 0 的哨兵强制清空栈，省去收尾循环。\n# 时间 O(n)，空间 O(n)\n#\n# ⚠️ 易错点/误区：\n# 1. left = stack[-1] if stack else -1 ——栈空时左边界为 -1，宽度才能算对\n# 2. right = i 是当前下标，不是被弹柱子的下标 idx\n# 3. 哨兵高度为 0，比所有柱子矮，能强制弹出所有剩余柱子\n# 4. 弹栈时算的面积是 heights[idx] × width，不是 heights[i]\nclass Solution:\n    def largestRectangleArea(self, heights: List[int]) -> int:\n        stack = []               # 递增栈，存下标，对应高度递增\n        result = 0\n        heights = heights + [0]  # 哨兵：强制清空栈，省去收尾逻辑\n        for i in range(len(heights)):\n            # 新柱子比栈顶矮 → 栈顶柱子的右边界确定，弹栈算面积\n            while stack and heights[i] < heights[stack[-1]]:\n                idx = stack.pop()                     # 被弹的柱子\n                left = stack[-1] if stack else -1     # 左边第一个更矮的\n                right = i                              # 右边第一个更矮的\n                width = right - left - 1               # 被弹柱子能覆盖的宽度\n                result = max(result, width * heights[idx])\n            stack.append(i)   # 当前柱子入栈（递增关系已恢复）\n        return result"
  },
  {
    "id": "215",
    "slug": "215-数组中的第-k-个最大元素",
    "title": "数组中的第K个最大元素",
    "titleEn": "Kth Largest Element in an Array",
    "category": "堆",
    "difficulty": "中等",
    "topic": "堆 / 快速选择",
    "completed": true,
    "leetcodeSlug": "kth-largest-element-in-an-array",
    "leetcodeUrl": "https://leetcode.cn/problems/kth-largest-element-in-an-array/",
    "acceptanceRate": 60.1,
    "solutionCount": 5985,
    "companyTagCount": 139,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "堆",
      "堆 / 快速选择",
      "数组",
      "分治",
      "快速选择",
      "排序",
      "堆（优先队列）"
    ],
    "sourcePath": "215.数组中的第K个最大元素.py",
    "lastUpdated": "2026-06-12",
    "lastUpdatedAt": "2026-06-12T14:24:43.246Z",
    "interviewPattern": "Top K 和数据流问题优先考虑堆；Python 小顶堆处理最大堆时注意符号反转。",
    "thoughts": [
      "核心考点：堆 / 快速选择",
      "Top K 和数据流问题优先考虑堆；Python 小顶堆处理最大堆时注意符号反转。"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "solutionGuide": {
      "idea": "核心考点：堆 / 快速选择",
      "interviewSteps": [
        "先说明核心考点：堆 / 快速选择。",
        "Top K 和数据流问题优先考虑堆；Python 小顶堆处理最大堆时注意符号反转。",
        "关键词：堆 / 堆 / 快速选择 / 数组 / 分治。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    },
    "codePreview": "# import heapq\n# class Solution:\n#     def findKthLargest(self, nums: List[int], k: int) -> int:\n#         pq = []\n#         for e in nums:\n#             heapq.heappush(pq,e)\n#             if len(pq) > k:\n#                 heapq.heappop(pq)\n#         return pq[0]\nimport random\nclass Solution:\n    def findKthLargest(self, nums: List[int],k: int) -> int:\n        random.shuffle(nums)\n        lo, hi = 0, len(nums)-1\n        k = len(nums) - k\n        while lo <= hi:\n            p = self.partition(nums, lo, hi)\n            if p < k:\n                lo = p + 1\n            elif p > k:\n                hi = p - 1\n            else:\n                return nums[p]\n        return -1\n    def partition(self, nums:List[int], lo: int, hi: int):\n        pivot = nums[lo]\n        i, j = lo + 1, hi\n        while i <= j:\n            while i <= hi and nums[i] < pivot:\n                i += 1\n            while j >= lo and nums[j] > pivot:\n                j -= 1\n            if i >= j:\n                break\n            nums[i], nums[j] = nums[j], nums[i]\n            i += 1\n            j -= 1\n        nums[lo], nums[j] = nums[j], nums[lo]\n        return j"
  },
  {
    "id": "347",
    "slug": "347-前-k-个高频元素",
    "title": "前 K 个高频元素",
    "titleEn": "Top K Frequent Elements",
    "category": "堆",
    "difficulty": "中等",
    "topic": "map + 堆",
    "completed": true,
    "leetcodeSlug": "top-k-frequent-elements",
    "leetcodeUrl": "https://leetcode.cn/problems/top-k-frequent-elements/",
    "acceptanceRate": 65.9,
    "solutionCount": 4470,
    "companyTagCount": 117,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "堆",
      "map + 堆",
      "数组",
      "哈希表",
      "分治",
      "桶排序",
      "计数",
      "快速选择",
      "排序",
      "堆（优先队列）"
    ],
    "sourcePath": "347.前 K 个高频元素.py",
    "lastUpdated": "2026-06-16",
    "lastUpdatedAt": "2026-06-16T14:10:15.202Z",
    "interviewPattern": "Top K 和数据流问题优先考虑堆；Python 小顶堆处理最大堆时注意符号反转。",
    "thoughts": [
      "需二刷：map 统计频率 + 最小堆维护 Top K（堆存元组 (频率, 元素)）",
      "思路：先用 map 统计每个元素的出现频率，再遍历 map，往大小为 k 的最小堆里推",
      "(频率, 元素) 元组，堆按频率排序，堆顶是频率最低的，超了就弹出。",
      "最终堆里剩下频率最高的 k 个元素。",
      "时间 O(n log k)，空间 O(n)",
      "1. 堆里存 (count, num) 而不是 (num, count) —— heapq 按元组第一个元素排序",
      "如果存 (num, count)，堆会按 num 的大小排序，完全错了"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "solutionGuide": {
      "idea": "需二刷：map 统计频率 + 最小堆维护 Top K（堆存元组 (频率, 元素)）",
      "interviewSteps": [
        "先说明核心考点：map + 堆。",
        "Top K 和数据流问题优先考虑堆；Python 小顶堆处理最大堆时注意符号反转。",
        "关键词：堆 / map + 堆 / 数组 / 哈希表。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    },
    "codePreview": "# 📌 需二刷：map 统计频率 + 最小堆维护 Top K（堆存元组 (频率, 元素)）\n#\n# 思路：先用 map 统计每个元素的出现频率，再遍历 map，往大小为 k 的最小堆里推\n#       (频率, 元素) 元组，堆按频率排序，堆顶是频率最低的，超了就弹出。\n#       最终堆里剩下频率最高的 k 个元素。\n# 时间 O(n log k)，空间 O(n)\n#\n# 替代写法：可用 Counter 替代手写频率统计\n#   from collections import Counter\n#   freq = Counter(nums)  # 一行搞定，结果和下面 freq 一样\n#\n# ⚠️ 易错点/误区：\n# 1. 堆里存 (count, num) 而不是 (num, count) —— heapq 按元组第一个元素排序\n#    如果存 (num, count)，堆会按 num 的大小排序，完全错了\n# 2. 遍历 freq.items() 时，解包顺序是 (num, count)，和推入堆的 (count, num) 相反\n# 3. 最后从堆里取元素时，要取元组的第二个值 num，不是 count\nimport heapq\nclass Solution:\n    def topKFrequent(self, nums: List[int], k: int) -> List[int]:\n        freq = {}\n        for num in nums:\n            freq[num] = freq.get(num, 0) + 1\n        pq = []\n        for num, count in freq.items():\n            heapq.heappush(pq, (count, num))   # 元组 (频率, 元素)，堆按频率排序\n            if len(pq) > k:\n                heapq.heappop(pq)               # 弹出频率最低的\n        result = []\n        for count, num in pq:                   # 解包元组，只取元素\n            result.append(num)\n        return result"
  },
  {
    "id": "295",
    "slug": "295-数据流的中位数",
    "title": "数据流的中位数",
    "titleEn": "Find Median from Data Stream",
    "category": "堆",
    "difficulty": "困难",
    "topic": "双堆设计",
    "completed": true,
    "leetcodeSlug": "find-median-from-data-stream",
    "leetcodeUrl": "https://leetcode.cn/problems/find-median-from-data-stream/",
    "acceptanceRate": 59.5,
    "solutionCount": 1291,
    "companyTagCount": 90,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "堆",
      "双堆设计",
      "设计",
      "双指针",
      "数据流",
      "排序",
      "堆（优先队列）"
    ],
    "sourcePath": "295.数据流的中位数.py",
    "lastUpdated": "2026-06-17",
    "lastUpdatedAt": "2026-06-17T15:37:22.373Z",
    "interviewPattern": "Top K 和数据流问题优先考虑堆；Python 小顶堆处理最大堆时注意符号反转。",
    "thoughts": [
      "需二刷：双堆配合求数据流中位数（大顶堆 + 小顶堆）",
      "思路：将数据流分成两半——较小的一半用大顶堆（存负数模拟），较大的一半用小顶堆。",
      "保持两个堆大小平衡（最多差 1），中位数由堆顶计算得出。",
      "时间 O(log n)（每次 addNum），空间 O(n)",
      "1. Python 只有最小堆，用存负值模拟最大堆，取值时要取反",
      "3. 两个堆的大小差不能超过 1，否则中位数计算错误",
      "维持两个堆大小平衡：large 始终 < small < large+1"
    ],
    "pitfalls": [
      "3. 两个堆的大小差不能超过 1，否则中位数计算错误"
    ],
    "solutionGuide": {
      "idea": "需二刷：双堆配合求数据流中位数（大顶堆 + 小顶堆）",
      "interviewSteps": [
        "先说明核心考点：双堆设计。",
        "Top K 和数据流问题优先考虑堆；Python 小顶堆处理最大堆时注意符号反转。",
        "关键词：堆 / 双堆设计 / 设计 / 双指针。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "3. 两个堆的大小差不能超过 1，否则中位数计算错误"
    },
    "codePreview": "# 📌 需二刷：双堆配合求数据流中位数（大顶堆 + 小顶堆）\n#\n# 思路：将数据流分成两半——较小的一半用大顶堆（存负数模拟），较大的一半用小顶堆。\n#       保持两个堆大小平衡（最多差 1），中位数由堆顶计算得出。\n# 时间 O(log n)（每次 addNum），空间 O(n)\n#\n# ⚠️ 易错点/误区：\n# 1. Python 只有最小堆，用存负值模拟最大堆，取值时要取反\n# 2. heappushpop 传参符号：往 large 过一道传正数，往 small 过一道传负数\n# 3. 两个堆的大小差不能超过 1，否则中位数计算错误\n# 4. findMedian 要考虑奇偶两种长度情况\nimport heapq\nclass MedianFinder:\n    def __init__(self):\n        self.large = []      # 大顶堆（存负数）→ 存较小的一半，堆顶是较小半的最大值\n        self.small = []      # 小顶堆（存正数）→ 存较大的一半，堆顶是较大半的最小值\n    def addNum(self, num: int) -> None:\n        # 维持两个堆大小平衡：large 始终 <= small <= large+1\n        if len(self.large) < len(self.small):\n            # large 比 small 少 → 往 large 加一个\n            # 先把 num 扔进 small 过一道，取出 small 最小值，取反给 large\n            heapq.heappush(self.large, -heapq.heappushpop(self.small, num))\n        else:\n            # large 够了或相等 → 往 small 加一个\n            # 先把 -num 扔进 large 过一道，取出 large 最大值（即 -堆顶），取反给 small\n            heapq.heappush(self.small, -heapq.heappushpop(self.large, -num))\n    def findMedian(self) -> float:\n        if len(self.large) < len(self.small):\n            return self.small[0]            # 较大半多一个，直接取小顶堆堆顶\n        elif len(self.large) > len(self.small):\n            return -self.large[0]           # 较小半多一个，取大顶堆堆顶取反\n        else:\n            return (-self.large[0] + self.small[0]) / 2  # 一样多，取平均值\n# Your MedianFinder object will be instantiated and called as such:\n# obj = MedianFinder()\n# obj.addNum(num)\n# param_2 = obj.findMedian()"
  },
  {
    "id": "121",
    "slug": "121-买卖股票的最佳时机",
    "title": "买卖股票的最佳时机",
    "titleEn": "Best Time to Buy and Sell Stock",
    "category": "贪心",
    "difficulty": "简单",
    "topic": "一次遍历",
    "completed": true,
    "leetcodeSlug": "best-time-to-buy-and-sell-stock",
    "leetcodeUrl": "https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/",
    "acceptanceRate": 60.1,
    "solutionCount": 9305,
    "companyTagCount": 184,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "贪心",
      "一次遍历",
      "数组",
      "动态规划"
    ],
    "sourcePath": "hot100/0320/121.买卖股票的最佳时机.py",
    "lastUpdated": "2026-03-20",
    "lastUpdatedAt": "2026-03-20T07:47:19.105Z",
    "interviewPattern": "写出局部选择为什么不会破坏全局最优，面试中要用覆盖范围或交换论证解释。",
    "thoughts": [
      "思路：遍历价格，维护\"到目前为止的最低买入价\"，",
      "时间 O(n)，空间 O(1)"
    ],
    "pitfalls": [
      "3. return 不要写在 for 循环里面，否则第一轮就返回了"
    ],
    "solutionGuide": {
      "idea": "思路：遍历价格，维护\"到目前为止的最低买入价\"，",
      "interviewSteps": [
        "先说明核心考点：一次遍历。",
        "写出局部选择为什么不会破坏全局最优，面试中要用覆盖范围或交换论证解释。",
        "关键词：贪心 / 一次遍历 / 数组 / 动态规划。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "3. return 不要写在 for 循环里面，否则第一轮就返回了"
    },
    "codePreview": "# 📌 需二刷：DP 思维——用历史最低价推导当前最大利润\n#\n# 思路：遍历价格，维护\"到目前为止的最低买入价\"，\n#       每天都算\"今天卖出的利润\"，取全局最大值\n# 时间 O(n)，空间 O(1)\n#\n# ⚠️ 易错点/误区：\n# 1. Python 中 ^ 是异或运算，不是次方！10^5=15，应该用 10**5 或 float('inf')\n# 2. income 必须初始化为 0（最差情况不交易，利润为 0）\n# 3. return 不要写在 for 循环里面，否则第一轮就返回了\n# 4. 不需要 if/else 分支，每天同时做两件事：更新最低价 + 更新最大利润\n#\n# 💡 知识点：float('inf') 表示正无穷，比任何数字都大；float('-inf') 表示负无穷\n#    需要\"最大初始值\"用 float('inf')，需要\"最小初始值\"用 float('-inf')\nclass Solution:\n    def maxProfit(self, prices: List[int]) -> int:\n        buy = float('inf')   # 历史最低买入价，初始为正无穷\n        income = 0           # 最大利润，初始为 0（最差情况：不交易）\n        for num in prices:\n            buy = min(num, buy)            # 更新历史最低价\n            income = max(num - buy, income) # 今天卖出 vs 之前的最优利润\n        return income"
  },
  {
    "id": "55",
    "slug": "55-跳跃游戏",
    "title": "跳跃游戏",
    "titleEn": "Jump Game",
    "category": "贪心",
    "difficulty": "中等",
    "topic": "贪心覆盖",
    "completed": false,
    "leetcodeSlug": "jump-game",
    "leetcodeUrl": "https://leetcode.cn/problems/jump-game/",
    "acceptanceRate": 45.1,
    "solutionCount": 8175,
    "companyTagCount": 114,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "贪心",
      "贪心覆盖",
      "数组",
      "动态规划"
    ],
    "interviewPattern": "写出局部选择为什么不会破坏全局最优，面试中要用覆盖范围或交换论证解释。",
    "thoughts": [
      "核心考点：贪心覆盖",
      "写出局部选择为什么不会破坏全局最优，面试中要用覆盖范围或交换论证解释。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：贪心覆盖",
      "interviewSteps": [
        "先说明核心考点：贪心覆盖。",
        "写出局部选择为什么不会破坏全局最优，面试中要用覆盖范围或交换论证解释。",
        "关键词：贪心 / 贪心覆盖 / 数组 / 动态规划。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "45",
    "slug": "45-跳跃游戏-ii",
    "title": "跳跃游戏 II",
    "titleEn": "Jump Game II",
    "category": "贪心",
    "difficulty": "中等",
    "topic": "贪心 BFS",
    "completed": false,
    "leetcodeSlug": "jump-game-ii",
    "leetcodeUrl": "https://leetcode.cn/problems/jump-game-ii/",
    "acceptanceRate": 45.9,
    "solutionCount": 5832,
    "companyTagCount": 95,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "贪心",
      "贪心 BFS",
      "数组",
      "动态规划"
    ],
    "interviewPattern": "写出局部选择为什么不会破坏全局最优，面试中要用覆盖范围或交换论证解释。",
    "thoughts": [
      "核心考点：贪心 BFS",
      "写出局部选择为什么不会破坏全局最优，面试中要用覆盖范围或交换论证解释。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：贪心 BFS",
      "interviewSteps": [
        "先说明核心考点：贪心 BFS。",
        "写出局部选择为什么不会破坏全局最优，面试中要用覆盖范围或交换论证解释。",
        "关键词：贪心 / 贪心 BFS / 数组 / 动态规划。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "763",
    "slug": "763-划分字母区间",
    "title": "划分字母区间",
    "titleEn": "Partition Labels",
    "category": "贪心",
    "difficulty": "中等",
    "topic": "区间合并",
    "completed": false,
    "leetcodeSlug": "partition-labels",
    "leetcodeUrl": "https://leetcode.cn/problems/partition-labels/",
    "acceptanceRate": 79,
    "solutionCount": 2635,
    "companyTagCount": 37,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "贪心",
      "区间合并",
      "哈希表",
      "双指针",
      "字符串"
    ],
    "interviewPattern": "写出局部选择为什么不会破坏全局最优，面试中要用覆盖范围或交换论证解释。",
    "thoughts": [
      "核心考点：区间合并",
      "写出局部选择为什么不会破坏全局最优，面试中要用覆盖范围或交换论证解释。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：区间合并",
      "interviewSteps": [
        "先说明核心考点：区间合并。",
        "写出局部选择为什么不会破坏全局最优，面试中要用覆盖范围或交换论证解释。",
        "关键词：贪心 / 区间合并 / 哈希表 / 双指针。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "70",
    "slug": "70-爬楼梯",
    "title": "爬楼梯",
    "titleEn": "Climbing Stairs",
    "category": "动态规划",
    "difficulty": "简单",
    "topic": "斐波那契",
    "completed": true,
    "leetcodeSlug": "climbing-stairs",
    "leetcodeUrl": "https://leetcode.cn/problems/climbing-stairs/",
    "acceptanceRate": 55.8,
    "solutionCount": 9239,
    "companyTagCount": 193,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "动态规划",
      "斐波那契",
      "记忆化",
      "数学"
    ],
    "sourcePath": "hot100/0319/70.爬楼梯.py",
    "lastUpdated": "2026-03-19",
    "lastUpdatedAt": "2026-03-19T06:26:51.523Z",
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
    "thoughts": [
      "需二刷：动态规划入门题，理解状态转移方程",
      "思路：到第 n 阶的方法  到第 n-1 阶的方法 + 到第 n-2 阶的方法",
      "时间 O(n)，空间 O(n)",
      "方法二：滚动变量（空间优化）",
      "时间 O(n)，空间 O(1)"
    ],
    "pitfalls": [
      "1. dp[2] 赋值不能放在 n1 判断之前，否则 n1 时 dp 数组只有 2 个元素，dp[2] 越界",
      "2. return 要放在循环外面，不能在循环内 if in 时 return（此时 dp[n] 还没算）",
      "3.  是比较运算符（返回 True/False）， 才是赋值，不要混淆"
    ],
    "solutionGuide": {
      "idea": "需二刷：动态规划入门题，理解状态转移方程",
      "interviewSteps": [
        "先说明核心考点：斐波那契。",
        "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
        "关键词：动态规划 / 斐波那契 / 记忆化 / 数学。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. dp[2] 赋值不能放在 n1 判断之前，否则 n1 时 dp 数组只有 2 个元素，dp[2] 越界"
    },
    "codePreview": "# 📌 需二刷：动态规划入门题，理解状态转移方程\n#\n# 思路：到第 n 阶的方法 = 到第 n-1 阶的方法 + 到第 n-2 阶的方法\n#       因为最后一步要么跨 1 阶，要么跨 2 阶\n#\n# ⚠️ 易错点/误区：\n# 1. dp[2] 赋值不能放在 n==1 判断之前，否则 n=1 时 dp 数组只有 2 个元素，dp[2] 越界\n# 2. return 要放在循环外面，不能在循环内 if i==n 时 return（此时 dp[n] 还没算）\n# 3. == 是比较运算符（返回 True/False），= 才是赋值，不要混淆\n# 4. for 循环会自动递增 i，不需要手动 i += 1\nclass Solution:\n    # 方法一：dp 数组（标准写法）\n    # 时间 O(n)，空间 O(n)\n    def climbStairs(self, n: int) -> int:\n        if n <= 2:\n            return n\n        # 创建 dp 数组，dp[i] 表示爬到第 i 阶的方法数\n        dp = [0] * (n + 1)\n        # base case：爬到第 1 阶有 1 种，第 2 阶有 2 种\n        dp[1] = 1\n        dp[2] = 2\n        # 从第 3 阶开始，逐步递推\n        for i in range(3, n + 1):\n            dp[i] = dp[i-1] + dp[i-2]  # 状态转移方程\n        return dp[n]\n    # 方法二：滚动变量（空间优化）\n    # 时间 O(n)，空间 O(1)\n    # 因为每次只用到前两个值，所以不需要整个数组\n    def climbStairs_optimized(self, n: int) -> int:\n        if n <= 2:\n            return n\n        a, b = 1, 2  # a = dp[i-2], b = dp[i-1]\n        for i in range(3, n + 1):\n            a, b = b, a + b  # 同时更新：a 前移，b 变成新值\n        return b"
  },
  {
    "id": "118",
    "slug": "118-杨辉三角",
    "title": "杨辉三角",
    "titleEn": "Pascal's Triangle",
    "category": "动态规划",
    "difficulty": "简单",
    "topic": "递推",
    "completed": true,
    "leetcodeSlug": "pascals-triangle",
    "leetcodeUrl": "https://leetcode.cn/problems/pascals-triangle/",
    "acceptanceRate": 77.9,
    "solutionCount": 4471,
    "companyTagCount": 75,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "动态规划",
      "递推",
      "数组"
    ],
    "sourcePath": "hot100/0319/118.杨辉三角.py",
    "lastUpdated": "2026-03-19",
    "lastUpdatedAt": "2026-03-19T13:31:58.214Z",
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
    "thoughts": [
      "思路：逐行构建，每行首尾为1，中间元素  上一行相邻两数之和",
      "时间 O(n²)，空间 O(n²) —— 总共生成 n(n+1)/2 个元素",
      "思路：给上一行左右各补一个0，然后相邻两数相加，直接得到新一行"
    ],
    "pitfalls": [
      "2. 外层循环 range(1, numRows) 从1开始，不是从2开始，否则 numRows2 时循环不执行",
      "4. 注意 Python 负数索引：j0 时 result[i-1][-1] 会取最后一个元素而不是报错，容易产生隐蔽bug"
    ],
    "solutionGuide": {
      "idea": "思路：逐行构建，每行首尾为1，中间元素  上一行相邻两数之和",
      "interviewSteps": [
        "先说明核心考点：递推。",
        "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
        "关键词：动态规划 / 递推 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "2. 外层循环 range(1, numRows) 从1开始，不是从2开始，否则 numRows2 时循环不执行"
    },
    "codePreview": "# 思路：逐行构建，每行首尾为1，中间元素 = 上一行相邻两数之和\n# 时间 O(n²)，空间 O(n²) —— 总共生成 n(n+1)/2 个元素\n#\n# ⚠️ 易错点/误区：\n# 1. 初始化应该是 result = [[1]]，不是 [[]]（第一行是 [1] 不是空列表）\n# 2. 外层循环 range(1, numRows) 从1开始，不是从2开始，否则 numRows=2 时循环不执行\n# 3. 内层循环 range(1, i)，不是 range(1, i-1)。第 i 行有 i-1 个中间元素（位置1到i-1）\n# 4. 注意 Python 负数索引：j=0 时 result[i-1][-1] 会取最后一个元素而不是报错，容易产生隐蔽bug\nclass Solution:\n    def generate(self, numRows: int) -> List[List[int]]:\n        result = [[1]]  # 第0行固定为 [1]\n        for i in range(1, numRows):  # 从第1行开始逐行生成\n            rows = [1]  # 每行第一个元素固定为 1\n            for j in range(1, i):  # 生成中间元素（位置1到i-1）\n                # 中间元素 = 上一行的 [j-1] + [j]\n                rows.append(result[i-1][j-1] + result[i-1][j])\n            rows.append(1)  # 每行最后一个元素固定为 1\n            result.append(rows)\n        return result"
  },
  {
    "id": "198",
    "slug": "198-打家劫舍",
    "title": "打家劫舍",
    "titleEn": "House Robber",
    "category": "动态规划",
    "difficulty": "中等",
    "topic": "状态转移",
    "completed": true,
    "leetcodeSlug": "house-robber",
    "leetcodeUrl": "https://leetcode.cn/problems/house-robber/",
    "acceptanceRate": 56.5,
    "solutionCount": 7045,
    "companyTagCount": 118,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "动态规划",
      "状态转移",
      "数组"
    ],
    "sourcePath": "hot100/0323/198.打家劫舍.py",
    "lastUpdated": "2026-03-26",
    "lastUpdatedAt": "2026-03-26T06:30:46.594Z",
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
    "thoughts": [
      "思路：dp[i]  偷前 i 间房能获得的最大金额",
      "时间 O(n)，空间 O(n)",
      "面试推荐写法（空间优化 O(1)）：",
      "- 空间从 O(n) 优化到 O(1)，面试加分",
      "- 和爬楼梯的空间优化写法完全一样的套路"
    ],
    "pitfalls": [
      "1. 边界处理：nums 只有 1 个元素时，dp[1] 会越界，需提前返回",
      "边界：只有一间房，直接偷",
      "- 不需要处理边界（prev20, prev10 自然覆盖所有情况）"
    ],
    "solutionGuide": {
      "idea": "思路：dp[i]  偷前 i 间房能获得的最大金额",
      "interviewSteps": [
        "先说明核心考点：状态转移。",
        "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
        "关键词：动态规划 / 状态转移 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 边界处理：nums 只有 1 个元素时，dp[1] 会越界，需提前返回"
    },
    "codePreview": "# 📌 需二刷：线性 DP（和爬楼梯同一类型）\n#\n# 思路：dp[i] = 偷前 i 间房能获得的最大金额\n#       对第 i 间房，选择偷或不偷，取较大值\n#       转移方程：dp[i] = max(dp[i-1], dp[i-2] + nums[i])\n# 时间 O(n)，空间 O(n)\n#\n# ⚠️ 易错点/误区：\n# 1. 边界处理：nums 只有 1 个元素时，dp[1] 会越界，需提前返回\n# 2. dp[i] 记录的是\"最优值\"，不是\"偷了哪间\"，所以不存在\"推翻前面决定\"的问题\n# 3. dp[1] = max(nums[0], nums[1])，不是直接 nums[1]（要从前两间选最优）\nclass Solution:\n    def rob(self, nums: List[int]) -> int:\n        # 边界：只有一间房，直接偷\n        if len(nums) == 1:\n            return nums[0]\n        dp = [0] * len(nums)\n        dp[0] = nums[0]                    # 只有第 0 间，偷它\n        dp[1] = max(nums[0], nums[1])      # 前两间，选金额大的那间\n        for i in range(2, len(nums)):\n            # 偷第 i 间：dp[i-2] + nums[i]\n            # 不偷第 i 间：dp[i-1]\n            dp[i] = max(dp[i-2] + nums[i], dp[i-1])\n        return dp[-1]\n# ————————————————————————————————————\n# ✅ 面试推荐写法（空间优化 O(1)）：\n#\n# 因为 dp[i] 只依赖 dp[i-1] 和 dp[i-2]，\n# 所以不需要整个数组，只用两个变量即可：\n#\n# def rob(self, nums):\n#     prev2 = 0  # dp[i-2]\n#     prev1 = 0  # dp[i-1]\n#     for num in nums:\n#         curr = max(prev1, prev2 + num)\n#         prev2 = prev1\n#         prev1 = curr\n#     return prev1\n#\n# 👆 推荐原因：\n# - 空间从 O(n) 优化到 O(1)，面试加分\n# - 不需要处理边界（prev2=0, prev1=0 自然覆盖所有情况）\n# - 和爬楼梯的空间优化写法完全一样的套路\n# ————————————————————————————————————"
  },
  {
    "id": "53",
    "slug": "53-最大子数组和",
    "title": "最大子数组和",
    "titleEn": "Maximum Subarray",
    "category": "动态规划",
    "difficulty": "中等",
    "topic": "Kadane",
    "completed": true,
    "leetcodeSlug": "maximum-subarray",
    "leetcodeUrl": "https://leetcode.cn/problems/maximum-subarray/",
    "acceptanceRate": 56.8,
    "solutionCount": 10048,
    "companyTagCount": 209,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "动态规划",
      "Kadane",
      "数组",
      "分治"
    ],
    "sourcePath": "hot100/0320/53.最大子数组和.py",
    "lastUpdated": "2026-03-20",
    "lastUpdatedAt": "2026-03-20T09:22:34.855Z",
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
    "thoughts": [
      "需二刷：Kadane 算法（动态规划思想）",
      "思路：遍历数组，维护\"以当前元素结尾的最大子数组和\"(current_sum)",
      "时间 O(n)，空间 O(1)",
      "核心决策：加入之前的子数组 vs 从自己重新开始"
    ],
    "pitfalls": [
      "1. max_sum 不能初始化为 0，否则全负数数组（如 [-3,-2,-1]）会返回 0"
    ],
    "solutionGuide": {
      "idea": "需二刷：Kadane 算法（动态规划思想）",
      "interviewSteps": [
        "先说明核心考点：Kadane。",
        "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
        "关键词：动态规划 / Kadane / 数组 / 分治。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. max_sum 不能初始化为 0，否则全负数数组（如 [-3,-2,-1]）会返回 0"
    },
    "codePreview": "# 📌 需二刷：Kadane 算法（动态规划思想）\n#\n# 思路：遍历数组，维护\"以当前元素结尾的最大子数组和\"(current_sum)\n#       每一步做决策：是把当前元素加入之前的子数组，还是从当前元素重新开始\n#       如果之前的累积和是负数 → 拖后腿 → 从当前元素重新开始\n#       同时用 max_sum 追踪全局最大值\n#\n# 时间 O(n)，空间 O(1)\n#\n# ⚠️ 易错点/误区：\n# 1. max_sum 不能初始化为 0，否则全负数数组（如 [-3,-2,-1]）会返回 0\n#    → 应该初始化为 nums[0] 或 float('-inf')\n# 2. max_sum = max(current_sum, num) 是错的！current_sum >= num 恒成立\n#    这样等于每次都覆盖，没有在追踪\"全局\"最大值\n#    → 应该是 max_sum = max(max_sum, current_sum)\nclass Solution:\n    # ✅ 面试推荐写法\n    def maxSubArray(self, nums: List[int]) -> int:\n        current_sum = nums[0]  # 以当前元素结尾的最大子数组和\n        max_sum = nums[0]      # 全局最大子数组和\n        for num in nums[1:]:   # 从第二个元素开始\n            # 核心决策：加入之前的子数组 vs 从自己重新开始\n            current_sum = max(num, current_sum + num)\n            # 更新全局最大值\n            max_sum = max(max_sum, current_sum)\n        return max_sum"
  },
  {
    "id": "300",
    "slug": "300-最长递增子序列",
    "title": "最长递增子序列",
    "titleEn": "Longest Increasing Subsequence",
    "category": "动态规划",
    "difficulty": "中等",
    "topic": "LIS",
    "completed": false,
    "leetcodeSlug": "longest-increasing-subsequence",
    "leetcodeUrl": "https://leetcode.cn/problems/longest-increasing-subsequence/",
    "acceptanceRate": 58.8,
    "solutionCount": 5869,
    "companyTagCount": 118,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "动态规划",
      "LIS",
      "数组",
      "二分查找"
    ],
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
    "thoughts": [
      "核心考点：LIS",
      "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：LIS",
      "interviewSteps": [
        "先说明核心考点：LIS。",
        "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
        "关键词：动态规划 / LIS / 数组 / 二分查找。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "322",
    "slug": "322-零钱兑换",
    "title": "零钱兑换",
    "titleEn": "Coin Change",
    "category": "动态规划",
    "difficulty": "中等",
    "topic": "完全背包",
    "completed": false,
    "leetcodeSlug": "coin-change",
    "leetcodeUrl": "https://leetcode.cn/problems/coin-change/",
    "acceptanceRate": 53.2,
    "solutionCount": 4988,
    "companyTagCount": 129,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "动态规划",
      "完全背包",
      "广度优先搜索",
      "数组"
    ],
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
    "thoughts": [
      "核心考点：完全背包",
      "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：完全背包",
      "interviewSteps": [
        "先说明核心考点：完全背包。",
        "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
        "关键词：动态规划 / 完全背包 / 广度优先搜索 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "139",
    "slug": "139-单词拆分",
    "title": "单词拆分",
    "titleEn": "Word Break",
    "category": "动态规划",
    "difficulty": "中等",
    "topic": "DP + 哈希",
    "completed": false,
    "leetcodeSlug": "word-break",
    "leetcodeUrl": "https://leetcode.cn/problems/word-break/",
    "acceptanceRate": 60.4,
    "solutionCount": 3968,
    "companyTagCount": 101,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "动态规划",
      "DP + 哈希",
      "字典树",
      "记忆化",
      "数组",
      "哈希表",
      "字符串"
    ],
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
    "thoughts": [
      "核心考点：DP + 哈希",
      "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：DP + 哈希",
      "interviewSteps": [
        "先说明核心考点：DP + 哈希。",
        "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
        "关键词：动态规划 / DP + 哈希 / 字典树 / 记忆化。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "416",
    "slug": "416-分割等和子集",
    "title": "分割等和子集",
    "titleEn": "Partition Equal Subset Sum",
    "category": "动态规划",
    "difficulty": "中等",
    "topic": "0-1 背包",
    "completed": false,
    "leetcodeSlug": "partition-equal-subset-sum",
    "leetcodeUrl": "https://leetcode.cn/problems/partition-equal-subset-sum/",
    "acceptanceRate": 54.2,
    "solutionCount": 3241,
    "companyTagCount": 60,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "动态规划",
      "0-1 背包",
      "数组"
    ],
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
    "thoughts": [
      "核心考点：0-1 背包",
      "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：0-1 背包",
      "interviewSteps": [
        "先说明核心考点：0-1 背包。",
        "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
        "关键词：动态规划 / 0-1 背包 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "152",
    "slug": "152-乘积最大子数组",
    "title": "乘积最大子数组",
    "titleEn": "Maximum Product Subarray",
    "category": "动态规划",
    "difficulty": "中等",
    "topic": "双状态 DP",
    "completed": false,
    "leetcodeSlug": "maximum-product-subarray",
    "leetcodeUrl": "https://leetcode.cn/problems/maximum-product-subarray/",
    "acceptanceRate": 44.5,
    "solutionCount": 3095,
    "companyTagCount": 87,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "动态规划",
      "双状态 DP",
      "数组"
    ],
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
    "thoughts": [
      "核心考点：双状态 DP",
      "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：双状态 DP",
      "interviewSteps": [
        "先说明核心考点：双状态 DP。",
        "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
        "关键词：动态规划 / 双状态 DP / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "5",
    "slug": "5-最长回文子串",
    "title": "最长回文子串",
    "titleEn": "Longest Palindromic Substring",
    "category": "动态规划",
    "difficulty": "中等",
    "topic": "中心扩展 / DP",
    "completed": false,
    "leetcodeSlug": "longest-palindromic-substring",
    "leetcodeUrl": "https://leetcode.cn/problems/longest-palindromic-substring/",
    "acceptanceRate": 41,
    "solutionCount": 10457,
    "companyTagCount": 252,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "动态规划",
      "中心扩展 / DP",
      "双指针",
      "字符串"
    ],
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
    "thoughts": [
      "核心考点：中心扩展 / DP",
      "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：中心扩展 / DP",
      "interviewSteps": [
        "先说明核心考点：中心扩展 / DP。",
        "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
        "关键词：动态规划 / 中心扩展 / DP / 双指针 / 字符串。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "279",
    "slug": "279-完全平方数",
    "title": "完全平方数",
    "titleEn": "Perfect Squares",
    "category": "动态规划",
    "difficulty": "中等",
    "topic": "完全背包",
    "completed": false,
    "leetcodeSlug": "perfect-squares",
    "leetcodeUrl": "https://leetcode.cn/problems/perfect-squares/",
    "acceptanceRate": 68.3,
    "solutionCount": 3110,
    "companyTagCount": 69,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "动态规划",
      "完全背包",
      "广度优先搜索",
      "数学"
    ],
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
    "thoughts": [
      "核心考点：完全背包",
      "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：完全背包",
      "interviewSteps": [
        "先说明核心考点：完全背包。",
        "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
        "关键词：动态规划 / 完全背包 / 广度优先搜索 / 数学。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "32",
    "slug": "32-最长有效括号",
    "title": "最长有效括号",
    "titleEn": "Longest Valid Parentheses",
    "category": "动态规划",
    "difficulty": "困难",
    "topic": "栈 / DP",
    "completed": false,
    "leetcodeSlug": "longest-valid-parentheses",
    "leetcodeUrl": "https://leetcode.cn/problems/longest-valid-parentheses/",
    "acceptanceRate": 42.3,
    "solutionCount": 3316,
    "companyTagCount": 103,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "动态规划",
      "栈 / DP",
      "栈",
      "字符串"
    ],
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
    "thoughts": [
      "核心考点：栈 / DP",
      "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：栈 / DP",
      "interviewSteps": [
        "先说明核心考点：栈 / DP。",
        "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
        "关键词：动态规划 / 栈 / DP / 栈 / 字符串。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "1143",
    "slug": "1143-最长公共子序列",
    "title": "最长公共子序列",
    "titleEn": "Longest Common Subsequence",
    "category": "动态规划",
    "difficulty": "中等",
    "topic": "二维 DP",
    "completed": false,
    "leetcodeSlug": "longest-common-subsequence",
    "leetcodeUrl": "https://leetcode.cn/problems/longest-common-subsequence/",
    "acceptanceRate": 67.7,
    "solutionCount": 2753,
    "companyTagCount": 68,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "动态规划",
      "二维 DP",
      "字符串"
    ],
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
    "thoughts": [
      "核心考点：二维 DP",
      "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：二维 DP",
      "interviewSteps": [
        "先说明核心考点：二维 DP。",
        "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
        "关键词：动态规划 / 二维 DP / 字符串。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "72",
    "slug": "72-编辑距离",
    "title": "编辑距离",
    "titleEn": "Edit Distance",
    "category": "动态规划",
    "difficulty": "困难",
    "topic": "二维 DP",
    "completed": false,
    "leetcodeSlug": "edit-distance",
    "leetcodeUrl": "https://leetcode.cn/problems/edit-distance/",
    "acceptanceRate": 64.1,
    "solutionCount": 4212,
    "companyTagCount": 125,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "动态规划",
      "二维 DP",
      "字符串"
    ],
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
    "thoughts": [
      "核心考点：二维 DP",
      "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：二维 DP",
      "interviewSteps": [
        "先说明核心考点：二维 DP。",
        "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
        "关键词：动态规划 / 二维 DP / 字符串。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "647",
    "slug": "647-回文子串",
    "title": "回文子串",
    "titleEn": "Palindromic Substrings",
    "category": "动态规划",
    "difficulty": "中等",
    "topic": "中心扩展",
    "completed": false,
    "leetcodeSlug": "palindromic-substrings",
    "leetcodeUrl": "https://leetcode.cn/problems/palindromic-substrings/",
    "acceptanceRate": 68.3,
    "solutionCount": 2181,
    "companyTagCount": 66,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "动态规划",
      "中心扩展",
      "双指针",
      "字符串"
    ],
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
    "thoughts": [
      "核心考点：中心扩展",
      "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：中心扩展",
      "interviewSteps": [
        "先说明核心考点：中心扩展。",
        "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
        "关键词：动态规划 / 中心扩展 / 双指针 / 字符串。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "221",
    "slug": "221-最大正方形",
    "title": "最大正方形",
    "titleEn": "Maximal Square",
    "category": "动态规划",
    "difficulty": "中等",
    "topic": "二维 DP",
    "completed": false,
    "leetcodeSlug": "maximal-square",
    "leetcodeUrl": "https://leetcode.cn/problems/maximal-square/",
    "acceptanceRate": 52.1,
    "solutionCount": 2358,
    "companyTagCount": 80,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "动态规划",
      "二维 DP",
      "数组",
      "矩阵"
    ],
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
    "thoughts": [
      "核心考点：二维 DP",
      "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：二维 DP",
      "interviewSteps": [
        "先说明核心考点：二维 DP。",
        "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
        "关键词：动态规划 / 二维 DP / 数组 / 矩阵。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "136",
    "slug": "136-只出现一次的数字",
    "title": "只出现一次的数字",
    "titleEn": "Single Number",
    "category": "技巧",
    "difficulty": "简单",
    "topic": "异或",
    "completed": true,
    "leetcodeSlug": "single-number",
    "leetcodeUrl": "https://leetcode.cn/problems/single-number/",
    "acceptanceRate": 76.8,
    "solutionCount": 5677,
    "companyTagCount": 103,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "技巧",
      "异或",
      "位运算",
      "数组"
    ],
    "sourcePath": "hot100/0319/136.只出现一次的数字.py",
    "lastUpdated": "2026-03-19",
    "lastUpdatedAt": "2026-03-19T14:13:34.107Z",
    "interviewPattern": "关注位运算、投票、原地交换等模板题，先写不变量再写代码。",
    "thoughts": [
      "思路：利用异或的三个性质把所有数异或一遍，成对的数抵消为0，剩下的就是答案",
      "时间 O(n)，空间 O(1)"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "solutionGuide": {
      "idea": "思路：利用异或的三个性质把所有数异或一遍，成对的数抵消为0，剩下的就是答案",
      "interviewSteps": [
        "先说明核心考点：异或。",
        "关注位运算、投票、原地交换等模板题，先写不变量再写代码。",
        "关键词：技巧 / 异或 / 位运算 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    },
    "codePreview": "# 📌 需二刷：异或(XOR)的巧妙应用\n#\n# 思路：利用异或的三个性质把所有数异或一遍，成对的数抵消为0，剩下的就是答案\n#   - a ^ a = 0（相同数异或为0）\n#   - a ^ 0 = a（任何数异或0为自己）\n#   - 异或满足交换律和结合律（顺序无关）\n# 时间 O(n)，空间 O(1)\n#\n# ⚠️ 易错点/误区：\n# 1. for i in nums 中 i 已经是值，不要再写 nums[i]（会把值当索引用）\n# 2. result 初始值必须是 0（因为 a ^ 0 = a）\n# 3. 不需要特判 len(nums)==1，异或自然处理\nclass Solution:\n    def singleNumber(self, nums: List[int]) -> int:\n        result = 0\n        for i in nums:\n            result ^= i  # 等价于 result = result ^ i\n        return result"
  },
  {
    "id": "169",
    "slug": "169-多数元素",
    "title": "多数元素",
    "titleEn": "Majority Element",
    "category": "技巧",
    "difficulty": "简单",
    "topic": "摩尔投票",
    "completed": true,
    "leetcodeSlug": "majority-element",
    "leetcodeUrl": "https://leetcode.cn/problems/majority-element/",
    "acceptanceRate": 67.3,
    "solutionCount": 6342,
    "companyTagCount": 88,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "技巧",
      "摩尔投票",
      "数组",
      "哈希表",
      "分治",
      "计数",
      "排序"
    ],
    "sourcePath": "hot100/0319/169.多数元素.py",
    "lastUpdated": "2026-03-19",
    "lastUpdatedAt": "2026-03-19T14:55:19.318Z",
    "interviewPattern": "关注位运算、投票、原地交换等模板题，先写不变量再写代码。",
    "thoughts": [
      "思路：多数元素出现次数 > n/2，与所有其他元素一对一抵消后一定剩余",
      "时间 O(n)，空间 O(1)",
      "1. 暴力法 O(n²) 会超时：双重循环统计每个元素出现次数，思路对但太慢"
    ],
    "pitfalls": [
      "3. 比较对象要清楚：i  j（元素 vs 元素），不能写成 i  nums（元素 vs 列表）",
      "4. 换候选人的时机：vote0 的判断要放在循环开头，不能放在 else 分支里",
      "5. return 不要写在 for 循环里面，否则第一次迭代就返回了"
    ],
    "solutionGuide": {
      "idea": "思路：多数元素出现次数 > n/2，与所有其他元素一对一抵消后一定剩余",
      "interviewSteps": [
        "先说明核心考点：摩尔投票。",
        "关注位运算、投票、原地交换等模板题，先写不变量再写代码。",
        "关键词：技巧 / 摩尔投票 / 数组 / 哈希表。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "3. 比较对象要清楚：i  j（元素 vs 元素），不能写成 i  nums（元素 vs 列表）"
    },
    "codePreview": "class Solution:\n    # 📌 需二刷：Boyer-Moore 投票算法\n    #\n    # 思路：多数元素出现次数 > n/2，与所有其他元素一对一抵消后一定剩余\n    #       维护候选人和票数，票数归零时换候选人，最终剩下的就是多数元素\n    # 时间 O(n)，空间 O(1)\n    #\n    # ⚠️ 易错点/误区：\n    # 1. 暴力法 O(n²) 会超时：双重循环统计每个元素出现次数，思路对但太慢\n    # 2. count 初始值应为 0 不是 1：内层循环会遍历到自身，已经计数了一次\n    # 3. 比较对象要清楚：i == j（元素 vs 元素），不能写成 i == nums（元素 vs 列表）\n    # 4. 换候选人的时机：vote==0 的判断要放在循环开头，不能放在 else 分支里\n    #    放在 else 里会导致新候选人的初始票数为 0 而非 1，后续计票出错\n    # 5. return 不要写在 for 循环里面，否则第一次迭代就返回了\n    def majorityElement(self, nums: List[int]) -> int:\n        candidate = 0\n        vote = 0\n        for num in nums:\n            if vote == 0:               # 票数归零，换候选人\n                candidate = num\n            if num == candidate:        # 和候选人相同，+1\n                vote += 1\n            else:                       # 不同，抵消 -1\n                vote -= 1\n        return candidate                # 最终幸存的候选人就是多数元素"
  },
  {
    "id": "75",
    "slug": "75-颜色分类",
    "title": "颜色分类",
    "titleEn": "Sort Colors",
    "category": "技巧",
    "difficulty": "中等",
    "topic": "三指针",
    "completed": true,
    "leetcodeSlug": "sort-colors",
    "leetcodeUrl": "https://leetcode.cn/problems/sort-colors/",
    "acceptanceRate": 63.8,
    "solutionCount": 5192,
    "companyTagCount": 83,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "技巧",
      "三指针",
      "数组",
      "双指针",
      "排序"
    ],
    "sourcePath": "75.颜色分类.py",
    "lastUpdated": "2026-06-04",
    "lastUpdatedAt": "2026-06-04T13:56:33.554Z",
    "interviewPattern": "关注位运算、投票、原地交换等模板题，先写不变量再写代码。",
    "thoughts": [
      "需二刷：荷兰国旗问题（三路分区），和 912 的三路快排是同一套思路",
      "思路：用三个指针 p0 / p / p2 将数组划分为 0 / 1 / 2 三个区域，",
      "时间 O(n)，空间 O(1)",
      "类比 912：三路快排的简化版——pivot 固定为 1，不需要递归"
    ],
    "pitfalls": [
      "1. nums[p]  2 交换后 p 不能 +1，右边换来的元素还没检查",
      "3. p2 初始值是 len(nums) - 1 不是 len(nums)，否则 nums[p2] 越界"
    ],
    "solutionGuide": {
      "idea": "需二刷：荷兰国旗问题（三路分区），和 912 的三路快排是同一套思路",
      "interviewSteps": [
        "先说明核心考点：三指针。",
        "关注位运算、投票、原地交换等模板题，先写不变量再写代码。",
        "关键词：技巧 / 三指针 / 数组 / 双指针。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. nums[p]  2 交换后 p 不能 +1，右边换来的元素还没检查"
    },
    "codePreview": "# 📌 需二刷：荷兰国旗问题（三路分区），和 912 的三路快排是同一套思路\n#\n# 思路：用三个指针 p0 / p / p2 将数组划分为 0 / 1 / 2 三个区域，\n#       一次遍历完成排序\n# 时间 O(n)，空间 O(1)\n#\n# 类比 912：三路快排的简化版——pivot 固定为 1，不需要递归\nclass Solution:\n    def sortColors(self, nums: List[int]) -> None:\n        p0 = 0          # 0 区的右边界，nums[0..p0-1] == 0\n        p2 = len(nums) - 1  # 2 区的左边界，nums[p2+1..] == 2\n        p = 0           # 当前遍历指针\n        while p <= p2:\n            if nums[p] == 0:\n                # 把 0 换到左边，p0 和 p 都前进\n                nums[p], nums[p0] = nums[p0], nums[p]\n                p0 += 1\n            elif nums[p] == 2:\n                # 把 2 换到右边，p2 左移，p 不动（换来的元素没检查过）\n                nums[p], nums[p2] = nums[p2], nums[p]\n                p2 -= 1\n            else:\n                # nums[p] == 1，留在中间\n                p += 1\n            # p 落后 p0 时补上（0 换走后 p0 推进，但 p 没加，需要对齐）\n            if p < p0:\n                p = p0\n        #\n        # ⚠️ 易错点/误区：\n        # 1. nums[p] == 2 交换后 p 不能 +1，右边换来的元素还没检查\n        # 2. 循环条件是 p <= p2，不是 p < p2（漏掉 p == p2 时的情况）\n        # 3. p2 初始值是 len(nums) - 1 不是 len(nums)，否则 nums[p2] 越界\n        # 4. nums[p] == 0 交换后 p 可以放心 +1，\n        #    因为换过来的 nums[p0] 只可能是 1（p0 指向 1 区开头），不可能是 2"
  },
  {
    "id": "31",
    "slug": "31-下一个排列",
    "title": "下一个排列",
    "titleEn": "Next Permutation",
    "category": "技巧",
    "difficulty": "中等",
    "topic": "字典序",
    "completed": false,
    "leetcodeSlug": "next-permutation",
    "leetcodeUrl": "https://leetcode.cn/problems/next-permutation/",
    "acceptanceRate": 42.9,
    "solutionCount": 4321,
    "companyTagCount": 101,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "技巧",
      "字典序",
      "数组",
      "双指针"
    ],
    "interviewPattern": "关注位运算、投票、原地交换等模板题，先写不变量再写代码。",
    "thoughts": [
      "核心考点：字典序",
      "关注位运算、投票、原地交换等模板题，先写不变量再写代码。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：字典序",
      "interviewSteps": [
        "先说明核心考点：字典序。",
        "关注位运算、投票、原地交换等模板题，先写不变量再写代码。",
        "关键词：技巧 / 字典序 / 数组 / 双指针。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "287",
    "slug": "287-寻找重复数",
    "title": "寻找重复数",
    "titleEn": "Find the Duplicate Number",
    "category": "技巧",
    "difficulty": "中等",
    "topic": "快慢指针",
    "completed": false,
    "leetcodeSlug": "find-the-duplicate-number",
    "leetcodeUrl": "https://leetcode.cn/problems/find-the-duplicate-number/",
    "acceptanceRate": 67.8,
    "solutionCount": 2948,
    "companyTagCount": 81,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "技巧",
      "快慢指针",
      "位运算",
      "数组",
      "双指针",
      "二分查找"
    ],
    "interviewPattern": "关注位运算、投票、原地交换等模板题，先写不变量再写代码。",
    "thoughts": [
      "核心考点：快慢指针",
      "关注位运算、投票、原地交换等模板题，先写不变量再写代码。"
    ],
    "pitfalls": [
      "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    ],
    "solutionGuide": {
      "idea": "核心考点：快慢指针",
      "interviewSteps": [
        "先说明核心考点：快慢指针。",
        "关注位运算、投票、原地交换等模板题，先写不变量再写代码。",
        "关键词：技巧 / 快慢指针 / 位运算 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "尚未完成，建议做题时记录第一次卡住的位置、边界条件和最终修正。"
    }
  },
  {
    "id": "144",
    "slug": "144-二叉树的前序遍历",
    "title": "二叉树的前序遍历",
    "titleEn": "Binary Tree Preorder Traversal",
    "category": "本地补充",
    "difficulty": "简单",
    "topic": "本地提交",
    "completed": true,
    "leetcodeSlug": "binary-tree-preorder-traversal",
    "leetcodeUrl": "https://leetcode.cn/problems/binary-tree-preorder-traversal/",
    "acceptanceRate": 73.5,
    "solutionCount": 4765,
    "companyTagCount": 54,
    "paidOnly": false,
    "sourceBanks": [
      "本地补充"
    ],
    "tags": [
      "本地补充",
      "本地提交",
      "栈",
      "树",
      "深度优先搜索",
      "二叉树"
    ],
    "sourcePath": "144.二叉树的前序遍历.py",
    "lastUpdated": "2026-03-19",
    "lastUpdatedAt": "2026-03-19T06:35:26.528Z",
    "interviewPattern": "先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",
    "thoughts": [
      "解法一：递归（直观好理解）",
      "思路：对每个节点，先记录自己，再递归左子树，最后递归右子树",
      "时间 O(n)  空间 O(n)",
      "--- 递归方法 ---",
      "dfs(node.left)              # 2. 再递归左子树",
      "dfs(node.right)             # 3. 最后递归右子树",
      "解法二：迭代（用栈模拟）"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "solutionGuide": {
      "idea": "解法一：递归（直观好理解）",
      "interviewSteps": [
        "先说明核心考点：本地提交。",
        "先讲清楚暴力解，再给出数据结构优化。再补充复杂度。",
        "关键词：本地补充 / 本地提交 / 栈 / 树。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    },
    "codePreview": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\n# --- 递归方法 ---\n# class Solution:\n#     def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\n#         result = []\n#         def dfs(node):\n#             if not node: return         # 终止条件：空节点\n#             result.append(node.val)     # 1. 先记录当前节点（根在最前）\n#             dfs(node.left)              # 2. 再递归左子树\n#             dfs(node.right)             # 3. 最后递归右子树\n#         dfs(root)\n#         return result\n# ═══════════════════════════════════════════\n# 解法二：迭代（用栈模拟）\n# 思路：弹出栈顶→记录→先压右再压左（保证左先出栈被处理）\n# 时间 O(n)  空间 O(n)\n# ═══════════════════════════════════════════\n# --- 迭代方法：栈 ---\nclass Solution:\n    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\n        result = []\n        if not root: return result         # 空树直接返回\n        stack = [root]                     # 根节点入栈作为起点\n        while stack:\n            node = stack.pop()             # 弹出栈顶节点\n            result.append(node.val)        # 记录值（根在最前）\n            if node.right: stack.append(node.right)  # 先压右（后处理）\n            if node.left: stack.append(node.left)    # 再压左（先处理）\n        return result"
  },
  {
    "id": "145",
    "slug": "145-二叉树的后序遍历",
    "title": "二叉树的后序遍历",
    "titleEn": "Binary Tree Postorder Traversal",
    "category": "本地补充",
    "difficulty": "简单",
    "topic": "本地提交",
    "completed": true,
    "leetcodeSlug": "binary-tree-postorder-traversal",
    "leetcodeUrl": "https://leetcode.cn/problems/binary-tree-postorder-traversal/",
    "acceptanceRate": 77.9,
    "solutionCount": 3622,
    "companyTagCount": 50,
    "paidOnly": false,
    "sourceBanks": [
      "本地补充"
    ],
    "tags": [
      "本地补充",
      "本地提交",
      "栈",
      "树",
      "深度优先搜索",
      "二叉树"
    ],
    "sourcePath": "145.二叉树的后序遍历.py",
    "lastUpdated": "2026-03-16",
    "lastUpdatedAt": "2026-03-16T10:38:56.260Z",
    "interviewPattern": "先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",
    "thoughts": [
      "解法一：递归（直观好理解）",
      "思路：对每个节点，先递归左子树，再递归右子树，最后记录自己",
      "时间 O(n)  空间 O(n)",
      "--- 递归方法 ---",
      "dfs(node.left)              # 1. 先递归左子树",
      "dfs(node.right)             # 2. 再递归右子树",
      "解法二：迭代（巧妙利用前序遍历）"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "solutionGuide": {
      "idea": "解法一：递归（直观好理解）",
      "interviewSteps": [
        "先说明核心考点：本地提交。",
        "先讲清楚暴力解，再给出数据结构优化。再补充复杂度。",
        "关键词：本地补充 / 本地提交 / 栈 / 树。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    },
    "codePreview": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\n# --- 递归方法 ---\n# class Solution:\n#     def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\n#         result = []\n#         def dfs(node):\n#             if not node: return         # 终止条件：空节点\n#             dfs(node.left)              # 1. 先递归左子树\n#             dfs(node.right)             # 2. 再递归右子树\n#             dfs(node.val)               # 3. 最后记录当前节点（根在最后）\n#         dfs(root)\n#         return result\n# ═══════════════════════════════════════════\n# 解法二：迭代（巧妙利用前序遍历）\n# 思路：前序是 根→左→右，改成 根→右→左，再反转就是 左→右→根（后序）\n#   - 和前序迭代几乎一样，只是把压栈顺序改为\"先压左再压右\"\n#   - 最后 result[::-1] 反转\n# 时间 O(n)  空间 O(n)\n# ═══════════════════════════════════════════\n# --- 迭代方法：栈（反转前序） ---\nclass Solution:\n    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\n        result = []\n        if not root: return result         # 空树直接返回\n        stack = [root]                     # 根节点入栈作为起点\n        while stack:\n            node = stack.pop()             # 弹出栈顶节点\n            result.append(node.val)        # 记录值\n            if node.left: stack.append(node.left)    # 先压左（和前序相反！）\n            if node.right: stack.append(node.right)  # 再压右（和前序相反！）\n        return result[::-1]                # 反转：根→右→左 变成 左→右→根"
  },
  {
    "id": "146",
    "slug": "146-lru-缓存",
    "title": "LRU 缓存",
    "titleEn": "LRU Cache",
    "category": "本地补充",
    "difficulty": "中等",
    "topic": "本地提交",
    "completed": true,
    "leetcodeSlug": "lru-cache",
    "leetcodeUrl": "https://leetcode.cn/problems/lru-cache/",
    "acceptanceRate": 55.6,
    "solutionCount": 5070,
    "companyTagCount": 179,
    "paidOnly": false,
    "sourceBanks": [
      "本地补充"
    ],
    "tags": [
      "本地补充",
      "本地提交",
      "设计",
      "哈希表",
      "链表",
      "双向链表"
    ],
    "sourcePath": "146.LRU 缓存.py",
    "lastUpdated": "2026-06-12",
    "lastUpdatedAt": "2026-06-12T12:40:24.661Z",
    "interviewPattern": "先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",
    "thoughts": [
      "需二刷：哈希表 + 双向链表实现 LRU（空间换时间经典设计）",
      "思路：map 负责 O(1) 查找节点，双向链表维护访问顺序。",
      "时间 O(1)，空间 O(capacity)"
    ],
    "pitfalls": [
      "2. 容易忘了在 put 更新已有 key 时，要先删再重建节点（否则链表顺序错乱）",
      "3. removeLeastRecently 要注意链表为空的情况"
    ],
    "solutionGuide": {
      "idea": "需二刷：哈希表 + 双向链表实现 LRU（空间换时间经典设计）",
      "interviewSteps": [
        "先说明核心考点：本地提交。",
        "先讲清楚暴力解，再给出数据结构优化。再补充复杂度。",
        "关键词：本地补充 / 本地提交 / 设计 / 哈希表。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "2. 容易忘了在 put 更新已有 key 时，要先删再重建节点（否则链表顺序错乱）"
    },
    "codePreview": "# 📌 需二刷：哈希表 + 双向链表实现 LRU（空间换时间经典设计）\n#\n# 思路：map 负责 O(1) 查找节点，双向链表维护访问顺序。\n#       每次访问（get/put）将节点移到链表尾部表示\"最近使用\"，\n#       缓存满时淘汰链表头部节点（最久未使用）\n# 时间 O(1)，空间 O(capacity)\n#\n# ⚠️ 易错点/误区：\n# 1. map 和链表是\"同个 Node 对象\"的两种视角，不是副本关系\n# 2. 容易忘了在 put 更新已有 key 时，要先删再重建节点（否则链表顺序错乱）\n# 3. removeLeastRecently 要注意链表为空的情况\nclass Node:\n    # 链表节点：同时存储 key（用于从被删节点反查 map 的 key）和 val\n    def __init__(self, key, val):\n        self.key = key\n        self.val = val\n        self.prev = None\n        self.next = None\nclass DoulelistNode:\n    def __init__(self):\n        self.head = Node(0,0)\n        self.tail = Node(0,0)\n        self._size = 0\n        self.head.next = self.tail\n        self.tail.prev = self.head\n    def addlast(self,x):\n        x.prev = self.tail.prev\n        x.next = self.tail\n        self.tail.prev.next = x\n        self.tail.prev = x\n        self._size += 1\n    def remove(self,x):\n        x.next.prev = x.prev\n        x.prev.next = x.next\n        self._size -= 1\n    def removefirst(self):\n        if self.head.next == self.tail:\n            return None\n        first = self.head.next\n        self.remove(first)\n        return first\n    def size(self):\n        return self._size\nclass LRUCache:\n    def __init__(self, capacity: int):\n        self.map = {}                # key → Node，O(1) 定位节点\n        self.cache = DoulelistNode() # 双向链表，维护访问顺序\n        self.cap = capacity\n    def get(self, key: int) -> int:\n        if key not in self.map:\n            return -1\n        self.makerecently(key)       # ⚠️ 这里容易写成 x，但 makerecently 接收的是 key\n        return self.map[key].val\n    def put(self, key: int, val: int) -> None:\n        # 情况 1：key 已存在 → 先删旧节点，再插新节点（更新值和顺序）\n        if key in self.map:\n            self.deletekey(key)\n            self.addrecently(key, val)\n            return\n        # 情况 2：缓存满 → 淘汰最久未使用的头节点\n        if self.cap == self.cache.size():\n            self.removeLeastRecently()\n        # 情况 3：直接插入新节点\n        self.addrecently(key, val)\n    # 将 key 对应的节点移到链表尾部（标记为最近使用）\n    def makerecently(self, key: int):\n        x = self.map[key]\n        self.cache.remove(x)         # 先删\n        self.cache.addlast(x)        # 再放到尾部\n    # 新建节点并添加到链表尾部，同时在 map 中注册\n    def addrecently(self, key: int, val: int):\n        x = Node(key, val)\n        self.cache.addlast(x)\n        self.map[key] = x\n    # 删除指定 key 的节点（更新操作时用）\n    def deletekey(self, key: int):\n        x = self.map[key]\n        self.cache.remove(x)\n        self.map.pop(key)\n    # 淘汰最久未使用的元素（链表头部节点）\n    def removeLeastRecently(self):\n        deletedNode = self.cache.removefirst()\n        deletedKey = deletedNode.key  # 从节点中拿到 key，去 map 中清除\n        self.map.pop(deletedKey)\n# Your LRUCache object will be instantiated and called as such:\n# obj = LRUCache(capacity)\n# param_1 = obj.get(key)\n# obj.put(key,value)"
  },
  {
    "id": "3756",
    "slug": "3756-连接非零数字并乘以其数字和-ii",
    "title": "连接非零数字并乘以其数字和 II",
    "titleEn": "Concatenate Non-Zero Digits and Multiply by Sum II",
    "category": "本地补充",
    "difficulty": "中等",
    "topic": "本地提交",
    "completed": true,
    "leetcodeSlug": "concatenate-non-zero-digits-and-multiply-by-sum-ii",
    "leetcodeUrl": "https://leetcode.cn/problems/concatenate-non-zero-digits-and-multiply-by-sum-ii/",
    "acceptanceRate": 39.8,
    "solutionCount": 26,
    "companyTagCount": 1,
    "paidOnly": false,
    "sourceBanks": [
      "本地补充"
    ],
    "tags": [
      "本地补充",
      "本地提交",
      "数学",
      "字符串",
      "前缀和"
    ],
    "sourcePath": "3756.连接非零数字并乘以其数字和 II.py",
    "lastUpdated": "2026-07-08",
    "lastUpdatedAt": "2026-07-08T17:14:50.434Z",
    "interviewPattern": "先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",
    "thoughts": [
      "思路：",
      "时间 O(m + Q)，空间 O(m)"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "solutionGuide": {
      "idea": "思路：",
      "interviewSteps": [
        "先说明核心考点：本地提交。",
        "先讲清楚暴力解，再给出数据结构优化。再补充复杂度。",
        "关键词：本地补充 / 本地提交 / 数学 / 字符串。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    },
    "codePreview": "from typing import List\nclass Solution:\n    def sumAndMultiply(self, s: str, queries: List[List[int]]) -> List[int]:\n        # 📌 需二刷：前缀和 + 模运算提取子串拼接值\n        #\n        # 思路：\n        #   预处理两个前缀数组，查询 O(1)：\n        #     cnt[i]     = s[0..i-1] 中的非零数字个数\n        #     concat[i]  = s[0..i-1] 中非零数字拼接成的数 (mod MOD)\n        #     digitsum[i]= s[0..i-1] 中非零数字之和\n        #\n        #   对于子串 [l, r]：\n        #     设 k = cnt[r+1] - cnt[l]（子串中非零数字个数）\n        #     psum[r+1] = (前缀的拼接数) × 10^k + (子串的拼接数)\n        #     → 子串拼接数 = psum[r+1] - psum[l] × 10^k\n        #\n        # 时间 O(m + Q)，空间 O(m)\n        MOD = 10**9 + 7\n        n = len(s)\n        cnt = [0] * (n + 1)\n        concat = [0] * (n + 1)\n        digitsum = [0] * (n + 1)\n        for i in range(n):\n            c = s[i]\n            cnt[i + 1] = cnt[i]\n            concat[i + 1] = concat[i]\n            digitsum[i + 1] = digitsum[i]\n            if c != '0':\n                d = ord(c) - 48\n                cnt[i + 1] += 1\n                concat[i + 1] = (concat[i + 1] * 10 + d) % MOD\n                digitsum[i + 1] += d\n        res = []\n        for l, r in queries:\n            k = cnt[r + 1] - cnt[l]           # 子串中非零数字个数\n            if k == 0:\n                res.append(0)\n                continue\n            # 子串拼接数 (mod MOD)\n            x = (concat[r + 1] - concat[l] * pow(10, k, MOD)) % MOD\n            # 子串数字和\n            s_sum = digitsum[r + 1] - digitsum[l]\n            res.append(x * (s_sum % MOD) % MOD)\n        return res"
  },
  {
    "id": "567",
    "slug": "567-字符串的排列",
    "title": "字符串的排列",
    "titleEn": "Permutation in String",
    "category": "本地补充",
    "difficulty": "中等",
    "topic": "本地提交",
    "completed": true,
    "leetcodeSlug": "permutation-in-string",
    "leetcodeUrl": "https://leetcode.cn/problems/permutation-in-string/",
    "acceptanceRate": 46.6,
    "solutionCount": 2736,
    "companyTagCount": 48,
    "paidOnly": false,
    "sourceBanks": [
      "本地补充"
    ],
    "tags": [
      "本地补充",
      "本地提交",
      "哈希表",
      "双指针",
      "字符串",
      "滑动窗口"
    ],
    "sourcePath": "567.字符串的排列.py",
    "lastUpdated": "2026-06-01",
    "lastUpdatedAt": "2026-06-01T14:05:16.221Z",
    "interviewPattern": "先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",
    "thoughts": [
      "需二刷：滑动窗口寻找固定长度的子串（排列）",
      "思路：维护一个大小为 len(s1) 的滑动窗口。当窗口大小达到 len(s1) 时，判断窗口内的字符是否完全匹配 s1（即 valid  len(need)），若匹配则说明找到一个排列，否则随着 left 右移缩小窗口以保持长度。",
      "时间 O(N + M)，其中 N 和 M 分别是 s1 和 s2 的长度。",
      "空间 O(C)，C 为字符集大小，本题最多 26 个字母。"
    ],
    "pitfalls": [
      "思路：维护一个大小为 len(s1) 的滑动窗口。当窗口大小达到 len(s1) 时，判断窗口内的字符是否完全匹配 s1（即 valid  len(need)），若匹配则说明找到一个排列，否则随着 left 右移缩小窗口以保持长度。"
    ],
    "solutionGuide": {
      "idea": "需二刷：滑动窗口寻找固定长度的子串（排列）",
      "interviewSteps": [
        "先说明核心考点：本地提交。",
        "先讲清楚暴力解，再给出数据结构优化。再补充复杂度。",
        "关键词：本地补充 / 本地提交 / 哈希表 / 双指针。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "思路：维护一个大小为 len(s1) 的滑动窗口。当窗口大小达到 len(s1) 时，判断窗口内的字符是否完全匹配 s1（即 valid  len(need)），若匹配则说明找到一个排列，否则随着 left 右移缩小窗口以保持长度。"
    },
    "codePreview": "class Solution(object):\n    def checkInclusion(self, s1, s2):\n        \"\"\"\n        :type s1: str\n        :type s2: str\n        :rtype: bool\n        \"\"\"\n        # 📌 需二刷：滑动窗口寻找固定长度的子串（排列）\n        #\n        # 思路：维护一个大小为 len(s1) 的滑动窗口。当窗口大小达到 len(s1) 时，判断窗口内的字符是否完全匹配 s1（即 valid == len(need)），若匹配则说明找到一个排列，否则随着 left 右移缩小窗口以保持长度。\n        # 时间 O(N + M)，其中 N 和 M 分别是 s1 和 s2 的长度。\n        # 空间 O(C)，C 为字符集大小，本题最多 26 个字母。\n        #\n        # ⚠️ 易错点/误区：\n        # 1. 窗口缩小的条件：\n        #    - 错误写法：while right - left <= len(s2):\n        #    - 为什么错：这样写不仅无法保持窗口大小为 s1 的长度，还会导致 left 不断移动。寻找排列本质上是在 s2 中找一个和 s1 长度相等的合法子串。\n        #    - 正确做法：while right - left >= len(s1): 当窗口长度达到要求时，就开始尝试收缩。\n        #\n        # 2. valid 的更新条件：\n        #    - 错误写法：while window[d] == need[d]: valid -= 1\n        #    - 为什么错：每次移出窗口的只有一个字符 d，不需要用 while 循环。并且，如果该字符目前正好达标（window[d] == need[d]），移出后就不达标了，这时候必须立刻 valid -= 1。\n        #    - 正确做法：if window[d] == need[d]: valid -= 1\n        need = {}\n        window = {}\n        for c in s1:\n            need[c] = need.get(c, 0) + 1\n        left = 0\n        right = 0\n        valid = 0\n        # start = 0 # 寻找排列不需要 start 记录起点，只需要返回 True/False\n        while right < len(s2):\n            c = s2[right]  # 即将移入窗口的字符\n            right += 1     # 右移窗口\n            # 窗口内数据的一系列更新\n            if c in need:\n                window[c] = window.get(c, 0) + 1\n                if window[c] == need[c]:\n                    valid += 1\n            # 判断左侧窗口是否要收缩 (本题中窗口长度必须等于 s1 的长度)\n            while right - left >= len(s1):\n                # 在这里判断是否找到了合法的子串\n                if valid == len(need):\n                    return True\n                d = s2[left] # 即将移出窗口的字符\n                left += 1    # 左移窗口\n                # 窗口内数据的一系列更新\n                if d in need:\n                    if window[d] == need[d]:\n                        valid -= 1\n                    window[d] -= 1\n        return False"
  },
  {
    "id": "703",
    "slug": "703-数据流中的第-k-大元素",
    "title": "数据流中的第 K 大元素",
    "titleEn": "Kth Largest Element in a Stream",
    "category": "本地补充",
    "difficulty": "简单",
    "topic": "本地提交",
    "completed": true,
    "leetcodeSlug": "kth-largest-element-in-a-stream",
    "leetcodeUrl": "https://leetcode.cn/problems/kth-largest-element-in-a-stream/",
    "acceptanceRate": 53.6,
    "solutionCount": 950,
    "companyTagCount": 46,
    "paidOnly": false,
    "sourceBanks": [
      "本地补充"
    ],
    "tags": [
      "本地补充",
      "本地提交",
      "树",
      "设计",
      "二叉搜索树",
      "二叉树",
      "数据流",
      "堆（优先队列）"
    ],
    "sourcePath": "703.数据流中的第 K 大元素.py",
    "lastUpdated": "2026-06-12",
    "lastUpdatedAt": "2026-06-12T13:26:55.864Z",
    "interviewPattern": "先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",
    "thoughts": [
      "需二刷：最小堆维护 Top K（数据流实时求第 K 大的入门模板）",
      "思路：维护一个大小为 k 的最小堆，堆里始终保存当前前 k 大的元素，",
      "堆顶（最小值）就是第 k 大的元素。新元素比堆顶大才值得入堆。",
      "时间 O(n log k)，空间 O(k)",
      "1. heapq 是最小堆，要第 K 大直接用小堆存前 K 大元素即可，不需要取反",
      "2. 初始化时 nums 长度可能小于 k，此时堆没满，堆顶就是最小值（不是真正第 k 大）",
      "但题目保证 add 调用次数足够多，最终堆会填满"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "solutionGuide": {
      "idea": "需二刷：最小堆维护 Top K（数据流实时求第 K 大的入门模板）",
      "interviewSteps": [
        "先说明核心考点：本地提交。",
        "先讲清楚暴力解，再给出数据结构优化。再补充复杂度。",
        "关键词：本地补充 / 本地提交 / 树 / 设计。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    },
    "codePreview": "# 📌 需二刷：最小堆维护 Top K（数据流实时求第 K 大的入门模板）\n#\n# 思路：维护一个大小为 k 的最小堆，堆里始终保存当前前 k 大的元素，\n#       堆顶（最小值）就是第 k 大的元素。新元素比堆顶大才值得入堆。\n# 时间 O(n log k)，空间 O(k)\n#\n# ⚠️ 易错点/误区：\n# 1. heapq 是最小堆，要第 K 大直接用小堆存前 K 大元素即可，不需要取反\n# 2. 初始化时 nums 长度可能小于 k，此时堆没满，堆顶就是最小值（不是真正第 k 大）\n#    但题目保证 add 调用次数足够多，最终堆会填满\n# 3. 容易漏掉 len(self.pq) > self.k 的判断条件，写成 >= 就把唯一元素弹出了\nimport heapq\nclass KthLargest:\n    def __init__(self, k: int, nums: List[int]):\n        self.k = k\n        self.pq = []                      # 最小堆，存前 k 大的元素\n        for e in nums:\n            heapq.heappush(self.pq, e)    # 逐个入堆\n            if len(self.pq) > k:\n                heapq.heappop(self.pq)    # 超了就把最小的弹出（第 k+1 大）\n    def add(self, val: int) -> int:\n        heapq.heappush(self.pq, val)      # 新元素先入堆\n        if len(self.pq) > self.k:\n            heapq.heappop(self.pq)        # 超了弹出最小元素（可能是 val 本身）\n        return self.pq[0]                 # 堆顶 = 第 k 大\n# Your KthLargest object will be instantiated and called as such:\n# obj = KthLargest(k, nums)\n# param_1 = obj.add(val)"
  },
  {
    "id": "912",
    "slug": "912-排序数组",
    "title": "排序数组",
    "titleEn": "Sort an Array",
    "category": "本地补充",
    "difficulty": "中等",
    "topic": "本地提交",
    "completed": true,
    "leetcodeSlug": "sort-an-array",
    "leetcodeUrl": "https://leetcode.cn/problems/sort-an-array/",
    "acceptanceRate": 47.8,
    "solutionCount": 3046,
    "companyTagCount": 61,
    "paidOnly": false,
    "sourceBanks": [
      "本地补充"
    ],
    "tags": [
      "本地补充",
      "本地提交",
      "数组",
      "分治",
      "桶排序",
      "计数排序",
      "基数排序",
      "排序",
      "堆（优先队列）",
      "归并排序"
    ],
    "sourcePath": "912.排序数组.py",
    "lastUpdated": "2026-06-04",
    "lastUpdatedAt": "2026-06-04T13:14:27.406Z",
    "interviewPattern": "先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",
    "thoughts": [
      "需二刷：三路快排（3-way Quick Sort），处理大量重复元素的核心技巧",
      "思路：随机选 pivot，将数组分为 <pivot / pivot / >pivot 三个区域",
      "时间 O(n log n) 平均，O(n²) 最坏（几乎不会出现），空间 O(log n)",
      "递归处理小于区和大于区，等于区已在正确位置",
      "3. 递归区间是 (left, lt-1) 和 (gt+1, right)，不是 (left, lt) 和 (gt, right)"
    ],
    "pitfalls": [
      "lt: 小于区的右边界，nums[left..lt-1] < pivot",
      "gt: 大于区的左边界，nums[gt+1..right] > pivot",
      "1. nums[i] > pivot 交换后 i 不能 +1，因为右边换来的元素未检查过",
      "2. 终止条件是 i < gt，不是 i < gt，否则会漏掉 nums[gt]"
    ],
    "solutionGuide": {
      "idea": "需二刷：三路快排（3-way Quick Sort），处理大量重复元素的核心技巧",
      "interviewSteps": [
        "先说明核心考点：本地提交。",
        "先讲清楚暴力解，再给出数据结构优化。再补充复杂度。",
        "关键词：本地补充 / 本地提交 / 数组 / 分治。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "lt: 小于区的右边界，nums[left..lt-1] < pivot"
    },
    "codePreview": "import random\nclass Solution(object):\n    def sortArray(self, nums):\n        # 📌 需二刷：三路快排（3-way Quick Sort），处理大量重复元素的核心技巧\n        #\n        # 思路：随机选 pivot，将数组分为 <pivot / ==pivot / >pivot 三个区域\n        # 时间 O(n log n) 平均，O(n²) 最坏（几乎不会出现），空间 O(log n)\n        self.quicksort(nums, 0, len(nums) - 1)\n        return nums\n    def quicksort(self, nums, left, right):\n        if left >= right:\n            return\n        # 随机选 pivot，避免有序数组导致 O(n²)\n        rand_idx = random.randint(left, right)\n        nums[left], nums[rand_idx] = nums[rand_idx], nums[left]\n        pivot = nums[left]\n        # 三路分区：三个指针维护三个区间\n        # lt: 小于区的右边界，nums[left..lt-1] < pivot\n        # gt: 大于区的左边界，nums[gt+1..right] > pivot\n        # i: 当前遍历的位置\n        lt, gt, i = left, right, left\n        while i <= gt:\n            if nums[i] < pivot:\n                # 当前元素 < pivot，换到左边\n                nums[lt], nums[i] = nums[i], nums[lt]\n                lt += 1\n                i += 1\n            elif nums[i] > pivot:\n                # 当前元素 > pivot，换到右边\n                # 换回来的元素没检查过，所以 i 不动\n                nums[gt], nums[i] = nums[i], nums[gt]\n                gt -= 1\n            else:\n                # 当前元素 == pivot，留在中间\n                i += 1\n        # 递归处理小于区和大于区，等于区已在正确位置\n        self.quicksort(nums, left, lt - 1)\n        self.quicksort(nums, gt + 1, right)\n        #\n        # ⚠️ 易错点/误区：\n        # 1. nums[i] > pivot 交换后 i 不能 +1，因为右边换来的元素未检查过\n        # 2. 终止条件是 i <= gt，不是 i < gt，否则会漏掉 nums[gt]\n        # 3. 递归区间是 (left, lt-1) 和 (gt+1, right)，不是 (left, lt) 和 (gt, right)"
  },
  {
    "id": "217",
    "slug": "217-存在重复元素",
    "title": "存在重复元素",
    "titleEn": "Contains Duplicate",
    "category": "Hot100 补充",
    "difficulty": "简单",
    "topic": "本地提交",
    "completed": true,
    "leetcodeSlug": "contains-duplicate",
    "leetcodeUrl": "https://leetcode.cn/problems/contains-duplicate/",
    "acceptanceRate": 56.1,
    "solutionCount": 4302,
    "companyTagCount": 70,
    "paidOnly": false,
    "sourceBanks": [
      "本地补充"
    ],
    "tags": [
      "Hot100 补充",
      "本地提交",
      "数组",
      "哈希表",
      "排序"
    ],
    "sourcePath": "hot100/0316/217.存在重复元素.py",
    "lastUpdated": "2026-03-16",
    "lastUpdatedAt": "2026-03-16T12:16:48.853Z",
    "interviewPattern": "先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",
    "thoughts": [
      "核心考点：本地提交",
      "先整理输入输出和边界，再选择合适的数据结构。"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "solutionGuide": {
      "idea": "核心考点：本地提交",
      "interviewSteps": [
        "先说明核心考点：本地提交。",
        "先讲清楚暴力解，再给出数据结构优化。再补充复杂度。",
        "关键词：Hot100 补充 / 本地提交 / 数组 / 哈希表。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    },
    "codePreview": "class Solution:\n    def containsDuplicate(self, nums: List[int]) -> bool:\n        seen = set()\n        for num in nums:\n            if num in seen:\n                return True\n            seen.add(num)\n        return False"
  },
  {
    "id": "461",
    "slug": "461-汉明距离",
    "title": "汉明距离",
    "titleEn": "Hamming Distance",
    "category": "Hot100 补充",
    "difficulty": "简单",
    "topic": "本地提交",
    "completed": true,
    "leetcodeSlug": "hamming-distance",
    "leetcodeUrl": "https://leetcode.cn/problems/hamming-distance/",
    "acceptanceRate": 82.1,
    "solutionCount": 2411,
    "companyTagCount": 34,
    "paidOnly": false,
    "sourceBanks": [
      "本地补充"
    ],
    "tags": [
      "Hot100 补充",
      "本地提交",
      "位运算"
    ],
    "sourcePath": "hot100/0320/461.汉明距离.py",
    "lastUpdated": "2026-03-20",
    "lastUpdatedAt": "2026-03-20T08:32:16.452Z",
    "interviewPattern": "先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",
    "thoughts": [
      "思路：异或(XOR)找出不同的位，然后数 1 的个数",
      "时间 O(1)（整数位数固定），空间 O(1)"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "solutionGuide": {
      "idea": "思路：异或(XOR)找出不同的位，然后数 1 的个数",
      "interviewSteps": [
        "先说明核心考点：本地提交。",
        "先讲清楚暴力解，再给出数据结构优化。再补充复杂度。",
        "关键词：Hot100 补充 / 本地提交 / 位运算。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    },
    "codePreview": "# 思路：异或(XOR)找出不同的位，然后数 1 的个数\n# 时间 O(1)（整数位数固定），空间 O(1)\n#\n# 💡 知识点：\n# 1. x ^ y（异或）：相同位→0，不同位→1，正好标记出所有不同的位\n# 2. bin(n) 将整数转为二进制字符串，如 bin(5) → '0b101'\n# 3. .count('1') 统计字符串中 '1' 的个数\n#\n# ⚠️ 易错点/误区：\n# 1. ^ 在 Python 中是异或，不是次方（次方用 **）\n# 2. 面试中可能要求不用 bin()，而是用位运算逐位检查：n & 1 检查末位，n >>= 1 右移\nclass Solution:\n    def hammingDistance(self, x: int, y: int) -> int:\n        z = x ^ y              # 异或：不同的位变 1，相同的变 0\n        return bin(z).count('1') # 数二进制中 1 的个数 = 汉明距离"
  }
]
