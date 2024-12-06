/* =========================================================
 /script/history/history_navi_top.js
 140116 sm13
 ※prototype.jsの有り無しどちらのページでも対応するために
　 “jQuery”を省略せずに記述しています。
========================================================= */


jQuery(function ($) {
  //IE6判定
  var _ua = (function () {
      return {
          ltIE6: typeof window.addEventListener == "undefined" && typeof document.documentElement.style.maxHeight == "undefined"
      }
  })();
  //IE6以外
  if (_ua.ltIE6 == false) {
      //IE透過png対応
      if (navigator.userAgent.indexOf("MSIE") != -1) {
          $('#historyFrame img').each(function () {
              if ($(this).attr('src').indexOf('.png') != -1) {
                  $(this).css({
                      'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' +
                          $(this).attr('src') +
                          '", sizingMethod="image");'
                  });
              }
          });
      }
      //初期の位置
      var w = $(window).width();
      var x = 1206;
      var historyContainer = $("#historyContainer");
      var historyNavi = $("#historyNavi");
      if (w <= x) {
        $(historyContainer).css("width", "100%");
        $(historyNavi).css("right", "0");
      } else if (w <= 1287 && $('#contents1035').length) {
        $(historyContainer).css("width", "100%");
        $(historyNavi).css("right", "0");
      } else if ($('#contents1035').length) {
        $(historyContainer).css("width", "1035px");
        $(historyNavi).css("left", "auto");
      } else {
        $(historyContainer).css("width", "930px");
        $(historyNavi).css("left", "auto");
      }
      //ウィンドウリサイズ時
      $(window).resize(function () {
        var w = $(window).width();
        var x = 1206;
        if (w <= x) {
          $(historyContainer).css("width", "100%");
          $(historyNavi).css("left", "");
          $(historyNavi).css("margin-left", "");
          $(historyNavi).css("right", "0");
        } else if (w <= 1287 && $('#contents1035').length) {
          $(historyContainer).css("width", "100%");
          $(historyNavi).css("left", "");
          $(historyNavi).css("margin-left", "");
          $(historyNavi).css("right", "0");
        } else if ($('#contents1035').length) {
          $(historyContainer).css("width", "1035px");
          $(historyNavi).css("right", "");
          $(historyNavi).css("margin-right", "");
          $(historyNavi).css("left", "auto");
        } else {
          $(historyContainer).css("width", "930px");
          $(historyNavi).css("right", "");
          $(historyNavi).css("margin-right", "");
          $(historyNavi).css("left", "auto");
        }
      });
      //マウスオーバー
      $("#historyFrame a").css("opacity", "0.8");
      $("#historyFrame a").hover(function () {
          $(this).fadeTo(100, 1.0);
      }, function () {
          $(this).fadeTo(100, 0.8);
      });
  }


  //----------------------------------------------
  // 関数名：stickySideBnr
  // 処　理：PR：サイドパネルの追従化設定 sm61
  //----------------------------------------------
  function stickySideBnr() {

    // 「.is-jack」があるか確認
    if ($('.is-jack')[0]) {
      adjustSideBnr();
    } else {
      checkSideBnr();
    }

    // checkSideBnr：MutationObserverで<html>を5秒間監視
    function checkSideBnr() {

      const targetElement = document.getElementsByTagName('html')[0];
      const jackObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          // classがある場合
          if (mutation.target.classList.contains('is-jack')) {
            setTimeout(() => {adjustSideBnr();}, 0); // 反映ラグ対応
            jackObserver.disconnect();
          }
        });
      });
      const config = { attributeFilter:['class'] };
      jackObserver.observe(targetElement, config);
      // 5秒後にMutationObserver削除
      setTimeout(() => {jackObserver.disconnect();}, 5000);

    }

    // adjustSideBnr：サイドパネルの調整
    function adjustSideBnr() {

      // init
      let winHeight = $(window).height();
      let flag_show = false;
      let fixedRightAdClose = '';
      // getCookieが機能している時だけ実行
      if (typeof getCookie == 'function') {
        fixedRightAdClose = getCookie("fixedRightAdClose231124"); // ★★★★★★ キャッシュ名 ★★★★★★
      }
      // サイドパネル
      const sideBnrArea = $('.jackAdSideBnr');
      const sideBnrs = $('.jackAdSideBnrCell div div');
      const sideBnrWidth = 140;
      const sideBnrHeight = 830;
      const sideBnrRatio = sideBnrWidth / sideBnrHeight; // 比率調整

      // changeSizeSideBnr：サイドパネルサイズ変更
      function changeSizeSideBnr() {

        const areaWidth = Math.ceil(winHeight * sideBnrRatio);
        // ウィンドウ高さがサイドパネル高さより小さい場合は比率調整
        if (winHeight <= sideBnrHeight) {
          sideBnrArea.css('height', winHeight);
          sideBnrs.css({'width': areaWidth,'height': winHeight});
          $('html').addClass('is-jackFit');
        } else {
          sideBnrArea.css('height', sideBnrHeight);
          sideBnrs.css({'width': sideBnrWidth,'height': sideBnrHeight});
          $('html').removeClass('is-jackFit');
        }

      }

      // changeStyleFixedItem：下部までスクロール時の追従要素
      const changeStyleFixedItem = {
        fixedItemHeight: 0,
        init: function() {

          // 追従要素：キープ一覧・閲覧履歴エリア
          let historyNaviHeight = 0;
          if ($('#historyContainer')[0] && $('#historyNavi').is(':visible')) {
            historyNaviHeight = $('#historyNavi').outerHeight() + 10; // エリアの高さ＋10pxの余白
          }
          // 追従要素：全ジャンルバナー
          let fixedRightAdHeight = 0;
          if ($('.fixedRightAdContainer')[0] && !(fixedRightAdClose === 'on')) {
            fixedRightAdHeight = 200 + 30; // バナーの高さ＋30pxの余白
          }

          // 追従要素：高さ
          this.fixedItemHeight = fixedRightAdHeight + historyNaviHeight;
          sideBnrArea.css('padding-bottom', this.fixedItemHeight);

          flag_show = true;
          changeStyleFixedItem.scroll();

        },
        scroll: function() {

          // サイドパネル吸着状態
          if ($('.is-jackFit')[0]) {
            const scrollTop = $(window).scrollTop();
            const docHeight = $(document).height();
            const showTiming  = docHeight - this.fixedItemHeight;
            const scrollPos  = scrollTop + winHeight;
            if (showTiming <= scrollPos && !flag_show) { // 追従要素分ある場合
              changeStyleFixedItem.show();
            } else if (scrollPos < showTiming && flag_show) {  // 追従要素分ない場合
              changeStyleFixedItem.hide();
            }
          } else {
            if (!flag_show) {
              changeStyleFixedItem.show();
            }
          }

        },
        show: function() {

          // 追従要素：キープ一覧・閲覧履歴エリア
          if ($('#historyContainer')[0] && $('#historyNavi').is(':visible')) {
            $('#historyContainer').css({'opacity': '','pointer-events': ''});
          }
          // 追従要素：全ジャンルバナー
          if ($('.fixedRightAdContainer')[0] && !(fixedRightAdClose === 'on')) {
            $('.fixedRightAdContainer').css({'opacity': '','pointer-events': ''});
          }
          flag_show = true;

        },
        hide: function() {

          // 追従要素：キープ一覧・閲覧履歴エリア
          if ($('#historyContainer')[0] && $('#historyNavi').is(':visible')) {
            $('#historyContainer').css({'opacity': '0','pointer-events': 'none'});
          }
          // 追従要素：全ジャンルバナー
          if ($('.fixedRightAdContainer')[0] && !(fixedRightAdClose === 'on')) {
            $('.fixedRightAdContainer').css({'opacity': '0','pointer-events': 'none'});
          }
          flag_show = false;

        }
      }

      // function
      changeSizeSideBnr();

      // load
      if (document.readyState === 'complete') {
        changeStyleFixedItem.init();
      } else {
        window.addEventListener('load', () => {
          changeStyleFixedItem.init();
        });
      }

      // resize
      window.addEventListener('resize', () => {
        if (winHeight === $(window).height()) return;
        winHeight = $(window).height();
        changeSizeSideBnr();
      });

      // scroll
      document.addEventListener('scroll', () => {
        changeStyleFixedItem.scroll();
      });

    }

  }
  stickySideBnr();


});

