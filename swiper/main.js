import Swiper from './swiper.js';

const el = document.getElementById('swiper');
const width = el.clientWidth;
const height = el.clientHeight;

const swiper = new Swiper(el, {
  width,
  height,
  direction: 'x',
  items: [
    `<div class="red swiper__inner">Slider1</div>`,
    `<div class="green swiper__inner">Slider2</div>`,
    `<div class="blue swiper__inner">Slider3</div>`,
  ]
});

