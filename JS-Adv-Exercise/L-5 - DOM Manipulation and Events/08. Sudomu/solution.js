function solve() {
    
    const [quckBtn , clearBtn] = document.querySelectorAll('button');
    
    quckBtn.addEventListener('click' , onCheck);
    clearBtn.addEventListener('click' , onClear);
    const borderTable = document.querySelector('table');
    const textTable = document.querySelector('#check p');

    function onCheck (e) {
        

        const checkedNumber = Array.from(document.querySelectorAll('tbody tr'));
        console.log(checkedNumber)
        const result = createArrayFrom(checkedNumber);

        let isCorrect = cheking(result);

        if(isCorrect) {
            borderTable.style.border = '2px solid green';
            textTable.textContent = 'You solve it! Congratulations!'
            textTable.style.color = 'green';
        } else {
            borderTable.style.border = '2px solid red';
            textTable.textContent = 'NOP! You are not done yet...'
            textTable.style.color = 'red';
        }

    }

    function onClear (e) {

        borderTable.style.border = '';
        textTable.textContent = '';
        Array.from(document.querySelectorAll('input')).forEach(e => e.value = '');
    }


    function createArrayFrom (checkedNumber) {

        const chekcArray = [];

        for (const line of checkedNumber) {
            const childrens = Array.from(line.querySelectorAll('td input'));
            const result = [];

            for (const children of childrens) {
                result.push(Number(children.value));
            }
            chekcArray.push(result)
        }

        return chekcArray;
    }

    function cheking(arraFromNumber) {

        const matirial = arraFromNumber;

        for (const row of matirial) {

            if(row[0] === row[1] || row[1] === row[2] || row[0] === row[2]) {
                return false;
            }
        }

        const arrayLength = matirial.length;

        for(let n = 0; n < arrayLength; n++) {

            if(matirial[0][n] === matirial[1][n] || matirial[1][n] === matirial[2][n] || matirial[0][n] === matirial[2][n]) {
                return false;
            }
        }

        return true;
    }
}