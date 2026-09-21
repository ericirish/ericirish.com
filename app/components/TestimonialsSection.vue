<script setup lang="ts">
import HelloFromProof from '~/components/HelloFromProof.vue'
import FirstToSiteProof from '~/components/FirstToSiteProof.vue'
import SchoolCheckProof from '~/components/SchoolCheckProof.vue'
</script>

<template>
  <section id="testimonials" class="scroll-mt-20 border-t border-line">
    <div class="frame border-b border-line px-6 py-14 md:px-10 md:py-16">
      <p v-reveal class="eyebrow">Proof</p>
      <h2 v-reveal class="display mt-4 max-w-2xl text-3xl text-balance md:text-4xl">
        Real companies, real AI transformation — not a slide deck.
      </h2>
    </div>
    <HelloFromProof />
    <FirstToSiteProof />
    <SchoolCheckProof />
  </section>
</template>
