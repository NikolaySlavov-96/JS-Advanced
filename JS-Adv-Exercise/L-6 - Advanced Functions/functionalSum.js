function add(newNumber) {

    const newFunctuon = function (afterFirst) {
        newNumber += afterFirst;

        return newFunctuon;
    };

    newFunctuon.toString = function () {
        return newNumber;
    }

    return newFunctuon;
}

console.log(add(1).toString())
add(1)(6)(-3)