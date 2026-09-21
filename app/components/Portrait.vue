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
    <figcaption v-if="caption" class="portrait-caption">
      {{ caption }}
    </figcaption>
  </figure>
</template>
