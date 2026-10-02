import { useState } from 'react'
import type { LibraryDoc } from '../../utils/knowledgePool'

type FeynmanLibraryProps = {
  docs: LibraryDoc[]
  onAddPaste: (title: string, text: string) => void
  onImportFiles: (files: FileList | null) => void
  onRemove: (id: string) => void
}

// 我的资料库面板：粘贴文本或导入 .md/.txt；文档按小标题拆成知识点进入出题池。
export function FeynmanLibrary({ docs, onAddPaste, onImportFiles, onRemove }: FeynmanLibraryProps) {
  const [pasteTitle, setPasteTitle] = useState('')
  const [pasteText, setPasteText] = useState('')

  return (
    <div className="feynman-library">
      <p className="feynman-library-hint">
        资料存在本机浏览器。支持粘贴文本或导入 .md / .txt，一份资料按小标题拆成多个知识点进入出题池。
      </p>
      <div className="feynman-library-import">
        <input
          className="feynman-topic-input"
          type="text"
          value={pasteTitle}
          onChange={(event) => setPasteTitle(event.target.value)}
          placeholder="资料标题（可选）"
          maxLength={60}
        />
        <label className="journal-kind feynman-lib-file">
          导入 .md / .txt
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
      </div>
      <textarea
        className="feynman-explain-input"
        value={pasteText}
        onChange={(event) => setPasteText(event.target.value)}
        rows={4}
        placeholder="粘贴资料内容……支持 markdown，# 小标题会拆成独立知识点"
      />
      <button
        className="review-btn ghost review-btn-small"
        type="button"
        disabled={!pasteText.trim()}
        onClick={() => {
          onAddPaste(pasteTitle, pasteText)
          setPasteTitle('')
          setPasteText('')
        }}
      >
        存入资料库
      </button>
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
        <p className="empty-note">资料库还是空的。粘贴一段笔记，或导入一份 .md，出题池就会带上它。</p>
      )}
    </div>
  )
}
