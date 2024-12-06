/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});

/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.3.6 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, https://github.com/requirejs/requirejs/blob/master/LICENSE
 */
//Not using strict: uneven strict support in browsers, #392, and causes
//problems with requirejs.exec()/transpiler plugins that may not be strict.
/*jslint regexp: true, nomen: true, sloppy: true */
/*global window, navigator, document, importScripts, setTimeout, opera */

var requirejs, require, define;
(function (global, setTimeout) {
    var req, s, head, baseElement, dataMain, src,
        interactiveScript, currentlyAddingScript, mainScript, subPath,
        version = '2.3.6',
        commentRegExp = /\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/mg,
        cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        jsSuffixRegExp = /\.js$/,
        currDirRegExp = /^\.\//,
        op = Object.prototype,
        ostring = op.toString,
        hasOwn = op.hasOwnProperty,
        isBrowser = !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document),
        isWebWorker = !isBrowser && typeof importScripts !== 'undefined',
        //PS3 indicates loaded and complete, but need to wait for complete
        //specifically. Sequence is 'loading', 'loaded', execution,
        // then 'complete'. The UA check is unfortunate, but not sure how
        //to feature test w/o causing perf issues.
        readyRegExp = isBrowser && navigator.platform === 'PLAYSTATION 3' ?
                      /^complete$/ : /^(complete|loaded)$/,
        defContextName = '_',
        //Oh the tragedy, detecting opera. See the usage of isOpera for reason.
        isOpera = typeof opera !== 'undefined' && opera.toString() === '[object Opera]',
        contexts = {},
        cfg = {},
        globalDefQueue = [],
        useInteractive = false;

    //Could match something like ')//comment', do not lose the prefix to comment.
    function commentReplace(match, singlePrefix) {
        return singlePrefix || '';
    }

    function isFunction(it) {
        return ostring.call(it) === '[object Function]';
    }

    function isArray(it) {
        return ostring.call(it) === '[object Array]';
    }

    /**
     * Helper function for iterating over an array. If the func returns
     * a true value, it will break out of the loop.
     */
    function each(ary, func) {
        if (ary) {
            var i;
            for (i = 0; i < ary.length; i += 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break;
                }
            }
        }
    }

    /**
     * Helper function for iterating over an array backwards. If the func
     * returns a true value, it will break out of the loop.
     */
    function eachReverse(ary, func) {
        if (ary) {
            var i;
            for (i = ary.length - 1; i > -1; i -= 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break;
                }
            }
        }
    }

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    function getOwn(obj, prop) {
        return hasProp(obj, prop) && obj[prop];
    }

    /**
     * Cycles over properties in an object and calls a function for each
     * property value. If the function returns a truthy value, then the
     * iteration is stopped.
     */
    function eachProp(obj, func) {
        var prop;
        for (prop in obj) {
            if (hasProp(obj, prop)) {
                if (func(obj[prop], prop)) {
                    break;
                }
            }
        }
    }

    /**
     * Simple function to mix in properties from source into target,
     * but only if target does not already have a property of the same name.
     */
    function mixin(target, source, force, deepStringMixin) {
        if (source) {
            eachProp(source, function (value, prop) {
                if (force || !hasProp(target, prop)) {
                    if (deepStringMixin && typeof value === 'object' && value &&
                        !isArray(value) && !isFunction(value) &&
                        !(value instanceof RegExp)) {

                        if (!target[prop]) {
                            target[prop] = {};
                        }
                        mixin(target[prop], value, force, deepStringMixin);
                    } else {
                        target[prop] = value;
                    }
                }
            });
        }
        return target;
    }

    //Similar to Function.prototype.bind, but the 'this' object is specified
    //first, since it is easier to read/figure out what 'this' will be.
    function bind(obj, fn) {
        return function () {
            return fn.apply(obj, arguments);
        };
    }

    function scripts() {
        return document.getElementsByTagName('script');
    }

    function defaultOnError(err) {
        throw err;
    }

    //Allow getting a global that is expressed in
    //dot notation, like 'a.b.c'.
    function getGlobal(value) {
        if (!value) {
            return value;
        }
        var g = global;
        each(value.split('.'), function (part) {
            g = g[part];
        });
        return g;
    }

    /**
     * Constructs an error with a pointer to an URL with more information.
     * @param {String} id the error ID that maps to an ID on a web page.
     * @param {String} message human readable error.
     * @param {Error} [err] the original error, if there is one.
     *
     * @returns {Error}
     */
    function makeError(id, msg, err, requireModules) {
        var e = new Error(msg + '\nhttps://requirejs.org/docs/errors.html#' + id);
        e.requireType = id;
        e.requireModules = requireModules;
        if (err) {
            e.originalError = err;
        }
        return e;
    }

    if (typeof define !== 'undefined') {
        //If a define is already in play via another AMD loader,
        //do not overwrite.
        return;
    }

    if (typeof requirejs !== 'undefined') {
        if (isFunction(requirejs)) {
            //Do not overwrite an existing requirejs instance.
            return;
        }
        cfg = requirejs;
        requirejs = undefined;
    }

    //Allow for a require config object
    if (typeof require !== 'undefined' && !isFunction(require)) {
        //assume it is a config object.
        cfg = require;
        require = undefined;
    }

    function newContext(contextName) {
        var inCheckLoaded, Module, context, handlers,
            checkLoadedTimeoutId,
            config = {
                //Defaults. Do not set a default for map
                //config to speed up normalize(), which
                //will run faster if there is no default.
                waitSeconds: 7,
                baseUrl: './',
                paths: {},
                bundles: {},
                pkgs: {},
                shim: {},
                config: {}
            },
            registry = {},
            //registry of just enabled modules, to speed
            //cycle breaking code when lots of modules
            //are registered, but not activated.
            enabledRegistry = {},
            undefEvents = {},
            defQueue = [],
            defined = {},
            urlFetched = {},
            bundlesMap = {},
            requireCounter = 1,
            unnormalizedCounter = 1;

        /**
         * Trims the . and .. from an array of path segments.
         * It will keep a leading path segment if a .. will become
         * the first path segment, to help with module name lookups,
         * which act like paths, but can be remapped. But the end result,
         * all paths that use this function should look normalized.
         * NOTE: this method MODIFIES the input array.
         * @param {Array} ary the array of path segments.
         */
        function trimDots(ary) {
            var i, part;
            for (i = 0; i < ary.length; i++) {
                part = ary[i];
                if (part === '.') {
                    ary.splice(i, 1);
                    i -= 1;
                } else if (part === '..') {
                    // If at the start, or previous value is still ..,
                    // keep them so that when converted to a path it may
                    // still work when converted to a path, even though
                    // as an ID it is less than ideal. In larger point
                    // releases, may be better to just kick out an error.
                    if (i === 0 || (i === 1 && ary[2] === '..') || ary[i - 1] === '..') {
                        continue;
                    } else if (i > 0) {
                        ary.splice(i - 1, 2);
                        i -= 2;
                    }
                }
            }
        }

        /**
         * Given a relative module name, like ./something, normalize it to
         * a real name that can be mapped to a path.
         * @param {String} name the relative name
         * @param {String} baseName a real name that the name arg is relative
         * to.
         * @param {Boolean} applyMap apply the map config to the value. Should
         * only be done if this normalization is for a dependency ID.
         * @returns {String} normalized name
         */
        function normalize(name, baseName, applyMap) {
            var pkgMain, mapValue, nameParts, i, j, nameSegment, lastIndex,
                foundMap, foundI, foundStarMap, starI, normalizedBaseParts,
                baseParts = (baseName && baseName.split('/')),
                map = config.map,
                starMap = map && map['*'];

            //Adjust any relative paths.
            if (name) {
                name = name.split('/');
                lastIndex = name.length - 1;

                // If wanting node ID compatibility, strip .js from end
                // of IDs. Have to do this here, and not in nameToUrl
                // because node allows either .js or non .js to map
                // to same file.
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                }

                // Starts with a '.' so need the baseName
                if (name[0].charAt(0) === '.' && baseParts) {
                    //Convert baseName to array, and lop off the last part,
                    //so that . matches that 'directory' and not name of the baseName's
                    //module. For instance, baseName of 'one/two/three', maps to
                    //'one/two/three.js', but we want the directory, 'one/two' for
                    //this normalization.
                    normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                    name = normalizedBaseParts.concat(name);
                }

                trimDots(name);
                name = name.join('/');
            }

            //Apply map config if available.
            if (applyMap && map && (baseParts || starMap)) {
                nameParts = name.split('/');

                outerLoop: for (i = nameParts.length; i > 0; i -= 1) {
                    nameSegment = nameParts.slice(0, i).join('/');

                    if (baseParts) {
                        //Find the longest baseName segment match in the config.
                        //So, do joins on the biggest to smallest lengths of baseParts.
                        for (j = baseParts.length; j > 0; j -= 1) {
                            mapValue = getOwn(map, baseParts.slice(0, j).join('/'));

                            //baseName segment has config, find if it has one for
                            //this name.
                            if (mapValue) {
                                mapValue = getOwn(mapValue, nameSegment);
                                if (mapValue) {
                                    //Match, update name to the new value.
                                    foundMap = mapValue;
                                    foundI = i;
                                    break outerLoop;
                                }
                            }
                        }
                    }

                    //Check for a star map match, but just hold on to it,
                    //if there is a shorter segment match later in a matching
                    //config, then favor over this star map.
                    if (!foundStarMap && starMap && getOwn(starMap, nameSegment)) {
                        foundStarMap = getOwn(starMap, nameSegment);
                        starI = i;
                    }
                }

                if (!foundMap && foundStarMap) {
                    foundMap = foundStarMap;
                    foundI = starI;
                }

                if (foundMap) {
                    nameParts.splice(0, foundI, foundMap);
                    name = nameParts.join('/');
                }
            }

            // If the name points to a package's name, use
            // the package main instead.
            pkgMain = getOwn(config.pkgs, name);

            return pkgMain ? pkgMain : name;
        }

        function removeScript(name) {
            if (isBrowser) {
                each(scripts(), function (scriptNode) {
                    if (scriptNode.getAttribute('data-requiremodule') === name &&
                            scriptNode.getAttribute('data-requirecontext') === context.contextName) {
                        scriptNode.parentNode.removeChild(scriptNode);
                        return true;
                    }
                });
            }
        }

        function hasPathFallback(id) {
            var pathConfig = getOwn(config.paths, id);
            if (pathConfig && isArray(pathConfig) && pathConfig.length > 1) {
                //Pop off the first array value, since it failed, and
                //retry
                pathConfig.shift();
                context.require.undef(id);

                //Custom require that does not do map translation, since
                //ID is "absolute", already mapped/resolved.
                context.makeRequire(null, {
                    skipMap: true
                })([id]);

                return true;
            }
        }

        //Turns a plugin!resource to [plugin, resource]
        //with the plugin being undefined if the name
        //did not have a plugin prefix.
        function splitPrefix(name) {
            var prefix,
                index = name ? name.indexOf('!') : -1;
            if (index > -1) {
                prefix = name.substring(0, index);
                name = name.substring(index + 1, name.length);
            }
            return [prefix, name];
        }

        /**
         * Creates a module mapping that includes plugin prefix, module
         * name, and path. If parentModuleMap is provided it will
         * also normalize the name via require.normalize()
         *
         * @param {String} name the module name
         * @param {String} [parentModuleMap] parent module map
         * for the module name, used to resolve relative names.
         * @param {Boolean} isNormalized: is the ID already normalized.
         * This is true if this call is done for a define() module ID.
         * @param {Boolean} applyMap: apply the map config to the ID.
         * Should only be true if this map is for a dependency.
         *
         * @returns {Object}
         */
        function makeModuleMap(name, parentModuleMap, isNormalized, applyMap) {
            var url, pluginModule, suffix, nameParts,
                prefix = null,
                parentName = parentModuleMap ? parentModuleMap.name : null,
                originalName = name,
                isDefine = true,
                normalizedName = '';

            //If no name, then it means it is a require call, generate an
            //internal name.
            if (!name) {
                isDefine = false;
                name = '_@r' + (requireCounter += 1);
            }

            nameParts = splitPrefix(name);
            prefix = nameParts[0];
            name = nameParts[1];

            if (prefix) {
                prefix = normalize(prefix, parentName, applyMap);
                pluginModule = getOwn(defined, prefix);
            }

            //Account for relative paths if there is a base name.
            if (name) {
                if (prefix) {
                    if (isNormalized) {
                        normalizedName = name;
                    } else if (pluginModule && pluginModule.normalize) {
                        //Plugin is loaded, use its normalize method.
                        normalizedName = pluginModule.normalize(name, function (name) {
                            return normalize(name, parentName, applyMap);
                        });
                    } else {
                        // If nested plugin references, then do not try to
                        // normalize, as it will not normalize correctly. This
                        // places a restriction on resourceIds, and the longer
                        // term solution is not to normalize until plugins are
                        // loaded and all normalizations to allow for async
                        // loading of a loader plugin. But for now, fixes the
                        // common uses. Details in #1131
                        normalizedName = name.indexOf('!') === -1 ?
                                         normalize(name, parentName, applyMap) :
                                         name;
                    }
                } else {
                    //A regular module.
                    normalizedName = normalize(name, parentName, applyMap);

                    //Normalized name may be a plugin ID due to map config
                    //application in normalize. The map config values must
                    //already be normalized, so do not need to redo that part.
                    nameParts = splitPrefix(normalizedName);
                    prefix = nameParts[0];
                    normalizedName = nameParts[1];
                    isNormalized = true;

                    url = context.nameToUrl(normalizedName);
                }
            }

            //If the id is a plugin id that cannot be determined if it needs
            //normalization, stamp it with a unique ID so two matching relative
            //ids that may conflict can be separate.
            suffix = prefix && !pluginModule && !isNormalized ?
                     '_unnormalized' + (unnormalizedCounter += 1) :
                     '';

            return {
                prefix: prefix,
                name: normalizedName,
                parentMap: parentModuleMap,
                unnormalized: !!suffix,
                url: url,
                originalName: originalName,
                isDefine: isDefine,
                id: (prefix ?
                        prefix + '!' + normalizedName :
                        normalizedName) + suffix
            };
        }

        function getModule(depMap) {
            var id = depMap.id,
                mod = getOwn(registry, id);

            if (!mod) {
                mod = registry[id] = new context.Module(depMap);
            }

            return mod;
        }

        function on(depMap, name, fn) {
            var id = depMap.id,
                mod = getOwn(registry, id);

            if (hasProp(defined, id) &&
                    (!mod || mod.defineEmitComplete)) {
                if (name === 'defined') {
                    fn(defined[id]);
                }
            } else {
                mod = getModule(depMap);
                if (mod.error && name === 'error') {
                    fn(mod.error);
                } else {
                    mod.on(name, fn);
                }
            }
        }

        function onError(err, errback) {
            var ids = err.requireModules,
                notified = false;

            if (errback) {
                errback(err);
            } else {
                each(ids, function (id) {
                    var mod = getOwn(registry, id);
                    if (mod) {
                        //Set error on module, so it skips timeout checks.
                        mod.error = err;
                        if (mod.events.error) {
                            notified = true;
                            mod.emit('error', err);
                        }
                    }
                });

                if (!notified) {
                    req.onError(err);
                }
            }
        }

        /**
         * Internal method to transfer globalQueue items to this context's
         * defQueue.
         */
        function takeGlobalQueue() {
            //Push all the globalDefQueue items into the context's defQueue
            if (globalDefQueue.length) {
                each(globalDefQueue, function(queueItem) {
                    var id = queueItem[0];
                    if (typeof id === 'string') {
                        context.defQueueMap[id] = true;
                    }
                    defQueue.push(queueItem);
                });
                globalDefQueue = [];
            }
        }

        handlers = {
            'require': function (mod) {
                if (mod.require) {
                    return mod.require;
                } else {
                    return (mod.require = context.makeRequire(mod.map));
                }
            },
            'exports': function (mod) {
                mod.usingExports = true;
                if (mod.map.isDefine) {
                    if (mod.exports) {
                        return (defined[mod.map.id] = mod.exports);
                    } else {
                        return (mod.exports = defined[mod.map.id] = {});
                    }
                }
            },
            'module': function (mod) {
                if (mod.module) {
                    return mod.module;
                } else {
                    return (mod.module = {
                        id: mod.map.id,
                        uri: mod.map.url,
                        config: function () {
                            return getOwn(config.config, mod.map.id) || {};
                        },
                        exports: mod.exports || (mod.exports = {})
                    });
                }
            }
        };

        function cleanRegistry(id) {
            //Clean up machinery used for waiting modules.
            delete registry[id];
            delete enabledRegistry[id];
        }

        function breakCycle(mod, traced, processed) {
            var id = mod.map.id;

            if (mod.error) {
                mod.emit('error', mod.error);
            } else {
                traced[id] = true;
                each(mod.depMaps, function (depMap, i) {
                    var depId = depMap.id,
                        dep = getOwn(registry, depId);

                    //Only force things that have not completed
                    //being defined, so still in the registry,
                    //and only if it has not been matched up
                    //in the module already.
                    if (dep && !mod.depMatched[i] && !processed[depId]) {
                        if (getOwn(traced, depId)) {
                            mod.defineDep(i, defined[depId]);
                            mod.check(); //pass false?
                        } else {
                            breakCycle(dep, traced, processed);
                        }
                    }
                });
                processed[id] = true;
            }
        }

        function checkLoaded() {
            var err, usingPathFallback,
                waitInterval = config.waitSeconds * 1000,
                //It is possible to disable the wait interval by using waitSeconds of 0.
                expired = waitInterval && (context.startTime + waitInterval) < new Date().getTime(),
                noLoads = [],
                reqCalls = [],
                stillLoading = false,
                needCycleCheck = true;

            //Do not bother if this call was a result of a cycle break.
            if (inCheckLoaded) {
                return;
            }

            inCheckLoaded = true;

            //Figure out the state of all the modules.
            eachProp(enabledRegistry, function (mod) {
                var map = mod.map,
                    modId = map.id;

                //Skip things that are not enabled or in error state.
                if (!mod.enabled) {
                    return;
                }

                if (!map.isDefine) {
                    reqCalls.push(mod);
                }

                if (!mod.error) {
                    //If the module should be executed, and it has not
                    //been inited and time is up, remember it.
                    if (!mod.inited && expired) {
                        if (hasPathFallback(modId)) {
                            usingPathFallback = true;
                            stillLoading = true;
                        } else {
                            noLoads.push(modId);
                            removeScript(modId);
                        }
                    } else if (!mod.inited && mod.fetched && map.isDefine) {
                        stillLoading = true;
                        if (!map.prefix) {
                            //No reason to keep looking for unfinished
                            //loading. If the only stillLoading is a
                            //plugin resource though, keep going,
                            //because it may be that a plugin resource
                            //is waiting on a non-plugin cycle.
                            return (needCycleCheck = false);
                        }
                    }
                }
            });

            if (expired && noLoads.length) {
                //If wait time expired, throw error of unloaded modules.
                err = makeError('timeout', 'Load timeout for modules: ' + noLoads, null, noLoads);
                err.contextName = context.contextName;
                return onError(err);
            }

            //Not expired, check for a cycle.
            if (needCycleCheck) {
                each(reqCalls, function (mod) {
                    breakCycle(mod, {}, {});
                });
            }

            //If still waiting on loads, and the waiting load is something
            //other than a plugin resource, or there are still outstanding
            //scripts, then just try back later.
            if ((!expired || usingPathFallback) && stillLoading) {
                //Something is still waiting to load. Wait for it, but only
                //if a timeout is not already in effect.
                if ((isBrowser || isWebWorker) && !checkLoadedTimeoutId) {
                    checkLoadedTimeoutId = setTimeout(function () {
                        checkLoadedTimeoutId = 0;
                        checkLoaded();
                    }, 50);
                }
            }

            inCheckLoaded = false;
        }

        Module = function (map) {
            this.events = getOwn(undefEvents, map.id) || {};
            this.map = map;
            this.shim = getOwn(config.shim, map.id);
            this.depExports = [];
            this.depMaps = [];
            this.depMatched = [];
            this.pluginMaps = {};
            this.depCount = 0;

            /* this.exports this.factory
               this.depMaps = [],
               this.enabled, this.fetched
            */
        };

        Module.prototype = {
            init: function (depMaps, factory, errback, options) {
                options = options || {};

                //Do not do more inits if already done. Can happen if there
                //are multiple define calls for the same module. That is not
                //a normal, common case, but it is also not unexpected.
                if (this.inited) {
                    return;
                }

                this.factory = factory;

                if (errback) {
                    //Register for errors on this module.
                    this.on('error', errback);
                } else if (this.events.error) {
                    //If no errback already, but there are error listeners
                    //on this module, set up an errback to pass to the deps.
                    errback = bind(this, function (err) {
                        this.emit('error', err);
                    });
                }

                //Do a copy of the dependency array, so that
                //source inputs are not modified. For example
                //"shim" deps are passed in here directly, and
                //doing a direct modification of the depMaps array
                //would affect that config.
                this.depMaps = depMaps && depMaps.slice(0);

                this.errback = errback;

                //Indicate this module has be initialized
                this.inited = true;

                this.ignore = options.ignore;

                //Could have option to init this module in enabled mode,
                //or could have been previously marked as enabled. However,
                //the dependencies are not known until init is called. So
                //if enabled previously, now trigger dependencies as enabled.
                if (options.enabled || this.enabled) {
                    //Enable this module and dependencies.
                    //Will call this.check()
                    this.enable();
                } else {
                    this.check();
                }
            },

            defineDep: function (i, depExports) {
                //Because of cycles, defined callback for a given
                //export can be called more than once.
                if (!this.depMatched[i]) {
                    this.depMatched[i] = true;
                    this.depCount -= 1;
                    this.depExports[i] = depExports;
                }
            },

            fetch: function () {
                if (this.fetched) {
                    return;
                }
                this.fetched = true;

                context.startTime = (new Date()).getTime();

                var map = this.map;

                //If the manager is for a plugin managed resource,
                //ask the plugin to load it now.
                if (this.shim) {
                    context.makeRequire(this.map, {
                        enableBuildCallback: true
                    })(this.shim.deps || [], bind(this, function () {
                        return map.prefix ? this.callPlugin() : this.load();
                    }));
                } else {
                    //Regular dependency.
                    return map.prefix ? this.callPlugin() : this.load();
                }
            },

            load: function () {
                var url = this.map.url;

                //Regular dependency.
                if (!urlFetched[url]) {
                    urlFetched[url] = true;
                    context.load(this.map.id, url);
                }
            },

            /**
             * Checks if the module is ready to define itself, and if so,
             * define it.
             */
            check: function () {
                if (!this.enabled || this.enabling) {
                    return;
                }

                var err, cjsModule,
                    id = this.map.id,
                    depExports = this.depExports,
                    exports = this.exports,
                    factory = this.factory;

                if (!this.inited) {
                    // Only fetch if not already in the defQueue.
                    if (!hasProp(context.defQueueMap, id)) {
                        this.fetch();
                    }
                } else if (this.error) {
                    this.emit('error', this.error);
                } else if (!this.defining) {
                    //The factory could trigger another require call
                    //that would result in checking this module to
                    //define itself again. If already in the process
                    //of doing that, skip this work.
                    this.defining = true;

                    if (this.depCount < 1 && !this.defined) {
                        if (isFunction(factory)) {
                            //If there is an error listener, favor passing
                            //to that instead of throwing an error. However,
                            //only do it for define()'d  modules. require
                            //errbacks should not be called for failures in
                            //their callbacks (#699). However if a global
                            //onError is set, use that.
                            if ((this.events.error && this.map.isDefine) ||
                                req.onError !== defaultOnError) {
                                try {
                                    exports = context.execCb(id, factory, depExports, exports);
                                } catch (e) {
                                    err = e;
                                }
                            } else {
                                exports = context.execCb(id, factory, depExports, exports);
                            }

                            // Favor return value over exports. If node/cjs in play,
                            // then will not have a return value anyway. Favor
                            // module.exports assignment over exports object.
                            if (this.map.isDefine && exports === undefined) {
                                cjsModule = this.module;
                                if (cjsModule) {
                                    exports = cjsModule.exports;
                                } else if (this.usingExports) {
                                    //exports already set the defined value.
                                    exports = this.exports;
                                }
                            }

                            if (err) {
                                err.requireMap = this.map;
                                err.requireModules = this.map.isDefine ? [this.map.id] : null;
                                err.requireType = this.map.isDefine ? 'define' : 'require';
                                return onError((this.error = err));
                            }

                        } else {
                            //Just a literal value
                            exports = factory;
                        }

                        this.exports = exports;

                        if (this.map.isDefine && !this.ignore) {
                            defined[id] = exports;

                            if (req.onResourceLoad) {
                                var resLoadMaps = [];
                                each(this.depMaps, function (depMap) {
                                    resLoadMaps.push(depMap.normalizedMap || depMap);
                                });
                                req.onResourceLoad(context, this.map, resLoadMaps);
                            }
                        }

                        //Clean up
                        cleanRegistry(id);

                        this.defined = true;
                    }

                    //Finished the define stage. Allow calling check again
                    //to allow define notifications below in the case of a
                    //cycle.
                    this.defining = false;

                    if (this.defined && !this.defineEmitted) {
                        this.defineEmitted = true;
                        this.emit('defined', this.exports);
                        this.defineEmitComplete = true;
                    }

                }
            },

            callPlugin: function () {
                var map = this.map,
                    id = map.id,
                    //Map already normalized the prefix.
                    pluginMap = makeModuleMap(map.prefix);

                //Mark this as a dependency for this plugin, so it
                //can be traced for cycles.
                this.depMaps.push(pluginMap);

                on(pluginMap, 'defined', bind(this, function (plugin) {
                    var load, normalizedMap, normalizedMod,
                        bundleId = getOwn(bundlesMap, this.map.id),
                        name = this.map.name,
                        parentName = this.map.parentMap ? this.map.parentMap.name : null,
                        localRequire = context.makeRequire(map.parentMap, {
                            enableBuildCallback: true
                        });

                    //If current map is not normalized, wait for that
                    //normalized name to load instead of continuing.
                    if (this.map.unnormalized) {
                        //Normalize the ID if the plugin allows it.
                        if (plugin.normalize) {
                            name = plugin.normalize(name, function (name) {
                                return normalize(name, parentName, true);
                            }) || '';
                        }

                        //prefix and name should already be normalized, no need
                        //for applying map config again either.
                        normalizedMap = makeModuleMap(map.prefix + '!' + name,
                                                      this.map.parentMap,
                                                      true);
                        on(normalizedMap,
                            'defined', bind(this, function (value) {
                                this.map.normalizedMap = normalizedMap;
                                this.init([], function () { return value; }, null, {
                                    enabled: true,
                                    ignore: true
                                });
                            }));

                        normalizedMod = getOwn(registry, normalizedMap.id);
                        if (normalizedMod) {
                            //Mark this as a dependency for this plugin, so it
                            //can be traced for cycles.
                            this.depMaps.push(normalizedMap);

                            if (this.events.error) {
                                normalizedMod.on('error', bind(this, function (err) {
                                    this.emit('error', err);
                                }));
                            }
                            normalizedMod.enable();
                        }

                        return;
                    }

                    //If a paths config, then just load that file instead to
                    //resolve the plugin, as it is built into that paths layer.
                    if (bundleId) {
                        this.map.url = context.nameToUrl(bundleId);
                        this.load();
                        return;
                    }

                    load = bind(this, function (value) {
                        this.init([], function () { return value; }, null, {
                            enabled: true
                        });
                    });

                    load.error = bind(this, function (err) {
                        this.inited = true;
                        this.error = err;
                        err.requireModules = [id];

                        //Remove temp unnormalized modules for this module,
                        //since they will never be resolved otherwise now.
                        eachProp(registry, function (mod) {
                            if (mod.map.id.indexOf(id + '_unnormalized') === 0) {
                                cleanRegistry(mod.map.id);
                            }
                        });

                        onError(err);
                    });

                    //Allow plugins to load other code without having to know the
                    //context or how to 'complete' the load.
                    load.fromText = bind(this, function (text, textAlt) {
                        /*jslint evil: true */
                        var moduleName = map.name,
                            moduleMap = makeModuleMap(moduleName),
                            hasInteractive = useInteractive;

                        //As of 2.1.0, support just passing the text, to reinforce
                        //fromText only being called once per resource. Still
                        //support old style of passing moduleName but discard
                        //that moduleName in favor of the internal ref.
                        if (textAlt) {
                            text = textAlt;
                        }

                        //Turn off interactive script matching for IE for any define
                        //calls in the text, then turn it back on at the end.
                        if (hasInteractive) {
                            useInteractive = false;
                        }

                        //Prime the system by creating a module instance for
                        //it.
                        getModule(moduleMap);

                        //Transfer any config to this other module.
                        if (hasProp(config.config, id)) {
                            config.config[moduleName] = config.config[id];
                        }

                        try {
                            req.exec(text);
                        } catch (e) {
                            return onError(makeError('fromtexteval',
                                             'fromText eval for ' + id +
                                            ' failed: ' + e,
                                             e,
                                             [id]));
                        }

                        if (hasInteractive) {
                            useInteractive = true;
                        }

                        //Mark this as a dependency for the plugin
                        //resource
                        this.depMaps.push(moduleMap);

                        //Support anonymous modules.
                        context.completeLoad(moduleName);

                        //Bind the value of that module to the value for this
                        //resource ID.
                        localRequire([moduleName], load);
                    });

                    //Use parentName here since the plugin's name is not reliable,
                    //could be some weird string with no path that actually wants to
                    //reference the parentName's path.
                    plugin.load(map.name, localRequire, load, config);
                }));

                context.enable(pluginMap, this);
                this.pluginMaps[pluginMap.id] = pluginMap;
            },

            enable: function () {
                enabledRegistry[this.map.id] = this;
                this.enabled = true;

                //Set flag mentioning that the module is enabling,
                //so that immediate calls to the defined callbacks
                //for dependencies do not trigger inadvertent load
                //with the depCount still being zero.
                this.enabling = true;

                //Enable each dependency
                each(this.depMaps, bind(this, function (depMap, i) {
                    var id, mod, handler;

                    if (typeof depMap === 'string') {
                        //Dependency needs to be converted to a depMap
                        //and wired up to this module.
                        depMap = makeModuleMap(depMap,
                                               (this.map.isDefine ? this.map : this.map.parentMap),
                                               false,
                                               !this.skipMap);
                        this.depMaps[i] = depMap;

                        handler = getOwn(handlers, depMap.id);

                        if (handler) {
                            this.depExports[i] = handler(this);
                            return;
                        }

                        this.depCount += 1;

                        on(depMap, 'defined', bind(this, function (depExports) {
                            if (this.undefed) {
                                return;
                            }
                            this.defineDep(i, depExports);
                            this.check();
                        }));

                        if (this.errback) {
                            on(depMap, 'error', bind(this, this.errback));
                        } else if (this.events.error) {
                            // No direct errback on this module, but something
                            // else is listening for errors, so be sure to
                            // propagate the error correctly.
                            on(depMap, 'error', bind(this, function(err) {
                                this.emit('error', err);
                            }));
                        }
                    }

                    id = depMap.id;
                    mod = registry[id];

                    //Skip special modules like 'require', 'exports', 'module'
                    //Also, don't call enable if it is already enabled,
                    //important in circular dependency cases.
                    if (!hasProp(handlers, id) && mod && !mod.enabled) {
                        context.enable(depMap, this);
                    }
                }));

                //Enable each plugin that is used in
                //a dependency
                eachProp(this.pluginMaps, bind(this, function (pluginMap) {
                    var mod = getOwn(registry, pluginMap.id);
                    if (mod && !mod.enabled) {
                        context.enable(pluginMap, this);
                    }
                }));

                this.enabling = false;

                this.check();
            },

            on: function (name, cb) {
                var cbs = this.events[name];
                if (!cbs) {
                    cbs = this.events[name] = [];
                }
                cbs.push(cb);
            },

            emit: function (name, evt) {
                each(this.events[name], function (cb) {
                    cb(evt);
                });
                if (name === 'error') {
                    //Now that the error handler was triggered, remove
                    //the listeners, since this broken Module instance
                    //can stay around for a while in the registry.
                    delete this.events[name];
                }
            }
        };

        function callGetModule(args) {
            //Skip modules already defined.
            if (!hasProp(defined, args[0])) {
                getModule(makeModuleMap(args[0], null, true)).init(args[1], args[2]);
            }
        }

        function removeListener(node, func, name, ieName) {
            //Favor detachEvent because of IE9
            //issue, see attachEvent/addEventListener comment elsewhere
            //in this file.
            if (node.detachEvent && !isOpera) {
                //Probably IE. If not it will throw an error, which will be
                //useful to know.
                if (ieName) {
                    node.detachEvent(ieName, func);
                }
            } else {
                node.removeEventListener(name, func, false);
            }
        }

        /**
         * Given an event from a script node, get the requirejs info from it,
         * and then removes the event listeners on the node.
         * @param {Event} evt
         * @returns {Object}
         */
        function getScriptData(evt) {
            //Using currentTarget instead of target for Firefox 2.0's sake. Not
            //all old browsers will be supported, but this one was easy enough
            //to support and still makes sense.
            var node = evt.currentTarget || evt.srcElement;

            //Remove the listeners once here.
            removeListener(node, context.onScriptLoad, 'load', 'onreadystatechange');
            removeListener(node, context.onScriptError, 'error');

            return {
                node: node,
                id: node && node.getAttribute('data-requiremodule')
            };
        }

        function intakeDefines() {
            var args;

            //Any defined modules in the global queue, intake them now.
            takeGlobalQueue();

            //Make sure any remaining defQueue items get properly processed.
            while (defQueue.length) {
                args = defQueue.shift();
                if (args[0] === null) {
                    return onError(makeError('mismatch', 'Mismatched anonymous define() module: ' +
                        args[args.length - 1]));
                } else {
                    //args are id, deps, factory. Should be normalized by the
                    //define() function.
                    callGetModule(args);
                }
            }
            context.defQueueMap = {};
        }

        context = {
            config: config,
            contextName: contextName,
            registry: registry,
            defined: defined,
            urlFetched: urlFetched,
            defQueue: defQueue,
            defQueueMap: {},
            Module: Module,
            makeModuleMap: makeModuleMap,
            nextTick: req.nextTick,
            onError: onError,

            /**
             * Set a configuration for the context.
             * @param {Object} cfg config object to integrate.
             */
            configure: function (cfg) {
                //Make sure the baseUrl ends in a slash.
                if (cfg.baseUrl) {
                    if (cfg.baseUrl.charAt(cfg.baseUrl.length - 1) !== '/') {
                        cfg.baseUrl += '/';
                    }
                }

                // Convert old style urlArgs string to a function.
                if (typeof cfg.urlArgs === 'string') {
                    var urlArgs = cfg.urlArgs;
                    cfg.urlArgs = function(id, url) {
                        return (url.indexOf('?') === -1 ? '?' : '&') + urlArgs;
                    };
                }

                //Save off the paths since they require special processing,
                //they are additive.
                var shim = config.shim,
                    objs = {
                        paths: true,
                        bundles: true,
                        config: true,
                        map: true
                    };

                eachProp(cfg, function (value, prop) {
                    if (objs[prop]) {
                        if (!config[prop]) {
                            config[prop] = {};
                        }
                        mixin(config[prop], value, true, true);
                    } else {
                        config[prop] = value;
                    }
                });

                //Reverse map the bundles
                if (cfg.bundles) {
                    eachProp(cfg.bundles, function (value, prop) {
                        each(value, function (v) {
                            if (v !== prop) {
                                bundlesMap[v] = prop;
                            }
                        });
                    });
                }

                //Merge shim
                if (cfg.shim) {
                    eachProp(cfg.shim, function (value, id) {
                        //Normalize the structure
                        if (isArray(value)) {
                            value = {
                                deps: value
                            };
                        }
                        if ((value.exports || value.init) && !value.exportsFn) {
                            value.exportsFn = context.makeShimExports(value);
                        }
                        shim[id] = value;
                    });
                    config.shim = shim;
                }

                //Adjust packages if necessary.
                if (cfg.packages) {
                    each(cfg.packages, function (pkgObj) {
                        var location, name;

                        pkgObj = typeof pkgObj === 'string' ? {name: pkgObj} : pkgObj;

                        name = pkgObj.name;
                        location = pkgObj.location;
                        if (location) {
                            config.paths[name] = pkgObj.location;
                        }

                        //Save pointer to main module ID for pkg name.
                        //Remove leading dot in main, so main paths are normalized,
                        //and remove any trailing .js, since different package
                        //envs have different conventions: some use a module name,
                        //some use a file name.
                        config.pkgs[name] = pkgObj.name + '/' + (pkgObj.main || 'main')
                                     .replace(currDirRegExp, '')
                                     .replace(jsSuffixRegExp, '');
                    });
                }

                //If there are any "waiting to execute" modules in the registry,
                //update the maps for them, since their info, like URLs to load,
                //may have changed.
                eachProp(registry, function (mod, id) {
                    //If module already has init called, since it is too
                    //late to modify them, and ignore unnormalized ones
                    //since they are transient.
                    if (!mod.inited && !mod.map.unnormalized) {
                        mod.map = makeModuleMap(id, null, true);
                    }
                });

                //If a deps array or a config callback is specified, then call
                //require with those args. This is useful when require is defined as a
                //config object before require.js is loaded.
                if (cfg.deps || cfg.callback) {
                    context.require(cfg.deps || [], cfg.callback);
                }
            },

            makeShimExports: function (value) {
                function fn() {
                    var ret;
                    if (value.init) {
                        ret = value.init.apply(global, arguments);
                    }
                    return ret || (value.exports && getGlobal(value.exports));
                }
                return fn;
            },

            makeRequire: function (relMap, options) {
                options = options || {};

                function localRequire(deps, callback, errback) {
                    var id, map, requireMod;

                    if (options.enableBuildCallback && callback && isFunction(callback)) {
                        callback.__requireJsBuild = true;
                    }

                    if (typeof deps === 'string') {
                        if (isFunction(callback)) {
                            //Invalid call
                            return onError(makeError('requireargs', 'Invalid require call'), errback);
                        }

                        //If require|exports|module are requested, get the
                        //value for them from the special handlers. Caveat:
                        //this only works while module is being defined.
                        if (relMap && hasProp(handlers, deps)) {
                            return handlers[deps](registry[relMap.id]);
                        }

                        //Synchronous access to one module. If require.get is
                        //available (as in the Node adapter), prefer that.
                        if (req.get) {
                            return req.get(context, deps, relMap, localRequire);
                        }

                        //Normalize module name, if it contains . or ..
                        map = makeModuleMap(deps, relMap, false, true);
                        id = map.id;

                        if (!hasProp(defined, id)) {
                            return onError(makeError('notloaded', 'Module name "' +
                                        id +
                                        '" has not been loaded yet for context: ' +
                                        contextName +
                                        (relMap ? '' : '. Use require([])')));
                        }
                        return defined[id];
                    }

                    //Grab defines waiting in the global queue.
                    intakeDefines();

                    //Mark all the dependencies as needing to be loaded.
                    context.nextTick(function () {
                        //Some defines could have been added since the
                        //require call, collect them.
                        intakeDefines();

                        requireMod = getModule(makeModuleMap(null, relMap));

                        //Store if map config should be applied to this require
                        //call for dependencies.
                        requireMod.skipMap = options.skipMap;

                        requireMod.init(deps, callback, errback, {
                            enabled: true
                        });

                        checkLoaded();
                    });

                    return localRequire;
                }

                mixin(localRequire, {
                    isBrowser: isBrowser,

                    /**
                     * Converts a module name + .extension into an URL path.
                     * *Requires* the use of a module name. It does not support using
                     * plain URLs like nameToUrl.
                     */
                    toUrl: function (moduleNamePlusExt) {
                        var ext,
                            index = moduleNamePlusExt.lastIndexOf('.'),
                            segment = moduleNamePlusExt.split('/')[0],
                            isRelative = segment === '.' || segment === '..';

                        //Have a file extension alias, and it is not the
                        //dots from a relative path.
                        if (index !== -1 && (!isRelative || index > 1)) {
                            ext = moduleNamePlusExt.substring(index, moduleNamePlusExt.length);
                            moduleNamePlusExt = moduleNamePlusExt.substring(0, index);
                        }

                        return context.nameToUrl(normalize(moduleNamePlusExt,
                                                relMap && relMap.id, true), ext,  true);
                    },

                    defined: function (id) {
                        return hasProp(defined, makeModuleMap(id, relMap, false, true).id);
                    },

                    specified: function (id) {
                        id = makeModuleMap(id, relMap, false, true).id;
                        return hasProp(defined, id) || hasProp(registry, id);
                    }
                });

                //Only allow undef on top level require calls
                if (!relMap) {
                    localRequire.undef = function (id) {
                        //Bind any waiting define() calls to this context,
                        //fix for #408
                        takeGlobalQueue();

                        var map = makeModuleMap(id, relMap, true),
                            mod = getOwn(registry, id);

                        mod.undefed = true;
                        removeScript(id);

                        delete defined[id];
                        delete urlFetched[map.url];
                        delete undefEvents[id];

                        //Clean queued defines too. Go backwards
                        //in array so that the splices do not
                        //mess up the iteration.
                        eachReverse(defQueue, function(args, i) {
                            if (args[0] === id) {
                                defQueue.splice(i, 1);
                            }
                        });
                        delete context.defQueueMap[id];

                        if (mod) {
                            //Hold on to listeners in case the
                            //module will be attempted to be reloaded
                            //using a different config.
                            if (mod.events.defined) {
                                undefEvents[id] = mod.events;
                            }

                            cleanRegistry(id);
                        }
                    };
                }

                return localRequire;
            },

            /**
             * Called to enable a module if it is still in the registry
             * awaiting enablement. A second arg, parent, the parent module,
             * is passed in for context, when this method is overridden by
             * the optimizer. Not shown here to keep code compact.
             */
            enable: function (depMap) {
                var mod = getOwn(registry, depMap.id);
                if (mod) {
                    getModule(depMap).enable();
                }
            },

            /**
             * Internal method used by environment adapters to complete a load event.
             * A load event could be a script load or just a load pass from a synchronous
             * load call.
             * @param {String} moduleName the name of the module to potentially complete.
             */
            completeLoad: function (moduleName) {
                var found, args, mod,
                    shim = getOwn(config.shim, moduleName) || {},
                    shExports = shim.exports;

                takeGlobalQueue();

                while (defQueue.length) {
                    args = defQueue.shift();
                    if (args[0] === null) {
                        args[0] = moduleName;
                        //If already found an anonymous module and bound it
                        //to this name, then this is some other anon module
                        //waiting for its completeLoad to fire.
                        if (found) {
                            break;
                        }
                        found = true;
                    } else if (args[0] === moduleName) {
                        //Found matching define call for this script!
                        found = true;
                    }

                    callGetModule(args);
                }
                context.defQueueMap = {};

                //Do this after the cycle of callGetModule in case the result
                //of those calls/init calls changes the registry.
                mod = getOwn(registry, moduleName);

                if (!found && !hasProp(defined, moduleName) && mod && !mod.inited) {
                    if (config.enforceDefine && (!shExports || !getGlobal(shExports))) {
                        if (hasPathFallback(moduleName)) {
                            return;
                        } else {
                            return onError(makeError('nodefine',
                                             'No define call for ' + moduleName,
                                             null,
                                             [moduleName]));
                        }
                    } else {
                        //A script that does not call define(), so just simulate
                        //the call for it.
                        callGetModule([moduleName, (shim.deps || []), shim.exportsFn]);
                    }
                }

                checkLoaded();
            },

            /**
             * Converts a module name to a file path. Supports cases where
             * moduleName may actually be just an URL.
             * Note that it **does not** call normalize on the moduleName,
             * it is assumed to have already been normalized. This is an
             * internal API, not a public one. Use toUrl for the public API.
             */
            nameToUrl: function (moduleName, ext, skipExt) {
                var paths, syms, i, parentModule, url,
                    parentPath, bundleId,
                    pkgMain = getOwn(config.pkgs, moduleName);

                if (pkgMain) {
                    moduleName = pkgMain;
                }

                bundleId = getOwn(bundlesMap, moduleName);

                if (bundleId) {
                    return context.nameToUrl(bundleId, ext, skipExt);
                }

                //If a colon is in the URL, it indicates a protocol is used and it is just
                //an URL to a file, or if it starts with a slash, contains a query arg (i.e. ?)
                //or ends with .js, then assume the user meant to use an url and not a module id.
                //The slash is important for protocol-less URLs as well as full paths.
                if (req.jsExtRegExp.test(moduleName)) {
                    //Just a plain path, not module name lookup, so just return it.
                    //Add extension if it is included. This is a bit wonky, only non-.js things pass
                    //an extension, this method probably needs to be reworked.
                    url = moduleName + (ext || '');
                } else {
                    //A module that needs to be converted to a path.
                    paths = config.paths;

                    syms = moduleName.split('/');
                    //For each module name segment, see if there is a path
                    //registered for it. Start with most specific name
                    //and work up from it.
                    for (i = syms.length; i > 0; i -= 1) {
                        parentModule = syms.slice(0, i).join('/');

                        parentPath = getOwn(paths, parentModule);
                        if (parentPath) {
                            //If an array, it means there are a few choices,
                            //Choose the one that is desired
                            if (isArray(parentPath)) {
                                parentPath = parentPath[0];
                            }
                            syms.splice(0, i, parentPath);
                            break;
                        }
                    }

                    //Join the path parts together, then figure out if baseUrl is needed.
                    url = syms.join('/');
                    url += (ext || (/^data\:|^blob\:|\?/.test(url) || skipExt ? '' : '.js'));
                    url = (url.charAt(0) === '/' || url.match(/^[\w\+\.\-]+:/) ? '' : config.baseUrl) + url;
                }

                return config.urlArgs && !/^blob\:/.test(url) ?
                       url + config.urlArgs(moduleName, url) : url;
            },

            //Delegates to req.load. Broken out as a separate function to
            //allow overriding in the optimizer.
            load: function (id, url) {
                req.load(context, id, url);
            },

            /**
             * Executes a module callback function. Broken out as a separate function
             * solely to allow the build system to sequence the files in the built
             * layer in the right sequence.
             *
             * @private
             */
            execCb: function (name, callback, args, exports) {
                return callback.apply(exports, args);
            },

            /**
             * callback for script loads, used to check status of loading.
             *
             * @param {Event} evt the event from the browser for the script
             * that was loaded.
             */
            onScriptLoad: function (evt) {
                //Using currentTarget instead of target for Firefox 2.0's sake. Not
                //all old browsers will be supported, but this one was easy enough
                //to support and still makes sense.
                if (evt.type === 'load' ||
                        (readyRegExp.test((evt.currentTarget || evt.srcElement).readyState))) {
                    //Reset interactive script so a script node is not held onto for
                    //to long.
                    interactiveScript = null;

                    //Pull out the name of the module and the context.
                    var data = getScriptData(evt);
                    context.completeLoad(data.id);
                }
            },

            /**
             * Callback for script errors.
             */
            onScriptError: function (evt) {
                var data = getScriptData(evt);
                if (!hasPathFallback(data.id)) {
                    var parents = [];
                    eachProp(registry, function(value, key) {
                        if (key.indexOf('_@r') !== 0) {
                            each(value.depMaps, function(depMap) {
                                if (depMap.id === data.id) {
                                    parents.push(key);
                                    return true;
                                }
                            });
                        }
                    });
                    return onError(makeError('scripterror', 'Script error for "' + data.id +
                                             (parents.length ?
                                             '", needed by: ' + parents.join(', ') :
                                             '"'), evt, [data.id]));
                }
            }
        };

        context.require = context.makeRequire();
        return context;
    }

    /**
     * Main entry point.
     *
     * If the only argument to require is a string, then the module that
     * is represented by that string is fetched for the appropriate context.
     *
     * If the first argument is an array, then it will be treated as an array
     * of dependency string names to fetch. An optional function callback can
     * be specified to execute when all of those dependencies are available.
     *
     * Make a local req variable to help Caja compliance (it assumes things
     * on a require that are not standardized), and to give a short
     * name for minification/local scope use.
     */
    req = requirejs = function (deps, callback, errback, optional) {

        //Find the right context, use default
        var context, config,
            contextName = defContextName;

        // Determine if have config object in the call.
        if (!isArray(deps) && typeof deps !== 'string') {
            // deps is a config object
            config = deps;
            if (isArray(callback)) {
                // Adjust args if there are dependencies
                deps = callback;
                callback = errback;
                errback = optional;
            } else {
                deps = [];
            }
        }

        if (config && config.context) {
            contextName = config.context;
        }

        context = getOwn(contexts, contextName);
        if (!context) {
            context = contexts[contextName] = req.s.newContext(contextName);
        }

        if (config) {
            context.configure(config);
        }

        return context.require(deps, callback, errback);
    };

    /**
     * Support require.config() to make it easier to cooperate with other
     * AMD loaders on globally agreed names.
     */
    req.config = function (config) {
        return req(config);
    };

    /**
     * Execute something after the current tick
     * of the event loop. Override for other envs
     * that have a better solution than setTimeout.
     * @param  {Function} fn function to execute later.
     */
    req.nextTick = typeof setTimeout !== 'undefined' ? function (fn) {
        setTimeout(fn, 4);
    } : function (fn) { fn(); };

    /**
     * Export require as a global, but only if it does not already exist.
     */
    if (!require) {
        require = req;
    }

    req.version = version;

    //Used to filter out dependencies that are already paths.
    req.jsExtRegExp = /^\/|:|\?|\.js$/;
    req.isBrowser = isBrowser;
    s = req.s = {
        contexts: contexts,
        newContext: newContext
    };

    //Create default context.
    req({});

    //Exports some context-sensitive methods on global require.
    each([
        'toUrl',
        'undef',
        'defined',
        'specified'
    ], function (prop) {
        //Reference from contexts instead of early binding to default context,
        //so that during builds, the latest instance of the default context
        //with its config gets used.
        req[prop] = function () {
            var ctx = contexts[defContextName];
            return ctx.require[prop].apply(ctx, arguments);
        };
    });

    if (isBrowser) {
        head = s.head = document.getElementsByTagName('head')[0];
        //If BASE tag is in play, using appendChild is a problem for IE6.
        //When that browser dies, this can be removed. Details in this jQuery bug:
        //http://dev.jquery.com/ticket/2709
        baseElement = document.getElementsByTagName('base')[0];
        if (baseElement) {
            head = s.head = baseElement.parentNode;
        }
    }

    /**
     * Any errors that require explicitly generates will be passed to this
     * function. Intercept/override it if you want custom error handling.
     * @param {Error} err the error object.
     */
    req.onError = defaultOnError;

    /**
     * Creates the node for the load command. Only used in browser envs.
     */
    req.createNode = function (config, moduleName, url) {
        var node = config.xhtml ?
                document.createElementNS('http://www.w3.org/1999/xhtml', 'html:script') :
                document.createElement('script');
        node.type = config.scriptType || 'text/javascript';
        node.charset = 'utf-8';
        node.async = true;
        return node;
    };

    /**
     * Does the request to load a module for the browser case.
     * Make this a separate function to allow other environments
     * to override it.
     *
     * @param {Object} context the require context to find state.
     * @param {String} moduleName the name of the module.
     * @param {Object} url the URL to the module.
     */
    req.load = function (context, moduleName, url) {
        var config = (context && context.config) || {},
            node;
        if (isBrowser) {
            //In the browser so use a script tag
            node = req.createNode(config, moduleName, url);

            node.setAttribute('data-requirecontext', context.contextName);
            node.setAttribute('data-requiremodule', moduleName);

            //Set up load listener. Test attachEvent first because IE9 has
            //a subtle issue in its addEventListener and script onload firings
            //that do not match the behavior of all other browsers with
            //addEventListener support, which fire the onload event for a
            //script right after the script execution. See:
            //https://connect.microsoft.com/IE/feedback/details/648057/script-onload-event-is-not-fired-immediately-after-script-execution
            //UNFORTUNATELY Opera implements attachEvent but does not follow the script
            //script execution mode.
            if (node.attachEvent &&
                    //Check if node.attachEvent is artificially added by custom script or
                    //natively supported by browser
                    //read https://github.com/requirejs/requirejs/issues/187
                    //if we can NOT find [native code] then it must NOT natively supported.
                    //in IE8, node.attachEvent does not have toString()
                    //Note the test for "[native code" with no closing brace, see:
                    //https://github.com/requirejs/requirejs/issues/273
                    !(node.attachEvent.toString && node.attachEvent.toString().indexOf('[native code') < 0) &&
                    !isOpera) {
                //Probably IE. IE (at least 6-8) do not fire
                //script onload right after executing the script, so
                //we cannot tie the anonymous define call to a name.
                //However, IE reports the script as being in 'interactive'
                //readyState at the time of the define call.
                useInteractive = true;

                node.attachEvent('onreadystatechange', context.onScriptLoad);
                //It would be great to add an error handler here to catch
                //404s in IE9+. However, onreadystatechange will fire before
                //the error handler, so that does not help. If addEventListener
                //is used, then IE will fire error before load, but we cannot
                //use that pathway given the connect.microsoft.com issue
                //mentioned above about not doing the 'script execute,
                //then fire the script load event listener before execute
                //next script' that other browsers do.
                //Best hope: IE10 fixes the issues,
                //and then destroys all installs of IE 6-9.
                //node.attachEvent('onerror', context.onScriptError);
            } else {
                node.addEventListener('load', context.onScriptLoad, false);
                node.addEventListener('error', context.onScriptError, false);
            }
            node.src = url;

            //Calling onNodeCreated after all properties on the node have been
            //set, but before it is placed in the DOM.
            if (config.onNodeCreated) {
                config.onNodeCreated(node, config, moduleName, url);
            }

            //For some cache cases in IE 6-8, the script executes before the end
            //of the appendChild execution, so to tie an anonymous define
            //call to the module name (which is stored on the node), hold on
            //to a reference to this node, but clear after the DOM insertion.
            currentlyAddingScript = node;
            if (baseElement) {
                head.insertBefore(node, baseElement);
            } else {
                head.appendChild(node);
            }
            currentlyAddingScript = null;

            return node;
        } else if (isWebWorker) {
            try {
                //In a web worker, use importScripts. This is not a very
                //efficient use of importScripts, importScripts will block until
                //its script is downloaded and evaluated. However, if web workers
                //are in play, the expectation is that a build has been done so
                //that only one script needs to be loaded anyway. This may need
                //to be reevaluated if other use cases become common.

                // Post a task to the event loop to work around a bug in WebKit
                // where the worker gets garbage-collected after calling
                // importScripts(): https://webkit.org/b/153317
                setTimeout(function() {}, 0);
                importScripts(url);

                //Account for anonymous modules
                context.completeLoad(moduleName);
            } catch (e) {
                context.onError(makeError('importscripts',
                                'importScripts failed for ' +
                                    moduleName + ' at ' + url,
                                e,
                                [moduleName]));
            }
        }
    };

    function getInteractiveScript() {
        if (interactiveScript && interactiveScript.readyState === 'interactive') {
            return interactiveScript;
        }

        eachReverse(scripts(), function (script) {
            if (script.readyState === 'interactive') {
                return (interactiveScript = script);
            }
        });
        return interactiveScript;
    }

    //Look for a data-main script attribute, which could also adjust the baseUrl.
    if (isBrowser && !cfg.skipDataMain) {
        //Figure out baseUrl. Get it from the script tag with require.js in it.
        eachReverse(scripts(), function (script) {
            //Set the 'head' where we can append children by
            //using the script's parent.
            if (!head) {
                head = script.parentNode;
            }

            //Look for a data-main attribute to set main script for the page
            //to load. If it is there, the path to data main becomes the
            //baseUrl, if it is not already set.
            dataMain = script.getAttribute('data-main');
            if (dataMain) {
                //Preserve dataMain in case it is a path (i.e. contains '?')
                mainScript = dataMain;

                //Set final baseUrl if there is not already an explicit one,
                //but only do so if the data-main value is not a loader plugin
                //module ID.
                if (!cfg.baseUrl && mainScript.indexOf('!') === -1) {
                    //Pull off the directory of data-main for use as the
                    //baseUrl.
                    src = mainScript.split('/');
                    mainScript = src.pop();
                    subPath = src.length ? src.join('/')  + '/' : './';

                    cfg.baseUrl = subPath;
                }

                //Strip off any trailing .js since mainScript is now
                //like a module name.
                mainScript = mainScript.replace(jsSuffixRegExp, '');

                //If mainScript is still a path, fall back to dataMain
                if (req.jsExtRegExp.test(mainScript)) {
                    mainScript = dataMain;
                }

                //Put the data-main script in the files to load.
                cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript];

                return true;
            }
        });
    }

    /**
     * The function that handles definitions of modules. Differs from
     * require() in that a string for the module should be the first argument,
     * and the function to execute after dependencies are loaded should
     * return a value to define the module corresponding to the first argument's
     * name.
     */
    define = function (name, deps, callback) {
        var node, context;

        //Allow for anonymous modules
        if (typeof name !== 'string') {
            //Adjust args appropriately
            callback = deps;
            deps = name;
            name = null;
        }

        //This module may not have dependencies
        if (!isArray(deps)) {
            callback = deps;
            deps = null;
        }

        //If no name, and callback is a function, then figure out if it a
        //CommonJS thing with dependencies.
        if (!deps && isFunction(callback)) {
            deps = [];
            //Remove comments from the callback string,
            //look for require calls, and pull them into the dependencies,
            //but only if there are function args.
            if (callback.length) {
                callback
                    .toString()
                    .replace(commentRegExp, commentReplace)
                    .replace(cjsRequireRegExp, function (match, dep) {
                        deps.push(dep);
                    });

                //May be a CommonJS thing even without require calls, but still
                //could use exports, and module. Avoid doing exports and module
                //work though if it just needs require.
                //REQUIRES the function to expect the CommonJS variables in the
                //order listed below.
                deps = (callback.length === 1 ? ['require'] : ['require', 'exports', 'module']).concat(deps);
            }
        }

        //If in IE 6-8 and hit an anonymous define() call, do the interactive
        //work.
        if (useInteractive) {
            node = currentlyAddingScript || getInteractiveScript();
            if (node) {
                if (!name) {
                    name = node.getAttribute('data-requiremodule');
                }
                context = contexts[node.getAttribute('data-requirecontext')];
            }
        }

        //Always save off evaluating the def call until the script onload handler.
        //This allows multiple modules to be in a file without prematurely
        //tracing dependencies, and allows for anonymous module support,
        //where the module name is not known until the script onload event
        //occurs. If no context, use the global queue, and get it processed
        //in the onscript load callback.
        if (context) {
            context.defQueue.push([name, deps, callback]);
            context.defQueueMap[name] = true;
        } else {
            globalDefQueue.push([name, deps, callback]);
        }
    };

    define.amd = {
        jQuery: true
    };

    /**
     * Executes the text. Normally just uses eval, but can be modified
     * to use a better, environment-specific call. Only used for transpiling
     * loader plugins, not for plain JS modules.
     * @param {String} text the text to execute/evaluate.
     */
    req.exec = function (text) {
        /*jslint evil: true */
        return eval(text);
    };

    //Set up with config info.
    req(cfg);
}(this, (typeof setTimeout === 'undefined' ? undefined : setTimeout)));

requirejs.config({
    baseUrl: PORTAL_URL,
    paths: {
    "ace-mode-css": "++plone++static/components/ace-builds/src/mode-css",
    "ace-mode-javascript": "++plone++static/components/ace-builds/src/mode-javascript",
    "ace-mode-text": "++plone++static/components/ace-builds/src/mode-text",
    "ace-theme-monokai": "++plone++static/components/ace-builds/src/theme-monokai",
    "ace": "++plone++static/components/ace-builds/src/ace",
    "backbone": "++plone++static/components/backbone/backbone",
    "backbone.paginator": "++plone++static/components/backbone.paginator/lib/backbone.paginator",
    "booost-extratiles": "++resource++cloud19.extratiles/main",
    "booost-extratiles-url": "++resource++cloud19.extratiles",
    "booost-isotope-js": "++resource++cloud19.theme/javascripts/booost-isotope",
    "booost-logged-in": "++resource++cloud19.theme/javascripts/booost-logged-in",
    "booost-media": "++resource++wildcard-media/integration",
    "booost-standardtiles": "++resource++cloud19.standardtiles/main",
    "booost-standardtiles-url": "++resource++cloud19.standardtiles",
    "booost-theme": "++resource++cloud19.theme/javascripts/booost",
    "booost-ttw": "++plone++custom/custom",
    "bootstrap-alert": "++plone++static/components/bootstrap/js/alert",
    "bootstrap-collapse": "++plone++static/components/bootstrap/js/collapse",
    "bootstrap-dropdown": "++plone++static/components/bootstrap/js/dropdown",
    "bootstrap-tooltip": "++plone++static/components/bootstrap/js/tooltip",
    "bootstrap-transition": "++plone++static/components/bootstrap/js/transition",
    "bundle-leaflet": "++plone++patternslib/bundle-leaflet",
    "datatables.net-autofill-bs": "++plone++static/components/datatables.net-autofill-bs/js/autoFill.bootstrap",
    "datatables.net-autofill": "++plone++static/components/datatables.net-autofill/js/dataTables.autoFill.min",
    "datatables.net-bs": "++plone++static/components/datatables.net-bs/js/dataTables.bootstrap",
    "datatables.net-buttons-bs": "++plone++static/components/datatables.net-buttons-bs/js/buttons.bootstrap.min",
    "datatables.net-buttons-colvis": "++plone++static/components/datatables.net-buttons/js/buttons.colVis.min",
    "datatables.net-buttons-flash": "++plone++static/components/datatables.net-buttons/js/buttons.flash.min",
    "datatables.net-buttons-html5": "++plone++static/components/datatables.net-buttons/js/buttons.html5.min",
    "datatables.net-buttons-print": "++plone++static/components/datatables.net-buttons/js/buttons.print.min",
    "datatables.net-buttons": "++plone++static/components/datatables.net-buttons/js/dataTables.buttons.min",
    "datatables.net-colreorder": "++plone++static/components/datatables.net-colreorder/js/dataTables.colReorder.min",
    "datatables.net-fixedcolumns": "++plone++static/components/datatables.net-fixedcolumns/js/dataTables.fixedColumns.min",
    "datatables.net-fixedheader": "++plone++static/components/datatables.net-fixedheader/js/dataTables.fixedHeader.min",
    "datatables.net-keytable": "++plone++static/components/datatables.net-keytable/js/dataTables.keyTable.min",
    "datatables.net-responsive-bs": "++plone++static/components/datatables.net-responsive-bs/js/responsive.bootstrap.min",
    "datatables.net-responsive": "++plone++static/components/datatables.net-responsive/js/dataTables.responsive.min",
    "datatables.net-rowreorder": "++plone++static/components/datatables.net-rowreorder/js/dataTables.rowReorder.min",
    "datatables.net-scroller": "++plone++static/components/datatables.net-scroller/js/dataTables.scroller.min",
    "datatables.net-select": "++plone++static/components/datatables.net-select/js/dataTables.select.min",
    "datatables.net": "++plone++static/components/datatables.net/js/jquery.dataTables",
    "desandro-matches-selector": "++plone++patternslib/components/desandro-matches-selector/matches-selector",
    "dropzone": "++plone++static/components/dropzone/dist/dropzone-amd-module",
    "ev-emitter": "++plone++patternslib/components/ev-emitter/ev-emitter",
    "filemanager": "++plone++static/filemanager",
    "get-size": "++plone++patternslib/components/get-size/get-size",
    "imagesloaded": "++plone++patternslib/components/imagesloaded/imagesloaded.pkgd",
    "jcrop": "++plone++patternslib/components/jcrop/js/jquery.Jcrop",
    "jqtree-contextmenu": "++plone++static/components/cs-jqtree-contextmenu/src/jqTreeContextMenu",
    "jqtree": "++plone++static/components/jqtree/tree.jquery",
    "jquery.anythingslider": "++plone++patternslib/components/AnythingSlider/js/jquery.anythingslider",
    "jquery.browser": "++plone++patternslib/components/jquery.browser/dist/jquery.browser",
    "jquery": "++plone++static/components/jquery/dist/jquery.min",
    "jquery.cookie": "++plone++static/components/jquery.cookie/jquery.cookie",
    "jquery.event.drag": "++resource++mockuplib/jquery.event.drag",
    "jquery.event.drop": "++resource++mockuplib/jquery.event.drop",
    "jquery.form": "++plone++static/components/jquery-form/src/jquery.form",
    "jquery.placeholder": "++plone++patternslib/components/jquery-placeholder/jquery.placeholder",
    "jquery.recurrenceinput": "++plone++static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput",
    "jquery.tmpl": "++plone++static/components/jquery.recurrenceinput.js/lib/jquery.tmpl",
    "layouts-editor": "++plone++mosaic/js/layouts-editor",
    "leaflet-awesomemarkers": "++plone++patternslib/components/Leaflet.awesome-markers/dist/leaflet.awesome-markers",
    "leaflet-fullscreen": "++plone++patternslib/components/Leaflet.fullscreen/dist/Leaflet.fullscreen",
    "leaflet-geosearch-bing": "++plone++patternslib/components/L.GeoSearch/src/js/l.geosearch.provider.bing",
    "leaflet-geosearch-esri": "++plone++patternslib/components/L.GeoSearch/src/js/l.geosearch.provider.esri",
    "leaflet-geosearch-google": "++plone++patternslib/components/L.GeoSearch/src/js/l.geosearch.provider.google",
    "leaflet-geosearch-openstreetmap": "++plone++patternslib/components/L.GeoSearch/src/js/l.geosearch.provider.openstreetmap",
    "leaflet-geosearch": "++plone++patternslib/components/L.GeoSearch/src/js/l.control.geosearch",
    "leaflet-locatecontrol": "++plone++patternslib/components/leaflet.locatecontrol/src/L.Control.Locate",
    "leaflet-markercluster": "++plone++patternslib/components/leaflet.markercluster/dist/leaflet.markercluster-src",
    "leaflet-minimap": "++plone++patternslib/components/Leaflet-MiniMap/dist/Control.MiniMap.min",
    "leaflet-providers": "++plone++patternslib/components/leaflet-providers/leaflet-providers",
    "leaflet-simplemarkers": "++plone++patternslib/components/Leaflet.SimpleMarkers/lib/Control.SimpleMarkers",
    "leaflet-sleep": "++plone++patternslib/components/Leaflet.Sleep/Leaflet.Sleep",
    "leaflet": "++plone++patternslib/components/leaflet/dist/leaflet-src",
    "less": "++plone++static/components/less/dist/less",
    "logging": "++plone++patternslib/components/logging/src/logging",
    "masonry": "++plone++patternslib/components/masonry/dist/masonry.pkgd",
    "mockup-i18n": "++resource++mockupjs/i18n",
    "mockup-patterns-autotoc": "++resource++mockup/autotoc/pattern",
    "mockup-patterns-backdrop": "++resource++mockup/backdrop/pattern",
    "mockup-patterns-base": "++resource++mockup/base/pattern",
    "mockup-patterns-contentloader": "++resource++mockup/contentloader/pattern",
    "mockup-patterns-cookietrigger": "++resource++mockup/cookietrigger/pattern",
    "mockup-patterns-datatables": "++resource++mockup/datatables/pattern",
    "mockup-patterns-filemanager": "++resource++mockup/filemanager/pattern",
    "mockup-patterns-filemanager-url": "++resource++mockup/filemanager",
    "mockup-patterns-formautofocus": "++resource++mockup/formautofocus/pattern",
    "mockup-patterns-formunloadalert": "++resource++mockup/formunloadalert/pattern",
    "mockup-patterns-inlinevalidation": "++resource++mockup/inlinevalidation/pattern",
    "mockup-patterns-livesearch": "++resource++mockup/livesearch/pattern",
    "mockup-patterns-markspeciallinks": "++resource++mockup/markspeciallinks/pattern",
    "mockup-patterns-modal": "++resource++mockup/modal/pattern",
    "mockup-patterns-moment": "++resource++mockup/moment/pattern",
    "mockup-patterns-navigationmarker": "++resource++mockup/navigationmarker/pattern",
    "mockup-patterns-pickadate": "++resource++mockup/pickadate/pattern",
    "mockup-patterns-preventdoublesubmit": "++resource++mockup/preventdoublesubmit/pattern",
    "mockup-patterns-querystring": "++resource++mockup/querystring/pattern",
    "mockup-patterns-recurrence": "++resource++mockup/recurrence/pattern",
    "mockup-patterns-relateditems-upload": "++resource++mockup/relateditems/upload",
    "mockup-patterns-relateditems": "++resource++mockup/relateditems/pattern",
    "mockup-patterns-relateditems-url": "++resource++mockup/relateditems",
    "mockup-patterns-resourceregistry": "++resource++mockup/resourceregistry/pattern",
    "mockup-patterns-resourceregistry-url": "++resource++mockup/resourceregistry",
    "mockup-patterns-select2": "++resource++mockup/select2/pattern",
    "mockup-patterns-sortable": "++resource++mockup/sortable/pattern",
    "mockup-patterns-structure": "++resource++mockup/structure/pattern",
    "mockup-patterns-structure-url": "++resource++mockup/structure",
    "mockup-patterns-structureupdater": "++resource++mockup/structure/pattern-structureupdater",
    "mockup-patterns-textareamimetypeselector": "++resource++mockup/textareamimetypeselector/pattern",
    "mockup-patterns-texteditor": "++resource++mockup/texteditor/pattern",
    "mockup-patterns-thememapper": "++resource++mockup/thememapper/pattern",
    "mockup-patterns-thememapper-url": "++resource++mockup/thememapper",
    "mockup-patterns-tinymce": "++resource++mockup/tinymce/pattern",
    "mockup-patterns-tinymce-url": "++resource++mockup/tinymce",
    "mockup-patterns-toggle": "++resource++mockup/toggle/pattern",
    "mockup-patterns-tooltip": "++resource++mockup/tooltip/pattern",
    "mockup-patterns-tree": "++resource++mockup/tree/pattern",
    "mockup-patterns-upload": "++resource++mockup/upload/pattern",
    "mockup-patterns-upload-url": "++resource++mockup/upload",
    "mockup-router": "++resource++mockupjs/router",
    "mockup-ui-url": "++resource++mockupjs/ui",
    "mockup-utils": "++resource++mockupjs/utils",
    "modernizr-csspositionsticky": "++plone++patternslib/components/modernizr/feature-detects/css-positionsticky",
    "modernizr": "++plone++patternslib/components/modernizr/modernizr",
    "moment-timezone-data": "++plone++patternslib/components/patternslib/src/pat/calendar/moment-timezone-with-data-2010-2020",
    "moment-timezone": "++plone++patternslib/components/moment-timezone/moment-timezone",
    "moment": "++plone++static/components/moment/min/moment.min",
    "moment-url": "++plone++static/components/moment/locale",
    "mosaic-base-url": "++plone++mosaic/js",
    "mosaic": "++plone++mosaic/js/mosaic.pattern",
    "mosaic-url": "++plone++mosaic/js",
    "outlayer": "++plone++patternslib/components/outlayer/outlayer",
    "pat-ajax": "++plone++patternslib/components/patternslib/src/pat/ajax/ajax",
    "pat-auto-scale": "++plone++patternslib/components/patternslib/src/pat/auto-scale/auto-scale",
    "pat-auto-submit": "++plone++patternslib/components/patternslib/src/pat/auto-submit/auto-submit",
    "pat-auto-suggest": "++plone++patternslib/components/patternslib/src/pat/auto-suggest/auto-suggest",
    "pat-base": "++plone++patternslib/components/patternslib/src/core/base",
    "pat-breadcrumbs": "++plone++patternslib/components/patternslib/src/pat/breadcrumbs/breadcrumbs",
    "pat-bumper": "++plone++patternslib/components/patternslib/src/pat/bumper/bumper",
    "pat-checked-flag": "++plone++patternslib/components/patternslib/src/pat/checked-flag/checked-flag",
    "pat-checklist": "++plone++patternslib/components/patternslib/src/pat/checklist/checklist",
    "pat-clone": "++plone++patternslib/components/patternslib/src/pat/clone/clone",
    "pat-collapsible": "++plone++patternslib/components/patternslib/src/pat/collapsible/collapsible",
    "pat-colour-picker": "++plone++patternslib/components/patternslib/src/pat/colour-picker/colour-picker",
    "pat-compat": "++plone++patternslib/components/patternslib/src/core/compat",
    "pat-date-picker": "++plone++patternslib/components/patternslib/src/pat/date-picker/date-picker",
    "pat-date-picker-url": "++plone++patternslib/components/patternslib/src/pat/date-picker",
    "pat-datetime-picker": "++plone++patternslib/components/patternslib/src/pat/datetime-picker/datetime-picker",
    "pat-depends": "++plone++patternslib/components/patternslib/src/pat/depends/depends",
    "pat-depends_parse": "++plone++patternslib/components/patternslib/src/lib/depends_parse",
    "pat-dependshandler": "++plone++patternslib/components/patternslib/src/lib/dependshandler",
    "pat-equaliser": "++plone++patternslib/components/patternslib/src/pat/equaliser/equaliser",
    "pat-expandable": "++plone++patternslib/components/patternslib/src/pat/expandable-tree/expandable-tree",
    "pat-focus": "++plone++patternslib/components/patternslib/src/pat/focus/focus",
    "pat-form-state": "++plone++patternslib/components/patternslib/src/pat/form-state/form-state",
    "pat-forward": "++plone++patternslib/components/patternslib/src/pat/forward/forward",
    "pat-gallery": "++plone++patternslib/components/patternslib/src/pat/gallery/gallery",
    "pat-gallery-url": "++plone++patternslib/components/patternslib/src/pat/gallery",
    "pat-grid": "++plone++patternslib/components/patternslib/src/pat/grid/grid",
    "pat-htmlparser": "++plone++patternslib/components/patternslib/src/lib/htmlparser",
    "pat-image-crop": "++plone++patternslib/components/patternslib/src/pat/image-crop/image-crop",
    "pat-inject": "++plone++patternslib/components/patternslib/src/pat/inject/inject",
    "pat-input-change-events": "++plone++patternslib/components/patternslib/src/lib/input-change-events",
    "pat-jquery-ext": "++plone++patternslib/components/patternslib/src/core/jquery-ext",
    "pat-leaflet": "++plone++patternslib/components/pat-leaflet/src/pat-leaflet",
    "pat-legend": "++plone++patternslib/components/patternslib/src/pat/legend/legend",
    "pat-logger": "++plone++patternslib/components/patternslib/src/core/logger",
    "pat-markdown": "++plone++patternslib/components/patternslib/src/pat/markdown/markdown",
    "pat-masonry": "++plone++patternslib/components/patternslib/src/pat/masonry/masonry",
    "pat-menu": "++plone++patternslib/components/patternslib/src/pat/menu/menu",
    "pat-mockup-parser": "++plone++patternslib/components/patternslib/src/core/mockup-parser",
    "pat-modal": "++plone++patternslib/components/patternslib/src/pat/modal/modal",
    "pat-navigation": "++plone++patternslib/components/patternslib/src/pat/navigation/navigation",
    "pat-parser": "++plone++patternslib/components/patternslib/src/core/parser",
    "pat-placeholder": "++plone++patternslib/components/patternslib/src/pat/placeholder/placeholder",
    "pat-registry": "++plone++patternslib/components/patternslib/src/core/registry",
    "pat-remove": "++plone++patternslib/components/patternslib/src/core/remove",
    "pat-scroll": "++plone++patternslib/components/patternslib/src/pat/scroll/scroll",
    "pat-selectbox": "++plone++patternslib/components/patternslib/src/pat/selectbox/selectbox",
    "pat-slides": "++plone++patternslib/components/patternslib/src/pat/slides/slides",
    "pat-slideshow-builder": "++plone++patternslib/components/patternslib/src/pat/slideshow-builder/slideshow-builder",
    "pat-stacks": "++plone++patternslib/components/patternslib/src/pat/stacks/stacks",
    "pat-sticky": "++plone++patternslib/components/patternslib/src/pat/sticky/sticky",
    "pat-store": "++plone++patternslib/components/patternslib/src/core/store",
    "pat-subform": "++plone++patternslib/components/patternslib/src/pat/subform/subform",
    "pat-switch": "++plone++patternslib/components/patternslib/src/pat/switch/switch",
    "pat-utils": "++plone++patternslib/components/patternslib/src/core/utils",
    "pat-validation": "++plone++patternslib/components/patternslib/src/pat/validation/validation",
    "pat-zoom": "++plone++patternslib/components/patternslib/src/pat/zoom/zoom",
    "patterns": "++resource++patterns",
    "photoswipe-ui": "++plone++patternslib/components/photoswipe/dist/photoswipe-ui-default",
    "photoswipe": "++plone++patternslib/components/photoswipe/dist/photoswipe",
    "picker": "++plone++static/components/pickadate/lib/picker",
    "picker.date": "++plone++static/components/pickadate/lib/picker.date",
    "picker.time": "++plone++static/components/pickadate/lib/picker.time",
    "pikaday": "++plone++patternslib/components/pikaday/pikaday",
    "plone-app-discussion": "++plone++plone.app.discussion.javascripts/comments",
    "plone-app-event": "++plone++plone.app.event/event",
    "plone-base": "++resource++plone-base",
    "plone-datatables": "++resource++plone-datatables",
    "plone-editor-tools": "++resource++plone-editor-tools",
    "plone-logged-in": "++resource++plone-logged-in",
    "plone-moment": "++resource++plone-moment",
    "plone-patterns-portletmanager": "++resource++manage-portlets",
    "plone-patterns-toolbar": "++resource++mockup/toolbar/pattern",
    "plone-tinymce": "++resource++plone-tinymce",
    "plone": "++resource++plone",
    "prefixfree": "++plone++patternslib/components/prefixfree/prefixfree.min",
    "resource-plone-app-jquerytools-dateinput-js": "++plone++static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput",
    "resource-plone-app-jquerytools-js": "++plone++static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay",
    "resourceregistry": "++plone++static/resourceregistry",
    "select2": "++plone++static/components/select2/select2",
    "showdown-github": "++plone++patternslib/components/showdown/compressed/extensions/github.min",
    "showdown-table": "++plone++patternslib/components/showdown/compressed/extensions/table.min",
    "showdown": "++plone++patternslib/components/showdown/compressed/showdown",
    "slides": "++plone++patternslib/components/slides/src/slides",
    "spectrum": "++plone++patternslib/components/spectrum/spectrum",
    "stickyfill": "++plone++patternslib/components/Stickyfill/dist/stickyfill",
    "text": "++plone++static/components/requirejs-text/text",
    "thememapper": "++plone++static/thememapper",
    "tinymce-advlist": "++plone++static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin",
    "tinymce-anchor": "++plone++static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin",
    "tinymce-autolink": "++plone++static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin",
    "tinymce-autoresize": "++plone++static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin",
    "tinymce-autosave": "++plone++static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin",
    "tinymce-bbcode": "++plone++static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin",
    "tinymce-charmap": "++plone++static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin",
    "tinymce-code": "++plone++static/components/tinymce-builded/js/tinymce/plugins/code/plugin",
    "tinymce-colorpicker": "++plone++static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin",
    "tinymce-compat3x": "++plone++static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin",
    "tinymce-contextmenu": "++plone++static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin",
    "tinymce-directionality": "++plone++static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin",
    "tinymce-emoticons": "++plone++static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin",
    "tinymce-fullpage": "++plone++static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin",
    "tinymce-fullscreen": "++plone++static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin",
    "tinymce-hr": "++plone++static/components/tinymce-builded/js/tinymce/plugins/hr/plugin",
    "tinymce-image": "++plone++static/components/tinymce-builded/js/tinymce/plugins/image/plugin",
    "tinymce-importcss": "++plone++static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin",
    "tinymce-insertdatetime": "++plone++static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin",
    "tinymce-legacyoutput": "++plone++static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin",
    "tinymce-link": "++plone++static/components/tinymce-builded/js/tinymce/plugins/link/plugin",
    "tinymce-lists": "++plone++static/components/tinymce-builded/js/tinymce/plugins/lists/plugin",
    "tinymce-media": "++plone++static/components/tinymce-builded/js/tinymce/plugins/media/plugin",
    "tinymce-modern-theme": "++plone++static/components/tinymce-builded/js/tinymce/themes/modern/theme",
    "tinymce-nonbreaking": "++plone++static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin",
    "tinymce-noneditable": "++plone++static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin",
    "tinymce-pagebreak": "++plone++static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin",
    "tinymce-paste": "++plone++static/components/tinymce-builded/js/tinymce/plugins/paste/plugin",
    "tinymce-preview": "++plone++static/components/tinymce-builded/js/tinymce/plugins/preview/plugin",
    "tinymce-print": "++plone++static/components/tinymce-builded/js/tinymce/plugins/print/plugin",
    "tinymce-save": "++plone++static/components/tinymce-builded/js/tinymce/plugins/save/plugin",
    "tinymce-searchreplace": "++plone++static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin",
    "tinymce-spellchecker": "++plone++static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin",
    "tinymce-tabfocus": "++plone++static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin",
    "tinymce-table": "++plone++static/components/tinymce-builded/js/tinymce/plugins/table/plugin",
    "tinymce-template": "++plone++static/components/tinymce-builded/js/tinymce/plugins/template/plugin",
    "tinymce-textcolor": "++plone++static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin",
    "tinymce-textpattern": "++plone++static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin",
    "tinymce-visualblocks": "++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin",
    "tinymce-visualchars": "++plone++static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin",
    "tinymce-wordcount": "++plone++static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin",
    "tinymce": "++plone++static/components/tinymce-builded/js/tinymce/tinymce",
    "translate": "++resource++mockupjs/i18n-wrapper",
    "underscore": "++plone++static/components/underscore/underscore",
    "validate": "++plone++patternslib/components/validate/validate",
    "webcouturier-dropdownmenu": "++plone++dropdown/dropdown"
},
    shim: {
        "backbone": {
            exports: "window.Backbone",
            deps: ["underscore", "jquery"]
        },
        "backbone.paginator": {
            exports: "window.Backbone.Paginator",
            deps: ["backbone"]
        },
        "bootstrap-alert": {
            deps: ["jquery"]
        },
        "bootstrap-collapse": {
            exports: "window.jQuery.fn.collapse.Constructor",
            deps: ["jquery"]
        },
        "bootstrap-dropdown": {
            deps: ["jquery"]
        },
        "bootstrap-tooltip": {
            deps: ["jquery"]
        },
        "bootstrap-transition": {
            exports: "window.jQuery.support.transition",
            deps: ["jquery"]
        },
        "jcrop": {
            deps: ["jquery"]
        },
        "jqtree-contextmenu": {
            deps: ["jqtree"]
        },
        "jqtree": {
            deps: ["jquery"]
        },
        "jquery.browser": {
            deps: ["jquery"]
        },
        "jquery.cookie": {
            deps: ["jquery"]
        },
        "jquery.event.drag": {
            deps: ["jquery"]
        },
        "jquery.event.drop": {
            exports: "$.drop",
            deps: ["jquery"]
        },
        "jquery.placeholder": {
            deps: ["jquery"]
        },
        "jquery.recurrenceinput": {
            deps: ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]
        },
        "jquery.tmpl": {
            deps: ["jquery"]
        },
        "leaflet-awesomemarkers": {
            deps: ["leaflet"]
        },
        "leaflet-fullscreen": {
            deps: ["leaflet"]
        },
        "leaflet-geosearch-bing": {
            deps: ["leaflet-geosearch"]
        },
        "leaflet-geosearch-esri": {
            deps: ["leaflet-geosearch"]
        },
        "leaflet-geosearch-google": {
            deps: ["leaflet-geosearch"]
        },
        "leaflet-geosearch-openstreetmap": {
            deps: ["leaflet-geosearch"]
        },
        "leaflet-geosearch": {
            deps: ["leaflet"]
        },
        "leaflet-locatecontrol": {
            deps: ["leaflet"]
        },
        "leaflet-markercluster": {
            deps: ["leaflet"]
        },
        "leaflet-minimap": {
            deps: ["leaflet"]
        },
        "leaflet-simplemarkers": {
            deps: ["leaflet"]
        },
        "leaflet-sleep": {
            deps: ["leaflet"]
        },
        "modernizr-csspositionsticky": {
            deps: ["modernizr"]
        },
        "pat-leaflet": {
            deps: ["leaflet"]
        },
        "picker.date": {
            deps: ["picker"]
        },
        "picker.time": {
            deps: ["picker"]
        },
        "resource-plone-app-jquerytools-dateinput-js": {
            deps: ["jquery"]
        },
        "resource-plone-app-jquerytools-js": {
            deps: ["jquery"]
        },
        "showdown-github": {
            deps: ["showdown"]
        },
        "showdown-table": {
            deps: ["showdown"]
        },
        "spectrum": {
            deps: ["jquery"]
        },
        "tinymce-advlist": {
            deps: ["tinymce"]
        },
        "tinymce-anchor": {
            deps: ["tinymce"]
        },
        "tinymce-autolink": {
            deps: ["tinymce"]
        },
        "tinymce-autoresize": {
            deps: ["tinymce"]
        },
        "tinymce-autosave": {
            deps: ["tinymce"]
        },
        "tinymce-bbcode": {
            deps: ["tinymce"]
        },
        "tinymce-charmap": {
            deps: ["tinymce"]
        },
        "tinymce-code": {
            deps: ["tinymce"]
        },
        "tinymce-colorpicker": {
            deps: ["tinymce"]
        },
        "tinymce-compat3x": {
            deps: ["tinymce"]
        },
        "tinymce-contextmenu": {
            deps: ["tinymce"]
        },
        "tinymce-directionality": {
            deps: ["tinymce"]
        },
        "tinymce-emoticons": {
            deps: ["tinymce"]
        },
        "tinymce-fullpage": {
            deps: ["tinymce"]
        },
        "tinymce-fullscreen": {
            deps: ["tinymce"]
        },
        "tinymce-hr": {
            deps: ["tinymce"]
        },
        "tinymce-image": {
            deps: ["tinymce"]
        },
        "tinymce-importcss": {
            deps: ["tinymce"]
        },
        "tinymce-insertdatetime": {
            deps: ["tinymce"]
        },
        "tinymce-legacyoutput": {
            deps: ["tinymce"]
        },
        "tinymce-link": {
            deps: ["tinymce"]
        },
        "tinymce-lists": {
            deps: ["tinymce"]
        },
        "tinymce-media": {
            deps: ["tinymce"]
        },
        "tinymce-modern-theme": {
            deps: ["tinymce"]
        },
        "tinymce-nonbreaking": {
            deps: ["tinymce"]
        },
        "tinymce-noneditable": {
            deps: ["tinymce"]
        },
        "tinymce-pagebreak": {
            deps: ["tinymce"]
        },
        "tinymce-paste": {
            deps: ["tinymce"]
        },
        "tinymce-preview": {
            deps: ["tinymce"]
        },
        "tinymce-print": {
            deps: ["tinymce"]
        },
        "tinymce-save": {
            deps: ["tinymce"]
        },
        "tinymce-searchreplace": {
            deps: ["tinymce"]
        },
        "tinymce-spellchecker": {
            deps: ["tinymce"]
        },
        "tinymce-tabfocus": {
            deps: ["tinymce"]
        },
        "tinymce-table": {
            deps: ["tinymce"]
        },
        "tinymce-template": {
            deps: ["tinymce"]
        },
        "tinymce-textcolor": {
            deps: ["tinymce"]
        },
        "tinymce-textpattern": {
            deps: ["tinymce"]
        },
        "tinymce-visualblocks": {
            deps: ["tinymce"]
        },
        "tinymce-visualchars": {
            deps: ["tinymce"]
        },
        "tinymce-wordcount": {
            deps: ["tinymce"]
        },
        "tinymce": {
            exports: "window.tinyMCE",
            init: function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }
        },
        "underscore": {
            exports: "window._"
        }
    },
    optimize: 'uglify',
    wrapShim: true
});
!function(){function n(){}var t="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||this||{},e=t._,r=Array.prototype,a=Object.prototype,f="undefined"!=typeof Symbol?Symbol.prototype:null,i=r.push,l=r.slice,p=a.toString,o=a.hasOwnProperty,u=Array.isArray,c=Object.keys,s=Object.create,h=function(t){return t instanceof h?t:this instanceof h?void(this._wrapped=t):new h(t)};"undefined"==typeof exports||exports.nodeType?t._=h:("undefined"!=typeof module&&!module.nodeType&&module.exports&&(exports=module.exports=h),exports._=h),h.VERSION="1.9.1";function d(i,o,t){if(void 0===o)return i;switch(null==t?3:t){case 1:return function(t){return i.call(o,t)};case 3:return function(t,e,n){return i.call(o,t,e,n)};case 4:return function(t,e,n,r){return i.call(o,t,e,n,r)}}return function(){return i.apply(o,arguments)}}function y(t,e,n){return h.iteratee!==v?h.iteratee(t,e):null==t?h.identity:h.isFunction(t)?d(t,e,n):h.isObject(t)&&!h.isArray(t)?h.matcher(t):h.property(t)}var v;h.iteratee=v=function(t,e){return y(t,e,1/0)};function g(i,o){return o=null==o?i.length-1:+o,function(){for(var t=Math.max(arguments.length-o,0),e=Array(t),n=0;n<t;n++)e[n]=arguments[n+o];switch(o){case 0:return i.call(this,e);case 1:return i.call(this,arguments[0],e);case 2:return i.call(this,arguments[0],arguments[1],e)}var r=Array(o+1);for(n=0;n<o;n++)r[n]=arguments[n];return r[o]=e,i.apply(this,r)}}function m(t){if(!h.isObject(t))return{};if(s)return s(t);n.prototype=t;var e=new n;return n.prototype=null,e}function w(e){return function(t){return null==t?void 0:t[e]}}function b(t,e){return null!=t&&o.call(t,e)}function x(t,e){for(var n=e.length,r=0;r<n;r++){if(null==t)return;t=t[e[r]]}return n?t:void 0}function j(t){var e=_(t);return"number"==typeof e&&0<=e&&e<=A}var A=Math.pow(2,53)-1,_=w("length");h.each=h.forEach=function(t,e,n){var r,i;if(e=d(e,n),j(t))for(r=0,i=t.length;r<i;r++)e(t[r],r,t);else{var o=h.keys(t);for(r=0,i=o.length;r<i;r++)e(t[o[r]],o[r],t)}return t},h.map=h.collect=function(t,e,n){e=y(e,n);for(var r=!j(t)&&h.keys(t),i=(r||t).length,o=Array(i),a=0;a<i;a++){var u=r?r[a]:a;o[a]=e(t[u],u,t)}return o};function E(l){return function(t,e,n,r){var i=3<=arguments.length;return function(t,e,n,r){var i=!j(t)&&h.keys(t),o=(i||t).length,a=0<l?0:o-1;for(r||(n=t[i?i[a]:a],a+=l);0<=a&&a<o;a+=l){var u=i?i[a]:a;n=e(n,t[u],u,t)}return n}(t,d(e,r,4),n,i)}}h.reduce=h.foldl=h.inject=E(1),h.reduceRight=h.foldr=E(-1),h.find=h.detect=function(t,e,n){var r=(j(t)?h.findIndex:h.findKey)(t,e,n);if(void 0!==r&&-1!==r)return t[r]},h.filter=h.select=function(t,r,e){var i=[];return r=y(r,e),h.each(t,function(t,e,n){r(t,e,n)&&i.push(t)}),i},h.reject=function(t,e,n){return h.filter(t,h.negate(y(e)),n)},h.every=h.all=function(t,e,n){e=y(e,n);for(var r=!j(t)&&h.keys(t),i=(r||t).length,o=0;o<i;o++){var a=r?r[o]:o;if(!e(t[a],a,t))return!1}return!0},h.some=h.any=function(t,e,n){e=y(e,n);for(var r=!j(t)&&h.keys(t),i=(r||t).length,o=0;o<i;o++){var a=r?r[o]:o;if(e(t[a],a,t))return!0}return!1},h.contains=h.includes=h.include=function(t,e,n,r){return j(t)||(t=h.values(t)),"number"==typeof n&&!r||(n=0),0<=h.indexOf(t,e,n)},h.invoke=g(function(t,n,r){var i,o;return h.isFunction(n)?o=n:h.isArray(n)&&(i=n.slice(0,-1),n=n[n.length-1]),h.map(t,function(t){var e=o;if(!e){if(i&&i.length&&(t=x(t,i)),null==t)return;e=t[n]}return null==e?e:e.apply(t,r)})}),h.pluck=function(t,e){return h.map(t,h.property(e))},h.where=function(t,e){return h.filter(t,h.matcher(e))},h.findWhere=function(t,e){return h.find(t,h.matcher(e))},h.max=function(t,r,e){var n,i,o=-1/0,a=-1/0;if(null==r||"number"==typeof r&&"object"!=typeof t[0]&&null!=t)for(var u=0,l=(t=j(t)?t:h.values(t)).length;u<l;u++)null!=(n=t[u])&&o<n&&(o=n);else r=y(r,e),h.each(t,function(t,e,n){i=r(t,e,n),(a<i||i===-1/0&&o===-1/0)&&(o=t,a=i)});return o},h.min=function(t,r,e){var n,i,o=1/0,a=1/0;if(null==r||"number"==typeof r&&"object"!=typeof t[0]&&null!=t)for(var u=0,l=(t=j(t)?t:h.values(t)).length;u<l;u++)null!=(n=t[u])&&n<o&&(o=n);else r=y(r,e),h.each(t,function(t,e,n){((i=r(t,e,n))<a||i===1/0&&o===1/0)&&(o=t,a=i)});return o},h.shuffle=function(t){return h.sample(t,1/0)},h.sample=function(t,e,n){if(null==e||n)return j(t)||(t=h.values(t)),t[h.random(t.length-1)];var r=j(t)?h.clone(t):h.values(t),i=_(r);e=Math.max(Math.min(e,i),0);for(var o=i-1,a=0;a<e;a++){var u=h.random(a,o),l=r[a];r[a]=r[u],r[u]=l}return r.slice(0,e)},h.sortBy=function(t,r,e){var i=0;return r=y(r,e),h.pluck(h.map(t,function(t,e,n){return{value:t,index:i++,criteria:r(t,e,n)}}).sort(function(t,e){var n=t.criteria,r=e.criteria;if(n!==r){if(r<n||void 0===n)return 1;if(n<r||void 0===r)return-1}return t.index-e.index}),"value")};function O(a,e){return function(r,i,t){var o=e?[[],[]]:{};return i=y(i,t),h.each(r,function(t,e){var n=i(t,e,r);a(o,t,n)}),o}}h.groupBy=O(function(t,e,n){b(t,n)?t[n].push(e):t[n]=[e]}),h.indexBy=O(function(t,e,n){t[n]=e}),h.countBy=O(function(t,e,n){b(t,n)?t[n]++:t[n]=1});var k=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;h.toArray=function(t){return t?h.isArray(t)?l.call(t):h.isString(t)?t.match(k):j(t)?h.map(t,h.identity):h.values(t):[]},h.size=function(t){return null==t?0:j(t)?t.length:h.keys(t).length},h.partition=O(function(t,e,n){t[n?0:1].push(e)},!0),h.first=h.head=h.take=function(t,e,n){return null==t||t.length<1?null==e?void 0:[]:null==e||n?t[0]:h.initial(t,t.length-e)},h.initial=function(t,e,n){return l.call(t,0,Math.max(0,t.length-(null==e||n?1:e)))},h.last=function(t,e,n){return null==t||t.length<1?null==e?void 0:[]:null==e||n?t[t.length-1]:h.rest(t,Math.max(0,t.length-e))},h.rest=h.tail=h.drop=function(t,e,n){return l.call(t,null==e||n?1:e)},h.compact=function(t){return h.filter(t,Boolean)};var T=function(t,e,n,r){for(var i=(r=r||[]).length,o=0,a=_(t);o<a;o++){var u=t[o];if(j(u)&&(h.isArray(u)||h.isArguments(u)))if(e)for(var l=0,c=u.length;l<c;)r[i++]=u[l++];else T(u,e,n,r),i=r.length;else n||(r[i++]=u)}return r};h.flatten=function(t,e){return T(t,e,!1)},h.without=g(function(t,e){return h.difference(t,e)}),h.uniq=h.unique=function(t,e,n,r){h.isBoolean(e)||(r=n,n=e,e=!1),null!=n&&(n=y(n,r));for(var i=[],o=[],a=0,u=_(t);a<u;a++){var l=t[a],c=n?n(l,a,t):l;e&&!n?(a&&o===c||i.push(l),o=c):n?h.contains(o,c)||(o.push(c),i.push(l)):h.contains(i,l)||i.push(l)}return i},h.union=g(function(t){return h.uniq(T(t,!0,!0))}),h.intersection=function(t){for(var e=[],n=arguments.length,r=0,i=_(t);r<i;r++){var o=t[r];if(!h.contains(e,o)){var a;for(a=1;a<n&&h.contains(arguments[a],o);a++);a===n&&e.push(o)}}return e},h.difference=g(function(t,e){return e=T(e,!0,!0),h.filter(t,function(t){return!h.contains(e,t)})}),h.unzip=function(t){for(var e=t&&h.max(t,_).length||0,n=Array(e),r=0;r<e;r++)n[r]=h.pluck(t,r);return n},h.zip=g(h.unzip),h.object=function(t,e){for(var n={},r=0,i=_(t);r<i;r++)e?n[t[r]]=e[r]:n[t[r][0]]=t[r][1];return n};function I(o){return function(t,e,n){e=y(e,n);for(var r=_(t),i=0<o?0:r-1;0<=i&&i<r;i+=o)if(e(t[i],i,t))return i;return-1}}h.findIndex=I(1),h.findLastIndex=I(-1),h.sortedIndex=function(t,e,n,r){for(var i=(n=y(n,r,1))(e),o=0,a=_(t);o<a;){var u=Math.floor((o+a)/2);n(t[u])<i?o=u+1:a=u}return o};function S(o,a,u){return function(t,e,n){var r=0,i=_(t);if("number"==typeof n)0<o?r=0<=n?n:Math.max(n+i,r):i=0<=n?Math.min(n+1,i):n+i+1;else if(u&&n&&i)return t[n=u(t,e)]===e?n:-1;if(e!=e)return 0<=(n=a(l.call(t,r,i),h.isNaN))?n+r:-1;for(n=0<o?r:i-1;0<=n&&n<i;n+=o)if(t[n]===e)return n;return-1}}h.indexOf=S(1,h.findIndex,h.sortedIndex),h.lastIndexOf=S(-1,h.findLastIndex),h.range=function(t,e,n){null==e&&(e=t||0,t=0),n=n||(e<t?-1:1);for(var r=Math.max(Math.ceil((e-t)/n),0),i=Array(r),o=0;o<r;o++,t+=n)i[o]=t;return i},h.chunk=function(t,e){if(null==e||e<1)return[];for(var n=[],r=0,i=t.length;r<i;)n.push(l.call(t,r,r+=e));return n};function F(t,e,n,r,i){if(!(r instanceof e))return t.apply(n,i);var o=m(t.prototype),a=t.apply(o,i);return h.isObject(a)?a:o}h.bind=g(function(e,n,r){if(!h.isFunction(e))throw new TypeError("Bind must be called on a function");var i=g(function(t){return F(e,i,n,this,r.concat(t))});return i}),h.partial=g(function(i,o){var a=h.partial.placeholder,u=function(){for(var t=0,e=o.length,n=Array(e),r=0;r<e;r++)n[r]=o[r]===a?arguments[t++]:o[r];for(;t<arguments.length;)n.push(arguments[t++]);return F(i,u,this,this,n)};return u}),(h.partial.placeholder=h).bindAll=g(function(t,e){var n=(e=T(e,!1,!1)).length;if(n<1)throw new Error("bindAll must be passed function names");for(;n--;){var r=e[n];t[r]=h.bind(t[r],t)}}),h.memoize=function(r,i){var o=function(t){var e=o.cache,n=""+(i?i.apply(this,arguments):t);return b(e,n)||(e[n]=r.apply(this,arguments)),e[n]};return o.cache={},o},h.delay=g(function(t,e,n){return setTimeout(function(){return t.apply(null,n)},e)}),h.defer=h.partial(h.delay,h,1),h.throttle=function(n,r,i){var o,a,u,l,c=0;i=i||{};function s(){c=!1===i.leading?0:h.now(),o=null,l=n.apply(a,u),o||(a=u=null)}function t(){var t=h.now();c||!1!==i.leading||(c=t);var e=r-(t-c);return a=this,u=arguments,e<=0||r<e?(o&&(clearTimeout(o),o=null),c=t,l=n.apply(a,u),o||(a=u=null)):o||!1===i.trailing||(o=setTimeout(s,e)),l}return t.cancel=function(){clearTimeout(o),c=0,o=a=u=null},t},h.debounce=function(n,r,i){function o(t,e){a=null,e&&(u=n.apply(t,e))}var a,u,t=g(function(t){if(a&&clearTimeout(a),i){var e=!a;a=setTimeout(o,r),e&&(u=n.apply(this,t))}else a=h.delay(o,r,this,t);return u});return t.cancel=function(){clearTimeout(a),a=null},t},h.wrap=function(t,e){return h.partial(e,t)},h.negate=function(t){return function(){return!t.apply(this,arguments)}},h.compose=function(){var n=arguments,r=n.length-1;return function(){for(var t=r,e=n[r].apply(this,arguments);t--;)e=n[t].call(this,e);return e}},h.after=function(t,e){return function(){if(--t<1)return e.apply(this,arguments)}},h.before=function(t,e){var n;return function(){return 0<--t&&(n=e.apply(this,arguments)),t<=1&&(e=null),n}},h.once=h.partial(h.before,2),h.restArguments=g;function M(t,e){var n=L.length,r=t.constructor,i=h.isFunction(r)&&r.prototype||a,o="constructor";for(b(t,o)&&!h.contains(e,o)&&e.push(o);n--;)(o=L[n])in t&&t[o]!==i[o]&&!h.contains(e,o)&&e.push(o)}var N=!{toString:null}.propertyIsEnumerable("toString"),L=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];h.keys=function(t){if(!h.isObject(t))return[];if(c)return c(t);var e=[];for(var n in t)b(t,n)&&e.push(n);return N&&M(t,e),e},h.allKeys=function(t){if(!h.isObject(t))return[];var e=[];for(var n in t)e.push(n);return N&&M(t,e),e},h.values=function(t){for(var e=h.keys(t),n=e.length,r=Array(n),i=0;i<n;i++)r[i]=t[e[i]];return r},h.mapObject=function(t,e,n){e=y(e,n);for(var r=h.keys(t),i=r.length,o={},a=0;a<i;a++){var u=r[a];o[u]=e(t[u],u,t)}return o},h.pairs=function(t){for(var e=h.keys(t),n=e.length,r=Array(n),i=0;i<n;i++)r[i]=[e[i],t[e[i]]];return r},h.invert=function(t){for(var e={},n=h.keys(t),r=0,i=n.length;r<i;r++)e[t[n[r]]]=n[r];return e},h.functions=h.methods=function(t){var e=[];for(var n in t)h.isFunction(t[n])&&e.push(n);return e.sort()};function P(l,c){return function(t){var e=arguments.length;if(c&&(t=Object(t)),e<2||null==t)return t;for(var n=1;n<e;n++)for(var r=arguments[n],i=l(r),o=i.length,a=0;a<o;a++){var u=i[a];c&&void 0!==t[u]||(t[u]=r[u])}return t}}h.extend=P(h.allKeys),h.extendOwn=h.assign=P(h.keys),h.findKey=function(t,e,n){e=y(e,n);for(var r,i=h.keys(t),o=0,a=i.length;o<a;o++)if(e(t[r=i[o]],r,t))return r};function q(t,e,n){return e in n}var R,C;h.pick=g(function(t,e){var n={},r=e[0];if(null==t)return n;h.isFunction(r)?(1<e.length&&(r=d(r,e[1])),e=h.allKeys(t)):(r=q,e=T(e,!1,!1),t=Object(t));for(var i=0,o=e.length;i<o;i++){var a=e[i],u=t[a];r(u,a,t)&&(n[a]=u)}return n}),h.omit=g(function(t,n){var e,r=n[0];return h.isFunction(r)?(r=h.negate(r),1<n.length&&(e=n[1])):(n=h.map(T(n,!1,!1),String),r=function(t,e){return!h.contains(n,e)}),h.pick(t,r,e)}),h.defaults=P(h.allKeys,!0),h.create=function(t,e){var n=m(t);return e&&h.extendOwn(n,e),n},h.clone=function(t){return h.isObject(t)?h.isArray(t)?t.slice():h.extend({},t):t},h.tap=function(t,e){return e(t),t},h.isMatch=function(t,e){var n=h.keys(e),r=n.length;if(null==t)return!r;for(var i=Object(t),o=0;o<r;o++){var a=n[o];if(e[a]!==i[a]||!(a in i))return!1}return!0},R=function(t,e,n,r){if(t===e)return 0!==t||1/t==1/e;if(null==t||null==e)return!1;if(t!=t)return e!=e;var i=typeof t;return("function"==i||"object"==i||"object"==typeof e)&&C(t,e,n,r)},C=function(t,e,n,r){t instanceof h&&(t=t._wrapped),e instanceof h&&(e=e._wrapped);var i=p.call(t);if(i!==p.call(e))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+t==""+e;case"[object Number]":return+t!=+t?+e!=+e:0==+t?1/+t==1/e:+t==+e;case"[object Date]":case"[object Boolean]":return+t==+e;case"[object Symbol]":return f.valueOf.call(t)===f.valueOf.call(e)}var o="[object Array]"===i;if(!o){if("object"!=typeof t||"object"!=typeof e)return!1;var a=t.constructor,u=e.constructor;if(a!==u&&!(h.isFunction(a)&&a instanceof a&&h.isFunction(u)&&u instanceof u)&&"constructor"in t&&"constructor"in e)return!1}r=r||[];for(var l=(n=n||[]).length;l--;)if(n[l]===t)return r[l]===e;if(n.push(t),r.push(e),o){if((l=t.length)!==e.length)return!1;for(;l--;)if(!R(t[l],e[l],n,r))return!1}else{var c,s=h.keys(t);if(l=s.length,h.keys(e).length!==l)return!1;for(;l--;)if(c=s[l],!b(e,c)||!R(t[c],e[c],n,r))return!1}return n.pop(),r.pop(),!0},h.isEqual=function(t,e){return R(t,e)},h.isEmpty=function(t){return null==t||(j(t)&&(h.isArray(t)||h.isString(t)||h.isArguments(t))?0===t.length:0===h.keys(t).length)},h.isElement=function(t){return!(!t||1!==t.nodeType)},h.isArray=u||function(t){return"[object Array]"===p.call(t)},h.isObject=function(t){var e=typeof t;return"function"==e||"object"==e&&!!t},h.each(["Arguments","Function","String","Number","Date","RegExp","Error","Symbol","Map","WeakMap","Set","WeakSet"],function(e){h["is"+e]=function(t){return p.call(t)==="[object "+e+"]"}}),h.isArguments(arguments)||(h.isArguments=function(t){return b(t,"callee")});var B=t.document&&t.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof B&&(h.isFunction=function(t){return"function"==typeof t||!1}),h.isFinite=function(t){return!h.isSymbol(t)&&isFinite(t)&&!isNaN(parseFloat(t))},h.isNaN=function(t){return h.isNumber(t)&&isNaN(t)},h.isBoolean=function(t){return!0===t||!1===t||"[object Boolean]"===p.call(t)},h.isNull=function(t){return null===t},h.isUndefined=function(t){return void 0===t},h.has=function(t,e){if(!h.isArray(e))return b(t,e);for(var n=e.length,r=0;r<n;r++){var i=e[r];if(null==t||!o.call(t,i))return!1;t=t[i]}return!!n},h.noConflict=function(){return t._=e,this},h.identity=function(t){return t},h.constant=function(t){return function(){return t}},h.noop=function(){},h.property=function(e){return h.isArray(e)?function(t){return x(t,e)}:w(e)},h.propertyOf=function(e){return null==e?function(){}:function(t){return h.isArray(t)?x(e,t):e[t]}},h.matcher=h.matches=function(e){return e=h.extendOwn({},e),function(t){return h.isMatch(t,e)}},h.times=function(t,e,n){var r=Array(Math.max(0,t));e=d(e,n,1);for(var i=0;i<t;i++)r[i]=e(i);return r},h.random=function(t,e){return null==e&&(e=t,t=0),t+Math.floor(Math.random()*(e-t+1))},h.now=Date.now||function(){return(new Date).getTime()};function W(e){function n(t){return e[t]}var t="(?:"+h.keys(e).join("|")+")",r=RegExp(t),i=RegExp(t,"g");return function(t){return t=null==t?"":""+t,r.test(t)?t.replace(i,n):t}}var D={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},$=h.invert(D);h.escape=W(D),h.unescape=W($),h.result=function(t,e,n){h.isArray(e)||(e=[e]);var r=e.length;if(!r)return h.isFunction(n)?n.call(t):n;for(var i=0;i<r;i++){var o=null==t?void 0:t[e[i]];void 0===o&&(o=n,i=r),t=h.isFunction(o)?o.call(t):o}return t};var U=0;h.uniqueId=function(t){var e=++U+"";return t?t+e:e},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};function z(t){return"\\"+G[t]}var Q=/(.)^/,G={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},H=/\\|'|\r|\n|\u2028|\u2029/g;h.template=function(o,t,e){!t&&e&&(t=e),t=h.defaults({},t,h.templateSettings);var n,r=RegExp([(t.escape||Q).source,(t.interpolate||Q).source,(t.evaluate||Q).source].join("|")+"|$","g"),a=0,u="__p+='";o.replace(r,function(t,e,n,r,i){return u+=o.slice(a,i).replace(H,z),a=i+t.length,e?u+="'+\n((__t=("+e+"))==null?'':_.escape(__t))+\n'":n?u+="'+\n((__t=("+n+"))==null?'':__t)+\n'":r&&(u+="';\n"+r+"\n__p+='"),t}),u+="';\n",t.variable||(u="with(obj||{}){\n"+u+"}\n"),u="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+u+"return __p;\n";try{n=new Function(t.variable||"obj","_",u)}catch(t){throw t.source=u,t}function i(t){return n.call(this,t,h)}var l=t.variable||"obj";return i.source="function("+l+"){\n"+u+"}",i},h.chain=function(t){var e=h(t);return e._chain=!0,e};function K(t,e){return t._chain?h(e).chain():e}h.mixin=function(n){return h.each(h.functions(n),function(t){var e=h[t]=n[t];h.prototype[t]=function(){var t=[this._wrapped];return i.apply(t,arguments),K(this,e.apply(h,t))}}),h},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var n=r[e];h.prototype[e]=function(){var t=this._wrapped;return n.apply(t,arguments),"shift"!==e&&"splice"!==e||0!==t.length||delete t[0],K(this,t)}}),h.each(["concat","join","slice"],function(t){var e=r[t];h.prototype[t]=function(){return K(this,e.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},h.prototype.valueOf=h.prototype.toJSON=h.prototype.value,h.prototype.toString=function(){return String(this._wrapped)},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}(),function(){var t,n;Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");function e(){}function n(){return i.apply(this instanceof e&&t?this:t,r.concat(Array.prototype.slice.call(arguments)))}var r=Array.prototype.slice.call(arguments,1),i=this;return e.prototype=this.prototype,n.prototype=new e,n});var i={DEBUG:10,INFO:20,WARN:30,ERROR:40,FATAL:50};function e(){}function r(){}function o(t,e){this._loggers={},this.name=t||"",this._parent=e||null,e||(this._enabled=!0,this._level=i.WARN)}function a(t){n=t}e.prototype={output:function(t,e,n){if(void 0!==window.console&&void 0!==console.log){t&&n.unshift(t+":");var r=n.join(" ");console.info,e<=i.DEBUG?(r="[DEBUG] "+r,console.log(r)):e<=i.INFO?console.info(r):e<=i.WARN?console.warn(r):console.error(r)}}},r.prototype={output:function(t,e,n){t&&n.unshift(t+":"),e<=i.DEBUG?(n.unshift("[DEBUG]"),console.log.apply(console,n)):e<=i.INFO?console.info.apply(console,n):e<=i.WARN?console.warn.apply(console,n):console.error.apply(console,n)}},o.prototype={getLogger:function(t){for(var e=t.split("."),n=this,r=this.name?[this.name]:[];e.length;){var i=e.shift();r.push(i),i in n._loggers||(n._loggers[i]=new o(r.join("."),n)),n=n._loggers[i]}return n},_getFlag:function(t){var e=this;for(t="_"+t;null!==e;){if(void 0!==e[t])return e[t];e=e._parent}return null},setEnabled:function(t){this._enabled=!!t},isEnabled:function(){this._getFlag("enabled")},setLevel:function(t){"number"==typeof t?this._level=t:"string"==typeof t&&(t=t.toUpperCase())in i&&(this._level=i[t])},getLevel:function(){return this._getFlag("level")},log:function(t,e){!e.length||!this._getFlag("enabled")||t<this._getFlag("level")||(e=Array.prototype.slice.call(e),n.output(this.name,t,e))},debug:function(){this.log(i.DEBUG,arguments)},info:function(){this.log(i.INFO,arguments)},warn:function(){this.log(i.WARN,arguments)},error:function(){this.log(i.ERROR,arguments)},fatal:function(){this.log(i.FATAL,arguments)}},window.console&&window.console.log&&"function"==typeof window.console.log.apply?a(new r):a(new e),t=new o;for(var u,l=/loglevel(|-[^=]+)=([^&]+)/g;null!==(u=l.exec(window.location.search));){(""===u[1]?t:t.getLogger(u[1].slice(1))).setLevel(u[2].toUpperCase())}var c={Level:i,getLogger:t.getLogger.bind(t),setEnabled:t.setEnabled.bind(t),isEnabled:t.isEnabled.bind(t),setLevel:t.setLevel.bind(t),getLevel:t.getLevel.bind(t),debug:t.debug.bind(t),info:t.info.bind(t),warn:t.warn.bind(t),error:t.error.bind(t),fatal:t.fatal.bind(t),getWriter:function(){return n},setWriter:a};"function"==typeof define?define("logging",[],function(){return c}):window.logging=c}(),define("pat-logger",["logging"],function(t){return t.getLogger("patterns")}),function(e){"function"==typeof define&&define.amd?define("jquery.browser",["jquery"],function(t){return e(t)}):"object"==typeof module&&"object"==typeof module.exports?module.exports=e(require("jquery")):e(window.jQuery)}(function(t){"use strict";function e(t){void 0===t&&(t=window.navigator.userAgent),t=t.toLowerCase();var e=/(edge)\/([\w.]+)/.exec(t)||/(opr)[\/]([\w.]+)/.exec(t)||/(chrome)[ \/]([\w.]+)/.exec(t)||/(iemobile)[\/]([\w.]+)/.exec(t)||/(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||0<=t.indexOf("trident")&&/(rv)(?::| )([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[],n=/(ipad)/.exec(t)||/(ipod)/.exec(t)||/(windows phone)/.exec(t)||/(iphone)/.exec(t)||/(kindle)/.exec(t)||/(silk)/.exec(t)||/(android)/.exec(t)||/(win)/.exec(t)||/(mac)/.exec(t)||/(linux)/.exec(t)||/(cros)/.exec(t)||/(playbook)/.exec(t)||/(bb)/.exec(t)||/(blackberry)/.exec(t)||[],r={},i={browser:e[5]||e[3]||e[1]||"",version:e[2]||e[4]||"0",versionNumber:e[4]||e[2]||"0",platform:n[0]||""};if(i.browser&&(r[i.browser]=!0,r.version=i.version,r.versionNumber=parseInt(i.versionNumber,10)),i.platform&&(r[i.platform]=!0),(r.android||r.bb||r.blackberry||r.ipad||r.iphone||r.ipod||r.kindle||r.playbook||r.silk||r["windows phone"])&&(r.mobile=!0),(r.cros||r.mac||r.linux||r.win)&&(r.desktop=!0),(r.chrome||r.opr||r.safari)&&(r.webkit=!0),r.rv||r.iemobile){i.browser="msie",r.msie=!0}if(r.edge){delete r.edge;i.browser="msedge",r.msedge=!0}if(r.safari&&r.blackberry){var o="blackberry";r[i.browser=o]=!0}if(r.safari&&r.playbook){var a="playbook";r[i.browser=a]=!0}if(r.bb){var u="blackberry";r[i.browser=u]=!0}if(r.opr){i.browser="opera",r.opera=!0}if(r.safari&&r.android){var l="android";r[i.browser=l]=!0}if(r.safari&&r.kindle){i.browser="kindle",r.kindle=!0}if(r.safari&&r.silk){i.browser="silk",r.silk=!0}return r.name=i.browser,r.platform=i.platform,r}return window.jQBrowser=e(window.navigator.userAgent),window.jQBrowser.uaMatch=e,t&&(t.browser=window.jQBrowser),window.jQBrowser}),define("pat-utils",["jquery","underscore","jquery.browser"],function(o,a){o.fn.safeClone=function(){var t=this.clone();return void 0!==o.browser.msie&&t.findInclusive(":input[placeholder]").each(function(t,e){var n=o(e);n.attr("placeholder")===n.val()&&n.val("")}),t},Array.prototype.forEach||(Array.prototype.forEach=function(t,e){var n,r;if(null===this)throw new TypeError(" this is null or not defined");var i=Object(this),o=i.length>>>0;if("function"!=typeof t)throw new TypeError(t+" is not a function");for(1<arguments.length&&(n=e),r=0;r<o;){var a;r in i&&(a=i[r],t.call(n,a,r,i)),r++}});function u(t){var e=typeof t;return"function"==e||"object"==e&&!!t}var l={none:{hide:"hide",show:"show"},fade:{hide:"fadeOut",show:"fadeIn"},slide:{hide:"slideUp",show:"slideDown"}};return isElementInViewport=function(t,e,n){if(t===[])return!1;t instanceof o&&(t=t[0]);var r=t.getBoundingClientRect(),i=[r.top,r.bottom,r.left,r.right];return!a.every(i,function(t){if(0===t)return!0})&&(e?(void 0===n&&(n=0),r.top<=0+n&&r.bottom>=0+n):0<=r.top&&0<=r.left&&r.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&r.right<=(window.innerWidth||document.documentElement.clientWidth))},{jqueryPlugin:function(n){return function(t,e){return 0===this.length?this:("object"==typeof t&&(e=t,t=void 0),"function"==typeof n?function(n,r,i){return this.each(function(){var t,e=o(this);if(t=n.init(e,i),r){if(void 0===t[r])return o.error("Method "+r+" does not exist on jQuery."+n.name),!1;if("_"===r.charAt(0))return o.error("Method "+r+" is private on jQuery."+n.name),!1;t[r].apply(t,[i])}}),this}.call(this,n,t,e):function(t,e,n){var r=this;if(e){if(t[e])return t[e].apply(r,[r].concat([n]));o.error("Method "+e+" does not exist on jQuery."+t.name)}else t.init.apply(r,[r].concat([n]));return r}.call(this,n,t,e))}},debounce:function(n,r){var i;return function(){var t=this,e=arguments;clearTimeout(i),i=setTimeout(function(){i=null,n.apply(t,e)},r)}},escapeRegExp:function(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},isObject:u,extend:function(t){if(!u(t))return t;for(var e,n,r=1,i=arguments.length;r<i;r++)for(n in e=arguments[r])hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},rebaseURL:function(t,e){return-1!==e.indexOf("://")||"/"===e[0]?e:t.slice(0,t.lastIndexOf("/")+1)+e},findLabel:function(t){for(var e,n=t.parentNode;n&&11!==n.nodeType;n=n.parentNode)if("LABEL"===n.tagName)return n;return t.id&&(e=o('label[for="'+t.id+'"]')),e&&0===e.length&&t.form&&(e=o('label[for="'+t.name+'"]',t.form)),e&&e.length?e[0]:null},elementInViewport:function(t){var e=t.getBoundingClientRect(),n=document.documentElement,r=window.innerWidth||n.clientWidth,i=window.innerHeight||n.clientHeight;return!(e.right<0||e.bottom<0||e.left>r||e.top>i)},removeWildcardClass:function(t,e){if(-1===e.indexOf("*"))t.removeClass(e);else{var i=e.replace(/[\-\[\]{}()+?.,\\\^$|#\s]/g,"\\$&");i=i.replace(/[*]/g,".*"),i=new RegExp("^"+i+"$"),t.filter("[class]").each(function(){for(var t=o(this),e=t.attr("class").split(/\s+/),n=[],r=0;r<e.length;r++)i.test(e[r])||n.push(e[r]);n.length?t.attr("class",n.join(" ")):t.removeAttr("class")})}},hideOrShow:function(t,e,n,r){var i="css"===n.transition||"none"===n.transition?null:n.effect.duration;function o(){t.removeClass("in-progress").addClass(e?"visible":"hidden").trigger("pat-update",{pattern:r,transition:"complete"})}if(t.removeClass("visible hidden in-progress"),i){var a=l[n.transition];t.addClass("in-progress").trigger("pat-update",{pattern:r,transition:"start"}),t[e?a.show:a.hide]({duration:i,easing:n.effect.easing,complete:o})}else"css"!==n.transition&&t[e?"show":"hide"](),o()},addURLQueryParameter:function(t,e,n){var r=new RegExp("(\\?|\\&)"+e+"=.*?(?=(&|$))"),i=t.toString().split("#"),o=i[0],a=i[1],u=o;return u=r.test(o)?o.replace(r,"$1"+e+"="+n):/\?.+$/.test(o)?o+"&"+e+"="+n:o+"?"+e+"="+n,a&&(u+="#"+a),u},removeDuplicateObjects:function(t){return a.reduce(t,function(t,e){var n=!1;return a.each(t,function(t){n=a.keys(t).length===a.keys(e).length&&!a.chain(t).omit(function(t,e){return this[e]===t}.bind(e)).keys().value().length}),n||t.push(e),t},[])},mergeStack:function(t,r){for(var i=[],e=0;e<r;e++)i.push({});return a.each(t,function(t){for(var e=t.length-1,n=0;n<r;n++)i[n]=o.extend(i[n]||{},t[e<n?e:n])}),i},isElementInViewport:isElementInViewport}}),define("pat-compat",[],function(){var i,o,a,u;Array.prototype.every||(Array.prototype.every=function(t){"use strict";if(null===this)throw new TypeError;var e=Object(this),n=e.length>>>0;if("function"!=typeof t)throw new TypeError;for(var r=arguments[1],i=0;i<n;i++)if(i in e&&!t.call(r,e[i],i,e))return!1;return!0}),Array.prototype.filter||(Array.prototype.filter=function(t){"use strict";if(null===this)throw new TypeError;var e=Object(this),n=e.length>>>0;if("function"!=typeof t)throw new TypeError;for(var r=[],i=arguments[1],o=0;o<n;o++)if(o in e){var a=e[o];t.call(i,a,o,e)&&r.push(a)}return r}),Array.prototype.forEach||(Array.prototype.forEach=function(t,e){var n,r;if(null===this)throw new TypeError(" this is null or not defined");var i=Object(this),o=i.length>>>0;if("[object Function]"!=={}.toString.call(t))throw new TypeError(t+" is not a function");for(e&&(n=e),r=0;r<o;){var a;r in i&&(a=i[r],t.call(n,a,r,i)),r++}}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t){"use strict";if(null===this)throw new TypeError;var e=Object(this),n=e.length>>>0;if(0==n)return-1;var r=0;if(0<arguments.length&&((r=Number(arguments[1]))!=r?r=0:0!==r&&r!==1/0&&r!==-1/0&&(r=(0<r||-1)*Math.floor(Math.abs(r)))),n<=r)return-1;for(var i=0<=r?r:Math.max(n-Math.abs(r),0);i<n;i++)if(i in e&&e[i]===t)return i;return-1}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(t){"use strict";if(null===this)throw new TypeError;var e=Object(this),n=e.length>>>0;if(0==n)return-1;var r=n;1<arguments.length&&((r=Number(arguments[1]))!=r?r=0:0!==r&&r!==1/0&&r!==-1/0&&(r=(0<r||-1)*Math.floor(Math.abs(r))));for(var i=0<=r?Math.min(r,n-1):n-Math.abs(r);0<=i;i--)if(i in e&&e[i]===t)return i;return-1}),Array.prototype.map||(Array.prototype.map=function(t,e){var n,r,i;if(null===this)throw new TypeError(" this is null or not defined");var o=Object(this),a=o.length>>>0;if("[object Function]"!=={}.toString.call(t))throw new TypeError(t+" is not a function");for(e&&(n=e),r=new Array(a),i=0;i<a;){var u,l;i in o&&(u=o[i],l=t.call(n,u,i,o),r[i]=l),i++}return r}),Array.prototype.reduce||(Array.prototype.reduce=function(t,e){if(null==this)throw new TypeError("Object is null or undefined");var n,r=0,i=this.length>>0;if("function"!=typeof t)throw new TypeError("First argument is not callable");if(arguments.length<2){if(0==i)throw new TypeError("Array length is 0 and no second argument");n=this[0],r=1}else n=e;for(;r<i;)r in this&&(n=t.call(void 0,n,this[r],r,this)),++r;return n}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(t){"use strict";if(null===this)throw new TypeError;var e=Object(this),n=e.length>>>0;if("function"!=typeof t)throw new TypeError;if(0==n&&1===arguments.length)throw new TypeError;var r,i=n-1;if(2<=arguments.length)r=arguments[1];else for(;;){if(i in this){r=this[i--];break}if(--i<0)throw new TypeError}for(;0<=i;)i in e&&(r=t.call(void 0,r,e[i],i,e)),i--;return r}),Array.prototype.some||(Array.prototype.some=function(t){"use strict";if(null===this)throw new TypeError;var e=Object(this),n=e.length>>>0;if("function"!=typeof t)throw new TypeError;for(var r=arguments[1],i=0;i<n;i++)if(i in e&&t.call(r,e[i],i,e))return!0;return!1}),Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");function e(){}function n(){return i.apply(this instanceof e&&t?this:t,r.concat(Array.prototype.slice.call(arguments)))}var r=Array.prototype.slice.call(arguments,1),i=this;return e.prototype=this.prototype,n.prototype=new e,n}),Object.keys||(Object.keys=(i=Object.prototype.hasOwnProperty,o=!{toString:null}.propertyIsEnumerable("toString"),u=(a=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]).length,function(t){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError("Object.keys called on non-object");var e=[];for(var n in t)i.call(t,n)&&e.push(n);if(o)for(var r=0;r<u;r++)i.call(t,a[r])&&e.push(a[r]);return e}))}),define("pat-jquery-ext",["jquery"],function(s){var r={init:function(e){var n={time:3,initialTime:8,exceptionAreas:[]};return this.each(function(){var t=s(this);t.data("timeout")||(e&&s.extend(n,e),t.data("timeout",{lastEvent:new Date,trueTime:n.time,time:n.initialTime,untouched:!0,inExceptionArea:!1}),t.bind("mouseover.timeout",r.mouseMoved),t.bind("mouseenter.timeout",r.mouseMoved),s(n.exceptionAreas).each(function(){t.find(this).live("mouseover.timeout",{parent:t},r.enteredException).live("mouseleave.timeout",{parent:t},r.leftException)}),0<n.initialTime?t.timeout("startTimer"):t.addClass("timeout"))})},enteredException:function(t){var e=t.data.parent.data("timeout");e.inExceptionArea=!0,t.data.parent.data("timeout",e),t.data.parent.trigger("mouseover")},leftException:function(t){var e=t.data.parent.data("timeout");e.inExceptionArea=!1,t.data.parent.data("timeout",e)},destroy:function(){return this.each(function(){var t=s(this),e=t.data("timeout");s(window).unbind(".timeout"),e.timeout.remove(),t.removeData("timeout")})},mouseMoved:function(){var t=s(this),e=t.data("timeout");t.hasClass("timeout")?(t.removeClass("timeout"),t.timeout("startTimer")):e.untouched&&(e.untouched=!1,e.time=e.trueTime),e.lastEvent=new Date,t.data("timeout",e)},startTimer:function(){var r=s(this),t=r.data("timeout"),i=function(){var t=r.data("timeout");if(t&&t.lastEvent)if(t.inExceptionArea)setTimeout(i,Math.floor(1e3*t.time));else{var e=new Date,n=Math.floor(1e3*t.time)-(e-t.lastEvent);0<n?setTimeout(i,100+n):r.addClass("timeout")}};setTimeout(i,Math.floor(1e3*t.time))}};s.fn.timeout=function(t){return r[t]?r[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void s.error("Method "+t+" does not exist on jQuery.timeout"):r.init.apply(this,arguments)},s.extend(s.expr[":"],{scrollable:function(t){return"scroll"===s(t).css("overflow")||"scroll"===s(t).css("overflowX")||"scroll"===s(t).css("overflowY")||(t.clientHeight<t.scrollHeight&&(-1!==s.inArray(s(t).css("overflowY"),["scroll","auto"])||-1!==s.inArray(s(t).css("overflow"),["scroll","auto"]))||t.clientWidth<t.scrollWidth&&(-1!==s.inArray(s(t).css("overflowX"),["scroll","auto"])||-1!==s.inArray(s(t).css("overflow"),["scroll","auto"])))}}),s.fn.makeVisibleInScroll=function(t){var a=null;return"string"==typeof t?a=s("#"+t):t&&(a=s(t)),this.each(function(){var t,e=s(this);t=a||(0<(t=e.parents(":scrollable")).length?s(t[0]):s(window));var n=e.position().top,r=e.height()+n,i=t.scrollTop(),o=t.height()+i;n<i?t.scrollTop(n):r>o-t.height()/2&&t.scrollTop(n-(t.height()-e.height())/2)})},s.fn.setPositionAbsolute=function(u,l,c){return this.each(function(){var t=s(this),e=s(this).width(),n=u.offset(),r=u.width(),i=u.height(),o=n.left+r-e+c,a=n.top+i+l;t.css({"z-index":1,position:"absolute",marginLeft:0,marginTop:0,left:o+"px",top:a+"px",width:e}),t.remove().appendTo("body").show()})},s.fn.positionAncestor=function(a){var u=0,l=0;return this.each(function(){var t=s(this).closest(a);if(t.length&&"static"!==t.css("position")){var e=s(this),n=e.offset().left-parseInt(e.css("marginLeft"),10),r=e.offset().top-parseInt(e.css("marginTop"),10),i=t.offset().left+parseInt(t.css("borderLeftWidth"),10),o=t.offset().top+parseInt(t.css("borderTopWidth"),10);return u=n-i,l=r-o,!1}}),{left:u,top:l}},String.prototype.startsWith=function(t){return null!==this.match("^"+t)},String.prototype.endsWith=function(t){return null!==this.match(t+"$")},s.simplePlaceholder={placeholder_class:null,hide_placeholder:function(){var t=s(this);t.val()===t.attr("placeholder")&&t.val("").removeClass(s.simplePlaceholder.placeholder_class)},show_placeholder:function(){var t=s(this);""===t.val()&&t.val(t.attr("placeholder")).addClass(s.simplePlaceholder.placeholder_class)},prevent_placeholder_submit:function(){return s(this).find(".simple-placeholder").each(function(){var t=s(this);t.val()===t.attr("placeholder")&&t.val("")}),!0}},s.fn.simplePlaceholder=function(t){if(void 0===document.createElement("input").placeholder){var e={placeholder_class:"placeholding"};t&&s.extend(e,t),s.simplePlaceholder.placeholder_class=e.placeholder_class,this.each(function(){var t=s(this);t.focus(s.simplePlaceholder.hide_placeholder),t.blur(s.simplePlaceholder.show_placeholder),""===t.val()&&(t.val(t.attr("placeholder")),t.addClass(s.simplePlaceholder.placeholder_class)),t.addClass("simple-placeholder"),s(this.form).submit(s.simplePlaceholder.prevent_placeholder_submit)})}return this},s.fn.findInclusive=function(t){return this.find("*").addBack().filter(t)},s.fn.slideIn=function(t,e,n){return this.animate({width:"show"},t,e,n)},s.fn.slideOut=function(t,e,n){return this.animate({width:"hide"},t,e,n)},s.expr[":"].Contains=function(t,e,n){return 0<=s(t).text().toUpperCase().indexOf(n[3].toUpperCase())},s.fn.scopedFind=function(t){return t.startsWith("#")?s(t):this.find(t)}}),define("pat-registry",["jquery","underscore","pat-logger","pat-utils","pat-compat","pat-jquery-ext"],function(o,a,u,r){for(var t,i=u.getLogger("registry"),e=/patterns-disable=([^&]+)/g,n=/patterns-dont-catch/g,l=!1,c={};null!==(t=e.exec(window.location.search));)c[t[1]]=!0,i.info("Pattern disabled via url config:",t[1]);for(;null!==(t=n.exec(window.location.search));)l=!0,i.info("I will not catch init exceptions");var s={patterns:{},initialized:!1,init:function(){o(document).ready(function(){i.info("loaded: "+Object.keys(s.patterns).sort().join(", ")),s.scan(document.body),s.initialized=!0,i.info("finished initial scan.")})},clear:function(){this.patterns={}},transformPattern:function(e,t){if(c[e])i.debug("Skipping disabled pattern:",e);else{var n=s.patterns[e];if(n.transform)try{n.transform(o(t))}catch(t){if(l)throw t;i.error("Transform error for pattern"+e,t)}}},initPattern:function(t,e,n){var r=o(e),i=s.patterns[t];if(i.init&&(plog=u.getLogger("pat."+t),r.is(i.trigger))){plog.debug("Initialising:",r);try{i.init(r,null,n),plog.debug("done.")}catch(t){if(l)throw t;plog.error("Caught error:",t)}}},orderPatterns:function(t){return a.contains(t,"validation")&&a.contains(t,"inject")&&(t.splice(t.indexOf("validation"),1),t.unshift("validation")),t},scan:function(t,n,r){var i=[];(n=this.orderPatterns(n||Object.keys(s.patterns))).forEach(a.partial(this.transformPattern,a,t)),n=a.each(n,function(t){var e=s.patterns[t];e.trigger&&i.unshift(e.trigger)}),o(t).findInclusive(i.join(",")).filter(function(){return 0===o(this).parents("pre").length}).filter(":not(.cant-touch-this)").toArray().reduceRight(function(t,e){n.forEach(a.partial(this.initPattern,a,e,r))}.bind(this),null),o("body").addClass("patterns-loaded")},register:function(t,e){var n;return(e=e||t.name)?s.patterns[e]?(i.error("Already have a pattern called: "+e),!1):((s.patterns[e]=t).jquery_plugin&&(n=("pat-"+e).replace(/-([a-zA-Z])/g,function(t,e){return e.toUpperCase()}),o.fn[n]=r.jqueryPlugin(t),o.fn[n.replace(/^pat/,"pattern")]=o.fn[n]),i.debug("Registered pattern:",e,t),s.initialized&&s.scan(document.body,[e]),!0):(i.error("Pattern lacks a name:",t),!1)}};return s}),define("pat-mockup-parser",["jquery"],function(a){"use strict";return{getOptions:function t(e,n,r){r=r||{},0===e.length||a.nodeName(e[0],"body")||(r=t(e.parent(),n,r));var i={};if(0!==e.length&&(i=e.data("pat-"+n))&&"string"==typeof i){var o={};a.each(i.split(";"),function(t,e){(e=e.split(":")).reverse();var n=e.pop();n=n.replace(/^\s+|\s+$/g,""),e.reverse();var r=e.join(":");r=r.replace(/^\s+|\s+$/g,""),o[n]=r}),i=o}return a.extend(!0,{},r,i)}}}),define("pat-base",["jquery","pat-registry","pat-mockup-parser","pat-logger"],function(i,a,u,l){"use strict";function o(t,e,n){var r=this.prototype.name,i=l.getLogger("pat."+r),o=t.data("pattern-"+r);if(void 0===o&&a.patterns[r]){try{e="mockup"===this.prototype.parser?u.getOptions(t,r,e):e,o=new a.patterns[r](t,e,n)}catch(t){i.error("Failed while initializing '"+r+"' pattern.",t)}t.data("pattern-"+r,o)}return o}function c(t,e,n){this.$el=t,this.options=i.extend(!0,{},this.defaults||{},e||{}),this.init(t,e,n),this.emit("init")}var s=l.getLogger("Patternslib Base");return c.prototype={constructor:c,on:function(t,e){this.$el.on(t+"."+this.name+".patterns",e)},emit:function(t,e){void 0===e&&(e=[]),this.$el.trigger(t+"."+this.name+".patterns",e)}},c.extend=function(t){var e,n=this;if(!t)throw new Error("Pattern configuration properties required when calling Base.extend");(e=t.hasOwnProperty("constructor")?t.constructor:function(){n.apply(this,arguments)}).extend=c.extend,e.init=o,e.jquery_plugin=!0,e.trigger=t.trigger;function r(){this.constructor=e}return r.prototype=n.prototype,e.prototype=new r,i.extend(!0,e.prototype,t),e.__super__=n.prototype,t.name?t.trigger?a.register(e,t.name):s.warn("The pattern '"+t.name+"' does not have a trigger attribute, it will not be registered."):s.warn("This pattern without a name attribute will not be registered!"),e},c}),window.jQuery&&define("jquery",[],function(){"use strict";return window.jQuery.ajaxPrefilter(function(t){t.crossDomain&&(t.contents.script=!1)}),window.jQuery}),require(["jquery","pat-registry","pat-base","pat-logger","pat-mockup-parser"],function(i,t){"use strict";window.parent!==window&&"IFRAME"!==window.frameElement.nodeName||i(document).ready(function(){i("body").addClass("pat-plone"),t.initialized||t.init()}),i(document).ready(function(){!0!=("selected"===i("#form-widgets-use_cookie_negotiation > input").value)?i("#formfield-form-widgets-authenticated_users_only").hide():i("#formfield-form-widgets-authenticated_users_only").show()}),i(document).ready(function(){function t(t){var e=i("#form-widgets-highpixeldensity_scales option:selected").attr("value"),n=i('div[data-fieldname="form.widgets.quality_2x"]'),r=i('div[data-fieldname="form.widgets.quality_3x"]');"disabled"==e?(n.fadeOut(),r.fadeOut()):"2x"==e?(n.fadeIn(),r.fadeOut()):"3x"==e&&(n.fadeIn(),r.fadeIn())}i("#ImagingSettings")&&(i('div[data-fieldname="form.widgets.quality_2x"]').hide(),i('div[data-fieldname="form.widgets.quality_3x"]').hide(),t(),i("#form-widgets-highpixeldensity_scales").change(t))})}),define("/home/_thet/data/dev/plone/buildout.coredev/src/plone.staticresources/src/plone/staticresources/static/plone-base.js",function(){});
//# sourceMappingURL=plone-base-compiled.min.js.map
!function(n){"use strict";"function"==typeof define&&define.amd?define("datatables.net",["jquery"],function(t){return n(t,window,document)}):"object"==typeof exports?module.exports=function(t,e){return t=t||window,e=e||("undefined"!=typeof window?require("jquery"):require("jquery")(t)),n(e,t,t.document)}:n(jQuery,window,document)}(function(z,D,y,U){"use strict";function r(t){return!t||!0===t||"-"===t}function h(t){var e=parseInt(t,10);return!isNaN(e)&&isFinite(t)?e:null}function a(t,e){return n[e]||(n[e]=new RegExp(Ct(e),"g")),"string"==typeof t&&"."!==e?t.replace(/\./g,"").replace(n[e],"."):t}function o(t,e,n){var o="string"==typeof t;return!!r(t)||(e&&o&&(t=a(t,e)),n&&o&&(t=t.replace(u,"")),!isNaN(parseFloat(t))&&isFinite(t))}function l(t,e,n){return!!r(t)||(function(t){return r(t)||"string"==typeof t}(t)&&!!o(f(t),e,n)||null)}function m(t,e,n,o){var r=[],a=0,l=e.length;if(o!==U)for(;a<l;a++)t[e[a]][n]&&r.push(t[e[a]][n][o]);else for(;a<l;a++)r.push(t[e[a]][n]);return r}function p(t,e){var n,o=[];e===U?(e=0,n=t):(n=e,e=t);for(var r=e;r<n;r++)o.push(r);return o}function g(t){for(var e=[],n=0,o=t.length;n<o;n++)t[n]&&e.push(t[n]);return e}var b,v,e,t,S=function(C){this.$=function(t,e){return this.api(!0).$(t,e)},this._=function(t,e){return this.api(!0).rows(t,e).data()},this.api=function(t){return new v(t?ae(this[b.iApiIndex]):this)},this.fnAddData=function(t,e){var n=this.api(!0),o=z.isArray(t)&&(z.isArray(t[0])||z.isPlainObject(t[0]))?n.rows.add(t):n.row.add(t);return e!==U&&!e||n.draw(),o.flatten().toArray()},this.fnAdjustColumnSizing=function(t){var e=this.api(!0).columns.adjust(),n=e.settings()[0],o=n.oScroll;t===U||t?e.draw(!1):""===o.sX&&""===o.sY||Mt(n)},this.fnClearTable=function(t){var e=this.api(!0).clear();t!==U&&!t||e.draw()},this.fnClose=function(t){this.api(!0).row(t).child.hide()},this.fnDeleteRow=function(t,e,n){var o=this.api(!0),r=o.rows(t),a=r.settings()[0],l=a.aoData[r[0][0]];return r.remove(),e&&e.call(this,a,l),n!==U&&!n||o.draw(),l},this.fnDestroy=function(t){this.api(!0).destroy(t)},this.fnDraw=function(t){this.api(!0).draw(t)},this.fnFilter=function(t,e,n,o,r,a){var l=this.api(!0);null===e||e===U?l.search(t,n,o,a):l.column(e).search(t,n,o,a),l.draw()},this.fnGetData=function(t,e){var n=this.api(!0);if(t===U)return n.data().toArray();var o=t.nodeName?t.nodeName.toLowerCase():"";return e!==U||"td"==o||"th"==o?n.cell(t,e).data():n.row(t).data()||null},this.fnGetNodes=function(t){var e=this.api(!0);return t!==U?e.row(t).node():e.rows().nodes().flatten().toArray()},this.fnGetPosition=function(t){var e=this.api(!0),n=t.nodeName.toUpperCase();if("TR"==n)return e.row(t).index();if("TD"!=n&&"TH"!=n)return null;var o=e.cell(t).index();return[o.row,o.columnVisible,o.column]},this.fnIsOpen=function(t){return this.api(!0).row(t).child.isShown()},this.fnOpen=function(t,e,n){return this.api(!0).row(t).child(e,n).show().child()[0]},this.fnPageChange=function(t,e){var n=this.api(!0).page(t);e!==U&&!e||n.draw(!1)},this.fnSetColumnVis=function(t,e,n){var o=this.api(!0).column(t).visible(e);n!==U&&!n||o.columns.adjust().draw()},this.fnSettings=function(){return ae(this[b.iApiIndex])},this.fnSort=function(t){this.api(!0).order(t).draw()},this.fnSortListener=function(t,e,n){this.api(!0).order.listener(t,e,n)},this.fnUpdate=function(t,e,n,o,r){var a=this.api(!0);return n===U||null===n?a.row(e).data(t):a.cell(e,n).data(t),r!==U&&!r||a.columns.adjust(),o!==U&&!o||a.draw(),0},this.fnVersionCheck=b.fnVersionCheck;var _=this,T=C===U,F=this.length;for(var t in T&&(C={}),this.oApi=this.internal=b.internal,S.ext.internal)t&&(this[t]=Le(t));return this.each(function(){var a,l=1<F?se({},C,!0):C,i=0,t=this.getAttribute("id"),s=!1,e=S.defaults,d=z(this);if("table"==this.nodeName.toLowerCase()){B(e),k(e.column),A(e,e,!0),A(e.column,e.column,!0),A(e,z.extend(l,d.data()));var n=S.settings;for(i=0,a=n.length;i<a;i++){var o=n[i];if(o.nTable==this||o.nTHead.parentNode==this||o.nTFoot&&o.nTFoot.parentNode==this){var r=l.bRetrieve!==U?l.bRetrieve:e.bRetrieve,c=l.bDestroy!==U?l.bDestroy:e.bDestroy;if(T||r)return o.oInstance;if(c){o.oInstance.fnDestroy();break}return void le(o,0,"Cannot reinitialise DataTable",3)}if(o.sTableId==this.id){n.splice(i,1);break}}null!==t&&""!==t||(t="DataTables_Table_"+S.ext._unique++,this.id=t);var u=z.extend(!0,{},S.models.oSettings,{sDestroyWidth:d[0].style.width,sInstance:t,sTableId:t});u.nTable=this,u.oApi=_.internal,u.oInit=l,n.push(u),u.oInstance=1===_.length?_:d.dataTable(),B(l),l.oLanguage&&R(l.oLanguage),l.aLengthMenu&&!l.iDisplayLength&&(l.iDisplayLength=z.isArray(l.aLengthMenu[0])?l.aLengthMenu[0][0]:l.aLengthMenu[0]),l=se(z.extend(!0,{},e),l),ie(u.oFeatures,l,["bPaginate","bLengthChange","bFilter","bSort","bSortMulti","bInfo","bProcessing","bAutoWidth","bSortClasses","bServerSide","bDeferRender"]),ie(u,l,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"]]),ie(u.oScroll,l,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]),ie(u.oLanguage,l,"fnInfoCallback"),ce(u,"aoDrawCallback",l.fnDrawCallback,"user"),ce(u,"aoServerParams",l.fnServerParams,"user"),ce(u,"aoStateSaveParams",l.fnStateSaveParams,"user"),ce(u,"aoStateLoadParams",l.fnStateLoadParams,"user"),ce(u,"aoStateLoaded",l.fnStateLoaded,"user"),ce(u,"aoRowCallback",l.fnRowCallback,"user"),ce(u,"aoRowCreatedCallback",l.fnCreatedRow,"user"),ce(u,"aoHeaderCallback",l.fnHeaderCallback,"user"),ce(u,"aoFooterCallback",l.fnFooterCallback,"user"),ce(u,"aoInitComplete",l.fnInitComplete,"user"),ce(u,"aoPreDrawCallback",l.fnPreDrawCallback,"user"),u.rowIdFn=Y(l.rowId),N(u);var f=u.oClasses;if(z.extend(f,S.ext.classes,l.oClasses),d.addClass(f.sTable),u.iInitDisplayStart===U&&(u.iInitDisplayStart=l.iDisplayStart,u._iDisplayStart=l.iDisplayStart),null!==l.iDeferLoading){u.bDeferLoading=!0;var h=z.isArray(l.iDeferLoading);u._iRecordsDisplay=h?l.iDeferLoading[0]:l.iDeferLoading,u._iRecordsTotal=h?l.iDeferLoading[1]:l.iDeferLoading}var p=u.oLanguage;z.extend(!0,p,l.oLanguage),p.sUrl&&(z.ajax({dataType:"json",url:p.sUrl,success:function(t){R(t),A(e.oLanguage,t),z.extend(!0,p,t),kt(u)},error:function(){kt(u)}}),s=!0),null===l.asStripeClasses&&(u.asStripeClasses=[f.sStripeOdd,f.sStripeEven]);var m=u.asStripeClasses,g=d.children("tbody").find("tr").eq(0);-1!==z.inArray(!0,z.map(m,function(t,e){return g.hasClass(t)}))&&(z("tbody tr",this).removeClass(m.join(" ")),u.asDestroyStripes=m.slice());var b,y=[],v=this.getElementsByTagName("thead");if(0!==v.length&&(ct(u.aoHeader,v[0]),y=ut(u)),null===l.aoColumns)for(b=[],i=0,a=y.length;i<a;i++)b.push(null);else b=l.aoColumns;for(i=0,a=b.length;i<a;i++)L(u,y?y[i]:null);if(j(u,l.aoColumnDefs,b,function(t,e){H(u,t,e)}),g.length){var x=function(t,e){return null!==t.getAttribute("data-"+e)?e:null};z(g[0]).children("th, td").each(function(t,e){var n=u.aoColumns[t];if(n.mData===t){var o=x(e,"sort")||x(e,"order"),r=x(e,"filter")||x(e,"search");null===o&&null===r||(n.mData={_:t+".display",sort:null!==o?t+".@data-"+o:U,type:null!==o?t+".@data-"+o:U,filter:null!==r?t+".@data-"+r:U},H(u,t))}})}var I=u.oFeatures,w=function(){if(l.aaSorting===U){var t=u.aaSorting;for(i=0,a=t.length;i<a;i++)t[i][1]=u.aoColumns[i].asSorting[0]}ee(u),I.bSort&&ce(u,"aoDrawCallback",function(){if(u.bSorted){var t=Yt(u),n={};z.each(t,function(t,e){n[e.src]=e.dir}),ue(u,null,"order",[u,t,n]),Qt(u)}}),ce(u,"aoDrawCallback",function(){(u.bSorted||"ssp"===pe(u)||I.bDeferRender)&&ee(u)},"sc");var e=d.children("caption").each(function(){this._captionSide=z(this).css("caption-side")}),n=d.children("thead");0===n.length&&(n=z("<thead/>").appendTo(d)),u.nTHead=n[0];var o=d.children("tbody");0===o.length&&(o=z("<tbody/>").appendTo(d)),u.nTBody=o[0];var r=d.children("tfoot");if(0===r.length&&0<e.length&&(""!==u.oScroll.sX||""!==u.oScroll.sY)&&(r=z("<tfoot/>").appendTo(d)),0===r.length||0===r.children().length?d.addClass(f.sNoFooter):0<r.length&&(u.nTFoot=r[0],ct(u.aoFooter,u.nTFoot)),l.aaData)for(i=0;i<l.aaData.length;i++)E(u,l.aaData[i]);else!u.bDeferLoading&&"dom"!=pe(u)||W(u,z(u.nTBody).children("tr"));u.aiDisplay=u.aiDisplayMaster.slice(),!(u.bInitialised=!0)===s&&kt(u)};l.bStateSave?(I.bStateSave=!0,ce(u,"aoDrawCallback",oe,"state_save"),re(u,l,w)):w()}else le(null,0,"Non-table node initialisation ("+this.nodeName+")",2)}),_=null,this},n={},i=/[\r\n]/g,s=/<.*?>/g,d=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,c=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^","-"].join("|\\")+")","g"),u=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,q=function(t,e,n){var o=[],r=0,a=t.length;if(n!==U)for(;r<a;r++)t[r]&&t[r][e]&&o.push(t[r][e][n]);else for(;r<a;r++)t[r]&&o.push(t[r][e]);return o},f=function(t){return t.replace(s,"")},x=function(t){if(function(t){if(t.length<2)return!0;for(var e=t.slice().sort(),n=e[0],o=1,r=e.length;o<r;o++){if(e[o]===n)return!1;n=e[o]}return!0}(t))return t.slice();var e,n,o,r=[],a=t.length,l=0;t:for(n=0;n<a;n++){for(e=t[n],o=0;o<l;o++)if(r[o]===e)continue t;r.push(e),l++}return r};function I(n){var o,r,a={};z.each(n,function(t,e){(o=t.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(o[1]+" ")&&(r=t.replace(o[0],o[2].toLowerCase()),a[r]=t,"o"===o[1]&&I(n[t]))}),n._hungarianMap=a}function A(n,o,r){var a;n._hungarianMap||I(n),z.each(o,function(t,e){(a=n._hungarianMap[t])===U||!r&&o[a]!==U||("o"===a.charAt(0)?(o[a]||(o[a]={}),z.extend(!0,o[a],o[t]),A(n[a],o[a],r)):o[a]=o[t])})}function R(t){var e=S.defaults.oLanguage,n=t.sZeroRecords;!t.sEmptyTable&&n&&"No data available in table"===e.sEmptyTable&&ie(t,t,"sZeroRecords","sEmptyTable"),!t.sLoadingRecords&&n&&"Loading..."===e.sLoadingRecords&&ie(t,t,"sZeroRecords","sLoadingRecords"),t.sInfoThousands&&(t.sThousands=t.sInfoThousands);var o=t.sDecimal;o&&ke(o)}S.util={throttle:function(o,t){var r,a,l=t!==U?t:200;return function(){var t=this,e=+new Date,n=arguments;r&&e<r+l?(clearTimeout(a),a=setTimeout(function(){r=U,o.apply(t,n)},l)):(r=e,o.apply(t,n))}},escapeRegex:function(t){return t.replace(c,"\\$1")}};var w=function(t,e,n){t[e]!==U&&(t[n]=t[e])};function B(t){w(t,"ordering","bSort"),w(t,"orderMulti","bSortMulti"),w(t,"orderClasses","bSortClasses"),w(t,"orderCellsTop","bSortCellsTop"),w(t,"order","aaSorting"),w(t,"orderFixed","aaSortingFixed"),w(t,"paging","bPaginate"),w(t,"pagingType","sPaginationType"),w(t,"pageLength","iDisplayLength"),w(t,"searching","bFilter"),"boolean"==typeof t.sScrollX&&(t.sScrollX=t.sScrollX?"100%":""),"boolean"==typeof t.scrollX&&(t.scrollX=t.scrollX?"100%":"");var e=t.aoSearchCols;if(e)for(var n=0,o=e.length;n<o;n++)e[n]&&A(S.models.oSearch,e[n])}function k(t){w(t,"orderable","bSortable"),w(t,"orderData","aDataSort"),w(t,"orderSequence","asSorting"),w(t,"orderDataType","sortDataType");var e=t.aDataSort;"number"!=typeof e||z.isArray(e)||(t.aDataSort=[e])}function N(t){if(!S.__browser){var e={};S.__browser=e;var n=z("<div/>").css({position:"fixed",top:0,left:-1*z(D).scrollLeft(),height:1,width:1,overflow:"hidden"}).append(z("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(z("<div/>").css({width:"100%",height:10}))).appendTo("body"),o=n.children(),r=o.children();e.barWidth=o[0].offsetWidth-o[0].clientWidth,e.bScrollOversize=100===r[0].offsetWidth&&100!==o[0].clientWidth,e.bScrollbarLeft=1!==Math.round(r.offset().left),e.bBounding=!!n[0].getBoundingClientRect().width,n.remove()}z.extend(t.oBrowser,S.__browser),t.oScroll.iBarWidth=S.__browser.barWidth}function C(t,e,n,o,r,a){var l,i=o,s=!1;for(n!==U&&(l=n,s=!0);i!==r;)t.hasOwnProperty(i)&&(l=s?e(l,t[i],i,t):t[i],s=!0,i+=a);return l}function L(t,e){var n=S.defaults.column,o=t.aoColumns.length,r=z.extend({},S.models.oColumn,n,{nTh:e||y.createElement("th"),sTitle:n.sTitle?n.sTitle:e?e.innerHTML:"",aDataSort:n.aDataSort?n.aDataSort:[o],mData:n.mData?n.mData:o,idx:o});t.aoColumns.push(r);var a=t.aoPreSearchCols;a[o]=z.extend({},S.models.oSearch,a[o]),H(t,o,z(e).data())}function H(t,e,n){var o=t.aoColumns[e],r=t.oClasses,a=z(o.nTh);if(!o.sWidthOrig){o.sWidthOrig=a.attr("width")||null;var l=(a.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);l&&(o.sWidthOrig=l[1])}n!==U&&null!==n&&(k(n),A(S.defaults.column,n),n.mDataProp===U||n.mData||(n.mData=n.mDataProp),n.sType&&(o._sManualType=n.sType),n.className&&!n.sClass&&(n.sClass=n.className),n.sClass&&a.addClass(n.sClass),z.extend(o,n),ie(o,n,"sWidth","sWidthOrig"),n.iDataSort!==U&&(o.aDataSort=[n.iDataSort]),ie(o,n,"aDataSort"));function i(t){return"string"==typeof t&&-1!==t.indexOf("@")}var s=o.mData,d=Y(s),c=o.mRender?Y(o.mRender):null;o._bAttrSrc=z.isPlainObject(s)&&(i(s.sort)||i(s.type)||i(s.filter)),o._setter=null,o.fnGetData=function(t,e,n){var o=d(t,e,U,n);return c&&e?c(o,e,t,n):o},o.fnSetData=function(t,e,n){return K(s)(t,e,n)},"number"!=typeof s&&(t._rowReadObject=!0),t.oFeatures.bSort||(o.bSortable=!1,a.addClass(r.sSortableNone));var u=-1!==z.inArray("asc",o.asSorting),f=-1!==z.inArray("desc",o.asSorting);o.bSortable&&(u||f)?u&&!f?(o.sSortingClass=r.sSortableAsc,o.sSortingClassJUI=r.sSortJUIAscAllowed):!u&&f?(o.sSortingClass=r.sSortableDesc,o.sSortingClassJUI=r.sSortJUIDescAllowed):(o.sSortingClass=r.sSortable,o.sSortingClassJUI=r.sSortJUI):(o.sSortingClass=r.sSortableNone,o.sSortingClassJUI="")}function X(t){if(!1!==t.oFeatures.bAutoWidth){var e=t.aoColumns;qt(t);for(var n=0,o=e.length;n<o;n++)e[n].nTh.style.width=e[n].sWidth}var r=t.oScroll;""===r.sY&&""===r.sX||Mt(t),ue(t,null,"column-sizing",[t])}function V(t,e){var n=P(t,"bVisible");return"number"==typeof n[e]?n[e]:null}function _(t,e){var n=P(t,"bVisible"),o=z.inArray(e,n);return-1!==o?o:null}function O(t){var n=0;return z.each(t.aoColumns,function(t,e){e.bVisible&&"none"!==z(e.nTh).css("display")&&n++}),n}function P(t,n){var o=[];return z.map(t.aoColumns,function(t,e){t[n]&&o.push(e)}),o}function T(t){var e,n,o,r,a,l,i,s,d,c=t.aoColumns,u=t.aoData,f=S.ext.type.detect;for(e=0,n=c.length;e<n;e++)if(d=[],!(i=c[e]).sType&&i._sManualType)i.sType=i._sManualType;else if(!i.sType){for(o=0,r=f.length;o<r;o++){for(a=0,l=u.length;a<l&&(d[a]===U&&(d[a]=F(t,a,e,"type")),(s=f[o](d[a],t))||o===f.length-1)&&"html"!==s;a++);if(s){i.sType=s;break}}i.sType||(i.sType="string")}}function j(t,e,n,o){var r,a,l,i,s,d,c,u=t.aoColumns;if(e)for(r=e.length-1;0<=r;r--){var f=(c=e[r]).targets!==U?c.targets:c.aTargets;for(z.isArray(f)||(f=[f]),l=0,i=f.length;l<i;l++)if("number"==typeof f[l]&&0<=f[l]){for(;u.length<=f[l];)L(t);o(f[l],c)}else if("number"==typeof f[l]&&f[l]<0)o(u.length+f[l],c);else if("string"==typeof f[l])for(s=0,d=u.length;s<d;s++)"_all"!=f[l]&&!z(u[s].nTh).hasClass(f[l])||o(s,c)}if(n)for(r=0,a=n.length;r<a;r++)o(r,n[r])}function E(t,e,n,o){var r=t.aoData.length,a=z.extend(!0,{},S.models.oRow,{src:n?"dom":"data",idx:r});a._aData=e,t.aoData.push(a);for(var l=t.aoColumns,i=0,s=l.length;i<s;i++)l[i].sType=null;t.aiDisplayMaster.push(r);var d=t.rowIdFn(e);return d!==U&&(t.aIds[d]=a),!n&&t.oFeatures.bDeferRender||ot(t,r,n,o),r}function W(n,t){var o;return t instanceof z||(t=z(t)),t.map(function(t,e){return o=nt(n,e),E(n,o.data,e,o.cells)})}function F(t,e,n,o){var r=t.iDraw,a=t.aoColumns[n],l=t.aoData[e]._aData,i=a.sDefaultContent,s=a.fnGetData(l,o,{settings:t,row:e,col:n});if(s===U)return t.iDrawError!=r&&null===i&&(le(t,0,"Requested unknown parameter "+("function"==typeof a.mData?"{function}":"'"+a.mData+"'")+" for row "+e+", column "+n,4),t.iDrawError=r),i;if(s!==l&&null!==s||null===i||o===U){if("function"==typeof s)return s.call(l)}else s=i;return null===s&&"display"==o?"":s}function M(t,e,n,o){var r=t.aoColumns[n],a=t.aoData[e]._aData;r.fnSetData(a,o,{settings:t,row:e,col:n})}var $=/\[.*?\]$/,G=/\(\)$/;function J(t){return z.map(t.match(/(\\.|[^\.])+/g)||[""],function(t){return t.replace(/\\\./g,".")})}function Y(r){if(z.isPlainObject(r)){var a={};return z.each(r,function(t,e){e&&(a[t]=Y(e))}),function(t,e,n,o){var r=a[e]||a._;return r!==U?r(t,e,n,o):t}}if(null===r)return function(t){return t};if("function"==typeof r)return function(t,e,n,o){return r(t,e,n,o)};if("string"!=typeof r||-1===r.indexOf(".")&&-1===r.indexOf("[")&&-1===r.indexOf("("))return function(t,e){return t[r]};var h=function(t,e,n){var o,r,a,l;if(""!==n)for(var i=J(n),s=0,d=i.length;s<d;s++){if(o=i[s].match($),r=i[s].match(G),o){if(i[s]=i[s].replace($,""),""!==i[s]&&(t=t[i[s]]),a=[],i.splice(0,s+1),l=i.join("."),z.isArray(t))for(var c=0,u=t.length;c<u;c++)a.push(h(t[c],e,l));var f=o[0].substring(1,o[0].length-1);t=""===f?a:a.join(f);break}if(r)i[s]=i[s].replace(G,""),t=t[i[s]]();else{if(null===t||t[i[s]]===U)return U;t=t[i[s]]}}return t};return function(t,e){return h(t,e,r)}}function K(o){if(z.isPlainObject(o))return K(o._);if(null===o)return function(){};if("function"==typeof o)return function(t,e,n){o(t,"set",e,n)};if("string"!=typeof o||-1===o.indexOf(".")&&-1===o.indexOf("[")&&-1===o.indexOf("("))return function(t,e){t[o]=e};var p=function(t,e,n){for(var o,r,a,l,i,s=J(n),d=s[s.length-1],c=0,u=s.length-1;c<u;c++){if(r=s[c].match($),a=s[c].match(G),r){if(s[c]=s[c].replace($,""),t[s[c]]=[],(o=s.slice()).splice(0,c+1),i=o.join("."),z.isArray(e))for(var f=0,h=e.length;f<h;f++)p(l={},e[f],i),t[s[c]].push(l);else t[s[c]]=e;return}a&&(s[c]=s[c].replace(G,""),t=t[s[c]](e)),null!==t[s[c]]&&t[s[c]]!==U||(t[s[c]]={}),t=t[s[c]]}d.match(G)?t=t[d.replace(G,"")](e):t[d.replace($,"")]=e};return function(t,e){return p(t,e,o)}}function Q(t){return q(t.aoData,"_aData")}function Z(t){t.aoData.length=0,t.aiDisplayMaster.length=0,t.aiDisplay.length=0,t.aIds={}}function tt(t,e,n){for(var o=-1,r=0,a=t.length;r<a;r++)t[r]==e?o=r:t[r]>e&&t[r]--;-1!=o&&n===U&&t.splice(o,1)}function et(n,o,t,e){function r(t,e){for(;t.childNodes.length;)t.removeChild(t.firstChild);t.innerHTML=F(n,o,e,"display")}var a,l,i=n.aoData[o];if("dom"!==t&&(t&&"auto"!==t||"dom"!==i.src)){var s=i.anCells;if(s)if(e!==U)r(s[e],e);else for(a=0,l=s.length;a<l;a++)r(s[a],a)}else i._aData=nt(n,i,e,e===U?U:i._aData).data;i._aSortData=null,i._aFilterData=null;var d=n.aoColumns;if(e!==U)d[e].sType=null;else{for(a=0,l=d.length;a<l;a++)d[a].sType=null;rt(n,i)}}function nt(t,e,n,r){var o,a,l,i=[],s=e.firstChild,d=0,c=t.aoColumns,u=t._rowReadObject;r=r!==U?r:u?{}:[];function f(t,e){if("string"==typeof t){var n=t.indexOf("@");if(-1!==n){var o=t.substring(n+1);K(t)(r,e.getAttribute(o))}}}function h(t){n!==U&&n!==d||(a=c[d],l=z.trim(t.innerHTML),a&&a._bAttrSrc?(K(a.mData._)(r,l),f(a.mData.sort,t),f(a.mData.type,t),f(a.mData.filter,t)):u?(a._setter||(a._setter=K(a.mData)),a._setter(r,l)):r[d]=l),d++}if(s)for(;s;)"TD"!=(o=s.nodeName.toUpperCase())&&"TH"!=o||(h(s),i.push(s)),s=s.nextSibling;else for(var p=0,m=(i=e.anCells).length;p<m;p++)h(i[p]);var g=e.firstChild?e:e.nTr;if(g){var b=g.getAttribute("id");b&&K(t.rowId)(r,b)}return{data:r,cells:i}}function ot(t,e,n,o){var r,a,l,i,s,d=t.aoData[e],c=d._aData,u=[];if(null===d.nTr){for(r=n||y.createElement("tr"),d.nTr=r,d.anCells=u,r._DT_RowIndex=e,rt(t,d),i=0,s=t.aoColumns.length;i<s;i++)l=t.aoColumns[i],(a=n?o[i]:y.createElement(l.sCellType))._DT_CellIndex={row:e,column:i},u.push(a),n&&!l.mRender&&l.mData===i||z.isPlainObject(l.mData)&&l.mData._===i+".display"||(a.innerHTML=F(t,e,i,"display")),l.sClass&&(a.className+=" "+l.sClass),l.bVisible&&!n?r.appendChild(a):!l.bVisible&&n&&a.parentNode.removeChild(a),l.fnCreatedCell&&l.fnCreatedCell.call(t.oInstance,a,F(t,e,i),c,e,i);ue(t,"aoRowCreatedCallback",null,[r,c,e])}d.nTr.setAttribute("role","row")}function rt(t,e){var n=e.nTr,o=e._aData;if(n){var r=t.rowIdFn(o);if(r&&(n.id=r),o.DT_RowClass){var a=o.DT_RowClass.split(" ");e.__rowc=e.__rowc?x(e.__rowc.concat(a)):a,z(n).removeClass(e.__rowc.join(" ")).addClass(o.DT_RowClass)}o.DT_RowAttr&&z(n).attr(o.DT_RowAttr),o.DT_RowData&&z(n).data(o.DT_RowData)}}function at(t){var e,n,o,r,a,l=t.nTHead,i=t.nTFoot,s=0===z("th, td",l).length,d=t.oClasses,c=t.aoColumns;for(s&&(r=z("<tr/>").appendTo(l)),e=0,n=c.length;e<n;e++)a=c[e],o=z(a.nTh).addClass(a.sClass),s&&o.appendTo(r),t.oFeatures.bSort&&(o.addClass(a.sSortingClass),!1!==a.bSortable&&(o.attr("tabindex",t.iTabIndex).attr("aria-controls",t.sTableId),te(t,a.nTh,e))),a.sTitle!=o[0].innerHTML&&o.html(a.sTitle),he(t,"header")(t,o,a,d);if(s&&ct(t.aoHeader,l),z(l).find(">tr").attr("role","row"),z(l).find(">tr>th, >tr>td").addClass(d.sHeaderTH),z(i).find(">tr>th, >tr>td").addClass(d.sFooterTH),null!==i){var u=t.aoFooter[0];for(e=0,n=u.length;e<n;e++)(a=c[e]).nTf=u[e].cell,a.sClass&&z(a.nTf).addClass(a.sClass)}}function lt(t,e,n){var o,r,a,l,i,s,d,c,u,f=[],h=[],p=t.aoColumns.length;if(e){for(n===U&&(n=!1),o=0,r=e.length;o<r;o++){for(f[o]=e[o].slice(),f[o].nTr=e[o].nTr,a=p-1;0<=a;a--)t.aoColumns[a].bVisible||n||f[o].splice(a,1);h.push([])}for(o=0,r=f.length;o<r;o++){if(d=f[o].nTr)for(;s=d.firstChild;)d.removeChild(s);for(a=0,l=f[o].length;a<l;a++)if(u=c=1,h[o][a]===U){for(d.appendChild(f[o][a].cell),h[o][a]=1;f[o+c]!==U&&f[o][a].cell==f[o+c][a].cell;)h[o+c][a]=1,c++;for(;f[o][a+u]!==U&&f[o][a].cell==f[o][a+u].cell;){for(i=0;i<c;i++)h[o+i][a+u]=1;u++}z(f[o][a].cell).attr("rowspan",c).attr("colspan",u)}}}}function it(t){var e=ue(t,"aoPreDrawCallback","preDraw",[t]);if(-1===z.inArray(!1,e)){var n=[],o=0,r=t.asStripeClasses,a=r.length,l=(t.aoOpenRows.length,t.oLanguage),i=t.iInitDisplayStart,s="ssp"==pe(t),d=t.aiDisplay;t.bDrawing=!0,i!==U&&-1!==i&&(t._iDisplayStart=s?i:i>=t.fnRecordsDisplay()?0:i,t.iInitDisplayStart=-1);var c=t._iDisplayStart,u=t.fnDisplayEnd();if(t.bDeferLoading)t.bDeferLoading=!1,t.iDraw++,Et(t,!1);else if(s){if(!t.bDestroying&&!ht(t))return}else t.iDraw++;if(0!==d.length)for(var f=s?0:c,h=s?t.aoData.length:u,p=f;p<h;p++){var m=d[p],g=t.aoData[m];null===g.nTr&&ot(t,m);var b=g.nTr;if(0!==a){var y=r[o%a];g._sRowStripe!=y&&(z(b).removeClass(g._sRowStripe).addClass(y),g._sRowStripe=y)}ue(t,"aoRowCallback",null,[b,g._aData,o,p]),n.push(b),o++}else{var v=l.sZeroRecords;1==t.iDraw&&"ajax"==pe(t)?v=l.sLoadingRecords:l.sEmptyTable&&0===t.fnRecordsTotal()&&(v=l.sEmptyTable),n[0]=z("<tr/>",{class:a?r[0]:""}).append(z("<td />",{valign:"top",colSpan:O(t),class:t.oClasses.sRowEmpty}).html(v))[0]}ue(t,"aoHeaderCallback","header",[z(t.nTHead).children("tr")[0],Q(t),c,u,d]),ue(t,"aoFooterCallback","footer",[z(t.nTFoot).children("tr")[0],Q(t),c,u,d]);var x=z(t.nTBody);x.children().detach(),x.append(z(n)),ue(t,"aoDrawCallback","draw",[t]),t.bSorted=!1,t.bFiltered=!1,t.bDrawing=!1}else Et(t,!1)}function st(t,e){var n=t.oFeatures,o=n.bSort,r=n.bFilter;o&&Kt(t),r?yt(t,t.oPreviousSearch):t.aiDisplay=t.aiDisplayMaster.slice(),!0!==e&&(t._iDisplayStart=0),t._drawHold=e,it(t),t._drawHold=!1}function dt(t){var e=t.oClasses,n=z(t.nTable),o=z("<div/>").insertBefore(n),r=t.oFeatures,a=z("<div/>",{id:t.sTableId+"_wrapper",class:e.sWrapper+(t.nTFoot?"":" "+e.sNoFooter)});t.nHolding=o[0],t.nTableWrapper=a[0],t.nTableReinsertBefore=t.nTable.nextSibling;for(var l,i,s,d,c,u,f=t.sDom.split(""),h=0;h<f.length;h++){if(l=null,"<"==(i=f[h])){if(s=z("<div/>")[0],"'"==(d=f[h+1])||'"'==d){for(c="",u=2;f[h+u]!=d;)c+=f[h+u],u++;if("H"==c?c=e.sJUIHeader:"F"==c&&(c=e.sJUIFooter),-1!=c.indexOf(".")){var p=c.split(".");s.id=p[0].substr(1,p[0].length-1),s.className=p[1]}else"#"==c.charAt(0)?s.id=c.substr(1,c.length-1):s.className=c;h+=u}a.append(s),a=z(s)}else if(">"==i)a=a.parent();else if("l"==i&&r.bPaginate&&r.bLengthChange)l=Ht(t);else if("f"==i&&r.bFilter)l=bt(t);else if("r"==i&&r.bProcessing)l=jt(t);else if("t"==i)l=Wt(t);else if("i"==i&&r.bInfo)l=At(t);else if("p"==i&&r.bPaginate)l=Ot(t);else if(0!==S.ext.feature.length)for(var m=S.ext.feature,g=0,b=m.length;g<b;g++)if(i==m[g].cFeature){l=m[g].fnInit(t);break}if(l){var y=t.aanFeatures;y[i]||(y[i]=[]),y[i].push(l),a.append(l)}}o.replaceWith(a),t.nHolding=null}function ct(t,e){function n(t,e,n){for(var o=t[e];o[n];)n++;return n}var o,r,a,l,i,s,d,c,u,f,h=z(e).children("tr");for(t.splice(0,t.length),a=0,s=h.length;a<s;a++)t.push([]);for(a=0,s=h.length;a<s;a++)for(0,r=(o=h[a]).firstChild;r;){if("TD"==r.nodeName.toUpperCase()||"TH"==r.nodeName.toUpperCase())for(c=(c=1*r.getAttribute("colspan"))&&0!==c&&1!==c?c:1,u=(u=1*r.getAttribute("rowspan"))&&0!==u&&1!==u?u:1,d=n(t,a,0),f=1===c,i=0;i<c;i++)for(l=0;l<u;l++)t[a+l][d+i]={cell:r,unique:f},t[a+l].nTr=o;r=r.nextSibling}}function ut(t,e,n){var o=[];n||(n=t.aoHeader,e&&ct(n=[],e));for(var r=0,a=n.length;r<a;r++)for(var l=0,i=n[r].length;l<i;l++)!n[r][l].unique||o[l]&&t.bSortCellsTop||(o[l]=n[r][l].cell);return o}function ft(r,t,e){if(ue(r,"aoServerParams","serverParams",[t]),t&&z.isArray(t)){var a={},l=/(.*?)\[\]$/;z.each(t,function(t,e){var n=e.name.match(l);if(n){var o=n[0];a[o]||(a[o]=[]),a[o].push(e.value)}else a[e.name]=e.value}),t=a}function n(t){ue(r,null,"xhr",[r,t,r.jqXHR]),e(t)}var o,i=r.ajax,s=r.oInstance;if(z.isPlainObject(i)&&i.data){o=i.data;var d=z.isFunction(o)?o(t,r):o;t=z.isFunction(o)&&d?d:z.extend(!0,t,d),delete i.data}var c={data:t,success:function(t){var e=t.error||t.sError;e&&le(r,0,e),r.json=t,n(t)},dataType:"json",cache:!1,type:r.sServerMethod,error:function(t,e,n){var o=ue(r,null,"xhr",[r,null,r.jqXHR]);-1===z.inArray(!0,o)&&("parsererror"==e?le(r,0,"Invalid JSON response",1):4===t.readyState&&le(r,0,"Ajax error",7)),Et(r,!1)}};r.oAjaxData=t,ue(r,null,"preXhr",[r,t]),r.fnServerData?r.fnServerData.call(s,r.sAjaxSource,z.map(t,function(t,e){return{name:e,value:t}}),n,r):r.sAjaxSource||"string"==typeof i?r.jqXHR=z.ajax(z.extend(c,{url:i||r.sAjaxSource})):z.isFunction(i)?r.jqXHR=i.call(s,t,n,r):(r.jqXHR=z.ajax(z.extend(c,i)),i.data=o)}function ht(e){return!e.bAjaxDataGet||(e.iDraw++,Et(e,!0),ft(e,pt(e),function(t){mt(e,t)}),!1)}function pt(t){function n(t,e){u.push({name:t,value:e})}var e,o,r,a,l=t.aoColumns,i=l.length,s=t.oFeatures,d=t.oPreviousSearch,c=t.aoPreSearchCols,u=[],f=Yt(t),h=t._iDisplayStart,p=!1!==s.bPaginate?t._iDisplayLength:-1;n("sEcho",t.iDraw),n("iColumns",i),n("sColumns",q(l,"sName").join(",")),n("iDisplayStart",h),n("iDisplayLength",p);var m={draw:t.iDraw,columns:[],order:[],start:h,length:p,search:{value:d.sSearch,regex:d.bRegex}};for(e=0;e<i;e++)r=l[e],a=c[e],o="function"==typeof r.mData?"function":r.mData,m.columns.push({data:o,name:r.sName,searchable:r.bSearchable,orderable:r.bSortable,search:{value:a.sSearch,regex:a.bRegex}}),n("mDataProp_"+e,o),s.bFilter&&(n("sSearch_"+e,a.sSearch),n("bRegex_"+e,a.bRegex),n("bSearchable_"+e,r.bSearchable)),s.bSort&&n("bSortable_"+e,r.bSortable);s.bFilter&&(n("sSearch",d.sSearch),n("bRegex",d.bRegex)),s.bSort&&(z.each(f,function(t,e){m.order.push({column:e.col,dir:e.dir}),n("iSortCol_"+t,e.col),n("sSortDir_"+t,e.dir)}),n("iSortingCols",f.length));var g=S.ext.legacy.ajax;return null===g?t.sAjaxSource?u:m:g?u:m}function mt(t,n){function e(t,e){return n[t]!==U?n[t]:n[e]}var o=gt(t,n),r=e("sEcho","draw"),a=e("iTotalRecords","recordsTotal"),l=e("iTotalDisplayRecords","recordsFiltered");if(r){if(1*r<t.iDraw)return;t.iDraw=1*r}Z(t),t._iRecordsTotal=parseInt(a,10),t._iRecordsDisplay=parseInt(l,10);for(var i=0,s=o.length;i<s;i++)E(t,o[i]);t.aiDisplay=t.aiDisplayMaster.slice(),t.bAjaxDataGet=!1,it(t),t._bInitComplete||Nt(t,n),t.bAjaxDataGet=!0,Et(t,!1)}function gt(t,e){var n=z.isPlainObject(t.ajax)&&t.ajax.dataSrc!==U?t.ajax.dataSrc:t.sAjaxDataProp;return"data"===n?e.aaData||e[n]:""!==n?Y(n)(e):e}function bt(n){var t=n.oClasses,e=n.sTableId,o=n.oLanguage,r=n.oPreviousSearch,a=n.aanFeatures,l='<input type="search" class="'+t.sFilterInput+'"/>',i=o.sSearch;i=i.match(/_INPUT_/)?i.replace("_INPUT_",l):i+l;function s(){a.f;var t=this.value?this.value:"";t!=r.sSearch&&(yt(n,{sSearch:t,bRegex:r.bRegex,bSmart:r.bSmart,bCaseInsensitive:r.bCaseInsensitive}),n._iDisplayStart=0,it(n))}var d=z("<div/>",{id:a.f?null:e+"_filter",class:t.sFilter}).append(z("<label/>").append(i)),c=null!==n.searchDelay?n.searchDelay:"ssp"===pe(n)?400:0,u=z("input",d).val(r.sSearch).attr("placeholder",o.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",c?Xt(s,c):s).on("keypress.DT",function(t){if(13==t.keyCode)return!1}).attr("aria-controls",e);return z(n.nTable).on("search.dt.DT",function(t,e){if(n===e)try{u[0]!==y.activeElement&&u.val(r.sSearch)}catch(t){}}),d[0]}function yt(t,e,n){function o(t){a.sSearch=t.sSearch,a.bRegex=t.bRegex,a.bSmart=t.bSmart,a.bCaseInsensitive=t.bCaseInsensitive}function r(t){return t.bEscapeRegex!==U?!t.bEscapeRegex:t.bRegex}var a=t.oPreviousSearch,l=t.aoPreSearchCols;if(T(t),"ssp"!=pe(t)){It(t,e.sSearch,n,r(e),e.bSmart,e.bCaseInsensitive),o(e);for(var i=0;i<l.length;i++)xt(t,l[i].sSearch,i,r(l[i]),l[i].bSmart,l[i].bCaseInsensitive);vt(t)}else o(e);t.bFiltered=!0,ue(t,null,"search",[t])}function vt(t){for(var e,n,o=S.ext.search,r=t.aiDisplay,a=0,l=o.length;a<l;a++){for(var i=[],s=0,d=r.length;s<d;s++)n=r[s],e=t.aoData[n],o[a](t,e._aFilterData,n,e._aData,s)&&i.push(n);r.length=0,z.merge(r,i)}}function xt(t,e,n,o,r,a){if(""!==e){for(var l,i=[],s=t.aiDisplay,d=wt(e,o,r,a),c=0;c<s.length;c++)l=t.aoData[s[c]]._aFilterData[n],d.test(l)&&i.push(s[c]);t.aiDisplay=i}}function It(t,e,n,o,r,a){var l,i,s,d=wt(e,o,r,a),c=t.oPreviousSearch.sSearch,u=t.aiDisplayMaster,f=[];if(0!==S.ext.search.length&&(n=!0),i=Ft(t),e.length<=0)t.aiDisplay=u.slice();else{for((i||n||c.length>e.length||0!==e.indexOf(c)||t.bSorted)&&(t.aiDisplay=u.slice()),l=t.aiDisplay,s=0;s<l.length;s++)d.test(t.aoData[l[s]]._sFilterRow)&&f.push(l[s]);t.aiDisplay=f}}function wt(t,e,n,o){t=e?t:Ct(t),n&&(t="^(?=.*?"+z.map(t.match(/"[^"]+"|[^ ]+/g)||[""],function(t){if('"'===t.charAt(0)){var e=t.match(/^"(.*)"$/);t=e?e[1]:t}return t.replace('"',"")}).join(")(?=.*?")+").*$");return new RegExp(t,o?"i":"")}var Ct=S.util.escapeRegex,_t=z("<div>")[0],Tt=_t.textContent!==U;function Ft(t){var e,n,o,r,a,l,i,s,d=t.aoColumns,c=S.ext.type.search,u=!1;for(n=0,r=t.aoData.length;n<r;n++)if(!(s=t.aoData[n])._aFilterData){for(l=[],o=0,a=d.length;o<a;o++)(e=d[o]).bSearchable?(i=F(t,n,o,"filter"),c[e.sType]&&(i=c[e.sType](i)),null===i&&(i=""),"string"!=typeof i&&i.toString&&(i=i.toString())):i="",i.indexOf&&-1!==i.indexOf("&")&&(_t.innerHTML=i,i=Tt?_t.textContent:_t.innerText),i.replace&&(i=i.replace(/[\r\n]/g,"")),l.push(i);s._aFilterData=l,s._sFilterRow=l.join("  "),u=!0}return u}function St(t){return{search:t.sSearch,smart:t.bSmart,regex:t.bRegex,caseInsensitive:t.bCaseInsensitive}}function Dt(t){return{sSearch:t.search,bSmart:t.smart,bRegex:t.regex,bCaseInsensitive:t.caseInsensitive}}function At(t){var e=t.sTableId,n=t.aanFeatures.i,o=z("<div/>",{class:t.oClasses.sInfo,id:n?null:e+"_info"});return n||(t.aoDrawCallback.push({fn:Rt,sName:"information"}),o.attr("role","status").attr("aria-live","polite"),z(t.nTable).attr("aria-describedby",e+"_info")),o[0]}function Rt(t){var e=t.aanFeatures.i;if(0!==e.length){var n=t.oLanguage,o=t._iDisplayStart+1,r=t.fnDisplayEnd(),a=t.fnRecordsTotal(),l=t.fnRecordsDisplay(),i=l?n.sInfo:n.sInfoEmpty;l!==a&&(i+=" "+n.sInfoFiltered),i=Bt(t,i+=n.sInfoPostFix);var s=n.fnInfoCallback;null!==s&&(i=s.call(t.oInstance,t,o,r,a,l,i)),z(e).html(i)}}function Bt(t,e){var n=t.fnFormatNumber,o=t._iDisplayStart+1,r=t._iDisplayLength,a=t.fnRecordsDisplay(),l=-1===r;return e.replace(/_START_/g,n.call(t,o)).replace(/_END_/g,n.call(t,t.fnDisplayEnd())).replace(/_MAX_/g,n.call(t,t.fnRecordsTotal())).replace(/_TOTAL_/g,n.call(t,a)).replace(/_PAGE_/g,n.call(t,l?1:Math.ceil(o/r))).replace(/_PAGES_/g,n.call(t,l?1:Math.ceil(a/r)))}function kt(n){var o,t,e,r=n.iInitDisplayStart,a=n.aoColumns,l=n.oFeatures,i=n.bDeferLoading;if(n.bInitialised){for(dt(n),at(n),lt(n,n.aoHeader),lt(n,n.aoFooter),Et(n,!0),l.bAutoWidth&&qt(n),o=0,t=a.length;o<t;o++)(e=a[o]).sWidth&&(e.nTh.style.width=Jt(e.sWidth));ue(n,null,"preInit",[n]),st(n);var s=pe(n);"ssp"==s&&!i||("ajax"==s?ft(n,[],function(t){var e=gt(n,t);for(o=0;o<e.length;o++)E(n,e[o]);n.iInitDisplayStart=r,st(n),Et(n,!1),Nt(n,t)}):(Et(n,!1),Nt(n)))}else setTimeout(function(){kt(n)},200)}function Nt(t,e){t._bInitComplete=!0,(e||t.oInit.aaData)&&X(t),ue(t,null,"plugin-init",[t,e]),ue(t,"aoInitComplete","init",[t,e])}function Lt(t,e){var n=parseInt(e,10);t._iDisplayLength=n,fe(t),ue(t,null,"length",[t,n])}function Ht(o){for(var t=o.oClasses,e=o.sTableId,n=o.aLengthMenu,r=z.isArray(n[0]),a=r?n[0]:n,l=r?n[1]:n,i=z("<select/>",{name:e+"_length","aria-controls":e,class:t.sLengthSelect}),s=0,d=a.length;s<d;s++)i[0][s]=new Option("number"==typeof l[s]?o.fnFormatNumber(l[s]):l[s],a[s]);var c=z("<div><label/></div>").addClass(t.sLength);return o.aanFeatures.l||(c[0].id=e+"_length"),c.children().append(o.oLanguage.sLengthMenu.replace("_MENU_",i[0].outerHTML)),z("select",c).val(o._iDisplayLength).on("change.DT",function(t){Lt(o,z(this).val()),it(o)}),z(o.nTable).on("length.dt.DT",function(t,e,n){o===e&&z("select",c).val(n)}),c[0]}function Ot(t){function c(t){it(t)}var e=t.sPaginationType,u=S.ext.pager[e],f="function"==typeof u,n=z("<div/>").addClass(t.oClasses.sPaging+e)[0],h=t.aanFeatures;return f||u.fnInit(t,n,c),h.p||(n.id=t.sTableId+"_paginate",t.aoDrawCallback.push({fn:function(t){if(f){var e,n,o=t._iDisplayStart,r=t._iDisplayLength,a=t.fnRecordsDisplay(),l=-1===r,i=l?0:Math.ceil(o/r),s=l?1:Math.ceil(a/r),d=u(i,s);for(e=0,n=h.p.length;e<n;e++)he(t,"pageButton")(t,h.p[e],e,d,i,s)}else u.fnUpdate(t,c)},sName:"pagination"})),n}function Pt(t,e,n){var o=t._iDisplayStart,r=t._iDisplayLength,a=t.fnRecordsDisplay();0===a||-1===r?o=0:"number"==typeof e?a<(o=e*r)&&(o=0):"first"==e?o=0:"previous"==e?(o=0<=r?o-r:0)<0&&(o=0):"next"==e?o+r<a&&(o+=r):"last"==e?o=Math.floor((a-1)/r)*r:le(t,0,"Unknown paging action: "+e,5);var l=t._iDisplayStart!==o;return t._iDisplayStart=o,l&&(ue(t,null,"page",[t]),n&&it(t)),l}function jt(t){return z("<div/>",{id:t.aanFeatures.r?null:t.sTableId+"_processing",class:t.oClasses.sProcessing}).html(t.oLanguage.sProcessing).insertBefore(t.nTable)[0]}function Et(t,e){t.oFeatures.bProcessing&&z(t.aanFeatures.r).css("display",e?"block":"none"),ue(t,null,"processing",[t,e])}function Wt(t){var e=z(t.nTable);e.attr("role","grid");var n=t.oScroll;if(""===n.sX&&""===n.sY)return t.nTable;function o(t){return t?Jt(t):null}var r=n.sX,a=n.sY,l=t.oClasses,i=e.children("caption"),s=i.length?i[0]._captionSide:null,d=z(e[0].cloneNode(!1)),c=z(e[0].cloneNode(!1)),u=e.children("tfoot"),f="<div/>";u.length||(u=null);var h=z(f,{class:l.sScrollWrapper}).append(z(f,{class:l.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:r?o(r):"100%"}).append(z(f,{class:l.sScrollHeadInner}).css({"box-sizing":"content-box",width:n.sXInner||"100%"}).append(d.removeAttr("id").css("margin-left",0).append("top"===s?i:null).append(e.children("thead"))))).append(z(f,{class:l.sScrollBody}).css({position:"relative",overflow:"auto",width:o(r)}).append(e));u&&h.append(z(f,{class:l.sScrollFoot}).css({overflow:"hidden",border:0,width:r?o(r):"100%"}).append(z(f,{class:l.sScrollFootInner}).append(c.removeAttr("id").css("margin-left",0).append("bottom"===s?i:null).append(e.children("tfoot")))));var p=h.children(),m=p[0],g=p[1],b=u?p[2]:null;return r&&z(g).on("scroll.DT",function(t){var e=this.scrollLeft;m.scrollLeft=e,u&&(b.scrollLeft=e)}),z(g).css(a&&n.bCollapse?"max-height":"height",a),t.nScrollHead=m,t.nScrollBody=g,t.nScrollFoot=b,t.aoDrawCallback.push({fn:Mt,sName:"scrolling"}),h[0]}function Mt(n){function t(t){var e=t.style;e.paddingTop="0",e.paddingBottom="0",e.borderTopWidth="0",e.borderBottomWidth="0",e.height=0}var e,o,r,a,l,i,s,d,c,u=n.oScroll,f=u.sX,h=u.sXInner,p=u.sY,m=u.iBarWidth,g=z(n.nScrollHead),b=g[0].style,y=g.children("div"),v=y[0].style,x=y.children("table"),I=n.nScrollBody,w=z(I),C=I.style,_=z(n.nScrollFoot).children("div"),T=_.children("table"),F=z(n.nTHead),S=z(n.nTable),D=S[0],A=D.style,R=n.nTFoot?z(n.nTFoot):null,B=n.oBrowser,k=B.bScrollOversize,N=q(n.aoColumns,"nTh"),L=[],H=[],O=[],P=[],j=I.scrollHeight>I.clientHeight;if(n.scrollBarVis!==j&&n.scrollBarVis!==U)return n.scrollBarVis=j,void X(n);n.scrollBarVis=j,S.children("thead, tfoot").remove(),R&&(i=R.clone().prependTo(S),o=R.find("tr"),a=i.find("tr")),l=F.clone().prependTo(S),e=F.find("tr"),r=l.find("tr"),l.find("th, td").removeAttr("tabindex"),f||(C.width="100%",g[0].style.width="100%"),z.each(ut(n,l),function(t,e){s=V(n,t),e.style.width=n.aoColumns[s].sWidth}),R&&zt(function(t){t.style.width=""},a),c=S.outerWidth(),""===f?(A.width="100%",k&&(S.find("tbody").height()>I.offsetHeight||"scroll"==w.css("overflow-y"))&&(A.width=Jt(S.outerWidth()-m)),c=S.outerWidth()):""!==h&&(A.width=Jt(h),c=S.outerWidth()),zt(t,r),zt(function(t){O.push(t.innerHTML),L.push(Jt(z(t).css("width")))},r),zt(function(t,e){-1!==z.inArray(t,N)&&(t.style.width=L[e])},e),z(r).height(0),R&&(zt(t,a),zt(function(t){P.push(t.innerHTML),H.push(Jt(z(t).css("width")))},a),zt(function(t,e){t.style.width=H[e]},o),z(a).height(0)),zt(function(t,e){t.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+O[e]+"</div>",t.style.width=L[e]},r),R&&zt(function(t,e){t.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+P[e]+"</div>",t.style.width=H[e]},a),S.outerWidth()<c?(d=I.scrollHeight>I.offsetHeight||"scroll"==w.css("overflow-y")?c+m:c,k&&(I.scrollHeight>I.offsetHeight||"scroll"==w.css("overflow-y"))&&(A.width=Jt(d-m)),""!==f&&""===h||le(n,1,"Possible column misalignment",6)):d="100%",C.width=Jt(d),b.width=Jt(d),R&&(n.nScrollFoot.style.width=Jt(d)),p||k&&(C.height=Jt(D.offsetHeight+m));var E=S.outerWidth();x[0].style.width=Jt(E),v.width=Jt(E);var W=S.height()>I.clientHeight||"scroll"==w.css("overflow-y"),M="padding"+(B.bScrollbarLeft?"Left":"Right");v[M]=W?m+"px":"0px",R&&(T[0].style.width=Jt(E),_[0].style.width=Jt(E),_[0].style[M]=W?m+"px":"0px"),S.children("colgroup").insertBefore(S.children("thead")),w.scroll(),!n.bSorted&&!n.bFiltered||n._drawHold||(I.scrollTop=0)}function zt(t,e,n){for(var o,r,a=0,l=0,i=e.length;l<i;){for(o=e[l].firstChild,r=n?n[l].firstChild:null;o;)1===o.nodeType&&(n?t(o,r,a):t(o,a),a++),o=o.nextSibling,r=n?r.nextSibling:null;l++}}var Ut=/<.*?>/g;function qt(t){var e,n,o,r=t.nTable,a=t.aoColumns,l=t.oScroll,i=l.sY,s=l.sX,d=l.sXInner,c=a.length,u=P(t,"bVisible"),f=z("th",t.nTHead),h=r.getAttribute("width"),p=r.parentNode,m=!1,g=t.oBrowser,b=g.bScrollOversize,y=r.style.width;for(y&&-1!==y.indexOf("%")&&(h=y),e=0;e<u.length;e++)null!==(n=a[u[e]]).sWidth&&(n.sWidth=Vt(n.sWidthOrig,p),m=!0);if(b||!m&&!s&&!i&&c==O(t)&&c==f.length)for(e=0;e<c;e++){var v=V(t,e);null!==v&&(a[v].sWidth=Jt(f.eq(e).width()))}else{var x=z(r).clone().css("visibility","hidden").removeAttr("id");x.find("tbody tr").remove();var I=z("<tr/>").appendTo(x.find("tbody"));for(x.find("thead, tfoot").remove(),x.append(z(t.nTHead).clone()).append(z(t.nTFoot).clone()),x.find("tfoot th, tfoot td").css("width",""),f=ut(t,x.find("thead")[0]),e=0;e<u.length;e++)n=a[u[e]],f[e].style.width=null!==n.sWidthOrig&&""!==n.sWidthOrig?Jt(n.sWidthOrig):"",n.sWidthOrig&&s&&z(f[e]).append(z("<div/>").css({width:n.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(t.aoData.length)for(e=0;e<u.length;e++)n=a[o=u[e]],z($t(t,o)).clone(!1).append(n.sContentPadding).appendTo(I);z("[name]",x).removeAttr("name");var w=z("<div/>").css(s||i?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(x).appendTo(p);s&&d?x.width(d):s?(x.css("width","auto"),x.removeAttr("width"),x.width()<p.clientWidth&&h&&x.width(p.clientWidth)):i?x.width(p.clientWidth):h&&x.width(h);var C=0;for(e=0;e<u.length;e++){var _=z(f[e]),T=_.outerWidth()-_.width(),F=g.bBounding?Math.ceil(f[e].getBoundingClientRect().width):_.outerWidth();C+=F,a[u[e]].sWidth=Jt(F-T)}r.style.width=Jt(C),w.remove()}if(h&&(r.style.width=Jt(h)),(h||s)&&!t._reszEvt){var S=function(){z(D).on("resize.DT-"+t.sInstance,Xt(function(){X(t)}))};b?setTimeout(S,1e3):S(),t._reszEvt=!0}}var Xt=S.util.throttle;function Vt(t,e){if(!t)return 0;var n=z("<div/>").css("width",Jt(t)).appendTo(e||y.body),o=n[0].offsetWidth;return n.remove(),o}function $t(t,e){var n=Gt(t,e);if(n<0)return null;var o=t.aoData[n];return o.nTr?o.anCells[e]:z("<td/>").html(F(t,n,e,"display"))[0]}function Gt(t,e){for(var n,o=-1,r=-1,a=0,l=t.aoData.length;a<l;a++)(n=(n=(n=F(t,a,e,"display")+"").replace(Ut,"")).replace(/&nbsp;/g," ")).length>o&&(o=n.length,r=a);return r}function Jt(t){return null===t?"0px":"number"==typeof t?t<0?"0px":t+"px":t.match(/\d$/)?t+"px":t}function Yt(t){function e(t){t.length&&!z.isArray(t[0])?h.push(t):z.merge(h,t)}var n,o,r,a,l,i,s,d=[],c=t.aoColumns,u=t.aaSortingFixed,f=z.isPlainObject(u),h=[];for(z.isArray(u)&&e(u),f&&u.pre&&e(u.pre),e(t.aaSorting),f&&u.post&&e(u.post),n=0;n<h.length;n++)for(o=0,r=(a=c[s=h[n][0]].aDataSort).length;o<r;o++)i=c[l=a[o]].sType||"string",h[n]._idx===U&&(h[n]._idx=z.inArray(h[n][1],c[l].asSorting)),d.push({src:s,col:l,dir:h[n][1],index:h[n]._idx,type:i,formatter:S.ext.type.order[i+"-pre"]});return d}function Kt(t){var e,n,o,r,c,u=[],f=S.ext.type.order,h=t.aoData,a=(t.aoColumns,0),l=t.aiDisplayMaster;for(T(t),e=0,n=(c=Yt(t)).length;e<n;e++)(r=c[e]).formatter&&a++,ne(t,r.col);if("ssp"!=pe(t)&&0!==c.length){for(e=0,o=l.length;e<o;e++)u[l[e]]=e;a===c.length?l.sort(function(t,e){var n,o,r,a,l,i=c.length,s=h[t]._aSortData,d=h[e]._aSortData;for(r=0;r<i;r++)if(0!=(a=(n=s[(l=c[r]).col])<(o=d[l.col])?-1:o<n?1:0))return"asc"===l.dir?a:-a;return(n=u[t])<(o=u[e])?-1:o<n?1:0}):l.sort(function(t,e){var n,o,r,a,l,i=c.length,s=h[t]._aSortData,d=h[e]._aSortData;for(r=0;r<i;r++)if(n=s[(l=c[r]).col],o=d[l.col],0!==(a=(f[l.type+"-"+l.dir]||f["string-"+l.dir])(n,o)))return a;return(n=u[t])<(o=u[e])?-1:o<n?1:0})}t.bSorted=!0}function Qt(t){for(var e,n=t.aoColumns,o=Yt(t),r=t.oLanguage.oAria,a=0,l=n.length;a<l;a++){var i=n[a],s=i.asSorting,d=i.sTitle.replace(/<.*?>/g,""),c=i.nTh;c.removeAttribute("aria-sort"),e=i.bSortable?d+("asc"===(0<o.length&&o[0].col==a?(c.setAttribute("aria-sort","asc"==o[0].dir?"ascending":"descending"),s[o[0].index+1]||s[0]):s[0])?r.sSortAscending:r.sSortDescending):d,c.setAttribute("aria-label",e)}}function Zt(t,e,n,o){function r(t,e){var n=t._idx;return n===U&&(n=z.inArray(t[1],s)),n+1<s.length?n+1:e?null:0}var a,l=t.aoColumns[e],i=t.aaSorting,s=l.asSorting;if("number"==typeof i[0]&&(i=t.aaSorting=[i]),n&&t.oFeatures.bSortMulti){var d=z.inArray(e,q(i,"0"));-1!==d?(null===(a=r(i[d],!0))&&1===i.length&&(a=0),null===a?i.splice(d,1):(i[d][1]=s[a],i[d]._idx=a)):(i.push([e,s[0],0]),i[i.length-1]._idx=0)}else i.length&&i[0][0]==e?(a=r(i[0]),i.length=1,i[0][1]=s[a],i[0]._idx=a):(i.length=0,i.push([e,s[0]]),i[0]._idx=0);st(t),"function"==typeof o&&o(t)}function te(e,t,n,o){var r=e.aoColumns[n];de(t,{},function(t){!1!==r.bSortable&&(e.oFeatures.bProcessing?(Et(e,!0),setTimeout(function(){Zt(e,n,t.shiftKey,o),"ssp"!==pe(e)&&Et(e,!1)},0)):Zt(e,n,t.shiftKey,o))})}function ee(t){var e,n,o,r=t.aLastSort,a=t.oClasses.sSortColumn,l=Yt(t),i=t.oFeatures;if(i.bSort&&i.bSortClasses){for(e=0,n=r.length;e<n;e++)o=r[e].src,z(q(t.aoData,"anCells",o)).removeClass(a+(e<2?e+1:3));for(e=0,n=l.length;e<n;e++)o=l[e].src,z(q(t.aoData,"anCells",o)).addClass(a+(e<2?e+1:3))}t.aLastSort=l}function ne(t,e){var n,o,r,a=t.aoColumns[e],l=S.ext.order[a.sSortDataType];l&&(n=l.call(t.oInstance,t,e,_(t,e)));for(var i=S.ext.type.order[a.sType+"-pre"],s=0,d=t.aoData.length;s<d;s++)(o=t.aoData[s])._aSortData||(o._aSortData=[]),o._aSortData[e]&&!l||(r=l?n[s]:F(t,s,e,"sort"),o._aSortData[e]=i?i(r):r)}function oe(n){if(n.oFeatures.bStateSave&&!n.bDestroying){var t={time:+new Date,start:n._iDisplayStart,length:n._iDisplayLength,order:z.extend(!0,[],n.aaSorting),search:St(n.oPreviousSearch),columns:z.map(n.aoColumns,function(t,e){return{visible:t.bVisible,search:St(n.aoPreSearchCols[e])}})};ue(n,"aoStateSaveParams","stateSaveParams",[n,t]),n.oSavedState=t,n.fnStateSaveCallback.call(n.oInstance,n,t)}}function re(r,t,a){function e(t){if(t&&t.time){var e=ue(r,"aoStateLoadParams","stateLoadParams",[r,t]);if(-1===z.inArray(!1,e)){var n=r.iStateDuration;if(0<n&&t.time<+new Date-1e3*n)a();else if(t.columns&&s.length!==t.columns.length)a();else{if(r.oLoadedState=z.extend(!0,{},t),t.start!==U&&(r._iDisplayStart=t.start,r.iInitDisplayStart=t.start),t.length!==U&&(r._iDisplayLength=t.length),t.order!==U&&(r.aaSorting=[],z.each(t.order,function(t,e){r.aaSorting.push(e[0]>=s.length?[0,e[1]]:e)})),t.search!==U&&z.extend(r.oPreviousSearch,Dt(t.search)),t.columns)for(l=0,i=t.columns.length;l<i;l++){var o=t.columns[l];o.visible!==U&&(s[l].bVisible=o.visible),o.search!==U&&z.extend(r.aoPreSearchCols[l],Dt(o.search))}ue(r,"aoStateLoaded","stateLoaded",[r,t]),a()}}else a()}else a()}var l,i,s=r.aoColumns;if(r.oFeatures.bStateSave){var n=r.fnStateLoadCallback.call(r.oInstance,r,e);n!==U&&e(n)}else a()}function ae(t){var e=S.settings,n=z.inArray(t,q(e,"nTable"));return-1!==n?e[n]:null}function le(t,e,n,o){if(n="DataTables warning: "+(t?"table id="+t.sTableId+" - ":"")+n,o&&(n+=". For more information about this error, please see http://datatables.net/tn/"+o),e)D.console&&console.log&&console.log(n);else{var r=S.ext,a=r.sErrMode||r.errMode;if(t&&ue(t,null,"error",[t,o,n]),"alert"==a)alert(n);else{if("throw"==a)throw new Error(n);"function"==typeof a&&a(t,o,n)}}}function ie(n,o,t,e){z.isArray(t)?z.each(t,function(t,e){z.isArray(e)?ie(n,o,e[0],e[1]):ie(n,o,e)}):(e===U&&(e=t),o[t]!==U&&(n[e]=o[t]))}function se(t,e,n){var o;for(var r in e)e.hasOwnProperty(r)&&(o=e[r],z.isPlainObject(o)?(z.isPlainObject(t[r])||(t[r]={}),z.extend(!0,t[r],o)):n&&"data"!==r&&"aaData"!==r&&z.isArray(o)?t[r]=o.slice():t[r]=o);return t}function de(e,t,n){z(e).on("click.DT",t,function(t){e.blur(),n(t)}).on("keypress.DT",t,function(t){13===t.which&&(t.preventDefault(),n(t))}).on("selectstart.DT",function(){return!1})}function ce(t,e,n,o){n&&t[e].push({fn:n,sName:o})}function ue(n,t,e,o){var r=[];if(t&&(r=z.map(n[t].slice().reverse(),function(t,e){return t.fn.apply(n.oInstance,o)})),null!==e){var a=z.Event(e+".dt");z(n.nTable).trigger(a,o),r.push(a.result)}return r}function fe(t){var e=t._iDisplayStart,n=t.fnDisplayEnd(),o=t._iDisplayLength;n<=e&&(e=n-o),e-=e%o,(-1===o||e<0)&&(e=0),t._iDisplayStart=e}function he(t,e){var n=t.renderer,o=S.ext.renderer[e];return z.isPlainObject(n)&&n[e]?o[n[e]]||o._:"string"==typeof n&&o[n]||o._}function pe(t){return t.oFeatures.bServerSide?"ssp":t.ajax||t.sAjaxSource?"ajax":"dom"}var me=[],ge=Array.prototype;v=function(t,e){if(!(this instanceof v))return new v(t,e);function n(t){var e=function(t){var e,n,o=S.settings,r=z.map(o,function(t,e){return t.nTable});return t?t.nTable&&t.oApi?[t]:t.nodeName&&"table"===t.nodeName.toLowerCase()?-1!==(e=z.inArray(t,r))?[o[e]]:null:t&&"function"==typeof t.settings?t.settings().toArray():("string"==typeof t?n=z(t):t instanceof z&&(n=t),n?n.map(function(t){return-1!==(e=z.inArray(this,r))?o[e]:null}).toArray():void 0):[]}(t);e&&(o=o.concat(e))}var o=[];if(z.isArray(t))for(var r=0,a=t.length;r<a;r++)n(t[r]);else n(t);this.context=x(o),e&&z.merge(this,e),this.selector={rows:null,cols:null,opts:null},v.extend(this,this,me)},S.Api=v,z.extend(v.prototype,{any:function(){return 0!==this.count()},concat:ge.concat,context:[],count:function(){return this.flatten().length},each:function(t){for(var e=0,n=this.length;e<n;e++)t.call(this,this[e],e,this);return this},eq:function(t){var e=this.context;return e.length>t?new v(e[t],this[t]):null},filter:function(t){var e=[];if(ge.filter)e=ge.filter.call(this,t,this);else for(var n=0,o=this.length;n<o;n++)t.call(this,this[n],n,this)&&e.push(this[n]);return new v(this.context,e)},flatten:function(){var t=[];return new v(this.context,t.concat.apply(t,this.toArray()))},join:ge.join,indexOf:ge.indexOf||function(t,e){for(var n=e||0,o=this.length;n<o;n++)if(this[n]===t)return n;return-1},iterator:function(t,e,n,o){var r,a,l,i,s,d,c,u,f=[],h=this.context,p=this.selector;for("string"==typeof t&&(o=n,n=e,e=t,t=!1),a=0,l=h.length;a<l;a++){var m=new v(h[a]);if("table"===e)(r=n.call(m,h[a],a))!==U&&f.push(r);else if("columns"===e||"rows"===e)(r=n.call(m,h[a],this[a],a))!==U&&f.push(r);else if("column"===e||"column-rows"===e||"row"===e||"cell"===e)for(c=this[a],"column-rows"===e&&(d=Ie(h[a],p.opts)),i=0,s=c.length;i<s;i++)u=c[i],(r="cell"===e?n.call(m,h[a],u.row,u.column,a,i):n.call(m,h[a],u,a,i,d))!==U&&f.push(r)}if(f.length||o){var g=new v(h,t?f.concat.apply([],f):f),b=g.selector;return b.rows=p.rows,b.cols=p.cols,b.opts=p.opts,g}return this},lastIndexOf:ge.lastIndexOf||function(t,e){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(t){var e=[];if(ge.map)e=ge.map.call(this,t,this);else for(var n=0,o=this.length;n<o;n++)e.push(t.call(this,this[n],n));return new v(this.context,e)},pluck:function(e){return this.map(function(t){return t[e]})},pop:ge.pop,push:ge.push,reduce:ge.reduce||function(t,e){return C(this,t,e,0,this.length,1)},reduceRight:ge.reduceRight||function(t,e){return C(this,t,e,this.length-1,-1,-1)},reverse:ge.reverse,selector:null,shift:ge.shift,slice:function(){return new v(this.context,this)},sort:ge.sort,splice:ge.splice,toArray:function(){return ge.slice.call(this)},to$:function(){return z(this)},toJQuery:function(){return z(this)},unique:function(){return new v(this.context,x(this))},unshift:ge.unshift}),v.extend=function(t,e,n){if(n.length&&e&&(e instanceof v||e.__dt_wrapper)){var o,r,a,l=function(e,n,o){return function(){var t=n.apply(e,arguments);return v.extend(t,t,o.methodExt),t}};for(o=0,r=n.length;o<r;o++)e[(a=n[o]).name]="function"==typeof a.val?l(t,a.val,a):z.isPlainObject(a.val)?{}:a.val,e[a.name].__dt_wrapper=!0,v.extend(t,e[a.name],a.propExt)}},v.register=e=function(t,e){if(z.isArray(t))for(var n=0,o=t.length;n<o;n++)v.register(t[n],e);else{var r,a,l,i,s=t.split("."),d=me,c=function(t,e){for(var n=0,o=t.length;n<o;n++)if(t[n].name===e)return t[n];return null};for(r=0,a=s.length;r<a;r++){var u=c(d,l=(i=-1!==s[r].indexOf("()"))?s[r].replace("()",""):s[r]);u||(u={name:l,val:{},methodExt:[],propExt:[]},d.push(u)),r===a-1?u.val=e:d=i?u.methodExt:u.propExt}}},v.registerPlural=t=function(t,e,n){v.register(t,n),v.register(e,function(){var t=n.apply(this,arguments);return t===this?this:t instanceof v?t.length?z.isArray(t[0])?new v(t.context,t[0]):t[0]:U:t})};e("tables()",function(t){return t?new v(function(t,n){if("number"==typeof t)return[n[t]];var o=z.map(n,function(t,e){return t.nTable});return z(o).filter(t).map(function(t){var e=z.inArray(this,o);return n[e]}).toArray()}(t,this.context)):this}),e("table()",function(t){var e=this.tables(t),n=e.context;return n.length?new v(n[0]):e}),t("tables().nodes()","table().node()",function(){return this.iterator("table",function(t){return t.nTable},1)}),t("tables().body()","table().body()",function(){return this.iterator("table",function(t){return t.nTBody},1)}),t("tables().header()","table().header()",function(){return this.iterator("table",function(t){return t.nTHead},1)}),t("tables().footer()","table().footer()",function(){return this.iterator("table",function(t){return t.nTFoot},1)}),t("tables().containers()","table().container()",function(){return this.iterator("table",function(t){return t.nTableWrapper},1)}),e("draw()",function(e){return this.iterator("table",function(t){"page"===e?it(t):("string"==typeof e&&(e="full-hold"!==e),st(t,!1===e))})}),e("page()",function(e){return e===U?this.page.info().page:this.iterator("table",function(t){Pt(t,e)})}),e("page.info()",function(t){if(0===this.context.length)return U;var e=this.context[0],n=e._iDisplayStart,o=e.oFeatures.bPaginate?e._iDisplayLength:-1,r=e.fnRecordsDisplay(),a=-1===o;return{page:a?0:Math.floor(n/o),pages:a?1:Math.ceil(r/o),start:n,end:e.fnDisplayEnd(),length:o,recordsTotal:e.fnRecordsTotal(),recordsDisplay:r,serverSide:"ssp"===pe(e)}}),e("page.len()",function(e){return e===U?0!==this.context.length?this.context[0]._iDisplayLength:U:this.iterator("table",function(t){Lt(t,e)})});function be(r,a,t){if(t){var e=new v(r);e.one("draw",function(){t(e.ajax.json())})}if("ssp"==pe(r))st(r,a);else{Et(r,!0);var n=r.jqXHR;n&&4!==n.readyState&&n.abort(),ft(r,[],function(t){Z(r);for(var e=gt(r,t),n=0,o=e.length;n<o;n++)E(r,e[n]);st(r,a),Et(r,!1)})}}e("ajax.json()",function(){var t=this.context;if(0<t.length)return t[0].json}),e("ajax.params()",function(){var t=this.context;if(0<t.length)return t[0].oAjaxData}),e("ajax.reload()",function(e,n){return this.iterator("table",function(t){be(t,!1===n,e)})}),e("ajax.url()",function(e){var t=this.context;return e===U?0===t.length?U:(t=t[0]).ajax?z.isPlainObject(t.ajax)?t.ajax.url:t.ajax:t.sAjaxSource:this.iterator("table",function(t){z.isPlainObject(t.ajax)?t.ajax.url=e:t.ajax=e})}),e("ajax.url().load()",function(e,n){return this.iterator("table",function(t){be(t,!1===n,e)})});function ye(t,e,n,o,r){var a,l,i,s,d,c,u=[],f=typeof e;for(e&&"string"!=f&&"function"!=f&&e.length!==U||(e=[e]),i=0,s=e.length;i<s;i++)for(d=0,c=(l=e[i]&&e[i].split&&!e[i].match(/[\[\(:]/)?e[i].split(","):[e[i]]).length;d<c;d++)(a=n("string"==typeof l[d]?z.trim(l[d]):l[d]))&&a.length&&(u=u.concat(a));var h=b.selector[t];if(h.length)for(i=0,s=h.length;i<s;i++)u=h[i](o,r,u);return x(u)}function ve(t){return(t=t||{}).filter&&t.search===U&&(t.search=t.filter),z.extend({search:"none",order:"current",page:"all"},t)}function xe(t){for(var e=0,n=t.length;e<n;e++)if(0<t[e].length)return t[0]=t[e],t[0].length=1,t.length=1,t.context=[t.context[e]],t;return t.length=0,t}var Ie=function(t,e){var n,o,r,a=[],l=t.aiDisplay,i=t.aiDisplayMaster,s=e.search,d=e.order,c=e.page;if("ssp"==pe(t))return"removed"===s?[]:p(0,i.length);if("current"==c)for(n=t._iDisplayStart,o=t.fnDisplayEnd();n<o;n++)a.push(l[n]);else if("current"==d||"applied"==d)a="none"==s?i.slice():"applied"==s?l.slice():z.map(i,function(t,e){return-1===z.inArray(t,l)?t:null});else if("index"==d||"original"==d)for(n=0,o=t.aoData.length;n<o;n++)"none"==s?a.push(n):(-1===(r=z.inArray(n,l))&&"removed"==s||0<=r&&"applied"==s)&&a.push(n);return a};e("rows()",function(e,n){e===U?e="":z.isPlainObject(e)&&(n=e,e=""),n=ve(n);var t=this.iterator("table",function(t){return function(a,t,l){var i;return ye("row",t,function(n){var t=h(n);if(null!==t&&!l)return[t];if(i=i||Ie(a,l),null!==t&&-1!==z.inArray(t,i))return[t];if(null===n||n===U||""===n)return i;if("function"==typeof n)return z.map(i,function(t){var e=a.aoData[t];return n(t,e._aData,e.nTr)?t:null});var e=g(m(a.aoData,i,"nTr"));if(n.nodeName){if(n._DT_RowIndex!==U)return[n._DT_RowIndex];if(n._DT_CellIndex)return[n._DT_CellIndex.row];var o=z(n).closest("*[data-dt-row]");return o.length?[o.data("dt-row")]:[]}if("string"==typeof n&&"#"===n.charAt(0)){var r=a.aIds[n.replace(/^#/,"")];if(r!==U)return[r.idx]}return z(e).filter(n).map(function(){return this._DT_RowIndex}).toArray()},a,l)}(t,e,n)},1);return t.selector.rows=e,t.selector.opts=n,t}),e("rows().nodes()",function(){return this.iterator("row",function(t,e){return t.aoData[e].nTr||U},1)}),e("rows().data()",function(){return this.iterator(!0,"rows",function(t,e){return m(t.aoData,e,"_aData")},1)}),t("rows().cache()","row().cache()",function(o){return this.iterator("row",function(t,e){var n=t.aoData[e];return"search"===o?n._aFilterData:n._aSortData},1)}),t("rows().invalidate()","row().invalidate()",function(n){return this.iterator("row",function(t,e){et(t,e,n)})}),t("rows().indexes()","row().index()",function(){return this.iterator("row",function(t,e){return e},1)}),t("rows().ids()","row().id()",function(t){for(var e=[],n=this.context,o=0,r=n.length;o<r;o++)for(var a=0,l=this[o].length;a<l;a++){var i=n[o].rowIdFn(n[o].aoData[this[o][a]]._aData);e.push((!0===t?"#":"")+i)}return new v(n,e)}),t("rows().remove()","row().remove()",function(){var f=this;return this.iterator("row",function(t,e,n){var o,r,a,l,i,s,d=t.aoData,c=d[e];for(d.splice(e,1),o=0,r=d.length;o<r;o++)if(s=(i=d[o]).anCells,null!==i.nTr&&(i.nTr._DT_RowIndex=o),null!==s)for(a=0,l=s.length;a<l;a++)s[a]._DT_CellIndex.row=o;tt(t.aiDisplayMaster,e),tt(t.aiDisplay,e),tt(f[n],e,!1),0<t._iRecordsDisplay&&t._iRecordsDisplay--,fe(t);var u=t.rowIdFn(c._aData);u!==U&&delete t.aIds[u]}),this.iterator("table",function(t){for(var e=0,n=t.aoData.length;e<n;e++)t.aoData[e].idx=e}),this}),e("rows.add()",function(a){var t=this.iterator("table",function(t){var e,n,o,r=[];for(n=0,o=a.length;n<o;n++)(e=a[n]).nodeName&&"TR"===e.nodeName.toUpperCase()?r.push(W(t,e)[0]):r.push(E(t,e));return r},1),e=this.rows(-1);return e.pop(),z.merge(e,t),e}),e("row()",function(t,e){return xe(this.rows(t,e))}),e("row().data()",function(t){var e=this.context;return t===U?e.length&&this.length?e[0].aoData[this[0]]._aData:U:(e[0].aoData[this[0]]._aData=t,et(e[0],this[0],"data"),this)}),e("row().node()",function(){var t=this.context;return t.length&&this.length&&t[0].aoData[this[0]].nTr||null}),e("row.add()",function(e){e instanceof z&&e.length&&(e=e[0]);var t=this.iterator("table",function(t){return e.nodeName&&"TR"===e.nodeName.toUpperCase()?W(t,e)[0]:E(t,e)});return this.row(t[0])});function we(t,e){var n=t.context;if(n.length){var o=n[0].aoData[e!==U?e:t[0]];o&&o._details&&(o._details.remove(),o._detailsShow=U,o._details=U)}}function Ce(t,e){var n=t.context;if(n.length&&t.length){var o=n[0].aoData[t[0]];o._details&&((o._detailsShow=e)?o._details.insertAfter(o.nTr):o._details.detach(),_e(n[0]))}}var _e=function(s){var r=new v(s),t=".dt.DT_details",e="draw"+t,n="column-visibility"+t,o="destroy"+t,d=s.aoData;r.off(e+" "+n+" "+o),0<q(d,"_details").length&&(r.on(e,function(t,e){s===e&&r.rows({page:"current"}).eq(0).each(function(t){var e=d[t];e._detailsShow&&e._details.insertAfter(e.nTr)})}),r.on(n,function(t,e,n,o){if(s===e)for(var r,a=O(e),l=0,i=d.length;l<i;l++)(r=d[l])._details&&r._details.children("td[colspan]").attr("colspan",a)}),r.on(o,function(t,e){if(s===e)for(var n=0,o=d.length;n<o;n++)d[n]._details&&we(r,n)}))},Te="row().child",Fe=Te+"()";e(Fe,function(t,e){var n=this.context;return t===U?n.length&&this.length?n[0].aoData[this[0]]._details:U:(!0===t?this.child.show():!1===t?we(this):n.length&&this.length&&function(a,t,e,n){var l=[],i=function(t,e){if(z.isArray(t)||t instanceof z)for(var n=0,o=t.length;n<o;n++)i(t[n],e);else if(t.nodeName&&"tr"===t.nodeName.toLowerCase())l.push(t);else{var r=z("<tr><td/></tr>").addClass(e);z("td",r).addClass(e).html(t)[0].colSpan=O(a),l.push(r[0])}};i(e,n),t._details&&t._details.detach(),t._details=z(l),t._detailsShow&&t._details.insertAfter(t.nTr)}(n[0],n[0].aoData[this[0]],t,e),this)}),e([Te+".show()",Fe+".show()"],function(t){return Ce(this,!0),this}),e([Te+".hide()",Fe+".hide()"],function(){return Ce(this,!1),this}),e([Te+".remove()",Fe+".remove()"],function(){return we(this),this}),e(Te+".isShown()",function(){var t=this.context;return t.length&&this.length&&t[0].aoData[this[0]]._detailsShow||!1});function Se(t,e,n,o,r){for(var a=[],l=0,i=r.length;l<i;l++)a.push(F(t,r[l],e));return a}var De=/^([^:]+):(name|visIdx|visible)$/;e("columns()",function(e,n){e===U?e="":z.isPlainObject(e)&&(n=e,e=""),n=ve(n);var t=this.iterator("table",function(t){return function(s,t,d){var c=s.aoColumns,u=q(c,"sName"),f=q(c,"nTh");return ye("column",t,function(n){var t=h(n);if(""===n)return p(c.length);if(null!==t)return[0<=t?t:c.length+t];if("function"==typeof n){var o=Ie(s,d);return z.map(c,function(t,e){return n(e,Se(s,e,0,0,o),f[e])?e:null})}var r="string"==typeof n?n.match(De):"";if(r)switch(r[2]){case"visIdx":case"visible":var e=parseInt(r[1],10);if(e<0){var a=z.map(c,function(t,e){return t.bVisible?e:null});return[a[a.length+e]]}return[V(s,e)];case"name":return z.map(u,function(t,e){return t===r[1]?e:null});default:return[]}if(n.nodeName&&n._DT_CellIndex)return[n._DT_CellIndex.column];var l=z(f).filter(n).map(function(){return z.inArray(this,f)}).toArray();if(l.length||!n.nodeName)return l;var i=z(n).closest("*[data-dt-column]");return i.length?[i.data("dt-column")]:[]},s,d)}(t,e,n)},1);return t.selector.cols=e,t.selector.opts=n,t}),t("columns().header()","column().header()",function(t,e){return this.iterator("column",function(t,e){return t.aoColumns[e].nTh},1)}),t("columns().footer()","column().footer()",function(t,e){return this.iterator("column",function(t,e){return t.aoColumns[e].nTf},1)}),t("columns().data()","column().data()",function(){return this.iterator("column-rows",Se,1)}),t("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(t,e){return t.aoColumns[e].mData},1)}),t("columns().cache()","column().cache()",function(a){return this.iterator("column-rows",function(t,e,n,o,r){return m(t.aoData,r,"search"===a?"_aFilterData":"_aSortData",e)},1)}),t("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(t,e,n,o,r){return m(t.aoData,r,"anCells",e)},1)}),t("columns().visible()","column().visible()",function(n,o){var t=this.iterator("column",function(t,e){if(n===U)return t.aoColumns[e].bVisible;!function(t,e,n){var o,r,a,l,i=t.aoColumns,s=i[e],d=t.aoData;if(n===U)return s.bVisible;if(s.bVisible!==n){if(n){var c=z.inArray(!0,q(i,"bVisible"),e+1);for(r=0,a=d.length;r<a;r++)l=d[r].nTr,o=d[r].anCells,l&&l.insertBefore(o[e],o[c]||null)}else z(q(t.aoData,"anCells",e)).detach();s.bVisible=n,lt(t,t.aoHeader),lt(t,t.aoFooter),oe(t)}}(t,e,n)});return n!==U&&(this.iterator("column",function(t,e){ue(t,null,"column-visibility",[t,e,n,o])}),o!==U&&!o||this.columns.adjust()),t}),t("columns().indexes()","column().index()",function(n){return this.iterator("column",function(t,e){return"visible"===n?_(t,e):e},1)}),e("columns.adjust()",function(){return this.iterator("table",function(t){X(t)},1)}),e("column.index()",function(t,e){if(0!==this.context.length){var n=this.context[0];if("fromVisible"===t||"toData"===t)return V(n,e);if("fromData"===t||"toVisible"===t)return _(n,e)}}),e("column()",function(t,e){return xe(this.columns(t,e))});e("cells()",function(e,t,n){if(z.isPlainObject(e)&&(e.row===U?(n=e,e=null):(n=t,t=null)),z.isPlainObject(t)&&(n=t,t=null),null===t||t===U)return this.iterator("table",function(t){return function(o,t,e){var r,a,l,i,s,d,c,u=o.aoData,f=Ie(o,e),n=g(m(u,f,"anCells")),h=z([].concat.apply([],n)),p=o.aoColumns.length;return ye("cell",t,function(t){var e="function"==typeof t;if(null===t||t===U||e){for(a=[],l=0,i=f.length;l<i;l++)for(r=f[l],s=0;s<p;s++)d={row:r,column:s},e?(c=u[r],t(d,F(o,r,s),c.anCells?c.anCells[s]:null)&&a.push(d)):a.push(d);return a}if(z.isPlainObject(t))return[t];var n=h.filter(t).map(function(t,e){return{row:e._DT_CellIndex.row,column:e._DT_CellIndex.column}}).toArray();return n.length||!t.nodeName?n:(c=z(t).closest("*[data-dt-row]")).length?[{row:c.data("dt-row"),column:c.data("dt-column")}]:[]},o,e)}(t,e,ve(n))});var o,r,a,l,i,s=this.columns(t,n),d=this.rows(e,n),c=this.iterator("table",function(t,e){for(o=[],r=0,a=d[e].length;r<a;r++)for(l=0,i=s[e].length;l<i;l++)o.push({row:d[e][r],column:s[e][l]});return o},1);return z.extend(c.selector,{cols:t,rows:e,opts:n}),c}),t("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(t,e,n){var o=t.aoData[e];return o&&o.anCells?o.anCells[n]:U},1)}),e("cells().data()",function(){return this.iterator("cell",function(t,e,n){return F(t,e,n)},1)}),t("cells().cache()","cell().cache()",function(o){return o="search"===o?"_aFilterData":"_aSortData",this.iterator("cell",function(t,e,n){return t.aoData[e][o][n]},1)}),t("cells().render()","cell().render()",function(o){return this.iterator("cell",function(t,e,n){return F(t,e,n,o)},1)}),t("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(t,e,n){return{row:e,column:n,columnVisible:_(t,n)}},1)}),t("cells().invalidate()","cell().invalidate()",function(o){return this.iterator("cell",function(t,e,n){et(t,e,o,n)})}),e("cell()",function(t,e,n){return xe(this.cells(t,e,n))}),e("cell().data()",function(t){var e=this.context,n=this[0];return t===U?e.length&&n.length?F(e[0],n[0].row,n[0].column):U:(M(e[0],n[0].row,n[0].column,t),et(e[0],n[0].row,"data",n[0].column),this)}),e("order()",function(e,t){var n=this.context;return e===U?0!==n.length?n[0].aaSorting:U:("number"==typeof e?e=[[e,t]]:e.length&&!z.isArray(e[0])&&(e=Array.prototype.slice.call(arguments)),this.iterator("table",function(t){t.aaSorting=e.slice()}))}),e("order.listener()",function(e,n,o){return this.iterator("table",function(t){te(t,e,n,o)})}),e("order.fixed()",function(e){if(e)return this.iterator("table",function(t){t.aaSortingFixed=z.extend(!0,{},e)});var t=this.context,n=t.length?t[0].aaSortingFixed:U;return z.isArray(n)?{pre:n}:n}),e(["columns().order()","column().order()"],function(o){var r=this;return this.iterator("table",function(t,e){var n=[];z.each(r[e],function(t,e){n.push([e,o])}),t.aaSorting=n})}),e("search()",function(e,n,o,r){var t=this.context;return e===U?0!==t.length?t[0].oPreviousSearch.sSearch:U:this.iterator("table",function(t){t.oFeatures.bFilter&&yt(t,z.extend({},t.oPreviousSearch,{sSearch:e+"",bRegex:null!==n&&n,bSmart:null===o||o,bCaseInsensitive:null===r||r}),1)})}),t("columns().search()","column().search()",function(o,r,a,l){return this.iterator("column",function(t,e){var n=t.aoPreSearchCols;if(o===U)return n[e].sSearch;t.oFeatures.bFilter&&(z.extend(n[e],{sSearch:o+"",bRegex:null!==r&&r,bSmart:null===a||a,bCaseInsensitive:null===l||l}),yt(t,t.oPreviousSearch,1))})}),e("state()",function(){return this.context.length?this.context[0].oSavedState:null}),e("state.clear()",function(){return this.iterator("table",function(t){t.fnStateSaveCallback.call(t.oInstance,t,{})})}),e("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null}),e("state.save()",function(){return this.iterator("table",function(t){oe(t)})}),S.versionCheck=S.fnVersionCheck=function(t){for(var e,n,o=S.version.split("."),r=t.split("."),a=0,l=r.length;a<l;a++)if((e=parseInt(o[a],10)||0)!==(n=parseInt(r[a],10)||0))return n<e;return!0},S.isDataTable=S.fnIsDataTable=function(t){var r=z(t).get(0),a=!1;return t instanceof S.Api||(z.each(S.settings,function(t,e){var n=e.nScrollHead?z("table",e.nScrollHead)[0]:null,o=e.nScrollFoot?z("table",e.nScrollFoot)[0]:null;e.nTable!==r&&n!==r&&o!==r||(a=!0)}),a)},S.tables=S.fnTables=function(e){var t=!1;z.isPlainObject(e)&&(t=e.api,e=e.visible);var n=z.map(S.settings,function(t){if(!e||e&&z(t.nTable).is(":visible"))return t.nTable});return t?new v(n):n},S.camelToHungarian=A,e("$()",function(t,e){var n=this.rows(e).nodes(),o=z(n);return z([].concat(o.filter(t).toArray(),o.find(t).toArray()))}),z.each(["on","one","off"],function(t,n){e(n+"()",function(){var t=Array.prototype.slice.call(arguments);t[0]=z.map(t[0].split(/\s/),function(t){return t.match(/\.dt\b/)?t:t+".dt"}).join(" ");var e=z(this.tables().nodes());return e[n].apply(e,t),this})}),e("clear()",function(){return this.iterator("table",function(t){Z(t)})}),e("settings()",function(){return new v(this.context,this.context)}),e("init()",function(){var t=this.context;return t.length?t[0].oInit:null}),e("data()",function(){return this.iterator("table",function(t){return q(t.aoData,"_aData")}).flatten()}),e("destroy()",function(p){return p=p||!1,this.iterator("table",function(e){var n,t=e.nTableWrapper.parentNode,o=e.oClasses,r=e.nTable,a=e.nTBody,l=e.nTHead,i=e.nTFoot,s=z(r),d=z(a),c=z(e.nTableWrapper),u=z.map(e.aoData,function(t){return t.nTr});e.bDestroying=!0,ue(e,"aoDestroyCallback","destroy",[e]),p||new v(e).columns().visible(!0),c.off(".DT").find(":not(tbody *)").off(".DT"),z(D).off(".DT-"+e.sInstance),r!=l.parentNode&&(s.children("thead").detach(),s.append(l)),i&&r!=i.parentNode&&(s.children("tfoot").detach(),s.append(i)),e.aaSorting=[],e.aaSortingFixed=[],ee(e),z(u).removeClass(e.asStripeClasses.join(" ")),z("th, td",l).removeClass(o.sSortable+" "+o.sSortableAsc+" "+o.sSortableDesc+" "+o.sSortableNone),d.children().detach(),d.append(u);var f=p?"remove":"detach";s[f](),c[f](),!p&&t&&(t.insertBefore(r,e.nTableReinsertBefore),s.css("width",e.sDestroyWidth).removeClass(o.sTable),(n=e.asDestroyStripes.length)&&d.children().each(function(t){z(this).addClass(e.asDestroyStripes[t%n])}));var h=z.inArray(e,S.settings);-1!==h&&S.settings.splice(h,1)})}),z.each(["column","row","cell"],function(t,s){e(s+"s().every()",function(a){var l=this.selector.opts,i=this;return this.iterator(s,function(t,e,n,o,r){a.call(i[s](e,"cell"===s?n:l,"cell"===s?l:U),e,n,o,r)})})}),e("i18n()",function(t,e,n){var o=this.context[0],r=Y(t)(o.oLanguage);return r===U&&(r=e),n!==U&&z.isPlainObject(r)&&(r=r[n]!==U?r[n]:r._),r.replace("%d",n)}),S.version="1.10.16",S.settings=[],S.models={},S.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0},S.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1},S.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null},S.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(t){try{return JSON.parse((-1===t.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+t.sInstance+"_"+location.pathname))}catch(t){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(t,e){try{(-1===t.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+t.sInstance+"_"+location.pathname,JSON.stringify(e))}catch(t){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:z.extend({},S.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"},I(S.defaults),S.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null},I(S.defaults.column),S.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:U,oAjaxData:U,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==pe(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==pe(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var t=this._iDisplayLength,e=this._iDisplayStart,n=e+t,o=this.aiDisplay.length,r=this.oFeatures,a=r.bPaginate;return r.bServerSide?!1===a||-1===t?e+o:Math.min(e+t,this._iRecordsDisplay):!a||o<n||-1===t?o:n},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null},S.ext=b={buttons:{},classes:{},builder:"-source-",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:S.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:S.version},z.extend(b,{afnFiltering:b.search,aTypes:b.type.detect,ofnSearch:b.type.search,oSort:b.type.order,afnSortData:b.order,aoFeatures:b.feature,oApi:b.internal,oStdClasses:b.classes,oPagination:b.pager}),z.extend(S.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""});var Ae=S.ext.pager;function Re(t,e){var n=[],o=Ae.numbers_length,r=Math.floor(o/2);return e<=o?n=p(0,e):t<=r?((n=p(0,o-2)).push("ellipsis"),n.push(e-1)):(e-1-r<=t?(n=p(e-(o-2),e)).splice(0,0,"ellipsis"):((n=p(t-r+2,t+r-1)).push("ellipsis"),n.push(e-1),n.splice(0,0,"ellipsis")),n.splice(0,0,0)),n.DT_el="span",n}z.extend(Ae,{simple:function(t,e){return["previous","next"]},full:function(t,e){return["first","previous","next","last"]},numbers:function(t,e){return[Re(t,e)]},simple_numbers:function(t,e){return["previous",Re(t,e),"next"]},full_numbers:function(t,e){return["first","previous",Re(t,e),"next","last"]},first_last_numbers:function(t,e){return["first",Re(t,e),"last"]},_numbers:Re,numbers_length:7}),z.extend(!0,S.ext.renderer,{pageButton:{_:function(i,t,s,e,d,c){var u,f,n,h=i.oClasses,p=i.oLanguage.oPaginate,m=i.oLanguage.oAria.paginate||{},g=0,b=function(t,e){function n(t){Pt(i,t.data.action,!0)}var o,r,a;for(o=0,r=e.length;o<r;o++)if(a=e[o],z.isArray(a)){var l=z("<"+(a.DT_el||"div")+"/>").appendTo(t);b(l,a)}else{switch(u=null,f="",a){case"ellipsis":t.append('<span class="ellipsis">&#x2026;</span>');break;case"first":u=p.sFirst,f=a+(0<d?"":" "+h.sPageButtonDisabled);break;case"previous":u=p.sPrevious,f=a+(0<d?"":" "+h.sPageButtonDisabled);break;case"next":u=p.sNext,f=a+(d<c-1?"":" "+h.sPageButtonDisabled);break;case"last":u=p.sLast,f=a+(d<c-1?"":" "+h.sPageButtonDisabled);break;default:u=a+1,f=d===a?h.sPageButtonActive:""}null!==u&&(de(z("<a>",{class:h.sPageButton+" "+f,"aria-controls":i.sTableId,"aria-label":m[a],"data-dt-idx":g,tabindex:i.iTabIndex,id:0===s&&"string"==typeof a?i.sTableId+"_"+a:null}).html(u).appendTo(t),{action:a},n),g++)}};try{n=z(t).find(y.activeElement).data("dt-idx")}catch(t){}b(z(t).empty(),e),n!==U&&z(t).find("[data-dt-idx="+n+"]").focus()}}}),z.extend(S.ext.type.detect,[function(t,e){var n=e.oLanguage.sDecimal;return o(t,n)?"num"+n:null},function(t,e){if(t&&!(t instanceof Date)&&!d.test(t))return null;var n=Date.parse(t);return null!==n&&!isNaN(n)||r(t)?"date":null},function(t,e){var n=e.oLanguage.sDecimal;return o(t,n,!0)?"num-fmt"+n:null},function(t,e){var n=e.oLanguage.sDecimal;return l(t,n)?"html-num"+n:null},function(t,e){var n=e.oLanguage.sDecimal;return l(t,n,!0)?"html-num-fmt"+n:null},function(t,e){return r(t)||"string"==typeof t&&-1!==t.indexOf("<")?"html":null}]),z.extend(S.ext.type.search,{html:function(t){return r(t)?t:"string"==typeof t?t.replace(i," ").replace(s,""):""},string:function(t){return r(t)?t:"string"==typeof t?t.replace(i," "):t}});var Be=function(t,e,n,o){return 0===t||t&&"-"!==t?(e&&(t=a(t,e)),t.replace&&(n&&(t=t.replace(n,"")),o&&(t=t.replace(o,""))),1*t):-1/0};function ke(n){z.each({num:function(t){return Be(t,n)},"num-fmt":function(t){return Be(t,n,u)},"html-num":function(t){return Be(t,n,s)},"html-num-fmt":function(t){return Be(t,n,s,u)}},function(t,e){b.type.order[t+n+"-pre"]=e,t.match(/^html\-/)&&(b.type.search[t+n]=b.type.search.html)})}z.extend(b.type.order,{"date-pre":function(t){return Date.parse(t)||-1/0},"html-pre":function(t){return r(t)?"":t.replace?t.replace(/<.*?>/g,"").toLowerCase():t+""},"string-pre":function(t){return r(t)?"":"string"==typeof t?t.toLowerCase():t.toString?t.toString():""},"string-asc":function(t,e){return t<e?-1:e<t?1:0},"string-desc":function(t,e){return t<e?1:e<t?-1:0}}),ke(""),z.extend(!0,S.ext.renderer,{header:{_:function(a,l,i,s){z(a.nTable).on("order.dt.DT",function(t,e,n,o){if(a===e){var r=i.idx;l.removeClass(i.sSortingClass+" "+s.sSortAsc+" "+s.sSortDesc).addClass("asc"==o[r]?s.sSortAsc:"desc"==o[r]?s.sSortDesc:i.sSortingClass)}})},jqueryui:function(a,l,i,s){z("<div/>").addClass(s.sSortJUIWrapper).append(l.contents()).append(z("<span/>").addClass(s.sSortIcon+" "+i.sSortingClassJUI)).appendTo(l),z(a.nTable).on("order.dt.DT",function(t,e,n,o){if(a===e){var r=i.idx;l.removeClass(s.sSortAsc+" "+s.sSortDesc).addClass("asc"==o[r]?s.sSortAsc:"desc"==o[r]?s.sSortDesc:i.sSortingClass),l.find("span."+s.sSortIcon).removeClass(s.sSortJUIAsc+" "+s.sSortJUIDesc+" "+s.sSortJUI+" "+s.sSortJUIAscAllowed+" "+s.sSortJUIDescAllowed).addClass("asc"==o[r]?s.sSortJUIAsc:"desc"==o[r]?s.sSortJUIDesc:i.sSortingClassJUI)}})}}});function Ne(t){return"string"==typeof t?t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):t}function Le(e){return function(){var t=[ae(this[S.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return S.ext.internal[e].apply(this,t)}}return S.render={number:function(a,l,i,s,d){return{display:function(t){if("number"!=typeof t&&"string"!=typeof t)return t;var e=t<0?"-":"",n=parseFloat(t);if(isNaN(n))return Ne(t);n=n.toFixed(i),t=Math.abs(n);var o=parseInt(t,10),r=i?l+(t-o).toFixed(i).substring(2):"";return e+(s||"")+o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,a)+r+(d||"")}}},text:function(){return{display:Ne}}},z.extend(S.ext.internal,{_fnExternApiFunc:Le,_fnBuildAjax:ft,_fnAjaxUpdate:ht,_fnAjaxParameters:pt,_fnAjaxUpdateDraw:mt,_fnAjaxDataSrc:gt,_fnAddColumn:L,_fnColumnOptions:H,_fnAdjustColumnSizing:X,_fnVisibleToColumnIndex:V,_fnColumnIndexToVisible:_,_fnVisbleColumns:O,_fnGetColumns:P,_fnColumnTypes:T,_fnApplyColumnDefs:j,_fnHungarianMap:I,_fnCamelToHungarian:A,_fnLanguageCompat:R,_fnBrowserDetect:N,_fnAddData:E,_fnAddTr:W,_fnNodeToDataIndex:function(t,e){return e._DT_RowIndex!==U?e._DT_RowIndex:null},_fnNodeToColumnIndex:function(t,e,n){return z.inArray(n,t.aoData[e].anCells)},_fnGetCellData:F,_fnSetCellData:M,_fnSplitObjNotation:J,_fnGetObjectDataFn:Y,_fnSetObjectDataFn:K,_fnGetDataMaster:Q,_fnClearTable:Z,_fnDeleteIndex:tt,_fnInvalidate:et,_fnGetRowElements:nt,_fnCreateTr:ot,_fnBuildHead:at,_fnDrawHead:lt,_fnDraw:it,_fnReDraw:st,_fnAddOptionsHtml:dt,_fnDetectHeader:ct,_fnGetUniqueThs:ut,_fnFeatureHtmlFilter:bt,_fnFilterComplete:yt,_fnFilterCustom:vt,_fnFilterColumn:xt,_fnFilter:It,_fnFilterCreateSearch:wt,_fnEscapeRegex:Ct,_fnFilterData:Ft,_fnFeatureHtmlInfo:At,_fnUpdateInfo:Rt,_fnInfoMacros:Bt,_fnInitialise:kt,_fnInitComplete:Nt,_fnLengthChange:Lt,_fnFeatureHtmlLength:Ht,_fnFeatureHtmlPaginate:Ot,_fnPageChange:Pt,_fnFeatureHtmlProcessing:jt,_fnProcessingDisplay:Et,_fnFeatureHtmlTable:Wt,_fnScrollDraw:Mt,_fnApplyToChildren:zt,_fnCalculateColumnWidths:qt,_fnThrottle:Xt,_fnConvertToWidth:Vt,_fnGetWidestNode:$t,_fnGetMaxLenString:Gt,_fnStringToCss:Jt,_fnSortFlatten:Yt,_fnSort:Kt,_fnSortAria:Qt,_fnSortListener:Zt,_fnSortAttachListener:te,_fnSortingClasses:ee,_fnSortData:ne,_fnSaveState:oe,_fnLoadState:re,_fnSettingsFromNode:ae,_fnLog:le,_fnMap:ie,_fnBindAction:de,_fnCallbackReg:ce,_fnCallbackFire:ue,_fnLengthOverflow:fe,_fnRenderer:he,_fnDataSource:pe,_fnRowAttributes:rt,_fnCalculateEnd:function(){}}),((z.fn.dataTable=S).$=z).fn.dataTableSettings=S.settings,z.fn.dataTableExt=S.ext,z.fn.DataTable=function(t){return z(this).dataTable(t).api()},z.each(S,function(t,e){z.fn.DataTable[t]=e}),z.fn.dataTable}),function(n){"function"==typeof define&&define.amd?define("datatables.net-bs",["jquery","datatables.net"],function(t){return n(t,window,document)}):"object"==typeof exports?module.exports=function(t,e){return t=t||window,e&&e.fn.dataTable||(e=require("datatables.net")(t,e).$),n(e,t,t.document)}:n(jQuery,window,document)}(function(v,t,o,r){"use strict";var a=v.fn.dataTable;return v.extend(!0,a.defaults,{dom:"<'row'<'col-sm-6'l><'col-sm-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>",renderer:"bootstrap"}),v.extend(a.ext.classes,{sWrapper:"dataTables_wrapper form-inline dt-bootstrap",sFilterInput:"form-control input-sm",sLengthSelect:"form-control input-sm",sProcessing:"dataTables_processing panel panel-default"}),a.ext.renderer.pageButton.bootstrap=function(i,t,s,e,d,c){var u,f,n,h=new a.Api(i),p=i.oClasses,m=i.oLanguage.oPaginate,g=i.oLanguage.oAria.paginate||{},b=0,y=function(t,e){function n(t){t.preventDefault(),v(t.currentTarget).hasClass("disabled")||h.page()==t.data.action||h.page(t.data.action).draw("page")}var o,r,a,l;for(o=0,r=e.length;o<r;o++)if(l=e[o],v.isArray(l))y(t,l);else{switch(f=u="",l){case"ellipsis":u="&#x2026;",f="disabled";break;case"first":u=m.sFirst,f=l+(0<d?"":" disabled");break;case"previous":u=m.sPrevious,f=l+(0<d?"":" disabled");break;case"next":u=m.sNext,f=l+(d<c-1?"":" disabled");break;case"last":u=m.sLast,f=l+(d<c-1?"":" disabled");break;default:u=l+1,f=d===l?"active":""}u&&(a=v("<li>",{class:p.sPageButton+" "+f,id:0===s&&"string"==typeof l?i.sTableId+"_"+l:null}).append(v("<a>",{href:"#","aria-controls":i.sTableId,"aria-label":g[l],"data-dt-idx":b,tabindex:i.iTabIndex}).html(u)).appendTo(t),i.oApi._fnBindAction(a,{action:l},n),b++)}};try{n=v(t).find(o.activeElement).data("dt-idx")}catch(t){}y(v(t).empty().html('<ul class="pagination"/>').children("ul"),e),n!==r&&v(t).find("[data-dt-idx="+n+"]").focus()},a}),function(n){"function"==typeof define&&define.amd?define("datatables.net-buttons",["jquery","datatables.net"],function(t){return n(t,window,document)}):"object"==typeof exports?module.exports=function(t,e){return t=t||window,e&&e.fn.dataTable||(e=require("datatables.net")(t,e).$),n(e,t,t.document)}:n(jQuery,window,document)}(function(p,i,a,c){var r,m=p.fn.dataTable,n=0,d=0,s=m.ext.buttons,u=function(t,e){void 0===e&&(e={}),!0===e&&(e={}),p.isArray(e)&&(e={buttons:e}),this.c=p.extend(!0,{},u.defaults,e),e.buttons&&(this.c.buttons=e.buttons),this.s={dt:new m.Api(t),buttons:[],listenKeys:"",namespace:"dtb"+n++},this.dom={container:p("<"+this.c.dom.container.tag+"/>").addClass(this.c.dom.container.className)},this._constructor()};p.extend(u.prototype,{action:function(t,e){var n=this._nodeToButton(t);return e===c?n.conf.action:(n.conf.action=e,this)},active:function(t,e){var n=this._nodeToButton(t),o=this.c.dom.button.active;n=p(n.node);return e===c?n.hasClass(o):(n.toggleClass(o,e===c||e),this)},add:function(t,e){var n=this.s.buttons;if("string"==typeof e){for(var o=e.split("-"),r=(n=this.s,0),a=o.length-1;r<a;r++)n=n.buttons[1*o[r]];n=n.buttons,e=1*o[o.length-1]}return this._expandButton(n,t,!1,e),this._draw(),this},container:function(){return this.dom.container},disable:function(t){return t=this._nodeToButton(t),p(t.node).addClass(this.c.dom.button.disabled),this},destroy:function(){p("body").off("keyup."+this.s.namespace);var t,e,n=this.s.buttons.slice();for(t=0,e=n.length;t<e;t++)this.remove(n[t].node);for(this.dom.container.remove(),t=0,e=(n=this.s.dt.settings()[0]).length;t<e;t++)if(n.inst===this){n.splice(t,1);break}return this},enable:function(t,e){if(!1===e)return this.disable(t);var n=this._nodeToButton(t);return p(n.node).removeClass(this.c.dom.button.disabled),this},name:function(){return this.c.name},node:function(t){return t=this._nodeToButton(t),p(t.node)},processing:function(t,e){var n=this._nodeToButton(t);return e===c?p(n.node).hasClass("processing"):(p(n.node).toggleClass("processing",e),this)},remove:function(t){var e=this._nodeToButton(t),n=this._nodeToHost(t),o=this.s.dt;if(e.buttons.length)for(var r=e.buttons.length-1;0<=r;r--)this.remove(e.buttons[r].node);return e.conf.destroy&&e.conf.destroy.call(o.button(t),o,p(t),e.conf),this._removeKey(e.conf),p(e.node).remove(),t=p.inArray(e,n),n.splice(t,1),this},text:function(t,e){function n(t){return"function"==typeof t?t(a,l,o.conf):t}var o=this._nodeToButton(t),r=this.c.dom.collection.buttonLiner,a=(r=o.inCollection&&r&&r.tag?r.tag:this.c.dom.buttonLiner.tag,this.s.dt),l=p(o.node);return e===c?n(o.conf.text):(o.conf.text=e,r?l.children(r).html(n(e)):l.html(n(e)),this)},_constructor:function(){var n=this,t=this.s.dt,e=t.settings()[0],o=this.c.buttons;e._buttons||(e._buttons=[]),e._buttons.push({inst:this,name:this.c.name});e=0;for(var r=o.length;e<r;e++)this.add(o[e]);t.on("destroy",function(){n.destroy()}),p("body").on("keyup."+this.s.namespace,function(t){if(!a.activeElement||a.activeElement===a.body){var e=String.fromCharCode(t.keyCode).toLowerCase();-1!==n.s.listenKeys.toLowerCase().indexOf(e)&&n._keypress(e,t)}})},_addKey:function(t){t.key&&(this.s.listenKeys+=p.isPlainObject(t.key)?t.key.key:t.key)},_draw:function(t,e){t||(t=this.dom.container,e=this.s.buttons),t.children().detach();for(var n=0,o=e.length;n<o;n++)t.append(e[n].inserter),t.append(" "),e[n].buttons&&e[n].buttons.length&&this._draw(e[n].collection,e[n].buttons)},_expandButton:function(t,e,n,o){for(var r=this.s.dt,a=0,l=(e=p.isArray(e)?e:[e]).length;a<l;a++){var i=this._resolveExtends(e[a]);if(i)if(p.isArray(i))this._expandButton(t,i,n,o);else{var s=this._buildButton(i,n);if(s){if(o!==c?(t.splice(o,0,s),o++):t.push(s),s.conf.buttons){var d=this.c.dom.collection;s.collection=p("<"+d.tag+"/>").addClass(d.className).attr("role","menu"),s.conf._collection=s.collection,this._expandButton(s.buttons,s.conf.buttons,!0,o)}i.init&&i.init.call(r.button(s.node),r,p(s.node),i),0}}}},_buildButton:function(e,t){function n(t){return"function"==typeof t?t(l,s,e):t}var o=this.c.dom.button,r=this.c.dom.buttonLiner,a=this.c.dom.collection,l=this.s.dt;if(t&&a.button&&(o=a.button),t&&a.buttonLiner&&(r=a.buttonLiner),e.available&&!e.available(l,e))return!1;function i(t,e,n,o){o.action.call(e.button(n),t,e,n,o),p(e.table().node()).triggerHandler("buttons-action.dt",[e.button(n),e,n,o])}var s=p("<"+o.tag+"/>").addClass(o.className).attr("tabindex",this.s.dt.settings()[0].iTabIndex).attr("aria-controls",this.s.dt.table().node().id).on("click.dtb",function(t){t.preventDefault(),!s.hasClass(o.disabled)&&e.action&&i(t,l,s,e),s.blur()}).on("keyup.dtb",function(t){13===t.keyCode&&!s.hasClass(o.disabled)&&e.action&&i(t,l,s,e)});return"a"===o.tag.toLowerCase()&&s.attr("href","#"),r.tag?(a=p("<"+r.tag+"/>").html(n(e.text)).addClass(r.className),"a"===r.tag.toLowerCase()&&a.attr("href","#"),s.append(a)):s.html(n(e.text)),!1===e.enabled&&s.addClass(o.disabled),e.className&&s.addClass(e.className),e.titleAttr&&s.attr("title",n(e.titleAttr)),e.namespace||(e.namespace=".dt-button-"+d++),r=(r=this.c.dom.buttonContainer)&&r.tag?p("<"+r.tag+"/>").addClass(r.className).append(s):s,this._addKey(e),{conf:e,node:s.get(0),inserter:r,buttons:[],inCollection:t,collection:null}},_nodeToButton:function(t,e){for(var n=0,o=(e=e||this.s.buttons).length;n<o;n++){if(e[n].node===t)return e[n];if(e[n].buttons.length){var r=this._nodeToButton(t,e[n].buttons);if(r)return r}}},_nodeToHost:function(t,e){for(var n=0,o=(e=e||this.s.buttons).length;n<o;n++){if(e[n].node===t)return e;if(e[n].buttons.length){var r=this._nodeToHost(t,e[n].buttons);if(r)return r}}},_keypress:function(a,l){var i=function(t){for(var e=0,n=t.length;e<n;e++){var o=t[e].conf,r=t[e].node;o.key&&(o.key===a?p(r).click():!p.isPlainObject(o.key)||o.key.key!==a||o.key.shiftKey&&!l.shiftKey||o.key.altKey&&!l.altKey||o.key.ctrlKey&&!l.ctrlKey||o.key.metaKey&&!l.metaKey||p(r).click()),t[e].buttons.length&&i(t[e].buttons)}};i(this.s.buttons)},_removeKey:function(t){if(t.key){var e=p.isPlainObject(t.key)?t.key.key:t.key;t=this.s.listenKeys.split(""),e=p.inArray(e,t);t.splice(e,1),this.s.listenKeys=t.join("")}},_resolveExtends:function(n){function t(t){for(var e=0;!p.isPlainObject(t)&&!p.isArray(t);){if(t===c)return;if("function"==typeof t){if(!(t=t(r,n)))return!1}else if("string"==typeof t){if(!s[t])throw"Unknown button type: "+t;t=s[t]}if(30<++e)throw"Buttons: Too many iterations"}return p.isArray(t)?t:p.extend({},t)}var e,o,r=this.s.dt;for(n=t(n);n&&n.extend;){if(!s[n.extend])throw"Cannot extend unknown button type: "+n.extend;var a=t(s[n.extend]);if(p.isArray(a))return a;if(!a)return!1;e=a.className,n=p.extend({},a,n),e&&n.className!==e&&(n.className=e+" "+n.className);var l=n.postfixButtons;if(l){for(n.buttons||(n.buttons=[]),e=0,o=l.length;e<o;e++)n.buttons.push(l[e]);n.postfixButtons=null}if(l=n.prefixButtons){for(n.buttons||(n.buttons=[]),e=0,o=l.length;e<o;e++)n.buttons.splice(e,0,l[e]);n.prefixButtons=null}n.extend=a.extend}return n}}),u.background=function(t,e,n){n===c&&(n=400),t?p("<div/>").addClass(e).css("display","none").appendTo("body").fadeIn(n):p("body > div."+e).fadeOut(n,function(){p(this).removeClass(e).remove()})},u.instanceSelector=function(t,o){if(!t)return p.map(o,function(t){return t.inst});var r=[],a=p.map(o,function(t){return t.name}),l=function(t){if(p.isArray(t))for(var e=0,n=t.length;e<n;e++)l(t[e]);else"string"==typeof t?-1!==t.indexOf(",")?l(t.split(",")):-1!==(t=p.inArray(p.trim(t),a))&&r.push(o[t].inst):"number"==typeof t&&r.push(o[t].inst)};return l(t),r},u.buttonSelector=function(t,e){for(var l=[],i=function(t,e,n){for(var o,r,a=0,l=e.length;a<l;a++)(o=e[a])&&(r=n!==c?n+a:a+"",t.push({node:o.node,name:o.conf.name,idx:r}),o.buttons&&i(t,o.buttons,r+"-"))},s=function(t,e){var n,o,r=[];if(i(r,e.s.buttons),n=p.map(r,function(t){return t.node}),p.isArray(t)||t instanceof p)for(n=0,o=t.length;n<o;n++)s(t[n],e);else if(null===t||t===c||"*"===t)for(n=0,o=r.length;n<o;n++)l.push({inst:e,node:r[n].node});else if("number"==typeof t)l.push({inst:e,node:e.s.buttons[t].node});else if("string"==typeof t)if(-1!==t.indexOf(","))for(n=0,o=(r=t.split(",")).length;n<o;n++)s(p.trim(r[n]),e);else if(t.match(/^\d+(\-\d+)*$/))n=p.map(r,function(t){return t.idx}),l.push({inst:e,node:r[p.inArray(t,n)].node});else if(-1!==t.indexOf(":name")){var a=t.replace(":name","");for(n=0,o=r.length;n<o;n++)r[n].name===a&&l.push({inst:e,node:r[n].node})}else p(n).filter(t).each(function(){l.push({inst:e,node:this})});else"object"==typeof t&&t.nodeName&&(-1!==(r=p.inArray(t,n))&&l.push({inst:e,node:n[r]}))},n=0,o=t.length;n<o;n++)s(e,t[n]);return l},u.defaults={buttons:["copy","excel","csv","pdf","print"],name:"main",tabIndex:0,dom:{container:{tag:"div",className:"dt-buttons"},collection:{tag:"div",className:"dt-button-collection"},button:{tag:"a",className:"dt-button",active:"active",disabled:"disabled"},buttonLiner:{tag:"span",className:""}}},u.version="1.4.2",p.extend(s,{collection:{text:function(t){return t.i18n("buttons.collection","Collection")},className:"buttons-collection",action:function(t,n,e,o){t=e.offset();var r=p(n.table().container()),a=!1;p("div.dt-button-background").length&&(a=p(".dt-button-collection").offset(),p("body").trigger("click.dtb-collection")),o._collection.addClass(o.collectionLayout).css("display","none").appendTo("body").fadeIn(o.fade);var l=o._collection.css("position");a&&"absolute"===l?o._collection.css({top:a.top,left:a.left}):"absolute"===l?(o._collection.css({top:t.top+e.outerHeight(),left:t.left}),a=r.offset().top+r.height(),e=t.top+e.outerHeight()+o._collection.outerHeight()-a,a=t.top-o._collection.outerHeight(),(a=r.offset().top-a)<e&&o._collection.css("top",t.top-o._collection.outerHeight()-5),e=t.left+o._collection.outerWidth(),(r=r.offset().left+r.width())<e&&o._collection.css("left",t.left-(e-r))):((t=o._collection.height()/2)>p(i).height()/2&&(t=p(i).height()/2),o._collection.css("marginTop",-1*t)),o.background&&u.background(!0,o.backgroundClassName,o.fade),setTimeout(function(){p("div.dt-button-background").on("click.dtb-collection",function(){}),p("body").on("click.dtb-collection",function(t){var e=p.fn.addBack?"addBack":"andSelf";p(t.target).parents()[e]().filter(o._collection).length||(o._collection.fadeOut(o.fade,function(){o._collection.detach()}),p("div.dt-button-background").off("click.dtb-collection"),u.background(!1,o.backgroundClassName,o.fade),p("body").off("click.dtb-collection"),n.off("buttons-action.b-internal"))})},10),o.autoClose&&n.on("buttons-action.b-internal",function(){p("div.dt-button-background").click()})},background:!0,collectionLayout:"",backgroundClassName:"dt-button-background",autoClose:!1,fade:400},copy:function(t,e){return s.copyHtml5?"copyHtml5":s.copyFlash&&s.copyFlash.available(t,e)?"copyFlash":void 0},csv:function(t,e){return s.csvHtml5&&s.csvHtml5.available(t,e)?"csvHtml5":s.csvFlash&&s.csvFlash.available(t,e)?"csvFlash":void 0},excel:function(t,e){return s.excelHtml5&&s.excelHtml5.available(t,e)?"excelHtml5":s.excelFlash&&s.excelFlash.available(t,e)?"excelFlash":void 0},pdf:function(t,e){return s.pdfHtml5&&s.pdfHtml5.available(t,e)?"pdfHtml5":s.pdfFlash&&s.pdfFlash.available(t,e)?"pdfFlash":void 0},pageLength:function(t){t=t.settings()[0].aLengthMenu;function r(t){return t.i18n("buttons.pageLength",{"-1":"Show all rows",_:"Show %d rows"},t.page.len())}var e=p.isArray(t[0])?t[0]:t,n=p.isArray(t[0])?t[1]:t;return{extend:"collection",text:r,className:"buttons-page-length",autoClose:!0,buttons:p.map(e,function(r,t){return{text:n[t],className:"button-page-length",action:function(t,e){e.page.len(r).draw()},init:function(t,e,n){var o=this;e=function(){o.active(t.page.len()===r)};t.on("length.dt"+n.namespace,e),e()},destroy:function(t,e,n){t.off("length.dt"+n.namespace)}}}),init:function(t,e,n){var o=this;t.on("length.dt"+n.namespace,function(){o.text(r(t))})},destroy:function(t,e,n){t.off("length.dt"+n.namespace)}}}}),m.Api.register("buttons()",function(e,n){n===c&&(n=e,e=c),this.selector.buttonGroup=e;var t=this.iterator(!0,"table",function(t){if(t._buttons)return u.buttonSelector(u.instanceSelector(e,t._buttons),n)},!0);return t._groupSelector=e,t}),m.Api.register("button()",function(t,e){var n=this.buttons(t,e);return 1<n.length&&n.splice(1,n.length),n}),m.Api.registerPlural("buttons().active()","button().active()",function(e){return e===c?this.map(function(t){return t.inst.active(t.node)}):this.each(function(t){t.inst.active(t.node,e)})}),m.Api.registerPlural("buttons().action()","button().action()",function(e){return e===c?this.map(function(t){return t.inst.action(t.node)}):this.each(function(t){t.inst.action(t.node,e)})}),m.Api.register(["buttons().enable()","button().enable()"],function(e){return this.each(function(t){t.inst.enable(t.node,e)})}),m.Api.register(["buttons().disable()","button().disable()"],function(){return this.each(function(t){t.inst.disable(t.node)})}),m.Api.registerPlural("buttons().nodes()","button().node()",function(){var e=p();return p(this.each(function(t){e=e.add(t.inst.node(t.node))})),e}),m.Api.registerPlural("buttons().processing()","button().processing()",function(e){return e===c?this.map(function(t){return t.inst.processing(t.node)}):this.each(function(t){t.inst.processing(t.node,e)})}),m.Api.registerPlural("buttons().text()","button().text()",function(e){return e===c?this.map(function(t){return t.inst.text(t.node)}):this.each(function(t){t.inst.text(t.node,e)})}),m.Api.registerPlural("buttons().trigger()","button().trigger()",function(){return this.each(function(t){t.inst.node(t.node).trigger("click")})}),m.Api.registerPlural("buttons().containers()","buttons().container()",function(){var o=p(),r=this._groupSelector;return this.iterator(!0,"table",function(t){if(t._buttons)for(var e=0,n=(t=u.instanceSelector(r,t._buttons)).length;e<n;e++)o=o.add(t[e].container())}),o}),m.Api.register("button().add()",function(t,e){var n=this.context;return n.length&&((n=u.instanceSelector(this._groupSelector,n[0]._buttons)).length&&n[0].add(e,t)),this.button(this._groupSelector,t)}),m.Api.register("buttons().destroy()",function(){return this.pluck("inst").unique().each(function(t){t.destroy()}),this}),m.Api.registerPlural("buttons().remove()","buttons().remove()",function(){return this.each(function(t){t.inst.remove(t.node)}),this}),m.Api.register("buttons.info()",function(t,e,n){var o=this;return!1===t?(p("#datatables_buttons_info").fadeOut(function(){p(this).remove()}),clearTimeout(r),r=null):(r&&clearTimeout(r),p("#datatables_buttons_info").length&&p("#datatables_buttons_info").remove(),p('<div id="datatables_buttons_info" class="dt-button-info"/>').html(t?"<h2>"+t+"</h2>":"").append(p("<div/>")["string"==typeof e?"html":"append"](e)).css("display","none").appendTo("body").fadeIn(),n!==c&&0!==n&&(r=setTimeout(function(){o.buttons.info(!1)},n))),this}),m.Api.register("buttons.exportData()",function(t){if(this.context.length){for(var n=new m.Api(this.context[0]),o=p.extend(!0,{},{rows:null,columns:"",modifier:{search:"applied",order:"applied"},orthogonal:"display",stripHtml:!0,stripNewlines:!0,decodeEntities:!0,trim:!0,format:{header:function(t){return e(t)},footer:function(t){return e(t)},body:function(t){return e(t)}}},t),e=function(t){return"string"!=typeof t||(t=t.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,""),o.stripHtml&&(t=t.replace(/<[^>]*>/g,"")),o.trim&&(t=t.replace(/^\s+|\s+$/g,"")),o.stripNewlines&&(t=t.replace(/\n/g," ")),o.decodeEntities&&(g.innerHTML=t,t=g.value)),t},r=(t=n.columns(o.columns).indexes().map(function(t){var e=n.column(t).header();return o.format.header(e.innerHTML,t,e)}).toArray(),n.table().footer()?n.columns(o.columns).indexes().map(function(t){var e=n.column(t).footer();return o.format.footer(e?e.innerHTML:"",t,e)}).toArray():null),a=n.rows(o.rows,o.modifier).indexes().toArray(),l=(a=(l=n.cells(a,o.columns)).render(o.orthogonal).toArray(),l.nodes().toArray()),i=t.length,s=0<i?a.length/i:0,d=Array(s),c=0,u=0;u<s;u++){for(var f=Array(i),h=0;h<i;h++)f[h]=o.format.body(a[c],u,h,l[c]),c++;d[u]=f}return{header:t,footer:r,body:d}}}),m.Api.register("buttons.exportInfo()",function(t){var e,n=t=t||{};return"function"==typeof(e="*"===n.filename&&"*"!==n.title&&n.title!==c?n.title:n.filename)&&(e=e()),e===c||null===e?e=null:(-1!==e.indexOf("*")&&(e=p.trim(e.replace("*",p("title").text()))),e=e.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g,""),(n=o(n.extension))||(n=""),e+=n),{filename:e,title:n=null===(n=o(t.title))?null:-1!==n.indexOf("*")?n.replace("*",p("title").text()||"Exported data"):n,messageTop:l(this,t.messageTop||t.message,"top"),messageBottom:l(this,t.messageBottom,"bottom")}});var o=function(t){return null===t||t===c?null:"function"==typeof t?t():t},l=function(t,e,n){return null===(e=o(e))?null:(t=p("caption",t.table().container()).eq(0),"*"===e?t.css("caption-side")!==n?null:t.length?t.text():"":e)},g=p("<textarea/>")[0];return p.fn.dataTable.Buttons=u,p.fn.DataTable.Buttons=u,p(a).on("init.dt plugin-init.dt",function(t,e){if("dt"===t.namespace){var n=e.oInit.buttons||m.defaults.buttons;n&&!e._buttons&&new u(e,n).container()}}),m.ext.feature.push({fnInit:function(t){var e=(t=new m.Api(t)).init().buttons||m.defaults.buttons;return new u(t,e).container()},cFeature:"B"}),u}),function(n){"function"==typeof define&&define.amd?define("datatables.net-buttons-colvis",["jquery","datatables.net","datatables.net-buttons"],function(t){return n(t,window,document)}):"object"==typeof exports?module.exports=function(t,e){return t=t||window,e&&e.fn.dataTable||(e=require("datatables.net")(t,e).$),e.fn.dataTable.Buttons||require("datatables.net-buttons")(t,e),n(e,t,t.document)}:n(jQuery,window,document)}(function(t,e,n,r){return e=t.fn.dataTable,t.extend(e.ext.buttons,{colvis:function(t,e){return{extend:"collection",text:function(t){return t.i18n("buttons.colvis","Column visibility")},className:"buttons-colvis",buttons:[{extend:"columnsToggle",columns:e.columns,columnText:e.columnText}]}},columnsToggle:function(t,e){return t.columns(e.columns).indexes().map(function(t){return{extend:"columnToggle",columns:t,columnText:e.columnText}}).toArray()},columnToggle:function(t,e){return{extend:"columnVisibility",columns:e.columns,columnText:e.columnText}},columnsVisibility:function(t,e){return t.columns(e.columns).indexes().map(function(t){return{extend:"columnVisibility",columns:t,visibility:e.visibility,columnText:e.columnText}}).toArray()},columnVisibility:{columns:r,text:function(t,e,n){return n._columnText(t,n)},className:"buttons-columnVisibility",action:function(t,e,n,o){e=(t=e.columns(o.columns)).visible(),t.visible(o.visibility!==r?o.visibility:!(e.length&&e[0]))},init:function(o,t,r){var a=this;o.on("column-visibility.dt"+r.namespace,function(t,e){e.bDestroying||e.nTable!=o.settings()[0].nTable||a.active(o.column(r.columns).visible())}).on("column-reorder.dt"+r.namespace,function(t,e,n){1===o.columns(r.columns).count()&&("number"==typeof r.columns&&(r.columns=n.mapping[r.columns]),t=o.column(r.columns),a.text(r._columnText(o,r)),a.active(t.visible()))}),this.active(o.column(r.columns).visible())},destroy:function(t,e,n){t.off("column-visibility.dt"+n.namespace).off("column-reorder.dt"+n.namespace)},_columnText:function(t,e){var n=t.column(e.columns).index(),o=t.settings()[0].aoColumns[n].sTitle.replace(/\n/g," ").replace(/<br\s*\/?>/gi," ").replace(/<.*?>/g,"").replace(/^\s+|\s+$/g,"");return e.columnText?e.columnText(t,n,o):o}},colvisRestore:{className:"buttons-colvisRestore",text:function(t){return t.i18n("buttons.colvisRestore","Restore visibility")},init:function(e,t,n){n._visOriginal=e.columns().indexes().map(function(t){return e.column(t).visible()}).toArray()},action:function(t,e,n,o){e.columns().every(function(t){t=e.colReorder&&e.colReorder.transpose?e.colReorder.transpose(t,"toOriginal"):t,this.visible(o._visOriginal[t])})}},colvisGroup:{className:"buttons-colvisGroup",action:function(t,e,n,o){e.columns(o.show).visible(!0,!1),e.columns(o.hide).visible(!1,!1),e.columns.adjust()},show:[],hide:[]}}),e.Buttons}),function(n){"function"==typeof define&&define.amd?define("datatables.net-buttons-flash",["jquery","datatables.net","datatables.net-buttons"],function(t){return n(t,window,document)}):"object"==typeof exports?module.exports=function(t,e){return t=t||window,e&&e.fn.dataTable||(e=require("datatables.net")(t,e).$),e.fn.dataTable.Buttons||require("datatables.net-buttons")(t,e),n(e,t,t.document)}:n(jQuery,window,document)}(function(p,l,i,m){function g(t){for(var e="";0<=t;)e=String.fromCharCode(t%26+65)+e,t=Math.floor(t/26)-1;return e}function b(t,e,n){var o=t.createElement(e);return n&&(n.attr&&p(o).attr(n.attr),n.children&&p.each(n.children,function(t,e){o.appendChild(e)}),null!==n.text&&n.text!==m&&o.appendChild(t.createTextNode(n.text))),o}function y(t,e){var n,o=t.header[e].length;t.footer&&t.footer[e].length>o&&(o=t.footer[e].length);for(var r=0,a=t.body.length;r<a;r++)if(o<(n=-1!==(n=null!==(n=t.body[r][e])&&n!==m?n.toString():"").indexOf("\n")?((n=n.split("\n")).sort(function(t,e){return e.length-t.length}),n[0].length):n.length)&&(o=n),40<o)return 52;return 6<(o*=1.3)?o:6}var r=p.fn.dataTable,a={version:"1.0.4-TableTools2",clients:{},moviePath:"",nextId:1,$:function(t){return"string"==typeof t&&(t=i.getElementById(t)),t.addClass||(t.hide=function(){this.style.display="none"},t.show=function(){this.style.display=""},t.addClass=function(t){this.removeClass(t),this.className+=" "+t},t.removeClass=function(t){this.className=this.className.replace(RegExp("\\s*"+t+"\\s*")," ").replace(/^\s+/,"").replace(/\s+$/,"")},t.hasClass=function(t){return!!this.className.match(RegExp("\\s*"+t+"\\s*"))}),t},setMoviePath:function(t){this.moviePath=t},dispatch:function(t,e,n){(t=this.clients[t])&&t.receiveEvent(e,n)},log:function(t){console.log("Flash: "+t)},register:function(t,e){this.clients[t]=e},getDOMObjectPosition:function(t){var e={left:0,top:0,width:t.width?t.width:t.offsetWidth,height:t.height?t.height:t.offsetHeight};for(""!==t.style.width&&(e.width=t.style.width.replace("px","")),""!==t.style.height&&(e.height=t.style.height.replace("px",""));t;)e.left+=t.offsetLeft,e.top+=t.offsetTop,t=t.offsetParent;return e},Client:function(t){this.handlers={},this.id=a.nextId++,this.movieId="ZeroClipboard_TableToolsMovie_"+this.id,a.register(this.id,this),t&&this.glue(t)}};a.Client.prototype={id:0,ready:!1,movie:null,clipText:"",fileName:"",action:"copy",handCursorEnabled:!0,cssEffects:!0,handlers:null,sized:!1,sheetName:"",glue:function(t,e){this.domElement=a.$(t);var n=99;this.domElement.style.zIndex&&(n=parseInt(this.domElement.style.zIndex,10)+1);var o=a.getDOMObjectPosition(this.domElement);this.div=i.createElement("div");var r=this.div.style;r.position="absolute",r.left="0px",r.top="0px",r.width=o.width+"px",r.height=o.height+"px",r.zIndex=n,void 0!==e&&""!==e&&(this.div.title=e),0!==o.width&&0!==o.height&&(this.sized=!0),this.domElement&&(this.domElement.appendChild(this.div),this.div.innerHTML=this.getHTML(o.width,o.height).replace(/&/g,"&amp;"))},positionElement:function(){var t=a.getDOMObjectPosition(this.domElement),e=this.div.style;e.position="absolute",e.width=t.width+"px",e.height=t.height+"px",0!==t.width&&0!==t.height&&(this.sized=!0,(e=this.div.childNodes[0]).width=t.width,e.height=t.height)},getHTML:function(t,e){var n="",o="id="+this.id+"&width="+t+"&height="+e;if(navigator.userAgent.match(/MSIE/))n=n+'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="'+(location.href.match(/^https/i)?"https://":"http://")+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="'+t+'" height="'+e+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+a.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+o+'"/><param name="wmode" value="transparent"/></object>';else n+='<embed id="'+this.movieId+'" src="'+a.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+t+'" height="'+e+'" name="'+this.movieId+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+o+'" wmode="transparent" />';return n},hide:function(){this.div&&(this.div.style.left="-2000px")},show:function(){this.reposition()},destroy:function(){var n=this;this.domElement&&this.div&&(p(this.div).remove(),this.div=this.domElement=null,p.each(a.clients,function(t,e){e===n&&delete a.clients[t]}))},reposition:function(t){if(t&&((this.domElement=a.$(t))||this.hide()),this.domElement&&this.div){t=a.getDOMObjectPosition(this.domElement);var e=this.div.style;e.left=t.left+"px",e.top=t.top+"px"}},clearText:function(){this.clipText="",this.ready&&this.movie.clearText()},appendText:function(t){this.clipText+=t,this.ready&&this.movie.appendText(t)},setText:function(t){this.clipText=t,this.ready&&this.movie.setText(t)},setFileName:function(t){this.fileName=t,this.ready&&this.movie.setFileName(t)},setSheetData:function(t){this.ready&&this.movie.setSheetData(JSON.stringify(t))},setAction:function(t){this.action=t,this.ready&&this.movie.setAction(t)},addEventListener:function(t,e){t=t.toString().toLowerCase().replace(/^on/,""),this.handlers[t]||(this.handlers[t]=[]),this.handlers[t].push(e)},setHandCursor:function(t){this.handCursorEnabled=t,this.ready&&this.movie.setHandCursor(t)},setCSSEffects:function(t){this.cssEffects=!!t},receiveEvent:function(t,e){var n;switch(t=t.toString().toLowerCase().replace(/^on/,"")){case"load":if(this.movie=i.getElementById(this.movieId),!this.movie)return n=this,void setTimeout(function(){n.receiveEvent("load",null)},1);if(!this.ready&&navigator.userAgent.match(/Firefox/)&&navigator.userAgent.match(/Windows/))return n=this,setTimeout(function(){n.receiveEvent("load",null)},100),void(this.ready=!0);this.ready=!0,this.movie.clearText(),this.movie.appendText(this.clipText),this.movie.setFileName(this.fileName),this.movie.setAction(this.action),this.movie.setHandCursor(this.handCursorEnabled);break;case"mouseover":this.domElement&&this.cssEffects&&this.recoverActive&&this.domElement.addClass("active");break;case"mouseout":this.domElement&&this.cssEffects&&(this.recoverActive=!1,this.domElement.hasClass("active")&&(this.domElement.removeClass("active"),this.recoverActive=!0));break;case"mousedown":this.domElement&&this.cssEffects&&this.domElement.addClass("active");break;case"mouseup":this.domElement&&this.cssEffects&&(this.domElement.removeClass("active"),this.recoverActive=!1)}if(this.handlers[t])for(var o=0,r=this.handlers[t].length;o<r;o++){var a=this.handlers[t][o];"function"==typeof a?a(this,e):"object"==typeof a&&2==a.length?a[0][a[1]](this,e):"string"==typeof a&&l[a](this,e)}}},a.hasFlash=function(){try{if(new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))return!0}catch(t){if(navigator.mimeTypes&&navigator.mimeTypes["application/x-shockwave-flash"]!==m&&navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)return!0}return!1},l.ZeroClipboard_TableTools=a;function v(t,e){var n=e.match(/[\s\S]{1,8192}/g)||[];t.clearText();for(var o=0,r=n.length;o<r;o++)t.appendText(n[o])}function x(t){return t.newline?t.newline:navigator.userAgent.match(/Windows/)?"\r\n":"\n"}function s(t,e){function n(t){for(var e="",n=0,o=t.length;n<o;n++)0<n&&(e+=l),e+=a?a+(""+t[n]).replace(i,s+a)+a:t[n];return e}for(var o=x(e),r=t.buttons.exportData(e.exportOptions),a=e.fieldBoundary,l=e.fieldSeparator,i=RegExp(a,"g"),s=e.escapeChar!==m?e.escapeChar:"\\",d=e.header?n(r.header)+o:"",c=e.footer&&r.footer?o+n(r.footer):"",u=[],f=0,h=r.body.length;f<h;f++)u.push(n(r.body[f]));return{str:d+u.join(o)+c,rows:u.length}}var I,d=function(t,e){e.attr("id"),e.parents("html").length?t.glue(e[0],""):setTimeout(function(){d(t,e)},500)},t={available:function(){return a.hasFlash()},init:function(t,e,n){a.moviePath=r.Buttons.swfPath;var o=new a.Client;o.setHandCursor(!0),o.addEventListener("mouseDown",function(){n._fromFlash=!0,t.button(e[0]).trigger(),n._fromFlash=!1}),d(o,e),n._flash=o},destroy:function(t,e,n){n._flash.destroy()},fieldSeparator:",",fieldBoundary:'"',exportOptions:{},title:"*",messageTop:"*",messageBottom:"*",filename:"*",extension:".csv",header:!0,footer:!1},w="",C=(w=void 0===l.XMLSerializer?new function(){this.serializeToString=function(t){return t.xml}}:new XMLSerializer,{"_rels/.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',"xl/_rels/workbook.xml.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',"[Content_Types].xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',"xl/workbook.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="" sheetId="1" r:id="rId1"/></sheets></workbook>',"xl/worksheets/sheet1.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/><mergeCells count="0"/></worksheet>',"xl/styles.xml":'<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="6"><numFmt numFmtId="164" formatCode="#,##0.00_- [$$-45C]"/><numFmt numFmtId="165" formatCode="&quot;£&quot;#,##0.00"/><numFmt numFmtId="166" formatCode="[$€-2] #,##0.00"/><numFmt numFmtId="167" formatCode="0.0%"/><numFmt numFmtId="168" formatCode="#,##0;(#,##0)"/><numFmt numFmtId="169" formatCode="#,##0.00;(#,##0.00)"/></numFmts><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill/><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="61"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="right"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="fill"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="9"   fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="166" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="167" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="168" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="169" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>'}),_=[{match:/^\-?\d+\.\d%$/,style:60,fmt:function(t){return t/100}},{match:/^\-?\d+\.?\d*%$/,style:56,fmt:function(t){return t/100}},{match:/^\-?\$[\d,]+.?\d*$/,style:57},{match:/^\-?£[\d,]+.?\d*$/,style:58},{match:/^\-?€[\d,]+.?\d*$/,style:59},{match:/^\([\d,]+\)$/,style:61,fmt:function(t){return-1*t.replace(/[\(\)]/g,"")}},{match:/^\([\d,]+\.\d{2}\)$/,style:62,fmt:function(t){return-1*t.replace(/[\(\)]/g,"")}},{match:/^[\d,]+$/,style:63},{match:/^[\d,]+\.\d{2}$/,style:64}];return r.Buttons.swfPath="//cdn.datatables.net/buttons/"+r.Buttons.version+"/swf/flashExport.swf",r.Api.register("buttons.resize()",function(){p.each(a.clients,function(t,e){e.domElement!==m&&e.domElement.parentNode&&e.positionElement()})}),r.ext.buttons.copyFlash=p.extend({},t,{className:"buttons-copy buttons-flash",text:function(t){return t.i18n("buttons.copy","Copy")},action:function(t,e,n,o){if(o._fromFlash){this.processing(!0);t=o._flash;var r=s(e,o),a=(n=e.buttons.exportInfo(o),x(o));r=r.str;n.title&&(r=n.title+a+a+r),n.messageTop&&(r=n.messageTop+a+a+r),n.messageBottom&&(r=r+a+a+n.messageBottom),o.customize&&(r=o.customize(r,o)),t.setAction("copy"),v(t,r),this.processing(!1),e.buttons.info(e.i18n("buttons.copyTitle","Copy to clipboard"),e.i18n("buttons.copySuccess",{_:"Copied %d rows to clipboard",1:"Copied 1 row to clipboard"},data.rows),3e3)}},fieldSeparator:"\t",fieldBoundary:""}),r.ext.buttons.csvFlash=p.extend({},t,{className:"buttons-csv buttons-flash",text:function(t){return t.i18n("buttons.csv","CSV")},action:function(t,e,n,o){t=o._flash,e=s(e,o),e=o.customize?o.customize(e.str,o):e.str,t.setAction("csv"),t.setFileName(_filename(o)),v(t,e)},escapeChar:'"'}),r.ext.buttons.excelFlash=p.extend({},t,{className:"buttons-excel buttons-flash",text:function(t){return t.i18n("buttons.excel","Excel")},action:function(t,e,n,o){this.processing(!0);t=o._flash;var s,d,c=0,u=p.parseXML(C["xl/worksheets/sheet1.xml"]),f=u.getElementsByTagName("sheetData")[0],r=(n={_rels:{".rels":p.parseXML(C["_rels/.rels"])},xl:{_rels:{"workbook.xml.rels":p.parseXML(C["xl/_rels/workbook.xml.rels"])},"workbook.xml":p.parseXML(C["xl/workbook.xml"]),"styles.xml":p.parseXML(C["xl/styles.xml"]),worksheets:{"sheet1.xml":u}},"[Content_Types].xml":p.parseXML(C["[Content_Types].xml"])},e.buttons.exportData(o.exportOptions)),a=function(t){d=b(u,"row",{attr:{r:s=c+1}});for(var e=0,n=t.length;e<n;e++){var o=g(e)+""+s,r=null;if(null!==t[e]&&t[e]!==m&&""!==t[e]){t[e]=p.trim(t[e]);for(var a=0,l=_.length;a<l;a++){var i=_[a];if(t[e].match&&!t[e].match(/^0\d+/)&&t[e].match(i.match)){r=t[e].replace(/[^\d\.\-]/g,""),i.fmt&&(r=i.fmt(r)),r=b(u,"c",{attr:{r:o,s:i.style},children:[b(u,"v",{text:r})]});break}}r=r||("number"==typeof t[e]||t[e].match&&t[e].match(/^-?\d+(\.\d+)?$/)&&!t[e].match(/^0\d+/)?b(u,"c",{attr:{t:"n",r:o},children:[b(u,"v",{text:t[e]})]}):(i=t[e].replace?t[e].replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g,""):t[e],b(u,"c",{attr:{t:"inlineStr",r:o},children:{row:b(u,"is",{children:{row:b(u,"t",{text:i})}})}}))),d.appendChild(r)}}f.appendChild(d),c++};p("sheets sheet",n.xl["workbook.xml"]).attr("name",function(t){var e="Sheet1";return t.sheetName&&(e=t.sheetName.replace(/[\[\]\*\/\\\?\:]/g,"")),e}(o)),o.customizeData&&o.customizeData(r);var l=function(t,e){var n=p("mergeCells",u);n[0].appendChild(b(u,"mergeCell",{attr:{ref:"A"+t+":"+g(e)+t}})),n.attr("count",n.attr("count")+1),p("row:eq("+(t-1)+") c",u).attr("s","51")};(e=e.buttons.exportInfo(o)).title&&(a([e.title],c),l(c,r.header.length-1)),e.messageTop&&(a([e.messageTop],c),l(c,r.header.length-1)),o.header&&(a(r.header,c),p("row:last c",u).attr("s","2"));for(var i=0,h=r.body.length;i<h;i++)a(r.body[i],c);for(o.footer&&r.footer&&(a(r.footer,c),p("row:last c",u).attr("s","2")),e.messageBottom&&(a([e.messageBottom],c),l(c,r.header.length-1)),a=b(u,"cols"),p("worksheet",u).prepend(a),l=0,i=r.header.length;l<i;l++)a.appendChild(b(u,"col",{attr:{min:l+1,max:l+1,width:y(r,l),customWidth:1}}));o.customize&&o.customize(n),function i(s){I===m&&(I=-1===w.serializeToString(p.parseXML(C["xl/worksheets/sheet1.xml"])).indexOf("xmlns:r")),p.each(s,function(t,e){if(p.isPlainObject(e))i(e);else{if(I){var n,o,r=e.childNodes[0],a=[];for(n=r.attributes.length-1;0<=n;n--){o=r.attributes[n].nodeName;var l=r.attributes[n].nodeValue;-1!==o.indexOf(":")&&(a.push({name:o,value:l}),r.removeAttribute(o))}for(n=0,o=a.length;n<o;n++)(l=e.createAttribute(a[n].name.replace(":","_dt_b_namespace_token_"))).value=a[n].value,r.setAttributeNode(l)}r=w.serializeToString(e),I&&(-1===r.indexOf("<?xml")&&(r='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'+r),r=r.replace(/_dt_b_namespace_token_/g,":")),r=r.replace(/<([^<>]*?) xmlns=""([^<>]*?)>/g,"<$1 $2>"),s[t]=r}})}(n),t.setAction("excel"),t.setFileName(e.filename),t.setSheetData(n),v(t,""),this.processing(!1)},extension:".xlsx"}),r.ext.buttons.pdfFlash=p.extend({},t,{className:"buttons-pdf buttons-flash",text:function(t){return t.i18n("buttons.pdf","PDF")},action:function(t,e,n,o){this.processing(!0);t=o._flash,n=e.buttons.exportData(o.exportOptions);var r=e.buttons.exportInfo(o),a=e.table().node().offsetWidth,l=e.columns(o.columns).indexes().map(function(t){return e.column(t).header().offsetWidth/a});t.setAction("pdf"),t.setFileName(r.filename),v(t,JSON.stringify({title:r.title||"",messageTop:r.messageTop||"",messageBottom:r.messageBottom||"",colWidth:l.toArray(),orientation:o.orientation,size:o.pageSize,header:o.header?n.header:null,footer:o.footer?n.footer:null,body:n.body})),this.processing(!1)},extension:".pdf",orientation:"portrait",pageSize:"A4",newline:"\n"}),r.Buttons}),function(r){"function"==typeof define&&define.amd?define("datatables.net-buttons-html5",["jquery","datatables.net","datatables.net-buttons"],function(t){return r(t,window,document)}):"object"==typeof exports?module.exports=function(t,e,n,o){return t=t||window,e&&e.fn.dataTable||(e=require("datatables.net")(t,e).$),e.fn.dataTable.Buttons||require("datatables.net-buttons")(t,e),r(e,t,t.document,n,o)}:r(jQuery,window,document)}(function(p,m,u,g,i,b){function y(t){for(var e="";0<=t;)e=String.fromCharCode(t%26+65)+e,t=Math.floor(t/26)-1;return e}function v(t,e,n){var o=t.createElement(e);return n&&(n.attr&&p(o).attr(n.attr),n.children&&p.each(n.children,function(t,e){o.appendChild(e)}),null!==n.text&&n.text!==b&&o.appendChild(t.createTextNode(n.text))),o}function x(t,e){var n,o=t.header[e].length;t.footer&&t.footer[e].length>o&&(o=t.footer[e].length);for(var r=0,a=t.body.length;r<a;r++)if(o<(n=-1!==(n=null!==(n=t.body[r][e])&&n!==b?n.toString():"").indexOf("\n")?((n=n.split("\n")).sort(function(t,e){return e.length-t.length}),n[0].length):n.length)&&(o=n),40<o)return 52;return 6<(o*=1.3)?o:6}var I,t=p.fn.dataTable,s="undefined"!=typeof self&&self||void 0!==m&&m||this.content;if(void 0===s||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))I=void 0;else{function d(t){(s.setImmediate||s.setTimeout)(function(){throw t},0)}function c(t){setTimeout(function(){"string"==typeof t?(s.URL||s.webkitURL||s).revokeObjectURL(t):t.remove()},4e4)}function f(t){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t}function o(t,e,n){n||(t=f(t));function o(){for(var t,e=(t=[].concat(t=["writestart","progress","write","writeend"])).length;e--;){var n=a["on"+t[e]];if("function"==typeof n)try{n.call(a,a)}catch(t){d(t)}}}var r,a=this;n="application/octet-stream"===t.type;if(a.readyState=a.INIT,w)r=(s.URL||s.webkitURL||s).createObjectURL(t),setTimeout(function(){h.href=r,h.download=e;var t=new MouseEvent("click");h.dispatchEvent(t),o(),c(r),a.readyState=a.DONE});else if((_||n&&C)&&s.FileReader){var l=new FileReader;l.onloadend=function(){var t=_?l.result:l.result.replace(/^data:[^;]*;/,"data:attachment/file;");s.open(t,"_blank")||(s.location.href=t),a.readyState=a.DONE,o()},l.readAsDataURL(t),a.readyState=a.INIT}else r=r||(s.URL||s.webkitURL||s).createObjectURL(t),n?s.location.href=r:s.open(r,"_blank")||(s.location.href=r),a.readyState=a.DONE,o(),c(r)}var h=s.document.createElementNS("http://www.w3.org/1999/xhtml","a"),w="download"in h,C=/constructor/i.test(s.HTMLElement)||s.safari,_=/CriOS\/[\d]+/.test(navigator.userAgent),e=o.prototype;I="undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(t,e,n){return e=e||t.name||"download",n||(t=f(t)),navigator.msSaveOrOpenBlob(t,e)}:(e.abort=function(){},e.readyState=e.INIT=0,e.WRITING=1,e.DONE=2,e.error=e.onwritestart=e.onprogress=e.onwrite=e.onabort=e.onerror=e.onwriteend=null,function(t,e,n){return new o(t,e||t.name||"download",n)})}t.fileSave=I;function T(t){return t.newline?t.newline:navigator.userAgent.match(/Windows/)?"\r\n":"\n"}function F(t,e){function n(t){for(var e="",n=0,o=t.length;n<o;n++)0<n&&(e+=l),e+=a?a+(""+t[n]).replace(i,s+a)+a:t[n];return e}for(var o=T(e),r=t.buttons.exportData(e.exportOptions),a=e.fieldBoundary,l=e.fieldSeparator,i=RegExp(a,"g"),s=e.escapeChar!==b?e.escapeChar:"\\",d=e.header?n(r.header)+o:"",c=e.footer&&r.footer?o+n(r.footer):"",u=[],f=0,h=r.body.length;f<h;f++)u.push(n(r.body[f]));return{str:d+u.join(o)+c,rows:u.length}}function S(){if(-1===navigator.userAgent.indexOf("Safari")||-1!==navigator.userAgent.indexOf("Chrome")||-1!==navigator.userAgent.indexOf("Opera"))return!1;var t=navigator.userAgent.match(/AppleWebKit\/(\d+\.\d+)/);return!!(t&&1<t.length&&1*t[1]<603.1)}try{var D,A=new XMLSerializer}catch(t){}var R={"_rels/.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',"xl/_rels/workbook.xml.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',"[Content_Types].xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',"xl/workbook.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="" sheetId="1" r:id="rId1"/></sheets></workbook>',"xl/worksheets/sheet1.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/><mergeCells count="0"/></worksheet>',"xl/styles.xml":'<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="6"><numFmt numFmtId="164" formatCode="#,##0.00_- [$$-45C]"/><numFmt numFmtId="165" formatCode="&quot;£&quot;#,##0.00"/><numFmt numFmtId="166" formatCode="[$€-2] #,##0.00"/><numFmt numFmtId="167" formatCode="0.0%"/><numFmt numFmtId="168" formatCode="#,##0;(#,##0)"/><numFmt numFmtId="169" formatCode="#,##0.00;(#,##0.00)"/></numFmts><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill/><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="67"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="right"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="fill"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="9"   fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="166" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="167" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="168" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="169" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="1" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="2" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>'},B=[{match:/^\-?\d+\.\d%$/,style:60,fmt:function(t){return t/100}},{match:/^\-?\d+\.?\d*%$/,style:56,fmt:function(t){return t/100}},{match:/^\-?\$[\d,]+.?\d*$/,style:57},{match:/^\-?£[\d,]+.?\d*$/,style:58},{match:/^\-?€[\d,]+.?\d*$/,style:59},{match:/^\-?\d+$/,style:65},{match:/^\-?\d+\.\d{2}$/,style:66},{match:/^\([\d,]+\)$/,style:61,fmt:function(t){return-1*t.replace(/[\(\)]/g,"")}},{match:/^\([\d,]+\.\d{2}\)$/,style:62,fmt:function(t){return-1*t.replace(/[\(\)]/g,"")}},{match:/^\-?[\d,]+$/,style:63},{match:/^\-?[\d,]+\.\d{2}$/,style:64}];return t.ext.buttons.copyHtml5={className:"buttons-copy buttons-html5",text:function(t){return t.i18n("buttons.copy","Copy")},action:function(t,e,n,o){this.processing(!0);var r=this,a=(t=F(e,o),e.buttons.exportInfo(o)),l=T(o),i=t.str;n=p("<div/>").css({height:1,width:1,overflow:"hidden",position:"fixed",top:0,left:0});if(a.title&&(i=a.title+l+l+i),a.messageTop&&(i=a.messageTop+l+l+i),a.messageBottom&&(i=i+l+l+a.messageBottom),o.customize&&(i=o.customize(i,o)),o=p("<textarea readonly/>").val(i).appendTo(n),u.queryCommandSupported("copy")){n.appendTo(e.table().container()),o[0].focus(),o[0].select();try{var s=u.execCommand("copy");if(n.remove(),s)return e.buttons.info(e.i18n("buttons.copyTitle","Copy to clipboard"),e.i18n("buttons.copySuccess",{1:"Copied one row to clipboard",_:"Copied %d rows to clipboard"},t.rows),2e3),void this.processing(!1)}catch(t){}}s=p("<span>"+e.i18n("buttons.copyKeys","Press <i>ctrl</i> or <i>⌘</i> + <i>C</i> to copy the table data<br>to your system clipboard.<br><br>To cancel, click this message or press escape.")+"</span>").append(n),e.buttons.info(e.i18n("buttons.copyTitle","Copy to clipboard"),s,0),o[0].focus(),o[0].select();function d(){c.off("click.buttons-copy"),p(u).off(".buttons-copy"),e.buttons.info(!1)}var c=p(s).closest(".dt-button-info");c.on("click.buttons-copy",d),p(u).on("keydown.buttons-copy",function(t){27===t.keyCode&&(d(),r.processing(!1))}).on("copy.buttons-copy cut.buttons-copy",function(){d(),r.processing(!1)})},exportOptions:{},fieldSeparator:"\t",fieldBoundary:"",header:!0,footer:!1,title:"*",messageTop:"*",messageBottom:"*"},t.ext.buttons.csvHtml5={bom:!1,className:"buttons-csv buttons-html5",available:function(){return m.FileReader!==b&&m.Blob},text:function(t){return t.i18n("buttons.csv","CSV")},action:function(t,e,n,o){this.processing(!0),t=F(e,o).str,e=e.buttons.exportInfo(o),n=o.charset,o.customize&&(t=o.customize(t,o)),n=!1!==n?(n=n||(u.characterSet||u.charset))&&";charset="+n:"",o.bom&&(t="\ufeff"+t),I(new Blob([t],{type:"text/csv"+n}),e.filename,!0),this.processing(!1)},filename:"*",extension:".csv",exportOptions:{},fieldSeparator:",",fieldBoundary:'"',escapeChar:'"',charset:null,header:!0,footer:!1},t.ext.buttons.excelHtml5={className:"buttons-excel buttons-html5",available:function(){return m.FileReader!==b&&(g||m.JSZip)!==b&&!S()&&A},text:function(t){return t.i18n("buttons.excel","Excel")},action:function(t,e,n,o){this.processing(!0);var s,d,r=this,c=0,u=(t=function(t){return p.parseXML(R[t])})("xl/worksheets/sheet1.xml"),f=u.getElementsByTagName("sheetData")[0],a=(t={_rels:{".rels":t("_rels/.rels")},xl:{_rels:{"workbook.xml.rels":t("xl/_rels/workbook.xml.rels")},"workbook.xml":t("xl/workbook.xml"),"styles.xml":t("xl/styles.xml"),worksheets:{"sheet1.xml":u}},"[Content_Types].xml":t("[Content_Types].xml")},n=e.buttons.exportData(o.exportOptions),function(t){d=v(u,"row",{attr:{r:s=c+1}});for(var e=0,n=t.length;e<n;e++){var o=y(e)+""+s,r=null;if(null!==t[e]&&t[e]!==b&&""!==t[e]){t[e]=p.trim(t[e]);for(var a=0,l=B.length;a<l;a++){var i=B[a];if(t[e].match&&!t[e].match(/^0\d+/)&&t[e].match(i.match)){r=t[e].replace(/[^\d\.\-]/g,""),i.fmt&&(r=i.fmt(r)),r=v(u,"c",{attr:{r:o,s:i.style},children:[v(u,"v",{text:r})]});break}}r=r||("number"==typeof t[e]||t[e].match&&t[e].match(/^-?\d+(\.\d+)?$/)&&!t[e].match(/^0\d+/)?v(u,"c",{attr:{t:"n",r:o},children:[v(u,"v",{text:t[e]})]}):(i=t[e].replace?t[e].replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g,""):t[e],v(u,"c",{attr:{t:"inlineStr",r:o},children:{row:v(u,"is",{children:{row:v(u,"t",{text:i})}})}}))),d.appendChild(r)}}f.appendChild(d),c++});p("sheets sheet",t.xl["workbook.xml"]).attr("name",function(t){var e="Sheet1";return t.sheetName&&(e=t.sheetName.replace(/[\[\]\*\/\\\?\:]/g,"")),e}(o)),o.customizeData&&o.customizeData(n);var l=function(t,e){var n=p("mergeCells",u);n[0].appendChild(v(u,"mergeCell",{attr:{ref:"A"+t+":"+y(e)+t}})),n.attr("count",n.attr("count")+1),p("row:eq("+(t-1)+") c",u).attr("s","51")},i=e.buttons.exportInfo(o);i.title&&(a([i.title],c),l(c,n.header.length-1)),i.messageTop&&(a([i.messageTop],c),l(c,n.header.length-1)),o.header&&(a(n.header,c),p("row:last c",u).attr("s","2"));e=0;for(var h=n.body.length;e<h;e++)a(n.body[e],c);for(o.footer&&n.footer&&(a(n.footer,c),p("row:last c",u).attr("s","2")),i.messageBottom&&(a([i.messageBottom],c),l(c,n.header.length-1)),e=v(u,"cols"),p("worksheet",u).prepend(e),a=0,l=n.header.length;a<l;a++)e.appendChild(v(u,"col",{attr:{min:a+1,max:a+1,width:x(n,a),customWidth:1}}));o.customize&&o.customize(t),n={type:"blob",mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"},function i(s,t){D===b&&(D=-1===A.serializeToString(p.parseXML(R["xl/worksheets/sheet1.xml"])).indexOf("xmlns:r")),p.each(t,function(t,e){if(p.isPlainObject(e))i(n=s.folder(t),e);else{if(D){var n,o,r,a=[];for(o=(n=e.childNodes[0]).attributes.length-1;0<=o;o--){r=n.attributes[o].nodeName;var l=n.attributes[o].nodeValue;-1!==r.indexOf(":")&&(a.push({name:r,value:l}),n.removeAttribute(r))}for(o=0,r=a.length;o<r;o++)(l=e.createAttribute(a[o].name.replace(":","_dt_b_namespace_token_"))).value=a[o].value,n.setAttributeNode(l)}n=A.serializeToString(e),D&&(-1===n.indexOf("<?xml")&&(n='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'+n),n=n.replace(/_dt_b_namespace_token_/g,":")),n=n.replace(/<([^<>]*?) xmlns=""([^<>]*?)>/g,"<$1 $2>"),s.file(t,n)}})}(o=new(g||m.JSZip),t),o.generateAsync?o.generateAsync(n).then(function(t){I(t,i.filename),r.processing(!1)}):(I(o.generate(n),i.filename),this.processing(!1))},filename:"*",extension:".xlsx",exportOptions:{},header:!0,footer:!1,title:"*",messageTop:"*",messageBottom:"*"},t.ext.buttons.pdfHtml5={className:"buttons-pdf buttons-html5",available:function(){return m.FileReader!==b&&(i||m.pdfMake)},text:function(t){return t.i18n("buttons.pdf","PDF")},action:function(t,e,n,o){this.processing(!0);var r=this,a=(t=e.buttons.exportData(o.exportOptions),e.buttons.exportInfo(o));e=[];o.header&&e.push(p.map(t.header,function(t){return{text:"string"==typeof t?t:t+"",style:"tableHeader"}}));var l=0;for(n=t.body.length;l<n;l++)e.push(p.map(t.body[l],function(t){return{text:"string"==typeof t?t:t+"",style:l%2?"tableBodyEven":"tableBodyOdd"}}));o.footer&&t.footer&&e.push(p.map(t.footer,function(t){return{text:"string"==typeof t?t:t+"",style:"tableFooter"}})),e={pageSize:o.pageSize,pageOrientation:o.orientation,content:[{table:{headerRows:1,body:e},layout:"noBorders"}],styles:{tableHeader:{bold:!0,fontSize:11,color:"white",fillColor:"#2d4154",alignment:"center"},tableBodyEven:{},tableBodyOdd:{fillColor:"#f3f3f3"},tableFooter:{bold:!0,fontSize:11,color:"white",fillColor:"#2d4154"},title:{alignment:"center",fontSize:15},message:{}},defaultStyle:{fontSize:10}},a.messageTop&&e.content.unshift({text:a.messageTop,style:"message",margin:[0,0,0,12]}),a.messageBottom&&e.content.push({text:a.messageBottom,style:"message",margin:[0,0,0,12]}),a.title&&e.content.unshift({text:a.title,style:"title",margin:[0,0,0,12]}),o.customize&&o.customize(e,o),e=(i||m.pdfMake).createPdf(e),"open"!==o.download||S()?e.getBuffer(function(t){t=new Blob([t],{type:"application/pdf"}),I(t,a.filename),r.processing(!1)}):(e.open(),this.processing(!1))},title:"*",filename:"*",extension:".pdf",exportOptions:{},orientation:"portrait",pageSize:"A4",header:!0,footer:!1,messageTop:"*",messageBottom:"*",customize:null,download:"download"},t.Buttons}),function(n){"function"==typeof define&&define.amd?define("datatables.net-buttons-print",["jquery","datatables.net","datatables.net-buttons"],function(t){return n(t,window,document)}):"object"==typeof exports?module.exports=function(t,e){return t=t||window,e&&e.fn.dataTable||(e=require("datatables.net")(t,e).$),e.fn.dataTable.Buttons||require("datatables.net-buttons")(t,e),n(e,t,t.document)}:n(jQuery,window,document)}(function(d,c,t){function u(t){return n.href=t,-1===(t=n.host).indexOf("/")&&0!==n.pathname.indexOf("/")&&(t+="/"),n.protocol+"//"+t+n.pathname+n.search}var e=d.fn.dataTable,n=t.createElement("a");return e.ext.buttons.print={className:"buttons-print",text:function(t){return t.i18n("buttons.print","Print")},action:function(t,e,n,o){function r(t,e){for(var n="<tr>",o=0,r=t.length;o<r;o++)n+="<"+e+">"+t[o]+"</"+e+">";return n+"</tr>"}t=e.buttons.exportData(d.extend({decodeEntities:!1},o.exportOptions)),n=e.buttons.exportInfo(o),e='<table class="'+e.table().node().className+'">';o.header&&(e+="<thead>"+r(t.header,"th")+"</thead>");e+="<tbody>";for(var a=0,l=t.body.length;a<l;a++)e+=r(t.body[a],"td");e+="</tbody>",o.footer&&t.footer&&(e+="<tfoot>"+r(t.footer,"th")+"</tfoot>");e+="</table>";var i=c.open("","");i.document.close();var s="<title>"+n.title+"</title>";d("style, link").each(function(){var t=s,e=d(this).clone()[0];"link"===e.nodeName.toLowerCase()&&(e.href=u(e.href)),s=t+e.outerHTML});try{i.document.head.innerHTML=s}catch(t){d(i.document.head).html(s)}i.document.body.innerHTML="<h1>"+n.title+"</h1><div>"+(n.messageTop||"")+"</div>"+e+"<div>"+(n.messageBottom||"")+"</div>",d(i.document.body).addClass("dt-print-view"),d("img",i.document.body).each(function(t,e){e.setAttribute("src",u(e.getAttribute("src")))}),o.customize&&o.customize(i),setTimeout(function(){o.autoPrint&&(i.print(),i.close())},1e3)},title:"*",messageTop:"*",messageBottom:"*",exportOptions:{},header:!0,footer:!1,autoPrint:!0,customize:null},e.Buttons}),function(n){"function"==typeof define&&define.amd?define("datatables.net-buttons-bs",["jquery","datatables.net-bs","datatables.net-buttons"],function(t){return n(t,window,document)}):"object"==typeof exports?module.exports=function(t,e){return t=t||window,e&&e.fn.dataTable||(e=require("datatables.net-bs")(t,e).$),e.fn.dataTable.Buttons||require("datatables.net-buttons")(t,e),n(e,t.document)}:n(jQuery,window,document)}(function(t){var e=t.fn.dataTable;return t.extend(!0,e.Buttons.defaults,{dom:{container:{className:"dt-buttons btn-group"},button:{className:"btn btn-default"},collection:{tag:"ul",className:"dt-button-collection dropdown-menu",button:{tag:"li",className:"dt-button",active:"active",disabled:"disabled"},buttonLiner:{tag:"a",className:""}}}}),e.ext.buttons.collection.text=function(t){return t.i18n("buttons.collection",'Collection <span class="caret"/>')},e.Buttons}),function(n){"function"==typeof define&&define.amd?define("datatables.net-colreorder",["jquery","datatables.net"],function(t){return n(t,window,document)}):"object"==typeof exports?module.exports=function(t,e){return t=t||window,e&&e.fn.dataTable||(e=require("datatables.net")(t,e).$),n(e,t,t.document)}:n(jQuery,window,document)}(function(h,t,a,p){function m(t){for(var e=[],n=0,o=t.length;n<o;n++)e[t[n]]=n;return e}function g(t,e,n){e=t.splice(e,1)[0],t.splice(n,0,e)}function b(t,e,n){for(var o=[],r=0,a=t.childNodes.length;r<a;r++)1==t.childNodes[r].nodeType&&o.push(t.childNodes[r]);e=o[e],null!==n?t.insertBefore(e,o[n]):t.appendChild(e)}var r=h.fn.dataTable;h.fn.dataTableExt.oApi.fnColReorder=function(n,t,e,o,r){var a,l,i,s,d,c,u=n.aoColumns.length;if(d=function(t,e,n){if(t[e]&&"function"!=typeof t[e]){var o=t[e].split("."),r=o.shift();isNaN(1*r)||(t[e]=n[1*r]+"."+o.join("."))}},t!=e)if(t<0||u<=t)this.oApi._fnLog(n,1,"ColReorder 'from' index is out of bounds: "+t);else if(e<0||u<=e)this.oApi._fnLog(n,1,"ColReorder 'to' index is out of bounds: "+e);else{for(i=[],a=0,l=u;a<l;a++)i[a]=a;g(i,t,e);var f=m(i);for(a=0,l=n.aaSorting.length;a<l;a++)n.aaSorting[a][0]=f[n.aaSorting[a][0]];if(null!==n.aaSortingFixed)for(a=0,l=n.aaSortingFixed.length;a<l;a++)n.aaSortingFixed[a][0]=f[n.aaSortingFixed[a][0]];for(a=0,l=u;a<l;a++){for(i=0,s=(c=n.aoColumns[a]).aDataSort.length;i<s;i++)c.aDataSort[i]=f[c.aDataSort[i]];c.idx=f[c.idx]}for(h.each(n.aLastSort,function(t,e){n.aLastSort[t].src=f[e.src]}),a=0,l=u;a<l;a++)"number"==typeof(c=n.aoColumns[a]).mData?c.mData=f[c.mData]:h.isPlainObject(c.mData)&&(d(c.mData,"_",f),d(c.mData,"filter",f),d(c.mData,"sort",f),d(c.mData,"type",f));if(n.aoColumns[t].bVisible){for(d=this.oApi._fnColumnIndexToVisible(n,t),s=null,a=e<t?e:e+1;null===s&&a<u;)s=this.oApi._fnColumnIndexToVisible(n,a),a++;for(a=0,l=(i=n.nTHead.getElementsByTagName("tr")).length;a<l;a++)b(i[a],d,s);if(null!==n.nTFoot)for(a=0,l=(i=n.nTFoot.getElementsByTagName("tr")).length;a<l;a++)b(i[a],d,s);for(a=0,l=n.aoData.length;a<l;a++)null!==n.aoData[a].nTr&&b(n.aoData[a].nTr,d,s)}for(g(n.aoColumns,t,e),a=0,l=u;a<l;a++)n.oApi._fnColumnOptions(n,a,{});for(g(n.aoPreSearchCols,t,e),a=0,l=n.aoData.length;a<l;a++){if(c=(s=n.aoData[a]).anCells)for(g(c,t,e),i=0,d=c.length;i<d;i++)c[i]&&c[i]._DT_CellIndex&&(c[i]._DT_CellIndex.column=i);"dom"!==s.src&&h.isArray(s._aData)&&g(s._aData,t,e)}for(a=0,l=n.aoHeader.length;a<l;a++)g(n.aoHeader[a],t,e);if(null!==n.aoFooter)for(a=0,l=n.aoFooter.length;a<l;a++)g(n.aoFooter[a],t,e);for(!r&&r!==p||h.fn.dataTable.Api(n).rows().invalidate(),a=0,l=u;a<l;a++)h(n.aoColumns[a].nTh).off("click.DT"),this.oApi._fnSortAttachListener(n,n.aoColumns[a].nTh,a);h(n.oInstance).trigger("column-reorder.dt",[n,{from:t,to:e,mapping:f,drop:o,iFrom:t,iTo:e,aiInvertMapping:f}])}};var l=function(t,e){var n=new h.fn.dataTable.Api(t).settings()[0];if(n._colReorder)return n._colReorder;!0===e&&(e={});var o=h.fn.dataTable.camelToHungarian;return o&&(o(l.defaults,l.defaults,!0),o(l.defaults,e||{})),this.s={dt:null,init:h.extend(!0,{},l.defaults,e),fixed:0,fixedRight:0,reorderCallback:null,mouse:{startX:-1,startY:-1,offsetX:-1,offsetY:-1,target:-1,targetIndex:-1,fromIndex:-1},aoTargets:[]},this.dom={drag:null,pointer:null},this.s.dt=n,(this.s.dt._colReorder=this)._fnConstruct(),this};return h.extend(l.prototype,{fnReset:function(){return this._fnOrderColumns(this.fnOrder()),this},fnGetCurrentOrder:function(){return this.fnOrder()},fnOrder:function(t,e){var n,o,r=[],a=this.s.dt.aoColumns;if(t===p){for(n=0,o=a.length;n<o;n++)r.push(a[n]._ColReorder_iOrigCol);return r}if(e){for(a=this.fnOrder(),n=0,o=t.length;n<o;n++)r.push(h.inArray(t[n],a));t=r}return this._fnOrderColumns(m(t)),this},fnTranspose:function(t,e){e=e||"toCurrent";var n=this.fnOrder(),o=this.s.dt.aoColumns;return"toCurrent"===e?h.isArray(t)?h.map(t,function(t){return h.inArray(t,n)}):h.inArray(t,n):h.isArray(t)?h.map(t,function(t){return o[t]._ColReorder_iOrigCol}):o[t]._ColReorder_iOrigCol},_fnConstruct:function(){var t,n=this,e=this.s.dt.aoColumns.length,o=this.s.dt.nTable;for(this.s.init.iFixedColumns&&(this.s.fixed=this.s.init.iFixedColumns),this.s.init.iFixedColumnsLeft&&(this.s.fixed=this.s.init.iFixedColumnsLeft),this.s.fixedRight=this.s.init.iFixedColumnsRight?this.s.init.iFixedColumnsRight:0,this.s.init.fnReorderCallback&&(this.s.reorderCallback=this.s.init.fnReorderCallback),t=0;t<e;t++)t>this.s.fixed-1&&t<e-this.s.fixedRight&&this._fnMouseListener(t,this.s.dt.aoColumns[t].nTh),this.s.dt.aoColumns[t]._ColReorder_iOrigCol=t;this.s.dt.oApi._fnCallbackReg(this.s.dt,"aoStateSaveParams",function(t,e){n._fnStateSave.call(n,e)},"ColReorder_State");var r=null;if(this.s.init.aiOrder&&(r=this.s.init.aiOrder.slice()),this.s.dt.oLoadedState&&void 0!==this.s.dt.oLoadedState.ColReorder&&this.s.dt.oLoadedState.ColReorder.length==this.s.dt.aoColumns.length&&(r=this.s.dt.oLoadedState.ColReorder),r)if(n.s.dt._bInitComplete)e=m(r),n._fnOrderColumns.call(n,e);else{var a=!1;h(o).on("draw.dt.colReorder",function(){if(!n.s.dt._bInitComplete&&!a){a=!0;var t=m(r);n._fnOrderColumns.call(n,t)}})}else this._fnSetColumnIndexes();h(o).on("destroy.dt.colReorder",function(){h(o).off("destroy.dt.colReorder draw.dt.colReorder"),h(n.s.dt.nTHead).find("*").off(".ColReorder"),h.each(n.s.dt.aoColumns,function(t,e){h(e.nTh).removeAttr("data-column-index")}),n.s.dt._colReorder=null,n.s=null})},_fnOrderColumns:function(t){var e=!1;if(t.length!=this.s.dt.aoColumns.length)this.s.dt.oInstance.oApi._fnLog(this.s.dt,1,"ColReorder - array reorder does not match known number of columns. Skipping.");else{for(var n=0,o=t.length;n<o;n++){var r=h.inArray(n,t);n!=r&&(g(t,r,n),this.s.dt.oInstance.fnColReorder(r,n,!0,!1),e=!0)}h.fn.dataTable.Api(this.s.dt).rows().invalidate(),this._fnSetColumnIndexes(),e&&(""===this.s.dt.oScroll.sX&&""===this.s.dt.oScroll.sY||this.s.dt.oInstance.fnAdjustColumnSizing(!1),this.s.dt.oInstance.oApi._fnSaveState(this.s.dt),null!==this.s.reorderCallback&&this.s.reorderCallback.call(this))}},_fnStateSave:function(t){var e,n,o,r=this.s.dt.aoColumns;if(t.ColReorder=[],t.aaSorting){for(e=0;e<t.aaSorting.length;e++)t.aaSorting[e][0]=r[t.aaSorting[e][0]]._ColReorder_iOrigCol;var a=h.extend(!0,[],t.aoSearchCols);for(e=0,n=r.length;e<n;e++)o=r[e]._ColReorder_iOrigCol,t.aoSearchCols[o]=a[e],t.abVisCols[o]=r[e].bVisible,t.ColReorder.push(o)}else if(t.order){for(e=0;e<t.order.length;e++)t.order[e][0]=r[t.order[e][0]]._ColReorder_iOrigCol;for(a=h.extend(!0,[],t.columns),e=0,n=r.length;e<n;e++)o=r[e]._ColReorder_iOrigCol,t.columns[o]=a[e],t.ColReorder.push(o)}},_fnMouseListener:function(t,e){var n=this;h(e).on("mousedown.ColReorder",function(t){n._fnMouseDown.call(n,t,e)}).on("touchstart.ColReorder",function(t){n._fnMouseDown.call(n,t,e)})},_fnMouseDown:function(t,e){var n=this,o=h(t.target).closest("th, td").offset(),r=parseInt(h(e).attr("data-column-index"),10);r!==p&&(this.s.mouse.startX=this._fnCursorPosition(t,"pageX"),this.s.mouse.startY=this._fnCursorPosition(t,"pageY"),this.s.mouse.offsetX=this._fnCursorPosition(t,"pageX")-o.left,this.s.mouse.offsetY=this._fnCursorPosition(t,"pageY")-o.top,this.s.mouse.target=this.s.dt.aoColumns[r].nTh,this.s.mouse.targetIndex=r,this.s.mouse.fromIndex=r,this._fnRegions(),h(a).on("mousemove.ColReorder touchmove.ColReorder",function(t){n._fnMouseMove.call(n,t)}).on("mouseup.ColReorder touchend.ColReorder",function(t){n._fnMouseUp.call(n,t)}))},_fnMouseMove:function(t){if(null===this.dom.drag){if(Math.pow(Math.pow(this._fnCursorPosition(t,"pageX")-this.s.mouse.startX,2)+Math.pow(this._fnCursorPosition(t,"pageY")-this.s.mouse.startY,2),.5)<5)return;this._fnCreateDragNode()}this.dom.drag.css({left:this._fnCursorPosition(t,"pageX")-this.s.mouse.offsetX,top:this._fnCursorPosition(t,"pageY")-this.s.mouse.offsetY});for(var e=!1,n=this.s.mouse.toIndex,o=1,r=this.s.aoTargets.length;o<r;o++)if(this._fnCursorPosition(t,"pageX")<this.s.aoTargets[o-1].x+(this.s.aoTargets[o].x-this.s.aoTargets[o-1].x)/2){this.dom.pointer.css("left",this.s.aoTargets[o-1].x),this.s.mouse.toIndex=this.s.aoTargets[o-1].to,e=!0;break}e||(this.dom.pointer.css("left",this.s.aoTargets[this.s.aoTargets.length-1].x),this.s.mouse.toIndex=this.s.aoTargets[this.s.aoTargets.length-1].to),this.s.init.bRealtime&&n!==this.s.mouse.toIndex&&(this.s.dt.oInstance.fnColReorder(this.s.mouse.fromIndex,this.s.mouse.toIndex,!1),this.s.mouse.fromIndex=this.s.mouse.toIndex,this._fnRegions())},_fnMouseUp:function(){h(a).off(".ColReorder"),null!==this.dom.drag&&(this.dom.drag.remove(),this.dom.pointer.remove(),this.dom.drag=null,this.dom.pointer=null,this.s.dt.oInstance.fnColReorder(this.s.mouse.fromIndex,this.s.mouse.toIndex,!0),this._fnSetColumnIndexes(),""===this.s.dt.oScroll.sX&&""===this.s.dt.oScroll.sY||this.s.dt.oInstance.fnAdjustColumnSizing(!1),this.s.dt.oInstance.oApi._fnSaveState(this.s.dt),null!==this.s.reorderCallback&&this.s.reorderCallback.call(this))},_fnRegions:function(){var t=this.s.dt.aoColumns;this.s.aoTargets.splice(0,this.s.aoTargets.length),this.s.aoTargets.push({x:h(this.s.dt.nTable).offset().left,to:0});for(var e=0,n=this.s.aoTargets[0].x,o=0,r=t.length;o<r;o++)o!=this.s.mouse.fromIndex&&e++,t[o].bVisible&&"none"!==t[o].nTh.style.display&&(n+=h(t[o].nTh).outerWidth(),this.s.aoTargets.push({x:n,to:e}));0!==this.s.fixedRight&&this.s.aoTargets.splice(this.s.aoTargets.length-this.s.fixedRight),0!==this.s.fixed&&this.s.aoTargets.splice(0,this.s.fixed)},_fnCreateDragNode:function(){var t=""!==this.s.dt.oScroll.sX||""!==this.s.dt.oScroll.sY,e=this.s.dt.aoColumns[this.s.mouse.targetIndex].nTh,n=e.parentNode,o=n.parentNode,r=o.parentNode,a=h(e).clone();this.dom.drag=h(r.cloneNode(!1)).addClass("DTCR_clonedTable").append(h(o.cloneNode(!1)).append(h(n.cloneNode(!1)).append(a[0]))).css({position:"absolute",top:0,left:0,width:h(e).outerWidth(),height:h(e).outerHeight()}).appendTo("body"),this.dom.pointer=h("<div></div>").addClass("DTCR_pointer").css({position:"absolute",top:t?h("div.dataTables_scroll",this.s.dt.nTableWrapper).offset().top:h(this.s.dt.nTable).offset().top,height:t?h("div.dataTables_scroll",this.s.dt.nTableWrapper).height():h(this.s.dt.nTable).height()}).appendTo("body")},_fnSetColumnIndexes:function(){h.each(this.s.dt.aoColumns,function(t,e){h(e.nTh).attr("data-column-index",t)})},_fnCursorPosition:function(t,e){return-1!==t.type.indexOf("touch")?t.originalEvent.touches[0][e]:t[e]}}),l.defaults={aiOrder:null,bRealtime:!0,iFixedColumnsLeft:0,iFixedColumnsRight:0,fnReorderCallback:null},l.version="1.4.1",h.fn.dataTable.ColReorder=l,h.fn.DataTable.ColReorder=l,"function"==typeof h.fn.dataTable&&"function"==typeof h.fn.dataTableExt.fnVersionCheck&&h.fn.dataTableExt.fnVersionCheck("1.10.8")?h.fn.dataTableExt.aoFeatures.push({fnInit:function(t){var e=t.oInstance;return t._colReorder?e.oApi._fnLog(t,1,"ColReorder attempted to initialise twice. Ignoring second"):(e=t.oInit,new l(t,e.colReorder||e.oColReorder||{})),null},cFeature:"R",sFeature:"ColReorder"}):alert("Warning: ColReorder requires DataTables 1.10.8 or greater - www.datatables.net/download"),h(a).on("preInit.dt.colReorder",function(t,e){if("dt"===t.namespace){var n=e.oInit.colReorder,o=r.defaults.colReorder;(n||o)&&(o=h.extend({},n,o),!1!==n&&new l(e,o))}}),h.fn.dataTable.Api.register("colReorder.reset()",function(){return this.iterator("table",function(t){t._colReorder.fnReset()})}),h.fn.dataTable.Api.register("colReorder.order()",function(e,n){return e?this.iterator("table",function(t){t._colReorder.fnOrder(e,n)}):this.context.length?this.context[0]._colReorder.fnOrder():null}),h.fn.dataTable.Api.register("colReorder.transpose()",function(t,e){return this.context.length&&this.context[0]._colReorder?this.context[0]._colReorder.fnTranspose(t,e):t}),h.fn.dataTable.Api.register("colReorder.move()",function(t,e,n,o){return this.context.length&&this.context[0]._colReorder.s.dt.oInstance.fnColReorder(t,e,n,o),this}),l}),function(n){"function"==typeof define&&define.amd?define("datatables.net-rowreorder",["jquery","datatables.net"],function(t){return n(t,window,document)}):"object"==typeof exports?module.exports=function(t,e){return t=t||window,e&&e.fn.dataTable||(e=require("datatables.net")(t,e).$),n(e,t,t.document)}:n(jQuery,window,document)}(function(b,l,y,t){var r=b.fn.dataTable,a=function(t,e){if(!r.versionCheck||!r.versionCheck("1.10.8"))throw"DataTables RowReorder requires DataTables 1.10.8 or newer";this.c=b.extend(!0,{},r.defaults.rowReorder,a.defaults,e),this.s={bodyTop:null,dt:new r.Api(t),getDataFn:r.ext.oApi._fnGetObjectDataFn(this.c.dataSrc),middles:null,scroll:{},scrollInterval:null,setDataFn:r.ext.oApi._fnSetObjectDataFn(this.c.dataSrc),start:{top:0,left:0,offsetTop:0,offsetLeft:0,nodes:[]},windowHeight:0,documentOuterHeight:0,domCloneOuterHeight:0},this.dom={clone:null,dtScroll:b("div.dataTables_scrollBody",this.s.dt.table().container())};var n=this.s.dt.settings()[0],o=n.rowreorder;if(o)return o;(n.rowreorder=this)._constructor()};b.extend(a.prototype,{_constructor:function(){var o=this,r=this.s.dt,t=b(r.table().node());"static"===t.css("position")&&t.css("position","relative"),b(r.table().container()).on("mousedown.rowReorder touchstart.rowReorder",this.c.selector,function(t){if(o.c.enable){var e=b(this).closest("tr"),n=r.row(e);if(n.any())return o._emitEvent("pre-row-reorder",{node:n.node(),index:n.index()}),o._mouseDown(t,e),!1}}),r.on("destroy.rowReorder",function(){b(r.table().container()).off(".rowReorder"),r.off(".rowReorder")})},_cachePositions:function(){var n=this.s.dt,e=b(n.table().node()).find("thead").outerHeight(),t=b.unique(n.rows({page:"current"}).nodes().toArray()),o=b.map(t,function(t){return b(t).position().top-e});t=b.map(o,function(t,e){return o.length<e-1?(t+o[e+1])/2:(t+t+b(n.row(":last-child").node()).outerHeight())/2});this.s.middles=t,this.s.bodyTop=b(n.table().body()).offset().top,this.s.windowHeight=b(l).height(),this.s.documentOuterHeight=b(y).outerHeight()},_clone:function(t){var e=b(this.s.dt.table().node().cloneNode(!1)).addClass("dt-rowReorder-float").append("<tbody/>").append(t.clone(!1)),n=t.outerWidth(),o=t.outerHeight(),r=t.children().map(function(){return b(this).width()});e.width(n).height(o).find("tr").children().each(function(t){this.style.width=r[t]+"px"}),e.appendTo("body"),this.dom.clone=e,this.s.domCloneOuterHeight=e.outerHeight()},_clonePosition:function(t){var e=this.s.start,n=this._eventToPage(t,"Y")-e.top,o=(t=this._eventToPage(t,"X")-e.left,this.c.snapX);n+=e.offsetTop,e=!0===o?e.offsetLeft:"number"==typeof o?e.offsetLeft+o:t+e.offsetLeft;n<0?n=0:n+this.s.domCloneOuterHeight>this.s.documentOuterHeight&&(n=this.s.documentOuterHeight-this.s.domCloneOuterHeight),this.dom.clone.css({top:n,left:e})},_emitEvent:function(e,n){this.s.dt.iterator("table",function(t){b(t.nTable).triggerHandler(e+".dt",n)})},_eventToPage:function(t,e){return-1!==t.type.indexOf("touch")?t.originalEvent.touches[0]["page"+e]:t["page"+e]},_mouseDown:function(t,e){var n=this,o=this.s.dt,r=this.s.start,a=e.offset();r.top=this._eventToPage(t,"Y"),r.left=this._eventToPage(t,"X"),r.offsetTop=a.top,r.offsetLeft=a.left,r.nodes=b.unique(o.rows({page:"current"}).nodes().toArray()),this._cachePositions(),this._clone(e),this._clonePosition(t),(this.dom.target=e).addClass("dt-rowReorder-moving"),b(y).on("mouseup.rowReorder touchend.rowReorder",function(t){n._mouseUp(t)}).on("mousemove.rowReorder touchmove.rowReorder",function(t){n._mouseMove(t)}),b(l).width()===b(y).width()&&b(y.body).addClass("dt-rowReorder-noOverflow"),o=this.dom.dtScroll,this.s.scroll={windowHeight:b(l).height(),windowWidth:b(l).width(),dtTop:o.length?o.offset().top:null,dtLeft:o.length?o.offset().left:null,dtHeight:o.length?o.outerHeight():null,dtWidth:o.length?o.outerWidth():null}},_mouseMove:function(t){this._clonePosition(t);for(var e=this._eventToPage(t,"Y")-this.s.bodyTop,n=this.s.middles,o=null,r=this.s.dt,a=r.table().body(),l=0,i=n.length;l<i;l++)if(e<n[l]){o=l;break}null===o&&(o=n.length),null!==this.s.lastInsert&&this.s.lastInsert===o||(0===o?this.dom.target.prependTo(a):(e=b.unique(r.rows({page:"current"}).nodes().toArray()),o>this.s.lastInsert?this.dom.target.insertAfter(e[o-1]):this.dom.target.insertBefore(e[o])),this._cachePositions(),this.s.lastInsert=o),this._shiftScroll(t)},_mouseUp:function(){var e,n,o=this,r=this.s.dt,a=this.c.dataSrc;this.dom.clone.remove(),this.dom.clone=null,this.dom.target.removeClass("dt-rowReorder-moving"),b(y).off(".rowReorder"),b(y.body).removeClass("dt-rowReorder-noOverflow"),clearInterval(this.s.scrollInterval),this.s.scrollInterval=null;var t=this.s.start.nodes,l=b.unique(r.rows({page:"current"}).nodes().toArray()),i={},s=[],d=[],c=this.s.getDataFn,u=this.s.setDataFn;for(e=0,n=t.length;e<n;e++)if(t[e]!==l[e]){var f=r.row(l[e]).id(),h=r.row(l[e]).data(),p=r.row(t[e]).data();f&&(i[f]=c(p)),s.push({node:l[e],oldData:c(h),newData:c(p),newPosition:e,oldPosition:b.inArray(l[e],t)}),d.push(l[e])}var m=[s,{dataSrc:a,nodes:d,values:i,triggerRow:r.row(this.dom.target)}];this._emitEvent("row-reorder",m);function g(){if(o.c.update){for(e=0,n=s.length;e<n;e++){var t=r.row(s[e].node).data();u(t,s[e].newData),r.columns().every(function(){this.dataSrc()===a&&r.cell(s[e].node,this.index()).invalidate("data")})}o._emitEvent("row-reordered",m),r.draw(!1)}}this.c.editor?(this.c.enable=!1,this.c.editor.edit(d,!1,b.extend({submit:"changed"},this.c.formOptions)).multiSet(a,i).one("submitUnsuccessful.rowReorder",function(){r.draw(!1)}).one("submitSuccess.rowReorder",function(){g()}).one("submitComplete",function(){o.c.enable=!0,o.c.editor.off(".rowReorder")}).submit()):g()},_shiftScroll:function(t){var e,n,o=this,r=this.s.scroll,a=!1,l=t.pageY-y.body.scrollTop;l<65?e=-5:l>r.windowHeight-65&&(e=5),null!==r.dtTop&&t.pageY<r.dtTop+65?n=-5:null!==r.dtTop&&t.pageY>r.dtTop+r.dtHeight-65&&(n=5),e||n?(r.windowVert=e,r.dtVert=n,a=!0):this.s.scrollInterval&&(clearInterval(this.s.scrollInterval),this.s.scrollInterval=null),!this.s.scrollInterval&&a&&(this.s.scrollInterval=setInterval(function(){if(r.windowVert&&(y.body.scrollTop=y.body.scrollTop+r.windowVert),r.dtVert){var t=o.dom.dtScroll[0];r.dtVert&&(t.scrollTop=t.scrollTop+r.dtVert)}},20))}}),a.defaults={dataSrc:0,editor:null,enable:!0,formOptions:{},selector:"td:first-child",snapX:!1,update:!0};var e=b.fn.dataTable.Api;return e.register("rowReorder()",function(){return this}),e.register("rowReorder.enable()",function(e){return e===t&&(e=!0),this.iterator("table",function(t){t.rowreorder&&(t.rowreorder.c.enable=e)})}),e.register("rowReorder.disable()",function(){return this.iterator("table",function(t){t.rowreorder&&(t.rowreorder.c.enable=!1)})}),a.version="1.2.3",b.fn.dataTable.RowReorder=a,b.fn.DataTable.RowReorder=a,b(y).on("init.dt.dtr",function(t,e){if("dt"===t.namespace){var n=e.oInit.rowReorder,o=r.defaults.rowReorder;(n||o)&&(o=b.extend({},n,o),!1!==n&&new a(e,o))}}),a}),function(n){"function"==typeof define&&define.amd?define("datatables.net-fixedcolumns",["jquery","datatables.net"],function(t){return n(t,window,document)}):"object"==typeof exports?module.exports=function(t,e){return t=t||window,e&&e.fn.dataTable||(e=require("datatables.net")(t,e).$),n(e,t,t.document)}:n(jQuery,window,document)}(function(g,i,s,b){var e,r=g.fn.dataTable,d=function(t,e){var n=this;if(this instanceof d){e!==b&&!0!==e||(e={});var o=g.fn.dataTable.camelToHungarian;if(o&&(o(d.defaults,d.defaults,!0),o(d.defaults,e)),o=new g.fn.dataTable.Api(t).settings()[0],this.s={dt:o,iTableColumns:o.aoColumns.length,aiOuterWidths:[],aiInnerWidths:[],rtl:"rtl"===g(o.nTable).css("direction")},this.dom={scroller:null,header:null,body:null,footer:null,grid:{wrapper:null,dt:null,left:{wrapper:null,head:null,body:null,foot:null},right:{wrapper:null,head:null,body:null,foot:null}},clone:{left:{header:null,body:null,footer:null},right:{header:null,body:null,footer:null}}},o._oFixedColumns)throw"FixedColumns already initialised on this table";o._oFixedColumns=this,o._bInitComplete?this._fnConstruct(e):o.oApi._fnCallbackReg(o,"aoInitComplete",function(){n._fnConstruct(e)},"FixedColumns")}else alert("FixedColumns warning: FixedColumns must be initialised with the 'new' keyword.")};return g.extend(d.prototype,{fnUpdate:function(){this._fnDraw(!0)},fnRedrawLayout:function(){this._fnColCalc(),this._fnGridLayout(),this.fnUpdate()},fnRecalculateHeight:function(t){delete t._DTTC_iHeight,t.style.height="auto"},fnSetRowHeight:function(t,e){t.style.height=e+"px"},fnGetPosition:function(t){var e=this.s.dt.oInstance;if(g(t).parents(".DTFC_Cloned").length){if("tr"===t.nodeName.toLowerCase())return t=g(t).index(),e.fnGetPosition(g("tr",this.s.dt.nTBody)[t]);var n=g(t).index();t=g(t.parentNode).index();return[e.fnGetPosition(g("tr",this.s.dt.nTBody)[t]),n,e.oApi._fnVisibleToColumnIndex(this.s.dt,n)]}return e.fnGetPosition(t)},_fnConstruct:function(t){var a=this;if("function"!=typeof this.s.dt.oInstance.fnVersionCheck||!0!==this.s.dt.oInstance.fnVersionCheck("1.8.0"))alert("FixedColumns "+d.VERSION+" required DataTables 1.8.0 or later. Please upgrade your DataTables installation");else if(""===this.s.dt.oScroll.sX)this.s.dt.oInstance.oApi._fnLog(this.s.dt,1,"FixedColumns is not needed (no x-scrolling in DataTables enabled), so no action will be taken. Use 'FixedHeader' for column fixing when scrolling is not enabled");else{this.s=g.extend(!0,this.s,d.defaults,t),t=this.s.dt.oClasses,this.dom.grid.dt=g(this.s.dt.nTable).parents("div."+t.sScrollWrapper)[0],this.dom.scroller=g("div."+t.sScrollBody,this.dom.grid.dt)[0],this._fnColCalc(),this._fnGridSetup();var e,n=!1;g(this.s.dt.nTableWrapper).on("mousedown.DTFC",function(){n=!0,g(s).one("mouseup",function(){n=!1})}),g(this.dom.scroller).on("mouseover.DTFC touchstart.DTFC",function(){n||(e="main")}).on("scroll.DTFC",function(t){!e&&t.originalEvent&&(e="main"),"main"===e&&(0<a.s.iLeftColumns&&(a.dom.grid.left.liner.scrollTop=a.dom.scroller.scrollTop),0<a.s.iRightColumns)&&(a.dom.grid.right.liner.scrollTop=a.dom.scroller.scrollTop)});var o="onwheel"in s.createElement("div")?"wheel.DTFC":"mousewheel.DTFC";0<a.s.iLeftColumns&&g(a.dom.grid.left.liner).on("mouseover.DTFC touchstart.DTFC",function(){n||(e="left")}).on("scroll.DTFC",function(t){!e&&t.originalEvent&&(e="left"),"left"===e&&(a.dom.scroller.scrollTop=a.dom.grid.left.liner.scrollTop,0<a.s.iRightColumns&&(a.dom.grid.right.liner.scrollTop=a.dom.grid.left.liner.scrollTop))}).on(o,function(t){a.dom.scroller.scrollLeft-="wheel"===t.type?-t.originalEvent.deltaX:t.originalEvent.wheelDeltaX}),0<a.s.iRightColumns&&g(a.dom.grid.right.liner).on("mouseover.DTFC touchstart.DTFC",function(){n||(e="right")}).on("scroll.DTFC",function(t){!e&&t.originalEvent&&(e="right"),"right"===e&&(a.dom.scroller.scrollTop=a.dom.grid.right.liner.scrollTop,0<a.s.iLeftColumns&&(a.dom.grid.left.liner.scrollTop=a.dom.grid.right.liner.scrollTop))}).on(o,function(t){a.dom.scroller.scrollLeft-="wheel"===t.type?-t.originalEvent.deltaX:t.originalEvent.wheelDeltaX}),g(i).on("resize.DTFC",function(){a._fnGridLayout.call(a)});var r=!0,l=g(this.s.dt.nTable);l.on("draw.dt.DTFC",function(){a._fnColCalc(),a._fnDraw.call(a,r),r=!1}).on("column-sizing.dt.DTFC",function(){a._fnColCalc(),a._fnGridLayout(a)}).on("column-visibility.dt.DTFC",function(t,e,n,o,r){r!==b&&!r||(a._fnColCalc(),a._fnGridLayout(a),a._fnDraw(!0))}).on("select.dt.DTFC deselect.dt.DTFC",function(t){"dt"===t.namespace&&a._fnDraw(!1)}).on("destroy.dt.DTFC",function(){l.off(".DTFC"),g(a.dom.scroller).off(".DTFC"),g(i).off(".DTFC"),g(a.s.dt.nTableWrapper).off(".DTFC"),g(a.dom.grid.left.liner).off(".DTFC "+o),g(a.dom.grid.left.wrapper).remove(),g(a.dom.grid.right.liner).off(".DTFC "+o),g(a.dom.grid.right.wrapper).remove()}),this._fnGridLayout(),this.s.dt.oInstance.fnDraw(!1)}},_fnColCalc:function(){var a=this,l=0,i=0;this.s.aiInnerWidths=[],this.s.aiOuterWidths=[],g.each(this.s.dt.aoColumns,function(t,e){var n,o=g(e.nTh);if(o.filter(":visible").length){var r=o.outerWidth();0===a.s.aiOuterWidths.length&&(r+="string"==typeof(n=g(a.s.dt.nTable).css("border-left-width"))?1:parseInt(n,10)),a.s.aiOuterWidths.length===a.s.dt.aoColumns.length-1&&(r+="string"==typeof(n=g(a.s.dt.nTable).css("border-right-width"))?1:parseInt(n,10)),a.s.aiOuterWidths.push(r),a.s.aiInnerWidths.push(o.width()),t<a.s.iLeftColumns&&(l+=r),a.s.iTableColumns-a.s.iRightColumns<=t&&(i+=r)}else a.s.aiInnerWidths.push(0),a.s.aiOuterWidths.push(0)}),this.s.iLeftWidth=l,this.s.iRightWidth=i},_fnGridSetup:function(){var t,e=this._fnDTOverflow();this.dom.body=this.s.dt.nTable,this.dom.header=this.s.dt.nTHead.parentNode,this.dom.header.parentNode.parentNode.style.position="relative";var n=g('<div class="DTFC_ScrollWrapper" style="position:relative; clear:both;"><div class="DTFC_LeftWrapper" style="position:absolute; top:0; left:0;"><div class="DTFC_LeftHeadWrapper" style="position:relative; top:0; left:0; overflow:hidden;"></div><div class="DTFC_LeftBodyWrapper" style="position:relative; top:0; left:0; overflow:hidden;"><div class="DTFC_LeftBodyLiner" style="position:relative; top:0; left:0; overflow-y:scroll;"></div></div><div class="DTFC_LeftFootWrapper" style="position:relative; top:0; left:0; overflow:hidden;"></div></div><div class="DTFC_RightWrapper" style="position:absolute; top:0; right:0;"><div class="DTFC_RightHeadWrapper" style="position:relative; top:0; left:0;"><div class="DTFC_RightHeadBlocker DTFC_Blocker" style="position:absolute; top:0; bottom:0;"></div></div><div class="DTFC_RightBodyWrapper" style="position:relative; top:0; left:0; overflow:hidden;"><div class="DTFC_RightBodyLiner" style="position:relative; top:0; left:0; overflow-y:scroll;"></div></div><div class="DTFC_RightFootWrapper" style="position:relative; top:0; left:0;"><div class="DTFC_RightFootBlocker DTFC_Blocker" style="position:absolute; top:0; bottom:0;"></div></div></div></div>')[0],o=n.childNodes[0],r=n.childNodes[1];this.dom.grid.dt.parentNode.insertBefore(n,this.dom.grid.dt),n.appendChild(this.dom.grid.dt),this.dom.grid.wrapper=n,0<this.s.iLeftColumns&&(this.dom.grid.left.wrapper=o,this.dom.grid.left.head=o.childNodes[0],this.dom.grid.left.body=o.childNodes[1],this.dom.grid.left.liner=g("div.DTFC_LeftBodyLiner",n)[0],n.appendChild(o)),0<this.s.iRightColumns&&(this.dom.grid.right.wrapper=r,this.dom.grid.right.head=r.childNodes[0],this.dom.grid.right.body=r.childNodes[1],this.dom.grid.right.liner=g("div.DTFC_RightBodyLiner",n)[0],r.style.right=e.bar+"px",(t=g("div.DTFC_RightHeadBlocker",n)[0]).style.width=e.bar+"px",t.style.right=-e.bar+"px",this.dom.grid.right.headBlock=t,(t=g("div.DTFC_RightFootBlocker",n)[0]).style.width=e.bar+"px",t.style.right=-e.bar+"px",this.dom.grid.right.footBlock=t,n.appendChild(r)),this.s.dt.nTFoot&&(this.dom.footer=this.s.dt.nTFoot.parentNode,0<this.s.iLeftColumns&&(this.dom.grid.left.foot=o.childNodes[2]),0<this.s.iRightColumns)&&(this.dom.grid.right.foot=r.childNodes[2]),this.s.rtl&&g("div.DTFC_RightHeadBlocker",n).css({left:-e.bar+"px",right:""})},_fnGridLayout:function(){var n=this,t=this.dom.grid;g(t.wrapper).width();function e(t,e){a.bar?n._firefoxScrollError()?34<g(t).height()&&(t.style.width=e+a.bar+"px"):t.style.width=e+a.bar+"px":(t.style.width=e+20+"px",t.style.paddingRight="20px",t.style.boxSizing="border-box")}var o=g(this.s.dt.nTable.parentNode).outerHeight(),r=g(this.s.dt.nTable.parentNode.parentNode).outerHeight(),a=this._fnDTOverflow(),l=this.s.iLeftWidth,i=this.s.iRightWidth,s="rtl"===g(this.dom.body).css("direction");a.x&&(o-=a.bar),t.wrapper.style.height=r+"px",0<this.s.iLeftColumns&&((r=t.left.wrapper).style.width=l+"px",r.style.height="1px",s?(r.style.left="",r.style.right=0):(r.style.left=0,r.style.right=""),t.left.body.style.height=o+"px",t.left.foot&&(t.left.foot.style.top=(a.x?a.bar:0)+"px"),e(t.left.liner,l),t.left.liner.style.height=o+"px",t.left.liner.style.maxHeight=o+"px"),0<this.s.iRightColumns&&((r=t.right.wrapper).style.width=i+"px",r.style.height="1px",this.s.rtl?(r.style.left=a.y?a.bar+"px":0,r.style.right=""):(r.style.left="",r.style.right=a.y?a.bar+"px":0),t.right.body.style.height=o+"px",t.right.foot&&(t.right.foot.style.top=(a.x?a.bar:0)+"px"),e(t.right.liner,i),t.right.liner.style.height=o+"px",t.right.liner.style.maxHeight=o+"px",t.right.headBlock.style.display=a.y?"block":"none",t.right.footBlock.style.display=a.y?"block":"none")},_fnDTOverflow:function(){var t=this.s.dt.nTable,e=t.parentNode,n={x:!1,y:!1,bar:this.s.dt.oScroll.iBarWidth};return t.offsetWidth>e.clientWidth&&(n.x=!0),t.offsetHeight>e.clientHeight&&(n.y=!0),n},_fnDraw:function(t){this._fnGridLayout(),this._fnCloneLeft(t),this._fnCloneRight(t),null!==this.s.fnDrawCallback&&this.s.fnDrawCallback.call(this,this.dom.clone.left,this.dom.clone.right),g(this).trigger("draw.dtfc",{leftClone:this.dom.clone.left,rightClone:this.dom.clone.right})},_fnCloneRight:function(t){if(!(this.s.iRightColumns<=0)){var e,n=[];for(e=this.s.iTableColumns-this.s.iRightColumns;e<this.s.iTableColumns;e++)this.s.dt.aoColumns[e].bVisible&&n.push(e);this._fnClone(this.dom.clone.right,this.dom.grid.right,n,t)}},_fnCloneLeft:function(t){if(!(this.s.iLeftColumns<=0)){var e,n=[];for(e=0;e<this.s.iLeftColumns;e++)this.s.dt.aoColumns[e].bVisible&&n.push(e);this._fnClone(this.dom.clone.left,this.dom.grid.left,n,t)}},_fnCopyLayout:function(t,e,n){for(var o=[],r=[],a=[],l=0,i=t.length;l<i;l++){var s=[];s.nTr=g(t[l].nTr).clone(n,!1)[0];for(var d=0,c=this.s.iTableColumns;d<c;d++)if(-1!==g.inArray(d,e)){var u=g.inArray(t[l][d].cell,a);-1===u?(u=g(t[l][d].cell).clone(n,!1)[0],r.push(u),a.push(t[l][d].cell),s.push({cell:u,unique:t[l][d].unique})):s.push({cell:r[u],unique:t[l][d].unique})}o.push(s)}return o},_fnClone:function(t,e,o,n){var r,a,l,i,s,d,c,u,f,h=this,p=this.s.dt;if(n){for(g(t.header).remove(),t.header=g(this.dom.header).clone(!0,!1)[0],t.header.className+=" DTFC_Cloned",t.header.style.width="100%",e.head.appendChild(t.header),u=this._fnCopyLayout(p.aoHeader,o,!0),(i=g(">thead",t.header)).empty(),r=0,a=u.length;r<a;r++)i[0].appendChild(u[r].nTr);p.oApi._fnDrawHead(p,u,!0)}else for(u=this._fnCopyLayout(p.aoHeader,o,!1),f=[],p.oApi._fnDetectHeader(f,g(">thead",t.header)[0]),r=0,a=u.length;r<a;r++)for(l=0,i=u[r].length;l<i;l++)f[r][l].cell.className=u[r][l].cell.className,g("span.DataTables_sort_icon",f[r][l].cell).each(function(){this.className=g("span.DataTables_sort_icon",u[r][l].cell)[0].className});this._fnEqualiseHeights("thead",this.dom.header,t.header),"auto"==this.s.sHeightMatch&&g(">tbody>tr",h.dom.body).css("height","auto"),null!==t.body&&(g(t.body).remove(),t.body=null),t.body=g(this.dom.body).clone(!0)[0],t.body.className+=" DTFC_Cloned",t.body.style.paddingBottom=p.oScroll.iBarWidth+"px",t.body.style.marginBottom=2*p.oScroll.iBarWidth+"px",null!==t.body.getAttribute("id")&&t.body.removeAttribute("id"),g(">thead>tr",t.body).empty(),g(">tfoot",t.body).remove();var m=g("tbody",t.body)[0];if(g(m).empty(),0<p.aiDisplay.length){for(a=g(">thead>tr",t.body)[0],c=0;c<o.length;c++)s=o[c],(d=g(p.aoColumns[s].nTh).clone(!0)[0]).innerHTML="",(i=d.style).paddingTop="0",i.paddingBottom="0",i.borderTopWidth="0",i.borderBottomWidth="0",i.height=0,i.width=h.s.aiInnerWidths[s]+"px",a.appendChild(d);g(">tbody>tr",h.dom.body).each(function(t){t=!1===h.s.dt.oFeatures.bServerSide?h.s.dt.aiDisplay[h.s.dt._iDisplayStart+t]:t;var e=h.s.dt.aoData[t].anCells||g(this).children("td, th"),n=this.cloneNode(!1);for(n.removeAttribute("id"),n.setAttribute("data-dt-row",t),c=0;c<o.length;c++)s=o[c],0<e.length&&((d=g(e[s]).clone(!0,!0)[0]).removeAttribute("id"),d.setAttribute("data-dt-row",t),d.setAttribute("data-dt-column",p.oApi._fnVisibleToColumnIndex(p,s)),n.appendChild(d));m.appendChild(n)})}else g(">tbody>tr",h.dom.body).each(function(){(d=this.cloneNode(!0)).className=d.className+" DTFC_NoData",g("td",d).html(""),m.appendChild(d)});if(t.body.style.width="100%",t.body.style.margin="0",t.body.style.padding="0",p.oScroller!==b&&(a=p.oScroller.dom.force,e.forcer?e.forcer.style.height=a.style.height:(e.forcer=a.cloneNode(!0),e.liner.appendChild(e.forcer))),e.liner.appendChild(t.body),this._fnEqualiseHeights("tbody",h.dom.body,t.body),null!==p.nTFoot){if(n){for(null!==t.footer&&t.footer.parentNode.removeChild(t.footer),t.footer=g(this.dom.footer).clone(!0,!0)[0],t.footer.className+=" DTFC_Cloned",t.footer.style.width="100%",e.foot.appendChild(t.footer),u=this._fnCopyLayout(p.aoFooter,o,!0),(e=g(">tfoot",t.footer)).empty(),r=0,a=u.length;r<a;r++)e[0].appendChild(u[r].nTr);p.oApi._fnDrawHead(p,u,!0)}else for(u=this._fnCopyLayout(p.aoFooter,o,!1),e=[],p.oApi._fnDetectHeader(e,g(">tfoot",t.footer)[0]),r=0,a=u.length;r<a;r++)for(l=0,i=u[r].length;l<i;l++)e[r][l].cell.className=u[r][l].cell.className;this._fnEqualiseHeights("tfoot",this.dom.footer,t.footer)}e=p.oApi._fnGetUniqueThs(p,g(">thead",t.header)[0]),g(e).each(function(t){s=o[t],this.style.width=h.s.aiInnerWidths[s]+"px"}),null!==h.s.dt.nTFoot&&(e=p.oApi._fnGetUniqueThs(p,g(">tfoot",t.footer)[0]),g(e).each(function(t){s=o[t],this.style.width=h.s.aiInnerWidths[s]+"px"}))},_fnGetTrNodes:function(t){for(var e=[],n=0,o=t.childNodes.length;n<o;n++)"TR"==t.childNodes[n].nodeName.toUpperCase()&&e.push(t.childNodes[n]);return e},_fnEqualiseHeights:function(t,e,n){if("none"!=this.s.sHeightMatch||"thead"===t||"tfoot"===t){var o,r,a=e.getElementsByTagName(t)[0];n=n.getElementsByTagName(t)[0];(t=g(">"+t+">tr:eq(0)",e).children(":first")).outerHeight(),t.height();a=this._fnGetTrNodes(a),e=this._fnGetTrNodes(n);var l=[];for(n=0,t=e.length;n<t;n++)o=(o=a[n].offsetHeight)<(r=e[n].offsetHeight)?r:o,"semiauto"==this.s.sHeightMatch&&(a[n]._DTTC_iHeight=o),l.push(o);for(n=0,t=e.length;n<t;n++)e[n].style.height=l[n]+"px",a[n].style.height=l[n]+"px"}},_firefoxScrollError:function(){if(e===b){var t=g("<div/>").css({position:"absolute",top:0,left:0,height:10,width:50,overflow:"scroll"}).appendTo("body");e=t[0].clientWidth===t[0].offsetWidth&&0!==this._fnDTOverflow().bar,t.remove()}return e}}),d.defaults={iLeftColumns:1,iRightColumns:0,fnDrawCallback:null,sHeightMatch:"semiauto"},d.version="3.2.3",r.Api.register("fixedColumns()",function(){return this}),r.Api.register("fixedColumns().update()",function(){return this.iterator("table",function(t){t._oFixedColumns&&t._oFixedColumns.fnUpdate()})}),r.Api.register("fixedColumns().relayout()",function(){return this.iterator("table",function(t){t._oFixedColumns&&t._oFixedColumns.fnRedrawLayout()})}),r.Api.register("rows().recalcHeight()",function(){return this.iterator("row",function(t,e){t._oFixedColumns&&t._oFixedColumns.fnRecalculateHeight(this.row(e).node())})}),r.Api.register("fixedColumns().rowIndex()",function(t){return(t=g(t)).parents(".DTFC_Cloned").length?this.rows({page:"current"}).indexes()[t.index()]:this.row(t).index()}),r.Api.register("fixedColumns().cellIndex()",function(t){if((t=g(t)).parents(".DTFC_Cloned").length){var e=t.parent().index();e=this.rows({page:"current"}).indexes()[e],t=t.parents(".DTFC_LeftWrapper").length?t.index():this.columns().flatten().length-this.context[0]._oFixedColumns.s.iRightColumns+t.index();return{row:e,column:this.column.index("toData",t),columnVisible:t}}return this.cell(t).index()}),g(s).on("init.dt.fixedColumns",function(t,e){if("dt"===t.namespace){var n=e.oInit.fixedColumns,o=r.defaults.fixedColumns;(n||o)&&(o=g.extend({},n,o),!1!==n&&new d(e,o))}}),g.fn.dataTable.FixedColumns=d,g.fn.DataTable.FixedColumns=d}),function(n){"function"==typeof define&&define.amd?define("datatables.net-fixedheader",["jquery","datatables.net"],function(t){return n(t,window,document)}):"object"==typeof exports?module.exports=function(t,e){return t=t||window,e&&e.fn.dataTable||(e=require("datatables.net")(t,e).$),n(e,t,t.document)}:n(jQuery,window,document)}(function(l,o,i,r){var a=l.fn.dataTable,s=0,d=function(t,e){if(!(this instanceof d))throw"FixedHeader must be initialised with the 'new' keyword.";!0===e&&(e={}),t=new a.Api(t),this.c=l.extend(!0,{},d.defaults,e),this.s={dt:t,position:{theadTop:0,tbodyTop:0,tfootTop:0,tfootBottom:0,width:0,left:0,tfootHeight:0,theadHeight:0,windowHeight:l(o).height(),visible:!0},headerMode:null,footerMode:null,autoWidth:t.settings()[0].oFeatures.bAutoWidth,namespace:".dtfc"+s++,scrollLeft:{header:-1,footer:-1},enable:!0},this.dom={floatingHeader:null,thead:l(t.table().header()),tbody:l(t.table().body()),tfoot:l(t.table().footer()),header:{host:null,floating:null,placeholder:null},footer:{host:null,floating:null,placeholder:null}},this.dom.header.host=this.dom.thead.parent(),this.dom.footer.host=this.dom.tfoot.parent();var n=t.settings()[0];if(n._fixedHeader)throw"FixedHeader already initialised on table "+n.nTable.id;(n._fixedHeader=this)._constructor()};return l.extend(d.prototype,{enable:function(t){this.s.enable=t,this.c.header&&this._modeChange("in-place","header",!0),this.c.footer&&this.dom.tfoot.length&&this._modeChange("in-place","footer",!0),this.update()},headerOffset:function(t){return t!==r&&(this.c.headerOffset=t,this.update()),this.c.headerOffset},footerOffset:function(t){return t!==r&&(this.c.footerOffset=t,this.update()),this.c.footerOffset},update:function(){this._positions(),this._scroll(!0)},_constructor:function(){var t=this,e=this.s.dt;l(o).on("scroll"+this.s.namespace,function(){t._scroll()}).on("resize"+this.s.namespace,function(){t.s.position.windowHeight=l(o).height(),t.update()});var n=l(".fh-fixedHeader");!this.c.headerOffset&&n.length&&(this.c.headerOffset=n.outerHeight()),n=l(".fh-fixedFooter"),!this.c.footerOffset&&n.length&&(this.c.footerOffset=n.outerHeight()),e.on("column-reorder.dt.dtfc column-visibility.dt.dtfc draw.dt.dtfc column-sizing.dt.dtfc",function(){t.update()}),e.on("destroy.dtfc",function(){e.off(".dtfc"),l(o).off(t.s.namespace)}),this._positions(),this._scroll()},_clone:function(t,e){var n=this.s.dt,o=this.dom[t],r="header"===t?this.dom.thead:this.dom.tfoot;!e&&o.floating?o.floating.removeClass("fixedHeader-floating fixedHeader-locked"):(o.floating&&(o.placeholder.remove(),this._unsize(t),o.floating.children().detach(),o.floating.remove()),o.floating=l(n.table().node().cloneNode(!1)).css("table-layout","fixed").removeAttr("id").append(r).appendTo("body"),o.placeholder=r.clone(!1),o.placeholder.find("*[id]").removeAttr("id"),o.host.prepend(o.placeholder),this._matchWidths(o.placeholder,o.floating))},_matchWidths:function(e,n){function t(t,e){l(t,n).each(function(t){l(this).css({width:e[t],minWidth:e[t]})})}var o=(r=function(t){return l(t,e).map(function(){return l(this).width()}).toArray()})("th"),r=r("td");t("th",o),t("td",r)},_unsize:function(t){var e=this.dom[t].floating;e&&("footer"===t||"header"===t&&!this.s.autoWidth)?l("th, td",e).css({width:"",minWidth:""}):e&&"header"===t&&l("th, td",e).css("min-width","")},_horizontal:function(t,e){var n=this.dom[t],o=this.s.position,r=this.s.scrollLeft;n.floating&&r[t]!==e&&(n.floating.css("left",o.left-e),r[t]=e)},_modeChange:function(t,e,n){var o=this.dom[e],r=this.s.position,a=l.contains(this.dom["footer"===e?"tfoot":"thead"][0],i.activeElement)?i.activeElement:null;"in-place"===t?(o.placeholder&&(o.placeholder.remove(),o.placeholder=null),this._unsize(e),"header"===e?o.host.prepend(this.dom.thead):o.host.append(this.dom.tfoot),o.floating&&(o.floating.remove(),o.floating=null)):"in"===t?(this._clone(e,n),o.floating.addClass("fixedHeader-floating").css("header"===e?"top":"bottom",this.c[e+"Offset"]).css("left",r.left+"px").css("width",r.width+"px"),"footer"===e&&o.floating.css("top","")):"below"===t?(this._clone(e,n),o.floating.addClass("fixedHeader-locked").css("top",r.tfootTop-r.theadHeight).css("left",r.left+"px").css("width",r.width+"px")):"above"===t&&(this._clone(e,n),o.floating.addClass("fixedHeader-locked").css("top",r.tbodyTop).css("left",r.left+"px").css("width",r.width+"px")),a&&a!==i.activeElement&&a.focus(),this.s.scrollLeft.header=-1,this.s.scrollLeft.footer=-1,this.s[e+"Mode"]=t},_positions:function(){var t=this.s.dt.table(),e=this.s.position,n=this.dom,o=(t=l(t.node())).children("thead"),r=t.children("tfoot");n=n.tbody;e.visible=t.is(":visible"),e.width=t.outerWidth(),e.left=t.offset().left,e.theadTop=o.offset().top,e.tbodyTop=n.offset().top,e.theadHeight=e.tbodyTop-e.theadTop,r.length?(e.tfootTop=r.offset().top,e.tfootBottom=e.tfootTop+r.outerHeight(),e.tfootHeight=e.tfootBottom-e.tfootTop):(e.tfootTop=e.tbodyTop+n.outerHeight(),e.tfootBottom=e.tfootTop,e.tfootHeight=e.tfootTop)},_scroll:function(t){var e,n=l(i).scrollTop(),o=l(i).scrollLeft(),r=this.s.position;this.s.enable&&(this.c.header&&(e=!r.visible||n<=r.theadTop-this.c.headerOffset?"in-place":n<=r.tfootTop-r.theadHeight-this.c.headerOffset?"in":"below",!t&&e===this.s.headerMode||this._modeChange(e,"header",t),this._horizontal("header",o)),this.c.footer&&this.dom.tfoot.length)&&(n=!r.visible||n+r.windowHeight>=r.tfootBottom+this.c.footerOffset?"in-place":r.windowHeight+n>r.tbodyTop+r.tfootHeight+this.c.footerOffset?"in":"above",!t&&n===this.s.footerMode||this._modeChange(n,"footer",t),this._horizontal("footer",o))}}),d.version="3.1.3",d.defaults={header:!0,footer:!1,headerOffset:0,footerOffset:0},l.fn.dataTable.FixedHeader=d,l.fn.DataTable.FixedHeader=d,l(i).on("init.dt.dtfh",function(t,e){if("dt"===t.namespace){var n=e.oInit.fixedHeader,o=a.defaults.fixedHeader;!n&&!o||e._fixedHeader||(o=l.extend({},o,n),!1!==n&&new d(e,o))}}),a.Api.register("fixedHeader()",function(){}),a.Api.register("fixedHeader.adjust()",function(){return this.iterator("table",function(t){(t=t._fixedHeader)&&t.update()})}),a.Api.register("fixedHeader.enable()",function(e){return this.iterator("table",function(t){t=t._fixedHeader,e=e===r||e,t&&e!==t.s.enable&&t.enable(e)})}),a.Api.register("fixedHeader.disable()",function(){return this.iterator("table",function(t){(t=t._fixedHeader)&&t.s.enable&&t.enable(!1)})}),l.each(["header","footer"],function(t,n){a.Api.register("fixedHeader."+n+"Offset()",function(e){var t=this.context;return e===r?t.length&&t[0]._fixedHeader?t[0]._fixedHeader[n+"Offset"]():r:this.iterator("table",function(t){(t=t._fixedHeader)&&t[n+"Offset"](e)})})}),d}),function(n){"function"==typeof define&&define.amd?define("datatables.net-select",["jquery","datatables.net"],function(t){return n(t,window,document)}):"object"==typeof exports?module.exports=function(t,e){return t=t||window,e&&e.fn.dataTable||(e=require("datatables.net")(t,e).$),n(e,t,t.document)}:n(jQuery,window,document)}(function(c,l,t,u){function i(a,t,e){var n;n=function(e,n){if(n<e){var t=n;n=e,e=t}var o=!1;return a.columns(":visible").indexes().filter(function(t){return t===e&&(o=!0),t===n?!(o=!1):o})};function o(e,n){var t=a.rows({search:"applied"}).indexes();if(t.indexOf(e)>t.indexOf(n)){var o=n;n=e,e=o}var r=!1;return t.filter(function(t){return t===e&&(r=!0),t===n?!(r=!1):r})}e=a.cells({selected:!0}).any()||e?(n=n(e.column,t.column),o(e.row,t.row)):(n=n(0,t.column),o(0,t.row)),e=a.cells(e,n).flatten(),a.cells(t,{selected:!0}).any()?a.cells(e).deselect():a.cells(e).select()}function r(t){var e=t.settings()[0]._select.selector;c(t.table().container()).off("mousedown.dtSelect",e).off("mouseup.dtSelect",e).off("click.dtSelect",e),c("body").off("click.dtSelect"+t.table().node().id)}function a(a){var e=c(a.table().container()),n=a.settings()[0],o=n._select.selector;e.on("mousedown.dtSelect",o,function(t){(t.shiftKey||t.metaKey||t.ctrlKey)&&e.css("-moz-user-select","none").one("selectstart.dtSelect",o,function(){return!1})}).on("mouseup.dtSelect",o,function(){e.css("-moz-user-select","")}).on("click.dtSelect",o,function(t){var e=a.select.items();if(!l.getSelection||!c.trim(l.getSelection().toString())){var n=a.settings()[0];if(c(t.target).closest("div.dataTables_wrapper")[0]==a.table().container()){var o=a.cell(c(t.target).closest("td, th"));if(o.any()){var r=c.Event("user-select.dt");s(a,r,[e,o,t]),r.isDefaultPrevented()||(r=o.index(),"row"===e?(e=r.row,p(t,a,n,"row",e)):"column"===e?(e=o.index().column,p(t,a,n,"column",e)):"cell"===e&&(e=o.index(),p(t,a,n,"cell",e)),n._select_lastCell=r)}}}}),c("body").on("click.dtSelect"+a.table().node().id,function(t){!n._select.blurable||c(t.target).parents().filter(a.table().container()).length||0===c(t.target).parents("html").length||c(t.target).parents("div.DTE").length||h(n,!0)})}function s(t,e,n,o){o&&!t.flatten().length||("string"==typeof e&&(e+=".dt"),n.unshift(t),c(t.table().node()).trigger(e,n))}function d(o){var t=o.settings()[0];if(t._select.info&&t.aanFeatures.i&&"api"!==o.select.style()){function r(t,e,n){t.append(c('<span class="select-item"/>').append(o.i18n("select."+e+"s",{_:"%d "+e+"s selected",0:"",1:"1 "+e+" selected"},n)))}var a=o.rows({selected:!0}).flatten().length,l=o.columns({selected:!0}).flatten().length,i=o.cells({selected:!0}).flatten().length;c.each(t.aanFeatures.i,function(t,e){e=c(e);var n=c('<span class="select-info"/>');r(n,"row",a),r(n,"column",l),r(n,"cell",i);var o=e.children("span.select-info");o.length&&o.remove(),""!==n.text()&&e.append(n)})}}function f(t,e,n,o){var r=t[e+"s"]({search:"applied"}).indexes(),a=(o=c.inArray(o,r),c.inArray(n,r));if(t[e+"s"]({selected:!0}).any()||-1!==o){if(a<o){var l=a;a=o,o=l}r.splice(a+1,r.length),r.splice(0,o)}else r.splice(c.inArray(n,r)+1,r.length);t[e](n,{selected:!0}).any()?(r.splice(c.inArray(n,r),1),t[e+"s"](r).deselect()):t[e+"s"](r).select()}function h(t,e){if(e||"single"===t._select.style){var n=new g.Api(t);n.rows({selected:!0}).deselect(),n.columns({selected:!0}).deselect(),n.cells({selected:!0}).deselect()}}function p(t,e,n,o,r){var a=e.select.style(),l=e[o](r,{selected:!0}).any();"os"===a?t.ctrlKey||t.metaKey?e[o](r).select(!l):t.shiftKey?"cell"===o?i(e,r,n._select_lastCell||null):f(e,o,r,n._select_lastCell?n._select_lastCell[o]:null):(t=e[o+"s"]({selected:!0}),l&&1===t.flatten().length?e[o](r).deselect():(t.deselect(),e[o](r).select())):"multi+shift"==a&&t.shiftKey?"cell"===o?i(e,r,n._select_lastCell||null):f(e,o,r,n._select_lastCell?n._select_lastCell[o]:null):e[o](r).select(!l)}function n(e,n){return function(t){return t.i18n("buttons."+e,n)}}function m(t){return"draw.dt.DT"+(t=t._eventNamespace)+" select.dt.DT"+t+" deselect.dt.DT"+t}var g=c.fn.dataTable;g.select={},g.select.version="1.2.3",g.select.init=function(t){var e=t.settings()[0],n=e.oInit.select,o=g.defaults.select,r=(n=n===u?o:n,o="row","api"),a=!1,l=!0,i="td, th",s="selected",d=!1;e._select={},!0===n?(r="os",d=!0):"string"==typeof n?(r=n,d=!0):c.isPlainObject(n)&&(n.blurable!==u&&(a=n.blurable),n.info!==u&&(l=n.info),n.items!==u&&(o=n.items),n.style!==u&&(r=n.style,d=!0),n.selector!==u&&(i=n.selector),n.className!==u)&&(s=n.className),t.select.selector(i),t.select.items(o),t.select.style(r),t.select.blurable(a),t.select.info(l),e._select.className=s,c.fn.dataTable.ext.order["select-checkbox"]=function(e,t){return this.api().column(t,{order:"index"}).nodes().map(function(t){return"row"===e._select.items?c(t).parent().hasClass(e._select.className):"cell"===e._select.items&&c(t).hasClass(e._select.className)})},!d&&c(t.table().node()).hasClass("selectable")&&t.select.style("os")},c.each([{type:"row",prop:"aoData"},{type:"column",prop:"aoColumns"}],function(t,i){g.ext.selector[i.type].push(function(t,e,n){var o,r=[];if((e=e.selected)===u)return n;for(var a=0,l=n.length;a<l;a++)o=t[i.prop][n[a]],(!0===e&&!0===o._select_selected||!1===e&&!o._select_selected)&&r.push(n[a]);return r})}),g.ext.selector.cell.push(function(t,e,n){var o,r=[];if((e=e.selected)===u)return n;for(var a=0,l=n.length;a<l;a++)o=t.aoData[n[a].row],(!0!==e||!o._selected_cells||!0!==o._selected_cells[n[a].column])&&(!1!==e||o._selected_cells&&o._selected_cells[n[a].column])||r.push(n[a]);return r});var e=g.Api.register,o=g.Api.registerPlural;e("select()",function(){return this.iterator("table",function(t){g.select.init(new g.Api(t))})}),e("select.blurable()",function(e){return e===u?this.context[0]._select.blurable:this.iterator("table",function(t){t._select.blurable=e})}),e("select.info()",function(e){return d===u?this.context[0]._select.info:this.iterator("table",function(t){t._select.info=e})}),e("select.items()",function(e){return e===u?this.context[0]._select.items:this.iterator("table",function(t){t._select.items=e,s(new g.Api(t),"selectItems",[e])})}),e("select.style()",function(e){return e===u?this.context[0]._select.style:this.iterator("table",function(o){if(o._select.style=e,!o._select_init){var n=new g.Api(o);o.aoRowCreatedCallback.push({fn:function(t,e,n){for((e=o.aoData[n])._select_selected&&c(t).addClass(o._select.className),t=0,n=o.aoColumns.length;t<n;t++)(o.aoColumns[t]._select_selected||e._selected_cells&&e._selected_cells[t])&&c(e.anCells[t]).addClass(o._select.className)},sName:"select-deferRender"}),n.on("preXhr.dt.dtSelect",function(){var t=n.rows({selected:!0}).ids(!0).filter(function(t){return t!==u}),e=n.cells({selected:!0}).eq(0).map(function(t){var e=n.row(t.row).id(!0);return e?{row:e,column:t.column}:u}).filter(function(t){return t!==u});n.one("draw.dt.dtSelect",function(){n.rows(t).select(),e.any()&&e.each(function(t){n.cells(t.row,t.column).select()})})}),n.on("draw.dtSelect.dt select.dtSelect.dt deselect.dtSelect.dt info.dt",function(){d(n)}),n.on("destroy.dtSelect",function(){r(n),n.off(".dtSelect")})}var t=new g.Api(o);r(t),"api"!==e&&a(t),s(new g.Api(o),"selectStyle",[e])})}),e("select.selector()",function(e){return e===u?this.context[0]._select.selector:this.iterator("table",function(t){r(new g.Api(t)),t._select.selector=e,"api"!==t._select.style&&a(new g.Api(t))})}),o("rows().select()","row().select()",function(t){var n=this;return!1===t?this.deselect():(this.iterator("row",function(t,e){h(t),t.aoData[e]._select_selected=!0,c(t.aoData[e].nTr).addClass(t._select.className)}),this.iterator("table",function(t,e){s(n,"select",["row",n[e]],!0)}),this)}),o("columns().select()","column().select()",function(t){var n=this;return!1===t?this.deselect():(this.iterator("column",function(t,e){h(t),t.aoColumns[e]._select_selected=!0;var n=new g.Api(t).column(e);c(n.header()).addClass(t._select.className),c(n.footer()).addClass(t._select.className),n.nodes().to$().addClass(t._select.className)}),this.iterator("table",function(t,e){s(n,"select",["column",n[e]],!0)}),this)}),o("cells().select()","cell().select()",function(t){var n=this;return!1===t?this.deselect():(this.iterator("cell",function(t,e,n){h(t),(e=t.aoData[e])._selected_cells===u&&(e._selected_cells=[]),e._selected_cells[n]=!0,e.anCells&&c(e.anCells[n]).addClass(t._select.className)}),this.iterator("table",function(t,e){s(n,"select",["cell",n[e]],!0)}),this)}),o("rows().deselect()","row().deselect()",function(){var n=this;return this.iterator("row",function(t,e){t.aoData[e]._select_selected=!1,c(t.aoData[e].nTr).removeClass(t._select.className)}),this.iterator("table",function(t,e){s(n,"deselect",["row",n[e]],!0)}),this}),o("columns().deselect()","column().deselect()",function(){var n=this;return this.iterator("column",function(o,t){o.aoColumns[t]._select_selected=!1;var e=new g.Api(o),n=e.column(t);c(n.header()).removeClass(o._select.className),c(n.footer()).removeClass(o._select.className),e.cells(null,t).indexes().each(function(t){var e=o.aoData[t.row],n=e._selected_cells;!e.anCells||n&&n[t.column]||c(e.anCells[t.column]).removeClass(o._select.className)})}),this.iterator("table",function(t,e){s(n,"deselect",["column",n[e]],!0)}),this}),o("cells().deselect()","cell().deselect()",function(){var n=this;return this.iterator("cell",function(t,e,n){(e=t.aoData[e])._selected_cells[n]=!1,e.anCells&&!t.aoColumns[n]._select_selected&&c(e.anCells[n]).removeClass(t._select.className)}),this.iterator("table",function(t,e){s(n,"deselect",["cell",n[e]],!0)}),this});var b=0;return c.extend(g.ext.buttons,{selected:{text:n("selected","Selected"),className:"buttons-selected",init:function(t,e,n){var o=this;n._eventNamespace=".select"+b++,t.on(m(n),function(){var t=o.rows({selected:!0}).any()||o.columns({selected:!0}).any()||o.cells({selected:!0}).any();o.enable(t)}),this.disable()},destroy:function(t,e,n){t.off(n._eventNamespace)}},selectedSingle:{text:n("selectedSingle","Selected single"),className:"buttons-selected-single",init:function(e,t,n){var o=this;n._eventNamespace=".select"+b++,e.on(m(n),function(){var t=e.rows({selected:!0}).flatten().length+e.columns({selected:!0}).flatten().length+e.cells({selected:!0}).flatten().length;o.enable(1===t)}),this.disable()},destroy:function(t,e,n){t.off(n._eventNamespace)}},selectAll:{text:n("selectAll","Select all"),className:"buttons-select-all",action:function(){this[this.select.items()+"s"]().select()}},selectNone:{text:n("selectNone","Deselect all"),className:"buttons-select-none",action:function(){h(this.settings()[0],!0)},init:function(e,t,n){var o=this;n._eventNamespace=".select"+b++,e.on(m(n),function(){var t=e.rows({selected:!0}).flatten().length+e.columns({selected:!0}).flatten().length+e.cells({selected:!0}).flatten().length;o.enable(0<t)}),this.disable()},destroy:function(t,e,n){t.off(n._eventNamespace)}}}),c.each(["Row","Column","Cell"],function(t,e){var r=e.toLowerCase();g.ext.buttons["select"+e+"s"]={text:n("select"+e+"s","Select "+r+"s"),className:"buttons-select-"+r+"s",action:function(){this.select.items(r)},init:function(t){var o=this;t.on("selectItems.dt.DT",function(t,e,n){o.active(n===r)})}}}),c(t).on("preInit.dt.dtSelect",function(t,e){"dt"===t.namespace&&g.select.init(new g.Api(e))}),g.select}),define("mockup-patterns-datatables",["jquery","pat-base","datatables.net","datatables.net-bs","datatables.net-buttons","datatables.net-buttons-colvis","datatables.net-buttons-flash","datatables.net-buttons-html5","datatables.net-buttons-print","datatables.net-buttons-bs","datatables.net-colreorder","datatables.net-rowreorder","datatables.net-fixedcolumns","datatables.net-fixedheader","datatables.net-select"],function(t,e,n){"use strict";return e.extend({name:"datatables",trigger:".pat-datatables",parser:"mockup",table:null,defaults:{},init:function(){this.table=this.$el.DataTable(this.options)}})}),require(["mockup-patterns-datatables"],function(){}),define("/home/_thet/data/dev/plone/buildout.coredev/src/plone.staticresources/src/plone/staticresources/static/plone-datatables.js",function(){});
//# sourceMappingURL=plone-datatables-compiled.min.js.map
/* Autotoc pattern.
 *
 * Options:
 *    IDPrefix(string): Prefix used to generate ID. ('autotoc-item-')
 *    classActiveName(string): Class used for active level. ('active')
 *    classLevelPrefixName(string): Class prefix used for the TOC levels. ('autotoc-level-')
 *    classSectionName(string): Class used for section in TOC. ('autotoc-section')
 *    classTOCName(string): Class used for the TOC. ('autotoc-nav')
 *    levels(string): Selectors used to find levels. ('h1,h2,h3')
 *    scrollDuration(string): Speed of scrolling. ('slow')
 *    scrollEasing(string): Easing to use while scrolling. ('swing')
 *    section(string): Tag type to use for TOC. ('section')
 *
 * Documentation:
 *    # TOC
 *    {{ example-1 }}
 *
 *    # Tabs
 *    {{ example-2-tabs }}
 *
 * Example: example-1
 *    <div class="pat-autotoc"
 *          data-pat-autotoc="scrollDuration:slow;levels:h4,h5,h6;">
 *      <h4>Title 1</h4>
 *      <p>Mr. Zuckerkorn, you've been warned about touching. You said
 *         spanking. It walked on my pillow! How about a turtle? I've always
 *         loved those leathery little snappy faces.</p>
 *      <h5>Title 1.1</h5>
 *      <p>Ah coodle doodle do Caw ca caw, caw ca caw. Butterscotch!</p>
 *      <h6>Title 1.1.1</h6>
 *      <p>Want a lick? Okay, Lindsay, are you forgetting that I was
 *         a professional twice over - an analyst and a therapist.</p>
 *      <h4>Title 2</h4>
 *      <p>You boys know how to shovel coal? Don't worry, these young
 *      beauties have been nowhere near the bananas. I thought the two of
 *      us could talk man-on-man.</p>
 *    </div>
 *
 * Example: example-2-tabs
 *    <div class="pat-autotoc autotabs"
 *          data-pat-autotoc="section:fieldset;levels:legend;">
 *        <fieldset>
 *          <legend>Tab 1</legend>
 *          <div>
 *            Lorem ipsum dolor sit amet, ex nam odio ceteros fastidii,
 *            id porro lorem pro, homero facilisis in cum.
 *            At doming voluptua indoctum mel, natum noster similique ne mel.
 *          </div>
 *        </fieldset>
 *        <fieldset>
 *          <legend>Tab 2</legend>
 *          <div>
 *            Reque repudiare eum et. Prompta expetendis percipitur eu eam,
 *            et graece mandamus pro, eu vim harum audire tractatos.
 *            Ad perpetua salutandi mea, soluta delicata aliquando eam ne.
 *            Qui nostrum lucilius perpetua ut, eum suas stet oblique ut.
 *          </div>
 *        </fieldset>
 *        <fieldset>
 *          <legend>Tab 3</legend>
 *          <div>
 *            Vis mazim harum deterruisset ex, duo nemore nostro civibus ad,
 *            eros vituperata id cum. Vim at erat solet soleat,
 *            eum et iuvaret luptatum, pro an esse dolorum maiestatis.
 *          </div>
 *        </fieldset>
 *    </div>
 *
 */

define('mockup-patterns-autotoc',[
  'jquery',
  'pat-base'
], function($, Base) {
  

  var AutoTOC = Base.extend({
    name: 'autotoc',
    trigger: '.pat-autotoc',
    parser: 'mockup',
    defaults: {
      section: 'section',
      levels: 'h1,h2,h3',
      IDPrefix: 'autotoc-item-',
      classTOCName: 'autotoc-nav',
      classSectionName: 'autotoc-section',
      classLevelPrefixName: 'autotoc-level-',
      classActiveName: 'active',
      scrollDuration: 'slow',
      scrollEasing: 'swing'
    },
    init: function() {
      var self = this;

      self.$toc = $('<nav/>').addClass(self.options.classTOCName);

      if (self.options.prependTo) {
        self.$toc.prependTo(self.options.prependTo);
      } else if (self.options.appendTo) {
        self.$toc.appendTo(self.options.appendTo);
      } else {
        self.$toc.prependTo(self.$el);
      }

      if (self.options.className) {
        self.$el.addClass(self.options.className);
      }

      $(self.options.section, self.$el).addClass(self.options.classSectionName);

      var asTabs = self.$el.hasClass('autotabs');

      var activeId = null;

      $(self.options.levels, self.$el).each(function(i) {
        var $level = $(this),
            id = $level.prop('id') ? $level.prop('id') :
                 $level.parents(self.options.section).prop('id');
        if (!id || $('#' + id).length > 0) {
          id = self.options.IDPrefix + self.name + '-' + i;
        }
        if(window.location.hash === '#' + id){
          activeId = id;
        }
        if(activeId===null && $level.hasClass(self.options.classActiveName)){
          activeId = id;
        }
        $level.data('navref', id);
        $('<a/>')
          .appendTo(self.$toc)
          .text($level.text())
          .attr('id', id)
          .attr('href', '#' + id)
          .addClass(self.options.classLevelPrefixName + self.getLevel($level))
          .on('click', function(e, options) {
            e.stopPropagation();
            e.preventDefault();
            if(!options){
              options = {
                doScroll: true,
                skipHash: false
              };
            }
            var $el = $(this);
            self.$toc.children('.' + self.options.classActiveName).removeClass(self.options.classActiveName);
            self.$el.children('.' + self.options.classActiveName).removeClass(self.options.classActiveName);
            $(e.target).addClass(self.options.classActiveName);
            $level.parents(self.options.section).addClass(self.options.classActiveName);
            if (options.doScroll !== false &&
                self.options.scrollDuration &&
                $level &&
                !asTabs) {
              $('body,html').animate({
                scrollTop: $level.offset().top
              }, self.options.scrollDuration, self.options.scrollEasing);
            }
            if (self.$el.parents('.plone-modal').size() !== 0) {
              self.$el.trigger('resize.plone-modal.patterns');
            }
            $(this).trigger('clicked');
            if(!options.skipHash){
              if(window.history && window.history.pushState){
                window.history.pushState({}, '', '#' + $el.attr('id'));
              }
            }
          });
        $level.data('autotoc-trigger-id', id);
      });

      if(activeId){
        $('a#' + activeId).trigger('click', {
          doScroll: true,
          skipHash: true
        });
      }else{
        self.$toc.find('a').first().trigger('click', {
          doScroll: false,
          skipHash: true});
      }
    },
    getLevel: function($el) {
      var elementLevel = 0;
      $.each(this.options.levels.split(','), function(level, levelSelector) {
        if ($el.filter(levelSelector).size() === 1) {
          elementLevel = level + 1;
          return false;
        }
      });
      return elementLevel;
    }
  });

  return AutoTOC;

});

/* Cookie Trigger pattern.
 *
 * Show a DOM element if browser cookies are disabled.
 *
 * Documentation:
 *
 *    {{ example-1 }}
 *
 * Example: example-1
 *    <div class="portalMessage error pat-cookietrigger">
 *      Cookies are not enabled. You must enable cookies before you can log in.
 *    </div>
 */

define('mockup-patterns-cookietrigger',[
  'pat-base'
], function (Base) {
  

  var CookieTrigger = Base.extend({
    name: 'cookietrigger',
    trigger: '.pat-cookietrigger',
    parser: 'mockup',

    isCookiesEnabled: function() {
      /* Test whether cookies are enabled by attempting to set a cookie
       * and then change its value set test cookie.
       */
      var c = "areYourCookiesEnabled=0";
      document.cookie = c;
      var dc = document.cookie;
      // cookie not set?  fail
      if (dc.indexOf(c) === -1) {
        return 0;
      }
      // change test cookie
      c = "areYourCookiesEnabled=1";
      document.cookie = c;
      dc = document.cookie;
      // cookie not changed?  fail
      if (dc.indexOf(c) === -1) {
        return 0;
      }
      // delete cookie
      document.cookie = "areYourCookiesEnabled=; expires=Thu, 01-Jan-70 00:00:01 GMT";
      return 1;
    },

    showIfCookiesDisabled: function() {
      /* Show the element on which this pattern is defined if cookies are
       * disabled.
       */
      if (this.isCookiesEnabled()) {
        this.$el.hide();
      } else {
        this.$el.show();
      }
    },

    init: function () {
      this.showIfCookiesDisabled();
    },
  });
  return CookieTrigger;
});

/* Formautofocus pattern.
 *
 * Options:
 *    condition(string): TODO ('div.error')
 *    target(string): TODO ("div.error :input:not(.formTabs):visible:first')
 *    always(string): TODO (:input:not(.formTabs):visible:first')
 *
 * Documentation:
 *    # TODO
 *
 * Example: example-1
 *
 */


define('mockup-patterns-formautofocus',[
  'jquery',
  'pat-base'
], function($, Base, undefined) {
  

  var FormAutoFocus = Base.extend({
    name: 'formautofocus',
    trigger: '.pat-formautofocus',
    parser: 'mockup',
    defaults: {
      condition: 'div.error',
      target: 'div.error :input:not(.formTabs):visible:first',
      always: ':input:not(.formTabs):visible:first'
    },
    init: function() {
      var self = this;
      if ($(self.options.condition, self.$el).size() !== 0) {
        $(self.options.target, self.$el).focus();
      } else {
        $(self.options.always, self.$el).focus();
      }

    }
  });

  return FormAutoFocus;

});

/* Mark special links
 *
 * Options:
 *    external_links_open_new_window(boolean): Open external links in a new window. (false)
 *    mark_special_links(boolean): Marks external or special protocl links with class. (true)
 *
 * Documentation:
 *   # General
 *
 *   Scan all links in the container and mark external links with class
 *   if they point outside the site, or are special protocols.
 *   Also implements new window opening for external links.
 *   To disable this effect for links on a one-by-one-basis,
 *   give them a class of 'link-plain'
 *
 *   # Default external link example
 *
 *   {{ example-1 }}
 *
 *   # Open external link in new window
 *
 *   {{ example-2 }}
 *
 *   # Open external link in new window, without icons
 *
 *   {{ example-3 }}
 *
 *   # List of all protocol icons
 *
 *   {{ example-4 }}
 *
 * Example: example-1
 *    <div class="pat-markspeciallinks">
 *      <ul>
 *        <li>Find out What's new in <a href="http://www.plone.org">Plone</a>.</li>
 *        <li>Plone is written in <a class="link-plain" href="http://www.python.org">Python</a>.</li>
 *        <li>Plone builds on <a href="http://zope.org">Zope</a>.</li>
 *        <li>Plone uses <a href="/">Mockup</a>.</li>
 *      </ul>
 *    </div>
 *
 * Example: example-2
 *    <div class="pat-markspeciallinks" data-pat-markspeciallinks='{"external_links_open_new_window": "true"}'>
 *      <ul>
 *        <li>Find out What's new in <a href="http://www.plone.org">Plone</a>.</li>
 *        <li>Plone is written in <a class="link-plain" href="http://www.python.org">Python</a>.</li>
 *        <li>Plone builds on <a href="http://zope.org">Zope</a>.</li>
 *        <li>Plone uses <a href="/">Mockup</a>.</li>
 *      </ul>
 *    </div>
 *
 * Example: example-3
 *    <div class="pat-markspeciallinks" data-pat-markspeciallinks='{"external_links_open_new_window": "true", "mark_special_links": "false"}'>
 *      <ul>
 *        <li>Find out What's new in <a href="http://www.plone.org">Plone</a>.</li>
 *        <li>Plone is written in <a class="link-plain" href="http://www.python.org">Python</a>.</li>
 *        <li>Plone builds on <a href="http://zope.org">Zope</a>.</li>
 *        <li>Plone uses <a href="/">Mockup</a>.</li>
 *      </ul>
 *    </div>
 *
 * Example: example-4
 *    <div class="pat-markspeciallinks">
 *        <ul>
 *          <li><a href="http://www.plone.org">http</a></li>
 *          <li><a href="https://www.plone.org">https</a></li>
 *          <li><a href="mailto:info@plone.org">mailto</a></li>
 *          <li><a href="ftp://www.plone.org">ftp</a></li>
 *          <li><a href="news://www.plone.org">news</a></li>
 *          <li><a href="irc://www.plone.org">irc</a></li>
 *          <li><a href="h323://www.plone.org">h323</a></li>
 *          <li><a href="sip://www.plone.org">sip</a></li>
 *          <li><a href="callto://www.plone.org">callto</a></li>
 *          <li><a href="feed://www.plone.org">feed</a></li>
 *          <li><a href="webcal://www.plone.org">webcal</a></li>
 *        </ul>
 *    </div>
 *
 */

define('mockup-patterns-markspeciallinks',[
  'pat-base',
  'jquery'
], function (Base, $) {
  

  var MarkSpecialLinks = Base.extend({
    name: 'markspeciallinks',
    trigger: '.pat-markspeciallinks',
    parser: 'mockup',
    defaults: {
      external_links_open_new_window: false,
      mark_special_links: true
    },
    init: function () {
      var self = this, $el = self.$el;

      // first make external links open in a new window, afterwards do the
      // normal plone link wrapping in only the content area
      var elonw,
          msl,
          url,
          protocols,
          contentarea,
          res;

      if (typeof self.options.external_links_open_new_window === 'string') {
          elonw = self.options.external_links_open_new_window.toLowerCase() === 'true';
      } else if (typeof self.options.external_links_open_new_window === 'boolean') {
          elonw = self.options.external_links_open_new_window;
      }

      if (typeof self.options.mark_special_links === 'string') {
          msl = self.options.mark_special_links.toLowerCase() === 'true';
      } else if (typeof self.options.mark_special_links === 'boolean') {
          msl = self.options.mark_special_links;
      }

      url = window.location.protocol + '//' + window.location.host;
      protocols = /^(mailto|ftp|news|irc|h323|sip|callto|https|feed|webcal)/;
      contentarea = $el;

      if (elonw) {
          // all http links (without the link-plain class), not within this site
          contentarea.find('a[href^="http"]:not(.link-plain):not([href^="' + url + '"])')
                     .attr('target', '_blank')
                     .attr('rel', 'noopener');
      }

      if (msl) {
        // All links with an http href (without the link-plain class), not within this site,
        // and no img children should be wrapped in a link-external span
        contentarea.find(
            'a[href^="http:"]:not(.link-plain):not([href^="' + url + '"]):not(:has(img))')
            .before('<i class="glyphicon link-external"></i>');
        // All links without an http href (without the link-plain class), not within this site,
        // and no img children should be wrapped in a link-[protocol] span
        contentarea.find(
            'a[href]:not([href^="http:"]):not(.link-plain):not([href^="' + url + '"]):not(:has(img)):not([href^="#"])')
            .each(function() {
                // those without a http link may have another interesting protocol
                // wrap these in a link-[protocol] span
                res = protocols.exec($(this).attr('href'));
                if (res) {
                    var iconclass = 'glyphicon link-' + res[0];
                    $(this).before('<i class="' + iconclass + '"></i>');
                }
            }
        );
      }
    }
  });
  return MarkSpecialLinks;
});

/* Navigation marker pattern.
 *
 * This pattern adds ``inPath`` and ``current`` classes to the navigation to
 * allow a different style on selected navigation items or navigation items
 * which are in the current path.
 *
 * This is done in JavaScript, so that the navigation pattern can be cached
 * for the whole site.
 *
 */

define('mockup-patterns-navigationmarker',[
    'jquery',
    'pat-base'
], function ($, Base) {

    var Navigation = Base.extend({
        name: 'navigationmarker',
        trigger: '.pat-navigationmarker',
        parser: 'mockup',
        init: function () {
            var self = this;
            var href = document.querySelector('head link[rel="canonical"]').href || window.location.href;

            $('a', this.$el).each(function () {
                var navlink = this.href.replace('/view', '');
                if (href.indexOf(navlink) !== -1) {
                    var parent = $(this).parent();

                    // check the input-openers within the path
                    var check = parent.find('> input');
                    if (check.length) {
                        check[0].checked = true;
                    }

                    // set "inPath" to all nav items which are within the current path
                    // check if parts of navlink are in canonical url parts
                    var hrefParts = href.split('/');
                    var navParts = navlink.split('/');
                    var inPath = false;
                    for (var i = 0, size = navParts.length; i < size; i++) {
                        // The last path-part must match.
                        inPath = false;
                        if (navParts[i] === hrefParts[i]) {
                            inPath = true;
                        }
                    }
                    if (inPath) {
                        parent.addClass('inPath');
                    }

                    // set "current" to the current selected nav item, if it is in the navigation structure.
                    if (href === navlink) {
                        parent.addClass('current');
                    }
                }
            });
        }
    });

    return Navigation;
});

(function(root) {
define("bootstrap-collapse", ["jquery"], function() {
  return (function() {
/* ========================================================================
 * Bootstrap: collapse.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.4.1'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(document).find(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(document).find(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

return window.jQuery.fn.collapse.Constructor;
  }).apply(root, arguments);
});
}(this));

(function(root) {
define("bootstrap-dropdown", ["jquery"], function() {
  return (function() {
/* ========================================================================
 * Bootstrap: dropdown.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.4.1'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector !== '#' ? $(document).find(selector) : null

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);


  }).apply(root, arguments);
});
}(this));

(function(root) {
define("bootstrap-tooltip", ["jquery"], function() {
  return (function() {
/* ========================================================================
 * Bootstrap: tooltip.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  

  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn']

  var uriAttrs = [
    'background',
    'cite',
    'href',
    'itemtype',
    'longdesc',
    'poster',
    'src',
    'xlink:href'
  ]

  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i

  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  }

  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */
  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi

  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */
  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase()

    if ($.inArray(attrName, allowedAttributeList) !== -1) {
      if ($.inArray(attrName, uriAttrs) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN))
      }

      return true
    }

    var regExp = $(allowedAttributeList).filter(function (index, value) {
      return value instanceof RegExp
    })

    // Check if a regular expression validates the attribute.
    for (var i = 0, l = regExp.length; i < l; i++) {
      if (attrName.match(regExp[i])) {
        return true
      }
    }

    return false
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml)
    }

    // IE 8 and below don't support createHTMLDocument
    if (!document.implementation || !document.implementation.createHTMLDocument) {
      return unsafeHtml
    }

    var createdDocument = document.implementation.createHTMLDocument('sanitization')
    createdDocument.body.innerHTML = unsafeHtml

    var whitelistKeys = $.map(whiteList, function (el, i) { return i })
    var elements = $(createdDocument.body).find('*')

    for (var i = 0, len = elements.length; i < len; i++) {
      var el = elements[i]
      var elName = el.nodeName.toLowerCase()

      if ($.inArray(elName, whitelistKeys) === -1) {
        el.parentNode.removeChild(el)

        continue
      }

      var attributeList = $.map(el.attributes, function (el) { return el })
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || [])

      for (var j = 0, len2 = attributeList.length; j < len2; j++) {
        if (!allowedAttribute(attributeList[j], whitelistedAttributes)) {
          el.removeAttribute(attributeList[j].nodeName)
        }
      }
    }

    return createdDocument.body.innerHTML
  }

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.4.1'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    },
    sanitize : true,
    sanitizeFn : null,
    whiteList : DefaultWhitelist
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $(document).find($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    var dataAttributes = this.$element.data()

    for (var dataAttr in dataAttributes) {
      if (dataAttributes.hasOwnProperty(dataAttr) && $.inArray(dataAttr, DISALLOWED_ATTRIBUTES) !== -1) {
        delete dataAttributes[dataAttr]
      }
    }

    options = $.extend({}, this.getDefaults(), dataAttributes, options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    if (options.sanitize) {
      options.template = sanitizeHtml(options.template, options.whiteList, options.sanitizeFn)
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo($(document).find(this.options.container)) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    if (this.options.html) {
      if (this.options.sanitize) {
        title = sanitizeHtml(title, this.options.whiteList, this.options.sanitizeFn)
      }

      $tip.find('.tooltip-inner').html(title)
    } else {
      $tip.find('.tooltip-inner').text(title)
    }

    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
        that.$element
          .removeAttr('aria-describedby')
          .trigger('hidden.bs.' + that.type)
      }
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var isSvg = window.SVGElement && el instanceof window.SVGElement
    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
    // See https://github.com/twbs/bootstrap/issues/20280
    var elOffset  = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset())
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
      that.$element = null
    })
  }

  Tooltip.prototype.sanitizeHtml = function (unsafeHtml) {
    return sanitizeHtml(unsafeHtml, this.options.whiteList, this.options.sanitizeFn)
  }

  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);


  }).apply(root, arguments);
});
}(this));

/*!
 * jQuery Form Plugin
 * version: 4.2.2
 * Requires jQuery v1.7.2 or later
 * Project repository: https://github.com/jquery-form/form

 * Copyright 2017 Kevin Morris
 * Copyright 2006 M. Alsup

 * Dual licensed under the LGPL-2.1+ or MIT licenses
 * https://github.com/jquery-form/form#license

 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 */
/* global ActiveXObject */

/* eslint-disable */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define('jquery.form',['jquery'], factory);
	} else if (typeof module === 'object' && module.exports) {
		// Node/CommonJS
		module.exports = function( root, jQuery ) {
			if (typeof jQuery === 'undefined') {
				// require('jQuery') returns a factory that requires window to build a jQuery instance, we normalize how we use modules
				// that require this pattern but the window provided is a noop if it's defined (how jquery works)
				if (typeof window !== 'undefined') {
					jQuery = require('jquery');
				}
				else {
					jQuery = require('jquery')(root);
				}
			}
			factory(jQuery);
			return jQuery;
		};
	} else {
		// Browser globals
		factory(jQuery);
	}

}(function ($) {
/* eslint-enable */
	

	/*
		Usage Note:
		-----------
		Do not use both ajaxSubmit and ajaxForm on the same form. These
		functions are mutually exclusive. Use ajaxSubmit if you want
		to bind your own submit handler to the form. For example,

		$(document).ready(function() {
			$('#myForm').on('submit', function(e) {
				e.preventDefault(); // <-- important
				$(this).ajaxSubmit({
					target: '#output'
				});
			});
		});

		Use ajaxForm when you want the plugin to manage all the event binding
		for you. For example,

		$(document).ready(function() {
			$('#myForm').ajaxForm({
				target: '#output'
			});
		});

		You can also use ajaxForm with delegation (requires jQuery v1.7+), so the
		form does not have to exist when you invoke ajaxForm:

		$('#myForm').ajaxForm({
			delegation: true,
			target: '#output'
		});

		When using ajaxForm, the ajaxSubmit function will be invoked for you
		at the appropriate time.
	*/

	var rCRLF = /\r?\n/g;

	/**
	 * Feature detection
	 */
	var feature = {};

	feature.fileapi = $('<input type="file">').get(0).files !== undefined;
	feature.formdata = (typeof window.FormData !== 'undefined');

	var hasProp = !!$.fn.prop;

	// attr2 uses prop when it can but checks the return type for
	// an expected string. This accounts for the case where a form
	// contains inputs with names like "action" or "method"; in those
	// cases "prop" returns the element
	$.fn.attr2 = function() {
		if (!hasProp) {
			return this.attr.apply(this, arguments);
		}

		var val = this.prop.apply(this, arguments);

		if ((val && val.jquery) || typeof val === 'string') {
			return val;
		}

		return this.attr.apply(this, arguments);
	};

	/**
	 * ajaxSubmit() provides a mechanism for immediately submitting
	 * an HTML form using AJAX.
	 *
	 * @param	{object|string}	options		jquery.form.js parameters or custom url for submission
	 * @param	{object}		data		extraData
	 * @param	{string}		dataType	ajax dataType
	 * @param	{function}		onSuccess	ajax success callback function
	 */
	$.fn.ajaxSubmit = function(options, data, dataType, onSuccess) {
		// fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
		if (!this.length) {
			log('ajaxSubmit: skipping submit process - no element selected');

			return this;
		}

		/* eslint consistent-this: ["error", "$form"] */
		var method, action, url, $form = this;

		if (typeof options === 'function') {
			options = {success: options};

		} else if (typeof options === 'string' || (options === false && arguments.length > 0)) {
			options = {
				'url'      : options,
				'data'     : data,
				'dataType' : dataType
			};

			if (typeof onSuccess === 'function') {
				options.success = onSuccess;
			}

		} else if (typeof options === 'undefined') {
			options = {};
		}

		method = options.method || options.type || this.attr2('method');
		action = options.url || this.attr2('action');

		url = (typeof action === 'string') ? $.trim(action) : '';
		url = url || window.location.href || '';
		if (url) {
			// clean url (don't include hash vaue)
			url = (url.match(/^([^#]+)/) || [])[1];
		}

		options = $.extend(true, {
			url       : url,
			success   : $.ajaxSettings.success,
			type      : method || $.ajaxSettings.type,
			iframeSrc : /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'		// eslint-disable-line no-script-url
		}, options);

		// hook for manipulating the form data before it is extracted;
		// convenient for use with rich editors like tinyMCE or FCKEditor
		var veto = {};

		this.trigger('form-pre-serialize', [this, options, veto]);

		if (veto.veto) {
			log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');

			return this;
		}

		// provide opportunity to alter form data before it is serialized
		if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
			log('ajaxSubmit: submit aborted via beforeSerialize callback');

			return this;
		}

		var traditional = options.traditional;

		if (typeof traditional === 'undefined') {
			traditional = $.ajaxSettings.traditional;
		}

		var elements = [];
		var qx, a = this.formToArray(options.semantic, elements, options.filtering);

		if (options.data) {
			var optionsData = $.isFunction(options.data) ? options.data(a) : options.data;

			options.extraData = optionsData;
			qx = $.param(optionsData, traditional);
		}

		// give pre-submit callback an opportunity to abort the submit
		if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
			log('ajaxSubmit: submit aborted via beforeSubmit callback');

			return this;
		}

		// fire vetoable 'validate' event
		this.trigger('form-submit-validate', [a, this, options, veto]);
		if (veto.veto) {
			log('ajaxSubmit: submit vetoed via form-submit-validate trigger');

			return this;
		}

		var q = $.param(a, traditional);

		if (qx) {
			q = (q ? (q + '&' + qx) : qx);
		}

		if (options.type.toUpperCase() === 'GET') {
			options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
			options.data = null;	// data is null for 'get'
		} else {
			options.data = q;		// data is the query string for 'post'
		}

		var callbacks = [];

		if (options.resetForm) {
			callbacks.push(function() {
				$form.resetForm();
			});
		}

		if (options.clearForm) {
			callbacks.push(function() {
				$form.clearForm(options.includeHidden);
			});
		}

		// perform a load on the target only if dataType is not provided
		if (!options.dataType && options.target) {
			var oldSuccess = options.success || function(){};

			callbacks.push(function(data, textStatus, jqXHR) {
				var successArguments = arguments,
					fn = options.replaceTarget ? 'replaceWith' : 'html';

				$(options.target)[fn](data).each(function(){
					oldSuccess.apply(this, successArguments);
				});
			});

		} else if (options.success) {
			if ($.isArray(options.success)) {
				$.merge(callbacks, options.success);
			} else {
				callbacks.push(options.success);
			}
		}

		options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
			var context = options.context || this;		// jQuery 1.4+ supports scope context

			for (var i = 0, max = callbacks.length; i < max; i++) {
				callbacks[i].apply(context, [data, status, xhr || $form, $form]);
			}
		};

		if (options.error) {
			var oldError = options.error;

			options.error = function(xhr, status, error) {
				var context = options.context || this;

				oldError.apply(context, [xhr, status, error, $form]);
			};
		}

		if (options.complete) {
			var oldComplete = options.complete;

			options.complete = function(xhr, status) {
				var context = options.context || this;

				oldComplete.apply(context, [xhr, status, $form]);
			};
		}

		// are there files to upload?

		// [value] (issue #113), also see comment:
		// https://github.com/malsup/form/commit/588306aedba1de01388032d5f42a60159eea9228#commitcomment-2180219
		var fileInputs = $('input[type=file]:enabled', this).filter(function() {
			return $(this).val() !== '';
		});
		var hasFileInputs = fileInputs.length > 0;
		var mp = 'multipart/form-data';
		var multipart = ($form.attr('enctype') === mp || $form.attr('encoding') === mp);
		var fileAPI = feature.fileapi && feature.formdata;

		log('fileAPI :' + fileAPI);

		var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;
		var jqxhr;

		// options.iframe allows user to force iframe mode
		// 06-NOV-09: now defaulting to iframe mode if file input is detected
		if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
			// hack to fix Safari hang (thanks to Tim Molendijk for this)
			// see: http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
			if (options.closeKeepAlive) {
				$.get(options.closeKeepAlive, function() {
					jqxhr = fileUploadIframe(a);
				});

			} else {
				jqxhr = fileUploadIframe(a);
			}

		} else if ((hasFileInputs || multipart) && fileAPI) {
			jqxhr = fileUploadXhr(a);

		} else {
			jqxhr = $.ajax(options);
		}

		$form.removeData('jqxhr').data('jqxhr', jqxhr);

		// clear element array
		for (var k = 0; k < elements.length; k++) {
			elements[k] = null;
		}

		// fire 'notify' event
		this.trigger('form-submit-notify', [this, options]);

		return this;

		// utility fn for deep serialization
		function deepSerialize(extraData) {
			var serialized = $.param(extraData, options.traditional).split('&');
			var len = serialized.length;
			var result = [];
			var i, part;

			for (i = 0; i < len; i++) {
				// #252; undo param space replacement
				serialized[i] = serialized[i].replace(/\+/g, ' ');
				part = serialized[i].split('=');
				// #278; use array instead of object storage, favoring array serializations
				result.push([decodeURIComponent(part[0]), decodeURIComponent(part[1])]);
			}

			return result;
		}

		// XMLHttpRequest Level 2 file uploads (big hat tip to francois2metz)
		function fileUploadXhr(a) {
			var formdata = new FormData();

			for (var i = 0; i < a.length; i++) {
				formdata.append(a[i].name, a[i].value);
			}

			if (options.extraData) {
				var serializedData = deepSerialize(options.extraData);

				for (i = 0; i < serializedData.length; i++) {
					if (serializedData[i]) {
						formdata.append(serializedData[i][0], serializedData[i][1]);
					}
				}
			}

			options.data = null;

			var s = $.extend(true, {}, $.ajaxSettings, options, {
				contentType : false,
				processData : false,
				cache       : false,
				type        : method || 'POST'
			});

			if (options.uploadProgress) {
				// workaround because jqXHR does not expose upload property
				s.xhr = function() {
					var xhr = $.ajaxSettings.xhr();

					if (xhr.upload) {
						xhr.upload.addEventListener('progress', function(event) {
							var percent = 0;
							var position = event.loaded || event.position;			/* event.position is deprecated */
							var total = event.total;

							if (event.lengthComputable) {
								percent = Math.ceil(position / total * 100);
							}

							options.uploadProgress(event, position, total, percent);
						}, false);
					}

					return xhr;
				};
			}

			s.data = null;

			var beforeSend = s.beforeSend;

			s.beforeSend = function(xhr, o) {
				// Send FormData() provided by user
				if (options.formData) {
					o.data = options.formData;
				} else {
					o.data = formdata;
				}

				if (beforeSend) {
					beforeSend.call(this, xhr, o);
				}
			};

			return $.ajax(s);
		}

		// private function for handling file uploads (hat tip to YAHOO!)
		function fileUploadIframe(a) {
			var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
			var deferred = $.Deferred();

			// #341
			deferred.abort = function(status) {
				xhr.abort(status);
			};

			if (a) {
				// ensure that every serialized input is still enabled
				for (i = 0; i < elements.length; i++) {
					el = $(elements[i]);
					if (hasProp) {
						el.prop('disabled', false);
					} else {
						el.removeAttr('disabled');
					}
				}
			}

			s = $.extend(true, {}, $.ajaxSettings, options);
			s.context = s.context || s;
			id = 'jqFormIO' + new Date().getTime();
			var ownerDocument = form.ownerDocument;
			var $body = $form.closest('body');

			if (s.iframeTarget) {
				$io = $(s.iframeTarget, ownerDocument);
				n = $io.attr2('name');
				if (!n) {
					$io.attr2('name', id);
				} else {
					id = n;
				}

			} else {
				$io = $('<iframe name="' + id + '" src="' + s.iframeSrc + '" />', ownerDocument);
				$io.css({position: 'absolute', top: '-1000px', left: '-1000px'});
			}
			io = $io[0];


			xhr = { // mock object
				aborted               : 0,
				responseText          : null,
				responseXML           : null,
				status                : 0,
				statusText            : 'n/a',
				getAllResponseHeaders : function() {},
				getResponseHeader     : function() {},
				setRequestHeader      : function() {},
				abort                 : function(status) {
					var e = (status === 'timeout' ? 'timeout' : 'aborted');

					log('aborting upload... ' + e);
					this.aborted = 1;

					try { // #214, #257
						if (io.contentWindow.document.execCommand) {
							io.contentWindow.document.execCommand('Stop');
						}
					} catch (ignore) {}

					$io.attr('src', s.iframeSrc); // abort op in progress
					xhr.error = e;
					if (s.error) {
						s.error.call(s.context, xhr, e, status);
					}

					if (g) {
						$.event.trigger('ajaxError', [xhr, s, e]);
					}

					if (s.complete) {
						s.complete.call(s.context, xhr, e);
					}
				}
			};

			g = s.global;
			// trigger ajax global events so that activity/block indicators work like normal
			if (g && $.active++ === 0) {
				$.event.trigger('ajaxStart');
			}
			if (g) {
				$.event.trigger('ajaxSend', [xhr, s]);
			}

			if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
				if (s.global) {
					$.active--;
				}
				deferred.reject();

				return deferred;
			}

			if (xhr.aborted) {
				deferred.reject();

				return deferred;
			}

			// add submitting element to data if we know it
			sub = form.clk;
			if (sub) {
				n = sub.name;
				if (n && !sub.disabled) {
					s.extraData = s.extraData || {};
					s.extraData[n] = sub.value;
					if (sub.type === 'image') {
						s.extraData[n + '.x'] = form.clk_x;
						s.extraData[n + '.y'] = form.clk_y;
					}
				}
			}

			var CLIENT_TIMEOUT_ABORT = 1;
			var SERVER_ABORT = 2;

			function getDoc(frame) {
				/* it looks like contentWindow or contentDocument do not
				 * carry the protocol property in ie8, when running under ssl
				 * frame.document is the only valid response document, since
				 * the protocol is know but not on the other two objects. strange?
				 * "Same origin policy" http://en.wikipedia.org/wiki/Same_origin_policy
				 */

				var doc = null;

				// IE8 cascading access check
				try {
					if (frame.contentWindow) {
						doc = frame.contentWindow.document;
					}
				} catch (err) {
					// IE8 access denied under ssl & missing protocol
					log('cannot get iframe.contentWindow document: ' + err);
				}

				if (doc) { // successful getting content
					return doc;
				}

				try { // simply checking may throw in ie8 under ssl or mismatched protocol
					doc = frame.contentDocument ? frame.contentDocument : frame.document;
				} catch (err) {
					// last attempt
					log('cannot get iframe.contentDocument: ' + err);
					doc = frame.document;
				}

				return doc;
			}

			// Rails CSRF hack (thanks to Yvan Barthelemy)
			var csrf_token = $('meta[name=csrf-token]').attr('content');
			var csrf_param = $('meta[name=csrf-param]').attr('content');

			if (csrf_param && csrf_token) {
				s.extraData = s.extraData || {};
				s.extraData[csrf_param] = csrf_token;
			}

			// take a breath so that pending repaints get some cpu time before the upload starts
			function doSubmit() {
				// make sure form attrs are set
				var t = $form.attr2('target'),
					a = $form.attr2('action'),
					mp = 'multipart/form-data',
					et = $form.attr('enctype') || $form.attr('encoding') || mp;

				// update form attrs in IE friendly way
				form.setAttribute('target', id);
				if (!method || /post/i.test(method)) {
					form.setAttribute('method', 'POST');
				}
				if (a !== s.url) {
					form.setAttribute('action', s.url);
				}

				// ie borks in some cases when setting encoding
				if (!s.skipEncodingOverride && (!method || /post/i.test(method))) {
					$form.attr({
						encoding : 'multipart/form-data',
						enctype  : 'multipart/form-data'
					});
				}

				// support timout
				if (s.timeout) {
					timeoutHandle = setTimeout(function() {
						timedOut = true; cb(CLIENT_TIMEOUT_ABORT);
					}, s.timeout);
				}

				// look for server aborts
				function checkState() {
					try {
						var state = getDoc(io).readyState;

						log('state = ' + state);
						if (state && state.toLowerCase() === 'uninitialized') {
							setTimeout(checkState, 50);
						}

					} catch (e) {
						log('Server abort: ', e, ' (', e.name, ')');
						cb(SERVER_ABORT);				// eslint-disable-line callback-return
						if (timeoutHandle) {
							clearTimeout(timeoutHandle);
						}
						timeoutHandle = undefined;
					}
				}

				// add "extra" data to form if provided in options
				var extraInputs = [];

				try {
					if (s.extraData) {
						for (var n in s.extraData) {
							if (s.extraData.hasOwnProperty(n)) {
								// if using the $.param format that allows for multiple values with the same name
								if ($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
									extraInputs.push(
									$('<input type="hidden" name="' + s.extraData[n].name + '">', ownerDocument).val(s.extraData[n].value)
										.appendTo(form)[0]);
								} else {
									extraInputs.push(
									$('<input type="hidden" name="' + n + '">', ownerDocument).val(s.extraData[n])
										.appendTo(form)[0]);
								}
							}
						}
					}

					if (!s.iframeTarget) {
						// add iframe to doc and submit the form
						$io.appendTo($body);
					}

					if (io.attachEvent) {
						io.attachEvent('onload', cb);
					} else {
						io.addEventListener('load', cb, false);
					}

					setTimeout(checkState, 15);

					try {
						form.submit();

					} catch (err) {
						// just in case form has element with name/id of 'submit'
						var submitFn = document.createElement('form').submit;

						submitFn.apply(form);
					}

				} finally {
					// reset attrs and remove "extra" input elements
					form.setAttribute('action', a);
					form.setAttribute('enctype', et); // #380
					if (t) {
						form.setAttribute('target', t);
					} else {
						$form.removeAttr('target');
					}
					$(extraInputs).remove();
				}
			}

			if (s.forceSync) {
				doSubmit();
			} else {
				setTimeout(doSubmit, 10); // this lets dom updates render
			}

			var data, doc, domCheckCount = 50, callbackProcessed;

			function cb(e) {
				if (xhr.aborted || callbackProcessed) {
					return;
				}

				doc = getDoc(io);
				if (!doc) {
					log('cannot access response document');
					e = SERVER_ABORT;
				}
				if (e === CLIENT_TIMEOUT_ABORT && xhr) {
					xhr.abort('timeout');
					deferred.reject(xhr, 'timeout');

					return;

				} else if (e === SERVER_ABORT && xhr) {
					xhr.abort('server abort');
					deferred.reject(xhr, 'error', 'server abort');

					return;
				}

				if (!doc || doc.location.href === s.iframeSrc) {
					// response not received yet
					if (!timedOut) {
						return;
					}
				}

				if (io.detachEvent) {
					io.detachEvent('onload', cb);
				} else {
					io.removeEventListener('load', cb, false);
				}

				var status = 'success', errMsg;

				try {
					if (timedOut) {
						throw 'timeout';
					}

					var isXml = s.dataType === 'xml' || doc.XMLDocument || $.isXMLDoc(doc);

					log('isXml=' + isXml);

					if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
						if (--domCheckCount) {
							// in some browsers (Opera) the iframe DOM is not always traversable when
							// the onload callback fires, so we loop a bit to accommodate
							log('requeing onLoad callback, DOM not available');
							setTimeout(cb, 250);

							return;
						}
						// let this fall through because server response could be an empty document
						// log('Could not access iframe DOM after mutiple tries.');
						// throw 'DOMException: not available';
					}

					// log('response detected');
					var docRoot = doc.body ? doc.body : doc.documentElement;

					xhr.responseText = docRoot ? docRoot.innerHTML : null;
					xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
					if (isXml) {
						s.dataType = 'xml';
					}
					xhr.getResponseHeader = function(header){
						var headers = {'content-type': s.dataType};

						return headers[header.toLowerCase()];
					};
					// support for XHR 'status' & 'statusText' emulation :
					if (docRoot) {
						xhr.status = Number(docRoot.getAttribute('status')) || xhr.status;
						xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
					}

					var dt = (s.dataType || '').toLowerCase();
					var scr = /(json|script|text)/.test(dt);

					if (scr || s.textarea) {
						// see if user embedded response in textarea
						var ta = doc.getElementsByTagName('textarea')[0];

						if (ta) {
							xhr.responseText = ta.value;
							// support for XHR 'status' & 'statusText' emulation :
							xhr.status = Number(ta.getAttribute('status')) || xhr.status;
							xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;

						} else if (scr) {
							// account for browsers injecting pre around json response
							var pre = doc.getElementsByTagName('pre')[0];
							var b = doc.getElementsByTagName('body')[0];

							if (pre) {
								xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
							} else if (b) {
								xhr.responseText = b.textContent ? b.textContent : b.innerText;
							}
						}

					} else if (dt === 'xml' && !xhr.responseXML && xhr.responseText) {
						xhr.responseXML = toXml(xhr.responseText);			// eslint-disable-line no-use-before-define
					}

					try {
						data = httpData(xhr, dt, s);						// eslint-disable-line no-use-before-define

					} catch (err) {
						status = 'parsererror';
						xhr.error = errMsg = (err || status);
					}

				} catch (err) {
					log('error caught: ', err);
					status = 'error';
					xhr.error = errMsg = (err || status);
				}

				if (xhr.aborted) {
					log('upload aborted');
					status = null;
				}

				if (xhr.status) { // we've set xhr.status
					status = ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) ? 'success' : 'error';
				}

				// ordering of these callbacks/triggers is odd, but that's how $.ajax does it
				if (status === 'success') {
					if (s.success) {
						s.success.call(s.context, data, 'success', xhr);
					}

					deferred.resolve(xhr.responseText, 'success', xhr);

					if (g) {
						$.event.trigger('ajaxSuccess', [xhr, s]);
					}

				} else if (status) {
					if (typeof errMsg === 'undefined') {
						errMsg = xhr.statusText;
					}
					if (s.error) {
						s.error.call(s.context, xhr, status, errMsg);
					}
					deferred.reject(xhr, 'error', errMsg);
					if (g) {
						$.event.trigger('ajaxError', [xhr, s, errMsg]);
					}
				}

				if (g) {
					$.event.trigger('ajaxComplete', [xhr, s]);
				}

				if (g && !--$.active) {
					$.event.trigger('ajaxStop');
				}

				if (s.complete) {
					s.complete.call(s.context, xhr, status);
				}

				callbackProcessed = true;
				if (s.timeout) {
					clearTimeout(timeoutHandle);
				}

				// clean up
				setTimeout(function() {
					if (!s.iframeTarget) {
						$io.remove();
					} else { // adding else to clean up existing iframe response.
						$io.attr('src', s.iframeSrc);
					}
					xhr.responseXML = null;
				}, 100);
			}

			var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
				if (window.ActiveXObject) {
					doc = new ActiveXObject('Microsoft.XMLDOM');
					doc.async = 'false';
					doc.loadXML(s);

				} else {
					doc = (new DOMParser()).parseFromString(s, 'text/xml');
				}

				return (doc && doc.documentElement && doc.documentElement.nodeName !== 'parsererror') ? doc : null;
			};
			var parseJSON = $.parseJSON || function(s) {
				/* jslint evil:true */
				return window['eval']('(' + s + ')');			// eslint-disable-line dot-notation
			};

			var httpData = function(xhr, type, s) { // mostly lifted from jq1.4.4

				var ct = xhr.getResponseHeader('content-type') || '',
					xml = ((type === 'xml' || !type) && ct.indexOf('xml') >= 0),
					data = xml ? xhr.responseXML : xhr.responseText;

				if (xml && data.documentElement.nodeName === 'parsererror') {
					if ($.error) {
						$.error('parsererror');
					}
				}
				if (s && s.dataFilter) {
					data = s.dataFilter(data, type);
				}
				if (typeof data === 'string') {
					if ((type === 'json' || !type) && ct.indexOf('json') >= 0) {
						data = parseJSON(data);
					} else if ((type === 'script' || !type) && ct.indexOf('javascript') >= 0) {
						$.globalEval(data);
					}
				}

				return data;
			};

			return deferred;
		}
	};

	/**
	 * ajaxForm() provides a mechanism for fully automating form submission.
	 *
	 * The advantages of using this method instead of ajaxSubmit() are:
	 *
	 * 1: This method will include coordinates for <input type="image"> elements (if the element
	 *	is used to submit the form).
	 * 2. This method will include the submit element's name/value data (for the element that was
	 *	used to submit the form).
	 * 3. This method binds the submit() method to the form for you.
	 *
	 * The options argument for ajaxForm works exactly as it does for ajaxSubmit. ajaxForm merely
	 * passes the options argument along after properly binding events for submit elements and
	 * the form itself.
	 */
	$.fn.ajaxForm = function(options, data, dataType, onSuccess) {
		if (typeof options === 'string' || (options === false && arguments.length > 0)) {
			options = {
				'url'      : options,
				'data'     : data,
				'dataType' : dataType
			};

			if (typeof onSuccess === 'function') {
				options.success = onSuccess;
			}
		}

		options = options || {};
		options.delegation = options.delegation && $.isFunction($.fn.on);

		// in jQuery 1.3+ we can fix mistakes with the ready state
		if (!options.delegation && this.length === 0) {
			var o = {s: this.selector, c: this.context};

			if (!$.isReady && o.s) {
				log('DOM not ready, queuing ajaxForm');
				$(function() {
					$(o.s, o.c).ajaxForm(options);
				});

				return this;
			}

			// is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
			log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));

			return this;
		}

		if (options.delegation) {
			$(document)
				.off('submit.form-plugin', this.selector, doAjaxSubmit)
				.off('click.form-plugin', this.selector, captureSubmittingElement)
				.on('submit.form-plugin', this.selector, options, doAjaxSubmit)
				.on('click.form-plugin', this.selector, options, captureSubmittingElement);

			return this;
		}

		return this.ajaxFormUnbind()
			.on('submit.form-plugin', options, doAjaxSubmit)
			.on('click.form-plugin', options, captureSubmittingElement);
	};

	// private event handlers
	function doAjaxSubmit(e) {
		/* jshint validthis:true */
		var options = e.data;

		if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
			e.preventDefault();
			$(e.target).closest('form').ajaxSubmit(options); // #365
		}
	}

	function captureSubmittingElement(e) {
		/* jshint validthis:true */
		var target = e.target;
		var $el = $(target);

		if (!$el.is('[type=submit],[type=image]')) {
			// is this a child element of the submit el?  (ex: a span within a button)
			var t = $el.closest('[type=submit]');

			if (t.length === 0) {
				return;
			}
			target = t[0];
		}

		var form = target.form;

		form.clk = target;

		if (target.type === 'image') {
			if (typeof e.offsetX !== 'undefined') {
				form.clk_x = e.offsetX;
				form.clk_y = e.offsetY;

			} else if (typeof $.fn.offset === 'function') {
				var offset = $el.offset();

				form.clk_x = e.pageX - offset.left;
				form.clk_y = e.pageY - offset.top;

			} else {
				form.clk_x = e.pageX - target.offsetLeft;
				form.clk_y = e.pageY - target.offsetTop;
			}
		}
		// clear form vars
		setTimeout(function() {
			form.clk = form.clk_x = form.clk_y = null;
		}, 100);
	}


	// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
	$.fn.ajaxFormUnbind = function() {
		return this.off('submit.form-plugin click.form-plugin');
	};

	/**
	 * formToArray() gathers form element data into an array of objects that can
	 * be passed to any of the following ajax functions: $.get, $.post, or load.
	 * Each object in the array has both a 'name' and 'value' property. An example of
	 * an array for a simple login form might be:
	 *
	 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
	 *
	 * It is this array that is passed to pre-submit callback functions provided to the
	 * ajaxSubmit() and ajaxForm() methods.
	 */
	$.fn.formToArray = function(semantic, elements, filtering) {
		var a = [];

		if (this.length === 0) {
			return a;
		}

		var form = this[0];
		var formId = this.attr('id');
		var els = (semantic || typeof form.elements === 'undefined') ? form.getElementsByTagName('*') : form.elements;
		var els2;

		if (els) {
			els = $.makeArray(els); // convert to standard array
		}

		// #386; account for inputs outside the form which use the 'form' attribute
		// FinesseRus: in non-IE browsers outside fields are already included in form.elements.
		if (formId && (semantic || /(Edge|Trident)\//.test(navigator.userAgent))) {
			els2 = $(':input[form="' + formId + '"]').get(); // hat tip @thet
			if (els2.length) {
				els = (els || []).concat(els2);
			}
		}

		if (!els || !els.length) {
			return a;
		}

		if ($.isFunction(filtering)) {
			els = $.map(els, filtering);
		}

		var i, j, n, v, el, max, jmax;

		for (i = 0, max = els.length; i < max; i++) {
			el = els[i];
			n = el.name;
			if (!n || el.disabled) {
				continue;
			}

			if (semantic && form.clk && el.type === 'image') {
				// handle image inputs on the fly when semantic == true
				if (form.clk === el) {
					a.push({name: n, value: $(el).val(), type: el.type});
					a.push({name: n + '.x', value: form.clk_x}, {name: n + '.y', value: form.clk_y});
				}
				continue;
			}

			v = $.fieldValue(el, true);
			if (v && v.constructor === Array) {
				if (elements) {
					elements.push(el);
				}
				for (j = 0, jmax = v.length; j < jmax; j++) {
					a.push({name: n, value: v[j]});
				}

			} else if (feature.fileapi && el.type === 'file') {
				if (elements) {
					elements.push(el);
				}

				var files = el.files;

				if (files.length) {
					for (j = 0; j < files.length; j++) {
						a.push({name: n, value: files[j], type: el.type});
					}
				} else {
					// #180
					a.push({name: n, value: '', type: el.type});
				}

			} else if (v !== null && typeof v !== 'undefined') {
				if (elements) {
					elements.push(el);
				}
				a.push({name: n, value: v, type: el.type, required: el.required});
			}
		}

		if (!semantic && form.clk) {
			// input type=='image' are not found in elements array! handle it here
			var $input = $(form.clk), input = $input[0];

			n = input.name;

			if (n && !input.disabled && input.type === 'image') {
				a.push({name: n, value: $input.val()});
				a.push({name: n + '.x', value: form.clk_x}, {name: n + '.y', value: form.clk_y});
			}
		}

		return a;
	};

	/**
	 * Serializes form data into a 'submittable' string. This method will return a string
	 * in the format: name1=value1&amp;name2=value2
	 */
	$.fn.formSerialize = function(semantic) {
		// hand off to jQuery.param for proper encoding
		return $.param(this.formToArray(semantic));
	};

	/**
	 * Serializes all field elements in the jQuery object into a query string.
	 * This method will return a string in the format: name1=value1&amp;name2=value2
	 */
	$.fn.fieldSerialize = function(successful) {
		var a = [];

		this.each(function() {
			var n = this.name;

			if (!n) {
				return;
			}

			var v = $.fieldValue(this, successful);

			if (v && v.constructor === Array) {
				for (var i = 0, max = v.length; i < max; i++) {
					a.push({name: n, value: v[i]});
				}

			} else if (v !== null && typeof v !== 'undefined') {
				a.push({name: this.name, value: v});
			}
		});

		// hand off to jQuery.param for proper encoding
		return $.param(a);
	};

	/**
	 * Returns the value(s) of the element in the matched set. For example, consider the following form:
	 *
	 *	<form><fieldset>
	 *		<input name="A" type="text">
	 *		<input name="A" type="text">
	 *		<input name="B" type="checkbox" value="B1">
	 *		<input name="B" type="checkbox" value="B2">
	 *		<input name="C" type="radio" value="C1">
	 *		<input name="C" type="radio" value="C2">
	 *	</fieldset></form>
	 *
	 *	var v = $('input[type=text]').fieldValue();
	 *	// if no values are entered into the text inputs
	 *	v === ['','']
	 *	// if values entered into the text inputs are 'foo' and 'bar'
	 *	v === ['foo','bar']
	 *
	 *	var v = $('input[type=checkbox]').fieldValue();
	 *	// if neither checkbox is checked
	 *	v === undefined
	 *	// if both checkboxes are checked
	 *	v === ['B1', 'B2']
	 *
	 *	var v = $('input[type=radio]').fieldValue();
	 *	// if neither radio is checked
	 *	v === undefined
	 *	// if first radio is checked
	 *	v === ['C1']
	 *
	 * The successful argument controls whether or not the field element must be 'successful'
	 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
	 * The default value of the successful argument is true. If this value is false the value(s)
	 * for each element is returned.
	 *
	 * Note: This method *always* returns an array. If no valid value can be determined the
	 *	array will be empty, otherwise it will contain one or more values.
	 */
	$.fn.fieldValue = function(successful) {
		for (var val = [], i = 0, max = this.length; i < max; i++) {
			var el = this[i];
			var v = $.fieldValue(el, successful);

			if (v === null || typeof v === 'undefined' || (v.constructor === Array && !v.length)) {
				continue;
			}

			if (v.constructor === Array) {
				$.merge(val, v);
			} else {
				val.push(v);
			}
		}

		return val;
	};

	/**
	 * Returns the value of the field element.
	 */
	$.fieldValue = function(el, successful) {
		var n = el.name, t = el.type, tag = el.tagName.toLowerCase();

		if (typeof successful === 'undefined') {
			successful = true;
		}

		/* eslint-disable no-mixed-operators */
		if (successful && (!n || el.disabled || t === 'reset' || t === 'button' ||
			(t === 'checkbox' || t === 'radio') && !el.checked ||
			(t === 'submit' || t === 'image') && el.form && el.form.clk !== el ||
			tag === 'select' && el.selectedIndex === -1)) {
		/* eslint-enable no-mixed-operators */
			return null;
		}

		if (tag === 'select') {
			var index = el.selectedIndex;

			if (index < 0) {
				return null;
			}

			var a = [], ops = el.options;
			var one = (t === 'select-one');
			var max = (one ? index + 1 : ops.length);

			for (var i = (one ? index : 0); i < max; i++) {
				var op = ops[i];

				if (op.selected && !op.disabled) {
					var v = op.value;

					if (!v) { // extra pain for IE...
						v = (op.attributes && op.attributes.value && !(op.attributes.value.specified)) ? op.text : op.value;
					}

					if (one) {
						return v;
					}

					a.push(v);
				}
			}

			return a;
		}

		return $(el).val().replace(rCRLF, '\r\n');
	};

	/**
	 * Clears the form data. Takes the following actions on the form's input fields:
	 *  - input text fields will have their 'value' property set to the empty string
	 *  - select elements will have their 'selectedIndex' property set to -1
	 *  - checkbox and radio inputs will have their 'checked' property set to false
	 *  - inputs of type submit, button, reset, and hidden will *not* be effected
	 *  - button elements will *not* be effected
	 */
	$.fn.clearForm = function(includeHidden) {
		return this.each(function() {
			$('input,select,textarea', this).clearFields(includeHidden);
		});
	};

	/**
	 * Clears the selected form elements.
	 */
	$.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
		var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list

		return this.each(function() {
			var t = this.type, tag = this.tagName.toLowerCase();

			if (re.test(t) || tag === 'textarea') {
				this.value = '';

			} else if (t === 'checkbox' || t === 'radio') {
				this.checked = false;

			} else if (tag === 'select') {
				this.selectedIndex = -1;

			} else if (t === 'file') {
				if (/MSIE/.test(navigator.userAgent)) {
					$(this).replaceWith($(this).clone(true));
				} else {
					$(this).val('');
				}

			} else if (includeHidden) {
				// includeHidden can be the value true, or it can be a selector string
				// indicating a special test; for example:
				// $('#myForm').clearForm('.special:hidden')
				// the above would clean hidden inputs that have the class of 'special'
				if ((includeHidden === true && /hidden/.test(t)) ||
					(typeof includeHidden === 'string' && $(this).is(includeHidden))) {
					this.value = '';
				}
			}
		});
	};


	/**
	 * Resets the form data or individual elements. Takes the following actions
	 * on the selected tags:
	 * - all fields within form elements will be reset to their original value
	 * - input / textarea / select fields will be reset to their original value
	 * - option / optgroup fields (for multi-selects) will defaulted individually
	 * - non-multiple options will find the right select to default
	 * - label elements will be searched against its 'for' attribute
	 * - all others will be searched for appropriate children to default
	 */
	$.fn.resetForm = function() {
		return this.each(function() {
			var el = $(this);
			var tag = this.tagName.toLowerCase();

			switch (tag) {
			case 'input':
				this.checked = this.defaultChecked;
					// fall through

			case 'textarea':
				this.value = this.defaultValue;

				return true;

			case 'option':
			case 'optgroup':
				var select = el.parents('select');

				if (select.length && select[0].multiple) {
					if (tag === 'option') {
						this.selected = this.defaultSelected;
					} else {
						el.find('option').resetForm();
					}
				} else {
					select.resetForm();
				}

				return true;

			case 'select':
				el.find('option').each(function(i) {				// eslint-disable-line consistent-return
					this.selected = this.defaultSelected;
					if (this.defaultSelected && !el[0].multiple) {
						el[0].selectedIndex = i;

						return false;
					}
				});

				return true;

			case 'label':
				var forEl = $(el.attr('for'));
				var list = el.find('input,select,textarea');

				if (forEl[0]) {
					list.unshift(forEl[0]);
				}

				list.resetForm();

				return true;

			case 'form':
					// guard against an input with the name of 'reset'
					// note that IE reports the reset function as an 'object'
				if (typeof this.reset === 'function' || (typeof this.reset === 'object' && !this.reset.nodeType)) {
					this.reset();
				}

				return true;

			default:
				el.find('form,input,label,select,textarea').resetForm();

				return true;
			}
		});
	};

	/**
	 * Enables or disables any matching elements.
	 */
	$.fn.enable = function(b) {
		if (typeof b === 'undefined') {
			b = true;
		}

		return this.each(function() {
			this.disabled = !b;
		});
	};

	/**
	 * Checks/unchecks any matching checkboxes or radio buttons and
	 * selects/deselects and matching option elements.
	 */
	$.fn.selected = function(select) {
		if (typeof select === 'undefined') {
			select = true;
		}

		return this.each(function() {
			var t = this.type;

			if (t === 'checkbox' || t === 'radio') {
				this.checked = select;

			} else if (this.tagName.toLowerCase() === 'option') {
				var $sel = $(this).parent('select');

				if (select && $sel[0] && $sel[0].type === 'select-one') {
					// deselect all other options
					$sel.find('option').selected(false);
				}

				this.selected = select;
			}
		});
	};

	// expose debug var
	$.fn.ajaxSubmit.debug = false;

	// helper fn for console logging
	function log() {
		if (!$.fn.ajaxSubmit.debug) {
			return;
		}

		var msg = '[jquery.form] ' + Array.prototype.join.call(arguments, '');

		if (window.console && window.console.log) {
			window.console.log(msg);

		} else if (window.opera && window.opera.postError) {
			window.opera.postError(msg);
		}
	}
}));

/* Backdrop pattern.
 *
 * Options:
 *    zIndex(integer): z-index of backdrop element. (null)
 *    opacity(float): opacity level of backdrop element. (0.8)
 *    className(string): class name of backdrop element. ('backdrop')
 *    classActiveName(string): class name when backdrop is active. ('backdrop-active')
 *    closeOnEsc(boolean): should backdrop close when ESC key is pressed. (true)
 *    closeOnClick(boolean): should backdrop close when clicked on it. (true)
 *
 * Documentation:
 *    # TODO: we need example or this is not pattern :)
 *
 * Example: example-1
 *
 */


define('mockup-patterns-backdrop',[
  'jquery',
  'pat-base'
], function($, Base) {
  

  var Backdrop = Base.extend({
    name: 'backdrop',
    trigger: '.pat-backdrop',
    parser: 'mockup',
    defaults: {
      zIndex: null,
      opacity: 0.8,
      className: 'plone-backdrop',
      classActiveName: 'plone-backdrop-active',
      closeOnEsc: true,
      closeOnClick: true
    },
    init: function() {
      var self = this;
      self.$backdrop = $('> .' + self.options.className, self.$el);
      if (self.$backdrop.size() === 0) {
        self.$backdrop = $('<div/>')
            .hide()
            .appendTo(self.$el)
            .addClass(self.options.className);
        if (self.options.zIndex !== null) {
          self.$backdrop.css('z-index', self.options.zIndex);
        }
      }
      if (self.options.closeOnEsc === true) {
        $(document).on('keydown', function(e, data) {
          if (self.$el.is('.' + self.options.classActiveName)) {
            if (e.keyCode === 27) {  // ESC key pressed
              self.hide();
            }
          }
        });
      }
      if (self.options.closeOnClick === true) {
        self.$backdrop.on('click', function() {
          if (self.$el.is('.' + self.options.classActiveName)) {
            self.hide();
          }
        });
      }
    },
    show: function() {
      var self = this;
      if (!self.$el.hasClass(self.options.classActiveName)) {
        self.emit('show');
        self.$backdrop.css('opacity', '0').show();
        self.$el.addClass(self.options.classActiveName);
        self.$backdrop.animate({ opacity: self.options.opacity }, 500);
        self.emit('shown');
      }
    },
    hide: function() {
      var self = this;
      if (self.$el.hasClass(self.options.classActiveName)) {
        self.emit('hide');
        self.$backdrop.animate({ opacity: '0' }, 500).hide();
        self.$el.removeClass(self.options.classActiveName);
        self.emit('hidden');
      }
    }
  });

  return Backdrop;

});

/* i18n integration. This is forked from jarn.jsi18n
 *
 * This is a singleton.
 * Configuration is done on the body tag data-i18ncatalogurl attribute
 *     <body data-i18ncatalogurl="/plonejsi18n">
 *
 *  Or, it'll default to "/plonejsi18n"
 */
define('mockup-i18n',[
  'jquery'
], function($) {
  

  var I18N = function() {
    var self = this;
    self.baseUrl = $('body').attr('data-i18ncatalogurl');
    self.currentLanguage = $('html').attr('lang') || 'en';

    // Fix for country specific languages
    if (self.currentLanguage.split('-').length > 1) {
      self.currentLanguage = self.currentLanguage.split('-')[0] + '_' + self.currentLanguage.split('-')[1].toUpperCase();
    }

    self.storage = null;
    self.catalogs = {};
    self.ttl = 24 * 3600 * 1000;

    // Internet Explorer 8 does not know Date.now() which is used in e.g. loadCatalog, so we "define" it
    if (!Date.now) {
      Date.now = function() {
        return new Date().valueOf();
      };
    }

    try {
      if ('localStorage' in window && window.localStorage !== null && 'JSON' in window && window.JSON !== null) {
        self.storage = window.localStorage;
      }
    } catch (e) {}

    self.configure = function(config) {
      for (var key in config){
        self[key] = config[key];
      }
    };

    self._setCatalog = function (domain, language, catalog) {
      if (domain in self.catalogs) {
        self.catalogs[domain][language] = catalog;
      } else {
        self.catalogs[domain] = {};
        self.catalogs[domain][language] = catalog;
      }
    };

    self._storeCatalog = function (domain, language, catalog) {
      var key = domain + '-' + language;
      if (self.storage !== null && catalog !== null) {
        self.storage.setItem(key, JSON.stringify(catalog));
        self.storage.setItem(key + '-updated', Date.now());
      }
    };

    self.getUrl = function(domain, language) {
      return self.baseUrl + '?domain=' + domain + '&language=' + language;
    };

    self.loadCatalog = function (domain, language) {
      if (language === undefined) {
        language = self.currentLanguage;
      }
      if (self.storage !== null) {
        var key = domain + '-' + language;
        if (key in self.storage) {
          if ((Date.now() - parseInt(self.storage.getItem(key + '-updated'), 10)) < self.ttl) {
            var catalog = JSON.parse(self.storage.getItem(key));
            self._setCatalog(domain, language, catalog);
            return;
          }
        }
      }
      if (!self.baseUrl) {
        return;
      }
      $.getJSON(self.getUrl(domain, language), function (catalog) {
        if (catalog === null) {
          return;
        }
        self._setCatalog(domain, language, catalog);
        self._storeCatalog(domain, language, catalog);
      });
    };

    self.MessageFactory = function (domain, language) {
      language = language || self.currentLanguage;
      return function translate (msgid, keywords) {
        var msgstr;
        if ((domain in self.catalogs) && (language in self.catalogs[domain]) && (msgid in self.catalogs[domain][language])) {
          msgstr = self.catalogs[domain][language][msgid];
        } else {
          msgstr = msgid;
        }
        if (keywords) {
          var regexp, keyword;
          for (keyword in keywords) {
            if (keywords.hasOwnProperty(keyword)) {
              regexp = new RegExp('\\$\\{' + keyword + '\\}', 'g');
              msgstr = msgstr.replace(regexp, keywords[keyword]);
            }
          }
        }
        return msgstr;
      };
    };
  };

  return I18N;
});

/* i18n integration.
 *
 * This is a singleton.
 * Configuration is done on the body tag data-i18ncatalogurl attribute
 *     <body data-i18ncatalogurl="/plonejsi18n">
 *
 *  Or, it'll default to "/plonejsi18n"
 */

define('translate',[
  'mockup-i18n'
], function(I18N) {
  

  // we're creating a singleton here so we can potentially
  // delay the initialization of the translate catalog
  // until after the dom is available
  var _t = null;
  return function(msgid, keywords) {
    if (_t === null) {
      var i18n = new I18N();
      i18n.loadCatalog('widgets');
      _t = i18n.MessageFactory('widgets');
    }
    return _t(msgid, keywords);
  };
});

/* Formunloadalert pattern.
 *
 * Options:
 *    changingEvents(string): Events on which to check for changes (space-separated). ('change keyup paste')
 *    changingFields(string): Fields on which to check for changes (comma-separated). ('input,select,textarea,fileupload')
 *    message(string): Confirmation message to display when dirty form is being unloaded. (Discard changes? If you click OK, any changes you have made will be lost.)
 *
 * Documentation:
 *    # Example
 *
 *    {{ example-1 }}
 *
 * Example: example-1
 *    <form class="pat-formunloadalert" onsubmit="javascript:return false;">
 *      <input type="text" value="" />
 *      <select>
 *        <option value="1">value 1</option>
 *        <option value="2">value 2</option>
 *      </select>
 *      <input
 *        class="btn btn-large btn-primary"
 *        type="submit" value="Submit" />
 *      <br />
 *      <a href="/">Click here to go somewhere else</a>
 *    </form>
 *
 */


define('mockup-patterns-formunloadalert',[
  'jquery',
  'pat-base',
  'translate'
], function ($, Base, _t) {
  

  var FormUnloadAlert = Base.extend({
    name: 'formunloadalert',
    trigger: '.pat-formunloadalert',
    parser: 'mockup',
    _changed : false,       // Stores a listing of raised changes by their key
    _suppressed : false,     // whether or not warning should be suppressed
    defaults: {
      message :  _t('Discard changes? If you click OK, ' +
                 'any changes you have made will be lost.'),
      // events on which to check for changes
      changingEvents: 'change keyup paste',
      // fields on which to check for changes
      changingFields: 'input,select,textarea,fileupload'
    },
    init: function () {
      var self = this;
      // if this is not a form just return
      if (!self.$el.is('form')) { return; }

      $(self.options.changingFields, self.$el).on(
        self.options.changingEvents,
        function (evt) {
          self._changed = true;
        }
      );

      var $modal = self.$el.parents('.plone-modal');
      if ($modal.size() !== 0) {
        $modal.data('patternPloneModal').on('hide', function(e) {
          var modal = $modal.data('patternPloneModal');
          if (modal) {
            modal._suppressHide = self._handleUnload.call(self, e);
          }
        });
      } else {
        $(window).on('beforeunload', function(e) {
          return self._handleUnload(e);
        });
      }

      self.$el.on('submit', function(e) {
        self._suppressed = true;
      });

    },
    _handleUnload : function (e) {
      var self = this;
      if (self._suppressed) {
        self._suppressed = false;
        return undefined;
      }
      if (self._changed) {
        var msg = self.options.message;
        self._handleMsg(e,msg);
        $(window).trigger('messageset');
        return msg;
      }
    },
    _handleMsg:  function(e,msg) {
      (e || window.event).returnValue = msg;
    }
  });
  return FormUnloadAlert;

});

/* Livesearch
 *
 * Options:
 *    ajaxUrl(string): JSON search url
 *    perPage(integer): results per page, defaults to 7
 *    quietMillis: how long to wait after type stops before sending out request in milliseconds. Defaults to 350
 *    minimumInputLength: miniumum number of letters before doing search. Defaults to 3
 *    inputSelector: css select to input element search is done with. Defaults to input[type="text"]
 *    itemTemplate: override template used to render item results
 *
 * Documentation:
 *   # General
 *
 *   # Default
 *
 *   {{ example-1 }}
 *
 * Example: example-1
 *    <form action="search" class="pat-livesearch" data-pat-livesearch="ajaxUrl:livesearch.json">
 *      <input type="text" />
 *    </form>
 *
 */

define('mockup-patterns-livesearch',[
  'jquery',
  'pat-base',
  'underscore',
  'translate'
], function ($, Base, _, _t) {
  

  var Livesearch = Base.extend({
    name: 'livesearch',
    trigger: '.pat-livesearch',
    parser: 'mockup',
    timeout: null,
    active: false,
    results: null,
    selectedItem: -1,
    resultsClass: 'livesearch-results',
    defaults: {
      ajaxUrl: null,
      defaultSortOn: '',
      perPage: 7,
      quietMillis: 350,
      minimumInputLength: 4,
      inputSelector: 'input[type="text"]',
      itemTemplate: '<li class="search-result <%- state %>">' +
        '<h4 class="title"><a href="<%- url %>"><%- title %></a></h4>' +
        '<p class="description"><%- description %></p>' +
      '</li>',
    },
    doSearch: function(page){
      var self = this;
      self.active = true;
      self.render();
      self.$el.addClass('searching');
      var query = self.$el.serialize();
      if(page === undefined){
        page = 1;
      }
      var sort_on = function(){
        var parameters = location.search,
            sorton_position = parameters.indexOf('sort_on');
        if(sorton_position === -1){
          // return default sort
          var $searchResults = $('#search-results');
          if($searchResults.length > 0){
            return $searchResults.attr('data-default-sort');
          }
          return self.options.defaultSortOn;
        }
        // cut string before sort_on parameter
        var sort_on = parameters.substring(sorton_position);
        // cut other parameters
        sort_on = sort_on.split('&')[0];
        // get just the value
        sort_on = sort_on.split('=')[1];
        return sort_on;
      }();

      $.ajax({
        url: self.options.ajaxUrl + '?' + query +
             '&page=' + page +
             '&perPage=' + self.options.perPage +
             '&sort_on=' + sort_on,
        dataType: 'json'
      }).done(function(data){
        self.results = data;
        self.page = page;
        // maybe odd here.. but we're checking to see if the user
        // has typed while a search was being performed. Perhap another search if so
        if(query !== self.$el.serialize()){
          self.doSearch();
        }
      }).fail(function(){
        self.results = {
          items: [{
            url: '',
            title: _t('Error'),
            description: _t('There was an error searching…'),
            state: 'error',
            error: false
          }],
          total: 1
        };
        self.page = 1;
      }).always(function(){
        self.active = false;
        self.selectedItem = -1;
        self.$el.removeClass('searching');
        self.render();
      });
    },
    render: function(){
      var self = this;
      self.$results.empty();

      /* find a status message */

      if(self.active){
        self.$results.append($('<li class="searching">' + _t('searching…') + '</li>'));
      }else if(self.results === null){
        // no results gathered yet
        self.$results.append($('<li class="no-results no-search">' + _t('enter search phrase') + '</li>'));
      } else if(self.results.total === 0){
        self.$results.append($('<li class="no-results">' + _t('no results found') + '</li>'));
      } else{
        self.$results.append($('<li class="results-summary">' + _t('found') +
                               ' ' + self.results.total + ' ' + _t('results') + '</li>'));
      }

      if(self.results !== null){
        var template = _.template(self.options.itemTemplate);
        _.each(self.results.items, function(item, index){
          var $el = $(template($.extend({_t: _t}, item)));
          $el.attr('data-url', item.url).on('click', function(){
            if(!item.error){
              window.location = item.url;
            }
          });
          if(index === self.selectedItem){
            $el.addClass('selected');
          }
          self.$results.append($el);
        });
        var nav = [];
        if(self.page > 1){
          var $prev = $('<a href="#" class="prev">' + _t('Previous') + '</a>');
          $prev.click(function(e){
            self.disableHiding = true;
            e.preventDefault();
            self.doSearch(self.page - 1);
          });
          nav.push($prev);
        }
        if((self.page * self.options.perPage) < self.results.total){
          var $next = $('<a href="#" class="next">' + _t('Next') + '</a>');
          $next.click(function(e){
            self.disableHiding = true;
            e.preventDefault();
            self.doSearch(self.page + 1);
          });
          nav.push($next);
        }
        if(nav.length > 0){
          var $li = $('<li class="load-more"><div class="page">' + self.page + '</div></li>');
          $li.prepend(nav);
          self.$results.append($li);
        }
      }
      self.position();
    },
    position: function(){
      /* we are positioning directly below the
         input box, same width */
      var self = this;

      self.$el.addClass('livesearch-active');
      var pos = self.$input.position();
      self.$results.width(self.$el.outerWidth());
      self.$results.css({
        top: pos.top + self.$input.outerHeight(),
        left: pos.left
      });
      self.$results.show();
    },
    hide: function(){
      this.$results.hide();
      this.$el.removeClass('livesearch-active');
    },
    init: function(){
      var self = this;

      self.$input = self.$el.find(self.options.inputSelector);
      self.$input.off('focusout').on('focusout', function(){
        /* we put this in a timer so click events still
           get trigger on search results */
        setTimeout(function(){
          /* hack, look above, to handle dealing with clicks
             unfocusing element */
          if(!self.disableHiding){
            self.hide();
          }else{
            self.disableHiding = false;
            // and refocus elemtn
            self.$input.focus();
          }
        }, 200);
      }).off('focusin').on('focusin', function(){
        if(!self.onceFocused){
          /* Case: field already filled out but no reasons
             present yet, do ajax search and grab some results */
          self.onceFocused = true;
          if(self.$input.val().length >= self.options.minimumInputLength){
            self.doSearch();
          }
        } else if(!self.$results.is(':visible')){
          self.render();
        }
      }).attr('autocomplete', 'off').off('keyup').on('keyup', function(e){
        var code = e.keyCode || e.which;
        // first off, we're capturing esc presses
        if(code === 27){
          self.$input.val('');
          self.hide();
          return;
        }
        // then, we're capturing up, down and enter key presses
        if(self.results && self.results.items && self.results.items.length > 0){
          if(code === 13){
            /* enter key, check to see if there is a selected item */
            if(self.selectedItem !== -1){
              window.location = self.results.items[self.selectedItem].url;
            }
            return;
          } else if(code === 38){
            /* up key */
            if(self.selectedItem !== -1){
              self.selectedItem -= 1;
              self.render();
            }
            return;
          } else if(code === 40){
            /* down key */
            if(self.selectedItem < self.results.items.length){
              self.selectedItem += 1;
              self.render();
            }
            return;
          }
        }

        /* then, we handle timeouts for doing ajax search */
        if(self.timeout !== null){
          clearTimeout(self.timeout);
          self.timeout = null;
        }
        if(self.active){
          return;
        }
        if(self.$input.val().length >= self.options.minimumInputLength){
          self.timeout = setTimeout(function(){
            self.doSearch();
          }, self.options.quietMillis);
        }else{
          self.results = null;
          self.render();
        }
      });
      $('#sorting-options a').click(function(e){
        e.preventDefault();
        self.onceFocused = false;
      });

      /* create result dom */
      self.$results = $('<ul class="' + self.resultsClass + '"></ul>').hide().insertAfter(self.$input);
    }
  });

  return Livesearch;
});

/* PreventDoubleSubmit pattern.
 *
 * Options:
 *    guardClassName(string): Class applied to submit button after it is clicked once. ('submitting')
 *    optOutClassName(string): Class used to opt-out a submit button from double-submit prevention. ('allowMultiSubmit')
 *    message(string): Message to be displayed when "opt-out" submit button is clicked a second time. ('You already clicked the submit button. Do you really want to submit this form again?')
 *
 * Documentation:
 *    # Example
 *
 *    {{ example-1 }}
 *
 * Example: example-1
 *    <form class="pat-preventdoublesubmit" onsubmit="javascript:return false;">
 *      <input type="text" value="submit this value please!" />
 *      <input class="btn btn-large btn-primary" type="submit" value="Single submit" />
 *      <input class="btn btn-large btn-primary allowMultiSubmit" type="submit" value="Multi submit" />
 *    </form>
 *
 */


define('mockup-patterns-preventdoublesubmit',[
  'jquery',
  'pat-base',
  'translate'
], function($, Base, _t) {
  

  var PreventDoubleSubmit = Base.extend({
    name: 'preventdoublesubmit',
    trigger: '.pat-preventdoublesubmit',
    parser: 'mockup',
    defaults: {
      message : _t('You already clicked the submit button. ' +
                'Do you really want to submit this form again?'),
      guardClassName: 'submitting',
      optOutClassName: 'allowMultiSubmit'
    },
    init: function() {
      var self = this;

      // if this is not a form just return
      if (!self.$el.is('form')) {
        return;
      }

      $(':submit', self.$el).click(function(e) {

        // mark the button as clicked
        $(':submit').removeAttr('clicked');
        $(this).attr('clicked', 'clicked');

        // if submitting and no opt-out guardClassName is found
        // pop up confirmation dialog
        if ($(this).hasClass(self.options.guardClassName) &&
              !$(this).hasClass(self.options.optOutClassName)) {
          return self._confirm.call(self);
        }

        $(this).addClass(self.options.guardClassName);
      });

    },

    _confirm: function(e) {
      return window.confirm(this.options.message);
    }

  });

  return PreventDoubleSubmit;

});

/* Pattern utils
 */


define('mockup-utils',[
  'jquery'
], function($) {
  

  var QueryHelper = function(options) {
    /* if pattern argument provided, it can implement the interface of:
     *    - browsing: boolean if currently browsing
     *    - currentPath: string of current path to apply to search if browsing
     *    - basePath: default path to provide if no subpath used
     */

    var self = this;
    var defaults = {
      pattern: null, // must be passed in
      vocabularyUrl: null,
      searchParam: 'SearchableText', // query string param to pass to search url
      pathOperator: 'plone.app.querystring.operation.string.path',
      attributes: ['UID', 'Title', 'Description', 'getURL', 'portal_type'],
      batchSize: 10, // number of results to retrive
      baseCriteria: [],
      sort_on: 'is_folderish',
      sort_order: 'reverse',
      pathDepth: 1
    };
    self.options = $.extend({}, defaults, options);

    self.pattern = self.options.pattern;
    if (self.pattern === undefined || self.pattern === null) {
      self.pattern = {
        browsing: false,
        basePath: '/'
      };
    }

    if (self.options.url && !self.options.vocabularyUrl) {
      self.options.vocabularyUrl = self.options.url;
    } else if (self.pattern.vocabularyUrl) {
      self.options.vocabularyUrl = self.pattern.vocabularyUrl;
    }
    self.valid = Boolean(self.options.vocabularyUrl);

    self.getBatch = function(page) {
      return {
        page: page ? page : 1,
        size: self.options.batchSize
      };
    };

    self.getCurrentPath = function() {
      var pattern = self.pattern;
      var currentPath;
      /* If currentPath is set on the QueryHelper object, use that first.
       * Then, check on the pattern.
       * Finally, see if it is a function and call it if it is.
       */
      if (self.currentPath) {
        currentPath = self.currentPath;
      } else {
        currentPath = pattern.currentPath;
      }
      if (typeof currentPath === 'function') {
        currentPath = currentPath();
      }
      var path = currentPath;
      if (!path) {
        if (pattern.basePath) {
          path = pattern.basePath;
        } else if (pattern.options.basePath) {
          path = pattern.options.basePath;
        } else {
          path = '/';
        }
      }
      return path;
    };

    self.getCriterias = function(term, searchOptions) {
      if (searchOptions === undefined) {
        searchOptions = {};
      }
      searchOptions = $.extend({}, {
        useBaseCriteria: true,
        additionalCriterias: []
      }, searchOptions);

      var criterias = [];
      if (searchOptions.useBaseCriteria) {
        criterias = self.options.baseCriteria.slice(0);
      }
      if (term) {
        term += '*';
        criterias.push({
          i: self.options.searchParam,
          o: 'plone.app.querystring.operation.string.contains',
          v: term
        });
      }
      if (searchOptions.searchPath) {
        criterias.push({
          i: 'path',
          o: self.options.pathOperator,
          v: searchOptions.searchPath + '::' + self.options.pathDepth
        });
      } else if (self.pattern.browsing) {
        criterias.push({
          i: 'path',
          o: self.options.pathOperator,
          v: self.getCurrentPath() + '::' + self.options.pathDepth
        });
      }
      criterias = criterias.concat(searchOptions.additionalCriterias);
      return criterias;
    };

    self.getQueryData = function(term, page) {
      var data = {
        query: JSON.stringify({
          criteria: self.getCriterias(term),
          sort_on: self.options.sort_on,
          sort_order: self.options.sort_order
        }),
        attributes: JSON.stringify(self.options.attributes)
      };
      if (page) {
        data.batch = JSON.stringify(self.getBatch(page));
      }
      return data;
    };

    self.getUrl = function() {
      var url = self.options.vocabularyUrl;
      if (url.indexOf('?') === -1) {
        url += '?';
      } else {
        url += '&';
      }
      return url + $.param(self.getQueryData());
    };

    self.selectAjax = function() {
      return {
        url: self.options.vocabularyUrl,
        dataType: 'JSON',
        quietMillis: 100,
        data: function(term, page) {
          return self.getQueryData(term, page);
        },
        results: function(data, page) {
          var more = (page * 10) < data.total; // whether or not there are more results available
          // notice we return the value of more so Select2 knows if more results can be loaded
          return {
            results: data.results,
            more: more
          };
        }
      };
    };

    self.search = function(term, operation, value, callback, useBaseCriteria, type) {
      if (useBaseCriteria === undefined) {
        useBaseCriteria = true;
      }
      if (type === undefined) {
        type = 'GET';
      }
      var criteria = [];
      if (useBaseCriteria) {
        criteria = self.options.baseCriteria.slice(0);
      }
      criteria.push({
        i: term,
        o: operation,
        v: value
      });
      var data = {
        query: JSON.stringify({
          criteria: criteria
        }),
        attributes: JSON.stringify(self.options.attributes)
      };
      $.ajax({
        url: self.options.vocabularyUrl,
        dataType: 'JSON',
        data: data,
        type: type,
        success: callback
      });
    };

    return self;
  };

  var Loading = function(options) {
    /*
     * Options:
     *   backdrop(pattern): if you want to have the progress indicator work
     *                      seamlessly with backdrop pattern
     *   zIndex(integer or function): to override default z-index used
     */
    var self = this;
    self.className = 'plone-loader';
    var defaults = {
      backdrop: null,
      zIndex: 10005 // can be a function
    };
    if (!options) {
      options = {};
    }
    self.options = $.extend({}, defaults, options);

    self.init = function() {
      self.$el = $('.' + self.className);
      if (self.$el.length === 0) {
        self.$el = $('<div><div></div></div>');
        self.$el.addClass(self.className).hide().appendTo('body');
      }
    };

    self.show = function(closable) {
      self.init();
      self.$el.show();
      var zIndex = self.options.zIndex;
      if (typeof(zIndex) === 'function') {
        zIndex = Math.max(zIndex(), 10005);
      } else {
        // go through all modals and backdrops and make sure we have a higher
        // z-index to use
        zIndex = 10005;
        $('.plone-modal-wrapper,.plone-modal-backdrop').each(function() {
          zIndex = Math.max(zIndex, $(this).css('zIndex') || 10005);
        });
        zIndex += 1;
      }
      self.$el.css('zIndex', zIndex);

      if (closable === undefined) {
        closable = true;
      }
      if (self.options.backdrop) {
        self.options.backdrop.closeOnClick = closable;
        self.options.backdrop.closeOnEsc = closable;
        self.options.backdrop.init();
        self.options.backdrop.show();
      }
    };

    self.hide = function() {
      self.init();
      self.$el.hide();
    };

    return self;
  };

  var getAuthenticator = function() {
    var $el = $('input[name="_authenticator"]');
    if ($el.length === 0) {
      $el = $('a[href*="_authenticator"]');
      if ($el.length > 0) {
        return $el.attr('href').split('_authenticator=')[1];
      }
      return '';
    } else {
      return $el.val();
    }
  };

  var generateId = function(prefix) {
    if (prefix === undefined) {
      prefix = 'id';
    }
    return prefix + (Math.floor((1 + Math.random()) * 0x10000)
      .toString(16).substring(1));
  };

  var setId = function($el, prefix) {
    if (prefix === undefined) {
      prefix = 'id';
    }
    var id = $el.attr('id');
    if (id === undefined) {
      id = generateId(prefix);
    } else {
      /* hopefully we don't screw anything up here... changing the id
       * in some cases so we get a decent selector */
      id = id.replace(/\./g, '-');
    }
    $el.attr('id', id);
    return id;
  };

  var getWindow = function() {
    var win = window;
    if (win.parent !== window) {
      win = win.parent;
    }
    return win;
  };

  var parseBodyTag = function(txt) {
    return $((/<body[^>]*>[^]*<\/body>/im).exec(txt)[0]
      .replace('<body', '<div').replace('</body>', '</div>')).eq(0).html();
  };

  var featureSupport = {
    /* Well tested feature support for things we use in mockup.
     * All gathered from: http://diveintohtml5.info/everything.html
     * Alternative to using some form of modernizr.
     */
    dragAndDrop: function() {
      return 'draggable' in document.createElement('span');
    },
    fileApi: function() {
      return typeof FileReader != 'undefined'; // jshint ignore:line
    },
    history: function() {
      return !!(window.history && window.history.pushState);
    }
  };

  var bool = function(val) {
    if (typeof val === 'string') {
      val = $.trim(val).toLowerCase();
    }
    return ['false', false, '0', 0, '', undefined, null].indexOf(val) === -1;
  };

  var escapeHTML = function(val) {
    return $('<div/>').text(val).html();
  };

  var removeHTML = function(val) {
    return val.replace(/<[^>]+>/ig, '');
  };

  var storage = {
    // Simple local storage wrapper, which doesn't break down if it's not available.
    get: function (name) {
        if (window.localStorage) {
          var val = window.localStorage[name];
          return typeof(val) === 'string' ? JSON.parse(val) : undefined;
      }
    },

    set: function (name, val) {
      if (window.localStorage) {
        window.localStorage[name] = JSON.stringify(val);
      }
    }
  };

  var createElementFromHTML = function(htmlString) {
    // From: https://stackoverflow.com/a/494348/1337474
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
  };

  return {
    bool: bool,
    escapeHTML: escapeHTML,
    removeHTML: removeHTML,
    featureSupport: featureSupport,
    generateId: generateId,
    getAuthenticator: getAuthenticator,
    getWindow: getWindow,
    Loading: Loading,
    loading: new Loading(),  // provide default loader
    parseBodyTag: parseBodyTag,
    QueryHelper: QueryHelper,
    setId: setId,
    storage: storage,
    createElementFromHTML: createElementFromHTML
  };
});

/* Content loader pattern.
 *
 * Options:
 *    content(string): CSS selector for content, which is going to replace the target. Can be a local element already in the DOM tree or come from an AJAX call by using the url option.
 *    target(string): CSS selector of target element, which is being replaced. If it's empty, the pattern element will be replaced.
 *    trigger(string): Event to trigger content loading. Defaults to "click"
 *    url(string): To load content from remote resource. Use 'el' to use with anchor tag href.
 *
 * Documentation:
 *    # With selector
 *    {{ example-1 }}
 *
 *    # With remote content
 *    {{ example-2 }}
 *
 * Example: example-1
 *    <a href="#" class="pat-contentloader" data-pat-contentloader="content:#clexample1;target:#clexample1target;">Load content</a>
 *    <div id="clexample1target">Original Content</div>
 *    <div id="clexample1" style="display:none">Replaced Content</div>
 *
 * Example: example-2
 *    <a href="#" class="pat-contentloader" data-pat-contentloader="url:something.html;">Load content</a>
 *
 *
 */


define('mockup-patterns-contentloader',[
  'jquery',
  'pat-base',
  'pat-logger',
  'pat-registry',
  'mockup-utils',
  'underscore'
], function($, Base, logger, Registry, utils, _) {
  
  var log = logger.getLogger('pat-contentloader');

  var ContentLoader = Base.extend({
    name: 'contentloader',
    trigger: '.pat-contentloader',
    parser: 'mockup',
    defaults: {
      url: null,
      content: null,
      trigger: 'click',
      target: null,
      template: null,
      dataType: 'html'
    },
    init: function() {
      var that = this;
      if(that.options.url === 'el' && that.$el[0].tagName === 'A'){
        that.options.url = that.$el.attr('href');
      }
      that.$el.removeClass('loading-content');
      that.$el.removeClass('content-load-error');
      if(that.options.trigger === 'immediate'){
        that._load();
      }else{
        that.$el.on(that.options.trigger, function(e){
          e.preventDefault();
          that._load();
        });
      }
    },
    _load: function(){
      var that = this;
      that.$el.addClass('loading-content');
      if(that.options.url){
        that.loadRemote();
      }else{
        that.loadLocal();
      }
    },
    loadRemote: function(){
      var that = this;
      $.ajax({
        url: that.options.url,
        dataType: that.options.dataType,
        success: function(data){
          var $el;
          if(that.options.dataType === 'html'){
            if(data.indexOf('<html') !== -1){
              data = utils.parseBodyTag(data);
            }
            $el = $('<div>' + data + '</div>');  // jQuery starts to search at the first child element.
          }else if(that.options.dataType.indexOf('json') !== -1){
            // must have template defined with json
            if(data.constructor === Array && data.length === 1){
              // normalize json if it makes sense since some json returns as array with one item
              data = data[0];
            }
            try{
              $el = $(_.template(that.options.template)(data));
            }catch(e){
              that.$el.removeClass('loading-content');
              that.$el.addClass('content-load-error');
              log.warn('error rendering template. pat-contentloader will not work');
              return;
            }
          }
          if(that.options.content !== null){
            $el = $el.find(that.options.content);
          }
          that.loadLocal($el);
        },
        error: function(){
          that.$el.removeClass('loading-content');
          that.$el.addClass('content-load-error');
        }
      });
    },
    loadLocal: function($content){
      var that = this;
      if(!$content && that.options.content === null){
        that.$el.removeClass('loading-content');
        that.$el.addClass('content-load-error');
        log.warn('No selector configured');
        return;
      }
      var $target = that.$el;
      if(that.options.target !== null){
        $target = $(that.options.target);
        if($target.size() === 0){
          that.$el.removeClass('loading-content');
          that.$el.addClass('content-load-error');
          log.warn('No target nodes found');
          return;
        }
      }

      if(!$content){
        $content = $(that.options.content).clone();
      }
      if ($content.length) {
        $content.show();
        $target.replaceWith($content);
        Registry.scan($content);
      } else {
        // empty target node instead of removing it.
        // allows for subsequent content loader calls to work sucessfully.
        $target.empty();
      }

      that.$el.removeClass('loading-content');
      that.emit('loading-done');
    }
  });

  return ContentLoader;

});

//     Backbone.js 1.1.2

//     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(root, factory) {

  // Set up Backbone appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define('backbone',['underscore', 'jquery', 'exports'], function(_, $, exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.Backbone = factory(root, exports, _, $);
    });

  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
    var _ = require('underscore');
    factory(root, exports, _);

  // Finally, as a browser global.
  } else {
    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
  }

}(this, function(root, Backbone, _, $) {

  // Initial Setup
  // -------------

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create local references to array methods we'll want to use later.
  var array = [];
  var push = array.push;
  var slice = array.slice;
  var splice = array.splice;

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.1.2';

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = $;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // custom events. You may bind with `on` or remove with `off` callback
  // functions to an event; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {

    // Bind an event to a `callback` function. Passing `"all"` will bind
    // the callback to all events fired.
    on: function(name, callback, context) {
      if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
      this._events || (this._events = {});
      var events = this._events[name] || (this._events[name] = []);
      events.push({callback: callback, context: context, ctx: context || this});
      return this;
    },

    // Bind an event to only be triggered a single time. After the first time
    // the callback is invoked, it will be removed.
    once: function(name, callback, context) {
      if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
      var self = this;
      var once = _.once(function() {
        self.off(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
      return this.on(name, once, context);
    },

    // Remove one or many callbacks. If `context` is null, removes all
    // callbacks with that function. If `callback` is null, removes all
    // callbacks for the event. If `name` is null, removes all bound
    // callbacks for all events.
    off: function(name, callback, context) {
      var retain, ev, events, names, i, l, j, k;
      if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
      if (!name && !callback && !context) {
        this._events = void 0;
        return this;
      }
      names = name ? [name] : _.keys(this._events);
      for (i = 0, l = names.length; i < l; i++) {
        name = names[i];
        if (events = this._events[name]) {
          this._events[name] = retain = [];
          if (callback || context) {
            for (j = 0, k = events.length; j < k; j++) {
              ev = events[j];
              if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
                  (context && context !== ev.context)) {
                retain.push(ev);
              }
            }
          }
          if (!retain.length) delete this._events[name];
        }
      }

      return this;
    },

    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    trigger: function(name) {
      if (!this._events) return this;
      var args = slice.call(arguments, 1);
      if (!eventsApi(this, 'trigger', name, args)) return this;
      var events = this._events[name];
      var allEvents = this._events.all;
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, arguments);
      return this;
    },

    // Tell this object to stop listening to either specific events ... or
    // to every object it's currently listening to.
    stopListening: function(obj, name, callback) {
      var listeningTo = this._listeningTo;
      if (!listeningTo) return this;
      var remove = !name && !callback;
      if (!callback && typeof name === 'object') callback = this;
      if (obj) (listeningTo = {})[obj._listenId] = obj;
      for (var id in listeningTo) {
        obj = listeningTo[id];
        obj.off(name, callback, this);
        if (remove || _.isEmpty(obj._events)) delete this._listeningTo[id];
      }
      return this;
    }

  };

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Implement fancy features of the Events API such as multiple event
  // names `"change blur"` and jQuery-style event maps `{change: action}`
  // in terms of the existing API.
  var eventsApi = function(obj, action, name, rest) {
    if (!name) return true;

    // Handle event maps.
    if (typeof name === 'object') {
      for (var key in name) {
        obj[action].apply(obj, [key, name[key]].concat(rest));
      }
      return false;
    }

    // Handle space separated event names.
    if (eventSplitter.test(name)) {
      var names = name.split(eventSplitter);
      for (var i = 0, l = names.length; i < l; i++) {
        obj[action].apply(obj, [names[i]].concat(rest));
      }
      return false;
    }

    return true;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
    }
  };

  var listenMethods = {listenTo: 'on', listenToOnce: 'once'};

  // Inversion-of-control versions of `on` and `once`. Tell *this* object to
  // listen to an event in another object ... keeping track of what it's
  // listening to.
  _.each(listenMethods, function(implementation, method) {
    Events[method] = function(obj, name, callback) {
      var listeningTo = this._listeningTo || (this._listeningTo = {});
      var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
      listeningTo[id] = obj;
      if (!callback && typeof name === 'object') callback = this;
      obj[implementation](name, callback, this);
      return this;
    };
  });

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId('c');
    this.attributes = {};
    if (options.collection) this.collection = options.collection;
    if (options.parse) attrs = this.parse(attrs, options) || {};
    attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function(key, val, options) {
      var attr, attrs, unset, changes, silent, changing, prev, current;
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      unset           = options.unset;
      silent          = options.silent;
      changes         = [];
      changing        = this._changing;
      this._changing  = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }
      current = this.attributes, prev = this._previousAttributes;

      // Check for changes of `id`.
      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

      // For each `set` attribute, update or delete the current value.
      for (attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          this.changed[attr] = val;
        } else {
          delete this.changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = options;
        for (var i = 0, l = changes.length; i < l; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          options = this._pending;
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var val, changed = false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      for (var attr in diff) {
        if (_.isEqual(old[attr], (val = diff[attr]))) continue;
        (changed || (changed = {}))[attr] = val;
      }
      return changed;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server. If the server's representation of the
    // model differs from its current attributes, they will be overridden,
    // triggering a `"change"` event.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        if (!model.set(model.parse(resp, options), options)) return false;
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      var attrs, method, xhr, attributes = this.attributes;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options = _.extend({validate: true}, options);

      // If we're not waiting and attributes exist, save acts as
      // `set(attr).save(null, opts)` with validation. Otherwise, check if
      // the model will be valid when the attributes, if any, are set.
      if (attrs && !options.wait) {
        if (!this.set(attrs, options)) return false;
      } else {
        if (!this._validate(attrs, options)) return false;
      }

      // Set temporary attributes if `{wait: true}`.
      if (attrs && options.wait) {
        this.attributes = _.extend({}, attributes, attrs);
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = model.parse(resp, options);
        if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
        if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
          return false;
        }
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch') options.attrs = attrs;
      xhr = this.sync(method, this, options);

      // Restore attributes.
      if (attrs && options.wait) this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;

      var destroy = function() {
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(resp) {
        if (options.wait || model.isNew()) destroy();
        if (success) success(model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      if (this.isNew()) {
        options.success();
        return false;
      }
      wrapError(this, options);

      var xhr = this.sync('delete', this, options);
      if (!options.wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base =
        _.result(this, 'urlRoot') ||
        _.result(this.collection, 'url') ||
        urlError();
      if (this.isNew()) return base;
      return base.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return !this.has(this.idAttribute);
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return this._validate({}, _.extend(options || {}, { validate: true }));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
      return false;
    }

  });

  // Underscore methods that we want to implement on the Model.
  var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];

  // Mix in each Underscore method as a proxy to `Model#attributes`.
  _.each(modelMethods, function(method) {
    Model.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.attributes);
      return _[method].apply(_, args);
    };
  });

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analagous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Default options for `Collection#set`.
  var setOptions = {add: true, remove: true, merge: true};
  var addOptions = {add: true, remove: false};

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model){ return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set.
    add: function(models, options) {
      return this.set(models, _.extend({merge: false}, options, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      var singular = !_.isArray(models);
      models = singular ? [models] : _.clone(models);
      options || (options = {});
      var i, l, index, model;
      for (i = 0, l = models.length; i < l; i++) {
        model = models[i] = this.get(models[i]);
        if (!model) continue;
        delete this._byId[model.id];
        delete this._byId[model.cid];
        index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;
        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }
        this._removeReference(model, options);
      }
      return singular ? models[0] : models;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function(models, options) {
      options = _.defaults({}, options, setOptions);
      if (options.parse) models = this.parse(models, options);
      var singular = !_.isArray(models);
      models = singular ? (models ? [models] : []) : _.clone(models);
      var i, l, id, model, attrs, existing, sort;
      var at = options.at;
      var targetModel = this.model;
      var sortable = this.comparator && (at == null) && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;
      var toAdd = [], toRemove = [], modelMap = {};
      var add = options.add, merge = options.merge, remove = options.remove;
      var order = !sortable && add && remove ? [] : false;

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      for (i = 0, l = models.length; i < l; i++) {
        attrs = models[i] || {};
        if (attrs instanceof Model) {
          id = model = attrs;
        } else {
          id = attrs[targetModel.prototype.idAttribute || 'id'];
        }

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        if (existing = this.get(id)) {
          if (remove) modelMap[existing.cid] = true;
          if (merge) {
            attrs = attrs === model ? model.attributes : attrs;
            if (options.parse) attrs = existing.parse(attrs, options);
            existing.set(attrs, options);
            if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
          }
          models[i] = existing;

        // If this is a new, valid model, push it to the `toAdd` list.
        } else if (add) {
          model = models[i] = this._prepareModel(attrs, options);
          if (!model) continue;
          toAdd.push(model);
          this._addReference(model, options);
        }

        // Do not add multiple models with the same `id`.
        model = existing || model;
        if (order && (model.isNew() || !modelMap[model.id])) order.push(model);
        modelMap[model.id] = true;
      }

      // Remove nonexistent models if appropriate.
      if (remove) {
        for (i = 0, l = this.length; i < l; ++i) {
          if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
        }
        if (toRemove.length) this.remove(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      if (toAdd.length || (order && order.length)) {
        if (sortable) sort = true;
        this.length += toAdd.length;
        if (at != null) {
          for (i = 0, l = toAdd.length; i < l; i++) {
            this.models.splice(at + i, 0, toAdd[i]);
          }
        } else {
          if (order) this.models.length = 0;
          var orderedModels = order || toAdd;
          for (i = 0, l = orderedModels.length; i < l; i++) {
            this.models.push(orderedModels[i]);
          }
        }
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({silent: true});

      // Unless silenced, it's time to fire all appropriate add/sort events.
      if (!options.silent) {
        for (i = 0, l = toAdd.length; i < l; i++) {
          (model = toAdd[i]).trigger('add', model, this, options);
        }
        if (sort || (order && order.length)) this.trigger('sort', this, options);
      }

      // Return the added (or merged) model (or models).
      return singular ? models[0] : models;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function(models, options) {
      options || (options = {});
      for (var i = 0, l = this.models.length; i < l; i++) {
        this._removeReference(this.models[i], options);
      }
      options.previousModels = this.models;
      this._reset();
      models = this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return models;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      return this.add(model, _.extend({at: this.length}, options));
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      this.remove(model, options);
      return model;
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      return this.add(model, _.extend({at: 0}, options));
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      this.remove(model, options);
      return model;
    },

    // Slice out a sub-array of models from the collection.
    slice: function() {
      return slice.apply(this.models, arguments);
    },

    // Get a model from the set by id.
    get: function(obj) {
      if (obj == null) return void 0;
      return this._byId[obj] || this._byId[obj.id] || this._byId[obj.cid];
    },

    // Get the model at the given index.
    at: function(index) {
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function(attrs, first) {
      if (_.isEmpty(attrs)) return first ? void 0 : [];
      return this[first ? 'find' : 'filter'](function(model) {
        for (var key in attrs) {
          if (attrs[key] !== model.get(key)) return false;
        }
        return true;
      });
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function(attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      // Run sort based on type of `comparator`.
      if (_.isString(this.comparator) || this.comparator.length === 1) {
        this.models = this.sortBy(this.comparator, this);
      } else {
        this.models.sort(_.bind(this.comparator, this));
      }

      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return _.invoke(this.models, 'get', attr);
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success(collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      if (!(model = this._prepareModel(model, options))) return false;
      if (!options.wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(model, resp) {
        if (options.wait) collection.add(model, options);
        if (success) success(model, resp, options);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models);
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId  = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function(attrs, options) {
      if (attrs instanceof Model) return attrs;
      options = options ? _.clone(options) : {};
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model.validationError) return model;
      this.trigger('invalid', this, model.validationError, options);
      return false;
    },

    // Internal method to create a model's ties to a collection.
    _addReference: function(model, options) {
      this._byId[model.cid] = model;
      if (model.id != null) this._byId[model.id] = model;
      if (!model.collection) model.collection = this;
      model.on('all', this._onModelEvent, this);
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function(model, options) {
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if ((event === 'add' || event === 'remove') && collection !== this) return;
      if (event === 'destroy') this.remove(model, options);
      if (model && event === 'change:' + model.idAttribute) {
        delete this._byId[model.previous(model.idAttribute)];
        if (model.id != null) this._byId[model.id] = model;
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
    'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
    'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
    'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
    'tail', 'drop', 'last', 'without', 'difference', 'indexOf', 'shuffle',
    'lastIndexOf', 'isEmpty', 'chain', 'sample'];

  // Mix in each Underscore method as a proxy to `Collection#models`.
  _.each(methods, function(method) {
    Collection.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.models);
      return _[method].apply(_, args);
    };
  });

  // Underscore methods that take a property name as an argument.
  var attributeMethods = ['groupBy', 'countBy', 'sortBy', 'indexBy'];

  // Use attributes instead of properties.
  _.each(attributeMethods, function(method) {
    Collection.prototype[method] = function(value, context) {
      var iterator = _.isFunction(value) ? value : function(model) {
        return model.get(value);
      };
      return _[method](this.models, iterator, context);
    };
  });

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    options || (options = {});
    _.extend(this, _.pick(options, viewOptions));
    this._ensureElement();
    this.initialize.apply(this, arguments);
    this.delegateEvents();
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be merged as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be preferred to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this.$el.remove();
      this.stopListening();
      return this;
    },

    // Change the view's element (`this.el` property), including event
    // re-delegation.
    setElement: function(element, delegate) {
      if (this.$el) this.undelegateEvents();
      this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
      this.el = this.$el[0];
      if (delegate !== false) this.delegateEvents();
      return this;
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save',
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    // This only works for delegate-able events: not `focus`, `blur`, and
    // not `change`, `submit`, and `reset` in Internet Explorer.
    delegateEvents: function(events) {
      if (!(events || (events = _.result(this, 'events')))) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[events[key]];
        if (!method) continue;

        var match = key.match(delegateEventSplitter);
        var eventName = match[1], selector = match[2];
        method = _.bind(method, this);
        eventName += '.delegateEvents' + this.cid;
        if (selector === '') {
          this.$el.on(eventName, method);
        } else {
          this.$el.on(eventName, selector, method);
        }
      }
      return this;
    },

    // Clears all callbacks previously bound to the view with `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
        this.setElement($el, false);
      } else {
        this.setElement(_.result(this, 'el'), false);
      }
    }

  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // If we're sending a `PATCH` request, and we're in an old Internet Explorer
    // that still has ActiveX enabled by default, override jQuery to use that
    // for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.
    if (params.type === 'PATCH' && noXhrPatch) {
      params.xhr = function() {
        return new ActiveXObject("Microsoft.XMLHTTP");
      };
    }

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  var noXhrPatch =
    typeof window !== 'undefined' && !!window.ActiveXObject &&
      !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch':  'PATCH',
    'delete': 'DELETE',
    'read':   'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        router.execute(callback, args);
        router.trigger.apply(router, ['route:' + name].concat(args));
        router.trigger('route', name, args);
        Backbone.history.trigger('route', router, name, args);
      });
      return this;
    },

    // Execute a route handler with the provided parameters.  This is an
    // excellent place to do pre-route setup or post-route cleanup.
    execute: function(callback, args) {
      if (callback) callback.apply(this, args);
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(optionalParam, '(?:$1)?')
                   .replace(namedParam, function(match, optional) {
                     return optional ? match : '([^/?]+)';
                   })
                   .replace(splatParam, '([^?]*?)');
      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param, i) {
        // Don't decode the search params.
        if (i === params.length - 1) return param || null;
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    _.bindAll(this, 'checkUrl');

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for detecting MSIE.
  var isExplorer = /msie [\w.]+/;

  // Cached regex for removing a trailing slash.
  var trailingSlash = /\/$/;

  // Cached regex for stripping urls of hash.
  var pathStripper = /#.*$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Are we at the app root?
    atRoot: function() {
      return this.location.pathname.replace(/[^\/]$/, '$&/') === this.root;
    },

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the cross-browser normalized URL fragment, either from the URL,
    // the hash, or the override.
    getFragment: function(fragment, forcePushState) {
      if (fragment == null) {
        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
          fragment = decodeURI(this.location.pathname + this.location.search);
          var root = this.root.replace(trailingSlash, '');
          if (!fragment.indexOf(root)) fragment = fragment.slice(root.length);
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error("Backbone.history has already been started");
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);
      var fragment          = this.getFragment();
      var docMode           = document.documentMode;
      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      if (oldIE && this._wantsHashChange) {
        var frame = Backbone.$('<iframe src="javascript:0" tabindex="-1">');
        this.iframe = frame.hide().appendTo('body')[0].contentWindow;
        this.navigate(fragment);
      }

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._hasPushState) {
        Backbone.$(window).on('popstate', this.checkUrl);
      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
        Backbone.$(window).on('hashchange', this.checkUrl);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      // Determine if we need to change the base url, for a pushState link
      // opened by a non-pushState browser.
      this.fragment = fragment;
      var loc = this.location;

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !this.atRoot()) {
          this.fragment = this.getFragment(null, true);
          this.location.replace(this.root + '#' + this.fragment);
          // Return immediately as browser will do redirect to new url
          return true;

        // Or if we've started out with a hash-based route, but we're currently
        // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && this.atRoot() && loc.hash) {
          this.fragment = this.getHash().replace(routeStripper, '');
          this.history.replaceState({}, document.title, this.root + this.fragment);
        }

      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();
      if (current === this.fragment && this.iframe) {
        current = this.getFragment(this.getHash(this.iframe));
      }
      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragment) {
      fragment = this.fragment = this.getFragment(fragment);
      return _.any(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: !!options};

      var url = this.root + (fragment = this.getFragment(fragment || ''));

      // Strip the hash for matching.
      fragment = fragment.replace(pathStripper, '');

      if (this.fragment === fragment) return;
      this.fragment = fragment;

      // Don't include a trailing slash on the root.
      if (fragment === '' && url !== '/') url = url.slice(0, -1);

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._hasPushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if(!options.replace) this.iframe.document.open().close();
          this._updateHash(this.iframe.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain, for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function(model, options) {
    var error = options.error;
    options.error = function(resp) {
      if (error) error(model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

  return Backbone;

}));

/* Pattern router
 */
define('mockup-router',[
  'underscore',
  'backbone'
], function(_, Backbone) {
  

  var regexEscape = function(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  };

  var Router = Backbone.Router.extend({
    actions: [],
    redirects: {},
    addRoute: function(patternName, id, callback, context, pathExp, expReplace) {
      if (_.findWhere(this.patterns, {patternName: patternName, id: id}) === undefined) {
        this.actions.push({patternName: patternName, id: id, callback: callback, context: context, pathExp: pathExp, expReplace: expReplace});
      }
      var regex = new RegExp('(' + regexEscape(patternName) + ':' + regexEscape(id) + ')');
      this.route(regex, 'handleRoute');
    },
    addRedirect: function(pathExp, destination) {
      this.redirects[pathExp] = destination;
    },
    handleRoute: function(pattern) {
      var parts = pattern.split(':');
      var patternName = parts[0];
      var id = parts[1];
      var action = _.findWhere(this.actions, {patternName: patternName, id: id});
      if (action) {
        action.callback.call(action.context);
      }
    },
    redirect: function() {
      var path = window.parent.location.pathname,
          newPath,
          regex,
          hash;

      _.some(this.actions, function(action) {
        if (action.pathExp) {
          regex = new RegExp(action.pathExp);
          if (path.match(regex)) {
            hash = '!/' + action.patternName + ':' + action.id;
            var replaceWith = '';
            if (action.expReplace) {
              replaceWith = action.expReplace;
            }
            newPath = path.replace(regex, replaceWith);
            return true;
          }
        }
      }, this);

      if (hash === undefined) {
        for (var pathExp in this.redirects) {
          regex = new RegExp(pathExp);
          if (path.match(regex)) {
            hash = '!/' + this.redirects[pathExp];
            newPath = path.replace(regex, '');
            break;
          }
        }
      }

      if (hash !== undefined) {
        this._changeLocation.apply(this, [newPath, hash]);
      }
    },
    _changeLocation: function(path, hash) {
      window.parent.location.hash = hash;
      window.parent.location.pathname = path;
    },
    start: function() {
      Backbone.history.start();
    },
    reset: function() {
      this.actions = [];
    }

  });

  return new Router();

});

/* Modal pattern.
 *
 * Options:
 *    height(string): Set the height of the modal, for example: 250px ('')
 *    width(string): Set the width of the modal, for example: 80% or 500px. ('')
 *    margin(function or integer): A function, Integer or String which will be used to set the margin of the modal in pixels. If a function is passed it must return an Integer. (20)
 *    position(string): Position the modal relative to the window with the format: "<horizontal> <vertical>" -- allowed values: top, bottom, left, right, center, middle. ('center middle')
 *    triggers(array): Add event listeners to elements on the page which will open the modal when triggered. Pass an Array of strings with the format ["&lt;event&gt; &lt;selector&gt;"] or ["&lt;event&gt;"]. For example, ["click .someButton"]. If you pass in only an event such as, ["change"], the event listener will be added to the element on which the modal was initiated, usually a link or button. ([])
 *    title(string): A string to place in the modal header. If title is provided, titleSelector is not used. (null)
 *    titleSelector(string): Selector for an element to extract from the content provided to the modal and place in the modal header. ('h1:first')
 *    content(string): Selector for an element within the content provided to the modal to use as the modal body. ('#content')
 *    prependContent(string): Selector for elements within the content provided to the modal which will be collected and inserted, by default above, the modal content. This is useful for extracting things like alerts or status messages on forms and displaying them to the user after an AJAX response. ('.portalMessage')
 *    backdrop(string): Selector for the element upon which the Backdrop pattern should be initiated. The Backdrop is a full width mask that will be apply above the content behind the modal which is useful for highlighting the modal dialog to the user. ('body')
 *    backdropOptions(object): Look at options at backdrop pattern. ({ zIndex: "1040", opacity: "0.8", className: "backdrop", classActiveName: "backdrop-active", closeOnEsc: true, closeOnClick: true })
 *    buttons(string): Selector for matching elements, usually buttons, inputs or links, from the modal content to place in the modal footer. The original elements in the content will be hidden. ('.formControls > input[type="submit"]')
 *    automaticallyAddButtonActions(boolean): Automatically create actions for elements matched with the buttons selector. They will use the options provided in actionOptions. (true)
 *    loadLinksWithinModal(boolean): Automatically load links inside of the modal using AJAX. (true)
 *    actionOptions(object): A hash of selector to options. Where options can include any of the defaults from actionOptions. Allows for the binding of events to elements in the content and provides options for handling ajax requests and displaying them in the modal. ({})
 *        onSuccess(Function|string): function which is called with parameters (modal, response, state, xhr, form) when form has been successfully submitted. if value is a string, this is the name of a function at window level
 *        onFormError(Function|string): function which is called with parameters (modal, response, state, xhr, form) when backend has sent an error after form submission. if value is a string, this is the name of a function at window level
 *        onError(Function|string): function which is called with parameters (xhr, textStatus, errorStatus) when form submission has failed. if value is a string, this is the name of a function at window level
 *
 *
 * Documentation:
 *    # Example
 *
 *    {{ example-basic }}
 *
 *    {{ example-long }}
 *
 *    {{ example-tinymce }}
 *
 *
 * Example: example-basic
 *    <a href="#modal1" class="plone-btn plone-btn-large plone-btn-primary pat-plone-modal"
 *                      data-pat-plone-modal="width: 400">Modal basic</a>
 *    <div id="modal1" style="display: none">
 *      <h1>Basic modal!</h1>
 *      <p>Indeed. Whoa whoa whoa whoa. Wait.</p>
 *    </div>
 *
 * Example: example-long
 *    <a href="#modal2" class="plone-btn plone-btn-lg plone-btn-primary pat-plone-modal"
 *                      data-pat-plone-modal="width: 500">Modal long scrolling</a>
 *    <div id="modal2" style="display: none">
 *      <h1>Basic with scrolling</h1>
 *      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
 *      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
 *      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
 *      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
 *      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
 *      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
 *      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
 *      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
 *      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
 *      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
 *      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
 *    </div>
 *
 *
 * Example: example-tinymce
 *    <a href="#modaltinymce" class="btn btn-lg btn-primary pat-plone-modal"
 *       data-pat-plone-modal="height: 600px;
 *                       width: 80%">
 *       Modal with TinyMCE</a>
 *    <div id="modaltinymce" style="display:none">
 *      <textarea class="pat-tinymce"></textarea>
 *    </div>
 *
 */

define('mockup-patterns-modal',[
  'jquery',
  'underscore',
  'pat-base',
  'mockup-patterns-backdrop',
  'pat-registry',
  'mockup-router',
  'mockup-utils',
  'translate',
  'jquery.form'
], function($, _, Base, Backdrop, registry, Router, utils, _t) {
  

  var Modal = Base.extend({
    name: 'plone-modal',
    trigger: '.pat-plone-modal',
    parser: 'mockup',
    createModal: null,
    $model: null,
    defaults: {
      width: '',
      height: '',
      margin: 20,
      position: 'center middle', // format: '<horizontal> <vertical>' -- allowed values: top, bottom, left, right, center, middle
      triggers: [],
      zIndexSelector: '.plone-modal-wrapper,.plone-modal-backdrop',
      backdrop: 'body', // Element to initiate the Backdrop on.
      backdropOptions: {
        zIndex: '1040',
        opacity: '0.85',
        className: 'plone-modal-backdrop',
        classActiveName: 'plone-backdrop-active',
        closeOnEsc: true,
        closeOnClick: true
      },
      title: null,
      titleSelector: 'h1:first',
      buttons: '.formControls > input[type="submit"], .formControls > button',
      content: '#content',
      automaticallyAddButtonActions: true,
      loadLinksWithinModal: true,
      prependContent: '.portalMessage, #global_statusmessage',
      onRender: null,
      templateOptions: {
        className: 'plone-modal fade',
        classDialog: 'plone-modal-dialog',
        classModal: 'plone-modal-content',
        classHeaderName: 'plone-modal-header',
        classBodyName: 'plone-modal-body',
        classFooterName: 'plone-modal-footer',
        classWrapperName: 'plone-modal-wrapper',
        classWrapperInnerName: 'modal-wrapper-inner',
        classActiveName: 'in',
        classPrependName: '', // String, css class to be applied to the wrapper of the prepended content
        classContentName: '',  // String, class name to be applied to the content of the modal, useful for modal specific styling
        template: '' +
          '<div class="<%= options.className %>">' +
          '  <div class="<%= options.classDialog %>">' +
          '    <div class="<%= options.classModal %>">' +
          '      <div class="<%= options.classHeaderName %>">' +
          '        <a class="plone-modal-close">&times;</a>' +
          '        <% if (title) { %><h2 class="plone-modal-title"><%= title %></h2><% } %>' +
          '      </div>' +
          '      <div class="<%= options.classBodyName %>">' +
          '        <div class="<%= options.classPrependName %>"><%= prepend %></div> ' +
          '        <div class="<%= options.classContentName %>"><%= content %></div>' +
          '      </div>' +
          '      <div class="<%= options.classFooterName %>"> ' +
          '        <% if (buttons) { %><%= buttons %><% } %>' +
          '      </div>' +
          '    </div>' +
          '  </div>' +
          '</div>'
      },
      actions: {},
      actionOptions: {
        eventType: 'click',
        disableAjaxFormSubmit: false,
        target: null,
        ajaxUrl: null, // string, or function($el, options) that returns a string
        modalFunction: null, // String, function name on self to call
        isForm: false,
        timeout: 5000,
        displayInModal: true,
        reloadWindowOnClose: true,
        error: '.portalMessage.error, .alert-danger',
        formFieldError: '.field.error',
        onSuccess: null,
        onError: null,
        onFormError: null,
        onTimeout: null,
        redirectOnResponse: false,
        redirectToUrl: function($action, response, options) {
          var reg;
          reg = /<body.*data-view-url=[\"'](.*)[\"'].*/im.exec(response);
          if (reg && reg.length > 1) {
            // view url as data attribute on body (Plone 5)
            return reg[1].split('"')[0];
          }
          reg = /<body.*data-base-url=[\"'](.*)[\"'].*/im.exec(response);
          if (reg && reg.length > 1) {
            // Base url as data attribute on body (Plone 5)
            return reg[1].split('"')[0];
          }
          reg = /<base.*href=[\"'](.*)[\"'].*/im.exec(response);
          if (reg && reg.length > 1) {
              // base tag available (Plone 4)
              return reg[1];
          }
          return '';
        }
      },
      routerOptions: {
        id: null,
        pathExp: null
      },
      form: function(actions) {
        var self = this;
        var $modal = self.$modal;

        if (self.options.automaticallyAddButtonActions) {
          actions[self.options.buttons] = {};
        }
        actions.a = {};

        $.each(actions, function(action, options) {
          var actionKeys = _.union(_.keys(self.options.actionOptions), ['templateOptions']);
          var actionOptions = $.extend(true, {}, self.options.actionOptions, _.pick(options, actionKeys));
          options.templateOptions = $.extend(true, options.templateOptions, self.options.templateOptions);

          var patternKeys = _.union(_.keys(self.options.actionOptions), ['actions', 'actionOptions']);
          var patternOptions = $.extend(true, _.omit(options, patternKeys), self.options);

          $(action, $('.' + options.templateOptions.classBodyName, $modal)).each(function(action) {
            var $action = $(this);
            $action.on(actionOptions.eventType, function(e) {
              e.stopPropagation();
              e.preventDefault();

              self.loading.show(false);

              // handle event on $action using a function on self
              if (actionOptions.modalFunction !== null) {
                self[actionOptions.modalFunction]();
              // handle event on input/button using jquery.form library
              } else if ($.nodeName($action[0], 'input') || $.nodeName($action[0], 'button') || options.isForm === true) {
                self.options.handleFormAction.apply(self, [$action, actionOptions, patternOptions]);
              // handle event on link with jQuery.ajax
              } else if (options.ajaxUrl !== null || $.nodeName($action[0], 'a')) {
                self.options.handleLinkAction.apply(self, [$action, actionOptions, patternOptions]);
              }

            });
          });
        });
      },
      handleFormAction: function($action, options, patternOptions) {
        var self = this;

        // pass action that was clicked when submiting form
        var extraData = {};
        extraData[$action.attr('name')] = $action.attr('value');

        var $form;

        if ($.nodeName($action[0], 'form')) {
          $form = $action;
        } else {
          $form = $action.parents('form:not(.disableAutoSubmit)');
        }

        var url;
        if (options.ajaxUrl !== null) {
          if (typeof options.ajaxUrl === 'function') {
            url = options.ajaxUrl.apply(self, [$action, options]);
          } else {
            url = options.ajaxUrl;
          }
        } else {
          url = $action.parents('form').attr('action');
        }

        if(options.disableAjaxFormSubmit){
          if($action.attr('name') && $action.attr('value')){
            $form.append($('<input type="hidden" name="' + $action.attr('name') + '" value="' + $action.attr('value') + '" />'));
          }
          $form.trigger('submit');
          return;
        }
        // We want to trigger the form submit event but NOT use the default
        $form.on('submit', function(e) {
          e.preventDefault();
        });
        $form.trigger('submit');

        self.loading.show(false);
        $form.ajaxSubmit({
          timeout: options.timeout,
          data: extraData,
          url: url,
          error: function(xhr, textStatus, errorStatus) {
            self.loading.hide();
            if (textStatus === 'timeout' && options.onTimeout) {
              options.onTimeout.apply(self, xhr, errorStatus);
            // on "error", "abort", and "parsererror"
            } else if (options.onError) {
              if (typeof options.onError === 'string') {
                window[options.onError](xhr, textStatus, errorStatus);
              } else {
                  options.onError(xhr, textStatus, errorStatus);
              }
            } else {
              // window.alert(_t('There was an error submitting the form.'));
              console.log('error happened', textStatus, ' do something');
            }
            self.emit('formActionError', [xhr, textStatus, errorStatus]);
          },
          success: function(response, state, xhr, form) {
            self.loading.hide();
            // if error is found (NOTE: check for both the portal errors
            // and the form field-level errors)
            if ($(options.error, response).size() !== 0 ||
                $(options.formFieldError, response).size() !== 0) {
              if (options.onFormError) {
                if (typeof options.onFormError === 'string') {
                  window[options.onFormError](self, response, state, xhr, form);
                } else {
                  options.onFormError(self, response, state, xhr, form);
                }
              } else {
                self.redraw(response, patternOptions);
              }
              return;
            }

            if (options.redirectOnResponse === true) {
              if (typeof options.redirectToUrl === 'function') {
                window.parent.location.href = options.redirectToUrl.apply(self, [$action, response, options]);
              } else {
                window.parent.location.href = options.redirectToUrl;
              }
              return; // cut out right here since we're changing url
            }

            if (options.onSuccess) {
              if (typeof options.onSuccess === 'string') {
                window[options.onSuccess](self, response, state, xhr, form);
              } else {
                  options.onSuccess(self, response, state, xhr, form);
              }
            }

            if (options.displayInModal === true) {
              self.redraw(response, patternOptions);
            } else {
              $action.trigger('destroy.plone-modal.patterns');
              // also calls hide
              if (options.reloadWindowOnClose) {
                self.reloadWindow();
              }
            }
            self.emit('formActionSuccess', [response, state, xhr, form]);
          }
        });
      },
      handleLinkAction: function($action, options, patternOptions) {
        var self = this;
        var url;
        if ($action.hasClass('pat-plone-modal')) {
          // if link is a modal pattern, do not reload the page
          return ;
        }

        // Figure out URL
        if (options.ajaxUrl) {
          if (typeof options.ajaxUrl === 'function') {
            url = options.ajaxUrl.apply(self, [$action, options]);
          } else {
            url = options.ajaxUrl;
          }
        } else {
          url = $action.attr('href');
        }

        // Non-ajax link (I know it says "ajaxUrl" ...)
        if (options.displayInModal === false) {
          if($action.attr('target') === '_blank'){
            window.open(url, '_blank');
            self.loading.hide();
          }else{
            window.location = url;
          }
          return;
        }

        // ajax version
        $.ajax({
          url: url
        }).fail(function(xhr, textStatus, errorStatus) {
          if (textStatus === 'timeout' && options.onTimeout) {
            options.onTimeout(self.$modal, xhr, errorStatus);

          // on "error", "abort", and "parsererror"
          } else if (options.onError) {
            options.onError(xhr, textStatus, errorStatus);
          } else {
            window.alert(_t('There was an error loading modal.'));
          }
          self.emit('linkActionError', [xhr, textStatus, errorStatus]);
        }).done(function(response, state, xhr) {
          self.redraw(response, patternOptions);
          if (options.onSuccess) {
            if (typeof options.onSuccess === 'string') {
              window[options.onSuccess](self, response, state, xhr);
            } else {
                options.onSuccess(self, response, state, xhr);
            }
          }

          self.emit('linkActionSuccess', [response, state, xhr]);
        }).always(function(){
          self.loading.hide();
        });
      },
      render: function(options) {
        var self = this;

        self.emit('before-render');

        if (!self.$raw) {
          return;
        }
        var $raw = self.$raw.clone();
        // fix for IE9 bug (see http://bugs.jquery.com/ticket/10550)
        $('input:checked', $raw).each(function() {
          if (this.setAttribute) {
            this.setAttribute('checked', 'checked');
          }
        });

        // Object that will be passed to the template
        var tplObject = {
          title: '',
          prepend: '<div />',
          content: '',
          buttons: '<div class="pattern-modal-buttons"></div>',
          options: options.templateOptions
        };

        // setup the Title
        if (options.title === null) {
          var $title = $(options.titleSelector, $raw);
          tplObject.title = $title.html();
          $(options.titleSelector, $raw).remove();
        } else {
          tplObject.title = options.title;
        }

        // Grab items to to insert into the prepend area
        if (options.prependContent) {
          tplObject.prepend = $('<div />').append($(options.prependContent, $raw).clone()).html();
          $(options.prependContent, $raw).remove();
        }

        // Filter out the content if there is a selector provided
        if (options.content) {
          tplObject.content = $(options.content, $raw).html();
        } else {
          tplObject.content = $raw.html();
        }

        // Render html
        self.$modal = $(_.template(self.options.templateOptions.template)(tplObject));
        self.$modalDialog = $('> .' + self.options.templateOptions.classDialog, self.$modal);
        self.$modalContent = $('> .' + self.options.templateOptions.classModal, self.$modalDialog);

        // In most browsers, when you hit the enter key while a form element is focused
        // the browser will trigger the form 'submit' event.  Google Chrome also does this,
        // but not when when the default submit button is hidden with 'display: none'.
        // The following code will work around this issue:
        $('form', self.$modal).on ('keydown', function (event) {
          // ignore keys which are not enter, and ignore enter inside a textarea.
          if (event.keyCode !== 13 || event.target.nodeName === 'TEXTAREA') {
            return;
          }
          event.preventDefault();
          $('input[type=submit], button[type=submit], button:not(type)', this).eq(0).trigger('click');
        });

        // Setup buttons
        $(options.buttons, self.$modal).each(function() {
          var $button = $(this);
          $button
            .on('click', function(e) {
              e.stopPropagation();
              e.preventDefault();
            })
            .clone()
            .appendTo($('.pattern-modal-buttons', self.$modal))
            .off('click').on('click', function(e) {
              e.stopPropagation();
              e.preventDefault();
              $button.trigger('click');
            });
          $button.hide();
        });

        self.emit('before-events-setup');

        // Wire up events
        $('.plone-modal-header > a.plone-modal-close, .plone-modal-footer > a.plone-modal-close', self.$modal)
          .off('click')
          .on('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            $(e.target).trigger('destroy.plone-modal.patterns');
          });

        // form
        if (options.form) {
          options.form.apply(self, [options.actions]);
        }

        self.$modal
          .addClass(self.options.templateOptions.className)
          .on('destroy.plone-modal.patterns', function(e) {
            e.stopPropagation();
            self.hide();
          })
          .on('resize.plone-modal.patterns', function(e) {
            e.stopPropagation();
            e.preventDefault();
            self.positionModal();
          })
          .appendTo(self.$wrapperInner);

        if (self.options.loadLinksWithinModal) {
          self.$modal.on('click', function(e) {
            e.stopPropagation();
            if ($.nodeName(e.target, 'a')) {
              e.preventDefault();
              // TODO: open links inside modal
              // and slide modal body
            }
            self.$modal.trigger('modal-click');
          });
        }
        self.$modal.data('pattern-' + self.name, self);
        self.emit('after-render');
        if (options.onRender) {
          if (typeof options.onRender === 'string') {
            window[options.onRender](self);
          } else {
              options.onRender(self);
          }
        }

      }
    },
    reloadWindow: function() {
      window.parent.location.reload();
    },
    init: function() {
      var self = this;
      self.options.loadLinksWithinModal = $.parseJSON(self.options.loadLinksWithinModal);

      // Router
      if (self.options.routerOptions.id !== null) {
        Router.addRoute('modal', self.options.routerOptions.id, function() {
          this.show();
        }, self, self.options.routerOptions.pathExp, self.options.routerOptions.expReplace);
      }

      if (self.options.backdropOptions.closeOnEsc === true) {
        $(document).on('keydown', function(e, data) {
          if (self.$el.is('.' + self.options.templateOptions.classActiveName)) {
            if (e.keyCode === 27) {  // ESC key pressed
              self.hide();
            }
          }
        });
      }




      $(window.parent).resize(function() {
        self.positionModal();
      });

      if (self.options.triggers) {
        $.each(self.options.triggers, function(i, item) {
          var e = item.substring(0, item.indexOf(' '));
          var selector = item.substring(item.indexOf(' '), item.length);
          $(selector || self.$el).on(e, function(e) {
            e.stopPropagation();
            e.preventDefault();
            self.show();
          });
        });
      }

      if (self.$el.is('a')) {
        if (self.$el.attr('href') && !self.options.image) {
          if (!self.options.target && self.$el.attr('href').substr(0, 1) === '#') {
            self.options.target = self.$el.attr('href');
            self.options.content = '';
          }
          if (!self.options.ajaxUrl && self.$el.attr('href').substr(0, 1) !== '#') {
            self.options.ajaxUrl = function () {
              // Resolve ``href`` attribute later, when modal is shown.
              return self.$el.attr('href');
            };
          }
        }
        self.$el.on('click', function(e) {
          e.stopPropagation();
          e.preventDefault();
          self.show();
        });
      }
      self.initModal();
    },

    createAjaxModal: function() {
      var self = this;
      self.emit('before-ajax');
      self.loading.show();

      var ajaxUrl = self.options.ajaxUrl;
      if (typeof ajaxUrl === 'function') {
        ajaxUrl = ajaxUrl.apply(self, [self.options]);
      }

      self.ajaxXHR = $.ajax({
        url: ajaxUrl,
        type: self.options.ajaxType
      }).done(function(response, textStatus, xhr) {
        self.ajaxXHR = undefined;
        self.$raw = $('<div />').append($(utils.parseBodyTag(response)));
        self.emit('after-ajax', self, textStatus, xhr);
        self._show();
      }).fail(function(xhr, textStatus, errorStatus){
        var options = self.options.actionOptions;
        if (textStatus === 'timeout' && options.onTimeout) {
          options.onTimeout(self.$modal, xhr, errorStatus);
        } else if (options.onError) {
          options.onError(xhr, textStatus, errorStatus);
        } else {
          window.alert(_t('There was an error loading modal.'));
          self.hide();
        }
        self.emit('linkActionError', [xhr, textStatus, errorStatus]);
      }).always(function(){
        self.loading.hide();
      });
    },

    createTargetModal: function() {
      var self = this;
      self.$raw = $(self.options.target).clone();
      self._show();
    },

    createBasicModal: function() {
      var self = this;
      self.$raw = $('<div/>').html(self.$el.clone());
      self._show();
    },

    createHtmlModal: function() {
      var self = this;
      var $el = $(self.options.html);
      self.$raw = $el;
      self._show();
    },

    createImageModal: function(){
      var self = this;
      self.$wrapper.addClass('image-modal');
      var src = self.$el.attr('href');
      var srcset = self.$el.attr('data-modal-srcset') || '';
      var title = $.trim(self.$el.context.innerText) || 'Image';
      // XXX aria?
      self.$raw = $('<div><h1>' + title + '</h1><div id="content"><div class="modal-image"><img src="' + src + '" srcset="' + srcset + '" /></div></div></div>');
      self._show();
    },

    initModal: function() {
      var self = this;
      if (self.options.ajaxUrl) {
        self.createModal = self.createAjaxModal;
      } else if (self.options.target) {
        self.createModal = self.createTargetModal;
      } else if (self.options.html) {
        self.createModal = self.createHtmlModal;
      } else if (self.options.image){
        self.createModal = self.createImageModal;
      } else {
        self.createModal = self.createBasicModal;
      }
    },

    findPosition: function(horpos, vertpos, margin, modalWidth, modalHeight,
                           wrapperInnerWidth, wrapperInnerHeight) {
      var returnpos = {};
      var absTop, absBottom, absLeft, absRight;
      absRight = absLeft = absTop = absLeft = 'auto';

      // -- HORIZONTAL POSITION -----------------------------------------------
      if (horpos === 'left') {
        absLeft = margin + 'px';
        // if the width of the wrapper is smaller than the modal, and thus the
        // screen is smaller than the modal, force the left to simply be 0
        if (modalWidth > wrapperInnerWidth) {
          absLeft = '0px';
        }
        returnpos.left = absLeft;
      }
      else if (horpos === 'right') {
        absRight =  margin + 'px';
        // if the width of the wrapper is smaller than the modal, and thus the
        // screen is smaller than the modal, force the right to simply be 0
        if (modalWidth > wrapperInnerWidth) {
          absRight = '0px';
        }
        returnpos.right = absRight;
        returnpos.left = 'auto';
      }
      // default, no specified location, is to center
      else {
        absLeft = ((wrapperInnerWidth / 2) - (modalWidth / 2) - margin) + 'px';
        // if the width of the wrapper is smaller than the modal, and thus the
        // screen is smaller than the modal, force the left to simply be 0
        if (modalWidth > wrapperInnerWidth) {
          absLeft = '0px';
        }
        returnpos.left = absLeft;
      }

      // -- VERTICAL POSITION -------------------------------------------------
      if (vertpos === 'top') {
        absTop = margin + 'px';
        // if the height of the wrapper is smaller than the modal, and thus the
        // screen is smaller than the modal, force the top to simply be 0
        if (modalHeight > wrapperInnerHeight) {
          absTop = '0px';
        }
        returnpos.top = absTop;
      }
      else if (vertpos === 'bottom') {
        absBottom = margin + 'px';
        // if the height of the wrapper is smaller than the modal, and thus the
        // screen is smaller than the modal, force the bottom to simply be 0
        if (modalHeight > wrapperInnerHeight) {
          absBottom = '0px';
        }
        returnpos.bottom = absBottom;
        returnpos.top = 'auto';
      }
      else {
        // default case, no specified location, is to center
        absTop = ((wrapperInnerHeight / 2) - (modalHeight / 2) - margin) + 'px';
        // if the height of the wrapper is smaller than the modal, and thus the
        // screen is smaller than the modal, force the top to simply be 0
        if (modalHeight > wrapperInnerHeight) {
          absTop = '0px';
        }
        returnpos.top = absTop;
      }
      return returnpos;
    },

    modalInitialized: function() {
      var self = this;
      return self.$modal !== null && self.$modal !== undefined;
    },

    positionModal: function() {
      /* re-position modal at any point.
       *
       * Uses:
       *  options.margin
       *  options.width
       *  options.height
       *  options.position
       */
      var self = this;
      // modal isn't initialized
      if (!self.modalInitialized()) { return; }
      // clear out any previously set styling
      self.$modal.removeAttr('style');

      // if backdrop wrapper is set on body, then wrapper should have height of
      // the window, so we can do scrolling of inner wrapper
      if (self.$wrapper.parent().is('body')) {
        self.$wrapper.height($(window.parent).height());
      }

      var margin = typeof self.options.margin === 'function' ? self.options.margin() : self.options.margin;
      self.$modal.css({
        'position': 'absolute',
        'padding': margin
      });
      self.$modalDialog.css({
        margin: '0',
        padding: '0',
        width: self.options.width, // defaults to "", which doesn't override other css
        height: self.options.height // defaults to "", which doesn't override other css
      });
      self.$modalContent.css({
        width: self.options.width, // defaults to "", which doesn't override other css
      });

      var posopt = self.options.position.split(' '),
          horpos = posopt[0],
          vertpos = posopt[1];
      var modalWidth = self.$modalDialog.outerWidth(true);
      var modalHeight = self.$modalDialog.outerHeight(true);
      var wrapperInnerWidth = self.$wrapperInner.width();
      var wrapperInnerHeight = self.$wrapperInner.height();
      var pos = self.findPosition(
        horpos, vertpos, margin, modalWidth, modalHeight,
        wrapperInnerWidth, wrapperInnerHeight
      );
      for (var key in pos) {
        self.$modalDialog.css(key, pos[key]);
      }
    },

    render: function(options) {
      var self = this;
      self.emit('render');
      self.options.render.apply(self, [options]);
      self.emit('rendered');
    },

    show: function() {
      var self = this;
      self.backdrop = self.createBackdrop();
      self.createModal();
    },

    createBackdrop: function() {
      var self = this,
          backdrop = new Backdrop(
            self.$el.parents(self.options.backdrop),
            self.options.backdropOptions
          ),
          zIndex = 1041;

      $(self.options.zIndexSelector).each(function(){
        zIndex = Math.max(zIndex, parseInt($(this).css('zIndex')) + 1 || 1041);
      });

      self.$wrapper = $('<div/>')
        .hide()
        .css({
          'z-index': zIndex,
          'overflow-y': 'auto',
          'position': 'fixed',
          'height': '100%',
          'width': '100%',
          'bottom': '0',
          'left': '0',
          'right': '0',
          'top': '0'
        })
        .addClass(self.options.templateOptions.classWrapperName)
        .insertBefore(backdrop.$backdrop)
        .on('click', function(e) {
          if (self.options.backdropOptions.closeOnClick) {
            e.stopPropagation();
            e.preventDefault();
            backdrop.hide();
          }
        });
      backdrop.on('hidden', function(e) {
        if (self.$modal !== undefined && self.$modal.hasClass(self.options.templateOptions.classActiveName)) {
          self.hide();
        }
      });
      self.loading = new utils.Loading({
        'backdrop': backdrop
      });
      self.$wrapperInner = $('<div/>')
        .addClass(self.options.classWrapperInnerName)
        .css({
          'position': 'absolute',
          'bottom': '0',
          'left': '0',
          'right': '0',
          'top': '0'
        })
        .appendTo(self.$wrapper);
      return backdrop;
    },

    _show: function() {
      var self = this;
      self.render.apply(self, [ self.options ]);
      self.emit('show');
      self.backdrop.show();
      self.$wrapper.show();
      self.loading.hide();
      self.$el.addClass(self.options.templateOptions.classActiveName);
      self.$modal.addClass(self.options.templateOptions.classActiveName);
      registry.scan(self.$modal);
      self.positionModal();
      $(window.parent).on('resize.plone-modal.patterns', function() {
        self.positionModal();
      });
      $('body').addClass('plone-modal-open');
      self.emit('shown');
    },
    hide: function() {
      var self = this;
      if (self.ajaxXHR) {
        self.ajaxXHR.abort();
      }
      self.emit('hide');
      if (self._suppressHide) {
        if (!window.confirm(self._suppressHide)) {
          return;
        }
      }
      self.loading.hide();
      self.$el.removeClass(self.options.templateOptions.classActiveName);
      if (self.$modal !== undefined) {
        self.$modal.remove();
        self.initModal();
      }
      self.$wrapper.remove();
      if ($('.plone-modal', $('body')).size() < 1) {
        self._suppressHide = undefined;
        self.backdrop.hide();
        $('body').removeClass('plone-modal-open');
        $(window.parent).off('resize.plone-modal.patterns');
      }
      self.emit('hidden');
    },

    redraw: function(response, options) {
      var self = this;
      self.emit('beforeDraw');
      self.$modal.remove();
      self.$raw = $('<div />').append($(utils.parseBodyTag(response)));
      self.render.apply(self, [options || self.options]);
      self.$modal.addClass(self.options.templateOptions.classActiveName);
      self.positionModal();
      registry.scan(self.$modal);
      self.emit('afterDraw');
    }
  });

  return Modal;
});

// Copyright (C) 2010 Plone Foundation
//
// This program is free software; you can redistribute it and/or modify it
// under the terms of the GNU General Public License as published by the Free
// Software Foundation; either version 2 of the License.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
// more details.
//
// You should have received a copy of the GNU General Public License along with
// this program; if not, write to the Free Software Foundation, Inc., 51
// Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
//

require([
  'mockup-patterns-autotoc',
  'mockup-patterns-contentloader',
  'mockup-patterns-cookietrigger',
  'mockup-patterns-formautofocus',
  'mockup-patterns-formunloadalert',
  'mockup-patterns-livesearch',
  'mockup-patterns-markspeciallinks',
  'mockup-patterns-modal',
  'mockup-patterns-navigationmarker',
  'mockup-patterns-preventdoublesubmit',
  'bootstrap-collapse',
  'bootstrap-dropdown',
  'bootstrap-tooltip',
], function () {
  
});

define("plone", function(){});


