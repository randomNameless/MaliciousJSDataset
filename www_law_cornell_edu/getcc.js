jQuery(document).ready(function() {
	var ccCss = '<link rel="stylesheet" type="text\/css" href="\/css\/cookieconsent.min.css" \/>';
	var ccJs = '<script src="\/js\/cookieconsent.min.js"><\/script>';
	var ccScript = '<script>window.addEventListener("load", function(){window.cookieconsent.initialise({"palette": {"popup": {"background": "#0e0d0e"},"button": { "background": "#fff"}}})});<\/script>';
	jQuery("head").append( ccCss );
	jQuery("head").append( ccJs );
	jQuery("head").append( ccScript );
});
