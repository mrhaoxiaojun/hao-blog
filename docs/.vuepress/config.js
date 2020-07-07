module.exports = {
  title: '佳航教育',
  description: '你的问题主要在于读书不多而想得太多。——杨绛',
  head: [
      ['link', {
          rel: 'icon',
          href: `/hao.ico`
      }]
  ],
  dest: './docs/.vuepress/dist',
  ga: '',
  evergreen: true,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    sidebarDepth: 2, 
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      // {
      //   text: '为什么',
      //   items: [
      //     { text: '市场行情大背景', link: '/why/back' },
      //     { text: '那为什么选择我们', link: '/why/choose' },
      //     { text: '师资力量怎么样', link: '/why/teacher' },
      //     { text: '我们只做前端', link: '/why/onlyone' },
      //     { text: '就业市场', link: '/why/employment' }
      //   ]
      // },
      {
        text: '课程指南',
        items: [
          { text: '吸星大法', link: '/course/main/' },
          { text: '辅助工具', link: '/course/tool/' },
          { text: '面试指南', link: '/course/interview/' },
          { text: '源码解析', link: '/course/sourceCode/' },
          { text: '知识拓展', link: '/course/expand/' },
        ]
      },
      {
        text: '其他知识',
        items: [
          { text: '理财学习', link: '/others/financial/' },
          { text: '书影博客', link: '/others/readingBlog/' },
        ]
      },
      { text: 'Github', link: 'https://github.com/mrhaoxiaojun/' },
    ],
    '/course/main/':{
      sidebar:false
    },
    sidebar: {
      // 头部导航菜单
      // '/why/': [
      //   {
      //     title: '市场行情大背景',   // 必要的
      //     path: 'back',      // 可选的, 应该是一个绝对路径
      //     collapsable: false, // 可选的, 默认值是 true,
      //   },
      //   {
      //     title: '那为什么选择我们',
      //     path: 'choose',
      //   },
      //   {
      //     title: '师资力量怎么样',
      //     path: 'teacher',
      //   },
      //   {
      //     title: '我们只做前端',
      //     path: 'onlyone',
      //   },
      //   {
      //     title: '就业市场',
      //     path: 'employment',
      //   },
      // ],
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
            title: '软件工程', 
            collapsable: false, 
            path: 'software',
           }
          ]
        }
      ],
      '/others/financial/':[
        {
          title: '理财知识',  
          collapsable: false, 
          children: [
            {
            title: '小白洗脑总结', 
            collapsable: false, 
            path: 'start'
            }
          ]
        }
      ],
      '/others/readingBlog/':[
        {
          title: '书影博客',  
          collapsable: false, 
          children: [
            // {
            // title: '小白洗脑总结', 
            // collapsable: false, 
            // path: 'start'
            // }
          ]
        }
      ],
      // 子页面分流菜单导航
      '/course/main/base/':[
        {
          title: '基础知识', 
          collapsable: false, 
          path: 'base'
         }
      ],
      '/course/main/es6/':[
        {
          title: 'ECMAScript 6',  
          collapsable: false, 
          children: [
            {
            title: '前言', 
            collapsable: false, 
            path: 'read'
            },
           {
            title: 'ECMAScript 6 简介', 
            collapsable: false, 
            path: 'intro'
           },
           {
            title: 'Set数据结构', 
            collapsable: false, 
            path: 'Set'
           },
           {
            title: 'Map数据结构', 
            collapsable: false, 
            path: 'Map'
           },
           {
            title: 'Proxy对象', 
            collapsable: false, 
            path: 'Proxy'
           },
           {
            title: 'Reflect对象', 
            collapsable: false, 
            path: 'Reflect'
           },
           
          ]
        }
      ],
      '/course/main/Vue/':[
        {
          title: 'Vue',  
          collapsable: false, 
          children: [
            {
             title: 'vue', 
             collapsable: false, 
             path: 'vue',
            }
          ]
        }
      ],
      '/course/main/general/':[
        {
          title: '计算机通识',  
          collapsable: false, 
          path:'network',
          children: [
            {
             title: '网络', 
             collapsable: false, 
             path: 'network'
            },
            {
              title: '数据结构', 
              collapsable: false, 
              path: 'data'
             },
             {
              title: '算法篇', 
              collapsable: false, 
              path: 'alg'
             },
             {
              title: 'git篇', 
              collapsable: false, 
              path: 'git'
             },
             {
              title: '正则篇', 
              collapsable: false, 
              path: 'regExp'
             }
          ]
        }
      ],
      '/course/main/git/':[
        {
          title: 'git教程',  
          collapsable: false, 
          children: [
             {
              title: 'git基础', 
              collapsable: false, 
              path: 'intro'
             },
             {
              title: '穿越（修改）管理', 
              collapsable: false, 
              path: 'through'
             },
             {
              title: '分支管理', 
              collapsable: false, 
              path: 'branch'
             },
             {
              title: '标签管理', 
              collapsable: false, 
              path: 'tag'
             },
             {
              title: 'Github介绍', 
              collapsable: false, 
              path: 'github'
             },
             {
              title: 'gitLab介绍', 
              collapsable: false, 
              path: 'gitlab'
             },
             {
              title: '常见问题', 
              collapsable: false, 
              path: 'queston'
             }
          ]
        }
      ],
      '/course/main/designMode/':[
        {
          title: 'Javascript设计模式',  
          collapsable: false, 
          children: [
           {
            title: '简介', 
            collapsable: false, 
            path: 'intro'
           },
           {
            title: '设计原则', 
            collapsable: false, 
            path: 'principle'
           },
           {
            title: '设计模式', 
            collapsable: false, 
            path: 'model'
           }
          ]
        }
      ],
      '/course/main/skills/':[
        {
          title: '编程技巧', 
          collapsable: false, 
          path: 'skills'
         }
      ],
      '/course/main/linux/':[
        {
          title: 'linux实战笔记',  
          collapsable: false, 
          children: [
           {
            title: '基础篇', 
            collapsable: false, 
            path: 'base'
           },
           {
            title: '系统操作篇', 
            collapsable: false, 
            path: 'systemHandle'
           },
           {
            title: '系统管理篇', 
            collapsable: false, 
            path: 'systemManagement'
           },
           {
            title: 'Shell篇', 
            collapsable: false, 
            path: 'shell'
           },
           {
            title: '文本操作篇', 
            collapsable: false, 
            path: 'textHandle'
           },
           {
            title: '服务器管理篇', 
            collapsable: false, 
            path: 'serverManagement'
           },
          ]
        }
      ],
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
