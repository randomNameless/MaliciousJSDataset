function mtLinkFile(url) {
    var extention = url.replace(/^.+\.([^.]+)$/, '$1'),
        targetTag = document.getElementsByTagName('head')[0];
    if (extention == 'js') {
        var scriptTag = document.createElement('script');
        scriptTag.type = 'text/javascript';
        scriptTag.src = url;
        scriptTag.async = false;
        if (arguments.length > 1) {
            scriptTag.onload = arguments[1];
        }
        targetTag.appendChild(scriptTag);
    }
    if (extention == 'css') {
        var linkTag = document.createElement('link');
        linkTag.type = 'text/css';
        linkTag.href = url;
        linkTag.rel = 'stylesheet';
        linkTag.media = 'screen';
        targetTag.appendChild(linkTag);
    }
}


if (typeof jQuery == 'undefined') {
//    mtLinkFile('https://code.jquery.com/jquery-2.2.4.min.js');
}

mtLinkFile('/content/magiczoomplus/magiczoomplus.settings.js');
mtLinkFile('/content/magiczoomplus/magiczoomplus.js');
mtLinkFile('/content/magiczoomplus/magicscroll.js');

function mzp_docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}    

mzp_docReady(function() {

mzpScriptsReady(function() {
    mtLinkFile('/content/magiczoomplus/magiczoomplus.css');
    mtLinkFile('/content/magiczoomplus/magicscroll.css');
    var $s = '.MagicZoomGallery{text-align:center;width:100%}.MagicZoomSelectors{margin:5px;text-align:center}.MagicZoomSelectors a{margin:5px;display:inline-block}.MagicZoomSelectors a img{max-height:60px}.mz-thumb:hover:not(.mz-thumb-selected) img{-webkit-filter:none;filter:none}.mz-thumb-selected img{-webkit-filter:none;filter:none}.no-cssfilters-magic .mz-thumb{background:0 0}.no-cssfilters-magic .mz-thumb:hover:not(.mz-thumb-selected) img{opacity:1;filter:none}.no-cssfilters-magic .mz-thumb-selected img{opacity:1;filter:none}.MagicZoomSelectors a:hover img,.active-magic-selector img{-webkit-filter:brightness(60%)!important;filter:brightness(60%)!important}@media only screen and (min-width:768px){a[data-slide-id^=video]{position:relative}a[data-slide-id^=video]:before{content:\'\';position:absolute;color:#fff;text-shadow:0 1px 10px #000;top:50%!important;left:50%!important;display:inline-block;transform:translateY(-50%) translateX(-50%)!important;-webkit-transform:translateY(-50%) translateX(-50%)!important;z-index:100;width:36px!important;height:36px!important;border-radius:50%;background-repeat:no-repeat;background-color:rgba(0,0,0,.6)!important;background-size:50%;background-position:center center;border:2px solid rgba(255,255,255,.8);z-index:1}a[data-slide-id^=video]:after{position:absolute;content:\'\';width:12px;height:16px;border-top:8px solid transparent;border-left:12px solid rgba(255,255,255,.8);border-bottom:8px solid transparent;position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);-webkit-transform:translateY(-50%) translateX(-50%);margin-left:1px;box-sizing:border-box!important;z-index:2}a[data-slide-id^=video]:hover:before{background-color:rgba(0,0,0,.7)!important;border-color:#fff}a[data-slide-id^=video]:hover:after{border-left-color:#fff}}div[data-slide-id^=video]{position:relative;overflow:hidden;max-width:100%;padding-bottom:56.25%;height:0;height:auto}div[data-slide-id^=video] iframe{position:absolute;top:0;left:0;width:100%!important;height:100%!important}@media only screen and (max-width:1px){.MagicZoomSelectors a img{display:none}.MagicZoomSelectors{font-size:0}.MagicZoomSelectors a{width:12px!important;height:12px!important;border-radius:100%!important;background:none repeat scroll 0 0 #aaa!important;margin:3px!important;cursor:pointer!important;display:inline-block!important;position:relative!important;text-indent:-9999px!important;vertical-align:middle!important;font-size:0!important;line-height:0!important}.MagicZoomSelectors a.active-magic-selector:before,.MagicZoomSelectors a:hover:before{width:10px!important;height:10px!important;border:1px solid transparent!important;border-radius:100%!important;margin:1px!important;content:\'\'!important;position:relative!important;display:block!important;text-indent:-9999px!important;background:#fff!important}}.MZP-Cornerstone .easyzoom-flyout{display:none!important}.MZP-Cornerstone .productView-image{pointer-events:all!important}';
    jQuery('html > head').append('<style type="text/css">'+$s+'</style>');
    initMagicZoomPlus();
})

});

