(function() {
  try {
    const params = (new URL(document.location)).searchParams;
    const utmSource = params.get('utm_source');
    const utmMedium = params.get('utm_medium');
    const utmCampaign = params.get('utm_campaign');
    const referrer = encodeURIComponent(window.location.href);
    const iframes = document.querySelectorAll('iframe[data-test-id="beehiiv-embed"]');

    const shouldAddParameters = (url) => {
      const urlObj = new URL(url);
      return !urlObj.searchParams.has('utm_source') &&
             !urlObj.searchParams.has('utm_medium') &&
             !urlObj.searchParams.has('utm_campaign') &&
             !urlObj.searchParams.has('referrer');
    }

    const addParametersToURL = (url) => {
      const urlObj = new URL(url);
      if (utmSource) urlObj.searchParams.set('utm_source', utmSource);
      if (utmMedium) urlObj.searchParams.set('utm_medium', utmMedium);
      if (utmCampaign) urlObj.searchParams.set('utm_campaign', utmCampaign);
      if (referrer) urlObj.searchParams.set('referrer', referrer);
      return urlObj.toString();
    }

    for (let i = 0; i < iframes.length; i++) {
      if (shouldAddParameters(iframes[i].src)) {
        iframes[i].src = addParametersToURL(iframes[i].src);
      }
    }
  } catch (error) {
    console.log('[BEEHIIV_ATTRIBUTION_SCRIPT]: There was a problem initialising the script!');
    console.log('[BEEHIIV_ATTRIBUTION_SCRIPT]:', error);
  }
})();
