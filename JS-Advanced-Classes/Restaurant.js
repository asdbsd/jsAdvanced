class Restaurant {
    constructor(budget) {
        this.budgetMoney = Number(budget);
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        products.forEach(populateProducts.bind(this));
        return this.history.join("\n")

        function populateProducts(product) {
            let [name, qty, totalPrice] = product.split(' ');
            qty = Number(qty);
            totalPrice = Number(totalPrice);

            if(totalPrice <= this.budgetMoney) {
                if (this.stockProducts[name]) {
                    this.stockProducts[name]+= qty;
                    this.history.push(`Successfully loaded ${qty} ${name}`); 
                } else {
                    this.stockProducts[name] = qty;
                    this.history.push(`Successfully loaded ${qty} ${name}`); 
                }
                this.budgetMoney -= totalPrice;
            } else {
                this.history.push(`There was not enough money to load ${qty} ${name}`);
            }

        }
    }

    addToMenu(mealName, neededProducts, price) {

        if(!this.menu[mealName]) {
            this.menu[mealName] = {};
            this.menu[mealName].products = {};
            neededProducts.forEach((product) => {
                let [productName, productQty] = product.split(' ');
                productQty = Number(productQty);
                this.menu[mealName].products[productName] = productQty;
                this.menu[mealName].price = price;
            });

            if(Object.keys(this.menu).length == 1) {
                return `Great idea! Now with the ${mealName} we have 1 meal in the menu, other ideas?`
            } else if(Object.keys(this.menu).length == 0 || Object.keys(this.menu).length > 1) {
                return `Great idea! Now with the ${mealName} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
            } 
        } else {
            return `The ${mealName} is already in the our menu, try something different.`
        }
    }

    showTheMenu() {
        let meals = [];
        if (Object.keys(this.menu).length == 0) {
            return "Our menu is not ready yet, please come later..."
        } else if (Object.keys(this.menu).length > 0) {
            Object.keys(this.menu).forEach((key) => {
                meals.push(`${key} - $ ${this.menu[key].price}`);
            });
            return meals.join('\n');
        }
    }

    makeTheOrder(mealName) {
        if(!this.menu[mealName]) {
            return `There is not ${mealName} yet in our menu, do you want to order something else?`
        }
        let productsIsInStock = false;
        
        for (let reqProduct of Object.keys(this.menu[mealName].products)) {
            const reqQty = this.menu[mealName].products[reqProduct];

            if(this.stockProducts[reqProduct]) {
                if (this.stockProducts[reqProduct] >= reqQty) {
                    productsIsInStock = true;
                } else {
                    productsIsInStock = false;
                    break;
                }
            } else {
                productsIsInStock = false;
                break;
            }            
        }
        
        if(productsIsInStock) {
            updateStock.bind(this)(mealName);
            return `Your order (${mealName}) will be completed in the next 30 minutes and will cost you ${this.menu[mealName].price}.`
        } else {
            return `For the time being, we cannot complete your order (${mealName}), we are very sorry...`
        }

        function updateStock(meal) {
            for (let reqProduct of Object.keys(this.menu[meal].products)) {
                let reqQty = this.menu[meal].products[reqProduct];
                
                this.stockProducts[reqProduct] -= reqQty;
                this.budgetMoney -= this.menu[meal].price;
            }
        }


    }
}

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

console.log(kitchen.showTheMenu());

kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));

