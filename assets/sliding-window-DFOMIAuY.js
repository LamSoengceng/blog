const n={"3-无重复字符的最长子串":{codePreview:`class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        # 📌 需二刷：经典滑动窗口（求最长子串）
        #
        # 思路：这道题找的是“最长”的无重复子串，不需要固定窗口大小。
        # 只要新加入的字符 c 导致了窗口内出现了重复（window[c] > 1），
        # 就不断移动 left 缩小窗口，直到把重复的那个字符移出去为止。
        # 当窗口内再次没有重复字符时，更新最大长度。
        # 时间 O(N)，其中 N 是 s 的长度。
        # 空间 O(C)，C 为字符集大小（ASCII 码最多 128/256 个）。
        #
        # ⚠️ 易错点/误区：
        # 1. 更新最大长度的位置：result = max(...) 必须放在内层 while 循环结束之后。因为只有在剔除重复字符后，当前窗口内的子串才是合法的“无重复”子串。
        # 2. 收缩条件：这道题不需要像 567 题那样判断 right - left 的长度，而是直接用 window[c] > 1 作为收缩条件，直击要害。
        left = 0
        right = 0
        result = 0
        window = {}
        while right < len(s):
            c = s[right]  # 即将移入窗口的字符
            right += 1    # 右移窗口
            window[c] = window.get(c, 0) + 1
            # 判断左侧窗口是否要收缩（如果移入 c 后导致了重复）
            while window[c] > 1:
                d = s[left]  # 即将移出窗口的字符
                left += 1    # 左移窗口
                window[d] = window.get(d, 0) - 1
            # 到这里，窗口内一定没有重复字符了，更新最长结果
            result = max(result, right - left)
        return result`,statement:`给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串 的长度。

 

示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。注意 "bca" 和 "cab" 也是正确答案。

示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

 

提示：

- 0 <= s.length <= 10^5

- s 由英文字母、数字、符号和空格组成`},"438-找到字符串中所有字母异位词":{codePreview:`class Solution(object):
    def findAnagrams(self, s, p):
        """
        :type s: str
        :type p: str
        :rtype: List[int]
        """
        # 📌 需二刷：滑动窗口寻找所有固定长度的子串（异位词/排列）
        #
        # 思路：异位词本质上就是字符串的排列。这道题和 567 题（字符串的排列）逻辑完全一致。
        # 区别仅仅在于：567 题找到一个就 return True，本题需要把所有找到的起始索引 left 存入结果数组中。
        # 时间 O(N + M)，其中 N 是 s 的长度，M 是 p 的长度。
        # 空间 O(C)，C 为字符集大小，本题最多 26 个字母。
        #
        # ⚠️ 易错点/误区：
        # 1. 结果收集的位置：必须在窗口大小达到 p 的长度时进行判断，且记录的索引是当前的 left。
        # 2. window 收缩条件：依然是 right - left >= len(p)，保证窗口长度严格等于 p 的长度。
        need = {}
        window = {}
        for c in p:
            need[c] = need.get(c, 0) + 1
        left = 0
        right = 0
        valid = 0
        result = []
        while right < len(s):
            c = s[right]  # 即将移入窗口的字符
            right += 1    # 右移窗口
            # 窗口内数据的一系列更新
            if c in need:
                window[c] = window.get(c, 0) + 1
                if window[c] == need[c]:
                    valid += 1
            # 判断左侧窗口是否要收缩 (异位词长度必须等于 p 的长度)
            while right - left >= len(p):
                # 找到一个合法的异位词，将起始索引 left 加入结果集
                if valid == len(need):
                    result.append(left)
                d = s[left]  # 即将移出窗口的字符
                left += 1    # 左移窗口
                # 窗口内数据的一系列更新
                if d in need:
                    if window[d] == need[d]:
                        valid -= 1
                    window[d] -= 1
        return result`,statement:`给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

 

示例 1:

输入: s = "cbaebabacd", p = "abc"
输出: [0,6]
解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。

 示例 2:

输入: s = "abab", p = "ab"
输出: [0,1,2]
解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。

 

提示:

- 1 <= s.length, p.length <= 3 * 10^4

- s 和 p 仅包含小写字母`}};export{n as categoryContent};
