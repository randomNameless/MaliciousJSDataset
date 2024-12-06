ST = window.ST || {};

ST.ClariceHelper = {};
ST.ClariceHelper.createAndSendEvent = function(method, namespace, params) {
  if (!_cos) {
    throw new Error("Clarice global variable _cos is undefined");
  }

  if (!method || !namespace) {
    throw new Error("There are missign arguments to create and send a clarice event (method? namespace?)");
  }

  // underscore extend function, simplified for one argument
  var _extend = function(obj, source) {
    if (source) {
      for (var prop in source) {
        obj[prop] = source[prop];
      }
    }
    return obj;
  };

  var that = {};
  that.namespace = namespace;

  // Will be overwritten once the event is created in clarice and a real uuid is available
  that.uuid = null;

  // Until the event is created in clarice, it is a simple array
  // Once a uuid is available, all the pushed staff is pushed in clarice with the right uuid
  // and pushQueue is replaced by the clarice object
  that.pushQueue = [];
  that.data = {};

  _cos.push(['callback', eventCreatedCallback]);
  var args = {
    namespace: that.namespace
  };
  _cos.push([method, args, params]);

  if (ST.Util) {
    ST.Util.log.info(namespace + ' event sent to clarice');
    ST.Util.log.debug(params);
  }

  function eventCreatedCallback(event) {
    that.event = event;
    that.uuid = event.uuid;

    var pendingQueue = that.pushQueue;
    // Push pending operations to clarice, patch the data object with the new data
    for (var i = 0; i < pendingQueue.length; i++) {
      // Replace null uuid with true uuid
      if (pendingQueue[i][0] === 'PATCH') {
        pendingQueue[i][1].uuid = that.uuid;
        if (pendingQueue[i][2]) {
          // TODO: Explain
          _extend(pendingQueue[i][2], that.event.data);
        }
      }
      _cos.push(pendingQueue[i]);
    }

    // Apply the stack of queued updates to the first
    that.data = _extend(event.data, that.data);

    // From now on, clarice can be used directly
    that.pushQueue = _cos;
  }

  that.patch = function(newData) {
    var dataCopy;
    // Extend data with new properties and create copy of it
    if (newData) {
      dataCopy = _extend({}, _extend(that.data, newData));
    }

    that.pushQueue.push(['callback', function() {}]);
    that.pushQueue.push(['PATCH', {'namespace': that.namespace, 'uuid': that.uuid}, dataCopy]);
  };

  return that;
};


ST.ClariceHelper.trackClick = function(target, radioId) {
  var eventData = $.extend({}, ST.clariceBaseEventParams());
  eventData.time = (new Date()) - ST.firstByteTime;
  eventData.target = target;
  eventData.radio = radioId;
  ST.ClariceHelper.createAndSendEvent('POST', 'click', eventData);
}
