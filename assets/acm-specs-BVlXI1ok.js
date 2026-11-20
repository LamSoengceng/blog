const n={1:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash_map = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in hash_map:
                return [hash_map[complement], i]
            hash_map[num] = i
        return []

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    a1 = int(sys.stdin.readline())
    result = Solution().twoSum(a0, a1)
    print(' '.join(map(str, result)))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. nums：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行
2. target：一行整数`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[2,7,11,15],9],expected:[0,1],stdin:`4
2 7 11 15
9
`,stdout:`0 1
`},{name:"2. 边界 / 反例",args:[[3,2,4],6],expected:[1,2],stdin:`3
3 2 4
6
`,stdout:`1 2
`},{name:"3. 边界 / 反例",args:[[3,3],6],expected:[0,1],stdin:`2
3 3
6
`,stdout:`0 1
`},{name:"4. 边界 / 反例",args:[[-3,4,3,90],0],expected:[0,2],stdin:`4
-3 4 3 90
0
`,stdout:`0 2
`},{name:"5. 边界 / 反例",args:[[0,4,3,0],0],expected:[0,3],stdin:`4
0 4 3 0
0
`,stdout:`0 3
`}]},2:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def addTwoNumbers(self, l1, l2):
        dummy = tail = ListNode()
        carry = 0
        while l1 or l2 or carry:
            total = carry + (l1.val if l1 else 0) + (l2.val if l2 else 0)
            carry, digit = divmod(total, 10)
            tail.next = ListNode(digit)
            tail = tail.next
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
        return dummy.next

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    a1 = read_array()
    a0 = make_list(a0)[0]
    a1 = make_list(a1)[0]
    result = Solution().addTwoNumbers(a0, a1)
    result = encode_list(result)
    print(' '.join(map(str, result)))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. l1：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行
2. l2：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[2,4,3],[5,6,4]],expected:[7,0,8],stdin:`3
2 4 3
3
5 6 4
`,stdout:`7 0 8
`},{name:"2. 边界 / 反例",args:[[0],[0]],expected:[0],stdin:`1
0
1
0
`,stdout:`0
`},{name:"3. 边界 / 反例",args:[[9,9],[1]],expected:[0,0,1],stdin:`2
9 9
1
1
`,stdout:`0 0 1
`},{name:"4. 边界 / 反例",args:[[1],[9,9]],expected:[0,0,1],stdin:`1
1
2
9 9
`,stdout:`0 0 1
`},{name:"5. 边界 / 反例",args:[[5],[5]],expected:[0,1],stdin:`1
5
1
5
`,stdout:`0 1
`}]},3:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution(object):

    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        left = 0
        right = 0
        result = 0
        window = {}
        while right < len(s):
            c = s[right]
            right += 1
            window[c] = window.get(c, 0) + 1
            while window[c] > 1:
                d = s[left]
                left += 1
                window[d] = window.get(d, 0) - 1
            result = max(result, right - left)
        return result

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = sys.stdin.readline().rstrip('\\r\\n')
    result = Solution().lengthOfLongestSubstring(a0)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. s：一行原始字符串（可能为空串，保留行内空格）`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:["abcabcbb"],expected:3,stdin:`abcabcbb
`,stdout:`3
`},{name:"2. 边界 / 反例",args:["bbbbb"],expected:1,stdin:`bbbbb
`,stdout:`1
`},{name:"3. 边界 / 反例",args:[""],expected:0,stdin:`
`,stdout:`0
`},{name:"4. 边界 / 反例",args:["abba"],expected:2,stdin:`abba
`,stdout:`2
`},{name:"5. 边界 / 反例",args:["dvdf"],expected:3,stdin:`dvdf
`,stdout:`3
`}]},4:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from typing import List

class Solution:

    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        m = len(nums1)
        n = len(nums2)
        if m > n:
            nums1, nums2 = (nums2, nums1)
            m, n = (n, m)
        left = 0
        right = m
        while left <= right:
            total_left = (m + n + 1) // 2
            i = (left + right) // 2
            j = total_left - i
            nums1_left_max = nums1[i - 1] if i > 0 else float('-inf')
            nums1_right_min = nums1[i] if i < m else float('inf')
            nums2_left_max = nums2[j - 1] if j > 0 else float('-inf')
            nums2_right_min = nums2[j] if j < n else float('inf')
            if nums1_left_max <= nums2_right_min and nums2_left_max <= nums1_right_min:
                if (m + n) % 2 == 1:
                    return max((nums1_left_max, nums2_left_max))
                else:
                    return (max(nums1_left_max, nums2_left_max) + min(nums1_right_min, nums2_right_min)) / 2.0
            if nums1_left_max > nums2_right_min:
                right = i - 1
            if nums1_right_min < nums2_left_max:
                left = i + 1

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    a1 = read_array()
    result = Solution().findMedianSortedArrays(a0, a1)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. nums1：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行
2. nums2：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[1,3],[2]],expected:2,stdin:`2
1 3
1
2
`,stdout:`2.0
`},{name:"2. 边界 / 反例",args:[[1,2],[3,4]],expected:2.5,stdin:`2
1 2
2
3 4
`,stdout:`2.5
`},{name:"3. 边界 / 反例",args:[[],[1]],expected:1,stdin:`0

1
1
`,stdout:`1.0
`},{name:"4. 边界 / 反例",args:[[2],[]],expected:2,stdin:`1
2
0

`,stdout:`2.0
`},{name:"5. 边界 / 反例",args:[[0,0],[0,0]],expected:0,stdin:`2
0 0
2
0 0
`,stdout:`0.0
`}]},5:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def longestPalindrome(self, s: str) -> str:
        n = len(s)

        def expand(left: int, right: int) -> str:
            while 0 <= left and right < n and (s[left] == s[right]):
                left -= 1
                right += 1
            return s[left + 1:right]
        res = ''
        for i in range(n):
            ji = expand(i, i)
            ou = expand(i, i + 1)
            if len(ji) > len(res):
                res = ji
            if len(ou) > len(res):
                res = ou
        return res

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = sys.stdin.readline().rstrip('\\r\\n')
    result = Solution().longestPalindrome(a0)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. s：一行原始字符串（可能为空串，保留行内空格）`,outputFormat:"输出一个最长回文子串；有多个最长解时，任意合法解均接受。",tests:[{name:"1. 样例",args:["babad"],expected:3,stdin:`babad
`,stdout:`bab
`},{name:"2. 边界 / 反例",args:["cbbd"],expected:2,stdin:`cbbd
`,stdout:`bb
`},{name:"3. 边界 / 反例",args:["a"],expected:1,stdin:`a
`,stdout:`a
`},{name:"4. 边界 / 反例",args:["ac"],expected:1,stdin:`ac
`,stdout:`a
`},{name:"5. 边界 / 反例",args:["aaaa"],expected:4,stdin:`aaaa
`,stdout:`aaaa
`}]},11:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def maxArea(self, height: List[int]) -> int:
        front = 0
        back = len(height) - 1
        area = 0
        while front < back:
            area = max(min(height[front], height[back]) * (back - front), area)
            if height[front] <= height[back]:
                front += 1
            else:
                back -= 1
        return area

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    result = Solution().maxArea(a0)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. height：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[1,8,6,2,5,4,8,3,7]],expected:49,stdin:`9
1 8 6 2 5 4 8 3 7
`,stdout:`49
`},{name:"2. 边界 / 反例",args:[[1,1]],expected:1,stdin:`2
1 1
`,stdout:`1
`},{name:"3. 边界 / 反例",args:[[0,0]],expected:0,stdin:`2
0 0
`,stdout:`0
`},{name:"4. 边界 / 反例",args:[[4,3,2,1,4]],expected:16,stdin:`5
4 3 2 1 4
`,stdout:`16
`},{name:"5. 边界 / 反例",args:[[1,2,1]],expected:2,stdin:`3
1 2 1
`,stdout:`2
`}]},15:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def threeSum(self, nums: list[int]) -> list[list[int]]:
        nums.sort()
        result = []
        for i in range(len(nums)):
            if nums[i] > 0:
                break
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            left = i + 1
            right = len(nums) - 1
            while left < right:
                total = nums[i] + nums[left] + nums[right]
                if total < 0:
                    left += 1
                elif total > 0:
                    right -= 1
                else:
                    result.append([nums[i], nums[left], nums[right]])
                    while left < right and nums[left] == nums[left + 1]:
                        left += 1
                    while left < right and nums[right] == nums[right - 1]:
                        right -= 1
                    left += 1
                    right -= 1
        return result

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    result = Solution().threeSum(a0)
    print(json.dumps(result, ensure_ascii=False))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. nums：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出一行 JSON，集合/组合答案允许合法顺序差异。",tests:[{name:"1. 样例",args:[[-1,0,1,2,-1,-4]],expected:[[-1,-1,2],[-1,0,1]],stdin:`6
-1 0 1 2 -1 -4
`,stdout:`[[-1, -1, 2], [-1, 0, 1]]
`},{name:"2. 边界 / 反例",args:[[0,1,1]],expected:[],stdin:`3
0 1 1
`,stdout:`[]
`},{name:"3. 边界 / 反例",args:[[0,0,0,0]],expected:[[0,0,0]],stdin:`4
0 0 0 0
`,stdout:`[[0, 0, 0]]
`},{name:"4. 边界 / 反例",args:[[-2,0,0,2,2]],expected:[[-2,0,2]],stdin:`5
-2 0 0 2 2
`,stdout:`[[-2, 0, 2]]
`},{name:"5. 边界 / 反例",args:[[1,2,3]],expected:[],stdin:`3
1 2 3
`,stdout:`[]
`}]},17:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []
        phone = {'2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'}
        path = []
        result = []

        def form(index):
            if index == len(digits):
                result.append(''.join(path))
                return
            letters = phone[digits[index]]
            for char in letters:
                path.append(char)
                form(index + 1)
                path.pop()
        form(0)
        return result

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = sys.stdin.readline().rstrip('\\r\\n')
    result = Solution().letterCombinations(a0)
    print(json.dumps(result, ensure_ascii=False))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. digits：一行原始字符串（可能为空串，保留行内空格）`,outputFormat:"输出一行 JSON，集合/组合答案允许合法顺序差异。",tests:[{name:"1. 样例",args:["23"],expected:["ad","ae","af","bd","be","bf","cd","ce","cf"],stdin:`23
`,stdout:`["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
`},{name:"2. 边界 / 反例",args:[""],expected:[],stdin:`
`,stdout:`[]
`},{name:"3. 边界 / 反例",args:["2"],expected:["a","b","c"],stdin:`2
`,stdout:`["a", "b", "c"]
`},{name:"4. 边界 / 反例",args:["7"],expected:["p","q","r","s"],stdin:`7
`,stdout:`["p", "q", "r", "s"]
`},{name:"5. 边界 / 反例",args:["79"],expected:["pw","px","py","pz","qw","qx","qy","qz","rw","rx","ry","rz","sw","sx","sy","sz"],stdin:`79
`,stdout:`["pw", "px", "py", "pz", "qw", "qx", "qy", "qz", "rw", "rx", "ry", "rz", "sw", "sx", "sy", "sz"]
`}]},19:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from typing import Optional

class ListNode:

    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:

    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        slow = dummy
        fast = dummy
        for i in range(n):
            fast = fast.next
        while fast.next:
            slow = slow.next
            fast = fast.next
        slow.next = slow.next.next
        return dummy.next

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    a1 = int(sys.stdin.readline())
    a0 = make_list(a0)[0]
    result = Solution().removeNthFromEnd(a0, a1)
    result = encode_list(result)
    print(' '.join(map(str, result)))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. head：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行
2. n：一行整数`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[1,2,3,4,5],2],expected:[1,2,3,5],stdin:`5
1 2 3 4 5
2
`,stdout:`1 2 3 5
`},{name:"2. 边界 / 反例",args:[[1],1],expected:[],stdin:`1
1
1
`,stdout:`
`},{name:"3. 边界 / 反例",args:[[1,2],2],expected:[2],stdin:`2
1 2
2
`,stdout:`2
`},{name:"4. 边界 / 反例",args:[[1,2],1],expected:[1],stdin:`2
1 2
1
`,stdout:`1
`},{name:"5. 边界 / 反例",args:[[1,2,3],3],expected:[2,3],stdin:`3
1 2 3
3
`,stdout:`2 3
`}]},20:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def isValid(self, s: str) -> bool:
        stack = []
        matchpair = {'}': '{', ']': '[', ')': '('}
        for char in s:
            if char in '([{':
                stack.append(char)
            else:
                if not stack:
                    return False
                top = stack.pop()
                if top != matchpair[char]:
                    return False
        return not stack

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = sys.stdin.readline().rstrip('\\r\\n')
    result = Solution().isValid(a0)
    print('true' if result else 'false')

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. s：一行原始字符串（可能为空串，保留行内空格）`,outputFormat:"输出 true 或 false（大小写均可）。",tests:[{name:"1. 样例",args:["()"],expected:!0,stdin:`()
`,stdout:`true
`},{name:"2. 边界 / 反例",args:["()[]{}"],expected:!0,stdin:`()[]{}
`,stdout:`true
`},{name:"3. 边界 / 反例",args:["(]"],expected:!1,stdin:`(]
`,stdout:`false
`},{name:"4. 边界 / 反例",args:["([)]"],expected:!1,stdin:`([)]
`,stdout:`false
`},{name:"5. 边界 / 反例",args:["("],expected:!1,stdin:`(
`,stdout:`false
`}]},21:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from typing import Optional

class ListNode:

    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:

    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if not list1:
            return list2
        if not list2:
            return list1
        if list1.val < list2.val:
            list1.next = self.mergeTwoLists(list1.next, list2)
            return list1
        else:
            list2.next = self.mergeTwoLists(list1, list2.next)
            return list2

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    a1 = read_array()
    a0 = make_list(a0)[0]
    a1 = make_list(a1)[0]
    result = Solution().mergeTwoLists(a0, a1)
    result = encode_list(result)
    print(' '.join(map(str, result)))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. list1：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行
2. list2：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[1,2,4],[1,3,4]],expected:[1,1,2,3,4,4],stdin:`3
1 2 4
3
1 3 4
`,stdout:`1 1 2 3 4 4
`},{name:"2. 边界 / 反例",args:[[],[]],expected:[],stdin:`0

0

`,stdout:`
`},{name:"3. 边界 / 反例",args:[[],[0]],expected:[0],stdin:`0

1
0
`,stdout:`0
`},{name:"4. 边界 / 反例",args:[[-3,-1],[-2,0]],expected:[-3,-2,-1,0],stdin:`2
-3 -1
2
-2 0
`,stdout:`-3 -2 -1 0
`},{name:"5. 边界 / 反例",args:[[1],[1]],expected:[1,1],stdin:`1
1
1
1
`,stdout:`1 1
`}]},22:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from typing import List

class Solution:

    def generateParenthesis(self, n: int) -> List[str]:
        res = []

        def dfs(open_count: int, close_count: int, current_string: str):
            if open_count == n and close_count == n:
                res.append(current_string)
                return
            if open_count < n:
                dfs(open_count + 1, close_count, current_string + '(')
            if close_count < open_count:
                dfs(open_count, close_count + 1, current_string + ')')
        dfs(0, 0, '')
        return res

    def generateParenthesis_path(self, n: int) -> List[str]:
        path = []
        result = []

        def backtrack(left: int, right: int):
            if len(path) == 2 * n:
                result.append(''.join(path))
                return
            if left < n:
                path.append('(')
                backtrack(left + 1, right)
                path.pop()
            if right < left:
                path.append(')')
                backtrack(left, right + 1)
                path.pop()
        backtrack(0, 0)
        return result

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = int(sys.stdin.readline())
    result = Solution().generateParenthesis(a0)
    print(json.dumps(result, ensure_ascii=False))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. n：一行整数`,outputFormat:"输出一行 JSON，集合/组合答案允许合法顺序差异。",tests:[{name:"1. 样例",args:[3],expected:["((()))","(()())","(())()","()(())","()()()"],stdin:`3
`,stdout:`["((()))", "(()())", "(())()", "()(())", "()()()"]
`},{name:"2. 边界 / 反例",args:[1],expected:["()"],stdin:`1
`,stdout:`["()"]
`},{name:"3. 边界 / 反例",args:[2],expected:["(())","()()"],stdin:`2
`,stdout:`["(())", "()()"]
`},{name:"4. 边界 / 反例",args:[4],expected:["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"],stdin:`4
`,stdout:`["(((())))", "((()()))", "((())())", "((()))()", "(()(()))", "(()()())", "(()())()", "(())(())", "(())()()", "()((()))", "()(()())", "()(())()", "()()(())", "()()()()"]
`},{name:"5. 边界 / 反例",args:[5],expected:["((((()))))","(((()())))","(((())()))","(((()))())","(((())))()","((()(())))","((()()()))","((()())())","((()()))()","((())(()))","((())()())","((())())()","((()))(())","((()))()()","(()((())))","(()(()()))","(()(())())","(()(()))()","(()()(()))","(()()()())","(()()())()","(()())(())","(()())()()","(())((()))","(())(()())","(())(())()","(())()(())","(())()()()","()(((())))","()((()()))","()((())())","()((()))()","()(()(()))","()(()()())","()(()())()","()(())(())","()(())()()","()()((()))","()()(()())","()()(())()","()()()(())","()()()()()"],stdin:`5
`,stdout:`["((((()))))", "(((()())))", "(((())()))", "(((()))())", "(((())))()", "((()(())))", "((()()()))", "((()())())", "((()()))()", "((())(()))", "((())()())", "((())())()", "((()))(())", "((()))()()", "(()((())))", "(()(()()))", "(()(())())", "(()(()))()", "(()()(()))", "(()()()())", "(()()())()", "(()())(())", "(()())()()", "(())((()))", "(())(()())", "(())(())()", "(())()(())", "(())()()()", "()(((())))", "()((()()))", "()((())())", "()((()))()", "()(()(()))", "()(()()())", "()(()())()", "()(())(())", "()(())()()", "()()((()))", "()()(()())", "()()(())()", "()()()(())", "()()()()()"]
`}]},23:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def mergeKLists(self, lists):
        import heapq
        heap = []
        for i, node in enumerate(lists):
            if node:
                heapq.heappush(heap, (node.val, i, node))
        dummy = tail = ListNode()
        while heap:
            _, i, node = heapq.heappop(heap)
            tail.next = node
            tail = node
            if node.next:
                heapq.heappush(heap, (node.next.val, i, node.next))
        return dummy.next

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = json.loads(sys.stdin.readline())
    a0 = [make_list(v)[0] for v in a0]
    result = Solution().mergeKLists(a0)
    result = encode_list(result)
    print(' '.join(map(str, result)))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. lists：一行 JSON；树使用层序数组，null 为空位；嵌套列表按数组保留`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[[1,4,5],[1,3,4],[2,6]]],expected:[1,1,2,3,4,4,5,6],stdin:`[[1, 4, 5], [1, 3, 4], [2, 6]]
`,stdout:`1 1 2 3 4 4 5 6
`},{name:"2. 边界 / 反例",args:[[]],expected:[],stdin:`[]
`,stdout:`
`},{name:"3. 边界 / 反例",args:[[[]]],expected:[],stdin:`[[]]
`,stdout:`
`},{name:"4. 边界 / 反例",args:[[[1],[],[-1,2]]],expected:[-1,1,2],stdin:`[[1], [], [-1, 2]]
`,stdout:`-1 1 2
`},{name:"5. 边界 / 反例",args:[[[0],[0],[0]]],expected:[0,0,0],stdin:`[[0], [0], [0]]
`,stdout:`0 0 0
`}]},24:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from typing import Optional

