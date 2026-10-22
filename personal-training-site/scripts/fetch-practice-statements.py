"""Explicit network refresh; preserve exponent notation and paragraph boundaries."""
import html, json, pathlib, re, urllib.request
ROOT=pathlib.Path(__file__).resolve().parents[1]
questions=json.loads((ROOT/'src/data/practice/hot100.json').read_text(encoding='utf-8'))['questions']
target=ROOT/'scripts/cache/statements'
target.mkdir(parents=True,exist_ok=True)
for offset in range(0,len(questions),10):
    batch=questions[offset:offset+10]
    query='query {'+' '.join(f'q{q["id"]}: question(titleSlug: "{q["leetcodeSlug"]}") {{ translatedContent }}' for q in batch)+'}'
    req=urllib.request.Request('https://leetcode.cn/graphql/',data=json.dumps({'query':query}).encode(),headers={'Content-Type':'application/json','Referer':'https://leetcode.cn/'})
    data=json.load(urllib.request.urlopen(req,timeout=40))['data']
    for q in batch:
        raw=data['q'+q['id']]['translatedContent']
        text=re.sub(r'<sup[^>]*>(.*?)</sup>',r'^\1',raw,flags=re.S)
        text=re.sub(r'<sub[^>]*>(.*?)</sub>',r'_\1',text,flags=re.S)
        text=re.sub(r'<li[^>]*>','\n- ',text)
        text=re.sub(r'</(?:p|pre|div|h3)>','\n\n',text)
        text=re.sub(r'<br\s*/?>|</li>','\n',text)
        text=html.unescape(re.sub(r'<[^>]+>','',text))
        text=re.sub(r'\n[ \t]+','\n',text)
        text=re.sub(r'\n{3,}','\n\n',text).strip()
        (target/(q['leetcodeSlug']+'.json')).write_text(json.dumps({'text':text},ensure_ascii=False),encoding='utf-8')
    print(f'Statements refreshed: {offset+len(batch)}/100',flush=True)
