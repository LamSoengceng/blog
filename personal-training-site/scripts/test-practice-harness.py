import copy, json, pathlib, runpy, unittest
ROOT=pathlib.Path(__file__).resolve().parents[1]
run=runpy.run_path(str(ROOT/'src/practice/harness.py'))['run_suite']
specs=json.loads((ROOT/'src/data/practice/specs.json').read_text(encoding='utf-8'))
byid={s['id']:s for s in specs}
def execute(pid,code): return run(dict(spec=byid[pid],code=code))
def passes(result): return not result.get('error') and all(c['passed'] for c in result['cases'])

class HarnessTests(unittest.TestCase):
    def test_100_unique_contracts_with_five_distinct_cases(self):
        self.assertEqual(len(byid),100)
        for s in specs:
            self.assertEqual(len({json.dumps(t['args']) for t in s['tests']}),5)
            self.assertTrue(s['statement']);self.assertTrue(s['recall']['invariant'])
    def test_all_blank_templates_are_rejected(self):
        for s in specs:
            self.assertFalse(passes(execute(s['id'],s['template'])),s['id'])
    def test_identity_clones_rejected(self):
        for pid,method,params,expression in [('142','detectCycle','head','ListNode(head.val)'),('160','getIntersectionNode','headA, headB','ListNode(8)'),('236','lowestCommonAncestor','root, p, q','TreeNode(root.val)'),('138','copyRandomList','head','head')]:
            self.assertFalse(passes(execute(pid,f'class Solution:\n def {method}(self,{params}):\n  return {expression}\n')),pid)
    def test_valid_alternative_order_and_palindrome(self):
        self.assertTrue(passes(execute('1','class Solution:\n def twoSum(self, nums, target):\n  for i in range(len(nums)):\n   for j in range(i+1,len(nums)):\n    if nums[i]+nums[j]==target:return [j,i]')))
        self.assertTrue(passes(execute('5','class Solution:\n def longestPalindrome(self,s):\n  return max((s[i:j] for i in range(len(s)) for j in range(i+1,len(s)+1) if s[i:j]==s[i:j][::-1]),key=len)')))
        for pid in ['15','49','46','78','39','22','131','51','347']:
            s=copy.deepcopy(byid[pid]);s['tests']=[{**t,'expected':list(reversed(t['expected']))} for t in s['tests']]
            self.assertTrue(passes(run(dict(spec=s,code=s['reference']))),pid)
    def test_common_realistic_mutants_rejected(self):
        mutations={
        '53':"class Solution:\n def maxSubArray(self,nums):\n  best=cur=0\n  for x in nums:cur=max(0,cur+x);best=max(best,cur)\n  return best",
        '560':"class Solution:\n def subarraySum(self,nums,k):\n  count={};s=ans=0\n  for x in nums:s+=x;ans+=count.get(s-k,0);count[s]=count.get(s,0)+1\n  return ans",
        '739':"class Solution:\n def dailyTemperatures(self,t):\n  out=[0]*len(t);s=[]\n  for i,x in enumerate(t):\n   while s and x>=t[s[-1]]:\n    j=s.pop();out[j]=i-j\n   s.append(i)\n  return out",
        '283':"class Solution:\n def moveZeroes(self,nums):\n  nums=sorted(nums)",
        '416':"class Solution:\n def canPartition(self,nums):\n  t=sum(nums)\n  if t%2:return False\n  dp=[True]+[False]*(t//2)\n  for x in nums:\n   for c in range(x,t//2+1):dp[c]=dp[c] or dp[c-x]\n  return dp[-1]",
        '108':"class Solution:\n def sortedArrayToBST(self,nums):\n  root=None\n  for x in reversed(nums):root=TreeNode(x,None,root)\n  return root",
        '138':"class Solution:\n def copyRandomList(self,head):\n  return head",
        }
        for pid,code in mutations.items():
            if code != byid[pid]['reference']: self.assertFalse(passes(execute(pid,code)),pid)
    def test_syntax_runtime_and_case_isolation(self):
        self.assertEqual(execute('1','class broken')['kind'],'syntax')
        self.assertIn('NameError',execute('1','class Solution:\n def twoSum(self,*args):return missing')['cases'][0]['error'])
        code='counter=0\nclass Solution:\n def twoSum(self,nums,target):\n  global counter\n  counter+=1\n  if counter!=1:raise ValueError("leaked")\n  for i in range(len(nums)):\n   for j in range(i+1,len(nums)):\n    if nums[i]+nums[j]==target:return [i,j]'
        self.assertTrue(passes(execute('1',code)))
    def test_input_immutability_and_bounded_stdout(self):
        old=copy.deepcopy(byid['283']['tests'])
        execute('283',byid['283']['reference'])
        self.assertEqual(old,byid['283']['tests'])
        result=execute('1',"print('x'*100000)\n"+byid['1']['reference'])
        self.assertEqual(len(result['stdout']),16000)

if __name__=='__main__':unittest.main()
