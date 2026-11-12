import { execSync } from 'node:child_process'
import { contactEmail, machinePaths, siteUrl } from './shared/site'

const gtmId = 'GTM-K73P6WZP'

// Last commit date, so sitemap lastmod and dateModified only move when the site does.
function lastCommitDate() {
  try {
    return execSync('git log -1 --format=%cs', { encoding: 'utf8' }).trim()
  } catch {
    return new Date().toISOString().slice(0, 10)
  }
}

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
      contactEmail,
      siteUpdated: lastCommitDate()
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
      ],
      meta: [
        { name: 'theme-color', content: '#f4efe4', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#0c0a08', media: '(prefers-color-scheme: dark)' }
      ],
      // Google Tag Manager
      script: [
        {
          key: 'gtm',
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`
        }
      ],
      noscript: [
        {
          key: 'gtm-noscript',
          tagPosition: 'bodyOpen',
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }
      ]
    }
  },
  routeRules: {
    '/': {
      prerender: true,
      headers: { link }
    },
    [machinePaths.experience]: { prerender: true },
    [machinePaths.llms]: { prerender: true },
    [machinePaths.llmsFull]: { prerender: true },
    [machinePaths.markdown]: { prerender: true },
    [machinePaths.experienceMarkdown]: { prerender: true },
    [machinePaths.robots]: { prerender: true },
    [machinePaths.sitemap]: { prerender: true },
    [machinePaths.wellKnown]: { prerender: true }
  },
  nitro: {
    preset: 'static',
    prerender: {
      routes: [
        '/',
        machinePaths.experience,
        machinePaths.llms,
        machinePaths.llmsFull,
        machinePaths.markdown,
        machinePaths.experienceMarkdown,
        machinePaths.robots,
        machinePaths.sitemap,
        machinePaths.wellKnown
      ],
      crawlLinks: false,
      autoSubfolderIndex: false
    }
  }
})
