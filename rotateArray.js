function rotateArray(elements, num) {
    for (let i = 0; i < num; i++) {
        elements.unshift(elements.pop());
    }
    return elements.join(' ');
}

console.log(rotateArray(
    [
        '1', 
        '2', 
        '3', 
        '4'
    ], 
    2
));
console.log('--------------')

console.log(rotateArray(
    [
        'Banana', 
        'Orange', 
        'Coconut', 
        'Apple'
    ], 
    15
));