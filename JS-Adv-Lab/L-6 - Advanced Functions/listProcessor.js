function listProcessor(array) {

    let result = [];

    const store = {
        add,
        remove,
        print,
    }

    for (const line of array) {
        let [comm , letter] = line.split(` `);

        store[comm](letter);
    }

    function add(let) {
        result.push(let);
    }

    function remove(let) {
        while(result.includes(let)){
            let indexof = result.indexOf(let);
            result.splice(indexof , 1);

        }
    }

    function print() {
        console.log(result.join(`,`))
    }

}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])