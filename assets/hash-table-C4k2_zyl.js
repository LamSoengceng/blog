const n={"1-两数之和":{codePreview:`class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash_map = {}                          # 哈希表：{值: 下标}
        for i, num in enumerate(nums):         # 遍历数组，i=下标, num=值
            complement = target - num          # 计算需要的"搭档"
            if complement in hash_map:         # 搭档来过吗？O(1) 查找
                return [hash_map[complement], i]  # 找到了，返回两个下标
            hash_map[num] = i                  # 没找到，登记自己等着
        return []`,statement:`给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。

你可以按任意顺序返回答案。

 

示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

示例 2：

输入：nums = [3,2,4], target = 6
输出：[1,2]

示例 3：

输入：nums = [3,3], target = 6
输出：[0,1]

 

提示：

- 2 <= nums.length <= 10^4

- -10^9 <= nums[i] <= 10^9

- -10^9 <= target <= 10^9

- 只会存在一个有效答案

 

进阶：你可以想出一个时间复杂度小于 O(n^2) 的算法吗？`},"49-字母异位词分组":{codePreview:`from collections import defaultdict
class Solution:
    # 方法一：排序法
    # 思路：异位词排序后结果相同，用排序结果作为 key 分组
    # 时间 O(n·k·logk)  空间 O(n·k)  （n=字符串个数, k=最长字符串长度）
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        a = defaultdict(list)           # key: 排序后的元组, value: 原始字符串列表
        for i in strs:
            key = tuple(sorted(i))      # sorted 排序 → tuple 转不可变类型做 key
            a[key].append(i)            # 相同 key 的字符串归为一组
        return list(a.values())
    # 方法二：计数法
    # 思路：异位词的字母出现次数相同，用 26 位计数数组作为 key 分组
    # 时间 O(n·k)  空间 O(n·k)  （省去排序的 logk）
    def groupAnagrams2(self, strs: List[str]) -> List[List[str]]:
        a = defaultdict(list)           # key: 字母频次元组, value: 原始字符串列表
        for s in strs:
            count = [0] * 26            # 26 个字母的计数器，下标 0~25 对应 a~z
            for c in s:
                count[ord(c) - ord('a')] += 1  # ord() 取 ASCII 码，减去 ord('a') 映射到 0~25
            a[tuple(count)].append(s)   # 把计数数组转 tuple 做 key
        return list(a.values())`,statement:`给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

 

示例 1:

输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

输出: [["bat"],["nat","tan"],["ate","eat","tea"]]

解释：

- 在 strs 中没有字符串可以通过重新排列来形成 "bat"。

- 字符串 "nat" 和 "tan" 是字母异位词，因为它们可以重新排列以形成彼此。

- 字符串 "ate" ，"eat" 和 "tea" 是字母异位词，因为它们可以重新排列以形成彼此。

示例 2:

输入: strs = [""]

输出: [[""]]

示例 3:

输入: strs = ["a"]

输出: [["a"]]

 

提示：

- 1 <= strs.length <= 10^4

- 0 <= strs[i].length <= 100

- strs[i] 仅包含小写字母`},"128-最长连续序列":{codePreview:`# 方法：哈希集合
# 核心思想：把所有数字放入 set，利用 O(1) 的查找速度
# 只从每个连续序列的"起点"开始向后扩展，避免重复遍历
# 时间复杂度：O(n)，每个数字最多被访问两次
# 空间复杂度：O(n)，存储 set
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        num_set = set(nums)           # 将所有数字放入集合，查找 O(1)
        longest = 0                   # 记录全局最长连续序列长度
        for num in num_set:
            # 关键优化：如果 num-1 存在，说明 num 不是序列起点，跳过
            # 只从序列的最小值开始扩展，保证每个序列只遍历一次
            if num-1 not in num_set:
                current = num         # 当前正在检查的数字
                length = 1            # 当前连续序列的长度（至少包含 num 自己）
                # 不断向后查找 current+1 是否存在，存在则序列长度+1
                while current+1 in num_set:
                    current += 1
                    length += 1
                longest = max(longest,length)  # 更新全局最长长度
        return longest`,statement:`给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

 

示例 1：

输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。

示例 2：

输入：nums = [0,3,7,2,5,8,4,6,0,1]
输出：9

示例 3：

输入：nums = [1,0,1,2]
输出：3

 

提示：

- 0 <= nums.length <= 10^5

- -10^9 <= nums[i] <= 10^9`}};export{n as categoryContent};
