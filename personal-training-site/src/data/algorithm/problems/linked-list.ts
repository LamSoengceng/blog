// 本文件由 scripts/generateAlgorithmData.mjs 自动生成，请勿手改。
import type { AlgorithmProblem } from '../types'

export const linkedListProblems: AlgorithmProblem[] = [
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
    },
    "codePreview": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n# 思路：双指针法\n# 两个指针分别从 A、B 链表出发，走完自己的链表后跳到对方的链表继续走\n# 因为两者总路程相同（lenA + lenB），所以一定会在交点相遇\n# 如果不相交，两者会同时到达 None，循环也会正常结束\n# 时间 O(m+n)  空间 O(1)\nclass Solution:\n    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:\n        a, b = headA, headB               # 双指针分别指向两条链表的头\n        while a != b:                      # 还没相遇就继续走\n            a = a.next if a else headB     # a 走到末尾就跳到 B 链表头\n            b = b.next if b else headA     # b 走到末尾就跳到 A 链表头\n        return a                           # 相遇点即交点，或 None（不相交）",
    "statement": "给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。\n\n图示两个链表在节点 c1 开始相交：\n\n题目数据 保证 整个链式结构中不存在环。\n\n注意，函数返回结果后，链表必须 保持其原始结构 。\n\n自定义评测：\n\n评测系统 的输入如下（你设计的程序 不适用 此输入）：\n\n\tintersectVal - 相交的起始节点的值。如果不存在相交节点，这一值为 0\n\n\tlistA - 第一个链表\n\n\tlistB - 第二个链表\n\n\tskipA - 在 listA 中（从头节点开始）跳到交叉节点的节点数\n\n\tskipB - 在 listB 中（从头节点开始）跳到交叉节点的节点数\n\n评测系统将根据这些输入创建链式数据结构，并将两个头节点 headA 和 headB 传递给你的程序。如果程序能够正确返回相交节点，那么你的解决方案将被 视作正确答案 。\n\n \n\n示例 1：\n\n输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3\n输出：Intersected at '8'\n解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。\n从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,6,1,8,4,5]。\n在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。\n— 请注意相交节点的值不为 1，因为在链表 A 和链表 B 之中值为 1 的节点 (A 中第二个节点和 B 中第三个节点) 是不同的节点。换句话说，它们在内存中指向两个不同的位置，而链表 A 和链表 B 中值为 8 的节点 (A 中第三个节点，B 中第四个节点) 在内存中指向相同的位置。\n\n \n\n示例 2：\n\n输入：intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1\n输出：Intersected at '2'\n解释：相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。\n从各自的表头开始算起，链表 A 为 [1,9,1,2,4]，链表 B 为 [3,2,4]。\n在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。\n\n示例 3：\n\n输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2\n输出：No intersection\n解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。\n由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。\n这两个链表不相交，因此返回 null 。\n\n \n\n提示：\n\n\tlistA 中节点数目为 m\n\n\tlistB 中节点数目为 n\n\n\t1 <= m, n <= 3 * 104\n\n\t1 <= Node.val <= 105\n\n\t0 <= skipA <= m\n\n\t0 <= skipB <= n\n\n\t如果 listA 和 listB 没有交点，intersectVal 为 0\n\n\t如果 listA 和 listB 有交点，intersectVal == listA[skipA] == listB[skipB]\n\n \n\n进阶：你能否设计一个时间复杂度 O(m + n) 、仅用 O(1) 内存的解决方案？"
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
    },
    "codePreview": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\n# 思路：栈（后进先出）\n# 把所有节点压入栈，再依次弹出重新串联，顺序自然就反了\n# 时间 O(n)  空间 O(n)（栈存了所有节点）\n# class Solution:\n#     def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:\n#         if not head:                     # 边界情况：空链表直接返回\n#             return None\n#         # 第一步：遍历链表，所有节点入栈\n#         stack = []\n#         cur = head\n#         while cur:\n#             stack.append(cur)\n#             cur = cur.next\n#         # 第二步：弹出栈顶作为新头，依次串起来\n#         new_head = stack.pop()           # 栈顶就是原链表的最后一个节点\n#         cur = new_head\n#         while stack:\n#             cur.next = stack.pop()       # 把弹出的节点接到 cur 后面\n#             cur = cur.next               # cur 往后走一步\n#         cur.next = None                  # ⚠️ 原头节点的 next 要断开，否则成环\n#         return new_head\n# 原地反转\nclass Solution:\n    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        cur = head\n        prev = None\n        while cur:\n            nxt = cur.next\n            cur.next = prev\n            prev = cur\n            cur = nxt\n        return prev",
    "statement": "给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。\n\n \n\n示例 1：\n\n输入：head = [1,2,3,4,5]\n输出：[5,4,3,2,1]\n\n示例 2：\n\n输入：head = [1,2]\n输出：[2,1]\n\n示例 3：\n\n输入：head = []\n输出：[]\n\n \n\n提示：\n\n\t链表中节点的数目范围是 [0, 5000]\n\n\t-5000 \n\n \n\n进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？"
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
    },
    "codePreview": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\n# 📌 需二刷：快慢指针 + 反转链表是链表题的核心技巧，务必熟练掌握\n#\n# 思路：快慢指针找中点 → 反转后半链表 → 逐一比较\n# 时间 O(n)，空间 O(1)\n#\n# ⚠️ 易错点/误区：\n# 1. 快慢指针的终止条件是 fast and fast.next，两个都要判断（偶数/奇数长度）\n# 2. 反转链表时要用临时变量 nxt 保存 slow.next，否则链会断\n# 3. 比较阶段用 right 控制循环，因为后半长度 ≤ 前半（奇数时中间节点归后半，反转后多一个）\n# 4. left, right = head, prev 是元组解包赋值，等价于分别赋值\nclass Solution:\n    def isPalindrome(self, head: Optional[ListNode]) -> bool:\n        # --- 法一：转数组（简单直观，空间 O(n)）---\n        # vals = []\n        # while head:\n        #     vals.append(head.val)\n        #     head = head.next\n        # return vals == vals[::-1]\n        # --- 法二：快慢指针 + 反转后半链表（最优，空间 O(1)）---\n        # 第一步：快慢指针找中点\n        # fast 走两步，slow 走一步，fast 到底时 slow 在中间\n        fast = slow = head\n        while fast and fast.next:\n            slow = slow.next\n            fast = fast.next.next\n        # 第二步：反转后半部分链表\n        # prev 最终指向反转后的头节点\n        prev = None\n        while slow:\n            nxt = slow.next      # 先保存下一个节点\n            slow.next = prev     # 反转指向\n            prev = slow          # prev 前进\n            slow = nxt           # slow 前进\n        # 第三步：从两端同时遍历比较\n        left, right = head, prev\n        while right:             # right 是较短的那半，用它控制循环\n            if left.val != right.val:\n                return False\n            left = left.next\n            right = right.next\n        return True",
    "statement": "给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。\n\n \n\n示例 1：\n\n输入：head = [1,2,2,1]\n输出：true\n\n示例 2：\n\n输入：head = [1,2]\n输出：false\n\n \n\n提示：\n\n\t链表中节点数目在范围[1, 105] 内\n\n\t0 <= Node.val <= 9\n\n \n\n进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？"
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
    },
    "codePreview": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n# 📌 需二刷：快慢指针判环（龟兔赛跑），和 234 题共用同一技巧\n#\n# 思路：快指针走2步，慢指针走1步，有环则必相遇；无环则快指针先到 None\n# 时间 O(n)，空间 O(1)\n#\n# ⚠️ 易错点/误区：\n# 1. 循环条件必须是 while fast and fast.next，不能写 while fast.next.next\n#    → 如果 fast 是 None，访问 .next 会报 AttributeError（本次踩坑）\n# 2. and 有短路特性：fast 为 None 时，fast.next 不会被执行，避免崩溃\n# 3. 不能用数组存节点然后判断，有环会导致 while 死循环，内存爆掉（本次踩坑）\n# 4. slow != fast 时应该继续循环，不能直接 return，否则第一轮就退出了（本次踩坑）\nclass Solution:\n    def hasCycle(self, head: Optional[ListNode]) -> bool:\n        slow = fast = head\n        while fast and fast.next:  # 保证 fast 能安全走两步\n            slow = slow.next       # 慢指针走 1 步\n            fast = fast.next.next  # 快指针走 2 步\n            if slow == fast:       # 相遇 → 有环\n                return True\n        return False               # fast 到底了 → 无环",
    "statement": "给你一个链表的头节点 head ，判断链表中是否有环。\n\n如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。\n\n如果链表中存在环 ，则返回 true 。 否则，返回 false 。\n\n \n\n示例 1：\n\n输入：head = [3,2,0,-4], pos = 1\n输出：true\n解释：链表中有一个环，其尾部连接到第二个节点。\n\n示例 2：\n\n输入：head = [1,2], pos = 0\n输出：true\n解释：链表中有一个环，其尾部连接到第一个节点。\n\n示例 3：\n\n输入：head = [1], pos = -1\n输出：false\n解释：链表中没有环。\n\n \n\n提示：\n\n\t链表中节点的数目范围是 [0, 104]\n\n\t-105 <= Node.val <= 105\n\n\tpos 为 -1 或者链表中的一个 有效索引 。\n\n \n\n进阶：你能用 O(1)（即，常量）内存解决此问题吗？"
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
    },
    "codePreview": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\n# 📌 需二刷：快慢指针找环入口的数学推导\n#\n# 思路：两步走 —— ① 快慢指针判环并找到相遇点 ② 双指针从 head 和相遇点同速走，再次相遇即入口\n# 时间 O(n)，空间 O(1)\n#\n# 关键推导：相遇时 fast 走了 2(a+b)，也走了 a+b+nL\n#   → a+b = nL → a = nL-b\n#   → 从 head 走 a 步 = 从相遇点走 a 步，都到达环入口\n#\n# ⚠️ 易错点/误区：\n# 1. return 的位置：return ans 要在内层 while 之后（找到入口才返回），\n#    return None 要在外层 while 之后（循环结束才确认无环）\n# 2. 口诀：return 放在\"让你知道答案的那个循环\"的外面\nclass Solution:\n    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        fast = slow = ans = head\n        while fast and fast.next:\n            slow = slow.next             # 慢指针走 1 步\n            fast = fast.next.next        # 快指针走 2 步\n            if slow == fast:             # 相遇，说明有环\n                while ans != slow:       # 找环入口：ans 从 head 出发，slow 从相遇点出发\n                    ans = ans.next\n                    slow = slow.next\n                return ans               # ans == slow 时就是环入口\n        return None                      # 外层循环结束，无环",
    "statement": "给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。\n\n如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。\n\n不允许修改 链表。\n\n \n\n示例 1：\n\n输入：head = [3,2,0,-4], pos = 1\n输出：返回索引为 1 的链表节点\n解释：链表中有一个环，其尾部连接到第二个节点。\n\n示例 2：\n\n输入：head = [1,2], pos = 0\n输出：返回索引为 0 的链表节点\n解释：链表中有一个环，其尾部连接到第一个节点。\n\n示例 3：\n\n输入：head = [1], pos = -1\n输出：返回 null\n解释：链表中没有环。\n\n \n\n提示：\n\n\t链表中节点的数目范围在范围 [0, 104] 内\n\n\t-105 <= Node.val <= 105\n\n\tpos 的值为 -1 或者链表中的一个有效索引\n\n \n\n进阶：你是否可以使用 O(1) 空间解决此题？"
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
    },
    "codePreview": "# Definition for singly-linked list.\nfrom typing import Optional\nclass ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n# 思路：利用两个链表已有序的特性，每次取较小的节点拼接到结果链表\n# 方法一：迭代（dummy 虚拟头节点 + 双指针） 时间 O(m+n)，空间 O(1)\n# 方法二：递归，每次比较头节点，较小的 .next 指向剩余部分的合并结果 时间 O(m+n)，空间 O(m+n)\n#\n# ⚠️ 易错点/误区：\n# 1. 初始化结果链表时不能用 ans = None，因为 None 没有 .next 属性\n#    → 用 dummy 虚拟头节点统一处理\n# 2. 尾部拼接剩余链表时注意 a/b 不要写反\n# 3. 递归解法中，终止条件必须放在最前面（否则访问 None.val 会报错）\n# 4. 递归解法中，return 的是当前节点本身（如 list1），不是 list1.next\nclass Solution:\n    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:\n        # ===== 方法一：迭代（dummy 虚拟头节点 + 双指针）=====\n        # a = list1\n        # b = list2\n        # dummy = ListNode(-1)          # 虚拟头节点，避免单独处理第一个节点\n        # cur = dummy                   # cur 追踪结果链表的尾部\n        # while a and b:                # 两个链表都还有节点时，比较取较小的\n        #     if a.val < b.val:\n        #         cur.next = a\n        #         a = a.next\n        #     else:\n        #         cur.next = b\n        #         b = b.next\n        #     cur = cur.next\n        # cur.next = a or b             # 剩余部分直接拼接（已有序，无需逐个比较）\n        # return dummy.next             # dummy.next 才是真正的头节点\n        # ===== 方法二：递归 =====\n        # 终止条件：某个链表为空，直接返回另一个\n        if not list1: return list2\n        if not list2: return list1\n        # 比较头节点，较小的作为当前头，其 next 指向剩余部分合并的结果\n        if list1.val < list2.val:\n            list1.next = self.mergeTwoLists(list1.next, list2)\n            return list1            # 返回当前节点本身（它是这一层的头）\n        else:\n            list2.next = self.mergeTwoLists(list1, list2.next)\n            return list2",
    "statement": "将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 \n\n \n\n示例 1：\n\n输入：l1 = [1,2,4], l2 = [1,3,4]\n输出：[1,1,2,3,4,4]\n\n示例 2：\n\n输入：l1 = [], l2 = []\n输出：[]\n\n示例 3：\n\n输入：l1 = [], l2 = [0]\n输出：[0]\n\n \n\n提示：\n\n\t两个链表的节点数目范围是 [0, 50]\n\n\t-100 \n\n\tl1 和 l2 均按 非递减顺序 排列"
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
    },
    "codePreview": "# Definition for singly-linked list.\nclass ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\nclass Solution:\n    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:\n        dummy = ListNode(0)\n        cur = dummy\n        carry = 0\n        while l1 or l2 or carry:\n            if l1:\n                v1 = l1.val\n            else:\n                v1 = 0\n            if l2:\n                v2 = l2.val\n            else:\n                v2 = 0\n            tmp = v1 + v2 + carry\n            cur.next = ListNode(tmp % 10)",
    "statement": "给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。\n\n请你将两个数相加，并以相同形式返回一个表示和的链表。\n\n你可以假设除了数字 0 之外，这两个数都不会以 0 开头。\n\n \n\n示例 1：\n\n输入：l1 = [2,4,3], l2 = [5,6,4]\n输出：[7,0,8]\n解释：342 + 465 = 807.\n\n示例 2：\n\n输入：l1 = [0], l2 = [0]\n输出：[0]\n\n示例 3：\n\n输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]\n输出：[8,9,9,9,0,0,0,1]\n\n \n\n提示：\n\n\t每个链表中的节点数在范围 [1, 100] 内\n\n\t0 <= Node.val <= 9\n\n\t题目数据保证列表表示的数字不含前导零"
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
    },
    "codePreview": "# Definition for singly-linked list.\nfrom typing import Optional\nclass ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\nclass Solution:\n    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:\n        # 📌 需二刷：快慢指针经典应用，哨兵节点最佳实践\n        #\n        # 思路：双指针（马拉松跑法）。使用 dummy 节点指向 head 解决删除头节点的边缘情况。\n        # 让 fast 先走 n 步，然后 fast 和 slow 一起走。当 fast 走到最后一个节点时，\n        # slow 刚好在要删除节点的前一个位置，通过 slow.next = slow.next.next 完成删除。\n        # 时间 O(L) L为链表长度，空间 O(1)\n        #\n        # ⚠️ 易错点/误区：\n        # 1. 链表题不加 dummy 节点很容易在「删除第一个节点」这种边界条件上抛出空指针异常。\n        # 2. 返回值切忌直接 return head，因为如果被删除的刚好是原 head，返回 head 就会拿到错误结果，必须 return dummy.next。\n        # 3. while 循环条件必须是 fast.next（让 fast 停在最后一个节点），而不是 fast（会越界走到 None，导致 slow 走到要删除的节点上）。\n        dummy = ListNode(0, head)\n        slow = dummy\n        fast = dummy\n        for i in range(n):\n            fast = fast.next\n        while fast.next:\n            slow = slow.next\n            fast = fast.next\n        slow.next = slow.next.next\n        return dummy.next",
    "statement": "给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。\n\n \n\n示例 1：\n\n输入：head = [1,2,3,4,5], n = 2\n输出：[1,2,3,5]\n\n示例 2：\n\n输入：head = [1], n = 1\n输出：[]\n\n示例 3：\n\n输入：head = [1,2], n = 1\n输出：[1]\n\n \n\n提示：\n\n\t链表中结点的数目为 sz\n\n\t1 <= sz <= 30\n\n\t0 <= Node.val <= 100\n\n\t1 <= n <= sz\n\n \n\n进阶：你能尝试使用一趟扫描实现吗？"
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
    },
    "codePreview": "# Definition for singly-linked list.\nfrom typing import Optional\nclass ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\nclass Solution:\n    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        # 📌 需二刷：链表指针的交响乐，三步重连法\n        #\n        # 思路：使用虚拟头节点 dummy 统一边界情况。每次迭代维护 pre, nodeA, nodeB 三个节点。\n        # 按照 nodeA.next = nodeB.next, pre.next = nodeB, nodeB.next = nodeA 的顺序重连。\n        # 时间 O(N)，空间 O(1)\n        #\n        # ⚠️ 易错点/误区：\n        # 1. 变量只换名不换指向：不能只是 `nodeA, nodeB = nodeB, nodeA` 交换变量名，必须切实修改节点的 `.next` 属性。\n        # 2. pre 更新错误：交换后局部变为 pre -> nodeB -> nodeA -> next，下一轮的 pre 应该停在 nodeA 上。\n        # 3. 忘记更新状态变量：nodeA 和 nodeB 必须在 while 循环内部第一步获取，否则一直在交换同一对节点。\n        dummy = ListNode(0, head)\n        pre = dummy\n        while pre.next and pre.next.next:   \n            nodeA = pre.next\n            nodeB = pre.next.next\n            nodeA.next = nodeB.next\n            pre.next = nodeB\n            nodeB.next = nodeA\n            pre = nodeA\n        return dummy.next",
    "statement": "给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。\n\n \n\n示例 1：\n\n输入：head = [1,2,3,4]\n输出：[2,1,4,3]\n\n示例 2：\n\n输入：head = []\n输出：[]\n\n示例 3：\n\n输入：head = [1]\n输出：[1]\n\n \n\n提示：\n\n\t链表中节点的数目在范围 [0, 100] 内\n\n\t0 <= Node.val <= 100"
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
    },
    "codePreview": "# Definition for singly-linked list.\nfrom typing import Optional\nclass ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\nclass Solution:\n    # 📌 需二刷：分组探路 + 局部链表翻转与缝合\n    #\n    # 思路：使用 dummy 哨兵节点，每次先用 fast 探路 k 步，若不足 k 步直接返回 dummy.next；\n    #       若满足 k 步，则将这 k 个节点（slow.next 到 fast）进行就地翻转，并顺便缝合到下一组（pre 初始为 fast.next）；\n    #       翻转完成后将 slow.next 指向新头部 pre，并更新 slow 和 fast 准备下一轮。\n    # 时间 O(N)，空间 O(1)\n    #\n    # ⚠️ 易错点/误区：\n    # 1. 遍历方向误区：单链表没有前驱指针，无法「从后往前」倒着找节点。必须「人从前往后走（curr 从 slow.next 到 fast），但在行进中把箭头掉头指向 pre」。\n    # 2. 缝合初始值：局部翻转时，首个节点（原 slow.next）翻转后要接上后续链表，因此 pre 的初始值必须是下一组的头节点 fast.next，不能是 None。\n    # 3. curr 起点选错：待翻转的第一个节点是 slow.next，误写为 curr = slow 会把上一组的尾巴（甚至 dummy）卷入翻转。\n    # 4. 返回值错误：探路不足 k 个或全部结束时，必须返回整条链表的新头 dummy.next，而不是 slow.next。\n    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:\n        dummy = ListNode(0, head)\n        slow = dummy\n        fast = dummy\n        while True:\n            # 1. 探路：检查剩余节点是否满足 k 个\n            for i in range(k):\n                if fast.next is None:\n                    return dummy.next\n                fast = fast.next\n            # 2. 准备局部翻转\n            start = slow.next      # 本组翻转前的头节点（翻转后变成尾节点）\n            pre = fast.next        # 关键缝合点：本组翻转后尾巴要连上下一组的开头\n            curr = slow.next       # 从本组第一个节点开始往后走并调转箭头\n            # 3. 翻转本组的 k 个节点\n            for j in range(k):\n                nxt = curr.next\n                curr.next = pre\n                pre = curr\n                curr = nxt\n            # 4. 缝合前置节点：让 slow 的 next 指向翻转后的新头节点 pre\n            slow.next = pre\n            # 5. 指针复位，准备下一组\n            slow = start\n            fast = slow",
    "statement": "给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。\n\nk 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。\n\n你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。\n\n \n\n示例 1：\n\n输入：head = [1,2,3,4,5], k = 2\n输出：[2,1,4,3,5]\n\n示例 2：\n\n输入：head = [1,2,3,4,5], k = 3\n输出：[3,2,1,4,5]\n\n \n\n提示：\n\n\t链表中的节点数目为 n\n\n\t1 <= k <= n <= 5000\n\n\t0 <= Node.val <= 1000\n\n \n\n进阶：你可以设计一个只用 O(1) 额外内存空间的算法解决此问题吗？"
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
    },
    "codePreview": "# Definition for a Node.\nfrom typing import Optional\nclass Node:\n    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):\n        self.val = int(x)\n        self.next = next\n        self.random = random\n# 📌 需二刷：哈希表映射新旧节点 + 两次遍历深拷贝\n#\n# 思路：\n# 1. 第一遍遍历：只复制节点值，建立 {原节点: 新节点} 的映射字典 d，并预置 d[None] = None 简化边界处理。\n# 2. 第二遍遍历：根据原节点的 next/random 连接新节点：d[cur].next = d[cur.next], d[cur].random = d[cur.random]。\n# 时间 O(N)，空间 O(N)\n#\n# ⚠️ 易错点/误区：\n# 1. 深拷贝混淆：第二轮连接时若误写成 d[cur].next = cur.next，新节点会指向原链表里的旧节点，破坏深拷贝。必须通过 d[cur.next] 和 d[cur.random] 连接对应的新节点。\n# 2. 空指针越界：若未在哈希表中预置 d[None] = None，访问为 None 的 random 或 next 时会报 KeyError。\nclass Solution:\n    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':\n        if not head:\n            return None\n        d = {None: None}\n        cur = head\n        while cur:\n            d[cur] = Node(cur.val)\n            cur = cur.next\n        cur = head\n        while cur:\n            d[cur].next = d[cur.next]\n            d[cur].random = d[cur.random]\n            cur = cur.next\n        return d[head]",
    "statement": "给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。\n\n构造这个链表的 深拷贝。 深拷贝应该正好由 n 个 全新 节点组成，其中每个新节点的值都设为其对应的原节点的值。新节点的 next 指针和 random 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。复制链表中的指针都不应指向原链表中的节点 。\n\n例如，如果原链表中有 X 和 Y 两个节点，其中 X.random --> Y 。那么在复制链表中对应的两个节点 x 和 y ，同样有 x.random --> y 。\n\n返回复制链表的头节点。\n\n用一个由 n 个节点组成的链表来表示输入/输出中的链表。每个节点用一个 [val, random_index] 表示：\n\n\tval：一个表示 Node.val 的整数。\n\n\trandom_index：随机指针指向的节点索引（范围从 0 到 n-1）；如果不指向任何节点，则为  null 。\n\n你的代码 只 接受原链表的头节点 head 作为传入参数。\n\n \n\n示例 1：\n\n输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]\n输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]\n\n示例 2：\n\n输入：head = [[1,1],[2,1]]\n输出：[[1,1],[2,1]]\n\n示例 3：\n\n输入：head = [[3,null],[3,0],[3,null]]\n输出：[[3,null],[3,0],[3,null]]\n\n \n\n提示：\n\n\t0 <= n <= 1000\n\n\t-104 <= Node.val <= 104\n\n\tNode.random 为 null 或指向链表中的节点。"
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
    },
    "codePreview": "# Definition for singly-linked list.\nfrom typing import Optional\nclass ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\nclass Solution:\n    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        # 1. 递归基\n        if not head or not head.next:\n            return head\n        # 辅助函数 1：快慢指针找中点并断开\n        def get_mid_and_cut(head):\n            slow, fast = head, head.next\n            while fast and fast.next:\n                slow = slow.next\n                fast = fast.next.next\n            mid = slow.next\n            slow.next = None  # 核心：必须剪断\n            return mid\n        # 辅助函数 2：合并两个有序链表（第 21 题）\n        def merge(list1, list2):\n            dummy = ListNode(0)\n            cur = dummy\n            while list1 and list2:\n                if list1.val <= list2.val:\n                    cur.next = list1\n                    list1 = list1.next\n                else:\n                    cur.next = list2\n                    list2 = list2.next\n                cur = cur.next\n            cur.next = list1 if list1 else list2\n            return dummy.next\n        # 2. 分割\n        mid = get_mid_and_cut(head)\n        # 3. 递归排序\n        left = self.sortList(head)\n        right = self.sortList(mid)\n        # 4. 合并\n        return merge(left, right)",
    "statement": "给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。\n\n \n\n示例 1：\n\n输入：head = [4,2,1,3]\n输出：[1,2,3,4]\n\n示例 2：\n\n输入：head = [-1,5,3,4,0]\n输出：[-1,0,3,4,5]\n\n示例 3：\n\n输入：head = []\n输出：[]\n\n \n\n提示：\n\n\t链表中节点的数目在范围 [0, 5 * 104] 内\n\n\t-105 <= Node.val <= 105\n\n \n\n进阶：你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？"
  }
]
