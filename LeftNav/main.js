import LeftNav from './LeftNav.js';
import './style.css';

const el = document.getElementById('leftnav');
const leftNav = new LeftNav(el, {
  menu: `<ul class="menu"><li>menu1</li><li>menu2</li><li>menu3</li></ul>`
});
leftNav.render();
