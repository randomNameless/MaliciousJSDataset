// Universal
// All common classes

window.addEvent('domready', function(){

	// Info pops
	pops.init();

	// Recipe Stream
	recipe_stream.init();

	// Form Selects
	rig_selects = new selects($$('fieldset.select'));
	
	// Form File Fields
	file_fields.init();
	
	// Form textarea growers
	textarea_growers.init.delay(3000, textarea_growers);
	
	// Slidein Status Msgs
	status_msg.init();
	
	// Header Slidedown User Shortcut Links
	userlinks.init();
	
	// Header Login
	header_login_panel.init();								 
	
	// Header Search Flyout
	header_search_flyout.init();
	
	// Subnav Menu
	subnav_menu.init();
	
	// Footer Scroll to Top Link
	scroll_top.init();
	
	// Form Disabler Until All Required Fields Satisfied
	form_disabler.init();
	
	// IE Button Shadows
	make_text_shadows();
	
	// Comparison modal
	comparison_modal = new Modal('comparison');
	
	// Comparison bar
	compare_bar.init.delay(500, compare_bar);
	
	// Comparison modal actions
	comparison_box.init();
	
	// Contact
	contact.init();
	
	// No ad check
	no_ad_check.init.delay(3000, no_ad_check);

});

var no_ad_check = {
	init: function(){
		// No ad?
		var ad_header = $('ad_header');
		if (!ad_header) return;
		var height = ad_header.getDimensions()['y'];
		if (height < 100) ad_header.hide();
		ad_header.removeClass('leaderboard_stable');
	}
}

var contact = {
	init: function(){
		var link = $('show_contact');
		if (!link) return;
		link.addEvent('click', function(e){
			new Event(e).stop();
			
			$('contact_img').addClass('display');
		})
	}
}

// --------------------------------------------------------------------
//  Search Field
//	Handles standard keyword only search field, as well as
//	multi-search fields with various search sources.
//	@input: (el) form
// --------------------------------------------------------------------
var search_fields = {
	
	init: function(form) {
		this.form = form;
		
		// Is this a multi search?
		this.multi_search = form.hasClass('multi_search');
		if (this.multi_search) {
			this.location_lis = this.form.getElement('ul.location').getChildren();
			this.type = $('search_type');
			this.kw_search_box = $('kw_search');	
			this.ingredient_search_box = $('ingredient_search');
			this.ingredient_inputs = $$('#ingredient_search input');
			
			this.set_type();
			this.ingredient_search();
		}
		
		// Stuff both Multi & Single KW search have
		this.kw_field = $('kw_field');
		this.fields = this.form.getElements('input.field_tip');	
		this.watch_field_tips();
		this.listen();
	},
	
	// What is the default search method
	set_type: function(){
		this.location_lis.each(function(el,i){
			if (!el.hasClass('on')) return;
			this.type.value = el.getFirst().rel;
		},this)
	},
	
	ingredient_search: function(){
		// Watch for Click
		$('in_link').addEvent('click', function(){
			// Hide kw search bar
			this.kw_search_box.addClass('hide');
			// Show ingredient search
			this.ingredient_search_box.removeClass('hide');
			// Focus in input 1
			this.ingredient_inputs[0].focus();
		}.bind(this));
	},
	
	// Watch all fields to remove tips
	watch_field_tips: function(){
		this.fields.each(function(el){
			el.addEvents({
				'focus': this.toggle_field_tip.bindWithEvent(this,el),
				'blur': this.toggle_field_tip.bindWithEvent(this,el)
			})
		},this)
	},
	
	toggle_field_tip: function(e, field){
		// Showing tip? Remove it.
		if (field.hasClass('field_tip')) {
			if (/search|ingredient|hungry/i.test(field.value)){
				field.value = '';
			}
			field.removeClass('field_tip');
		}
		else if (field.value == ''){
			// If no user-entered text, re-show tip.
			field.toggleClass('field_tip');
			field.value = field.title;
		}
			
		// Toggle ingredient field focus
		field.getParent().toggleClass('on');
	},
	
	listen: function() {
		
		if (this.multi_search){
			this.location_lis.each(function(li,i){
				var a = li.getFirst();
				a.addEvent('click', this.swap.bindWithEvent(this,[i, a.rel]));
			},this);	
			
			// Ingredient Search submit click
			$('ingredient_search_btn').addEvent('click', function(e){ 
				new Event(e).stop(); 
				this.pre_submit('ingredient'); 
			}.bind(this));
			
			// Ingredient Search enter submit
			this.ingredient_inputs.each(function(input,i){
				input.addEvent('keydown', this.check_for_enter_submit.bindWithEvent(this,'ingredient'));
			},this);
		}
		
		// Keyword Search submit click
		$('search_btn').addEvent('click', function(e){ new Event(e).stop(); this.pre_submit('keyword'); }.bind(this));
		
		// Keyword Search "enter" submit
		$('kw_field').addEvent('keydown', this.check_for_enter_submit.bindWithEvent(this,'keyword'));
		
	},
	
	pre_submit: function(type){
		
		// Check for default values, don't submit if found
		if (type=='ingredient') {
			if (/ingredient/i.test(this.ingredient_inputs[0].value)) return;
		} else {
			if (/search|hungry/i.test(this.kw_field.value) || this.kw_field.value.length < 3) return;
		}
		
		// Okay to submit
		this.form.submit();
	},
	
	check_for_enter_submit: function(e, type){
		if (e.key == 'enter') {
			new Event(e).stop();
			this.pre_submit(type);
		}
	},
	
	swap: function(e,i,type) {
		var e = new Event(e).stop();
		this.form.getElement('.on').removeClass('on');
		this.location_lis[i].addClass('on');
		this.type.value = type;
		
		// Handle non-ingredient clicks
		if (this.type.value != 'ingredients'){
			
			// Show kw search box	
			this.kw_search_box.removeClass('hide');
			
			// Hide ingredient search
			this.ingredient_search_box.addClass('hide');
		}
		
	}
}


