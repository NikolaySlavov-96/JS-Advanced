function lastKNumbersSequence(numberN , numberK){

    numberN = Number(numberN);
    numberK = Number(numberK);

    let sequenceNumber = [1];

    for(let n = 1; n < numberN; n++){
        let sum = [];
        let resultSequence = 0;

        if(sequenceNumber.length >= numberK){
            sum = sequenceNumber.slice((sequenceNumber.length - numberK));
        } else {
            sum = sequenceNumber.slice(0);
        }

        for(let q = 0; q < sum.length; q++){
            resultSequence += Number(sum[q]);
        }

        sequenceNumber.push(resultSequence)
    }

    return sequenceNumber
}

lastKNumbersSequence('6', '3')