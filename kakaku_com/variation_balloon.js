/* =========================================================

 variation_balloon.js

 バリエーション バルーン表示
 ※要iepngfix.js
 120625 sm8

------------------------------------------------------------

 ●バルーンの表示位置はバルーンを開く関数の第3引数で変更可能
 　標準：引数なし
 　アイテムリスト：'pos1'
 　ボタン下センター：'pos2'
 　縦型比較：'pos3'
 　レビュータブタブ直下：'pos4'
 　アイテムリスト絞込み：'pos5' 120918追加
 　アイテムビューh2右：'pos6' 131029追加

 ●ボタンの上、または下に強制配置させる場合は、第4引数で制御可能
 　標準：引数なし
 　強制上配置：'forceT'
 　強制下配置：'forceB'

========================================================= */

new function() {

	// private vars & arrays
	var currentProdId;
	var showBlnFlag = false;
	var box, boxInner, main, iframe, parent, checkBlnCloseObj, tempPosForce;
	var page, contentSize, content, blnMainSize, blnMain;
	var dimentions = [];
	var checkBlnPos = [];
	var blnPosOffset = [];
	var mousePos = [];

	// private func [IEversion check]
	var IEver;
	var checkIEVer = function() {
		IEVer = navigator.appVersion.toLowerCase();
		IEVer = (IEVer.indexOf('msie') > -1) ? parseInt(IEVer.replace(/.*msie[ ]/,'').match(/^[0-9]+/)) : 0;
	}();

	// private func [balloon initialize]
	var varBlnInit = function() {
		main = document.createElement('div');
		main.id = 'varBlnMain';
		main.className = 'variPopupMain';
		var mid = document.createElement('div');
		mid.className = 'variPopupMid';
		var top = document.createElement('div');
		top.className = 'variPopupTop';
		var btm = document.createElement('div');
		btm.className = 'variPopupBtm';
		var closeBtn = document.createElement('span');
		closeBtn.className = 'variPopupClose';
		var closeBtnAnchor = document.createElement('a');
		closeBtnAnchor.href = 'javascript:void(0)';
		closeBtnAnchor.onclick = function () { varBln.blnClose(); return false; };
		boxInner = document.createElement('div');
		boxInner.className = 'variPopup';
		box = document.createElement('div');
		box.className = 'variItemBox';
		mid.appendChild(main);
		closeBtnAnchor.appendChild(closeBtn);
		boxInner.appendChild(closeBtnAnchor);
		boxInner.appendChild(top);
		boxInner.appendChild(mid);
		boxInner.appendChild(btm);
		if (IEVer == 6) {
			iframe = document.createElement('iframe');
			iframe.style.zIndex = 9998;
			iframe.style.position = 'absolute';
			iframe.style.top = '0px';
			iframe.style.left = '0px';
			iframe.style.width = '538px';
			iframe.style.height = '0px';
			iframe.src = "about:blank"
			iframe.frameBorder = 0;
			iframe.scrolling = 'no';
			boxInner.style.zIndex = 9999;
			box.appendChild(iframe);
		}
		box.appendChild(boxInner);
	}();

	// private func [get position]
	var getElementScreenPosition = function(elem) {
		var html = document.documentElement;
		var rect = elem.getBoundingClientRect();
		var left = rect.left - html.clientLeft;
		var top = rect.top - html.clientTop;
		return {left:left, top:top};
	}
	var getElementPosition = function(elem, dimention) {
		var html = document.documentElement;
		var body = document.body;
		var scrollLeft = (body.scrollLeft || html.scrollLeft);
		var scrollTop  = (body.scrollTop || html.scrollTop);
		var pos = getElementScreenPosition(elem);
		var left = pos.left + scrollLeft;
		var top  = pos.top + scrollTop;
		if (dimention == 'X') {
			return left;
		} else {
			return top;
		}
	}

	// private func [set position]
	var setBlnPosition = function(blnPos, posForce) {
		switch (blnPos) {
			case 'pos3':
				dimentions['blnW'] = 226 + 32;
				break;
			case 'pos5':
				dimentions['blnW'] = 87 + 18;
				break;
			default:
				dimentions['blnW'] = 538 + 32;
		}
		dimentions['blnH'] = Math.round(main.offsetHeight + 32);
		dimentions['blnX'] = Math.round(getElementPosition(box, 'X'));
		dimentions['blnY'] = Math.round(getElementPosition(box, 'Y'));
		dimentions['pageW'] = Math.round(getPageW());
		dimentions['pageX'] = Math.round(getPageX());
		dimentions['pageH'] = Math.round(getPageH());
		if (IEVer == 6) {
			switch (blnPos) {
				case 'pos3':
					iframe.style.width = '226px';
					break;
				case 'pos5':
					iframe.style.width = '87px';
					break;
				default:
					iframe.style.width = '538px';

			}
			iframe.style.height = (dimentions['blnH'] - 34) + 'px';
		}
		switch (blnPos) {
			case 'normal':
				blnPosOffset['X'] = -12;
				dimentions['blnX'] += -12;
				blnPosOffset['Y'] = 5;
				break;
			case 'pos1':
				blnPosOffset['X'] = -110;
				dimentions['blnX'] += -110;
				blnPosOffset['Y'] = 5;
				break;
			case 'pos2':
				blnPosOffset['X'] = -285 + (Math.round((parent.offsetWidth / 2)));
				dimentions['blnX'] += -285 + (Math.round((parent.offsetWidth / 2)));
				blnPosOffset['Y'] = 5;
				break;
			case 'pos3':
				blnPosOffset['X'] = -125 + (Math.round((parent.offsetWidth / 2)));
				dimentions['blnX'] += -125 + (Math.round((parent.offsetWidth / 2)));
				blnPosOffset['Y'] = 5;
				break;
			case 'pos4':
				blnPosOffset['X'] = -450;
				dimentions['blnX'] += -450;
				blnPosOffset['Y'] = -(dimentions['blnH'] / 2 + 10);
				dimentions['blnY'] += -(dimentions['blnH'] / 2 + 10);
				break;
			case 'pos5':
				blnPosOffset['X'] = -52 + (Math.round((parent.offsetWidth / 2)));
				dimentions['blnX'] += -52 + (Math.round((parent.offsetWidth / 2)));
				blnPosOffset['Y'] = 5;
				break;
			case 'pos6':
				blnPosOffset['X'] = -347 - (Math.round((parent.offsetWidth / 2)));
				dimentions['blnX'] += -285 + (Math.round((parent.offsetWidth / 2)));
				blnPosOffset['Y'] = 0;
				break;
			default:
				alert('VariationBalloonERROR : Invalid Argument (blnPos)');
		}
		if (dimentions['blnX'] < 0) {
			blnPosOffset['X'] -= dimentions['blnX'] - 12;
		} else if ((dimentions['blnW'] + dimentions['blnX'] - dimentions['pageX']) > dimentions['pageW'])  {
			blnPosOffset['X'] -= (dimentions['blnW'] + dimentions['blnX'] - dimentions['pageX']) - dimentions['pageW'];
		}
		if (posForce == 'forceT') {
			blnPosOffset['Y'] = -(parent.offsetHeight + dimentions['blnH']);
		} else if (posForce == 'forceB') {
			blnPosOffset['Y'] = blnPosOffset['Y'];
		} else if (dimentions['blnH'] + dimentions['blnY'] > dimentions['pageH'] && dimentions['blnH'] < dimentions['blnY']) {
			blnPosOffset['Y'] = -(parent.offsetHeight + dimentions['blnH']);
		}
		boxInner.style.left = blnPosOffset['X'] + 'px';
		boxInner.style.top = blnPosOffset['Y'] + 'px';
		if (IEVer == 6) {
			if (blnPos != 'pos5') {
				iframe.style.left = (blnPosOffset['X'] + 12) + 'px';
				iframe.style.top = (blnPosOffset['Y'] + 14) + 'px';
			} else {
				iframe.style.left = (blnPosOffset['X'] + 9) + 'px';
				iframe.style.top = (blnPosOffset['Y'] + 14) + 'px';
			}
		}
	}

	// private func [get pageElementSize]
	var getPageW = function() {
		if (document.getElementById('contents') != null && document.getElementById('itemListTable') != null) {
			// itemlist
			return document.getElementById('itemListTable').offsetWidth;
		} else if (document.getElementById('blPoint') != null) {
			// prodCompare(variableWidth)
			return document.getElementById('blPoint').offsetWidth;
		} else if (document.getElementById('contents930') != null) {
			// normalPage(width:930px)
			return document.getElementById('contents930').offsetWidth;
		} else {
			// others
			return document.getElementsByTagName('body')[0].offsetWidth;
		}
	}
	var getPageX = function() {
		if (document.getElementById('contents') != null && document.getElementById('itemListTable') != null) {
			// itemlist
			return getElementPosition(document.getElementById('itemListTable'), 'X');
		} else if (document.getElementById('contents930') != null) {
			// normalPage(width:930px)
			return getElementPosition(document.getElementById('contents930'), 'X');
		} else {
			// others
			return getElementPosition(document.getElementsByTagName('body')[0], 'X');
		}
	}
	var getPageH = function() {
		return document.getElementsByTagName('body')[0].offsetHeight;
	}

	// private func [get balloonContent]
	var getBlnContent = function(prodId) {
		prodId = 'vbc' + prodId;
		return document.getElementById(prodId).innerHTML;
	}

	// private func [get elemDisplayProperty]
	var getDisplay = function(elem) {
		if (elem.currentStyle) {
			//IE or Opera
	        return elem.currentStyle['display'];
	    } else if (getComputedStyle) {
			//Mozilla or Opera or Safari
	        return document.defaultView.getComputedStyle(elem, '').getPropertyValue('display');
	    }
	}

	// private func [checkBlnClose]
	var checkBlnClose = function(elem) {
		checkBlnCloseObj = elem.parentNode.getElementsByTagName('div');
		if (checkBlnCloseObj.length == 0) {
			return false;
		} else if (checkBlnCloseObj.item(checkBlnCloseObj.length - 1).className == 'variPopupBtm') {
			return true;
		} else {
			return false;
		}
	}

	// public object
	varBln = {
		blnOpen: function(elem, prodId, blnPos, posForce) {
			if (blnPos == 'forceT' || blnPos == 'forceB') {
				tempPosForce = blnPos;
				blnPos = 'normal';
			}
			if (parent != null && checkBlnClose(elem)) {
				varBln.blnClose();
			} else {
				if (IEVer != 0 && parent != null && parent.getElementsByTagName('div').length > 0) {
					varBln.blnClose();
				}
				main.innerHTML = getBlnContent(prodId);
				parent = elem.parentNode;
				if (getDisplay(parent) == 'inline') {
					if (IEVer > 5 && IEVer < 8) {
						parent.style.display = 'inline';
						parent.style.zoom = 1;
					}
					parent.style.display = 'inline-block';
				}
				currentProdId = prodId;
				parent.appendChild(box);
				if (arguments.length == 3) {
					blnPos == 'normal' ? setBlnPosition(blnPos, tempPosForce) : setBlnPosition(blnPos);
				} else if (arguments.length == 4) {
					setBlnPosition(blnPos, posForce);
				} else {
					setBlnPosition('normal');
				}
			}
			setAreaLink();
		},
		blnClose: function() {
			parent.removeChild(box);
			parent = null;
			showBlnFlag = false;
			main.innerHTML = '';
		}
	}

	// private func リンク統合
	var setAreaLink = function() {
		if (document.getElementById('varBlnMain') == null) {
			return;
		}
		var products = document.getElementById('varBlnMain').getElementsByTagName('tr');
		var contents;
		var url = [];
		for (i = 0; i < products.length; i++) {
			if (products[i].className.indexOf('areaLink') >= 0) {
				// product毎にurlを取得しurl[i]に格納
				contents = products[i].childNodes;
				for (j = 0; j < contents.length; j++) {
					if (contents[j].className == 'variPopupItem') {
						url[i] = contents[j].getElementsByTagName('a').item(0).getAttribute('href','2');
					}
				}
				// 子製品[i]をクリック→対応urlオープン
				products[i].onclick = (function(num) {
					return function() {
						window.open(url[num], '_self');
						return false;
					};
				})(i);
			}
		}
	}

}