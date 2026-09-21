<script setup lang="ts">
const site = 'https://austin.firsttosite.com'

const steps = [
  {
    n: '01',
    title: 'Reads the permit',
    body: 'Every Austin filing, the morning it drops. No one is hunting the city’s website.'
  },
  {
    n: '02',
    title: 'Jev classifies it',
    body: 'Instant. Trade, scope, scale. A roof is not a remodel. No one typed a prompt.'
  },
  {
    n: '03',
    title: 'Sends the alert',
    body: 'Email or text. Address, what it is, how big. Already in their pocket.'
  }
]
</script>

<template>
  <article class="fts border-t border-black">
    <div class="frame px-6 py-20 md:px-10 md:py-28">
      <header v-reveal class="max-w-3xl">
        <p class="fts-kicker">Case study · FirstToSite</p>
        <h2 class="mt-6">
          <a :href="site" target="_blank" rel="noreferrer" class="fts-mark">
            <span class="fts-f" aria-hidden="true">F</span>
            <span>
              <span class="fts-word">FirstToSite</span>
              <span class="fts-city"> Austin</span>
            </span>
          </a>
        </h2>
        <p class="fts-display mt-6 max-w-[20ch] text-2xl leading-[1.05] text-pretty md:text-4xl">
          New permits, alerted to you first.
        </p>
        <p class="mt-5 max-w-xl text-base font-medium leading-relaxed text-[var(--fts-ink-muted)] text-pretty md:text-lg">
          Every Austin municipal permit, scored by trade, scope, and scale. A contractor sets an alert. The match arrives. They reach the job before the crowd.
        </p>
      </header>

      <div class="fts-cards mt-14 grid gap-10 lg:grid-cols-2 lg:gap-12">
        <figure v-reveal>
          <div class="fts-card fts-card-photo">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80"
              alt="Crew on a jobsite in hard hats"
            >
            <p class="fts-card-photo-label">Austin · last 14 days</p>
          </div>
          <figcaption class="fts-caption">
            <strong>The job.</strong> Two thousand permits a fortnight. The work is picking the right one.
          </figcaption>
        </figure>

        <figure v-reveal class="reveal-delay-1">
          <div class="fts-card fts-card-alert">
            <div class="fts-alert">
              <p class="fts-alert-meta">
                <span>Sep 18</span>
                <span class="fts-pill">Match</span>
                <span>Residential</span>
              </p>
              <p class="fts-alert-addr">8204 Wexford Dr</p>
              <div class="fts-alert-tags">
                <span class="fts-tag">General / Carpentry</span>
                <span class="fts-tag">Component replacement</span>
              </div>
              <div class="fts-scale">
                <p class="fts-alert-meta">Job scale · 25 / 100</p>
                <div class="fts-scale-bar" aria-hidden="true"><span /></div>
              </div>
              <p class="fts-alert-foot">Alert sent · 2 min after filing</p>
            </div>
          </div>
          <figcaption class="fts-caption">
            <strong>The alert.</strong> Jev classified it the moment it filed. Nobody asked a chatbot.
          </figcaption>
        </figure>
      </div>

      <div v-reveal class="mt-20 md:mt-24">
        <p class="fts-kicker">How I helped</p>
        <p class="mt-4 max-w-2xl text-xl font-semibold leading-snug tracking-tight text-pretty md:text-2xl">
          They already had the permit feed. They needed the right job in a contractor’s pocket, not a spreadsheet hunt. I helped them plug in Jev — trade, scope, scale the moment each filing lands. No prompt. No chat widget.
        </p>

        <ol class="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <li v-for="step in steps" :key="step.n" class="fts-step">
            <span class="fts-step-n">{{ step.n }}</span>
            <p class="fts-step-title">{{ step.title }}</p>
            <p class="fts-step-body">{{ step.body }}</p>
          </li>
          <li class="fts-step fts-step-human">
            <span class="fts-step-n">Then</span>
            <p class="fts-step-title">They call first.</p>
            <p class="fts-step-body">That part stays human. On purpose.</p>
          </li>
        </ol>

        <p class="mt-10 max-w-2xl text-base font-medium leading-relaxed text-[var(--fts-ink-muted)] text-pretty md:text-lg">
          Next with them: automated prospecting — same invisible stack, pointed at who’s worth calling before the crowd shows up.
        </p>
      </div>

      <div v-reveal class="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
        <a :href="site" target="_blank" rel="noreferrer" class="fts-btn">
          austin.firsttosite.com
          <span aria-hidden="true">→</span>
        </a>
        <p class="text-sm font-medium text-[var(--fts-ink-faint)]">
          Jev scores the permit. The contractor gets the match.
        </p>
      </div>
    </div>
  </article>
</template>
