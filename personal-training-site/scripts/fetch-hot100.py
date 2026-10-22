"""Refresh the explicit official list; normal builds use the checked-in snapshot."""
import json
import pathlib
import urllib.request
from datetime import datetime, timezone

query = 'query { studyPlanV2Detail(planSlug: "top-100-liked") { planSubGroups { name questions { questionFrontendId translatedTitle titleSlug } } } }'
request = urllib.request.Request('https://leetcode.cn/graphql/', data=json.dumps({'query': query}).encode(), headers={'Content-Type': 'application/json', 'Referer': 'https://leetcode.cn/studyplan/top-100-liked/'})
groups = json.load(urllib.request.urlopen(request, timeout=40))['data']['studyPlanV2Detail']['planSubGroups']
questions = [dict(id=q['questionFrontendId'], title=q['translatedTitle'], leetcodeSlug=q['titleSlug'], category=g['name']) for g in groups for q in g['questions']]
assert len(questions) == len({q['id'] for q in questions}) == 100
target = pathlib.Path(__file__).resolve().parents[1] / 'src/data/practice'
target.mkdir(parents=True, exist_ok=True)
(target / 'hot100.json').write_text(json.dumps({'source': 'https://leetcode.cn/studyplan/top-100-liked/', 'fetchedAt': datetime.now(timezone.utc).isoformat(), 'questions': questions}, ensure_ascii=False, indent=2), encoding='utf-8')
print('Official Hot100: 100 unique IDs saved')
