export function sendDocument(event: Parameters<typeof setResponseHeader>[0], body: string, contentType: string) {
  setResponseHeader(event, 'content-type', contentType)
  setResponseHeader(event, 'cache-control', 'public, max-age=3600')
  setResponseHeader(event, 'x-robots-tag', 'index, follow')
  return body
}
