<script setup lang="ts">
const HUB = { x: 420, y: 64 }

const spokes = Array.from({ length: 12 }, (_, i) => {
  const a = (i / 12) * Math.PI * 2
  const p = (r: number) => `${(HUB.x + r * Math.cos(a)).toFixed(1)} ${(HUB.y + r * Math.sin(a)).toFixed(1)}`
  return `M${p(6)}L${p(22)}`
}).join('')

const stars = [
  { cx: -450, cy: 40, r: 1.2, d: '2.4s' },
  { cx: -200, cy: 26, r: 1.5, d: '0.9s' },
  { cx: 90, cy: 34, r: 1.4, d: '0s' },
  { cx: 220, cy: 60, r: 1.1, d: '1.2s' },
  { cx: 330, cy: 22, r: 1.6, d: '2.1s' },
  { cx: 570, cy: 30, r: 1.2, d: '0.6s' },
  { cx: 690, cy: 64, r: 1.4, d: '2.8s' },
  { cx: 960, cy: 28, r: 1.5, d: '1.7s' },
  { cx: 1110, cy: 54, r: 1.1, d: '0.3s' },
  { cx: 1350, cy: 36, r: 1.3, d: '1.5s' },
  { cx: 1600, cy: 22, r: 1.5, d: '3.1s' },
  { cx: 1750, cy: 58, r: 1.1, d: '0.4s' }
]

const glowId = useId()

const posts = Array.from({ length: 6 }, (_, i) => 560 + i * 44)

const farRidge = 'M-600 104C-450 92-300 120-150 112S-40 110 0 118C110 92 230 96 340 110S560 84 700 98 930 122 1050 104 1160 92 1200 96S1400 118 1550 104 1700 96 1800 110'
const midRidge = 'M-600 140C-450 128-300 150-150 146S-60 156 0 152C140 134 290 120 420 121 540 122 650 142 800 140S1080 126 1200 134S1400 150 1550 142 1800 136'
const near = 'M-600 166C-400 160-200 172 0 170C200 162 400 168 600 164S1000 160 1200 166S1600 170 1800 164V180H-600Z'
</script>

<template>
  <!-- Scene is drawn in a 1200-wide band, extended 600 units each side so wide screens crop the sides, never the sky. -->
  <svg class="hills" viewBox="0 0 2400 180" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
    <defs>
      <radialGradient :id="glowId">
        <stop offset="0.45" style="stop-color: var(--color-brass); stop-opacity: 0.5" />
        <stop offset="1" style="stop-color: var(--color-brass); stop-opacity: 0" />
      </radialGradient>
    </defs>

    <g transform="translate(600 0)">
      <circle
        v-for="star in stars"
        :key="star.cx"
        class="hills-star"
        :cx="star.cx"
        :cy="star.cy"
        :r="star.r"
        :style="{ animationDelay: star.d }"
      />

      <circle class="hills-sun-glow" cx="800" cy="116" r="70" :fill="`url(#${glowId})`" />
      <circle class="hills-sun" cx="800" cy="116" r="30" />

      <path class="hills-far" :d="`${farRidge}V180H-600Z`" />
      <path class="hills-ridge" :d="farRidge" />

      <g class="windmill">
        <path d="M410 122 417 72M430 122 423 72M412 110 427 97M428 110 413 97M413 97 425 84M427 97 415 84M412 72H428M420 72V64" />
        <path d="M420 64H446M446 58 463 61V69L446 66Z" />
        <g class="windmill-wheel">
          <circle :cx="HUB.x" :cy="HUB.y" r="22" />
          <circle :cx="HUB.x" :cy="HUB.y" r="6" />
          <path :d="spokes" />
        </g>
      </g>

      <path class="hills-mid" :d="`${midRidge}V180H-600Z`" />
      <path class="hills-ridge" :d="midRidge" />

      <path class="hills-near" :d="near" />

      <g class="fence">
        <path v-for="x in posts" :key="x" :d="`M${x} 165V150`" />
        <path d="M556 154H784M556 159H784" />
      </g>

      <g class="tumbleweed-x">
        <g transform="translate(0 155)">
          <g class="tumbleweed-y">
            <g class="tumbleweed tumbleweed-r">
              <circle r="9" />
              <path d="M-8-3C-3-9 5-8 8-2M-7 4C-2-2 4 6 8 3M-4-8C2-2-2 4 3 8M-1-9C-6-1 2 3-3 8M5-7C1 0 7 3 2 8M-9 1C-4 3 0-4 6-6" />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>
