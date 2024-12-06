////////////////////////////////////////////////////////////////////////////////
// Helpline messages
/* See mat_resultswizard_division.tpl for a commented out implementation of this
//////////
delete_icon_help = "Delete Division";
delete_locked_icon_help = "Delete Division [Locked] - locked divisions have teams and/or matches assigned to them";
up_icon_help = "Move Up - older divisions should be higher than younger";
up_disabled_icon_help = "";
down_icon_help = "Move Down - older divisions should be higher than younger";
down_disabled_icon_help = "";
edit_icon_help = "Edit Division";
_help = "";

////////////////////////////////////////////////////////////////////////////////
// Shows the help messages in the helpline window
function helpline(help, index) {
	//document.post.helpbox0.value = eval(help + "_help");
	//document.post.elements[index].value = eval(help + "_help");
	document.getElementById(index).innerHTML = eval(help + "_help");
}
*/

//this switches expand collapse icons
function filter(imagename,objectsrc){
	if (document.images){
		document.images[imagename].src=eval(objectsrc+".src");
	}
}

//show OR hide funtion depends on if element is shown or hidden
function shoh(id) { 
    imgout=new Image(10,10);
    imgin=new Image(10,10);
    imgout.src="styles/images/arrow_right.png";
    imgin.src="styles/images/arrow_down.png";
	
	if (document.getElementById) { // DOM3 = IE5, NS6
		if (document.getElementById(id).style.display == "none"){
			document.getElementById(id).style.display = '';
			document.getElementById(id+'EDIT').style.display = ''; // TWH
			filter(("img"+id),'imgin');			
		} else {
			filter(("img"+id),'imgout');
			document.getElementById(id).style.display = 'none';
			document.getElementById(id+'EDIT').style.display = 'none'; // TWH
		}	
	} else { 
		if (document.layers) {	
			if (document.id.display == "none"){
				document.id.display = 'block';
				filter(("img"+id),'imgin');
			} else {
				filter(("img"+id),'imgout');	
				document.id.display = 'none';
			}
		} else {
			if (document.all.id.style.visibility == "none"){
				document.all.id.style.display = 'block';
			} else {
				filter(("img"+id),'imgout');
				document.all.id.style.display = 'none';
			}
		}
	}
}


////////////////////////////////////////////////////////////////////////////////
function showHide(s, id)
{
    var selIndex = s.selectedIndex;
 
    //if (s.selectedIndex == s.options.length - 1)
    if (s.options[selIndex].value == 'other')
        document.getElementById(id).style.display = '';
    else
        document.getElementById(id).style.display = 'none';
}

////////////////////////////////////////////////////////////////////////////////
function doFocus(s, message) {
	if(s.value == message)
		s.value='';
}

////////////////////////////////////////////////////////////////////////////////
function disableIfNull(s, id, cat)
{
	if (s.selectedIndex == 0)
	{
		document.forms['post'].elements[id].disabled = 'true';

		// clear wrestler
		wrestler = document.forms['post'].elements[id];
		wrestler.selectedIndex = 0;

		// disable other fields
		fname = 'other_' + cat + '_fname';
		lname = 'other_' + cat + '_lname';
		document.getElementById(fname).style.display = 'none';
		document.getElementById(lname).style.display = 'none';
	}
	else
		document.forms['post'].elements[id].disabled = '';
}

////////////////////////////////////////////////////////////////////////////////
// Define the date related info
var months = new Array("", "{L_JAN}", "{L_FEB}", "{L_MAR}", "{L_APR}", "{L_MAY}", "{L_JUN}",
			"{L_JUL}", "{L_AUG}", "{L_SEP}", "{L_OCT}", "{L_NOV}", "{L_DEC}");

