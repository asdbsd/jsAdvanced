function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let restaurants = JSON.parse(document.querySelector('#inputs textarea').value);
      let restaurantsCatalog = restaurants
      .reduce((catalog, r, i, arr) => reduceCatalog(catalog, r, i, arr), {});
      let sortedCatalog = Object.keys(restaurantsCatalog)
      .sort((key1, key2) => restaurantsCatalog[key2].avgPrice() - restaurantsCatalog[key1].avgPrice())
      
      let bestRestaurant = restaurantsCatalog[sortedCatalog[0]];
      let salaryCatalog = Object.keys(bestRestaurant.employees);
      let sortedSalary = salaryCatalog.sort((key1, key2) => bestRestaurant.employees[key2] - bestRestaurant.employees[key1]);

      let firstRow = `Name: ${sortedCatalog[0]} Average Salary: ${bestRestaurant.avgPrice()} Best Salary: ${bestRestaurant.employees[sortedSalary[0]].toFixed(2)}`
      let secondRow = ''
      sortedSalary.forEach((key) => {
         secondRow += `Name: ${key} With Salary: ${bestRestaurant.employees[key]} `;
      });

      document.querySelectorAll('#outputs div p')[0].textContent = firstRow;
      document.querySelectorAll('#outputs div p')[1].textContent = secondRow;

      function avgPrice() {
         let salaries = Object.values(this.employees)
         let avgPrice = salaries.reduce((avg, s) => avg+= s, 0);
         avgPrice /= salaries.length;
         return avgPrice.toFixed(2);
      }

      
      function reduceCatalog(catalog, r, i, arr) {
         let [restaurantName, employees] = [...r.split(' - ')];
         employees = employees.split(', ');
         let exists = catalog[restaurantName];
 
         if (!exists) {
             catalog[restaurantName] = {"employees": {}, avgPrice};
               employees.forEach((e) => {
                   let [eName, eSalary] = e.split(' ');
                   catalog[restaurantName]["employees"][eName] = Number(eSalary);
               })              
         } else {
               employees.forEach((e) => {
                   let [eName, eSalary] = e.split(' ');
                   catalog[restaurantName]["employees"][eName] = Number(eSalary);
               });
         }
 
         return catalog;
             
       }
      

      
   }
}