// --------------------------------------------------------------------
//  Form Selects
// --------------------------------------------------------------------
var selects = new Class({

	initialize: function(selects){
		this.selects = selects;
		if (this.selects.length<2) return;
		this.sliders = {};
		this.mask_height = {};
		
		// Remove prototype id/class and store prototype markup
		this.prototype = $('select_prototype').clone();
		this.prototype.removeProperty('id');
		this.prototype.removeClass('prototype');
		$('select_prototype').remove();
		
		// Rig all selects currently in DOM
		this.selects.each(function(fieldset,i){
			if (!fieldset.hasClass('prototype')) this.add_select(fieldset);
		},this);
		
		this.attach_body_close_clicks();
	},
	
	
	add_select: function(fieldset, scratch_data){
		
		// Build & inject full select markup
		
		// Creating based off list in the DOM
		if (fieldset){
			this.build_from_dom(fieldset);
		}else{
			// Building entire select from scratch
			fieldset = this.build_from_scratch(scratch_data);
		}
		
		this.set_dimensions(fieldset);
		
		this.enable_scrollbar(fieldset);
		
		this.attach_listeners(fieldset);
		
		// Useful for from scratch external calls
		return fieldset;
	},
	
	
	// Entire select injected, not built from existing markup in DOM
	// --------------------------------------------------------------------
	//  section
	//	@input:
	//		data['items']
	//		data['id']
	//		data['input_name']
	//		data['class_name']
	//		data['label']
	//		data['inject_after']
	// --------------------------------------------------------------------
	build_from_scratch: function(data){
		
		// Clone a blank select for its markup
		var select = this.prototype.clone();
		
		// Set start opacity @0 for fx
	    select.setStyle('opacity',0);
		
	    var fx = new Fx.Style(select,'opacity',{duration:600});
	    
		// Set specifics
		select.addClass(data['class_name']);
		select.getElement('label').setText(data['label']);
		select.getElement('input').setProperty('name',data['input_name']);
	    
	    // Inject list items into UL
	    var ul = new Element('ul', {'id':data['id'] + '_list'});
	    data['items'].each(function(list_item){
	    	var li = new Element('li');
	    	new Element('a', {'title':list_item, 'href':'#'}).setText(list_item).injectInside(li);
	    	li.injectInside(ul);
	    },this);
	    
	    // Inject ul
	    ul.injectTop(select.getElement('.mask'));
	    
	    // Inject full select markup into DOM
	    select.injectAfter(data['inject_after']);
	    
	    // Fade in
	    fx.start(0,1);
	    
	    // Return fieldset to work with
	    return select;
	},
	
	
	build_from_dom: function(fieldset){
		
		// Fetch source material
		var source_ul = fieldset.getElement('ul');
		var source_items = source_ul.getChildren();
		var name = source_ul.title;
		//var id = source_ul.id.replace('_list','') || false;
		
		// Create select markup, sans list items
		var markup = '' +
            '<input id="' + name + '" name="' + name +'" class="' + source_ul.className + '" type="text" readonly="true" />' +
            '<a class="btn"></a>' +
            '<p class="clear"></p>' +
            '<small>' +
                '<div class="mask">' +
                    '<div class="scrollbar">' +
                        '<div class="bottom"></div>' +
                        '<div class="handle"></div>' +
                    '</div>' +
                '</div>' +
            '</small>';
	        
        var wrap = new Element('div', {'class':'resize_wrap'}).injectFragmentTop(markup);
        
	    // Inject select shell. Place after label.
	    wrap.injectAfter(fieldset.getElement('label'));
	    
	    // Remove preaload class that hides UL
	    source_ul.removeClass('preload');
	    
	    // Move source UL to proper position
        source_ul.injectTop(wrap.getElement('.mask'));
	    
	},
	
	
	set_dimensions: function(fieldset){
		// Set menu width (b/c it is pos:abs and doesn't have any default size)
		var width = fieldset.getElement('div.resize_wrap').getDimensions()['x'];
		fieldset.getElement('small').setStyles({'width': width>0 ? width-1 : width, 'position': 'absolute'});
		
		// Set scrollbar height b/c pos:abs. Use mask height for the scrollbar size.
		var y_offset = 12*2;
		var padding = 0;
		var height = fieldset.getElement('div.mask').getStyle('height').toInt() - y_offset - padding;
		fieldset.getElement('div.scrollbar').setStyle('height', height);
	},
	
	
	enable_scrollbar: function(fieldset){
		
		var bar = fieldset.getElement('div.scrollbar');
		var handle = fieldset.getElement('div.handle');
		var content = fieldset.getElement('ul');
		if (!content) return;
		// Depending on if pre-built or injected
		var name = content.id || fieldset.id;
		var mask = content.getParent();
		var mask_height = this.mask_height[name] = mask.getStyle('height').toInt();
		
		// Get full ul height (show menu, fetch height, re-hide menu later)
		var shadow_container = fieldset.getElement('small');
		shadow_container.setStyles({visibility:'hidden', display:'block'});
		var content_height = content.getDimensions()['y'];
		
		// Initiate slider (here b/c needs to have displayed <small> to work)
		
		// Determine # of steps in slider
		var steps = content_height - mask_height;
		
		// If scrollbar not needed, fix mask size to fit content height.
		if (content_height <= mask_height) {
			bar.hide();
			// Shorten mask to content height
			mask.setStyle('height',content_height);
			// Re-hide menu. Must be after slider initiation.
			shadow_container.setStyles({display:'none', visibility:'visible'});
			return;
		}
		
		// Initiate slider
		this.sliders[name] = new Slider(bar, handle, {
			steps: steps,
			mode: 'vertical',
			onChange: function(step){
				// We can pre-fetch this one time, instead of w/every step change
				fieldset.getElement('div.mask').scrollTo(0,step);
			}
		}).set(0);
		
		// Re-hide menu. Must be after slider initiation.
		shadow_container.setStyles({display:'none', visibility:'visible'});
		
		// Watch for mouse scroll in content area
		$$(content, bar).each(function(el){
			
			el.addEvent('mousewheel', function(e){
				var e = new Event(e).stop();
				var step = this.sliders[name].step - e.wheel * 30;
				this.sliders[name].set(step);
			}.bind(this));
		},this);
	},
	
	
	attach_listeners: function(fieldset){
		
		// Show menu click
		fieldset.getElement('a.btn').addEvent('click', this.show.bindWithEvent(this, fieldset));
		
		// Item listeners
		fieldset.getElement('ul').getChildren().each(function(li){
			// Grab data from title attr and put in hidden input
			li.getFirst().addEvent('click', function(evt){
				var e = new Event(evt).stop();
				fieldset.getElement('input').value = e.target.title;
				// Hide menu
				this.hide(evt, fieldset);
				
				// Fire onchange to trigger any validation msg removal
				fieldset.getElement('input').fireEvent('change');
			}.bind(this));
		},this);
	},
	
	
	show: function(e,fieldset) {
		
		if (fieldset.hasClass('open')) return;
		fieldset.getElement('small').show();
		fieldset.addClass('open');
		
		// Remove any live validation dimmer class
		fieldset.removeClass('ok')
	},
	
	
	hide: function(evt, fieldset) {
		
		var event = new Event(evt);
		
		// Don't hide if click was on the menu
		if (event.target.className == 'handle' || event.target.className == 'scrollbar') return;
		
		// Hide and reset status class
		fieldset.getElement('small').hide();
		fieldset.removeClass('open');
		
		// Live validate
		if (!fieldset.hasClass('skip')) this.live_validate(fieldset);
	},
	
	
	// For adding new LI's to a select already in DOM
	attach_item_listener: function(li, fieldset){
		
		li.getFirst().addEvent('click', function(e){
			
			var e = new Event(e).stop();
			
			// Set input value
			fieldset.getElement('input').value = e.target.title;
			
			// Hide menu
			this.hide(e, fieldset);
			
		}.bind(this));
	},
	
	
	// Will handle closing any newly injected selects just fine.
	attach_body_close_clicks: function(){
		
		document.addEvent('click', function(evt){
			var e = new Event(evt);
			
			// Check all open selects
			$$('fieldset.select').each(function(fieldset){
				if (!fieldset.hasClass('open')) return;
				// Fetch elements that shouldn't prompt closure
				var ok_clicks = [fieldset.getElement('a.btn'), fieldset.getElement('.scrollbar'), fieldset.getElement('.handle')];
				
				var clicked_el = $(e.target);
				
				// If button, scrollbar/handle clicked, don't close this open select
				if (ok_clicks.contains(clicked_el)) return;
				
				// Ok to close
				this.hide(evt, fieldset);
				
			},this);
			
		}.bind(this));
	},
	
	
	live_validate: function(fieldset){
		validate.live_check(fieldset.getElement('input'));
	}

});





// --------------------------------------------------------------------
//  Form Disabler
//	Visually disable selected form button all class="req" fields ok
//	@form:		Add "disabler" class to desired form
//	@inputs:	Add "req" class to required fields
// --------------------------------------------------------------------
var form_disabler = {
	
	init: function(){
		this.forms = $$('form.disabler');
		if (this.forms.length==0) return;
		this.fields = {};
		this.buttons = {};
		
		this.forms.each(function(form,i){
			this.fields[i] = $$(form.getElements('.req'));
			this.buttons[i] = form.getElement('fieldset.actions a.button');
			
			// watch each required field in this form
			this.fields[i].each(function(field){
				field.addEvent('keyup', this.is_form_ready.bind(this,i))
			},this)
		},this)
	},
	
	is_form_ready: function(i){
		// check if all req fields aren't blank
		var error = false;
		
		this.fields[i].each(function(field){
			if (field.value == '') {
				// make sure is disabled
				this.buttons[i].addClass('disabled');
				// break out
				error = true;
			}
		},this);
		
		if (error) return;
		
		// All ok. Enable form
		this.forms[i].getElement('fieldset.actions a.button').removeClass('disabled');
	}
}



// --------------------------------------------------------------------
//  User Quicklinks Header Menu
// --------------------------------------------------------------------
var userlinks = {
	init: function(){
		
		this.ulink = $E('#header_login a.username');
		this.quickbox = $('header_quicklinks') || false;
		if (!this.quickbox) return;
		
		// Delay DOM manipulation until after initial load
		this.preset.delay(3000, this);
		
		this.listen();
	},
	
	preset: function(){
		
		// No reflow b/c position:absolute
		this.fx = new Fx.Slide(this.quickbox, {duration:200, fps:200}).hide();
		
		// Positioning switched to injected wrapper
		this.quickbox.className = '';
		
		// Position fx wrapper
		this.fx.wrapper.addClass('quicklinks');
		
	},
	
	listen: function(){
		this.ulink.addEvent('click', this.toggle.bindWithEvent(this));
	},
	
	toggle: function(e){
		new Event(e).stop();
		
		// change link arrow
		this.ulink.toggleClass('open');
		
		this.fx.toggle();
	}
}



// --------------------------------------------------------------------
//  Shortcuts Persistent Box
// --------------------------------------------------------------------
var shortcuts = {
	init: function(){
		this.open = false;
		this.box = $('shortcuts_box');
		if (!this.box) return;
		this.sections = this.box.getElement('ul.sections');
		this.content = $$('#shortcuts_box .content');
		this.fx = new Fx.Style(this.box, 'right', {duration: 400, transition: Fx.Transitions.Quad.easeInOut, fps: 200});
		
		this.box.pin();
		this.listen();
		this.load_hide();
	},
	
	listen: function(){
		$('shortcuts_tab').addEvent('click', this.toggle.bindWithEvent(this));
		this.sections.getChildren().each(function(el,i){
			el.getFirst().addEvent('click', this.toggle_content.bindWithEvent(this,i));
		},this);
	},
	
	load_hide: function() {
		// position off-screen
		this.box.addClass('closed');
		// hide content
		this.content.each(function(el){
			el.addClass('closed');
		});
	},
	
	toggle: function(e){
		new Event(e).stop();
		
		if (this.open) {
			this.open = false;
			this.fx.start(0,-190);
		} else {
			this.open = true;
			this.fx.start(-190,0);			
		}
	},
	
	toggle_content: function(e,i) {
		new Event(e).stop();
		this.content.each(function(el,a){
			if (a == i) {					   
				if (this.content[i].hasClass('closed')) {
					this.box.setStyles({'height':'auto'});
					this.content[i].removeClass('closed');
				}else{
					this.content[i].addClass('closed');			
				}	
			} else {
				el.addClass('closed');
			}
		},this);
	}
}



