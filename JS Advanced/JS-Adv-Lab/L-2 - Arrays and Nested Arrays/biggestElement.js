function biggestElement(matrix) {

    let biggestNumber = Number.MIN_SAFE_INTEGER;

    for (const line of matrix) {
        for (const colom of line) {

            if(colom > biggestNumber) {
                biggestNumber = colom;
            }
        }
    }

    return biggestNumber
}

biggestElement([
  [20, 50, 10],
  [8, 33, 145],]);