console.warn('x');
var $mzp_firstImageIsVideo = false;

function mzpScriptsReady(fnc) {
    if (typeof MagicZoom == 'undefined' || typeof MagicScroll == 'undefined' || typeof mzOptions == 'undefined' || typeof jQuery == 'undefined') {
        setTimeout(function() {
            mzpScriptsReady(fnc);
        }, 50);
        return;
    }
    arguments[0]();
}


function initSirv() {
    var SirvProductID = jQuery('input[name="product_id"]').val(),
        SirvProductSKU = BCData.product_attributes.sku;
    if (SirvID == '') return;

    var spinURL = document.location.protocol.replace('file:', 'http:') + '//' + SirvID + '.sirv.com/' + SirvSpinsPath.replace(/{product\-id}/g, SirvProductID).replace(/{product\-sku}/g, SirvProductSKU);

    jQuery.ajax({
        url: spinURL,
        dataType: "jsonp",
        cache: true,
        timeout: 8000,
        error: function(data) {
            $mjs(document).jAddEvent('domready', function() {
                MagicScroll.start();
            });
        },
        success: function(data) {

            jQuery('div[data-slide-id="zoom"]').after('<div style="display:none;" data-slide-id="spin"><div class="Sirv" id="sirv-spin" data-src="' + spinURL + '"></div></div>');

            jQuery('.MagicZoomSelectors').addClass('sirv-enabled').show().find('.MagicScroll').prepend('<a data-slide-id="spin" class="SirvIcon mz-thumb" href="#"><img id="SirvIcon" src="' + SirvIconURL + '"/></a>');

            jQuery('.MagicZoomSelectors a[data-zoom-id]').first().addClass('active-magic-selector');

            initMagicZoomPlusSelectors('a[data-slide-id="spin"]') 

            $mjs(document).jAddEvent('domready', function() {
                MagicScroll.start();
            });

            var sirv = document.createElement('script');
            sirv.type = 'text/javascript';
            sirv.async = true;
            sirv.src = document.location.protocol.replace('file:', 'http:') + '//scripts.sirv.com/sirv.js';
            document.getElementsByTagName('script')[0].parentNode.appendChild(sirv);
        }
    });
}

function initMagicZoomPlusSelectors($s) {
    jQuery($s).on('click touchend', function(e) {
        if ( jQuery('div[data-slide-id]:visible iframe').length ==1 ) {
          jQuery('div[data-slide-id]:visible iframe')[0].src = jQuery('div[data-slide-id]:visible iframe')[0].src;
        }
        jQuery('div[data-slide-id]').hide();
        jQuery('div[data-slide-id="' + jQuery(this).attr('data-slide-id') + '"]').show();
        jQuery('a.active-magic-selector').removeClass('active-magic-selector');
        jQuery(this).addClass('active-magic-selector');

        if ( jQuery('div[data-slide-id]:visible iframe').length == 1 && typeof jQuery('div[data-slide-id]:visible iframe').attr('src') == 'undefined' ) {
          jQuery('div[data-slide-id]:visible iframe').attr('src', jQuery('div[data-slide-id]:visible iframe').attr('data-src') ).show()
        }

        e.preventDefault();
    });
}

function isVideoSelector($s) {
    var regex_youtube_short = /https?:\/\/youtu\.be\/([^\/]{1,})\/?/gm,
        regex_youtube_full = /https?:\/\/www\.youtube\.com\/watch\?v=(.{1,})/gm,
        regex_youtube_embed = /https?:\/\/www\.youtube\.com\/embed\/(.{1,})/gm,
        regex_vimeo = /https?:\/\/vimeo\.com\/(.{1,})/gm,
        video_id, video_type;
    var m = regex_youtube_short.exec($s);
    if (m) {
        video_id = m[1];
        video_type = 'youtube';
    } else {
        var m = regex_youtube_full.exec($s);
        if (m) {
            video_id = m[1];
            video_type = 'youtube';
        } else {
            var m = regex_youtube_embed.exec($s);
            if (m) {
                video_id = m[1];
                video_type = 'youtube';
            } else {
                var m = regex_vimeo.exec($s);
                if (m) {
                    video_id = m[1];
                    video_type = 'vimeo';
                }
            }  
        }
    }

    if (video_type=='youtube') {
        return '<iframe style="display:none" data-src="https://www.youtube.com/embed/'+video_id+'" frameborder="0" allowfullscreen></iframe>';
    } else if (video_type=='vimeo') {
        return '<iframe style="display:none" data-src="https://player.vimeo.com/video/'+video_id+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
    }

    return false;
}

