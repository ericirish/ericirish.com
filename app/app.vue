<script setup lang="ts">
import { jsonLd } from '#shared/agent-profile'
import { identity, machinePaths, siteUrl } from '#shared/site'

useHead({
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'canonical', href: `${siteUrl}/` },
    { rel: 'alternate', href: `${siteUrl}/`, hreflang: 'en' },
    { rel: 'llm-context', href: machinePaths.llms, type: 'text/markdown' },
    { rel: 'describedby', href: machinePaths.llms, type: 'text/markdown' },
    { rel: 'alternate', href: machinePaths.markdown, type: 'text/markdown', title: 'Markdown version' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(jsonLd())
    }
  ],
  noscript: [
    { innerHTML: '<style>.reveal{opacity:1!important;transform:none!important}</style>' }
  ]
})

useSeoMeta({
  ogSiteName: identity.name,
  ogType: 'website',
  ogLocale: 'en_US',
  ogUrl: `${siteUrl}/`,
  ogImage: identity.portrait,
  ogImageAlt: identity.portraitAlt,
  twitterCard: 'summary_large_image',
  twitterImage: identity.portrait,
  twitterImageAlt: identity.portraitAlt,
  author: identity.name,
  robots: 'index, follow, max-image-preview:large, max-snippet:-1'
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
