!function(){"use strict";!function(n,e){void 0===e&&(e={});var o=e.insertAt;if(n&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===o&&t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}}('/*!\n _ _  _\n| | || | INT-mobile v0.2.2\n| | || | INTERPARK UI Development Team\n`___\'|_| /styles/components/footer.scss\n\n*/\nhtml {\n  -webkit-text-size-adjust: none;\n  -moz-text-size-adjust: none;\n  text-size-adjust: none;\n  -webkit-touch-callout: none;\n  touch-action: manipulation;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  font: normal 62.5% "Pretendard", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;\n}\n\n.footerInner {\n  padding: 3rem 2rem 10rem;\n  margin: 0;\n  text-align: center;\n  color: rgba(17, 17, 17, 0.5);\n  font-size: 1.1rem;\n  background-color: #fafafa;\n}\n\n.footerInner a {\n  color: rgba(17, 17, 17, 0.5);\n}\n\n.footerInner button {\n  background: transparent;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  text-indent: initial;\n}\n\n.footerPolicy {\n  margin: 0 auto;\n}\n\n.footerPolicy ul {\n  font-size: 0;\n}\n\n.footerPolicy li {\n  display: inline-block;\n  margin-bottom: 0.2rem;\n}\n\n.footerPolicy li::before {\n  content: "";\n  display: inline-block;\n  width: 0.1rem;\n  height: 1rem;\n  margin: 0 0.6rem;\n  background: rgba(17, 17, 17, 0.5);\n}\n\n.footerPolicy li:first-child::before {\n  display: none;\n}\n\n.footerPolicy a,\n.footerPolicy button {\n  color: #333;\n  font-size: 1.1rem;\n  line-height: 1.3rem;\n}\n\n.footerPolicy a b,\n.footerPolicy button b {\n  font-weight: bold;\n}\n\n.footerPolicy button {\n  cursor: pointer;\n}\n\n.footerPolicy button::after {\n  position: relative;\n  top: -0.1rem;\n  content: "";\n  display: inline-block;\n  width: 1rem;\n  height: 1.1rem;\n  vertical-align: middle;\n  margin-left: 0.1rem;\n  background: url("//openimage.interpark.com/.ui/interparkMain/2019/common/footer/mobile/footer_arrow.svg")\n    no-repeat center center;\n}\n\n.footerInfoBtn {\n  display: flex;\n  justify-content: center;\n  margin: 1.4rem auto 1rem;\n}\n\n.footerInfoBtn button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1.7rem;\n  color: #333;\n  font-size: 1.1rem;\n  cursor: pointer;\n}\n\n.footerInfoBtn button::after {\n  content: "";\n  width: 1rem;\n  height: 1.1rem;\n  margin-top: 0;\n  background: url("//openimage.interpark.com/.ui/interparkMain/2019/common/footer/mobile/footer_arrow.svg")\n    no-repeat center center;\n}\n\n.footerInfoBtn button[aria-expanded="true"]::after {\n  transform: rotateX(180deg);\n}\n\n.footerInfoBtn button[aria-expanded="false"]::after {\n  top: 0.2rem;\n}\n\n.footerInfoBtn button:nth-child(2)::before {\n  content: "";\n  display: inline-block;\n  width: 0.1rem;\n  height: 1rem;\n  margin: 0 0.7rem;\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.footerInfoBtn button span,\n.footerInfoBtn button b {\n  pointer-events: none;\n}\n\n.footerInfoInner {\n  display: none;\n  overflow: hidden;\n  margin: 0 auto;\n}\n\n.footerInfoInner.open {\n  display: block;\n}\n\n.footerInfoInner .info,\n.footerInfoInner .tel {\n  max-width: 26rem;\n  text-align: left;\n  line-height: 1.7rem;\n  margin: 0 auto;\n}\n\n.footerInfoInner .info .infoLink,\n.footerInfoInner .tel .infoLink {\n  text-decoration: underline;\n  color: #333;\n  margin-left: 0.3rem;\n}\n\n.footerInfoInner .info li,\n.footerInfoInner .tel li {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.footerInfoInner .info li span:first-child::after,\n.footerInfoInner .tel li span:first-child::after {\n  content: "";\n  display: inline-block;\n  width: 0.1rem;\n  height: 1rem;\n  margin: -0.1rem 0.4rem;\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.footerInfoInner .tel {\n  margin: 0.6rem auto 0;\n}\n\n.footerNotice {\n  max-width: 33.5rem;\n  margin: 1.6rem auto 0;\n}\n\n.footerNotice p {\n  line-height: 1.4rem;\n  font-size: 1rem;\n}\n\n.footer .popupMypage {\n  position: fixed;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  align-items: flex-end;\n  display: none;\n  opacity: 0;\n  transition: 0.3s all ease;\n  z-index: 100;\n}\n\n.footer .popupMypage.visible {\n  display: flex;\n}\n\n.footer .popupMypage.animate {\n  opacity: 1;\n}\n\n.footer .popupMypage.animate .popupInner {\n  transform: translateY(0);\n}\n\n.footer .popupMypage.animate .dimmed {\n  opacity: 1;\n}\n\n.footer .popupMypage .dimmed {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  opacity: 0;\n}\n\n.footer .popupMypage .popupInner {\n  display: flex;\n  width: 100%;\n  max-width: 76rem;\n  min-width: 32rem;\n  margin: 0 auto;\n  flex-direction: column;\n  background-color: #fff;\n  border-radius: 2rem 2rem 0 0;\n  box-sizing: border-box;\n  transform: translateY(3rem);\n  transition: 0.3s all ease;\n}\n\n.footer .popupMypage .categoryList {\n  padding: 2.5rem 0 3rem;\n}\n\n.footer .popupMypage .categoryList li {\n  height: 5.3rem;\n  line-height: 5.3rem;\n  padding: 0 2rem;\n  box-sizing: border-box;\n}\n\n.footer .popupMypage .categoryList li a {\n  display: block;\n  font-size: 1.6rem;\n  color: #333;\n  font-weight: bold;\n}\n');const n="https://www.interpark.com",e=window.location.href.indexOf("temtour.interpark.com")>-1?"temtour.interpark.com":window.location.href.indexOf("stmtour.interpark.com")>-1?"stmtour.interpark.com":"mtour.interpark.com";let o="";const t=n=>2==(n=(";"+document.cookie.replace(/; /gi,";")).split(";"+n+"=")).length?n.pop().split(";").shift():"",r=""!==t("tempinterparkGUEST")||""!==t("id_token");let i="";i+='<footer class="footer">',i+='  <div class="footerInner">',i+='    <div class="footerPolicy">',i+="      <ul>",i+="        <li><a href='"+n+"/terms.html#agree'>이용약관</a></li>",i+="        <li>",i+="          <a href='"+n+"/terms.html#protect_privacy'><b>개인정보 처리 방침</b></a>",i+="        </li>",i+="        <li><a href='"+n+"/terms.html#location_terms'>위치기반서비스 이용약관</a></li>",i+="      </ul>",i+="      <ul>",i+="        <li><a href='"+n+"/terms.html#dispute_resolution'>분쟁해결기준</a></li>",i+="        <li><a href='https://help.interpark.com/tour/terms'>여행약관</a></li>",i+="        <li><a href='https://"+e+"/Tour/Customer/Notice#NoticeDetail_10638'>여행자보험 가입안내</a></li>",i+="</ul>",i+="<ul>",i+='<li><a href="https://travel.interpark.com/home/customer/board/notice/common">공지사항</a></li>',i+='<li><a href="https://help.interpark.com/tour">고객센터</a></li>',i+='<li><a id="footerBtnLogin" href="javascript:">'+(r?"로그아웃":"로그인")+"</a></li>",i+="      </ul>",i+="    </div>",i+="    <div class='footerInfoBtn'>",i+="      <button id='footerToggle' class='btnInterpark' aria-expanded='false' role='button'>",i+="        <span><b>(주)인터파크트리플</b> 사업자정보</span>",i+="      </button>",i+="    </div>",i+='    <div class="foonterInfo">',i+='      <div class="footerInfoInner interparkInfo">',i+='        <div class="info">',i+="<ul>",i+="  <li>경기도 성남시 수정구 금토로 70 (금토동, 텐엑스타워)</li>",i+="  <li>",i+="    <span>호스팅서비스제공자 (주)인터파크트리플</span>",i+="    <span>대표이사 최휘영</span>",i+="  </li>",i+='  <li>사업자등록번호 824-81-02515 <a class="infoLink" href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=8248102515&apv_perm_no=">사업자정보확인</a></li>',i+="  <li>통신판매업신고 2024-성남수정-0912</li>",i+="  <li>관광사업증 등록번호 : 제2024-000024호</li>",i+="</ul>",i+="        </div>",i+='        <div class="tel">',i+="          <ul>",i+="            <li>",i+='              <span>투어 <a href="tel:1588-3443">1588-3443</a></span>',i+='              <span>티켓 <a href="tel:1544-1555">1544-1555</a></span>',i+="            </li>",i+="            <li>",i+='              <span>해외항공 <a href="tel:02-3479-4399">02-3479-4399</a></span>',i+='              <span>국내항공 <a href="tel:02-3479-4340">02-3479-4340</a></span>',i+="            </li>",i+="            <li>",i+='              <a href="mailto:helpdesk@interparktriple.com">이메일 helpdesk@interparktriple.com</a>',i+="            </li>",i+="          </ul>",i+="        </div>",i+="      </div>",i+="    </div>",i+='<div class="footerNotice">',i+="  <p>(주)인터파크트리플은 항공사가 제공하는 개별 항공권 및 여행사가 제공하는 일부 여행상품에 대하여 통신판매중개자의 지위를 가지며, 해당상품, 상품정보, 거래에 관한 의무와 책임은 판매자에게 있습니다. 항공권 또는 항공권이 포함된 경우, 표시되는 상품요금은 예상 유류할증료와 제세공과금이 포함된 가격이며, 발권일/환율 등에 따라 변동될 수 있습니다. (주)인터파크트리플은 인터파크티켓, 인터파크투어의 통신판매중개자로서 통신판매의 당사자가 아니므로, 개별 판매자가 등록한 오픈마켓 상품에 대해서 (주)인터파크트리플은 일체 책임을 지지 않습니다.</p>",i+="</div>",i+="  </div>",i+="</footer>";var a="</div>"+i+"</div>";document.querySelector("body").insertAdjacentHTML("beforeend",a),document.addEventListener("DOMContentLoaded",(()=>{document.getElementById("footerToggle").addEventListener("click",(()=>{(n=>{const e=document.querySelectorAll(".footerInfoBtn button"),t=document.querySelectorAll(".foonterInfo .footerInfoInner");o!==n&&(e.forEach((n=>n.setAttribute("aria-expanded",!1))),t.forEach((n=>n.classList.remove("open"))));const r=Array.from(e).findIndex((e=>e.classList.contains(n))),i=e[r];"false"===i.getAttribute("aria-expanded")?(i.setAttribute("aria-expanded",!0),t[r].classList.add("open")):(i.setAttribute("aria-expanded",!1),t[r].classList.remove("open")),o=n})("btnInterpark")})),document.getElementById("footerBtnLogin").addEventListener("click",(()=>{(()=>{if(r){const n="https://accounts.interpark.com/logout?retUrl=";let e=window.location.href??"https://www.interpark.com";return window.location.href=n+encodeURIComponent(e),!1}location.href="https://accounts.interpark.com/authorize/inpark-pc?postProc=FULLSCREEN&version=v2&origin="+encodeURIComponent(document.URL)})()}))}))}();