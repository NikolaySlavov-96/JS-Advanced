function roadRadar(speed , area){

    switch(area) {
        case 'motorway': calculationSpeed(130); ;break;
        case 'interstate': calculationSpeed(90); ;break;
        case 'city': calculationSpeed(50); ;break;
        case 'residential': calculationSpeed(20); ;break;
    }

    function calculationSpeed(speedLimit){

        if(speedLimit >= speed) {
            return console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        }

        let overLimit = speed - speedLimit;
        let statusLimit = '';

        if(overLimit <= 20){
            statusLimit = 'speeding';
        } else if(overLimit <= 40) {
            statusLimit = 'excessive speeding';
        } else {
            statusLimit = 'reckless driving';
        }

        return console.log(`The speed is ${overLimit} km/h faster than the allowed speed of ${speedLimit} - ${statusLimit}`)
    }
}

roadRadar(21, 'residential')