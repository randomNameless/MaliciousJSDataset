
(function(){if(!window.console){window.console={};}
var m=["log","info","warn","error","debug","trace","dir","group","groupCollapsed","groupEnd","time","timeEnd","profile","profileEnd","dirxml","assert","count","markTimeline","timeStamp","clear"];for(var i=0;i<m.length;i++){if(!window.console[m[i]]){window.console[m[i]]=function(){};}}})();function trackVirtualPage(link){_gaq.push('_trackPageview',link.href);setTimeout('window.location = "'+link.href+'"',100);}
function tryGoBack(link){referrer=document.referrer;if(referrer!=''&&!referrer.indexOf('alacraswitchISAPI.dll',referrer.length-21)!==-1&&referrer!=window.location.href){window.location=referrer;}else{window.location='/';}}
function changeFormAction(postfrom,postto)
{var form=document.getElementById(postfrom);if(form)
{form.action=postto;}}
function sanitizeSubmit(a){}
function storeSearchSubmitHandler(form){if(form.children.namedItem('keyword').value===''){alert('Please enter a search query.');return false;}}
function ClearKeywordSearch(){var kw=document.getElementById('keyword');if(kw&&kw.value=='Search entire store here...'){kw.value='';}}
function displayelements(args)
{var e;for(var i=0;i<arguments.length;i=i+2)
{e=document.getElementById(arguments[i]);if(e){e.style.display=arguments[i+1];}}}
function setformfocus(elementname)
{var e=document.getElementById(elementname);if(e)
{e.focus();}}
function sf()
{setformfocus("keyword");}
function EnableAsyncDB(dbname)
{displayelements(dbname,'block');}
function openNewWindowStyle(newurl,style){window.name="alacra_parent";var url=newurl;var winName="viewWindow"+Math.floor(Math.random()*100000);var hWnd=window.open(url,winName,style);if(hWnd!=null){if(hWnd.opener==null){hWnd.opener=self;window.name="home";hWnd.location.href=url;}}}
function openNewWindow(newurl){openNewWindowStyle(newurl,"directories=no,menubar=no,toolbar=yes,resizable=yes,scrollbars=yes,status=no,width=850,height=500");}
function Sort(criteria,direction)
{var a=document.getElementById('sortdirection');var b=document.getElementById('sortcriteria');var c=document.getElementById('firstindex');if(a)
{a.value=direction;}
if(b)
{b.value=criteria;}
if(c)
{c.value=1;}
document.forms[document.forms.length-1].submit();return false;}
function getQueryStringValByKey(key){var qs=window.location.href.slice(window.location.href.indexOf('?')+1).split('&');for(var i=0;i<qs.length;i++){pair=qs[i].split('=');if(pair[0]===key){return pair[1]}}
return null;}
function contains(a,obj){for(var i=0;i<a.length;i++){if(a[i]===obj){return true;}}
return false;}
function getQueryStringPairs(aOmit){var pairs=[];var qloc=window.location.href.indexOf('?');if(qloc===-1)
return null;var qs=window.location.href.slice(qloc+1).split('&');for(var i=0;i<qs.length;i++){q=qs[i];sep=q.indexOf('=');if(sep>-1){pair=[q.substring(0,sep),q.substring(sep+1)];if(pair[0]!==''&&!contains(aOmit,pair[0]))
pairs.push(pair);}}
return pairs;}
window.alacra=window.alacra||{};alacra.pagination={gotopage:function(num,params,batchsize){var startval=(num-1)*10;var currentqs=getQueryStringPairs(["firstindex"]);if(!!currentqs){var oldqs='';for(var i=0;i<currentqs.length;i++){q=currentqs[i];oldqs+=q[0]+"="+q[1]+"&";}}else{var oldqs='';}
window.location.assign("alacraswitchISAPI.dll?"+oldqs+"firstindex="+((parseInt(num)-1)*batchsize+1).toString());},goog:{state:{using_long_url:window.location.href.indexOf("/cgi-bin/alacraswitchISAPI.dll")>-1},gotopage:function(num){var startval=(num-1)*10;var oldqs='';var currentqs=getQueryStringPairs(["start"]);if(!!currentqs){for(var i=0;i<currentqs.length;i++){q=currentqs[i];oldqs+=q[0]+"="+q[1]+"&";}}
var href_core="?";if(this.state.using_long_url){href_core="alacraswitchISAPI.dll?";}
window.location.assign(href_core+oldqs+"start="+startval);}}};