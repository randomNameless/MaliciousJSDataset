function regestriClickWithRedirection(source, sourceNum, category, cmp_number, urlLink){
	var urlReg = "click_tracker.cfm?source="+source+"&category="+category+"&cmp="+cmp_number+"&sourceNum="+sourceNum;
	$.ajax({ 
		type: "GET",	
		dataType: "html",
  		url: urlReg,
	  	cache: false,	
		error: function(XMLHttpRequest, textStatus, errorThrown) {			
					alert(textStatus+" - "+errorThrown)
						},
  		success: function(html){
			if(urlLink != '') window.location = urlLink;
		}
	});	
}

function regestriClick(source, sourceNum, category, cmp_number){
	var urlReg = "click_tracker.cfm?source="+source+"&category="+category+"&cmp="+cmp_number+"&sourceNum="+sourceNum;
	$.ajax({ 
		type: "GET",	
		dataType: "html",
  		url: urlReg,
	  	cache: false,	
		error: function(XMLHttpRequest, textStatus, errorThrown) {			
				//	alert(textStatus+" - "+errorThrown)
				var i =  html;
						},
  		success: function(html){
				var i =  html;
			//if(urlLink != '') window.location = urlLink;
		}
	});	
}

function logit(source, sourceNum, category, cmp_number, urlLink){
	var urlReg = "click_tracker.cfm?source="+source+"&category="+category+"&cmp="+cmp_number+"&sourceNum="+sourceNum;
	_gat._getTracker('UA-289104-4')._trackEvent('outbound_click', category, urlLink, cmp_number);
	$.ajax({
		type: "GET",
		dataType: "html",
		async: false,
  	url: urlReg,
	  cache: false,
		error: function(XMLHttpRequest, textStatus, errorThrown) {},
 		success: function(html){var i =  html;}
	});
}

function logitMBB(coNum,pcode,linkType,urlLink, state, pos, tot){
	var action='company website'
	switch (linkType){
		case "fb": action="company_facebook";  break;
		case "tw": action="company_twitter";  break;
		case "in": action="company_linkedin";  break;
		case "bl": action="company_blog";  break;
	}
	var extra= ((state >'')?('&state=' + state):'') + ((pos > '')?('&pos=' + pos):'') + ((tot > '')?('&tot=' + tot):'');
	_gat._getTracker('UA-289104-1')._trackEvent('outbound_click', action, urlLink, coNum); 
	var urlReg = "/search/connect_to1.cfm?company="+coNum+"&pc="+pcode+"&type="+linkType + extra;
	$.ajax({ 
		type: "GET",	
		dataType: "html",
		async: false,
		url: urlReg,
		cache: false,	
		error: function(XMLHttpRequest, textStatus, errorThrown) {	//ajaxError,
		}
	});	
}