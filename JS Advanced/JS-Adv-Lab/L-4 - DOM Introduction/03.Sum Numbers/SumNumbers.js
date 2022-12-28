function calc() {
    // TODO: sum = num1 + num2
    const firstNumber = document.getElementById(`num1`).value;
    const secondNumber = document.getElementById(`num2`).value;

    document.getElementById(`sum`).value = Number(firstNumber) + Number(secondNumber)
}
