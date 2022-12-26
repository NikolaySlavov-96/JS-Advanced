function addAndRemoveElements(arrayOfCommands){

    let courrentSum = 1;
    let numberOfArr = [];

    for (const command of arrayOfCommands) {
        if(command === 'add'){
            numberOfArr.push(courrentSum)
        } else if(command === 'remove') {
            numberOfArr.pop();
        }
        courrentSum++;
    }

    if(numberOfArr.length !== 0) {
        console.log(numberOfArr.join(` \n`));
    } else {
        console.log(`Empty`)
    }
}

addAndRemoveElements(['remove', 
'remove', 
'remove'])