// 本文件由 scripts/generateAlgorithmData.mjs 自动生成，请勿手改。
import type { AlgorithmProblem } from '../types'

export const heapProblems: AlgorithmProblem[] = [
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E7%AC%ACK%E4%B8%AA%E6%9C%80%E5%A4%A7%E5%85%83%E7%B4%A0",
    "acceptanceRate": 60,
    "solutionCount": 6037,
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
    "sourcePath": "hot100/13_堆/215.数组中的第K个最大元素.py",
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
    "recallBlanks": [
      {
        "prompt": "核心考点：＿＿＿ / 快速选择",
        "answer": "堆"
      }
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
    "codePreview": "# import heapq\n# class Solution:\n#     def findKthLargest(self, nums: List[int], k: int) -> int:\n#         pq = []\n#         for e in nums:\n#             heapq.heappush(pq,e)\n#             if len(pq) > k:\n#                 heapq.heappop(pq)\n#         return pq[0]\nimport random\nclass Solution:\n    def findKthLargest(self, nums: List[int],k: int) -> int:\n        random.shuffle(nums)\n        lo, hi = 0, len(nums)-1\n        k = len(nums) - k\n        while lo <= hi:\n            p = self.partition(nums, lo, hi)\n            if p < k:\n                lo = p + 1\n            elif p > k:\n                hi = p - 1\n            else:\n                return nums[p]\n        return -1\n    def partition(self, nums:List[int], lo: int, hi: int):\n        pivot = nums[lo]\n        i, j = lo + 1, hi\n        while i <= j:\n            while i <= hi and nums[i] < pivot:\n                i += 1\n            while j >= lo and nums[j] > pivot:\n                j -= 1\n            if i >= j:\n                break\n            nums[i], nums[j] = nums[j], nums[i]\n            i += 1\n            j -= 1\n        nums[lo], nums[j] = nums[j], nums[lo]\n        return j",
    "statement": "给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。\n\n请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。\n\n你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。\n\n \n\n示例 1:\n\n输入: [3,2,1,5,6,4], k = 2\n输出: 5\n\n示例 2:\n\n输入: [3,2,3,1,2,4,5,5,6], k = 4\n输出: 4\n\n \n\n提示： \n\n\t1 <= k <= nums.length <= 105\n\n\t-104 <= nums[i] <= 104"
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%89%8D%20K%20%E4%B8%AA%E9%AB%98%E9%A2%91%E5%85%83%E7%B4%A0",
    "acceptanceRate": 66.1,
    "solutionCount": 4507,
    "companyTagCount": 116,
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
    "sourcePath": "hot100/13_堆/347.前 K 个高频元素.py",
    "lastUpdated": "2026-06-16",
    "lastUpdatedAt": "2026-06-16T14:10:15.202Z",
    "interviewPattern": "Top K 和数据流问题优先考虑堆；Python 小顶堆处理最大堆时注意符号反转。",
    "thoughts": [
      "需二刷：map 统计频率 + 最小堆维护 Top K（堆存元组 (频率, 元素)）",
      "(频率, 元素) 元组，堆按频率排序，堆顶是频率最低的，超了就弹出。",
      "最终堆里剩下频率最高的 k 个元素。",
      "时间 O(n log k)，空间 O(n)",
      "1. 堆里存 (count, num) 而不是 (num, count) —— heapq 按元组第一个元素排序",
      "如果存 (num, count)，堆会按 num 的大小排序，完全错了",
      "2. 遍历 freq.items() 时，解包顺序是 (num, count)，和推入堆的 (count, num) 相反"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：map 统计频率 + 最小＿＿＿维护 Top K（＿＿＿存元组 (频率, 元素)）",
        "answer": "堆"
      }
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
    "codePreview": "# 📌 需二刷：map 统计频率 + 最小堆维护 Top K（堆存元组 (频率, 元素)）\n#\n# 思路：先用 map 统计每个元素的出现频率，再遍历 map，往大小为 k 的最小堆里推\n#       (频率, 元素) 元组，堆按频率排序，堆顶是频率最低的，超了就弹出。\n#       最终堆里剩下频率最高的 k 个元素。\n# 时间 O(n log k)，空间 O(n)\n#\n# 替代写法：可用 Counter 替代手写频率统计\n#   from collections import Counter\n#   freq = Counter(nums)  # 一行搞定，结果和下面 freq 一样\n#\n# ⚠️ 易错点/误区：\n# 1. 堆里存 (count, num) 而不是 (num, count) —— heapq 按元组第一个元素排序\n#    如果存 (num, count)，堆会按 num 的大小排序，完全错了\n# 2. 遍历 freq.items() 时，解包顺序是 (num, count)，和推入堆的 (count, num) 相反\n# 3. 最后从堆里取元素时，要取元组的第二个值 num，不是 count\nimport heapq\nclass Solution:\n    def topKFrequent(self, nums: List[int], k: int) -> List[int]:\n        freq = {}\n        for num in nums:\n            freq[num] = freq.get(num, 0) + 1\n        pq = []\n        for num, count in freq.items():\n            heapq.heappush(pq, (count, num))   # 元组 (频率, 元素)，堆按频率排序\n            if len(pq) > k:\n                heapq.heappop(pq)               # 弹出频率最低的\n        result = []\n        for count, num in pq:                   # 解包元组，只取元素\n            result.append(num)\n        return result",
    "statement": "给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。\n\n \n\n示例 1：\n\n输入：nums = [1,1,1,2,2,3], k = 2\n\n输出：[1,2]\n\n示例 2：\n\n输入：nums = [1], k = 1\n\n输出：[1]\n\n示例 3：\n\n输入：nums = [1,2,1,2,1,2,3,1,3,2], k = 2\n\n输出：[1,2]\n\n \n\n提示：\n\n\t1 <= nums.length <= 105\n\n\t-104 <= nums[i] <= 104\n\n\tk 的取值范围是 [1, 数组中不相同的元素的个数]\n\n\t题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的\n\n \n\n进阶：你所设计算法的时间复杂度 必须 优于 O(n log n) ，其中 n 是数组大小。"
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%95%B0%E6%8D%AE%E6%B5%81%E7%9A%84%E4%B8%AD%E4%BD%8D%E6%95%B0",
    "acceptanceRate": 59.8,
    "solutionCount": 1305,
    "companyTagCount": 89,
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
    "sourcePath": "hot100/13_堆/295.数据流的中位数.py",
    "lastUpdated": "2026-06-17",
    "lastUpdatedAt": "2026-06-17T15:37:22.373Z",
    "interviewPattern": "Top K 和数据流问题优先考虑堆；Python 小顶堆处理最大堆时注意符号反转。",
    "thoughts": [
      "需二刷：双堆配合求数据流中位数（大顶堆 + 小顶堆）",
      "保持两个堆大小平衡（最多差 1），中位数由堆顶计算得出。",
      "时间 O(log n)（每次 addNum），空间 O(n)",
      "1. Python 只有最小堆，用存负值模拟最大堆，取值时要取反",
      "3. 两个堆的大小差不能超过 1，否则中位数计算错误",
      "维持两个堆大小平衡：large 始终 < small < large+1",
      "先把 -num 扔进 large 过一道，取出 large 最大值（即 -堆顶），取反给 small"
    ],
    "pitfalls": [
      "3. 两个堆的大小差不能超过 1，否则中位数计算错误"
    ],
    "recallBlanks": [
      {
        "prompt": "3. 两个＿＿＿的大小差不能超过 1，否则中位数计算错误",
        "answer": "堆"
      }
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
    "codePreview": "# 📌 需二刷：双堆配合求数据流中位数（大顶堆 + 小顶堆）\n#\n# 思路：将数据流分成两半——较小的一半用大顶堆（存负数模拟），较大的一半用小顶堆。\n#       保持两个堆大小平衡（最多差 1），中位数由堆顶计算得出。\n# 时间 O(log n)（每次 addNum），空间 O(n)\n#\n# ⚠️ 易错点/误区：\n# 1. Python 只有最小堆，用存负值模拟最大堆，取值时要取反\n# 2. heappushpop 传参符号：往 large 过一道传正数，往 small 过一道传负数\n# 3. 两个堆的大小差不能超过 1，否则中位数计算错误\n# 4. findMedian 要考虑奇偶两种长度情况\nimport heapq\nclass MedianFinder:\n    def __init__(self):\n        self.large = []      # 大顶堆（存负数）→ 存较小的一半，堆顶是较小半的最大值\n        self.small = []      # 小顶堆（存正数）→ 存较大的一半，堆顶是较大半的最小值\n    def addNum(self, num: int) -> None:\n        # 维持两个堆大小平衡：large 始终 <= small <= large+1\n        if len(self.large) < len(self.small):\n            # large 比 small 少 → 往 large 加一个\n            # 先把 num 扔进 small 过一道，取出 small 最小值，取反给 large\n            heapq.heappush(self.large, -heapq.heappushpop(self.small, num))\n        else:\n            # large 够了或相等 → 往 small 加一个\n            # 先把 -num 扔进 large 过一道，取出 large 最大值（即 -堆顶），取反给 small\n            heapq.heappush(self.small, -heapq.heappushpop(self.large, -num))\n    def findMedian(self) -> float:\n        if len(self.large) < len(self.small):\n            return self.small[0]            # 较大半多一个，直接取小顶堆堆顶\n        elif len(self.large) > len(self.small):\n            return -self.large[0]           # 较小半多一个，取大顶堆堆顶取反\n        else:\n            return (-self.large[0] + self.small[0]) / 2  # 一样多，取平均值\n# Your MedianFinder object will be instantiated and called as such:\n# obj = MedianFinder()\n# obj.addNum(num)\n# param_2 = obj.findMedian()",
    "statement": "中位数是有序整数列表中的中间值。如果列表的大小是偶数，则没有中间值，中位数是两个中间值的平均值。\n\n\t例如 arr = [2,3,4] 的中位数是 3 。\n\n\t例如 arr = [2,3] 的中位数是 (2 + 3) / 2 = 2.5 。\n\n实现 MedianFinder 类:\n\n\tMedianFinder() 初始化 MedianFinder 对象。\n\n\tvoid addNum(int num) 将数据流中的整数 num 添加到数据结构中。\n\n\tdouble findMedian() 返回到目前为止所有元素的中位数。与实际答案相差 10-5 以内的答案将被接受。\n\n示例 1：\n\n输入\n[\"MedianFinder\", \"addNum\", \"addNum\", \"findMedian\", \"addNum\", \"findMedian\"]\n[[], [1], [2], [], [3], []]\n输出\n[null, null, null, 1.5, null, 2.0]\n\n解释\nMedianFinder medianFinder = new MedianFinder();\nmedianFinder.addNum(1);    // arr = [1]\nmedianFinder.addNum(2);    // arr = [1, 2]\nmedianFinder.findMedian(); // 返回 1.5 ((1 + 2) / 2)\nmedianFinder.addNum(3);    // arr[1, 2, 3]\nmedianFinder.findMedian(); // return 2.0\n\n提示:\n\n\t-105 <= num <= 105\n\n\t在调用 findMedian 之前，数据结构中至少有一个元素\n\n\t最多 5 * 104 次调用 addNum 和 findMedian"
  }
]
