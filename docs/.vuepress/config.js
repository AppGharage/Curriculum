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
            { text: 'Projects', link: '/projects/' },

            { text: 'Visit AppGharage', link: 'https://appgharage.com' }
        ]
    }
}