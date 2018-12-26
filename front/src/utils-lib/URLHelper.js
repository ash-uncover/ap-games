const URLHelper = {}

URLHelper.buildUrl = (protocol, host, port) => {
  return `${protocol}//${host}:${port}`
}

URLHelper.BASE_URL = URLHelper.buildUrl(
  window.location.protocol,
  window.location.hostname,
  window.location.port
)

URLHelper.getUrl = (path) => {
  return `${URLHelper.BASE_URL}/${path}`
}

export default URLHelper
