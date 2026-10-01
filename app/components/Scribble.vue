<script setup lang="ts">
withDefaults(defineProps<{
  kind?: 'underline' | 'circle'
  /** Draw on page load instead of waiting for the nearest v-reveal ancestor. */
  auto?: boolean
  delay?: number
}>(), {
  kind: 'underline',
  auto: false,
  delay: 0
})
</script>

<template>
  <span
    :class="['scribble', `scribble--${kind}`, { 'scribble--auto': auto }]"
    :style="{ '--scribble-delay': `${delay}ms` }"
  ><slot /><svg
    v-if="kind === 'underline'"
    viewBox="0 0 200 20"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path pathLength="1" d="M3 13 C 45 5, 95 4, 140 8 S 185 14, 197 7" />
    <path pathLength="1" d="M28 17 C 70 12, 120 11, 172 14" />
  </svg><svg
    v-else
    viewBox="0 0 200 60"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path pathLength="1" d="M158 8 C 110 0, 30 4, 9 24 C -4 38, 40 56, 104 55 C 165 54, 200 40, 194 22 C 189 8, 150 2, 98 5" />
  </svg></span>
</template>
