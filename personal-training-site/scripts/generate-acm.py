"""Build explicit stdin/stdout contracts. Local exercise files are read, never edited."""
import ast, json, os, pathlib
from datetime import datetime, timezone
ROOT=pathlib.Path(__file__).resolve().parents[1]
SOURCE=pathlib.Path(os.environ.get('LEETCODE_ROOT','C:/Project/leetcode'))
OUT=ROOT/'src/data/practice'
specs=json.loads((OUT/'specs.json').read_text(encoding='utf-8'))
TREE={'94','104','226','101','543','102','98','230','199','114','437','236','124'}
JSON_INPUT={'146','155','208','295','138'}
JSON_OUTPUT={'15','49','78','39','46','17','22','131','51','138','108','226','105','146','155','208','295','56','102','118'}
helpers='''import sys
import json
from typing import *
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def make_list(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def make_tree(values):
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for n in nodes:
        if n: n.left, n.right = next(kids, None), next(kids, None)
    return (nodes[0] if nodes else None), nodes

def encode_tree(root):
    out, q = [], deque([root])
    while q:
        n = q.popleft()
        out.append(n.val if n else None)
        if n: q.extend([n.left, n.right])
    while out and out[-1] is None: out.pop()
    return out

def encode_list(head):
    out = []
    while head: out.append(head.val); head = head.next
    return out
'''
def kind(pid,index,arg):
    if pid in JSON_INPUT or (pid in TREE and index==0) or (pid=='23'): return 'json'
    if isinstance(arg,str):return 'string'
    if isinstance(arg,(int,float)):return 'number'
    if isinstance(arg,list) and arg and isinstance(arg[0],list):
        return 'chars' if arg[0] and isinstance(arg[0][0],str) else 'matrix'
    if isinstance(arg,list):return 'words' if arg and isinstance(arg[0],str) else 'array'
    return 'json'
def encode_arg(value,k):
    if k=='json':return json.dumps(value,ensure_ascii=False)+'\n'
    if k in ('string','number'):return str(value)+'\n'
    if k=='array':return str(len(value))+'\n'+' '.join(map(str,value))+'\n'
    if k=='words':return str(len(value))+'\n'+'\n'.join(value)+'\n'
    return f'{len(value)} {len(value[0]) if value else 0}\n'+'\n'.join(''.join(row) if k=='chars' else ' '.join(map(str,row)) for row in value)+'\n'
descriptions={
'json':'一行 JSON；树使用层序数组，null 为空位；嵌套列表按数组保留',
'string':'一行原始字符串（可能为空串，保留行内空格）',
'number':'一行整数',
'array':'先一行长度 n，再一行 n 个空格分隔的整数；n=0 时下一行为空行',
'words':'先一行字符串数量 n，再逐行读取 n 个字符串（空字符串占一行）',
'matrix':'先一行 m n，再读取 m 行，每行 n 个空格分隔整数',
'chars':'先一行 m n，再读取 m 行连续字符，每行 n 个字符'}
def read_expr(k):
    return {'json':'json.loads(sys.stdin.readline())','string':"sys.stdin.readline().rstrip('\\r\\n')",'number':'int(sys.stdin.readline())','array':'read_array()','words':'read_words()','matrix':'read_matrix()','chars':'read_chars()'}[k]
reader_helpers='''
def read_array():
    n = int(sys.stdin.readline())
    row = list(map(int, sys.stdin.readline().split()))
    assert len(row) == n
    return row

def read_words():
    return [sys.stdin.readline().rstrip('\\r\\n') for _ in range(int(sys.stdin.readline()))]

def read_matrix():
    m, n = map(int, sys.stdin.readline().split())
    return [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

def read_chars():
    m, n = map(int, sys.stdin.readline().split())
    return [list(sys.stdin.readline().rstrip('\\r\\n')) for _ in range(m)]
'''
def clean_reference(code):
    t=ast.parse(code)
    t.body=[n for n in t.body if not (isinstance(n,ast.If) and '__name__' in ast.unparse(n.test))]
    return ast.unparse(t)
