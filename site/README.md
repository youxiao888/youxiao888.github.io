# Personal Intellectual Atlas · 个人知识与思想图谱

> 独立开发分支里的新站源码。当前正式网站 **未被替换**。

## 设计目标
- **领域（domain）**：回答“讨论什么”，可横跨数学、自然科学、人文社科、艺术与投资。
- **形式（kind）**：回答“写成什么”，如证明、研究笔记、开放问题、项目与实验。
- **主张性质（claim）**：形式 / 经验 / 解释 / 规范 / 个人 / 混合。
- **问题类型（question）**：可判定 / 开放 / 复合，不等同于绝对正确与纯粹主观。
- **证据状态（evidence）**：已确立、获支持、争议中、暂定或不适用。这是带条件的编辑判断，不是机器盖章。

三种元数据相互正交，均存放在每篇文章的 frontmatter，所有页面统一引用相同分类体系。

## 运行

Node.js 20.19+ / 22.12+（建议 Node 22）：

```bash
cd site
npm install
npm run check
npm run dev
npm run build
npm run preview
```

部署前检查：页面生成、搜索功能（仅构建后）、公式排版、窄屏导航、键盘焦点、无效链接。

## 主要目录

```
site/
  src/data/ontology.ts           # 领域、内容形式和认识论标签统一定义
  src/content.config.ts          # Zod 内容结构校验
  src/content/entries/*.md       # 文章、观点与项目（示例均标 sample:true）
  src/layouts/Base.astro         # 全站统一布局
  src/components/EntryCard.astro # 统一条目卡片
  src/pages/                   # 页面路由
  src/styles/global.css          # 全站设计 tokens 与响应式样式
  public/                       # 静态资源
```

## 添加新的学科
在 `src/data/ontology.ts` 的 `DOMAINS` 和 `DOMAIN_IDS` 同步添加对应 id；避免在各个页面硬编码分类。将来可进一步改为一份规范化 JSON 自动生成类型。

## 添加文章
在 `src/content/entries/` 新建 Markdown 或 MDX 文件，复制现有文件的 frontmatter，设置领域、形式、主张性质、问题类型、证据状态和来源。首次发布实际原创内容时移除 `sample:true`，并核对事实与引文。公开页面不应包含私人学习日记、未授权材料、密钥或仅供自己阅读的敏感信息。草稿用 `draft:true`。

## 与旧站的关系及迁移原则
当前 `main` 分支保留 Hexo/Butterfly **生成后的静态站文件**。该输出不能等同于完整 Hexo 源码。本项目先放在 `site/` 中，不会影响现有线上网页。迁移原文时请先找回原始 Markdown 和图片，不可根据标题杜撰正文。旧 URL 应维持或配置重定向；覆盖前审查图片、公式和版权。

## 搜索
`npm run build` 在 Astro 构建完成后执行 Pagefind，生成浏览器端静态搜索索引。开发模式可能显示“索引未生成”。

## 未来部署建议
验证新站后，在合并部署改动前新建可回滚备份。可以在独立仓库或者通过根目录 GitHub Actions 指向 `site/` 构建，发布 `site/dist/` 到 GitHub Pages。**本分支不会自动覆盖正式站点。**

## 待办 / 质量门槛
- [ ] GitHub Actions CI 首次构建通过（构建时需可用 npm registry）
- [ ] 确认实际主站文章源文件，并逐篇迁移、复核
- [ ] 替换全部样例内容，补充个人介绍与真实作品
- [ ] 检查 KaTeX 公式样式 CDN 的离线可用性；正式版可改为本地打包
- [ ] 检查 WCAG 对比度、键盘访问、移动端显示
- [ ] 只有验收后才新建部署工作流并改变线上站
