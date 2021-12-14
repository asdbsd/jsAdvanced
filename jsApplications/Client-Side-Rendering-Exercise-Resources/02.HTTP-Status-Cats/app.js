import { html, render } from './node_modules/lit-html/lit-html.js';
import { cats as catData } from './catSeeder.js';

const catsSection = document.getElementById('allCats');

function update() {
    render(html`<ul>${catData.map(cat => catCard(cat))}</ul>`, catsSection);
}


const catCard = (cat) => html`
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button @click=${() => toggleInfo(cat)} class="showBtn">${cat.info ? 'Hide' : 'Show'} status code</button>
        ${cat.info ? html`<div class="status" id="${cat.id}">
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>` : null }
    </div>
</li>
`; 
catData.forEach(cat => cat.info = false);
update();

function toggleInfo(cat, e) {
    cat.info = !cat.info;
    update();
}





