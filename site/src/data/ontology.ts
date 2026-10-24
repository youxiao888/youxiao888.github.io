/**
 * Single source of truth for site taxonomy.
 * Domains answer "what"; kinds answer "what form"; epistemic metadata
 * answers "what kind of claim/question", never a binary true/false badge.
 */
export const DOMAINS = [
  { id: 'mathematics', name: '数学', en: 'Mathematics', group: 'formal', children: ['分析', '代数', '几何与拓扑', '概率与统计', '优化与控制'] },
  { id: 'physics', name: '物理学', en: 'Physics', group: 'natural', children: ['经典力学', '电磁学', '热力学', '量子物理'] },
  { id: 'chemistry', name: '化学', en: 'Chemistry', group: 'natural', children: ['物理化学', '有机化学', '材料'] },
  { id: 'biology', name: '生命科学', en: 'Life Sciences', group: 'natural', children: ['生物学', '进化', '神经科学'] },
  { id: 'computing', name: '计算与人工智能', en: 'Computing & AI', group: 'technical', children: ['算法', '编程', '机器学习', '软件工程'] },
  { id: 'engineering', name: '工程与控制', en: 'Engineering & Control', group: 'technical', children: ['自动控制', '机器人', '电子与嵌入式', '无人机'] },
  { id: 'philosophy', name: '哲学', en: 'Philosophy', group: 'human', children: ['认识论', '形而上学', '伦理学', '逻辑学'] },
  { id: 'psychology', name: '心理学', en: 'Psychology', group: 'human', children: ['认知', '学习', '行为', '心理测量'] },
  { id: 'economics', name: '经济与投资', en: 'Economics & Investing', group: 'social', children: ['宏观经济', '微观经济', '金融市场', '投资与风险'] },
  { id: 'society', name: '政治与社会', en: 'Politics & Society', group: 'social', children: ['政治哲学', '社会学', '公共政策', '制度'] },
  { id: 'history', name: '历史', en: 'History', group: 'human', children: ['世界史', '思想史', '科学史'] },
  { id: 'literature', name: '语言与文学', en: 'Language & Literature', group: 'human', children: ['语言学', '英语学习', '文学与阅读'] },
  { id: 'arts', name: '艺术与音乐', en: 'Arts & Music', group: 'human', children: ['古典音乐', '乐理与作曲', '美学', '视觉艺术'] },
  { id: 'interdisciplinary', name: '跨学科', en: 'Interdisciplinary', group: 'bridge', children: ['复杂系统', '科学哲学', '方法论', '交叉研究'] }
] as const;

export const DOMAIN_IDS = [
  'mathematics', 'physics', 'chemistry', 'biology', 'computing',
  'engineering', 'philosophy', 'psychology', 'economics', 'society',
  'history', 'literature', 'arts', 'interdisciplinary'
] as const;

export const GROUPS = [
  { id: 'formal', name: '形式科学' },
  { id: 'natural', name: '自然科学' },
  { id: 'technical', name: '计算与工程' },
  { id: 'social', name: '社会、经济与制度' },
  { id: 'human', name: '人文、思想与艺术' },
  { id: 'bridge', name: '跨学科探索' }
] as const;

export const CONTENT_KINDS = {
  concept: '概念与原理', proof: '证明与推导', research: '研究笔记',
  argument: '论证与观点', inquiry: '开放问题', reading: '阅读与文献',
  experiment: '实验与交互', project: '工程项目', reflection: '个人反思'
} as const;

export const CLAIM_TYPES = {
  formal: { label: '形式命题', description: '在明确公理、定义与前提下通过演绎推理判断。' },
  empirical: { label: '经验命题', description: '通过观察、实验与数据支持或反驳，结论可能修订。' },
  interpretive: { label: '解释性判断', description: '比较解释框架、文本语境与解释力。' },
  normative: { label: '规范与价值判断', description: '讨论应当如何，明示价值前提与权衡。' },
  personal: { label: '个人经验与偏好', description: '主体经验记录，不冒充普遍事实。' },
  mixed: { label: '混合型论题', description: '需分离事实前提、因果推断和价值立场。' }
} as const;

export const QUESTION_MODES = {
  decidable: { label: '可判定问题', description: '限定前提后可通过形式证明或经验检验给出可评估的答案。' },
  open: { label: '开放性问题', description: '允许多个合理立场或尚无确定答案，需论证而非二选一。' },
  mixed: { label: '复合问题', description: '可判定的子问题与开放性讨论并存。' }
} as const;

export const EVIDENCE_STATES = {
  established: '在指定前提下已确立',
  supported: '证据支持（可修订）',
  contested: '存在实质争议',
  tentative: '探索性 / 暂定',
  notApplicable: '不适用单一事实真值'
} as const;

export const domainName = (id: string) => DOMAINS.find(d => d.id === id)?.name ?? id;
