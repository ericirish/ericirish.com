import { robotsTxt } from '#shared/agent-profile'

export default defineEventHandler((event) => {
  return sendDocument(event, robotsTxt(), 'text/plain; charset=utf-8')
})
