// Recipe Page

// sifr
var h1 = new sifr($E('p.replaced'));

window.addEvent('load', function() {
	
	// add comments
	add_comments.init.delay(2000, add_comments);
	
	// Limit # of meta tags shown
	limit_tags.init.delay(2500, limit_tags);
	
	// comment tip
	comment_link_tip.init();
	
	// edit recipe feedback - owner (i.e is shooting onload b4 domread? wtf?)
	update_msg.init();
	
	// follow uploader
	follow.init();
	
	// back to top arrow
	back_to_top.init();
});


// --------------------------------------------------------------------
//  Back to Top Arrow
// --------------------------------------------------------------------
var back_to_top = {
	init: function(){
		// Delay 20 seconds
		this.show_it.delay(20000,this);
	},
	
	show_it: function(){
		var lnk_src = $('top_10_msg');
		if (!lnk_src) return;
		var a_loc = lnk_src.getElement('h6 a').href;
		var a_txt = lnk_src.getElement('h6 a strong').getText().replace(/recipes/i, '');
		if (!a_loc || !a_txt) return;
		
		var a = new Element('a', {'class':'to_best_arrow', 'href':a_loc});
		a.setHTML('View our top <strong>' + a_txt + '</strong> recipes <span class="nose"></span><span class="end"></span>');
		
		a.injectBefore($('content'));
	}
}

// --------------------------------------------------------------------
//  Follow Uploader
// --------------------------------------------------------------------
var follow = {
	init: function() {
		this.button = $('follow') || false;
		if (!this.button) return;
		this.button.addEvent('click', this.follow.bindWithEvent(this));
	},
	
	follow: function(e) {
		new Event(e).stop();
		// Are we following or unfollowing?
		var action = this.button.hasClass('dark') ? 'remove_follower' : 'add_follower';
		var data = {'action':action, 'username':this.button.rel};
		var xhr = new Json.Remote('/application/xhr/profile_xhr.php', {onComplete:this.update.bind(this)}).send(data);
	},
	
	update: function(r) {
		// Remove button and replace w/message
		var fieldset = this.button.getParent();
		if (!r.error) fieldset.addClass('success');
		fieldset.setHTML(r.html);
	}
}

// --------------------------------------------------------------------
//  Edit Modal Actions
// --------------------------------------------------------------------
var recipe_edit = {
	
	init: function(edit_modal) {
		if (!edit_modal) return;
		
		this.edit_modal = edit_modal
		
		this.listen();
	},
	
	listen: function() {
		
		// field visual focus
		this.edit_modal.modal.getElements('.defocus').addEvents(
			{
				'focus': function(){ 
					this.addClass('focus');
				},
				
				'blur': function(){
					this.removeClass('focus');
				},
				
				'change': function(){
					this.removeClass('defocus')
				}
				
			}
		);
		
		// show textareas
		$$(['edit_ingredients', 'edit_directions', 'edit_intro']).addEvent('click', function(e) {
			new Event(e).stop();																   
			this.getParent().getNext().show();
		});
		
		// save changes
		$('save_edit').addEvent('click', 
			function(e){ 
				new Event(e).stop(); 
				status_msg.show('process');
				
				// Shouldn't this be handled by validation script?
				//this.modal.getElement('form').submit(); 
			}.bind(this)
		);
		
		// change photo
		$('change_photo').addEvent('click', 
			function(e){ 
				new Event(e).stop(); 
				$('change_photo_field').show(); 
			}
		);
		
		// delete photo
		$('delete_photo').addEvent('click', this.delete_photo.bindWithEvent(this));
		
		// change photo field focus
		$E('#change_photo_field input').addEvent('click', 
			function(){ 
				this.getNext().removeClass('defocus') 
			}
		);
	},
	
	delete_photo: function(e) {
		new Event(e).stop();
		
		$('remove_photo').value = true;
		$('current_photo').src = '/images/_site/blanks/recipe_50.png';
	}
}



// --------------------------------------------------------------------
//  Comments Adding a Link Tip
// --------------------------------------------------------------------
var comment_link_tip = {
	init: function(){
		
		// watch
		$('comment_tip').addEvent('click', function(e){
			new Event(e).stop();
			
			this.getParent().toggleClass('closed');
		})
	}
}


// --------------------------------------------------------------------
//  Mark comment as helpful
// --------------------------------------------------------------------
var comment_was_helpful = {
	init: function(){
		
		this.lnks = $$('#comments .helpful a');
		
		this.listen();
	},
	
	listen: function(){
		
		this.lnks.each(function(a,i){
			
			a.addEvent('click', function(e){
				
				new Event(e).stop();
				
				// Save
				var data = {action:'mark_comment_as_helpful', recipeID:0, commentID:a.rel};
				
				var xhr = new Json.Remote('/application/xhr/recipe_xhr.php', 
					{
						onComplete: function(r){
							var line = a.getParent();
							line.setStyle('opacity',0);
							line.setHTML(r.html);
							
							// Flash it
							new Fx.Style(line, 'opacity').start(0,1);
							
						}.bind(this)
					}
				).send(data);
				
			}.bind(this))
			
		},this);
	}
}

