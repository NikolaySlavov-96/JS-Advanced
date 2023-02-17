function calculator() {

    let field1 = null;
    let field2 = null;
    let result = null;

    return {
        init,
        add,
        subtract,
    }

    function init(num1 , num2, res) {
        field1 = document.querySelector(num1);
        field2 = document.querySelector(num2);
        result = document.querySelector(res);
    }

    function add() {
        result.value = Number(field1.value) + Number(field2.value);
    }

    function subtract() {
        result.value = Number(field1.value) - Number(field2.value);
    }
}





