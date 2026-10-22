"""Read-only local source import. Run explicitly when local notes change."""
import ast, hashlib, json, os, pathlib, re, runpy
from datetime import datetime, timezone

ROOT=pathlib.Path(__file__).resolve().parents[1]
SOURCE=pathlib.Path(os.environ.get('LEETCODE_ROOT','C:/Project/leetcode'))
OUT=ROOT/'src/data/practice'
catalog=json.loads((OUT/'hot100.json').read_text(encoding='utf-8'))
cases=runpy.run_path(str(ROOT/'scripts/practice-cases.py'))['CASES']
recall_notes=runpy.run_path(str(ROOT/'scripts/practice-recall.py'))['NOTES']
prior=json.loads((OUT/'specs.json').read_text(encoding='utf-8')) if (OUT/'specs.json').exists() else []
hashes={s['id']:s.get('sourceHash') for s in prior if s.get('sourceHashVersion')==2}
pending={s['id']:s.get('needsRecheck',False) for s in prior if s.get('sourceHashVersion')==2}
supplements={
'2':('addTwoNumbers',['l1','l2'],'''class Solution:
    def addTwoNumbers(self, l1, l2):
        dummy = tail = ListNode()
        carry = 0
        while l1 or l2 or carry:
            total = carry + (l1.val if l1 else 0) + (l2.val if l2 else 0)
            carry, digit = divmod(total, 10)
            tail.next = ListNode(digit)
            tail = tail.next
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
        return dummy.next
'''),
'23':('mergeKLists',['lists'],'''class Solution:
    def mergeKLists(self, lists):
        import heapq
        heap = []
        for i, node in enumerate(lists):
            if node: heapq.heappush(heap, (node.val, i, node))
        dummy = tail = ListNode()
        while heap:
            _, i, node = heapq.heappop(heap)
            tail.next = node
            tail = node
            if node.next: heapq.heappush(heap, (node.next.val, i, node.next))
        return dummy.next
'''),
'62':('uniquePaths',['m','n'],'''class Solution:
    def uniquePaths(self, m, n):
        dp = [1] * n
        for _ in range(1, m):
            for j in range(1, n): dp[j] += dp[j - 1]
        return dp[-1]
'''),
'64':('minPathSum',['grid'],'''class Solution:
    def minPathSum(self, grid):
        dp = [float('inf')] * len(grid[0])
        dp[0] = 0
        for row in grid:
            for j, value in enumerate(row):
                dp[j] = min(dp[j], dp[j - 1] if j else float('inf')) + value
        return dp[-1]
''')}
related={
'3':[('76','无重复窗口在重复时收缩；覆盖窗口在满足覆盖后尝试收缩。')],
'76':[('438','最小覆盖是可变窗口；异位词匹配使用固定长度窗口。')],
'560':[('3','含负数的和不满足普通滑窗单调性，使用前缀和计数。')],
'35':[('34','插入位置找一个边界；首尾位置需要分别确定左右边界。')],
'34':[('35','命中目标仍要继续收缩，确定首次或末次出现位置。')],
'104':[('543','深度是递归返回值；直径是左右深度相加的全局最大值。')],
'543':[('124','直径累加边数；路径和还需要舍弃负贡献。')],
'124':[('104','返回父节点时只能选单侧，更新全局答案时可经过两侧。')],
'46':[('78','排列需要标记已用元素；子集用起始位置避免重复选取。')],
'78':[('39','子集每个元素只能选一次；组合总和允许继续选当前元素。')],
'141':[('142','判环只需相遇；寻找入口要重置一个指针同步前进。')],
'19':[('160','倒数位置使用距离差；相交节点使用节点身份而不是值。')],
'198':[('416','相邻不可同时选；0-1 背包需要倒序避免同一元素重复使用。')],
'322':[('416','完全背包允许重复选取；0-1 背包每个元素仅用一次。')],
'62':[('64','路径计数取上方与左方之和；最小路径取最小值并加当前代价。')],
'64':[('62','路径最值与路径计数的转移运算不同。')]}
guides={
'哈希':('明确查询对象与 key/value 的含义','遍历时哈希表保存已处理元素的信息','建立哈希表 → 遍历 → 查询 / 更新'),
'双指针':('找出移动指针能够排除候选的条件','每次移动后剩余区间仍包含所有未排除的候选','定义左右指针 → 比较 → 移动 → 更新答案'),
'滑动窗口':('连续区间与窗口合法条件','准确说明窗口内每个计数的含义','扩张右端 → 更新计数 → 按条件收缩左端'),
'子串':('辨别连续区间是否有单调性','前缀信息或窗口状态必须与当前下标对应','维护状态 → 查询历史 → 更新答案'),
'普通数组':('从原地操作、前后缀或区间关系选择方法','更新状态前确认旧值是否仍要使用','定义状态 → 顺序处理 → 边界检查'),
'矩阵':('先确定行列、边界和覆盖顺序','原地修改时不丢失未处理的信息','记录尺寸 → 遍历 / 标记 → 写回结果'),
'链表':('先画出修改前后的连接关系','断开连接前保存后继，答案入口保持有效','dummy / 指针初始化 → 保存后继 → 重连 → 返回入口'),
'二叉树':('先决定每次递归向父节点返回什么','返回值与全局答案分别维护','空节点基线 → 递归左右 → 合并信息'),
'图论':('把题目映射成节点、边和访问状态','节点何时入队、何时标记访问必须一致','初始化 → 遍历邻接节点 → 更新状态'),
'回溯':('明确选择列表、路径和终止条件','递归返回后撤销当前层选择','选择 → 递归 → 撤销；满足条件时复制路径'),
'二分查找':('先声明搜索区间与目标边界','每轮缩小区间，保持目标仍在候选范围','定义区间 → 计算 mid → 排除一半 → 返回边界'),
'栈':('辨别未匹配结构或等待结算的元素','栈里存值还是下标，以及顺序是什么','遍历 → 按条件弹栈结算 → 入栈'),
'堆':('需要动态维护极值或前 K 个元素','明确堆顶的含义及堆的容量','入堆 → 控制大小 / 平衡 → 读取堆顶'),
'贪心算法':('找到不会破坏全局最优的局部选择','说明当前覆盖范围或最优前缀','维护局部最优状态 → 更新范围 / 答案'),
'动态规划':('明确状态表示、可选动作与初始化','转移只能读取语义正确的历史状态','初始化 base case → 按依赖顺序转移 → 取答案'),
'多维动态规划':('明确两个维度对应的前缀或网格位置','边界行列与真实输入下标的映射保持一致','初始化边界 → 计算依赖 → 读取目标状态'),
'技巧':('先说明特殊性质，避免直接背代码','每步操作维持问题所需的不变量','明确性质 → 维护状态 → 验证反例')}

