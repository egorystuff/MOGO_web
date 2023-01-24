$(function () {
  var header = $('#header');
  var introH = $('#intro').innerHeight();
  var scrollOffset = $(window).scrollTop();
  checkScroll(scrollOffset);

  $(window).on('scroll', function () {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
  });

  function checkScroll() {
    if (scrollOffset >= introH) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  }
});