// --------------------------------------------------------------------
//  Remove an Existing Bookmark Link
// --------------------------------------------------------------------
var remove_bookmark = {
	init: function(){
		// listen
		var link = $('remove_bookmark_link');
		if (link) {
		
			link.addEvent('click', function(e){
				new Event(e).stop();
				
				var pop = $('pop_save');
				
				// xhr
				var bookmarkID = /bookmark_([0-9]+)/.exec(this.className)[1];
				if (!bookmarkID) return;
				var data = {'action':'delete_bookmark', 'recipeID':0, 'bookmarkID':bookmarkID};
				var xhr = new Json.Remote('/application/xhr/recipe_xhr.php').send(data);
				
				// show feedback
				$('bookmark_status').setText('Bookmark Removed.');
				
				(function(){
					// hide pop
					pop.removeClass('open');
					pop.hide();
					
					// clear hidden field
					$('bookmark_tags').value = '';
					
					// clear 'clicked' tags
					$('tag_list').getChildren().each(function(el){
						el.removeClass('clicked');
					});
					
					// clear tags in holder
					pop.getElement('ul.holder').getElements('li.tag').each(function(el){ el.remove() });
				}).delay(1200);
			});	
		}
		
	}
}


// --------------------------------------------------------------------
//  Add Ingredient to Shopping List from Toolbar Popup
//	MERGED BOTH
// --------------------------------------------------------------------
var ingredients_to_shopping_list_from_pop = {
	init: function(){
		
		var pop_list_ingredients = $('pop_list').getElements('ul.slist li');
		var ingredients_list = $$('div.ingredients ul li');
		
		$$(pop_list_ingredients, ingredients_list).each(function(el){
			
			// Skip last li in popup list (which is a style-only element)
			// Skip headings
			if (el.hasClass('cap') || el.hasClass('skip')) return;
			
			// Watch for add/remove clicks
			var a = el.getElement('a.to_list');
			
			// Add click events
			a.addEvent('click', function(e){
				
				new Event(e).stop();
				
				// Are adding/removing this ingredient?
				var adding = a.getParent().hasClass('checked') ? false : true;
				var action = adding ? 'add_shopping_list_item' : 'delete_shoplist_item';
				
				// xhr data
				var item = a.getProperty('rel');
				var recipeID = $('recipeID').value;
				var data = {'action':action, 'recipeID':recipeID};
				if (adding) data['new_item'] = item;
				if (!adding) data['itemID'] = /item_([0-9]+)/.exec(a.className)[1];
				
				var xhr = new Json.Remote('/application/xhr/recipe_xhr.php', {
					onComplete: function(resp) {
						
						if (resp.error) return;
						
						// If item added...
						if (resp.itemID){
						
							// Remove any previous item_() class
							a.className.replace(/item_([0-9]+)/,'');
							
							// Add itemID class
							a.addClass('item_' + resp.itemID);
							
							// Check off item
							el.addClass('checked');
							a.setProperty('title', 'Successfully added to your shopping list. Click to remove.');
						
						// If item deleted...
						} else {
						
							// Remove itemID class
							a.removeClass('item_' + data['itemID']);
							
							// Remove checkmark
							el.removeClass('checked');
								
						}
						
					}	
				}).send(data);
		
			})
		})
	}
}


// --------------------------------------------------------------------
//  Add Ingredients to Shopping List from Ingredients Section
// --------------------------------------------------------------------
var ingredients_to_shopping_list = {
	
	init: function(){
		this.ingredients = $$('div.ingredients ul li');
		this.listen();
	},
	
	listen: function(){
		this.ingredients.each(
			function(el){
				if (el.hasClass('skip')) return;
				var a = el.getElement('a.to_shopping_list');
				a.addEvent('click', this.add.bindWithEvent(this,a));
			},this
		)
	},
	
	add: function(e,a){
		new Event(e).stop();
		
		// xhr handled by ingredients_to_shopping_list_from_pop()
		// mark as added
		a.addClass('checked');
		a.setProperty('title', 'Successfully added to your shopping list.');
	}
	
}


