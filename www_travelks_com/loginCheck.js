require(["sv_clientLib", "jquery"], function(clientLib, $) {
	if (clientLib.getCookie("plugins_core_logged_in") !== "true") { return; }
	
	let content = $("meta[name=sv-nav-properties]").attr("content");
	if (content === undefined) { return; }
	
	let id = JSON.parse(content).id;
	if (id === undefined) { return; }
	
	require([ "jquery", "text!plugins_core_adminbar.html", "goatee", "sv_site" ], function($, template, goatee, site) {
		let id = JSON.parse($("meta[name=sv-nav-properties]").attr("content")).id;
		
		let html = goatee.fill(template, {
			guid: clientLib.uuid(),
			url: site.cmsUrl + "plugins/nav/edit_page_content/?id=" + id
		});
		
		$("body").append(html);
	});
});