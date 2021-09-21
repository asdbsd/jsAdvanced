function arrayWithDelimiter(stringElements, delimiter) {
    return stringElements.join(`${delimiter}`);
}

console.log(arrayWithDelimiter(
    [
        'One', 
        'Two', 
        'Three', 
        'Four', 
        'Five'
    ], 
    '-'
));
console.log('--------------')

console.log(arrayWithDelimiter(
    [
        'How about no?', 
        'I',
        'will', 
        'not', 
        'do', 
        'it!'
    ], 
    '_'
));

