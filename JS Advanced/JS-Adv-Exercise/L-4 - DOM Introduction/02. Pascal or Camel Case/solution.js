function solve() {
  //TODO...

    const letterEdit = document.getElementById('text').value.split(` `);
    const commandLetter = document.getElementById('naming-convention').value;
    let result = chekCase(letterEdit , commandLetter);


    function chekCase(letterEdit , commandLetter) {

        let currentResult = '';
        let counter = 0;
        
        for (const letter of letterEdit) {

            if(counter === 0 && commandLetter === 'Camel Case') {
                currentResult += letter.toLowerCase();
                counter++;
            } else if(commandLetter === 'Camel Case' || commandLetter === 'Pascal Case') {
                let firstLetter = letter.substring(0 , 1).toUpperCase();
                let otherLetter = letter.substring(1).toLowerCase();
                currentResult += firstLetter.concat(otherLetter);
            } else {
                currentResult = 'Error!'
            }
        }

        return currentResult;
    }

    document.getElementById('result').textContent = result;
}