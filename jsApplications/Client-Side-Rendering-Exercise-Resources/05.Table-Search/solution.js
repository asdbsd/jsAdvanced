import { html, render } from './node_modules/lit-html/lit-html.js';
let students;

const input = document.getElementById('searchField');
document.getElementById('searchBtn').addEventListener('click', onSearch);

const studentRow = (student) => html`
<tr class="${student.match ? 'select' : ''}">
   <td>${student.item.firstName + ' ' + student.item.lastName}</td>
   <td>${student.item.email}</td>
   <td>${student.item.course}</td>
</tr>`;

start();

function update(students) {
   render(students.map(studentRow), document.querySelector('tbody'));
}

async function start() {
   const res = await fetch('http://localhost:3030/jsonstore/advanced/table');
   const data = await res.json()
   students = Object.values(data).map(s => ({ item: s, match: false}));
   update(Object.values(students));
}

function onSearch() {

   const value = input.value.trim().toLocaleLowerCase();

   if(value) {
      for (let student of students) {
         student.match = Object.values(student.item).some(v => v.toLocaleLowerCase().includes(value));
         if(student.match) {
            input.value = '';
         }
      }

   } else {
      students.map(s => s.match = false);
   }

   update(students)

}

