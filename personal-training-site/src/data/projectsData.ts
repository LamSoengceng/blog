// 项目作品集：每个项目一段诚实的自我介绍——做了什么、学到什么、什么状态。
export type ProjectStatus = '进行中' | '已上线' | '维护中'

export type Project = {
  id: string
  name: string
  tagline: string
  description: string
  stack: string[]
  status: ProjectStatus
  year: string
  repoUrl?: string
  liveUrl?: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    id: 'personal-site',
    name: '个人站点 personal-training-site',
    tagline: '一个自己给自己开发的站：内容、数据管道和界面都自己定义。',
    description:
      'Vite + React + TypeScript 的静态站点。训练数据、算法复盘、日记和项目展示共用一套「本地数据管道 → 生成静态数据 → 页面渲染」的架构；前端不持有任何密钥。',
    stack: ['React 18', 'TypeScript', 'Vite', 'Tailwind', 'React Router'],
    status: '已上线',
    year: '2026',
    repoUrl: 'https://gitcode.com/LamSoengceng/xunji',
    highlights: [
      'LeetCode Hot100 数据管道：从本地 Python 题解注释自动提取思路、踩坑和填空题',
      '间隔复习系统：Leitner 记忆箱 + 到期调度，进度存浏览器本地',
      'BYOK AI 助手：用户自己的 Key 调用大模型，设置存 localStorage',
    ],
  },
  {
    id: 'leetcode-hot100',
    name: 'LeetCode Hot100 全通计划',
    tagline: '100/100 全通，题解按 16 个专题归类，每道题带踩坑注释。',
    description:
      'Python 刷题仓库：Hot100 全部完成并拓展 16 道加练题。每道题的注释里沉淀解题思路和「易错点/误区」，站点算法板块的数据管道直接解析这些注释生成复盘页面。',
    stack: ['Python', 'LeetCode', '数据结构与算法'],
    status: '维护中',
    year: '2026',
    highlights: [
      '116 道题的本地题解与注释即数据源，改注释 = 改网站内容',
      '50 道题标记了需二刷，复习系统按遗忘曲线自动调度',
      '配套「面试高频进阶题单」作为下一阶段题库',
    ],
  },
  {
    id: 'xunji-pipeline',
    name: '训记数据同步管道',
    tagline: '训练 App 的数据安全地变成公开页面：API → 本地脚本 → 脱敏 JSON。',
    description:
      '规划中的训练数据自动化管道：训记 Open API 拉取训练记录，本地脚本聚合成脱敏 JSON，站点展示吨位、频率和肌群覆盖。API key 只存在于本机环境变量，前端零密钥。',
    stack: ['Node.js 脚本', '训记 Open API', '静态 JSON'],
    status: '进行中',
    year: '2026',
    highlights: [
      '字段 schema 已在站点的训练日志模块中预演落地',
      '安全设计：密钥永不进前端，公开层只保留聚合数据',
    ],
  },
  {
    id: 'agent-workflows',
    name: 'Agent 工作流与技能',
    tagline: '把重复的开发流程沉淀成 Agent 技能：设计文档、计划、提交一条龙。',
    description:
      '日常开发中沉淀的 Agent 协作模式：每个功能先写设计 spec 和实施 plan，再让 Agent 按计划实现；配合 Mimosa 安全扫描与 GitCode 远程仓库形成完整闭环。本站多个板块都是这条工作流的产物。',
    stack: ['Agent 工作流', 'Spec-driven', 'Git'],
    status: '进行中',
    year: '2026',
    highlights: [
      '算法可视化和黑绿配色两个主题都有完整的 spec + plan 文档',
      '站点功能由 Agent 实现并保持每个 commit 可独立构建',
    ],
  },
]

export const projectStatusClass: Record<ProjectStatus, string> = {
  已上线: 'done',
  进行中: 'active',
  维护中: 'maintain',
}