// --------------------------------------------------------------------
//  Clickable Tag Suggestions for Bookmarking
// --------------------------------------------------------------------
var bookmark_tag_suggestions = {
	init: function(bookmark_tagging) {
		// store tag field class for adding and removing tags
		this.bookmark_tagging = bookmark_tagging;
		// watch tag clicks
		this.tags = $$('#tag_list li');
		this.tags.each(function(el,i){
			el.addEvent('click', this.tag_click.bindWithEvent(this,el));
		},this);
		
		this.pre_tag();
	},
	
	pre_tag: function() {
		
		// get used tags from field
		var used = $('bookmark_tags').value.split(',');
		
		// clean whitespace
		var used = used.map(function(el){
			return el.trim().toLowerCase();
		});
		
		this.tags.each(function(el,i){
			
			// check if tag should be marked as used
			var tag = el.getText().toLowerCase().trim();
			
			if (used.contains(tag)) {
				el.addClass('clicked');	
				// field_tags class will take care of adding any tags already in the field
			}
		},this);
	},
	
	tag_click: function(e,li) {
		new Event(e).stop();
		
		var field = $('bookmark_tags');
		var tags = field.value;
		var tag = li.getText();
		
		// Remove a tag from the selection
		if (li.hasClass('clicked')) { 
			li.removeClass('clicked');
			this.bookmark_tagging.remove_tag(tag);
		} else { 
			// Add tag
			this.bookmark_tagging.add_tag(tag);
			// show selected
			li.addClass('clicked');
		}		
	}
}


// --------------------------------------------------------------------
//  Limit # of Tags Displayed Initially in Meta Section
// --------------------------------------------------------------------
var limit_tags = {
	init: function(){
		
		// limit # of tags shown by default
		var tags = this.tags = $$('ul.tags_text li');
		tags.each(function(el,i){
			if (i>5) el.addClass('more');								
		});
		// add "more..." link
		if (tags.length > 5){ 
			var li = new Element('li');
			var a = new Element('a', {'href':'#more'}).setText('more...');
			a.injectInside(li);
			li.injectInside($E('ul.tags_text'));
			// watch for click
			a.addEvent('click', this.toggle.bindWithEvent(this,a));
		}
	},
	
	toggle: function(e,a){
		new Event(e).stop();
		
		this.tags.each(function(el,i){
			if (i>5) el.toggleClass('more');
		});
		
		// swap link text
		if (a.getText().test('more')) a.setText('less...');
		else a.setText('more...');
	}
}


// --------------------------------------------------------------------
//  Show Updated Box for Recipe Edits
// --------------------------------------------------------------------
var update_msg = {
	init: function() {
		var saved_msg = $E('p.changes_saved');
		if (!saved_msg) return;
		status_msg.show('saved',true);
	}
}


// --------------------------------------------------------------------
//  Upload a Photo
// --------------------------------------------------------------------
var photo_upload = {
	
	init: function() {
		this.box = $('pop_photo');
		this.listen();
	},
	
	listen: function() {
		this.box.getElement('a.upload_photo').addEvent('click', function(e){
			new Event(e).stop();
			$E('#pop_photo form').submit();
		}.bind(this));
		
		this.box.getElement('a.cancel_photo').addEvent('click', function(e){
			new Event(e).stop();
			this.box.removeClass('open');
			this.box.hide();
		}.bind(this));
	}
}


// --------------------------------------------------------------------
//  Step-by-Step Photos (Not in use. Moved to popups + own page)
// --------------------------------------------------------------------
var steps = {
	
	init: function() {
		this.steps = $$('#steps ul li');
		if (!this.steps) return;
		this.load_hide();
		this.listen();
	},
	
	load_hide: function() {
		this.steps.each(function(el,i){		 
			if (el.hasClass('add')) return;					 				 	
			el.getElement('em').addClass('hidden');
		});
	},
	
	listen: function() {
		this.steps.each(function(el,i){
			if (el.hasClass('add')) return;					 
			el.addEvents({
				'mouseenter': function(){
					el.getElement('em').removeClass('hidden');
					el.getElement('span').hide();
				},
				
				'mouseleave': function(){
					el.getElement('em').addClass('hidden');
					el.getElement('span').show();					
				}
			});
		},this);
	}
}


// --------------------------------------------------------------------
//  Hide Recipe Intro Beyond a Certain Length
// --------------------------------------------------------------------
var extended_intro = {

	init: function() {
		this.extra = $E('div.details p span');
		if (!this.extra) return;
		
		this.lnk = $('read_more');
		this.intro = $E('div.details p');
		this.position();
		this.listen();
	},
	
	// move extended el due to FF z-index stacking issues w/overflow:hidden
	position: function() {
		var pos = this.intro.getCoordinates();
		
		// Work w/clone
		new_extra = this.extra.clone();
		new_extra.addClass('extra');
		new_extra.setStyles({'top': pos.top+pos.height, 'left': pos.left-1});
		// Inject Clone
		new_extra.injectInside(document.body);
		
		// Remove original
		this.extra.remove();
		this.extra = new_extra;
		this.watch_close();
	},
	
	watch_close: function() {
		this.extra.getElement('a.close').addEvent('click', this.hide.bindWithEvent(this));
	},
	
	listen: function() {
		if (!this.lnk) return;		
		this.lnk.addEvent('click',this.show.bindWithEvent(this));
	},
	
	show: function(e) {
		new Event(e).stop();
		// Darken text
		this.intro.addClass('extended');
		this.lnk.hide();
		var p = this.intro.getCoordinates();
		this.extra.setStyle('top',p.top+p.height);
		this.extra.show();
	},
	
	hide: function(e) {
		new Event(e).stop();
		this.intro.removeClass('extended');
		this.extra.hide();	
		this.lnk.show();
	}
}


