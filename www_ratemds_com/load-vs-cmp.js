//VS CMP Mar 2024
(function() {
  //GPC
  if (navigator.globalPrivacyControl) {
    let d = new Date();
    d.setTime(d.getTime() + (365*24*60*60));
    let expires = "expires="+ d.toUTCString();
    let domain = "."+location.host;
    document.cookie = "usprivacy=1YYY;"+expires+";domain="+domain;
  }
  //Proboards
  if (['proboards.com', 'boards.net', 'freeforums.net'].some(domains => window.location.hostname.endsWith(domains))) {
    var host = window.location.hostname.slice(window.location.hostname.indexOf('.',-3)+1);
  } else {
    var host = window.location.hostname;
  }
  var element = document.createElement('script');
  var firstScript = document.getElementsByTagName('script')[0];
  var url = 'https://cmp.inmobi.com'
  .concat('/choice/', 'rpuuC0TtTLKAz', '/', host, '/choice.js?tag_version=V2');
  var uspTries = 0;
  var uspTriesLimit = 3;
  element.async = true;
  element.type = 'text/javascript';
  element.src = url;

  firstScript.parentNode.insertBefore(element, firstScript);

  function makeStub() {
    var TCF_LOCATOR_NAME = '__tcfapiLocator';
    var queue = [];
    var win = window;
    var cmpFrame;

    function addFrame() {
      var doc = win.document;
      var otherCMP = !!(win.frames[TCF_LOCATOR_NAME]);

      if (!otherCMP) {
        if (doc.body) {
          var iframe = doc.createElement('iframe');

          iframe.style.cssText = 'display:none';
          iframe.name = TCF_LOCATOR_NAME;
          doc.body.appendChild(iframe);
        } else {
          setTimeout(addFrame, 5);
        }
      }
      return !otherCMP;
    }

    function tcfAPIHandler() {
      var gdprApplies;
      var args = arguments;

      if (!args.length) {
        return queue;
      } else if (args[0] === 'setGdprApplies') {
        if (
          args.length > 3 &&
          args[2] === 2 &&
          typeof args[3] === 'boolean'
        ) {
          gdprApplies = args[3];
          if (typeof args[2] === 'function') {
            args[2]('set', true);
          }
        }
      } else if (args[0] === 'ping') {
        var retr = {
          gdprApplies: gdprApplies,
          cmpLoaded: false,
          cmpStatus: 'stub'
        };

        if (typeof args[2] === 'function') {
          args[2](retr);
        }
      } else {
        if(args[0] === 'init' && typeof args[3] === 'object') {
            args[3] = { ...args[3], tag_version: 'V2' };
          }
        queue.push(args);
      }
    }

    function postMessageEventHandler(event) {
      var msgIsString = typeof event.data === 'string';
      var json = {};

      try {
        if (msgIsString) {
          json = JSON.parse(event.data);
        } else {
          json = event.data;
        }
      } catch (ignore) {}

      var payload = json.__tcfapiCall;

      if (payload) {
        window.__tcfapi(
          payload.command,
          payload.version,
          function(retValue, success) {
            var returnMsg = {
              __tcfapiReturn: {
                returnValue: retValue,
                success: success,
                callId: payload.callId
              }
            };
            if (msgIsString) {
              returnMsg = JSON.stringify(returnMsg);
            }
            if (event && event.source && event.source.postMessage) {
                event.source.postMessage(returnMsg, '*');
              }
          },
          payload.parameter
        );
      }
    }

    while (win) {
      try {
        if (win.frames[TCF_LOCATOR_NAME]) {
          cmpFrame = win;
          break;
        }
      } catch (ignore) {}

      if (win === window.top) {
        break;
      }
      win = win.parent;
    }
    if (!cmpFrame) {
      addFrame();
      win.__tcfapi = tcfAPIHandler;
      win.addEventListener('message', postMessageEventHandler, false);
    }
  };

  makeStub();

  var uspStubFunction = function() {
    var arg = arguments;
    if (typeof window.__uspapi !== uspStubFunction) {
      setTimeout(function() {
        if (typeof window.__uspapi !== 'undefined') {
          window.__uspapi.apply(window.__uspapi, arg);
        }
      }, 500);
    }
  };

  var checkIfUspIsReady = function() {
    uspTries++;
    if (window.__uspapi === uspStubFunction && uspTries < uspTriesLimit) {
      console.warn('USP is not accessible');
    } else {
      clearInterval(uspInterval);
    }
  };

  if (typeof window.__uspapi === 'undefined') {
    window.__uspapi = uspStubFunction;
    var uspInterval = setInterval(checkIfUspIsReady, 6000);
  }
})();
c = document.createElement("style");
c.innerHTML = ".qc-cmp2-persistent-link { visibility: hidden; display: none; }";
document.getElementsByTagName("head")[0].appendChild(c);
function CCPAcmpReady() {
		window.__uspapi('uspPing', 1, function(obj, status) {
		if (status && obj.mode.includes('USP') && obj.jurisdiction.includes(obj.location.toUpperCase())) {
			document.querySelector(".qc-ccpa-persistent-link").style.display = "";
			document.querySelector(".qc-ccpa-persistent-link").addEventListener("click", function() { return window.__uspapi('displayUspUi'); });

			window.__uspapi('setUspDftData', 1, function(obj, status) {
					if (!status) {
						console.log("Error: USP string not updated!")
					}
			});
		}
	});
}
function GDPRcmpReady() {
	if (typeof window.__tcfapi === 'function') {
		var CMPlistenerAdded = false;
		window.__tcfapi('addEventListener', 2, function(tcData, listenerSuccess) { 
			if (tcData.gdprApplies === true) {
				document.querySelector(".qc-cmp-persistent-link").style.display = "";
				if(!CMPlistenerAdded) {
				document.querySelector(".qc-cmp-persistent-link").addEventListener("click", function() { return window.__tcfapi("displayConsentUi", 2, function() {});});
				CMPlistenerAdded = true;
				}
			}
		} );
	}
}
function cmpReadyCheck() {
  var CCPAcmpReadyCounter = 0;
  var GDPRcmpReadyCounter = 0;
  var cmpReady = setInterval(function() { if(typeof window.__uspapi === 'function') { CCPAcmpReady(); clearInterval(cmpReady); } else if(CCPAcmpReadyCounter >= 60) {clearInterval(cmpReady); } else { CCPAcmpReadyCounter++} }, 100);
  var gdprcmpReady = setInterval(function() { if(typeof window.__tcfapi === 'function') { GDPRcmpReady(); clearInterval(gdprcmpReady); } else if(GDPRcmpReadyCounter >= 60) {clearInterval(gdprcmpReady); } else { GDPRcmpReadyCounter++} }, 100);  
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", (event) => {
    cmpReadyCheck();
  });
} else {
  cmpReadyCheck();
}
