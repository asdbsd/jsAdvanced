function validate() {
    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', validateForm);
    const checkbox = document.getElementById('company')
    checkbox.addEventListener('change', onIsCompanyHandler)

    function validateForm(e) {
        e.preventDefault();

        const nameInput = document.getElementById('username')
        let userNameRegex = /^[a-zA-Z0-9]{3,20}$/;
        let userNameIsValid = userNameRegex.test(nameInput.value)
        setBorder(nameInput,userNameIsValid)



        const emailInput = document.getElementById('email');
        let emailRegex = /^.*@.*\..*$/;
        let emailIsValid = emailRegex.test(emailInput.value);
        setBorder(emailInput, emailIsValid);

        const passwordInput = document.getElementById('password')
        const passwordconfirmInput = document.getElementById('confirm-password')
        let passwordRegex = /^\w{5,15}$/
        let passwordIsValid = passwordRegex.test(passwordInput.value);
        let passwordsAreaOk = passwordIsValid &&
                             passwordInput.value == passwordconfirmInput.value;
        setBorder(passwordInput, passwordsAreaOk);
        setBorder(passwordconfirmInput, passwordsAreaOk);
        
        let companyNumberIsValid = false;
        const checkbox = document.getElementById('company');
        if (checkbox.checked) {
            const companyNumberInput = document.getElementById('companyNumber');

            if (companyNumberInput.value.trim() !== '' && !isNaN(Number(companyNumberInput.value))) {
                let companyNumber = Number(companyNumberInput.value)
                if (companyNumber >= 1000 && companyNumber <= 9999) {
                    companyNumberIsValid = true;
                }
            }

            setBorder(companyNumberInput, companyNumberIsValid);
        }
        
        let validDiv = document.getElementById('valid');

        let divisValid = userNameIsValid && emailIsValid && passwordsAreaOk
        let companyInfoIsValid = !checkbox.checked || (checkbox.checked && companyNumberIsValid);
        let shouldShowValidDiv = divisValid && companyInfoIsValid;
        validDiv.style.display = shouldShowValidDiv ? 'block' : 'none'

    }

    function onIsCompanyHandler(e) {
        let companyInfoFieldset = document.getElementById('companyInfo');
        companyInfoFieldset.style.display = e.target.checked ? 'block' : 'none'
    }

    function setBorder(element, isValid) {
        if (isValid) {
            element.style.setProperty('border', 'none')
        } else {
            element.style.setProperty('border', '')
            element.style.setProperty('border-color', 'red')
        }
        
    }

}