/* globals ap */

const URLHelper = {}

URLHelper.buildUrl = (protocol, host, port) => {
  return `${protocol}//${host}:${port}`
}

URLHelper.BASE_URL = URLHelper.buildUrl(
  window.location.protocol,
  window.location.hostname,
  window.location.port
)

try {
  if (ap && ap.location && ap.location.root) {
    URLHelper.BASE_URL = ap.location.root
    console.log(`setting root to ${URLHelper.BASE_URL}`)
  }
} catch (oError) {
  // not a problem
}

URLHelper.getUrl = (path) => {
  return `${URLHelper.BASE_URL}/${path}`
}

export default URLHelper