// --------------------------------------------------------------------
//  Add Recipe Reviews
// --------------------------------------------------------------------
var reviews = {

	init: function(more_reviews) {
		// Save sidebox slider obj
		this.more_reviews = more_reviews;
		this.ul = $E('div#rating ul.pears');
		this.qual_rating = $('qual_rating');
		this.stars = $$('div#rating ul.pears li a');
		this.field = $('rating_comment');
		this.current_rating = this.ul.id.replace('rating_','');
		
		this.fx();
		this.listen();
		//this.show_current();
	},
	
	fx: function(){
		this.fx = new Fx.Slide('rating_form', 
			{
				duration: 300, 
				fps: 200, 
				onComplete: function(){
					// If opening, make height auto, to contain growing textfield
					if (!this.fx.open) this.fx.wrapper.setStyle('height','auto');
				}.bind(this)
			}
		).hide();
	},	
	
	show_current: function(){
		this.show_rating(this.current_rating.toInt());
		
		// add 1/2 star for x.5 rating
		if (this.current_rating.length > 1) { // ends in a .5
			this.stars[this.current_rating.toInt().round()].setProperty('class', 'on half');
		}	
	},
	
	listen: function() {
		this.stars.each(function(el,i){
			el.addEvents({
				'mouseover': this.show_rating.bind(this,i+1), 
				'click': this.comment_prompt.bindWithEvent(this,i+1)});
		},this);
		
		this.ul.addEvent('mouseleave', this.clear.bind(this));
		
		$('add_rating').addEvent('click', this.rate.bindWithEvent(this));
		$('cancel_rating').addEvent('click', this.cancel.bindWithEvent(this));
	},
	
	show_rating: function(n) {
		// show qualitative rating
		this.qual_rating.setProperty('class', 'rating r_'+n.round());
		
		for (i=1; i<=5; i++) {
			if (i<=n) {
				this.stars[i-1].setProperty('class', 'on');
			} else {
				this.stars[i-1].removeClass('on');
			}
		}
	},
	
	clear: function() {
		if (this.rating) {
			this.show_rating(this.rating);
			return;
		}
		this.show_current();
		//this.show_rating(this.current_rating);
	},
	
	comment_prompt: function(e,i) {
		new Event(e).stop();
		this.rating = i; // store selected rating
		if (this.fx.open) return;
		this.field.focus();
		this.fx.toggle();
	},
	
	rate: function(e) {
		new Event(e).stop();
		var comment = this.field.value;
		if (comment == '') return;
		
		// Disable to prevent crazy clicks
		if (this.disabled) return;
		this.disabled = true;
		
		var data = {action:'add_rating', recipeID:$('recipeID').value, rating:this.rating, comment:comment};
		var xhr = new Json.Remote('/application/xhr/recipe_xhr.php', {onComplete:
			function(r){				
				if (!r.html) return;
				var css_class = r.error ? 'error' : '';
				
				var c = new Chain();
				var cancel = this.cancel.bind(this);
				c.chain(cancel);
				c.chain(
					function(){
						var li = new Element('li', {'class':'new ' + css_class}).setHTML(r.html).injectTop('voters');
						li.setStyle('opacity',0);
						new Fx.Style(li, 'opacity', {duration:800,fps:200}).start(0,1);
						
						this.disabled = false;
						// Update slider's expanded height, and which are showing
						// No longer using slider
						//if (!r.error) this.more_reviews.update_elements(li);
						
				}.bind(this));
				c.callChains();
			}.bind(this)
		}).send(data);
	},
	
	cancel: function(e) {
		if (e) new Event(e).stop();
		
		this.fx.toggle();
		this.rating = null;
		this.clear(); // clear out highlighted ratings
	}
}


