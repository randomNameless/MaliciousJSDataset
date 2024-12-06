// Moderate Comments

// --------------------------------------------------------------------
//  Used to handle universal deletes, flags, and eip.
// --------------------------------------------------------------------

moderate_comments = new Class({
	
	options: {
		type: 'recipe',
		xhr: 'recipe_xhr'
	},
	
	initialize: function(list, options){
		this.list = list ? $(list) : false;
		this.setOptions(options);
		
		// look for any other flags outside of "list"
		this.single_flags = $$('a.single_flag');
		
		// store each comment
		if (this.list){
			this.comments = this.list.getElements('li.c');
			var obj_id_name = $(this.options.type + 'ID');
			this.objectID = obj_id_name ? obj_id_name.value : 'nullID';
			
			this.fx();
		}

		this.listen();
	},
	
	fx: function(){
		this.fx = {};
		
		// if on a group thread page, ready entire thread removal fx
		if (this.options.type=='group'){
			this.fx['thread'] = new Fx.Style(this.list, 'opacity', {duration:600, fps:200, onComplete: this.remove_thread_from_dom.bind(this)});
		}
		
		// create & store comment removal fx
		this.comments.each(function(el,i){
			this.fx[i] = new Fx.Style(el, 'opacity', {duration:400, fps:200})
		},this);
	},
	
	listen: function(){
		// Look for single flag clicks
		this.single_flags.each(function(a,i){
			a.addEvent('click', this.process_flag.bindWithEvent(this));
		},this);
		
		// stop if only doing single flag/delete
		if (!this.list) return;
		
		// show comment delete/flag links onhover
		this.comments.each(function(el,i){
			var flag = el.getElement('a.flag');
			var del = el.getElement('a.delete');
			
			// comment mice
			el.addEvents({
				
				'mouseenter': function() {
					if (flag) flag.show();
					if (del) del.show();
				},
				
				'mouseleave': function() {
					if (flag) flag.hide();
					if (del) del.hide();
				}
			});
			
			// action clicks
			if (flag) flag.addEvent('click', this.process_flag.bindWithEvent(this));
			if (del) del.addEvent('click', this.process_delete.bindWithEvent(this,i));
		},this);
	},
	

	extract_link_data: function(e){
		
		// Track down a (click can be on a or span)
		var target = $(e.target); // Extend with elements class
		var a = target.getTag()=='span' ? target.getParent() : target;
		
		// What should element should hold update text?
		var span = a.getFirst();
		var update_el = span ? span : a;
		
		// Fetch data (vars '&' delim)
		var vars = [], parts;
		var flag_data = a.getProperty('href').replace('#','').split('&');
		
		// Set vars (el="varname=value")
		flag_data.each(function(el){
			parts = el.split('=');
			vars[parts[0]] = parts[1];
		});
		
		// Pass update_element too
		vars['update_el'] = update_el;
		
		return vars;
	},

	process_delete: function(e,i){
		
		new Event(e).stop();
		
		var vars = this.extract_link_data(e);

		// What big piece of content is (recipeID, groupID, mailID)
		var id_name = this.options.type + 'ID';
		
		var data = {'action':vars['action'], 'id':vars['contentID']};
		// Add recipeID | groupID (necessary param for some xhr handlers regardless of method use)
		data[id_name] = this.objectID;
		
		var onComplete = vars['action'] == 'delete_thread' ? this.remove_thread.bind(this,i) : this.remove_comment.bind(this,i);
		
		var xhr = new Json.Remote('/application/xhr/'+ this.options.xhr +'.php', {onComplete:onComplete}).send(data);
	},
	
	process_flag: function(e,i){
		var e = new Event(e).stop();
		
		var vars = this.extract_link_data(e);
		
		var flag_url = window.location.href.slice(window.location.href.indexOf('#') + 1);
		
		// Xhr
		var data = {'contentID':vars['contentID'], 'content_type':vars['content_type'], 'url':flag_url};
		
		var xhr = new Ajax('/application/xhr/flag_xhr.php', {
			data: data,
			update: vars['update_el']
		}).request();
	},
	
	// Not sure in use anymore.
	flag: function(r,i){
		if (r.error) return;
		// show feedback msg
		a.setText(r.html);
		li.addClass('flagged');
	},
	
	// --------------------------------------------------------------------
	//  Remove Comment From Dom
	// --------------------------------------------------------------------
	remove_comment: function(i){
		
		this.fx[i].start(1,0).chain(
			function(){
				this.comments[i].remove();
			}.bind(this)
		);
	},
	
	// --------------------------------------------------------------------
	//  Remove Entire Thread From Dom
	// --------------------------------------------------------------------
	remove_thread: function(i){
		
		// Start removal fx
		this.fx['thread'].start(0);
		
		// Remove forms
		$('show_reply').remove(); 
		$('reply_form').remove();
		
		// Show feedback message
		var text = 'Discussion deleted. <a href="' + $('group_url').value + '">More Discussions</a>.';
		var msg = new Element('p', {'class':'no_content'}).setHTML(text).injectAfter(this.list);
	},
	
	// --------------------------------------------------------------------
	//  Remove Thread From DOM
	//	Called after shrink fx finished.
	// --------------------------------------------------------------------
	remove_thread_from_dom: function(){
		this.list.remove();
	}
	
});

