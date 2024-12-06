// 画面遷移
function moveToFS(param) {
	var url = document.getElementById('defaultFSUrl').value;

	if (param != '') {
		url += (url.indexOf('?') > 0) ? '&' : '?';

		var paramAry = param.split('|');
		var paramObj = {};
		var paramData = '';
		for (var i = 0; i < paramAry.length; i++) {
			paramData = paramAry[i].split('=');
			if (paramData.length == 2) {
				paramObj[paramData[0]] = paramData[1];
			}
		}

		var newParam = '';
		for (var key in paramObj) {
			if (newParam != ''){
				newParam += '&'
			}
			newParam += key + '=' + paramObj[key];
		}

		url += newParam;
	}

	location.href = url;
	return false;
}

// 左メニュー価格帯検索枠 入力値からのリンク先生成
function submitPriceRangeSearch(prmPriceFrom, prmPriceTo) {
	
	var frm = document.getElementById('leftMenuPriceRangeForm');
	var priceFrom = document.getElementById(prmPriceFrom).value;
	var priceTo = document.getElementById(prmPriceTo).value;

	// 数値チェック
	if (priceFrom != '' && !priceNumCheck(priceFrom)) {
		return false;
	}
	if (priceTo != '' && !priceNumCheck(priceTo)) {
		return false;
	}

	//パラメータをセット
	if (priceFrom != '' || priceTo != '') {
		var paramValue = priceFrom + '-' + priceTo;
		document.getElementById('leftMenuParam').value = paramValue;
	}
	else {
		document.getElementById('leftMenuParam').value = '';
	}

	frm.submit();
	return false;
}

// 価格用の数値チェック
function priceNumCheck(str) {
	if (!str.match(/^(?:0|[1-9]\d*)$/)) {
		alert("金額は、半角数字（整数）で入力して下さい");
		return false;
	}
	return true;
}