// --------------------------------------------------------------------
//  Add Recipe to a Group
// --------------------------------------------------------------------
var add_groups = {

	init: function() {
		this.group_list = $('group_list') || false;
		if (!this.group_list) return;
		this.listen();
	},
	
	listen: function() {
		// Watch item clicks, store groupID from group
		this.group_list.getElements('a').each(function(a,i){
			a.addEvent('click', function(){
				// Set groupID
				this.selection = a.rel;
			}.bind(this));
		},this);
		
		$('add_to_group').addEvent('click', this.add.bindWithEvent(this));
		
		// Watch deletes
		$('current_groups').getElements('a.delete').each(function(a){
			a.addEvent('click', this.remove.bindWithEvent(this, a));
		},this)
	},
	
	add: function(e) {
		new Event(e).stop();
		
		var groupID = this.selection;
		if (!groupID) return;
		
		var data = {'action':'add_group', 'recipeID':$('recipeID').value, 'groupID':groupID};
		var xhr = new Json.Remote('/application/xhr/recipe_xhr.php', {onComplete: 
			function(r) {
				if (!r.html) return;
				// inject new group entry
				var error_class = r.error ? ' error' : '';
				var li = new Element('li', {'class':'new' + error_class}).setHTML(r.html).injectTop('current_groups');
			}.bind(this)
		}).send(data);	
	},
	
	remove: function(e, a){
		new Event(e).stop();
		
		var li = a.getParent();
		var groupID = a.rel;
		var data = {'action':'remove_group', 'recipeID':$('recipeID').value, 'groupID':groupID};
		var xhr = new Json.Remote('/application/xhr/recipe_xhr.php', {onComplete: 
			function(r) {
				if (!r.html) return;
				// Remove group from list
				new Fx.Style(li, 'opacity', 
					{
						onComplete:function(){
							li.remove();
						}
					}
				).start(1,0);
			}.bind(this)
		}).send(data);
	}
}


// --------------------------------------------------------------------
//  Big Bookmark Button in Bookmark's List
// --------------------------------------------------------------------
var bookmark_in_fans = {
	init: function(){
		
		this.section = $('fans');
		this.stream = this.section.getElement('ul.people_stream');
		
		this.button = $('ilike') || false;
		if (!this.button) return;
		
		// Listen
		this.button.addEvent('click', this.add_fan.bindWithEvent(this)); 
	},
	
	add_fan: function(e) {
		new Event(e).stop();
		if (this.button.hasClass('voted')) return;

		var data = {action:'save', recipeID:$('recipeID').value};
		var xhr = new Json.Remote('/application/xhr/recipe_xhr.php', {onComplete: 
			function(r) {
				
				if (r.error) return;
				
				// Update button to reflect status
				var css_class = r.html == 'login' ? 'login' : 'voted';
				this.button.className = '';
				this.button.addClass(css_class);
				
				// Inject user into people list
				var li_html = '' +
				'<a href="' + r.user_link + '">' +
                '	<img alt="" src="/images/users/35/' + r.avatar + '" class="photo_35" />' +
                '	<span class="details">' +
                '		<strong>' + r.username + '</strong>' +
                '		<small>' + r.location + '</small>' +
                '	</span>' +
                '</a>';
                
                // Update li.blank spot for #bookmark button
                var blank = this.stream.getElement('li.blank');
                // Inject blank into 3 hole, to-be added will push it to #4
                var items = this.stream.getChildren();
				if (blank) blank.injectAfter(items[1]);
				
				var li = new Element('li', {'class':'injected'}).setHTML(li_html).injectTop(this.stream);
				
				// Re-apply edges
				this.stream.getChildren().each(function(li,i){
					i++;
					if (li.hasClass('edge')) li.removeClass('edge');
					if (i%4==0) li.addClass('edge');
				});

			}.bind(this)
		}).send(data);
	}				  
}

