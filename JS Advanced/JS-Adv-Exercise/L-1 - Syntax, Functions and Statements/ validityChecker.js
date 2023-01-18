function validityChecker(...parameters){

    let x1 = parameters[0];
    let y1 = parameters[1];
    let x2 = parameters[2];
    let y2 = parameters[3];

    function calc(x1, y1, x2, y2) {

        return Math.sqrt(Math.pow(x2 - x1 , 2) + Math.pow(y2 - y1 , 2));
    }

    if (Number.isInteger(calc(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
 
    if (Number.isInteger(calc(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
 
    if (Number.isInteger(calc(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

validityChecker(2, 1, 1, 1)