////////////////////////////////////////////////////////////////////////////////
function onSameCheck(n)
{
    if (n == true)
    {
        if ( document.forms["post"].elements["day"].value != ''
            && document.forms["post"].elements["month"].value != ''
            && document.forms["post"].elements["year"].value != '' )
        {
            document.forms["post"].elements["endday"].value = document.forms["post"].elements["day"].value;
            document.forms["post"].elements["endmonth"].value = document.forms["post"].elements["month"].value;
            document.forms["post"].elements["endyear"].value = document.forms["post"].elements["year"].value;
            
            document.forms["post"].elements["endday"].disabled = true;
            document.forms["post"].elements["endmonth"].disabled = true;
            document.forms["post"].elements["endyear"].disabled = true;
        }
        else
        {
            alert('Please select a Start Date.');
            document.forms["post"].elements["same_end_date"].checked = false;
        }
    }
    else
    {
        document.forms["post"].elements["endday"].disabled = false;
        document.forms["post"].elements["endmonth"].disabled = false;
        document.forms["post"].elements["endyear"].disabled = false;
    }
}

////////////////////////////////////////////////////////////////////////////////
function onSameTitle(checked)
{
    var perennial_title = null;

    // Find the perennial title.
    if ( document.forms["post"].elements["perennial_title"].value == 'other'
        && document.forms["post"].elements["other_perennial_title"].value != ''
        && document.forms["post"].elements["other_perennial_title"].value != 'ENTER TITLE' )
    {
        perennial_title = document.forms["post"].elements["other_perennial_title"].value;
    }
    else if ( document.forms["post"].elements["perennial_title"].value != 'other'
        && document.forms["post"].elements["perennial_title"].value != '' )
    {
        var perennial_title_id = document.forms["post"].elements["perennial_title"].selectedIndex;
        perennial_title = document.forms["post"].elements["perennial_title"][perennial_title_id].innerHTML;
    }

    if (checked == true)
    {
        if (perennial_title != null)
        {
            document.forms["post"].elements["meet_title"].value = null;
            document.forms["post"].elements["meet_title"].disabled = true;
        }
        else
        {
            alert('Please select a Perennial Title.');
            document.forms["post"].elements["same_title"].checked = false;
        }
    }
    else // unchecked
    {
        if (perennial_title != null)
        {
            document.forms["post"].elements["meet_title"].value = perennial_title;
        }

        document.forms["post"].elements["meet_title"].disabled = false;
    }
}

function attachmentUpload(upload_form)
{
    success = false;

	// Check for valid attachment extension.
	obj = document.getElementById('path');
	filetype = obj.value.substring(obj.value.length-4,obj.value.length);
	filetype = filetype.toLowerCase();

	if (filetype != '.pdf')
	{
		// Alert to invalid file type.
		document.getElementById('error').innerHTML = 'Please select a *.pdf file.'+filetype;
	}
	else if(document.getElementById('title').value.length < 1)
	{
		// Alert when no title.
		document.getElementById('error').innerHTML = 'Please provide a descriptive label for this file.';
	}
	else
	{
	    document.getElementById('error').innerHTML = ''; // Clear possible error.
        Modalbox.deactivate();
        document.getElementById('buttons').style.display = 'none';
	    document.getElementById('spinner').style.display = '';
        upload_form.submit();
        success = true;
        // The modalbox is closed by the ajax server.
	
	
		// Clear possible error.
//		document.getElementById('error').innerHTML = '';

//		// Disable form.
//		if (document.all || document.getElementById)
//		{
//			for (i = 0; i < upload_form.length; i++)
//			{
//				var tempobj = upload_form.elements[i];
//				val = tempobj.type.toLowerCase();
//				if (val == "submit" || val == "reset")
//				tempobj.disabled = true;
//			}
//		}
//		
//		document.getElementById('spinner').style.display = '';
//		document.getElementById('wizard_page').submit();
		return false;
	}
}