// --------------------------------------------------------------------
//  People who've bookmarked this recipe
// --------------------------------------------------------------------
/*
var fans_gawkers = {
	
	init: function() {
		this.container = $('fans');
		this.tabs = this.container.getElements('ul.tabs li a');
		
		this.lists = this.container.getElements('ul.people_stream');
		//this.lists = this.container.getElements('ul.last');
		this.fans = this.lists[0].getChildren();
		this.btns = {};
		this.status = {};
		this.has_more_fans = $('more_fans') ? true : false;
		if (this.has_more_fans) this.btns['more_fans'] = $('more_fans').getFirst();
		this.status['more_fans'] = false;
		this.initial_fans = 11;

		this.btns['add_fan'] = $('ilike');
		
		this.load_hide();
		this.hide_more_fans();
		this.listen();
	},
	
	// Hide if multiple lists (i.e. gakwers)
	load_hide: function() {
		//this.lists[1].hide();
	},
	
	hide_more_fans: function() {
		this.fans.each(function(el,i){
			if (i > this.initial_fans) el.addClass('extended');
		},this);
	},
	
	listen: function() {
		this.tabs.each(function(el,i){
			el.addEvent('click', this.swap_content.bindWithEvent(this,i)); // switch content
		},this);
				  
		if (this.btns['add_fan']) this.btns['add_fan'].addEvent('click', this.add_fan.bindWithEvent(this)); // new fan
		
		if (this.has_more_fans) this.btns['more_fans'].addEvent('click', this.toggle_more_fans.bindWithEvent(this));
	},
	
	swap_content: function(e,i) {
		new Event(e).stop();
		// hide list/tab
		this.lists[i==0 ? 1 : 0].hide();
		this.tabs[i==0 ? 1 : 0].getParent().removeClass('on');
		this.tabs[i==0 ? 1 : 0].getParent().removeClass('edge');
		
		// show 'more' link
		if (i==1 && this.has_more_fans)
			this.btns['more_fans'].hide();
		else if (this.has_more_fans)
			this.btns['more_fans'].show();
		
		// show
		this.lists[i].show();
		this.tabs[i].getParent().addClass('on');
		this.tabs[i].getParent().addClass('edge');
	},
	
	toggle_more_fans: function(e) {
		new Event(e).stop();
		if (this.status['more_fans']) { // hide
			this.hide_more_fans();
			this.btns['more_fans'].setText('Show More');
			this.btns['more_fans'].removeClass('up');
			this.status['more_fans'] = false;
		} else { // show
			this.fans.removeClass('more');
			this.btns['more_fans'].setText('Show Less');
			this.btns['more_fans'].addClass('up');
			this.status['more_fans'] = true;
		}
	},
	
	add_fan: function(e) {
		new Event(e).stop();
		if (this.btns['add_fan'].hasClass('voted')) return;

		var data = {action:'save', recipeID:$('recipeID').value};
		var xhr = new Json.Remote('/application/xhr/recipe_xhr.php', {onComplete: 
			function(r) {
				
				if (r.error) return;
				
				// Update button to reflect status
				var css_class = r.html == 'login' ? 'login' : 'voted';
				this.btns['add_fan'].className = '';
				this.btns['add_fan'].addClass(css_class);
				
				// Inject user into people list
				var li_html = '' +
				'<a href="' + r.user_link + '">' +
                '	<img alt="" src="/images/users/35/' + r.avatar + '" />' +
                '	<span class="details">' +
                '		<strong>' + r.username + '</strong>' +
                '		<small>' + r.location + '</small>' +
                '	</span>' +
                '</a>';
                
                // Update li.blank spot for #bookmark button
				this.lists[0].getElement('li.blank').injectAfter(this.lists[0].getChildren()[1]);
				
				var li = new Element('li', {'class':'injected'}).setHTML(li_html).injectTop(this.lists[0]);

			}.bind(this)
		}).send(data);
	}				  
}
*/


