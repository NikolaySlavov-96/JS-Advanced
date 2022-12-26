function equalNeighbors(matrix){

    const lengthRow = matrix.length;
    const lengthColum = matrix[0].length;
    let result = [];

    for(let n = 0; n < lengthRow; n++){
        for(let z = 0; z < lengthColum; z++){
            if(n !== (lengthRow - 1) && (matrix[n][z] === matrix[n + 1][z])){
                result.push(matrix[n][z]);
            }

            if(z !== (lengthColum - 1) && (matrix[n][z] === matrix[n][z + 1])){
                result.push(matrix[n][z]);
            }
        }
    }

    return result.length;
}

equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]);