function lowestPricesInCities (array) {

    const results = {};

    for (const city of array) {

        let [currentCity , product , currentPrice] = city.split(` | `);
        currentPrice = Number(currentPrice);

        if(!results[product]) {
            results[product] = {city: currentCity , price: currentPrice}
        }

        if(results[product].price > currentPrice) {
            results[product].city = currentCity;
            results[product].price = currentPrice;
        }
    }

    for (const product in results) {
        
        console.log(`${product} -> ${results[product].price} (${results[product].city})`)
    }
}

lowestPricesInCities (['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 999',
'New York | Burger | 10'])