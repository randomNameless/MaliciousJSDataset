function DoctorTracker(siteId, pdiDomain) {
    this.siteId = siteId;
    this.frId = 0;

    // default PDI url is production
    if (typeof pdiDomain == 'undefined') {
        this.pdiDomain = 'https://pdi.doctor.com';
    }
    else {
        this.pdiDomain = pdiDomain;
    }
}

/**
 * Track an activityType with given parameters and then call callbackFunction
 * @param {*} activityType
 * @param {*} parameters
 * @param {*} usePostMessage
 */
DoctorTracker.prototype.track = function(activityType, parameters, usePostMessage) {
    var frm = this.makeForm();

    if (typeof(usePostMessage) == "undefined") {
        usePostMessage = false;
    }

    var inputs = frm.getElementsByTagName("INPUT");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].getAttribute("name") == "TrackingActivity[name]") {
            inputs[i].value = activityType;
        }

        if (inputs[i].getAttribute("name") == "TrackingActivity[parameters]") {
            inputs[i].value = JSON.stringify(parameters);
        }

        if (inputs[i].getAttribute("name") == "TrackingActivity[site_id]") {
            inputs[i].value = this.siteId;
        }

        if (inputs[i].getAttribute("name") == "TrackingActivity[callback]") {
            inputs[i].value = usePostMessage;
        }

    }

    frm.submit();
};

DoctorTracker.prototype.makeFrame = function() {
    var ifrm = document.createElement("IFRAME");

    ifrm.setAttribute("src", this.pdiDomain + "/tracking/track");
    ifrm.setAttribute("name", "dr_tracking_frame" + this.frId);
    ifrm.style.display = "none";
    document.body.appendChild(ifrm);

    this.frId += 1;

    return ifrm;
};

DoctorTracker.prototype.makeForm = function() {

    var ifr = this.makeFrame();

    var frm = document.createElement("FORM");

    frm.setAttribute("action", ifr.getAttribute("src"));
    frm.setAttribute("target", ifr.getAttribute("name"));
    frm.setAttribute("method", "POST");
    frm.style.display = "none";

    var activity = document.createElement("INPUT");
    activity.setAttribute("name", "TrackingActivity[name]");
    activity.setAttribute("type", "hidden");
    frm.appendChild(activity);

    var parameters = document.createElement("INPUT");
    parameters.setAttribute("name", "TrackingActivity[parameters]");
    parameters.setAttribute("type", "hidden");
    frm.appendChild(parameters);

    var partner = document.createElement("INPUT");
    partner.setAttribute("name", "TrackingActivity[site_id]");
    partner.setAttribute("type", "hidden");
    frm.appendChild(partner);

    var callback = document.createElement("INPUT");
    callback.setAttribute("name", "TrackingActivity[callback]");
    callback.setAttribute("type", "hidden");
    frm.appendChild(callback);

    document.body.appendChild(frm);

    return frm;

};
