// Simple format method for strings, smaller than template system
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) {
      return typeof args[number] != 'undefined' ? args[number] : match ;
    });
  };
}

function submitCommentWithRecaptcha(token) {
  sessionStorage.setItem('recaptcha_response', token);
  $("#submit-comment").click();
}

function submitReviewWithRecaptcha(token) {
  sessionStorage.setItem('recaptcha_response', token);
  $("#submit-review").click();
}

$(function(){

  // Enable placeholders in IE
  $('input, textarea').placeholder();

  // "See more" functionality for static content
  $("a[data-see-more]").click(function() {
    showTruncatedText(this);
  });


  // Due to issues with bootstrap 2 and 3 compatibility, clicking outside a modal to close it
  // is not working. This is a workaround to patch it until we remove legacy bootstrap js.
  $(document).on("click", ".modal", function(e){
    if(e.target == this){
      $(this).modal("hide");
    }
  });

  // Use .on with a selector (see delegated events in jquery) in order
  // to react to new content dynamically added to a page
  $(".truncated-list").on("click", "a[data-see-more]", function() {
    showTruncatedText(this);
  });

  $('.navbar .navbar-toggle').click(function() {
    $('#navbar-full-nav').toggleClass('in');
  });

  var showTruncatedText = function(obj) {
    var $truncated = $(obj).closest("p[data-role=truncated-text]");
    var $ellipsis = $truncated.find("span[data-ellipsis]");
    var $rest = $truncated.find("span[data-rest]");

    $ellipsis.hide();
    $rest.show();
  };

  // Comments

  var formToObject = function($form) {
    var serializedData = $form.serializeArray()

    var data = {};
    var item;
    for (var i = 0, len = serializedData.length; i < len; i++) {
      item = serializedData[i];
      data[item.name] = item.value;
    }

    return data;
  }

  var objectToUrlParams = function(obj) {
    var str = "";
    for (var key in obj) {
      if (str !== "") {
        str += "&";
      }
      str += key + "=" + obj[key];
    }

    return str;
  };

  var enableAjaxPosting = function($form, postingSuccess, getExtraData) {
    sessionStorage.removeItem('recaptcha_response');

    $form.find('button').on('click', function(event) {
      event.preventDefault();

      var formDataObject = formToObject($form);

      var recaptcha_response = sessionStorage.getItem('recaptcha_response');

      formDataObject.recaptcha_response = recaptcha_response;

      if(recaptcha_response === null) {
        return false;
      }

      sessionStorage.removeItem('recaptcha_response');

      if (getExtraData) {
        var extraData = getExtraData();
        for (var attr in extraData) {
          if (extraData.hasOwnProperty(attr)) {
            formDataObject[attr] = extraData[attr];
          }
        }
      }

      var $submit = $form.find("button[type=submit]");
      // Sign Up required to comment
      if ($form.attr('action') === "/walls" && !ST.settings.isUserAuthenticated) {
        $("#commentSignUpModal").modal("show");
        // Save the comment on a cookie to repopulate the form later
        $.cookie("anonymousComment", formDataObject.comment, {expires: 1, path: "/"});
        return false;
      }

      if ($submit.hasClass("disabled")) {
        return false;
      }

      // very basic form validation, this should be extracted and
      // extended
      var validated = true;
      $form.find("textarea[data-validate], input[data-validate]").each(function(i, el){
        $el = $(el);
        var minLength = parseInt($el.attr("data-validate-length-gt"), 10);
        if (minLength && $el.val().length < minLength) {
          $el.parent().addClass("error");
          $el.parent().find("span.error")
            .removeClass("hidden")
            .html($el.attr("data-validate-error-msg"));
          validated = false;
        }
      });

      if (!validated) {
        $form.find(".alert-error").removeClass("hidden");
        return;
      }

      $submit.addClass("disabled");
      var oldText = $submit.html();
      $submit.html($submit.attr("data-busy-text"));
      $form.find(".alert-error, .help-block.error").addClass("hidden");
      $form.find(".control-group").removeClass("error");

      $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: objectToUrlParams(formDataObject),

        success: function(data, status) {
          postingSuccess(data);
          // Load data-asynced images after rendering response
          window.aload && aload();
          $form.find("textarea").val("");
        },

        error: function (data) {
          $form.find(".alert-error").removeClass("hidden");
        },

        complete: function() {
          $submit.removeClass("disabled");
          $submit.html(oldText);
        }
      });

      event.preventDefault();
      return false;
    });
  }

  var loadMoreCommentsHandler = function(e) {
    _streemalytics.track('Comments', 'Click to show more comments', {label:'Profile'});
    var button = $(e.target);

    // Do not let this button be clicked again
    button.addClass('disabled');
    button.html(button.attr("data-busy-text"));

    var url = button.data('load-more-comments');
    $.ajax({
      type: 'GET',
      url: url,
      complete: function (data) {
        $('.wall .more').remove();
        var moreComments = $("<div>" + data.responseText + "</div>").hide();
        $('.wall .comment').last().after(moreComments);
        moreComments.show('slow');
        $("a[data-load-more-comments]").click(loadMoreCommentsHandler);
        aload();
      }
    });
    return false;
  }

  $("a[data-load-more-comments]").click(loadMoreCommentsHandler);

  var $wallPostForm = $('.comment-form form[data-async], .wall form[data-async]');
  if($wallPostForm) {
    enableAjaxPosting(
      $wallPostForm,
      function(data) {
        var $comments = $(".wall .comments-top, .comments .comments-top");
        $comments.after(data);
        // remove "no comments" text if any
        $(".comments .no-comments, .wall .no-comments").remove();
        _streemalytics.track('Comments', 'Posted a Comment', {label:"Profile"});

        if (!ST.user.isAuthenticated) {
          var commentId = $comments.next().data('comment-id');
          pushCookieValue('_anonComments', commentId, true);

          var registerModalId = (window.modalForAction && modalForAction.newComment) || '#simpleRegisterModal';
          $(registerModalId).modal();

          _streemalytics.track('Sign in Flow', 'Open Simple Register Modal', {label:"Comment Posted"});
        }
      }
    );
  }


  var enableRating = function($rating) {
    var $stars = $rating.find("i");

    var setRatingStars = function($stars, index) {
      $stars.each(function(i, star){
        var $star = $(star);
        if (i <= index) {
          $star.removeClass("far").addClass("fas");
        } else {
          $star.removeClass("fas").addClass("far");
        }
      });
    }

    $stars.mouseenter(function(e) {

      // Don't change the stars if rating is already set
      if ($rating.attr("data-rating") !== "0") {
        return;
      }
      var index = $stars.index(e.target);

      setRatingStars($stars, index);
    });

    $stars.click(function(e){
      var index = $stars.index(e.target);

      $rating.attr("data-rating", (index + 1).toString());
      setRatingStars($stars, index);
    });

    $rating.mouseleave(function(e){
      // Do nothing if score is set
      if ($rating.attr("data-rating") !== "0") {
        return;
      }

      // Otherwise reset stars
      $rating.find("i").addClass("empty fa-star-o");
    })
  };

  var $ratingStarsSelector = $(".rating");

  if ($ratingStarsSelector) {
    enableRating($ratingStarsSelector);
  }

  var $postReviewForm = $('.review-form form[data-async], .reviews form[data-async]');

  if ($postReviewForm) {
    enableAjaxPosting(
      $postReviewForm,
      function(data) {
        $rating = $(".rating");
        $(".reviews .reviews-top").after(data);

        // reset rating (yuck!)
        $rating.attr("data-rating", "0");
        $rating.find("i").addClass("empty");

        _streemalytics.track('Comments', 'Posted a Review', {"label": "Profile"});
      },
      function() {
        return {
          'score': $(".rating").attr("data-rating")
        };
      }
    );
  }


  // enableAjaxPosting(
  //   $('.login-form'),
  //   function (data) {
  //     window.location.reload(true);
  //   }
  // );

  var pushCookieValue = function(name, value, unique) {
    var values = JSON.parse($.cookie(name) || '[]');
    // if unique=true, prevent adding a repeated value in the array
    if (!unique || $.inArray(value, values) === -1) {
      values.push(value);
      $.cookie(name, JSON.stringify(values), { path: '/' });
      return true;
    }
    return false;
  };

  if (ST.user.isAuthenticated) {
    $.removeCookie('_anonFavorites', { path: '/' });
    $.removeCookie('_anonComments', { path: '/' });
  }


  /* hide/show search facets */
  $(".side-box h4").click(function(){
    var $this = $(this);
    var $icon = $this.find("i.fa");
    var $facets = $this.next();
    if ($this.hasClass("active")) {
      $this.removeClass("active");
      $icon.removeClass("fa-chevron-down")
      $icon.addClass("fa-chevron-left")
      $facets.hide();
    } else {
      $this.parent().find(".facets").hide();
      $this.parent().find("h4").removeClass("active");
      $this.parent().find("h4 i").removeClass("fa-chevron-down").addClass("fa-chevron-left");
      $this.addClass("active");
      $icon.removeClass("fa-chevron-left")
      $icon.addClass("fa-chevron-down")
      $facets.show();
    }
  });


  /* Dirtier code to delete emails */
  $("a[data-role=delete-email]").click(function(event){
    var $this = $(this);
    var url = $this.attr('href');
    var email = $this.attr("data-value");

    var $modal = $("#delete-email-modal");
    $modal.find("#emailAddr").text(email);

    // unbinding first avoids multiple deletions caused by old event handlers
    $modal.find("#delete-button").unbind("click").click(function(event) {

      var $email = $this.parent();
      var $link = $email.find("a.remove-email");

      var $err;
      function error_handler(msg) {
        if (msg == undefined) {
            $err = $email.find("span.delete-error");
        } else {
            $err = $email.find("span.custom-error");
            $err.text(msg);
        }
        $link.hide();
        $err.show()
        setTimeout(function() {
          $err.hide();
          $link.show();
        }, 3000);
      }

      $.ajax({
        url: url,
        type: "POST",
        dataType: "json",
        success: function(data) {
          if (data.success) {
            $link.hide();
            $email.css("text-decoration", "line-through");
            setTimeout(function() {
              $email.remove();
            }, 2000);
          } else {
            error_handler(data.msg);
          }
        },
        error: function() {
          error_handler();
        }
      });

    });

    event.preventDefault();
  });

  // Bootstrap tooltips
  $('[data-toggle="tooltip"]').tooltip({'placement': 'top'});

  // Make checkboxes inside a anchor go to the anchor href url
  $("input[data-role=link-checkbox]").click(function(e) {
    // get the first anchor parent
    var link = $($(this).parents("a")[0]);

    var origin = window.location.protocol + "//" + window.location.host;
    window.location = origin + link.attr("href");
  });

});