// --------------------------------------------------------------------
//  Footer scroll to top of page link
// --------------------------------------------------------------------
var scroll_top = {
	init: function() {
		if (!$('top')) return;
		var scrollFx = new Fx.Scroll(window, {duration: 2400, fps: 200, offset: {'y': -50}, transition: Fx.Transitions.Pow.easeOut});
		$('top').addEvent('click', function(e){ var e = new Event(e).stop(); scrollFx.toElement('header');}.bind(this));
	}
}





// --------------------------------------------------------------------
//  Header Login Panel
// --------------------------------------------------------------------
var header_login_panel = {
	init: function() {
		this.box = $('header_login');
		if (!this.box) return;
		this.fx = new Fx.Styles(this.box, 
			{
				duration: 600, 
				transition: Fx.Transitions.Expo.easeInOut, 
				fps: 200, 
				onComplete: function(){
					this.swap_content.delay(200,this)
				}.bind(this)
			}
		);
		
		this.listen();
	},
	
	listen: function() {
		var login = this.box.getElement('a.login');
		if (login) login.addEvent('click', this.show_login.bindWithEvent(this));
		
	},
	
	show_login: function(e) {
		new Event(e).stop();
		// hide any recipe bubble
		$E('#header div.bubble').remove();
		this.fx.start({width: 334});
	},
	
	swap_content: function() {
		// create form html
		var form = new Element('form', {'method':'post', 'action':''});
		
		var form_html = ' ' +
		'<form action="/login" method="post">' +
		'	<fieldset class="username">' +
		'		<var class="wrap">' +
		'		<input name="h_username" type="text" title="Enter your Username" value="username" />' +
		'		<em class="tl"></em><em class="tr"></em><em class="bl"></em><em class="br"></em>' +
		'		</var>' +
		'</fieldset>' + 
		'	<fieldset class="password">' +
		'		<var class="wrap">' +
		'		<input name="h_pass" type="password" title="Enter your Password" value="password" />' +
		'		<em class="tl"></em><em class="tr"></em><em class="bl"></em><em class="br"></em>' +
		'		</var>' +
		'	</fieldset>' +
		'	<input type="hidden" name="from" value="' + window.location.pathname + '" />' +
		'	<button type="submit" title="Click to Login"></button>' +
		'</form>';
		this.box.getFirst().setHTML(form_html);
		//this.box.getElement('input').focus();
		
		// watch for login submit
		this.box.getElement('button').addEvent('click', function(){
			this.box.getElement('form').submit();
		}.bind(this));
		
		// remove field values onclick
		this.box.getElements('input').each(function(el){
			el.addEvent('focus', function(){
				this.value = '';
			});	
		});
		
		// ie field highlight
		if (window.ie){
			this.box.getElements('input').each(function(el){
				el.addEvent('focus', function(){el.addClass('focus')});
				el.addEvent('blur', function(){el.removeClass('focus')});
			});	
		}
	}
}



// --------------------------------------------------------------------
//  Header Search Porthole
// --------------------------------------------------------------------
var header_search_flyout = {
	init: function() {
		this.search_bar = $('header_search');
		if (!this.search_bar) return;
		this.field = this.search_bar.getFirst().getFirst();
		this.fx = new Fx.Style(this.field, 'width', {duration: 350, transition: Fx.Transitions.Quint.easeOut, fps: 200, onComplete: this.toggle_finished.bind(this)});
		
		this.search_bar.addEvent('mouseenter', this.verify.bind(this));
		this.search_bar.addEvent('mouseleave', this.close.bind(this));
	},

	verify: function() {
		// prevent errant mouseovers
		this.search_bar.addClass('over');
		hover_check.delay(120,this);
		
		function hover_check(){
			if (this.search_bar.hasClass('over')) this.open();
		}
	},

	open: function() {
		if (this.search_bar.hasClass('open')) return;
		
		this.fx.start(1,250);
	},

	close: function(event) {
		this.search_bar.removeClass('over');
		if (!this.search_bar.hasClass('open')) return;

		this.field.blur();
		this.fx.start(250,1);
	},
	
	toggle_finished: function() {
		if (this.field.getSize().size.x < 100) { this.search_bar.removeClass('open'); }else{ this.search_bar.addClass('open'); this.field.focus();}
	}
}



// --------------------------------------------------------------------
//  Subnav Menu
// --------------------------------------------------------------------
var subnav_menu = {

	init: function() {
		this.subnav = $('subnav');
		if (!this.subnav) return;
		this.recipe_li = $('nav').getChildren()[1];
		//this.recipe_li.addEvent('mouseenter', function(){this.show.delay(50, this)}.bind(this));
		this.subnav.getElements('a').addEvent('mouseenter', this.show.bindWithEvent(this));
		this.recipe_li.addEvent('mouseenter', this.verify.bindWithEvent(this));
		this.recipe_li.addEvent('mouseleave', this.hide_verify.bindWithEvent(this));
	},

	verify: function(e) {
		// prevent errant mouseovers
		this.subnav.addClass('over');
		hover_check.delay(120,this);
		
		function hover_check(){
			if (this.subnav.hasClass('over')) this.show();
		}
	},

	show: function() {
		this.recipe_li.addClass('recipes_menu');
		this.subnav.show();
	},
	
	// ie7 fix
	hide_verify: function(e){
		this.subnav.removeClass('over');
		
		// Wait a beat, and see if still on menu
		off_check.delay(200,this);
		
		function off_check(){
			if (!this.subnav.hasClass('over')) this.hide();
		}
	},

	hide: function(e) {
		this.subnav.removeClass('over');
		this.recipe_li.removeClass('recipes_menu');
		this.subnav.hide();
	}
}



// --------------------------------------------------------------------
//  Universal Slide-In Feedback Messages
//	Activates msgs laying in wait in the DOM
//	Msgs are displayed via: status_msg.show(id)
// --------------------------------------------------------------------
var status_msg = {
	
	init: function() {
		// extend to allow for multiple messages per page, when status_msg.show() is called from page script, need to 
		this.slide = {};
		this.fade = {};
		this.hideBind = {};
		this.msgs = $$('.status_msg_show');
		if (this.msgs.length==0) return;
		
		this.prepare_msgs();
	},
	
	prepare_msgs: function() {
		this.msgs.each(function(msg,i){
			var name = msg.title;
			var delay = msg.hasClass('post') ? 10000 : 1500;
			var fx_len = msg.hasClass('posted') ? 900 : 500;
			this.slide[name] = new Fx.Style(msg, 'top', {duration: fx_len, transition: Fx.Transitions.Expo.easeOut, fps: 200, onComplete: function(){status_msg.watch_usr_action.delay(delay,status_msg,name)}});
			this.fade[name] = new Fx.Style(msg, 'opacity', {duration: 500, onComplete: this.reset_box.bind(this,i)});
		},this);
	},

	show: function(msg_name) {
		status_msg.slide[msg_name].start(-300,58);
	},

	watch_usr_action: function(name) {
		this.hideBind[name] = this.hide.bind(this,name);
		document.addEvent('mousemove', this.hideBind[name]);
	},

	hide: function(name) {
		document.removeEvent('mousemove', this.hideBind[name]);
		this.fade[name].start(1,0);//.chain(function(){this.reset.bind(this,name)}.bind(this));
	},

	reset_box: function(i) {
		this.msgs[i].setStyles({top: -300, opacity: 1});
	}
}



// --------------------------------------------------------------------
//  Live field helper messages
// --------------------------------------------------------------------
var field_tips = {
	
	init: function() {
		this.tips = {};
		this.store_tips();
	},
	
	store_tips: function() {
		$$('input').each(function(el,i){
			var title = el.title;
			var tip = title.split('|')[0];			
			if (tip=='') return;
			this.tips[i] = tip;
			this.watch_fields(el,i);
		},this);
	},
	
	watch_fields: function(field,i) {
		field.addEvents({
			'focus': function(){
				var tip = '<span class="help">' + this.tips[i] + '</span>';
				field.injectFragmentAfter(tip);
			}.bind(this),
			
			'blur': function(){
				field.getNext().remove();
			}
		});
	}
}



