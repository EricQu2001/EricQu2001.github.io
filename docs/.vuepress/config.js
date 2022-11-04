module.exports = {
  title: "Eric Qu",
  description: "Eric's personal website.",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./dist",

  themeConfig: {
    search: false,
    nav: [
      { text: "Home", link: "/" },
      // { text: "About", link: "/about/" },
      { text: "Projects", link: "/projects/" },
      // { text: "Guide", link: "/guide/" },
      { text: "GitHub", link: "https://github.com/yhzq" }
    ],
    // sidebar: {
      // '/guide/': genSidebarConfig('Guide')
    // },
    lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  },

  plugins: [
      ['@vuepress/plugin-google-analytics', {
          'ga': 'G-8DSNK9BZEG' // UA-XXXXXXXXX-X
      }]
  ],
};

// function genSidebarConfig (title) {
//   return [
//     {
//       title,
//       collapsable: false,
//       children: [
//         '',
//         'getting-started',
//         'customize',
//         'advanced',
//       ]
//     }
//   ]
// }

