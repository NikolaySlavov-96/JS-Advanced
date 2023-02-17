function fibonacci() {

    let counter = 0;
    let currentCounter = 1;

    return function() {
        
        let pri = counter + currentCounter;
        counter = currentCounter;
        currentCounter = pri;

        return counter;
    }
}

let fib = fibonacci();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13