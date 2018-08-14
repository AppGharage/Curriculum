module.exports = {
  title: 'AppGharage',
  description: 'Vue-powered Static Site Generator',
  serviceWorker: true,
  themeConfig: {
    serviceWorker: {
      updatePopup: true
    },
    sidebar: 'auto',
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
      { text: 'Project Repo', link: 'https://github.com/AppGharage/Curriculum' },
      { text: 'Visit AppGharage', link: 'https://appgharage.com' }
    ]
  }
}
