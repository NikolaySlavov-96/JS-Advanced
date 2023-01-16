class OnlineShop {
    constructor(space,) {
        this.space = space;
        this.products = {};
        this.sales = {};
    }

    loadingStore(product, quantity, space) {

        if(this.space - space < 0) {
            throw new Error('Not enough space in the warehouse.');
        }

        this.space -= space;
        this.products[product] = Number(quantity);

        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, quantity) {
        if(!this.products[product]) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        if(quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.')
        }

        const quanti = this.products[product];
        if(quanti >= quantity) {
            return `You have enough from product ${product}.`
        } else {
            this.products[product] = quantity - quanti;

            return `You added ${quantity - quanti} more from the ${product} products.`
        }
    }

    sellProduct(product) {
        if(!this.products[product]) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        this.products[product]--;

        if(!this.sales.hasOwnProperty(product)){
            this.sales[product] = 0;
        }
        this.sales[product]++;

        return `The ${product} has been successfully sold.`
    }

    revision() {

        const salesInput = Object.entries(this.sales);

        if(salesInput.length == 0){
            throw new Error('There are no sales today!');
        }
        let result = '';
        result += `You sold ${salesInput.length} products today!\n`;
        result += `Products in the warehouse:\n`

        for (const [product, quantity] of salesInput) {

            result += `${product}-${quantity} more left\n`
        }
        return result;
    }
}

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());
