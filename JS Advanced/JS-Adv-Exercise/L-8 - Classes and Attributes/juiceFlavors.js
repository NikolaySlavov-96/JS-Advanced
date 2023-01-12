function juiceFlavors(array) {

    const obj = {};
    const result = {};

    function calculateBottle(fruit) {
        if(obj[fruit] >= 1000) {
            let currentQuality = Number(obj[fruit] / 1000);

            let temporaryQuantity = Math.floor(currentQuality);

            let sum = (Number(currentQuality - temporaryQuantity) * 1000).toFixed(0);

            if(!result[fruit]) {
                result[fruit] = 0;
            }

            result[fruit] += Number(temporaryQuantity);
            obj[fruit] = Number(sum);
        }
    }

    for (const line of array) {

        let [fruit, quantity] = line.split(` => `);
        quantity = Number(quantity);

        if(!obj[fruit]) {
            obj[fruit] = 0;
        }

        obj[fruit] += quantity;
        calculateBottle(fruit);
    }

    for (const juice in result) {
        
        console.log(`${juice} => ${result[juice]}`)
    }
}

juiceFlavors(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549'])

juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])