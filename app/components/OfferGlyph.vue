<script setup lang="ts">
defineProps<{
  kind: 'lasso' | 'gears' | 'flow' | 'badge'
}>()

const f = (v: number) => Number(v.toFixed(1))
const polar = (cx: number, cy: number, r: number, a: number) => `${f(cx + r * Math.cos(a))} ${f(cy + r * Math.sin(a))}`

function circle(cx: number, cy: number, r: number) {
  return `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${r * 2} 0a${r} ${r} 0 1 0 ${-r * 2} 0`
}

function gear(cx: number, cy: number, outer: number, inner: number, teeth: number) {
  const step = (Math.PI * 2) / teeth
  const pts: string[] = []
  for (let i = 0; i < teeth; i++) {
    const a = i * step
    pts.push(
      polar(cx, cy, inner, a),
      polar(cx, cy, outer, a + step * 0.12),
      polar(cx, cy, outer, a + step * 0.42),
      polar(cx, cy, inner, a + step * 0.55)
    )
  }
  return `M${pts.join('L')}Z`
}

function sheriffStar(cx: number, cy: number, outer: number, inner: number) {
  const pts: string[] = []
  const tips: string[] = []
  for (let k = 0; k < 6; k++) {
    const a = ((-90 + k * 60) * Math.PI) / 180
    const b = ((-60 + k * 60) * Math.PI) / 180
    pts.push(polar(cx, cy, outer, a), polar(cx, cy, inner, b))
    const [x, y] = polar(cx, cy, outer + 1.5, a).split(' ').map(Number)
    tips.push(circle(x!, y!, 2.4))
  }
  return { star: `M${pts.join('L')}Z`, tips: tips.join('') }
}

const gearBig = gear(21, 33, 15, 11.5, 9)
const gearSmall = gear(40.5, 16, 9.5, 7, 6)
const badge = sheriffStar(28, 28, 21, 11)
</script>

<template>
  <svg class="glyph" viewBox="0 0 56 56" aria-hidden="true">
    <g v-if="kind === 'lasso'" class="glyph-sway">
      <path class="draw" pathLength="1" d="M31 30C13 33 2 25 5 15 8 5 30 3 41 9c8 5 4 17-10 21 3 3 7 4 7 8s-3 6 0 9 7 3 9 5" />
      <path class="draw" pathLength="1" d="M30 26.5C17 28.5 9 23 10.5 16" />
      <path class="draw" pathLength="1" d="M19 13h11v9H19z" />
    </g>

    <template v-else-if="kind === 'gears'">
      <g class="glyph-spin">
        <path class="draw" pathLength="1" :d="gearBig" />
        <path class="draw" pathLength="1" :d="circle(21, 33, 4)" />
      </g>
      <g class="glyph-spin glyph-spin--rev">
        <path class="draw" pathLength="1" :d="gearSmall" />
        <path class="draw" pathLength="1" :d="circle(40.5, 16, 2.5)" />
      </g>
    </template>

    <template v-else-if="kind === 'flow'">
      <path class="draw" pathLength="1" :d="circle(8, 12, 4)" />
      <path class="draw" pathLength="1" :d="circle(8, 44, 4)" />
      <path class="glyph-march" d="M12 12c10 0 8 16 18 16M12 44c10 0 8-16 18-16" />
      <path class="draw" pathLength="1" d="M32 20h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H32a2 2 0 0 1-2-2V22a2 2 0 0 1 2-2zM41 36v6M35 42h12" />
      <path
        class="glyph-pulse"
        fill="currentColor"
        stroke="none"
        d="M41 23.5c.4 2.9 1.6 4.1 4.5 4.5-2.9.4-4.1 1.6-4.5 4.5-.4-2.9-1.6-4.1-4.5-4.5 2.9-.4 4.1-1.6 4.5-4.5z"
      />
    </template>

    <g v-else class="glyph-badge">
      <path class="draw" pathLength="1" :d="badge.star" />
      <path class="draw" pathLength="1" :d="badge.tips" />
      <path class="draw" pathLength="1" :d="circle(28, 28, 5.5)" />
    </g>
  </svg>
</template>
