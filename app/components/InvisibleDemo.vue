<script setup lang="ts">
const sources = [
  { icon: 'i-lucide-mail', label: 'Inbox' },
  { icon: 'i-lucide-sheet', label: 'Sheet' },
  { icon: 'i-lucide-calendar', label: 'Calendar' }
]
</script>

<template>
  <div v-reveal class="mt-16 grid gap-10 md:grid-cols-2 md:gap-8">
    <figure class="demo-panel">
      <div class="demo-window">
        <div class="demo-chrome">
          <span class="demo-dots" aria-hidden="true"><i /><i /><i /></span>
          <span>Ask the system™</span>
        </div>
        <div class="demo-body">
          <p class="demo-user">
            <span class="demo-type">what were last week’s numbers?</span>
          </p>
          <p class="demo-bot" role="img" aria-label="The bot is still typing">
            <i /><i /><i />
          </p>
          <p class="demo-nudge">
            Try rephrasing your question for better results.
          </p>
          <div class="demo-input" aria-hidden="true">
            Type a prompt<span class="demo-caret" />
          </div>
        </div>
      </div>
      <figcaption class="demo-caption">
        <span class="text-ink-faint" aria-hidden="true">×</span>
        The chatbot way. <span class="text-ink-faint">Still waiting.</span>
      </figcaption>
    </figure>

    <figure class="demo-panel">
      <div class="demo-window">
        <div class="demo-chrome">
          <span class="demo-dots" aria-hidden="true"><i /><i /><i /></span>
          <span>Monday · 8:02 AM</span>
        </div>
        <div class="demo-body">
          <div class="demo-sources" aria-hidden="true">
            <span v-for="source in sources" :key="source.label" class="demo-chip">
              <UIcon :name="source.icon" class="size-3" />
              {{ source.label }}
            </span>
          </div>
          <svg class="demo-flow" viewBox="0 0 300 40" preserveAspectRatio="none" aria-hidden="true">
            <path d="M50 0 C 50 22, 150 16, 150 40" />
            <path class="is-hot" d="M150 0 L150 40" />
            <path d="M250 0 C 250 22, 150 16, 150 40" />
          </svg>
          <ul class="demo-feed">
            <li style="--i: 0">
              <svg class="demo-check" viewBox="0 0 20 20" aria-hidden="true">
                <path pathLength="1" d="M4 10.5l4 4 8-9" />
              </svg>
              <span class="min-w-0">
                <span class="block truncate text-sm text-ink">Quote #1042 drafted</span>
                <span class="block truncate font-mono text-[0.6875rem] text-ink-faint">Hill Country Roofing</span>
              </span>
              <span class="font-mono text-xs text-ink">$12,400</span>
            </li>
            <li style="--i: 1">
              <svg class="demo-check" viewBox="0 0 20 20" aria-hidden="true">
                <path pathLength="1" d="M4 10.5l4 4 8-9" />
              </svg>
              <span class="min-w-0">
                <span class="block truncate text-sm text-ink">Booking on the calendar</span>
                <span class="block truncate font-mono text-[0.6875rem] text-ink-faint">Crew B · on site</span>
              </span>
              <span class="font-mono text-xs text-ink">Thu 9:30</span>
            </li>
            <li style="--i: 2">
              <svg class="demo-check" viewBox="0 0 20 20" aria-hidden="true">
                <path pathLength="1" d="M4 10.5l4 4 8-9" />
              </svg>
              <span class="min-w-0">
                <span class="block truncate text-sm text-ink">Last week: $48.2k</span>
                <span class="block truncate font-mono text-[0.6875rem] text-accent">▲ 12% vs. prior</span>
              </span>
              <svg class="demo-spark" viewBox="0 0 60 20" aria-hidden="true">
                <path pathLength="1" d="M1 16 L10 13 L19 15 L28 9 L37 11 L46 5 L59 2" />
              </svg>
            </li>
          </ul>
          <p class="mt-auto flex items-center gap-2 font-mono text-[0.6875rem] text-ink-faint">
            <span class="pulse-dot inline-block size-1.5 rounded-full bg-accent" aria-hidden="true" />
            No prompt. Nobody asked.
          </p>
        </div>
      </div>
      <figcaption class="demo-caption">
        <span class="text-accent" aria-hidden="true">→</span>
        The invisible way. <span class="text-ink-faint">Already on screen.</span>
      </figcaption>
    </figure>
  </div>
</template>