// --------------------------------------------------------------------
//  Universal Validation
//	@input:
//		form 	   = (el) form ID
//		button 	   = (el) form submit button
//		live 	   = (bool) show field success de-emphasis feedback?
//		post 	   = (bool) should we post this form after validation?
//		status_msg = (str) name of msg element (in dom) to show
//		challenge  = (bool) is there a challenge hash for this field?
// --------------------------------------------------------------------
var validate = {
	
	init: function(form, button, live, post, status_msg, challenge) {
		this.form = $(form);
		this.button = this.submit_button = button;
		if (!this.button) return;
		// If form starts w/disabled button until fully filled out, we need to remember this.
		this.button_pre_disabled = this.button.hasClass('disabled');
		live = live ? true : false;
		this.post = post ? true : false;
		this.status_msg = status_msg ? status_msg : false;
		this.challenge = challenge ? true : false;
		this.errors = false;
		this.error_msgs = {};
		this.fields = this.form.getElements('input');
		this.txts = this.form.getElements('textarea');
		// Is this form being submitted? Prevents double post.
		this.submitting = false;
		
		this.store_msgs();
		this.watch_submit();
		if (live) this.watch_live();
	},

	
	watch_submit: function() {
		this.button.addEvent('click', this.check.bindWithEvent(this));
	},
	
	
	store_msgs: function() {
		this.fields.each(function(el,i){								  
			var error = el.title.split('|')[1];
			if (error=='' || error==undefined) return;
			this.error_msgs[i] = error;
		},this);
	},
	
	
	// Extend for special (num, email, etc) field types
	check: function(e) {
		
		// Refetch fields in case of newly added
		this.fields = this.form.getElements('input');
		this.txts = this.form.getElements('textarea');
		
		// Prevent double submit
		if (this.submitting) return;
		
		// Visually disable form to give user feedback (could use depress btn state too!)
		if (!this.button_pre_disabled) this.submit_button.addClass('disabled');

		// Clear errors
		$$('.form_error').each(function(el){ el.remove() });
		
		$$(this.fields, this.txts).each(function(el,i){
			if (el.hasClass('skip') || this.errors) return;
			if (el.value == '') { this.error(el,i); this.errors = true; }
			if (el.hasClass('email')) {
				if (!el.value.test('@') || !el.value.test(/\./)) { this.error(el,i); this.errors = true; }
			}
		},this);
		
		if (this.errors) { this.errors = false; return; }
		
		this.submit_form();
	},
	
	
	submit_form: function() {
		
		// Check form for any failed external validation
		if (this.form.getElement('.failed')){ 
			if (!this.button_pre_disabled) this.submit_button.removeClass('disabled');
			return;
		}
		// if need a challenge, get it and inject into form
		if (this.challenge) 
		var input = new Element('input', {'name':'challenge', 'type':'hidden', 'value': $('challenge').title}).injectInside(this.form);
		if (this.status_msg) status_msg.show(this.status_msg);
		
		// Submit form
		this.submitting = true;
		if (this.post) this.form.submit();
		else this.form.send(); // xhr post
	},
	
	
	inject_msg: function(field, msg, x_offset, y_offset) {
		// get field pos, if visual tag field then get active_input tag
		if (field.hasClass('tag_field')) {
			
			// Fetch ul.holder spot
			var coords = field.getPrevious().getCoordinates();
			/*
			// usually prevSibling will be ul.holder for tag field
			var prev_el = field.getPrevious();
			// if not, then go to parent, and look at siblings for holder
			var coords = prev_el.hasClass('holder') 
				? prev_el.getCoordinates() 
				: prev_el.getParent().getElement('ul.holder').getCoordinates();
			*/
		}else{
			var coords = field.getCoordinates();
		}
		
		var x = coords.left + coords.width;
		var y = coords.top + coords.height;
		var y_offset = coords.height/2 + y_offset;
		msg.setStyles({position:'absolute', top:y-y_offset, left:x+x_offset});
		msg.injectInside(document.body);
	},
	
	
	error: function(field,i,textarea) {
		
		// Un-disable submit button
		if (!this.button_pre_disabled) this.submit_button.removeClass('disabled');
		
		// Error already there?
		var txt_class = textarea ? 'txt' : '';
		if ($('error_'+ txt_class +'_'+ i)) return;
		
		// Remove any livecheck errors (because we are overlaying a bigger visual error in the same spot)
		$$('span.error').each(function(span){ span.remove(); }); // just remove all of them - slightly dirty
		
		// If field is on very right edge of screen, the msg must be moved to stay in window.
		x_offset = field.hasClass('right_edge') ? -field.getSize().size.x/2-10 : 14;
		
		// If field is a select, add button width to x_offset
		x_offset = field.hasClass('select') ? 53 : x_offset;
		
		y_offset = 20;
		var error_txt = this.error_msgs[i] ? this.error_msgs[i] : 'You need to fill this in.';
		var msg = new Element('div', {'id':'error_'+ txt_class +'_'+ i, 'class':'form_error '+ txt_class}).setHTML(error_txt + '<span></span>');
		this.inject_msg(field, msg, x_offset, y_offset);
		
		// Remove error once field has been changed.
		field.addEvent('change', function(){  
			if ($('error_'+ txt_class +'_'+ i)) $('error_'+ txt_class +'_'+ i).remove();
		});

		// If field is on the right edge, error msg need to be removed onfocus as to not obstruct field.
		if (field.hasClass('right_edge')) {
			field.addEvent('focus', function(){
				if ($('error_'+ txt_class +'_'+ i)) $('error_'+ txt_class +'_'+ i).remove();
			});
		}
	},
	
	
	// live field checks
	watch_live: function() {		
		
		$$(this.fields, this.txts).each(function(el,i){
			if (el.hasClass('skiplive')) return;
			
			el.addEvents({
				/*
				'blur': this.live_check.bind(this, [el,i]),
				'focus': this.refocus.bind(this, [el,i])				
				*/
				'blur': this.live_check.pass([el,i], this),
				'focus': this.refocus.pass([el,i], this)
			})
		},this);
	},
	
	
	live_check: function(el,i) {
		
		// Handles all trivial empty checks.
		// If field needs more of a live validation check, create new singleton in page's js
		
		if (el.value == '') return;
		
		if (el.hasClass('select')){
			
			var fieldset = el.getParent().getParent();
			
		}else if (el.hasClass('file_clear')){
			
			var fieldset = el.getParent().getParent().getParent();
			
		}else{
			
			var fieldset = el.getParent();
			
		}
		
		fieldset.addClass('ok');
		
		
		// show success icon
		// let's not show icons, too distracting
		//var img = new Element('img', {'src': '/images/_site/forms/field_check.gif', 'title': 'Field Ok. Continue.', 'id': 'img'+i, 'alt': ''});
		
		// calc position
		/*
		var coords = el.getCoordinates(); // field pos
		var x = coords.left + coords.width;
		var y = coords.top + coords.height;

		// account for select button and sub-select 2px border if any
		var select_offset = el.hasClass('select') ? fieldset.hasClass('subcat') ? 40 : 38 : el.hasClass('file_clear') ? 112 : 0;
		var img_height = 16;
		var y_offset = coords.height/2 + img_height/2;
		var x_pos = x + 14 + select_offset;
		img.setStyles({position:'absolute', top:y-y_offset, left:x_pos});
		img.injectInside(document.body);
		*/
	},
	
	
	// re-focus on previously checked field
	refocus: function(el,i) {
		if (el.hasClass('select')) return; // select overlay remove is handled in selects class
		var fieldset = el.getParent();
		if (!fieldset.hasClass('ok')) return;
		// remove dim overlay
		fieldset.removeClass('ok');
		// remove icon
		//$('img'+i).remove();
	}
	
}


// --------------------------------------------------------------------
//  For IE browsers, set text shadows for common elements
// --------------------------------------------------------------------
function make_text_shadows(){
	
	if (!window.ie) return;
	
	// --------------------------------------------------------------------
	//  Buttons
	// --------------------------------------------------------------------
	// Find all buttons in page
	$$('a.button', 'a.button_big').each(function(button,i){
		
		// Grab button text and add shadow element
		var span = button.getFirst();
		var text = span.getText().trim();
		
		var shadow = new Element('q', {'class':'shadow'}).setText(text);
		shadow.injectTop(span);
		
	});
	
	// --------------------------------------------------------------------
	//  In-Page Tabs
	// --------------------------------------------------------------------
	$$('ul.tabs li a').each(function(a,i){
		
		// Skip if it is a "button tab"
		if (!a.hasClass('button')){
		
			// Grab button text and add shadow element
			var text = a.getText().trim();
			
			var shadow = new Element('q', {'class':'shadow'}).setText(text);
			shadow.injectTop(a);
			
		}
		
	});
	
	// --------------------------------------------------------------------
	//  Pagination
	// --------------------------------------------------------------------
	$$('ul.pagination li a span').each(function(span,i){
		
		// Grab button text and add shadow element
		var text = span.getText().trim();
		
		var shadow = new Element('q', {'class':'shadow'}).setText(text);
		shadow.injectTop(span);
		
	});
	
}




// --------------------------------------------------------------------
//  Checkboxes
// --------------------------------------------------------------------
var checks = {
	init: function(type) {
		this.type = type;
		this.checks = $$('fieldset.' + type + ' span');
		this.listen();
	},
	
	listen: function() {
		this.checks.each(function(el,i){
			el.addEvent('click', this.toggle.bind(this,el));
		},this);
	},
	
	toggle: function(span) {
		
		document.body.focus(); // errant text highlight
		
		if (this.type == 'radio') { 
			// remove any previous checks inside this fieldset.radio
			span.getParent().getElements('input').each(function(input){
				var cspan = input.getPrevious();
				if (cspan == span) return; // only clear other radios
				// reset input value											  
				input.value = '';
				// remove check
				cspan.removeClass('checked');
			});
		}
		
		if (span.hasClass('checked')) {
			span.removeClass('checked');
			span.getNext().value = '';
		} else {
			span.addClass('checked');
			span.getNext().value = span.title;
		}
		
	}
}



