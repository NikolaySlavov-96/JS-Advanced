function breakfastRobot() {

    const recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10},
    }

    const comm = {
        restock,
        prepare,
        report,
    }

    const stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    return manager

    function manager(line) {
        let [type , prod , quantity] = line.split(` `);
        quantity = Number(quantity)

        return comm[type](prod , quantity);
    }
    
    function restock(namePro , quantity) {
        
        stock[namePro] += quantity;
        return 'Success';
    }

    function prepare(recipeAsString , quantity) {

        const recipe = Object.entries(recipes[recipeAsString]);
        recipe.forEach(product => product[1] *= quantity);

        for(const [prod , qnt] of recipe) {
            if(stock[prod] < qnt) {
                return `Error: not enough ${prod} in stock`
            }
        }

        recipe.forEach(([product , qantit]) => stock[product] -= qantit);
        return 'Success';
    }

    function report() {
        return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`
    }
}

breakfastRobot()
let manager = breakfastRobot (); 
console.log (manager ("restock flavour 50")); // Success 
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
