function squareOfStars(number){

    
    for(let n = 0; n < number; n++){
        
        let result = '* ';
        result += result.repeat(number - 1);
        console.log(result)
    }
}

squareOfStars(5)