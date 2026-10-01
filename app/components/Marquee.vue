<script setup lang="ts">
const items = [
  'No chatbots',
  'Working software',
  'No prompts',
  'Invisible AI',
  'No strategy decks',
  'One person in Austin',
  'No year-long contracts',
  'One person, one phone number'
]
</script>

<template>
  <div class="marquee border-b border-line py-5 md:py-6">
    <div class="marquee-track">
      <ul
        v-for="copy in 2"
        :key="copy"
        class="marquee-group"
        :aria-hidden="copy === 2 ? 'true' : undefined"
      >
        <li
          v-for="(item, i) in items"
          :key="item"
          class="flex items-center gap-9 whitespace-nowrap font-display text-2xl tracking-tight md:text-3xl"
          :class="i % 2 ? 'text-ink' : 'italic text-ink-muted'"
        >
          {{ item }}
          <span class="star" aria-hidden="true" />
        </li>
      </ul>
    </div>
  </div>
</template>
