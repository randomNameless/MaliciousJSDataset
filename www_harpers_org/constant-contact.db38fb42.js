"use strict";

var ccValidateEmail = function ccValidateEmail(sEmail) {
  var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  return filter.test(sEmail);
};

// Constant contact
var ccSubmitEmail = function ccSubmitEmail(form) {
  //debug;
  var $form = $(form);
  var email = $form.find('[name="input_1"]').val();
  var list_id = $form.find('[name="input_2"]').val();
  var reqData = {
    input_1: email,
    input_2: list_id,
    field_values: '',
    source_page: 1,
    target_page: 0
  };

  // console.log("reqData:", reqData);

  // console.log('email is ' + nag);
  if (!ccValidateEmail(email)) return false;
  $.ajax({
    type: 'POST',
    url: '/wp-json/gf/v2/forms/3/submissions',
    data: reqData,
    success: function success(data) {
      //alert("data: " + data[1]);
      //destroy msgbox window
      //e.preventDefault();
      // console.log('success submit!');

      // make nag lightbox disappear  (if this came from a nag)
      $('#issuem-leaky-paywall-articles-remaining-text#p').val('Thank you!');
      $('#issuem-leaky-paywall-articles-remaining-nag').animate({
        left: '-110%'
      }, 500);
      $form.parent().find('.form-thank-you.d-none').removeClass('d-none');
    },
    error: function error(err) {
      console.log('error: ' + err.toString());
    }
  });
  return false;
};
var ccSubmitFreebie = function ccSubmitFreebie(form) {
  var email = form.querySelector('[name="input_1"]').value;
  if (!ccValidateEmail(email)) return false;
  form.querySelectorAll('.form-group').forEach(function (formGroupEl, i) {
    formGroupEl.classList.add('d-none');
  });
  var loadingSpinner = form.querySelector('figure.loading');
  loadingSpinner.classList.remove('d-none'); //loading

  var listIdCheckboxEls = form.querySelectorAll('[type="checkbox"]:checked'); //multiple
  var reqData = {
    input_1: email,
    field_values: '',
    source_page: 1,
    target_page: 0
  };

  //endOfMonth date
  var endMonthDate = new Date();
  endMonthDate.setDate(1); /* Avoids edge cases on the 31st day of some months */
  endMonthDate.setMonth(endMonthDate.getMonth() + 1);
  endMonthDate.setDate(0);
  endMonthDate.setHours(23);
  endMonthDate.setMinutes(59);
  endMonthDate.setSeconds(59);
  // Set up and fire the subscribe requests for each checked list
  requests = [];
  listIdCheckboxEls.forEach(function (checkboxEl, i) {
    reqData.input_2 = checkboxEl.value;
    requests.push($.ajax({
      method: 'POST',
      url: '/wp-json/gf/v2/forms/3/submissions',
      data: reqData,
      error: function error(err) {
        console.log('error: ' + err.toString());
      }
    }));
  });

  // Once _all_ signup requests are finished, set cookies, show thanks
  Promise.all(requests).then(function (values) {
    Cookies.set('hr_subscribed_' + Date.now(), true, {
      path: '/',
      expires: endMonthDate
    }); // cf pw cookie
    Cookies.set('hr_freebie_offer', true, {
      path: '/',
      expires: 31 * 24 * 60 * 60
    }); // next freebie offer eligible in a month
    loadingSpinner.classList.add('d-none');

    //hide form show thank you message
    form.previousElementSibling.classList.add('d-none'); // the message blurb

    form.nextElementSibling.classList.remove('d-none');
  })["catch"](function (err) {
    console.error(err);
  });
};

// harper's constant contact email signup
var ccEmailSignupHelper = function ccEmailSignupHelper() {
  // simple signup
  document.querySelectorAll('.form-newsletter-signup').forEach(function (form, i) {
    //submit usage
    form.addEventListener('submit', function (e) {
      // console.log("submit! e: ", e);
      e.preventDefault();
      ccSubmitEmail(form);
    });
  });

  //freebie article signup
  document.querySelectorAll('.form-freebie-article-signup').forEach(function (form, i) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      ccSubmitFreebie(form);
    });
  });
};

// init within document.ready
(function ($) {
  window.addEventListener('load', function () {
    ccEmailSignupHelper();
  });
})(jQuery);