const n={"283-移动零":{codePreview:`class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        # 核心思想,slow遇到0不动,等待fast找到非0值进行交换
        # 单指针填0
        # a = 0
        # for i in range(len(nums)):
        #     if nums[i] != 0:
        #         nums[a] = nums[i]
        #         a += 1
        # for i in range(a, len(nums)):
        #     nums[i] = 0
        # 双指针交换
        slow = 0
        for fast in range(len(nums)):
            if nums[fast] != 0:
                nums[slow], nums[fast] = nums[fast], nums[slow]
                slow += 1`,statement:`给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意 ，必须在不复制数组的情况下原地对数组进行操作。

 

示例 1:

输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]

示例 2:

输入: nums = [0]
输出: [0]

 

提示:

- 1 <= nums.length <= 10^4

- -2^31 <= nums[i] <= 2^31 - 1

 

进阶：你能尽量减少完成的操作次数吗？`},"11-盛最多水的容器":{codePreview:`class Solution:
    def maxArea(self, height: List[int]) -> int:
        # ========== 解题思路 ==========
        # 面积 = min(左高, 右高) × 宽度
        # 双指针从两端向中间移动，每次移动较短的一边
        # 因为：宽度一定变小，只有移动短边才有可能让 min(高) 变大，从而面积变大
        #       移动长边 → min(高) 不变或更小 → 面积一定变小，没意义
        # ========== 暴力解法 O(n²) — 超时 ==========
        # area = 0
        # for i in range(len(height)):
        #     for s in range(i+1, len(height)):
        #         area = max(min(height[i],height[s]) * (s-i),area)
        # return area
        # ========== 双指针解法 O(n) ==========
        front = 0
        back = len(height)-1
        area = 0
        while front < back:
            # 先算面积，再移动指针
            area = max(min(height[front],height[back]) * (back - front),area)
            if height[front] <= height[back]:
                front += 1
            else:
                back -= 1
        return area
        # ========== 踩坑记录 ==========
        # 坑1: area 初始化写成 area = () (空元组)，不能和 int 比大小
        #       → 初始化数值型变量用 0，不要用 () 或 None
        #
        # 坑2: for i in height 遍历的是"值"不是"索引"
        #       → 需要索引时一定用 range(len(height))
        #
        # 坑3: 先移动指针再算面积，导致漏算第一对、且用错了指针位置
        #       → 应该先算面积，再移动指针
        #
        # 坑4: 两个 if 不是互斥的，第一个 if 改了 front 后，
        #       第二个 if 用的是新的 front，可能一轮移动两个指针
        #       → 用 if/else 保证每轮只移动一个指针
        #
        # 坑5: while front <= back，当 front == back 时宽度为 0，没有意义
        #       → 用 while front < back`,statement:`给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

返回容器可以储存的最大水量。

说明：你不能倾斜容器。

 

示例 1：

输入：[1,8,6,2,5,4,8,3,7]
输出：49 
解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

示例 2：

输入：height = [1,1]
输出：1

 

提示：

- n == height.length

- 2 <= n <= 10^5

- 0 <= height[i] <= 10^4`},"15-三数之和":{codePreview:`class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        # ========== 解题思路 ==========
        # 排序 + 双指针，时间复杂度 O(n²)
        # 1. 先排序，让数组有序，才能用双指针判断移动方向
        # 2. for 循环固定第一个数 nums[i]
        # 3. left 和 right 双指针在 i 右边区间找另外两个数
        # 4. 通过 total 的大小判断移动哪个指针
        # ========== 正确解法 ==========
        nums.sort()  # 排序是前提！.sort() 原地排序，返回 None，不要写 nums = nums.sort()
        result = []
        for i in range(len(nums)):
            # 剪枝：排序后如果 nums[i] > 0，三数之和不可能为 0
            if nums[i] > 0:
                break
            # 去重：跳过重复的第一个数（i > 0 防止越界）
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            left = i + 1
            right = len(nums) - 1
            while left < right:
                total = nums[i] + nums[left] + nums[right]
                if total < 0:
                    left += 1    # 和太小，left 右移找更大的数
                elif total > 0:
                    right -= 1   # 和太大，right 左移找更小的数
                else:
                    # 找到一组答案
                    result.append([nums[i], nums[left], nums[right]])
                    # 去重：跳过重复的 left 和 right
                    while left < right and nums[left] == nums[left + 1]:
                        left += 1
                    while left < right and nums[right] == nums[right - 1]:
                        right -= 1
                    # 两个指针同时移动，继续找下一组
                    left += 1
                    right -= 1
        return result
        # ========== 踩坑记录（⚠️ 需要二刷） ==========
        # 坑1: nums = nums.sort() → .sort() 返回 None，直接 nums.sort()
        # 坑2: for i in height 遍历值不是索引 → 用 range(len(nums))
        # 坑3: left = i - 1 → 应该是 i + 1，在 i 的右边搜索
        # 坑4: total < 0 时 right -= 1（方向反了）
        #       → 和太小应该 left += 1（往右找更大的数）
        #       → 和太大应该 right -= 1（往左找更小的数）
        # 坑5: result.append(a, b, c) → append 只接受一个参数
        #       → 应该传一个列表 result.append([a, b, c])
        # 坑6: 用 result.set() 去重 → list 没有 set() 方法
        #       → 正确做法是在循环中跳过相同的数
        # 坑7: & 是位运算，逻辑与用 and`,statement:`给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 

 

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
解释：
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。

示例 2：

输入：nums = [0,1,1]
输出：[]
解释：唯一可能的三元组和不为 0 。

示例 3：

输入：nums = [0,0,0]
输出：[[0,0,0]]
解释：唯一可能的三元组和为 0 。

 

提示：

- 3 <= nums.length <= 3000

- -10^5 <= nums[i] <= 10^5`},"42-接雨水":{codePreview:`# class Solution:
#     def trap(self, height: List[int]) -> int:
#         if len(height) == 0:
#             return 0
#         n = len(height)
#         res = 0
#         # 创建备忘录
#         l_max = [0] * n
#         r_max = [0] * n
#         # 初始化
#         l_max[0] = height[0]
#         r_max[n-1] = height[n-1]
#         for i in range(1, n):
#             l_max[i] = max(height[i], l_max[i - 1])
#         for i in range(n - 2, -1, -1):
#             r_max[i] = max(height[i], r_max[i + 1])
#         for i in range(1, n - 1):
#             res += min(l_max[i],r_max[i]) - height[i]
#         return res
class Solution:
    def trap(self, height: List[int]) -> int:
        if len(height) == 0:
            return 0
        n = len(height)
        res = 0
        left, right = 0, n - 1
        l_max, r_max = height[0], height[n-1]
        while left < right:
            if l_max < r_max:
                left += 1
                l_max = max(l_max, height[left])
                res += l_max - height[left]
            else:
                right -= 1
                r_max = max(r_max, height[right])
                res += r_max - height[right]
        return res`,statement:`给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

 

示例 1：

输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 

示例 2：

输入：height = [4,2,0,3,2,5]
输出：9

 

提示：

- n == height.length

- 1 <= n <= 2 * 10^4

- 0 <= height[i] <= 10^5`}};export{n as categoryContent};
