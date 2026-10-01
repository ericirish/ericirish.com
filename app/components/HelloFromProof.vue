<script setup lang="ts">
import { caseStudies } from '#shared/site'

const study = caseStudies.helloFrom
const site = study.url
const steps = study.steps
</script>

<template>
  <article class="hf">
    <div class="frame px-6 py-20 md:px-10 md:py-28">
      <!-- 1. Who they are -->
      <header v-reveal class="max-w-3xl">
        <p class="hf-kicker">{{ study.kicker }}</p>
        <h2 class="mt-6">
          <a :href="site" target="_blank" rel="noreferrer" class="hf-brand-link">
            <img
              src="/hellofrom-horizontal.svg"
              alt="HelloFrom"
              width="1915"
              height="469"
              class="hf-logo"
            >
          </a>
        </h2>
        <p class="hf-display mt-6 text-2xl font-semibold leading-snug tracking-tight text-pretty md:text-4xl">
          {{ study.summary }}
        </p>
      </header>

      <!-- 2. The postcard -->
      <div class="hf-postcards mt-14 grid gap-10 lg:grid-cols-2 lg:gap-12">
        <figure v-reveal>
          <div class="hf-card hf-card-front">
            <img
              src="https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?w=1600&q=80"
              alt="Ocean shoreline at sunset"
            >
            <div class="hf-front-veil" aria-hidden="true" />
            <p class="hf-hand hf-front-script" aria-hidden="true">hellofrom</p>
          </div>
          <figcaption class="hf-caption">
            <strong>The front.</strong> Their own place, their own photo.
          </figcaption>
        </figure>

        <figure v-reveal class="reveal-delay-1">
          <div class="hf-card hf-card-back">
            <div class="hf-back">
              <div>
                <p class="hf-script">
                  Hi — we made you a postcard. That’s your place on the front. Scan the code and it’s yours to keep sending.
                </p>
                <p class="hf-script mt-4">— HelloFrom</p>
              </div>
              <div class="hf-back-divider" aria-hidden="true" />
              <div class="hf-back-address">
                <div class="hf-stamp" aria-hidden="true">
                  <span class="hf-hand">hf</span>
                </div>
                <svg class="hf-postmark" viewBox="0 0 120 68" aria-hidden="true">
                  <circle class="draw" pathLength="1" cx="34" cy="34" r="26" />
                  <circle class="draw" pathLength="1" cx="34" cy="34" r="20" />
                  <text x="34" y="31" text-anchor="middle">MAIN ST</text>
                  <text x="34" y="42" text-anchor="middle">SEP 18</text>
                  <path class="draw" pathLength="1" d="M62 20c8-5 14 5 22 0s14 5 22 0 10 4 14 1" />
                  <path class="draw" pathLength="1" d="M64 30c8-5 14 5 22 0s14 5 22 0 10 4 14 1" />
                  <path class="draw" pathLength="1" d="M64 40c8-5 14 5 22 0s14 5 22 0 10 4 14 1" />
                  <path class="draw" pathLength="1" d="M62 50c8-5 14 5 22 0s14 5 22 0 10 4 14 1" />
                </svg>
                <div class="hf-address-lines" aria-hidden="true">
                  <p class="hf-script">The owner</p>
                  <p class="hf-script">Your place</p>
                  <p class="hf-script">Main Street</p>
                </div>
                <p class="hf-claim">
                  <UIcon name="i-ph-qr-code" class="size-4" aria-hidden="true" />
                  claim your page
                </p>
              </div>
            </div>
          </div>
          <figcaption class="hf-caption">
            <strong>The back.</strong> Written, laid out, and addressed by an agent.
          </figcaption>
        </figure>
      </div>

      <!-- 3. What I did -->
      <div v-reveal class="mt-20 md:mt-24">
        <p class="hf-kicker">How I helped</p>
        <p class="hf-display mt-4 max-w-2xl text-2xl font-semibold leading-snug tracking-tight text-pretty md:text-3xl">
          {{ study.helped }}
        </p>

        <ol class="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <li v-for="(step, i) in steps" :key="step.n" class="hf-step" :style="{ '--i': i }">
            <span class="hf-step-n">{{ step.n }}</span>
            <p class="hf-step-title">{{ step.title }}</p>
            <p class="hf-step-body">{{ step.body }}</p>
          </li>
          <li class="hf-step hf-step-human" style="--i: 3">
            <span class="hf-step-n">Then</span>
            <p class="hf-step-title">{{ study.then.title }}</p>
            <p class="hf-step-body">{{ study.then.body }}</p>
          </li>
        </ol>
      </div>

      <!-- 4. Link -->
      <div v-reveal class="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
        <a :href="site" target="_blank" rel="noreferrer" class="hf-btn">
          {{ study.linkLabel }}
          <span aria-hidden="true">→</span>
        </a>
        <p class="text-sm font-medium text-[var(--hf-ink-muted)]">
          {{ study.footnote }}
        </p>
      </div>
    </div>
  </article>
</template>
