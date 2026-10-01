import { sitemapXml } from '#shared/agent-profile'

export default defineEventHandler((event) => {
  return sendDocument(event, sitemapXml(), 'application/xml; charset=utf-8')
})
