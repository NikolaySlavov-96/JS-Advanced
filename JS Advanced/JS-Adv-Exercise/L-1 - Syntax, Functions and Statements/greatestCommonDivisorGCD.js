function greatestCommonDivisorGCD(numberFirst , numberSecond){

    for(let n = 100; n > 0; n--){
        if(numberFirst % n === 0 && numberSecond % n === 0) {
            console.log(n);
            break;
        }
    }
}

greatestCommonDivisorGCD(15, 5)
greatestCommonDivisorGCD(2154, 458)