(function($) {
  Drupal.behaviors.aet_insert = {
    attach: function(context, settings) {
      Drupal.aet_insert.settings = settings.aet_insert;
      Drupal.aet_insert.fields = $('.aet_insert_field');
      $('.aet_insert_field select').change(function() {
        var $this = $(this);
        var $aet_insert_field = $($this.parents('.aet_insert_field'));
        Drupal.aet_insert.disable($aet_insert_field);
        $.ajax({
          url: Drupal.aet_insert.settings.ajax_path,
          data: {
            id: $aet_insert_field.attr('id'),
            target: $aet_insert_field.data('target'),
            entity_type: $aet_insert_field.data('entity-type'),
            entity_id: $aet_insert_field.data('entity-id'),
            data: Drupal.aet_insert.getData($aet_insert_field, $this),
          },
          context: $aet_insert_field,
          error: function() {
            Drupal.aet_insert.enable(this);
          },
          success: function(data, textStatus, XMLHttpRequest) {
            Drupal.aet_insert.enable(this);
            this.replaceWith(data);
            Drupal.behaviors.aet_insert.attach(Drupal.aet_insert.context,
              {aet_insert: Drupal.aet_insert.settings});
          },
        });
      });

      $('.aet_insert_field .aet-insert-button').click(function(event) {
        event.preventDefault();
        var $this = $(this);
        var $aet_insert_field = $($this.parent());
        var data = Drupal.aet_insert.getData($aet_insert_field, $this);
        var token = '[';
        if (data[0] === 'active_user') {
          token += 'user';
        }
        else if (data[0].indexOf('this_') === 0) {
          token += data[0].slice('this_'.length);
        }
        else {
          token += 'aet:' + data[0].slice('aet_'.length);
        }
        data.shift();

        for (i in data) {
          if (data[i].length > 0) {
            token += ':' + data[i];
          }
        }
        token += ']';
        Drupal.aet_insert.insertAtCaret($aet_insert_field.data('target'), token);
      });
    }
  };

  Drupal.aet_insert = {
    settings: {},
    fields: null,
  };

  Drupal.aet_insert.insertAtCaret = function(areaId,text) {
    var txtarea = document.getElementById(areaId);
    var scrollPos = txtarea.scrollTop;
    var strPos = 0;
    var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ?
        "ff" : (document.selection ? "ie" : false ) );
    if (br == "ie") {
        txtarea.focus();
        var range = document.selection.createRange();
        range.moveStart ('character', -txtarea.value.length);
        strPos = range.text.length;
    }
    else if (br == "ff") strPos = txtarea.selectionStart;

    var front = (txtarea.value).substring(0,strPos);
    var back = (txtarea.value).substring(strPos,txtarea.value.length);
    txtarea.value=front+text+back;
    strPos = strPos + text.length;
    if (br == "ie") {
        txtarea.focus();
        var range = document.selection.createRange();
        range.moveStart ('character', -txtarea.value.length);
        range.moveStart ('character', strPos);
        range.moveEnd ('character', 0);
        range.select();
    }
    else if (br == "ff") {
        txtarea.selectionStart = strPos;
        txtarea.selectionEnd = strPos;
        txtarea.focus();
    }
    txtarea.scrollTop = scrollPos;
  };

  Drupal.aet_insert.getData = function($target, $selector) {
    var data = [];
    var children = $target.children('.form-item');
    for (var i=0; i< children.length; i++) {
      $child = $(children[i]);
      $child_selector = $child.find('select');
      data[i] = $child_selector.find(':selected').attr('value');
      if ($child_selector[0] === $selector[0]) {
        break;
      }
    }

    return data;
  };

  Drupal.aet_insert.disable = function($target) {
    $target.find('select').attr('disabled', 'disabled');
  };

  Drupal.aet_insert.enable = function($target) {
    $target.find('select').removeAttr('disabled');
  };
})(jQuery);;
/**
 * @file
 * SimpleAds JS Helper.
 */

