$(function (){
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.partners__inner').slick({
    dots: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $("#rateYo").rateYo({
    rating: 3.6
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