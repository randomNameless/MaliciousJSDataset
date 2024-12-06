/**
 * @param {string} uri
 * @param {boolean} [keepExtension]
 * @return {string}
 */
export function canonicalHostname(uri, keepExtension = true) {
  uri = uri.trim().toLowerCase()
  if (uri === '' || !uri.includes('.')) {
    return ''
  }
  if (uri.startsWith('//')) {
    uri = 'https:' + uri
  } else if (!/^https?:\/\//.test(uri)) {
    uri = 'https://' + uri
  }

  const url = new URL(uri)
  let hostname = url.hostname.match(/([^.]+\.[^.]+)$/)[1]

  if (!keepExtension) {
    hostname = hostname.replace(/\.[^.]+$/, '')
  }

  return hostname
}
