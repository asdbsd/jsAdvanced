function solve() {
    let inputs = Array.from(document.querySelectorAll('#container input'));
    let adoptionList = document.querySelector('#adoption ul');
    let adoptedList = document.querySelector('#adopted ul');

    let addButton = document.querySelector('form button');
    addButton.addEventListener('click', addAdobtion);

    function addAdobtion(e) {
        e.preventDefault();

        let [name, age, kind, owner] = inputs.map(f => f.value.trim());
        age = Number(age);
        inputs.forEach(e => e.value = '');

        // Check inputs validity
        let nameIsInvalid = name == ''
        let ageIsInvalid = isNaN(age) || typeof age !== 'number' || age == '';
        let kindIsInvalid = kind == ''
        let ownerIsInvalid = owner == ''
        if (nameIsInvalid || ageIsInvalid || kindIsInvalid || ownerIsInvalid) {
            console.log('Invalid Input')
            return;
        }

        let newLi = el('li', {}, 
                el('p', {}, 
                    el('strong', {}, name), 
                    ' is a ' , 
                    el('strong', {}, age), 
                    ' year old ',
                     el('strong', {}, kind)), 
                el('span', {}, 'Owner: ' + owner))

        let contactOwnerButton = el('button', {}, 'Contact with owner')
        contactOwnerButton.addEventListener('click', contact)
        
        newLi.appendChild(contactOwnerButton)
        adoptionList.appendChild(newLi);
        
        function contact(e) {
            contactOwnerButton.remove();

            let newDiv = el('div', {}, el('input', {placeholder: "Enter your names"}, ''));
            let adoptButton = el('button', {}, 'Yes! I take it!');

            newDiv.appendChild(adoptButton);
            newLi.appendChild(newDiv);
            
            adoptButton.addEventListener('click', adoptPet.bind(null, newLi, newDiv.querySelector('input')));
        }
    }

    function adoptPet(pet, input) {
        let inputIsInvalid = input.value.trim() == '';
        if (inputIsInvalid) {
            return;
        }

        pet.querySelector('button').remove();
        pet.querySelector('input').remove();
        pet.querySelector('span').textContent = `New Owner: ${input.value}`;

        let checkedBtn = el('button', {}, 'Checked');
        pet.appendChild(checkedBtn);  
        adoptedList.appendChild(pet)

        checkedBtn.addEventListener('click', removeItem.bind(null, pet));
    }

    function removeItem(pet) {
        pet.remove();
    }

    function el(type, attr, ...content) {
        let newElement = document.createElement(type);

        for(let prop in attr) {
            newElement[prop] = attr[prop]
        }

        for(let item of content) {
            if(typeof item == 'string' || typeof item == 'number') {
                item = document.createTextNode(item);
            }
            newElement.appendChild(item);
        }

        return newElement;
    }

}

