/**
 * v-reveal — fades an element in once it scrolls into view.
 * Elements carry the `reveal` class in markup so SSR paints them hidden
 * and the directive only flips them visible; <noscript> in app.vue undoes it.
 */
export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | null = null

  function getObserver() {
    if (observer) {
      return observer
    }
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    return observer
  }

  nuxtApp.vueApp.directive('reveal', {
    getSSRProps() {
      return {}
    },
    mounted(el: HTMLElement) {
      el.classList.add('reveal')
      if (typeof IntersectionObserver === 'undefined') {
        el.classList.add('is-visible')
        return
      }
      getObserver().observe(el)
    },
    unmounted(el: HTMLElement) {
      observer?.unobserve(el)
    }
  })
})
