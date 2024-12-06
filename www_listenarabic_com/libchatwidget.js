(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["field_custom.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"form-group\">\n    <label for=\"s-lch-user";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "field")),"id"), env.opts.autoescape);
output += "\" class=\"control-label\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "field")),"name")), env.opts.autoescape);
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "field")),"required")) {
output += "*<span class=\"sr-only\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "translation")),"required"), env.opts.autoescape);
output += "</span>";
;
}
output += "</label>\n    ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "field")),"type") == "l") {
output += "\n        <select class=\"form-control input-sm s-lch-customfield\" name=\"user";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "field")),"id"), env.opts.autoescape);
output += "\" id=\"s-lch-user";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "field")),"id"), env.opts.autoescape);
output += "\">\n            <option value=\"0\"> --- </option>\n            ";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "field")),"val");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("item", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n                <option value=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, t_4), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += "</option>\n            ";
;
}
}
frame = frame.pop();
output += "\n        </select>\n    ";
;
}
else {
output += "\n        <input type=\"text\" class=\"form-control input-sm s-lch-customfield\" name=\"user";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "field")),"id"), env.opts.autoescape);
output += "\" id=\"s-lch-user";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "field")),"id"), env.opts.autoescape);
output += "\" maxlength=\"500\" ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "field")),"required")) {
output += "required";
;
}
output += " />\n    ";
;
}
output += "\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["form_bot_responses.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n<div class=\"bot-responses ";
output += runtime.suppressValue((env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "responses")) == 0?"hidden":""), env.opts.autoescape);
output += "\">\n    ";
if(runtime.contextOrFrameLookup(context, frame, "actionId") > 0) {
output += "\n        <input type=\"hidden\" name=\"action_id\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "actionId"), env.opts.autoescape);
output += "\" />\n    ";
;
}
output += "\n    ";
var t_1;
t_1 = "";
frame.set("responseId", t_1, true);
if(frame.topLevel) {
context.setVariable("responseId", t_1);
}
if(frame.topLevel) {
context.addExport("responseId", t_1);
}
output += "\n    ";
if(env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "responses")) == 1) {
output += "\n        ";
var t_2;
t_2 = env.getFilter("first").call(context, runtime.contextOrFrameLookup(context, frame, "responses"));
frame.set("response1", t_2, true);
if(frame.topLevel) {
context.setVariable("response1", t_2);
}
if(frame.topLevel) {
context.addExport("response1", t_2);
}
output += "\n        ";
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "response1")),"id");
frame.set("responseId", t_3, true);
if(frame.topLevel) {
context.setVariable("responseId", t_3);
}
if(frame.topLevel) {
context.addExport("responseId", t_3);
}
output += "\n    ";
;
}
output += "\n    ";
if(env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "responses")) > 6) {
output += "\n        <select class=\"form-control\" name=\"responseid\">\n            ";
frame = frame.push();
var t_6 = runtime.contextOrFrameLookup(context, frame, "responses");
if(t_6) {t_6 = runtime.fromIterator(t_6);
var t_5 = t_6.length;
for(var t_4=0; t_4 < t_6.length; t_4++) {
var t_7 = t_6[t_4];
frame.set("response", t_7);
frame.set("loop.index", t_4 + 1);
frame.set("loop.index0", t_4);
frame.set("loop.revindex", t_5 - t_4);
frame.set("loop.revindex0", t_5 - t_4 - 1);
frame.set("loop.first", t_4 === 0);
frame.set("loop.last", t_4 === t_5 - 1);
frame.set("loop.length", t_5);
output += "\n                <option value=\"";
output += runtime.suppressValue(runtime.memberLookup((t_7),"id"), env.opts.autoescape);
output += "\" data-other=\"";
output += runtime.suppressValue((runtime.memberLookup((t_7),"otherResponse")?1:0), env.opts.autoescape);
output += "\" ";
if(runtime.memberLookup((t_7),"page") > 0) {
output += "data-page=\"";
output += runtime.suppressValue(runtime.memberLookup((t_7),"page"), env.opts.autoescape);
output += "\"";
;
}
output += " ";
if(runtime.memberLookup((t_7),"back")) {
output += "data-back=1";
;
}
output += ">";
output += runtime.suppressValue(runtime.memberLookup((t_7),"text"), env.opts.autoescape);
output += "</option>\n            ";
;
}
}
frame = frame.pop();
output += "\n        </select>\n    ";
;
}
else {
output += "\n        <input type=\"hidden\" name=\"responseid\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "responseId"), env.opts.autoescape);
output += "\" />\n        ";
frame = frame.push();
var t_10 = runtime.contextOrFrameLookup(context, frame, "responses");
if(t_10) {t_10 = runtime.fromIterator(t_10);
var t_9 = t_10.length;
for(var t_8=0; t_8 < t_10.length; t_8++) {
var t_11 = t_10[t_8];
frame.set("response", t_11);
frame.set("loop.index", t_8 + 1);
frame.set("loop.index0", t_8);
frame.set("loop.revindex", t_9 - t_8);
frame.set("loop.revindex0", t_9 - t_8 - 1);
frame.set("loop.first", t_8 === 0);
frame.set("loop.last", t_8 === t_9 - 1);
frame.set("loop.length", t_9);
output += "\n            <button type=\"button\" class=\"btn btn-primary btn-chat\" data-responseid=\"";
output += runtime.suppressValue(runtime.memberLookup((t_11),"id"), env.opts.autoescape);
output += "\" data-other=\"";
output += runtime.suppressValue((runtime.memberLookup((t_11),"otherResponse")?1:0), env.opts.autoescape);
output += "\" ";
if(runtime.memberLookup((t_11),"page") > 0) {
output += "data-page=\"";
output += runtime.suppressValue(runtime.memberLookup((t_11),"page"), env.opts.autoescape);
output += "\"";
;
}
output += " ";
if(runtime.memberLookup((t_11),"back")) {
output += "data-back=1";
;
}
output += ">";
output += runtime.suppressValue(runtime.memberLookup((t_11),"text"), env.opts.autoescape);
output += "</button>\n        ";
;
}
}
frame = frame.pop();
output += "\n    ";
;
}
output += "\n</div>\n\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["form_contactrequest.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n<li id=\"s-lch-msg-contact\" class=\"s-lch-msg s-lch-msg-sys\">\n    <form class=\"s-lch-contact-form s-lch-msg-txt\" method=\"post\" action=\"/chat/session/";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "channel"), env.opts.autoescape);
output += "/contact\">\n        <p>";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "contact_request_msg")), env.opts.autoescape);
output += "</p>\n\n        <div class=\"form-group\">\n            <label for=\"client_contact\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "contact_label")), env.opts.autoescape);
output += "</label>\n            <input type=\"text\" name=\"client_contact\" value=\"\" id=\"client_contact\" class=\"form-control\" />\n        </div>\n\n        ";
if(runtime.contextOrFrameLookup(context, frame, "skip_login") && runtime.contextOrFrameLookup(context, frame, "allFields")) {
output += "\n            <div class=\"login_field form-group\">\n                <label for=\"client_name\" class=\"control-label\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "name_label")), env.opts.autoescape);
if(!runtime.contextOrFrameLookup(context, frame, "enable_anon")) {
output += "*<span class=\"sr-only\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "translation")),"required"), env.opts.autoescape);
output += "</span>";
;
}
output += "</label>\n                <input type=\"text\" class=\"input-sm form-control\" ";
if(!runtime.contextOrFrameLookup(context, frame, "enable_anon")) {
output += "required ";
;
}
output += " name=\"client_name\" id=\"client_name\" maxlength=\"100\" />\n            </div>\n\n            ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "customFields");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("field", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n                ";
if(t_4 && runtime.memberLookup((t_4),"show")) {
output += "\n                    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("field_custom.njk", false, "form_contactrequest.njk", false, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n                ";
});
}
output += "\n            ";
;
}
}
frame = frame.pop();
output += "\n        ";
;
}
output += "\n\n        <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-default btn-chat btn-xs\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "submit_button")), env.opts.autoescape);
output += "</button>\n        </div>\n    </form>\n</li>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["form_rating.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n<li id=\"s-lch-msg-rate\" class=\"s-lch-msg s-lch-msg-sys\">\n    <div class=\"s-lch-msg-txt\">\n        <form id=\"s-lch-rate-form\" method=\"POST\" action=\"";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "isBot")?"/chat/bot/session/" + runtime.contextOrFrameLookup(context, frame, "channel") + "/rating":"/chat/session/" + runtime.contextOrFrameLookup(context, frame, "channel") + "/comment"), env.opts.autoescape);
output += "\">\n            <input type=\"hidden\" name=\"survey_uuid\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "survey_uuid"), env.opts.autoescape);
output += "\" />\n            <fieldset>\n                <legend class=\"";
if(runtime.contextOrFrameLookup(context, frame, "isBot")) {
output += "sr-only";
;
}
output += "\">";
if(!runtime.contextOrFrameLookup(context, frame, "isBot")) {
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "byeMsg")), env.opts.autoescape);
output += " ";
;
}
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "star_text")), env.opts.autoescape);
output += "</legend>\n                ";
if(runtime.contextOrFrameLookup(context, frame, "survey_uuid") !== "") {
output += "\n                    <strong>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "rate_1"), env.opts.autoescape);
output += "</strong>\n                    <div class=\"s-lch-rate-opts\">\n                        ";
frame = frame.push();
var t_3 = (lineno = 10, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", context, [0,11]));
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("i", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n                        <label class=\"radio\">\n                            <span class=\"s-lch-rate-label\">";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += "</span>\n                            <input type=\"radio\" value=\"";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += "\" name=\"chat_rating\" />\n                        </label>\n                        ";
;
}
}
frame = frame.pop();
output += "\n                    </div>\n                    <div class=\"s-lch-rate-high\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "rate_4"), env.opts.autoescape);
output += "</div>\n                ";
;
}
else {
output += "\n                    <div class=\"s-lch-rate-opts\">\n                        <label class=\"radio\">\n                            <span class=\"s-lch-rate-emoji\">😀</span>\n                            <span class=\"s-lch-rate-label\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "rate_4")), env.opts.autoescape);
output += "</span>\n                            <input type=\"radio\" value=\"4\" name=\"chat_rating\" />\n                        </label>\n\n                        <label class=\"radio\">\n                            <span class=\"s-lch-rate-emoji\">🙂</span>\n                            <span class=\"s-lch-rate-label\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "rate_3")), env.opts.autoescape);
output += "</span>\n                            <input type=\"radio\" value=\"3\" name=\"chat_rating\" />\n                        </label>\n\n                        <label class=\"radio\">\n                            <span class=\"s-lch-rate-emoji\">😐</span>\n                            <span class=\"s-lch-rate-label\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "rate_2")), env.opts.autoescape);
output += "</span>\n                            <input type=\"radio\" value=\"2\" name=\"chat_rating\" />\n                        </label>\n\n                        <label class=\"radio\">\n                            <span class=\"s-lch-rate-emoji\">🙁</span>\n                            <span class=\"s-lch-rate-label\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "rate_1")), env.opts.autoescape);
output += "</span>\n                            <input type=\"radio\" value=\"1\" name=\"chat_rating\" />\n                        </label>\n                    </div>\n                ";
;
}
output += "\n            </fieldset>\n            <div class=\"form-group\">\n                <label for=\"client_comment\" class=\"control-label\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "comments_label")), env.opts.autoescape);
output += "</label>\n                <textarea id=\"client_comment\" rows=\"1\" class=\"form-control input-sm\" name=\"client_comment\"></textarea>\n            </div>\n            ";
if(!runtime.contextOrFrameLookup(context, frame, "isBot")) {
output += "\n                <div class=\"form-group ";
if(!runtime.contextOrFrameLookup(context, frame, "followup_enabled")) {
output += "hidden";
;
}
output += "\">\n                    <label for=\"request_followup\" class=\"check\">\n                        <input type=\"checkbox\" name=\"request_followup\" id=\"request_followup\" value=\"1\" />\n                        ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "comments_followup")), env.opts.autoescape);
output += "\n                    </label>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"email_transcript\" class=\"check\">\n                        <input type=\"checkbox\" name=\"email_transcript\" id=\"email_transcript\" value=\"1\" />\n                        ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "comments_email")), env.opts.autoescape);
output += "\n                    </label>\n                </div>\n                <div class=\"form-group hidden\">\n                    <label for=\"rate_client_contact\" class=\"control-label\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "contact_label")), env.opts.autoescape);
output += "</label>\n                    <input type=\"text\" name=\"client_contact\" id=\"rate_client_contact\" class=\"form-control\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "clientContact"), env.opts.autoescape);
output += "\" />\n                </div>\n            ";
;
}
output += "\n            <div class=\"form-group\">\n                <button type=\"submit\" class=\"btn btn-default btn-chat btn-xs\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "comments_button_text")), env.opts.autoescape);
output += "</button>\n                ";
if(!runtime.contextOrFrameLookup(context, frame, "isBot")) {
output += "\n                    <button type=\"button\" class=\"btn btn-default btn-xs btn-link s-lch-btn-close pull-right\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "translation")),"ch_btn_close"), env.opts.autoescape);
output += "</button>\n                ";
;
}
output += "\n            </div>\n        </form>\n    </div>\n</li>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["item_faq.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n<strong>";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "faq")),"question")), env.opts.autoescape);
output += "</strong>\n<p>";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "faq")),"shortanswer")), env.opts.autoescape);
output += "</p>\n<p><a href=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "faq")),"url")), env.opts.autoescape);
output += "\" class=\"action_click\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "translation")),"ch_view_faq"), env.opts.autoescape);
output += "</a></p>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["item_guide.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n<a href=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"url")), env.opts.autoescape);
output += "\" class=\"action_click\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "item")),"name")), env.opts.autoescape);
output += "</a>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["link.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<a href=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.contextOrFrameLookup(context, frame, "linkUrl")), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "linkTitle"), env.opts.autoescape);
output += "</a>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["list_faqs.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n<ol class=\"s-lch-faq-list\">\n    ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "faqs");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("faq", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n        <li><a href=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((t_4),"url")), env.opts.autoescape);
output += "\" class=\"action_click\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((t_4),"question")), env.opts.autoescape);
output += "</a>\n    ";
;
}
}
frame = frame.pop();
output += "\n</ol>\n<p><a href=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.contextOrFrameLookup(context, frame, "searchUrl")), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "translation")),"ch_see_more"), env.opts.autoescape);
output += "</a></p>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["list_guides.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n<ol class=\"s-lch-lg-list\">\n    ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "items");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("item", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n        <li><a href=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((t_4),"url")), env.opts.autoescape);
output += "\" class=\"action_click\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((t_4),"name")), env.opts.autoescape);
output += "</a>\n    ";
;
}
}
frame = frame.pop();
output += "\n</ol>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["message_bot.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var t_1;
t_1 = (runtime.contextOrFrameLookup(context, frame, "show_meta")?"":"chatMsgNoMeta");
frame.set("showMetaClass", t_1, true);
if(frame.topLevel) {
context.setVariable("showMetaClass", t_1);
}
if(frame.topLevel) {
context.addExport("showMetaClass", t_1);
}
output += "\n<li class=\"s-lch-msg s-lch-msg-bot ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "showMetaClass"), env.opts.autoescape);
output += "\" ";
if(runtime.contextOrFrameLookup(context, frame, "actionId") > 0) {
output += "data-actionid=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "actionId"), env.opts.autoescape);
output += "\"";
;
}
output += ">\n    <div class=\"s-lch-msg-wrap\">\n        <div class=\"s-lch-msg-meta\" aria-hidden=\"true\">\n            ";
output += "\n            <div class=\"s-lch-profile\" style=\"color: ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "profile_image")),"color"), env.opts.autoescape);
output += ";\">\n                <img src=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "profile_image")),"path")), env.opts.autoescape);
output += "\" alt=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.contextOrFrameLookup(context, frame, "name")), env.opts.autoescape);
output += "\" />\n            </div>\n        </div>\n        <div class=\"s-lch-msg-body\">\n            ";
output += "\n            <div class=\"s-lch-msg-name\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += " <time class=\"s-lch-msg-time\" aria-hidden=\"true\" pubdate=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.contextOrFrameLookup(context, frame, "ts_html")), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "ts_time"), env.opts.autoescape);
output += "</time></div>\n            <div class=\"s-lch-msg-txt\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "msg")), env.opts.autoescape);
output += "</div>\n        </div>\n    </div>\n</li>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["message_op.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
var t_1;
t_1 = (runtime.contextOrFrameLookup(context, frame, "show_meta")?"":"chatMsgNoMeta");
frame.set("showMetaClass", t_1, true);
if(frame.topLevel) {
context.setVariable("showMetaClass", t_1);
}
if(frame.topLevel) {
context.addExport("showMetaClass", t_1);
}
output += "\n<li id=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "\" ";
if(runtime.contextOrFrameLookup(context, frame, "msgId") > 0) {
output += "data-msgid=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "msgId"), env.opts.autoescape);
output += "\"";
;
}
output += " class=\"s-lch-msg s-lch-msg-op s-lch-msg-op-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "opId"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "showMetaClass"), env.opts.autoescape);
output += "\">\n    <div class=\"s-lch-msg-wrap\">\n        <div class=\"s-lch-msg-meta\" aria-hidden=\"true\">\n            ";
output += "\n            <div class=\"s-lch-profile\" style=\"color: ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "profile_image")),"color"), env.opts.autoescape);
output += ";\">\n                <img src=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "profile_image")),"path")), env.opts.autoescape);
output += "\" alt=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.contextOrFrameLookup(context, frame, "name")), env.opts.autoescape);
output += "\" />\n            </div>\n        </div>\n        <div class=\"s-lch-msg-body\">\n            ";
output += "\n            <div class=\"s-lch-msg-name\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += " <time class=\"s-lch-msg-time\" aria-hidden=\"true\" pubdate=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.contextOrFrameLookup(context, frame, "ts_html")), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "ts_time"), env.opts.autoescape);
output += "</time></div>\n            <div class=\"s-lch-msg-txt\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "msg")), env.opts.autoescape);
output += "</div>\n        </div>\n    </div>\n</li>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["message_patron.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n<li id=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "\" ";
if(runtime.contextOrFrameLookup(context, frame, "msgId") > 0) {
output += "data-msgid=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "msgId"), env.opts.autoescape);
output += "\"";
;
}
output += " class=\"s-lch-msg s-lch-msg-patron\">\n    <div class=\"s-lch-msg-wrap\">\n        <div class=\"s-lch-msg-meta sr-only\">\n            <div class=\"s-lch-msg-name\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "</div>\n        </div>\n        <div class=\"s-lch-msg-body\">\n            <time class=\"s-lch-msg-time ";
if(!runtime.contextOrFrameLookup(context, frame, "show_meta")) {
output += "hidden";
;
}
output += "\" aria-hidden=\"true\" pubdate=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.contextOrFrameLookup(context, frame, "ts_html")), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "ts_time"), env.opts.autoescape);
output += "</time>\n            <div class=\"s-lch-msg-txt\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "msg")), env.opts.autoescape);
output += "</div>\n        </div>\n    </div>\n</li>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["message_system.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n<li id=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "\" class=\"s-lch-msg s-lch-msg-sys\">\n    <time class=\"s-lch-msg-time ";
if(!runtime.contextOrFrameLookup(context, frame, "show_meta")) {
output += "hidden";
;
}
output += "\" aria-hidden=\"true\" pubdate=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.contextOrFrameLookup(context, frame, "ts_html")), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "ts_time"), env.opts.autoescape);
output += "</time>\n    <div class=\"s-lch-msg-txt\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "msg")), env.opts.autoescape);
output += "</div>\n</li>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["overlay_libauth.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
if(runtime.contextOrFrameLookup(context, frame, "auth_id") > 0 && !runtime.contextOrFrameLookup(context, frame, "isAuthValidated")) {
output += "\n    <div class=\"s-lch-auth\">\n        <div class=\"s-lch-auth-div\">\n            <div>\n                ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "authText")), env.opts.autoescape);
output += "\n            </div>\n            <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "authUrl"), env.opts.autoescape);
output += "\" class=\"btn btn-primary btn-libauth\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "authButton")), env.opts.autoescape);
output += "</a>\n            ";
if(!runtime.contextOrFrameLookup(context, frame, "isEmbed")) {
output += "\n                <button type=\"button\" class=\"btn btn-default btn-cancel\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "cancelButton")), env.opts.autoescape);
output += "</button>\n            ";
;
}
output += "\n        </div>\n    </div>\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["pane_autoload.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "profile")),"name") !== "") {
output += "\n    <div id=\"s-lch-autoload-profile\">\n        <div class=\"s-lch-profile\" style=\"color: ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "profile")),"color"), env.opts.autoescape);
output += ";\">\n            <img src=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "profile")),"image")), env.opts.autoescape);
output += "\" alt=\"\" />\n        </div>\n        <div class=\"s-lch-profile-name\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "profile")),"name"), env.opts.autoescape);
output += "</div>\n    </div>\n";
;
}
output += "\n<h2 id=\"s-lch-autoload-head\" class=\"color_head\" tabindex=\"-1\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "autoload_head")), env.opts.autoescape);
output += "</h2>\n<div id=\"s-lch-autoload-text\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "autoload_text")), env.opts.autoescape);
output += "</div>\n<div id=\"s-lch-autoload-actions\" class=\"margin-top\">\n    <button id=\"s-lch-autoload-yes\" type=\"button\" class=\"btn-chat btn btn-sm margin-bottom\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "autoload_yes")), env.opts.autoescape);
output += "</button>\n    ";
if(runtime.contextOrFrameLookup(context, frame, "cal_autoload")) {
output += "\n        <a href=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.contextOrFrameLookup(context, frame, "cal_url")), env.opts.autoescape);
output += "\" class=\"btn btn-sm btn-chat margin-bottom\" target=\"_blank\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "cal_text")), env.opts.autoescape);
output += "</a>\n    ";
;
}
output += "\n    <button id=\"s-lch-autoload-no\" type=\"button\" class=\"btn-chat btn btn-sm margin-bottom\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "autoload_no")), env.opts.autoescape);
output += "</button>\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["pane_chatting.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n<div class=\"s-lch-pane\">\n    <header class=\"s-lch-pane-header\">\n        <h2 id=\"s-lch-status\" class=\"color_head\" aria-live=\"polite\" tabindex=\"-1\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "chat_title")), env.opts.autoescape);
output += "</h2>\n        <div role=\"toolbar\" aria-label=\"Chat actions\" id=\"s-lch-header-actions\">\n            <button type=\"button\" class=\"btn btn-default btn-xs s-lch-btn-peel hidden\" aria-label=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "translation")),"ch_btn_popout")), env.opts.autoescape);
output += "\"><i class=\"fa fa-fw fa-external-link\" aria-hidden=\"true\"></i></button>\n            ";
if(runtime.contextOrFrameLookup(context, frame, "enable_sound")) {
output += "\n                    <button type=\"button\" class=\"btn btn-default btn-xs s-lch-btn-sound\" aria-label=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "translation")),"ch_sound_on")), env.opts.autoescape);
output += "\"><i class=\"fa fa-fw fa-volume-up\" aria-hidden=\"true\"></i></button>\n            ";
;
}
else {
output += "\n                    <button type=\"button\" class=\"btn btn-default btn-xs s-lch-btn-sound\" aria-label=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "translation")),"ch_sound_off")), env.opts.autoescape);
output += "\"><i class=\"fa fa-fw fa-volume-off\" aria-hidden=\"true\"></i></button>\n            ";
;
}
output += "\n            <button type=\"button\" class=\"btn btn-default btn-xs s-lch-btn-trans hidden\" aria-label=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.contextOrFrameLookup(context, frame, "email_trans")), env.opts.autoescape);
output += "\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></button>\n            <div class=\"s-lch-header-end\">\n                <button type=\"button\" class=\"btn btn-default btn-xs s-lch-btn-close\" aria-label=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "translation")),"ch_float_hide")), env.opts.autoescape);
output += "\" data-tooltip=\"left\"><i class=\"fa fa-fw fa-window-minimize\" aria-hidden=\"true\"></i></button>\n                <button type=\"button\" class=\"btn btn-default btn-xs s-lch-btn-end\" aria-label=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "translation")),"ch_btn_end")), env.opts.autoescape);
output += "\" data-tooltip=\"left\"><i class=\"fa fa-fw fa-times\" aria-hidden=\"true\"></i></button>\n            </div>\n        </div>\n        <a href=\"#s-lch-post-input\" class=\"s-lch-skip-link\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "translation")),"ch_skiplink"), env.opts.autoescape);
output += "</a>\n    </header>\n\n    <div class=\"scroller\" role=\"log\" aria-label=\"Chat Log\" tabindex=\"0\">\n        <ol id=\"s-lch-msg-log\" >\n            ";
if(runtime.contextOrFrameLookup(context, frame, "skip_login") || runtime.contextOrFrameLookup(context, frame, "flow_id") != "") {
output += "\n                ";
if(runtime.contextOrFrameLookup(context, frame, "flow_id") === "") {
output += "\n                    <li id=\"nologin_message\" class=\"s-lch-msg s-lch-msg-sys\">\n                        <div class=\"s-lch-msg-txt\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "nologin_message")), env.opts.autoescape);
output += "</div>\n                    </li>\n                ";
;
}
output += "\n                ";
if(runtime.contextOrFrameLookup(context, frame, "dataNotice") !== "") {
output += "\n                    <li class=\"s-lch-msg s-lch-msg-sys\">\n                        <div class=\"s-lch-msg-txt\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "dataNotice")), env.opts.autoescape);
output += "</div>\n                    </li>\n                ";
;
}
output += "\n            ";
;
}
output += "\n        </ol>\n    </div>\n\n    <form id=\"s-lch-post-form\" method=\"post\">\n        <div class=\"bot-responses hidden\"></div>\n        <div class=\"text-responses\">\n            <textarea role=\"textbox\" name=\"msg\" aria-multiline=\"true\" id=\"s-lch-post-input\" placeholder=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "translation")),"ch_message_place")), env.opts.autoescape);
output += "\" aria-label=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "translation")),"ch_message_label")), env.opts.autoescape);
output += "\"></textarea>\n            <div class=\"s-lch-form-actions\">\n                <div id=\"istyping\" aria-hidden=\"true\"></div>\n                ";
if(runtime.contextOrFrameLookup(context, frame, "file_uploads")) {
output += "\n                    <button type=\"button\" class=\"s-lch-btn-file btn btn-default btn-xs hidden\" aria-label=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.contextOrFrameLookup(context, frame, "file_title")), env.opts.autoescape);
output += "\" data-tooltip=\"left\"><i class=\"fa fa-paperclip\"></i></button>\n                ";
;
}
output += "\n                <button id=\"s-lch-post-submit\" class=\"btn-chat btn btn-xs\" type=\"submit\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "submit_button")), env.opts.autoescape);
output += "</button>\n            </div>\n        </div>\n    </form>\n\n    <a href=\"#s-lch-header-actions\" class=\"s-lch-skip-link\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "translation")),"ch_skiplink_back"), env.opts.autoescape);
output += "</a>\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["pane_fileupload.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n<h2 class=\"color_head\" tabindex=\"-1\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "file_title")), env.opts.autoescape);
output += "</h2>\n<form id=\"s-lch-file-form\" name=\"s-lch-file-form\" method=\"POST\" enctype=\"multipart/form-data\" action=\"/chat/session/";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "channel"), env.opts.autoescape);
output += "/file\">\n    <input type=\"hidden\" name=\"iid\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "iid"), env.opts.autoescape);
output += "\" />\n    <div id=\"s-lch-file-intro\" class=\"margin-bottom\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "file_intro")), env.opts.autoescape);
output += "</div>\n    <div class=\"form-group s-ui-filedrop\">\n        <input type=\"file\" name=\"ufile\" id=\"ufile\" value=\"\" class=\"sr-only\" />\n        <label for=\"ufile\" class=\"btn btn-default\"><div><i class=\"fa fa-upload fa-lg\"></i></div>\n        <div class=\"s-ui-filedrop-filenames hidden\"><strong>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "translation")),"ch_file_list"), env.opts.autoescape);
output += ":</strong><ul></ul></div>\n        <span class=\"filetext\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "file_label")), env.opts.autoescape);
output += "</span></label>\n        <button type=\"button\" class=\"btn btn-default btn-xs s-ui-filedrop-clear\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "clear_file_btn")), env.opts.autoescape);
output += "</button>\n    </div>\n    <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn-chat btn btn-sm\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "file_action")), env.opts.autoescape);
output += "</button> <button type=\"button\" class=\"btn-chat btn btn-sm btn-file-cancel\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "cancel_button")), env.opts.autoescape);
output += "</button>\n    <div class=\"alert alert-danger s-ui-filedrop-error\" role=\"alert\"></div>\n</form>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["pane_login.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n<h2 id=\"s-lch-welcome\" class=\"color_head margin-bottom\" tabindex=\"-1\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "chat_title")), env.opts.autoescape);
output += "</h2>\n<form id=\"s-lch-login-form\">\n    <div class=\"login_field form-group\">\n        <label for=\"client_name\" class=\"control-label\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "name_label")), env.opts.autoescape);
if(!runtime.contextOrFrameLookup(context, frame, "enable_anon")) {
output += "*<span class=\"sr-only\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "translation")),"required"), env.opts.autoescape);
output += "</span>";
;
}
output += "</label>\n        <input type=\"text\" class=\"input-sm form-control\" name=\"client_name\" id=\"client_name\" value=\"";
if(runtime.contextOrFrameLookup(context, frame, "patron")) {
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "patron")),"name")), env.opts.autoescape);
;
}
output += "\" ";
if(!runtime.contextOrFrameLookup(context, frame, "enable_anon")) {
output += "required";
;
}
output += " maxlength=\"100\" autocomplete=\"name\" />\n    </div>\n\n";
if(runtime.contextOrFrameLookup(context, frame, "contact_request")) {
output += "\n    <div class=\"login_field form-group\">\n        <label id=\"contact_label\" for=\"client_contact\" class=\"control-label\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "contact_label")), env.opts.autoescape);
if(runtime.contextOrFrameLookup(context, frame, "contact_required")) {
output += "*<span class=\"sr-only\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "translation")),"required"), env.opts.autoescape);
output += "</span>";
;
}
output += "</label>\n        <input type=\"text\" class=\"client_contact input-sm form-control\" name=\"client_contact\" id=\"client_contact\" value=\"";
if(runtime.contextOrFrameLookup(context, frame, "patron")) {
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "patron")),"client_contact")), env.opts.autoescape);
;
}
output += "\" ";
if(runtime.contextOrFrameLookup(context, frame, "contact_required")) {
output += "required";
;
}
output += " autocomplete=\"off\" />\n    </div>\n";
;
}
output += "\n\n";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "customFields");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("field", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n    ";
if(t_4 && runtime.memberLookup((t_4),"show")) {
output += "\n        ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("field_custom.njk", false, "pane_login.njk", false, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    ";
});
}
output += "\n";
;
}
}
frame = frame.pop();
output += "\n\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "online_rule")),"opId") > 0) {
output += "\n    <input type=\"hidden\" name=\"opId\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "online_rule")),"opId"), env.opts.autoescape);
output += "\" />\n";
;
}
else {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "online_rule")),"coopId") !== "") {
output += "\n    <input type=\"hidden\" name=\"coopId\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "online_rule")),"coopId"), env.opts.autoescape);
output += "\" />\n";
;
}
else {
output += "\n    ";
if(env.getFilter("length").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "online_rule")),"deptIds")) > 1) {
output += "\n        <div class=\"form-group\">\n            <label for=\"dept_sel\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "dept_label")), env.opts.autoescape);
output += "</label>\n            <select class=\"form-control input-sm\" name=\"dept\" id=\"dept_sel\">\n                ";
frame = frame.push();
var t_11 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "online_rule")),"deptIds");
if(t_11) {t_11 = runtime.fromIterator(t_11);
var t_10 = t_11.length;
for(var t_9=0; t_9 < t_11.length; t_9++) {
var t_12 = t_11[t_9];
frame.set("dept", t_12);
frame.set("loop.index", t_9 + 1);
frame.set("loop.index0", t_9);
frame.set("loop.revindex", t_10 - t_9);
frame.set("loop.revindex0", t_10 - t_9 - 1);
frame.set("loop.first", t_9 === 0);
frame.set("loop.last", t_9 === t_10 - 1);
frame.set("loop.length", t_10);
output += "\n                    <option value=\"";
output += runtime.suppressValue(runtime.memberLookup((t_12),"id"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((t_12),"name"), env.opts.autoescape);
output += "</option>\n                ";
;
}
}
frame = frame.pop();
output += "\n            </select>\n        </div>\n    ";
;
}
else {
if(env.getFilter("length").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "online_rule")),"deptIds")) === 1) {
output += "\n        <input type=\"hidden\" name=\"dept\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "online_rule")),"deptIds")),0)),"id"), env.opts.autoescape);
output += "\" />\n    ";
;
}
;
}
output += "\n";
;
}
;
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "initial_question")) {
output += "\n<div class=\"form-group\">\n    <label class=\"control-label\" for=\"client_question\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "initial_question_label")), env.opts.autoescape);
output += "*<span class=\"sr-only\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "translation")),"required"), env.opts.autoescape);
output += "</span></label>\n    <textarea id=\"client_question\" class=\"form-control input-sm\" name=\"client_question\" id=\"client_question\" maxlength=\"1000\" required>";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.contextOrFrameLookup(context, frame, "question_text")), env.opts.autoescape);
output += "</textarea>\n</div>\n";
;
}
output += "\n\n<div class=\"form-group\">\n    <button type=\"submit\" class=\"btn-chat btn btn-xs btn-fullWidth\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "chat_button")), env.opts.autoescape);
output += "</button>\n    ";
if(runtime.contextOrFrameLookup(context, frame, "fbwidget")) {
output += "\n        <button type=\"button\" class=\"btn-chat btn btn-sm s-lch-btn-close btn-fullWidth margin-top\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "translation")),"ch_btn_close"), env.opts.autoescape);
output += "</button>\n    ";
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "widget_type") == 6 && runtime.contextOrFrameLookup(context, frame, "inIframe")) {
output += "\n        <button type=\"button\" class=\"btn-chat btn btn-sm s-lch-btn-close btn-fullWidth margin-top\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "translation")),"ch_float_hide"), env.opts.autoescape);
output += "</button>\n    ";
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "widget_type") == 3 && runtime.contextOrFrameLookup(context, frame, "inIframe")) {
output += "\n        <button type=\"button\" class=\"btn-chat btn btn-xs s-lch-btn-close btn-fullWidth margin-top\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "translation")),"ch_btn_close"), env.opts.autoescape);
output += "</button>\n    ";
;
}
;
}
;
}
output += "\n</div>\n";
if(runtime.contextOrFrameLookup(context, frame, "dataNotice") !== "") {
output += "\n    <div id=\"s-lch-dataNotice\">\n        ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "dataNotice")), env.opts.autoescape);
output += "\n    </div>\n";
;
}
output += "\n</form>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["pane_offline.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n<h2 class=\"color_head\" tabindex=\"-1\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "offline_text")), env.opts.autoescape);
output += "</h2>\n";
if(runtime.contextOrFrameLookup(context, frame, "widget_type") == 6) {
output += "\n    <button type=\"button\" class=\"btn btn-default btn-xs s-lch-btn-close hidden\" aria-label=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "translation")),"ch_float_hide")), env.opts.autoescape);
output += "\"><i class=\"fa fa-fw fa-window-minimize\"></i></button>\n";
;
}
else {
output += "\n    <button type=\"button\" class=\"btn btn-default btn-xs s-lch-btn-close hidden\" aria-label=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "translation")),"ch_btn_close")), env.opts.autoescape);
output += "\"><i class=\"fa fa-fw fa-close\"></i></button>\n";
;
}
output += "\n<div id=\"s-lch-search-box\" class=\"margin-bottom\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "la_search_box")), env.opts.autoescape);
output += "</div>\n<div class=\"s-lch-offline-msg s-lch-offline-msg-1 margin-bottom\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "la_hide_msg")), env.opts.autoescape);
output += "</div>\n<div class=\"s-lch-offline-msg s-lch-offline-msg-2 margin-bottom\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "la_hide_msg2")), env.opts.autoescape);
output += "</div>\n";
if(runtime.contextOrFrameLookup(context, frame, "cal_offline")) {
output += "\n<div class=\"s-lch-cal-link\">\n    <a href=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.contextOrFrameLookup(context, frame, "cal_url")), env.opts.autoescape);
output += "\" class=\"btn btn-sm btn-chat\" target=\"_blank\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "cal_text")), env.opts.autoescape);
output += "</a>\n</div>\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["search_box.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div id=\"s-la-content-search-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "\" class=\"s-la-content-search s-la-content\">\n    <form method=\"get\" name=\"s-la-searchform\" id=\"s-la-searchform-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "\" action=\"/1.0/search/redirect\" target=\"_parent\" role=\"search\" aria-labelledby=\"s-la-content-search-query-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "\">\n        <input type=\"hidden\" name=\"iid\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "iid"), env.opts.autoescape);
output += "\" />\n        <input type=\"hidden\" name=\"group_id\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "la_search_opt")),"group_id"), env.opts.autoescape);
output += "\" />\n\n        <div class=\"form-group\">\n            <label for=\"s-la-content-search-query-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "\" class=\"s-la-searchform-label control-label\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "la_search_opt")),"label")), env.opts.autoescape);
output += "</label>\n            <input type=\"text\" id=\"s-la-content-search-query-";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "\" class=\"s-la-content-search-query form-control\" name=\"q\" placeholder=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "la_search_opt")),"placeholder")), env.opts.autoescape);
output += "\" value=\"\" autocomplete=\"off\"/>\n        </div>\n        <div class=\"form-group\">\n            <button class=\"btn btn-sm ";
if(runtime.contextOrFrameLookup(context, frame, "color_head") !== "" && runtime.contextOrFrameLookup(context, frame, "color_btn") !== "") {
output += "btn-default";
;
}
else {
output += "btn-primary";
;
}
output += " s-la-searchform-button\" type=\"submit\" style=\"background-color: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "color_head"), env.opts.autoescape);
output += "; border-color: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "color_head"), env.opts.autoescape);
output += "; color: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "color_btn"), env.opts.autoescape);
output += ";\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "la_search_opt")),"button")), env.opts.autoescape);
output += "</button>\n        </div>\n    </form>\n    ";
output += "\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
