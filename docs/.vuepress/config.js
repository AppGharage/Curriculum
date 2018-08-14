module.exports = {
  title: 'AppGharage',
  description: 'The Curriculum for Web Developers',
  serviceWorker: true,
  themeConfig: {
    repo: 'AppGharage/Curriculum',
    repoLabel: 'Contribute!',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit this page on Github!',
    lastUpdated: 'Last Updated',
    serviceWorker: {
      updatePopup: true
    },
    sidebar: 'auto',
    displayAllHeaders: true,
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Projects',
        items: [
          { 
            text: 'General', 
            items: [
              { text: 'Beginner', link: '/frontend/beginner' },
              { text: 'Intermediate', link: '/frontend/beginner' },
              { text: 'Advanced', link: '/frontend/beginner' }
            ] 
          },
          { 
            text: 'Frontend', 
            items: [
              { text: 'Beginner', link: '/frontend/beginner' },
              { text: 'Intermediate', link: '/frontend/beginner' },
              { text: 'Advanced', link: '/frontend/beginner' }
            ] 
          },
          { 
            text: 'Backend', 
            items: [
              { text: 'Beginner', link: '/backend/beginner' },
              { text: 'Intermediate', link: '/backend/beginner' },
              { text: 'Advanced', link: '/backend/beginner' }
            ] 
          },
        ]
      },
      {
        text: 'Resources',
        items: [
          { text: 'Core', link: '/language/chinese' },
          { text: 'Frontend', link: '/language/chinese' },
          { text: 'backend', link: '/language/japanese' }
        ]
      },
      { text: 'Visit AppGharage', link: 'https://appgharage.com' }
    ]
  }
}
