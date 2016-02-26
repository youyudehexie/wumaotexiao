import PullRefresh from './PullRefresh.js';
import './style.css';

const el = document.getElementById('content')
let count = 1;
const width = el.clientWidth;
const height = el.clientHeight;

const pullRefresh = new PullRefresh(el, {
    width,
    height,
    header: `<div class="header">Loading....</div>`,
    onNext: (callback) => {
        setTimeout(() => {
            let content = `<div class="item"> Item ${count}</div>`
            count += 1;
            return callback(content);
        }, 1000);
    }
});

pullRefresh.render();
