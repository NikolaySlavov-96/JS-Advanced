function generateReport() {

    const checkedBox = document.querySelectorAll(`thead tr th input`);
    const rowQuantity = document.querySelectorAll(`tbody tr`);
    const rowQuantityLenght = rowQuantity.length;
    const resulsts = [];

    for(let n = 0; n < rowQuantityLenght; n++){
        const currentElement = {};

        for(let k = 0; k < rowQuantityLenght; k++) {
            if(checkedBox[k].checked) {
                currentElement[boxes[k].name] = info[n].children[k].textContent
            }
        }
        resulsts.push(currentElement);
    }
    document.getElementById('output').textContent = JSON.stringify(resulsts);
}