const n={"46-全排列":{codePreview:`# 📌 需二刷：回溯法求全排列（回溯经典入门题）
#
# 思路：回溯法（决策树遍历）
#   - 每一层从 nums 中选一个「还没被选过」的数加入 path
#   - 当 path 长度 == nums 长度时，说明排列完成，收集结果
#   - 递归返回后撤销选择（pop），尝试下一个分支
#
# 时间 O(n! * n)，空间 O(n)
#   - n! 个排列，每个排列复制到 result 需要 O(n)
#   - 递归栈深度 O(n)
#
# ⚠️ 易错点/误区：
# 1. result.append(path) 存的是引用，path 变了 result 也变 → 必须用 path.copy()
# 2. 撤销选择是 path.pop()，不是 path.remove() 或 path.reverse()
# 3. 判断「是否已选过」要在 append 之前，选过就 continue 跳过
#
# 💡 面试推荐写法：
#   本题用 \`if num in path\` 判断是否选过，简洁直观，面试中推荐此写法。
#   如果 nums 很大或有重复元素，可改用 used[] 布尔数组标记，效率更高：
#     used = [False] * len(nums)
#     for i in range(len(nums)):
#         if used[i]: continue
#         used[i] = True
#         path.append(nums[i])
#         backtrack()
#         path.pop()
#         used[i] = False
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        path = []       # 当前路径（已做的选择）
        result = []     # 收集所有排列结果
        def backtrack(nums):
            # 终止条件：path 中的元素个数等于 nums 长度，说明排列完成
            if len(path) == len(nums):
                result.append(path.copy())  # ⚠️ 必须用 copy，否则存的是引用
                return
            # 遍历所有可选数字
            for num in nums:
                if num in path:     # 已经选过的数字，跳过
                    continue
                path.append(num)    # 做选择
                backtrack(nums)     # 递归进入下一层
                path.pop()          # 撤销选择（回溯）
        backtrack(nums)
        return result`,statement:`给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

 

示例 1：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

示例 2：

输入：nums = [0,1]
输出：[[0,1],[1,0]]

示例 3：

输入：nums = [1]
输出：[[1]]

 

提示：

- 1 <= nums.length <= 6

- -10 <= nums[i] <= 10

- nums 中的所有整数 互不相同`},"78-子集":{codePreview:`# 📌 需二刷：回溯法求子集（与全排列对比理解 startIndex）
#
# 思路：回溯树的每个节点都是一个合法子集，进入 backtrack 时先收集当前 path，
#       然后从 startIndex 开始向后选择，保证不往回选，避免重复子集。
# 时间 O(n * 2^n)，空间 O(n)（递归栈深度）
#
# ⚠️ 易错点/误区：
# 1. 不能用 \`if num in path\` 去重（那是全排列的做法），子集用 startIndex 去重
# 2. 递归时传 i+1 而不是 startIndex+1，否则会重复选择元素
# 3. 收集结果必须用 path.copy()，否则 result 中所有引用指向同一个 path
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        result = []
        path = []
        def backtrack(startIndex):
            # 每个节点都是合法子集，进入就收集（包括空集）
            result.append(path.copy())
            # 从 startIndex 开始选，保证只往后选，不产生重复子集
            for i in range(startIndex, len(nums)):
                path.append(nums[i])    # 做选择
                backtrack(i + 1)        # 递归，下一层从 i+1 开始
                path.pop()             # 撤销选择
        backtrack(0)
        return result`,statement:`给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

 

示例 1：

输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

示例 2：

输入：nums = [0]
输出：[[],[0]]

 

提示：

- 1 <= nums.length <= 10

- -10 <= nums[i] <= 10

- nums 中的所有元素 互不相同`},"17-电话号码的字母组合":{codePreview:`# 📌 需二刷：回溯法 —— 每层递归的选择列表不同（由当前数字决定）
#
# 思路：每个数字对应一组字母，用 index 控制当前处理第几个数字，
#       每层递归遍历该数字对应的字母，选择→递归→撤销
# 时间 O(3^m × 4^n)，m 是对应 3 个字母的数字个数，n 是对应 4 个字母的数字个数
# 空间 O(len(digits))，递归栈深度
#
# ⚠️ 易错点/误区：
# 1. form(0) 不是 form(len(digits))！index 从 0 开始，表示从第一个数字开始处理
# 2. for 循环遍历的是 phone[digits[index]]（当前数字的字母），不是 digits 本身
# 3. 不需要像全排列那样判断 "char not in path"，因为不同层的字母可以重复
# 4. 空字符串判断放在递归函数外面，避免每次递归都重复检查
# 5. 收集结果时用 ''.join(path) 拼成字符串，而不是 path.copy()
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        # 边界情况：空字符串直接返回空列表
        if not digits:
            return []
        # 数字到字母的映射
        phone = {
            "2": "abc", "3": "def", "4": "ghi", "5": "jkl",
            "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"
        }
        path = []    # 当前组合路径
        result = []  # 收集所有组合
        def form(index):
            # 终止条件：处理完所有数字，收集结果
            if index == len(digits):
                result.append(''.join(path))  # 拼成字符串
                return
            # 取出当前数字对应的字母（每层的选择列表不同！）
            letters = phone[digits[index]]
            for char in letters:
                path.append(char)    # 选择
                form(index + 1)      # 递归到下一个数字
                path.pop()           # 撤销（回溯）
        form(0)  # 从第 0 个数字开始
        return result`,statement:`给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

 

示例 1：

输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]

示例 2：

输入：digits = "2"
输出：["a","b","c"]

 

提示：

- 1 <= digits.length <= 4

- digits[i] 是范围 ['2', '9'] 的一个数字。`},"39-组合总和":{codePreview:`# 📌 需二刷：回溯 + 剪枝（可重复选元素的组合问题）
#
# 面试推荐方法：排序 + 回溯 + 剪枝
# 思路：对 candidates 排序后，用回溯框架从每个位置开始尝试选数，
#       每选一个数就从 target 中减去，直到 target == 0 收集结果。
#       由于同一个数可以重复使用，递归时传 i 而不是 i+1。
# 时间 O(n^(target/min))，空间 O(target/min)
#
# ⚠️ 易错点/误区：
# 1. 递归传 i 不是 i+1 —— 因为同一个数可以重复选
#    对比 78.子集 传 i+1（每个数只能选一次）
# 2. 剪枝 if candidates[i] > target: break 必须放在选择之前
#    放在 pop() 之后就白白递归了一次，浪费时间
# 3. path.copy() 别忘括号！path.copy 不加括号只是引用，不会真正复制
# 4. break 不是 continue —— 排序后当前数太大，后面更大，全部跳过
class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        path = []
        result = []
        # 排序是剪枝的前提：保证后面的数 >= 当前数
        candidates.sort()
        def method(start, target):
            # 终止条件：凑齐了，收集当前路径
            if target == 0:
                result.append(path.copy())
                return 
            for i in range(start, len(candidates)):
                # 剪枝：当前数已经比剩余 target 大，后面的更大，直接跳出
                if candidates[i] > target:
                    break
                path.append(candidates[i])          # 做选择
                method(i, target - candidates[i])   # 递归（传 i，允许重复选）
                path.pop()                          # 撤销选择（回溯）
        method(0, target)
        return result`,statement:`给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。

candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。 

对于给定的输入，保证和为 target 的不同组合数少于 150 个。

 

示例 1：

输入：candidates = [2,3,6,7], target = 7
输出：[[2,2,3],[7]]
解释：
2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
7 也是一个候选， 7 = 7 。
仅有这两种组合。

示例 2：

输入: candidates = [2,3,5], target = 8
输出: [[2,2,2,2],[2,3,3],[3,5]]

示例 3：

输入: candidates = [2], target = 1
输出: []

 

提示：

- 1 <= candidates.length <= 30

- 2 <= candidates[i] <= 40

- candidates 的所有元素 互不相同

- 1 <= target <= 40`},"22-括号生成":{codePreview:`# 📌 需二刷：经典回溯 + 剪枝（卡特兰数问题）
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
        return result`,statement:`数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

 

示例 1：

输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]

示例 2：

输入：n = 1
输出：["()"]

 

提示：

- 1 <= n <= 8`},"79-单词搜索":{codePreview:`# 📌 需二刷：DFS + 回溯在二维网格上的应用
#
# 思路：遍历 board 每个格子作为起点，用 DFS 沿上下左右四个方向
#       逐个匹配 word 中的字母，走不通就回溯（撤销 visited 标记）
# 时间 O(m * n * 4^L)，空间 O(m * n)  （L = word 长度）
#
# ⚠️ 易错点/误区：
# 1. 字母匹配应统一在 dfs 入口检查 board[i][j] == word[index]
#    不要在 dfs 内部检查 word[index+1]，会导致最后一个字母时越界
# 2. visited 标记必须在 for 循环结束后撤销（回溯），否则会影响其他路径
# 3. 边界检查用 0 <= ni < m 而不是 ni > m，因为下标从 0 开始
# 4. dfs 返回值要用 if dfs(...): return True 接住，否则找到路径也传不回去
class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        # 上、下、右、左 四个方向的坐标偏移量
        direction = [(-1,0),(1,0),(0,1),(0,-1)]
        m,n = len(board), len(board[0])
        # 访问矩阵，防止同一条路径中重复使用同一个格子
        visited = [[False]*n for _ in range(m)]
        def dfs(i,j,index):
            # 当前格子字母不匹配，剪枝
            if board[i][j] != word[index]:
                return False
            # 所有字母都匹配完了，找到了合法路径
            if index == len(word) - 1:
                return True
            # 标记当前格子为已访问
            visited[i][j] = True
            # 尝试上下左右四个方向
            for di,dj in direction:
                ni,nj = i+di,j+dj
                # 新坐标在边界内且未被访问过
                if 0 <= ni < m and 0 <= nj < n and not visited[ni][nj]:
                    if dfs(ni,nj,index+1):
                        return True
            # 回溯：撤销标记，让其他路径可以使用这个格子
            visited[i][j] = False
            return False
        # 遍历 board 每个格子作为 DFS 起点
        for i in range(m):
            for j in range(n):
                if dfs(i, j, 0):
                    return True
        return False`,statement:`给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

 

示例 1：

输入：board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word = "ABCCED"
输出：true

示例 2：

输入：board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word = "SEE"
输出：true

示例 3：

输入：board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word = "ABCB"
输出：false

 

提示：

- m == board.length

- n = board[i].length

- 1 <= m, n <= 6

- 1 <= word.length <= 15

- board 和 word 仅由大小写英文字母组成

 

进阶：你可以使用搜索剪枝的技术来优化解决方案，使其在 board 更大的情况下可以更快解决问题？`},"131-分割回文串":{codePreview:`from typing import List
class Solution:
    def partition(self, s: str) -> List[List[str]]:
        # 📌 需二刷：切分模式回溯（39 组合总和家族）+ 回文判断做剪枝开关
        #
        # 思路：把字符串切成若干段，每段独立必须是回文 = 典型切分枚举问题。
        #       DFS(start) 从 start 位置开始，枚举 end ∈ [start, n-1] 作为
        #       当前这一段的右端；若 s[start:end+1] 是回文则加入 path，
        #       递归到 end+1；返回时 path.pop() 撤销；start == n 时整段切完，
        #       收集一份 path 的副本（path 本身后续仍会被回溯修改）。
        # 时间 O(n·2ⁿ)：2^(n-1) 种切法 × 每次回文判断最多 O(n)；
        #                若预处理回文 DP 表可把「判断」降为 O(1)，仍乘组合因子。
        # 空间 O(n²)：递归深度为 n（每层至少切一个字符）；
        #             若加回文预处理表则额外 n×n，此处未加。
        #
        # ⚠️ 易错点/误区（本轮真实踩过）：
        # 1. 【犯过】终止条件写成 if start == n-1：会提前一拍停止，
        #    漏掉最后那个字符；正确：start == n（越过末尾才算切完所有字符）。
        # 2. 【犯过】切片写成 s[start:end]：Python 切片是左闭右开，
        #    会丢掉 s[end] 这个字符；正确：s[start:end+1]。
        # 3. 【犯过】下一层 DFS 写成 dfs(start+1)：start 本身未前进时
        #    start+1 会和刚切完的段发生重叠；正确：dfs(end+1)，正好跳过已用段。
        # 4. 【犯过】res.append(path.copy)：漏括号拿到的是方法对象不是列表；
        #    正确：res.append(path.copy())  或 res.append(path[:]) / res.append(list(path))。
        # 5. 【犯过】return 放在 if 外 / 整体遗漏 return res：
        #    前者会让 dfs 每次都立刻 return，for 循环永不执行；
        #    后者会让调用方拿到 None（189/31 同款缩进 + 遗漏返回值组合坑）。
        res = []      # 存所有合法切法的大列表
        path = []     # 当前这一条切法（回溯共享，append/pop 严格配对）
        n = len(s)
        def dfs(start):
            # 终止条件：所有字符切完 → 收集 path 副本
            if start == n:
                res.append(path.copy())
                return
            # 枚举当前这一段的右端 end
            for end in range(start, n):
                # 核心剪枝：这段是回文才进下一层
                if self.is_pal(s, start, end):
                    path.append(s[start:end + 1])   # 切片右边界必须 end+1
                    dfs(end + 1)                    # 下一段从 end+1 开始（别写 start+1）
                    path.pop()                      # 回溯撤销，和 append 配对
        dfs(0)           # 入口：从第 0 个字符开始切
        return res       # 不要漏：最终返回大列表
    def is_pal(self, s, l, r):
        while l < r:
            if s[l] != s[r]:
                return False
            l += 1
            r -= 1
        return True`,statement:`给你一个字符串 s，请你将 s 分割成一些 子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。

 

示例 1：

输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]

示例 2：

输入：s = "a"
输出：[["a"]]

 

提示：

- 1 <= s.length <= 16

- s 仅由小写英文字母组成`},"51-n-皇后":{codePreview:`class Solution:
    # 📌 需二刷：回溯 + 三集合冲突检测（列、主副对角线）
    #
    # 思路：逐行放置皇后，每行枚举所有列，用三个集合 O(1) 判断冲突，
    #       无冲突则放置并递归下一行，回溯时撤销放置和集合标记。
    # 时间 O(n!)：第 i 行最多 n-i 种选择，剪枝后仍为阶乘级
    # 空间 O(n)：递归栈深度 + 三个集合各存最多 n 个元素；棋盘占 O(n²) 辅助存储
    #
    # ⚠️ 易错点/误区：
    # 1. 收集答案用 board.copy()（浅拷贝）→ 内层行列表共享引用，所有方案会被最后一次回溯覆盖。
    #    ✅ 正确：用 [''.join(row) for row in board]，生成全新的字符串列表，天然独立且匹配输出格式。
    # 2. 冲突检查误写 board[row][col] not in used_cols → 字符和列号类型不匹配，永远查不到。
    #    ✅ 正确：用 col、row-col、row+col 三个「坐标标识」去对应集合中检查。
    # 3. 对角线标识混淆：主对角线↘（斜率1）是 row-col，副对角线↙（斜率-1）是 row+col，搞反会整题错。
    # 4. 回溯时 add 和 remove 必须严格对称（顺序和参数都要对应），漏删会导致后续冲突判断被污染。
    def solveNQueens(self, n: int) -> List[List[str]]:
        res = []                                    # 最终结果集：所有合法方案
        board = [['.'] * n for _ in range(n)]       # 当前棋盘状态，二维字符列表便于回溯修改
        used_cols = set()                           # 已被占用的「列号」集合
        used_diag1 = set()                          # 已被占用的主对角线↘：同线 row-col 值相等
        used_diag2 = set()                          # 已被占用的副对角线↙：同线 row+col 值相等
        def dfs(row:int):
            # 终止条件：所有 n 行都已放完皇后，收集当前方案
            if row == n:
                # 二维字符列表 → 字符串列表（符合题目输出格式 + 深拷贝隔离引用）
                res.append([''.join(row) for row in board])
                return
            # 当前行尝试把皇后放在 col = 0 ~ n-1 的每一列
            for col in range(n):
                # 三集合联合判断：列、主对角线、副对角线都无冲突才放置
                if col not in used_cols and (row - col) not in used_diag1 and (row + col) not in used_diag2:
                    # ──── 做选择：放皇后 + 标记三个集合 ────
                    board[row][col] = 'Q'
                    used_cols.add(col)
                    used_diag1.add(row - col)
                    used_diag2.add(row + col)
                    # 递归处理下一行
                    dfs(row + 1)
                    # ──── 撤销选择（回溯）：严格与「做选择」步骤对称 ────
                    board[row][col] = '.'
                    used_cols.remove(col)
                    used_diag1.remove(row - col)
                    used_diag2.remove(row + col)
        dfs(0)  # 从第 0 行开始放置
        return res`,statement:`按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。

n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。

每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

 

示例 1：

输入：n = 4
输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
解释：如上图所示，4 皇后问题存在两个不同的解法。

示例 2：

输入：n = 1
输出：[["Q"]]

 

提示：

- 1 <= n <= 9`}};export{n as categoryContent};
