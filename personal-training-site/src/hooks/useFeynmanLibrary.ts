import { useState } from 'react'
import { addLibraryDoc, loadLibrary, removeLibraryDoc, type LibraryDoc } from '../utils/knowledgePool'

// 资料库状态 hook：粘贴入库 / 文件导入 / 删除，持久化在 knowledgePool 内完成。
export function useFeynmanLibrary() {
  const [docs, setDocs] = useState<LibraryDoc[]>(loadLibrary)

  const remove = (id: string) => setDocs(removeLibraryDoc(docs, id))

  const importFiles = async (fileList: FileList | null): Promise<number> => {
    if (!fileList?.length) return 0
    let next = docs
    for (const file of Array.from(fileList)) {
      next = addLibraryDoc(next, file.name.replace(/\.[^.]+$/, ''), await file.text())
    }
    setDocs(next)
    return fileList.length
  }

  return { docs, importFiles, remove }
}
