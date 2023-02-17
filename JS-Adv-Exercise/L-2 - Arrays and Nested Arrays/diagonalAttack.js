function diagonalAttack(input){
    
    let rowLength = input.length;

    input = input.map(row => row.split(` `).map(Number));

    let leftDiagonal = 0;
    let rightDiagonal = 0;

    let counterRowBegin = 0;
    let counterRowEnd = (rowLength - 1);

    for (const line of input) {
        leftDiagonal += line[counterRowBegin];
        counterRowBegin++;
        rightDiagonal += line[counterRowEnd];
        counterRowEnd--;
    }

    if(leftDiagonal === rightDiagonal){
        reEditMatrih(rowLength);
        input.forEach(line => console.log(line.join(` `)));
        return 
    }

    input.forEach(line => {
        console.log(line.join(` `));
    });

    function reEditMatrih(row){
        let leftCounter = 0;
        let rigthCounter = (row - 1);
        let centerMatrix = Math.ceil(rowLength / 2);
        let counterRow = 0;
        for(const line of input){
            for (let z = 0; z < line.length; z++){
                if(counterRow < centerMatrix){
                    if((z > leftCounter || z < leftCounter) && (z > rigthCounter || z < rigthCounter)){
                        line[z] = leftDiagonal;
                    }
                } else {
                    if((z > leftCounter || z < leftCounter) && (z < rigthCounter || z > rigthCounter)){
                        line[z] = leftDiagonal;
                    }
                }
            }
            leftCounter++;
            rigthCounter--;
            input[counterRow] = line;
            counterRow++;
        }
    }
}