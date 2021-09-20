function roadRadar(currentSpeed, area) {
    let speedLimit = 0;

    switch(area) {
        case 'motorway': 
            speedLimit = 130;
            if (currentSpeed <= speedLimit) {
                console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`)
            } else {
                defineStatus(speedLimit, currentSpeed);
            }
        break;

        case 'interstate': 
            speedLimit = 90;
            if (currentSpeed <= speedLimit) {
                console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`)
            } else {
                defineStatus(speedLimit, currentSpeed);
            }
        break;

        case 'city': 
            speedLimit = 50;
            if (currentSpeed <= speedLimit) {
                console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`)
            } else {
                defineStatus(speedLimit, currentSpeed);
            }
        break;

        default: 
            speedLimit = 20;
            if (currentSpeed <= speedLimit) {
                console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`)
            } else {
                defineStatus(speedLimit, currentSpeed);
            }
        break;
    }


    function defineStatus(limit, speed) {
        let status = '';
        let difference = speed - limit;

        if (difference <= 20) {
            status = 'speeding';
        } else if (difference <= 40) {
            status = 'excessive speeding';
        } else if (speed > 40) {
            status = 'reckless driving';
        }

        return console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
    }

}


roadRadar(40, 'city');
console.log('------------')
roadRadar(21, 'residential');
console.log('------------')
roadRadar(120, 'interstate');
console.log('------------')
roadRadar(200, 'motorway');



