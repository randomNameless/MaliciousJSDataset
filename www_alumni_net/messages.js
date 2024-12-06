/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * Code for dealing with partuza's messaging UI. Only to be included from the profile_messages.php template(!)
 */


/**
 * Shows the loader message in the selected tab's content
 */
function showLoader(messageType) {
	$('#'+messageType).html('<div class="loader no-results-message"><img src="/images/loader.gif" alt="Loading.." /><br />Loading ' + messageType + ' messages..</div>');
}


/**
 * Shows the selected message
 */
function showMessage(messageType, messageId) {
	showLoader(messageType);
	var whatToPass = 'no';
	jQuery.get( '/profile/messages/get', {'messageId' : messageId, 'messageType' : messageType, 'aReply' : whatToPass}, function(data, textStatus) {
												
		//alert(messageId);
		// assign the message html to the content area
	
		$('#' + messageType).html(data);
		// set the hover event for the back button
		$('#' + messageType + ' .button-style').hover(
				function() { $(this).addClass('ui-state-hover'); },
				function() { $(this).removeClass('ui-state-hover'); }
		);
	
		// bind the back button to load the tab's content
		/*$('#' + messageType + ' .button').bind('click', function() {
			selectMessagesTab(0, messageType);
		});*/
		
		// bind the back button to load the tab's content
		$('#backToMessage').bind('click', function() {
			selectMessagesTab(0, messageType);
		});
		
		//binds a reply button for inbox
		$('#sendReply').bind('click', function() {

			var reply_msg = $("textarea#replyMessage").val();
			//alert(messageId);
			jQuery.post('/profile/messages/sendreply', {'messageId' : messageId, 'reply_msg' : reply_msg}, function(data) {//selectMessagesTab(index);
			}); 

			showMessage(messageType, messageId);
		});
		
		$('.add-as-friend-alumni').bind('click', function() {
			var id = $(this).attr('id');
			var name = $(this).attr('name');
			jConfirm('You are about to add ' + name + ' as a friend. You have to wait for '  + name + '\'s approval before officially becoming his friend.', 'Add '+ name + ' as friend', 'Confirm', function(answer) {
				if(answer) {
					$('#'+messageType).html('<div class="loader no-results-message"><img src="/images/loader.gif" alt="Loading.." /><br />Adding friend..</div>');
					jQuery.post('/home/addfriendfrommessage', {'id' : id}, function(data) {
						jAlert(data, 'Add Friend', 'OK', function() {
							showMessage(messageType, messageId);
						});
					});
				}
			});	
		});
		

	});
}

/**
 * Shows the messages for the selected tab
 */
