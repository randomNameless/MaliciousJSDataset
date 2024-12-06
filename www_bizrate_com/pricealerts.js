BIZRATE.ProductHelper=function(){var f={},d=24,c=/\,|\$|\s/g,b;
function e(i){if(isNaN(+i)){return false
}b=false;
var h=$("#today-best-price-"+i).html()?$("#today-best-price-"+i).html():$("#price-rd-csp-"+i).html(),g=h.search(" to ");
if(g>-1){h=h.substring(0,g);
b=true
}return h
}function a(g){if(typeof g==="number"){return g
}if(typeof g!=="string"){return false
}g=g.replace(",","").match(/[0-9]+(.[0-9]{2})?/)[0];
return parseFloat(g,10)
}return{getInfo:function(l){var i,k,h,g;
if(!l){return false
}l=!isNaN(+l)?+l:this.parseId(l);
if(f[l]){return f[l]
}g=document.getElementById("title-"+l);
k=g.title;
href=g.href;
h=e(l);
i={id:l,title:k,href:href,trimmedTitle:k.substring(0,d)+"...",price:h,priceNumber:a(h),productOrOffer:(b)?"product":"offer"};
f[l]=i;
return i
},parseId:function(h,g){g=g||"-";
return h.split(g).pop()
},formatCurrency:function(h){if(isNaN(h)){return h
}var l=h.length;
h=h.split("");
h.reverse();
var k=[];
for(var g=0;
g<l;
g++){k.push(h[g]);
if(((g+1)%3==0)&&h[g+1]){k.push(",")
}}k.reverse();
return(k.join(""))
}}
}();
(function(){var c=$({});
var d=function(f,g){c.trigger(f,g)
};
var a=function(f,g){c.bind(f,g)
};
var b={USER_ID:"p13n_id",EMAIL:"email_address",CLICK_TRACK_URL:"/track/price-alerts",displayAfterRedirect:false,scrollbody:true,animationSpeed:400,priceAlertItemIds:false,active:false,disabled:false,storedEmailAddress:false,sessionBasedEmailAddress:false,envelope:{emailAddress:false,alertItemId:false,productId:false,productPrice:false,alertTargetPrice:false,notifyRelevantProduct:false},events:c,init:function(h){this.settings=$.extend({},h);
this.styles=this.settings.styles;
this.dialogEmailAddress=$(".priceAlertEmail");
this.dialogProductName=$(".priceProductName");
this.dialogProductPrice=$(".productPrice");
this.dialogProductIndex=$("#product-index");
this.dialogAlertId=$("#alertItemId");
this.dialogTargetPrice=$(".priceAlertDrop");
this.dialogEmailAddressHidden=$("#emailAddressId");
this.dialogImage=$(".pa-image");
this.paInviteType="bar";
this.notifyMe=true;
var f="";
try{BIZRATE.StaticInvite.email.value=BIZRATE.StaticInvite.email.value
}catch(i){var g=BIZRATE.StaticInvite;
g.init()
}this.fetchEmailAddress();
this.getPriceAlertPreferences();
if(typeof(BIZRATE.onDomClicked.subscribe)!=="undefined"){BIZRATE.onDomClicked.subscribe(this.onDomClicked,this,true)
}if(typeof _B!=="undefined"){_B.onDomClicked.subscribe("onDomClicked",$.proxy(this.onDomClicked,this))
}$(".setup_alert").click($.proxy(this.sendPriceSubscriptionMail,this));
this.dialogEmailAddress.focus($.proxy(this.clearEmailInputMessage,this));
this.dialogTargetPrice.focus($.proxy(this.clearPriceInputMessage,this));
if(typeof(BIZRATE.Redirect.onRedirectBlur)!=="undefined"){BIZRATE.Redirect.onRedirectBlur.subscribe(this.onRedirect,this,true)
}if(typeof _B!=="undefined"){_B.subscribe(_B.Redirect.events.redirectOpen,$.proxy(this.onRedirect,this))
}$(".notifyRelevantProduct-check").change($.proxy(this.notifyMeCheck,this))
},disable:function(){this.disabled=true
},fetchEmailAddress:function(){var h=$("#emailAddressId").val();
var g=BIZRATE.getCookie(this.USER_ID);
var f=BIZRATE.getCookie(this.EMAIL);
if((g!=null&&g!="")&&(h==null||h=="")){this.getEmailAddress()
}},setStoredEmailAddress:function(f){this.sessionBasedEmailAddress=f;
this.dialogEmailAddress.filter("input").val(this.sessionBasedEmailAddress);
this.dialogEmailAddress.not("input").html(this.sessionBasedEmailAddress)
},isCurrentUser:function(){return(this.storedEmailAddress===this.sessionBasedEmailAddress)
},onDomClicked:function(i,g){var k,h,f;
if($.isArray(g)){k=g[0].target;
h=YUE.getXY(g[0].event)
}else{k=g.target;
h=[g.pageX,g.pageY]
}if(k.className==="price-alert-link"){this.onPriceAlertClick({target:k});
$(".price-alert-modal-dialog").data("dialogue").close();
return
}if(k.className.indexOf("price-alert-icon")!==-1){this.onGridIconClick({target:k});
$(".price-alert-modal-dialog").data("dialogue").close();
return
}if(k.className==="pa-dialog-close"){this.closeLightbox()
}if(!this.active){return true
}if($("#price-alert-modal-dialog").length>0){f={top:$("#price-alert-modal-dialog").offset().top+10,left:$("#price-alert-modal-dialog").offset().left+10,right:$("#price-alert-modal-dialog").offset().left+$("#price-alert-modal-dialog").outerWidth()+10,bottom:$("#price-alert-modal-dialog").offset().top+$("#price-alert-modal-dialog").outerHeight()+10}
}if(BIZRATE.isMouseOut(h,f)){this.closeLightbox()
}},onPriceAlertClick:function(v,n){if(this.disabled){return
}var i=$(v.target),g=BIZRATE.ProductHelper.getInfo(i.attr("id")),t=g.id,w=g.price,h=g.title,y=1,x=g.href,q=parseFloat(g.priceNumber-y).toFixed(2),r=g.productOrOffer+"-"+g.id,p=g.priceNumber,o=this.getTargetPriceDefault(p).replace(/,|\$/g,""),m=$("priceAlertEmail"),s=i.parents("table"),f=i.closest(".product"),u=s.length?s:f,k=u.find("img"),l={imageSrc:k.attr("src"),name:h,href:x,price:w,id:t,alertId:r,defaultTargetPrice:o};
this.sessionBasedEmailAddress=(this.storedEmailAddress!==false)?this.storedEmailAddress:m.val()||"";
this.updateDialogData(l);
if(!n){$.ajax({url:this.CLICK_TRACK_URL,method:"get",dataType:"json"});
this.openLightbox()
}return true
},onGridIconClick:function(g,k){if(this.disabled){return
}var h=$(g.target),q=h.closest(".product"),i=q.find(".product-image"),m=q.find(".product-title").text(),n=q.find(".product-link").attr("href"),r=q.find(".price").text().replace(",","").match(/[0-9]+(.[0-9]{2})?/)[0],l=h.attr("data-pid"),f=h.attr("data-type")+"-"+l,o=this.getTargetPriceDefault(parseFloat(r,10)).replace(/,|\$/g,""),p={imageSrc:i.attr("src"),name:m,href:n,price:"$"+r,priceNumber:r,id:l,alertId:f,defaultTargetPrice:o};
this.updateDialogData(p);
if(!k){$.ajax({url:this.CLICK_TRACK_URL,method:"get",dataType:"json"});
if(!(h.hasClass("price-alert-icon-set"))){this.openLightbox()
}}return true
},updateDialogData:function(f){if(!$("#price-alert-csp-dialog").length&&f.imageSrc){this.dialogImage.attr("src",f.imageSrc.replace(/sq=\d+/,"sq=200"));
this.paInviteType="overlay"
}this.settings.trimLength=24;
if(f.name.length>this.settings.trimLength){f.name=f.name.substring(0,this.settings.trimLength)+"..."
}this.dialogProductName.html(f.name);
this.dialogProductName.attr("href",f.href).attr("target","_blank");
this.dialogProductPrice.html(f.price);
this.dialogProductIndex.val(f.id);
this.dialogAlertId.val(f.alertId);
this.dialogTargetPrice.filter("input").val(f.defaultTargetPrice).attr("placeholder",f.defaultTargetPrice);
this.dialogTargetPrice.not("input").html(f.defaultTargetPrice);
if(typeof this.sessionBasedEmailAddress==="string"&&this.sessionBasedEmailAddress.indexOf("@")!==-1){this.dialogEmailAddress.filter("input").val(this.sessionBasedEmailAddress);
this.dialogEmailAddress.not("input").html(this.sessionBasedEmailAddress)
}$.extend(this.envelope,{emailAddress:f.email,alertItemId:f.alertId,productId:f.id,productPrice:f.priceNumber,alertTargetPrice:f.defaultTargetPrice,notifyRelevantProduct:this.notifyMe})
},getTargetPriceDefault:function(l){var m=l;
var k;
if(m>1){m=m-1;
k=m.toString();
if(k.indexOf(".")>-1){m=parseFloat(m).toFixed(2)
}else{m+=".00"
}}else{m=""
}if(m>=1000){var f=m.split(".");
var i=f[0];
var g=f.length>1?"."+f[1]:"";
var h=/(\d+)(\d{3})/;
while(h.test(i)){i=i.replace(h,"$1,$2")
}m=i+g
}return m
},onRedirect:function(m,n){if(!n||this.disabled){return false
}var k=true,f=$(n[0].target[0]),q=f.parents("table"),o=f.closest(".product"),l=q.length?q:o,i=l.attr("oid"),n=$("#price-alert-"+i)[0],h=l.find("img"),p=f.hasClass("modalPopup");
if($("#price-alert-modal-dialog").length){this.dialogImage.attr("src",h.attr("src").replace(/sq=\d+/,"sq=200"));
this.paInviteType="overlay"
}else{this.dialogImage.attr("src",h.attr("src"));
this.paInviteType="bar"
}var g=$("#display-after-redirect").val()=="true";
if(n&&g&&!p){BIZRATE.PriceAlerts.displayAfterRedirect=true;
d("priceAlertIncomplete")
}else{BIZRATE.PriceAlerts.displayAfterRedirect=false
}$(".dh-wrapper").css("display","none");
if(l.closest(".grid").length){this.onGridIconClick({target:n},k)
}else{this.onPriceAlertClick({target:n},k)
}},notifyMeCheck:function(f){var g=f.target;
if(g&&g.checked){document.getElementById("notifyRelevantProduct-check").checked=true;
this.notifyMe=true
}else{document.getElementById("notifyRelevantProduct-check").checked=false;
this.notifyMe=false
}},clearFocus:function(f){$(f.target).removeClass("error")
},openLightbox:function(){this.active=true;
var f=$(".price-alert-modal-dialog");
priceAlertType=f.attr("id");
f.removeClass("pa-alert-set");
$(".dh-wrapper").css("display","none");
f.dialogue("open");
f.css({display:block})
},closeLightbox:function(){this.active=false;
$(".dh-wrapper .wrapper").empty();
$(".dh-wrapper").css("display","none");
var f=$(".price-alert-modal-dialog");
priceAlertType=f.attr("id");
f.dialogue("close")
},clearEmailInputMessage:function(){this.dialogEmailAddress.removeClass("error");
try{document.getElementById("email-error").style.display="none"
}catch(f){}},clearPriceInputMessage:function(){this.dialogTargetPrice.removeClass("error");
try{document.getElementById("priceDropError").style.display="none";
document.getElementById("priceDropNumberError").style.display="none";
document.getElementById("priceDropValueError").style.display="none"
}catch(f){}},sendPriceSubscriptionMail:function(y){var f=$(y.target);
var o=(f.hasClass("redirect-dialog"));
var t=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/ig;
var g=/^\d*\.?\d+$/;
var k=/^\d+(\.\d{0,2})?$/;
var B=this.isCurrentUser();
var v=this.envelope.emailAddress=(!o)?document.getElementById("pa-emailAddress-txt").value:document.getElementById("pa-emailAddress-txt-redirect").value;
var C=this.envelope.productId;
var r=this.envelope.alertItemId;
var x=this.envelope.alertTargetPrice=(!o)?document.getElementById("pa-price-txt").value:document.getElementById("pa-price-txt-redirect").value;
var q=this.envelope.productPrice;
var z;
var m=true;
var h=true;
var s=true;
var p=true;
var D=(x.split(".")[1]==="undefined"||x.split(".")[1]===undefined)?BIZRATE.ProductHelper.formatCurrency($.trim(x))+".00":BIZRATE.ProductHelper.formatCurrency(x.split(".")[0])+"."+x.split(".")[1];
if(!g.test(x)){var A=document.getElementById("priceDropNumberError");
if(A){A.style.display="block";
A.innerHTML="Oops, please use numeric values only."
}m=false;
d("priceDropNumberError")
}if(m&&!k.test(x)){var u=document.getElementById("priceDropError");
if(u){u.style.display="block";
u.innerHTML="Oops, cents should only have two decimal points."
}h=false;
d("priceDropError")
}if((m&&h)&&(parseFloat(x)>=parseFloat(q))){var n=document.getElementById("priceDropValueError");
if(n){n.style.display="block";
n.innerHTML="Oops, alert price should be less than today's best price."
}s=false;
d("priceDropValueError")
}if(parseFloat(x)==0){var w=document.getElementById("priceDropValueError");
if(w){w.style.display="block";
w.innerHTML="Oops, alert price should be greater than 0."
}s=false;
d("priceDropValueError")
}if(!t.test(v)){var i=document.getElementById("email-error");
if(i){i.style.display="block";
i.innerHTML="Oops, the email address is not valid."
}p=false;
d("emailError")
}if(!(m&&h&&s&&p)){return false
}this.dialogTargetPrice.filter("input").val(D);
this.dialogTargetPrice.not("input").html("$"+D);
this.dialogEmailAddress.filter("input").val(v);
this.dialogEmailAddress.not("input").html(v);
this.envelope.alertTargetPrice=this.getCents(this.envelope.alertTargetPrice);
d("priceAlertsBeforeSubmit");
if(!B){if(p){this.dialogEmailAddressHidden.val(v);
var l=this.envelope.notifyRelevantProduct=this.notifyMe;
this.isPriceAlertUserExist(v,l);
d("priceAlertTransmitting");
setTimeout($.proxy(function(){z=this.envelope;
if(o){$.extend(z,{paInviteType:this.paInviteType})
}this.send({data:$.param(z)})
},this),3000);
currentId=this.envelope.productId;
this.getPriceAlertPreferences()
}}else{d("priceAlertTransmitting");
z=this.envelope;
if(o){$.extend(z,{paInviteType:this.paInviteType})
}this.send({data:$.param(z)});
currentId=this.envelope.productId
}},getCents:function(h){var k=h+"";
var g=k.split(".");
var l=g[0];
var f="";
if(g.length>1){var i=g[1];
if(i.length==1){f=""+l+i+"0"
}else{f=""+l+i.substring(0,2)
}}else{f=l+"00"
}return f
},applyPriceAlert:function(k,g){var f=$(".price-alert-"+k);
var i=BIZRATE.getCookie(this.USER_ID);
if(i!=null&&i!=""){i=i.replace(/[^A-Za-z0-9-]/g,"").slice(0,36)
}var h='<div id="price-alert"><span class="price-alert-set-icon"></span><span class="price-alert-settext"><a href="/email/manage-subscriptions/'+i+'?target=manage" target="_blank" class="manage-alert-link">Manage Alert</a></span></div>';
if(!g){g="/email/manage-subscriptions/"+i+"?target=manage"
}if(f.length>0){if(f.first().is("a")){f.addClass("price-alert-icon-set").attr("href",g);
f.next(".price-alert-tip").addClass("price-alert-tip-set")
}else{f.replaceWith(h)
}}},isPriceAlertUserExist:function(h,f){var g="/email/checkExistingUserAccount/"+h;
this.getTransportModule(g,function(i){if(i!=null&&i=="false"&&f){BIZRATE.StaticInvite.email.value=h;
BIZRATE.StaticInvite.submitForm(undefined,true,true)
}})
},getEmailAddress:function(){var f="/email/fetchEmailAddress";
var g=function(h){if(h){this.setStoredEmailAddress(h.toString())
}else{this.storedEmailAddress=false
}};
this.getTransportModule(f,$.proxy(g,this))
},getPriceAlertPreferences:function(){var f="/email/fetchPriceAlertsPreferences";
var g=function(k){if(k){k=k.substring(0,k.length-1);
var h=k.split(",");
this.events.trigger("priceAlertsFound",[h]);
for(j=0;
j<h.length;
j++){var i=h[j];
this.applyPriceAlert(i)
}}};
this.getTransportModule(f,$.proxy(g,this))
},send:function(g){var h={url:"/email/storePriceAlert",cache:false,type:"POST",context:this,success:function(i){d("priceAlertSendComplete",i)
}};
var f=$.extend({},h,g);
$.ajax(f)
},getTransportModule:function(f,k,g,h){g=(g)?g:"GET";
h=(h)?h:"json";
var i=$.ajax({type:g,url:f,cache:false,dataType:h,success:k,complete:function(l){}});
return i
}};
var e=function(){$(".priceAlertDrop").addClass("error")
};
a("priceDropValueError",e);
a("priceDropNumberError",e);
a("priceDropError",e);
a("emailError",function(f,g){$(".pa-emailAddress-txt").addClass("error")
});
a("priceAlertSendComplete",function(f,g){$(".price-alert-widget-dialog").removeClass("price-alert-transmitting").addClass("pa-alert-set");
$(".manage-price-alerts").attr("href",g).attr("target","_blank");
if(currentId!=""){BIZRATE.PriceAlerts.applyPriceAlert(currentId,g)
}if($(".signup_popup").length){$(".price-alert-widget-dialog").animate({top:"30%"},"slow");
$(".dh-wrapper").slideDown()
}});
a("priceAlertTransmitting",function(f,g){$(".price-alert-widget-dialog").addClass("price-alert-transmitting")
});
a("priceAlertIncomplete",function(f,g){$(".price-alert-widget-dialog").removeClass("pa-alert-set")
});
BIZRATE.PriceAlerts=b;
$(document).ready($.proxy(BIZRATE.PriceAlerts.init,BIZRATE.PriceAlerts))
})();
$(document).ready(function(){function a(){var b=document.createElement("input");
if("placeholder" in b){return true
}else{return false
}}if(!a()){$(this).find("[placeholder]").each(function(){$(this).val($(this).attr("placeholder"))
});
$("[placeholder]").focus(function(){if($(this).val()===$(this).attr("placeholder")){$(this).val("");
$(this).removeClass("placeholder")
}}).blur(function(){if($(this).val()===""||$(this).val()===$(this).attr("placeholder")){$(this).val($(this).attr("placeholder"));
$(this).addClass("placeholder")
}});
$("[placeholder]").closest("form").submit(function(){$(this).find("[placeholder]").each(function(){if($(this).val()===$(this).attr("placeholder")){$(this).val("")
}})
})
}});