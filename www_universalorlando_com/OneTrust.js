function OptanonWrapper() {
  if (
    window.OneTrust &&
    window.OneTrust.getGeolocationData().country !== "US"
  ) {
    document.querySelector("span.cta-icon").style.display = "none";
    document.querySelector(
      "upr-cookie-setting-modal > img.custom-image"
    ).style.display = "none";
  }
}

(() => {
  const cookieScript = document.querySelector("#cookie-script");
  if (!cookieScript) return;

  const integrity = "sha384-TKdmlzVmoD70HzftTw4WtOzIBL5mNx8mXSRzEvwrWjpIJ7FZ/EuX758yMDWXtRUN";
  const data_domain_script = cookieScript.getAttribute("data-domain-script");
  const delay = 250;
  const script = document.createElement("script");
  script.src = `https://cdn.cookielaw.org/consent/${data_domain_script}/otSDKStub.js`;
  // Removed per 10501
  //script.setAttribute("data-document-language", "true");
  script.setAttribute("type", "text/javascript");
  script.setAttribute("charset", "UTF-8");
  script.setAttribute("crossorigin", "anonymous");
  script.setAttribute("data-domain-script", data_domain_script);
  script.setAttribute("integrity", integrity);

  const cookieInterval = setInterval(() => {
    const href = window.location.href;
    const url = new URL(href);
    const isWebview = (url.searchParams.get('webview') || url.searchParams.get('isMobile')) === 'true';
    const pattern = /(\/web-foundation|\/landing)/;
    let cookieButton = '';
    if (pattern.test(href)) {
      cookieButton = document.querySelector("#ot-sdk-btn");
    } else {
      cookieButton = document.querySelector(".ot-sdk-show-settings");
    }
    if (cookieButton || isWebview) {
      document.head.appendChild(script);
      clearInterval(cookieInterval);
    }
  }, delay);
})();