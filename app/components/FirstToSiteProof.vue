<script setup lang="ts">
import { caseStudies } from '#shared/site'

const study = caseStudies.firstToSite
const site = study.url
const steps = study.steps
</script>

<template>
  <article class="fts border-t border-black">
    <div class="frame px-6 py-20 md:px-10 md:py-28">
      <header v-reveal class="max-w-3xl">
        <p class="fts-kicker">{{ study.kicker }}</p>
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
          {{ study.display }}
        </p>
        <p class="mt-5 max-w-xl text-base font-medium leading-relaxed text-[var(--fts-ink-muted)] text-pretty md:text-lg">
          {{ study.summary }}
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
              <svg class="fts-radar" viewBox="0 0 100 100" aria-hidden="true">
                <defs>
                  <linearGradient id="fts-sweep" x1="50" y1="6" x2="12" y2="28" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#f97316" stop-opacity="0.55" />
                    <stop offset="1" stop-color="#f97316" stop-opacity="0" />
                  </linearGradient>
                </defs>
                <g fill="none" stroke="#262626" stroke-width="1.5">
                  <circle cx="50" cy="50" r="44" />
                  <circle cx="50" cy="50" r="29" />
                  <circle cx="50" cy="50" r="14" />
                  <path d="M50 6v88M6 50h88" />
                </g>
                <g class="fts-radar-sweep">
                  <path d="M50 50 50 6A44 44 0 0 0 11.9 28Z" fill="url(#fts-sweep)" />
                  <path d="M50 50V6" stroke="#f97316" stroke-width="1.5" />
                </g>
                <circle class="fts-radar-blip" cx="72.6" cy="66.5" r="4" fill="#f97316" />
              </svg>
              <p class="fts-alert-meta pr-20 sm:pr-24">
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
          {{ study.helped }}
        </p>

        <ol class="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <li v-for="(step, i) in steps" :key="step.n" class="fts-step" :style="{ '--i': i }">
            <span class="fts-step-n">{{ step.n }}</span>
            <p class="fts-step-title">{{ step.title }}</p>
            <p class="fts-step-body">{{ step.body }}</p>
          </li>
          <li class="fts-step fts-step-human" style="--i: 3">
            <span class="fts-step-n">Then</span>
            <p class="fts-step-title">{{ study.then.title }}</p>
            <p class="fts-step-body">{{ study.then.body }}</p>
          </li>
        </ol>

        <p class="mt-10 max-w-2xl text-base font-medium leading-relaxed text-[var(--fts-ink-muted)] text-pretty md:text-lg">
          {{ study.next }}
        </p>
      </div>

      <div v-reveal class="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
        <a :href="site" target="_blank" rel="noreferrer" class="fts-btn">
          {{ study.linkLabel }}
          <span aria-hidden="true">→</span>
        </a>
        <p class="text-sm font-medium text-[var(--fts-ink-faint)]">
          {{ study.footnote }}
        </p>
      </div>
    </div>
  </article>
</template>
