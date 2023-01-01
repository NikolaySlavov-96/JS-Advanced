function solution(n) {

    const current = n;
    
    function add5(s) {
        return current + s;
    }

    return add5;
}

solution()

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));