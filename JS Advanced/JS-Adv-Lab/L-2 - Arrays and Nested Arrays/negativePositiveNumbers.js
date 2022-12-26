function negativePositiveNumbers(array){

    let arrayLength = array.length;
    let arrayResult = [];

    for(let n = 0; n < arrayLength; n++){
        
        let temporary = Number(array.shift());

        if(temporary >= 0) {
            arrayResult.push(temporary);
        } else {
            arrayResult.unshift(temporary);
        }
    }

    console.log(arrayResult)
}

negativePositiveNumbers([7, -2, 8, 9])