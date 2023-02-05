class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {

        horsepower = Number(horsepower);
        price = Number(price);
        mileage = Number(mileage);

        if(model === '' || !Number.isInteger(horsepower) || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error(`Invalid input!`)
        }

        this.availableCars.push({model: model, horsepower: horsepower, price: price, mileage: mileage});

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }

    sellCar(model, desiredMileage) {

        const car = this.availableCars.findIndex(c => c.model === model);

        if(car) {
            throw new Error(`${model} was not found!`);
        }

        const currentCar = this.availableCars[car]
        if(currentCar.mileage > desiredMileage) {
            if((currentCar.mileage - desiredMileage) <= 40000) {
                currentCar.price *= 0.95;
            } else {
                currentCar.price *= 0.90;
            }
        }

        
        this.soldCars.push({model: currentCar.model, horsepower: currentCar.horsepower, soldPrice: currentCar.price});
        this.totalIncome += currentCar.price;
        this.availableCars.splice(car, 1);
        return `${model} was sold for ${currentCar.price.toFixed(2)}$`
    }

    currentCar() {

        if(!this.availableCars.length) {
            throw new Error(`There are no available cars`);
        }

        const result = [];

        result.push(`-Available cars:`);
        for (const car of this.availableCars) {
            result.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`)
        }

        return result.join(`\n`);
    }

    salesReport(criteria) {

        if(criteria === 'horsepower') {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower);

        } else if(criteria === 'model') {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model))
        } else {
            throw new Error(`Invalid criteria!`);
        }

        const resultCars = [];
        resultCars.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        resultCars.push(`-${this.soldCars.length} cars sold:`)

        for (const sollCars of this.soldCars) {
            resultCars.push(`---${sollCars.model} - ${sollCars.horsepower} HP - ${sollCars.soldPrice.toFixed(2)}$`)
        }

        return resultCars.join(`\n`);
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('model'));