$(function(){
  // focus on username field when modal is shown
  $('#simpleRegisterModal, #loginModal').on('shown', function() {
    $(this).find('input[name="username"]').focus();
  });

  // enable search autocomplete
  var algolia = new AlgoliaSearch(ST.settings.algoliaAppId, ST.settings.algoliaApiKey);
  var index = algolia.initIndex(ST.settings.algoliaIndex);

  algolia.setExtraHeader('Referer', 'https://streema.com');

  window.algolia = algolia;
  window.index = index;

  window.typeaheadRadioClick = function(id, slug, radioHasStreams){
    _streemalytics.track('Search', 'Click in autocomplete result', {label: 'Radio'});
    window.location.href = "/radios/" + slug;
  };

  window.typeaheadTvClick = function(tvSlug){
      var url = "/tv/" + tvSlug;
      _streemalytics.track('Search', 'Click in autocomplete result', {label: 'TV'});
      window.location = url;
  };

  $('.search-query, [data-autocomplete-url]').typeahead(null, {
    source: index.ttAdapter({hitsPerPage: 7}),
    hint: false,
    displayKey: 'email',
    templates: {
      empty: function(params){
         return '<div class="empty-results">0 search results for <em>{0}</em></div>'.format(escape(params.query));
      },
      suggestion: function(hit) {
        var isRadioSearch = (hit.dial !== undefined);

        // Logo
        //TODO: Use 'tv-placeholder-75' for tv when we have a better placeholder, with dark background or contrast
        var placeholder = ST.logos[isRadioSearch ? 'radio-placeholder-75' : 'radio-placeholder-75'];
        var logo = hit.logo_url_75x75 || placeholder;
        var htmlLogo = ("<picture><img src='{0}' onerror='this.src = \'{1}\''/></picture>" +
          "<div class='logo-overlay'><i class='icon-play fa fa-play-circle-o'></i></div>").format(logo, placeholder);


        // Name with optional dial/band (only if radio and it matched the query and is not included in the name)
        var htmlDialBand = "";
        // TV doesn't have dial
        if(hit.dial){
          var matchedDialNotInName = hit._highlightResult.dial.matchLevel != "none" && hit.name.indexOf(hit.dial) == -1;
          var matchedBandNotInName = hit._highlightResult.band.matchLevel != "none" && hit.name.indexOf(hit.band) == -1;
          if (matchedDialNotInName || matchedBandNotInName) {
            htmlDialBand = "<span class='dial-band'> - {0} {1}</span>".format(hit._highlightResult.band.value, hit._highlightResult.dial.value);
          }
        }
        var htmlName = "<div class='name'>{0}{1}</div>".format(hit._highlightResult.name.value, htmlDialBand);


        // Location
        var htmlLocation = "<div class='location'>{0}</div>".format(hit._highlightResult.location.value);


        // Genres, if not empty and they matched the query
        var htmlGenres = "";
        if (hit.genre) {
          // Use separate array to send matching genres first
          var genres = [];
          var thereIsMatch = false;
          $.each(hit._highlightResult.genre, function (i, gen) {
            if (gen.matchLevel != "none") {
              // Use unshift to put matching genres first
              genres.unshift("<span class='genre label label-genre matching'>{0}</span>".format(gen.value));

              // Try to skip showing genres when it was not the reason the radio matched the search
              if (hit.name.toLowerCase().indexOf(gen.matchedWords[0].toLowerCase()) == -1) {
                thereIsMatch = true;
              }
            }
            else {
              genres.push("<span class='genre label label-genre'>{0}</span>".format(gen.value));
            }
          });

          // Only show genres if needed for match
          if (thereIsMatch) {
            htmlGenres = "<div class='genres'>{0}</div>".format(genres.join(" "));
          }
        }

        return "<div class='hit'>{1}{2}{3}</div>{4}".format(hit.slug, htmlLogo, htmlName, htmlLocation, htmlGenres);
      }
      //      TODO: Add footer when typeahead fixes https://github.com/twitter/typeahead.js/issues/593
      //      footer: function(query, isEmpty){
      //        if(!isEmpty && query.nbPages > 1){
      //          var otherResults = query.nbHits - hitsPerPage;
      //          return "<div class='more-results'>And "+otherResults+" other radio stations...</div>";
      //        } else {
      //          return "";
      //        }
      //      }
    }
  }).on("typeahead:selected", function(e, suggestion, dataset){
      // Called both on click and enter over typeahead suggestion
      var isRadioSearch = (suggestion.dial !== undefined);

      if (isRadioSearch) {
        typeaheadRadioClick(suggestion.id, suggestion.slug, suggestion.has_streams);
      } else {
        typeaheadTvClick(suggestion.slug);
      }
    });

  // Restore focus to autofocused inputs, as typeahead messes with that
  $('[autofocus]').focus();

  $('[href=#reviews]').click(function(e) {
    e.preventDefault();
    $('#reviews').find('textarea').focus();
  });

  window.toggleFavorite = function(radioId) {
    if (!ST.user.isAuthenticated) {
      var registerModalId = (window.modalForAction && modalForAction.newComment) || '#simpleRegisterModal';
      $(registerModalId).modal();

      _streemalytics.track('Sign in Flow', 'Open Simple Register Modal', {label:"Favorite Added"});
    };

    var span = $("[data-radio=" + radioId + "] span.save-radio-icon");

    var userIsFavoriting = !span.hasClass('favorited');
    if (userIsFavoriting) {
      span.removeClass('not-favorited').addClass('favorited');
    } else {
      span.removeClass('favorited').addClass('not-favorited');
    }

    $.ajax({
      type: 'POST',
      url: userIsFavoriting ? '/playlists/add_radio' : '/playlists/delete_radio',
      data: 'radioId=' + radioId,
      success: function(data, status) {},
      error: function (data) {},
      complete: function() {}
    });

  };
});

$(function(){
  $("[data-role=follow-user]").click(function(){
    var $this = $(this);
    var url = "/followers/add";
    var uid = $this.data("follow-id")

    $.ajax({
      type: "POST",
      url: url,
      data: {
        type: 'id',
        follow: uid
      },
      dataType: "json",
      success: function() {
        $this.fadeOut();
      },
      error: function() {
      }
    });

    event.preventDefault();
  });
});

$(function(){
  $(".social-content .nav a").on("show", function(){
    $(".social-forms .nav li").toggleClass("active");
  });

  $(".social-forms .nav a").on("show", function(){
    $(".social-content .nav li").toggleClass("active");
  });

  $("form[data-hidden-post-button] textarea").on("keyup", function(){
    var $textarea = $(this);
    var $form = $(this).closest("form");
    var $button = $form.find("button");

    if ($textarea.val().length > 0) {
      $button.removeClass("hidden");
    } else {
      $button.addClass("hidden");
    }
  });
});

// iOS app launch bar
$(".mobile-app-bar .close-navbar").click(function(e){
  $(".mobile-app-bar").hide();
  $.cookie("hideIOSLaunchBar", true, {expires: 30, path: "/"});
  e.preventDefault();
  e.stopPropagation();
});
