<script setup lang="ts">
import { jsonLd } from '#shared/agent-profile'
import { identity, machinePaths, shareImages, siteUrl } from '#shared/site'

const route = useRoute()
const siteUpdated = String(useRuntimeConfig().public.siteUpdated)

const pageUrl = computed(() => {
  const path = route.path.replace(/\/$/, '') || '/'
  return path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`
})

const page = computed(() =>
  route.path.replace(/\/$/, '') === machinePaths.experience ? 'experience' : 'home'
)

const markdownPath = computed(() =>
  page.value === 'experience' ? machinePaths.experienceMarkdown : machinePaths.markdown
)

useHead(() => ({
  link: [
    { rel: 'canonical', href: pageUrl.value, key: 'canonical' },
    { rel: 'llm-context', href: machinePaths.llms, type: 'text/markdown' },
    { rel: 'describedby', href: machinePaths.llms, type: 'text/markdown' },
    { rel: 'alternate', href: markdownPath.value, type: 'text/markdown', title: 'Markdown version', key: 'markdown' }
  ],
  script: [
    {
      type: 'application/ld+json',
      key: 'jsonld',
      innerHTML: JSON.stringify(jsonLd(page.value, siteUpdated))
    }
  ],
  noscript: [
    { innerHTML: '<style>.reveal{opacity:1!important;transform:none!important}</style>' }
  ]
}))

useSeoMeta({
  ogSiteName: identity.name,
  ogType: 'website',
  ogLocale: 'en_US',
  ogUrl: pageUrl,
  ogImage: () => shareImages[page.value].url,
  ogImageAlt: () => shareImages[page.value].alt,
  ogImageWidth: shareImages.width,
  ogImageHeight: shareImages.height,
  ogImageType: shareImages.type,
  twitterCard: 'summary_large_image',
  twitterImage: () => shareImages[page.value].url,
  twitterImageAlt: () => shareImages[page.value].alt,
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
