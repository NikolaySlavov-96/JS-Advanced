function sumFirstLast(array){

    let firstNumber = Number(array.shift());
    let lastNumber = Number(array.pop());

    console.log(firstNumber + lastNumber)
}

sumFirstLast(['20', '30', '40'])