def driver(s,kinds):
    pid=s['id']; lines=['def solve():']
    lines.extend(f'    a{i} = {read_expr(k)}' for i,k in enumerate(kinds))
    args=[f'a{i}' for i in range(len(kinds))]
    if pid in ('146','155','208','295'):
        lines+=['    obj = globals()[a0[0]](*a1[0])','    result = [None]','    for name, params in zip(a0[1:], a1[1:]): result.append(getattr(obj, name)(*params))']
    else:
        list_indices={'2':[0,1],'19':[0],'21':[0,1],'24':[0],'25':[0],'148':[0],'206':[0],'234':[0]}
        for i in list_indices.get(pid,[]):lines.append(f'    a{i} = make_list(a{i})[0]')
        if pid=='23':lines.append('    a0 = [make_list(v)[0] for v in a0]')
        if pid in ('141','142'):
            lines+=['    a0, nodes = make_list(a0)','    if a1 >= 0: nodes[-1].next = nodes[a1]'];args=['a0']
        if pid=='160':
            lines+=['    shared, _ = make_list(a2)','    a0, first = make_list(a0)','    a1, second = make_list(a1)','    if first: first[-1].next = shared','    else: a0 = shared','    if second: second[-1].next = shared','    else: a1 = shared','    nodes = first + ([shared] if shared else [])'];args=['a0','a1']
        if pid in TREE:
            lines+=['    a0, nodes = make_tree(a0)']
            if pid=='236':lines+=['    a1, a2 = nodes[a1], nodes[a2]']
        if pid=='138':
            lines+=['    nodes = [Node(v) for v, _ in a0]','    for i, (_, r) in enumerate(a0):','        nodes[i].next = nodes[i+1] if i+1 < len(nodes) else None','        nodes[i].random = nodes[r] if r is not None else None','    a0 = nodes[0] if nodes else None']
        lines.append(f'    result = Solution().{s["method"]}({", ".join(args)})')
        if pid in ('283','189','73','48','75','31'):lines.append('    result = a0')
        if pid in ('2','19','21','23','24','25','148','206'):lines.append('    result = encode_list(result)')
        if pid in ('105','108','226'):lines.append('    result = encode_tree(result)')
        if pid in ('142','160','236'):lines.append('    result = next((i for i, n in enumerate(nodes) if n is result), -1)')
        if pid=='114':
            lines+=['    result = []','    while a0: result.append(a0.val); a0 = a0.right']
        if pid=='138':
            lines+=['    copied = []','    while result: copied.append(result); result = result.next','    result = [[n.val, next((i for i, v in enumerate(copied) if v is n.random), None)] for n in copied]']
    if pid in JSON_OUTPUT:lines.append('    print(json.dumps(result, ensure_ascii=False))')
    elif pid in ('48','73'):lines.append("    print('\\n'.join(' '.join(map(str, row)) for row in result))")
    elif isinstance(s['tests'][0]['expected'],list):lines.append("    print(' '.join(map(str, result)))")
    elif isinstance(s['tests'][0]['expected'],bool) and pid not in ('142','160'):lines.append("    print('true' if result else 'false')")
    else:lines.append('    print(result)')
    return '\n'.join(lines)+"\n\nif __name__ == '__main__':\n    solve()\n"
def balanced(values):
    if not values:return None
    m=len(values)//2
    return values[m],balanced(values[:m]),balanced(values[m+1:])
def balanced_encoding(values):
    root=balanced(values); queue=[root];out=[]
    while queue:
        n=queue.pop(0);out.append(n[0] if n else None)
        if n:queue.extend(n[1:])
    while out and out[-1] is None:out.pop()
    return out
