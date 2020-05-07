module.exports = {
  title: '佳航教育',
  description: '你的问题主要在于读书不多而想得太多。——杨绛',
  head: [
      ['link', {
          rel: 'icon',
          href: `/hao.ico`
      }]
  ],
  themeConfig: {
    logo: '/assets/img/logo.png',
  },
  dest: './docs/.vuepress/dist',
  ga: '',
  evergreen: true,
  themeConfig: {
    sidebarDepth: 2, 
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      {
        text: '为什么',
        items: [
          { text: '市场行情大背景', link: '/why/back' },
          { text: '那为什么选择我们', link: '/why/choose' },
          { text: '师资力量怎么样', link: '/why/teacher' },
          { text: '我们只做前端', link: '/why/onlyone' },
          { text: '就业市场', link: '/why/employment' }
        ]
      },
      {
        text: '课程指南',
        items: [
          { text: '入门三板斧', link: '/course/hcj/' },
          { text: '流行框架', link: '/course/frame/' },
          { text: '计算机通识', link: '/course/basis/' },
          { text: '辅助工具', link: '/course/tool/' },
          { text: '面试指南', link: '/course/interview/' },
          { text: '源码解析', link: '/course/sourceCode/' },
          { text: '知识拓展', link: '/course/expand/' },
        ]
      },
      {
        text: '其他知识',
        items: [
          { text: '理财学习', link: '/others/financial/' }
        ]
      },
      { text: 'Github', link: 'https://github.com/mrhaoxiaojun/' },
    ],
    sidebar: {
      '/why/': [
        {
          title: '市场行情大背景',   // 必要的
          path: 'back',      // 可选的, 应该是一个绝对路径
          collapsable: false, // 可选的, 默认值是 true,
        },
        {
          title: '那为什么选择我们',
          path: 'choose',
        },
        {
          title: '师资力量怎么样',
          path: 'teacher',
        },
        {
          title: '我们只做前端',
          path: 'onlyone',
        },
        {
          title: '就业市场',
          path: 'employment',
        },
      ],
      '/course/basis/': [
        {
          title: '计算机通识',  
          collapsable: false, 
          children: [
           {
            title: '网络知识', 
            collapsable: false, 
            path: 'network',
           },
           {
            title: '数据结构', 
            collapsable: false, 
            path: 'data',
           },
           {
            title: '算法篇', 
            collapsable: false, 
            path: 'alg',
           },
           {
            title: 'git篇', 
            collapsable: false, 
            path: 'git',
           }
          ]
        }
      ],
      '/course/hcj/':[
        {
          title: '入门三板斧',  
          collapsable: false, 
          children: [
           {
            title: 'HtmlCss', 
            collapsable: false, 
            path: 'htmlcss',
           },
           {
            title: 'es3', 
            collapsable: false, 
            path: 'es3',
           },
           {
            title: 'es6', 
            collapsable: false, 
            path: 'es6',
           }
          ]
        }
      ],
      '/course/frame/':[
        {
          title: '流行框架',  
          collapsable: false, 
          children: [
            {
             title: 'vue', 
             collapsable: false, 
             path: 'vue',
            },
            {
             title: 'reat', 
             collapsable: false, 
             path: 'react',
            }
          ]
        }
      ],
      '/course/tool/':[
        {
          title: '辅助工具',  
          collapsable: false, 
          children: [
            {
              title: '前端编辑器（vscode）', 
              collapsable: false, 
              path: 'vscode',
            },
            {
              title: '私服(Nexus Repository Manager)', 
              collapsable: false, 
              path: 'nexus',
            },
            {
              title: 'git图形化界面工具(SourceTree)', 
              collapsable: false, 
              path: 'sourcetree',
            },
            {
              title: '切图工具(PhoneShop)', 
              collapsable: false, 
              path: 'phoneshop',
            },
            {
              title: 'mac 主流设计图工具(Sketch)', 
              collapsable: false, 
              path: 'sketch',
            }
          ]
        }
      ],
      '/course/interview/':[
        {
          title: '面试指南',  
          collapsable: false, 
          children: [
            {
              title: '基础面试', 
              collapsable: false, 
              path: 'base',
            },
            {
              title: '进阶面试', 
              collapsable: false, 
              path: 'advance',
            }
          ]
        }
      ],
      '/course/sourceCode/':[
        {
          title: '源码解析',  
          collapsable: false, 
          children: [
           {
            title: 'mvvm核心源码解析(vue)', 
            collapsable: false, 
            path: 'mvvm',
           },
           {
            title: 'vue2-3响应式原理解析', 
            collapsable: false, 
            path: 'v2v3',
           },
           {
            title: 'vue-router实现', 
            collapsable: false, 
            path: 'vueRouter',
           }
          ]
        }
      ],
      '/course/expand/':[
        {
          title: '知识拓展',  
          collapsable: false, 
          children: [
           {
            title: '图标(echarts)', 
            collapsable: false, 
            path: 'echarts',
           }
          ]
        }
      ],
      '/others/financial/':[
        {
          title: '小白理财12天总结',  
          collapsable: false, 
          path: 'start12',
        }
      ]
    },
    lastUpdated: 'Last Updated', // string | boolean
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': './docs/'
      }
    }
  }
}