// --------------------------------------------------------------------
//  Add Comment or Review
// --------------------------------------------------------------------
var add_comments = {
	
	init: function() {
		this.section = $('comments');
		this.question = $('did_you_make_it');
		this.form = $('add_comment');
		this.field = this.section.getElement('textarea');
		this.list = $('recipe_comments');
		this.stars = this.form.getElements('ul.stars a');
		this.stars_box = this.section.getElement('fieldset.stars');
		this.stars_ul = this.section.getElement('ul.stars');
		this.submit_button = $('post_comment');
		
		this.fx = new Fx.Slide(this.form, {duration:300, fps:200,
			 onComplete:function(){
			 	this.fx.wrapper.setStyle('height','auto')
		 	}.bind(this)
	 	});
	 	
		this.type = 'comment';
		
		// action calls
		this.listen();
	},
	
	listen: function() {
		
		// Toggle view review form
		$$(['cancel_comment', 'show_comment_form']).addEvent('click', function(e){ 
			new Event(e).stop(); 
			this.fx.toggle();
			// reset
			this.type = 'comment';
			this.stars_box.hide();
		}.bind(this));
		
		// Star Hovers, Clicks
		this.stars.each(function(a,i){
			a.addEvents({
				'mouseover': this.show_rating.bind(this,i+1), 
				'click': this.store_rating.bindWithEvent(this,i+1)});
		},this);
		
		// Reset to stars to selected rating (or 0 if none)
		this.stars_ul.addEvent('mouseleave', this.clear_rating.bind(this));
		
		// Should we show review stars (i.e. this person has tried the recipe)
		this.question.getElements('a').each(function(a){
			a.addEvent('click', function(e){
				new Event(e).stop();
				
				// Set type (comment or full review)
				this.type = a.rel=='no' ? 'comment' : 'review';
				
				// Show stars, if tried
				if (this.type == 'review') this.stars_box.show();
				else this.stars_box.hide();
				
				// Show Submit Button Fieldset
				this.form.getElement('fieldset.actions').show();
				
			}.bind(this))
		},this);
		
		// Enable submit button & show "did you make this" question after start typing
		this.field.addEvent('keyup', function(e){
			// Show submit button
			this.form.addClass('open');
			this.question.show();
			this.form.getElement('fieldset.actions').show();
			if (this.field.value != '') // enable button
				this.submit_button.removeClass('disabled');
			else
				this.submit_button.addClass('disabled');
		}.bind(this));
		
		// Submit review/comment
		this.submit_button.addEvent('click', this.add.bind(this));
	},
	
	show_rating: function(n) {
		var rating_desc = this.section.getElement('li.rating_desc');
		var desc = ['<strong>Had Better.</strong> Won\'t make it again.', '<strong>Had Better.</strong> Won\'t make it again.', '<strong>Okay.</strong> Probably wouldn\'t make it again.', '<strong>Good!</strong> Will make it again.', '<strong>Delicious!</strong>'];
		
		// Show description
		rating_desc.setHTML('"' + desc[n-1] + '"');
		
		for (i=1; i<=5; i++) {
			if (i<=n) {
				this.stars[i-1].setProperty('class', 'on');
			} else {
				this.stars[i-1].removeClass('on');
			}
		}
	},
	
	store_rating: function(e, i){
		new Event(e).stop();

		// Remember rating
		this.rating = i;
	},
	
	clear_rating: function() {
		if (this.rating) {
			this.show_rating(this.rating);
			return;
		}
		
		// Clear any lit up
		this.stars.each(function(el){ el.removeClass('on') });
	},
	
	add: function(e) {
		new Event(e).stop();
		var comment = this.field.value;
		
		if (!comment || !this.type) return;
		
		// Comment or review?
		var review = this.type == 'review' ? true : false;
		
		// If a full rating, make sure rating is selected
		if (review && !this.rating) return;
		
		// Show loading message
		var pos = this.field.getPosition();
		this.msg = new Element('span', {'class':'loading'}).setHTML('<strong>Saving</strong> your message...');
		this.msg.setStyles({
			'position':'absolute',
			'left':pos.x,
			'top':pos.y
		});
		this.msg.injectInside(document.body);
		
		// Disable to prevent crazy-clicks(TM)
		if (this.disabled) return;
		this.disabled = true;
		
		var action = review ? 'add_rating' : 'add_comment';
		
		var data = {'action':action, 'recipeID':$('recipeID').value, 'comment':comment};
		
		// Append rating selection if a review
		if (review) {
			data['rating'] = this.rating;
			data['comment_stream_format'] = true;
		}
		
		new Json.Remote('/application/xhr/recipe_xhr.php', {onComplete: this.update.bind(this)}).send(data);
	},
	
	update: function(resp) {
		
		this.msg.remove();
		
		if (!resp.html) return;
		
		// Reset
		this.disabled = false;
		this.field.value = '';
		
		var error_class = resp.error ? 'error' : '';
		var li = new Element('li', {'class':'new '+error_class}).setHTML(resp.html).injectTop(this.list);
		
		this.fx.toggle();
		
		// Rig edit
		if (!resp.error) eip.rig_new_comment(li.getElement('a.comment_eip'));
		
	}
}


// --------------------------------------------------------------------
//  Email Recipe
// --------------------------------------------------------------------
var email_recipe = {
	
	init: function() {
		this.listen();	
	},
	
	listen: function() {
		$('email_link').addEvent('click', function(){
			ccursor.delay(200); // IE Bullshit
			
			function ccursor(){
				$('email').focus();
			}
		});
		
		$('send_email').addEvent('click', this.send.bindWithEvent(this));
	},
	
	send: function(e) {
		new Event(e).stop();
		
		var data = {action:'email_recipe', recipeID:$('recipeID').value, email:$('email').value};
		var xhr = new Json.Remote('/application/xhr/recipe_xhr.php', {onComplete: 
			function() {
				// show msg
				var box = $('pop_email');
				var wrap = box.getElement('div.wrap');
				wrap.hide(); // hide contents
				var div = new Element('div', {'class':'wrap', 'id':'tmp'}).setHTML('<p class="success">Success. Recipe sent.</p>').injectAfter(wrap); // inject new msg
				clear.delay(2000);
				function clear() { 
					box.removeClass('open'); box.hide(); // close pop
					$('tmp').remove(); // remove msg
					wrap.show(); // show form
					$('email').value = ''; // clear email field
					// refresh page
					window.location.reload(true);
				}
			}.bind(this)
		}).send(data);		
	}
}



