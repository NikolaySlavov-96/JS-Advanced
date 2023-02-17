function largestNumber(...numbers) {

    let largeNumber = Number.MIN_SAFE_INTEGER;

    for (const num of numbers) {
        if(num > largeNumber) {
            largeNumber = num;
        }
    }
    console.log(`The largest number is ${largeNumber}.`)
}

largestNumber(-3, -5, -22.5)