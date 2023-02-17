function processOddPositions(array){

    let value = [];

    array.forEach((el , index) => {

        if(index % 2 !== 0){
            value.push(el * 2);
        }
    });

    let printResult = value.reverse();
    
    console.log(printResult)
}

processOddPositions([3, 0, 10, 4, 7, 3])