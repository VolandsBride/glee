$(function (){
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true
  });

  $(".popup").fancybox({
    openEffect: 'elastic',
    closeEffect: 'elastic'
  });

  var mixer = mixitup('.products__content');
});