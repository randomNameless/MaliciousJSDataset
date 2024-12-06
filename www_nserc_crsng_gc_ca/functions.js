var NSERC = {
	Body_Classes: function() {
		$('body').addClass('js');
		
		// parse the URL and add classes to the body
		var Sections = window.location.href.split('http://').join('').split('/');
		for( var i = 1; i < Sections.length-1; i++ ) {
			$('body').addClass(Sections[i]);
		}
	},
	
	IE_Fixes: function() {
		$('li:first-child').addClass('first-child');
	},
	
	External_Links: function() {
		// tag external links
		$("a[href^='http']").attr('rel','external');
		
		$("a[class='noexternal']").attr('rel','');
		
		// make all "file" and external links open in a new window
		$("a[rel='file'], a[rel='external'], a[class='noexternal']").attr('target','_blank');
		
		
		// change the title of new-window links
		$('body.eng a[rel="external"], body.eng a[rel="file"]').attr('title','This link opens in a new window');
		$('body.fra a[rel="external"], body.fra a[rel="file"]').attr('title','Ce lien ouvre dans une nouvelle fenêtre');
		
	},
	
	Table_Hover: function() {
		// hover table rows
		$('.DataTable2 tr, .ListTable tr, .TableList tr, .ProgramList tr, .News tr').hover(
			function () {
				$(this).addClass('over');
			}, 
			function () {
				$(this).removeClass('over');
			}
		);
		
		// click table rows with links
		$('.ListTable tr, .TableList tr, .ProgramList tr').click( function() {
			var Target_URL = $(this).find('a').attr('href');
			if( Target_URL ) {
				location.href = ( Target_URL );
			}
		});
	},
	
	Homepage_Scroller: function() {
		var Num_Stories = $('.impact-stories-stories li').length;
		var Output = '';
		
		for( var i = 1; i <= Num_Stories; i++ ) {
			var This_Story_Link = $('.impact-stories-stories li:nth-child(' + i + ') a').attr('href');
			//var Class = (i == 1) ? ' class="active"' : '';
			Output += '<li><a href="' + This_Story_Link + '">' + i + '</a></li>';
		}
		$('.impact-stories-navigation').append( Output );
		
		// start the scrolling
		setInterval(function(){ $('.impact-stories-stories li:first-child').fadeOut().next('li').fadeIn().end().appendTo('.impact-stories-stories');}, 5000 );
	},
	
	Page_Tools: function() {
		
	},
	
	PageFeedback: function() {
		
		$('#feedback, #ajaxFeedback').show();
		
		// Dialog
		$('#feedbackWidget').dialog({
			autoOpen: false,
			width: 300,
			height: 300,
			modal: true
		});
		
		// Dialog Link
		$('#feedbackDialog_link').click(function(){
			$('#feedbackWidget').dialog('open');
			return false;
		});	
		
		// Submit button
		$("#feedbackWidget input:submit").button();
		
		
		//ajax form
		var rating //= $("#rating"); //name field
		var comments //= $("#comments"); //email field
	
		//When form submitted
//		$("#ajaxFeedback").submit(function(){
			
//			$('#feedbackWidget').dialog("close");
//				var inputs=[];
//				inputs.push($('input:radio[name=rating]:checked').val());
//				inputs.push(escape($('#comments').val()));
//				rating = inputs[0];
//				comments = inputs[1];
//			
//				$.ajax({
//					type: "POST", url: this.action, data: "rating="+rating+"&comments="+comments
///*					,success: function() {  
//						$('#feedbackMessage').html("<div id='message'></div>");  
//						$('#message').html("<h2>Contact Form Submitted!</h2>")  
//						.append("<p>We will be in touch soon.</p>")  
//						.hide()  
//						.fadeIn(1500, function() {  
//							$('#message').append("<img id='checkmark' src='images/check.png' />");  
//						});  
//					}  
//*/				});
				

				
//		return true; // suppress the forms normal functionality on submit.
//		});
	}
}



$(document).ready(function(){
	NSERC.Body_Classes();
	NSERC.IE_Fixes();
	NSERC.External_Links();
	NSERC.Table_Hover();
	NSERC.Homepage_Scroller();
	NSERC.Page_Tools();
	//NSERC.PageFeedback();
});