/*Script to load footers in all pages*/ 

var year = new Date().getFullYear();
$("#footers_lo").empty()
$("#footers_lo").append(`<section class="mbr-section mbr-section-md-padding mbr-footer footer1" id="contacts1-2v"
                            style="background-color: rgb(255, 255, 255); padding-top: 30px; padding-bottom: 30px;">
                            <div class="container">
                                <div class="row">
                                    <div class="mbr-footer-content col-xs-12 col-md-3">
                                        <div>
                                            <img src="assets/images/ecn.175.gif">
                                            <div id="google_translate_element"></div>
                                        </div>
                                    </div>
                                    <div class="mbr-footer-content col-xs-12 col-md-3">
                                        <p></p>
                                        <p><strong><a href="search.html" class="text-black">Job Search</a></strong></p>
                                        <p><a href="applicant.html" class="lw100 text-info">Applicant Sign In/Join</a></p>
                                        <p><a href="search.html" class="lw100 text-black"
                                                style="font-size: 0.875rem; line-height: 1.5; background-color: rgb(255, 255, 255);">Search
                                                Jobs</a></p>
                                        <p><a href="search.html?new=7" class="lw100 text-info"
                                                style="font-size: 0.875rem; background-color: rgb(255, 255, 255); line-height: 1.5;">New
                                                Jobs this week</a></p>
                                        <p><a href="resources.html" class="lw100 text-black">Resources</a></p>
                                        <p><span style="font-size: 0.875rem; line-height: 1.5;"></span></p>
                                        <p></p>
                                    </div>
                                    <div class="mbr-footer-content col-xs-12 col-md-3">
                                        <p></p>
                                        <p>
                                            <strong>
                                                <span style="font-size: 0.875rem; line-height: 1.5;">
                                                    <a href="employer.html" class="text-black">For&nbsp;</a>
                                                </span>
                                                <span style="font-size: 0.875rem; background-color: rgb(255, 255, 255); line-height: 1.5;">
                                                    <a href="employer.html" class="text-black">Employers</a>
                                                </span>
                                            </strong>
                                        </p>
                                        <p><a href="employer.html" class="lw100 text-info">Employer Sign In/Join</a></p>
                                        <p><a href="associations.html" class="lw100 text-black">Affiliations and Associations</a></p>
                                        <p></p>
                                    </div>
                                    <div class="mbr-footer-content col-xs-12 col-md-3">
                                        <p>
                                            <strong><a href="about.html" class="text-black">About&nbsp;</a></strong>
                                            <a href="support.html" class="lw100 text-black"><br></a>
                                            <a href="about.html" class="lw100 text-info">About</a><br>
                                            <a href="support.html" class="lw100 text-black">Support</a>
                                            <a href="support.html" class="lw100 text-black"><br></a>
                                            <a href="contact.html" class="lw100 text-info">Contact Us</a><br>
                                            <a href="advertise.html" class="lw100 text-black">Banner and eMail Advertising</a><br>
                                            
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <footer class="mbr-small-footer mbr-section mbr-section-nopadding mbr-parallax-background" id="footer1-35" >
                            <div class="mbr-overlay" style="opacity: 0.6; background-color: rgb(68, 68, 68);"></div>
                            <div class="container">
                                <p class="text-xs-center"></p>
                                <p class="text-footer">Copyright &copy; 2001 - ${year} &nbsp; &nbsp;
                                    <a href="about.html" class="text-footer text-white">About</a> &nbsp; &nbsp;
                                    <a href="index.html"class="text-footer text-white">Education Canada Network</a>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href="terms.html" class="text-footer text-white">Terms of Use</a>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href="privacy.html" class="text-footer text-white">Privacy Policy</a>&nbsp; &nbsp;&nbsp;&nbsp;
                                    <a href="https://app.smartsheet.com/b/form/e8fddcd7edf2489f92e35bd18716915f" target="_blank" class="text-footer text-white">Report an Error</a>&nbsp; &nbsp;&nbsp;&nbsp;
                                </p>
                                <p></p>
                            </div>
                        </footer>`)


