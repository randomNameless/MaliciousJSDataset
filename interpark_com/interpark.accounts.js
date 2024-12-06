const ACCCOUNTS_IFRAME_SRC =
  'https://accounts.interpark.com/api/authentication/reissuetoken'

const isClient = typeof window !== 'undefined'

const commAuthIframeLib = (function () {
  if (!isClient) {
    return {
      addEventListener: function () {},
      reissueToken: function () {},
    }
  }

  function handler() {
    if (authReissueConditionCheck()) {
      const accountsIframe = document.createElement('iframe')
      accountsIframe.setAttribute('name', 'accounts_iframe')
      accountsIframe.style.display = 'none'
      accountsIframe.style.position = 'absolute'
      accountsIframe.style.left = '-99999px'
      accountsIframe.setAttribute('width', '0')
      accountsIframe.setAttribute('height', '0')
      accountsIframe.setAttribute('title', 'long-term-session-script')
      accountsIframe.src = ACCCOUNTS_IFRAME_SRC
      const body = document.body || document.getElementsByTagName('body')[0]
      body.appendChild(accountsIframe)
    }
  }

  return {
    addEventListener: function () {
      if (
        document.readyState === 'complete' ||
        document.readyState !== 'loading'
      ) {
        handler()
      } else {
        document.addEventListener('DOMContentLoaded', handler, false)
      }
    },
    reissueToken: function () {
      let reissueIframe = document.getElementById('reissue_iframe')
      if (reissueIframe) {
        reissueIframe.remove()
      }

      if (authReissueConditionCheck()) {
        reissueIframe = document.createElement('iframe')
        reissueIframe.setAttribute('id', 'reissue_iframe')
        reissueIframe.style.display = 'none'
        reissueIframe.style.position = 'absolute'
        reissueIframe.style.left = '-99999px'
        reissueIframe.setAttribute('width', '0')
        reissueIframe.setAttribute('height', '0')
        reissueIframe.src = ACCCOUNTS_IFRAME_SRC
        const body = document.body || document.getElementsByTagName('body')[0]
        body.appendChild(reissueIframe)
      }
    },
  }
})()

if (isClient) {
  try {
    commAuthIframeLib.addEventListener()
  } catch (e) {
    // ignore
  }

  window.commAuthIframeLib = commAuthIframeLib
}

function authGetCookie(name) {
  const v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
  return v ? v[2] : null
}

function isAuthCookieEmpty(name) {
  const cookieVal = authGetCookie(name)
  return !(cookieVal && cookieVal.trim() !== '')
}

function authReissueConditionCheck() {
  const isTGEnable = !isAuthCookieEmpty('tempinterparkGUEST')
  const ua = navigator.userAgent
  const isApp =
    !isAuthCookieEmpty('appInfo') ||
    authGetCookie('appFlag') === '2' ||
    ua.indexOf('InterparkWebview') > -1 ||
    ua.indexOf('InterparkBrowser') > -1 ||
    ua.indexOf('InterparkTicket') > -1 ||
    ua.indexOf('Interpark') > -1

  if (
    (isTGEnable && !isApp) ||
    (!isTGEnable &&
      !isAuthCookieEmpty('tempinterparkGUEST') &&
      !isAuthCookieEmpty('interparkSNO') &&
      !isAuthCookieEmpty('iaf') &&
      !isApp)
  ) {
    return true
  }

  return false
}
