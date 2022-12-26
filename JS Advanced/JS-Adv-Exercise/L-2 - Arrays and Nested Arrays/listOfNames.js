function listOfNames(arrayOfName){

    let sortNames = arrayOfName.sort((a , b) => a.localeCompare(b));

    let arrayOfNameLength = arrayOfName.length;

    for(let n = 0; n < arrayOfNameLength; n++){

        console.log(`${(n + 1)}.${sortNames[n]}`)
    }
}

listOfNames(["John", "Bob", "Christina", "Ema"])