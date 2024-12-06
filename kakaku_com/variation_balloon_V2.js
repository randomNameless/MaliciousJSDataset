/*==============================================================================
	バリエーション バルーン表示 ver2
	※要iepngfix.js

 ●バルーンの表示位置はバルーンを開く関数の第4引数で変更可能
 　標準：引数なし
 　アイテムリスト：'pos1'
 　ボタン下センター：'pos2'
 　縦型比較：'pos3'
 　レビュータブタブ直下：'pos4'
 　アイテムリスト絞込み：'pos5' 120918追加
 　アイテムビューh2右：'pos6' 131029追加

 ●ボタンの上、または下に強制配置させる場合は、第5引数で制御可能
 　標準：引数なし
 　強制上配置：'forceT'
 　強制下配置：'forceB'

================================================================================*/

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
		closeBtnAnchor.onclick = function () { varBlnByJSON.blnClose(); return false; };
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
	varBlnByJSON = {
	blnOpen: function(elem, prodId, type, blnPos, posForce) {
			if (parent != null && checkBlnClose(elem)) {
				varBlnByJSON.blnClose();
			} else {
				if (IEVer != 0 && parent != null && parent.getElementsByTagName('div').length > 0) {
					varBlnByJSON.blnClose();
				}
				main.innerHTML = getBlnContentByJSON(prodId, type);
				parent = elem.parentNode;
				if (getDisplay(parent) == 'inline') {
					if (IEVer > 5 && IEVer < 8) {
						parent.style.display = 'inline';
						parent.style.zoom = 1;
					}
					parent.style.display = 'inline-block';
				}
				parent.appendChild(box);
				if (arguments.length == 5) {
					setBlnPosition(blnPos, posForce);
				} else if (arguments.length == 4) {
					setBlnPosition(blnPos);
				} else {
					setBlnPosition('normal');
				}
			}
			// リンク統合
			jQuery(function(){
				jQuery('.variPopupMain .areaLink .variPopupItem').each(function() {
					var colorHref = jQuery(this).find('a').attr('href');
					jQuery(this).parent().click(function() {
					window.open(colorHref,'_self');
					return false;
					});
				});
			});

			// #itemlistのみmask表示_sm61
			if (document.getElementById('itemList') != null) {
				varBlnMask.maskOpen();
			}

		},
		blnClose: function() {
			parent.removeChild(box);
			parent = null;
			showBlnFlag = false;
			main.innerHTML = '';

			// #itemlistのみmask非表示_sm61
			if (varBlnMask.flag) {
				varBlnMask.maskClose();
			}

		}
	}

	// mask表示_sm61
	const varBlnMask = {
		maskOpen:function() {

			varBlnMask.targetCloset = null;
			varBlnMask.flag = false;

			const target = document.getElementsByClassName('variItemBox')[0];
			const html = '<div class="p-itemListMask is-varBlnMask"></div>';

			// #imgPopup内の判定
			if (document.getElementsByClassName('variItemList-imgPopup')[0] != null) {
				varBlnMask.targetCloset =  document.getElementsByClassName('variItemList-imgPopup')[0].closest('#imgPopup');
			}

			// #imgPopup外の時だけmask表示
			if (varBlnMask.targetCloset == null) {

				varBlnMask.flag = true;
				target.insertAdjacentHTML('beforebegin', html);
				varBlnMask.mask = document.getElementsByClassName('is-varBlnMask')[0];

				varBlnMask.mask.onclick = function() {
					varBlnMask.maskClick();
				}

			}
			
		},
		maskClick:function() {
			varBlnByJSON.blnClose();
			return false;
		},
		maskClose:function() {
			varBlnMask.mask.remove();
			varBlnMask.flag = false;
		}
	}

	// private func パターン分岐
	var getBlnContentByJSON = function(prodId, type) {
		if (type == 'Item' || type == 'Fav') {
			return getBlnTagByJSON(prodId, type);
		} else if (type == 'Pick' || type == 'Rev') {
			return getBlnTagByJSONWithButton(prodId, type);
		} else if (type == 'Combi') {
			return getBlnTagByJSONCombi(prodId, type);
		}
	}
	
	// private func 基本形
	var getBlnTagByJSON = function(prodId, type) {
		var data = variationPopupData[prodId];
		var html;
		var title;
		var noPriceClass;
		var imageTag;
		var noImageUrl = data.ImageTop + data.NoImageUrl80;
		
		if (type == 'Fav') {
			title = data.ParentProduct + 'のお気に入り登録対象製品を選択';
		} else {
			title = data.ParentProduct + 'の色';
		}
		if (data.NoPriceFlg == 'True') {
			noPriceClass = ' noPrice';
		} else {
			noPriceClass = '';
		}
		html = '<p class=\'variPopupTtl\'>' + title + '<span>（全' + data.ChildCount + '件）</span></p>';
		html += '<div class=\'variPopItemTbl imgLline3' + noPriceClass + '\'>';
		html += '<table>';
		html += '<colgroup><col class=\'photo\'><col class=\'price\'><col class=\'tip\'><col class=\'name\'></colgroup>';
		for (var i = 0; i < data.Items.length; i++) {
			// class
			if (i == data.Items.length - 1) {
				html += '<tr class=\'areaLink varitblEnd\'>';
			} else {
				html += '<tr class=\'areaLink\'>';
			}
			// imageTag
			if (data.Items[i].ImgUrl.length == 0) {
				imageTag = '<img src=\'' + noImageUrl + '\' alt=\'' + data.Items[i].ChildProduct + '\' width=\'80\' height=\'60\'>';
			} else if (data.Items[i].OfficialFlg == 'False') {
				imageTag = '<img src=\'' + data.Items[i].ImgUrl + '\' onerror=\'this.src=\"' + noImageUrl + '\";this.onerror=null;\'';
				imageTag += ' onload=\'resizeImageFix(this,80,60);\' width=\'80\' height=\'60\' alt=\'' + data.Items[i].ChildProduct + '\'>';
			} else {
				imageTag = '<img src=\'' + data.Items[i].ImgUrl + '\' alt=\'' + data.Items[i].ChildProduct + '\' width=\'80\' height=\'60\'>';
			}
			html += '<th>' + imageTag + '</th>';
			html += '<td class=\'variPopupPrice\'>';
			html += '<p class=\'popPrice\'>' + data.Items[i].Price + '</p>';
			if (type == 'Item' && data.Items[i].ShopName != null && data.Items[i].ShopName.length != 0) {
				html += '<span>' + data.Items[i].ShopName + '<span>';
				if (data.Items[i].FaviconUrl != null && data.Items[i].FaviconUrl.length != 0) {
					html += '<img width=\'13\' height=\'13\' class=\'vb\' src=\'' + data.Items[i].FaviconUrl + '\'>';
				}
			}
			html += '</td>';
			html += '<td class=\'variPopupTip\'>';
			html += '<img src=\'' + data.Items[i].ColorUrl + '\' title=\'' + data.Items[i].ColorName + '\'';
			html += ' alt=\'' + data.Items[i].ColorName + '\' width=\'16\' height=\'16\'>';
			html += '</td>';
			html += '<td class=\'variPopupItem\'>';
			html += '<p><a href=\'' + data.Items[i].Url[type] + '\'>';
			html += '<span>' + data.Items[i].ChildProduct + '</span>';
			html += '</a></p>';
			html += '</td>';
			html += '</tr>';
		}
		html += '</table></div>';
		html += '<p class=\'variPopupBtn\'>';
		html += '<a onclick=\'varBlnByJSON.blnClose();return false;\' href=\'javascript:void(0);\'>';
		html += '<span>閉じる</span>';
		html += '</a>';
		html += '</p>';
		return html;
	}
	
	// private func ボタン付き（pickup or review）
	var getBlnTagByJSONWithButton = function(prodId, type) {
		var data = variationPopupData[prodId];
		var html;
		var title;
		var buttonTag;
		var imageTag;
		var noImageUrl = data.ImageTop + data.NoImageUrl36;
		
		if (type == 'Pick') {
			title = data.ParentProduct + 'のリスト対象製品を選択してください。'
		} else {
			title = data.ParentProduct + 'の評価対象製品を選択してください。'
		}
		html = '<p class=\'variPopupTtl\'>' + title + '<span>（全' + data.ChildCount + '件）</span></p>';
		html += '<div class=\'variPopItemTbl imgSline3\'>';
		html += '<table>';
		html += '<col class=\'photo\'><col class=\'tip\'><col class=\'name\'><col class=\'btn\'>';
		for (var i = 0; i < data.Items.length; i++) {
			// class
			if (i == data.Items.length - 1) {
				html += '<tr class=\'varitblEnd\'>';
			} else {
				html += '<tr>';
			}
			// imageTag
			if (data.Items[i].ImgUrl.length == 0) {
				imageTag = '<img src=\'' + noImageUrl + '\' alt=\'' + data.Items[i].ChildProduct + '\' width=\'36\' height=\'27\'>';
			} else if (data.Items[i].OfficialFlg == 'False') {
				imageTag = '<img src=\'' + data.Items[i].ImgUrl + '\' onerror=\'this.src=\"' + noImageUrl + '\";this.onerror=null;\'';
				imageTag += ' onload=\'resizeImageFix(this,36,27);\' width=\'36\' height=\'27\' alt=\'' + data.Items[i].ChildProduct + '\'>';
				//alert(imageTag);
			} else {
				imageTag = '<img src=\'' + data.Items[i].ImgUrl + '\' alt=\'' + data.Items[i].ChildProduct + '\' width=\'36\' height=\'27\'>';
			}
			html += '<th>' + imageTag + '</th>';
			html += '<td class=\'variPopupTip\'>';
			html += '<img src=\'' + data.Items[i].ColorUrl + '\' title=\'' + data.Items[i].ColorName + '\'';
			html += ' alt=\'' + data.Items[i].ColorName + '\' width=\'16\' height=\'16\'>';
			html += '</td>';
			html += '<td class=\'variPopupItem\'>';
			html += '<p><span>' + data.Items[i].ChildProduct + '</span></p>';
			html += '</td>';
			// buttonTag
			if (type == 'Pick') {
				buttonTag = '<a href=\'' + data.Items[i].Url[type] + '\' rel=\"nofollow\">';
				buttonTag += '<img src=\'' + data.ImageTop + '/images/spacer.gif\' width=\'82\' height=\'23\'';
				buttonTag += ' alt=\'' + data.Items[i].Product + 'のリストを作成する\' class=\'pkupvariSelect\'>';
				buttonTag += '</a>'
			} else {
				if (data.Items[i].EvaluateStart == 'True') {
					buttonTag = '<a href=\'' + data.Items[i].Url[type] + '\' rel=\"nofollow\">';
					buttonTag += '<img src=\'' + data.ImageTop + '/images/spacer.gif\' width=\'82\' height=\'23\'';
					buttonTag += ' alt=\'' + data.Items[i].Product + 'のレビューを書く\' class=\'pkupvariSelect\'>';
					buttonTag += '</a>';
				} else {
					buttonTag = '発売前';
				}
			}
			html += '<td class=\'variPopupSelect\'>' + buttonTag + '</td>';
			html += '</tr>';
		}
		html += '</table></div>';
		html += '<p class=\'variPopupBtn\'>';
		html += '<a onclick=\'varBlnByJSON.blnClose();return false;\' href=\'javascript:void(0);\'>';
		html += '<span>閉じる</span>';
		html += '</a>';
		html += '</p>';
		return html;
	}
	
	// private func セット販売用
	var getBlnTagByJSONCombi = function(prodId, type) {
		var data = variationPopupData[prodId];
		var html;
		var imageTag;
		var noImageUrl = data.ImageTop + data.NoImageUrl36;
		
		html = '<p class=\'CombvariPopupTtl\'>フレッツ光同時加入割引 対象製品</p>';
		html += '<table>';
		html += '<colgroup><col class=\'photo\'><col class=\'price\'><col class=\'tip\'><col class=\'name\'></colgroup>';
		for (var i = 0; i < data.Items.length; i++) {
			if (data.Items[i].CombinedSalesFlg == 'True') {
				// class
				if (i == data.Items.length - 1) {
					html += '<tr class=\'areaLink varitblEnd\'>';
				} else {
					html += '<tr class=\'areaLink\'>';
				}
				// imageTag
				if (data.Items[i].ImgUrl.length == 0) {
					imageTag = '<img src=\'' + noImageUrl + '\' alt=\'' + data.Items[i].ChildProduct + '\' width=\'36\' height=\'27\'>';
				} else if (data.Items[i].OfficialFlg == 'False') {
					imageTag = '<img src=\'' + data.Items[i].ImgUrl + '\' onerror=\'this.src=\"' + noImageUrl + '\";this.onerror=null;\'';
					imageTag += ' onload=\'resizeImageFix(this,36,27);\' width=\'36\' height=\'27\' alt=\'' + data.Items[i].ChildProduct + '\'>';
				} else {
					imageTag = '<img src=\'' + data.Items[i].ImgUrl + '\' alt=\'' + data.Items[i].ChildProduct + '\' width=\'36\' height=\'27\'>';
				}
				html += '<th>' + imageTag + '</th>';
				html += '<td class=\'variPopupPrice\'>';
				html += '<p class=\'popPrice\'>' + data.Items[i].DiscountPrice + '</p>';
				html += '</td>';
				html += '<td class=\'variPopupTip\'>';
				html += '<img src=\'' + data.Items[i].ColorUrl + '\' title=\'' + data.Items[i].ColorName + '\'';
				html += ' alt=\'' + data.Items[i].ColorName + '\' width=\'16\' height=\'16\'>';
				html += '</td>';
				html += '<td class=\'variPopupItem\'>';
				html += '<p><a href=\'' + data.Items[i].Url[type] + '\' rel=\'nofollow\'>';
				html += '<span>' + data.Items[i].ChildProduct + '</span>';
				html += '</a></p>';
				html += '</td>';
				html += '</tr>';
			}
		}
		html += '</table>';
		return html;
	}
}

if (typeof jQuery === 'function') {
	jQuery(function() {
	    if ('serviceWorker' in navigator) {
			jQuery('.bookmarkAdd3 .bln').html('プッシュ通知が受け取れます');
		}
	});
}