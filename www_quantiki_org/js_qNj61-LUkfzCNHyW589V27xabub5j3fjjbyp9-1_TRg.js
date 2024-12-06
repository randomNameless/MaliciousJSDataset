(function ($) {
    'use strict';
    Drupal.behaviors.ACChangeEnterBehavior = {
        attach: function (context, settings) {
            $('input.form-autocomplete', context).once('ac-change-enter-behavior', function() {
                $(this).keypress(function(e) {
                    var ac = $('#autocomplete');
                    if (e.keyCode == 13 && typeof ac[0] != 'undefined') {
                        e.preventDefault();
                        ac.each(function () {
                            if(this.owner.selected == false){
                                this.owner.selectDown();
                            }
                            this.owner.hidePopup();
                        });
                        $(this).trigger('change');
                    }
                });
            });
        }
    };
}(jQuery));
;
/**
 * @file
 * JavaScript file for the MathJax module.
 */

/**
 * Typeset MathJax if ajax executes.
 */
Drupal.behaviors.mathjaxBehavior = {
  attach: function (context, settings) {
    jQuery(document).ajaxComplete(function() {
      MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    });
  }
};
;
