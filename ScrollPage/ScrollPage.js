
export default class ScrollPage {
  constructor(el, opts={}) {
    this.el = el;
    this.items = [];
    this.opts = opts;
    this.render();
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