function selectMessagesTab(index, type) {
	
	// 0 = inbox, 1 = sent, 2 = notifications
	var messageType = '';
	if (type != undefined) messageType = type;
	else if (index == 0) messageType = 'inbox';
	else if (index == 1) messageType = 'sent';
	else if (index == 2) messageType = 'notifications';
	
	$('#inbox').html('');
	$('#sent').html('');
	$('#notifications').html('');

	// set loading message
	showLoader(messageType);

	// and load the tab's content (we reload every time so new messages pop up right away, it's the easy way out ok!:)
	jQuery.get( '/profile/messages/'+messageType, null,
		function(data, textStatus) {
			// assign the recieved html to the tab's content div
			$('#'+messageType).html(data);

			// add hover to the entire message div
			$('#'+messageType+' .message').hover(
				    function() { $(this).addClass('message-hover'); },
				    function() { $(this).removeClass('message-hover'); }
			);

			// add hover to the icons
			$('#'+messageType+' .message .ui-state-default').hover(
					    function() { $(this).addClass('ui-state-hover'); },
					    function() { $(this).removeClass('ui-state-hover'); }
			);

			// hook up the delete icon to a confirmation dialog, and the removal code to it's 'remove' button event
			$('#'+messageType+' .message .ui-icon-closethick').bind('click', function() {
				// get the message id from the span's id and cast it as a int (* 1)
				var messageId = $(this).attr('id').replace('removeIcon', '') * 1;
				$("#dialog" + messageId).dialog({
					bgiframe: true,
					resizable: false,

					height:140,
					modal: true,
					closeOnEscape: true,
					overlay: {
						backgroundColor: '#000',
						opacity: 0.5
					},
					buttons: {
						'Remove': function() {
					//	alert(messageId); 
						
							showLoader(messageType);
    						$(this).dialog('destroy'); 
    						jQuery.get( '/profile/messages/delete/'+messageId, {'message_type' : messageType},	function(data, textStatus) {
							//	alert(data);
    							selectMessagesTab(index, messageType);
    						});
						},
						'No': function() {
							$(this).dialog('destroy');
						}
					}
				});
				return false;
			});
			
			// The click on the persons name, handled in javascript since otherwise we can't stop the event propergation to the parent div click event
			$('#'+messageType+' .message a').bind('click', function() {
				window.location = $(this).attr('href');
				return false;
			});
			
			// Hook up the actual message click (aka: read message)
			$('#'+messageType+' .message').bind('click', function() {
				var messageId = $(this).attr('id').replace('message', '') * 1;
				showMessage(messageType, messageId);
				return false;
			});
		});
}

/**
 * Setup the tabs and load the messaging content on document load
 */
$(document).ready(function() {
	
	// create the tabs and call selectMessagesTab on click
	var $tabs = $('#messageTabs').tabs({
			select: function(e, ui) {
				selectMessagesTab(ui.index);
			}
	});
	
	// populate the current live tab
	var selected = $tabs.data('selected.tabs');
	selectMessagesTab(selected);

	// hook up the compose button
	$('#messageCompose').bind('click', function() {
		$('.dialog-box').remove();
		var index = $tabs.data('selected.tabs');
		var messageType = '';
		if (index == 0) messageType = 'inbox';
		else if (index == 1) messageType = 'sent';
		else if (index == 2) messageType = 'notifications';
		
		$('#'+messageType).html('<div class="loader no-results-message"><img src="/images/loader.gif" alt="Loading.." /><br />Loading form.. Please wait..</div>');
		
		jQuery.get( '/profile/messages/compose', null,
			function(data, textStatus) {
				// assign the recieved html to the tab's content div
				$('#'+messageType).html(data);
				$('#compose_send').bind('click', function() {
					//var to = $("select#to").val();
					var subject = $("input#subject").val();
					//alert(subject);
					var message = $('textarea#message').val();
					
					var arrayReceiver = new Array;
					var arrayTemp = new Object;
					var ctr =0;
					$("span[name^='recipients']").each(function (index) {
						//arrayReceiver.push($(this).val());
						//alert($(this).attr('id'));

						arrayTemp.type = $(this).attr('class');
						
						if(arrayTemp.type == 'email') {
							arrayTemp.id = $(this).attr('title');
						} else {
							arrayTemp.id = $(this).attr('id');
						}
						arrayReceiver[ctr]=arrayTemp;
						arrayTemp = {};
						ctr++;
					});
					var jsonString = JSON.stringify(arrayReceiver);

					
					
					if (arrayReceiver.length == 0 || subject == '' || message == '') {
						alert('Select a recipient and fill in a subject before sending');
					} else {
						//showLoader(messageType);
						jQuery.post('/profile/messages/send', {'arrayReceiver' : jsonString, 'subject' : subject, 'message' : message}, function(data) {
							//alert(data);
							selectMessagesTab(index);
						});
					}
				});
							
				
				$('#compose_cancel').bind('click', function() {
					selectMessagesTab(index);
				});
				$('#compose_send, #compose_cancel').hover(
						function() { $(this).addClass('ui-state-hover'); },
						function() { $(this).removeClass('ui-state-hover'); }
				);
			});
		});
	
	
});