class ListNode:

    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:

    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        pre = dummy
        while pre.next and pre.next.next:
            nodeA = pre.next
            nodeB = pre.next.next
            nodeA.next = nodeB.next
            pre.next = nodeB
            nodeB.next = nodeA
            pre = nodeA
        return dummy.next

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    a0 = make_list(a0)[0]
    result = Solution().swapPairs(a0)
    result = encode_list(result)
    print(' '.join(map(str, result)))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. head：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[1,2,3,4]],expected:[2,1,4,3],stdin:`4
1 2 3 4
`,stdout:`2 1 4 3
`},{name:"2. 边界 / 反例",args:[[]],expected:[],stdin:`0

`,stdout:`
`},{name:"3. 边界 / 反例",args:[[1]],expected:[1],stdin:`1
1
`,stdout:`1
`},{name:"4. 边界 / 反例",args:[[1,2,3]],expected:[2,1,3],stdin:`3
1 2 3
`,stdout:`2 1 3
`},{name:"5. 边界 / 反例",args:[[1,1]],expected:[1,1],stdin:`2
1 1
`,stdout:`1 1
`}]},25:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from typing import Optional

class ListNode:

    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:

    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        slow = dummy
        fast = dummy
        while True:
            for i in range(k):
                if fast.next is None:
                    return dummy.next
                fast = fast.next
            start = slow.next
            pre = fast.next
            curr = slow.next
            for j in range(k):
                nxt = curr.next
                curr.next = pre
                pre = curr
                curr = nxt
            slow.next = pre
            slow = start
            fast = slow

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    a1 = int(sys.stdin.readline())
    a0 = make_list(a0)[0]
    result = Solution().reverseKGroup(a0, a1)
    result = encode_list(result)
    print(' '.join(map(str, result)))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. head：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行
2. k：一行整数`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[1,2,3,4,5],2],expected:[2,1,4,3,5],stdin:`5
1 2 3 4 5
2
`,stdout:`2 1 4 3 5
`},{name:"2. 边界 / 反例",args:[[1,2,3,4,5],3],expected:[3,2,1,4,5],stdin:`5
1 2 3 4 5
3
`,stdout:`3 2 1 4 5
`},{name:"3. 边界 / 反例",args:[[1],1],expected:[1],stdin:`1
1
1
`,stdout:`1
`},{name:"4. 边界 / 反例",args:[[1,2],2],expected:[2,1],stdin:`2
1 2
2
`,stdout:`2 1
`},{name:"5. 边界 / 反例",args:[[1,2,3],1],expected:[1,2,3],stdin:`3
1 2 3
1
`,stdout:`1 2 3
`}]},31:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        i = n - 2
        while i >= 0 and nums[i] >= nums[i + 1]:
            i -= 1
        if i >= 0:
            j = n - 1
            while nums[j] <= nums[i]:
                j -= 1
            nums[i], nums[j] = (nums[j], nums[i])

        def reverse(nums, start, end):
            while start < end:
                nums[start], nums[end] = (nums[end], nums[start])
                start += 1
                end -= 1
        reverse(nums, i + 1, n - 1)

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    result = Solution().nextPermutation(a0)
    result = a0
    print(' '.join(map(str, result)))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. nums：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[1,2,3]],expected:[1,3,2],stdin:`3
1 2 3
`,stdout:`1 3 2
`},{name:"2. 边界 / 反例",args:[[3,2,1]],expected:[1,2,3],stdin:`3
3 2 1
`,stdout:`1 2 3
`},{name:"3. 边界 / 反例",args:[[1,1,5]],expected:[1,5,1],stdin:`3
1 1 5
`,stdout:`1 5 1
`},{name:"4. 边界 / 反例",args:[[1]],expected:[1],stdin:`1
1
`,stdout:`1
`},{name:"5. 边界 / 反例",args:[[1,3,2]],expected:[2,1,3],stdin:`3
1 3 2
`,stdout:`2 1 3
`}]},32:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def longestValidParentheses(self, s: str) -> int:
        n = len(s)
        if n < 2:
            return 0
        dp = [0] * n
        for i in range(1, n):
            if s[i] == ')':
                if s[i - 1] == '(':
                    dp[i] = (dp[i - 2] if i >= 2 else 0) + 2
                else:
                    pre_idx = i - dp[i - 1] - 1
                    if pre_idx >= 0 and s[pre_idx] == '(':
                        dp[i] = dp[i - 1] + 2 + (dp[pre_idx - 1] if pre_idx >= 1 else 0)
        return max(dp)

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = sys.stdin.readline().rstrip('\\r\\n')
    result = Solution().longestValidParentheses(a0)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. s：一行原始字符串（可能为空串，保留行内空格）`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:["(()"],expected:2,stdin:`(()
`,stdout:`2
`},{name:"2. 边界 / 反例",args:[")()())"],expected:4,stdin:`)()())
`,stdout:`4
`},{name:"3. 边界 / 反例",args:[""],expected:0,stdin:`
`,stdout:`0
`},{name:"4. 边界 / 反例",args:["()(())"],expected:6,stdin:`()(())
`,stdout:`6
`},{name:"5. 边界 / 反例",args:["((("],expected:0,stdin:`(((
`,stdout:`0
`}]},33:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def search(self, nums: List[int], target: int) -> int:
        left, right = (0, len(nums) - 1)
        while left <= right:
            mid = left + (right - left) // 2
            if nums[mid] == target:
                return mid
            if nums[left] <= nums[mid]:
                if nums[left] <= target < nums[mid]:
                    right = mid - 1
                else:
                    left = mid + 1
            elif nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
        return -1

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    a1 = int(sys.stdin.readline())
    result = Solution().search(a0, a1)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. nums：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行
2. target：一行整数`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[4,5,6,7,0,1,2],0],expected:4,stdin:`7
4 5 6 7 0 1 2
0
`,stdout:`4
`},{name:"2. 边界 / 反例",args:[[4,5,6,7,0,1,2],3],expected:-1,stdin:`7
4 5 6 7 0 1 2
3
`,stdout:`-1
`},{name:"3. 边界 / 反例",args:[[1],0],expected:-1,stdin:`1
1
0
`,stdout:`-1
`},{name:"4. 边界 / 反例",args:[[1,3],3],expected:1,stdin:`2
1 3
3
`,stdout:`1
`},{name:"5. 边界 / 反例",args:[[3,1],1],expected:1,stdin:`2
3 1
1
`,stdout:`1
`}]},34:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def searchRange(self, nums: List[int], target: int) -> List[int]:
        if not nums:
            return [-1, -1]
        if nums[0] > target or nums[-1] < target:
            return [-1, -1]
        left = 0
        right = len(nums)
        while left != right:
            mid = (left + right) // 2
            if nums[mid] >= target:
                right = mid
            else:
                left = mid + 1
        tmpleft = left
        if tmpleft >= len(nums) or nums[tmpleft] != target:
            return [-1, -1]
        left = 0
        right = len(nums)
        while left != right:
            mid = (left + right) // 2
            if nums[mid] <= target:
                left = mid + 1
            else:
                right = mid
        return [tmpleft, right - 1]

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    a1 = int(sys.stdin.readline())
    result = Solution().searchRange(a0, a1)
    print(' '.join(map(str, result)))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. nums：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行
2. target：一行整数`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[5,7,7,8,8,10],8],expected:[3,4],stdin:`6
5 7 7 8 8 10
8
`,stdout:`3 4
`},{name:"2. 边界 / 反例",args:[[5,7,7,8,8,10],6],expected:[-1,-1],stdin:`6
5 7 7 8 8 10
6
`,stdout:`-1 -1
`},{name:"3. 边界 / 反例",args:[[],0],expected:[-1,-1],stdin:`0

0
`,stdout:`-1 -1
`},{name:"4. 边界 / 反例",args:[[1],1],expected:[0,0],stdin:`1
1
1
`,stdout:`0 0
`},{name:"5. 边界 / 反例",args:[[2,2,2],2],expected:[0,2],stdin:`3
2 2 2
2
`,stdout:`0 2
`}]},35:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from typing import List

class Solution:

    def searchInsert(self, nums: List[int], target: int) -> int:
        n = len(nums)
        left = 0
        right = n - 1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] == target:
                return mid
            if nums[mid] < target:
                left = mid + 1
            if nums[mid] > target:
                right = mid - 1
        return left

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    a1 = int(sys.stdin.readline())
    result = Solution().searchInsert(a0, a1)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. nums：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行
2. target：一行整数`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[1,3,5,6],5],expected:2,stdin:`4
1 3 5 6
5
`,stdout:`2
`},{name:"2. 边界 / 反例",args:[[1,3,5,6],2],expected:1,stdin:`4
1 3 5 6
2
`,stdout:`1
`},{name:"3. 边界 / 反例",args:[[1,3,5,6],7],expected:4,stdin:`4
1 3 5 6
7
`,stdout:`4
`},{name:"4. 边界 / 反例",args:[[1],0],expected:0,stdin:`1
1
0
`,stdout:`0
`},{name:"5. 边界 / 反例",args:[[1],1],expected:0,stdin:`1
1
1
`,stdout:`0
`}]},39:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        path = []
        result = []
        candidates.sort()

        def method(start, target):
            if target == 0:
                result.append(path.copy())
                return
            for i in range(start, len(candidates)):
                if candidates[i] > target:
                    break
                path.append(candidates[i])
                method(i, target - candidates[i])
                path.pop()
        method(0, target)
        return result

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    a1 = int(sys.stdin.readline())
    result = Solution().combinationSum(a0, a1)
    print(json.dumps(result, ensure_ascii=False))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. candidates：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行
2. target：一行整数`,outputFormat:"输出一行 JSON，集合/组合答案允许合法顺序差异。",tests:[{name:"1. 样例",args:[[2,3,6,7],7],expected:[[2,2,3],[7]],stdin:`4
2 3 6 7
7
`,stdout:`[[2, 2, 3], [7]]
`},{name:"2. 边界 / 反例",args:[[2,3,5],8],expected:[[2,2,2,2],[2,3,3],[3,5]],stdin:`3
2 3 5
8
`,stdout:`[[2, 2, 2, 2], [2, 3, 3], [3, 5]]
`},{name:"3. 边界 / 反例",args:[[2],1],expected:[],stdin:`1
2
1
`,stdout:`[]
`},{name:"4. 边界 / 反例",args:[[1],2],expected:[[1,1]],stdin:`1
1
2
`,stdout:`[[1, 1]]
`},{name:"5. 边界 / 反例",args:[[3,4],6],expected:[[3,3]],stdin:`2
3 4
6
`,stdout:`[[3, 3]]
`}]},41:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def firstMissingPositive(self, nums: List[int]) -> int:
        n = len(nums)
        for i in range(n):
            while 1 <= nums[i] <= n and nums[nums[i] - 1] != nums[i]:
                nums[nums[i] - 1], nums[i] = (nums[i], nums[nums[i] - 1])
        for i in range(n):
            if nums[i] != i + 1:
                return i + 1
        return n + 1

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    result = Solution().firstMissingPositive(a0)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. nums：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[1,2,0]],expected:3,stdin:`3
1 2 0
`,stdout:`3
`},{name:"2. 边界 / 反例",args:[[3,4,-1,1]],expected:2,stdin:`4
3 4 -1 1
`,stdout:`2
`},{name:"3. 边界 / 反例",args:[[7,8,9,11,12]],expected:1,stdin:`5
7 8 9 11 12
`,stdout:`1
`},{name:"4. 边界 / 反例",args:[[1,1]],expected:2,stdin:`2
1 1
`,stdout:`2
`},{name:"5. 边界 / 反例",args:[[-1]],expected:1,stdin:`1
-1
`,stdout:`1
`}]},42:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def trap(self, height: List[int]) -> int:
        if len(height) == 0:
            return 0
        n = len(height)
        res = 0
        left, right = (0, n - 1)
        l_max, r_max = (height[0], height[n - 1])
        while left < right:
            if l_max < r_max:
                left += 1
                l_max = max(l_max, height[left])
                res += l_max - height[left]
            else:
                right -= 1
                r_max = max(r_max, height[right])
                res += r_max - height[right]
        return res

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    result = Solution().trap(a0)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. height：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[0,1,0,2,1,0,1,3,2,1,2,1]],expected:6,stdin:`12
0 1 0 2 1 0 1 3 2 1 2 1
`,stdout:`6
`},{name:"2. 边界 / 反例",args:[[4,2,0,3,2,5]],expected:9,stdin:`6
4 2 0 3 2 5
`,stdout:`9
`},{name:"3. 边界 / 反例",args:[[1]],expected:0,stdin:`1
1
`,stdout:`0
`},{name:"4. 边界 / 反例",args:[[3,2,1]],expected:0,stdin:`3
3 2 1
`,stdout:`0
`},{name:"5. 边界 / 反例",args:[[2,0,2]],expected:2,stdin:`3
2 0 2
`,stdout:`2
`}]},45:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from typing import List

class Solution:

    def jump(self, nums: List[int]) -> int:
        max_reach = 0
        steps = 0
        end = 0
        for i in range(len(nums) - 1):
            max_reach = max(max_reach, nums[i] + i)
            if i == end:
                steps += 1
                end = max_reach
        return steps

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    result = Solution().jump(a0)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. nums：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[2,3,1,1,4]],expected:2,stdin:`5
2 3 1 1 4
`,stdout:`2
`},{name:"2. 边界 / 反例",args:[[2,3,0,1,4]],expected:2,stdin:`5
2 3 0 1 4
`,stdout:`2
`},{name:"3. 边界 / 反例",args:[[0]],expected:0,stdin:`1
0
`,stdout:`0
`},{name:"4. 边界 / 反例",args:[[1,1,1]],expected:2,stdin:`3
1 1 1
`,stdout:`2
`},{name:"5. 边界 / 反例",args:[[3,1,1,1]],expected:1,stdin:`4
3 1 1 1
`,stdout:`1
`}]},46:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def permute(self, nums: List[int]) -> List[List[int]]:
        path = []
        result = []

        def backtrack(nums):
            if len(path) == len(nums):
                result.append(path.copy())
                return
            for num in nums:
                if num in path:
                    continue
                path.append(num)
                backtrack(nums)
                path.pop()
        backtrack(nums)
        return result

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    result = Solution().permute(a0)
    print(json.dumps(result, ensure_ascii=False))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. nums：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出一行 JSON，集合/组合答案允许合法顺序差异。",tests:[{name:"1. 样例",args:[[1,2,3]],expected:[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]],stdin:`3
1 2 3
`,stdout:`[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
`},{name:"2. 边界 / 反例",args:[[0,1]],expected:[[0,1],[1,0]],stdin:`2
0 1
`,stdout:`[[0, 1], [1, 0]]
`},{name:"3. 边界 / 反例",args:[[1]],expected:[[1]],stdin:`1
1
`,stdout:`[[1]]
`},{name:"4. 边界 / 反例",args:[[-1,2]],expected:[[-1,2],[2,-1]],stdin:`2
-1 2
`,stdout:`[[-1, 2], [2, -1]]
`},{name:"5. 边界 / 反例",args:[[3,2,1,0]],expected:[[3,2,1,0],[3,2,0,1],[3,1,2,0],[3,1,0,2],[3,0,2,1],[3,0,1,2],[2,3,1,0],[2,3,0,1],[2,1,3,0],[2,1,0,3],[2,0,3,1],[2,0,1,3],[1,3,2,0],[1,3,0,2],[1,2,3,0],[1,2,0,3],[1,0,3,2],[1,0,2,3],[0,3,2,1],[0,3,1,2],[0,2,3,1],[0,2,1,3],[0,1,3,2],[0,1,2,3]],stdin:`4
3 2 1 0
`,stdout:`[[3, 2, 1, 0], [3, 2, 0, 1], [3, 1, 2, 0], [3, 1, 0, 2], [3, 0, 2, 1], [3, 0, 1, 2], [2, 3, 1, 0], [2, 3, 0, 1], [2, 1, 3, 0], [2, 1, 0, 3], [2, 0, 3, 1], [2, 0, 1, 3], [1, 3, 2, 0], [1, 3, 0, 2], [1, 2, 3, 0], [1, 2, 0, 3], [1, 0, 3, 2], [1, 0, 2, 3], [0, 3, 2, 1], [0, 3, 1, 2], [0, 2, 3, 1], [0, 2, 1, 3], [0, 1, 3, 2], [0, 1, 2, 3]]
`}]},48:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        n = len(matrix[0])
        for i in range(n // 2):
            for j in range((n + 1) // 2):
                tmp = matrix[n - 1 - j][i]
                matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j]
                matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i]
                matrix[j][n - 1 - i] = matrix[i][j]
                matrix[i][j] = tmp

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_matrix()
    result = Solution().rotate(a0)
    result = a0
    print('\\n'.join(' '.join(map(str, row)) for row in result))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. matrix：先一行 m n，再读取 m 行，每行 n 个空格分隔整数`,outputFormat:"逐行输出矩阵，每行元素以空格分隔。",tests:[{name:"1. 样例",args:[[[1,2],[3,4]]],expected:[[3,1],[4,2]],stdin:`2 2
1 2
3 4
`,stdout:`3 1
4 2
`},{name:"2. 边界 / 反例",args:[[[1,2,3],[4,5,6],[7,8,9]]],expected:[[7,4,1],[8,5,2],[9,6,3]],stdin:`3 3
1 2 3
4 5 6
7 8 9
`,stdout:`7 4 1
8 5 2
9 6 3
`},{name:"3. 边界 / 反例",args:[[[1]]],expected:[[1]],stdin:`1 1
1
`,stdout:`1
`},{name:"4. 边界 / 反例",args:[[[0,-1],[2,3]]],expected:[[2,0],[3,-1]],stdin:`2 2
0 -1
2 3
`,stdout:`2 0
3 -1
`},{name:"5. 边界 / 反例",args:[[[1,1],[1,1]]],expected:[[1,1],[1,1]],stdin:`2 2
1 1
1 1
`,stdout:`1 1
1 1
`}]},49:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from collections import defaultdict