def expected_stdout(s,case):
    pid=s['id']; value=case['expected'];args=case['args']
    if pid=='5':
        text=args[0]
        return next(text[i:i+value] for i in range(len(text)-value+1) if text[i:i+value]==text[i:i+value][::-1])+'\n'
    if pid=='108':value=balanced_encoding(args[0])
    if pid=='160':value=len(args[0]) if args[2] else -1
    if pid=='142':value=args[1]
    if pid in JSON_OUTPUT:return json.dumps(value,ensure_ascii=False)+'\n'
    if pid in ('48','73'):return '\n'.join(' '.join(map(str,row)) for row in value)+'\n'
    if isinstance(value,list):return ' '.join(map(str,value))+'\n'
    if isinstance(value,bool):return ('true' if value else 'false')+'\n'
    return str(value)+'\n'
output_descriptions={
'5':'输出一个最长回文子串；有多个最长解时，任意合法解均接受。',
'108':'输出一行 JSON 层序数组，null 表示空节点；任意合法的平衡 BST 均接受。',
'142':'输出环入口在原链表中的 0-based 下标；无环输出 -1。',
'160':'输出交点在 A 链表中的 0-based 下标；无交点输出 -1。输入依次为 A 独有前缀、B 独有前缀、共享尾部。',
'236':'输出最近公共祖先在输入层序数组中的下标。p、q 也以该数组下标给出。',
'138':'输出一行 JSON 的 [[值, random下标], …]，random 为空用 null。此模式检查文本结构，节点深拷贝身份约束请在核心代码模式验证。'}
acm={}
for s in specs:
    kinds=[kind(s['id'],i,a) for i,a in enumerate(s['tests'][0]['args'])]
    input_format='按参数顺序读取：\n'+'\n'.join(f'{i+1}. {s["parameters"][i] if i<len(s["parameters"]) else "参数"}：{descriptions[k]}' for i,k in enumerate(kinds))
    if s['id'] in ('146','155','208','295'):input_format='第一行是操作名 JSON 数组（首项为构造函数），第二行是对应参数 JSON 数组。'
    output_format=output_descriptions.get(s['id']) or ('输出一行 JSON，集合/组合答案允许合法顺序差异。' if s['id'] in JSON_OUTPUT else '逐行输出矩阵，每行元素以空格分隔。' if s['id'] in ('48','73') else '输出 true 或 false（大小写均可）。' if isinstance(s['tests'][0]['expected'],bool) else '输出整数/数值或字符串；一维整数数组以空格分隔。')
    tests=[dict(**t,stdin=''.join(encode_arg(a,k) for a,k in zip(t['args'],kinds)),stdout=expected_stdout(s,t)) for t in s['tests']]
    template="import sys\n\n\ndef solve():\n    # 自己读取标准输入、处理数据、打印答案。\n    pass\n\n\nif __name__ == '__main__':\n    solve()\n"
    reference=helpers+'\n'+clean_reference(s['reference'])+'\n'+reader_helpers+'\n'+driver(s,kinds)
    acm[s['id']]=dict(template=template,reference=reference,inputFormat=input_format,outputFormat=output_format,tests=tests)
(OUT/'acm-specs.json').write_text(json.dumps(acm,ensure_ascii=False,indent=2),encoding='utf-8')

