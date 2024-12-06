function loadSections(ajaxUrl) {
	$("#aa_main section").prepend('<div class="loading-section"></div>');
	//console.log(ajaxUrl);
	$.ajax({
		url: ajaxUrl
	}).done(function(data) {
		const updateUrl = function(url, prependPath) {
			if (url.indexOf('mailto:') === 0 || url.indexOf('://') >= 0 || url.indexOf('/') === 0 || url.indexOf('#') === 0) {
				return url;
			}
			const lastSlash = prependPath.lastIndexOf('/');
			if (lastSlash > 0 && lastSlash !== prependPath.length - 1) {
				//console.log("prependPath="+prependPath);
				prependPath = prependPath.substr(0, prependPath.lastIndexOf('/') + 1);
			}
			return prependPath + url;
		}
		data = data.replace(/(<a[ \t]+.*?href=")([^"]+)("[^>]*>)/g, function(match, sm1, sm2, sm3) {
			return sm1 + updateUrl(sm2, ajaxUrl) + sm3;
		});
		data = data.replace(/(<img[ \t]+.*?src=")([^"]+)("[^>]*>)/g, function(match, sm1, sm2, sm3) {
			return sm1 + updateUrl(sm2, ajaxUrl) + sm3;
		});
		data = data.replace(/(<iframe[ \t]+.*?src=")([^"]+)("[^>]*>.*?<\/iframe>)/g, function(match, sm1, sm2, sm3) {
			return sm1 + updateUrl(sm2, ajaxUrl) + sm3;
		});
		if (data.indexOf('<html') === 0 || data.indexOf('<!DOCTYPE') === 0) {
			data = data.replace(/^\s*<(?:html|!DOCTYPE)[^>]*>[^]*?<body[^>]*>/i, '');
			data = data.replace(/<\/body>[^]*?<\/html>\s*$/i, '');
		}
		if (data.indexOf('<section') !== 0) {
			data = '<section>' + data + '</section>';
		}
		//$("#aa_main section").first().before(data).end().remove(); // Find the first <section>, insert our HTML before it, return to the first <section>, remove it and all the others in the chain
		//console.log(data); console.log($("#aa_main section").last());
		//$("#aa_main section").last().after(data).end().remove(); // Find the last <section>, insert our HTML after it, return to the first <section>, remove it and all the others in the chain. (the very first section could be the adult warning box so we can't target the first)
		$("#aa_main section").remove();
		$("#aa_main").append(data);
		window.scrollTo(0, 0);	// Reset the scroll position

		// If original class data was stored, then restore the body to its original class
		const $body = $('body');
		const origClass = $body.data('orig-class');
		if (origClass) {
			$body.attr('class', origClass);
		}
		const $headTitle = $('head title');
		const origTitle = $headTitle.data('orig-title');
		if (origTitle) {
			document.title = origTitle;
		} else {
			$headTitle.data('orig-title', document.title);
		}

		// We have new class data we need to add to the body
		const addClass = $('#aa_main section[data-body-class]').data('body-class');
		if (addClass) {
			$body.data('orig-class', $body.attr('class')).addClass(addClass);	// Save the original class, then add in our class
		}
		const addTitle = $('#aa_main section[data-page-title]').data('page-title');
		if (addTitle) {
			document.title = addTitle + ' • ' + document.title;	// Save the original title, then add in our title
		}
		domReady();	// This will display the adult warning box if there are any images with a class that begins with "warn-"
		if (typeof colorboxRegister === 'function') {
			colorboxRegister();
		}
		if (typeof processAdultImgs == 'function') {
			processAdultImgs(); // function in adult_img_alt.js
		}
		else {
			$.getScript( "/!bin/js/adult_img_alt.js", function() {
				processAdultImgs();
			});
		}

		// Mark the real page as being visited
		if (history.replaceState) {
			const current_url = window.location.href;		// store the current URL
			const desired_url = ajaxUrl.split('?')[0];
			history.replaceState({}, "", desired_url)	// use replaceState to push a new entry into the browser's history
			history.replaceState({}, "", current_url)	// use replaceState again to reset the URL
		}
	});
}

