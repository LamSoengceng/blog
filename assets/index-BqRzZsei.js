const n={哈希表:"hash-table",双指针:"two-pointers",滑动窗口:"sliding-window",子串:"substring",动态规划:"dynamic-programming",普通数组:"array",矩阵:"matrix",链表:"linked-list",二叉树:"binary-tree",图论:"graph",回溯:"backtracking",二分查找:"binary-search",栈:"stack",堆:"heap",贪心:"greedy",技巧:"tricks","Hot100 补充":"hot100-extra"},e=[{id:"1",slug:"1-两数之和",title:"两数之和",titleEn:"Two Sum",category:"哈希表",difficulty:"简单",topic:"字典查表",completed:!0,leetcodeSlug:"two-sum",leetcodeUrl:"https://leetcode.cn/problems/two-sum/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C",acceptanceRate:55.2,solutionCount:30551,companyTagCount:453,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["哈希表","字典查表","数组"],sourcePath:"hot100/01_哈希表/1.两数之和.py",lastUpdated:"2026-03-16",lastUpdatedAt:"2026-03-16T10:38:36.695Z",interviewPattern:"先明确 key/value 设计，再判断是查补数、分组还是去重；面试写法优先使用 dict/set 保持 O(n)。",thoughts:[`题目：给定数组 nums 和目标值 target，找出和为 target 的两个数的下标
示例：nums  [2,7,11,15], target  9 → [0,1]（因为 2+79）
思路：哈希表（一遍遍历）
- 遍历数组，对每个数计算 complement  target - num
- 查哈希表中是否已有 complement，有则返回两个下标
- 没有则把当前数存入哈希表，继续遍历
核心技巧：用哈希表把 O(n) 的查找变成 O(1)，总时间从 O(n²) 降到 O(n)
时间复杂度：O(n)   空间复杂度：O(n)`],pitfalls:["本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"],recallBlanks:[],solutionGuide:{idea:"围绕「字典查表」组织解法，先确认输入输出和边界，再选择对应模板。",interviewSteps:["先说明核心考点：字典查表。","先明确 key/value 设计，再判断是查补数、分组还是去重；面试写法优先使用 dict/set 保持 O(n)。","关键词：哈希表 / 字典查表 / 数组。"],complexity:`题目：给定数组 nums 和目标值 target，找出和为 target 的两个数的下标
示例：nums  [2,7,11,15], target  9 → [0,1]（因为 2+79）
思路：哈希表（一遍遍历）
- 遍历数组，对每个数计算 complement  target - num
- 查哈希表中是否已有 complement，有则返回两个下标
- 没有则把当前数存入哈希表，继续遍历
核心技巧：用哈希表把 O(n) 的查找变成 O(1)，总时间从 O(n²) 降到 O(n)
时间复杂度：O(n)   空间复杂度：O(n)`,keyMistake:"本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"},ask:"给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。",constraints:["- 2 <= nums.length <= 10^4","- -10^9 <= nums[i] <= 10^9","- -10^9 <= target <= 10^9"]},{id:"49",slug:"49-字母异位词分组",title:"字母异位词分组",titleEn:"Group Anagrams",category:"哈希表",difficulty:"中等",topic:"排序数组作 Key",completed:!0,leetcodeSlug:"group-anagrams",leetcodeUrl:"https://leetcode.cn/problems/group-anagrams/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E5%AD%97%E6%AF%8D%E5%BC%82%E4%BD%8D%E8%AF%8D%E5%88%86%E7%BB%84",acceptanceRate:69.4,solutionCount:5662,companyTagCount:127,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["哈希表","排序数组作 Key","数组","字符串","排序"],sourcePath:"hot100/01_哈希表/49.字母异位词分组.py",lastUpdated:"2026-03-16",lastUpdatedAt:"2026-03-16T14:03:45.181Z",interviewPattern:"先明确 key/value 设计，再判断是查补数、分组还是去重；面试写法优先使用 dict/set 保持 O(n)。",thoughts:[`方法一：排序法
思路：异位词排序后结果相同，用排序结果作为 key 分组
时间 O(n·k·logk)  空间 O(n·k)  （n字符串个数, k最长字符串长度）`,`方法二：计数法
思路：异位词的字母出现次数相同，用 26 位计数数组作为 key 分组
时间 O(n·k)  空间 O(n·k)  （省去排序的 logk）`],pitfalls:["本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"],recallBlanks:[],solutionGuide:{idea:`方法一：排序法
思路：异位词排序后结果相同，用排序结果作为 key 分组
时间 O(n·k·logk)  空间 O(n·k)  （n字符串个数, k最长字符串长度）`,interviewSteps:["先说明核心考点：排序数组作 Key。","先明确 key/value 设计，再判断是查补数、分组还是去重；面试写法优先使用 dict/set 保持 O(n)。","关键词：哈希表 / 排序数组作 Key / 数组 / 字符串。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:"本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"},ask:"给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。",constraints:["- 1 <= strs.length <= 10^4","- 0 <= strs[i].length <= 100"]},{id:"128",slug:"128-最长连续序列",title:"最长连续序列",titleEn:"Longest Consecutive Sequence",category:"哈希表",difficulty:"中等",topic:"Set 去重",completed:!0,leetcodeSlug:"longest-consecutive-sequence",leetcodeUrl:"https://leetcode.cn/problems/longest-consecutive-sequence/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%9C%80%E9%95%BF%E8%BF%9E%E7%BB%AD%E5%BA%8F%E5%88%97",acceptanceRate:48.7,solutionCount:6252,companyTagCount:92,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["哈希表","Set 去重","并查集","数组"],sourcePath:"hot100/01_哈希表/128.最长连续序列.py",lastUpdated:"2026-03-16",lastUpdatedAt:"2026-03-16T14:41:07.592Z",interviewPattern:"先明确 key/value 设计，再判断是查补数、分组还是去重；面试写法优先使用 dict/set 保持 O(n)。",thoughts:[`方法：哈希集合
核心思想：把所有数字放入 set，利用 O(1) 的查找速度
只从每个连续序列的"起点"开始向后扩展，避免重复遍历
时间复杂度：O(n)，每个数字最多被访问两次
空间复杂度：O(n)，存储 set`],pitfalls:["本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"],recallBlanks:[],solutionGuide:{idea:"围绕「Set 去重」组织解法，先确认输入输出和边界，再选择对应模板。",interviewSteps:["先说明核心考点：Set 去重。","先明确 key/value 设计，再判断是查补数、分组还是去重；面试写法优先使用 dict/set 保持 O(n)。","关键词：哈希表 / Set 去重 / 并查集 / 数组。"],complexity:`方法：哈希集合
核心思想：把所有数字放入 set，利用 O(1) 的查找速度
只从每个连续序列的"起点"开始向后扩展，避免重复遍历
时间复杂度：O(n)，每个数字最多被访问两次
空间复杂度：O(n)，存储 set`,keyMistake:"本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"},ask:"给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。",constraints:["- 0 <= nums.length <= 10^5","- -10^9 <= nums[i] <= 10^9"]},{id:"283",slug:"283-移动零",title:"移动零",titleEn:"Move Zeroes",category:"双指针",difficulty:"简单",topic:"快慢指针",completed:!0,leetcodeSlug:"move-zeroes",leetcodeUrl:"https://leetcode.cn/problems/move-zeroes/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E7%A7%BB%E5%8A%A8%E9%9B%B6",acceptanceRate:63.7,solutionCount:11439,companyTagCount:114,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["双指针","快慢指针","数组"],sourcePath:"hot100/02_双指针/283.移动零.py",lastUpdated:"2026-03-16",lastUpdatedAt:"2026-03-16T15:29:44.444Z",interviewPattern:"先排序或确定单调性，再定义左右指针移动规则；每次移动必须能排除一批不可能答案。",thoughts:[`核心思想,slow遇到0不动,等待fast找到非0值进行交换
单指针填0
a  0`,"双指针交换"],pitfalls:["本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"],recallBlanks:[],solutionGuide:{idea:`核心思想,slow遇到0不动,等待fast找到非0值进行交换
单指针填0
a  0`,interviewSteps:["先说明核心考点：快慢指针。","先排序或确定单调性，再定义左右指针移动规则；每次移动必须能排除一批不可能答案。","关键词：双指针 / 快慢指针 / 数组。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:"本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"},ask:"给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。",constraints:["- 1 <= nums.length <= 10^4","- -2^31 <= nums[i] <= 2^31 - 1"]},{id:"11",slug:"11-盛最多水的容器",title:"盛最多水的容器",titleEn:"Container With Most Water",category:"双指针",difficulty:"中等",topic:"左右夹逼",completed:!0,leetcodeSlug:"container-with-most-water",leetcodeUrl:"https://leetcode.cn/problems/container-with-most-water/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E7%9B%9B%E6%9C%80%E5%A4%9A%E6%B0%B4%E7%9A%84%E5%AE%B9%E5%99%A8",acceptanceRate:61.9,solutionCount:9364,companyTagCount:197,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["双指针","左右夹逼","贪心","数组"],sourcePath:"hot100/02_双指针/11.盛最多水的容器.py",lastUpdated:"2026-03-17",lastUpdatedAt:"2026-03-17T13:17:48.803Z",interviewPattern:"先排序或确定单调性，再定义左右指针移动规则；每次移动必须能排除一批不可能答案。",thoughts:[`解题思路
面积  min(左高, 右高) × 宽度
双指针从两端向中间移动，每次移动较短的一边
因为：宽度一定变小，只有移动短边才有可能让 min(高) 变大，从而面积变大
移动长边 → min(高) 不变或更小 → 面积一定变小，没意义`,`暴力解法 O(n²) — 超时
area  0
for i in range(len(height)):
for s in range(i+1, len(height)):
area  max(min(height[i],height[s]) * (s-i),area)
return area`,"双指针解法 O(n)"],pitfalls:[`踩坑记录
坑1: area 初始化写成 area  () (空元组)，不能和 int 比大小
→ 初始化数值型变量用 0，不要用 () 或 None
坑2: for i in height 遍历的是"值"不是"索引"
→ 需要索引时一定用 range(len(height))
坑3: 先移动指针再算面积，导致漏算第一对、且用错了指针位置
→ 应该先算面积，再移动指针
坑4: 两个 if 不是互斥的，第一个 if 改了 front 后，
第二个 if 用的是新的 front，可能一轮移动两个指针
→ 用 if/else 保证每轮只移动一个指针
坑5: while front < back，当 front  back 时宽度为 0，没有意义
→ 用 while front < back`],recallBlanks:[{prompt:`解题思路
面积  min(左高, 右高) × 宽度
＿＿＿从两端向中间移动，每次移动较短的一边
因为：宽度一定变小，只有移动短边才有可能让 min(高) 变大，从而面积变大
移动长边 → min(高) 不变或更小 → 面积一定变小，没意义`,answer:"双指针"}],solutionGuide:{idea:`解题思路
面积  min(左高, 右高) × 宽度
双指针从两端向中间移动，每次移动较短的一边
因为：宽度一定变小，只有移动短边才有可能让 min(高) 变大，从而面积变大
移动长边 → min(高) 不变或更小 → 面积一定变小，没意义`,interviewSteps:["先说明核心考点：左右夹逼。","先排序或确定单调性，再定义左右指针移动规则；每次移动必须能排除一批不可能答案。","关键词：双指针 / 左右夹逼 / 贪心 / 数组。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`踩坑记录
坑1: area 初始化写成 area  () (空元组)，不能和 int 比大小
→ 初始化数值型变量用 0，不要用 () 或 None
坑2: for i in height 遍历的是"值"不是"索引"
→ 需要索引时一定用 range(len(height))
坑3: 先移动指针再算面积，导致漏算第一对、且用错了指针位置
→ 应该先算面积，再移动指针
坑4: 两个 if 不是互斥的，第一个 if 改了 front 后，
第二个 if 用的是新的 front，可能一轮移动两个指针
→ 用 if/else 保证每轮只移动一个指针
坑5: while front < back，当 front  back 时宽度为 0，没有意义
→ 用 while front < back`},ask:"给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。",constraints:["- 2 <= n <= 10^5","- 0 <= height[i] <= 10^4"]},{id:"15",slug:"15-三数之和",title:"三数之和",titleEn:"3Sum",category:"双指针",difficulty:"中等",topic:"排序 + 双指针",completed:!0,leetcodeSlug:"3sum",leetcodeUrl:"https://leetcode.cn/problems/3sum/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E4%B8%89%E6%95%B0%E4%B9%8B%E5%92%8C",acceptanceRate:40.6,solutionCount:9803,companyTagCount:222,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["双指针","排序 + 双指针","数组","排序"],sourcePath:"hot100/02_双指针/15.三数之和.py",lastUpdated:"2026-03-17",lastUpdatedAt:"2026-03-17T14:02:17.702Z",interviewPattern:"先排序或确定单调性，再定义左右指针移动规则；每次移动必须能排除一批不可能答案。",thoughts:[`解题思路
排序 + 双指针，时间复杂度 O(n²)
1. 先排序，让数组有序，才能用双指针判断移动方向
2. for 循环固定第一个数 nums[i]
3. left 和 right 双指针在 i 右边区间找另外两个数
4. 通过 total 的大小判断移动哪个指针`,"正确解法"],pitfalls:["去重：跳过重复的第一个数（i > 0 防止越界）",`踩坑记录（ 需要二刷）
坑1: nums  nums.sort() → .sort() 返回 None，直接 nums.sort()
坑2: for i in height 遍历值不是索引 → 用 range(len(nums))
坑3: left  i - 1 → 应该是 i + 1，在 i 的右边搜索
坑4: total < 0 时 right - 1（方向反了）
→ 和太小应该 left + 1（往右找更大的数）
→ 和太大应该 right - 1（往左找更小的数）
坑5: result.append(a, b, c) → append 只接受一个参数
→ 应该传一个列表 result.append([a, b, c])
坑6: 用 result.set() 去重 → list 没有 set() 方法
→ 正确做法是在循环中跳过相同的数
坑7: & 是位运算，逻辑与用 and`],recallBlanks:[],solutionGuide:{idea:"正确解法",interviewSteps:["先说明核心考点：排序 + 双指针。","先排序或确定单调性，再定义左右指针移动规则；每次移动必须能排除一批不可能答案。","关键词：双指针 / 排序 + 双指针 / 数组 / 排序。"],complexity:`解题思路
排序 + 双指针，时间复杂度 O(n²)
1. 先排序，让数组有序，才能用双指针判断移动方向
2. for 循环固定第一个数 nums[i]
3. left 和 right 双指针在 i 右边区间找另外两个数
4. 通过 total 的大小判断移动哪个指针`,keyMistake:"去重：跳过重复的第一个数（i > 0 防止越界）"},ask:"给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == …",constraints:["- 3 <= nums.length <= 3000","- -10^5 <= nums[i] <= 10^5"]},{id:"42",slug:"42-接雨水",title:"接雨水",titleEn:"Trapping Rain Water",category:"双指针",difficulty:"困难",topic:"双指针 / 单调栈",completed:!0,leetcodeSlug:"trapping-rain-water",leetcodeUrl:"https://leetcode.cn/problems/trapping-rain-water/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%8E%A5%E9%9B%A8%E6%B0%B4",acceptanceRate:66.1,solutionCount:8223,companyTagCount:192,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["双指针","双指针 / 单调栈","栈","数组","动态规划","单调栈"],sourcePath:"hot100/02_双指针/42.接雨水.py",lastUpdated:"2026-07-08",lastUpdatedAt:"2026-07-08T16:48:47.909Z",interviewPattern:"先排序或确定单调性，再定义左右指针移动规则；每次移动必须能排除一批不可能答案。",thoughts:["核心考点：双指针 / 单调栈","先排序或确定单调性，再定义左右指针移动规则；每次移动必须能排除一批不可能答案。"],pitfalls:[`class Solution:
def trap(self, height: List[int]) -> int:
if len(height)  0:
return 0
n  len(height)
res  0
# 创建备忘录
l_max  [0] * n
r_max  [0] * n
# 初始化
l_max[0]  height[0]
r_max[n-1]  height[n-1]`],recallBlanks:[{prompt:"核心考点：＿＿＿ / ＿＿＿",answer:"双指针"}],solutionGuide:{idea:"核心考点：双指针 / 单调栈",interviewSteps:["先说明核心考点：双指针 / 单调栈。","先排序或确定单调性，再定义左右指针移动规则；每次移动必须能排除一批不可能答案。","关键词：双指针 / 双指针 / 单调栈 / 栈 / 数组。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`class Solution:
def trap(self, height: List[int]) -> int:
if len(height)  0:
return 0
n  len(height)
res  0
# 创建备忘录
l_max  [0] * n
r_max  [0] * n
# 初始化
l_max[0]  height[0]
r_max[n-1]  height[n-1]`},ask:"给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。",constraints:["- 1 <= n <= 2 * 10^4","- 0 <= height[i] <= 10^5"]},{id:"3",slug:"3-无重复字符的最长子串",title:"无重复字符的最长子串",titleEn:"Longest Substring Without Repeating Characters",category:"滑动窗口",difficulty:"中等",topic:"窗口伸缩 + 哈希记录",completed:!0,leetcodeSlug:"longest-substring-without-repeating-characters",leetcodeUrl:"https://leetcode.cn/problems/longest-substring-without-repeating-characters/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%97%A0%E9%87%8D%E5%A4%8D%E5%AD%97%E7%AC%A6%E7%9A%84%E6%9C%80%E9%95%BF%E5%AD%90%E4%B8%B2",acceptanceRate:42.9,solutionCount:20405,companyTagCount:320,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["滑动窗口","窗口伸缩 + 哈希记录","哈希表","字符串"],sourcePath:"hot100/03_滑动窗口/3.无重复字符的最长子串.py",lastUpdated:"2026-06-01",lastUpdatedAt:"2026-06-01T15:19:25.241Z",interviewPattern:"维护窗口内的计数和有效条件，右指针扩张，左指针只在条件满足或失效时收缩。",thoughts:[`需二刷：经典滑动窗口（求最长子串）
思路：这道题找的是“最长”的无重复子串，不需要固定窗口大小。
只要新加入的字符 c 导致了窗口内出现了重复（window[c] > 1），
就不断移动 left 缩小窗口，直到把重复的那个字符移出去为止。
当窗口内再次没有重复字符时，更新最大长度。
时间 O(N)，其中 N 是 s 的长度。
空间 O(C)，C 为字符集大小（ASCII 码最多 128/256 个）。
易错点/误区：
1. 更新最大长度的位置：result  max(...) 必须放在内层 while 循环结束之后。因为只有在剔除重复字符后，当前窗口内的子串才是合法的“无重复”子串。
2. 收缩条件：这道题不需要像 567 题那样判断 right - left 的长度，而是直接用 window[c] > 1 作为收缩条件，直击要害。`],pitfalls:[`需二刷：经典滑动窗口（求最长子串）
思路：这道题找的是“最长”的无重复子串，不需要固定窗口大小。
只要新加入的字符 c 导致了窗口内出现了重复（window[c] > 1），
就不断移动 left 缩小窗口，直到把重复的那个字符移出去为止。
当窗口内再次没有重复字符时，更新最大长度。
时间 O(N)，其中 N 是 s 的长度。
空间 O(C)，C 为字符集大小（ASCII 码最多 128/256 个）。
易错点/误区：
1. 更新最大长度的位置：result  max(...) 必须放在内层 while 循环结束之后。因为只有在剔除重复字符后，当前窗口内的子串才是合法的“无重复”子串。
2. 收缩条件：这道题不需要像 567 题那样判断 right - left 的长度，而是直接用 window[c] > 1 作为收缩条件，直击要害。`],recallBlanks:[],solutionGuide:{idea:`需二刷：经典滑动窗口（求最长子串）
思路：这道题找的是“最长”的无重复子串，不需要固定窗口大小。
只要新加入的字符 c 导致了窗口内出现了重复（window[c] > 1），
就不断移动 left 缩小窗口，直到把重复的那个字符移出去为止。
当窗口内再次没有重复字符时，更新最大长度。
时间 O(N)，其中 N 是 s 的长度。
空间 O(C)，C 为字符集大小（ASCII 码最多 128/256 个）。
易错点/误区：
1. 更新最大长度的位置：result  max(...) 必须放在内层 while 循环结束之后。因为只有在剔除重复字符后，当前窗口内的子串才是合法的“无重复”子串。
2. 收缩条件：这道题不需要像 567 题那样判断 right - left 的长度，而是直接用 window[c] > 1 作为收缩条件，直击要害。`,interviewSteps:["先说明核心考点：窗口伸缩 + 哈希记录。","维护窗口内的计数和有效条件，右指针扩张，左指针只在条件满足或失效时收缩。","关键词：滑动窗口 / 窗口伸缩 + 哈希记录 / 哈希表 / 字符串。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：经典滑动窗口（求最长子串）
思路：这道题找的是“最长”的无重复子串，不需要固定窗口大小。
只要新加入的字符 c 导致了窗口内出现了重复（window[c] > 1），
就不断移动 left 缩小窗口，直到把重复的那个字符移出去为止。
当窗口内再次没有重复字符时，更新最大长度。
时间 O(N)，其中 N 是 s 的长度。
空间 O(C)，C 为字符集大小（ASCII 码最多 128/256 个）。
易错点/误区：
1. 更新最大长度的位置：result  max(...) 必须放在内层 while 循环结束之后。因为只有在剔除重复字符后，当前窗口内的子串才是合法的“无重复”子串。
2. 收缩条件：这道题不需要像 567 题那样判断 right - left 的长度，而是直接用 window[c] > 1 作为收缩条件，直击要害。`},ask:"给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串 的长度。",constraints:["- 0 <= s.length <= 10^5"]},{id:"438",slug:"438-找到字符串中所有字母异位词",title:"找到字符串中所有字母异位词",titleEn:"Find All Anagrams in a String",category:"滑动窗口",difficulty:"中等",topic:"固定窗口 + 计数器",completed:!0,leetcodeSlug:"find-all-anagrams-in-a-string",leetcodeUrl:"https://leetcode.cn/problems/find-all-anagrams-in-a-string/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%89%BE%E5%88%B0%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E6%89%80%E6%9C%89%E5%AD%97%E6%AF%8D%E5%BC%82%E4%BD%8D%E8%AF%8D",acceptanceRate:54.6,solutionCount:4458,companyTagCount:55,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["滑动窗口","固定窗口 + 计数器","哈希表","字符串"],sourcePath:"hot100/03_滑动窗口/438.找到字符串中所有字母异位词.py",lastUpdated:"2026-06-01",lastUpdatedAt:"2026-06-01T15:10:26.505Z",interviewPattern:"维护窗口内的计数和有效条件，右指针扩张，左指针只在条件满足或失效时收缩。",thoughts:[`需二刷：滑动窗口寻找所有固定长度的子串（异位词/排列）
思路：异位词本质上就是字符串的排列。这道题和 567 题（字符串的排列）逻辑完全一致。
区别仅仅在于：567 题找到一个就 return True，本题需要把所有找到的起始索引 left 存入结果数组中。
时间 O(N + M)，其中 N 是 s 的长度，M 是 p 的长度。
空间 O(C)，C 为字符集大小，本题最多 26 个字母。
易错点/误区：
1. 结果收集的位置：必须在窗口大小达到 p 的长度时进行判断，且记录的索引是当前的 left。
2. window 收缩条件：依然是 right - left > len(p)，保证窗口长度严格等于 p 的长度。`],pitfalls:[`需二刷：滑动窗口寻找所有固定长度的子串（异位词/排列）
思路：异位词本质上就是字符串的排列。这道题和 567 题（字符串的排列）逻辑完全一致。
区别仅仅在于：567 题找到一个就 return True，本题需要把所有找到的起始索引 left 存入结果数组中。
时间 O(N + M)，其中 N 是 s 的长度，M 是 p 的长度。
空间 O(C)，C 为字符集大小，本题最多 26 个字母。
易错点/误区：
1. 结果收集的位置：必须在窗口大小达到 p 的长度时进行判断，且记录的索引是当前的 left。
2. window 收缩条件：依然是 right - left > len(p)，保证窗口长度严格等于 p 的长度。`],recallBlanks:[],solutionGuide:{idea:`需二刷：滑动窗口寻找所有固定长度的子串（异位词/排列）
思路：异位词本质上就是字符串的排列。这道题和 567 题（字符串的排列）逻辑完全一致。
区别仅仅在于：567 题找到一个就 return True，本题需要把所有找到的起始索引 left 存入结果数组中。
时间 O(N + M)，其中 N 是 s 的长度，M 是 p 的长度。
空间 O(C)，C 为字符集大小，本题最多 26 个字母。
易错点/误区：
1. 结果收集的位置：必须在窗口大小达到 p 的长度时进行判断，且记录的索引是当前的 left。
2. window 收缩条件：依然是 right - left > len(p)，保证窗口长度严格等于 p 的长度。`,interviewSteps:["先说明核心考点：固定窗口 + 计数器。","维护窗口内的计数和有效条件，右指针扩张，左指针只在条件满足或失效时收缩。","关键词：滑动窗口 / 固定窗口 + 计数器 / 哈希表 / 字符串。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：滑动窗口寻找所有固定长度的子串（异位词/排列）
思路：异位词本质上就是字符串的排列。这道题和 567 题（字符串的排列）逻辑完全一致。
区别仅仅在于：567 题找到一个就 return True，本题需要把所有找到的起始索引 left 存入结果数组中。
时间 O(N + M)，其中 N 是 s 的长度，M 是 p 的长度。
空间 O(C)，C 为字符集大小，本题最多 26 个字母。
易错点/误区：
1. 结果收集的位置：必须在窗口大小达到 p 的长度时进行判断，且记录的索引是当前的 left。
2. window 收缩条件：依然是 right - left > len(p)，保证窗口长度严格等于 p 的长度。`},ask:"给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。",constraints:["- 1 <= s.length, p.length <= 3 * 10^4"]},{id:"239",slug:"239-滑动窗口最大值",title:"滑动窗口最大值",titleEn:"Sliding Window Maximum",category:"子串",difficulty:"困难",topic:"（同上，已在上方列出）",completed:!0,leetcodeSlug:"sliding-window-maximum",leetcodeUrl:"https://leetcode.cn/problems/sliding-window-maximum/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3%E6%9C%80%E5%A4%A7%E5%80%BC",acceptanceRate:50.3,solutionCount:5417,companyTagCount:113,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["子串","（同上，已在上方列出）","队列","数组","滑动窗口","单调队列","堆（优先队列）","区间最值查询"],sourcePath:"hot100/04_子串/239.滑动窗口最大值.py",lastUpdated:"2026-08-19",lastUpdatedAt:"2026-08-19T18:08:57.927Z",interviewPattern:"核心是频次表和窗口有效性，面试中要把 need/window、valid 或 missing 变量说清楚。",thoughts:[`需二刷：单调队列核心题型，与 84/739 单调栈是镜像概念
思路：维护一个存「下标」的递减 deque，队首始终是当前窗口最大值的下标
时间 O(n)，空间 O(k)
易错点/误区：
1. 队列必须存「下标」而非「值」，否则无法判断元素是否滑出窗口过期
（同值可能重复出现，也可能值相等但一个在窗内一个在窗外）
2. 过期边界是 queue[0] < i - k + 1，不是 i - k
窗口 [i-k+1, i] 共 k 个元素，i - k 就是左边界的前一格，是 off-by-one 高频坑
3. 必须用 collections.deque，不能用 list：
list.pop(0) 是 O(n)，整体退化成 O(n²)；deque.popleft() 是 O(1)
4. 操作顺序不能乱：先清队尾 → 入队 → 清过期队首 → 输出
如果入队在清队尾之前，你刚加进去的元素会被自己的 while 循环误伤
5. 只有当 i > k - 1 时才输出，也就是窗口第一次「装满」k 个元素之后
装不满就输出会得到非窗口的脏数据`],pitfalls:[`需二刷：单调队列核心题型，与 84/739 单调栈是镜像概念
思路：维护一个存「下标」的递减 deque，队首始终是当前窗口最大值的下标
时间 O(n)，空间 O(k)
易错点/误区：
1. 队列必须存「下标」而非「值」，否则无法判断元素是否滑出窗口过期
（同值可能重复出现，也可能值相等但一个在窗内一个在窗外）
2. 过期边界是 queue[0] < i - k + 1，不是 i - k
窗口 [i-k+1, i] 共 k 个元素，i - k 就是左边界的前一格，是 off-by-one 高频坑
3. 必须用 collections.deque，不能用 list：
list.pop(0) 是 O(n)，整体退化成 O(n²)；deque.popleft() 是 O(1)
4. 操作顺序不能乱：先清队尾 → 入队 → 清过期队首 → 输出
如果入队在清队尾之前，你刚加进去的元素会被自己的 while 循环误伤
5. 只有当 i > k - 1 时才输出，也就是窗口第一次「装满」k 个元素之后
装不满就输出会得到非窗口的脏数据`,`3. 过期清理：队首下标滑出窗口左边界则弹出
因为入队时下标天然递增，过期元素只会出现在队首，不用检查后面`],recallBlanks:[],solutionGuide:{idea:`需二刷：单调队列核心题型，与 84/739 单调栈是镜像概念
思路：维护一个存「下标」的递减 deque，队首始终是当前窗口最大值的下标
时间 O(n)，空间 O(k)
易错点/误区：
1. 队列必须存「下标」而非「值」，否则无法判断元素是否滑出窗口过期
（同值可能重复出现，也可能值相等但一个在窗内一个在窗外）
2. 过期边界是 queue[0] < i - k + 1，不是 i - k
窗口 [i-k+1, i] 共 k 个元素，i - k 就是左边界的前一格，是 off-by-one 高频坑
3. 必须用 collections.deque，不能用 list：
list.pop(0) 是 O(n)，整体退化成 O(n²)；deque.popleft() 是 O(1)
4. 操作顺序不能乱：先清队尾 → 入队 → 清过期队首 → 输出
如果入队在清队尾之前，你刚加进去的元素会被自己的 while 循环误伤
5. 只有当 i > k - 1 时才输出，也就是窗口第一次「装满」k 个元素之后
装不满就输出会得到非窗口的脏数据`,interviewSteps:["先说明核心考点：（同上，已在上方列出）。","核心是频次表和窗口有效性，面试中要把 need/window、valid 或 missing 变量说清楚。","关键词：子串 / （同上，已在上方列出） / 队列 / 数组。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：单调队列核心题型，与 84/739 单调栈是镜像概念
思路：维护一个存「下标」的递减 deque，队首始终是当前窗口最大值的下标
时间 O(n)，空间 O(k)
易错点/误区：
1. 队列必须存「下标」而非「值」，否则无法判断元素是否滑出窗口过期
（同值可能重复出现，也可能值相等但一个在窗内一个在窗外）
2. 过期边界是 queue[0] < i - k + 1，不是 i - k
窗口 [i-k+1, i] 共 k 个元素，i - k 就是左边界的前一格，是 off-by-one 高频坑
3. 必须用 collections.deque，不能用 list：
list.pop(0) 是 O(n)，整体退化成 O(n²)；deque.popleft() 是 O(1)
4. 操作顺序不能乱：先清队尾 → 入队 → 清过期队首 → 输出
如果入队在清队尾之前，你刚加进去的元素会被自己的 while 循环误伤
5. 只有当 i > k - 1 时才输出，也就是窗口第一次「装满」k 个元素之后
装不满就输出会得到非窗口的脏数据`},ask:"给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。",constraints:["- 1 <= nums.length <= 10^5","- -10^4 <= nums[i] <= 10^4","- 1 <= k <= nums.length"]},{id:"560",slug:"560-和为-k-的子数组",title:"和为 K 的子数组",titleEn:"Subarray Sum Equals K",category:"子串",difficulty:"中等",topic:"前缀和 + 哈希表",completed:!0,leetcodeSlug:"subarray-sum-equals-k",leetcodeUrl:"https://leetcode.cn/problems/subarray-sum-equals-k/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E5%92%8C%E4%B8%BA%20K%20%E7%9A%84%E5%AD%90%E6%95%B0%E7%BB%84",acceptanceRate:46.9,solutionCount:3783,companyTagCount:100,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["子串","前缀和 + 哈希表","数组","哈希表","前缀和"],sourcePath:"hot100/04_子串/560.和为-k-的子数组.py",lastUpdated:"2026-04-02",lastUpdatedAt:"2026-04-02T07:06:05.956Z",interviewPattern:"核心是频次表和窗口有效性，面试中要把 need/window、valid 或 missing 变量说清楚。",thoughts:[`需二刷：前缀和 + 哈希表
思路：prefix[j] - prefix[i-1]  k → 找之前有多少个前缀和等于 prefix_sum - k
时间 O(n)，空间 O(n)
易错点/误区：
1. 哈希表必须初始化 {0: 1}，代表空前缀（前缀和为0出现1次），
否则会漏掉从下标0开始、和刚好等于k的子数组
2. 哈希表存的是「前缀和出现的次数」，不是 count
3. 必须先查找再记录（顺序不能反），否则当 k0 时会把自己算进去`],pitfalls:[`需二刷：前缀和 + 哈希表
思路：prefix[j] - prefix[i-1]  k → 找之前有多少个前缀和等于 prefix_sum - k
时间 O(n)，空间 O(n)
易错点/误区：
1. 哈希表必须初始化 {0: 1}，代表空前缀（前缀和为0出现1次），
否则会漏掉从下标0开始、和刚好等于k的子数组
2. 哈希表存的是「前缀和出现的次数」，不是 count
3. 必须先查找再记录（顺序不能反），否则当 k0 时会把自己算进去`],recallBlanks:[],solutionGuide:{idea:`需二刷：前缀和 + 哈希表
思路：prefix[j] - prefix[i-1]  k → 找之前有多少个前缀和等于 prefix_sum - k
时间 O(n)，空间 O(n)
易错点/误区：
1. 哈希表必须初始化 {0: 1}，代表空前缀（前缀和为0出现1次），
否则会漏掉从下标0开始、和刚好等于k的子数组
2. 哈希表存的是「前缀和出现的次数」，不是 count
3. 必须先查找再记录（顺序不能反），否则当 k0 时会把自己算进去`,interviewSteps:["先说明核心考点：前缀和 + 哈希表。","核心是频次表和窗口有效性，面试中要把 need/window、valid 或 missing 变量说清楚。","关键词：子串 / 前缀和 + 哈希表 / 数组 / 哈希表。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：前缀和 + 哈希表
思路：prefix[j] - prefix[i-1]  k → 找之前有多少个前缀和等于 prefix_sum - k
时间 O(n)，空间 O(n)
易错点/误区：
1. 哈希表必须初始化 {0: 1}，代表空前缀（前缀和为0出现1次），
否则会漏掉从下标0开始、和刚好等于k的子数组
2. 哈希表存的是「前缀和出现的次数」，不是 count
3. 必须先查找再记录（顺序不能反），否则当 k0 时会把自己算进去`},ask:"给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。",constraints:["- 1 <= nums.length <= 2 * 10^4","- -1000 <= nums[i] <= 1000","- -10^7 <= k <= 10^7"]},{id:"76",slug:"76-最小覆盖子串",title:"最小覆盖子串",titleEn:"Minimum Window Substring",category:"子串",difficulty:"困难",topic:"滑动窗口 + 频次统计",completed:!0,leetcodeSlug:"minimum-window-substring",leetcodeUrl:"https://leetcode.cn/problems/minimum-window-substring/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%9C%80%E5%B0%8F%E8%A6%86%E7%9B%96%E5%AD%90%E4%B8%B2",acceptanceRate:49.6,solutionCount:5704,companyTagCount:89,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["子串","滑动窗口 + 频次统计","哈希表","字符串","滑动窗口"],sourcePath:"hot100/04_子串/76.最小覆盖子串.py",lastUpdated:"2026-06-01",lastUpdatedAt:"2026-06-01T12:40:05.533Z",interviewPattern:"核心是频次表和窗口有效性，面试中要把 need/window、valid 或 missing 变量说清楚。",thoughts:[`需二刷：[滑动窗口经典套路，寻找最小覆盖子串]
思路：用 right 指针不断向右移动扩大窗口，直到窗口包含了 t 中所有字符。
然后用 left 指针向右移动缩小窗口，尽力找到更短的符合条件的子串。
时间 O(N)，空间 O(C) (C为字符集大小)
易错点/误区：
1. 找不到符合条件的子串时，题目要求返回空字符串 ""，而不是包含空格的 " "。
2. 窗口长度计算：此时 right 已经 + 1，所以窗口长度就是 right - left，不需要加一。`],pitfalls:[`需二刷：[滑动窗口经典套路，寻找最小覆盖子串]
思路：用 right 指针不断向右移动扩大窗口，直到窗口包含了 t 中所有字符。
然后用 left 指针向右移动缩小窗口，尽力找到更短的符合条件的子串。
时间 O(N)，空间 O(C) (C为字符集大小)
易错点/误区：
1. 找不到符合条件的子串时，题目要求返回空字符串 ""，而不是包含空格的 " "。
2. 窗口长度计算：此时 right 已经 + 1，所以窗口长度就是 right - left，不需要加一。`,'注意这里的返回值是 "" 而不是 " "'],recallBlanks:[],solutionGuide:{idea:`需二刷：[滑动窗口经典套路，寻找最小覆盖子串]
思路：用 right 指针不断向右移动扩大窗口，直到窗口包含了 t 中所有字符。
然后用 left 指针向右移动缩小窗口，尽力找到更短的符合条件的子串。
时间 O(N)，空间 O(C) (C为字符集大小)
易错点/误区：
1. 找不到符合条件的子串时，题目要求返回空字符串 ""，而不是包含空格的 " "。
2. 窗口长度计算：此时 right 已经 + 1，所以窗口长度就是 right - left，不需要加一。`,interviewSteps:["先说明核心考点：滑动窗口 + 频次统计。","核心是频次表和窗口有效性，面试中要把 need/window、valid 或 missing 变量说清楚。","关键词：子串 / 滑动窗口 + 频次统计 / 哈希表 / 字符串。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：[滑动窗口经典套路，寻找最小覆盖子串]
思路：用 right 指针不断向右移动扩大窗口，直到窗口包含了 t 中所有字符。
然后用 left 指针向右移动缩小窗口，尽力找到更短的符合条件的子串。
时间 O(N)，空间 O(C) (C为字符集大小)
易错点/误区：
1. 找不到符合条件的子串时，题目要求返回空字符串 ""，而不是包含空格的 " "。
2. 窗口长度计算：此时 right 已经 + 1，所以窗口长度就是 right - left，不需要加一。`},ask:'给定两个字符串 s 和 t，长度分别是 m 和 n，返回 s 中的 最短窗口 子串，使得该子串包含 t 中的每一个字符（包括重复字符）。如果没有这样的子串，返回空字符串 ""。',constraints:["- 1 <= m, n <= 10^5"]},{id:"53",slug:"53-最大子数组和",title:"最大子数组和",titleEn:"Maximum Subarray",category:"动态规划",difficulty:"中等",topic:"Kadane",completed:!0,leetcodeSlug:"maximum-subarray",leetcodeUrl:"https://leetcode.cn/problems/maximum-subarray/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%9C%80%E5%A4%A7%E5%AD%90%E6%95%B0%E7%BB%84%E5%92%8C",acceptanceRate:56.9,solutionCount:10155,companyTagCount:209,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["动态规划","Kadane","数组","分治"],sourcePath:"hot100/05_普通数组/53.最大子数组和.py",lastUpdated:"2026-03-20",lastUpdatedAt:"2026-03-20T09:22:34.855Z",interviewPattern:"先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",thoughts:[`需二刷：Kadane 算法（动态规划思想）
思路：遍历数组，维护"以当前元素结尾的最大子数组和"(current_sum)
每一步做决策：是把当前元素加入之前的子数组，还是从当前元素重新开始
如果之前的累积和是负数 → 拖后腿 → 从当前元素重新开始
同时用 max_sum 追踪全局最大值
时间 O(n)，空间 O(1)
易错点/误区：
1. max_sum 不能初始化为 0，否则全负数数组（如 [-3,-2,-1]）会返回 0
→ 应该初始化为 nums[0] 或 float('-inf')
2. max_sum  max(current_sum, num) 是错的！current_sum > num 恒成立
这样等于每次都覆盖，没有在追踪"全局"最大值
→ 应该是 max_sum  max(max_sum, current_sum)`,"核心决策：加入之前的子数组 vs 从自己重新开始"],pitfalls:[`需二刷：Kadane 算法（动态规划思想）
思路：遍历数组，维护"以当前元素结尾的最大子数组和"(current_sum)
每一步做决策：是把当前元素加入之前的子数组，还是从当前元素重新开始
如果之前的累积和是负数 → 拖后腿 → 从当前元素重新开始
同时用 max_sum 追踪全局最大值
时间 O(n)，空间 O(1)
易错点/误区：
1. max_sum 不能初始化为 0，否则全负数数组（如 [-3,-2,-1]）会返回 0
→ 应该初始化为 nums[0] 或 float('-inf')
2. max_sum  max(current_sum, num) 是错的！current_sum > num 恒成立
这样等于每次都覆盖，没有在追踪"全局"最大值
→ 应该是 max_sum  max(max_sum, current_sum)`],recallBlanks:[],solutionGuide:{idea:`需二刷：Kadane 算法（动态规划思想）
思路：遍历数组，维护"以当前元素结尾的最大子数组和"(current_sum)
每一步做决策：是把当前元素加入之前的子数组，还是从当前元素重新开始
如果之前的累积和是负数 → 拖后腿 → 从当前元素重新开始
同时用 max_sum 追踪全局最大值
时间 O(n)，空间 O(1)
易错点/误区：
1. max_sum 不能初始化为 0，否则全负数数组（如 [-3,-2,-1]）会返回 0
→ 应该初始化为 nums[0] 或 float('-inf')
2. max_sum  max(current_sum, num) 是错的！current_sum > num 恒成立
这样等于每次都覆盖，没有在追踪"全局"最大值
→ 应该是 max_sum  max(max_sum, current_sum)`,interviewSteps:["先说明核心考点：Kadane。","先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。","关键词：动态规划 / Kadane / 数组 / 分治。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：Kadane 算法（动态规划思想）
思路：遍历数组，维护"以当前元素结尾的最大子数组和"(current_sum)
每一步做决策：是把当前元素加入之前的子数组，还是从当前元素重新开始
如果之前的累积和是负数 → 拖后腿 → 从当前元素重新开始
同时用 max_sum 追踪全局最大值
时间 O(n)，空间 O(1)
易错点/误区：
1. max_sum 不能初始化为 0，否则全负数数组（如 [-3,-2,-1]）会返回 0
→ 应该初始化为 nums[0] 或 float('-inf')
2. max_sum  max(current_sum, num) 是错的！current_sum > num 恒成立
这样等于每次都覆盖，没有在追踪"全局"最大值
→ 应该是 max_sum  max(max_sum, current_sum)`},ask:"给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。",constraints:["- 1 <= nums.length <= 10^5","- -10^4 <= nums[i] <= 10^4"]},{id:"56",slug:"56-合并区间",title:"合并区间",titleEn:"Merge Intervals",category:"普通数组",difficulty:"中等",topic:"排序 + 合并",completed:!0,leetcodeSlug:"merge-intervals",leetcodeUrl:"https://leetcode.cn/problems/merge-intervals/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E5%90%88%E5%B9%B6%E5%8C%BA%E9%97%B4",acceptanceRate:54.1,solutionCount:6834,companyTagCount:176,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["普通数组","排序 + 合并","数组","排序","快速排序"],sourcePath:"hot100/05_普通数组/56.合并区间.py",lastUpdated:"2026-03-23",lastUpdatedAt:"2026-03-23T12:59:37.793Z",interviewPattern:"优先找一次遍历、前后缀、原地标记或排序后的结构性，避免暴力枚举。",thoughts:[`需二刷：排序 + 贪心合并
思路：先按区间起点排序，然后遍历每个区间，
和 result 最后一个区间比较，有重叠就合并（更新 end），否则直接加入
时间 O(nlogn)，空间 O(n)
易错点/误区：
1. sort() 要加括号！.sort 只是引用方法，不会执行排序
2. 合并时 end 要取 max，不能直接赋值（如 [1,6] 和 [2,4]，end 应该是 6 不是 4）
3. 判断重叠用 <（相等也算重叠，如 [1,3] 和 [3,5]）
4. 用 result[-1] 获取最后一个区间，不能用 result[i-1]（result 和 intervals 长度不同）
5. if/elif/else 三个分支只走一个，不能用连续的 if 导致重复处理`],pitfalls:[`需二刷：排序 + 贪心合并
思路：先按区间起点排序，然后遍历每个区间，
和 result 最后一个区间比较，有重叠就合并（更新 end），否则直接加入
时间 O(nlogn)，空间 O(n)
易错点/误区：
1. sort() 要加括号！.sort 只是引用方法，不会执行排序
2. 合并时 end 要取 max，不能直接赋值（如 [1,6] 和 [2,4]，end 应该是 6 不是 4）
3. 判断重叠用 <（相等也算重叠，如 [1,3] 和 [3,5]）
4. 用 result[-1] 获取最后一个区间，不能用 result[i-1]（result 和 intervals 长度不同）
5. if/elif/else 三个分支只走一个，不能用连续的 if 导致重复处理`],recallBlanks:[],solutionGuide:{idea:`需二刷：排序 + 贪心合并
思路：先按区间起点排序，然后遍历每个区间，
和 result 最后一个区间比较，有重叠就合并（更新 end），否则直接加入
时间 O(nlogn)，空间 O(n)
易错点/误区：
1. sort() 要加括号！.sort 只是引用方法，不会执行排序
2. 合并时 end 要取 max，不能直接赋值（如 [1,6] 和 [2,4]，end 应该是 6 不是 4）
3. 判断重叠用 <（相等也算重叠，如 [1,3] 和 [3,5]）
4. 用 result[-1] 获取最后一个区间，不能用 result[i-1]（result 和 intervals 长度不同）
5. if/elif/else 三个分支只走一个，不能用连续的 if 导致重复处理`,interviewSteps:["先说明核心考点：排序 + 合并。","优先找一次遍历、前后缀、原地标记或排序后的结构性，避免暴力枚举。","关键词：普通数组 / 排序 + 合并 / 数组 / 排序。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：排序 + 贪心合并
思路：先按区间起点排序，然后遍历每个区间，
和 result 最后一个区间比较，有重叠就合并（更新 end），否则直接加入
时间 O(nlogn)，空间 O(n)
易错点/误区：
1. sort() 要加括号！.sort 只是引用方法，不会执行排序
2. 合并时 end 要取 max，不能直接赋值（如 [1,6] 和 [2,4]，end 应该是 6 不是 4）
3. 判断重叠用 <（相等也算重叠，如 [1,3] 和 [3,5]）
4. 用 result[-1] 获取最后一个区间，不能用 result[i-1]（result 和 intervals 长度不同）
5. if/elif/else 三个分支只走一个，不能用连续的 if 导致重复处理`},ask:"以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [start_i, end_i] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。",constraints:["- 1 <= intervals.length <= 10^4","- 0 <= start_i <= end_i <= 10^4"]},{id:"238",slug:"238-除自身以外数组的乘积",title:"除了自身以外数组的乘积",titleEn:"Product of Array Except Self",category:"普通数组",difficulty:"中等",topic:"前缀积 / 后缀积",completed:!0,leetcodeSlug:"product-of-array-except-self",leetcodeUrl:"https://leetcode.cn/problems/product-of-array-except-self/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E9%99%A4%E4%BA%86%E8%87%AA%E8%BA%AB%E4%BB%A5%E5%A4%96%E6%95%B0%E7%BB%84%E7%9A%84%E4%B9%98%E7%A7%AF",acceptanceRate:77.7,solutionCount:3924,companyTagCount:95,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["普通数组","前缀积 / 后缀积","数组","前缀和"],sourcePath:"hot100/05_普通数组/238.除了自身以外数组的乘积.py",lastUpdated:"2026-03-27",lastUpdatedAt:"2026-03-27T08:13:52.777Z",interviewPattern:"优先找一次遍历、前后缀、原地标记或排序后的结构性，避免暴力枚举。",thoughts:[`需二刷：前缀积 × 后缀积
思路：answer[i]  i左边所有数的乘积 × i右边所有数的乘积
时间 O(n)，空间 O(n)
易错点/误区：
1. left[0] 和 right[n-1] 的初始值是 1（不是 0），因为"没有元素"的乘积是 1
2. right 数组要从右往左递推，range(n-2, -1, -1)，注意终点写 -1 才能包含下标 0
3. 递推公式：left[i]  left[i-1] * nums[i-1]（乘的是前一个元素，不是当前元素）`,`---------- 面试 follow-up：O(1) 额外空间优化版 ----------
思路：复用 answer 数组先存前缀积，再用一个变量累积后缀积，边算边乘
时间 O(n)，空间 O(1)（不算返回数组）`],pitfalls:[`需二刷：前缀积 × 后缀积
思路：answer[i]  i左边所有数的乘积 × i右边所有数的乘积
时间 O(n)，空间 O(n)
易错点/误区：
1. left[0] 和 right[n-1] 的初始值是 1（不是 0），因为"没有元素"的乘积是 1
2. right 数组要从右往左递推，range(n-2, -1, -1)，注意终点写 -1 才能包含下标 0
3. 递推公式：left[i]  left[i-1] * nums[i-1]（乘的是前一个元素，不是当前元素）`],recallBlanks:[],solutionGuide:{idea:`需二刷：前缀积 × 后缀积
思路：answer[i]  i左边所有数的乘积 × i右边所有数的乘积
时间 O(n)，空间 O(n)
易错点/误区：
1. left[0] 和 right[n-1] 的初始值是 1（不是 0），因为"没有元素"的乘积是 1
2. right 数组要从右往左递推，range(n-2, -1, -1)，注意终点写 -1 才能包含下标 0
3. 递推公式：left[i]  left[i-1] * nums[i-1]（乘的是前一个元素，不是当前元素）`,interviewSteps:["先说明核心考点：前缀积 / 后缀积。","优先找一次遍历、前后缀、原地标记或排序后的结构性，避免暴力枚举。","关键词：普通数组 / 前缀积 / 后缀积 / 数组 / 前缀和。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：前缀积 × 后缀积
思路：answer[i]  i左边所有数的乘积 × i右边所有数的乘积
时间 O(n)，空间 O(n)
易错点/误区：
1. left[0] 和 right[n-1] 的初始值是 1（不是 0），因为"没有元素"的乘积是 1
2. right 数组要从右往左递推，range(n-2, -1, -1)，注意终点写 -1 才能包含下标 0
3. 递推公式：left[i]  left[i-1] * nums[i-1]（乘的是前一个元素，不是当前元素）`},ask:"给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除了 nums[i] 之外其余各元素的乘积 。",constraints:["- 2 <= nums.length <= 10^5","- -30 <= nums[i] <= 30"]},{id:"41",slug:"41-缺失的第一个正数",title:"缺失的第一个正数",titleEn:"First Missing Positive",category:"普通数组",difficulty:"困难",topic:"原地哈希",completed:!0,leetcodeSlug:"first-missing-positive",leetcodeUrl:"https://leetcode.cn/problems/first-missing-positive/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E7%BC%BA%E5%A4%B1%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%AD%A3%E6%95%B0",acceptanceRate:49.8,solutionCount:3881,companyTagCount:110,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["普通数组","原地哈希","数组","哈希表"],sourcePath:"hot100/05_普通数组/41.缺失的第一个正数.py",lastUpdated:"2026-04-02",lastUpdatedAt:"2026-04-02T09:02:39.200Z",interviewPattern:"优先找一次遍历、前后缀、原地标记或排序后的结构性，避免暴力枚举。",thoughts:[`需二刷：原地哈希 / 原地循环排序（Cyclic Sort）
思路：把每个数 x 放到下标 x-1 的位置上，然后扫一遍找第一个 nums[i] ! i+1 的位置
时间 O(n)，空间 O(1)
🎯 面试推荐：原地循环排序（本解法）
- 面试官考察重点：能否在 O(1) 空间内解决"找缺失"问题
- 核心思想：数组本身当哈希表，下标 i 存放值 i+1
- 适用题型：找缺失/重复的正整数（41, 268, 287, 442, 448）
易错点/误区：
1. 交换时赋值顺序：必须写 nums[nums[i]-1], nums[i]  nums[i], nums[nums[i]-1]
而不是 nums[i], nums[nums[i]-1]  nums[nums[i]-1], nums[i]
→ Python 先算右边再赋值左边，左边从左到右赋值。如果先写 nums[i]  ...
会导致 nums[i] 被改变后，nums[nums[i]-1] 就指向错误位置了
2. while 循环条件中 nums[nums[i]-1] ! nums[i] 是防止死循环
→ 如果目标位置已经有正确的值（说明有重复），必须停下来，否则无限交换
3. 边界条件 1 < nums[i] < n：只处理 [1, n] 范围内的数
→ 负数、0、大于 n 的数不可能是答案（答案最大就是 n+1）`],pitfalls:[`需二刷：原地哈希 / 原地循环排序（Cyclic Sort）
思路：把每个数 x 放到下标 x-1 的位置上，然后扫一遍找第一个 nums[i] ! i+1 的位置
时间 O(n)，空间 O(1)
🎯 面试推荐：原地循环排序（本解法）
- 面试官考察重点：能否在 O(1) 空间内解决"找缺失"问题
- 核心思想：数组本身当哈希表，下标 i 存放值 i+1
- 适用题型：找缺失/重复的正整数（41, 268, 287, 442, 448）
易错点/误区：
1. 交换时赋值顺序：必须写 nums[nums[i]-1], nums[i]  nums[i], nums[nums[i]-1]
而不是 nums[i], nums[nums[i]-1]  nums[nums[i]-1], nums[i]
→ Python 先算右边再赋值左边，左边从左到右赋值。如果先写 nums[i]  ...
会导致 nums[i] 被改变后，nums[nums[i]-1] 就指向错误位置了
2. while 循环条件中 nums[nums[i]-1] ! nums[i] 是防止死循环
→ 如果目标位置已经有正确的值（说明有重复），必须停下来，否则无限交换
3. 边界条件 1 < nums[i] < n：只处理 [1, n] 范围内的数
→ 负数、0、大于 n 的数不可能是答案（答案最大就是 n+1）`],recallBlanks:[],solutionGuide:{idea:`需二刷：原地哈希 / 原地循环排序（Cyclic Sort）
思路：把每个数 x 放到下标 x-1 的位置上，然后扫一遍找第一个 nums[i] ! i+1 的位置
时间 O(n)，空间 O(1)
🎯 面试推荐：原地循环排序（本解法）
- 面试官考察重点：能否在 O(1) 空间内解决"找缺失"问题
- 核心思想：数组本身当哈希表，下标 i 存放值 i+1
- 适用题型：找缺失/重复的正整数（41, 268, 287, 442, 448）
易错点/误区：
1. 交换时赋值顺序：必须写 nums[nums[i]-1], nums[i]  nums[i], nums[nums[i]-1]
而不是 nums[i], nums[nums[i]-1]  nums[nums[i]-1], nums[i]
→ Python 先算右边再赋值左边，左边从左到右赋值。如果先写 nums[i]  ...
会导致 nums[i] 被改变后，nums[nums[i]-1] 就指向错误位置了
2. while 循环条件中 nums[nums[i]-1] ! nums[i] 是防止死循环
→ 如果目标位置已经有正确的值（说明有重复），必须停下来，否则无限交换
3. 边界条件 1 < nums[i] < n：只处理 [1, n] 范围内的数
→ 负数、0、大于 n 的数不可能是答案（答案最大就是 n+1）`,interviewSteps:["先说明核心考点：原地哈希。","优先找一次遍历、前后缀、原地标记或排序后的结构性，避免暴力枚举。","关键词：普通数组 / 原地哈希 / 数组 / 哈希表。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：原地哈希 / 原地循环排序（Cyclic Sort）
思路：把每个数 x 放到下标 x-1 的位置上，然后扫一遍找第一个 nums[i] ! i+1 的位置
时间 O(n)，空间 O(1)
🎯 面试推荐：原地循环排序（本解法）
- 面试官考察重点：能否在 O(1) 空间内解决"找缺失"问题
- 核心思想：数组本身当哈希表，下标 i 存放值 i+1
- 适用题型：找缺失/重复的正整数（41, 268, 287, 442, 448）
易错点/误区：
1. 交换时赋值顺序：必须写 nums[nums[i]-1], nums[i]  nums[i], nums[nums[i]-1]
而不是 nums[i], nums[nums[i]-1]  nums[nums[i]-1], nums[i]
→ Python 先算右边再赋值左边，左边从左到右赋值。如果先写 nums[i]  ...
会导致 nums[i] 被改变后，nums[nums[i]-1] 就指向错误位置了
2. while 循环条件中 nums[nums[i]-1] ! nums[i] 是防止死循环
→ 如果目标位置已经有正确的值（说明有重复），必须停下来，否则无限交换
3. 边界条件 1 < nums[i] < n：只处理 [1, n] 范围内的数
→ 负数、0、大于 n 的数不可能是答案（答案最大就是 n+1）`},ask:"给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。",constraints:["- 1 <= nums.length <= 10^5","- -2^31 <= nums[i] <= 2^31 - 1"]},{id:"189",slug:"189-轮转数组",title:"轮转数组",titleEn:"Rotate Array",category:"普通数组",difficulty:"中等",topic:"三次翻转",completed:!0,leetcodeSlug:"rotate-array",leetcodeUrl:"https://leetcode.cn/problems/rotate-array/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E8%BD%AE%E8%BD%AC%E6%95%B0%E7%BB%84",acceptanceRate:48.6,solutionCount:6333,companyTagCount:92,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["普通数组","三次翻转","数组","数学","双指针"],sourcePath:"hot100/05_普通数组/189.轮转数组.py",lastUpdated:"2026-08-21",lastUpdatedAt:"2026-08-21T14:03:05.262Z",interviewPattern:"优先找一次遍历、前后缀、原地标记或排序后的结构性，避免暴力枚举。",thoughts:[`方法 1：暴力法
思路：每次向右轮转 1 个位置（最后一个元素搬到最前），重复 k 次
时间 O(n × k)，空间 O(1)
易错点/误区：
1. 元素移动必须「从后往前」，从前往后会覆盖尚未读取的数据（a→1号位后，b就读不到了）
2. 每次轮转前都要重新保存 nums[-1]，如果 tmp 只在循环外保存一次，第 2 轮起全错
3. k 必须先对 n 取模：轮转 n 次等于没转，k1e5 n7 时实际只转 3 次
4. if k0 的判断完全多余：k%n0 时 range(0) 是空循环，一次都不会跑
5. 暴力法在 LeetCode 会 TLE（n1e5, k5e4 时操作≈5e9 次），仅作理解基础用`,`方法 2：额外数组法
思路：直接用反推公式「新椅子 j ← 原椅子 (j-k)%n」一次性搬家，不用挪来挪去
时间 O(n)，空间 O(n)
易错点/误区：
1. 反推公式别搞反：是 nums[(j - k) % n]，不是 nums[(j + k) % n]
正推是「人找椅子 i→(i+k)%n」，反推是「椅子找人 j←(j-k)%n」，方向相反！
2. 必须用 nums[:]  new_nums，不能 nums  new_nums
后者只是改了函数局部变量的指向，外面的原列表根本没变（Python 无引用传递）
3. Python 中 (-3) % 7  4，自动处理负数余数，不用手动 (j - k + n) % n
但 C++/Java 中负数取模会报错，面试写别的语言要手动加 n`,`方法 3：三次翻转（O(1) 原地最优解  已通过）
需二刷：O(1) 空间轮转数组的标准解法，思路极其反直觉
本质：向右轮转 k 个位置  把数组切成「A(n-k个) + B(k个)」两块，变成 B + A
三次翻转利用了「翻转 + 再翻转  还原」的性质，原地交换块顺序：
① 全翻  → 两块同时倒序 + 块顺序交换
② 翻B块 → B块恢复正序
③ 翻A块 → A块恢复正序
例：[1,2,3,4,5,6,7] k3 → A[1,2,3,4] B[5,6,7]
① 全翻   → [7,6,5, 4,3,2,1] （B倒序在前，A倒序在后）
② 翻前3个 → [5,6,7, 4,3,2,1] （B恢复正序 ）
③ 翻后4个 → [5,6,7, 1,2,3,4] （A恢复正序 ，得到 B+A）
时间 O(n)：总共交换 n/2 + k/2 + (n-k)/2  n 次，线性
空间 O(1)：只有双指针变量，不开任何额外数组
易错点/误区（4 个高频坑）：
1. 代码缩进不能乱：reverse 函数定义完后，n/k/三次调用必须和 def reverse 平级
缩进多一层会导致三次调用写在 reverse 内部，触发死循环
2. 三次调用右边界全部是闭区间：全翻 n-1、前k个 k-1、不能多写1
reverse(nums, 0, n) 会越界 nums[n]，off-by-one 90% 的人踩过
3. 传原数组 + 边界控制，绝对不能传切片 nums[0:k]
Python 切片会创建副本，翻转副本白做了，原 nums 纹丝不动
4. 后 n-k 个的左边界是 k 不是 k+1
k3 时后 4 个从下标 3 开始不是 4，漏掉下标 k 会导致那个元素没翻`,"嵌套辅助函数：翻转 nums[left..right] 闭区间，双指针交换 O(1) 空间"],pitfalls:[`方法 1：暴力法
思路：每次向右轮转 1 个位置（最后一个元素搬到最前），重复 k 次
时间 O(n × k)，空间 O(1)
易错点/误区：
1. 元素移动必须「从后往前」，从前往后会覆盖尚未读取的数据（a→1号位后，b就读不到了）
2. 每次轮转前都要重新保存 nums[-1]，如果 tmp 只在循环外保存一次，第 2 轮起全错
3. k 必须先对 n 取模：轮转 n 次等于没转，k1e5 n7 时实际只转 3 次
4. if k0 的判断完全多余：k%n0 时 range(0) 是空循环，一次都不会跑
5. 暴力法在 LeetCode 会 TLE（n1e5, k5e4 时操作≈5e9 次），仅作理解基础用`,`方法 2：额外数组法
思路：直接用反推公式「新椅子 j ← 原椅子 (j-k)%n」一次性搬家，不用挪来挪去
时间 O(n)，空间 O(n)
易错点/误区：
1. 反推公式别搞反：是 nums[(j - k) % n]，不是 nums[(j + k) % n]
正推是「人找椅子 i→(i+k)%n」，反推是「椅子找人 j←(j-k)%n」，方向相反！
2. 必须用 nums[:]  new_nums，不能 nums  new_nums
后者只是改了函数局部变量的指向，外面的原列表根本没变（Python 无引用传递）
3. Python 中 (-3) % 7  4，自动处理负数余数，不用手动 (j - k + n) % n
但 C++/Java 中负数取模会报错，面试写别的语言要手动加 n`,`class Solution:
def rotate(self, nums: list[int], k: int) -> None:
"""
Do not return anything, modify nums in-place instead.
"""
n  len(nums)
k  k % n                             # 消除多余轮转
new_nums  [0] * n                    # 开个新柜子放结果
for j in range(n):
new_nums[j]  nums[(j - k) % n]   # 椅子 j 去找 (j-k)%n 号椅子上的人
nums[:]  new_nums                    # 就地替换原列表内容（不能少了 [:]）`,`方法 3：三次翻转（O(1) 原地最优解  已通过）
需二刷：O(1) 空间轮转数组的标准解法，思路极其反直觉
本质：向右轮转 k 个位置  把数组切成「A(n-k个) + B(k个)」两块，变成 B + A
三次翻转利用了「翻转 + 再翻转  还原」的性质，原地交换块顺序：
① 全翻  → 两块同时倒序 + 块顺序交换
② 翻B块 → B块恢复正序
③ 翻A块 → A块恢复正序
例：[1,2,3,4,5,6,7] k3 → A[1,2,3,4] B[5,6,7]
① 全翻   → [7,6,5, 4,3,2,1] （B倒序在前，A倒序在后）
② 翻前3个 → [5,6,7, 4,3,2,1] （B恢复正序 ）
③ 翻后4个 → [5,6,7, 1,2,3,4] （A恢复正序 ，得到 B+A）
时间 O(n)：总共交换 n/2 + k/2 + (n-k)/2  n 次，线性
空间 O(1)：只有双指针变量，不开任何额外数组
易错点/误区（4 个高频坑）：
1. 代码缩进不能乱：reverse 函数定义完后，n/k/三次调用必须和 def reverse 平级
缩进多一层会导致三次调用写在 reverse 内部，触发死循环
2. 三次调用右边界全部是闭区间：全翻 n-1、前k个 k-1、不能多写1
reverse(nums, 0, n) 会越界 nums[n]，off-by-one 90% 的人踩过
3. 传原数组 + 边界控制，绝对不能传切片 nums[0:k]
Python 切片会创建副本，翻转副本白做了，原 nums 纹丝不动
4. 后 n-k 个的左边界是 k 不是 k+1
k3 时后 4 个从下标 3 开始不是 4，漏掉下标 k 会导致那个元素没翻`],recallBlanks:[{prompt:"嵌套辅助函数：翻转 nums[left..right] 闭区间，＿＿＿交换 O(1) 空间",answer:"双指针"}],solutionGuide:{idea:`方法 1：暴力法
思路：每次向右轮转 1 个位置（最后一个元素搬到最前），重复 k 次
时间 O(n × k)，空间 O(1)
易错点/误区：
1. 元素移动必须「从后往前」，从前往后会覆盖尚未读取的数据（a→1号位后，b就读不到了）
2. 每次轮转前都要重新保存 nums[-1]，如果 tmp 只在循环外保存一次，第 2 轮起全错
3. k 必须先对 n 取模：轮转 n 次等于没转，k1e5 n7 时实际只转 3 次
4. if k0 的判断完全多余：k%n0 时 range(0) 是空循环，一次都不会跑
5. 暴力法在 LeetCode 会 TLE（n1e5, k5e4 时操作≈5e9 次），仅作理解基础用`,interviewSteps:["先说明核心考点：三次翻转。","优先找一次遍历、前后缀、原地标记或排序后的结构性，避免暴力枚举。","关键词：普通数组 / 三次翻转 / 数组 / 数学。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`方法 1：暴力法
思路：每次向右轮转 1 个位置（最后一个元素搬到最前），重复 k 次
时间 O(n × k)，空间 O(1)
易错点/误区：
1. 元素移动必须「从后往前」，从前往后会覆盖尚未读取的数据（a→1号位后，b就读不到了）
2. 每次轮转前都要重新保存 nums[-1]，如果 tmp 只在循环外保存一次，第 2 轮起全错
3. k 必须先对 n 取模：轮转 n 次等于没转，k1e5 n7 时实际只转 3 次
4. if k0 的判断完全多余：k%n0 时 range(0) 是空循环，一次都不会跑
5. 暴力法在 LeetCode 会 TLE（n1e5, k5e4 时操作≈5e9 次），仅作理解基础用`},ask:"给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。",constraints:["- 1 <= nums.length <= 10^5","- -2^31 <= nums[i] <= 2^31 - 1","- 0 <= k <= 10^5"]},{id:"73",slug:"73-矩阵置零",title:"矩阵置零",titleEn:"Set Matrix Zeroes",category:"矩阵",difficulty:"中等",topic:"标记数组",completed:!0,leetcodeSlug:"set-matrix-zeroes",leetcodeUrl:"https://leetcode.cn/problems/set-matrix-zeroes/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E7%9F%A9%E9%98%B5%E7%BD%AE%E9%9B%B6",acceptanceRate:71.3,solutionCount:3535,companyTagCount:59,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["矩阵","标记数组","数组","哈希表"],sourcePath:"hot100/06_矩阵/73.矩阵置零.py",lastUpdated:"2026-03-27",lastUpdatedAt:"2026-03-27T13:11:08.095Z",interviewPattern:"先定义坐标边界和访问顺序，任何原地操作都要说明覆盖风险。",thoughts:[`方法一：标记法（面试推荐，简洁易懂）
思路：用两个 set 记录哪些行/列需要置零，再统一处理
时间 O(m*n)，空间 O(m+n)
易错点/误区：
1. 条件是 or 不是 and：行或列有0就要置零
2.  是比较， 才是赋值
3. 遍历范围是矩阵大小，不是 set 的大小`,`需二刷：方法二——常量空间（进阶）
思路：用矩阵的第 0 行当"列标记"，第 0 列当"行标记"，省掉额外 set
时间 O(m*n)，空间 O(1)
关键：第 0 行和第 0 列本身可能也有 0，所以需要一个额外变量 col0
置零时必须从后往前，因为第 0 行/列是"标记区"，要最后才能动
易错点/误区：
1. matrix[0][0] 同时属于第0行和第0列，只能标记一个，所以需要 col0 单独标记第0列
2. 置零必须从后往前！如果从前往后会破坏第 0 行的列标记
3. 标记阶段 j 从 1 开始（第0列用 col0 单独处理）`],pitfalls:[`方法一：标记法（面试推荐，简洁易懂）
思路：用两个 set 记录哪些行/列需要置零，再统一处理
时间 O(m*n)，空间 O(m+n)
易错点/误区：
1. 条件是 or 不是 and：行或列有0就要置零
2.  是比较， 才是赋值
3. 遍历范围是矩阵大小，不是 set 的大小`,`需二刷：方法二——常量空间（进阶）
思路：用矩阵的第 0 行当"列标记"，第 0 列当"行标记"，省掉额外 set
时间 O(m*n)，空间 O(1)
关键：第 0 行和第 0 列本身可能也有 0，所以需要一个额外变量 col0
置零时必须从后往前，因为第 0 行/列是"标记区"，要最后才能动
易错点/误区：
1. matrix[0][0] 同时属于第0行和第0列，只能标记一个，所以需要 col0 单独标记第0列
2. 置零必须从后往前！如果从前往后会破坏第 0 行的列标记
3. 标记阶段 j 从 1 开始（第0列用 col0 单独处理）`],recallBlanks:[],solutionGuide:{idea:`方法一：标记法（面试推荐，简洁易懂）
思路：用两个 set 记录哪些行/列需要置零，再统一处理
时间 O(m*n)，空间 O(m+n)
易错点/误区：
1. 条件是 or 不是 and：行或列有0就要置零
2.  是比较， 才是赋值
3. 遍历范围是矩阵大小，不是 set 的大小`,interviewSteps:["先说明核心考点：标记数组。","先定义坐标边界和访问顺序，任何原地操作都要说明覆盖风险。","关键词：矩阵 / 标记数组 / 数组 / 哈希表。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`方法一：标记法（面试推荐，简洁易懂）
思路：用两个 set 记录哪些行/列需要置零，再统一处理
时间 O(m*n)，空间 O(m+n)
易错点/误区：
1. 条件是 or 不是 and：行或列有0就要置零
2.  是比较， 才是赋值
3. 遍历范围是矩阵大小，不是 set 的大小`},ask:"给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。",constraints:["- 1 <= m, n <= 200","- -2^31 <= matrix[i][j] <= 2^31 - 1"]},{id:"48",slug:"48-旋转图像",title:"旋转图像",titleEn:"Rotate Image",category:"矩阵",difficulty:"中等",topic:"原地旋转 / 翻转",completed:!0,leetcodeSlug:"rotate-image",leetcodeUrl:"https://leetcode.cn/problems/rotate-image/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%97%8B%E8%BD%AC%E5%9B%BE%E5%83%8F",acceptanceRate:79.5,solutionCount:6921,companyTagCount:127,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["矩阵","原地旋转 / 翻转","数组","数学"],sourcePath:"hot100/06_矩阵/48.旋转图像.py",lastUpdated:"2026-03-22",lastUpdatedAt:"2026-03-22T13:32:18.572Z",interviewPattern:"先定义坐标边界和访问顺序，任何原地操作都要说明覆盖风险。",thoughts:[`需二刷：原地旋转的四元素循环交换 + 遍历范围控制
思路：逐层处理，每次对四个对称位置做循环交换，只遍历左上角 ~1/4 区域
时间 O(n²)，空间 O(1)
易错点/误区：
1. 映射公式是 (i,j)→(j,n-1-i)，不是 (j,n-i)，注意 0-indexed 要减 1
2. 遍历范围必须缩小到 ~1/4，否则同一组位置会被重复旋转导致结果错误
i: n//2, j: (n+1)//2（向上取整处理奇数 n 中心行多一个元素的情况）
3. 四步赋值要从 loc4 开始存 tmp，逆着循环链赋值，否则值会被覆盖`],pitfalls:[`需二刷：原地旋转的四元素循环交换 + 遍历范围控制
思路：逐层处理，每次对四个对称位置做循环交换，只遍历左上角 ~1/4 区域
时间 O(n²)，空间 O(1)
易错点/误区：
1. 映射公式是 (i,j)→(j,n-1-i)，不是 (j,n-i)，注意 0-indexed 要减 1
2. 遍历范围必须缩小到 ~1/4，否则同一组位置会被重复旋转导致结果错误
i: n//2, j: (n+1)//2（向上取整处理奇数 n 中心行多一个元素的情况）
3. 四步赋值要从 loc4 开始存 tmp，逆着循环链赋值，否则值会被覆盖`],recallBlanks:[],solutionGuide:{idea:`需二刷：原地旋转的四元素循环交换 + 遍历范围控制
思路：逐层处理，每次对四个对称位置做循环交换，只遍历左上角 ~1/4 区域
时间 O(n²)，空间 O(1)
易错点/误区：
1. 映射公式是 (i,j)→(j,n-1-i)，不是 (j,n-i)，注意 0-indexed 要减 1
2. 遍历范围必须缩小到 ~1/4，否则同一组位置会被重复旋转导致结果错误
i: n//2, j: (n+1)//2（向上取整处理奇数 n 中心行多一个元素的情况）
3. 四步赋值要从 loc4 开始存 tmp，逆着循环链赋值，否则值会被覆盖`,interviewSteps:["先说明核心考点：原地旋转 / 翻转。","先定义坐标边界和访问顺序，任何原地操作都要说明覆盖风险。","关键词：矩阵 / 原地旋转 / 翻转 / 数组 / 数学。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：原地旋转的四元素循环交换 + 遍历范围控制
思路：逐层处理，每次对四个对称位置做循环交换，只遍历左上角 ~1/4 区域
时间 O(n²)，空间 O(1)
易错点/误区：
1. 映射公式是 (i,j)→(j,n-1-i)，不是 (j,n-i)，注意 0-indexed 要减 1
2. 遍历范围必须缩小到 ~1/4，否则同一组位置会被重复旋转导致结果错误
i: n//2, j: (n+1)//2（向上取整处理奇数 n 中心行多一个元素的情况）
3. 四步赋值要从 loc4 开始存 tmp，逆着循环链赋值，否则值会被覆盖`},ask:"给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。",constraints:["- 1 <= n <= 20","- -1000 <= matrix[i][j] <= 1000"]},{id:"54",slug:"54-螺旋矩阵",title:"螺旋矩阵",titleEn:"Spiral Matrix",category:"矩阵",difficulty:"中等",topic:"四边界收缩模拟",completed:!0,leetcodeSlug:"spiral-matrix",leetcodeUrl:"https://leetcode.cn/problems/spiral-matrix/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E8%9E%BA%E6%97%8B%E7%9F%A9%E9%98%B5",acceptanceRate:55.6,solutionCount:7170,companyTagCount:152,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["矩阵","四边界收缩模拟","数组","模拟"],sourcePath:"hot100/06_矩阵/54.螺旋矩阵.py",lastUpdated:"2026-08-25",lastUpdatedAt:"2026-08-25T20:18:41.979Z",interviewPattern:"先定义坐标边界和访问顺序，任何原地操作都要说明覆盖风险。",thoughts:[`需二刷：四边界收缩模拟（维护循环不变量）
思路：用 上/下/左/右 四个边界圈定「未遍历区域」，每轮按 顶行→右列→底行→左列
顺时针走一圈，走完一条边立即收缩对应边界。每条边遍历前用 if 守卫检查
「边界未交叉」，防止剩单行/单列时被重复遍历。
时间 O(m×n)：每个元素恰好访问一次；空间 O(1)（不计输出数组）
易错点/误区：
1. 竖直方向行列下标写反：matrix[right_bound][i]  → matrix[i][right_bound]
水平走变的是列 j，竖直走变的是行 i —— 变化的下标永远放第一维。
后果：取错元素且凑不满 m*n 个 → while 死循环（本次实战踩坑）
2. 底行、左列前必须重新检查边界：走完右列后可能只剩一行/一列，
不加 if 守卫会原路重复打印（单行 [[1,2,3]] 必挂）
3. 反向 range 左边界：range(right, left-1, -1) 才能包含 left；
写成 left 会漏掉最左元素（range 左闭右开）`],pitfalls:[`需二刷：四边界收缩模拟（维护循环不变量）
思路：用 上/下/左/右 四个边界圈定「未遍历区域」，每轮按 顶行→右列→底行→左列
顺时针走一圈，走完一条边立即收缩对应边界。每条边遍历前用 if 守卫检查
「边界未交叉」，防止剩单行/单列时被重复遍历。
时间 O(m×n)：每个元素恰好访问一次；空间 O(1)（不计输出数组）
易错点/误区：
1. 竖直方向行列下标写反：matrix[right_bound][i]  → matrix[i][right_bound]
水平走变的是列 j，竖直走变的是行 i —— 变化的下标永远放第一维。
后果：取错元素且凑不满 m*n 个 → while 死循环（本次实战踩坑）
2. 底行、左列前必须重新检查边界：走完右列后可能只剩一行/一列，
不加 if 守卫会原路重复打印（单行 [[1,2,3]] 必挂）
3. 反向 range 左边界：range(right, left-1, -1) 才能包含 left；
写成 left 会漏掉最左元素（range 左闭右开）`,"① 顶行：从左到右，走完上边界下移","② 右列：从上到下（变化的行号 i 放第一维！），走完右边界左移","④ 左列：从下到上，走完左边界右移"],recallBlanks:[],solutionGuide:{idea:`需二刷：四边界收缩模拟（维护循环不变量）
思路：用 上/下/左/右 四个边界圈定「未遍历区域」，每轮按 顶行→右列→底行→左列
顺时针走一圈，走完一条边立即收缩对应边界。每条边遍历前用 if 守卫检查
「边界未交叉」，防止剩单行/单列时被重复遍历。
时间 O(m×n)：每个元素恰好访问一次；空间 O(1)（不计输出数组）
易错点/误区：
1. 竖直方向行列下标写反：matrix[right_bound][i]  → matrix[i][right_bound]
水平走变的是列 j，竖直走变的是行 i —— 变化的下标永远放第一维。
后果：取错元素且凑不满 m*n 个 → while 死循环（本次实战踩坑）
2. 底行、左列前必须重新检查边界：走完右列后可能只剩一行/一列，
不加 if 守卫会原路重复打印（单行 [[1,2,3]] 必挂）
3. 反向 range 左边界：range(right, left-1, -1) 才能包含 left；
写成 left 会漏掉最左元素（range 左闭右开）`,interviewSteps:["先说明核心考点：四边界收缩模拟。","先定义坐标边界和访问顺序，任何原地操作都要说明覆盖风险。","关键词：矩阵 / 四边界收缩模拟 / 数组 / 模拟。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：四边界收缩模拟（维护循环不变量）
思路：用 上/下/左/右 四个边界圈定「未遍历区域」，每轮按 顶行→右列→底行→左列
顺时针走一圈，走完一条边立即收缩对应边界。每条边遍历前用 if 守卫检查
「边界未交叉」，防止剩单行/单列时被重复遍历。
时间 O(m×n)：每个元素恰好访问一次；空间 O(1)（不计输出数组）
易错点/误区：
1. 竖直方向行列下标写反：matrix[right_bound][i]  → matrix[i][right_bound]
水平走变的是列 j，竖直走变的是行 i —— 变化的下标永远放第一维。
后果：取错元素且凑不满 m*n 个 → while 死循环（本次实战踩坑）
2. 底行、左列前必须重新检查边界：走完右列后可能只剩一行/一列，
不加 if 守卫会原路重复打印（单行 [[1,2,3]] 必挂）
3. 反向 range 左边界：range(right, left-1, -1) 才能包含 left；
写成 left 会漏掉最左元素（range 左闭右开）`},ask:"给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。"},{id:"240",slug:"240-搜索二维矩阵-ii",title:"搜索二维矩阵 II",titleEn:"Search a 2D Matrix II",category:"矩阵",difficulty:"中等",topic:"Z 字形搜索（右上角行走）",completed:!0,leetcodeSlug:"search-a-2d-matrix-ii",leetcodeUrl:"https://leetcode.cn/problems/search-a-2d-matrix-ii/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%90%9C%E7%B4%A2%E4%BA%8C%E7%BB%B4%E7%9F%A9%E9%98%B5%20II",acceptanceRate:57.6,solutionCount:2840,companyTagCount:84,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["矩阵","Z 字形搜索（右上角行走）","数组","二分查找","分治"],sourcePath:"hot100/06_矩阵/240.搜索二维矩阵 II.py",lastUpdated:"2026-08-26",lastUpdatedAt:"2026-08-26T13:20:06.100Z",interviewPattern:"先定义坐标边界和访问顺序，任何原地操作都要说明覆盖风险。",thoughts:[`需二刷：Z 字形搜索（右上角出发，每步排除一行或一列）
思路：右上角的独特性质——往左变小、往下变大，两个方向单调性相反。
所以每次比较必然能排除一整行或一整列：
cur > target → 这一列下面只会更大 → 整列作废，左移
cur < target → 这一行左边只会更小 → 整行作废，下移
最多 m+n-1 步出结果，绝不回头、绝不犹豫。
时间 O(m+n)，空间 O(1)。对比暴力 O(m×n)、逐行二分 O(m·logn)，此法最优。
易错点/误区：
1. 指针必须真的移动：首版只更新 tmp 读数、row/col 从未变过 —— 行走类题的
「状态」是坐标本身，读出的值只是快照，指针不动等于原地打转（实战踩坑①）
2. 方向走反：cur < target 该往「更大」的方向（↓），写成了往左；
cur > target 该往「更小」的方向（←），写成了往上 —— 记法：缺哪边往哪边走
3. Python 负索引静默回绕：matrix[row-1] 在 row0 时悄悄取最后一行，不报错
但永远找不到答案 → 死循环。越界必须靠 while 条件主动拦截（实战踩坑②）
4. 终止 off-by-one：合法行号 0~m-1，while 写 row < m 会在 rowm 时放行
→ IndexError。正确写法卡在「合法范围之外一格」，与 col > 0 对称（实战踩坑③）`],pitfalls:[`需二刷：Z 字形搜索（右上角出发，每步排除一行或一列）
思路：右上角的独特性质——往左变小、往下变大，两个方向单调性相反。
所以每次比较必然能排除一整行或一整列：
cur > target → 这一列下面只会更大 → 整列作废，左移
cur < target → 这一行左边只会更小 → 整行作废，下移
最多 m+n-1 步出结果，绝不回头、绝不犹豫。
时间 O(m+n)，空间 O(1)。对比暴力 O(m×n)、逐行二分 O(m·logn)，此法最优。
易错点/误区：
1. 指针必须真的移动：首版只更新 tmp 读数、row/col 从未变过 —— 行走类题的
「状态」是坐标本身，读出的值只是快照，指针不动等于原地打转（实战踩坑①）
2. 方向走反：cur < target 该往「更大」的方向（↓），写成了往左；
cur > target 该往「更小」的方向（←），写成了往上 —— 记法：缺哪边往哪边走
3. Python 负索引静默回绕：matrix[row-1] 在 row0 时悄悄取最后一行，不报错
但永远找不到答案 → 死循环。越界必须靠 while 条件主动拦截（实战踩坑②）
4. 终止 off-by-one：合法行号 0~m-1，while 写 row < m 会在 rowm 时放行
→ IndexError。正确写法卡在「合法范围之外一格」，与 col > 0 对称（实战踩坑③）`],recallBlanks:[],solutionGuide:{idea:`需二刷：Z 字形搜索（右上角出发，每步排除一行或一列）
思路：右上角的独特性质——往左变小、往下变大，两个方向单调性相反。
所以每次比较必然能排除一整行或一整列：
cur > target → 这一列下面只会更大 → 整列作废，左移
cur < target → 这一行左边只会更小 → 整行作废，下移
最多 m+n-1 步出结果，绝不回头、绝不犹豫。
时间 O(m+n)，空间 O(1)。对比暴力 O(m×n)、逐行二分 O(m·logn)，此法最优。
易错点/误区：
1. 指针必须真的移动：首版只更新 tmp 读数、row/col 从未变过 —— 行走类题的
「状态」是坐标本身，读出的值只是快照，指针不动等于原地打转（实战踩坑①）
2. 方向走反：cur < target 该往「更大」的方向（↓），写成了往左；
cur > target 该往「更小」的方向（←），写成了往上 —— 记法：缺哪边往哪边走
3. Python 负索引静默回绕：matrix[row-1] 在 row0 时悄悄取最后一行，不报错
但永远找不到答案 → 死循环。越界必须靠 while 条件主动拦截（实战踩坑②）
4. 终止 off-by-one：合法行号 0~m-1，while 写 row < m 会在 rowm 时放行
→ IndexError。正确写法卡在「合法范围之外一格」，与 col > 0 对称（实战踩坑③）`,interviewSteps:["先说明核心考点：Z 字形搜索（右上角行走）。","先定义坐标边界和访问顺序，任何原地操作都要说明覆盖风险。","关键词：矩阵 / Z 字形搜索（右上角行走） / 数组 / 二分查找。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：Z 字形搜索（右上角出发，每步排除一行或一列）
思路：右上角的独特性质——往左变小、往下变大，两个方向单调性相反。
所以每次比较必然能排除一整行或一整列：
cur > target → 这一列下面只会更大 → 整列作废，左移
cur < target → 这一行左边只会更小 → 整行作废，下移
最多 m+n-1 步出结果，绝不回头、绝不犹豫。
时间 O(m+n)，空间 O(1)。对比暴力 O(m×n)、逐行二分 O(m·logn)，此法最优。
易错点/误区：
1. 指针必须真的移动：首版只更新 tmp 读数、row/col 从未变过 —— 行走类题的
「状态」是坐标本身，读出的值只是快照，指针不动等于原地打转（实战踩坑①）
2. 方向走反：cur < target 该往「更大」的方向（↓），写成了往左；
cur > target 该往「更小」的方向（←），写成了往上 —— 记法：缺哪边往哪边走
3. Python 负索引静默回绕：matrix[row-1] 在 row0 时悄悄取最后一行，不报错
但永远找不到答案 → 死循环。越界必须靠 while 条件主动拦截（实战踩坑②）
4. 终止 off-by-one：合法行号 0~m-1，while 写 row < m 会在 rowm 时放行
→ IndexError。正确写法卡在「合法范围之外一格」，与 col > 0 对称（实战踩坑③）`},ask:"编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：",constraints:["- 1 <= n, m <= 300","- -10^9 <= matrix[i][j] <= 10^9","- -10^9 <= target <= 10^9"]},{id:"160",slug:"160-相交链表",title:"相交链表",titleEn:"Intersection of Two Linked Lists",category:"链表",difficulty:"简单",topic:"双指针",completed:!0,leetcodeSlug:"intersection-of-two-linked-lists",leetcodeUrl:"https://leetcode.cn/problems/intersection-of-two-linked-lists/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E7%9B%B8%E4%BA%A4%E9%93%BE%E8%A1%A8",acceptanceRate:68.5,solutionCount:5922,companyTagCount:90,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["链表","双指针","哈希表"],sourcePath:"hot100/07_链表/160.相交链表.py",lastUpdated:"2026-03-16",lastUpdatedAt:"2026-03-16T12:48:28.757Z",interviewPattern:"画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",thoughts:[`思路：双指针法
两个指针分别从 A、B 链表出发，走完自己的链表后跳到对方的链表继续走
因为两者总路程相同（lenA + lenB），所以一定会在交点相遇
如果不相交，两者会同时到达 None，循环也会正常结束
时间 O(m+n)  空间 O(1)`],pitfalls:["本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"],recallBlanks:[],solutionGuide:{idea:`思路：双指针法
两个指针分别从 A、B 链表出发，走完自己的链表后跳到对方的链表继续走
因为两者总路程相同（lenA + lenB），所以一定会在交点相遇
如果不相交，两者会同时到达 None，循环也会正常结束
时间 O(m+n)  空间 O(1)`,interviewSteps:["先说明核心考点：双指针。","画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。","关键词：链表 / 双指针 / 哈希表。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:"本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"},ask:"给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。",constraints:["- 1 <= m, n <= 3 * 10^4","- 1 <= Node.val <= 10^5","- 0 <= skipA <= m","- 0 <= skipB <= n"]},{id:"206",slug:"206-反转链表",title:"反转链表",titleEn:"Reverse Linked List",category:"链表",difficulty:"简单",topic:"迭代 / 递归",completed:!0,leetcodeSlug:"reverse-linked-list",leetcodeUrl:"https://leetcode.cn/problems/reverse-linked-list/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8",acceptanceRate:76.5,solutionCount:14993,companyTagCount:219,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["链表","迭代 / 递归","递归"],sourcePath:"hot100/07_链表/206.反转链表.py",lastUpdated:"2026-03-16",lastUpdatedAt:"2026-03-16T13:17:51.544Z",interviewPattern:"画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",thoughts:[`Definition for singly-linked list.
class ListNode:
def __init__(self, val0, nextNone):
self.val  val
self.next  next
思路：栈（后进先出）
把所有节点压入栈，再依次弹出重新串联，顺序自然就反了
时间 O(n)  空间 O(n)（栈存了所有节点）
class Solution:
def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
if not head:                     # 边界情况：空链表直接返回
return None`,`# 第一步：遍历链表，所有节点入栈
stack  []
cur  head
while cur:
stack.append(cur)
cur  cur.next`,`# 第二步：弹出栈顶作为新头，依次串起来
new_head  stack.pop()           # 栈顶就是原链表的最后一个节点
cur  new_head
while stack:
cur.next  stack.pop()       # 把弹出的节点接到 cur 后面
cur  cur.next               # cur 往后走一步
cur.next  None                  #  原头节点的 next 要断开，否则成环
return new_head`],pitfalls:[`Definition for singly-linked list.
class ListNode:
def __init__(self, val0, nextNone):
self.val  val
self.next  next
思路：栈（后进先出）
把所有节点压入栈，再依次弹出重新串联，顺序自然就反了
时间 O(n)  空间 O(n)（栈存了所有节点）
class Solution:
def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
if not head:                     # 边界情况：空链表直接返回
return None`,`# 第二步：弹出栈顶作为新头，依次串起来
new_head  stack.pop()           # 栈顶就是原链表的最后一个节点
cur  new_head
while stack:
cur.next  stack.pop()       # 把弹出的节点接到 cur 后面
cur  cur.next               # cur 往后走一步
cur.next  None                  #  原头节点的 next 要断开，否则成环
return new_head`],recallBlanks:[{prompt:`# 第一步：遍历链表，所有节点入＿＿＿
stack  []
cur  head
while cur:
stack.append(cur)
cur  cur.next`,answer:"栈"}],solutionGuide:{idea:`Definition for singly-linked list.
class ListNode:
def __init__(self, val0, nextNone):
self.val  val
self.next  next
思路：栈（后进先出）
把所有节点压入栈，再依次弹出重新串联，顺序自然就反了
时间 O(n)  空间 O(n)（栈存了所有节点）
class Solution:
def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
if not head:                     # 边界情况：空链表直接返回
return None`,interviewSteps:["先说明核心考点：迭代 / 递归。","画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。","关键词：链表 / 迭代 / 递归 / 递归。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`Definition for singly-linked list.
class ListNode:
def __init__(self, val0, nextNone):
self.val  val
self.next  next
思路：栈（后进先出）
把所有节点压入栈，再依次弹出重新串联，顺序自然就反了
时间 O(n)  空间 O(n)（栈存了所有节点）
class Solution:
def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
if not head:                     # 边界情况：空链表直接返回
return None`},ask:"给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。"},{id:"234",slug:"234-回文链表",title:"回文链表",titleEn:"Palindrome Linked List",category:"链表",difficulty:"简单",topic:"快慢指针 + 反转",completed:!0,leetcodeSlug:"palindrome-linked-list",leetcodeUrl:"https://leetcode.cn/problems/palindrome-linked-list/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E5%9B%9E%E6%96%87%E9%93%BE%E8%A1%A8",acceptanceRate:58.6,solutionCount:5434,companyTagCount:95,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["链表","快慢指针 + 反转","栈","递归","双指针"],sourcePath:"hot100/07_链表/234.回文链表.py",lastUpdated:"2026-03-17",lastUpdatedAt:"2026-03-17T14:29:00.564Z",interviewPattern:"画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",thoughts:[`Definition for singly-linked list.
class ListNode:
def __init__(self, val0, nextNone):
self.val  val
self.next  next
需二刷：快慢指针 + 反转链表是链表题的核心技巧，务必熟练掌握
思路：快慢指针找中点 → 反转后半链表 → 逐一比较
时间 O(n)，空间 O(1)
易错点/误区：
1. 快慢指针的终止条件是 fast and fast.next，两个都要判断（偶数/奇数长度）
2. 反转链表时要用临时变量 nxt 保存 slow.next，否则链会断
3. 比较阶段用 right 控制循环，因为后半长度 ≤ 前半（奇数时中间节点归后半，反转后多一个）
4. left, right  head, prev 是元组解包赋值，等价于分别赋值`,`--- 法一：转数组（简单直观，空间 O(n)）---
vals  []
while head:
vals.append(head.val)
head  head.next
return vals  vals[::-1]`,"--- 法二：快慢指针 + 反转后半链表（最优，空间 O(1)）---"],pitfalls:[`Definition for singly-linked list.
class ListNode:
def __init__(self, val0, nextNone):
self.val  val
self.next  next
需二刷：快慢指针 + 反转链表是链表题的核心技巧，务必熟练掌握
思路：快慢指针找中点 → 反转后半链表 → 逐一比较
时间 O(n)，空间 O(1)
易错点/误区：
1. 快慢指针的终止条件是 fast and fast.next，两个都要判断（偶数/奇数长度）
2. 反转链表时要用临时变量 nxt 保存 slow.next，否则链会断
3. 比较阶段用 right 控制循环，因为后半长度 ≤ 前半（奇数时中间节点归后半，反转后多一个）
4. left, right  head, prev 是元组解包赋值，等价于分别赋值`],recallBlanks:[{prompt:"--- 法二：＿＿＿ + 反转后半链表（最优，空间 O(1)）---",answer:"快慢指针"}],solutionGuide:{idea:`Definition for singly-linked list.
class ListNode:
def __init__(self, val0, nextNone):
self.val  val
self.next  next
需二刷：快慢指针 + 反转链表是链表题的核心技巧，务必熟练掌握
思路：快慢指针找中点 → 反转后半链表 → 逐一比较
时间 O(n)，空间 O(1)
易错点/误区：
1. 快慢指针的终止条件是 fast and fast.next，两个都要判断（偶数/奇数长度）
2. 反转链表时要用临时变量 nxt 保存 slow.next，否则链会断
3. 比较阶段用 right 控制循环，因为后半长度 ≤ 前半（奇数时中间节点归后半，反转后多一个）
4. left, right  head, prev 是元组解包赋值，等价于分别赋值`,interviewSteps:["先说明核心考点：快慢指针 + 反转。","画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。","关键词：链表 / 快慢指针 + 反转 / 栈 / 递归。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`Definition for singly-linked list.
class ListNode:
def __init__(self, val0, nextNone):
self.val  val
self.next  next
需二刷：快慢指针 + 反转链表是链表题的核心技巧，务必熟练掌握
思路：快慢指针找中点 → 反转后半链表 → 逐一比较
时间 O(n)，空间 O(1)
易错点/误区：
1. 快慢指针的终止条件是 fast and fast.next，两个都要判断（偶数/奇数长度）
2. 反转链表时要用临时变量 nxt 保存 slow.next，否则链会断
3. 比较阶段用 right 控制循环，因为后半长度 ≤ 前半（奇数时中间节点归后半，反转后多一个）
4. left, right  head, prev 是元组解包赋值，等价于分别赋值`},ask:"给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。",constraints:["- 0 <= Node.val <= 9"]},{id:"141",slug:"141-环形链表",title:"环形链表",titleEn:"Linked List Cycle",category:"链表",difficulty:"简单",topic:"快慢指针",completed:!0,leetcodeSlug:"linked-list-cycle",leetcodeUrl:"https://leetcode.cn/problems/linked-list-cycle/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8",acceptanceRate:55.1,solutionCount:7463,companyTagCount:132,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["链表","快慢指针","哈希表","双指针","Floyd 判圈算法"],sourcePath:"hot100/07_链表/141.环形链表.py",lastUpdated:"2026-03-17",lastUpdatedAt:"2026-03-17T15:31:19.523Z",interviewPattern:"画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",thoughts:[`需二刷：快慢指针判环（龟兔赛跑），和 234 题共用同一技巧
思路：快指针走2步，慢指针走1步，有环则必相遇；无环则快指针先到 None
时间 O(n)，空间 O(1)
易错点/误区：
1. 循环条件必须是 while fast and fast.next，不能写 while fast.next.next
→ 如果 fast 是 None，访问 .next 会报 AttributeError（本次踩坑）
2. and 有短路特性：fast 为 None 时，fast.next 不会被执行，避免崩溃
3. 不能用数组存节点然后判断，有环会导致 while 死循环，内存爆掉（本次踩坑）
4. slow ! fast 时应该继续循环，不能直接 return，否则第一轮就退出了（本次踩坑）`],pitfalls:[`需二刷：快慢指针判环（龟兔赛跑），和 234 题共用同一技巧
思路：快指针走2步，慢指针走1步，有环则必相遇；无环则快指针先到 None
时间 O(n)，空间 O(1)
易错点/误区：
1. 循环条件必须是 while fast and fast.next，不能写 while fast.next.next
→ 如果 fast 是 None，访问 .next 会报 AttributeError（本次踩坑）
2. and 有短路特性：fast 为 None 时，fast.next 不会被执行，避免崩溃
3. 不能用数组存节点然后判断，有环会导致 while 死循环，内存爆掉（本次踩坑）
4. slow ! fast 时应该继续循环，不能直接 return，否则第一轮就退出了（本次踩坑）`],recallBlanks:[],solutionGuide:{idea:`需二刷：快慢指针判环（龟兔赛跑），和 234 题共用同一技巧
思路：快指针走2步，慢指针走1步，有环则必相遇；无环则快指针先到 None
时间 O(n)，空间 O(1)
易错点/误区：
1. 循环条件必须是 while fast and fast.next，不能写 while fast.next.next
→ 如果 fast 是 None，访问 .next 会报 AttributeError（本次踩坑）
2. and 有短路特性：fast 为 None 时，fast.next 不会被执行，避免崩溃
3. 不能用数组存节点然后判断，有环会导致 while 死循环，内存爆掉（本次踩坑）
4. slow ! fast 时应该继续循环，不能直接 return，否则第一轮就退出了（本次踩坑）`,interviewSteps:["先说明核心考点：快慢指针。","画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。","关键词：链表 / 快慢指针 / 哈希表 / 双指针。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：快慢指针判环（龟兔赛跑），和 234 题共用同一技巧
思路：快指针走2步，慢指针走1步，有环则必相遇；无环则快指针先到 None
时间 O(n)，空间 O(1)
易错点/误区：
1. 循环条件必须是 while fast and fast.next，不能写 while fast.next.next
→ 如果 fast 是 None，访问 .next 会报 AttributeError（本次踩坑）
2. and 有短路特性：fast 为 None 时，fast.next 不会被执行，避免崩溃
3. 不能用数组存节点然后判断，有环会导致 while 死循环，内存爆掉（本次踩坑）
4. slow ! fast 时应该继续循环，不能直接 return，否则第一轮就退出了（本次踩坑）`},ask:"给你一个链表的头节点 head ，判断链表中是否有环。",constraints:["- -10^5 <= Node.val <= 10^5"]},{id:"142",slug:"142-环形链表-ii",title:"环形链表 II",titleEn:"Linked List Cycle II",category:"链表",difficulty:"中等",topic:"快慢指针 + 数学",completed:!0,leetcodeSlug:"linked-list-cycle-ii",leetcodeUrl:"https://leetcode.cn/problems/linked-list-cycle-ii/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8%20II",acceptanceRate:63.3,solutionCount:6190,companyTagCount:83,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["链表","快慢指针 + 数学","哈希表","双指针","Floyd 判圈算法"],sourcePath:"hot100/07_链表/142.环形链表-ii.py",lastUpdated:"2026-03-20",lastUpdatedAt:"2026-03-20T11:18:37.099Z",interviewPattern:"画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",thoughts:[`需二刷：快慢指针找环入口的数学推导
思路：两步走 —— ① 快慢指针判环并找到相遇点 ② 双指针从 head 和相遇点同速走，再次相遇即入口
时间 O(n)，空间 O(1)
关键推导：相遇时 fast 走了 2(a+b)，也走了 a+b+nL
→ a+b  nL → a  nL-b
→ 从 head 走 a 步  从相遇点走 a 步，都到达环入口
易错点/误区：
1. return 的位置：return ans 要在内层 while 之后（找到入口才返回），
return None 要在外层 while 之后（循环结束才确认无环）
2. 口诀：return 放在"让你知道答案的那个循环"的外面`],pitfalls:[`需二刷：快慢指针找环入口的数学推导
思路：两步走 —— ① 快慢指针判环并找到相遇点 ② 双指针从 head 和相遇点同速走，再次相遇即入口
时间 O(n)，空间 O(1)
关键推导：相遇时 fast 走了 2(a+b)，也走了 a+b+nL
→ a+b  nL → a  nL-b
→ 从 head 走 a 步  从相遇点走 a 步，都到达环入口
易错点/误区：
1. return 的位置：return ans 要在内层 while 之后（找到入口才返回），
return None 要在外层 while 之后（循环结束才确认无环）
2. 口诀：return 放在"让你知道答案的那个循环"的外面`],recallBlanks:[],solutionGuide:{idea:`需二刷：快慢指针找环入口的数学推导
思路：两步走 —— ① 快慢指针判环并找到相遇点 ② 双指针从 head 和相遇点同速走，再次相遇即入口
时间 O(n)，空间 O(1)
关键推导：相遇时 fast 走了 2(a+b)，也走了 a+b+nL
→ a+b  nL → a  nL-b
→ 从 head 走 a 步  从相遇点走 a 步，都到达环入口
易错点/误区：
1. return 的位置：return ans 要在内层 while 之后（找到入口才返回），
return None 要在外层 while 之后（循环结束才确认无环）
2. 口诀：return 放在"让你知道答案的那个循环"的外面`,interviewSteps:["先说明核心考点：快慢指针 + 数学。","画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。","关键词：链表 / 快慢指针 + 数学 / 哈希表 / 双指针。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：快慢指针找环入口的数学推导
思路：两步走 —— ① 快慢指针判环并找到相遇点 ② 双指针从 head 和相遇点同速走，再次相遇即入口
时间 O(n)，空间 O(1)
关键推导：相遇时 fast 走了 2(a+b)，也走了 a+b+nL
→ a+b  nL → a  nL-b
→ 从 head 走 a 步  从相遇点走 a 步，都到达环入口
易错点/误区：
1. return 的位置：return ans 要在内层 while 之后（找到入口才返回），
return None 要在外层 while 之后（循环结束才确认无环）
2. 口诀：return 放在"让你知道答案的那个循环"的外面`},ask:"给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。",constraints:["- -10^5 <= Node.val <= 10^5"]},{id:"21",slug:"21-合并两个有序链表",title:"合并两个有序链表",titleEn:"Merge Two Sorted Lists",category:"链表",difficulty:"简单",topic:"递归 / 迭代",completed:!0,leetcodeSlug:"merge-two-sorted-lists",leetcodeUrl:"https://leetcode.cn/problems/merge-two-sorted-lists/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E5%90%88%E5%B9%B6%E4%B8%A4%E4%B8%AA%E6%9C%89%E5%BA%8F%E9%93%BE%E8%A1%A8",acceptanceRate:68.3,solutionCount:10097,companyTagCount:218,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["链表","递归 / 迭代","递归"],sourcePath:"hot100/07_链表/21.合并两个有序链表.py",lastUpdated:"2026-08-28",lastUpdatedAt:"2026-08-28T16:29:45.641Z",interviewPattern:"画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",thoughts:[`思路：利用两个链表已有序的特性，每次取较小的节点拼接到结果链表
方法一：迭代（dummy 虚拟头节点 + 双指针） 时间 O(m+n)，空间 O(1)
方法二：递归，每次比较头节点，较小的 .next 指向剩余部分的合并结果 时间 O(m+n)，空间 O(m+n)
易错点/误区：
1. 初始化结果链表时不能用 ans  None，因为 None 没有 .next 属性
→ 用 dummy 虚拟头节点统一处理
2. 尾部拼接剩余链表时注意 a/b 不要写反
3. 递归解法中，终止条件必须放在最前面（否则访问 None.val 会报错）
4. 递归解法中，return 的是当前节点本身（如 list1），不是 list1.next`,`方法一：迭代（dummy 虚拟头节点 + 双指针）
a  list1
b  list2
dummy  ListNode(-1)          # 虚拟头节点，避免单独处理第一个节点
cur  dummy                   # cur 追踪结果链表的尾部
while a and b:                # 两个链表都还有节点时，比较取较小的
if a.val < b.val:
cur.next  a
a  a.next
else:
cur.next  b
b  b.next
cur  cur.next
cur.next  a or b             # 剩余部分直接拼接（已有序，无需逐个比较）
return dummy.next             # dummy.next 才是真正的头节点`,`方法二：递归
终止条件：某个链表为空，直接返回另一个`],pitfalls:[`思路：利用两个链表已有序的特性，每次取较小的节点拼接到结果链表
方法一：迭代（dummy 虚拟头节点 + 双指针） 时间 O(m+n)，空间 O(1)
方法二：递归，每次比较头节点，较小的 .next 指向剩余部分的合并结果 时间 O(m+n)，空间 O(m+n)
易错点/误区：
1. 初始化结果链表时不能用 ans  None，因为 None 没有 .next 属性
→ 用 dummy 虚拟头节点统一处理
2. 尾部拼接剩余链表时注意 a/b 不要写反
3. 递归解法中，终止条件必须放在最前面（否则访问 None.val 会报错）
4. 递归解法中，return 的是当前节点本身（如 list1），不是 list1.next`],recallBlanks:[{prompt:`方法二：＿＿＿
终止条件：某个链表为空，直接返回另一个`,answer:"递归"}],solutionGuide:{idea:`思路：利用两个链表已有序的特性，每次取较小的节点拼接到结果链表
方法一：迭代（dummy 虚拟头节点 + 双指针） 时间 O(m+n)，空间 O(1)
方法二：递归，每次比较头节点，较小的 .next 指向剩余部分的合并结果 时间 O(m+n)，空间 O(m+n)
易错点/误区：
1. 初始化结果链表时不能用 ans  None，因为 None 没有 .next 属性
→ 用 dummy 虚拟头节点统一处理
2. 尾部拼接剩余链表时注意 a/b 不要写反
3. 递归解法中，终止条件必须放在最前面（否则访问 None.val 会报错）
4. 递归解法中，return 的是当前节点本身（如 list1），不是 list1.next`,interviewSteps:["先说明核心考点：递归 / 迭代。","画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。","关键词：链表 / 递归 / 迭代 / 递归。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`思路：利用两个链表已有序的特性，每次取较小的节点拼接到结果链表
方法一：迭代（dummy 虚拟头节点 + 双指针） 时间 O(m+n)，空间 O(1)
方法二：递归，每次比较头节点，较小的 .next 指向剩余部分的合并结果 时间 O(m+n)，空间 O(m+n)
易错点/误区：
1. 初始化结果链表时不能用 ans  None，因为 None 没有 .next 属性
→ 用 dummy 虚拟头节点统一处理
2. 尾部拼接剩余链表时注意 a/b 不要写反
3. 递归解法中，终止条件必须放在最前面（否则访问 None.val 会报错）
4. 递归解法中，return 的是当前节点本身（如 list1），不是 list1.next`},ask:"将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。"},{id:"2",slug:"2-两数相加",title:"两数相加",titleEn:"Add Two Numbers",category:"链表",difficulty:"中等",topic:"链表遍历 + 进位",completed:!0,leetcodeSlug:"add-two-numbers",leetcodeUrl:"https://leetcode.cn/problems/add-two-numbers/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E4%B8%A4%E6%95%B0%E7%9B%B8%E5%8A%A0",acceptanceRate:47.2,solutionCount:16504,companyTagCount:232,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["链表","链表遍历 + 进位","递归","数学"],sourcePath:"hot100/07_链表/2.两数相加.py",lastUpdated:"2026-04-10",lastUpdatedAt:"2026-04-10T13:57:00.054Z",interviewPattern:"画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",thoughts:["核心考点：链表遍历 + 进位","画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。"],pitfalls:["本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"],recallBlanks:[{prompt:"画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 ＿＿＿和空链表边界。",answer:"dummy 节点"}],solutionGuide:{idea:"核心考点：链表遍历 + 进位",interviewSteps:["先说明核心考点：链表遍历 + 进位。","画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。","关键词：链表 / 链表遍历 + 进位 / 递归 / 数学。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:"本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"},ask:"给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。",constraints:["- 0 <= Node.val <= 9"]},{id:"19",slug:"19-删除链表的倒数第-n-个结点",title:"删除链表的倒数第 N 个结点",titleEn:"Remove Nth Node From End of List",category:"链表",difficulty:"中等",topic:"快慢指针",completed:!0,leetcodeSlug:"remove-nth-node-from-end-of-list",leetcodeUrl:"https://leetcode.cn/problems/remove-nth-node-from-end-of-list/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E5%88%A0%E9%99%A4%E9%93%BE%E8%A1%A8%E7%9A%84%E5%80%92%E6%95%B0%E7%AC%AC%20N%20%E4%B8%AA%E7%BB%93%E7%82%B9",acceptanceRate:53.7,solutionCount:11433,companyTagCount:131,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["链表","快慢指针","双指针"],sourcePath:"hot100/07_链表/19.删除链表的倒数第 N 个结点.py",lastUpdated:"2026-08-27",lastUpdatedAt:"2026-08-27T23:03:16.902Z",interviewPattern:"画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",thoughts:[`需二刷：快慢指针经典应用，哨兵节点最佳实践
思路：双指针（马拉松跑法）。使用 dummy 节点指向 head 解决删除头节点的边缘情况。
让 fast 先走 n 步，然后 fast 和 slow 一起走。当 fast 走到最后一个节点时，
slow 刚好在要删除节点的前一个位置，通过 slow.next  slow.next.next 完成删除。
时间 O(L) L为链表长度，空间 O(1)
易错点/误区：
1. 链表题不加 dummy 节点很容易在「删除第一个节点」这种边界条件上抛出空指针异常。
2. 返回值切忌直接 return head，因为如果被删除的刚好是原 head，返回 head 就会拿到错误结果，必须 return dummy.next。
3. while 循环条件必须是 fast.next（让 fast 停在最后一个节点），而不是 fast（会越界走到 None，导致 slow 走到要删除的节点上）。`],pitfalls:[`需二刷：快慢指针经典应用，哨兵节点最佳实践
思路：双指针（马拉松跑法）。使用 dummy 节点指向 head 解决删除头节点的边缘情况。
让 fast 先走 n 步，然后 fast 和 slow 一起走。当 fast 走到最后一个节点时，
slow 刚好在要删除节点的前一个位置，通过 slow.next  slow.next.next 完成删除。
时间 O(L) L为链表长度，空间 O(1)
易错点/误区：
1. 链表题不加 dummy 节点很容易在「删除第一个节点」这种边界条件上抛出空指针异常。
2. 返回值切忌直接 return head，因为如果被删除的刚好是原 head，返回 head 就会拿到错误结果，必须 return dummy.next。
3. while 循环条件必须是 fast.next（让 fast 停在最后一个节点），而不是 fast（会越界走到 None，导致 slow 走到要删除的节点上）。`],recallBlanks:[],solutionGuide:{idea:`需二刷：快慢指针经典应用，哨兵节点最佳实践
思路：双指针（马拉松跑法）。使用 dummy 节点指向 head 解决删除头节点的边缘情况。
让 fast 先走 n 步，然后 fast 和 slow 一起走。当 fast 走到最后一个节点时，
slow 刚好在要删除节点的前一个位置，通过 slow.next  slow.next.next 完成删除。
时间 O(L) L为链表长度，空间 O(1)
易错点/误区：
1. 链表题不加 dummy 节点很容易在「删除第一个节点」这种边界条件上抛出空指针异常。
2. 返回值切忌直接 return head，因为如果被删除的刚好是原 head，返回 head 就会拿到错误结果，必须 return dummy.next。
3. while 循环条件必须是 fast.next（让 fast 停在最后一个节点），而不是 fast（会越界走到 None，导致 slow 走到要删除的节点上）。`,interviewSteps:["先说明核心考点：快慢指针。","画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。","关键词：链表 / 快慢指针 / 双指针。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：快慢指针经典应用，哨兵节点最佳实践
思路：双指针（马拉松跑法）。使用 dummy 节点指向 head 解决删除头节点的边缘情况。
让 fast 先走 n 步，然后 fast 和 slow 一起走。当 fast 走到最后一个节点时，
slow 刚好在要删除节点的前一个位置，通过 slow.next  slow.next.next 完成删除。
时间 O(L) L为链表长度，空间 O(1)
易错点/误区：
1. 链表题不加 dummy 节点很容易在「删除第一个节点」这种边界条件上抛出空指针异常。
2. 返回值切忌直接 return head，因为如果被删除的刚好是原 head，返回 head 就会拿到错误结果，必须 return dummy.next。
3. while 循环条件必须是 fast.next（让 fast 停在最后一个节点），而不是 fast（会越界走到 None，导致 slow 走到要删除的节点上）。`},ask:"给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。",constraints:["- 1 <= sz <= 30","- 0 <= Node.val <= 100","- 1 <= n <= sz"]},{id:"24",slug:"24-两两交换链表中的节点",title:"两两交换链表中的节点",titleEn:"Swap Nodes in Pairs",category:"链表",difficulty:"中等",topic:"迭代 / 递归",completed:!0,leetcodeSlug:"swap-nodes-in-pairs",leetcodeUrl:"https://leetcode.cn/problems/swap-nodes-in-pairs/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E4%B8%A4%E4%B8%A4%E4%BA%A4%E6%8D%A2%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B9",acceptanceRate:75.1,solutionCount:7250,companyTagCount:88,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["链表","迭代 / 递归","递归"],sourcePath:"hot100/07_链表/24.两两交换链表中的节点.py",lastUpdated:"2026-08-28",lastUpdatedAt:"2026-08-28T09:54:42.821Z",interviewPattern:"画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",thoughts:[`需二刷：链表指针的交响乐，三步重连法
思路：使用虚拟头节点 dummy 统一边界情况。每次迭代维护 pre, nodeA, nodeB 三个节点。
按照 nodeA.next  nodeB.next, pre.next  nodeB, nodeB.next  nodeA 的顺序重连。
时间 O(N)，空间 O(1)
易错点/误区：
1. 变量只换名不换指向：不能只是 nodeA, nodeB  nodeB, nodeA 交换变量名，必须切实修改节点的 .next 属性。
2. pre 更新错误：交换后局部变为 pre -> nodeB -> nodeA -> next，下一轮的 pre 应该停在 nodeA 上。
3. 忘记更新状态变量：nodeA 和 nodeB 必须在 while 循环内部第一步获取，否则一直在交换同一对节点。`],pitfalls:[`需二刷：链表指针的交响乐，三步重连法
思路：使用虚拟头节点 dummy 统一边界情况。每次迭代维护 pre, nodeA, nodeB 三个节点。
按照 nodeA.next  nodeB.next, pre.next  nodeB, nodeB.next  nodeA 的顺序重连。
时间 O(N)，空间 O(1)
易错点/误区：
1. 变量只换名不换指向：不能只是 nodeA, nodeB  nodeB, nodeA 交换变量名，必须切实修改节点的 .next 属性。
2. pre 更新错误：交换后局部变为 pre -> nodeB -> nodeA -> next，下一轮的 pre 应该停在 nodeA 上。
3. 忘记更新状态变量：nodeA 和 nodeB 必须在 while 循环内部第一步获取，否则一直在交换同一对节点。`],recallBlanks:[],solutionGuide:{idea:`需二刷：链表指针的交响乐，三步重连法
思路：使用虚拟头节点 dummy 统一边界情况。每次迭代维护 pre, nodeA, nodeB 三个节点。
按照 nodeA.next  nodeB.next, pre.next  nodeB, nodeB.next  nodeA 的顺序重连。
时间 O(N)，空间 O(1)
易错点/误区：
1. 变量只换名不换指向：不能只是 nodeA, nodeB  nodeB, nodeA 交换变量名，必须切实修改节点的 .next 属性。
2. pre 更新错误：交换后局部变为 pre -> nodeB -> nodeA -> next，下一轮的 pre 应该停在 nodeA 上。
3. 忘记更新状态变量：nodeA 和 nodeB 必须在 while 循环内部第一步获取，否则一直在交换同一对节点。`,interviewSteps:["先说明核心考点：迭代 / 递归。","画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。","关键词：链表 / 迭代 / 递归 / 递归。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：链表指针的交响乐，三步重连法
思路：使用虚拟头节点 dummy 统一边界情况。每次迭代维护 pre, nodeA, nodeB 三个节点。
按照 nodeA.next  nodeB.next, pre.next  nodeB, nodeB.next  nodeA 的顺序重连。
时间 O(N)，空间 O(1)
易错点/误区：
1. 变量只换名不换指向：不能只是 nodeA, nodeB  nodeB, nodeA 交换变量名，必须切实修改节点的 .next 属性。
2. pre 更新错误：交换后局部变为 pre -> nodeB -> nodeA -> next，下一轮的 pre 应该停在 nodeA 上。
3. 忘记更新状态变量：nodeA 和 nodeB 必须在 while 循环内部第一步获取，否则一直在交换同一对节点。`},ask:"给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。",constraints:["- 0 <= Node.val <= 100"]},{id:"25",slug:"25-k-个一组翻转链表",title:"K 个一组翻转链表",titleEn:"Reverse Nodes in k-Group",category:"链表",difficulty:"困难",topic:"迭代 / 分组翻转",completed:!0,leetcodeSlug:"reverse-nodes-in-k-group",leetcodeUrl:"https://leetcode.cn/problems/reverse-nodes-in-k-group/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=K%20%E4%B8%AA%E4%B8%80%E7%BB%84%E7%BF%BB%E8%BD%AC%E9%93%BE%E8%A1%A8",acceptanceRate:70,solutionCount:6410,companyTagCount:98,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["链表","迭代 / 分组翻转","递归"],sourcePath:"hot100/07_链表/25.K 个一组翻转链表.py",lastUpdated:"2026-08-28",lastUpdatedAt:"2026-08-28T15:20:25.871Z",interviewPattern:"画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",thoughts:[`需二刷：分组探路 + 局部链表翻转与缝合
思路：使用 dummy 哨兵节点，每次先用 fast 探路 k 步，若不足 k 步直接返回 dummy.next；
若满足 k 步，则将这 k 个节点（slow.next 到 fast）进行就地翻转，并顺便缝合到下一组（pre 初始为 fast.next）；
翻转完成后将 slow.next 指向新头部 pre，并更新 slow 和 fast 准备下一轮。
时间 O(N)，空间 O(1)
易错点/误区：
1. 遍历方向误区：单链表没有前驱指针，无法「从后往前」倒着找节点。必须「人从前往后走（curr 从 slow.next 到 fast），但在行进中把箭头掉头指向 pre」。
2. 缝合初始值：局部翻转时，首个节点（原 slow.next）翻转后要接上后续链表，因此 pre 的初始值必须是下一组的头节点 fast.next，不能是 None。
3. curr 起点选错：待翻转的第一个节点是 slow.next，误写为 curr  slow 会把上一组的尾巴（甚至 dummy）卷入翻转。
4. 返回值错误：探路不足 k 个或全部结束时，必须返回整条链表的新头 dummy.next，而不是 slow.next。`],pitfalls:[`需二刷：分组探路 + 局部链表翻转与缝合
思路：使用 dummy 哨兵节点，每次先用 fast 探路 k 步，若不足 k 步直接返回 dummy.next；
若满足 k 步，则将这 k 个节点（slow.next 到 fast）进行就地翻转，并顺便缝合到下一组（pre 初始为 fast.next）；
翻转完成后将 slow.next 指向新头部 pre，并更新 slow 和 fast 准备下一轮。
时间 O(N)，空间 O(1)
易错点/误区：
1. 遍历方向误区：单链表没有前驱指针，无法「从后往前」倒着找节点。必须「人从前往后走（curr 从 slow.next 到 fast），但在行进中把箭头掉头指向 pre」。
2. 缝合初始值：局部翻转时，首个节点（原 slow.next）翻转后要接上后续链表，因此 pre 的初始值必须是下一组的头节点 fast.next，不能是 None。
3. curr 起点选错：待翻转的第一个节点是 slow.next，误写为 curr  slow 会把上一组的尾巴（甚至 dummy）卷入翻转。
4. 返回值错误：探路不足 k 个或全部结束时，必须返回整条链表的新头 dummy.next，而不是 slow.next。`],recallBlanks:[],solutionGuide:{idea:`需二刷：分组探路 + 局部链表翻转与缝合
思路：使用 dummy 哨兵节点，每次先用 fast 探路 k 步，若不足 k 步直接返回 dummy.next；
若满足 k 步，则将这 k 个节点（slow.next 到 fast）进行就地翻转，并顺便缝合到下一组（pre 初始为 fast.next）；
翻转完成后将 slow.next 指向新头部 pre，并更新 slow 和 fast 准备下一轮。
时间 O(N)，空间 O(1)
易错点/误区：
1. 遍历方向误区：单链表没有前驱指针，无法「从后往前」倒着找节点。必须「人从前往后走（curr 从 slow.next 到 fast），但在行进中把箭头掉头指向 pre」。
2. 缝合初始值：局部翻转时，首个节点（原 slow.next）翻转后要接上后续链表，因此 pre 的初始值必须是下一组的头节点 fast.next，不能是 None。
3. curr 起点选错：待翻转的第一个节点是 slow.next，误写为 curr  slow 会把上一组的尾巴（甚至 dummy）卷入翻转。
4. 返回值错误：探路不足 k 个或全部结束时，必须返回整条链表的新头 dummy.next，而不是 slow.next。`,interviewSteps:["先说明核心考点：迭代 / 分组翻转。","画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。","关键词：链表 / 迭代 / 分组翻转 / 递归。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：分组探路 + 局部链表翻转与缝合
思路：使用 dummy 哨兵节点，每次先用 fast 探路 k 步，若不足 k 步直接返回 dummy.next；
若满足 k 步，则将这 k 个节点（slow.next 到 fast）进行就地翻转，并顺便缝合到下一组（pre 初始为 fast.next）；
翻转完成后将 slow.next 指向新头部 pre，并更新 slow 和 fast 准备下一轮。
时间 O(N)，空间 O(1)
易错点/误区：
1. 遍历方向误区：单链表没有前驱指针，无法「从后往前」倒着找节点。必须「人从前往后走（curr 从 slow.next 到 fast），但在行进中把箭头掉头指向 pre」。
2. 缝合初始值：局部翻转时，首个节点（原 slow.next）翻转后要接上后续链表，因此 pre 的初始值必须是下一组的头节点 fast.next，不能是 None。
3. curr 起点选错：待翻转的第一个节点是 slow.next，误写为 curr  slow 会把上一组的尾巴（甚至 dummy）卷入翻转。
4. 返回值错误：探路不足 k 个或全部结束时，必须返回整条链表的新头 dummy.next，而不是 slow.next。`},ask:"给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。",constraints:["- 1 <= k <= n <= 5000","- 0 <= Node.val <= 1000"]},{id:"138",slug:"138-随机链表的复制",title:"随机链表的复制",titleEn:"Copy List with Random Pointer",category:"链表",difficulty:"中等",topic:"哈希表 / 两次遍历",completed:!0,leetcodeSlug:"copy-list-with-random-pointer",leetcodeUrl:"https://leetcode.cn/problems/copy-list-with-random-pointer/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E9%9A%8F%E6%9C%BA%E9%93%BE%E8%A1%A8%E7%9A%84%E5%A4%8D%E5%88%B6",acceptanceRate:70.6,solutionCount:2724,companyTagCount:79,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["链表","哈希表 / 两次遍历","哈希表"],sourcePath:"hot100/07_链表/138.随机链表的复制.py",lastUpdated:"2026-08-28",lastUpdatedAt:"2026-08-28T15:34:59.399Z",interviewPattern:"画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",thoughts:[`需二刷：哈希表映射新旧节点 + 两次遍历深拷贝
思路：
1. 第一遍遍历：只复制节点值，建立 {原节点: 新节点} 的映射字典 d，并预置 d[None]  None 简化边界处理。
2. 第二遍遍历：根据原节点的 next/random 连接新节点：d[cur].next  d[cur.next], d[cur].random  d[cur.random]。
时间 O(N)，空间 O(N)
易错点/误区：
1. 深拷贝混淆：第二轮连接时若误写成 d[cur].next  cur.next，新节点会指向原链表里的旧节点，破坏深拷贝。必须通过 d[cur.next] 和 d[cur.random] 连接对应的新节点。
2. 空指针越界：若未在哈希表中预置 d[None]  None，访问为 None 的 random 或 next 时会报 KeyError。`],pitfalls:[`需二刷：哈希表映射新旧节点 + 两次遍历深拷贝
思路：
1. 第一遍遍历：只复制节点值，建立 {原节点: 新节点} 的映射字典 d，并预置 d[None]  None 简化边界处理。
2. 第二遍遍历：根据原节点的 next/random 连接新节点：d[cur].next  d[cur.next], d[cur].random  d[cur.random]。
时间 O(N)，空间 O(N)
易错点/误区：
1. 深拷贝混淆：第二轮连接时若误写成 d[cur].next  cur.next，新节点会指向原链表里的旧节点，破坏深拷贝。必须通过 d[cur.next] 和 d[cur.random] 连接对应的新节点。
2. 空指针越界：若未在哈希表中预置 d[None]  None，访问为 None 的 random 或 next 时会报 KeyError。`],recallBlanks:[],solutionGuide:{idea:`需二刷：哈希表映射新旧节点 + 两次遍历深拷贝
思路：
1. 第一遍遍历：只复制节点值，建立 {原节点: 新节点} 的映射字典 d，并预置 d[None]  None 简化边界处理。
2. 第二遍遍历：根据原节点的 next/random 连接新节点：d[cur].next  d[cur.next], d[cur].random  d[cur.random]。
时间 O(N)，空间 O(N)
易错点/误区：
1. 深拷贝混淆：第二轮连接时若误写成 d[cur].next  cur.next，新节点会指向原链表里的旧节点，破坏深拷贝。必须通过 d[cur.next] 和 d[cur.random] 连接对应的新节点。
2. 空指针越界：若未在哈希表中预置 d[None]  None，访问为 None 的 random 或 next 时会报 KeyError。`,interviewSteps:["先说明核心考点：哈希表 / 两次遍历。","画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。","关键词：链表 / 哈希表 / 两次遍历 / 哈希表。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：哈希表映射新旧节点 + 两次遍历深拷贝
思路：
1. 第一遍遍历：只复制节点值，建立 {原节点: 新节点} 的映射字典 d，并预置 d[None]  None 简化边界处理。
2. 第二遍遍历：根据原节点的 next/random 连接新节点：d[cur].next  d[cur.next], d[cur].random  d[cur.random]。
时间 O(N)，空间 O(N)
易错点/误区：
1. 深拷贝混淆：第二轮连接时若误写成 d[cur].next  cur.next，新节点会指向原链表里的旧节点，破坏深拷贝。必须通过 d[cur.next] 和 d[cur.random] 连接对应的新节点。
2. 空指针越界：若未在哈希表中预置 d[None]  None，访问为 None 的 random 或 next 时会报 KeyError。`},ask:"给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。",constraints:["- 0 <= n <= 1000","- -10^4 <= Node.val <= 10^4"]},{id:"148",slug:"148-排序链表",title:"排序链表",titleEn:"Sort List",category:"链表",difficulty:"中等",topic:"归并排序",completed:!0,leetcodeSlug:"sort-list",leetcodeUrl:"https://leetcode.cn/problems/sort-list/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%8E%92%E5%BA%8F%E9%93%BE%E8%A1%A8",acceptanceRate:67.7,solutionCount:3674,companyTagCount:89,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["链表","归并排序","双指针","分治","排序"],sourcePath:"hot100/07_链表/148.排序链表.py",lastUpdated:"2026-08-28",lastUpdatedAt:"2026-08-28T16:28:14.622Z",interviewPattern:"画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。",thoughts:[`需二刷：归并排序链表（分治法 + 快慢指针切分中点 + 有序链表合并）
思路：自顶向下归并排序。
1. 递归基：head 为空或只有 1 个节点时已自然有序，直接返回。
2. 快慢指针找中点：fast 从 head.next 出发，slow 从 head 出发，保证偶数长度时断点落在前半段末尾。断开前后两段（slow.next  None）。
3. 递归分治：分别递归排序前半段和后半段。
4. 双指针合并：利用合并两个有序链表（第 21 题）的双指针/哨兵节点技巧将左右两段有序拼接。
时间 O(n log n)，空间 O(log n)（递归调用栈深度）
易错点/误区：
1. 遗漏递归基：若未在开头判断 if not head or not head.next: return head，单节点或空节点会继续切分导致 RecursionError（死循环栈溢出）。
2. 中点断开：切分时必须执行 slow.next  None 将链表斩断为两条独立链表，否则递归依然处理原长链表造成死循环。
3. 快指针起点与循环条件：fast 必须从 head.next 开始（让 slow 停在前半段末尾），循环条件必须是 while fast and fast.next 防止 fast.next.next 产生 NoneType AttributeError。`,"1. 递归基","3. 递归排序"],pitfalls:[`需二刷：归并排序链表（分治法 + 快慢指针切分中点 + 有序链表合并）
思路：自顶向下归并排序。
1. 递归基：head 为空或只有 1 个节点时已自然有序，直接返回。
2. 快慢指针找中点：fast 从 head.next 出发，slow 从 head 出发，保证偶数长度时断点落在前半段末尾。断开前后两段（slow.next  None）。
3. 递归分治：分别递归排序前半段和后半段。
4. 双指针合并：利用合并两个有序链表（第 21 题）的双指针/哨兵节点技巧将左右两段有序拼接。
时间 O(n log n)，空间 O(log n)（递归调用栈深度）
易错点/误区：
1. 遗漏递归基：若未在开头判断 if not head or not head.next: return head，单节点或空节点会继续切分导致 RecursionError（死循环栈溢出）。
2. 中点断开：切分时必须执行 slow.next  None 将链表斩断为两条独立链表，否则递归依然处理原长链表造成死循环。
3. 快指针起点与循环条件：fast 必须从 head.next 开始（让 slow 停在前半段末尾），循环条件必须是 while fast and fast.next 防止 fast.next.next 产生 NoneType AttributeError。`],recallBlanks:[],solutionGuide:{idea:`需二刷：归并排序链表（分治法 + 快慢指针切分中点 + 有序链表合并）
思路：自顶向下归并排序。
1. 递归基：head 为空或只有 1 个节点时已自然有序，直接返回。
2. 快慢指针找中点：fast 从 head.next 出发，slow 从 head 出发，保证偶数长度时断点落在前半段末尾。断开前后两段（slow.next  None）。
3. 递归分治：分别递归排序前半段和后半段。
4. 双指针合并：利用合并两个有序链表（第 21 题）的双指针/哨兵节点技巧将左右两段有序拼接。
时间 O(n log n)，空间 O(log n)（递归调用栈深度）
易错点/误区：
1. 遗漏递归基：若未在开头判断 if not head or not head.next: return head，单节点或空节点会继续切分导致 RecursionError（死循环栈溢出）。
2. 中点断开：切分时必须执行 slow.next  None 将链表斩断为两条独立链表，否则递归依然处理原长链表造成死循环。
3. 快指针起点与循环条件：fast 必须从 head.next 开始（让 slow 停在前半段末尾），循环条件必须是 while fast and fast.next 防止 fast.next.next 产生 NoneType AttributeError。`,interviewSteps:["先说明核心考点：归并排序。","画出 pre/cur/nxt 或 fast/slow 的关系，面试时先处理 dummy 节点和空链表边界。","关键词：链表 / 归并排序 / 双指针 / 分治。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：归并排序链表（分治法 + 快慢指针切分中点 + 有序链表合并）
思路：自顶向下归并排序。
1. 递归基：head 为空或只有 1 个节点时已自然有序，直接返回。
2. 快慢指针找中点：fast 从 head.next 出发，slow 从 head 出发，保证偶数长度时断点落在前半段末尾。断开前后两段（slow.next  None）。
3. 递归分治：分别递归排序前半段和后半段。
4. 双指针合并：利用合并两个有序链表（第 21 题）的双指针/哨兵节点技巧将左右两段有序拼接。
时间 O(n log n)，空间 O(log n)（递归调用栈深度）
易错点/误区：
1. 遗漏递归基：若未在开头判断 if not head or not head.next: return head，单节点或空节点会继续切分导致 RecursionError（死循环栈溢出）。
2. 中点断开：切分时必须执行 slow.next  None 将链表斩断为两条独立链表，否则递归依然处理原长链表造成死循环。
3. 快指针起点与循环条件：fast 必须从 head.next 开始（让 slow 停在前半段末尾），循环条件必须是 while fast and fast.next 防止 fast.next.next 产生 NoneType AttributeError。`},ask:"给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。",constraints:["- -10^5 <= Node.val <= 10^5"]},{id:"94",slug:"94-二叉树的中序遍历",title:"二叉树的中序遍历",titleEn:"Binary Tree Inorder Traversal",category:"二叉树",difficulty:"简单",topic:"递归 / 栈",completed:!0,leetcodeSlug:"binary-tree-inorder-traversal",leetcodeUrl:"https://leetcode.cn/problems/binary-tree-inorder-traversal/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E4%B8%AD%E5%BA%8F%E9%81%8D%E5%8E%86",acceptanceRate:78.3,solutionCount:6195,companyTagCount:88,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["二叉树","递归 / 栈","栈","树","深度优先搜索"],sourcePath:"hot100/08_二叉树/94.二叉树的中序遍历.py",lastUpdated:"2026-03-16",lastUpdatedAt:"2026-03-16T10:38:44.978Z",interviewPattern:"先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",thoughts:[`题目：给定二叉树的根节点 root，返回中序遍历结果
中序遍历顺序：左子树 → 根节点 → 右子树
示例：[1,null,2,3] → [1,3,2]
解法一：递归（直观好理解）
思路：对每个节点，先递归左子树，再记录自己，最后递归右子树
时间 O(n)  空间 O(n)`,`--- 递归方法 ---
class Solution:
def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
result  []
def dfs(node):
if not node: return         # 终止条件：空节点
dfs(node.left)              # 1. 先递归左子树
result.append(node.val)     # 2. 记录当前节点（根在中间）
dfs(node.right)             # 3. 再递归右子树
dfs(root)
return result`,`解法二：迭代（用栈模拟递归）
思路：不断"向左走到底→弹出记录→转向右子树"
时间 O(n)  空间 O(n)`,"--- 迭代方法：栈 ---"],pitfalls:["本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"],recallBlanks:[{prompt:`解法二：迭代（用＿＿＿模拟＿＿＿）
思路：不断"向左走到底→弹出记录→转向右子树"
时间 O(n)  空间 O(n)`,answer:"栈"}],solutionGuide:{idea:`题目：给定二叉树的根节点 root，返回中序遍历结果
中序遍历顺序：左子树 → 根节点 → 右子树
示例：[1,null,2,3] → [1,3,2]
解法一：递归（直观好理解）
思路：对每个节点，先递归左子树，再记录自己，最后递归右子树
时间 O(n)  空间 O(n)`,interviewSteps:["先说明核心考点：递归 / 栈。","先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。","关键词：二叉树 / 递归 / 栈 / 栈 / 树。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:"本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"},ask:"给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。",constraints:["- -100 <= Node.val <= 100"]},{id:"104",slug:"104-二叉树的最大深度",title:"二叉树的最大深度",titleEn:"Maximum Depth of Binary Tree",category:"二叉树",difficulty:"简单",topic:"DFS",completed:!0,leetcodeSlug:"maximum-depth-of-binary-tree",leetcodeUrl:"https://leetcode.cn/problems/maximum-depth-of-binary-tree/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%A4%A7%E6%B7%B1%E5%BA%A6",acceptanceRate:79.1,solutionCount:7452,companyTagCount:103,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["二叉树","DFS","树","深度优先搜索","广度优先搜索"],sourcePath:"hot100/08_二叉树/104.二叉树的最大深度.py",lastUpdated:"2026-03-19",lastUpdatedAt:"2026-03-19T10:58:09.850Z",interviewPattern:"先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",thoughts:[`Definition for a binary tree node.
class TreeNode:
def __init__(self, val0, leftNone, rightNone):
self.val  val
self.left  left
self.right  right
思路：递归求深度，当前节点深度  max(左子树深度, 右子树深度) + 1
时间 O(n)，空间 O(h)，h 为树高
易错点/误区：
1. 别忘了 +1（当前节点自己也算一层）
2. 类方法递归调用要用 self.maxDepth()，不能直接写 maxDepth()`],pitfalls:[`Definition for a binary tree node.
class TreeNode:
def __init__(self, val0, leftNone, rightNone):
self.val  val
self.left  left
self.right  right
思路：递归求深度，当前节点深度  max(左子树深度, 右子树深度) + 1
时间 O(n)，空间 O(h)，h 为树高
易错点/误区：
1. 别忘了 +1（当前节点自己也算一层）
2. 类方法递归调用要用 self.maxDepth()，不能直接写 maxDepth()`],recallBlanks:[],solutionGuide:{idea:`Definition for a binary tree node.
class TreeNode:
def __init__(self, val0, leftNone, rightNone):
self.val  val
self.left  left
self.right  right
思路：递归求深度，当前节点深度  max(左子树深度, 右子树深度) + 1
时间 O(n)，空间 O(h)，h 为树高
易错点/误区：
1. 别忘了 +1（当前节点自己也算一层）
2. 类方法递归调用要用 self.maxDepth()，不能直接写 maxDepth()`,interviewSteps:["先说明核心考点：DFS。","先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。","关键词：二叉树 / DFS / 树 / 深度优先搜索。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`Definition for a binary tree node.
class TreeNode:
def __init__(self, val0, leftNone, rightNone):
self.val  val
self.left  left
self.right  right
思路：递归求深度，当前节点深度  max(左子树深度, 右子树深度) + 1
时间 O(n)，空间 O(h)，h 为树高
易错点/误区：
1. 别忘了 +1（当前节点自己也算一层）
2. 类方法递归调用要用 self.maxDepth()，不能直接写 maxDepth()`},ask:"给定一个二叉树 root ，返回其最大深度。",constraints:["- -100 <= Node.val <= 100"]},{id:"226",slug:"226-翻转二叉树",title:"翻转二叉树",titleEn:"Invert Binary Tree",category:"二叉树",difficulty:"简单",topic:"递归",completed:!0,leetcodeSlug:"invert-binary-tree",leetcodeUrl:"https://leetcode.cn/problems/invert-binary-tree/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E7%BF%BB%E8%BD%AC%E4%BA%8C%E5%8F%89%E6%A0%91",acceptanceRate:82.5,solutionCount:6103,companyTagCount:82,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["二叉树","递归","树","深度优先搜索","广度优先搜索"],sourcePath:"hot100/08_二叉树/226.翻转二叉树.py",lastUpdated:"2026-03-19",lastUpdatedAt:"2026-03-19T08:14:32.715Z",interviewPattern:"先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",thoughts:[`Definition for a binary tree node.
class TreeNode:
def __init__(self, val0, leftNone, rightNone):
self.val  val
self.left  left
self.right  right
思路：翻转  每个节点的左右孩子互换，然后递归翻转子树
时间 O(n)，空间 O(h)，h 为树高（递归栈深度）
易错点/误区：
1. 翻转是交换节点引用（node.left, node.right 互换），不是交换 .val
2. None 节点也能参与交换，不需要对"一个孩子为 None"单独处理
3. Python 可以用 a, b  b, a 一行完成交换，不需要 tmp 变量`,"递归"],pitfalls:[`Definition for a binary tree node.
class TreeNode:
def __init__(self, val0, leftNone, rightNone):
self.val  val
self.left  left
self.right  right
思路：翻转  每个节点的左右孩子互换，然后递归翻转子树
时间 O(n)，空间 O(h)，h 为树高（递归栈深度）
易错点/误区：
1. 翻转是交换节点引用（node.left, node.right 互换），不是交换 .val
2. None 节点也能参与交换，不需要对"一个孩子为 None"单独处理
3. Python 可以用 a, b  b, a 一行完成交换，不需要 tmp 变量`],recallBlanks:[],solutionGuide:{idea:`Definition for a binary tree node.
class TreeNode:
def __init__(self, val0, leftNone, rightNone):
self.val  val
self.left  left
self.right  right
思路：翻转  每个节点的左右孩子互换，然后递归翻转子树
时间 O(n)，空间 O(h)，h 为树高（递归栈深度）
易错点/误区：
1. 翻转是交换节点引用（node.left, node.right 互换），不是交换 .val
2. None 节点也能参与交换，不需要对"一个孩子为 None"单独处理
3. Python 可以用 a, b  b, a 一行完成交换，不需要 tmp 变量`,interviewSteps:["先说明核心考点：递归。","先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。","关键词：二叉树 / 递归 / 树 / 深度优先搜索。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`Definition for a binary tree node.
class TreeNode:
def __init__(self, val0, leftNone, rightNone):
self.val  val
self.left  left
self.right  right
思路：翻转  每个节点的左右孩子互换，然后递归翻转子树
时间 O(n)，空间 O(h)，h 为树高（递归栈深度）
易错点/误区：
1. 翻转是交换节点引用（node.left, node.right 互换），不是交换 .val
2. None 节点也能参与交换，不需要对"一个孩子为 None"单独处理
3. Python 可以用 a, b  b, a 一行完成交换，不需要 tmp 变量`},ask:"给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。",constraints:["- -100 <= Node.val <= 100"]},{id:"101",slug:"101-对称二叉树",title:"对称二叉树",titleEn:"Symmetric Tree",category:"二叉树",difficulty:"简单",topic:"递归 / 队列",completed:!0,leetcodeSlug:"symmetric-tree",leetcodeUrl:"https://leetcode.cn/problems/symmetric-tree/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E5%AF%B9%E7%A7%B0%E4%BA%8C%E5%8F%89%E6%A0%91",acceptanceRate:63.9,solutionCount:6529,companyTagCount:92,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["二叉树","递归 / 队列","树","深度优先搜索","广度优先搜索"],sourcePath:"hot100/08_二叉树/101.对称二叉树.py",lastUpdated:"2026-03-19",lastUpdatedAt:"2026-03-19T07:37:10.455Z",interviewPattern:"先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",thoughts:[`Definition for a binary tree node.
class TreeNode:
def __init__(self, val0, leftNone, rightNone):
self.val  val
self.left  left
self.right  right
需二刷：栈存配对节点 / 递归对称比较
思路：对称  左子树和右子树互为镜像
每次比较一对节点（左的左 配 右的右，左的右 配 右的左）
时间 O(n)，空间 O(n)
易错点/误区：
1. 栈方法中 while 条件不能写 while root.left and root.right（永远不变，死循环），应该写 while stack
2. 栈里每次 pop 两个、append 两个一组，栈元素有顺序不是"并列"
3. 不能只比较值不比较结构：跳过 None 会丢失结构信息，导致结构不同但值相同的树误判为对称
4. 递归调用必须 return，不 return 结果会丢失
5. 递归中最后一步要用 and 连接两个子问题，两个都对称才是真的对称`,`方法一：栈（迭代）
核心：栈里成对存入需要比较的节点，每次弹出一对来比较
if not root: return True
stack  [root.left, root.right]       # 初始放入第一对
while stack:                          # 栈不空就继续
nodeR  stack.pop()               # 后进先出，先弹右
nodeL  stack.pop()               # 再弹左
if not nodeL and not nodeR:       # 都是 None → 这一对 OK，继续
continue
if not nodeL or not nodeR:        # 一个 None 一个不是 → 不对称
return False
if nodeL.val ! nodeR.val:        # 值不等 → 不对称
return False
stack.append(nodeL.left)          # 外侧对：左的左 配 右的右
stack.append(nodeR.right)
stack.append(nodeL.right)         # 内侧对：左的右 配 右的左
stack.append(nodeR.left)
return True`,`方法二：递归
核心：check(left, right) 判断两个节点是否互为镜像`],pitfalls:[`Definition for a binary tree node.
class TreeNode:
def __init__(self, val0, leftNone, rightNone):
self.val  val
self.left  left
self.right  right
需二刷：栈存配对节点 / 递归对称比较
思路：对称  左子树和右子树互为镜像
每次比较一对节点（左的左 配 右的右，左的右 配 右的左）
时间 O(n)，空间 O(n)
易错点/误区：
1. 栈方法中 while 条件不能写 while root.left and root.right（永远不变，死循环），应该写 while stack
2. 栈里每次 pop 两个、append 两个一组，栈元素有顺序不是"并列"
3. 不能只比较值不比较结构：跳过 None 会丢失结构信息，导致结构不同但值相同的树误判为对称
4. 递归调用必须 return，不 return 结果会丢失
5. 递归中最后一步要用 and 连接两个子问题，两个都对称才是真的对称`],recallBlanks:[{prompt:`方法二：＿＿＿
核心：check(left, right) 判断两个节点是否互为镜像`,answer:"递归"}],solutionGuide:{idea:`Definition for a binary tree node.
class TreeNode:
def __init__(self, val0, leftNone, rightNone):
self.val  val
self.left  left
self.right  right
需二刷：栈存配对节点 / 递归对称比较
思路：对称  左子树和右子树互为镜像
每次比较一对节点（左的左 配 右的右，左的右 配 右的左）
时间 O(n)，空间 O(n)
易错点/误区：
1. 栈方法中 while 条件不能写 while root.left and root.right（永远不变，死循环），应该写 while stack
2. 栈里每次 pop 两个、append 两个一组，栈元素有顺序不是"并列"
3. 不能只比较值不比较结构：跳过 None 会丢失结构信息，导致结构不同但值相同的树误判为对称
4. 递归调用必须 return，不 return 结果会丢失
5. 递归中最后一步要用 and 连接两个子问题，两个都对称才是真的对称`,interviewSteps:["先说明核心考点：递归 / 队列。","先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。","关键词：二叉树 / 递归 / 队列 / 树 / 深度优先搜索。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`Definition for a binary tree node.
class TreeNode:
def __init__(self, val0, leftNone, rightNone):
self.val  val
self.left  left
self.right  right
需二刷：栈存配对节点 / 递归对称比较
思路：对称  左子树和右子树互为镜像
每次比较一对节点（左的左 配 右的右，左的右 配 右的左）
时间 O(n)，空间 O(n)
易错点/误区：
1. 栈方法中 while 条件不能写 while root.left and root.right（永远不变，死循环），应该写 while stack
2. 栈里每次 pop 两个、append 两个一组，栈元素有顺序不是"并列"
3. 不能只比较值不比较结构：跳过 None 会丢失结构信息，导致结构不同但值相同的树误判为对称
4. 递归调用必须 return，不 return 结果会丢失
5. 递归中最后一步要用 and 连接两个子问题，两个都对称才是真的对称`},ask:"给你一个二叉树的根节点 root ， 检查它是否轴对称。",constraints:["- -100 <= Node.val <= 100"]},{id:"543",slug:"543-二叉树的直径",title:"二叉树的直径",titleEn:"Diameter of Binary Tree",category:"二叉树",difficulty:"简单",topic:"DFS",completed:!0,leetcodeSlug:"diameter-of-binary-tree",leetcodeUrl:"https://leetcode.cn/problems/diameter-of-binary-tree/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E7%9B%B4%E5%BE%84",acceptanceRate:64.4,solutionCount:3438,companyTagCount:75,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["二叉树","DFS","树","深度优先搜索","树形 DP"],sourcePath:"hot100/08_二叉树/543.二叉树的直径.py",lastUpdated:"2026-03-19",lastUpdatedAt:"2026-03-19T09:23:26.105Z",interviewPattern:"先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",thoughts:[`Definition for a binary tree node.
class TreeNode:
def __init__(self, val0, leftNone, rightNone):
self.val  val
self.left  left
self.right  right
需二刷：在求深度的递归中"顺便"更新全局最大直径
思路：直径  某个节点的左子树深度 + 右子树深度 + 2（边数）
在递归求深度时，顺便用 self.ans 记录经过每个节点的最大路径长度
时间 O(n)，空间 O(h)，h 为树高
易错点/误区：
1. 直径不一定经过根节点！所以不能只算根的左深度+右深度
2. None 返回 -1（边数计算）时，直径公式要 +2；None 返回 0（节点数计算）时，直径公式不用 +2
3. 深度用 max(左,右)+1，直径用 左+右+2，别搞混
4. 函数返回的是"深度"，直径通过 self.ans 在过程中更新，不能用返回值传递直径`],pitfalls:[`Definition for a binary tree node.
class TreeNode:
def __init__(self, val0, leftNone, rightNone):
self.val  val
self.left  left
self.right  right
需二刷：在求深度的递归中"顺便"更新全局最大直径
思路：直径  某个节点的左子树深度 + 右子树深度 + 2（边数）
在递归求深度时，顺便用 self.ans 记录经过每个节点的最大路径长度
时间 O(n)，空间 O(h)，h 为树高
易错点/误区：
1. 直径不一定经过根节点！所以不能只算根的左深度+右深度
2. None 返回 -1（边数计算）时，直径公式要 +2；None 返回 0（节点数计算）时，直径公式不用 +2
3. 深度用 max(左,右)+1，直径用 左+右+2，别搞混
4. 函数返回的是"深度"，直径通过 self.ans 在过程中更新，不能用返回值传递直径`],recallBlanks:[],solutionGuide:{idea:`Definition for a binary tree node.
class TreeNode:
def __init__(self, val0, leftNone, rightNone):
self.val  val
self.left  left
self.right  right
需二刷：在求深度的递归中"顺便"更新全局最大直径
思路：直径  某个节点的左子树深度 + 右子树深度 + 2（边数）
在递归求深度时，顺便用 self.ans 记录经过每个节点的最大路径长度
时间 O(n)，空间 O(h)，h 为树高
易错点/误区：
1. 直径不一定经过根节点！所以不能只算根的左深度+右深度
2. None 返回 -1（边数计算）时，直径公式要 +2；None 返回 0（节点数计算）时，直径公式不用 +2
3. 深度用 max(左,右)+1，直径用 左+右+2，别搞混
4. 函数返回的是"深度"，直径通过 self.ans 在过程中更新，不能用返回值传递直径`,interviewSteps:["先说明核心考点：DFS。","先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。","关键词：二叉树 / DFS / 树 / 深度优先搜索。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`Definition for a binary tree node.
class TreeNode:
def __init__(self, val0, leftNone, rightNone):
self.val  val
self.left  left
self.right  right
需二刷：在求深度的递归中"顺便"更新全局最大直径
思路：直径  某个节点的左子树深度 + 右子树深度 + 2（边数）
在递归求深度时，顺便用 self.ans 记录经过每个节点的最大路径长度
时间 O(n)，空间 O(h)，h 为树高
易错点/误区：
1. 直径不一定经过根节点！所以不能只算根的左深度+右深度
2. None 返回 -1（边数计算）时，直径公式要 +2；None 返回 0（节点数计算）时，直径公式不用 +2
3. 深度用 max(左,右)+1，直径用 左+右+2，别搞混
4. 函数返回的是"深度"，直径通过 self.ans 在过程中更新，不能用返回值传递直径`},ask:"给你一棵二叉树的根节点，返回该树的 直径 。",constraints:["- -100 <= Node.val <= 100"]},{id:"102",slug:"102-二叉树的层序遍历",title:"二叉树的层序遍历",titleEn:"Binary Tree Level Order Traversal",category:"二叉树",difficulty:"中等",topic:"BFS",completed:!0,leetcodeSlug:"binary-tree-level-order-traversal",leetcodeUrl:"https://leetcode.cn/problems/binary-tree-level-order-traversal/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%B1%82%E5%BA%8F%E9%81%8D%E5%8E%86",acceptanceRate:70.8,solutionCount:6554,companyTagCount:134,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["二叉树","BFS","树","广度优先搜索"],sourcePath:"hot100/08_二叉树/102.二叉树的层序遍历.py",lastUpdated:"2026-03-20",lastUpdatedAt:"2026-03-20T12:14:23.814Z",interviewPattern:"先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",thoughts:[`Definition for a binary tree node.
class TreeNode:
def __init__(self, val0, leftNone, rightNone):
self.val  val
self.left  left
self.right  right
需二刷：BFS 层序遍历模板题
思路：用队列 BFS，每轮通过 len(queue) 确定当前层节点数，按层分组
时间 O(n)，空间 O(n)（队列最多存一层的节点）
易错点/误区：
1. queue 里放的是节点对象，不是值（需要访问 .left/.right）
2. deque([root]) 不是 deque(root)（deque 接收可迭代对象，会逐个拆开）
3. 入队孩子要判空：if node.left，否则 None.val 报错
4. result 初始化为 []，不是 [[]]
5. queue.append() 是往已有队列加，不要用 queue  deque(...) 覆盖整个队列`,"方法一：BFS（面试首推 ⭐⭐⭐）",`方法二：DFS（面试备选）
用递归 DFS，通过 depth 参数知道当前在第几层
def levelOrder(self, root):
result  []
def dfs(node, depth):
if not node:
return
if depth  len(result):     # 第一次到这层，新建子列表
result.append([])
result[depth].append(node.val)
dfs(node.left, depth + 1)
dfs(node.right, depth + 1)
dfs(root, 0)
return result`],pitfalls:[`Definition for a binary tree node.
class TreeNode:
def __init__(self, val0, leftNone, rightNone):
self.val  val
self.left  left
self.right  right
需二刷：BFS 层序遍历模板题
思路：用队列 BFS，每轮通过 len(queue) 确定当前层节点数，按层分组
时间 O(n)，空间 O(n)（队列最多存一层的节点）
易错点/误区：
1. queue 里放的是节点对象，不是值（需要访问 .left/.right）
2. deque([root]) 不是 deque(root)（deque 接收可迭代对象，会逐个拆开）
3. 入队孩子要判空：if node.left，否则 None.val 报错
4. result 初始化为 []，不是 [[]]
5. queue.append() 是往已有队列加，不要用 queue  deque(...) 覆盖整个队列`],recallBlanks:[{prompt:"方法一：＿＿＿（面试首推 ⭐⭐⭐）",answer:"BFS"}],solutionGuide:{idea:`Definition for a binary tree node.
class TreeNode:
def __init__(self, val0, leftNone, rightNone):
self.val  val
self.left  left
self.right  right
需二刷：BFS 层序遍历模板题
思路：用队列 BFS，每轮通过 len(queue) 确定当前层节点数，按层分组
时间 O(n)，空间 O(n)（队列最多存一层的节点）
易错点/误区：
1. queue 里放的是节点对象，不是值（需要访问 .left/.right）
2. deque([root]) 不是 deque(root)（deque 接收可迭代对象，会逐个拆开）
3. 入队孩子要判空：if node.left，否则 None.val 报错
4. result 初始化为 []，不是 [[]]
5. queue.append() 是往已有队列加，不要用 queue  deque(...) 覆盖整个队列`,interviewSteps:["先说明核心考点：BFS。","先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。","关键词：二叉树 / BFS / 树 / 广度优先搜索。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`Definition for a binary tree node.
class TreeNode:
def __init__(self, val0, leftNone, rightNone):
self.val  val
self.left  left
self.right  right
需二刷：BFS 层序遍历模板题
思路：用队列 BFS，每轮通过 len(queue) 确定当前层节点数，按层分组
时间 O(n)，空间 O(n)（队列最多存一层的节点）
易错点/误区：
1. queue 里放的是节点对象，不是值（需要访问 .left/.right）
2. deque([root]) 不是 deque(root)（deque 接收可迭代对象，会逐个拆开）
3. 入队孩子要判空：if node.left，否则 None.val 报错
4. result 初始化为 []，不是 [[]]
5. queue.append() 是往已有队列加，不要用 queue  deque(...) 覆盖整个队列`},ask:"给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。",constraints:["- -1000 <= Node.val <= 1000"]},{id:"108",slug:"108-将有序数组转换为二叉搜索树",title:"将有序数组转换为二叉搜索树",titleEn:"Convert Sorted Array to Binary Search Tree",category:"二叉树",difficulty:"简单",topic:"递归构建",completed:!0,leetcodeSlug:"convert-sorted-array-to-binary-search-tree",leetcodeUrl:"https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E5%B0%86%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E8%BD%AC%E6%8D%A2%E4%B8%BA%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91",acceptanceRate:80.6,solutionCount:3222,companyTagCount:63,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["二叉树","递归构建","树","二叉搜索树","数组","分治"],sourcePath:"hot100/08_二叉树/108.将有序数组转换为二叉搜索树.py",lastUpdated:"2026-03-19",lastUpdatedAt:"2026-03-19T11:42:34.444Z",interviewPattern:"先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",thoughts:["核心考点：递归构建","先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。"],pitfalls:["本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"],recallBlanks:[{prompt:"先选 ＿＿＿/＿＿＿，再说＿＿＿函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",answer:"DFS"}],solutionGuide:{idea:"核心考点：递归构建",interviewSteps:["先说明核心考点：递归构建。","先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。","关键词：二叉树 / 递归构建 / 树 / 二叉搜索树。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:"本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"},ask:"给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 平衡 二叉搜索树。",constraints:["- 1 <= nums.length <= 10^4","- -10^4 <= nums[i] <= 10^4"]},{id:"98",slug:"98-验证二叉搜索树",title:"验证二叉搜索树",titleEn:"Validate Binary Search Tree",category:"二叉树",difficulty:"中等",topic:"中序遍历 / 区间递归",completed:!0,leetcodeSlug:"validate-binary-search-tree",leetcodeUrl:"https://leetcode.cn/problems/validate-binary-search-tree/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E9%AA%8C%E8%AF%81%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91",acceptanceRate:41.4,solutionCount:5873,companyTagCount:97,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["二叉树","中序遍历 / 区间递归","树","深度优先搜索","二叉搜索树"],sourcePath:"hot100/08_二叉树/98.验证二叉搜索树.py",lastUpdated:"2026-08-28",lastUpdatedAt:"2026-08-28T19:43:18.288Z",interviewPattern:"先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",thoughts:[`需二刷：二叉搜索树性质验证（中序遍历单调性 / 递归有效上下界约束）
思路：
方法一（递归区间法/上下界法）：每个节点值必须落在合法的开区间 (lower, upper) 内。
- 往左走时：上界收窄为当前节点值 (lower, node.val)
- 往右走时：下界收窄为当前节点值 (node.val, upper)
方法二（中序遍历收集数组法）：BST 的中序遍历（左->根->右）必定是严格递增的。
- 先中序遍历生成数组，再遍历检查数组相邻元素是否满足 res[i] > res[i-1]。
方法三（中序遍历边遍历边校验法）：维护前驱节点值 prev，一旦当前节点 < prev 则提前剪枝返回 False。
时间 O(n)，空间 O(n)（最坏情况下树退化为链表时的递归栈深度）
易错点/误区：
1. 局部比较陷阱：只比较父子节点 (root.left.val < root.val < root.right.val) 无法保证整棵子树合法（例如右子树深处存在比根节点还小的值）。
2. 严格递增要求：BST 要求左子树严格小于、右子树严格大于，出现相同值（如 [2,2,2]）必须返回 False（需用 < 判断非递增）。
3. 初始极小值：初始下界需设为 -float('inf')，防止第一个节点为负数（如 32 位整型最小值 -2147483648）时被误判。`,"方法一：递归传递上下界区间（最简洁优雅，推荐）","递归校验左子树（上界变为当前值）和右子树（下界变为当前值）"],pitfalls:[`需二刷：二叉搜索树性质验证（中序遍历单调性 / 递归有效上下界约束）
思路：
方法一（递归区间法/上下界法）：每个节点值必须落在合法的开区间 (lower, upper) 内。
- 往左走时：上界收窄为当前节点值 (lower, node.val)
- 往右走时：下界收窄为当前节点值 (node.val, upper)
方法二（中序遍历收集数组法）：BST 的中序遍历（左->根->右）必定是严格递增的。
- 先中序遍历生成数组，再遍历检查数组相邻元素是否满足 res[i] > res[i-1]。
方法三（中序遍历边遍历边校验法）：维护前驱节点值 prev，一旦当前节点 < prev 则提前剪枝返回 False。
时间 O(n)，空间 O(n)（最坏情况下树退化为链表时的递归栈深度）
易错点/误区：
1. 局部比较陷阱：只比较父子节点 (root.left.val < root.val < root.right.val) 无法保证整棵子树合法（例如右子树深处存在比根节点还小的值）。
2. 严格递增要求：BST 要求左子树严格小于、右子树严格大于，出现相同值（如 [2,2,2]）必须返回 False（需用 < 判断非递增）。
3. 初始极小值：初始下界需设为 -float('inf')，防止第一个节点为负数（如 32 位整型最小值 -2147483648）时被误判。`],recallBlanks:[{prompt:"方法一：＿＿＿传递上下界区间（最简洁优雅，推荐）",answer:"递归"}],solutionGuide:{idea:`需二刷：二叉搜索树性质验证（中序遍历单调性 / 递归有效上下界约束）
思路：
方法一（递归区间法/上下界法）：每个节点值必须落在合法的开区间 (lower, upper) 内。
- 往左走时：上界收窄为当前节点值 (lower, node.val)
- 往右走时：下界收窄为当前节点值 (node.val, upper)
方法二（中序遍历收集数组法）：BST 的中序遍历（左->根->右）必定是严格递增的。
- 先中序遍历生成数组，再遍历检查数组相邻元素是否满足 res[i] > res[i-1]。
方法三（中序遍历边遍历边校验法）：维护前驱节点值 prev，一旦当前节点 < prev 则提前剪枝返回 False。
时间 O(n)，空间 O(n)（最坏情况下树退化为链表时的递归栈深度）
易错点/误区：
1. 局部比较陷阱：只比较父子节点 (root.left.val < root.val < root.right.val) 无法保证整棵子树合法（例如右子树深处存在比根节点还小的值）。
2. 严格递增要求：BST 要求左子树严格小于、右子树严格大于，出现相同值（如 [2,2,2]）必须返回 False（需用 < 判断非递增）。
3. 初始极小值：初始下界需设为 -float('inf')，防止第一个节点为负数（如 32 位整型最小值 -2147483648）时被误判。`,interviewSteps:["先说明核心考点：中序遍历 / 区间递归。","先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。","关键词：二叉树 / 中序遍历 / 区间递归 / 树 / 深度优先搜索。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：二叉搜索树性质验证（中序遍历单调性 / 递归有效上下界约束）
思路：
方法一（递归区间法/上下界法）：每个节点值必须落在合法的开区间 (lower, upper) 内。
- 往左走时：上界收窄为当前节点值 (lower, node.val)
- 往右走时：下界收窄为当前节点值 (node.val, upper)
方法二（中序遍历收集数组法）：BST 的中序遍历（左->根->右）必定是严格递增的。
- 先中序遍历生成数组，再遍历检查数组相邻元素是否满足 res[i] > res[i-1]。
方法三（中序遍历边遍历边校验法）：维护前驱节点值 prev，一旦当前节点 < prev 则提前剪枝返回 False。
时间 O(n)，空间 O(n)（最坏情况下树退化为链表时的递归栈深度）
易错点/误区：
1. 局部比较陷阱：只比较父子节点 (root.left.val < root.val < root.right.val) 无法保证整棵子树合法（例如右子树深处存在比根节点还小的值）。
2. 严格递增要求：BST 要求左子树严格小于、右子树严格大于，出现相同值（如 [2,2,2]）必须返回 False（需用 < 判断非递增）。
3. 初始极小值：初始下界需设为 -float('inf')，防止第一个节点为负数（如 32 位整型最小值 -2147483648）时被误判。`},ask:"给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。",constraints:["- -2^31 <= Node.val <= 2^31 - 1"]},{id:"230",slug:"230-二叉搜索树中第-k-小的元素",title:"二叉搜索树中第 K 小的元素",titleEn:"Kth Smallest Element in a BST",category:"二叉树",difficulty:"中等",topic:"中序遍历 + nonlocal 计数器",completed:!0,leetcodeSlug:"kth-smallest-element-in-a-bst",leetcodeUrl:"https://leetcode.cn/problems/kth-smallest-element-in-a-bst/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%AD%E7%AC%AC%20K%20%E5%B0%8F%E7%9A%84%E5%85%83%E7%B4%A0",acceptanceRate:79.8,solutionCount:3142,companyTagCount:48,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["二叉树","中序遍历 + nonlocal 计数器","树","深度优先搜索","二叉搜索树"],sourcePath:"hot100/08_二叉树/230.二叉搜索树中第 K 小的元素.py",lastUpdated:"2026-08-30",lastUpdatedAt:"2026-08-30T17:10:05.094Z",interviewPattern:"先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",thoughts:[`需二刷：BST 中序遍历  升序序列，nonlocal 维护计数器
思路：对 BST 做中序遍历（左→根→右），计数到第 k 个节点即为答案
时间 O(H + k)，H 为树高；空间 O(H)，递归栈深度
易错点/误区：
1. 混淆 node.val 和 node.left.val：处理当前节点时记录 node.val，不是子节点的值
2. return 放在 resnode.val 之前：导致赋值语句成为死代码
3. 基本情况写成 if not node and count  0：只需判断 if not node 即可
4. nonlocal 要声明所有外层变量（count 和 res 都要写）`],pitfalls:[`需二刷：BST 中序遍历  升序序列，nonlocal 维护计数器
思路：对 BST 做中序遍历（左→根→右），计数到第 k 个节点即为答案
时间 O(H + k)，H 为树高；空间 O(H)，递归栈深度
易错点/误区：
1. 混淆 node.val 和 node.left.val：处理当前节点时记录 node.val，不是子节点的值
2. return 放在 resnode.val 之前：导致赋值语句成为死代码
3. 基本情况写成 if not node and count  0：只需判断 if not node 即可
4. nonlocal 要声明所有外层变量（count 和 res 都要写）`],recallBlanks:[],solutionGuide:{idea:`需二刷：BST 中序遍历  升序序列，nonlocal 维护计数器
思路：对 BST 做中序遍历（左→根→右），计数到第 k 个节点即为答案
时间 O(H + k)，H 为树高；空间 O(H)，递归栈深度
易错点/误区：
1. 混淆 node.val 和 node.left.val：处理当前节点时记录 node.val，不是子节点的值
2. return 放在 resnode.val 之前：导致赋值语句成为死代码
3. 基本情况写成 if not node and count  0：只需判断 if not node 即可
4. nonlocal 要声明所有外层变量（count 和 res 都要写）`,interviewSteps:["先说明核心考点：中序遍历 + nonlocal 计数器。","先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。","关键词：二叉树 / 中序遍历 + nonlocal 计数器 / 树 / 深度优先搜索。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：BST 中序遍历  升序序列，nonlocal 维护计数器
思路：对 BST 做中序遍历（左→根→右），计数到第 k 个节点即为答案
时间 O(H + k)，H 为树高；空间 O(H)，递归栈深度
易错点/误区：
1. 混淆 node.val 和 node.left.val：处理当前节点时记录 node.val，不是子节点的值
2. return 放在 resnode.val 之前：导致赋值语句成为死代码
3. 基本情况写成 if not node and count  0：只需判断 if not node 即可
4. nonlocal 要声明所有外层变量（count 和 res 都要写）`},ask:"给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 小的元素（k 从 1 开始计数）。",constraints:["- 1 <= k <= n <= 10^4","- 0 <= Node.val <= 10^4"]},{id:"199",slug:"199-二叉树的右视图",title:"二叉树的右视图",titleEn:"Binary Tree Right Side View",category:"二叉树",difficulty:"中等",topic:"DFS 按深度分层 / BFS 每层取末尾",completed:!0,leetcodeSlug:"binary-tree-right-side-view",leetcodeUrl:"https://leetcode.cn/problems/binary-tree-right-side-view/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%8F%B3%E8%A7%86%E5%9B%BE",acceptanceRate:73.8,solutionCount:4861,companyTagCount:90,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["二叉树","DFS 按深度分层 / BFS 每层取末尾","树","深度优先搜索","广度优先搜索"],sourcePath:"hot100/08_二叉树/199.二叉树的右视图.py",lastUpdated:"2026-08-30",lastUpdatedAt:"2026-08-30T18:33:09.356Z",interviewPattern:"先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",thoughts:[`思路：DFS 按深度收集每层所有节点，每层最后一个即为右视图
时间 O(n)，空间 O(n)（result 存所有节点 + 递归栈 O(H)）
易错点/误区：
1. 先左后右 DFS：同层右节点追加在左节点后面，result[depth][-1] 自然是最右的
2. depth  len(result) 是新层触发条件，不能写成 depth > len(result)（会重复 append）
3. 可以简化最后两行为：return [layer[-1] for layer in result]`],pitfalls:[`思路：DFS 按深度收集每层所有节点，每层最后一个即为右视图
时间 O(n)，空间 O(n)（result 存所有节点 + 递归栈 O(H)）
易错点/误区：
1. 先左后右 DFS：同层右节点追加在左节点后面，result[depth][-1] 自然是最右的
2. depth  len(result) 是新层触发条件，不能写成 depth > len(result)（会重复 append）
3. 可以简化最后两行为：return [layer[-1] for layer in result]`],recallBlanks:[],solutionGuide:{idea:`思路：DFS 按深度收集每层所有节点，每层最后一个即为右视图
时间 O(n)，空间 O(n)（result 存所有节点 + 递归栈 O(H)）
易错点/误区：
1. 先左后右 DFS：同层右节点追加在左节点后面，result[depth][-1] 自然是最右的
2. depth  len(result) 是新层触发条件，不能写成 depth > len(result)（会重复 append）
3. 可以简化最后两行为：return [layer[-1] for layer in result]`,interviewSteps:["先说明核心考点：DFS 按深度分层 / BFS 每层取末尾。","先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。","关键词：二叉树 / DFS 按深度分层 / BFS 每层取末尾 / 树 / 深度优先搜索。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`思路：DFS 按深度收集每层所有节点，每层最后一个即为右视图
时间 O(n)，空间 O(n)（result 存所有节点 + 递归栈 O(H)）
易错点/误区：
1. 先左后右 DFS：同层右节点追加在左节点后面，result[depth][-1] 自然是最右的
2. depth  len(result) 是新层触发条件，不能写成 depth > len(result)（会重复 append）
3. 可以简化最后两行为：return [layer[-1] for layer in result]`},ask:"给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。",constraints:["- -100 <= Node.val <= 100"]},{id:"114",slug:"114-二叉树展开为链表",title:"二叉树展开为链表",titleEn:"Flatten Binary Tree to Linked List",category:"二叉树",difficulty:"中等",topic:"前序 DFS 收集节点 + 重连 right",completed:!0,leetcodeSlug:"flatten-binary-tree-to-linked-list",leetcodeUrl:"https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E4%BA%8C%E5%8F%89%E6%A0%91%E5%B1%95%E5%BC%80%E4%B8%BA%E9%93%BE%E8%A1%A8",acceptanceRate:76.2,solutionCount:4599,companyTagCount:56,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["二叉树","前序 DFS 收集节点 + 重连 right","栈","树","深度优先搜索","链表"],sourcePath:"hot100/08_二叉树/114.二叉树展开为链表.py",lastUpdated:"2026-08-30",lastUpdatedAt:"2026-08-30T18:56:28.249Z",interviewPattern:"先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",thoughts:[`思路：前序遍历收集所有节点对象，再依次重连 right 指针，left 全置 None
时间 O(n)，空间 O(n)（nodes 列表存所有节点）
易错点/误区：
1. nodes 要存节点对象 node，不是 node.val（需要操作指针）
2. for 循环要用 range(len(nodes) - 1)，否则最后一个节点 nodes[i+1] 越界
3. 函数无返回值，原地修改 root`],pitfalls:[`思路：前序遍历收集所有节点对象，再依次重连 right 指针，left 全置 None
时间 O(n)，空间 O(n)（nodes 列表存所有节点）
易错点/误区：
1. nodes 要存节点对象 node，不是 node.val（需要操作指针）
2. for 循环要用 range(len(nodes) - 1)，否则最后一个节点 nodes[i+1] 越界
3. 函数无返回值，原地修改 root`],recallBlanks:[],solutionGuide:{idea:`思路：前序遍历收集所有节点对象，再依次重连 right 指针，left 全置 None
时间 O(n)，空间 O(n)（nodes 列表存所有节点）
易错点/误区：
1. nodes 要存节点对象 node，不是 node.val（需要操作指针）
2. for 循环要用 range(len(nodes) - 1)，否则最后一个节点 nodes[i+1] 越界
3. 函数无返回值，原地修改 root`,interviewSteps:["先说明核心考点：前序 DFS 收集节点 + 重连 right。","先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。","关键词：二叉树 / 前序 DFS 收集节点 + 重连 right / 栈 / 树。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`思路：前序遍历收集所有节点对象，再依次重连 right 指针，left 全置 None
时间 O(n)，空间 O(n)（nodes 列表存所有节点）
易错点/误区：
1. nodes 要存节点对象 node，不是 node.val（需要操作指针）
2. for 循环要用 range(len(nodes) - 1)，否则最后一个节点 nodes[i+1] 越界
3. 函数无返回值，原地修改 root`},ask:"给你二叉树的根结点 root ，请你将它展开为一个单链表："},{id:"105",slug:"105-从前序与中序遍历序列构造二叉树",title:"从前序与中序遍历序列构造二叉树",titleEn:"Construct Binary Tree from Preorder and Inorder Traversal",category:"二叉树",difficulty:"中等",topic:"递归分治 + index 定根",completed:!0,leetcodeSlug:"construct-binary-tree-from-preorder-and-inorder-traversal",leetcodeUrl:"https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E4%BB%8E%E5%89%8D%E5%BA%8F%E4%B8%8E%E4%B8%AD%E5%BA%8F%E9%81%8D%E5%8E%86%E5%BA%8F%E5%88%97%E6%9E%84%E9%80%A0%E4%BA%8C%E5%8F%89%E6%A0%91",acceptanceRate:73.3,solutionCount:4088,companyTagCount:76,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["二叉树","递归分治 + index 定根","树","数组","哈希表","分治"],sourcePath:"hot100/08_二叉树/105.从前序与中序遍历序列构造二叉树.py",lastUpdated:"2026-08-30",lastUpdatedAt:"2026-08-30T19:13:25.025Z",interviewPattern:"先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",thoughts:[`需二刷：前序首元素是根，在中序中找根的位置，左边是左子树，右边是右子树
思路：递归分治，每次用 preorder[0] 建根，按 mid 切割左右子树递归构建
时间 O(n²)（每次 index 是 O(n)）；空间 O(n)（递归栈 + 切片）
易错点/误区：
1. 忘记边界：if not preorder 必须在第一行，否则空数组时 preorder[0] 报错
2. inorder[mid] 是根节点的值（整数），不是子树数组，不能传给 buildTree
3. 左子树前序切片：preorder[1:mid+1]（共 mid 个节点），右子树：preorder[mid+1:]
4. 递归调用要写 self.buildTree(...)，不能漏掉 self`],pitfalls:[`需二刷：前序首元素是根，在中序中找根的位置，左边是左子树，右边是右子树
思路：递归分治，每次用 preorder[0] 建根，按 mid 切割左右子树递归构建
时间 O(n²)（每次 index 是 O(n)）；空间 O(n)（递归栈 + 切片）
易错点/误区：
1. 忘记边界：if not preorder 必须在第一行，否则空数组时 preorder[0] 报错
2. inorder[mid] 是根节点的值（整数），不是子树数组，不能传给 buildTree
3. 左子树前序切片：preorder[1:mid+1]（共 mid 个节点），右子树：preorder[mid+1:]
4. 递归调用要写 self.buildTree(...)，不能漏掉 self`],recallBlanks:[],solutionGuide:{idea:`需二刷：前序首元素是根，在中序中找根的位置，左边是左子树，右边是右子树
思路：递归分治，每次用 preorder[0] 建根，按 mid 切割左右子树递归构建
时间 O(n²)（每次 index 是 O(n)）；空间 O(n)（递归栈 + 切片）
易错点/误区：
1. 忘记边界：if not preorder 必须在第一行，否则空数组时 preorder[0] 报错
2. inorder[mid] 是根节点的值（整数），不是子树数组，不能传给 buildTree
3. 左子树前序切片：preorder[1:mid+1]（共 mid 个节点），右子树：preorder[mid+1:]
4. 递归调用要写 self.buildTree(...)，不能漏掉 self`,interviewSteps:["先说明核心考点：递归分治 + index 定根。","先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。","关键词：二叉树 / 递归分治 + index 定根 / 树 / 数组。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：前序首元素是根，在中序中找根的位置，左边是左子树，右边是右子树
思路：递归分治，每次用 preorder[0] 建根，按 mid 切割左右子树递归构建
时间 O(n²)（每次 index 是 O(n)）；空间 O(n)（递归栈 + 切片）
易错点/误区：
1. 忘记边界：if not preorder 必须在第一行，否则空数组时 preorder[0] 报错
2. inorder[mid] 是根节点的值（整数），不是子树数组，不能传给 buildTree
3. 左子树前序切片：preorder[1:mid+1]（共 mid 个节点），右子树：preorder[mid+1:]
4. 递归调用要写 self.buildTree(...)，不能漏掉 self`},ask:"给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。",constraints:["- 1 <= preorder.length <= 3000","- -3000 <= preorder[i], inorder[i] <= 3000"]},{id:"437",slug:"437-路径总和-iii",title:"路径总和 III",titleEn:"Path Sum III",category:"二叉树",difficulty:"中等",topic:"前缀和 + DFS",completed:!0,leetcodeSlug:"path-sum-iii",leetcodeUrl:"https://leetcode.cn/problems/path-sum-iii/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E8%B7%AF%E5%BE%84%E6%80%BB%E5%92%8C%20III",acceptanceRate:49.3,solutionCount:2520,companyTagCount:46,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["二叉树","前缀和 + DFS","树","深度优先搜索"],sourcePath:"hot100/08_二叉树/437.路径总和 III.py",lastUpdated:"2026-08-30",lastUpdatedAt:"2026-08-30T19:31:23.941Z",interviewPattern:"先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",thoughts:[`需二刷：树上前缀和 + 哈希表，和 560 题思路完全一致
思路：DFS 维护根到当前节点的路径前缀和，哈希表记录各前缀和出现次数
当 curr_sum - targetSum 在 map 中，说明存在一条以当前节点结尾的合法路径
时间 O(n)，空间 O(n)
易错点/误区：
1. prefix_map 初始化 {0:1}：处理从根节点开始、路径和恰好等于 target 的情况
2. 回溯必不可少：处理完当前节点后 prefix_map[curr_sum] - 1
否则兄弟分支会误用当前分支的前缀和，导致多计
3. count 是整数，修改需要 nonlocal；prefix_map 是字典，原地修改不需要 nonlocal`,"将当前前缀和加入哈希表"],pitfalls:[`需二刷：树上前缀和 + 哈希表，和 560 题思路完全一致
思路：DFS 维护根到当前节点的路径前缀和，哈希表记录各前缀和出现次数
当 curr_sum - targetSum 在 map 中，说明存在一条以当前节点结尾的合法路径
时间 O(n)，空间 O(n)
易错点/误区：
1. prefix_map 初始化 {0:1}：处理从根节点开始、路径和恰好等于 target 的情况
2. 回溯必不可少：处理完当前节点后 prefix_map[curr_sum] - 1
否则兄弟分支会误用当前分支的前缀和，导致多计
3. count 是整数，修改需要 nonlocal；prefix_map 是字典，原地修改不需要 nonlocal`,"回溯：退出当前节点，撤销前缀和，防止污染兄弟分支"],recallBlanks:[{prompt:"＿＿＿：退出当前节点，撤销＿＿＿，防止污染兄弟分支",answer:"回溯"}],solutionGuide:{idea:`需二刷：树上前缀和 + 哈希表，和 560 题思路完全一致
思路：DFS 维护根到当前节点的路径前缀和，哈希表记录各前缀和出现次数
当 curr_sum - targetSum 在 map 中，说明存在一条以当前节点结尾的合法路径
时间 O(n)，空间 O(n)
易错点/误区：
1. prefix_map 初始化 {0:1}：处理从根节点开始、路径和恰好等于 target 的情况
2. 回溯必不可少：处理完当前节点后 prefix_map[curr_sum] - 1
否则兄弟分支会误用当前分支的前缀和，导致多计
3. count 是整数，修改需要 nonlocal；prefix_map 是字典，原地修改不需要 nonlocal`,interviewSteps:["先说明核心考点：前缀和 + DFS。","先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。","关键词：二叉树 / 前缀和 + DFS / 树 / 深度优先搜索。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：树上前缀和 + 哈希表，和 560 题思路完全一致
思路：DFS 维护根到当前节点的路径前缀和，哈希表记录各前缀和出现次数
当 curr_sum - targetSum 在 map 中，说明存在一条以当前节点结尾的合法路径
时间 O(n)，空间 O(n)
易错点/误区：
1. prefix_map 初始化 {0:1}：处理从根节点开始、路径和恰好等于 target 的情况
2. 回溯必不可少：处理完当前节点后 prefix_map[curr_sum] - 1
否则兄弟分支会误用当前分支的前缀和，导致多计
3. count 是整数，修改需要 nonlocal；prefix_map 是字典，原地修改不需要 nonlocal`},ask:"给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。"},{id:"236",slug:"236-二叉树的最近公共祖先",title:"二叉树的最近公共祖先",titleEn:"Lowest Common Ancestor of a Binary Tree",category:"二叉树",difficulty:"中等",topic:"递归",completed:!0,leetcodeSlug:"lowest-common-ancestor-of-a-binary-tree",leetcodeUrl:"https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88",acceptanceRate:75.4,solutionCount:4560,companyTagCount:111,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["二叉树","递归","树","深度优先搜索","最近公共祖先","Binary Lifting"],sourcePath:"hot100/08_二叉树/236.二叉树的最近公共祖先.py",lastUpdated:"2026-08-30",lastUpdatedAt:"2026-08-30T20:38:07.470Z",interviewPattern:"先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",thoughts:[`需二刷：经典递归 LCA，"向下找、向上汇报"模型
思路：dfs(node) 语义  在以 node 为根的子树里找 p/q，找到就返回，否则返回 None
若左右子树都有返回值 → 当前节点就是 LCA
若只有一侧有返回值 → 把那个结果继续往上传
时间 O(n)，空间 O(n)（递归栈）
易错点/误区：
1. 终止条件必须 return node，不能写 return（返回 None 等于"没找到"）
2. 只有一侧有结果时，用 left or right 传递非空的那个；return node 是错的
3. 外层必须 return dfs(root)，光调用不 return 结果直接丢掉`],pitfalls:[`需二刷：经典递归 LCA，"向下找、向上汇报"模型
思路：dfs(node) 语义  在以 node 为根的子树里找 p/q，找到就返回，否则返回 None
若左右子树都有返回值 → 当前节点就是 LCA
若只有一侧有返回值 → 把那个结果继续往上传
时间 O(n)，空间 O(n)（递归栈）
易错点/误区：
1. 终止条件必须 return node，不能写 return（返回 None 等于"没找到"）
2. 只有一侧有结果时，用 left or right 传递非空的那个；return node 是错的
3. 外层必须 return dfs(root)，光调用不 return 结果直接丢掉`],recallBlanks:[],solutionGuide:{idea:`需二刷：经典递归 LCA，"向下找、向上汇报"模型
思路：dfs(node) 语义  在以 node 为根的子树里找 p/q，找到就返回，否则返回 None
若左右子树都有返回值 → 当前节点就是 LCA
若只有一侧有返回值 → 把那个结果继续往上传
时间 O(n)，空间 O(n)（递归栈）
易错点/误区：
1. 终止条件必须 return node，不能写 return（返回 None 等于"没找到"）
2. 只有一侧有结果时，用 left or right 传递非空的那个；return node 是错的
3. 外层必须 return dfs(root)，光调用不 return 结果直接丢掉`,interviewSteps:["先说明核心考点：递归。","先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。","关键词：二叉树 / 递归 / 树 / 深度优先搜索。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：经典递归 LCA，"向下找、向上汇报"模型
思路：dfs(node) 语义  在以 node 为根的子树里找 p/q，找到就返回，否则返回 None
若左右子树都有返回值 → 当前节点就是 LCA
若只有一侧有返回值 → 把那个结果继续往上传
时间 O(n)，空间 O(n)（递归栈）
易错点/误区：
1. 终止条件必须 return node，不能写 return（返回 None 等于"没找到"）
2. 只有一侧有结果时，用 left or right 传递非空的那个；return node 是错的
3. 外层必须 return dfs(root)，光调用不 return 结果直接丢掉`},ask:"给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。"},{id:"124",slug:"124-二叉树中的最大路径和",title:"二叉树中的最大路径和",titleEn:"Binary Tree Maximum Path Sum",category:"二叉树",difficulty:"困难",topic:"后序 DFS + 拐弯点全局更新",completed:!0,leetcodeSlug:"binary-tree-maximum-path-sum",leetcodeUrl:"https://leetcode.cn/problems/binary-tree-maximum-path-sum/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E4%BA%8C%E5%8F%89%E6%A0%91%E4%B8%AD%E7%9A%84%E6%9C%80%E5%A4%A7%E8%B7%AF%E5%BE%84%E5%92%8C",acceptanceRate:48.4,solutionCount:3097,companyTagCount:99,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["二叉树","后序 DFS + 拐弯点全局更新","树","深度优先搜索","动态规划","树形 DP"],sourcePath:"hot100/08_二叉树/124.二叉树中的最大路径和.py",lastUpdated:"2026-08-30",lastUpdatedAt:"2026-08-30T20:58:02.924Z",interviewPattern:"先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",thoughts:[`需二刷：后序遍历 + 全局变量更新 —— "拐弯点"思维模型
思路：对每个节点做后序 DFS，区分两种用途：
1. 向父节点贡献的最大单侧路径（只能选左或右，不能拐弯）
2. 在当前节点拐弯（左 + 根 + 右），用于更新全局最大值
时间 O(n)，空间 O(h)，h 为树高（递归栈）
易错点/误区：
1. maximum 初始化为 0 而非 float('-inf')：全负数树时会错误返回 0
2. base case 写 return 而非 return 0：导致 max(None, 0) 报 TypeError
3. 忘记负增益过滤（max(..., 0)）：负子树会拖低路径和，应舍弃
4. 拐弯值（turning）只能更新全局答案，不能作为 return 值向上传`],pitfalls:[`需二刷：后序遍历 + 全局变量更新 —— "拐弯点"思维模型
思路：对每个节点做后序 DFS，区分两种用途：
1. 向父节点贡献的最大单侧路径（只能选左或右，不能拐弯）
2. 在当前节点拐弯（左 + 根 + 右），用于更新全局最大值
时间 O(n)，空间 O(h)，h 为树高（递归栈）
易错点/误区：
1. maximum 初始化为 0 而非 float('-inf')：全负数树时会错误返回 0
2. base case 写 return 而非 return 0：导致 max(None, 0) 报 TypeError
3. 忘记负增益过滤（max(..., 0)）：负子树会拖低路径和，应舍弃
4. 拐弯值（turning）只能更新全局答案，不能作为 return 值向上传`],recallBlanks:[],solutionGuide:{idea:`需二刷：后序遍历 + 全局变量更新 —— "拐弯点"思维模型
思路：对每个节点做后序 DFS，区分两种用途：
1. 向父节点贡献的最大单侧路径（只能选左或右，不能拐弯）
2. 在当前节点拐弯（左 + 根 + 右），用于更新全局最大值
时间 O(n)，空间 O(h)，h 为树高（递归栈）
易错点/误区：
1. maximum 初始化为 0 而非 float('-inf')：全负数树时会错误返回 0
2. base case 写 return 而非 return 0：导致 max(None, 0) 报 TypeError
3. 忘记负增益过滤（max(..., 0)）：负子树会拖低路径和，应舍弃
4. 拐弯值（turning）只能更新全局答案，不能作为 return 值向上传`,interviewSteps:["先说明核心考点：后序 DFS + 拐弯点全局更新。","先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。","关键词：二叉树 / 后序 DFS + 拐弯点全局更新 / 树 / 深度优先搜索。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：后序遍历 + 全局变量更新 —— "拐弯点"思维模型
思路：对每个节点做后序 DFS，区分两种用途：
1. 向父节点贡献的最大单侧路径（只能选左或右，不能拐弯）
2. 在当前节点拐弯（左 + 根 + 右），用于更新全局最大值
时间 O(n)，空间 O(h)，h 为树高（递归栈）
易错点/误区：
1. maximum 初始化为 0 而非 float('-inf')：全负数树时会错误返回 0
2. base case 写 return 而非 return 0：导致 max(None, 0) 报 TypeError
3. 忘记负增益过滤（max(..., 0)）：负子树会拖低路径和，应舍弃
4. 拐弯值（turning）只能更新全局答案，不能作为 return 值向上传`},ask:"二叉树中的 路径 被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。",constraints:["- -1000 <= Node.val <= 1000"]},{id:"200",slug:"200-岛屿数量",title:"岛屿数量",titleEn:"Number of Islands",category:"图论",difficulty:"中等",topic:"DFS / BFS",completed:!0,leetcodeSlug:"number-of-islands",leetcodeUrl:"https://leetcode.cn/problems/number-of-islands/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E5%B2%9B%E5%B1%BF%E6%95%B0%E9%87%8F",acceptanceRate:64.1,solutionCount:5709,companyTagCount:178,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["图论","DFS / BFS","深度优先搜索","广度优先搜索","并查集","数组","矩阵"],sourcePath:"hot100/09_图论/200.岛屿数量.py",lastUpdated:"2026-03-27",lastUpdatedAt:"2026-03-27T07:39:32.812Z",interviewPattern:"先建模节点、边和访问状态，BFS 适合最短层数，DFS 适合连通块和搜索。",thoughts:[`需二刷：DFS 淹岛法（Flood Fill）
思路：遍历网格，遇到 '1' 则岛屿数+1，然后用 DFS 把整座岛"淹"成 '0'
时间 O(m*n)，空间 O(m*n)（最坏情况递归栈深度）
易错点/误区：
1. grid 中的值是字符串 '1'/'0'，不是整数 1/0
2. DFS 进入后要立即标记 grid[i][j]  '0'，否则相邻格子互相递归导致无限循环
3. grid[ni][nj]  '0' 是赋值（单等号）， 是比较，不会修改值
4. 不需要回溯！与 79.单词搜索 不同，访问过的陆地不需要恢复`],pitfalls:[`需二刷：DFS 淹岛法（Flood Fill）
思路：遍历网格，遇到 '1' 则岛屿数+1，然后用 DFS 把整座岛"淹"成 '0'
时间 O(m*n)，空间 O(m*n)（最坏情况递归栈深度）
易错点/误区：
1. grid 中的值是字符串 '1'/'0'，不是整数 1/0
2. DFS 进入后要立即标记 grid[i][j]  '0'，否则相邻格子互相递归导致无限循环
3. grid[ni][nj]  '0' 是赋值（单等号）， 是比较，不会修改值
4. 不需要回溯！与 79.单词搜索 不同，访问过的陆地不需要恢复`,"先把当前格子淹掉，防止重复访问","邻居在边界内且是陆地，继续淹"],recallBlanks:[],solutionGuide:{idea:`需二刷：DFS 淹岛法（Flood Fill）
思路：遍历网格，遇到 '1' 则岛屿数+1，然后用 DFS 把整座岛"淹"成 '0'
时间 O(m*n)，空间 O(m*n)（最坏情况递归栈深度）
易错点/误区：
1. grid 中的值是字符串 '1'/'0'，不是整数 1/0
2. DFS 进入后要立即标记 grid[i][j]  '0'，否则相邻格子互相递归导致无限循环
3. grid[ni][nj]  '0' 是赋值（单等号）， 是比较，不会修改值
4. 不需要回溯！与 79.单词搜索 不同，访问过的陆地不需要恢复`,interviewSteps:["先说明核心考点：DFS / BFS。","先建模节点、边和访问状态，BFS 适合最短层数，DFS 适合连通块和搜索。","关键词：图论 / DFS / BFS / 深度优先搜索 / 广度优先搜索。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：DFS 淹岛法（Flood Fill）
思路：遍历网格，遇到 '1' 则岛屿数+1，然后用 DFS 把整座岛"淹"成 '0'
时间 O(m*n)，空间 O(m*n)（最坏情况递归栈深度）
易错点/误区：
1. grid 中的值是字符串 '1'/'0'，不是整数 1/0
2. DFS 进入后要立即标记 grid[i][j]  '0'，否则相邻格子互相递归导致无限循环
3. grid[ni][nj]  '0' 是赋值（单等号）， 是比较，不会修改值
4. 不需要回溯！与 79.单词搜索 不同，访问过的陆地不需要恢复`},ask:"给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。",constraints:["- 1 <= m, n <= 300"]},{id:"994",slug:"994-腐烂的橘子",title:"腐烂的橘子",titleEn:"Rotting Oranges",category:"图论",difficulty:"中等",topic:"BFS 多源",completed:!0,leetcodeSlug:"rotting-oranges",leetcodeUrl:"https://leetcode.cn/problems/rotting-oranges/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E8%85%90%E7%83%82%E7%9A%84%E6%A9%98%E5%AD%90",acceptanceRate:55.7,solutionCount:3609,companyTagCount:56,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["图论","BFS 多源","广度优先搜索","数组","矩阵"],sourcePath:"hot100/09_图论/994.腐烂的橘子.py",lastUpdated:"2026-03-27",lastUpdatedAt:"2026-03-27T09:25:25.788Z",interviewPattern:"先建模节点、边和访问状态，BFS 适合最短层数，DFS 适合连通块和搜索。",thoughts:[`需二刷：多源 BFS + 层序遍历
思路：把所有腐烂橘子作为起点同时入队，BFS 逐层扩散，每扩一层 time+1
时间 O(m*n)，空间 O(m*n)
易错点/误区：
1. time + 1 要放在层序 for 循环外面，不是每个橘子/每个方向都 +1
2. 感染后必须 grid[nx][ny]  2，否则同一个橘子会被重复入队
3. 最后 return time-1，因为最后一层（无新感染）也会 +1，多算了一次
4. 边界：一开始就没有新鲜橘子，直接返回 0`,"第一步：遍历网格，找出所有烂橘子（BFS 起点）和统计新鲜橘子数量","第二步：多源 BFS，层序遍历（每一层  1 分钟）"],pitfalls:[`需二刷：多源 BFS + 层序遍历
思路：把所有腐烂橘子作为起点同时入队，BFS 逐层扩散，每扩一层 time+1
时间 O(m*n)，空间 O(m*n)
易错点/误区：
1. time + 1 要放在层序 for 循环外面，不是每个橘子/每个方向都 +1
2. 感染后必须 grid[nx][ny]  2，否则同一个橘子会被重复入队
3. 最后 return time-1，因为最后一层（无新感染）也会 +1，多算了一次
4. 边界：一开始就没有新鲜橘子，直接返回 0`,"边界：没有新鲜橘子，直接返回 0"],recallBlanks:[{prompt:"第一步：遍历网格，找出所有烂橘子（＿＿＿ 起点）和统计新鲜橘子数量",answer:"BFS"}],solutionGuide:{idea:`需二刷：多源 BFS + 层序遍历
思路：把所有腐烂橘子作为起点同时入队，BFS 逐层扩散，每扩一层 time+1
时间 O(m*n)，空间 O(m*n)
易错点/误区：
1. time + 1 要放在层序 for 循环外面，不是每个橘子/每个方向都 +1
2. 感染后必须 grid[nx][ny]  2，否则同一个橘子会被重复入队
3. 最后 return time-1，因为最后一层（无新感染）也会 +1，多算了一次
4. 边界：一开始就没有新鲜橘子，直接返回 0`,interviewSteps:["先说明核心考点：BFS 多源。","先建模节点、边和访问状态，BFS 适合最短层数，DFS 适合连通块和搜索。","关键词：图论 / BFS 多源 / 广度优先搜索 / 数组。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：多源 BFS + 层序遍历
思路：把所有腐烂橘子作为起点同时入队，BFS 逐层扩散，每扩一层 time+1
时间 O(m*n)，空间 O(m*n)
易错点/误区：
1. time + 1 要放在层序 for 循环外面，不是每个橘子/每个方向都 +1
2. 感染后必须 grid[nx][ny]  2，否则同一个橘子会被重复入队
3. 最后 return time-1，因为最后一层（无新感染）也会 +1，多算了一次
4. 边界：一开始就没有新鲜橘子，直接返回 0`},ask:"在给定的 m x n 网格 grid 中，每个单元格可以有以下三个值之一：",constraints:["- 1 <= m, n <= 10"]},{id:"207",slug:"207-课程表",title:"课程表",titleEn:"Course Schedule",category:"图论",difficulty:"中等",topic:"拓扑排序",completed:!0,leetcodeSlug:"course-schedule",leetcodeUrl:"https://leetcode.cn/problems/course-schedule/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E8%AF%BE%E7%A8%8B%E8%A1%A8",acceptanceRate:57.5,solutionCount:3491,companyTagCount:91,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["图论","拓扑排序","深度优先搜索","广度优先搜索","图","有向无环图"],sourcePath:"hot100/09_图论/207.课程表.py",lastUpdated:"2026-08-26",lastUpdatedAt:"2026-08-26T18:41:12.694Z",interviewPattern:"先建模节点、边和访问状态，BFS 适合最短层数，DFS 适合连通块和搜索。",thoughts:[`需二刷：拓扑排序（Kahn 算法）经典模板题
思路：把课程依赖关系视为有向图（pre -> cur）。统计所有节点的入度（in_degree），
将入度为 0 的节点放入队列进行 BFS。每次出队表示修完一门课，将其后续课程入度 -1。
若入度变为 0 则入队。最后判断修完的课程数是否等于总课程数。
时间 O(V + E)（V 为课程数，E 为先修依赖数），空间 O(V + E)
易错点/误区：
1. 邻接表和入度数组的对应关系不要搞反：adj[pre].append(cur)，in_degree[cur] + 1。
2. 避免列表推导式陷阱：初始化邻接表必须用 [[] for _ in range(n)]，如果写成 [[]] * n 会导致所有子列表共享同一个内存地址。`],pitfalls:[`需二刷：拓扑排序（Kahn 算法）经典模板题
思路：把课程依赖关系视为有向图（pre -> cur）。统计所有节点的入度（in_degree），
将入度为 0 的节点放入队列进行 BFS。每次出队表示修完一门课，将其后续课程入度 -1。
若入度变为 0 则入队。最后判断修完的课程数是否等于总课程数。
时间 O(V + E)（V 为课程数，E 为先修依赖数），空间 O(V + E)
易错点/误区：
1. 邻接表和入度数组的对应关系不要搞反：adj[pre].append(cur)，in_degree[cur] + 1。
2. 避免列表推导式陷阱：初始化邻接表必须用 [[] for _ in range(n)]，如果写成 [[]] * n 会导致所有子列表共享同一个内存地址。`],recallBlanks:[],solutionGuide:{idea:`需二刷：拓扑排序（Kahn 算法）经典模板题
思路：把课程依赖关系视为有向图（pre -> cur）。统计所有节点的入度（in_degree），
将入度为 0 的节点放入队列进行 BFS。每次出队表示修完一门课，将其后续课程入度 -1。
若入度变为 0 则入队。最后判断修完的课程数是否等于总课程数。
时间 O(V + E)（V 为课程数，E 为先修依赖数），空间 O(V + E)
易错点/误区：
1. 邻接表和入度数组的对应关系不要搞反：adj[pre].append(cur)，in_degree[cur] + 1。
2. 避免列表推导式陷阱：初始化邻接表必须用 [[] for _ in range(n)]，如果写成 [[]] * n 会导致所有子列表共享同一个内存地址。`,interviewSteps:["先说明核心考点：拓扑排序。","先建模节点、边和访问状态，BFS 适合最短层数，DFS 适合连通块和搜索。","关键词：图论 / 拓扑排序 / 深度优先搜索 / 广度优先搜索。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：拓扑排序（Kahn 算法）经典模板题
思路：把课程依赖关系视为有向图（pre -> cur）。统计所有节点的入度（in_degree），
将入度为 0 的节点放入队列进行 BFS。每次出队表示修完一门课，将其后续课程入度 -1。
若入度变为 0 则入队。最后判断修完的课程数是否等于总课程数。
时间 O(V + E)（V 为课程数，E 为先修依赖数），空间 O(V + E)
易错点/误区：
1. 邻接表和入度数组的对应关系不要搞反：adj[pre].append(cur)，in_degree[cur] + 1。
2. 避免列表推导式陷阱：初始化邻接表必须用 [[] for _ in range(n)]，如果写成 [[]] * n 会导致所有子列表共享同一个内存地址。`},ask:"你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。",constraints:["- 1 <= numCourses <= 2000","- 0 <= prerequisites.length <= 5000","- 0 <= a_i, b_i < numCourses"]},{id:"208",slug:"208-实现-trie-前缀树",title:"实现 Trie (前缀树)",titleEn:"Implement Trie (Prefix Tree)",category:"图论",difficulty:"中等",topic:"字典树设计",completed:!0,leetcodeSlug:"implement-trie-prefix-tree",leetcodeUrl:"https://leetcode.cn/problems/implement-trie-prefix-tree/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E5%AE%9E%E7%8E%B0%20Trie%20(%E5%89%8D%E7%BC%80%E6%A0%91)",acceptanceRate:72.5,solutionCount:2452,companyTagCount:84,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["图论","字典树设计","设计","字典树","哈希表","字符串"],sourcePath:"hot100/09_图论/208.实现 Trie (前缀树).py",lastUpdated:"2026-08-27",lastUpdatedAt:"2026-08-27T14:02:03.847Z",interviewPattern:"先建模节点、边和访问状态，BFS 适合最短层数，DFS 适合连通块和搜索。",thoughts:[`需二刷：前缀树的节点设计与字典游标思想（独立节点版）
思路：应用单一职责原则，将「树节点 TrieNode」与「管理者 Trie」分离。
节点专职存储 children 路径和 is_end 标记；管理者统筹根节点 root 并对外提供 API。
时间 O(L)，空间 O(L)（L 为每次插入/搜索的单词长度）
易错点/误区：
1. search 中的游标更新：容易写错成直接拿到字典本身 node  node.children，正确应该是 node  node.children[ch]（推门走进去）。
2. startsWith 的最后返回：只要顺利走完前缀即算成功，循环结束后应该强制 return True。`],pitfalls:[`需二刷：前缀树的节点设计与字典游标思想（独立节点版）
思路：应用单一职责原则，将「树节点 TrieNode」与「管理者 Trie」分离。
节点专职存储 children 路径和 is_end 标记；管理者统筹根节点 root 并对外提供 API。
时间 O(L)，空间 O(L)（L 为每次插入/搜索的单词长度）
易错点/误区：
1. search 中的游标更新：容易写错成直接拿到字典本身 node  node.children，正确应该是 node  node.children[ch]（推门走进去）。
2. startsWith 的最后返回：只要顺利走完前缀即算成功，循环结束后应该强制 return True。`],recallBlanks:[],solutionGuide:{idea:`需二刷：前缀树的节点设计与字典游标思想（独立节点版）
思路：应用单一职责原则，将「树节点 TrieNode」与「管理者 Trie」分离。
节点专职存储 children 路径和 is_end 标记；管理者统筹根节点 root 并对外提供 API。
时间 O(L)，空间 O(L)（L 为每次插入/搜索的单词长度）
易错点/误区：
1. search 中的游标更新：容易写错成直接拿到字典本身 node  node.children，正确应该是 node  node.children[ch]（推门走进去）。
2. startsWith 的最后返回：只要顺利走完前缀即算成功，循环结束后应该强制 return True。`,interviewSteps:["先说明核心考点：字典树设计。","先建模节点、边和访问状态，BFS 适合最短层数，DFS 适合连通块和搜索。","关键词：图论 / 字典树设计 / 设计 / 字典树。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：前缀树的节点设计与字典游标思想（独立节点版）
思路：应用单一职责原则，将「树节点 TrieNode」与「管理者 Trie」分离。
节点专职存储 children 路径和 is_end 标记；管理者统筹根节点 root 并对外提供 API。
时间 O(L)，空间 O(L)（L 为每次插入/搜索的单词长度）
易错点/误区：
1. search 中的游标更新：容易写错成直接拿到字典本身 node  node.children，正确应该是 node  node.children[ch]（推门走进去）。
2. startsWith 的最后返回：只要顺利走完前缀即算成功，循环结束后应该强制 return True。`},ask:'Trie（发音类似 "try"）或者说 前缀树 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补全和拼写检查。',constraints:["- 1 <= word.length, prefix.length <= 2000"]},{id:"46",slug:"46-全排列",title:"全排列",titleEn:"Permutations",category:"回溯",difficulty:"中等",topic:"排列树",completed:!0,leetcodeSlug:"permutations",leetcodeUrl:"https://leetcode.cn/problems/permutations/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E5%85%A8%E6%8E%92%E5%88%97",acceptanceRate:80.1,solutionCount:7855,companyTagCount:186,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["回溯","排列树","数组"],sourcePath:"hot100/10_回溯/46.全排列.py",lastUpdated:"2026-03-21",lastUpdatedAt:"2026-03-21T03:51:54.988Z",interviewPattern:"定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",thoughts:[`需二刷：回溯法求全排列（回溯经典入门题）
思路：回溯法（决策树遍历）
- 每一层从 nums 中选一个「还没被选过」的数加入 path
- 当 path 长度  nums 长度时，说明排列完成，收集结果
- 递归返回后撤销选择（pop），尝试下一个分支
时间 O(n! * n)，空间 O(n)
- n! 个排列，每个排列复制到 result 需要 O(n)
- 递归栈深度 O(n)
易错点/误区：
1. result.append(path) 存的是引用，path 变了 result 也变 → 必须用 path.copy()
2. 撤销选择是 path.pop()，不是 path.remove() 或 path.reverse()
3. 判断「是否已选过」要在 append 之前，选过就 continue 跳过
💡 面试推荐写法：
本题用 if num in path 判断是否选过，简洁直观，面试中推荐此写法。
如果 nums 很大或有重复元素，可改用 used[] 布尔数组标记，效率更高：
used  [False] * len(nums)
for i in range(len(nums)):
if used[i]: continue
used[i]  True
path.append(nums[i])
backtrack()
path.pop()
used[i]  False`],pitfalls:[`需二刷：回溯法求全排列（回溯经典入门题）
思路：回溯法（决策树遍历）
- 每一层从 nums 中选一个「还没被选过」的数加入 path
- 当 path 长度  nums 长度时，说明排列完成，收集结果
- 递归返回后撤销选择（pop），尝试下一个分支
时间 O(n! * n)，空间 O(n)
- n! 个排列，每个排列复制到 result 需要 O(n)
- 递归栈深度 O(n)
易错点/误区：
1. result.append(path) 存的是引用，path 变了 result 也变 → 必须用 path.copy()
2. 撤销选择是 path.pop()，不是 path.remove() 或 path.reverse()
3. 判断「是否已选过」要在 append 之前，选过就 continue 跳过
💡 面试推荐写法：
本题用 if num in path 判断是否选过，简洁直观，面试中推荐此写法。
如果 nums 很大或有重复元素，可改用 used[] 布尔数组标记，效率更高：
used  [False] * len(nums)
for i in range(len(nums)):
if used[i]: continue
used[i]  True
path.append(nums[i])
backtrack()
path.pop()
used[i]  False`],recallBlanks:[],solutionGuide:{idea:`需二刷：回溯法求全排列（回溯经典入门题）
思路：回溯法（决策树遍历）
- 每一层从 nums 中选一个「还没被选过」的数加入 path
- 当 path 长度  nums 长度时，说明排列完成，收集结果
- 递归返回后撤销选择（pop），尝试下一个分支
时间 O(n! * n)，空间 O(n)
- n! 个排列，每个排列复制到 result 需要 O(n)
- 递归栈深度 O(n)
易错点/误区：
1. result.append(path) 存的是引用，path 变了 result 也变 → 必须用 path.copy()
2. 撤销选择是 path.pop()，不是 path.remove() 或 path.reverse()
3. 判断「是否已选过」要在 append 之前，选过就 continue 跳过
💡 面试推荐写法：
本题用 if num in path 判断是否选过，简洁直观，面试中推荐此写法。
如果 nums 很大或有重复元素，可改用 used[] 布尔数组标记，效率更高：
used  [False] * len(nums)
for i in range(len(nums)):
if used[i]: continue
used[i]  True
path.append(nums[i])
backtrack()
path.pop()
used[i]  False`,interviewSteps:["先说明核心考点：排列树。","定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。","关键词：回溯 / 排列树 / 数组。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：回溯法求全排列（回溯经典入门题）
思路：回溯法（决策树遍历）
- 每一层从 nums 中选一个「还没被选过」的数加入 path
- 当 path 长度  nums 长度时，说明排列完成，收集结果
- 递归返回后撤销选择（pop），尝试下一个分支
时间 O(n! * n)，空间 O(n)
- n! 个排列，每个排列复制到 result 需要 O(n)
- 递归栈深度 O(n)
易错点/误区：
1. result.append(path) 存的是引用，path 变了 result 也变 → 必须用 path.copy()
2. 撤销选择是 path.pop()，不是 path.remove() 或 path.reverse()
3. 判断「是否已选过」要在 append 之前，选过就 continue 跳过
💡 面试推荐写法：
本题用 if num in path 判断是否选过，简洁直观，面试中推荐此写法。
如果 nums 很大或有重复元素，可改用 used[] 布尔数组标记，效率更高：
used  [False] * len(nums)
for i in range(len(nums)):
if used[i]: continue
used[i]  True
path.append(nums[i])
backtrack()
path.pop()
used[i]  False`},ask:"给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。",constraints:["- 1 <= nums.length <= 6","- -10 <= nums[i] <= 10"]},{id:"78",slug:"78-子集",title:"子集",titleEn:"Subsets",category:"回溯",difficulty:"中等",topic:"子集树",completed:!0,leetcodeSlug:"subsets",leetcodeUrl:"https://leetcode.cn/problems/subsets/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E5%AD%90%E9%9B%86",acceptanceRate:81.8,solutionCount:5907,companyTagCount:98,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["回溯","子集树","位运算","数组"],sourcePath:"hot100/10_回溯/78.子集.py",lastUpdated:"2026-03-21",lastUpdatedAt:"2026-03-21T09:45:01.128Z",interviewPattern:"定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",thoughts:[`需二刷：回溯法求子集（与全排列对比理解 startIndex）
思路：回溯树的每个节点都是一个合法子集，进入 backtrack 时先收集当前 path，
然后从 startIndex 开始向后选择，保证不往回选，避免重复子集。
时间 O(n * 2^n)，空间 O(n)（递归栈深度）
易错点/误区：
1. 不能用 if num in path 去重（那是全排列的做法），子集用 startIndex 去重
2. 递归时传 i+1 而不是 startIndex+1，否则会重复选择元素
3. 收集结果必须用 path.copy()，否则 result 中所有引用指向同一个 path`],pitfalls:[`需二刷：回溯法求子集（与全排列对比理解 startIndex）
思路：回溯树的每个节点都是一个合法子集，进入 backtrack 时先收集当前 path，
然后从 startIndex 开始向后选择，保证不往回选，避免重复子集。
时间 O(n * 2^n)，空间 O(n)（递归栈深度）
易错点/误区：
1. 不能用 if num in path 去重（那是全排列的做法），子集用 startIndex 去重
2. 递归时传 i+1 而不是 startIndex+1，否则会重复选择元素
3. 收集结果必须用 path.copy()，否则 result 中所有引用指向同一个 path`],recallBlanks:[],solutionGuide:{idea:`需二刷：回溯法求子集（与全排列对比理解 startIndex）
思路：回溯树的每个节点都是一个合法子集，进入 backtrack 时先收集当前 path，
然后从 startIndex 开始向后选择，保证不往回选，避免重复子集。
时间 O(n * 2^n)，空间 O(n)（递归栈深度）
易错点/误区：
1. 不能用 if num in path 去重（那是全排列的做法），子集用 startIndex 去重
2. 递归时传 i+1 而不是 startIndex+1，否则会重复选择元素
3. 收集结果必须用 path.copy()，否则 result 中所有引用指向同一个 path`,interviewSteps:["先说明核心考点：子集树。","定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。","关键词：回溯 / 子集树 / 位运算 / 数组。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：回溯法求子集（与全排列对比理解 startIndex）
思路：回溯树的每个节点都是一个合法子集，进入 backtrack 时先收集当前 path，
然后从 startIndex 开始向后选择，保证不往回选，避免重复子集。
时间 O(n * 2^n)，空间 O(n)（递归栈深度）
易错点/误区：
1. 不能用 if num in path 去重（那是全排列的做法），子集用 startIndex 去重
2. 递归时传 i+1 而不是 startIndex+1，否则会重复选择元素
3. 收集结果必须用 path.copy()，否则 result 中所有引用指向同一个 path`},ask:"给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。",constraints:["- 1 <= nums.length <= 10","- -10 <= nums[i] <= 10"]},{id:"17",slug:"17-电话号码的字母组合",title:"电话号码的字母组合",titleEn:"Letter Combinations of a Phone Number",category:"回溯",difficulty:"中等",topic:"组合",completed:!0,leetcodeSlug:"letter-combinations-of-a-phone-number",leetcodeUrl:"https://leetcode.cn/problems/letter-combinations-of-a-phone-number/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E7%94%B5%E8%AF%9D%E5%8F%B7%E7%A0%81%E7%9A%84%E5%AD%97%E6%AF%8D%E7%BB%84%E5%90%88",acceptanceRate:63.9,solutionCount:7821,companyTagCount:115,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["回溯","组合","哈希表","字符串"],sourcePath:"hot100/10_回溯/17.电话号码的字母组合.py",lastUpdated:"2026-03-22",lastUpdatedAt:"2026-03-22T09:24:36.443Z",interviewPattern:"定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",thoughts:[`需二刷：回溯法 —— 每层递归的选择列表不同（由当前数字决定）
思路：每个数字对应一组字母，用 index 控制当前处理第几个数字，
每层递归遍历该数字对应的字母，选择→递归→撤销
时间 O(3^m × 4^n)，m 是对应 3 个字母的数字个数，n 是对应 4 个字母的数字个数
空间 O(len(digits))，递归栈深度
易错点/误区：
1. form(0) 不是 form(len(digits))！index 从 0 开始，表示从第一个数字开始处理
2. for 循环遍历的是 phone[digits[index]]（当前数字的字母），不是 digits 本身
3. 不需要像全排列那样判断 "char not in path"，因为不同层的字母可以重复
4. 空字符串判断放在递归函数外面，避免每次递归都重复检查
5. 收集结果时用 ''.join(path) 拼成字符串，而不是 path.copy()`],pitfalls:[`需二刷：回溯法 —— 每层递归的选择列表不同（由当前数字决定）
思路：每个数字对应一组字母，用 index 控制当前处理第几个数字，
每层递归遍历该数字对应的字母，选择→递归→撤销
时间 O(3^m × 4^n)，m 是对应 3 个字母的数字个数，n 是对应 4 个字母的数字个数
空间 O(len(digits))，递归栈深度
易错点/误区：
1. form(0) 不是 form(len(digits))！index 从 0 开始，表示从第一个数字开始处理
2. for 循环遍历的是 phone[digits[index]]（当前数字的字母），不是 digits 本身
3. 不需要像全排列那样判断 "char not in path"，因为不同层的字母可以重复
4. 空字符串判断放在递归函数外面，避免每次递归都重复检查
5. 收集结果时用 ''.join(path) 拼成字符串，而不是 path.copy()`,"边界情况：空字符串直接返回空列表"],recallBlanks:[],solutionGuide:{idea:`需二刷：回溯法 —— 每层递归的选择列表不同（由当前数字决定）
思路：每个数字对应一组字母，用 index 控制当前处理第几个数字，
每层递归遍历该数字对应的字母，选择→递归→撤销
时间 O(3^m × 4^n)，m 是对应 3 个字母的数字个数，n 是对应 4 个字母的数字个数
空间 O(len(digits))，递归栈深度
易错点/误区：
1. form(0) 不是 form(len(digits))！index 从 0 开始，表示从第一个数字开始处理
2. for 循环遍历的是 phone[digits[index]]（当前数字的字母），不是 digits 本身
3. 不需要像全排列那样判断 "char not in path"，因为不同层的字母可以重复
4. 空字符串判断放在递归函数外面，避免每次递归都重复检查
5. 收集结果时用 ''.join(path) 拼成字符串，而不是 path.copy()`,interviewSteps:["先说明核心考点：组合。","定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。","关键词：回溯 / 组合 / 哈希表 / 字符串。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：回溯法 —— 每层递归的选择列表不同（由当前数字决定）
思路：每个数字对应一组字母，用 index 控制当前处理第几个数字，
每层递归遍历该数字对应的字母，选择→递归→撤销
时间 O(3^m × 4^n)，m 是对应 3 个字母的数字个数，n 是对应 4 个字母的数字个数
空间 O(len(digits))，递归栈深度
易错点/误区：
1. form(0) 不是 form(len(digits))！index 从 0 开始，表示从第一个数字开始处理
2. for 循环遍历的是 phone[digits[index]]（当前数字的字母），不是 digits 本身
3. 不需要像全排列那样判断 "char not in path"，因为不同层的字母可以重复
4. 空字符串判断放在递归函数外面，避免每次递归都重复检查
5. 收集结果时用 ''.join(path) 拼成字符串，而不是 path.copy()`},ask:"给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。",constraints:["- 1 <= digits.length <= 4"]},{id:"39",slug:"39-组合总和",title:"组合总和",titleEn:"Combination Sum",category:"回溯",difficulty:"中等",topic:"剪枝",completed:!0,leetcodeSlug:"combination-sum",leetcodeUrl:"https://leetcode.cn/problems/combination-sum/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8C",acceptanceRate:74,solutionCount:5714,companyTagCount:101,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["回溯","剪枝","数组"],sourcePath:"hot100/10_回溯/39.组合总和.py",lastUpdated:"2026-03-22",lastUpdatedAt:"2026-03-22T12:53:17.167Z",interviewPattern:"定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",thoughts:[`需二刷：回溯 + 剪枝（可重复选元素的组合问题）
面试推荐方法：排序 + 回溯 + 剪枝
思路：对 candidates 排序后，用回溯框架从每个位置开始尝试选数，
每选一个数就从 target 中减去，直到 target  0 收集结果。
由于同一个数可以重复使用，递归时传 i 而不是 i+1。
时间 O(n^(target/min))，空间 O(target/min)
易错点/误区：
1. 递归传 i 不是 i+1 —— 因为同一个数可以重复选
对比 78.子集 传 i+1（每个数只能选一次）
2. 剪枝 if candidates[i] > target: break 必须放在选择之前
放在 pop() 之后就白白递归了一次，浪费时间
3. path.copy() 别忘括号！path.copy 不加括号只是引用，不会真正复制
4. break 不是 continue —— 排序后当前数太大，后面更大，全部跳过`],pitfalls:[`需二刷：回溯 + 剪枝（可重复选元素的组合问题）
面试推荐方法：排序 + 回溯 + 剪枝
思路：对 candidates 排序后，用回溯框架从每个位置开始尝试选数，
每选一个数就从 target 中减去，直到 target  0 收集结果。
由于同一个数可以重复使用，递归时传 i 而不是 i+1。
时间 O(n^(target/min))，空间 O(target/min)
易错点/误区：
1. 递归传 i 不是 i+1 —— 因为同一个数可以重复选
对比 78.子集 传 i+1（每个数只能选一次）
2. 剪枝 if candidates[i] > target: break 必须放在选择之前
放在 pop() 之后就白白递归了一次，浪费时间
3. path.copy() 别忘括号！path.copy 不加括号只是引用，不会真正复制
4. break 不是 continue —— 排序后当前数太大，后面更大，全部跳过`],recallBlanks:[],solutionGuide:{idea:`需二刷：回溯 + 剪枝（可重复选元素的组合问题）
面试推荐方法：排序 + 回溯 + 剪枝
思路：对 candidates 排序后，用回溯框架从每个位置开始尝试选数，
每选一个数就从 target 中减去，直到 target  0 收集结果。
由于同一个数可以重复使用，递归时传 i 而不是 i+1。
时间 O(n^(target/min))，空间 O(target/min)
易错点/误区：
1. 递归传 i 不是 i+1 —— 因为同一个数可以重复选
对比 78.子集 传 i+1（每个数只能选一次）
2. 剪枝 if candidates[i] > target: break 必须放在选择之前
放在 pop() 之后就白白递归了一次，浪费时间
3. path.copy() 别忘括号！path.copy 不加括号只是引用，不会真正复制
4. break 不是 continue —— 排序后当前数太大，后面更大，全部跳过`,interviewSteps:["先说明核心考点：剪枝。","定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。","关键词：回溯 / 剪枝 / 数组。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：回溯 + 剪枝（可重复选元素的组合问题）
面试推荐方法：排序 + 回溯 + 剪枝
思路：对 candidates 排序后，用回溯框架从每个位置开始尝试选数，
每选一个数就从 target 中减去，直到 target  0 收集结果。
由于同一个数可以重复使用，递归时传 i 而不是 i+1。
时间 O(n^(target/min))，空间 O(target/min)
易错点/误区：
1. 递归传 i 不是 i+1 —— 因为同一个数可以重复选
对比 78.子集 传 i+1（每个数只能选一次）
2. 剪枝 if candidates[i] > target: break 必须放在选择之前
放在 pop() 之后就白白递归了一次，浪费时间
3. path.copy() 别忘括号！path.copy 不加括号只是引用，不会真正复制
4. break 不是 continue —— 排序后当前数太大，后面更大，全部跳过`},ask:"给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。",constraints:["- 1 <= candidates.length <= 30","- 2 <= candidates[i] <= 40","- 1 <= target <= 40"]},{id:"22",slug:"22-括号生成",title:"括号生成",titleEn:"Generate Parentheses",category:"回溯",difficulty:"中等",topic:"有效性剪枝",completed:!0,leetcodeSlug:"generate-parentheses",leetcodeUrl:"https://leetcode.cn/problems/generate-parentheses/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%8B%AC%E5%8F%B7%E7%94%9F%E6%88%90",acceptanceRate:79,solutionCount:6715,companyTagCount:138,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["回溯","有效性剪枝","字符串","动态规划","括号序列"],sourcePath:"hot100/10_回溯/22.括号生成.py",lastUpdated:"2026-09-01",lastUpdatedAt:"2026-09-01T20:25:12.995Z",interviewPattern:"定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",thoughts:[`需二刷：经典回溯 + 剪枝（卡特兰数问题）
思路：用 DFS 枚举所有可能的括号组合，用「剪枝」保证合法性：
1. 左括号最多放 n 个（open_count < n 时才能加 '('）
2. 右括号数不能超过左括号数（close_count < open_count 时才能加 ')'）
满足以上两条，自然就不会出现非法串（如 ")()"、"())"）
当左右括号都用完时（各 n 个），收集答案
时间 O(Catalan(n))，即卡特兰数，约等于 O(4^n / √n)，空间 O(n)（递归栈深度）
易错点/误区：
1. 右括号约束写 close_count < n：会生成 "())( 这种右括号先于左括号出现的非法串
正确：close_count < open_count，保证右括号出现时必有对应的左括号
2. 忘记 return：终止 append 后继续执行会重复递归下去，产生重复答案或越界
3. 字符串拼接用 join 而非 +：join 是分隔列表的，字符串追加直接用 + 或 path + '(' 即可
4. DFS 签名缺少冒号/拼写：Python 函数定义末尾忘记加冒号，或变量名 open_count 拼成 opend_count
5. path 列表回溯写法：若用列表回溯，递归后必须 path.pop() 撤销选择`,"解法一：字符串参数隐式回溯（推荐，代码简洁）","解法二：显式列表 path 显式回溯（标准回溯模板）"],pitfalls:[`需二刷：经典回溯 + 剪枝（卡特兰数问题）
思路：用 DFS 枚举所有可能的括号组合，用「剪枝」保证合法性：
1. 左括号最多放 n 个（open_count < n 时才能加 '('）
2. 右括号数不能超过左括号数（close_count < open_count 时才能加 ')'）
满足以上两条，自然就不会出现非法串（如 ")()"、"())"）
当左右括号都用完时（各 n 个），收集答案
时间 O(Catalan(n))，即卡特兰数，约等于 O(4^n / √n)，空间 O(n)（递归栈深度）
易错点/误区：
1. 右括号约束写 close_count < n：会生成 "())( 这种右括号先于左括号出现的非法串
正确：close_count < open_count，保证右括号出现时必有对应的左括号
2. 忘记 return：终止 append 后继续执行会重复递归下去，产生重复答案或越界
3. 字符串拼接用 join 而非 +：join 是分隔列表的，字符串追加直接用 + 或 path + '(' 即可
4. DFS 签名缺少冒号/拼写：Python 函数定义末尾忘记加冒号，或变量名 open_count 拼成 opend_count
5. path 列表回溯写法：若用列表回溯，递归后必须 path.pop() 撤销选择`],recallBlanks:[{prompt:"解法一：字符串参数隐式＿＿＿（推荐，代码简洁）",answer:"回溯"}],solutionGuide:{idea:`需二刷：经典回溯 + 剪枝（卡特兰数问题）
思路：用 DFS 枚举所有可能的括号组合，用「剪枝」保证合法性：
1. 左括号最多放 n 个（open_count < n 时才能加 '('）
2. 右括号数不能超过左括号数（close_count < open_count 时才能加 ')'）
满足以上两条，自然就不会出现非法串（如 ")()"、"())"）
当左右括号都用完时（各 n 个），收集答案
时间 O(Catalan(n))，即卡特兰数，约等于 O(4^n / √n)，空间 O(n)（递归栈深度）
易错点/误区：
1. 右括号约束写 close_count < n：会生成 "())( 这种右括号先于左括号出现的非法串
正确：close_count < open_count，保证右括号出现时必有对应的左括号
2. 忘记 return：终止 append 后继续执行会重复递归下去，产生重复答案或越界
3. 字符串拼接用 join 而非 +：join 是分隔列表的，字符串追加直接用 + 或 path + '(' 即可
4. DFS 签名缺少冒号/拼写：Python 函数定义末尾忘记加冒号，或变量名 open_count 拼成 opend_count
5. path 列表回溯写法：若用列表回溯，递归后必须 path.pop() 撤销选择`,interviewSteps:["先说明核心考点：有效性剪枝。","定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。","关键词：回溯 / 有效性剪枝 / 字符串 / 动态规划。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：经典回溯 + 剪枝（卡特兰数问题）
思路：用 DFS 枚举所有可能的括号组合，用「剪枝」保证合法性：
1. 左括号最多放 n 个（open_count < n 时才能加 '('）
2. 右括号数不能超过左括号数（close_count < open_count 时才能加 ')'）
满足以上两条，自然就不会出现非法串（如 ")()"、"())"）
当左右括号都用完时（各 n 个），收集答案
时间 O(Catalan(n))，即卡特兰数，约等于 O(4^n / √n)，空间 O(n)（递归栈深度）
易错点/误区：
1. 右括号约束写 close_count < n：会生成 "())( 这种右括号先于左括号出现的非法串
正确：close_count < open_count，保证右括号出现时必有对应的左括号
2. 忘记 return：终止 append 后继续执行会重复递归下去，产生重复答案或越界
3. 字符串拼接用 join 而非 +：join 是分隔列表的，字符串追加直接用 + 或 path + '(' 即可
4. DFS 签名缺少冒号/拼写：Python 函数定义末尾忘记加冒号，或变量名 open_count 拼成 opend_count
5. path 列表回溯写法：若用列表回溯，递归后必须 path.pop() 撤销选择`},ask:"数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。",constraints:["- 1 <= n <= 8"]},{id:"79",slug:"79-单词搜索",title:"单词搜索",titleEn:"Word Search",category:"回溯",difficulty:"中等",topic:"矩阵回溯",completed:!0,leetcodeSlug:"word-search",leetcodeUrl:"https://leetcode.cn/problems/word-search/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E5%8D%95%E8%AF%8D%E6%90%9C%E7%B4%A2",acceptanceRate:51.5,solutionCount:3814,companyTagCount:90,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["回溯","矩阵回溯","深度优先搜索","数组","字符串","矩阵"],sourcePath:"hot100/10_回溯/79.单词搜索.py",lastUpdated:"2026-03-22",lastUpdatedAt:"2026-03-22T12:06:39.457Z",interviewPattern:"定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",thoughts:[`需二刷：DFS + 回溯在二维网格上的应用
思路：遍历 board 每个格子作为起点，用 DFS 沿上下左右四个方向
逐个匹配 word 中的字母，走不通就回溯（撤销 visited 标记）
时间 O(m * n * 4^L)，空间 O(m * n)  （L  word 长度）
易错点/误区：
1. 字母匹配应统一在 dfs 入口检查 board[i][j]  word[index]
不要在 dfs 内部检查 word[index+1]，会导致最后一个字母时越界
2. visited 标记必须在 for 循环结束后撤销（回溯），否则会影响其他路径
3. 边界检查用 0 < ni < m 而不是 ni > m，因为下标从 0 开始
4. dfs 返回值要用 if dfs(...): return True 接住，否则找到路径也传不回去`,"遍历 board 每个格子作为 DFS 起点"],pitfalls:[`需二刷：DFS + 回溯在二维网格上的应用
思路：遍历 board 每个格子作为起点，用 DFS 沿上下左右四个方向
逐个匹配 word 中的字母，走不通就回溯（撤销 visited 标记）
时间 O(m * n * 4^L)，空间 O(m * n)  （L  word 长度）
易错点/误区：
1. 字母匹配应统一在 dfs 入口检查 board[i][j]  word[index]
不要在 dfs 内部检查 word[index+1]，会导致最后一个字母时越界
2. visited 标记必须在 for 循环结束后撤销（回溯），否则会影响其他路径
3. 边界检查用 0 < ni < m 而不是 ni > m，因为下标从 0 开始
4. dfs 返回值要用 if dfs(...): return True 接住，否则找到路径也传不回去`,"访问矩阵，防止同一条路径中重复使用同一个格子","新坐标在边界内且未被访问过"],recallBlanks:[{prompt:"遍历 board 每个格子作为 ＿＿＿ 起点",answer:"DFS"}],solutionGuide:{idea:`需二刷：DFS + 回溯在二维网格上的应用
思路：遍历 board 每个格子作为起点，用 DFS 沿上下左右四个方向
逐个匹配 word 中的字母，走不通就回溯（撤销 visited 标记）
时间 O(m * n * 4^L)，空间 O(m * n)  （L  word 长度）
易错点/误区：
1. 字母匹配应统一在 dfs 入口检查 board[i][j]  word[index]
不要在 dfs 内部检查 word[index+1]，会导致最后一个字母时越界
2. visited 标记必须在 for 循环结束后撤销（回溯），否则会影响其他路径
3. 边界检查用 0 < ni < m 而不是 ni > m，因为下标从 0 开始
4. dfs 返回值要用 if dfs(...): return True 接住，否则找到路径也传不回去`,interviewSteps:["先说明核心考点：矩阵回溯。","定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。","关键词：回溯 / 矩阵回溯 / 深度优先搜索 / 数组。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：DFS + 回溯在二维网格上的应用
思路：遍历 board 每个格子作为起点，用 DFS 沿上下左右四个方向
逐个匹配 word 中的字母，走不通就回溯（撤销 visited 标记）
时间 O(m * n * 4^L)，空间 O(m * n)  （L  word 长度）
易错点/误区：
1. 字母匹配应统一在 dfs 入口检查 board[i][j]  word[index]
不要在 dfs 内部检查 word[index+1]，会导致最后一个字母时越界
2. visited 标记必须在 for 循环结束后撤销（回溯），否则会影响其他路径
3. 边界检查用 0 < ni < m 而不是 ni > m，因为下标从 0 开始
4. dfs 返回值要用 if dfs(...): return True 接住，否则找到路径也传不回去`},ask:"给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。",constraints:["- 1 <= m, n <= 6","- 1 <= word.length <= 15"]},{id:"131",slug:"131-分割回文串",title:"分割回文串",titleEn:"Palindrome Partitioning",category:"回溯",difficulty:"中等",topic:"回溯切分 + 回文判断剪枝",completed:!0,leetcodeSlug:"palindrome-partitioning",leetcodeUrl:"https://leetcode.cn/problems/palindrome-partitioning/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E5%88%86%E5%89%B2%E5%9B%9E%E6%96%87%E4%B8%B2",acceptanceRate:75,solutionCount:2891,companyTagCount:54,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["回溯","回溯切分 + 回文判断剪枝","字符串","动态规划"],sourcePath:"hot100/10_回溯/131.分割回文串.py",lastUpdated:"2026-08-24",lastUpdatedAt:"2026-08-24T18:53:15.719Z",interviewPattern:"定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",thoughts:[`需二刷：切分模式回溯（39 组合总和家族）+ 回文判断做剪枝开关
思路：把字符串切成若干段，每段独立必须是回文  典型切分枚举问题。
DFS(start) 从 start 位置开始，枚举 end ∈ [start, n-1] 作为
当前这一段的右端；若 s[start:end+1] 是回文则加入 path，
递归到 end+1；返回时 path.pop() 撤销；start  n 时整段切完，
收集一份 path 的副本（path 本身后续仍会被回溯修改）。
时间 O(n·2ⁿ)：2^(n-1) 种切法 × 每次回文判断最多 O(n)；
若预处理回文 DP 表可把「判断」降为 O(1)，仍乘组合因子。
空间 O(n²)：递归深度为 n（每层至少切一个字符）；
若加回文预处理表则额外 n×n，此处未加。
易错点/误区（本轮真实踩过）：
1. 【犯过】终止条件写成 if start  n-1：会提前一拍停止，
漏掉最后那个字符；正确：start  n（越过末尾才算切完所有字符）。
2. 【犯过】切片写成 s[start:end]：Python 切片是左闭右开，
会丢掉 s[end] 这个字符；正确：s[start:end+1]。
3. 【犯过】下一层 DFS 写成 dfs(start+1)：start 本身未前进时
start+1 会和刚切完的段发生重叠；正确：dfs(end+1)，正好跳过已用段。
4. 【犯过】res.append(path.copy)：漏括号拿到的是方法对象不是列表；
正确：res.append(path.copy())  或 res.append(path[:]) / res.append(list(path))。
5. 【犯过】return 放在 if 外 / 整体遗漏 return res：
前者会让 dfs 每次都立刻 return，for 循环永不执行；
后者会让调用方拿到 None（189/31 同款缩进 + 遗漏返回值组合坑）。`,"核心剪枝：这段是回文才进下一层"],pitfalls:[`需二刷：切分模式回溯（39 组合总和家族）+ 回文判断做剪枝开关
思路：把字符串切成若干段，每段独立必须是回文  典型切分枚举问题。
DFS(start) 从 start 位置开始，枚举 end ∈ [start, n-1] 作为
当前这一段的右端；若 s[start:end+1] 是回文则加入 path，
递归到 end+1；返回时 path.pop() 撤销；start  n 时整段切完，
收集一份 path 的副本（path 本身后续仍会被回溯修改）。
时间 O(n·2ⁿ)：2^(n-1) 种切法 × 每次回文判断最多 O(n)；
若预处理回文 DP 表可把「判断」降为 O(1)，仍乘组合因子。
空间 O(n²)：递归深度为 n（每层至少切一个字符）；
若加回文预处理表则额外 n×n，此处未加。
易错点/误区（本轮真实踩过）：
1. 【犯过】终止条件写成 if start  n-1：会提前一拍停止，
漏掉最后那个字符；正确：start  n（越过末尾才算切完所有字符）。
2. 【犯过】切片写成 s[start:end]：Python 切片是左闭右开，
会丢掉 s[end] 这个字符；正确：s[start:end+1]。
3. 【犯过】下一层 DFS 写成 dfs(start+1)：start 本身未前进时
start+1 会和刚切完的段发生重叠；正确：dfs(end+1)，正好跳过已用段。
4. 【犯过】res.append(path.copy)：漏括号拿到的是方法对象不是列表；
正确：res.append(path.copy())  或 res.append(path[:]) / res.append(list(path))。
5. 【犯过】return 放在 if 外 / 整体遗漏 return res：
前者会让 dfs 每次都立刻 return，for 循环永不执行；
后者会让调用方拿到 None（189/31 同款缩进 + 遗漏返回值组合坑）。`],recallBlanks:[{prompt:"核心＿＿＿：这段是回文才进下一层",answer:"剪枝"}],solutionGuide:{idea:`需二刷：切分模式回溯（39 组合总和家族）+ 回文判断做剪枝开关
思路：把字符串切成若干段，每段独立必须是回文  典型切分枚举问题。
DFS(start) 从 start 位置开始，枚举 end ∈ [start, n-1] 作为
当前这一段的右端；若 s[start:end+1] 是回文则加入 path，
递归到 end+1；返回时 path.pop() 撤销；start  n 时整段切完，
收集一份 path 的副本（path 本身后续仍会被回溯修改）。
时间 O(n·2ⁿ)：2^(n-1) 种切法 × 每次回文判断最多 O(n)；
若预处理回文 DP 表可把「判断」降为 O(1)，仍乘组合因子。
空间 O(n²)：递归深度为 n（每层至少切一个字符）；
若加回文预处理表则额外 n×n，此处未加。
易错点/误区（本轮真实踩过）：
1. 【犯过】终止条件写成 if start  n-1：会提前一拍停止，
漏掉最后那个字符；正确：start  n（越过末尾才算切完所有字符）。
2. 【犯过】切片写成 s[start:end]：Python 切片是左闭右开，
会丢掉 s[end] 这个字符；正确：s[start:end+1]。
3. 【犯过】下一层 DFS 写成 dfs(start+1)：start 本身未前进时
start+1 会和刚切完的段发生重叠；正确：dfs(end+1)，正好跳过已用段。
4. 【犯过】res.append(path.copy)：漏括号拿到的是方法对象不是列表；
正确：res.append(path.copy())  或 res.append(path[:]) / res.append(list(path))。
5. 【犯过】return 放在 if 外 / 整体遗漏 return res：
前者会让 dfs 每次都立刻 return，for 循环永不执行；
后者会让调用方拿到 None（189/31 同款缩进 + 遗漏返回值组合坑）。`,interviewSteps:["先说明核心考点：回溯切分 + 回文判断剪枝。","定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。","关键词：回溯 / 回溯切分 + 回文判断剪枝 / 字符串 / 动态规划。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：切分模式回溯（39 组合总和家族）+ 回文判断做剪枝开关
思路：把字符串切成若干段，每段独立必须是回文  典型切分枚举问题。
DFS(start) 从 start 位置开始，枚举 end ∈ [start, n-1] 作为
当前这一段的右端；若 s[start:end+1] 是回文则加入 path，
递归到 end+1；返回时 path.pop() 撤销；start  n 时整段切完，
收集一份 path 的副本（path 本身后续仍会被回溯修改）。
时间 O(n·2ⁿ)：2^(n-1) 种切法 × 每次回文判断最多 O(n)；
若预处理回文 DP 表可把「判断」降为 O(1)，仍乘组合因子。
空间 O(n²)：递归深度为 n（每层至少切一个字符）；
若加回文预处理表则额外 n×n，此处未加。
易错点/误区（本轮真实踩过）：
1. 【犯过】终止条件写成 if start  n-1：会提前一拍停止，
漏掉最后那个字符；正确：start  n（越过末尾才算切完所有字符）。
2. 【犯过】切片写成 s[start:end]：Python 切片是左闭右开，
会丢掉 s[end] 这个字符；正确：s[start:end+1]。
3. 【犯过】下一层 DFS 写成 dfs(start+1)：start 本身未前进时
start+1 会和刚切完的段发生重叠；正确：dfs(end+1)，正好跳过已用段。
4. 【犯过】res.append(path.copy)：漏括号拿到的是方法对象不是列表；
正确：res.append(path.copy())  或 res.append(path[:]) / res.append(list(path))。
5. 【犯过】return 放在 if 外 / 整体遗漏 return res：
前者会让 dfs 每次都立刻 return，for 循环永不执行；
后者会让调用方拿到 None（189/31 同款缩进 + 遗漏返回值组合坑）。`},ask:"给你一个字符串 s，请你将 s 分割成一些 子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。",constraints:["- 1 <= s.length <= 16"]},{id:"51",slug:"51-n-皇后",title:"N 皇后",titleEn:"N-Queens",category:"回溯",difficulty:"困难",topic:"棋盘回溯 + 三集合冲突检测",completed:!0,leetcodeSlug:"n-queens",leetcodeUrl:"https://leetcode.cn/problems/n-queens/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=N%20%E7%9A%87%E5%90%8E",acceptanceRate:75.2,solutionCount:4476,companyTagCount:77,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["回溯","棋盘回溯 + 三集合冲突检测","数组","X 算法"],sourcePath:"hot100/10_回溯/51.N 皇后.py",lastUpdated:"2026-08-24",lastUpdatedAt:"2026-08-24T19:40:27.431Z",interviewPattern:"定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。",thoughts:[`需二刷：回溯 + 三集合冲突检测（列、主副对角线）
思路：逐行放置皇后，每行枚举所有列，用三个集合 O(1) 判断冲突，
无冲突则放置并递归下一行，回溯时撤销放置和集合标记。
时间 O(n!)：第 i 行最多 n-i 种选择，剪枝后仍为阶乘级
空间 O(n)：递归栈深度 + 三个集合各存最多 n 个元素；棋盘占 O(n²) 辅助存储
易错点/误区：
1. 收集答案用 board.copy()（浅拷贝）→ 内层行列表共享引用，所有方案会被最后一次回溯覆盖。
正确：用 [''.join(row) for row in board]，生成全新的字符串列表，天然独立且匹配输出格式。
2. 冲突检查误写 board[row][col] not in used_cols → 字符和列号类型不匹配，永远查不到。
正确：用 col、row-col、row+col 三个「坐标标识」去对应集合中检查。
3. 对角线标识混淆：主对角线↘（斜率1）是 row-col，副对角线↙（斜率-1）是 row+col，搞反会整题错。
4. 回溯时 add 和 remove 必须严格对称（顺序和参数都要对应），漏删会导致后续冲突判断被污染。`,"递归处理下一行"],pitfalls:[`需二刷：回溯 + 三集合冲突检测（列、主副对角线）
思路：逐行放置皇后，每行枚举所有列，用三个集合 O(1) 判断冲突，
无冲突则放置并递归下一行，回溯时撤销放置和集合标记。
时间 O(n!)：第 i 行最多 n-i 种选择，剪枝后仍为阶乘级
空间 O(n)：递归栈深度 + 三个集合各存最多 n 个元素；棋盘占 O(n²) 辅助存储
易错点/误区：
1. 收集答案用 board.copy()（浅拷贝）→ 内层行列表共享引用，所有方案会被最后一次回溯覆盖。
正确：用 [''.join(row) for row in board]，生成全新的字符串列表，天然独立且匹配输出格式。
2. 冲突检查误写 board[row][col] not in used_cols → 字符和列号类型不匹配，永远查不到。
正确：用 col、row-col、row+col 三个「坐标标识」去对应集合中检查。
3. 对角线标识混淆：主对角线↘（斜率1）是 row-col，副对角线↙（斜率-1）是 row+col，搞反会整题错。
4. 回溯时 add 和 remove 必须严格对称（顺序和参数都要对应），漏删会导致后续冲突判断被污染。`],recallBlanks:[],solutionGuide:{idea:`需二刷：回溯 + 三集合冲突检测（列、主副对角线）
思路：逐行放置皇后，每行枚举所有列，用三个集合 O(1) 判断冲突，
无冲突则放置并递归下一行，回溯时撤销放置和集合标记。
时间 O(n!)：第 i 行最多 n-i 种选择，剪枝后仍为阶乘级
空间 O(n)：递归栈深度 + 三个集合各存最多 n 个元素；棋盘占 O(n²) 辅助存储
易错点/误区：
1. 收集答案用 board.copy()（浅拷贝）→ 内层行列表共享引用，所有方案会被最后一次回溯覆盖。
正确：用 [''.join(row) for row in board]，生成全新的字符串列表，天然独立且匹配输出格式。
2. 冲突检查误写 board[row][col] not in used_cols → 字符和列号类型不匹配，永远查不到。
正确：用 col、row-col、row+col 三个「坐标标识」去对应集合中检查。
3. 对角线标识混淆：主对角线↘（斜率1）是 row-col，副对角线↙（斜率-1）是 row+col，搞反会整题错。
4. 回溯时 add 和 remove 必须严格对称（顺序和参数都要对应），漏删会导致后续冲突判断被污染。`,interviewSteps:["先说明核心考点：棋盘回溯 + 三集合冲突检测。","定义 path、choice、结束条件和撤销动作，剪枝条件要写在进入递归之前。","关键词：回溯 / 棋盘回溯 + 三集合冲突检测 / 数组 / X 算法。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：回溯 + 三集合冲突检测（列、主副对角线）
思路：逐行放置皇后，每行枚举所有列，用三个集合 O(1) 判断冲突，
无冲突则放置并递归下一行，回溯时撤销放置和集合标记。
时间 O(n!)：第 i 行最多 n-i 种选择，剪枝后仍为阶乘级
空间 O(n)：递归栈深度 + 三个集合各存最多 n 个元素；棋盘占 O(n²) 辅助存储
易错点/误区：
1. 收集答案用 board.copy()（浅拷贝）→ 内层行列表共享引用，所有方案会被最后一次回溯覆盖。
正确：用 [''.join(row) for row in board]，生成全新的字符串列表，天然独立且匹配输出格式。
2. 冲突检查误写 board[row][col] not in used_cols → 字符和列号类型不匹配，永远查不到。
正确：用 col、row-col、row+col 三个「坐标标识」去对应集合中检查。
3. 对角线标识混淆：主对角线↘（斜率1）是 row-col，副对角线↙（斜率-1）是 row+col，搞反会整题错。
4. 回溯时 add 和 remove 必须严格对称（顺序和参数都要对应），漏删会导致后续冲突判断被污染。`},ask:"按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。",constraints:["- 1 <= n <= 9"]},{id:"33",slug:"33-搜索旋转排序数组",title:"搜索旋转排序数组",titleEn:"Search in Rotated Sorted Array",category:"二分查找",difficulty:"中等",topic:"二分变形",completed:!0,leetcodeSlug:"search-in-rotated-sorted-array",leetcodeUrl:"https://leetcode.cn/problems/search-in-rotated-sorted-array/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%90%9C%E7%B4%A2%E6%97%8B%E8%BD%AC%E6%8E%92%E5%BA%8F%E6%95%B0%E7%BB%84",acceptanceRate:46.5,solutionCount:6653,companyTagCount:153,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["二分查找","二分变形","数组"],sourcePath:"hot100/11_二分查找/33.搜索旋转排序数组.py",lastUpdated:"2026-03-26",lastUpdatedAt:"2026-03-26T08:05:20.985Z",interviewPattern:"先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。",thoughts:[`需二刷：旋转数组二分查找（判断有序半边 + 范围收缩）
思路：每次取 mid，必有一半有序。在有序半边判断 target 是否在范围内，
在就往那边缩，不在就去另一边。
时间 O(log n)，空间 O(1)
易错点/误区：
1. 循环条件必须是 left < right（下标），不是 nums[left] 和 nums[right] 比值
→ 旋转数组的值关系不稳定，用值判断会导致提前退出循环
2. 判断左半边有序用 <：nums[left] < nums[mid]（等号处理 left  mid 的情况）
3. 判断 target 范围时注意 < 和 < 的区别：
nums[mid] 已经判断过不等于 target，所以和 mid 比较用严格 <
4. 不需要嵌套二分！while 循环本身就在不断二分，每次只移动 left 或 right
💡 面试技巧：
- 先跟面试官确认：数组中有无重复元素？（有重复是 81 题，更复杂）
- 可以先画图说明旋转数组的两段递增结构，再推导二分逻辑
- 面试时 mid 的计算推荐写 left + (right - left) // 2，防止整数溢出
（Python 无溢出问题，但 Java/C++ 面试中这是加分项）`],pitfalls:[`需二刷：旋转数组二分查找（判断有序半边 + 范围收缩）
思路：每次取 mid，必有一半有序。在有序半边判断 target 是否在范围内，
在就往那边缩，不在就去另一边。
时间 O(log n)，空间 O(1)
易错点/误区：
1. 循环条件必须是 left < right（下标），不是 nums[left] 和 nums[right] 比值
→ 旋转数组的值关系不稳定，用值判断会导致提前退出循环
2. 判断左半边有序用 <：nums[left] < nums[mid]（等号处理 left  mid 的情况）
3. 判断 target 范围时注意 < 和 < 的区别：
nums[mid] 已经判断过不等于 target，所以和 mid 比较用严格 <
4. 不需要嵌套二分！while 循环本身就在不断二分，每次只移动 left 或 right
💡 面试技巧：
- 先跟面试官确认：数组中有无重复元素？（有重复是 81 题，更复杂）
- 可以先画图说明旋转数组的两段递增结构，再推导二分逻辑
- 面试时 mid 的计算推荐写 left + (right - left) // 2，防止整数溢出
（Python 无溢出问题，但 Java/C++ 面试中这是加分项）`],recallBlanks:[],solutionGuide:{idea:`需二刷：旋转数组二分查找（判断有序半边 + 范围收缩）
思路：每次取 mid，必有一半有序。在有序半边判断 target 是否在范围内，
在就往那边缩，不在就去另一边。
时间 O(log n)，空间 O(1)
易错点/误区：
1. 循环条件必须是 left < right（下标），不是 nums[left] 和 nums[right] 比值
→ 旋转数组的值关系不稳定，用值判断会导致提前退出循环
2. 判断左半边有序用 <：nums[left] < nums[mid]（等号处理 left  mid 的情况）
3. 判断 target 范围时注意 < 和 < 的区别：
nums[mid] 已经判断过不等于 target，所以和 mid 比较用严格 <
4. 不需要嵌套二分！while 循环本身就在不断二分，每次只移动 left 或 right
💡 面试技巧：
- 先跟面试官确认：数组中有无重复元素？（有重复是 81 题，更复杂）
- 可以先画图说明旋转数组的两段递增结构，再推导二分逻辑
- 面试时 mid 的计算推荐写 left + (right - left) // 2，防止整数溢出
（Python 无溢出问题，但 Java/C++ 面试中这是加分项）`,interviewSteps:["先说明核心考点：二分变形。","先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。","关键词：二分查找 / 二分变形 / 数组。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：旋转数组二分查找（判断有序半边 + 范围收缩）
思路：每次取 mid，必有一半有序。在有序半边判断 target 是否在范围内，
在就往那边缩，不在就去另一边。
时间 O(log n)，空间 O(1)
易错点/误区：
1. 循环条件必须是 left < right（下标），不是 nums[left] 和 nums[right] 比值
→ 旋转数组的值关系不稳定，用值判断会导致提前退出循环
2. 判断左半边有序用 <：nums[left] < nums[mid]（等号处理 left  mid 的情况）
3. 判断 target 范围时注意 < 和 < 的区别：
nums[mid] 已经判断过不等于 target，所以和 mid 比较用严格 <
4. 不需要嵌套二分！while 循环本身就在不断二分，每次只移动 left 或 right
💡 面试技巧：
- 先跟面试官确认：数组中有无重复元素？（有重复是 81 题，更复杂）
- 可以先画图说明旋转数组的两段递增结构，再推导二分逻辑
- 面试时 mid 的计算推荐写 left + (right - left) // 2，防止整数溢出
（Python 无溢出问题，但 Java/C++ 面试中这是加分项）`},ask:"整数数组 nums 按升序排列，数组中的值 互不相同 。",constraints:["- 1 <= nums.length <= 5000","- -10^4 <= nums[i] <= 10^4","- -10^4 <= target <= 10^4"]},{id:"34",slug:"34-在排序数组中查找首尾位置",title:"在排序数组中查找元素的第一个和最后一个位置",titleEn:"Find First and Last Position of Element in Sorted Array",category:"二分查找",difficulty:"中等",topic:"二分边界",completed:!0,leetcodeSlug:"find-first-and-last-position-of-element-in-sorted-array",leetcodeUrl:"https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E5%9C%A8%E6%8E%92%E5%BA%8F%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9F%A5%E6%89%BE%E5%85%83%E7%B4%A0%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%92%8C%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%E4%BD%8D%E7%BD%AE",acceptanceRate:47,solutionCount:10640,companyTagCount:102,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["二分查找","二分边界","数组"],sourcePath:"hot100/11_二分查找/34.在排序数组中查找元素的第一个和最后一个位置.py",lastUpdated:"2026-04-02",lastUpdatedAt:"2026-04-02T09:55:07.616Z",interviewPattern:"先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。",thoughts:[`需二刷：二分查找找边界（左边界 + 右边界）
思路：两次二分查找，分别找 target 的第一个位置（左边界）和最后一个位置（右边界）
- 找左边界：nums[mid] > target 时收缩右边界（right  mid），让搜索往左逼近
- 找右边界：nums[mid] < target 时收缩左边界（left  mid + 1），让搜索往右逼近
时间 O(log n)，空间 O(1)
易错点/误区：
1. left  mid 会导致死循环（当 left+1  right 时 mid  left，永远不变）
正确做法：left  mid + 1，确保搜索范围一定缩小
2. 找右边界时方向容易搞反——nums[mid] < target 应该让 left 右移而非 right 左移
3. 找右边界用 right  mid（不要 mid-1），配合 while left ! right 使用，
否则 left 可能跳过 right 导致死循环
4. target 可能不在数组中但在 nums[0] 和 nums[-1] 范围内（如 [1,3,5] 找 2），
需要在左边界二分后验证 nums[left]  target
5. 右边界的结果是 right - 1（因为 left  mid + 1 会多走一步）`,`📝 面试推荐写法：提取通用 bisect 函数
核心思想：把「找左边界」和「找右边界」统一为一个函数
bisect_left(target)  → 第一个 > target 的位置
bisect_right(target) → 第一个 > target 的位置（即 bisect_left(target+1)）
右边界  bisect_right(target) - 1
class Solution:
def searchRange(self, nums: List[int], target: int) -> List[int]:
def bisect_left(target):
"""找第一个 > target 的位置"""
lo, hi  0, len(nums)
while lo < hi:
mid  (lo + hi) // 2
if nums[mid] > target:
hi  mid
else:
lo  mid + 1
return lo
left  bisect_left(target)
# target 不存在
if left > len(nums) or nums[left] ! target:
return [-1, -1]
# 右边界  第一个 > target 的位置 - 1  bisect_left(target+1) - 1
right  bisect_left(target + 1) - 1
return [left, right]`],pitfalls:[`需二刷：二分查找找边界（左边界 + 右边界）
思路：两次二分查找，分别找 target 的第一个位置（左边界）和最后一个位置（右边界）
- 找左边界：nums[mid] > target 时收缩右边界（right  mid），让搜索往左逼近
- 找右边界：nums[mid] < target 时收缩左边界（left  mid + 1），让搜索往右逼近
时间 O(log n)，空间 O(1)
易错点/误区：
1. left  mid 会导致死循环（当 left+1  right 时 mid  left，永远不变）
正确做法：left  mid + 1，确保搜索范围一定缩小
2. 找右边界时方向容易搞反——nums[mid] < target 应该让 left 右移而非 right 左移
3. 找右边界用 right  mid（不要 mid-1），配合 while left ! right 使用，
否则 left 可能跳过 right 导致死循环
4. target 可能不在数组中但在 nums[0] 和 nums[-1] 范围内（如 [1,3,5] 找 2），
需要在左边界二分后验证 nums[left]  target
5. 右边界的结果是 right - 1（因为 left  mid + 1 会多走一步）`,"第一次二分：找左边界","第二次二分：找右边界",`📝 面试推荐写法：提取通用 bisect 函数
核心思想：把「找左边界」和「找右边界」统一为一个函数
bisect_left(target)  → 第一个 > target 的位置
bisect_right(target) → 第一个 > target 的位置（即 bisect_left(target+1)）
右边界  bisect_right(target) - 1
class Solution:
def searchRange(self, nums: List[int], target: int) -> List[int]:
def bisect_left(target):
"""找第一个 > target 的位置"""
lo, hi  0, len(nums)
while lo < hi:
mid  (lo + hi) // 2
if nums[mid] > target:
hi  mid
else:
lo  mid + 1
return lo
left  bisect_left(target)
# target 不存在
if left > len(nums) or nums[left] ! target:
return [-1, -1]
# 右边界  第一个 > target 的位置 - 1  bisect_left(target+1) - 1
right  bisect_left(target + 1) - 1
return [left, right]`],recallBlanks:[],solutionGuide:{idea:`需二刷：二分查找找边界（左边界 + 右边界）
思路：两次二分查找，分别找 target 的第一个位置（左边界）和最后一个位置（右边界）
- 找左边界：nums[mid] > target 时收缩右边界（right  mid），让搜索往左逼近
- 找右边界：nums[mid] < target 时收缩左边界（left  mid + 1），让搜索往右逼近
时间 O(log n)，空间 O(1)
易错点/误区：
1. left  mid 会导致死循环（当 left+1  right 时 mid  left，永远不变）
正确做法：left  mid + 1，确保搜索范围一定缩小
2. 找右边界时方向容易搞反——nums[mid] < target 应该让 left 右移而非 right 左移
3. 找右边界用 right  mid（不要 mid-1），配合 while left ! right 使用，
否则 left 可能跳过 right 导致死循环
4. target 可能不在数组中但在 nums[0] 和 nums[-1] 范围内（如 [1,3,5] 找 2），
需要在左边界二分后验证 nums[left]  target
5. 右边界的结果是 right - 1（因为 left  mid + 1 会多走一步）`,interviewSteps:["先说明核心考点：二分边界。","先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。","关键词：二分查找 / 二分边界 / 数组。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：二分查找找边界（左边界 + 右边界）
思路：两次二分查找，分别找 target 的第一个位置（左边界）和最后一个位置（右边界）
- 找左边界：nums[mid] > target 时收缩右边界（right  mid），让搜索往左逼近
- 找右边界：nums[mid] < target 时收缩左边界（left  mid + 1），让搜索往右逼近
时间 O(log n)，空间 O(1)
易错点/误区：
1. left  mid 会导致死循环（当 left+1  right 时 mid  left，永远不变）
正确做法：left  mid + 1，确保搜索范围一定缩小
2. 找右边界时方向容易搞反——nums[mid] < target 应该让 left 右移而非 right 左移
3. 找右边界用 right  mid（不要 mid-1），配合 while left ! right 使用，
否则 left 可能跳过 right 导致死循环
4. target 可能不在数组中但在 nums[0] 和 nums[-1] 范围内（如 [1,3,5] 找 2），
需要在左边界二分后验证 nums[left]  target
5. 右边界的结果是 right - 1（因为 left  mid + 1 会多走一步）`},ask:"给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。",constraints:["- 0 <= nums.length <= 10^5","- -10^9 <= nums[i] <= 10^9","- -10^9 <= target <= 10^9"]},{id:"35",slug:"35-搜索插入位置",title:"搜索插入位置",titleEn:"Search Insert Position",category:"二分查找",difficulty:"简单",topic:"标准二分",completed:!0,leetcodeSlug:"search-insert-position",leetcodeUrl:"https://leetcode.cn/problems/search-insert-position/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%90%9C%E7%B4%A2%E6%8F%92%E5%85%A5%E4%BD%8D%E7%BD%AE",acceptanceRate:49.8,solutionCount:10567,companyTagCount:71,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["二分查找","标准二分","数组"],sourcePath:"hot100/11_二分查找/35.搜索插入位置.py",lastUpdated:"2026-08-27",lastUpdatedAt:"2026-08-27T19:47:41.192Z",interviewPattern:"先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。",thoughts:[`需二刷：二分查找标准模板，用来找边界感
思路：标准二分查找。如果 target 不在数组中，while 循环结束时，left 刚好指向第一个大于 target 的元素位置（即插入位置）。
时间 O(log n)，空间 O(1)
易错点/误区：
1. 企图再次排序：题目给了有序数组，且要求 O(log n)，排序会变 O(n log n)。
2. 死循环坑：当 nums[mid] < target 时，必须 left  mid + 1。写成 left  mid 会在剩 2 个元素时死循环。
3. 边界收缩方向反了：nums[mid] > target 意味着 target 在左半区，右边界应该收缩 (right  mid - 1)，别写成 mid + 1。
4. 找不到 target 时怎么返回：退出循环时，left 刚好是正确的插入位置，所以 return left，不要纠结 return mid 还是其他的。`],pitfalls:[`需二刷：二分查找标准模板，用来找边界感
思路：标准二分查找。如果 target 不在数组中，while 循环结束时，left 刚好指向第一个大于 target 的元素位置（即插入位置）。
时间 O(log n)，空间 O(1)
易错点/误区：
1. 企图再次排序：题目给了有序数组，且要求 O(log n)，排序会变 O(n log n)。
2. 死循环坑：当 nums[mid] < target 时，必须 left  mid + 1。写成 left  mid 会在剩 2 个元素时死循环。
3. 边界收缩方向反了：nums[mid] > target 意味着 target 在左半区，右边界应该收缩 (right  mid - 1)，别写成 mid + 1。
4. 找不到 target 时怎么返回：退出循环时，left 刚好是正确的插入位置，所以 return left，不要纠结 return mid 还是其他的。`],recallBlanks:[],solutionGuide:{idea:`需二刷：二分查找标准模板，用来找边界感
思路：标准二分查找。如果 target 不在数组中，while 循环结束时，left 刚好指向第一个大于 target 的元素位置（即插入位置）。
时间 O(log n)，空间 O(1)
易错点/误区：
1. 企图再次排序：题目给了有序数组，且要求 O(log n)，排序会变 O(n log n)。
2. 死循环坑：当 nums[mid] < target 时，必须 left  mid + 1。写成 left  mid 会在剩 2 个元素时死循环。
3. 边界收缩方向反了：nums[mid] > target 意味着 target 在左半区，右边界应该收缩 (right  mid - 1)，别写成 mid + 1。
4. 找不到 target 时怎么返回：退出循环时，left 刚好是正确的插入位置，所以 return left，不要纠结 return mid 还是其他的。`,interviewSteps:["先说明核心考点：标准二分。","先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。","关键词：二分查找 / 标准二分 / 数组。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：二分查找标准模板，用来找边界感
思路：标准二分查找。如果 target 不在数组中，while 循环结束时，left 刚好指向第一个大于 target 的元素位置（即插入位置）。
时间 O(log n)，空间 O(1)
易错点/误区：
1. 企图再次排序：题目给了有序数组，且要求 O(log n)，排序会变 O(n log n)。
2. 死循环坑：当 nums[mid] < target 时，必须 left  mid + 1。写成 left  mid 会在剩 2 个元素时死循环。
3. 边界收缩方向反了：nums[mid] > target 意味着 target 在左半区，右边界应该收缩 (right  mid - 1)，别写成 mid + 1。
4. 找不到 target 时怎么返回：退出循环时，left 刚好是正确的插入位置，所以 return left，不要纠结 return mid 还是其他的。`},ask:"给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。",constraints:["- 1 <= nums.length <= 10^4","- -10^4 <= nums[i] <= 10^4","- -10^4 <= target <= 10^4"]},{id:"74",slug:"74-搜索二维矩阵",title:"搜索二维矩阵",titleEn:"Search a 2D Matrix",category:"二分查找",difficulty:"中等",topic:"二分 / Z 字形",completed:!0,leetcodeSlug:"search-a-2d-matrix",leetcodeUrl:"https://leetcode.cn/problems/search-a-2d-matrix/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%90%9C%E7%B4%A2%E4%BA%8C%E7%BB%B4%E7%9F%A9%E9%98%B5",acceptanceRate:52.6,solutionCount:4446,companyTagCount:78,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["二分查找","二分 / Z 字形","数组","矩阵"],sourcePath:"hot100/11_二分查找/74.搜索二维矩阵.py",lastUpdated:"2026-08-27",lastUpdatedAt:"2026-08-27T21:22:04.828Z",interviewPattern:"先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。",thoughts:[`需二刷：降维打击，一维二分查找变形
思路：将 m x n 的矩阵拉平看作一个长度为 m*n 的一维有序数组，直接使用标准二分查找。
核心在于坐标转换：一维索引 mid 对应的二维坐标为 row  mid // n, col  mid % n。
时间 O(log(m*n))，空间 O(1)
易错点/误区：
1. 坐标转换公式的除数和模数必须是列数 n，不是行数 m！实战极容易敲错。
2. 如果矩阵为空（比如 matrix[] 或 matrix[[]]），要特别小心越界，好在力扣这题给了约束 m,n > 1。`],pitfalls:[`需二刷：降维打击，一维二分查找变形
思路：将 m x n 的矩阵拉平看作一个长度为 m*n 的一维有序数组，直接使用标准二分查找。
核心在于坐标转换：一维索引 mid 对应的二维坐标为 row  mid // n, col  mid % n。
时间 O(log(m*n))，空间 O(1)
易错点/误区：
1. 坐标转换公式的除数和模数必须是列数 n，不是行数 m！实战极容易敲错。
2. 如果矩阵为空（比如 matrix[] 或 matrix[[]]），要特别小心越界，好在力扣这题给了约束 m,n > 1。`],recallBlanks:[],solutionGuide:{idea:`需二刷：降维打击，一维二分查找变形
思路：将 m x n 的矩阵拉平看作一个长度为 m*n 的一维有序数组，直接使用标准二分查找。
核心在于坐标转换：一维索引 mid 对应的二维坐标为 row  mid // n, col  mid % n。
时间 O(log(m*n))，空间 O(1)
易错点/误区：
1. 坐标转换公式的除数和模数必须是列数 n，不是行数 m！实战极容易敲错。
2. 如果矩阵为空（比如 matrix[] 或 matrix[[]]），要特别小心越界，好在力扣这题给了约束 m,n > 1。`,interviewSteps:["先说明核心考点：二分 / Z 字形。","先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。","关键词：二分查找 / 二分 / Z 字形 / 数组 / 矩阵。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：降维打击，一维二分查找变形
思路：将 m x n 的矩阵拉平看作一个长度为 m*n 的一维有序数组，直接使用标准二分查找。
核心在于坐标转换：一维索引 mid 对应的二维坐标为 row  mid // n, col  mid % n。
时间 O(log(m*n))，空间 O(1)
易错点/误区：
1. 坐标转换公式的除数和模数必须是列数 n，不是行数 m！实战极容易敲错。
2. 如果矩阵为空（比如 matrix[] 或 matrix[[]]），要特别小心越界，好在力扣这题给了约束 m,n > 1。`},ask:"给你一个满足下述两条属性的 m x n 整数矩阵：",constraints:["- 1 <= m, n <= 100","- -10^4 <= matrix[i][j], target <= 10^4"]},{id:"153",slug:"153-寻找旋转排序数组中的最小值",title:"寻找旋转排序数组中的最小值",titleEn:"Find Minimum in Rotated Sorted Array",category:"二分查找",difficulty:"中等",topic:"二分变形",completed:!0,leetcodeSlug:"find-minimum-in-rotated-sorted-array",leetcodeUrl:"https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E5%AF%BB%E6%89%BE%E6%97%8B%E8%BD%AC%E6%8E%92%E5%BA%8F%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E6%9C%80%E5%B0%8F%E5%80%BC",acceptanceRate:59.4,solutionCount:3924,companyTagCount:78,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["二分查找","二分变形","数组"],sourcePath:"hot100/11_二分查找/153.寻找旋转排序数组中的最小值.py",lastUpdated:"2026-08-27",lastUpdatedAt:"2026-08-27T21:51:36.619Z",interviewPattern:"先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。",thoughts:[`需二刷：二分查找寻找旋转边界
思路：核心是利用 nums[mid] 和 nums[right] 的比较来判断“断崖”（最小值）在哪半边。
如果 nums[mid] > nums[right]，说明右边有断崖，最小值肯定在右半边，left  mid + 1。
如果 nums[mid] < nums[right]，说明右半边是正常升序的，最小值在左半边或者就是 mid 本身，right  mid。
时间 O(log n)，空间 O(1)
易错点/误区：
1. 为什么不用 nums[left] 比较？因为当数组没有旋转（如 [1,2,3]）时，比较 left 需要额外写特判，而比较 right 完美兼容所有情况。
2. 防死循环奥义：循环条件必须是 left < right。因为有了 right  mid 这种保留中点的写法，如果写成 left < right，当剩一个元素时就会无限死循环。
3. 收缩右边界时是 right  mid 而不是 mid - 1，因为 nums[mid] 完全有可能就是那个最小值，不能跨过它。`],pitfalls:[`需二刷：二分查找寻找旋转边界
思路：核心是利用 nums[mid] 和 nums[right] 的比较来判断“断崖”（最小值）在哪半边。
如果 nums[mid] > nums[right]，说明右边有断崖，最小值肯定在右半边，left  mid + 1。
如果 nums[mid] < nums[right]，说明右半边是正常升序的，最小值在左半边或者就是 mid 本身，right  mid。
时间 O(log n)，空间 O(1)
易错点/误区：
1. 为什么不用 nums[left] 比较？因为当数组没有旋转（如 [1,2,3]）时，比较 left 需要额外写特判，而比较 right 完美兼容所有情况。
2. 防死循环奥义：循环条件必须是 left < right。因为有了 right  mid 这种保留中点的写法，如果写成 left < right，当剩一个元素时就会无限死循环。
3. 收缩右边界时是 right  mid 而不是 mid - 1，因为 nums[mid] 完全有可能就是那个最小值，不能跨过它。`],recallBlanks:[],solutionGuide:{idea:`需二刷：二分查找寻找旋转边界
思路：核心是利用 nums[mid] 和 nums[right] 的比较来判断“断崖”（最小值）在哪半边。
如果 nums[mid] > nums[right]，说明右边有断崖，最小值肯定在右半边，left  mid + 1。
如果 nums[mid] < nums[right]，说明右半边是正常升序的，最小值在左半边或者就是 mid 本身，right  mid。
时间 O(log n)，空间 O(1)
易错点/误区：
1. 为什么不用 nums[left] 比较？因为当数组没有旋转（如 [1,2,3]）时，比较 left 需要额外写特判，而比较 right 完美兼容所有情况。
2. 防死循环奥义：循环条件必须是 left < right。因为有了 right  mid 这种保留中点的写法，如果写成 left < right，当剩一个元素时就会无限死循环。
3. 收缩右边界时是 right  mid 而不是 mid - 1，因为 nums[mid] 完全有可能就是那个最小值，不能跨过它。`,interviewSteps:["先说明核心考点：二分变形。","先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。","关键词：二分查找 / 二分变形 / 数组。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：二分查找寻找旋转边界
思路：核心是利用 nums[mid] 和 nums[right] 的比较来判断“断崖”（最小值）在哪半边。
如果 nums[mid] > nums[right]，说明右边有断崖，最小值肯定在右半边，left  mid + 1。
如果 nums[mid] < nums[right]，说明右半边是正常升序的，最小值在左半边或者就是 mid 本身，right  mid。
时间 O(log n)，空间 O(1)
易错点/误区：
1. 为什么不用 nums[left] 比较？因为当数组没有旋转（如 [1,2,3]）时，比较 left 需要额外写特判，而比较 right 完美兼容所有情况。
2. 防死循环奥义：循环条件必须是 left < right。因为有了 right  mid 这种保留中点的写法，如果写成 left < right，当剩一个元素时就会无限死循环。
3. 收缩右边界时是 right  mid 而不是 mid - 1，因为 nums[mid] 完全有可能就是那个最小值，不能跨过它。`},ask:"已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,2,4,5,6,7] 在变化后可能得到：",constraints:["- 1 <= n <= 5000","- -5000 <= nums[i] <= 5000"]},{id:"4",slug:"4-寻找两个正序数组的中位数",title:"寻找两个正序数组的中位数",titleEn:"Median of Two Sorted Arrays",category:"二分查找",difficulty:"困难",topic:"划分数组",completed:!0,leetcodeSlug:"median-of-two-sorted-arrays",leetcodeUrl:"https://leetcode.cn/problems/median-of-two-sorted-arrays/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E5%AF%BB%E6%89%BE%E4%B8%A4%E4%B8%AA%E6%AD%A3%E5%BA%8F%E6%95%B0%E7%BB%84%E7%9A%84%E4%B8%AD%E4%BD%8D%E6%95%B0",acceptanceRate:44.9,solutionCount:9595,companyTagCount:196,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["二分查找","划分数组","数组","分治"],sourcePath:"hot100/11_二分查找/4.寻找两个正序数组的中位数.py",lastUpdated:"2026-08-27",lastUpdatedAt:"2026-08-27T22:39:54.041Z",interviewPattern:"先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。",thoughts:[`需二刷：二分查找寻找切分线（划分数组）大魔王题
思路：在较短的数组 nums1 中二分查找切口 i，使得 nums1 和 nums2 左半边元素总数等于 (m+n+1)//2。
当满足交叉验证 nums1_left_max < nums2_right_min 且 nums2_left_max < nums1_right_min 时，切分正确。
时间 O(log(min(m,n)))，空间 O(1)
易错点/误区：
1. 必须对较短的数组进行二分（强制交换），否则不仅慢，算出来的 j 还会越界出现负数。
2. 边界处理：切口在两端时，左边无元素用 -inf，右边无元素用 inf 占位。
3. 数组总长度为奇偶数时的返回逻辑不同，奇数是 max(左)，偶数是 (max(左) + min(右)) / 2.0。`],pitfalls:[`需二刷：二分查找寻找切分线（划分数组）大魔王题
思路：在较短的数组 nums1 中二分查找切口 i，使得 nums1 和 nums2 左半边元素总数等于 (m+n+1)//2。
当满足交叉验证 nums1_left_max < nums2_right_min 且 nums2_left_max < nums1_right_min 时，切分正确。
时间 O(log(min(m,n)))，空间 O(1)
易错点/误区：
1. 必须对较短的数组进行二分（强制交换），否则不仅慢，算出来的 j 还会越界出现负数。
2. 边界处理：切口在两端时，左边无元素用 -inf，右边无元素用 inf 占位。
3. 数组总长度为奇偶数时的返回逻辑不同，奇数是 max(左)，偶数是 (max(左) + min(右)) / 2.0。`],recallBlanks:[],solutionGuide:{idea:`需二刷：二分查找寻找切分线（划分数组）大魔王题
思路：在较短的数组 nums1 中二分查找切口 i，使得 nums1 和 nums2 左半边元素总数等于 (m+n+1)//2。
当满足交叉验证 nums1_left_max < nums2_right_min 且 nums2_left_max < nums1_right_min 时，切分正确。
时间 O(log(min(m,n)))，空间 O(1)
易错点/误区：
1. 必须对较短的数组进行二分（强制交换），否则不仅慢，算出来的 j 还会越界出现负数。
2. 边界处理：切口在两端时，左边无元素用 -inf，右边无元素用 inf 占位。
3. 数组总长度为奇偶数时的返回逻辑不同，奇数是 max(左)，偶数是 (max(左) + min(右)) / 2.0。`,interviewSteps:["先说明核心考点：划分数组。","先确定搜索区间语义，再维护不变量；边界题推荐左闭右闭或左闭右开固定一种。","关键词：二分查找 / 划分数组 / 数组 / 分治。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：二分查找寻找切分线（划分数组）大魔王题
思路：在较短的数组 nums1 中二分查找切口 i，使得 nums1 和 nums2 左半边元素总数等于 (m+n+1)//2。
当满足交叉验证 nums1_left_max < nums2_right_min 且 nums2_left_max < nums1_right_min 时，切分正确。
时间 O(log(min(m,n)))，空间 O(1)
易错点/误区：
1. 必须对较短的数组进行二分（强制交换），否则不仅慢，算出来的 j 还会越界出现负数。
2. 边界处理：切口在两端时，左边无元素用 -inf，右边无元素用 inf 占位。
3. 数组总长度为奇偶数时的返回逻辑不同，奇数是 max(左)，偶数是 (max(左) + min(右)) / 2.0。`},ask:"给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。",constraints:["- 0 <= m <= 1000","- 0 <= n <= 1000","- 1 <= m + n <= 2000","- -10^6 <= nums1[i], nums2[i] <= 10^6"]},{id:"20",slug:"20-有效的括号",title:"有效的括号",titleEn:"Valid Parentheses",category:"栈",difficulty:"简单",topic:"栈匹配",completed:!0,leetcodeSlug:"valid-parentheses",leetcodeUrl:"https://leetcode.cn/problems/valid-parentheses/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%9C%89%E6%95%88%E7%9A%84%E6%8B%AC%E5%8F%B7",acceptanceRate:45.8,solutionCount:13296,companyTagCount:255,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["栈","栈匹配","字符串","括号序列"],sourcePath:"hot100/12_栈/20.有效的括号.py",lastUpdated:"2026-03-19",lastUpdatedAt:"2026-03-19T15:49:01.615Z",interviewPattern:"遇到最近未匹配、嵌套结构、下一个更大/更小值时优先想栈；单调栈要说明栈内维护什么顺序。",thoughts:[`思路：栈——左括号入栈，遇右括号弹栈顶检查是否配对
时间 O(n)，空间 O(n)
易错点/误区：
1. if char  '(' or '[' or '{' 永远为 True！非空字符串是 truthy
正确写法：if char in '([{'
2. 字典方向要对：key 是右括号，value 是左括号（因为遇到右括号时查表）
3. pop 之前必须先检查栈是否为空，否则空栈 pop 报 IndexError
4. 最终检查 stack 是否为空要放在 for 循环外面，放里面会每次迭代都判断`],pitfalls:[`思路：栈——左括号入栈，遇右括号弹栈顶检查是否配对
时间 O(n)，空间 O(n)
易错点/误区：
1. if char  '(' or '[' or '{' 永远为 True！非空字符串是 truthy
正确写法：if char in '([{'
2. 字典方向要对：key 是右括号，value 是左括号（因为遇到右括号时查表）
3. pop 之前必须先检查栈是否为空，否则空栈 pop 报 IndexError
4. 最终检查 stack 是否为空要放在 for 循环外面，放里面会每次迭代都判断`],recallBlanks:[],solutionGuide:{idea:`思路：栈——左括号入栈，遇右括号弹栈顶检查是否配对
时间 O(n)，空间 O(n)
易错点/误区：
1. if char  '(' or '[' or '{' 永远为 True！非空字符串是 truthy
正确写法：if char in '([{'
2. 字典方向要对：key 是右括号，value 是左括号（因为遇到右括号时查表）
3. pop 之前必须先检查栈是否为空，否则空栈 pop 报 IndexError
4. 最终检查 stack 是否为空要放在 for 循环外面，放里面会每次迭代都判断`,interviewSteps:["先说明核心考点：栈匹配。","遇到最近未匹配、嵌套结构、下一个更大/更小值时优先想栈；单调栈要说明栈内维护什么顺序。","关键词：栈 / 栈匹配 / 字符串 / 括号序列。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`思路：栈——左括号入栈，遇右括号弹栈顶检查是否配对
时间 O(n)，空间 O(n)
易错点/误区：
1. if char  '(' or '[' or '{' 永远为 True！非空字符串是 truthy
正确写法：if char in '([{'
2. 字典方向要对：key 是右括号，value 是左括号（因为遇到右括号时查表）
3. pop 之前必须先检查栈是否为空，否则空栈 pop 报 IndexError
4. 最终检查 stack 是否为空要放在 for 循环外面，放里面会每次迭代都判断`},ask:"给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。",constraints:["- 1 <= s.length <= 10^4"]},{id:"155",slug:"155-最小栈",title:"最小栈",titleEn:"Min Stack",category:"栈",difficulty:"中等",topic:"辅助栈设计",completed:!0,leetcodeSlug:"min-stack",leetcodeUrl:"https://leetcode.cn/problems/min-stack/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%9C%80%E5%B0%8F%E6%A0%88",acceptanceRate:62.9,solutionCount:3709,companyTagCount:105,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["栈","辅助栈设计","设计"],sourcePath:"hot100/12_栈/155.最小栈.py",lastUpdated:"2026-03-20",lastUpdatedAt:"2026-03-20T12:42:39.552Z",interviewPattern:"遇到最近未匹配、嵌套结构、下一个更大/更小值时优先想栈；单调栈要说明栈内维护什么顺序。",thoughts:[`思路：用一个辅助栈 minval 同步记录每一层的最小值
两个栈同进同退，minval 栈顶永远是当前最小值
时间 O(1)（每个操作），空间 O(n)
易错点/误区：
1. __init__ 中变量要用 self.，否则只是局部变量，其他方法访问不到
2. 查看栈顶用 [-1]，不要用 pop()，pop 会删除元素
3. minval 每次 push 都要追加一个值（取 min），保持和 stack 等长`,"取 val 和当前最小值中较小的，压入辅助栈","两个栈同时弹出，最小值自动回退","minval 栈顶就是当前最小值"],pitfalls:[`思路：用一个辅助栈 minval 同步记录每一层的最小值
两个栈同进同退，minval 栈顶永远是当前最小值
时间 O(1)（每个操作），空间 O(n)
易错点/误区：
1. __init__ 中变量要用 self.，否则只是局部变量，其他方法访问不到
2. 查看栈顶用 [-1]，不要用 pop()，pop 会删除元素
3. minval 每次 push 都要追加一个值（取 min），保持和 stack 等长`],recallBlanks:[{prompt:"取 val 和当前最小值中较小的，压入辅助＿＿＿",answer:"栈"}],solutionGuide:{idea:`思路：用一个辅助栈 minval 同步记录每一层的最小值
两个栈同进同退，minval 栈顶永远是当前最小值
时间 O(1)（每个操作），空间 O(n)
易错点/误区：
1. __init__ 中变量要用 self.，否则只是局部变量，其他方法访问不到
2. 查看栈顶用 [-1]，不要用 pop()，pop 会删除元素
3. minval 每次 push 都要追加一个值（取 min），保持和 stack 等长`,interviewSteps:["先说明核心考点：辅助栈设计。","遇到最近未匹配、嵌套结构、下一个更大/更小值时优先想栈；单调栈要说明栈内维护什么顺序。","关键词：栈 / 辅助栈设计 / 设计。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`思路：用一个辅助栈 minval 同步记录每一层的最小值
两个栈同进同退，minval 栈顶永远是当前最小值
时间 O(1)（每个操作），空间 O(n)
易错点/误区：
1. __init__ 中变量要用 self.，否则只是局部变量，其他方法访问不到
2. 查看栈顶用 [-1]，不要用 pop()，pop 会删除元素
3. minval 每次 push 都要追加一个值（取 min），保持和 stack 等长`},ask:"设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。",constraints:["- -2^31 <= val <= 2^31 - 1"]},{id:"394",slug:"394-字符串解码",title:"字符串解码",titleEn:"Decode String",category:"栈",difficulty:"中等",topic:"栈嵌套",completed:!0,leetcodeSlug:"decode-string",leetcodeUrl:"https://leetcode.cn/problems/decode-string/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%A7%A3%E7%A0%81",acceptanceRate:61.9,solutionCount:3705,companyTagCount:95,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["栈","栈嵌套","递归","字符串"],sourcePath:"hot100/12_栈/394.字符串解码.py",lastUpdated:"2026-03-20",lastUpdatedAt:"2026-03-20T14:38:03.235Z",interviewPattern:"遇到最近未匹配、嵌套结构、下一个更大/更小值时优先想栈；单调栈要说明栈内维护什么顺序。",thoughts:[`需二刷：双栈解码嵌套结构
思路：用两个栈分别存数字和字符串，遇到 [ 压栈保存上下文，遇到 ] 弹栈拼接结果
时间 O(n)，n 为解码后字符串长度（每个字符最多入栈出栈一次）
空间 O(n)，栈的深度取决于嵌套层数
💡 面试推荐：双栈法（本解法）
- 思路直观，容易讲清楚
- 面试官容易追问：如何处理多位数字？→ cur_num * 10 + int(char)
- 另一种方法是递归，但栈的写法更不容易出错，推荐优先用栈
易错点/误区：
1. 数字可能是多位的（如 "12[a]"），不能直接 cur_num  int(char)，
要用 cur_num  cur_num * 10 + int(char) 来逐位拼接
2. 遇到字母时要用 cur_str + char（拼接），不能用  （会覆盖之前的字母）
3. ] 弹栈时的拼接顺序：letterstack.pop() + numstack.pop() * cur_str
是「之前的字符串 + 重复次数 × 当前字符串」，顺序不能反
4. 压栈时机是遇到 [，不是遇到数字或字母时`,"遇到 [：保存当前上下文到栈，然后重置","遇到 ]：弹栈，拼接  之前的字符串 + 重复次数 × 当前字符串",`📝 方法二：递归法
思路：用一个全局指针 i 遍历字符串，遇到 [ 就递归进入下一层，遇到 ] 就返回当前层结果
时间 O(n)，空间 O(n)（递归栈深度）
递归的本质和栈是一样的——函数调用栈就是隐式的栈
每次遇到 [ 相当于"压栈"（进入新函数），遇到 ] 相当于"弹栈"（函数返回）`,"递归处理括号内的内容"],pitfalls:[`需二刷：双栈解码嵌套结构
思路：用两个栈分别存数字和字符串，遇到 [ 压栈保存上下文，遇到 ] 弹栈拼接结果
时间 O(n)，n 为解码后字符串长度（每个字符最多入栈出栈一次）
空间 O(n)，栈的深度取决于嵌套层数
💡 面试推荐：双栈法（本解法）
- 思路直观，容易讲清楚
- 面试官容易追问：如何处理多位数字？→ cur_num * 10 + int(char)
- 另一种方法是递归，但栈的写法更不容易出错，推荐优先用栈
易错点/误区：
1. 数字可能是多位的（如 "12[a]"），不能直接 cur_num  int(char)，
要用 cur_num  cur_num * 10 + int(char) 来逐位拼接
2. 遇到字母时要用 cur_str + char（拼接），不能用  （会覆盖之前的字母）
3. ] 弹栈时的拼接顺序：letterstack.pop() + numstack.pop() * cur_str
是「之前的字符串 + 重复次数 × 当前字符串」，顺序不能反
4. 压栈时机是遇到 [，不是遇到数字或字母时`],recallBlanks:[{prompt:"遇到 [：保存当前上下文到＿＿＿，然后重置",answer:"栈"}],solutionGuide:{idea:`需二刷：双栈解码嵌套结构
思路：用两个栈分别存数字和字符串，遇到 [ 压栈保存上下文，遇到 ] 弹栈拼接结果
时间 O(n)，n 为解码后字符串长度（每个字符最多入栈出栈一次）
空间 O(n)，栈的深度取决于嵌套层数
💡 面试推荐：双栈法（本解法）
- 思路直观，容易讲清楚
- 面试官容易追问：如何处理多位数字？→ cur_num * 10 + int(char)
- 另一种方法是递归，但栈的写法更不容易出错，推荐优先用栈
易错点/误区：
1. 数字可能是多位的（如 "12[a]"），不能直接 cur_num  int(char)，
要用 cur_num  cur_num * 10 + int(char) 来逐位拼接
2. 遇到字母时要用 cur_str + char（拼接），不能用  （会覆盖之前的字母）
3. ] 弹栈时的拼接顺序：letterstack.pop() + numstack.pop() * cur_str
是「之前的字符串 + 重复次数 × 当前字符串」，顺序不能反
4. 压栈时机是遇到 [，不是遇到数字或字母时`,interviewSteps:["先说明核心考点：栈嵌套。","遇到最近未匹配、嵌套结构、下一个更大/更小值时优先想栈；单调栈要说明栈内维护什么顺序。","关键词：栈 / 栈嵌套 / 递归 / 字符串。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：双栈解码嵌套结构
思路：用两个栈分别存数字和字符串，遇到 [ 压栈保存上下文，遇到 ] 弹栈拼接结果
时间 O(n)，n 为解码后字符串长度（每个字符最多入栈出栈一次）
空间 O(n)，栈的深度取决于嵌套层数
💡 面试推荐：双栈法（本解法）
- 思路直观，容易讲清楚
- 面试官容易追问：如何处理多位数字？→ cur_num * 10 + int(char)
- 另一种方法是递归，但栈的写法更不容易出错，推荐优先用栈
易错点/误区：
1. 数字可能是多位的（如 "12[a]"），不能直接 cur_num  int(char)，
要用 cur_num  cur_num * 10 + int(char) 来逐位拼接
2. 遇到字母时要用 cur_str + char（拼接），不能用  （会覆盖之前的字母）
3. ] 弹栈时的拼接顺序：letterstack.pop() + numstack.pop() * cur_str
是「之前的字符串 + 重复次数 × 当前字符串」，顺序不能反
4. 压栈时机是遇到 [，不是遇到数字或字母时`},ask:"给定一个经过编码的字符串，返回它解码后的字符串。",constraints:["- 1 <= s.length <= 30"]},{id:"739",slug:"739-每日温度",title:"每日温度",titleEn:"Daily Temperatures",category:"栈",difficulty:"中等",topic:"单调栈",completed:!0,leetcodeSlug:"daily-temperatures",leetcodeUrl:"https://leetcode.cn/problems/daily-temperatures/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%AF%8F%E6%97%A5%E6%B8%A9%E5%BA%A6",acceptanceRate:69.7,solutionCount:4090,companyTagCount:79,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["栈","单调栈","数组"],sourcePath:"hot100/12_栈/739.每日温度.py",lastUpdated:"2026-03-20",lastUpdatedAt:"2026-03-20T13:28:34.496Z",interviewPattern:"遇到最近未匹配、嵌套结构、下一个更大/更小值时优先想栈；单调栈要说明栈内维护什么顺序。",thoughts:[`需二刷：单调栈模板题
思路：维护一个单调递减栈（栈底到栈顶递减），栈中存下标。
遍历温度数组，当前温度 > 栈顶温度时，说明栈顶那天等到了更高温度，
弹出栈顶并计算等待天数（当前下标 - 栈顶下标）。
时间 O(n)，空间 O(n)
易错点/误区：
1. result 要用 [0]*n 初始化，不能用 []，因为后面要通过下标赋值
2. 比较温度时是 temperatures[stack[-1]]（栈顶下标对应的温度），
不是 temperatures[-1]（温度数组的最后一个元素）
3. 栈里存的是下标而非温度值，一个下标三个用途：取值、算距离、定位 result`,"当前温度比栈顶大 → 栈顶那天等到了更高温度"],pitfalls:[`需二刷：单调栈模板题
思路：维护一个单调递减栈（栈底到栈顶递减），栈中存下标。
遍历温度数组，当前温度 > 栈顶温度时，说明栈顶那天等到了更高温度，
弹出栈顶并计算等待天数（当前下标 - 栈顶下标）。
时间 O(n)，空间 O(n)
易错点/误区：
1. result 要用 [0]*n 初始化，不能用 []，因为后面要通过下标赋值
2. 比较温度时是 temperatures[stack[-1]]（栈顶下标对应的温度），
不是 temperatures[-1]（温度数组的最后一个元素）
3. 栈里存的是下标而非温度值，一个下标三个用途：取值、算距离、定位 result`],recallBlanks:[{prompt:"当前温度比＿＿＿顶大 → ＿＿＿顶那天等到了更高温度",answer:"栈"}],solutionGuide:{idea:`需二刷：单调栈模板题
思路：维护一个单调递减栈（栈底到栈顶递减），栈中存下标。
遍历温度数组，当前温度 > 栈顶温度时，说明栈顶那天等到了更高温度，
弹出栈顶并计算等待天数（当前下标 - 栈顶下标）。
时间 O(n)，空间 O(n)
易错点/误区：
1. result 要用 [0]*n 初始化，不能用 []，因为后面要通过下标赋值
2. 比较温度时是 temperatures[stack[-1]]（栈顶下标对应的温度），
不是 temperatures[-1]（温度数组的最后一个元素）
3. 栈里存的是下标而非温度值，一个下标三个用途：取值、算距离、定位 result`,interviewSteps:["先说明核心考点：单调栈。","遇到最近未匹配、嵌套结构、下一个更大/更小值时优先想栈；单调栈要说明栈内维护什么顺序。","关键词：栈 / 单调栈 / 数组。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：单调栈模板题
思路：维护一个单调递减栈（栈底到栈顶递减），栈中存下标。
遍历温度数组，当前温度 > 栈顶温度时，说明栈顶那天等到了更高温度，
弹出栈顶并计算等待天数（当前下标 - 栈顶下标）。
时间 O(n)，空间 O(n)
易错点/误区：
1. result 要用 [0]*n 初始化，不能用 []，因为后面要通过下标赋值
2. 比较温度时是 temperatures[stack[-1]]（栈顶下标对应的温度），
不是 temperatures[-1]（温度数组的最后一个元素）
3. 栈里存的是下标而非温度值，一个下标三个用途：取值、算距离、定位 result`},ask:"给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。",constraints:["- 1 <= temperatures.length <= 10^5","- 30 <= temperatures[i] <= 100"]},{id:"84",slug:"84-柱状图中最大的矩形",title:"柱状图中最大的矩形",titleEn:"Largest Rectangle in Histogram",category:"栈",difficulty:"困难",topic:"单调栈",completed:!0,leetcodeSlug:"largest-rectangle-in-histogram",leetcodeUrl:"https://leetcode.cn/problems/largest-rectangle-in-histogram/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%9F%B1%E7%8A%B6%E5%9B%BE%E4%B8%AD%E6%9C%80%E5%A4%A7%E7%9A%84%E7%9F%A9%E5%BD%A2",acceptanceRate:49.9,solutionCount:2944,companyTagCount:83,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["栈","单调栈","数组","区间最值查询"],sourcePath:"hot100/12_栈/84.柱状图中最大的矩形.py",lastUpdated:"2026-06-18",lastUpdatedAt:"2026-06-18T15:20:29.616Z",interviewPattern:"遇到最近未匹配、嵌套结构、下一个更大/更小值时优先想栈；单调栈要说明栈内维护什么顺序。",thoughts:[`需二刷：单调栈求最大矩形（递增栈 + 哨兵技巧）
思路：维护一个递增栈（存下标），当新柱子比栈顶矮时触发弹栈。
被弹柱子的高度能形成的矩形，左边界是左边第一个更矮的（新栈顶），
右边界是当前柱子 i。宽度  right - left - 1。
末尾加高度 0 的哨兵强制清空栈，省去收尾循环。
时间 O(n)，空间 O(n)
易错点/误区：
1. left  stack[-1] if stack else -1 ——栈空时左边界为 -1，宽度才能算对
2. right  i 是当前下标，不是被弹柱子的下标 idx
3. 哨兵高度为 0，比所有柱子矮，能强制弹出所有剩余柱子
4. 弹栈时算的面积是 heights[idx] × width，不是 heights[i]`,"新柱子比栈顶矮 → 栈顶柱子的右边界确定，弹栈算面积"],pitfalls:[`需二刷：单调栈求最大矩形（递增栈 + 哨兵技巧）
思路：维护一个递增栈（存下标），当新柱子比栈顶矮时触发弹栈。
被弹柱子的高度能形成的矩形，左边界是左边第一个更矮的（新栈顶），
右边界是当前柱子 i。宽度  right - left - 1。
末尾加高度 0 的哨兵强制清空栈，省去收尾循环。
时间 O(n)，空间 O(n)
易错点/误区：
1. left  stack[-1] if stack else -1 ——栈空时左边界为 -1，宽度才能算对
2. right  i 是当前下标，不是被弹柱子的下标 idx
3. 哨兵高度为 0，比所有柱子矮，能强制弹出所有剩余柱子
4. 弹栈时算的面积是 heights[idx] × width，不是 heights[i]`,"新柱子比栈顶矮 → 栈顶柱子的右边界确定，弹栈算面积"],recallBlanks:[{prompt:"新柱子比＿＿＿顶矮 → ＿＿＿顶柱子的右边界确定，弹＿＿＿算面积",answer:"栈"}],solutionGuide:{idea:`需二刷：单调栈求最大矩形（递增栈 + 哨兵技巧）
思路：维护一个递增栈（存下标），当新柱子比栈顶矮时触发弹栈。
被弹柱子的高度能形成的矩形，左边界是左边第一个更矮的（新栈顶），
右边界是当前柱子 i。宽度  right - left - 1。
末尾加高度 0 的哨兵强制清空栈，省去收尾循环。
时间 O(n)，空间 O(n)
易错点/误区：
1. left  stack[-1] if stack else -1 ——栈空时左边界为 -1，宽度才能算对
2. right  i 是当前下标，不是被弹柱子的下标 idx
3. 哨兵高度为 0，比所有柱子矮，能强制弹出所有剩余柱子
4. 弹栈时算的面积是 heights[idx] × width，不是 heights[i]`,interviewSteps:["先说明核心考点：单调栈。","遇到最近未匹配、嵌套结构、下一个更大/更小值时优先想栈；单调栈要说明栈内维护什么顺序。","关键词：栈 / 单调栈 / 数组 / 区间最值查询。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：单调栈求最大矩形（递增栈 + 哨兵技巧）
思路：维护一个递增栈（存下标），当新柱子比栈顶矮时触发弹栈。
被弹柱子的高度能形成的矩形，左边界是左边第一个更矮的（新栈顶），
右边界是当前柱子 i。宽度  right - left - 1。
末尾加高度 0 的哨兵强制清空栈，省去收尾循环。
时间 O(n)，空间 O(n)
易错点/误区：
1. left  stack[-1] if stack else -1 ——栈空时左边界为 -1，宽度才能算对
2. right  i 是当前下标，不是被弹柱子的下标 idx
3. 哨兵高度为 0，比所有柱子矮，能强制弹出所有剩余柱子
4. 弹栈时算的面积是 heights[idx] × width，不是 heights[i]`},ask:"给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。"},{id:"215",slug:"215-数组中的第-k-个最大元素",title:"数组中的第K个最大元素",titleEn:"Kth Largest Element in an Array",category:"堆",difficulty:"中等",topic:"堆 / 快速选择",completed:!0,leetcodeSlug:"kth-largest-element-in-an-array",leetcodeUrl:"https://leetcode.cn/problems/kth-largest-element-in-an-array/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E7%AC%ACK%E4%B8%AA%E6%9C%80%E5%A4%A7%E5%85%83%E7%B4%A0",acceptanceRate:60,solutionCount:6037,companyTagCount:139,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["堆","堆 / 快速选择","数组","分治","快速选择","排序","堆（优先队列）"],sourcePath:"hot100/13_堆/215.数组中的第K个最大元素.py",lastUpdated:"2026-06-12",lastUpdatedAt:"2026-06-12T14:24:43.246Z",interviewPattern:"Top K 和数据流问题优先考虑堆；Python 小顶堆处理最大堆时注意符号反转。",thoughts:["核心考点：堆 / 快速选择","Top K 和数据流问题优先考虑堆；Python 小顶堆处理最大堆时注意符号反转。"],pitfalls:["本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"],recallBlanks:[{prompt:"核心考点：＿＿＿ / 快速选择",answer:"堆"}],solutionGuide:{idea:"核心考点：堆 / 快速选择",interviewSteps:["先说明核心考点：堆 / 快速选择。","Top K 和数据流问题优先考虑堆；Python 小顶堆处理最大堆时注意符号反转。","关键词：堆 / 堆 / 快速选择 / 数组 / 分治。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:"本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"},ask:"给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。",constraints:["- 1 <= k <= nums.length <= 10^5","- -10^4 <= nums[i] <= 10^4"]},{id:"347",slug:"347-前-k-个高频元素",title:"前 K 个高频元素",titleEn:"Top K Frequent Elements",category:"堆",difficulty:"中等",topic:"map + 堆",completed:!0,leetcodeSlug:"top-k-frequent-elements",leetcodeUrl:"https://leetcode.cn/problems/top-k-frequent-elements/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E5%89%8D%20K%20%E4%B8%AA%E9%AB%98%E9%A2%91%E5%85%83%E7%B4%A0",acceptanceRate:66.1,solutionCount:4507,companyTagCount:116,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["堆","map + 堆","数组","哈希表","分治","桶排序","计数","快速选择","排序","堆（优先队列）"],sourcePath:"hot100/13_堆/347.前 K 个高频元素.py",lastUpdated:"2026-06-16",lastUpdatedAt:"2026-06-16T14:10:15.202Z",interviewPattern:"Top K 和数据流问题优先考虑堆；Python 小顶堆处理最大堆时注意符号反转。",thoughts:[`需二刷：map 统计频率 + 最小堆维护 Top K（堆存元组 (频率, 元素)）
思路：先用 map 统计每个元素的出现频率，再遍历 map，往大小为 k 的最小堆里推
(频率, 元素) 元组，堆按频率排序，堆顶是频率最低的，超了就弹出。
最终堆里剩下频率最高的 k 个元素。
时间 O(n log k)，空间 O(n)
替代写法：可用 Counter 替代手写频率统计
from collections import Counter
freq  Counter(nums)  # 一行搞定，结果和下面 freq 一样
易错点/误区：
1. 堆里存 (count, num) 而不是 (num, count) —— heapq 按元组第一个元素排序
如果存 (num, count)，堆会按 num 的大小排序，完全错了
2. 遍历 freq.items() 时，解包顺序是 (num, count)，和推入堆的 (count, num) 相反
3. 最后从堆里取元素时，要取元组的第二个值 num，不是 count`],pitfalls:[`需二刷：map 统计频率 + 最小堆维护 Top K（堆存元组 (频率, 元素)）
思路：先用 map 统计每个元素的出现频率，再遍历 map，往大小为 k 的最小堆里推
(频率, 元素) 元组，堆按频率排序，堆顶是频率最低的，超了就弹出。
最终堆里剩下频率最高的 k 个元素。
时间 O(n log k)，空间 O(n)
替代写法：可用 Counter 替代手写频率统计
from collections import Counter
freq  Counter(nums)  # 一行搞定，结果和下面 freq 一样
易错点/误区：
1. 堆里存 (count, num) 而不是 (num, count) —— heapq 按元组第一个元素排序
如果存 (num, count)，堆会按 num 的大小排序，完全错了
2. 遍历 freq.items() 时，解包顺序是 (num, count)，和推入堆的 (count, num) 相反
3. 最后从堆里取元素时，要取元组的第二个值 num，不是 count`],recallBlanks:[],solutionGuide:{idea:`需二刷：map 统计频率 + 最小堆维护 Top K（堆存元组 (频率, 元素)）
思路：先用 map 统计每个元素的出现频率，再遍历 map，往大小为 k 的最小堆里推
(频率, 元素) 元组，堆按频率排序，堆顶是频率最低的，超了就弹出。
最终堆里剩下频率最高的 k 个元素。
时间 O(n log k)，空间 O(n)
替代写法：可用 Counter 替代手写频率统计
from collections import Counter
freq  Counter(nums)  # 一行搞定，结果和下面 freq 一样
易错点/误区：
1. 堆里存 (count, num) 而不是 (num, count) —— heapq 按元组第一个元素排序
如果存 (num, count)，堆会按 num 的大小排序，完全错了
2. 遍历 freq.items() 时，解包顺序是 (num, count)，和推入堆的 (count, num) 相反
3. 最后从堆里取元素时，要取元组的第二个值 num，不是 count`,interviewSteps:["先说明核心考点：map + 堆。","Top K 和数据流问题优先考虑堆；Python 小顶堆处理最大堆时注意符号反转。","关键词：堆 / map + 堆 / 数组 / 哈希表。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：map 统计频率 + 最小堆维护 Top K（堆存元组 (频率, 元素)）
思路：先用 map 统计每个元素的出现频率，再遍历 map，往大小为 k 的最小堆里推
(频率, 元素) 元组，堆按频率排序，堆顶是频率最低的，超了就弹出。
最终堆里剩下频率最高的 k 个元素。
时间 O(n log k)，空间 O(n)
替代写法：可用 Counter 替代手写频率统计
from collections import Counter
freq  Counter(nums)  # 一行搞定，结果和下面 freq 一样
易错点/误区：
1. 堆里存 (count, num) 而不是 (num, count) —— heapq 按元组第一个元素排序
如果存 (num, count)，堆会按 num 的大小排序，完全错了
2. 遍历 freq.items() 时，解包顺序是 (num, count)，和推入堆的 (count, num) 相反
3. 最后从堆里取元素时，要取元组的第二个值 num，不是 count`},ask:"给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。",constraints:["- 1 <= nums.length <= 10^5","- -10^4 <= nums[i] <= 10^4"]},{id:"295",slug:"295-数据流的中位数",title:"数据流的中位数",titleEn:"Find Median from Data Stream",category:"堆",difficulty:"困难",topic:"双堆设计",completed:!0,leetcodeSlug:"find-median-from-data-stream",leetcodeUrl:"https://leetcode.cn/problems/find-median-from-data-stream/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%95%B0%E6%8D%AE%E6%B5%81%E7%9A%84%E4%B8%AD%E4%BD%8D%E6%95%B0",acceptanceRate:59.8,solutionCount:1305,companyTagCount:89,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["堆","双堆设计","设计","双指针","数据流","排序","堆（优先队列）"],sourcePath:"hot100/13_堆/295.数据流的中位数.py",lastUpdated:"2026-06-17",lastUpdatedAt:"2026-06-17T15:37:22.373Z",interviewPattern:"Top K 和数据流问题优先考虑堆；Python 小顶堆处理最大堆时注意符号反转。",thoughts:[`需二刷：双堆配合求数据流中位数（大顶堆 + 小顶堆）
思路：将数据流分成两半——较小的一半用大顶堆（存负数模拟），较大的一半用小顶堆。
保持两个堆大小平衡（最多差 1），中位数由堆顶计算得出。
时间 O(log n)（每次 addNum），空间 O(n)
易错点/误区：
1. Python 只有最小堆，用存负值模拟最大堆，取值时要取反
2. heappushpop 传参符号：往 large 过一道传正数，往 small 过一道传负数
3. 两个堆的大小差不能超过 1，否则中位数计算错误
4. findMedian 要考虑奇偶两种长度情况`,"维持两个堆大小平衡：large 始终 < small < large+1",`large 够了或相等 → 往 small 加一个
先把 -num 扔进 large 过一道，取出 large 最大值（即 -堆顶），取反给 small`],pitfalls:[`需二刷：双堆配合求数据流中位数（大顶堆 + 小顶堆）
思路：将数据流分成两半——较小的一半用大顶堆（存负数模拟），较大的一半用小顶堆。
保持两个堆大小平衡（最多差 1），中位数由堆顶计算得出。
时间 O(log n)（每次 addNum），空间 O(n)
易错点/误区：
1. Python 只有最小堆，用存负值模拟最大堆，取值时要取反
2. heappushpop 传参符号：往 large 过一道传正数，往 small 过一道传负数
3. 两个堆的大小差不能超过 1，否则中位数计算错误
4. findMedian 要考虑奇偶两种长度情况`],recallBlanks:[{prompt:"维持两个＿＿＿大小平衡：large 始终 < small < large+1",answer:"堆"}],solutionGuide:{idea:`需二刷：双堆配合求数据流中位数（大顶堆 + 小顶堆）
思路：将数据流分成两半——较小的一半用大顶堆（存负数模拟），较大的一半用小顶堆。
保持两个堆大小平衡（最多差 1），中位数由堆顶计算得出。
时间 O(log n)（每次 addNum），空间 O(n)
易错点/误区：
1. Python 只有最小堆，用存负值模拟最大堆，取值时要取反
2. heappushpop 传参符号：往 large 过一道传正数，往 small 过一道传负数
3. 两个堆的大小差不能超过 1，否则中位数计算错误
4. findMedian 要考虑奇偶两种长度情况`,interviewSteps:["先说明核心考点：双堆设计。","Top K 和数据流问题优先考虑堆；Python 小顶堆处理最大堆时注意符号反转。","关键词：堆 / 双堆设计 / 设计 / 双指针。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：双堆配合求数据流中位数（大顶堆 + 小顶堆）
思路：将数据流分成两半——较小的一半用大顶堆（存负数模拟），较大的一半用小顶堆。
保持两个堆大小平衡（最多差 1），中位数由堆顶计算得出。
时间 O(log n)（每次 addNum），空间 O(n)
易错点/误区：
1. Python 只有最小堆，用存负值模拟最大堆，取值时要取反
2. heappushpop 传参符号：往 large 过一道传正数，往 small 过一道传负数
3. 两个堆的大小差不能超过 1，否则中位数计算错误
4. findMedian 要考虑奇偶两种长度情况`},ask:"中位数是有序整数列表中的中间值。如果列表的大小是偶数，则没有中间值，中位数是两个中间值的平均值。",constraints:["- -10^5 <= num <= 10^5"]},{id:"121",slug:"121-买卖股票的最佳时机",title:"买卖股票的最佳时机",titleEn:"Best Time to Buy and Sell Stock",category:"贪心",difficulty:"简单",topic:"一次遍历",completed:!0,leetcodeSlug:"best-time-to-buy-and-sell-stock",leetcodeUrl:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BA",acceptanceRate:60.3,solutionCount:9392,companyTagCount:184,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["贪心","一次遍历","数组","动态规划"],sourcePath:"hot100/14_贪心/121.买卖股票的最佳时机.py",lastUpdated:"2026-03-20",lastUpdatedAt:"2026-03-20T07:47:19.105Z",interviewPattern:"写出局部选择为什么不会破坏全局最优，面试中要用覆盖范围或交换论证解释。",thoughts:[`需二刷：DP 思维——用历史最低价推导当前最大利润
思路：遍历价格，维护"到目前为止的最低买入价"，
每天都算"今天卖出的利润"，取全局最大值
时间 O(n)，空间 O(1)
易错点/误区：
1. Python 中 ^ 是异或运算，不是次方！10^515，应该用 10**5 或 float('inf')
2. income 必须初始化为 0（最差情况不交易，利润为 0）
3. return 不要写在 for 循环里面，否则第一轮就返回了
4. 不需要 if/else 分支，每天同时做两件事：更新最低价 + 更新最大利润
💡 知识点：float('inf') 表示正无穷，比任何数字都大；float('-inf') 表示负无穷
需要"最大初始值"用 float('inf')，需要"最小初始值"用 float('-inf')`],pitfalls:[`需二刷：DP 思维——用历史最低价推导当前最大利润
思路：遍历价格，维护"到目前为止的最低买入价"，
每天都算"今天卖出的利润"，取全局最大值
时间 O(n)，空间 O(1)
易错点/误区：
1. Python 中 ^ 是异或运算，不是次方！10^515，应该用 10**5 或 float('inf')
2. income 必须初始化为 0（最差情况不交易，利润为 0）
3. return 不要写在 for 循环里面，否则第一轮就返回了
4. 不需要 if/else 分支，每天同时做两件事：更新最低价 + 更新最大利润
💡 知识点：float('inf') 表示正无穷，比任何数字都大；float('-inf') 表示负无穷
需要"最大初始值"用 float('inf')，需要"最小初始值"用 float('-inf')`],recallBlanks:[],solutionGuide:{idea:`需二刷：DP 思维——用历史最低价推导当前最大利润
思路：遍历价格，维护"到目前为止的最低买入价"，
每天都算"今天卖出的利润"，取全局最大值
时间 O(n)，空间 O(1)
易错点/误区：
1. Python 中 ^ 是异或运算，不是次方！10^515，应该用 10**5 或 float('inf')
2. income 必须初始化为 0（最差情况不交易，利润为 0）
3. return 不要写在 for 循环里面，否则第一轮就返回了
4. 不需要 if/else 分支，每天同时做两件事：更新最低价 + 更新最大利润
💡 知识点：float('inf') 表示正无穷，比任何数字都大；float('-inf') 表示负无穷
需要"最大初始值"用 float('inf')，需要"最小初始值"用 float('-inf')`,interviewSteps:["先说明核心考点：一次遍历。","写出局部选择为什么不会破坏全局最优，面试中要用覆盖范围或交换论证解释。","关键词：贪心 / 一次遍历 / 数组 / 动态规划。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：DP 思维——用历史最低价推导当前最大利润
思路：遍历价格，维护"到目前为止的最低买入价"，
每天都算"今天卖出的利润"，取全局最大值
时间 O(n)，空间 O(1)
易错点/误区：
1. Python 中 ^ 是异或运算，不是次方！10^515，应该用 10**5 或 float('inf')
2. income 必须初始化为 0（最差情况不交易，利润为 0）
3. return 不要写在 for 循环里面，否则第一轮就返回了
4. 不需要 if/else 分支，每天同时做两件事：更新最低价 + 更新最大利润
💡 知识点：float('inf') 表示正无穷，比任何数字都大；float('-inf') 表示负无穷
需要"最大初始值"用 float('inf')，需要"最小初始值"用 float('-inf')`},ask:"给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。"},{id:"55",slug:"55-跳跃游戏",title:"跳跃游戏",titleEn:"Jump Game",category:"贪心",difficulty:"中等",topic:"贪心覆盖",completed:!0,leetcodeSlug:"jump-game",leetcodeUrl:"https://leetcode.cn/problems/jump-game/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E8%B7%B3%E8%B7%83%E6%B8%B8%E6%88%8F",acceptanceRate:45.3,solutionCount:8263,companyTagCount:113,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["贪心","贪心覆盖","数组","动态规划"],sourcePath:"hot100/14_贪心/55.跳跃游戏.py",lastUpdated:"2026-08-27",lastUpdatedAt:"2026-08-27T14:11:53.102Z",interviewPattern:"写出局部选择为什么不会破坏全局最优，面试中要用覆盖范围或交换论证解释。",thoughts:[`需二刷：基础贪心模式
思路：贪心算法。遍历数组，维护一个“最远可达位置”。如果当前下标超过了历史最远可达位置，说明中途断档，无法到达终点；否则用当前位置能跳的距离更新最远可达位置。
时间 O(N)，空间 O(1)
易错点/误区：
1. 导包错误：List 应该从 typing 导入，而不是 collections (from typing import List)。
2. 更新最远距离时，用的是相对起点计算出来的绝对下标 (i + nums[i])，不要错写成只加 nums[i]。`],pitfalls:[`需二刷：基础贪心模式
思路：贪心算法。遍历数组，维护一个“最远可达位置”。如果当前下标超过了历史最远可达位置，说明中途断档，无法到达终点；否则用当前位置能跳的距离更新最远可达位置。
时间 O(N)，空间 O(1)
易错点/误区：
1. 导包错误：List 应该从 typing 导入，而不是 collections (from typing import List)。
2. 更新最远距离时，用的是相对起点计算出来的绝对下标 (i + nums[i])，不要错写成只加 nums[i]。`],recallBlanks:[],solutionGuide:{idea:`需二刷：基础贪心模式
思路：贪心算法。遍历数组，维护一个“最远可达位置”。如果当前下标超过了历史最远可达位置，说明中途断档，无法到达终点；否则用当前位置能跳的距离更新最远可达位置。
时间 O(N)，空间 O(1)
易错点/误区：
1. 导包错误：List 应该从 typing 导入，而不是 collections (from typing import List)。
2. 更新最远距离时，用的是相对起点计算出来的绝对下标 (i + nums[i])，不要错写成只加 nums[i]。`,interviewSteps:["先说明核心考点：贪心覆盖。","写出局部选择为什么不会破坏全局最优，面试中要用覆盖范围或交换论证解释。","关键词：贪心 / 贪心覆盖 / 数组 / 动态规划。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：基础贪心模式
思路：贪心算法。遍历数组，维护一个“最远可达位置”。如果当前下标超过了历史最远可达位置，说明中途断档，无法到达终点；否则用当前位置能跳的距离更新最远可达位置。
时间 O(N)，空间 O(1)
易错点/误区：
1. 导包错误：List 应该从 typing 导入，而不是 collections (from typing import List)。
2. 更新最远距离时，用的是相对起点计算出来的绝对下标 (i + nums[i])，不要错写成只加 nums[i]。`},ask:"给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。",constraints:["- 1 <= nums.length <= 10^4","- 0 <= nums[i] <= 10^5"]},{id:"45",slug:"45-跳跃游戏-ii",title:"跳跃游戏 II",titleEn:"Jump Game II",category:"贪心",difficulty:"中等",topic:"贪心 BFS",completed:!0,leetcodeSlug:"jump-game-ii",leetcodeUrl:"https://leetcode.cn/problems/jump-game-ii/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E8%B7%B3%E8%B7%83%E6%B8%B8%E6%88%8F%20II",acceptanceRate:46,solutionCount:5882,companyTagCount:96,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["贪心","贪心 BFS","数组","动态规划"],sourcePath:"hot100/14_贪心/45.跳跃游戏 II.py",lastUpdated:"2026-08-27",lastUpdatedAt:"2026-08-27T14:20:15.126Z",interviewPattern:"写出局部选择为什么不会破坏全局最优，面试中要用覆盖范围或交换论证解释。",thoughts:[`需二刷：贪心 BFS 覆盖范围模型
思路：贪心算法。用 end 记录当前跳跃能到达的最远边界，用 max_reach 记录遍历过程中能探到的最远位置。
当遍历到 end 时，说明必须跳一步了，此时步数 +1，并将 end 更新为 max_reach。
巧妙点：循环只到 len(nums) - 1，因为只要到了终点前，如果还没跳，终点也能被覆盖到（题目保证能到达）。
时间 O(N)，空间 O(1)
易错点/误区：
1. 遍历的边界是 len(nums) - 1，如果遍历到最后一个元素，会多跳一次（因为只要到了 n-1 前面就一定能覆盖，如果在 n-1 处正好触发 i  end，就会错误地多加一次步数）。`],pitfalls:[`需二刷：贪心 BFS 覆盖范围模型
思路：贪心算法。用 end 记录当前跳跃能到达的最远边界，用 max_reach 记录遍历过程中能探到的最远位置。
当遍历到 end 时，说明必须跳一步了，此时步数 +1，并将 end 更新为 max_reach。
巧妙点：循环只到 len(nums) - 1，因为只要到了终点前，如果还没跳，终点也能被覆盖到（题目保证能到达）。
时间 O(N)，空间 O(1)
易错点/误区：
1. 遍历的边界是 len(nums) - 1，如果遍历到最后一个元素，会多跳一次（因为只要到了 n-1 前面就一定能覆盖，如果在 n-1 处正好触发 i  end，就会错误地多加一次步数）。`],recallBlanks:[],solutionGuide:{idea:`需二刷：贪心 BFS 覆盖范围模型
思路：贪心算法。用 end 记录当前跳跃能到达的最远边界，用 max_reach 记录遍历过程中能探到的最远位置。
当遍历到 end 时，说明必须跳一步了，此时步数 +1，并将 end 更新为 max_reach。
巧妙点：循环只到 len(nums) - 1，因为只要到了终点前，如果还没跳，终点也能被覆盖到（题目保证能到达）。
时间 O(N)，空间 O(1)
易错点/误区：
1. 遍历的边界是 len(nums) - 1，如果遍历到最后一个元素，会多跳一次（因为只要到了 n-1 前面就一定能覆盖，如果在 n-1 处正好触发 i  end，就会错误地多加一次步数）。`,interviewSteps:["先说明核心考点：贪心 BFS。","写出局部选择为什么不会破坏全局最优，面试中要用覆盖范围或交换论证解释。","关键词：贪心 / 贪心 BFS / 数组 / 动态规划。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：贪心 BFS 覆盖范围模型
思路：贪心算法。用 end 记录当前跳跃能到达的最远边界，用 max_reach 记录遍历过程中能探到的最远位置。
当遍历到 end 时，说明必须跳一步了，此时步数 +1，并将 end 更新为 max_reach。
巧妙点：循环只到 len(nums) - 1，因为只要到了终点前，如果还没跳，终点也能被覆盖到（题目保证能到达）。
时间 O(N)，空间 O(1)
易错点/误区：
1. 遍历的边界是 len(nums) - 1，如果遍历到最后一个元素，会多跳一次（因为只要到了 n-1 前面就一定能覆盖，如果在 n-1 处正好触发 i  end，就会错误地多加一次步数）。`},ask:"给定一个长度为 n 的 0 索引整数数组 nums。初始位置在下标 0。",constraints:["- 1 <= nums.length <= 10^4","- 0 <= nums[i] <= 1000"]},{id:"763",slug:"763-划分字母区间",title:"划分字母区间",titleEn:"Partition Labels",category:"贪心",difficulty:"中等",topic:"区间合并",completed:!0,leetcodeSlug:"partition-labels",leetcodeUrl:"https://leetcode.cn/problems/partition-labels/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E5%88%92%E5%88%86%E5%AD%97%E6%AF%8D%E5%8C%BA%E9%97%B4",acceptanceRate:79,solutionCount:2671,companyTagCount:37,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["贪心","区间合并","哈希表","双指针","字符串"],sourcePath:"hot100/14_贪心/763.划分字母区间.py",lastUpdated:"2026-08-27",lastUpdatedAt:"2026-08-27T14:38:52.990Z",interviewPattern:"写出局部选择为什么不会破坏全局最优，面试中要用覆盖范围或交换论证解释。",thoughts:[`需二刷：贪心覆盖范围（跳跃游戏变体）
思路：贪心算法。核心思想是“如果把某字母划入当前片段，那么这个片段至少要延伸到该字母最后一次出现的位置”。
第一遍遍历：记录每个字符最后出现的位置；
第二遍遍历：用 end 维护当前片段的必达边界，当遍历指针 i  end 时，说明当前片段已经完全囊括了内部所有字母，可以切分。
时间 O(N)，空间 O(Σ) (字符集大小，最多26)
易错点/误区：
1. 两次遍历。第一次用于收集情报，第二次用于滑动。不要试图在一次遍历里解决。
2. 算长度时是 end - start + 1，并且切分完之后 start 必须跳到 i + 1，而不是 i。`],pitfalls:[`需二刷：贪心覆盖范围（跳跃游戏变体）
思路：贪心算法。核心思想是“如果把某字母划入当前片段，那么这个片段至少要延伸到该字母最后一次出现的位置”。
第一遍遍历：记录每个字符最后出现的位置；
第二遍遍历：用 end 维护当前片段的必达边界，当遍历指针 i  end 时，说明当前片段已经完全囊括了内部所有字母，可以切分。
时间 O(N)，空间 O(Σ) (字符集大小，最多26)
易错点/误区：
1. 两次遍历。第一次用于收集情报，第二次用于滑动。不要试图在一次遍历里解决。
2. 算长度时是 end - start + 1，并且切分完之后 start 必须跳到 i + 1，而不是 i。`],recallBlanks:[],solutionGuide:{idea:`需二刷：贪心覆盖范围（跳跃游戏变体）
思路：贪心算法。核心思想是“如果把某字母划入当前片段，那么这个片段至少要延伸到该字母最后一次出现的位置”。
第一遍遍历：记录每个字符最后出现的位置；
第二遍遍历：用 end 维护当前片段的必达边界，当遍历指针 i  end 时，说明当前片段已经完全囊括了内部所有字母，可以切分。
时间 O(N)，空间 O(Σ) (字符集大小，最多26)
易错点/误区：
1. 两次遍历。第一次用于收集情报，第二次用于滑动。不要试图在一次遍历里解决。
2. 算长度时是 end - start + 1，并且切分完之后 start 必须跳到 i + 1，而不是 i。`,interviewSteps:["先说明核心考点：区间合并。","写出局部选择为什么不会破坏全局最优，面试中要用覆盖范围或交换论证解释。","关键词：贪心 / 区间合并 / 哈希表 / 双指针。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：贪心覆盖范围（跳跃游戏变体）
思路：贪心算法。核心思想是“如果把某字母划入当前片段，那么这个片段至少要延伸到该字母最后一次出现的位置”。
第一遍遍历：记录每个字符最后出现的位置；
第二遍遍历：用 end 维护当前片段的必达边界，当遍历指针 i  end 时，说明当前片段已经完全囊括了内部所有字母，可以切分。
时间 O(N)，空间 O(Σ) (字符集大小，最多26)
易错点/误区：
1. 两次遍历。第一次用于收集情报，第二次用于滑动。不要试图在一次遍历里解决。
2. 算长度时是 end - start + 1，并且切分完之后 start 必须跳到 i + 1，而不是 i。`},ask:'给你一个字符串 s 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。例如，字符串 "ababcc" 能够被分为 ["abab", "cc"]，但类似 ["aba", "bcc"] 或 ["ab", "ab", …',constraints:["- 1 <= s.length <= 500"]},{id:"70",slug:"70-爬楼梯",title:"爬楼梯",titleEn:"Climbing Stairs",category:"动态规划",difficulty:"简单",topic:"斐波那契",completed:!0,leetcodeSlug:"climbing-stairs",leetcodeUrl:"https://leetcode.cn/problems/climbing-stairs/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E7%88%AC%E6%A5%BC%E6%A2%AF",acceptanceRate:55.8,solutionCount:9319,companyTagCount:193,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["动态规划","斐波那契","记忆化","数学"],sourcePath:"hot100/15_动态规划/70.爬楼梯.py",lastUpdated:"2026-03-19",lastUpdatedAt:"2026-03-19T06:26:51.523Z",interviewPattern:"先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",thoughts:[`需二刷：动态规划入门题，理解状态转移方程
思路：到第 n 阶的方法  到第 n-1 阶的方法 + 到第 n-2 阶的方法
因为最后一步要么跨 1 阶，要么跨 2 阶
易错点/误区：
1. dp[2] 赋值不能放在 n1 判断之前，否则 n1 时 dp 数组只有 2 个元素，dp[2] 越界
2. return 要放在循环外面，不能在循环内 if in 时 return（此时 dp[n] 还没算）
3.  是比较运算符（返回 True/False）， 才是赋值，不要混淆
4. for 循环会自动递增 i，不需要手动 i + 1`,`方法一：dp 数组（标准写法）
时间 O(n)，空间 O(n)`,`方法二：滚动变量（空间优化）
时间 O(n)，空间 O(1)
因为每次只用到前两个值，所以不需要整个数组`],pitfalls:[`需二刷：动态规划入门题，理解状态转移方程
思路：到第 n 阶的方法  到第 n-1 阶的方法 + 到第 n-2 阶的方法
因为最后一步要么跨 1 阶，要么跨 2 阶
易错点/误区：
1. dp[2] 赋值不能放在 n1 判断之前，否则 n1 时 dp 数组只有 2 个元素，dp[2] 越界
2. return 要放在循环外面，不能在循环内 if in 时 return（此时 dp[n] 还没算）
3.  是比较运算符（返回 True/False）， 才是赋值，不要混淆
4. for 循环会自动递增 i，不需要手动 i + 1`],recallBlanks:[],solutionGuide:{idea:`需二刷：动态规划入门题，理解状态转移方程
思路：到第 n 阶的方法  到第 n-1 阶的方法 + 到第 n-2 阶的方法
因为最后一步要么跨 1 阶，要么跨 2 阶
易错点/误区：
1. dp[2] 赋值不能放在 n1 判断之前，否则 n1 时 dp 数组只有 2 个元素，dp[2] 越界
2. return 要放在循环外面，不能在循环内 if in 时 return（此时 dp[n] 还没算）
3.  是比较运算符（返回 True/False）， 才是赋值，不要混淆
4. for 循环会自动递增 i，不需要手动 i + 1`,interviewSteps:["先说明核心考点：斐波那契。","先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。","关键词：动态规划 / 斐波那契 / 记忆化 / 数学。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：动态规划入门题，理解状态转移方程
思路：到第 n 阶的方法  到第 n-1 阶的方法 + 到第 n-2 阶的方法
因为最后一步要么跨 1 阶，要么跨 2 阶
易错点/误区：
1. dp[2] 赋值不能放在 n1 判断之前，否则 n1 时 dp 数组只有 2 个元素，dp[2] 越界
2. return 要放在循环外面，不能在循环内 if in 时 return（此时 dp[n] 还没算）
3.  是比较运算符（返回 True/False）， 才是赋值，不要混淆
4. for 循环会自动递增 i，不需要手动 i + 1`},ask:"假设你正在爬楼梯。需要 n 阶你才能到达楼顶。",constraints:["- 1 <= n <= 45"]},{id:"118",slug:"118-杨辉三角",title:"杨辉三角",titleEn:"Pascal's Triangle",category:"动态规划",difficulty:"简单",topic:"递推",completed:!0,leetcodeSlug:"pascals-triangle",leetcodeUrl:"https://leetcode.cn/problems/pascals-triangle/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%9D%A8%E8%BE%89%E4%B8%89%E8%A7%92",acceptanceRate:77.9,solutionCount:4498,companyTagCount:75,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["动态规划","递推","数组"],sourcePath:"hot100/15_动态规划/118.杨辉三角.py",lastUpdated:"2026-03-19",lastUpdatedAt:"2026-03-19T13:31:58.214Z",interviewPattern:"先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",thoughts:[`思路：逐行构建，每行首尾为1，中间元素  上一行相邻两数之和
时间 O(n²)，空间 O(n²) —— 总共生成 n(n+1)/2 个元素
易错点/误区：
1. 初始化应该是 result  [[1]]，不是 [[]]（第一行是 [1] 不是空列表）
2. 外层循环 range(1, numRows) 从1开始，不是从2开始，否则 numRows2 时循环不执行
3. 内层循环 range(1, i)，不是 range(1, i-1)。第 i 行有 i-1 个中间元素（位置1到i-1）
4. 注意 Python 负数索引：j0 时 result[i-1][-1] 会取最后一个元素而不是报错，容易产生隐蔽bug`,`推荐写法：补零法（更简洁）
思路：给上一行左右各补一个0，然后相邻两数相加，直接得到新一行
例如: [1,2,1] → [0,1,2,1,0] → 相邻相加 → [1,3,3,1]
好处：不需要单独处理首尾的1
class Solution:
def generate(self, numRows: int) -> List[List[int]]:
result  [[1]]
for _ in range(1, numRows):
prev  [0] + result[-1] + [0]  # 上一行左右补零
result.append([prev[j] + prev[j+1] for j in range(len(prev)-1)])
return result`],pitfalls:[`思路：逐行构建，每行首尾为1，中间元素  上一行相邻两数之和
时间 O(n²)，空间 O(n²) —— 总共生成 n(n+1)/2 个元素
易错点/误区：
1. 初始化应该是 result  [[1]]，不是 [[]]（第一行是 [1] 不是空列表）
2. 外层循环 range(1, numRows) 从1开始，不是从2开始，否则 numRows2 时循环不执行
3. 内层循环 range(1, i)，不是 range(1, i-1)。第 i 行有 i-1 个中间元素（位置1到i-1）
4. 注意 Python 负数索引：j0 时 result[i-1][-1] 会取最后一个元素而不是报错，容易产生隐蔽bug`],recallBlanks:[],solutionGuide:{idea:`思路：逐行构建，每行首尾为1，中间元素  上一行相邻两数之和
时间 O(n²)，空间 O(n²) —— 总共生成 n(n+1)/2 个元素
易错点/误区：
1. 初始化应该是 result  [[1]]，不是 [[]]（第一行是 [1] 不是空列表）
2. 外层循环 range(1, numRows) 从1开始，不是从2开始，否则 numRows2 时循环不执行
3. 内层循环 range(1, i)，不是 range(1, i-1)。第 i 行有 i-1 个中间元素（位置1到i-1）
4. 注意 Python 负数索引：j0 时 result[i-1][-1] 会取最后一个元素而不是报错，容易产生隐蔽bug`,interviewSteps:["先说明核心考点：递推。","先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。","关键词：动态规划 / 递推 / 数组。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`思路：逐行构建，每行首尾为1，中间元素  上一行相邻两数之和
时间 O(n²)，空间 O(n²) —— 总共生成 n(n+1)/2 个元素
易错点/误区：
1. 初始化应该是 result  [[1]]，不是 [[]]（第一行是 [1] 不是空列表）
2. 外层循环 range(1, numRows) 从1开始，不是从2开始，否则 numRows2 时循环不执行
3. 内层循环 range(1, i)，不是 range(1, i-1)。第 i 行有 i-1 个中间元素（位置1到i-1）
4. 注意 Python 负数索引：j0 时 result[i-1][-1] 会取最后一个元素而不是报错，容易产生隐蔽bug`},ask:"给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。",constraints:["- 1 <= numRows <= 30"]},{id:"198",slug:"198-打家劫舍",title:"打家劫舍",titleEn:"House Robber",category:"动态规划",difficulty:"中等",topic:"状态转移",completed:!0,leetcodeSlug:"house-robber",leetcodeUrl:"https://leetcode.cn/problems/house-robber/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%89%93%E5%AE%B6%E5%8A%AB%E8%88%8D",acceptanceRate:56.6,solutionCount:7115,companyTagCount:118,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["动态规划","状态转移","数组"],sourcePath:"hot100/15_动态规划/198.打家劫舍.py",lastUpdated:"2026-03-26",lastUpdatedAt:"2026-03-26T06:30:46.594Z",interviewPattern:"先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",thoughts:[`需二刷：线性 DP（和爬楼梯同一类型）
思路：dp[i]  偷前 i 间房能获得的最大金额
对第 i 间房，选择偷或不偷，取较大值
转移方程：dp[i]  max(dp[i-1], dp[i-2] + nums[i])
时间 O(n)，空间 O(n)
易错点/误区：
1. 边界处理：nums 只有 1 个元素时，dp[1] 会越界，需提前返回
2. dp[i] 记录的是"最优值"，不是"偷了哪间"，所以不存在"推翻前面决定"的问题
3. dp[1]  max(nums[0], nums[1])，不是直接 nums[1]（要从前两间选最优）`,`————————————————————————————————————
面试推荐写法（空间优化 O(1)）：
因为 dp[i] 只依赖 dp[i-1] 和 dp[i-2]，
所以不需要整个数组，只用两个变量即可：
def rob(self, nums):
prev2  0  # dp[i-2]
prev1  0  # dp[i-1]
for num in nums:
curr  max(prev1, prev2 + num)
prev2  prev1
prev1  curr
return prev1
👆 推荐原因：
- 空间从 O(n) 优化到 O(1)，面试加分
- 不需要处理边界（prev20, prev10 自然覆盖所有情况）
- 和爬楼梯的空间优化写法完全一样的套路
————————————————————————————————————`],pitfalls:[`需二刷：线性 DP（和爬楼梯同一类型）
思路：dp[i]  偷前 i 间房能获得的最大金额
对第 i 间房，选择偷或不偷，取较大值
转移方程：dp[i]  max(dp[i-1], dp[i-2] + nums[i])
时间 O(n)，空间 O(n)
易错点/误区：
1. 边界处理：nums 只有 1 个元素时，dp[1] 会越界，需提前返回
2. dp[i] 记录的是"最优值"，不是"偷了哪间"，所以不存在"推翻前面决定"的问题
3. dp[1]  max(nums[0], nums[1])，不是直接 nums[1]（要从前两间选最优）`,"边界：只有一间房，直接偷",`————————————————————————————————————
面试推荐写法（空间优化 O(1)）：
因为 dp[i] 只依赖 dp[i-1] 和 dp[i-2]，
所以不需要整个数组，只用两个变量即可：
def rob(self, nums):
prev2  0  # dp[i-2]
prev1  0  # dp[i-1]
for num in nums:
curr  max(prev1, prev2 + num)
prev2  prev1
prev1  curr
return prev1
👆 推荐原因：
- 空间从 O(n) 优化到 O(1)，面试加分
- 不需要处理边界（prev20, prev10 自然覆盖所有情况）
- 和爬楼梯的空间优化写法完全一样的套路
————————————————————————————————————`],recallBlanks:[],solutionGuide:{idea:`需二刷：线性 DP（和爬楼梯同一类型）
思路：dp[i]  偷前 i 间房能获得的最大金额
对第 i 间房，选择偷或不偷，取较大值
转移方程：dp[i]  max(dp[i-1], dp[i-2] + nums[i])
时间 O(n)，空间 O(n)
易错点/误区：
1. 边界处理：nums 只有 1 个元素时，dp[1] 会越界，需提前返回
2. dp[i] 记录的是"最优值"，不是"偷了哪间"，所以不存在"推翻前面决定"的问题
3. dp[1]  max(nums[0], nums[1])，不是直接 nums[1]（要从前两间选最优）`,interviewSteps:["先说明核心考点：状态转移。","先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。","关键词：动态规划 / 状态转移 / 数组。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：线性 DP（和爬楼梯同一类型）
思路：dp[i]  偷前 i 间房能获得的最大金额
对第 i 间房，选择偷或不偷，取较大值
转移方程：dp[i]  max(dp[i-1], dp[i-2] + nums[i])
时间 O(n)，空间 O(n)
易错点/误区：
1. 边界处理：nums 只有 1 个元素时，dp[1] 会越界，需提前返回
2. dp[i] 记录的是"最优值"，不是"偷了哪间"，所以不存在"推翻前面决定"的问题
3. dp[1]  max(nums[0], nums[1])，不是直接 nums[1]（要从前两间选最优）`},ask:"你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。"},{id:"300",slug:"300-最长递增子序列",title:"最长递增子序列",titleEn:"Longest Increasing Subsequence",category:"动态规划",difficulty:"中等",topic:"LIS (O(n²) DP)",completed:!0,leetcodeSlug:"longest-increasing-subsequence",leetcodeUrl:"https://leetcode.cn/problems/longest-increasing-subsequence/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%9C%80%E9%95%BF%E9%80%92%E5%A2%9E%E5%AD%90%E5%BA%8F%E5%88%97",acceptanceRate:59,solutionCount:5908,companyTagCount:118,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["动态规划","LIS (O(n²) DP)","数组","二分查找","最长上升子序列"],sourcePath:"hot100/15_动态规划/300.最长递增子序列.py",lastUpdated:"2026-08-31",lastUpdatedAt:"2026-08-31T13:17:20.422Z",interviewPattern:"先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",thoughts:[`需二刷：动态规划经典基础题（子序列类 DP 状态定义范式：dp[i] 以 nums[i] 结尾）
思路：
1. 状态定义：dp[i] 表示以 nums[i] 结尾的最长严格递增子序列长度。
2. 初始状态：每个元素单独构成长度为 1 的子序列，初始化 dp  [1] * n。
3. 状态转移：双层循环，外层固定结尾 i，内层遍历历史起点 j (0 < j < i)。
若 nums[i] > nums[j]，则 nums[i] 可接在 nums[j] 后面，转移方程：dp[i]  max(dp[i], dp[j] + 1)。
4. 最终结果：最长子序列不一定以末尾元素结尾，返回 max(dp)。
时间 O(n²)，空间 O(n)
易错点/误区：
1. 【历史状态污染】：实战曾写 dp[j] + 1，这是严重错误。dp[j] 记录的是历史定值，随意修改会破坏后续所有参考 j 的计算；只需用 dp[j] + 1 竞争更新 dp[i]。
2. 【严格递增要求】：条件必须是 nums[i] > nums[j]，不能带等号（若允许非降序列才带等号）。
3. 【返回值取错】：不能直接返回 dp[-1]，因为全局最长递增子序列的结尾元素可能出现在数组中间任意位置，必须返回 max(dp)。`,`动态规划法
if not nums:
return 0`],pitfalls:[`需二刷：动态规划经典基础题（子序列类 DP 状态定义范式：dp[i] 以 nums[i] 结尾）
思路：
1. 状态定义：dp[i] 表示以 nums[i] 结尾的最长严格递增子序列长度。
2. 初始状态：每个元素单独构成长度为 1 的子序列，初始化 dp  [1] * n。
3. 状态转移：双层循环，外层固定结尾 i，内层遍历历史起点 j (0 < j < i)。
若 nums[i] > nums[j]，则 nums[i] 可接在 nums[j] 后面，转移方程：dp[i]  max(dp[i], dp[j] + 1)。
4. 最终结果：最长子序列不一定以末尾元素结尾，返回 max(dp)。
时间 O(n²)，空间 O(n)
易错点/误区：
1. 【历史状态污染】：实战曾写 dp[j] + 1，这是严重错误。dp[j] 记录的是历史定值，随意修改会破坏后续所有参考 j 的计算；只需用 dp[j] + 1 竞争更新 dp[i]。
2. 【严格递增要求】：条件必须是 nums[i] > nums[j]，不能带等号（若允许非降序列才带等号）。
3. 【返回值取错】：不能直接返回 dp[-1]，因为全局最长递增子序列的结尾元素可能出现在数组中间任意位置，必须返回 max(dp)。`],recallBlanks:[{prompt:`＿＿＿法
if not nums:
return 0`,answer:"动态规划"}],solutionGuide:{idea:`需二刷：动态规划经典基础题（子序列类 DP 状态定义范式：dp[i] 以 nums[i] 结尾）
思路：
1. 状态定义：dp[i] 表示以 nums[i] 结尾的最长严格递增子序列长度。
2. 初始状态：每个元素单独构成长度为 1 的子序列，初始化 dp  [1] * n。
3. 状态转移：双层循环，外层固定结尾 i，内层遍历历史起点 j (0 < j < i)。
若 nums[i] > nums[j]，则 nums[i] 可接在 nums[j] 后面，转移方程：dp[i]  max(dp[i], dp[j] + 1)。
4. 最终结果：最长子序列不一定以末尾元素结尾，返回 max(dp)。
时间 O(n²)，空间 O(n)
易错点/误区：
1. 【历史状态污染】：实战曾写 dp[j] + 1，这是严重错误。dp[j] 记录的是历史定值，随意修改会破坏后续所有参考 j 的计算；只需用 dp[j] + 1 竞争更新 dp[i]。
2. 【严格递增要求】：条件必须是 nums[i] > nums[j]，不能带等号（若允许非降序列才带等号）。
3. 【返回值取错】：不能直接返回 dp[-1]，因为全局最长递增子序列的结尾元素可能出现在数组中间任意位置，必须返回 max(dp)。`,interviewSteps:["先说明核心考点：LIS (O(n²) DP)。","先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。","关键词：动态规划 / LIS (O(n²) DP) / 数组 / 二分查找。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：动态规划经典基础题（子序列类 DP 状态定义范式：dp[i] 以 nums[i] 结尾）
思路：
1. 状态定义：dp[i] 表示以 nums[i] 结尾的最长严格递增子序列长度。
2. 初始状态：每个元素单独构成长度为 1 的子序列，初始化 dp  [1] * n。
3. 状态转移：双层循环，外层固定结尾 i，内层遍历历史起点 j (0 < j < i)。
若 nums[i] > nums[j]，则 nums[i] 可接在 nums[j] 后面，转移方程：dp[i]  max(dp[i], dp[j] + 1)。
4. 最终结果：最长子序列不一定以末尾元素结尾，返回 max(dp)。
时间 O(n²)，空间 O(n)
易错点/误区：
1. 【历史状态污染】：实战曾写 dp[j] + 1，这是严重错误。dp[j] 记录的是历史定值，随意修改会破坏后续所有参考 j 的计算；只需用 dp[j] + 1 竞争更新 dp[i]。
2. 【严格递增要求】：条件必须是 nums[i] > nums[j]，不能带等号（若允许非降序列才带等号）。
3. 【返回值取错】：不能直接返回 dp[-1]，因为全局最长递增子序列的结尾元素可能出现在数组中间任意位置，必须返回 max(dp)。`},ask:"给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。",constraints:["- 1 <= nums.length <= 2500","- -10^4 <= nums[i] <= 10^4"]},{id:"322",slug:"322-零钱兑换",title:"零钱兑换",titleEn:"Coin Change",category:"动态规划",difficulty:"中等",topic:"完全背包 DP",completed:!0,leetcodeSlug:"coin-change",leetcodeUrl:"https://leetcode.cn/problems/coin-change/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E9%9B%B6%E9%92%B1%E5%85%91%E6%8D%A2",acceptanceRate:53.4,solutionCount:5025,companyTagCount:129,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["动态规划","完全背包 DP","广度优先搜索","数组","背包问题","完全背包"],sourcePath:"hot100/15_动态规划/322.零钱兑换.py",lastUpdated:"2026-08-31",lastUpdatedAt:"2026-08-31T13:05:45.401Z",interviewPattern:"先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",thoughts:[`需二刷：完全背包最值问题（自底向上 DP 状态转移）
思路：
1. 状态定义：dp[i] 表示凑齐总金额 i 所需的最少硬币枚数。
2. 初始状态：
- dp[0]  0（凑齐 0 元需要 0 枚硬币）。
- 其余金额 dp[1...amount] 初始化为 float('inf')，表示尚未计算或无法凑出。
3. 状态转移：
- 对于目标金额 i，尝试使用手中的每一枚面额为 coin 的硬币（前提：i > coin）。
- 拿出一枚 coin 后，剩余金额 i - coin 所需的最少硬币数为 dp[i - coin]。
- 此时凑齐金额 i 需要的硬币数就是 dp[i - coin] + 1。
- 转移方程：dp[i]  min(dp[i], dp[i - coin] + 1)。
4. 最终结果：若 dp[amount] 仍为 float('inf') 说明无法凑出，返回 -1；否则返回 dp[amount]。
时间 O(amount * len(coins))，空间 O(amount)
易错点/误区：
1. 【数组长度越界】：金额范围是 0 ~ amount，共 amount + 1 种状态，必须初始化 dp  [float('inf')] * (amount + 1)，若只开 amount 大小会导致 dp[amount] 越界报 IndexError。
2. 【循环区间】：金额应从 1 递推至 amount，需用 range(1, amount + 1)；若写 range(amount) 则只算到 amount - 1。
3. 【负索引静默取值】：必须加入 if i > coin: 守卫，否则 i - coin < 0 会被 Python 解释为负下标读取数组尾部，产生难以察觉的隐蔽 bug。
4. 【初始值设置】：求最小值问题必须初始化为正无穷大（或 amount + 1），唯独 dp[0] 设为 0 作为递推起点。`],pitfalls:[`需二刷：完全背包最值问题（自底向上 DP 状态转移）
思路：
1. 状态定义：dp[i] 表示凑齐总金额 i 所需的最少硬币枚数。
2. 初始状态：
- dp[0]  0（凑齐 0 元需要 0 枚硬币）。
- 其余金额 dp[1...amount] 初始化为 float('inf')，表示尚未计算或无法凑出。
3. 状态转移：
- 对于目标金额 i，尝试使用手中的每一枚面额为 coin 的硬币（前提：i > coin）。
- 拿出一枚 coin 后，剩余金额 i - coin 所需的最少硬币数为 dp[i - coin]。
- 此时凑齐金额 i 需要的硬币数就是 dp[i - coin] + 1。
- 转移方程：dp[i]  min(dp[i], dp[i - coin] + 1)。
4. 最终结果：若 dp[amount] 仍为 float('inf') 说明无法凑出，返回 -1；否则返回 dp[amount]。
时间 O(amount * len(coins))，空间 O(amount)
易错点/误区：
1. 【数组长度越界】：金额范围是 0 ~ amount，共 amount + 1 种状态，必须初始化 dp  [float('inf')] * (amount + 1)，若只开 amount 大小会导致 dp[amount] 越界报 IndexError。
2. 【循环区间】：金额应从 1 递推至 amount，需用 range(1, amount + 1)；若写 range(amount) 则只算到 amount - 1。
3. 【负索引静默取值】：必须加入 if i > coin: 守卫，否则 i - coin < 0 会被 Python 解释为负下标读取数组尾部，产生难以察觉的隐蔽 bug。
4. 【初始值设置】：求最小值问题必须初始化为正无穷大（或 amount + 1），唯独 dp[0] 设为 0 作为递推起点。`],recallBlanks:[],solutionGuide:{idea:`需二刷：完全背包最值问题（自底向上 DP 状态转移）
思路：
1. 状态定义：dp[i] 表示凑齐总金额 i 所需的最少硬币枚数。
2. 初始状态：
- dp[0]  0（凑齐 0 元需要 0 枚硬币）。
- 其余金额 dp[1...amount] 初始化为 float('inf')，表示尚未计算或无法凑出。
3. 状态转移：
- 对于目标金额 i，尝试使用手中的每一枚面额为 coin 的硬币（前提：i > coin）。
- 拿出一枚 coin 后，剩余金额 i - coin 所需的最少硬币数为 dp[i - coin]。
- 此时凑齐金额 i 需要的硬币数就是 dp[i - coin] + 1。
- 转移方程：dp[i]  min(dp[i], dp[i - coin] + 1)。
4. 最终结果：若 dp[amount] 仍为 float('inf') 说明无法凑出，返回 -1；否则返回 dp[amount]。
时间 O(amount * len(coins))，空间 O(amount)
易错点/误区：
1. 【数组长度越界】：金额范围是 0 ~ amount，共 amount + 1 种状态，必须初始化 dp  [float('inf')] * (amount + 1)，若只开 amount 大小会导致 dp[amount] 越界报 IndexError。
2. 【循环区间】：金额应从 1 递推至 amount，需用 range(1, amount + 1)；若写 range(amount) 则只算到 amount - 1。
3. 【负索引静默取值】：必须加入 if i > coin: 守卫，否则 i - coin < 0 会被 Python 解释为负下标读取数组尾部，产生难以察觉的隐蔽 bug。
4. 【初始值设置】：求最小值问题必须初始化为正无穷大（或 amount + 1），唯独 dp[0] 设为 0 作为递推起点。`,interviewSteps:["先说明核心考点：完全背包 DP。","先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。","关键词：动态规划 / 完全背包 DP / 广度优先搜索 / 数组。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：完全背包最值问题（自底向上 DP 状态转移）
思路：
1. 状态定义：dp[i] 表示凑齐总金额 i 所需的最少硬币枚数。
2. 初始状态：
- dp[0]  0（凑齐 0 元需要 0 枚硬币）。
- 其余金额 dp[1...amount] 初始化为 float('inf')，表示尚未计算或无法凑出。
3. 状态转移：
- 对于目标金额 i，尝试使用手中的每一枚面额为 coin 的硬币（前提：i > coin）。
- 拿出一枚 coin 后，剩余金额 i - coin 所需的最少硬币数为 dp[i - coin]。
- 此时凑齐金额 i 需要的硬币数就是 dp[i - coin] + 1。
- 转移方程：dp[i]  min(dp[i], dp[i - coin] + 1)。
4. 最终结果：若 dp[amount] 仍为 float('inf') 说明无法凑出，返回 -1；否则返回 dp[amount]。
时间 O(amount * len(coins))，空间 O(amount)
易错点/误区：
1. 【数组长度越界】：金额范围是 0 ~ amount，共 amount + 1 种状态，必须初始化 dp  [float('inf')] * (amount + 1)，若只开 amount 大小会导致 dp[amount] 越界报 IndexError。
2. 【循环区间】：金额应从 1 递推至 amount，需用 range(1, amount + 1)；若写 range(amount) 则只算到 amount - 1。
3. 【负索引静默取值】：必须加入 if i > coin: 守卫，否则 i - coin < 0 会被 Python 解释为负下标读取数组尾部，产生难以察觉的隐蔽 bug。
4. 【初始值设置】：求最小值问题必须初始化为正无穷大（或 amount + 1），唯独 dp[0] 设为 0 作为递推起点。`},ask:"给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount，表示总金额。",constraints:["- 1 <= coins.length <= 12","- 1 <= coins[i] <= 2^31 - 1","- 0 <= amount <= 10^4"]},{id:"139",slug:"139-单词拆分",title:"单词拆分",titleEn:"Word Break",category:"动态规划",difficulty:"中等",topic:"字符串背包 DP / 前缀分割",completed:!0,leetcodeSlug:"word-break",leetcodeUrl:"https://leetcode.cn/problems/word-break/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E5%8D%95%E8%AF%8D%E6%8B%86%E5%88%86",acceptanceRate:60.6,solutionCount:3999,companyTagCount:100,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["动态规划","字符串背包 DP / 前缀分割","字典树","记忆化","数组","哈希表","字符串","Brute-Force Search"],sourcePath:"hot100/15_动态规划/139.单词拆分.py",lastUpdated:"2026-08-31",lastUpdatedAt:"2026-08-31T13:33:28.863Z",interviewPattern:"先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",thoughts:[`需二刷：字符串完全背包 DP / 前缀分割转移
思路：
1. 将 wordDict 转为哈希集合 word_set，使单词查找降至 O(1)。
2. 定义 dp[i] 表示字符串 s 的前 i 个字符 s[0:i] 是否能被字典单词拼出。
3. 基础状态 dp[0]  True（空字符串默认合法，作为递推起点）。
4. 外层遍历长度 i (1..n)，内层遍历分割点 j (0..i)：
若 dp[j] is True 且 s[j:i] in word_set，则 dp[i]  True 并 break。
5. 最终返回 dp[n]（或 dp[-1]）。
时间 O(n^2 * L)，其中 n 是字符串长度，L 是子串切片比较长度；空间 O(n + M)，M 为词典字符总和。
易错点/误区：
1. 列表查找慢：wordDict 是 List，直接 in 会遍历整个列表 O(K)；必须用 set(wordDict) 优化为 O(1)。
2. 循环上界 off-by-one：外层考查前 i 个字符，range 必须写到 range(1, n + 1)，写成 range(1, n) 会漏判整个字符串。
3. 状态转移切分点：切分点为 j 时，前半段状态是 dp[j]，后半段匹配的是切片 s[j:i]，切勿误写为 s[0:j]。
4. 初始化基准：dp 数组长度为 n + 1，dp[0] 必须置为 True，否则后续所有状态均无法被激活为 True。`],pitfalls:[`需二刷：字符串完全背包 DP / 前缀分割转移
思路：
1. 将 wordDict 转为哈希集合 word_set，使单词查找降至 O(1)。
2. 定义 dp[i] 表示字符串 s 的前 i 个字符 s[0:i] 是否能被字典单词拼出。
3. 基础状态 dp[0]  True（空字符串默认合法，作为递推起点）。
4. 外层遍历长度 i (1..n)，内层遍历分割点 j (0..i)：
若 dp[j] is True 且 s[j:i] in word_set，则 dp[i]  True 并 break。
5. 最终返回 dp[n]（或 dp[-1]）。
时间 O(n^2 * L)，其中 n 是字符串长度，L 是子串切片比较长度；空间 O(n + M)，M 为词典字符总和。
易错点/误区：
1. 列表查找慢：wordDict 是 List，直接 in 会遍历整个列表 O(K)；必须用 set(wordDict) 优化为 O(1)。
2. 循环上界 off-by-one：外层考查前 i 个字符，range 必须写到 range(1, n + 1)，写成 range(1, n) 会漏判整个字符串。
3. 状态转移切分点：切分点为 j 时，前半段状态是 dp[j]，后半段匹配的是切片 s[j:i]，切勿误写为 s[0:j]。
4. 初始化基准：dp 数组长度为 n + 1，dp[0] 必须置为 True，否则后续所有状态均无法被激活为 True。`],recallBlanks:[],solutionGuide:{idea:`需二刷：字符串完全背包 DP / 前缀分割转移
思路：
1. 将 wordDict 转为哈希集合 word_set，使单词查找降至 O(1)。
2. 定义 dp[i] 表示字符串 s 的前 i 个字符 s[0:i] 是否能被字典单词拼出。
3. 基础状态 dp[0]  True（空字符串默认合法，作为递推起点）。
4. 外层遍历长度 i (1..n)，内层遍历分割点 j (0..i)：
若 dp[j] is True 且 s[j:i] in word_set，则 dp[i]  True 并 break。
5. 最终返回 dp[n]（或 dp[-1]）。
时间 O(n^2 * L)，其中 n 是字符串长度，L 是子串切片比较长度；空间 O(n + M)，M 为词典字符总和。
易错点/误区：
1. 列表查找慢：wordDict 是 List，直接 in 会遍历整个列表 O(K)；必须用 set(wordDict) 优化为 O(1)。
2. 循环上界 off-by-one：外层考查前 i 个字符，range 必须写到 range(1, n + 1)，写成 range(1, n) 会漏判整个字符串。
3. 状态转移切分点：切分点为 j 时，前半段状态是 dp[j]，后半段匹配的是切片 s[j:i]，切勿误写为 s[0:j]。
4. 初始化基准：dp 数组长度为 n + 1，dp[0] 必须置为 True，否则后续所有状态均无法被激活为 True。`,interviewSteps:["先说明核心考点：字符串背包 DP / 前缀分割。","先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。","关键词：动态规划 / 字符串背包 DP / 前缀分割 / 字典树 / 记忆化。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：字符串完全背包 DP / 前缀分割转移
思路：
1. 将 wordDict 转为哈希集合 word_set，使单词查找降至 O(1)。
2. 定义 dp[i] 表示字符串 s 的前 i 个字符 s[0:i] 是否能被字典单词拼出。
3. 基础状态 dp[0]  True（空字符串默认合法，作为递推起点）。
4. 外层遍历长度 i (1..n)，内层遍历分割点 j (0..i)：
若 dp[j] is True 且 s[j:i] in word_set，则 dp[i]  True 并 break。
5. 最终返回 dp[n]（或 dp[-1]）。
时间 O(n^2 * L)，其中 n 是字符串长度，L 是子串切片比较长度；空间 O(n + M)，M 为词典字符总和。
易错点/误区：
1. 列表查找慢：wordDict 是 List，直接 in 会遍历整个列表 O(K)；必须用 set(wordDict) 优化为 O(1)。
2. 循环上界 off-by-one：外层考查前 i 个字符，range 必须写到 range(1, n + 1)，写成 range(1, n) 会漏判整个字符串。
3. 状态转移切分点：切分点为 j 时，前半段状态是 dp[j]，后半段匹配的是切片 s[j:i]，切勿误写为 s[0:j]。
4. 初始化基准：dp 数组长度为 n + 1，dp[0] 必须置为 True，否则后续所有状态均无法被激活为 True。`},ask:"给你一个字符串 s 和一个字符串列表 wordDict 作为字典。如果可以利用字典中出现的一个或多个单词拼接出 s 则返回 true。",constraints:["- 1 <= s.length <= 300","- 1 <= wordDict.length <= 1000","- 1 <= wordDict[i].length <= 20"]},{id:"416",slug:"416-分割等和子集",title:"分割等和子集",titleEn:"Partition Equal Subset Sum",category:"动态规划",difficulty:"中等",topic:"0-1 背包",completed:!0,leetcodeSlug:"partition-equal-subset-sum",leetcodeUrl:"https://leetcode.cn/problems/partition-equal-subset-sum/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E5%88%86%E5%89%B2%E7%AD%89%E5%92%8C%E5%AD%90%E9%9B%86",acceptanceRate:54.3,solutionCount:3276,companyTagCount:60,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["动态规划","0-1 背包","数组","背包问题"],sourcePath:"hot100/15_动态规划/416.分割等和子集.py",lastUpdated:"2026-08-31",lastUpdatedAt:"2026-08-31T14:03:56.969Z",interviewPattern:"先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",thoughts:[`需二刷：0-1 背包问题（子集和恰为 target  sum // 2），空间优化为一维数组时的倒序遍历
思路：
1. 数组求和为 total，若为奇数或 max(nums) > total // 2 则无法分割直接返回 False。
2. 转化问题为 0-1 背包：判断能否选出若干数，使其和恰好为 target  total // 2。
3. 定义布尔数组 dp[j] 表示是否能凑出和为 j。初始化 dp[0]  True，其余为 False。
4. 外层遍历物品 num，内层倒序遍历容量 j（从 target 递减至 num），状态转移 dp[j]  dp[j] or dp[j - num]。
时间 O(n * target)，空间 O(target)，其中 target  sum(nums) // 2
易错点/误区：
1. 倒序遍历原因：0-1 背包压缩为一维后，内层必须从 target 倒序遍历到 num。若正序遍历，同一数字会被重复使用（退化为完全背包）。
2. 初始状态：dp[0] 必须设为 True（和为 0 天然可达），作为所有有效转移的源头。
3. 循环结构：外层遍历物品 num，内层遍历容量 j；不可漏掉外层或混淆顺序。
4. 奇偶特判：total % 2 ! 0 必不可分，提前返回 False 避免无效计算。`],pitfalls:[`需二刷：0-1 背包问题（子集和恰为 target  sum // 2），空间优化为一维数组时的倒序遍历
思路：
1. 数组求和为 total，若为奇数或 max(nums) > total // 2 则无法分割直接返回 False。
2. 转化问题为 0-1 背包：判断能否选出若干数，使其和恰好为 target  total // 2。
3. 定义布尔数组 dp[j] 表示是否能凑出和为 j。初始化 dp[0]  True，其余为 False。
4. 外层遍历物品 num，内层倒序遍历容量 j（从 target 递减至 num），状态转移 dp[j]  dp[j] or dp[j - num]。
时间 O(n * target)，空间 O(target)，其中 target  sum(nums) // 2
易错点/误区：
1. 倒序遍历原因：0-1 背包压缩为一维后，内层必须从 target 倒序遍历到 num。若正序遍历，同一数字会被重复使用（退化为完全背包）。
2. 初始状态：dp[0] 必须设为 True（和为 0 天然可达），作为所有有效转移的源头。
3. 循环结构：外层遍历物品 num，内层遍历容量 j；不可漏掉外层或混淆顺序。
4. 奇偶特判：total % 2 ! 0 必不可分，提前返回 False 避免无效计算。`],recallBlanks:[],solutionGuide:{idea:`需二刷：0-1 背包问题（子集和恰为 target  sum // 2），空间优化为一维数组时的倒序遍历
思路：
1. 数组求和为 total，若为奇数或 max(nums) > total // 2 则无法分割直接返回 False。
2. 转化问题为 0-1 背包：判断能否选出若干数，使其和恰好为 target  total // 2。
3. 定义布尔数组 dp[j] 表示是否能凑出和为 j。初始化 dp[0]  True，其余为 False。
4. 外层遍历物品 num，内层倒序遍历容量 j（从 target 递减至 num），状态转移 dp[j]  dp[j] or dp[j - num]。
时间 O(n * target)，空间 O(target)，其中 target  sum(nums) // 2
易错点/误区：
1. 倒序遍历原因：0-1 背包压缩为一维后，内层必须从 target 倒序遍历到 num。若正序遍历，同一数字会被重复使用（退化为完全背包）。
2. 初始状态：dp[0] 必须设为 True（和为 0 天然可达），作为所有有效转移的源头。
3. 循环结构：外层遍历物品 num，内层遍历容量 j；不可漏掉外层或混淆顺序。
4. 奇偶特判：total % 2 ! 0 必不可分，提前返回 False 避免无效计算。`,interviewSteps:["先说明核心考点：0-1 背包。","先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。","关键词：动态规划 / 0-1 背包 / 数组 / 背包问题。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：0-1 背包问题（子集和恰为 target  sum // 2），空间优化为一维数组时的倒序遍历
思路：
1. 数组求和为 total，若为奇数或 max(nums) > total // 2 则无法分割直接返回 False。
2. 转化问题为 0-1 背包：判断能否选出若干数，使其和恰好为 target  total // 2。
3. 定义布尔数组 dp[j] 表示是否能凑出和为 j。初始化 dp[0]  True，其余为 False。
4. 外层遍历物品 num，内层倒序遍历容量 j（从 target 递减至 num），状态转移 dp[j]  dp[j] or dp[j - num]。
时间 O(n * target)，空间 O(target)，其中 target  sum(nums) // 2
易错点/误区：
1. 倒序遍历原因：0-1 背包压缩为一维后，内层必须从 target 倒序遍历到 num。若正序遍历，同一数字会被重复使用（退化为完全背包）。
2. 初始状态：dp[0] 必须设为 True（和为 0 天然可达），作为所有有效转移的源头。
3. 循环结构：外层遍历物品 num，内层遍历容量 j；不可漏掉外层或混淆顺序。
4. 奇偶特判：total % 2 ! 0 必不可分，提前返回 False 避免无效计算。`},ask:"给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。"},{id:"152",slug:"152-乘积最大子数组",title:"乘积最大子数组",titleEn:"Maximum Product Subarray",category:"动态规划",difficulty:"中等",topic:"双状态 DP",completed:!0,leetcodeSlug:"maximum-product-subarray",leetcodeUrl:"https://leetcode.cn/problems/maximum-product-subarray/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E4%B9%98%E7%A7%AF%E6%9C%80%E5%A4%A7%E5%AD%90%E6%95%B0%E7%BB%84",acceptanceRate:44.7,solutionCount:3126,companyTagCount:87,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["动态规划","双状态 DP","数组"],sourcePath:"hot100/15_动态规划/152.乘积最大子数组.py",lastUpdated:"2026-08-31",lastUpdatedAt:"2026-08-31T14:47:21.861Z",interviewPattern:"先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",thoughts:[`需二刷：双状态动态规划（同时维护以当前元素结尾的最大乘积与最小乘积）
思路：
1. 连续子数组乘积具有「负负得正」特性：前一步的极小负数乘以当前负数可能变为极大正数。
2. 状态定义：
- max_dp[i] 表示以 nums[i] 结尾的连续子数组的最大乘积。
- min_dp[i] 表示以 nums[i] 结尾的连续子数组的最小乘积。
3. 状态转移：当前位置的最值只能由三种情况产生（单独成段、接在前驱最大值后、接在前驱最小值后）：
- max_dp[i]  max(nums[i], nums[i] * max_dp[i-1], nums[i] * min_dp[i-1])
- min_dp[i]  min(nums[i], nums[i] * max_dp[i-1], nums[i] * min_dp[i-1])
4. 全局最大乘积即为 max(max_dp)。
时间 O(n)，空间 O(n)（可通过滚动变量优化至 O(1)）
易错点/误区：
1. 单状态陷阱：若只维护最大值，遇到当前为负数时无法通过负负得正翻转出全局最大值。
2. 变量覆盖 bug：初始化列表后，注意下标赋值 min_dp[0]  nums[0]，若误写为 min_dp  nums[0] 会将列表覆盖为 int 导致下标索引报错。
3. 必须纳入 nums[i] 本身：参与比较的三者包含 nums[i]，代表「以当前元素重新开始」的情况（如前驱乘积为 0 或不利时）。
4. 空间优化注意：若压缩为 O(1) 变量 cur_max / cur_min，更新时需用临时变量暂存旧的 cur_max，避免更新 min 时使用了新算出的 max。`,"初始化双状态 DP 数组"],pitfalls:[`需二刷：双状态动态规划（同时维护以当前元素结尾的最大乘积与最小乘积）
思路：
1. 连续子数组乘积具有「负负得正」特性：前一步的极小负数乘以当前负数可能变为极大正数。
2. 状态定义：
- max_dp[i] 表示以 nums[i] 结尾的连续子数组的最大乘积。
- min_dp[i] 表示以 nums[i] 结尾的连续子数组的最小乘积。
3. 状态转移：当前位置的最值只能由三种情况产生（单独成段、接在前驱最大值后、接在前驱最小值后）：
- max_dp[i]  max(nums[i], nums[i] * max_dp[i-1], nums[i] * min_dp[i-1])
- min_dp[i]  min(nums[i], nums[i] * max_dp[i-1], nums[i] * min_dp[i-1])
4. 全局最大乘积即为 max(max_dp)。
时间 O(n)，空间 O(n)（可通过滚动变量优化至 O(1)）
易错点/误区：
1. 单状态陷阱：若只维护最大值，遇到当前为负数时无法通过负负得正翻转出全局最大值。
2. 变量覆盖 bug：初始化列表后，注意下标赋值 min_dp[0]  nums[0]，若误写为 min_dp  nums[0] 会将列表覆盖为 int 导致下标索引报错。
3. 必须纳入 nums[i] 本身：参与比较的三者包含 nums[i]，代表「以当前元素重新开始」的情况（如前驱乘积为 0 或不利时）。
4. 空间优化注意：若压缩为 O(1) 变量 cur_max / cur_min，更新时需用临时变量暂存旧的 cur_max，避免更新 min 时使用了新算出的 max。`],recallBlanks:[],solutionGuide:{idea:`需二刷：双状态动态规划（同时维护以当前元素结尾的最大乘积与最小乘积）
思路：
1. 连续子数组乘积具有「负负得正」特性：前一步的极小负数乘以当前负数可能变为极大正数。
2. 状态定义：
- max_dp[i] 表示以 nums[i] 结尾的连续子数组的最大乘积。
- min_dp[i] 表示以 nums[i] 结尾的连续子数组的最小乘积。
3. 状态转移：当前位置的最值只能由三种情况产生（单独成段、接在前驱最大值后、接在前驱最小值后）：
- max_dp[i]  max(nums[i], nums[i] * max_dp[i-1], nums[i] * min_dp[i-1])
- min_dp[i]  min(nums[i], nums[i] * max_dp[i-1], nums[i] * min_dp[i-1])
4. 全局最大乘积即为 max(max_dp)。
时间 O(n)，空间 O(n)（可通过滚动变量优化至 O(1)）
易错点/误区：
1. 单状态陷阱：若只维护最大值，遇到当前为负数时无法通过负负得正翻转出全局最大值。
2. 变量覆盖 bug：初始化列表后，注意下标赋值 min_dp[0]  nums[0]，若误写为 min_dp  nums[0] 会将列表覆盖为 int 导致下标索引报错。
3. 必须纳入 nums[i] 本身：参与比较的三者包含 nums[i]，代表「以当前元素重新开始」的情况（如前驱乘积为 0 或不利时）。
4. 空间优化注意：若压缩为 O(1) 变量 cur_max / cur_min，更新时需用临时变量暂存旧的 cur_max，避免更新 min 时使用了新算出的 max。`,interviewSteps:["先说明核心考点：双状态 DP。","先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。","关键词：动态规划 / 双状态 DP / 数组。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：双状态动态规划（同时维护以当前元素结尾的最大乘积与最小乘积）
思路：
1. 连续子数组乘积具有「负负得正」特性：前一步的极小负数乘以当前负数可能变为极大正数。
2. 状态定义：
- max_dp[i] 表示以 nums[i] 结尾的连续子数组的最大乘积。
- min_dp[i] 表示以 nums[i] 结尾的连续子数组的最小乘积。
3. 状态转移：当前位置的最值只能由三种情况产生（单独成段、接在前驱最大值后、接在前驱最小值后）：
- max_dp[i]  max(nums[i], nums[i] * max_dp[i-1], nums[i] * min_dp[i-1])
- min_dp[i]  min(nums[i], nums[i] * max_dp[i-1], nums[i] * min_dp[i-1])
4. 全局最大乘积即为 max(max_dp)。
时间 O(n)，空间 O(n)（可通过滚动变量优化至 O(1)）
易错点/误区：
1. 单状态陷阱：若只维护最大值，遇到当前为负数时无法通过负负得正翻转出全局最大值。
2. 变量覆盖 bug：初始化列表后，注意下标赋值 min_dp[0]  nums[0]，若误写为 min_dp  nums[0] 会将列表覆盖为 int 导致下标索引报错。
3. 必须纳入 nums[i] 本身：参与比较的三者包含 nums[i]，代表「以当前元素重新开始」的情况（如前驱乘积为 0 或不利时）。
4. 空间优化注意：若压缩为 O(1) 变量 cur_max / cur_min，更新时需用临时变量暂存旧的 cur_max，避免更新 min 时使用了新算出的 max。`},ask:"给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续 子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。",constraints:["- 1 <= nums.length <= 2 * 10^4","- -10 <= nums[i] <= 10"]},{id:"5",slug:"5-最长回文子串",title:"最长回文子串",titleEn:"Longest Palindromic Substring",category:"动态规划",difficulty:"中等",topic:"中心扩展 / DP",completed:!0,leetcodeSlug:"longest-palindromic-substring",leetcodeUrl:"https://leetcode.cn/problems/longest-palindromic-substring/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%9C%80%E9%95%BF%E5%9B%9E%E6%96%87%E5%AD%90%E4%B8%B2",acceptanceRate:41.1,solutionCount:10543,companyTagCount:253,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["动态规划","中心扩展 / DP","双指针","字符串","Manacher 算法"],sourcePath:"hot100/15_动态规划/5.最长回文子串.py",lastUpdated:"2026-08-31",lastUpdatedAt:"2026-08-31T15:36:10.237Z",interviewPattern:"先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",thoughts:[`需二刷：双指针中心扩展法（奇数/偶数中心向两端扩散）
思路：
1. 回文串具有天然的对称性，遍历每个可能的回文中心向两端同时扩散比对。
2. 回文中心有两种可能：
- 奇数长度中心：以单个字符 s[i] 为中心，即 expand(i, i)
- 偶数长度中心：以相邻两字符 s[i], s[i+1] 为中心，即 expand(i, i + 1)
3. 每次扩散到边界或字符不相等时停止，截取合法回文串更新全局最长串 res。
时间复杂度：O(n²)，遍历 n 个中心，每个中心最多向两边扩散 O(n)
空间复杂度：O(1)（若计切片字符串则为 O(n)）
易错点/误区：
1. 【中心形态传参】：奇数中心左右指针起点相同 (i, i)，偶数中心起点为相邻两位置 (i, i+1)；误传 (i-1, i+1) 会导致漏判单个字符。
2. 【扩散边界与切片】：while 边界需为 0 < left and right < n；写 0 < left 会漏判下标 0，写 left < right 会阻断奇数中心扩散。退出 while 时两端各多走了一步，有效区间为 [left+1, right-1]，故切片必须是 s[left + 1 : right]。
3. 【初始值与更新逻辑】：res 需初始化为 "" 而不是 None（否则 len(res) 报 TypeError）；仅在当前子串长度更长时更新 res，切忌在分支内 return 导致提前退出遍历。`],pitfalls:[`需二刷：双指针中心扩展法（奇数/偶数中心向两端扩散）
思路：
1. 回文串具有天然的对称性，遍历每个可能的回文中心向两端同时扩散比对。
2. 回文中心有两种可能：
- 奇数长度中心：以单个字符 s[i] 为中心，即 expand(i, i)
- 偶数长度中心：以相邻两字符 s[i], s[i+1] 为中心，即 expand(i, i + 1)
3. 每次扩散到边界或字符不相等时停止，截取合法回文串更新全局最长串 res。
时间复杂度：O(n²)，遍历 n 个中心，每个中心最多向两边扩散 O(n)
空间复杂度：O(1)（若计切片字符串则为 O(n)）
易错点/误区：
1. 【中心形态传参】：奇数中心左右指针起点相同 (i, i)，偶数中心起点为相邻两位置 (i, i+1)；误传 (i-1, i+1) 会导致漏判单个字符。
2. 【扩散边界与切片】：while 边界需为 0 < left and right < n；写 0 < left 会漏判下标 0，写 left < right 会阻断奇数中心扩散。退出 while 时两端各多走了一步，有效区间为 [left+1, right-1]，故切片必须是 s[left + 1 : right]。
3. 【初始值与更新逻辑】：res 需初始化为 "" 而不是 None（否则 len(res) 报 TypeError）；仅在当前子串长度更长时更新 res，切忌在分支内 return 导致提前退出遍历。`],recallBlanks:[],solutionGuide:{idea:"围绕「中心扩展 / DP」组织解法，先确认输入输出和边界，再选择对应模板。",interviewSteps:["先说明核心考点：中心扩展 / DP。","先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。","关键词：动态规划 / 中心扩展 / DP / 双指针 / 字符串。"],complexity:`需二刷：双指针中心扩展法（奇数/偶数中心向两端扩散）
思路：
1. 回文串具有天然的对称性，遍历每个可能的回文中心向两端同时扩散比对。
2. 回文中心有两种可能：
- 奇数长度中心：以单个字符 s[i] 为中心，即 expand(i, i)
- 偶数长度中心：以相邻两字符 s[i], s[i+1] 为中心，即 expand(i, i + 1)
3. 每次扩散到边界或字符不相等时停止，截取合法回文串更新全局最长串 res。
时间复杂度：O(n²)，遍历 n 个中心，每个中心最多向两边扩散 O(n)
空间复杂度：O(1)（若计切片字符串则为 O(n)）
易错点/误区：
1. 【中心形态传参】：奇数中心左右指针起点相同 (i, i)，偶数中心起点为相邻两位置 (i, i+1)；误传 (i-1, i+1) 会导致漏判单个字符。
2. 【扩散边界与切片】：while 边界需为 0 < left and right < n；写 0 < left 会漏判下标 0，写 left < right 会阻断奇数中心扩散。退出 while 时两端各多走了一步，有效区间为 [left+1, right-1]，故切片必须是 s[left + 1 : right]。
3. 【初始值与更新逻辑】：res 需初始化为 "" 而不是 None（否则 len(res) 报 TypeError）；仅在当前子串长度更长时更新 res，切忌在分支内 return 导致提前退出遍历。`,keyMistake:`需二刷：双指针中心扩展法（奇数/偶数中心向两端扩散）
思路：
1. 回文串具有天然的对称性，遍历每个可能的回文中心向两端同时扩散比对。
2. 回文中心有两种可能：
- 奇数长度中心：以单个字符 s[i] 为中心，即 expand(i, i)
- 偶数长度中心：以相邻两字符 s[i], s[i+1] 为中心，即 expand(i, i + 1)
3. 每次扩散到边界或字符不相等时停止，截取合法回文串更新全局最长串 res。
时间复杂度：O(n²)，遍历 n 个中心，每个中心最多向两边扩散 O(n)
空间复杂度：O(1)（若计切片字符串则为 O(n)）
易错点/误区：
1. 【中心形态传参】：奇数中心左右指针起点相同 (i, i)，偶数中心起点为相邻两位置 (i, i+1)；误传 (i-1, i+1) 会导致漏判单个字符。
2. 【扩散边界与切片】：while 边界需为 0 < left and right < n；写 0 < left 会漏判下标 0，写 left < right 会阻断奇数中心扩散。退出 while 时两端各多走了一步，有效区间为 [left+1, right-1]，故切片必须是 s[left + 1 : right]。
3. 【初始值与更新逻辑】：res 需初始化为 "" 而不是 None（否则 len(res) 报 TypeError）；仅在当前子串长度更长时更新 res，切忌在分支内 return 导致提前退出遍历。`},ask:"给你一个字符串 s，找到 s 中最长的 回文 子串。",constraints:["- 1 <= s.length <= 1000"]},{id:"279",slug:"279-完全平方数",title:"完全平方数",titleEn:"Perfect Squares",category:"动态规划",difficulty:"中等",topic:"完全背包",completed:!0,leetcodeSlug:"perfect-squares",leetcodeUrl:"https://leetcode.cn/problems/perfect-squares/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E5%AE%8C%E5%85%A8%E5%B9%B3%E6%96%B9%E6%95%B0",acceptanceRate:68.3,solutionCount:3139,companyTagCount:69,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["动态规划","完全背包","广度优先搜索","数学","背包问题"],sourcePath:"hot100/15_动态规划/279.完全平方数.py",lastUpdated:"2026-08-31",lastUpdatedAt:"2026-08-31T16:08:32.296Z",interviewPattern:"先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",thoughts:[`需二刷：完全背包最值 DP（与 322 零钱兑换模型完全一致）
思路：
1. 本质是完全背包最值问题：背包容量为 n，可选“物品面值”为完全平方数 1, 4, 9, ... (即 j*j < n)，每个可选无限次，求凑成 n 的最少数量。
2. 状态定义：dp[i] 表示凑齐正整数 i 所需的最少完全平方数数量。
3. 基础状态：dp[0]  0，其余 dp[1..n] 初始化为 float('inf')。
4. 状态转移：dp[i]  min(dp[i], dp[i - j * j] + 1) （其中 j * j < i）。
时间复杂度：O(n * √n)，外层循环 n 次，内层枚举最多 √i 次，总步数约为 ∫√x dx ≈ (2/3) n^(1.5)
空间复杂度：O(n)，一维 DP 数组长度为 n + 1
易错点/误区：
1. 【DP 数组大小】：dp 数组需开 (n + 1) 大小，若只写 [float('inf')] 会因越界抛 IndexError。
2. 【内层循环结构】：切忌同时写 for j in range(1, i) 嵌套 while j*j < i，这会导致 while 内部 j 无法自增陷入死循环，且 i1 时 range 为空漏算；应单独用 while j * j < i 配合 j + 1。`],pitfalls:[`需二刷：完全背包最值 DP（与 322 零钱兑换模型完全一致）
思路：
1. 本质是完全背包最值问题：背包容量为 n，可选“物品面值”为完全平方数 1, 4, 9, ... (即 j*j < n)，每个可选无限次，求凑成 n 的最少数量。
2. 状态定义：dp[i] 表示凑齐正整数 i 所需的最少完全平方数数量。
3. 基础状态：dp[0]  0，其余 dp[1..n] 初始化为 float('inf')。
4. 状态转移：dp[i]  min(dp[i], dp[i - j * j] + 1) （其中 j * j < i）。
时间复杂度：O(n * √n)，外层循环 n 次，内层枚举最多 √i 次，总步数约为 ∫√x dx ≈ (2/3) n^(1.5)
空间复杂度：O(n)，一维 DP 数组长度为 n + 1
易错点/误区：
1. 【DP 数组大小】：dp 数组需开 (n + 1) 大小，若只写 [float('inf')] 会因越界抛 IndexError。
2. 【内层循环结构】：切忌同时写 for j in range(1, i) 嵌套 while j*j < i，这会导致 while 内部 j 无法自增陷入死循环，且 i1 时 range 为空漏算；应单独用 while j * j < i 配合 j + 1。`],recallBlanks:[],solutionGuide:{idea:"围绕「完全背包」组织解法，先确认输入输出和边界，再选择对应模板。",interviewSteps:["先说明核心考点：完全背包。","先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。","关键词：动态规划 / 完全背包 / 广度优先搜索 / 数学。"],complexity:`需二刷：完全背包最值 DP（与 322 零钱兑换模型完全一致）
思路：
1. 本质是完全背包最值问题：背包容量为 n，可选“物品面值”为完全平方数 1, 4, 9, ... (即 j*j < n)，每个可选无限次，求凑成 n 的最少数量。
2. 状态定义：dp[i] 表示凑齐正整数 i 所需的最少完全平方数数量。
3. 基础状态：dp[0]  0，其余 dp[1..n] 初始化为 float('inf')。
4. 状态转移：dp[i]  min(dp[i], dp[i - j * j] + 1) （其中 j * j < i）。
时间复杂度：O(n * √n)，外层循环 n 次，内层枚举最多 √i 次，总步数约为 ∫√x dx ≈ (2/3) n^(1.5)
空间复杂度：O(n)，一维 DP 数组长度为 n + 1
易错点/误区：
1. 【DP 数组大小】：dp 数组需开 (n + 1) 大小，若只写 [float('inf')] 会因越界抛 IndexError。
2. 【内层循环结构】：切忌同时写 for j in range(1, i) 嵌套 while j*j < i，这会导致 while 内部 j 无法自增陷入死循环，且 i1 时 range 为空漏算；应单独用 while j * j < i 配合 j + 1。`,keyMistake:`需二刷：完全背包最值 DP（与 322 零钱兑换模型完全一致）
思路：
1. 本质是完全背包最值问题：背包容量为 n，可选“物品面值”为完全平方数 1, 4, 9, ... (即 j*j < n)，每个可选无限次，求凑成 n 的最少数量。
2. 状态定义：dp[i] 表示凑齐正整数 i 所需的最少完全平方数数量。
3. 基础状态：dp[0]  0，其余 dp[1..n] 初始化为 float('inf')。
4. 状态转移：dp[i]  min(dp[i], dp[i - j * j] + 1) （其中 j * j < i）。
时间复杂度：O(n * √n)，外层循环 n 次，内层枚举最多 √i 次，总步数约为 ∫√x dx ≈ (2/3) n^(1.5)
空间复杂度：O(n)，一维 DP 数组长度为 n + 1
易错点/误区：
1. 【DP 数组大小】：dp 数组需开 (n + 1) 大小，若只写 [float('inf')] 会因越界抛 IndexError。
2. 【内层循环结构】：切忌同时写 for j in range(1, i) 嵌套 while j*j < i，这会导致 while 内部 j 无法自增陷入死循环，且 i1 时 range 为空漏算；应单独用 while j * j < i 配合 j + 1。`},ask:"给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。",constraints:["- 1 <= n <= 10^4"]},{id:"32",slug:"32-最长有效括号",title:"最长有效括号",titleEn:"Longest Valid Parentheses",category:"动态规划",difficulty:"困难",topic:"栈 / DP (跨越匹配)",completed:!0,leetcodeSlug:"longest-valid-parentheses",leetcodeUrl:"https://leetcode.cn/problems/longest-valid-parentheses/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%9C%80%E9%95%BF%E6%9C%89%E6%95%88%E6%8B%AC%E5%8F%B7",acceptanceRate:42.6,solutionCount:3350,companyTagCount:103,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["动态规划","栈 / DP (跨越匹配)","栈","字符串","括号序列"],sourcePath:"hot100/15_动态规划/32.最长有效括号.py",lastUpdated:"2026-09-01",lastUpdatedAt:"2026-09-01T20:09:55.625Z",interviewPattern:"先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",thoughts:[`需二刷：一维 DP 跨越匹配 / 栈存下标做参照物
思路：
定义 dp[i] 表示以 s[i] 结尾的最长有效括号子串长度。
有效括号必然以 ')' 结尾，所以只需在 s[i]  ')' 时分类转移：
1. 形如 ...()：s[i-1]  '('，直接配对 dp[i]  (dp[i-2] if i > 2 else 0) + 2
2. 形如 ...))：s[i-1]  ')'，跨越中间 dp[i-1] 寻找匹配点 pre_idx  i - dp[i-1] - 1
若 pre_idx > 0 且 s[pre_idx]  '('，则拼接三部分：
dp[i]  dp[i-1] + 2 + (dp[pre_idx - 1] if pre_idx > 1 else 0)
时间 O(n)，空间 O(n)
易错点/误区：
1. 负索引隐患：Python 中 dp[-1] 会访问列表尾部，虽然初始全为 0 巧合通过，但依赖负索引属于隐式风险，需显式加 i > 2 和 pre_idx > 1 守卫。
2. 三段式拼接：情况 2 跨越匹配成功后，必须把 pre_idx 左侧相邻的历史有效长度 dp[pre_idx-1] 接上，不能只算 dp[i-1] + 2。`],pitfalls:[`需二刷：一维 DP 跨越匹配 / 栈存下标做参照物
思路：
定义 dp[i] 表示以 s[i] 结尾的最长有效括号子串长度。
有效括号必然以 ')' 结尾，所以只需在 s[i]  ')' 时分类转移：
1. 形如 ...()：s[i-1]  '('，直接配对 dp[i]  (dp[i-2] if i > 2 else 0) + 2
2. 形如 ...))：s[i-1]  ')'，跨越中间 dp[i-1] 寻找匹配点 pre_idx  i - dp[i-1] - 1
若 pre_idx > 0 且 s[pre_idx]  '('，则拼接三部分：
dp[i]  dp[i-1] + 2 + (dp[pre_idx - 1] if pre_idx > 1 else 0)
时间 O(n)，空间 O(n)
易错点/误区：
1. 负索引隐患：Python 中 dp[-1] 会访问列表尾部，虽然初始全为 0 巧合通过，但依赖负索引属于隐式风险，需显式加 i > 2 和 pre_idx > 1 守卫。
2. 三段式拼接：情况 2 跨越匹配成功后，必须把 pre_idx 左侧相邻的历史有效长度 dp[pre_idx-1] 接上，不能只算 dp[i-1] + 2。`],recallBlanks:[],solutionGuide:{idea:`需二刷：一维 DP 跨越匹配 / 栈存下标做参照物
思路：
定义 dp[i] 表示以 s[i] 结尾的最长有效括号子串长度。
有效括号必然以 ')' 结尾，所以只需在 s[i]  ')' 时分类转移：
1. 形如 ...()：s[i-1]  '('，直接配对 dp[i]  (dp[i-2] if i > 2 else 0) + 2
2. 形如 ...))：s[i-1]  ')'，跨越中间 dp[i-1] 寻找匹配点 pre_idx  i - dp[i-1] - 1
若 pre_idx > 0 且 s[pre_idx]  '('，则拼接三部分：
dp[i]  dp[i-1] + 2 + (dp[pre_idx - 1] if pre_idx > 1 else 0)
时间 O(n)，空间 O(n)
易错点/误区：
1. 负索引隐患：Python 中 dp[-1] 会访问列表尾部，虽然初始全为 0 巧合通过，但依赖负索引属于隐式风险，需显式加 i > 2 和 pre_idx > 1 守卫。
2. 三段式拼接：情况 2 跨越匹配成功后，必须把 pre_idx 左侧相邻的历史有效长度 dp[pre_idx-1] 接上，不能只算 dp[i-1] + 2。`,interviewSteps:["先说明核心考点：栈 / DP (跨越匹配)。","先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。","关键词：动态规划 / 栈 / DP (跨越匹配) / 栈 / 字符串。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：一维 DP 跨越匹配 / 栈存下标做参照物
思路：
定义 dp[i] 表示以 s[i] 结尾的最长有效括号子串长度。
有效括号必然以 ')' 结尾，所以只需在 s[i]  ')' 时分类转移：
1. 形如 ...()：s[i-1]  '('，直接配对 dp[i]  (dp[i-2] if i > 2 else 0) + 2
2. 形如 ...))：s[i-1]  ')'，跨越中间 dp[i-1] 寻找匹配点 pre_idx  i - dp[i-1] - 1
若 pre_idx > 0 且 s[pre_idx]  '('，则拼接三部分：
dp[i]  dp[i-1] + 2 + (dp[pre_idx - 1] if pre_idx > 1 else 0)
时间 O(n)，空间 O(n)
易错点/误区：
1. 负索引隐患：Python 中 dp[-1] 会访问列表尾部，虽然初始全为 0 巧合通过，但依赖负索引属于隐式风险，需显式加 i > 2 和 pre_idx > 1 守卫。
2. 三段式拼接：情况 2 跨越匹配成功后，必须把 pre_idx 左侧相邻的历史有效长度 dp[pre_idx-1] 接上，不能只算 dp[i-1] + 2。`},ask:"给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号 子串 的长度。",constraints:["- 0 <= s.length <= 3 * 10^4"]},{id:"1143",slug:"1143-最长公共子序列",title:"最长公共子序列",titleEn:"Longest Common Subsequence",category:"动态规划",difficulty:"中等",topic:"二维 DP (LCS)",completed:!0,leetcodeSlug:"longest-common-subsequence",leetcodeUrl:"https://leetcode.cn/problems/longest-common-subsequence/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%9C%80%E9%95%BF%E5%85%AC%E5%85%B1%E5%AD%90%E5%BA%8F%E5%88%97",acceptanceRate:67.8,solutionCount:2779,companyTagCount:68,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["动态规划","二维 DP (LCS)","字符串","最长公共子序列"],sourcePath:"hot100/15_动态规划/1143.最长公共子序列.py",lastUpdated:"2026-09-01",lastUpdatedAt:"2026-09-01T19:18:40.633Z",interviewPattern:"先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",thoughts:[`需二刷：双字符串二维动态规划模型（LCS 标准范式）
思路：
1. 定义 dp[i][j] 为 text1 前 i 个字符与 text2 前 j 个字符的最长公共子序列长度。
2. 开 (m+1) x (n+1) 维度，第 0 行/列代表空串情况，天然为 0 避免边界越界。
3. 状态转移：
- 若 text1[i-1]  text2[j-1]：当前字符匹配，dp[i][j]  dp[i-1][j-1] + 1
- 否则：当前字符不匹配，取放弃其中一个字符的最优解 dp[i][j]  max(dp[i-1][j], dp[i][j-1])
4. 最终结果汇聚在右下角 dp[m][n]。
时间复杂度：O(m * n)，双重循环遍历整个网格
空间复杂度：O(m * n)，二维 DP 数组（可空间压缩至 O(min(m, n))）
易错点/误区：
1. Python 二维数组浅拷贝：切勿使用 [[0] * n] * m，这会产生同一行的多次引用，需用列表推导式 [[0] * (n+1) for _ in range(m+1)]。
2. 状态转移来源：相等时是取左上角状态 + 1（即 dp[i-1][j-1] + 1），而非原地 + 1；不等时是上方与左方取 max。
3. 返回值类型：不要写成 return max(dp)，二维 list 的 max 会按行字典序比较返回整行列表，应返回右下角标量 dp[m][n]。`],pitfalls:[`需二刷：双字符串二维动态规划模型（LCS 标准范式）
思路：
1. 定义 dp[i][j] 为 text1 前 i 个字符与 text2 前 j 个字符的最长公共子序列长度。
2. 开 (m+1) x (n+1) 维度，第 0 行/列代表空串情况，天然为 0 避免边界越界。
3. 状态转移：
- 若 text1[i-1]  text2[j-1]：当前字符匹配，dp[i][j]  dp[i-1][j-1] + 1
- 否则：当前字符不匹配，取放弃其中一个字符的最优解 dp[i][j]  max(dp[i-1][j], dp[i][j-1])
4. 最终结果汇聚在右下角 dp[m][n]。
时间复杂度：O(m * n)，双重循环遍历整个网格
空间复杂度：O(m * n)，二维 DP 数组（可空间压缩至 O(min(m, n))）
易错点/误区：
1. Python 二维数组浅拷贝：切勿使用 [[0] * n] * m，这会产生同一行的多次引用，需用列表推导式 [[0] * (n+1) for _ in range(m+1)]。
2. 状态转移来源：相等时是取左上角状态 + 1（即 dp[i-1][j-1] + 1），而非原地 + 1；不等时是上方与左方取 max。
3. 返回值类型：不要写成 return max(dp)，二维 list 的 max 会按行字典序比较返回整行列表，应返回右下角标量 dp[m][n]。`],recallBlanks:[],solutionGuide:{idea:"围绕「二维 DP (LCS)」组织解法，先确认输入输出和边界，再选择对应模板。",interviewSteps:["先说明核心考点：二维 DP (LCS)。","先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。","关键词：动态规划 / 二维 DP (LCS) / 字符串 / 最长公共子序列。"],complexity:`需二刷：双字符串二维动态规划模型（LCS 标准范式）
思路：
1. 定义 dp[i][j] 为 text1 前 i 个字符与 text2 前 j 个字符的最长公共子序列长度。
2. 开 (m+1) x (n+1) 维度，第 0 行/列代表空串情况，天然为 0 避免边界越界。
3. 状态转移：
- 若 text1[i-1]  text2[j-1]：当前字符匹配，dp[i][j]  dp[i-1][j-1] + 1
- 否则：当前字符不匹配，取放弃其中一个字符的最优解 dp[i][j]  max(dp[i-1][j], dp[i][j-1])
4. 最终结果汇聚在右下角 dp[m][n]。
时间复杂度：O(m * n)，双重循环遍历整个网格
空间复杂度：O(m * n)，二维 DP 数组（可空间压缩至 O(min(m, n))）
易错点/误区：
1. Python 二维数组浅拷贝：切勿使用 [[0] * n] * m，这会产生同一行的多次引用，需用列表推导式 [[0] * (n+1) for _ in range(m+1)]。
2. 状态转移来源：相等时是取左上角状态 + 1（即 dp[i-1][j-1] + 1），而非原地 + 1；不等时是上方与左方取 max。
3. 返回值类型：不要写成 return max(dp)，二维 list 的 max 会按行字典序比较返回整行列表，应返回右下角标量 dp[m][n]。`,keyMistake:`需二刷：双字符串二维动态规划模型（LCS 标准范式）
思路：
1. 定义 dp[i][j] 为 text1 前 i 个字符与 text2 前 j 个字符的最长公共子序列长度。
2. 开 (m+1) x (n+1) 维度，第 0 行/列代表空串情况，天然为 0 避免边界越界。
3. 状态转移：
- 若 text1[i-1]  text2[j-1]：当前字符匹配，dp[i][j]  dp[i-1][j-1] + 1
- 否则：当前字符不匹配，取放弃其中一个字符的最优解 dp[i][j]  max(dp[i-1][j], dp[i][j-1])
4. 最终结果汇聚在右下角 dp[m][n]。
时间复杂度：O(m * n)，双重循环遍历整个网格
空间复杂度：O(m * n)，二维 DP 数组（可空间压缩至 O(min(m, n))）
易错点/误区：
1. Python 二维数组浅拷贝：切勿使用 [[0] * n] * m，这会产生同一行的多次引用，需用列表推导式 [[0] * (n+1) for _ in range(m+1)]。
2. 状态转移来源：相等时是取左上角状态 + 1（即 dp[i-1][j-1] + 1），而非原地 + 1；不等时是上方与左方取 max。
3. 返回值类型：不要写成 return max(dp)，二维 list 的 max 会按行字典序比较返回整行列表，应返回右下角标量 dp[m][n]。`},ask:"给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。"},{id:"72",slug:"72-编辑距离",title:"编辑距离",titleEn:"Edit Distance",category:"动态规划",difficulty:"困难",topic:"二维 DP (替换/删除/插入)",completed:!0,leetcodeSlug:"edit-distance",leetcodeUrl:"https://leetcode.cn/problems/edit-distance/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E7%BC%96%E8%BE%91%E8%B7%9D%E7%A6%BB",acceptanceRate:64.2,solutionCount:4251,companyTagCount:125,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["动态规划","二维 DP (替换/删除/插入)","字符串"],sourcePath:"hot100/15_动态规划/72.编辑距离.py",lastUpdated:"2026-09-01",lastUpdatedAt:"2026-09-01T19:41:36.545Z",interviewPattern:"先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",thoughts:[`需二刷：双字符串二维动态规划（编辑距离经典模型）
思路：
1. 定义 dp[i][j] 为 word1 前 i 个字符转换成 word2 前 j 个字符的最少操作数。
2. 开 (m+1) x (n+1) 数组，初始化边界：
- dp[i][0]  i（word1 长度为 i 变空串，需删除 i 次）
- dp[0][j]  j（空串变 word2 长度为 j，需插入 j 次）
3. 状态转移：
- 当 word1[i-1]  word2[j-1]：字符相同，无需额外操作，dp[i][j]  dp[i-1][j-1]
- 当 word1[i-1] ! word2[j-1]：考虑三种操作取最小值 + 1：
* 替换 word1[i-1]：dp[i-1][j-1] + 1
* 删除 word1[i-1]：dp[i-1][j] + 1
* 插入 word2[j-1]：dp[i][j-1] + 1
> dp[i][j]  min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1
4. 最终返回右下角 dp[m][n]。
时间复杂度：O(m * n)，双重循环遍历整个网格
空间复杂度：O(m * n)，二维 DP 数组（可使用滚动数组压缩至 O(min(m, n))）
易错点/误区：
1. DP 决策思路：不要试图用 if 逻辑去人为预测/特判具体执行哪种操作，DP 本质是对【替换、删除、插入】三种合法转移分支全部计算并取 min。
2. 括号优先级与加一范围：min(...) + 1 切勿写成 min(a, b, c + 1)，否则前两项未计入操作代价 1 会导致错误低值传递。
3. 边界初始化赋值：dp[i][0] 应赋值为动态的 i（删除 i 次），dp[0][j] 赋为 j（插入 j 次），不能赋固定总长度 m/n。`],pitfalls:[`需二刷：双字符串二维动态规划（编辑距离经典模型）
思路：
1. 定义 dp[i][j] 为 word1 前 i 个字符转换成 word2 前 j 个字符的最少操作数。
2. 开 (m+1) x (n+1) 数组，初始化边界：
- dp[i][0]  i（word1 长度为 i 变空串，需删除 i 次）
- dp[0][j]  j（空串变 word2 长度为 j，需插入 j 次）
3. 状态转移：
- 当 word1[i-1]  word2[j-1]：字符相同，无需额外操作，dp[i][j]  dp[i-1][j-1]
- 当 word1[i-1] ! word2[j-1]：考虑三种操作取最小值 + 1：
* 替换 word1[i-1]：dp[i-1][j-1] + 1
* 删除 word1[i-1]：dp[i-1][j] + 1
* 插入 word2[j-1]：dp[i][j-1] + 1
> dp[i][j]  min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1
4. 最终返回右下角 dp[m][n]。
时间复杂度：O(m * n)，双重循环遍历整个网格
空间复杂度：O(m * n)，二维 DP 数组（可使用滚动数组压缩至 O(min(m, n))）
易错点/误区：
1. DP 决策思路：不要试图用 if 逻辑去人为预测/特判具体执行哪种操作，DP 本质是对【替换、删除、插入】三种合法转移分支全部计算并取 min。
2. 括号优先级与加一范围：min(...) + 1 切勿写成 min(a, b, c + 1)，否则前两项未计入操作代价 1 会导致错误低值传递。
3. 边界初始化赋值：dp[i][0] 应赋值为动态的 i（删除 i 次），dp[0][j] 赋为 j（插入 j 次），不能赋固定总长度 m/n。`],recallBlanks:[],solutionGuide:{idea:"围绕「二维 DP (替换/删除/插入)」组织解法，先确认输入输出和边界，再选择对应模板。",interviewSteps:["先说明核心考点：二维 DP (替换/删除/插入)。","先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。","关键词：动态规划 / 二维 DP (替换/删除/插入) / 字符串。"],complexity:`需二刷：双字符串二维动态规划（编辑距离经典模型）
思路：
1. 定义 dp[i][j] 为 word1 前 i 个字符转换成 word2 前 j 个字符的最少操作数。
2. 开 (m+1) x (n+1) 数组，初始化边界：
- dp[i][0]  i（word1 长度为 i 变空串，需删除 i 次）
- dp[0][j]  j（空串变 word2 长度为 j，需插入 j 次）
3. 状态转移：
- 当 word1[i-1]  word2[j-1]：字符相同，无需额外操作，dp[i][j]  dp[i-1][j-1]
- 当 word1[i-1] ! word2[j-1]：考虑三种操作取最小值 + 1：
* 替换 word1[i-1]：dp[i-1][j-1] + 1
* 删除 word1[i-1]：dp[i-1][j] + 1
* 插入 word2[j-1]：dp[i][j-1] + 1
> dp[i][j]  min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1
4. 最终返回右下角 dp[m][n]。
时间复杂度：O(m * n)，双重循环遍历整个网格
空间复杂度：O(m * n)，二维 DP 数组（可使用滚动数组压缩至 O(min(m, n))）
易错点/误区：
1. DP 决策思路：不要试图用 if 逻辑去人为预测/特判具体执行哪种操作，DP 本质是对【替换、删除、插入】三种合法转移分支全部计算并取 min。
2. 括号优先级与加一范围：min(...) + 1 切勿写成 min(a, b, c + 1)，否则前两项未计入操作代价 1 会导致错误低值传递。
3. 边界初始化赋值：dp[i][0] 应赋值为动态的 i（删除 i 次），dp[0][j] 赋为 j（插入 j 次），不能赋固定总长度 m/n。`,keyMistake:`需二刷：双字符串二维动态规划（编辑距离经典模型）
思路：
1. 定义 dp[i][j] 为 word1 前 i 个字符转换成 word2 前 j 个字符的最少操作数。
2. 开 (m+1) x (n+1) 数组，初始化边界：
- dp[i][0]  i（word1 长度为 i 变空串，需删除 i 次）
- dp[0][j]  j（空串变 word2 长度为 j，需插入 j 次）
3. 状态转移：
- 当 word1[i-1]  word2[j-1]：字符相同，无需额外操作，dp[i][j]  dp[i-1][j-1]
- 当 word1[i-1] ! word2[j-1]：考虑三种操作取最小值 + 1：
* 替换 word1[i-1]：dp[i-1][j-1] + 1
* 删除 word1[i-1]：dp[i-1][j] + 1
* 插入 word2[j-1]：dp[i][j-1] + 1
> dp[i][j]  min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1
4. 最终返回右下角 dp[m][n]。
时间复杂度：O(m * n)，双重循环遍历整个网格
空间复杂度：O(m * n)，二维 DP 数组（可使用滚动数组压缩至 O(min(m, n))）
易错点/误区：
1. DP 决策思路：不要试图用 if 逻辑去人为预测/特判具体执行哪种操作，DP 本质是对【替换、删除、插入】三种合法转移分支全部计算并取 min。
2. 括号优先级与加一范围：min(...) + 1 切勿写成 min(a, b, c + 1)，否则前两项未计入操作代价 1 会导致错误低值传递。
3. 边界初始化赋值：dp[i][0] 应赋值为动态的 i（删除 i 次），dp[0][j] 赋为 j（插入 j 次），不能赋固定总长度 m/n。`},ask:"给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。",constraints:["- 0 <= word1.length, word2.length <= 500"]},{id:"647",slug:"647-回文子串",title:"回文子串",titleEn:"Palindromic Substrings",category:"动态规划",difficulty:"中等",topic:"中心扩展",completed:!0,leetcodeSlug:"palindromic-substrings",leetcodeUrl:"https://leetcode.cn/problems/palindromic-substrings/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E5%9B%9E%E6%96%87%E5%AD%90%E4%B8%B2",acceptanceRate:68.3,solutionCount:2191,companyTagCount:66,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["动态规划","中心扩展","双指针","字符串"],sourcePath:"hot100/15_动态规划/647.回文子串.py",lastUpdated:"2026-09-01",lastUpdatedAt:"2026-09-01T18:59:07.003Z",interviewPattern:"先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",thoughts:[`需二刷：中心扩展法（奇偶中心枚举与边界控制）
思路：枚举所有可能的奇数中心 (i, i) 和偶数中心 (i, i+1)，以双指针向两端扩散。
每次字符匹配成功，说明找到一个新的合法回文子串，count 计数加 1。
时间 O(n²)，空间 O(1)
易错点/误区：
1. 奇数中心起点：奇数中心应从自身 (i, i) 开始扩散（单字符也是合法回文串），
若误写为 (i-1, i+1) 会漏掉所有长度为 1 的回文子串且在 i0 时越界。
2. 右边界越界：有效下标为 0 到 n-1，while 条件必须是 right < n（或 right < n - 1），
写成 right < n 会在访问 s[right] 时触发 IndexError。
3. Python 变量作用域：嵌套函数 expand 内部直接修改外部局部变量 count 时，
必须显式声明 nonlocal count，否则会报 UnboundLocalError。`],pitfalls:[`需二刷：中心扩展法（奇偶中心枚举与边界控制）
思路：枚举所有可能的奇数中心 (i, i) 和偶数中心 (i, i+1)，以双指针向两端扩散。
每次字符匹配成功，说明找到一个新的合法回文子串，count 计数加 1。
时间 O(n²)，空间 O(1)
易错点/误区：
1. 奇数中心起点：奇数中心应从自身 (i, i) 开始扩散（单字符也是合法回文串），
若误写为 (i-1, i+1) 会漏掉所有长度为 1 的回文子串且在 i0 时越界。
2. 右边界越界：有效下标为 0 到 n-1，while 条件必须是 right < n（或 right < n - 1），
写成 right < n 会在访问 s[right] 时触发 IndexError。
3. Python 变量作用域：嵌套函数 expand 内部直接修改外部局部变量 count 时，
必须显式声明 nonlocal count，否则会报 UnboundLocalError。`],recallBlanks:[],solutionGuide:{idea:`需二刷：中心扩展法（奇偶中心枚举与边界控制）
思路：枚举所有可能的奇数中心 (i, i) 和偶数中心 (i, i+1)，以双指针向两端扩散。
每次字符匹配成功，说明找到一个新的合法回文子串，count 计数加 1。
时间 O(n²)，空间 O(1)
易错点/误区：
1. 奇数中心起点：奇数中心应从自身 (i, i) 开始扩散（单字符也是合法回文串），
若误写为 (i-1, i+1) 会漏掉所有长度为 1 的回文子串且在 i0 时越界。
2. 右边界越界：有效下标为 0 到 n-1，while 条件必须是 right < n（或 right < n - 1），
写成 right < n 会在访问 s[right] 时触发 IndexError。
3. Python 变量作用域：嵌套函数 expand 内部直接修改外部局部变量 count 时，
必须显式声明 nonlocal count，否则会报 UnboundLocalError。`,interviewSteps:["先说明核心考点：中心扩展。","先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。","关键词：动态规划 / 中心扩展 / 双指针 / 字符串。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：中心扩展法（奇偶中心枚举与边界控制）
思路：枚举所有可能的奇数中心 (i, i) 和偶数中心 (i, i+1)，以双指针向两端扩散。
每次字符匹配成功，说明找到一个新的合法回文子串，count 计数加 1。
时间 O(n²)，空间 O(1)
易错点/误区：
1. 奇数中心起点：奇数中心应从自身 (i, i) 开始扩散（单字符也是合法回文串），
若误写为 (i-1, i+1) 会漏掉所有长度为 1 的回文子串且在 i0 时越界。
2. 右边界越界：有效下标为 0 到 n-1，while 条件必须是 right < n（或 right < n - 1），
写成 right < n 会在访问 s[right] 时触发 IndexError。
3. Python 变量作用域：嵌套函数 expand 内部直接修改外部局部变量 count 时，
必须显式声明 nonlocal count，否则会报 UnboundLocalError。`},ask:"给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。",constraints:["1 <= s.length <= 1000"]},{id:"221",slug:"221-最大正方形",title:"最大正方形",titleEn:"Maximal Square",category:"动态规划",difficulty:"中等",topic:"二维 DP (木桶短板原理)",completed:!0,leetcodeSlug:"maximal-square",leetcodeUrl:"https://leetcode.cn/problems/maximal-square/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%9C%80%E5%A4%A7%E6%AD%A3%E6%96%B9%E5%BD%A2",acceptanceRate:52.1,solutionCount:2377,companyTagCount:80,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["动态规划","二维 DP (木桶短板原理)","数组","矩阵"],sourcePath:"hot100/15_动态规划/221.最大正方形.py",lastUpdated:"2026-09-01",lastUpdatedAt:"2026-09-01T19:58:08.784Z",interviewPattern:"先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。",thoughts:[`需二刷：二维网格 DP + 木桶短板原理
思路：
定义 dp[i][j] 为以 matrix[i-1][j-1] 为右下角的最大全 1 正方形的边长。
状态转移：若当前格为 '1'，则受左、上、左上三方最短木桶制约：
dp[i][j]  min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
遍历过程中用 max_side 实时维护全局最大边长，最终返回面积 max_side * max_side。
时间 O(m * n)，空间 O(m * n)（可空间压缩至 O(n)）
易错点/误区：
1. 索引映射（Off-by-one）：dp 数组开 (m+1) x (n+1) 带哨兵边界时，对应 matrix 下标应为 matrix[i-1][j-1]，误写 matrix[i][j] 导致 IndexError 越界。
2. 答案收集位置：最大正方形可能出现在矩阵中间任意位置，返回 dp[m][n] 只代表以右下角结尾的正方形，必须在循环内用 max_side 实时取全局最大。
3. 返回类型：题目求的是正方形面积而非边长，最终需返回 max_side * max_side。`],pitfalls:[`需二刷：二维网格 DP + 木桶短板原理
思路：
定义 dp[i][j] 为以 matrix[i-1][j-1] 为右下角的最大全 1 正方形的边长。
状态转移：若当前格为 '1'，则受左、上、左上三方最短木桶制约：
dp[i][j]  min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
遍历过程中用 max_side 实时维护全局最大边长，最终返回面积 max_side * max_side。
时间 O(m * n)，空间 O(m * n)（可空间压缩至 O(n)）
易错点/误区：
1. 索引映射（Off-by-one）：dp 数组开 (m+1) x (n+1) 带哨兵边界时，对应 matrix 下标应为 matrix[i-1][j-1]，误写 matrix[i][j] 导致 IndexError 越界。
2. 答案收集位置：最大正方形可能出现在矩阵中间任意位置，返回 dp[m][n] 只代表以右下角结尾的正方形，必须在循环内用 max_side 实时取全局最大。
3. 返回类型：题目求的是正方形面积而非边长，最终需返回 max_side * max_side。`],recallBlanks:[],solutionGuide:{idea:`需二刷：二维网格 DP + 木桶短板原理
思路：
定义 dp[i][j] 为以 matrix[i-1][j-1] 为右下角的最大全 1 正方形的边长。
状态转移：若当前格为 '1'，则受左、上、左上三方最短木桶制约：
dp[i][j]  min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
遍历过程中用 max_side 实时维护全局最大边长，最终返回面积 max_side * max_side。
时间 O(m * n)，空间 O(m * n)（可空间压缩至 O(n)）
易错点/误区：
1. 索引映射（Off-by-one）：dp 数组开 (m+1) x (n+1) 带哨兵边界时，对应 matrix 下标应为 matrix[i-1][j-1]，误写 matrix[i][j] 导致 IndexError 越界。
2. 答案收集位置：最大正方形可能出现在矩阵中间任意位置，返回 dp[m][n] 只代表以右下角结尾的正方形，必须在循环内用 max_side 实时取全局最大。
3. 返回类型：题目求的是正方形面积而非边长，最终需返回 max_side * max_side。`,interviewSteps:["先说明核心考点：二维 DP (木桶短板原理)。","先定义状态和选择，再写 base case；如果只依赖前几项，再考虑空间压缩。","关键词：动态规划 / 二维 DP (木桶短板原理) / 数组 / 矩阵。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：二维网格 DP + 木桶短板原理
思路：
定义 dp[i][j] 为以 matrix[i-1][j-1] 为右下角的最大全 1 正方形的边长。
状态转移：若当前格为 '1'，则受左、上、左上三方最短木桶制约：
dp[i][j]  min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
遍历过程中用 max_side 实时维护全局最大边长，最终返回面积 max_side * max_side。
时间 O(m * n)，空间 O(m * n)（可空间压缩至 O(n)）
易错点/误区：
1. 索引映射（Off-by-one）：dp 数组开 (m+1) x (n+1) 带哨兵边界时，对应 matrix 下标应为 matrix[i-1][j-1]，误写 matrix[i][j] 导致 IndexError 越界。
2. 答案收集位置：最大正方形可能出现在矩阵中间任意位置，返回 dp[m][n] 只代表以右下角结尾的正方形，必须在循环内用 max_side 实时取全局最大。
3. 返回类型：题目求的是正方形面积而非边长，最终需返回 max_side * max_side。`},ask:"在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。"},{id:"136",slug:"136-只出现一次的数字",title:"只出现一次的数字",titleEn:"Single Number",category:"技巧",difficulty:"简单",topic:"异或",completed:!0,leetcodeSlug:"single-number",leetcodeUrl:"https://leetcode.cn/problems/single-number/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E5%8F%AA%E5%87%BA%E7%8E%B0%E4%B8%80%E6%AC%A1%E7%9A%84%E6%95%B0%E5%AD%97",acceptanceRate:77,solutionCount:5713,companyTagCount:103,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["技巧","异或","位运算","数组"],sourcePath:"hot100/16_技巧/136.只出现一次的数字.py",lastUpdated:"2026-03-19",lastUpdatedAt:"2026-03-19T14:13:34.107Z",interviewPattern:"关注位运算、投票、原地交换等模板题，先写不变量再写代码。",thoughts:[`需二刷：异或(XOR)的巧妙应用
思路：利用异或的三个性质把所有数异或一遍，成对的数抵消为0，剩下的就是答案
- a ^ a  0（相同数异或为0）
- a ^ 0  a（任何数异或0为自己）
- 异或满足交换律和结合律（顺序无关）
时间 O(n)，空间 O(1)
易错点/误区：
1. for i in nums 中 i 已经是值，不要再写 nums[i]（会把值当索引用）
2. result 初始值必须是 0（因为 a ^ 0  a）
3. 不需要特判 len(nums)1，异或自然处理`],pitfalls:[`需二刷：异或(XOR)的巧妙应用
思路：利用异或的三个性质把所有数异或一遍，成对的数抵消为0，剩下的就是答案
- a ^ a  0（相同数异或为0）
- a ^ 0  a（任何数异或0为自己）
- 异或满足交换律和结合律（顺序无关）
时间 O(n)，空间 O(1)
易错点/误区：
1. for i in nums 中 i 已经是值，不要再写 nums[i]（会把值当索引用）
2. result 初始值必须是 0（因为 a ^ 0  a）
3. 不需要特判 len(nums)1，异或自然处理`],recallBlanks:[],solutionGuide:{idea:`需二刷：异或(XOR)的巧妙应用
思路：利用异或的三个性质把所有数异或一遍，成对的数抵消为0，剩下的就是答案
- a ^ a  0（相同数异或为0）
- a ^ 0  a（任何数异或0为自己）
- 异或满足交换律和结合律（顺序无关）
时间 O(n)，空间 O(1)
易错点/误区：
1. for i in nums 中 i 已经是值，不要再写 nums[i]（会把值当索引用）
2. result 初始值必须是 0（因为 a ^ 0  a）
3. 不需要特判 len(nums)1，异或自然处理`,interviewSteps:["先说明核心考点：异或。","关注位运算、投票、原地交换等模板题，先写不变量再写代码。","关键词：技巧 / 异或 / 位运算 / 数组。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：异或(XOR)的巧妙应用
思路：利用异或的三个性质把所有数异或一遍，成对的数抵消为0，剩下的就是答案
- a ^ a  0（相同数异或为0）
- a ^ 0  a（任何数异或0为自己）
- 异或满足交换律和结合律（顺序无关）
时间 O(n)，空间 O(1)
易错点/误区：
1. for i in nums 中 i 已经是值，不要再写 nums[i]（会把值当索引用）
2. result 初始值必须是 0（因为 a ^ 0  a）
3. 不需要特判 len(nums)1，异或自然处理`},ask:"给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。",constraints:["- 1 <= nums.length <= 3 * 10^4","- -3 * 10^4 <= nums[i] <= 3 * 10^4"]},{id:"169",slug:"169-多数元素",title:"多数元素",titleEn:"Majority Element",category:"技巧",difficulty:"简单",topic:"摩尔投票",completed:!0,leetcodeSlug:"majority-element",leetcodeUrl:"https://leetcode.cn/problems/majority-element/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E5%A4%9A%E6%95%B0%E5%85%83%E7%B4%A0",acceptanceRate:67.4,solutionCount:6408,companyTagCount:88,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["技巧","摩尔投票","数组","哈希表","分治","计数","排序","摩尔投票算法"],sourcePath:"hot100/16_技巧/169.多数元素.py",lastUpdated:"2026-03-19",lastUpdatedAt:"2026-03-19T14:55:19.318Z",interviewPattern:"关注位运算、投票、原地交换等模板题，先写不变量再写代码。",thoughts:[`需二刷：Boyer-Moore 投票算法
思路：多数元素出现次数 > n/2，与所有其他元素一对一抵消后一定剩余
维护候选人和票数，票数归零时换候选人，最终剩下的就是多数元素
时间 O(n)，空间 O(1)
易错点/误区：
1. 暴力法 O(n²) 会超时：双重循环统计每个元素出现次数，思路对但太慢
2. count 初始值应为 0 不是 1：内层循环会遍历到自身，已经计数了一次
3. 比较对象要清楚：i  j（元素 vs 元素），不能写成 i  nums（元素 vs 列表）
4. 换候选人的时机：vote0 的判断要放在循环开头，不能放在 else 分支里
放在 else 里会导致新候选人的初始票数为 0 而非 1，后续计票出错
5. return 不要写在 for 循环里面，否则第一次迭代就返回了`],pitfalls:[`需二刷：Boyer-Moore 投票算法
思路：多数元素出现次数 > n/2，与所有其他元素一对一抵消后一定剩余
维护候选人和票数，票数归零时换候选人，最终剩下的就是多数元素
时间 O(n)，空间 O(1)
易错点/误区：
1. 暴力法 O(n²) 会超时：双重循环统计每个元素出现次数，思路对但太慢
2. count 初始值应为 0 不是 1：内层循环会遍历到自身，已经计数了一次
3. 比较对象要清楚：i  j（元素 vs 元素），不能写成 i  nums（元素 vs 列表）
4. 换候选人的时机：vote0 的判断要放在循环开头，不能放在 else 分支里
放在 else 里会导致新候选人的初始票数为 0 而非 1，后续计票出错
5. return 不要写在 for 循环里面，否则第一次迭代就返回了`],recallBlanks:[],solutionGuide:{idea:`需二刷：Boyer-Moore 投票算法
思路：多数元素出现次数 > n/2，与所有其他元素一对一抵消后一定剩余
维护候选人和票数，票数归零时换候选人，最终剩下的就是多数元素
时间 O(n)，空间 O(1)
易错点/误区：
1. 暴力法 O(n²) 会超时：双重循环统计每个元素出现次数，思路对但太慢
2. count 初始值应为 0 不是 1：内层循环会遍历到自身，已经计数了一次
3. 比较对象要清楚：i  j（元素 vs 元素），不能写成 i  nums（元素 vs 列表）
4. 换候选人的时机：vote0 的判断要放在循环开头，不能放在 else 分支里
放在 else 里会导致新候选人的初始票数为 0 而非 1，后续计票出错
5. return 不要写在 for 循环里面，否则第一次迭代就返回了`,interviewSteps:["先说明核心考点：摩尔投票。","关注位运算、投票、原地交换等模板题，先写不变量再写代码。","关键词：技巧 / 摩尔投票 / 数组 / 哈希表。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：Boyer-Moore 投票算法
思路：多数元素出现次数 > n/2，与所有其他元素一对一抵消后一定剩余
维护候选人和票数，票数归零时换候选人，最终剩下的就是多数元素
时间 O(n)，空间 O(1)
易错点/误区：
1. 暴力法 O(n²) 会超时：双重循环统计每个元素出现次数，思路对但太慢
2. count 初始值应为 0 不是 1：内层循环会遍历到自身，已经计数了一次
3. 比较对象要清楚：i  j（元素 vs 元素），不能写成 i  nums（元素 vs 列表）
4. 换候选人的时机：vote0 的判断要放在循环开头，不能放在 else 分支里
放在 else 里会导致新候选人的初始票数为 0 而非 1，后续计票出错
5. return 不要写在 for 循环里面，否则第一次迭代就返回了`},ask:"给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。",constraints:["- 1 <= n <= 5 * 10^4","- -10^9 <= nums[i] <= 10^9"]},{id:"75",slug:"75-颜色分类",title:"颜色分类",titleEn:"Sort Colors",category:"技巧",difficulty:"中等",topic:"三指针",completed:!0,leetcodeSlug:"sort-colors",leetcodeUrl:"https://leetcode.cn/problems/sort-colors/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E9%A2%9C%E8%89%B2%E5%88%86%E7%B1%BB",acceptanceRate:63.9,solutionCount:5235,companyTagCount:84,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["技巧","三指针","数组","双指针","冒泡排序","排序","快速排序"],sourcePath:"hot100/16_技巧/75.颜色分类.py",lastUpdated:"2026-06-04",lastUpdatedAt:"2026-06-04T13:56:33.554Z",interviewPattern:"关注位运算、投票、原地交换等模板题，先写不变量再写代码。",thoughts:[`需二刷：荷兰国旗问题（三路分区），和 912 的三路快排是同一套思路
思路：用三个指针 p0 / p / p2 将数组划分为 0 / 1 / 2 三个区域，
一次遍历完成排序
时间 O(n)，空间 O(1)
类比 912：三路快排的简化版——pivot 固定为 1，不需要递归`],pitfalls:[`易错点/误区：
1. nums[p]  2 交换后 p 不能 +1，右边换来的元素还没检查
2. 循环条件是 p < p2，不是 p < p2（漏掉 p  p2 时的情况）
3. p2 初始值是 len(nums) - 1 不是 len(nums)，否则 nums[p2] 越界
4. nums[p]  0 交换后 p 可以放心 +1，
因为换过来的 nums[p0] 只可能是 1（p0 指向 1 区开头），不可能是 2`],recallBlanks:[],solutionGuide:{idea:`需二刷：荷兰国旗问题（三路分区），和 912 的三路快排是同一套思路
思路：用三个指针 p0 / p / p2 将数组划分为 0 / 1 / 2 三个区域，
一次遍历完成排序
时间 O(n)，空间 O(1)
类比 912：三路快排的简化版——pivot 固定为 1，不需要递归`,interviewSteps:["先说明核心考点：三指针。","关注位运算、投票、原地交换等模板题，先写不变量再写代码。","关键词：技巧 / 三指针 / 数组 / 双指针。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`易错点/误区：
1. nums[p]  2 交换后 p 不能 +1，右边换来的元素还没检查
2. 循环条件是 p < p2，不是 p < p2（漏掉 p  p2 时的情况）
3. p2 初始值是 len(nums) - 1 不是 len(nums)，否则 nums[p2] 越界
4. nums[p]  0 交换后 p 可以放心 +1，
因为换过来的 nums[p0] 只可能是 1（p0 指向 1 区开头），不可能是 2`},ask:"给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地 对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。",constraints:["- 1 <= n <= 300"]},{id:"287",slug:"287-寻找重复数",title:"寻找重复数",titleEn:"Find the Duplicate Number",category:"技巧",difficulty:"中等",topic:"Floyd 判圈找环入口",completed:!0,leetcodeSlug:"find-the-duplicate-number",leetcodeUrl:"https://leetcode.cn/problems/find-the-duplicate-number/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E5%AF%BB%E6%89%BE%E9%87%8D%E5%A4%8D%E6%95%B0",acceptanceRate:68,solutionCount:2976,companyTagCount:81,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["技巧","Floyd 判圈找环入口","位运算","数组","双指针","二分查找","Floyd 判圈算法","抽屉原理"],sourcePath:"hot100/16_技巧/287.寻找重复数.py",lastUpdated:"2026-08-24",lastUpdatedAt:"2026-08-24T14:04:07.738Z",interviewPattern:"关注位运算、投票、原地交换等模板题，先写不变量再写代码。",thoughts:[`需二刷：Floyd 快慢指针判圈找环入口（142 题技巧移植到数组下标跳转）
思路：定义 next(i)  nums[i]，数组变成一条隐形链表。
抽屉原理 ⇒ 必有重复值 v ⇒ v 有两条入边 ⇒ v 就是环入口。
阶段一快慢指针找到相遇点；阶段二 slow 回起点同速走，
由 F  kC − a 的数学保证：再遇处恰好是环入口。
时间 O(n)，空间 O(1)
易错点/误区：
1. 【犯过】引入独立计数器 i/j 写 slow  nums[i] 再 i + 1 ——
这是把数组从头线性读一遍，不是沿"链"跳转，直接把链剪断了。
正确做法：指针变量自己就是房间号，slow  nums[slow]。
2. 【犯过】同起点出发却用 while slow ! fast 当条件：
第一次判断 0 ! 0 即 False，循环体一次都不执行。
Python 没有 do-while，惯用替代：while True + 先动后判 + break。
3. 相遇点 ≠ 环入口！（本例相遇在 4，答案是 2），
跳过阶段二直接返回相遇点必错。
4. fast 走两步是两层嵌套 nums[nums[fast]]，不是另设计数器 j + 2。`],pitfalls:[`需二刷：Floyd 快慢指针判圈找环入口（142 题技巧移植到数组下标跳转）
思路：定义 next(i)  nums[i]，数组变成一条隐形链表。
抽屉原理 ⇒ 必有重复值 v ⇒ v 有两条入边 ⇒ v 就是环入口。
阶段一快慢指针找到相遇点；阶段二 slow 回起点同速走，
由 F  kC − a 的数学保证：再遇处恰好是环入口。
时间 O(n)，空间 O(1)
易错点/误区：
1. 【犯过】引入独立计数器 i/j 写 slow  nums[i] 再 i + 1 ——
这是把数组从头线性读一遍，不是沿"链"跳转，直接把链剪断了。
正确做法：指针变量自己就是房间号，slow  nums[slow]。
2. 【犯过】同起点出发却用 while slow ! fast 当条件：
第一次判断 0 ! 0 即 False，循环体一次都不执行。
Python 没有 do-while，惯用替代：while True + 先动后判 + break。
3. 相遇点 ≠ 环入口！（本例相遇在 4，答案是 2），
跳过阶段二直接返回相遇点必错。
4. fast 走两步是两层嵌套 nums[nums[fast]]，不是另设计数器 j + 2。`],recallBlanks:[],solutionGuide:{idea:`需二刷：Floyd 快慢指针判圈找环入口（142 题技巧移植到数组下标跳转）
思路：定义 next(i)  nums[i]，数组变成一条隐形链表。
抽屉原理 ⇒ 必有重复值 v ⇒ v 有两条入边 ⇒ v 就是环入口。
阶段一快慢指针找到相遇点；阶段二 slow 回起点同速走，
由 F  kC − a 的数学保证：再遇处恰好是环入口。
时间 O(n)，空间 O(1)
易错点/误区：
1. 【犯过】引入独立计数器 i/j 写 slow  nums[i] 再 i + 1 ——
这是把数组从头线性读一遍，不是沿"链"跳转，直接把链剪断了。
正确做法：指针变量自己就是房间号，slow  nums[slow]。
2. 【犯过】同起点出发却用 while slow ! fast 当条件：
第一次判断 0 ! 0 即 False，循环体一次都不执行。
Python 没有 do-while，惯用替代：while True + 先动后判 + break。
3. 相遇点 ≠ 环入口！（本例相遇在 4，答案是 2），
跳过阶段二直接返回相遇点必错。
4. fast 走两步是两层嵌套 nums[nums[fast]]，不是另设计数器 j + 2。`,interviewSteps:["先说明核心考点：Floyd 判圈找环入口。","关注位运算、投票、原地交换等模板题，先写不变量再写代码。","关键词：技巧 / Floyd 判圈找环入口 / 位运算 / 数组。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：Floyd 快慢指针判圈找环入口（142 题技巧移植到数组下标跳转）
思路：定义 next(i)  nums[i]，数组变成一条隐形链表。
抽屉原理 ⇒ 必有重复值 v ⇒ v 有两条入边 ⇒ v 就是环入口。
阶段一快慢指针找到相遇点；阶段二 slow 回起点同速走，
由 F  kC − a 的数学保证：再遇处恰好是环入口。
时间 O(n)，空间 O(1)
易错点/误区：
1. 【犯过】引入独立计数器 i/j 写 slow  nums[i] 再 i + 1 ——
这是把数组从头线性读一遍，不是沿"链"跳转，直接把链剪断了。
正确做法：指针变量自己就是房间号，slow  nums[slow]。
2. 【犯过】同起点出发却用 while slow ! fast 当条件：
第一次判断 0 ! 0 即 False，循环体一次都不执行。
Python 没有 do-while，惯用替代：while True + 先动后判 + break。
3. 相遇点 ≠ 环入口！（本例相遇在 4，答案是 2），
跳过阶段二直接返回相遇点必错。
4. fast 走两步是两层嵌套 nums[nums[fast]]，不是另设计数器 j + 2。`},ask:"给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。",constraints:["- 1 <= n <= 10^5","- 1 <= nums[i] <= n"]},{id:"31",slug:"31-下一个排列",title:"下一个排列",titleEn:"Next Permutation",category:"技巧",difficulty:"中等",topic:"字典序原地变换（找断点+交换+翻转后缀）",completed:!0,leetcodeSlug:"next-permutation",leetcodeUrl:"https://leetcode.cn/problems/next-permutation/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E4%B8%8B%E4%B8%80%E4%B8%AA%E6%8E%92%E5%88%97",acceptanceRate:43.2,solutionCount:4358,companyTagCount:101,paidOnly:!1,sourceBanks:["LeetCode Hot 100"],tags:["技巧","字典序原地变换（找断点+交换+翻转后缀）","数组","双指针"],sourcePath:"hot100/16_技巧/31.下一个排列.py",lastUpdated:"2026-08-24",lastUpdatedAt:"2026-08-24T14:49:30.781Z",interviewPattern:"关注位运算、投票、原地交换等模板题，先写不变量再写代码。",thoughts:[`需二刷：字典序原地变换 —— 找断点 → 交换 → 翻转后缀
思路：要的是「只变大一点点」的排列，变化一定尽可能发生在尾部。
1) 从右往左找第一个 nums[i] < nums[i+1]（趋势打破点 i）；
i 右边这段天然是【严格降序】（否则趋势会在更右边被打破）。
2) 在 i 右侧的降序段里，从右往左找第一个 > nums[i] 的 j；
交换 i 和 j：让前缀的增量最小。
3) 把 i 右侧整段翻转（降序 → 升序）；
交换后右侧仍保持降序（只是其中一个元素被替换成更小的），
翻转一次即得到该位置上最小的后缀，从而整体是下一个排列。
边界：若 i 找不到（ -1，即全降序  已是最大），
步骤 ③ 正好从 0 翻到末尾，得到最小排列  升序。
时间 O(n)（单次扫描 + swap + 单段翻转），空间 O(1)
易错点/误区：
1. 【犯过】步骤 ③ 翻转边界写成 reverse(..., j-1)：
j 只在步骤 ② 的 swap 中有用，翻转范围是 i+1 到末尾（n-1），与 j 无关；
且 i-1 时 j 从未定义，会报 UnboundLocalError。
2. 步骤 ② 比较写成 nums[j] > nums[i]（含等号）：
相等就交换不会让前缀变大，不符合「严格更大」的要求，必须是严格 >。
3. 步骤 ② 从左往右扫 j：会拿到「比 nums[i] 大的最大元素」，
前缀增量过大，必须从右往左扫拿到「比 nums[i] 大的最小元素」。
4. reverse 是嵌套函数，定义位置要在调用之前；
Python 缩进错位会导致调用时报 reverse 未定义。`],pitfalls:[`需二刷：字典序原地变换 —— 找断点 → 交换 → 翻转后缀
思路：要的是「只变大一点点」的排列，变化一定尽可能发生在尾部。
1) 从右往左找第一个 nums[i] < nums[i+1]（趋势打破点 i）；
i 右边这段天然是【严格降序】（否则趋势会在更右边被打破）。
2) 在 i 右侧的降序段里，从右往左找第一个 > nums[i] 的 j；
交换 i 和 j：让前缀的增量最小。
3) 把 i 右侧整段翻转（降序 → 升序）；
交换后右侧仍保持降序（只是其中一个元素被替换成更小的），
翻转一次即得到该位置上最小的后缀，从而整体是下一个排列。
边界：若 i 找不到（ -1，即全降序  已是最大），
步骤 ③ 正好从 0 翻到末尾，得到最小排列  升序。
时间 O(n)（单次扫描 + swap + 单段翻转），空间 O(1)
易错点/误区：
1. 【犯过】步骤 ③ 翻转边界写成 reverse(..., j-1)：
j 只在步骤 ② 的 swap 中有用，翻转范围是 i+1 到末尾（n-1），与 j 无关；
且 i-1 时 j 从未定义，会报 UnboundLocalError。
2. 步骤 ② 比较写成 nums[j] > nums[i]（含等号）：
相等就交换不会让前缀变大，不符合「严格更大」的要求，必须是严格 >。
3. 步骤 ② 从左往右扫 j：会拿到「比 nums[i] 大的最大元素」，
前缀增量过大，必须从右往左扫拿到「比 nums[i] 大的最小元素」。
4. reverse 是嵌套函数，定义位置要在调用之前；
Python 缩进错位会导致调用时报 reverse 未定义。`],recallBlanks:[],solutionGuide:{idea:`需二刷：字典序原地变换 —— 找断点 → 交换 → 翻转后缀
思路：要的是「只变大一点点」的排列，变化一定尽可能发生在尾部。
1) 从右往左找第一个 nums[i] < nums[i+1]（趋势打破点 i）；
i 右边这段天然是【严格降序】（否则趋势会在更右边被打破）。
2) 在 i 右侧的降序段里，从右往左找第一个 > nums[i] 的 j；
交换 i 和 j：让前缀的增量最小。
3) 把 i 右侧整段翻转（降序 → 升序）；
交换后右侧仍保持降序（只是其中一个元素被替换成更小的），
翻转一次即得到该位置上最小的后缀，从而整体是下一个排列。
边界：若 i 找不到（ -1，即全降序  已是最大），
步骤 ③ 正好从 0 翻到末尾，得到最小排列  升序。
时间 O(n)（单次扫描 + swap + 单段翻转），空间 O(1)
易错点/误区：
1. 【犯过】步骤 ③ 翻转边界写成 reverse(..., j-1)：
j 只在步骤 ② 的 swap 中有用，翻转范围是 i+1 到末尾（n-1），与 j 无关；
且 i-1 时 j 从未定义，会报 UnboundLocalError。
2. 步骤 ② 比较写成 nums[j] > nums[i]（含等号）：
相等就交换不会让前缀变大，不符合「严格更大」的要求，必须是严格 >。
3. 步骤 ② 从左往右扫 j：会拿到「比 nums[i] 大的最大元素」，
前缀增量过大，必须从右往左扫拿到「比 nums[i] 大的最小元素」。
4. reverse 是嵌套函数，定义位置要在调用之前；
Python 缩进错位会导致调用时报 reverse 未定义。`,interviewSteps:["先说明核心考点：字典序原地变换（找断点+交换+翻转后缀）。","关注位运算、投票、原地交换等模板题，先写不变量再写代码。","关键词：技巧 / 字典序原地变换（找断点+交换+翻转后缀） / 数组 / 双指针。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：字典序原地变换 —— 找断点 → 交换 → 翻转后缀
思路：要的是「只变大一点点」的排列，变化一定尽可能发生在尾部。
1) 从右往左找第一个 nums[i] < nums[i+1]（趋势打破点 i）；
i 右边这段天然是【严格降序】（否则趋势会在更右边被打破）。
2) 在 i 右侧的降序段里，从右往左找第一个 > nums[i] 的 j；
交换 i 和 j：让前缀的增量最小。
3) 把 i 右侧整段翻转（降序 → 升序）；
交换后右侧仍保持降序（只是其中一个元素被替换成更小的），
翻转一次即得到该位置上最小的后缀，从而整体是下一个排列。
边界：若 i 找不到（ -1，即全降序  已是最大），
步骤 ③ 正好从 0 翻到末尾，得到最小排列  升序。
时间 O(n)（单次扫描 + swap + 单段翻转），空间 O(1)
易错点/误区：
1. 【犯过】步骤 ③ 翻转边界写成 reverse(..., j-1)：
j 只在步骤 ② 的 swap 中有用，翻转范围是 i+1 到末尾（n-1），与 j 无关；
且 i-1 时 j 从未定义，会报 UnboundLocalError。
2. 步骤 ② 比较写成 nums[j] > nums[i]（含等号）：
相等就交换不会让前缀变大，不符合「严格更大」的要求，必须是严格 >。
3. 步骤 ② 从左往右扫 j：会拿到「比 nums[i] 大的最大元素」，
前缀增量过大，必须从右往左扫拿到「比 nums[i] 大的最小元素」。
4. reverse 是嵌套函数，定义位置要在调用之前；
Python 缩进错位会导致调用时报 reverse 未定义。`},ask:"整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。",constraints:["- 1 <= nums.length <= 100","- 0 <= nums[i] <= 100"]},{id:"146",slug:"146-lru-缓存",title:"LRU 缓存",titleEn:"LRU Cache",category:"Hot100 补充",difficulty:"中等",topic:"设计",completed:!0,leetcodeSlug:"lru-cache",leetcodeUrl:"https://leetcode.cn/problems/lru-cache/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=LRU%20%E7%BC%93%E5%AD%98",acceptanceRate:55.6,solutionCount:5131,companyTagCount:182,paidOnly:!1,sourceBanks:["本地补充"],tags:["Hot100 补充","设计","哈希表","链表","双向链表"],sourcePath:"hot100/07_链表/146.LRU 缓存.py",lastUpdated:"2026-09-27",lastUpdatedAt:"2026-09-27T16:32:41.601Z",interviewPattern:"先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",thoughts:[`二刷完成 (2026-09-27，牛客网手撕实战 AC)
思路：map 负责 O(1) 查找节点，双向链表维护访问顺序。
每次访问（get/set/put）将节点移到链表尾部表示"最近使用"，
缓存满时淘汰链表头部节点（最久未使用）
时间 O(1)，空间 O(capacity)
易错点/实战踩坑复盘：
1. 函数参数命名不一致导致 NameError：接口形参常为 (key, value)，内部调用易笔误写成 val 报 NameError
2. 函数调用漏写括号 () 静默失效：self.removeLeastRecently 漏了 () 会仅引用函数对象而不执行淘汰，导致容量超标
3. 辅助函数签名与调用不匹配：removefirst() 自动从 head.next 摘取节点，若定义为 def removefirst(self, x) 会在无参调用时报 missing 1 argument
4. 更新已有 key 时误调底层方法：在 Solution 中误写 self.addlast(key)，应统一调用 self.addrecently(key, value)
5. Node 必须同时存储 key 和 val：淘汰链表节点时，必须拿到 node.key 才能同步从 map 中 pop 掉条目`],pitfalls:[`二刷完成 (2026-09-27，牛客网手撕实战 AC)
思路：map 负责 O(1) 查找节点，双向链表维护访问顺序。
每次访问（get/set/put）将节点移到链表尾部表示"最近使用"，
缓存满时淘汰链表头部节点（最久未使用）
时间 O(1)，空间 O(capacity)
易错点/实战踩坑复盘：
1. 函数参数命名不一致导致 NameError：接口形参常为 (key, value)，内部调用易笔误写成 val 报 NameError
2. 函数调用漏写括号 () 静默失效：self.removeLeastRecently 漏了 () 会仅引用函数对象而不执行淘汰，导致容量超标
3. 辅助函数签名与调用不匹配：removefirst() 自动从 head.next 摘取节点，若定义为 def removefirst(self, x) 会在无参调用时报 missing 1 argument
4. 更新已有 key 时误调底层方法：在 Solution 中误写 self.addlast(key)，应统一调用 self.addrecently(key, value)
5. Node 必须同时存储 key 和 val：淘汰链表节点时，必须拿到 node.key 才能同步从 map 中 pop 掉条目`],recallBlanks:[],solutionGuide:{idea:`二刷完成 (2026-09-27，牛客网手撕实战 AC)
思路：map 负责 O(1) 查找节点，双向链表维护访问顺序。
每次访问（get/set/put）将节点移到链表尾部表示"最近使用"，
缓存满时淘汰链表头部节点（最久未使用）
时间 O(1)，空间 O(capacity)
易错点/实战踩坑复盘：
1. 函数参数命名不一致导致 NameError：接口形参常为 (key, value)，内部调用易笔误写成 val 报 NameError
2. 函数调用漏写括号 () 静默失效：self.removeLeastRecently 漏了 () 会仅引用函数对象而不执行淘汰，导致容量超标
3. 辅助函数签名与调用不匹配：removefirst() 自动从 head.next 摘取节点，若定义为 def removefirst(self, x) 会在无参调用时报 missing 1 argument
4. 更新已有 key 时误调底层方法：在 Solution 中误写 self.addlast(key)，应统一调用 self.addrecently(key, value)
5. Node 必须同时存储 key 和 val：淘汰链表节点时，必须拿到 node.key 才能同步从 map 中 pop 掉条目`,interviewSteps:["先说明核心考点：设计。","先讲清楚暴力解，再给出数据结构优化。再补充复杂度。","关键词：Hot100 补充 / 设计 / 哈希表 / 链表。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`二刷完成 (2026-09-27，牛客网手撕实战 AC)
思路：map 负责 O(1) 查找节点，双向链表维护访问顺序。
每次访问（get/set/put）将节点移到链表尾部表示"最近使用"，
缓存满时淘汰链表头部节点（最久未使用）
时间 O(1)，空间 O(capacity)
易错点/实战踩坑复盘：
1. 函数参数命名不一致导致 NameError：接口形参常为 (key, value)，内部调用易笔误写成 val 报 NameError
2. 函数调用漏写括号 () 静默失效：self.removeLeastRecently 漏了 () 会仅引用函数对象而不执行淘汰，导致容量超标
3. 辅助函数签名与调用不匹配：removefirst() 自动从 head.next 摘取节点，若定义为 def removefirst(self, x) 会在无参调用时报 missing 1 argument
4. 更新已有 key 时误调底层方法：在 Solution 中误写 self.addlast(key)，应统一调用 self.addrecently(key, value)
5. Node 必须同时存储 key 和 val：淘汰链表节点时，必须拿到 node.key 才能同步从 map 中 pop 掉条目`},ask:"请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。",constraints:["- 1 <= capacity <= 3000","- 0 <= key <= 10000","- 0 <= value <= 10^5"]},{id:"130",slug:"130-被围绕的区域",title:"被围绕的区域",titleEn:"Surrounded Regions",category:"Hot100 补充",difficulty:"中等",topic:"深度优先搜索",completed:!0,leetcodeSlug:"surrounded-regions",leetcodeUrl:"https://leetcode.cn/problems/surrounded-regions/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E8%A2%AB%E5%9B%B4%E7%BB%95%E7%9A%84%E5%8C%BA%E5%9F%9F",acceptanceRate:47.7,solutionCount:2821,companyTagCount:48,paidOnly:!1,sourceBanks:["本地补充"],tags:["Hot100 补充","深度优先搜索","广度优先搜索","并查集","数组","矩阵"],sourcePath:"hot100/130.被围绕的区域.py",lastUpdated:"2026-09-04",lastUpdatedAt:"2026-09-04T14:23:26.124Z",interviewPattern:"先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",thoughts:[`[需二刷]：并查集虚拟超级源点 (Dummy Root) 技巧
思路：
1. 逆向思考：与其找“被包围的 O”，不如找出所有与“网格边界连通的 O”（免死安全区）。
2. 引入虚拟超级源点 dummy  (-1, -1)，代表通往外界的安全区。
3. 遍历网格：
- 凡位于四条边界上的 'O'，一律与 dummy 执行 union 合并；
- 内部的 'O' 仅需向右 (0, 1) 和向下 (1, 0) 查看，若邻居也是 'O' 则执行 union。
4. 二次遍历整盘清算：
- 凡是 board[r][c]  'O' 且 find((r, c)) ! find(dummy) 的，说明未能连通边界，原地修改为 'X'。
时间复杂度：O(M * N * alpha(M * N)) ≈ O(M * N)，每个格子常数次操作
空间复杂度：O(M * N)，并查集 parent 字典空间
易错点/误区：
1. 误区：直接将不在边缘的 'O' 变 'X' 会误杀！因为内部的 'O' 可能顺着通道连接到边缘。
2. 遍历方向：内部合并只需向右和向下看两个方向，即可覆盖所有无向邻接关系，避免四方向重复判断。
3. 空矩阵守卫：进入前需进行 if not board or not board[0]: return 守卫校验，防止越界。`],pitfalls:[`[需二刷]：并查集虚拟超级源点 (Dummy Root) 技巧
思路：
1. 逆向思考：与其找“被包围的 O”，不如找出所有与“网格边界连通的 O”（免死安全区）。
2. 引入虚拟超级源点 dummy  (-1, -1)，代表通往外界的安全区。
3. 遍历网格：
- 凡位于四条边界上的 'O'，一律与 dummy 执行 union 合并；
- 内部的 'O' 仅需向右 (0, 1) 和向下 (1, 0) 查看，若邻居也是 'O' 则执行 union。
4. 二次遍历整盘清算：
- 凡是 board[r][c]  'O' 且 find((r, c)) ! find(dummy) 的，说明未能连通边界，原地修改为 'X'。
时间复杂度：O(M * N * alpha(M * N)) ≈ O(M * N)，每个格子常数次操作
空间复杂度：O(M * N)，并查集 parent 字典空间
易错点/误区：
1. 误区：直接将不在边缘的 'O' 变 'X' 会误杀！因为内部的 'O' 可能顺着通道连接到边缘。
2. 遍历方向：内部合并只需向右和向下看两个方向，即可覆盖所有无向邻接关系，避免四方向重复判断。
3. 空矩阵守卫：进入前需进行 if not board or not board[0]: return 守卫校验，防止越界。`,"阶段 1：构建连通分量，边界 'O' 归入 dummy"],recallBlanks:[],solutionGuide:{idea:"围绕「深度优先搜索」组织解法，先确认输入输出和边界，再选择对应模板。",interviewSteps:["先说明核心考点：深度优先搜索。","先讲清楚暴力解，再给出数据结构优化。再补充复杂度。","关键词：Hot100 补充 / 深度优先搜索 / 广度优先搜索 / 并查集。"],complexity:`[需二刷]：并查集虚拟超级源点 (Dummy Root) 技巧
思路：
1. 逆向思考：与其找“被包围的 O”，不如找出所有与“网格边界连通的 O”（免死安全区）。
2. 引入虚拟超级源点 dummy  (-1, -1)，代表通往外界的安全区。
3. 遍历网格：
- 凡位于四条边界上的 'O'，一律与 dummy 执行 union 合并；
- 内部的 'O' 仅需向右 (0, 1) 和向下 (1, 0) 查看，若邻居也是 'O' 则执行 union。
4. 二次遍历整盘清算：
- 凡是 board[r][c]  'O' 且 find((r, c)) ! find(dummy) 的，说明未能连通边界，原地修改为 'X'。
时间复杂度：O(M * N * alpha(M * N)) ≈ O(M * N)，每个格子常数次操作
空间复杂度：O(M * N)，并查集 parent 字典空间
易错点/误区：
1. 误区：直接将不在边缘的 'O' 变 'X' 会误杀！因为内部的 'O' 可能顺着通道连接到边缘。
2. 遍历方向：内部合并只需向右和向下看两个方向，即可覆盖所有无向邻接关系，避免四方向重复判断。
3. 空矩阵守卫：进入前需进行 if not board or not board[0]: return 守卫校验，防止越界。`,keyMistake:`[需二刷]：并查集虚拟超级源点 (Dummy Root) 技巧
思路：
1. 逆向思考：与其找“被包围的 O”，不如找出所有与“网格边界连通的 O”（免死安全区）。
2. 引入虚拟超级源点 dummy  (-1, -1)，代表通往外界的安全区。
3. 遍历网格：
- 凡位于四条边界上的 'O'，一律与 dummy 执行 union 合并；
- 内部的 'O' 仅需向右 (0, 1) 和向下 (1, 0) 查看，若邻居也是 'O' 则执行 union。
4. 二次遍历整盘清算：
- 凡是 board[r][c]  'O' 且 find((r, c)) ! find(dummy) 的，说明未能连通边界，原地修改为 'X'。
时间复杂度：O(M * N * alpha(M * N)) ≈ O(M * N)，每个格子常数次操作
空间复杂度：O(M * N)，并查集 parent 字典空间
易错点/误区：
1. 误区：直接将不在边缘的 'O' 变 'X' 会误杀！因为内部的 'O' 可能顺着通道连接到边缘。
2. 遍历方向：内部合并只需向右和向下看两个方向，即可覆盖所有无向邻接关系，避免四方向重复判断。
3. 空矩阵守卫：进入前需进行 if not board or not board[0]: return 守卫校验，防止越界。`},ask:"给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' 组成，捕获 所有 被围绕的区域：",constraints:["1 <= m, n <= 200"]},{id:"1514",slug:"1514-概率最大的路径",title:"概率最大的路径",titleEn:"Path with Maximum Probability",category:"Hot100 补充",difficulty:"中等",topic:"图",completed:!0,leetcodeSlug:"path-with-maximum-probability",leetcodeUrl:"https://leetcode.cn/problems/path-with-maximum-probability/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%A6%82%E7%8E%87%E6%9C%80%E5%A4%A7%E7%9A%84%E8%B7%AF%E5%BE%84",acceptanceRate:44.7,solutionCount:334,companyTagCount:13,paidOnly:!1,sourceBanks:["本地补充"],tags:["Hot100 补充","图","数组","最短路","Dijkstra 算法","堆（优先队列）"],sourcePath:"hot100/1514.概率最大的路径.py",lastUpdated:"2026-09-05",lastUpdatedAt:"2026-09-05T18:25:27.743Z",interviewPattern:"先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",thoughts:[`[需二刷]：乘积最大路径（Dijkstra 堆优化变体 / 大顶堆）
思路：
1. 本质是单源最长/最大路径问题，由于边权 p ∈ [0, 1]，路径概率乘积单调不增，满足 Dijkstra 贪心选择性质（类似于求和最短路）。
2. 建无向加权图 graph[u]  [(v, p), ...]。
3. 维护概率数组 prob，初始化为 0.0，起点 prob[start_node]  1.0。
4. 利用最大堆（Python 中存储负概率 -p 实现大顶堆）每次弹出当前未确认节点中概率最大的节点。
5. 出堆时若当前节点即为 end_node，直接返回对应概率（贪心最优保证）；若 cur_p < prob[u]，说明是过期历史状态，跳过剪枝。
6. 遍历邻居松弛：new_p  cur_p * p，若 new_p > prob[v]，更新 prob[v] 并入堆。
时间复杂度：O(E log E) 或 O(E log V)，其中 E 为边数，V 为顶点数 n，堆操作耗时。
空间复杂度：O(V + E)，邻接表图、prob 数组以及优先队列的存储开销。
易错点/误区：
1. 为什么这道「最长路径」可以用 Dijkstra？普通图中求最长路径是 NP-hard 且存在正环；但本题中所有边权 p ∈ [0, 1]，乘法会使概率单调递减（或保持不变），不存在无限放大的正环，满足贪心性质。
2. Python 默认是小顶堆，需要存入负值 -p 来模拟大顶堆。
3. 终止条件优化：只要 end_node 第一次出堆，其概率即为全局最大，可直接 return 提前退出。
4. 浮点精度：乘法直接累乘，但在极长路径中如果发生下溢，一般可通过转 log（将乘法转加法求最短路）避免精度丢失（本题精度要求 1e-5，直接浮点乘积足够通过）。`],pitfalls:[`[需二刷]：乘积最大路径（Dijkstra 堆优化变体 / 大顶堆）
思路：
1. 本质是单源最长/最大路径问题，由于边权 p ∈ [0, 1]，路径概率乘积单调不增，满足 Dijkstra 贪心选择性质（类似于求和最短路）。
2. 建无向加权图 graph[u]  [(v, p), ...]。
3. 维护概率数组 prob，初始化为 0.0，起点 prob[start_node]  1.0。
4. 利用最大堆（Python 中存储负概率 -p 实现大顶堆）每次弹出当前未确认节点中概率最大的节点。
5. 出堆时若当前节点即为 end_node，直接返回对应概率（贪心最优保证）；若 cur_p < prob[u]，说明是过期历史状态，跳过剪枝。
6. 遍历邻居松弛：new_p  cur_p * p，若 new_p > prob[v]，更新 prob[v] 并入堆。
时间复杂度：O(E log E) 或 O(E log V)，其中 E 为边数，V 为顶点数 n，堆操作耗时。
空间复杂度：O(V + E)，邻接表图、prob 数组以及优先队列的存储开销。
易错点/误区：
1. 为什么这道「最长路径」可以用 Dijkstra？普通图中求最长路径是 NP-hard 且存在正环；但本题中所有边权 p ∈ [0, 1]，乘法会使概率单调递减（或保持不变），不存在无限放大的正环，满足贪心性质。
2. Python 默认是小顶堆，需要存入负值 -p 来模拟大顶堆。
3. 终止条件优化：只要 end_node 第一次出堆，其概率即为全局最大，可直接 return 提前退出。
4. 浮点精度：乘法直接累乘，但在极长路径中如果发生下溢，一般可通过转 log（将乘法转加法求最短路）避免精度丢失（本题精度要求 1e-5，直接浮点乘积足够通过）。`],recallBlanks:[],solutionGuide:{idea:"围绕「图」组织解法，先确认输入输出和边界，再选择对应模板。",interviewSteps:["先说明核心考点：图。","先讲清楚暴力解，再给出数据结构优化。再补充复杂度。","关键词：Hot100 补充 / 图 / 数组 / 最短路。"],complexity:`[需二刷]：乘积最大路径（Dijkstra 堆优化变体 / 大顶堆）
思路：
1. 本质是单源最长/最大路径问题，由于边权 p ∈ [0, 1]，路径概率乘积单调不增，满足 Dijkstra 贪心选择性质（类似于求和最短路）。
2. 建无向加权图 graph[u]  [(v, p), ...]。
3. 维护概率数组 prob，初始化为 0.0，起点 prob[start_node]  1.0。
4. 利用最大堆（Python 中存储负概率 -p 实现大顶堆）每次弹出当前未确认节点中概率最大的节点。
5. 出堆时若当前节点即为 end_node，直接返回对应概率（贪心最优保证）；若 cur_p < prob[u]，说明是过期历史状态，跳过剪枝。
6. 遍历邻居松弛：new_p  cur_p * p，若 new_p > prob[v]，更新 prob[v] 并入堆。
时间复杂度：O(E log E) 或 O(E log V)，其中 E 为边数，V 为顶点数 n，堆操作耗时。
空间复杂度：O(V + E)，邻接表图、prob 数组以及优先队列的存储开销。
易错点/误区：
1. 为什么这道「最长路径」可以用 Dijkstra？普通图中求最长路径是 NP-hard 且存在正环；但本题中所有边权 p ∈ [0, 1]，乘法会使概率单调递减（或保持不变），不存在无限放大的正环，满足贪心性质。
2. Python 默认是小顶堆，需要存入负值 -p 来模拟大顶堆。
3. 终止条件优化：只要 end_node 第一次出堆，其概率即为全局最大，可直接 return 提前退出。
4. 浮点精度：乘法直接累乘，但在极长路径中如果发生下溢，一般可通过转 log（将乘法转加法求最短路）避免精度丢失（本题精度要求 1e-5，直接浮点乘积足够通过）。`,keyMistake:`[需二刷]：乘积最大路径（Dijkstra 堆优化变体 / 大顶堆）
思路：
1. 本质是单源最长/最大路径问题，由于边权 p ∈ [0, 1]，路径概率乘积单调不增，满足 Dijkstra 贪心选择性质（类似于求和最短路）。
2. 建无向加权图 graph[u]  [(v, p), ...]。
3. 维护概率数组 prob，初始化为 0.0，起点 prob[start_node]  1.0。
4. 利用最大堆（Python 中存储负概率 -p 实现大顶堆）每次弹出当前未确认节点中概率最大的节点。
5. 出堆时若当前节点即为 end_node，直接返回对应概率（贪心最优保证）；若 cur_p < prob[u]，说明是过期历史状态，跳过剪枝。
6. 遍历邻居松弛：new_p  cur_p * p，若 new_p > prob[v]，更新 prob[v] 并入堆。
时间复杂度：O(E log E) 或 O(E log V)，其中 E 为边数，V 为顶点数 n，堆操作耗时。
空间复杂度：O(V + E)，邻接表图、prob 数组以及优先队列的存储开销。
易错点/误区：
1. 为什么这道「最长路径」可以用 Dijkstra？普通图中求最长路径是 NP-hard 且存在正环；但本题中所有边权 p ∈ [0, 1]，乘法会使概率单调递减（或保持不变），不存在无限放大的正环，满足贪心性质。
2. Python 默认是小顶堆，需要存入负值 -p 来模拟大顶堆。
3. 终止条件优化：只要 end_node 第一次出堆，其概率即为全局最大，可直接 return 提前退出。
4. 浮点精度：乘法直接累乘，但在极长路径中如果发生下溢，一般可通过转 log（将乘法转加法求最短路）避免精度丢失（本题精度要求 1e-5，直接浮点乘积足够通过）。`},ask:"给你一个由 n 个节点（下标从 0 开始）组成的无向加权图，该图由一个描述边的列表组成，其中 edges[i] = [a, b] 表示连接节点 a 和 b 的一条无向边，且该边遍历成功的概率为 succProb[i] 。",constraints:["2 <= n <= 10^4","0 <= start, end < n","0 <= a, b < n","0 <= succProb.length == edges.length <= 2*10^4","0 <= succProb[i] <= 1"]},{id:"460",slug:"460-lfu-缓存",title:"LFU 缓存",titleEn:"LFU Cache",category:"Hot100 补充",difficulty:"困难",topic:"设计",completed:!0,leetcodeSlug:"lfu-cache",leetcodeUrl:"https://leetcode.cn/problems/lfu-cache/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=LFU%20%E7%BC%93%E5%AD%98",acceptanceRate:49.5,solutionCount:856,companyTagCount:71,paidOnly:!1,sourceBanks:["本地补充"],tags:["Hot100 补充","设计","哈希表","链表","双向链表"],sourcePath:"hot100/460.LFU 缓存.py",lastUpdated:"2026-09-27",lastUpdatedAt:"2026-09-27T17:04:49.632Z",interviewPattern:"先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",thoughts:["核心考点：设计","先整理输入输出和边界，再选择合适的数据结构。"],pitfalls:["本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"],recallBlanks:[],solutionGuide:{idea:"核心考点：设计",interviewSteps:["先说明核心考点：设计。","先讲清楚暴力解，再给出数据结构优化。再补充复杂度。","关键词：Hot100 补充 / 设计 / 哈希表 / 链表。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:"本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"}},{id:"547",slug:"547-省份数量",title:"省份数量",titleEn:"Number of Provinces",category:"Hot100 补充",difficulty:"中等",topic:"深度优先搜索",completed:!0,leetcodeSlug:"number-of-provinces",leetcodeUrl:"https://leetcode.cn/problems/number-of-provinces/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E7%9C%81%E4%BB%BD%E6%95%B0%E9%87%8F",acceptanceRate:62.9,solutionCount:2302,companyTagCount:62,paidOnly:!1,sourceBanks:["本地补充"],tags:["Hot100 补充","深度优先搜索","广度优先搜索","并查集","图"],sourcePath:"hot100/547.省份数量.py",lastUpdated:"2026-09-04",lastUpdatedAt:"2026-09-04T12:23:58.607Z",interviewPattern:"先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",thoughts:[`[需二刷]：并查集 (Union-Find) 入门与连通分量计数母题
思路：
1. 封装符合单一职责原则 (SRP) 的并查集类 UnionFind。
2. 初始时每个城市为一个独立连通分量，parent[i]  i，连通分量数 count  n。
3. 遍历邻接矩阵的上三角部分 (j > i)，若 isConnected[i][j]  1 则执行 union(i, j)。
4. union 操作中通过 find 查找根节点，若根不同则合并并将 count 减 1。
5. find 操作中采用路径压缩，使后续查找摊还时间接近 O(1)。
时间复杂度：O(n^2 * alpha(n)) ≈ O(n^2)，遍历上三角 n*(n-1)/2 次
空间复杂度：O(n)，并查集 parent 数组及递归栈
易错点/误区：
1. 列表初始化：必须使用 list(range(n))，不能使用不可变的 range(n)。
2. 根节点合并：合并时必须是 parent[root_x]  root_y，而非直接修改当前节点 parent[x]  y。
3. DFS 写法误区：dfs(i) 内部若再次写 for i in range(n) 会覆盖形参并导致 RecursionError。
4. 无向图对称性：只遍历上三角 j in range(i+1, n) 即可避免自身冗余合并与重复计算。`,"解法一：并查集法（推荐，可动态加边）",`解法二：DFS 染色遍历（备选）
n  len(isConnected)
visited  set()
province  0
def dfs(i: int):
visited.add(i)
for j in range(n):
if isConnected[i][j]  1 and j not in visited:
dfs(j)
for i in range(n):
if i not in visited:
dfs(i)
province + 1
return province`],pitfalls:[`[需二刷]：并查集 (Union-Find) 入门与连通分量计数母题
思路：
1. 封装符合单一职责原则 (SRP) 的并查集类 UnionFind。
2. 初始时每个城市为一个独立连通分量，parent[i]  i，连通分量数 count  n。
3. 遍历邻接矩阵的上三角部分 (j > i)，若 isConnected[i][j]  1 则执行 union(i, j)。
4. union 操作中通过 find 查找根节点，若根不同则合并并将 count 减 1。
5. find 操作中采用路径压缩，使后续查找摊还时间接近 O(1)。
时间复杂度：O(n^2 * alpha(n)) ≈ O(n^2)，遍历上三角 n*(n-1)/2 次
空间复杂度：O(n)，并查集 parent 数组及递归栈
易错点/误区：
1. 列表初始化：必须使用 list(range(n))，不能使用不可变的 range(n)。
2. 根节点合并：合并时必须是 parent[root_x]  root_y，而非直接修改当前节点 parent[x]  y。
3. DFS 写法误区：dfs(i) 内部若再次写 for i in range(n) 会覆盖形参并导致 RecursionError。
4. 无向图对称性：只遍历上三角 j in range(i+1, n) 即可避免自身冗余合并与重复计算。`],recallBlanks:[{prompt:"解法一：＿＿＿法（推荐，可动态加边）",answer:"并查集"}],solutionGuide:{idea:"解法一：并查集法（推荐，可动态加边）",interviewSteps:["先说明核心考点：深度优先搜索。","先讲清楚暴力解，再给出数据结构优化。再补充复杂度。","关键词：Hot100 补充 / 深度优先搜索 / 广度优先搜索 / 并查集。"],complexity:`[需二刷]：并查集 (Union-Find) 入门与连通分量计数母题
思路：
1. 封装符合单一职责原则 (SRP) 的并查集类 UnionFind。
2. 初始时每个城市为一个独立连通分量，parent[i]  i，连通分量数 count  n。
3. 遍历邻接矩阵的上三角部分 (j > i)，若 isConnected[i][j]  1 则执行 union(i, j)。
4. union 操作中通过 find 查找根节点，若根不同则合并并将 count 减 1。
5. find 操作中采用路径压缩，使后续查找摊还时间接近 O(1)。
时间复杂度：O(n^2 * alpha(n)) ≈ O(n^2)，遍历上三角 n*(n-1)/2 次
空间复杂度：O(n)，并查集 parent 数组及递归栈
易错点/误区：
1. 列表初始化：必须使用 list(range(n))，不能使用不可变的 range(n)。
2. 根节点合并：合并时必须是 parent[root_x]  root_y，而非直接修改当前节点 parent[x]  y。
3. DFS 写法误区：dfs(i) 内部若再次写 for i in range(n) 会覆盖形参并导致 RecursionError。
4. 无向图对称性：只遍历上三角 j in range(i+1, n) 即可避免自身冗余合并与重复计算。`,keyMistake:`[需二刷]：并查集 (Union-Find) 入门与连通分量计数母题
思路：
1. 封装符合单一职责原则 (SRP) 的并查集类 UnionFind。
2. 初始时每个城市为一个独立连通分量，parent[i]  i，连通分量数 count  n。
3. 遍历邻接矩阵的上三角部分 (j > i)，若 isConnected[i][j]  1 则执行 union(i, j)。
4. union 操作中通过 find 查找根节点，若根不同则合并并将 count 减 1。
5. find 操作中采用路径压缩，使后续查找摊还时间接近 O(1)。
时间复杂度：O(n^2 * alpha(n)) ≈ O(n^2)，遍历上三角 n*(n-1)/2 次
空间复杂度：O(n)，并查集 parent 数组及递归栈
易错点/误区：
1. 列表初始化：必须使用 list(range(n))，不能使用不可变的 range(n)。
2. 根节点合并：合并时必须是 parent[root_x]  root_y，而非直接修改当前节点 parent[x]  y。
3. DFS 写法误区：dfs(i) 内部若再次写 for i in range(n) 会覆盖形参并导致 RecursionError。
4. 无向图对称性：只遍历上三角 j in range(i+1, n) 即可避免自身冗余合并与重复计算。`},ask:"有 n 个城市，其中一些彼此相连，另一些没有相连。如果城市 a 与城市 b 直接相连，且城市 b 与城市 c 直接相连，那么城市 a 与城市 c 间接相连。"},{id:"684",slug:"684-冗余连接",title:"冗余连接",titleEn:"Redundant Connection",category:"Hot100 补充",difficulty:"中等",topic:"深度优先搜索",completed:!0,leetcodeSlug:"redundant-connection",leetcodeUrl:"https://leetcode.cn/problems/redundant-connection/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E5%86%97%E4%BD%99%E8%BF%9E%E6%8E%A5",acceptanceRate:68.8,solutionCount:1227,companyTagCount:19,paidOnly:!1,sourceBanks:["本地补充"],tags:["Hot100 补充","深度优先搜索","广度优先搜索","并查集","图"],sourcePath:"hot100/684.冗余连接.py",lastUpdated:"2026-09-04",lastUpdatedAt:"2026-09-04T12:24:09.082Z",interviewPattern:"先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",thoughts:[`[需二刷]：并查集无向图成环检测经典模型
思路：
1. 树是连通且无环的无向图，n 个节点必须恰好有 n-1 条边。输入给了 n 条边，必然存在一条冗余边使图成环。
2. 初始化大小为 n + 1 的并查集（节点编号从 1 到 n）。
3. 顺序遍历每条边 [u, v]，调用 find 检查两顶点的根节点：
- 若 find(u)  find(v)：说明 u 和 v 在此之前已相互连通，当前边导致了环的闭合，直接作为冗余边返回。
- 若 find(u) ! find(v)：说明连接了两个原本独立的连通块，调用 union(u, v) 正常合并。
时间复杂度：O(n * alpha(n)) ≈ O(n)，其中 n 为边数/节点数
空间复杂度：O(n)，并查集 parent 数组空间
易错点/误区：
1. 编号边界：节点编号为 1 到 n，parent 数组必须开 n + 1，写 n 会触发 IndexError。
2. 方法调用语法：调用 find(self.parent[x]) 必须使用圆括号，误用方括号 find[...] 会报 'method' object is not subscriptable。
3. 变量名混淆：合并时是修改父指针 parent[root_x]  root_y，误写为 find[root_x]  root_y 会报错。
4. 返回顺序：题目要求返回最后导致成环的边，顺序遍历时碰到的第一个成环边即为所求（因为后续边还没加入）。`],pitfalls:[`[需二刷]：并查集无向图成环检测经典模型
思路：
1. 树是连通且无环的无向图，n 个节点必须恰好有 n-1 条边。输入给了 n 条边，必然存在一条冗余边使图成环。
2. 初始化大小为 n + 1 的并查集（节点编号从 1 到 n）。
3. 顺序遍历每条边 [u, v]，调用 find 检查两顶点的根节点：
- 若 find(u)  find(v)：说明 u 和 v 在此之前已相互连通，当前边导致了环的闭合，直接作为冗余边返回。
- 若 find(u) ! find(v)：说明连接了两个原本独立的连通块，调用 union(u, v) 正常合并。
时间复杂度：O(n * alpha(n)) ≈ O(n)，其中 n 为边数/节点数
空间复杂度：O(n)，并查集 parent 数组空间
易错点/误区：
1. 编号边界：节点编号为 1 到 n，parent 数组必须开 n + 1，写 n 会触发 IndexError。
2. 方法调用语法：调用 find(self.parent[x]) 必须使用圆括号，误用方括号 find[...] 会报 'method' object is not subscriptable。
3. 变量名混淆：合并时是修改父指针 parent[root_x]  root_y，误写为 find[root_x]  root_y 会报错。
4. 返回顺序：题目要求返回最后导致成环的边，顺序遍历时碰到的第一个成环边即为所求（因为后续边还没加入）。`],recallBlanks:[],solutionGuide:{idea:"围绕「深度优先搜索」组织解法，先确认输入输出和边界，再选择对应模板。",interviewSteps:["先说明核心考点：深度优先搜索。","先讲清楚暴力解，再给出数据结构优化。再补充复杂度。","关键词：Hot100 补充 / 深度优先搜索 / 广度优先搜索 / 并查集。"],complexity:`[需二刷]：并查集无向图成环检测经典模型
思路：
1. 树是连通且无环的无向图，n 个节点必须恰好有 n-1 条边。输入给了 n 条边，必然存在一条冗余边使图成环。
2. 初始化大小为 n + 1 的并查集（节点编号从 1 到 n）。
3. 顺序遍历每条边 [u, v]，调用 find 检查两顶点的根节点：
- 若 find(u)  find(v)：说明 u 和 v 在此之前已相互连通，当前边导致了环的闭合，直接作为冗余边返回。
- 若 find(u) ! find(v)：说明连接了两个原本独立的连通块，调用 union(u, v) 正常合并。
时间复杂度：O(n * alpha(n)) ≈ O(n)，其中 n 为边数/节点数
空间复杂度：O(n)，并查集 parent 数组空间
易错点/误区：
1. 编号边界：节点编号为 1 到 n，parent 数组必须开 n + 1，写 n 会触发 IndexError。
2. 方法调用语法：调用 find(self.parent[x]) 必须使用圆括号，误用方括号 find[...] 会报 'method' object is not subscriptable。
3. 变量名混淆：合并时是修改父指针 parent[root_x]  root_y，误写为 find[root_x]  root_y 会报错。
4. 返回顺序：题目要求返回最后导致成环的边，顺序遍历时碰到的第一个成环边即为所求（因为后续边还没加入）。`,keyMistake:`[需二刷]：并查集无向图成环检测经典模型
思路：
1. 树是连通且无环的无向图，n 个节点必须恰好有 n-1 条边。输入给了 n 条边，必然存在一条冗余边使图成环。
2. 初始化大小为 n + 1 的并查集（节点编号从 1 到 n）。
3. 顺序遍历每条边 [u, v]，调用 find 检查两顶点的根节点：
- 若 find(u)  find(v)：说明 u 和 v 在此之前已相互连通，当前边导致了环的闭合，直接作为冗余边返回。
- 若 find(u) ! find(v)：说明连接了两个原本独立的连通块，调用 union(u, v) 正常合并。
时间复杂度：O(n * alpha(n)) ≈ O(n)，其中 n 为边数/节点数
空间复杂度：O(n)，并查集 parent 数组空间
易错点/误区：
1. 编号边界：节点编号为 1 到 n，parent 数组必须开 n + 1，写 n 会触发 IndexError。
2. 方法调用语法：调用 find(self.parent[x]) 必须使用圆括号，误用方括号 find[...] 会报 'method' object is not subscriptable。
3. 变量名混淆：合并时是修改父指针 parent[root_x]  root_y，误写为 find[root_x]  root_y 会报错。
4. 返回顺序：题目要求返回最后导致成环的边，顺序遍历时碰到的第一个成环边即为所求（因为后续边还没加入）。`},ask:"树可以看成是一个连通且 无环 的 无向 图。",constraints:["3 <= n <= 1000","1 <= ai < bi <= edges.length"]},{id:"743",slug:"743-网络延迟时间",title:"网络延迟时间",titleEn:"Network Delay Time",category:"Hot100 补充",difficulty:"中等",topic:"深度优先搜索",completed:!0,leetcodeSlug:"network-delay-time",leetcodeUrl:"https://leetcode.cn/problems/network-delay-time/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E7%BD%91%E7%BB%9C%E5%BB%B6%E8%BF%9F%E6%97%B6%E9%97%B4",acceptanceRate:59.6,solutionCount:1205,companyTagCount:24,paidOnly:!1,sourceBanks:["本地补充"],tags:["Hot100 补充","深度优先搜索","广度优先搜索","图","最短路","Dijkstra 算法","堆（优先队列）"],sourcePath:"hot100/743.网络延迟时间.py",lastUpdated:"2026-09-04",lastUpdatedAt:"2026-09-04T12:23:48.909Z",interviewPattern:"先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",thoughts:[`[需二刷]：单源最短路径 Dijkstra 堆优化算法母题
思路：
1. 邻接表建图存储有向加权边 graph[u]  [(v, w), ...]
2. 维护距离数组 distance，初始全为无穷大，起点 distance[k]  0
3. 最小堆 pq 维护 (当前到达耗时 d, 当前节点 u)，利用贪心思想每次探索耗时最短的节点
4. 出堆时若 d > distance[u] 则剪枝跳过，否则遍历邻居松弛距离并入堆
5. 最终最大延迟时间为 max(distance[1:])，若存在 inf 说明存在不可达节点返回 -1
时间复杂度：O(E log E) / O(E log V)，其中 E 为边数，V 为节点数
空间复杂度：O(V + E)，邻接表和堆及距离数组所需空间
易错点/误区：
1. 节点编号从 1 到 n，开数组需开 n + 1，最后求最值必须切片 distance[1:]，若直接 max(distance) 会将 distance[0] 的 inf 误计入。
2. heappush 时必须将耗时作为元组第一个元素 (d, u)，利用 Python 堆元组首项比对特性。
3. 忘记过期剪枝 if d > distance[u]: continue 会导致冗余松弛和超时。`,"2. 初始化距离数组与最小堆","3. Dijkstra 核心循环"],pitfalls:[`[需二刷]：单源最短路径 Dijkstra 堆优化算法母题
思路：
1. 邻接表建图存储有向加权边 graph[u]  [(v, w), ...]
2. 维护距离数组 distance，初始全为无穷大，起点 distance[k]  0
3. 最小堆 pq 维护 (当前到达耗时 d, 当前节点 u)，利用贪心思想每次探索耗时最短的节点
4. 出堆时若 d > distance[u] 则剪枝跳过，否则遍历邻居松弛距离并入堆
5. 最终最大延迟时间为 max(distance[1:])，若存在 inf 说明存在不可达节点返回 -1
时间复杂度：O(E log E) / O(E log V)，其中 E 为边数，V 为节点数
空间复杂度：O(V + E)，邻接表和堆及距离数组所需空间
易错点/误区：
1. 节点编号从 1 到 n，开数组需开 n + 1，最后求最值必须切片 distance[1:]，若直接 max(distance) 会将 distance[0] 的 inf 误计入。
2. heappush 时必须将耗时作为元组第一个元素 (d, u)，利用 Python 堆元组首项比对特性。
3. 忘记过期剪枝 if d > distance[u]: continue 会导致冗余松弛和超时。`],recallBlanks:[{prompt:"2. 初始化距离数组与最小＿＿＿",answer:"堆"},{prompt:"3. ＿＿＿ 核心循环",answer:"Dijkstra"}],solutionGuide:{idea:"2. 初始化距离数组与最小堆",interviewSteps:["先说明核心考点：深度优先搜索。","先讲清楚暴力解，再给出数据结构优化。再补充复杂度。","关键词：Hot100 补充 / 深度优先搜索 / 广度优先搜索 / 图。"],complexity:`[需二刷]：单源最短路径 Dijkstra 堆优化算法母题
思路：
1. 邻接表建图存储有向加权边 graph[u]  [(v, w), ...]
2. 维护距离数组 distance，初始全为无穷大，起点 distance[k]  0
3. 最小堆 pq 维护 (当前到达耗时 d, 当前节点 u)，利用贪心思想每次探索耗时最短的节点
4. 出堆时若 d > distance[u] 则剪枝跳过，否则遍历邻居松弛距离并入堆
5. 最终最大延迟时间为 max(distance[1:])，若存在 inf 说明存在不可达节点返回 -1
时间复杂度：O(E log E) / O(E log V)，其中 E 为边数，V 为节点数
空间复杂度：O(V + E)，邻接表和堆及距离数组所需空间
易错点/误区：
1. 节点编号从 1 到 n，开数组需开 n + 1，最后求最值必须切片 distance[1:]，若直接 max(distance) 会将 distance[0] 的 inf 误计入。
2. heappush 时必须将耗时作为元组第一个元素 (d, u)，利用 Python 堆元组首项比对特性。
3. 忘记过期剪枝 if d > distance[u]: continue 会导致冗余松弛和超时。`,keyMistake:`[需二刷]：单源最短路径 Dijkstra 堆优化算法母题
思路：
1. 邻接表建图存储有向加权边 graph[u]  [(v, w), ...]
2. 维护距离数组 distance，初始全为无穷大，起点 distance[k]  0
3. 最小堆 pq 维护 (当前到达耗时 d, 当前节点 u)，利用贪心思想每次探索耗时最短的节点
4. 出堆时若 d > distance[u] 则剪枝跳过，否则遍历邻居松弛距离并入堆
5. 最终最大延迟时间为 max(distance[1:])，若存在 inf 说明存在不可达节点返回 -1
时间复杂度：O(E log E) / O(E log V)，其中 E 为边数，V 为节点数
空间复杂度：O(V + E)，邻接表和堆及距离数组所需空间
易错点/误区：
1. 节点编号从 1 到 n，开数组需开 n + 1，最后求最值必须切片 distance[1:]，若直接 max(distance) 会将 distance[0] 的 inf 误计入。
2. heappush 时必须将耗时作为元组第一个元素 (d, u)，利用 Python 堆元组首项比对特性。
3. 忘记过期剪枝 if d > distance[u]: continue 会导致冗余松弛和超时。`},ask:"有 n 个网络节点，标记为 1 到 n。",constraints:["1 <= k <= n <= 100","1 <= times.length <= 6000","1 <= ui, vi <= n","0 <= wi <= 100"]},{id:"990",slug:"990-等式方程的可满足性",title:"等式方程的可满足性",titleEn:"Satisfiability of Equality Equations",category:"Hot100 补充",difficulty:"中等",topic:"并查集",completed:!0,leetcodeSlug:"satisfiability-of-equality-equations",leetcodeUrl:"https://leetcode.cn/problems/satisfiability-of-equality-equations/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E7%AD%89%E5%BC%8F%E6%96%B9%E7%A8%8B%E7%9A%84%E5%8F%AF%E6%BB%A1%E8%B6%B3%E6%80%A7",acceptanceRate:54.6,solutionCount:1030,companyTagCount:17,paidOnly:!1,sourceBanks:["本地补充"],tags:["Hot100 补充","并查集","图","数组","字符串"],sourcePath:"hot100/990.等式方程的可满足性.py",lastUpdated:"2026-09-04",lastUpdatedAt:"2026-09-04T13:51:51.346Z",interviewPattern:"先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",thoughts:[`[需二刷]：并查集变量逻辑等价传递与矛盾校验（两遍扫描法）
思路：
1. 采用动态字典并查集（Union-Find），节点直接为字符，免去数字映射心智负担。
2. 第一遍扫描：遍历所有等式（""），将两侧变量 union 合并至同一集合。
3. 第二遍扫描：遍历所有不等式（"!"），通过 find 校验两侧变量：
若其根节点相同，说明二者此前已被判定为相等，产生逻辑矛盾，立即返回 False。
4. 若所有不等式均未产生冲突，返回 True。
时间复杂度：O(N * alpha(C)) ≈ O(N)，其中 N 为方程总数，C < 26 为字符种类
空间复杂度：O(C) ≈ O(1)，字典最多存储 26 个小写字母
易错点/误区：
1. 单遍扫描漏洞：不能边合并边判断！若 "!" 出现在 "" 之前（如 ["a!b","bc","ca"]），单遍判断无法察觉后续合并产生的矛盾。必须先全量合并等式，再校验不等式。
2. 字符切片：eq[1:3] 为双字符运算符（"" 或 "!"），误写 eq[1:2] 只有 1 个字符。
3. 字典动态初始化：在 find 时若字符未见过，需动态设置 parent[x]  x。`],pitfalls:[`[需二刷]：并查集变量逻辑等价传递与矛盾校验（两遍扫描法）
思路：
1. 采用动态字典并查集（Union-Find），节点直接为字符，免去数字映射心智负担。
2. 第一遍扫描：遍历所有等式（""），将两侧变量 union 合并至同一集合。
3. 第二遍扫描：遍历所有不等式（"!"），通过 find 校验两侧变量：
若其根节点相同，说明二者此前已被判定为相等，产生逻辑矛盾，立即返回 False。
4. 若所有不等式均未产生冲突，返回 True。
时间复杂度：O(N * alpha(C)) ≈ O(N)，其中 N 为方程总数，C < 26 为字符种类
空间复杂度：O(C) ≈ O(1)，字典最多存储 26 个小写字母
易错点/误区：
1. 单遍扫描漏洞：不能边合并边判断！若 "!" 出现在 "" 之前（如 ["a!b","bc","ca"]），单遍判断无法察觉后续合并产生的矛盾。必须先全量合并等式，再校验不等式。
2. 字符切片：eq[1:3] 为双字符运算符（"" 或 "!"），误写 eq[1:2] 只有 1 个字符。
3. 字典动态初始化：在 find 时若字符未见过，需动态设置 parent[x]  x。`],recallBlanks:[],solutionGuide:{idea:"围绕「并查集」组织解法，先确认输入输出和边界，再选择对应模板。",interviewSteps:["先说明核心考点：并查集。","先讲清楚暴力解，再给出数据结构优化。再补充复杂度。","关键词：Hot100 补充 / 并查集 / 图 / 数组。"],complexity:`[需二刷]：并查集变量逻辑等价传递与矛盾校验（两遍扫描法）
思路：
1. 采用动态字典并查集（Union-Find），节点直接为字符，免去数字映射心智负担。
2. 第一遍扫描：遍历所有等式（""），将两侧变量 union 合并至同一集合。
3. 第二遍扫描：遍历所有不等式（"!"），通过 find 校验两侧变量：
若其根节点相同，说明二者此前已被判定为相等，产生逻辑矛盾，立即返回 False。
4. 若所有不等式均未产生冲突，返回 True。
时间复杂度：O(N * alpha(C)) ≈ O(N)，其中 N 为方程总数，C < 26 为字符种类
空间复杂度：O(C) ≈ O(1)，字典最多存储 26 个小写字母
易错点/误区：
1. 单遍扫描漏洞：不能边合并边判断！若 "!" 出现在 "" 之前（如 ["a!b","bc","ca"]），单遍判断无法察觉后续合并产生的矛盾。必须先全量合并等式，再校验不等式。
2. 字符切片：eq[1:3] 为双字符运算符（"" 或 "!"），误写 eq[1:2] 只有 1 个字符。
3. 字典动态初始化：在 find 时若字符未见过，需动态设置 parent[x]  x。`,keyMistake:`[需二刷]：并查集变量逻辑等价传递与矛盾校验（两遍扫描法）
思路：
1. 采用动态字典并查集（Union-Find），节点直接为字符，免去数字映射心智负担。
2. 第一遍扫描：遍历所有等式（""），将两侧变量 union 合并至同一集合。
3. 第二遍扫描：遍历所有不等式（"!"），通过 find 校验两侧变量：
若其根节点相同，说明二者此前已被判定为相等，产生逻辑矛盾，立即返回 False。
4. 若所有不等式均未产生冲突，返回 True。
时间复杂度：O(N * alpha(C)) ≈ O(N)，其中 N 为方程总数，C < 26 为字符种类
空间复杂度：O(C) ≈ O(1)，字典最多存储 26 个小写字母
易错点/误区：
1. 单遍扫描漏洞：不能边合并边判断！若 "!" 出现在 "" 之前（如 ["a!b","bc","ca"]），单遍判断无法察觉后续合并产生的矛盾。必须先全量合并等式，再校验不等式。
2. 字符切片：eq[1:3] 为双字符运算符（"" 或 "!"），误写 eq[1:2] 只有 1 个字符。
3. 字典动态初始化：在 find 时若字符未见过，需动态设置 parent[x]  x。`},ask:'给定一个由表示变量之间关系的字符串方程组成的数组，每个字符串方程 equations[i] 的长度为 4，并采用两种不同的形式之一："a==b" 或 "a!=b"。在这里，a 和 b 是小写字母（不一定不同），表示单字母变量名。',constraints:["1 <= equations.length <= 500"]},{id:"144",slug:"144-二叉树的前序遍历",title:"二叉树的前序遍历",titleEn:"Binary Tree Preorder Traversal",category:"Hot100 补充",difficulty:"简单",topic:"栈",completed:!0,leetcodeSlug:"binary-tree-preorder-traversal",leetcodeUrl:"https://leetcode.cn/problems/binary-tree-preorder-traversal/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%89%8D%E5%BA%8F%E9%81%8D%E5%8E%86",acceptanceRate:73.5,solutionCount:4776,companyTagCount:54,paidOnly:!1,sourceBanks:["本地补充"],tags:["Hot100 补充","栈","树","深度优先搜索","二叉树"],sourcePath:"hot100/extra_拓展训练/144.二叉树的前序遍历.py",lastUpdated:"2026-03-19",lastUpdatedAt:"2026-03-19T06:35:26.528Z",interviewPattern:"先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",thoughts:[`题目：给定二叉树的根节点 root，返回前序遍历结果
前序遍历顺序：根节点 → 左子树 → 右子树
示例：[1,null,2,3] → [1,2,3]
解法一：递归（直观好理解）
思路：对每个节点，先记录自己，再递归左子树，最后递归右子树
时间 O(n)  空间 O(n)`,`--- 递归方法 ---
class Solution:
def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
result  []
def dfs(node):
if not node: return         # 终止条件：空节点
result.append(node.val)     # 1. 先记录当前节点（根在最前）
dfs(node.left)              # 2. 再递归左子树
dfs(node.right)             # 3. 最后递归右子树
dfs(root)
return result`,`解法二：迭代（用栈模拟）
思路：弹出栈顶→记录→先压右再压左（保证左先出栈被处理）
时间 O(n)  空间 O(n)`,"--- 迭代方法：栈 ---"],pitfalls:["本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"],recallBlanks:[{prompt:`解法二：迭代（用＿＿＿模拟）
思路：弹出＿＿＿顶→记录→先压右再压左（保证左先出＿＿＿被处理）
时间 O(n)  空间 O(n)`,answer:"栈"}],solutionGuide:{idea:`题目：给定二叉树的根节点 root，返回前序遍历结果
前序遍历顺序：根节点 → 左子树 → 右子树
示例：[1,null,2,3] → [1,2,3]
解法一：递归（直观好理解）
思路：对每个节点，先记录自己，再递归左子树，最后递归右子树
时间 O(n)  空间 O(n)`,interviewSteps:["先说明核心考点：栈。","先讲清楚暴力解，再给出数据结构优化。再补充复杂度。","关键词：Hot100 补充 / 栈 / 树 / 深度优先搜索。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:"本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"},ask:"给你二叉树的根节点 root ，返回它节点值的 前序 遍历。",constraints:["-100 <= Node.val <= 100"]},{id:"145",slug:"145-二叉树的后序遍历",title:"二叉树的后序遍历",titleEn:"Binary Tree Postorder Traversal",category:"Hot100 补充",difficulty:"简单",topic:"栈",completed:!0,leetcodeSlug:"binary-tree-postorder-traversal",leetcodeUrl:"https://leetcode.cn/problems/binary-tree-postorder-traversal/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%90%8E%E5%BA%8F%E9%81%8D%E5%8E%86",acceptanceRate:77.9,solutionCount:3632,companyTagCount:50,paidOnly:!1,sourceBanks:["本地补充"],tags:["Hot100 补充","栈","树","深度优先搜索","二叉树"],sourcePath:"hot100/extra_拓展训练/145.二叉树的后序遍历.py",lastUpdated:"2026-03-16",lastUpdatedAt:"2026-03-16T10:38:56.260Z",interviewPattern:"先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",thoughts:[`题目：给定二叉树的根节点 root，返回后序遍历结果
后序遍历顺序：左子树 → 右子树 → 根节点
示例：[1,null,2,3] → [3,2,1]
解法一：递归（直观好理解）
思路：对每个节点，先递归左子树，再递归右子树，最后记录自己
时间 O(n)  空间 O(n)`,`--- 递归方法 ---
class Solution:
def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
result  []
def dfs(node):
if not node: return         # 终止条件：空节点
dfs(node.left)              # 1. 先递归左子树
dfs(node.right)             # 2. 再递归右子树
dfs(node.val)               # 3. 最后记录当前节点（根在最后）
dfs(root)
return result`,`解法二：迭代（巧妙利用前序遍历）
思路：前序是 根→左→右，改成 根→右→左，再反转就是 左→右→根（后序）
- 和前序迭代几乎一样，只是把压栈顺序改为"先压左再压右"
- 最后 result[::-1] 反转
时间 O(n)  空间 O(n)`,"--- 迭代方法：栈（反转前序） ---"],pitfalls:["本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"],recallBlanks:[{prompt:"--- 迭代方法：＿＿＿（反转前序） ---",answer:"栈"}],solutionGuide:{idea:`题目：给定二叉树的根节点 root，返回后序遍历结果
后序遍历顺序：左子树 → 右子树 → 根节点
示例：[1,null,2,3] → [3,2,1]
解法一：递归（直观好理解）
思路：对每个节点，先递归左子树，再递归右子树，最后记录自己
时间 O(n)  空间 O(n)`,interviewSteps:["先说明核心考点：栈。","先讲清楚暴力解，再给出数据结构优化。再补充复杂度。","关键词：Hot100 补充 / 栈 / 树 / 深度优先搜索。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:"本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"},ask:"给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。",constraints:["-100 <= Node.val <= 100"]},{id:"2058",slug:"2058-找出临界点之间的最小和最大距离",title:"找出临界点之间的最小和最大距离",titleEn:"Find the Minimum and Maximum Number of Nodes Between Critical Points",category:"Hot100 补充",difficulty:"中等",topic:"链表",completed:!0,leetcodeSlug:"find-the-minimum-and-maximum-number-of-nodes-between-critical-points",leetcodeUrl:"https://leetcode.cn/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%89%BE%E5%87%BA%E4%B8%B4%E7%95%8C%E7%82%B9%E4%B9%8B%E9%97%B4%E7%9A%84%E6%9C%80%E5%B0%8F%E5%92%8C%E6%9C%80%E5%A4%A7%E8%B7%9D%E7%A6%BB",acceptanceRate:64.5,solutionCount:254,companyTagCount:6,paidOnly:!1,sourceBanks:["本地补充"],tags:["Hot100 补充","链表"],sourcePath:"hot100/extra_拓展训练/2058.找出临界点之间的最小和最大距离.py",lastUpdated:"2026-08-30",lastUpdatedAt:"2026-08-30T21:32:46.828Z",interviewPattern:"先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",thoughts:[`思路：用三指针滑动窗口遍历链表，收集所有临界点的位置下标
maxDistance  首尾临界点之差，minDistance  相邻临界点之差的最小值
时间 O(n)，空间 O(k)，k 为临界点个数
易错点/误区：
1. 边界条件：临界点需要前后各一个邻居，链表至少 3 个节点才可能有临界点
2. 循环终止：检查 head.next AND head.next.next 同时存在，
只检查 head.next 会在下一次迭代访问 nodeC.val 时 AttributeError
3. minDistance 初始值必须是 float('inf')，不能用 0
4. 先判断 len(result) < 2，再计算 maxDistance，
否则 result 为空时 result[-1] 会 IndexError
5. range(len(result)) 是 range 对象，不能与 int 用 < 比较 → TypeError`],pitfalls:[`思路：用三指针滑动窗口遍历链表，收集所有临界点的位置下标
maxDistance  首尾临界点之差，minDistance  相邻临界点之差的最小值
时间 O(n)，空间 O(k)，k 为临界点个数
易错点/误区：
1. 边界条件：临界点需要前后各一个邻居，链表至少 3 个节点才可能有临界点
2. 循环终止：检查 head.next AND head.next.next 同时存在，
只检查 head.next 会在下一次迭代访问 nodeC.val 时 AttributeError
3. minDistance 初始值必须是 float('inf')，不能用 0
4. 先判断 len(result) < 2，再计算 maxDistance，
否则 result 为空时 result[-1] 会 IndexError
5. range(len(result)) 是 range 对象，不能与 int 用 < 比较 → TypeError`],recallBlanks:[],solutionGuide:{idea:`思路：用三指针滑动窗口遍历链表，收集所有临界点的位置下标
maxDistance  首尾临界点之差，minDistance  相邻临界点之差的最小值
时间 O(n)，空间 O(k)，k 为临界点个数
易错点/误区：
1. 边界条件：临界点需要前后各一个邻居，链表至少 3 个节点才可能有临界点
2. 循环终止：检查 head.next AND head.next.next 同时存在，
只检查 head.next 会在下一次迭代访问 nodeC.val 时 AttributeError
3. minDistance 初始值必须是 float('inf')，不能用 0
4. 先判断 len(result) < 2，再计算 maxDistance，
否则 result 为空时 result[-1] 会 IndexError
5. range(len(result)) 是 range 对象，不能与 int 用 < 比较 → TypeError`,interviewSteps:["先说明核心考点：链表。","先讲清楚暴力解，再给出数据结构优化。再补充复杂度。","关键词：Hot100 补充 / 链表。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`思路：用三指针滑动窗口遍历链表，收集所有临界点的位置下标
maxDistance  首尾临界点之差，minDistance  相邻临界点之差的最小值
时间 O(n)，空间 O(k)，k 为临界点个数
易错点/误区：
1. 边界条件：临界点需要前后各一个邻居，链表至少 3 个节点才可能有临界点
2. 循环终止：检查 head.next AND head.next.next 同时存在，
只检查 head.next 会在下一次迭代访问 nodeC.val 时 AttributeError
3. minDistance 初始值必须是 float('inf')，不能用 0
4. 先判断 len(result) < 2，再计算 maxDistance，
否则 result 为空时 result[-1] 会 IndexError
5. range(len(result)) 是 range 对象，不能与 int 用 < 比较 → TypeError`},ask:"链表中的 临界点 定义为一个 局部极大值点 或 局部极小值点 。",constraints:["1 <= Node.val <= 105"]},{id:"217",slug:"217-存在重复元素",title:"存在重复元素",titleEn:"Contains Duplicate",category:"Hot100 补充",difficulty:"简单",topic:"数组",completed:!0,leetcodeSlug:"contains-duplicate",leetcodeUrl:"https://leetcode.cn/problems/contains-duplicate/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E5%AD%98%E5%9C%A8%E9%87%8D%E5%A4%8D%E5%85%83%E7%B4%A0",acceptanceRate:56.1,solutionCount:4310,companyTagCount:70,paidOnly:!1,sourceBanks:["本地补充"],tags:["Hot100 补充","数组","哈希表","排序"],sourcePath:"hot100/extra_拓展训练/217.存在重复元素.py",lastUpdated:"2026-03-16",lastUpdatedAt:"2026-03-16T12:16:48.853Z",interviewPattern:"先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",thoughts:["核心考点：数组","先整理输入输出和边界，再选择合适的数据结构。"],pitfalls:["本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"],recallBlanks:[],solutionGuide:{idea:"核心考点：数组",interviewSteps:["先说明核心考点：数组。","先讲清楚暴力解，再给出数据结构优化。再补充复杂度。","关键词：Hot100 补充 / 数组 / 哈希表 / 排序。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:"本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"},ask:"给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。",constraints:["1 <= nums.length <= 105","-109 <= nums[i] <= 109"]},{id:"3756",slug:"3756-连接非零数字并乘以其数字和-ii",title:"连接非零数字并乘以其数字和 II",titleEn:"Concatenate Non-Zero Digits and Multiply by Sum II",category:"Hot100 补充",difficulty:"中等",topic:"数学",completed:!0,leetcodeSlug:"concatenate-non-zero-digits-and-multiply-by-sum-ii",leetcodeUrl:"https://leetcode.cn/problems/concatenate-non-zero-digits-and-multiply-by-sum-ii/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E8%BF%9E%E6%8E%A5%E9%9D%9E%E9%9B%B6%E6%95%B0%E5%AD%97%E5%B9%B6%E4%B9%98%E4%BB%A5%E5%85%B6%E6%95%B0%E5%AD%97%E5%92%8C%20II",acceptanceRate:42,solutionCount:29,companyTagCount:1,paidOnly:!1,sourceBanks:["本地补充"],tags:["Hot100 补充","数学","字符串","前缀和"],sourcePath:"hot100/extra_拓展训练/3756.连接非零数字并乘以其数字和 II.py",lastUpdated:"2026-07-08",lastUpdatedAt:"2026-07-08T17:14:50.434Z",interviewPattern:"先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",thoughts:[`需二刷：前缀和 + 模运算提取子串拼接值
思路：
预处理两个前缀数组，查询 O(1)：
cnt[i]      s[0..i-1] 中的非零数字个数
concat[i]   s[0..i-1] 中非零数字拼接成的数 (mod MOD)
digitsum[i] s[0..i-1] 中非零数字之和
对于子串 [l, r]：
设 k  cnt[r+1] - cnt[l]（子串中非零数字个数）
psum[r+1]  (前缀的拼接数) × 10^k + (子串的拼接数)
→ 子串拼接数  psum[r+1] - psum[l] × 10^k
时间 O(m + Q)，空间 O(m)`],pitfalls:["本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"],recallBlanks:[],solutionGuide:{idea:`需二刷：前缀和 + 模运算提取子串拼接值
思路：
预处理两个前缀数组，查询 O(1)：
cnt[i]      s[0..i-1] 中的非零数字个数
concat[i]   s[0..i-1] 中非零数字拼接成的数 (mod MOD)
digitsum[i] s[0..i-1] 中非零数字之和
对于子串 [l, r]：
设 k  cnt[r+1] - cnt[l]（子串中非零数字个数）
psum[r+1]  (前缀的拼接数) × 10^k + (子串的拼接数)
→ 子串拼接数  psum[r+1] - psum[l] × 10^k
时间 O(m + Q)，空间 O(m)`,interviewSteps:["先说明核心考点：数学。","先讲清楚暴力解，再给出数据结构优化。再补充复杂度。","关键词：Hot100 补充 / 数学 / 字符串 / 前缀和。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:"本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"},ask:"给你一个长度为 m 的字符串 s，其中仅包含数字。另给你一个二维整数数组 queries，其中 queries[i] = [li, ri]。",constraints:["1 <= m == s.length <= 105","1 <= queries.length <= 105","0 <= li <= ri < m"]},{id:"461",slug:"461-汉明距离",title:"汉明距离",titleEn:"Hamming Distance",category:"Hot100 补充",difficulty:"简单",topic:"位运算",completed:!0,leetcodeSlug:"hamming-distance",leetcodeUrl:"https://leetcode.cn/problems/hamming-distance/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%B1%89%E6%98%8E%E8%B7%9D%E7%A6%BB",acceptanceRate:82.1,solutionCount:2418,companyTagCount:34,paidOnly:!1,sourceBanks:["本地补充"],tags:["Hot100 补充","位运算"],sourcePath:"hot100/extra_拓展训练/461.汉明距离.py",lastUpdated:"2026-03-20",lastUpdatedAt:"2026-03-20T08:32:16.452Z",interviewPattern:"先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",thoughts:[`思路：异或(XOR)找出不同的位，然后数 1 的个数
时间 O(1)（整数位数固定），空间 O(1)
💡 知识点：
1. x ^ y（异或）：相同位→0，不同位→1，正好标记出所有不同的位
2. bin(n) 将整数转为二进制字符串，如 bin(5) → '0b101'
3. .count('1') 统计字符串中 '1' 的个数
易错点/误区：
1. ^ 在 Python 中是异或，不是次方（次方用 **）
2. 面试中可能要求不用 bin()，而是用位运算逐位检查：n & 1 检查末位，n >> 1 右移`],pitfalls:[`思路：异或(XOR)找出不同的位，然后数 1 的个数
时间 O(1)（整数位数固定），空间 O(1)
💡 知识点：
1. x ^ y（异或）：相同位→0，不同位→1，正好标记出所有不同的位
2. bin(n) 将整数转为二进制字符串，如 bin(5) → '0b101'
3. .count('1') 统计字符串中 '1' 的个数
易错点/误区：
1. ^ 在 Python 中是异或，不是次方（次方用 **）
2. 面试中可能要求不用 bin()，而是用位运算逐位检查：n & 1 检查末位，n >> 1 右移`],recallBlanks:[],solutionGuide:{idea:`思路：异或(XOR)找出不同的位，然后数 1 的个数
时间 O(1)（整数位数固定），空间 O(1)
💡 知识点：
1. x ^ y（异或）：相同位→0，不同位→1，正好标记出所有不同的位
2. bin(n) 将整数转为二进制字符串，如 bin(5) → '0b101'
3. .count('1') 统计字符串中 '1' 的个数
易错点/误区：
1. ^ 在 Python 中是异或，不是次方（次方用 **）
2. 面试中可能要求不用 bin()，而是用位运算逐位检查：n & 1 检查末位，n >> 1 右移`,interviewSteps:["先说明核心考点：位运算。","先讲清楚暴力解，再给出数据结构优化。再补充复杂度。","关键词：Hot100 补充 / 位运算。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`思路：异或(XOR)找出不同的位，然后数 1 的个数
时间 O(1)（整数位数固定），空间 O(1)
💡 知识点：
1. x ^ y（异或）：相同位→0，不同位→1，正好标记出所有不同的位
2. bin(n) 将整数转为二进制字符串，如 bin(5) → '0b101'
3. .count('1') 统计字符串中 '1' 的个数
易错点/误区：
1. ^ 在 Python 中是异或，不是次方（次方用 **）
2. 面试中可能要求不用 bin()，而是用位运算逐位检查：n & 1 检查末位，n >> 1 右移`},ask:"两个整数之间的 汉明距离 指的是这两个数字对应二进制位不同的位置的数目。",constraints:["0 <= x, y <= 231 - 1"]},{id:"567",slug:"567-字符串的排列",title:"字符串的排列",titleEn:"Permutation in String",category:"Hot100 补充",difficulty:"中等",topic:"哈希表",completed:!0,leetcodeSlug:"permutation-in-string",leetcodeUrl:"https://leetcode.cn/problems/permutation-in-string/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%8E%92%E5%88%97",acceptanceRate:46.6,solutionCount:2747,companyTagCount:48,paidOnly:!1,sourceBanks:["本地补充"],tags:["Hot100 补充","哈希表","双指针","字符串","滑动窗口"],sourcePath:"hot100/extra_拓展训练/567.字符串的排列.py",lastUpdated:"2026-06-01",lastUpdatedAt:"2026-06-01T14:05:16.221Z",interviewPattern:"先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",thoughts:[`需二刷：滑动窗口寻找固定长度的子串（排列）
思路：维护一个大小为 len(s1) 的滑动窗口。当窗口大小达到 len(s1) 时，判断窗口内的字符是否完全匹配 s1（即 valid  len(need)），若匹配则说明找到一个排列，否则随着 left 右移缩小窗口以保持长度。
时间 O(N + M)，其中 N 和 M 分别是 s1 和 s2 的长度。
空间 O(C)，C 为字符集大小，本题最多 26 个字母。
易错点/误区：
1. 窗口缩小的条件：
- 错误写法：while right - left < len(s2):
- 为什么错：这样写不仅无法保持窗口大小为 s1 的长度，还会导致 left 不断移动。寻找排列本质上是在 s2 中找一个和 s1 长度相等的合法子串。
- 正确做法：while right - left > len(s1): 当窗口长度达到要求时，就开始尝试收缩。
2. valid 的更新条件：
- 错误写法：while window[d]  need[d]: valid - 1
- 为什么错：每次移出窗口的只有一个字符 d，不需要用 while 循环。并且，如果该字符目前正好达标（window[d]  need[d]），移出后就不达标了，这时候必须立刻 valid - 1。
- 正确做法：if window[d]  need[d]: valid - 1`],pitfalls:[`需二刷：滑动窗口寻找固定长度的子串（排列）
思路：维护一个大小为 len(s1) 的滑动窗口。当窗口大小达到 len(s1) 时，判断窗口内的字符是否完全匹配 s1（即 valid  len(need)），若匹配则说明找到一个排列，否则随着 left 右移缩小窗口以保持长度。
时间 O(N + M)，其中 N 和 M 分别是 s1 和 s2 的长度。
空间 O(C)，C 为字符集大小，本题最多 26 个字母。
易错点/误区：
1. 窗口缩小的条件：
- 错误写法：while right - left < len(s2):
- 为什么错：这样写不仅无法保持窗口大小为 s1 的长度，还会导致 left 不断移动。寻找排列本质上是在 s2 中找一个和 s1 长度相等的合法子串。
- 正确做法：while right - left > len(s1): 当窗口长度达到要求时，就开始尝试收缩。
2. valid 的更新条件：
- 错误写法：while window[d]  need[d]: valid - 1
- 为什么错：每次移出窗口的只有一个字符 d，不需要用 while 循环。并且，如果该字符目前正好达标（window[d]  need[d]），移出后就不达标了，这时候必须立刻 valid - 1。
- 正确做法：if window[d]  need[d]: valid - 1`],recallBlanks:[],solutionGuide:{idea:`需二刷：滑动窗口寻找固定长度的子串（排列）
思路：维护一个大小为 len(s1) 的滑动窗口。当窗口大小达到 len(s1) 时，判断窗口内的字符是否完全匹配 s1（即 valid  len(need)），若匹配则说明找到一个排列，否则随着 left 右移缩小窗口以保持长度。
时间 O(N + M)，其中 N 和 M 分别是 s1 和 s2 的长度。
空间 O(C)，C 为字符集大小，本题最多 26 个字母。
易错点/误区：
1. 窗口缩小的条件：
- 错误写法：while right - left < len(s2):
- 为什么错：这样写不仅无法保持窗口大小为 s1 的长度，还会导致 left 不断移动。寻找排列本质上是在 s2 中找一个和 s1 长度相等的合法子串。
- 正确做法：while right - left > len(s1): 当窗口长度达到要求时，就开始尝试收缩。
2. valid 的更新条件：
- 错误写法：while window[d]  need[d]: valid - 1
- 为什么错：每次移出窗口的只有一个字符 d，不需要用 while 循环。并且，如果该字符目前正好达标（window[d]  need[d]），移出后就不达标了，这时候必须立刻 valid - 1。
- 正确做法：if window[d]  need[d]: valid - 1`,interviewSteps:["先说明核心考点：哈希表。","先讲清楚暴力解，再给出数据结构优化。再补充复杂度。","关键词：Hot100 补充 / 哈希表 / 双指针 / 字符串。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：滑动窗口寻找固定长度的子串（排列）
思路：维护一个大小为 len(s1) 的滑动窗口。当窗口大小达到 len(s1) 时，判断窗口内的字符是否完全匹配 s1（即 valid  len(need)），若匹配则说明找到一个排列，否则随着 left 右移缩小窗口以保持长度。
时间 O(N + M)，其中 N 和 M 分别是 s1 和 s2 的长度。
空间 O(C)，C 为字符集大小，本题最多 26 个字母。
易错点/误区：
1. 窗口缩小的条件：
- 错误写法：while right - left < len(s2):
- 为什么错：这样写不仅无法保持窗口大小为 s1 的长度，还会导致 left 不断移动。寻找排列本质上是在 s2 中找一个和 s1 长度相等的合法子串。
- 正确做法：while right - left > len(s1): 当窗口长度达到要求时，就开始尝试收缩。
2. valid 的更新条件：
- 错误写法：while window[d]  need[d]: valid - 1
- 为什么错：每次移出窗口的只有一个字符 d，不需要用 while 循环。并且，如果该字符目前正好达标（window[d]  need[d]），移出后就不达标了，这时候必须立刻 valid - 1。
- 正确做法：if window[d]  need[d]: valid - 1`},ask:"给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的 排列。如果是，返回 true ；否则，返回 false 。",constraints:["1 <= s1.length, s2.length <= 104"]},{id:"703",slug:"703-数据流中的第-k-大元素",title:"数据流中的第 K 大元素",titleEn:"Kth Largest Element in a Stream",category:"Hot100 补充",difficulty:"简单",topic:"树",completed:!0,leetcodeSlug:"kth-largest-element-in-a-stream",leetcodeUrl:"https://leetcode.cn/problems/kth-largest-element-in-a-stream/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%95%B0%E6%8D%AE%E6%B5%81%E4%B8%AD%E7%9A%84%E7%AC%AC%20K%20%E5%A4%A7%E5%85%83%E7%B4%A0",acceptanceRate:53.6,solutionCount:951,companyTagCount:46,paidOnly:!1,sourceBanks:["本地补充"],tags:["Hot100 补充","树","设计","二叉搜索树","二叉树","数据流","堆（优先队列）"],sourcePath:"hot100/extra_拓展训练/703.数据流中的第 K 大元素.py",lastUpdated:"2026-06-12",lastUpdatedAt:"2026-06-12T13:26:55.864Z",interviewPattern:"先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",thoughts:[`需二刷：最小堆维护 Top K（数据流实时求第 K 大的入门模板）
思路：维护一个大小为 k 的最小堆，堆里始终保存当前前 k 大的元素，
堆顶（最小值）就是第 k 大的元素。新元素比堆顶大才值得入堆。
时间 O(n log k)，空间 O(k)
易错点/误区：
1. heapq 是最小堆，要第 K 大直接用小堆存前 K 大元素即可，不需要取反
2. 初始化时 nums 长度可能小于 k，此时堆没满，堆顶就是最小值（不是真正第 k 大）
但题目保证 add 调用次数足够多，最终堆会填满
3. 容易漏掉 len(self.pq) > self.k 的判断条件，写成 > 就把唯一元素弹出了`],pitfalls:[`需二刷：最小堆维护 Top K（数据流实时求第 K 大的入门模板）
思路：维护一个大小为 k 的最小堆，堆里始终保存当前前 k 大的元素，
堆顶（最小值）就是第 k 大的元素。新元素比堆顶大才值得入堆。
时间 O(n log k)，空间 O(k)
易错点/误区：
1. heapq 是最小堆，要第 K 大直接用小堆存前 K 大元素即可，不需要取反
2. 初始化时 nums 长度可能小于 k，此时堆没满，堆顶就是最小值（不是真正第 k 大）
但题目保证 add 调用次数足够多，最终堆会填满
3. 容易漏掉 len(self.pq) > self.k 的判断条件，写成 > 就把唯一元素弹出了`],recallBlanks:[],solutionGuide:{idea:`需二刷：最小堆维护 Top K（数据流实时求第 K 大的入门模板）
思路：维护一个大小为 k 的最小堆，堆里始终保存当前前 k 大的元素，
堆顶（最小值）就是第 k 大的元素。新元素比堆顶大才值得入堆。
时间 O(n log k)，空间 O(k)
易错点/误区：
1. heapq 是最小堆，要第 K 大直接用小堆存前 K 大元素即可，不需要取反
2. 初始化时 nums 长度可能小于 k，此时堆没满，堆顶就是最小值（不是真正第 k 大）
但题目保证 add 调用次数足够多，最终堆会填满
3. 容易漏掉 len(self.pq) > self.k 的判断条件，写成 > 就把唯一元素弹出了`,interviewSteps:["先说明核心考点：树。","先讲清楚暴力解，再给出数据结构优化。再补充复杂度。","关键词：Hot100 补充 / 树 / 设计 / 二叉搜索树。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`需二刷：最小堆维护 Top K（数据流实时求第 K 大的入门模板）
思路：维护一个大小为 k 的最小堆，堆里始终保存当前前 k 大的元素，
堆顶（最小值）就是第 k 大的元素。新元素比堆顶大才值得入堆。
时间 O(n log k)，空间 O(k)
易错点/误区：
1. heapq 是最小堆，要第 K 大直接用小堆存前 K 大元素即可，不需要取反
2. 初始化时 nums 长度可能小于 k，此时堆没满，堆顶就是最小值（不是真正第 k 大）
但题目保证 add 调用次数足够多，最终堆会填满
3. 容易漏掉 len(self.pq) > self.k 的判断条件，写成 > 就把唯一元素弹出了`},ask:"设计一个找到数据流中第 k 大元素的类（class）。注意是排序后的第 k 大元素，不是第 k 个不同的元素。",constraints:["0 <= nums.length <= 104","1 <= k <= nums.length + 1","-104 <= nums[i] <= 104","-104 <= val <= 104"]},{id:"912",slug:"912-排序数组",title:"排序数组",titleEn:"Sort an Array",category:"Hot100 补充",difficulty:"中等",topic:"数组",completed:!0,leetcodeSlug:"sort-an-array",leetcodeUrl:"https://leetcode.cn/problems/sort-an-array/",nowcoderUrl:"https://www.nowcoder.com/search/all?query=%E6%8E%92%E5%BA%8F%E6%95%B0%E7%BB%84",acceptanceRate:47.7,solutionCount:3061,companyTagCount:61,paidOnly:!1,sourceBanks:["本地补充"],tags:["Hot100 补充","数组","分治","桶排序","计数排序","基数排序","排序","堆（优先队列）","归并排序"],sourcePath:"hot100/extra_拓展训练/912.排序数组.py",lastUpdated:"2026-06-04",lastUpdatedAt:"2026-06-04T13:14:27.406Z",interviewPattern:"先讲清楚暴力解，再给出数据结构优化，并补充复杂度。",thoughts:[`需二刷：三路快排（3-way Quick Sort），处理大量重复元素的核心技巧
思路：随机选 pivot，将数组分为 <pivot / pivot / >pivot 三个区域
时间 O(n log n) 平均，O(n²) 最坏（几乎不会出现），空间 O(log n)`,"递归处理小于区和大于区，等于区已在正确位置",`易错点/误区：
1. nums[i] > pivot 交换后 i 不能 +1，因为右边换来的元素未检查过
2. 终止条件是 i < gt，不是 i < gt，否则会漏掉 nums[gt]
3. 递归区间是 (left, lt-1) 和 (gt+1, right)，不是 (left, lt) 和 (gt, right)`],pitfalls:[`三路分区：三个指针维护三个区间
lt: 小于区的右边界，nums[left..lt-1] < pivot
gt: 大于区的左边界，nums[gt+1..right] > pivot
i: 当前遍历的位置`,`易错点/误区：
1. nums[i] > pivot 交换后 i 不能 +1，因为右边换来的元素未检查过
2. 终止条件是 i < gt，不是 i < gt，否则会漏掉 nums[gt]
3. 递归区间是 (left, lt-1) 和 (gt+1, right)，不是 (left, lt) 和 (gt, right)`],recallBlanks:[{prompt:"＿＿＿处理小于区和大于区，等于区已在正确位置",answer:"递归"}],solutionGuide:{idea:`需二刷：三路快排（3-way Quick Sort），处理大量重复元素的核心技巧
思路：随机选 pivot，将数组分为 <pivot / pivot / >pivot 三个区域
时间 O(n log n) 平均，O(n²) 最坏（几乎不会出现），空间 O(log n)`,interviewSteps:["先说明核心考点：数组。","先讲清楚暴力解，再给出数据结构优化。再补充复杂度。","关键词：Hot100 补充 / 数组 / 分治 / 桶排序。"],complexity:"面试时补充时间复杂度和空间复杂度。",keyMistake:`三路分区：三个指针维护三个区间
lt: 小于区的右边界，nums[left..lt-1] < pivot
gt: 大于区的左边界，nums[gt+1..right] > pivot
i: 当前遍历的位置`},ask:"给你一个整数数组 nums，请你将该数组升序排列。",constraints:["1 <= nums.length <= 5 * 104","-5 * 104 <= nums[i] <= 5 * 104"]}],t=[{name:"哈希表",total:3,solved:3,hard:0},{name:"双指针",total:4,solved:4,hard:1},{name:"滑动窗口",total:2,solved:2,hard:0},{name:"子串",total:3,solved:3,hard:2},{name:"动态规划",total:16,solved:16,hard:2},{name:"普通数组",total:4,solved:4,hard:1},{name:"矩阵",total:4,solved:4,hard:0},{name:"链表",total:12,solved:12,hard:1},{name:"二叉树",total:15,solved:15,hard:1},{name:"图论",total:4,solved:4,hard:0},{name:"回溯",total:8,solved:8,hard:1},{name:"二分查找",total:6,solved:6,hard:1},{name:"栈",total:5,solved:5,hard:1},{name:"堆",total:3,solved:3,hard:1},{name:"贪心",total:4,solved:4,hard:0},{name:"技巧",total:5,solved:5,hard:0},{name:"Hot100 补充",total:17,solved:17,hard:1}],i=[{id:"11",title:"盛最多水的容器",slug:"11-盛最多水的容器",reason:`踩坑记录
坑1: area 初始化写成 area  () (空元组)，不能和 int 比大小
→ 初始化数值型变量用 0，不要用 () 或 None
坑2: for i in height 遍历的是"值"不是"索引"
→ 需要索引时一定用 range(len(height))
坑3: 先移动指针再算面积，导致漏算第一对、且用错了指针位置
→ 应该先算面积，再移动指针
坑4: 两个 if 不是互斥的，第一个 if 改了 front 后，
第二个 if 用的是新的 front，可能一轮移动两个指针
→ 用 if/else 保证每轮只移动一个指针
坑5: while front < back，当 front  back 时宽度为 0，没有意义
→ 用 while front < back`},{id:"15",title:"三数之和",slug:"15-三数之和",reason:"去重：跳过重复的第一个数（i > 0 防止越界）"},{id:"42",title:"接雨水",slug:"42-接雨水",reason:`class Solution:
def trap(self, height: List[int]) -> int:
if len(height)  0:
return 0
n  len(height)
res  0
# 创建备忘录
l_max  [0] * n
r_max  [0] * n
# 初始化
l_max[0]  height[0]
r_max[n-1]  height[n-1]`},{id:"3",title:"无重复字符的最长子串",slug:"3-无重复字符的最长子串",reason:`需二刷：经典滑动窗口（求最长子串）
思路：这道题找的是“最长”的无重复子串，不需要固定窗口大小。
只要新加入的字符 c 导致了窗口内出现了重复（window[c] > 1），
就不断移动 left 缩小窗口，直到把重复的那个字符移出去为止。
当窗口内再次没有重复字符时，更新最大长度。
时间 O(N)，其中 N 是 s 的长度。
空间 O(C)，C 为字符集大小（ASCII 码最多 128/256 个）。
易错点/误区：
1. 更新最大长度的位置：result  max(...) 必须放在内层 while 循环结束之后。因为只有在剔除重复字符后，当前窗口内的子串才是合法的“无重复”子串。
2. 收缩条件：这道题不需要像 567 题那样判断 right - left 的长度，而是直接用 window[c] > 1 作为收缩条件，直击要害。`},{id:"438",title:"找到字符串中所有字母异位词",slug:"438-找到字符串中所有字母异位词",reason:`需二刷：滑动窗口寻找所有固定长度的子串（异位词/排列）
思路：异位词本质上就是字符串的排列。这道题和 567 题（字符串的排列）逻辑完全一致。
区别仅仅在于：567 题找到一个就 return True，本题需要把所有找到的起始索引 left 存入结果数组中。
时间 O(N + M)，其中 N 是 s 的长度，M 是 p 的长度。
空间 O(C)，C 为字符集大小，本题最多 26 个字母。
易错点/误区：
1. 结果收集的位置：必须在窗口大小达到 p 的长度时进行判断，且记录的索引是当前的 left。
2. window 收缩条件：依然是 right - left > len(p)，保证窗口长度严格等于 p 的长度。`},{id:"239",title:"滑动窗口最大值",slug:"239-滑动窗口最大值",reason:`需二刷：单调队列核心题型，与 84/739 单调栈是镜像概念
思路：维护一个存「下标」的递减 deque，队首始终是当前窗口最大值的下标
时间 O(n)，空间 O(k)
易错点/误区：
1. 队列必须存「下标」而非「值」，否则无法判断元素是否滑出窗口过期
（同值可能重复出现，也可能值相等但一个在窗内一个在窗外）
2. 过期边界是 queue[0] < i - k + 1，不是 i - k
窗口 [i-k+1, i] 共 k 个元素，i - k 就是左边界的前一格，是 off-by-one 高频坑
3. 必须用 collections.deque，不能用 list：
list.pop(0) 是 O(n)，整体退化成 O(n²)；deque.popleft() 是 O(1)
4. 操作顺序不能乱：先清队尾 → 入队 → 清过期队首 → 输出
如果入队在清队尾之前，你刚加进去的元素会被自己的 while 循环误伤
5. 只有当 i > k - 1 时才输出，也就是窗口第一次「装满」k 个元素之后
装不满就输出会得到非窗口的脏数据`},{id:"560",title:"和为 K 的子数组",slug:"560-和为-k-的子数组",reason:`需二刷：前缀和 + 哈希表
思路：prefix[j] - prefix[i-1]  k → 找之前有多少个前缀和等于 prefix_sum - k
时间 O(n)，空间 O(n)
易错点/误区：
1. 哈希表必须初始化 {0: 1}，代表空前缀（前缀和为0出现1次），
否则会漏掉从下标0开始、和刚好等于k的子数组
2. 哈希表存的是「前缀和出现的次数」，不是 count
3. 必须先查找再记录（顺序不能反），否则当 k0 时会把自己算进去`},{id:"76",title:"最小覆盖子串",slug:"76-最小覆盖子串",reason:`需二刷：[滑动窗口经典套路，寻找最小覆盖子串]
思路：用 right 指针不断向右移动扩大窗口，直到窗口包含了 t 中所有字符。
然后用 left 指针向右移动缩小窗口，尽力找到更短的符合条件的子串。
时间 O(N)，空间 O(C) (C为字符集大小)
易错点/误区：
1. 找不到符合条件的子串时，题目要求返回空字符串 ""，而不是包含空格的 " "。
2. 窗口长度计算：此时 right 已经 + 1，所以窗口长度就是 right - left，不需要加一。`}],o=[{id:"460",slug:"460-lfu-缓存",title:"LFU 缓存",category:"Hot100 补充",difficulty:"困难",topic:"设计",tags:["Hot100 补充","设计","哈希表","链表","双向链表"],sourcePath:"hot100/460.LFU 缓存.py",lastUpdated:"2026-09-27",leetcodeUrl:"https://leetcode.cn/problems/lfu-cache/",codePreview:`class Node:
    def __init__(self, key:int, val:int):
        self.key =key
        self.val = val
        self.next = None
        self.prev = None
        self.freq = 1
class DoubleListNode:
    def __init__(self):
        self.head = Node(0,0)
        self.tail = Node(0,0)
        self.head.next = self.tail
        self.tail.prev = self.head
        self._size = 0
    def addlast(self, x):
        x.next = self.tail
        x.prev = self.tail.prev
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
class LFUCache:
# 同一个频次的key会放在同一个双向链表里面
    def __init__(self, capacity: int):
        self.cap = capacity
        self.min_freq = 0
        self.key_to_node = {}
        self.freq_to_list = {}
    def increase_freq(self, node: Node):
        freq = node.freq
        self.freq_to_list[freq].remove(node)
        if freq == self.min_freq and self.freq_to_list[freq]._size == 0:
            self.min_freq += 1 
        node.freq += 1
        if node.freq not in self.freq_to_list:
            self.freq_to_list[node.freq] = DoubleListNode()
        self.freq_to_list[node.freq].addlast(node)
    def  remove_min_freq(self):
        min_list = self.freq_to_list[self.min_freq]
        deleted_node = min_list.removefirst()
        self.key_to_node.pop(deleted_node.key)
    def get(self, key: int) -> int:
        if key not in self.key_to_node:
            return -1
        node = self.key_to_node[key]
        self.increase_freq(node)
        return node.val
    def put(self, key: int, value: int) -> None:
        if self.cap == 0:  # ⚠️ 边界防坑：容量为 0 时直接返回
            return
        # 情况 1：key 已存在 -> 更新值并提升频次
        if key in self.key_to_node:
            node = self.key_to_node[key]
            node.val = value
            self.increase_freq(node)
            return
        # 情况 2：全新 key -> 检查容量，插入 freq=1 的链表
        if len(self.key_to_node) == self.cap:
            self.remove_min_freq()
        # 构造新节点（频次默认是 1）
        new_node = Node(key, value)
        self.key_to_node[key] = new_node
        # 挂到 freq=1 的链表中
        if 1 not in self.freq_to_list:
            self.freq_to_list[1] = DoubleListNode()
        self.freq_to_list[1].addlast(new_node)
        # 🌟 关键：新插入的节点频次是 1，所以全局最小频次必然重置为 1！
        self.min_freq = 1
# Your LFUCache object will be instantiated and called as such:
# obj = LFUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)`},{id:"146",slug:"146-lru-缓存",title:"LRU 缓存",category:"Hot100 补充",difficulty:"中等",topic:"设计",tags:["Hot100 补充","设计","哈希表","链表","双向链表"],sourcePath:"hot100/07_链表/146.LRU 缓存.py",lastUpdated:"2026-09-27",leetcodeUrl:"https://leetcode.cn/problems/lru-cache/",codePreview:`# 📌 ✅ 二刷完成 (2026-09-27，牛客网手撕实战 AC)
#
# 思路：map 负责 O(1) 查找节点，双向链表维护访问顺序。
#       每次访问（get/set/put）将节点移到链表尾部表示"最近使用"，
#       缓存满时淘汰链表头部节点（最久未使用）
# 时间 O(1)，空间 O(capacity)
#
# ⚠️ 易错点/实战踩坑复盘：
# 1. 函数参数命名不一致导致 NameError：接口形参常为 (key, value)，内部调用易笔误写成 val 报 NameError
# 2. 函数调用漏写括号 () 静默失效：self.removeLeastRecently 漏了 () 会仅引用函数对象而不执行淘汰，导致容量超标
# 3. 辅助函数签名与调用不匹配：removefirst() 自动从 head.next 摘取节点，若定义为 def removefirst(self, x) 会在无参调用时报 missing 1 argument
# 4. 更新已有 key 时误调底层方法：在 Solution 中误写 self.addlast(key)，应统一调用 self.addrecently(key, value)
# 5. Node 必须同时存储 key 和 val：淘汰链表节点时，必须拿到 node.key 才能同步从 map 中 pop 掉条目
class Node:
    # 链表节点：同时存储 key（用于从被删节点反查 map 的 key）和 val
    def __init__(self, key, val):
        self.key = key
        self.val = val
        self.prev = None
        self.next = None
class DoublelistNode:
    def __init__(self):
        self.head = Node(0,0)
        self.tail = Node(0,0)
        self._size = 0
        self.head.next = self.tail
        self.tail.prev = self.head
    def addlast(self,x):
        x.prev = self.tail.prev
        x.next = self.tail
        self.tail.prev.next = x 
        self.tail.prev = x
        self._size += 1
    def remove(self,x):
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
        self.map = {}                # key → Node，O(1) 定位节点
        self.cache = DoublelistNode() # 双向链表，维护访问顺序
        self.cap = capacity
    def get(self, key: int) -> int:
        if key not in self.map:
            return -1
        self.makerecently(key)       # ⚠️ 这里容易写成 x，但 makerecently 接收的是 key
        return self.map[key].val
    def put(self, key: int, val: int) -> None:
        # 情况 1：key 已存在 → 先删旧节点，再插新节点（更新值和顺序）
        if key in self.map:
            self.deletekey(key)
            self.addrecently(key, val)
            return
        # 情况 2：缓存满 → 淘汰最久未使用的头节点
        if self.cap == self.cache.size():
            self.removeLeastRecently()
        # 情况 3：直接插入新节点
        self.addrecently(key, val)
    # 将 key 对应的节点移到链表尾部（标记为最近使用）
    def makerecently(self, key: int):
        x = self.map[key]
        self.cache.remove(x)         # 先删
        self.cache.addlast(x)        # 再放到尾部
    # 新建节点并添加到链表尾部，同时在 map 中注册
    def addrecently(self, key: int, val: int):
        x = Node(key, val)
        self.cache.addlast(x)
        self.map[key] = x
    # 删除指定 key 的节点（更新操作时用）
    def deletekey(self, key: int):
        x = self.map[key]
        self.cache.remove(x)
        self.map.pop(key)
    # 淘汰最久未使用的元素（链表头部节点）
    def removeLeastRecently(self):
        deletedNode = self.cache.removefirst()
        deletedKey = deletedNode.key  # 从节点中拿到 key，去 map 中清除
        self.map.pop(deletedKey)
# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)`},{id:"1514",slug:"1514-概率最大的路径",title:"概率最大的路径",category:"Hot100 补充",difficulty:"中等",topic:"图",tags:["Hot100 补充","图","数组","最短路","Dijkstra 算法"],sourcePath:"hot100/1514.概率最大的路径.py",lastUpdated:"2026-09-05",leetcodeUrl:"https://leetcode.cn/problems/path-with-maximum-probability/",codePreview:`from typing import List
import heapq
# [需二刷]：乘积最大路径（Dijkstra 堆优化变体 / 大顶堆）
#
# 思路：
# 1. 本质是单源最长/最大路径问题，由于边权 p ∈ [0, 1]，路径概率乘积单调不增，满足 Dijkstra 贪心选择性质（类似于求和最短路）。
# 2. 建无向加权图 graph[u] = [(v, p), ...]。
# 3. 维护概率数组 prob，初始化为 0.0，起点 prob[start_node] = 1.0。
# 4. 利用最大堆（Python 中存储负概率 -p 实现大顶堆）每次弹出当前未确认节点中概率最大的节点。
# 5. 出堆时若当前节点即为 end_node，直接返回对应概率（贪心最优保证）；若 cur_p < prob[u]，说明是过期历史状态，跳过剪枝。
# 6. 遍历邻居松弛：new_p = cur_p * p，若 new_p > prob[v]，更新 prob[v] 并入堆。
#
# 时间复杂度：O(E log E) 或 O(E log V)，其中 E 为边数，V 为顶点数 n，堆操作耗时。
# 空间复杂度：O(V + E)，邻接表图、prob 数组以及优先队列的存储开销。
#
# 易错点/误区：
# 1. 为什么这道「最长路径」可以用 Dijkstra？普通图中求最长路径是 NP-hard 且存在正环；但本题中所有边权 p ∈ [0, 1]，乘法会使概率单调递减（或保持不变），不存在无限放大的正环，满足贪心性质。
# 2. Python 默认是小顶堆，需要存入负值 -p 来模拟大顶堆。
# 3. 终止条件优化：只要 end_node 第一次出堆，其概率即为全局最大，可直接 return 提前退出。
# 4. 浮点精度：乘法直接累乘，但在极长路径中如果发生下溢，一般可通过转 log（将乘法转加法求最短路）避免精度丢失（本题精度要求 1e-5，直接浮点乘积足够通过）。
class Solution:
    def maxProbability(self, n: int, edges: List[List[int]], succProb: List[float], start_node: int, end_node: int) -> float:
        graph = [[] for _ in range(n)]
        for (u, v), p in zip(edges, succProb):
            graph[u].append((v, p))
            graph[v].append((u, p))
        prob = [0.0] * n
        prob[start_node] = 1.0
        pq = [(-1.0, start_node)]
        while pq:
            neg_p, u = heapq.heappop(pq)
            cur_p = -neg_p
            if u == end_node:
                return cur_p
            if cur_p < prob[u]:
                continue
            for v, p in graph[u]:
                new_p = cur_p * p
                if new_p > prob[v]:
                    prob[v] = new_p
                    heapq.heappush(pq, (-new_p, v))
        return 0.0`},{id:"130",slug:"130-被围绕的区域",title:"被围绕的区域",category:"Hot100 补充",difficulty:"中等",topic:"深度优先搜索",tags:["Hot100 补充","深度优先搜索","广度优先搜索","并查集","数组"],sourcePath:"hot100/130.被围绕的区域.py",lastUpdated:"2026-09-04",leetcodeUrl:"https://leetcode.cn/problems/surrounded-regions/",codePreview:`from typing import List
# [需二刷]：并查集虚拟超级源点 (Dummy Root) 技巧
#
# 思路：
# 1. 逆向思考：与其找“被包围的 O”，不如找出所有与“网格边界连通的 O”（免死安全区）。
# 2. 引入虚拟超级源点 dummy = (-1, -1)，代表通往外界的安全区。
# 3. 遍历网格：
#    - 凡位于四条边界上的 'O'，一律与 dummy 执行 union 合并；
#    - 内部的 'O' 仅需向右 (0, 1) 和向下 (1, 0) 查看，若邻居也是 'O' 则执行 union。
# 4. 二次遍历整盘清算：
#    - 凡是 board[r][c] == 'O' 且 find((r, c)) != find(dummy) 的，说明未能连通边界，原地修改为 'X'。
#
# 时间复杂度：O(M * N * alpha(M * N)) ≈ O(M * N)，每个格子常数次操作
# 空间复杂度：O(M * N)，并查集 parent 字典空间
#
# 易错点/误区：
# 1. 误区：直接将不在边缘的 'O' 变 'X' 会误杀！因为内部的 'O' 可能顺着通道连接到边缘。
# 2. 遍历方向：内部合并只需向右和向下看两个方向，即可覆盖所有无向邻接关系，避免四方向重复判断。
# 3. 空矩阵守卫：进入前需进行 if not board or not board[0]: return 守卫校验，防止越界。
class UnionFind:
    def __init__(self):
        self.parent = {}
    def find(self, x):
        if x not in self.parent:
            self.parent[x] = x
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    def union(self, x, y):
        root_x = self.find(x)
        root_y = self.find(y)
        if root_x != root_y:
            self.parent[root_x] = root_y
class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        if not board or not board[0]:
            return
        m = len(board)
        n = len(board[0])
        uf = UnionFind()
        dummy = (-1, -1)
        # 阶段 1：构建连通分量，边界 'O' 归入 dummy
        for r in range(m):
            for c in range(n):
                if board[r][c] == "O":
                    if r == 0 or r == (m - 1) or c == 0 or c == (n - 1):
                        uf.union((r, c), dummy)
                    for dr, dc in [(0, 1), (1, 0)]:
                        nr, nc = r + dr, c + dc
                        if nr < m and nc < n and board[nr][nc] == "O":
                            uf.union((r, c), (nr, nc))
        # 阶段 2：未与 dummy 连通的内部 'O' 替换为 'X'
        for r in range(m):
            for c in range(n):
                if board[r][c] == "O":
                    if uf.find((r, c)) != uf.find(dummy):
                        board[r][c] = "X"
if __name__ == '__main__':
    sol = Solution()
    b1 = [
        ["X", "X", "X", "X"],
        ["X", "O", "O", "X"],
        ["X", "X", "O", "X"],
        ["X", "O", "X", "X"]
    ]
    sol.solve(b1)
    assert b1 == [
        ["X", "X", "X", "X"],
        ["X", "X", "X", "X"],
        ["X", "X", "X", "X"],
        ["X", "O", "X", "X"]
    ]
    b2 = [["X"]]
    sol.solve(b2)
    assert b2 == [["X"]]
    print("All tests passed successfully!")`},{id:"990",slug:"990-等式方程的可满足性",title:"等式方程的可满足性",category:"Hot100 补充",difficulty:"中等",topic:"并查集",tags:["Hot100 补充","并查集","图","数组","字符串"],sourcePath:"hot100/990.等式方程的可满足性.py",lastUpdated:"2026-09-04",leetcodeUrl:"https://leetcode.cn/problems/satisfiability-of-equality-equations/",codePreview:`from typing import List
# [需二刷]：并查集变量逻辑等价传递与矛盾校验（两遍扫描法）
#
# 思路：
# 1. 采用动态字典并查集（Union-Find），节点直接为字符，免去数字映射心智负担。
# 2. 第一遍扫描：遍历所有等式（"=="），将两侧变量 union 合并至同一集合。
# 3. 第二遍扫描：遍历所有不等式（"!="），通过 find 校验两侧变量：
#    若其根节点相同，说明二者此前已被判定为相等，产生逻辑矛盾，立即返回 False。
# 4. 若所有不等式均未产生冲突，返回 True。
#
# 时间复杂度：O(N * alpha(C)) ≈ O(N)，其中 N 为方程总数，C <= 26 为字符种类
# 空间复杂度：O(C) ≈ O(1)，字典最多存储 26 个小写字母
#
# 易错点/误区：
# 1. 单遍扫描漏洞：不能边合并边判断！若 "!=" 出现在 "==" 之前（如 ["a!=b","b==c","c==a"]），单遍判断无法察觉后续合并产生的矛盾。必须先全量合并等式，再校验不等式。
# 2. 字符切片：eq[1:3] 为双字符运算符（"==" 或 "!="），误写 eq[1:2] 只有 1 个字符。
# 3. 字典动态初始化：在 find 时若字符未见过，需动态设置 parent[x] = x。
class UnionFind:
    def __init__(self):
        self.parent = {}
    def find(self, x: str) -> str:
        if x not in self.parent:
            self.parent[x] = x
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    def union(self, x: str, y: str):
        root_x = self.find(x)
        root_y = self.find(y)
        if root_x != root_y:
            self.parent[root_x] = root_y
class Solution:
    def equationsPossible(self, equations: List[str]) -> bool:
        uf = UnionFind()
        # 第一遍：全量合并所有相等关系
        for eq in equations:
            if eq[1:3] == "==":
                uf.union(eq[0], eq[3])
        # 第二遍：校验所有不等关系是否存在矛盾
        for eq in equations:
            if eq[1:3] == "!=":
                if uf.find(eq[0]) == uf.find(eq[3]):
                    return False
        return True
if __name__ == '__main__':
    sol = Solution()
    assert sol.equationsPossible(["a==b", "b!=a"]) == False
    assert sol.equationsPossible(["b==a", "a==b"]) == True
    assert sol.equationsPossible(["a==b", "b==c", "a==c"]) == True
    assert sol.equationsPossible(["a==b", "b!=c", "c==a"]) == False
    assert sol.equationsPossible(["c==c", "b==d", "x!=z"]) == True
    assert sol.equationsPossible(["a!=a"]) == False
    print("All tests passed successfully!")`},{id:"684",slug:"684-冗余连接",title:"冗余连接",category:"Hot100 补充",difficulty:"中等",topic:"深度优先搜索",tags:["Hot100 补充","深度优先搜索","广度优先搜索","并查集","图"],sourcePath:"hot100/684.冗余连接.py",lastUpdated:"2026-09-04",leetcodeUrl:"https://leetcode.cn/problems/redundant-connection/",codePreview:`from typing import List
# [需二刷]：并查集无向图成环检测经典模型
#
# 思路：
# 1. 树是连通且无环的无向图，n 个节点必须恰好有 n-1 条边。输入给了 n 条边，必然存在一条冗余边使图成环。
# 2. 初始化大小为 n + 1 的并查集（节点编号从 1 到 n）。
# 3. 顺序遍历每条边 [u, v]，调用 find 检查两顶点的根节点：
#    - 若 find(u) == find(v)：说明 u 和 v 在此之前已相互连通，当前边导致了环的闭合，直接作为冗余边返回。
#    - 若 find(u) != find(v)：说明连接了两个原本独立的连通块，调用 union(u, v) 正常合并。
#
# 时间复杂度：O(n * alpha(n)) ≈ O(n)，其中 n 为边数/节点数
# 空间复杂度：O(n)，并查集 parent 数组空间
#
# 易错点/误区：
# 1. 编号边界：节点编号为 1 到 n，parent 数组必须开 n + 1，写 n 会触发 IndexError。
# 2. 方法调用语法：调用 find(self.parent[x]) 必须使用圆括号，误用方括号 find[...] 会报 'method' object is not subscriptable。
# 3. 变量名混淆：合并时是修改父指针 parent[root_x] = root_y，误写为 find[root_x] = root_y 会报错。
# 4. 返回顺序：题目要求返回最后导致成环的边，顺序遍历时碰到的第一个成环边即为所求（因为后续边还没加入）。
class UnionFind:
    def __init__(self, n: int):
        self.parent = list(range(n + 1))
    def find(self, x: int) -> int:
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    def union(self, x: int, y: int):
        root_x = self.find(x)
        root_y = self.find(y)
        if root_x != root_y:
            self.parent[root_x] = root_y
class Solution:
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
        n = len(edges)
        uf = UnionFind(n)
        for u, v in edges:
            if uf.find(u) == uf.find(v):
                return [u, v]
            else:
                uf.union(u, v)
if __name__ == '__main__':
    sol = Solution()
    assert sol.findRedundantConnection([[1, 2], [1, 3], [2, 3]]) == [2, 3]
    assert sol.findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]) == [1, 4]
    print("All tests passed successfully!")`},{id:"547",slug:"547-省份数量",title:"省份数量",category:"Hot100 补充",difficulty:"中等",topic:"深度优先搜索",tags:["Hot100 补充","深度优先搜索","广度优先搜索","并查集","图"],sourcePath:"hot100/547.省份数量.py",lastUpdated:"2026-09-04",leetcodeUrl:"https://leetcode.cn/problems/number-of-provinces/",codePreview:`from typing import List
# [需二刷]：并查集 (Union-Find) 入门与连通分量计数母题
#
# 思路：
# 1. 封装符合单一职责原则 (SRP) 的并查集类 UnionFind。
# 2. 初始时每个城市为一个独立连通分量，parent[i] = i，连通分量数 count = n。
# 3. 遍历邻接矩阵的上三角部分 (j > i)，若 isConnected[i][j] == 1 则执行 union(i, j)。
# 4. union 操作中通过 find 查找根节点，若根不同则合并并将 count 减 1。
# 5. find 操作中采用路径压缩，使后续查找摊还时间接近 O(1)。
#
# 时间复杂度：O(n^2 * alpha(n)) ≈ O(n^2)，遍历上三角 n*(n-1)/2 次
# 空间复杂度：O(n)，并查集 parent 数组及递归栈
#
# 易错点/误区：
# 1. 列表初始化：必须使用 list(range(n))，不能使用不可变的 range(n)。
# 2. 根节点合并：合并时必须是 parent[root_x] = root_y，而非直接修改当前节点 parent[x] = y。
# 3. DFS 写法误区：dfs(i) 内部若再次写 for i in range(n) 会覆盖形参并导致 RecursionError。
# 4. 无向图对称性：只遍历上三角 j in range(i+1, n) 即可避免自身冗余合并与重复计算。
class UnionFind:
    def __init__(self, n: int):
        self.parent = list(range(n))
        self.count = n
    def find(self, x: int) -> int:
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    def union(self, x: int, y: int):
        root_x = self.find(x)
        root_y = self.find(y)
        if root_x != root_y:
            self.parent[root_x] = root_y
            self.count -= 1
class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        # 解法一：并查集法（推荐，可动态加边）
        n = len(isConnected)
        uf = UnionFind(n)
        for i in range(n):
            for j in range(i + 1, n):
                if isConnected[i][j] == 1:
                    uf.union(i, j)
        return uf.count
        # 解法二：DFS 染色遍历（备选）
        # n = len(isConnected)
        # visited = set()
        # province = 0
        # def dfs(i: int):
        #     visited.add(i)
        #     for j in range(n):
        #         if isConnected[i][j] == 1 and j not in visited:
        #             dfs(j)
        # for i in range(n):
        #     if i not in visited:
        #         dfs(i)
        #         province += 1
        # return province
if __name__ == '__main__':
    sol = Solution()
    assert sol.findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]]) == 2
    assert sol.findCircleNum([[1, 0, 0], [0, 1, 0], [0, 0, 1]]) == 3
    print("All tests passed successfully!")`},{id:"743",slug:"743-网络延迟时间",title:"网络延迟时间",category:"Hot100 补充",difficulty:"中等",topic:"深度优先搜索",tags:["Hot100 补充","深度优先搜索","广度优先搜索","图","最短路"],sourcePath:"hot100/743.网络延迟时间.py",lastUpdated:"2026-09-04",leetcodeUrl:"https://leetcode.cn/problems/network-delay-time/",codePreview:`from typing import List 
import heapq
from collections import deque
# [需二刷]：单源最短路径 Dijkstra 堆优化算法母题
#
# 思路：
# 1. 邻接表建图存储有向加权边 graph[u] = [(v, w), ...]
# 2. 维护距离数组 distance，初始全为无穷大，起点 distance[k] = 0
# 3. 最小堆 pq 维护 (当前到达耗时 d, 当前节点 u)，利用贪心思想每次探索耗时最短的节点
# 4. 出堆时若 d > distance[u] 则剪枝跳过，否则遍历邻居松弛距离并入堆
# 5. 最终最大延迟时间为 max(distance[1:])，若存在 inf 说明存在不可达节点返回 -1
#
# 时间复杂度：O(E log E) / O(E log V)，其中 E 为边数，V 为节点数
# 空间复杂度：O(V + E)，邻接表和堆及距离数组所需空间
#
# 易错点/误区：
# 1. 节点编号从 1 到 n，开数组需开 n + 1，最后求最值必须切片 distance[1:]，若直接 max(distance) 会将 distance[0] 的 inf 误计入。
# 2. heappush 时必须将耗时作为元组第一个元素 (d, u)，利用 Python 堆元组首项比对特性。
# 3. 忘记过期剪枝 if d > distance[u]: continue 会导致冗余松弛和超时。
class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        # 1. 构建邻接表
        graph = [[] for _ in range(n + 1)]
        for u, v, w in times:
            graph[u].append((v, w))
        # 2. 初始化距离数组与最小堆
        distance = [float('inf')] * (n + 1)
        distance[k] = 0
        pq = [(0, k)]
        # 3. Dijkstra 核心循环
        while pq:
            d, u = heapq.heappop(pq)
            # 过期剪枝
            if d > distance[u]:
                continue
            # 松弛相邻边
            for v, w in graph[u]:
                new_d = d + w
                if new_d < distance[v]:
                    distance[v] = new_d
                    heapq.heappush(pq, (new_d, v))
        # 4. 统计答案（跳过 0 号占位节点）
        ans = max(distance[1:])
        return ans if ans != float('inf') else -1
if __name__ == '__main__':
    sol = Solution()
    assert sol.networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2) == 2
    assert sol.networkDelayTime([[1,2,1]], 2, 1) == 1
    assert sol.networkDelayTime([[1,2,1]], 2, 2) == -1
    print("All tests passed successfully!")`},{id:"22",slug:"22-括号生成",title:"括号生成",category:"回溯",difficulty:"中等",topic:"有效性剪枝",tags:["回溯","有效性剪枝","字符串","动态规划","括号序列"],sourcePath:"hot100/10_回溯/22.括号生成.py",lastUpdated:"2026-09-01",leetcodeUrl:"https://leetcode.cn/problems/generate-parentheses/",codePreview:`# 📌 需二刷：经典回溯 + 剪枝（卡特兰数问题）
#
# 思路：用 DFS 枚举所有可能的括号组合，用「剪枝」保证合法性：
#   1. 左括号最多放 n 个（open_count < n 时才能加 '('）
#   2. 右括号数不能超过左括号数（close_count < open_count 时才能加 ')'）
#   满足以上两条，自然就不会出现非法串（如 ")()"、"())"）
#   当左右括号都用完时（各 n 个），收集答案
#
# 时间 O(Catalan(n))，即卡特兰数，约等于 O(4^n / √n)，空间 O(n)（递归栈深度）
#
# ⚠️ 易错点/误区：
# 1. 右括号约束写 close_count < n：会生成 "())( 这种右括号先于左括号出现的非法串
#    正确：close_count < open_count，保证右括号出现时必有对应的左括号
# 2. 忘记 return：终止 append 后继续执行会重复递归下去，产生重复答案或越界
# 3. 字符串拼接用 join 而非 +：join 是分隔列表的，字符串追加直接用 + 或 path + '(' 即可
# 4. DFS 签名缺少冒号/拼写：Python 函数定义末尾忘记加冒号，或变量名 open_count 拼成 opend_count
# 5. path 列表回溯写法：若用列表回溯，递归后必须 path.pop() 撤销选择
from typing import List
class Solution:
    # 解法一：字符串参数隐式回溯（推荐，代码简洁）
    def generateParenthesis(self, n: int) -> List[str]:
        res = []
        def dfs(open_count: int, close_count: int, current_string: str):
            # 终止：左右括号都用完 → 找到一个合法答案
            if open_count == n and close_count == n:
                res.append(current_string)
                return
            # 分支1：还能加左括号 → 直接加左括号
            if open_count < n:
                dfs(open_count + 1, close_count, current_string + '(')
            # 分支2：右括号数 < 左括号数 → 才能加右括号（关键剪枝，保证合法性）
            if close_count < open_count:
                dfs(open_count, close_count + 1, current_string + ')')
        dfs(0, 0, '')
        return res
    # 解法二：显式列表 path 显式回溯（标准回溯模板）
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
        return result`},{id:"32",slug:"32-最长有效括号",title:"最长有效括号",category:"动态规划",difficulty:"困难",topic:"栈 / DP (跨越匹配)",tags:["动态规划","栈 / DP (跨越匹配)","栈","字符串","括号序列"],sourcePath:"hot100/15_动态规划/32.最长有效括号.py",lastUpdated:"2026-09-01",leetcodeUrl:"https://leetcode.cn/problems/longest-valid-parentheses/",codePreview:`class Solution:
    def longestValidParentheses(self, s: str) -> int:
        n = len(s)
        if n < 2:
            return 0
        dp = [0] * n
        for i in range(1, n):
            if s[i] == ')':
                if s[i - 1] == '(':
                    # 情况 1：形如 ...()
                    dp[i] = (dp[i - 2] if i >= 2 else 0) + 2
                else:
                    # 情况 2：形如 ...))
                    pre_idx = i - dp[i - 1] - 1
                    if pre_idx >= 0 and s[pre_idx] == '(':
                        dp[i] = dp[i - 1] + 2 + (dp[pre_idx - 1] if pre_idx >= 1 else 0)
        return max(dp)`}];export{e as a,i as b,o as c,t as d,n as e};
