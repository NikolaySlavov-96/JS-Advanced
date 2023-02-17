function diagonalSums(matrix){

    let matrixLength = matrix.length;
    let sumOfNumbersLeft = 0;
    let sumOfNumbersRight = 0;

    for(let n = 0; n < matrixLength; n++){

        sumOfNumbersLeft += Number(matrix[n][n]);

    }

    for(let q = 0 ; q < matrixLength; q++){

        sumOfNumbersRight += Number(matrix[q][(matrixLength - 1) - q])
    }

    let resultPrint = [sumOfNumbersLeft , sumOfNumbersRight]

    console.log(resultPrint.join(` `))
}

diagonalSums([
    [20, 40, 20],
    [10, 60, 30],
    [10, 60, 40]]);