import {Swiper} from '../vendor/swiper.js';

const heroSwiper = document.querySelector('.hero__swiper');

const initHeroSlider = () => {
  if (heroSwiper) {
    (() =>
      new Swiper('.hero__swiper', {
        cssMode: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        mousewheel: true,
        keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        },
      })
    )();
  }
};

export {initHeroSlider};
