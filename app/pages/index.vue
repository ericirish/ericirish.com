<script setup lang="ts">
import TestimonialsSection from '~/components/TestimonialsSection.vue'

const config = useRuntimeConfig()
const siteUrl = String(config.public.siteUrl).replace(/\/$/, '')

useSeoMeta({
  title: 'Eric Irish — Yes, AI can do real work in your business. I’m the guy who actually builds it.',
  description: 'I embed with how your business already runs and build invisible AI — the right information in front of the right person, no prompt. Seventeen years in startups and ops software. Plain talk on where it helps and where it doesn’t.',
  ogTitle: 'Yes, AI can do real work in your business. I’m the guy who actually builds it.',
  ogDescription: 'Hands-on AI transformation: embedded in your processes, not a chat bubble on your homepage. One person, seventeen years, Austin TX.',
  ogUrl: siteUrl,
  ogImage: `${siteUrl}/EricIrish.jpg`
})

const asked = [
  'Months of “discovery” before anything changes',
  'To “optimize you for ChatGPT”',
  'Software that only works if someone asks it a question',
  'A monthly report full of charts',
  'A year-long contract before anything gets built'
]

const changes = [
  'Someone embedded long enough to learn how the week actually runs',
  'The facts your people keep in their heads — written where the system can use them',
  'The stuff you do by hand every day — quotes, bookings, follow-ups — turned into a flow',
  'Invisible AI on that flow: the answer already on screen, nobody typing a prompt',
  'One person you can call who will tell you no'
]

const offers = [
  {
    n: '01',
    title: 'One job off your plate',
    body: 'Quotes, bookings, follow-ups, the questions people call you about. I turn that one job into a system. AI only if it earns its keep — not because a snake-oil salesman said you needed it.',
    good: 'One thing on your week that’s eating you.',
    ends: 'That job runs. You don’t hover.'
  },
  {
    n: '02',
    title: 'Embed in how you operate',
    body: 'I work inside your process — quoting, booking, dispatch, compliance rounds, whatever actually runs the week — and wire it so information shows up where people already are. Not a side project. Not a new tool they have to remember to open.',
    good: 'Smart people repeating the same steps every morning.',
    ends: 'The flow runs. The answer was already there.'
  },
  {
    n: '03',
    title: 'Invisible AI on real work',
    body: 'The inbox, the spreadsheet, the handoff between teams — that’s where the mess is. I plug AI into those moments so your people get what they need without interviewing a chatbot.',
    good: 'You know what should be automatic. Nobody’s had time to build it.',
    ends: 'Information delivered. No prompt.'
  },
  {
    n: '04',
    title: 'Keep me around',
    body: 'After the build, I stick around part-time. When the next snake-oil salesman calls — they usually say SEO or AI — I’ll tell you if they’re selling work or a bottle. When something should be automated, I build it. When it shouldn’t, I say so.',
    good: 'After a big operational push, or a team with nobody technical.',
    ends: 'It doesn’t. That’s the point.'
  }
]

const thesisSold = [
  'A chat window so someone can “ask the system”',
  'A box where your staff has to prompt a robot for last week’s numbers',
  'A wrapper on your data that still needs a conversation',
  'A demo that looks smart until someone asks a real question'
]

const thesisRight = [
  'The quote is already drafted when they sit down',
  'The booking is already on the calendar',
  'The number they needed is already on the screen',
  'Nobody typed a prompt. The work just showed up.'
]

const timeline = [
  ['2009 — now', 'Building', 'Startups, companies, and the software that runs them.'],
  ['2015 — 2019', 'At an agency', 'Same job, more meetings.'],
  ['2019 — now', 'On my own', 'One person, no account manager. DoorCheck along the way.']
]

const rules = [
  'I start with the work that’s eating your week — not a deck about “AI strategy.”',
  'I won’t make your team prompt a robot for numbers they already needed on screen.',
  'I won’t hand you a plan I can’t build myself.',
  'I won’t sell you SEO and call it AI. That’s snake oil.'
]
</script>

