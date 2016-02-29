import DragUpload from './DragUpload.js';

const el = document.getElementById('dropbox');
const preview = document.getElementById('preview');

const dragUpload = new DragUpload(el, {
  preview
});
dragUpload.render();

