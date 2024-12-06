var ls_imgcount = 0;
var ls_t = 5000;
var slideDelay;

var switch_ls = function (i) {
  i = typeof i == 'number' && i >= 1 && i <= (ls_imgcount) ? i : 1;
  setTimeout(function () {
    var e = $('#ls_' + i);
    if (e) {
      $(e).fadeIn('slow');
      $(e).css('z-index', String(1 + i));
      if (typeof ls_keepgoing != 'undefined' && i == 1) {
        ls_init();
      }
      else {
        switch_ls(i + 1);
      }
    }
  }, slideDelay ? slideDelay : 5000);
};

var ls_init = function () {
  var e_parent = $('#legacy_slider');
  if (e_parent.length) {
    $('#ls_1').fadeIn('fast', function () {
      e_parent.find('li').each(function () {
        if ($(this).next('li').length == 0) {
          $(this).fadeOut('slow');
        }
        else if (this.id != 'ls_1') {
          $(this).hide();
        }
      });
    });
    switch_ls(2);
  }
};

jQuery(document).ready(function () {
  // delay 0.1 sec to allow client script to modify slides
  setTimeout(function () {
    var e_parent = $('#legacy_slider');
    if (e_parent.length) {
      var dim_arr = e_parent.attr('class').split('_')[1].split('x');
      ls_t = dim_arr[3];
      ls_imgcount = e_parent.find('li').length;
      ls_init();
    }
  }, 100);
});
