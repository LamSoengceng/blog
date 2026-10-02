// 本文件由 scripts/generateAlgorithmData.mjs 自动生成，请勿手改。
import { hashTableProblems } from './problems/hash-table'
import { twoPointersProblems } from './problems/two-pointers'
import { slidingWindowProblems } from './problems/sliding-window'
import { substringProblems } from './problems/substring'
import { arrayProblems } from './problems/array'
import { matrixProblems } from './problems/matrix'
import { linkedListProblems } from './problems/linked-list'
import { binaryTreeProblems } from './problems/binary-tree'
import { graphProblems } from './problems/graph'
import { backtrackingProblems } from './problems/backtracking'
import { binarySearchProblems } from './problems/binary-search'
import { stackProblems } from './problems/stack'
import { heapProblems } from './problems/heap'
import { greedyProblems } from './problems/greedy'
import { dynamicProgrammingProblems } from './problems/dynamic-programming'
import { tricksProblems } from './problems/tricks'
import { hot100ExtraProblems } from './problems/hot100-extra'
import type { AlgorithmCategory, AlgorithmProblem, AlgorithmRecentItem, AlgorithmReviewItem } from './types'

export type { AlgorithmCategory, AlgorithmProblem, AlgorithmRecentItem, AlgorithmReviewItem } from './types'

export const algorithmProblems: AlgorithmProblem[] = [
  ...hashTableProblems,
  ...twoPointersProblems,
  ...slidingWindowProblems,
  ...substringProblems,
  ...arrayProblems,
  ...matrixProblems,
  ...linkedListProblems,
  ...binaryTreeProblems,
  ...graphProblems,
  ...backtrackingProblems,
  ...binarySearchProblems,
  ...stackProblems,
  ...heapProblems,
  ...greedyProblems,
  ...dynamicProgrammingProblems,
  ...tricksProblems,
  ...hot100ExtraProblems,
]

export const algorithmCategories: AlgorithmCategory[] = [
  {
    "name": "哈希表",
    "total": 3,
    "solved": 3,
    "hard": 0
  },
  {
    "name": "双指针",
    "total": 4,
    "solved": 4,
    "hard": 1
  },
  {
    "name": "滑动窗口",
    "total": 3,
    "solved": 3,
    "hard": 1
  },
  {
    "name": "子串",
    "total": 3,
    "solved": 3,
    "hard": 2
  },
  {
    "name": "普通数组",
    "total": 5,
    "solved": 5,
    "hard": 1
  },
  {
    "name": "矩阵",
    "total": 4,
    "solved": 4,
    "hard": 0
  },
  {
    "name": "链表",
    "total": 12,
    "solved": 12,
    "hard": 1
  },
  {
    "name": "二叉树",
    "total": 15,
    "solved": 15,
    "hard": 1
  },
  {
    "name": "图论",
    "total": 4,
    "solved": 4,
    "hard": 0
  },
  {
    "name": "回溯",
    "total": 8,
    "solved": 8,
    "hard": 1
  },
  {
    "name": "二分查找",
    "total": 6,
    "solved": 6,
    "hard": 1
  },
  {
    "name": "栈",
    "total": 5,
    "solved": 5,
    "hard": 1
  },
  {
    "name": "堆",
    "total": 3,
    "solved": 3,
    "hard": 1
  },
  {
    "name": "贪心",
    "total": 4,
    "solved": 4,
    "hard": 0
  },
  {
    "name": "动态规划",
    "total": 16,
    "solved": 16,
    "hard": 2
  },
  {
    "name": "技巧",
    "total": 5,
    "solved": 5,
    "hard": 0
  },
  {
    "name": "Hot100 补充",
    "total": 17,
    "solved": 17,
    "hard": 1
  }
]

export const algorithmReviewQueue: AlgorithmReviewItem[] = [
  {
    "id": "11",
    "title": "盛最多水的容器",
    "slug": "11-盛最多水的容器",
    "reason": "坑1: area 初始化写成 area  () (空元组)，不能和 int 比大小"
  },
  {
    "id": "15",
    "title": "三数之和",
    "slug": "15-三数之和",
    "reason": "去重：跳过重复的第一个数（i > 0 防止越界）"
  },
  {
    "id": "42",
    "title": "接雨水",
    "slug": "42-接雨水",
    "reason": "# 创建备忘录"
  },
  {
    "id": "239",
    "title": "滑动窗口最大值",
    "slug": "239-滑动窗口最大值",
    "reason": "1. 队列必须存「下标」而非「值」，否则无法判断元素是否滑出窗口过期"
  },
  {
    "id": "560",
    "title": "和为 K 的子数组",
    "slug": "560-和为-k-的子数组",
    "reason": "否则会漏掉从下标0开始、和刚好等于k的子数组"
  },
  {
    "id": "76",
    "title": "最小覆盖子串",
    "slug": "76-最小覆盖子串",
    "reason": "注意这里的返回值是 \"\" 而不是 \" \""
  },
  {
    "id": "239",
    "title": "滑动窗口最大值",
    "slug": "239-滑动窗口最大值",
    "reason": "1. 队列必须存「下标」而非「值」，否则无法判断元素是否滑出窗口过期"
  },
  {
    "id": "53",
    "title": "最大子数组和",
    "slug": "53-最大子数组和",
    "reason": "1. max_sum 不能初始化为 0，否则全负数数组（如 [-3,-2,-1]）会返回 0"
  }
]

