/**
 * After a client-side page change, move focus to the new page's <h1> so
 * keyboard and screen-reader users land on the new content instead of a
 * link that the view transition just swapped out. Waits for the view
 * transition to finish, since focus set mid-transition doesn't stick.
 */
export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()
  let navigated = false
  let transition: ViewTransition | undefined

  router.afterEach((to, from) => {
    navigated = to.path !== from.path && from.matched.length > 0
  })

  nuxtApp.hook('page:view-transition:start', (t) => {
    transition = t
  })

  function focusHeading() {
    const heading = document.querySelector<HTMLElement>('main h1')
    if (!heading) {
      return
    }
    heading.setAttribute('tabindex', '-1')
    heading.focus({ preventScroll: true })
  }

  nuxtApp.hook('page:finish', () => {
    const pending = transition
    transition = undefined
    if (!navigated || location.hash) {
      return
    }
    navigated = false
    if (pending) {
      pending.finished.finally(focusHeading)
    } else {
      focusHeading()
    }
  })
})
