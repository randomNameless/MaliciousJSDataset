(function() {
  function createPixel(src,gdpr,gdprcs,usp,gpp,gppsid) {
    var p = document.createElement('img');
    p.setAttribute("height", "0px");
    p.setAttribute("width", "0px");
    p.setAttribute("border", "0");
    p.setAttribute("style", "position:absolute;");
    p.onerror = function() {
      this.style.display = "none";
    };
    p.setAttribute("src", src.replace('${GDPR}',gdpr).replace('${GDPR_CS}',gdprcs).replace('${US_PRIVACY}',usp).replace('${GPP}',gpp).replace('${GPP_SID}',gppsid));
    document.body.appendChild(p);
  }

    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }

  function createIframe(src,gdpr,gdprcs,usp,gpp,gppsid) {
    var i = document.createElement('iframe');
    i.style.display = "none";
    i.src = src.replace('${GDPR}',gdpr).replace('${GDPR_CS}',gdprcs).replace('${US_PRIVACY}',usp).replace('${GPP}',gpp).replace('${GPP_SID}',gppsid);
    document.body.appendChild(i);
  }

  function createCookie() {
    var DAYS                = 24 * 60 * 60 * 1000;
    var SYNC_COOKIE_TTL     = 0.75 * DAYS;
    var SYNC_COOKIE         = 'sb_ss';
    var SCRIPT_VERSION      = "31";


    var current_version = getCookie(SYNC_COOKIE) || "0";
    if (current_version == "0") {
      var date = new Date();
      date.setTime(date.getTime() + SYNC_COOKIE_TTL);
      return (document.cookie = SYNC_COOKIE + "=" + SCRIPT_VERSION + "; expires=" + date.toUTCString() + "; path=/" || 1);
    }
  }

  var u = (new URL(document.currentScript.src)).searchParams;
  var gdpr = u.get("gdpr") ?? '';
  var gdprcs = u.get("gdpr_consent") ?? '';
  var usp = u.get("us_privacy") ?? '';
  var gpp = u.get("gpp") ?? '';
  var gppsid = u.get("gpp_sid") ?? '';

  if (createCookie()){
    
    createPixel('https://ap.lijit.com/pixel?gdpr=${GDPR}&gdpr_consent=${GDPR_CS}&us_privacy=${US_PRIVACY}&redir=https%3A%2F%2Fx.serverbid.com%2Fusersync%3Fttt%3D1%26src%3D2%26cspi%3D0%26cn%3D4%26spui%3D%26dpui%3D%24UID',gdpr,gdprcs,usp,gpp,gppsid);
    
    createPixel('https://bh.contextweb.com/bh/rtset?pid=562763&ev=1&rurl=https%3A%2F%2Fx.serverbid.com%2Fusersync%3Fttt%3D1%26src%3D2%26cspi%3D0%26cn%3D5548%26spui%3D%26dpui%3D%25%25VGUID%25%25',gdpr,gdprcs,usp,gpp,gppsid);
    
    createPixel('https://sync.smartadserver.com/getuid?&nwid=4295&gdpr=${GDPR}&gdpr_consent=${GDPR_CS}&us_privacy=${US_PRIVACY}&url=https%3A%2F%2Fx.serverbid.com%2Fusersync%3Fttt%3D1%26src%3D2%26cspi%3D0%26cn%3D5527%26spui%3D%26dpui%3D%5Bsas_uid%5D',gdpr,gdprcs,usp,gpp,gppsid);
    
    createPixel('https://ssum-sec.casalemedia.com/usermatchredir?s=185073&gdpr=${GDPR}&gdpr_consent=${GDPR_CS}&us_privacy=${US_PRIVACY}&gpp=${GPP}&gpp_sid=${GPP_SID}&cb=https%3A%2F%2Fx.serverbid.com%2Fusersync%3Fttt%3D1%26src%3D2%26cspi%3D0%26cn%3D5528%26spui%3D%26dpui%3D',gdpr,gdprcs,usp,gpp,gppsid);
    
    createPixel('https://ib.adnxs.com/getuid?https%3A%2F%2Fx.serverbid.com%2Fusersync%3Fttt%3D1%26src%3D2%26cspi%3D0%26cn%3D5551%26spui%3D%26dpui%3D%24UID',gdpr,gdprcs,usp,gpp,gppsid);
    
    createPixel('https://prebid.a-mo.net/cchain/0?gdpr=${GDPR}&gdpr_consent=${GDPR_CS}&us_privacy=${US_PRIVACY}&gpp=${GPP}&gpp_sid=${GPP_SID}&cb=https%3A%2F%2Fx.serverbid.com%2Fusersync%3Fttt%3D1%26src%3D2%26cspi%3D0%26cn%3D6294%26spui%3D%26dpui%3D',gdpr,gdprcs,usp,gpp,gppsid);
    
    createPixel('https://sync.go.sonobi.com/usa?loc=https%3A%2F%2Fx.serverbid.com%2Fusersync%3Fttt%3D1%26src%3D2%26cspi%3D0%26cn%3D5444%26spui%3D%26dpui%3D',gdpr,gdprcs,usp,gpp,gppsid);
    
    createPixel('https://ads.yieldmo.com/pbsync?gdpr=${GDPR}&gdpr_consent=${GDPR_CS}&us_privacy=${US_PRIVACY}&redirectUri=https%3A%2F%2Fx.serverbid.com%2Fusersync%3Fttt%3D1%26src%3D2%26cspi%3D0%26cn%3D6985%26spui%3D%26dpui%3D%24UID',gdpr,gdprcs,usp,gpp,gppsid);
    

    
    createIframe('https://ads.pubmatic.com/AdServer/js/user_sync.html?gdpr=${GDPR}&gdpr_consent=${GDPR_CS}&us_privacy=${US_PRIVACY}&p=156319&predirect=https%3A%2F%2Fx.serverbid.com%2Fusersync%3Fttt%3D3%26src%3D2%26cspi%3D0%26cn%3D3%26spui%3D%26dpui%3D',gdpr,gdprcs,usp,gpp,gppsid);
    
    createIframe('https://onetag-sys.com/usync/?pubId=6c68086c0c61793&gdpr=${GDPR}&gdpr_consent=${GDPR_CS}&us_privacy=${US_PRIVACY}',gdpr,gdprcs,usp,gpp,gppsid);
    
    createIframe('https://secure-assets.rubiconproject.com/utils/xapi/multi-sync.html?p=24856&endpoint=us-east',gdpr,gdprcs,usp,gpp,gppsid);
    
  }
})();