(function($){

  $(document).foundation();

  $('ul.dropdown.menu').on('notifications.hide', function (e) {
    $.post('/agent_notifications/clear_pending/?time=now', {
      success: function (e) {
        $('.header-notifications').removeClass('has-notifications');
      }
    });
  });

})(window.jQuery);
