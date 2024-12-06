window.WM = window.WM || {}

/**
 * HBO-SPECIFIC GEO FALLBACK
 *
 * Checks for the existence of the `countryCode` geo cookie (set previously or set by CDN).
 * If the cookie does not exist, it will use the ME Token service to get the country code via HTTP call and
 * write the cookie for use by the WM consent library
 */

window.WM.UserGeo = window.WM.UserGeo || {}

WM.UserGeo.checkGeoCookie = function checkGeoCookie () {
  var name = 'countryCode='
  var decodedCookie = decodeURIComponent(document.cookie)
  var cookieArray = decodedCookie.split(';')
  for (i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i]
    if (cookie.indexOf(name) != -1) {
      return true
    }
  }
  return false
}

WM.UserGeo.setGeoCookie = function setGeoCookie (countryCode) {
  document.cookie = `countryCode=${countryCode};path=/`
}

if (!WM.UserGeo.checkGeoCookie()) {
  var xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var respObj = JSON.parse(xhttp.responseText)
      WM.UserGeo.setGeoCookie(respObj.country_alpha2)
    }
  }
  var queryComponent = WM.UserGeo.appId ? '?appId=' + WM.UserGeo.appId : '/'
  xhttp.open('GET', 'https://geo.ngtv.io/locate' + queryComponent, false)
  xhttp.send()
}