// --------------------------------------------------------------------
//  Recipe Comparison Bar
// --------------------------------------------------------------------
var compare_bar = {

	init: function(){
		
		// Position bar
		this.bar = $('comparison_bar');
		if (!this.bar) return;
		
		// Intro msg
		this.message = $('comparison_intro');
		
		this.listen();
		
		// Causes reflow, se if we can delay call
		this.bar.pin();
		
		this.modal = $('comparison');
		
		// Position intro message
		if (!this.message) return;
		var left = $('header').offsetLeft;
		this.message.setStyle('left',left);
		this.message.pin();
	},
	
	listen: function(){
		// Watch remember link (only present on recipe page)
		if (remember = $('remember_recipe')) remember.addEvent('click', comparison_box.remember_recipe.bindWithEvent(this));
		
		// Watch for close intro msg box
		if (!this.message) return;
		this.message.getElement('a.close').addEvent('click', function(e){
			new Event(e).stop();
			
			// Hide box
			this.message.hide();
			
			// Set session close var
			var data = {'action':'hide_compare_o_matic_intro_message', 'recipeID':0}
			var xhr = new Json.Remote('/application/xhr/recipe_xhr.php').send(data);
		}.bind(this))
	}
}



// --------------------------------------------------------------------
//  Recipe Comparison Modal
// --------------------------------------------------------------------
comparison_box = {
	
	init: function(){

		this.links = {'clear':false, 'compare':false};
		this.modal = $('comparison');
		this.links['clear'] = $('clear_comparison_recipes');
		
		if (!this.modal){
			this.attach_clear_listener();
			return;	
		}

		this.tabs = $('compare_tabs').getChildren();
		this.boxes = $$('#comparison .box');
		
		this.links['compare'] = $('show_comparison');
		
		this.listen();
	},
	
	listen: function(){
		// Show comparison modal (handled here so we can check if we are supposed to refresh page first)
		if (!this.links['compare']) return;
		this.links['compare'].addEvent('click', function(e){
			// If url is present, we need to allow the link to refresh the page to show added recipe to comparison.
			if (this.hasClass('refresh')) return;
			window.comparison_modal.show(e)
		});
		
		// Remove recipe from comparison links
		this.add_remove_recipe_listeners();
		
		// Show delete links for corresponding column
		this.add_cell_hover_listeners();
		
		// Watch for "remove all"
		this.attach_clear_listener();
				
		// Tab click
		this.tabs.each(function(li,i){
			li.getElement('a').addEvent('click', this.show_box.bindWithEvent(this,i))
		},this);
		
	},
	
	attach_clear_listener: function(){
		// Remove all recipes from comparison
		if (this.links['clear']) this.links['clear'].addEvent('click', this.clear_recipes.bindWithEvent(this));
	},
	
	add_remove_recipe_listeners: function(){
		this.modal.getElements('a.remove').each(function(a){
			a.addEvent('click', this.remove_recipe.bindWithEvent(this,a));
		},this);
	},
	
	// Cell hover, add hover class to its recipe title TD
	add_cell_hover_listeners: function(){
		
		// TD hover show remove link
		var heading_tds = $$('#compare_summary thead td');
		
		$$('#compare_summary tr').each(function(tr,i){
			var tds = tr.getElements('td');
		
			tds.each(function(td,a){
				td.addEvent('mouseover', function(){
					heading_tds[a].addClass('hover');
				});
			});
			
			tds.each(function(td,a){
				td.addEvent('mouseout', function(){
					heading_tds[a].removeClass('hover');
				});
			});
		});
		
	},
	
	clear_recipes: function(e) {
	
		new Event(e).stop();
		
		var data = {'action':'clear_comparison_recipes', 'recipeID':0};
		var xhr = new Json.Remote('/application/xhr/recipe_xhr.php', 
			{
				onComplete: function(r){
					if (r.error) return;
					
					// Remove comparison tables
					if (this.modal) this.modal.getElements('table').remove();
					
					// Set "holding" count to 0
					$('holding_count').setText('0 recipes');
					
					// Update remember message
					$('remember_msg').setText('Recipe removed.');
					
					// Remove "compare", and "clear" links
					if (this.links['compare']) this.links['compare'].remove();
					this.links['clear'].remove();
					
					// Remove "add another msg"
					if (msg = $('compare_more_msg')) msg.remove();
					
					
				}.bind(this)
			}
		).send(data);
			
	},
	
	remove_recipe: function(e,a){
		new Event(e).stop();
		
		var entryID = a.rel || false;
		var recipeID = /r_([0-9]+)/.exec(a.className)[1];
		if (!entryID || !recipeID) return;
		var data = {'action':'remove_remembered_recipe', 'recipeID':recipeID, 'entryID':entryID};	
		var xhr = new Json.Remote('/application/xhr/recipe_xhr.php', 
			{
				onComplete: function(r){
					if (r.error) return;
					// Remove all this recipe's TDs
					this.modal.getElements('td.recipe_' + recipeID).each(function(el){ el.remove(); });
				}.bind(this)
			}
		).send(data);
	},
	
	remember_recipe: function(e){
		new Event(e).stop();
		
		var recipeID = $('recipeID').value || false;
		if (!recipeID) return;
		
		var data = {'action':'remember_recipe', 'recipeID':recipeID};
		var xhr = new Json.Remote('/application/xhr/recipe_xhr.php', 
			{
				onComplete: function(r){
					if (r.error) return;
					
					// First remembered?
					var holding_count_msg = $('holding_count') || false;
					
					// Current count
					if (holding_count_msg) var count = holding_count_msg.getText().replace(' recipes','').toInt();
					
					// Show success msg
					var msg_box = $('remember_msg');
					var feedback = holding_count_msg && count==0
						? '<strong>Recipe Remembered!</strong> <span class="next_note">... Now add a similar recipe and we\'ll help you choose.</span>'
						: '<strong>Recipe Remembered!</strong>';
					msg_box.setHTML(feedback);
					// Add styling class
					msg_box.addClass('remembered');
					
					// If this was the 2nd add, refresh page so comparison can be made
					if (count==1) window.location.reload(true);
					
					// If this was the first recipe, or if already added, skip rest of DOM updates
					if (!holding_count_msg || r.html=='dupe') return;
					
					// Update count
					count++;
					holding_count_msg.setText(count + ' recipes');
					
					// Dump new tables into modal
					comparison_box.update_comparisons();
					
				}
			}
		).send(data);
	},
	
	update_comparisons: function(){
		
		// Modal won't be present to update if this is the first recipe
		if (!this.modal) return;
		
		var xhr = new Ajax('/application/xhr/recipe_xhr.php', 
			{
				'update': $('comparison_sections'),
				'data': {'action':'fetch_updated_comparison_tables', 'recipeID':0},
				onComplete: function(){
					
					// Update modal size to accomodate new column
					var current_col_cnt = /compare_([0-9]+)/.exec(this.modal.className)[1].toInt();
					var new_cnt = current_col_cnt+1;
					this.modal.className = this.modal.className.replace('compare_'+current_col_cnt,'compare_'+new_cnt);
					
					// Move modal left by 1/2 of the increase in width (which is in 100px increments)
					this.modal.setStyle('left', this.modal.getStyle('left').toInt()-50);
					
					// Add delete listeners
					this.add_remove_recipe_listeners();
					
					this.add_cell_hover_listeners();
					
					// Update boxes so tabs work
					this.boxes = $$('#comparison .box');
					
					
					// Try ie redraw
					$('compare_summary').className = $('compare_summary').className;
					
				}.bind(this)
			}
		).request();
	},
	
	
	show_box: function(e,i){
		
		new Event(e).stop();
		// hide prev selected tab
		this.tabs.each(function(el){ el.removeClass('open') });
		// show this tab
		this.tabs[i].addClass('open');
		// hide any other boxes
		this.boxes.each(function(el){ el.addClass('closed') });
		// show this box
		this.boxes[i].removeClass('closed');
	}
}



// --------------------------------------------------------------------
//  Universal File Fields
// --------------------------------------------------------------------
file_fields = {
	init: function() {
		this.buttons = $$('a.file_btn');
		if (this.buttons.length==0) return;
		this.fields = $$('input.file_clear');
		this.visible_fields = $$('input.file_visible');
		this.listen();
	},
	
	listen: function() {
		this.fields.each(function(el,i){
			el.addEvents({
				'click': this.active.bind(this,i),
				'mouseover': this.highlight.bind(this,i),
				'mouseout': this.highlight.bind(this,i),
				'change': this.show_src.bind(this,i)
			});
		},this);		
	},
	
	highlight: function(i) {
		if (this.buttons[i].hasClass('on'))
			this.buttons[i].removeClass('on');
		else
			this.buttons[i].addClass('on');
	},
	
	active: function(i) {
		//this.fields[i].blur();
		//this.buttons[i].addClass('clicked');
	},
	
	show_src: function(i) {
		this.visible_fields[i].value = this.fields[i].value;
	}
}