// Pass upload_form in because, if we get it from here, IE7 throws a javascript error when using modalbox.
function photoUpload(upload_form)
{
    success = false;
    
    // Check for valid image extension.
    obj = document.getElementById('path');
    val = obj.value.substring(obj.value.length-4,obj.value.length);
    val = val.toLowerCase();
    var url = document.getElementById('url').value;

    if (null == upload_form)
    {
	    // Alert to invalid parameters.
	    document.getElementById('error').innerHTML = 'Invalid parameters received. Hit refresh and try again.';
    }
    else if (val != '.jpg' && val != '.jpeg' && val != '.png' && val != '.gif')
    {
	    // Alert to invalid file type.
	    document.getElementById('error').innerHTML = 'Please select either a *.jpg, *.png, or *.gif image file';
    }
    else if(document.getElementById('album').value == 'other' && (document.getElementById('other_album').value.length < 1 || document.getElementById('other_album').value == 'ENTER ALBUM'))
    {
	    // Alert when no album.
	    document.getElementById('error').innerHTML = 'Please select a album for this photo.';
    }
    else if(document.getElementById('title').value.length < 1)
    {
	    // Alert when no title.
	    document.getElementById('error').innerHTML = 'Please give this photo a title.';
    }
    else if(document.getElementById('description').value.length < 1)
    {
	    // Alert when no caption.
	    document.getElementById('error').innerHTML = 'Please give this photo a full description.';
    }
    else
    {
	    document.getElementById('error').innerHTML = ''; // Clear possible error.
        Modalbox.deactivate();
        document.getElementById('buttons').style.display = 'none';
	    document.getElementById('spinner').style.display = '';
        upload_form.submit();
        success = true;
        // The modalbox is closed by the ajax server.
    }
 
	return success;
}

function LoadGallery(photo_id, height, width, photo_src, title_id, title_text, caption_id, caption_text)
{
	document.getElementById(photo_id).width = width;
	document.getElementById(photo_id).height = height;
	document.getElementById(photo_id).src = photo_src;

// We don't use innerHTML here because it will render HTML tags.
//    if(document.all) // IE
//    {
//	    document.getElementById(title_id).innerText=title_text;
//	    document.getElementById(caption_id).innerText=caption_text;
//    }
//    else // Firefox, etc.
//    {
//	    document.getElementById(title_id).textContent=title_text;
//	    document.getElementById(caption_id).textContent=caption_text;
//    }

    document.getElementById(title_id).innerHTML=title_text;
    document.getElementById(caption_id).innerHTML=caption_text;

  
	var images = document.getElementsByTagName('img');
	for (var i = 0; i < images.length; i++)
	{
		images[i].className = 'img_style';
	}
}


////////////////////////////////////////////////////////////////////////////////
/* TODO Check date with javascript
function checkForm()
{
	formErrors = '';

	monthcheck = document.post.month.options[document.post.month.selectedIndex].value;
	daycheck = document.post.day.options[document.post.day.selectedIndex].value;
	yearcheck = document.post.year.options[document.post.year.selectedIndex].value;
	formErrors += checkDate(monthcheck, daycheck, yearcheck, 'Start Date');

	if (document.post.endmonth)
    {
		monthcheck = document.post.endmonth.options[document.post.endmonth.selectedIndex].value;
		daycheck = document.post.endday.options[document.post.endday.selectedIndex].value;
		yearcheck = document.post.endyear.options[document.post.endyear.selectedIndex].value;
		if ((monthcheck != '') && (daycheck != '') && (yearcheck != ''))
        {
			formErrors += checkDate(monthcheck, daycheck, yearcheck, 'End Date');
		}
	}

	if (formErrors != '')
    {
		alert(formErrors);
		return false;
	}
    else
    {
		bbstyle(-1);
		return true;
	}
}

////////////////////////////////////////////////////////////////////////////////
function checkDate(mm, dd, yyyy, datetype)
{
	if((mm == 4 || mm == 6 || mm == 9 || mm == 11) && dd > 30)
    {
		error = datetype + ": " + months[mm] + " ({L_MAX} 30 {L_DAY})\n";
	}
	else if(mm == 2)
    {
		if (yyyy % 4 > 0 && dd > 28)
        {
			error = datetype + ": " + months[2] + " ({L_MAX} 28 {L_DAY})\n";
		}
		else if (dd > 29)
        {
			error = datetype + ": " + months[2] + " ({L_MAX} 29 {L_DAY})\n";
		}
		else
        {
			error = '';
		}
	}
	else
    {
		error = '';
	}

	return error;
}*/