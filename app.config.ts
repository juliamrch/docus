export default defineAppConfig({
  docus: {
    title: 'Documentation',
    description: 'Get started on Clever Cloud',
    image: 'https://cellar-c2.services.clever-cloud.com/precious-jpegs/clever-cool.svg',

    socials: {
      twitter: 'nuxt_js',
      github: 'nuxt-themes/docus',
      nuxt: {
        label: 'Nuxt',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://nuxt.com'
      }
    },

    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
      edit: true
    },

    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },

    main: {
      padded: true,
      fluid: true
    },

    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },

    titleTemplate: 'Clever Theme'
  }
})