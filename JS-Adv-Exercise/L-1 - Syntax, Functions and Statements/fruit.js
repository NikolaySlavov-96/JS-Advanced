function fruit(fruit , grams , price){

    let changeValue = grams / 1000;
    let moneyPayToProduct = changeValue * price;


    console.log(`I need $${moneyPayToProduct.toFixed(2)} to buy ${changeValue.toFixed(2)} kilograms ${fruit}.`)
}

fruit('orange', 2500, 1.80)