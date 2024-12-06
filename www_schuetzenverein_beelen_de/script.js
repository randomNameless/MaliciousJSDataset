// must be loaded at the end of the body element
(function(){
	var addEvent = function(element, event, func){
			if(element.addEventListener){
				element.addEventListener(event, func, false);
			}
			else{
				element.attachEvent('on'+event, func);
			}
		},
		eventPreventDefault = function(event){
			event = event || window.event;
			if(event.preventDefault){
				event.preventDefault();
			}
			else{
				event.returnValue = false;
			}
		},
		elementMatches = function(element, selector) {
			var methods = ['matches', 'matchesSelector', 'mozMatchesSelector', 'webkitMatchesSelector'];
			for (var i = 0; i < methods.length; i++) {
				if (methods[i] in element) {
					return element[methods[i]](selector);
				}
			}
			return false;
		},
		addClass = function(element, className) {
			var elements = ('length' in element && !('className' in element))
				? element
				: [element];
			for (var i = 0; i < elements.length; i++) {
				if (!hasClass(elements[i], className)) {
					elements[i].className += ' ' + className;
				}
			}
		},
		removeClass = function(element, className) {
			var elements = ('length' in element && !('className' in element))
				? element
				: [element];
			for (var i = 0; i < elements.length; i++) {
				if (hasClass(elements[i], className)) {
					elements[i].className = elements[i].className.replace(new RegExp('(?:^|\\s+)' + className + '(?:$|\\s+)'), ' ');
				}
			}
		},
		hasClass = function(element, className) {
			return !!element.className.match('(?:^|\\s)' + className + '(?:$|\\s)');
		},
		toggleClass = function(element, className) {
			return hasClass(element, className)
				? removeClass(element, className)
				: addClass(element, className);
		},
		footerForms = document.querySelectorAll('.page-footer-inner form'),
		labels,
		navMain = document.getElementById('main-navigation'),
		navMainLis, i, element, navMainTouched, touchUsed;
	if(footerForms && footerForms.length){
		for(i = 0; i < footerForms.length; i++){
			labels = footerForms[i].getElementsByTagName('label');
			for(var j = 0; j < labels.length; j++){
				(function(){
					var label = labels[j],
						labelFor,
						input;
					if(
						(labelFor = label.getAttribute('for')) &&
						(input = document.getElementById(labelFor)) &&
						(input.tagName.toLowerCase() == 'textarea' || input.type.toLowerCase() == 'text' || input.type.toLowerCase() == 'email' || input.type.toLowerCase() == 'password' || input.type.toLowerCase() == 'search')
					){
						addEvent(input, 'focus', function(){
							label.style.display = 'none';
						});
						addEvent(input, 'blur', function(){
							if(!input.value){
								label.style.display = '';
							}
						});
						if(input.value){
							label.style.display = 'none';
						}
					}
				})();
			}
		}
	}

	// Edge dropdown touch fix
	if(navMain && navMain.getElementsByTagName('ul').length){
		navMainLis = navMain.getElementsByTagName('ul')[0].childNodes;
		for(i = 0; i < navMainLis.length; i++){
			if(navMainLis[i].nodeName && navMainLis[i].nodeName.toLowerCase() === 'li' && navMainLis[i].querySelector('ul,.mega-dropdown')){
				element = navMainLis[i].getElementsByTagName('a');
				if(element && (element = element[0])){
					element.setAttribute('aria-haspopup', 'true');
				}
			}
		}
	}

	// dropdown fix for all touch devices
	if(window.Modernizr && Modernizr.touch){
		if(navMain && navMain.getElementsByTagName('ul').length){
			// devices supporting touch events may not mean touch input is used
			// e.g. touch enabled laptops running Windows 8
			addEvent(navMain, 'touchstart', function(event) {
				touchUsed = true;
			});
			navMainLis = navMain.getElementsByTagName('ul')[0].childNodes;
			for(i = 0; i < navMainLis.length; i++){
				if(navMainLis[i].nodeName && navMainLis[i].nodeName.toLowerCase() === 'li' && navMainLis[i].querySelector('ul,.mega-dropdown')){
					element = navMainLis[i].getElementsByTagName('a');
					if(element && (element = element[0])){
						addEvent(element, 'click', function(event){
							if(navMainTouched !== this && touchUsed){
								navMainTouched = this;
								eventPreventDefault(event);
							}
						});
					}
				}
			}
		}
	}

	// Mobile navigation
	(function(nav, page) {
		if (!nav) {
			return;
		}
		document.body.insertBefore(nav, document.body.firstChild);
		var navLink;
		var isOpened;
		var open, close;
		var updateHeight = function() {
			if (!isOpened) {
				return;
			}
			if (!nav.offsetHeight) {
				// Close the nav if it is not visible anymore
				return close();
			}
			nav.style.minHeight = 0;
			page.style.height = Math.max((window.innerHeight || document.documentElement.clientHeight), nav.offsetHeight) + 'px';
			page.style.position = 'relative';
			page.style.overflow = 'hidden';
			nav.style.minHeight = '';
		};
		open = function() {
			isOpened = true;
			addClass(nav, 'is-active');
			updateHeight();
		};
		close = function() {
			isOpened = false;
			removeClass(nav, 'is-active');
			page.style.height = '';
			page.style.position = '';
			page.style.overflow = '';
		};
		addEvent(window, 'resize', updateHeight);
		addClass(nav, 'is-enabled');
		navLink = document.createElement('a');
		navLink.innerHTML = 'navigation';
		navLink.href = '';
		addClass(navLink, 'main-navigation-mobile-open');
		addEvent(navLink, 'click', function(event) {
			eventPreventDefault(event);
			if (hasClass(nav, 'is-active')) {
				close();
			}
			else {
				open();
			}
		});
		if (document.querySelector && document.querySelector('.page-wrapper')) {
			document.querySelector('.page-wrapper').insertBefore(
				navLink,
				document.querySelector('.page-wrapper').firstChild
			);
		}
		else {
			nav.parentNode.insertBefore(navLink, nav);
		}
		closeButton = document.createElement('button');
		closeButton.innerHTML = 'close';
		addClass(closeButton, 'main-navigation-mobile-close');
		addEvent(closeButton, 'click', function(event) {
			if (isOpened) {
				close();
			}
			eventPreventDefault(event);
		});
		nav.appendChild(closeButton);
		var uls = nav.querySelectorAll('ul ul');
		var button;
		var buttonOnClick = function(event) {
			toggleClass(this.parentNode, 'is-expanded');
			toggleClass(this.parentNode, 'is-collapsed');
			updateHeight();
		};
		for (var i = 0; i < uls.length; i++) {
			button = document.createElement('button');
			button.innerHTML = 'expand';
			button.className = 'main-navigation-mobile-expand';
			addEvent(button, 'click', buttonOnClick);
			uls[i].parentNode.insertBefore(button, uls[i]);
			if (hasClass(uls[i].parentNode, 'active') || hasClass(uls[i].parentNode, 'trail')) {
				addClass(uls[i].parentNode, 'is-expanded');
			}
			else {
				addClass(uls[i].parentNode, 'is-collapsed');
			}
		}
	})(
		document.querySelector && document.querySelector('.main-navigation-mobile'),
		document.querySelector && document.querySelector('.page-wrapper')
	);

	// Animations
	(function(elements) {
		var filteredElements = [];
		for (var i = 0; i < elements.length; i++) {
			if (!elementMatches(elements[i], '.not-animated *, .not-animated')) {
				filteredElements.push(elements[i]);
			}
		}
		elements = filteredElements;
		if (!elements.length || !(window.Modernizr && Modernizr.csstransitions)) {
			return;
		}
		addClass(elements, 'not-in-view');
		var update = function() {
			var rect;
			for (var i = 0; i < elements.length; i++) {
				rect = elements[i].getBoundingClientRect();
				if (rect.top < (window.innerHeight || document.documentElement.clientHeight) * 0.8) {
					addClass(elements[i], 'in-view');
					addClass(elements[i], 'has-shown');
					removeClass(elements[i], 'not-in-view');
				}
				else if(rect.top > (window.innerHeight || document.documentElement.clientHeight) * 1.2) {
					addClass(elements[i], 'not-in-view');
					removeClass(elements[i], 'in-view');
				}
			}
		};
		addEvent(window, 'scroll', update);
		//addEvent(window, 'resize', update);
		//addEvent(window, 'load', update);
		setTimeout(update, 0);
	})(document.querySelectorAll && document.querySelectorAll('.is-animated'));

})();
