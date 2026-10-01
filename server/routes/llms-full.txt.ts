import { llmsFullTxt } from '#shared/agent-profile'

export default defineEventHandler((event) => {
  return sendDocument(event, llmsFullTxt(), 'text/markdown; charset=utf-8')
})
