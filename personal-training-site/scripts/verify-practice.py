import json, pathlib, runpy, sys, subprocess
ROOT=pathlib.Path(__file__).resolve().parents[1]
specs=json.loads((ROOT/'src/data/practice/specs.json').read_text(encoding='utf-8'))
if len(sys.argv)>1:
    spec=next(s for s in specs if s['id']==sys.argv[1])
    result=runpy.run_path(str(ROOT/'src/practice/harness.py'))['run_suite'](dict(spec=spec,code=spec['reference']))
    print(json.dumps(result,ensure_ascii=True));sys.exit()
failed=[]; passed=0
for spec in specs:
    try:
        child=subprocess.run([sys.executable,'-u',__file__,spec['id']],capture_output=True,text=True,timeout=4)
        result=json.loads(child.stdout.splitlines()[-1])
    except Exception as error:
        failed.append(spec['id']); print(spec['id'],str(error),flush=True);continue
    errors=[r for r in result['cases'] if not r['passed']]
    if result.get('error') or errors:
        failed.append(spec['id'])
        print(spec['id'],json.dumps(result if result.get('error') else errors,ensure_ascii=True),flush=True)
    else: passed+=len(result['cases'])
print('Reference verification:',len(specs)-len(failed),'/ 100 problems;',passed,'cases passed')
sys.exit(bool(failed))
