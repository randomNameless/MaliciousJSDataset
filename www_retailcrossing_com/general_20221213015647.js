
function newwindow(e){window.open(e,"NewWindow","width=668,height=550,scrollbars=yes,toolbar=no,menubar=no,top=75,left=75,resizable=no")}function whatsthis2(e){OpenWin=this.open(e,"PopupWindow","toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=no,width=668,height=550,top=75,left=75")}function whatsthis1(e){OpenWin=this.open(e,"CtrlWindow","toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=no,width=668,height=550,top=75,left=75")}function givename(){window.name="lcwa"}function setfocusvalue(e,t){e.value==t&&(e.value="")}function getfocusvalue(e,t){""==e.value&&(e.value=t)}function mailtocolleague(e,t){var r="http://"+window.location.hostname+"/lcmailtocolleague.php?a=a";"undefined"!=typeof e&&(r=r+"&title="+escape(e)),"undefined"!=typeof t&&(r=r+"&url="+escape(t)),window.open(r,"mailtocollegue","height=600,width=668,scrollbars=yes,toolbar=no,menubar=no,top=75,left=75")}function ValidatorTrim(e){return e=e.match(/^\s*(\S+(\s+\S+)*)\s*$/),null==e?"":e[1]}function isInteger(e){var t;for(t=0;t<e.length;t++){var r=e.charAt(t);if("0">r||r>"9")return!1}return!0}function stripCharsInBag(e,t){var r,o="";for(r=0;r<e.length;r++){var a=e.charAt(r);-1==t.indexOf(a)&&(o+=a)}return o}function checklength(e,t){return e.value.length<t?!1:!0}function MM_swapImgRestore(){var e,t,r=document.MM_sr;for(e=0;r&&e<r.length&&(t=r[e])&&t.oSrc;e++)t.src=t.oSrc}function MM_preloadImages(){var e=document;if(e.images){e.MM_p||(e.MM_p=[]);var t,r=e.MM_p.length,o=MM_preloadImages.arguments;for(t=0;t<o.length;t++)0!=o[t].indexOf("#")&&(e.MM_p[r]=new Image,e.MM_p[r++].src=o[t])}}function MM_findObj(e,t){var r,o;for(t||(t=document),0<(r=e.indexOf("?"))&&parent.frames.length&&(t=parent.frames[e.substring(r+1)].document,e=e.substring(0,r)),!(o=t[e])&&t.all&&(o=t.all[e]),r=0;!o&&r<t.forms.length;r++)o=t.forms[r][e];for(r=0;!o&&t.layers&&r<t.layers.length;r++)o=MM_findObj(e,t.layers[r].document);return!o&&document.getElementById&&(o=document.getElementById(e)),o}function MM_swapImage(){var e,t,r=0,o=MM_swapImage.arguments;for(document.MM_sr=[],e=0;e<o.length-2;e+=3)null!=(t=MM_findObj(o[e]))&&(document.MM_sr[r++]=t,t.oSrc||(t.oSrc=t.src),t.src=o[e+2])}function preloadimages(){for(i=0;i<preloadimages.arguments.length;i++)myimages[i]=new Image,myimages[i].src=preloadimages.arguments[i]}function lostarticlestring(){document.articleform.clsarticle_keywords.value=""}function articlesearch(){""==ValidatorTrim(document.articleform.clsarticle_keywords.value)?alert("Keywords are required field"):"Search Article"==ValidatorTrim(document.articleform.clsarticle_keywords.value)?alert("Keywords are required field"):document.articleform.submit()}function lostexcarticlestring(){document.articleform.clsarticle_exckeywords.value=""}function articleexcsearch(){""==ValidatorTrim(document.articleform.clsarticle_exckeywords.value)?alert("Keywords are required field"):"Search Exclusive Articles"==ValidatorTrim(document.articleform.clsarticle_exckeywords.value)?alert("Keywords are required field"):(document.articleform.action="lcexclusivearticlearchive.php",document.articleform.submit())}function checkEmail(e){var t="";return t=""==e?"You did not enter an email-address.\n":/^\w+(\'|)([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(e)?"":"Please enter a valid email address.\n"}function addbookmark(e,t){window.sidebar&&window.sidebar.addPanel(t,e,""),document.all&&window.external.AddFavorite(e,t)}function lcnearyou(){window.open(HTTP+"lcnearyoupopup.php","lcnearyoupopup","resizable=no,height=300,width=188,toolbar=no,scrollbars=yes,top=80,left=100,titlebar=yes")}function revealjobdetail(){document.formmyjobalert.clsjobalert_hdnsubmited.value=1,document.formmyjobalert.clsjobalert_hdnaction.value="Reveal",document.formmyjobalert.submit()}function hidejobdetail(){document.formmyjobalert.clsjobalert_hdnsubmited.value=1,document.formmyjobalert.clsjobalert_hdnaction.value="Hide",document.formmyjobalert.submit()}function deletemyjobalert(){for(delflag=!1,i=0;i<document.formmyjobalert.elements.length;i++)"checkbox"==document.formmyjobalert.elements[i].type&&1==document.formmyjobalert.elements[i].checked&&(delflag=!0);delflag?confirm("Are You sure to delete the job?")&&(document.formmyjobalert.clsjobalert_hdnsubmited.value=1,document.formmyjobalert.clsjobalert_hdnaction.value="D",document.formmyjobalert.submit()):alert("Please select atleast one job alert.")}function emailmejobalert(){for(delflag=!1,i=0;i<document.formmyjobalert.elements.length;i++)"checkbox"==document.formmyjobalert.elements[i].type&&1==document.formmyjobalert.elements[i].checked&&(delflag=!0);delflag?(document.formmyjobalert.clsjobalert_hdnsubmited.value=1,document.formmyjobalert.clsjobalert_hdnaction.value="MailMe",document.formmyjobalert.submit()):alert("Please select atleast one job alert for Email.")}function cancelemailmyjobalert(){for(delflag=!1,i=0;i<document.formmyjobalert.elements.length;i++)"checkbox"==document.formmyjobalert.elements[i].type&&1==document.formmyjobalert.elements[i].checked&&(delflag=!0);delflag?(document.formmyjobalert.clsjobalert_hdnsubmited.value=1,document.formmyjobalert.clsjobalert_hdnaction.value="MailCancel",document.formmyjobalert.submit()):alert("Please select atleast one job alert for Email Delete.")}function openwinjobalert(e){document.formmyjobalert.clsjobalert_jaid.value=e,document.formmyjobalert.action=HTTP+"lcjsadvancesearch.php",document.formmyjobalert.submit()}function deletejobalert(e){confirm("Are You sure to delete the job?")&&(document.formmyjobalert.clsjobalert_hdnsubmited.value=1,document.formmyjobalert.clsjobalert_hdnaction.value="D",document.formmyjobalert.clsjobalert_jaid.value=e,document.formmyjobalert.submit())}function tellafriend(e){window.open(HTTP+"lctellafriend.php?source="+e,"tellafriend","height=500,width=616,left=75,top=75,scrollbars=yes,resizable=no")}function signinquicktour(){window.open(HTTP+"lcsignedtour.php","mywinhomeqt","height=411,width=578,toolbar=no,top=80,left=100,scrollbars=no")}function qthome(){theight=screen.height-60,692<theight&&(theight=499),tmp="height="+theight+",width=595,toolbar=no,top=75,left=100,scrollbars=yes",window.open(HTTP+"quicktour/qt1.htm","mywinhomeqt",tmp)}function searchpagevalidation(){for(err="",flg=!0,i=0;i<document.forms.formjobsrch.elements.length;i++)"select-one"==document.forms.formjobsrch.elements[i].type&&(flg=flg&&0==document.forms.formjobsrch.elements[i].value);flg&&(err="Select atleast one item"),""!=err?alert(err):(document.forms.formjobsrch.target="lcwa",document.forms.formjobsrch.action=HTTP+"lcjssearchresults.php",document.forms.formjobsrch.submit())}function searchjobalert(e){document.formmyjobalert.clsjobalert_hdnsubmited.value=1,document.formmyjobalert.clsjobalert_jaid.value=e,document.formmyjobalert.action=HTTP+"lcjssearchresults.php",document.formmyjobalert.submit()}function ajaxpage(e,t){var r=!1;if(window.XMLHttpRequest)r=new XMLHttpRequest;else{if(!window.ActiveXObject)return!1;try{r=new ActiveXObject("Msxml2.XMLHTTP")}catch(o){try{r=new ActiveXObject("Microsoft.XMLHTTP")}catch(a){}}}if(r.onreadystatechange=function(){loadpage(r,t)},bustcachevar)var l=-1!=e.indexOf("?")?"&"+(new Date).getTime():"?"+(new Date).getTime();r.open("GET",e+l,!0),r.send(null)}function loadpage(e,t){4!=e.readyState||200!=e.status&&-1!=window.location.href.indexOf("http")||(document.getElementById(t).innerHTML=e.responseText)}function loadobjs(){if(document.getElementById)for(i=0;i<arguments.length;i++){var e=arguments[i],t="";-1==loadedobjects.indexOf(e)&&(-1!=e.indexOf(".js")?(t=document.createElement("script"),t.setAttribute("type","text/javascript"),t.setAttribute("src",e)):-1!=e.indexOf(".css")&&(t=document.createElement("link"),t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css"),t.setAttribute("href",e))),""!=t&&(document.getElementsByTagName("head").item(0).appendChild(t),loadedobjects+=e+" ")}}function testimonialpopup(){window.open(HTTP+"lctestimonialpopup.php","testimonialpopup","height=550,width=668,left=75,top=75,scrollbars=yes,resizable=no")}function Swapbgon(e){e.className="cell1"}function Swapbgoff(e){e.className="cell1"}function pagerefresh(){location.reload()}function hide_table(){""==show_info&&createCookie("info_flag","no",0),window.location.reload(!0)}function createCookie(e,t,r){if(r){var o=new Date;o.setTime(o.getTime()+864e5*r),r="; expires="+o.toGMTString()}else r="";document.cookie=e+"="+t+r+"; path=/"}function readCookie(e){for(var e=e+"=",t=document.cookie.split(";"),r=0;r<t.length;r++){for(var o=t[r];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(e))return o.substring(e.length,o.length)}return""}function eraseCookie(e){createCookie(e,"",-1)}function testIsValidObject(e){return null==e||"undefined"==typeof e?!1:!0}function pos(a){if(testIsValidObject(document.images[a]))if(imgElem=document.images[a],isNS)xPos=eval(imgElem).x,yPos=eval(imgElem).y;else{for(xPos=eval(imgElem).offsetLeft,tempEl=eval(imgElem).offsetParent;null!=tempEl;)xPos+=tempEl.offsetLeft,tempEl=tempEl.offsetParent;for(yPos=eval(imgElem).offsetTop,tempEl=eval(imgElem).offsetParent;null!=tempEl;)yPos+=tempEl.offsetTop,tempEl=tempEl.offsetParent;yPos+=65,xPos-=25}}function showObject(e,t,r){e=null==e?"img_normal":e,t=null==t?"bigimage":t,r=null==r?"article_img_enlarge":r,pos(e),testIsValidObject(document.images[e])&&(w1=document.images[e].width,w2=345,w3=document.images[t].width,e=xPos-10,t=yPos,document.getElementById(r).style.left=e,document.getElementById(r).style.top=t-70,document.getElementById(r).style.borderColor="red",document.getElementById(r).style.visibility=VISIBLE)}function hideObject(e){document.getElementById(null==e?"article_img_enlarge":e).style.visibility=HIDDEN}function showObject1(e,t,r){e=null==e?"img_normal":e,t=null==t?"bigimage":t,r=null==r?"article_img_enlarge":r,pos(e),testIsValidObject(document.images[e])&&(w1=document.images[e].width,w2=345,w3=document.images[t].width,e=xPos-75,t=yPos,document.getElementById(r).style.left=e,document.getElementById(r).style.top=t-70,document.getElementById(r).style.borderColor="red",document.getElementById(r).style.visibility=VISIBLE)}function scnearyoudy(e,t){document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="220" height="175" id="map" align="middle">'),document.write('<param name="allowScriptAccess" value="sameDomain" />'),document.write('<param name="wmode" value="transparent" />'),document.write('<param name="movie" value="'+e+"map.swf?newColor_idle=0xc1b900&newColor_onOver=0x009EE0&newColor_onOut=0xc1b900&interval=1000&domainName="+t+'&font_size=9&target=_self" /><param name="quality" value="high" /><param name="bgcolor" value="#ffffff" />'),document.write('<embed src="'+e+"map.swf?newColor_idle=0xc1b900&newColor_onOver=0x009EE0&newColor_onOut=0xc1b900&interval=1000&domainName="+t+'&font_size=9&target=_self" quality="high" bgcolor="#ffffff" width="220" height="175" name="map" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" wmode="transparent" />'),document.write("</object>")}function scnearyoudybig(e,t){document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="550" height="440" id="map" align="middle">'),document.write('<param name="allowScriptAccess" value="sameDomain" />'),document.write('<param name="wmode" value="transparent" />'),document.write('<param name="movie" value="'+e+"map_statelink.swf?newColor_idle=0xc1b900&newColor_onOver=0x009EE0&newColor_onOut=0xc1b900&interval=1000&domainName="+t+'&target=_self&font_size=6&redirectLink=lcjssearchresults.php?lq=" /><param name="quality" value="high" /><param name="bgcolor" value="#ffffff" />'),document.write('<embed src="'+e+"map_statelink.swf?newColor_idle=0xc1b900&newColor_onOver=0x009EE0&newColor_onOut=0xc1b900&interval=1000&domainName="+t+'&target=_self&font_size=6&redirectLink=lcjssearchresults.php?lq=" quality="high" bgcolor="#ffffff" width="550" height="440" name="map" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" wmode="transparent" />'),document.write("</object>")}function NewWindow(e,t,r,o,a){winprops="height="+o+",width="+r+",top="+(screen.height-o)/2+",left="+(screen.width-r)/2+",scrollbars="+a+",resizable",win=window.open(e,t,winprops),4<=parseInt(navigator.appVersion)&&win.window.focus()}function copy(e){window.clipboardData.setData("Text",e)}function login(){var e="";return""==ValidatorTrim(document.loginform.clslogin_username.value)&&(e+="Screen Name is required field \n"),""==ValidatorTrim(document.loginform.clslogin_password.value)&&(e+="Password is required field"),""!=e?(alert(e),!1):(pagesubmited=!0,void(document.loginform.clslogin_hdnsubmited.value="1"))}function ThomasPPASurvey(e){document.formthomasppa.clsthomasppasurvey_termsandcondition.checked?(document.formthomasppa.action=e+"lcppauserdetail.php",document.formthomasppa.clsthomasppasurvey_hdnaction.value="RetriveUserDetail",document.formthomasppa.clsthomasppasurvey_hdnsubmited.value=1,document.formthomasppa.submit(),createCookie("thomasppapopupstatus","No")):alert("Please accept Terms and Condition first.")}function termsconditions(e){window.open(e+"lcppaterms.php","Toggle","height=750,width=800,statusbar=no,toolbar=no,,scrollbars=yes,top="+(screen.height-750)/2+",left="+(screen.width-800)/2+",titlebar=no")}function logout(){document.loginform.clslogin_hdnsubmited.value="1",document.loginform.submit()}function jobnearyou(e){window.open(e,"","width=200,height=400,top=20, left=80,scrollbars=yes")}function validsubmit_signup(){document.frmRightSignUP.clssignup_hdnsubmited.value="1",document.frmRightSignUP.submit()}function showdefaulttextforlocation(e){e&&""==e.value&&(e.value="Eg. Atlanta, GA or 30301")}function setloctionstring(e){e&&"Eg. Atlanta, GA or 30301"==e.value&&(e.value="")}function createRequestObject(){var e=navigator.appName;return window.opera||"Microsoft Internet Explorer"!=e?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")}function getStates(e,t){countryid=document.getElementById(e).value,http.open("get","http://"+window.location.hostname+"/lcgetstates.php?mode=ajax&countryid="+countryid),http.onreadystatechange=function(){4==http.readyState&&handleCountryChange(t)},http.send(null)}function handleCountryChange(e){if(strStates=http.responseText,stateSelect=document.getElementById(e),stateSelect.options.length=0,stateSelect.options[0]=new Option("Select State",0),""!=strStates)for(arrStates=strStates.split("##"),i=0;i<arrStates.length;i++)strState=arrStates[i],arrState=strState.split("::"),stateSelect.options[i+1]=new Option(arrState[1],arrState[0])}function chknewswireform(e){var t="";return""==ValidatorTrim(document.getElementById(e).clsnewswire_email.value)||"Enter Your Email"==ValidatorTrim(document.getElementById(e).clsnewswire_email.value)?(alert(t+"Email Address is required field.\n"),!1):(t+=checkEmail(document.getElementById(e).clsnewswire_email.value),""!=t?(alert(t),!1):(document.getElementById(e).clsnewswire_hdnaction.value="Subscribe",!0))}function writeHTMLasJS(e,t){document.write("<div class='share share_type_facebook'><a onclick=\"javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=600'); return false;\" href='https://www.facebook.com/sharer.php?u="+e+"' id='ref_fb' class='share__btn' rel='nofollow'>Share</a></div>"),document.write("<div class='share share_type_gplus'><a onclick=\"javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=600'); return false;\" href='https://plus.google.com/share?url="+e+"' id='ref_gp' class='share__btn' rel='nofollow'>+1</a></div>"),document.write("<div class='share share_type_twitter'><a onclick=\"javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=600'); return false;\" href='http://twitter.com/home?status="+t+"+"+e+"' id='ref_tw' class='share__btn' rel='nofollow'>Tweet</a></div>"),document.write("<div class='share share_type_link'><a onclick=\"javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=600'); return false;\" href='http://www.linkedin.com/shareArticle?mini=true&amp;url="+e+"&amp;title="+t+"' id='ref_lk' class='share__btn' rel='nofollow'>Linkedin</a></div>")}function googleShare(e,t){var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://apis.google.com/js/plusone.js";var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(r,o),attrib="",""!=e&&(attrib="data-href='"+e+"'"),document.write("1"==t?'<div class="g-follow" data-annotation="bubble" data-height="20" data-href="https://plus.google.com/106735840253810275270" data-rel="publisher"></div>&nbsp;&nbsp;':'<div class="g-plusone" data-size="medium" '+attrib+"></div>")}function twitterShare(e,t){attrib="",""!=e&&(attrib="data-url='"+e+"'"),!function(e,t,r){var o,a=e.getElementsByTagName(t)[0],l=/^http:/.test(e.location)?"http":"https";e.getElementById(r)||(o=e.createElement(t),o.id=r,o.src=l+"://platform.twitter.com/widgets.js",a.parentNode.insertBefore(o,a))}(document,"script","twitter-wjs"),document.write("1"==t?'<a href="https://twitter.com/EmployCrossing" class="twitter-follow-button" data-show-count="false" data-show-screen-name="false">Follow @Law_Crossing</a>&nbsp;&nbsp;':'<a href="https://twitter.com/share" class="twitter-share-button" '+attrib+">Tweet</a>")}function facebookShare(e,t,r,o){var a,l=e.getElementsByTagName(t)[0];e.getElementById(r)||(a=e.createElement(t),a.id=r,a.src="//connect.facebook.net/en_GB/all.js#xfbml=1",l.parentNode.insertBefore(a,l),attrib="",""!=o&&(attrib="data-href='https://www.facebook.com/EmploymentCrossing'"),document.write('<div class="fb-like" data-width="450" data-layout="button_count" data-show-faces="true" data-send="true" style="margin-right:9px;" '+attrib+"></div>"))}function linkedinShare(e,t){attrib="",""!=e&&(attrib="data-url='"+e+"'"),document.writeln("1"==t?"<script src='//platform.linkedin.com/in.js' type='text/javascript' >lang: en_US</script><script type='IN/FollowCompany' data-id='291671'  data-counter='right'></script>":"<script src='//platform.linkedin.com/in.js' type='text/javascript' "+attrib+">lang: en_US</script><script type='IN/Share' data-counter='right'></script>")}function getSocialIcon(e,t){facebookShare(document,"script","facebook-jssdk",e),googleShare(e,t),linkedinShare(e,t),twitterShare(e,t)}function getSocialIconRightSide(e){str="<div class='fixedSocialIcon'>",str+="<ul>",str+="<li style='left: 0px;' class='facebook'><a href='https://www.facebook.com/sharer.php?u="+e+"' target='_blank'><span></span>facebook</a></li>",str+="<li style='left: 0px;' class='googlePlus'><a href='https://plus.google.com/share?url="+e+"' target='_blank'><span></span>googlePlus</a></li>",str+="<li style='left: 0px;' class='twitter'><a href='http://twitter.com/home?status="+encodeURIComponent(document.title)+"+"+e+"' target='_blank'><span></span>twitter</a></li>",str+="<li style='left: 0px;' class='linkedin'><a href='http://www.linkedin.com/shareArticle?mini=true&amp;url="+e+"&amp;title="+encodeURIComponent(document.title)+"' target='_blank'><span></span>linkedin</a></li>",str+="</ul>",str+="</div>",document.write(str)}function printBannerAd(e,t,r,o){var a="https:"==location.protocol?"https://media.employmentscape.com/www/empsc/empajs.php":"http://media.employmentscape.com/www/empsc/empajs.php",l=Math.floor(99999999999*Math.random());document.MAX_used||(document.MAX_used=","),document.write("<script type='text/javascript' src='"+a),document.write("?zoneid="+e+"&amp;block="+t+"&amp;blockcampaign="+r),document.write("&amp;cb="+l),","!=document.MAX_used&&document.write("&amp;exclude="+document.MAX_used),document.write(document.charset?"&amp;charset="+document.charset:document.characterSet?"&amp;charset="+document.characterSet:""),document.write("&amp;loc="+escape(window.location)),document.referrer&&document.write("&amp;referer="+escape(document.referrer)),document.context&&document.write("&context="+escape(document.context)),document.mmm_fo&&document.write("&amp;mmm_fo=1"),document.write("'></script>")}function getFooterJobsearchLinks(e,t,r){return str='<div class="col-xs-3">',str+='<div class="outer">',str+="<h5>Job Search</h5>",str+='<ul class="list-unstyled footer_Link">',t&&(str+='<li><a rel="nofollow" href="https://www.employmentcrossing.com/lcsignin.php?refid=1500&offer_page=119" target="_parent">Sign Up</a></li>'),str+='<li><a rel="nofollow" href="'+e+'lcbenefitschart.php" target="_parent">'+r+" Benefits</a></li>",str+='<li><a rel="nofollow" href="'+e+'lctestimonials.php" target="_parent">Reviews</a></li>',str+='<li><a rel="nofollow" href="'+e+'lcfaqs.php" target="_parent">Job Search Advice</a></li>',str+='<li><a rel="nofollow" href="'+e+'lcjsadvancesearch.php" target="_parent">Advanced Job Search</a></li>',str+='<li><a rel="nofollow" href="'+e+'lcjobsecretvideo.php" target="_parent">Five Big Secrets of Job Sites</a></li>',str+="</ul>",str+="</div>",str+="</div>",str}function getFooterResourcesLinks(e,t){str='<div class="col-xs-4">',str+='<div class="outer">',str+="<h5>Job Seekers-Resources</h5>",str+='<ul class="list-unstyled footer_Link">',str+='<li><a rel="nofollow" href="'+e+'article/lcarticlearchive.php" target="_parent">Career Advice Articles</a></li>',str+='<li><a rel="nofollow" href="'+e+'article/lcarticlearchive.php?type=822" target="_parent">'+t+" Career Feature</a></li>",str+='<li><a rel="nofollow" href="'+e+'article/lcarticlearchive.php?type=826" target="_parent">'+t+" News</a></li>",str+='<li><a rel="nofollow" href="'+e+'article/lcarticlearchive.php?type=824" target="_parent">'+t+" Career Tips</a></li>",""==t?str+='<li><a rel="nofollow" href="'+e+'article/lcarticlearchive.php?type=821" target="_parent">Employment Star</a></li>':str+='<li><a rel="nofollow" href="'+e+'article/lcarticlearchive.php?type=821" target="_parent">'+t+" Star</a></li>",str+='<li><a rel="nofollow" href="'+e+'article/lcarticlearchive.php?type=823" target="_parent">'+t+" Job Profile</a></li>",str+='<li><a rel="nofollow" href="'+e+'lcreferral.php" target="_parent">Invite A Friend</a></li>',str+="</ul>",str+="</div>",str+="</div>",document.write(str)}
function getFooterGeneralResourcesLinks(r){str='<div class="col-xs-5">',str+="<h5>General Resources</h5>",str+='<div class="col-xs-6">',str+='<div class="row">',str+='<ul class="list-unstyled footer_Link">',str+='<li><a rel="nofollow" href="'+r+'lcpostnowjob.php" target="_parent">Employers / Recruiters - Post Jobs</a></li>',str+='<li><a rel="nofollow" href="'+r+'lcabout.php" target="_parent">About Us</a></li>',str+='<li><a rel="nofollow" href="'+r+'lchistory.php" target="_parent">History</a></li>',str+='<li><a rel="nofollow" href="'+r+'lcabout.php#ourmission" target="_parent">Our Mission</a></li>',str+='<li><a rel="nofollow" href="'+r+'lcterms.php" target="_parent">Terms of Use</a></li>',str+='<li><a rel="nofollow" href="'+r+'lcprivacy.php" target="_parent">Privacy</a></li>',str+='<li><a rel="nofollow" href="'+r+'lchelp.php" target="_parent">Communicate</a></li>',str+='<li><a rel="nofollow" href="'+r+'lccontactus.php" target="_parent">Contact Us</a></li>',str+='<li><a rel="nofollow" href="javascript:quicktour();">Quick Tour</a></li>',str+="</ul>",str+="</div>",str+="</div>",str+='<div class="col-xs-6">',str+='<ul class="list-unstyled footer_Link">',str+='<li><a rel="nofollow" href="'+r+'lcpressroom.php" target="_parent">Press Room</a></li>',str+='<li><a rel="nofollow" href="'+r+'lcsearchsites.php" target="_parent">Crossing Sites</a></li>',str+='<li><a rel="nofollow" href="'+r+'sitemap.php" target="_parent">Site Map</a></li>',str+='<li><a rel="nofollow" href="'+r+'lcguarantee.php" target="_parent">The EmploymentCrossing Guarantee</a></li>',str+='<li><a rel="nofollow" href="'+r+'lcadvertise.php" target="_parent">Advertise with Us</a></li>',str+='<li><a rel="nofollow" href="'+r+'lcourpromise.php" target="_parent">Our Promise</a></li>',str+='<li><a rel="nofollow" href="'+r+'lcwhatitcosts.php" target="_parent">Why We\'re Not Free</a></li>';var t=1;str+=t>=8&&t<16?"<li><a href=\"javascript: void(0);\" onClick=\"javascript: window.open('http://eri.kayako.com/visitor/index.php?/employmentcrossing/LiveChat/Chat/Request/_sessionID=/_promptType=chat/_proactive=0/_filterDepartmentID=8/_randomNumber=05jozs5z9hmd5s80a6y90s9vpl68csbq/_fullName=/_email=/', 'livechatwin', 'toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=0,resizable=1,width=650,height=750');\" class=\"livechatlink\">Live Chat</a></li>":" ",str+='<li><a rel="nofollow" href="'+r+'lcwarning.php" target="_parent">Warning</a></li>',str+="</ul>",str+="</div>",str+="</div>",document.write(str)}
function NewSignUpEmailValidation(e){return err="",""==ValidatorTrim(document.getElementById(e).value)?err+="Email is required field \n":err+=checkEmail(document.getElementById(e).value),""!=err?(alert(err),!1):!0}function resumeUploadValidation(e){var t="";return str=document.getElementById(e).value,""==ValidatorTrim(document.getElementById(e).value)&&(t+="You must select File to Upload.\n"),""!=ValidatorTrim(document.getElementById(e).value)&&(".txt"!=str.substr(str.length-4)&&".doc"!=str.substr(str.length-4)&&".pdf"!=str.substr(str.length-4)&&".xls"!=str.substr(str.length-4)&&".wpd"!=str.substr(str.length-4)&&".DOC"!=str.substr(str.length-4)&&".TXT"!=str.substr(str.length-4)&&".PDF"!=str.substr(str.length-4)&&".XLS"!=str.substr(str.length-4)&&".WPD"!=str.substr(str.length-4)&&".htm"!=str.substr(str.length-4)&&".HTM"!=str.substr(str.length-4)&&".html"!=str.substr(str.length-5)&&".HTML"!=str.substr(str.length-5)&&".docx"!=str.substr(str.length-5)&&".DOCX"!=str.substr(str.length-5)&&(t+="File must be in .txt,.doc,.pdf,.xls,.htm,.html,.docx or .wpd format.\n"),"Microsoft Internet Explorer"!=navigator.appName&&document.getElementById(e).files[0].size/1024/1024>5&&(t+="File size is too large,please files up to 5MB \n")),""!=t?(alert(t),!1):!0}var dtCh="/",minYear=1,maxYear=99,myimages=[],orgwinname=window.name,LCWAWINDOWNAME;window.name=LCWAWINDOWNAME;var bustcachevar=1,loadedobjects="",rootdomain="http://"+window.location.hostname,xPos,yPos;yPos=xPos=0;var HIDDEN=isNS?"hide":"hidden",VISIBLE=isNS?"show":"visible",isNS="Netscape"==navigator.appName&&4<=parseInt(navigator.appVersion);document.onkeydown=function(e){return(e=e?e:"undefined"!=typeof event?event:null)?void(27==e.keyCode&&(document.getElementById("eapopup")?"block"==document.getElementById("eapopup").style.display&&closedivpopup("eapopup"):document.getElementById("over")&&"block"==document.getElementById("over").style.display&&closepopup())):0};var http=createRequestObject();