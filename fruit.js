function moneyToBuy(fruit, qty, price) {
    console.log(`I need $${(qty * price / 1000).toFixed(2)} to buy ${(qty / 1000).toFixed(2)} kilograms ${fruit}.`)
}

moneyToBuy('orange', 2500, 1.80);
console.log('------------')
moneyToBuy('apple', 1563, 2.35);