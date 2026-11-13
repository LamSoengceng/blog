const n={"33-搜索旋转排序数组":{codePreview:`# 📌 需二刷：旋转数组二分查找（判断有序半边 + 范围收缩）
#
# 思路：每次取 mid，必有一半有序。在有序半边判断 target 是否在范围内，
#       在就往那边缩，不在就去另一边。
# 时间 O(log n)，空间 O(1)
#
# ⚠️ 易错点/误区：
# 1. 循环条件必须是 left <= right（下标），不是 nums[left] 和 nums[right] 比值
#    → 旋转数组的值关系不稳定，用值判断会导致提前退出循环
# 2. 判断左半边有序用 <=：nums[left] <= nums[mid]（等号处理 left == mid 的情况）
# 3. 判断 target 范围时注意 < 和 <= 的区别：
#    nums[mid] 已经判断过不等于 target，所以和 mid 比较用严格 <
# 4. 不需要嵌套二分！while 循环本身就在不断二分，每次只移动 left 或 right
#
# 💡 面试技巧：
# - 先跟面试官确认：数组中有无重复元素？（有重复是 81 题，更复杂）
# - 可以先画图说明旋转数组的两段递增结构，再推导二分逻辑
# - 面试时 mid 的计算推荐写 left + (right - left) // 2，防止整数溢出
#   （Python 无溢出问题，但 Java/C++ 面试中这是加分项）
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1
        while left <= right:
            mid = left + (right - left) // 2  # 面试推荐写法，防溢出
            # 找到了，直接返回
            if nums[mid] == target:
                return mid
            # 判断哪半边有序
            if nums[left] <= nums[mid]:
                # 左半边 [left, mid] 有序
                if nums[left] <= target < nums[mid]:
                    right = mid - 1   # target 在有序的左半边，去左边找
                else:
                    left = mid + 1    # target 不在左半边，去右边找
            else:
                # 右半边 [mid, right] 有序
                if nums[mid] < target <= nums[right]:
                    left = mid + 1    # target 在有序的右半边，去右边找
                else:
                    right = mid - 1   # target 不在右半边，去左边找
        return -1`,statement:`整数数组 nums 按升序排列，数组中的值 互不相同 。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 向左旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 下标 3 上向左旋转后可能变为 [4,5,6,7,0,1,2] 。

给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。

 

示例 1：

输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4

示例 2：

输入：nums = [4,5,6,7,0,1,2], target = 3
输出：-1

示例 3：

输入：nums = [1], target = 0
输出：-1

 

提示：

- 1 <= nums.length <= 5000

- -10^4 <= nums[i] <= 10^4

- nums 中的每个值都 独一无二

- 题目数据保证 nums 在预先未知的某个下标上进行了旋转

- -10^4 <= target <= 10^4`},"34-在排序数组中查找首尾位置":{codePreview:`# 📌 需二刷：二分查找找边界（左边界 + 右边界）
#
# 思路：两次二分查找，分别找 target 的第一个位置（左边界）和最后一个位置（右边界）
#   - 找左边界：nums[mid] >= target 时收缩右边界（right = mid），让搜索往左逼近
#   - 找右边界：nums[mid] <= target 时收缩左边界（left = mid + 1），让搜索往右逼近
# 时间 O(log n)，空间 O(1)
#
# ⚠️ 易错点/误区：
# 1. left = mid 会导致死循环（当 left+1 == right 时 mid == left，永远不变）
#    正确做法：left = mid + 1，确保搜索范围一定缩小
# 2. 找右边界时方向容易搞反——nums[mid] <= target 应该让 left 右移而非 right 左移
# 3. 找右边界用 right = mid（不要 mid-1），配合 while left != right 使用，
#    否则 left 可能跳过 right 导致死循环
# 4. target 可能不在数组中但在 nums[0] 和 nums[-1] 范围内（如 [1,3,5] 找 2），
#    需要在左边界二分后验证 nums[left] == target
# 5. 右边界的结果是 right - 1（因为 left = mid + 1 会多走一步）
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        # 空数组直接返回
        if not nums:
            return [-1,-1]
        # target 超出数组范围，不可能存在
        if nums[0] > target or nums[-1] < target:
            return [-1,-1]
        # ===== 第一次二分：找左边界 =====
        left = 0
        right = len(nums)                       # 右边界用 len(nums)，左闭右开 [left, right)
        while left != right:
            mid = (left + right) // 2
            if nums[mid] >= target:              # mid 可能是答案或答案在更左边
                right = mid                      # 收缩右边界
            else:                                # nums[mid] < target，mid 肯定不是答案
                left = mid + 1                   # 跳过 mid，避免死循环
        tmpleft = left                           # 循环结束时 left == right，即左边界位置
        # 验证：target 可能根本不存在于数组中
        if tmpleft >= len(nums) or nums[tmpleft] != target:
            return [-1, -1]
        # ===== 第二次二分：找右边界 =====
        left = 0
        right = len(nums)
        while left != right:
            mid = (left + right) // 2
            if nums[mid] <= target:              # mid 可能是答案或答案在更右边
                left = mid + 1                   # 收缩左边界，跳过 mid 避免死循环
            else:                                # nums[mid] > target，mid 肯定不是答案
                right = mid                      # 收缩右边界
        return [tmpleft, right - 1]              # right-1 因为 left = mid+1 多走了一步
# ======================================================
# 📝 面试推荐写法：提取通用 bisect 函数
# ======================================================
# 核心思想：把「找左边界」和「找右边界」统一为一个函数
# bisect_left(target)  → 第一个 >= target 的位置
# bisect_right(target) → 第一个 > target 的位置（即 bisect_left(target+1)）
# 右边界 = bisect_right(target) - 1
#
# class Solution:
#     def searchRange(self, nums: List[int], target: int) -> List[int]:
#         def bisect_left(target):
#             """找第一个 >= target 的位置"""
#             lo, hi = 0, len(nums)
#             while lo < hi:
#                 mid = (lo + hi) // 2
#                 if nums[mid] >= target:
#                     hi = mid
#                 else:
#                     lo = mid + 1
#             return lo
#
#         left = bisect_left(target)
#         # target 不存在
#         if left >= len(nums) or nums[left] != target:
#             return [-1, -1]
#         # 右边界 = 第一个 > target 的位置 - 1 = bisect_left(target+1) - 1
#         right = bisect_left(target + 1) - 1
#         return [left, right]
# ======================================================`,statement:`给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

 

示例 1：

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]

示例 2：

输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]

示例 3：

输入：nums = [], target = 0
输出：[-1,-1]

 

提示：

- 0 <= nums.length <= 10^5

- -10^9 <= nums[i] <= 10^9

- nums 是一个非递减数组

- -10^9 <= target <= 10^9`},"35-搜索插入位置":{codePreview:`from typing import List
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        # 📌 需二刷：二分查找标准模板，用来找边界感
        #
        # 思路：标准二分查找。如果 target 不在数组中，while 循环结束时，left 刚好指向第一个大于 target 的元素位置（即插入位置）。
        # 时间 O(log n)，空间 O(1)
        #
        # ⚠️ 易错点/误区：
        # 1. 企图再次排序：题目给了有序数组，且要求 O(log n)，排序会变 O(n log n)。
        # 2. 死循环坑：当 nums[mid] < target 时，必须 left = mid + 1。写成 left = mid 会在剩 2 个元素时死循环。
        # 3. 边界收缩方向反了：nums[mid] > target 意味着 target 在左半区，右边界应该收缩 (right = mid - 1)，别写成 mid + 1。
        # 4. 找不到 target 时怎么返回：退出循环时，left 刚好是正确的插入位置，所以 return left，不要纠结 return mid 还是其他的。
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
        return left`,statement:`给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。

 

示例 1:

输入: nums = [1,3,5,6], target = 5
输出: 2

示例 2:

输入: nums = [1,3,5,6], target = 2
输出: 1

示例 3:

输入: nums = [1,3,5,6], target = 7
输出: 4

 

提示:

- 1 <= nums.length <= 10^4

- -10^4 <= nums[i] <= 10^4

- nums 为 无重复元素 的 升序 排列数组

- -10^4 <= target <= 10^4`},"74-搜索二维矩阵":{codePreview:`from typing import List
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        # 📌 需二刷：降维打击，一维二分查找变形
        #
        # 思路：将 m x n 的矩阵拉平看作一个长度为 m*n 的一维有序数组，直接使用标准二分查找。
        # 核心在于坐标转换：一维索引 mid 对应的二维坐标为 row = mid // n, col = mid % n。
        # 时间 O(log(m*n))，空间 O(1)
        #
        # ⚠️ 易错点/误区：
        # 1. 坐标转换公式的除数和模数必须是列数 n，不是行数 m！实战极容易敲错。
        # 2. 如果矩阵为空（比如 matrix=[] 或 matrix=[[]]），要特别小心越界，好在力扣这题给了约束 m,n >= 1。
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
        return False`,statement:`给你一个满足下述两条属性的 m x n 整数矩阵：

- 每行中的整数从左到右按非严格递增顺序排列。

- 每行的第一个整数大于前一行的最后一个整数。

给你一个整数 target ，如果 target 在矩阵中，返回 true ；否则，返回 false 。

你必须编写一个时间复杂度为 O(log(m * n)) 的解决方案。

 

示例 1：

输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
输出：true

示例 2：

输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
输出：false

 

提示：

- m == matrix.length

- n == matrix[i].length

- 1 <= m, n <= 100

- -10^4 <= matrix[i][j], target <= 10^4`},"153-寻找旋转排序数组中的最小值":{codePreview:`from typing import List
class Solution:
    def findMin(self, nums: List[int]) -> int:
        # 📌 需二刷：二分查找寻找旋转边界
        #
        # 思路：核心是利用 nums[mid] 和 nums[right] 的比较来判断“断崖”（最小值）在哪半边。
        # 如果 nums[mid] > nums[right]，说明右边有断崖，最小值肯定在右半边，left = mid + 1。
        # 如果 nums[mid] < nums[right]，说明右半边是正常升序的，最小值在左半边或者就是 mid 本身，right = mid。
        # 时间 O(log n)，空间 O(1)
        #
        # ⚠️ 易错点/误区：
        # 1. 为什么不用 nums[left] 比较？因为当数组没有旋转（如 [1,2,3]）时，比较 left 需要额外写特判，而比较 right 完美兼容所有情况。
        # 2. 防死循环奥义：循环条件必须是 left < right。因为有了 right = mid 这种保留中点的写法，如果写成 left <= right，当剩一个元素时就会无限死循环。
        # 3. 收缩右边界时是 right = mid 而不是 mid - 1，因为 nums[mid] 完全有可能就是那个最小值，不能跨过它。
        n = len(nums)
        left = 0
        right = n - 1
        while left < right:
            mid = (left + right) // 2
            if nums[mid] < nums[right]:
                right = mid
            if nums[mid] > nums[right]:
                left = mid + 1
        return nums[left]`,statement:`已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,2,4,5,6,7] 在变化后可能得到：

- 若旋转 4 次，则可以得到 [4,5,6,7,0,1,2]

- 若旋转 7 次，则可以得到 [0,1,2,4,5,6,7]

注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。

给你一个元素值 互不相同 的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。

你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。

 

示例 1：

输入：nums = [3,4,5,1,2]
输出：1
解释：原数组为 [1,2,3,4,5] ，旋转 3 次得到输入数组。

示例 2：

输入：nums = [4,5,6,7,0,1,2]
输出：0
解释：原数组为 [0,1,2,4,5,6,7] ，旋转 4 次得到输入数组。

示例 3：

输入：nums = [11,13,15,17]
输出：11
解释：原数组为 [11,13,15,17] ，旋转 4 次得到输入数组。

 

提示：

- n == nums.length

- 1 <= n <= 5000

- -5000 <= nums[i] <= 5000

- nums 中的所有整数 互不相同

- nums 原来是一个升序排序的数组，并进行了 1 至 n 次旋转`},"4-寻找两个正序数组的中位数":{codePreview:`from typing import List
class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        # 📌 需二刷：二分查找寻找切分线（划分数组）大魔王题
        #
        # 思路：在较短的数组 nums1 中二分查找切口 i，使得 nums1 和 nums2 左半边元素总数等于 (m+n+1)//2。
        # 当满足交叉验证 nums1_left_max <= nums2_right_min 且 nums2_left_max <= nums1_right_min 时，切分正确。
        # 时间 O(log(min(m,n)))，空间 O(1)
        #
        # ⚠️ 易错点/误区：
        # 1. 必须对较短的数组进行二分（强制交换），否则不仅慢，算出来的 j 还会越界出现负数。
        # 2. 边界处理：切口在两端时，左边无元素用 -inf，右边无元素用 inf 占位。
        # 3. 数组总长度为奇偶数时的返回逻辑不同，奇数是 max(左)，偶数是 (max(左) + min(右)) / 2.0。
        m = len(nums1)
        n = len(nums2)
        if m > n:
            nums1, nums2 = nums2, nums1
            m, n = n, m
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
                left = i + 1`,statement:`给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

算法的时间复杂度应该为 O(log (m+n)) 。

 

示例 1：

输入：nums1 = [1,3], nums2 = [2]
输出：2.00000
解释：合并数组 = [1,2,3] ，中位数 2

示例 2：

输入：nums1 = [1,2], nums2 = [3,4]
输出：2.50000
解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5

 

 

提示：

- nums1.length == m

- nums2.length == n

- 0 <= m <= 1000

- 0 <= n <= 1000

- 1 <= m + n <= 2000

- -10^6 <= nums1[i], nums2[i] <= 10^6`}};export{n as categoryContent};
