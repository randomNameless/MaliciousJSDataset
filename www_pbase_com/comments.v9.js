var $G = {};
$(function() {
  // set ajax defaults
  $.ajaxSetup({
    type: "GET",
    url: $("base").attr("href"),
    dataType: "json",
    cache: false
  });
  if( $("#commentlist").children(":first").length > 0 ) {
    $("#commentlist").children(":first").before('<div id="posting_comment" class="comment" style="display:none;"><table class="comment"><tr class="head"><td class="from">posting comment...</td></tr></table></div>');
  } else {
    $("#commentlist").append('<div id="posting_comment" class="comment" style="display:none;"><table class="comment"><tr class="head"><td class="from">posting comment...</td></tr></table></div>');
  }

  $("#leave_comment").click(function(e) {
    e.preventDefault();
    $("#commententry").attr("style", "");
    $("#commententry:first textarea").focus();
    return false;
  });

  $("#commentlist .commands a").click(function(e) {
    var target = this;
    var href = $(target).attr("href");
    var href_new = href;
    var text = $(target).text();
    if( href.match(/delete/) ) {
      $(target).parents(".comment").html("<div class='comment head' style='border-width:1px; text-align:center; font-weight:bold;'>deleted comment</div>");
    } else if( href.match(/show|hide/) ) {
      if( href.match(/show/) ) {
        href_new = href.replace("show", "hide");
        text = text.replace("make public", "make non-public");
      } else if( href.match(/hide/) ) {
        href_new = href.replace("hide", "show");
        text = text.replace("make non-public", "make public");
      }
      $(target).attr("href", href_new);
      $(target).html(text);
    } else {
      return;
    }
    $.ajax({
      type: "POST",
      url: href,
      data: {
        src: "ajax"
      },
      dataType: "html",
      success: function(html) {
        if( html.match(/"red"/) ) {
          // There was an error.  Do nothing.
          $(link).parents(".commands").html("<div class='error'>Error updating comment</div>");
        }
      }
    });
    return false;
  });

  $("form[name=add_comment]").submit(function(e) {
    e.preventDefault();
    $("#submit_error").remove();
    var form = this;
    var target = e.target;
    var message = $(target).find("textarea").val();
    if( message == "" ) {
      $(form).children("table").append('<tr id="submit_error"><td colspan="4" class="error">You must enter a message before submitting your comment.</td></tr>');
      return false;
    }
    $("#commententry:first").attr("style", "display:none;");
    $("#posting_comment").attr("style", "");
    $.ajax({
      type: "POST",
      url: $(this).attr("action"),
      data: $(form).serialize()+"&src=ajax&submit=Add Comment",
      dataType: "html",
      success: function(html) {
        $("#posting_comment").attr("style", "display:none;");
        $("#posting_comment").after(html);
        $("#commententry textarea").val("");
      }
    });
  });

});

