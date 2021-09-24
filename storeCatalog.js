function storeCatalog(elements) {
    const catalog = elements.reduce(setCatalog, {});
    const sortedKeys = Object.keys(catalog).sort((a,b) => a.localeCompare(b));

    let result = []

    for (let key of sortedKeys) {
        result.push(key);
        let sortedProducts = Object.entries(catalog[key]).sort((a,b) => a[0].localeCompare(b[0]));
        for (let [product, price] of sortedProducts) {     
            result.push(`  ${product}: ${price}`);       
        }
    }
    

    function setCatalog(catalog, e) {
        let [product, productPrice] = e.split(' : ')
        productPrice = Number(productPrice);
        let firstLetter = product[0];

        let exists = catalog[firstLetter];
        if (!exists) {
            catalog[firstLetter] = {};
        }
        catalog[firstLetter][product] = productPrice;

        return catalog;
    }

    return result.join('\n')


}

console.log(storeCatalog(
    [
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]
));
console.log('-----------')

console.log(storeCatalog(
    [
        'Banana : 2',
        'Rubic\'s Cube : 5',
        'Raspberry P : 4999',
        'Rolex : 100000',
        'Rollon : 10',
        'Rali Car : 2000000',
        'Pesho : 0.000001',
        'Barrel : 10'
    ]
));