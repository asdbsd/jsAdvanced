function printNNumber(items, n) {
    let elementsInCollection = items.length - 1;
    let result = [];


    for (let number of items) {

    }

    
    for (let i = 0; i < items.length; i++) {
        if (n > elementsInCollection) {
            let index = (n - items.length) - 1;
            result.push(items[index]);
            break;
        } else if ( i % n === 0) {
            result.push(items[i]);
        }
    }

    return result;
}

console.log(printNNumber(
    [
        '5', 
        '20', 
        '31', 
        '4', 
        '20'
    ], 
    2
));
console.log('---------------');

console.log(printNNumber(
    [
        'dsa',
        'asd', 
        'test', 
        'tset'
    ], 
    2
));
console.log('---------------');

console.log(printNNumber(
    [
        '1', 
        '2',
        '3', 
        '4', 
        '5'
    ], 
    6
));
console.log('---------------');