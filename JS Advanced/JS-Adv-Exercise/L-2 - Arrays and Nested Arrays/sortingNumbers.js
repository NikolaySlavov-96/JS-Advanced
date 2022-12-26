function sortingNumbers(arrayOfNumbers){

    let result = [];
    let sortArray = arrayOfNumbers.sort((a , b) => a - b);

    while(sortArray.length !== 0){
        let firstNumber = sortArray.shift();
        let secondNumber = sortArray.pop();

        result.push(firstNumber);
        result.push(secondNumber);
    }

    return result
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])