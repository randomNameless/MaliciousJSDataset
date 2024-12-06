define(['jquery'], function($) {

    var pluginName = 'dropnav';
    var options = {
        showClass: 'show',
        focusClass: 'focus',
        activateOn: 'hover',
        activeClass: 'active',
        submenuSelector: '.submenu',
        navSelector: '.has-submenu'
    };
    
    var KEYCODES = { "leftArrow": 37, "rightArrow": 39, "upArrow": 38, "downArrow": 40, "escape": 27, "tab": 9, "space": 32, "enter": 13 }

    function Plugin(el, opts) {
        var id = el.attr('id');
        var trigger = $('#jump-to-' + id);
        var links = $('a', el);
        var opts = $.extend(options, opts);
         
        var getFocusIndex = function(direction, focusedIndex) {          
            if (direction == "left") {
                for (var i = (focusedIndex - 1); i >= 0; i--) {
                    if (links.eq(i).is(':visible')) {
                        return i;
                        break;
                    }
                }
            } else {
                for (var i = (focusedIndex + 1); i < links.length; i++) {
                    if (links.eq(i).is(':visible')) {
                        return i;
                        break;
                    }
                } 
            }
        }; 
 
        var goToSiblings = function(submenu, focusedEl, direction) {
            var links = submenu.add(submenu.siblings('ul')).children('li').not('.wiki');                
			var index = links.index(focusedEl); 
			index = direction == 'right' ? index + 1 : index - 1;
			if (index == links.length) {
				index = 0;
			} else if (index < 0) {
				index = links.length - 1;
			}
			links.eq(index).children('a').focus(); 
        };       
        
        var removeFocus = function(elements) {
        	if (!elements) {
        		elements = el.find('.' + opts.focusClass);
        	}
        	elements.removeClass(opts.focusClass);
        };        
        
        var removeActive = function(elements) {
        	if (!elements) {
        		elements = el.find('.' + opts.activeClass);
        	}
        	elements.removeClass(opts.activeClass);
        };

        var removeShow = function(elements) {
        	if (!elements) {
        		elements = el.find('.' + opts.showClass);
        	}
        	elements.removeClass(opts.showClass);
        };              
        
        var setAriaState = function(elements) {
        	if (!elements) {
        		elements = el.find(opts.submenuSelector);
        	}
            elements.each(function() {
                $(this).attr('aria-hidden', !$(this).is(':visible'));
            });        	
        };        
        
        var toggleActiveShow = function(item) {
            item.toggleClass(opts.activeClass);
            item.toggleClass(opts.showClass).siblings().removeClass(opts.showClass);
            setAriaState();
        };
        
        trigger.click(function(e) {
            e.preventDefault();
            $('html').toggleClass(id + "-active");           
            $(this).toggleClass('active');
            el.toggleClass('active');          
        });
    
        $('.close', el).click(function(e) {
            $('html').removeClass(id + "-active");         
            trigger.removeClass('active');
            el.removeClass('active');
        });
    
        // bind click event on nav selector to toggle active and show class
        $(opts.navSelector, el).on('click', function(e) {
            var item = $(this);
        	var targetItem = $(e.target);
        	if (targetItem.is(item) || (targetItem.is(item.children('a')) && !item.data('follow-link'))) {
        		toggleActiveShow(item);
            	return false;
        	}
        });
        
        // bind touchend event on nav selector to toggle active and show class        
        $(opts.navSelector, el).on('touchend', function(e) {
            var changedTouch = e.originalEvent.changedTouches[0];
            var item = $(this);
            var targetItem = $(e.target);
            var currentItem = $(document.elementFromPoint(changedTouch.clientX, changedTouch.clientY));  
            
            if (targetItem.is(currentItem)) {
            	if (targetItem.is(item) || (targetItem.is(item.children('a')) && !item.data('follow-link'))) {
            		toggleActiveShow(item);
                	return false;
            	}
            }
        });
        
        // add focus class on links on focus and click        
        $('a', el).on('focus click', function(e) {
            var activeEl = $(this).parent();
            var activeElements = activeEl.parentsUntil(el, opts.navSelector).add(activeEl);
            var irrelevantFocusedElments = el.find('.' + opts.focusClass).not(activeElements);
            
            removeFocus(irrelevantFocusedElments);
            activeElements.addClass(opts.focusClass);
            setAriaState();
        });
    
        // toggle show class on hover        
        if (opts.activateOn === "hover") {	    
    	    $(opts.navSelector, el).hover(function(e) {
    	        $(this).addClass(opts.showClass);
                setAriaState();
    	    }, function(e) {
    	        $(this).removeClass(opts.showClass);
                setAriaState();	
    	    });
        }
        
        // bind keydown to navigation between links        
        $('a', el).keydown(function(e) {
            var li = $(this).parent();
            var focusedIndex = links.index(this); 
            var lastVisibleElement = $('a:visible:last', el);
            
            if (e.keyCode == KEYCODES['escape']) {
            	removeFocus();
                setAriaState();
                e.preventDefault();
            } else if (e.keyCode == KEYCODES['space']) {
	            if (li.is(opts.navSelector)) {
	                li.children(opts.submenuSelector).find('li:first').children('a').focus();
	                e.preventDefault();
	            } else {
	                return true;
	            }
            } else if (e.keyCode == KEYCODES['leftArrow']) {
            	if (!li.prev('li').not('.wiki').length && !li.parent().prev('ul').length && li.parent().closest('li').length) {
            		li.parent().closest('li').children('a').focus();
            	} else {
            		goToSiblings(li.parent('ul'), li, 'left');
            	}
                e.preventDefault();
            } else if (e.keyCode == KEYCODES['rightArrow']) {
            	if (!li.next('li').not('.wiki').length && !li.parent().next('ul').length && li.parent().closest('li').next('li').length) {
	                li.parent().closest('li').next('li').children('a').focus();
            	} else {
            		goToSiblings(li.parent('ul'), li, 'right');
            	}
                e.preventDefault();                
            } else if (e.keyCode == KEYCODES['upArrow']) {  
                var nextFocusedIndex  = getFocusIndex('left', focusedIndex);
                if (jQuery.isNumeric(nextFocusedIndex)) {
                    links.eq(nextFocusedIndex).focus();  
                }
                e.preventDefault();                
            } else if (e.keyCode == KEYCODES['downArrow']) { 
                var nextFocusedIndex  = getFocusIndex('right', focusedIndex);  
                if (jQuery.isNumeric(nextFocusedIndex)) {
                    links.eq(nextFocusedIndex).focus();  
                }
                e.preventDefault();         
	        } else if (e.keyCode == KEYCODES['enter']) {
	            if (li.is(opts.navSelector) && !li.data('follow-link')) {
	            	toggleActiveShow(li);
	            	return false;
	            } else {
	                return true;
	            }
            } else if ($(this).is(lastVisibleElement) && (e.keyCode == KEYCODES['tab'] || e.keyCode == KEYCODES['downArrow'])) {
			    // If the user tabs out of the navigation hide all menus
				removeShow();
				removeFocus();                
				removeActive();
				setAriaState();
		    }	        
        });
      
        $(document).on('click', function(e) {
			removeShow();
			removeFocus();
			removeActive();
			setAriaState();
        });
        
        $('li', el).each(function() {
            $(this).attr({ 'role': 'menuitem', 'aria-haspopup': $(this).is(opts.navSelector) })
            setAriaState($(this).children(opts.submenuSelector));
        });
    };
    
    return Plugin;
    
});