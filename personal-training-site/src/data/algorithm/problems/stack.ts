// 本文件由 scripts/generateAlgorithmData.mjs 自动生成，请勿手改。
import type { AlgorithmProblem } from '../types'

export const stackProblems: AlgorithmProblem[] = [
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
    },
    "codePreview": "class Solution:\n    # 思路：栈——左括号入栈，遇右括号弹栈顶检查是否配对\n    # 时间 O(n)，空间 O(n)\n    #\n    # ⚠️ 易错点/误区：\n    # 1. if char == '(' or '[' or '{' 永远为 True！非空字符串是 truthy\n    #    正确写法：if char in '([{'\n    # 2. 字典方向要对：key 是右括号，value 是左括号（因为遇到右括号时查表）\n    # 3. pop 之前必须先检查栈是否为空，否则空栈 pop 报 IndexError\n    # 4. 最终检查 stack 是否为空要放在 for 循环外面，放里面会每次迭代都判断\n    def isValid(self, s: str) -> bool:\n        stack = []\n        matchpair = {                       # 右括号 → 对应的左括号\n            '}':'{',\n            ']':'[',\n            ')':'('\n        }\n        for char in s:\n            if char in '([{':               # 左括号 → 入栈\n                stack.append(char)\n            else:                           # 右括号 → 弹栈检查配对\n                if not stack:               # 栈空说明多出右括号\n                    return False\n                top = stack.pop()\n                if top != matchpair[char]:  # 栈顶和当前右括号不配对\n                    return False\n        return not stack                    # 栈空=有效，栈非空=多出左括号",
    "statement": "给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。\n\n有效字符串需满足：\n\n\t左括号必须用相同类型的右括号闭合。\n\n\t左括号必须以正确的顺序闭合。\n\n\t每个右括号都有一个对应的相同类型的左括号。\n\n \n\n示例 1：\n\n输入：s = \"()\"\n\n输出：true\n\n示例 2：\n\n输入：s = \"()[]{}\"\n\n输出：true\n\n示例 3：\n\n输入：s = \"(]\"\n\n输出：false\n\n示例 4：\n\n输入：s = \"([])\"\n\n输出：true\n\n示例 5：\n\n输入：s = \"([)]\"\n\n输出：false\n\n \n\n提示：\n\n\t1 <= s.length <= 104\n\n\ts 仅由括号 '()[]{}' 组成"
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
    },
    "codePreview": "#\n# 思路：用一个辅助栈 minval 同步记录每一层的最小值\n#       两个栈同进同退，minval 栈顶永远是当前最小值\n# 时间 O(1)（每个操作），空间 O(n)\n#\n# ⚠️ 易错点/误区：\n# 1. __init__ 中变量要用 self.，否则只是局部变量，其他方法访问不到\n# 2. 查看栈顶用 [-1]，不要用 pop()，pop 会删除元素\n# 3. minval 每次 push 都要追加一个值（取 min），保持和 stack 等长\n#\nclass MinStack:\n    def __init__(self):\n        self.stack = []       # 主栈：存所有元素\n        self.minval = []      # 辅助栈：每一层对应的最小值\n    def push(self, val: int) -> None:\n        self.stack.append(val)\n        if self.minval:\n            # 取 val 和当前最小值中较小的，压入辅助栈\n            self.minval.append(min(val, self.minval[-1]))\n        else:\n            # 第一个元素，直接压入\n            self.minval.append(val)\n    def pop(self) -> None:\n        # 两个栈同时弹出，最小值自动回退\n        self.stack.pop()\n        self.minval.pop()\n    def top(self) -> int:\n        return self.stack[-1]\n    def getMin(self) -> int:\n        # minval 栈顶就是当前最小值\n        return self.minval[-1]\n# Your MinStack object will be instantiated and called as such:\n# obj = MinStack()\n# obj.push(val)\n# obj.pop()\n# param_3 = obj.top()\n# param_4 = obj.getMin()",
    "statement": "设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。\n\n实现 MinStack 类:\n\n\tMinStack() 初始化堆栈对象。\n\n\tvoid push(int value) 将元素 value 推入堆栈。\n\n\tvoid pop() 删除堆栈顶部的元素。\n\n\tint top() 获取堆栈顶部的元素。\n\n\tint getMin() 获取堆栈中的最小元素。\n\n \n\n示例 1:\n\n输入：\n[\"MinStack\",\"push\",\"push\",\"push\",\"getMin\",\"pop\",\"top\",\"getMin\"]\n[[],[-2],[0],[-3],[],[],[],[]]\n\n输出：\n[null,null,null,null,-3,null,0,-2]\n\n解释：\nMinStack minStack = new MinStack();\nminStack.push(-2);\nminStack.push(0);\nminStack.push(-3);\nminStack.getMin();   --> 返回 -3.\nminStack.pop();\nminStack.top();      --> 返回 0.\nminStack.getMin();   --> 返回 -2.\n\n \n\n提示：\n\n\t-231 <= val <= 231 - 1\n\n\tpop、top 和 getMin 操作总是在 非空栈 上调用\n\n\tpush, pop, top, and getMin最多被调用 3 * 104 次"
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
      "\udca1 面试推荐：双栈法（本解法）",
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
    },
    "codePreview": "# 📌 需二刷：双栈解码嵌套结构\n#\n# 思路：用两个栈分别存数字和字符串，遇到 [ 压栈保存上下文，遇到 ] 弹栈拼接结果\n# 时间 O(n)，n 为解码后字符串长度（每个字符最多入栈出栈一次）\n# 空间 O(n)，栈的深度取决于嵌套层数\n#\n# 💡 面试推荐：双栈法（本解法）\n#   - 思路直观，容易讲清楚\n#   - 面试官容易追问：如何处理多位数字？→ cur_num * 10 + int(char)\n#   - 另一种方法是递归，但栈的写法更不容易出错，推荐优先用栈\n#\n# ⚠️ 易错点/误区：\n# 1. 数字可能是多位的（如 \"12[a]\"），不能直接 cur_num = int(char)，\n#    要用 cur_num = cur_num * 10 + int(char) 来逐位拼接\n# 2. 遇到字母时要用 cur_str += char（拼接），不能用 = （会覆盖之前的字母）\n# 3. ] 弹栈时的拼接顺序：letterstack.pop() + numstack.pop() * cur_str\n#    是「之前的字符串 + 重复次数 × 当前字符串」，顺序不能反\n# 4. 压栈时机是遇到 [，不是遇到数字或字母时\nclass Solution:\n    def decodeString(self, s: str) -> str:\n        numstack = []       # 存数字（重复次数）\n        letterstack = []    # 存字符串（进入 [ 之前的上下文）\n        cur_num = 0         # 当前正在拼的数字\n        cur_str = ''        # 当前正在拼的字符串\n        for char in s:\n            if char.isdigit():\n                # 处理多位数字，如 \"12\" → 1*10+2 = 12\n                cur_num = cur_num * 10 + int(char)\n            elif char == '[':\n                # 遇到 [：保存当前上下文到栈，然后重置\n                numstack.append(cur_num)\n                letterstack.append(cur_str)\n                cur_num = 0\n                cur_str = ''\n            elif char == ']':\n                # 遇到 ]：弹栈，拼接 = 之前的字符串 + 重复次数 × 当前字符串\n                cur_str = letterstack.pop() + numstack.pop() * cur_str\n            else:\n                # 普通字母，拼接到当前字符串\n                cur_str += char\n        return cur_str",
    "statement": "给定一个经过编码的字符串，返回它解码后的字符串。\n\n编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。\n\n你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。\n\n此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。\n\n测试用例保证输出的长度不会超过 105。\n\n \n\n示例 1：\n\n输入：s = \"3[a]2[bc]\"\n输出：\"aaabcbc\"\n\n示例 2：\n\n输入：s = \"3[a2[c]]\"\n输出：\"accaccacc\"\n\n示例 3：\n\n输入：s = \"2[abc]3[cd]ef\"\n输出：\"abcabccdcdcdef\"\n\n示例 4：\n\n输入：s = \"abc3[cd]xyz\"\n输出：\"abccdcdcdxyz\"\n\n \n\n提示：\n\n\t1 <= s.length <= 30\n\n\ts 由小写英文字母、数字和方括号 '[]' 组成\n\n\ts 保证是一个 有效 的输入。\n\n\ts 中所有整数的取值范围为 [1, 300]"
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
    },
    "codePreview": "# 📌 需二刷：单调栈模板题\n#\n# 思路：维护一个单调递减栈（栈底到栈顶递减），栈中存下标。\n#       遍历温度数组，当前温度 > 栈顶温度时，说明栈顶那天等到了更高温度，\n#       弹出栈顶并计算等待天数（当前下标 - 栈顶下标）。\n# 时间 O(n)，空间 O(n)\n#\n# ⚠️ 易错点/误区：\n# 1. result 要用 [0]*n 初始化，不能用 []，因为后面要通过下标赋值\n# 2. 比较温度时是 temperatures[stack[-1]]（栈顶下标对应的温度），\n#    不是 temperatures[-1]（温度数组的最后一个元素）\n# 3. 栈里存的是下标而非温度值，一个下标三个用途：取值、算距离、定位 result\nclass Solution:\n    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:\n        stack = []  # 单调递减栈，存下标\n        result = [0] * len(temperatures)  # 初始化为0，等不到更高温度的位置自然为0\n        for i in range(len(temperatures)):\n            # 当前温度比栈顶大 → 栈顶那天等到了更高温度\n            while stack and temperatures[i] > temperatures[stack[-1]]:\n                idx = stack.pop()\n                result[idx] = i - idx  # 等待天数 = 当前下标 - 栈顶下标\n            stack.append(i)  # 当前下标入栈，等待未来更高温度\n        return result",
    "statement": "给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。\n\n \n\n示例 1:\n\n输入: temperatures = [73,74,75,71,69,72,76,73]\n输出: [1,1,4,2,1,1,0,0]\n\n示例 2:\n\n输入: temperatures = [30,40,50,60]\n输出: [1,1,1,0]\n\n示例 3:\n\n输入: temperatures = [30,60,90]\n输出: [1,1,0]\n\n \n\n提示：\n\n\t1 <= temperatures.length <= 105\n\n\t30 <= temperatures[i] <= 100"
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
    },
    "codePreview": "# 📌 需二刷：单调栈求最大矩形（递增栈 + 哨兵技巧）\n#\n# 思路：维护一个递增栈（存下标），当新柱子比栈顶矮时触发弹栈。\n#       被弹柱子的高度能形成的矩形，左边界是左边第一个更矮的（新栈顶），\n#       右边界是当前柱子 i。宽度 = right - left - 1。\n#       末尾加高度 0 的哨兵强制清空栈，省去收尾循环。\n# 时间 O(n)，空间 O(n)\n#\n# ⚠️ 易错点/误区：\n# 1. left = stack[-1] if stack else -1 ——栈空时左边界为 -1，宽度才能算对\n# 2. right = i 是当前下标，不是被弹柱子的下标 idx\n# 3. 哨兵高度为 0，比所有柱子矮，能强制弹出所有剩余柱子\n# 4. 弹栈时算的面积是 heights[idx] × width，不是 heights[i]\nclass Solution:\n    def largestRectangleArea(self, heights: List[int]) -> int:\n        stack = []               # 递增栈，存下标，对应高度递增\n        result = 0\n        heights = heights + [0]  # 哨兵：强制清空栈，省去收尾逻辑\n        for i in range(len(heights)):\n            # 新柱子比栈顶矮 → 栈顶柱子的右边界确定，弹栈算面积\n            while stack and heights[i] < heights[stack[-1]]:\n                idx = stack.pop()                     # 被弹的柱子\n                left = stack[-1] if stack else -1     # 左边第一个更矮的\n                right = i                              # 右边第一个更矮的\n                width = right - left - 1               # 被弹柱子能覆盖的宽度\n                result = max(result, width * heights[idx])\n            stack.append(i)   # 当前柱子入栈（递增关系已恢复）\n        return result",
    "statement": "给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。\n\n求在该柱状图中，能够勾勒出来的矩形的最大面积。\n\n \n\n示例 1:\n\n输入：heights = [2,1,5,6,2,3]\n输出：10\n解释：最大的矩形为图中红色区域，面积为 10\n\n示例 2：\n\n输入： heights = [2,4]\n输出： 4\n\n \n\n提示：\n\n\t1 5\n\n\t0 4"
  }
]