// --------------------------------------------------------------------
//  Bookmark Recipe w/Tags From Toolbar
// --------------------------------------------------------------------
var bookmark_recipe = {
	
	init: function() {
		this.field = $('bookmark_tags');
		this.listen();
	},
	
	listen: function() {
		this.field.addEvent('click', function() { if(this.value=='Type tags here...') { this.value = ''; } this.removeClass('tip'); });
		$('save_btn').addEvent('click', this.save.bindWithEvent(this));
	},
	
	save: function(e) {
		new Event(e).stop();
		
		var data = {action:'save', recipeID:$('recipeID').value, tags:this.field.value};
		var xhr = new Json.Remote('/application/xhr/recipe_xhr.php', {onComplete: 
			function(r) {
				var box = $('pop_save');
				var wrap = box.getElement('div.wrap');
				var field = box.getElement('fieldset');
				field.hide(); // hide field
				var msg_txt = r.error ? 'Child please. You need to login first.' : 'Recipe Saved!';
				var msg = new Element('p', {'class':r.error ? 'failed' : 'success'}).setText(msg_txt).injectTop(wrap);
				clear.delay(r.error ? 4000 : 2000);
				function clear() { 
					box.removeClass('open'); box.hide(); // close pop
					msg.remove(); // remove msg
					field.show(); // show field
				}				
			}.bind(this)
		}).send(data);			
	}
}



// --------------------------------------------------------------------
//  Weekly Planner Popup
// --------------------------------------------------------------------
var planner = {
	
	init: function() {
		this.days = $$('#pop_planner ul.days li');
		this.listen();
	},
	
	listen: function() {
		$$('#pop_planner ul.days li a').each(
			function(a,i) {
				a.addEvent('click', this.add_to_planner.bindWithEvent(this,new Array(a,i)));
		}, this);
	},
	
	add_to_planner: function(e,a,i) {
		new Event(e).stop();
		$$('#pop_planner ul.days li a').removeClass('on');
		a.addClass('on');
		var recipe_title = a.getParent().getParent().title;
		var data = {action:'add_to_planner', recipeID:$('recipeID').value, day_n:a.rel, title:recipe_title};
		var xhr = new Json.Remote('/application/xhr/recipe_xhr.php', {onComplete:
			function(r) {
				
				var box = $('pop_planner');
				var wrap = box.getElement('div.wrap');
				var days = box.getElement('ul.days');
				
				var msg_txt = r.error ? 'Child please. You need to login first.' : 'Success! Recipe added to planner.';
				var msg = new Element('p', {'class':r.error ? 'failed' : 'success'}).setText(msg_txt).injectAfter(days);
				days.hide(); // hide days
				clear.delay(r.error ? 4000 : 2000);
				function clear() { 
					box.removeClass('open'); box.hide(); // close pop
					msg.remove(); // remove msg
					days.show(); // show days
				}
			}.bind(this)
		}).send(data);
	}
}


// --------------------------------------------------------------------
//  Page Functionality
// --------------------------------------------------------------------

// edit modal
var edit_modal = new Modal('edit_modal', {'link':$('edit_recipe'), 'submittable':true});

// edit modal actions
if (edit_modal.modal){
	var edit_tags = new tag_field('tags_field', {'delimeter':',', 'max_tags':20});
	recipe_edit.init(edit_modal);
}

// email recipe box
email_recipe.init();

// save/bookmark recipe
bookmark_recipe.init();

// bookmark tagging
var bookmark_tagging = new tag_field('bookmark_tags', {'delimeter':',', 'clear_default':false});

// remove bookmark
remove_bookmark.init();

// adding pre-defined tags to bookmark
bookmark_tag_suggestions.init(bookmark_tagging);

// add to meal planner
planner.init();

// delete a comment - owner
new moderate_comments('recipe_comments', {});

// add a community photo
photo_upload.init();

// add ingredients to shopping list from 'ingredients' section
ingredients_to_shopping_list.init();

// add ingredient to shoppping list from toolbar pop
ingredients_to_shopping_list_from_pop.init();

// sidebox reviews list link scroll user to comments section
var scroll_to_comments = new Fx.Scroll(window, {duration: 800, offset: {'y': -50}, transition: Fx.Transitions.Pow.easeOut});
var more_reviews = $('more_voters') || false;
if (more_reviews) {
	more_reviews.addEvent('click', function(e){ 
		var e = new Event(e).stop(); 
		scroll_to_comments.toElement('comments');
	});
	
	// Look for any other review continuation links
	$$('#voters a.readmore').each(function(a,i){
		a.addEvent('click', function(e){
			new Event(e).stop();
			scroll_to_comments.toElement('comments');
		})
	})
}

// sidebox top recipe list expansion
var more_recipes = new sidebox_slider('top_list', {'link':$('more_top'), 'showing':3});

// sidebox groups list expansion
var more_groups = new sidebox_slider('current_groups', {'link':$('more_groups'), 'showing':3});

// add rating
reviews.init(more_reviews);

photo_grow.init('200');

// Embedded recipe step photos
recipe_photo_pop.init();

// Comment helpfulness
comment_was_helpful.init();

// show more/less of recipe intro
extended_intro.init.delay(3000, extended_intro);

// bookmark from fans section
bookmark_in_fans.init();

add_groups.init();

var post_load_imgs = new post_onload_img_download($$('span.img_placeholder'),2000);