def extract_notes(source,path):
    lines=source.splitlines(); cards=[]; blocks=[]; current=[]; start=0
    for i,line in enumerate(lines+[''],1):
        if line.lstrip().startswith('#') and '@lc' not in line:
            if not current: start=i
            current.append(re.sub(r'^\s*#\s?','',line))
        elif current:
            text='\n'.join(current).strip()
            if text: blocks.append((start,text))
            current=[]
    for line,text in blocks:
        if not re.search(r'易错|误区|踩坑|注意|忘|越界',text): continue
        personal=bool(re.search(r'踩过|实战踩坑|我曾|我把|当时|犯过',text))
        card=dict(source='personal' if personal else 'local',original=text,sourcePath=path,line=line,check='写完后用这段记录中的条件逐项检查，再构造一个反例。')
        for field,pattern in [('wrong',r'(?:错误写法|误写|写成)[：:]?([^\n]+)'),('counterexample',r'(?:最小反例|反例)[：:]([^\n]+)'),('reason',r'(?:错误原因|原因)[：:]([^\n]+)'),('correction',r'(?:正确写法|正确做法|修正)[：:]([^\n]+)')]:
            match=re.search(pattern,text)
            if match: card[field]=match.group(1).strip()
        cards.append(card)
    return blocks,cards

specs=[]
progress_path=SOURCE/'LeetCode-Hot100-Progress.md'
progress_records={}
for line_no,line in enumerate(progress_path.read_text(encoding='utf-8-sig').splitlines(),1):
    cells=[c.strip() for c in line.strip().strip('|').split('|')]
    if len(cells)>=4 and cells[0].isdigit(): progress_records[cells[0]]=(line_no,cells[-1])