(function ($) {
  Drupal.behaviors.simpleads = {
    attach: function(context) {
      var ad_type = $('#edit-field-ad-type select[id^=edit-field-ad-type]').val();
      var ad_text_format = $('#field-ad-text-add-more-wrapper select[id^=edit-field-ad-text]').val();
      _simpelads_switch_form(ad_type, ad_text_format);
      $('#edit-field-ad-type select[id^=edit-field-ad-type]').change(function(){
        ad_type = $(this).val();
        _simpelads_switch_form(ad_type, ad_text_format);
      });
      _simpelads_switch_form(ad_type, ad_text_format);
      $('#field-ad-text-add-more-wrapper select[id^=edit-field-ad-text]').change(function(){
        ad_text_format = $(this).val();
        _simpelads_switch_form(ad_type, ad_text_format);
      });
      var ad_block_limit = $('form#block-admin-configure #edit-ads-limit').val();
      var ad_block_rotation_type = $('form#block-admin-configure #edit-ads-rotation-type').val();
      _simpelads_switch_block_settings(ad_block_limit, false);
      $('form#block-admin-configure #edit-ads-limit').change(function(){
        _simpelads_switch_block_settings($(this).val(), false);
      });
      _simpelads_switch_block_settings(ad_block_rotation_type, 'delay');
      $('form#block-admin-configure #edit-ads-rotation-type').change(function(){
        _simpelads_switch_block_settings($(this).val(), 'delay');
      });
    }
  };
}(jQuery));

/**
 * Show/hide form elements.
 */
function _simpelads_switch_form(ad_type, p1) {
  (function ($) {
    el_image = $('form#simpleads-node-form #edit-field-ad-image');
    el_url = $('form#simpleads-node-form #edit-field-ad-url');
    el_url_target = $('form#simpleads-node-form #edit-field-ad-url-taget');
    el_flash = $('form#simpleads-node-form #edit-field-ad-flash');
    el_text = $('form#simpleads-node-form #edit-field-ad-text');
    if (ad_type == 'graphic') {
      el_image.show();
      el_url.show();
      el_url_target.show();
      el_flash.hide();
      el_text.hide();
    }
    else if (ad_type == 'text') {
      el_text.show();
      el_image.hide();
      el_url.hide();
      el_flash.hide();
      if (p1 == 'plain_text') {
        el_url.show();
        el_url_target.show();
      }
      else {
        el_url.hide();
        el_url_target.hide();
      }
    }
    else if (ad_type == 'flash') {
      el_url.show();
      el_url_target.show();
      el_flash.show();
      el_image.hide();
      el_text.hide();
    }
  }(jQuery));
}

/**
 * Show/hide block settings.
 */
function _simpelads_switch_block_settings(ad_setting_value, setting) {
  (function ($) {
    if (setting == false) {
      ad_rotation = $('form#block-admin-configure #ads_rotation_settings');
      if (ad_setting_value != 1)
        ad_rotation.show();
      else
        ad_rotation.hide();
    }
    else {
      if (setting == 'delay') {
        ad_rotation_delay = $('form#block-admin-configure #ads_rotation_settings .form-item-ads-rotation-delay');
        if (ad_setting_value == 0)
          ad_rotation_delay.hide();
        else
          ad_rotation_delay.show();
      }
    }
  }(jQuery));
}

/**
 * Ajax call for Ads.
 * elem - Ad container
 * tid  - term id
 * num - numer of ads to display
 * img_loader - image (ad load indicator), should be HTML tag <img src="loader.gif">
 */
function _simpelads_load(elem, tid, num, img_loader) {
  (function ($) {
    basepath = Drupal.settings.basePath;
    if (tid > 0 && num > 0) {
      if (img_loader != '')
        $(elem).html(img_loader);
      $.get(basepath + '?q=simpleads/load/' + tid + '/' + num, function (data) {
        $(elem).html(data);
      });
    }
  }(jQuery));
}

/**
 * jQuery Plugin.
 * SimpleAds rotator.
 */
(function ($) {
  $.simpleads_globals = {
    pos: []
  };
  $.simpleads_rotator = function(element, options) {
    this.options = {};
    element.data('simpleads_rotator', this);
    this.init = function (element, options) {
      this.options = $.extend({}, $.simpleads_rotator.defaultOptions, options);
      $.simpleads_globals.pos[options.delta] = 0;
      simpleads_start(element, this.options);
    };
    this.init(element, options);
  };

  $.fn.simpleads_rotator = function(options) {
    return this.each(function(){
      (new $.simpleads_rotator($(this), options));
    });
  }

  function run_rotation(element, options) {
    elem_id = element.attr('id');
    total_ads = $('#' + elem_id + " > div").size();
    if ($.simpleads_globals.pos[options.delta] == (total_ads - 1)) {
      $.simpleads_globals.pos[options.delta] = 0;
    }
    else {
      $.simpleads_globals.pos[options.delta]++;
    }

    $('#' + elem_id + " div").hide();
    var simpleads_elem = $('#' + elem_id + " > div:eq(" + $.simpleads_globals.pos[options.delta] + ")");
    
    if (options.rotation_type == 1) {
      simpleads_elem.show();
    }
    else if (options.rotation_type == 2) {
      simpleads_elem.fadeIn('fast');
    }
    else {
      simpleads_elem.show();
    }
    return false;
  }

  function simpleads_start(element, options) {
    run_rotation(element, options); 
    setInterval(function(){run_rotation(element, options);}, options.delay);
  }

  $.simpleads_rotator.defaultOptions = {
    rotation_type: 1,
    delay: 5,
    delta: 0
  };

}(jQuery));;
/**
 * @file
 * SimpleAds Campaigns JS helper.
 */

