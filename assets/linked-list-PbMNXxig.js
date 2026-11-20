const n={"160-相交链表":{codePreview:`# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
# 思路：双指针法
# 两个指针分别从 A、B 链表出发，走完自己的链表后跳到对方的链表继续走
# 因为两者总路程相同（lenA + lenB），所以一定会在交点相遇
# 如果不相交，两者会同时到达 None，循环也会正常结束
# 时间 O(m+n)  空间 O(1)
class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        a, b = headA, headB               # 双指针分别指向两条链表的头
        while a != b:                      # 还没相遇就继续走
            a = a.next if a else headB     # a 走到末尾就跳到 B 链表头
            b = b.next if b else headA     # b 走到末尾就跳到 A 链表头
        return a                           # 相遇点即交点，或 None（不相交）`,statement:`给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。

图示两个链表在节点 c1 开始相交：

题目数据 保证 整个链式结构中不存在环。

注意，函数返回结果后，链表必须 保持其原始结构 。

自定义评测：

评测系统 的输入如下（你设计的程序 不适用 此输入）：

- intersectVal - 相交的起始节点的值。如果不存在相交节点，这一值为 0

- listA - 第一个链表

- listB - 第二个链表

- skipA - 在 listA 中（从头节点开始）跳到交叉节点的节点数

- skipB - 在 listB 中（从头节点开始）跳到交叉节点的节点数

评测系统将根据这些输入创建链式数据结构，并将两个头节点 headA 和 headB 传递给你的程序。如果程序能够正确返回相交节点，那么你的解决方案将被 视作正确答案 。

 

示例 1：

输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
输出：Intersected at '8'
解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,6,1,8,4,5]。
在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
— 请注意相交节点的值不为 1，因为在链表 A 和链表 B 之中值为 1 的节点 (A 中第二个节点和 B 中第三个节点) 是不同的节点。换句话说，它们在内存中指向两个不同的位置，而链表 A 和链表 B 中值为 8 的节点 (A 中第三个节点，B 中第四个节点) 在内存中指向相同的位置。

 

示例 2：

输入：intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
输出：Intersected at '2'
解释：相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [1,9,1,2,4]，链表 B 为 [3,2,4]。
在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。

示例 3：

输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
输出：No intersection
解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。
由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
这两个链表不相交，因此返回 null 。

 

提示：

- listA 中节点数目为 m

- listB 中节点数目为 n

- 1 <= m, n <= 3 * 10^4

- 1 <= Node.val <= 10^5

- 0 <= skipA <= m

- 0 <= skipB <= n

- 如果 listA 和 listB 没有交点，intersectVal 为 0

- 如果 listA 和 listB 有交点，intersectVal == listA[skipA] == listB[skipB]

 

进阶：你能否设计一个时间复杂度 O(m + n) 、仅用 O(1) 内存的解决方案？`},"206-反转链表":{codePreview:`# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# 思路：栈（后进先出）
# 把所有节点压入栈，再依次弹出重新串联，顺序自然就反了
# 时间 O(n)  空间 O(n)（栈存了所有节点）
# class Solution:
#     def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
#         if not head:                     # 边界情况：空链表直接返回
#             return None
#         # 第一步：遍历链表，所有节点入栈
#         stack = []
#         cur = head
#         while cur:
#             stack.append(cur)
#             cur = cur.next
#         # 第二步：弹出栈顶作为新头，依次串起来
#         new_head = stack.pop()           # 栈顶就是原链表的最后一个节点
#         cur = new_head
#         while stack:
#             cur.next = stack.pop()       # 把弹出的节点接到 cur 后面
#             cur = cur.next               # cur 往后走一步
#         cur.next = None                  # ⚠️ 原头节点的 next 要断开，否则成环
#         return new_head
# 原地反转
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        cur = head
        prev = None
        while cur:
            nxt = cur.next
            cur.next = prev
            prev = cur
            cur = nxt
        return prev`,statement:`给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

 

示例 1：

输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]

示例 2：

输入：head = [1,2]
输出：[2,1]

示例 3：

输入：head = []
输出：[]

 

提示：

- 链表中节点的数目范围是 [0, 5000]

- -5000 

 

进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？`},"234-回文链表":{codePreview:`# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# 📌 需二刷：快慢指针 + 反转链表是链表题的核心技巧，务必熟练掌握
#
# 思路：快慢指针找中点 → 反转后半链表 → 逐一比较
# 时间 O(n)，空间 O(1)
#
# ⚠️ 易错点/误区：
# 1. 快慢指针的终止条件是 fast and fast.next，两个都要判断（偶数/奇数长度）
# 2. 反转链表时要用临时变量 nxt 保存 slow.next，否则链会断
# 3. 比较阶段用 right 控制循环，因为后半长度 ≤ 前半（奇数时中间节点归后半，反转后多一个）
# 4. left, right = head, prev 是元组解包赋值，等价于分别赋值
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        # --- 法一：转数组（简单直观，空间 O(n)）---
        # vals = []
        # while head:
        #     vals.append(head.val)
        #     head = head.next
        # return vals == vals[::-1]
        # --- 法二：快慢指针 + 反转后半链表（最优，空间 O(1)）---
        # 第一步：快慢指针找中点
        # fast 走两步，slow 走一步，fast 到底时 slow 在中间
        fast = slow = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        # 第二步：反转后半部分链表
        # prev 最终指向反转后的头节点
        prev = None
        while slow:
            nxt = slow.next      # 先保存下一个节点
            slow.next = prev     # 反转指向
            prev = slow          # prev 前进
            slow = nxt           # slow 前进
        # 第三步：从两端同时遍历比较
        left, right = head, prev
        while right:             # right 是较短的那半，用它控制循环
            if left.val != right.val:
                return False
            left = left.next
            right = right.next
        return True`,statement:`给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。

 

示例 1：

输入：head = [1,2,2,1]
输出：true

示例 2：

输入：head = [1,2]
输出：false

 

提示：

- 链表中节点数目在范围[1, 10^5] 内

- 0 <= Node.val <= 9

 

进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？`},"141-环形链表":{codePreview:`# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
# 📌 需二刷：快慢指针判环（龟兔赛跑），和 234 题共用同一技巧
#
# 思路：快指针走2步，慢指针走1步，有环则必相遇；无环则快指针先到 None
# 时间 O(n)，空间 O(1)
#
# ⚠️ 易错点/误区：
# 1. 循环条件必须是 while fast and fast.next，不能写 while fast.next.next
#    → 如果 fast 是 None，访问 .next 会报 AttributeError（本次踩坑）
# 2. and 有短路特性：fast 为 None 时，fast.next 不会被执行，避免崩溃
# 3. 不能用数组存节点然后判断，有环会导致 while 死循环，内存爆掉（本次踩坑）
# 4. slow != fast 时应该继续循环，不能直接 return，否则第一轮就退出了（本次踩坑）
class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        slow = fast = head
        while fast and fast.next:  # 保证 fast 能安全走两步
            slow = slow.next       # 慢指针走 1 步
            fast = fast.next.next  # 快指针走 2 步
            if slow == fast:       # 相遇 → 有环
                return True
        return False               # fast 到底了 → 无环`,statement:`给你一个链表的头节点 head ，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。

如果链表中存在环 ，则返回 true 。 否则，返回 false 。

 

示例 1：

输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。

示例 2：

输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。

示例 3：

输入：head = [1], pos = -1
输出：false
解释：链表中没有环。

 

提示：

- 链表中节点的数目范围是 [0, 10^4]

- -10^5 <= Node.val <= 10^5

- pos 为 -1 或者链表中的一个 有效索引 。

 

进阶：你能用 O(1)（即，常量）内存解决此问题吗？`},"142-环形链表-ii":{codePreview:`# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
# 📌 需二刷：快慢指针找环入口的数学推导
#
# 思路：两步走 —— ① 快慢指针判环并找到相遇点 ② 双指针从 head 和相遇点同速走，再次相遇即入口
# 时间 O(n)，空间 O(1)
#
# 关键推导：相遇时 fast 走了 2(a+b)，也走了 a+b+nL
#   → a+b = nL → a = nL-b
#   → 从 head 走 a 步 = 从相遇点走 a 步，都到达环入口
#
# ⚠️ 易错点/误区：
# 1. return 的位置：return ans 要在内层 while 之后（找到入口才返回），
#    return None 要在外层 while 之后（循环结束才确认无环）
# 2. 口诀：return 放在"让你知道答案的那个循环"的外面
class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        fast = slow = ans = head
        while fast and fast.next:
            slow = slow.next             # 慢指针走 1 步
            fast = fast.next.next        # 快指针走 2 步
            if slow == fast:             # 相遇，说明有环
                while ans != slow:       # 找环入口：ans 从 head 出发，slow 从相遇点出发
                    ans = ans.next
                    slow = slow.next
                return ans               # ans == slow 时就是环入口
        return None                      # 外层循环结束，无环`,statement:`给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

不允许修改 链表。

 

示例 1：

输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。

示例 2：

输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。

示例 3：

输入：head = [1], pos = -1
输出：返回 null
解释：链表中没有环。

 

提示：

- 链表中节点的数目范围在范围 [0, 10^4] 内

- -10^5 <= Node.val <= 10^5

- pos 的值为 -1 或者链表中的一个有效索引

 

进阶：你是否可以使用 O(1) 空间解决此题？`},"21-合并两个有序链表":{codePreview:`# Definition for singly-linked list.
from typing import Optional
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
# 思路：利用两个链表已有序的特性，每次取较小的节点拼接到结果链表
# 方法一：迭代（dummy 虚拟头节点 + 双指针） 时间 O(m+n)，空间 O(1)
# 方法二：递归，每次比较头节点，较小的 .next 指向剩余部分的合并结果 时间 O(m+n)，空间 O(m+n)
#
# ⚠️ 易错点/误区：
# 1. 初始化结果链表时不能用 ans = None，因为 None 没有 .next 属性
#    → 用 dummy 虚拟头节点统一处理
# 2. 尾部拼接剩余链表时注意 a/b 不要写反
# 3. 递归解法中，终止条件必须放在最前面（否则访问 None.val 会报错）
# 4. 递归解法中，return 的是当前节点本身（如 list1），不是 list1.next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        # ===== 方法一：迭代（dummy 虚拟头节点 + 双指针）=====
        # a = list1
        # b = list2
        # dummy = ListNode(-1)          # 虚拟头节点，避免单独处理第一个节点
        # cur = dummy                   # cur 追踪结果链表的尾部
        # while a and b:                # 两个链表都还有节点时，比较取较小的
        #     if a.val < b.val:
        #         cur.next = a
        #         a = a.next
        #     else:
        #         cur.next = b
        #         b = b.next
        #     cur = cur.next
        # cur.next = a or b             # 剩余部分直接拼接（已有序，无需逐个比较）
        # return dummy.next             # dummy.next 才是真正的头节点
        # ===== 方法二：递归 =====
        # 终止条件：某个链表为空，直接返回另一个
        if not list1: return list2
        if not list2: return list1
        # 比较头节点，较小的作为当前头，其 next 指向剩余部分合并的结果
        if list1.val < list2.val:
            list1.next = self.mergeTwoLists(list1.next, list2)
            return list1            # 返回当前节点本身（它是这一层的头）
        else:
            list2.next = self.mergeTwoLists(list1, list2.next)
            return list2`,statement:`将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

 

示例 1：

输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]

示例 2：

输入：l1 = [], l2 = []
输出：[]

示例 3：

输入：l1 = [], l2 = [0]
输出：[0]

 

提示：

- 两个链表的节点数目范围是 [0, 50]

- -100 

- l1 和 l2 均按 非递减顺序 排列`},"2-两数相加":{codePreview:`# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0)
        cur = dummy
        carry = 0
        while l1 or l2 or carry:
            if l1:
                v1 = l1.val
            else:
                v1 = 0
            if l2:
                v2 = l2.val
            else:
                v2 = 0
            tmp = v1 + v2 + carry
            cur.next = ListNode(tmp % 10)`,statement:`给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

 

示例 1：

输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.

示例 2：

输入：l1 = [0], l2 = [0]
输出：[0]

示例 3：

输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]

 

提示：

- 每个链表中的节点数在范围 [1, 100] 内

- 0 <= Node.val <= 9

- 题目数据保证列表表示的数字不含前导零`},"19-删除链表的倒数第-n-个结点":{codePreview:`# Definition for singly-linked list.
from typing import Optional
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        # 📌 需二刷：快慢指针经典应用，哨兵节点最佳实践
        #
        # 思路：双指针（马拉松跑法）。使用 dummy 节点指向 head 解决删除头节点的边缘情况。
        # 让 fast 先走 n 步，然后 fast 和 slow 一起走。当 fast 走到最后一个节点时，
        # slow 刚好在要删除节点的前一个位置，通过 slow.next = slow.next.next 完成删除。
        # 时间 O(L) L为链表长度，空间 O(1)
        #
        # ⚠️ 易错点/误区：
        # 1. 链表题不加 dummy 节点很容易在「删除第一个节点」这种边界条件上抛出空指针异常。
        # 2. 返回值切忌直接 return head，因为如果被删除的刚好是原 head，返回 head 就会拿到错误结果，必须 return dummy.next。
        # 3. while 循环条件必须是 fast.next（让 fast 停在最后一个节点），而不是 fast（会越界走到 None，导致 slow 走到要删除的节点上）。
        dummy = ListNode(0, head)
        slow = dummy
        fast = dummy
        for i in range(n):
            fast = fast.next
        while fast.next:
            slow = slow.next
            fast = fast.next
        slow.next = slow.next.next
        return dummy.next`,statement:`给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

 

示例 1：

输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]

示例 2：

输入：head = [1], n = 1
输出：[]

示例 3：

输入：head = [1,2], n = 1
输出：[1]

 

提示：

- 链表中结点的数目为 sz

- 1 <= sz <= 30

- 0 <= Node.val <= 100

- 1 <= n <= sz

 

进阶：你能尝试使用一趟扫描实现吗？`},"24-两两交换链表中的节点":{codePreview:`# Definition for singly-linked list.
from typing import Optional
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # 📌 需二刷：链表指针的交响乐，三步重连法
        #
        # 思路：使用虚拟头节点 dummy 统一边界情况。每次迭代维护 pre, nodeA, nodeB 三个节点。
        # 按照 nodeA.next = nodeB.next, pre.next = nodeB, nodeB.next = nodeA 的顺序重连。
        # 时间 O(N)，空间 O(1)
        #
        # ⚠️ 易错点/误区：
        # 1. 变量只换名不换指向：不能只是 \`nodeA, nodeB = nodeB, nodeA\` 交换变量名，必须切实修改节点的 \`.next\` 属性。
        # 2. pre 更新错误：交换后局部变为 pre -> nodeB -> nodeA -> next，下一轮的 pre 应该停在 nodeA 上。
        # 3. 忘记更新状态变量：nodeA 和 nodeB 必须在 while 循环内部第一步获取，否则一直在交换同一对节点。
        dummy = ListNode(0, head)
        pre = dummy
        while pre.next and pre.next.next:   
            nodeA = pre.next
            nodeB = pre.next.next
            nodeA.next = nodeB.next
            pre.next = nodeB
            nodeB.next = nodeA
            pre = nodeA
        return dummy.next`,statement:`给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

 

示例 1：

输入：head = [1,2,3,4]
输出：[2,1,4,3]

示例 2：

输入：head = []
输出：[]

示例 3：

输入：head = [1]
输出：[1]

 

提示：

- 链表中节点的数目在范围 [0, 100] 内

- 0 <= Node.val <= 100`},"25-k-个一组翻转链表":{codePreview:`# Definition for singly-linked list.
from typing import Optional
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    # 📌 需二刷：分组探路 + 局部链表翻转与缝合
    #
    # 思路：使用 dummy 哨兵节点，每次先用 fast 探路 k 步，若不足 k 步直接返回 dummy.next；
    #       若满足 k 步，则将这 k 个节点（slow.next 到 fast）进行就地翻转，并顺便缝合到下一组（pre 初始为 fast.next）；
    #       翻转完成后将 slow.next 指向新头部 pre，并更新 slow 和 fast 准备下一轮。
    # 时间 O(N)，空间 O(1)
    #
    # ⚠️ 易错点/误区：
    # 1. 遍历方向误区：单链表没有前驱指针，无法「从后往前」倒着找节点。必须「人从前往后走（curr 从 slow.next 到 fast），但在行进中把箭头掉头指向 pre」。
    # 2. 缝合初始值：局部翻转时，首个节点（原 slow.next）翻转后要接上后续链表，因此 pre 的初始值必须是下一组的头节点 fast.next，不能是 None。
    # 3. curr 起点选错：待翻转的第一个节点是 slow.next，误写为 curr = slow 会把上一组的尾巴（甚至 dummy）卷入翻转。
    # 4. 返回值错误：探路不足 k 个或全部结束时，必须返回整条链表的新头 dummy.next，而不是 slow.next。
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        slow = dummy
        fast = dummy
        while True:
            # 1. 探路：检查剩余节点是否满足 k 个
            for i in range(k):
                if fast.next is None:
                    return dummy.next
                fast = fast.next
            # 2. 准备局部翻转
            start = slow.next      # 本组翻转前的头节点（翻转后变成尾节点）
            pre = fast.next        # 关键缝合点：本组翻转后尾巴要连上下一组的开头
            curr = slow.next       # 从本组第一个节点开始往后走并调转箭头
            # 3. 翻转本组的 k 个节点
            for j in range(k):
                nxt = curr.next
                curr.next = pre
                pre = curr
                curr = nxt
            # 4. 缝合前置节点：让 slow 的 next 指向翻转后的新头节点 pre
            slow.next = pre
            # 5. 指针复位，准备下一组
            slow = start
            fast = slow`,statement:`给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。

k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。

 

示例 1：

输入：head = [1,2,3,4,5], k = 2
输出：[2,1,4,3,5]

示例 2：

输入：head = [1,2,3,4,5], k = 3
输出：[3,2,1,4,5]

 

提示：

- 链表中的节点数目为 n

- 1 <= k <= n <= 5000

- 0 <= Node.val <= 1000

 

进阶：你可以设计一个只用 O(1) 额外内存空间的算法解决此问题吗？`},"138-随机链表的复制":{codePreview:`# Definition for a Node.
from typing import Optional
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
# 📌 需二刷：哈希表映射新旧节点 + 两次遍历深拷贝
#
# 思路：
# 1. 第一遍遍历：只复制节点值，建立 {原节点: 新节点} 的映射字典 d，并预置 d[None] = None 简化边界处理。
# 2. 第二遍遍历：根据原节点的 next/random 连接新节点：d[cur].next = d[cur.next], d[cur].random = d[cur.random]。
# 时间 O(N)，空间 O(N)
#
# ⚠️ 易错点/误区：
# 1. 深拷贝混淆：第二轮连接时若误写成 d[cur].next = cur.next，新节点会指向原链表里的旧节点，破坏深拷贝。必须通过 d[cur.next] 和 d[cur.random] 连接对应的新节点。
# 2. 空指针越界：若未在哈希表中预置 d[None] = None，访问为 None 的 random 或 next 时会报 KeyError。
class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        if not head:
            return None
        d = {None: None}
        cur = head
        while cur:
            d[cur] = Node(cur.val)
            cur = cur.next
        cur = head
        while cur:
            d[cur].next = d[cur.next]
            d[cur].random = d[cur.random]
            cur = cur.next
        return d[head]`,statement:`给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。

构造这个链表的 深拷贝。 深拷贝应该正好由 n 个 全新 节点组成，其中每个新节点的值都设为其对应的原节点的值。新节点的 next 指针和 random 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。复制链表中的指针都不应指向原链表中的节点 。

例如，如果原链表中有 X 和 Y 两个节点，其中 X.random --> Y 。那么在复制链表中对应的两个节点 x 和 y ，同样有 x.random --> y 。

返回复制链表的头节点。

用一个由 n 个节点组成的链表来表示输入/输出中的链表。每个节点用一个 [val, random_index] 表示：

- val：一个表示 Node.val 的整数。

- random_index：随机指针指向的节点索引（范围从 0 到 n-1）；如果不指向任何节点，则为  null 。

你的代码 只 接受原链表的头节点 head 作为传入参数。

 

示例 1：

输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]

示例 2：

输入：head = [[1,1],[2,1]]
输出：[[1,1],[2,1]]

示例 3：

输入：head = [[3,null],[3,0],[3,null]]
输出：[[3,null],[3,0],[3,null]]

 

提示：

- 0 <= n <= 1000

- -10^4 <= Node.val <= 10^4

- Node.random 为 null 或指向链表中的节点。`},"148-排序链表":{codePreview:`# Definition for singly-linked list.
from typing import Optional
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # 1. 递归基
        if not head or not head.next:
            return head
        # 辅助函数 1：快慢指针找中点并断开
        def get_mid_and_cut(head):
            slow, fast = head, head.next
            while fast and fast.next:
                slow = slow.next
                fast = fast.next.next
            mid = slow.next
            slow.next = None  # 核心：必须剪断
            return mid
        # 辅助函数 2：合并两个有序链表（第 21 题）
        def merge(list1, list2):
            dummy = ListNode(0)
            cur = dummy
            while list1 and list2:
                if list1.val <= list2.val:
                    cur.next = list1
                    list1 = list1.next
                else:
                    cur.next = list2
                    list2 = list2.next
                cur = cur.next
            cur.next = list1 if list1 else list2
            return dummy.next
        # 2. 分割
        mid = get_mid_and_cut(head)
        # 3. 递归排序
        left = self.sortList(head)
        right = self.sortList(mid)
        # 4. 合并
        return merge(left, right)`,statement:`给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

 

示例 1：

输入：head = [4,2,1,3]
输出：[1,2,3,4]

示例 2：

输入：head = [-1,5,3,4,0]
输出：[-1,0,3,4,5]

示例 3：

输入：head = []
输出：[]

 

提示：

- 链表中节点的数目在范围 [0, 5 * 10^4] 内

- -10^5 <= Node.val <= 10^5

 

进阶：你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？`}};export{n as categoryContent};
