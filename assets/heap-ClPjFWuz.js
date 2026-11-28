const n={"215-数组中的第-k-个最大元素":{codePreview:`# import heapq
# class Solution:
#     def findKthLargest(self, nums: List[int], k: int) -> int:
#         pq = []
#         for e in nums:
#             heapq.heappush(pq,e)
#             if len(pq) > k:
#                 heapq.heappop(pq)
#         return pq[0]
import random
class Solution:
    def findKthLargest(self, nums: List[int],k: int) -> int:
        random.shuffle(nums)
        lo, hi = 0, len(nums)-1
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
    def partition(self, nums:List[int], lo: int, hi: int):
        pivot = nums[lo]
        i, j = lo + 1, hi
        while i <= j:
            while i <= hi and nums[i] < pivot:
                i += 1
            while j >= lo and nums[j] > pivot:
                j -= 1
            if i >= j:
                break
            nums[i], nums[j] = nums[j], nums[i]
            i += 1
            j -= 1
        nums[lo], nums[j] = nums[j], nums[lo]
        return j`,statement:`给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。

 

示例 1:

输入: [3,2,1,5,6,4], k = 2
输出: 5

示例 2:

输入: [3,2,3,1,2,4,5,5,6], k = 4
输出: 4

 

提示： 

- 1 <= k <= nums.length <= 10^5

- -10^4 <= nums[i] <= 10^4`},"347-前-k-个高频元素":{codePreview:`# 📌 需二刷：map 统计频率 + 最小堆维护 Top K（堆存元组 (频率, 元素)）
#
# 思路：先用 map 统计每个元素的出现频率，再遍历 map，往大小为 k 的最小堆里推
#       (频率, 元素) 元组，堆按频率排序，堆顶是频率最低的，超了就弹出。
#       最终堆里剩下频率最高的 k 个元素。
# 时间 O(n log k)，空间 O(n)
#
# 替代写法：可用 Counter 替代手写频率统计
#   from collections import Counter
#   freq = Counter(nums)  # 一行搞定，结果和下面 freq 一样
#
# ⚠️ 易错点/误区：
# 1. 堆里存 (count, num) 而不是 (num, count) —— heapq 按元组第一个元素排序
#    如果存 (num, count)，堆会按 num 的大小排序，完全错了
# 2. 遍历 freq.items() 时，解包顺序是 (num, count)，和推入堆的 (count, num) 相反
# 3. 最后从堆里取元素时，要取元组的第二个值 num，不是 count
import heapq
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq = {}
        for num in nums:
            freq[num] = freq.get(num, 0) + 1
        pq = []
        for num, count in freq.items():
            heapq.heappush(pq, (count, num))   # 元组 (频率, 元素)，堆按频率排序
            if len(pq) > k:
                heapq.heappop(pq)               # 弹出频率最低的
        result = []
        for count, num in pq:                   # 解包元组，只取元素
            result.append(num)
        return result`,statement:`给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。

 

示例 1：

输入：nums = [1,1,1,2,2,3], k = 2

输出：[1,2]

示例 2：

输入：nums = [1], k = 1

输出：[1]

示例 3：

输入：nums = [1,2,1,2,1,2,3,1,3,2], k = 2

输出：[1,2]

 

提示：

- 1 <= nums.length <= 10^5

- -10^4 <= nums[i] <= 10^4

- k 的取值范围是 [1, 数组中不相同的元素的个数]

- 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的

 

进阶：你所设计算法的时间复杂度 必须 优于 O(n log n) ，其中 n 是数组大小。`},"295-数据流的中位数":{codePreview:`# 📌 需二刷：双堆配合求数据流中位数（大顶堆 + 小顶堆）
#
# 思路：将数据流分成两半——较小的一半用大顶堆（存负数模拟），较大的一半用小顶堆。
#       保持两个堆大小平衡（最多差 1），中位数由堆顶计算得出。
# 时间 O(log n)（每次 addNum），空间 O(n)
#
# ⚠️ 易错点/误区：
# 1. Python 只有最小堆，用存负值模拟最大堆，取值时要取反
# 2. heappushpop 传参符号：往 large 过一道传正数，往 small 过一道传负数
# 3. 两个堆的大小差不能超过 1，否则中位数计算错误
# 4. findMedian 要考虑奇偶两种长度情况
import heapq
class MedianFinder:
    def __init__(self):
        self.large = []      # 大顶堆（存负数）→ 存较小的一半，堆顶是较小半的最大值
        self.small = []      # 小顶堆（存正数）→ 存较大的一半，堆顶是较大半的最小值
    def addNum(self, num: int) -> None:
        # 维持两个堆大小平衡：large 始终 <= small <= large+1
        if len(self.large) < len(self.small):
            # large 比 small 少 → 往 large 加一个
            # 先把 num 扔进 small 过一道，取出 small 最小值，取反给 large
            heapq.heappush(self.large, -heapq.heappushpop(self.small, num))
        else:
            # large 够了或相等 → 往 small 加一个
            # 先把 -num 扔进 large 过一道，取出 large 最大值（即 -堆顶），取反给 small
            heapq.heappush(self.small, -heapq.heappushpop(self.large, -num))
    def findMedian(self) -> float:
        if len(self.large) < len(self.small):
            return self.small[0]            # 较大半多一个，直接取小顶堆堆顶
        elif len(self.large) > len(self.small):
            return -self.large[0]           # 较小半多一个，取大顶堆堆顶取反
        else:
            return (-self.large[0] + self.small[0]) / 2  # 一样多，取平均值
# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()`,statement:`中位数是有序整数列表中的中间值。如果列表的大小是偶数，则没有中间值，中位数是两个中间值的平均值。

- 例如 arr = [2,3,4] 的中位数是 3 。

- 例如 arr = [2,3] 的中位数是 (2 + 3) / 2 = 2.5 。

实现 MedianFinder 类:

- 
MedianFinder() 初始化 MedianFinder 对象。

- 
void addNum(int num) 将数据流中的整数 num 添加到数据结构中。

- 
double findMedian() 返回到目前为止所有元素的中位数。与实际答案相差 10^-5 以内的答案将被接受。

示例 1：

输入
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
输出
[null, null, null, 1.5, null, 2.0]

解释
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // 返回 1.5 ((1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0

提示:

- -10^5 <= num <= 10^5

- 在调用 findMedian 之前，数据结构中至少有一个元素

- 最多 5 * 10^4 次调用 addNum 和 findMedian`}};export{n as categoryContent};
