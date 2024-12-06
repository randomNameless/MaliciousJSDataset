function genCTAOnClick(toUrl, smartAdId, floodlightCat, googleConLbl)
{
	//SmartAdserver Tracking
	var sas_tmstp=Math.round(Math.random()*10000000000);
	document.write('<img src="https://www3.smartadserver.com/track/pix2.asp?301308;" + smartAdId + ";'+sas_tmstp+';0;[transactionid];[reference]" width=1 height=1 border=0></img>'); 

	//DoubleClick Floodlight
	var axel = Math.random() + "";
	var a = axel * 10000000000000;
	document.write('<iframe src="https://8132117.fls.doubleclick.net/activityi;src=8132117;type=invmedia;cat=" +  floodlightCat + ";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');

	//Google code
	var google_conversion_id = 929311686;
	var google_remarketing_only = false;
	document.write('<img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/'+google_conversion_id+'/?label='+googleConLbl+'"></img>');
    if(toUrl)
    {
       document.location.replace(toUrl);
    }
}

function ctaOnClick(toUrl)
{
	genCTAOnClick(toUrl, '27769', 'lmmxwb7g', "aQL0CPHWi3wQxteQuwM");
}

/*function cpgCTAOnClick(toUrl)
{
	ctaOnClick(toUrl);
}*/

function pushERConv(page)
{
	var site = '9269', s, er = document.createElement('script'); 
    er.type = 'text/javascript';
	er.async = true; 
	er.src = '//o2.eyereturn.com/?site=' + site + '&page=' + page;
	s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(er, s);
}

function celiCTAOnClick(toUrl)
{
	genCTAOnClick(toUrl, '28992', 'rumqiprm', "kUJjCJPGnokBEMbXkLsD");
}

function reerCTAOnClick(toUrl)
{
	genCTAOnClick(toUrl, '28991', 'db3ynadt', "TxAICNTCnokBEMbXkLsD");
}