function extractIncreasingSubsequenceFromArray(array){

    let biggestNumber = Number.MIN_SAFE_INTEGER;
    const resultOfCollect = [];

    for (const number of array) {
        if(number >= biggestNumber){
            biggestNumber = number;
            resultOfCollect.push(number)
        }
    }
    return resultOfCollect;
}

extractIncreasingSubsequenceFromArray([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24])