function addItem() {


    let optionText = document.getElementById('newItemText');
    let optionValue = document.getElementById('newItemValue');
    let newOption = document.createElement('option');

    newOption.textContent = optionText.value;
    newOption.value = optionValue.value;

    document.getElementById('menu').appendChild(newOption);
    
    optionText.value = '';
    optionValue.value = '';

}