<script setup lang="ts">
const site = 'https://hellofrom.to'

const steps = [
  {
    n: '01',
    title: 'Finds the place',
    body: 'Research and photos. No spreadsheet, no list to work through.'
  },
  {
    n: '02',
    title: 'Writes the note',
    body: 'First person, in their voice, about that one specific place.'
  },
  {
    n: '03',
    title: 'Styles the card',
    body: 'Photo, layout, the look of the thing. No designer in the queue.'
  }
]
</script>

<template>
  <article class="hf">
    <div class="frame px-6 py-20 md:px-10 md:py-28">
      <!-- 1. Who they are -->
      <header v-reveal class="max-w-3xl">
        <p class="hf-kicker">Case study · HelloFrom</p>
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
          A postcard company. A guest scans a code at the counter, writes a note on their phone, and HelloFrom prints it and mails it. Nothing for the place to stock.
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
          The postcards were already working. They needed the next account without another hire. I wired agents into prospecting — find the place, write the note, style the card — invisible work, not another tool to log into.
        </p>

        <ol class="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <li v-for="step in steps" :key="step.n" class="hf-step">
            <span class="hf-step-n">{{ step.n }}</span>
            <p class="hf-step-title">{{ step.title }}</p>
            <p class="hf-step-body">{{ step.body }}</p>
          </li>
          <li class="hf-step hf-step-human">
            <span class="hf-step-n">Then</span>
            <p class="hf-step-title">A person hits send.</p>
            <p class="hf-step-body">That part stays human. On purpose.</p>
          </li>
        </ol>
      </div>

      <!-- 4. Link -->
      <div v-reveal class="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
        <a :href="site" target="_blank" rel="noreferrer" class="hf-btn">
          hellofrom.to
          <span aria-hidden="true">→</span>
        </a>
        <p class="text-sm font-medium text-[var(--hf-ink-muted)]">
          Their team still approves. The machine does the first pass.
        </p>
      </div>
    </div>
  </article>
</template>
