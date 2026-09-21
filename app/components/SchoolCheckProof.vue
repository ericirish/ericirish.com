<script setup lang="ts">
import schoolCheckLogo from '~/assets/images/schoolcheck-logo.svg'

const site = 'https://schoolcheck.app'

const steps = [
  {
    n: '01',
    title: 'Run the check',
    body: 'One question at the door, AED, or gate. Seconds — finish before the bell.'
  },
  {
    n: '02',
    title: 'Jev tags it',
    body: 'Issue summary → the district’s tag catalog. Phrase match if Jev is offline.'
  },
  {
    n: '03',
    title: 'Record sticks',
    body: 'Open finding, notifications, audit trail — every asset type, same platform.'
  }
]
</script>

<template>
  <article class="sc border-t border-line">
    <div class="frame px-6 py-20 md:px-10 md:py-28">
      <header v-reveal class="max-w-3xl">
        <p class="sc-kicker">Case study · SchoolCheck</p>
        <h2 class="mt-6">
          <a :href="site" target="_blank" rel="noreferrer" class="sc-mark">
            <img
              :src="schoolCheckLogo"
              alt="SchoolCheck"
              width="40"
              height="40"
              class="sc-logo"
            >
            <span class="sc-word">SchoolCheck</span>
          </a>
        </h2>
        <p class="sc-display mt-6 max-w-[22ch] text-2xl leading-[1.08] text-pretty md:text-4xl">
          Checks-first for K-12. Know the round happened.
        </p>
        <p class="mt-5 max-w-xl text-base font-medium leading-relaxed text-[var(--sc-ink-muted)] text-pretty md:text-lg">
          Doors, AEDs, extinguishers, emergency phones — checks for the morning walk, inspections when leaders need audit-ready depth. When something fails, tags and routing should already be right from what staff wrote.
        </p>
      </header>

      <div class="sc-cards mt-14 grid gap-10 lg:grid-cols-2 lg:gap-12">
        <figure v-reveal>
          <div class="sc-card sc-card-photo">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=80"
              alt="School building exterior"
            >
            <p class="sc-card-photo-label">Campus · checks today</p>
          </div>
          <figcaption class="sc-caption">
            <strong>The round.</strong> Main entrance passed. Gym AED inspected. Then the gate didn’t.
          </figcaption>
        </figure>

        <figure v-reveal class="reveal-delay-1">
          <div class="sc-card sc-card-finding">
            <div class="sc-finding">
              <p class="sc-finding-meta">
                <span>Playground gate latch</span>
                <span class="sc-pill sc-pill-open">Finding opened</span>
              </p>
              <p class="sc-finding-quote">
                Gate latch won’t hold shut
              </p>
              <div class="sc-finding-tags">
                <span class="sc-tag">Latch</span>
                <span class="sc-tag">Gate</span>
                <span class="sc-tag sc-tag-cause">Likely · hardware</span>
              </div>
              <p class="sc-finding-foot">Jev classified tags · 8:17 AM</p>
            </div>
          </div>
          <figcaption class="sc-caption">
            <strong>The tags.</strong> From the issue summary — not a chatbot interview.
          </figcaption>
        </figure>
      </div>

      <div v-reveal class="mt-20 md:mt-24">
        <p class="sc-kicker">How I helped</p>
        <p class="mt-4 max-w-2xl text-xl font-semibold leading-snug tracking-tight text-pretty md:text-2xl">
          They run safety operations across every campus. I helped them put Jev on finding classification — issue summary in, catalog tags out — plus the hooks into notifications and records so nobody re-labels the same latch in a spreadsheet.
        </p>

        <ol class="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <li v-for="step in steps" :key="step.n" class="sc-step">
            <span class="sc-step-n">{{ step.n }}</span>
            <p class="sc-step-title">{{ step.title }}</p>
            <p class="sc-step-body">{{ step.body }}</p>
          </li>
          <li class="sc-step sc-step-human">
            <span class="sc-step-n">Then</span>
            <p class="sc-step-title">Staff fix it.</p>
            <p class="sc-step-body">That part stays human. On purpose.</p>
          </li>
        </ol>
      </div>

      <div v-reveal class="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
        <a :href="site" target="_blank" rel="noreferrer" class="sc-btn">
          schoolcheck.app
          <span aria-hidden="true">→</span>
        </a>
        <p class="text-sm font-medium text-[var(--sc-ink-faint)]">
          One tap on the check. Tags on the finding. Proof for the district.
        </p>
      </div>
    </div>
  </article>
</template>
