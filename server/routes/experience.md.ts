import { experienceMarkdown } from '#shared/agent-profile'

export default defineEventHandler((event) => {
  return sendDocument(event, experienceMarkdown(), 'text/markdown; charset=utf-8')
})
