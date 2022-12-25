function aggregateElements(array){

    let sumValue = 0;
    let sumContac = '';
    let value = 0;

    for (const line of array) {
        sumContac += String(line);
        sumValue += Number(line);
        value += 1 / line;
    }

    console.log(sumValue);
    console.log(value)
    console.log(sumContac);
}

aggregateElements([1, 2, 3])
aggregateElements([2, 4, 8, 16])