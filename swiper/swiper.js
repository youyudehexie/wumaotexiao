import styles from './style.css';
import { toStyle } from './tools.js';


export default class Swiper {
  constructor(el, opts={}) {
    this.el = el;
    this.opts = opts;
    this.direction = opts.direction || 'x';
    this.startPos = {x: 0, y: 0};
    this.currPos = {x: 0, y: 0};
    this.width = opts.width;
    this.height = opts.height;
    this.total = opts.items.length - 1 || 0;
    this.curr = 0;

    this.wrapStyle = {
        width: this.width,
        transform: this.translate(0,0,0),
        transitionDuration: '0ms',
    };

    this.render();
    this.wrapper = document.querySelector(`.${styles.wrapper}`)
    this.bindEvents();
  }

  bindEvents () {
    let delta = 0;

    this.wrapper.addEventListener('touchstart', (evt) => {
      evt.preventDefault();
      this.startPos = {
        x: evt.touches[0].clientX,
        y: evt.touches[0].clientY
      }
    });

    this.wrapper.addEventListener('touchmove', (evt) => {
      evt.preventDefault();
      this.currPos = {
        x: evt.touches[0].clientX,
        y: evt.touches[0].clientY
      };

      delta = this.currPos[this.direction] - this.startPos[this.direction];
      this.moveWrap(delta + -1*this.width*this.curr);
    });

    this.wrapper.addEventListener('touchend', (evt) => {
      evt.preventDefault();
      if (Math.abs(delta) / this.width > 1/2) {
        if (delta < 0) {
          this.curr += 1;
          this.curr = this.curr < this.total ? this.curr : this.total;
        } else {
          this.curr -= 1;
          this.curr = this.curr > 0 ? this.curr : 0;
        }
      }

      this.adjustPosition()
    });

  }

  adjustPosition () {
    this.wrapStyle.transitionDuration = '300ms';
    this.wrapper.style = toStyle(this.wrapStyle);
    this.moveWrap(-1*this.width*this.curr);
    this.wrapStyle.transitionDuration = '0ms';
  }

  moveWrap (delta) {
    if (this.direction == 'x') {
      this.wrapStyle.transform = this.translate(delta, 0, 0);
    } else {
      this.wrapStyle.transform = this.translate(0, delta, 0);
    }

    this.wrapper.style = toStyle(this.wrapStyle);
  }

  translate(x, y, z) {
    return `translate3d(${x}px, ${y}px, ${z}px)`
  }

  genItemsTpl() {
    const { items, width, height, itemCls } = this.opts;
    let result = '';

    for (let i = 0; i < items.length; i++ ) {
      result += `<div class="${styles.slider}" style="${toStyle({width: width, lineHeight: height / 2})}" >${items[i]}</div>`;
    }

    return result;
  }


  renderDom() {
    const { width, items } = this.opts;

    return `
      <div class="${styles.wrapper}" style="${toStyle(this.wrapStyle)}" 
      >
        ${this.genItemsTpl()}
      </div>
      `
  }

  render() {
    this.el.innerHTML = this.renderDom();
  }

}

