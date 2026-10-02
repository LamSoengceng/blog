// 本文件由 scripts/generateAlgorithmData.mjs 自动生成，请勿手改。
// algorithmProblems 是轻量索引；完整题面/代码用 utils/algorithmContent.ts 的 loadAlgorithmContent 按需取。
import type { AlgorithmCategory, AlgorithmProblemSummary, AlgorithmRecentItem, AlgorithmReviewItem } from './types'

export type { AlgorithmCategory, AlgorithmProblem, AlgorithmProblemSummary, AlgorithmRecentItem, AlgorithmReviewItem } from './types'

export const categorySlugs: Record<string, string> = {
  "哈希表": "hash-table",
  "双指针": "two-pointers",
  "滑动窗口": "sliding-window",
  "子串": "substring",
  "普通数组": "array",
  "矩阵": "matrix",
  "链表": "linked-list",
  "二叉树": "binary-tree",
  "图论": "graph",
  "回溯": "backtracking",
  "二分查找": "binary-search",
  "栈": "stack",
  "堆": "heap",
  "贪心": "greedy",
  "动态规划": "dynamic-programming",
  "技巧": "tricks",
  "Hot100 补充": "hot100-extra"
}

export const algorithmProblems: AlgorithmProblemSummary[] = [
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
    }
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
    }
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
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E7%A7%BB%E5%8A%A8%E9%9B%B6",
    "acceptanceRate": 63.7,
    "solutionCount": 11439,
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
    "sourcePath": "hot100/02_双指针/283.移动零.py",
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
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "核心思想,slow遇到0不动,等待fast找到非0值进行交换",
      "interviewSteps": [
        "先说明核心考点：快慢指针。",
        "先排序或确定单调性，再定义左右指针移动规则；每次移动必须能排除一批不可能答案。",
        "关键词：双指针 / 快慢指针 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E7%9B%9B%E6%9C%80%E5%A4%9A%E6%B0%B4%E7%9A%84%E5%AE%B9%E5%99%A8",
    "acceptanceRate": 61.9,
    "solutionCount": 9364,
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
    "sourcePath": "hot100/02_双指针/11.盛最多水的容器.py",
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
    "recallBlanks": [
      {
        "prompt": "＿＿＿从两端向中间移动，每次移动较短的一边",
        "answer": "双指针"
      }
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
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E4%B8%89%E6%95%B0%E4%B9%8B%E5%92%8C",
    "acceptanceRate": 40.6,
    "solutionCount": 9803,
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
    "sourcePath": "hot100/02_双指针/15.三数之和.py",
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
    "recallBlanks": [
      {
        "prompt": "坑7: & 是＿＿＿，逻辑与用 and",
        "answer": "位运算"
      },
      {
        "prompt": "排序 + ＿＿＿，时间复杂度 O(n²)",
        "answer": "双指针"
      }
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
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%8E%A5%E9%9B%A8%E6%B0%B4",
    "acceptanceRate": 66.1,
    "solutionCount": 8223,
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
    "sourcePath": "hot100/02_双指针/42.接雨水.py",
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
    "recallBlanks": [
      {
        "prompt": "核心考点：＿＿＿ / ＿＿＿",
        "answer": "双指针"
      }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E7%9F%A9%E9%98%B5%E7%BD%AE%E9%9B%B6",
    "acceptanceRate": 71.3,
    "solutionCount": 3535,
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
    "sourcePath": "hot100/06_矩阵/73.矩阵置零.py",
    "lastUpdated": "2026-03-27",
    "lastUpdatedAt": "2026-03-27T13:11:08.095Z",
    "interviewPattern": "先定义坐标边界和访问顺序，任何原地操作都要说明覆盖风险。",
    "thoughts": [
      "时间 O(m*n)，空间 O(m+n)",
      "需二刷：方法二——常量空间（进阶）",
      "时间 O(m*n)，空间 O(1)"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "时间 O(m*n)，空间 O(m+n)",
      "interviewSteps": [
        "先说明核心考点：标记数组。",
        "先定义坐标边界和访问顺序，任何原地操作都要说明覆盖风险。",
        "关键词：矩阵 / 标记数组 / 数组 / 哈希表。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%97%8B%E8%BD%AC%E5%9B%BE%E5%83%8F",
    "acceptanceRate": 79.5,
    "solutionCount": 6921,
    "companyTagCount": 127,
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
    "sourcePath": "hot100/06_矩阵/48.旋转图像.py",
    "lastUpdated": "2026-03-22",
    "lastUpdatedAt": "2026-03-22T13:32:18.572Z",
    "interviewPattern": "先定义坐标边界和访问顺序，任何原地操作都要说明覆盖风险。",
    "thoughts": [
      "时间 O(n²)，空间 O(1)"
    ],
    "pitfalls": [
      "1. 映射公式是 (i,j)→(j,n-1-i)，不是 (j,n-i)，注意 0-indexed 要减 1",
      "2. 遍历范围必须缩小到 ~1/4，否则同一组位置会被重复旋转导致结果错误",
      "3. 四步赋值要从 loc4 开始存 tmp，逆着循环链赋值，否则值会被覆盖"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "时间 O(n²)，空间 O(1)",
      "interviewSteps": [
        "先说明核心考点：原地旋转 / 翻转。",
        "先定义坐标边界和访问顺序，任何原地操作都要说明覆盖风险。",
        "关键词：矩阵 / 原地旋转 / 翻转 / 数组 / 数学。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 映射公式是 (i,j)→(j,n-1-i)，不是 (j,n-i)，注意 0-indexed 要减 1"
    }
  },
  {
    "id": "54",
    "slug": "54-螺旋矩阵",
    "title": "螺旋矩阵",
    "titleEn": "Spiral Matrix",
    "category": "矩阵",
    "difficulty": "中等",
    "topic": "四边界收缩模拟",
    "completed": true,
    "leetcodeSlug": "spiral-matrix",
    "leetcodeUrl": "https://leetcode.cn/problems/spiral-matrix/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E8%9E%BA%E6%97%8B%E7%9F%A9%E9%98%B5",
    "acceptanceRate": 55.6,
    "solutionCount": 7170,
    "companyTagCount": 152,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "矩阵",
      "四边界收缩模拟",
      "数组",
      "模拟"
    ],
    "sourcePath": "hot100/06_矩阵/54.螺旋矩阵.py",
    "lastUpdated": "2026-08-25",
    "lastUpdatedAt": "2026-08-25T20:18:41.979Z",
    "interviewPattern": "先定义坐标边界和访问顺序，任何原地操作都要说明覆盖风险。",
    "thoughts": [
      "时间 O(m×n)：每个元素恰好访问一次；空间 O(1)（不计输出数组）"
    ],
    "pitfalls": [
      "需二刷：四边界收缩模拟（维护循环不变量）",
      "顺时针走一圈，走完一条边立即收缩对应边界。每条边遍历前用 if 守卫检查",
      "「边界未交叉」，防止剩单行/单列时被重复遍历。",
      "后果：取错元素且凑不满 m*n 个 → while 死循环（本次实战踩坑）",
      "2. 底行、左列前必须重新检查边界：走完右列后可能只剩一行/一列，",
      "3. 反向 range 左边界：range(right, left-1, -1) 才能包含 left；",
      "① 顶行：从左到右，走完上边界下移",
      "② 右列：从上到下（变化的行号 i 放第一维！），走完右边界左移"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "时间 O(m×n)：每个元素恰好访问一次；空间 O(1)（不计输出数组）",
      "interviewSteps": [
        "先说明核心考点：四边界收缩模拟。",
        "先定义坐标边界和访问顺序，任何原地操作都要说明覆盖风险。",
        "关键词：矩阵 / 四边界收缩模拟 / 数组 / 模拟。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "需二刷：四边界收缩模拟（维护循环不变量）"
    }
  },
  {
    "id": "240",
    "slug": "240-搜索二维矩阵-ii",
    "title": "搜索二维矩阵 II",
    "titleEn": "Search a 2D Matrix II",
    "category": "矩阵",
    "difficulty": "中等",
    "topic": "Z 字形搜索（右上角行走）",
    "completed": true,
    "leetcodeSlug": "search-a-2d-matrix-ii",
    "leetcodeUrl": "https://leetcode.cn/problems/search-a-2d-matrix-ii/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%90%9C%E7%B4%A2%E4%BA%8C%E7%BB%B4%E7%9F%A9%E9%98%B5%20II",
    "acceptanceRate": 57.6,
    "solutionCount": 2840,
    "companyTagCount": 84,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "矩阵",
      "Z 字形搜索（右上角行走）",
      "数组",
      "二分查找",
      "分治"
    ],
    "sourcePath": "hot100/06_矩阵/240.搜索二维矩阵 II.py",
    "lastUpdated": "2026-08-26",
    "lastUpdatedAt": "2026-08-26T13:20:06.100Z",
    "interviewPattern": "先定义坐标边界和访问顺序，任何原地操作都要说明覆盖风险。",
    "thoughts": [
      "时间 O(m+n)，空间 O(1)。对比暴力 O(m×n)、逐行二分 O(m·logn)，此法最优。",
      "「状态」是坐标本身，读出的值只是快照，指针不动等于原地打转（实战踩坑①）"
    ],
    "pitfalls": [
      "「状态」是坐标本身，读出的值只是快照，指针不动等于原地打转（实战踩坑①）",
      "但永远找不到答案 → 死循环。越界必须靠 while 条件主动拦截（实战踩坑②）",
      "→ IndexError。正确写法卡在「合法范围之外一格」，与 col > 0 对称（实战踩坑③）"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "时间 O(m+n)，空间 O(1)。对比暴力 O(m×n)、逐行二分 O(m·logn)，此法最优。",
      "interviewSteps": [
        "先说明核心考点：Z 字形搜索（右上角行走）。",
        "先定义坐标边界和访问顺序，任何原地操作都要说明覆盖风险。",
        "关键词：矩阵 / Z 字形搜索（右上角行走） / 数组 / 二分查找。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "「状态」是坐标本身，读出的值只是快照，指针不动等于原地打转（实战踩坑①）"
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E7%9B%B8%E4%BA%A4%E9%93%BE%E8%A1%A8",
    "acceptanceRate": 68.5,
    "solutionCount": 5922,
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
    "sourcePath": "hot100/07_链表/160.相交链表.py",
    "lastUpdated": "2026-03-16",
    "lastUpdatedAt": "2026-03-16T12:48:28.757Z",
    "interviewPattern": "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
    "thoughts": [
      "时间 O(m+n)  空间 O(1)"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "时间 O(m+n)  空间 O(1)",
      "interviewSteps": [
        "先说明核心考点：双指针。",
        "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
        "关键词：链表 / 双指针 / 哈希表。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8",
    "acceptanceRate": 76.5,
    "solutionCount": 14993,
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
    "sourcePath": "hot100/07_链表/206.反转链表.py",
    "lastUpdated": "2026-03-16",
    "lastUpdatedAt": "2026-03-16T13:17:51.544Z",
    "interviewPattern": "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
    "thoughts": [
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
    "recallBlanks": [
      {
        "prompt": "把所有节点压入＿＿＿，再依次弹出重新串联，顺序自然就反了",
        "answer": "栈"
      }
    ],
    "solutionGuide": {
      "idea": "把所有节点压入栈，再依次弹出重新串联，顺序自然就反了",
      "interviewSteps": [
        "先说明核心考点：迭代 / 递归。",
        "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
        "关键词：链表 / 迭代 / 递归 / 递归。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "把所有节点压入栈，再依次弹出重新串联，顺序自然就反了"
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%9B%9E%E6%96%87%E9%93%BE%E8%A1%A8",
    "acceptanceRate": 58.6,
    "solutionCount": 5434,
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
    "sourcePath": "hot100/07_链表/234.回文链表.py",
    "lastUpdated": "2026-03-17",
    "lastUpdatedAt": "2026-03-17T14:29:00.564Z",
    "interviewPattern": "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
    "thoughts": [
      "需二刷：快慢指针 + 反转链表是链表题的核心技巧，务必熟练掌握",
      "时间 O(n)，空间 O(1)",
      "--- 法一：转数组（简单直观，空间 O(n)）---",
      "--- 法二：快慢指针 + 反转后半链表（最优，空间 O(1)）---"
    ],
    "pitfalls": [
      "2. 反转链表时要用临时变量 nxt 保存 slow.next，否则链会断"
    ],
    "recallBlanks": [
      {
        "prompt": "2. ＿＿＿时要用临时变量 nxt 保存 slow.next，否则链会断",
        "answer": "反转链表"
      },
      {
        "prompt": "需二刷：＿＿＿ + ＿＿＿是链表题的核心技巧，务必熟练掌握",
        "answer": "快慢指针"
      }
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
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8",
    "acceptanceRate": 55.1,
    "solutionCount": 7463,
    "companyTagCount": 132,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "链表",
      "快慢指针",
      "哈希表",
      "双指针",
      "Floyd 判圈算法"
    ],
    "sourcePath": "hot100/07_链表/141.环形链表.py",
    "lastUpdated": "2026-03-17",
    "lastUpdatedAt": "2026-03-17T15:31:19.523Z",
    "interviewPattern": "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
    "thoughts": [
      "时间 O(n)，空间 O(1)"
    ],
    "pitfalls": [
      "1. 循环条件必须是 while fast and fast.next，不能写 while fast.next.next",
      "→ 如果 fast 是 None，访问 .next 会报 AttributeError（本次踩坑）",
      "3. 不能用数组存节点然后判断，有环会导致 while 死循环，内存爆掉（本次踩坑）",
      "4. slow ! fast 时应该继续循环，不能直接 return，否则第一轮就退出了（本次踩坑）"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "时间 O(n)，空间 O(1)",
      "interviewSteps": [
        "先说明核心考点：快慢指针。",
        "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
        "关键词：链表 / 快慢指针 / 哈希表 / 双指针。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 循环条件必须是 while fast and fast.next，不能写 while fast.next.next"
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8%20II",
    "acceptanceRate": 63.3,
    "solutionCount": 6190,
    "companyTagCount": 83,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "链表",
      "快慢指针 + 数学",
      "哈希表",
      "双指针",
      "Floyd 判圈算法"
    ],
    "sourcePath": "hot100/07_链表/142.环形链表-ii.py",
    "lastUpdated": "2026-03-20",
    "lastUpdatedAt": "2026-03-20T11:18:37.099Z",
    "interviewPattern": "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
    "thoughts": [
      "时间 O(n)，空间 O(1)"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "时间 O(n)，空间 O(1)",
      "interviewSteps": [
        "先说明核心考点：快慢指针 + 数学。",
        "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
        "关键词：链表 / 快慢指针 + 数学 / 哈希表 / 双指针。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%90%88%E5%B9%B6%E4%B8%A4%E4%B8%AA%E6%9C%89%E5%BA%8F%E9%93%BE%E8%A1%A8",
    "acceptanceRate": 68.3,
    "solutionCount": 10097,
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
    "sourcePath": "hot100/07_链表/21.合并两个有序链表.py",
    "lastUpdated": "2026-08-28",
    "lastUpdatedAt": "2026-08-28T16:29:45.641Z",
    "interviewPattern": "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
    "thoughts": [
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
    "recallBlanks": [
      {
        "prompt": "3. ＿＿＿解法中，终止条件必须放在最前面（否则访问 None.val 会报错）",
        "answer": "递归"
      },
      {
        "prompt": "方法一：迭代（dummy ＿＿＿ + ＿＿＿） 时间 O(m+n)，空间 O(1)",
        "answer": "虚拟头节点"
      }
    ],
    "solutionGuide": {
      "idea": "方法一：迭代（dummy 虚拟头节点 + 双指针） 时间 O(m+n)，空间 O(1)",
      "interviewSteps": [
        "先说明核心考点：递归 / 迭代。",
        "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
        "关键词：链表 / 递归 / 迭代 / 递归。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 初始化结果链表时不能用 ans  None，因为 None 没有 .next 属性"
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E4%B8%A4%E6%95%B0%E7%9B%B8%E5%8A%A0",
    "acceptanceRate": 47.2,
    "solutionCount": 16504,
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
    "sourcePath": "hot100/07_链表/2.两数相加.py",
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
    "recallBlanks": [
      {
        "prompt": "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 ＿＿＿和空链表边界。",
        "answer": "dummy 节点"
      }
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
    }
  },
  {
    "id": "19",
    "slug": "19-删除链表的倒数第-n-个结点",
    "title": "删除链表的倒数第 N 个结点",
    "titleEn": "Remove Nth Node From End of List",
    "category": "链表",
    "difficulty": "中等",
    "topic": "快慢指针",
    "completed": true,
    "leetcodeSlug": "remove-nth-node-from-end-of-list",
    "leetcodeUrl": "https://leetcode.cn/problems/remove-nth-node-from-end-of-list/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%88%A0%E9%99%A4%E9%93%BE%E8%A1%A8%E7%9A%84%E5%80%92%E6%95%B0%E7%AC%AC%20N%20%E4%B8%AA%E7%BB%93%E7%82%B9",
    "acceptanceRate": 53.7,
    "solutionCount": 11433,
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
    "sourcePath": "hot100/07_链表/19.删除链表的倒数第 N 个结点.py",
    "lastUpdated": "2026-08-27",
    "lastUpdatedAt": "2026-08-27T23:03:16.902Z",
    "interviewPattern": "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
    "thoughts": [
      "时间 O(L) L为链表长度，空间 O(1)"
    ],
    "pitfalls": [
      "1. 链表题不加 dummy 节点很容易在「删除第一个节点」这种边界条件上抛出空指针异常。",
      "3. while 循环条件必须是 fast.next（让 fast 停在最后一个节点），而不是 fast（会越界走到 None，导致 slow 走到要删除的节点上）。"
    ],
    "recallBlanks": [
      {
        "prompt": "1. 链表题不加 ＿＿＿很容易在「删除第一个节点」这种边界条件上抛出空指针异常。",
        "answer": "dummy 节点"
      }
    ],
    "solutionGuide": {
      "idea": "时间 O(L) L为链表长度，空间 O(1)",
      "interviewSteps": [
        "先说明核心考点：快慢指针。",
        "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
        "关键词：链表 / 快慢指针 / 双指针。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 链表题不加 dummy 节点很容易在「删除第一个节点」这种边界条件上抛出空指针异常。"
    }
  },
  {
    "id": "24",
    "slug": "24-两两交换链表中的节点",
    "title": "两两交换链表中的节点",
    "titleEn": "Swap Nodes in Pairs",
    "category": "链表",
    "difficulty": "中等",
    "topic": "迭代 / 递归",
    "completed": true,
    "leetcodeSlug": "swap-nodes-in-pairs",
    "leetcodeUrl": "https://leetcode.cn/problems/swap-nodes-in-pairs/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E4%B8%A4%E4%B8%A4%E4%BA%A4%E6%8D%A2%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B9",
    "acceptanceRate": 75.1,
    "solutionCount": 7250,
    "companyTagCount": 88,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "链表",
      "迭代 / 递归",
      "递归"
    ],
    "sourcePath": "hot100/07_链表/24.两两交换链表中的节点.py",
    "lastUpdated": "2026-08-28",
    "lastUpdatedAt": "2026-08-28T09:54:42.821Z",
    "interviewPattern": "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
    "thoughts": [
      "时间 O(N)，空间 O(1)",
      "3. 忘记更新状态变量：nodeA 和 nodeB 必须在 while 循环内部第一步获取，否则一直在交换同一对节点。"
    ],
    "pitfalls": [
      "1. 变量只换名不换指向：不能只是 nodeA, nodeB  nodeB, nodeA 交换变量名，必须切实修改节点的 .next 属性。",
      "3. 忘记更新状态变量：nodeA 和 nodeB 必须在 while 循环内部第一步获取，否则一直在交换同一对节点。"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "时间 O(N)，空间 O(1)",
      "interviewSteps": [
        "先说明核心考点：迭代 / 递归。",
        "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
        "关键词：链表 / 迭代 / 递归 / 递归。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 变量只换名不换指向：不能只是 nodeA, nodeB  nodeB, nodeA 交换变量名，必须切实修改节点的 .next 属性。"
    }
  },
  {
    "id": "25",
    "slug": "25-k-个一组翻转链表",
    "title": "K 个一组翻转链表",
    "titleEn": "Reverse Nodes in k-Group",
    "category": "链表",
    "difficulty": "困难",
    "topic": "迭代 / 分组翻转",
    "completed": true,
    "leetcodeSlug": "reverse-nodes-in-k-group",
    "leetcodeUrl": "https://leetcode.cn/problems/reverse-nodes-in-k-group/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=K%20%E4%B8%AA%E4%B8%80%E7%BB%84%E7%BF%BB%E8%BD%AC%E9%93%BE%E8%A1%A8",
    "acceptanceRate": 70,
    "solutionCount": 6410,
    "companyTagCount": 98,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "链表",
      "迭代 / 分组翻转",
      "递归"
    ],
    "sourcePath": "hot100/07_链表/25.K 个一组翻转链表.py",
    "lastUpdated": "2026-08-28",
    "lastUpdatedAt": "2026-08-28T15:20:25.871Z",
    "interviewPattern": "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
    "thoughts": [
      "时间 O(N)，空间 O(1)"
    ],
    "pitfalls": [
      "1. 遍历方向误区：单链表没有前驱指针，无法「从后往前」倒着找节点。必须「人从前往后走（curr 从 slow.next 到 fast），但在行进中把箭头掉头指向 pre」。",
      "2. 缝合初始值：局部翻转时，首个节点（原 slow.next）翻转后要接上后续链表，因此 pre 的初始值必须是下一组的头节点 fast.next，不能是 None。"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "时间 O(N)，空间 O(1)",
      "interviewSteps": [
        "先说明核心考点：迭代 / 分组翻转。",
        "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
        "关键词：链表 / 迭代 / 分组翻转 / 递归。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 遍历方向误区：单链表没有前驱指针，无法「从后往前」倒着找节点。必须「人从前往后走（curr 从 slow.next 到 fast），但在行进中把箭头掉头指向 pre」。"
    }
  },
  {
    "id": "138",
    "slug": "138-随机链表的复制",
    "title": "随机链表的复制",
    "titleEn": "Copy List with Random Pointer",
    "category": "链表",
    "difficulty": "中等",
    "topic": "哈希表 / 两次遍历",
    "completed": true,
    "leetcodeSlug": "copy-list-with-random-pointer",
    "leetcodeUrl": "https://leetcode.cn/problems/copy-list-with-random-pointer/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E9%9A%8F%E6%9C%BA%E9%93%BE%E8%A1%A8%E7%9A%84%E5%A4%8D%E5%88%B6",
    "acceptanceRate": 70.6,
    "solutionCount": 2724,
    "companyTagCount": 79,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "链表",
      "哈希表 / 两次遍历",
      "哈希表"
    ],
    "sourcePath": "hot100/07_链表/138.随机链表的复制.py",
    "lastUpdated": "2026-08-28",
    "lastUpdatedAt": "2026-08-28T15:34:59.399Z",
    "interviewPattern": "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
    "thoughts": [
      "需二刷：哈希表映射新旧节点 + 两次遍历深拷贝",
      "时间 O(N)，空间 O(N)",
      "2. 空指针越界：若未在哈希表中预置 d[None]  None，访问为 None 的 random 或 next 时会报 KeyError。"
    ],
    "pitfalls": [
      "1. 第一遍遍历：只复制节点值，建立 {原节点: 新节点} 的映射字典 d，并预置 d[None]  None 简化边界处理。",
      "1. 深拷贝混淆：第二轮连接时若误写成 d[cur].next  cur.next，新节点会指向原链表里的旧节点，破坏深拷贝。必须通过 d[cur.next] 和 d[cur.random] 连接对应的新节点。",
      "2. 空指针越界：若未在哈希表中预置 d[None]  None，访问为 None 的 random 或 next 时会报 KeyError。"
    ],
    "recallBlanks": [
      {
        "prompt": "2. 空指针越界：若未在＿＿＿中预置 d[None]  None，访问为 None 的 random 或 next 时会报 KeyError。",
        "answer": "哈希表"
      }
    ],
    "solutionGuide": {
      "idea": "需二刷：哈希表映射新旧节点 + 两次遍历深拷贝",
      "interviewSteps": [
        "先说明核心考点：哈希表 / 两次遍历。",
        "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
        "关键词：链表 / 哈希表 / 两次遍历 / 哈希表。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 第一遍遍历：只复制节点值，建立 {原节点: 新节点} 的映射字典 d，并预置 d[None]  None 简化边界处理。"
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
    "completed": true,
    "leetcodeSlug": "sort-list",
    "leetcodeUrl": "https://leetcode.cn/problems/sort-list/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%8E%92%E5%BA%8F%E9%93%BE%E8%A1%A8",
    "acceptanceRate": 67.7,
    "solutionCount": 3674,
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
    "sourcePath": "hot100/07_链表/148.排序链表.py",
    "lastUpdated": "2026-08-28",
    "lastUpdatedAt": "2026-08-28T16:28:14.622Z",
    "interviewPattern": "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
    "thoughts": [
      "1. 递归基：head 为空或只有 1 个节点时已自然有序，直接返回。",
      "3. 递归分治：分别递归排序前半段和后半段。",
      "4. 双指针合并：利用合并两个有序链表（第 21 题）的双指针/哨兵节点技巧将左右两段有序拼接。",
      "时间 O(n log n)，空间 O(log n)（递归调用栈深度）",
      "1. 遗漏递归基：若未在开头判断 if not head or not head.next: return head，单节点或空节点会继续切分导致 RecursionError（死循环栈溢出）。",
      "2. 中点断开：切分时必须执行 slow.next  None 将链表斩断为两条独立链表，否则递归依然处理原长链表造成死循环。",
      "1. 递归基"
    ],
    "pitfalls": [
      "2. 中点断开：切分时必须执行 slow.next  None 将链表斩断为两条独立链表，否则递归依然处理原长链表造成死循环。",
      "3. 快指针起点与循环条件：fast 必须从 head.next 开始（让 slow 停在前半段末尾），循环条件必须是 while fast and fast.next 防止 fast.next.next 产生 NoneType AttributeError。"
    ],
    "recallBlanks": [
      {
        "prompt": "2. 中点断开：切分时必须执行 slow.next  None 将链表斩断为两条独立链表，否则＿＿＿依然处理原长链表造成死循环。",
        "answer": "递归"
      },
      {
        "prompt": "4. ＿＿＿合并：利用合并两个有序链表（第 21 题）的＿＿＿/＿＿＿技巧将左右两段有序拼接。",
        "answer": "双指针"
      }
    ],
    "solutionGuide": {
      "idea": "1. 递归基：head 为空或只有 1 个节点时已自然有序，直接返回。",
      "interviewSteps": [
        "先说明核心考点：归并排序。",
        "画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",
        "关键词：链表 / 归并排序 / 双指针 / 分治。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "2. 中点断开：切分时必须执行 slow.next  None 将链表斩断为两条独立链表，否则递归依然处理原长链表造成死循环。"
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E4%B8%AD%E5%BA%8F%E9%81%8D%E5%8E%86",
    "acceptanceRate": 78.3,
    "solutionCount": 6195,
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
    "sourcePath": "hot100/08_二叉树/94.二叉树的中序遍历.py",
    "lastUpdated": "2026-03-16",
    "lastUpdatedAt": "2026-03-16T10:38:44.978Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "解法一：递归（直观好理解）",
      "时间 O(n)  空间 O(n)",
      "--- 递归方法 ---",
      "dfs(node.left)              # 1. 先递归左子树",
      "dfs(node.right)             # 3. 再递归右子树",
      "解法二：迭代（用栈模拟递归）",
      "时间 O(n)  空间 O(n)"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "recallBlanks": [
      {
        "prompt": "解法一：＿＿＿（直观好理解）",
        "answer": "递归"
      },
      {
        "prompt": "＿＿＿(node.left)              # 1. 先＿＿＿左子树",
        "answer": "dfs"
      },
      {
        "prompt": "解法二：迭代（用＿＿＿模拟＿＿＿）",
        "answer": "栈"
      }
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
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%A4%A7%E6%B7%B1%E5%BA%A6",
    "acceptanceRate": 79.1,
    "solutionCount": 7452,
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
    "sourcePath": "hot100/08_二叉树/104.二叉树的最大深度.py",
    "lastUpdated": "2026-03-19",
    "lastUpdatedAt": "2026-03-19T10:58:09.850Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "时间 O(n)，空间 O(h)，h 为树高",
      "2. 类方法递归调用要用 self.maxDepth()，不能直接写 maxDepth()"
    ],
    "pitfalls": [
      "1. 别忘了 +1（当前节点自己也算一层）",
      "2. 类方法递归调用要用 self.maxDepth()，不能直接写 maxDepth()"
    ],
    "recallBlanks": [
      {
        "prompt": "2. 类方法＿＿＿调用要用 self.maxDepth()，不能直接写 maxDepth()",
        "answer": "递归"
      }
    ],
    "solutionGuide": {
      "idea": "时间 O(n)，空间 O(h)，h 为树高",
      "interviewSteps": [
        "先说明核心考点：DFS。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / DFS / 树 / 深度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 别忘了 +1（当前节点自己也算一层）"
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E7%BF%BB%E8%BD%AC%E4%BA%8C%E5%8F%89%E6%A0%91",
    "acceptanceRate": 82.5,
    "solutionCount": 6103,
    "companyTagCount": 82,
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
    "sourcePath": "hot100/08_二叉树/226.翻转二叉树.py",
    "lastUpdated": "2026-03-19",
    "lastUpdatedAt": "2026-03-19T08:14:32.715Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "时间 O(n)，空间 O(h)，h 为树高（递归栈深度）",
      "递归"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "recallBlanks": [
      {
        "prompt": "时间 O(n)，空间 O(h)，h 为树高（＿＿＿＿＿＿深度）",
        "answer": "递归"
      }
    ],
    "solutionGuide": {
      "idea": "时间 O(n)，空间 O(h)，h 为树高（递归栈深度）",
      "interviewSteps": [
        "先说明核心考点：递归。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / 递归 / 树 / 深度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%AF%B9%E7%A7%B0%E4%BA%8C%E5%8F%89%E6%A0%91",
    "acceptanceRate": 63.9,
    "solutionCount": 6529,
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
    "sourcePath": "hot100/08_二叉树/101.对称二叉树.py",
    "lastUpdated": "2026-03-19",
    "lastUpdatedAt": "2026-03-19T07:37:10.455Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "需二刷：栈存配对节点 / 递归对称比较",
      "时间 O(n)，空间 O(n)",
      "1. 栈方法中 while 条件不能写 while root.left and root.right（永远不变，死循环），应该写 while stack",
      "2. 栈里每次 pop 两个、append 两个一组，栈元素有顺序不是\"并列\"",
      "4. 递归调用必须 return，不 return 结果会丢失",
      "5. 递归中最后一步要用 and 连接两个子问题，两个都对称才是真的对称",
      "方法一：栈（迭代）"
    ],
    "pitfalls": [
      "1. 栈方法中 while 条件不能写 while root.left and root.right（永远不变，死循环），应该写 while stack",
      "3. 不能只比较值不比较结构：跳过 None 会丢失结构信息，导致结构不同但值相同的树误判为对称"
    ],
    "recallBlanks": [
      {
        "prompt": "1. ＿＿＿方法中 while 条件不能写 while root.left and root.right（永远不变，死循环），应该写 while stack",
        "answer": "栈"
      },
      {
        "prompt": "4. ＿＿＿调用必须 return，不 return 结果会丢失",
        "answer": "递归"
      }
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
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E7%9B%B4%E5%BE%84",
    "acceptanceRate": 64.4,
    "solutionCount": 3438,
    "companyTagCount": 75,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "DFS",
      "树",
      "深度优先搜索",
      "树形 DP"
    ],
    "sourcePath": "hot100/08_二叉树/543.二叉树的直径.py",
    "lastUpdated": "2026-03-19",
    "lastUpdatedAt": "2026-03-19T09:23:26.105Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "需二刷：在求深度的递归中\"顺便\"更新全局最大直径",
      "在递归求深度时，顺便用 self.ans 记录经过每个节点的最大路径长度",
      "时间 O(n)，空间 O(h)，h 为树高"
    ],
    "pitfalls": [
      "1. 直径不一定经过根节点！所以不能只算根的左深度+右深度",
      "4. 函数返回的是\"深度\"，直径通过 self.ans 在过程中更新，不能用返回值传递直径"
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：在求深度的＿＿＿中\"顺便\"更新全局最大直径",
        "answer": "递归"
      }
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
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%B1%82%E5%BA%8F%E9%81%8D%E5%8E%86",
    "acceptanceRate": 70.8,
    "solutionCount": 6554,
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
    "sourcePath": "hot100/08_二叉树/102.二叉树的层序遍历.py",
    "lastUpdated": "2026-03-20",
    "lastUpdatedAt": "2026-03-20T12:14:23.814Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "需二刷：BFS 层序遍历模板题",
      "时间 O(n)，空间 O(n)（队列最多存一层的节点）",
      "方法一：BFS（面试首推 ⭐⭐⭐）",
      "方法二：DFS（面试备选）",
      "用递归 DFS，通过 depth 参数知道当前在第几层"
    ],
    "pitfalls": [
      "3. 入队孩子要判空：if node.left，否则 None.val 报错"
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：＿＿＿ ＿＿＿模板题",
        "answer": "BFS"
      },
      {
        "prompt": "时间 O(n)，空间 O(n)（＿＿＿最多存一层的节点）",
        "answer": "队列"
      },
      {
        "prompt": "方法二：＿＿＿（面试备选）",
        "answer": "DFS"
      }
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
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%B0%86%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E8%BD%AC%E6%8D%A2%E4%B8%BA%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91",
    "acceptanceRate": 80.6,
    "solutionCount": 3222,
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
    "sourcePath": "hot100/08_二叉树/108.将有序数组转换为二叉搜索树.py",
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
    "recallBlanks": [
      {
        "prompt": "先选 ＿＿＿/＿＿＿，再说＿＿＿函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "answer": "DFS"
      }
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
    }
  },
  {
    "id": "98",
    "slug": "98-验证二叉搜索树",
    "title": "验证二叉搜索树",
    "titleEn": "Validate Binary Search Tree",
    "category": "二叉树",
    "difficulty": "中等",
    "topic": "中序遍历 / 区间递归",
    "completed": true,
    "leetcodeSlug": "validate-binary-search-tree",
    "leetcodeUrl": "https://leetcode.cn/problems/validate-binary-search-tree/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E9%AA%8C%E8%AF%81%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91",
    "acceptanceRate": 41.4,
    "solutionCount": 5873,
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
    "sourcePath": "hot100/08_二叉树/98.验证二叉搜索树.py",
    "lastUpdated": "2026-08-28",
    "lastUpdatedAt": "2026-08-28T19:43:18.288Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "需二刷：二叉搜索树性质验证（中序遍历单调性 / 递归有效上下界约束）",
      "方法一（递归区间法/上下界法）：每个节点值必须落在合法的开区间 (lower, upper) 内。",
      "时间 O(n)，空间 O(n)（最坏情况下树退化为链表时的递归栈深度）",
      "方法一：递归传递上下界区间（最简洁优雅，推荐）",
      "递归校验左子树（上界变为当前值）和右子树（下界变为当前值）"
    ],
    "pitfalls": [
      "3. 初始极小值：初始下界需设为 -float('inf')，防止第一个节点为负数（如 32 位整型最小值 -2147483648）时被误判。"
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：二叉搜索树性质验证（＿＿＿单调性 / ＿＿＿有效上下界约束）",
        "answer": "中序遍历"
      },
      {
        "prompt": "方法一（＿＿＿区间法/上下界法）：每个节点值必须落在合法的开区间 (lower, upper) 内。",
        "answer": "递归"
      }
    ],
    "solutionGuide": {
      "idea": "需二刷：二叉搜索树性质验证（中序遍历单调性 / 递归有效上下界约束）",
      "interviewSteps": [
        "先说明核心考点：中序遍历 / 区间递归。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / 中序遍历 / 区间递归 / 树 / 深度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "3. 初始极小值：初始下界需设为 -float('inf')，防止第一个节点为负数（如 32 位整型最小值 -2147483648）时被误判。"
    }
  },
  {
    "id": "230",
    "slug": "230-二叉搜索树中第-k-小的元素",
    "title": "二叉搜索树中第 K 小的元素",
    "titleEn": "Kth Smallest Element in a BST",
    "category": "二叉树",
    "difficulty": "中等",
    "topic": "中序遍历 + nonlocal 计数器",
    "completed": true,
    "leetcodeSlug": "kth-smallest-element-in-a-bst",
    "leetcodeUrl": "https://leetcode.cn/problems/kth-smallest-element-in-a-bst/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%AD%E7%AC%AC%20K%20%E5%B0%8F%E7%9A%84%E5%85%83%E7%B4%A0",
    "acceptanceRate": 79.8,
    "solutionCount": 3142,
    "companyTagCount": 48,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "中序遍历 + nonlocal 计数器",
      "树",
      "深度优先搜索",
      "二叉搜索树"
    ],
    "sourcePath": "hot100/08_二叉树/230.二叉搜索树中第 K 小的元素.py",
    "lastUpdated": "2026-08-30",
    "lastUpdatedAt": "2026-08-30T17:10:05.094Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "时间 O(H + k)，H 为树高；空间 O(H)，递归栈深度"
    ],
    "pitfalls": [
      "1. 混淆 node.val 和 node.left.val：处理当前节点时记录 node.val，不是子节点的值"
    ],
    "recallBlanks": [
      {
        "prompt": "时间 O(H + k)，H 为树高；空间 O(H)，＿＿＿＿＿＿深度",
        "answer": "递归"
      }
    ],
    "solutionGuide": {
      "idea": "时间 O(H + k)，H 为树高；空间 O(H)，递归栈深度",
      "interviewSteps": [
        "先说明核心考点：中序遍历 + nonlocal 计数器。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / 中序遍历 + nonlocal 计数器 / 树 / 深度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 混淆 node.val 和 node.left.val：处理当前节点时记录 node.val，不是子节点的值"
    }
  },
  {
    "id": "199",
    "slug": "199-二叉树的右视图",
    "title": "二叉树的右视图",
    "titleEn": "Binary Tree Right Side View",
    "category": "二叉树",
    "difficulty": "中等",
    "topic": "DFS 按深度分层 / BFS 每层取末尾",
    "completed": true,
    "leetcodeSlug": "binary-tree-right-side-view",
    "leetcodeUrl": "https://leetcode.cn/problems/binary-tree-right-side-view/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%8F%B3%E8%A7%86%E5%9B%BE",
    "acceptanceRate": 73.8,
    "solutionCount": 4861,
    "companyTagCount": 90,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "DFS 按深度分层 / BFS 每层取末尾",
      "树",
      "深度优先搜索",
      "广度优先搜索"
    ],
    "sourcePath": "hot100/08_二叉树/199.二叉树的右视图.py",
    "lastUpdated": "2026-08-30",
    "lastUpdatedAt": "2026-08-30T18:33:09.356Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "时间 O(n)，空间 O(n)（result 存所有节点 + 递归栈 O(H)）",
      "1. 先左后右 DFS：同层右节点追加在左节点后面，result[depth][-1] 自然是最右的"
    ],
    "pitfalls": [
      "2. depth  len(result) 是新层触发条件，不能写成 depth > len(result)（会重复 append）"
    ],
    "recallBlanks": [
      {
        "prompt": "时间 O(n)，空间 O(n)（result 存所有节点 + ＿＿＿＿＿＿ O(H)）",
        "answer": "递归"
      },
      {
        "prompt": "1. 先左后右 ＿＿＿：同层右节点追加在左节点后面，result[depth][-1] 自然是最右的",
        "answer": "DFS"
      }
    ],
    "solutionGuide": {
      "idea": "时间 O(n)，空间 O(n)（result 存所有节点 + 递归栈 O(H)）",
      "interviewSteps": [
        "先说明核心考点：DFS 按深度分层 / BFS 每层取末尾。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / DFS 按深度分层 / BFS 每层取末尾 / 树 / 深度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "2. depth  len(result) 是新层触发条件，不能写成 depth > len(result)（会重复 append）"
    }
  },
  {
    "id": "114",
    "slug": "114-二叉树展开为链表",
    "title": "二叉树展开为链表",
    "titleEn": "Flatten Binary Tree to Linked List",
    "category": "二叉树",
    "difficulty": "中等",
    "topic": "前序 DFS 收集节点 + 重连 right",
    "completed": true,
    "leetcodeSlug": "flatten-binary-tree-to-linked-list",
    "leetcodeUrl": "https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E4%BA%8C%E5%8F%89%E6%A0%91%E5%B1%95%E5%BC%80%E4%B8%BA%E9%93%BE%E8%A1%A8",
    "acceptanceRate": 76.2,
    "solutionCount": 4599,
    "companyTagCount": 56,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "前序 DFS 收集节点 + 重连 right",
      "栈",
      "树",
      "深度优先搜索",
      "链表"
    ],
    "sourcePath": "hot100/08_二叉树/114.二叉树展开为链表.py",
    "lastUpdated": "2026-08-30",
    "lastUpdatedAt": "2026-08-30T18:56:28.249Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "时间 O(n)，空间 O(n)（nodes 列表存所有节点）"
    ],
    "pitfalls": [
      "2. for 循环要用 range(len(nodes) - 1)，否则最后一个节点 nodes[i+1] 越界"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "时间 O(n)，空间 O(n)（nodes 列表存所有节点）",
      "interviewSteps": [
        "先说明核心考点：前序 DFS 收集节点 + 重连 right。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / 前序 DFS 收集节点 + 重连 right / 栈 / 树。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "2. for 循环要用 range(len(nodes) - 1)，否则最后一个节点 nodes[i+1] 越界"
    }
  },
  {
    "id": "105",
    "slug": "105-从前序与中序遍历序列构造二叉树",
    "title": "从前序与中序遍历序列构造二叉树",
    "titleEn": "Construct Binary Tree from Preorder and Inorder Traversal",
    "category": "二叉树",
    "difficulty": "中等",
    "topic": "递归分治 + index 定根",
    "completed": true,
    "leetcodeSlug": "construct-binary-tree-from-preorder-and-inorder-traversal",
    "leetcodeUrl": "https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E4%BB%8E%E5%89%8D%E5%BA%8F%E4%B8%8E%E4%B8%AD%E5%BA%8F%E9%81%8D%E5%8E%86%E5%BA%8F%E5%88%97%E6%9E%84%E9%80%A0%E4%BA%8C%E5%8F%89%E6%A0%91",
    "acceptanceRate": 73.3,
    "solutionCount": 4088,
    "companyTagCount": 76,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "递归分治 + index 定根",
      "树",
      "数组",
      "哈希表",
      "分治"
    ],
    "sourcePath": "hot100/08_二叉树/105.从前序与中序遍历序列构造二叉树.py",
    "lastUpdated": "2026-08-30",
    "lastUpdatedAt": "2026-08-30T19:13:25.025Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "时间 O(n²)（每次 index 是 O(n)）；空间 O(n)（递归栈 + 切片）",
      "4. 递归调用要写 self.buildTree(...)，不能漏掉 self"
    ],
    "pitfalls": [
      "1. 忘记边界：if not preorder 必须在第一行，否则空数组时 preorder[0] 报错",
      "2. inorder[mid] 是根节点的值（整数），不是子树数组，不能传给 buildTree",
      "4. 递归调用要写 self.buildTree(...)，不能漏掉 self"
    ],
    "recallBlanks": [
      {
        "prompt": "4. ＿＿＿调用要写 self.buildTree(...)，不能漏掉 self",
        "answer": "递归"
      }
    ],
    "solutionGuide": {
      "idea": "时间 O(n²)（每次 index 是 O(n)）；空间 O(n)（递归栈 + 切片）",
      "interviewSteps": [
        "先说明核心考点：递归分治 + index 定根。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / 递归分治 + index 定根 / 树 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 忘记边界：if not preorder 必须在第一行，否则空数组时 preorder[0] 报错"
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
    "completed": true,
    "leetcodeSlug": "path-sum-iii",
    "leetcodeUrl": "https://leetcode.cn/problems/path-sum-iii/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E8%B7%AF%E5%BE%84%E6%80%BB%E5%92%8C%20III",
    "acceptanceRate": 49.3,
    "solutionCount": 2520,
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
    "sourcePath": "hot100/08_二叉树/437.路径总和 III.py",
    "lastUpdated": "2026-08-30",
    "lastUpdatedAt": "2026-08-30T19:31:23.941Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "需二刷：树上前缀和 + 哈希表，和 560 题思路完全一致",
      "时间 O(n)，空间 O(n)",
      "将当前前缀和加入哈希表"
    ],
    "pitfalls": [
      "否则兄弟分支会误用当前分支的前缀和，导致多计",
      "回溯：退出当前节点，撤销前缀和，防止污染兄弟分支"
    ],
    "recallBlanks": [
      {
        "prompt": "否则兄弟分支会误用当前分支的＿＿＿，导致多计",
        "answer": "前缀和"
      },
      {
        "prompt": "＿＿＿：退出当前节点，撤销＿＿＿，防止污染兄弟分支",
        "answer": "回溯"
      }
    ],
    "solutionGuide": {
      "idea": "需二刷：树上前缀和 + 哈希表，和 560 题思路完全一致",
      "interviewSteps": [
        "先说明核心考点：前缀和 + DFS。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / 前缀和 + DFS / 树 / 深度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "否则兄弟分支会误用当前分支的前缀和，导致多计"
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
    "completed": true,
    "leetcodeSlug": "lowest-common-ancestor-of-a-binary-tree",
    "leetcodeUrl": "https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88",
    "acceptanceRate": 75.4,
    "solutionCount": 4560,
    "companyTagCount": 111,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "递归",
      "树",
      "深度优先搜索",
      "最近公共祖先",
      "Binary Lifting"
    ],
    "sourcePath": "hot100/08_二叉树/236.二叉树的最近公共祖先.py",
    "lastUpdated": "2026-08-30",
    "lastUpdatedAt": "2026-08-30T20:38:07.470Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "需二刷：经典递归 LCA，\"向下找、向上汇报\"模型",
      "时间 O(n)，空间 O(n)（递归栈）"
    ],
    "pitfalls": [
      "1. 终止条件必须 return node，不能写 return（返回 None 等于\"没找到\"）"
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：经典＿＿＿ LCA，\"向下找、向上汇报\"模型",
        "answer": "递归"
      }
    ],
    "solutionGuide": {
      "idea": "需二刷：经典递归 LCA，\"向下找、向上汇报\"模型",
      "interviewSteps": [
        "先说明核心考点：递归。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / 递归 / 树 / 深度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 终止条件必须 return node，不能写 return（返回 None 等于\"没找到\"）"
    }
  },
  {
    "id": "124",
    "slug": "124-二叉树中的最大路径和",
    "title": "二叉树中的最大路径和",
    "titleEn": "Binary Tree Maximum Path Sum",
    "category": "二叉树",
    "difficulty": "困难",
    "topic": "后序 DFS + 拐弯点全局更新",
    "completed": true,
    "leetcodeSlug": "binary-tree-maximum-path-sum",
    "leetcodeUrl": "https://leetcode.cn/problems/binary-tree-maximum-path-sum/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E4%BA%8C%E5%8F%89%E6%A0%91%E4%B8%AD%E7%9A%84%E6%9C%80%E5%A4%A7%E8%B7%AF%E5%BE%84%E5%92%8C",
    "acceptanceRate": 48.4,
    "solutionCount": 3097,
    "companyTagCount": 99,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "后序 DFS + 拐弯点全局更新",
      "树",
      "深度优先搜索",
      "动态规划",
      "树形 DP"
    ],
    "sourcePath": "hot100/08_二叉树/124.二叉树中的最大路径和.py",
    "lastUpdated": "2026-08-30",
    "lastUpdatedAt": "2026-08-30T20:58:02.924Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "时间 O(n)，空间 O(h)，h 为树高（递归栈）"
    ],
    "pitfalls": [
      "1. 向父节点贡献的最大单侧路径（只能选左或右，不能拐弯）",
      "3. 忘记负增益过滤（max(..., 0)）：负子树会拖低路径和，应舍弃",
      "4. 拐弯值（turning）只能更新全局答案，不能作为 return 值向上传"
    ],
    "recallBlanks": [
      {
        "prompt": "时间 O(n)，空间 O(h)，h 为树高（＿＿＿＿＿＿）",
        "answer": "递归"
      }
    ],
    "solutionGuide": {
      "idea": "时间 O(n)，空间 O(h)，h 为树高（递归栈）",
      "interviewSteps": [
        "先说明核心考点：后序 DFS + 拐弯点全局更新。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / 后序 DFS + 拐弯点全局更新 / 树 / 深度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 向父节点贡献的最大单侧路径（只能选左或右，不能拐弯）"
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%B2%9B%E5%B1%BF%E6%95%B0%E9%87%8F",
    "acceptanceRate": 64.1,
    "solutionCount": 5709,
    "companyTagCount": 178,
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
    "sourcePath": "hot100/09_图论/200.岛屿数量.py",
    "lastUpdated": "2026-03-27",
    "lastUpdatedAt": "2026-03-27T07:39:32.812Z",
    "interviewPattern": "先建模节点、边和访问状态，BFS 适合最短层数，DFS 适合连通块和搜索。",
    "thoughts": [
      "需二刷：DFS 淹岛法（Flood Fill）",
      "时间 O(m*n)，空间 O(m*n)（最坏情况递归栈深度）",
      "2. DFS 进入后要立即标记 grid[i][j]  '0'，否则相邻格子互相递归导致无限循环"
    ],
    "pitfalls": [
      "2. DFS 进入后要立即标记 grid[i][j]  '0'，否则相邻格子互相递归导致无限循环",
      "先把当前格子淹掉，防止重复访问",
      "邻居在边界内且是陆地，继续淹"
    ],
    "recallBlanks": [
      {
        "prompt": "2. ＿＿＿ 进入后要立即标记 grid[i][j]  '0'，否则相邻格子互相＿＿＿导致无限循环",
        "answer": "DFS"
      },
      {
        "prompt": "时间 O(m*n)，空间 O(m*n)（最坏情况＿＿＿＿＿＿深度）",
        "answer": "递归"
      }
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
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E8%85%90%E7%83%82%E7%9A%84%E6%A9%98%E5%AD%90",
    "acceptanceRate": 55.7,
    "solutionCount": 3609,
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
    "sourcePath": "hot100/09_图论/994.腐烂的橘子.py",
    "lastUpdated": "2026-03-27",
    "lastUpdatedAt": "2026-03-27T09:25:25.788Z",
    "interviewPattern": "先建模节点、边和访问状态，BFS 适合最短层数，DFS 适合连通块和搜索。",
    "thoughts": [
      "需二刷：多源 BFS + 层序遍历",
      "时间 O(m*n)，空间 O(m*n)",
      "第一步：遍历网格，找出所有烂橘子（BFS 起点）和统计新鲜橘子数量",
      "第二步：多源 BFS，层序遍历（每一层  1 分钟）"
    ],
    "pitfalls": [
      "2. 感染后必须 grid[nx][ny]  2，否则同一个橘子会被重复入队",
      "4. 边界：一开始就没有新鲜橘子，直接返回 0",
      "边界：没有新鲜橘子，直接返回 0"
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：多源 ＿＿＿ + ＿＿＿",
        "answer": "BFS"
      }
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
    }
  },
  {
    "id": "207",
    "slug": "207-课程表",
    "title": "课程表",
    "titleEn": "Course Schedule",
    "category": "图论",
    "difficulty": "中等",
    "topic": "拓扑排序",
    "completed": true,
    "leetcodeSlug": "course-schedule",
    "leetcodeUrl": "https://leetcode.cn/problems/course-schedule/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E8%AF%BE%E7%A8%8B%E8%A1%A8",
    "acceptanceRate": 57.5,
    "solutionCount": 3491,
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
      "图",
      "有向无环图"
    ],
    "sourcePath": "hot100/09_图论/207.课程表.py",
    "lastUpdated": "2026-08-26",
    "lastUpdatedAt": "2026-08-26T18:41:12.694Z",
    "interviewPattern": "先建模节点、边和访问状态，BFS 适合最短层数，DFS 适合连通块和搜索。",
    "thoughts": [
      "将入度为 0 的节点放入队列进行 BFS。每次出队表示修完一门课，将其后续课程入度 -1。",
      "时间 O(V + E)（V 为课程数，E 为先修依赖数），空间 O(V + E)"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "recallBlanks": [
      {
        "prompt": "将入度为 0 的节点放入＿＿＿进行 ＿＿＿。每次出队表示修完一门课，将其后续课程入度 -1。",
        "answer": "队列"
      }
    ],
    "solutionGuide": {
      "idea": "将入度为 0 的节点放入队列进行 BFS。每次出队表示修完一门课，将其后续课程入度 -1。",
      "interviewSteps": [
        "先说明核心考点：拓扑排序。",
        "先建模节点、边和访问状态，BFS 适合最短层数，DFS 适合连通块和搜索。",
        "关键词：图论 / 拓扑排序 / 深度优先搜索 / 广度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
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
    "completed": true,
    "leetcodeSlug": "implement-trie-prefix-tree",
    "leetcodeUrl": "https://leetcode.cn/problems/implement-trie-prefix-tree/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%AE%9E%E7%8E%B0%20Trie%20(%E5%89%8D%E7%BC%80%E6%A0%91)",
    "acceptanceRate": 72.5,
    "solutionCount": 2452,
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
    "sourcePath": "hot100/09_图论/208.实现 Trie (前缀树).py",
    "lastUpdated": "2026-08-27",
    "lastUpdatedAt": "2026-08-27T14:02:03.847Z",
    "interviewPattern": "先建模节点、边和访问状态，BFS 适合最短层数，DFS 适合连通块和搜索。",
    "thoughts": [
      "时间 O(L)，空间 O(L)（L 为每次插入/搜索的单词长度）"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "时间 O(L)，空间 O(L)（L 为每次插入/搜索的单词长度）",
      "interviewSteps": [
        "先说明核心考点：字典树设计。",
        "先建模节点、边和访问状态，BFS 适合最短层数，DFS 适合连通块和搜索。",
        "关键词：图论 / 字典树设计 / 设计 / 字典树。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%85%A8%E6%8E%92%E5%88%97",
    "acceptanceRate": 80.1,
    "solutionCount": 7855,
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
    "sourcePath": "hot100/10_回溯/46.全排列.py",
    "lastUpdated": "2026-03-21",
    "lastUpdatedAt": "2026-03-21T03:51:54.988Z",
    "interviewPattern": "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",
    "thoughts": [
      "- 递归返回后撤销选择（pop），尝试下一个分支",
      "时间 O(n! * n)，空间 O(n)",
      "- 递归栈深度 O(n)"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "recallBlanks": [
      {
        "prompt": "- ＿＿＿返回后撤销选择（pop），尝试下一个分支",
        "answer": "递归"
      }
    ],
    "solutionGuide": {
      "idea": "- 递归返回后撤销选择（pop），尝试下一个分支",
      "interviewSteps": [
        "先说明核心考点：排列树。",
        "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",
        "关键词：回溯 / 排列树 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%AD%90%E9%9B%86",
    "acceptanceRate": 81.8,
    "solutionCount": 5907,
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
    "sourcePath": "hot100/10_回溯/78.子集.py",
    "lastUpdated": "2026-03-21",
    "lastUpdatedAt": "2026-03-21T09:45:01.128Z",
    "interviewPattern": "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",
    "thoughts": [
      "时间 O(n * 2^n)，空间 O(n)（递归栈深度）",
      "2. 递归时传 i+1 而不是 startIndex+1，否则会重复选择元素"
    ],
    "pitfalls": [
      "1. 不能用 if num in path 去重（那是全排列的做法），子集用 startIndex 去重",
      "2. 递归时传 i+1 而不是 startIndex+1，否则会重复选择元素",
      "3. 收集结果必须用 path.copy()，否则 result 中所有引用指向同一个 path"
    ],
    "recallBlanks": [
      {
        "prompt": "2. ＿＿＿时传 i+1 而不是 startIndex+1，否则会重复选择元素",
        "answer": "递归"
      }
    ],
    "solutionGuide": {
      "idea": "时间 O(n * 2^n)，空间 O(n)（递归栈深度）",
      "interviewSteps": [
        "先说明核心考点：子集树。",
        "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",
        "关键词：回溯 / 子集树 / 位运算 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 不能用 if num in path 去重（那是全排列的做法），子集用 startIndex 去重"
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E7%94%B5%E8%AF%9D%E5%8F%B7%E7%A0%81%E7%9A%84%E5%AD%97%E6%AF%8D%E7%BB%84%E5%90%88",
    "acceptanceRate": 63.9,
    "solutionCount": 7821,
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
    "sourcePath": "hot100/10_回溯/17.电话号码的字母组合.py",
    "lastUpdated": "2026-03-22",
    "lastUpdatedAt": "2026-03-22T09:24:36.443Z",
    "interviewPattern": "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",
    "thoughts": [
      "需二刷：回溯法 —— 每层递归的选择列表不同（由当前数字决定）",
      "每层递归遍历该数字对应的字母，选择→递归→撤销",
      "时间 O(3^m × 4^n)，m 是对应 3 个字母的数字个数，n 是对应 4 个字母的数字个数",
      "空间 O(len(digits))，递归栈深度",
      "4. 空字符串判断放在递归函数外面，避免每次递归都重复检查"
    ],
    "pitfalls": [
      "边界情况：空字符串直接返回空列表"
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：＿＿＿法 —— 每层＿＿＿的选择列表不同（由当前数字决定）",
        "answer": "回溯"
      },
      {
        "prompt": "每层＿＿＿遍历该数字对应的字母，选择→＿＿＿→撤销",
        "answer": "递归"
      }
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
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8C",
    "acceptanceRate": 74,
    "solutionCount": 5714,
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
    "sourcePath": "hot100/10_回溯/39.组合总和.py",
    "lastUpdated": "2026-03-22",
    "lastUpdatedAt": "2026-03-22T12:53:17.167Z",
    "interviewPattern": "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",
    "thoughts": [
      "由于同一个数可以重复使用，递归时传 i 而不是 i+1。",
      "时间 O(n^(target/min))，空间 O(target/min)",
      "1. 递归传 i 不是 i+1 —— 因为同一个数可以重复选",
      "放在 pop() 之后就白白递归了一次，浪费时间"
    ],
    "pitfalls": [
      "3. path.copy() 别忘括号！path.copy 不加括号只是引用，不会真正复制"
    ],
    "recallBlanks": [
      {
        "prompt": "由于同一个数可以重复使用，＿＿＿时传 i 而不是 i+1。",
        "answer": "递归"
      }
    ],
    "solutionGuide": {
      "idea": "由于同一个数可以重复使用，递归时传 i 而不是 i+1。",
      "interviewSteps": [
        "先说明核心考点：剪枝。",
        "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",
        "关键词：回溯 / 剪枝 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "3. path.copy() 别忘括号！path.copy 不加括号只是引用，不会真正复制"
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%8B%AC%E5%8F%B7%E7%94%9F%E6%88%90",
    "acceptanceRate": 79,
    "solutionCount": 6715,
    "companyTagCount": 138,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "回溯",
      "有效性剪枝",
      "字符串",
      "动态规划",
      "括号序列"
    ],
    "sourcePath": "hot100/10_回溯/22.括号生成.py",
    "lastUpdated": "2026-09-01",
    "lastUpdatedAt": "2026-09-01T20:25:12.995Z",
    "interviewPattern": "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",
    "thoughts": [
      "时间 O(Catalan(n))，即卡特兰数，约等于 O(4^n / √n)，空间 O(n)（递归栈深度）",
      "2. 忘记 return：终止 append 后继续执行会重复递归下去，产生重复答案或越界",
      "4. DFS 签名缺少冒号/拼写：Python 函数定义末尾忘记加冒号，或变量名 open_count 拼成 opend_count",
      "5. path 列表回溯写法：若用列表回溯，递归后必须 path.pop() 撤销选择",
      "解法一：字符串参数隐式回溯（推荐，代码简洁）",
      "解法二：显式列表 path 显式回溯（标准回溯模板）"
    ],
    "pitfalls": [
      "2. 右括号数不能超过左括号数（close_count < open_count 时才能加 ')'）",
      "2. 忘记 return：终止 append 后继续执行会重复递归下去，产生重复答案或越界",
      "4. DFS 签名缺少冒号/拼写：Python 函数定义末尾忘记加冒号，或变量名 open_count 拼成 opend_count"
    ],
    "recallBlanks": [
      {
        "prompt": "2. 忘记 return：终止 append 后继续执行会重复＿＿＿下去，产生重复答案或越界",
        "answer": "递归"
      },
      {
        "prompt": "4. ＿＿＿ 签名缺少冒号/拼写：Python 函数定义末尾忘记加冒号，或变量名 open_count 拼成 opend_count",
        "answer": "DFS"
      },
      {
        "prompt": "5. path 列表＿＿＿写法：若用列表＿＿＿，＿＿＿后必须 path.pop() 撤销选择",
        "answer": "回溯"
      }
    ],
    "solutionGuide": {
      "idea": "时间 O(Catalan(n))，即卡特兰数，约等于 O(4^n / √n)，空间 O(n)（递归栈深度）",
      "interviewSteps": [
        "先说明核心考点：有效性剪枝。",
        "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",
        "关键词：回溯 / 有效性剪枝 / 字符串 / 动态规划。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "2. 右括号数不能超过左括号数（close_count < open_count 时才能加 ')'）"
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%8D%95%E8%AF%8D%E6%90%9C%E7%B4%A2",
    "acceptanceRate": 51.5,
    "solutionCount": 3814,
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
    "sourcePath": "hot100/10_回溯/79.单词搜索.py",
    "lastUpdated": "2026-03-22",
    "lastUpdatedAt": "2026-03-22T12:06:39.457Z",
    "interviewPattern": "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",
    "thoughts": [
      "需二刷：DFS + 回溯在二维网格上的应用",
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
    "recallBlanks": [
      {
        "prompt": "不要在 ＿＿＿ 内部检查 word[index+1]，会导致最后一个字母时越界",
        "answer": "dfs"
      },
      {
        "prompt": "2. visited 标记必须在 for 循环结束后撤销（＿＿＿），否则会影响其他路径",
        "answer": "回溯"
      }
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
    }
  },
  {
    "id": "131",
    "slug": "131-分割回文串",
    "title": "分割回文串",
    "titleEn": "Palindrome Partitioning",
    "category": "回溯",
    "difficulty": "中等",
    "topic": "回溯切分 + 回文判断剪枝",
    "completed": true,
    "leetcodeSlug": "palindrome-partitioning",
    "leetcodeUrl": "https://leetcode.cn/problems/palindrome-partitioning/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%88%86%E5%89%B2%E5%9B%9E%E6%96%87%E4%B8%B2",
    "acceptanceRate": 75,
    "solutionCount": 2891,
    "companyTagCount": 54,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "回溯",
      "回溯切分 + 回文判断剪枝",
      "字符串",
      "动态规划"
    ],
    "sourcePath": "hot100/10_回溯/131.分割回文串.py",
    "lastUpdated": "2026-08-24",
    "lastUpdatedAt": "2026-08-24T18:53:15.719Z",
    "interviewPattern": "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",
    "thoughts": [
      "DFS(start) 从 start 位置开始，枚举 end ∈ [start, n-1] 作为",
      "递归到 end+1；返回时 path.pop() 撤销；start  n 时整段切完，",
      "时间 O(n·2ⁿ)：2^(n-1) 种切法 × 每次回文判断最多 O(n)；",
      "空间 O(n²)：递归深度为 n（每层至少切一个字符）；",
      "3. 【犯过】下一层 DFS 写成 dfs(start+1)：start 本身未前进时",
      "核心剪枝：这段是回文才进下一层"
    ],
    "pitfalls": [
      "后者会让调用方拿到 None（189/31 同款缩进 + 遗漏返回值组合坑）。"
    ],
    "recallBlanks": [
      {
        "prompt": "＿＿＿(start) 从 start 位置开始，枚举 end ∈ [start, n-1] 作为",
        "answer": "DFS"
      },
      {
        "prompt": "＿＿＿到 end+1；返回时 path.pop() 撤销；start  n 时整段切完，",
        "answer": "递归"
      },
      {
        "prompt": "核心＿＿＿：这段是回文才进下一层",
        "answer": "剪枝"
      }
    ],
    "solutionGuide": {
      "idea": "DFS(start) 从 start 位置开始，枚举 end ∈ [start, n-1] 作为",
      "interviewSteps": [
        "先说明核心考点：回溯切分 + 回文判断剪枝。",
        "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",
        "关键词：回溯 / 回溯切分 + 回文判断剪枝 / 字符串 / 动态规划。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "后者会让调用方拿到 None（189/31 同款缩进 + 遗漏返回值组合坑）。"
    }
  },
  {
    "id": "51",
    "slug": "51-n-皇后",
    "title": "N 皇后",
    "titleEn": "N-Queens",
    "category": "回溯",
    "difficulty": "困难",
    "topic": "棋盘回溯 + 三集合冲突检测",
    "completed": true,
    "leetcodeSlug": "n-queens",
    "leetcodeUrl": "https://leetcode.cn/problems/n-queens/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=N%20%E7%9A%87%E5%90%8E",
    "acceptanceRate": 75.2,
    "solutionCount": 4476,
    "companyTagCount": 77,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "回溯",
      "棋盘回溯 + 三集合冲突检测",
      "数组",
      "X 算法"
    ],
    "sourcePath": "hot100/10_回溯/51.N 皇后.py",
    "lastUpdated": "2026-08-24",
    "lastUpdatedAt": "2026-08-24T19:40:27.431Z",
    "interviewPattern": "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",
    "thoughts": [
      "无冲突则放置并递归下一行，回溯时撤销放置和集合标记。",
      "时间 O(n!)：第 i 行最多 n-i 种选择，剪枝后仍为阶乘级",
      "空间 O(n)：递归栈深度 + 三个集合各存最多 n 个元素；棋盘占 O(n²) 辅助存储",
      "递归处理下一行"
    ],
    "pitfalls": [
      "3. 对角线标识混淆：主对角线↘（斜率1）是 row-col，副对角线↙（斜率-1）是 row+col，搞反会整题错。"
    ],
    "recallBlanks": [
      {
        "prompt": "无冲突则放置并＿＿＿下一行，＿＿＿时撤销放置和集合标记。",
        "answer": "递归"
      },
      {
        "prompt": "时间 O(n!)：第 i 行最多 n-i 种选择，＿＿＿后仍为阶乘级",
        "answer": "剪枝"
      }
    ],
    "solutionGuide": {
      "idea": "无冲突则放置并递归下一行，回溯时撤销放置和集合标记。",
      "interviewSteps": [
        "先说明核心考点：棋盘回溯 + 三集合冲突检测。",
        "定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",
        "关键词：回溯 / 棋盘回溯 + 三集合冲突检测 / 数组 / X 算法。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "3. 对角线标识混淆：主对角线↘（斜率1）是 row-col，副对角线↙（斜率-1）是 row+col，搞反会整题错。"
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%90%9C%E7%B4%A2%E6%97%8B%E8%BD%AC%E6%8E%92%E5%BA%8F%E6%95%B0%E7%BB%84",
    "acceptanceRate": 46.5,
    "solutionCount": 6653,
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
    "sourcePath": "hot100/11_二分查找/33.搜索旋转排序数组.py",
    "lastUpdated": "2026-03-26",
    "lastUpdatedAt": "2026-03-26T08:05:20.985Z",
    "interviewPattern": "先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。",
    "thoughts": [
      "时间 O(log n)，空间 O(1)"
    ],
    "pitfalls": [
      "3. 判断 target 范围时注意 < 和 < 的区别：",
      "- 面试时 mid 的计算推荐写 left + (right - left) // 2，防止整数溢出"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "时间 O(log n)，空间 O(1)",
      "interviewSteps": [
        "先说明核心考点：二分变形。",
        "先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。",
        "关键词：二分查找 / 二分变形 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "3. 判断 target 范围时注意 < 和 < 的区别："
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%9C%A8%E6%8E%92%E5%BA%8F%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9F%A5%E6%89%BE%E5%85%83%E7%B4%A0%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%92%8C%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%E4%BD%8D%E7%BD%AE",
    "acceptanceRate": 47,
    "solutionCount": 10640,
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
    "sourcePath": "hot100/11_二分查找/34.在排序数组中查找元素的第一个和最后一个位置.py",
    "lastUpdated": "2026-04-02",
    "lastUpdatedAt": "2026-04-02T09:55:07.616Z",
    "interviewPattern": "先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。",
    "thoughts": [
      "时间 O(log n)，空间 O(1)",
      "核心思想：把「找左边界」和「找右边界」统一为一个函数"
    ],
    "pitfalls": [
      "需二刷：二分查找找边界（左边界 + 右边界）",
      "- 找左边界：nums[mid] > target 时收缩右边界（right  mid），让搜索往左逼近",
      "- 找右边界：nums[mid] < target 时收缩左边界（left  mid + 1），让搜索往右逼近",
      "2. 找右边界时方向容易搞反——nums[mid] < target 应该让 left 右移而非 right 左移",
      "3. 找右边界用 right  mid（不要 mid-1），配合 while left ! right 使用，",
      "否则 left 可能跳过 right 导致死循环",
      "需要在左边界二分后验证 nums[left]  target",
      "5. 右边界的结果是 right - 1（因为 left  mid + 1 会多走一步）"
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：＿＿＿找边界（左边界 + 右边界）",
        "answer": "二分查找"
      }
    ],
    "solutionGuide": {
      "idea": "时间 O(log n)，空间 O(1)",
      "interviewSteps": [
        "先说明核心考点：二分边界。",
        "先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。",
        "关键词：二分查找 / 二分边界 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "需二刷：二分查找找边界（左边界 + 右边界）"
    }
  },
  {
    "id": "35",
    "slug": "35-搜索插入位置",
    "title": "搜索插入位置",
    "titleEn": "Search Insert Position",
    "category": "二分查找",
    "difficulty": "简单",
    "topic": "标准二分",
    "completed": true,
    "leetcodeSlug": "search-insert-position",
    "leetcodeUrl": "https://leetcode.cn/problems/search-insert-position/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%90%9C%E7%B4%A2%E6%8F%92%E5%85%A5%E4%BD%8D%E7%BD%AE",
    "acceptanceRate": 49.8,
    "solutionCount": 10567,
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
    "sourcePath": "hot100/11_二分查找/35.搜索插入位置.py",
    "lastUpdated": "2026-08-27",
    "lastUpdatedAt": "2026-08-27T19:47:41.192Z",
    "interviewPattern": "先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。",
    "thoughts": [
      "时间 O(log n)，空间 O(1)"
    ],
    "pitfalls": [
      "需二刷：二分查找标准模板，用来找边界感",
      "2. 死循环坑：当 nums[mid] < target 时，必须 left  mid + 1。写成 left  mid 会在剩 2 个元素时死循环。",
      "3. 边界收缩方向反了：nums[mid] > target 意味着 target 在左半区，右边界应该收缩 (right  mid - 1)，别写成 mid + 1。"
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：＿＿＿标准模板，用来找边界感",
        "answer": "二分查找"
      }
    ],
    "solutionGuide": {
      "idea": "时间 O(log n)，空间 O(1)",
      "interviewSteps": [
        "先说明核心考点：标准二分。",
        "先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。",
        "关键词：二分查找 / 标准二分 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "需二刷：二分查找标准模板，用来找边界感"
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
    "completed": true,
    "leetcodeSlug": "search-a-2d-matrix",
    "leetcodeUrl": "https://leetcode.cn/problems/search-a-2d-matrix/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%90%9C%E7%B4%A2%E4%BA%8C%E7%BB%B4%E7%9F%A9%E9%98%B5",
    "acceptanceRate": 52.6,
    "solutionCount": 4446,
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
    "sourcePath": "hot100/11_二分查找/74.搜索二维矩阵.py",
    "lastUpdated": "2026-08-27",
    "lastUpdatedAt": "2026-08-27T21:22:04.828Z",
    "interviewPattern": "先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。",
    "thoughts": [
      "核心在于坐标转换：一维索引 mid 对应的二维坐标为 row  mid // n, col  mid % n。",
      "时间 O(log(m*n))，空间 O(1)"
    ],
    "pitfalls": [
      "2. 如果矩阵为空（比如 matrix[] 或 matrix[[]]），要特别小心越界，好在力扣这题给了约束 m,n > 1。"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "核心在于坐标转换：一维索引 mid 对应的二维坐标为 row  mid // n, col  mid % n。",
      "interviewSteps": [
        "先说明核心考点：二分 / Z 字形。",
        "先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。",
        "关键词：二分查找 / 二分 / Z 字形 / 数组 / 矩阵。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "2. 如果矩阵为空（比如 matrix[] 或 matrix[[]]），要特别小心越界，好在力扣这题给了约束 m,n > 1。"
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
    "completed": true,
    "leetcodeSlug": "find-minimum-in-rotated-sorted-array",
    "leetcodeUrl": "https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%AF%BB%E6%89%BE%E6%97%8B%E8%BD%AC%E6%8E%92%E5%BA%8F%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E6%9C%80%E5%B0%8F%E5%80%BC",
    "acceptanceRate": 59.4,
    "solutionCount": 3924,
    "companyTagCount": 78,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二分查找",
      "二分变形",
      "数组"
    ],
    "sourcePath": "hot100/11_二分查找/153.寻找旋转排序数组中的最小值.py",
    "lastUpdated": "2026-08-27",
    "lastUpdatedAt": "2026-08-27T21:51:36.619Z",
    "interviewPattern": "先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。",
    "thoughts": [
      "时间 O(log n)，空间 O(1)"
    ],
    "pitfalls": [
      "需二刷：二分查找寻找旋转边界",
      "3. 收缩右边界时是 right  mid 而不是 mid - 1，因为 nums[mid] 完全有可能就是那个最小值，不能跨过它。"
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：＿＿＿寻找旋转边界",
        "answer": "二分查找"
      }
    ],
    "solutionGuide": {
      "idea": "时间 O(log n)，空间 O(1)",
      "interviewSteps": [
        "先说明核心考点：二分变形。",
        "先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。",
        "关键词：二分查找 / 二分变形 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "需二刷：二分查找寻找旋转边界"
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
    "completed": true,
    "leetcodeSlug": "median-of-two-sorted-arrays",
    "leetcodeUrl": "https://leetcode.cn/problems/median-of-two-sorted-arrays/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%AF%BB%E6%89%BE%E4%B8%A4%E4%B8%AA%E6%AD%A3%E5%BA%8F%E6%95%B0%E7%BB%84%E7%9A%84%E4%B8%AD%E4%BD%8D%E6%95%B0",
    "acceptanceRate": 44.9,
    "solutionCount": 9595,
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
    "sourcePath": "hot100/11_二分查找/4.寻找两个正序数组的中位数.py",
    "lastUpdated": "2026-08-27",
    "lastUpdatedAt": "2026-08-27T22:39:54.041Z",
    "interviewPattern": "先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。",
    "thoughts": [
      "时间 O(log(min(m,n)))，空间 O(1)"
    ],
    "pitfalls": [
      "1. 必须对较短的数组进行二分（强制交换），否则不仅慢，算出来的 j 还会越界出现负数。",
      "2. 边界处理：切口在两端时，左边无元素用 -inf，右边无元素用 inf 占位。"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "时间 O(log(min(m,n)))，空间 O(1)",
      "interviewSteps": [
        "先说明核心考点：划分数组。",
        "先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。",
        "关键词：二分查找 / 划分数组 / 数组 / 分治。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 必须对较短的数组进行二分（强制交换），否则不仅慢，算出来的 j 还会越界出现负数。"
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%9C%89%E6%95%88%E7%9A%84%E6%8B%AC%E5%8F%B7",
    "acceptanceRate": 45.8,
    "solutionCount": 13296,
    "companyTagCount": 255,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "栈",
      "栈匹配",
      "字符串",
      "括号序列"
    ],
    "sourcePath": "hot100/12_栈/20.有效的括号.py",
    "lastUpdated": "2026-03-19",
    "lastUpdatedAt": "2026-03-19T15:49:01.615Z",
    "interviewPattern": "遇到最近未匹配、嵌套结构、下一个更大/更小值时优先想栈；单调栈要说明栈内维护什么顺序。",
    "thoughts": [
      "时间 O(n)，空间 O(n)",
      "3. pop 之前必须先检查栈是否为空，否则空栈 pop 报 IndexError"
    ],
    "pitfalls": [
      "3. pop 之前必须先检查栈是否为空，否则空栈 pop 报 IndexError"
    ],
    "recallBlanks": [
      {
        "prompt": "3. pop 之前必须先检查＿＿＿是否为空，否则空＿＿＿ pop 报 IndexError",
        "answer": "栈"
      }
    ],
    "solutionGuide": {
      "idea": "时间 O(n)，空间 O(n)",
      "interviewSteps": [
        "先说明核心考点：栈匹配。",
        "遇到最近未匹配、嵌套结构、下一个更大/更小值时优先想栈；单调栈要说明栈内维护什么顺序。",
        "关键词：栈 / 栈匹配 / 字符串 / 括号序列。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "3. pop 之前必须先检查栈是否为空，否则空栈 pop 报 IndexError"
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%9C%80%E5%B0%8F%E6%A0%88",
    "acceptanceRate": 62.9,
    "solutionCount": 3709,
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
    "sourcePath": "hot100/12_栈/155.最小栈.py",
    "lastUpdated": "2026-03-20",
    "lastUpdatedAt": "2026-03-20T12:42:39.552Z",
    "interviewPattern": "遇到最近未匹配、嵌套结构、下一个更大/更小值时优先想栈；单调栈要说明栈内维护什么顺序。",
    "thoughts": [
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
    "recallBlanks": [
      {
        "prompt": "两个＿＿＿同进同退，minval ＿＿＿顶永远是当前最小值",
        "answer": "栈"
      }
    ],
    "solutionGuide": {
      "idea": "两个栈同进同退，minval 栈顶永远是当前最小值",
      "interviewSteps": [
        "先说明核心考点：辅助栈设计。",
        "遇到最近未匹配、嵌套结构、下一个更大/更小值时优先想栈；单调栈要说明栈内维护什么顺序。",
        "关键词：栈 / 辅助栈设计 / 设计。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. __init__ 中变量要用 self.，否则只是局部变量，其他方法访问不到"
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%A7%A3%E7%A0%81",
    "acceptanceRate": 61.9,
    "solutionCount": 3705,
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
    "sourcePath": "hot100/12_栈/394.字符串解码.py",
    "lastUpdated": "2026-03-20",
    "lastUpdatedAt": "2026-03-20T14:38:03.235Z",
    "interviewPattern": "遇到最近未匹配、嵌套结构、下一个更大/更小值时优先想栈；单调栈要说明栈内维护什么顺序。",
    "thoughts": [
      "需二刷：双栈解码嵌套结构",
      "时间 O(n)，n 为解码后字符串长度（每个字符最多入栈出栈一次）",
      "空间 O(n)，栈的深度取决于嵌套层数",
      "💡 面试推荐：双栈法（本解法）",
      "- 思路直观，容易讲清楚",
      "- 另一种方法是递归，但栈的写法更不容易出错，推荐优先用栈",
      "3. ] 弹栈时的拼接顺序：letterstack.pop() + numstack.pop() * cur_str"
    ],
    "pitfalls": [
      "1. 数字可能是多位的（如 \"12[a]\"），不能直接 cur_num  int(char)，",
      "2. 遇到字母时要用 cur_str + char（拼接），不能用  （会覆盖之前的字母）",
      "是「之前的字符串 + 重复次数 × 当前字符串」，顺序不能反"
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：双＿＿＿解码嵌套结构",
        "answer": "栈"
      },
      {
        "prompt": "- 另一种方法是＿＿＿，但＿＿＿的写法更不容易出错，推荐优先用＿＿＿",
        "answer": "递归"
      }
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
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%AF%8F%E6%97%A5%E6%B8%A9%E5%BA%A6",
    "acceptanceRate": 69.7,
    "solutionCount": 4090,
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
    "sourcePath": "hot100/12_栈/739.每日温度.py",
    "lastUpdated": "2026-03-20",
    "lastUpdatedAt": "2026-03-20T13:28:34.496Z",
    "interviewPattern": "遇到最近未匹配、嵌套结构、下一个更大/更小值时优先想栈；单调栈要说明栈内维护什么顺序。",
    "thoughts": [
      "需二刷：单调栈模板题",
      "遍历温度数组，当前温度 > 栈顶温度时，说明栈顶那天等到了更高温度，",
      "弹出栈顶并计算等待天数（当前下标 - 栈顶下标）。",
      "时间 O(n)，空间 O(n)",
      "2. 比较温度时是 temperatures[stack[-1]]（栈顶下标对应的温度），",
      "3. 栈里存的是下标而非温度值，一个下标三个用途：取值、算距离、定位 result",
      "当前温度比栈顶大 → 栈顶那天等到了更高温度"
    ],
    "pitfalls": [
      "1. result 要用 [0]*n 初始化，不能用 []，因为后面要通过下标赋值"
    ],
    "recallBlanks": [
      {
        "prompt": "遍历温度数组，当前温度 > ＿＿＿顶温度时，说明＿＿＿顶那天等到了更高温度，",
        "answer": "栈"
      }
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
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%9F%B1%E7%8A%B6%E5%9B%BE%E4%B8%AD%E6%9C%80%E5%A4%A7%E7%9A%84%E7%9F%A9%E5%BD%A2",
    "acceptanceRate": 49.9,
    "solutionCount": 2944,
    "companyTagCount": 83,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "栈",
      "单调栈",
      "数组",
      "区间最值查询"
    ],
    "sourcePath": "hot100/12_栈/84.柱状图中最大的矩形.py",
    "lastUpdated": "2026-06-18",
    "lastUpdatedAt": "2026-06-18T15:20:29.616Z",
    "interviewPattern": "遇到最近未匹配、嵌套结构、下一个更大/更小值时优先想栈；单调栈要说明栈内维护什么顺序。",
    "thoughts": [
      "需二刷：单调栈求最大矩形（递增栈 + 哨兵技巧）",
      "被弹柱子的高度能形成的矩形，左边界是左边第一个更矮的（新栈顶），",
      "末尾加高度 0 的哨兵强制清空栈，省去收尾循环。",
      "时间 O(n)，空间 O(n)",
      "1. left  stack[-1] if stack else -1 ——栈空时左边界为 -1，宽度才能算对",
      "4. 弹栈时算的面积是 heights[idx] × width，不是 heights[i]",
      "新柱子比栈顶矮 → 栈顶柱子的右边界确定，弹栈算面积"
    ],
    "pitfalls": [
      "被弹柱子的高度能形成的矩形，左边界是左边第一个更矮的（新栈顶），",
      "右边界是当前柱子 i。宽度  right - left - 1。",
      "1. left  stack[-1] if stack else -1 ——栈空时左边界为 -1，宽度才能算对",
      "新柱子比栈顶矮 → 栈顶柱子的右边界确定，弹栈算面积"
    ],
    "recallBlanks": [
      {
        "prompt": "被弹柱子的高度能形成的矩形，左边界是左边第一个更矮的（新＿＿＿顶），",
        "answer": "栈"
      },
      {
        "prompt": "需二刷：＿＿＿求最大矩形（递增＿＿＿ + 哨兵技巧）",
        "answer": "单调栈"
      }
    ],
    "solutionGuide": {
      "idea": "需二刷：单调栈求最大矩形（递增栈 + 哨兵技巧）",
      "interviewSteps": [
        "先说明核心考点：单调栈。",
        "遇到最近未匹配、嵌套结构、下一个更大/更小值时优先想栈；单调栈要说明栈内维护什么顺序。",
        "关键词：栈 / 单调栈 / 数组 / 区间最值查询。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "被弹柱子的高度能形成的矩形，左边界是左边第一个更矮的（新栈顶），"
    }
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
    }
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
    }
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
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BA",
    "acceptanceRate": 60.3,
    "solutionCount": 9392,
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
    "sourcePath": "hot100/14_贪心/121.买卖股票的最佳时机.py",
    "lastUpdated": "2026-03-20",
    "lastUpdatedAt": "2026-03-20T07:47:19.105Z",
    "interviewPattern": "写出局部选择为什么不会破坏全局最优，面试中要用覆盖范围或交换论证解释。",
    "thoughts": [
      "时间 O(n)，空间 O(1)"
    ],
    "pitfalls": [
      "3. return 不要写在 for 循环里面，否则第一轮就返回了"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "时间 O(n)，空间 O(1)",
      "interviewSteps": [
        "先说明核心考点：一次遍历。",
        "写出局部选择为什么不会破坏全局最优，面试中要用覆盖范围或交换论证解释。",
        "关键词：贪心 / 一次遍历 / 数组 / 动态规划。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "3. return 不要写在 for 循环里面，否则第一轮就返回了"
    }
  },
  {
    "id": "55",
    "slug": "55-跳跃游戏",
    "title": "跳跃游戏",
    "titleEn": "Jump Game",
    "category": "贪心",
    "difficulty": "中等",
    "topic": "贪心覆盖",
    "completed": true,
    "leetcodeSlug": "jump-game",
    "leetcodeUrl": "https://leetcode.cn/problems/jump-game/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E8%B7%B3%E8%B7%83%E6%B8%B8%E6%88%8F",
    "acceptanceRate": 45.3,
    "solutionCount": 8263,
    "companyTagCount": 113,
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
    "sourcePath": "hot100/14_贪心/55.跳跃游戏.py",
    "lastUpdated": "2026-08-27",
    "lastUpdatedAt": "2026-08-27T14:11:53.102Z",
    "interviewPattern": "写出局部选择为什么不会破坏全局最优，面试中要用覆盖范围或交换论证解释。",
    "thoughts": [
      "时间 O(N)，空间 O(1)"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "时间 O(N)，空间 O(1)",
      "interviewSteps": [
        "先说明核心考点：贪心覆盖。",
        "写出局部选择为什么不会破坏全局最优，面试中要用覆盖范围或交换论证解释。",
        "关键词：贪心 / 贪心覆盖 / 数组 / 动态规划。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
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
    "completed": true,
    "leetcodeSlug": "jump-game-ii",
    "leetcodeUrl": "https://leetcode.cn/problems/jump-game-ii/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E8%B7%B3%E8%B7%83%E6%B8%B8%E6%88%8F%20II",
    "acceptanceRate": 46,
    "solutionCount": 5882,
    "companyTagCount": 96,
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
    "sourcePath": "hot100/14_贪心/45.跳跃游戏 II.py",
    "lastUpdated": "2026-08-27",
    "lastUpdatedAt": "2026-08-27T14:20:15.126Z",
    "interviewPattern": "写出局部选择为什么不会破坏全局最优，面试中要用覆盖范围或交换论证解释。",
    "thoughts": [
      "需二刷：贪心 BFS 覆盖范围模型",
      "时间 O(N)，空间 O(1)"
    ],
    "pitfalls": [
      "1. 遍历的边界是 len(nums) - 1，如果遍历到最后一个元素，会多跳一次（因为只要到了 n-1 前面就一定能覆盖，如果在 n-1 处正好触发 i  end，就会错误地多加一次步数）。"
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：＿＿＿ ＿＿＿ 覆盖范围模型",
        "answer": "贪心"
      }
    ],
    "solutionGuide": {
      "idea": "需二刷：贪心 BFS 覆盖范围模型",
      "interviewSteps": [
        "先说明核心考点：贪心 BFS。",
        "写出局部选择为什么不会破坏全局最优，面试中要用覆盖范围或交换论证解释。",
        "关键词：贪心 / 贪心 BFS / 数组 / 动态规划。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 遍历的边界是 len(nums) - 1，如果遍历到最后一个元素，会多跳一次（因为只要到了 n-1 前面就一定能覆盖，如果在 n-1 处正好触发 i  end，就会错误地多加一次步数）。"
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
    "completed": true,
    "leetcodeSlug": "partition-labels",
    "leetcodeUrl": "https://leetcode.cn/problems/partition-labels/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%88%92%E5%88%86%E5%AD%97%E6%AF%8D%E5%8C%BA%E9%97%B4",
    "acceptanceRate": 79,
    "solutionCount": 2671,
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
    "sourcePath": "hot100/14_贪心/763.划分字母区间.py",
    "lastUpdated": "2026-08-27",
    "lastUpdatedAt": "2026-08-27T14:38:52.990Z",
    "interviewPattern": "写出局部选择为什么不会破坏全局最优，面试中要用覆盖范围或交换论证解释。",
    "thoughts": [
      "时间 O(N)，空间 O(Σ) (字符集大小，最多26)"
    ],
    "pitfalls": [
      "第二遍遍历：用 end 维护当前片段的必达边界，当遍历指针 i  end 时，说明当前片段已经完全囊括了内部所有字母，可以切分。"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "时间 O(N)，空间 O(Σ) (字符集大小，最多26)",
      "interviewSteps": [
        "先说明核心考点：区间合并。",
        "写出局部选择为什么不会破坏全局最优，面试中要用覆盖范围或交换论证解释。",
        "关键词：贪心 / 区间合并 / 哈希表 / 双指针。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "第二遍遍历：用 end 维护当前片段的必达边界，当遍历指针 i  end 时，说明当前片段已经完全囊括了内部所有字母，可以切分。"
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E7%88%AC%E6%A5%BC%E6%A2%AF",
    "acceptanceRate": 55.8,
    "solutionCount": 9319,
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
    "sourcePath": "hot100/15_动态规划/70.爬楼梯.py",
    "lastUpdated": "2026-03-19",
    "lastUpdatedAt": "2026-03-19T06:26:51.523Z",
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
    "thoughts": [
      "需二刷：动态规划入门题，理解状态转移方程",
      "时间 O(n)，空间 O(n)",
      "方法二：滚动变量（空间优化）",
      "时间 O(n)，空间 O(1)"
    ],
    "pitfalls": [
      "1. dp[2] 赋值不能放在 n1 判断之前，否则 n1 时 dp 数组只有 2 个元素，dp[2] 越界",
      "2. return 要放在循环外面，不能在循环内 if in 时 return（此时 dp[n] 还没算）",
      "3.  是比较运算符（返回 True/False）， 才是赋值，不要混淆"
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：＿＿＿入门题，理解状态转移方程",
        "answer": "动态规划"
      }
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
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%9D%A8%E8%BE%89%E4%B8%89%E8%A7%92",
    "acceptanceRate": 77.9,
    "solutionCount": 4498,
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
    "sourcePath": "hot100/15_动态规划/118.杨辉三角.py",
    "lastUpdated": "2026-03-19",
    "lastUpdatedAt": "2026-03-19T13:31:58.214Z",
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
    "thoughts": [
      "时间 O(n²)，空间 O(n²) —— 总共生成 n(n+1)/2 个元素"
    ],
    "pitfalls": [
      "2. 外层循环 range(1, numRows) 从1开始，不是从2开始，否则 numRows2 时循环不执行",
      "4. 注意 Python 负数索引：j0 时 result[i-1][-1] 会取最后一个元素而不是报错，容易产生隐蔽bug"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "时间 O(n²)，空间 O(n²) —— 总共生成 n(n+1)/2 个元素",
      "interviewSteps": [
        "先说明核心考点：递推。",
        "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
        "关键词：动态规划 / 递推 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "2. 外层循环 range(1, numRows) 从1开始，不是从2开始，否则 numRows2 时循环不执行"
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%89%93%E5%AE%B6%E5%8A%AB%E8%88%8D",
    "acceptanceRate": 56.6,
    "solutionCount": 7115,
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
    "sourcePath": "hot100/15_动态规划/198.打家劫舍.py",
    "lastUpdated": "2026-03-26",
    "lastUpdatedAt": "2026-03-26T06:30:46.594Z",
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
    "thoughts": [
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
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "时间 O(n)，空间 O(n)",
      "interviewSteps": [
        "先说明核心考点：状态转移。",
        "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
        "关键词：动态规划 / 状态转移 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 边界处理：nums 只有 1 个元素时，dp[1] 会越界，需提前返回"
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%9C%80%E5%A4%A7%E5%AD%90%E6%95%B0%E7%BB%84%E5%92%8C",
    "acceptanceRate": 56.9,
    "solutionCount": 10155,
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
    "sourcePath": "hot100/05_普通数组/53.最大子数组和.py",
    "lastUpdated": "2026-03-20",
    "lastUpdatedAt": "2026-03-20T09:22:34.855Z",
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
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
        "先说明核心考点：Kadane。",
        "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
        "关键词：动态规划 / Kadane / 数组 / 分治。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. max_sum 不能初始化为 0，否则全负数数组（如 [-3,-2,-1]）会返回 0"
    }
  },
  {
    "id": "300",
    "slug": "300-最长递增子序列",
    "title": "最长递增子序列",
    "titleEn": "Longest Increasing Subsequence",
    "category": "动态规划",
    "difficulty": "中等",
    "topic": "LIS (O(n²) DP)",
    "completed": true,
    "leetcodeSlug": "longest-increasing-subsequence",
    "leetcodeUrl": "https://leetcode.cn/problems/longest-increasing-subsequence/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%9C%80%E9%95%BF%E9%80%92%E5%A2%9E%E5%AD%90%E5%BA%8F%E5%88%97",
    "acceptanceRate": 59,
    "solutionCount": 5908,
    "companyTagCount": 118,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "动态规划",
      "LIS (O(n²) DP)",
      "数组",
      "二分查找",
      "最长上升子序列"
    ],
    "sourcePath": "hot100/15_动态规划/300.最长递增子序列.py",
    "lastUpdated": "2026-08-31",
    "lastUpdatedAt": "2026-08-31T13:17:20.422Z",
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
    "thoughts": [
      "需二刷：动态规划经典基础题（子序列类 DP 状态定义范式：dp[i] 以 nums[i] 结尾）",
      "1. 状态定义：dp[i] 表示以 nums[i] 结尾的最长严格递增子序列长度。",
      "2. 初始状态：每个元素单独构成长度为 1 的子序列，初始化 dp  [1] * n。",
      "3. 状态转移：双层循环，外层固定结尾 i，内层遍历历史起点 j (0 < j < i)。",
      "时间 O(n²)，空间 O(n)",
      "1. 【历史状态污染】：实战曾写 dp[j] + 1，这是严重错误。dp[j] 记录的是历史定值，随意修改会破坏后续所有参考 j 的计算；只需用 dp[j] + 1 竞争更新 dp[i]。",
      "动态规划法"
    ],
    "pitfalls": [
      "2. 【严格递增要求】：条件必须是 nums[i] > nums[j]，不能带等号（若允许非降序列才带等号）。",
      "3. 【返回值取错】：不能直接返回 dp[-1]，因为全局最长递增子序列的结尾元素可能出现在数组中间任意位置，必须返回 max(dp)。"
    ],
    "recallBlanks": [
      {
        "prompt": "3. 【返回值取错】：不能直接返回 dp[-1]，因为全局＿＿＿的结尾元素可能出现在数组中间任意位置，必须返回 max(dp)。",
        "answer": "最长递增子序列"
      },
      {
        "prompt": "需二刷：＿＿＿经典基础题（子序列类 DP 状态定义范式：dp[i] 以 nums[i] 结尾）",
        "answer": "动态规划"
      }
    ],
    "solutionGuide": {
      "idea": "需二刷：动态规划经典基础题（子序列类 DP 状态定义范式：dp[i] 以 nums[i] 结尾）",
      "interviewSteps": [
        "先说明核心考点：LIS (O(n²) DP)。",
        "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
        "关键词：动态规划 / LIS (O(n²) DP) / 数组 / 二分查找。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "2. 【严格递增要求】：条件必须是 nums[i] > nums[j]，不能带等号（若允许非降序列才带等号）。"
    }
  },
  {
    "id": "322",
    "slug": "322-零钱兑换",
    "title": "零钱兑换",
    "titleEn": "Coin Change",
    "category": "动态规划",
    "difficulty": "中等",
    "topic": "完全背包 DP",
    "completed": true,
    "leetcodeSlug": "coin-change",
    "leetcodeUrl": "https://leetcode.cn/problems/coin-change/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E9%9B%B6%E9%92%B1%E5%85%91%E6%8D%A2",
    "acceptanceRate": 53.4,
    "solutionCount": 5025,
    "companyTagCount": 129,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "动态规划",
      "完全背包 DP",
      "广度优先搜索",
      "数组",
      "背包问题",
      "完全背包"
    ],
    "sourcePath": "hot100/15_动态规划/322.零钱兑换.py",
    "lastUpdated": "2026-08-31",
    "lastUpdatedAt": "2026-08-31T13:05:45.401Z",
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
    "thoughts": [
      "需二刷：完全背包最值问题（自底向上 DP 状态转移）",
      "1. 状态定义：dp[i] 表示凑齐总金额 i 所需的最少硬币枚数。",
      "2. 初始状态：",
      "3. 状态转移：",
      "时间 O(amount * len(coins))，空间 O(amount)",
      "1. 【数组长度越界】：金额范围是 0 ~ amount，共 amount + 1 种状态，必须初始化 dp  [float('inf')] * (amount + 1)，若只开 amount 大小会导致 dp[amount] 越界报 IndexError。"
    ],
    "pitfalls": [
      "4. 最终结果：若 dp[amount] 仍为 float('inf') 说明无法凑出，返回 -1；否则返回 dp[amount]。",
      "1. 【数组长度越界】：金额范围是 0 ~ amount，共 amount + 1 种状态，必须初始化 dp  [float('inf')] * (amount + 1)，若只开 amount 大小会导致 dp[amount] 越界报 IndexError。",
      "3. 【负索引静默取值】：必须加入 if i > coin: 守卫，否则 i - coin < 0 会被 Python 解释为负下标读取数组尾部，产生难以察觉的隐蔽 bug。"
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：＿＿＿最值问题（自底向上 DP 状态转移）",
        "answer": "完全背包"
      }
    ],
    "solutionGuide": {
      "idea": "需二刷：完全背包最值问题（自底向上 DP 状态转移）",
      "interviewSteps": [
        "先说明核心考点：完全背包 DP。",
        "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
        "关键词：动态规划 / 完全背包 DP / 广度优先搜索 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "4. 最终结果：若 dp[amount] 仍为 float('inf') 说明无法凑出，返回 -1；否则返回 dp[amount]。"
    }
  },
  {
    "id": "139",
    "slug": "139-单词拆分",
    "title": "单词拆分",
    "titleEn": "Word Break",
    "category": "动态规划",
    "difficulty": "中等",
    "topic": "字符串背包 DP / 前缀分割",
    "completed": true,
    "leetcodeSlug": "word-break",
    "leetcodeUrl": "https://leetcode.cn/problems/word-break/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%8D%95%E8%AF%8D%E6%8B%86%E5%88%86",
    "acceptanceRate": 60.6,
    "solutionCount": 3999,
    "companyTagCount": 100,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "动态规划",
      "字符串背包 DP / 前缀分割",
      "字典树",
      "记忆化",
      "数组",
      "哈希表",
      "字符串",
      "Brute-Force Search"
    ],
    "sourcePath": "hot100/15_动态规划/139.单词拆分.py",
    "lastUpdated": "2026-08-31",
    "lastUpdatedAt": "2026-08-31T13:33:28.863Z",
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
    "thoughts": [
      "1. 将 wordDict 转为哈希集合 word_set，使单词查找降至 O(1)。",
      "3. 基础状态 dp[0]  True（空字符串默认合法，作为递推起点）。",
      "时间 O(n^2 * L)，其中 n 是字符串长度，L 是子串切片比较长度；空间 O(n + M)，M 为词典字符总和。",
      "3. 状态转移切分点：切分点为 j 时，前半段状态是 dp[j]，后半段匹配的是切片 s[j:i]，切勿误写为 s[0:j]。",
      "4. 初始化基准：dp 数组长度为 n + 1，dp[0] 必须置为 True，否则后续所有状态均无法被激活为 True。"
    ],
    "pitfalls": [
      "4. 初始化基准：dp 数组长度为 n + 1，dp[0] 必须置为 True，否则后续所有状态均无法被激活为 True。"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "1. 将 wordDict 转为哈希集合 word_set，使单词查找降至 O(1)。",
      "interviewSteps": [
        "先说明核心考点：字符串背包 DP / 前缀分割。",
        "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
        "关键词：动态规划 / 字符串背包 DP / 前缀分割 / 字典树 / 记忆化。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "4. 初始化基准：dp 数组长度为 n + 1，dp[0] 必须置为 True，否则后续所有状态均无法被激活为 True。"
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
    "completed": true,
    "leetcodeSlug": "partition-equal-subset-sum",
    "leetcodeUrl": "https://leetcode.cn/problems/partition-equal-subset-sum/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%88%86%E5%89%B2%E7%AD%89%E5%92%8C%E5%AD%90%E9%9B%86",
    "acceptanceRate": 54.3,
    "solutionCount": 3276,
    "companyTagCount": 60,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "动态规划",
      "0-1 背包",
      "数组",
      "背包问题"
    ],
    "sourcePath": "hot100/15_动态规划/416.分割等和子集.py",
    "lastUpdated": "2026-08-31",
    "lastUpdatedAt": "2026-08-31T14:03:56.969Z",
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
    "thoughts": [
      "需二刷：0-1 背包问题（子集和恰为 target  sum // 2），空间优化为一维数组时的倒序遍历",
      "4. 外层遍历物品 num，内层倒序遍历容量 j（从 target 递减至 num），状态转移 dp[j]  dp[j] or dp[j - num]。",
      "时间 O(n * target)，空间 O(target)，其中 target  sum(nums) // 2",
      "2. 初始状态：dp[0] 必须设为 True（和为 0 天然可达），作为所有有效转移的源头。"
    ],
    "pitfalls": [
      "3. 循环结构：外层遍历物品 num，内层遍历容量 j；不可漏掉外层或混淆顺序。"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "需二刷：0-1 背包问题（子集和恰为 target  sum // 2），空间优化为一维数组时的倒序遍历",
      "interviewSteps": [
        "先说明核心考点：0-1 背包。",
        "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
        "关键词：动态规划 / 0-1 背包 / 数组 / 背包问题。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "3. 循环结构：外层遍历物品 num，内层遍历容量 j；不可漏掉外层或混淆顺序。"
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
    "completed": true,
    "leetcodeSlug": "maximum-product-subarray",
    "leetcodeUrl": "https://leetcode.cn/problems/maximum-product-subarray/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E4%B9%98%E7%A7%AF%E6%9C%80%E5%A4%A7%E5%AD%90%E6%95%B0%E7%BB%84",
    "acceptanceRate": 44.7,
    "solutionCount": 3126,
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
    "sourcePath": "hot100/15_动态规划/152.乘积最大子数组.py",
    "lastUpdated": "2026-08-31",
    "lastUpdatedAt": "2026-08-31T14:47:21.861Z",
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
    "thoughts": [
      "需二刷：双状态动态规划（同时维护以当前元素结尾的最大乘积与最小乘积）",
      "2. 状态定义：",
      "3. 状态转移：当前位置的最值只能由三种情况产生（单独成段、接在前驱最大值后、接在前驱最小值后）：",
      "时间 O(n)，空间 O(n)（可通过滚动变量优化至 O(1)）",
      "1. 单状态陷阱：若只维护最大值，遇到当前为负数时无法通过负负得正翻转出全局最大值。",
      "4. 空间优化注意：若压缩为 O(1) 变量 cur_max / cur_min，更新时需用临时变量暂存旧的 cur_max，避免更新 min 时使用了新算出的 max。",
      "初始化双状态 DP 数组"
    ],
    "pitfalls": [
      "2. 变量覆盖 bug：初始化列表后，注意下标赋值 min_dp[0]  nums[0]，若误写为 min_dp  nums[0] 会将列表覆盖为 int 导致下标索引报错。",
      "4. 空间优化注意：若压缩为 O(1) 变量 cur_max / cur_min，更新时需用临时变量暂存旧的 cur_max，避免更新 min 时使用了新算出的 max。"
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：双状态＿＿＿（同时维护以当前元素结尾的最大乘积与最小乘积）",
        "answer": "动态规划"
      }
    ],
    "solutionGuide": {
      "idea": "需二刷：双状态动态规划（同时维护以当前元素结尾的最大乘积与最小乘积）",
      "interviewSteps": [
        "先说明核心考点：双状态 DP。",
        "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
        "关键词：动态规划 / 双状态 DP / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "2. 变量覆盖 bug：初始化列表后，注意下标赋值 min_dp[0]  nums[0]，若误写为 min_dp  nums[0] 会将列表覆盖为 int 导致下标索引报错。"
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
    "completed": true,
    "leetcodeSlug": "longest-palindromic-substring",
    "leetcodeUrl": "https://leetcode.cn/problems/longest-palindromic-substring/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%9C%80%E9%95%BF%E5%9B%9E%E6%96%87%E5%AD%90%E4%B8%B2",
    "acceptanceRate": 41.1,
    "solutionCount": 10543,
    "companyTagCount": 253,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "动态规划",
      "中心扩展 / DP",
      "双指针",
      "字符串",
      "Manacher 算法"
    ],
    "sourcePath": "hot100/15_动态规划/5.最长回文子串.py",
    "lastUpdated": "2026-08-31",
    "lastUpdatedAt": "2026-08-31T15:36:10.237Z",
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
    "thoughts": [
      "需二刷：双指针中心扩展法（奇数/偶数中心向两端扩散）",
      "时间复杂度：O(n²)，遍历 n 个中心，每个中心最多向两边扩散 O(n)",
      "空间复杂度：O(1)（若计切片字符串则为 O(n)）"
    ],
    "pitfalls": [
      "3. 每次扩散到边界或字符不相等时停止，截取合法回文串更新全局最长串 res。",
      "2. 【扩散边界与切片】：while 边界需为 0 < left and right < n；写 0 < left 会漏判下标 0，写 left < right 会阻断奇数中心扩散。退出 while 时两端各多走了一步，有效区间为 [left+1, right-1]，故切片必须是 s[left + 1 : right]。",
      "3. 【初始值与更新逻辑】：res 需初始化为 \"\" 而不是 None（否则 len(res) 报 TypeError）；仅在当前子串长度更长时更新 res，切忌在分支内 return 导致提前退出遍历。"
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：＿＿＿中心扩展法（奇数/偶数中心向两端扩散）",
        "answer": "双指针"
      }
    ],
    "solutionGuide": {
      "idea": "需二刷：双指针中心扩展法（奇数/偶数中心向两端扩散）",
      "interviewSteps": [
        "先说明核心考点：中心扩展 / DP。",
        "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
        "关键词：动态规划 / 中心扩展 / DP / 双指针 / 字符串。"
      ],
      "complexity": "时间复杂度：O(n²)，遍历 n 个中心，每个中心最多向两边扩散 O(n)",
      "keyMistake": "3. 每次扩散到边界或字符不相等时停止，截取合法回文串更新全局最长串 res。"
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
    "completed": true,
    "leetcodeSlug": "perfect-squares",
    "leetcodeUrl": "https://leetcode.cn/problems/perfect-squares/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%AE%8C%E5%85%A8%E5%B9%B3%E6%96%B9%E6%95%B0",
    "acceptanceRate": 68.3,
    "solutionCount": 3139,
    "companyTagCount": 69,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "动态规划",
      "完全背包",
      "广度优先搜索",
      "数学",
      "背包问题"
    ],
    "sourcePath": "hot100/15_动态规划/279.完全平方数.py",
    "lastUpdated": "2026-08-31",
    "lastUpdatedAt": "2026-08-31T16:08:32.296Z",
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
    "thoughts": [
      "2. 状态定义：dp[i] 表示凑齐正整数 i 所需的最少完全平方数数量。",
      "3. 基础状态：dp[0]  0，其余 dp[1..n] 初始化为 float('inf')。",
      "4. 状态转移：dp[i]  min(dp[i], dp[i - j * j] + 1) （其中 j * j < i）。",
      "时间复杂度：O(n * √n)，外层循环 n 次，内层枚举最多 √i 次，总步数约为 ∫√x dx ≈ (2/3) n^(1.5)",
      "空间复杂度：O(n)，一维 DP 数组长度为 n + 1"
    ],
    "pitfalls": [
      "1. 【DP 数组大小】：dp 数组需开 (n + 1) 大小，若只写 [float('inf')] 会因越界抛 IndexError。"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "2. 状态定义：dp[i] 表示凑齐正整数 i 所需的最少完全平方数数量。",
      "interviewSteps": [
        "先说明核心考点：完全背包。",
        "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
        "关键词：动态规划 / 完全背包 / 广度优先搜索 / 数学。"
      ],
      "complexity": "时间复杂度：O(n * √n)，外层循环 n 次，内层枚举最多 √i 次，总步数约为 ∫√x dx ≈ (2/3) n^(1.5)",
      "keyMistake": "1. 【DP 数组大小】：dp 数组需开 (n + 1) 大小，若只写 [float('inf')] 会因越界抛 IndexError。"
    }
  },
  {
    "id": "32",
    "slug": "32-最长有效括号",
    "title": "最长有效括号",
    "titleEn": "Longest Valid Parentheses",
    "category": "动态规划",
    "difficulty": "困难",
    "topic": "栈 / DP (跨越匹配)",
    "completed": true,
    "leetcodeSlug": "longest-valid-parentheses",
    "leetcodeUrl": "https://leetcode.cn/problems/longest-valid-parentheses/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%9C%80%E9%95%BF%E6%9C%89%E6%95%88%E6%8B%AC%E5%8F%B7",
    "acceptanceRate": 42.6,
    "solutionCount": 3350,
    "companyTagCount": 103,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "动态规划",
      "栈 / DP (跨越匹配)",
      "栈",
      "字符串",
      "括号序列"
    ],
    "sourcePath": "hot100/15_动态规划/32.最长有效括号.py",
    "lastUpdated": "2026-09-01",
    "lastUpdatedAt": "2026-09-01T20:09:55.625Z",
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
    "thoughts": [
      "需二刷：一维 DP 跨越匹配 / 栈存下标做参照物",
      "时间 O(n)，空间 O(n)"
    ],
    "pitfalls": [
      "2. 三段式拼接：情况 2 跨越匹配成功后，必须把 pre_idx 左侧相邻的历史有效长度 dp[pre_idx-1] 接上，不能只算 dp[i-1] + 2。"
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：一维 DP 跨越匹配 / ＿＿＿存下标做参照物",
        "answer": "栈"
      }
    ],
    "solutionGuide": {
      "idea": "需二刷：一维 DP 跨越匹配 / 栈存下标做参照物",
      "interviewSteps": [
        "先说明核心考点：栈 / DP (跨越匹配)。",
        "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
        "关键词：动态规划 / 栈 / DP (跨越匹配) / 栈 / 字符串。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "2. 三段式拼接：情况 2 跨越匹配成功后，必须把 pre_idx 左侧相邻的历史有效长度 dp[pre_idx-1] 接上，不能只算 dp[i-1] + 2。"
    }
  },
  {
    "id": "1143",
    "slug": "1143-最长公共子序列",
    "title": "最长公共子序列",
    "titleEn": "Longest Common Subsequence",
    "category": "动态规划",
    "difficulty": "中等",
    "topic": "二维 DP (LCS)",
    "completed": true,
    "leetcodeSlug": "longest-common-subsequence",
    "leetcodeUrl": "https://leetcode.cn/problems/longest-common-subsequence/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%9C%80%E9%95%BF%E5%85%AC%E5%85%B1%E5%AD%90%E5%BA%8F%E5%88%97",
    "acceptanceRate": 67.8,
    "solutionCount": 2779,
    "companyTagCount": 68,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "动态规划",
      "二维 DP (LCS)",
      "字符串",
      "最长公共子序列"
    ],
    "sourcePath": "hot100/15_动态规划/1143.最长公共子序列.py",
    "lastUpdated": "2026-09-01",
    "lastUpdatedAt": "2026-09-01T19:18:40.633Z",
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
    "thoughts": [
      "需二刷：双字符串二维动态规划模型（LCS 标准范式）",
      "3. 状态转移：",
      "时间复杂度：O(m * n)，双重循环遍历整个网格",
      "空间复杂度：O(m * n)，二维 DP 数组（可空间压缩至 O(min(m, n))）",
      "2. 状态转移来源：相等时是取左上角状态 + 1（即 dp[i-1][j-1] + 1），而非原地 + 1；不等时是上方与左方取 max。"
    ],
    "pitfalls": [
      "2. 开 (m+1) x (n+1) 维度，第 0 行/列代表空串情况，天然为 0 避免边界越界。",
      "- 否则：当前字符不匹配，取放弃其中一个字符的最优解 dp[i][j]  max(dp[i-1][j], dp[i][j-1])"
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：双字符串二维＿＿＿模型（LCS 标准范式）",
        "answer": "动态规划"
      }
    ],
    "solutionGuide": {
      "idea": "需二刷：双字符串二维动态规划模型（LCS 标准范式）",
      "interviewSteps": [
        "先说明核心考点：二维 DP (LCS)。",
        "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
        "关键词：动态规划 / 二维 DP (LCS) / 字符串 / 最长公共子序列。"
      ],
      "complexity": "时间复杂度：O(m * n)，双重循环遍历整个网格",
      "keyMistake": "2. 开 (m+1) x (n+1) 维度，第 0 行/列代表空串情况，天然为 0 避免边界越界。"
    }
  },
  {
    "id": "72",
    "slug": "72-编辑距离",
    "title": "编辑距离",
    "titleEn": "Edit Distance",
    "category": "动态规划",
    "difficulty": "困难",
    "topic": "二维 DP (替换/删除/插入)",
    "completed": true,
    "leetcodeSlug": "edit-distance",
    "leetcodeUrl": "https://leetcode.cn/problems/edit-distance/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E7%BC%96%E8%BE%91%E8%B7%9D%E7%A6%BB",
    "acceptanceRate": 64.2,
    "solutionCount": 4251,
    "companyTagCount": 125,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "动态规划",
      "二维 DP (替换/删除/插入)",
      "字符串"
    ],
    "sourcePath": "hot100/15_动态规划/72.编辑距离.py",
    "lastUpdated": "2026-09-01",
    "lastUpdatedAt": "2026-09-01T19:41:36.545Z",
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
    "thoughts": [
      "需二刷：双字符串二维动态规划（编辑距离经典模型）",
      "3. 状态转移：",
      "时间复杂度：O(m * n)，双重循环遍历整个网格",
      "空间复杂度：O(m * n)，二维 DP 数组（可使用滚动数组压缩至 O(min(m, n))）",
      "1. DP 决策思路：不要试图用 if 逻辑去人为预测/特判具体执行哪种操作，DP 本质是对【替换、删除、插入】三种合法转移分支全部计算并取 min。"
    ],
    "pitfalls": [
      "2. 开 (m+1) x (n+1) 数组，初始化边界：",
      "2. 括号优先级与加一范围：min(...) + 1 切勿写成 min(a, b, c + 1)，否则前两项未计入操作代价 1 会导致错误低值传递。",
      "3. 边界初始化赋值：dp[i][0] 应赋值为动态的 i（删除 i 次），dp[0][j] 赋为 j（插入 j 次），不能赋固定总长度 m/n。"
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：双字符串二维＿＿＿（＿＿＿经典模型）",
        "answer": "动态规划"
      },
      {
        "prompt": "空间复杂度：O(m * n)，二维 DP 数组（可使用＿＿＿压缩至 O(min(m, n))）",
        "answer": "滚动数组"
      }
    ],
    "solutionGuide": {
      "idea": "需二刷：双字符串二维动态规划（编辑距离经典模型）",
      "interviewSteps": [
        "先说明核心考点：二维 DP (替换/删除/插入)。",
        "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
        "关键词：动态规划 / 二维 DP (替换/删除/插入) / 字符串。"
      ],
      "complexity": "时间复杂度：O(m * n)，双重循环遍历整个网格",
      "keyMistake": "2. 开 (m+1) x (n+1) 数组，初始化边界："
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
    "completed": true,
    "leetcodeSlug": "palindromic-substrings",
    "leetcodeUrl": "https://leetcode.cn/problems/palindromic-substrings/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%9B%9E%E6%96%87%E5%AD%90%E4%B8%B2",
    "acceptanceRate": 68.3,
    "solutionCount": 2191,
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
    "sourcePath": "hot100/15_动态规划/647.回文子串.py",
    "lastUpdated": "2026-09-01",
    "lastUpdatedAt": "2026-09-01T18:59:07.003Z",
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
    "thoughts": [
      "时间 O(n²)，空间 O(1)"
    ],
    "pitfalls": [
      "需二刷：中心扩展法（奇偶中心枚举与边界控制）",
      "若误写为 (i-1, i+1) 会漏掉所有长度为 1 的回文子串且在 i0 时越界。",
      "2. 右边界越界：有效下标为 0 到 n-1，while 条件必须是 right < n（或 right < n - 1），",
      "必须显式声明 nonlocal count，否则会报 UnboundLocalError。"
    ],
    "recallBlanks": [
      {
        "prompt": "若误写为 (i-1, i+1) 会漏掉所有长度为 1 的＿＿＿且在 i0 时越界。",
        "answer": "回文子串"
      }
    ],
    "solutionGuide": {
      "idea": "时间 O(n²)，空间 O(1)",
      "interviewSteps": [
        "先说明核心考点：中心扩展。",
        "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
        "关键词：动态规划 / 中心扩展 / 双指针 / 字符串。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "需二刷：中心扩展法（奇偶中心枚举与边界控制）"
    }
  },
  {
    "id": "221",
    "slug": "221-最大正方形",
    "title": "最大正方形",
    "titleEn": "Maximal Square",
    "category": "动态规划",
    "difficulty": "中等",
    "topic": "二维 DP (木桶短板原理)",
    "completed": true,
    "leetcodeSlug": "maximal-square",
    "leetcodeUrl": "https://leetcode.cn/problems/maximal-square/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%9C%80%E5%A4%A7%E6%AD%A3%E6%96%B9%E5%BD%A2",
    "acceptanceRate": 52.1,
    "solutionCount": 2377,
    "companyTagCount": 80,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "动态规划",
      "二维 DP (木桶短板原理)",
      "数组",
      "矩阵"
    ],
    "sourcePath": "hot100/15_动态规划/221.最大正方形.py",
    "lastUpdated": "2026-09-01",
    "lastUpdatedAt": "2026-09-01T19:58:08.784Z",
    "interviewPattern": "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
    "thoughts": [
      "状态转移：若当前格为 '1'，则受左、上、左上三方最短木桶制约：",
      "时间 O(m * n)，空间 O(m * n)（可空间压缩至 O(n)）"
    ],
    "pitfalls": [
      "1. 索引映射（Off-by-one）：dp 数组开 (m+1) x (n+1) 带哨兵边界时，对应 matrix 下标应为 matrix[i-1][j-1]，误写 matrix[i][j] 导致 IndexError 越界。"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "状态转移：若当前格为 '1'，则受左、上、左上三方最短木桶制约：",
      "interviewSteps": [
        "先说明核心考点：二维 DP (木桶短板原理)。",
        "先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",
        "关键词：动态规划 / 二维 DP (木桶短板原理) / 数组 / 矩阵。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 索引映射（Off-by-one）：dp 数组开 (m+1) x (n+1) 带哨兵边界时，对应 matrix 下标应为 matrix[i-1][j-1]，误写 matrix[i][j] 导致 IndexError 越界。"
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%8F%AA%E5%87%BA%E7%8E%B0%E4%B8%80%E6%AC%A1%E7%9A%84%E6%95%B0%E5%AD%97",
    "acceptanceRate": 77,
    "solutionCount": 5713,
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
    "sourcePath": "hot100/16_技巧/136.只出现一次的数字.py",
    "lastUpdated": "2026-03-19",
    "lastUpdatedAt": "2026-03-19T14:13:34.107Z",
    "interviewPattern": "关注位运算、投票、原地交换等模板题，先写不变量再写代码。",
    "thoughts": [
      "时间 O(n)，空间 O(1)"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "时间 O(n)，空间 O(1)",
      "interviewSteps": [
        "先说明核心考点：异或。",
        "关注位运算、投票、原地交换等模板题，先写不变量再写代码。",
        "关键词：技巧 / 异或 / 位运算 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%A4%9A%E6%95%B0%E5%85%83%E7%B4%A0",
    "acceptanceRate": 67.4,
    "solutionCount": 6408,
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
      "排序",
      "摩尔投票算法"
    ],
    "sourcePath": "hot100/16_技巧/169.多数元素.py",
    "lastUpdated": "2026-03-19",
    "lastUpdatedAt": "2026-03-19T14:55:19.318Z",
    "interviewPattern": "关注位运算、投票、原地交换等模板题，先写不变量再写代码。",
    "thoughts": [
      "时间 O(n)，空间 O(1)",
      "1. 暴力法 O(n²) 会超时：双重循环统计每个元素出现次数，思路对但太慢"
    ],
    "pitfalls": [
      "3. 比较对象要清楚：i  j（元素 vs 元素），不能写成 i  nums（元素 vs 列表）",
      "4. 换候选人的时机：vote0 的判断要放在循环开头，不能放在 else 分支里",
      "5. return 不要写在 for 循环里面，否则第一次迭代就返回了"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "时间 O(n)，空间 O(1)",
      "interviewSteps": [
        "先说明核心考点：摩尔投票。",
        "关注位运算、投票、原地交换等模板题，先写不变量再写代码。",
        "关键词：技巧 / 摩尔投票 / 数组 / 哈希表。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "3. 比较对象要清楚：i  j（元素 vs 元素），不能写成 i  nums（元素 vs 列表）"
    }
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
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E9%A2%9C%E8%89%B2%E5%88%86%E7%B1%BB",
    "acceptanceRate": 63.9,
    "solutionCount": 5235,
    "companyTagCount": 84,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "技巧",
      "三指针",
      "数组",
      "双指针",
      "冒泡排序",
      "排序",
      "快速排序"
    ],
    "sourcePath": "hot100/16_技巧/75.颜色分类.py",
    "lastUpdated": "2026-06-04",
    "lastUpdatedAt": "2026-06-04T13:56:33.554Z",
    "interviewPattern": "关注位运算、投票、原地交换等模板题，先写不变量再写代码。",
    "thoughts": [
      "需二刷：荷兰国旗问题（三路分区），和 912 的三路快排是同一套思路",
      "时间 O(n)，空间 O(1)",
      "类比 912：三路快排的简化版——pivot 固定为 1，不需要递归"
    ],
    "pitfalls": [
      "1. nums[p]  2 交换后 p 不能 +1，右边换来的元素还没检查",
      "3. p2 初始值是 len(nums) - 1 不是 len(nums)，否则 nums[p2] 越界"
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：荷兰国旗问题（三路分区），和 912 的＿＿＿是同一套思路",
        "answer": "三路快排"
      }
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
    }
  },
  {
    "id": "287",
    "slug": "287-寻找重复数",
    "title": "寻找重复数",
    "titleEn": "Find the Duplicate Number",
    "category": "技巧",
    "difficulty": "中等",
    "topic": "Floyd 判圈找环入口",
    "completed": true,
    "leetcodeSlug": "find-the-duplicate-number",
    "leetcodeUrl": "https://leetcode.cn/problems/find-the-duplicate-number/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%AF%BB%E6%89%BE%E9%87%8D%E5%A4%8D%E6%95%B0",
    "acceptanceRate": 68,
    "solutionCount": 2976,
    "companyTagCount": 81,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "技巧",
      "Floyd 判圈找环入口",
      "位运算",
      "数组",
      "双指针",
      "二分查找",
      "Floyd 判圈算法",
      "抽屉原理"
    ],
    "sourcePath": "hot100/16_技巧/287.寻找重复数.py",
    "lastUpdated": "2026-08-24",
    "lastUpdatedAt": "2026-08-24T14:04:07.738Z",
    "interviewPattern": "关注位运算、投票、原地交换等模板题，先写不变量再写代码。",
    "thoughts": [
      "时间 O(n)，空间 O(1)"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "时间 O(n)，空间 O(1)",
      "interviewSteps": [
        "先说明核心考点：Floyd 判圈找环入口。",
        "关注位运算、投票、原地交换等模板题，先写不变量再写代码。",
        "关键词：技巧 / Floyd 判圈找环入口 / 位运算 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    }
  },
  {
    "id": "31",
    "slug": "31-下一个排列",
    "title": "下一个排列",
    "titleEn": "Next Permutation",
    "category": "技巧",
    "difficulty": "中等",
    "topic": "字典序原地变换（找断点+交换+翻转后缀）",
    "completed": true,
    "leetcodeSlug": "next-permutation",
    "leetcodeUrl": "https://leetcode.cn/problems/next-permutation/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E4%B8%8B%E4%B8%80%E4%B8%AA%E6%8E%92%E5%88%97",
    "acceptanceRate": 43.2,
    "solutionCount": 4358,
    "companyTagCount": 101,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "技巧",
      "字典序原地变换（找断点+交换+翻转后缀）",
      "数组",
      "双指针"
    ],
    "sourcePath": "hot100/16_技巧/31.下一个排列.py",
    "lastUpdated": "2026-08-24",
    "lastUpdatedAt": "2026-08-24T14:49:30.781Z",
    "interviewPattern": "关注位运算、投票、原地交换等模板题，先写不变量再写代码。",
    "thoughts": [
      "时间 O(n)（单次扫描 + swap + 单段翻转），空间 O(1)"
    ],
    "pitfalls": [
      "i 右边这段天然是【严格降序】（否则趋势会在更右边被打破）。",
      "边界：若 i 找不到（ -1，即全降序  已是最大），",
      "1. 【犯过】步骤 ③ 翻转边界写成 reverse(..., j-1)："
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "时间 O(n)（单次扫描 + swap + 单段翻转），空间 O(1)",
      "interviewSteps": [
        "先说明核心考点：字典序原地变换（找断点+交换+翻转后缀）。",
        "关注位运算、投票、原地交换等模板题，先写不变量再写代码。",
        "关键词：技巧 / 字典序原地变换（找断点+交换+翻转后缀） / 数组 / 双指针。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "i 右边这段天然是【严格降序】（否则趋势会在更右边被打破）。"
    }
  },
  {
    "id": "146",
    "slug": "146-lru-缓存",
    "title": "LRU 缓存",
    "titleEn": "LRU Cache",
    "category": "Hot100 补充",
    "difficulty": "中等",
    "topic": "设计",
    "completed": true,
    "leetcodeSlug": "lru-cache",
    "leetcodeUrl": "https://leetcode.cn/problems/lru-cache/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=LRU%20%E7%BC%93%E5%AD%98",
    "acceptanceRate": 55.6,
    "solutionCount": 5131,
    "companyTagCount": 182,
    "paidOnly": false,
    "sourceBanks": [
      "本地补充"
    ],
    "tags": [
      "Hot100 补充",
      "设计",
      "哈希表",
      "链表",
      "双向链表"
    ],
    "sourcePath": "hot100/07_链表/146.LRU 缓存.py",
    "lastUpdated": "2026-09-27",
    "lastUpdatedAt": "2026-09-27T16:32:41.601Z",
    "interviewPattern": "先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",
    "thoughts": [
      "时间 O(1)，空间 O(capacity)"
    ],
    "pitfalls": [
      "易错点/实战踩坑复盘："
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "时间 O(1)，空间 O(capacity)",
      "interviewSteps": [
        "先说明核心考点：设计。",
        "先讲清楚暴力解，再给出数据结构优化。再补充复杂度。",
        "关键词：Hot100 补充 / 设计 / 哈希表 / 链表。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "易错点/实战踩坑复盘："
    }
  },
  {
    "id": "130",
    "slug": "130-被围绕的区域",
    "title": "被围绕的区域",
    "titleEn": "Surrounded Regions",
    "category": "Hot100 补充",
    "difficulty": "中等",
    "topic": "深度优先搜索",
    "completed": true,
    "leetcodeSlug": "surrounded-regions",
    "leetcodeUrl": "https://leetcode.cn/problems/surrounded-regions/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E8%A2%AB%E5%9B%B4%E7%BB%95%E7%9A%84%E5%8C%BA%E5%9F%9F",
    "acceptanceRate": 47.7,
    "solutionCount": 2821,
    "companyTagCount": 48,
    "paidOnly": false,
    "sourceBanks": [
      "本地补充"
    ],
    "tags": [
      "Hot100 补充",
      "深度优先搜索",
      "广度优先搜索",
      "并查集",
      "数组",
      "矩阵"
    ],
    "sourcePath": "hot100/130.被围绕的区域.py",
    "lastUpdated": "2026-09-04",
    "lastUpdatedAt": "2026-09-04T14:23:26.124Z",
    "interviewPattern": "先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",
    "thoughts": [
      "时间复杂度：O(M * N * alpha(M * N)) ≈ O(M * N)，每个格子常数次操作",
      "空间复杂度：O(M * N)，并查集 parent 字典空间"
    ],
    "pitfalls": [
      "1. 逆向思考：与其找“被包围的 O”，不如找出所有与“网格边界连通的 O”（免死安全区）。",
      "- 凡位于四条边界上的 'O'，一律与 dummy 执行 union 合并；",
      "- 凡是 board[r][c]  'O' 且 find((r, c)) ! find(dummy) 的，说明未能连通边界，原地修改为 'X'。",
      "1. 误区：直接将不在边缘的 'O' 变 'X' 会误杀！因为内部的 'O' 可能顺着通道连接到边缘。",
      "3. 空矩阵守卫：进入前需进行 if not board or not board[0]: return 守卫校验，防止越界。",
      "阶段 1：构建连通分量，边界 'O' 归入 dummy"
    ],
    "recallBlanks": [
      {
        "prompt": "空间复杂度：O(M * N)，＿＿＿ parent 字典空间",
        "answer": "并查集"
      }
    ],
    "solutionGuide": {
      "idea": "围绕「深度优先搜索」组织解法，先确认输入输出和边界，再选择对应模板。",
      "interviewSteps": [
        "先说明核心考点：深度优先搜索。",
        "先讲清楚暴力解，再给出数据结构优化。再补充复杂度。",
        "关键词：Hot100 补充 / 深度优先搜索 / 广度优先搜索 / 并查集。"
      ],
      "complexity": "时间复杂度：O(M * N * alpha(M * N)) ≈ O(M * N)，每个格子常数次操作",
      "keyMistake": "1. 逆向思考：与其找“被包围的 O”，不如找出所有与“网格边界连通的 O”（免死安全区）。"
    }
  },
  {
    "id": "1514",
    "slug": "1514-概率最大的路径",
    "title": "概率最大的路径",
    "titleEn": "Path with Maximum Probability",
    "category": "Hot100 补充",
    "difficulty": "中等",
    "topic": "图",
    "completed": true,
    "leetcodeSlug": "path-with-maximum-probability",
    "leetcodeUrl": "https://leetcode.cn/problems/path-with-maximum-probability/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%A6%82%E7%8E%87%E6%9C%80%E5%A4%A7%E7%9A%84%E8%B7%AF%E5%BE%84",
    "acceptanceRate": 44.7,
    "solutionCount": 334,
    "companyTagCount": 13,
    "paidOnly": false,
    "sourceBanks": [
      "本地补充"
    ],
    "tags": [
      "Hot100 补充",
      "图",
      "数组",
      "最短路",
      "Dijkstra 算法",
      "堆（优先队列）"
    ],
    "sourcePath": "hot100/1514.概率最大的路径.py",
    "lastUpdated": "2026-09-05",
    "lastUpdatedAt": "2026-09-05T18:25:27.743Z",
    "interviewPattern": "先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",
    "thoughts": [
      "[需二刷]：乘积最大路径（Dijkstra 堆优化变体 / 大顶堆）",
      "1. 本质是单源最长/最大路径问题，由于边权 p ∈ [0, 1]，路径概率乘积单调不增，满足 Dijkstra 贪心选择性质（类似于求和最短路）。",
      "4. 利用最大堆（Python 中存储负概率 -p 实现大顶堆）每次弹出当前未确认节点中概率最大的节点。",
      "5. 出堆时若当前节点即为 end_node，直接返回对应概率（贪心最优保证）；若 cur_p < prob[u]，说明是过期历史状态，跳过剪枝。",
      "6. 遍历邻居松弛：new_p  cur_p * p，若 new_p > prob[v]，更新 prob[v] 并入堆。",
      "时间复杂度：O(E log E) 或 O(E log V)，其中 E 为边数，V 为顶点数 n，堆操作耗时。",
      "空间复杂度：O(V + E)，邻接表图、prob 数组以及优先队列的存储开销。"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "recallBlanks": [
      {
        "prompt": "[需二刷]：乘积最大路径（＿＿＿ ＿＿＿优化变体 / ＿＿＿）",
        "answer": "Dijkstra"
      },
      {
        "prompt": "4. 利用最大＿＿＿（Python 中存储负概率 -p 实现＿＿＿）每次弹出当前未确认节点中概率最大的节点。",
        "answer": "堆"
      },
      {
        "prompt": "空间复杂度：O(V + E)，邻接表图、prob 数组以及＿＿＿的存储开销。",
        "answer": "优先队列"
      }
    ],
    "solutionGuide": {
      "idea": "[需二刷]：乘积最大路径（Dijkstra 堆优化变体 / 大顶堆）",
      "interviewSteps": [
        "先说明核心考点：图。",
        "先讲清楚暴力解，再给出数据结构优化。再补充复杂度。",
        "关键词：Hot100 补充 / 图 / 数组 / 最短路。"
      ],
      "complexity": "时间复杂度：O(E log E) 或 O(E log V)，其中 E 为边数，V 为顶点数 n，堆操作耗时。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    }
  },
  {
    "id": "460",
    "slug": "460-lfu-缓存",
    "title": "LFU 缓存",
    "titleEn": "LFU Cache",
    "category": "Hot100 补充",
    "difficulty": "困难",
    "topic": "设计",
    "completed": true,
    "leetcodeSlug": "lfu-cache",
    "leetcodeUrl": "https://leetcode.cn/problems/lfu-cache/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=LFU%20%E7%BC%93%E5%AD%98",
    "acceptanceRate": 49.5,
    "solutionCount": 856,
    "companyTagCount": 71,
    "paidOnly": false,
    "sourceBanks": [
      "本地补充"
    ],
    "tags": [
      "Hot100 补充",
      "设计",
      "哈希表",
      "链表",
      "双向链表"
    ],
    "sourcePath": "hot100/460.LFU 缓存.py",
    "lastUpdated": "2026-09-27",
    "lastUpdatedAt": "2026-09-27T17:04:49.632Z",
    "interviewPattern": "先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",
    "thoughts": [
      "核心考点：设计",
      "先整理输入输出和边界，再选择合适的数据结构。"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "核心考点：设计",
      "interviewSteps": [
        "先说明核心考点：设计。",
        "先讲清楚暴力解，再给出数据结构优化。再补充复杂度。",
        "关键词：Hot100 补充 / 设计 / 哈希表 / 链表。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    }
  },
  {
    "id": "547",
    "slug": "547-省份数量",
    "title": "省份数量",
    "titleEn": "Number of Provinces",
    "category": "Hot100 补充",
    "difficulty": "中等",
    "topic": "深度优先搜索",
    "completed": true,
    "leetcodeSlug": "number-of-provinces",
    "leetcodeUrl": "https://leetcode.cn/problems/number-of-provinces/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E7%9C%81%E4%BB%BD%E6%95%B0%E9%87%8F",
    "acceptanceRate": 62.9,
    "solutionCount": 2302,
    "companyTagCount": 62,
    "paidOnly": false,
    "sourceBanks": [
      "本地补充"
    ],
    "tags": [
      "Hot100 补充",
      "深度优先搜索",
      "广度优先搜索",
      "并查集",
      "图"
    ],
    "sourcePath": "hot100/547.省份数量.py",
    "lastUpdated": "2026-09-04",
    "lastUpdatedAt": "2026-09-04T12:23:58.607Z",
    "interviewPattern": "先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",
    "thoughts": [
      "5. find 操作中采用路径压缩，使后续查找摊还时间接近 O(1)。",
      "时间复杂度：O(n^2 * alpha(n)) ≈ O(n^2)，遍历上三角 n*(n-1)/2 次",
      "空间复杂度：O(n)，并查集 parent 数组及递归栈",
      "3. DFS 写法误区：dfs(i) 内部若再次写 for i in range(n) 会覆盖形参并导致 RecursionError。",
      "解法一：并查集法（推荐，可动态加边）",
      "解法二：DFS 染色遍历（备选）"
    ],
    "pitfalls": [
      "1. 列表初始化：必须使用 list(range(n))，不能使用不可变的 range(n)。",
      "3. DFS 写法误区：dfs(i) 内部若再次写 for i in range(n) 会覆盖形参并导致 RecursionError。"
    ],
    "recallBlanks": [
      {
        "prompt": "3. ＿＿＿ 写法误区：＿＿＿(i) 内部若再次写 for i in range(n) 会覆盖形参并导致 RecursionError。",
        "answer": "DFS"
      },
      {
        "prompt": "空间复杂度：O(n)，＿＿＿ parent 数组及＿＿＿＿＿＿",
        "answer": "并查集"
      }
    ],
    "solutionGuide": {
      "idea": "5. find 操作中采用路径压缩，使后续查找摊还时间接近 O(1)。",
      "interviewSteps": [
        "先说明核心考点：深度优先搜索。",
        "先讲清楚暴力解，再给出数据结构优化。再补充复杂度。",
        "关键词：Hot100 补充 / 深度优先搜索 / 广度优先搜索 / 并查集。"
      ],
      "complexity": "时间复杂度：O(n^2 * alpha(n)) ≈ O(n^2)，遍历上三角 n*(n-1)/2 次",
      "keyMistake": "1. 列表初始化：必须使用 list(range(n))，不能使用不可变的 range(n)。"
    }
  },
  {
    "id": "684",
    "slug": "684-冗余连接",
    "title": "冗余连接",
    "titleEn": "Redundant Connection",
    "category": "Hot100 补充",
    "difficulty": "中等",
    "topic": "深度优先搜索",
    "completed": true,
    "leetcodeSlug": "redundant-connection",
    "leetcodeUrl": "https://leetcode.cn/problems/redundant-connection/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%86%97%E4%BD%99%E8%BF%9E%E6%8E%A5",
    "acceptanceRate": 68.8,
    "solutionCount": 1227,
    "companyTagCount": 19,
    "paidOnly": false,
    "sourceBanks": [
      "本地补充"
    ],
    "tags": [
      "Hot100 补充",
      "深度优先搜索",
      "广度优先搜索",
      "并查集",
      "图"
    ],
    "sourcePath": "hot100/684.冗余连接.py",
    "lastUpdated": "2026-09-04",
    "lastUpdatedAt": "2026-09-04T12:24:09.082Z",
    "interviewPattern": "先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",
    "thoughts": [
      "时间复杂度：O(n * alpha(n)) ≈ O(n)，其中 n 为边数/节点数",
      "空间复杂度：O(n)，并查集 parent 数组空间"
    ],
    "pitfalls": [
      "1. 编号边界：节点编号为 1 到 n，parent 数组必须开 n + 1，写 n 会触发 IndexError。",
      "3. 变量名混淆：合并时是修改父指针 parent[root_x]  root_y，误写为 find[root_x]  root_y 会报错。"
    ],
    "recallBlanks": [
      {
        "prompt": "空间复杂度：O(n)，＿＿＿ parent 数组空间",
        "answer": "并查集"
      }
    ],
    "solutionGuide": {
      "idea": "围绕「深度优先搜索」组织解法，先确认输入输出和边界，再选择对应模板。",
      "interviewSteps": [
        "先说明核心考点：深度优先搜索。",
        "先讲清楚暴力解，再给出数据结构优化。再补充复杂度。",
        "关键词：Hot100 补充 / 深度优先搜索 / 广度优先搜索 / 并查集。"
      ],
      "complexity": "时间复杂度：O(n * alpha(n)) ≈ O(n)，其中 n 为边数/节点数",
      "keyMistake": "1. 编号边界：节点编号为 1 到 n，parent 数组必须开 n + 1，写 n 会触发 IndexError。"
    }
  },
  {
    "id": "743",
    "slug": "743-网络延迟时间",
    "title": "网络延迟时间",
    "titleEn": "Network Delay Time",
    "category": "Hot100 补充",
    "difficulty": "中等",
    "topic": "深度优先搜索",
    "completed": true,
    "leetcodeSlug": "network-delay-time",
    "leetcodeUrl": "https://leetcode.cn/problems/network-delay-time/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E7%BD%91%E7%BB%9C%E5%BB%B6%E8%BF%9F%E6%97%B6%E9%97%B4",
    "acceptanceRate": 59.6,
    "solutionCount": 1205,
    "companyTagCount": 24,
    "paidOnly": false,
    "sourceBanks": [
      "本地补充"
    ],
    "tags": [
      "Hot100 补充",
      "深度优先搜索",
      "广度优先搜索",
      "图",
      "最短路",
      "Dijkstra 算法",
      "堆（优先队列）"
    ],
    "sourcePath": "hot100/743.网络延迟时间.py",
    "lastUpdated": "2026-09-04",
    "lastUpdatedAt": "2026-09-04T12:23:48.909Z",
    "interviewPattern": "先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",
    "thoughts": [
      "[需二刷]：单源最短路径 Dijkstra 堆优化算法母题",
      "3. 最小堆 pq 维护 (当前到达耗时 d, 当前节点 u)，利用贪心思想每次探索耗时最短的节点",
      "4. 出堆时若 d > distance[u] 则剪枝跳过，否则遍历邻居松弛距离并入堆",
      "5. 最终最大延迟时间为 max(distance[1:])，若存在 inf 说明存在不可达节点返回 -1",
      "时间复杂度：O(E log E) / O(E log V)，其中 E 为边数，V 为节点数",
      "空间复杂度：O(V + E)，邻接表和堆及距离数组所需空间",
      "2. heappush 时必须将耗时作为元组第一个元素 (d, u)，利用 Python 堆元组首项比对特性。"
    ],
    "pitfalls": [
      "4. 出堆时若 d > distance[u] 则剪枝跳过，否则遍历邻居松弛距离并入堆",
      "3. 忘记过期剪枝 if d > distance[u]: continue 会导致冗余松弛和超时。"
    ],
    "recallBlanks": [
      {
        "prompt": "4. 出＿＿＿时若 d > distance[u] 则＿＿＿跳过，否则遍历邻居松弛距离并入＿＿＿",
        "answer": "堆"
      },
      {
        "prompt": "3. 忘记过期＿＿＿ if d > distance[u]: continue 会导致冗余松弛和超时。",
        "answer": "剪枝"
      },
      {
        "prompt": "[需二刷]：单源最短路径 ＿＿＿ ＿＿＿优化算法母题",
        "answer": "Dijkstra"
      }
    ],
    "solutionGuide": {
      "idea": "[需二刷]：单源最短路径 Dijkstra 堆优化算法母题",
      "interviewSteps": [
        "先说明核心考点：深度优先搜索。",
        "先讲清楚暴力解，再给出数据结构优化。再补充复杂度。",
        "关键词：Hot100 补充 / 深度优先搜索 / 广度优先搜索 / 图。"
      ],
      "complexity": "时间复杂度：O(E log E) / O(E log V)，其中 E 为边数，V 为节点数",
      "keyMistake": "4. 出堆时若 d > distance[u] 则剪枝跳过，否则遍历邻居松弛距离并入堆"
    }
  },
  {
    "id": "990",
    "slug": "990-等式方程的可满足性",
    "title": "等式方程的可满足性",
    "titleEn": "Satisfiability of Equality Equations",
    "category": "Hot100 补充",
    "difficulty": "中等",
    "topic": "并查集",
    "completed": true,
    "leetcodeSlug": "satisfiability-of-equality-equations",
    "leetcodeUrl": "https://leetcode.cn/problems/satisfiability-of-equality-equations/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E7%AD%89%E5%BC%8F%E6%96%B9%E7%A8%8B%E7%9A%84%E5%8F%AF%E6%BB%A1%E8%B6%B3%E6%80%A7",
    "acceptanceRate": 54.6,
    "solutionCount": 1030,
    "companyTagCount": 17,
    "paidOnly": false,
    "sourceBanks": [
      "本地补充"
    ],
    "tags": [
      "Hot100 补充",
      "并查集",
      "图",
      "数组",
      "字符串"
    ],
    "sourcePath": "hot100/990.等式方程的可满足性.py",
    "lastUpdated": "2026-09-04",
    "lastUpdatedAt": "2026-09-04T13:51:51.346Z",
    "interviewPattern": "先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",
    "thoughts": [
      "时间复杂度：O(N * alpha(C)) ≈ O(N)，其中 N 为方程总数，C < 26 为字符种类",
      "空间复杂度：O(C) ≈ O(1)，字典最多存储 26 个小写字母"
    ],
    "pitfalls": [
      "1. 单遍扫描漏洞：不能边合并边判断！若 \"!\" 出现在 \"\" 之前（如 [\"a!b\",\"bc\",\"ca\"]），单遍判断无法察觉后续合并产生的矛盾。必须先全量合并等式，再校验不等式。"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "围绕「并查集」组织解法，先确认输入输出和边界，再选择对应模板。",
      "interviewSteps": [
        "先说明核心考点：并查集。",
        "先讲清楚暴力解，再给出数据结构优化。再补充复杂度。",
        "关键词：Hot100 补充 / 并查集 / 图 / 数组。"
      ],
      "complexity": "时间复杂度：O(N * alpha(C)) ≈ O(N)，其中 N 为方程总数，C < 26 为字符种类",
      "keyMistake": "1. 单遍扫描漏洞：不能边合并边判断！若 \"!\" 出现在 \"\" 之前（如 [\"a!b\",\"bc\",\"ca\"]），单遍判断无法察觉后续合并产生的矛盾。必须先全量合并等式，再校验不等式。"
    }
  },
  {
    "id": "144",
    "slug": "144-二叉树的前序遍历",
    "title": "二叉树的前序遍历",
    "titleEn": "Binary Tree Preorder Traversal",
    "category": "Hot100 补充",
    "difficulty": "简单",
    "topic": "栈",
    "completed": true,
    "leetcodeSlug": "binary-tree-preorder-traversal",
    "leetcodeUrl": "https://leetcode.cn/problems/binary-tree-preorder-traversal/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%89%8D%E5%BA%8F%E9%81%8D%E5%8E%86",
    "acceptanceRate": 73.5,
    "solutionCount": 4776,
    "companyTagCount": 54,
    "paidOnly": false,
    "sourceBanks": [
      "本地补充"
    ],
    "tags": [
      "Hot100 补充",
      "栈",
      "树",
      "深度优先搜索",
      "二叉树"
    ],
    "sourcePath": "hot100/extra_拓展训练/144.二叉树的前序遍历.py",
    "lastUpdated": "2026-03-19",
    "lastUpdatedAt": "2026-03-19T06:35:26.528Z",
    "interviewPattern": "先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",
    "thoughts": [
      "解法一：递归（直观好理解）",
      "时间 O(n)  空间 O(n)",
      "--- 递归方法 ---",
      "dfs(node.left)              # 2. 再递归左子树",
      "dfs(node.right)             # 3. 最后递归右子树",
      "解法二：迭代（用栈模拟）",
      "时间 O(n)  空间 O(n)"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "recallBlanks": [
      {
        "prompt": "解法一：＿＿＿（直观好理解）",
        "answer": "递归"
      },
      {
        "prompt": "＿＿＿(node.left)              # 2. 再＿＿＿左子树",
        "answer": "dfs"
      },
      {
        "prompt": "解法二：迭代（用＿＿＿模拟）",
        "answer": "栈"
      }
    ],
    "solutionGuide": {
      "idea": "解法一：递归（直观好理解）",
      "interviewSteps": [
        "先说明核心考点：栈。",
        "先讲清楚暴力解，再给出数据结构优化。再补充复杂度。",
        "关键词：Hot100 补充 / 栈 / 树 / 深度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    }
  },
  {
    "id": "145",
    "slug": "145-二叉树的后序遍历",
    "title": "二叉树的后序遍历",
    "titleEn": "Binary Tree Postorder Traversal",
    "category": "Hot100 补充",
    "difficulty": "简单",
    "topic": "栈",
    "completed": true,
    "leetcodeSlug": "binary-tree-postorder-traversal",
    "leetcodeUrl": "https://leetcode.cn/problems/binary-tree-postorder-traversal/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%90%8E%E5%BA%8F%E9%81%8D%E5%8E%86",
    "acceptanceRate": 77.9,
    "solutionCount": 3632,
    "companyTagCount": 50,
    "paidOnly": false,
    "sourceBanks": [
      "本地补充"
    ],
    "tags": [
      "Hot100 补充",
      "栈",
      "树",
      "深度优先搜索",
      "二叉树"
    ],
    "sourcePath": "hot100/extra_拓展训练/145.二叉树的后序遍历.py",
    "lastUpdated": "2026-03-16",
    "lastUpdatedAt": "2026-03-16T10:38:56.260Z",
    "interviewPattern": "先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",
    "thoughts": [
      "解法一：递归（直观好理解）",
      "时间 O(n)  空间 O(n)",
      "--- 递归方法 ---",
      "dfs(node.left)              # 1. 先递归左子树",
      "dfs(node.right)             # 2. 再递归右子树",
      "解法二：迭代（巧妙利用前序遍历）",
      "- 和前序迭代几乎一样，只是把压栈顺序改为\"先压左再压右\""
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "recallBlanks": [
      {
        "prompt": "解法一：＿＿＿（直观好理解）",
        "answer": "递归"
      },
      {
        "prompt": "＿＿＿(node.left)              # 1. 先＿＿＿左子树",
        "answer": "dfs"
      },
      {
        "prompt": "解法二：迭代（巧妙利用＿＿＿）",
        "answer": "前序遍历"
      }
    ],
    "solutionGuide": {
      "idea": "解法一：递归（直观好理解）",
      "interviewSteps": [
        "先说明核心考点：栈。",
        "先讲清楚暴力解，再给出数据结构优化。再补充复杂度。",
        "关键词：Hot100 补充 / 栈 / 树 / 深度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    }
  },
  {
    "id": "2058",
    "slug": "2058-找出临界点之间的最小和最大距离",
    "title": "找出临界点之间的最小和最大距离",
    "titleEn": "Find the Minimum and Maximum Number of Nodes Between Critical Points",
    "category": "Hot100 补充",
    "difficulty": "中等",
    "topic": "链表",
    "completed": true,
    "leetcodeSlug": "find-the-minimum-and-maximum-number-of-nodes-between-critical-points",
    "leetcodeUrl": "https://leetcode.cn/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%89%BE%E5%87%BA%E4%B8%B4%E7%95%8C%E7%82%B9%E4%B9%8B%E9%97%B4%E7%9A%84%E6%9C%80%E5%B0%8F%E5%92%8C%E6%9C%80%E5%A4%A7%E8%B7%9D%E7%A6%BB",
    "acceptanceRate": 64.5,
    "solutionCount": 254,
    "companyTagCount": 6,
    "paidOnly": false,
    "sourceBanks": [
      "本地补充"
    ],
    "tags": [
      "Hot100 补充",
      "链表"
    ],
    "sourcePath": "hot100/extra_拓展训练/2058.找出临界点之间的最小和最大距离.py",
    "lastUpdated": "2026-08-30",
    "lastUpdatedAt": "2026-08-30T21:32:46.828Z",
    "interviewPattern": "先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",
    "thoughts": [
      "时间 O(n)，空间 O(k)，k 为临界点个数"
    ],
    "pitfalls": [
      "1. 边界条件：临界点需要前后各一个邻居，链表至少 3 个节点才可能有临界点",
      "3. minDistance 初始值必须是 float('inf')，不能用 0",
      "否则 result 为空时 result[-1] 会 IndexError",
      "5. range(len(result)) 是 range 对象，不能与 int 用 < 比较 → TypeError"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "时间 O(n)，空间 O(k)，k 为临界点个数",
      "interviewSteps": [
        "先说明核心考点：链表。",
        "先讲清楚暴力解，再给出数据结构优化。再补充复杂度。",
        "关键词：Hot100 补充 / 链表。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 边界条件：临界点需要前后各一个邻居，链表至少 3 个节点才可能有临界点"
    }
  },
  {
    "id": "217",
    "slug": "217-存在重复元素",
    "title": "存在重复元素",
    "titleEn": "Contains Duplicate",
    "category": "Hot100 补充",
    "difficulty": "简单",
    "topic": "数组",
    "completed": true,
    "leetcodeSlug": "contains-duplicate",
    "leetcodeUrl": "https://leetcode.cn/problems/contains-duplicate/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%AD%98%E5%9C%A8%E9%87%8D%E5%A4%8D%E5%85%83%E7%B4%A0",
    "acceptanceRate": 56.1,
    "solutionCount": 4310,
    "companyTagCount": 70,
    "paidOnly": false,
    "sourceBanks": [
      "本地补充"
    ],
    "tags": [
      "Hot100 补充",
      "数组",
      "哈希表",
      "排序"
    ],
    "sourcePath": "hot100/extra_拓展训练/217.存在重复元素.py",
    "lastUpdated": "2026-03-16",
    "lastUpdatedAt": "2026-03-16T12:16:48.853Z",
    "interviewPattern": "先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",
    "thoughts": [
      "核心考点：数组",
      "先整理输入输出和边界，再选择合适的数据结构。"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "核心考点：数组",
      "interviewSteps": [
        "先说明核心考点：数组。",
        "先讲清楚暴力解，再给出数据结构优化。再补充复杂度。",
        "关键词：Hot100 补充 / 数组 / 哈希表 / 排序。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    }
  },
  {
    "id": "3756",
    "slug": "3756-连接非零数字并乘以其数字和-ii",
    "title": "连接非零数字并乘以其数字和 II",
    "titleEn": "Concatenate Non-Zero Digits and Multiply by Sum II",
    "category": "Hot100 补充",
    "difficulty": "中等",
    "topic": "数学",
    "completed": true,
    "leetcodeSlug": "concatenate-non-zero-digits-and-multiply-by-sum-ii",
    "leetcodeUrl": "https://leetcode.cn/problems/concatenate-non-zero-digits-and-multiply-by-sum-ii/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E8%BF%9E%E6%8E%A5%E9%9D%9E%E9%9B%B6%E6%95%B0%E5%AD%97%E5%B9%B6%E4%B9%98%E4%BB%A5%E5%85%B6%E6%95%B0%E5%AD%97%E5%92%8C%20II",
    "acceptanceRate": 42,
    "solutionCount": 29,
    "companyTagCount": 1,
    "paidOnly": false,
    "sourceBanks": [
      "本地补充"
    ],
    "tags": [
      "Hot100 补充",
      "数学",
      "字符串",
      "前缀和"
    ],
    "sourcePath": "hot100/extra_拓展训练/3756.连接非零数字并乘以其数字和 II.py",
    "lastUpdated": "2026-07-08",
    "lastUpdatedAt": "2026-07-08T17:14:50.434Z",
    "interviewPattern": "先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",
    "thoughts": [
      "时间 O(m + Q)，空间 O(m)"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "时间 O(m + Q)，空间 O(m)",
      "interviewSteps": [
        "先说明核心考点：数学。",
        "先讲清楚暴力解，再给出数据结构优化。再补充复杂度。",
        "关键词：Hot100 补充 / 数学 / 字符串 / 前缀和。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    }
  },
  {
    "id": "461",
    "slug": "461-汉明距离",
    "title": "汉明距离",
    "titleEn": "Hamming Distance",
    "category": "Hot100 补充",
    "difficulty": "简单",
    "topic": "位运算",
    "completed": true,
    "leetcodeSlug": "hamming-distance",
    "leetcodeUrl": "https://leetcode.cn/problems/hamming-distance/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%B1%89%E6%98%8E%E8%B7%9D%E7%A6%BB",
    "acceptanceRate": 82.1,
    "solutionCount": 2418,
    "companyTagCount": 34,
    "paidOnly": false,
    "sourceBanks": [
      "本地补充"
    ],
    "tags": [
      "Hot100 补充",
      "位运算"
    ],
    "sourcePath": "hot100/extra_拓展训练/461.汉明距离.py",
    "lastUpdated": "2026-03-20",
    "lastUpdatedAt": "2026-03-20T08:32:16.452Z",
    "interviewPattern": "先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",
    "thoughts": [
      "时间 O(1)（整数位数固定），空间 O(1)"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "时间 O(1)（整数位数固定），空间 O(1)",
      "interviewSteps": [
        "先说明核心考点：位运算。",
        "先讲清楚暴力解，再给出数据结构优化。再补充复杂度。",
        "关键词：Hot100 补充 / 位运算。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    }
  },
  {
    "id": "567",
    "slug": "567-字符串的排列",
    "title": "字符串的排列",
    "titleEn": "Permutation in String",
    "category": "Hot100 补充",
    "difficulty": "中等",
    "topic": "哈希表",
    "completed": true,
    "leetcodeSlug": "permutation-in-string",
    "leetcodeUrl": "https://leetcode.cn/problems/permutation-in-string/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%8E%92%E5%88%97",
    "acceptanceRate": 46.6,
    "solutionCount": 2747,
    "companyTagCount": 48,
    "paidOnly": false,
    "sourceBanks": [
      "本地补充"
    ],
    "tags": [
      "Hot100 补充",
      "哈希表",
      "双指针",
      "字符串",
      "滑动窗口"
    ],
    "sourcePath": "hot100/extra_拓展训练/567.字符串的排列.py",
    "lastUpdated": "2026-06-01",
    "lastUpdatedAt": "2026-06-01T14:05:16.221Z",
    "interviewPattern": "先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",
    "thoughts": [
      "需二刷：滑动窗口寻找固定长度的子串（排列）",
      "时间 O(N + M)，其中 N 和 M 分别是 s1 和 s2 的长度。",
      "空间 O(C)，C 为字符集大小，本题最多 26 个字母。"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：＿＿＿寻找固定长度的子串（排列）",
        "answer": "滑动窗口"
      }
    ],
    "solutionGuide": {
      "idea": "需二刷：滑动窗口寻找固定长度的子串（排列）",
      "interviewSteps": [
        "先说明核心考点：哈希表。",
        "先讲清楚暴力解，再给出数据结构优化。再补充复杂度。",
        "关键词：Hot100 补充 / 哈希表 / 双指针 / 字符串。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    }
  },
  {
    "id": "703",
    "slug": "703-数据流中的第-k-大元素",
    "title": "数据流中的第 K 大元素",
    "titleEn": "Kth Largest Element in a Stream",
    "category": "Hot100 补充",
    "difficulty": "简单",
    "topic": "树",
    "completed": true,
    "leetcodeSlug": "kth-largest-element-in-a-stream",
    "leetcodeUrl": "https://leetcode.cn/problems/kth-largest-element-in-a-stream/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%95%B0%E6%8D%AE%E6%B5%81%E4%B8%AD%E7%9A%84%E7%AC%AC%20K%20%E5%A4%A7%E5%85%83%E7%B4%A0",
    "acceptanceRate": 53.6,
    "solutionCount": 951,
    "companyTagCount": 46,
    "paidOnly": false,
    "sourceBanks": [
      "本地补充"
    ],
    "tags": [
      "Hot100 补充",
      "树",
      "设计",
      "二叉搜索树",
      "二叉树",
      "数据流",
      "堆（优先队列）"
    ],
    "sourcePath": "hot100/extra_拓展训练/703.数据流中的第 K 大元素.py",
    "lastUpdated": "2026-06-12",
    "lastUpdatedAt": "2026-06-12T13:26:55.864Z",
    "interviewPattern": "先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",
    "thoughts": [
      "需二刷：最小堆维护 Top K（数据流实时求第 K 大的入门模板）",
      "堆顶（最小值）就是第 k 大的元素。新元素比堆顶大才值得入堆。",
      "时间 O(n log k)，空间 O(k)",
      "1. heapq 是最小堆，要第 K 大直接用小堆存前 K 大元素即可，不需要取反",
      "2. 初始化时 nums 长度可能小于 k，此时堆没满，堆顶就是最小值（不是真正第 k 大）",
      "但题目保证 add 调用次数足够多，最终堆会填满"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：最小＿＿＿维护 Top K（数据流实时求第 K 大的入门模板）",
        "answer": "堆"
      }
    ],
    "solutionGuide": {
      "idea": "需二刷：最小堆维护 Top K（数据流实时求第 K 大的入门模板）",
      "interviewSteps": [
        "先说明核心考点：树。",
        "先讲清楚暴力解，再给出数据结构优化。再补充复杂度。",
        "关键词：Hot100 补充 / 树 / 设计 / 二叉搜索树。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    }
  },
  {
    "id": "912",
    "slug": "912-排序数组",
    "title": "排序数组",
    "titleEn": "Sort an Array",
    "category": "Hot100 补充",
    "difficulty": "中等",
    "topic": "数组",
    "completed": true,
    "leetcodeSlug": "sort-an-array",
    "leetcodeUrl": "https://leetcode.cn/problems/sort-an-array/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E6%8E%92%E5%BA%8F%E6%95%B0%E7%BB%84",
    "acceptanceRate": 47.7,
    "solutionCount": 3061,
    "companyTagCount": 61,
    "paidOnly": false,
    "sourceBanks": [
      "本地补充"
    ],
    "tags": [
      "Hot100 补充",
      "数组",
      "分治",
      "桶排序",
      "计数排序",
      "基数排序",
      "排序",
      "堆（优先队列）",
      "归并排序"
    ],
    "sourcePath": "hot100/extra_拓展训练/912.排序数组.py",
    "lastUpdated": "2026-06-04",
    "lastUpdatedAt": "2026-06-04T13:14:27.406Z",
    "interviewPattern": "先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",
    "thoughts": [
      "需二刷：三路快排（3-way Quick Sort），处理大量重复元素的核心技巧",
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
    "recallBlanks": [
      {
        "prompt": "需二刷：＿＿＿（3-way Quick Sort），处理大量重复元素的核心技巧",
        "answer": "三路快排"
      },
      {
        "prompt": "＿＿＿处理小于区和大于区，等于区已在正确位置",
        "answer": "递归"
      }
    ],
    "solutionGuide": {
      "idea": "需二刷：三路快排（3-way Quick Sort），处理大量重复元素的核心技巧",
      "interviewSteps": [
        "先说明核心考点：数组。",
        "先讲清楚暴力解，再给出数据结构优化。再补充复杂度。",
        "关键词：Hot100 补充 / 数组 / 分治 / 桶排序。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "lt: 小于区的右边界，nums[left..lt-1] < pivot"
    }
  }
]

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
    "solved": 3,
    "hard": 1
  },
  {
    "name": "子串",
    "total": 3,
    "solved": 3,
    "hard": 2
  },
  {
    "name": "普通数组",
    "total": 5,
    "solved": 5,
    "hard": 1
  },
  {
    "name": "矩阵",
    "total": 4,
    "solved": 4,
    "hard": 0
  },
  {
    "name": "链表",
    "total": 12,
    "solved": 12,
    "hard": 1
  },
  {
    "name": "二叉树",
    "total": 15,
    "solved": 15,
    "hard": 1
  },
  {
    "name": "图论",
    "total": 4,
    "solved": 4,
    "hard": 0
  },
  {
    "name": "回溯",
    "total": 8,
    "solved": 8,
    "hard": 1
  },
  {
    "name": "二分查找",
    "total": 6,
    "solved": 6,
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
    "solved": 4,
    "hard": 0
  },
  {
    "name": "动态规划",
    "total": 16,
    "solved": 16,
    "hard": 2
  },
  {
    "name": "技巧",
    "total": 5,
    "solved": 5,
    "hard": 0
  },
  {
    "name": "Hot100 补充",
    "total": 17,
    "solved": 17,
    "hard": 1
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
    "id": "239",
    "title": "滑动窗口最大值",
    "slug": "239-滑动窗口最大值",
    "reason": "1. 队列必须存「下标」而非「值」，否则无法判断元素是否滑出窗口过期"
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
    "id": "239",
    "title": "滑动窗口最大值",
    "slug": "239-滑动窗口最大值",
    "reason": "1. 队列必须存「下标」而非「值」，否则无法判断元素是否滑出窗口过期"
  },
  {
    "id": "53",
    "title": "最大子数组和",
    "slug": "53-最大子数组和",
    "reason": "1. max_sum 不能初始化为 0，否则全负数数组（如 [-3,-2,-1]）会返回 0"
  }
]

export const algorithmRecentProblems: AlgorithmRecentItem[] = [
  {
    "id": "460",
    "slug": "460-lfu-缓存",
    "title": "LFU 缓存",
    "category": "Hot100 补充",
    "difficulty": "困难",
    "topic": "设计",
    "tags": [
      "Hot100 补充",
      "设计",
      "哈希表",
      "链表",
      "双向链表"
    ],
    "sourcePath": "hot100/460.LFU 缓存.py",
    "lastUpdated": "2026-09-27",
    "leetcodeUrl": "https://leetcode.cn/problems/lfu-cache/",
    "codePreview": "class Node:\n    def __init__(self, key:int, val:int):\n        self.key =key\n        self.val = val\n        self.next = None\n        self.prev = None\n        self.freq = 1\nclass DoubleListNode:\n    def __init__(self):\n        self.head = Node(0,0)\n        self.tail = Node(0,0)\n        self.head.next = self.tail\n        self.tail.prev = self.head\n        self._size = 0\n    def addlast(self, x):\n        x.next = self.tail\n        x.prev = self.tail.prev\n        self.tail.prev.next = x\n        self.tail.prev = x\n        self._size += 1\n    def remove(self, x):\n        x.next.prev = x.prev\n        x.prev.next = x.next\n        self._size -= 1\n    def removefirst(self):\n        if self.head.next == self.tail:\n            return None\n        first = self.head.next\n        self.remove(first)\n        return first\nclass LFUCache:\n# 同一个频次的key会放在同一个双向链表里面\n    def __init__(self, capacity: int):\n        self.cap = capacity\n        self.min_freq = 0\n        self.key_to_node = {}\n        self.freq_to_list = {}\n    def increase_freq(self, node: Node):\n        freq = node.freq\n        self.freq_to_list[freq].remove(node)\n        if freq == self.min_freq and self.freq_to_list[freq]._size == 0:\n            self.min_freq += 1 \n        node.freq += 1\n        if node.freq not in self.freq_to_list:\n            self.freq_to_list[node.freq] = DoubleListNode()\n        self.freq_to_list[node.freq].addlast(node)\n    def  remove_min_freq(self):\n        min_list = self.freq_to_list[self.min_freq]\n        deleted_node = min_list.removefirst()\n        self.key_to_node.pop(deleted_node.key)\n    def get(self, key: int) -> int:\n        if key not in self.key_to_node:\n            return -1\n        node = self.key_to_node[key]\n        self.increase_freq(node)\n        return node.val\n    def put(self, key: int, value: int) -> None:\n        if self.cap == 0:  # ⚠️ 边界防坑：容量为 0 时直接返回\n            return\n        # 情况 1：key 已存在 -> 更新值并提升频次\n        if key in self.key_to_node:\n            node = self.key_to_node[key]\n            node.val = value\n            self.increase_freq(node)\n            return\n        # 情况 2：全新 key -> 检查容量，插入 freq=1 的链表\n        if len(self.key_to_node) == self.cap:\n            self.remove_min_freq()\n        # 构造新节点（频次默认是 1）\n        new_node = Node(key, value)\n        self.key_to_node[key] = new_node\n        # 挂到 freq=1 的链表中\n        if 1 not in self.freq_to_list:\n            self.freq_to_list[1] = DoubleListNode()\n        self.freq_to_list[1].addlast(new_node)\n        # 🌟 关键：新插入的节点频次是 1，所以全局最小频次必然重置为 1！\n        self.min_freq = 1\n# Your LFUCache object will be instantiated and called as such:\n# obj = LFUCache(capacity)\n# param_1 = obj.get(key)\n# obj.put(key,value)"
  },
  {
    "id": "146",
    "slug": "146-lru-缓存",
    "title": "LRU 缓存",
    "category": "Hot100 补充",
    "difficulty": "中等",
    "topic": "设计",
    "tags": [
      "Hot100 补充",
      "设计",
      "哈希表",
      "链表",
      "双向链表"
    ],
    "sourcePath": "hot100/07_链表/146.LRU 缓存.py",
    "lastUpdated": "2026-09-27",
    "leetcodeUrl": "https://leetcode.cn/problems/lru-cache/",
    "codePreview": "# 📌 ✅ 二刷完成 (2026-09-27，牛客网手撕实战 AC)\n#\n# 思路：map 负责 O(1) 查找节点，双向链表维护访问顺序。\n#       每次访问（get/set/put）将节点移到链表尾部表示\"最近使用\"，\n#       缓存满时淘汰链表头部节点（最久未使用）\n# 时间 O(1)，空间 O(capacity)\n#\n# ⚠️ 易错点/实战踩坑复盘：\n# 1. 函数参数命名不一致导致 NameError：接口形参常为 (key, value)，内部调用易笔误写成 val 报 NameError\n# 2. 函数调用漏写括号 () 静默失效：self.removeLeastRecently 漏了 () 会仅引用函数对象而不执行淘汰，导致容量超标\n# 3. 辅助函数签名与调用不匹配：removefirst() 自动从 head.next 摘取节点，若定义为 def removefirst(self, x) 会在无参调用时报 missing 1 argument\n# 4. 更新已有 key 时误调底层方法：在 Solution 中误写 self.addlast(key)，应统一调用 self.addrecently(key, value)\n# 5. Node 必须同时存储 key 和 val：淘汰链表节点时，必须拿到 node.key 才能同步从 map 中 pop 掉条目\nclass Node:\n    # 链表节点：同时存储 key（用于从被删节点反查 map 的 key）和 val\n    def __init__(self, key, val):\n        self.key = key\n        self.val = val\n        self.prev = None\n        self.next = None\nclass DoublelistNode:\n    def __init__(self):\n        self.head = Node(0,0)\n        self.tail = Node(0,0)\n        self._size = 0\n        self.head.next = self.tail\n        self.tail.prev = self.head\n    def addlast(self,x):\n        x.prev = self.tail.prev\n        x.next = self.tail\n        self.tail.prev.next = x \n        self.tail.prev = x\n        self._size += 1\n    def remove(self,x):\n        x.next.prev = x.prev\n        x.prev.next = x.next\n        self._size -= 1\n    def removefirst(self):\n        if self.head.next == self.tail:\n            return None\n        first = self.head.next\n        self.remove(first)\n        return first\n    def size(self):\n        return self._size\nclass LRUCache:\n    def __init__(self, capacity: int):\n        self.map = {}                # key → Node，O(1) 定位节点\n        self.cache = DoublelistNode() # 双向链表，维护访问顺序\n        self.cap = capacity\n    def get(self, key: int) -> int:\n        if key not in self.map:\n            return -1\n        self.makerecently(key)       # ⚠️ 这里容易写成 x，但 makerecently 接收的是 key\n        return self.map[key].val\n    def put(self, key: int, val: int) -> None:\n        # 情况 1：key 已存在 → 先删旧节点，再插新节点（更新值和顺序）\n        if key in self.map:\n            self.deletekey(key)\n            self.addrecently(key, val)\n            return\n        # 情况 2：缓存满 → 淘汰最久未使用的头节点\n        if self.cap == self.cache.size():\n            self.removeLeastRecently()\n        # 情况 3：直接插入新节点\n        self.addrecently(key, val)\n    # 将 key 对应的节点移到链表尾部（标记为最近使用）\n    def makerecently(self, key: int):\n        x = self.map[key]\n        self.cache.remove(x)         # 先删\n        self.cache.addlast(x)        # 再放到尾部\n    # 新建节点并添加到链表尾部，同时在 map 中注册\n    def addrecently(self, key: int, val: int):\n        x = Node(key, val)\n        self.cache.addlast(x)\n        self.map[key] = x\n    # 删除指定 key 的节点（更新操作时用）\n    def deletekey(self, key: int):\n        x = self.map[key]\n        self.cache.remove(x)\n        self.map.pop(key)\n    # 淘汰最久未使用的元素（链表头部节点）\n    def removeLeastRecently(self):\n        deletedNode = self.cache.removefirst()\n        deletedKey = deletedNode.key  # 从节点中拿到 key，去 map 中清除\n        self.map.pop(deletedKey)\n# Your LRUCache object will be instantiated and called as such:\n# obj = LRUCache(capacity)\n# param_1 = obj.get(key)\n# obj.put(key,value)"
  },
  {
    "id": "1514",
    "slug": "1514-概率最大的路径",
    "title": "概率最大的路径",
    "category": "Hot100 补充",
    "difficulty": "中等",
    "topic": "图",
    "tags": [
      "Hot100 补充",
      "图",
      "数组",
      "最短路",
      "Dijkstra 算法"
    ],
    "sourcePath": "hot100/1514.概率最大的路径.py",
    "lastUpdated": "2026-09-05",
    "leetcodeUrl": "https://leetcode.cn/problems/path-with-maximum-probability/",
    "codePreview": "from typing import List\nimport heapq\n# [需二刷]：乘积最大路径（Dijkstra 堆优化变体 / 大顶堆）\n#\n# 思路：\n# 1. 本质是单源最长/最大路径问题，由于边权 p ∈ [0, 1]，路径概率乘积单调不增，满足 Dijkstra 贪心选择性质（类似于求和最短路）。\n# 2. 建无向加权图 graph[u] = [(v, p), ...]。\n# 3. 维护概率数组 prob，初始化为 0.0，起点 prob[start_node] = 1.0。\n# 4. 利用最大堆（Python 中存储负概率 -p 实现大顶堆）每次弹出当前未确认节点中概率最大的节点。\n# 5. 出堆时若当前节点即为 end_node，直接返回对应概率（贪心最优保证）；若 cur_p < prob[u]，说明是过期历史状态，跳过剪枝。\n# 6. 遍历邻居松弛：new_p = cur_p * p，若 new_p > prob[v]，更新 prob[v] 并入堆。\n#\n# 时间复杂度：O(E log E) 或 O(E log V)，其中 E 为边数，V 为顶点数 n，堆操作耗时。\n# 空间复杂度：O(V + E)，邻接表图、prob 数组以及优先队列的存储开销。\n#\n# 易错点/误区：\n# 1. 为什么这道「最长路径」可以用 Dijkstra？普通图中求最长路径是 NP-hard 且存在正环；但本题中所有边权 p ∈ [0, 1]，乘法会使概率单调递减（或保持不变），不存在无限放大的正环，满足贪心性质。\n# 2. Python 默认是小顶堆，需要存入负值 -p 来模拟大顶堆。\n# 3. 终止条件优化：只要 end_node 第一次出堆，其概率即为全局最大，可直接 return 提前退出。\n# 4. 浮点精度：乘法直接累乘，但在极长路径中如果发生下溢，一般可通过转 log（将乘法转加法求最短路）避免精度丢失（本题精度要求 1e-5，直接浮点乘积足够通过）。\nclass Solution:\n    def maxProbability(self, n: int, edges: List[List[int]], succProb: List[float], start_node: int, end_node: int) -> float:\n        graph = [[] for _ in range(n)]\n        for (u, v), p in zip(edges, succProb):\n            graph[u].append((v, p))\n            graph[v].append((u, p))\n        prob = [0.0] * n\n        prob[start_node] = 1.0\n        pq = [(-1.0, start_node)]\n        while pq:\n            neg_p, u = heapq.heappop(pq)\n            cur_p = -neg_p\n            if u == end_node:\n                return cur_p\n            if cur_p < prob[u]:\n                continue\n            for v, p in graph[u]:\n                new_p = cur_p * p\n                if new_p > prob[v]:\n                    prob[v] = new_p\n                    heapq.heappush(pq, (-new_p, v))\n        return 0.0"
  },
  {
    "id": "130",
    "slug": "130-被围绕的区域",
    "title": "被围绕的区域",
    "category": "Hot100 补充",
    "difficulty": "中等",
    "topic": "深度优先搜索",
    "tags": [
      "Hot100 补充",
      "深度优先搜索",
      "广度优先搜索",
      "并查集",
      "数组"
    ],
    "sourcePath": "hot100/130.被围绕的区域.py",
    "lastUpdated": "2026-09-04",
    "leetcodeUrl": "https://leetcode.cn/problems/surrounded-regions/",
    "codePreview": "from typing import List\n# [需二刷]：并查集虚拟超级源点 (Dummy Root) 技巧\n#\n# 思路：\n# 1. 逆向思考：与其找“被包围的 O”，不如找出所有与“网格边界连通的 O”（免死安全区）。\n# 2. 引入虚拟超级源点 dummy = (-1, -1)，代表通往外界的安全区。\n# 3. 遍历网格：\n#    - 凡位于四条边界上的 'O'，一律与 dummy 执行 union 合并；\n#    - 内部的 'O' 仅需向右 (0, 1) 和向下 (1, 0) 查看，若邻居也是 'O' 则执行 union。\n# 4. 二次遍历整盘清算：\n#    - 凡是 board[r][c] == 'O' 且 find((r, c)) != find(dummy) 的，说明未能连通边界，原地修改为 'X'。\n#\n# 时间复杂度：O(M * N * alpha(M * N)) ≈ O(M * N)，每个格子常数次操作\n# 空间复杂度：O(M * N)，并查集 parent 字典空间\n#\n# 易错点/误区：\n# 1. 误区：直接将不在边缘的 'O' 变 'X' 会误杀！因为内部的 'O' 可能顺着通道连接到边缘。\n# 2. 遍历方向：内部合并只需向右和向下看两个方向，即可覆盖所有无向邻接关系，避免四方向重复判断。\n# 3. 空矩阵守卫：进入前需进行 if not board or not board[0]: return 守卫校验，防止越界。\nclass UnionFind:\n    def __init__(self):\n        self.parent = {}\n    def find(self, x):\n        if x not in self.parent:\n            self.parent[x] = x\n        if self.parent[x] != x:\n            self.parent[x] = self.find(self.parent[x])\n        return self.parent[x]\n    def union(self, x, y):\n        root_x = self.find(x)\n        root_y = self.find(y)\n        if root_x != root_y:\n            self.parent[root_x] = root_y\nclass Solution:\n    def solve(self, board: List[List[str]]) -> None:\n        \"\"\"\n        Do not return anything, modify board in-place instead.\n        \"\"\"\n        if not board or not board[0]:\n            return\n        m = len(board)\n        n = len(board[0])\n        uf = UnionFind()\n        dummy = (-1, -1)\n        # 阶段 1：构建连通分量，边界 'O' 归入 dummy\n        for r in range(m):\n            for c in range(n):\n                if board[r][c] == \"O\":\n                    if r == 0 or r == (m - 1) or c == 0 or c == (n - 1):\n                        uf.union((r, c), dummy)\n                    for dr, dc in [(0, 1), (1, 0)]:\n                        nr, nc = r + dr, c + dc\n                        if nr < m and nc < n and board[nr][nc] == \"O\":\n                            uf.union((r, c), (nr, nc))\n        # 阶段 2：未与 dummy 连通的内部 'O' 替换为 'X'\n        for r in range(m):\n            for c in range(n):\n                if board[r][c] == \"O\":\n                    if uf.find((r, c)) != uf.find(dummy):\n                        board[r][c] = \"X\"\nif __name__ == '__main__':\n    sol = Solution()\n    b1 = [\n        [\"X\", \"X\", \"X\", \"X\"],\n        [\"X\", \"O\", \"O\", \"X\"],\n        [\"X\", \"X\", \"O\", \"X\"],\n        [\"X\", \"O\", \"X\", \"X\"]\n    ]\n    sol.solve(b1)\n    assert b1 == [\n        [\"X\", \"X\", \"X\", \"X\"],\n        [\"X\", \"X\", \"X\", \"X\"],\n        [\"X\", \"X\", \"X\", \"X\"],\n        [\"X\", \"O\", \"X\", \"X\"]\n    ]\n    b2 = [[\"X\"]]\n    sol.solve(b2)\n    assert b2 == [[\"X\"]]\n    print(\"All tests passed successfully!\")"
  },
  {
    "id": "990",
    "slug": "990-等式方程的可满足性",
    "title": "等式方程的可满足性",
    "category": "Hot100 补充",
    "difficulty": "中等",
    "topic": "并查集",
    "tags": [
      "Hot100 补充",
      "并查集",
      "图",
      "数组",
      "字符串"
    ],
    "sourcePath": "hot100/990.等式方程的可满足性.py",
    "lastUpdated": "2026-09-04",
    "leetcodeUrl": "https://leetcode.cn/problems/satisfiability-of-equality-equations/",
    "codePreview": "from typing import List\n# [需二刷]：并查集变量逻辑等价传递与矛盾校验（两遍扫描法）\n#\n# 思路：\n# 1. 采用动态字典并查集（Union-Find），节点直接为字符，免去数字映射心智负担。\n# 2. 第一遍扫描：遍历所有等式（\"==\"），将两侧变量 union 合并至同一集合。\n# 3. 第二遍扫描：遍历所有不等式（\"!=\"），通过 find 校验两侧变量：\n#    若其根节点相同，说明二者此前已被判定为相等，产生逻辑矛盾，立即返回 False。\n# 4. 若所有不等式均未产生冲突，返回 True。\n#\n# 时间复杂度：O(N * alpha(C)) ≈ O(N)，其中 N 为方程总数，C <= 26 为字符种类\n# 空间复杂度：O(C) ≈ O(1)，字典最多存储 26 个小写字母\n#\n# 易错点/误区：\n# 1. 单遍扫描漏洞：不能边合并边判断！若 \"!=\" 出现在 \"==\" 之前（如 [\"a!=b\",\"b==c\",\"c==a\"]），单遍判断无法察觉后续合并产生的矛盾。必须先全量合并等式，再校验不等式。\n# 2. 字符切片：eq[1:3] 为双字符运算符（\"==\" 或 \"!=\"），误写 eq[1:2] 只有 1 个字符。\n# 3. 字典动态初始化：在 find 时若字符未见过，需动态设置 parent[x] = x。\nclass UnionFind:\n    def __init__(self):\n        self.parent = {}\n    def find(self, x: str) -> str:\n        if x not in self.parent:\n            self.parent[x] = x\n        if self.parent[x] != x:\n            self.parent[x] = self.find(self.parent[x])\n        return self.parent[x]\n    def union(self, x: str, y: str):\n        root_x = self.find(x)\n        root_y = self.find(y)\n        if root_x != root_y:\n            self.parent[root_x] = root_y\nclass Solution:\n    def equationsPossible(self, equations: List[str]) -> bool:\n        uf = UnionFind()\n        # 第一遍：全量合并所有相等关系\n        for eq in equations:\n            if eq[1:3] == \"==\":\n                uf.union(eq[0], eq[3])\n        # 第二遍：校验所有不等关系是否存在矛盾\n        for eq in equations:\n            if eq[1:3] == \"!=\":\n                if uf.find(eq[0]) == uf.find(eq[3]):\n                    return False\n        return True\nif __name__ == '__main__':\n    sol = Solution()\n    assert sol.equationsPossible([\"a==b\", \"b!=a\"]) == False\n    assert sol.equationsPossible([\"b==a\", \"a==b\"]) == True\n    assert sol.equationsPossible([\"a==b\", \"b==c\", \"a==c\"]) == True\n    assert sol.equationsPossible([\"a==b\", \"b!=c\", \"c==a\"]) == False\n    assert sol.equationsPossible([\"c==c\", \"b==d\", \"x!=z\"]) == True\n    assert sol.equationsPossible([\"a!=a\"]) == False\n    print(\"All tests passed successfully!\")"
  },
  {
    "id": "684",
    "slug": "684-冗余连接",
    "title": "冗余连接",
    "category": "Hot100 补充",
    "difficulty": "中等",
    "topic": "深度优先搜索",
    "tags": [
      "Hot100 补充",
      "深度优先搜索",
      "广度优先搜索",
      "并查集",
      "图"
    ],
    "sourcePath": "hot100/684.冗余连接.py",
    "lastUpdated": "2026-09-04",
    "leetcodeUrl": "https://leetcode.cn/problems/redundant-connection/",
    "codePreview": "from typing import List\n# [需二刷]：并查集无向图成环检测经典模型\n#\n# 思路：\n# 1. 树是连通且无环的无向图，n 个节点必须恰好有 n-1 条边。输入给了 n 条边，必然存在一条冗余边使图成环。\n# 2. 初始化大小为 n + 1 的并查集（节点编号从 1 到 n）。\n# 3. 顺序遍历每条边 [u, v]，调用 find 检查两顶点的根节点：\n#    - 若 find(u) == find(v)：说明 u 和 v 在此之前已相互连通，当前边导致了环的闭合，直接作为冗余边返回。\n#    - 若 find(u) != find(v)：说明连接了两个原本独立的连通块，调用 union(u, v) 正常合并。\n#\n# 时间复杂度：O(n * alpha(n)) ≈ O(n)，其中 n 为边数/节点数\n# 空间复杂度：O(n)，并查集 parent 数组空间\n#\n# 易错点/误区：\n# 1. 编号边界：节点编号为 1 到 n，parent 数组必须开 n + 1，写 n 会触发 IndexError。\n# 2. 方法调用语法：调用 find(self.parent[x]) 必须使用圆括号，误用方括号 find[...] 会报 'method' object is not subscriptable。\n# 3. 变量名混淆：合并时是修改父指针 parent[root_x] = root_y，误写为 find[root_x] = root_y 会报错。\n# 4. 返回顺序：题目要求返回最后导致成环的边，顺序遍历时碰到的第一个成环边即为所求（因为后续边还没加入）。\nclass UnionFind:\n    def __init__(self, n: int):\n        self.parent = list(range(n + 1))\n    def find(self, x: int) -> int:\n        if self.parent[x] != x:\n            self.parent[x] = self.find(self.parent[x])\n        return self.parent[x]\n    def union(self, x: int, y: int):\n        root_x = self.find(x)\n        root_y = self.find(y)\n        if root_x != root_y:\n            self.parent[root_x] = root_y\nclass Solution:\n    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:\n        n = len(edges)\n        uf = UnionFind(n)\n        for u, v in edges:\n            if uf.find(u) == uf.find(v):\n                return [u, v]\n            else:\n                uf.union(u, v)\nif __name__ == '__main__':\n    sol = Solution()\n    assert sol.findRedundantConnection([[1, 2], [1, 3], [2, 3]]) == [2, 3]\n    assert sol.findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]) == [1, 4]\n    print(\"All tests passed successfully!\")"
  },
  {
    "id": "547",
    "slug": "547-省份数量",
    "title": "省份数量",
    "category": "Hot100 补充",
    "difficulty": "中等",
    "topic": "深度优先搜索",
    "tags": [
      "Hot100 补充",
      "深度优先搜索",
      "广度优先搜索",
      "并查集",
      "图"
    ],
    "sourcePath": "hot100/547.省份数量.py",
    "lastUpdated": "2026-09-04",
    "leetcodeUrl": "https://leetcode.cn/problems/number-of-provinces/",
    "codePreview": "from typing import List\n# [需二刷]：并查集 (Union-Find) 入门与连通分量计数母题\n#\n# 思路：\n# 1. 封装符合单一职责原则 (SRP) 的并查集类 UnionFind。\n# 2. 初始时每个城市为一个独立连通分量，parent[i] = i，连通分量数 count = n。\n# 3. 遍历邻接矩阵的上三角部分 (j > i)，若 isConnected[i][j] == 1 则执行 union(i, j)。\n# 4. union 操作中通过 find 查找根节点，若根不同则合并并将 count 减 1。\n# 5. find 操作中采用路径压缩，使后续查找摊还时间接近 O(1)。\n#\n# 时间复杂度：O(n^2 * alpha(n)) ≈ O(n^2)，遍历上三角 n*(n-1)/2 次\n# 空间复杂度：O(n)，并查集 parent 数组及递归栈\n#\n# 易错点/误区：\n# 1. 列表初始化：必须使用 list(range(n))，不能使用不可变的 range(n)。\n# 2. 根节点合并：合并时必须是 parent[root_x] = root_y，而非直接修改当前节点 parent[x] = y。\n# 3. DFS 写法误区：dfs(i) 内部若再次写 for i in range(n) 会覆盖形参并导致 RecursionError。\n# 4. 无向图对称性：只遍历上三角 j in range(i+1, n) 即可避免自身冗余合并与重复计算。\nclass UnionFind:\n    def __init__(self, n: int):\n        self.parent = list(range(n))\n        self.count = n\n    def find(self, x: int) -> int:\n        if self.parent[x] != x:\n            self.parent[x] = self.find(self.parent[x])\n        return self.parent[x]\n    def union(self, x: int, y: int):\n        root_x = self.find(x)\n        root_y = self.find(y)\n        if root_x != root_y:\n            self.parent[root_x] = root_y\n            self.count -= 1\nclass Solution:\n    def findCircleNum(self, isConnected: List[List[int]]) -> int:\n        # 解法一：并查集法（推荐，可动态加边）\n        n = len(isConnected)\n        uf = UnionFind(n)\n        for i in range(n):\n            for j in range(i + 1, n):\n                if isConnected[i][j] == 1:\n                    uf.union(i, j)\n        return uf.count\n        # 解法二：DFS 染色遍历（备选）\n        # n = len(isConnected)\n        # visited = set()\n        # province = 0\n        # def dfs(i: int):\n        #     visited.add(i)\n        #     for j in range(n):\n        #         if isConnected[i][j] == 1 and j not in visited:\n        #             dfs(j)\n        # for i in range(n):\n        #     if i not in visited:\n        #         dfs(i)\n        #         province += 1\n        # return province\nif __name__ == '__main__':\n    sol = Solution()\n    assert sol.findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]]) == 2\n    assert sol.findCircleNum([[1, 0, 0], [0, 1, 0], [0, 0, 1]]) == 3\n    print(\"All tests passed successfully!\")"
  },
  {
    "id": "743",
    "slug": "743-网络延迟时间",
    "title": "网络延迟时间",
    "category": "Hot100 补充",
    "difficulty": "中等",
    "topic": "深度优先搜索",
    "tags": [
      "Hot100 补充",
      "深度优先搜索",
      "广度优先搜索",
      "图",
      "最短路"
    ],
    "sourcePath": "hot100/743.网络延迟时间.py",
    "lastUpdated": "2026-09-04",
    "leetcodeUrl": "https://leetcode.cn/problems/network-delay-time/",
    "codePreview": "from typing import List \nimport heapq\nfrom collections import deque\n# [需二刷]：单源最短路径 Dijkstra 堆优化算法母题\n#\n# 思路：\n# 1. 邻接表建图存储有向加权边 graph[u] = [(v, w), ...]\n# 2. 维护距离数组 distance，初始全为无穷大，起点 distance[k] = 0\n# 3. 最小堆 pq 维护 (当前到达耗时 d, 当前节点 u)，利用贪心思想每次探索耗时最短的节点\n# 4. 出堆时若 d > distance[u] 则剪枝跳过，否则遍历邻居松弛距离并入堆\n# 5. 最终最大延迟时间为 max(distance[1:])，若存在 inf 说明存在不可达节点返回 -1\n#\n# 时间复杂度：O(E log E) / O(E log V)，其中 E 为边数，V 为节点数\n# 空间复杂度：O(V + E)，邻接表和堆及距离数组所需空间\n#\n# 易错点/误区：\n# 1. 节点编号从 1 到 n，开数组需开 n + 1，最后求最值必须切片 distance[1:]，若直接 max(distance) 会将 distance[0] 的 inf 误计入。\n# 2. heappush 时必须将耗时作为元组第一个元素 (d, u)，利用 Python 堆元组首项比对特性。\n# 3. 忘记过期剪枝 if d > distance[u]: continue 会导致冗余松弛和超时。\nclass Solution:\n    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:\n        # 1. 构建邻接表\n        graph = [[] for _ in range(n + 1)]\n        for u, v, w in times:\n            graph[u].append((v, w))\n        # 2. 初始化距离数组与最小堆\n        distance = [float('inf')] * (n + 1)\n        distance[k] = 0\n        pq = [(0, k)]\n        # 3. Dijkstra 核心循环\n        while pq:\n            d, u = heapq.heappop(pq)\n            # 过期剪枝\n            if d > distance[u]:\n                continue\n            # 松弛相邻边\n            for v, w in graph[u]:\n                new_d = d + w\n                if new_d < distance[v]:\n                    distance[v] = new_d\n                    heapq.heappush(pq, (new_d, v))\n        # 4. 统计答案（跳过 0 号占位节点）\n        ans = max(distance[1:])\n        return ans if ans != float('inf') else -1\nif __name__ == '__main__':\n    sol = Solution()\n    assert sol.networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2) == 2\n    assert sol.networkDelayTime([[1,2,1]], 2, 1) == 1\n    assert sol.networkDelayTime([[1,2,1]], 2, 2) == -1\n    print(\"All tests passed successfully!\")"
  },
  {
    "id": "22",
    "slug": "22-括号生成",
    "title": "括号生成",
    "category": "回溯",
    "difficulty": "中等",
    "topic": "有效性剪枝",
    "tags": [
      "回溯",
      "有效性剪枝",
      "字符串",
      "动态规划",
      "括号序列"
    ],
    "sourcePath": "hot100/10_回溯/22.括号生成.py",
    "lastUpdated": "2026-09-01",
    "leetcodeUrl": "https://leetcode.cn/problems/generate-parentheses/",
    "codePreview": "# 📌 需二刷：经典回溯 + 剪枝（卡特兰数问题）\n#\n# 思路：用 DFS 枚举所有可能的括号组合，用「剪枝」保证合法性：\n#   1. 左括号最多放 n 个（open_count < n 时才能加 '('）\n#   2. 右括号数不能超过左括号数（close_count < open_count 时才能加 ')'）\n#   满足以上两条，自然就不会出现非法串（如 \")()\"、\"())\"）\n#   当左右括号都用完时（各 n 个），收集答案\n#\n# 时间 O(Catalan(n))，即卡特兰数，约等于 O(4^n / √n)，空间 O(n)（递归栈深度）\n#\n# ⚠️ 易错点/误区：\n# 1. 右括号约束写 close_count < n：会生成 \"())( 这种右括号先于左括号出现的非法串\n#    正确：close_count < open_count，保证右括号出现时必有对应的左括号\n# 2. 忘记 return：终止 append 后继续执行会重复递归下去，产生重复答案或越界\n# 3. 字符串拼接用 join 而非 +：join 是分隔列表的，字符串追加直接用 + 或 path + '(' 即可\n# 4. DFS 签名缺少冒号/拼写：Python 函数定义末尾忘记加冒号，或变量名 open_count 拼成 opend_count\n# 5. path 列表回溯写法：若用列表回溯，递归后必须 path.pop() 撤销选择\nfrom typing import List\nclass Solution:\n    # 解法一：字符串参数隐式回溯（推荐，代码简洁）\n    def generateParenthesis(self, n: int) -> List[str]:\n        res = []\n        def dfs(open_count: int, close_count: int, current_string: str):\n            # 终止：左右括号都用完 → 找到一个合法答案\n            if open_count == n and close_count == n:\n                res.append(current_string)\n                return\n            # 分支1：还能加左括号 → 直接加左括号\n            if open_count < n:\n                dfs(open_count + 1, close_count, current_string + '(')\n            # 分支2：右括号数 < 左括号数 → 才能加右括号（关键剪枝，保证合法性）\n            if close_count < open_count:\n                dfs(open_count, close_count + 1, current_string + ')')\n        dfs(0, 0, '')\n        return res\n    # 解法二：显式列表 path 显式回溯（标准回溯模板）\n    def generateParenthesis_path(self, n: int) -> List[str]:\n        path = []\n        result = []\n        def backtrack(left: int, right: int):\n            if len(path) == 2 * n:\n                result.append(''.join(path))\n                return\n            if left < n:\n                path.append('(')\n                backtrack(left + 1, right)\n                path.pop()\n            if right < left:\n                path.append(')')\n                backtrack(left, right + 1)\n                path.pop()\n        backtrack(0, 0)\n        return result"
  },
  {
    "id": "32",
    "slug": "32-最长有效括号",
    "title": "最长有效括号",
    "category": "动态规划",
    "difficulty": "困难",
    "topic": "栈 / DP (跨越匹配)",
    "tags": [
      "动态规划",
      "栈 / DP (跨越匹配)",
      "栈",
      "字符串",
      "括号序列"
    ],
    "sourcePath": "hot100/15_动态规划/32.最长有效括号.py",
    "lastUpdated": "2026-09-01",
    "leetcodeUrl": "https://leetcode.cn/problems/longest-valid-parentheses/",
    "codePreview": "class Solution:\n    def longestValidParentheses(self, s: str) -> int:\n        n = len(s)\n        if n < 2:\n            return 0\n        dp = [0] * n\n        for i in range(1, n):\n            if s[i] == ')':\n                if s[i - 1] == '(':\n                    # 情况 1：形如 ...()\n                    dp[i] = (dp[i - 2] if i >= 2 else 0) + 2\n                else:\n                    # 情况 2：形如 ...))\n                    pre_idx = i - dp[i - 1] - 1\n                    if pre_idx >= 0 and s[pre_idx] == '(':\n                        dp[i] = dp[i - 1] + 2 + (dp[pre_idx - 1] if pre_idx >= 1 else 0)\n        return max(dp)"
  }
]
