function cookingByNumbers(modifNumber , ...command) {
    
    let number = Number(modifNumber);

    for (const instruct of command) {

        switch(instruct) {
            case 'chop': number  /= 2; break;
            case 'dice': number = Math.sqrt(number) ;break;
            case 'spice': number++ ;break;
            case 'bake': number *= 3 ;break;
            case 'fillet': number -= number * 0.20 ;break;
        }
        console.log(number)
    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')

// chop - divide the number by two
// dice - square root of a number
// spice - add 1 to the number
// bake - multiply number by 3
// fillet - subtract 20% from the number