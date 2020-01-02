module.exports = {
  plugins: [
    'code-switcher',
    '@vuepress/register-components',
    'vuepress-plugin-element-tabs'
  ],
  title: 'GetCandy',
  description: 'Just playing around',
  head: [
    ['link', {rel: 'shortcut icon', type:'image/png', href:'/assets/img/favicon.png'}]
  ],
  themeConfig: {
  	smoothScroll: true,
    logo: '/assets/img/logo.png',
    nav: [
      { text: 'API', link: '/api/' },
      { text: 'Hub', link: '/hub/' },
      { text: 'FAQ', link: '/faq/' },
      { text: 'Website', link: 'https://getcandy.io/' }
    ],
    sidebar: {
      '/api/': [
        '',
        'clients',
        {
          title: 'API Reference',
          children: [ 'categories', 'products' ]
        },
        {
          title: 'Model Definitions',
          children: [ 'products' ]
        },
        {
          title: 'Extending GetCandy',
          children: [ 'products' ]
        }

      ],

      '/hub/': [
        '',
        'config'
      ],

      // fallback
      '/': [
        '',
        'contact',
        'about'
      ]
    },




    // Assumes GitHub. Can also be a full GitLab url.
    //repo: 'getcandy/documentation',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    //repoLabel: 'Contribute!',

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    docsRepo: 'getcandy/documentation',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'vuepress',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!'
  }

}