for question in catalog['questions']:
    pid=question['id']; files=list((SOURCE/'hot100').rglob(pid+'.*.py'))
    files=[p for p in files if 'extra_' not in str(p)] or files
    path=files[0] if files else None
    source=path.read_text(encoding='utf-8-sig') if path else ''
    rel=path.relative_to(SOURCE).as_posix() if path else None
    digest=hashlib.sha256(source.encode()).hexdigest() if path else None
    blocks,mistakes=extract_notes(source,rel)
    if pid in progress_records:
        line_no,text=progress_records[pid]
        personal=bool(re.search(r'踩过|实战踩坑|我曾|当时|踩坑：|踩坑/|误写',text))
        card=dict(source='personal' if personal else 'local',original=text,sourcePath='LeetCode-Hot100-Progress.md',line=line_no,check='重写时先解释这条记录对应的变量含义，再用边界输入验证。')
        match=re.search(r'(?:误写|写成|错误写法)[：:]?([^；\n]+)',text)
        if match:card['wrong']=match.group(1)
        mistakes.append(card)
        digest=hashlib.sha256((source+'\n'+text).encode()).hexdigest()
    if path:
        module=ast.parse(source)
        classes=[n for n in module.body if isinstance(n,ast.ClassDef)]
        if pid in ('146','155','208','295'):
            cls=next(n for n in classes if n.name in ('LRUCache','MinStack','Trie','MedianFinder'))
            methods=[m for m in cls.body if isinstance(m,ast.FunctionDef) and m.name in ('__init__','get','put','push','pop','top','getMin','insert','search','startsWith','addNum','findMedian')]
        else:
            cls=next(n for n in classes if n.name.startswith('Solution'))
            method=next(m for m in cls.body if isinstance(m,ast.FunctionDef))
            methods=[method]
        method_name=methods[0].name
        params=[a.arg for a in methods[0].args.args if a.arg!='self']
        template='from typing import *\n\n# ListNode / TreeNode / Node 由运行器提供\nclass '+('Solution' if cls.name.startswith('Solution') else cls.name)+':\n'
        for m in methods:
            signature=ast.unparse(m).split('\n')[0]
            template+='    '+signature+'\n        pass\n\n'
        # Keep full source, including all imports/helper classes and alternative solutions.
        reference=source+ ('\nSolution = '+cls.name+'\n' if cls.name!='Solution' and cls.name.startswith('Solution') else '')
        solutions=[dict(name=c.name,code=ast.get_source_segment(source,c)) for c in classes if c.name.startswith('Solution')]
        if len(solutions)==1:
            alts=[m for m in classes[0].body if isinstance(m,ast.FunctionDef) and m.name!=method_name and not m.name.startswith('_')]
            solutions.extend(dict(name=m.name,code=ast.get_source_segment(source,m)) for m in alts)
    else:
        method_name,params,reference=supplements[pid]
        template='from typing import *\n\nclass Solution:\n    def '+method_name+'(self, '+', '.join(params)+'):\n        pass\n'
        solutions=[dict(name='补充参考实现',code=reference)]
    if pid == '2':
        solutions.append(dict(name='补充参考实现（本地版本未完成循环推进）',code=supplements[pid][2]))
        reference=supplements[pid][2]
    statement_file=ROOT/'scripts/cache/statements'/ (question['leetcodeSlug']+'.json')
    statement=json.loads(statement_file.read_text(encoding='utf-8')).get('text','') if statement_file.exists() else ''
    signal,invariant,skeleton=guides[question['category']]
    thoughts=[text for _,text in blocks if '思路' in text]
    idea=thoughts[0].split('思路',1)[-1].lstrip('：: ') if thoughts else signal
    complexity=next((m.group(0) for _,t in blocks if (m:=re.search(r'时间[^\n]+',t))), '补充记录：请在讲题时说明时间与空间复杂度。')
    invariant,skeleton,complexity=recall_notes[pid].split('|')
    # Editorial notes are explicitly labeled; local source stays verbatim in solutions/mistakes.
    idea=next((t.split('思路',1)[-1].lstrip('：: ').split('\n')[0] for _,t in blocks if '思路' in t),signal)
    tests=cases[pid]
    specs.append(dict(**question,slug=pid+'-'+question['leetcodeSlug'],method=method_name,parameters=params,template=template,reference=reference,referenceSource='local' if path and pid!='2' else 'supplement',sourcePath=rel,sourceHash=digest,sourceHashVersion=2,sourceUpdatedAt=datetime.fromtimestamp(max(path.stat().st_mtime,progress_path.stat().st_mtime if pid in progress_records else 0),timezone.utc).isoformat() if path else None,needsRecheck=bool(pending.get(pid) or (pid in hashes and hashes[pid]!=digest)),statement=statement,solutions=solutions,recall=dict(signal=signal,choice=idea,invariant=invariant,skeleton=skeleton,complexity=complexity),mistakes=mistakes,tests=tests,related=[dict(id=i,distinction=t) for i,t in related.get(pid,[])]))
assert len(specs)==100 and all(len(s['tests'])>=5 for s in specs)
(OUT/'specs.json').write_text(json.dumps(specs,ensure_ascii=False,indent=2),encoding='utf-8')
print('Generated 100 practice specs /',sum(len(s['tests']) for s in specs),'tests; local sources left unchanged')
