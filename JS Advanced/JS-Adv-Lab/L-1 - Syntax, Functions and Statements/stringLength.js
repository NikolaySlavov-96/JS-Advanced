function stringLength(...string) {

    let sumOfString = 0;

    for (const letter of string) {
        let temporary = letter.length;
        sumOfString += Number(temporary);
    }
    console.log(sumOfString);
    console.log(Math.floor(sumOfString / 3));
}

stringLength('chocolate', 'ice cream', 'cake')