"use strict";

var STATSIG_KEY = 'client-kwz5yFYrOG2e6bXLAvF5JJbBtDRWhCd2kxSJmFQByOn';
var STATSIG_TEST_ID = '2023_05_home_cta';

// Set "opened" flag in sessionStorage
// Used to determine if user has seen but not engaged with CTA
function setHasOpened(id, slug) {
  sessionStorage.setItem('cta-' + id + '-opened', true);
  statsig.logEvent("CTA Opened", slug);
}

// Set "opened" flag in sessionStorage
// Used to prevent reopening
function setHasClosed(id, slug) {
  sessionStorage.setItem('cta-' + id + '-closed', true);
  statsig.logEvent("CTA Closed", slug);
}
function getHasClosed(id) {
  return !!sessionStorage.getItem('cta-' + id + '-closed');
}

// Open CTA, for both Popups and Sticky Bars
function openCTA(id, slug, selector, variant, preview) {
  if (variant === 'popup') {
    // If the visitor is on a mobile device, show the sticky bar instead
    var isMobile = window.matchMedia('(max-width: 768px)');
    if (isMobile.matches) {
      jQuery(selector + '-sticky').removeClass('d-none');
    } else {
      // Uses Bootstrap Modal
      jQuery(selector + '-modal').modal('show');
    }
    setHasOpened(id, slug);
    isMobile.onchange = function (event) {
      if (getHasClosed(id) && !preview) return;
      if (event.matches) {
        jQuery(selector + '-modal').modal('hide');
      } else {
        jQuery(selector + '-sticky').addClass('d-none');
      }
    };
  } else if (variant === 'bottom') {
    jQuery(selector + '-sticky').removeClass('d-none');
    setHasOpened(id, slug);
  }

  // Listen for and handle Modal close events
  $(selector + '-modal').on('hidden.bs.modal', function (event) {
    setHasClosed(id, slug);
  });

  // Listen for and handle Sticky Bar close events
  jQuery(selector + '-sticky .close').on('click', function () {
    jQuery(selector + '-sticky').addClass('d-none');
    setHasClosed(id, slug);
  });
  jQuery('.js-cta-button, .js-cta-link').on('click', function (event) {
    statsig.logEvent("CTA Action Clicked", slug);
  });
}
function prepareCTA(defaultId, multipleRemainingId, oneRemainingId, noneRemainingId) {
  var ctas = [];
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var previewCta = urlParams.get('previewcta');
  try {
    ctas = window.HARPERS_CTAS;
  } catch (error) {
    console.error(error);
  }
  var p = window.HARPERS_PERSONALIZATION && window.HARPERS_PERSONALIZATION.user || {};
  var selectedCta = ctas["default"];

  // TODO set with AB test
  var ctaId, index;
  var trigger = 'default';

  // If the correct CTA to display is a preview or page CTA, the backend will send it along as the default
  // The remaining logic states are for paywall remaining views and subscribers. These are all globally-set.
  if (ctas["default"]) {
    ctaId = defaultId;
    trigger = 'default';
  } else if (!p.subscription_level && p.free_views_remaining > 1) {
    ctaId = multipleRemainingId;
    trigger = 'multiple-remaining';
  } else if (!p.subscription_level && p.free_views_remaining === 1) {
    ctaId = oneRemainingId;
    trigger = 'one-remaining';
  } else if (!p.subscription_level && p.free_views_remaining === 0) {
    ctaId = noneRemainingId;
    trigger = 'none-remaining';
  } else if (p.subscription_status === 'active') {
    trigger = 'subscriber';
  }
  if (trigger !== 'subscriber') {
    index = ctas[trigger].findIndex(function (cta) {
      return cta.post_name === ctaId;
    });
    selectedCta = ctas[trigger][index !== -1 ? index : 0];
  } else {
    selectedCta = ctas[trigger][0];
  }
  console.log('Debug 1 - CTA selection', trigger, ctaId, ctas, selectedCta);

  // If a cta is not matched, skip
  if (!selectedCta) return;
  var id = selectedCta.ID;
  var slug = selectedCta.post_name;
  var selector = '#cta-' + id;
  var variant = jQuery(selector).data('position'); // @TODO doesn't support more variants at the moment
  var closed = sessionStorage.getItem('cta-' + id + '-closed');
  console.log('Debug 2 - CTA Rendering', selector, variant, 'closed', closed);

  // No modal to process
  if (!id) return;
  if (previewCta === 'page' || previewCta === 'preview') {
    openCTA(id, slug, selector, variant, !!previewCta);
    return;
  }
  if (!closed) {
    openCTA(id, slug, selector, variant, !!previewCta);
    return;
  }
}
if (STATSIG_TEST_ID) {
  // Initialize Statig and pass in experiment variables to the CTA prep function
  statsig.initialize(STATSIG_KEY).then(function () {
    var exp = statsig.getExperiment(STATSIG_TEST_ID);
    var defaultSlug = exp.get("default_slug");
    var multipleRemainingSlug = exp.get("multiple_remaining_slug");
    var oneRemainingSlug = exp.get("one_remaining_slug");
    var noneRemainingSlug = exp.get("none_remaining_slug");
    jQuery(prepareCTA.bind(null, defaultSlug, multipleRemainingSlug, oneRemainingSlug, noneRemainingSlug));
  });
}