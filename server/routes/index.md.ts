import { pageMarkdown } from '#shared/agent-profile'

export default defineEventHandler((event) => {
  return sendDocument(event, pageMarkdown(), 'text/markdown; charset=utf-8')
})
