/* Write here your custom javascript codes */

gdprCookieNotice({
  locale: 'es', //This is the default value
  timeout: 1500, //Time until the cookie bar appears
  expiration: 30, //This is the default value, in days
  domain: window.location.hostname, // dominio
  implicit: false, //Accept cookies on scroll
  statement: '/politica-cookies/', //Link to your cookie statement page
  performance: ['JSESSIONID'], //Cookies in the performance category.
  analytics: ['gtag', 'ga'], //Cookies in the analytics category.
  marketing: ['SSID'] //Cookies in the marketing category.
});

function removeCookieNotice() {
  Cookies.remove('gdprcookienotice', { path: '/', domain: window.location.hostname });
  window.location.reload(false);
}


function triggerHtmlEvent(element, eventName) {
  var event;
  if(document.createEvent) {
    event = document.createEvent('HTMLEvents');
    event.initEvent(eventName, true, true);
    element.dispatchEvent(event);
  } else {
    event = document.createEventObject();
    event.eventType = eventName;
    element.fireEvent('on' + event.eventType, event);
  }
}

$('.translation-links a').click(function(e) {
  console.log('translation link');
  e.preventDefault();
  var lang = $(this).data('lang');
  console.log(lang);
  $('#google_translate_element select option').each(function(){
    if($(this).text().indexOf(lang) > -1) {
        $(this).parent().val($(this).val());
        var container = document.getElementById('google_translate_element');
        var select = container.getElementsByTagName('select')[0];
        triggerHtmlEvent(select, 'change');
    }
  });
});
