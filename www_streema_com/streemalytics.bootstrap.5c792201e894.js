/***
 * Instantiate streemalytics, configure integrations and set global var _streemalytics.
 * Also, process any queued event tracked before streemalytics was loaded.
 * This file must be loaded AFTER streemalytics has loaded.
 *
 * Requires streemalytics, ST.settings.streemalytics and streemalytics integrations
 */

(function () {
  var analytics = streemalytics();

  var config = ST.settings.streemalytics || {};

  analytics.initialize([
    streemalytics.googleAnalyticsIntegration(analytics, config.googleAnalyticsOptions),
    streemalytics.clariceIntegration(analytics),
  ]);

  // Replay the queued tracking done with the stub object before streemalytics
  // was loaded and available.
  while (window._streemalytics && window._streemalytics.length > 0) {
    var args = window._streemalytics.shift();
    var method = args.shift();
    analytics[method] && analytics[method].apply(analytics, args)
  }

  window._streemalytics = analytics;
})();
