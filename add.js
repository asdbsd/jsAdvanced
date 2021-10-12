function createAdder(n) {
    let number = n;

    function addNumber(n) {
        return number + n
    }

    return addNumber

}

let newAdder = createAdder(5);
console.log(newAdder(2));
console.log(newAdder(3))

