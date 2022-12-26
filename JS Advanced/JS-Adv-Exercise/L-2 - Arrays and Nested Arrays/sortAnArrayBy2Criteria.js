function sortAnArrayBy2Criteria(arrayOfString){

    let sortArray = arrayOfString.sort((a , b) => a.length - b.length || a.localeCompare(b));

    for (const letter of sortArray) {
        
        console.log(letter)
    }
}

sortAnArrayBy2Criteria(['alpha', 
'beta', 
'gamma'])