const fileExplorerSidebar = function executeFileExplorerSidebar() {
	const self	 		= this;
	this.root			= path['root'];
	this.$fesb			= $('<div id="fesb" class="fileexplorer"><div id="fesb-toggle">&#128194;</div></div>').insertBefore('#aa_wrapper');	// Folders and Files Side Bar
	this.$folderArea	= $('<div id="fesb-folders"></div>').appendTo(self.$fesb);
	this.$fileArea		= $('<div id="fesb-files"></div>').appendTo(self.$fesb);
	this.$outerBar		= $('<div class="outer-dragbar"></div>').prependTo(self.$fesb);
	this.$innerBar		= $('<div class="inner-dragbar"></div>').insertAfter(self.$folderArea);
	this.closeAtW		= 50;	// Close when width is less than or equal to this
	this.closedW		= 4;	// Width when closed
	this.defaultW		= 200;
	this.speed			= 200;
	this.leavesSep		= '|';	// Separator for values in the openedLeaves cookie
	this.showAdult 		= typeof admin !== 'undefined' && admin.showAdult;

	// Cookies
	this.initialW		= getCookie('fileExplorer-width', self.defaultW);
	this.foldersScroll	= getCookie('fileExplorer-foldersScrollTop', 0);
	this.filesScroll	= getCookie('fileExplorer-filesScrollTop', 0);
	this.splitY			= getCookie('fileExplorer-splitY', self.$innerBar[0].getBoundingClientRect().top);
	this.splitYCookie 	= getCookie('fileExplorer-splitY', 'none-set'); // debugging
	//console.log("Getting splitY cookie: " + splitYCookie + (splitYCookie == 'none-set' ? ', setting splitY to this.$innerBar[0].getBoundingClientRect().top: ' + this.$innerBar[0].getBoundingClientRect().top : '')); // debugging

	// Filter by search field
	this.applySearchFilter = function(searchText = null) {
		const replaceRegEx = /[_-]/g;
		const links = $('ul.main-file-list li a');
		const $search = self.$folderArea.find('form.filter input[name="search"]');
		if (searchText === null) {
			searchText = $search.val();
		}
		searchText = searchText.toLowerCase().replace(replaceRegEx, ' ').trim();
		if (searchText === "") {
			links.parent().show();
			$search.val('').attr('value', '');
			return;
		}
		links.each(function() {
			const link = $(this);
			const text = link.text().toLowerCase().replace(replaceRegEx, ' ');
			if (text.indexOf(searchText) > -1) {
				link.parents('li').show();	// Show all li parents up the ancestor tree
			} else {
				link.parent().hide();			// Hide current li as it doesn't match
			}
		});
	};

	// The search filter field is changed so apply the filter to the list
	this.$folderArea.on('input', 'form.filter input[name="search"]', function(e) {
		self.applySearchFilter($(this).val());
	}).trigger('input');
	// The filter form was reset so clear the filter
	this.$folderArea.on('reset', 'form.filter', function(e) {
		//$('ul.main-file-list li').show();
		self.applySearchFilter('');
	});

	this.limitVal = function(val, min, max) {
		return val < min ? min : (val > max ? max : val);
	}

	this.limitFileExplorerW = function(w) {
		return self.limitVal(w, self.closedW, $(window).width() - 4);
	}

	this.isFileExplorerClosed = function() {
		return self.$fesb.width() <= self.closedW;
	}

	/**
	* Set the outer dragbar W
	*/
	this.setOuterDragbar = function(w, animate, save) {
		let newW = self.limitFileExplorerW(w);
		save = typeof save !== 'undefined' ? save : true;
		if (newW > self.closeAtW) {
			if (save) {
				setCookie('fileExplorer-width', newW);
				setCookie('fileExplorer-closed', false);
				self.$fesb.addClass('opened').removeClass('closed');
			}
			if (self.$folderArea.text() === '') {
				self.$folderArea.addClass('loading');
				self.$folderArea.load(self.root + "!index/frame-dirs.ajax.php", self.folderListLoaded);
			}
			if (self.$fileArea.text() === '') {
				self.$fileArea.addClass('loading');
				self.$fileArea.load(self.root + "!index/frame-files.ajax.php" + (self.showAdult ? '?showAdult=1' : ''), self.fileListLoaded);
			}
		} else {
			newW = self.closedW;
			if (save) {
				setCookie('fileExplorer-closed', true);
				self.$fesb.addClass('closed').removeClass('opened');
			}
		}
		//let availableSpc = $(window).width() - $("#aa_wrapper").outerWidth();
		//availableSpc = availableSpc < 0 ? 0 : availableSpc;
		//const leftAdj = this.limitVal(newW + ((availableSpc - newW) / 2), 0, availableSpc);
		if (animate) {
			self.$fesb.animate({width:newW}, self.speed);
			//$('#aa_wrapper, #navbar .primary').animate({'margin-left':leftAdj});
			$('.fesb-adjustment').animate({'margin-left': newW}, self.speed); //2019-11-06
		} else {
			self.$fesb.width(newW);
			//$('#aa_wrapper, #navbar .primary').css('margin-left', leftAdj);
			$('.fesb-adjustment').css({'margin-left': newW}, self.speed); //2019-11-06
		}
		//2019-11-06 $('#zergnet-widget-76110').attr('style', 'margin-left: ' + leftAdj + 'px !important;');
	}

	/**
	* Open the sidebar
	*/
	this.openFileExplorer = function(animate) {
		setCookie('fileExplorer-closed', false);
		self.$fesb.addClass('opened').removeClass('closed');
		if (this.isFileExplorerClosed()) {
			let w = self.$fesb.data('w');
			w = (w <= self.closedW) ? self.defaultW : w;
			self.setOuterDragbar(w, animate);
		}
	}

	/**
	* Close the sidebar
	*/
	this.closeFileExplorer = function(animate) {
		setCookie('fileExplorer-closed', true);
		self.$fesb.addClass('closed').removeClass('opened');
		if (!self.isFileExplorerClosed()) {
			const w =this.$fesb.width();
			self.$fesb.data('w', w);
			self.setOuterDragbar(self.closedW, animate, false);
			/*
			if (animate) {
				$fesb.animate({width:closedW}, speed);
			} else {
				$fesb.width(w);
			}
			*/
		}
	}

	/**
	* Set the inner dragbar Y position
	*/
	this.setInnerDragbar = function(y) {
		//console.log("Setting inner dragbar Y: " + y);
		const newY = self.limitVal(y, 64, $(window).height() - 64);
		//console.log("setInnerDragbar(" + y + ") is setting fileExplorer-splitY cookie to " + newY + "; $(window).height() - 64 = " + ($(window).height() - 64)); // debugging
		if (newY !== 64) {
			setCookie('fileExplorer-splitY', newY);
		}
		self.$innerBar.css('top', newY);
		self.$folderArea.css('bottom', self.$fesb.outerHeight() - newY - 2);
		self.$fileArea.css('top', newY + self.$innerBar.outerHeight());
	}

	/**
	* Callback function after folders list is loaded
	*/
	this.folderListLoaded = function(response, status) {
		self.$folderArea.removeClass('loading');
		if (status === 'success') {
			// Open the tree to whatever nodes were opened previously
			const leavesStr	= getCookie('fileExplorer-openedLeaves', '');
			const leavesArr	= leavesStr.split(self.leavesSep);
			for (let i = 0; i < leavesArr.length; i++) {
				const href = leavesArr[i];
				const $a = self.$folderArea.find('a[href="' + href + '"]');
				if ($a.length) {
					$a.prev('em').html('-');
					$a.next('ul').show();
				}
			}
			self.$folderArea.scrollTop(self.foldersScroll);
			//console.log(response);
			self.applySearchFilter();
		}
	}

	/**
	* Callback function after files list is loaded
	*/
	this.fileListLoaded = function(response, status) {
		self.$fileArea.removeClass('loading');
		if (status === 'success') {
			setCookie('fileExplorer-filesScrollTop', 0);
			self.$fileArea.scrollTop(self.filesScroll);
			self.$fileArea.find('li.imgFile a').addClass('cboxElement').attr({'data-lightbox': 'fesb-files', target:'_blank'});
			if (typeof colorboxRegister === 'function') {
				colorboxRegister($("#fesb-files a[data-lightbox]"));
			}
			if (self.$fileArea.data('doflash')) {
				self.$fileArea.removeData('doflash').fadeTo(100, 0.3, function() { $(this).fadeTo(100, 1.0); });
			}
			if (typeof self.afterFileListLoaded === 'function') {
				self.afterFileListLoaded();
			}
		}
	}

	this.loadFolder = function(dir) {
		const query   = "?ajax=true&dir=" + encodeURIComponent(dir) + (self.showAdult ? '&showAdult=1' : '');
		self.$fileArea.addClass('loading');
		self.$fileArea.attr({'data-dir': dir, 'data-doflash':true}).load(self.root + "!index/frame-files.ajax.php" + query, self.fileListLoaded);
	}

	this.init = function() {
		/**
		* Initialization
		*/
		// Set the initial sidebar column width
		if (self.$fesb.data('w') === undefined) {
			self.$fesb.data('w', self.initialW);
		}
		//const self = this;

		// Set the initial folder/files divider bar Y position
		//console.log("Initialization call of setInnerDragbar(" + this.splitY + ")"); //debugging
		self.setInnerDragbar(self.splitY);

		// Set the initial open/close status
		if (getCookie('fileExplorer-closed', true)) {
			self.closeFileExplorer(false);
		} else {
			self.openFileExplorer(false);
		}

		/**
		* Setup Events
		*/
		// Directory list filter dropdown was changed
		self.$fesb.on('change', 'form.filter select', function() {
			const $form = $(this).closest('form');
			$form.submit();
		});

		// Directory list filter form was submitted
		self.$fesb.on('submit', 'form.filter', function(e) {
			e.preventDefault();
			const filter  = $(this).find('select[name="filter"]').val();
			const query   = '?ajax=true&filter=' + filter + '&search=' + encodeURIComponent($(this).find('input[name="search"]').val());
			self.$folderArea.addClass('loading');
			self.$folderArea.load(self.root + "!index/frame-dirs.ajax.php" + query, self.folderListLoaded);
			//console.log(root + "!index/frame-dirs.ajax.php" + query);
		});

		// Clicked folder link
		self.$folderArea.on('click', 'li a[href]', function(e) {
			e.preventDefault();
			self.loadFolder($(this).attr('href'));
		});

		// Clicked file link or file group action
		self.$fileArea.on('click', 'li a', function(e) {
			if ($(this).is('[data-order]')) {
				e.preventDefault();
				const dir     = self.$fileArea.attr('data-dir') || self.$fileArea.find('.dirFileHead').attr('data-dir');
				const order   = $(this).data('order');
				const query   = "?ajax=true&dir=" + encodeURIComponent(dir) + (order === 'name' ? '&order=name' : '&order=type') + (self.showAdult ? '&showAdult=1' : '');
				$(this).data('order', order === 'name' ? 'type' : 'name');
				self.$fileArea.addClass('loading');
				self.$fileArea.load(self.root + "!index/frame-files.ajax.php" + query, self.fileListLoaded);
				return;
			}
			const href = $(this).attr('href');
			const $li = $(this).closest('li');
			let mediaType = '', playerType = $li.hasClass('sndFile') ? 'audio' : ($li.hasClass('vidFile') ? 'video' : '');
			let cboxOptions = {};
			if (playerType === 'audio') {
				mediaType = href.match(/\.mp3/i) ? 'mpeg' : (href.match(/\.ogg/i) ? 'ogg' : (href.match(/\.wav/i) ? 'wav' : ''));
			} else if (playerType === 'video') {
				mediaType = href.match(/\.mp4/i) ? 'mp4' : (href.match(/\.ogg/i) ? 'ogg' : (href.match(/\.webm/i) ? 'webm' : ''));
				cboxOptions = {width: '80%', height: '80%'};
			}
			if (playerType) {
				e.preventDefault();
				const display = href.replace(/^.*\//, '');    // Strip off the directory so we have just the filename
				const player  = mediaType ? '<' + playerType + ' controls><source src="' + href + '" type="' + playerType + '/' + mediaType + '"></' + playerType + '>' : '';

				$.colorbox($.extend(cboxOptions, {html:'<div class="av-player"><h1><a href="' + href + '">' + display + '</a></h1>' + player + '</div>'}));
				return;
			}
			// If we're on the special files page then just load the clicked link's content, unless the link is for the File Explorer page
			if ((href.search(/\.(?:html|htm|php)/) > 0 || href.indexOf('.') === -1) && document.location.href.search(/\/files(?:\.html)?(#.*?)?$/) >= 0) {
				e.preventDefault();
				if (href.indexOf('files') < 0) {
					document.location.hash = href.replace(/#%^\[\]{}\\"<>/, '');
				} else if (history.pushState) {
					history.pushState({}, document.title, window.location.pathname + window.location.search); // Removes the hash anchor and the '#'
				} else {
					document.location.hash = '';	// Removes the hash anchor, but not the '#'
				}
				const query = (href.indexOf('?') >= 0 ? '&' : '?') + 'ajax=sections';
				//console.log('href=' + href + ', query=' + query);
				loadSections(href + query);
			}
		});

		// Clicked directory tree leaf
		self.$folderArea.on('click', 'li > em', function(e) {
			e.preventDefault();
			const $em = $(this);
			$(this).siblings('ul').toggle(0, function() {
				$em.html($(this).is(':hidden') ? '+' : '-');

				// Update the cookie that keeps track of which nodes are opened
				const leavesStr	= getCookie('fileExplorer-openedLeaves', '');
				const leavesArr	= leavesStr ? leavesStr.split(self.leavesSep) : [];
				const thisNode	= $em.next('a').attr('href') ? $em.next('a').attr('href').trim() : '';
				const nodeIdx	= $.inArray(thisNode, leavesArr);
				if ($(this).is(':hidden')) {
					// Leaf closed so remove it from the list
					if (nodeIdx >= 0) {
						leavesArr.splice(nodeIdx, 1);
						Cookies.set('fileExplorer-openedLeaves', leavesArr.join(self.leavesSep));
					}
				} else {
					// Leaf opened so add it to the list
					if (nodeIdx === -1) {
						leavesArr.push(thisNode);
						Cookies.set('fileExplorer-openedLeaves', leavesArr.join(self.leavesSep));
					}
				}
			});
		});

		// Clicked file category header bar
		self.$fileArea.on('click', 'div.fileHead', function(e) {
			e.preventDefault();
			const $em = $(this).find('em');
			$(this).next('ul').toggle(0, function() {
				$em.html($(this).is(':hidden') ? '+' : '-');
			});
		});

		// Clicked link to view adult files
		self.$fileArea.on('click', 'span.adultAlt, .show-adult', function(e) {
			e.preventDefault();
			const str = prompt("WARNING: Adult content! If you wish to view such material, and are allowed to do so, please type “I agree”","");
			if(str && str.toLowerCase() === "i agree") {
				show_adult_content = true; // Global variable
				if (typeof processAdultVerification === 'function') {
					processAdultVerification(str);
				} else {
				$('body').addClass('show-adult');
					setCookie('adult', true);
					const dir	= self.$fileArea.attr('data-dir') ||self.$fileArea.find('.dirFileHead').attr('data-dir');
					const order	= self.$fileArea.find('ul#order a[data-order]').data('order') === 'name' ? 'type' : 'name'; // This link toggles the order but we don't want to toggle it, we want the current order
					const query	= "?ajax=true&dir=" + encodeURIComponent(dir) + (order === 'name' ? '&order=name' : '') + (self.showAdult ? '&showAdult=1' : '');
					self.$fileArea.addClass('loading');
					self.$fileArea.attr('data-dir', dir).load(self.root + "!index/frame-files.ajax.php" + query, self.fileListLoaded);	// Reload the files area
				}
	/*
				$('body').addClass('show-adult');
				setCookie('adult', true);
				var dir		=self.$fileArea.attr('data-dir') ||self.$fileArea.find('.dirFileHead').attr('data-dir');
				var order   =self.$fileArea.find('ul#order a[data-order]').data('order') == 'name' ? 'type' : 'name'; // This link toggles the order but we don't want to toggle it, we want the current order
				var query   = "?ajax=true&dir=" + encodeURIComponent(dir) + (order == 'name' ? '&order=name' : '');
				$fileArea.addClass('loading');
				$fileArea.attr('data-dir', dir).load(root + "!index/frame-files.ajax.php" + query, fileListLoaded);	// Reload the files area
				if (typeof processAdultVerification === 'function') {
					processAdultVerification(str);
				}
	*/
			}
		});

		// Resize the file explorer sidebar
		self.$fesb.resizable({
			handleSelector: "#fesb .outer-dragbar",
			resizeHeight: false,
			onDrag: function (e, $el, newWidth) {
				$el.width(self.limitFileExplorerW(newWidth));
				return false;
			},
			onDragEnd: function (e, $el) {
				const endW = $el.width();
				self.setOuterDragbar($el.width(), endW > self.closedW && endW <= self.closeAtW);
			}
		});

		// Inner dragbar was grabbed and moved so start resizing
		self.$innerBar.on('mousedown.aa-fesb touchstart.aa-fesb', function(e) {
			e.preventDefault();
			$(document).on('mousemove.aa-fesb touchmove.aa-fesb', function(e) {
				const y = typeof e.clientX === "number" ? e.clientY : (e.originalEvent.touches ? e.originalEvent.touches[0].clientY : null);
				//console.log("Dragbar is being grabbed and moved, setInnerDragbar(" + self.splitY + ")"); //debugging
				self.setInnerDragbar(y);
			});
			$(document).on('mouseup.aa-fesb touchend.aa-fesb', function() {
				$(document).off('mousemove.aa-fesb touchmove.aa-fesb');
			});
		});

		// Ensure inner dragbar stays on screen during resize
		$(window).resize(function() {
			//console.log("Window is being resized, setInnerDragbar(" +self.$innerBar[0].getBoundingClientRect().top + ")"); //debugging
			self.setInnerDragbar(self.$innerBar[0].getBoundingClientRect().top);
		});

		// Toggle sidebar button
		$('#fesb-toggle').click(function() {
			if (self.isFileExplorerClosed()) {
				self.openFileExplorer(true);
			} else {
				self.closeFileExplorer(true);
			}
		});

		// Save folders area scroll position
		self.$folderArea.scroll(function() {
			setCookie('fileExplorer-foldersScrollTop', $(this).scrollTop());
		});

		// Save files area scroll position
		self.$fileArea.scroll(function() {
			setCookie('fileExplorer-filesScrollTop', $(this).scrollTop());
		});

		/*
		$folderArea.on('ready scroll', function() {
			var $stickyAnchor = $('form', $folderArea);
			if ($stickyAnchor.length) {
				var windowTop = $(window).scrollTop();
				var divTop = $stickyAnchor.offset().top;
				$('.aa_page_nav', $stickyAnchor).toggleClass('sticky', windowTop > divTop - 36);
			}
		});
		*/
	}
}
const fesb = new fileExplorerSidebar();
$.getScript(path['root'] + '!bin/vendor/jquery-resizable/src/jquery-resizable.js', function() {
	//executeFileExplorerSidebar();
	fesb.init();
});
