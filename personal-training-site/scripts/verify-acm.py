import json, pathlib, runpy, sys, subprocess
ROOT=pathlib.Path(__file__).resolve().parents[1]
raw=json.loads((ROOT/'src/data/practice/specs.json').read_text(encoding='utf-8'))
acm=json.loads((ROOT/'src/data/practice/acm-specs.json').read_text(encoding='utf-8'))
specs=[dict(s,acm=acm[s['id']]) for s in raw]+json.loads((ROOT/'src/data/practice/acm-drills.json').read_text(encoding='utf-8'))
if len(sys.argv)>1:
    spec=next(s for s in specs if s['id']==sys.argv[1]);a=spec['acm']
    result=runpy.run_path(str(ROOT/'src/practice/harness.py'))['run_suite'](dict(spec=dict(spec,tests=a['tests']),code=a['reference'],mode='acm'))
    print(json.dumps(result,ensure_ascii=True));sys.exit()
failed=[];passed=0
for s in specs:
    try:
        child=subprocess.run([sys.executable,__file__,s['id']],capture_output=True,text=True,timeout=5)
        result=json.loads(child.stdout.splitlines()[-1])
        bad=[c for c in result['cases'] if not c['passed']]
        if result.get('error') or bad:
            failed.append(s['id']);print(s['id'],json.dumps(bad or result,ensure_ascii=True),flush=True)
        else:passed+=len(result['cases'])
    except Exception as error:
        failed.append(s['id']);print(s['id'],str(error),flush=True)
print(f'ACM verification: {len(specs)-len(failed)}/{len(specs)} problems, {passed}/540 stdin/stdout cases passed')
sys.exit(bool(failed))
