function smallestTwoNumbers(array){

    let arraySort = array.map(x => Number(x)).sort((a , b) => a - b);

    let smallestTwo = arraySort.slice(0 , 2);

    console.log(smallestTwo.join(` `));
}

smallestTwoNumbers([30, 15, 50, 5])