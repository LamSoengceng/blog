const n={"94-二叉树的中序遍历":{codePreview:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
# --- 递归方法 ---
# class Solution:
#     def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
#         result = []
#         def dfs(node):
#             if not node: return         # 终止条件：空节点
#             dfs(node.left)              # 1. 先递归左子树
#             result.append(node.val)     # 2. 记录当前节点（根在中间）
#             dfs(node.right)             # 3. 再递归右子树
#         dfs(root)
#         return result
# ═══════════════════════════════════════════
# 解法二：迭代（用栈模拟递归）
# 思路：不断"向左走到底→弹出记录→转向右子树"
# 时间 O(n)  空间 O(n)
# ═══════════════════════════════════════════
# --- 迭代方法：栈 ---
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        result = []
        stack = []
        node = root
        while node or stack:               # 还有节点未处理就继续
            while node:                    # 一路向左走到底
                stack.append(node)         # 沿途节点全部压栈
                node = node.left
            node = stack.pop()             # 到底了，弹出最左节点
            result.append(node.val)        # 记录值
            node = node.right              # 转向右子树，重复上述过程
        return result`,statement:`给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。

 

示例 1：

输入：root = [1,null,2,3]
输出：[1,3,2]

示例 2：

输入：root = []
输出：[]

示例 3：

输入：root = [1]
输出：[1]

 

提示：

- 树中节点数目在范围 [0, 100] 内

- -100 <= Node.val <= 100

 

进阶: 递归算法很简单，你可以通过迭代算法完成吗？`},"104-二叉树的最大深度":{codePreview:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
# 思路：递归求深度，当前节点深度 = max(左子树深度, 右子树深度) + 1
# 时间 O(n)，空间 O(h)，h 为树高
#
# ⚠️ 易错点/误区：
# 1. 别忘了 +1（当前节点自己也算一层）
# 2. 类方法递归调用要用 self.maxDepth()，不能直接写 maxDepth()
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root: return 0                        # 空节点深度为 0
        left = self.maxDepth(root.left)              # 左子树深度
        right = self.maxDepth(root.right)            # 右子树深度
        return max(left, right) + 1                  # 取更深的 + 当前层`,statement:`给定一个二叉树 root ，返回其最大深度。

二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。

 

示例 1：

 

输入：root = [3,9,20,null,null,15,7]
输出：3

示例 2：

输入：root = [1,null,2]
输出：2

 

提示：

- 树中节点的数量在 [0, 10^4] 区间内。

- -100 <= Node.val <= 100`},"226-翻转二叉树":{codePreview:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
# 思路：翻转 = 每个节点的左右孩子互换，然后递归翻转子树
# 时间 O(n)，空间 O(h)，h 为树高（递归栈深度）
#
# ⚠️ 易错点/误区：
# 1. 翻转是交换节点引用（node.left, node.right 互换），不是交换 .val
# 2. None 节点也能参与交换，不需要对"一个孩子为 None"单独处理
# 3. Python 可以用 a, b = b, a 一行完成交换，不需要 tmp 变量
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        # 递归
        def changeposition(node):
            if not node: return node               # base case：空节点直接返回
            node.left, node.right = node.right, node.left  # 交换左右孩子
            changeposition(node.left)              # 递归翻转左子树
            changeposition(node.right)             # 递归翻转右子树
            return node
        return changeposition(root)`,statement:`给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。

 

示例 1：

输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]

示例 2：

输入：root = [2,1,3]
输出：[2,3,1]

示例 3：

输入：root = []
输出：[]

 

提示：

- 树中节点数目范围在 [0, 100] 内

- -100 <= Node.val <= 100`},"101-对称二叉树":{codePreview:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
# 📌 需二刷：栈存配对节点 / 递归对称比较
#
# 思路：对称 = 左子树和右子树互为镜像
#       每次比较一对节点（左的左 配 右的右，左的右 配 右的左）
# 时间 O(n)，空间 O(n)
#
# ⚠️ 易错点/误区：
# 1. 栈方法中 while 条件不能写 while root.left and root.right（永远不变，死循环），应该写 while stack
# 2. 栈里每次 pop 两个、append 两个一组，栈元素有顺序不是"并列"
# 3. 不能只比较值不比较结构：跳过 None 会丢失结构信息，导致结构不同但值相同的树误判为对称
# 4. 递归调用必须 return，不 return 结果会丢失
# 5. 递归中最后一步要用 and 连接两个子问题，两个都对称才是真的对称
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        # ========== 方法一：栈（迭代） ==========
        # 核心：栈里成对存入需要比较的节点，每次弹出一对来比较
        # if not root: return True
        # stack = [root.left, root.right]       # 初始放入第一对
        # while stack:                          # 栈不空就继续
        #     nodeR = stack.pop()               # 后进先出，先弹右
        #     nodeL = stack.pop()               # 再弹左
        #     if not nodeL and not nodeR:       # 都是 None → 这一对 OK，继续
        #         continue
        #     if not nodeL or not nodeR:        # 一个 None 一个不是 → 不对称
        #         return False
        #     if nodeL.val != nodeR.val:        # 值不等 → 不对称
        #         return False
        #     stack.append(nodeL.left)          # 外侧对：左的左 配 右的右
        #     stack.append(nodeR.right)
        #     stack.append(nodeL.right)         # 内侧对：左的右 配 右的左
        #     stack.append(nodeR.left)
        # return True
        # ========== 方法二：递归 ==========
        # 核心：check(left, right) 判断两个节点是否互为镜像
        def check(left, right) -> bool:
            if not left and not right:          # 都是 None → 对称 ✓
                return True
            if not left or not right:           # 一个 None 一个不是 → 不对称 ✗
                return False
            if left.val != right.val:           # 值不等 → 不对称 ✗
                return False
            # 外侧对称 且 内侧对称 → 才是真正对称
            return check(left.left, right.right) and check(left.right, right.left)
        return check(root.left, root.right)`,statement:`给你一个二叉树的根节点 root ， 检查它是否轴对称。

 

示例 1：

输入：root = [1,2,2,3,4,4,3]
输出：true

示例 2：

输入：root = [1,2,2,null,3,null,3]
输出：false

 

提示：

- 树中节点数目在范围 [1, 1000] 内

- -100 <= Node.val <= 100

 

进阶：你可以运用递归和迭代两种方法解决这个问题吗？`},"543-二叉树的直径":{codePreview:`#
#
# [543] 二叉树的直径
#
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
# 📌 需二刷：在求深度的递归中"顺便"更新全局最大直径
#
# 思路：直径 = 某个节点的左子树深度 + 右子树深度 + 2（边数）
#       在递归求深度时，顺便用 self.ans 记录经过每个节点的最大路径长度
# 时间 O(n)，空间 O(h)，h 为树高
#
# ⚠️ 易错点/误区：
# 1. 直径不一定经过根节点！所以不能只算根的左深度+右深度
# 2. None 返回 -1（边数计算）时，直径公式要 +2；None 返回 0（节点数计算）时，直径公式不用 +2
# 3. 深度用 max(左,右)+1，直径用 左+右+2，别搞混
# 4. 函数返回的是"深度"，直径通过 self.ans 在过程中更新，不能用返回值传递直径
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        # ========== 方法一：None 返回 -1（按边数算深度） ==========
        self.ans = 0
        def caldepth(node):
            if not node: return -1                       # 空节点深度为 -1
            left = caldepth(node.left)                   # 左子树深度
            right = caldepth(node.right)                 # 右子树深度
            self.ans = max(self.ans, left + right + 2)   # 更新直径（+2 因为左右各多一条边到当前节点）
            return max(left, right) + 1                  # 返回当前节点深度
        caldepth(root)
        return self.ans
        # ========== 方法二：None 返回 0（按节点数算深度） ==========
        # self.ans = 0
        # def caldepth(node):
        #     if not node: return 0                      # 空节点深度为 0
        #     left = caldepth(node.left)
        #     right = caldepth(node.right)
        #     self.ans = max(self.ans, left + right)     # 不用 +2，因为深度多算了 1
        #     return max(left, right) + 1
        #
        # caldepth(root)
        # return self.ans
        # ========== 方法三：nonlocal（避免污染类属性） ==========
        # ans = 0
        # def caldepth(node):
        #     nonlocal ans                               # 声明修改外部变量
        #     if not node: return 0
        #     left = caldepth(node.left)
        #     right = caldepth(node.right)
        #     ans = max(ans, left + right)
        #     return max(left, right) + 1
        #
        # caldepth(root)
        # return ans
        # ========== 方法四：列表包装（闭包可修改列表元素） ==========
        # ans = [0]
        # def caldepth(node):
        #     if not node: return 0
        #     left = caldepth(node.left)
        #     right = caldepth(node.right)
        #     ans[0] = max(ans[0], left + right)         # 列表元素可在闭包中修改
        #     return max(left, right) + 1
        #
        # caldepth(root)
        # return ans[0]`,statement:`给你一棵二叉树的根节点，返回该树的 直径 。

二叉树的 直径 是指树中任意两个节点之间最长路径的 长度 。这条路径可能经过也可能不经过根节点 root 。

两节点之间路径的 长度 由它们之间边数表示。

 

示例 1：

输入：root = [1,2,3,4,5]
输出：3
解释：3 ，取路径 [4,2,1,3] 或 [5,2,1,3] 的长度。

示例 2：

输入：root = [1,2]
输出：1

 

提示：

- 树中节点数目在范围 [1, 10^4] 内

- -100 <= Node.val <= 100`},"102-二叉树的层序遍历":{codePreview:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
# 📌 需二刷：BFS 层序遍历模板题
#
# 思路：用队列 BFS，每轮通过 len(queue) 确定当前层节点数，按层分组
# 时间 O(n)，空间 O(n)（队列最多存一层的节点）
#
# ⚠️ 易错点/误区：
# 1. queue 里放的是节点对象，不是值（需要访问 .left/.right）
# 2. deque([root]) 不是 deque(root)（deque 接收可迭代对象，会逐个拆开）
# 3. 入队孩子要判空：if node.left，否则 None.val 报错
# 4. result 初始化为 []，不是 [[]]
# 5. queue.append() 是往已有队列加，不要用 queue = deque(...) 覆盖整个队列
from collections import deque
class Solution:
    # ===== 方法一：BFS（面试首推 ⭐⭐⭐）=====
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:                        # 边界：空树直接返回
            return []
        result = []
        queue = deque([root])               # 根节点入队
        while queue:                        # 队列不为空就继续
            level_size = len(queue)          # 当前层有多少个节点
            level = []                       # 存当前层的值
            for i in range(level_size):      # 只处理当前层的节点
                node = queue.popleft()       # 出队
                level.append(node.val)       # 收集值
                if node.left:                # 左孩子入队（下一层）
                    queue.append(node.left)
                if node.right:               # 右孩子入队（下一层）
                    queue.append(node.right)
            result.append(level)             # 当前层收集完毕
        return result
    # ===== 方法二：DFS（面试备选）=====
    # 用递归 DFS，通过 depth 参数知道当前在第几层
    # def levelOrder(self, root):
    #     result = []
    #     def dfs(node, depth):
    #         if not node:
    #             return
    #         if depth == len(result):     # 第一次到这层，新建子列表
    #             result.append([])
    #         result[depth].append(node.val)
    #         dfs(node.left, depth + 1)
    #         dfs(node.right, depth + 1)
    #     dfs(root, 0)
    #     return result`,statement:`给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。

 

示例 1：

输入：root = [3,9,20,null,null,15,7]
输出：[[3],[9,20],[15,7]]

示例 2：

输入：root = [1]
输出：[[1]]

示例 3：

输入：root = []
输出：[]

 

提示：

- 树中节点数目在范围 [0, 2000] 内

- -1000 <= Node.val <= 1000`},"108-将有序数组转换为二叉搜索树":{codePreview:`# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        if not nums:return None
        mid = len(nums)//2
        node = TreeNode(nums[mid])
        node.left = self.sortedArrayToBST(nums[:mid])
        node.right = self.sortedArrayToBST(nums[mid+1:])
        return node`,statement:`给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 平衡 二叉搜索树。

 

示例 1：

输入：nums = [-10,-3,0,5,9]
输出：[0,-3,9,-10,null,5]
解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：

示例 2：

输入：nums = [1,3]
输出：[3,1]
解释：[1,null,3] 和 [3,1] 都是高度平衡二叉搜索树。

 

提示：

- 1 <= nums.length <= 10^4

- -10^4 <= nums[i] <= 10^4

- nums 按 严格递增 顺序排列`},"98-验证二叉搜索树":{codePreview:`# Definition for a binary tree node.
from typing import Optional
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    # ═════════════════════════════════════════════════════════════
    # 方法一：递归传递上下界区间（最简洁优雅，推荐）
    # ═════════════════════════════════════════════════════════════
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def validate(node, lower, upper):
            if not node:
                return True
            # 当前节点值必须严格在开区间 (lower, upper) 内
            if not (lower < node.val < upper):
                return False
            # 递归校验左子树（上界变为当前值）和右子树（下界变为当前值）
            return validate(node.left, lower, node.val) and validate(node.right, node.val, upper)
        return validate(root, -float('inf'), float('inf'))
    # ═════════════════════════════════════════════════════════════
    # 方法二：中序遍历先收集数组，再判断严格递增（最符合直觉）
    # ═════════════════════════════════════════════════════════════
    # def isValidBST(self, root: Optional[TreeNode]) -> bool:
    #     res = []
    #     def inorder(node):
    #         if not node:
    #             return
    #         inorder(node.left)
    #         res.append(node.val)
    #         inorder(node.right)
    #
    #     inorder(root)
    #
    #     # 检查是否严格递增
    #     for i in range(1, len(res)):
    #         if res[i] <= res[i - 1]:
    #             return False
    #     return True
    # ═════════════════════════════════════════════════════════════
    # 方法三：中序遍历中边遍历边比较前驱（提前剪枝短路）
    # ═════════════════════════════════════════════════════════════
    # def isValidBST(self, root: Optional[TreeNode]) -> bool:
    #     prev = -float('inf')
    #     def dfs(node):
    #         nonlocal prev
    #         if not node:
    #             return True
    #         if not dfs(node.left):
    #             return False
    #         if node.val <= prev:
    #             return False
    #         prev = node.val
    #         return dfs(node.right)
    #     return dfs(root)`,statement:`给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

有效 二叉搜索树定义如下：

- 节点的左子树只包含 严格小于 当前节点的数。

- 节点的右子树只包含 严格大于 当前节点的数。

- 所有左子树和右子树自身必须也是二叉搜索树。

 

示例 1：

输入：root = [2,1,3]
输出：true

示例 2：

输入：root = [5,1,4,null,null,3,6]
输出：false
解释：根节点的值是 5 ，但是右子节点的值是 4 。

 

提示：

- 树中节点数目范围在[1, 10^4] 内

- -2^31 <= Node.val <= 2^31 - 1`},"230-二叉搜索树中第-k-小的元素":{codePreview:`# Definition for a binary tree node.
from typing import Optional
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        # 📌 需二刷：BST 中序遍历 = 升序序列，nonlocal 维护计数器
        #
        # 思路：对 BST 做中序遍历（左→根→右），计数到第 k 个节点即为答案
        # 时间 O(H + k)，H 为树高；空间 O(H)，递归栈深度
        #
        # ⚠️ 易错点/误区：
        # 1. 混淆 node.val 和 node.left.val：处理当前节点时记录 node.val，不是子节点的值
        # 2. return 放在 res=node.val 之前：导致赋值语句成为死代码
        # 3. 基本情况写成 \`if not node and count == 0\`：只需判断 \`if not node\` 即可
        # 4. nonlocal 要声明所有外层变量（count 和 res 都要写）
        count = 0
        res = 0
        def dfs(node):
            nonlocal count, res
            if not node:
                return
            dfs(node.left)   # 左
            count += 1       # 处理当前节点：计数 +1
            if count == k:   # 数到第 k 个，记录答案
                res = node.val
                return
            dfs(node.right)  # 右
        dfs(root)
        return res`,statement:`给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 小的元素（k 从 1 开始计数）。

 

示例 1：

输入：root = [3,1,4,null,2], k = 1
输出：1

示例 2：

输入：root = [5,3,6,2,4,null,null,1], k = 3
输出：3

 

 

提示：

- 树中的节点数为 n 。

- 1 <= k <= n <= 10^4

- 0 <= Node.val <= 10^4

 

进阶：如果二叉搜索树经常被修改（插入/删除操作）并且你需要频繁地查找第 k 小的值，你将如何优化算法？`},"199-二叉树的右视图":{codePreview:`# Definition for a binary tree node.
from typing import Optional,List
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        # 思路：DFS 按深度收集每层所有节点，每层最后一个即为右视图
        # 时间 O(n)，空间 O(n)（result 存所有节点 + 递归栈 O(H)）
        #
        # ⚠️ 易错点/误区：
        # 1. 先左后右 DFS：同层右节点追加在左节点后面，result[depth][-1] 自然是最右的
        # 2. \`depth == len(result)\` 是新层触发条件，不能写成 \`depth >= len(result)\`（会重复 append）
        # 3. 可以简化最后两行为：return [layer[-1] for layer in result]
        result = []
        def dfs(node, depth):
            if not node:
                return
            if depth == len(result):   # 新的一层，追加空列表
                result.append([])
            result[depth].append(node.val)
            dfs(node.left, depth + 1)   # 先左
            dfs(node.right, depth + 1)  # 后右（同层右节点排在最后）
        dfs(root, 0)
        return [layer[-1] for layer in result]  # 每层取最后一个`,statement:`给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

 

示例 1：

输入：root = [1,2,3,null,5,null,4]

输出：[1,3,4]

解释：

示例 2：

输入：root = [1,2,3,4,null,null,null,5]

输出：[1,3,4,5]

解释：

示例 3：

输入：root = [1,null,3]

输出：[1,3]

示例 4：

输入：root = []

输出：[]

 

提示:

- 二叉树的节点个数的范围是 [0,100]

- -100 <= Node.val <= 100`},"114-二叉树展开为链表":{codePreview:`# Definition for a binary tree node.
from typing import Optional 
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def flatten(self, root: Optional[TreeNode]) -> None:
        # 思路：前序遍历收集所有节点对象，再依次重连 right 指针，left 全置 None
        # 时间 O(n)，空间 O(n)（nodes 列表存所有节点）
        #
        # ⚠️ 易错点/误区：
        # 1. nodes 要存节点对象 node，不是 node.val（需要操作指针）
        # 2. for 循环要用 range(len(nodes) - 1)，否则最后一个节点 nodes[i+1] 越界
        # 3. 函数无返回值，原地修改 root
        nodes = []
        def dfs(node):
            if not node:
                return
            nodes.append(node)          # 前序：先收集当前节点
            dfs(node.left)
            dfs(node.right)
        dfs(root)
        for i in range(len(nodes) - 1):  # 最后一个节点无需处理
            nodes[i].right = nodes[i + 1]
            nodes[i].left = None`,statement:`给你二叉树的根结点 root ，请你将它展开为一个单链表：

- 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。

- 展开后的单链表应该与二叉树 先序遍历 顺序相同。

 

示例 1：

输入：root = [1,2,5,3,4,null,6]
输出：[1,null,2,null,3,null,4,null,5,null,6]

示例 2：

输入：root = []
输出：[]

示例 3：

输入：root = [0]
输出：[0]

 

提示：

- 树中结点数在范围 [0, 2000] 内

- -100 

 

进阶：你可以使用原地算法（O(1) 额外空间）展开这棵树吗？`},"105-从前序与中序遍历序列构造二叉树":{codePreview:`class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        # 📌 需二刷：前序首元素是根，在中序中找根的位置，左边是左子树，右边是右子树
        #
        # 思路：递归分治，每次用 preorder[0] 建根，按 mid 切割左右子树递归构建
        # 时间 O(n²)（每次 index 是 O(n)）；空间 O(n)（递归栈 + 切片）
        #
        # ⚠️ 易错点/误区：
        # 1. 忘记边界：\`if not preorder\` 必须在第一行，否则空数组时 preorder[0] 报错
        # 2. inorder[mid] 是根节点的值（整数），不是子树数组，不能传给 buildTree
        # 3. 左子树前序切片：preorder[1:mid+1]（共 mid 个节点），右子树：preorder[mid+1:]
        # 4. 递归调用要写 self.buildTree(...)，不能漏掉 self
        if not preorder:
            return None
        root = TreeNode(preorder[0])                                          # 根节点
        mid = inorder.index(preorder[0])                                      # 根在中序中的位置
        root.left  = self.buildTree(preorder[1:mid+1], inorder[:mid])         # 左子树
        root.right = self.buildTree(preorder[mid+1:],  inorder[mid+1:])       # 右子树
        return root`,statement:`给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。

 

示例 1:

输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
输出: [3,9,20,null,null,15,7]

示例 2:

输入: preorder = [-1], inorder = [-1]
输出: [-1]

 

提示:

- 1 <= preorder.length <= 3000

- inorder.length == preorder.length

- -3000 <= preorder[i], inorder[i] <= 3000

- preorder 和 inorder 均 无重复 元素

- inorder 均出现在 preorder

- preorder 保证 为二叉树的前序遍历序列

- inorder 保证 为二叉树的中序遍历序列`},"437-路径总和-iii":{codePreview:`class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:
        # 📌 需二刷：树上前缀和 + 哈希表，和 560 题思路完全一致
        #
        # 思路：DFS 维护根到当前节点的路径前缀和，哈希表记录各前缀和出现次数
        #       当 curr_sum - targetSum 在 map 中，说明存在一条以当前节点结尾的合法路径
        # 时间 O(n)，空间 O(n)
        #
        # ⚠️ 易错点/误区：
        # 1. prefix_map 初始化 {0:1}：处理从根节点开始、路径和恰好等于 target 的情况
        # 2. 回溯必不可少：处理完当前节点后 prefix_map[curr_sum] -= 1
        #    否则兄弟分支会误用当前分支的前缀和，导致多计
        # 3. count 是整数，修改需要 nonlocal；prefix_map 是字典，原地修改不需要 nonlocal
        prefix_map = {0: 1}  # 前缀和 → 出现次数，初始空路径和为 0
        count = 0
        def dfs(node, curr_sum):
            nonlocal count
            if not node:
                return
            curr_sum += node.val
            # 查找有多少条路径，其前缀和 = curr_sum - targetSum
            count += prefix_map.get(curr_sum - targetSum, 0)
            # 将当前前缀和加入哈希表
            prefix_map[curr_sum] = prefix_map.get(curr_sum, 0) + 1
            dfs(node.left, curr_sum)
            dfs(node.right, curr_sum)
            # 回溯：退出当前节点，撤销前缀和，防止污染兄弟分支
            prefix_map[curr_sum] -= 1
        dfs(root, 0)
        return count`,statement:`给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。

路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

 

示例 1：

输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
输出：3
解释：和等于 8 的路径有 3 条，如图所示。

示例 2：

输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：3

 

提示:

- 二叉树的节点个数的范围是 [0,1000]

- -10^9  

- -1000`},"236-二叉树的最近公共祖先":{codePreview:`# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None
class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        # 📌 需二刷：经典递归 LCA，"向下找、向上汇报"模型
        #
        # 思路：dfs(node) 语义 = 在以 node 为根的子树里找 p/q，找到就返回，否则返回 None
        #       若左右子树都有返回值 → 当前节点就是 LCA
        #       若只有一侧有返回值 → 把那个结果继续往上传
        # 时间 O(n)，空间 O(n)（递归栈）
        #
        # ⚠️ 易错点/误区：
        # 1. 终止条件必须 return node，不能写 return（返回 None 等于"没找到"）
        # 2. 只有一侧有结果时，用 left or right 传递非空的那个；return node 是错的
        # 3. 外层必须 return dfs(root)，光调用不 return 结果直接丢掉
        def dfs(node):
            # 空节点 or 找到 p/q → 直接返回
            if not node or node == p or node == q:
                return node
            left = dfs(node.left)   # 左子树汇报
            right = dfs(node.right) # 右子树汇报
            # 两侧都有 → 当前节点是 LCA
            if left and right:
                return node
            # 只有一侧有 → 把结果往上传（left/right 必有一个 None）
            return left or right
        return dfs(root)`,statement:`给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

 

示例 1：

输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出：3
解释：节点 5 和节点 1 的最近公共祖先是节点 3 。

示例 2：

输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出：5
解释：节点 5 和节点 4 的最近公共祖先是节点 5 。因为根据定义最近公共祖先节点可以为节点本身。

示例 3：

输入：root = [1,2], p = 1, q = 2
输出：1

 

提示：

- 树中节点数目在范围 [2, 10^5] 内。

- -10^9 

- 所有 Node.val 互不相同 。

- p != q

- p 和 q 均存在于给定的二叉树中。`},"124-二叉树中的最大路径和":{codePreview:`# Definition for a binary tree node.
from typing import Optional
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        # 📌 需二刷：后序遍历 + 全局变量更新 —— "拐弯点"思维模型
        #
        # 思路：对每个节点做后序 DFS，区分两种用途：
        #   1. 向父节点贡献的最大单侧路径（只能选左或右，不能拐弯）
        #   2. 在当前节点拐弯（左 + 根 + 右），用于更新全局最大值
        # 时间 O(n)，空间 O(h)，h 为树高（递归栈）
        #
        # ⚠️ 易错点/误区：
        # 1. maximum 初始化为 0 而非 float('-inf')：全负数树时会错误返回 0
        # 2. base case 写 return 而非 return 0：导致 max(None, 0) 报 TypeError
        # 3. 忘记负增益过滤（max(..., 0)）：负子树会拖低路径和，应舍弃
        # 4. 拐弯值（turning）只能更新全局答案，不能作为 return 值向上传
        maximum = float('-inf')
        def dfs(node):
            nonlocal maximum
            if not node:
                return 0  # 空节点贡献为 0
            # 后序：先拿左右子树的最大贡献，负数直接舍弃（取 0）
            left_gain = max(dfs(node.left), 0)
            right_gain = max(dfs(node.right), 0)
            # 在当前节点"拐弯"，尝试更新全局最大值
            turning = node.val + left_gain + right_gain
            maximum = max(turning, maximum)
            # 向父节点只能贡献单侧（左或右，取较大值）
            return node.val + max(left_gain, right_gain)
        dfs(root)
        return maximum`,statement:`二叉树中的 路径 被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。

路径和 是路径中各节点值的总和。

给你一个二叉树的根节点 root ，返回其 最大路径和 。

 

示例 1：

输入：root = [1,2,3]
输出：6
解释：最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6

示例 2：

输入：root = [-10,9,20,null,null,15,7]
输出：42
解释：最优路径是 15 -> 20 -> 7 ，路径和为 15 + 20 + 7 = 42

 

提示：

- 树中节点数目范围是 [1, 3 * 10^4]

- -1000 <= Node.val <= 1000`}};export{n as categoryContent};
