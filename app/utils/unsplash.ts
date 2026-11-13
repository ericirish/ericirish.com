const widths = [480, 720, 960, 1280, 1600]

/**
 * Responsive srcset for an Unsplash photo. `auto=format` lets Unsplash serve
 * AVIF/WebP to browsers that accept them.
 */
export function unsplashImage(photoId: string, fallbackWidth = 960) {
  const url = (w: number) =>
    `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${w}&q=80`
  return {
    src: url(fallbackWidth),
    srcset: widths.map(w => `${url(w)} ${w}w`).join(', ')
  }
}

/** Case-study photo cards: one column below lg, two columns in a 76rem frame above. */
export const caseCardSizes = '(min-width: 1024px) min(34rem, 45vw), calc(100vw - 3rem)'
