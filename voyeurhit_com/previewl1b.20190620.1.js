/*
<img src="..." class="EoCk7" data-sgid="{{$item.server_group_id}}" data-video-id="{{$item.video_id}}">
...
...
<style>.t5Fid0{z-index:unset}</style>
<script>{{strip}}
window.OmR4Sx='EoCk7';
if(typeof EoCR4!='object'){
  window.EoCR4=[];
 {{foreach from=$config.cluster_cdn key="k" item="item"}}
  window.EoCR4[{{$k}}]='{{$item.0.urls_ah}}';
 {{/foreach}}
}
</script>{{/strip}}
<script src="/assets/previewlib.20180227.js" async></script>
*/

(function(){
  function css(el) {
    var sheets = document.styleSheets, ret = [];
    el.matches = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector 
        || el.msMatchesSelector || el.oMatchesSelector;
    for (var i in sheets) {
        var rules = sheets[i].rules || sheets[i].cssRules;
        for (var r in rules) {
            if (el.matches(rules[r].selectorText)) {
                ret.push(rules[r].cssText);
            }
        }
    }
    return ret;
  }
  if(typeof window.VutRi78d != 'undefined')return 0;
  window.VutRi78d=true;
  var ver='20190620 16:00';
  var isMobileOrTab=function() {var check = false;(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);return check;};
  isMobileOrTab=isMobileOrTab();
  isMobileOrTab=!isMobileOrTab ? (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) : isMobileOrTab;
  //if(isMobileOrTab()){return;};
  function RklD3(s){return null !== navigator.userAgent.toLowerCase().match(s);}
  var isSafari=RklD3(/safari/i) && !RklD3(/chrome/i) && !RklD3(/crios/i) && !RklD3(/chromium/i) && !RklD3(/android/i);
  var isUC=RklD3(/ucbrowser/i);
  if(isUC)return 0;
	window.OmR4Sx='EoCk7';
  
  var onDev=!!0 && document.location.host.indexOf('dvl.')!=-1;
  if(onDev){
    var t5FiDeb=document.createElement('div');
    t5FiDeb.className='t5FiDeb';
    document.body.insertBefore(t5FiDeb,document.body.firstChild);
    t5FiDeb.innerHTML='<pre></pre>';
    t5FiDeb=t5FiDeb.firstElementChild;
    var t5FiDebN=0;
    var llog=function(s,s2,s3,s4,s5,s6,s7,s8){
      if(s2)s+=", "+s2;
      if(s3)s+=", "+s3;
      if(s4)s+=", "+s4;
      if(s5)s+=", "+s5;
      if(s6)s+=", "+s6;
      if(s7)s+=", "+s7;
      if(s8)s+=", "+s8;
      t5FiDebN++
      t5FiDeb.insertAdjacentHTML('beforeend',t5FiDebN+": "+s+"\n");
      t5FiDeb.parentNode.scroll(0,1e5);
      console.log(s);
    }
    setTimeout(function(){
      if(!document.location.host || null==document.location.host.match('dvl.'))return;
      var t=document.getElementsByClassName('nopop');
      for(var i=0;i<t.length;i++){
        console.log('removing nopop', t[i]);
        t[i].parentNode.removeChild(t[i]);
      }
    },3000);
  };

  var s1=document.createElement('style');
  s1.innerHTML='\
    @keyframes OmE32w{from{width:0%}to{width:100%}}\
    .t5Fid0{position:absolute;top:0;left:0;overflow:hidden;}\
    .t5FiV{position:absolute;top:-999px;bottom:-999px;left:-999px;right:-999px;margin:auto;min-width:100%;min-height:100%}\
    .t5Fipgb{position:absolute;top:0;background-color:#c10303;height:2px;animation-name:OmE32w;z-index:99;width:0}\
    .LkHid{visibility:hidden}\
    .t5FiDeb{pointer-events:all;position:fixed;z-index:9999;top:0;left:0;opacity:0.66;background:#000;color:#eee;width:75%;height:30%;overflow:auto}\
    .t5FiDeb pre{margin:0}\
    .LkNon{display:none !important}\
    ';
  document.getElementsByTagName('head')[0].appendChild(s1);

  var currentTarget=!!0;

  var getTrUrl=function(im){
    var sgid=im.getAttribute('data-sgid');
    var video_id=im.getAttribute('data-video-id');
    var custom3=im.getAttribute('data-custom3');
    var t=null;
    if(custom3 && (t=custom3.match(/\b(.+):(\d+):(\d+)/))){
      var extube=t[1], sgid=t[3], video_id=t[2];
      return "//"+EoCR5[extube][sgid]+'/'+(Math.floor(video_id/1000)*1000)+'/'+video_id+'/'+video_id+'_tr.mp4';
    }else return "//"+EoCR4[sgid]+'/'+(Math.floor(video_id/1000)*1000)+'/'+video_id+'/'+video_id+'_tr.mp4';
  }
  var _vierror=function(e){
    //console.log("error",e ,e.target,e.currentTarget);
    //llog('_vierror',e.currentTarget.src,e.currentTarget.src.length);
    if(e.currentTarget.src.length<11)return;
    currentTarget=!!0;
    var vic=e.target.parentNode;
    var A=vic.parentNode;
    if(A.tagName!='A'){A=A.parentNode;if(A.tagName!='A')A=A.parentNode;}
    var im=A.getElementsByTagName('IMG');
    im=im[im.length-1];
    var imc=im.parentNode;
    //while(imc.parentNode.tagName!='A')imc=imc.parentNode;
    //if(imc.tagName=='IMG')imc=imc.parentNode;
    
    imc.removeChild(vic);vic=null;
    //imc.classList.remove('LkHid');
    A.removeEventListener("mouseenter",_start);A.removeEventListener("mouseleave",_stop);
    var t=A.getElementsByClassName('thumb-pagination');
    if(typeof t[0]!='undefined')t[0].classList.remove('LkHid');
    if(im.onkeydown){im.onmouseover=im.onkeydown;im.onkeydown=null;im.onmouseover.call(im);}
    if(im.onkeyup){im.onmouseout=im.onkeyup;im.onkeyup=null;}
  }
  var _start=function(e){
    if(typeof LSiW3jD!='undefined' && LSiW3jD)return;
    var A=e.currentTarget;
    if(A.href==currentTarget.href)return;
    _stop();
    currentTarget=A;
    var im=A.getElementsByTagName('IMG');
    im=im[im.length-1];
    var imc=im.parentNode;
    //while(imc.parentNode.tagName!='A')imc=imc.parentNode;
    //console.log(imc);
    //if(imc.tagName=='IMG')imc=imc.parentNode;

    var vic=imc.getElementsByClassName("t5Fid0");
    if(vic)vic=vic[0];
    if(!vic){
      //A.style.position='relative';
      im.setAttribute("alt","");
      A.setAttribute("title","");
      //console.log("create video");llog("create video");
      vic=document.createElement('div');
      vic.className='t5Fid0';
			//vic.style.width=A.parentElement.offsetWidth+'px';vic.style.height=A.parentElement.offsetHeight+'px';
			if(im.width>0 && im.height>0){
				vic.style.width=im.width+'px';vic.style.height=im.height+'px';
			}else{vic.style.width='100%';vic.style.height='100%';}
      vi=document.createElement('video');
      vi.loop=!0;vi.className='t5FiV';vi.preload='none';vi.muted=!!1;
      //vi.style.height='100%';
      vi.src=getTrUrl(im);
      //vi.poster=im.getAttribute('data-src0');
      vi.setAttribute("playsinline","true");
      vi.setAttribute("webkit-playsinline","true");
      vi.setAttribute("disableRemotePlayback","");
      //vi.crossOrigin="*";
      vi.onloadedmetadata=function(){
        //console.log('loadedmetadata');llog('loadedmetadata');
        vi.play(!!1);
        var arv=Math.round(100*vi.videoWidth/vi.videoHeight)/100;
        var ars=Math.round(100*im.parentElement.offsetWidth/im.parentElement.offsetHeight)/100;
        //console.log(im.parentElement.offsetWidth,im.parentElement.offsetHeight,arv+"<="+ars);
        if(arv<=ars){vi.style.width='100%';vi.style.height='auto';}else{vi.style.width='auto';vi.style.height='100%';};
      }
      vi.onerror=_vierror;
      vi.load();
      //if(imc.offsetLeft>0)vic.style.left=imc.offsetLeft+"px";
      //if(imc.offsetTop>0)vic.style.top=imc.offsetTop+"px";
      imc.insertBefore(vic,im);
      vic.appendChild(vi);
      
      var d1=document.createElement('div');
      d1.className='t5Fipgb';
      d1.style.animationDuration=(Math.round(10+Math.random()*5)/10)+'s';
      vic.insertBefore(d1,vi);
      //console.log("play1!");
    }else{
      vic.classList.remove('LkHid');
      //console.log("reuse video");
      //llog("reuse video");
      //vic.style.width=A.parentElement.offsetWidth+'px';vic.style.height=A.parentElement.offsetHeight+'px';
      vi=vic.firstChild.nextElementSibling;
      vi.src=getTrUrl(im);
      //console.log("play2!");
      vi.load();
      vic.firstElementChild.classList.remove('LkNon');
    }
  }
  var _stop=function(e){
    //llog('_stop');
    if(typeof LSiW3jD!='undefined' && LSiW3jD)return;
    var A;
    if(e){A=e.currentTarget;currentTarget=!!0;}else A=currentTarget;
    //var A=e.target;//console.log(A);
    //console.log('_stop', A);
    if(typeof A=='undefined' || !A){return 0;}
    //llog('_stop', A.tagName+"."+A.className+", href="+A.href);
    var im=A.getElementsByTagName('img');
    im=im[im.length-1];
    var imc=im.parentNode;
    //while(imc.parentNode.tagName!='A')imc=imc.parentNode;
    //if(imc.tagName=='IMG')imc=imc.parentNode;
    //imc.classList.remove('LkHid');
    var vic=imc.getElementsByClassName("t5Fid0");
    if(vic)vic=vic[0];
    if(!vic)return;
    vic.classList.add('LkHid');
    vic.firstElementChild.classList.add('LkNon');
    var vi=vic.firstChild.nextElementSibling;
    if(!vi)return;
    vi.src="https://";
    vi.load();
    return;
    var Ld9=function(){
      //console.log("Ld9");
      if(vi.currentTime>0){vi.pause();return;}
      setTimeout(Ld9,33);
    }
    Ld9();
  }

  var t=localStorage.getItem("LSiW3jD");
  if(t)window.LSiW3jD=1;

  setTimeout(function LixERi(){
    var t=localStorage.getItem("LSiW3jD");

    if(typeof LSiW3jD=='undefined' || !LSiW3jD){
      if(t){localStorage.removeItem("LSiW3jD");}
    }else{
      if(!t){localStorage.setItem("LSiW3jD","1");}
    }

    if(typeof LSiW3jD!='undefined' && LSiW3jD){setTimeout(LixERi,500);return;}

    var thumbs=document.getElementsByClassName(window.OmR4Sx);
    for(var i=0;i<thumbs.length;i++){
      if(thumbs[i].getAttribute('data-sgid')=='null')continue;
      if(thumbs[i].getAttribute('data-Ky6d')==1)continue;
      thumbs[i].setAttribute('data-Ky6d',1);
      var A=thumbs[i].parentElement;
      if(A.tagName!='A'){A=A.parentElement;if(A.tagName!='A')A=A.parentElement;}
      
      if(!isMobileOrTab){
        A.addEventListener("mouseenter",_start);
        A.addEventListener("mouseleave",_stop);
      }else{
        A.addEventListener("touchmove",_start);
      }
      
      var t=A.getElementsByTagName('IMG');
      if(t[0])t[0].setAttribute('data-src0',t[0].src);
      
      var t=A.getElementsByClassName('thumb-pagination');
      if(typeof t[0]!='undefined')t[0].classList.add('LkHid');
      if(thumbs[i].onmouseover){
        thumbs[i].onkeydown=thumbs[i].onmouseover;
        thumbs[i].onmouseover=null;
      };
      if(thumbs[i].onmouseout){
        thumbs[i].onkeyup=thumbs[i].onmouseout;
        thumbs[i].onmouseout=null;
      };
    }
    //console.log("start="+stime + ", elapsed="+ ((new Date).getTime()-stime) +"ms, initialized "+j+" previews");
    setTimeout(LixERi,500);
    document.body.addEventListener('touchstart',function(e){
      if(!currentTarget)return;
      var T;
      if(typeof e.currentTarget.parentNode=='undefined'){
        //llog("T=e.target")
        T=e.currentTarget;
      }else{
        //llog("T=e.target.parentNode");
        T=e.currentTarget.parentNode;
      }
      var i=0;
      while(T && T.tagName!='A' && i<=3){
        T=T.parentNode;i++;
      }
      
      if(T && T.tagName=='A'){
        T=T.getElementsByClassName(OmR4Sx);
        if(T[0])return;
      }
      _stop();
      currentTarget=!!0;
    });
  },250);
  console.log("previewlib v"+ver+" init");
})();
/*
2018-05-07 Added muted=true to fit new policy of autoplay/non-interactive play ov video
2018-07-27 Rework for mobile devices support. Turn on/off support
2018-08-01 Added fix to prevent eventEnter listening to elements not being IMG or VIDEO
2018-08-01 Added ability to turn preview off by touching outside thumbs or on second touch on same thumb
2018-08-02 More accurate elements search.
2018-08-06 Prevent eventEnter call when mobile click event fired after touchstart.
2018-08-08 Code reworked
2018-08-09 Code fixes. No blinking while switching between preview and thumb
2018-08-13 Some fixes.
2018-08-15 Fix preview container offset by taking in account thumb offset. (issue noted on voyeurhit) Remove title and alt from link and thumb
2018-08-17 Improve preview elements positioning
2018-08-28 Improve preview elements positioning
2018-09-14 Fixed ie11 error when http:// was set as src for video. Replaced with https://
2018-11-12 Disabled chrome cast icon.
2019-02-27 update
2019-03-21 Set vic dimensons if there is non-zero dimensions image
*/