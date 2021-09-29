function search() {
   const searchText = document.getElementById('searchText').value;
   const towns = document.querySelectorAll('#towns li');

   let matches = 0;
   for (let town of towns) {
      town.style = 'default'
      town.style.textDecorationLine = 'default'
      document.getElementById('result').textContent = '';

      let currentTown = town.textContent;
      if (currentTown.includes(searchText)) {
         matches++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         
      }
   }

   document.getElementById('result').textContent = `${matches} matches found`
   
}
