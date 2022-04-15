$('.product_slide').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: '<i class="fa-solid fa-arrow-left-long sp_left"></i>',
    nextArrow: '<i class="fa-solid fa-arrow-right-long sp_right"></i>',
  });



  $('#days').countdown('2025/02/12', function(event) {
    $(this).html(event.strftime('%d <br> Day%!d'));
  });
  $('#hours').countdown('2025/02/14', function(event) {
    $(this).html(event.strftime('%H <br> Hour%!H'));
  });
  $('#minutes').countdown('2025/02/14', function(event) {
    $(this).html(event.strftime('%M <br> Min%!M'));
  });
  $('#seconds').countdown('2025/02/14', function(event) {
    $(this).html(event.strftime('%S <br> Sec%!S'));
  });