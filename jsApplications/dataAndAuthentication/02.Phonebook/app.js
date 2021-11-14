function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', loadContacts);
    document.getElementById('btnCreate').addEventListener('click', onCreate);
    document.getElementById('phonebook').addEventListener('click', onDelete);
}

const list = document.getElementById('phonebook');
const person = document.getElementById('person');
const phone = document.getElementById('phone');

let outOfContactsLi = document.createElement('li');
outOfContactsLi.id = 'error'
outOfContactsLi.textContent = 'Sorry, there are no more contacts, please add new contact.';


attachEvents();

async function onDelete(e) {
    let id = e.target.dataset.id;

    if (id !== undefined) {
        deleteContact(id);
        e.target.parentElement.remove();
    }
}

async function onCreate(e) {
    if (list.querySelector('#error') !== null) {
        list.querySelector('#error').remove();
    }

    list.style.listStyleType = '';
    const newContact = {
        person: person.value.trim(),
        phone: phone.value.trim()
    }

    if (newContact.person === '' || newContact.phone === '') {
        alert('Error! Please make sure both Person and Phone are filled in.');
        return;
    }

    let contact = await createContact(newContact, e);
    list.appendChild(createLiElement(contact))
    person.value = '';
    phone.value = '';
}

async function loadContacts() {    
    let loadBtn = document.getElementById('btnLoad');
    loadBtn.textContent = 'Loading...';
    loadBtn.disabled = true;

    try {
        const response = await fetch('http://localhost:3030/jsonstore/phonebook');
        const data = await response.json();
        if (Object.values(data).length < 1) {
            list.appendChild(outOfContactsLi);
            list.style.listStyleType = 'none';
            removeLoadBtn();
            return;
        }
        outOfContactsLi.remove();
        list.replaceChildren(...Object.values(data).map(contact => createLiElement(contact)));

        removeLoadBtn();
    } catch {
        removeLoadBtn();
        let error = new Error('Please make sure the server is running.')
        alert(error.message);
        throw error;
    }

    function removeLoadBtn() {
        loadBtn.textContent = 'Load';
        loadBtn.disabled = false;
    }

}

function createLiElement(contact) {
    let liElement = document.createElement('li');
    liElement.innerHTML = `${contact.person}: ${contact.phone} <button data-id="${contact._id}">Delete</button>`;
    return liElement;
}


async function createContact(contact) {
    const response = await fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    });

    const data = await response.json();

    return data;
}

async function deleteContact(id) {
    const response = await fetch('http://localhost:3030/jsonstore/phonebook/' + id, {
        method: 'delete'
    });
}