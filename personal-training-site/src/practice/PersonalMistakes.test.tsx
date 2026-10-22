// @vitest-environment jsdom
import { cleanup,fireEvent,render,screen,waitFor } from '@testing-library/react'
import { afterEach,expect,it,vi } from 'vitest'
import { PersonalMistakes } from './PersonalMistakes'
import type { PracticeAttempt } from './types'
afterEach(cleanup)
const attempt:PracticeAttempt={ id:'5',mode:'acm',key:'failure',code:'print("wrong")',elapsed:60,hint:0,updatedAt:'2026-10-22T10:00:00Z',outcome:'failed',tags:[],explanation:'未检验',note:'自动保留的失败现场',result:{ stdout:'',cases:[{name:'偶数回文',input:'cbbd',expected:'bb',actual:'b',passed:false}] },mistake:{reason:'',check:'',confirmed:false} }
it('确认原因与自检后保存真实失败和通过的修正代码',async()=>{
 const save=vi.fn().mockResolvedValue(undefined)
 render(<PersonalMistakes attempts={[attempt]} code='print("bb")' passed onReveal={vi.fn()} onSave={save}/> )
 fireEvent.click(screen.getByRole('button',{name:'记住这次错误'}))
 fireEvent.change(screen.getByLabelText('我确认的错误原因'),{target:{value:'漏掉偶数中心'}})
 fireEvent.change(screen.getByLabelText('下次的自检问题'),{target:{value:'两类中心都枚举了吗？'}})
 fireEvent.click(screen.getByRole('button',{name:'确认错误卡并加入复习'}))
 await waitFor(()=>expect(save).toHaveBeenCalledWith(expect.objectContaining({code:attempt.code,result:attempt.result,mistake:{reason:'漏掉偶数中心',check:'两类中心都枚举了吗？',confirmed:true,correctedCode:'print("bb")'}})))
})
it('自检先隐藏失败现场，查看旧错才记录提示',()=>{
 const reveal=vi.fn()
 render(<PersonalMistakes attempts={[{...attempt,mistake:{reason:'漏掉偶数中心',check:'两类中心都枚举了吗？',confirmed:true}}]} code='' passed={false} onReveal={reveal} onSave={vi.fn()}/> )
 fireEvent.click(screen.getByRole('button',{name:'先做旧错自检'}))
 expect(screen.queryByText(/失败现场 ·/)).toBeNull()
 expect(reveal).not.toHaveBeenCalled()
 fireEvent.click(screen.getByRole('button',{name:'查看上次错误（计为提示）'}))
 expect(reveal).toHaveBeenCalledOnce()
 expect(screen.getByText(/失败现场 ·/)).toBeTruthy()
})
it('保存失败保留表单并明确提示',async()=>{
 render(<PersonalMistakes attempts={[attempt]} code='' passed={false} onReveal={vi.fn()} onSave={vi.fn().mockRejectedValue(new Error('storage'))}/> )
 fireEvent.click(screen.getByRole('button',{name:'记住这次错误'}))
 fireEvent.change(screen.getByLabelText('我确认的错误原因'),{target:{value:'原因'}})
 fireEvent.change(screen.getByLabelText('下次的自检问题'),{target:{value:'自检'}})
 fireEvent.click(screen.getByRole('button',{name:'确认错误卡并加入复习'}))
 expect(await screen.findByRole('alert')).toBeTruthy()
 expect((screen.getByLabelText('我确认的错误原因') as HTMLTextAreaElement).value).toBe('原因')
})
