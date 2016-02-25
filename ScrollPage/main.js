import ScrollPage from './ScrollPage.js';
import './style.css';

let count = 1;
const el = document.getElementById('items');

const scrollPage = new ScrollPage(el, {
    footer: `<div class="items__footer">Loading...</div>`,
    onNext: (callback) => {
        let items = []
        for (let i = 0; i < 25; i++) {
            items.push(`<div class="item">Item ${count}</div>`);
            count += 1;
        }

        return callback(items);
    }
});

