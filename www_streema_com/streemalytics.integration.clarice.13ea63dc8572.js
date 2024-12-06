streemalytics.clariceIntegration = function clariceIntegration(analyticsEmitter, options) {
  var clariceIntegration = streemalytics.baseIntegration(analyticsEmitter, options);

  clariceIntegration.name = "Clarice Integration";

  clariceIntegration.initialize = function () {
    // Dummy initialize, not needed because clarice is initialized somewhere else.
    // To integrate completely clarice client should be initialized here.
    if (!_cos) {
      throw new Error("Clarice global variable _cos is undefined");
    }
  };

  clariceIntegration.track = function (namespace, eventName, properties) {
    var props = streemalytics.utils.extend(
      ST.clariceBaseEventParams(),
      properties
    );

    props.time = (new Date()) - ST.firstByteTime;

    props.category = namespace;
    props.eventName = eventName;

    ST.ClariceHelper.createAndSendEvent(
      "POST",
      "browser-event",
      props
    )
  };

  return clariceIntegration;
};