//ウィンドウを閉じる
function displaynone() {
jQuery("#historyFrame #naviClose").css({
  "display": "none"
});
jQuery("#historyFrame #naviBtn").css({
  "display": "none"
});
jQuery("#historyFrame #naviTxt").css({
  "display": "block"
});
setTimeout(function () {
  jQuery("#historyFrame #naviTxt").fadeTo("1500", 0);
}, 4000);
}

// cookie取得 160509 sm29
function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
      begin = dc.indexOf(prefix);
      if (begin != 0) return null;
  }
  else
  {
      begin += 2;
      var end = document.cookie.indexOf(";", begin);
      if (end == -1) {
      end = dc.length;
      }
  }
  return unescape(dc.substring(begin + prefix.length, end));
}
// cookie取得 end

// 右固定広告 160509 sm29
jQuery(function ($) {

  //ユーザーエージェント判定
  var _ua = (function (u) {
      return {
          ltIE6: typeof window.addEventListener == "undefined" && typeof document.documentElement.style.maxHeight == "undefined",
          isIE: (u.indexOf('msie') > -1) && (u.indexOf('opera') == -1) || (u.indexOf('trident/7') > -1),
          isEdge: (u.indexOf('edge') > -1),
          Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1)
            || u.indexOf("ipad") != -1
            || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
            || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
            || u.indexOf("kindle") != -1
            || u.indexOf("silk") != -1
            || u.indexOf("playbook") != -1
      }
  })(window.navigator.userAgent.toLowerCase());
  //IE6・タブレット以外
  if (_ua.ltIE6 == false && _ua.Tablet == false) {
    function keepWatch() {
      if ($('#f_history').is(':hidden') && $('#f_keep').is(':hidden')){
        $('.fixedRightAd').css({'bottom': 10});
      } else if($('#f_keep').is(':hidden') || $('#f_history').is(':hidden')){
        $('.fixedRightAd').css({'bottom': 60});
      } else {
        $('.fixedRightAd').css({'bottom': 110});
      }
    }
    var bnrStr = [{
      'bnrLink': 'https://kakaku.com/article/tieup/24/09_pixus_ts/?lid=article_tieup_24_09_pixus_ts_ads_123590_112515',  // ★★★★★★ バナーリンク ★★★★★★
      'bnrImgPath': 'https://img1.kakaku.k-img.com/images/ad/adadmin/adimage/202412/112515.jpg', // ★★★★★★ バナー画像パス ★★★★★★
      'bnrImgAlt': '' // ★★★★★★ バナー画像alt ★★★★★★
    },{
      'bnrLink': 'https://kakaku.com/article/tieup/24/09_pixus_ts/?lid=article_tieup_24_09_pixus_ts_ads_123590_112516',  // ★★★★★★ バナーリンク ★★★★★★
      'bnrImgPath': 'https://img1.kakaku.k-img.com/images/ad/adadmin/adimage/202412/112516.jpg', // ★★★★★★ バナー画像パス ★★★★★★
      'bnrImgAlt': '' // ★★★★★★ バナー画像alt ★★★★★★
    },{
      'bnrLink': 'https://kakaku.com/article/tieup/24/09_pixus_xk/?lid=article_tieup_24_09_pixus_xk_ads_123590_112517',  // ★★★★★★ バナーリンク ★★★★★★
      'bnrImgPath': 'https://img1.kakaku.k-img.com/images/ad/adadmin/adimage/202412/112517.jpg', // ★★★★★★ バナー画像パス ★★★★★★
      'bnrImgAlt': '' // ★★★★★★ バナー画像alt ★★★★★★
    },{
      'bnrLink': 'https://kakaku.com/article/tieup/24/09_pixus_xk/?lid=article_tieup_24_09_pixus_xk_ads_123588_109652',  // ★★★★★★ バナーリンク ★★★★★★
      'bnrImgPath': 'https://img1.kakaku.k-img.com/images/ad/adadmin/adimage/202410/109652.jpg', // ★★★★★★ バナー画像パス ★★★★★★
      'bnrImgAlt': '' // ★★★★★★ バナー画像alt ★★★★★★
    }];
    if(document.location.protocol === 'https:'){
      for(var i = 0; i < bnrStr.length; i++){
        if(bnrStr[i].bnrLink){
          bnrStr[i].bnrLink = bnrStr[i].bnrLink.replace('http:', 'https:').replace('http%3A', 'https%3A');
        }
      }
    }
    var bnrRandom = Math.floor(Math.random() * bnrStr.length);
    var fixedRightAdHtml = '<div class="fixedRightAdContainer"><div class="fixedRightAd"><span class="fixedRightAdClose" onclick="fixedRightAdClose()">' +
                            '<img src="https://img1.kakaku.k-img.com/images/ad/fixedbnr/btn_close_gray.png" alt="" width="23" height="23"></span><div class="fixedRightAdBnr">' +
                            '<a href="' + bnrStr[bnrRandom].bnrLink +'" target="_blank">' +
                            '<img src="' + bnrStr[bnrRandom].bnrImgPath + '" alt="' + bnrStr[bnrRandom].bnrImgAlt + '" width="96" height="200"></a></div></div></div>';
    var fixedRightAdContainer = '.fixedRightAdContainer';
    var fixedRightAd = '.fixedRightAd';
    var w = $(window).width();
    var n = 0;
    var fixedRightAdClose = getCookie("fixedRightAdClose231124"); // ★★★★★★ キャッシュ名 ★★★★★★
    if($('#historyContainer').length){
      $(fixedRightAdHtml).insertBefore('#historyContainer');
    } else if($('#historyContainerAll').length) {
      $(fixedRightAdHtml).insertBefore('#historyContainerAll');
    }
    keepWatch();
    // アイテムビューの時
    if($('#itmArea > div[id*="div_dgads_async"]').length){ // BIgarageの空タグ（「この製品を見た人は?」枠用）があるか
      var count = 0;
      function itemviewAd() {
        var h = $(window).height(); // ウィンドウ高さ
        var w = $(window).width(); // ウィンドウ幅
        var wInner = window.innerWidth; // スクロールバーを含めたウィンドウ幅
        if($('#outerRecommendBox').length){ // 「この製品を見た人は?」が非同期挿入済みの場合
          var targetH = $('#outerRecommendBox').height(); // 「この製品を見た人は?」の高さ
          var targetOT = $('#outerRecommendBox').offset().top; // 「この製品を見た人は?」の上部からの距離
        }
        if($('#f_history').is(':visible') && $('#f_keep').is(':visible')){ // バナーの高さ
          var bnrH = 205 + 129;
        } else if($('#f_history').is(':visible') || $('#f_keep').is(':visible')) {
          var bnrH = 205 + 84;
        } else {
          var bnrH = 205 + 20;
        }
        var scrollpx = $(window).scrollTop(); // スクロール量
        if (fixedRightAdClose === 'on') { // キャッシュ
          $(fixedRightAdContainer).hide();
        } else if (wInner < 1270) { // ウィンドウ幅が狭い時
          $(fixedRightAdContainer).show();
        } else if ($('#outerRecommendBox').length == 0) { // 「この製品を見た人は?」が存在しない・非同期挿入前の時
          $(fixedRightAdContainer).show();
        } else if ($('#outerRecommendBox').length && (scrollpx + h) > (targetH + targetOT + bnrH)) { // 「この製品を見た人は?」が非同期挿入済 ＋ ウィンドウの下部が「この製品を見た人は?」+バナーの高さより下の時
          $(fixedRightAdContainer).show();
        } else {
          $(fixedRightAdContainer).hide();
          n = 0;
        }
        if ($('#historyContainerAll').length) {
          $(fixedRightAdContainer).css("width", "100%");
          $(fixedRightAd).css("right", "0");
          $(fixedRightAd).css("left", "");
        } else if (w <= 1287 && $('#contents1035').length) {
          $(fixedRightAdContainer).css("width", "100%");
          $(fixedRightAd).css("right", "0");
          $(fixedRightAd).css("left", "");
        }  else if (w <= 1206) {
          $(fixedRightAdContainer).css("width", "100%");
          $(fixedRightAd).css("right", "0");
          $(fixedRightAd).css("left", "");
        } else if ($('#contents1035').length) {
          $(fixedRightAdContainer).css("width", "1035px");
          $(fixedRightAd).css("left", "auto");
          $(fixedRightAd).css("right", "");
        } else {
          $(fixedRightAdContainer).css("width", "930px");
          $(fixedRightAd).css("left", "auto");
          $(fixedRightAd).css("right", "");
        }
      }
      // IE&Edge
      if (_ua.isIE || _ua.isEdge) {
        setInterval(keepWatch,1000);
      }
      // キープが表示されたら実行
      if ($('#f_history').is(':visible') ||  $('#f_keep').is(':visible')){
        keepWatch();
        itemviewAd();
      }
      // ロード・リサイズ・スクロール時実行
      $(window).on('load resize scroll',function () {
        if ($('#f_history').is(':visible') || $('#f_keep').is(':visible') || count > 0){
          keepWatch();
          itemviewAd();
        }
      });
      // すべて読み込まれてから実行
      $(window).load(function(){
        keepWatch();
        itemviewAd();
        count++;
      });
      // IE&Edge
      setTimeout(function(){
        if((_ua.isIE || _ua.isEdge) && count === 0){
          keepWatch();
          itemviewAd();
          count++;
        }
      },5000);
    } else {
      var count = 0;
      function fixedRightAdStyle() {
        var w = $(window).width(); //ウィンドウ幅
        var x = 1206;
        if (fixedRightAdClose === 'on') {
            $(fixedRightAdContainer).hide();
        } else if($('#historyContainerAll').length) {
          $(".fixedRightAdContainer").show();
          $(fixedRightAdContainer).css("width", "100%");
          $(fixedRightAd).css("right", "0");
          $(fixedRightAd).css("left", "");
        } else if (w <= x) {
            $(".fixedRightAdContainer").show();
            $(fixedRightAdContainer).css("width", "100%");
            $(fixedRightAd).css("right", "0");
            $(fixedRightAd).css("left", "");
        } else if ($('#contents1035').length) {
          $(".fixedRightAdContainer").show();
          $(fixedRightAdContainer).css("width", "1035px");
          $(fixedRightAd).css("left", "auto");
          $(fixedRightAd).css("right", "");
        } else {
            $(".fixedRightAdContainer").show();
            $(fixedRightAdContainer).css("width", "930px");
            $(fixedRightAd).css("left", "auto");
            $(fixedRightAd).css("right", "");
        }
      }


      // サイドバナーに衝突時、全ジャンルバナーを非表示にする設定
      var sideBnr = $('.jackAdSideBnrCell');
      var winH = $(window).height();
      var winScrollpx = $(window).scrollTop();
      var sideBnrH;
      var bnrH;

      function sideBnrCollisionInit() {
        setTimeout(function(){
          // 全ジャンルバナーのみ表示されている場合
          bnrH = 205 + 20; 

          // 閲覧履歴 and キープ and 全ジャンルバナーが表示されている場合
          if($('#f_history').is(':visible') && $('#f_keep').is(':visible')){
            bnrH = 205 + 129;
          }

          // （閲覧履歴 or キープ） and 全ジャンルバナーが表示されている場合
          else if($('#f_history').is(':visible') || $('#f_keep').is(':visible')) {
            bnrH = 205 + 84;
          }

          // サイドバナーの高さを取得
          sideBnrH = sideBnr.height() + sideBnr.offset().top;

          // 透明にしていた全ジャンルバナーを表示
          $('.is-jack .fixedRightAd').css('opacity',1);

          // サイドバナーに衝突時、全ジャンルバナーを非表示
          sideBnrCollision();
          
        },100);
      }

      // サイドバナーに衝突時、全ジャンルバナーを非表示
      function sideBnrCollision() {
        winScrollpx = $(window).scrollTop();
        if ((winScrollpx + winH > sideBnrH + bnrH) && !(fixedRightAdClose === 'on')) {
          $('.fixedRightAdContainer').show();
        } else {
          $('.fixedRightAdContainer').hide();
        }
      }

      // スクロール
      $(window).on('scroll',function () {
        if($('.is-jack')[0]){
          sideBnrCollision();
        }
      });

      // IE&Edge
      if(_ua.isIE || _ua.isEdge){
        setInterval(keepWatch,1000);
      }
      // キープが表示されたら実行
      if($('#f_history').is(':visible') || $('#f_keep').is(':visible')){
        keepWatch();
        fixedRightAdStyle();
        
        if($('.is-jack')[0]){
          sideBnrCollisionInit();
        }
      }
      // リサイズ時実行
      $(window).on('resize',function () {
        if($('#f_history').is(':visible') || $('#f_keep').is(':visible') || count > 0){
          keepWatch();
          fixedRightAdStyle();
        }

        if($('.is-jack')[0]){
          winH = $(window).height();
          sideBnrCollision();
        }
      });
      // すべて読み込まれてから実行
      $(window).load(function(){
        keepWatch();
        fixedRightAdStyle();

        if($('.is-jack')[0]){
          sideBnrCollisionInit();
        }
        
        count++;
      });
      // IE&Edge
      setTimeout(function(){
        if((_ua.isIE || _ua.isEdge) && count === 0){
          keepWatch();
          fixedRightAdStyle();
          
          if($('.is-jack')[0]){
            sideBnrCollisionInit();
          }

          count++;
        }
      },5000);
    }
    //キープボタン押した時
    $('#bt_keep').on('click touchend',function(){
      setTimeout(function(){
        var historyNaviH = $('#historyNavi').outerHeight();
        keepWatch();
      },50);
    });


}
});
//右固定広告 end

//右固定広告非表示 160509 sm29
function fixedRightAdClose() {
jQuery(".fixedRightAdContainer").hide();
jQuery(".fixedRightAd").hide();
var strCookie;
var date1,date2;
var days = 30;   //cookieの期限
date1 = new Date();
date1.setTime(date1.getTime() + days*24*60*60*1000);
date2 = date1.toUTCString();
strCookie = 'fixedRightAdClose231124=on; '; // ★★★★★★ キャッシュ名 ★★★★★★
strCookie += 'expires=' + date2 + ';';
strCookie += 'domain=.kakaku.com; ';
strCookie += 'path=/; ';
document.cookie = strCookie;
}
//右固定広告非表示 end