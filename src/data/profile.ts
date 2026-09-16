export type Highlight = {
  title: string
  detail: string
}

export type ProductEntry = {
  name: string
  summary: string
  stack: string[]
  highlights: Highlight[]
}

export type FeaturedProject = {
  name: string
  tagline: string
  kind: string
  stack: string[]
  highlights: Highlight[]
}

export type SkillGroup = {
  title: string
  caption: string
  keywords: string[]
  detail: string
}

export const navItems = [
  { id: 'about', label: '关于' },
  { id: 'skills', label: '技能' },
  { id: 'experience', label: '实习' },
  { id: 'projects', label: '项目' },
  { id: 'notes', label: '笔记' },
  { id: 'contact', label: '联系' },
] as const

export const sectionIds = navItems.map((item) => item.id)

export const profile = {
  name: '殷嘉琦',
  initial: '殷',
  /** 想显示照片时：把照片放到 public/avatar.jpg，然后把这里改成 'avatar.jpg' */
  avatar: '',
  latinName: 'YIN JIAQI',
  title: '前端开发工程师',
  subtitle: '重庆邮电大学 · 软件工程 · 2027 届',
  roles: ['前端开发工程师', 'React / Vue 双栈', '2027 届应届生'],
  intro:
    '软件工程本科生，专注前端开发。6 个月一线实习里负责过两款线上产品，从离线优先同步架构、跨端一致性，到工程化、通信安全与支付链路，都实际落地并跑在真实用户手里。',
  introSecond:
    '习惯把复杂需求拆成清晰的模块，也喜欢用 AI 工具把重复劳动压缩掉，把时间留给真正需要判断的地方。',
  tags: ['React', 'React Native', 'Vue 3', 'TypeScript', 'Vite', 'Node.js'],
  facts: [
    { label: '届别', value: '2027 届应届' },
    { label: '方向', value: '前端开发' },
    { label: '英语', value: 'CET-4' },
    { label: '状态', value: '求职中' },
  ],
  education: {
    school: '重庆邮电大学',
    major: '软件工程',
    degree: '本科',
    period: '2023.09 — 2027.06',
  },
  contact: {
    email: '2071213068@qq.com',
    phone: '18530163403',
    github: 'https://github.com/1add7',
    githubLabel: 'github.com/1add7',
  },
  stats: [
    { value: '6', unit: '个月', label: '前端实习' },
    { value: '2', unit: '款', label: '线上产品' },
    { value: '1', unit: '个', label: '独立 AI 项目' },
    { value: '4', unit: '组', label: '工程化实践' },
  ],
}

export const skillGroups: SkillGroup[] = [
  {
    title: '语言与框架',
    caption: '熟练掌握',
    keywords: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue', 'React', 'Pinia', 'Zustand', 'Vite', 'Webpack'],
    detail: '以 TypeScript 为主力语言，Vue 与 React 双栈开发，熟悉 Vite / Webpack 构建与状态管理方案选型。',
  },
  {
    title: '网络与工程',
    caption: '熟悉',
    keywords: ['HTTP', 'Git', 'npm', 'yarn', 'ESLint', 'Prettier'],
    detail: '理解 HTTP 协议与缓存、跨域、鉴权等常见问题，使用 Git 做多人协作与分支管理，用规范工具约束代码风格。',
  },
  {
    title: '后端与 AI',
    caption: '了解 / 熟练使用',
    keywords: ['Node.js', 'Next.js', 'MySQL', 'Cursor', 'Copilot', 'OpenSpec'],
    detail: '能写 Node.js 接口与 MySQL 基础建模；熟练使用 AI 编程助手，并用 OpenSpec 完成方案规划与落地开发。',
  },
  {
    title: '组件与规范',
    caption: '熟悉',
    keywords: ['ElementUI', 'Ant Design', 'React Native Web', 'Expo', '富文本 / 图标体系'],
    detail: '基于主流组件库做二次封装与主题定制，输出可复用组件，保持接口设计一致。',
  },
]

