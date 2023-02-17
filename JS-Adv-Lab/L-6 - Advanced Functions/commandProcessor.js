function solution() {
    
    let text = '';

    function append(string) {
        text += string;
    }

    function removeStart(qnt) {
        text = text.slice(qnt);
    }

    function removeEnd(qnt) {
        text = text.slice(0 , -qnt);
    }

    function print() {
        console.log(text)
    }

    return {
        append,
        removeStart,
        removeEnd,
        print,
    }
}


let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();