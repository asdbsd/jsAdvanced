function validate() {
    const email = document.getElementById('email');
    email.addEventListener('change', checkInput); 

    function checkInput(e) {
        let myRegex = /^[a-z]+@[a-z]+\.[a-z]+$/
        let isValid = myRegex.test(email.value);

        if (isValid) {
            console.log(email)
            email.classList.remove('error')
        } else {
            console.log(email)
            email.classList.add('error')
        }
        
    }
}