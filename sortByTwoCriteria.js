function sortByTwoCriteria(elements) {
    let result = elements.sort(elementSort);
    return result;


    function elementSort(a, b) {
        return a.length - b.length || a.localeCompare(b);
    }

}

console.log(sortByTwoCriteria(
    [
        'alpha', 
        'beta', 
        'gamma'
    ]

));
console.log('----------------')

console.log(sortByTwoCriteria(
    [
        'Isacc', 
        'Theodor', 
        'Jack', 
        'Harrison', 
        'George'
    ]
));
console.log('----------------')

console.log(sortByTwoCriteria(
    [   'test', 
        'Deny', 
        'omen', 
        'Default'
    ]
));