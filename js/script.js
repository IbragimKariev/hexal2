$('.mobile-menu').on('click', function (e) {
  $('.menu-btn').toggleClass('menu-active');
  $('.menu-wrap').toggleClass('menu-active');
  $('.main-content').toggleClass('menu-active');
});



$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    dots: true,

  });
});
