import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Rsh 的笔记',
  description: '记录思考、AI 学习与技术实践。',
  base: '/RshBook/',
  themeConfig: {
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
            { text: '大模型与提示词', link: '/ai/llm-prompting' },
            { text: 'AI 工具', link: '/ai/tools' },
            { text: 'AI 编程', link: '/ai/coding' },
            { text: '工作流与自动化', link: '/ai/workflows' },
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
            { text: '工具与效率', link: '/tech/tools-productivity' },
            { text: '工程实践', link: '/tech/engineering' }
          ]
        }
      ]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/rsh-airborder/RshBook' }]
  }
})
