import { html, render } from './node_modules/lit-html/lit-html.js';
const mainDiv = document.querySelector('div');
const form = document.querySelector('form')
form.addEventListener('submit', addItem);

const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

const selectTemplate = (items) => html`
<select id="menu">
    ${items.map(i => html`<option value="${i._id}">${i.text}</option>`)};
</select>
`;

getData();

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    update(Object.values(data));
}

function update(items) {
    const result = selectTemplate(items);
    render(result, mainDiv);
}

async function addItem(e) {
    e.preventDefault();
    const text = document.getElementById('itemText').value;

    if (text && text.trim()) {
        const res = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text })
        });
    
        if (res.ok) {
            form.reset();
            getData();
        }
    }
}
