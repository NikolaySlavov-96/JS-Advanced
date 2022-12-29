function generateReport() {

    const checkedBox = Array.from(document.querySelectorAll(`thead tr th input`));
    const rowQuantity = document.querySelectorAll(`tbody tr td:nth-child(1)`).length;

    const resulsts = [];

    for(let n = 0; n <rowQuantity; n++){

        const currentElement = {};

        for (const line of checkedBox) {

            if(line.checked) {

                let trChaildNumber = checkedBox.indexOf(line) + 1;
                let colData = document.querySelectorAll(`tbody tr td:nth-child(${trChaildNumber}`);

                let propertyName = line.name;
                let propertyValue = colData[n].textContent;

                currentElement[propertyName] = propertyValue;
            }
        }
        resulsts.push(currentElement);
    }

    document.getElementById('output').value = JSON.stringify(resulsts);
}