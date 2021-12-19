/*
 * @FileDescription: VuePress 网站必要的配置文件
 * @Author: zsf
 * @Date: 2021-11-25 09:54:12
 * @LastEditors: zsf
 * @LastEditTime: 2021-11-27 10:28:04
 */
module.exports = {
  title: '一个前端菜鸟的知识湖泊', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: '越努力越幸运', // meta 中的描述文字，用于SEO
  // configureWebpack: {
  //   resolve: {
  //     alias: { // 路径别名
  //       '@alias': './'
  //     }
  //   }
  // },
  // base: "", // 基础路径
  markdown: {
    lineNumbers: true // 码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    // 导航栏
    nav: [
      // { text: '前端', link: '/pages/blog/js.md' },
      {
        text: '前端',
        ariaLabel: '前端',
        items: [
          { text: 'JavaScript', link: '/pages/blog/js.md' },
          { text: 'CSS', link: '/pages/blog/css.md' },
          { text: 'Vue', link: '/pages/blog/vue.md' },
        ]
      },
      { text: 'Github', link: '' },
    ],
    //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
    sidebar: {
      '/pages/blog/': [
        {
          title: '前端',   // 一级菜单名称
          collapsable: false, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [
            ['js.md', 'javascrip'],  //菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
            ['css.md', 'CSS'],
            ['vue.md', 'Vue']
          ]
        },
        // {
        //   title: '测试菜单2',
        //   collapsable: false,
        //   // children: [
        //   //   ['test2.md', '子菜单1']
        //   // ]
        // }
      ],
    }
  },

}