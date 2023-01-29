class OnlineShop {
    constructor(space,) {
        this.space = space;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, space) {
        quantity = Number(quantity);
        space = Number(space)

        if(this.space - space < 0) {
            throw new Error('Not enough space in the warehouse.');
        }

        this.space -= space;
        this.products.push({product, quantity})

        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, quantity) {
        quantity = Number(quantity);

        let produc = this.products.find(el => el.product === product);

        if(!produc) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        if(quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.')
        }

        if(produc.quantity >= quantity) {
            return `You have enough from product ${product}.`
        } else {
            let result = quantity - produc.quantity;
            produc.quantity = quantity //- produc.quantity;

            return `You added ${result} more from the ${product} products.`
        }
    }

    sellProduct(product) {

        let prod = this.products.find(pr => pr.product === product);

        if(!prod) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        prod.quantity--;

        let sale = this.sales.find(st => st.product === product);

        if(sale === undefined){
            this.sales.push({product, quantity: 0});
        }

        let sal = this.sales.find(st => st.product === product);
        sal.quantity++;

        return `The ${product} has been successfully sold.`
    }

    revision() {

        const lengthSale = this.sales.length
        if(lengthSale == 0){
            throw new Error('There are no sales today!');
        }

        let result = [];
        result.push(`You sold ${lengthSale} products today!`);
        result.push(`Products in the warehouse:`)

        for (const line of this.products) {
            result.push(`${line.product}-${line.quantity} more left`)
        }
        return result.join(`\n`);
    }
}

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());
