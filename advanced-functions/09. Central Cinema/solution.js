function solve() {
    let onScreenButoon = document.querySelector('#container button');
    onScreenButoon.addEventListener('click', onScreenHandler);
    let clearButton = document.querySelector('#archive > button');
    clearButton.addEventListener('click', clearElements);

    function onScreenHandler(e) {
        e.preventDefault();
        let movieInputs = document.querySelectorAll('#container input');
        let nameInput = movieInputs[0];
        let hallInput = movieInputs[1];
        let priceInput = movieInputs[2];


        let name = nameInput.value
        let hall = hallInput.value
        let price = priceInput.value

        if (name.trim() !== '' &&
            hall.trim() !== '' &&
            price.trim() !== '' &&
            !isNaN(Number(price))) {
            
                let li = document.createElement('li');
                let nameSpan = document.createElement('span');
                nameSpan.textContent = name;
        
                let hallStrong = document.createElement('strong');
                hallStrong.textContent =`Hall: ${hall}`;
        
                let rightSectionDiv = document.createElement('div');
                let priceStrong = document.createElement('strong');
                priceStrong.textContent = Number(price).toFixed(2);
        
                let ticketsSoldInput = document.createElement('input');
                ticketsSoldInput.setAttribute('placeholder', 'Tickets Sold');
        
                let archiveButton = document.createElement('button');
                archiveButton.textContent = 'Archive'
                archiveButton.addEventListener('click', archiveMovie);
        
                rightSectionDiv.appendChild(priceStrong);
                rightSectionDiv.appendChild(ticketsSoldInput);
                rightSectionDiv.appendChild(archiveButton);
        
                li.appendChild(nameSpan);
                li.appendChild(hallStrong);
                li.appendChild(rightSectionDiv);
        
                let moviesUl = document.querySelector('#movies ul');
                moviesUl.appendChild(li);
        }
        nameInput.value = '';
        hallInput.value = '';
        priceInput.value = '';

    }

    function archiveMovie(e) {
        let movieLi = e.target.parentElement.parentElement;
        let ticketsSoldInput = movieLi.querySelector('div input');
        let ticketsSold = ticketsSoldInput.value;

        if ( ticketsSold.trim() !== '' &&
            !isNaN(Number(ticketsSold))) {
                let priceStrong = movieLi.querySelector('div strong');
                let price = Number(priceStrong.textContent);

                let hallStrong = movieLi.querySelector('strong');
                let totalPrice = price * Number(ticketsSold);
                hallStrong.textContent = `Total amount: ${totalPrice.toFixed(2)}`;

                let deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                movieLi.appendChild(deleteButton);
                deleteButton.addEventListener('click', (e) => { e.target.parentElement.remove(); });

                let rightDiv = movieLi.querySelector('div');
                rightDiv.remove();

                let archiveUl = document.querySelector('#archive ul');
                archiveUl.appendChild(movieLi)
        }  

    }

    function clearElements(e) {
        let archiveLi = Array.from(document.querySelectorAll('#archive ul li'));
        archiveLi.forEach(el => el.remove())
    }
    
}