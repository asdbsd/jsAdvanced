function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const rowsData  = document.querySelectorAll('.container tr td');
      const searchText = document.getElementById('searchField').value;

      for (let i = 0; i < rowsData.length; i++) {
         rowsData[i].parentElement.className = '';
         if (rowsData[i].textContent.includes(searchText)) {
            rowsData[i].parentElement.className = 'select';
         }
      }

      document.getElementById('searchField').value = ''

   }
}