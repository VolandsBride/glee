$(function (){
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true
  });

  $('.partners__inner').slick({
    dots: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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