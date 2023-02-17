function janSNotation(arr){

    let counterOperants = 0;
    let counterNumbers = 0;
    
    for(const element of arr){
        if(element === '+' || element === '-' || element === '*' || element === '/'){
            counterOperants++;
        } else {
            counterNumbers++;
        }
    }

    if((counterNumbers - 1) === counterOperants){
        let result = 0;
        let counterNumber = 1;
        while(arr.length !== 1){
            for(let n = 0; n < arr.length; n++){
                if(arr[n] === '+' || arr[n] === '-' || arr[n] === '*' || arr[n] === '/'){
                    switch(arr[n]){
                        case '+': 
                            arr[n - 2] += arr[n - 1];
                            arr.splice(n - 1, 2);
                            n = 0;
                        break;
                        case '-': 
                            arr[n - 2] -= arr[n - 1]; 
                            arr.splice(n - 1, 2);
                            n = 0;
                        break;
                        case '*': 
                            arr[n - 2] *= arr[n - 1]; 
                            arr.splice(n - 1, 2);
                            n = 0;
                        break;
                        case '/': 
                            arr[n - 2] /= arr[n - 1]; 
                            arr.splice(n - 1, 2);
                            n = 0;
                        break;
                    }
                }
            }
        }
        console.log(arr.join(``))
    } else if(counterNumbers <= counterOperants){
        console.log(`Error: not enough operands!`)
    } else if(counterNumbers > (counterOperants - 1)){
        console.log(`Error: too many operands!`)
    }
}