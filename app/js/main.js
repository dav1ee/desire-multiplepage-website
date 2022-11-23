$(function () {
  $('.header__btn').on('click', () => {
    $('.rightside-menu').removeClass('rightside-menu--closed');
  });

  $('.rightside-menu__close').on('click', () => {
    $('.rightside-menu').addClass('rightside-menu--closed');
  });

  $('.hero__slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
  });

  $('.contact-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 10,
    slidesToScroll: 10,
  });

  $('.article-slider__box').slick({
    prevArrow:
      '<button class="article-slider__arrow article-slider__arrow--left" type="button"><img src="images/arrow-slider-left.svg" alt="arrow icon" /></button>',
    nextArrow:
      '<button class="article-slider__arrow article-slider__arrow--right" type="button"><img src="images/arrow-slider-right.svg" alt="arrow icon" /></button>',
  });

  const mixer = mixitup('.gallery__inner', {
    load: {
      filter: '.living',
    },
  });
});
