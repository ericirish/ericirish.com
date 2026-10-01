<script setup lang="ts">
withDefaults(defineProps<{
  size?: 'mark' | 'hero'
  caption?: string
  priority?: boolean
}>(), {
  size: 'hero',
  caption: '',
  priority: false
})

const sealPathId = useId()

const sparkles = [
  { style: { top: '6%', right: '-0.75rem', width: '1.15rem', height: '1.15rem', animationDelay: '1.6s' } },
  { style: { top: '-0.5rem', left: '14%', width: '0.75rem', height: '0.75rem', animationDelay: '2.9s' } },
  { style: { bottom: '34%', right: '-1.5rem', width: '0.85rem', height: '0.85rem', animationDelay: '4.2s' } }
]
</script>

<template>
  <figure :class="['portrait', `portrait--${size}`]">
    <div class="portrait-ring">
      <img
        src="/EricIrish.jpg"
        alt="Eric Irish in a cowboy hat, suede jacket, and a Texas belt buckle"
        width="1201"
        height="1800"
        :fetchpriority="priority ? 'high' : undefined"
        decoding="async"
      >
    </div>

    <template v-if="size === 'hero'">
      <svg
        v-for="(sparkle, i) in sparkles"
        :key="i"
        class="sparkle"
        :style="sparkle.style"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path fill="currentColor" d="M12 0C13 8 16 11 24 12 16 13 13 16 12 24 11 16 8 13 0 12 8 11 11 8 12 0Z" />
      </svg>

      <svg class="portrait-seal" viewBox="0 0 120 120" aria-hidden="true">
        <defs>
          <path :id="sealPathId" d="M60 60m-47 0a47 47 0 1 1 94 0a47 47 0 1 1-94 0" />
        </defs>
        <circle cx="60" cy="60" r="58" stroke-width="1.5" style="fill: var(--color-void); stroke: var(--color-brass)" />
        <circle cx="60" cy="60" r="35" fill="none" stroke-width="0.75" stroke-dasharray="2 3" style="stroke: var(--color-brass)" />
        <g class="portrait-seal-text">
          <text
            font-size="8.5"
            letter-spacing="1.4"
            style="fill: var(--color-ink); font-family: var(--font-mono)"
          >
            <textPath :href="`#${sealPathId}`" textLength="292" lengthAdjust="spacing">ERIC IRISH • AUSTIN, TEXAS • SINCE 2009 •</textPath>
          </text>
        </g>
        <polygon
          class="portrait-seal-star"
          style="fill: var(--color-brass)"
          points="60,40 64.7,53.53 79.02,53.82 67.61,62.47 71.76,76.18 60,68 48.24,76.18 52.39,62.47 40.98,53.82 55.3,53.53"
        />
      </svg>
    </template>

    <figcaption v-if="caption" class="portrait-caption">
      {{ caption }}
    </figcaption>
  </figure>
</template>
