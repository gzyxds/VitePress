import { defineConfig } from 'vitepress'

// 定义一些元数据，用于 Open Graph 和其他社交媒体卡片
const ogDescription = '低代码数据可视化开发平台, 开源、精美、便捷、规范、交互自然。'
const ogImage = '/logo-t-y.png'
const ogTitle = 'GoView'
const ogUrl = 'https://www.connew.cn/'

// 使用 defineConfig 定义 VitePress 配置
export default defineConfig({
  // 网站标题
  title: 'AIGC创作系统',
  // 网站描述
  description: '低代码数据可视化开发平台',
  // 网站语言
  lang: 'zh-CN',
  // 网站的基础路径
  base: '/',
  // 构建输出的目录
  outDir: './dist',
  // 添加额外的头部标签
  head: [
    // 设置网站图标
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    // Open Graph 元数据
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }],
    // Twitter 卡片
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: 'GoView' }],
    // 主题颜色
    ['meta', { name: 'theme-color', content: '#3f8bdb' }],
    // 用于跟踪的脚本，当前未指定源
    [
      'script',
      {
        src: '',
        'data-site': '',
        'data-spa': '',
        defer: ''
      }
    ]
  ],
  // 主题配置
  themeConfig: {
    // 主题 logo
    logo: '/logo.svg',
    // 编辑链接配置
    editLink: {
      text: '为此页提供修改建议',
      pattern: 'https://comnew.cn'
    },
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://comnew.cn' }
    ],
    // Algolia 搜索配置
    algolia: {
      appId: '27GQF86TFH',
      apiKey: '5529275a1f0687fd78babb878f6c54a6',
      indexName: 'aigc',
      placeholder: '请输入关键词',
      searchParameters: '搜索'
    },
    // 导航栏配置
    nav: [
      // 导航项，每个对象代表一个导航链接
      { text: '🤖首页', link: '/', activeMatch: '/' },
      // 更多导航项...
      // 相关链接
      {
        text: '相关链接',
        items: [
          // 相关链接的子菜单
          { text: 'Vue3', link: 'https://cn.vuejs.org/' },
          // 更多相关链接...
        ]
      },
      // 更多导航项...
    ],
    // 侧边栏配置
    sidebar: {
      '/guide/': [
        // 侧边栏分组
        {
          text: '引导',
          items: [
            // 分组下的菜单项
            { text: '开始', link: '/guide/start/index' },
            // 更多菜单项...
          ]
        },
        // 更多侧边栏分组...
      ]
    }
  }
})
