function autoEngineeringCompany(arr) {

    const store = {};

    for (const line of arr) {

        const [car, model, quantity] = line.split(` | `);

        if(!store[car]) {
            store[car] = {}
        }

        if(!store[car][model]) {
            store[car][model] = 0;
        }

        store[car][model] += Number(quantity);
    }

    for (const car in store) {

        console.log(car);

        for (const model in store[car]) {
            console.log(`###${model} -> ${store[car][model]}`);
        }
    }
}

autoEngineeringCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])