$(function(){

  var remoteForm = function($form) {
    // Don't use forms input csrf, this causes problems
    // for cached pages. Let the request use the one from
    // the cookie instead.
    $form.find("[name=csrfmiddlewaretoken]").remove();

    $form.submit(function () {
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize(),
            success: function (data) {
              console.log("success");
            },
            error: function(res) {
              console.log("error");
            },

            statusCode: {
              // invalid form handler
              422: function(res) {
                $form.html(res.responseText);
              },
              // custom redirect handler
              // we use 278 as status code to prevent the browser
              // from redirecting the ajax request
              278: function(data, state, res) {
                var redirectUrl = res.getResponseHeader("Location");
                // bust cache in case the user login or registers from the player
                if (redirectUrl.indexOf("/radios/play/") !== -1) {
                  redirectUrl = redirectUrl + "?" + Date.now()
                }
                window.location.href = redirectUrl;
              }
            }
        });
        return false;
    });
  }

  remoteForm($("#registerModalForm"));
  remoteForm($("#loginModalForm"));
});