class Solution:

    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        a = defaultdict(list)
        for i in strs:
            key = tuple(sorted(i))
            a[key].append(i)
        return list(a.values())

    def groupAnagrams2(self, strs: List[str]) -> List[List[str]]:
        a = defaultdict(list)
        for s in strs:
            count = [0] * 26
            for c in s:
                count[ord(c) - ord('a')] += 1
            a[tuple(count)].append(s)
        return list(a.values())

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_words()
    result = Solution().groupAnagrams(a0)
    print(json.dumps(result, ensure_ascii=False))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. strs：先一行字符串数量 n，再逐行读取 n 个字符串（空字符串占一行）`,outputFormat:"输出一行 JSON，集合/组合答案允许合法顺序差异。",tests:[{name:"1. 样例",args:[["eat","tea","tan","ate","nat","bat"]],expected:[["bat"],["nat","tan"],["ate","eat","tea"]],stdin:`6
eat
tea
tan
ate
nat
bat
`,stdout:`[["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
`},{name:"2. 边界 / 反例",args:[[""]],expected:[[""]],stdin:`1

`,stdout:`[[""]]
`},{name:"3. 边界 / 反例",args:[["a"]],expected:[["a"]],stdin:`1
a
`,stdout:`[["a"]]
`},{name:"4. 边界 / 反例",args:[["ab","ba","aa"]],expected:[["ab","ba"],["aa"]],stdin:`3
ab
ba
aa
`,stdout:`[["ab", "ba"], ["aa"]]
`},{name:"5. 边界 / 反例",args:[["",""]],expected:[["",""]],stdin:`2


`,stdout:`[["", ""]]
`}]},51:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def solveNQueens(self, n: int) -> List[List[str]]:
        res = []
        board = [['.'] * n for _ in range(n)]
        used_cols = set()
        used_diag1 = set()
        used_diag2 = set()

        def dfs(row: int):
            if row == n:
                res.append([''.join(row) for row in board])
                return
            for col in range(n):
                if col not in used_cols and row - col not in used_diag1 and (row + col not in used_diag2):
                    board[row][col] = 'Q'
                    used_cols.add(col)
                    used_diag1.add(row - col)
                    used_diag2.add(row + col)
                    dfs(row + 1)
                    board[row][col] = '.'
                    used_cols.remove(col)
                    used_diag1.remove(row - col)
                    used_diag2.remove(row + col)
        dfs(0)
        return res

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = int(sys.stdin.readline())
    result = Solution().solveNQueens(a0)
    print(json.dumps(result, ensure_ascii=False))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. n：一行整数`,outputFormat:"输出一行 JSON，集合/组合答案允许合法顺序差异。",tests:[{name:"1. 样例",args:[4],expected:[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]],stdin:`4
`,stdout:`[[".Q..", "...Q", "Q...", "..Q."], ["..Q.", "Q...", "...Q", ".Q.."]]
`},{name:"2. 边界 / 反例",args:[1],expected:[["Q"]],stdin:`1
`,stdout:`[["Q"]]
`},{name:"3. 边界 / 反例",args:[2],expected:[],stdin:`2
`,stdout:`[]
`},{name:"4. 边界 / 反例",args:[3],expected:[],stdin:`3
`,stdout:`[]
`},{name:"5. 边界 / 反例",args:[5],expected:[["Q....","..Q..","....Q",".Q...","...Q."],["Q....","...Q.",".Q...","....Q","..Q.."],[".Q...","...Q.","Q....","..Q..","....Q"],[".Q...","....Q","..Q..","Q....","...Q."],["..Q..","Q....","...Q.",".Q...","....Q"],["..Q..","....Q",".Q...","...Q.","Q...."],["...Q.","Q....","..Q..","....Q",".Q..."],["...Q.",".Q...","....Q","..Q..","Q...."],["....Q",".Q...","...Q.","Q....","..Q.."],["....Q","..Q..","Q....","...Q.",".Q..."]],stdin:`5
`,stdout:`[["Q....", "..Q..", "....Q", ".Q...", "...Q."], ["Q....", "...Q.", ".Q...", "....Q", "..Q.."], [".Q...", "...Q.", "Q....", "..Q..", "....Q"], [".Q...", "....Q", "..Q..", "Q....", "...Q."], ["..Q..", "Q....", "...Q.", ".Q...", "....Q"], ["..Q..", "....Q", ".Q...", "...Q.", "Q...."], ["...Q.", "Q....", "..Q..", "....Q", ".Q..."], ["...Q.", ".Q...", "....Q", "..Q..", "Q...."], ["....Q", ".Q...", "...Q.", "Q....", "..Q.."], ["....Q", "..Q..", "Q....", "...Q.", ".Q..."]]
`}]},53:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def maxSubArray(self, nums: List[int]) -> int:
        current_sum = nums[0]
        max_sum = nums[0]
        for num in nums[1:]:
            current_sum = max(num, current_sum + num)
            max_sum = max(max_sum, current_sum)
        return max_sum

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    result = Solution().maxSubArray(a0)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. nums：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[-2,1,-3,4,-1,2,1,-5,4]],expected:6,stdin:`9
-2 1 -3 4 -1 2 1 -5 4
`,stdout:`6
`},{name:"2. 边界 / 反例",args:[[-3,-2,-1]],expected:-1,stdin:`3
-3 -2 -1
`,stdout:`-1
`},{name:"3. 边界 / 反例",args:[[1]],expected:1,stdin:`1
1
`,stdout:`1
`},{name:"4. 边界 / 反例",args:[[0,0]],expected:0,stdin:`2
0 0
`,stdout:`0
`},{name:"5. 边界 / 反例",args:[[5,-2,3]],expected:6,stdin:`3
5 -2 3
`,stdout:`6
`}]},54:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        m, n = (len(matrix), len(matrix[0]))
        upper_bound, lower_bound = (0, m - 1)
        left_bound, right_bound = (0, n - 1)
        res = []
        while len(res) < m * n:
            if upper_bound <= lower_bound:
                for j in range(left_bound, right_bound + 1):
                    res.append(matrix[upper_bound][j])
                upper_bound += 1
            if left_bound <= right_bound:
                for i in range(upper_bound, lower_bound + 1):
                    res.append(matrix[i][right_bound])
                right_bound -= 1
            if upper_bound <= lower_bound:
                for j in range(right_bound, left_bound - 1, -1):
                    res.append(matrix[lower_bound][j])
                lower_bound -= 1
            if left_bound <= right_bound:
                for i in range(lower_bound, upper_bound - 1, -1):
                    res.append(matrix[i][left_bound])
                left_bound += 1
        return res

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_matrix()
    result = Solution().spiralOrder(a0)
    print(' '.join(map(str, result)))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. matrix：先一行 m n，再读取 m 行，每行 n 个空格分隔整数`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[[1,2,3],[4,5,6],[7,8,9]]],expected:[1,2,3,6,9,8,7,4,5],stdin:`3 3
1 2 3
4 5 6
7 8 9
`,stdout:`1 2 3 6 9 8 7 4 5
`},{name:"2. 边界 / 反例",args:[[[1,2,3],[4,5,6]]],expected:[1,2,3,6,5,4],stdin:`2 3
1 2 3
4 5 6
`,stdout:`1 2 3 6 5 4
`},{name:"3. 边界 / 反例",args:[[[1,2,3]]],expected:[1,2,3],stdin:`1 3
1 2 3
`,stdout:`1 2 3
`},{name:"4. 边界 / 反例",args:[[[1],[2],[3]]],expected:[1,2,3],stdin:`3 1
1
2
3
`,stdout:`1 2 3
`},{name:"5. 边界 / 反例",args:[[[1]]],expected:[1],stdin:`1 1
1
`,stdout:`1
`}]},55:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from typing import List

class Solution:

    def canJump(self, nums: List[int]) -> bool:
        max_reach = 0
        for i in range(len(nums)):
            if i > max_reach:
                return False
            max_reach = max(i + nums[i], max_reach)
            if max_reach >= len(nums) - 1:
                return True
        return True

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    result = Solution().canJump(a0)
    print('true' if result else 'false')

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. nums：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出 true 或 false（大小写均可）。",tests:[{name:"1. 样例",args:[[2,3,1,1,4]],expected:!0,stdin:`5
2 3 1 1 4
`,stdout:`true
`},{name:"2. 边界 / 反例",args:[[3,2,1,0,4]],expected:!1,stdin:`5
3 2 1 0 4
`,stdout:`false
`},{name:"3. 边界 / 反例",args:[[0]],expected:!0,stdin:`1
0
`,stdout:`true
`},{name:"4. 边界 / 反例",args:[[2,0,0]],expected:!0,stdin:`3
2 0 0
`,stdout:`true
`},{name:"5. 边界 / 反例",args:[[1,0,1]],expected:!1,stdin:`3
1 0 1
`,stdout:`false
`}]},56:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        result = []
        intervals.sort()
        for i in range(0, len(intervals)):
            if not result:
                result.append(intervals[i])
            elif intervals[i][0] <= result[-1][1]:
                result[-1][1] = max(result[-1][1], intervals[i][1])
            else:
                result.append(intervals[i])
        return result

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_matrix()
    result = Solution().merge(a0)
    print(json.dumps(result, ensure_ascii=False))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. intervals：先一行 m n，再读取 m 行，每行 n 个空格分隔整数`,outputFormat:"输出一行 JSON，集合/组合答案允许合法顺序差异。",tests:[{name:"1. 样例",args:[[[1,3],[2,6],[8,10],[15,18]]],expected:[[1,6],[8,10],[15,18]],stdin:`4 2
1 3
2 6
8 10
15 18
`,stdout:`[[1, 6], [8, 10], [15, 18]]
`},{name:"2. 边界 / 反例",args:[[[1,4],[4,5]]],expected:[[1,5]],stdin:`2 2
1 4
4 5
`,stdout:`[[1, 5]]
`},{name:"3. 边界 / 反例",args:[[[1,4],[2,3]]],expected:[[1,4]],stdin:`2 2
1 4
2 3
`,stdout:`[[1, 4]]
`},{name:"4. 边界 / 反例",args:[[[2,3],[1,2]]],expected:[[1,3]],stdin:`2 2
2 3
1 2
`,stdout:`[[1, 3]]
`},{name:"5. 边界 / 反例",args:[[[1,1]]],expected:[[1,1]],stdin:`1 2
1 1
`,stdout:`[[1, 1]]
`}]},62:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def uniquePaths(self, m, n):
        dp = [1] * n
        for _ in range(1, m):
            for j in range(1, n):
                dp[j] += dp[j - 1]
        return dp[-1]

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = int(sys.stdin.readline())
    a1 = int(sys.stdin.readline())
    result = Solution().uniquePaths(a0, a1)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. m：一行整数
2. n：一行整数`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[3,7],expected:28,stdin:`3
7
`,stdout:`28
`},{name:"2. 边界 / 反例",args:[3,2],expected:3,stdin:`3
2
`,stdout:`3
`},{name:"3. 边界 / 反例",args:[1,1],expected:1,stdin:`1
1
`,stdout:`1
`},{name:"4. 边界 / 反例",args:[1,5],expected:1,stdin:`1
5
`,stdout:`1
`},{name:"5. 边界 / 反例",args:[5,1],expected:1,stdin:`5
1
`,stdout:`1
`}]},64:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def minPathSum(self, grid):
        dp = [float('inf')] * len(grid[0])
        dp[0] = 0
        for row in grid:
            for j, value in enumerate(row):
                dp[j] = min(dp[j], dp[j - 1] if j else float('inf')) + value
        return dp[-1]

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_matrix()
    result = Solution().minPathSum(a0)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. grid：先一行 m n，再读取 m 行，每行 n 个空格分隔整数`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[[1,3,1],[1,5,1],[4,2,1]]],expected:7,stdin:`3 3
1 3 1
1 5 1
4 2 1
`,stdout:`7
`},{name:"2. 边界 / 反例",args:[[[1,2,3],[4,5,6]]],expected:12,stdin:`2 3
1 2 3
4 5 6
`,stdout:`12
`},{name:"3. 边界 / 反例",args:[[[0]]],expected:0,stdin:`1 1
0
`,stdout:`0
`},{name:"4. 边界 / 反例",args:[[[1,2,3]]],expected:6,stdin:`1 3
1 2 3
`,stdout:`6
`},{name:"5. 边界 / 反例",args:[[[1],[2],[3]]],expected:6,stdin:`3 1
1
2
3
`,stdout:`6
`}]},70:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def climbStairs(self, n: int) -> int:
        if n <= 2:
            return n
        dp = [0] * (n + 1)
        dp[1] = 1
        dp[2] = 2
        for i in range(3, n + 1):
            dp[i] = dp[i - 1] + dp[i - 2]
        return dp[n]

    def climbStairs_optimized(self, n: int) -> int:
        if n <= 2:
            return n
        a, b = (1, 2)
        for i in range(3, n + 1):
            a, b = (b, a + b)
        return b

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = int(sys.stdin.readline())
    result = Solution().climbStairs(a0)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. n：一行整数`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[1],expected:1,stdin:`1
`,stdout:`1
`},{name:"2. 边界 / 反例",args:[2],expected:2,stdin:`2
`,stdout:`2
`},{name:"3. 边界 / 反例",args:[3],expected:3,stdin:`3
`,stdout:`3
`},{name:"4. 边界 / 反例",args:[5],expected:8,stdin:`5
`,stdout:`8
`},{name:"5. 边界 / 反例",args:[10],expected:89,stdin:`10
`,stdout:`89
`}]},72:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def minDistance(self, word1: str, word2: str) -> int:
        m = len(word1)
        n = len(word2)
        dp = [[0] * (n + 1) for _ in range(m + 1)]
        for i in range(1, m + 1):
            dp[i][0] = i
        for j in range(1, n + 1):
            dp[0][j] = j
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if word1[i - 1] == word2[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1]
                else:
                    dp[i][j] = min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
        return dp[m][n]

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = sys.stdin.readline().rstrip('\\r\\n')
    a1 = sys.stdin.readline().rstrip('\\r\\n')
    result = Solution().minDistance(a0, a1)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. word1：一行原始字符串（可能为空串，保留行内空格）
2. word2：一行原始字符串（可能为空串，保留行内空格）`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:["horse","ros"],expected:3,stdin:`horse
ros
`,stdout:`3
`},{name:"2. 边界 / 反例",args:["intention","execution"],expected:5,stdin:`intention
execution
`,stdout:`5
`},{name:"3. 边界 / 反例",args:["","a"],expected:1,stdin:`
a
`,stdout:`1
`},{name:"4. 边界 / 反例",args:["a",""],expected:1,stdin:`a

`,stdout:`1
`},{name:"5. 边界 / 反例",args:["abc","abc"],expected:0,stdin:`abc
abc
`,stdout:`0
`}]},73:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def setZeroes(self, matrix: List[List[int]]) -> None:
        m, n = (len(matrix), len(matrix[0]))
        rows = set()
        cols = set()
        for i in range(m):
            for j in range(n):
                if matrix[i][j] == 0:
                    rows.add(i)
                    cols.add(j)
        for i in range(m):
            for j in range(n):
                if i in rows or j in cols:
                    matrix[i][j] = 0

class Solution2:

    def setZeroes(self, matrix: List[List[int]]) -> None:
        m, n = (len(matrix), len(matrix[0]))
        col0 = False
        for i in range(m):
            if matrix[i][0] == 0:
                col0 = True
            for j in range(1, n):
                if matrix[i][j] == 0:
                    matrix[i][0] = 0
                    matrix[0][j] = 0
        for i in range(m - 1, -1, -1):
            for j in range(n - 1, 0, -1):
                if matrix[i][0] == 0 or matrix[0][j] == 0:
                    matrix[i][j] = 0
            if col0:
                matrix[i][0] = 0

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_matrix()
    result = Solution().setZeroes(a0)
    result = a0
    print('\\n'.join(' '.join(map(str, row)) for row in result))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. matrix：先一行 m n，再读取 m 行，每行 n 个空格分隔整数`,outputFormat:"逐行输出矩阵，每行元素以空格分隔。",tests:[{name:"1. 样例",args:[[[1,1,1],[1,0,1],[1,1,1]]],expected:[[1,0,1],[0,0,0],[1,0,1]],stdin:`3 3
