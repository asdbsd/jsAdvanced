window.addEventListener('load', solve);

function solve() {
    const addFurnitureform = document.querySelector('form');
 
    addFurnitureform.addEventListener('submit', onAdd);
 
    function onAdd(e) {
        e.preventDefault();
 
        const model = document.getElementById('model').value;
        const desc = document.getElementById('description').value;
        const year = document.getElementById('year').value;
        const price = document.getElementById('price').value;
 
        const modelIsValid = model !== '' && isNaN(model);
        const descIsValid = desc !== '';
        const yearIsValid = year !== '' && Number(year) > 0;
        const priceIsValid = price !== '' && Number(price) > 0;
        const dataIsValid = modelIsValid && descIsValid && yearIsValid && priceIsValid;
 
        if(dataIsValid) {
            const furnitureList = document.getElementById('furniture-list');
            newModelElement(model, price, desc, year)
                .forEach(tr => furnitureList.appendChild(tr));
 
            addFurnitureform.reset();
        } else {
            return alert('Please make sure all the fields are filled up, and have the correct type of data.')
        }
 
    }
 
    function newModelElement(model, price, description, year) {
 
        const furnTr = document.createElement('tr');
        furnTr.className = 'info';
        const modelTd = document.createElement('td');
        modelTd.textContent = model;
        const priceTd = document.createElement('td');
        priceTd.textContent = Number(price).toFixed(2);
        const buttonsTd = document.createElement('td');
        const moreBtn = document.createElement('button');
        moreBtn.className = 'moreBtn';
        moreBtn.textContent = 'More Info';
        moreBtn.addEventListener('click', onMore);
        const buyBtn = document.createElement('button');
        buyBtn.className = 'buyBtn';
        buyBtn.textContent = 'Buy it';
        buyBtn.addEventListener('click', onBuy);
 
        buttonsTd.appendChild(moreBtn);
        buttonsTd.appendChild(buyBtn);
 
        furnTr.appendChild(modelTd);
        furnTr.appendChild(priceTd);
        furnTr.appendChild(buttonsTd);
 
        const hideTr = document.createElement('tr');
        hideTr.className = 'hide';
        hideTr.style.display = 'none';
        const yearTd = document.createElement('td');
        yearTd.textContent = `Year: ${year}`;
        const descriptionTd = document.createElement('td');
        descriptionTd.colSpan = "3";
        descriptionTd.textContent = `Description: ${description}`;
 
        hideTr.appendChild(yearTd);
        hideTr.appendChild(descriptionTd);
 
        return [furnTr, hideTr];
 
    }
 
    function onMore(e) {
        const hideRow = e.target.parentElement.parentElement.nextElementSibling;
        const action = e.target.textContent == 'More Info' ? 'more' : 'less';
 
        if (action == 'more') {
            e.target.textContent = 'Less Info';
            hideRow.style.display = 'contents';
        } else if (action == 'less') {
            e.target.textContent = 'More Info';
            hideRow.style.display = 'none';
        }
 
    }
 
    function onBuy(e) {
        const furnitureRow = e.target.parentElement.parentElement
        const hideRow = e.target.parentElement.parentElement.nextElementSibling;
 
        const total = document.querySelector('.total-price');
        const currentItemPrice = Number(e.target.parentElement.parentElement.firstElementChild.nextElementSibling.textContent);
 
        const totalPrice = Number(total.textContent);
        const finalPrice = (totalPrice + currentItemPrice).toFixed(2);
 
        total.textContent = finalPrice;
 
        hideRow.remove();
        furnitureRow.remove();
    }
 
 
}
