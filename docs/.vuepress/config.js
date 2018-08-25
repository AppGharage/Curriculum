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
        sidebar: [{
            title: 'Main',
            collapsable: false,
            children: [
                '/',
                '/core/',
                'frontend/',
                '/backend/'
            ]
        }],
        displayAllHeaders: true,
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'Projects',
                items: [{
                        text: 'General',
                        items: [
                            { text: 'Beginner', link: '/frontend/' },
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
            { text: 'Visit AppGharage', link: 'https://appgharage.com' }
        ]
    }
}