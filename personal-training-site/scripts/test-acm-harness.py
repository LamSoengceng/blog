import copy,json,pathlib,runpy,unittest
ROOT=pathlib.Path(__file__).resolve().parents[1]
run=runpy.run_path(str(ROOT/'src/practice/harness.py'))['run_suite']
acm=json.loads((ROOT/'src/data/practice/acm-specs.json').read_text(encoding='utf-8'))
drills=json.loads((ROOT/'src/data/practice/acm-drills.json').read_text(encoding='utf-8'))
byid={d['id']:d['acm'] for d in drills}
def execute(pid,code):
    config=(byid if pid.startswith('io-') else acm)[pid]
    return run(dict(spec=dict(id=pid,tests=config['tests']),code=code,mode='acm'))
def passes(result):return not result.get('error') and len(result['cases'])==5 and all(c['passed'] for c in result['cases'])

class AcmTests(unittest.TestCase):
    def test_all_108_blank_programs_fail(self):
        for pid,config in {**acm,**byid}.items():self.assertFalse(passes(execute(pid,config['template'])),pid)
    def test_buffer_read_and_main_guard(self):
        self.assertTrue(passes(execute('io-fixed-t',byid['io-fixed-t']['reference'])))
        code=byid['io-fixed-t']['reference'].split("if __name__")[0]
        self.assertFalse(passes(execute('io-fixed-t',code)))
    def test_acm_does_not_inject_core_helpers(self):
        result=execute('io-eof','ListNode(1)')
        self.assertIn('NameError',result['cases'][0]['error'])
    def test_input_and_eof_blank_lines_are_distinct(self):
        good='''def solve():
    while True:
        try: line=input()
        except EOFError: break
        if not line.strip():continue
        a,b=map(int,line.split());print(a+b)
if __name__=='__main__':solve()
'''
        self.assertTrue(passes(execute('io-eof',good)))
        self.assertFalse(passes(execute('io-eof',good.replace('if not line.strip():continue','if not line.strip():break'))))
    def test_prompts_and_merged_output_lines_fail(self):
        self.assertFalse(passes(execute('io-fixed-t',"print('请输入 T')\n"+byid['io-fixed-t']['reference'])))
        bad=byid['io-fixed-t']['reference'].replace('print(int(next(tokens)) + int(next(tokens)))',"print(int(next(tokens)) + int(next(tokens)), end=' ')")
        self.assertFalse(passes(execute('io-fixed-t',bad)))
    def test_stderr_not_mixed_into_answer_and_stdin_restored(self):
        import sys
        stdin=sys.stdin
        code="import sys\nprint('debug',file=sys.stderr)\n"+byid['io-eof']['reference']
        result=execute('io-eof',code)
        self.assertTrue(passes(result));self.assertIn('debug',result['cases'][0]['stderr']);self.assertIs(sys.stdin,stdin)
    def test_system_exit_is_normal_only_for_zero(self):
        code=byid['io-eof']['reference']+'\nsys.exit(0)\n'
        self.assertTrue(passes(execute('io-eof',code)))
        result=execute('io-eof',code.replace('sys.exit(0)','sys.exit(1)'))
        self.assertFalse(passes(result));self.assertIn('退出码',result['cases'][0]['error'])
    def test_syntax_runtime_and_data_are_isolated(self):
        self.assertEqual(execute('io-eof','def !')['kind'],'syntax')
        self.assertIn('ValueError',execute('io-eof','int("bad")')['cases'][0]['error'])
        code='counter=0\n'+byid['io-eof']['reference'].replace('def solve():','def solve():\n    global counter\n    counter += 1\n    assert counter == 1')
        before=copy.deepcopy(byid['io-eof']['tests'])
        self.assertTrue(passes(execute('io-eof',code)));self.assertEqual(before,byid['io-eof']['tests'])
    def test_special_palindrome_and_custom_stdin(self):
        s=dict(id='5',tests=[dict(name='multi-answer',args=['babad'],expected=3,stdin='babad\n',stdout='bab\n')])
        result=run(dict(spec=s,code='print("aba")',mode='acm'))
        self.assertTrue(result['cases'][0]['passed'])
        s['tests']=[dict(name='custom',args=[],expected='6\n',stdin='1 2 3\n',stdout='6\n',custom=True)]
        self.assertTrue(run(dict(spec=s,code='print(sum(map(int,input().split())))',mode='acm'))['cases'][0]['passed'])

if __name__=='__main__':unittest.main()
