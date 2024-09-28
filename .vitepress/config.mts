import { defineConfig } from 'vitepress'

const ogDescription =
    '低代码数据可视化开发平台, 开源、精美、便捷、规范、交互自然。'
const ogImage = '/logo-t-y.png'
const ogTitle = 'GoView'
const ogUrl = 'https://www.mtruning.club/'

export default defineConfig({
  title: 'AIGC创作系统',
  description: 'AIGC创作系统',
  lang: 'zh-CN',
  base: '/',  // 构建输出的目录
  outDir: './dist', // 添加额外的头部标签
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
    ['meta', { name: 'theme-color', content: '#3f8bdb' }],
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
    logo: '/logo.svg',

    // 编辑链接配置
    editLink: {
      text: '为此页提供修改建议',
      pattern: 'https://gitee.com/MTrun/go-view-doc'
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/dromara/go-view' }
    ],
    // Algolia 搜索配置
    algolia: {
      appId: '27GQF86TFH',
      apiKey: '5529275a1f0687fd78babb878f6c54a6',
      indexName: 'GoView',
      placeholder: '请输入关键词',
      searchParameters: '搜索'
    },
    // 导航栏配置
    nav: [
      { text: '首页', link: '/guide/start/', activeMatch: '/guide/start/' },
      { text: '指引', link: '/guide/start/', activeMatch: '/guide/start/' },
      { text: '更新日志', link: '/updateLog/', activeMatch: '/updateLog/' },
      { text: '权益 | 商业合作', link: '/rights/', activeMatch: '/rights/' },
      { text: '合作伙伴', link: '/cooperative/', activeMatch: '/cooperative/' },
      {
        text: '相关链接',
        items: [
          {
            text: 'Vue3',
            link: 'https://cn.vuejs.org/'
          },
          {
            text: 'NaiveUI',
            link: 'https://www.naiveui.com/zh-CN/dark'
          },
          {
            text: 'Pinia',
            link: 'https://pinia.vuejs.org/'
          },
          {
            text: 'Vite',
            link: 'https://cn.vitejs.dev/'
          },
          {
            text: 'TypeScript',
            link: 'https://www.typescriptlang.org/'
          },
          {
            text: 'ECharts',
            link: 'https://echarts.apache.org/zh/index.html'
          }
        ]
      },
      { text: '关于作者 | 赞助', link: '/author/', activeMatch: '/author/' },
      { text: '橙单', link: '/chengDan/', activeMatch: '/chengDan/' },
    ],
    // 定义侧边栏结构，用于文档或网站的导航
    sidebar: {
      '/guide/': [
        {
          text: '引导',
          // 引导部分下的子菜单项
          items: [
            {
              text: '开始',
              link: '/guide/start/index'
            },
            {
              text: '页面引导',
              link: '/guide/start/pageGuide'
            },
            {
              text: '设置介绍',
              link: '/guide/start/globalSetting'
            },
            {
              text: '常见问题',
              link: '/guide/start/more'
            }
          ]
        },
        {
          text: '设计',// 设计部分的标题设置
          items: [
            {
              text: '目录结构',
              link: '/guide/design/directory'
            },
            {
              text: '工作空间',
              link: '/guide/design/canvas'
            },
            {
              text: '预览功能',
              link: '/guide/design/preview'
            },
            {
              text: '单个图表',
              link: '/guide/design/charts'
            },
            {
              text: '历史记录',
              link: '/guide/design/history'
            }
          ]
        },
        {
          text: '开发',
          items: [
            {
              text: '新增 ECharts 等复杂图表组件',
              link: '/guide/develop/addEcharts'
            },
            {
              text: '新增简单自定义图表组件',
              link: '/guide/develop/addCharts'
            },
            {
              text: '新增联动控制组件',
              link: '/guide/develop/addInteractCharts'
            },
            {
              text: '修改图表数据处理',
              link: '/guide/develop/editChartsData'
            },
            {
              text: '修改图表默认颜色',
              link: '/guide/develop/editGlobalColor'
            },
            {
              text: '修改右键功能',
              link: '/guide/develop/editRight'
            },
            {
              text: '修改快捷键功能',
              link: '/guide/develop/editKeyboard'
            },
            {
              text: '修改全局主题与颜色',
              link: '/guide/develop/editGlobalColor'
            },
            {
              text: '修改 SCSS 亮/暗 主题',
              link: '/guide/develop/scssColor'
            },
            {
              text: '修改全局语言',
              link: '/guide/develop/editGlobalLang'
            }
          ]
        },
        {
          text: '其它',
          items: [
            {
              text: 'Vue 大屏模板',
              link: '/guide/screenTemplate/vueScreenTemplate'
            },
            {
              text: 'React 大屏模板',
              link: '/guide/screenTemplate/reactScreenTemplate'
            }
          ]
        }
      ]
    }
  }
})