export const algorithmRecentProblems: AlgorithmRecentItem[] = [
  {
    "id": "460",
    "slug": "460-lfu-缓存",
    "title": "LFU 缓存",
    "category": "Hot100 补充",
    "difficulty": "困难",
    "topic": "设计",
    "tags": [
      "Hot100 补充",
      "设计",
      "哈希表",
      "链表",
      "双向链表"
    ],
    "sourcePath": "hot100/460.LFU 缓存.py",
    "lastUpdated": "2026-09-27",
    "leetcodeUrl": "https://leetcode.cn/problems/lfu-cache/",
    "codePreview": "class Node:\n    def __init__(self, key:int, val:int):\n        self.key =key\n        self.val = val\n        self.next = None\n        self.prev = None\n        self.freq = 1\nclass DoubleListNode:\n    def __init__(self):\n        self.head = Node(0,0)\n        self.tail = Node(0,0)\n        self.head.next = self.tail\n        self.tail.prev = self.head\n        self._size = 0\n    def addlast(self, x):\n        x.next = self.tail\n        x.prev = self.tail.prev\n        self.tail.prev.next = x\n        self.tail.prev = x\n        self._size += 1\n    def remove(self, x):\n        x.next.prev = x.prev\n        x.prev.next = x.next\n        self._size -= 1\n    def removefirst(self):\n        if self.head.next == self.tail:\n            return None\n        first = self.head.next\n        self.remove(first)\n        return first\nclass LFUCache:\n# 同一个频次的key会放在同一个双向链表里面\n    def __init__(self, capacity: int):\n        self.cap = capacity\n        self.min_freq = 0\n        self.key_to_node = {}\n        self.freq_to_list = {}\n    def increase_freq(self, node: Node):\n        freq = node.freq\n        self.freq_to_list[freq].remove(node)\n        if freq == self.min_freq and self.freq_to_list[freq]._size == 0:\n            self.min_freq += 1 \n        node.freq += 1\n        if node.freq not in self.freq_to_list:\n            self.freq_to_list[node.freq] = DoubleListNode()\n        self.freq_to_list[node.freq].addlast(node)\n    def  remove_min_freq(self):\n        min_list = self.freq_to_list[self.min_freq]\n        deleted_node = min_list.removefirst()\n        self.key_to_node.pop(deleted_node.key)\n    def get(self, key: int) -> int:\n        if key not in self.key_to_node:\n            return -1\n        node = self.key_to_node[key]\n        self.increase_freq(node)\n        return node.val\n    def put(self, key: int, value: int) -> None:\n        if self.cap == 0:  # ⚠️ 边界防坑：容量为 0 时直接返回\n            return\n        # 情况 1：key 已存在 -> 更新值并提升频次\n        if key in self.key_to_node:\n            node = self.key_to_node[key]\n            node.val = value\n            self.increase_freq(node)\n            return\n        # 情况 2：全新 key -> 检查容量，插入 freq=1 的链表\n        if len(self.key_to_node) == self.cap:\n            self.remove_min_freq()\n        # 构造新节点（频次默认是 1）\n        new_node = Node(key, value)\n        self.key_to_node[key] = new_node\n        # 挂到 freq=1 的链表中\n        if 1 not in self.freq_to_list:\n            self.freq_to_list[1] = DoubleListNode()\n        self.freq_to_list[1].addlast(new_node)\n        # 🌟 关键：新插入的节点频次是 1，所以全局最小频次必然重置为 1！\n        self.min_freq = 1\n# Your LFUCache object will be instantiated and called as such:\n# obj = LFUCache(capacity)\n# param_1 = obj.get(key)\n# obj.put(key,value)"
  },
  {
    "id": "146",
    "slug": "146-lru-缓存",
    "title": "LRU 缓存",
    "category": "Hot100 补充",
    "difficulty": "中等",
    "topic": "设计",
    "tags": [
      "Hot100 补充",
      "设计",
      "哈希表",
      "链表",
      "双向链表"
    ],
    "sourcePath": "hot100/07_链表/146.LRU 缓存.py",
    "lastUpdated": "2026-09-27",
    "leetcodeUrl": "https://leetcode.cn/problems/lru-cache/",
    "codePreview": "# 📌 ✅ 二刷完成 (2026-09-27，牛客网手撕实战 AC)\n#\n# 思路：map 负责 O(1) 查找节点，双向链表维护访问顺序。\n#       每次访问（get/set/put）将节点移到链表尾部表示\"最近使用\"，\n#       缓存满时淘汰链表头部节点（最久未使用）\n# 时间 O(1)，空间 O(capacity)\n#\n# ⚠️ 易错点/实战踩坑复盘：\n# 1. 函数参数命名不一致导致 NameError：接口形参常为 (key, value)，内部调用易笔误写成 val 报 NameError\n# 2. 函数调用漏写括号 () 静默失效：self.removeLeastRecently 漏了 () 会仅引用函数对象而不执行淘汰，导致容量超标\n# 3. 辅助函数签名与调用不匹配：removefirst() 自动从 head.next 摘取节点，若定义为 def removefirst(self, x) 会在无参调用时报 missing 1 argument\n# 4. 更新已有 key 时误调底层方法：在 Solution 中误写 self.addlast(key)，应统一调用 self.addrecently(key, value)\n# 5. Node 必须同时存储 key 和 val：淘汰链表节点时，必须拿到 node.key 才能同步从 map 中 pop 掉条目\nclass Node:\n    # 链表节点：同时存储 key（用于从被删节点反查 map 的 key）和 val\n    def __init__(self, key, val):\n        self.key = key\n        self.val = val\n        self.prev = None\n        self.next = None\nclass DoublelistNode:\n    def __init__(self):\n        self.head = Node(0,0)\n        self.tail = Node(0,0)\n        self._size = 0\n        self.head.next = self.tail\n        self.tail.prev = self.head\n    def addlast(self,x):\n        x.prev = self.tail.prev\n        x.next = self.tail\n        self.tail.prev.next = x \n        self.tail.prev = x\n        self._size += 1\n    def remove(self,x):\n        x.next.prev = x.prev\n        x.prev.next = x.next\n        self._size -= 1\n    def removefirst(self):\n        if self.head.next == self.tail:\n            return None\n        first = self.head.next\n        self.remove(first)\n        return first\n    def size(self):\n        return self._size\nclass LRUCache:\n    def __init__(self, capacity: int):\n        self.map = {}                # key → Node，O(1) 定位节点\n        self.cache = DoublelistNode() # 双向链表，维护访问顺序\n        self.cap = capacity\n    def get(self, key: int) -> int:\n        if key not in self.map:\n            return -1\n        self.makerecently(key)       # ⚠️ 这里容易写成 x，但 makerecently 接收的是 key\n        return self.map[key].val\n    def put(self, key: int, val: int) -> None:\n        # 情况 1：key 已存在 → 先删旧节点，再插新节点（更新值和顺序）\n        if key in self.map:\n            self.deletekey(key)\n            self.addrecently(key, val)\n            return\n        # 情况 2：缓存满 → 淘汰最久未使用的头节点\n        if self.cap == self.cache.size():\n            self.removeLeastRecently()\n        # 情况 3：直接插入新节点\n        self.addrecently(key, val)\n    # 将 key 对应的节点移到链表尾部（标记为最近使用）\n    def makerecently(self, key: int):\n        x = self.map[key]\n        self.cache.remove(x)         # 先删\n        self.cache.addlast(x)        # 再放到尾部\n    # 新建节点并添加到链表尾部，同时在 map 中注册\n    def addrecently(self, key: int, val: int):\n        x = Node(key, val)\n        self.cache.addlast(x)\n        self.map[key] = x\n    # 删除指定 key 的节点（更新操作时用）\n    def deletekey(self, key: int):\n        x = self.map[key]\n        self.cache.remove(x)\n        self.map.pop(key)\n    # 淘汰最久未使用的元素（链表头部节点）\n    def removeLeastRecently(self):\n        deletedNode = self.cache.removefirst()\n        deletedKey = deletedNode.key  # 从节点中拿到 key，去 map 中清除\n        self.map.pop(deletedKey)\n# Your LRUCache object will be instantiated and called as such:\n# obj = LRUCache(capacity)\n# param_1 = obj.get(key)\n# obj.put(key,value)"
  },
  {
    "id": "1514",
    "slug": "1514-概率最大的路径",
    "title": "概率最大的路径",
    "category": "Hot100 补充",
    "difficulty": "中等",
    "topic": "图",
    "tags": [
      "Hot100 补充",
      "图",
      "数组",
      "最短路",
      "Dijkstra 算法"
    ],
    "sourcePath": "hot100/1514.概率最大的路径.py",
    "lastUpdated": "2026-09-05",
    "leetcodeUrl": "https://leetcode.cn/problems/path-with-maximum-probability/",
    "codePreview": "from typing import List\nimport heapq\n# [需二刷]：乘积最大路径（Dijkstra 堆优化变体 / 大顶堆）\n#\n# 思路：\n# 1. 本质是单源最长/最大路径问题，由于边权 p ∈ [0, 1]，路径概率乘积单调不增，满足 Dijkstra 贪心选择性质（类似于求和最短路）。\n# 2. 建无向加权图 graph[u] = [(v, p), ...]。\n# 3. 维护概率数组 prob，初始化为 0.0，起点 prob[start_node] = 1.0。\n# 4. 利用最大堆（Python 中存储负概率 -p 实现大顶堆）每次弹出当前未确认节点中概率最大的节点。\n# 5. 出堆时若当前节点即为 end_node，直接返回对应概率（贪心最优保证）；若 cur_p < prob[u]，说明是过期历史状态，跳过剪枝。\n# 6. 遍历邻居松弛：new_p = cur_p * p，若 new_p > prob[v]，更新 prob[v] 并入堆。\n#\n# 时间复杂度：O(E log E) 或 O(E log V)，其中 E 为边数，V 为顶点数 n，堆操作耗时。\n# 空间复杂度：O(V + E)，邻接表图、prob 数组以及优先队列的存储开销。\n#\n# 易错点/误区：\n# 1. 为什么这道「最长路径」可以用 Dijkstra？普通图中求最长路径是 NP-hard 且存在正环；但本题中所有边权 p ∈ [0, 1]，乘法会使概率单调递减（或保持不变），不存在无限放大的正环，满足贪心性质。\n# 2. Python 默认是小顶堆，需要存入负值 -p 来模拟大顶堆。\n# 3. 终止条件优化：只要 end_node 第一次出堆，其概率即为全局最大，可直接 return 提前退出。\n# 4. 浮点精度：乘法直接累乘，但在极长路径中如果发生下溢，一般可通过转 log（将乘法转加法求最短路）避免精度丢失（本题精度要求 1e-5，直接浮点乘积足够通过）。\nclass Solution:\n    def maxProbability(self, n: int, edges: List[List[int]], succProb: List[float], start_node: int, end_node: int) -> float:\n        graph = [[] for _ in range(n)]\n        for (u, v), p in zip(edges, succProb):\n            graph[u].append((v, p))\n            graph[v].append((u, p))\n        prob = [0.0] * n\n        prob[start_node] = 1.0\n        pq = [(-1.0, start_node)]\n        while pq:\n            neg_p, u = heapq.heappop(pq)\n            cur_p = -neg_p\n            if u == end_node:\n                return cur_p\n            if cur_p < prob[u]:\n                continue\n            for v, p in graph[u]:\n                new_p = cur_p * p\n                if new_p > prob[v]:\n                    prob[v] = new_p\n                    heapq.heappush(pq, (-new_p, v))\n        return 0.0"
  },
  {
    "id": "130",
    "slug": "130-被围绕的区域",
    "title": "被围绕的区域",
    "category": "Hot100 补充",
    "difficulty": "中等",
    "topic": "深度优先搜索",
    "tags": [
      "Hot100 补充",
      "深度优先搜索",
      "广度优先搜索",
      "并查集",
      "数组"
    ],
    "sourcePath": "hot100/130.被围绕的区域.py",
    "lastUpdated": "2026-09-04",
    "leetcodeUrl": "https://leetcode.cn/problems/surrounded-regions/",
    "codePreview": "from typing import List\n# [需二刷]：并查集虚拟超级源点 (Dummy Root) 技巧\n#\n# 思路：\n# 1. 逆向思考：与其找“被包围的 O”，不如找出所有与“网格边界连通的 O”（免死安全区）。\n# 2. 引入虚拟超级源点 dummy = (-1, -1)，代表通往外界的安全区。\n# 3. 遍历网格：\n#    - 凡位于四条边界上的 'O'，一律与 dummy 执行 union 合并；\n#    - 内部的 'O' 仅需向右 (0, 1) 和向下 (1, 0) 查看，若邻居也是 'O' 则执行 union。\n# 4. 二次遍历整盘清算：\n#    - 凡是 board[r][c] == 'O' 且 find((r, c)) != find(dummy) 的，说明未能连通边界，原地修改为 'X'。\n#\n# 时间复杂度：O(M * N * alpha(M * N)) ≈ O(M * N)，每个格子常数次操作\n# 空间复杂度：O(M * N)，并查集 parent 字典空间\n#\n# 易错点/误区：\n# 1. 误区：直接将不在边缘的 'O' 变 'X' 会误杀！因为内部的 'O' 可能顺着通道连接到边缘。\n# 2. 遍历方向：内部合并只需向右和向下看两个方向，即可覆盖所有无向邻接关系，避免四方向重复判断。\n# 3. 空矩阵守卫：进入前需进行 if not board or not board[0]: return 守卫校验，防止越界。\nclass UnionFind:\n    def __init__(self):\n        self.parent = {}\n    def find(self, x):\n        if x not in self.parent:\n            self.parent[x] = x\n        if self.parent[x] != x:\n            self.parent[x] = self.find(self.parent[x])\n        return self.parent[x]\n    def union(self, x, y):\n        root_x = self.find(x)\n        root_y = self.find(y)\n        if root_x != root_y:\n            self.parent[root_x] = root_y\nclass Solution:\n    def solve(self, board: List[List[str]]) -> None:\n        \"\"\"\n        Do not return anything, modify board in-place instead.\n        \"\"\"\n        if not board or not board[0]:\n            return\n        m = len(board)\n        n = len(board[0])\n        uf = UnionFind()\n        dummy = (-1, -1)\n        # 阶段 1：构建连通分量，边界 'O' 归入 dummy\n        for r in range(m):\n            for c in range(n):\n                if board[r][c] == \"O\":\n                    if r == 0 or r == (m - 1) or c == 0 or c == (n - 1):\n                        uf.union((r, c), dummy)\n                    for dr, dc in [(0, 1), (1, 0)]:\n                        nr, nc = r + dr, c + dc\n                        if nr < m and nc < n and board[nr][nc] == \"O\":\n                            uf.union((r, c), (nr, nc))\n        # 阶段 2：未与 dummy 连通的内部 'O' 替换为 'X'\n        for r in range(m):\n            for c in range(n):\n                if board[r][c] == \"O\":\n                    if uf.find((r, c)) != uf.find(dummy):\n                        board[r][c] = \"X\"\nif __name__ == '__main__':\n    sol = Solution()\n    b1 = [\n        [\"X\", \"X\", \"X\", \"X\"],\n        [\"X\", \"O\", \"O\", \"X\"],\n        [\"X\", \"X\", \"O\", \"X\"],\n        [\"X\", \"O\", \"X\", \"X\"]\n    ]\n    sol.solve(b1)\n    assert b1 == [\n        [\"X\", \"X\", \"X\", \"X\"],\n        [\"X\", \"X\", \"X\", \"X\"],\n        [\"X\", \"X\", \"X\", \"X\"],\n        [\"X\", \"O\", \"X\", \"X\"]\n    ]\n    b2 = [[\"X\"]]\n    sol.solve(b2)\n    assert b2 == [[\"X\"]]\n    print(\"All tests passed successfully!\")"
  },
  {
    "id": "990",
    "slug": "990-等式方程的可满足性",
    "title": "等式方程的可满足性",
    "category": "Hot100 补充",
    "difficulty": "中等",
    "topic": "并查集",
    "tags": [
      "Hot100 补充",
      "并查集",
      "图",
      "数组",
      "字符串"
    ],
    "sourcePath": "hot100/990.等式方程的可满足性.py",
    "lastUpdated": "2026-09-04",
    "leetcodeUrl": "https://leetcode.cn/problems/satisfiability-of-equality-equations/",
    "codePreview": "from typing import List\n# [需二刷]：并查集变量逻辑等价传递与矛盾校验（两遍扫描法）\n#\n# 思路：\n# 1. 采用动态字典并查集（Union-Find），节点直接为字符，免去数字映射心智负担。\n# 2. 第一遍扫描：遍历所有等式（\"==\"），将两侧变量 union 合并至同一集合。\n# 3. 第二遍扫描：遍历所有不等式（\"!=\"），通过 find 校验两侧变量：\n#    若其根节点相同，说明二者此前已被判定为相等，产生逻辑矛盾，立即返回 False。\n# 4. 若所有不等式均未产生冲突，返回 True。\n#\n# 时间复杂度：O(N * alpha(C)) ≈ O(N)，其中 N 为方程总数，C <= 26 为字符种类\n# 空间复杂度：O(C) ≈ O(1)，字典最多存储 26 个小写字母\n#\n# 易错点/误区：\n# 1. 单遍扫描漏洞：不能边合并边判断！若 \"!=\" 出现在 \"==\" 之前（如 [\"a!=b\",\"b==c\",\"c==a\"]），单遍判断无法察觉后续合并产生的矛盾。必须先全量合并等式，再校验不等式。\n# 2. 字符切片：eq[1:3] 为双字符运算符（\"==\" 或 \"!=\"），误写 eq[1:2] 只有 1 个字符。\n# 3. 字典动态初始化：在 find 时若字符未见过，需动态设置 parent[x] = x。\nclass UnionFind:\n    def __init__(self):\n        self.parent = {}\n    def find(self, x: str) -> str:\n        if x not in self.parent:\n            self.parent[x] = x\n        if self.parent[x] != x:\n            self.parent[x] = self.find(self.parent[x])\n        return self.parent[x]\n    def union(self, x: str, y: str):\n        root_x = self.find(x)\n        root_y = self.find(y)\n        if root_x != root_y:\n            self.parent[root_x] = root_y\nclass Solution:\n    def equationsPossible(self, equations: List[str]) -> bool:\n        uf = UnionFind()\n        # 第一遍：全量合并所有相等关系\n        for eq in equations:\n            if eq[1:3] == \"==\":\n                uf.union(eq[0], eq[3])\n        # 第二遍：校验所有不等关系是否存在矛盾\n        for eq in equations:\n            if eq[1:3] == \"!=\":\n                if uf.find(eq[0]) == uf.find(eq[3]):\n                    return False\n        return True\nif __name__ == '__main__':\n    sol = Solution()\n    assert sol.equationsPossible([\"a==b\", \"b!=a\"]) == False\n    assert sol.equationsPossible([\"b==a\", \"a==b\"]) == True\n    assert sol.equationsPossible([\"a==b\", \"b==c\", \"a==c\"]) == True\n    assert sol.equationsPossible([\"a==b\", \"b!=c\", \"c==a\"]) == False\n    assert sol.equationsPossible([\"c==c\", \"b==d\", \"x!=z\"]) == True\n    assert sol.equationsPossible([\"a!=a\"]) == False\n    print(\"All tests passed successfully!\")"
  },
  {
    "id": "684",
    "slug": "684-冗余连接",
    "title": "冗余连接",
    "category": "Hot100 补充",
    "difficulty": "中等",
    "topic": "深度优先搜索",
    "tags": [
      "Hot100 补充",
      "深度优先搜索",
      "广度优先搜索",
      "并查集",
      "图"
    ],
    "sourcePath": "hot100/684.冗余连接.py",
    "lastUpdated": "2026-09-04",
    "leetcodeUrl": "https://leetcode.cn/problems/redundant-connection/",
    "codePreview": "from typing import List\n# [需二刷]：并查集无向图成环检测经典模型\n#\n# 思路：\n# 1. 树是连通且无环的无向图，n 个节点必须恰好有 n-1 条边。输入给了 n 条边，必然存在一条冗余边使图成环。\n# 2. 初始化大小为 n + 1 的并查集（节点编号从 1 到 n）。\n# 3. 顺序遍历每条边 [u, v]，调用 find 检查两顶点的根节点：\n#    - 若 find(u) == find(v)：说明 u 和 v 在此之前已相互连通，当前边导致了环的闭合，直接作为冗余边返回。\n#    - 若 find(u) != find(v)：说明连接了两个原本独立的连通块，调用 union(u, v) 正常合并。\n#\n# 时间复杂度：O(n * alpha(n)) ≈ O(n)，其中 n 为边数/节点数\n# 空间复杂度：O(n)，并查集 parent 数组空间\n#\n# 易错点/误区：\n# 1. 编号边界：节点编号为 1 到 n，parent 数组必须开 n + 1，写 n 会触发 IndexError。\n# 2. 方法调用语法：调用 find(self.parent[x]) 必须使用圆括号，误用方括号 find[...] 会报 'method' object is not subscriptable。\n# 3. 变量名混淆：合并时是修改父指针 parent[root_x] = root_y，误写为 find[root_x] = root_y 会报错。\n# 4. 返回顺序：题目要求返回最后导致成环的边，顺序遍历时碰到的第一个成环边即为所求（因为后续边还没加入）。\nclass UnionFind:\n    def __init__(self, n: int):\n        self.parent = list(range(n + 1))\n    def find(self, x: int) -> int:\n        if self.parent[x] != x:\n            self.parent[x] = self.find(self.parent[x])\n        return self.parent[x]\n    def union(self, x: int, y: int):\n        root_x = self.find(x)\n        root_y = self.find(y)\n        if root_x != root_y:\n            self.parent[root_x] = root_y\nclass Solution:\n    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:\n        n = len(edges)\n        uf = UnionFind(n)\n        for u, v in edges:\n            if uf.find(u) == uf.find(v):\n                return [u, v]\n            else:\n                uf.union(u, v)\nif __name__ == '__main__':\n    sol = Solution()\n    assert sol.findRedundantConnection([[1, 2], [1, 3], [2, 3]]) == [2, 3]\n    assert sol.findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]) == [1, 4]\n    print(\"All tests passed successfully!\")"
  },
  {
    "id": "547",
    "slug": "547-省份数量",
    "title": "省份数量",
    "category": "Hot100 补充",
    "difficulty": "中等",
    "topic": "深度优先搜索",
    "tags": [
      "Hot100 补充",
      "深度优先搜索",
      "广度优先搜索",
      "并查集",
      "图"
    ],
    "sourcePath": "hot100/547.省份数量.py",
    "lastUpdated": "2026-09-04",
    "leetcodeUrl": "https://leetcode.cn/problems/number-of-provinces/",
    "codePreview": "from typing import List\n# [需二刷]：并查集 (Union-Find) 入门与连通分量计数母题\n#\n# 思路：\n# 1. 封装符合单一职责原则 (SRP) 的并查集类 UnionFind。\n# 2. 初始时每个城市为一个独立连通分量，parent[i] = i，连通分量数 count = n。\n# 3. 遍历邻接矩阵的上三角部分 (j > i)，若 isConnected[i][j] == 1 则执行 union(i, j)。\n# 4. union 操作中通过 find 查找根节点，若根不同则合并并将 count 减 1。\n# 5. find 操作中采用路径压缩，使后续查找摊还时间接近 O(1)。\n#\n# 时间复杂度：O(n^2 * alpha(n)) ≈ O(n^2)，遍历上三角 n*(n-1)/2 次\n# 空间复杂度：O(n)，并查集 parent 数组及递归栈\n#\n# 易错点/误区：\n# 1. 列表初始化：必须使用 list(range(n))，不能使用不可变的 range(n)。\n# 2. 根节点合并：合并时必须是 parent[root_x] = root_y，而非直接修改当前节点 parent[x] = y。\n# 3. DFS 写法误区：dfs(i) 内部若再次写 for i in range(n) 会覆盖形参并导致 RecursionError。\n# 4. 无向图对称性：只遍历上三角 j in range(i+1, n) 即可避免自身冗余合并与重复计算。\nclass UnionFind:\n    def __init__(self, n: int):\n        self.parent = list(range(n))\n        self.count = n\n    def find(self, x: int) -> int:\n        if self.parent[x] != x:\n            self.parent[x] = self.find(self.parent[x])\n        return self.parent[x]\n    def union(self, x: int, y: int):\n        root_x = self.find(x)\n        root_y = self.find(y)\n        if root_x != root_y:\n            self.parent[root_x] = root_y\n            self.count -= 1\nclass Solution:\n    def findCircleNum(self, isConnected: List[List[int]]) -> int:\n        # 解法一：并查集法（推荐，可动态加边）\n        n = len(isConnected)\n        uf = UnionFind(n)\n        for i in range(n):\n            for j in range(i + 1, n):\n                if isConnected[i][j] == 1:\n                    uf.union(i, j)\n        return uf.count\n        # 解法二：DFS 染色遍历（备选）\n        # n = len(isConnected)\n        # visited = set()\n        # province = 0\n        # def dfs(i: int):\n        #     visited.add(i)\n        #     for j in range(n):\n        #         if isConnected[i][j] == 1 and j not in visited:\n        #             dfs(j)\n        # for i in range(n):\n        #     if i not in visited:\n        #         dfs(i)\n        #         province += 1\n        # return province\nif __name__ == '__main__':\n    sol = Solution()\n    assert sol.findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]]) == 2\n    assert sol.findCircleNum([[1, 0, 0], [0, 1, 0], [0, 0, 1]]) == 3\n    print(\"All tests passed successfully!\")"
  },
  {
    "id": "743",
    "slug": "743-网络延迟时间",
    "title": "网络延迟时间",
    "category": "Hot100 补充",
    "difficulty": "中等",
    "topic": "深度优先搜索",
    "tags": [
      "Hot100 补充",
      "深度优先搜索",
      "广度优先搜索",
      "图",
      "最短路"
    ],
    "sourcePath": "hot100/743.网络延迟时间.py",
    "lastUpdated": "2026-09-04",
    "leetcodeUrl": "https://leetcode.cn/problems/network-delay-time/",
    "codePreview": "from typing import List \nimport heapq\nfrom collections import deque\n# [需二刷]：单源最短路径 Dijkstra 堆优化算法母题\n#\n# 思路：\n# 1. 邻接表建图存储有向加权边 graph[u] = [(v, w), ...]\n# 2. 维护距离数组 distance，初始全为无穷大，起点 distance[k] = 0\n# 3. 最小堆 pq 维护 (当前到达耗时 d, 当前节点 u)，利用贪心思想每次探索耗时最短的节点\n# 4. 出堆时若 d > distance[u] 则剪枝跳过，否则遍历邻居松弛距离并入堆\n# 5. 最终最大延迟时间为 max(distance[1:])，若存在 inf 说明存在不可达节点返回 -1\n#\n# 时间复杂度：O(E log E) / O(E log V)，其中 E 为边数，V 为节点数\n# 空间复杂度：O(V + E)，邻接表和堆及距离数组所需空间\n#\n# 易错点/误区：\n# 1. 节点编号从 1 到 n，开数组需开 n + 1，最后求最值必须切片 distance[1:]，若直接 max(distance) 会将 distance[0] 的 inf 误计入。\n# 2. heappush 时必须将耗时作为元组第一个元素 (d, u)，利用 Python 堆元组首项比对特性。\n# 3. 忘记过期剪枝 if d > distance[u]: continue 会导致冗余松弛和超时。\nclass Solution:\n    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:\n        # 1. 构建邻接表\n        graph = [[] for _ in range(n + 1)]\n        for u, v, w in times:\n            graph[u].append((v, w))\n        # 2. 初始化距离数组与最小堆\n        distance = [float('inf')] * (n + 1)\n        distance[k] = 0\n        pq = [(0, k)]\n        # 3. Dijkstra 核心循环\n        while pq:\n            d, u = heapq.heappop(pq)\n            # 过期剪枝\n            if d > distance[u]:\n                continue\n            # 松弛相邻边\n            for v, w in graph[u]:\n                new_d = d + w\n                if new_d < distance[v]:\n                    distance[v] = new_d\n                    heapq.heappush(pq, (new_d, v))\n        # 4. 统计答案（跳过 0 号占位节点）\n        ans = max(distance[1:])\n        return ans if ans != float('inf') else -1\nif __name__ == '__main__':\n    sol = Solution()\n    assert sol.networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2) == 2\n    assert sol.networkDelayTime([[1,2,1]], 2, 1) == 1\n    assert sol.networkDelayTime([[1,2,1]], 2, 2) == -1\n    print(\"All tests passed successfully!\")"
  },
  {
    "id": "22",
    "slug": "22-括号生成",
    "title": "括号生成",
    "category": "回溯",
    "difficulty": "中等",
    "topic": "有效性剪枝",
    "tags": [
      "回溯",
      "有效性剪枝",
      "字符串",
      "动态规划",
      "括号序列"
    ],
    "sourcePath": "hot100/10_回溯/22.括号生成.py",
    "lastUpdated": "2026-09-01",
    "leetcodeUrl": "https://leetcode.cn/problems/generate-parentheses/",
    "codePreview": "# 📌 需二刷：经典回溯 + 剪枝（卡特兰数问题）\n#\n# 思路：用 DFS 枚举所有可能的括号组合，用「剪枝」保证合法性：\n#   1. 左括号最多放 n 个（open_count < n 时才能加 '('）\n#   2. 右括号数不能超过左括号数（close_count < open_count 时才能加 ')'）\n#   满足以上两条，自然就不会出现非法串（如 \")()\"、\"())\"）\n#   当左右括号都用完时（各 n 个），收集答案\n#\n# 时间 O(Catalan(n))，即卡特兰数，约等于 O(4^n / √n)，空间 O(n)（递归栈深度）\n#\n# ⚠️ 易错点/误区：\n# 1. 右括号约束写 close_count < n：会生成 \"())( 这种右括号先于左括号出现的非法串\n#    正确：close_count < open_count，保证右括号出现时必有对应的左括号\n# 2. 忘记 return：终止 append 后继续执行会重复递归下去，产生重复答案或越界\n# 3. 字符串拼接用 join 而非 +：join 是分隔列表的，字符串追加直接用 + 或 path + '(' 即可\n# 4. DFS 签名缺少冒号/拼写：Python 函数定义末尾忘记加冒号，或变量名 open_count 拼成 opend_count\n# 5. path 列表回溯写法：若用列表回溯，递归后必须 path.pop() 撤销选择\nfrom typing import List\nclass Solution:\n    # 解法一：字符串参数隐式回溯（推荐，代码简洁）\n    def generateParenthesis(self, n: int) -> List[str]:\n        res = []\n        def dfs(open_count: int, close_count: int, current_string: str):\n            # 终止：左右括号都用完 → 找到一个合法答案\n            if open_count == n and close_count == n:\n                res.append(current_string)\n                return\n            # 分支1：还能加左括号 → 直接加左括号\n            if open_count < n:\n                dfs(open_count + 1, close_count, current_string + '(')\n            # 分支2：右括号数 < 左括号数 → 才能加右括号（关键剪枝，保证合法性）\n            if close_count < open_count:\n                dfs(open_count, close_count + 1, current_string + ')')\n        dfs(0, 0, '')\n        return res\n    # 解法二：显式列表 path 显式回溯（标准回溯模板）\n    def generateParenthesis_path(self, n: int) -> List[str]:\n        path = []\n        result = []\n        def backtrack(left: int, right: int):\n            if len(path) == 2 * n:\n                result.append(''.join(path))\n                return\n            if left < n:\n                path.append('(')\n                backtrack(left + 1, right)\n                path.pop()\n            if right < left:\n                path.append(')')\n                backtrack(left, right + 1)\n                path.pop()\n        backtrack(0, 0)\n        return result"
  },
  {
    "id": "32",
    "slug": "32-最长有效括号",
    "title": "最长有效括号",
    "category": "动态规划",
    "difficulty": "困难",
    "topic": "栈 / DP (跨越匹配)",
    "tags": [
      "动态规划",
      "栈 / DP (跨越匹配)",
      "栈",
      "字符串",
      "括号序列"
    ],
    "sourcePath": "hot100/15_动态规划/32.最长有效括号.py",
    "lastUpdated": "2026-09-01",
    "leetcodeUrl": "https://leetcode.cn/problems/longest-valid-parentheses/",
    "codePreview": "class Solution:\n    def longestValidParentheses(self, s: str) -> int:\n        n = len(s)\n        if n < 2:\n            return 0\n        dp = [0] * n\n        for i in range(1, n):\n            if s[i] == ')':\n                if s[i - 1] == '(':\n                    # 情况 1：形如 ...()\n                    dp[i] = (dp[i - 2] if i >= 2 else 0) + 2\n                else:\n                    # 情况 2：形如 ...))\n                    pre_idx = i - dp[i - 1] - 1\n                    if pre_idx >= 0 and s[pre_idx] == '(':\n                        dp[i] = dp[i - 1] + 2 + (dp[pre_idx - 1] if pre_idx >= 1 else 0)\n        return max(dp)"
  }
]
