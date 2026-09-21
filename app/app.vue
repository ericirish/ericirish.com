<script setup lang="ts">
const config = useRuntimeConfig()
const siteUrl = String(config.public.siteUrl || 'https://eric.irish').replace(/\/$/, '')

useHead({
  link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  noscript: [
    { innerHTML: '<style>.reveal{opacity:1!important;transform:none!important}</style>' }
  ]
})

useSeoMeta({
  ogSiteName: 'Eric Irish',
  ogType: 'website',
  ogUrl: siteUrl,
  ogImage: `${siteUrl}/EricIrish.jpg`,
  twitterCard: 'summary_large_image',
  twitterImage: `${siteUrl}/EricIrish.jpg`
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
