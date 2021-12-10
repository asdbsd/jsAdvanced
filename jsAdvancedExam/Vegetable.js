class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        if(this.availableProducts.length < 1) {
            this.availableProducts.push({});
        }

        let addedElements = new Set();

        vegetables.forEach((vegetable) => {
            let [name, qty, price] = vegetable.split(' ');
            qty = Number(qty);
            price = Number(price);

            if(this.availableProducts[0].hasOwnProperty(name)) {
                const currentVegPrice = this.availableProducts[0][name].price;
                this.availableProducts[0][name].qty += qty;

                if(price > currentVegPrice) {
                    this.availableProducts[0][name].price = price;
                }
            } else if (!this.availableProducts[0].hasOwnProperty(name)) {
                this.availableProducts[0][name] = {};
                this.availableProducts[0][name].qty = qty;
                this.availableProducts[0][name].price = price;
            }
            addedElements.add(name);
        });
        
        addedElements = Array.from(addedElements);
        return `Successfully added ${addedElements.join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        selectedProducts.forEach(product => {
            let [type, qty] = product.split(' ');
            qty = Number(qty);

            if(this.availableProducts[0].hasOwnProperty(type)) {
                if(this.availableProducts[0][type].qty < qty) {
                    throw new Error(`The quantity ${qty} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
                } else if (this.availableProducts[0][type].qty >= qty) {
                    totalPrice += this.availableProducts[0][type].price * qty;
                    this.availableProducts[0][type].qty -= qty;
                }
            } else {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }
        });

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable(type, qty) {
        const qtyToRemove = Number(qty);
        if(!this.availableProducts[0][type]) {
            throw new Error(`${type} is not available in the store.`)
        } else if(this.availableProducts[0][type]) {
            if(this.availableProducts[0][type].qty <= qtyToRemove) {
                this.availableProducts[0][type].qty = 0;
                return `The entire quantity of the ${type} has been removed.`;
            } else if(this.availableProducts[0][type].qty >= qtyToRemove) {
                return `Some quantity of the ${type} has been removed.`
            };
        }
    }

    revision() {
        const result = [];
        result.push('Available vegetables:');
        const sortedKeys = Object.keys(this.availableProducts[0]).sort((a,b) => this.availableProducts[0][a].price - this.availableProducts[0][b].price);
        sortedKeys.forEach(key => result.push(`${key}-${this.availableProducts[0][key].qty}-$${this.availableProducts[0][key].price}`))
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);
        return result.join('\n');
    }

}

const VegetableStore = result;
let vegStore = new VegetableStore('Jerrie Munro', '1463 Pette Kyosheta, Sofia');

assert.equal(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]), "Successfully added Okra, Beans, Celery");

assert.equal(vegStore.buyingVegetables(["Okra 1"]), "Great choice! You must pay the following amount $3.50.");
expect(()=>vegStore.buyingVegetables(["Banana 1","Okra 2"])).to.throw("Banana is not available in the store, your current bill is $0.00.");

