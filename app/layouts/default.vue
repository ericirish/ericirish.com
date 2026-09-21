<script setup lang="ts">
const config = useRuntimeConfig()
const email = String(config.public.contactEmail)
const year = new Date().getFullYear()

const contactMailto = `mailto:${email}`
</script>

<template>
  <div class="min-h-dvh text-ink">
    <header class="sticky top-0 z-40 border-b border-line bg-void/92 backdrop-blur-md">
      <div class="frame flex items-center justify-between px-6 py-4 md:px-10">
        <NuxtLink to="/" class="font-display text-[1.35rem] tracking-tight">
          Eric Irish
        </NuxtLink>

        <p class="eyebrow hidden items-center gap-2 md:flex">
          Invisible AI · embedded in your process
          <span class="star" aria-hidden="true" />
          Austin, TX
        </p>

        <nav class="flex items-center gap-6 font-mono text-[0.75rem] tracking-wide">
          <a href="/#offer" class="link-muted hidden transition-colors sm:inline">Work with me</a>
          <a href="/#about" class="link-muted hidden transition-colors sm:inline">About</a>
          <a :href="contactMailto" class="inline-flex items-center gap-2 text-ink">
            <span class="pulse-dot inline-block size-1.5 rounded-full bg-accent" aria-hidden="true" />
            Contact
          </a>
        </nav>
      </div>
    </header>

    <slot />

    <footer class="border-t border-line">
      <div class="frame grid gap-10 px-6 py-16 md:grid-cols-12 md:px-10 md:py-24">
        <div class="md:col-span-7">
          <p class="eyebrow mb-6">Start here</p>
          <a :href="contactMailto" class="display block text-4xl md:text-6xl">
            Say hello.<span class="text-accent">*</span>
          </a>
          <p class="mt-6 max-w-md text-ink-muted">
            <span class="text-accent">*</span> If a snake-oil salesman just tried to sell you SEO with an AI sticker on it, I’ll tell you.
          </p>
        </div>

        <div class="grid gap-8 font-mono text-[0.8125rem] leading-relaxed md:col-span-5 md:grid-cols-2">
          <div>
            <p class="eyebrow mb-3">Reach me</p>
            <ul class="space-y-2">
              <li><a :href="`mailto:${email}`" class="link">{{ email }}</a></li>
              <li><a href="https://www.linkedin.com/in/ecirish" rel="noreferrer" class="link">LinkedIn</a></li>
              <li><a href="https://github.com/ericirish" rel="noreferrer" class="link">GitHub</a></li>
            </ul>
          </div>
          <div>
            <p class="eyebrow mb-3">With them</p>
            <ul class="space-y-2">
              <li><a href="/#testimonials" class="link">Proof on this site</a></li>
              <li><a href="https://hellofrom.to" target="_blank" rel="noreferrer" class="link">HelloFrom</a></li>
              <li><a href="https://austin.firsttosite.com" target="_blank" rel="noreferrer" class="link">FirstToSite · Austin</a></li>
              <li><a href="https://schoolcheck.app" target="_blank" rel="noreferrer" class="link">SchoolCheck</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="border-t border-line">
        <div class="frame flex flex-col gap-3 px-6 py-6 font-mono text-[0.75rem] tracking-wide text-ink-muted md:flex-row md:items-center md:justify-between md:px-10">
          <p>© {{ year }} Eric Irish · Austin, TX</p>
          <p class="text-ink-faint">Built by hand. You talk to me, not a team.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