// implement options class
moderate_comments.implement(new Options)


// --------------------------------------------------------------------
//  Edit In Place
// --------------------------------------------------------------------
eip = {
	init: function(){
		// Look for links
		$$('.comment_eip').each(function(a,i){
			a.addEvent('click', this.start_edit_mode.bindWithEvent(this, a))
		},this)
	},
	
	rig_new_comment: function(a){
		if (!a) return;
		a.addEvent('click', this.start_edit_mode.bindWithEvent(this, a));
	},
	
	start_edit_mode: function(e,a){
		new Event(e).stop();
		
		// Close any previously opened edits
		this.end_edit_mode();
		
		// Make form
		var message = a.getParent().getNext().getElement('.mbody');
		if (!message) return;
		// Handle formatting
		var msg_txt = message.innerHTML.replace(/<em class=(?:.*)><\/em>/i,'');
		msg_txt = msg_txt.trim().replace(/<br>|<br\/>/gmi, '\n');
		// Handle links. Convert back to just urls.
		msg_txt = msg_txt.replace(/<a(?:.*)href="(.+)">(?:.*)<\/a>/gmi, '$1');
		
		var form = new Element('form', {'action':'', 'method':'post', 'class':'slip eip', 'id':'comment_eip'});
        var guts = '<fieldset>' +
        '	<label>Edit your comment</label>' +
        '	<textarea id="eip_comment" name="comment">' + msg_txt + '</textarea>' +
        '</fieldset>' +
        '<fieldset class="actions alt">' +
        '    <a id="save_eip" class="button" href="#"><span>Save</span></a>' +
        '    <strong>or <a id="cancel_eip" href="#">cancel</a></strong>' +
        '</fieldset>';
        form.setHTML(guts);
        
        // Inject it
        form.injectInside(message);
        
        // Enable auto-resizing
        textarea_growers.add_textarea($('eip_comment'));
        
        // Listen for actions
    	$('save_eip').addEvent('click', this.save_edit.bindWithEvent(this,a));
    	$('cancel_eip').addEvent('click', function(e){
    			new Event(e).stop();
    			this.end_edit_mode();
			}.bind(this)
    	);
	},
	
	save_edit: function(e,a){
		new Event(e).stop();
		
		// Have necessary info
		if ($('eip_comment').length==0) return;
		
		// What type of comment is this?
		var path = window.location.pathname;
		// Can switch out to passed in type param if needbe later.
		var content_type = /\.html/.test(path) ? 'recipe' : (/thread/.test(path) ? 'groups' : 'profile');
		
		// Collect data
		var action = a.hasClass('thread') ? 'edit_thread' : 'edit_comment';
		var data = {'action':action, 'id':a.rel, 'msg':$('eip_comment').value};
		if (content_type=='groups') data['groupID'] = 1;
		if (content_type=='recipe') data['recipeID'] = $('recipeID').value;
		
		var xhr = new Json.Remote('/application/xhr/' + content_type + '_xhr.php', 
			{
				'onComplete': function(r){
					// Remove any previous feedback
					if (prev_msg = $E('span.eip_feedback')) prev_msg.remove();
					// Show feedback
					var msg = !r.error ? '<strong>Success!</strong> Changes saved.' 
						: '<strong>Rut-ro.</strong> Slight problem, try again.';
					var span = new Element('span', {'class':'eip_feedback'}).setHTML(msg).injectAfter(a);
					if (r.error) return;
					
					// Update comment text
					a.getParent().getNext().getElement('.mbody').setHTML(r.html);
					
					// Teardown edit mode	
					this.end_edit_mode();
				}.bind(this)
			}
		).send(data);
	},
	
	end_edit_mode: function(){
		// Remove form
		if (form = $('comment_eip')) form.remove();
	}
}

// Fire up eip
eip.init();