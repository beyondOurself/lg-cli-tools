const { path } = require('@vuepress/utils')
module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: '文档',
    description: '前端编码规范',
    base:'/code-standards/',
    // 主题和它的配置
    theme: path.resolve(__dirname, './theme'),
    themeConfig: {
        logo: '/hero.png',
        navbar: [
            {
                text: '内容',
                children: [
                    {
                        text: '开始使用',
                        link: '/get-started/',
                        activeMatch:'/get-started/'
                    },
                    {
                        text: 'HTML规范',
                        link: '/html-standards/',
                        activeMatch: '/html-standards/'

                    },
                    {
                        text: '图片规范',
                        link: '/image-standards/',
                        activeMatch: '/image-standards/'

                    },
                    {
                        text: 'CSS规范',
                        link: '/css-standards/',
                        activeMatch: '/css-standards/'

                    },
                    {
                        text: '命名规范',
                        link: '/name-stantdards/',
                        activeMatch: '/name-stantdards/'

                    },
                    {
                        text: 'JS规范',
                        link: '/js-standards/',
                        activeMatch: '/js-standards/'

                    },
                    {
                        text: 'React书写规范',
                        link: '/react-standards/',
                        activeMatch: '/react-standards/'

                    },
                    {
                        text: 'Vue书写规范',
                        link: '/vue-standards/',
                        activeMatch: '/vue-standards/'

                    },
                    
                ]
            },
            {
                text: '参考',
                children: [
                    {
                     text: '京东凹凸实验室前端代码规范',
                    link:'https://guide.aotu.io/'
                    },
                    {
                        text: '腾讯前端代码规范',
                        link:'http://tgideas.qq.com/doc/index.html'
                    },
                    {
                        text: '百度前端代码规范',
                        link:'https://github.com/ecomfe/spec'
                    },
                    {
                        text: 'JavaScript Standard Style',
                        link:'https://github.com/standard/standard '
                    },
                    {
                        text: 'Vue官方特有的代码风格指南',
                        link:'https://cn.vuejs.org/v2/style-guide/index.html'
                    },
                    {
                        text: '阮一峰的ES6编程风格',
                        link:'http://es6.ruanyifeng.com/#docs/style'
                    },
                    {
                        text: 'ESLint',
                        link:'https://eslint.bootcss.com/'
                    },
                    {
                        text: 'Prettier',
                        link:'https://prettier.io/'
                    },
                ],
            },
        ],
        sidebar: [
            // SidebarItem
            {
                text: '开始使用',
                children: [
                    // SidebarItem
                    {
                        text: '概述',
                        link: '/get-started/',
                    },
                ],
            },
            {
                text: 'HTML规范',
                children: [
                    // SidebarItem
                    {
                        text: '代码规范',
                        link: '/html-standards/',
                    },
                    {
                        text: '注释规范',
                        link: '',
                    },
                    {
                        text: '文本规范',
                        link: '',
                    },
                    {
                        text: 'WebAppMeta',
                        link: '',
                    },
                ],
            },
            {
                text: '图片规范',
                children: [
                    // SidebarItem
                    {
                        text: '图片格式',
                        link: '',
                    },
                    {
                        text: '图片大小',
                        link: '',
                    },
                    {
                        text: '图片质量',
                        link: '',
                    },
                    {
                        text: '概述',
                        link: '',
                    },
                    {
                        text: '图片引入',
                        link: '',
                    },
                ],
            },
            {
                text: 'CSS规范',
                children: [
                    // SidebarItem
                    {
                        text: '代码规范',
                        link: '',
                    },
                    {
                        text: '注释规范',
                        link: '',
                    },
                    {
                        text: 'SASS规范',
                        link: '',
                    },
                    {
                        text: '重置样式',
                        link: '',
                    },
                    {
                        text: '媒体查询',
                        link: '',
                    },
                    {
                        text: '移动端常用私有属性',
                        link: '',
                    },
                ],
            },
            {
                text: '命名规范',
                children: [
                    // SidebarItem
                    {
                        text: '目录命名',
                        link: '',
                    },
                    {
                        text: '图片命名',
                        link: '',
                    },
                    {
                        text: 'HTML/CSS命名',
                        link: '',
                    },
                    {
                        text: 'ClassName命名',
                        link: '',
                    },
                ],
            },
            {
                text: 'JS规范',
                children: [
                    // SidebarItem
                    {
                        text: '语言规范',
                        link: '',
                    },
                    {
                        text: '代码规范',
                        link: '',
                    },
                ],
            },
            {
                text: 'React书写规范',
                children: [
                    // SidebarItem
                    {
                        text: '语言规范',
                        link: '',
                    },
                    {
                        text: '代码规范',
                        link: '',
                    },
                ],
            },
            {
                text: 'Vue书写规范',
                children: [
                    // SidebarItem
                    {
                        text: '语言规范',
                        link: '',
                    },
                    {
                        text: '代码规范',
                        link: '',
                    },
                ],
            },
        ],

      
    },
    plugins: [
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/': {
                        placeholder: 'Search',
                    },
                    '/zh/': {
                        placeholder: '搜索',
                    },
                },
            },
        ],
        [
            '@vuepress/register-components',
            {
                componentsDir: path.resolve(__dirname, './components'),
            },
        ]
    ],
}