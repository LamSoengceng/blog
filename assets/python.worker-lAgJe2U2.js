(function(){"use strict";var p=`"""Shared browser/CPython adapters. Every case receives a fresh user namespace."""
import json, math, traceback, contextlib, io, collections, typing, copy, sys

class ListNode:
    def __init__(self, val=0, next=None):
        self.val, self.next = val, next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val, self.next, self.random = val, next, random

def linked(values):
    nodes = [ListNode(v) for v in values]
    for a, b in zip(nodes, nodes[1:]): a.next = b
    return (nodes[0] if nodes else None), nodes

def tree(values):
    if not values: return None, []
    nodes = [TreeNode(v) if v is not None else None for v in values]
    kids = iter(nodes[1:])
    for node in nodes:
        if node:
            node.left, node.right = next(kids, None), next(kids, None)
    return nodes[0], nodes

def list_values(head):
    values, seen = [], set()
    while head:
        if id(head) in seen or len(values) > 10000: raise ValueError('输出链表存在环或过长')
        seen.add(id(head)); values.append(head.val); head = head.next
    return values

def tree_values(root):
    queue, values, seen = collections.deque([root]), [], set()
    while queue:
        node = queue.popleft()
        if node:
            if id(node) in seen: raise ValueError('输出树存在环或共享节点')
            seen.add(id(node)); values.append(node.val); queue.extend([node.left, node.right])
        else: values.append(None)
        if len(values) > 10000: raise ValueError('输出树过长')
    while values and values[-1] is None: values.pop()
    return values

def equivalent(a, b):
    # bool must not pass as 0/1; numeric outputs allow floating-point tolerance.
    if isinstance(b, bool): return isinstance(a, bool) and a == b
    if isinstance(b, (float, int)):
        return isinstance(a, (int, float)) and not isinstance(a, bool) and math.isclose(a, b, rel_tol=1e-8, abs_tol=1e-8)
    if isinstance(b, list): return isinstance(a, (list, tuple)) and len(a) == len(b) and all(equivalent(x,y) for x,y in zip(a,b))
    return type(a) == type(b) and a == b

def canonical(value, inner=False):
    return sorted(json.dumps(sorted(v) if inner and isinstance(v,list) else v, sort_keys=True) for v in value)

def invoke(spec, case, ns):
    pid, args = spec['id'], copy.deepcopy(case['args'])
    expected = case.get('expected')
    if pid in ('146','155','208','295'):
        ops, values = args
        obj = ns[ops[0]](*values[0]); result = [None]
        for op, params in zip(ops[1:],values[1:]): result.append(getattr(obj,op)(*params))
        return result, equivalent(result,expected)
    obj = ns['Solution']()
    fn = getattr(obj,spec['method'])
    list_ids = {'2':[0,1], '19':[0], '21':[0,1], '24':[0], '25':[0], '148':[0], '206':[0], '234':[0]}
    if pid in list_ids:
        for i in list_ids[pid]: args[i] = linked(args[i])[0]
    if pid == '23': args[0] = [linked(a)[0] for a in args[0]]
    nodes = []
    if pid in ('141','142'):
        head,nodes = linked(args[0]); pos=args[1]
        if pos >= 0: nodes[-1].next=nodes[pos]
        args=[head]
    if pid == '160':
        # args = [prefixA, prefixB, sharedTail]; shared nodes are actual identical objects.
        shared,_=linked(args[2]); a,an=linked(args[0]); b,bn=linked(args[1])
        if an: an[-1].next=shared
        if bn: bn[-1].next=shared
        args=[a if an else shared,b if bn else shared]
    tree_ids = {'94','104','226','101','543','102','98','230','199','114','437','236','124'}
    if pid in tree_ids:
        root,nodes=tree(args[0]); args[0]=root
        if pid == '236': args[1:]=[nodes[args[1]],nodes[args[2]]]
    if pid == '138':
        original=[Node(v) for v,_ in args[0]]
        for i,(_,r) in enumerate(args[0]):
            original[i].next=original[i+1] if i+1<len(original) else None
            original[i].random=original[r] if r is not None else None
        args=[original[0] if original else None]
        before=[(n.val,n.next,n.random) for n in original]
    result=fn(*args)
    if pid == '160':
        valid=result is shared
        return {'sharedNode': valid, 'value': result.val if result else None},valid
    if pid == '142':
        valid=result is (nodes[case['args'][1]] if case['args'][1]>=0 else None)
        return {'entryIndex': next((i for i,n in enumerate(nodes) if n is result),None)},valid
    if pid == '236':
        valid=result is nodes[expected]
        return {'nodeIndex': next((i for i,n in enumerate(nodes) if n is result),None)},valid
    if pid == '138':
        out=[]; seen=set(); p=result
        while p:
            if id(p) in seen or len(out)>10000: raise ValueError('复制链表的 next 存在环')
            seen.add(id(p)); out.append(p); p=p.next
        valid=not any(n in original for n in out) and all((n.val,n.next,n.random)==old for n,old in zip(original,before))
        serialized=[[n.val,next((i for i,v in enumerate(out) if v is n.random),None)] for n in out]
        valid=valid and all(n.random is None or n.random in out for n in out) and equivalent(serialized,expected)
        return serialized,valid
    if pid == '108':
        seen=set()
        def check(node,lo=-math.inf,hi=math.inf):
            if node is None: return [],0,True
            if id(node) in seen: raise ValueError('树存在环')
            seen.add(id(node))
            l,lh,lv=check(node.left,lo,node.val); r,rh,rv=check(node.right,node.val,hi)
            return l+[node.val]+r,1+max(lh,rh),lv and rv and lo<node.val<hi and abs(lh-rh)<=1
        vals,_,valid=check(result)
        return tree_values(result),valid and vals==case['args'][0]
    if pid == '114':
        p=args[0]; seen=set(); vals=[]
        while p:
            if p.left is not None or id(p) in seen: raise ValueError('展开后仍有左节点或存在环')
            seen.add(id(p)); vals.append(p.val); p=p.right
        return vals,equivalent(vals,expected) and seen=={id(n) for n in nodes if n}
    if pid in ('283','189','73','48','75','31'): result=args[0]
    if pid in ('2','19','21','23','24','25','148','206'): result=list_values(result)
    if pid in ('226','105'): result=tree_values(result)
    if pid == '1':
        valid=isinstance(result,(list,tuple)) and len(result)==2 and all(type(i)==int and 0<=i<len(args[0]) for i in result) and result[0]!=result[1] and sum(args[0][i] for i in result)==args[1]
    elif pid == '5': valid=isinstance(result,str) and result in args[0] and result==result[::-1] and len(result)==expected
    elif pid in ('15','49','78','39'): valid=isinstance(result,list) and canonical(result,True)==canonical(expected,True)
    elif pid in ('46','17','22','131','51','347'): valid=isinstance(result,list) and canonical(result)==canonical(expected)
    else: valid=equivalent(result,expected)
    return result,bool(valid)

def run_suite(payload):
    if payload.get('mode') == 'acm': return run_acm_suite(payload)
    spec,code=payload['spec'],payload['code']
    class LimitedOutput(io.StringIO):
        def write(self, text):
            remaining=16000-self.tell()
            if remaining>0: super().write(text[:remaining])
            return len(text)
    output=LimitedOutput(); cases=[]
    try: compiled=compile(code,'<作答>','exec')
    except SyntaxError:
        return {'cases': [], 'stdout':'', 'error':traceback.format_exc(), 'kind':'syntax'}
    for case in spec['tests']:
        try:
            ns=dict(vars(typing)); ns.update(ListNode=ListNode,TreeNode=TreeNode,Node=Node)
            with contextlib.redirect_stdout(output),contextlib.redirect_stderr(output):
                exec(compiled,ns)
                actual,passed=invoke(spec,case,ns)
            # Convert only JSON-safe results across the worker boundary.
            json.dumps(actual,allow_nan=False)
            cases.append(dict(name=case['name'],input=case['args'],expected=case.get('expected'),actual=actual,passed=passed))
        except Exception:
            cases.append(dict(name=case['name'],input=case['args'],expected=case.get('expected'),passed=False,error=traceback.format_exc()))
    return {'cases':cases,'stdout':output.getvalue()[:16000]}

def normalized_output(text):
    lines=[' '.join(line.split()) for line in text.replace('\\r\\n','\\n').replace('\\r','\\n').split('\\n')]
    while lines and not lines[-1]: lines.pop()
    return lines

def check_acm_output(pid, case, text):
    """Text outputs have value semantics, never in-memory node identity semantics."""
    if pid.startswith('io-') or case.get('custom'):
        return normalized_output(text)==normalized_output(case.get('stdout',str(case['expected'])))
    expected,args=case['expected'],case['args']
    stripped=text.strip()
    if pid == '5':
        value=text.rstrip('\\r\\n')
        return value in args[0] and value==value[::-1] and len(value)==expected
    if pid in ('142','160','236'):
        value=int(stripped)
        target=(args[1] if args[1]>=0 else -1) if pid=='142' else (len(args[0]) if args[2] else -1) if pid=='160' else expected
        return value==target
    if pid == '108':
        root,_=tree(json.loads(stripped))
        return invoke({'id':'108','method':'sortedArrayToBST'},case,{'Solution':type('Solution',(),{'sortedArrayToBST':lambda self,nums:root})})[1]
    if isinstance(expected,bool):
        if stripped.lower() not in ('true','false'): return False
        actual=stripped.lower()=='true'
    elif isinstance(expected,(int,float)):
        actual=float(stripped)
    elif isinstance(expected,str):
        actual=text.rstrip('\\r\\n')
    elif pid in ('48','73'):
        actual=[list(map(int,line.split())) for line in stripped.splitlines()] if stripped else []
    elif isinstance(expected,list) and (not expected or all(type(v)==int for v in expected)) and pid not in ('15','49','78','39','46','17','22','131','51','138','226','105','146','155','208','295','56','102','118'):
        actual=list(map(int,stripped.split()))
    else: actual=json.loads(stripped)
    if pid == '1':
        return isinstance(actual,list) and len(actual)==2 and all(type(i)==int and 0<=i<len(args[0]) for i in actual) and actual[0]!=actual[1] and sum(args[0][i] for i in actual)==args[1]
    if pid in ('15','49','78','39'): return isinstance(actual,list) and canonical(actual,True)==canonical(expected,True)
    if pid in ('46','17','22','131','51','347'): return isinstance(actual,list) and canonical(actual)==canonical(expected)
    return equivalent(actual,expected)

def run_acm_suite(payload):
    spec,code=payload['spec'],payload['code']
    try: compiled=compile(code,'<ACM 作答>','exec')
    except SyntaxError: return {'cases':[],'stdout':'','error':traceback.format_exc(),'kind':'syntax'}
    class LimitedOutput(io.StringIO):
        def write(self,text):
            remaining=16000-self.tell()
            if remaining>0: super().write(text[:remaining])
            return len(text)
    cases=[]
    for case in spec['tests']:
        output,errors=LimitedOutput(),LimitedOutput()
        previous_stdin=sys.stdin
        stream=io.TextIOWrapper(io.BytesIO(case['stdin'].encode('utf-8')),encoding='utf-8')
        error=None
        try:
            sys.stdin=stream
            # ACM supplies only Python builtins. Learners must import modules and define nodes.
            ns={'__name__':'__main__','__builtins__':__builtins__}
            with contextlib.redirect_stdout(output),contextlib.redirect_stderr(errors):
                try: exec(compiled,ns)
                except SystemExit as exit_error:
                    if exit_error.code not in (None,0): raise RuntimeError(f'程序退出码：{exit_error.code}')
        except Exception: error=traceback.format_exc()
        finally:
            sys.stdin=previous_stdin
            stream.close()
        actual=output.getvalue()
        try: passed=not error and check_acm_output(spec['id'],case,actual)
        except (ValueError,TypeError,KeyError,IndexError,json.JSONDecodeError): passed=False
        result=dict(name=case['name'],input=case['stdin'],expected=case.get('stdout',case['expected']),actual=actual,passed=bool(passed))
        if error: result['error']=error
        if errors.getvalue():result['stderr']=errors.getvalue()
        cases.append(result)
    return {'cases':cases,'stdout':''}
`;const i=self;i.onmessage=async f=>{let t="加载运行模块",r;const s=[],u=console.error;console.error=(...e)=>{s.push(e.map(n=>n instanceof Error?`${n.message}
${n.stack??""}`:String(n)).join(" ")),u(...e)};try{const{base:e,payload:n}=f.data,v=await import(`${e}python/0.27.7/pyodide.mjs`);t="验证 Python 标准库";const l=await fetch(`${e}python/0.27.7/python_stdlib.data`);if(!l.ok)throw new Error(`标准库 HTTP ${l.status}`);const d=await l.arrayBuffer(),c=Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",d)),a=>a.toString(16).padStart(2,"0")).join("");if(s.push(`标准库 ${d.byteLength} bytes / SHA256 ${c}`),c!=="16611534726e5d8ac2bd8f926410b2dcb8d6f49aa24913463533b457a2115c16")throw new Error("标准库下载不完整或缓存不匹配，请刷新后重试。");r=URL.createObjectURL(new Blob([d],{type:"application/octet-stream"})),t="初始化 Python";const o=await v.loadPyodide({indexURL:`${e}python/0.27.7/`,stdLibURL:r,stdout:a=>s.push(a),stderr:a=>s.push(a)});t="初始化测试适配器",o.runPython(p),i.postMessage({type:"ready"}),t="运行代码",o.globals.set("_request_json",JSON.stringify(n));const g=JSON.parse(o.runPython("json.dumps(run_suite(json.loads(_request_json)), ensure_ascii=False)"));o.globals.delete("_request_json"),i.postMessage({type:"result",result:g})}catch(e){const n=e instanceof Error?`${e.message}
${e.stack??""}`:typeof e=="object"&&e?JSON.stringify(e,Object.getOwnPropertyNames(e)):String(e);i.postMessage({type:"error",message:`${t}：${n}
${s.slice(0,60).join(`
`)}`})}finally{console.error=u,r&&URL.revokeObjectURL(r)}}})();