// --------------------------------------------------------------------
//  Modal Box
// --------------------------------------------------------------------
Modal = new Class({
	
	options: {
		link: false,
		submittable: false
	},
	
	initialize: function(container, options) {
		this.modal = $(container);
		if (!this.modal) return false;
		
		this.setOptions(options);
		
		// Delay geometry calcs until initial rendering finished
		this.preload.delay(1000, this);
		
	},
	
	preload: function() {
		// get modal body height (excluding header and footer). Used for growing fx.
		this.mbody = this.modal.getElement('.inner');
		// let's try using getDims
		this.body_height = this.mbody.getDimensions().height;
		
		this.load_hide();
		this.position.delay(3000,this);
		this.listen();
		this.fx();
	},
	
	listen: function() {
		// show modal
		if (this.options.link) this.options.link.addEvent('click', this.show.bindWithEvent(this));
		
		// close modal
		this.modal.getElements('a.cancel_edit').addEvent('click', this.close.bindWithEvent(this));
		
		// save changes
		this.listen_save();
	},
	
	listen_save: function(){
		// does this modal have a form that can be submitted?
		if (!this.options.submittable) return;
		
		this.modal.getElement('.save').addEvent('click', 
			function(e){ 
				new Event(e).stop(); 
				status_msg.show('process'); 
				this.modal.getElement('form').submit(); 
			}.bind(this)
		);
	},
	
	close: function(e) {
		new Event(e).stop(); 
		
		// fade obscure
		new Fx.Style(this.blackout, 'opacity', {duration:800, fps:200, onComplete:
			function(){
				this.blackout.remove();
			}.bind(this)
		}).start(.7,0);
		
		// fade modal out
		this.fx.fade_modal.start(1,0).chain(
			function(){ 
				this.modal.removeClass('open');
				// reset modal fx styles
				this.modal.hide();
				this.fx.grow.set(0);
				this.mbody.setStyle('opacity',0);
			}.bind(this)
		)
	},
	
	fx: function() {
		this.fx = {};
		this.fx['grow'] = new Fx.Style(this.mbody, 'height', {duration:600, transition:Fx.Transitions.Quint.easeInOut, fps:200, onComplete:this.show_body.bind(this)}).set(0);
		this.fx['fade_modal'] = new Fx.Style(this.modal, 'opacity', {duration:250, transition:Fx.Transitions.Quad.easeIn, fps:200});
	},
	
	show_body: function() {
		this.modal.addClass('open');
		this.mbody.setStyle('opacity',1);
		// set height back to auto so any dom height changes will be contained
		this.mbody.setStyle('height','auto');
	},
	
	load_hide: function() {
		// hide modal body contents
		this.mbody.setStyle('opacity',0);
	},
	
	position: function() {
		this.modal.hide();
		// get page dims
		var page = document.body.getSize();
		this.page_height = page.size.y;
		var page_width = page.size.x;
		var modal_width = this.modal.getDimensions().width;
		var offset_left = page_width/2 - modal_width/2;
		// position modal horizontally
		this.modal.setStyles({'left': offset_left});
	},
	
	show: function(e) {
		new Event(e).stop();
		
		// Position @ top of 
		this.modal.setStyles({
			'opacity' : 1,
			'top' : window.getScrollTop() + 100,
			'display' : 'block'
		})
		
		this.blackout = new Element('div', {'class':'obscure'}).setStyle('height', this.page_height).injectInside(document.body);
		this.fx.grow.start.delay(200,this.fx.grow,this.body_height);
	}
});

// implement options class
Modal.implement(new Options);



// --------------------------------------------------------------------
//  Recipe Stream Row Highlights
// --------------------------------------------------------------------
var recipe_stream = {

	init: function(){
		this.list = $E('ul.recipe_stream');
		if (!this.list) return;
		this.rows = this.list.getChildren();

		this.fx = {'photo':{}, 'score':{}}
		
		this.listen();
		this.browser_gutter_check();
	},
	
	browser_gutter_check: function(){
		// do we have enough white-space gutter on lhs for featured badges?
		this.gutter = $('header').offsetLeft >= 70 ? true : false;
		
		// if gutter, add gutter class to stream UL
		if (this.gutter) this.list.addClass('gutter');
	},
	
	load_hide: function(){
		// hide "show ingredients link"
		this.list.getElements('a.ingredients').each(function(el){
			el.addClass('h');
		});
	},
	
	listen: function(){
		
		// All fx could now be replaced via 'hover' class only.
		// Just add li.hover style opacity change
		this.rows.each(function(el,row){
			// Row hover fx
			this.fx[row] = {};
			
			el.getElements('div.photos').each(function(obj,i){
				this.fx[row][i] = new Fx.Style(obj, 'opacity', {wait: false, duration:300});
				el.addEvents({'mouseenter': this.fadein.pass([row,i],this), 'mouseleave': this.fadeout.pass([row,i],this)});
			},this);
			
			// Toggle hover class
			el.addEvents({
				'mouseenter': function(){
					el.addClass('hover');
				},
				'mouseleave': function(){
					el.removeClass('hover');
				}
			});
		},this);
	},
	
	fadein: function(row,i){
		if (window.ie) return;
		if (this.fx[row][i]){
			this.fx[row][i].start(0.85, 1);
			} 
	},
	
	fadeout: function(row,i){
		if (window.ie) return;
		if (this.fx[row][i]) this.fx[row][i].start(1, 0.85);
	}

}



// --------------------------------------------------------------------
//  Sidebox "More" Grower
// --------------------------------------------------------------------
sidebox_slider = new Class({
	
	options: {
		link: '',
		open: false,
		showing: 3
	},
	
	initialize: function(list, options){
		this.list = $(list);
		if (!this.list) return;
		this.setOptions(options);
		if (!this.options.link) return;
		this.lis = this.list.getChildren();
		
		this.preload.delay(1500,this);
	},
	
	
	preload: function(){
		// store expanded list height
		this.expanded_h = this.list.getSize().size.y;
		
		// hide extra items
		this.load_hide();
		
		// store minimized height
		this.minimized_h = this.list.getSize().size.y;
		
		this.fx();
		this.listen();	
	},
	
	update_elements: function(li){
		// An li item has been added after initial page load. 
		
		// Fetch all li's including any newly added
		this.lis = this.list.getChildren();
		
		// Remark hidden items
		this.load_hide();
		
		var new_li_height = li.getSize().size.y;
		this.expanded_h = this.expanded_h + new_li_height;
		
	},
	
	load_hide: function(){
		// Re-fetch LI's in case of any injected after initial page load
		this.lis.each(function(el,i){
			if (i >= this.options.showing) el.addClass('hidden');
		},this);
	},
	
	fx: function(){
		this.fx_h = new Fx.Style(this.list, 'height', {duration:200, fps:200, transition:Fx.Transitions.Quad.easeOut});
		
		// set fixed height
		this.list.setStyle('height', this.minimized_h);
	},
	
	listen: function(){
		// listen
		this.options.link.addEvent('click', this.toggle.bindWithEvent(this));
	},
	
	toggle: function(e){
		// toggle showing 'extra' items
		new Event(e).stop();
		
		if (this.options.open) {
			this.hide_extended();
		} else {
			this.show_extended();
		}
		
		// change status
		this.options.open = this.options.open ? false : true;
		
		this.options.link.toggleClass('open');
		
		// swap link anchor txt
		var link_span = this.options.link.getElement('span');
		var current_text = link_span.getText();
		var new_text = this.options.open ? current_text.replace('More', 'Fewer') : current_text.replace('Fewer', 'More');
		link_span.setText(new_text);
	},
	
	hide_extended: function(){
		// shrink
		this.fx_h.start(this.expanded_h, this.minimized_h).chain(
			function(){
				// hide extras
				this.lis.each(function(el,i){
					if (i >= this.options.showing) el.addClass('hidden');
				},this);
			}.bind(this)
		);
	},
	
	show_extended: function(){
		// show hidden, still under overflow
		this.lis.each(function(el,i){
			if (el.hasClass('hidden')) el.removeClass('hidden');
		},this)
		
		// grow
		this.fx_h.start(this.minimized_h, this.expanded_h);
	}
	
});

// implement options class
sidebox_slider.implement(new Options);



