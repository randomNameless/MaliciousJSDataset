// JavaScript Document
jQuery(document).ready(function($){	
	/* 
	Petits tweaks JS pour mieux styler
	*/
	$('ul li:last-child').addClass('dernier');
	
	// Pour que les boutons 'précédent' et 'suivant' en haut des billets aient la même hauteur
	var hauteurNav = $('div#nav-above.navigation div.nav-previous').height();
	if( hauteurNav < $('div#nav-above.navigation div.nav-next').height() ) 
	{
		hauteurNav = $('div#nav-above.navigation div.nav-next').height();
	}
	$('div#nav-above.navigation > div').height(hauteurNav);

	
	// Pour widget Flickr
	$('li#quick-flickr-widget-3 div.quick-flickr-item:even').css('margin-right', '18px');
	$('#tweetblender-2-mc div.tb_footer a.tb_archivelink').text('Plus de tweets');
	
	// Pour widget YouTube
	$('#execphp-2.widget-container div.execphpwidget a:odd img').css('margin-top', '16px');
	
});

$(window).load(function() {
	 /* 
	 Pour contrer un bogue au chargement initial de la page, qui faisait se superposer les briques,
	 on attend que tout soit chargé, y compris les polices de caractères
	 */
	 $('#briques').masonry({
					   itemSelector: '.hentry',
					   columnWidth: 320
					   });
	/* L'effet hover sur les briques */
	$('#briques div.hentry').hover(
							 function(){
								 $(this).animate({opacity: 0.8});
								 },
							function(){
								 $(this).animate({opacity: 1});
								 }	 
							 );
	/* 
	Pour la page des expositions virtuelles seulement,
	rendre cliquables les briques en utilisant le lien qu'elles contiennent
	*/
	$('div.exposition_virtuelle')
	  .css('cursor', 'pointer')
	  .click(
		    function(){
			    var url = $('a.lien-externe',this).attr('href');
			    window.open(url);
			    }
	  )
});
