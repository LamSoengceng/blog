const n={"200-岛屿数量":{codePreview:`# 📌 需二刷：DFS 淹岛法（Flood Fill）
#
# 思路：遍历网格，遇到 '1' 则岛屿数+1，然后用 DFS 把整座岛"淹"成 '0'
# 时间 O(m*n)，空间 O(m*n)（最坏情况递归栈深度）
#
# ⚠️ 易错点/误区：
# 1. grid 中的值是字符串 '1'/'0'，不是整数 1/0
# 2. DFS 进入后要立即标记 grid[i][j] = '0'，否则相邻格子互相递归导致无限循环
# 3. grid[ni][nj] = '0' 是赋值（单等号），== 是比较，不会修改值
# 4. 不需要回溯！与 79.单词搜索 不同，访问过的陆地不需要恢复
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        m, n = len(grid), len(grid[0])
        count = 0
        def dfs(i, j):
            # 先把当前格子淹掉，防止重复访问
            grid[i][j] = '0'
            # 上下左右四个方向扩散
            for di, dj in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                ni, nj = i + di, j + dj
                # 邻居在边界内且是陆地，继续淹
                if 0 <= ni < m and 0 <= nj < n and grid[ni][nj] == '1':
                    dfs(ni, nj)
        # 遍历每个格子，发现新的 '1' 就是一座新岛
        for i in range(m):
            for j in range(n):
                if grid[i][j] == '1':
                    count += 1  # 发现新岛
                    dfs(i, j)   # 把整座岛淹掉
        return count`,statement:`给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。

 

示例 1：

输入：grid = [
  ['1','1','1','1','0'],
  ['1','1','0','1','0'],
  ['1','1','0','0','0'],
  ['0','0','0','0','0']
]
输出：1

示例 2：

输入：grid = [
  ['1','1','0','0','0'],
  ['1','1','0','0','0'],
  ['0','0','1','0','0'],
  ['0','0','0','1','1']
]
输出：3

 

提示：

- m == grid.length

- n == grid[i].length

- 1 <= m, n <= 300

- grid[i][j] 的值为 '0' 或 '1'`},"994-腐烂的橘子":{codePreview:`# 📌 需二刷：多源 BFS + 层序遍历
#
# 思路：把所有腐烂橘子作为起点同时入队，BFS 逐层扩散，每扩一层 time+1
# 时间 O(m*n)，空间 O(m*n)
#
# ⚠️ 易错点/误区：
# 1. time += 1 要放在层序 for 循环外面，不是每个橘子/每个方向都 +1
# 2. 感染后必须 grid[nx][ny] = 2，否则同一个橘子会被重复入队
# 3. 最后 return time-1，因为最后一层（无新感染）也会 +1，多算了一次
# 4. 边界：一开始就没有新鲜橘子，直接返回 0
from collections import deque
class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        bad = deque()
        fresh = 0
        # 第一步：遍历网格，找出所有烂橘子（BFS 起点）和统计新鲜橘子数量
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 2:
                    bad.append((i, j))
                elif grid[i][j] == 1:
                    fresh += 1
        # 边界：没有新鲜橘子，直接返回 0
        if fresh == 0:
            return 0
        time = 0
        direction = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        # 第二步：多源 BFS，层序遍历（每一层 = 1 分钟）
        while bad:
            for _ in range(len(bad)):       # 处理当前层所有烂橘子
                x, y = bad.popleft()
                for dx, dy in direction:    # 向四个方向扩散
                    nx, ny = x + dx, y + dy
                    if 0 <= nx < m and 0 <= ny < n and grid[nx][ny] == 1:
                        grid[nx][ny] = 2    # 标记为腐烂，防止重复入队
                        bad.append((nx, ny))
                        fresh -= 1
            time += 1                       # 一整层处理完，时间 +1
        # 第三步：检查是否还有新鲜橘子
        # time-1 是因为最后一层处理完发现没有新感染，但 time 还是 +1 了
        return -1 if fresh > 0 else time - 1`,statement:`在给定的 m x n 网格 grid 中，每个单元格可以有以下三个值之一：

- 值 0 代表空单元格；

- 值 1 代表新鲜橘子；

- 值 2 代表腐烂的橘子。

每分钟，腐烂的橘子 周围 4 个方向上相邻 的新鲜橘子都会腐烂。

返回 直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1 。

 

示例 1：

输入：grid = [[2,1,1],[1,1,0],[0,1,1]]
输出：4

示例 2：

输入：grid = [[2,1,1],[0,1,1],[1,0,1]]
输出：-1
解释：左下角的橘子（第 2 行， 第 0 列）永远不会腐烂，因为腐烂只会发生在 4 个方向上。

示例 3：

输入：grid = [[0,2]]
输出：0
解释：因为 0 分钟时已经没有新鲜橘子了，所以答案就是 0 。

 

提示：

- m == grid.length

- n == grid[i].length

- 1 <= m, n <= 10

- grid[i][j] 仅为 0、1 或 2`},"207-课程表":{codePreview:`from typing import List
from collections import deque
# 📌 需二刷：拓扑排序（Kahn 算法）经典模板题
#
# 思路：把课程依赖关系视为有向图（pre -> cur）。统计所有节点的入度（in_degree），
#      将入度为 0 的节点放入队列进行 BFS。每次出队表示修完一门课，将其后续课程入度 -1。
#      若入度变为 0 则入队。最后判断修完的课程数是否等于总课程数。
# 时间 O(V + E)（V 为课程数，E 为先修依赖数），空间 O(V + E)
#
# ⚠️ 易错点/误区：
# 1. 邻接表和入度数组的对应关系不要搞反：\`adj[pre].append(cur)\`，\`in_degree[cur] += 1\`。
# 2. 避免列表推导式陷阱：初始化邻接表必须用 \`[[] for _ in range(n)]\`，如果写成 \`[[]] * n\` 会导致所有子列表共享同一个内存地址。
class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        in_degree = [0] * numCourses
        adj = [[] for _ in range(numCourses)]
        for cur, pre in prerequisites:
            adj[pre].append(cur)
            in_degree[cur] += 1
        queue = deque([i for i in range(numCourses) if in_degree[i] == 0])
        count = 0
        while queue:
            node = queue.popleft()
            count += 1
            for nxt in adj[node]:
                in_degree[nxt] -= 1
                if in_degree[nxt] == 0:
                    queue.append(nxt)
        return count == numCourses`,statement:`你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [a_i, b_i] ，表示如果要学习课程 a_i 则 必须 先学习课程  b_i_ 。

- 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。

请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。

 

示例 1：

输入：numCourses = 2, prerequisites = [[1,0]]
输出：true
解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。

示例 2：

输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
输出：false
解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。

 

提示：

- 1 <= numCourses <= 2000

- 0 <= prerequisites.length <= 5000

- prerequisites[i].length == 2

- 0 <= a_i, b_i < numCourses

- prerequisites[i] 中的所有课程对 互不相同`},"208-实现-trie-前缀树":{codePreview:`# 📌 需二刷：前缀树的节点设计与字典游标思想（独立节点版）
#
# 思路：应用单一职责原则，将「树节点 TrieNode」与「管理者 Trie」分离。
# 节点专职存储 children 路径和 is_end 标记；管理者统筹根节点 root 并对外提供 API。
# 时间 O(L)，空间 O(L)（L 为每次插入/搜索的单词长度）
#
# ⚠️ 易错点/误区：
# 1. search 中的游标更新：容易写错成直接拿到字典本身 \`node = node.children\`，正确应该是 \`node = node.children[ch]\`（推门走进去）。
# 2. startsWith 的最后返回：只要顺利走完前缀即算成功，循环结束后应该强制 \`return True\`。
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False
class Trie:
    def __init__(self):
        self.root = TrieNode()
    def insert(self, word: str) -> None:
        node = self.root
        for ch in word:
            if ch not in node.children:
                node.children[ch] = TrieNode()
            node = node.children[ch]
        node.is_end = True
    def search(self, word: str) -> bool:
        node = self.root
        for ch in word:
            if ch not in node.children:
                return False
            node = node.children[ch]
        return node.is_end
    def startsWith(self, prefix: str) -> bool:
        node = self.root
        for ch in prefix:
            if ch not in node.children:
                return False
            node = node.children[ch]
        return True
# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)`,statement:`Trie（发音类似 "try"）或者说 前缀树 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补全和拼写检查。

请你实现 Trie 类：

- Trie() 初始化前缀树对象。

- void insert(String word) 向前缀树中插入字符串 word 。

- boolean search(String word) 如果字符串 word 在前缀树中，返回 true（即，在检索之前已经插入）；否则，返回 false 。

- boolean startsWith(String prefix) 如果之前已经插入的字符串 word 的前缀之一为 prefix ，返回 true ；否则，返回 false 。

 

示例：

输入
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
输出
[null, null, true, false, true, null, true]

解释
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // 返回 True
trie.search("app");     // 返回 False
trie.startsWith("app"); // 返回 True
trie.insert("app");
trie.search("app");     // 返回 True

 

提示：

- 1 <= word.length, prefix.length <= 2000

- word 和 prefix 仅由小写英文字母组成

- insert、search 和 startsWith 调用次数 总计 不超过 3 * 10^4 次`}};export{n as categoryContent};
