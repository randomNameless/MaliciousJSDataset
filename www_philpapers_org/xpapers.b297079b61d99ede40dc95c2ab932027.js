/*
 * This file contains part of the Prototype JavaScript framework, v1.6.0.1, (c) 2005-2007 Sam Stephenson,
 * distributed under the terms of an MIT-style license. See http://www.prototypejs.org. 
 */
var BASE = '/';
var CGI = '/cgi';
var READING_LIST_NAME = 'My reading list';
var cfg = {};

xpa_cfg_loaded=true;

var Prototype = {
Version: '1.7.1',
Browser: (function(){
var ua = navigator.userAgent;
var isOpera = Object.prototype.toString.call(window.opera) == '[object Opera]';
return {
IE: !!window.attachEvent && !isOpera,
Opera: isOpera,
WebKit: ua.indexOf('AppleWebKit/') > -1,
Gecko: ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') === -1,
MobileSafari: /Apple.*Mobile/.test(ua)
}
})(),
BrowserFeatures: {
XPath: !!document.evaluate,
SelectorsAPI: !!document.querySelector,
ElementExtensions: (function() {
var constructor = window.Element || window.HTMLElement;
return !!(constructor && constructor.prototype);
})(),
SpecificElementExtensions: (function() {
if (typeof window.HTMLDivElement !== 'undefined')
return true;
var div = document.createElement('div'),
form = document.createElement('form'),
isSupported = false;
if (div['__proto__'] && (div['__proto__'] !== form['__proto__'])) {
isSupported = true;
}
div = form = null;
return isSupported;
})()
},
ScriptFragment: '<script[^>]*>([\\S\\s]*?)<\/script\\s*>',
JSONFilter: /^\/\*-secure-([\s\S]*)\*\/\s*$/,
emptyFunction: function() { },
K: function(x) { return x }
};
if (Prototype.Browser.MobileSafari)
Prototype.BrowserFeatures.SpecificElementExtensions = false;
var Class = (function() {
var IS_DONTENUM_BUGGY = (function(){
for (var p in { toString: 1 }) {
if (p === 'toString') return false;
}
return true;
})();
function subclass() {};
function create() {
var parent = null, properties = $A(arguments);
if (Object.isFunction(properties[0]))
parent = properties.shift();
function klass() {
this.initialize.apply(this, arguments);
}
Object.extend(klass, Class.Methods);
klass.superclass = parent;
klass.subclasses = [];
if (parent) {
subclass.prototype = parent.prototype;
klass.prototype = new subclass;
parent.subclasses.push(klass);
}
for (var i = 0, length = properties.length; i < length; i++)
klass.addMethods(properties[i]);
if (!klass.prototype.initialize)
klass.prototype.initialize = Prototype.emptyFunction;
klass.prototype.constructor = klass;
return klass;
}
function addMethods(source) {
var ancestor = this.superclass && this.superclass.prototype,
properties = Object.keys(source);
if (IS_DONTENUM_BUGGY) {
if (source.toString != Object.prototype.toString)
properties.push("toString");
if (source.valueOf != Object.prototype.valueOf)
properties.push("valueOf");
}
for (var i = 0, length = properties.length; i < length; i++) {
var property = properties[i], value = source[property];
if (ancestor && Object.isFunction(value) &&
value.argumentNames()[0] == "$super") {
var method = value;
value = (function(m) {
return function() { return ancestor[m].apply(this, arguments); };
})(property).wrap(method);
value.valueOf = (function(method) {
return function() { return method.valueOf.call(method); };
})(method);
value.toString = (function(method) {
return function() { return method.toString.call(method); };
})(method);
}
this.prototype[property] = value;
}
return this;
}
return {
create: create,
Methods: {
addMethods: addMethods
}
};
})();
(function() {
var _toString = Object.prototype.toString,
_hasOwnProperty = Object.prototype.hasOwnProperty,
NULL_TYPE = 'Null',
UNDEFINED_TYPE = 'Undefined',
BOOLEAN_TYPE = 'Boolean',
NUMBER_TYPE = 'Number',
STRING_TYPE = 'String',
OBJECT_TYPE = 'Object',
FUNCTION_CLASS = '[object Function]',
BOOLEAN_CLASS = '[object Boolean]',
NUMBER_CLASS = '[object Number]',
STRING_CLASS = '[object String]',
ARRAY_CLASS = '[object Array]',
DATE_CLASS = '[object Date]',
NATIVE_JSON_STRINGIFY_SUPPORT = window.JSON &&
typeof JSON.stringify === 'function' &&
JSON.stringify(0) === '0' &&
typeof JSON.stringify(Prototype.K) === 'undefined';
var DONT_ENUMS = ['toString', 'toLocaleString', 'valueOf',
'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];
var IS_DONTENUM_BUGGY = (function(){
for (var p in { toString: 1 }) {
if (p === 'toString') return false;
}
return true;
})();
function Type(o) {
switch(o) {
case null: return NULL_TYPE;
case (void 0): return UNDEFINED_TYPE;
}
var type = typeof o;
switch(type) {
case 'boolean': return BOOLEAN_TYPE;
case 'number':  return NUMBER_TYPE;
case 'string':  return STRING_TYPE;
}
return OBJECT_TYPE;
}
function extend(destination, source) {
for (var property in source)
destination[property] = source[property];
return destination;
}
function inspect(object) {
try {
if (isUndefined(object)) return 'undefined';
if (object === null) return 'null';
return object.inspect ? object.inspect() : String(object);
} catch (e) {
if (e instanceof RangeError) return '...';
throw e;
}
}
function toJSON(value) {
return Str('', { '': value }, []);
}
function Str(key, holder, stack) {
var value = holder[key];
if (Type(value) === OBJECT_TYPE && typeof value.toJSON === 'function') {
value = value.toJSON(key);
}
var _class = _toString.call(value);
switch (_class) {
case NUMBER_CLASS:
case BOOLEAN_CLASS:
case STRING_CLASS:
value = value.valueOf();
}
switch (value) {
case null: return 'null';
case true: return 'true';
case false: return 'false';
}
var type = typeof value;
switch (type) {
case 'string':
return value.inspect(true);
case 'number':
return isFinite(value) ? String(value) : 'null';
case 'object':
for (var i = 0, length = stack.length; i < length; i++) {
if (stack[i] === value) {
throw new TypeError("Cyclic reference to '" + value + "' in object");
}
}
stack.push(value);
var partial = [];
if (_class === ARRAY_CLASS) {
for (var i = 0, length = value.length; i < length; i++) {
var str = Str(i, value, stack);
partial.push(typeof str === 'undefined' ? 'null' : str);
}
partial = '[' + partial.join(',') + ']';
} else {
var keys = Object.keys(value);
for (var i = 0, length = keys.length; i < length; i++) {
var key = keys[i], str = Str(key, value, stack);
if (typeof str !== "undefined") {
partial.push(key.inspect(true)+ ':' + str);
}
}
partial = '{' + partial.join(',') + '}';
}
stack.pop();
return partial;
}
}
function stringify(object) {
return JSON.stringify(object);
}
function toQueryString(object) {
return $H(object).toQueryString();
}
function toHTML(object) {
return object && object.toHTML ? object.toHTML() : String.interpret(object);
}
function keys(object) {
if (Type(object) !== OBJECT_TYPE) { throw new TypeError(); }
var results = [];
for (var property in object) {
if (_hasOwnProperty.call(object, property))
results.push(property);
}
if (IS_DONTENUM_BUGGY) {
for (var i = 0; property = DONT_ENUMS[i]; i++) {
if (_hasOwnProperty.call(object, property))
results.push(property);
}
}
return results;
}
function values(object) {
var results = [];
for (var property in object)
results.push(object[property]);
return results;
}
function clone(object) {
return extend({ }, object);
}
function isElement(object) {
return !!(object && object.nodeType == 1);
}
function isArray(object) {
return _toString.call(object) === ARRAY_CLASS;
}
var hasNativeIsArray = (typeof Array.isArray == 'function')
&& Array.isArray([]) && !Array.isArray({});
if (hasNativeIsArray) {
isArray = Array.isArray;
}
function isHash(object) {
return object instanceof Hash;
}
function isFunction(object) {
return _toString.call(object) === FUNCTION_CLASS;
}
function isString(object) {
return _toString.call(object) === STRING_CLASS;
}
function isNumber(object) {
return _toString.call(object) === NUMBER_CLASS;
}
function isDate(object) {
return _toString.call(object) === DATE_CLASS;
}
function isUndefined(object) {
return typeof object === "undefined";
}
extend(Object, {
extend: extend,
inspect: inspect,
toJSON: NATIVE_JSON_STRINGIFY_SUPPORT ? stringify : toJSON,
toQueryString: toQueryString,
toHTML: toHTML,
keys: Object.keys || keys,
values: values,
clone: clone,
isElement: isElement,
isArray: isArray,
isHash: isHash,
isFunction: isFunction,
isString: isString,
isNumber: isNumber,
isDate: isDate,
isUndefined: isUndefined
});
})();
Object.extend(Function.prototype, (function() {
var slice = Array.prototype.slice;
function update(array, args) {
var arrayLength = array.length, length = args.length;
while (length--) array[arrayLength + length] = args[length];
return array;
}
function merge(array, args) {
array = slice.call(array, 0);
return update(array, args);
}
function argumentNames() {
var names = this.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1]
.replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g, '')
.replace(/\s+/g, '').split(',');
return names.length == 1 && !names[0] ? [] : names;
}
function bind(context) {
if (arguments.length < 2 && Object.isUndefined(arguments[0]))
return this;
if (!Object.isFunction(this))
throw new TypeError("The object is not callable.");
var nop = function() {};
var __method = this, args = slice.call(arguments, 1);
var bound = function() {
var a = merge(args, arguments), c = context;
var c = this instanceof bound ? this : context;
return __method.apply(c, a);
};
nop.prototype = this.prototype;
bound.prototype = new nop();
return bound;
}
function bindAsEventListener(context) {
var __method = this, args = slice.call(arguments, 1);
return function(event) {
var a = update([event || window.event], args);
return __method.apply(context, a);
}
}
function curry() {
if (!arguments.length) return this;
var __method = this, args = slice.call(arguments, 0);
return function() {
var a = merge(args, arguments);
return __method.apply(this, a);
}
}
function delay(timeout) {
var __method = this, args = slice.call(arguments, 1);
timeout = timeout * 1000;
return window.setTimeout(function() {
return __method.apply(__method, args);
}, timeout);
}
function defer() {
var args = update([0.01], arguments);
return this.delay.apply(this, args);
}
function wrap(wrapper) {
var __method = this;
return function() {
var a = update([__method.bind(this)], arguments);
return wrapper.apply(this, a);
}
}
function methodize() {
if (this._methodized) return this._methodized;
var __method = this;
return this._methodized = function() {
var a = update([this], arguments);
return __method.apply(null, a);
};
}
var extensions = {
argumentNames: argumentNames,
bindAsEventListener: bindAsEventListener,
curry: curry,
delay: delay,
defer: defer,
wrap: wrap,
methodize: methodize
};
if (!Function.prototype.bind)
extensions.bind = bind;
return extensions;
})());
(function(proto) {
function toISOString() {
return this.getUTCFullYear() + '-' +
(this.getUTCMonth() + 1).toPaddedString(2) + '-' +
this.getUTCDate().toPaddedString(2) + 'T' +
this.getUTCHours().toPaddedString(2) + ':' +
this.getUTCMinutes().toPaddedString(2) + ':' +
this.getUTCSeconds().toPaddedString(2) + 'Z';
}
function toJSON() {
return this.toISOString();
}
if (!proto.toISOString) proto.toISOString = toISOString;
if (!proto.toJSON) proto.toJSON = toJSON;
})(Date.prototype);
RegExp.prototype.match = RegExp.prototype.test;
RegExp.escape = function(str) {
return String(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
};
var PeriodicalExecuter = Class.create({
initialize: function(callback, frequency) {
this.callback = callback;
this.frequency = frequency;
this.currentlyExecuting = false;
this.registerCallback();
},
registerCallback: function() {
this.timer = setInterval(this.onTimerEvent.bind(this), this.frequency * 1000);
},
execute: function() {
this.callback(this);
},
stop: function() {
if (!this.timer) return;
clearInterval(this.timer);
this.timer = null;
},
onTimerEvent: function() {
if (!this.currentlyExecuting) {
try {
this.currentlyExecuting = true;
this.execute();
this.currentlyExecuting = false;
} catch(e) {
this.currentlyExecuting = false;
throw e;
}
}
}
});
Object.extend(String, {
interpret: function(value) {
return value == null ? '' : String(value);
},
specialChar: {
'\b': '\\b',
'\t': '\\t',
'\n': '\\n',
'\f': '\\f',
'\r': '\\r',
'\\': '\\\\'
}
});
Object.extend(String.prototype, (function() {
var NATIVE_JSON_PARSE_SUPPORT = window.JSON &&
typeof JSON.parse === 'function' &&
JSON.parse('{"test": true}').test;
function prepareReplacement(replacement) {
if (Object.isFunction(replacement)) return replacement;
var template = new Template(replacement);
return function(match) { return template.evaluate(match) };
}
function gsub(pattern, replacement) {
var result = '', source = this, match;
replacement = prepareReplacement(replacement);
if (Object.isString(pattern))
pattern = RegExp.escape(pattern);
if (!(pattern.length || pattern.source)) {
replacement = replacement('');
return replacement + source.split('').join(replacement) + replacement;
}
while (source.length > 0) {
if (match = source.match(pattern)) {
result += source.slice(0, match.index);
result += String.interpret(replacement(match));
source  = source.slice(match.index + match[0].length);
} else {
result += source, source = '';
}
}
return result;
}
function sub(pattern, replacement, count) {
replacement = prepareReplacement(replacement);
count = Object.isUndefined(count) ? 1 : count;
return this.gsub(pattern, function(match) {
if (--count < 0) return match[0];
return replacement(match);
});
}
function scan(pattern, iterator) {
this.gsub(pattern, iterator);
return String(this);
}
function truncate(length, truncation) {
length = length || 30;
truncation = Object.isUndefined(truncation) ? '...' : truncation;
return this.length > length ?
this.slice(0, length - truncation.length) + truncation : String(this);
}
function strip() {
return this.replace(/^\s+/, '').replace(/\s+$/, '');
}
function stripTags() {
return this.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi, '');
}
function stripScripts() {
return this.replace(new RegExp(Prototype.ScriptFragment, 'img'), '');
}
function extractScripts() {
var matchAll = new RegExp(Prototype.ScriptFragment, 'img'),
matchOne = new RegExp(Prototype.ScriptFragment, 'im');
return (this.match(matchAll) || []).map(function(scriptTag) {
return (scriptTag.match(matchOne) || ['', ''])[1];
});
}
function evalScripts() {
return this.extractScripts().map(function(script) { return eval(script); });
}
function escapeHTML() {
return this.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function unescapeHTML() {
return this.stripTags().replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
}
function toQueryParams(separator) {
var match = this.strip().match(/([^?#]*)(#.*)?$/);
if (!match) return { };
return match[1].split(separator || '&').inject({ }, function(hash, pair) {
if ((pair = pair.split('='))[0]) {
var key = decodeURIComponent(pair.shift()),
value = pair.length > 1 ? pair.join('=') : pair[0];
if (value != undefined) value = decodeURIComponent(value);
if (key in hash) {
if (!Object.isArray(hash[key])) hash[key] = [hash[key]];
hash[key].push(value);
}
else hash[key] = value;
}
return hash;
});
}
function toArray() {
return this.split('');
}
function succ() {
return this.slice(0, this.length - 1) +
String.fromCharCode(this.charCodeAt(this.length - 1) + 1);
}
function times(count) {
return count < 1 ? '' : new Array(count + 1).join(this);
}
function camelize() {
return this.replace(/-+(.)?/g, function(match, chr) {
return chr ? chr.toUpperCase() : '';
});
}
function capitalize() {
return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase();
}
function underscore() {
return this.replace(/::/g, '/')
.replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
.replace(/([a-z\d])([A-Z])/g, '$1_$2')
.replace(/-/g, '_')
.toLowerCase();
}
function dasherize() {
return this.replace(/_/g, '-');
}
function inspect(useDoubleQuotes) {
var escapedString = this.replace(/[\x00-\x1f\\]/g, function(character) {
if (character in String.specialChar) {
return String.specialChar[character];
}
return '\\u00' + character.charCodeAt().toPaddedString(2, 16);
});
if (useDoubleQuotes) return '"' + escapedString.replace(/"/g, '\\"') + '"';
return "'" + escapedString.replace(/'/g, '\\\'') + "'";
}
function unfilterJSON(filter) {
return this.replace(filter || Prototype.JSONFilter, '$1');
}
function isJSON() {
var str = this;
if (str.blank()) return false;
str = str.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@');
str = str.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']');
str = str.replace(/(?:^|:|,)(?:\s*\[)+/g, '');
return (/^[\],:{}\s]*$/).test(str);
}
function evalJSON(sanitize) {
var json = this.unfilterJSON(),
cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
if (cx.test(json)) {
json = json.replace(cx, function (a) {
return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
});
}
try {
if (!sanitize || json.isJSON()) return eval('(' + json + ')');
} catch (e) { }
throw new SyntaxError('Badly formed JSON string: ' + this.inspect());
}
function parseJSON() {
var json = this.unfilterJSON();
return JSON.parse(json);
}
function include(pattern) {
return this.indexOf(pattern) > -1;
}
function startsWith(pattern) {
return this.lastIndexOf(pattern, 0) === 0;
}
function endsWith(pattern) {
var d = this.length - pattern.length;
return d >= 0 && this.indexOf(pattern, d) === d;
}
function empty() {
return this == '';
}
function blank() {
return /^\s*$/.test(this);
}
function interpolate(object, pattern) {
return new Template(this, pattern).evaluate(object);
}
return {
gsub: gsub,
sub: sub,
scan: scan,
truncate: truncate,
strip: String.prototype.trim || strip,
stripTags: stripTags,
stripScripts: stripScripts,
extractScripts: extractScripts,
evalScripts: evalScripts,
escapeHTML: escapeHTML,
unescapeHTML: unescapeHTML,
toQueryParams:  toQueryParams,
parseQuery: toQueryParams,
toArray: toArray,
succ: succ,
times: times,
camelize: camelize,
capitalize: capitalize,
underscore: underscore,
dasherize: dasherize,
inspect: inspect,
unfilterJSON: unfilterJSON,
isJSON: isJSON,
evalJSON: NATIVE_JSON_PARSE_SUPPORT ? parseJSON : evalJSON,
include: include,
startsWith: startsWith,
endsWith: endsWith,
empty: empty,
blank: blank,
interpolate: interpolate
};
})());
var Template = Class.create({
initialize: function(template, pattern) {
this.template = template.toString();
this.pattern = pattern || Template.Pattern;
},
evaluate: function(object) {
if (object && Object.isFunction(object.toTemplateReplacements))
object = object.toTemplateReplacements();
return this.template.gsub(this.pattern, function(match) {
if (object == null) return (match[1] + '');
var before = match[1] || '';
if (before == '\\') return match[2];
var ctx = object, expr = match[3],
pattern = /^([^.[]+|\[((?:.*?[^\\])?)\])(\.|\[|$)/;
match = pattern.exec(expr);
if (match == null) return before;
while (match != null) {
var comp = match[1].startsWith('[') ? match[2].replace(/\\\\]/g, ']') : match[1];
ctx = ctx[comp];
if (null == ctx || '' == match[3]) break;
expr = expr.substring('[' == match[3] ? match[1].length : match[0].length);
match = pattern.exec(expr);
}
return before + String.interpret(ctx);
});
}
});
Template.Pattern = /(^|.|\r|\n)(#\{(.*?)\})/;
var $break = { };
var Enumerable = (function() {
function each(iterator, context) {
try {
this._each(iterator, context);
} catch (e) {
if (e != $break) throw e;
}
return this;
}
function eachSlice(number, iterator, context) {
var index = -number, slices = [], array = this.toArray();
if (number < 1) return array;
while ((index += number) < array.length)
slices.push(array.slice(index, index+number));
return slices.collect(iterator, context);
}
function all(iterator, context) {
iterator = iterator || Prototype.K;
var result = true;
this.each(function(value, index) {
result = result && !!iterator.call(context, value, index, this);
if (!result) throw $break;
}, this);
return result;
}
function any(iterator, context) {
iterator = iterator || Prototype.K;
var result = false;
this.each(function(value, index) {
if (result = !!iterator.call(context, value, index, this))
throw $break;
}, this);
return result;
}
function collect(iterator, context) {
iterator = iterator || Prototype.K;
var results = [];
this.each(function(value, index) {
results.push(iterator.call(context, value, index, this));
}, this);
return results;
}
function detect(iterator, context) {
var result;
this.each(function(value, index) {
if (iterator.call(context, value, index, this)) {
result = value;
throw $break;
}
}, this);
return result;
}
function findAll(iterator, context) {
var results = [];
this.each(function(value, index) {
if (iterator.call(context, value, index, this))
results.push(value);
}, this);
return results;
}
function grep(filter, iterator, context) {
iterator = iterator || Prototype.K;
var results = [];
if (Object.isString(filter))
filter = new RegExp(RegExp.escape(filter));
this.each(function(value, index) {
if (filter.match(value))
results.push(iterator.call(context, value, index, this));
}, this);
return results;
}
function include(object) {
if (Object.isFunction(this.indexOf))
if (this.indexOf(object) != -1) return true;
var found = false;
this.each(function(value) {
if (value == object) {
found = true;
throw $break;
}
});
return found;
}
function inGroupsOf(number, fillWith) {
fillWith = Object.isUndefined(fillWith) ? null : fillWith;
return this.eachSlice(number, function(slice) {
while(slice.length < number) slice.push(fillWith);
return slice;
});
}
function inject(memo, iterator, context) {
this.each(function(value, index) {
memo = iterator.call(context, memo, value, index, this);
}, this);
return memo;
}
function invoke(method) {
var args = $A(arguments).slice(1);
return this.map(function(value) {
return value[method].apply(value, args);
});
}
function max(iterator, context) {
iterator = iterator || Prototype.K;
var result;
this.each(function(value, index) {
value = iterator.call(context, value, index, this);
if (result == null || value >= result)
result = value;
}, this);
return result;
}
function min(iterator, context) {
iterator = iterator || Prototype.K;
var result;
this.each(function(value, index) {
value = iterator.call(context, value, index, this);
if (result == null || value < result)
result = value;
}, this);
return result;
}
function partition(iterator, context) {
iterator = iterator || Prototype.K;
var trues = [], falses = [];
this.each(function(value, index) {
(iterator.call(context, value, index, this) ?
trues : falses).push(value);
}, this);
return [trues, falses];
}
function pluck(property) {
var results = [];
this.each(function(value) {
results.push(value[property]);
});
return results;
}
function reject(iterator, context) {
var results = [];
this.each(function(value, index) {
if (!iterator.call(context, value, index, this))
results.push(value);
}, this);
return results;
}
function sortBy(iterator, context) {
return this.map(function(value, index) {
return {
value: value,
criteria: iterator.call(context, value, index, this)
};
}, this).sort(function(left, right) {
var a = left.criteria, b = right.criteria;
return a < b ? -1 : a > b ? 1 : 0;
}).pluck('value');
}
function toArray() {
return this.map();
}
function zip() {
var iterator = Prototype.K, args = $A(arguments);
if (Object.isFunction(args.last()))
iterator = args.pop();
var collections = [this].concat(args).map($A);
return this.map(function(value, index) {
return iterator(collections.pluck(index));
});
}
function size() {
return this.toArray().length;
}
function inspect() {
return '#<Enumerable:' + this.toArray().inspect() + '>';
}
return {
each: each,
eachSlice:  eachSlice,
all: all,
every: all,
any: any,
some: any,
collect: collect,
map: collect,
detect: detect,
findAll: findAll,
select: findAll,
filter: findAll,
grep: grep,
include: include,
member: include,
inGroupsOf: inGroupsOf,
inject: inject,
invoke: invoke,
max: max,
min: min,
partition:  partition,
pluck: pluck,
reject: reject,
sortBy: sortBy,
toArray: toArray,
entries: toArray,
zip: zip,
size: size,
inspect: inspect,
find: detect
};
})();
function $A(iterable) {
if (!iterable) return [];
if ('toArray' in Object(iterable)) return iterable.toArray();
var length = iterable.length || 0, results = new Array(length);
while (length--) results[length] = iterable[length];
return results;
}
function $w(string) {
if (!Object.isString(string)) return [];
string = string.strip();
return string ? string.split(/\s+/) : [];
}
Array.from = $A;
(function() {
var arrayProto = Array.prototype,
slice = arrayProto.slice,
_each = arrayProto.forEach;
function each(iterator, context) {
for (var i = 0, length = this.length >>> 0; i < length; i++) {
if (i in this) iterator.call(context, this[i], i, this);
}
}
if (!_each) _each = each;
function clear() {
this.length = 0;
return this;
}
function first() {
return this[0];
}
function last() {
return this[this.length - 1];
}
function compact() {
return this.select(function(value) {
return value != null;
});
}
function flatten() {
return this.inject([], function(array, value) {
if (Object.isArray(value))
return array.concat(value.flatten());
array.push(value);
return array;
});
}
function without() {
var values = slice.call(arguments, 0);
return this.select(function(value) {
return !values.include(value);
});
}
function reverse(inline) {
return (inline === false ? this.toArray() : this)._reverse();
}
function uniq(sorted) {
return this.inject([], function(array, value, index) {
if (0 == index || (sorted ? array.last() != value : !array.include(value)))
array.push(value);
return array;
});
}
function intersect(array) {
return this.uniq().findAll(function(item) {
return array.indexOf(item) !== -1;
});
}
function clone() {
return slice.call(this, 0);
}
function size() {
return this.length;
}
function inspect() {
return '[' + this.map(Object.inspect).join(', ') + ']';
}
function indexOf(item, i) {
if (this == null) throw new TypeError();
var array = Object(this), length = array.length >>> 0;
if (length === 0) return -1;
i = Number(i);
if (isNaN(i)) {
i = 0;
} else if (i !== 0 && isFinite(i)) {
i = (i > 0 ? 1 : -1) * Math.floor(Math.abs(i));
}
if (i > length) return -1;
var k = i >= 0 ? i : Math.max(length - Math.abs(i), 0);
for (; k < length; k++)
if (k in array && array[k] === item) return k;
return -1;
}
function lastIndexOf(item, i) {
if (this == null) throw new TypeError();
var array = Object(this), length = array.length >>> 0;
if (length === 0) return -1;
if (!Object.isUndefined(i)) {
i = Number(i);
if (isNaN(i)) {
i = 0;
} else if (i !== 0 && isFinite(i)) {
i = (i > 0 ? 1 : -1) * Math.floor(Math.abs(i));
}
} else {
i = length;
}
var k = i >= 0 ? Math.min(i, length - 1) :
length - Math.abs(i);
for (; k >= 0; k--)
if (k in array && array[k] === item) return k;
return -1;
}
function concat(_) {
var array = [], items = slice.call(arguments, 0), item, n = 0;
items.unshift(this);
for (var i = 0, length = items.length; i < length; i++) {
item = items[i];
if (Object.isArray(item) && !('callee' in item)) {
for (var j = 0, arrayLength = item.length; j < arrayLength; j++) {
if (j in item) array[n] = item[j];
n++;
}
} else {
array[n++] = item;
}
}
array.length = n;
return array;
}
function wrapNative(method) {
return function() {
if (arguments.length === 0) {
return method.call(this, Prototype.K);
} else if (arguments[0] === undefined) {
var args = slice.call(arguments, 1);
args.unshift(Prototype.K);
return method.apply(this, args);
} else {
return method.apply(this, arguments);
}
};
}
function map(iterator) {
if (this == null) throw new TypeError();
iterator = iterator || Prototype.K;
var object = Object(this);
var results = [], context = arguments[1], n = 0;
for (var i = 0, length = object.length >>> 0; i < length; i++) {
if (i in object) {
results[n] = iterator.call(context, object[i], i, object);
}
n++;
}
results.length = n;
return results;
}
if (arrayProto.map) {
map = wrapNative(Array.prototype.map);
}
function filter(iterator) {
if (this == null || !Object.isFunction(iterator))
throw new TypeError();
var object = Object(this);
var results = [], context = arguments[1], value;
for (var i = 0, length = object.length >>> 0; i < length; i++) {
if (i in object) {
value = object[i];
if (iterator.call(context, value, i, object)) {
results.push(value);
}
}
}
return results;
}
if (arrayProto.filter) {
filter = Array.prototype.filter;
}
function some(iterator) {
if (this == null) throw new TypeError();
iterator = iterator || Prototype.K;
var context = arguments[1];
var object = Object(this);
for (var i = 0, length = object.length >>> 0; i < length; i++) {
if (i in object && iterator.call(context, object[i], i, object)) {
return true;
}
}
return false;
}
if (arrayProto.some) {
var some = wrapNative(Array.prototype.some);
}
function every(iterator) {
if (this == null) throw new TypeError();
iterator = iterator || Prototype.K;
var context = arguments[1];
var object = Object(this);
for (var i = 0, length = object.length >>> 0; i < length; i++) {
if (i in object && !iterator.call(context, object[i], i, object)) {
return false;
}
}
return true;
}
if (arrayProto.every) {
var every = wrapNative(Array.prototype.every);
}
var _reduce = arrayProto.reduce;
function inject(memo, iterator) {
iterator = iterator || Prototype.K;
var context = arguments[2];
return _reduce.call(this, iterator.bind(context), memo);
}
if (!arrayProto.reduce) {
var inject = Enumerable.inject;
}
Object.extend(arrayProto, Enumerable);
if (!arrayProto._reverse)
arrayProto._reverse = arrayProto.reverse;
Object.extend(arrayProto, {
_each: _each,
map: map,
collect: map,
select: filter,
filter: filter,
findAll: filter,
some: some,
any: some,
every: every,
all: every,
inject: inject,
clear: clear,
first: first,
last: last,
compact: compact,
flatten: flatten,
without: without,
reverse: reverse,
uniq: uniq,
intersect: intersect,
clone: clone,
toArray: clone,
size: size,
inspect: inspect
});
var CONCAT_ARGUMENTS_BUGGY = (function() {
return [].concat(arguments)[0][0] !== 1;
})(1,2);
if (CONCAT_ARGUMENTS_BUGGY) arrayProto.concat = concat;
if (!arrayProto.indexOf) arrayProto.indexOf = indexOf;
if (!arrayProto.lastIndexOf) arrayProto.lastIndexOf = lastIndexOf;
})();
function $H(object) {
return new Hash(object);
};
var Hash = Class.create(Enumerable, (function() {
function initialize(object) {
this._object = Object.isHash(object) ? object.toObject() : Object.clone(object);
}
function _each(iterator, context) {
for (var key in this._object) {
var value = this._object[key], pair = [key, value];
pair.key = key;
pair.value = value;
iterator.call(context, pair);
}
}
function set(key, value) {
return this._object[key] = value;
}
function get(key) {
if (this._object[key] !== Object.prototype[key])
return this._object[key];
}
function unset(key) {
var value = this._object[key];
delete this._object[key];
return value;
}
function toObject() {
return Object.clone(this._object);
}
function keys() {
return this.pluck('key');
}
function values() {
return this.pluck('value');
}
function index(value) {
var match = this.detect(function(pair) {
return pair.value === value;
});
return match && match.key;
}
function merge(object) {
return this.clone().update(object);
}
function update(object) {
return new Hash(object).inject(this, function(result, pair) {
result.set(pair.key, pair.value);
return result;
});
}
function toQueryPair(key, value) {
if (Object.isUndefined(value)) return key;
var value = String.interpret(value);
value = value.gsub(/(\r)?\n/, '\r\n');
value = encodeURIComponent(value);
value = value.gsub(/%20/, '+');
return key + '=' + value;
}
function toQueryString() {
return this.inject([], function(results, pair) {
var key = encodeURIComponent(pair.key), values = pair.value;
if (values && typeof values == 'object') {
if (Object.isArray(values)) {
var queryValues = [];
for (var i = 0, len = values.length, value; i < len; i++) {
value = values[i];
queryValues.push(toQueryPair(key, value));
}
return results.concat(queryValues);
}
} else results.push(toQueryPair(key, values));
return results;
}).join('&');
}
function inspect() {
return '#<Hash:{' + this.map(function(pair) {
return pair.map(Object.inspect).join(': ');
}).join(', ') + '}>';
}
function clone() {
return new Hash(this);
}
return {
initialize: initialize,
_each: _each,
set: set,
get: get,
unset: unset,
toObject: toObject,
toTemplateReplacements: toObject,
keys: keys,
values: values,
index: index,
merge: merge,
update: update,
toQueryString: toQueryString,
inspect: inspect,
toJSON: toObject,
clone: clone
};
})());
Hash.from = $H;
Object.extend(Number.prototype, (function() {
function toColorPart() {
return this.toPaddedString(2, 16);
}
function succ() {
return this + 1;
}
function times(iterator, context) {
$R(0, this, true).each(iterator, context);
return this;
}
function toPaddedString(length, radix) {
var string = this.toString(radix || 10);
return '0'.times(length - string.length) + string;
}
function abs() {
return Math.abs(this);
}
function round() {
return Math.round(this);
}
function ceil() {
return Math.ceil(this);
}
function floor() {
return Math.floor(this);
}
return {
toColorPart: toColorPart,
succ: succ,
times: times,
toPaddedString: toPaddedString,
abs: abs,
round: round,
ceil: ceil,
floor: floor
};
})());
function $R(start, end, exclusive) {
return new ObjectRange(start, end, exclusive);
}
var ObjectRange = Class.create(Enumerable, (function() {
function initialize(start, end, exclusive) {
this.start = start;
this.end = end;
this.exclusive = exclusive;
}
function _each(iterator, context) {
var value = this.start;
while (this.include(value)) {
iterator.call(context, value);
value = value.succ();
}
}
function include(value) {
if (value < this.start)
return false;
if (this.exclusive)
return value < this.end;
return value <= this.end;
}
return {
initialize: initialize,
_each: _each,
include: include
};
})());
var Abstract = { };
var Try = {
these: function() {
var returnValue;
for (var i = 0, length = arguments.length; i < length; i++) {
var lambda = arguments[i];
try {
returnValue = lambda();
break;
} catch (e) { }
}
return returnValue;
}
};
var Ajax = {
getTransport: function() {
return Try.these(
function() {return new XMLHttpRequest()},
function() {return new ActiveXObject('Msxml2.XMLHTTP')},
function() {return new ActiveXObject('Microsoft.XMLHTTP')}
) || false;
},
activeRequestCount: 0
};
Ajax.Responders = {
responders: [],
_each: function(iterator, context) {
this.responders._each(iterator, context);
},
register: function(responder) {
if (!this.include(responder))
this.responders.push(responder);
},
unregister: function(responder) {
this.responders = this.responders.without(responder);
},
dispatch: function(callback, request, transport, json) {
this.each(function(responder) {
if (Object.isFunction(responder[callback])) {
try {
responder[callback].apply(responder, [request, transport, json]);
} catch (e) { }
}
});
}
};
Object.extend(Ajax.Responders, Enumerable);
Ajax.Responders.register({
onCreate: function() { Ajax.activeRequestCount++ },
onComplete: function() { Ajax.activeRequestCount-- }
});
Ajax.Base = Class.create({
initialize: function(options) {
this.options = {
method: 'post',
asynchronous: true,
contentType:  'application/x-www-form-urlencoded',
encoding: 'UTF-8',
parameters: '',
evalJSON: true,
evalJS: true
};
Object.extend(this.options, options || { });
this.options.method = this.options.method.toLowerCase();
if (Object.isHash(this.options.parameters))
this.options.parameters = this.options.parameters.toObject();
}
});
Ajax.Request = Class.create(Ajax.Base, {
_complete: false,
initialize: function($super, url, options) {
$super(options);
this.transport = Ajax.getTransport();
this.request(url);
},
request: function(url) {
this.url = url;
this.method = this.options.method;
var params = Object.isString(this.options.parameters) ?
this.options.parameters :
Object.toQueryString(this.options.parameters);
if (!['get', 'post'].include(this.method)) {
params += (params ? '&' : '') + "_method=" + this.method;
this.method = 'post';
}
if (params && this.method === 'get') {
this.url += (this.url.include('?') ? '&' : '?') + params;
}
this.parameters = params.toQueryParams();
try {
var response = new Ajax.Response(this);
if (this.options.onCreate) this.options.onCreate(response);
Ajax.Responders.dispatch('onCreate', this, response);
this.transport.open(this.method.toUpperCase(), this.url,
this.options.asynchronous);
if (this.options.asynchronous) this.respondToReadyState.bind(this).defer(1);
this.transport.onreadystatechange = this.onStateChange.bind(this);
this.setRequestHeaders();
this.body = this.method == 'post' ? (this.options.postBody || params) : null;
this.transport.send(this.body);
if (!this.options.asynchronous && this.transport.overrideMimeType)
this.onStateChange();
}
catch (e) {
this.dispatchException(e);
}
},
onStateChange: function() {
var readyState = this.transport.readyState;
if (readyState > 1 && !((readyState == 4) && this._complete))
this.respondToReadyState(this.transport.readyState);
},
setRequestHeaders: function() {
var headers = {
'X-Requested-With': 'XMLHttpRequest',
'X-Prototype-Version': Prototype.Version,
'Accept': 'text/javascript, text/html, application/xml, text/xml, */*'
};
if (this.method == 'post') {
headers['Content-type'] = this.options.contentType +
(this.options.encoding ? '; charset=' + this.options.encoding : '');
if (this.transport.overrideMimeType &&
(navigator.userAgent.match(/Gecko\/(\d{4})/) || [0,2005])[1] < 2005)
headers['Connection'] = 'close';
}
if (typeof this.options.requestHeaders == 'object') {
var extras = this.options.requestHeaders;
if (Object.isFunction(extras.push))
for (var i = 0, length = extras.length; i < length; i += 2)
headers[extras[i]] = extras[i+1];
else
$H(extras).each(function(pair) { headers[pair.key] = pair.value });
}
for (var name in headers)
this.transport.setRequestHeader(name, headers[name]);
},
success: function() {
var status = this.getStatus();
return !status || (status >= 200 && status < 300) || status == 304;
},
getStatus: function() {
try {
if (this.transport.status === 1223) return 204;
return this.transport.status || 0;
} catch (e) { return 0 }
},
respondToReadyState: function(readyState) {
var state = Ajax.Request.Events[readyState], response = new Ajax.Response(this);
if (state == 'Complete') {
try {
this._complete = true;
(this.options['on' + response.status]
|| this.options['on' + (this.success() ? 'Success' : 'Failure')]
|| Prototype.emptyFunction)(response, response.headerJSON);
} catch (e) {
this.dispatchException(e);
}
var contentType = response.getHeader('Content-type');
if (this.options.evalJS == 'force'
|| (this.options.evalJS && this.isSameOrigin() && contentType
&& contentType.match(/^\s*(text|application)\/(x-)?(java|ecma)script(;.*)?\s*$/i)))
this.evalResponse();
}
try {
(this.options['on' + state] || Prototype.emptyFunction)(response, response.headerJSON);
Ajax.Responders.dispatch('on' + state, this, response, response.headerJSON);
} catch (e) {
this.dispatchException(e);
}
if (state == 'Complete') {
this.transport.onreadystatechange = Prototype.emptyFunction;
}
},
isSameOrigin: function() {
var m = this.url.match(/^\s*https?:\/\/[^\/]*/);
return !m || (m[0] == '#{protocol}//#{domain}#{port}'.interpolate({
protocol: location.protocol,
domain: document.domain,
port: location.port ? ':' + location.port : ''
}));
},
getHeader: function(name) {
try {
return this.transport.getResponseHeader(name) || null;
} catch (e) { return null; }
},
evalResponse: function() {
try {
return eval((this.transport.responseText || '').unfilterJSON());
} catch (e) {
this.dispatchException(e);
}
},
dispatchException: function(exception) {
(this.options.onException || Prototype.emptyFunction)(this, exception);
Ajax.Responders.dispatch('onException', this, exception);
}
});
Ajax.Request.Events =
['Uninitialized', 'Loading', 'Loaded', 'Interactive', 'Complete'];
Ajax.Response = Class.create({
initialize: function(request){
this.request = request;
var transport  = this.transport  = request.transport,
readyState = this.readyState = transport.readyState;
if ((readyState > 2 && !Prototype.Browser.IE) || readyState == 4) {
this.status = this.getStatus();
this.statusText = this.getStatusText();
this.responseText = String.interpret(transport.responseText);
this.headerJSON = this._getHeaderJSON();
}
if (readyState == 4) {
var xml = transport.responseXML;
this.responseXML  = Object.isUndefined(xml) ? null : xml;
this.responseJSON = this._getResponseJSON();
}
},
status: 0,
statusText: '',
getStatus: Ajax.Request.prototype.getStatus,
getStatusText: function() {
try {
return this.transport.statusText || '';
} catch (e) { return '' }
},
getHeader: Ajax.Request.prototype.getHeader,
getAllHeaders: function() {
try {
return this.getAllResponseHeaders();
} catch (e) { return null }
},
getResponseHeader: function(name) {
return this.transport.getResponseHeader(name);
},
getAllResponseHeaders: function() {
return this.transport.getAllResponseHeaders();
},
_getHeaderJSON: function() {
var json = this.getHeader('X-JSON');
if (!json) return null;
try {
json = decodeURIComponent(escape(json));
} catch(e) {
}
try {
return json.evalJSON(this.request.options.sanitizeJSON ||
!this.request.isSameOrigin());
} catch (e) {
this.request.dispatchException(e);
}
},
_getResponseJSON: function() {
var options = this.request.options;
if (!options.evalJSON || (options.evalJSON != 'force' &&
!(this.getHeader('Content-type') || '').include('application/json')) ||
this.responseText.blank())
return null;
try {
return this.responseText.evalJSON(options.sanitizeJSON ||
!this.request.isSameOrigin());
} catch (e) {
this.request.dispatchException(e);
}
}
});
Ajax.Updater = Class.create(Ajax.Request, {
initialize: function($super, container, url, options) {
this.container = {
success: (container.success || container),
failure: (container.failure || (container.success ? null : container))
};
options = Object.clone(options);
var onComplete = options.onComplete;
options.onComplete = (function(response, json) {
this.updateContent(response.responseText);
if (Object.isFunction(onComplete)) onComplete(response, json);
}).bind(this);
$super(url, options);
},
updateContent: function(responseText) {
var receiver = this.container[this.success() ? 'success' : 'failure'],
options = this.options;
if (!options.evalScripts) responseText = responseText.stripScripts();
if (receiver = $(receiver)) {
if (options.insertion) {
if (Object.isString(options.insertion)) {
var insertion = { }; insertion[options.insertion] = responseText;
receiver.insert(insertion);
}
else options.insertion(receiver, responseText);
}
else receiver.update(responseText);
}
}
});
Ajax.PeriodicalUpdater = Class.create(Ajax.Base, {
initialize: function($super, container, url, options) {
$super(options);
this.onComplete = this.options.onComplete;
this.frequency = (this.options.frequency || 2);
this.decay = (this.options.decay || 1);
this.updater = { };
this.container = container;
this.url = url;
this.start();
},
start: function() {
this.options.onComplete = this.updateComplete.bind(this);
this.onTimerEvent();
},
stop: function() {
this.updater.options.onComplete = undefined;
clearTimeout(this.timer);
(this.onComplete || Prototype.emptyFunction).apply(this, arguments);
},
updateComplete: function(response) {
if (this.options.decay) {
this.decay = (response.responseText == this.lastText ?
this.decay * this.options.decay : 1);
this.lastText = response.responseText;
}
this.timer = this.onTimerEvent.bind(this).delay(this.decay * this.frequency);
},
onTimerEvent: function() {
this.updater = new Ajax.Updater(this.container, this.url, this.options);
}
});
(function(GLOBAL) {
var UNDEFINED;
var SLICE = Array.prototype.slice;
var DIV = document.createElement('div');
function $(element) {
if (arguments.length > 1) {
for (var i = 0, elements = [], length = arguments.length; i < length; i++)
elements.push($(arguments[i]));
return elements;
}
if (Object.isString(element))
element = document.getElementById(element);
return Element.extend(element);
}
GLOBAL.$ = $;
if (!GLOBAL.Node) GLOBAL.Node = {};
if (!GLOBAL.Node.ELEMENT_NODE) {
Object.extend(GLOBAL.Node, {
ELEMENT_NODE: 1,
ATTRIBUTE_NODE: 2,
TEXT_NODE: 3,
CDATA_SECTION_NODE: 4,
ENTITY_REFERENCE_NODE: 5,
ENTITY_NODE: 6,
PROCESSING_INSTRUCTION_NODE: 7,
COMMENT_NODE: 8,
DOCUMENT_NODE: 9,
DOCUMENT_TYPE_NODE: 10,
DOCUMENT_FRAGMENT_NODE: 11,
NOTATION_NODE: 12
});
}
var ELEMENT_CACHE = {};
function shouldUseCreationCache(tagName, attributes) {
if (tagName === 'select') return false;
if ('type' in attributes) return false;
return true;
}
var HAS_EXTENDED_CREATE_ELEMENT_SYNTAX = (function(){
try {
var el = document.createElement('<input name="x">');
return el.tagName.toLowerCase() === 'input' && el.name === 'x';
}
catch(err) {
return false;
}
})();
var oldElement = GLOBAL.Element;
function Element(tagName, attributes) {
attributes = attributes || {};
tagName = tagName.toLowerCase();
if (HAS_EXTENDED_CREATE_ELEMENT_SYNTAX && attributes.name) {
tagName = '<' + tagName + ' name="' + attributes.name + '">';
delete attributes.name;
return Element.writeAttribute(document.createElement(tagName), attributes);
}
if (!ELEMENT_CACHE[tagName])
ELEMENT_CACHE[tagName] = Element.extend(document.createElement(tagName));
var node = shouldUseCreationCache(tagName, attributes) ?
ELEMENT_CACHE[tagName].cloneNode(false) : document.createElement(tagName);
return Element.writeAttribute(node, attributes);
}
GLOBAL.Element = Element;
Object.extend(GLOBAL.Element, oldElement || {});
if (oldElement) GLOBAL.Element.prototype = oldElement.prototype;
Element.Methods = { ByTag: {}, Simulated: {} };
var methods = {};
var INSPECT_ATTRIBUTES = { id: 'id', className: 'class' };
function inspect(element) {
element = $(element);
var result = '<' + element.tagName.toLowerCase();
var attribute, value;
for (var property in INSPECT_ATTRIBUTES) {
attribute = INSPECT_ATTRIBUTES[property];
value = (element[property] || '').toString();
if (value) result += ' ' + attribute + '=' + value.inspect(true);
}
return result + '>';
}
methods.inspect = inspect;
function visible(element) {
return $(element).style.display !== 'none';
}
function toggle(element, bool) {
element = $(element);
if (Object.isUndefined(bool))
bool = !Element.visible(element);
Element[bool ? 'show' : 'hide'](element);
return element;
}
function hide(element) {
element = $(element);
element.style.display = 'none';
return element;
}
function show(element) {
element = $(element);
element.style.display = '';
return element;
}
Object.extend(methods, {
visible: visible,
toggle:  toggle,
hide: hide,
show: show
});
function remove(element) {
element = $(element);
element.parentNode.removeChild(element);
return element;
}
var SELECT_ELEMENT_INNERHTML_BUGGY = (function(){
var el = document.createElement("select"),
isBuggy = true;
el.innerHTML = "<option value=\"test\">test</option>";
if (el.options && el.options[0]) {
isBuggy = el.options[0].nodeName.toUpperCase() !== "OPTION";
}
el = null;
return isBuggy;
})();
var TABLE_ELEMENT_INNERHTML_BUGGY = (function(){
try {
var el = document.createElement("table");
if (el && el.tBodies) {
el.innerHTML = "<tbody><tr><td>test</td></tr></tbody>";
var isBuggy = typeof el.tBodies[0] == "undefined";
el = null;
return isBuggy;
}
} catch (e) {
return true;
}
})();
var LINK_ELEMENT_INNERHTML_BUGGY = (function() {
try {
var el = document.createElement('div');
el.innerHTML = "<link />";
var isBuggy = (el.childNodes.length === 0);
el = null;
return isBuggy;
} catch(e) {
return true;
}
})();
var ANY_INNERHTML_BUGGY = SELECT_ELEMENT_INNERHTML_BUGGY ||
TABLE_ELEMENT_INNERHTML_BUGGY || LINK_ELEMENT_INNERHTML_BUGGY;
var SCRIPT_ELEMENT_REJECTS_TEXTNODE_APPENDING = (function () {
var s = document.createElement("script"),
isBuggy = false;
try {
s.appendChild(document.createTextNode(""));
isBuggy = !s.firstChild ||
s.firstChild && s.firstChild.nodeType !== 3;
} catch (e) {
isBuggy = true;
}
s = null;
return isBuggy;
})();
function update(element, content) {
element = $(element);
var descendants = element.getElementsByTagName('*'),
i = descendants.length;
while (i--) purgeElement(descendants[i]);
if (content && content.toElement)
content = content.toElement();
if (Object.isElement(content))
return element.update().insert(content);
content = Object.toHTML(content);
var tagName = element.tagName.toUpperCase();
if (tagName === 'SCRIPT' && SCRIPT_ELEMENT_REJECTS_TEXTNODE_APPENDING) {
element.text = content;
return element;
}
if (ANY_INNERHTML_BUGGY) {
if (tagName in INSERTION_TRANSLATIONS.tags) {
while (element.firstChild)
element.removeChild(element.firstChild);
var nodes = getContentFromAnonymousElement(tagName, content.stripScripts());
for (var i = 0, node; node = nodes[i]; i++)
element.appendChild(node);
} else if (LINK_ELEMENT_INNERHTML_BUGGY && Object.isString(content) && content.indexOf('<link') > -1) {
while (element.firstChild)
element.removeChild(element.firstChild);
var nodes = getContentFromAnonymousElement(tagName,
content.stripScripts(), true);
for (var i = 0, node; node = nodes[i]; i++)
element.appendChild(node);
} else {
element.innerHTML = content.stripScripts();
}
} else {
element.innerHTML = content.stripScripts();
}
content.evalScripts.bind(content).defer();
return element;
}
function replace(element, content) {
element = $(element);
if (content && content.toElement) {
content = content.toElement();
} else if (!Object.isElement(content)) {
content = Object.toHTML(content);
var range = element.ownerDocument.createRange();
range.selectNode(element);
content.evalScripts.bind(content).defer();
content = range.createContextualFragment(content.stripScripts());
}
element.parentNode.replaceChild(content, element);
return element;
}
var INSERTION_TRANSLATIONS = {
before: function(element, node) {
element.parentNode.insertBefore(node, element);
},
top: function(element, node) {
element.insertBefore(node, element.firstChild);
},
bottom: function(element, node) {
element.appendChild(node);
},
after: function(element, node) {
element.parentNode.insertBefore(node, element.nextSibling);
},
tags: {
TABLE:  ['<table>', '</table>', 1],
TBODY:  ['<table><tbody>', '</tbody></table>', 2],
TR: ['<table><tbody><tr>', '</tr></tbody></table>', 3],
TD: ['<table><tbody><tr><td>', '</td></tr></tbody></table>', 4],
SELECT: ['<select>', '</select>', 1]
}
};
var tags = INSERTION_TRANSLATIONS.tags;
Object.extend(tags, {
THEAD: tags.TBODY,
TFOOT: tags.TBODY,
TH: tags.TD
});
function replace_IE(element, content) {
element = $(element);
if (content && content.toElement)
content = content.toElement();
if (Object.isElement(content)) {
element.parentNode.replaceChild(content, element);
return element;
}
content = Object.toHTML(content);
var parent = element.parentNode, tagName = parent.tagName.toUpperCase();
if (tagName in INSERTION_TRANSLATIONS.tags) {
var nextSibling = Element.next(element);
var fragments = getContentFromAnonymousElement(
tagName, content.stripScripts());
parent.removeChild(element);
var iterator;
if (nextSibling)
iterator = function(node) { parent.insertBefore(node, nextSibling) };
else
iterator = function(node) { parent.appendChild(node); }
fragments.each(iterator);
} else {
element.outerHTML = content.stripScripts();
}
content.evalScripts.bind(content).defer();
return element;
}
if ('outerHTML' in document.documentElement)
replace = replace_IE;
function isContent(content) {
if (Object.isUndefined(content) || content === null) return false;
if (Object.isString(content) || Object.isNumber(content)) return true;
if (Object.isElement(content)) return true;
if (content.toElement || content.toHTML) return true;
return false;
}
function insertContentAt(element, content, position) {
position = position.toLowerCase();
var method = INSERTION_TRANSLATIONS[position];
if (content && content.toElement) content = content.toElement();
if (Object.isElement(content)) {
method(element, content);
return element;
}
content = Object.toHTML(content);
var tagName = ((position === 'before' || position === 'after') ?
element.parentNode : element).tagName.toUpperCase();
var childNodes = getContentFromAnonymousElement(tagName, content.stripScripts());
if (position === 'top' || position === 'after') childNodes.reverse();
for (var i = 0, node; node = childNodes[i]; i++)
method(element, node);
content.evalScripts.bind(content).defer();
}
function insert(element, insertions) {
element = $(element);
if (isContent(insertions))
insertions = { bottom: insertions };
for (var position in insertions)
insertContentAt(element, insertions[position], position);
return element;
}
function wrap(element, wrapper, attributes) {
element = $(element);
if (Object.isElement(wrapper)) {
$(wrapper).writeAttribute(attributes || {});
} else if (Object.isString(wrapper)) {
wrapper = new Element(wrapper, attributes);
} else {
wrapper = new Element('div', wrapper);
}
if (element.parentNode)
element.parentNode.replaceChild(wrapper, element);
wrapper.appendChild(element);
return wrapper;
}
function cleanWhitespace(element) {
element = $(element);
var node = element.firstChild;
while (node) {
var nextNode = node.nextSibling;
if (node.nodeType === Node.TEXT_NODE && !/\S/.test(node.nodeValue))
element.removeChild(node);
node = nextNode;
}
return element;
}
function empty(element) {
return $(element).innerHTML.blank();
}
function getContentFromAnonymousElement(tagName, html, force) {
var t = INSERTION_TRANSLATIONS.tags[tagName], div = DIV;
var workaround = !!t;
if (!workaround && force) {
workaround = true;
t = ['', '', 0];
}
if (workaround) {
div.innerHTML = '&#160;' + t[0] + html + t[1];
div.removeChild(div.firstChild);
for (var i = t[2]; i--; )
div = div.firstChild;
} else {
div.innerHTML = html;
}
return $A(div.childNodes);
}
function clone(element, deep) {
if (!(element = $(element))) return;
var clone = element.cloneNode(deep);
if (!HAS_UNIQUE_ID_PROPERTY) {
clone._prototypeUID = UNDEFINED;
if (deep) {
var descendants = Element.select(clone, '*'),
i = descendants.length;
while (i--)
descendants[i]._prototypeUID = UNDEFINED;
}
}
return Element.extend(clone);
}
function purgeElement(element) {
var uid = getUniqueElementID(element);
if (uid) {
Element.stopObserving(element);
if (!HAS_UNIQUE_ID_PROPERTY)
element._prototypeUID = UNDEFINED;
delete Element.Storage[uid];
}
}
function purgeCollection(elements) {
var i = elements.length;
while (i--)
purgeElement(elements[i]);
}
function purgeCollection_IE(elements) {
var i = elements.length, element, uid;
while (i--) {
element = elements[i];
uid = getUniqueElementID(element);
delete Element.Storage[uid];
delete Event.cache[uid];
}
}
if (HAS_UNIQUE_ID_PROPERTY) {
purgeCollection = purgeCollection_IE;
}
function purge(element) {
if (!(element = $(element))) return;
purgeElement(element);
var descendants = element.getElementsByTagName('*'),
i = descendants.length;
while (i--) purgeElement(descendants[i]);
return null;
}
Object.extend(methods, {
remove:  remove,
update:  update,
replace: replace,
insert:  insert,
wrap: wrap,
cleanWhitespace: cleanWhitespace,
empty: empty,
clone: clone,
purge: purge
});
function recursivelyCollect(element, property, maximumLength) {
element = $(element);
maximumLength = maximumLength || -1;
var elements = [];
while (element = element[property]) {
if (element.nodeType === Node.ELEMENT_NODE)
elements.push(Element.extend(element));
if (elements.length === maximumLength) break;
}
return elements;
}
function ancestors(element) {
return recursivelyCollect(element, 'parentNode');
}
function descendants(element) {
return Element.select(element, '*');
}
function firstDescendant(element) {
element = $(element).firstChild;
while (element && element.nodeType !== Node.ELEMENT_NODE)
element = element.nextSibling;
return $(element);
}
function immediateDescendants(element) {
var results = [], child = $(element).firstChild;
while (child) {
if (child.nodeType === Node.ELEMENT_NODE)
results.push(Element.extend(child));
child = child.nextSibling;
}
return results;
}
function previousSiblings(element) {
return recursivelyCollect(element, 'previousSibling');
}
function nextSiblings(element) {
return recursivelyCollect(element, 'nextSibling');
}
function siblings(element) {
element = $(element);
var previous = previousSiblings(element),
next = nextSiblings(element);
return previous.reverse().concat(next);
}
function match(element, selector) {
element = $(element);
if (Object.isString(selector))
return Prototype.Selector.match(element, selector);
return selector.match(element);
}
function _recursivelyFind(element, property, expression, index) {
element = $(element), expression = expression || 0, index = index || 0;
if (Object.isNumber(expression)) {
index = expression, expression = null;
}
while (element = element[property]) {
if (element.nodeType !== 1) continue;
if (expression && !Prototype.Selector.match(element, expression))
continue;
if (--index >= 0) continue;
return Element.extend(element);
}
}
function up(element, expression, index) {
element = $(element);
if (arguments.length === 1) return $(element.parentNode);
return _recursivelyFind(element, 'parentNode', expression, index);
}
function down(element, expression, index) {
element = $(element), expression = expression || 0, index = index || 0;
if (Object.isNumber(expression))
index = expression, expression = '*';
var node = Prototype.Selector.select(expression, element)[index];
return Element.extend(node);
}
function previous(element, expression, index) {
return _recursivelyFind(element, 'previousSibling', expression, index);
}
function next(element, expression, index) {
return _recursivelyFind(element, 'nextSibling', expression, index);
}
function select(element) {
element = $(element);
var expressions = SLICE.call(arguments, 1).join(', ');
return Prototype.Selector.select(expressions, element);
}
function adjacent(element) {
element = $(element);
var expressions = SLICE.call(arguments, 1).join(', ');
var siblings = Element.siblings(element), results = [];
for (var i = 0, sibling; sibling = siblings[i]; i++) {
if (Prototype.Selector.match(sibling, expressions))
results.push(sibling);
}
return results;
}
function descendantOf_DOM(element, ancestor) {
element = $(element), ancestor = $(ancestor);
while (element = element.parentNode)
if (element === ancestor) return true;
return false;
}
function descendantOf_contains(element, ancestor) {
element = $(element), ancestor = $(ancestor);
if (!ancestor.contains) return descendantOf_DOM(element, ancestor);
return ancestor.contains(element) && ancestor !== element;
}
function descendantOf_compareDocumentPosition(element, ancestor) {
element = $(element), ancestor = $(ancestor);
return (element.compareDocumentPosition(ancestor) & 8) === 8;
}
var descendantOf;
if (DIV.compareDocumentPosition) {
descendantOf = descendantOf_compareDocumentPosition;
} else if (DIV.contains) {
descendantOf = descendantOf_contains;
} else {
descendantOf = descendantOf_DOM;
}
Object.extend(methods, {
recursivelyCollect: recursivelyCollect,
ancestors: ancestors,
descendants: descendants,
firstDescendant: firstDescendant,
immediateDescendants: immediateDescendants,
previousSiblings: previousSiblings,
nextSiblings: nextSiblings,
siblings: siblings,
match: match,
up: up,
down: down,
previous: previous,
next: next,
select: select,
adjacent: adjacent,
descendantOf: descendantOf,
getElementsBySelector: select,
childElements: immediateDescendants
});
var idCounter = 1;
function identify(element) {
element = $(element);
var id = Element.readAttribute(element, 'id');
if (id) return id;
do { id = 'anonymous_element_' + idCounter++ } while ($(id));
Element.writeAttribute(element, 'id', id);
return id;
}
function readAttribute(element, name) {
return $(element).getAttribute(name);
}
function readAttribute_IE(element, name) {
element = $(element);
var table = ATTRIBUTE_TRANSLATIONS.read;
if (table.values[name])
return table.values[name](element, name);
if (table.names[name]) name = table.names[name];
if (name.include(':')) {
if (!element.attributes || !element.attributes[name]) return null;
return element.attributes[name].value;
}
return element.getAttribute(name);
}
function readAttribute_Opera(element, name) {
if (name === 'title') return element.title;
return element.getAttribute(name);
}
var PROBLEMATIC_ATTRIBUTE_READING = (function() {
DIV.setAttribute('onclick', Prototype.emptyFunction);
var value = DIV.getAttribute('onclick');
var isFunction = (typeof value === 'function');
DIV.removeAttribute('onclick');
return isFunction;
})();
if (PROBLEMATIC_ATTRIBUTE_READING) {
readAttribute = readAttribute_IE;
} else if (Prototype.Browser.Opera) {
readAttribute = readAttribute_Opera;
}
function writeAttribute(element, name, value) {
element = $(element);
var attributes = {}, table = ATTRIBUTE_TRANSLATIONS.write;
if (typeof name === 'object') {
attributes = name;
} else {
attributes[name] = Object.isUndefined(value) ? true : value;
}
for (var attr in attributes) {
name = table.names[attr] || attr;
value = attributes[attr];
if (table.values[attr])
name = table.values[attr](element, value);
if (value === false || value === null)
element.removeAttribute(name);
else if (value === true)
element.setAttribute(name, name);
else element.setAttribute(name, value);
}
return element;
}
function hasAttribute(element, attribute) {
attribute = ATTRIBUTE_TRANSLATIONS.has[attribute] || attribute;
var node = $(element).getAttributeNode(attribute);
return !!(node && node.specified);
}
GLOBAL.Element.Methods.Simulated.hasAttribute = hasAttribute;
function classNames(element) {
return new Element.ClassNames(element);
}
var regExpCache = {};
function getRegExpForClassName(className) {
if (regExpCache[className]) return regExpCache[className];
var re = new RegExp("(^|\\s+)" + className + "(\\s+|$)");
regExpCache[className] = re;
return re;
}
function hasClassName(element, className) {
if (!(element = $(element))) return;
var elementClassName = element.className;
if (elementClassName.length === 0) return false;
if (elementClassName === className) return true;
return getRegExpForClassName(className).test(elementClassName);
}
function addClassName(element, className) {
if (!(element = $(element))) return;
if (!hasClassName(element, className))
element.className += (element.className ? ' ' : '') + className;
return element;
}
function removeClassName(element, className) {
if (!(element = $(element))) return;
element.className = element.className.replace(
getRegExpForClassName(className), ' ').strip();
return element;
}
function toggleClassName(element, className, bool) {
if (!(element = $(element))) return;
if (Object.isUndefined(bool))
bool = !hasClassName(element, className);
var method = Element[bool ? 'addClassName' : 'removeClassName'];
return method(element, className);
}
var ATTRIBUTE_TRANSLATIONS = {};
var classProp = 'className', forProp = 'for';
DIV.setAttribute(classProp, 'x');
if (DIV.className !== 'x') {
DIV.setAttribute('class', 'x');
if (DIV.className === 'x')
classProp = 'class';
}
var LABEL = document.createElement('label');
LABEL.setAttribute(forProp, 'x');
if (LABEL.htmlFor !== 'x') {
LABEL.setAttribute('htmlFor', 'x');
if (LABEL.htmlFor === 'x')
forProp = 'htmlFor';
}
LABEL = null;
function _getAttr(element, attribute) {
return element.getAttribute(attribute);
}
function _getAttr2(element, attribute) {
return element.getAttribute(attribute, 2);
}
function _getAttrNode(element, attribute) {
var node = element.getAttributeNode(attribute);
return node ? node.value : '';
}
function _getFlag(element, attribute) {
return $(element).hasAttribute(attribute) ? attribute : null;
}
DIV.onclick = Prototype.emptyFunction;
var onclickValue = DIV.getAttribute('onclick');
var _getEv;
if (String(onclickValue).indexOf('{') > -1) {
_getEv = function(element, attribute) {
var value = element.getAttribute(attribute);
if (!value) return null;
value = value.toString();
value = value.split('{')[1];
value = value.split('}')[0];
return value.strip();
};
}
else if (onclickValue === '') {
_getEv = function(element, attribute) {
var value = element.getAttribute(attribute);
if (!value) return null;
return value.strip();
};
}
ATTRIBUTE_TRANSLATIONS.read = {
names: {
'class': classProp,
'className': classProp,
'for': forProp,
'htmlFor': forProp
},
values: {
style: function(element) {
return element.style.cssText.toLowerCase();
},
title: function(element) {
return element.title;
}
}
};
ATTRIBUTE_TRANSLATIONS.write = {
names: {
className: 'class',
htmlFor: 'for',
cellpadding: 'cellPadding',
cellspacing: 'cellSpacing'
},
values: {
checked: function(element, value) {
element.checked = !!value;
},
style: function(element, value) {
element.style.cssText = value ? value : '';
}
}
};
ATTRIBUTE_TRANSLATIONS.has = { names: {} };
Object.extend(ATTRIBUTE_TRANSLATIONS.write.names,
ATTRIBUTE_TRANSLATIONS.read.names);
var CAMEL_CASED_ATTRIBUTE_NAMES = $w('colSpan rowSpan vAlign dateTime ' +
'accessKey tabIndex encType maxLength readOnly longDesc frameBorder');
for (var i = 0, attr; attr = CAMEL_CASED_ATTRIBUTE_NAMES[i]; i++) {
ATTRIBUTE_TRANSLATIONS.write.names[attr.toLowerCase()] = attr;
ATTRIBUTE_TRANSLATIONS.has.names[attr.toLowerCase()] = attr;
}
Object.extend(ATTRIBUTE_TRANSLATIONS.read.values, {
href: _getAttr2,
src: _getAttr2,
type: _getAttr,
action: _getAttrNode,
disabled: _getFlag,
checked: _getFlag,
readonly: _getFlag,
multiple: _getFlag,
onload: _getEv,
onunload: _getEv,
onclick: _getEv,
ondblclick:  _getEv,
onmousedown: _getEv,
onmouseup: _getEv,
onmouseover: _getEv,
onmousemove: _getEv,
onmouseout:  _getEv,
onfocus: _getEv,
onblur: _getEv,
onkeypress:  _getEv,
onkeydown: _getEv,
onkeyup: _getEv,
onsubmit: _getEv,
onreset: _getEv,
onselect: _getEv,
onchange: _getEv
});
Object.extend(methods, {
identify: identify,
readAttribute: readAttribute,
writeAttribute:  writeAttribute,
classNames: classNames,
hasClassName: hasClassName,
addClassName: addClassName,
removeClassName: removeClassName,
toggleClassName: toggleClassName
});
function normalizeStyleName(style) {
if (style === 'float' || style === 'styleFloat')
return 'cssFloat';
return style.camelize();
}
function normalizeStyleName_IE(style) {
if (style === 'float' || style === 'cssFloat')
return 'styleFloat';
return style.camelize();
}
function setStyle(element, styles) {
element = $(element);
var elementStyle = element.style, match;
if (Object.isString(styles)) {
elementStyle.cssText += ';' + styles;
if (styles.include('opacity')) {
var opacity = styles.match(/opacity:\s*(\d?\.?\d*)/)[1];
Element.setOpacity(element, opacity);
}
return element;
}
for (var property in styles) {
if (property === 'opacity') {
Element.setOpacity(element, styles[property]);
} else {
var value = styles[property];
if (property === 'float' || property === 'cssFloat') {
property = Object.isUndefined(elementStyle.styleFloat) ?
'cssFloat' : 'styleFloat';
}
elementStyle[property] = value;
}
}
return element;
}
function getStyle(element, style) {
element = $(element);
style = normalizeStyleName(style);
var value = element.style[style];
if (!value || value === 'auto') {
var css = document.defaultView.getComputedStyle(element, null);
value = css ? css[style] : null;
}
if (style === 'opacity') return value ? parseFloat(value) : 1.0;
return value === 'auto' ? null : value;
}
function getStyle_Opera(element, style) {
switch (style) {
case 'height': case 'width':
if (!Element.visible(element)) return null;
var dim = parseInt(getStyle(element, style), 10);
if (dim !== element['offset' + style.capitalize()])
return dim + 'px';
return Element.measure(element, style);
default: return getStyle(element, style);
}
}
function getStyle_IE(element, style) {
element = $(element);
style = normalizeStyleName_IE(style);
var value = element.style[style];
if (!value && element.currentStyle) {
value = element.currentStyle[style];
}
if (style === 'opacity' && !STANDARD_CSS_OPACITY_SUPPORTED)
return getOpacity_IE(element);
if (value === 'auto') {
if ((style === 'width' || style === 'height') && Element.visible(element))
return Element.measure(element, style) + 'px';
return null;
}
return value;
}
function stripAlphaFromFilter_IE(filter) {
return (filter || '').replace(/alpha\([^\)]*\)/gi, '');
}
function hasLayout_IE(element) {
if (!element.currentStyle.hasLayout)
element.style.zoom = 1;
return element;
}
var STANDARD_CSS_OPACITY_SUPPORTED = (function() {
DIV.style.cssText = "opacity:.55";
return /^0.55/.test(DIV.style.opacity);
})();
function setOpacity(element, value) {
element = $(element);
if (value == 1 || value === '') value = '';
else if (value < 0.00001) value = 0;
element.style.opacity = value;
return element;
}
function setOpacity_IE(element, value) {
if (STANDARD_CSS_OPACITY_SUPPORTED)
return setOpacity(element, value);
element = hasLayout_IE($(element));
var filter = Element.getStyle(element, 'filter'),
style = element.style;
if (value == 1 || value === '') {
filter = stripAlphaFromFilter_IE(filter);
if (filter) style.filter = filter;
else style.removeAttribute('filter');
return element;
}
if (value < 0.00001) value = 0;
style.filter = stripAlphaFromFilter_IE(filter) +
'alpha(opacity=' + (value * 100) + ')';
return element;
}
function getOpacity(element) {
return Element.getStyle(element, 'opacity');
}
function getOpacity_IE(element) {
if (STANDARD_CSS_OPACITY_SUPPORTED)
return getOpacity(element);
var filter = Element.getStyle(element, 'filter');
if (filter.length === 0) return 1.0;
var match = (filter || '').match(/alpha\(opacity=(.*)\)/);
if (match[1]) return parseFloat(match[1]) / 100;
return 1.0;
}
Object.extend(methods, {
setStyle: setStyle,
getStyle: getStyle,
setOpacity: setOpacity,
getOpacity: getOpacity
});
if ('styleFloat' in DIV.style) {
methods.getStyle = getStyle_IE;
methods.setOpacity = setOpacity_IE;
methods.getOpacity = getOpacity_IE;
}
var UID = 0;
GLOBAL.Element.Storage = { UID: 1 };
function getUniqueElementID(element) {
if (element === window) return 0;
if (typeof element._prototypeUID === 'undefined')
element._prototypeUID = Element.Storage.UID++;
return element._prototypeUID;
}
function getUniqueElementID_IE(element) {
if (element === window) return 0;
if (element == document) return 1;
return element.uniqueID;
}
var HAS_UNIQUE_ID_PROPERTY = ('uniqueID' in DIV);
if (HAS_UNIQUE_ID_PROPERTY)
getUniqueElementID = getUniqueElementID_IE;
function getStorage(element) {
if (!(element = $(element))) return;
var uid = getUniqueElementID(element);
if (!Element.Storage[uid])
Element.Storage[uid] = $H();
return Element.Storage[uid];
}
function store(element, key, value) {
if (!(element = $(element))) return;
var storage = getStorage(element);
if (arguments.length === 2) {
storage.update(key);
} else {
storage.set(key, value);
}
return element;
}
function retrieve(element, key, defaultValue) {
if (!(element = $(element))) return;
var storage = getStorage(element), value = storage.get(key);
if (Object.isUndefined(value)) {
storage.set(key, defaultValue);
value = defaultValue;
}
return value;
}
Object.extend(methods, {
getStorage: getStorage,
store: store,
retrieve: retrieve
});
var Methods = {}, ByTag = Element.Methods.ByTag,
F = Prototype.BrowserFeatures;
if (!F.ElementExtensions && ('__proto__' in DIV)) {
GLOBAL.HTMLElement = {};
GLOBAL.HTMLElement.prototype = DIV['__proto__'];
F.ElementExtensions = true;
}
function checkElementPrototypeDeficiency(tagName) {
if (typeof window.Element === 'undefined') return false;
var proto = window.Element.prototype;
if (proto) {
var id = '_' + (Math.random() + '').slice(2),
el = document.createElement(tagName);
proto[id] = 'x';
var isBuggy = (el[id] !== 'x');
delete proto[id];
el = null;
return isBuggy;
}
return false;
}
var HTMLOBJECTELEMENT_PROTOTYPE_BUGGY =
checkElementPrototypeDeficiency('object');
function extendElementWith(element, methods) {
for (var property in methods) {
var value = methods[property];
if (Object.isFunction(value) && !(property in element))
element[property] = value.methodize();
}
}
var EXTENDED = {};
function elementIsExtended(element) {
var uid = getUniqueElementID(element);
return (uid in EXTENDED);
}
function extend(element) {
if (!element || elementIsExtended(element)) return element;
if (element.nodeType !== Node.ELEMENT_NODE || element == window)
return element;
var methods = Object.clone(Methods),
tagName = element.tagName.toUpperCase();
if (ByTag[tagName]) Object.extend(methods, ByTag[tagName]);
extendElementWith(element, methods);
EXTENDED[getUniqueElementID(element)] = true;
return element;
}
function extend_IE8(element) {
if (!element || elementIsExtended(element)) return element;
var t = element.tagName;
if (t && (/^(?:object|applet|embed)$/i.test(t))) {
extendElementWith(element, Element.Methods);
extendElementWith(element, Element.Methods.Simulated);
extendElementWith(element, Element.Methods.ByTag[t.toUpperCase()]);
}
return element;
}
if (F.SpecificElementExtensions) {
extend = HTMLOBJECTELEMENT_PROTOTYPE_BUGGY ? extend_IE8 : Prototype.K;
}
function addMethodsToTagName(tagName, methods) {
tagName = tagName.toUpperCase();
if (!ByTag[tagName]) ByTag[tagName] = {};
Object.extend(ByTag[tagName], methods);
}
function mergeMethods(destination, methods, onlyIfAbsent) {
if (Object.isUndefined(onlyIfAbsent)) onlyIfAbsent = false;
for (var property in methods) {
var value = methods[property];
if (!Object.isFunction(value)) continue;
if (!onlyIfAbsent || !(property in destination))
destination[property] = value.methodize();
}
}
function findDOMClass(tagName) {
var klass;
var trans = {
"OPTGROUP": "OptGroup", "TEXTAREA": "TextArea", "P": "Paragraph",
"FIELDSET": "FieldSet", "UL": "UList", "OL": "OList", "DL": "DList",
"DIR": "Directory", "H1": "Heading", "H2": "Heading", "H3": "Heading",
"H4": "Heading", "H5": "Heading", "H6": "Heading", "Q": "Quote",
"INS": "Mod", "DEL": "Mod", "A": "Anchor", "IMG": "Image", "CAPTION":
"TableCaption", "COL": "TableCol", "COLGROUP": "TableCol", "THEAD":
"TableSection", "TFOOT": "TableSection", "TBODY": "TableSection", "TR":
"TableRow", "TH": "TableCell", "TD": "TableCell", "FRAMESET":
"FrameSet", "IFRAME": "IFrame"
};
if (trans[tagName]) klass = 'HTML' + trans[tagName] + 'Element';
if (window[klass]) return window[klass];
klass = 'HTML' + tagName + 'Element';
if (window[klass]) return window[klass];
klass = 'HTML' + tagName.capitalize() + 'Element';
if (window[klass]) return window[klass];
var element = document.createElement(tagName),
proto = element['__proto__'] || element.constructor.prototype;
element = null;
return proto;
}
function addMethods(methods) {
if (arguments.length === 0) addFormMethods();
if (arguments.length === 2) {
var tagName = methods;
methods = arguments[1];
}
if (!tagName) {
Object.extend(Element.Methods, methods || {});
} else {
if (Object.isArray(tagName)) {
for (var i = 0, tag; tag = tagName[i]; i++)
addMethodsToTagName(tag, methods);
} else {
addMethodsToTagName(tagName, methods);
}
}
var ELEMENT_PROTOTYPE = window.HTMLElement ? HTMLElement.prototype :
Element.prototype;
if (F.ElementExtensions) {
mergeMethods(ELEMENT_PROTOTYPE, Element.Methods);
mergeMethods(ELEMENT_PROTOTYPE, Element.Methods.Simulated, true);
}
if (F.SpecificElementExtensions) {
for (var tag in Element.Methods.ByTag) {
var klass = findDOMClass(tag);
if (Object.isUndefined(klass)) continue;
mergeMethods(klass.prototype, ByTag[tag]);
}
}
Object.extend(Element, Element.Methods);
Object.extend(Element, Element.Methods.Simulated);
delete Element.ByTag;
delete Element.Simulated;
Element.extend.refresh();
ELEMENT_CACHE = {};
}
Object.extend(GLOBAL.Element, {
extend: extend,
addMethods: addMethods
});
if (extend === Prototype.K) {
GLOBAL.Element.extend.refresh = Prototype.emptyFunction;
} else {
GLOBAL.Element.extend.refresh = function() {
if (Prototype.BrowserFeatures.ElementExtensions) return;
Object.extend(Methods, Element.Methods);
Object.extend(Methods, Element.Methods.Simulated);
EXTENDED = {};
};
}
function addFormMethods() {
Object.extend(Form, Form.Methods);
Object.extend(Form.Element, Form.Element.Methods);
Object.extend(Element.Methods.ByTag, {
"FORM": Object.clone(Form.Methods),
"INPUT": Object.clone(Form.Element.Methods),
"SELECT": Object.clone(Form.Element.Methods),
"TEXTAREA": Object.clone(Form.Element.Methods),
"BUTTON": Object.clone(Form.Element.Methods)
});
}
Element.addMethods(methods);
})(this);
(function() {
function toDecimal(pctString) {
var match = pctString.match(/^(\d+)%?$/i);
if (!match) return null;
return (Number(match[1]) / 100);
}
function getRawStyle(element, style) {
element = $(element);
var value = element.style[style];
if (!value || value === 'auto') {
var css = document.defaultView.getComputedStyle(element, null);
value = css ? css[style] : null;
}
if (style === 'opacity') return value ? parseFloat(value) : 1.0;
return value === 'auto' ? null : value;
}
function getRawStyle_IE(element, style) {
var value = element.style[style];
if (!value && element.currentStyle) {
value = element.currentStyle[style];
}
return value;
}
function getContentWidth(element, context) {
var boxWidth = element.offsetWidth;
var bl = getPixelValue(element, 'borderLeftWidth',  context) || 0;
var br = getPixelValue(element, 'borderRightWidth', context) || 0;
var pl = getPixelValue(element, 'paddingLeft', context) || 0;
var pr = getPixelValue(element, 'paddingRight', context) || 0;
return boxWidth - bl - br - pl - pr;
}
if ('currentStyle' in document.documentElement) {
getRawStyle = getRawStyle_IE;
}
function getPixelValue(value, property, context) {
var element = null;
if (Object.isElement(value)) {
element = value;
value = getRawStyle(element, property);
}
if (value === null || Object.isUndefined(value)) {
return null;
}
if ((/^(?:-)?\d+(\.\d+)?(px)?$/i).test(value)) {
return window.parseFloat(value);
}
var isPercentage = value.include('%'), isViewport = (context === document.viewport);
if (/\d/.test(value) && element && element.runtimeStyle && !(isPercentage && isViewport)) {
var style = element.style.left, rStyle = element.runtimeStyle.left;
element.runtimeStyle.left = element.currentStyle.left;
element.style.left = value || 0;
value = element.style.pixelLeft;
element.style.left = style;
element.runtimeStyle.left = rStyle;
return value;
}
if (element && isPercentage) {
context = context || element.parentNode;
var decimal = toDecimal(value), whole = null;
var isHorizontal = property.include('left') || property.include('right') ||
property.include('width');
var isVertical = property.include('top') || property.include('bottom') ||
property.include('height');
if (context === document.viewport) {
if (isHorizontal) {
whole = document.viewport.getWidth();
} else if (isVertical) {
whole = document.viewport.getHeight();
}
} else {
if (isHorizontal) {
whole = $(context).measure('width');
} else if (isVertical) {
whole = $(context).measure('height');
}
}
return (whole === null) ? 0 : whole * decimal;
}
return 0;
}
function toCSSPixels(number) {
if (Object.isString(number) && number.endsWith('px'))
return number;
return number + 'px';
}
function isDisplayed(element) {
while (element && element.parentNode) {
var display = element.getStyle('display');
if (display === 'none') {
return false;
}
element = $(element.parentNode);
}
return true;
}
var hasLayout = Prototype.K;
if ('currentStyle' in document.documentElement) {
hasLayout = function(element) {
if (!element.currentStyle.hasLayout) {
element.style.zoom = 1;
}
return element;
};
}
function cssNameFor(key) {
if (key.include('border')) key = key + '-width';
return key.camelize();
}
Element.Layout = Class.create(Hash, {
initialize: function($super, element, preCompute) {
$super();
this.element = $(element);
Element.Layout.PROPERTIES.each( function(property) {
this._set(property, null);
}, this);
if (preCompute) {
this._preComputing = true;
this._begin();
Element.Layout.PROPERTIES.each( this._compute, this );
this._end();
this._preComputing = false;
}
},
_set: function(property, value) {
return Hash.prototype.set.call(this, property, value);
},
set: function(property, value) {
throw "Properties of Element.Layout are read-only.";
},
get: function($super, property) {
var value = $super(property);
return value === null ? this._compute(property) : value;
},
_begin: function() {
if (this._isPrepared()) return;
var element = this.element;
if (isDisplayed(element)) {
this._setPrepared(true);
return;
}
var originalStyles = {
position: element.style.position || '',
width: element.style.width || '',
visibility: element.style.visibility || '',
display: element.style.display || ''
};
element.store('prototype_original_styles', originalStyles);
var position = getRawStyle(element, 'position'), width = element.offsetWidth;
if (width === 0 || width === null) {
element.style.display = 'block';
width = element.offsetWidth;
}
var context = (position === 'fixed') ? document.viewport :
element.parentNode;
var tempStyles = {
visibility: 'hidden',
display: 'block'
};
if (position !== 'fixed') tempStyles.position = 'absolute';
element.setStyle(tempStyles);
var positionedWidth = element.offsetWidth, newWidth;
if (width && (positionedWidth === width)) {
newWidth = getContentWidth(element, context);
} else if (position === 'absolute' || position === 'fixed') {
newWidth = getContentWidth(element, context);
} else {
var parent = element.parentNode, pLayout = $(parent).getLayout();
newWidth = pLayout.get('width') -
this.get('margin-left') -
this.get('border-left') -
this.get('padding-left') -
this.get('padding-right') -
this.get('border-right') -
this.get('margin-right');
}
element.setStyle({ width: newWidth + 'px' });
this._setPrepared(true);
},
_end: function() {
var element = this.element;
var originalStyles = element.retrieve('prototype_original_styles');
element.store('prototype_original_styles', null);
element.setStyle(originalStyles);
this._setPrepared(false);
},
_compute: function(property) {
var COMPUTATIONS = Element.Layout.COMPUTATIONS;
if (!(property in COMPUTATIONS)) {
throw "Property not found.";
}
return this._set(property, COMPUTATIONS[property].call(this, this.element));
},
_isPrepared: function() {
return this.element.retrieve('prototype_element_layout_prepared', false);
},
_setPrepared: function(bool) {
return this.element.store('prototype_element_layout_prepared', bool);
},
toObject: function() {
var args = $A(arguments);
var keys = (args.length === 0) ? Element.Layout.PROPERTIES :
args.join(' ').split(' ');
var obj = {};
keys.each( function(key) {
if (!Element.Layout.PROPERTIES.include(key)) return;
var value = this.get(key);
if (value != null) obj[key] = value;
}, this);
return obj;
},
toHash: function() {
var obj = this.toObject.apply(this, arguments);
return new Hash(obj);
},
toCSS: function() {
var args = $A(arguments);
var keys = (args.length === 0) ? Element.Layout.PROPERTIES :
args.join(' ').split(' ');
var css = {};
keys.each( function(key) {
if (!Element.Layout.PROPERTIES.include(key)) return;
if (Element.Layout.COMPOSITE_PROPERTIES.include(key)) return;
var value = this.get(key);
if (value != null) css[cssNameFor(key)] = value + 'px';
}, this);
return css;
},
inspect: function() {
return "#<Element.Layout>";
}
});
Object.extend(Element.Layout, {
PROPERTIES: $w('height width top left right bottom border-left border-right border-top border-bottom padding-left padding-right padding-top padding-bottom margin-top margin-bottom margin-left margin-right padding-box-width padding-box-height border-box-width border-box-height margin-box-width margin-box-height'),
COMPOSITE_PROPERTIES: $w('padding-box-width padding-box-height margin-box-width margin-box-height border-box-width border-box-height'),
COMPUTATIONS: {
'height': function(element) {
if (!this._preComputing) this._begin();
var bHeight = this.get('border-box-height');
if (bHeight <= 0) {
if (!this._preComputing) this._end();
return 0;
}
var bTop = this.get('border-top'),
bBottom = this.get('border-bottom');
var pTop = this.get('padding-top'),
pBottom = this.get('padding-bottom');
if (!this._preComputing) this._end();
return bHeight - bTop - bBottom - pTop - pBottom;
},
'width': function(element) {
if (!this._preComputing) this._begin();
var bWidth = this.get('border-box-width');
if (bWidth <= 0) {
if (!this._preComputing) this._end();
return 0;
}
var bLeft = this.get('border-left'),
bRight = this.get('border-right');
var pLeft = this.get('padding-left'),
pRight = this.get('padding-right');
if (!this._preComputing) this._end();
return bWidth - bLeft - bRight - pLeft - pRight;
},
'padding-box-height': function(element) {
var height = this.get('height'),
pTop = this.get('padding-top'),
pBottom = this.get('padding-bottom');
return height + pTop + pBottom;
},
'padding-box-width': function(element) {
var width = this.get('width'),
pLeft = this.get('padding-left'),
pRight = this.get('padding-right');
return width + pLeft + pRight;
},
'border-box-height': function(element) {
if (!this._preComputing) this._begin();
var height = element.offsetHeight;
if (!this._preComputing) this._end();
return height;
},
'border-box-width': function(element) {
if (!this._preComputing) this._begin();
var width = element.offsetWidth;
if (!this._preComputing) this._end();
return width;
},
'margin-box-height': function(element) {
var bHeight = this.get('border-box-height'),
mTop = this.get('margin-top'),
mBottom = this.get('margin-bottom');
if (bHeight <= 0) return 0;
return bHeight + mTop + mBottom;
},
'margin-box-width': function(element) {
var bWidth = this.get('border-box-width'),
mLeft = this.get('margin-left'),
mRight = this.get('margin-right');
if (bWidth <= 0) return 0;
return bWidth + mLeft + mRight;
},
'top': function(element) {
var offset = element.positionedOffset();
return offset.top;
},
'bottom': function(element) {
var offset = element.positionedOffset(),
parent = element.getOffsetParent(),
pHeight = parent.measure('height');
var mHeight = this.get('border-box-height');
return pHeight - mHeight - offset.top;
},
'left': function(element) {
var offset = element.positionedOffset();
return offset.left;
},
'right': function(element) {
var offset = element.positionedOffset(),
parent = element.getOffsetParent(),
pWidth = parent.measure('width');
var mWidth = this.get('border-box-width');
return pWidth - mWidth - offset.left;
},
'padding-top': function(element) {
return getPixelValue(element, 'paddingTop');
},
'padding-bottom': function(element) {
return getPixelValue(element, 'paddingBottom');
},
'padding-left': function(element) {
return getPixelValue(element, 'paddingLeft');
},
'padding-right': function(element) {
return getPixelValue(element, 'paddingRight');
},
'border-top': function(element) {
return getPixelValue(element, 'borderTopWidth');
},
'border-bottom': function(element) {
return getPixelValue(element, 'borderBottomWidth');
},
'border-left': function(element) {
return getPixelValue(element, 'borderLeftWidth');
},
'border-right': function(element) {
return getPixelValue(element, 'borderRightWidth');
},
'margin-top': function(element) {
return getPixelValue(element, 'marginTop');
},
'margin-bottom': function(element) {
return getPixelValue(element, 'marginBottom');
},
'margin-left': function(element) {
return getPixelValue(element, 'marginLeft');
},
'margin-right': function(element) {
return getPixelValue(element, 'marginRight');
}
}
});
if ('getBoundingClientRect' in document.documentElement) {
Object.extend(Element.Layout.COMPUTATIONS, {
'right': function(element) {
var parent = hasLayout(element.getOffsetParent());
var rect = element.getBoundingClientRect(),
pRect = parent.getBoundingClientRect();
return (pRect.right - rect.right).round();
},
'bottom': function(element) {
var parent = hasLayout(element.getOffsetParent());
var rect = element.getBoundingClientRect(),
pRect = parent.getBoundingClientRect();
return (pRect.bottom - rect.bottom).round();
}
});
}
Element.Offset = Class.create({
initialize: function(left, top) {
this.left = left.round();
this.top  = top.round();
this[0] = this.left;
this[1] = this.top;
},
relativeTo: function(offset) {
return new Element.Offset(
this.left - offset.left,
this.top  - offset.top
);
},
inspect: function() {
return "#<Element.Offset left: #{left} top: #{top}>".interpolate(this);
},
toString: function() {
return "[#{left}, #{top}]".interpolate(this);
},
toArray: function() {
return [this.left, this.top];
}
});
function getLayout(element, preCompute) {
return new Element.Layout(element, preCompute);
}
function measure(element, property) {
return $(element).getLayout().get(property);
}
function getHeight(element) {
return Element.getDimensions(element).height;
}
function getWidth(element) {
return Element.getDimensions(element).width;
}
function getDimensions(element) {
element = $(element);
var display = Element.getStyle(element, 'display');
if (display && display !== 'none') {
return { width: element.offsetWidth, height: element.offsetHeight };
}
var style = element.style;
var originalStyles = {
visibility: style.visibility,
position: style.position,
display: style.display
};
var newStyles = {
visibility: 'hidden',
display: 'block'
};
if (originalStyles.position !== 'fixed')
newStyles.position = 'absolute';
Element.setStyle(element, newStyles);
var dimensions = {
width:  element.offsetWidth,
height: element.offsetHeight
};
Element.setStyle(element, originalStyles);
return dimensions;
}
function getOffsetParent(element) {
element = $(element);
if (isDocument(element) || isDetached(element) || isBody(element) || isHtml(element))
return $(document.body);
var isInline = (Element.getStyle(element, 'display') === 'inline');
if (!isInline && element.offsetParent) return $(element.offsetParent);
while ((element = element.parentNode) && element !== document.body) {
if (Element.getStyle(element, 'position') !== 'static') {
return isHtml(element) ? $(document.body) : $(element);
}
}
return $(document.body);
}
function cumulativeOffset(element) {
element = $(element);
var valueT = 0, valueL = 0;
if (element.parentNode) {
do {
valueT += element.offsetTop  || 0;
valueL += element.offsetLeft || 0;
element = element.offsetParent;
} while (element);
}
return new Element.Offset(valueL, valueT);
}
function positionedOffset(element) {
element = $(element);
var layout = element.getLayout();
var valueT = 0, valueL = 0;
do {
valueT += element.offsetTop  || 0;
valueL += element.offsetLeft || 0;
element = element.offsetParent;
if (element) {
if (isBody(element)) break;
var p = Element.getStyle(element, 'position');
if (p !== 'static') break;
}
} while (element);
valueL -= layout.get('margin-top');
valueT -= layout.get('margin-left');
return new Element.Offset(valueL, valueT);
}
function cumulativeScrollOffset(element) {
var valueT = 0, valueL = 0;
do {
valueT += element.scrollTop  || 0;
valueL += element.scrollLeft || 0;
element = element.parentNode;
} while (element);
return new Element.Offset(valueL, valueT);
}
function viewportOffset(forElement) {
var valueT = 0, valueL = 0, docBody = document.body;
var element = $(forElement);
do {
valueT += element.offsetTop  || 0;
valueL += element.offsetLeft || 0;
if (element.offsetParent == docBody &&
Element.getStyle(element, 'position') == 'absolute') break;
} while (element = element.offsetParent);
element = forElement;
do {
if (element != docBody) {
valueT -= element.scrollTop  || 0;
valueL -= element.scrollLeft || 0;
}
} while (element = element.parentNode);
return new Element.Offset(valueL, valueT);
}
function absolutize(element) {
element = $(element);
if (Element.getStyle(element, 'position') === 'absolute') {
return element;
}
var offsetParent = getOffsetParent(element);
var eOffset = element.viewportOffset(),
pOffset = offsetParent.viewportOffset();
var offset = eOffset.relativeTo(pOffset);
var layout = element.getLayout();
element.store('prototype_absolutize_original_styles', {
left: element.getStyle('left'),
top: element.getStyle('top'),
width:  element.getStyle('width'),
height: element.getStyle('height')
});
element.setStyle({
position: 'absolute',
top: offset.top + 'px',
left: offset.left + 'px',
width:  layout.get('width') + 'px',
height: layout.get('height') + 'px'
});
return element;
}
function relativize(element) {
element = $(element);
if (Element.getStyle(element, 'position') === 'relative') {
return element;
}
var originalStyles =
element.retrieve('prototype_absolutize_original_styles');
if (originalStyles) element.setStyle(originalStyles);
return element;
}
function scrollTo(element) {
element = $(element);
var pos = Element.cumulativeOffset(element);
window.scrollTo(pos.left, pos.top);
return element;
}
function makePositioned(element) {
element = $(element);
var position = Element.getStyle(element, 'position'), styles = {};
if (position === 'static' || !position) {
styles.position = 'relative';
if (Prototype.Browser.Opera) {
styles.top  = 0;
styles.left = 0;
}
Element.setStyle(element, styles);
Element.store(element, 'prototype_made_positioned', true);
}
return element;
}
function undoPositioned(element) {
element = $(element);
var storage = Element.getStorage(element),
madePositioned = storage.get('prototype_made_positioned');
if (madePositioned) {
storage.unset('prototype_made_positioned');
Element.setStyle(element, {
position: '',
top: '',
bottom: '',
left: '',
right: ''
});
}
return element;
}
function makeClipping(element) {
element = $(element);
var storage = Element.getStorage(element),
madeClipping = storage.get('prototype_made_clipping');
if (Object.isUndefined(madeClipping)) {
var overflow = Element.getStyle(element, 'overflow');
storage.set('prototype_made_clipping', overflow);
if (overflow !== 'hidden')
element.style.overflow = 'hidden';
}
return element;
}
function undoClipping(element) {
element = $(element);
var storage = Element.getStorage(element),
overflow = storage.get('prototype_made_clipping');
if (!Object.isUndefined(overflow)) {
storage.unset('prototype_made_clipping');
element.style.overflow = overflow || '';
}
return element;
}
function clonePosition(element, source, options) {
options = Object.extend({
setLeft: true,
setTop: true,
setWidth: true,
setHeight:  true,
offsetTop:  0,
offsetLeft: 0
}, options || {});
source  = $(source);
element = $(element);
var p, delta, layout, styles = {};
if (options.setLeft || options.setTop) {
p = Element.viewportOffset(source);
delta = [0, 0];
if (Element.getStyle(element, 'position') === 'absolute') {
var parent = Element.getOffsetParent(element);
if (parent !== document.body) delta = Element.viewportOffset(parent);
}
}
if (options.setWidth || options.setHeight) {
layout = Element.getLayout(source);
}
if (options.setLeft)
styles.left = (p[0] - delta[0] + options.offsetLeft) + 'px';
if (options.setTop)
styles.top  = (p[1] - delta[1] + options.offsetTop)  + 'px';
if (options.setWidth)
styles.width  = layout.get('border-box-width')  + 'px';
if (options.setHeight)
styles.height = layout.get('border-box-height') + 'px';
return Element.setStyle(element, styles);
}
if (Prototype.Browser.IE) {
getOffsetParent = getOffsetParent.wrap(
function(proceed, element) {
element = $(element);
if (isDocument(element) || isDetached(element) || isBody(element) || isHtml(element))
return $(document.body);
var position = element.getStyle('position');
if (position !== 'static') return proceed(element);
element.setStyle({ position: 'relative' });
var value = proceed(element);
element.setStyle({ position: position });
return value;
}
);
positionedOffset = positionedOffset.wrap(function(proceed, element) {
element = $(element);
if (!element.parentNode) return new Element.Offset(0, 0);
var position = element.getStyle('position');
if (position !== 'static') return proceed(element);
var offsetParent = element.getOffsetParent();
if (offsetParent && offsetParent.getStyle('position') === 'fixed')
hasLayout(offsetParent);
element.setStyle({ position: 'relative' });
var value = proceed(element);
element.setStyle({ position: position });
return value;
});
} else if (Prototype.Browser.Webkit) {
cumulativeOffset = function(element) {
element = $(element);
var valueT = 0, valueL = 0;
do {
valueT += element.offsetTop  || 0;
valueL += element.offsetLeft || 0;
if (element.offsetParent == document.body) {
if (Element.getStyle(element, 'position') == 'absolute') break;
}
element = element.offsetParent;
} while (element);
return new Element.Offset(valueL, valueT);
};
}
Element.addMethods({
getLayout: getLayout,
measure: measure,
getWidth: getWidth,
getHeight: getHeight,
getDimensions: getDimensions,
getOffsetParent: getOffsetParent,
cumulativeOffset: cumulativeOffset,
positionedOffset: positionedOffset,
cumulativeScrollOffset: cumulativeScrollOffset,
viewportOffset: viewportOffset,
absolutize: absolutize,
relativize: relativize,
scrollTo: scrollTo,
makePositioned: makePositioned,
undoPositioned: undoPositioned,
makeClipping: makeClipping,
undoClipping: undoClipping,
clonePosition: clonePosition
});
function isBody(element) {
return element.nodeName.toUpperCase() === 'BODY';
}
function isHtml(element) {
return element.nodeName.toUpperCase() === 'HTML';
}
function isDocument(element) {
return element.nodeType === Node.DOCUMENT_NODE;
}
function isDetached(element) {
return element !== document.body &&
!Element.descendantOf(element, document.body);
}
if ('getBoundingClientRect' in document.documentElement) {
Element.addMethods({
viewportOffset: function(element) {
element = $(element);
if (isDetached(element)) return new Element.Offset(0, 0);
var rect = element.getBoundingClientRect(),
docEl = document.documentElement;
return new Element.Offset(rect.left - docEl.clientLeft,
rect.top - docEl.clientTop);
}
});
}
})();
(function() {
var IS_OLD_OPERA = Prototype.Browser.Opera &&
(window.parseFloat(window.opera.version()) < 9.5);
var ROOT = null;
function getRootElement() {
if (ROOT) return ROOT;
ROOT = IS_OLD_OPERA ? document.body : document.documentElement;
return ROOT;
}
function getDimensions() {
return { width: this.getWidth(), height: this.getHeight() };
}
function getWidth() {
return getRootElement().clientWidth;
}
function getHeight() {
return getRootElement().clientHeight;
}
function getScrollOffsets() {
var x = window.pageXOffset || document.documentElement.scrollLeft ||
document.body.scrollLeft;
var y = window.pageYOffset || document.documentElement.scrollTop ||
document.body.scrollTop;
return new Element.Offset(x, y);
}
document.viewport = {
getDimensions: getDimensions,
getWidth: getWidth,
getHeight: getHeight,
getScrollOffsets: getScrollOffsets
};
})();
window.$$ = function() {
var expression = $A(arguments).join(', ');
return Prototype.Selector.select(expression, document);
};
Prototype.Selector = (function() {
function select() {
throw new Error('Method "Prototype.Selector.select" must be defined.');
}
function match() {
throw new Error('Method "Prototype.Selector.match" must be defined.');
}
function find(elements, expression, index) {
index = index || 0;
var match = Prototype.Selector.match, length = elements.length, matchIndex = 0, i;
for (i = 0; i < length; i++) {
if (match(elements[i], expression) && index == matchIndex++) {
return Element.extend(elements[i]);
}
}
}
function extendElements(elements) {
for (var i = 0, length = elements.length; i < length; i++) {
Element.extend(elements[i]);
}
return elements;
}
var K = Prototype.K;
return {
select: select,
match: match,
find: find,
extendElements: (Element.extend === K) ? K : extendElements,
extendElement: Element.extend
};
})();
(function(){
var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
done = 0,
toString = Object.prototype.toString,
hasDuplicate = false,
baseHasDuplicate = true,
rBackslash = /\\/g,
rNonWord = /\W/;
[0, 0].sort(function() {
baseHasDuplicate = false;
return 0;
});
var Sizzle = function( selector, context, results, seed ) {
results = results || [];
context = context || document;
var origContext = context;
if ( context.nodeType !== 1 && context.nodeType !== 9 ) {
return [];
}
if ( !selector || typeof selector !== "string" ) {
return results;
}
var m, set, checkSet, extra, ret, cur, pop, i,
prune = true,
contextXML = Sizzle.isXML( context ),
parts = [],
soFar = selector;
do {
chunker.exec( "" );
m = chunker.exec( soFar );
if ( m ) {
soFar = m[3];
parts.push( m[1] );
if ( m[2] ) {
extra = m[3];
break;
}
}
} while ( m );
if ( parts.length > 1 && origPOS.exec( selector ) ) {
if ( parts.length === 2 && Expr.relative[ parts[0] ] ) {
set = posProcess( parts[0] + parts[1], context );
} else {
set = Expr.relative[ parts[0] ] ?
[ context ] :
Sizzle( parts.shift(), context );
while ( parts.length ) {
selector = parts.shift();
if ( Expr.relative[ selector ] ) {
selector += parts.shift();
}
set = posProcess( selector, set );
}
}
} else {
if ( !seed && parts.length > 1 && context.nodeType === 9 && !contextXML &&
Expr.match.ID.test(parts[0]) && !Expr.match.ID.test(parts[parts.length - 1]) ) {
ret = Sizzle.find( parts.shift(), context, contextXML );
context = ret.expr ?
Sizzle.filter( ret.expr, ret.set )[0] :
ret.set[0];
}
if ( context ) {
ret = seed ?
{ expr: parts.pop(), set: makeArray(seed) } :
Sizzle.find( parts.pop(), parts.length === 1 && (parts[0] === "~" || parts[0] === "+") && context.parentNode ? context.parentNode : context, contextXML );
set = ret.expr ?
Sizzle.filter( ret.expr, ret.set ) :
ret.set;
if ( parts.length > 0 ) {
checkSet = makeArray( set );
} else {
prune = false;
}
while ( parts.length ) {
cur = parts.pop();
pop = cur;
if ( !Expr.relative[ cur ] ) {
cur = "";
} else {
pop = parts.pop();
}
if ( pop == null ) {
pop = context;
}
Expr.relative[ cur ]( checkSet, pop, contextXML );
}
} else {
checkSet = parts = [];
}
}
if ( !checkSet ) {
checkSet = set;
}
if ( !checkSet ) {
Sizzle.error( cur || selector );
}
if ( toString.call(checkSet) === "[object Array]" ) {
if ( !prune ) {
results.push.apply( results, checkSet );
} else if ( context && context.nodeType === 1 ) {
for ( i = 0; checkSet[i] != null; i++ ) {
if ( checkSet[i] && (checkSet[i] === true || checkSet[i].nodeType === 1 && Sizzle.contains(context, checkSet[i])) ) {
results.push( set[i] );
}
}
} else {
for ( i = 0; checkSet[i] != null; i++ ) {
if ( checkSet[i] && checkSet[i].nodeType === 1 ) {
results.push( set[i] );
}
}
}
} else {
makeArray( checkSet, results );
}
if ( extra ) {
Sizzle( extra, origContext, results, seed );
Sizzle.uniqueSort( results );
}
return results;
};
Sizzle.uniqueSort = function( results ) {
if ( sortOrder ) {
hasDuplicate = baseHasDuplicate;
results.sort( sortOrder );
if ( hasDuplicate ) {
for ( var i = 1; i < results.length; i++ ) {
if ( results[i] === results[ i - 1 ] ) {
results.splice( i--, 1 );
}
}
}
}
return results;
};
Sizzle.matches = function( expr, set ) {
return Sizzle( expr, null, null, set );
};
Sizzle.matchesSelector = function( node, expr ) {
return Sizzle( expr, null, null, [node] ).length > 0;
};
Sizzle.find = function( expr, context, isXML ) {
var set;
if ( !expr ) {
return [];
}
for ( var i = 0, l = Expr.order.length; i < l; i++ ) {
var match,
type = Expr.order[i];
if ( (match = Expr.leftMatch[ type ].exec( expr )) ) {
var left = match[1];
match.splice( 1, 1 );
if ( left.substr( left.length - 1 ) !== "\\" ) {
match[1] = (match[1] || "").replace( rBackslash, "" );
set = Expr.find[ type ]( match, context, isXML );
if ( set != null ) {
expr = expr.replace( Expr.match[ type ], "" );
break;
}
}
}
}
if ( !set ) {
set = typeof context.getElementsByTagName !== "undefined" ?
context.getElementsByTagName( "*" ) :
[];
}
return { set: set, expr: expr };
};
Sizzle.filter = function( expr, set, inplace, not ) {
var match, anyFound,
old = expr,
result = [],
curLoop = set,
isXMLFilter = set && set[0] && Sizzle.isXML( set[0] );
while ( expr && set.length ) {
for ( var type in Expr.filter ) {
if ( (match = Expr.leftMatch[ type ].exec( expr )) != null && match[2] ) {
var found, item,
filter = Expr.filter[ type ],
left = match[1];
anyFound = false;
match.splice(1,1);
if ( left.substr( left.length - 1 ) === "\\" ) {
continue;
}
if ( curLoop === result ) {
result = [];
}
if ( Expr.preFilter[ type ] ) {
match = Expr.preFilter[ type ]( match, curLoop, inplace, result, not, isXMLFilter );
if ( !match ) {
anyFound = found = true;
} else if ( match === true ) {
continue;
}
}
if ( match ) {
for ( var i = 0; (item = curLoop[i]) != null; i++ ) {
if ( item ) {
found = filter( item, match, i, curLoop );
var pass = not ^ !!found;
if ( inplace && found != null ) {
if ( pass ) {
anyFound = true;
} else {
curLoop[i] = false;
}
} else if ( pass ) {
result.push( item );
anyFound = true;
}
}
}
}
if ( found !== undefined ) {
if ( !inplace ) {
curLoop = result;
}
expr = expr.replace( Expr.match[ type ], "" );
if ( !anyFound ) {
return [];
}
break;
}
}
}
if ( expr === old ) {
if ( anyFound == null ) {
Sizzle.error( expr );
} else {
break;
}
}
old = expr;
}
return curLoop;
};
Sizzle.error = function( msg ) {
throw "Syntax error, unrecognized expression: " + msg;
};
var Expr = Sizzle.selectors = {
order: [ "ID", "NAME", "TAG" ],
match: {
ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
},
leftMatch: {},
attrMap: {
"class": "className",
"for": "htmlFor"
},
attrHandle: {
href: function( elem ) {
return elem.getAttribute( "href" );
},
type: function( elem ) {
return elem.getAttribute( "type" );
}
},
relative: {
"+": function(checkSet, part){
var isPartStr = typeof part === "string",
isTag = isPartStr && !rNonWord.test( part ),
isPartStrNotTag = isPartStr && !isTag;
if ( isTag ) {
part = part.toLowerCase();
}
for ( var i = 0, l = checkSet.length, elem; i < l; i++ ) {
if ( (elem = checkSet[i]) ) {
while ( (elem = elem.previousSibling) && elem.nodeType !== 1 ) {}
checkSet[i] = isPartStrNotTag || elem && elem.nodeName.toLowerCase() === part ?
elem || false :
elem === part;
}
}
if ( isPartStrNotTag ) {
Sizzle.filter( part, checkSet, true );
}
},
">": function( checkSet, part ) {
var elem,
isPartStr = typeof part === "string",
i = 0,
l = checkSet.length;
if ( isPartStr && !rNonWord.test( part ) ) {
part = part.toLowerCase();
for ( ; i < l; i++ ) {
elem = checkSet[i];
if ( elem ) {
var parent = elem.parentNode;
checkSet[i] = parent.nodeName.toLowerCase() === part ? parent : false;
}
}
} else {
for ( ; i < l; i++ ) {
elem = checkSet[i];
if ( elem ) {
checkSet[i] = isPartStr ?
elem.parentNode :
elem.parentNode === part;
}
}
if ( isPartStr ) {
Sizzle.filter( part, checkSet, true );
}
}
},
"": function(checkSet, part, isXML){
var nodeCheck,
doneName = done++,
checkFn = dirCheck;
if ( typeof part === "string" && !rNonWord.test( part ) ) {
part = part.toLowerCase();
nodeCheck = part;
checkFn = dirNodeCheck;
}
checkFn( "parentNode", part, doneName, checkSet, nodeCheck, isXML );
},
"~": function( checkSet, part, isXML ) {
var nodeCheck,
doneName = done++,
checkFn = dirCheck;
if ( typeof part === "string" && !rNonWord.test( part ) ) {
part = part.toLowerCase();
nodeCheck = part;
checkFn = dirNodeCheck;
}
checkFn( "previousSibling", part, doneName, checkSet, nodeCheck, isXML );
}
},
find: {
ID: function( match, context, isXML ) {
if ( typeof context.getElementById !== "undefined" && !isXML ) {
var m = context.getElementById(match[1]);
return m && m.parentNode ? [m] : [];
}
},
NAME: function( match, context ) {
if ( typeof context.getElementsByName !== "undefined" ) {
var ret = [],
results = context.getElementsByName( match[1] );
for ( var i = 0, l = results.length; i < l; i++ ) {
if ( results[i].getAttribute("name") === match[1] ) {
ret.push( results[i] );
}
}
return ret.length === 0 ? null : ret;
}
},
TAG: function( match, context ) {
if ( typeof context.getElementsByTagName !== "undefined" ) {
return context.getElementsByTagName( match[1] );
}
}
},
preFilter: {
CLASS: function( match, curLoop, inplace, result, not, isXML ) {
match = " " + match[1].replace( rBackslash, "" ) + " ";
if ( isXML ) {
return match;
}
for ( var i = 0, elem; (elem = curLoop[i]) != null; i++ ) {
if ( elem ) {
if ( not ^ (elem.className && (" " + elem.className + " ").replace(/[\t\n\r]/g, " ").indexOf(match) >= 0) ) {
if ( !inplace ) {
result.push( elem );
}
} else if ( inplace ) {
curLoop[i] = false;
}
}
}
return false;
},
ID: function( match ) {
return match[1].replace( rBackslash, "" );
},
TAG: function( match, curLoop ) {
return match[1].replace( rBackslash, "" ).toLowerCase();
},
CHILD: function( match ) {
if ( match[1] === "nth" ) {
if ( !match[2] ) {
Sizzle.error( match[0] );
}
match[2] = match[2].replace(/^\+|\s*/g, '');
var test = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(
match[2] === "even" && "2n" || match[2] === "odd" && "2n+1" ||
!/\D/.test( match[2] ) && "0n+" + match[2] || match[2]);
match[2] = (test[1] + (test[2] || 1)) - 0;
match[3] = test[3] - 0;
}
else if ( match[2] ) {
Sizzle.error( match[0] );
}
match[0] = done++;
return match;
},
ATTR: function( match, curLoop, inplace, result, not, isXML ) {
var name = match[1] = match[1].replace( rBackslash, "" );
if ( !isXML && Expr.attrMap[name] ) {
match[1] = Expr.attrMap[name];
}
match[4] = ( match[4] || match[5] || "" ).replace( rBackslash, "" );
if ( match[2] === "~=" ) {
match[4] = " " + match[4] + " ";
}
return match;
},
PSEUDO: function( match, curLoop, inplace, result, not ) {
if ( match[1] === "not" ) {
if ( ( chunker.exec(match[3]) || "" ).length > 1 || /^\w/.test(match[3]) ) {
match[3] = Sizzle(match[3], null, null, curLoop);
} else {
var ret = Sizzle.filter(match[3], curLoop, inplace, true ^ not);
if ( !inplace ) {
result.push.apply( result, ret );
}
return false;
}
} else if ( Expr.match.POS.test( match[0] ) || Expr.match.CHILD.test( match[0] ) ) {
return true;
}
return match;
},
POS: function( match ) {
match.unshift( true );
return match;
}
},
filters: {
enabled: function( elem ) {
return elem.disabled === false && elem.type !== "hidden";
},
disabled: function( elem ) {
return elem.disabled === true;
},
checked: function( elem ) {
return elem.checked === true;
},
selected: function( elem ) {
if ( elem.parentNode ) {
elem.parentNode.selectedIndex;
}
return elem.selected === true;
},
parent: function( elem ) {
return !!elem.firstChild;
},
empty: function( elem ) {
return !elem.firstChild;
},
has: function( elem, i, match ) {
return !!Sizzle( match[3], elem ).length;
},
header: function( elem ) {
return (/h\d/i).test( elem.nodeName );
},
text: function( elem ) {
var attr = elem.getAttribute( "type" ), type = elem.type;
return elem.nodeName.toLowerCase() === "input" && "text" === type && ( attr === type || attr === null );
},
radio: function( elem ) {
return elem.nodeName.toLowerCase() === "input" && "radio" === elem.type;
},
checkbox: function( elem ) {
return elem.nodeName.toLowerCase() === "input" && "checkbox" === elem.type;
},
file: function( elem ) {
return elem.nodeName.toLowerCase() === "input" && "file" === elem.type;
},
password: function( elem ) {
return elem.nodeName.toLowerCase() === "input" && "password" === elem.type;
},
submit: function( elem ) {
var name = elem.nodeName.toLowerCase();
return (name === "input" || name === "button") && "submit" === elem.type;
},
image: function( elem ) {
return elem.nodeName.toLowerCase() === "input" && "image" === elem.type;
},
reset: function( elem ) {
var name = elem.nodeName.toLowerCase();
return (name === "input" || name === "button") && "reset" === elem.type;
},
button: function( elem ) {
var name = elem.nodeName.toLowerCase();
return name === "input" && "button" === elem.type || name === "button";
},
input: function( elem ) {
return (/input|select|textarea|button/i).test( elem.nodeName );
},
focus: function( elem ) {
return elem === elem.ownerDocument.activeElement;
}
},
setFilters: {
first: function( elem, i ) {
return i === 0;
},
last: function( elem, i, match, array ) {
return i === array.length - 1;
},
even: function( elem, i ) {
return i % 2 === 0;
},
odd: function( elem, i ) {
return i % 2 === 1;
},
lt: function( elem, i, match ) {
return i < match[3] - 0;
},
gt: function( elem, i, match ) {
return i > match[3] - 0;
},
nth: function( elem, i, match ) {
return match[3] - 0 === i;
},
eq: function( elem, i, match ) {
return match[3] - 0 === i;
}
},
filter: {
PSEUDO: function( elem, match, i, array ) {
var name = match[1],
filter = Expr.filters[ name ];
if ( filter ) {
return filter( elem, i, match, array );
} else if ( name === "contains" ) {
return (elem.textContent || elem.innerText || Sizzle.getText([ elem ]) || "").indexOf(match[3]) >= 0;
} else if ( name === "not" ) {
var not = match[3];
for ( var j = 0, l = not.length; j < l; j++ ) {
if ( not[j] === elem ) {
return false;
}
}
return true;
} else {
Sizzle.error( name );
}
},
CHILD: function( elem, match ) {
var type = match[1],
node = elem;
switch ( type ) {
case "only":
case "first":
while ( (node = node.previousSibling) ) {
if ( node.nodeType === 1 ) {
return false;
}
}
if ( type === "first" ) {
return true;
}
node = elem;
case "last":
while ( (node = node.nextSibling) ) {
if ( node.nodeType === 1 ) {
return false;
}
}
return true;
case "nth":
var first = match[2],
last = match[3];
if ( first === 1 && last === 0 ) {
return true;
}
var doneName = match[0],
parent = elem.parentNode;
if ( parent && (parent.sizcache !== doneName || !elem.nodeIndex) ) {
var count = 0;
for ( node = parent.firstChild; node; node = node.nextSibling ) {
if ( node.nodeType === 1 ) {
node.nodeIndex = ++count;
}
}
parent.sizcache = doneName;
}
var diff = elem.nodeIndex - last;
if ( first === 0 ) {
return diff === 0;
} else {
return ( diff % first === 0 && diff / first >= 0 );
}
}
},
ID: function( elem, match ) {
return elem.nodeType === 1 && elem.getAttribute("id") === match;
},
TAG: function( elem, match ) {
return (match === "*" && elem.nodeType === 1) || elem.nodeName.toLowerCase() === match;
},
CLASS: function( elem, match ) {
return (" " + (elem.className || elem.getAttribute("class")) + " ")
.indexOf( match ) > -1;
},
ATTR: function( elem, match ) {
var name = match[1],
result = Expr.attrHandle[ name ] ?
Expr.attrHandle[ name ]( elem ) :
elem[ name ] != null ?
elem[ name ] :
elem.getAttribute( name ),
value = result + "",
type = match[2],
check = match[4];
return result == null ?
type === "!=" :
type === "=" ?
value === check :
type === "*=" ?
value.indexOf(check) >= 0 :
type === "~=" ?
(" " + value + " ").indexOf(check) >= 0 :
!check ?
value && result !== false :
type === "!=" ?
value !== check :
type === "^=" ?
value.indexOf(check) === 0 :
type === "$=" ?
value.substr(value.length - check.length) === check :
type === "|=" ?
value === check || value.substr(0, check.length + 1) === check + "-" :
false;
},
POS: function( elem, match, i, array ) {
var name = match[2],
filter = Expr.setFilters[ name ];
if ( filter ) {
return filter( elem, i, match, array );
}
}
}
};
var origPOS = Expr.match.POS,
fescape = function(all, num){
return "\\" + (num - 0 + 1);
};
for ( var type in Expr.match ) {
Expr.match[ type ] = new RegExp( Expr.match[ type ].source + (/(?![^\[]*\])(?![^\(]*\))/.source) );
Expr.leftMatch[ type ] = new RegExp( /(^(?:.|\r|\n)*?)/.source + Expr.match[ type ].source.replace(/\\(\d+)/g, fescape) );
}
var makeArray = function( array, results ) {
array = Array.prototype.slice.call( array, 0 );
if ( results ) {
results.push.apply( results, array );
return results;
}
return array;
};
try {
Array.prototype.slice.call( document.documentElement.childNodes, 0 )[0].nodeType;
} catch( e ) {
makeArray = function( array, results ) {
var i = 0,
ret = results || [];
if ( toString.call(array) === "[object Array]" ) {
Array.prototype.push.apply( ret, array );
} else {
if ( typeof array.length === "number" ) {
for ( var l = array.length; i < l; i++ ) {
ret.push( array[i] );
}
} else {
for ( ; array[i]; i++ ) {
ret.push( array[i] );
}
}
}
return ret;
};
}
var sortOrder, siblingCheck;
if ( document.documentElement.compareDocumentPosition ) {
sortOrder = function( a, b ) {
if ( a === b ) {
hasDuplicate = true;
return 0;
}
if ( !a.compareDocumentPosition || !b.compareDocumentPosition ) {
return a.compareDocumentPosition ? -1 : 1;
}
return a.compareDocumentPosition(b) & 4 ? -1 : 1;
};
} else {
sortOrder = function( a, b ) {
if ( a === b ) {
hasDuplicate = true;
return 0;
} else if ( a.sourceIndex && b.sourceIndex ) {
return a.sourceIndex - b.sourceIndex;
}
var al, bl,
ap = [],
bp = [],
aup = a.parentNode,
bup = b.parentNode,
cur = aup;
if ( aup === bup ) {
return siblingCheck( a, b );
} else if ( !aup ) {
return -1;
} else if ( !bup ) {
return 1;
}
while ( cur ) {
ap.unshift( cur );
cur = cur.parentNode;
}
cur = bup;
while ( cur ) {
bp.unshift( cur );
cur = cur.parentNode;
}
al = ap.length;
bl = bp.length;
for ( var i = 0; i < al && i < bl; i++ ) {
if ( ap[i] !== bp[i] ) {
return siblingCheck( ap[i], bp[i] );
}
}
return i === al ?
siblingCheck( a, bp[i], -1 ) :
siblingCheck( ap[i], b, 1 );
};
siblingCheck = function( a, b, ret ) {
if ( a === b ) {
return ret;
}
var cur = a.nextSibling;
while ( cur ) {
if ( cur === b ) {
return -1;
}
cur = cur.nextSibling;
}
return 1;
};
}
Sizzle.getText = function( elems ) {
var ret = "", elem;
for ( var i = 0; elems[i]; i++ ) {
elem = elems[i];
if ( elem.nodeType === 3 || elem.nodeType === 4 ) {
ret += elem.nodeValue;
} else if ( elem.nodeType !== 8 ) {
ret += Sizzle.getText( elem.childNodes );
}
}
return ret;
};
(function(){
var form = document.createElement("div"),
id = "script" + (new Date()).getTime(),
root = document.documentElement;
form.innerHTML = "<a name='" + id + "'/>";
root.insertBefore( form, root.firstChild );
if ( document.getElementById( id ) ) {
Expr.find.ID = function( match, context, isXML ) {
if ( typeof context.getElementById !== "undefined" && !isXML ) {
var m = context.getElementById(match[1]);
return m ?
m.id === match[1] || typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id").nodeValue === match[1] ?
[m] :
undefined :
[];
}
};
Expr.filter.ID = function( elem, match ) {
var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
return elem.nodeType === 1 && node && node.nodeValue === match;
};
}
root.removeChild( form );
root = form = null;
})();
(function(){
var div = document.createElement("div");
div.appendChild( document.createComment("") );
if ( div.getElementsByTagName("*").length > 0 ) {
Expr.find.TAG = function( match, context ) {
var results = context.getElementsByTagName( match[1] );
if ( match[1] === "*" ) {
var tmp = [];
for ( var i = 0; results[i]; i++ ) {
if ( results[i].nodeType === 1 ) {
tmp.push( results[i] );
}
}
results = tmp;
}
return results;
};
}
div.innerHTML = "<a href='#'></a>";
if ( div.firstChild && typeof div.firstChild.getAttribute !== "undefined" &&
div.firstChild.getAttribute("href") !== "#" ) {
Expr.attrHandle.href = function( elem ) {
return elem.getAttribute( "href", 2 );
};
}
div = null;
})();
if ( document.querySelectorAll ) {
(function(){
var oldSizzle = Sizzle,
div = document.createElement("div"),
id = "__sizzle__";
div.innerHTML = "<p class='TEST'></p>";
if ( div.querySelectorAll && div.querySelectorAll(".TEST").length === 0 ) {
return;
}
Sizzle = function( query, context, extra, seed ) {
context = context || document;
if ( !seed && !Sizzle.isXML(context) ) {
var match = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec( query );
if ( match && (context.nodeType === 1 || context.nodeType === 9) ) {
if ( match[1] ) {
return makeArray( context.getElementsByTagName( query ), extra );
} else if ( match[2] && Expr.find.CLASS && context.getElementsByClassName ) {
return makeArray( context.getElementsByClassName( match[2] ), extra );
}
}
if ( context.nodeType === 9 ) {
if ( query === "body" && context.body ) {
return makeArray( [ context.body ], extra );
} else if ( match && match[3] ) {
var elem = context.getElementById( match[3] );
if ( elem && elem.parentNode ) {
if ( elem.id === match[3] ) {
return makeArray( [ elem ], extra );
}
} else {
return makeArray( [], extra );
}
}
try {
return makeArray( context.querySelectorAll(query), extra );
} catch(qsaError) {}
} else if ( context.nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
var oldContext = context,
old = context.getAttribute( "id" ),
nid = old || id,
hasParent = context.parentNode,
relativeHierarchySelector = /^\s*[+~]/.test( query );
if ( !old ) {
context.setAttribute( "id", nid );
} else {
nid = nid.replace( /'/g, "\\$&" );
}
if ( relativeHierarchySelector && hasParent ) {
context = context.parentNode;
}
try {
if ( !relativeHierarchySelector || hasParent ) {
return makeArray( context.querySelectorAll( "[id='" + nid + "'] " + query ), extra );
}
} catch(pseudoError) {
} finally {
if ( !old ) {
oldContext.removeAttribute( "id" );
}
}
}
}
return oldSizzle(query, context, extra, seed);
};
for ( var prop in oldSizzle ) {
Sizzle[ prop ] = oldSizzle[ prop ];
}
div = null;
})();
}
(function(){
var html = document.documentElement,
matches = html.matchesSelector || html.mozMatchesSelector || html.webkitMatchesSelector || html.msMatchesSelector;
if ( matches ) {
var disconnectedMatch = !matches.call( document.createElement( "div" ), "div" ),
pseudoWorks = false;
try {
matches.call( document.documentElement, "[test!='']:sizzle" );
} catch( pseudoError ) {
pseudoWorks = true;
}
Sizzle.matchesSelector = function( node, expr ) {
expr = expr.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
if ( !Sizzle.isXML( node ) ) {
try {
if ( pseudoWorks || !Expr.match.PSEUDO.test( expr ) && !/!=/.test( expr ) ) {
var ret = matches.call( node, expr );
if ( ret || !disconnectedMatch ||
node.document && node.document.nodeType !== 11 ) {
return ret;
}
}
} catch(e) {}
}
return Sizzle(expr, null, null, [node]).length > 0;
};
}
})();
(function(){
var div = document.createElement("div");
div.innerHTML = "<div class='test e'></div><div class='test'></div>";
if ( !div.getElementsByClassName || div.getElementsByClassName("e").length === 0 ) {
return;
}
div.lastChild.className = "e";
if ( div.getElementsByClassName("e").length === 1 ) {
return;
}
Expr.order.splice(1, 0, "CLASS");
Expr.find.CLASS = function( match, context, isXML ) {
if ( typeof context.getElementsByClassName !== "undefined" && !isXML ) {
return context.getElementsByClassName(match[1]);
}
};
div = null;
})();
function dirNodeCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
for ( var i = 0, l = checkSet.length; i < l; i++ ) {
var elem = checkSet[i];
if ( elem ) {
var match = false;
elem = elem[dir];
while ( elem ) {
if ( elem.sizcache === doneName ) {
match = checkSet[elem.sizset];
break;
}
if ( elem.nodeType === 1 && !isXML ){
elem.sizcache = doneName;
elem.sizset = i;
}
if ( elem.nodeName.toLowerCase() === cur ) {
match = elem;
break;
}
elem = elem[dir];
}
checkSet[i] = match;
}
}
}
function dirCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
for ( var i = 0, l = checkSet.length; i < l; i++ ) {
var elem = checkSet[i];
if ( elem ) {
var match = false;
elem = elem[dir];
while ( elem ) {
if ( elem.sizcache === doneName ) {
match = checkSet[elem.sizset];
break;
}
if ( elem.nodeType === 1 ) {
if ( !isXML ) {
elem.sizcache = doneName;
elem.sizset = i;
}
if ( typeof cur !== "string" ) {
if ( elem === cur ) {
match = true;
break;
}
} else if ( Sizzle.filter( cur, [elem] ).length > 0 ) {
match = elem;
break;
}
}
elem = elem[dir];
}
checkSet[i] = match;
}
}
}
if ( document.documentElement.contains ) {
Sizzle.contains = function( a, b ) {
return a !== b && (a.contains ? a.contains(b) : true);
};
} else if ( document.documentElement.compareDocumentPosition ) {
Sizzle.contains = function( a, b ) {
return !!(a.compareDocumentPosition(b) & 16);
};
} else {
Sizzle.contains = function() {
return false;
};
}
Sizzle.isXML = function( elem ) {
var documentElement = (elem ? elem.ownerDocument || elem : 0).documentElement;
return documentElement ? documentElement.nodeName !== "HTML" : false;
};
var posProcess = function( selector, context ) {
var match,
tmpSet = [],
later = "",
root = context.nodeType ? [context] : context;
while ( (match = Expr.match.PSEUDO.exec( selector )) ) {
later += match[0];
selector = selector.replace( Expr.match.PSEUDO, "" );
}
selector = Expr.relative[selector] ? selector + "*" : selector;
for ( var i = 0, l = root.length; i < l; i++ ) {
Sizzle( selector, root[i], tmpSet );
}
return Sizzle.filter( later, tmpSet );
};
window.Sizzle = Sizzle;
})();
Prototype._original_property = window.Sizzle;
;(function(engine) {
var extendElements = Prototype.Selector.extendElements;
function select(selector, scope) {
return extendElements(engine(selector, scope || document));
}
function match(element, selector) {
return engine.matches(selector, [element]).length == 1;
}
Prototype.Selector.engine = engine;
Prototype.Selector.select = select;
Prototype.Selector.match = match;
})(Sizzle);
window.Sizzle = Prototype._original_property;
delete Prototype._original_property;
var Form = {
reset: function(form) {
form = $(form);
form.reset();
return form;
},
serializeElements: function(elements, options) {
if (typeof options != 'object') options = { hash: !!options };
else if (Object.isUndefined(options.hash)) options.hash = true;
var key, value, submitted = false, submit = options.submit, accumulator, initial;
if (options.hash) {
initial = {};
accumulator = function(result, key, value) {
if (key in result) {
if (!Object.isArray(result[key])) result[key] = [result[key]];
result[key].push(value);
} else result[key] = value;
return result;
};
} else {
initial = '';
accumulator = function(result, key, value) {
value = value.gsub(/(\r)?\n/, '\r\n');
value = encodeURIComponent(value);
value = value.gsub(/%20/, '+');
return result + (result ? '&' : '') + encodeURIComponent(key) + '=' + value;
}
}
return elements.inject(initial, function(result, element) {
if (!element.disabled && element.name) {
key = element.name; value = $(element).getValue();
if (value != null && element.type != 'file' && (element.type != 'submit' || (!submitted &&
submit !== false && (!submit || key == submit) && (submitted = true)))) {
result = accumulator(result, key, value);
}
}
return result;
});
}
};
Form.Methods = {
serialize: function(form, options) {
return Form.serializeElements(Form.getElements(form), options);
},
getElements: function(form) {
var elements = $(form).getElementsByTagName('*');
var element, results = [], serializers = Form.Element.Serializers;
for (var i = 0; element = elements[i]; i++) {
if (serializers[element.tagName.toLowerCase()])
results.push(Element.extend(element));
}
return results;
},
getInputs: function(form, typeName, name) {
form = $(form);
var inputs = form.getElementsByTagName('input');
if (!typeName && !name) return $A(inputs).map(Element.extend);
for (var i = 0, matchingInputs = [], length = inputs.length; i < length; i++) {
var input = inputs[i];
if ((typeName && input.type != typeName) || (name && input.name != name))
continue;
matchingInputs.push(Element.extend(input));
}
return matchingInputs;
},
disable: function(form) {
form = $(form);
Form.getElements(form).invoke('disable');
return form;
},
enable: function(form) {
form = $(form);
Form.getElements(form).invoke('enable');
return form;
},
findFirstElement: function(form) {
var elements = $(form).getElements().findAll(function(element) {
return 'hidden' != element.type && !element.disabled;
});
var firstByIndex = elements.findAll(function(element) {
return element.hasAttribute('tabIndex') && element.tabIndex >= 0;
}).sortBy(function(element) { return element.tabIndex }).first();
return firstByIndex ? firstByIndex : elements.find(function(element) {
return /^(?:input|select|textarea)$/i.test(element.tagName);
});
},
focusFirstElement: function(form) {
form = $(form);
var element = form.findFirstElement();
if (element) element.activate();
return form;
},
request: function(form, options) {
form = $(form), options = Object.clone(options || { });
var params = options.parameters, action = form.readAttribute('action') || '';
if (action.blank()) action = window.location.href;
options.parameters = form.serialize(true);
if (params) {
if (Object.isString(params)) params = params.toQueryParams();
Object.extend(options.parameters, params);
}
if (form.hasAttribute('method') && !options.method)
options.method = form.method;
return new Ajax.Request(action, options);
}
};
Form.Element = {
focus: function(element) {
$(element).focus();
return element;
},
select: function(element) {
$(element).select();
return element;
}
};
Form.Element.Methods = {
serialize: function(element) {
element = $(element);
if (!element.disabled && element.name) {
var value = element.getValue();
if (value != undefined) {
var pair = { };
pair[element.name] = value;
return Object.toQueryString(pair);
}
}
return '';
},
getValue: function(element) {
element = $(element);
var method = element.tagName.toLowerCase();
return Form.Element.Serializers[method](element);
},
setValue: function(element, value) {
element = $(element);
var method = element.tagName.toLowerCase();
Form.Element.Serializers[method](element, value);
return element;
},
clear: function(element) {
$(element).value = '';
return element;
},
present: function(element) {
return $(element).value != '';
},
activate: function(element) {
element = $(element);
try {
element.focus();
if (element.select && (element.tagName.toLowerCase() != 'input' ||
!(/^(?:button|reset|submit)$/i.test(element.type))))
element.select();
} catch (e) { }
return element;
},
disable: function(element) {
element = $(element);
element.disabled = true;
return element;
},
enable: function(element) {
element = $(element);
element.disabled = false;
return element;
}
};
var Field = Form.Element;
var $F = Form.Element.Methods.getValue;
Form.Element.Serializers = (function() {
function input(element, value) {
switch (element.type.toLowerCase()) {
case 'checkbox':
case 'radio':
return inputSelector(element, value);
default:
return valueSelector(element, value);
}
}
function inputSelector(element, value) {
if (Object.isUndefined(value))
return element.checked ? element.value : null;
else element.checked = !!value;
}
function valueSelector(element, value) {
if (Object.isUndefined(value)) return element.value;
else element.value = value;
}
function select(element, value) {
if (Object.isUndefined(value))
return (element.type === 'select-one' ? selectOne : selectMany)(element);
var opt, currentValue, single = !Object.isArray(value);
for (var i = 0, length = element.length; i < length; i++) {
opt = element.options[i];
currentValue = this.optionValue(opt);
if (single) {
if (currentValue == value) {
opt.selected = true;
return;
}
}
else opt.selected = value.include(currentValue);
}
}
function selectOne(element) {
var index = element.selectedIndex;
return index >= 0 ? optionValue(element.options[index]) : null;
}
function selectMany(element) {
var values, length = element.length;
if (!length) return null;
for (var i = 0, values = []; i < length; i++) {
var opt = element.options[i];
if (opt.selected) values.push(optionValue(opt));
}
return values;
}
function optionValue(opt) {
return Element.hasAttribute(opt, 'value') ? opt.value : opt.text;
}
return {
input: input,
inputSelector: inputSelector,
textarea: valueSelector,
select: select,
selectOne: selectOne,
selectMany: selectMany,
optionValue: optionValue,
button: valueSelector
};
})();
Abstract.TimedObserver = Class.create(PeriodicalExecuter, {
initialize: function($super, element, frequency, callback) {
$super(callback, frequency);
this.element = $(element);
this.lastValue = this.getValue();
},
execute: function() {
var value = this.getValue();
if (Object.isString(this.lastValue) && Object.isString(value) ?
this.lastValue != value : String(this.lastValue) != String(value)) {
this.callback(this.element, value);
this.lastValue = value;
}
}
});
Form.Element.Observer = Class.create(Abstract.TimedObserver, {
getValue: function() {
return Form.Element.getValue(this.element);
}
});
Form.Observer = Class.create(Abstract.TimedObserver, {
getValue: function() {
return Form.serialize(this.element);
}
});
Abstract.EventObserver = Class.create({
initialize: function(element, callback) {
this.element  = $(element);
this.callback = callback;
this.lastValue = this.getValue();
if (this.element.tagName.toLowerCase() == 'form')
this.registerFormCallbacks();
else
this.registerCallback(this.element);
},
onElementEvent: function() {
var value = this.getValue();
if (this.lastValue != value) {
this.callback(this.element, value);
this.lastValue = value;
}
},
registerFormCallbacks: function() {
Form.getElements(this.element).each(this.registerCallback, this);
},
registerCallback: function(element) {
if (element.type) {
switch (element.type.toLowerCase()) {
case 'checkbox':
case 'radio':
Event.observe(element, 'click', this.onElementEvent.bind(this));
break;
default:
Event.observe(element, 'change', this.onElementEvent.bind(this));
break;
}
}
}
});
Form.Element.EventObserver = Class.create(Abstract.EventObserver, {
getValue: function() {
return Form.Element.getValue(this.element);
}
});
Form.EventObserver = Class.create(Abstract.EventObserver, {
getValue: function() {
return Form.serialize(this.element);
}
});
(function(GLOBAL) {
var DIV = document.createElement('div');
var docEl = document.documentElement;
var MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED = 'onmouseenter' in docEl
&& 'onmouseleave' in docEl;
var Event = {
KEY_BACKSPACE: 8,
KEY_TAB: 9,
KEY_RETURN: 13,
KEY_ESC: 27,
KEY_LEFT: 37,
KEY_UP: 38,
KEY_RIGHT: 39,
KEY_DOWN: 40,
KEY_DELETE: 46,
KEY_HOME: 36,
KEY_END: 35,
KEY_PAGEUP: 33,
KEY_PAGEDOWN: 34,
KEY_INSERT: 45
};
var isIELegacyEvent = function(event) { return false; };
if (window.attachEvent) {
if (window.addEventListener) {
isIELegacyEvent = function(event) {
return !(event instanceof window.Event);
};
} else {
isIELegacyEvent = function(event) { return true; };
}
}
var _isButton;
function _isButtonForDOMEvents(event, code) {
return event.which ? (event.which === code + 1) : (event.button === code);
}
var legacyButtonMap = { 0: 1, 1: 4, 2: 2 };
function _isButtonForLegacyEvents(event, code) {
return event.button === legacyButtonMap[code];
}
function _isButtonForWebKit(event, code) {
switch (code) {
case 0: return event.which == 1 && !event.metaKey;
case 1: return event.which == 2 || (event.which == 1 && event.metaKey);
case 2: return event.which == 3;
default: return false;
}
}
if (window.attachEvent) {
if (!window.addEventListener) {
_isButton = _isButtonForLegacyEvents;
} else {
_isButton = function(event, code) {
return isIELegacyEvent(event) ? _isButtonForLegacyEvents(event, code) :
_isButtonForDOMEvents(event, code);
}
}
} else if (Prototype.Browser.WebKit) {
_isButton = _isButtonForWebKit;
} else {
_isButton = _isButtonForDOMEvents;
}
function isLeftClick(event) { return _isButton(event, 0) }
function isMiddleClick(event) { return _isButton(event, 1) }
function isRightClick(event)  { return _isButton(event, 2) }
function element(event) {
return Element.extend(_element(event));
}
function _element(event) {
event = Event.extend(event);
var node = event.target, type = event.type,
currentTarget = event.currentTarget;
if (currentTarget && currentTarget.tagName) {
if (type === 'load' || type === 'error' ||
(type === 'click' && currentTarget.tagName.toLowerCase() === 'input'
&& currentTarget.type === 'radio'))
node = currentTarget;
}
if (node.nodeType == Node.TEXT_NODE)
node = node.parentNode;
return Element.extend(node);
}
function findElement(event, expression) {
var element = _element(event), match = Prototype.Selector.match;
if (!expression) return Element.extend(element);
while (element) {
if (Object.isElement(element) && match(element, expression))
return Element.extend(element);
element = element.parentNode;
}
}
function pointer(event) {
return { x: pointerX(event), y: pointerY(event) };
}
function pointerX(event) {
var docElement = document.documentElement,
body = document.body || { scrollLeft: 0 };
return event.pageX || (event.clientX +
(docElement.scrollLeft || body.scrollLeft) -
(docElement.clientLeft || 0));
}
function pointerY(event) {
var docElement = document.documentElement,
body = document.body || { scrollTop: 0 };
return  event.pageY || (event.clientY +
(docElement.scrollTop || body.scrollTop) -
(docElement.clientTop || 0));
}
function stop(event) {
Event.extend(event);
event.preventDefault();
event.stopPropagation();
event.stopped = true;
}
Event.Methods = {
isLeftClick: isLeftClick,
isMiddleClick: isMiddleClick,
isRightClick:  isRightClick,
element: element,
findElement: findElement,
pointer:  pointer,
pointerX: pointerX,
pointerY: pointerY,
stop: stop
};
var methods = Object.keys(Event.Methods).inject({ }, function(m, name) {
m[name] = Event.Methods[name].methodize();
return m;
});
if (window.attachEvent) {
function _relatedTarget(event) {
var element;
switch (event.type) {
case 'mouseover':
case 'mouseenter':
element = event.fromElement;
break;
case 'mouseout':
case 'mouseleave':
element = event.toElement;
break;
default:
return null;
}
return Element.extend(element);
}
var additionalMethods = {
stopPropagation: function() { this.cancelBubble = true },
preventDefault:  function() { this.returnValue = false },
inspect: function() { return '[object Event]' }
};
Event.extend = function(event, element) {
if (!event) return false;
if (!isIELegacyEvent(event)) return event;
if (event._extendedByPrototype) return event;
event._extendedByPrototype = Prototype.emptyFunction;
var pointer = Event.pointer(event);
Object.extend(event, {
target: event.srcElement || element,
relatedTarget: _relatedTarget(event),
pageX:  pointer.x,
pageY:  pointer.y
});
Object.extend(event, methods);
Object.extend(event, additionalMethods);
return event;
};
} else {
Event.extend = Prototype.K;
}
if (window.addEventListener) {
Event.prototype = window.Event.prototype || document.createEvent('HTMLEvents').__proto__;
Object.extend(Event.prototype, methods);
}
var EVENT_TRANSLATIONS = {
mouseenter: 'mouseover',
mouseleave: 'mouseout'
};
function getDOMEventName(eventName) {
return EVENT_TRANSLATIONS[eventName] || eventName;
}
if (MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED)
getDOMEventName = Prototype.K;
function getUniqueElementID(element) {
if (element === window) return 0;
if (typeof element._prototypeUID === 'undefined')
element._prototypeUID = Element.Storage.UID++;
return element._prototypeUID;
}
function getUniqueElementID_IE(element) {
if (element === window) return 0;
if (element == document) return 1;
return element.uniqueID;
}
if ('uniqueID' in DIV)
getUniqueElementID = getUniqueElementID_IE;
function isCustomEvent(eventName) {
return eventName.include(':');
}
Event._isCustomEvent = isCustomEvent;
function getRegistryForElement(element, uid) {
var CACHE = GLOBAL.Event.cache;
if (Object.isUndefined(uid))
uid = getUniqueElementID(element);
if (!CACHE[uid]) CACHE[uid] = { element: element };
return CACHE[uid];
}
function destroyRegistryForElement(element, uid) {
if (Object.isUndefined(uid))
uid = getUniqueElementID(element);
delete GLOBAL.Event.cache[uid];
}
function register(element, eventName, handler) {
var registry = getRegistryForElement(element);
if (!registry[eventName]) registry[eventName] = [];
var entries = registry[eventName];
var i = entries.length;
while (i--)
if (entries[i].handler === handler) return null;
var uid = getUniqueElementID(element);
var responder = GLOBAL.Event._createResponder(uid, eventName, handler);
var entry = {
responder: responder,
handler: handler
};
entries.push(entry);
return entry;
}
function unregister(element, eventName, handler) {
var registry = getRegistryForElement(element);
var entries = registry[eventName];
if (!entries) return;
var i = entries.length, entry;
while (i--) {
if (entries[i].handler === handler) {
entry = entries[i];
break;
}
}
if (!entry) return;
var index = entries.indexOf(entry);
entries.splice(index, 1);
return entry;
}
function observe(element, eventName, handler) {
element = $(element);
var entry = register(element, eventName, handler);
if (entry === null) return element;
var responder = entry.responder;
if (isCustomEvent(eventName))
observeCustomEvent(element, eventName, responder);
else
observeStandardEvent(element, eventName, responder);
return element;
}
function observeStandardEvent(element, eventName, responder) {
var actualEventName = getDOMEventName(eventName);
if (element.addEventListener) {
element.addEventListener(actualEventName, responder, false);
} else {
element.attachEvent('on' + actualEventName, responder);
}
}
function observeCustomEvent(element, eventName, responder) {
if (element.addEventListener) {
element.addEventListener('dataavailable', responder, false);
} else {
element.attachEvent('ondataavailable', responder);
element.attachEvent('onlosecapture', responder);
}
}
function stopObserving(element, eventName, handler) {
element = $(element);
var handlerGiven = !Object.isUndefined(handler),
eventNameGiven = !Object.isUndefined(eventName);
if (!eventNameGiven && !handlerGiven) {
stopObservingElement(element);
return element;
}
if (!handlerGiven) {
stopObservingEventName(element, eventName);
return element;
}
var entry = unregister(element, eventName, handler);
if (!entry) return element;
removeEvent(element, eventName, entry.responder);
return element;
}
function stopObservingStandardEvent(element, eventName, responder) {
var actualEventName = getDOMEventName(eventName);
if (element.removeEventListener) {
element.removeEventListener(actualEventName, responder, false);
} else {
element.detachEvent('on' + actualEventName, responder);
}
}
function stopObservingCustomEvent(element, eventName, responder) {
if (element.removeEventListener) {
element.removeEventListener('dataavailable', responder, false);
} else {
element.detachEvent('ondataavailable', responder);
element.detachEvent('onlosecapture', responder);
}
}
function stopObservingElement(element) {
var uid = getUniqueElementID(element),
registry = getRegistryForElement(element, uid);
destroyRegistryForElement(element, uid);
var entries, i;
for (var eventName in registry) {
if (eventName === 'element') continue;
entries = registry[eventName];
i = entries.length;
while (i--)
removeEvent(element, eventName, entries[i].responder);
}
}
function stopObservingEventName(element, eventName) {
var registry = getRegistryForElement(element);
var entries = registry[eventName];
if (!entries) return;
delete registry[eventName];
var i = entries.length;
while (i--)
removeEvent(element, eventName, entries[i].responder);
}
function removeEvent(element, eventName, handler) {
if (isCustomEvent(eventName))
stopObservingCustomEvent(element, eventName, handler);
else
stopObservingStandardEvent(element, eventName, handler);
}
function getFireTarget(element) {
if (element !== document) return element;
if (document.createEvent && !element.dispatchEvent)
return document.documentElement;
return element;
}
function fire(element, eventName, memo, bubble) {
element = getFireTarget($(element));
if (Object.isUndefined(bubble)) bubble = true;
memo = memo || {};
var event = fireEvent(element, eventName, memo, bubble);
return Event.extend(event);
}
function fireEvent_DOM(element, eventName, memo, bubble) {
var event = document.createEvent('HTMLEvents');
event.initEvent('dataavailable', bubble, true);
event.eventName = eventName;
event.memo = memo;
element.dispatchEvent(event);
return event;
}
function fireEvent_IE(element, eventName, memo, bubble) {
var event = document.createEventObject();
event.eventType = bubble ? 'ondataavailable' : 'onlosecapture';
event.eventName = eventName;
event.memo = memo;
element.fireEvent(event.eventType, event);
return event;
}
var fireEvent = document.createEvent ? fireEvent_DOM : fireEvent_IE;
Event.Handler = Class.create({
initialize: function(element, eventName, selector, callback) {
this.element = $(element);
this.eventName = eventName;
this.selector  = selector;
this.callback  = callback;
this.handler = this.handleEvent.bind(this);
},
start: function() {
Event.observe(this.element, this.eventName, this.handler);
return this;
},
stop: function() {
Event.stopObserving(this.element, this.eventName, this.handler);
return this;
},
handleEvent: function(event) {
var element = Event.findElement(event, this.selector);
if (element) this.callback.call(this.element, event, element);
}
});
function on(element, eventName, selector, callback) {
element = $(element);
if (Object.isFunction(selector) && Object.isUndefined(callback)) {
callback = selector, selector = null;
}
return new Event.Handler(element, eventName, selector, callback).start();
}
Object.extend(Event, Event.Methods);
Object.extend(Event, {
fire: fire,
observe: observe,
stopObserving: stopObserving,
on: on
});
Element.addMethods({
fire: fire,
observe: observe,
stopObserving: stopObserving,
on: on
});
Object.extend(document, {
fire: fire.methodize(),
observe: observe.methodize(),
stopObserving: stopObserving.methodize(),
on: on.methodize(),
loaded: false
});
if (GLOBAL.Event) Object.extend(window.Event, Event);
else GLOBAL.Event = Event;
GLOBAL.Event.cache = {};
function destroyCache_IE() {
GLOBAL.Event.cache = null;
}
if (window.attachEvent)
window.attachEvent('onunload', destroyCache_IE);
DIV = null;
docEl = null;
})(this);
(function(GLOBAL) {
var docEl = document.documentElement;
var MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED = 'onmouseenter' in docEl
&& 'onmouseleave' in docEl;
function isSimulatedMouseEnterLeaveEvent(eventName) {
return !MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED &&
(eventName === 'mouseenter' || eventName === 'mouseleave');
}
function createResponder(uid, eventName, handler) {
if (Event._isCustomEvent(eventName))
return createResponderForCustomEvent(uid, eventName, handler);
if (isSimulatedMouseEnterLeaveEvent(eventName))
return createMouseEnterLeaveResponder(uid, eventName, handler);
return function(event) {
var cacheEntry = Event.cache[uid];
var element = cacheEntry.element;
Event.extend(event, element);
handler.call(element, event);
};
}
function createResponderForCustomEvent(uid, eventName, handler) {
return function(event) {
var cacheEntry = Event.cache[uid], element = cacheEntry.element;
if (Object.isUndefined(event.eventName))
return false;
if (event.eventName !== eventName)
return false;
Event.extend(event, element);
handler.call(element, event);
};
}
function createMouseEnterLeaveResponder(uid, eventName, handler) {
return function(event) {
var cacheEntry = Event.cache[uid], element = cacheEntry.element;
Event.extend(event, element);
var parent = event.relatedTarget;
while (parent && parent !== element) {
try { parent = parent.parentNode; }
catch(e) { parent = element; }
}
if (parent === element) return;
handler.call(element, event);
}
}
GLOBAL.Event._createResponder = createResponder;
docEl = null;
})(this);
(function(GLOBAL) {
var TIMER;
function fireContentLoadedEvent() {
if (document.loaded) return;
if (TIMER) window.clearTimeout(TIMER);
document.loaded = true;
document.fire('dom:loaded');
}
function checkReadyState() {
if (document.readyState === 'complete') {
document.detachEvent('onreadystatechange', checkReadyState);
fireContentLoadedEvent();
}
}
function pollDoScroll() {
try {
document.documentElement.doScroll('left');
} catch (e) {
TIMER = pollDoScroll.defer();
return;
}
fireContentLoadedEvent();
}
if (document.addEventListener) {
document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
} else {
document.attachEvent('onreadystatechange', checkReadyState);
if (window == top) TIMER = pollDoScroll.defer();
}
Event.observe(window, 'load', fireContentLoadedEvent);
})(this);
Element.addMethods();
Hash.toQueryString = Object.toQueryString;
var Toggle = { display: Element.toggle };
Element.Methods.childOf = Element.Methods.descendantOf;
var Insertion = {
Before: function(element, content) {
return Element.insert(element, {before:content});
},
Top: function(element, content) {
return Element.insert(element, {top:content});
},
Bottom: function(element, content) {
return Element.insert(element, {bottom:content});
},
After: function(element, content) {
return Element.insert(element, {after:content});
}
};
var $continue = new Error('"throw $continue" is deprecated, use "return" instead');
var Position = {
includeScrollOffsets: false,
prepare: function() {
this.deltaX =  window.pageXOffset
|| document.documentElement.scrollLeft
|| document.body.scrollLeft
|| 0;
this.deltaY =  window.pageYOffset
|| document.documentElement.scrollTop
|| document.body.scrollTop
|| 0;
},
within: function(element, x, y) {
if (this.includeScrollOffsets)
return this.withinIncludingScrolloffsets(element, x, y);
this.xcomp = x;
this.ycomp = y;
this.offset = Element.cumulativeOffset(element);
return (y >= this.offset[1] &&
y <  this.offset[1] + element.offsetHeight &&
x >= this.offset[0] &&
x <  this.offset[0] + element.offsetWidth);
},
withinIncludingScrolloffsets: function(element, x, y) {
var offsetcache = Element.cumulativeScrollOffset(element);
this.xcomp = x + offsetcache[0] - this.deltaX;
this.ycomp = y + offsetcache[1] - this.deltaY;
this.offset = Element.cumulativeOffset(element);
return (this.ycomp >= this.offset[1] &&
this.ycomp <  this.offset[1] + element.offsetHeight &&
this.xcomp >= this.offset[0] &&
this.xcomp <  this.offset[0] + element.offsetWidth);
},
overlap: function(mode, element) {
if (!mode) return 0;
if (mode == 'vertical')
return ((this.offset[1] + element.offsetHeight) - this.ycomp) /
element.offsetHeight;
if (mode == 'horizontal')
return ((this.offset[0] + element.offsetWidth) - this.xcomp) /
element.offsetWidth;
},
cumulativeOffset: Element.Methods.cumulativeOffset,
positionedOffset: Element.Methods.positionedOffset,
absolutize: function(element) {
Position.prepare();
return Element.absolutize(element);
},
relativize: function(element) {
Position.prepare();
return Element.relativize(element);
},
realOffset: Element.Methods.cumulativeScrollOffset,
offsetParent: Element.Methods.getOffsetParent,
page: Element.Methods.viewportOffset,
clone: function(source, target, options) {
options = options || { };
return Element.clonePosition(target, source, options);
}
};
if (!document.getElementsByClassName) document.getElementsByClassName = function(instanceMethods){
function iter(name) {
return name.blank() ? null : "[contains(concat(' ', @class, ' '), ' " + name + " ')]";
}
instanceMethods.getElementsByClassName = Prototype.BrowserFeatures.XPath ?
function(element, className) {
className = className.toString().strip();
var cond = /\s/.test(className) ? $w(className).map(iter).join('') : iter(className);
return cond ? document._getElementsByXPath('.//*' + cond, element) : [];
} : function(element, className) {
className = className.toString().strip();
var elements = [], classNames = (/\s/.test(className) ? $w(className) : null);
if (!classNames && !className) return elements;
var nodes = $(element).getElementsByTagName('*');
className = ' ' + className + ' ';
for (var i = 0, child, cn; child = nodes[i]; i++) {
if (child.className && (cn = ' ' + child.className + ' ') && (cn.include(className) ||
(classNames && classNames.all(function(name) {
return !name.toString().blank() && cn.include(' ' + name + ' ');
}))))
elements.push(Element.extend(child));
}
return elements;
};
return function(className, parentElement) {
return $(parentElement || document.body).getElementsByClassName(className);
};
}(Element.Methods);
Element.ClassNames = Class.create();
Element.ClassNames.prototype = {
initialize: function(element) {
this.element = $(element);
},
_each: function(iterator, context) {
this.element.className.split(/\s+/).select(function(name) {
return name.length > 0;
})._each(iterator, context);
},
set: function(className) {
this.element.className = className;
},
add: function(classNameToAdd) {
if (this.include(classNameToAdd)) return;
this.set($A(this).concat(classNameToAdd).join(' '));
},
remove: function(classNameToRemove) {
if (!this.include(classNameToRemove)) return;
this.set($A(this).without(classNameToRemove).join(' '));
},
toString: function() {
return $A(this).join(' ');
}
};
Object.extend(Element.ClassNames.prototype, Enumerable);
(function() {
window.Selector = Class.create({
initialize: function(expression) {
this.expression = expression.strip();
},
findElements: function(rootElement) {
return Prototype.Selector.select(this.expression, rootElement);
},
match: function(element) {
return Prototype.Selector.match(element, this.expression);
},
toString: function() {
return this.expression;
},
inspect: function() {
return "#<Selector: " + this.expression + ">";
}
});
Object.extend(Selector, {
matchElements: function(elements, expression) {
var match = Prototype.Selector.match,
results = [];
for (var i = 0, length = elements.length; i < length; i++) {
var element = elements[i];
if (match(element, expression)) {
results.push(Element.extend(element));
}
}
return results;
},
findElement: function(elements, expression, index) {
index = index || 0;
var matchIndex = 0, element;
for (var i = 0, length = elements.length; i < length; i++) {
element = elements[i];
if (Prototype.Selector.match(element, expression) && index === matchIndex++) {
return Element.extend(element);
}
}
},
findChildElements: function(element, expressions) {
var selector = expressions.toArray().join(', ');
return Prototype.Selector.select(selector, element || document);
}
});
})();
xpa_prototype_171_loaded=true;

var sURL = unescape(window.location.pathname);
var SCRIPTPATH="";
var dynListCount = [];
var dynListTrueCount = [];
var dynListType = [];
var dynListLine = [];
var dynListMax = [];
var curdate = new Date();
var JSLoader = false;
CS = {};
nobells = false;
createCookie("tz_offset",curdate.getTimezoneOffset() * -1,5000);
dbgObj = null;
var addthis_config = { data_track_clickback: true };
menus = new Hash();
var timeOutId;
var hideLoading = false;
function loading(state) {
if (!$('load_c') || hideLoading)
return;
if (state) {
timeOutId = setTimeout("$('load_c2').style.width='135px';$('loadmsg').update('still working ..');", 6500);
$('load_c2').style.width='105px';
$('loadmsg').update(" loading ..  ");
$('load_c').show();
} else {
clearTimeout(timeOutId);
$('load_c').hide();
}
}
function basicOnLoad() {
if ($('expf'))
$('expf').selectedIndex=0;
if ($('ap-format'))
$('ap-format').value='html';
}
function myalert(text,header,width,height) {
var conf =  {
width: width?width:"450px",
fixedcenter: true,
visible: false,
draggable: false,
close: true,
text: text,
constraintoviewport: true,
zIndex:9999,
buttons: [
{ text:"Ok",  handler:function() { d.hide() } }
]
};
if (height != null)
conf.height = height;
var d = new YAHOO.widget.SimpleDialog("myalert",conf);
if (header)
d.setHeader(header);
d.render("container");
d.show();
}
function faq(label) {
simpleReq("/help/faqentry.pl", {label:label,noheader:1}, function(r) {
myalert(r,"Help");
});
}
function terms() {
simpleReq("/help/faqentry.pl", {label:"terms",noheader:1}, function(r) {
myalert(r,"Terms & conditions",'500px','500px');
});
}
function injectCat(cId,elId,xtra) {
simpleReq("/utils/single_cat.pl", {cId:cId}, function(r) {
$(elId).update(r+xtra)
});
}
function injectEntry(eId,elId,xtra,compact) {
simpleReq("/utils/single_entry.pl", {eId:eId, compact:compact}, function(r) {
$(elId).update(r+xtra)
});
}
function showCategorizer(id) {
if (!checklogin()) {
alert("You need to log in to use this feature.");
return;
}
if (categorizerOn) return;
simpleReq("/utils/categorizer.pl",{eId:id}, function(r) {
if (r.match(/__NO_USER__/)) {
alert("You need to log in to use this feature.");
return;
}
createCookie('categorizerOn','1');
categorizerOn=true;
var c = $('categorizer-con');
c.show();
c.update(r);
});
}
function hideCategorizer() {
if (!categorizerOn) return;
categorizerOn=false;
$$('li.entrySelected').each( function (item) {
item.removeClassName('entrySelected');
});
$$('li.entryOver').each( function (item) {
item.removeClassName('entryOver');
});
$('categorizer-con').hide();
catPicker.destroy();
catPicker = null;
clearInterval(intervalId);
}
var categorizerOn = false;
var currentEntry = null;
var catPicker = null;
function ee(ev,id) {
if (nobells || !categorizerOn)
return;
var el = $('e'+id);
if (!el)
return;
if (ev == 'out') {
el.removeClassName('entryOver');
return;
}
if (ev == 'over') {
el.addClassName('entryOver');
return;
}
if (ev == 'click' && catPicker) {
catPicker.selectEntry(id);
return;
}
}
function submitEntry(params) {
if (params) {
params = params + "&force=1";
} else {
params = 'step=1';
}
GB_showCenter('New entry','/edit.pl?embed=1&'+params,504,640) ;
}
function achOver(id) {
var e = $(id);
e.addClassName('acBlockHHover');
}
function achOut(id) {
var e = $(id);
e.removeClassName('acBlockHHover');
}
currentBlock='basic';
function achClick(id) {
var e = $(id);
if (!e) alert('oops');
if (!currentBlock) currentBlock= 'basic';
$(currentBlock+'C').hide();
$(currentBlock).removeClassName('acBlockHact');
$(currentBlock).addClassName('acBlockHna');
$(currentBlock+'I').innerHTML = '[+]';
$(id).removeClassName('acBlockHna');
$(id).addClassName('acBlockHact');
$(id+'I').innerHTML = '[--]';
$(id+'C').show();
currentBlock=id;
}
function DupPicker(eId) {
var _this = this;
var cancel;
var submit;
var diag = new YAHOO.widget.Dialog('container',
{
height: "504px",
draggable: false,
fixedcenter : true,
modal:true,
visible : false,
close: true,
constraintoviewport : true
}
);
var cancel = function() {
diag.hide();
}
var submit = function() {
}
diag.cfg.queueProperty("buttons",
[
{ text:"Submit",  handler:submit },
{ text:"Cancel",  handler:cancel }
]
);
diag.cancel = cancel;
diag.setHeader("Mark duplicates");
diag.setBody("hello");
diag.setFooter("hello");
diag.render();
$('container').show();
diag.show();
}
function markDups(eId) {
var dp = new DupPicker(eId);
}
function Editor(params) {
var _this = this;
currentBlock = 'basic';
this.step = params.step;
this.eId = params.id;
this.submitted = false;
this.refreshAfter = params.refreshAfter;
var width = getWidth(640) + "px"
var editor = new YAHOO.widget.Dialog('editor-con',
{
width : width,
height: "504px",
draggable: false,
modal:true,
visible : true,
close: true,
zIndex: 500,
constraintoviewport : true,
}
);
$j('#main-nav').addClass('collapse').removeClass('in');
$('editor-con').show();
editor.cancel = function() {
_this.submitted=false;
if (_this.eId && checklogin() && window.catPicker != undefined)
ppAct("unlockEntry",{eId:_this.eId});
if (window.catPicker != undefined) {
catPicker.destroy();
}
editor.destroy();
if ($('editor_con-mask'))
$('editor_con-mask').remove();
var el = new Element("div");
el.id='editor-con';
el.hide();
$('outer-con').insert(el);
el.update("<div class='hd'></div><div id='editor-bd' class='bd'></div><div class='ft'></div>");
ed = null;
window.catPicker = null;
}
this.cancel = function() { editor.cancel() }
this.submit = function() {
if (_this.submitted) {
return;
}
if (_this.step != 1) {
appendSelectedProfilesToForm('authors', $('myform'));
appendSelectedProfilesToForm('ant_editors', $('myform'));
if (!_this.eId) {
var cats = $$('#selectedcats .catcap');
if (cats.length <= 0) {
if (!confirm("You have not put this entry under any categories.\n This will make it hard to find. Are you sure you want to continue?")) {
return false;
}
}
if ($F('mustArchive') && $('fileActionNone').checked && !$F('inArchive') ) {
if (!confirm("You must submit a copy to the archive to add a work to PhilArchive. If you continue, we will accept your submission, but it will go to PhilPapers only.")) { return false };
} else if ($F('typeofwork') == 'article' && $('fileActionNone').checked && !$F('inArchive')) {
var txt = "You have not uploaded a copy of this article to PhilArchive. ";
txt += "While optional, archiving your articles on PhilArchive will enable us to better index them, and more people will read them. ";
if (archivingIsOK) {
txt += "According to the Sherpa/ROMEO database, the publisher of this journal allows archiving on PhilPapers. ";
} else {
txt += "Most publishers allow self-archiving by authors (see our FAQ for details). ";
}
txt += "\n\nAre you sure you want to continue without uploading a copy of the paper (you can always do this later)?";
if (!confirm(txt)) {
return false;
}
}
}
}
if (_this.step != 1 && !_this.checkUpload($('upsession'))) {
return false;
} else {
_this.submitted=true;
submitAjax($('myform'), true);
return false;
}
};
this.checkUpload = function() {
if ($('fileActionReplace').checked ){
if( $('uploadInProgress').value == '1') {
alert('Your upload has not completed yet. Cannot submit now.');
return false;
}
if( $('upsession').value.length == 0 ){
alert('You forgot to attach a file');
return false;
}
if( ! $('upsession').value.match(/\.(pdf|doc|docx|ps|rtf|txt)$/i) ){
alert('Invalid file format. The only valid extensions are pdf, doc, docx, rtf, ps (postscript) and txt. [' + $('upsession').value + ']' );
return false;
}
};
return true;
}
var submitAjax = function(form, putBack) {
if ($('ed-showCategories') && $('ap-showCategories')) $('ed-showCategories').value=$('ap-showCategories').value;
$('submitbtn').value = 'Loading...';
loading(1);
form.request({
onSuccess: function(r, putBack) {
_this.submitted=false;
loading(0);
$('submitbtn').value = 'Submit';
if (checkError(r)) {
} else {
if (_this.step) {
_this.step = false;
$('editor-bd').update(r.responseText);
} else {
if (!_this.eId) {
alert("Your submission was successful.");
}
if ($('e' + _this.eId))
$('e' + _this.eId).replace(r.responseText);
if (_this.refreshAfter) {
refresh();
}
_this.cancel();
}
}
adjustEditorPosition();
},
onFailure: function(r) {
_this.submitted=false;
loading(0);
$('submitbtn').value = 'Submit';
alert('error:' + r.responseText);
}
});
};
function load(finished) {
simpleReq("/edit.pl",params, function(r) {
finished(r);
});
}
this.reload = function() {
load(function(r) {
$('editor-bd').update(r);
});
}
load(function(r) {
editor.setHeader("Edit / submit entry");
editor.render();
var body = $('editor-bd');
body.update(r);
if ($('edcaption') && $F('edcaption')) {
editor.setHeader($F('edcaption'));
}
adjustPub();
adjustPubIn();
editor.show();
if (params.panel) {
YAHOO.util.Event.onAvailable(params.panel, function() { achClick(params.panel) }, editor);
}
adjustEditorPosition();
});
}
function adjustEditorPosition() {
var editor = document.getElementById('editor-con_c');
var container = document.getElementById('contentContainer');
if (editor && container) {
editor.style.marginLeft = (getElementContentWidth(container)/2) - (getElementContentWidth(editor)/2) + 'px';
editor.style.top = container.offsetTop + 'px';
}
}
var ed;
var edCatPicker;
function editEntry2(id,panel) { openEditor(id,0,1,panel); }
function submitEntry2() { openEditor(0,1,1); }
function openEditor(id,step,embed,panel) {
customEditor({step:step,id:id,embed:embed,panel:panel});
}
function customEditor(params) {
if (categorizerOn) {
if (!confirm("Are you sure you want to open the editor? Doing so will close the categorization panel."))
return;
}
hideCategorizer();
if (ed)
ed.cancel();
ed = new Editor(params);
}
function sortThreads(field) {
$('tSort').value = field;
$('tsum').submit();
}
var rtocState;
function toggleRTOC(p) {
if (rtocState == undefined)
rtocState = new Hash();
var tel = $('t-'+p.dId);
if (tel.hasClassName('toggler-on')) {
$('ct-'+p.dId).hide();
rtocState.set(p.dId,'hide');
tel.addClassName('toggler-off');
tel.removeClassName('toggler-on');
} else if (tel.hasClassName('toggler-off')) {
var s = rtocState.get(p.dId);
if (s) {
$('ct-'+p.dId).show();
} else {
p.noheader = 1;
p.format='json';
simpleReq("/browse/rtoc_c.html",p,function(r) {
$('ct-'+p.dId).innerHTML = r;
});
rtocState.set(p.dId,1);
}
tel.addClassName('toggler-on');
tel.removeClassName('toggler-off');
}
}
function boxChecked(id) {
var el = $(id);
if (!el)
return;
if (el.hasClassName('acbox-on')) {
return 1;
} else {
return 0;
}
}
function toggleBox(id) {
var el = $(id);
if (!el)
return;
if (el.hasClassName('acbox-on')) {
el.removeClassName('acbox-on');
el.addClassName('acbox-off');
} else {
el.removeClassName('acbox-off');
el.addClassName('acbox-on');
}
}
function showExports(id) {
var anchor = $('la-'+id);
var mid = 'lMenu-' + id;
if (menus.get(mid)) {
menus.get(mid).show();
} else {
var lMenu = new YAHOO.widget.Menu(mid,{position:"dynamic", context:[anchor,"tl","bl"]});
lMenu.addItems([
{ text:"<span style='color:black;font-weight:bold;font-size:12px'>Choose a format:</span>",disabled:true },
{ text:"Formatted text (new window)", onclick: { fn: function() { exportEntry(id,'htm','formatted text') } } },
{ text:"Plain text (new window)", onclick: { fn: function() { exportEntry(id,'txt','plain text') } } },
{ text:"BibTeX (new window)", onclick: { fn: function() { exportEntry(id,'bib','BibTeX') } } },
{ text:"Plain text (copy to clipboard)", onclick: { fn: function() { exportEntry(id,'txt','plain text', true) } } },
{ text:"BibTeX (copy to clipboard)", onclick: { fn: function() { exportEntry(id,'bib','BibTeX', true) } } },
{ text:"Zotero", url:"/formats/item.zot?id=" + id},
{ text:"EndNote", url:"/formats/item.enw?id=" + id},
{ text:"Reference Manager", url:"/formats/item.ris?id=" + id},
{ text:"RefWorks", onclick: { fn: function() { refWorks(id) } } }
]
);
lMenu.render(anchor);
lMenu.show();
menus.set(mid,lMenu);
}
}
var wCount = new Array();
wCount['alert'] = 1;
wCount['bib'] = 1;
wCount['css'] = 1;
wCount['data'] = 1;
wCount['embed'] = 1;
wCount['enw'] = 1;
wCount['export'] = 1;
wCount['htm'] = 1;
wCount['html'] = 1;
wCount['js'] = 1;
wCount['json'] = 1;
wCount['ris'] = 1;
wCount['rss'] = 1;
wCount['txt'] = 1;
wCount['xml'] = 1;
wCount['zot'] = 1;
function copyToClipboard(txt){
try {
var textArea = document.createElement("textarea");
textArea.value = txt;
document.body.appendChild(textArea);
textArea.select();
document.execCommand("Copy");
textArea.remove();
} catch (err) {
console.log(err);
}
}
function toClipBoard(id,formatName,status_id) {
copyToClipboard(document.getElementById(id).value);
if (status_id) {
var actual_el = $j('#'+status_id);
console.log(actual_el);
actual_el.text(formatName + " copied to clipboard");
actual_el.show();
actual_el.fadeOut(10000);
}
}
function exportEntry(id,format,formatName, copyCitationToClipboard, statusElement) {
var wURL = "https://philpapers.org/export.html?expformat=" + format + "&eIds=" + id + "&formatName="+escape(formatName);
if (copyCitationToClipboard) {
console.log(statusElement);
simpleReq('/item.pl','id='+id+'&format='+format, function(r) {
copyToClipboard(r)
if (statusElement) {
var actual_el = $j('#'+statusElement);
console.log(actual_el);
actual_el.text(formatName + " copied to clipboard");
actual_el.show();
actual_el.fadeOut(10000);
}
});
return;
}
var exportWindow = openExportWindow(format, formatName);
while (wCount[format] < 10) {
try {
var loc = exportWindow.location.toString();
if (!loc.match(/^https:\/\/philpapers.org\/export/)) {
if (loc.match(/^https:\/\/philpapers.org/)) { throw("wrong window"); }
exportWindow.location = wURL;
} else {
addExport(exportWindow,id,format);
}
break;
} catch (e) {
wCount[format]++;
exportWindow = openExportWindow(format, formatName);
}
}
$('msg-'+id).innerHTML = "Entry exported in new window.";
}
function openExportWindow(format,formatName) {
return window.open('',"PhilPapers_"+format+wCount[format]);// (" +formatName + ") " + "" + wCount[format] + "");
}
function addExport(w,id,format) {
var location = w.location;
var queryParams = new URLSearchParams(w.location.search);
var eIds = queryParams.get('eIds');
queryParams.set('eIds', eIds + ',' + id);
w.history.replaceState(null, null, '?'+queryParams.toString());
w.location.reload();
return;
el.update("<pre class='export'>something else</pre>");
var container = w.$('exported');
alert(container);
try {
container.insert(el,{position:"bottom"});
} catch(e) {
alert(e.message);
}
}
function updateToReadPPL(el, id, serial) {
var msg;
var cmd;
if (el.hasClassName('acbox-off')) {
cmd = 'addToReadingList';
msg = 'added to';
} else {
cmd = 'removeFromReadingList';
msg = 'removed from';
}
checkPPLLogin(function() {
$j.ajax({
url: 'https://philpeople.org/external/toggle_bookmark.json',
data: {
source_id: serial,
source_type: 'Philpapers::Publication'
},
method: 'POST',
success: function(response) {
$('msg-' + id).update().insert('Entry ' + msg + ' <a href="/profile/myreadings.html">your reading list</a>.');
}
});
}, function() {
window.location ='https://philpeople.org/login?return='+escape(window.location);
return;
})
return true;
}
function updateToRead(el,id) {
var msg;
var cmd;
if (!checklogin()) {
window.location='/inoff.html?feature=1&after='+escape(window.location);
return;
}
if (el.hasClassName('acbox-off')) {
cmd = 'addToReadingList';
msg = 'added to';
} else {
cmd = 'removeFromReadingList';
msg = 'removed from';
}
var w = window;
ppAct(cmd, {eId:id} , function(r) {
$('msg-' + id).update().insert('Entry ' + msg + ' <a href="/profile/myreadings.html">your reading list</a>.');
});
return true;
}
function renderFollowX( eId ){
var conf =  {
width: "450px",
height: "400px",
fixedcenter: true,
visible: false,
draggable: false,
close: true,
text: 'aaaaaaa',
constraintoviewport: true,
zIndex:9999
};
var d = new YAHOO.widget.SimpleDialog("followX",conf);
d.setHeader("Follow authors");
d.render("container");
new Ajax.Request('/followx.pl',
{
method:'get',
parameters: { eId: eId },
onSuccess: function(transport){
var response = transport.responseText || "no record";
d.setBody( response );
alert( $('followXform').followXsubmit.onClick );
},
onFailure: function(){ alert('Something went wrong...') }
});
d.show();
}
function updateFollowX(id) {
if (!checklogin()) {
window.location='/inoff.html?feature=1&after='+escape(window.location);
return;
}
ppAct('updateFollowX', {eId:id} , function(msg) {
if ($('msg-'+id)) {
$('msg-' + id).update().insert( msg );
}
});
return true;
}
function followAuthorsOnPPL(entry_id) {
checkPPLLogin(function() {
$j.ajax({
url:'https://philpeople.org/external/follow_authors.json',
data: {
pp_id: entry_id
},
method: 'POST',
success: function(response) {
updateFollowMessageFromRelationships(response.relationships, entry_id);
}
});
}, function() {
window.location ='https://philpeople.org/login?return='+escape(window.location);
})
}
function updateFollowMessageFromRelationships(relationships, entry_id) {
var following = [];
relationships.forEach(function(relationship, index) {
following.push(relationship.followed_name + " (<span class='ll' onclick='removeFollowPPL("+relationship.followed_id+", \""+entry_id+"\")' id='rmfx-"+ index +"'>unfollow</span>)")
});
if ($('msg-'+entry_id)) {
$('msg-' + entry_id).update().insert( 'Following: ' + following.join(', ') + '.' );
}
}
function checkPPLLogin(logged_in_cb, not_logged_in_cb) {
$j.ajax({
url:'https://philpeople.org/external/current_user_profile.json',
complete: function(r) {
var response = r.responseJSON;
if (response && response.profile) {
console.log('success')
if (typeof logged_in_cb === 'function') {
logged_in_cb();
}
} else {
if (typeof not_logged_in_cb === 'function') {
not_logged_in_cb();
}
}
}
});
}
function updateFollowXUser(fuId){
if (!checklogin()) {
window.location='/inoff.html?feature=1&after='+escape(window.location);
return;
}
var followb = $( 'follow_button' );
var unfollowb = $( 'unfollow_button' );
var followx = $('followXUser_' + fuId);
ppAct('updateFollowXUser', {fuId:fuId} , function(msg) {
if( followx ){
followx.removeClassName('ll');
followx.update().insert( msg );
}
if( unfollowb ) { unfollowb.style.display = 'inline' }
if( followb ) { followb.style.display = 'none' }
}
);
return true;
}
function removeFollowPPL(followed_id, entry_id) {
checkPPLLogin(function() {
$j.ajax({
url:'https://philpeople.org/external/unfollow.json',
data: {
profile_id: followed_id,
pp_id: entry_id
},
method: 'DELETE',
success: function(response) {
updateFollowMessageFromRelationships(response.relationships, entry_id);
}
});
}, function() {
window.location='/inoff.html?feature=1&after='+escape(window.location);
})
}
function removeFollow(i, fid) {
if (!checklogin()) {
window.location='/inoff.html?feature=1&after='+escape(window.location);
return;
}
var ul = $( 'followUl_' + i );
var followb = $( 'follow_button' );
var unfollowb = $( 'unfollow_button' );
var rmfx = $('rmfx-' + i );
if (rmfx && !rmfx.hasClassName('ll'))
return
ppAct('removeFollow', {fid:fid} , function(r) {
if (rmfx) {
$('rmfx-' + i ).update().insert('removed');
$('rmfx-' + i ).removeClassName('ll');
}
if( ul ){
ul.innerHTML = '';
}
var el = $('follow-li-' + i);
if (el) { el.hide() }
if( unfollowb ) { unfollowb.style.display = 'none' }
if( followb ) { followb.style.display = 'inline' }
}
);
return true;
}
function toggleFollow(ul_no){
var ul_obj = $('followUl_' + ul_no );
var in_obj = $('followInput_' + ul_no );
var children = ul_obj.immediateDescendants();
for(var i=0;i<children.length;i++) {
var els = children[i].immediateDescendants();
if(els[0].tagName.toLowerCase()=='input' && els[0].type=='checkbox')
els[0].checked = in_obj.checked;
}
}
function toggleAliases(foId,i){
ppAct('markAliasesAsSeen', {foId:foId} , function(r) {
toggleVisibility(i);
}
);
}
function toggleVisibility(i){
var ul = $( 'followUl_' + i );
var plus = $( 'followPlus_' + i );
if( ul.style.display == 'none' ){
ul.style.display='inline';
plus.innerHTML = '--';
}
else{
ul.style.display='none';
plus.innerHTML = '+';
}
}
function updateFollowAlias(id,i) {
var checkbox = $( 'alias_' + i );
var ok;
if( checkbox.checked ){
ok = 1;
}
else{
ok = 0;
}
var change_indicator = $( 'change_indicator_' + i );
ppAct('updateFollowAlias', {foId: id, ok: ok} , function(r) {
change_indicator.innerHTML = change_indicator.innerHTML + ' <span class="subtle">saved</span>';
}
);
return true;
}
function updateFollowAlias1(id,i,j) {
var checkbox = $( 'alias_' + i + '-' + j );
var ok;
if( checkbox.checked ){
ok = 1;
}
else{
ok = 0;
}
var change_indicator = $( 'change_indicator_' + i + '-' + j );
ppAct('updateFollowAlias', {foId: id, ok: ok} , function(r) {
change_indicator.innerHTML = change_indicator.innerHTML + ' <span class="subtle">saved</span>';
}
);
return true;
}
function showActionMenu(id,currentList) {
var anchor = $('la-'+id);
var mid = 'lMenu-' + id;
if (menus.get(mid)) {
menus.get(mid).show();
} else {
var lMenu = new YAHOO.widget.Menu(mid,{position:"dynamic", context:[anchor,"tl","bl"]});
lMenu.addItems([
{ text:"<span style='color:black;font-weight:bold;font-size:12px'>Choose a format:</span>",disabled:true },
{ text:"Formatted text", onclick: { fn: function() { exportEntry(id,'htm','formatted text') } } },
{ text:"Plain text", onclick: { fn: function() { exportEntry(id,'txt','plain text') } } },
{ text:"BibTeX", onclick: { fn: function() { exportEntry(id,'bib','BibTeX') } } },
{ text:"Zotero", url:"/formats/item.zot?id=" + id},
{ text:"EndNote", url:"/formats/item.enw?id=" + id},
{ text:"Reference Manager", url:"/formats/item.ris?id=" + id}
]
);
lMenu.render(anchor);
lMenu.show();
menus.set(mid,lMenu);
}
}
function showLists(id,currentList) {
ppAct("getListsForEntry", { eId: id, cList:currentList}, function(r) {
showListsPostReq(id, r.evalJSON(), currentList);
});
}
function showListsPostReq(id, res, currentList) {
var anchor = $('ml-'+id);
var mid = 'fiMenu-' + id;
var lists = res.user || [];
var userHasPPLProfile = res.profile;
if (menus.get(mid)) {
menus.get(mid).show();
} else {
var inner = new Element("div");
inner.addClassName("yui-skin-sam");
inner.addClassName("ldiv");
anchor.update();
anchor.appendChild(inner);
var lMenu = new YAHOO.widget.Menu(mid, {
minscrollheight:250,
position:"dynamic",
keepopen:true,
clicktohide:true,
context:[inner,"tl","bl"],
maxheight:400
});
if (res.edited) {
lMenu.addItem({
text: "<span style='font-weight:bold; color:black; font-size:12px'>Add to edited category:</span>",
disabled:true
});
for (var x=0; x < res.edited.length; x++) {
var m = __buildm(res.edited[x],id);
lMenu.addItems([m]);
}
}
lMenu.addItem({
text: "<span style='font-weight:bold; color:black; font-size:12px'>Add to a reading list:</span>",
disabled:true
});
for(var i=0; i < lists.length; i++) {
var lId = lists[i].id;
var name = lists[i].name;
var type = lists[i].type;
var fromSearch = (lId == currentList && lists[i].included != 1);
if (fromSearch)
name += "<br> <span style='color:#666'>(currently included through linked search)</span>";
lMenu.addItem({
text: name,
checked: lists[i].included == 1,
onclick: { fn: function(evn,ev, p) {
if (this.cfg.getProperty("checked")) {
this.cfg.setProperty("checked", false);
if (type == 'xPapers::PhilPeople::ReadingList') {
removeEntryFromReadingList(id, p)
} else {
removeFromUsersList(id,p);
}
} else {
this.cfg.setProperty("checked", true);
if (type == 'xPapers::PhilPeople::ReadingList') {
addEntryToReadingList(id, p)
} else {
addToUsersList(id,p);
}
}
if (fromSearch) {
lMenu.destroy();
menus.unset(mid);
}
}, obj: lId
}
});
}
if (lists.length==0) {
lMenu.addItem({
text: (currentList > 0) ?
"<font color='black'>You do not have other personal categories.</font>" :
"<font color='black'>You do not have any personal categories.</font>",
disabled: true
});
}
var ft = new YAHOO.widget.MenuItem("<input type='button' class='menuButton' value='Add to a new reading list' onclick='addToNewCat(\""+id+"\", "+userHasPPLProfile+")'>");
lMenu.addItem(ft);
lMenu.subscribe("click",
function(eventName, objects) {
}
);
lMenu.render(anchor);
lMenu.show();
menus.set(mid,lMenu);
}
}
function __buildm(cat,eId) {
var i = {
text: "<span class='edited'>" + cat.name + "</span>",
onclick: {
fn: function(evn,ev,p) { ppAct("addToList",{eId:eId,lId:cat.id}) }
}
};
if (cat.c) {
i.submenu = {
id:cat.id+eId+"edsm",
itemdata:[]
}
for (var x =0; x < cat.c.length; x++) {
i.submenu.itemdata.push( __buildm(cat.c[x],eId) );
}
}
return i;
}
function addToNewCat(eId, userHasPPLProfile) {
var name = prompt("Name of new personal category");
if (!name) return;
createListM(name, eId, userHasPPLProfile);
}
function createListM(name, eId, userHasPPLProfile) {
createList(name,eId, function() {
menus.each(function(item) {
item.value.destroy();
});
menus = new Hash();
}, userHasPPLProfile);
}
function addEntryToReadingList(entryId, readingListId) {
$j.ajax({
url: 'https://philpeople.org/external/add_entry_to_reading_list.json',
data: {
entry_id: entryId,
reading_list_id: readingListId
},
method: 'POST',
});
}
function removeEntryFromReadingList(entryId, readingListId) {
checkPPLLogin(function() {
$j.ajax({
url: 'https://philpeople.org/external/remove_entry_from_reading_list.json',
data: {
entry_id: entryId,
reading_list_id: readingListId
},
method: 'POST',
});
}, function() {
window.location ='https://philpeople.org/login?return='+escape(window.location);
return;
})
}
function addToUsersList(eId,lId) { ppAct("addToList", { "eId": eId, "lId": lId } ); }
function removeFromUsersList(eId,lId) { ppAct("removeFromList", { "eId": eId, "lId": lId }, function() {resizeRS(-1)} ); }
function removeFromList(lId,eId) {
if (confirm("Are you sure you want to delete this entry from this list?")) {
ppAct('removeFromList',{lId:lId,eId:eId}, function() { $('e'+eId).hide(); resizeRS(-1)});
}
}
function resizeRS(change) {
if ($('ap-start')) {
if (!parseInt($F('ap-start')))
$('ap-start').value=0;
$('ap-start').value=$F('ap-start')*1+change;
}
}
function goToPreviousPage() {
var increment = parseInt($F('ap-limit')) || 50;
resizeRS(increment * -1);
if (parseInt($F('ap-start')) < 0)
$('ap-start').value=0;
$('allparams').submit();
}
function goToNextPage() {
var increment = 50;
resizeRS(increment);
$('allparams').submit();
}
function showCats(id) {
var mid = 'catMenu-' + id;
if (menus.get(mid)) {
menus.get(mid).show();
} else {
ppAct("getCats", { cId: id }, function(r) {
showCatsPostReq(id, r.evalJSON());
});
}
}
function showCatsPostReq(id, itemdata) {
var anchor = $('catMenuAnchor-'+id);
var mid = 'catMenu-' + id;
var inner = new Element("div");
inner.addClassName("yui-skin-sam");
inner.addClassName("ldiv");
anchor.appendChild(inner);
var lMenu = new YAHOO.widget.Menu(mid, {
position:"dynamic",
context:[inner,"tl","tr"]
});
lMenu.addItems(itemdata);
lMenu.subscribe("click",
function(eventName, objects) {
}
);
lMenu.render(anchor);
lMenu.show();
menus.set(mid,lMenu);
}
function loadCat(cat) {
}
function resetList(id) {
if (confirm("Are you sure you want to remove all entries from this topic?"))
ppAct("resetList", { lId : id }, refresh);
}
function deleteList(id) {
if (confirm("Are you sure you want to delete this category?"))
ppAct("deleteList", { lId : id}, refresh);
}
function createList(name, eId, fn, userHasPPLProfile) {
if (userHasPPLProfile) {
return createReadingListPPL(name, eId, fn);
}
if (name) {
ppAct("createList", { name: name, eId : eId }, fn)
return 1;
} else {
alert("You must enter a name first");
return 0;
}
}
function createReadingListPPL(name, eId, fn) {
checkPPLLogin(function() {
$j.ajax({
url: 'https://philpeople.org/external/create_reading_list.json',
data: {
entry_id: eId,
name: name
},
method: 'POST',
success: function(response) {
fn();
}
});
}, function() {
window.location ='https://philpeople.org/login?return='+escape(window.location);
return;
})
}
function renameList(id, name, fn) {
if (name)
ppAct("renameList", { name: name, lId : id }, fn)
else
alert("You must enter a name first");
}
(function(){
var id = 0, head = $$('head')[0], global = this;
global.getJSON = function(url, callback) {
var script = document.createElement('script'), token = '__jsonp' + id;
global[token] = callback;
script.src = url.replace(/\?(&|$)/, '__jsonp' + id + '$1');
script.onload = function() {
script.remove();
script = null;
delete global[token];
};
head.appendChild(script);
id++;
}
})();
var oldTitleHTML = new Object();
var oldAbstractHTML = new Object();
function translateEntry(eid) {
var url = document.URL;
if (url.indexOf("rec") >= 0) {
var titleElement = $$('.recTitle')[0].select('a')[0];
if (typeof titleElement == 'undefined') {
titleElement = $$('.recTitle')[0];
}
var abstractElement = $('abstractElement');
} else {
var entry = $('e'+eid);
var titleElement = entry.select('span.articleTitle')[0];
var abstractElement = entry.select('div.abstract')[0];
}
var translated = titleElement.hasClassName('translated');
if (translated) {
titleElement.update(oldTitleHTML[eid]);
if (typeof abstractElement != 'undefined' && oldAbstractHTML[eid]) { abstractElement.update(oldAbstractHTML[eid]); }
$('tr-'+eid).update('Translate to English');
} else {
ppAct("translate",{eId:eid}, function(r) {
var title = r.evalJSON().title;
var author_abstract = r.evalJSON().author_abstract;
var key = "trnsl.1.1.20130919T181219Z.dd47fd1a25fb47ae.a1171ddb8cb2e4e13432c3d37267468d2fc14d1e";
var language= "en";
var url_title = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=" + key + "&lang=" + language + "&text=" + encodeURIComponent(title) + "&callback=?";
var url_abstract = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=" + key + "&lang=" + language +  "&text=" + encodeURIComponent(author_abstract) + "&callback=?";
getJSON(url_title, function(data){
oldTitleHTML[eid] = titleElement.innerHTML;
titleElement.update(data.text[0]);
$('tr-'+eid).update('Revert to original');
});
getJSON(url_abstract, function(data){
if (typeof abstractElement != 'undefined' && author_abstract) {
oldAbstractHTML[eid] = abstractElement.innerHTML;
abstractElement.update(data.text[0]);
}
});
});
}
titleElement.toggleClassName('translated');
}
function translate(text) {
}
function checklogin() {
return readCookie('id');
}
function trackclick(eid,url,neww) {
var w = window;
new Ajax.Request(
"/ping.pl", {
method: 'get',
asynchronous: true,
parameters: {"eId": eid},
onSuccess: function() {},
onFailure: function() {}
});
return true;
}
function refreshWith(form) { form.submit(); }
function submitTo(form,url) {
window.location = url + "?" + form.serialize();
}
function intervalSync() {
var val = true;
if ($F('in_j') == 'on' || $F('in_l') == 'on') {
val = false;
}
for (var i=0; i<= 5; i++) {
if ( $("jlist"+i) == null) break;
$("jlist"+i).disabled = val;
}
}
function refresh() {
if (window.location.reload) window.location.reload( true );
else if (window.location.replace) window.location.replace( sURL );
else window.location.href = sURL;
}
function preSubmit(sid) {
if (!checkUpload(sid)) {
return false;
} else {
return true;
};
}
function checkUpload(sid) {
var f = $('upframe');
var doc = f.contentDocument;
if (doc == undefined || doc == null)
doc = f.contentWindow.document;
if ($('fileActionReplace').checked && doc.getElementById("prog"+sid).innerHTML != 'upload complete') {
alert('You forgot to attach a file or your upload has not completed yet. Cannot submit.'); return false;
};
return true;
}
var pf = new Hash();
pf.set('school',false);
pf.set('date',false);
pf.set('publisher',false);
pf.set('source',false);
pf.set('source_inf',false);
pf.set('journal_inf',false);
pf.set('chapter_inf',false);
pf.set('ant_publisher',false);
pf.set('publisher_city',false);
pf.set('pages',false);
pf.set('reviewed_title',false);
function adjustPub() {
if (!$('typeofwork'))
return;
resetPub();
if ($F('typeofwork') == 'dissertation') {
pf.set('school',true);
pf.set('date',true);
} else if ($F('pub_status') == 'unknown' || $F('pub_status') == 'unpublished' || $F('pub_status') == 'draft') {
checkReview();
} else  {
if ($F('pub_status') == 'published') {
pf.set('date',true);
}
if ($F('typeofwork') == 'book') {
pf.set('publisher',true);
pf.set('publisher_city',true);
} else if ($F('typeofwork') == 'article' || $F('typeofwork') == 'book review') {
pf.set('pages',true);
if ($F('pub_in') == 'journal' || $F('typeofwork') == 'book review') {
pf.set('journal_inf',true);
if ($F('pub_status') == 'published') {
} else {
pf.set('pages',false);
}
checkReview();
} else  {
pf.set('source_inf',true);
pf.set('source',true);
pf.set('chapter_inf',true);
pf.set('ant_publisher',true);
pf.set('publisher_city',true);
}
}
}
showSelected(pf);
}
function checkReview() {
if ($F('typeofwork') == 'book review') {
pf.set("reviewed_title",true);
$('pub_in').value = 'journal';
}
}
function resetPub() {
pf.each(function(n) {
pf.set(n.key,false);
});
}
function showSelected(pf) {
pf.each(function(n) {
if (pf.get(n.key)) {
$(n.key).show();
} else if ($(n.key)) {
$(n.key).hide();
}
});
}
function showRow(r) {
r.style.display='table-row';
}
function adjustPubIn() {
if (!$('typeofwork'))
return;
if ( $F('typeofwork') == 'article' &&
$F('pub_status') != 'unpublished' && $F('pub_status') != 'unknown' && $F('pub_status') != 'draft' ) {
$('pub_in_inf').show();
} else {
$('pub_in_inf').hide();
}
}
function addToList(id,esc) {
if (dynListTrueCount[id] >= dynListMax[id]) {
alert('Maximum reached');
return;
}
var bef = 'c_' + id + '_' + dynListCount[id];
var nid = dynListCount[id] + 1;
var el = new Element(dynListType[id],{id:"c_" + id + "_" + nid});
var txt = dynListLine[id];
txt = txt.replace(/_COUNT_/g,nid);
if (esc) {
txt = myUnescape(txt);
}
el.update(txt);
var bel;
if ($(bef)) {
bel = $(bef);
} else {
bel = $('c_' + id + '_start');
}
bel.ancestors()[0].insert(el,{position:'bottom'});
dynListCount[id]++;
dynListTrueCount[id]++;
syncCount(id);
return nid;
}
function myUnescape(txt) {
txt = txt.unescapeHTML();
txt = txt.replace(/&#34;|&quot;/g,'"');
txt = txt.replace(/&#39;|&apos;/g,"'");
return txt;
}
function deleteFromList(id, no) {
$("c_" + id + "_" + no).remove();
if (no == dynListCount[id]) {
dynListCount[id]--;
} else {
}
dynListTrueCount[id]--;
syncCount(id);
}
function syncCount(id) {
$(id + '_max').value = dynListCount[id];
}
function menuContent() {
var m = document.getElementById('testc').value
alert(document.getElementById(m).innerHTML);
}
function selectItem(smIndex,startItem, endItem, itemIndex,selImg,deselImg) {
var m = dm_ext_getSubmenuParams(0,smIndex);
for (i=startItem; i<=endItem; i++) {
var p = dm_ext_getItemParams(0,smIndex,i);
var img = (i == itemIndex ? selImg : deselImg);
var text = p[2];
var re = new RegExp("("+selImg + ")|(" + deselImg+")");
text = text.replace(re,img);
var style_nb = p[3] ? '1' : '4';
var ni = [text,p[3],,,,,style_nb,style_nb,,];
dm_ext_changeItem(0,smIndex,i,ni);
}
}
function expandEntry(id,cid,script,params) {
params += "&eid=" + id;
params += "&cid=" + cid;
new Ajax.Request(script, {
request: 'get',
parameters: params,
onSuccess: function(r) {
$(cid + '_entry').innerHTML = r.responseText;
},
onFailure: function(r) {
alert(r.responseText);
}
});
}
function proxyConf(script,proxy) {
simpleReq(script, 'proxy='+escape(proxy)+'&uId='+readCookie('uId')+'&sid='+readCookie('sid'), function(r) {
createCookie('ez-server',r,2000);
refresh()
} );
}
function proxy(id,url,free) {
var o_url = url;
var ar = url.match(/(^\w{2,6}:\/\/|^)([^\/]+)(\/.*)/);
var prot = RegExp.$1;
var server = RegExp.$2;
var page = RegExp.$3
var w = window;
if (!prot) {
prot = "http://";
}
if(!free) {
url =  prot + prep(server) + page;
} else {
url = prot + server + page;
}
ppAct("go",{id:id,u:o_url,free:free}, function() {
window.location=url;
});
}
function prep(v) {
var c = readCookie('ez-server');
if (c.length > 0) {
if (v.match(/\.$/))
return v + c;
else
return v + "." + c;
} else {
return v;
}
}
function configure(url) {
hide('failure'); hide('success');
var ar = url.match(/(.*)\.jstor\.org\.([^\/]+\.[^\/]+)/);
if (ar == null) {
show('failure');
} else {
proxyConf('/proxyconf.pl',RegExp.$2);
show('success');
}
}
function writeOptions() {
document.write('<input onchange="save()" type="text" name="ezproxy" size=50 maxlength=255 value="')
document.write(readCookie('ez-server'));
document.write('">');
document.write('<input onchange="save()" type="checkbox" name="googleproxy" size=50 value="checked" maxlength=255 ')
document.write(readCookie('googleproxy'));
document.write('> use for Google Scholar (try this only if you cannot configure your library settings on Google\'s preference page).');
}
function show(id) {
if (document.getElementById(id)) { document.getElementById(id).style.display = "block"};
}
function hide(id) {
if (document.getElementById(id)) { document.getElementById(id).style.display = "none"};
}
function save() {
createCookie('ez-server',document.NavForm.ezproxy.value,20000);
createCookie('googleproxy',document.NavForm.googleproxy.value,20000);
}
function createCookie(name,value,days)
{
if (days) {
var date = new Date();
date.setTime(date.getTime()+(days*24*60*60*1000));
var expires = "; expires="+date.toGMTString();
}
else var expires = "";
document.cookie = name+"="+value+expires+"; path=/";
}
function readCookie(name)
{
var nameEQ = name + "=";
var ca = document.cookie.split(';');
for(var i=0;i < ca.length;i++)
{
var c = ca[i];
while (c.charAt(0)==' ') c = c.substring(1,c.length);
if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
}
return "";
}
function eraseCookie(name)
{
createCookie(name,"",-1);
}
function selectVal(o) {
var opt = o.options[o.selectedIndex];
return opt.name ? opt.name : opt.value;
}
function addEntry_DEP(catId,ed) {
var ed_el = "__new_entry_"+catId+"__";
var d = document.getElementById(ed_el);
ed += "&catId=" + catId + "&edit_element=" + ed_el;
new Ajax.Request(ed,{
method:'get',
onSuccess: function(r) {
d.innerHTML = r.responseText;
d.style.display="block";
}
});
}
function showRel(id,slot,relation,operand,params,script) {
params += "&noheader=1&opv=" + id + "&relation=" + escape(relation) + "&pos=" + operand;
new Ajax.Request(script, {
request: 'get',
parameters: params,
onSuccess: function(r) {
$(slot).innerHTML = r.responseText;
$(slot).style.display = "inline";
},
onFailure: function(r) {
}
});
}
function processSug(id,slot,script) {
params = "id=" + id;
new Ajax.Request(script, {
request: 'get',
parameters: params,
onSuccess: function(r) {
if (r.responseText.match(/Error/)) {
alert(r.responseText);
} else {
$(slot+'_entry').style.display = "none";
}
},
onFailure: function(r) {
alert('error:' + r.responseText);
}
});
}
function userDelete(id) {
var reason = prompt("Please tell us briefly what is wrong with this entry that we should remove it from PhilPapers' database.\n\n**IMPORTANT** \n\n1. A paper that has been deleted will never be re-harvested automatically. So if you delete one of your drafts you want to hide for now, you will have to add it back manually when you no longer want to hide it. The paper will not even re-appear when we harvest it from the publisher. That is the point of deletion after all.\n\n2. Is this a *duplicate*? Cancel this and mark it as duplicate using the appropriate option instead.","");
if (!reason) return;
ppAct("userDelete", {eId:id, reason: reason}, function() { alert("The entry has been flagged for deletion.")} );
}
function deleteEntry(id,base_url,slot,noconfirm) {
if (!noconfirm && !confirm("Are you sure you want to delete this entry?"))
return;
var src = base_url + "&id=" + id;
new Ajax.Request(src,{
method:'get',
onFailure: function(r) {
alert('Error while deleting entry:'+r.responseText);
}, onSuccess: function(r) {
if (r.responseText.match(/Error/)) {
alert(r.responseText);
} else {
document.getElementById(slot+"_entry").style.display="none";
}
}
});
}
function viewPub(script,pub) {
window.location = script + '?pubn=' . escape(pub);
}
function action(act, params, sf) { ppAct(act,params,sf) }
function ppAct(act, params, sf) {
if (params == undefined)
params = {};
params['c'] = act;
simpleReq('/action.pl',params,sf);
}
function admAct(act, params, sf) {
params['c'] = act;
simpleReq('/admin.pl',params,sf);
}
function question(question,params,sf) {
ppAct("question",{quest:question,qparams:params},sf);
}
function simpleReq(script, params, sf) {
loading(1);
new Ajax.Request(script, {
parameters: params,
method: 'get',
onSuccess: function(r) {
loading(0);
if (!checkError(r) && sf) {
try {
sf(r.responseText);
} catch (err) {
console.log(err);
}
}
},
onFailure: function(r) {
loading(0);
console.log(r.responseText);
alert('Server error:' + r.responseText);
}
});
}
function formReq(form, sf) {
form.request({
method:'post',
onSuccess: function(r) {
if (checkError(r)) {
} else {
sf(r.responseText);
}
},
onFailure: function(r) {
alert('error:' + r.responseText);
}
});
}
function checkError(resp) {
var re = new RegExp(/__PPError:\s*(.*)/g);
var err = re.exec(resp.responseText);
if (err) {
alert(RegExp.$1);
return true;
}
return false;
}
function req(script,params,slot,msg) {
params += "&slot="+slot;
new Ajax.Request(script, {
request: 'get',
parameters: params,
onSuccess: function(r) {
if (slot)
$(slot+'_entry').innerHTML = r.responseText;
if (msg) alert(msg);
},
onFailure: function(r) {
alert('error:' + r.responseText);
}
});
}
function editEntry(id,url) {
window.location = url + "&id=" + id + "&after=" + escape(window.location);
return;
}
function xnb(xpr) {
var r = /(\d\.\d)/(xpr);
if (r) {
return r[0];
}
var t = /^(\d)/(xpr);
if (t) {
return t[0];
}
return "";
}
function adjustSel(id, values, current) {
for (var i =0; i <= values.length; i++) {
if (values[i] == current) {
var el = $(id);
if ((el.hasClassName('tr'))) {
el.style.display="table-row";
} else {
el.style.display="inline";
}
return;
}
}
$(id).hide();
}
function adjust(current,idlist) {
}
function browsePart(num,sect) {
var link = "/root=" + num + "&listing_type=" + selectVal(myform.listing_type) + (sect ? "#"+sect : "");
window.location = link;
}
function selectVal(o,deleteAfter) {
var opt = o.options[o.selectedIndex];
var r = opt.name ? opt.name : opt.value;
if (deleteAfter) {
opt.value = null;
opt.name = null;
}
return r;
}
function URLEncode(sStr) {
return escape(sStr).replace(/\+/g, '%2B').replace(/\"/g,'%22').replace(/\'/g, '%27').replace(/\//g,'%2F');
}
function code(d,n) {
d = d.replace(/\+/g,'&#46;');
n = n.replace(/\+/g,'&#46;');
window.document.write("<span class='ns'>rmt</span>" + n + "<img src='/philpapers/raw/o.gif' align='absmiddle' alt='[at sign]'>" + d);
}
function jump_section(section, infile, outfile, number) {
var url = "bibmaker.pl?cmd=view&start=1&category=" + URLEncode(section) + "&in=" + URLEncode(infile) + "&out=" + URLEncode(outfile) + "&number=" + number;
window.location = url;
}
function links_edit(n) {
hide('links_view_' + n);
show('links_edit_' + n);
}
function links_ok(n) {
hide('links_edit_' + n);
show('links_view_' + n);
}
function linkCfg3(num,sect) {
window.location="/" + num + "/" + (sect ? "#"+sect : "");
}
function linkCfg2(num,sect) {
createCookie('availability','any');
createCookie('status','any');
window.location = "/" + num + (sect ? "#"+sect : "");
refresh();
}
function watchForSymbol(options) {
var stopAt;
if (!options || !options.symbol || !Object.isFunction(options.onSuccess)) {
throw "Missing required options";
}
options.onTimeout = options.onTimeout || Prototype.K;
options.timeout = options.timeout || 10;
stopAt = (new Date()).getTime() + (options.timeout * 1000);
new PeriodicalExecuter(function(pe) {
if (typeof window[options.symbol] != "undefined") {
options.onSuccess(options.symbol);
pe.stop();
}
else if ((new Date()).getTime() > stopAt) {
options.onTimeout(options.symbol);
pe.stop();
}
}, 0.50);
}
function onYUI(fn) {
watchForSymbol( { symbol:"xpa_yui_loaded", onSuccess: fn } );
}
function loadScript(scriptName,callback) {
var head;
var script;
head = $$('head')[0];
if (head) {
script = new Element('script', { type: 'text/javascript', src: '/dynamic-assets/philpapers/' + scriptName + '.js' });
head.appendChild(script);
watchForSymbol({symbol:'xpa_'+scriptName+'_loaded',onSuccess: function() {
if (callback)
callback();
}});
} else {
}
}
UTF8 = {
encode: function(s){
for(var c, i = -1, l = (s = s.split("")).length, o = String.fromCharCode; ++i < l;
s[i] = (c = s[i].charCodeAt(0)) >= 127 ? o(0xc0 | (c >>> 6)) + o(0x80 | (c & 0x3f)) : s[i]
);
return s.join("");
},
decode: function(s){
for(var a, b, i = -1, l = (s = s.split("")).length, o = String.fromCharCode, c = "charCodeAt"; ++i < l;
((a = s[i][c](0)) & 0x80) &&
(s[i] = (a & 0xfc) == 0xc0 && ((b = s[i + 1][c](0)) & 0xc0) == 0x80 ?
o(((a & 0x03) << 6) + (b & 0x3f)) : o(128), s[++i] = "")
);
return s.join("");
}
};
function setClassProperty(className, prop, val) {
var firstCSS = document.styleSheets[document.styleSheets.length-1];
if (document.all) {
var sel = '.'+className;
var css = prop+': '+val+';';
firstCSS.addRule(sel, css);
}
else {
var css = '.'+className+' { '+prop+': '+val+'; }';
try {
firstCSS.insertRule(css, firstCSS.cssRules.length);
} catch (e) {
alert('securty error with ' + css);
}
}
}
var archivingIsOK = false;
function checkSherpa(auto, journalName) {
journalName = journalName || $F('journal');
if (auto && !journalName) {
archivingIsOK = false;
$('editor-pub-policy').hide().update("");
return;
}
ppAct('checkSherpaRomeo',{journalTitle:journalName}, function(r) {
var archre = new RegExp("Can archive");
archivingIsOK = archre.test(r);
$('editor-pub-policy').show().update(r);
})
}
function reverseOne(dId) {
ppAct("reverseDiff",{dId:dId},function() {
$('diff-'+dId).hide();
});
}
function setSafe(uId) {
admAct("setSafe", {uId:uId}, function() {
console.log("set user as safe " + uId);
$j('.diff-user-' + uId).hide();
});
}
function reverseMerge(dId, mId) {
reverseOne(dId);
reverseOne(mId);
}
function checkOne(dId) {
ppAct("markSingleChecked",{dId:dId},function() {
$('diff-'+dId).hide();
});
}
function toggleByClass(className,state) {
if (state) {
$$('.'+className).each( function(it) { it.show() } );
} else {
$$('.'+className).each( function(it) { it.hide() } );
}
}
function editCite(from,to,direction) {
var elId = "cite-" + from + "-" + to;
simpleReq("/bits/cite_line.html", {noheader:1,fromId:from,toId:to,direction:direction,clMode:'edit'}, function(r) {
$(elId).update(r)
});
}
function refWorks(eId) {
var vendor = "PhilPapers";
var filter = "BibTeX";
var server = "https://philpapers.org";
var ourUrl = server + "/raw_export.txt?expformat=bib&eId="+ eId + "&formatName=BibTeX";
var url = "http://www.refworks.com/express/expressimport.asp?vendor=" + vendor + "&filter=" + filter + "&url=" + encodeURIComponent(ourUrl);
window.open(url, "RefWorksMain");
}
function markAsComplete(id) {
ppAct('markAsComplete',{'eId':id});
$('id').hide();
}
function attachJournalSelector(input, id_field) {
philwidget.load('journal_selector', {
'show_search': false,
'input' : input,
'id_field': id_field,
'selector': 'journal',
'hosts': {
'philpapers': 'https://philpapers.org/'
},
on_select: function(journal) {
$j(id_field).val(journal.id);
}
})
}
function attachProfileSelector(type, selected) {
philwidget.load('profile_selector', {
'app': 'philpapers',
'show_affiliation': true,
'selector': type,
'input_name': type + '_search',
'append_to_list_on_select': true,
'select_multiple': true,
'selected': selected,
'show_alias_dropdown': true,
'name_reversed': true,
'input_style': 'width:100%',
'placeholder': 'Start typing to find an author to add',
'custom_alias': true,
'hosts': {
'philpeople': 'https://philpeople.org'
}
});
}
function popupWindow(url, title, w, h) {
var left = (screen.width/2)-(w/2);
var top = (screen.height/2)-(h/2);
return window.open(url, title, 'toolbar=no, location=yes, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
}
function domReady(callback) {
if (document.addEventListener) {
document.addEventListener("DOMContentLoaded", callback, false);
} else if (document.attachEvent) {
document.attachEvent("onreadystatechange", function() {
if (document.readyState === "complete" ) {
callback();
}
});
} else {
var oldOnload = window.onload;
window.onload = function () {
oldOnload && oldOnload();
callback();
}
}
}
function popupSignInBegin(callback) {
if(callback) {
window.signInCallback = function(url) {
callback(url);
delete window.signInCallback;
};
}
popupWindow('https://auth.philpapers.org/login?service=https://philpapers.org/cas.pl&gateway=1&persist%5Bnoheader%5D=1&persist%5Bpopup%5D=1&popup=true', 'Sign In', 600, 400);
}
function redirectWindow(url) {
var win = window;
if(window.opener) {
win = window.opener;
}
win.location.href = url;
if (window !== win) { window.close(); }
}
function appendSelectedProfilesToForm(type, form) {
var selector= document.getElementsByName(type + '_search')[0].profile_selector;
var selected = selector.get_selected();
for (var i = 0; i < selected.length; i++) {
var profile= selected[i];
var name_element = document.createElement("input");
name_element.type='hidden';
name_element.name=type + "_name" + i;
name_element.value=selector.mere_name(profile, null);
var id_element = document.createElement("input");
id_element.type='hidden';
id_element.name=type + "_profile_id" + i;
if (profile.id) {
id_element.value=profile.id;
}
form.appendChild(name_element);
form.appendChild(id_element);
}
var max_element = document.createElement("input");
max_element.type = 'hidden';
max_element.value = selected.length - 1;
max_element.name = type + "_max";
form.appendChild(max_element);
}
function getWidth(val, offset) {
var container = document.getElementById('contentContainer');
if (container) {
return Math.min(val, getElementContentWidth(container));
} else {
return val
}
}
function getElementContentWidth(element) {
return $j(element).width();
}
function bindCollapseClickEvent() {
jQuery('body').bind('click.collapse', function(e) {
if(jQuery(e.target).closest('.navbar').length == 0) {
var opened = jQuery('.navbar-collapse').hasClass('collapse in');
if ( opened === true ) {
collapseNavbar();
}
}
});
}
function unbindCollapseClickEvent() {
jQuery('body').unbind('click.collapse');
}
function collapseNavbar() {
jQuery('.navbar-collapse').collapse('hide');
}
function scrollCollapseFunction () {
collapseNavbar();
}
function initializeToggles() {
$j('#head').on('shown.bs.collapse', function () {
bindCollapseClickEvent();
window.addEventListener('scroll', scrollCollapseFunction);
});
$j('#head').on('hidden.bs.collapse', function () {
unbindCollapseClickEvent();
window.removeEventListener('scroll', scrollCollapseFunction);
});
$j('#head').on('show.bs.collapse','.collapse', function() {
$j('#head').find('.collapse.in, .collapse.collapsing').collapse('hide');
});
$j('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
event.preventDefault();
event.stopPropagation();
$j('ul.dropdown-menu [data-toggle=dropdown]').parent().removeClass('open');
$j(this).parent().addClass('open');
});
$j('.toggle-side').each(function() {
$j(this).click(function() {
$j(this).toggleClass('open');
$j('.side-placeholder').toggleClass('show');
});
});
$j('.see-also-toggle').each(function() {
$j(this).click(function() {
$j(this).toggleClass('open');
$j(this).siblings('table.see-also').toggleClass('show');
});
});
$j('.toggle').each(function() {
$j(this).click(function() {
$j(this).toggleClass('open');
$j(this).siblings('.' + $j(this).data('target')).toggleClass('show');
});
});
$j('.toggle-full-content').each(function()  {
$j(this).click(function() {
var full_content = $j(this).parent().attr('data-full-content')
$j(this).parent().html(full_content);
});
});
}
var ppTypeahead = (function() {
var xhrPool = [];
function abortAllAjax() {
$j.each(xhrPool, function(idx, jqXHR) {
jqXHR.abort();
});
xhrPool = [];
}
function pushAjax(jqXHR) {
xhrPool.push(jqXHR);
}
function remove(jqXHR) {
var index = $.inArray(jqXHR, xhrPool);
if (index > -1) {
xhrPool.splice(index, 1);
}
}
var MIN_SEARCH_QUERY_LENGTH = 4;
function lookup(q, input, process, url) {
if (q.length < MIN_SEARCH_QUERY_LENGTH) {
return
}
abortAllAjax();
var request = $j.ajax({
type: 'GET',
url: url,
dataType: 'json',
data: { q: q, format:'json' },
beforeSend: function() {
input.$element.addClass('typeahead-loading');
},
complete: function() {
input.$element.removeClass('typeahead-loading');
},
success: function(response) {
var containsEntries = false;
$j.each(response.data, function(index, item) {
if (item.type == 'Publications') {
containsEntries = true;
}
});
if (!containsEntries) {
var entryRequest = $j.ajax({
type: 'GET',
url: url,
dataType: 'json',
data: { q: q, onlyEntries: 1, format:'json' },
success: function(response) {
if (!response.data || response.data.length == 0) { return; }
var lines = response.data.map(function(item) {
return renderTypeaheadLine(item);
});
var item = response.data[0];
lines.unshift(renderTypeaheadHeader(item.more_url, 'Publications', item.count));
input.$menu.find('.divider').before(lines);
adjustHeight(input.$menu);
}
});
pushAjax(entryRequest);
}
return process(response.data);
}
});
pushAjax(request);
}
function renderTypeaheadHeader(url, title, count) {
return '<li data-value="'+url+'"><div class="clearfix dropdown-header"><span class="pull-left">'+title+'</span><a href="'+url+'" class="more-link pull-right">'+count+' found</a></div></li>';
}
function renderTypeaheadLine(item) {
var line = '<li class="typeahead-item" data-value="'+item.url+'"><a href="'+item.url+'">'+item.name;
if (item.details) {
line = line + '<br><span  class="details text-muted">' + item.details + "</span>";
}
line = line + '</a></li>';
return line;
}
function adjustHeight(menu) {
var height = $j(window).height() - (menu.offset().top - $j(window).scrollTop()) - 2;
if (height < menu.height()) {
menu.css('max-height',height);
menu.css('overflow-y','auto');
menu.css('overflow-x','hidden');
}
}
function initialize(selector) {
var url = '/search/lookup.pl';
$j(selector).each(function() {
var input = $j(this);
input.typeahead({
minLength: MIN_SEARCH_QUERY_LENGTH,
delay:100,
fitToElement: true,
source: function (q, process) {
return lookup(q, this, process, url);
},
sorter: function(items) {
return items.sort(function(item) {
return item.type;
});
},
matcher: function(item) {
return true;
},
render: function(items, value) {
var that = this;
var type = '';
items = items.map(function (item) {
var line = '';
if (!type || item.type != type) {
var more_url = item.more_url || url + '?q=' + input.val()+ '&type=' + item.type;
line = renderTypeaheadHeader(more_url, item.type, item.count);
}
type = item.type;
line = line + renderTypeaheadLine(item);
return line;
})
items.push('<li class="divider"></li><li class="typeahead-item" data-value="/s/'+input.val() +'"><a href="#">Show all results</a></li>');
this.$menu.html(items)
var menu = this.$menu;
menu.bind('typeahead-show',function() {
adjustHeight(menu);
});
return this
},
updater: function(item) {
if (item) {
window.location.href = item;
} else {
input.closest('form').submit();
return input.val();
}
},
});
var typeahead = input.data('typeahead');
typeahead.next = function (event) {
var active = this.$menu.find('.active').removeClass('active');
var next = active.nextAll('li.typeahead-item').first();
if (!next.length) {
next = this.$menu.find('li.typeahead-item').first();
}
next.addClass('active');
}
typeahead.prev = function (event) {
var active = this.$menu.find('.active').removeClass('active');
var prev = active.prevAll('li.typeahead-item').first();
if (!prev.length) {
prev = this.$menu.find('li.typeahead-item').last();
}
prev.addClass('active');
}
});
}
return {
initialize: initialize
}
})();
var ppTour = (function() {
function typeTour(element, strings) {
new Typed(element[0], {
startDelay: 3000,
strings: strings,
onStringTyped: function() {
if (!isMobile()) {
var val =element.val();
element.typeahead('val', val).trigger('input').typeahead('open');
}
},
typeSpeed: 2
});
}
function responsivePlacement(mobile, regular) {
if (isMobile()) {
return mobile;
} else {
return regular;
}
}
function isMobile() {
var width = $j(window).width();
return width <= 768;
}
function initialize() {
if (!(ie < 9)) {
var tour = new Tour({
storage: window.localStorage,
steps: [
{
element: '.topSearch-container:visible:first',
title: 'Searching PhilPapers',
content: "PhilPapers allows you to search citations and abstracts for academic publications in philosophy. You can also search topics, journals, and the profiles of registered users. Let's search for works about consciousness and grasping.",
backdropContainer: '.topSearch-container:visible:first',
placement: responsivePlacement('bottom','right'),
onShow: function() {
ppAct("tourStart");
$j('#search-dropdown-button:visible').trigger('click');
typeTour($j('.topSearch:visible:first'), ['consciousness grasping'])
},
},
{
path: '/s/consciousness%20grasping',
title: 'Ordering search results',
placement: responsivePlacement('bottom','right'),
content: "By default, search results are ordered by relevance. You can order by other useful values, such as impact.",
element: 'select[name="sort"]:first',
onHide: function() {
if ($j('.toggle-side:visible').length) {
$j('.side-placeholder:first').addClass('show');
}
}
},
{
title: 'Publication details',
placement:responsivePlacement('top','bottom'),
content: "Search listings show the publications details, the abstract, and a few useful tools. You can click on an article's title to access more details and tools or download it.",
element: '.entryList:visible:first>li:first',
onShow: function() {
$j('.entryList:visible:first>li:first .extras').addClass('show')
}
},
{
title: 'Filtering search results',
placement: 'bottom',
content: "By default, one filter is enabled: pro only (explained in the FAQ). These settings are saved across searches.",
element: '.filters-box:visible:first',
},
{
title: "Off campus",
content: "You can configure PhilPapers to work with your university's proxy server so that you can easily access resources behind paywalls. If your university has a subscription to PhilPapers, this will be configured for you as soon as you create a free account.",
placement:'left',
element: '#off-campus-box:visible:first',
},
{
title: "Email alerts",
content: "Email alerts allow you to receive email notifications when works are added to any page, including search results. Now let's visit the record page for a paper.",
placement:'left',
element: '.monitor-box:visible:first',
},
{
path: '/rec/BOUTRO-11/',
title: 'Record page',
content: "The record page shows you a lot more information about a work, including keywords, category labels, and citations and references (further down the page).",
orphan: true
},
{
path: '/rec/BOUTRO-11/',
title: 'Record page',
content: "This part of the record page contains various useful tools. For example, you can save a work to a list, export its citation, and edit its information (including the abstract, Internet links, and categories).",
element: '#entryOptions',
},
{
title: 'Download options',
placement:'top',
content: "Typically, the record page contains several download options. Some works are archived directly on PhilPapers, which is the most convenient way to access them.",
element:'.download-options:first',
},
{
element: '#record-categories',
title: 'Categories',
placement: 'auto right',
content: "Categories are a powerful way of discovering content on PhilPapers. Let's visit a category page.",
},
{
path: '/browse/experimental-philosophy',
title: "Categories",
content: "PhilPapers has over 5000 categories organized in a (partly) hierarchical graph and maintained by about 700 volunteer academic editors who are specialists in the relevant topics. ",
element: ".cattop",
placement: 'auto bottom'
},
{
path: '/browse/experimental-philosophy',
title: "Categories",
content: "In addition to listing works relevant to a topic, every category should contain a summary of the topic and a list of key and introductory works (as applicable). ",
element: ".summaries",
placement: 'auto top'
},
{
title: "Submit material",
content: "Everyone can contribute to PhilPapers by submitting their own works and improving their records. We index most things automatically, but your works will be more visible if you supply additional information. If you have not done so already, we suggest that you create a free account to avail yourself of these options and many other features of PhilPapers.",
element: '#nav-submit',
placement: 'bottom',
prev: 11,
next: -1,
backdropContainer: '#head',
onShow: function() {
ppAct("tourEnd");
$j('#menu-dropdown-button:visible').trigger('click');
}
},
],
backdrop: true,
backdropPadding: '10',
});
}
$j(document).ready(function() {
if (ie < 9) {
$j('#start-tour').hide();
} else {
$j('#start-tour').click(function() {
window.localStorage.clear()
tour.start(true);
});
}
});
}
return {
initialize: initialize
}
})();
var ie = (function(){
var undef,
v = 3,
div = document.createElement('div'),
all = div.getElementsByTagName('i');
while (
div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
all[0]
);
return v > 4 ? v : undef;
}())
function prototypeBootstrapCompatibility() {
var isBootstrapEvent = false;
if (window.jQuery) {
var all = jQuery('*');
jQuery.each(['hide.bs.dropdown',
'hide.bs.collapse',
'hide.bs.modal',
'hide.bs.tooltip',
'hide.bs.popover',
'hide.bs.tab'], function(index, eventName) {
all.on(eventName, function( event ) {
isBootstrapEvent = true;
});
});
}
var originalHide = Element.hide;
Element.addMethods({
hide: function(element) {
if(isBootstrapEvent) {
isBootstrapEvent = false;
return element;
}
return originalHide(element);
}
});
}
function initTabs() {
$j('.nav-tabs a').on('click',function() {
var hash = $j(this).attr('href');
$j(hash).addClass('fade');
window.location.hash = hash
});
changeTab();
$j(window).on('hashchange', function() {
changeTab();
});
}
function changeTab(hash) {
if (hash) {
var activeTab = $j('[href=' + location.hash + ']');
if (activeTab.length) {
activeTab.tab('show');
} else {
$j('.nav-tabs a:first').tab('show');
}
}
}
var DirtyFormWarning = function(formSelector) {
var isDirty = {}
var formSubmitting = false
window.addEventListener("beforeunload", function (e) {
var formDirty = Object.keys(isDirty).length > 0
if (formSubmitting || !formDirty) {
return undefined;
}
var confirmationMessage = 'it looks like you have been editing something. '
+ 'if you leave before saving, your changes will be lost.';
(e || window.event).returnValue = confirmationMessage;
return confirmationMessage;
});
jQuery(document).ready(function() {
jQuery(formSelector).on('submit', function() {
formSubmitting = true
return true
});
});
return {
isDirty() { return isDirty },
formSubmitting() { return formSubmitting },
onEditorChange: function(event) {
var editor = event.target;
var editorId = this.toString()
isDirty[editorId] = editor.editorDirty
},
}
};

xpa_xpapers_loaded=true;
