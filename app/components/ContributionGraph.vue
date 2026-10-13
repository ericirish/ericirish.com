<script setup lang="ts">
import data from '../../shared/contributions.json'

type Cell = {
  label: string
  count: number
  level: number
}

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const counts = data.counts
const seriesStart = Date.UTC(2012, 0, 1)
const seriesEnd = Date.UTC(2026, 9, 13)

function monthCount(year: number, month: number) {
  const start = Date.UTC(year, month, 1)
  if (start > seriesEnd) return null
  const end = Math.min(Date.UTC(year, month + 1, 0), seriesEnd)
  let total = 0
  for (let time = start; time <= end; time += 86400000) {
    const index = Math.round((time - seriesStart) / 86400000)
    total += counts[index] ?? 0
  }
  return total
}

const totals = []
for (let year = 2012; year <= 2026; year++) {
  for (let month = 0; month < 12; month++) {
    const count = monthCount(year, month)
    if (count) totals.push(count)
  }
}
totals.sort((a, b) => a - b)

function percentile(p: number) {
  const index = Math.min(totals.length - 1, Math.round((p / 100) * (totals.length - 1)))
  return totals[index] ?? 0
}

const mild = percentile(25)
const mid = percentile(50)
const strong = percentile(75)

function level(count: number) {
  if (count <= 0) return 0
  if (count <= mild) return 1
  if (count <= mid) return 2
  if (count <= strong) return 3
  return 4
}

const years = Array.from({ length: 2026 - 2012 + 1 }, (_, index) => {
  const year = 2012 + index
  const months: (Cell | null)[] = []
  for (let month = 0; month < 12; month++) {
    const count = monthCount(year, month)
    if (count === null) {
      months.push(null)
      continue
    }
    months.push({
      label: `${monthNames[month]} ${year}`,
      count,
      level: level(count)
    })
  }
  return { year, months }
})

const yearSums = years.map(year => ({
  total: year.months.reduce((sum, cell) => sum + (cell?.count ?? 0), 0),
  months: year.months.filter(cell => cell).length,
  year: year.year
}))
const contributionTotal = yearSums.reduce((sum, year) => sum + year.total, 0)
const recentYears = yearSums.filter(year => year.year >= 2019)
const recentTotal = recentYears.reduce((sum, year) => sum + year.total, 0)
const recentMonths = recentYears.reduce((sum, year) => sum + year.months, 0)

const stats = [
  { value: contributionTotal, label: 'Contributions since 2012' },
  { value: Math.round(recentTotal / recentYears.length), label: 'A year since 2019' },
  { value: Math.round(recentTotal / recentMonths), label: 'A month since 2019' }
]

const active = ref<Cell | null>(null)

function caption(cell: Cell) {
  if (cell.count === 0) return `Nothing in ${cell.label}.`
  const noun = cell.count === 1 ? 'contribution' : 'contributions'
  return `${cell.count.toLocaleString('en-US')} ${noun} in ${cell.label}.`
}
</script>

<template>
  <figure>
    <div class="mb-10 grid gap-8 sm:grid-cols-3 sm:gap-6">
      <p v-for="stat in stats" :key="stat.label">
        <span class="block font-display text-6xl leading-none tracking-tight text-ink md:text-7xl lg:text-8xl">
          {{ stat.value.toLocaleString('en-US') }}
        </span>
        <span class="mt-3 block font-mono text-xs text-ink-faint">{{ stat.label }}</span>
      </p>
    </div>

    <div
      class="board"
      role="img"
      aria-label="Public GitHub contributions from 2012 through October 2026. One column of months per year."
      @pointerleave="active = null"
    >
      <div v-for="year in years" :key="year.year" class="column">
        <div class="months">
          <span
            v-for="(cell, month) in year.months"
            :key="month"
            class="day"
            :class="{ 'is-pad': !cell }"
            :data-level="cell?.level"
            @pointerenter="cell && (active = cell)"
          />
        </div>
        <p class="year">
          <span class="sm:hidden">{{ String(year.year).slice(2) }}</span>
          <span class="hidden sm:inline">{{ year.year }}</span>
        </p>
      </div>
    </div>

    <figcaption class="mt-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
      <p class="font-mono text-xs" :class="active ? 'text-ink' : 'text-ink-faint'">
        {{ active ? caption(active) : 'Each square is a month.' }}
      </p>
      <p class="flex items-center gap-1 font-mono text-[0.6875rem] text-ink-faint">
        <span>Less</span>
        <span v-for="n in 5" :key="n" class="day legend" :data-level="n - 1" />
        <span class="ml-1">More</span>
      </p>
    </figcaption>
  </figure>
</template>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(15, minmax(0, 1fr));
  gap: 0.35rem 0.4rem;
  width: min(100%, 46rem);
}

.column {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 0.55rem;
}

.months {
  display: grid;
  gap: 3px;
}

.year {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  line-height: 1;
  text-align: center;
  font-variant-numeric: tabular-nums;
  color: var(--color-ink-faint);
}

.day {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 2px;
  background: #e4dcc8;
}

.legend {
  width: 11px;
  height: 11px;
}

.day[data-level="1"] { background: #9be9a8; }
.day[data-level="2"] { background: #40c463; }
.day[data-level="3"] { background: #30a14e; }
.day[data-level="4"] { background: #216e39; }

html.dark .day { background: #241f1a; }
html.dark .day[data-level="1"] { background: #0e4429; }
html.dark .day[data-level="2"] { background: #006d32; }
html.dark .day[data-level="3"] { background: #26a641; }
html.dark .day[data-level="4"] { background: #39d353; }

@media (prefers-color-scheme: dark) {
  html:not(.light) .day { background: #241f1a; }
  html:not(.light) .day[data-level="1"] { background: #0e4429; }
  html:not(.light) .day[data-level="2"] { background: #006d32; }
  html:not(.light) .day[data-level="3"] { background: #26a641; }
  html:not(.light) .day[data-level="4"] { background: #39d353; }
}

.day:not(.is-pad):hover {
  outline: 1px solid var(--color-ink);
  outline-offset: 1px;
}

.is-pad {
  background: transparent !important;
  pointer-events: none;
}
</style>
