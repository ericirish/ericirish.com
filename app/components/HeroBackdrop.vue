<script setup lang="ts">
const CX = 900
const CY = 380
const POINTS = 28

type Point = [number, number]

function ringPath(r: number, phase: number) {
  const pts: Point[] = []
  for (let k = 0; k < POINTS; k++) {
    const t = (k / POINTS) * Math.PI * 2
    const wobble = 0.09 * Math.sin(3 * t + phase)
      + 0.05 * Math.sin(5 * t - phase * 1.3)
      + 0.025 * Math.sin(2 * t + phase * 0.6)
    const rr = r * (1 + wobble)
    pts.push([CX + rr * Math.cos(t) * 1.12, CY + rr * Math.sin(t)])
  }

  const at = (i: number) => pts[(i + POINTS) % POINTS]!
  const n = (v: number) => Math.round(v)
  let d = `M${n(at(0)[0])} ${n(at(0)[1])}`
  for (let k = 0; k < POINTS; k++) {
    const [p0, p1, p2, p3] = [at(k - 1), at(k), at(k + 1), at(k + 2)]
    d += `C${n(p1[0] + (p2[0] - p0[0]) / 6)} ${n(p1[1] + (p2[1] - p0[1]) / 6)} ${n(p2[0] - (p3[0] - p1[0]) / 6)} ${n(p2[1] - (p3[1] - p1[1]) / 6)} ${n(p2[0])} ${n(p2[1])}`
  }
  return `${d}Z`
}

const rings = Array.from({ length: 15 }, (_, i) => ({
  i,
  d: ringPath(110 + i * 36, 0.5 + i * 0.11),
  dashed: i % 4 === 2
}))

const root = ref<HTMLElement | null>(null)
let frame = 0
let host: HTMLElement | null = null

function onMove(event: PointerEvent) {
  if (!host || frame) {
    return
  }
  frame = requestAnimationFrame(() => {
    frame = 0
    if (!host) {
      return
    }
    const rect = host.getBoundingClientRect()
    host.style.setProperty('--mx', (((event.clientX - rect.left) / rect.width) * 2 - 1).toFixed(3))
    host.style.setProperty('--my', (((event.clientY - rect.top) / rect.height) * 2 - 1).toFixed(3))
  })
}

onMounted(() => {
  if (!window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) {
    return
  }
  host = root.value?.parentElement ?? null
  host?.addEventListener('pointermove', onMove, { passive: true })
})

onBeforeUnmount(() => {
  host?.removeEventListener('pointermove', onMove)
  cancelAnimationFrame(frame)
})
</script>

<template>
  <div ref="root" class="hero-backdrop" aria-hidden="true">
    <div class="hero-backdrop-inner">
      <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <path
          v-for="ring in rings"
          :key="ring.i"
          :d="ring.d"
          :class="['topo-ring', { 'topo-ring--dash': ring.dashed }]"
          :style="{ '--i': ring.i }"
        />
      </svg>
    </div>
  </div>
</template>