<template>
  <main>
    <!-- Hero -->
    <section class="border-b border-line">
      <div class="frame grid items-center gap-12 px-6 pb-16 pt-12 md:px-10 md:pb-24 md:pt-20 lg:grid-cols-12 lg:gap-10">
        <p class="hero-enter hero-enter-1 eyebrow mb-0 flex flex-wrap items-center gap-x-3 gap-y-2 lg:col-span-7 lg:col-start-1 lg:row-start-1">
          <span>Eric Irish</span>
          <span class="star" aria-hidden="true" />
          <span>Austin, TX</span>
          <span class="star" aria-hidden="true" />
          <span>Seventeen years. No snake oil.</span>
        </p>

        <h1 class="hero-enter hero-enter-2 display max-w-[16ch] text-[clamp(2.5rem,6.6vw,5.75rem)] lg:col-span-7 lg:col-start-1 lg:row-start-2">
          Yes, AI can do real work in your business. <em>I’m the guy who actually builds it.</em>
        </h1>

        <div class="hero-enter hero-enter-3 grid gap-10 md:items-end lg:col-span-7 lg:col-start-1 lg:row-start-3">
          <p class="lede max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl">
            I embed with how you already work — not to sell you a prettier homepage. Snake-oil salesmen want buzzwords and chat bubbles; I build invisible AI that puts the answer in front of the right person before anyone has to ask. Seventeen years in startups and the systems behind them. I’ll tell you plainly where that earns its keep — and where it doesn’t.
          </p>

          <div class="flex flex-wrap gap-3">
            <a href="#offer" class="btn btn-primary w-full justify-center sm:w-auto">
              Work with me <span class="arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div class="hero-enter hero-enter-4 flex justify-center lg:col-span-5 lg:col-start-8 lg:row-span-3 lg:row-start-1 lg:justify-end">
          <Portrait
            size="hero"
            caption="That’s me. Not an AI photo."
            priority
          />
        </div>
      </div>

      <div class="border-t border-line">
        <dl class="frame grid divide-y divide-line font-mono text-[0.8125rem] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div class="px-6 py-5 md:px-10">
            <dt class="eyebrow mb-2">Years building this stuff</dt>
            <dd class="text-ink">17</dd>
          </div>
          <div class="px-6 py-5 md:px-10">
            <dt class="eyebrow mb-2">People you’ll deal with</dt>
            <dd class="text-ink">1</dd>
          </div>
          <div class="px-6 py-5 md:px-10">
            <dt class="eyebrow mb-2">Strategy decks before code</dt>
            <dd class="text-ink">0</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- Ledger -->
    <section class="border-b border-line">
      <div class="frame px-6 py-20 md:px-10 md:py-28">
        <div v-reveal class="mb-14 flex items-baseline justify-between gap-6">
          <p class="eyebrow">01 — Snake oil vs. the real work</p>
          <p class="eyebrow hidden md:block">Read across</p>
        </div>

        <div class="grid gap-14 md:grid-cols-2 md:gap-0">
          <div v-reveal class="md:border-r md:border-line md:pr-14">
            <h2 class="display text-3xl md:text-4xl">What the snake-oil salesman wants</h2>
            <ul class="mt-10 divide-y divide-line">
              <li v-for="item in asked" :key="item" class="flex items-baseline gap-5 py-4 text-ink-muted">
                <span class="font-mono text-xs text-ink-faint" aria-hidden="true">×</span>
                <span class="line-through decoration-line-strong decoration-1">{{ item }}</span>
              </li>
            </ul>
          </div>

          <div v-reveal class="reveal-delay-1 md:pl-14">
            <h2 class="display text-3xl md:text-4xl">What actually helps your business</h2>
            <ul class="mt-10 divide-y divide-line">
              <li v-for="item in changes" :key="item" class="flex items-baseline gap-5 py-4">
                <span class="font-mono text-xs text-accent" aria-hidden="true">→</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <p v-reveal class="display mx-auto mt-24 max-w-4xl text-center text-2xl text-ink md:text-4xl">
          AI can’t invent a process you never had. <em class="text-ink-muted">If they can’t name the step in your week they’d change — the handoff, the check, the quote — they’re selling snake oil. SEO people have been doing it for years. Now they just say AI.</em>
        </p>
      </div>
    </section>

    <!-- Thesis -->
    <section id="thesis" class="border-b border-line scroll-mt-20">
      <div class="frame px-6 py-20 md:px-10 md:py-28">
        <p v-reveal class="eyebrow mb-8">02 — The thesis</p>
        <h2 v-reveal class="display max-w-[16ch] text-4xl md:text-6xl">
          Good AI is invisible. You shouldn’t have to chat with it.
        </h2>
        <p v-reveal class="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
          The snake-oil move is making your people ask for information they should already have. “Talk to your business.” That’s a prompt where a screen should have been enough.
        </p>

        <div class="mt-16 grid gap-14 md:grid-cols-2 md:gap-0">
          <div v-reveal class="md:border-r md:border-line md:pr-14">
            <p class="eyebrow mb-6">What they sell</p>
            <ul class="divide-y divide-line">
              <li v-for="item in thesisSold" :key="item" class="flex items-baseline gap-5 py-4 text-ink-muted">
                <span class="font-mono text-xs text-ink-faint" aria-hidden="true">×</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
          <div v-reveal class="reveal-delay-1 md:pl-14">
            <p class="eyebrow mb-6">When it’s done right</p>
            <ul class="divide-y divide-line">
              <li v-for="item in thesisRight" :key="item" class="flex items-baseline gap-5 py-4">
                <span class="font-mono text-xs text-accent" aria-hidden="true">→</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <p v-reveal class="display mx-auto mt-24 max-w-4xl text-center text-2xl text-ink md:text-4xl">
          You don’t need a chatbot. <em class="text-ink-muted">You need the right thing in front of the right person at the right time — already there, no prompt. Then they get back to the customer.</em>
        </p>
      </div>
    </section>

    <!-- Offers -->
    <section id="offer" class="border-b border-line scroll-mt-20">
      <div class="frame">
        <div v-reveal class="flex items-baseline justify-between gap-6 px-6 pb-10 pt-20 md:px-10 md:pt-28">
          <p class="eyebrow">03 — Ways to work with me</p>
          <h2 class="display text-3xl md:text-5xl">Pick the one that sounds like your week.</h2>
        </div>

        <ul class="border-t border-line">
          <li v-for="offer in offers" :key="offer.n" v-reveal class="offer-row border-b border-line">
            <div class="grid gap-6 px-6 py-10 md:grid-cols-12 md:gap-10 md:px-10 md:py-12">
              <p class="font-display text-4xl text-ink-faint md:col-span-2 md:text-6xl">{{ offer.n }}</p>
              <div class="md:col-span-6">
                <h3 class="display text-3xl md:text-4xl">{{ offer.title }}</h3>
                <p class="mt-4 max-w-xl leading-relaxed text-ink-muted">{{ offer.body }}</p>
              </div>
              <dl class="grid gap-5 font-mono text-[0.8125rem] leading-relaxed md:col-span-4">
                <div>
                  <dt class="eyebrow mb-1.5">Good if you have</dt>
                  <dd>{{ offer.good }}</dd>
                </div>
                <div>
                  <dt class="eyebrow mb-1.5">Ends with</dt>
                  <dd>{{ offer.ends }}</dd>
                </div>
              </dl>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="border-b border-line scroll-mt-20">
      <div class="frame grid gap-14 px-6 py-20 md:grid-cols-12 md:px-10 md:py-28">
        <div v-reveal class="md:col-span-7">
          <p class="eyebrow mb-8">04 — Who’s this guy</p>
          <p class="display text-3xl leading-[1.05] md:text-5xl">
            I’ve been building since 2009 — startups, companies, the ops software people actually touch. Agency years in the middle, then on my own in Austin. The hat is not a bit. Neither is the work. <em class="text-ink-muted">I embed, I ship, and I build AI that stays out of the way — the thesis, not a sticker on a marketing site.</em>
          </p>
        </div>

        <div v-reveal class="reveal-delay-1 space-y-12 md:col-span-4 md:col-start-9">
          <div>
            <p class="eyebrow mb-4">Track record</p>
            <ul class="divide-y divide-line border-y border-line">
              <li v-for="[when, role, note] in timeline" :key="role" class="py-4">
                <p class="font-mono text-xs text-ink-faint">{{ when }}</p>
                <p class="mt-1 text-ink">{{ role }}</p>
                <p class="text-sm text-ink-muted">{{ note }}</p>
              </li>
            </ul>
          </div>

          <div>
            <p class="eyebrow mb-4">House rules</p>
            <ul class="space-y-3 text-sm leading-relaxed text-ink-muted">
              <li v-for="rule in rules" :key="rule" class="flex gap-3">
                <span class="font-mono text-accent" aria-hidden="true">—</span>
                <span>{{ rule }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <TestimonialsSection />
  </main>
</template>
