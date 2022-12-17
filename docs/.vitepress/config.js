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
        { text: 'Blog 📙', link: '/blog' },
        { text: 'Shopping 💎', link: '/shopping' },
      ],
    },
    head: [
      // Song Myoung 서체
      ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
      ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
      ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/public/favicons/favicon-16x16.png"}],
      ['link', { href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap', rel: 'stylesheet' }],
      ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-GV27QZ3Z73' }],
      ['script', {}, "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-GV27QZ3Z73');"],

      // google site verification
      ['meta', { name: 'google-site-verification', content: 'UQi6-4mGgJgr2v4COjlqZsGVxGumi6GYlv2P0_qnikk' }],
    ],
    ignoreDeadLinks: true,
}