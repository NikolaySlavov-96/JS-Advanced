function TicTacToe(array) {

    const bord = [];
    let playerCounter = 0;

    for(let n = 0; n < 3; n++) {
        const current = [];
        for(let g = 0; g < 3; g++){
            current.push('false');
        }
        bord.push(current);
    }

    for (const line of array) {
        let [row, col] = line.split(` `);
        
        if(bord[row][col] !== 'false') {
            console.log(`This place is already taken. Please choose another!`);
            continue;
        }

        playerCounter++;

        if(playerCounter % 2 === 0) {
            bord[row][col] = 'O'
        } else {
            bord[row][col] = 'X'
        }

        let isCheck = checked();
        if(isCheck !== undefined) {
            console.log(`Player ${isCheck} wins!`);
            break;
        }
        
        let result = ''
        for(const is of bord) {
            let isCor = is.includes('false');
            if(isCor) {
                result = true;
                break;
            }
        } 

        if(!result) {
            console.log(`The game ended! Nobody wins :(`);
            break;
        }
    }
    for (const row of bord) {
        console.log(row.join(`\t`));
    }

    function checked() {
        for(let n = 0; n < bord.length; n++) {
            if(bord[n][0] === 'X' && bord[n][1] === 'X' && bord[n][2] === 'X') {
                return 'X';
            } else if(bord[n][0] === 'O' && bord[n][1] === 'O' && bord[n][2] === 'O') {
                return 'O'
            }

            if((bord[0][n] === 'X' && bord[1][n] === 'X' && bord[2][n] === 'X')) {
                return 'X'
            } else if((bord[0][n] === 'O' && bord[1][n] === 'O' && bord[2][n] === 'O')){
                return 'O'
            }
        }

        if((bord[0][0] === 'X' && bord[1][1] === 'X' && bord[2][2] === 'X') || (bord[2][0] === 'X' && bord[1][1] === 'X' && bord[0][2] === 'X')) {
            return 'X';
        }
        if((bord[0][0] === 'O' && bord[1][1] === 'O' && bord[2][2] === 'O') || (bord[2][0] === 'O' && bord[1][1] === 'O' && bord[0][2] === 'O')) {
            return 'O';
        }
    }
}

TicTacToe(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"])