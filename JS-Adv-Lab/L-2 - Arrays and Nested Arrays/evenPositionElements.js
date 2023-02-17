function evenPositionElements(array){

    let eventIndex = [];
    let arrayLength = array.length;

    for(let n = 0; n < arrayLength; n++){
        if(n % 2 === 0){
            eventIndex.push(array[n]);
        }
    }

    console.log(eventIndex.join(` `))
}

evenPositionElements(['20', '30', '40', '50', '60'])