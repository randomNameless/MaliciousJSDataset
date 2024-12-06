/* Source and licensing information for the line(s) below can be found at https://obamawhitehouse.archives.gov/misc/form-single-submit.js. */
(function($){Drupal.behaviors.formSingleSubmit={attach:function(){function onFormSubmit(e){var $form=$(e.currentTarget),formValues=$form.serialize(),previousValues=$form.attr('data-drupal-form-submit-last');if(previousValues===formValues){e.preventDefault()}else $form.attr('data-drupal-form-submit-last',formValues)};$('body').once('form-single-submit').delegate('form:not([method~="GET"])','submit.singleSubmit',onFormSubmit)}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://obamawhitehouse.archives.gov/misc/form-single-submit.js. */
;/*})'"*/