$("#navbar_lo").empty()
$("#navbar_lo").append(`<nav class="navbar navbar-dropdown navbar-fixed-top nav-new">
                            <div class="container">
                                <div class="mbr-table">
                                    <div class="mbr-table-cell">
                                        <div class="navbar-brand">
                                            <a href="index.html" class="navbar-logo"><img src="assets/images/ecn.350.webp" alt="Education Canada Network" title="Education Canada Network"></a>
                                        </div>
                                    </div>
                                    <div class="mbr-table-cell">
                                        <button class="navbar-toggler pull-xs-right hidden-md-up" type="button" data-toggle="collapse"data-target="#exCollapsingNavbar">
                                            <div class="hamburger-icon"></div>
                                        </button>
                                        <ul class="nav-dropdown collapse pull-xs-right nav navbar-nav navbar-toggleable-sm" id="exCollapsingNavbar">
                                            <li class="nav-item">
                                                <a class="nav-link link" href="index.html" aria-expanded="false">Home</a>
                                            </li>
                                            <li class="nav-item dropdown open">
                                                <a class="nav-link link dropdown-toggle" href="index.html" aria-expanded="true" data-toggle="dropdown-submenu">For Job Seekers</a>
                                                <div class="dropdown-menu general-drop">
                                                    <a class="dropdown-item" href="applicant.html">Applicant Sign In/Join</a>
                                                    <a class="dropdown-item" href="search.html">Search Jobs</a>
                                                    <a class="dropdown-item" href="search.html?employers=1">Search Employers</a>
                                                    <a class="dropdown-item" href="search.html?new=7">New Jobs this week</a>
                                                    <!--<a class="dropdown-item" href="https://educationcanada.com/search.html?employers=1&new=30">New Employers this month</a>-->
                                                    <a class="dropdown-item" href="resources.html">Resources</a>
                                                </div>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link link dropdown-toggle" href="index.html"aria-expanded="false" data-toggle="dropdown-submenu">For &nbsp;Employers</a>
                                                <div class="dropdown-menu general-drop"><a class="dropdown-item" href="employer.html">Employer Sign In/Join</a>
                                                    <a class="dropdown-item" href="associations.html">Affiliations and Associations</a>
                                                </div>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link link dropdown-toggle" href="index.html" aria-expanded="false" data-toggle="dropdown-submenu">About</a>
                                                <div class="dropdown-menu general-drop">
                                                    <a class="dropdown-item" href="about.html">About</a>
                                                    <a class="dropdown-item" href="support.html">Support</a>
                                                    <a class="dropdown-item" href="contact.html">Contact</a>
                                                    <a class="dropdown-item" href="advertise.html">Banner Advertising</a>
                                                    <a class="dropdown-item" href="associations.html"></a>
                                                </div>
                                            </li>
                                        </ul>
                                        <button hidden="" class="navbar-toggler navbar-close" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
                                            <div class="close-icon"></div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            </nav>`)

// Custom Scripts

// function googleTranslateElementInit() {
//     new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'fr,en', multilanguagePage: true}, 'google_translate_element');
//   }
  
  
//   // Minified Scripts
//   (function(){var gtConstEvalStartTime = new Date();/*
  
//    Copyright The Closure Library Authors.
//    SPDX-License-Identifier: Apache-2.0
//   */
//   function d(b){var a=document.getElementsByTagName("head")[0];a||(a=document.body.parentNode.appendChild(document.createElement("head")));a.appendChild(b)}function _loadJs(b){var a=document.createElement("script");a.type="text/javascript";a.charset="UTF-8";a.src=b;d(a)}function _loadCss(b){var a=document.createElement("link");a.type="text/css";a.rel="stylesheet";a.charset="UTF-8";a.href=b;d(a)}function _isNS(b){b=b.split(".");for(var a=window,c=0;c<b.length;++c)if(!(a=a[b[c]]))return!1;return!0}
//   function _setupNS(b){b=b.split(".");for(var a=window,c=0;c<b.length;++c)a.hasOwnProperty?a.hasOwnProperty(b[c])?a=a[b[c]]:a=a[b[c]]={}:a=a[b[c]]||(a[b[c]]={});return a}window.addEventListener&&"undefined"==typeof document.readyState&&window.addEventListener("DOMContentLoaded",function(){document.readyState="complete"},!1);
//   if (_isNS('google.translate.Element')){return}(function(){var c=_setupNS('google.translate._const');c._cest = gtConstEvalStartTime;gtConstEvalStartTime = undefined;c._cl='en';c._cuc='googleTranslateElementInit';c._cac='';c._cam='';c._ctkk='440335.1449305758';var h='translate.googleapis.com';var s=(true?'https':window.location.protocol=='https:'?'https':'http')+'://';var b=s+h;c._pah=h;c._pas=s;c._pbi=b+'/translate_static/img/te_bk.gif';c._pci=b+'/translate_static/img/te_ctrl3.gif';c._pli=b+'/translate_static/img/loading.gif';c._plla=h+'/translate_a/l';c._pmi=b+'/translate_static/img/mini_google.png';c._ps=b+'/translate_static/css/translateelement.css';c._puh='translate.google.com';_loadCss(c._ps);_loadJs(b+'/translate_static/js/element/main.js');})();})();



// function googleTranslateElementInit() {
//   new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'fr,en', multilanguagePage: true}, 'google_translate_element');
// }




