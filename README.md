# eric.irish

Marketing site for Eric Irish. Nuxt 4 static prerender, deployed to Cloudflare Pages.

```bash
nvm use
npm install
npm run dev
```

```bash
npm run build   # static output in .output/public
npx wrangler login   # once, if needed
npm run deploy  # Cloudflare Pages project: ericirish
```

Preview locally: `npx serve .output/public`

Do not point `eric.irish` DNS until the Pages URL looks right.
