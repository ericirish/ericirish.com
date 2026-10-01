import { contactEmail, machinePaths, siteUrl } from './shared/site'

const link = [
  '</llms.txt>; rel="llm-context"; type="text/markdown"',
  '</llms.txt>; rel="describedby"; type="text/markdown"',
  '</index.md>; rel="alternate"; type="text/markdown"'
].join(', ')

export default defineNuxtConfig({
  compatibilityDate: '2026-09-15',
  modules: ['@nuxt/ui', '@nuxt/fonts'],
  css: ['~/assets/css/main.css', '~/assets/css/motion.css'],
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
      siteUrl,
      contactEmail
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
    }
  },
  routeRules: {
    '/': {
      prerender: true,
      headers: { link }
    },
    [machinePaths.llms]: { prerender: true },
    [machinePaths.llmsFull]: { prerender: true },
    [machinePaths.markdown]: { prerender: true },
    [machinePaths.robots]: { prerender: true },
    [machinePaths.sitemap]: { prerender: true },
    [machinePaths.wellKnown]: { prerender: true }
  },
  nitro: {
    preset: 'static',
    prerender: {
      routes: [
        '/',
        machinePaths.llms,
        machinePaths.llmsFull,
        machinePaths.markdown,
        machinePaths.robots,
        machinePaths.sitemap,
        machinePaths.wellKnown
      ],
      crawlLinks: false,
      autoSubfolderIndex: false
    }
  }
})
