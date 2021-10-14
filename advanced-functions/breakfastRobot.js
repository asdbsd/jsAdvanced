function breakfastRobot() {
    const recipes = {
        'apple': {
            'carbohydrate': 1,
            'flavour': 2
        },
        'lemonade': {
            'carbohydrate': 10,
            'flavour': 20
        },
        'burger': {
            'carbohydrate': 5,
            'fat': 7,
            'flavour': 3
        },
        'eggs': {
            'protein': 5,
            'fat': 1,
            'flavour': 1
        },
        'turkey': {
            'protein': 10,
            'carbohydrate': 10,
            'fat': 10,
            'flavour': 10
        },
        
    };

    const commands = {
        'restock': restock,
        'prepare': prepare,
        'report': () => `protein=${stock['protein']} carbohydrate=${stock['carbohydrate']} fat=${stock['fat']} flavour=${stock['flavour']}`
    }

    const stock = {
        'protein': 0,
        'carbohydrate': 0,
        'fat': 0,
        'flavour': 0
    };

    function restock(item, amount) {
        stock[item] += amount
        return 'Success'
    }

    function prepare(recipe, qty) {
        let requiredAmounts = {}
        Object.keys(recipes[recipe]).forEach(key => requiredAmounts[key] = recipes[recipe][key] * qty);

        for (let key of Object.keys(requiredAmounts)) {
            let isEnough = stock[key] >= requiredAmounts[key];
            if (!isEnough) {
                return `Error: not enough ${key} in stock`;
            }
        }

        Object.keys(requiredAmounts).forEach(key => stock[key] -= requiredAmounts[key])
        return 'Success';

    }

    function managerRobot(inputCommand) {
        let [command, item, amount] = inputCommand.split(' ');
        let result  = commands[command](item, Number(amount))

        return result;
    }

    return managerRobot;

}


let manager = breakfastRobot(); 
console.log(manager)
console.log (manager ("restock flavour 50"));
console.log (manager ("prepare lemonade 4")); 
console.log (manager ("restock carbohydrate 10")); 
console.log (manager ("restock flavour 10")); 
console.log (manager ("prepare apple 1")); 
console.log (manager ("restock fat 10")); 
console.log (manager ("prepare burger 1")); 
console.log (manager ("report")); 

