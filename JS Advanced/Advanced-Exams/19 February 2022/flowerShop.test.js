const { expect } = require(`chai`);
const {flowerShop} = require('./flowerShop');

describe('flowerShop', () => {
    describe('calcPriceOfFlowers', () => {
        it('check first param', () => {
            expect(() => flowerShop.calcPriceOfFlowers(0, 0, 0)).to.throw(`Invalid input!`);
        })
        it('check second param', () => {
            expect(() => flowerShop.calcPriceOfFlowers('rose', '0', 0)).to.throw(`Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers('rose', '0', 0.5)).to.throw(`Invalid input!`);
        })
        it('check last param', () => {
            expect(() => flowerShop.calcPriceOfFlowers('rose', 0, '0')).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('rose', 0.5, '0')).to.throw('Invalid input!');
        })

        it('check result after given correct param intiger number', () => {
            expect(flowerShop.calcPriceOfFlowers('rose', 10, 1)).to.be.equal('You need $10.00 to buy rose!')
            expect(flowerShop.calcPriceOfFlowers('rose', 10, 2)).to.be.equal('You need $20.00 to buy rose!')
        })
    })

    describe('checkFlowersAvailable', () => {
        it('check available result', () => {
            expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"])).to.be.equal(`The Rose are available!`)
        })
        it('check are sold result', () => {
            expect(flowerShop.checkFlowersAvailable('Rose',["Lily", "Orchid"])).to.be.equal(`The Rose are sold! You need to purchase more!`)
        })
    })

    describe('sellFlowers', () => {
        it('check after send correct info', () => {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1)).to.be.equal('Rose / Orchid');
            expect(flowerShop.sellFlowers(["Rose"], 0)).to.be.equal('');
        })
        it('check invalid input', () => {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], '1')).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -1)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 3)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers('Rose', 0)).to.throw('Invalid input!');
        })
    })
})