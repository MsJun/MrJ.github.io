module.exports = {
    title: 'MrMJ `blog', //标题
    description: 'MrMJ的个人博客',//网站描述
    // theme:'reform',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
        ['link', { rel: 'manifest', href: '/logo.png' }],
        ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
        ['link', { rel: 'mask-icon', href: '/logo.png', color: '#3eaf7c' }],
        ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache' }],
        ['meta', { 'http-quiv': 'expires', cotent: '0' }],
        ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache, must-revalidate' }]
    ],
    serviceWorker: true, // 是否开启 PWA
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        prevLinks: true,
        smoothScroll: true,//页面滚动效果
        navbar: true,
        logo: '/logo.png',//导航logo
        sidebar: 'auto',//侧边栏自动匹配标题
        search: true,//搜索
        searchMaxSuggestions: 10,
        lastUpdated: '上次更新时间',//文章时间
        tags:"tags",
        nav: [
            { text: '主页', link: '/' },
            {
                text: '基础', 
                items: [
                    { text: '基础', 
                        items: [
                            { text: 'JavaScript', link: '/basis/JavaScript/' },
                            { text: 'HTML', link: '/basis/HTML/' },
                            { text: 'CSS', link: '/basis/CSS/' },
                        ]
                    },
                    // { text: 'TypeScript', link: '/basis/CSS/' },
                ]
            },
            {
                text: '框架', 
                items: [
                    { text:'框架',
                        items:[
                            { text: 'Vue', link: '/frame/Vue/' },
                            { text: 'Webpack', link: '/frame/Webpack/' },
                        ]
                    }
                ]
            },
            {
                text:"标签云",
                link:'/tags/',
                tags:true
            },
            { text: '工作笔记', link: '/work/' },
            { text: 'Github', link: 'https://github.com/MsJun' }
        ],
        // sidebar: {
        //     '/blog/': getSidebar('blog'),
        //     '/frame/': getSidebar('frame'),
        //     '/basis/': getSidebar('basis')
        // },
        //sidebarDepth: 2, // 侧边栏显示2级
    },
    port:8082,//端口
    
};
// function getSidebar(barName) {//侧边栏
//     const sidebar = {
//         frame: [
//             '/frame/',
//             // '/frame/Vue/',
//             // '/frame/Webpack/'
//             // // '/frame/React/',
//             // // '/frame/Angular/'
//         ],
//         blog: [
//             '/blog/'
//         ],
//         basis: [
//             '/basis/'
//         ]
//     }
//     return sidebar[barName]
// }