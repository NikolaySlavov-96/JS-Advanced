const { expect } = require(`chai`);
const { rentCar } = require(`./rentCar`);

describe('rentCar', () => {
    describe('searchCar', () => {
        it('check throw afte given first outrange param', () => {
            expect(() => rentCar.searchCar('0', '0')).to.throw("Invalid input!")
        })
        it('check throw afte given second outrange param', () => {
            expect(()=> rentCar.searchCar(['Mercedes'], 0)).to.throw("Invalid input!");
        })

        it('check is notequal element', () => {
            expect(() => rentCar.searchCar(['Mercedes', 'BMW'], 'Audi')).to.throw('There are no such models in the catalog!')
        })
        
        it('check is correct param', () => {
            expect(rentCar.searchCar(['Mercedes', 'BMW', 'Mercedes'], 'Mercedes')).to.be.equal('There is 2 car of model Mercedes in the catalog!')
        })
    })
    describe('calculatePriceOfCar', () => {
        it('check throw afte given first out range param', () => {
            expect(() => rentCar.calculatePriceOfCar(5, 1)).to.throw("Invalid input!");
        })
        it('check throw afte given second param floatpoint', () => {
            expect(() => rentCar.calculatePriceOfCar(5, 1.5)).to.throw("Invalid input!");
        })
        it('check throw after given second out range param', () => {
            expect(() => rentCar.calculatePriceOfCar('Mercedes', '5')).to.throw("Invalid input!");
        })
        it('check throw afte given not includes model', () => { 
            expect(() => rentCar.calculatePriceOfCar('Ferrary', 1)).to.throw('No such model in the catalog!');
        })

        it('check return price afte given Meredes 1 days', () => {
            expect(rentCar.calculatePriceOfCar('Mercedes', 1)).to.be.equal(`You choose Mercedes and it will cost $50!`)
        })
        it('check return price afte given Audi 3 days', () => {
            expect(rentCar.calculatePriceOfCar('Audi', 3)).to.be.equal(`You choose Audi and it will cost $108!`)
        })
    })
    describe('checkBudget', () => {
        it('check throw after given our range param', () => {
            expect(() => rentCar.checkBudget('1', 1, 1)).to.throw("Invalid input!");
            expect(() => rentCar.checkBudget(1, '1', 1)).to.throw("Invalid input!");
            expect(() => rentCar.checkBudget(1, 1, '1')).to.throw("Invalid input!");
        })
        it('check throw after given floatpoint', () => {
            expect(() => rentCar.checkBudget('1.5', 1.5, 1.5)).to.throw("Invalid input!");
            expect(() => rentCar.checkBudget(1.5, '1.5', 1.5)).to.throw("Invalid input!");
            expect(() => rentCar.checkBudget(1.5, 1.5, '1.5')).to.throw("Invalid input!");
        })

        it('check You rent a car to equal budget', () => {
            expect(rentCar.checkBudget(50, 1, 50)).to.be.equal(`You rent a car!`);
        })
        it('check You rent a car to more budget', () => {
            expect(rentCar.checkBudget(50, 1, 51)).to.be.equal(`You rent a car!`);
        })
        it('check You need a budget to send less budget', () => {
            expect(rentCar.checkBudget(50, 1, 49)).to.be.equal(`You need a bigger budget!`)
        })
    })
})