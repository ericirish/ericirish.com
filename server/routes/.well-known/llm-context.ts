import { llmsTxt } from '#shared/agent-profile'

export default defineEventHandler((event) => {
  return sendDocument(event, llmsTxt(), 'text/markdown; charset=utf-8')
})
