import styles from './style.css';


export default class LeftNav {

  constructor(el, opts={}) {
    this.el = el;
    this.opts = opts;
    this.isOpened = false;
  }


  bindEvents() {
    this.el.addEventListener('touchstart', this.handleButtonClick.bind(this));
    this.elMask.addEventListener('touchstart', this.handleMaskTouch.bind(this));
  }

  renderDom() {
    const { menu } = this.opts;
    return `
      <div class="${styles.mask}"></div>
      <div class="${styles.nav}">
        ${menu}
      </div>
    `
  }

  handleMaskTouch (evt) {
    evt.preventDefault();
    this.isOpened = false;
    this.apply();
  }

  handleButtonClick(evt) {
    evt.preventDefault();
    this.isOpened = true;
    this.apply();
  }

  apply() {
    if (this.isOpened) {
      this.elNav.style.transform = 'translate3d(0, 0px, 0px)';
      this.elMask.style.opacity = 1;
      this.elMask.style.pointerEvents = 'auto';
    } else {
      this.elNav.style.transform = 'translate3d(-256px, 0px, 0px)';
      this.elMask.style.opacity = 0;
      this.elMask.style.pointerEvents = 'none';
    }
  }

  render() {
    this.elLeftNav = document.createElement('div');
    this.elLeftNav.innerHTML = this.renderDom(); 
    document.querySelector('body').appendChild(this.elLeftNav);
    this.elNav = document.querySelector(`.${styles.nav}`);
    this.elMask = document.querySelector(`.${styles.mask}`);
    this.bindEvents();
  }
}
