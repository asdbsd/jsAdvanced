function addAndRemoveElements(elements) {
    actions = {
        add,
        remove
    };

    let currentNumber = 1;
    let result = [];

    elements.forEach((element) => {
        let action = actions[element];

        action(currentNumber)
    });




    function add(number) {
        result.push(number);
        currentNumber++
    }

    function remove(number) {
        result.pop(result[result.indexOf(number)]);
        currentNumber++

    }

    if (result.length > 0) {
        return result.join('\n');
    } else  {
        return 'Empty';
    }

}

console.log(addAndRemoveElements(
    [
        'add', 
        'add', 
        'add', 
        'add'
    ]
));
console.log('-----------------')
console.log(addAndRemoveElements(
    [
        'add', 
        'add', 
        'remove', 
        'add', 
        'add'
    ]
));
console.log('-----------------')
console.log(addAndRemoveElements(
    [   'remove', 
        'remove', 
        'remove'
    ]
));
console.log('-----------------')
