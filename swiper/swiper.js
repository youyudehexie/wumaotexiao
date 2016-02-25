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
        width: this.width*(this.total + 1),
        transitionDuration: '0ms',
    };

    this.wrapStyle.transform = this.wrapStyle.webkitTransform = 'translate3d(0, 0, 0)';

    this.oldWrapStyle = {};
    this.render();

    this.wrapper = document.querySelector(`.${styles.wrapper}`)
    this.bindEvents();
    this.delta = 0;
  }

  apply() {
    let es = this.wrapper.style;
    Object.keys(this.wrapStyle).forEach((key) => {
        if (this.oldWrapStyle[key] != this.wrapStyle[key]) {
            es[key] = this.wrapStyle[key];
            this.oldWrapStyle[key] = this.wrapStyle[key];
        }
    });

  }

  handleTouchStart(evt) {
      this.wrapStyle.transitionDuration = '0ms';
      this.apply();

      this.startPos = {
        x: evt.touches[0].clientX,
        y: evt.touches[0].clientY
      }
  }

  handleTouchMove(evt) {
      evt.preventDefault();
      this.currPos = {
        x: evt.touches[0].clientX,
        y: evt.touches[0].clientY
      };

      this.delta = this.currPos[this.direction] - this.startPos[this.direction];
      this.moveWrap(this.delta + -1*this.width*this.curr);
  }

  handleTouchEnd(evt) {
      if (Math.abs(this.delta) / this.width > 1/4) {
        if (this.delta < 0) {
          this.curr += 1;
          this.curr = this.curr < this.total ? this.curr : this.total;
        } else {
          this.curr -= 1;
          this.curr = this.curr > 0 ? this.curr : 0;
        }
      }

      this.adjustPosition();
  }

  bindEvents () {
    this.wrapper.addEventListener('touchstart', this.handleTouchStart.bind(this));
    this.wrapper.addEventListener('touchmove', this.handleTouchMove.bind(this));
    this.wrapper.addEventListener('touchend', this.handleTouchEnd.bind(this));
  }

  adjustPosition () {
    this.wrapStyle.transitionDuration = '300ms';
    this.moveWrap(-1*this.width*this.curr);
  }

  moveWrap (delta) {
    if (this.direction == 'x') {
      this.wrapStyle.transform = this.wrapStyle.webkitTransform =  `translate3d(${delta}px, 0, 0)`;
    } else {
      this.wrapStyle.transform = this.wrapStyle.webkitTransform =  `translate3d(0, ${delta}px, 0)`;
    }

    this.apply();
  }

  genItemsTpl() {
    const { items, width, height, itemCls } = this.opts;
    let result = '';

    for (let i = 0; i < items.length; i++ ) {
      result += `<div class="${styles.slider}" style="${toStyle({width: width})}" >${items[i]}</div>`;
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

