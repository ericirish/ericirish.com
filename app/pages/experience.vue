<script setup lang="ts">
import {
  companies,
  experience,
  experienceIntro,
  experienceSeo,
  identity,
  siteUrl,
  stacks
} from '#shared/site'

useSeoMeta({
  title: experienceSeo.title,
  description: experienceSeo.description,
  ogTitle: experienceSeo.ogTitle,
  ogDescription: experienceSeo.ogDescription,
  ogUrl: `${siteUrl}/experience`,
  ogImage: identity.portrait
})
</script>

<template>
  <main>
    <section class="border-b border-line">
      <div class="frame px-6 pb-16 pt-12 md:px-10 md:pb-24 md:pt-20">
        <p class="eyebrow mb-8">{{ experienceIntro.eyebrow }}</p>
        <h1 class="display max-w-[14ch] text-[clamp(2.5rem,6.6vw,5.75rem)]">
          {{ experienceIntro.headline }}
        </h1>
      </div>
    </section>

    <section class="border-b border-line">
      <div class="frame px-6 py-20 md:px-10 md:py-28">
        <p v-reveal class="eyebrow mb-10">01 — The work</p>
        <ul class="divide-y divide-line border-y border-line">
          <li
            v-for="(role, i) in experience"
            :key="role.when + role.org"
            v-reveal
            class="grid gap-3 py-8 md:grid-cols-12 md:items-baseline md:gap-10"
            :style="{ '--i': i }"
          >
            <p class="font-mono text-xs text-ink-faint md:col-span-3">{{ role.when }}</p>
            <div class="md:col-span-9">
              <h2 class="display text-3xl md:text-4xl">{{ role.title }}</h2>
              <p v-if="role.org" class="mt-2 text-ink">{{ role.org }}</p>
              <p v-if="role.note" class="mt-3 max-w-xl leading-relaxed text-ink-muted">{{ role.note }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="border-b border-line">
      <div class="frame px-6 py-20 md:px-10 md:py-28">
        <p v-reveal class="eyebrow mb-10">02 — Notable companies</p>
        <ul class="divide-y divide-line border-y border-line">
          <li
            v-for="(company, i) in companies"
            :key="company.name"
            v-reveal
            class="grid items-center gap-x-6 gap-y-3 py-5 md:grid-cols-12 md:gap-10 md:py-6"
            :style="{ '--i': i }"
          >
            <div class="flex items-center gap-5 md:col-span-5">
              <span
                v-if="company.logo"
                class="flex h-12 w-24 shrink-0 items-center justify-center border border-white/10 bg-black px-1.5 sm:h-14 sm:w-40 sm:px-2"
              >
                <img :src="company.logo" alt="" class="max-h-7 w-auto max-w-full object-contain sm:max-h-9">
              </span>
              <h2 class="display text-3xl md:text-4xl">
                <a v-if="company.url" :href="company.url" target="_blank" rel="noreferrer" class="link">{{ company.name }}</a>
                <span v-else>{{ company.name }}</span>
              </h2>
            </div>
            <p v-if="company.note" class="max-w-xl leading-relaxed text-ink-muted md:col-span-7">{{ company.note }}</p>
          </li>
        </ul>
      </div>
    </section>

    <section class="border-b border-line">
      <div class="frame px-6 py-20 md:px-10 md:py-28">
        <div class="mb-16">
          <p v-reveal class="eyebrow mb-10">03 — Preferred stack</p>
          <ContributionGraph />
        </div>
        <ul class="divide-y divide-line border-y border-line">
          <li
            v-for="(group, i) in stacks"
            :key="group.label"
            v-reveal
            class="grid gap-3 py-8 md:grid-cols-12 md:gap-10"
            :style="{ '--i': i }"
          >
            <p class="eyebrow md:col-span-3 md:pt-3">{{ group.label }}</p>
            <div class="md:col-span-9">
              <p class="display text-3xl md:text-4xl">{{ group.items.join(', ') }}</p>
              <p class="mt-3 max-w-xl leading-relaxed text-ink-muted">{{ group.note }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>
