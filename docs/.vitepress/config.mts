import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Rsh 的笔记',
  description: '记录思考、AI 学习与技术实践。',
  base: '/RshBook/',
  lastUpdated: true,
  themeConfig: {
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'medium'
      }
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '随笔', link: '/essays/' },
      { text: 'AI 笔记', link: '/ai/' },
      { text: '技术笔记', link: '/tech/' },
      { text: '关于', link: '/about' }
    ],
    sidebar: {
      '/ai/': [
        {
          text: 'AI 笔记',
          items: [
            { text: '概览', link: '/ai/' },
            { text: 'AI 基础', link: '/ai/fundamentals' },
            {
              text: '大模型与提示词',
              link: '/ai/llm-prompting',
              collapsed: false,
              items: [{ text: '提示词工作说明', link: '/ai/prompt-context' }]
            },
            {
              text: 'AI 工具',
              link: '/ai/tools',
              collapsed: false,
              items: [{ text: '按任务选择工具', link: '/ai/ai-tools-workflow' }]
            },
            {
              text: 'AI 编程',
              link: '/ai/coding',
              collapsed: false,
              items: [{ text: '给 AI 编程助手补上下文', link: '/ai/ai-coding-context' }]
            },
            {
              text: '工作流与自动化',
              link: '/ai/workflows',
              collapsed: false,
              items: [{ text: '个人自动化工作流', link: '/ai/personal-automation' }]
            },
            { text: '论文与资源', link: '/ai/papers-resources' }
          ]
        }
      ],
      '/tech/': [
        {
          text: '技术笔记',
          items: [
            { text: '概览', link: '/tech/' },
            { text: '编程语言', link: '/tech/languages' },
            { text: '前端开发', link: '/tech/frontend' },
            { text: '后端开发', link: '/tech/backend' },
            {
              text: '工具与效率',
              link: '/tech/tools-productivity',
              collapsed: false,
              items: [{ text: '让开发记录找得到', link: '/tech/developer-notes-system' }]
            },
            {
              text: '工程实践',
              link: '/tech/engineering',
              collapsed: false,
              items: [{ text: '独立维护项目的习惯', link: '/tech/solo-project-habits' }]
            }
          ]
        }
      ]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/rsh-airborder/RshBook' }]
  }
})
