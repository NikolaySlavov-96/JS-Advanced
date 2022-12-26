function printEveryNthElementFromAnArray(array , step){

    let arrayLength = array.length;
    let resultAfterOperation = [];

    for(let n = 0; n < arrayLength; n += step){

        let current = array[n];
        resultAfterOperation.push(current);
    }

    return resultAfterOperation
}

printEveryNthElementFromAnArray(['5', 
'20', 
'31', 
'4', 
'20'], 
2)