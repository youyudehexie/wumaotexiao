

export default class DragUpload {
  constructor(el, opts={}) {
    this.el = el;
    this.opts = opts;
    this.preventDropEvent();
  }

  preventDropEvent() {
    ['dragleave','dragenter', 'dragover', 'drop'].forEach((evt) => {
      document.addEventListener(evt, (e) => e.preventDefault());
    });
  }

  handleDrag(evt) {
    //e.preventDefault();
  }

  bindEvents() {
    let { preview } = this.opts;

    this.el.addEventListener('drop', (e) => {
      e.preventDefault();

      var fileList = e.dataTransfer.files;
      console.log(fileList);

      if (fileList.length == 0) return false;
      if (!/image/.test(fileList[0].type)) return false;

      const img = window.URL.createObjectURL(fileList[0]);
      const filename = fileList[0].name;

      preview.innerHTML = `<img src="${img}"/>`

      console.log(preview);

      //console.log('fin')
      //console.log(fileList[0].type)
      //if (['image'].includes(fileList[0].type))

    }, false);
  }

  render() {
    this.bindEvents();
    console.log('rendered');
  }

}
