function juiceFlavor(juicesArr) {
    let juicesAmount = new Map();
    let juicesBottles = new Map();

    for (let index = 0; index < juicesArr.length; index++) {
        let [juiceName, amount] = juicesArr[index].split(' => ');
        amount = Number(amount);
        
        if(!juicesAmount.has(juiceName)) {
            juicesAmount.set(juiceName, 0);
        }

        let totalAmount = juicesAmount.get(juiceName) + amount;

        if(totalAmount >= 1000) {
            if(!juicesBottles.has(juiceName)) {
                juicesBottles.set(juiceName, 0)
            }

            let newBottles = Math.trunc(totalAmount / 1000)
            let totalBottles = juicesBottles.get(juiceName) + newBottles
            juicesBottles.set(juiceName, totalBottles);

        }

        juicesAmount.set(juiceName, totalAmount % 1000);
    }

    return [...juicesBottles].map(([key,value]) => `${key} => ${value}`).join('\n');
}


console.log(juiceFlavor(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
));
console.log('------------')

console.log(juiceFlavor(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
));