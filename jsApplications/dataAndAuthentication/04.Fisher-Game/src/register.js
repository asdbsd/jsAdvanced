window.addEventListener('DOMContentLoaded', handlePage);

function handlePage(e) {
    let registrationForm = document.querySelector('form');
    registrationForm.addEventListener('submit', createAcc);
}

async function createAcc(e) {
    e.preventDefault();
    let createAccUrl = 'http://localhost:3030/users/register';

    const [name, email, password, repeat] = e.target.querySelectorAll('input')
    validateData(name.value.trim(), email.value.trim(), password.value.trim(), repeat.value.trim());
    
    let newAcc = {
        name: name.value,
        email: email.value,
        password: password.value
    }

    try {
        let res = await fetch(createAccUrl, {
            method: 'post',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newAcc)
        });

        if (res.ok !== true) {
            let error = await res.json();
            throw new Error(error.message);
        }

        let data = await res.json();

        let currentUser = {
            "name": data.name,
            "email": data.email,
            "id": data._id,
            "token": data.accessToken
        };
        sessionStorage.setItem('userData', JSON.stringify(currentUser));
        window.location = 'index.html';
    } catch(err) {
        alert(err);
    }



}

function validateData(name, email, password, repeat) {
    let nameIsValid = name !== '' ? true : false;

    let emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;
    let emailIsValid = emailRegex.test(email);

    let passIsValid = (password !== '' && password.length >= 3) ? true : false;
    
    let repeatIsValid = repeat === password ? true : false;

    if(!nameIsValid) {
        let errorMsg = 'Please make sure that the there is a Name entered.';
        alert(errorMsg);
        throw new Error(errorMsg);
    } else if (!emailIsValid) {
        let errorMsg = 'Please make sure you have entered real e-mail address.';
        alert(errorMsg);
        throw new Error(errorMsg);
    } else if (!passIsValid) {
        let errorMsg = 'Please make the password at least 3 characters long.';
        alert(errorMsg);
        throw new Error(errorMsg);
    } else if (!repeatIsValid) {
        let errorMsg = 'Please make the password confirmation is same as entered password.';
        alert(errorMsg);
        throw new Error(errorMsg);
    }
}