// (function(){var gtConstEvalStartTime = new Date();
// var h=this||self,l=/^[\w+/_-]+[=]{0,2}$/,m=null;function n(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&l.test(a)?a:""}function p(a,b){function c(){}c.prototype=b.prototype;a.c=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.b=function(g,f,k){for(var e=Array(arguments.length-2),d=2;d<arguments.length;d++)e[d-2]=arguments[d];return b.prototype[f].apply(g,e)}}function q(a){return a};function r(a){if(Error.captureStackTrace)Error.captureStackTrace(this,r);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}p(r,Error);r.prototype.name="CustomError";function u(a,b){a=a.split("%s");for(var c="",g=a.length-1,f=0;f<g;f++)c+=a[f]+(f<b.length?b[f]:"%s");r.call(this,c+a[g])}p(u,r);u.prototype.name="AssertionError";function v(a,b){throw new u("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var w;function x(a,b){this.a=b===y?a:""}x.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};var y={};function z(a){var b=document.getElementsByTagName("head")[0];b||(b=document.body.parentNode.appendChild(document.createElement("head")));b.appendChild(a)}
// function _loadJs(a){var b=document;var c="SCRIPT";"application/xhtml+xml"===b.contentType&&(c=c.toLowerCase());c=b.createElement(c);c.type="text/javascript";c.charset="UTF-8";if(void 0===w){b=null;var g=h.trustedTypes;if(g&&g.createPolicy){try{b=g.createPolicy("goog#html",{createHTML:q,createScript:q,createScriptURL:q})}catch(t){h.console&&h.console.error(t.message)}w=b}else w=b}a=(b=w)?b.createScriptURL(a):a;a=new x(a,y);a:{try{var f=c&&c.ownerDocument,k=f&&(f.defaultView||f.parentWindow);k=k||h;
// if(k.Element&&k.Location){var e=k;break a}}catch(t){}e=null}if(e&&"undefined"!=typeof e.HTMLScriptElement&&(!c||!(c instanceof e.HTMLScriptElement)&&(c instanceof e.Location||c instanceof e.Element))){e=typeof c;if("object"==e&&null!=c||"function"==e)try{var d=c.constructor.displayName||c.constructor.name||Object.prototype.toString.call(c)}catch(t){d="<object could not be stringified>"}else d=void 0===c?"undefined":null===c?"null":typeof c;v("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
// "HTMLScriptElement",d)}a instanceof x&&a.constructor===x?d=a.a:(d=typeof a,v("expected object of type TrustedResourceUrl, got '"+a+"' of type "+("object"!=d?d:a?Array.isArray(a)?"array":d:"null")),d="type_error:TrustedResourceUrl");c.src=d;(d=c.ownerDocument&&c.ownerDocument.defaultView)&&d!=h?d=n(d.document):(null===m&&(m=n(h.document)),d=m);d&&c.setAttribute("nonce",d);z(c)}
// function _loadCss(a){var b=document.createElement("link");b.type="text/css";b.rel="stylesheet";b.charset="UTF-8";b.href=a;z(b)}function _isNS(a){a=a.split(".");for(var b=window,c=0;c<a.length;++c)if(!(b=b[a[c]]))return!1;return!0}function _setupNS(a){a=a.split(".");for(var b=window,c=0;c<a.length;++c)b.hasOwnProperty?b.hasOwnProperty(a[c])?b=b[a[c]]:b=b[a[c]]={}:b=b[a[c]]||(b[a[c]]={});return b}
// window.addEventListener&&"undefined"==typeof document.readyState&&window.addEventListener("DOMContentLoaded",function(){document.readyState="complete"},!1);
// if (_isNS('google.translate.Element')){return}(function(){var c=_setupNS('google.translate._const');c._cest = gtConstEvalStartTime;gtConstEvalStartTime = undefined;c._cl='en';c._cuc='googleTranslateElementInit';c._cac='';c._cam='';c._ctkk='445891.1817965529';var h='translate.googleapis.com';var s=(true?'https':window.location.protocol=='https:'?'https':'http')+'://';var b=s+h;c._pah=h;c._pas=s;c._pbi=b+'/translate_static/img/te_bk.gif';c._pci=b+'/translate_static/img/te_ctrl3.gif';c._pli=b+'/translate_static/img/loading.gif';c._plla=h+'/translate_a/l';c._pmi=b+'/translate_static/img/mini_google.png';c._ps=b+'/translate_static/css/translateelement.css';c._puh='translate.google.com';_loadCss(c._ps);_loadJs(b+'/translate_static/js/element/main.js');})();})();



function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'fr,en', multilanguagePage: true}, 'google_translate_element');
}

function loadGoogleTranslateScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.onload = googleTranslateElementInit;
    document.head.appendChild(script);
}

loadGoogleTranslateScript();