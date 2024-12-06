/**
 * Missing UI data
 * Check if web-store and if web-store confirmation page
 * if present attempt to find missing data, if data missing,
 * attempt to gather data from page and component data
 * and error into console for QM to pick up
 */
(() => {
  let content_feature = undefined;
  let componentCtx = undefined;
  let found = false;

  window.addEventListener("load", () => {
    const regexApp = /\/web-store\//gi;
    const regexConfirmation = /\/web-store\/en\/us\/checkout-confirmation/gi;
    if (window.location.href.match(regexApp)) {
      const body = document.querySelector("body");
      if (body) {
        const observer = new MutationObserver((_mutations) => {
          if (window.location.href.match(regexConfirmation) && !found) {
            found = true;
            // In checkout page, setup a interval check for 5 seconds to determine if there is missing data:
            // on mobile devices, this seems to take a bit of time, so adding a long delay to let it catch up
            setTimeout(() => {
              setupCheckoutPageCheck();
              observer.disconnect();
            }, 3000);
          }
        });
        observer.observe(body, { childList: true, subtree: false });
      }
    }
  });

  function setupCheckoutPageCheck() {
    const checkout_comp = document.querySelector("upr-checkout-confirmation");
    if (checkout_comp) {
      // initial check, if found then ignore.
      content_feature = checkout_comp.querySelector("gds-content-feature");
      if (content_feature?.querySelector("strong")) {
        return;
      } else {
        componentCtx = findComponentData(checkout_comp, "isMobileWebView");
        // run once
        checkDetails([]);
      }

      // if not found then
      const observer = new MutationObserver((mutations) => {
        if (checkDetails(mutations)) {
          observer.disconnect();
        }
      });
      observer.observe(checkout_comp, { childList: true, subtree: true });
    }
  }

  function checkDetails(mutations) {
    content_feature = content_feature || mutations.find((mutation) => mutation.target.tagName === "GDS-CONTENT-FEATURE")?.target || checkout_comp.querySelector("gds-content-feature");
    const strongElem = content_feature && content_feature.querySelector("strong");

    // if content feature is present but no data is visible
    if (content_feature && !strongElem) {
      // no data found on page, spit out some debug info...
      if (
        componentCtx?.dataCard ||
        componentCtx?.orderConfirmation ||
        componentCtx?.orderSummary
      ) {
        console.error("UI MISSING DATA");
        console.error("dataCard", componentCtx?.dataCard);
        console.error("orderConfirmation", componentCtx?.orderConfirmation);
        console.error("orderSummary", componentCtx?.orderSummary);
        // if data present and ready but no strong element, then let's attempt to trigger change detection.
        if (componentCtx?.orderConfirmation) {
          content_feature["contrast"] = true;
          setTimeout(() => {}, 0);
        }
      } else {
        console.error("No data available for render");
      }
    } else if (strongElem) {
      // remove if found
      return true;
    }
  }

  function findComponentData(element, variable) {
    const ngContext = "__ngContext__";
    if (element?.[ngContext]) {
      const componentCtx = element[ngContext].find(
        (ctx) => ctx?.[variable] !== undefined
      );;
      return componentCtx;
    }
    return undefined;
  }
})();