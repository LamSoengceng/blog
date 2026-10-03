import type { LibraryDoc } from '../../utils/knowledgePool'

type FeynmanLibraryProps = {
  docs: LibraryDoc[]
  onImportFiles: (files: FileList | null) => void
  onRemove: (id: string) => void
}

// 资料库面板：只接受本地 .md / .txt 文件，文件内容不上传到站点服务器。
export function FeynmanLibrary({ docs, onImportFiles, onRemove }: FeynmanLibraryProps) {
  return (
    <div className="feynman-library">
      <p className="feynman-library-hint">
        资料仅保存在当前浏览器。导入 .md / .txt 后，系统按 Markdown 小标题拆成知识点供随机抽取。
      </p>
      <label className="journal-kind feynman-lib-file">
        上传 .md / .txt
        <input
          type="file"
          accept=".md,.markdown,.txt,text/markdown,text/plain"
          multiple
          onChange={(event) => {
            onImportFiles(event.target.files)
            event.target.value = ''
          }}
        />
      </label>
      {docs.length ? (
        <ul className="feynman-library-list">
          {docs.map((doc) => (
            <li key={doc.id}>
              <span>{doc.title}</span>
              <em>{doc.text.length} 字</em>
              <button type="button" aria-label={`删除资料 ${doc.title}`} onClick={() => onRemove(doc.id)}>
                ×
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-note">资料库还是空的。上传第一份 Markdown 或文本资料开始。</p>
      )}
    </div>
  )
}
