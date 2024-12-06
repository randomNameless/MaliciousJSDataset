/* eslint-disable no-undef */

// SnapEngage Chat Widget
(function () {
  if (window.SnapEngage) return;

  const se = document.createElement("script");
  se.type = "text/javascript";
  se.async = true;
  se.src = "https://storage.googleapis.com/code.snapengage.com/js/477cad8d-f813-40f2-8062-9ce16a02d1c3.js";

  var done = false;
  se.onload = se.onreadystatechange = function () {
    if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
      done = true;
      // Hide chat button, by default.
      SnapEngage.hideButton();
    }
  };

  const s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(se, s);
})();