// --------------------------------------------------------------------
//  Textarea Grower
// --------------------------------------------------------------------
textarea_growers = {
	
	init: function() {
		// vars
		this.textareas = $$('textarea');
		if (this.textareas.length==0) return;
		this.min_height = {};
		
		this.textareas.each(function(el,i){
			this.rig(el,i);
		},this);	
	},
	
	add_textarea: function(el){
		// If called before initial growers are made
		if (!this.textareas) return;
		var i = this.textareas.length;
		// Add to stack
		this.textareas.push(el);
		this.rig(el,i);
	},
	
	rig: function(el,i){
		this.listen(el,i);	
		this.build_mimic_box(el,i);
		this.pre_size(el,i);
	},
	
	listen: function(el,i) {
		// watch for keyup pass to update()
		el.addEvent('keyup', this.update.bind(this,i));
	},
	
	pre_size: function(el,i) {
		// in case textarea has content, make sure it is tall enough not to show scrollbar by default
		this.update(i);
	},
	
	// Can't determine how much content in a textarea so we create boxes w/same styles to get size
	build_mimic_box: function(el,i) {
		// get textarea styles [height, line height, font fam, font size]
		var styles = el.getStyles('height', 'font-family', 'font-size', 'line-height', 'width');
		this.min_height[i] = styles.height.toInt();
		styles.height = 'auto';
		styles.position = 'absolute';
		styles.top = '-1000px';
		styles.left = '-1000px';
		
		// create mimic_box and apply styles
		var mimic_box = new Element('div', {
			styles: styles,
			id: 'mimic_' + i
		});
		
		// inject mimic box into dom
		mimic_box.injectInside(document.body);
	},
	
	update: function(i) {
		// replace selected characters and newlines
		var val = this.textareas[i].value.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/&/g, '&amp;')
			.replace(/\n/g, '<br/>');
			
		// set mimic box html
		var mimic_box = $('mimic_' + i);
		mimic_box.setHTML(val);
		
		// copy box height to textarea + buffer
		this.textareas[i].setStyle('height', Math.max(mimic_box.getSize().size.y + 44, this.min_height[i]));
	}
	
}
/*
textarea_growers = {
	
	init: function() {
		// vars
		this.textareas = $$('textarea');
		if (this.textareas.length==0) return;
		this.min_height = {};
		
		// functions
		this.listen();
		this.build_mimic_boxes();
		this.pre_size();
	},
	
	listen: function() {
		this.textareas.each(
			function(el,i){
				// watch for keyup pass to update()
				el.addEvent('keyup', this.update.bind(this,i));
			},
		this);
	},
	
	pre_size: function() {
		// in case textarea has content, make sure it is tall enough not to show scrollbar by default
		this.textareas.each(
			function(el,i){
				this.update(i);
			},this
		);
	},
	
	// Can't determine how much content in a textarea so we create boxes w/same styles to get size
	build_mimic_boxes: function() {
		this.textareas.each(
			function(el,i){
				
				// get textarea styles [height, line height, font fam, font size]
				var styles = el.getStyles('height', 'font-family', 'font-size', 'line-height', 'width');
				this.min_height[i] = styles.height.toInt();
				styles.height = 'auto';
				styles.position = 'absolute';
				styles.top = '-1000px';
				styles.left = '-1000px';
				
				// create mimic_box and apply styles
				var mimic_box = new Element('div', {
					styles: styles,
					id: 'mimic_' + i
				});
				
				// inject mimic box into dom
				mimic_box.injectInside(document.body);
			},
		this);
	},
	
	update: function(i) {
		// replace selected characters and newlines
		var val = this.textareas[i].value.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/&/g, '&amp;')
			.replace(/\n/g, '<br/>');
			
		// set mimic box html
		var mimic_box = $('mimic_' + i);
		mimic_box.setHTML(val);
		
		// copy box height to textarea + buffer
		this.textareas[i].setStyle('height', Math.max(mimic_box.getSize().size.y + 44, this.min_height[i]));
	}
	
}
*/

// --------------------------------------------------------------------
//  Tag Fields
//	Editable visual tags embedded in input.
// --------------------------------------------------------------------
var tag_field = new Class({
	
	options: {
		max_tags: 99,
		delimeter: '+', // options are + or ,
		active_input_id: 'active_input',
		/*storage_input: 'tag_input',*/ // break anything? this is always going to be the initial field passed in
		form: false,
		submit_button: false,
		hide_input: false, // hide input at start for single tag field style purposes
		clear_default: true, // clear any default example tags from field on first click
		extra_class: 'w_del' // another css class to add to the ul.holder
	},
	
	initialize: function(element, options){
		this.setOptions(options);
		this.element = $(element).setStyle('display', 'none');
		this.tag_pool = $('tag_list') || false;
		
		// set delimeter keycode
		this.options.delimeter_key_code = (this.options.delimeter == '+' ? 107 : 188);
		//this.storage_input = $(this.options.storage_input); see above for removal
		this.storage_input = this.element;
		if (this.options.form) this.form = $(this.options.form);
		if (this.options.submit_button) this.submit_button = this.form.getElement('a.' + this.options.submit_button);
		
		this.build_ul();
		this.pre_load_tags();
		this.listen();
	},
	
	build_ul: function(){
		// insert containing ul
		this.ul = new Element('ul', {'class': 'tag holder ' + this.options.extra_class});
		// inject input li
		var hidden = this.options.hide_input ? ' closed' : '';
		this.input_li = new Element('li', {'class': 'input'+ hidden});
		this.active_input = new Element('input', {'id':this.options.active_input_id, 'type':'text', 'class':'pre skip tag_box'}).injectInside(this.input_li);
		this.input_li.injectInside(this.ul);
		// Inject all into dom
		this.ul.injectBefore(this.element);
	},
	
	pre_load_tags: function(){
		// if field has tags in it, lets pre-load them visually in the ul.holder
		var tags = this.element.value;
		
		// Reset field value to blank, as this.add_tag() will re-add the values
		this.element.value = '';
		
		if (tags!=''){
			// explode
			var arr = tags.split(this.options.delimeter);
			//this.add_default_tags(arr);
			/* Old method, each tag caused a new reflow, so replaced with add_default_tags */
			arr.each(function(tag,i){
				this.add_tag(tag.trim());
			},this);
		}
	},
	
	listen: function(){
		// watch active input for new tags
		this.active_input.addEvent('keyup', 
			function(e){
				var e = new Event(e);
				
				// if delimeter entered, add visual tag element
				if (e.code == this.options.delimeter_key_code) {
					
					// add new tag
					this.add_tag(this.active_input.value.trim().replace(this.options.delimeter, ''));
					
					// if max # tags reached, hide input
					if (this.reached_tag_limit()) this.hide_input();
					
					// clear field
					this.active_input.value = '';
					
				} else if (e.key == 'enter' && this.options.form) {
					
					// hide field
					this.active_input.hide();
					
					// check for "dangling" tag (not added to input storage)
					if (this.active_input.value != '') {
						this.add_tag(this.active_input.value.trim());
					}
					
					// clear field
					this.active_input.value = '';
					
					// submit form
					if (this.options.form) this.form.submit();
					
				}
			}.bind(this)
		);
		
		this.active_input.addEvent('blur', function(e){
			// check for "dangling" tag (not added to input storage)
			if (this.active_input.value != '') {
				this.add_tag(this.active_input.value.trim());
				
				// clear field
				this.active_input.value = '';
			}
		}.bind(this));
		
		// submit button click
		if (this.options.submit_button) {
			this.submit_button.addEvent('click', function(){ this.form.submit() }.bind(this))
		}
		
		// pipe ul clicks to shortened field and remove default tags
		this.ul.addEvent('click', 
			function(){ 
				// show field input (can hide by default for style purposes on single tag field)
				this.ul.getElement('li.input').removeClass('closed');
				this.active_input.focus(); 
				
				// clear any default tags?
				if (!this.clear_default) return;
				
				// if first click, remove default tags
				if (this.active_input.hasClass('pre')) {
					// from dom
					this.ul.getElements('li.tag').each(function(el){ el.remove() });
					// from hidden field
					this.storage_input.value = '';
					// remove class
					this.active_input.removeClass('pre')
				}
					
			 }.bind(this)
		 );
	},
	
	hide_input: function(){
		this.active_input.getParent().addClass('closed')
	},
	
	reached_tag_limit: function(){
		var val = this.storage_input.value;
		return (val!='' && val.split(this.options.delimeter).length >= this.options.max_tags)
	},

	// This causes fewer reflows than adding each individually via add_tag()	
	/*
	add_default_tags: function(tags_arr){
		
		var lis = document.createDocumentFragment();
		
		// Create an element w/all lis
		tags_arr.each(function(tag,i){
			var li = this.add_tag(tag, true);
			lis.appendChild(li);
			
			// Store value in hidden field
			var tag = tag.toLowerCase();
			this.storage_input.value += this.storage_input.value != '' ? this.options.delimeter + tag : tag;
		},this);
		
		// Inject tag lis *before* active input
		this.ul.insertBefore(lis, this.input_li);
	},
	*/
	
	add_tag: function(tag_text, return_li){
		
		if (tag_text=='') return;
		
		// prevent too many tags for style breakdown purposes
		if (this.reached_tag_limit()) return;
		
		// create new li.tag
		var li = new Element('li', 
			{
				'class': 'tag',
				'events': {
					'mouseover': function(){ this.addClass('hover') },
					'mouseout': function(){ this.removeClass('hover') }
				}
			}
		).setText(tag_text);
		
		var a = new Element('a', 
			{
				'class': 'remove', 
				'href': '#',
				'events': {
					'click': this.remove_tag.bindWithEvent(this)
				}
			}
		).injectInside(li);
		
		// Used when pre-loading tags
		if (return_li) return li;
		
		// inject tag in correct order
		if (this.ul.getElement('li.tag')){
			var num = this.ul.getElements('li.tag').length;
			li.injectAfter(this.ul.getElements('li.tag')[num-1])
		}else{
			li.injectTop(this.ul);
		}
		
		// store value in hidden field
		var tag = tag_text.toLowerCase();
		this.storage_input.value += this.storage_input.value != '' ? this.options.delimeter + tag : tag;
		
	},
	
	remove_tag: function(text){
		// if from click remove, text is actually an event and we need to grab the text out
		if (typeof text == 'object') {
			new Event(text).stop();
			var text = text.target.getParent().getText();
		}
		
		// Clean whitespace
		var text = text.trim().toLowerCase();
		
		// remove value from hidden field
		var field = this.storage_input;
		field.value = field.value.split(this.options.delimeter).remove(text).join(this.options.delimeter);
		
		// remove li.tag from dom
		this.ul.getChildren().each(function(li,i){
			if (li.getText().trim().toLowerCase() == text) li.remove();
		},this);
		
		// remove highlighting from tag pool (recipe page bookmarking popup)
		if (this.tag_pool){
			this.tag_pool.getChildren().each(function(li,i){
				if (li.getText().toLowerCase() == text) li.removeClass('clicked');
			});	
		}
		
		
		// check if input needs to be activated
		if (!this.reached_tag_limit()) this.active_input.getParent().removeClass('closed');
		
		// refocus on field
		this.active_input.focus();

	}
	
});

