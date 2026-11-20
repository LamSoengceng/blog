const n={"239-滑动窗口最大值":{codePreview:`# 📌 需二刷：单调队列核心题型，与 84/739 单调栈是镜像概念
#
# 思路：维护一个存「下标」的递减 deque，队首始终是当前窗口最大值的下标
# 时间 O(n)，空间 O(k)
#
# ⚠️ 易错点/误区：
# 1. 队列必须存「下标」而非「值」，否则无法判断元素是否滑出窗口过期
#    （同值可能重复出现，也可能值相等但一个在窗内一个在窗外）
# 2. 过期边界是 queue[0] < i - k + 1，不是 i - k
#    窗口 [i-k+1, i] 共 k 个元素，i - k 就是左边界的前一格，是 off-by-one 高频坑
# 3. 必须用 collections.deque，不能用 list：
#    list.pop(0) 是 O(n)，整体退化成 O(n²)；deque.popleft() 是 O(1)
# 4. 操作顺序不能乱：先清队尾 → 入队 → 清过期队首 → 输出
#    如果入队在清队尾之前，你刚加进去的元素会被自己的 while 循环误伤
# 5. 只有当 i >= k - 1 时才输出，也就是窗口第一次「装满」k 个元素之后
#    装不满就输出会得到非窗口的脏数据
from collections import deque
class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        n = len(nums)
        queue = deque()                       # 递减队列，存的是下标；nums[queue] 递减
        res = [0] * (n - k + 1)                # 滑 n-k+1 次窗口，共这么多答案
        idx = 0                                # res 的写入指针
        for i in range(n):
            # 1. 入队前清理：弹出队尾所有比 nums[i] 小的候选
            #    它们比 nums[i] 小、又比 i 早出窗，永远不可能再成为未来任何窗口的 max
            while queue and nums[queue[-1]] < nums[i]:
                queue.pop()
            # 2. 当前下标入队；清完队尾后入队，保证队列仍然递减
            queue.append(i)
            # 3. 过期清理：队首下标滑出窗口左边界则弹出
            #    因为入队时下标天然递增，过期元素只会出现在队首，不用检查后面
            if queue[0] < i - k + 1:
                queue.popleft()
            # 4. 窗口装满 k 个元素后，队首就是当前窗口最大值
            if i >= k - 1:
                res[idx] = nums[queue[0]]
                idx += 1
        return res`,statement:`给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

返回 滑动窗口中的最大值 。

 

示例 1：

输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
输出：[3,3,5,5,6,7]
解释：
滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
1 [3  -1  -3] 5  3  6  7       3
1  3 [-1  -3  5] 3  6  7       5
1  3  -1 [-3  5  3] 6  7       5
1  3  -1  -3 [5  3  6] 7       6
1  3  -1  -3  5 [3  6  7]      7

示例 2：

输入：nums = [1], k = 1
输出：[1]

 

提示：

- 1 <= nums.length <= 10^5

- -10^4 <= nums[i] <= 10^4

- 1 <= k <= nums.length`},"560-和为-k-的子数组":{codePreview:`from collections import defaultdict
class Solution:
    # 📌 需二刷：前缀和 + 哈希表
    #
    # 思路：prefix[j] - prefix[i-1] = k → 找之前有多少个前缀和等于 prefix_sum - k
    # 时间 O(n)，空间 O(n)
    #
    # ⚠️ 易错点/误区：
    # 1. 哈希表必须初始化 {0: 1}，代表空前缀（前缀和为0出现1次），
    #    否则会漏掉从下标0开始、和刚好等于k的子数组
    # 2. 哈希表存的是「前缀和出现的次数」，不是 count
    # 3. 必须先查找再记录（顺序不能反），否则当 k=0 时会把自己算进去
    def subarraySum(self, nums: List[int], k: int) -> int:
        prefix_count = defaultdict(int)  # key: 前缀和, value: 出现次数
        prefix_count[0] = 1             # 空前缀：和为0出现1次
        prefix_sum = 0
        count = 0
        for num in nums:
            prefix_sum += num                              # 累加当前前缀和
            count += prefix_count[prefix_sum - k]          # 查：之前有几个前缀和 = prefix_sum - k
            prefix_count[prefix_sum] += 1                  # 记：当前前缀和出现次数+1
        return count`,statement:`给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。

子数组是数组中元素的连续非空序列。

 

示例 1：

输入：nums = [1,1,1], k = 2
输出：2

示例 2：

输入：nums = [1,2,3], k = 3
输出：2

 

提示：

- 1 <= nums.length <= 2 * 10^4

- -1000 <= nums[i] <= 1000

- -10^7 <= k <= 10^7`},"76-最小覆盖子串":{codePreview:`class Solution(object):
    def minWindow(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: str
        """
        # 📌 需二刷：[滑动窗口经典套路，寻找最小覆盖子串]
        #
        # 思路：用 right 指针不断向右移动扩大窗口，直到窗口包含了 t 中所有字符。
        #       然后用 left 指针向右移动缩小窗口，尽力找到更短的符合条件的子串。
        # 时间 O(N)，空间 O(C) (C为字符集大小)
        #
        # ⚠️ 易错点/误区：
        # 1. 找不到符合条件的子串时，题目要求返回空字符串 \`""\`，而不是包含空格的 \`" "\`。
        # 2. 窗口长度计算：此时 right 已经 += 1，所以窗口长度就是 right - left，不需要加一。
        need, window = {}, {}
        for c in t:
            need[c] = need.get(c, 0) + 1
        left = 0
        right = 0 
        valid = 0   # 记录窗口中已经满足 need 要求的字符种类数
        start = 0   # 记录最小覆盖子串的起始位置
        length = float('inf') # 记录最小覆盖子串的长度
        while right < len(s):
            # c 是将移入窗口的字符
            c = s[right]
            right += 1
            # 进行窗口内数据的一系列更新
            if c in need:
                window[c] = window.get(c, 0) + 1
                if window[c] == need[c]:
                    valid += 1
            # 判断左侧窗口是否要收缩 (当窗口涵盖了 t 中所有字符时)
            while valid == len(need):
                # 在这里更新最小覆盖子串
                if right - left < length:
                    start = left
                    length = right - left
                # d 是将移出窗口的字符
                d = s[left]
                left += 1
                # 进行窗口内数据的一系列更新
                if d in need:
                    if window[d] == need[d]:
                        valid -= 1
                    window[d] -= 1
        # 注意这里的返回值是 "" 而不是 " "
        return "" if length == float('inf') else s[start: start + length]`,statement:`给定两个字符串 s 和 t，长度分别是 m 和 n，返回 s 中的 最短窗口 子串，使得该子串包含 t 中的每一个字符（包括重复字符）。如果没有这样的子串，返回空字符串 ""。

测试用例保证答案唯一。

 

示例 1：

输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"
解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。

示例 2：

输入：s = "a", t = "a"
输出："a"
解释：整个字符串 s 是最小覆盖子串。

示例 3:

输入: s = "a", t = "aa"
输出: ""
解释: t 中两个字符 'a' 均应包含在 s 的子串中，
因此没有符合条件的子字符串，返回空字符串。

 

提示：

- m == s.length

- n == t.length

- 1 <= m, n <= 10^5

- s 和 t 由英文字母组成

 

进阶：你能设计一个在 O(m + n) 时间内解决此问题的算法吗？`}};export{n as categoryContent};
