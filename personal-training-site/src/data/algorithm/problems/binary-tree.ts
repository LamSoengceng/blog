// 本文件由 scripts/generateAlgorithmData.mjs 自动生成，请勿手改。
import type { AlgorithmProblem } from '../types'

export const binaryTreeProblems: AlgorithmProblem[] = [
  {
    "id": "94",
    "slug": "94-二叉树的中序遍历",
    "title": "二叉树的中序遍历",
    "titleEn": "Binary Tree Inorder Traversal",
    "category": "二叉树",
    "difficulty": "简单",
    "topic": "递归 / 栈",
    "completed": true,
    "leetcodeSlug": "binary-tree-inorder-traversal",
    "leetcodeUrl": "https://leetcode.cn/problems/binary-tree-inorder-traversal/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E4%B8%AD%E5%BA%8F%E9%81%8D%E5%8E%86",
    "acceptanceRate": 78.3,
    "solutionCount": 6195,
    "companyTagCount": 88,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "递归 / 栈",
      "栈",
      "树",
      "深度优先搜索"
    ],
    "sourcePath": "hot100/08_二叉树/94.二叉树的中序遍历.py",
    "lastUpdated": "2026-03-16",
    "lastUpdatedAt": "2026-03-16T10:38:44.978Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "解法一：递归（直观好理解）",
      "时间 O(n)  空间 O(n)",
      "--- 递归方法 ---",
      "dfs(node.left)              # 1. 先递归左子树",
      "dfs(node.right)             # 3. 再递归右子树",
      "解法二：迭代（用栈模拟递归）",
      "时间 O(n)  空间 O(n)"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "recallBlanks": [
      {
        "prompt": "解法一：＿＿＿（直观好理解）",
        "answer": "递归"
      },
      {
        "prompt": "＿＿＿(node.left)              # 1. 先＿＿＿左子树",
        "answer": "dfs"
      },
      {
        "prompt": "解法二：迭代（用＿＿＿模拟＿＿＿）",
        "answer": "栈"
      }
    ],
    "solutionGuide": {
      "idea": "解法一：递归（直观好理解）",
      "interviewSteps": [
        "先说明核心考点：递归 / 栈。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / 递归 / 栈 / 栈 / 树。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    },
    "codePreview": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\n# --- 递归方法 ---\n# class Solution:\n#     def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\n#         result = []\n#         def dfs(node):\n#             if not node: return         # 终止条件：空节点\n#             dfs(node.left)              # 1. 先递归左子树\n#             result.append(node.val)     # 2. 记录当前节点（根在中间）\n#             dfs(node.right)             # 3. 再递归右子树\n#         dfs(root)\n#         return result\n# ═══════════════════════════════════════════\n# 解法二：迭代（用栈模拟递归）\n# 思路：不断\"向左走到底→弹出记录→转向右子树\"\n# 时间 O(n)  空间 O(n)\n# ═══════════════════════════════════════════\n# --- 迭代方法：栈 ---\nclass Solution:\n    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\n        result = []\n        stack = []\n        node = root\n        while node or stack:               # 还有节点未处理就继续\n            while node:                    # 一路向左走到底\n                stack.append(node)         # 沿途节点全部压栈\n                node = node.left\n            node = stack.pop()             # 到底了，弹出最左节点\n            result.append(node.val)        # 记录值\n            node = node.right              # 转向右子树，重复上述过程\n        return result",
    "statement": "给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。\n\n \n\n示例 1：\n\n输入：root = [1,null,2,3]\n输出：[1,3,2]\n\n示例 2：\n\n输入：root = []\n输出：[]\n\n示例 3：\n\n输入：root = [1]\n输出：[1]\n\n \n\n提示：\n\n\t树中节点数目在范围 [0, 100] 内\n\n\t-100 <= Node.val <= 100\n\n \n\n进阶: 递归算法很简单，你可以通过迭代算法完成吗？"
  },
  {
    "id": "104",
    "slug": "104-二叉树的最大深度",
    "title": "二叉树的最大深度",
    "titleEn": "Maximum Depth of Binary Tree",
    "category": "二叉树",
    "difficulty": "简单",
    "topic": "DFS",
    "completed": true,
    "leetcodeSlug": "maximum-depth-of-binary-tree",
    "leetcodeUrl": "https://leetcode.cn/problems/maximum-depth-of-binary-tree/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%A4%A7%E6%B7%B1%E5%BA%A6",
    "acceptanceRate": 79.1,
    "solutionCount": 7452,
    "companyTagCount": 103,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "DFS",
      "树",
      "深度优先搜索",
      "广度优先搜索"
    ],
    "sourcePath": "hot100/08_二叉树/104.二叉树的最大深度.py",
    "lastUpdated": "2026-03-19",
    "lastUpdatedAt": "2026-03-19T10:58:09.850Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "时间 O(n)，空间 O(h)，h 为树高",
      "2. 类方法递归调用要用 self.maxDepth()，不能直接写 maxDepth()"
    ],
    "pitfalls": [
      "1. 别忘了 +1（当前节点自己也算一层）",
      "2. 类方法递归调用要用 self.maxDepth()，不能直接写 maxDepth()"
    ],
    "recallBlanks": [
      {
        "prompt": "2. 类方法＿＿＿调用要用 self.maxDepth()，不能直接写 maxDepth()",
        "answer": "递归"
      }
    ],
    "solutionGuide": {
      "idea": "时间 O(n)，空间 O(h)，h 为树高",
      "interviewSteps": [
        "先说明核心考点：DFS。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / DFS / 树 / 深度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 别忘了 +1（当前节点自己也算一层）"
    },
    "codePreview": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\n# 思路：递归求深度，当前节点深度 = max(左子树深度, 右子树深度) + 1\n# 时间 O(n)，空间 O(h)，h 为树高\n#\n# ⚠️ 易错点/误区：\n# 1. 别忘了 +1（当前节点自己也算一层）\n# 2. 类方法递归调用要用 self.maxDepth()，不能直接写 maxDepth()\nclass Solution:\n    def maxDepth(self, root: Optional[TreeNode]) -> int:\n        if not root: return 0                        # 空节点深度为 0\n        left = self.maxDepth(root.left)              # 左子树深度\n        right = self.maxDepth(root.right)            # 右子树深度\n        return max(left, right) + 1                  # 取更深的 + 当前层",
    "statement": "给定一个二叉树 root ，返回其最大深度。\n\n二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。\n\n \n\n示例 1：\n\n \n\n输入：root = [3,9,20,null,null,15,7]\n输出：3\n\n示例 2：\n\n输入：root = [1,null,2]\n输出：2\n\n \n\n提示：\n\n\t树中节点的数量在 [0, 104] 区间内。\n\n\t-100 <= Node.val <= 100"
  },
  {
    "id": "226",
    "slug": "226-翻转二叉树",
    "title": "翻转二叉树",
    "titleEn": "Invert Binary Tree",
    "category": "二叉树",
    "difficulty": "简单",
    "topic": "递归",
    "completed": true,
    "leetcodeSlug": "invert-binary-tree",
    "leetcodeUrl": "https://leetcode.cn/problems/invert-binary-tree/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E7%BF%BB%E8%BD%AC%E4%BA%8C%E5%8F%89%E6%A0%91",
    "acceptanceRate": 82.5,
    "solutionCount": 6103,
    "companyTagCount": 82,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "递归",
      "树",
      "深度优先搜索",
      "广度优先搜索"
    ],
    "sourcePath": "hot100/08_二叉树/226.翻转二叉树.py",
    "lastUpdated": "2026-03-19",
    "lastUpdatedAt": "2026-03-19T08:14:32.715Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "时间 O(n)，空间 O(h)，h 为树高（递归栈深度）",
      "递归"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "recallBlanks": [
      {
        "prompt": "时间 O(n)，空间 O(h)，h 为树高（＿＿＿＿＿＿深度）",
        "answer": "递归"
      }
    ],
    "solutionGuide": {
      "idea": "时间 O(n)，空间 O(h)，h 为树高（递归栈深度）",
      "interviewSteps": [
        "先说明核心考点：递归。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / 递归 / 树 / 深度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    },
    "codePreview": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\n# 思路：翻转 = 每个节点的左右孩子互换，然后递归翻转子树\n# 时间 O(n)，空间 O(h)，h 为树高（递归栈深度）\n#\n# ⚠️ 易错点/误区：\n# 1. 翻转是交换节点引用（node.left, node.right 互换），不是交换 .val\n# 2. None 节点也能参与交换，不需要对\"一个孩子为 None\"单独处理\n# 3. Python 可以用 a, b = b, a 一行完成交换，不需要 tmp 变量\nclass Solution:\n    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:\n        # 递归\n        def changeposition(node):\n            if not node: return node               # base case：空节点直接返回\n            node.left, node.right = node.right, node.left  # 交换左右孩子\n            changeposition(node.left)              # 递归翻转左子树\n            changeposition(node.right)             # 递归翻转右子树\n            return node\n        return changeposition(root)",
    "statement": "给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。\n\n \n\n示例 1：\n\n输入：root = [4,2,7,1,3,6,9]\n输出：[4,7,2,9,6,3,1]\n\n示例 2：\n\n输入：root = [2,1,3]\n输出：[2,3,1]\n\n示例 3：\n\n输入：root = []\n输出：[]\n\n \n\n提示：\n\n\t树中节点数目范围在 [0, 100] 内\n\n\t-100 <= Node.val <= 100"
  },
  {
    "id": "101",
    "slug": "101-对称二叉树",
    "title": "对称二叉树",
    "titleEn": "Symmetric Tree",
    "category": "二叉树",
    "difficulty": "简单",
    "topic": "递归 / 队列",
    "completed": true,
    "leetcodeSlug": "symmetric-tree",
    "leetcodeUrl": "https://leetcode.cn/problems/symmetric-tree/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%AF%B9%E7%A7%B0%E4%BA%8C%E5%8F%89%E6%A0%91",
    "acceptanceRate": 63.9,
    "solutionCount": 6529,
    "companyTagCount": 92,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "递归 / 队列",
      "树",
      "深度优先搜索",
      "广度优先搜索"
    ],
    "sourcePath": "hot100/08_二叉树/101.对称二叉树.py",
    "lastUpdated": "2026-03-19",
    "lastUpdatedAt": "2026-03-19T07:37:10.455Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "需二刷：栈存配对节点 / 递归对称比较",
      "时间 O(n)，空间 O(n)",
      "1. 栈方法中 while 条件不能写 while root.left and root.right（永远不变，死循环），应该写 while stack",
      "2. 栈里每次 pop 两个、append 两个一组，栈元素有顺序不是\"并列\"",
      "4. 递归调用必须 return，不 return 结果会丢失",
      "5. 递归中最后一步要用 and 连接两个子问题，两个都对称才是真的对称",
      "方法一：栈（迭代）"
    ],
    "pitfalls": [
      "1. 栈方法中 while 条件不能写 while root.left and root.right（永远不变，死循环），应该写 while stack",
      "3. 不能只比较值不比较结构：跳过 None 会丢失结构信息，导致结构不同但值相同的树误判为对称"
    ],
    "recallBlanks": [
      {
        "prompt": "1. ＿＿＿方法中 while 条件不能写 while root.left and root.right（永远不变，死循环），应该写 while stack",
        "answer": "栈"
      },
      {
        "prompt": "4. ＿＿＿调用必须 return，不 return 结果会丢失",
        "answer": "递归"
      }
    ],
    "solutionGuide": {
      "idea": "需二刷：栈存配对节点 / 递归对称比较",
      "interviewSteps": [
        "先说明核心考点：递归 / 队列。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / 递归 / 队列 / 树 / 深度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 栈方法中 while 条件不能写 while root.left and root.right（永远不变，死循环），应该写 while stack"
    },
    "codePreview": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\n# 📌 需二刷：栈存配对节点 / 递归对称比较\n#\n# 思路：对称 = 左子树和右子树互为镜像\n#       每次比较一对节点（左的左 配 右的右，左的右 配 右的左）\n# 时间 O(n)，空间 O(n)\n#\n# ⚠️ 易错点/误区：\n# 1. 栈方法中 while 条件不能写 while root.left and root.right（永远不变，死循环），应该写 while stack\n# 2. 栈里每次 pop 两个、append 两个一组，栈元素有顺序不是\"并列\"\n# 3. 不能只比较值不比较结构：跳过 None 会丢失结构信息，导致结构不同但值相同的树误判为对称\n# 4. 递归调用必须 return，不 return 结果会丢失\n# 5. 递归中最后一步要用 and 连接两个子问题，两个都对称才是真的对称\nclass Solution:\n    def isSymmetric(self, root: Optional[TreeNode]) -> bool:\n        # ========== 方法一：栈（迭代） ==========\n        # 核心：栈里成对存入需要比较的节点，每次弹出一对来比较\n        # if not root: return True\n        # stack = [root.left, root.right]       # 初始放入第一对\n        # while stack:                          # 栈不空就继续\n        #     nodeR = stack.pop()               # 后进先出，先弹右\n        #     nodeL = stack.pop()               # 再弹左\n        #     if not nodeL and not nodeR:       # 都是 None → 这一对 OK，继续\n        #         continue\n        #     if not nodeL or not nodeR:        # 一个 None 一个不是 → 不对称\n        #         return False\n        #     if nodeL.val != nodeR.val:        # 值不等 → 不对称\n        #         return False\n        #     stack.append(nodeL.left)          # 外侧对：左的左 配 右的右\n        #     stack.append(nodeR.right)\n        #     stack.append(nodeL.right)         # 内侧对：左的右 配 右的左\n        #     stack.append(nodeR.left)\n        # return True\n        # ========== 方法二：递归 ==========\n        # 核心：check(left, right) 判断两个节点是否互为镜像\n        def check(left, right) -> bool:\n            if not left and not right:          # 都是 None → 对称 ✓\n                return True\n            if not left or not right:           # 一个 None 一个不是 → 不对称 ✗\n                return False\n            if left.val != right.val:           # 值不等 → 不对称 ✗\n                return False\n            # 外侧对称 且 内侧对称 → 才是真正对称\n            return check(left.left, right.right) and check(left.right, right.left)\n        return check(root.left, root.right)",
    "statement": "给你一个二叉树的根节点 root ， 检查它是否轴对称。\n\n \n\n示例 1：\n\n输入：root = [1,2,2,3,4,4,3]\n输出：true\n\n示例 2：\n\n输入：root = [1,2,2,null,3,null,3]\n输出：false\n\n \n\n提示：\n\n\t树中节点数目在范围 [1, 1000] 内\n\n\t-100 <= Node.val <= 100\n\n \n\n进阶：你可以运用递归和迭代两种方法解决这个问题吗？"
  },
  {
    "id": "543",
    "slug": "543-二叉树的直径",
    "title": "二叉树的直径",
    "titleEn": "Diameter of Binary Tree",
    "category": "二叉树",
    "difficulty": "简单",
    "topic": "DFS",
    "completed": true,
    "leetcodeSlug": "diameter-of-binary-tree",
    "leetcodeUrl": "https://leetcode.cn/problems/diameter-of-binary-tree/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E7%9B%B4%E5%BE%84",
    "acceptanceRate": 64.4,
    "solutionCount": 3438,
    "companyTagCount": 75,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "DFS",
      "树",
      "深度优先搜索",
      "树形 DP"
    ],
    "sourcePath": "hot100/08_二叉树/543.二叉树的直径.py",
    "lastUpdated": "2026-03-19",
    "lastUpdatedAt": "2026-03-19T09:23:26.105Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "需二刷：在求深度的递归中\"顺便\"更新全局最大直径",
      "在递归求深度时，顺便用 self.ans 记录经过每个节点的最大路径长度",
      "时间 O(n)，空间 O(h)，h 为树高"
    ],
    "pitfalls": [
      "1. 直径不一定经过根节点！所以不能只算根的左深度+右深度",
      "4. 函数返回的是\"深度\"，直径通过 self.ans 在过程中更新，不能用返回值传递直径"
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：在求深度的＿＿＿中\"顺便\"更新全局最大直径",
        "answer": "递归"
      }
    ],
    "solutionGuide": {
      "idea": "需二刷：在求深度的递归中\"顺便\"更新全局最大直径",
      "interviewSteps": [
        "先说明核心考点：DFS。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / DFS / 树 / 深度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 直径不一定经过根节点！所以不能只算根的左深度+右深度"
    },
    "codePreview": "#\n#\n# [543] 二叉树的直径\n#\n# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\n# 📌 需二刷：在求深度的递归中\"顺便\"更新全局最大直径\n#\n# 思路：直径 = 某个节点的左子树深度 + 右子树深度 + 2（边数）\n#       在递归求深度时，顺便用 self.ans 记录经过每个节点的最大路径长度\n# 时间 O(n)，空间 O(h)，h 为树高\n#\n# ⚠️ 易错点/误区：\n# 1. 直径不一定经过根节点！所以不能只算根的左深度+右深度\n# 2. None 返回 -1（边数计算）时，直径公式要 +2；None 返回 0（节点数计算）时，直径公式不用 +2\n# 3. 深度用 max(左,右)+1，直径用 左+右+2，别搞混\n# 4. 函数返回的是\"深度\"，直径通过 self.ans 在过程中更新，不能用返回值传递直径\nclass Solution:\n    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:\n        # ========== 方法一：None 返回 -1（按边数算深度） ==========\n        self.ans = 0\n        def caldepth(node):\n            if not node: return -1                       # 空节点深度为 -1\n            left = caldepth(node.left)                   # 左子树深度\n            right = caldepth(node.right)                 # 右子树深度\n            self.ans = max(self.ans, left + right + 2)   # 更新直径（+2 因为左右各多一条边到当前节点）\n            return max(left, right) + 1                  # 返回当前节点深度\n        caldepth(root)\n        return self.ans\n        # ========== 方法二：None 返回 0（按节点数算深度） ==========\n        # self.ans = 0\n        # def caldepth(node):\n        #     if not node: return 0                      # 空节点深度为 0\n        #     left = caldepth(node.left)\n        #     right = caldepth(node.right)\n        #     self.ans = max(self.ans, left + right)     # 不用 +2，因为深度多算了 1\n        #     return max(left, right) + 1\n        #\n        # caldepth(root)\n        # return self.ans\n        # ========== 方法三：nonlocal（避免污染类属性） ==========\n        # ans = 0\n        # def caldepth(node):\n        #     nonlocal ans                               # 声明修改外部变量\n        #     if not node: return 0\n        #     left = caldepth(node.left)\n        #     right = caldepth(node.right)\n        #     ans = max(ans, left + right)\n        #     return max(left, right) + 1\n        #\n        # caldepth(root)\n        # return ans\n        # ========== 方法四：列表包装（闭包可修改列表元素） ==========\n        # ans = [0]\n        # def caldepth(node):\n        #     if not node: return 0\n        #     left = caldepth(node.left)\n        #     right = caldepth(node.right)\n        #     ans[0] = max(ans[0], left + right)         # 列表元素可在闭包中修改\n        #     return max(left, right) + 1\n        #\n        # caldepth(root)\n        # return ans[0]",
    "statement": "给你一棵二叉树的根节点，返回该树的 直径 。\n\n二叉树的 直径 是指树中任意两个节点之间最长路径的 长度 。这条路径可能经过也可能不经过根节点 root 。\n\n两节点之间路径的 长度 由它们之间边数表示。\n\n \n\n示例 1：\n\n输入：root = [1,2,3,4,5]\n输出：3\n解释：3 ，取路径 [4,2,1,3] 或 [5,2,1,3] 的长度。\n\n示例 2：\n\n输入：root = [1,2]\n输出：1\n\n \n\n提示：\n\n\t树中节点数目在范围 [1, 104] 内\n\n\t-100 <= Node.val <= 100"
  },
  {
    "id": "102",
    "slug": "102-二叉树的层序遍历",
    "title": "二叉树的层序遍历",
    "titleEn": "Binary Tree Level Order Traversal",
    "category": "二叉树",
    "difficulty": "中等",
    "topic": "BFS",
    "completed": true,
    "leetcodeSlug": "binary-tree-level-order-traversal",
    "leetcodeUrl": "https://leetcode.cn/problems/binary-tree-level-order-traversal/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%B1%82%E5%BA%8F%E9%81%8D%E5%8E%86",
    "acceptanceRate": 70.8,
    "solutionCount": 6554,
    "companyTagCount": 134,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "BFS",
      "树",
      "广度优先搜索"
    ],
    "sourcePath": "hot100/08_二叉树/102.二叉树的层序遍历.py",
    "lastUpdated": "2026-03-20",
    "lastUpdatedAt": "2026-03-20T12:14:23.814Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "需二刷：BFS 层序遍历模板题",
      "时间 O(n)，空间 O(n)（队列最多存一层的节点）",
      "方法一：BFS（面试首推 ⭐⭐⭐）",
      "方法二：DFS（面试备选）",
      "用递归 DFS，通过 depth 参数知道当前在第几层"
    ],
    "pitfalls": [
      "3. 入队孩子要判空：if node.left，否则 None.val 报错"
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：＿＿＿ ＿＿＿模板题",
        "answer": "BFS"
      },
      {
        "prompt": "时间 O(n)，空间 O(n)（＿＿＿最多存一层的节点）",
        "answer": "队列"
      },
      {
        "prompt": "方法二：＿＿＿（面试备选）",
        "answer": "DFS"
      }
    ],
    "solutionGuide": {
      "idea": "需二刷：BFS 层序遍历模板题",
      "interviewSteps": [
        "先说明核心考点：BFS。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / BFS / 树 / 广度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "3. 入队孩子要判空：if node.left，否则 None.val 报错"
    },
    "codePreview": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\n# 📌 需二刷：BFS 层序遍历模板题\n#\n# 思路：用队列 BFS，每轮通过 len(queue) 确定当前层节点数，按层分组\n# 时间 O(n)，空间 O(n)（队列最多存一层的节点）\n#\n# ⚠️ 易错点/误区：\n# 1. queue 里放的是节点对象，不是值（需要访问 .left/.right）\n# 2. deque([root]) 不是 deque(root)（deque 接收可迭代对象，会逐个拆开）\n# 3. 入队孩子要判空：if node.left，否则 None.val 报错\n# 4. result 初始化为 []，不是 [[]]\n# 5. queue.append() 是往已有队列加，不要用 queue = deque(...) 覆盖整个队列\nfrom collections import deque\nclass Solution:\n    # ===== 方法一：BFS（面试首推 ⭐⭐⭐）=====\n    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:\n        if not root:                        # 边界：空树直接返回\n            return []\n        result = []\n        queue = deque([root])               # 根节点入队\n        while queue:                        # 队列不为空就继续\n            level_size = len(queue)          # 当前层有多少个节点\n            level = []                       # 存当前层的值\n            for i in range(level_size):      # 只处理当前层的节点\n                node = queue.popleft()       # 出队\n                level.append(node.val)       # 收集值\n                if node.left:                # 左孩子入队（下一层）\n                    queue.append(node.left)\n                if node.right:               # 右孩子入队（下一层）\n                    queue.append(node.right)\n            result.append(level)             # 当前层收集完毕\n        return result\n    # ===== 方法二：DFS（面试备选）=====\n    # 用递归 DFS，通过 depth 参数知道当前在第几层\n    # def levelOrder(self, root):\n    #     result = []\n    #     def dfs(node, depth):\n    #         if not node:\n    #             return\n    #         if depth == len(result):     # 第一次到这层，新建子列表\n    #             result.append([])\n    #         result[depth].append(node.val)\n    #         dfs(node.left, depth + 1)\n    #         dfs(node.right, depth + 1)\n    #     dfs(root, 0)\n    #     return result",
    "statement": "给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。\n\n \n\n示例 1：\n\n输入：root = [3,9,20,null,null,15,7]\n输出：[[3],[9,20],[15,7]]\n\n示例 2：\n\n输入：root = [1]\n输出：[[1]]\n\n示例 3：\n\n输入：root = []\n输出：[]\n\n \n\n提示：\n\n\t树中节点数目在范围 [0, 2000] 内\n\n\t-1000 <= Node.val <= 1000"
  },
  {
    "id": "108",
    "slug": "108-将有序数组转换为二叉搜索树",
    "title": "将有序数组转换为二叉搜索树",
    "titleEn": "Convert Sorted Array to Binary Search Tree",
    "category": "二叉树",
    "difficulty": "简单",
    "topic": "递归构建",
    "completed": true,
    "leetcodeSlug": "convert-sorted-array-to-binary-search-tree",
    "leetcodeUrl": "https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E5%B0%86%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E8%BD%AC%E6%8D%A2%E4%B8%BA%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91",
    "acceptanceRate": 80.6,
    "solutionCount": 3222,
    "companyTagCount": 63,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "递归构建",
      "树",
      "二叉搜索树",
      "数组",
      "分治"
    ],
    "sourcePath": "hot100/08_二叉树/108.将有序数组转换为二叉搜索树.py",
    "lastUpdated": "2026-03-19",
    "lastUpdatedAt": "2026-03-19T11:42:34.444Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "核心考点：递归构建",
      "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。"
    ],
    "pitfalls": [
      "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    ],
    "recallBlanks": [
      {
        "prompt": "先选 ＿＿＿/＿＿＿，再说＿＿＿函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "answer": "DFS"
      }
    ],
    "solutionGuide": {
      "idea": "核心考点：递归构建",
      "interviewSteps": [
        "先说明核心考点：递归构建。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / 递归构建 / 树 / 二叉搜索树。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "本地文件暂未提取到明确“易错点”注释，后续可在 Python 注释里补充。"
    },
    "codePreview": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:\n        if not nums:return None\n        mid = len(nums)//2\n        node = TreeNode(nums[mid])\n        node.left = self.sortedArrayToBST(nums[:mid])\n        node.right = self.sortedArrayToBST(nums[mid+1:])\n        return node",
    "statement": "给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 平衡 二叉搜索树。\n\n \n\n示例 1：\n\n输入：nums = [-10,-3,0,5,9]\n输出：[0,-3,9,-10,null,5]\n解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：\n\n示例 2：\n\n输入：nums = [1,3]\n输出：[3,1]\n解释：[1,null,3] 和 [3,1] 都是高度平衡二叉搜索树。\n\n \n\n提示：\n\n\t1 <= nums.length <= 104\n\n\t-104 <= nums[i] <= 104\n\n\tnums 按 严格递增 顺序排列"
  },
  {
    "id": "98",
    "slug": "98-验证二叉搜索树",
    "title": "验证二叉搜索树",
    "titleEn": "Validate Binary Search Tree",
    "category": "二叉树",
    "difficulty": "中等",
    "topic": "中序遍历 / 区间递归",
    "completed": true,
    "leetcodeSlug": "validate-binary-search-tree",
    "leetcodeUrl": "https://leetcode.cn/problems/validate-binary-search-tree/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E9%AA%8C%E8%AF%81%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91",
    "acceptanceRate": 41.4,
    "solutionCount": 5873,
    "companyTagCount": 97,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "中序遍历 / 区间递归",
      "树",
      "深度优先搜索",
      "二叉搜索树"
    ],
    "sourcePath": "hot100/08_二叉树/98.验证二叉搜索树.py",
    "lastUpdated": "2026-08-28",
    "lastUpdatedAt": "2026-08-28T19:43:18.288Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "需二刷：二叉搜索树性质验证（中序遍历单调性 / 递归有效上下界约束）",
      "方法一（递归区间法/上下界法）：每个节点值必须落在合法的开区间 (lower, upper) 内。",
      "时间 O(n)，空间 O(n)（最坏情况下树退化为链表时的递归栈深度）",
      "方法一：递归传递上下界区间（最简洁优雅，推荐）",
      "递归校验左子树（上界变为当前值）和右子树（下界变为当前值）"
    ],
    "pitfalls": [
      "3. 初始极小值：初始下界需设为 -float('inf')，防止第一个节点为负数（如 32 位整型最小值 -2147483648）时被误判。"
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：二叉搜索树性质验证（＿＿＿单调性 / ＿＿＿有效上下界约束）",
        "answer": "中序遍历"
      },
      {
        "prompt": "方法一（＿＿＿区间法/上下界法）：每个节点值必须落在合法的开区间 (lower, upper) 内。",
        "answer": "递归"
      }
    ],
    "solutionGuide": {
      "idea": "需二刷：二叉搜索树性质验证（中序遍历单调性 / 递归有效上下界约束）",
      "interviewSteps": [
        "先说明核心考点：中序遍历 / 区间递归。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / 中序遍历 / 区间递归 / 树 / 深度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "3. 初始极小值：初始下界需设为 -float('inf')，防止第一个节点为负数（如 32 位整型最小值 -2147483648）时被误判。"
    },
    "codePreview": "# Definition for a binary tree node.\nfrom typing import Optional\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\nclass Solution:\n    # ═════════════════════════════════════════════════════════════\n    # 方法一：递归传递上下界区间（最简洁优雅，推荐）\n    # ═════════════════════════════════════════════════════════════\n    def isValidBST(self, root: Optional[TreeNode]) -> bool:\n        def validate(node, lower, upper):\n            if not node:\n                return True\n            # 当前节点值必须严格在开区间 (lower, upper) 内\n            if not (lower < node.val < upper):\n                return False\n            # 递归校验左子树（上界变为当前值）和右子树（下界变为当前值）\n            return validate(node.left, lower, node.val) and validate(node.right, node.val, upper)\n        return validate(root, -float('inf'), float('inf'))\n    # ═════════════════════════════════════════════════════════════\n    # 方法二：中序遍历先收集数组，再判断严格递增（最符合直觉）\n    # ═════════════════════════════════════════════════════════════\n    # def isValidBST(self, root: Optional[TreeNode]) -> bool:\n    #     res = []\n    #     def inorder(node):\n    #         if not node:\n    #             return\n    #         inorder(node.left)\n    #         res.append(node.val)\n    #         inorder(node.right)\n    #\n    #     inorder(root)\n    #\n    #     # 检查是否严格递增\n    #     for i in range(1, len(res)):\n    #         if res[i] <= res[i - 1]:\n    #             return False\n    #     return True\n    # ═════════════════════════════════════════════════════════════\n    # 方法三：中序遍历中边遍历边比较前驱（提前剪枝短路）\n    # ═════════════════════════════════════════════════════════════\n    # def isValidBST(self, root: Optional[TreeNode]) -> bool:\n    #     prev = -float('inf')\n    #     def dfs(node):\n    #         nonlocal prev\n    #         if not node:\n    #             return True\n    #         if not dfs(node.left):\n    #             return False\n    #         if node.val <= prev:\n    #             return False\n    #         prev = node.val\n    #         return dfs(node.right)\n    #     return dfs(root)",
    "statement": "给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。\n\n有效 二叉搜索树定义如下：\n\n\t节点的左子树只包含 严格小于 当前节点的数。\n\n\t节点的右子树只包含 严格大于 当前节点的数。\n\n\t所有左子树和右子树自身必须也是二叉搜索树。\n\n \n\n示例 1：\n\n输入：root = [2,1,3]\n输出：true\n\n示例 2：\n\n输入：root = [5,1,4,null,null,3,6]\n输出：false\n解释：根节点的值是 5 ，但是右子节点的值是 4 。\n\n \n\n提示：\n\n\t树中节点数目范围在[1, 104] 内\n\n\t-231 <= Node.val <= 231 - 1"
  },
  {
    "id": "230",
    "slug": "230-二叉搜索树中第-k-小的元素",
    "title": "二叉搜索树中第 K 小的元素",
    "titleEn": "Kth Smallest Element in a BST",
    "category": "二叉树",
    "difficulty": "中等",
    "topic": "中序遍历 + nonlocal 计数器",
    "completed": true,
    "leetcodeSlug": "kth-smallest-element-in-a-bst",
    "leetcodeUrl": "https://leetcode.cn/problems/kth-smallest-element-in-a-bst/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%AD%E7%AC%AC%20K%20%E5%B0%8F%E7%9A%84%E5%85%83%E7%B4%A0",
    "acceptanceRate": 79.8,
    "solutionCount": 3142,
    "companyTagCount": 48,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "中序遍历 + nonlocal 计数器",
      "树",
      "深度优先搜索",
      "二叉搜索树"
    ],
    "sourcePath": "hot100/08_二叉树/230.二叉搜索树中第 K 小的元素.py",
    "lastUpdated": "2026-08-30",
    "lastUpdatedAt": "2026-08-30T17:10:05.094Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "时间 O(H + k)，H 为树高；空间 O(H)，递归栈深度"
    ],
    "pitfalls": [
      "1. 混淆 node.val 和 node.left.val：处理当前节点时记录 node.val，不是子节点的值"
    ],
    "recallBlanks": [
      {
        "prompt": "时间 O(H + k)，H 为树高；空间 O(H)，＿＿＿＿＿＿深度",
        "answer": "递归"
      }
    ],
    "solutionGuide": {
      "idea": "时间 O(H + k)，H 为树高；空间 O(H)，递归栈深度",
      "interviewSteps": [
        "先说明核心考点：中序遍历 + nonlocal 计数器。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / 中序遍历 + nonlocal 计数器 / 树 / 深度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 混淆 node.val 和 node.left.val：处理当前节点时记录 node.val，不是子节点的值"
    },
    "codePreview": "# Definition for a binary tree node.\nfrom typing import Optional\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\nclass Solution:\n    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:\n        # 📌 需二刷：BST 中序遍历 = 升序序列，nonlocal 维护计数器\n        #\n        # 思路：对 BST 做中序遍历（左→根→右），计数到第 k 个节点即为答案\n        # 时间 O(H + k)，H 为树高；空间 O(H)，递归栈深度\n        #\n        # ⚠️ 易错点/误区：\n        # 1. 混淆 node.val 和 node.left.val：处理当前节点时记录 node.val，不是子节点的值\n        # 2. return 放在 res=node.val 之前：导致赋值语句成为死代码\n        # 3. 基本情况写成 `if not node and count == 0`：只需判断 `if not node` 即可\n        # 4. nonlocal 要声明所有外层变量（count 和 res 都要写）\n        count = 0\n        res = 0\n        def dfs(node):\n            nonlocal count, res\n            if not node:\n                return\n            dfs(node.left)   # 左\n            count += 1       # 处理当前节点：计数 +1\n            if count == k:   # 数到第 k 个，记录答案\n                res = node.val\n                return\n            dfs(node.right)  # 右\n        dfs(root)\n        return res",
    "statement": "给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 小的元素（k 从 1 开始计数）。\n\n \n\n示例 1：\n\n输入：root = [3,1,4,null,2], k = 1\n输出：1\n\n示例 2：\n\n输入：root = [5,3,6,2,4,null,null,1], k = 3\n输出：3\n\n \n\n \n\n提示：\n\n\t树中的节点数为 n 。\n\n\t1 <= k <= n <= 104\n\n\t0 <= Node.val <= 104\n\n \n\n进阶：如果二叉搜索树经常被修改（插入/删除操作）并且你需要频繁地查找第 k 小的值，你将如何优化算法？"
  },
  {
    "id": "199",
    "slug": "199-二叉树的右视图",
    "title": "二叉树的右视图",
    "titleEn": "Binary Tree Right Side View",
    "category": "二叉树",
    "difficulty": "中等",
    "topic": "DFS 按深度分层 / BFS 每层取末尾",
    "completed": true,
    "leetcodeSlug": "binary-tree-right-side-view",
    "leetcodeUrl": "https://leetcode.cn/problems/binary-tree-right-side-view/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%8F%B3%E8%A7%86%E5%9B%BE",
    "acceptanceRate": 73.8,
    "solutionCount": 4861,
    "companyTagCount": 90,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "DFS 按深度分层 / BFS 每层取末尾",
      "树",
      "深度优先搜索",
      "广度优先搜索"
    ],
    "sourcePath": "hot100/08_二叉树/199.二叉树的右视图.py",
    "lastUpdated": "2026-08-30",
    "lastUpdatedAt": "2026-08-30T18:33:09.356Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "时间 O(n)，空间 O(n)（result 存所有节点 + 递归栈 O(H)）",
      "1. 先左后右 DFS：同层右节点追加在左节点后面，result[depth][-1] 自然是最右的"
    ],
    "pitfalls": [
      "2. depth  len(result) 是新层触发条件，不能写成 depth > len(result)（会重复 append）"
    ],
    "recallBlanks": [
      {
        "prompt": "时间 O(n)，空间 O(n)（result 存所有节点 + ＿＿＿＿＿＿ O(H)）",
        "answer": "递归"
      },
      {
        "prompt": "1. 先左后右 ＿＿＿：同层右节点追加在左节点后面，result[depth][-1] 自然是最右的",
        "answer": "DFS"
      }
    ],
    "solutionGuide": {
      "idea": "时间 O(n)，空间 O(n)（result 存所有节点 + 递归栈 O(H)）",
      "interviewSteps": [
        "先说明核心考点：DFS 按深度分层 / BFS 每层取末尾。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / DFS 按深度分层 / BFS 每层取末尾 / 树 / 深度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "2. depth  len(result) 是新层触发条件，不能写成 depth > len(result)（会重复 append）"
    },
    "codePreview": "# Definition for a binary tree node.\nfrom typing import Optional,List\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\nclass Solution:\n    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:\n        # 思路：DFS 按深度收集每层所有节点，每层最后一个即为右视图\n        # 时间 O(n)，空间 O(n)（result 存所有节点 + 递归栈 O(H)）\n        #\n        # ⚠️ 易错点/误区：\n        # 1. 先左后右 DFS：同层右节点追加在左节点后面，result[depth][-1] 自然是最右的\n        # 2. `depth == len(result)` 是新层触发条件，不能写成 `depth >= len(result)`（会重复 append）\n        # 3. 可以简化最后两行为：return [layer[-1] for layer in result]\n        result = []\n        def dfs(node, depth):\n            if not node:\n                return\n            if depth == len(result):   # 新的一层，追加空列表\n                result.append([])\n            result[depth].append(node.val)\n            dfs(node.left, depth + 1)   # 先左\n            dfs(node.right, depth + 1)  # 后右（同层右节点排在最后）\n        dfs(root, 0)\n        return [layer[-1] for layer in result]  # 每层取最后一个",
    "statement": "给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。\n\n \n\n示例 1：\n\n输入：root = [1,2,3,null,5,null,4]\n\n输出：[1,3,4]\n\n解释：\n\n示例 2：\n\n输入：root = [1,2,3,4,null,null,null,5]\n\n输出：[1,3,4,5]\n\n解释：\n\n示例 3：\n\n输入：root = [1,null,3]\n\n输出：[1,3]\n\n示例 4：\n\n输入：root = []\n\n输出：[]\n\n \n\n提示:\n\n\t二叉树的节点个数的范围是 [0,100]\n\n\t-100 <= Node.val <= 100"
  },
  {
    "id": "114",
    "slug": "114-二叉树展开为链表",
    "title": "二叉树展开为链表",
    "titleEn": "Flatten Binary Tree to Linked List",
    "category": "二叉树",
    "difficulty": "中等",
    "topic": "前序 DFS 收集节点 + 重连 right",
    "completed": true,
    "leetcodeSlug": "flatten-binary-tree-to-linked-list",
    "leetcodeUrl": "https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E4%BA%8C%E5%8F%89%E6%A0%91%E5%B1%95%E5%BC%80%E4%B8%BA%E9%93%BE%E8%A1%A8",
    "acceptanceRate": 76.2,
    "solutionCount": 4599,
    "companyTagCount": 56,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "前序 DFS 收集节点 + 重连 right",
      "栈",
      "树",
      "深度优先搜索",
      "链表"
    ],
    "sourcePath": "hot100/08_二叉树/114.二叉树展开为链表.py",
    "lastUpdated": "2026-08-30",
    "lastUpdatedAt": "2026-08-30T18:56:28.249Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "时间 O(n)，空间 O(n)（nodes 列表存所有节点）"
    ],
    "pitfalls": [
      "2. for 循环要用 range(len(nodes) - 1)，否则最后一个节点 nodes[i+1] 越界"
    ],
    "recallBlanks": [],
    "solutionGuide": {
      "idea": "时间 O(n)，空间 O(n)（nodes 列表存所有节点）",
      "interviewSteps": [
        "先说明核心考点：前序 DFS 收集节点 + 重连 right。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / 前序 DFS 收集节点 + 重连 right / 栈 / 树。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "2. for 循环要用 range(len(nodes) - 1)，否则最后一个节点 nodes[i+1] 越界"
    },
    "codePreview": "# Definition for a binary tree node.\nfrom typing import Optional \nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\nclass Solution:\n    def flatten(self, root: Optional[TreeNode]) -> None:\n        # 思路：前序遍历收集所有节点对象，再依次重连 right 指针，left 全置 None\n        # 时间 O(n)，空间 O(n)（nodes 列表存所有节点）\n        #\n        # ⚠️ 易错点/误区：\n        # 1. nodes 要存节点对象 node，不是 node.val（需要操作指针）\n        # 2. for 循环要用 range(len(nodes) - 1)，否则最后一个节点 nodes[i+1] 越界\n        # 3. 函数无返回值，原地修改 root\n        nodes = []\n        def dfs(node):\n            if not node:\n                return\n            nodes.append(node)          # 前序：先收集当前节点\n            dfs(node.left)\n            dfs(node.right)\n        dfs(root)\n        for i in range(len(nodes) - 1):  # 最后一个节点无需处理\n            nodes[i].right = nodes[i + 1]\n            nodes[i].left = None",
    "statement": "给你二叉树的根结点 root ，请你将它展开为一个单链表：\n\n\t展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。\n\n\t展开后的单链表应该与二叉树 先序遍历 顺序相同。\n\n \n\n示例 1：\n\n输入：root = [1,2,5,3,4,null,6]\n输出：[1,null,2,null,3,null,4,null,5,null,6]\n\n示例 2：\n\n输入：root = []\n输出：[]\n\n示例 3：\n\n输入：root = [0]\n输出：[0]\n\n \n\n提示：\n\n\t树中结点数在范围 [0, 2000] 内\n\n\t-100 \n\n \n\n进阶：你可以使用原地算法（O(1) 额外空间）展开这棵树吗？"
  },
  {
    "id": "105",
    "slug": "105-从前序与中序遍历序列构造二叉树",
    "title": "从前序与中序遍历序列构造二叉树",
    "titleEn": "Construct Binary Tree from Preorder and Inorder Traversal",
    "category": "二叉树",
    "difficulty": "中等",
    "topic": "递归分治 + index 定根",
    "completed": true,
    "leetcodeSlug": "construct-binary-tree-from-preorder-and-inorder-traversal",
    "leetcodeUrl": "https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E4%BB%8E%E5%89%8D%E5%BA%8F%E4%B8%8E%E4%B8%AD%E5%BA%8F%E9%81%8D%E5%8E%86%E5%BA%8F%E5%88%97%E6%9E%84%E9%80%A0%E4%BA%8C%E5%8F%89%E6%A0%91",
    "acceptanceRate": 73.3,
    "solutionCount": 4088,
    "companyTagCount": 76,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "递归分治 + index 定根",
      "树",
      "数组",
      "哈希表",
      "分治"
    ],
    "sourcePath": "hot100/08_二叉树/105.从前序与中序遍历序列构造二叉树.py",
    "lastUpdated": "2026-08-30",
    "lastUpdatedAt": "2026-08-30T19:13:25.025Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "时间 O(n²)（每次 index 是 O(n)）；空间 O(n)（递归栈 + 切片）",
      "4. 递归调用要写 self.buildTree(...)，不能漏掉 self"
    ],
    "pitfalls": [
      "1. 忘记边界：if not preorder 必须在第一行，否则空数组时 preorder[0] 报错",
      "2. inorder[mid] 是根节点的值（整数），不是子树数组，不能传给 buildTree",
      "4. 递归调用要写 self.buildTree(...)，不能漏掉 self"
    ],
    "recallBlanks": [
      {
        "prompt": "4. ＿＿＿调用要写 self.buildTree(...)，不能漏掉 self",
        "answer": "递归"
      }
    ],
    "solutionGuide": {
      "idea": "时间 O(n²)（每次 index 是 O(n)）；空间 O(n)（递归栈 + 切片）",
      "interviewSteps": [
        "先说明核心考点：递归分治 + index 定根。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / 递归分治 + index 定根 / 树 / 数组。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 忘记边界：if not preorder 必须在第一行，否则空数组时 preorder[0] 报错"
    },
    "codePreview": "class Solution:\n    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:\n        # 📌 需二刷：前序首元素是根，在中序中找根的位置，左边是左子树，右边是右子树\n        #\n        # 思路：递归分治，每次用 preorder[0] 建根，按 mid 切割左右子树递归构建\n        # 时间 O(n²)（每次 index 是 O(n)）；空间 O(n)（递归栈 + 切片）\n        #\n        # ⚠️ 易错点/误区：\n        # 1. 忘记边界：`if not preorder` 必须在第一行，否则空数组时 preorder[0] 报错\n        # 2. inorder[mid] 是根节点的值（整数），不是子树数组，不能传给 buildTree\n        # 3. 左子树前序切片：preorder[1:mid+1]（共 mid 个节点），右子树：preorder[mid+1:]\n        # 4. 递归调用要写 self.buildTree(...)，不能漏掉 self\n        if not preorder:\n            return None\n        root = TreeNode(preorder[0])                                          # 根节点\n        mid = inorder.index(preorder[0])                                      # 根在中序中的位置\n        root.left  = self.buildTree(preorder[1:mid+1], inorder[:mid])         # 左子树\n        root.right = self.buildTree(preorder[mid+1:],  inorder[mid+1:])       # 右子树\n        return root",
    "statement": "给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。\n\n \n\n示例 1:\n\n输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]\n输出: [3,9,20,null,null,15,7]\n\n示例 2:\n\n输入: preorder = [-1], inorder = [-1]\n输出: [-1]\n\n \n\n提示:\n\n\t1 <= preorder.length <= 3000\n\n\tinorder.length == preorder.length\n\n\t-3000 <= preorder[i], inorder[i] <= 3000\n\n\tpreorder 和 inorder 均 无重复 元素\n\n\tinorder 均出现在 preorder\n\n\tpreorder 保证 为二叉树的前序遍历序列\n\n\tinorder 保证 为二叉树的中序遍历序列"
  },
  {
    "id": "437",
    "slug": "437-路径总和-iii",
    "title": "路径总和 III",
    "titleEn": "Path Sum III",
    "category": "二叉树",
    "difficulty": "中等",
    "topic": "前缀和 + DFS",
    "completed": true,
    "leetcodeSlug": "path-sum-iii",
    "leetcodeUrl": "https://leetcode.cn/problems/path-sum-iii/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E8%B7%AF%E5%BE%84%E6%80%BB%E5%92%8C%20III",
    "acceptanceRate": 49.3,
    "solutionCount": 2520,
    "companyTagCount": 46,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "前缀和 + DFS",
      "树",
      "深度优先搜索"
    ],
    "sourcePath": "hot100/08_二叉树/437.路径总和 III.py",
    "lastUpdated": "2026-08-30",
    "lastUpdatedAt": "2026-08-30T19:31:23.941Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "需二刷：树上前缀和 + 哈希表，和 560 题思路完全一致",
      "时间 O(n)，空间 O(n)",
      "将当前前缀和加入哈希表"
    ],
    "pitfalls": [
      "否则兄弟分支会误用当前分支的前缀和，导致多计",
      "回溯：退出当前节点，撤销前缀和，防止污染兄弟分支"
    ],
    "recallBlanks": [
      {
        "prompt": "否则兄弟分支会误用当前分支的＿＿＿，导致多计",
        "answer": "前缀和"
      },
      {
        "prompt": "＿＿＿：退出当前节点，撤销＿＿＿，防止污染兄弟分支",
        "answer": "回溯"
      }
    ],
    "solutionGuide": {
      "idea": "需二刷：树上前缀和 + 哈希表，和 560 题思路完全一致",
      "interviewSteps": [
        "先说明核心考点：前缀和 + DFS。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / 前缀和 + DFS / 树 / 深度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "否则兄弟分支会误用当前分支的前缀和，导致多计"
    },
    "codePreview": "class Solution:\n    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:\n        # 📌 需二刷：树上前缀和 + 哈希表，和 560 题思路完全一致\n        #\n        # 思路：DFS 维护根到当前节点的路径前缀和，哈希表记录各前缀和出现次数\n        #       当 curr_sum - targetSum 在 map 中，说明存在一条以当前节点结尾的合法路径\n        # 时间 O(n)，空间 O(n)\n        #\n        # ⚠️ 易错点/误区：\n        # 1. prefix_map 初始化 {0:1}：处理从根节点开始、路径和恰好等于 target 的情况\n        # 2. 回溯必不可少：处理完当前节点后 prefix_map[curr_sum] -= 1\n        #    否则兄弟分支会误用当前分支的前缀和，导致多计\n        # 3. count 是整数，修改需要 nonlocal；prefix_map 是字典，原地修改不需要 nonlocal\n        prefix_map = {0: 1}  # 前缀和 → 出现次数，初始空路径和为 0\n        count = 0\n        def dfs(node, curr_sum):\n            nonlocal count\n            if not node:\n                return\n            curr_sum += node.val\n            # 查找有多少条路径，其前缀和 = curr_sum - targetSum\n            count += prefix_map.get(curr_sum - targetSum, 0)\n            # 将当前前缀和加入哈希表\n            prefix_map[curr_sum] = prefix_map.get(curr_sum, 0) + 1\n            dfs(node.left, curr_sum)\n            dfs(node.right, curr_sum)\n            # 回溯：退出当前节点，撤销前缀和，防止污染兄弟分支\n            prefix_map[curr_sum] -= 1\n        dfs(root, 0)\n        return count",
    "statement": "给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。\n\n路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。\n\n \n\n示例 1：\n\n输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8\n输出：3\n解释：和等于 8 的路径有 3 条，如图所示。\n\n示例 2：\n\n输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22\n输出：3\n\n \n\n提示:\n\n\t二叉树的节点个数的范围是 [0,1000]\n\n\t-109 9 \n\n\t-1000"
  },
  {
    "id": "236",
    "slug": "236-二叉树的最近公共祖先",
    "title": "二叉树的最近公共祖先",
    "titleEn": "Lowest Common Ancestor of a Binary Tree",
    "category": "二叉树",
    "difficulty": "中等",
    "topic": "递归",
    "completed": true,
    "leetcodeSlug": "lowest-common-ancestor-of-a-binary-tree",
    "leetcodeUrl": "https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88",
    "acceptanceRate": 75.4,
    "solutionCount": 4560,
    "companyTagCount": 111,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "递归",
      "树",
      "深度优先搜索",
      "最近公共祖先",
      "Binary Lifting"
    ],
    "sourcePath": "hot100/08_二叉树/236.二叉树的最近公共祖先.py",
    "lastUpdated": "2026-08-30",
    "lastUpdatedAt": "2026-08-30T20:38:07.470Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "需二刷：经典递归 LCA，\"向下找、向上汇报\"模型",
      "时间 O(n)，空间 O(n)（递归栈）"
    ],
    "pitfalls": [
      "1. 终止条件必须 return node，不能写 return（返回 None 等于\"没找到\"）"
    ],
    "recallBlanks": [
      {
        "prompt": "需二刷：经典＿＿＿ LCA，\"向下找、向上汇报\"模型",
        "answer": "递归"
      }
    ],
    "solutionGuide": {
      "idea": "需二刷：经典递归 LCA，\"向下找、向上汇报\"模型",
      "interviewSteps": [
        "先说明核心考点：递归。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / 递归 / 树 / 深度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 终止条件必须 return node，不能写 return（返回 None 等于\"没找到\"）"
    },
    "codePreview": "# Definition for a binary tree node.\nclass TreeNode:\n    def __init__(self, x):\n        self.val = x\n        self.left = None\n        self.right = None\nclass Solution:\n    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':\n        # 📌 需二刷：经典递归 LCA，\"向下找、向上汇报\"模型\n        #\n        # 思路：dfs(node) 语义 = 在以 node 为根的子树里找 p/q，找到就返回，否则返回 None\n        #       若左右子树都有返回值 → 当前节点就是 LCA\n        #       若只有一侧有返回值 → 把那个结果继续往上传\n        # 时间 O(n)，空间 O(n)（递归栈）\n        #\n        # ⚠️ 易错点/误区：\n        # 1. 终止条件必须 return node，不能写 return（返回 None 等于\"没找到\"）\n        # 2. 只有一侧有结果时，用 left or right 传递非空的那个；return node 是错的\n        # 3. 外层必须 return dfs(root)，光调用不 return 结果直接丢掉\n        def dfs(node):\n            # 空节点 or 找到 p/q → 直接返回\n            if not node or node == p or node == q:\n                return node\n            left = dfs(node.left)   # 左子树汇报\n            right = dfs(node.right) # 右子树汇报\n            # 两侧都有 → 当前节点是 LCA\n            if left and right:\n                return node\n            # 只有一侧有 → 把结果往上传（left/right 必有一个 None）\n            return left or right\n        return dfs(root)",
    "statement": "给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。\n\n百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”\n\n \n\n示例 1：\n\n输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1\n输出：3\n解释：节点 5 和节点 1 的最近公共祖先是节点 3 。\n\n示例 2：\n\n输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4\n输出：5\n解释：节点 5 和节点 4 的最近公共祖先是节点 5 。因为根据定义最近公共祖先节点可以为节点本身。\n\n示例 3：\n\n输入：root = [1,2], p = 1, q = 2\n输出：1\n\n \n\n提示：\n\n\t树中节点数目在范围 [2, 105] 内。\n\n\t-109 9\n\n\t所有 Node.val 互不相同 。\n\n\tp != q\n\n\tp 和 q 均存在于给定的二叉树中。"
  },
  {
    "id": "124",
    "slug": "124-二叉树中的最大路径和",
    "title": "二叉树中的最大路径和",
    "titleEn": "Binary Tree Maximum Path Sum",
    "category": "二叉树",
    "difficulty": "困难",
    "topic": "后序 DFS + 拐弯点全局更新",
    "completed": true,
    "leetcodeSlug": "binary-tree-maximum-path-sum",
    "leetcodeUrl": "https://leetcode.cn/problems/binary-tree-maximum-path-sum/",
    "nowcoderUrl": "https://www.nowcoder.com/search/all?query=%E4%BA%8C%E5%8F%89%E6%A0%91%E4%B8%AD%E7%9A%84%E6%9C%80%E5%A4%A7%E8%B7%AF%E5%BE%84%E5%92%8C",
    "acceptanceRate": 48.4,
    "solutionCount": 3097,
    "companyTagCount": 99,
    "paidOnly": false,
    "sourceBanks": [
      "LeetCode Hot 100"
    ],
    "tags": [
      "二叉树",
      "后序 DFS + 拐弯点全局更新",
      "树",
      "深度优先搜索",
      "动态规划",
      "树形 DP"
    ],
    "sourcePath": "hot100/08_二叉树/124.二叉树中的最大路径和.py",
    "lastUpdated": "2026-08-30",
    "lastUpdatedAt": "2026-08-30T20:58:02.924Z",
    "interviewPattern": "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
    "thoughts": [
      "时间 O(n)，空间 O(h)，h 为树高（递归栈）"
    ],
    "pitfalls": [
      "1. 向父节点贡献的最大单侧路径（只能选左或右，不能拐弯）",
      "3. 忘记负增益过滤（max(..., 0)）：负子树会拖低路径和，应舍弃",
      "4. 拐弯值（turning）只能更新全局答案，不能作为 return 值向上传"
    ],
    "recallBlanks": [
      {
        "prompt": "时间 O(n)，空间 O(h)，h 为树高（＿＿＿＿＿＿）",
        "answer": "递归"
      }
    ],
    "solutionGuide": {
      "idea": "时间 O(n)，空间 O(h)，h 为树高（递归栈）",
      "interviewSteps": [
        "先说明核心考点：后序 DFS + 拐弯点全局更新。",
        "先选 DFS/BFS，再说递归函数返回什么；树题的关键通常在“当前节点要向父节点交付什么”。",
        "关键词：二叉树 / 后序 DFS + 拐弯点全局更新 / 树 / 深度优先搜索。"
      ],
      "complexity": "面试时补充时间复杂度和空间复杂度。",
      "keyMistake": "1. 向父节点贡献的最大单侧路径（只能选左或右，不能拐弯）"
    },
    "codePreview": "# Definition for a binary tree node.\nfrom typing import Optional\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\nclass Solution:\n    def maxPathSum(self, root: Optional[TreeNode]) -> int:\n        # 📌 需二刷：后序遍历 + 全局变量更新 —— \"拐弯点\"思维模型\n        #\n        # 思路：对每个节点做后序 DFS，区分两种用途：\n        #   1. 向父节点贡献的最大单侧路径（只能选左或右，不能拐弯）\n        #   2. 在当前节点拐弯（左 + 根 + 右），用于更新全局最大值\n        # 时间 O(n)，空间 O(h)，h 为树高（递归栈）\n        #\n        # ⚠️ 易错点/误区：\n        # 1. maximum 初始化为 0 而非 float('-inf')：全负数树时会错误返回 0\n        # 2. base case 写 return 而非 return 0：导致 max(None, 0) 报 TypeError\n        # 3. 忘记负增益过滤（max(..., 0)）：负子树会拖低路径和，应舍弃\n        # 4. 拐弯值（turning）只能更新全局答案，不能作为 return 值向上传\n        maximum = float('-inf')\n        def dfs(node):\n            nonlocal maximum\n            if not node:\n                return 0  # 空节点贡献为 0\n            # 后序：先拿左右子树的最大贡献，负数直接舍弃（取 0）\n            left_gain = max(dfs(node.left), 0)\n            right_gain = max(dfs(node.right), 0)\n            # 在当前节点\"拐弯\"，尝试更新全局最大值\n            turning = node.val + left_gain + right_gain\n            maximum = max(turning, maximum)\n            # 向父节点只能贡献单侧（左或右，取较大值）\n            return node.val + max(left_gain, right_gain)\n        dfs(root)\n        return maximum",
    "statement": "二叉树中的 路径 被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。\n\n路径和 是路径中各节点值的总和。\n\n给你一个二叉树的根节点 root ，返回其 最大路径和 。\n\n \n\n示例 1：\n\n输入：root = [1,2,3]\n输出：6\n解释：最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6\n\n示例 2：\n\n输入：root = [-10,9,20,null,null,15,7]\n输出：42\n解释：最优路径是 15 -> 20 -> 7 ，路径和为 15 + 20 + 7 = 42\n\n \n\n提示：\n\n\t树中节点数目范围是 [1, 3 * 104]\n\n\t-1000 <= Node.val <= 1000"
  }
]