(function ($) {
  Drupal.behaviors.simpleads_campaigns = {
    attach: function(context) {
      var impressions = $('#edit-field-adcamp-impression input[id^=edit-field-adcamp-impression-]');
      _simpelads_campaigns_switch_form(impressions, 'impressions');
      $('#edit-field-adcamp-impression input[id^=edit-field-adcamp-impression-]').change(function(){
        _simpelads_campaigns_switch_form($(this), 'impressions');
      });
      var clicks = $('#edit-field-adcamp-click input[id^=edit-field-adcamp-click-]');
      _simpelads_campaigns_switch_form(clicks, 'clicks');
      $('#edit-field-adcamp-click input[id^=edit-field-adcamp-click-]').change(function(){
        _simpelads_campaigns_switch_form($(this), 'clicks');
      });
      var days = $('#edit-field-adcamp-day input[id^=edit-field-adcamp-day-]');
      _simpelads_campaigns_switch_form(days, 'days');
      $('#edit-field-adcamp-day input[id^=edit-field-adcamp-day-]').change(function(){
        _simpelads_campaigns_switch_form($(this), 'days');
      });

      var campaigns = $('#edit-campaign').val();
      if (campaigns == '_none') {
        $('#edit-field-ad-end-date').show();
      }
      else {
        $('#edit-field-ad-end-date').hide();
      }

      $('#edit-campaign').change(function(){
        if ($(this).val() == '_none') {
          $('#edit-field-ad-end-date').slideDown();
        }
        else {
          $('#edit-field-ad-end-date').slideUp();
        }
      });

    }
  };
}(jQuery));

/**
 * Show/hide form elements.
 */
function _simpelads_campaigns_switch_form(el, type) {
  (function ($) {
    el_impressions = $('form#simpleads-campaign-node-form #edit-field-adcamp-impressions');
    el_clicks = $('form#simpleads-campaign-node-form #edit-field-adcamp-clicks');
    el_days = $('form#simpleads-campaign-node-form #edit-field-adcamp-days');
    if (el.attr('checked') == true && type == 'impressions') {
      el_impressions.slideDown();
    }
    if (el.attr('checked') == false && type == 'impressions') {
      el_impressions.slideUp();
    }
    if (el.attr('checked') == true && type == 'clicks') {
      el_clicks.slideDown();
    }
    if (el.attr('checked') == false && type == 'clicks') {
      el_clicks.slideUp();
    }
    if (el.attr('checked') == true && type == 'days') {
      el_days.slideDown();
    }
    if (el.attr('checked') == false && type == 'days') {
      el_days.slideUp();
    }
  }(jQuery));
};
/**
 * @file
 * Modifies the file selection and download access expiration interfaces.
 */

var uc_file_list = {};

/**
 * Adds files to delete to the list.
 */
function _uc_file_delete_list_populate() {
  jQuery('.affected-file-name').empty().append(uc_file_list[jQuery('#edit-recurse-directories').attr('checked')]);
}

jQuery(document).ready(
  function() {
    _uc_file_delete_list_populate();
  }
);

// When you (un)check the recursion option on the file deletion form.
Drupal.behaviors.ucFileDeleteList = {
  attach: function(context, settings) {
    jQuery('#edit-recurse-directories:not(.ucFileDeleteList-processed)', context).addClass('ucFileDeleteList-processed').change(
      function() {
        _uc_file_delete_list_populate()
      }
    );
  }
}

/**
 * Give visual feedback to the user about download numbers.
 *
 * TODO: would be to use AJAX to get the new download key and
 * insert it into the link if the user hasn't exceeded download limits.
 * I dunno if that's technically feasible though.
 */
function uc_file_update_download(id, accessed, limit) {
  if (accessed < limit || limit == -1) {

    // Handle the max download number as well.
    var downloads = '';
    downloads += accessed + 1;
    downloads += '/';
    downloads += limit == -1 ? 'Unlimited' : limit;
    jQuery('td#download-' + id).html(downloads);
    jQuery('td#download-' + id).attr("onclick", "");
  }
}
;
