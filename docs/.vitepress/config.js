export default {
    title: 'GIRIN TECH BLOG 👩🏻💻',
    titleTemplate: false,
    description: "Hong's Tech Blog",
    markdown: {
      theme: 'material-palenight',
      lineNumbers: true
    },
    themeConfig: {
      nav: [
        { text: '🎁 Donation', link: '/donation' },
      ],
      sidebar: [
        {
          text: '♟ Guide',
          items: [
            { text: 'Introduction', link: '/introduction' },
          ]
        },
        {
          text: 'Flutter',
          collapsible: true,
          items: [
            { text: 'Flutter', link: '/flutter/flutter' },
            { text: 'Dart', link: '/flutter/dart' },
          ]
        },
        {
          text: 'Toy project',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Notion api', link: '/study/notionapi' },
          ]
        },
      ]
    },
    head: [
      // Song Myoung 서체
      ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
      ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
      ['link', { href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap', rel: 'stylesheet' }],
      
      // google site verification
      ['meta', { name: 'google-site-verification', content: 'UQi6-4mGgJgr2v4COjlqZsGVxGumi6GYlv2P0_qnikk' }],
    ],
    ignoreDeadLinks: true,
}