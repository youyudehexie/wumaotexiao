
export default class ScrollPage {
  constructor(el, opts={}) {
    this.el = el;
    this.items = [];
    this.opts = opts;
    this.isLoading = false;
    this.render();
    this.bindEvents();
  }

  handleScroll(evt) {
    const { onNext, footer } = this.opts;
    let result = '';
    let windowHeight = this.el.scrollHeight;
    let totalScrolled = window.innerHeight + document.body.scrollTop;

    if (totalScrolled + 100 > windowHeight && this.isLoading === false) {
      this.isLoading = true;
      onNext((items) => {
        this.items = this.items.concat(items);
        this.items.forEach((item) => {
          result += item;
        })

        result += footer;
        this.el.innerHTML = result;
        this.isLoading = false;
      });
    }
  }

  bindEvents() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  render() {
    const { onNext, footer } = this.opts;
    let result = '';
    onNext((items) => {
      this.items = items;
      this.items.forEach((item) => {
        result += item;
      })

      result += footer;
      this.el.innerHTML = result;
    });
  }

}
