import { useRef } from 'react'
import { X } from 'lucide-react'
import { useDialogFocus } from '../hooks/useDialogFocus'
import { WatchHub } from './WatchHub'

// 赛程中心浮层：首页保持单屏，点击「赛程中心」按钮时懒加载本模块并以弹层展开完整 WatchHub。
export function WatchHubModal({ onClose }: { onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null)
  useDialogFocus(true, dialogRef, onClose)

  return (
    <div className="settings-overlay" onClick={onClose} role="presentation">
      <div
        className="watch-dialog"
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label="赛程中心"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="watch-dialog-close workbench-icon-button"
          type="button"
          aria-label="关闭赛程中心"
          onClick={onClose}
        >
          <X size={20} />
        </button>
        <WatchHub />
      </div>
    </div>
  )
}
