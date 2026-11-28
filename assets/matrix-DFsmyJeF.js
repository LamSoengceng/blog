const n={"73-矩阵置零":{codePreview:`# =============================================
# ✅ 方法一：标记法（面试推荐，简洁易懂）
# =============================================
# 思路：用两个 set 记录哪些行/列需要置零，再统一处理
# 时间 O(m*n)，空间 O(m+n)
#
# ⚠️ 易错点/误区：
# 1. 条件是 or 不是 and：行或列有0就要置零
# 2. == 是比较，= 才是赋值
# 3. 遍历范围是矩阵大小，不是 set 的大小
class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        m, n = len(matrix), len(matrix[0])
        rows = set()
        cols = set()
        # 第一遍：记录哪些行/列有 0
        for i in range(m):
            for j in range(n):
                if matrix[i][j] == 0:
                    rows.add(i)
                    cols.add(j)
        # 第二遍：根据标记置零
        for i in range(m):
            for j in range(n):
                if i in rows or j in cols:
                    matrix[i][j] = 0
# =============================================
# 📌 需二刷：方法二——常量空间（进阶）
# =============================================
# 思路：用矩阵的第 0 行当"列标记"，第 0 列当"行标记"，省掉额外 set
# 时间 O(m*n)，空间 O(1)
#
# 关键：第 0 行和第 0 列本身可能也有 0，所以需要一个额外变量 col0
#       置零时必须从后往前，因为第 0 行/列是"标记区"，要最后才能动
#
# ⚠️ 易错点/误区：
# 1. matrix[0][0] 同时属于第0行和第0列，只能标记一个，所以需要 col0 单独标记第0列
# 2. 置零必须从后往前！如果从前往后会破坏第 0 行的列标记
# 3. 标记阶段 j 从 1 开始（第0列用 col0 单独处理）
class Solution2:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        m, n = len(matrix), len(matrix[0])
        col0 = False  # 单独标记第 0 列是否需要置零
        # 第一步：扫描矩阵，在第 0 行/列做标记
        for i in range(m):
            if matrix[i][0] == 0:
                col0 = True           # 第 0 列本身有 0
            for j in range(1, n):     # 从第 1 列开始（第 0 列用 col0 处理）
                if matrix[i][j] == 0:
                    matrix[i][0] = 0  # 行标记：第 i 行需要置零
                    matrix[0][j] = 0  # 列标记：第 j 列需要置零
        # 第二步：从后往前，根据标记置零（保护第 0 行/列的标记不被提前破坏）
        for i in range(m - 1, -1, -1):
            for j in range(n - 1, 0, -1):   # 注意：到 1 为止，第 0 列单独处理
                if matrix[i][0] == 0 or matrix[0][j] == 0:
                    matrix[i][j] = 0
            if col0:                         # 最后处理第 0 列
                matrix[i][0] = 0`,statement:`给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。

 

示例 1：

输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]
输出：[[1,0,1],[0,0,0],[1,0,1]]

示例 2：

输入：matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
输出：[[0,0,0,0],[0,4,5,0],[0,3,1,0]]

 

提示：

- m == matrix.length

- n == matrix[0].length

- 1 <= m, n <= 200

- -2^31 <= matrix[i][j] <= 2^31 - 1

 

进阶：

- 一个直观的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。

- 一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。

- 你能想出一个仅使用常量空间的解决方案吗？`},"48-旋转图像":{codePreview:`# 📌 需二刷：原地旋转的四元素循环交换 + 遍历范围控制
#
# 思路：逐层处理，每次对四个对称位置做循环交换，只遍历左上角 ~1/4 区域
# 时间 O(n²)，空间 O(1)
#
# ⚠️ 易错点/误区：
# 1. 映射公式是 (i,j)→(j,n-1-i)，不是 (j,n-i)，注意 0-indexed 要减 1
# 2. 遍历范围必须缩小到 ~1/4，否则同一组位置会被重复旋转导致结果错误
#    i: n//2, j: (n+1)//2（向上取整处理奇数 n 中心行多一个元素的情况）
# 3. 四步赋值要从 loc4 开始存 tmp，逆着循环链赋值，否则值会被覆盖
class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        n = len(matrix[0])
        # 只遍历左上角 ~1/4 区域，每次处理 4 个对称位置
        for i in range(n // 2):
            for j in range((n + 1) // 2):
                # 四个位置的循环链：
                # loc1 (i,j) → loc2 (j,n-1-i) → loc3 (n-1-i,n-1-j) → loc4 (n-1-j,i) → loc1
                tmp = matrix[n-1-j][i]              # 暂存 loc4
                matrix[n-1-j][i] = matrix[n-1-i][n-1-j]    # loc4 ← loc3
                matrix[n-1-i][n-1-j] = matrix[j][n-1-i]    # loc3 ← loc2
                matrix[j][n-1-i] = matrix[i][j]             # loc2 ← loc1
                matrix[i][j] = tmp                           # loc1 ← tmp(原 loc4)`,statement:`给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。

你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

 

示例 1：

输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[[7,4,1],[8,5,2],[9,6,3]]

示例 2：

输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

 

提示：

- n == matrix.length == matrix[i].length

- 1 <= n <= 20

- -1000 <= matrix[i][j] <= 1000`},"54-螺旋矩阵":{codePreview:`class Solution:
    # 📌 需二刷：四边界收缩模拟（维护循环不变量）
    #
    # 思路：用 上/下/左/右 四个边界圈定「未遍历区域」，每轮按 顶行→右列→底行→左列
    #       顺时针走一圈，走完一条边立即收缩对应边界。每条边遍历前用 if 守卫检查
    #       「边界未交叉」，防止剩单行/单列时被重复遍历。
    # 时间 O(m×n)：每个元素恰好访问一次；空间 O(1)（不计输出数组）
    #
    # ⚠️ 易错点/误区：
    # 1. 竖直方向行列下标写反：matrix[right_bound][i] ❌ → matrix[i][right_bound] ✅
    #    水平走变的是列 j，竖直走变的是行 i —— 变化的下标永远放第一维。
    #    后果：取错元素且凑不满 m*n 个 → while 死循环（本次实战踩坑）
    # 2. 底行、左列前必须重新检查边界：走完右列后可能只剩一行/一列，
    #    不加 if 守卫会原路重复打印（单行 [[1,2,3]] 必挂）
    # 3. 反向 range 左边界：range(right, left-1, -1) 才能包含 left；
    #    写成 left 会漏掉最左元素（range 左闭右开）
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        m, n = len(matrix), len(matrix[0])
        upper_bound, lower_bound = 0, m-1        # 未遍历区域的上下边界（闭区间）
        left_bound, right_bound = 0, n-1         # 未遍历区域的左右边界（闭区间）
        res = []
        while len(res) < m * n:                  # 终止：所有元素都已收集
            # ① 顶行：从左到右，走完上边界下移
            if upper_bound <= lower_bound:
                for j in range(left_bound, right_bound + 1):
                    res.append(matrix[upper_bound][j])
                upper_bound += 1
            # ② 右列：从上到下（变化的行号 i 放第一维！），走完右边界左移
            if left_bound <= right_bound:
                for i in range(upper_bound, lower_bound + 1):
                    res.append(matrix[i][right_bound])
                right_bound -= 1
            # ③ 底行：从右到左（反向 range 终点写到 left-1 才能含 left）
            if upper_bound <= lower_bound:       # 守卫：防单行重复遍历
                for j in range(right_bound, left_bound - 1, -1):
                    res.append(matrix[lower_bound][j])
                lower_bound -= 1
            # ④ 左列：从下到上，走完左边界右移
            if left_bound <= right_bound:        # 守卫：防单列重复遍历
                for i in range(lower_bound, upper_bound - 1, -1):
                    res.append(matrix[i][left_bound])
                left_bound += 1
        return res`,statement:`给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

 

示例 1：

输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]

示例 2：

输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]

 

提示：

- m == matrix.length

- n == matrix[i].length

- 1 

- -100`},"240-搜索二维矩阵-ii":{codePreview:`class Solution:
    # 📌 需二刷：Z 字形搜索（右上角出发，每步排除一行或一列）
    #
    # 思路：右上角的独特性质——往左变小、往下变大，两个方向单调性相反。
    #       所以每次比较必然能排除一整行或一整列：
    #         cur > target → 这一列下面只会更大 → 整列作废，左移
    #         cur < target → 这一行左边只会更小 → 整行作废，下移
    #       最多 m+n-1 步出结果，绝不回头、绝不犹豫。
    # 时间 O(m+n)，空间 O(1)。对比暴力 O(m×n)、逐行二分 O(m·logn)，此法最优。
    #
    # ⚠️ 易错点/误区：
    # 1. 指针必须真的移动：首版只更新 tmp 读数、row/col 从未变过 —— 行走类题的
    #    「状态」是坐标本身，读出的值只是快照，指针不动等于原地打转（实战踩坑①）
    # 2. 方向走反：cur < target 该往「更大」的方向（↓），写成了往左；
    #    cur > target 该往「更小」的方向（←），写成了往上 —— 记法：缺哪边往哪边走
    # 3. Python 负索引静默回绕：matrix[row-1] 在 row=0 时悄悄取最后一行，不报错
    #    但永远找不到答案 → 死循环。越界必须靠 while 条件主动拦截（实战踩坑②）
    # 4. 终止 off-by-one：合法行号 0~m-1，while 写 row <= m 会在 row==m 时放行
    #    → IndexError。正确写法卡在「合法范围之外一格」，与 col >= 0 对称（实战踩坑③）
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        m = len(matrix)
        n = len(matrix[0])
        row = 0                 # 从顶行开始
        col = n - 1             # 从最右列开始 → 右上角入口
        while row <= m - 1 and col >= 0:   # 走出下边界/左边界 → target 不存在
            cur = matrix[row][col]
            if cur == target:
                return True
            elif cur < target:  # 当前太小 → 需要更大的数 → 下移（排除整行）
                row += 1
            elif cur > target:  # 当前太大 → 需要更小的数 → 左移（排除整列）
                col -= 1
        return False`,statement:`编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：

- 每行的元素从左到右升序排列。

- 每列的元素从上到下升序排列。

 

示例 1：

输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
输出：true

示例 2：

输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
输出：false

 

提示：

- m == matrix.length

- n == matrix[i].length

- 1 <= n, m <= 300

- -10^9 <= matrix[i][j] <= 10^9

- 每行的所有元素从左到右升序排列

- 每列的所有元素从上到下升序排列

- -10^9 <= target <= 10^9`}};export{n as categoryContent};
