<script setup lang="ts">
import { footer, headerLine, identity } from '#shared/site'

const config = useRuntimeConfig()
const email = String(config.public.contactEmail)
const year = new Date().getFullYear()

const contactMailto = `mailto:${email}`

// Scrollspy for the in-page header links: `.is-current` + aria-current while a
// section crosses the middle of the viewport. Not CSS `scroll-target-group`:
// it treats the first link as current whenever no section has been reached yet,
// which would light up "Work with me" over the hero.
const route = useRoute()
let stopSpy: (() => void) | undefined

function startSpy() {
  stopSpy?.()
  stopSpy = undefined
  const links = [...document.querySelectorAll<HTMLAnchorElement>('.site-nav a[href^="/#"]')]
  const setCurrent = (current: Element | null) => {
    for (const link of links) {
      const active = link === current
      link.classList.toggle('is-current', active)
      if (active) {
        link.setAttribute('aria-current', 'true')
      } else {
        link.removeAttribute('aria-current')
      }
    }
  }
  if (route.path !== '/') {
    setCurrent(null)
    return
  }

  const byId = new Map(links.map(link => [link.hash.slice(1), link]))
  const sections = [...byId.keys()]
    .map(id => document.getElementById(id))
    .filter((el): el is HTMLElement => el !== null)
  const visible = new Set<Element>()
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        visible.add(entry.target)
      } else {
        visible.delete(entry.target)
      }
    }
    const current = sections.find(section => visible.has(section))
    setCurrent(current ? byId.get(current.id) ?? null : null)
  }, { rootMargin: '-50% 0px -50% 0px' })
  sections.forEach(section => observer.observe(section))
  stopSpy = () => observer.disconnect()
}

const nuxtApp = useNuxtApp()
const offPageFinish = nuxtApp.hook('page:finish', () => startSpy())
onMounted(startSpy)
onBeforeUnmount(() => {
  offPageFinish()
  stopSpy?.()
})
</script>

<template>
  <div class="min-h-dvh text-ink">
    <header class="site-header sticky top-0 z-40">
      <div class="header-shell relative border-b border-line bg-void/92 backdrop-blur-md">
        <div class="scroll-progress" aria-hidden="true" />
        <div class="frame flex items-center justify-between px-6 py-4 md:px-10">
          <NuxtLink to="/" class="logo inline-flex items-center font-display text-[1.35rem] tracking-tight">
            <span class="star logo-star" aria-hidden="true" />
            {{ identity.name }}
          </NuxtLink>

          <p class="eyebrow hidden items-center gap-2 md:flex">
            {{ headerLine }}
            <span class="star" aria-hidden="true" />
            Austin, TX
          </p>

          <nav class="site-nav flex items-center gap-6 font-mono text-[0.75rem] tracking-wide">
            <a href="/#offer" class="nav-link link-muted hidden transition-colors sm:inline">Work with me</a>
            <NuxtLink to="/experience" class="nav-link link-muted hidden transition-colors sm:inline">Experience</NuxtLink>
            <a href="/#about" class="nav-link link-muted hidden transition-colors sm:inline">About</a>
            <a :href="contactMailto" class="inline-flex items-center gap-2 text-ink">
              <span class="pulse-dot inline-block size-1.5 rounded-full bg-accent" aria-hidden="true" />
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>

    <slot />

    <footer class="border-t border-line">
      <div class="frame grid gap-10 px-6 py-16 md:grid-cols-12 md:px-10 md:py-24">
        <div v-reveal class="md:col-span-7">
          <p class="eyebrow mb-6">Start here</p>
          <a :href="contactMailto" class="display block text-4xl md:text-6xl">
            <Scribble :delay="500">{{ footer.hello }}</Scribble><span class="text-accent">*</span>
          </a>
          <p class="mt-6 max-w-md text-ink-muted">
            <span class="text-accent">*</span> {{ footer.note }}
          </p>
        </div>

        <div class="grid gap-8 font-mono text-[0.8125rem] leading-relaxed md:col-span-5 md:grid-cols-2">
          <address class="not-italic">
            <p class="eyebrow mb-3">Reach me</p>
            <ul class="space-y-2">
              <li><a :href="`mailto:${email}`" class="link">{{ email }}</a></li>
              <li>{{ identity.location }}</li>
              <li><a :href="identity.linkedin" rel="me noreferrer" class="link">LinkedIn</a></li>
              <li><a :href="identity.github" rel="me noreferrer" class="link">GitHub</a></li>
            </ul>
          </address>
          <div>
            <p class="eyebrow mb-3">With them</p>
            <ul class="space-y-2">
              <li><a href="/#testimonials" class="link">Proof on this site</a></li>
              <li><a href="https://hellofrom.to" target="_blank" rel="noreferrer" class="link">HelloFrom</a></li>
              <li><a href="https://austin.firsttosite.com" target="_blank" rel="noreferrer" class="link">FirstToSite · Austin</a></li>
              <li><a href="https://www.schoolcheck.app" target="_blank" rel="noreferrer" class="link">SchoolCheck</a></li>
            </ul>
          </div>
        </div>
      </div>

      <HillCountry />

      <div class="bg-void-raised">
        <div class="frame flex flex-col gap-3 px-6 py-6 font-mono text-[0.75rem] tracking-wide text-ink-muted md:flex-row md:items-center md:justify-between md:px-10">
          <p>© {{ year }} Eric Irish · Austin, TX</p>
          <p class="text-ink-faint">{{ footer.signoff }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>
