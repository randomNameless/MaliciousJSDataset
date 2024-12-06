/**
 * @package Helix3 Framework
 * @author JoomShaper http://www.joomshaper.com
 * @copyright Copyright (c) 2010 - 2015 JoomShaper
 * @license http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 or later
 */

jQuery(document).ready(function($) {
    'use strict';

    // Full width Slideshow
    var $slideArtLeading = $('#slide-art-leading');

    $slideArtLeading.owlCarousel({
        center: true,
        loop: true,
        margin: 0,
        autoplay: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoWidth: false,
        items: 1,
        singleItem: true,
        dots: true,
    });


    $('.sppbArtSlidePrev').click(function() {
        $slideArtLeading.trigger('prev.owl.carousel', [400]);
    });

    $('.sppbArtSlideNext').click(function() {
        $slideArtLeading.trigger('next.owl.carousel', [400]);
    });

    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            var newNodes = mutation.addedNodes;
            if (newNodes !== null) {
                var $nodes = $(newNodes);

                $nodes.each(function() {
                    var $node = $(this);
                    $node.find('#slide-art-leading').each(function() {

                        var $slideArtLeading = $(this);

                        $slideArtLeading.owlCarousel({
                            center: true,
                            loop: true,
                            margin: 0,
                            autoplay: true,
                            animateIn: 'fadeIn',
                            animateOut: 'fadeOut',
                            autoWidth: false,
                            items: 1,
                            singleItem: true,
                            dots: true,
                        });


                        $('.sppbArtSlidePrev').click(function() {
                            $slideArtLeading.trigger('prev.owl.carousel', [400]);
                        });

                        $('.sppbArtSlideNext').click(function() {
                            $slideArtLeading.trigger('next.owl.carousel', [400]);
                        });

                    });
                });
            }
        });
    });

    var config = {
        childList: true,
        subtree: true
    };

    // Pass in the target node, as well as the observer options
    observer.observe(document.body, config);

});