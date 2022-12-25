function mathOperations(numberFirst , numberSecond , operator){
    
    switch(operator) {
        case '+': console.log(numberFirst + numberSecond); break;
        case '-': console.log(numberFirst - numberSecond); break;
        case '*': console.log(numberFirst * numberSecond); break;
        case '/': console.log(numberFirst / numberSecond); break;
        case '**': console.log(numberFirst ** numberSecond); break;
        case '%': console.log(numberFirst % numberSecond); break;
    }
}

mathOperations(5, 6, '+')