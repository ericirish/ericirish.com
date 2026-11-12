import { sitemapXml } from '#shared/agent-profile'

export default defineEventHandler((event) => {
  const updated = String(useRuntimeConfig(event).public.siteUpdated)
  return sendDocument(event, sitemapXml(updated), 'application/xml; charset=utf-8')
})
