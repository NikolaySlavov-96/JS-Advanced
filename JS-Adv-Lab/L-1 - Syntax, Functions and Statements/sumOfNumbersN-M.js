function sumOfNumbersNM(first , second) {

    first = Number(first);
    second = Number(second);

    let result = 0;

    for(let n = first; n <= second; n++){
        result += n;
    }

    console.log(result)
}

sumOfNumbersNM('1', '5')