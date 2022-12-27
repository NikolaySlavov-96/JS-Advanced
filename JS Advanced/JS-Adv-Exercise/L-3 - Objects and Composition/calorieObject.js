function calorieObject(array) {
     
    const arraylength = array.length;
    const resultOfProduct = {};

    for(let n = 0; n < arraylength; n+= 2) {
        resultOfProduct[array[n]] = Number(array[n + 1]);
    }

    console.log(resultOfProduct)
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])