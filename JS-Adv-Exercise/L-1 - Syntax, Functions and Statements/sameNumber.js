function sameNumbers(number){

    let toString = String(number);
    let firstNumber = toString[0];
    let stringLength = toString.length;
    let sumOfNumbers = 0;
    let same = true;
    
    for(let n = 0; n < stringLength; n++){

        if(firstNumber !== toString[n]){
            same = false;
        }
        sumOfNumbers += Number(toString[n]);
    }

    console.log(same)
    console.log(sumOfNumbers)
}

sameNumbers(1234)