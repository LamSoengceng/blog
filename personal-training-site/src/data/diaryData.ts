// 训练日记：按时间倒序的单次训练记录。
// 字段设计对齐未来「训记 API -> 本地同步脚本 -> JSON」管道：
// 日期、肌群标签、时长、吨位、动作顶级组、RPE、一句话收获、复盘笔记。
export type DiaryMovement = {
  name: string
  topSet: string
}

export type DiaryEntry = {
  id: string
  date: string
  weekday: string
  title: string
  tags: string[]
  durationMin: number
  tonnage: number
  rpe: number
  movements: DiaryMovement[]
  highlight: string
  notes: string
}

export const diaryEntries: DiaryEntry[] = [
  {
    id: '2026-09-05',
    date: '2026-09-05',
    weekday: '周六',
    title: '腿日 · 深蹲渐进超负荷',
    tags: ['腿', '臀', '核心'],
    durationMin: 78,
    tonnage: 11450,
    rpe: 8.5,
    movements: [
      { name: '深蹲', topSet: '127.5kg x 5 @ RPE8' },
      { name: '停顿深蹲', topSet: '105kg x 3 x 2' },
      { name: '保加利亚分腿蹲', topSet: '2x22.5kg x 10' },
      { name: '腿弯举', topSet: '55kg x 12' },
    ],
    highlight: '深蹲 127.5x5 完成全部正式组，距离 6 月 PR 的 125x5 又进了一步。',
    notes: '最后一次组间歇压缩到 3 分钟，底部位置稳定；下周试 130kg，注意出杠节奏别赶。',
  },
  {
    id: '2026-09-03',
    date: '2026-09-03',
    weekday: '周四',
    title: '推日 · 卧推稳定性',
    tags: ['胸', '肩', '三头'],
    durationMin: 65,
    tonnage: 8300,
    rpe: 8,
    movements: [
      { name: '卧推', topSet: '90kg x 5 @ RPE8' },
      { name: '上斜哑铃卧推', topSet: '2x30kg x 10' },
      { name: '绳索下压', topSet: '40kg x 15' },
    ],
    highlight: '卧推 90x5 全程肩胛收紧，起桥没有滑动。',
    notes: '左侧肩前束有一点紧，推举类下周减一组观察；三头泵感很好。',
  },
  {
    id: '2026-08-31',
    date: '2026-08-31',
    weekday: '周一',
    title: '拉日 · 硬拉节奏重建',
    tags: ['背', '腿后链', '握力'],
    durationMin: 72,
    tonnage: 9800,
    rpe: 8.5,
    movements: [
      { name: '硬拉', topSet: '140kg x 3 @ RPE8.5' },
      { name: '高位下拉', topSet: '75kg x 10' },
      { name: '杠铃划船', topSet: '80kg x 8' },
    ],
    highlight: '硬拉回到 140kg，离 6 月 PR 120x1 的估算 1RM 已明显超越。',
    notes: '离杠稍微近一点以后腰位置稳定很多；锁定阶段不要后仰过度。',
  },
  {
    id: '2026-08-28',
    date: '2026-08-28',
    weekday: '周五',
    title: '臀冲专项 · 渐进到 122.5',
    tags: ['臀', '腿后链'],
    durationMin: 58,
    tonnage: 12100,
    rpe: 9,
    movements: [
      { name: '杠马机臀冲', topSet: '122.5kg x 6 @ RPE9' },
      { name: '髋外展机', topSet: '65kg x 15' },
      { name: '绳索后踢腿', topSet: '25kg x 12 x 2' },
    ],
    highlight: '臀冲 122.5x6，冲着 6 月 120x8 的 PR 状态又回来了。',
    notes: 'RPE9 的最后一组顶髋有变形，暂停 2 秒顶端收缩质量更高；次数让位于动作质量。',
  },
  {
    id: '2026-08-26',
    date: '2026-08-26',
    weekday: '周三',
    title: '推日 · 推举薄弱点攻坚',
    tags: ['肩', '三头', '核心'],
    durationMin: 62,
    tonnage: 6400,
    rpe: 8,
    movements: [
      { name: '实力推举', topSet: '55kg x 5 @ RPE8' },
      { name: '坐姿哑铃推举', topSet: '2x24kg x 10' },
      { name: '侧平举', topSet: '10kg x 15 x 3' },
    ],
    highlight: '推举 55x5 站姿完成，核心抗伸展是短板这一课学到了。',
    notes: '推举卡瓦总是出现在额状面稳定，加了一组 farmer walk 补强。',
  },
  {
    id: '2026-08-24',
    date: '2026-08-24',
    weekday: '周一',
    title: '腿日 · 容量周',
    tags: ['腿', '臀'],
    durationMin: 70,
    tonnage: 10200,
    rpe: 8,
    movements: [
      { name: '深蹲', topSet: '122.5kg x 5 x 2' },
      { name: '腿举', topSet: '220kg x 12' },
      { name: '坐姿腿屈伸', topSet: '70kg x 15' },
    ],
    highlight: '双正式组 122.5x5x2，容量周收尾疲劳可控。',
    notes: '腿举 depth 比上次更深；左膝内侧轻微不适，冰敷后缓解，观察两天。',
  },
  {
    id: '2026-08-21',
    date: '2026-08-21',
    weekday: '周五',
    title: '拉日 · 背宽优先',
    tags: ['背', '二头'],
    durationMin: 66,
    tonnage: 7600,
    rpe: 7.5,
    movements: [
      { name: '负重引体', topSet: '+10kg x 5 x 3' },
      { name: '高位下拉（宽距）', topSet: '80kg x 10' },
      { name: '哑铃单臂划船', topSet: '36kg x 10' },
    ],
    highlight: '负重引体 +10kg 三组全程下巴过杠。',
    notes: '握力是引体数量的第一瓶颈，硬拉日之后安排握力小循环。',
  },
  {
    id: '2026-08-19',
    date: '2026-08-19',
    weekday: '周三',
    title: '推日 · 状态恢复周',
    tags: ['胸', '肩'],
    durationMin: 55,
    tonnage: 6800,
    rpe: 7,
    movements: [
      { name: '卧推', topSet: '87.5kg x 5 @ RPE7' },
      { name: '上斜哑铃卧推', topSet: '2x28kg x 12' },
      { name: '绳索面拉', topSet: '30kg x 15 x 3' },
    ],
    highlight: '减量周按计划执行，卧推 87.5 感觉非常轻。',
    notes: '睡眠回到 7.5 小时后力量明显回血；减量周不碰 RPE9 以上。',
  },
]

export const diaryStats = {
  sessions: diaryEntries.length,
  totalTonnage: diaryEntries.reduce((sum, entry) => sum + entry.tonnage, 0),
  avgDuration: Math.round(
    diaryEntries.reduce((sum, entry) => sum + entry.durationMin, 0) / diaryEntries.length,
  ),
  avgRpe: Number(
    (diaryEntries.reduce((sum, entry) => sum + entry.rpe, 0) / diaryEntries.length).toFixed(1),
  ),
}
