<script setup lang="ts">
const props = withDefaults(defineProps<{
  to: number
  from?: number
  duration?: number
}>(), {
  from: 0,
  duration: 1800
})

const el = ref<HTMLElement | null>(null)
const value = ref(props.to)
let observer: IntersectionObserver | null = null
let frame = 0

function run() {
  const start = performance.now()
  const tick = (now: number) => {
    const p = Math.min(1, (now - start) / props.duration)
    const eased = 1 - Math.pow(1 - p, 4)
    value.value = Math.round(props.from + (props.to - props.from) * eased)
    if (p < 1) {
      frame = requestAnimationFrame(tick)
    }
  }
  frame = requestAnimationFrame(tick)
}

onMounted(() => {
  if (!el.value || typeof IntersectionObserver === 'undefined') {
    return
  }
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }
  value.value = props.from
  observer = new IntersectionObserver(([entry]) => {
    if (entry?.isIntersecting) {
      observer?.disconnect()
      run()
    }
  }, { threshold: 0.6 })
  observer.observe(el.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  cancelAnimationFrame(frame)
})
</script>

<template>
  <span ref="el" class="tabular-nums">{{ value }}</span>
</template>
