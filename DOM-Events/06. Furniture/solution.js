function solve() {
  let buttons = document.querySelectorAll('#exercise button');
  buttons[0].addEventListener('click', generateContent);
  buttons[1].addEventListener('click', finalizePurchise)

  const tableBody = document.querySelector('table tbody');

  const items = [];


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

      items.push({
        element: newRow,
        isChecked,
        item
      })
  
      tableBody.appendChild(newRow);

      function isChecked() {
        return checkboxElement.checked
      }
    }
    
  }



  function finalizePurchise() {
    
    const boughtFurniture = items
      .filter(i => i.isChecked())
      .reduce((acc, {item: c}, i, a) => {
        acc.names.push(c.name);
        acc.total += Number(c.price);
        acc.decFactor += Number(c.decFactor) / a.length;
        return acc;
      }, { names: [], total: 0, decFactor: 0 })

    
    
  //   [];
  //   let totalPrice = 0;
  //   let totalDecFactor = 0;


  //   for (let row of allBoxes) {
  //     if (row.checked) {
  //       const rowChildren = row.parentElement.parentElement.childNodes

  //       for (let i = 0; i < rowChildren.length; i++) {
  //         let currentContent = rowChildren[i].firstChild.textContent
  //         if (i == 1) {
  //           boughtFurniture.push(currentContent);
  //         } else if (i == 2) {
  //           totalPrice += Number(currentContent)
  //         } else if (i == 3) {
  //           totalDecFactor += Number(currentContent);
  //         }
  //       }
  //     }

  //   }
  document.querySelectorAll('#exercise textarea')[1].value = `Bought furniture: ${boughtFurniture.names.join(', ')}\nTotal price: ${boughtFurniture.total.toFixed(2)}\nAverage decoration factor: ${boughtFurniture.decFactor}`;
  }

}