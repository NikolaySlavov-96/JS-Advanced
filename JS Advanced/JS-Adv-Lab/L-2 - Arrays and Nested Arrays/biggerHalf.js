function biggerHalf(arraOfNumbers){

    let sortNumber = arraOfNumbers.sort((a , b) => a - b);
    let arrayLength = arraOfNumbers.length % 2 !== 0 ? Math.floor(arraOfNumbers.length / 2) : arraOfNumbers.length / 2;

    let output = sortNumber.slice(arrayLength);

    return output;
}

console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]))