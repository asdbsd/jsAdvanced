if (sessionStorage.getItem('userData') === null) {
    window.addEventListener('DOMContentLoaded', handleContent);
    
    function handleContent() {
        document.getElementById('user').style.display = 'none';
        let myForm = document.querySelector('form');
        myForm.addEventListener('submit', userLogin);
    }

    async function userLogin(e) {
        let loginUrl = 'http://localhost:3030/users/login'
        e.preventDefault();
        let formData = new FormData(e.target);
        const [email, password] = [...formData.values()].map(v => v.trim());
        validateData(email, password);
        
        try {
            let res = await fetch(loginUrl, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/js'
                },
                body: JSON.stringify({ email, password })
            });

            if (res.ok !== true) {
                let error = await res.json();
                throw new Error(error.message);
            }

            let result = await res.json();

            let currentUser = {
                "name": result.username,
                "email": result.email,
                "id": result._id,
                "token": result.accessToken
            };
            sessionStorage.setItem('userData', JSON.stringify(currentUser));
            window.location = 'index.html';
        } catch (err) {
            alert(err);
        }
    }
} else {
    window.location = 'index.html';
}

function validateData(email, password) {
    let emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;
    let emailIsValid = emailRegex.test(email);

    let passIsValid = (password !== '' && password.length >= 3) ? true : false;

    if(!emailIsValid && !passIsValid) {
        let errorMsg = 'Please make sure that the entered email is correct and etered password is at least 3 characters long';
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
    }
}
