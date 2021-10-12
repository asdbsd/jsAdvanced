function solve() {
  let buttons = document.querySelectorAll('#exercise button');
  buttons[0].addEventListener('click', generateContent);
  buttons[1].addEventListener('click', finalizePurchise)

  const tableBody = document.querySelector('table tbody');


  function generateContent(e) {
    const input = JSON.parse(document.querySelector('#exercise textarea').value);

    for (let item of input) {
      let newRow = document.createElement('tr');
      let newImg = document.createElement('img');
      let imgTd = document.createElement('td');
      let nameTd = document.createElement('td');
      let priceTd = document.createElement('td');
      let decoratorTd = document.createElement('td');
      let nameP = document.createElement('p');
      let priceP = document.createElement('p');
      let decoratorP = document.createElement('p');
  
      newImg.src = item.img;
      imgTd.appendChild(newImg);
  
      nameP.textContent = item.name;
      nameTd.appendChild(nameP);
  
      priceP.textContent = item.price;
      priceTd.appendChild(priceP);
  
      decoratorP.textContent = item.decFactor;
      decoratorTd.appendChild(decoratorP);
  
  
      let checkboxTd = document.createElement('td');
      let checkboxElement = document.createElement('input');
      checkboxElement.type = 'checkbox';
      checkboxTd.appendChild(checkboxElement);
  
  
      newRow.appendChild(imgTd);
      newRow.appendChild(nameTd);
      newRow.appendChild(priceTd);
      newRow.appendChild(decoratorTd);
      newRow.appendChild(checkboxTd);
  
      tableBody.appendChild(newRow);
    }
    
  }



  function finalizePurchise() {
    const allBoxes = document.querySelectorAll('tr input[type="checkbox"]');
    const checkedBoxes = document.querySelectorAll('tr input[type="checkbox"]:checked');
    
    const boughtFurniture = [];
    let totalPrice = 0;
    let totalDecFactor = 0;


    for (let row of allBoxes) {
      if (row.checked) {
        const rowChildren = row.parentElement.parentElement.childNodes

        for (let i = 0; i < rowChildren.length; i++) {
          let currentContent = rowChildren[i].firstChild.textContent
          if (i == 1) {
            boughtFurniture.push(currentContent);
          } else if (i == 2) {
            totalPrice += Number(currentContent)
          } else if (i == 3) {
            totalDecFactor += Number(currentContent);
          }
        }
      }

    }
    document.querySelectorAll('#exercise textarea')[1].value = `Bought furniture: ${boughtFurniture.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${(totalDecFactor / checkedBoxes.length)}`;
  }

}