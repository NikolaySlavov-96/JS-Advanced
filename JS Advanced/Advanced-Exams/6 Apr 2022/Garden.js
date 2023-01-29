class Garden {
    constructor(space) {
        this.spaceAvailable = Number(space);
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        spaceRequired = Number(spaceRequired);
        // if(name !== 'string' || spaceRequest !== 'number') 
        if(this.spaceAvailable < spaceRequired) {
            throw new Error("Not enough space in the garden.");
        }
        this.spaceAvailable -= spaceRequired;
        this.plants.push({plantName, spaceRequired, ripe: false, quantity: 0});

        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity) {
        quantity = Number(quantity)

        let plants = this.plants.find(el => el.plantName === plantName);

        if(!plants) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if(plants.ripe === true) {
            throw new Error(`The ${plantName} is already ripe.`);
        }

        if(quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }

        plants.ripe = true;
        plants.quantity += quantity;

        if(quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`
        }
    }
    
    harvestPlant(plantName) {
        let plants = this.plants.find(el => el.plantName === plantName);

        if(!plants) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }

        if(plants.ripe === false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        this.storage.push({plantName: plants.plantName, quantity: plants.quantity})
        this.spaceAvailable += plants.spaceRequired;
        this.plants.splice(this.plants.findIndex(e => e.plantName === plantName), 1)
        return `The ${plantName} has been successfully harvested.`
    }

    generateReport() {
        const result = [];

        result.push(`The garden has ${this.spaceAvailable} free space left.`);
        let plantInGarder = [];
        this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName)).map(pl => plantInGarder.push(pl.plantName));
        result.push(`Plants in the garden: ${plantInGarder.join(`, `)}`)

        if(this.storage.length === 0) {
            result.push(`Plants in storage: The storage is empty.`)
        } else {
            let storsResult = [];
            this.storage.map(el => storsResult.push(`${el.plantName} (${Number(el.quantity)})`));
            result.push(`Plants in storage: ${storsResult.join(`, `)}`)
        }

        return result.join(`\n`)
    }
}

//In 1
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));

//In 2
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('orange', 4));

//In 3
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('olive', 30));

//In 4
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('cucumber', -5));

//In 5
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('olive'));

//In 6
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('raspberry'));

//In 7
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('orange'));
// console.log(myGarden.generateReport());