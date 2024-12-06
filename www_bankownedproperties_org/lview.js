// JavaScript Document
var path = 'https://www.bankownedproperties.org/';
function jump(page)
{
	url = path+$("#jump_url").val();

	if($("#order_by").val() != '' && $("#order_by").val() != null && $("#order_by").val() != 'property_photos')
		url += '&order_by='+$("#order_by").val().replace(' ', '%20');
	if($("#min_price").val() > 0 || $("#max_price").val() > 0)
		url += '&min_price='+$("#min_price").val()+'&max_price='+$("#max_price").val();
	if($("#beds").val() != '' && $("#beds").val() != null)
		url += '&beds='+$("#beds").val();
	if($("#baths").val() != '' && $("#baths").val() != null)
		url += '&baths='+$("#baths").val();

	if(page != '' && page != undefined){
		url += '&page='+page;
		reloadContent(url);
		$('html, body').animate({ scrollTop: 0 }, 500);
	}
}
$(document).ready(function(){
	if(window.location.hash != '')
	{
		var url;
	
		if($("#zipcode").val() != '')
		{
			url = path+'lview.preview-content.php?zipcode='+$("#zipcode").val();
			if($("#property_type").val() != ''){
				url += '&property_type='+$("#property_type").val();
			}
		}
		else
		{
			url = path+'lview.preview-content.php?state_sg='+$("#state_sg").val()+'&county_name='+$("#county_name").val().replace(' ', '%20');
			if($("#city").val() != ''){
				url += '&city='+$("#city").val().replace(' ', '%20');
			}
			if($("#property_type").val() != '' && $("#property_type").val() != null){
				url += '&property_type='+$("#property_type").val();
			}
		}

		if($("#order_by").val() != '' && $("#order_by").val() != 'property_photos')
			url += '&order_by='+$("#order_by").val().replace(' ', '%20');
		if($("#min_price").val() > 0 || $("#max_price").val() > 0)
			url += '&min_price='+$("#min_price").val()+'&max_price='+$("#max_price").val();
		if($("#beds").val() != '' && $("#beds").val() != null)
			url += '&beds='+$("#beds").val();
		if($("#baths").val() != '' && $("#baths").val() != null)
			url += '&baths='+$("#baths").val();

		url += window.location.hash.replace('#', '&').replace(/ /g,'%20');
		
		reloadContent(url, function(){
			var qsa = window.location.hash.replace('#', '').split('&');
			for(var i = 0; i < qsa.length; i++)
			{
				param = qsa[i].split('=');
				if(param[0] != 'page' && param[0] != 'regs_per_page')
					$("#"+param[0]).val(param[1]);
				if(param[0] == 'active' && param[1] == 'yes')
					$("#"+param[0]).attr('checked', 'checked');
			}
		});
	}

	$('#property_type').on('change', function(){
		$(".closefilter").trigger('click');
		if($("#property_type").val()==''){
			ptype_path = '';
		}else{
			ptype_path = '?property_type=' + $("#property_type").val();
		}
		window.location = $("#lview-search").attr('action') + ptype_path;
	});

	$(".openfilter").click(function() {
		$(".overlay, #lview-search").fadeIn("slow");
	});
	$(".closefilter").click(function() {
		$(".overlay, #lview-search").fadeOut("slow");
	});
});
function reloadContent(lview, callback)
{
	$("#listings_content").animate({ opacity: 0.5 }, 500, function(){
		$.ajax({  
			url: lview,  
			success: function(data){
				$('#listings_content').html(data);
				$("#listings_content").animate({ opacity: 1.0 }, 500);
				window.location.hash = $("#hash").val();
				track = String(window.location);
				track = track.replace(path, '');
				if(typeof(callback) == "function")
					callback();
			}
		});
	});
}
function removeFilter(filter){
	if(filter == 'type'){
		window.location = window.location.pathname+window.location.hash;
	}else{
		$("#"+filter).val('');
		jump(1);
	}
}
function setFilter(){
	$(".closefilter").trigger('click');
	jump(1);
}