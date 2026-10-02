// 本文件由 scripts/generateAlgorithmData.mjs 自动生成，请勿手改。
import type { AlgorithmProblem } from '../types'

export const hashTableProblems: AlgorithmProblem[] = [
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C",
    "acceptanceRate": 55.2,
    "solutionCount": 30551,
    "companyTagCount": 453,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "哈希表",
      "字典查表",
      "数组"
    ],
    "sourcePath": "hot100/01_哈希表/1.两数之和.py",
    "lastUpdated": "2026-03-16",
    "lastUpdatedAt": "2026-03-16T10:38:36.695Z",
    "interviewPattern": "先明确 key/value 设计，再判断是查补数、分组还是去重；面试写法优先使用 dict/set 保持 O(n)。",
    "thoughts": [
      "- 查哈希表中是否已有 complement，有则返回两个下标",
      "- 没有则把当前数存入哈希表，继续遍历",
      "核心技巧：用哈希表把 O(n) 的查找变成 O(1)，总时间从 O(n²) 降到 O(n)",
      "时间复杂度：O(n)   空间复杂度：O(n)"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "recallBlanks": [
      {
        "prompt": "- 查＿＿＿中是否已有 complement，有则返回两个下标",
        "answer": "哈希表"
      }
    ],
    "solutionGuide": {
      "idea": "- 查哈希表中是否已有 complement，有则返回两个下标",
      "interviewSteps": [
        "先说明核心考点：字典查表。",
        "先明确 key/value 设计，再判断是查补数、分组还是去重；面试写法优先使用 dict/set 保持 O(n)。",
        "关键词：哈希表 / 字典查表 / 数组。"
      ],
      "complexity": "时间复杂度：O(n)   空间复杂度：O(n)",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    },
    "codePreview": "class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        hash_map = {}                          # 哈希表：{值: 下标}\n        for i, num in enumerate(nums):         # 遍历数组，i=下标, num=值\n            complement = target - num          # 计算需要的\"搭档\"\n            if complement in hash_map:         # 搭档来过吗？O(1) 查找\n                return [hash_map[complement], i]  # 找到了，返回两个下标\n            hash_map[num] = i                  # 没找到，登记自己等着\n        return []",
    "statement": "给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。\n\n你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。\n\n你可以按任意顺序返回答案。\n\n \n\n示例 1：\n\n输入：nums = [2,7,11,15], target = 9\n输出：[0,1]\n解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。\n\n示例 2：\n\n输入：nums = [3,2,4], target = 6\n输出：[1,2]\n\n示例 3：\n\n输入：nums = [3,3], target = 6\n输出：[0,1]\n\n \n\n提示：\n\n\t2 <= nums.length <= 104\n\n\t-109 <= nums[i] <= 109\n\n\t-109 <= target <= 109\n\n\t只会存在一个有效答案\n\n \n\n进阶：你可以想出一个时间复杂度小于 O(n2) 的算法吗？"
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%AD%97%E6%AF%8D%E5%BC%82%E4%BD%8D%E8%AF%8D%E5%88%86%E7%BB%84",
    "acceptanceRate": 69.4,
    "solutionCount": 5662,
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
    "sourcePath": "hot100/01_哈希表/49.字母异位词分组.py",
    "lastUpdated": "2026-03-16",
    "lastUpdatedAt": "2026-03-16T14:03:45.181Z",
    "interviewPattern": "先明确 key/value 设计，再判断是查补数、分组还是去重；面试写法优先使用 dict/set 保持 O(n)。",
    "thoughts": [
      "时间 O(n·k·logk)  空间 O(n·k)  （n字符串个数, k最长字符串长度）",
      "时间 O(n·k)  空间 O(n·k)  （省去排序的 logk）"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "时间 O(n·k·logk)  空间 O(n·k)  （n字符串个数, k最长字符串长度）",
      "interviewSteps": [
        "先说明核心考点：排序数组作 Key。",
        "先明确 key/value 设计，再判断是查补数、分组还是去重；面试写法优先使用 dict/set 保持 O(n)。",
        "关键词：哈希表 / 排序数组作 Key / 数组 / 字符串。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    },
    "codePreview": "from collections import defaultdict\nclass Solution:\n    # 方法一：排序法\n    # 思路：异位词排序后结果相同，用排序结果作为 key 分组\n    # 时间 O(n·k·logk)  空间 O(n·k)  （n=字符串个数, k=最长字符串长度）\n    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\n        a = defaultdict(list)           # key: 排序后的元组, value: 原始字符串列表\n        for i in strs:\n            key = tuple(sorted(i))      # sorted 排序 → tuple 转不可变类型做 key\n            a[key].append(i)            # 相同 key 的字符串归为一组\n        return list(a.values())\n    # 方法二：计数法\n    # 思路：异位词的字母出现次数相同，用 26 位计数数组作为 key 分组\n    # 时间 O(n·k)  空间 O(n·k)  （省去排序的 logk）\n    def groupAnagrams2(self, strs: List[str]) -> List[List[str]]:\n        a = defaultdict(list)           # key: 字母频次元组, value: 原始字符串列表\n        for s in strs:\n            count = [0] * 26            # 26 个字母的计数器，下标 0~25 对应 a~z\n            for c in s:\n                count[ord(c) - ord('a')] += 1  # ord() 取 ASCII 码，减去 ord('a') 映射到 0~25\n            a[tuple(count)].append(s)   # 把计数数组转 tuple 做 key\n        return list(a.values())",
    "statement": "给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。\n\n \n\n示例 1:\n\n输入: strs = [\"eat\", \"tea\", \"tan\", \"ate\", \"nat\", \"bat\"]\n\n输出: [[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]\n\n解释：\n\n\t在 strs 中没有字符串可以通过重新排列来形成 \"bat\"。\n\n\t字符串 \"nat\" 和 \"tan\" 是字母异位词，因为它们可以重新排列以形成彼此。\n\n\t字符串 \"ate\" ，\"eat\" 和 \"tea\" 是字母异位词，因为它们可以重新排列以形成彼此。\n\n示例 2:\n\n输入: strs = [\"\"]\n\n输出: [[\"\"]]\n\n示例 3:\n\n输入: strs = [\"a\"]\n\n输出: [[\"a\"]]\n\n \n\n提示：\n\n\t1 <= strs.length <= 104\n\n\t0 <= strs[i].length <= 100\n\n\tstrs[i] 仅包含小写字母"
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%9C%80%E9%95%BF%E8%BF%9E%E7%BB%AD%E5%BA%8F%E5%88%97",
    "acceptanceRate": 48.7,
    "solutionCount": 6252,
    "companyTagCount": 92,
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
    "sourcePath": "hot100/01_哈希表/128.最长连续序列.py",
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
    "recallBlanks": [],
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
    "codePreview": "# 方法：哈希集合\n# 核心思想：把所有数字放入 set，利用 O(1) 的查找速度\n# 只从每个连续序列的\"起点\"开始向后扩展，避免重复遍历\n# 时间复杂度：O(n)，每个数字最多被访问两次\n# 空间复杂度：O(n)，存储 set\nclass Solution:\n    def longestConsecutive(self, nums: List[int]) -> int:\n        num_set = set(nums)           # 将所有数字放入集合，查找 O(1)\n        longest = 0                   # 记录全局最长连续序列长度\n        for num in num_set:\n            # 关键优化：如果 num-1 存在，说明 num 不是序列起点，跳过\n            # 只从序列的最小值开始扩展，保证每个序列只遍历一次\n            if num-1 not in num_set:\n                current = num         # 当前正在检查的数字\n                length = 1            # 当前连续序列的长度（至少包含 num 自己）\n                # 不断向后查找 current+1 是否存在，存在则序列长度+1\n                while current+1 in num_set:\n                    current += 1\n                    length += 1\n                longest = max(longest,length)  # 更新全局最长长度\n        return longest",
    "statement": "给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。\n\n请你设计并实现时间复杂度为 O(n) 的算法解决此问题。\n\n \n\n示例 1：\n\n输入：nums = [100,4,200,1,3,2]\n输出：4\n解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。\n\n示例 2：\n\n输入：nums = [0,3,7,2,5,8,4,6,0,1]\n输出：9\n\n示例 3：\n\n输入：nums = [1,0,1,2]\n输出：3\n\n \n\n提示：\n\n\t0 <= nums.length <= 105\n\n\t-109 <= nums[i] <= 109"
  }
]
