const n={"20-有效的括号":{codePreview:`class Solution:
    # 思路：栈——左括号入栈，遇右括号弹栈顶检查是否配对
    # 时间 O(n)，空间 O(n)
    #
    # ⚠️ 易错点/误区：
    # 1. if char == '(' or '[' or '{' 永远为 True！非空字符串是 truthy
    #    正确写法：if char in '([{'
    # 2. 字典方向要对：key 是右括号，value 是左括号（因为遇到右括号时查表）
    # 3. pop 之前必须先检查栈是否为空，否则空栈 pop 报 IndexError
    # 4. 最终检查 stack 是否为空要放在 for 循环外面，放里面会每次迭代都判断
    def isValid(self, s: str) -> bool:
        stack = []
        matchpair = {                       # 右括号 → 对应的左括号
            '}':'{',
            ']':'[',
            ')':'('
        }
        for char in s:
            if char in '([{':               # 左括号 → 入栈
                stack.append(char)
            else:                           # 右括号 → 弹栈检查配对
                if not stack:               # 栈空说明多出右括号
                    return False
                top = stack.pop()
                if top != matchpair[char]:  # 栈顶和当前右括号不配对
                    return False
        return not stack                    # 栈空=有效，栈非空=多出左括号`,statement:`给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

- 左括号必须用相同类型的右括号闭合。

- 左括号必须以正确的顺序闭合。

- 每个右括号都有一个对应的相同类型的左括号。

 

示例 1：

输入：s = "()"

输出：true

示例 2：

输入：s = "()[]{}"

输出：true

示例 3：

输入：s = "(]"

输出：false

示例 4：

输入：s = "([])"

输出：true

示例 5：

输入：s = "([)]"

输出：false

 

提示：

- 1 <= s.length <= 10^4

- s 仅由括号 '()[]{}' 组成`},"155-最小栈":{codePreview:`#
# 思路：用一个辅助栈 minval 同步记录每一层的最小值
#       两个栈同进同退，minval 栈顶永远是当前最小值
# 时间 O(1)（每个操作），空间 O(n)
#
# ⚠️ 易错点/误区：
# 1. __init__ 中变量要用 self.，否则只是局部变量，其他方法访问不到
# 2. 查看栈顶用 [-1]，不要用 pop()，pop 会删除元素
# 3. minval 每次 push 都要追加一个值（取 min），保持和 stack 等长
#
class MinStack:
    def __init__(self):
        self.stack = []       # 主栈：存所有元素
        self.minval = []      # 辅助栈：每一层对应的最小值
    def push(self, val: int) -> None:
        self.stack.append(val)
        if self.minval:
            # 取 val 和当前最小值中较小的，压入辅助栈
            self.minval.append(min(val, self.minval[-1]))
        else:
            # 第一个元素，直接压入
            self.minval.append(val)
    def pop(self) -> None:
        # 两个栈同时弹出，最小值自动回退
        self.stack.pop()
        self.minval.pop()
    def top(self) -> int:
        return self.stack[-1]
    def getMin(self) -> int:
        # minval 栈顶就是当前最小值
        return self.minval[-1]
# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()`,statement:`设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

实现 MinStack 类:

- MinStack() 初始化堆栈对象。

- void push(int value) 将元素 value 推入堆栈。

- void pop() 删除堆栈顶部的元素。

- int top() 获取堆栈顶部的元素。

- int getMin() 获取堆栈中的最小元素。

 

示例 1:

输入：
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

输出：
[null,null,null,null,-3,null,0,-2]

解释：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.

 

提示：

- -2^31 <= val <= 2^31 - 1

- pop、top 和 getMin 操作总是在 非空栈 上调用

- push, pop, top, and getMin最多被调用 3 * 10^4 次`},"394-字符串解码":{codePreview:`# 📌 需二刷：双栈解码嵌套结构
#
# 思路：用两个栈分别存数字和字符串，遇到 [ 压栈保存上下文，遇到 ] 弹栈拼接结果
# 时间 O(n)，n 为解码后字符串长度（每个字符最多入栈出栈一次）
# 空间 O(n)，栈的深度取决于嵌套层数
#
# 💡 面试推荐：双栈法（本解法）
#   - 思路直观，容易讲清楚
#   - 面试官容易追问：如何处理多位数字？→ cur_num * 10 + int(char)
#   - 另一种方法是递归，但栈的写法更不容易出错，推荐优先用栈
#
# ⚠️ 易错点/误区：
# 1. 数字可能是多位的（如 "12[a]"），不能直接 cur_num = int(char)，
#    要用 cur_num = cur_num * 10 + int(char) 来逐位拼接
# 2. 遇到字母时要用 cur_str += char（拼接），不能用 = （会覆盖之前的字母）
# 3. ] 弹栈时的拼接顺序：letterstack.pop() + numstack.pop() * cur_str
#    是「之前的字符串 + 重复次数 × 当前字符串」，顺序不能反
# 4. 压栈时机是遇到 [，不是遇到数字或字母时
class Solution:
    def decodeString(self, s: str) -> str:
        numstack = []       # 存数字（重复次数）
        letterstack = []    # 存字符串（进入 [ 之前的上下文）
        cur_num = 0         # 当前正在拼的数字
        cur_str = ''        # 当前正在拼的字符串
        for char in s:
            if char.isdigit():
                # 处理多位数字，如 "12" → 1*10+2 = 12
                cur_num = cur_num * 10 + int(char)
            elif char == '[':
                # 遇到 [：保存当前上下文到栈，然后重置
                numstack.append(cur_num)
                letterstack.append(cur_str)
                cur_num = 0
                cur_str = ''
            elif char == ']':
                # 遇到 ]：弹栈，拼接 = 之前的字符串 + 重复次数 × 当前字符串
                cur_str = letterstack.pop() + numstack.pop() * cur_str
            else:
                # 普通字母，拼接到当前字符串
                cur_str += char
        return cur_str`,statement:`给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

测试用例保证输出的长度不会超过 10^5。

 

示例 1：

输入：s = "3[a]2[bc]"
输出："aaabcbc"

示例 2：

输入：s = "3[a2[c]]"
输出："accaccacc"

示例 3：

输入：s = "2[abc]3[cd]ef"
输出："abcabccdcdcdef"

示例 4：

输入：s = "abc3[cd]xyz"
输出："abccdcdcdxyz"

 

提示：

- 1 <= s.length <= 30

- s 由小写英文字母、数字和方括号 '[]' 组成

- s 保证是一个 有效 的输入。

- s 中所有整数的取值范围为 [1, 300]`},"739-每日温度":{codePreview:`# 📌 需二刷：单调栈模板题
#
# 思路：维护一个单调递减栈（栈底到栈顶递减），栈中存下标。
#       遍历温度数组，当前温度 > 栈顶温度时，说明栈顶那天等到了更高温度，
#       弹出栈顶并计算等待天数（当前下标 - 栈顶下标）。
# 时间 O(n)，空间 O(n)
#
# ⚠️ 易错点/误区：
# 1. result 要用 [0]*n 初始化，不能用 []，因为后面要通过下标赋值
# 2. 比较温度时是 temperatures[stack[-1]]（栈顶下标对应的温度），
#    不是 temperatures[-1]（温度数组的最后一个元素）
# 3. 栈里存的是下标而非温度值，一个下标三个用途：取值、算距离、定位 result
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        stack = []  # 单调递减栈，存下标
        result = [0] * len(temperatures)  # 初始化为0，等不到更高温度的位置自然为0
        for i in range(len(temperatures)):
            # 当前温度比栈顶大 → 栈顶那天等到了更高温度
            while stack and temperatures[i] > temperatures[stack[-1]]:
                idx = stack.pop()
                result[idx] = i - idx  # 等待天数 = 当前下标 - 栈顶下标
            stack.append(i)  # 当前下标入栈，等待未来更高温度
        return result`,statement:`给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。

 

示例 1:

输入: temperatures = [73,74,75,71,69,72,76,73]
输出: [1,1,4,2,1,1,0,0]

示例 2:

输入: temperatures = [30,40,50,60]
输出: [1,1,1,0]

示例 3:

输入: temperatures = [30,60,90]
输出: [1,1,0]

 

提示：

- 1 <= temperatures.length <= 10^5

- 30 <= temperatures[i] <= 100`},"84-柱状图中最大的矩形":{codePreview:`# 📌 需二刷：单调栈求最大矩形（递增栈 + 哨兵技巧）
#
# 思路：维护一个递增栈（存下标），当新柱子比栈顶矮时触发弹栈。
#       被弹柱子的高度能形成的矩形，左边界是左边第一个更矮的（新栈顶），
#       右边界是当前柱子 i。宽度 = right - left - 1。
#       末尾加高度 0 的哨兵强制清空栈，省去收尾循环。
# 时间 O(n)，空间 O(n)
#
# ⚠️ 易错点/误区：
# 1. left = stack[-1] if stack else -1 ——栈空时左边界为 -1，宽度才能算对
# 2. right = i 是当前下标，不是被弹柱子的下标 idx
# 3. 哨兵高度为 0，比所有柱子矮，能强制弹出所有剩余柱子
# 4. 弹栈时算的面积是 heights[idx] × width，不是 heights[i]
class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        stack = []               # 递增栈，存下标，对应高度递增
        result = 0
        heights = heights + [0]  # 哨兵：强制清空栈，省去收尾逻辑
        for i in range(len(heights)):
            # 新柱子比栈顶矮 → 栈顶柱子的右边界确定，弹栈算面积
            while stack and heights[i] < heights[stack[-1]]:
                idx = stack.pop()                     # 被弹的柱子
                left = stack[-1] if stack else -1     # 左边第一个更矮的
                right = i                              # 右边第一个更矮的
                width = right - left - 1               # 被弹柱子能覆盖的宽度
                result = max(result, width * heights[idx])
            stack.append(i)   # 当前柱子入栈（递增关系已恢复）
        return result`,statement:`给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

求在该柱状图中，能够勾勒出来的矩形的最大面积。

 

示例 1:

输入：heights = [2,1,5,6,2,3]
输出：10
解释：最大的矩形为图中红色区域，面积为 10

示例 2：

输入： heights = [2,4]
输出： 4

 

提示：

- 1 

- 0`}};export{n as categoryContent};
