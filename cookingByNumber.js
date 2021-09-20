function cookingByNumber(number, ...operations) {
    let incomingNumber = Number(number);
    let actions = {
        chop,
        dice,
        spice,
        bake,
        fillet
    }

    for (let operation of operations) {
        let action = actions[operation];
        incomingNumber = action(incomingNumber);
        console.log(incomingNumber);
    }

    


    function chop(number) {
        return number / 2;
    }

    function dice(number) {
        return Math.sqrt(number);
    }

    function spice(number) {
        return ++number;
    }

    function bake(number) {
        return number * 3;
    }

    function fillet(number) {
        number -= number * 0.2;
        return number;
    }
}

cookingByNumber('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('---------------------------')
cookingByNumber('9', 'dice', 'spice', 'chop', 'bake', 'fillet');