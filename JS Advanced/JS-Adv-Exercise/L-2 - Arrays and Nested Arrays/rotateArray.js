function rotateArray(arrayOfNumber , step){

    let calculateStep = step % (arrayOfNumber.length);

    for(let n = 0; n < calculateStep; n++){
        let temp = arrayOfNumber.pop();
        arrayOfNumber.unshift(temp);
    }

    console.log(arrayOfNumber.join(` `))
}

rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15)