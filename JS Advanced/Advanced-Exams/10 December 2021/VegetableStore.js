class VegetableStore {
    constructor(nameOwner, addresOwner) {
        this.owner = nameOwner;
        this.location = addresOwner;
        this.availableProducts = [];
    }

    loadingVegetables(vegetablesArr) {

        const currentAdded = [];

        for (const vegetable of vegetablesArr) {
            let [typeIn, quantityIn, priceIn] = vegetable.split(' ');
            quantityIn = Number(quantityIn)
            const vege = this.availableProducts.find(v => v.type == typeIn);
            if(!vege) {
                currentAdded.push(typeIn);
                this.availableProducts.push({type: typeIn, quantity: quantityIn, price: priceIn});
            } else {
                vege.quantity += Number(quantityIn);
    
                if(vege.price < priceIn) {
                    vege.price = priceIn;
                }
            }
        }
        return `Successfully added ${currentAdded.join(`, `)}`
    }

    buyingVegetables(arr) {

        let totalPrice = 0;
        
        for(const prodict of arr) {
            const [typeProduct, quantity] = prodict.split(` `);

            const checkType = this.availableProducts.find(v => v.type === typeProduct);

            if(!checkType) {
                throw new Error(`${typeProduct} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }
            
            if(Number(checkType.quantity) < Number(quantity)) {
                throw new Error(`The quantity ${quantity} for the vegetable ${typeProduct} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            checkType.quantity -= Number(quantity);
            totalPrice += Number(checkType.price) * Number(quantity);
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }
    rottingVegetable(typeIn, quantityIn) {
        const check = this.availableProducts.find(vege => vege.type === typeIn);

        if(!check) {
            throw new Error(`${typeIn} is not available in the store.`);
        }

        if(check.quantity < quantityIn) {
            check.quantity = 0;
            return `The entire quantity of the ${typeIn} has been removed.`
        }

        check.quantity -= Number(quantityIn);
        return `Some quantity of the ${typeIn} has been removed.`
    }

    revision() {
        const resut = [];

        resut.push("Available vegetables:");

        const sorts = this.availableProducts.sort((a, b) => a.price - b.price);
        for(const product of sorts) {
            resut.push(`${product.type}-${product.quantity}-$${product.price}`)
        }

        resut.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

        return resut.join(`\n`)
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());