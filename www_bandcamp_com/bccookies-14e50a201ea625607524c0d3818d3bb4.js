!function(){"use strict";var e=Object.defineProperty,i=(i,t,a)=>((i,t,a)=>t in i?e(i,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[t]=a)(i,"symbol"!=typeof t?t+"":t,a);const t={CookieAllowlist:{COOKIE_PREF_NAME:"cookie_preferences",DEFAULT:["cookie_preferences","identity","tempidentity","twofactor","BACKENDID","BACKENDID3","gcfm","csrf_token","cart_client_id","playlimit_client_id","privatestream_client_id",{pattern:"^_comm_.+$"},"download_encoding","hide_autocancel_warning_one","hide_live_chat_welcome_2","hide_unseen_notification_indicator","logout","js_logged_in","label",{pattern:"^live_onboarding_.+$"},{pattern:"^live_testing_tips_.+$"},"menubar_active_band","mvp","newsletter_invite_dismissed","payments","rock_the_vote_dismissed","stats2_downloads","stats2_embeddedplays","stats2_plays","stats2_map","stats2_visits","tos_dismissed_2022","tos_dismissed_2024","tos_dismissed_2024_11","volume","shopify_install_band_id","shopify_app_session","shopify_shop_already_synced","dismiss_tralbum_editor_banners","bc_webapp","bc_webapp3","impersonate_user_id","bc_downloader_disable_test","bc_downloader_force_cdn","irbc-session-cookie","resent_mail_ids","PlayerDebugLog","sharedebug","cookie_prerelease"],ANALYTICAL:["client_id","session","unique_24h","unique_forever","analytics_processed_ids","fan_visits"]},BandcampTeamList:{TEAMS:["data","fraud","growth","mobile","payments","platform","seller-tools","subscriptions"]}};for(const[e,i]of Object.entries(t))for(const[e,t]of Object.entries(i))Array.isArray(t)&&t.forEach(((e,i)=>{("object"==typeof e&&"function"!=typeof Object.hasOwn&&e.hasOwnProperty("pattern")||"object"==typeof e&&Object.hasOwn(e,"pattern"))&&(t[i]=new RegExp(e.pattern))}));const a=t.CookieAllowlist;var s=Object.defineProperty,r=(e,i,t)=>((e,i,t)=>i in e?s(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t)(e,"symbol"!=typeof i?i+"":i,t);function o(e,i){if(!e)throw new Error("CrossFrame is not available in non-browser contexts like SSR");const t=new URL(i),a=e.location;if(t.protocol!==a.protocol||t.port!==a.port||t.hostname!==a.hostname&&!t.hostname.endsWith("."+a.hostname)&&!a.hostname.endsWith("."+t.hostname))throw new Error("Cannot handle cross-frame messages to/from unrelated origin ".concat(t.protocol,"//").concat(t.host,". Current origin: ").concat(a.protocol,"//").concat(a.host))}globalThis.bandcampdotcomSiteroot||(globalThis.bandcampdotcomSiteroot=new class{constructor(){r(this,"roots")}init(e){this.roots=e}ensureRoots(){if(!this.roots)throw new Error("Siteroot.init has not been called yet");return this.roots}get main(){return this.ensureRoots().main}get static(){const e=this.ensureRoots();return e.static||e.main}get image(){const e=this.ensureRoots();return e.image||e.static||e.main}});const n=[{id:0,name:"original",resize_algo:"original",file_format:null},{id:1,name:"fullsize",resize_algo:"scrub",file_format:"original"},{id:2,name:"art_thumb",resize_algo:"thumb",width:350,height:350,file_format:"JPEG"},{id:3,name:"art_thumbthumb",resize_algo:"thumb",width:100,height:100,file_format:"JPEG"},{id:4,name:"art_embedded_metadata",resize_algo:"thumb",width:300,height:300,file_format:"JPEG"},{id:5,name:"art_embedded_metadata_large",resize_algo:"thumb",width:700,height:700,file_format:"JPEG"},{id:6,name:"art_embedded_player",resize_algo:"thumb",width:100,height:100,file_format:"JPEG"},{id:7,name:"art_embedded_player_large",resize_algo:"thumb",width:150,height:150,file_format:"JPEG"},{id:8,name:"art_tags",resize_algo:"thumb",width:124,height:124,file_format:"JPEG"},{id:9,name:"art_tags_large",resize_algo:"thumb",width:210,height:210,file_format:"JPEG"},{id:10,name:"screen",resize_algo:"fit",width:1200,height:1200,file_format:"JPEG"},{id:11,name:"art_tag_search",resize_algo:"thumb",width:172,height:172,file_format:"JPEG"},{id:12,name:"art_artist_index",resize_algo:"thumb",width:138,height:138,file_format:"JPEG"},{id:13,name:"art_solo_feature",resize_algo:"thumb",width:380,height:380,file_format:"JPEG"},{id:14,name:"art_feature",resize_algo:"thumb",width:368,height:368,file_format:"JPEG"},{id:15,name:"art_feed_new_release",resize_algo:"thumb",width:135,height:135,file_format:"JPEG"},{id:16,name:"art_app_large",resize_algo:"thumb",width:700,height:700,file_format:"JPEG",quality:70,minsize:{size:3e4,format:5}},{id:20,name:"bio_screen",resize_algo:"fit",width:1024,height:1024,file_format:"JPEG"},{id:21,name:"bio_thumb",resize_algo:"fit",width:120,height:180,file_format:"JPEG"},{id:22,name:"bio_navbar",resize_algo:"thumb",width:25,height:25,file_format:"JPEG"},{id:23,name:"bio_phone",resize_algo:"fit",width:300,height:300,file_format:"JPEG"},{id:24,name:"bio_licensing",resize_algo:"thumb",width:300,height:300,file_format:"JPEG"},{id:25,name:"bio_app",resize_algo:"fit",width:700,height:700,file_format:"JPEG",quality:70},{id:26,name:"bio_subscribe",resize_algo:"thumb",width:800,height:600,file_format:"JPEG"},{id:27,name:"bio_subscribe2",resize_algo:"thumb",width:715,height:402,file_format:"JPEG"},{id:28,name:"bio_featured",resize_algo:"thumb",width:768,height:432,file_format:"JPEG"},{id:29,name:"bio_autocomplete",resize_algo:"thumb",width:100,height:75,file_format:"JPEG"},{id:31,name:"package_screen",resize_algo:"fit",width:1024,height:1024,file_format:"original"},{id:32,name:"package_solo_feature",resize_algo:"thumb",width:380,height:285,file_format:"JPEG"},{id:33,name:"package_feature",resize_algo:"thumb",width:368,height:276,file_format:"JPEG"},{id:36,name:"package_page",resize_algo:"thumb",width:400,height:300,file_format:"JPEG"},{id:37,name:"package_thumb",resize_algo:"thumb",width:168,height:126,file_format:"JPEG"},{id:38,name:"package_thumb_small",resize_algo:"thumb",width:144,height:108,file_format:"JPEG"},{id:41,name:"fan_bio_thumb",resize_algo:"thumb",width:210,height:210,file_format:"JPEG"},{id:42,name:"fan_bio_thumb_small",resize_algo:"thumb",height:50,width:50,file_format:"JPEG"},{id:43,name:"fan_banner",resize_algo:"fit",height:100,width:99999,file_format:"JPEG"},{id:44,name:"fan_banner_2x",resize_algo:"fit",height:200,width:99999,file_format:"JPEG"},{id:50,name:"results_grid",resize_algo:"thumb",width:140,height:140,file_format:"JPEG"},{id:65,name:"tralbum_page_cover_art",resize_algo:"thumb",width:700,height:700,file_format:"JPEG",quality:70,minsize:{size:3e4,format:69},anim_ok:!0},{id:66,name:"tralbum_page_cover_art_popup",resize_algo:"fit",width:1200,height:1200,file_format:"JPEG",anim_ok:!0},{id:67,name:"art_thumb_anim_ok",resize_algo:"thumb",width:350,height:350,file_format:"JPEG",anim_ok:!0},{id:68,name:"art_tags_large_anim_ok",resize_algo:"thumb",width:210,height:210,file_format:"JPEG",anim_ok:!0},{id:69,name:"art_embedded_metadata_large_anim_ok",resize_algo:"thumb",width:700,height:700,file_format:"JPEG",anim_ok:!0},{id:70,name:"tralbum_page_package_small",resize_algo:"fit",width:360,height:270,file_format:"JPEG",mozjpeg:!0},{id:71,name:"tralbum_page_package_large",resize_algo:"fit",width:720,height:540,file_format:"JPEG",mozjpeg:!0},{id:100,name:"custom_header_desktop",resize_algo:"thumb",width:975,max_height:180,file_format:"original",allow_transparency:!0},{id:101,name:"custom_header_paypal",resize_algo:"fit",width:750,height:90,file_format:"JPEG"},{id:120,name:"custom_header_phone",resize_algo:"thumb",width:640,max_height:124,file_format:"JPEG"},{id:130,name:"design_background",resize_algo:"scrub",file_format:"JPEG"},{id:140,name:"subscribe_message",resize_algo:"thumb",width:60,height:45,file_format:"JPEG"},{id:150,name:"video_landscape",resize_algo:"thumb",width:1280,height:720,file_format:"JPEG"},{id:151,name:"video_portrait",resize_algo:"thumb",width:720,height:1280,file_format:"JPEG"},{id:160,name:"buy_full_email_thumb_montage",resize_algo:"thumb_crop",width:60,height:100,left:40,top:0,file_format:"JPEG"},{id:161,name:"buy_full_email_thumb_montage_release",resize_algo:"thumb_crop",width:40,height:80,left:40,top:0,file_format:"JPEG",quality:100},{id:165,name:"ppp_email_gift_thumb",resize_algo:"thumb_composite",overlay_image:"public/img/banner_email.png",x_offset:92,y_offset:0,width:210,height:210,file_format:"JPEG",quality:100},{id:170,name:"weekly_mobile_web",resize_algo:"fit",width:750,height:422,file_format:"JPEG"},{id:171,name:"weekly_desktop",resize_algo:"fit",width:1244,height:646,file_format:"JPEG"},{id:180,name:"bcdaily_homepage_big",resize_algo:"fit",width:1244,height:646,file_format:"JPEG",anim_ok:!0},{id:200,name:"mobile_fan_banner_ios_3x",resize_algo:"fit",width:1125,height:420,file_format:"JPEG"},{id:201,name:"mobile_fan_banner_ios_2x",resize_algo:"fit",width:750,height:280,file_format:"JPEG"},{id:202,name:"mobile_fan_banner_ios_1x",resize_algo:"fit",width:375,height:140,file_format:"JPEG"},{id:203,name:"mobile_fan_banner_android_xxxhdpi",resize_algo:"fit",width:1125,height:420,file_format:"JPEG"},{id:204,name:"mobile_fan_banner_android_xxhdpi",resize_algo:"fit",width:960,height:360,file_format:"JPEG"},{id:205,name:"mobile_fan_banner_android_xhdpi",resize_algo:"fit",width:640,height:240,file_format:"JPEG"},{id:206,name:"mobile_fan_banner_android_hdpi",resize_algo:"fit",width:480,height:180,file_format:"JPEG"},{id:207,name:"mobile_fan_banner_android_mdpi",resize_algo:"fit",width:320,height:120,file_format:"JPEG"},{id:220,name:"newsletter_artist_feature",resize_algo:"thumb",width:900,height:468,file_format:"JPEG"},{id:300,name:"grayscale_thumb",resize_algo:"thumb",width:350,height:350,file_format:"JPEG",filter:"grayscale"}],l={};for(const e of n)l[e.id]=e,l[e.name]=e;Object.freeze(l);const c={USD:{places:2,prefix:"$"},AUD:{places:2,prefix:"$"},GBP:{places:2,prefix:"£"},CAD:{places:2,prefix:"$"},CZK:{places:2,prefix:""},DKK:{places:2,prefix:""},EUR:{places:2,prefix:"€"},HKD:{places:2,prefix:"$"},HUF:{places:0,prefix:""},ILS:{places:2,prefix:"₪"},JPY:{places:0,prefix:"¥"},MXN:{places:2,prefix:"$"},NZD:{places:2,prefix:"$"},NOK:{places:2,prefix:""},PLN:{places:2,prefix:""},SGD:{places:2,prefix:"$"},SEK:{places:2,prefix:""},CHF:{places:2,prefix:""},ALL:{places:2,prefix:""},DZD:{places:2,prefix:""},XCD:{places:2,prefix:""},ARS:{places:2,prefix:""},AWG:{places:2,prefix:""},SHP:{places:2,prefix:""},BSD:{places:2,prefix:""},BHD:{places:2,prefix:""},BDT:{places:2,prefix:""},BBD:{places:2,prefix:""},BZD:{places:2,prefix:""},XOF:{places:2,prefix:""},BMD:{places:2,prefix:""},BTN:{places:2,prefix:""},BOB:{places:2,prefix:""},BWP:{places:2,prefix:""},BRL:{places:2,prefix:""},BND:{places:2,prefix:""},BIF:{places:2,prefix:""},KHR:{places:2,prefix:""},XAF:{places:2,prefix:""},CVE:{places:2,prefix:""},KYD:{places:2,prefix:""},CLP:{places:2,prefix:""},CNY:{places:2,prefix:""},COP:{places:2,prefix:""},KMF:{places:2,prefix:""},CRC:{places:2,prefix:""},HRK:{places:2,prefix:""},ANG:{places:2,prefix:""},DJF:{places:2,prefix:""},DOP:{places:2,prefix:""},EGP:{places:2,prefix:""},ETB:{places:2,prefix:""},FKP:{places:2,prefix:""},XPF:{places:2,prefix:""},GMD:{places:2,prefix:""},GIP:{places:2,prefix:""},GTQ:{places:2,prefix:""},GNF:{places:2,prefix:""},GYD:{places:2,prefix:""},HTG:{places:2,prefix:""},HNL:{places:2,prefix:""},RUP:{places:2,prefix:""},ISK:{places:2,prefix:""},INR:{places:2,prefix:""},IDR:{places:2,prefix:""},IQD:{places:2,prefix:""},JMD:{places:2,prefix:""},JOD:{places:2,prefix:""},KZT:{places:2,prefix:""},KES:{places:2,prefix:""},KWD:{places:2,prefix:""},LAK:{places:2,prefix:""},LBP:{places:2,prefix:""},LSL:{places:2,prefix:""},LRD:{places:2,prefix:""},LYD:{places:2,prefix:""},MOP:{places:2,prefix:""},MKD:{places:2,prefix:""},MWK:{places:2,prefix:""},MYR:{places:2,prefix:""},MVR:{places:2,prefix:""},MRU:{places:2,prefix:""},MUR:{places:2,prefix:""},MDL:{places:2,prefix:""},MNT:{places:2,prefix:""},MAD:{places:2,prefix:""},MMK:{places:2,prefix:""},NAD:{places:2,prefix:""},NPR:{places:2,prefix:""},NIO:{places:2,prefix:""},NGN:{places:2,prefix:""},KPW:{places:2,prefix:""},OMR:{places:2,prefix:""},PKR:{places:2,prefix:""},PAB:{places:2,prefix:""},PGK:{places:2,prefix:""},PYG:{places:2,prefix:""},PEN:{places:2,prefix:""},PHP:{places:2,prefix:""},QAR:{places:2,prefix:""},RUB:{places:2,prefix:""},WST:{places:2,prefix:""},STD:{places:2,prefix:""},SAR:{places:2,prefix:""},SCR:{places:2,prefix:""},SLL:{places:2,prefix:""},SBD:{places:2,prefix:""},SOS:{places:2,prefix:""},ZAR:{places:2,prefix:""},KRW:{places:2,prefix:""},LKR:{places:2,prefix:""},SZL:{places:2,prefix:""},SYP:{places:2,prefix:""},TWD:{places:2,prefix:""},TZS:{places:2,prefix:""},THB:{places:2,prefix:""},TOP:{places:2,prefix:""},TTD:{places:2,prefix:""},TND:{places:2,prefix:""},TRY:{places:2,prefix:""},UGX:{places:2,prefix:""},UAH:{places:2,prefix:""},AED:{places:2,prefix:""},UYU:{places:2,prefix:""},VUV:{places:2,prefix:""},YER:{places:2,prefix:""},ZMW:{places:2,prefix:""}};r(class e{constructor(e,i){r(this,"is_money",!0),r(this,"amount"),r(this,"currency");let t=0;if(i?t=e:(t=e.amount,i=e.currency),"number"!=typeof t||t%1!=0)throw new Error("invalid amount");if("string"!=typeof i||3!==i.length)throw new Error("invalid currency");this.is_money=!0,this.amount=t,this.currency=i}add(i){if(!i.is_money)throw new Error("type mismatch");if(i.currency!==this.currency)throw new Error("currency mismatch");return new e(this.amount+i.amount,this.currency)}subtract(i){if(!i.is_money)throw new Error("type mismatch");if(i.currency!==this.currency)throw new Error("currency mismatch");return new e(this.amount-i.amount,this.currency)}negate(){return new e({amount:-1*this.amount,currency:this.currency})}scaleAndRound(i){const t=c[this.currency].places;return new e(Math.round(Math.pow(10,2-t)*Math.round(i*this.amount*Math.pow(10,t-2))),this.currency)}format(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6;const t=this.amount/100,a=this.currency,s=c[a];let r=s.places;t===Math.round(t)?(2===i||7===i||9===i)&&(r=0):0===r&&(r=2);let o=t.toFixed(r);return 5!==i&&8!==i&&9!==i&&(o=e.commafyNumber(o)),4===i&&"-"===o[0]&&(o="("+o.substr(1)+")"),1===i||2===i?o=s.prefix+o:(6===i||7===i)&&(o=s.prefix+" "+o),5===i&&(o=Array(8-o.length).join(" ")+o),o}static commafyNumber(e){const i=this.separators,t=e.split(i.decimal);let a=t[0];const s=t[1]?i.decimal+t[1]:"";let r=!1;if("0"===a&&!s)return"0";"-"===a.substr(0,1)&&(a=a.substr(1),r=!0);const o=a.length;let n="",l=0;for(;(o-l)%3>0;)n+=a.substr(l,1),l++;for(n.length>0&&o-l>0&&(n+=i.thousands);o-l>3;)n+=a.substr(l,3)+i.thousands,l+=3;return o-l>0&&(n+=a.substr(l)),(r?"-":"")+n+s}static get separators(){return this._separators||(1.2.toFixed(1).indexOf(".")>=0?this._separators={decimal:".",thousands:","}:this._separators={decimal:",",thousands:"."}),this._separators}},"_separators");const h={Á:"A",Ă:"A",Ắ:"A",Ặ:"A",Ằ:"A",Ẳ:"A",Ẵ:"A",Ǎ:"A",Â:"A",Ấ:"A",Ậ:"A",Ầ:"A",Ẩ:"A",Ẫ:"A",Ä:["A","AE"],Ǟ:"A",Ȧ:"A",Ǡ:"A",Ạ:"A",Ȁ:"A",À:"A",Ả:"A",Ȃ:"A",Ā:"A",Ą:"A",Å:["A","AA"],Ǻ:"A",Ḁ:"A",Ⱥ:"A",Ã:"A",Ꜳ:"AA",Æ:"[AE,E]",Ǽ:"AE",Ǣ:"AE",Ꜵ:"AO",Ꜷ:"AU",Ꜹ:"AV",Ꜻ:"AV",Ꜽ:"AY",Ḃ:"B",Ḅ:"B",Ɓ:"B",Ḇ:"B",Ƀ:"B",Ƃ:"B",Ć:"C",Č:"C",Ç:"C",Ḉ:"C",Ĉ:"C",Ċ:"C",Ƈ:"C",Ȼ:"C",Ď:"D",Ḑ:"D",Ḓ:"D",Ḋ:"D",Ḍ:"D",Ɗ:"D",Ḏ:"D",ǲ:"D",ǅ:"D",Đ:"D",Ƌ:"D",Ǳ:"DZ",Ǆ:"DZ",É:"E",Ĕ:"E",Ě:"E",Ȩ:"E",Ḝ:"E",Ê:"E",Ế:"E",Ệ:"E",Ề:"E",Ể:"E",Ễ:"E",Ḙ:"E",Ë:"E",Ė:"E",Ẹ:"E",Ȅ:"E",È:"E",Ẻ:"E",Ȇ:"E",Ē:"E",Ḗ:"E",Ḕ:"E",Ę:"E",Ɇ:"E",Ẽ:"E",Ḛ:"E",Ꝫ:"ET",Ḟ:"F",Ƒ:"F",Ǵ:"G",Ğ:"G",Ǧ:"G",Ģ:"G",Ĝ:"G",Ġ:"G",Ɠ:"G",Ḡ:"G",Ǥ:"G",Ḫ:"H",Ȟ:"H",Ḩ:"H",Ĥ:"H",Ⱨ:"H",Ḧ:"H",Ḣ:"H",Ḥ:"H",Ħ:"H",Í:"I",Ĭ:"I",Ǐ:"I",Î:"I",Ï:"I",Ḯ:"I",İ:"I",Ị:"I",Ȉ:"I",Ì:"I",Ỉ:"I",Ȋ:"I",Ī:"I",Į:"I",Ɨ:"I",Ĩ:"I",Ḭ:"I",Ꝺ:"D",Ꝼ:"F",Ᵹ:"G",Ꞃ:"R",Ꞅ:"S",Ꞇ:"T",Ꝭ:"IS",Ĵ:"J",Ɉ:"J",Ḱ:"K",Ǩ:"K",Ķ:"K",Ⱪ:"K",Ꝃ:"K",Ḳ:"K",Ƙ:"K",Ḵ:"K",Ꝁ:"K",Ꝅ:"K",Ĺ:"L",Ƚ:"L",Ľ:"L",Ļ:"L",Ḽ:"L",Ḷ:"L",Ḹ:"L",Ⱡ:"L",Ꝉ:"L",Ḻ:"L",Ŀ:"L",Ɫ:"L",ǈ:"L",Ł:"L",Ǉ:"LJ",Ḿ:"M",Ṁ:"M",Ṃ:"M",Ɱ:"M",Ń:"N",Ň:"N",Ņ:"N",Ṋ:"N",Ṅ:"N",Ṇ:"N",Ǹ:"N",Ɲ:"N",Ṉ:"N",Ƞ:"N",ǋ:"N",Ñ:"N",Ǌ:"NJ",Ó:"O",Ŏ:"O",Ǒ:"O",Ô:"O",Ố:"O",Ộ:"O",Ồ:"O",Ổ:"O",Ỗ:"O",Ö:["O","OE"],Ȫ:"O",Ȯ:"O",Ȱ:"O",Ọ:"O",Ő:"O",Ȍ:"O",Ò:"O",Ỏ:"O",Ơ:"O",Ớ:"O",Ợ:"O",Ờ:"O",Ở:"O",Ỡ:"O",Ȏ:"O",Ꝋ:"O",Ꝍ:"O",Ō:"O",Ṓ:"O",Ṑ:"O",Ɵ:"O",Ǫ:"O",Ǭ:"O",Ø:["O","OE"],Ǿ:"O",Õ:"O",Ṍ:"O",Ṏ:"O",Ȭ:"O",Ƣ:"OI",Ꝏ:"OO",Ɛ:"E",Ɔ:"O",Ȣ:"OU",Ṕ:"P",Ṗ:"P",Ꝓ:"P",Ƥ:"P",Ꝕ:"P",Ᵽ:"P",Ꝑ:"P",Ꝙ:"Q",Ꝗ:"Q",Ŕ:"R",Ř:"R",Ŗ:"R",Ṙ:"R",Ṛ:"R",Ṝ:"R",Ȑ:"R",Ȓ:"R",Ṟ:"R",Ɍ:"R",Ɽ:"R",Ꜿ:"C",Ǝ:"E",Ś:"S",Ṥ:"S",Š:"S",Ṧ:"S",Ş:"S",Ŝ:"S",Ș:"S",Ṡ:"S",Ṣ:"S",Ṩ:"S",Ť:"T",Ţ:"T",Ṱ:"T",Ț:"T",Ⱦ:"T",Ṫ:"T",Ṭ:"T",Ƭ:"T",Ṯ:"T",Ʈ:"T",Ŧ:"T",Ɐ:"A",Ꞁ:"L",Ɯ:"M",Ʌ:"V",Ꜩ:"TZ",Ú:"U",Ŭ:"U",Ǔ:"U",Û:"U",Ṷ:"U",Ü:["U","UE"],Ǘ:"U",Ǚ:"U",Ǜ:"U",Ǖ:"U",Ṳ:"U",Ụ:"U",Ű:"U",Ȕ:"U",Ù:"U",Ủ:"U",Ư:"U",Ứ:"U",Ự:"U",Ừ:"U",Ử:"U",Ữ:"U",Ȗ:"U",Ū:"U",Ṻ:"U",Ų:"U",Ů:"U",Ũ:"U",Ṹ:"U",Ṵ:"U",Ꝟ:"V",Ṿ:"V",Ʋ:"V",Ṽ:"V",Ꝡ:"VY",Ẃ:"W",Ŵ:"W",Ẅ:"W",Ẇ:"W",Ẉ:"W",Ẁ:"W",Ⱳ:"W",Ẍ:"X",Ẋ:"X",Ý:"Y",Ŷ:"Y",Ÿ:"Y",Ẏ:"Y",Ỵ:"Y",Ỳ:"Y",Ƴ:"Y",Ỷ:"Y",Ỿ:"Y",Ȳ:"Y",Ɏ:"Y",Ỹ:"Y",Ź:"Z",Ž:"Z",Ẑ:"Z",Ⱬ:"Z",Ż:"Z",Ẓ:"Z",Ȥ:"Z",Ẕ:"Z",Ƶ:"Z",Ĳ:"IJ",Œ:"OE",ᴀ:"A",ᴁ:"AE",ʙ:"B",ᴃ:"B",ᴄ:"C",ᴅ:"D",ᴇ:"E",ꜰ:"F",ɢ:"G",ʛ:"G",ʜ:"H",ɪ:"I",ʁ:"R",ᴊ:"J",ᴋ:"K",ʟ:"L",ᴌ:"L",ᴍ:"M",ɴ:"N",ᴏ:"O",ɶ:"OE",ᴐ:"O",ᴕ:"OU",ᴘ:"P",ʀ:"R",ᴎ:"N",ᴙ:"R",ꜱ:"S",ᴛ:"T",ⱻ:"E",ᴚ:"R",ᴜ:"U",ᴠ:"V",ᴡ:"W",ʏ:"Y",ᴢ:"Z",á:"a",ă:"a",ắ:"a",ặ:"a",ằ:"a",ẳ:"a",ẵ:"a",ǎ:"a",â:"a",ấ:"a",ậ:"a",ầ:"a",ẩ:"a",ẫ:"a",ä:["a","ae"],ǟ:"a",ȧ:"a",ǡ:"a",ạ:"a",ȁ:"a",à:"a",ả:"a",ȃ:"a",ā:"a",ą:"a",ᶏ:"a",ẚ:"a",å:["a","aa"],ǻ:"a",ḁ:"a",ⱥ:"a",ã:"a",ꜳ:"aa",æ:"[ae,e]",ǽ:"ae",ǣ:"ae",ꜵ:"ao",ꜷ:"au",ꜹ:"av",ꜻ:"av",ꜽ:"ay",ḃ:"b",ḅ:"b",ɓ:"b",ḇ:"b",ᵬ:"b",ᶀ:"b",ƀ:"b",ƃ:"b",ɵ:"o",ć:"c",č:"c",ç:"c",ḉ:"c",ĉ:"c",ɕ:"c",ċ:"c",ƈ:"c",ȼ:"c",ď:"d",ḑ:"d",ḓ:"d",ȡ:"d",ḋ:"d",ḍ:"d",ɗ:"d",ᶑ:"d",ḏ:"d",ᵭ:"d",ᶁ:"d",đ:"d",ɖ:"d",ƌ:"d",ı:"i",ȷ:"j",ɟ:"j",ʄ:"j",ǳ:"dz",ǆ:"dz",é:"e",ĕ:"e",ě:"e",ȩ:"e",ḝ:"e",ê:"e",ế:"e",ệ:"e",ề:"e",ể:"e",ễ:"e",ḙ:"e",ë:"e",ė:"e",ẹ:"e",ȅ:"e",è:"e",ẻ:"e",ȇ:"e",ē:"e",ḗ:"e",ḕ:"e",ⱸ:"e",ę:"e",ᶒ:"e",ɇ:"e",ẽ:"e",ḛ:"e",ꝫ:"et",ḟ:"f",ƒ:"f",ᵮ:"f",ᶂ:"f",ǵ:"g",ğ:"g",ǧ:"g",ģ:"g",ĝ:"g",ġ:"g",ɠ:"g",ḡ:"g",ᶃ:"g",ǥ:"g",ḫ:"h",ȟ:"h",ḩ:"h",ĥ:"h",ⱨ:"h",ḧ:"h",ḣ:"h",ḥ:"h",ɦ:"h",ẖ:"h",ħ:"h",ƕ:"hv",í:"i",ĭ:"i",ǐ:"i",î:"i",ï:"i",ḯ:"i",ị:"i",ȉ:"i",ì:"i",ỉ:"i",ȋ:"i",ī:"i",į:"i",ᶖ:"i",ɨ:"i",ĩ:"i",ḭ:"i",ꝺ:"d",ꝼ:"f",ᵹ:"g",ꞃ:"r",ꞅ:"s",ꞇ:"t",ꝭ:"is",ǰ:"j",ĵ:"j",ʝ:"j",ɉ:"j",ḱ:"k",ǩ:"k",ķ:"k",ⱪ:"k",ꝃ:"k",ḳ:"k",ƙ:"k",ḵ:"k",ᶄ:"k",ꝁ:"k",ꝅ:"k",ĺ:"l",ƚ:"l",ɬ:"l",ľ:"l",ļ:"l",ḽ:"l",ȴ:"l",ḷ:"l",ḹ:"l",ⱡ:"l",ꝉ:"l",ḻ:"l",ŀ:"l",ɫ:"l",ᶅ:"l",ɭ:"l",ł:"l",ǉ:"lj",ſ:"s",ẜ:"s",ẛ:"s",ẝ:"s",ḿ:"m",ṁ:"m",ṃ:"m",ɱ:"m",ᵯ:"m",ᶆ:"m",ń:"n",ň:"n",ņ:"n",ṋ:"n",ȵ:"n",ṅ:"n",ṇ:"n",ǹ:"n",ɲ:"n",ṉ:"n",ƞ:"n",ᵰ:"n",ᶇ:"n",ɳ:"n",ñ:"n",ǌ:"nj",ó:"o",ŏ:"o",ǒ:"o",ô:"o",ố:"o",ộ:"o",ồ:"o",ổ:"o",ỗ:"o",ö:["o","oe"],ȫ:"o",ȯ:"o",ȱ:"o",ọ:"o",ő:"o",ȍ:"o",ò:"o",ỏ:"o",ơ:"o",ớ:"o",ợ:"o",ờ:"o",ở:"o",ỡ:"o",ȏ:"o",ꝋ:"o",ꝍ:"o",ⱺ:"o",ō:"o",ṓ:"o",ṑ:"o",ǫ:"o",ǭ:"o",ø:["o","oe"],ǿ:"o",õ:"o",ṍ:"o",ṏ:"o",ȭ:"o",ƣ:"oi",ꝏ:"oo",ɛ:"e",ᶓ:"e",ɔ:"o",ᶗ:"o",ȣ:"ou",ṕ:"p",ṗ:"p",ꝓ:"p",ƥ:"p",ᵱ:"p",ᶈ:"p",ꝕ:"p",ᵽ:"p",ꝑ:"p",ꝙ:"q",ʠ:"q",ɋ:"q",ꝗ:"q",ŕ:"r",ř:"r",ŗ:"r",ṙ:"r",ṛ:"r",ṝ:"r",ȑ:"r",ɾ:"r",ᵳ:"r",ȓ:"r",ṟ:"r",ɼ:"r",ᵲ:"r",ᶉ:"r",ɍ:"r",ɽ:"r",ↄ:"c",ꜿ:"c",ɘ:"e",ɿ:"r",ś:"s",ṥ:"s",š:"s",ṧ:"s",ş:"s",ŝ:"s",ș:"s",ṡ:"s",ṣ:"s",ṩ:"s",ʂ:"s",ᵴ:"s",ᶊ:"s",ȿ:"s",ɡ:"g",ᴑ:"o",ᴓ:"o",ᴝ:"u",ť:"t",ţ:"t",ṱ:"t",ț:"t",ȶ:"t",ẗ:"t",ⱦ:"t",ṫ:"t",ṭ:"t",ƭ:"t",ṯ:"t",ᵵ:"t",ƫ:"t",ʈ:"t",ŧ:"t",ᵺ:"th",ɐ:"a",ᴂ:"ae",ǝ:"e",ᵷ:"g",ɥ:"h",ʮ:"h",ʯ:"h",ᴉ:"i",ʞ:"k",ꞁ:"l",ɯ:"m",ɰ:"m",ᴔ:"oe",ɹ:"r",ɻ:"r",ɺ:"r",ⱹ:"r",ʇ:"t",ʌ:"v",ʍ:"w",ʎ:"y",ꜩ:"tz",ú:"u",ŭ:"u",ǔ:"u",û:"u",ṷ:"u",ü:["u","ue"],ǘ:"u",ǚ:"u",ǜ:"u",ǖ:"u",ṳ:"u",ụ:"u",ű:"u",ȕ:"u",ù:"u",ủ:"u",ư:"u",ứ:"u",ự:"u",ừ:"u",ử:"u",ữ:"u",ȗ:"u",ū:"u",ṻ:"u",ų:"u",ᶙ:"u",ů:"u",ũ:"u",ṹ:"u",ṵ:"u",ᵫ:"ue",ꝸ:"um",ⱴ:"v",ꝟ:"v",ṿ:"v",ʋ:"v",ᶌ:"v",ⱱ:"v",ṽ:"v",ꝡ:"vy",ẃ:"w",ŵ:"w",ẅ:"w",ẇ:"w",ẉ:"w",ẁ:"w",ⱳ:"w",ẘ:"w",ẍ:"x",ẋ:"x",ᶍ:"x",ý:"y",ŷ:"y",ÿ:"y",ẏ:"y",ỵ:"y",ỳ:"y",ƴ:"y",ỷ:"y",ỿ:"y",ȳ:"y",ẙ:"y",ɏ:"y",ỹ:"y",ź:"z",ž:"z",ẑ:"z",ʑ:"z",ⱬ:"z",ż:"z",ẓ:"z",ȥ:"z",ẕ:"z",ᵶ:"z",ᶎ:"z",ʐ:"z",ƶ:"z",ɀ:"z",ﬀ:"ff",ﬃ:"ffi",ﬄ:"ffl",ﬁ:"fi",ﬂ:"fl",ĳ:"ij",œ:"oe",ﬆ:"st",ₐ:"a",ₑ:"e",ᵢ:"i",ⱼ:"j",ₒ:"o",ᵣ:"r",ᵤ:"u",ᵥ:"v",ₓ:"x"};let f=1;function p(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var a in t)e[a]=t[a]}return e}Object.keys(h).forEach((function(e){f=Math.max(f,Array.isArray(h[e])?h[e].length:1)})),new class{constructor(e){r(this,"serial",1),r(this,"methodHandlers",new Map),r(this,"methodCalls",{}),r(this,"eventListeners",new Map),r(this,"listenerInstalled",!1),this.window=e}handleMethod(e,i,t){o(this.window,e.origin),this.installListener();let a=this.methodHandlers.get(e);if(a||this.methodHandlers.set(e,a={}),a[i])throw new Error("duplicate handlers for method "+i);a[i]=t}makeMethodCaller(e,i){return o(this.window,e.origin),this.installListener(),t=>{const a={message:"crossframe_call",name:i,arg:t,serial:this.serial++};return e.postMessage(a,e.origin),new Promise(((e,t)=>{this.methodCalls[a.serial]={resolve:e,reject:t,name:i}}))}}on(e,i,t){o(this.window,e.origin),this.installListener();let a=this.eventListeners.get(e);a||this.eventListeners.set(e,a={}),(a[i]||(a[i]=[])).push(t)}makeEventEmitter(e,i){return o(this.window,e.origin),t=>{const a={message:"crossframe_emit",name:i,arg:t};e.postMessage(a,e.origin)}}installListener(){this.listenerInstalled||(globalThis.__BC_CrossFrame_listener_installed&&console.warn("multiple instances of CrossFrame has been instantiated; this can lead to duplicated and inconsistent results"),this.listenerInstalled=globalThis.__BC_CrossFrame_listener_installed=!0,this.window.addEventListener("message",(e=>{var i;const t=null==(i=e.data)?void 0:i.message,a=e.source;if(a)switch(t){case"crossframe_emit":this.handleEmit(e.data,a);break;case"crossframe_call":this.handleCall(e.data,a);break;case"crossframe_call_fail":this.handleCallFail(e.data);break;case"crossframe_call_result":this.handleCallResult(e.data)}else console.warn("received message event without a source window; ignoring",e)})))}handleEmit(e,i){let{name:t,arg:a}=e;var s,r;null==(r=null==(s=this.eventListeners.get(i))?void 0:s[t])||r.forEach((e=>{e(a)}))}async handleCall(e,i){let{arg:t,name:a,serial:s}=e;var r;const o=null==(r=this.methodHandlers.get(i))?void 0:r[a];try{if(!o)throw new Error("method not found: "+a);{const e={message:"crossframe_call_result",name:a,serial:s,result:await o(t)};i.postMessage(e,i.origin)}}catch(e){const t={message:"crossframe_call_fail",name:a,serial:s,error:e instanceof Error?e.message:String(e)};i.postMessage(t,i.origin)}}handleCallFail(e){let{name:i,serial:t,error:a}=e;const{reject:s}=this.popMethodCall(t,i);s(a)}handleCallResult(e){let{name:i,serial:t,result:a}=e;const{resolve:s}=this.popMethodCall(t,i);s(a)}popMethodCall(e,i){const t=this.methodCalls[e];if(!t)throw new Error("call result handler not found for serial ".concat(e," method name: ").concat(i));if(i!==t.name)throw new Error("call fail for serial ".concat(e," has mismatched method name: ").concat(t.name," vs ").concat(i));return delete this.methodCalls[e],t}}(globalThis.window);var m,d=function e(i,t){function a(e,a,s){if(!(typeof document>"u")){"number"==typeof(s=p({},t,s)).expires&&(s.expires=new Date(Date.now()+864e5*s.expires)),s.expires&&(s.expires=s.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var r="";for(var o in s)s[o]&&(r+="; "+o,!0!==s[o]&&(r+="="+s[o].split(";")[0]));return document.cookie=e+"="+i.write(a,e)+r}}return Object.create({set:a,get:function(e){if(!(typeof document>"u"||arguments.length&&!e)){for(var t=document.cookie?document.cookie.split("; "):[],a={},s=0;s<t.length;s++){var r=t[s].split("="),o=r.slice(1).join("=");try{var n=decodeURIComponent(r[0]);if(a[n]=i.read(o,n),e===n)break}catch(e){}}return e?a[e]:a}},remove:function(e,i){a(e,"",p({},i,{expires:-1}))},withAttributes:function(i){return e(this.converter,p({},this.attributes,i))},withConverter:function(i){return e(p({},this.converter,i),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(i)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});const _=new URLSearchParams(null==(m=null==globalThis?void 0:globalThis.location)?void 0:m.search),u=_.has("allowlist_enabled")||!1,g=_.has("debug"),b=function(e){const i=x(),t=E(e,i);return t?g&&console.info('COOKIES: Cookie "'+encodeURIComponent(e)+'" is allowed'):g&&(w(e)?console.info('COOKIES: Cookie "'+encodeURIComponent(e)+'" is NOT a recognized cookie'):console.info('COOKIES: Cookie "'+encodeURIComponent(e)+'" is NOT allowed')),u?t:(g&&console.info("COOKIES: cookie control is disabled, allowing all cookies"),!0)},w=function(e){return![...a.DEFAULT,...a.ANALYTICAL].some((i=>y(i,e)))},E=function(e,i){var t,s;const r=[...a.DEFAULT];if(null!==(t=i)&&void 0!==t||(i={}),null!==(s=i.allow)&&void 0!==s||(i.allow=[]),!Array.isArray(i.allow))throw new P("invalid type for allow");return i.allow.forEach((e=>{if("analytics"!==e)throw new P("invalid type of allowed cookie");r.push(...a.ANALYTICAL)})),r.some((i=>y(i,e)))},x=function(){const e=function(e){return d.get(e)}(a.COOKIE_PREF_NAME);if(void 0===e)return;let i;try{i=JSON.parse(null!=e?e:"{}")}catch(e){throw new P("JSON parse error: ".concat(e))}return i};function y(e,i){return e===i||e instanceof RegExp&&e.test(i)}class P extends Error{constructor(e){super("InvalidCookiePreferenceError: "+e),this.msg=e}}const C=/^_comm_(\d+)$/;function O(){return Math.round(1e9*Math.random())}const v=class e{constructor(t){if(i(this,"channel"),i(this,"senderId"),i(this,"subscriptions",[]),!t)throw new Error("channelName cannot be empty");this.channel=t,this.senderId=O(),e.registerInstance(this)}static registerInstance(e){const i=this.instances.get(e.channel)||[];i.push(e),this.instances.set(e.channel,i)}static startListening(){this.scanInterval||(this.scanInterval=setInterval((()=>this.scanCookies()),250),console.info("CookieComm started listening"))}static stopListening(){this.scanInterval&&(clearInterval(this.scanInterval),this.scanInterval=null,console.info("CookieComm stopped listening"))}static teardownAfterTests(){this.instances.clear(),this.stopListening()}static scanCookies(){var e;let i=!1;const t=[];for(const[e,a]of Object.entries(d.get())){const s=e.match(C);if(!s)continue;const r=parseInt(s[1]);if(!this.seenIds.has(r)){this.seenIds.set(r,new Date),i=!0;try{const e=JSON.parse(a);if(!e.channel)throw new Error("CookieComm message ".concat(r," payload missing channel"));if(!e.senderId)throw new Error("CookieComm message ".concat(r," payload missing senderId"));t.push(e)}catch(i){console.warn("CookieComm failed to parse cookie value",e,a);continue}}}t.sort(((e,i)=>e.timestamp-i.timestamp));for(const i of t)null==(e=this.instances.get(i.channel))||e.forEach((e=>e.dispatch(i)));i&&this.gcSeenIds()}static gcSeenIds(){const e=(new Date).getTime()-5e3;for(const[i,t]of this.seenIds)t.getTime()<e&&this.seenIds.delete(i)}toString(){return"CookieComm<".concat(this.channel,", ").concat(this.senderId,">")}subscribe(i){if(-1!==this.subscriptions.indexOf(i))throw new Error("Callback already subscribed to ".concat(this));this.subscriptions.push(i),e.startListening()}unsubscribe(e){var i;const t=null!==(i=this.subscriptions.indexOf(e))&&void 0!==i?i:-1;if(-1===t)throw new Error("Callback not subscribed to ".concat(this));this.subscriptions.splice(t,1)}send(e){var i,t;const a="_comm_"+O(),s={channel:this.channel,senderId:this.senderId,timestamp:performance.now()+performance.timeOrigin,data:e},r=JSON.stringify(s),o={expires:new Date(Date.now()+5e3),path:"/",secure:"https:"===(null==(i=null==window?void 0:window.location)?void 0:i.protocol),sameSite:"Lax"};if(null!=(t=null==window?void 0:window.location)&&t.hostname){const e=window.location.hostname.split(".");o.domain="."+e.slice(-2).join(".")}console.debug("".concat(this," setting cookie"),a,s),function(e,i,t){if(b(e))d.set(e,i,t)}(a,r,o)}dispatch(e){if(e.senderId!==this.senderId){if(0===this.subscriptions.length)return void console.info("".concat(this," received message but has no subscribers"),e);console.debug("".concat(this," dispatching message to ").concat(this.subscriptions.length," subscribers"),e),this.subscriptions.forEach((i=>i(e.data)))}}};i(v,"scanInterval",null),i(v,"seenIds",new Map),i(v,"instances",new Map);let z=v;globalThis.BCCookies||(globalThis.BCCookies={isCookieAllowed:b}),globalThis.Cookie=globalThis.Cookie||{},globalThis.Cookie.CommChannel=z}();