# Same eight topics as the local TODO exercises, with additional edge cases.
drill_data=[
('fixed-t','固定 T 组：A + B','ex01_ab_fixed_t.py','先读取 T，再处理恰好 T 组数据。每组结果占一行。',
 [('2\n1 5\n10 20\n','6\n30\n'),('0\n',''),('1\n-5 5','0\n'),('3\n0 0\n-2 -3\n100 200\n','0\n-5\n300\n'),('2\n  1   2\n3\t4','3\n7\n')],
 '''import sys
def solve():
    tokens = iter(sys.stdin.buffer.read().split())
    first = next(tokens, None)
    if first is None: return
    for _ in range(int(first)): print(int(next(tokens)) + int(next(tokens)))
if __name__ == '__main__': solve()
'''),
('eof','读到 EOF：A + B','ex02_ab_until_eof.py','逐行处理两个整数，读到 EOF 结束。空白行应跳过，空行不是 EOF。',
 [('1 5\n10 20\n3 7','6\n30\n10\n'),('',''),('\n1 2\n\n3 4\n','3\n7\n'),('-1 -2\n0 0\n','-3\n0\n'),('  5\t6  \r\n7 8','11\n15\n')],
 '''import sys
def solve():
    for line in sys.stdin:
        if not line.strip(): continue
        a, b = map(int, line.split())
        print(a + b)
if __name__ == '__main__': solve()
'''),
('sentinel','结束标记：0 0','ex03_ab_zero_terminate.py','每行两个整数，遇到 0 0 立即停止，不输出结束标记，也不处理后续行。空白行跳过。',
 [('1 5\n10 20\n0 0\n','6\n30\n'),('0 0\n',''),('1 -1\n0 0\n5 6','0\n'),('\n0 2\n2 0\n0 0\n','2\n2\n'),('-3 -4\n0 0','-7\n')],
 '''import sys
def solve():
    for line in sys.stdin:
        if not line.strip(): continue
        a, b = map(int, line.split())
        if a == b == 0: break
        print(a + b)
if __name__ == '__main__': solve()
'''),
('counted','变长数据：N 个数求和','ex04_ab_sum_n.py','每组以 N 开始，后面恰好 N 个整数，输出该组和。数据可跨行，遇 N=0 或 EOF 结束；结束标记不输出。',
 [('3 1 2 3\n2 4 5\n0','6\n9\n'),('0\n',''),('3\n1\n2 3\n1 -7','6\n-7\n'),('',''),('2 -5 5\n1 9\n0\n1 100','0\n9\n')],
 '''import sys
def solve():
    data = iter(map(int, sys.stdin.buffer.read().split()))
    for n in data:
        if n == 0: break
        print(sum(next(data) for _ in range(n)))
if __name__ == '__main__': solve()
'''),
('words','单词排序与空白处理','ex05_str_sort_space.py','每个非空行是一组单词，按字典序排序后以单个空格输出。读到 EOF 结束，空白行跳过。',
 [('banana apple cat','apple banana cat\n'),('  b\t a   c \n','a b c\n'),('\n\na a\n','a a\n'),('z\nb a','z\na b\n'),('','')],
 '''import sys
def solve():
    for line in sys.stdin:
        words = line.split()
        if words: print(' '.join(sorted(words)))
if __name__ == '__main__': solve()
'''),
('two-sum','数组清洗：两数之和','ex06_two_sum_acm.py','第一行是逗号或空格分隔的整数，可带中括号；第二行为 target。输出唯一解的两个下标，升序、空格分隔。',
 [('[2, 7, 11, 15]\n9','0 1\n'),('3 2 4\n6','1 2\n'),('[3,3]\n6','0 1\n'),('[-3, 4, 3, 90]\n0','0 2\n'),('0,4,3,0\n0','0 3\n')],
 '''import sys
def solve():
    nums = list(map(int, sys.stdin.readline().strip().strip('[]').replace(',', ' ').split()))
    target = int(sys.stdin.readline())
    seen = {}
    for i, x in enumerate(nums):
        if target - x in seen:
            print(seen[target-x], i)
            return
        seen[x] = i
if __name__ == '__main__': solve()
'''),
('grid','字符网格：岛屿数量','ex07_num_islands_acm.py','第一行为 m n；接下来 m 行为连续 0/1 字符（无空格），统计上下左右相连的陆地块数量，输出一个整数。',
 [('3 3\n110\n010\n001','2\n'),('1 1\n0','0\n'),('1 1\n1','1\n'),('3 3\n101\n010\n101','5\n'),('2 4\n1111\n1111','1\n')],
 '''import sys
def solve():
    m, n = map(int, sys.stdin.readline().split())
    grid = [list(sys.stdin.readline().strip()) for _ in range(m)]
    total = 0
    for r in range(m):
        for c in range(n):
            if grid[r][c] != '1': continue
            total += 1
            grid[r][c] = '0'
            stack = [(r,c)]
            while stack:
                x, y = stack.pop()
                for dx,dy in ((1,0),(-1,0),(0,1),(0,-1)):
                    nx,ny=x+dx,y+dy
                    if 0<=nx<m and 0<=ny<n and grid[nx][ny]=='1':
                        grid[nx][ny]='0';stack.append((nx,ny))
    print(total)
if __name__ == '__main__': solve()
'''),
('linked-list','链表构造与格式化输出','ex08_reverse_list_acm.py','输入一行整数，可使用空格或逗号分隔、可带中括号。自己定义 ListNode、构造并反转链表，输出 v1 -> v2 -> None；空链表输出 Empty List。',
 [('[1, 2, 3, 4, 5]','5 -> 4 -> 3 -> 2 -> 1 -> None\n'),('','Empty List\n'),('[]\n','Empty List\n'),('-1','-1 -> None\n'),('1, 1, -2','-2 -> 1 -> 1 -> None\n')],
 '''import sys
class ListNode:
    def __init__(self, val=0, next=None): self.val,self.next=val,next
def solve():
    nums=list(map(int,sys.stdin.readline().strip().strip('[]').replace(',',' ').split()))
    head=tail=None
    for x in nums:
        node=ListNode(x)
        if tail:tail.next=node
        else:head=node
        tail=node
    prev=None
    while head:
        nxt=head.next;head.next=prev;prev=head;head=nxt
    out=[]
    while prev:out.append(str(prev.val));prev=prev.next
    print(' -> '.join(out+['None']) if out else 'Empty List')
if __name__ == '__main__': solve()
''')]
drills=[]
for slug,title,filename,description,pairs,reference in drill_data:
    path=SOURCE/'acm_mode/exercises'/filename
    original=path.read_text(encoding='utf-8-sig')
    module=ast.parse(original)
    local_solve=next(n for n in module.body if isinstance(n,ast.FunctionDef) and n.name=='solve')
    template="import sys\n\n\ndef solve():\n    # 读取标准输入，并按题目要求逐行输出。\n    pass\n\n\nif __name__ == '__main__':\n    solve()\n"
    tests=[dict(name=f'{i+1}. '+('样例' if i==0 else '输入输出边界'),args=[],expected=out,stdin=inp,stdout=out) for i,(inp,out) in enumerate(pairs)]
    drills.append(dict(id='io-'+slug,slug='io-'+slug,title=title,category='ACM 输入输出',leetcodeSlug='',method='solve',parameters=[],template=template,reference=reference,referenceSource='supplement',sourcePath=path.relative_to(SOURCE).as_posix(),sourceUpdatedAt=datetime.fromtimestamp(path.stat().st_mtime,timezone.utc).isoformat(),needsRecheck=False,statement=description,solutions=[dict(name='本地练习原文',code=ast.get_docstring(module)),dict(name='本地待完成骨架',code=ast.get_source_segment(original,local_solve))],recall=dict(signal=description,choice='先明确一组数据的边界，再区分 EOF、空行、结束标记。',invariant='每轮恰好消费一组输入，输出行与处理组一一对应；不要打印提示语。',skeleton='读入 → 解析 → 处理 → 按格式输出；EOF 与空行分开判断。',complexity='输入读取时间与字符数线性相关；算法部分根据实际解法分析。'),mistakes=[],tests=tests,related=[],acmOnly=True,acm=dict(template=template,reference=reference,inputFormat=description,outputFormat='按题目描述逐行输出；忽略每行首尾及重复空白，保留分行，不允许额外提示语。',tests=tests)))
(OUT/'acm-drills.json').write_text(json.dumps(drills,ensure_ascii=False,indent=2),encoding='utf-8')
print('Generated ACM contracts: 100 Hot100 + 8 local I/O drills / 540 cases')
