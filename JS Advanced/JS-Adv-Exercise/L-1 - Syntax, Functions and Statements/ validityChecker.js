function validityChecker(...parameters){

    let x1 = parameters[0];
    let y1 = parameters[1];
    let x2 = parameters[2];
    let y2 = parameters[3];
    
    let result = Math.pow(x2 - x1 , 2) + Math.pow(y2 - y1 , 2);

    console.log(result)
}

validityChecker(3, 0, 0, 4)