export const experience = {
  company: '三河星宸助手科技有限公司',
  role: '前端开发实习生',
  period: '2026.03 — 2026.09',
  duration: '6 个月',
  summary: '负责公司「指法世界」「英语世界」两款产品的前端开发，覆盖 Web 与 App 双端。',
  products: [
    {
      name: '英语世界',
      summary: '面向英语学习场景的跨端应用，重点解决弱网离线可用与多端一致性。',
      stack: ['React', 'React Native', 'Node.js', 'Expo', 'Zustand'],
      highlights: [
        {
          title: '离线优先同步架构',
          detail:
            '设计「本地先行 + 延迟批量同步」方案：学习操作写入 Zustand 后立即持久化 AsyncStorage，经脏标记 + 每日节流在登录 / 启动 / 跨天时机批量上云；大体积数据采用「COS 对象存储 + 云函数更新指针」两步上传，实现同步防重入与撞车等待重试——弱网断网数据零丢失，请求数从 O(操作数) 降至 O(1) / 天。',
        },
        {
          title: '跨端一致性',
          detail:
            '封装存储适配层（AsyncStorage / SecureStore / IndexedDB）、Platform.OS 分流与 .web.jsx 双实现隔离平台差异；导航层「状态与 UI 分离」——Tab Navigator 持有路由状态支撑深链，UI 按端自适应。',
        },
        {
          title: 'Web 工程化',
          detail:
            '重页面 React.lazy + Suspense 代码分割；linking 实现 URL 与导航栈双向映射；劫持 history.pushState / replaceState 保证营销归因参数在 SPA 全程不丢失。',
        },
        {
          title: '通信与安全',
          detail:
            'Axios 拦截器统一 token 注入 / 响应解包 / 错误文案映射，401 时 refresh token + 请求队列防并发重复刷新；登录参数 AES 加密传输；App 端隐私协议合规前置（未同意不初始化埋点与导航）。',
        },
        {
          title: '支付与稳定性',
          detail:
            '微信 Native 扫码支付全流程（下单 → 二维码 → 状态轮询 → 结果回跳）；ErrorBoundary 根部兜底、路由切换统一清理残留弹层、版本热更新检测。',
        },
      ],
    },
    {
      name: '指法世界',
      summary: '打字训练平台，主导从 Vue 到 React 的技术栈迁移与上线部署。',
      stack: ['React', 'React Native Web', 'Expo', 'Zustand', 'React Router'],
      highlights: [
        {
          title: '技术栈迁移',
          detail:
            '主导 Vue 版打字训练平台的 React 重写与页面迁移，基于 Expo + React Native Web 构建，expo export 静态导出后部署至 Nginx / OSS / CDN，实现平滑承接上线。',
        },
        {
          title: 'Hash 路由系统',
          detail:
            '不依赖路由库，实现路由表分发、异步路由守卫（公开页白名单 / 双 token 过期校验）、replaceState 替换导航与 history.back 失效兜底（延迟检测 + fallback 跳转）、营销参数随路由 sticky 传递。',
        },
        {
          title: '函数式权限守卫',
          detail:
            'VIP 访问控制采用「付费开关 → 会员有效期」双接口校验链，配合 1s TTL 结果缓存与 in-flight 请求去重，避免路由频繁切换时的重复鉴权请求与竞态。',
        },
        {
          title: '链路加密',
          detail: '业务接口请求 / 响应体统一 AES 密文传输，在请求封装层实现透明加解密与业务码归一化处理。',
        },
      ],
    },
  ] satisfies ProductEntry[],
}

export const featuredProject: FeaturedProject = {
  name: 'AI 知识树',
  tagline: 'Agent + RAG 驱动的对话式知识管理应用',
  kind: '个人独立项目',
  stack: ['Vue 3', 'TypeScript', 'Vite', 'Pinia', 'Node.js', 'Express', 'MongoDB', '千问 Function Calling', 'text-embedding-v3'],
  highlights: [
    {
      title: '实现 ReAct Agent 主循环',
      detail:
        '基于标准 tools / tool_calls 协议驱动大模型多轮推理（上限 5 轮），把工具执行结果回填对话上下文直至模型收敛；达到轮次上限时收回工具强制产出终态，规避死循环；流式场景下按 index 聚合分片下发的 tool_calls 增量。',
    },
    {
      title: '设计分层工具集',
      detail:
        '抽象 3 个递进工具（知识树语义检索 → 节点祖先链路获取 → 联网搜索兜底），工具异常统一转为结构化观察结果交回模型自主改道，而非中断整个流程。',
    },
    {
      title: '落地 RAG 检索链路',
      detail:
        '接入 text-embedding-v3 向量化，用余弦相似度 + 阈值过滤召回历史笔记；无向量能力时自动降级为对中文友好的 bigram 关键词检索。检索结果既可被 Agent 主动调用，也可在模型不支持工具时预检索注入上下文；回答输出编号引用，可点击回溯到源节点。',
    },
    {
      title: '让 Agent 过程可观测',
      detail:
        '自定义 SSE 事件协议（轮次 / token / 工具调用 / 观察结果 / 引用），前端按轮次类型把 token 分流为「思考过程」与「最终回答」，渲染成 思考 → 调用工具 → 观察结果 时间线；配合心跳保活解决长推理被反向代理掐断的问题。',
    },
  ],
}

/** 博客 / 笔记区的选题清单，写好正文后替换成文章即可。 */
export const notes = [
  {
    title: 'React Native Web 跨端踩坑记录',
    topics: ['存储适配层', 'Platform 分流', '.web.jsx 双实现'],
    status: '整理中',
  },
  {
    title: '手写一套不依赖路由库的守卫',
    topics: ['路由表分发', '异步守卫', 'history.back 兜底'],
    status: '整理中',
  },
  {
    title: '从 0 搭一个 ReAct Agent 主循环',
    topics: ['tools / tool_calls', 'SSE 事件协议', 'RAG 降级策略'],
    status: '计划中',
  },
]
