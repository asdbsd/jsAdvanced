function sortingNumbers(elements) {
    let numbers = new Array(...elements);
    let newNumbers = [];

    elements.forEach((num, i) => {
        if (i % 2 === 0 ) {
            let currentNumber = Math.min(...numbers);
            newNumbers.push(currentNumber)
            numbers.splice(numbers.indexOf(currentNumber), 1);
        } else {
            let currentNumber = Math.max(...numbers);
            newNumbers.push(currentNumber)
            numbers.splice(numbers.indexOf(currentNumber), 1);
        }
    })

    return newNumbers
    
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])