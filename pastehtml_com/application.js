function check_if_empty(){
	var f = document.forms['post_form'];
	if (f.elements['txt'].value == ''){
		//f.elements['next_button'].disabled = true;
		$('#form_extended_controls').hide();
		}else
		{
			//f.elements['next_button'].disabled = false;
			$('#form_extended_controls').show();
		}
	}
function select_demo_code(){
	var f = document.forms['post_form'];
	f.elements['txt'].select();
}
function submit_html()
{
	$('#submit').hide();
	$('#submitting').show();
	document.forms['post_form'].submit();
	return false;
}
function submit_preview()
{
	$('#submit').hide();
	$('#submitting_message_text').text('Generating preview...');
	$('#submitting').show();
	document.forms['post_form'].action = '/upload/preview';
	document.forms['post_form'].elements['preview'].value = 'true';
	document.forms['post_form'].submit();
	return false;
}
function tab_clicked(color)
{
	$('#markdown_reference').hide();
	$('#txtarea').css({borderColor : color});
	$('#txtarea').focus();
	if(color == '#d2d2d2'){
		start_ckeditor();
	}else {
		if(editor != null) {
			var editor_data = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><title></title></head><body>' + editor.getData() + '</body></html>';
			editor.destroy(true);
			editor = null;
			$('txtarea').value = editor_data;
		}
		if(color == '#89E2FF'){
			$('#markdown_reference').show();
		}
	}
}
function start_ckeditor() {
	editor = CKEDITOR.replace('txtarea', {customConfig : 'http://img.pastehtml.com/ckeditor/max_config.js'});
}
function read_cookie(cookieName) {
	var theCookie=""+document.cookie;
	var ind=theCookie.indexOf(cookieName);
	if (ind==-1 || cookieName=="") return ""; 
	var ind1=theCookie.indexOf(';',ind);
	if (ind1==-1) ind1=theCookie.length; 
	return unescape(theCookie.substring(ind+cookieName.length+1,ind1));
}
function populate_uploaded_items(){
	var items_string = read_cookie('pastehtml_items');
	if (items_string != null && items_string.length > 4){
		$('#your_uploaded_items').html('<a href="/my_pages">View your pages (' + items_string.split('.').length + ')</a>');
	}
}

function escapeHTML() {
    return this.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function counts(guid) {
	$.ajax({url: "/api/counts/" + guid, }).done(function(data) { 
		$('#view_count').html(data);
	});
}