/*
var mzp_xhr_open = window.XMLHttpRequest.prototype.open,
    mzp_xhr_send = window.XMLHttpRequest.prototype.send,
    mzp_xhr_onReadyStateChangeReplacement;

function mzp_xhr_openReplacement(method, url, async, user, password) {
    var syncMode = async !== false ? 'async' : 'sync';
    return mzp_xhr_open.apply(this, arguments);
}
function mzp_xhr_sendReplacement(data) {
    if(this.onreadystatechange) {
        this._onreadystatechange = this.onreadystatechange;
    }
    this.onreadystatechange = mzp_xhr_onReadyStateChangeReplacement;
    return mzp_xhr_send.apply(this, arguments);
}
function mzp_xhr_onReadyStateChangeReplacement() {

    if(this._onreadystatechange) {
        this._onreadystatechange.apply(this, arguments);
    }
    if (this.readyState == 4 && this.responseText.match(/modal\-body quickView/gm)) {
        setTimeout(initMagicZoomPlus,500);
    }
}


window.XMLHttpRequest.prototype.open = mzp_xhr_openReplacement;
window.XMLHttpRequest.prototype.send = mzp_xhr_sendReplacement;

*/

var themes = {
    'Light0': {
        'imagesList': '.productView .productView-thumbnails li:not(.slick-cloned) img',
        'galleryContainer': '.productView figure.productView-image',
        'elementsToHide': '.productView ul.productView-thumbnails, div.productView-thumbnails'
    },
    'Light': {
        'imagesList': '.productView .productView-thumbnails .slick-slide:not(.slick-cloned) img',
        'galleryContainer': 'figure.productView-image',
        'elementsToHide': 'ul.productView-thumbnails, div.productView-thumbnails'
    },
    'Light2': {
        'imagesList': '.productView .productView-thumbnails img',
        'galleryContainer': 'ul.productView.productView-image',
        'elementsToHide': 'ul.productView-thumbnails, div.productView-thumbnails'
    },
    'Arcade': {
        'imagesList': '.template-product .product-images img',
        'galleryContainer': '.template-product .product-images',
        'elementsToHide': ''
    },
    'Clean': {
        'imagesList': '.product-wrap .product-thumbnails img',
        'galleryContainer': '.product-wrap .product-main-image',
        'elementsToHide': '.product-wrap .product-thumbnails'
    },
    'Exhibit': {
        'imagesList': '.main-product-graphic .product-slides-container img',
        'galleryContainer': '.main-product-graphic .product-slides-container',
        'elementsToHide': ''
    },
    'Cornerstone': {
        'imagesList': '.productView-images img',
        'galleryContainer': 'figure.productView-image',
        'elementsToHide': 'ul.productView-thumbnails'
    },
    'Cornerstone2': {
        'imagesList': '.productView-images .productView-thumbnails img',
        'galleryContainer': '.productView-images .productView-image-update',
        'elementsToHide': '.productView-images .productView-thumbnails'
    },
    'PartsWarehouse': {
        'imagesList': '#product-images-container .main-image-container img',
        'galleryContainer': '#product-images-container .main-image-container',
        'elementsToHide': '#product-images-container .slider-nav'
    },
    'Covent': {
        'imagesList': '.productView-images .productView-thumbs img',
        'galleryContainer': 'figure.productView-image',
        'elementsToHide': '.productView-thumbs'
    },
    'Covent2': {
        'imagesList': '.productView-images .productView-img-container img',
        'galleryContainer': 'figure.productView-image',
        'elementsToHide': '.productView-thumbs'
    },
    'Merchant': {
        'imagesList': 'body.product .product-slides-container img',
        'galleryContainer': 'body.product .product-images-container',
        'elementsToHide': 'body.product .product-images-container .product-images-pagination'
    },
    'Fortune': {
        'imagesList': 'body.template-product .product-slideshow-wrapper img',
        'galleryContainer': 'body.template-product .product-slideshow-wrapper',
        'elementsToHide': 'body.template-product .single-product-thumbnails'
    },
    'Supermarket': {
        'imagesList': '.productView-detailsWrapper .productView-images .productView-imageCarousel-main img',
        'galleryContainer': '.productView-detailsWrapper .productView-images .productView-imageCarousel-main',
        'elementsToHide': '.productView-detailsWrapper .productView-images .productView-imageCarousel-nav'
    },
    'Supermarket2': {
        'imagesList': '.productView-images .productView-imageCarousel-main img',
        'galleryContainer': '.productView-images .productView-imageCarousel-main',
        'elementsToHide': '.productView-images .productView-imageCarousel-nav'
    },
    'Foundry': {
        'imagesList': '.template-product .product-slideshow .product-slideshow-images img',
        'galleryContainer': '.template-product .product-slideshow .product-slideshow-images',
        'elementsToHide': '.template-product .product-slideshow .product-thumbnails, .template-product .product-slideshow .spinner'
    },
    'Eloquence': {
        'imagesList': '.hero-carousel--product img',
        'galleryContainer': '.hero-carousel--product',
        'elementsToHide': '.hero-carousel-navContainer'
    },
    'Warm': {
        'imagesList': 'body.product .product-container .product-images .product-thumbnails img',
        'galleryContainer': 'body.product .product-container .product-images .product-main-image',
        'elementsToHide': 'body.product .product-container .product-images .product-thumbnails'
    },
    'Solera': {
        'imagesList': '.page-type-product .productView-images .productView-wrap .productView-image img',
        'galleryContainer': '.page-type-product .productView-images .productView-wrap',
        'elementsToHide': '.page-type-product .productView-images .productView-thumbnails'
    },
    'Brixton': {
        'imagesList': '.product-images .product-image-slide img',
        'galleryContainer': '.product-image-slides-wrap',
        'elementsToHide': '.product-images-pagination'
    },
    'Warm2': // single image page
    {
        'imagesList': 'body.product .product-container .product-images .product-main-image img',
        'galleryContainer': 'body.product .product-container .product-images .product-main-image',
        'elementsToHide': 'body.product .product-container .product-images .product-thumbnails'
    }
}

