module.exports = {
  title: "Eric Qu",
  description: "Eric's personal website.",
  head: [ ["link", { rel: "icon", href: `/logo.png` }],
          ['script', {
              async: true,
              src: 'https://www.googletagmanager.com/gtag/js?id=UA-248533145-1'
          }],
          ['script', {}, `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
          
              gtag('config', 'UA-248533145-1');
          `]
          ],
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
  }
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

