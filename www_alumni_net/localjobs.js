// <![CDATA[

function jobscityCall(primaryColor, secondaryColor){
	
	if(primaryColor == ""){
		primaryColor = "#2653A3";
	}
	if(secondaryColor == ""){
		secondaryColor = "#2653A3";
	}
	
 if (article != "") {
 	for (var article_counter = 0; article_counter <Math.min(3,article.length); article_counter++) {	
		global_article[global_article_counter] = article[article_counter];
		global_article_counter++;
 	}
 } else {
	 
 	if (early_exit == 0) {
 		early_exit = 1;
 	}
 }
 
 if (early_exit == 0) {

 	var width = "100%";
 	var category;
 	var numberofarticles = global_article.length;
 	var heading_display = "Yes";
 	var heading_font;
 	var heading_font_size;
 	var job_font_size;
 	var job_fgcolor;
 	var com_font_size;
 	var com_fgcolor;
	if(numberofarticles != 0) {
 	document.writeln("<table style=\"border:solid 1px " + primaryColor + ";\" cellpadding='3' cellspacing='0'  width='100%'>");

	
 	for (var counter=0; counter <numberofarticles; counter++) {
 		heading_font = "Tahoma, Verdana, Arial, Helvetica, sans-serif";
 		heading_font_size = "-1";
 		job_font_size = "-1";
 		job_fgcolor = "2653A3";
 		com_font_size = "-2";
 		com_fgcolor = "000000";
 
 		if ((counter == (global_article.length - 1)) && jobs_text == 1) {
 			job_fgcolor = com_fgcolor;
 		}
 
 		if ((category != global_article[counter].cluster) && (heading_display == "Yes")) {
 			category = global_article[counter].cluster;
 			document.writeln("<tr><td style=\"background-color:" + primaryColor + "; text-align:center; padding:2px;\" ><font size="+heading_font_size+" face="+heading_font+" color='#FFFFFF'><b><span class=navbar1>Local Jobs</span></b></font></td></tr>");
 		}
 
 		document.writeln("<tr><td style=\"padding:5px; color:#2653A3;\">- ");
 		document.writeln("<a href='"+global_article[counter].url+"' target='top'>");
 		document.writeln("<font size="+job_font_size+" face="+heading_font+" color=\"" + secondaryColor + "\"");
 		document.writeln(">"+global_article[counter].job+"</font></a><br />");
 
 		if ((counter != (global_article.length - 1)) || jobs_text != 1) {
 			document.writeln("<font face="+heading_font+" size="+com_font_size+" color='#000000'");
 			document.writeln(">"+global_article[counter].com+"</font>");
 		}
		document.writeln("</td></tr>");
 	}
 
	document.writeln("<tr><td style=\"font-family:Tahoma, Verdana, Arial; font-size:10px; color:red;\"><center><i>");
	document.writeln("Powered by</i> <a style=\"color:" + secondaryColor + ";\" href='http://www.jobscity.net' target='_blank'>JOBSCITY.NET</a>");
	document.writeln("</center></td></tr></table>");
	}
 }
}
// ]]>