1 1 1
1 0 1
1 1 1
`,stdout:`1 0 1
0 0 0
1 0 1
`},{name:"2. 边界 / 反例",args:[[[0,1],[1,1]]],expected:[[0,0],[0,1]],stdin:`2 2
0 1
1 1
`,stdout:`0 0
0 1
`},{name:"3. 边界 / 反例",args:[[[1,0]]],expected:[[0,0]],stdin:`1 2
1 0
`,stdout:`0 0
`},{name:"4. 边界 / 反例",args:[[[1],[0]]],expected:[[0],[0]],stdin:`2 1
1
0
`,stdout:`0
0
`},{name:"5. 边界 / 反例",args:[[[1]]],expected:[[1]],stdin:`1 1
1
`,stdout:`1
`}]},74:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from typing import List

class Solution:

    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        m = len(matrix)
        n = len(matrix[0])
        left = 0
        right = m * n - 1
        while left <= right:
            mid = (left + right) // 2
            row = mid // n
            col = mid % n
            if target == matrix[row][col]:
                return True
            if target > matrix[row][col]:
                left = mid + 1
            if target < matrix[row][col]:
                right = mid - 1
        return False

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_matrix()
    a1 = int(sys.stdin.readline())
    result = Solution().searchMatrix(a0, a1)
    print('true' if result else 'false')

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. matrix：先一行 m n，再读取 m 行，每行 n 个空格分隔整数
2. target：一行整数`,outputFormat:"输出 true 或 false（大小写均可）。",tests:[{name:"1. 样例",args:[[[1,3,5],[7,9,11]],9],expected:!0,stdin:`2 3
1 3 5
7 9 11
9
`,stdout:`true
`},{name:"2. 边界 / 反例",args:[[[1,3,5],[7,9,11]],6],expected:!1,stdin:`2 3
1 3 5
7 9 11
6
`,stdout:`false
`},{name:"3. 边界 / 反例",args:[[[1]],1],expected:!0,stdin:`1 1
1
1
`,stdout:`true
`},{name:"4. 边界 / 反例",args:[[[1,2,3]],0],expected:!1,stdin:`1 3
1 2 3
0
`,stdout:`false
`},{name:"5. 边界 / 反例",args:[[[1],[3],[5]],5],expected:!0,stdin:`3 1
1
3
5
5
`,stdout:`true
`}]},75:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def sortColors(self, nums: List[int]) -> None:
        p0 = 0
        p2 = len(nums) - 1
        p = 0
        while p <= p2:
            if nums[p] == 0:
                nums[p], nums[p0] = (nums[p0], nums[p])
                p0 += 1
            elif nums[p] == 2:
                nums[p], nums[p2] = (nums[p2], nums[p])
                p2 -= 1
            else:
                p += 1
            if p < p0:
                p = p0

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    result = Solution().sortColors(a0)
    result = a0
    print(' '.join(map(str, result)))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. nums：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[2,0,2,1,1,0]],expected:[0,0,1,1,2,2],stdin:`6
2 0 2 1 1 0
`,stdout:`0 0 1 1 2 2
`},{name:"2. 边界 / 反例",args:[[2,0,1]],expected:[0,1,2],stdin:`3
2 0 1
`,stdout:`0 1 2
`},{name:"3. 边界 / 反例",args:[[0]],expected:[0],stdin:`1
0
`,stdout:`0
`},{name:"4. 边界 / 反例",args:[[2,2]],expected:[2,2],stdin:`2
2 2
`,stdout:`2 2
`},{name:"5. 边界 / 反例",args:[[1,0]],expected:[0,1],stdin:`2
1 0
`,stdout:`0 1
`}]},76:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution(object):

    def minWindow(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: str
        """
        need, window = ({}, {})
        for c in t:
            need[c] = need.get(c, 0) + 1
        left = 0
        right = 0
        valid = 0
        start = 0
        length = float('inf')
        while right < len(s):
            c = s[right]
            right += 1
            if c in need:
                window[c] = window.get(c, 0) + 1
                if window[c] == need[c]:
                    valid += 1
            while valid == len(need):
                if right - left < length:
                    start = left
                    length = right - left
                d = s[left]
                left += 1
                if d in need:
                    if window[d] == need[d]:
                        valid -= 1
                    window[d] -= 1
        return '' if length == float('inf') else s[start:start + length]

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = sys.stdin.readline().rstrip('\\r\\n')
    a1 = sys.stdin.readline().rstrip('\\r\\n')
    result = Solution().minWindow(a0, a1)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. s：一行原始字符串（可能为空串，保留行内空格）
2. t：一行原始字符串（可能为空串，保留行内空格）`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:["ADOBECODEBANC","ABC"],expected:"BANC",stdin:`ADOBECODEBANC
ABC
`,stdout:`BANC
`},{name:"2. 边界 / 反例",args:["a","a"],expected:"a",stdin:`a
a
`,stdout:`a
`},{name:"3. 边界 / 反例",args:["a","aa"],expected:"",stdin:`a
aa
`,stdout:`
`},{name:"4. 边界 / 反例",args:["aa","aa"],expected:"aa",stdin:`aa
aa
`,stdout:`aa
`},{name:"5. 边界 / 反例",args:["bba","ab"],expected:"ba",stdin:`bba
ab
`,stdout:`ba
`}]},78:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def subsets(self, nums: List[int]) -> List[List[int]]:
        result = []
        path = []

        def backtrack(startIndex):
            result.append(path.copy())
            for i in range(startIndex, len(nums)):
                path.append(nums[i])
                backtrack(i + 1)
                path.pop()
        backtrack(0)
        return result

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    result = Solution().subsets(a0)
    print(json.dumps(result, ensure_ascii=False))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. nums：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出一行 JSON，集合/组合答案允许合法顺序差异。",tests:[{name:"1. 样例",args:[[1,2,3]],expected:[[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]],stdin:`3
1 2 3
`,stdout:`[[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
`},{name:"2. 边界 / 反例",args:[[0]],expected:[[],[0]],stdin:`1
0
`,stdout:`[[], [0]]
`},{name:"3. 边界 / 反例",args:[[2,3]],expected:[[],[2],[3],[2,3]],stdin:`2
2 3
`,stdout:`[[], [2], [3], [2, 3]]
`},{name:"4. 边界 / 反例",args:[[-1,2]],expected:[[],[-1],[2],[-1,2]],stdin:`2
-1 2
`,stdout:`[[], [-1], [2], [-1, 2]]
`},{name:"5. 边界 / 反例",args:[[1,2,3,4]],expected:[[],[1],[2],[3],[4],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4],[1,2,3],[1,2,4],[1,3,4],[2,3,4],[1,2,3,4]],stdin:`4
1 2 3 4
`,stdout:`[[], [1], [2], [3], [4], [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4], [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4], [1, 2, 3, 4]]
`}]},79:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def exist(self, board: List[List[str]], word: str) -> bool:
        direction = [(-1, 0), (1, 0), (0, 1), (0, -1)]
        m, n = (len(board), len(board[0]))
        visited = [[False] * n for _ in range(m)]

        def dfs(i, j, index):
            if board[i][j] != word[index]:
                return False
            if index == len(word) - 1:
                return True
            visited[i][j] = True
            for di, dj in direction:
                ni, nj = (i + di, j + dj)
                if 0 <= ni < m and 0 <= nj < n and (not visited[ni][nj]):
                    if dfs(ni, nj, index + 1):
                        return True
            visited[i][j] = False
            return False
        for i in range(m):
            for j in range(n):
                if dfs(i, j, 0):
                    return True
        return False

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_chars()
    a1 = sys.stdin.readline().rstrip('\\r\\n')
    result = Solution().exist(a0, a1)
    print('true' if result else 'false')

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. board：先一行 m n，再读取 m 行连续字符，每行 n 个字符
2. word：一行原始字符串（可能为空串，保留行内空格）`,outputFormat:"输出 true 或 false（大小写均可）。",tests:[{name:"1. 样例",args:[[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED"],expected:!0,stdin:`3 4
ABCE
SFCS
ADEE
ABCCED
`,stdout:`true
`},{name:"2. 边界 / 反例",args:[[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCB"],expected:!1,stdin:`3 4
ABCE
SFCS
ADEE
ABCB
`,stdout:`false
`},{name:"3. 边界 / 反例",args:[[["a"]],"a"],expected:!0,stdin:`1 1
a
a
`,stdout:`true
`},{name:"4. 边界 / 反例",args:[[["a"]],"b"],expected:!1,stdin:`1 1
a
b
`,stdout:`false
`},{name:"5. 边界 / 反例",args:[[["a","a"]],"aaa"],expected:!1,stdin:`1 2
aa
aaa
`,stdout:`false
`}]},84:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def largestRectangleArea(self, heights: List[int]) -> int:
        stack = []
        result = 0
        heights = heights + [0]
        for i in range(len(heights)):
            while stack and heights[i] < heights[stack[-1]]:
                idx = stack.pop()
                left = stack[-1] if stack else -1
                right = i
                width = right - left - 1
                result = max(result, width * heights[idx])
            stack.append(i)
        return result

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    result = Solution().largestRectangleArea(a0)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. heights：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[2,1,5,6,2,3]],expected:10,stdin:`6
2 1 5 6 2 3
`,stdout:`10
`},{name:"2. 边界 / 反例",args:[[2,4]],expected:4,stdin:`2
2 4
`,stdout:`4
`},{name:"3. 边界 / 反例",args:[[2,2]],expected:4,stdin:`2
2 2
`,stdout:`4
`},{name:"4. 边界 / 反例",args:[[0]],expected:0,stdin:`1
0
`,stdout:`0
`},{name:"5. 边界 / 反例",args:[[1,2,3,4]],expected:6,stdin:`4
1 2 3 4
`,stdout:`6
`}]},94:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        result = []
        stack = []
        node = root
        while node or stack:
            while node:
                stack.append(node)
                node = node.left
            node = stack.pop()
            result.append(node.val)
            node = node.right
        return result

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = json.loads(sys.stdin.readline())
    a0, nodes = make_tree(a0)
    result = Solution().inorderTraversal(a0)
    print(' '.join(map(str, result)))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. root：一行 JSON；树使用层序数组，null 为空位；嵌套列表按数组保留`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[1,null,2,3]],expected:[1,3,2],stdin:`[1, null, 2, 3]
`,stdout:`1 3 2
`},{name:"2. 边界 / 反例",args:[[]],expected:[],stdin:`[]
`,stdout:`
`},{name:"3. 边界 / 反例",args:[[1]],expected:[1],stdin:`[1]
`,stdout:`1
`},{name:"4. 边界 / 反例",args:[[2,1,3]],expected:[1,2,3],stdin:`[2, 1, 3]
`,stdout:`1 2 3
`},{name:"5. 边界 / 反例",args:[[3,2,null,1]],expected:[1,2,3],stdin:`[3, 2, null, 1]
`,stdout:`1 2 3
`}]},98:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from typing import Optional

class TreeNode:

    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:

    def isValidBST(self, root: Optional[TreeNode]) -> bool:

        def validate(node, lower, upper):
            if not node:
                return True
            if not lower < node.val < upper:
                return False
            return validate(node.left, lower, node.val) and validate(node.right, node.val, upper)
        return validate(root, -float('inf'), float('inf'))

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = json.loads(sys.stdin.readline())
    a0, nodes = make_tree(a0)
    result = Solution().isValidBST(a0)
    print('true' if result else 'false')

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. root：一行 JSON；树使用层序数组，null 为空位；嵌套列表按数组保留`,outputFormat:"输出 true 或 false（大小写均可）。",tests:[{name:"1. 样例",args:[[2,1,3]],expected:!0,stdin:`[2, 1, 3]
`,stdout:`true
`},{name:"2. 边界 / 反例",args:[[5,1,4,null,null,3,6]],expected:!1,stdin:`[5, 1, 4, null, null, 3, 6]
`,stdout:`false
`},{name:"3. 边界 / 反例",args:[[1,1]],expected:!1,stdin:`[1, 1]
`,stdout:`false
`},{name:"4. 边界 / 反例",args:[[0]],expected:!0,stdin:`[0]
`,stdout:`true
`},{name:"5. 边界 / 反例",args:[[5,4,6,null,null,3,7]],expected:!1,stdin:`[5, 4, 6, null, null, 3, 7]
`,stdout:`false
`}]},101:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def isSymmetric(self, root: Optional[TreeNode]) -> bool:

        def check(left, right) -> bool:
            if not left and (not right):
                return True
            if not left or not right:
                return False
            if left.val != right.val:
                return False
            return check(left.left, right.right) and check(left.right, right.left)
        return check(root.left, root.right)

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = json.loads(sys.stdin.readline())
    a0, nodes = make_tree(a0)
    result = Solution().isSymmetric(a0)
    print('true' if result else 'false')

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. root：一行 JSON；树使用层序数组，null 为空位；嵌套列表按数组保留`,outputFormat:"输出 true 或 false（大小写均可）。",tests:[{name:"1. 样例",args:[[1,2,2,3,4,4,3]],expected:!0,stdin:`[1, 2, 2, 3, 4, 4, 3]
`,stdout:`true
`},{name:"2. 边界 / 反例",args:[[1,2,2,null,3,null,3]],expected:!1,stdin:`[1, 2, 2, null, 3, null, 3]
`,stdout:`false
`},{name:"3. 边界 / 反例",args:[[1]],expected:!0,stdin:`[1]
`,stdout:`true
`},{name:"4. 边界 / 反例",args:[[1,2]],expected:!1,stdin:`[1, 2]
`,stdout:`false
`},{name:"5. 边界 / 反例",args:[[1,2,2,null,3,3]],expected:!0,stdin:`[1, 2, 2, null, 3, 3]
`,stdout:`true
`}]},102:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from collections import deque

class Solution:

    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        result = []
        queue = deque([root])
        while queue:
            level_size = len(queue)
            level = []
            for i in range(level_size):
                node = queue.popleft()
                level.append(node.val)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            result.append(level)
        return result

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = json.loads(sys.stdin.readline())
    a0, nodes = make_tree(a0)
    result = Solution().levelOrder(a0)
    print(json.dumps(result, ensure_ascii=False))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. root：一行 JSON；树使用层序数组，null 为空位；嵌套列表按数组保留`,outputFormat:"输出一行 JSON，集合/组合答案允许合法顺序差异。",tests:[{name:"1. 样例",args:[[3,9,20,null,null,15,7]],expected:[[3],[9,20],[15,7]],stdin:`[3, 9, 20, null, null, 15, 7]
`,stdout:`[[3], [9, 20], [15, 7]]
`},{name:"2. 边界 / 反例",args:[[]],expected:[],stdin:`[]
`,stdout:`[]
`},{name:"3. 边界 / 反例",args:[[1]],expected:[[1]],stdin:`[1]
`,stdout:`[[1]]
`},{name:"4. 边界 / 反例",args:[[1,2]],expected:[[1],[2]],stdin:`[1, 2]
`,stdout:`[[1], [2]]
`},{name:"5. 边界 / 反例",args:[[1,2,3]],expected:[[1],[2,3]],stdin:`[1, 2, 3]
`,stdout:`[[1], [2, 3]]
`}]},104:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        left = self.maxDepth(root.left)
        right = self.maxDepth(root.right)
        return max(left, right) + 1

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = json.loads(sys.stdin.readline())
    a0, nodes = make_tree(a0)
    result = Solution().maxDepth(a0)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. root：一行 JSON；树使用层序数组，null 为空位；嵌套列表按数组保留`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[3,9,20,null,null,15,7]],expected:3,stdin:`[3, 9, 20, null, null, 15, 7]
`,stdout:`3
`},{name:"2. 边界 / 反例",args:[[]],expected:0,stdin:`[]
`,stdout:`0
`},{name:"3. 边界 / 反例",args:[[1]],expected:1,stdin:`[1]
`,stdout:`1
`},{name:"4. 边界 / 反例",args:[[1,null,2]],expected:2,stdin:`[1, null, 2]
`,stdout:`2
`},{name:"5. 边界 / 反例",args:[[1,2,null,3]],expected:3,stdin:`[1, 2, null, 3]
`,stdout:`3
`}]},105:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from typing import List, Optional

class TreeNode:

    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:

    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        if not preorder:
            return None
        root = TreeNode(preorder[0])
        mid = inorder.index(preorder[0])
        root.left = self.buildTree(preorder[1:mid + 1], inorder[:mid])
        root.right = self.buildTree(preorder[mid + 1:], inorder[mid + 1:])
        return root

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    a1 = read_array()
    result = Solution().buildTree(a0, a1)
    result = encode_tree(result)
    print(json.dumps(result, ensure_ascii=False))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. preorder：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行
2. inorder：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出一行 JSON，集合/组合答案允许合法顺序差异。",tests:[{name:"1. 样例",args:[[3,9,20,15,7],[9,3,15,20,7]],expected:[3,9,20,null,null,15,7],stdin:`5
3 9 20 15 7
5
9 3 15 20 7
`,stdout:`[3, 9, 20, null, null, 15, 7]
`},{name:"2. 边界 / 反例",args:[[-1],[-1]],expected:[-1],stdin:`1
-1
1
-1
`,stdout:`[-1]
`},{name:"3. 边界 / 反例",args:[[1,2],[2,1]],expected:[1,2],stdin:`2
1 2
2
2 1
`,stdout:`[1, 2]
`},{name:"4. 边界 / 反例",args:[[1,2],[1,2]],expected:[1,null,2],stdin:`2
1 2
2
1 2
`,stdout:`[1, null, 2]
`},{name:"5. 边界 / 反例",args:[[2,1,3],[1,2,3]],expected:[2,1,3],stdin:`3
2 1 3
3
1 2 3
`,stdout:`[2, 1, 3]
`}]},108:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        if not nums:
            return None
        mid = len(nums) // 2
        node = TreeNode(nums[mid])
        node.left = self.sortedArrayToBST(nums[:mid])
        node.right = self.sortedArrayToBST(nums[mid + 1:])
        return node

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    result = Solution().sortedArrayToBST(a0)
    result = encode_tree(result)
    print(json.dumps(result, ensure_ascii=False))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. nums：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出一行 JSON 层序数组，null 表示空节点；任意合法的平衡 BST 均接受。",tests:[{name:"1. 样例",args:[[-10,-3,0,5,9]],expected:!0,stdin:`5
-10 -3 0 5 9
`,stdout:`[0, -3, 9, -10, null, 5]
`},{name:"2. 边界 / 反例",args:[[1,3]],expected:!0,stdin:`2
1 3
`,stdout:`[3, 1]
`},{name:"3. 边界 / 反例",args:[[1]],expected:!0,stdin:`1
1
`,stdout:`[1]
`},{name:"4. 边界 / 反例",args:[[-2,-1,0,1]],expected:!0,stdin:`4
-2 -1 0 1
`,stdout:`[0, -1, 1, -2]
`},{name:"5. 边界 / 反例",args:[[0,1,2,3,4,5]],expected:!0,stdin:`6
0 1 2 3 4 5
`,stdout:`[3, 1, 5, 0, 2, 4]
`}]},114:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from typing import Optional

class TreeNode:

    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:

    def flatten(self, root: Optional[TreeNode]) -> None:
        nodes = []

        def dfs(node):
            if not node:
                return
            nodes.append(node)
            dfs(node.left)
            dfs(node.right)
        dfs(root)
        for i in range(len(nodes) - 1):
            nodes[i].right = nodes[i + 1]
            nodes[i].left = None

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = json.loads(sys.stdin.readline())
    a0, nodes = make_tree(a0)
    result = Solution().flatten(a0)
    result = []
    while a0: result.append(a0.val); a0 = a0.right
    print(' '.join(map(str, result)))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. root：一行 JSON；树使用层序数组，null 为空位；嵌套列表按数组保留`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[1,2,5,3,4,null,6]],expected:[1,2,3,4,5,6],stdin:`[1, 2, 5, 3, 4, null, 6]
`,stdout:`1 2 3 4 5 6
`},{name:"2. 边界 / 反例",args:[[]],expected:[],stdin:`[]
`,stdout:`
`},{name:"3. 边界 / 反例",args:[[0]],expected:[0],stdin:`[0]
`,stdout:`0
`},{name:"4. 边界 / 反例",args:[[1,2]],expected:[1,2],stdin:`[1, 2]
`,stdout:`1 2
`},{name:"5. 边界 / 反例",args:[[1,null,2,3]],expected:[1,2,3],stdin:`[1, null, 2, 3]
`,stdout:`1 2 3
`}]},118:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def generate(self, numRows: int) -> List[List[int]]:
        result = [[1]]
        for i in range(1, numRows):
            rows = [1]
            for j in range(1, i):
                rows.append(result[i - 1][j - 1] + result[i - 1][j])
            rows.append(1)
            result.append(rows)
        return result

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = int(sys.stdin.readline())
    result = Solution().generate(a0)
    print(json.dumps(result, ensure_ascii=False))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. numRows：一行整数`,outputFormat:"输出一行 JSON，集合/组合答案允许合法顺序差异。",tests:[{name:"1. 样例",args:[1],expected:[[1]],stdin:`1
`,stdout:`[[1]]
`},{name:"2. 边界 / 反例",args:[2],expected:[[1],[1,1]],stdin:`2
`,stdout:`[[1], [1, 1]]
`},{name:"3. 边界 / 反例",args:[3],expected:[[1],[1,1],[1,2,1]],stdin:`3
`,stdout:`[[1], [1, 1], [1, 2, 1]]
`},{name:"4. 边界 / 反例",args:[4],expected:[[1],[1,1],[1,2,1],[1,3,3,1]],stdin:`4
`,stdout:`[[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]
`},{name:"5. 边界 / 反例",args:[5],expected:[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]],stdin:`5
`,stdout:`[[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
`}]},121:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def maxProfit(self, prices: List[int]) -> int:
        buy = float('inf')
        income = 0
        for num in prices:
            buy = min(num, buy)
            income = max(num - buy, income)
        return income

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    result = Solution().maxProfit(a0)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. prices：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[7,1,5,3,6,4]],expected:5,stdin:`6
7 1 5 3 6 4
`,stdout:`5
`},{name:"2. 边界 / 反例",args:[[7,6,4,3,1]],expected:0,stdin:`5
7 6 4 3 1
`,stdout:`0
`},{name:"3. 边界 / 反例",args:[[1]],expected:0,stdin:`1
1
`,stdout:`0
`},{name:"4. 边界 / 反例",args:[[1,2]],expected:1,stdin:`2
1 2
`,stdout:`1
`},{name:"5. 边界 / 反例",args:[[2,1,2,0,1]],expected:1,stdin:`5
2 1 2 0 1
`,stdout:`1
`}]},124:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from typing import Optional

class TreeNode:

    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:

    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        maximum = float('-inf')

        def dfs(node):
            nonlocal maximum
            if not node:
                return 0
            left_gain = max(dfs(node.left), 0)
            right_gain = max(dfs(node.right), 0)
            turning = node.val + left_gain + right_gain
            maximum = max(turning, maximum)
            return node.val + max(left_gain, right_gain)
        dfs(root)
        return maximum

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = json.loads(sys.stdin.readline())
    a0, nodes = make_tree(a0)
    result = Solution().maxPathSum(a0)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. root：一行 JSON；树使用层序数组，null 为空位；嵌套列表按数组保留`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[1,2,3]],expected:6,stdin:`[1, 2, 3]
`,stdout:`6
`},{name:"2. 边界 / 反例",args:[[-10,9,20,null,null,15,7]],expected:42,stdin:`[-10, 9, 20, null, null, 15, 7]
`,stdout:`42
`},{name:"3. 边界 / 反例",args:[[-3]],expected:-3,stdin:`[-3]
`,stdout:`-3
`},{name:"4. 边界 / 反例",args:[[-2,-1]],expected:-1,stdin:`[-2, -1]
`,stdout:`-1
`},{name:"5. 边界 / 反例",args:[[2,-1]],expected:2,stdin:`[2, -1]
`,stdout:`2
`}]},128:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def longestConsecutive(self, nums: List[int]) -> int:
        num_set = set(nums)
        longest = 0
        for num in num_set:
            if num - 1 not in num_set:
                current = num
                length = 1
                while current + 1 in num_set:
                    current += 1
                    length += 1
                longest = max(longest, length)
        return longest

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    result = Solution().longestConsecutive(a0)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. nums：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[100,4,200,1,3,2]],expected:4,stdin:`6
100 4 200 1 3 2
`,stdout:`4
`},{name:"2. 边界 / 反例",args:[[]],expected:0,stdin:`0

`,stdout:`0
`},{name:"3. 边界 / 反例",args:[[1,2,0,1]],expected:3,stdin:`4
1 2 0 1
`,stdout:`3
`},{name:"4. 边界 / 反例",args:[[-2,-1,0,2]],expected:3,stdin:`4
-2 -1 0 2
`,stdout:`3
`},{name:"5. 边界 / 反例",args:[[7,7]],expected:1,stdin:`2
7 7
`,stdout:`1
`}]},131:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from typing import List

class Solution:

    def partition(self, s: str) -> List[List[str]]:
        res = []
        path = []
        n = len(s)

        def dfs(start):
            if start == n:
                res.append(path.copy())
                return
            for end in range(start, n):
                if self.is_pal(s, start, end):
                    path.append(s[start:end + 1])
                    dfs(end + 1)
                    path.pop()
        dfs(0)
        return res

    def is_pal(self, s, l, r):
        while l < r:
            if s[l] != s[r]:
                return False
            l += 1
            r -= 1
        return True

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = sys.stdin.readline().rstrip('\\r\\n')
    result = Solution().partition(a0)
    print(json.dumps(result, ensure_ascii=False))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. s：一行原始字符串（可能为空串，保留行内空格）`,outputFormat:"输出一行 JSON，集合/组合答案允许合法顺序差异。",tests:[{name:"1. 样例",args:["aab"],expected:[["a","a","b"],["aa","b"]],stdin:`aab
`,stdout:`[["a", "a", "b"], ["aa", "b"]]
`},{name:"2. 边界 / 反例",args:["a"],expected:[["a"]],stdin:`a
`,stdout:`[["a"]]
`},{name:"3. 边界 / 反例",args:["ab"],expected:[["a","b"]],stdin:`ab
`,stdout:`[["a", "b"]]
`},{name:"4. 边界 / 反例",args:["aaa"],expected:[["a","a","a"],["a","aa"],["aa","a"],["aaa"]],stdin:`aaa
`,stdout:`[["a", "a", "a"], ["a", "aa"], ["aa", "a"], ["aaa"]]
`},{name:"5. 边界 / 反例",args:["aba"],expected:[["a","b","a"],["aba"]],stdin:`aba
`,stdout:`[["a", "b", "a"], ["aba"]]
`}]},136:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def singleNumber(self, nums: List[int]) -> int:
        result = 0
        for i in nums:
            result ^= i
        return result

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    result = Solution().singleNumber(a0)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. nums：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[2,2,1]],expected:1,stdin:`3
2 2 1
`,stdout:`1
`},{name:"2. 边界 / 反例",args:[[4,1,2,1,2]],expected:4,stdin:`5
4 1 2 1 2
`,stdout:`4
`},{name:"3. 边界 / 反例",args:[[1]],expected:1,stdin:`1
1
`,stdout:`1
`},{name:"4. 边界 / 反例",args:[[-1,2,2]],expected:-1,stdin:`3
-1 2 2
`,stdout:`-1
`},{name:"5. 边界 / 反例",args:[[0,1,1]],expected:0,stdin:`3
0 1 1
`,stdout:`0
`}]},138:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from typing import Optional

class Node:

    def __init__(self, x: int, next: 'Node'=None, random: 'Node'=None):
        self.val = int(x)
        self.next = next
        self.random = random

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
        return d[head]

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = json.loads(sys.stdin.readline())
    nodes = [Node(v) for v, _ in a0]
    for i, (_, r) in enumerate(a0):
        nodes[i].next = nodes[i+1] if i+1 < len(nodes) else None
        nodes[i].random = nodes[r] if r is not None else None
    a0 = nodes[0] if nodes else None
    result = Solution().copyRandomList(a0)
    copied = []
    while result: copied.append(result); result = result.next
    result = [[n.val, next((i for i, v in enumerate(copied) if v is n.random), None)] for n in copied]
    print(json.dumps(result, ensure_ascii=False))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. head：一行 JSON；树使用层序数组，null 为空位；嵌套列表按数组保留`,outputFormat:"输出一行 JSON 的 [[值, random下标], …]，random 为空用 null。此模式检查文本结构，节点深拷贝身份约束请在核心代码模式验证。",tests:[{name:"1. 样例",args:[[[7,null],[13,0],[11,4],[10,2],[1,0]]],expected:[[7,null],[13,0],[11,4],[10,2],[1,0]],stdin:`[[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]
`,stdout:`[[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]
`},{name:"2. 边界 / 反例",args:[[]],expected:[],stdin:`[]
`,stdout:`[]
`},{name:"3. 边界 / 反例",args:[[[1,0]]],expected:[[1,0]],stdin:`[[1, 0]]
`,stdout:`[[1, 0]]
`},{name:"4. 边界 / 反例",args:[[[1,null]]],expected:[[1,null]],stdin:`[[1, null]]
`,stdout:`[[1, null]]
`},{name:"5. 边界 / 反例",args:[[[1,1],[1,0]]],expected:[[1,1],[1,0]],stdin:`[[1, 1], [1, 0]]
`,stdout:`[[1, 1], [1, 0]]
`}]},139:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from typing import List

class Solution:

    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        word_set = set(wordDict)
        n = len(s)
        dp = [False] * (n + 1)
        dp[0] = True
        for i in range(1, n + 1):
            for j in range(0, i):
                if dp[j] and s[j:i] in word_set:
                    dp[i] = True
                    break
        return dp[-1]

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = sys.stdin.readline().rstrip('\\r\\n')
    a1 = read_words()
    result = Solution().wordBreak(a0, a1)
    print('true' if result else 'false')

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. s：一行原始字符串（可能为空串，保留行内空格）
2. wordDict：先一行字符串数量 n，再逐行读取 n 个字符串（空字符串占一行）`,outputFormat:"输出 true 或 false（大小写均可）。",tests:[{name:"1. 样例",args:["leetcode",["leet","code"]],expected:!0,stdin:`leetcode
2
leet
code
`,stdout:`true
`},{name:"2. 边界 / 反例",args:["applepenapple",["apple","pen"]],expected:!0,stdin:`applepenapple
2
apple
pen
`,stdout:`true
`},{name:"3. 边界 / 反例",args:["catsandog",["cats","dog","sand","and","cat"]],expected:!1,stdin:`catsandog
5
cats
dog
sand
and
cat
`,stdout:`false
`},{name:"4. 边界 / 反例",args:["a",["a"]],expected:!0,stdin:`a
1
a
`,stdout:`true
`},{name:"5. 边界 / 反例",args:["aaaaaaa",["aaaa","aaa"]],expected:!0,stdin:`aaaaaaa
2
aaaa
aaa
`,stdout:`true
`}]},141:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def hasCycle(self, head: Optional[ListNode]) -> bool:
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                return True
        return False

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    a1 = int(sys.stdin.readline())
    a0, nodes = make_list(a0)
    if a1 >= 0: nodes[-1].next = nodes[a1]
    result = Solution().hasCycle(a0)
    print('true' if result else 'false')

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. head：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行
2. 参数：一行整数`,outputFormat:"输出 true 或 false（大小写均可）。",tests:[{name:"1. 样例",args:[[3,2,0,-4],1],expected:!0,stdin:`4
3 2 0 -4
1
`,stdout:`true
`},{name:"2. 边界 / 反例",args:[[1,2],0],expected:!0,stdin:`2
1 2
0
`,stdout:`true
`},{name:"3. 边界 / 反例",args:[[1],-1],expected:!1,stdin:`1
1
-1
`,stdout:`false
`},{name:"4. 边界 / 反例",args:[[1],0],expected:!0,stdin:`1
1
0
`,stdout:`true
`},{name:"5. 边界 / 反例",args:[[],-1],expected:!1,stdin:`0

-1
`,stdout:`false
`}]},142:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        fast = slow = ans = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                while ans != slow:
                    ans = ans.next
                    slow = slow.next
                return ans
        return None

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    a1 = int(sys.stdin.readline())
    a0, nodes = make_list(a0)
    if a1 >= 0: nodes[-1].next = nodes[a1]
    result = Solution().detectCycle(a0)
    result = next((i for i, n in enumerate(nodes) if n is result), -1)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. head：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行
2. 参数：一行整数`,outputFormat:"输出环入口在原链表中的 0-based 下标；无环输出 -1。",tests:[{name:"1. 样例",args:[[3,2,0,-4],1],expected:1,stdin:`4
3 2 0 -4
1
`,stdout:`1
`},{name:"2. 边界 / 反例",args:[[1,2],0],expected:0,stdin:`2
1 2
0
`,stdout:`0
`},{name:"3. 边界 / 反例",args:[[1],-1],expected:null,stdin:`1
1
-1
`,stdout:`-1
`},{name:"4. 边界 / 反例",args:[[1],0],expected:0,stdin:`1
1
0
`,stdout:`0
`},{name:"5. 边界 / 反例",args:[[],-1],expected:null,stdin:`0

-1
`,stdout:`-1
`}]},146:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Node:

    def __init__(self, key, val):
        self.key = key
        self.val = val
        self.prev = None
        self.next = None

class DoublelistNode:

    def __init__(self):
        self.head = Node(0, 0)
        self.tail = Node(0, 0)
        self._size = 0
        self.head.next = self.tail
        self.tail.prev = self.head

    def addlast(self, x):
        x.prev = self.tail.prev
        x.next = self.tail
        self.tail.prev.next = x
        self.tail.prev = x
        self._size += 1

    def remove(self, x):
        x.next.prev = x.prev
        x.prev.next = x.next
        self._size -= 1

    def removefirst(self):
        if self.head.next == self.tail:
            return None
        first = self.head.next
        self.remove(first)
        return first

    def size(self):
        return self._size

class LRUCache:

    def __init__(self, capacity: int):
        self.map = {}
        self.cache = DoublelistNode()
        self.cap = capacity

    def get(self, key: int) -> int:
        if key not in self.map:
            return -1
        self.makerecently(key)
        return self.map[key].val

    def put(self, key: int, val: int) -> None:
        if key in self.map:
            self.deletekey(key)
            self.addrecently(key, val)
            return
        if self.cap == self.cache.size():
            self.removeLeastRecently()
        self.addrecently(key, val)

    def makerecently(self, key: int):
        x = self.map[key]
        self.cache.remove(x)
        self.cache.addlast(x)

    def addrecently(self, key: int, val: int):
        x = Node(key, val)
        self.cache.addlast(x)
        self.map[key] = x

    def deletekey(self, key: int):
        x = self.map[key]
        self.cache.remove(x)
        self.map.pop(key)

    def removeLeastRecently(self):
        deletedNode = self.cache.removefirst()
        deletedKey = deletedNode.key
        self.map.pop(deletedKey)

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = json.loads(sys.stdin.readline())
    a1 = json.loads(sys.stdin.readline())
    obj = globals()[a0[0]](*a1[0])
    result = [None]
    for name, params in zip(a0[1:], a1[1:]): result.append(getattr(obj, name)(*params))
    print(json.dumps(result, ensure_ascii=False))

if __name__ == '__main__':
    solve()
`,inputFormat:"第一行是操作名 JSON 数组（首项为构造函数），第二行是对应参数 JSON 数组。",outputFormat:"输出一行 JSON，集合/组合答案允许合法顺序差异。",tests:[{name:"1. 样例",args:[["LRUCache","put","put","get","put","get"],[[2],[1,1],[2,2],[1],[3,3],[2]]],expected:[null,null,null,1,null,-1],stdin:`["LRUCache", "put", "put", "get", "put", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2]]
`,stdout:`[null, null, null, 1, null, -1]
`},{name:"2. 边界 / 反例",args:[["LRUCache","put","put","get","get"],[[1],[1,1],[2,2],[1],[2]]],expected:[null,null,null,-1,2],stdin:`["LRUCache", "put", "put", "get", "get"]
[[1], [1, 1], [2, 2], [1], [2]]
`,stdout:`[null, null, null, -1, 2]
`},{name:"3. 边界 / 反例",args:[["LRUCache","put","put","get"],[[2],[1,1],[1,2],[1]]],expected:[null,null,null,2],stdin:`["LRUCache", "put", "put", "get"]
[[2], [1, 1], [1, 2], [1]]
`,stdout:`[null, null, null, 2]
`},{name:"4. 边界 / 反例",args:[["LRUCache","get"],[[2],[7]]],expected:[null,-1],stdin:`["LRUCache", "get"]
[[2], [7]]
`,stdout:`[null, -1]
`},{name:"5. 边界 / 反例",args:[["LRUCache","put","put","put","put","get","get"],[[2],[1,1],[2,2],[1,3],[3,3],[2],[1]]],expected:[null,null,null,null,null,-1,3],stdin:`["LRUCache", "put", "put", "put", "put", "get", "get"]
[[2], [1, 1], [2, 2], [1, 3], [3, 3], [2], [1]]
`,stdout:`[null, null, null, null, null, -1, 3]
`}]},148:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from typing import Optional

class ListNode:

    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:

    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head

        def get_mid_and_cut(head):
            slow, fast = (head, head.next)
            while fast and fast.next:
                slow = slow.next
                fast = fast.next.next
            mid = slow.next
            slow.next = None
            return mid

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
        mid = get_mid_and_cut(head)
        left = self.sortList(head)
        right = self.sortList(mid)
        return merge(left, right)

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    a0 = make_list(a0)[0]
    result = Solution().sortList(a0)
    result = encode_list(result)
    print(' '.join(map(str, result)))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. head：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[4,2,1,3]],expected:[1,2,3,4],stdin:`4
4 2 1 3
`,stdout:`1 2 3 4
`},{name:"2. 边界 / 反例",args:[[-1,5,3,4,0]],expected:[-1,0,3,4,5],stdin:`5
-1 5 3 4 0
`,stdout:`-1 0 3 4 5
`},{name:"3. 边界 / 反例",args:[[]],expected:[],stdin:`0

`,stdout:`
`},{name:"4. 边界 / 反例",args:[[1]],expected:[1],stdin:`1
1
`,stdout:`1
`},{name:"5. 边界 / 反例",args:[[2,1,2]],expected:[1,2,2],stdin:`3
2 1 2
`,stdout:`1 2 2
`}]},152:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from typing import List

class Solution:

    def maxProduct(self, nums: List[int]) -> int:
        n = len(nums)
        max_dp = [0] * n
        min_dp = [0] * n
        max_dp[0] = nums[0]
        min_dp[0] = nums[0]
        for i in range(1, n):
            num = nums[i]
            max_dp[i] = max(num, num * max_dp[i - 1], num * min_dp[i - 1])
            min_dp[i] = min(num, num * max_dp[i - 1], num * min_dp[i - 1])
        return max(max_dp)

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    result = Solution().maxProduct(a0)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. nums：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[2,3,-2,4]],expected:6,stdin:`4
2 3 -2 4
`,stdout:`6
`},{name:"2. 边界 / 反例",args:[[-2,0,-1]],expected:0,stdin:`3
-2 0 -1
`,stdout:`0
`},{name:"3. 边界 / 反例",args:[[-2,3,-4]],expected:24,stdin:`3
-2 3 -4
`,stdout:`24
`},{name:"4. 边界 / 反例",args:[[-2]],expected:-2,stdin:`1
-2
`,stdout:`-2
`},{name:"5. 边界 / 反例",args:[[0,2]],expected:2,stdin:`2
0 2
`,stdout:`2
`}]},153:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from typing import List

class Solution:

    def findMin(self, nums: List[int]) -> int:
        n = len(nums)
        left = 0
        right = n - 1
        while left < right:
            mid = (left + right) // 2
            if nums[mid] < nums[right]:
                right = mid
            if nums[mid] > nums[right]:
                left = mid + 1
        return nums[left]

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    result = Solution().findMin(a0)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. nums：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[3,4,5,1,2]],expected:1,stdin:`5
3 4 5 1 2
`,stdout:`1
`},{name:"2. 边界 / 反例",args:[[4,5,6,7,0,1,2]],expected:0,stdin:`7
4 5 6 7 0 1 2
`,stdout:`0
`},{name:"3. 边界 / 反例",args:[[11,13,15,17]],expected:11,stdin:`4
11 13 15 17
`,stdout:`11
`},{name:"4. 边界 / 反例",args:[[1]],expected:1,stdin:`1
1
`,stdout:`1
`},{name:"5. 边界 / 反例",args:[[2,1]],expected:1,stdin:`2
2 1
`,stdout:`1
`}]},155:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class MinStack:

    def __init__(self):
        self.stack = []
        self.minval = []

    def push(self, val: int) -> None:
        self.stack.append(val)
        if self.minval:
            self.minval.append(min(val, self.minval[-1]))
        else:
            self.minval.append(val)

    def pop(self) -> None:
        self.stack.pop()
        self.minval.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.minval[-1]

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = json.loads(sys.stdin.readline())
    a1 = json.loads(sys.stdin.readline())
    obj = globals()[a0[0]](*a1[0])
    result = [None]
    for name, params in zip(a0[1:], a1[1:]): result.append(getattr(obj, name)(*params))
    print(json.dumps(result, ensure_ascii=False))

if __name__ == '__main__':
    solve()
`,inputFormat:"第一行是操作名 JSON 数组（首项为构造函数），第二行是对应参数 JSON 数组。",outputFormat:"输出一行 JSON，集合/组合答案允许合法顺序差异。",tests:[{name:"1. 样例",args:[["MinStack","push","push","push","getMin","pop","top","getMin"],[[],[-2],[0],[-3],[],[],[],[]]],expected:[null,null,null,null,-3,null,0,-2],stdin:`["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"]
[[], [-2], [0], [-3], [], [], [], []]
`,stdout:`[null, null, null, null, -3, null, 0, -2]
`},{name:"2. 边界 / 反例",args:[["MinStack","push","top"],[[],[1],[]]],expected:[null,null,1],stdin:`["MinStack", "push", "top"]
[[], [1], []]
`,stdout:`[null, null, 1]
`},{name:"3. 边界 / 反例",args:[["MinStack","push","getMin"],[[],[0],[]]],expected:[null,null,0],stdin:`["MinStack", "push", "getMin"]
[[], [0], []]
`,stdout:`[null, null, 0]
`},{name:"4. 边界 / 反例",args:[["MinStack","push","push","pop","getMin"],[[],[1],[1],[],[]]],expected:[null,null,null,null,1],stdin:`["MinStack", "push", "push", "pop", "getMin"]
[[], [1], [1], [], []]
`,stdout:`[null, null, null, null, 1]
`},{name:"5. 边界 / 反例",args:[["MinStack","push","push","getMin","top"],[[],[-5],[-2],[],[]]],expected:[null,null,null,-5,-2],stdin:`["MinStack", "push", "push", "getMin", "top"]
[[], [-5], [-2], [], []]
`,stdout:`[null, null, null, -5, -2]
`}]},160:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        a, b = (headA, headB)
        while a != b:
            a = a.next if a else headB
            b = b.next if b else headA
        return a

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    a1 = read_array()
    a2 = read_array()
    shared, _ = make_list(a2)
    a0, first = make_list(a0)
    a1, second = make_list(a1)
    if first: first[-1].next = shared
    else: a0 = shared
    if second: second[-1].next = shared
    else: a1 = shared
    nodes = first + ([shared] if shared else [])
    result = Solution().getIntersectionNode(a0, a1)
    result = next((i for i, n in enumerate(nodes) if n is result), -1)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. headA：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行
2. headB：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行
3. 参数：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出交点在 A 链表中的 0-based 下标；无交点输出 -1。输入依次为 A 独有前缀、B 独有前缀、共享尾部。",tests:[{name:"1. 样例",args:[[4,1],[5,6,1],[8,4,5]],expected:!0,stdin:`2
4 1
3
5 6 1
3
8 4 5
`,stdout:`2
`},{name:"2. 边界 / 反例",args:[[1],[2],[]],expected:!0,stdin:`1
1
1
2
0

`,stdout:`-1
`},{name:"3. 边界 / 反例",args:[[],[],[1]],expected:!0,stdin:`0

0

1
1
`,stdout:`0
`},{name:"4. 边界 / 反例",args:[[],[2],[3]],expected:!0,stdin:`0

1
2
1
3
`,stdout:`0
`},{name:"5. 边界 / 反例",args:[[1,1],[1,1],[]],expected:!0,stdin:`2
1 1
2
1 1
0

`,stdout:`-1
`}]},169:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def majorityElement(self, nums: List[int]) -> int:
        candidate = 0
        vote = 0
        for num in nums:
            if vote == 0:
                candidate = num
            if num == candidate:
                vote += 1
            else:
                vote -= 1
        return candidate

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    result = Solution().majorityElement(a0)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. nums：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[3,2,3]],expected:3,stdin:`3
3 2 3
`,stdout:`3
`},{name:"2. 边界 / 反例",args:[[2,2,1,1,1,2,2]],expected:2,stdin:`7
2 2 1 1 1 2 2
`,stdout:`2
`},{name:"3. 边界 / 反例",args:[[1]],expected:1,stdin:`1
1
`,stdout:`1
`},{name:"4. 边界 / 反例",args:[[-1,-1,2]],expected:-1,stdin:`3
-1 -1 2
`,stdout:`-1
`},{name:"5. 边界 / 反例",args:[[0,0,1]],expected:0,stdin:`3
0 0 1
`,stdout:`0
`}]},189:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def rotate(self, nums: list[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        def reverse(nums, left, right):
            while left < right:
                tmp = nums[left]
                nums[left] = nums[right]
                nums[right] = tmp
                left += 1
                right -= 1
        n = len(nums)
        k = k % n
        reverse(nums, 0, n - 1)
        reverse(nums, 0, k - 1)
        reverse(nums, k, n - 1)

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    a1 = int(sys.stdin.readline())
    result = Solution().rotate(a0, a1)
    result = a0
    print(' '.join(map(str, result)))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. nums：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行
2. k：一行整数`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[1,2,3,4,5,6,7],3],expected:[5,6,7,1,2,3,4],stdin:`7
1 2 3 4 5 6 7
3
`,stdout:`5 6 7 1 2 3 4
`},{name:"2. 边界 / 反例",args:[[-1,-100,3,99],2],expected:[3,99,-1,-100],stdin:`4
-1 -100 3 99
2
`,stdout:`3 99 -1 -100
`},{name:"3. 边界 / 反例",args:[[1],10],expected:[1],stdin:`1
1
10
`,stdout:`1
`},{name:"4. 边界 / 反例",args:[[1,2],0],expected:[1,2],stdin:`2
1 2
0
`,stdout:`1 2
`},{name:"5. 边界 / 反例",args:[[1,2,3],4],expected:[3,1,2],stdin:`3
1 2 3
4
`,stdout:`3 1 2
`}]},198:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def rob(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]
        dp = [0] * len(nums)
        dp[0] = nums[0]
        dp[1] = max(nums[0], nums[1])
        for i in range(2, len(nums)):
            dp[i] = max(dp[i - 2] + nums[i], dp[i - 1])
        return dp[-1]

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    result = Solution().rob(a0)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. nums：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[1,2,3,1]],expected:4,stdin:`4
1 2 3 1
`,stdout:`4
`},{name:"2. 边界 / 反例",args:[[2,7,9,3,1]],expected:12,stdin:`5
2 7 9 3 1
`,stdout:`12
`},{name:"3. 边界 / 反例",args:[[1]],expected:1,stdin:`1
1
`,stdout:`1
`},{name:"4. 边界 / 反例",args:[[2,1]],expected:2,stdin:`2
2 1
`,stdout:`2
`},{name:"5. 边界 / 反例",args:[[2,1,1,2]],expected:4,stdin:`4
2 1 1 2
`,stdout:`4
`}]},199:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from typing import Optional, List

class TreeNode:

    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:

    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        result = []

        def dfs(node, depth):
            if not node:
                return
            if depth == len(result):
                result.append([])
            result[depth].append(node.val)
            dfs(node.left, depth + 1)
            dfs(node.right, depth + 1)
        dfs(root, 0)
        return [layer[-1] for layer in result]

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = json.loads(sys.stdin.readline())
    a0, nodes = make_tree(a0)
    result = Solution().rightSideView(a0)
    print(' '.join(map(str, result)))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. root：一行 JSON；树使用层序数组，null 为空位；嵌套列表按数组保留`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[1,2,3,null,5,null,4]],expected:[1,3,4],stdin:`[1, 2, 3, null, 5, null, 4]
`,stdout:`1 3 4
`},{name:"2. 边界 / 反例",args:[[]],expected:[],stdin:`[]
`,stdout:`
`},{name:"3. 边界 / 反例",args:[[1]],expected:[1],stdin:`[1]
`,stdout:`1
`},{name:"4. 边界 / 反例",args:[[1,2,null,3]],expected:[1,2,3],stdin:`[1, 2, null, 3]
`,stdout:`1 2 3
`},{name:"5. 边界 / 反例",args:[[1,2,3,4]],expected:[1,3,4],stdin:`[1, 2, 3, 4]
`,stdout:`1 3 4
`}]},200:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def numIslands(self, grid: List[List[str]]) -> int:
        m, n = (len(grid), len(grid[0]))
        count = 0

        def dfs(i, j):
            grid[i][j] = '0'
            for di, dj in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                ni, nj = (i + di, j + dj)
                if 0 <= ni < m and 0 <= nj < n and (grid[ni][nj] == '1'):
                    dfs(ni, nj)
        for i in range(m):
            for j in range(n):
                if grid[i][j] == '1':
                    count += 1
                    dfs(i, j)
        return count

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_chars()
    result = Solution().numIslands(a0)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. grid：先一行 m n，再读取 m 行连续字符，每行 n 个字符`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[["1","1","0"],["0","1","0"],["0","0","1"]]],expected:2,stdin:`3 3
110
010
001
`,stdout:`2
`},{name:"2. 边界 / 反例",args:[[["0"]]],expected:0,stdin:`1 1
0
`,stdout:`0
`},{name:"3. 边界 / 反例",args:[[["1"]]],expected:1,stdin:`1 1
1
`,stdout:`1
`},{name:"4. 边界 / 反例",args:[[["1","0","1"],["0","1","0"],["1","0","1"]]],expected:5,stdin:`3 3
101
010
101
`,stdout:`5
`},{name:"5. 边界 / 反例",args:[[["1","1","1"],["1","1","1"]]],expected:1,stdin:`2 3
111
111
`,stdout:`1
`}]},206:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        cur = head
        prev = None
        while cur:
            nxt = cur.next
            cur.next = prev
            prev = cur
            cur = nxt
        return prev

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    a0 = make_list(a0)[0]
    result = Solution().reverseList(a0)
    result = encode_list(result)
    print(' '.join(map(str, result)))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. head：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[1,2,3,4,5]],expected:[5,4,3,2,1],stdin:`5
1 2 3 4 5
`,stdout:`5 4 3 2 1
`},{name:"2. 边界 / 反例",args:[[]],expected:[],stdin:`0

`,stdout:`
`},{name:"3. 边界 / 反例",args:[[1]],expected:[1],stdin:`1
1
`,stdout:`1
`},{name:"4. 边界 / 反例",args:[[1,2]],expected:[2,1],stdin:`2
1 2
`,stdout:`2 1
`},{name:"5. 边界 / 反例",args:[[1,1,2]],expected:[2,1,1],stdin:`3
1 1 2
`,stdout:`2 1 1
`}]},207:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from typing import List
from collections import deque

class Solution:

    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        in_degree = [0] * numCourses
        adj = [[] for _ in range(numCourses)]
        for cur, pre in prerequisites:
            adj[pre].append(cur)
            in_degree[cur] += 1
        queue = deque([i for i in range(numCourses) if in_degree[i] == 0])
        count = 0
        while queue:
            node = queue.popleft()
            count += 1
            for nxt in adj[node]:
                in_degree[nxt] -= 1
                if in_degree[nxt] == 0:
                    queue.append(nxt)
        return count == numCourses

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = int(sys.stdin.readline())
    a1 = read_matrix()
    result = Solution().canFinish(a0, a1)
    print('true' if result else 'false')

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. numCourses：一行整数
2. prerequisites：先一行 m n，再读取 m 行，每行 n 个空格分隔整数`,outputFormat:"输出 true 或 false（大小写均可）。",tests:[{name:"1. 样例",args:[2,[[1,0]]],expected:!0,stdin:`2
1 2
1 0
`,stdout:`true
`},{name:"2. 边界 / 反例",args:[2,[[1,0],[0,1]]],expected:!1,stdin:`2
2 2
1 0
0 1
`,stdout:`false
`},{name:"3. 边界 / 反例",args:[1,[]],expected:!0,stdin:`1
0 0

`,stdout:`true
`},{name:"4. 边界 / 反例",args:[1,[[0,0]]],expected:!1,stdin:`1
1 2
0 0
`,stdout:`false
`},{name:"5. 边界 / 反例",args:[4,[[1,0],[2,0],[3,1],[3,2]]],expected:!0,stdin:`4
4 2
1 0
2 0
3 1
3 2
`,stdout:`true
`}]},208:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class TrieNode:

    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:

    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        node = self.root
        for ch in word:
            if ch not in node.children:
                node.children[ch] = TrieNode()
            node = node.children[ch]
        node.is_end = True

    def search(self, word: str) -> bool:
        node = self.root
        for ch in word:
            if ch not in node.children:
                return False
            node = node.children[ch]
        return node.is_end

    def startsWith(self, prefix: str) -> bool:
        node = self.root
        for ch in prefix:
            if ch not in node.children:
                return False
            node = node.children[ch]
        return True

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = json.loads(sys.stdin.readline())
    a1 = json.loads(sys.stdin.readline())
    obj = globals()[a0[0]](*a1[0])
    result = [None]
    for name, params in zip(a0[1:], a1[1:]): result.append(getattr(obj, name)(*params))
    print(json.dumps(result, ensure_ascii=False))

if __name__ == '__main__':
    solve()
`,inputFormat:"第一行是操作名 JSON 数组（首项为构造函数），第二行是对应参数 JSON 数组。",outputFormat:"输出一行 JSON，集合/组合答案允许合法顺序差异。",tests:[{name:"1. 样例",args:[["Trie","insert","search","search","startsWith"],[[],["apple"],["apple"],["app"],["app"]]],expected:[null,null,!0,!1,!0],stdin:`["Trie", "insert", "search", "search", "startsWith"]
[[], ["apple"], ["apple"], ["app"], ["app"]]
`,stdout:`[null, null, true, false, true]
`},{name:"2. 边界 / 反例",args:[["Trie","search"],[[],["x"]]],expected:[null,!1],stdin:`["Trie", "search"]
[[], ["x"]]
`,stdout:`[null, false]
`},{name:"3. 边界 / 反例",args:[["Trie","insert","search"],[[],["a"],["a"]]],expected:[null,null,!0],stdin:`["Trie", "insert", "search"]
[[], ["a"], ["a"]]
`,stdout:`[null, null, true]
`},{name:"4. 边界 / 反例",args:[["Trie","insert","insert","search"],[[],["ab"],["ab"],["ab"]]],expected:[null,null,null,!0],stdin:`["Trie", "insert", "insert", "search"]
[[], ["ab"], ["ab"], ["ab"]]
`,stdout:`[null, null, null, true]
`},{name:"5. 边界 / 反例",args:[["Trie","insert","startsWith","search"],[[],["abc"],["abd"],["abcd"]]],expected:[null,null,!1,!1],stdin:`["Trie", "insert", "startsWith", "search"]
[[], ["abc"], ["abd"], ["abcd"]]
`,stdout:`[null, null, false, false]
`}]},215:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

import random

class Solution:

    def findKthLargest(self, nums: List[int], k: int) -> int:
        random.shuffle(nums)
        lo, hi = (0, len(nums) - 1)
        k = len(nums) - k
        while lo <= hi:
            p = self.partition(nums, lo, hi)
            if p < k:
                lo = p + 1
            elif p > k:
                hi = p - 1
            else:
                return nums[p]
        return -1

    def partition(self, nums: List[int], lo: int, hi: int):
        pivot = nums[lo]
        i, j = (lo + 1, hi)
        while i <= j:
            while i <= hi and nums[i] < pivot:
                i += 1
            while j >= lo and nums[j] > pivot:
                j -= 1
            if i >= j:
                break
            nums[i], nums[j] = (nums[j], nums[i])
            i += 1
            j -= 1
        nums[lo], nums[j] = (nums[j], nums[lo])
        return j

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    a1 = int(sys.stdin.readline())
    result = Solution().findKthLargest(a0, a1)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. nums：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行
2. k：一行整数`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[3,2,1,5,6,4],2],expected:5,stdin:`6
3 2 1 5 6 4
2
`,stdout:`5
`},{name:"2. 边界 / 反例",args:[[3,2,3,1,2,4,5,5,6],4],expected:4,stdin:`9
3 2 3 1 2 4 5 5 6
4
`,stdout:`4
`},{name:"3. 边界 / 反例",args:[[1],1],expected:1,stdin:`1
1
1
`,stdout:`1
`},{name:"4. 边界 / 反例",args:[[-1,-2],2],expected:-2,stdin:`2
-1 -2
2
`,stdout:`-2
`},{name:"5. 边界 / 反例",args:[[2,2],1],expected:2,stdin:`2
2 2
1
`,stdout:`2
`}]},226:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:

        def changeposition(node):
            if not node:
                return node
            node.left, node.right = (node.right, node.left)
            changeposition(node.left)
            changeposition(node.right)
            return node
        return changeposition(root)

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = json.loads(sys.stdin.readline())
    a0, nodes = make_tree(a0)
    result = Solution().invertTree(a0)
    result = encode_tree(result)
    print(json.dumps(result, ensure_ascii=False))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. root：一行 JSON；树使用层序数组，null 为空位；嵌套列表按数组保留`,outputFormat:"输出一行 JSON，集合/组合答案允许合法顺序差异。",tests:[{name:"1. 样例",args:[[4,2,7,1,3,6,9]],expected:[4,7,2,9,6,3,1],stdin:`[4, 2, 7, 1, 3, 6, 9]
`,stdout:`[4, 7, 2, 9, 6, 3, 1]
`},{name:"2. 边界 / 反例",args:[[]],expected:[],stdin:`[]
`,stdout:`[]
`},{name:"3. 边界 / 反例",args:[[1]],expected:[1],stdin:`[1]
`,stdout:`[1]
`},{name:"4. 边界 / 反例",args:[[1,2]],expected:[1,null,2],stdin:`[1, 2]
`,stdout:`[1, null, 2]
`},{name:"5. 边界 / 反例",args:[[1,null,2,3]],expected:[1,2,null,null,3],stdin:`[1, null, 2, 3]
`,stdout:`[1, 2, null, null, 3]
`}]},230:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from typing import Optional

class TreeNode:

    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:

    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        count = 0
        res = 0

        def dfs(node):
            nonlocal count, res
            if not node:
                return
            dfs(node.left)
            count += 1
            if count == k:
                res = node.val
                return
            dfs(node.right)
        dfs(root)
        return res

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = json.loads(sys.stdin.readline())
    a1 = int(sys.stdin.readline())
    a0, nodes = make_tree(a0)
    result = Solution().kthSmallest(a0, a1)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. root：一行 JSON；树使用层序数组，null 为空位；嵌套列表按数组保留
2. k：一行整数`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[3,1,4,null,2],1],expected:1,stdin:`[3, 1, 4, null, 2]
1
`,stdout:`1
`},{name:"2. 边界 / 反例",args:[[5,3,6,2,4,null,null,1],3],expected:3,stdin:`[5, 3, 6, 2, 4, null, null, 1]
3
`,stdout:`3
`},{name:"3. 边界 / 反例",args:[[1],1],expected:1,stdin:`[1]
1
`,stdout:`1
`},{name:"4. 边界 / 反例",args:[[2,1,3],3],expected:3,stdin:`[2, 1, 3]
3
`,stdout:`3
`},{name:"5. 边界 / 反例",args:[[0,-1,1],2],expected:0,stdin:`[0, -1, 1]
2
`,stdout:`0
`}]},234:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        fast = slow = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        prev = None
        while slow:
            nxt = slow.next
            slow.next = prev
            prev = slow
            slow = nxt
        left, right = (head, prev)
        while right:
            if left.val != right.val:
                return False
            left = left.next
            right = right.next
        return True

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    a0 = make_list(a0)[0]
    result = Solution().isPalindrome(a0)
    print('true' if result else 'false')

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. head：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出 true 或 false（大小写均可）。",tests:[{name:"1. 样例",args:[[1,2,2,1]],expected:!0,stdin:`4
1 2 2 1
`,stdout:`true
`},{name:"2. 边界 / 反例",args:[[1,2]],expected:!1,stdin:`2
1 2
`,stdout:`false
`},{name:"3. 边界 / 反例",args:[[1]],expected:!0,stdin:`1
1
`,stdout:`true
`},{name:"4. 边界 / 反例",args:[[1,2,1]],expected:!0,stdin:`3
1 2 1
`,stdout:`true
`},{name:"5. 边界 / 反例",args:[[1,2,3,1]],expected:!1,stdin:`4
1 2 3 1
`,stdout:`false
`}]},236:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class TreeNode:

    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:

    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':

        def dfs(node):
            if not node or node == p or node == q:
                return node
            left = dfs(node.left)
            right = dfs(node.right)
            if left and right:
                return node
            return left or right
        return dfs(root)

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = json.loads(sys.stdin.readline())
    a1 = int(sys.stdin.readline())
    a2 = int(sys.stdin.readline())
    a0, nodes = make_tree(a0)
    a1, a2 = nodes[a1], nodes[a2]
    result = Solution().lowestCommonAncestor(a0, a1, a2)
    result = next((i for i, n in enumerate(nodes) if n is result), -1)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. root：一行 JSON；树使用层序数组，null 为空位；嵌套列表按数组保留
2. p：一行整数
3. q：一行整数`,outputFormat:"输出最近公共祖先在输入层序数组中的下标。p、q 也以该数组下标给出。",tests:[{name:"1. 样例",args:[[3,5,1,6,2,0,8,null,null,7,4],1,2],expected:0,stdin:`[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]
1
2
`,stdout:`0
`},{name:"2. 边界 / 反例",args:[[3,5,1,6,2,0,8,null,null,7,4],1,10],expected:1,stdin:`[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]
1
10
`,stdout:`1
`},{name:"3. 边界 / 反例",args:[[1,2],0,1],expected:0,stdin:`[1, 2]
0
1
`,stdout:`0
`},{name:"4. 边界 / 反例",args:[[2,1,3],1,2],expected:0,stdin:`[2, 1, 3]
1
2
`,stdout:`0
`},{name:"5. 边界 / 反例",args:[[1,2,3,4,5],3,4],expected:1,stdin:`[1, 2, 3, 4, 5]
3
4
`,stdout:`1
`}]},238:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        left = [0] * n
        left[0] = 1
        for i in range(1, n):
            left[i] = left[i - 1] * nums[i - 1]
        right = [0] * n
        right[n - 1] = 1
        for i in range(n - 2, -1, -1):
            right[i] = right[i + 1] * nums[i + 1]
        answer = [0] * n
        for i in range(n):
            answer[i] = left[i] * right[i]
        return answer

class Solution2:

    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        answer = [1] * n
        for i in range(1, n):
            answer[i] = answer[i - 1] * nums[i - 1]
        right_product = 1
        for i in range(n - 2, -1, -1):
            right_product *= nums[i + 1]
            answer[i] *= right_product
        return answer

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    result = Solution().productExceptSelf(a0)
    print(' '.join(map(str, result)))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. nums：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[1,2,3,4]],expected:[24,12,8,6],stdin:`4
1 2 3 4
`,stdout:`24 12 8 6
`},{name:"2. 边界 / 反例",args:[[-1,1,0,-3,3]],expected:[0,0,9,0,0],stdin:`5
-1 1 0 -3 3
`,stdout:`0 0 9 0 0
`},{name:"3. 边界 / 反例",args:[[0,0]],expected:[0,0],stdin:`2
0 0
`,stdout:`0 0
`},{name:"4. 边界 / 反例",args:[[2,3]],expected:[3,2],stdin:`2
2 3
`,stdout:`3 2
`},{name:"5. 边界 / 反例",args:[[-1,-2,-3]],expected:[6,3,2],stdin:`3
-1 -2 -3
`,stdout:`6 3 2
`}]},239:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from collections import deque

class Solution:

    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        n = len(nums)
        queue = deque()
        res = [0] * (n - k + 1)
        idx = 0
        for i in range(n):
            while queue and nums[queue[-1]] < nums[i]:
                queue.pop()
            queue.append(i)
            if queue[0] < i - k + 1:
                queue.popleft()
            if i >= k - 1:
                res[idx] = nums[queue[0]]
                idx += 1
        return res

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    a1 = int(sys.stdin.readline())
    result = Solution().maxSlidingWindow(a0, a1)
    print(' '.join(map(str, result)))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. nums：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行
2. k：一行整数`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[1,3,-1,-3,5,3,6,7],3],expected:[3,3,5,5,6,7],stdin:`8
1 3 -1 -3 5 3 6 7
3
`,stdout:`3 3 5 5 6 7
`},{name:"2. 边界 / 反例",args:[[1],1],expected:[1],stdin:`1
1
1
`,stdout:`1
`},{name:"3. 边界 / 反例",args:[[4,3,2],2],expected:[4,3],stdin:`3
4 3 2
2
`,stdout:`4 3
`},{name:"4. 边界 / 反例",args:[[1,1,1],2],expected:[1,1],stdin:`3
1 1 1
2
`,stdout:`1 1
`},{name:"5. 边界 / 反例",args:[[-2,-1],2],expected:[-1],stdin:`2
-2 -1
2
`,stdout:`-1
`}]},240:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        m = len(matrix)
        n = len(matrix[0])
        row = 0
        col = n - 1
        while row <= m - 1 and col >= 0:
            cur = matrix[row][col]
            if cur == target:
                return True
            elif cur < target:
                row += 1
            elif cur > target:
                col -= 1
        return False

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_matrix()
    a1 = int(sys.stdin.readline())
    result = Solution().searchMatrix(a0, a1)
    print('true' if result else 'false')

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. matrix：先一行 m n，再读取 m 行，每行 n 个空格分隔整数
2. target：一行整数`,outputFormat:"输出 true 或 false（大小写均可）。",tests:[{name:"1. 样例",args:[[[1,3,5],[7,9,11]],9],expected:!0,stdin:`2 3
1 3 5
7 9 11
9
`,stdout:`true
`},{name:"2. 边界 / 反例",args:[[[1,3,5],[7,9,11]],6],expected:!1,stdin:`2 3
1 3 5
7 9 11
6
`,stdout:`false
`},{name:"3. 边界 / 反例",args:[[[1]],1],expected:!0,stdin:`1 1
1
1
`,stdout:`true
`},{name:"4. 边界 / 反例",args:[[[1,2,3]],0],expected:!1,stdin:`1 3
1 2 3
0
`,stdout:`false
`},{name:"5. 边界 / 反例",args:[[[1],[3],[5]],5],expected:!0,stdin:`3 1
1
3
5
5
`,stdout:`true
`}]},279:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def numSquares(self, n: int) -> int:
        dp = [float('inf')] * (n + 1)
        dp[0] = 0
        for i in range(1, n + 1):
            j = 1
            while j * j <= i:
                dp[i] = min(dp[i], dp[i - j * j] + 1)
                j += 1
        return dp[n]

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = int(sys.stdin.readline())
    result = Solution().numSquares(a0)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. n：一行整数`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[12],expected:3,stdin:`12
`,stdout:`3
`},{name:"2. 边界 / 反例",args:[13],expected:2,stdin:`13
`,stdout:`2
`},{name:"3. 边界 / 反例",args:[1],expected:1,stdin:`1
`,stdout:`1
`},{name:"4. 边界 / 反例",args:[4],expected:1,stdin:`4
`,stdout:`1
`},{name:"5. 边界 / 反例",args:[7],expected:4,stdin:`7
`,stdout:`4
`}]},283:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        slow = 0
        for fast in range(len(nums)):
            if nums[fast] != 0:
                nums[slow], nums[fast] = (nums[fast], nums[slow])
                slow += 1

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    result = Solution().moveZeroes(a0)
    result = a0
    print(' '.join(map(str, result)))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. nums：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[0,1,0,3,12]],expected:[1,3,12,0,0],stdin:`5
0 1 0 3 12
`,stdout:`1 3 12 0 0
`},{name:"2. 边界 / 反例",args:[[0]],expected:[0],stdin:`1
0
`,stdout:`0
`},{name:"3. 边界 / 反例",args:[[1]],expected:[1],stdin:`1
1
`,stdout:`1
`},{name:"4. 边界 / 反例",args:[[0,0,1]],expected:[1,0,0],stdin:`3
0 0 1
`,stdout:`1 0 0
`},{name:"5. 边界 / 反例",args:[[1,0,2,0]],expected:[1,2,0,0],stdin:`4
1 0 2 0
`,stdout:`1 2 0 0
`}]},287:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def findDuplicate(self, nums: List[int]) -> int:
        slow = fast = 0
        while True:
            slow = nums[slow]
            fast = nums[nums[fast]]
            if slow == fast:
                break
        slow = 0
        while slow != fast:
            slow = nums[slow]
            fast = nums[fast]
        return slow

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    result = Solution().findDuplicate(a0)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. nums：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[1,3,4,2,2]],expected:2,stdin:`5
1 3 4 2 2
`,stdout:`2
`},{name:"2. 边界 / 反例",args:[[3,1,3,4,2]],expected:3,stdin:`5
3 1 3 4 2
`,stdout:`3
`},{name:"3. 边界 / 反例",args:[[1,1]],expected:1,stdin:`2
1 1
`,stdout:`1
`},{name:"4. 边界 / 反例",args:[[2,2,2,2,2]],expected:2,stdin:`5
2 2 2 2 2
`,stdout:`2
`},{name:"5. 边界 / 反例",args:[[1,1,2]],expected:1,stdin:`3
1 1 2
`,stdout:`1
`}]},295:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

import heapq

class MedianFinder:

    def __init__(self):
        self.large = []
        self.small = []

    def addNum(self, num: int) -> None:
        if len(self.large) < len(self.small):
            heapq.heappush(self.large, -heapq.heappushpop(self.small, num))
        else:
            heapq.heappush(self.small, -heapq.heappushpop(self.large, -num))

    def findMedian(self) -> float:
        if len(self.large) < len(self.small):
            return self.small[0]
        elif len(self.large) > len(self.small):
            return -self.large[0]
        else:
            return (-self.large[0] + self.small[0]) / 2

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = json.loads(sys.stdin.readline())
    a1 = json.loads(sys.stdin.readline())
    obj = globals()[a0[0]](*a1[0])
    result = [None]
    for name, params in zip(a0[1:], a1[1:]): result.append(getattr(obj, name)(*params))
    print(json.dumps(result, ensure_ascii=False))

if __name__ == '__main__':
    solve()
`,inputFormat:"第一行是操作名 JSON 数组（首项为构造函数），第二行是对应参数 JSON 数组。",outputFormat:"输出一行 JSON，集合/组合答案允许合法顺序差异。",tests:[{name:"1. 样例",args:[["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"],[[],[1],[2],[],[3],[]]],expected:[null,null,null,1.5,null,2],stdin:`["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
`,stdout:`[null, null, null, 1.5, null, 2.0]
`},{name:"2. 边界 / 反例",args:[["MedianFinder","addNum","findMedian"],[[],[-1],[]]],expected:[null,null,-1],stdin:`["MedianFinder", "addNum", "findMedian"]
[[], [-1], []]
`,stdout:`[null, null, -1]
`},{name:"3. 边界 / 反例",args:[["MedianFinder","addNum","addNum","findMedian"],[[],[0],[0],[]]],expected:[null,null,null,0],stdin:`["MedianFinder", "addNum", "addNum", "findMedian"]
[[], [0], [0], []]
`,stdout:`[null, null, null, 0]
`},{name:"4. 边界 / 反例",args:[["MedianFinder","addNum","addNum","addNum","findMedian"],[[],[5],[1],[3],[]]],expected:[null,null,null,null,3],stdin:`["MedianFinder", "addNum", "addNum", "addNum", "findMedian"]
[[], [5], [1], [3], []]
`,stdout:`[null, null, null, null, 3]
`},{name:"5. 边界 / 反例",args:[["MedianFinder","addNum","addNum","findMedian"],[[],[-2],[-1],[]]],expected:[null,null,null,-1.5],stdin:`["MedianFinder", "addNum", "addNum", "findMedian"]
[[], [-2], [-1], []]
`,stdout:`[null, null, null, -1.5]
`}]},300:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from typing import List
import bisect

class Solution:

    def lengthOfLIS(self, nums: List[int]) -> int:
        if not nums:
            return 0
        tails = []
        for x in nums:
            idx = bisect.bisect_left(tails, x)
            if idx == len(tails):
                tails.append(x)
            else:
                tails[idx] = x
        return len(tails)

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    result = Solution().lengthOfLIS(a0)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. nums：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[10,9,2,5,3,7,101,18]],expected:4,stdin:`8
10 9 2 5 3 7 101 18
`,stdout:`4
`},{name:"2. 边界 / 反例",args:[[0,1,0,3,2,3]],expected:4,stdin:`6
0 1 0 3 2 3
`,stdout:`4
`},{name:"3. 边界 / 反例",args:[[7,7,7]],expected:1,stdin:`3
7 7 7
`,stdout:`1
`},{name:"4. 边界 / 反例",args:[[1]],expected:1,stdin:`1
1
`,stdout:`1
`},{name:"5. 边界 / 反例",args:[[3,2,1]],expected:1,stdin:`3
3 2 1
`,stdout:`1
`}]},322:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from typing import List

class Solution:

    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [float('inf')] * (amount + 1)
        dp[0] = 0
        for i in range(1, amount + 1):
            for coin in coins:
                if i >= coin:
                    dp[i] = min(dp[i], dp[i - coin] + 1)
        return -1 if dp[amount] == float('inf') else dp[amount]

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    a1 = int(sys.stdin.readline())
    result = Solution().coinChange(a0, a1)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. coins：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行
2. amount：一行整数`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[1,2,5],11],expected:3,stdin:`3
1 2 5
11
`,stdout:`3
`},{name:"2. 边界 / 反例",args:[[2],3],expected:-1,stdin:`1
2
3
`,stdout:`-1
`},{name:"3. 边界 / 反例",args:[[1],0],expected:0,stdin:`1
1
0
`,stdout:`0
`},{name:"4. 边界 / 反例",args:[[2],2],expected:1,stdin:`1
2
2
`,stdout:`1
`},{name:"5. 边界 / 反例",args:[[2,5],7],expected:2,stdin:`2
2 5
7
`,stdout:`2
`}]},347:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

import heapq

class Solution:

    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq = {}
        for num in nums:
            freq[num] = freq.get(num, 0) + 1
        pq = []
        for num, count in freq.items():
            heapq.heappush(pq, (count, num))
            if len(pq) > k:
                heapq.heappop(pq)
        result = []
        for count, num in pq:
            result.append(num)
        return result

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    a1 = int(sys.stdin.readline())
    result = Solution().topKFrequent(a0, a1)
    print(' '.join(map(str, result)))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. nums：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行
2. k：一行整数`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[1,1,1,2,2,3],2],expected:[1,2],stdin:`6
1 1 1 2 2 3
2
`,stdout:`1 2
`},{name:"2. 边界 / 反例",args:[[1],1],expected:[1],stdin:`1
1
1
`,stdout:`1
`},{name:"3. 边界 / 反例",args:[[-1,-1,2],1],expected:[-1],stdin:`3
-1 -1 2
1
`,stdout:`-1
`},{name:"4. 边界 / 反例",args:[[3,3,2,2,1],2],expected:[2,3],stdin:`5
3 3 2 2 1
2
`,stdout:`2 3
`},{name:"5. 边界 / 反例",args:[[0,0,0,1,1,2],1],expected:[0],stdin:`6
0 0 0 1 1 2
1
`,stdout:`0
`}]},394:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def decodeString(self, s: str) -> str:
        numstack = []
        letterstack = []
        cur_num = 0
        cur_str = ''
        for char in s:
            if char.isdigit():
                cur_num = cur_num * 10 + int(char)
            elif char == '[':
                numstack.append(cur_num)
                letterstack.append(cur_str)
                cur_num = 0
                cur_str = ''
            elif char == ']':
                cur_str = letterstack.pop() + numstack.pop() * cur_str
            else:
                cur_str += char
        return cur_str

class Solution2:

    def decodeString(self, s: str) -> str:
        self.i = 0

        def dfs():
            result = ''
            num = 0
            while self.i < len(s):
                char = s[self.i]
                self.i += 1
                if char.isdigit():
                    num = num * 10 + int(char)
                elif char == '[':
                    sub = dfs()
                    result += num * sub
                    num = 0
                elif char == ']':
                    return result
                else:
                    result += char
            return result
        return dfs()

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = sys.stdin.readline().rstrip('\\r\\n')
    result = Solution().decodeString(a0)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. s：一行原始字符串（可能为空串，保留行内空格）`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:["3[a]2[bc]"],expected:"aaabcbc",stdin:`3[a]2[bc]
`,stdout:`aaabcbc
`},{name:"2. 边界 / 反例",args:["3[a2[c]]"],expected:"accaccacc",stdin:`3[a2[c]]
`,stdout:`accaccacc
`},{name:"3. 边界 / 反例",args:["2[abc]3[cd]ef"],expected:"abcabccdcdcdef",stdin:`2[abc]3[cd]ef
`,stdout:`abcabccdcdcdef
`},{name:"4. 边界 / 反例",args:["12[a]"],expected:"aaaaaaaaaaaa",stdin:`12[a]
`,stdout:`aaaaaaaaaaaa
`},{name:"5. 边界 / 反例",args:["abc"],expected:"abc",stdin:`abc
`,stdout:`abc
`}]},416:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from typing import List

class Solution:

    def canPartition(self, nums: List[int]) -> bool:
        total = sum(nums)
        if total % 2 != 0:
            return False
        target = total // 2
        if max(nums) > target:
            return False
        dp = [False] * (target + 1)
        dp[0] = True
        for num in nums:
            for j in range(target, num - 1, -1):
                dp[j] = dp[j] or dp[j - num]
        return dp[target]

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    result = Solution().canPartition(a0)
    print('true' if result else 'false')

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. nums：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出 true 或 false（大小写均可）。",tests:[{name:"1. 样例",args:[[1,5,11,5]],expected:!0,stdin:`4
1 5 11 5
`,stdout:`true
`},{name:"2. 边界 / 反例",args:[[1,2,3,5]],expected:!1,stdin:`4
1 2 3 5
`,stdout:`false
`},{name:"3. 边界 / 反例",args:[[1]],expected:!1,stdin:`1
1
`,stdout:`false
`},{name:"4. 边界 / 反例",args:[[1,2,5]],expected:!1,stdin:`3
1 2 5
`,stdout:`false
`},{name:"5. 边界 / 反例",args:[[2,2,2,2]],expected:!0,stdin:`4
2 2 2 2
`,stdout:`true
`}]},437:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from sys import prefix
from typing import Optional

class TreeNode:

    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:

    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:
        prefix_map = {0: 1}
        count = 0

        def dfs(node, curr_sum):
            nonlocal count
            if not node:
                return
            curr_sum += node.val
            count += prefix_map.get(curr_sum - targetSum, 0)
            prefix_map[curr_sum] = prefix_map.get(curr_sum, 0) + 1
            dfs(node.left, curr_sum)
            dfs(node.right, curr_sum)
            prefix_map[curr_sum] -= 1
        dfs(root, 0)
        return count

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = json.loads(sys.stdin.readline())
    a1 = int(sys.stdin.readline())
    a0, nodes = make_tree(a0)
    result = Solution().pathSum(a0, a1)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. root：一行 JSON；树使用层序数组，null 为空位；嵌套列表按数组保留
2. targetSum：一行整数`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[10,5,-3,3,2,null,11,3,-2,null,1],8],expected:3,stdin:`[10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]
8
`,stdout:`3
`},{name:"2. 边界 / 反例",args:[[1],1],expected:1,stdin:`[1]
1
`,stdout:`1
`},{name:"3. 边界 / 反例",args:[[],0],expected:0,stdin:`[]
0
`,stdout:`0
`},{name:"4. 边界 / 反例",args:[[0,0,0],0],expected:5,stdin:`[0, 0, 0]
0
`,stdout:`5
`},{name:"5. 边界 / 反例",args:[[1,-1,-1],0],expected:2,stdin:`[1, -1, -1]
0
`,stdout:`2
`}]},438:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution(object):

    def findAnagrams(self, s, p):
        """
        :type s: str
        :type p: str
        :rtype: List[int]
        """
        need = {}
        window = {}
        for c in p:
            need[c] = need.get(c, 0) + 1
        left = 0
        right = 0
        valid = 0
        result = []
        while right < len(s):
            c = s[right]
            right += 1
            if c in need:
                window[c] = window.get(c, 0) + 1
                if window[c] == need[c]:
                    valid += 1
            while right - left >= len(p):
                if valid == len(need):
                    result.append(left)
                d = s[left]
                left += 1
                if d in need:
                    if window[d] == need[d]:
                        valid -= 1
                    window[d] -= 1
        return result

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = sys.stdin.readline().rstrip('\\r\\n')
    a1 = sys.stdin.readline().rstrip('\\r\\n')
    result = Solution().findAnagrams(a0, a1)
    print(' '.join(map(str, result)))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. s：一行原始字符串（可能为空串，保留行内空格）
2. p：一行原始字符串（可能为空串，保留行内空格）`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:["cbaebabacd","abc"],expected:[0,6],stdin:`cbaebabacd
abc
`,stdout:`0 6
`},{name:"2. 边界 / 反例",args:["abab","ab"],expected:[0,1,2],stdin:`abab
ab
`,stdout:`0 1 2
`},{name:"3. 边界 / 反例",args:["a","aa"],expected:[],stdin:`a
aa
`,stdout:`
`},{name:"4. 边界 / 反例",args:["baa","aa"],expected:[1],stdin:`baa
aa
`,stdout:`1
`},{name:"5. 边界 / 反例",args:["aa","bb"],expected:[],stdin:`aa
bb
`,stdout:`
`}]},543:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        self.ans = 0

        def caldepth(node):
            if not node:
                return -1
            left = caldepth(node.left)
            right = caldepth(node.right)
            self.ans = max(self.ans, left + right + 2)
            return max(left, right) + 1
        caldepth(root)
        return self.ans

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = json.loads(sys.stdin.readline())
    a0, nodes = make_tree(a0)
    result = Solution().diameterOfBinaryTree(a0)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. root：一行 JSON；树使用层序数组，null 为空位；嵌套列表按数组保留`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[1,2,3,4,5]],expected:3,stdin:`[1, 2, 3, 4, 5]
`,stdout:`3
`},{name:"2. 边界 / 反例",args:[[1]],expected:0,stdin:`[1]
`,stdout:`0
`},{name:"3. 边界 / 反例",args:[[1,2]],expected:1,stdin:`[1, 2]
`,stdout:`1
`},{name:"4. 边界 / 反例",args:[[1,null,2,null,3]],expected:2,stdin:`[1, null, 2, null, 3]
`,stdout:`2
`},{name:"5. 边界 / 反例",args:[[1,2,null,3,4,5,null,null,6]],expected:4,stdin:`[1, 2, null, 3, 4, 5, null, null, 6]
`,stdout:`4
`}]},560:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from collections import defaultdict

class Solution:

    def subarraySum(self, nums: List[int], k: int) -> int:
        prefix_count = defaultdict(int)
        prefix_count[0] = 1
        prefix_sum = 0
        count = 0
        for num in nums:
            prefix_sum += num
            count += prefix_count[prefix_sum - k]
            prefix_count[prefix_sum] += 1
        return count

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    a1 = int(sys.stdin.readline())
    result = Solution().subarraySum(a0, a1)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. nums：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行
2. k：一行整数`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[1,1,1],2],expected:2,stdin:`3
1 1 1
2
`,stdout:`2
`},{name:"2. 边界 / 反例",args:[[1,2,3],3],expected:2,stdin:`3
1 2 3
3
`,stdout:`2
`},{name:"3. 边界 / 反例",args:[[0,0,0],0],expected:6,stdin:`3
0 0 0
0
`,stdout:`6
`},{name:"4. 边界 / 反例",args:[[1,-1,0],0],expected:3,stdin:`3
1 -1 0
0
`,stdout:`3
`},{name:"5. 边界 / 反例",args:[[-1,-1,1],0],expected:1,stdin:`3
-1 -1 1
0
`,stdout:`1
`}]},739:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        stack = []
        result = [0] * len(temperatures)
        for i in range(len(temperatures)):
            while stack and temperatures[i] > temperatures[stack[-1]]:
                idx = stack.pop()
                result[idx] = i - idx
            stack.append(i)
        return result

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_array()
    result = Solution().dailyTemperatures(a0)
    print(' '.join(map(str, result)))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. temperatures：先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[73,74,75,71,69,72,76,73]],expected:[1,1,4,2,1,1,0,0],stdin:`8
73 74 75 71 69 72 76 73
`,stdout:`1 1 4 2 1 1 0 0
`},{name:"2. 边界 / 反例",args:[[30,40,50,60]],expected:[1,1,1,0],stdin:`4
30 40 50 60
`,stdout:`1 1 1 0
`},{name:"3. 边界 / 反例",args:[[30,30]],expected:[0,0],stdin:`2
30 30
`,stdout:`0 0
`},{name:"4. 边界 / 反例",args:[[90]],expected:[0],stdin:`1
90
`,stdout:`0
`},{name:"5. 边界 / 反例",args:[[90,80,70]],expected:[0,0,0],stdin:`3
90 80 70
`,stdout:`0 0 0
`}]},763:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from typing import List

class Solution:

    def partitionLabels(self, s: str) -> List[int]:
        last_occ = {}
        for i, char in enumerate(s):
            last_occ[char] = i
        res = []
        start = 0
        end = 0
        for i, char in enumerate(s):
            end = max(end, last_occ[char])
            if i == end:
                res.append(end - start + 1)
                start = i + 1
        return res

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = sys.stdin.readline().rstrip('\\r\\n')
    result = Solution().partitionLabels(a0)
    print(' '.join(map(str, result)))

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. s：一行原始字符串（可能为空串，保留行内空格）`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:["ababcbacadefegdehijhklij"],expected:[9,7,8],stdin:`ababcbacadefegdehijhklij
`,stdout:`9 7 8
`},{name:"2. 边界 / 反例",args:["eccbbbbdec"],expected:[10],stdin:`eccbbbbdec
`,stdout:`10
`},{name:"3. 边界 / 反例",args:["a"],expected:[1],stdin:`a
`,stdout:`1
`},{name:"4. 边界 / 反例",args:["abc"],expected:[1,1,1],stdin:`abc
`,stdout:`1 1 1
`},{name:"5. 边界 / 反例",args:["abac"],expected:[3,1],stdin:`abac
`,stdout:`3 1
`}]},994:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

from collections import deque

class Solution:

    def orangesRotting(self, grid: List[List[int]]) -> int:
        m, n = (len(grid), len(grid[0]))
        bad = deque()
        fresh = 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 2:
                    bad.append((i, j))
                elif grid[i][j] == 1:
                    fresh += 1
        if fresh == 0:
            return 0
        time = 0
        direction = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        while bad:
            for _ in range(len(bad)):
                x, y = bad.popleft()
                for dx, dy in direction:
                    nx, ny = (x + dx, y + dy)
                    if 0 <= nx < m and 0 <= ny < n and (grid[nx][ny] == 1):
                        grid[nx][ny] = 2
                        bad.append((nx, ny))
                        fresh -= 1
            time += 1
        return -1 if fresh > 0 else time - 1

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = read_matrix()
    result = Solution().orangesRotting(a0)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. grid：先一行 m n，再读取 m 行，每行 n 个空格分隔整数`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:[[[2,1,1],[1,1,0],[0,1,1]]],expected:4,stdin:`3 3
2 1 1
1 1 0
0 1 1
`,stdout:`4
`},{name:"2. 边界 / 反例",args:[[[2,1,1],[0,1,1],[1,0,1]]],expected:-1,stdin:`3 3
2 1 1
0 1 1
1 0 1
`,stdout:`-1
`},{name:"3. 边界 / 反例",args:[[[0,2]]],expected:0,stdin:`1 2
0 2
`,stdout:`0
`},{name:"4. 边界 / 反例",args:[[[1]]],expected:-1,stdin:`1 1
1
`,stdout:`-1
`},{name:"5. 边界 / 反例",args:[[[2,1]]],expected:1,stdin:`1 2
2 1
`,stdout:`1
`}]},1143:{template:`import sys


def solve():
    # 自己读取标准输入、处理数据、打印答案。
    pass


if __name__ == '__main__':
    solve()
`,reference:`import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out

class Solution:

    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        m = len(text1)
        n = len(text2)
        dp = [[0] * (n + 1) for _ in range(m + 1)]
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if text1[i - 1] == text2[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1] + 1
                else:
                    dp[i][j] = max(dp[i][j - 1], dp[i - 1][j])
        return dp[m][n]

def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]

def solve():
    a0 = sys.stdin.readline().rstrip('\\r\\n')
    a1 = sys.stdin.readline().rstrip('\\r\\n')
    result = Solution().longestCommonSubsequence(a0, a1)
    print(result)

if __name__ == '__main__':
    solve()
`,inputFormat:`按参数顺序读取：
1. text1：一行原始字符串（可能为空串，保留行内空格）
2. text2：一行原始字符串（可能为空串，保留行内空格）`,outputFormat:"输出整数/数值或字符串；一维整数数组以空格分隔。",tests:[{name:"1. 样例",args:["abcde","ace"],expected:3,stdin:`abcde
ace
`,stdout:`3
`},{name:"2. 边界 / 反例",args:["abc","abc"],expected:3,stdin:`abc
abc
`,stdout:`3
`},{name:"3. 边界 / 反例",args:["abc","def"],expected:0,stdin:`abc
def
`,stdout:`0
`},{name:"4. 边界 / 反例",args:["a","a"],expected:1,stdin:`a
a
`,stdout:`1
`},{name:"5. 边界 / 反例",args:["abcba","abcbcba"],expected:5,stdin:`abcba
abcbcba
`,stdout:`5
`}]}};export{n as default};
