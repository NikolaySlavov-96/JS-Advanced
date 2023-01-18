function magicMatrices(matrix){

    const matrixRowLength = (matrix.length - 1);
    
    for(let n = 0; n < matrixRowLength; n++){

        let firstRow = matrix[n].reduce((a, b) => a + b, 0);
        let secondRow = matrix[n + 1].reduce((a, b) => a + b, 0);
        let firstCol = 0;
        let secondCol = 0;

        for(let z = 0; z < (matrixRowLength + 1); z++){
            firstCol += matrix[n][z];
            secondCol += matrix[n + 1][z];
        }

        if(firstRow !== secondRow || firstCol !== secondCol) {
            return false;
        }
    }

    return true;
}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])