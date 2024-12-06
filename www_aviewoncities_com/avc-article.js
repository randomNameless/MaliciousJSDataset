//Wait until page is loaded
window.addEventListener('load', function () {
	var lnk = document.querySelectorAll('[data-img]');
	if (!lnk.length) {
		//legacy method (no hover image)
		lnk = document.querySelectorAll('[data-lnk]');
	} 
	if (lnk.length) {
		// Images with a large version exist - add click event
		add_event_listener_node(lnk, 'click', handle_image_click); 
	}
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        var isEscape = false;
        if ("key" in evt) {
            isEscape = (evt.key === "Escape" || evt.key === "Esc");
        } else {
            isEscape = (evt.keyCode === 27);
        }
        if (isEscape) {
           close_lightbox();
        }
    };
    ajax_get_nearby_attractions();
});

// Get Nearby Attractions

function ajax_get_nearby_attractions() {
	const article_field = document.getElementById("article_id").innerText;
	const article_id = +article_field; // convert to number
	const url = '/wp-content/themes/avc/ajax/avc-nearby-attractions.php?id=' + article_id;
	const xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			nearby = document.getElementById("nearby");
			nearby.innerHTML = this.responseText;
		}
	}
	// Sending our request 
	xhr.send();
}

// Show Lightbox
	
function add_event_listener_node(node, event, fn) {
    for (var i = 0, len = node.length; i < len; i++) {
        node[i].addEventListener(event, fn, false);
    }
}
function handle_image_click(event) {
	// Get image path for lightbox image 
	const src = event.target.getAttribute('src');
	const tpe = src.substr(src.length - 4) == 'webp' ? 'webp' : 'jpg';
	var parent = event.target.parentElement;
	var new_img;
	if (parent) {
		const grandparent = parent.parentElement;
		const sibling = parent.nextElementSibling;
		if (grandparent && grandparent.nodeName == 'FIGURE') {
			parent = grandparent;
		}
		if (parent.nodeName == 'FIGURE') {
			// Figure method
			const caption = parent.getElementsByTagName('figcaption');
			if (caption && caption[0]) {
				show_lightbox_caption(caption[0]);
			} else if (sibling && sibling.nodeName == 'FIGURE') {
				const caption = sibling.getElementsByTagName('figcaption');
				if (caption && caption[0]) {
					show_lightbox_caption(caption[0]);
				}
			}
		} /*else {
			// Legacy method
			if (sibling) {
				const node = sibling.nodeName.toLowerCase();
				if (node == 'div') {
					show_lightbox_caption(sibling);
				} else {
					if (node == 'p') {
						// First image has no caption, use caption of second image
						const sibling2 = sibling.nextElementSibling;
						if (sibling2) {
							const node2 = sibling2.nodeName.toLowerCase();
							if (node2 == 'div') {
								show_lightbox_caption(sibling2);
							}
						}
					}
				}
			}
		}*/
	}
	if (event.target.parentElement) {
		new_img = event.target.parentElement.getAttribute('data-img');
	}
	if (!new_img) {
		new_img = event.target.getAttribute('data-lnk'); // Legacy
	}
	const path = src.substr(0, src.lastIndexOf("/"));
	const new_src = path + '/' + new_img + 's.' + tpe;
	// Show large image in a lightbox
	const background = document.getElementById('lightbox-background');
	const wrapper = document.getElementById('lightbox-wrapper');
	const content = document.getElementById('lightbox-content');
	content.innerHTML = '<img id="boximg" src="' + new_src + '" />';
  	background.style.display = "block";
  	wrapper.style.display = "block";
	window.addEventListener('click', click_outside, true);
}
function click_outside(e) {
	if (!document.getElementById('boximg').contains(e.target)) {
		// Clicked outside the lightbox image
		close_lightbox();
	}
}
function show_lightbox_caption(sibling) {
	const caption_value = sibling.innerText;
	const caption = document.getElementById('lightbox-caption');
	caption.innerHTML = caption_value;
}
function close_lightbox() {
	const wrapper = document.getElementById('lightbox-wrapper');
	const background = document.getElementById('lightbox-background');
	const caption = document.getElementById('lightbox-caption');
	caption.innerHTML = '';
  	wrapper.style.display = "none";
  	background.style.display = "none";
	window.removeEventListener("click", click_outside, true);
}