tag_field.implement(new Options);



// --------------------------------------------------------------------
//  Polaroid Content Boxes Expansion Mode Switcher
// --------------------------------------------------------------------
stream = function(){};
stream.prototype = {
	init: function(list_type, containing_ul, control_panel, size) {
		// if only 1 per page setup vars
		if (!containing_ul) {
			containing_ul = $('mainlist');
			control_panel = $E('ul.filters');
		}
		
		this.listType = list_type;
		this.minSize = size == 'small' ? '' : '_med';
		this.expanded = true;
		this.optionLinks = $(control_panel).getElements('li a');
		this.ul = containing_ul ? $(containing_ul) : $('mainlist');
		if (!this.ul) return;
		this.infos = this.ul.getElements('li.box div.info');
		
		this.preset();
		this.listen();
	},
	
	preset: function() {
		this.toggle(null,0);
	},
	
	listen: function() {
		this.optionLinks.each(function(el,i){
			el.addEvent('click', this.toggle.bindWithEvent(this,i));								
		},this);
	},
	
	toggle: function(e,i) {
		if (e) new Event(e).stop();
		if (i==0 && this.expanded) { // show minimized
			this.expanded = false;
			this.ul.className = this.listType + this.minSize;
			this.optionLinks[0].getParent().addClass('on');
			this.optionLinks[1].getParent().removeClass('on');
			this.infos.each(function(el,n){
				el.addClass('hide');
			},this);
		} else { // show expanded
			this.expanded = true;
			this.ul.className = this.listType + '_expanded';
			this.optionLinks[1].getParent().addClass('on');			
			this.optionLinks[0].getParent().removeClass('on');
			this.infos.each(function(el,n){
				el.removeClass('hide');
			},this);			
		}
			
	}
}



// --------------------------------------------------------------------
//  Search Filter - Click filter icon and search field opens
//		Elements
//			a#show_search - icon filter button to show field
//			#search_filter_box - container for search form
//			ul.recipe_stream - recipe stream to add dampner to
//			form#search_filter - form
//			a#search_filter_button - form submit button
// --------------------------------------------------------------------

var search_filter = {
	init: function() {
		this.btn = $('show_search');
		this.fieldset = $('search_filter_box');
		this.recipes = $E('ul.recipe_stream');
		
		this.load_hide();
		this.listen();
	},
	
	load_hide: function(){
		this.fieldset.hide();	
	},
	
	listen: function() {
		this.btn.addEvent('click', this.toggle.bindWithEvent(this))
		$('search_filter_button').addEvent('click', function(e){
			new Event(e).stop();
			$('search_filter').submit();
		});
	},
	
	toggle: function(e) {
		this.btn.getParent().toggleClass('on');
		new Event(e).stop();
		if (this.fieldset.hasClass('open')) this.hide();
		else this.show();		
	},
	
	show: function() {
		this.fieldset.show();
		if(this.recipes) this.recipes.addClass('defocus');
		this.fieldset.addClass('open');
	},
	
	hide: function() {
		this.fieldset.hide();
		if(this.recipes) this.recipes.removeClass('defocus');		
		this.fieldset.removeClass('open');
	}
}


// --------------------------------------------------------------------
//  Show Tag Slip Filters
// --------------------------------------------------------------------
var tags = {
	init: function() {
		this.wrapper = $('tags_wrap');
		if (!this.wrapper) return;
		this.tags = $('tag_list');
		this.button = $('refine');
		this.tab_highlight = this.button.getParent().hasClass('tabs') ? true : false;
		this.prevSelected = 0;
		this.fx = new Fx.Slide(this.tags, {duration: 400, onStart:this.tab_swap.bind(this), onComplete:this.post_toggle.bind(this)}).hide();
		this.button.addEvent('click', this.toggle.bindWithEvent(this));
		// hide box
		this.wrapper.hide();
	},
	
	toggle: function(e) {
		var e = new Event(e).stop();			
		//this.tab_swap();
		if (!this.fx.open) this.wrapper.show();
		this.fx.toggle();
	},
	
	post_toggle: function(){
		// check if we need to close tags wrapper
		if (this.fx.open) this.wrapper.hide();
	},
	
	tab_swap: function() {
		var links = this.button.getParent().getParent().getChildren();
		if (this.fx.open) {
			this.button.getParent().removeClass('on');
			// highlight prev selected as long as not the button we just got off
			if (links[this.prevSelected]!=this.button.getParent()) links[this.prevSelected].addClass('on');
		} else {
			links.each(function(el,i){
				if (el.hasClass('on')) this.prevSelected = i;						   
				el.removeClass('on');
			},this);
			this.button.getParent().addClass('on');			
		}
	}
}



var pops = {

	init: function() {
		this.pop_starters = $$('a.pop');
		if (this.pop_starters.length==0) return;
		
		this.extract();
		this.listen();
		this.pops = $$('dl.pop_inline');
	},
	
	/* extract boxes to end of dom */
	extract: function() {
		this.pop_starters.each(function(el,i){
			var box = $('pop_' + el.rel);
			// Try to fix ie bullshit interacting w/boxes that have been moved.
			box.injectInside(document.body);
			
			// For pops specifically set to be visible in markup
			if (box.hasClass('open')) box.removeClass('open');
		},this);
	},
	
	// Recalculated on each click
	position: function(a,i) {
		var box = $('pop_' + a.rel);
		var pos = a.getCoordinates();
		var dims = box.getDimensions();
		var pop_height = dims.height;
		var pop_width = dims.width;
		var test = $E('li.save');
		
		var top = pos.top + pos.height;
		
		// right side overflow check
		var link_width = pos.width;
		var overflow = pos.left + pop_width - window.getScrollWidth();
		pos.left = (overflow < 0) ? pos.left : pos.left - pop_width + link_width; // link width is to center under link
		
		// carrot position class
		if (overflow > 0) box.addClass('r');
		box.setStyles({'top': top+5, 'left': pos.left});
	},	
	
	listen: function() {
		// open
		this.pop_starters.each(function(el,i){
			el.addEvent('click', this.toggle.bindWithEvent(this,[el,i]));
		},this);
		// close for non box clicks & non link clicks
		document.body.addEvent('click', this.hide.bindWithEvent(this));			
	},
	
	toggle: function(e,a) {
		this.position(a);
		new Event(e).stop();
		var box = $('pop_' + a.rel);
		if (box.hasClass('open')) { box.hide(); box.removeClass('open'); }
		else { box.show(); box.addClass('open'); }
		
		// hide other boxes 
		this.pops.each(function(pop){
			if (pop == box) return;
			pop.hide();
			pop.removeClass('open');
		},this);
	},		

	hide: function(e) {
		// let toggle handle closing for link
		// don't close in certain situations (maybe try universal 'stay open' class instead of specifics)
		if (['pop', 'remove'].contains(e.target.className)) return;
		this.pops.each(function(box){
			if (!box.hasChild(e.target) && box.hasClass('open')) { box.hide(); box.removeClass('open'); }
		});
	}

}

// --------------------------------------------------------------------
//  Post Onload Image Download
//	Serps & Recipe Page
// --------------------------------------------------------------------
var post_onload_img_download = new Class({
	
	options: {
		offset: 0
	},
	
	initialize: function(placeholders, delay, options){
		// Fetch all image placeholders
		this.placeholders = placeholders;
		this.delay = delay || 1500;

		this.setOptions(options);
		
		// After page is loaded, insert images
		var load = function(){
			this.placeholders.each(function(span,i){
				if (i>=this.options.offset)
					this.load(span,i);
			},this);
		}.bind(this);
		
		// Hold off on loading for this.delay
		load.delay(this.delay);

	},
	
	load: function(span, i){
		
		// Extract data to make img
		var params = this.extract_data(span); 
		
		// Create img, 0 opacity
		var img = new Element('img', 
			{
				'src': params['src'],
				'styles': {'opacity':0},
				'class': params['class'],
				'alt': ''
			}
		);

		// Remove title from placeholder (or use diff storage mech)
		span.title = '';
		
		// Inject img
		img.injectInside(span);
		
		// Fade it in
		new Fx.Style(img, 'opacity', {'duration':700}).start(0, .9)
		
	},
	
	extract_data: function(span){
		var data = span.title.split('&');
		
		// Set vars (el="varname=value")
		params = {'src':'', 'class':''};
		data.each(function(el){
			parts = el.split('=');
			params[parts[0]] = parts[1];
		});
		
		return params;
	}
});


post_onload_img_download.implement(new Options);