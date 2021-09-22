function calorieObject(elements) {
    let result = elements.reduce((obj, item, index) => {

        if (index % 2 === 0) {
            obj[item] = 0;
        } else {
            obj[elements[index-1]] = Number(item);
        }
        return obj;
    }, {})

    return result;
}

console.log(calorieObject(
    ['Yoghurt', '48', 'Rise', '138', 'Apple', '52']
));
console.log('---------------')

console.log(calorieObject(
    ['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']
));
