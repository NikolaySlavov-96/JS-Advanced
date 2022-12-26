function magicMatrices(matrix){

    let matrixRowLength = matrix.length;
    let matrixColumLength = matrix[0].length;
    let isMagicMatrix = false;
    
    matrixRowLength--;
    matrixColumLength--;

    for(let n = 0; n < matrixRowLength; n++){

        let isCurrent = true;

        for(let z = 0; z < matrixColumLength; z++){

            let sumFirstLine = matrix[n][z] + matrix[n][z + 1];
            let sumSeconLine = matrix[n + 1][z] + matrix[n + 1][z + 1];

            if(sumFirstLine !== sumSeconLine) {
                isCurrent = false;
            }

            let sumFirstColum = matrix[n][z] + matrix[n + 1][z];
            let sumSecondColum = matrix[n][z + 1] + matrix[n + 1][z + 1];

            if(sumFirstColum !== sumSecondColum) {
                isCurrent = false;
            }
        }

        isMagicMatrix = isCurrent;
    }

    console.log(isMagicMatrix)
}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])