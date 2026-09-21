export default defineNuxtConfig({
  compatibilityDate: '2026-09-15',
  modules: ['@nuxt/ui', '@nuxt/fonts'],
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    storage: false,
    classSuffix: ''
  },
  fonts: {
    families: [
      { name: 'Newsreader', provider: 'google', weights: [400, 500, 600], styles: ['normal', 'italic'] },
      { name: 'Figtree', provider: 'google', weights: [400, 500, 600] },
      { name: 'Geist Mono', provider: 'google', weights: [400, 500] },
      { name: 'Fraunces', provider: 'google', weights: [500, 600] },
      { name: 'Manrope', provider: 'google', weights: [500, 600, 700] },
      { name: 'Homemade Apple', provider: 'google', weights: [400] },
      { name: 'Caveat', provider: 'google', weights: [400, 600] },
      { name: 'DM Sans', provider: 'google', weights: [400, 500, 600, 700] }
    ]
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://eric.irish',
      contactEmail: 'hello@eric.irish'
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
    }
  },
  routeRules: {
    '/': { prerender: true }
  },
  $development: {
    nitro: { preset: 'node-server' }
  },
  nitro: {
    preset: 'cloudflare_module',
    prerender: {
      routes: ['/'],
      crawlLinks: false,
      autoSubfolderIndex: false
    },
    cloudflare: {
      deployConfig: true,
      wrangler: {
        name: 'ericirish',
        compatibility_date: '2026-09-15',
        compatibility_flags: ['nodejs_compat'],
        observability: { enabled: true }
      }
    }
  }
})
