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

  var mixer1 = mixitup('.products__content', {
    selectors: {
      control: '.filter__btn'
    }
  });
  var mixer2 = mixitup('.design__content', {
    selectors: {
      control: '.filter__btn-design'
    }
  });
});