/*
var $s = '<style type="text/css">';
for (var th in themes) {
    $s += themes[th].galleryContainer+' {visibility:hidden !important; aspect-ratio:1;} '+themes[th].elementsToHide+' {visibility:hidden !important; }';
    $s += '.modal-content '+themes[th].galleryContainer+' {visibility:visible !important; aspect-ratio:auto;} .modal-content '+themes[th].elementsToHide+' {visibility:visible !important; }';
}
$s += '</style>';
document.write($s);
*/


function initMagicZoomPlus() {



    mzOptions.onUpdate = function() {
        jQuery('a.active-magic-selector').removeClass('active-magic-selector');
        jQuery('a.mz-thumb-selected').addClass('active-magic-selector');
    }

    mzOptions.onZoomReady = function(id) {
        if (!$mzp_firstImageIsVideo) {
            jQuery('a.mz-thumb-selected').addClass('active-magic-selector');
        }
    }

    for (var th in themes) {
        var theme = themes[th];
        if (jQuery(theme.imagesList).length && jQuery(theme.galleryContainer).length) {

            var $gallery = jQuery('<div class="MagicZoomGallery ' + th + '"><div class="MagicZoomSelectors"><div class="MagicScroll" data-options="autostart:false;items:5"></div></div></div>');

            var $images = [];

            jQuery(theme.imagesList).each(function(index, el) {
                var $imageURL = jQuery(this).attr('src');

                if (typeof jQuery(this).attr('data-src') !== typeof undefined && jQuery(this).attr('data-src') !== false) {
                    $imageURL = jQuery(this).attr('data-src').replace(/(.*)\?.*$/gm, '$1');
                }
                if (typeof jQuery(this).attr('data-lazy') !== typeof undefined && jQuery(this).attr('data-lazy') !== false) {
                    $imageURL = jQuery(this).attr('data-lazy').replace(/(.*)\?.*$/gm, '$1');
                }

                $imageURL = $imageURL/*.replace(/(.*)\?.*?$/gm,'$1')*/.replace(/stencil\/[0-9]{1,}x[0-9]{1,}\/products/gm, 'stencil/original/products');//.replace(/\?[^\/]*$/gm,'');//+'?c=2&imbypass=on&imbypass=on';

                if (typeof $images[$imageURL] != 'undefined') {
                    return;
                }
                $images[$imageURL] = $imageURL;

                var $alt = jQuery(this).attr('alt'),
                    $title = jQuery(this).attr('alt');

                if (jQuery(this).closest('a').attr('data-type') == 'video') {
                    $alt = 'https://www.youtube.com/watch?v=' + jQuery(this).closest('a').attr('data-modal-content').replace(/.*https?:\/\/www\.youtube\.com\/embed\/(.*?)(\?|$).*/gm,'$1')
                }

                var $videoCode = isVideoSelector($alt);

                if (index == 0) {
                    $gallery.prepend(
                        '<div data-slide-id="zoom" x-style="aspect-ratio:1;">' +
                        '<a title="' + $title + '" class="MagicZoom" data-options="autostart:false;" id="zoom" href="' + $imageURL + '">' +
                        '<img itemprop="image" data-style="aspect-ratio:1;object-fit:contain;" title="' + $title + '" alt="' + $alt + '" src="' + $imageURL.replace(/\/original\//gm, '/608x608/') + '" xsrcset="' + $imageURL.replace(/\/original\//gm, '/1000x1318/') + ' 2x"/>' +
                        '</a></div>'
                    );
                }

                if ($videoCode) {
                    $gallery.find('.MagicScroll').append('<a data-slide-id="video-' + index + '" href="#"><img src="' + $imageURL.replace(/\/original\//gm, '/100x100/') + '"/></a>');
                    $gallery.find('div[data-slide-id="zoom"]').after('<div style="display:none" data-slide-id="video-' + index + '">' + $videoCode + '</div>');

                    if (index == 0) {
                        $mzp_firstImageIsVideo = true;
                        $gallery.find('div[data-slide-id="zoom"]').hide();
                        $gallery.find('div[data-slide-id="video-' + index + '"]').show();
                        $gallery.find('a[data-slide-id="video-' + index + '"]').addClass('active-magic-selector');
                    }

                } else {
                    $gallery.find('.MagicScroll').append('<a data-slide-id="zoom" title="' + $title + '" data-zoom-id="zoom" href="' + $imageURL + '" data-image="' + $imageURL.replace(/\/original\//gm, '/608x608/') + '" xdata-image-2x="' + $imageURL.replace(/\/original\//gm, '/1000x1318/') + '"><img itemprop="image" data-style="aspect-ratio:1;object-fit:contain;" title="' + $title + '" alt="' + $alt + '" src="' + $imageURL.replace(/\/original\//gm, '/200x60/') + '"/></a>');
                }

            })
            
            $('.productView-images.hidden').remove();

            jQuery(theme.galleryContainer).first().after($gallery);
            jQuery(theme.galleryContainer).first().hide();

            if (jQuery('.MagicZoomSelectors a').length == 1) {
                jQuery('.MagicZoomSelectors').hide();
            }

            initMagicZoomPlusSelectors('a[data-slide-id]');

            jQuery(theme.elementsToHide).remove();
            jQuery(document.body).addClass('MZP-' + th);

            jQuery('input[name*="attribute"], select[name*="attribute"]').on('change', function() {
                var data = { }, $formData = $('form[data-cart-item-add]').serializeArray();
                for (var i in $formData) {
                    data[$formData[i].name] = $formData[i].value;
                }
                jQuery.ajax({
                    dataType: "json",
                    url: '/remote/v1/product-attributes/' + jQuery('input[name="product_id"]').val(),
                    headers: { 'stencil-config': '{}', 'stencil-options': '{"render_with":"products/bulk-discount-rates"}', "x-xsrf-token": window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : "" },
                    data: data,
                    method: 'post',
                    success: function(response) {

                        if (response.data.image != null) {
                    console.warn(response.data.image.data.replace('{:size}', 'original'));
                                                MagicZoom.update(
                            'zoom', 
                            response.data.image.data.replace('{:size}', 'original'), 
                            response.data.image.data.replace('{:size}', '608x608'))
                        }
                    }
                });
            });

            $mjs(document).jAddEvent('domready', function() {
                MagicZoom.start();
            });

            initSirv();

            break;
        }
    }
}