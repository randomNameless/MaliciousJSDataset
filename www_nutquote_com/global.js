function regEvents() {
	
	new Image().src = '/image/btn_send_down.png';
	new Image().src = '/image/arrow_left.png';	
	new Image().src = '/image/author.png';
	new Image().src = '/image/quote2.gif';
	
	if(document.getElementById('quotes_list')) {
		var quotes_list = document.getElementById('quotes_list')
		var quotes = quotes_list.getElementsByTagName('li');
		for (var i = 0; i < quotes.length; i ++) {
			quotes[i].onmouseover = function(){highlightQuote(this);};
			quotes[i].onmouseout = function(){normalQuote(this);};
		}
	}
	if (document.getElementById('submit')) {
		var submit_image = document.getElementById('submit');
		submit_image.onmousedown = function(){this.src = '/image/btn_send_down.png';};
		submit_image.onmouseup = function(){this.src = '/image/btn_send_up.png';};
	}
	if (document.getElementById('emailpage')) {
		var email_form = document.getElementById('emailpage');
		email_form.onsubmit = function(){
			submit_image.disabled = true;
			emailPage(this);
			return false;
		};
	}
}

function highlightQuote(element) {
	element.style.background = '#f8f6ee url(/image/quote2.gif) no-repeat';
}

function normalQuote(element) {
	element.style.background = '#eceae2 url(/image/quote.gif) no-repeat';
}

function emailPage(form) {
	var name = form.yourname.value;
	var email = form.emailto.value;
	var url = form.currenturl.value;
	sendRequest('/emailto.php?yourname=' + name + '&emailto=' + email + '&currenturl=' + url, emailtoResponse);
}

function emailtoResponse(req) {
	alert(req.responseText);
	var submit_image = document.getElementById('submit');
	submit_image.disabled = false;
}