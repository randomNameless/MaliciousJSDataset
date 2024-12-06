//
// $Id$
// Create the Logo as text with CSS effects to get the size and style etc.
// Copyright (C) 2022 Ian Hartas, UKBMD
//
function docountylogo(countyName, topDir)
{
	var countyLogo = "<div class=\"bmdlogo\">" +
"	<div class=\"divc\">" +
"		<a class=\"noul\" href=\"" + topDir + "index.php\" alt=\"" + countyName + " BMD Home\" title=\"" + countyName + " BMD Home\"><span class=\"bannercounty\">" + countyName +  "&nbsp;</span><span class=\"bannerB\">B</span><span class=\"bannerM\">M</span><span class=\"bannerD\">D</span></a>" +
"		<br>" +
"		<a class=\"noul\" href=\"" + topDir + "index.php\" alt=\"" + countyName + " BMD Home\" title=\"" + countyName + " BMD Home\"><span class=\"bannertext\">Births, Marriages and Deaths on the Internet</span></a>" +
"	</div>" +
"</div>";

	document.getElementById("mainLogoId").innerHTML = countyLogo;
	return true;
}

// Welsh version

function docountylogo_c(countyName, topDir)
{
	var countyLogo = "<div class=\"bmdlogo\">" +
"	<div class=\"divc\">" +
"		<a class=\"noul\" href=\"" + topDir + "index-c.php\" alt=\"" + countyName + " Hafan\" title=\"" + countyName + " Hafan\"><span class=\"bannerB\">G</span><span class=\"bannerM\">P</span><span class=\"bannerD\">M</span><span class=\"bannercounty\">&nbsp;" + countyName +  "</span></a>" +
"		<br>" +
"		<a class=\"noul\" href=\"" + topDir + "index-c.php\" alt=\"" + countyName + " Hafan\" title=\"" + countyName + " Hafan\"><span class=\"bannertext\">Genedigaethau, Priodasau a Marwolaethau ar y Rhyngrwyd</span></a>" +
"	</div>" +
"</div>";

	document.getElementById("mainLogoId-c").innerHTML = countyLogo;
	return true;
}


