import styles from './style.css';

export default class PullRefresh {
  constructor(el, opts={}) {
    this.el = el;
    this.opts = opts;
    this.wrapStyle = {}
    this.oldWrapStyle = {};
    this.wrapStyle.transform = this.wrapStyle.webkitTransform = 'translate3d(0, 0, 0)';

    this.startY = 0;
    this.currY = 0;
    this.delta = 0;
    this.isLoading = false;

  }

  renderDom() {
    const { header, height } = this.opts;
    return `
    <div class="${styles.wraper}" style="transform: translate3d(0, 0, 0); height: ${height}px">
      <div class="${styles.loader}">
        ${header}
      </div>
      <div class="${styles.content}"></div>
    </div>
    `
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
    this.startY = evt.touches[0].clientY;
  }

  handleTouchMove(evt) {
    evt.preventDefault();
    this.currY = evt.touches[0].clientY;
    this.delta = this.currY - this.startY;
    this.moveWrap(this.delta);
  }

  handleNext() {
      const { onNext } = this.opts;
      this.isLoading = true;
      onNext((content) => {
        this.reset();
        this.elContent.innerHTML = content;
        this.isLoading = false;
      });
  }

  reset() {
      this.wrapStyle.transform = this.wrapStyle.webkitTransform = `translate3d(0, -${this.elHeader.clientHeight}px, 0)`;
      this.apply();
  }

  moveWrap (delta) {
    if (this.delta > 0 && document.body.scrollTop == 0 && !this.isLoading) {
      let deltaY = this.elHeader.clientHeight - delta < 0 ? 0 : this.wrapStyle.height - delta;

      if (deltaY == 0) {
        this.handleNext();
      }

      this.wrapStyle.transform = this.wrapStyle.webkitTransform =  `translate3d(0, -${deltaY}px, 0)`;
      this.apply();
    }

  }

  handleTouchEnd() {
  }

  bindEvents() {
    this.wrapper.addEventListener('touchstart', this.handleTouchStart.bind(this));
    this.wrapper.addEventListener('touchmove', this.handleTouchMove.bind(this));
    this.wrapper.addEventListener('touchend', this.handleTouchEnd.bind(this));
  
  }

  render() {
    const { onNext } = this.opts;
    this.el.innerHTML = this.renderDom();
    this.elContent = document.querySelector(`.${styles.content}`);
    this.elHeader = document.querySelector(`.${styles.loader}`);
    this.wrapper = document.querySelector(`.${styles.wraper}`);
    this.wrapStyle.height = `${this.opts.height + this.elHeader.clientHeight}px`
    this.apply();
    this.bindEvents();

    onNext((content) => {
      this.wrapStyle.transform = this.wrapStyle.webkitTransform = `translate3d(0, -${this.elHeader.clientHeight}px, 0)`;
      this.wrapStyle.transitionDuration = '300ms';
      this.apply();
      this.elContent.innerHTML = content;
    });
  }

}
