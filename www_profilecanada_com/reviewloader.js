function loadReview(){
	try {
		_gat._getTracker('UA-289104-4')._trackEvent('business_review', 'Write a Review');
	}
	catch (e) {
	}	
	
	if($('#reviewsPlaceholder').length == 0){
	  $("body").append('<div id="reviewsPlaceholder" style="display:none;"><iframe width="465" height="450"  src="companyReview.cfm?companyID='+co_Num+'"  frameBorder="0"></iframe></div>');
	}
	var el = $('#reviewsPlaceholder');
	// el.find("script").remove();
	el.dialog({height: 500, 
			   width: 475,
			   resizable: false,
			   open: function (event, ui) {
					
			   },
			   title: 'Business Review',                          
			   modal: true}).css("background", "#fff");	
}

function showReviewForm() {
	$.ajax({
		url: '../../com/user.cfc?method=isUserLogin&arg=reviewShow', type: "POST", dataType: "json",
		success: function (responce) {
				if(responce.result){
					loadReview();
				} else {
					$(window).scrollTop(0);
					loadForm('../../Login/loginRequest.cfm')
				}
			},
		error: function(responce){
			var rr = responce;
		}
		});		
}
function closeReview(){
	$('#reviewsPlaceholder').dialog("close");
}
