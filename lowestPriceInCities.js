function lowestPriceInCities(products) {
    const obj = {};
    const result = [];

    for (let product of products) {
        let [town, item, price] = product.split(' | ');
        price = Number(price);

        const existing = obj[item];
        if (!existing) {
            obj[item] = {}
        }

        obj[item][town] = price;

    }
    
    for (let [product, towns] of Object.entries(obj)) {
        sortedByPrice = Object.entries(towns).sort((a,b) => a[1] - b[1]);
        
        result.push(`${product} -> ${sortedByPrice[0][1]} (${sortedByPrice[0][0]})`);
    }

    return result.join('\n');

}


console.log(lowestPriceInCities(
    [
        'Sofia City | Audi | 100000',
        'Sofia City | BMW | 100000',
        'Sofia City | Mitsubishi | 10000',
        'Sofia City | Mercedes | 10000',
        'Sofia City | NoOffenseToCarLovers | 0',
        'Mexico City | Audi | 1000',
        'Mexico City | BMW | 99999',
        'New York City | Mitsubishi | 10000',
        'New York City | Mitsubishi | 1000',
        'Mexico City | Audi | 100000',
        'Washington City | Mercedes | 1000'


    ]
));