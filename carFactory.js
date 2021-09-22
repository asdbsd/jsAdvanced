function carFactory(obj) {
    let engines = 
    {
        "Small engine": { power: 90, volume: 1800 },
        "Normal engine": { power: 120, volume: 2400 },
        "Monster engine": { power: 200, volume: 3500 }
    }

    let theCar = {
        "model": obj.model,
        "engine": determinEngine(obj),
        "carriage": determinCarriage(obj),
        "wheels": determinWheels(obj.wheelsize)
    };

    return theCar;

    function determinEngine(obj) {
        if (obj.power <= 90) {
            return engines["Small engine"];
        } else if (obj.power <= 120) {
            return engines["Normal engine"];
        } else {
            return engines["Monster engine"];
        }
    }

    function determinCarriage(obj) {
        let carriage = {};

        if (obj.carriage == 'hatchback') {
            carriage['type'] = 'hatchback';
            carriage['color'] = obj.color;
        } else {
            carriage['type'] = 'coupe';
            carriage['color'] = obj.color;
        }
        return carriage;
    }

    function determinWheels(size) {
        let wheels = [];
        size % 2 == 0 ? size-- : size;
        for (let i = 0; i < 4; i++) {
            wheels.push(size);
        }
        
        return wheels;
    }

}

console.log(carFactory(
    { 
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14 
    }
));
console.log('---------------')

console.log(carFactory(
    { 
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17 
    }
));
console.log('---------------')
