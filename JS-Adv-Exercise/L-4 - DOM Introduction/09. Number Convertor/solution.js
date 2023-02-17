function solve() {
    
    const selectMenuTo = document.getElementById('selectMenuTo');
    const MenuTo = document.querySelectorAll('select option')[1];
    MenuTo.value = 'binary';
    MenuTo.textContent = 'Binary';

    let option = document.createElement('option');
    option.value = 'hexadecimal';
    option.textContent = 'Hexadecimal';

    selectMenuTo.appendChild(option);

    const inputNumber = document.getElementById('input');
    const outputNumber = document.getElementById('result');
    const button = document.querySelector('button');
    button.addEventListener('click',convert);

    function convert(ev) {

        let numberInput = Number(inputNumber.value) //
        const current = selectMenuTo.value;

        if(current === 'hexadecimal') {
            hexadecimal(numberInput);
        } else if(current === 'binary') {
            binary(numberInput);
        }
    }

    function hexadecimal(numberInput) {

        outputNumber.value = numberInput.toString(16).toUpperCase()
    }

    function binary(numberInput) {

        outputNumber.value = numberInput.toString(2);
    }
}