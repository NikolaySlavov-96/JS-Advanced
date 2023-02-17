const { expect } = require('chai');
const { chooseYourCar } = require('./chooseYourCar');

describe('chooseYourCar', () => {
    describe('choosingType', () => {
        it('return throw after send year less 1900', () => {
            expect(chooseYourCar.choosingType.bind(chooseYourCar, '', '', 1899)).to.throw('Invalid Year!');
        })
        it('return throw after send year more 2022', () => { 
            expect(chooseYourCar.choosingType.bind(chooseYourCar, '', '', 2023)).to.throw('Invalid Year!');
        })
        it('return throw after send type different from Sedan', () => {
            expect(chooseYourCar.choosingType.bind(chooseYourCar, 'Hedgebeck', '', 2020)).to.throw('This type of car is not what you are looking for.');
        })
        
        it('return correct afte given year 2010 and Black', () => {
            expect(chooseYourCar.choosingType('Sedan', 'black', 2010)).to.be.equal('This black Sedan meets the requirements, that you have.')
        });
        it('return correct after given year less 2010', () => {
            expect(chooseYourCar.choosingType('Sedan', 'black', 2009)).to.be.equal('This Sedan is too old for you, especially with that black color.')
        })
    })

    describe('brandName', () => {
        it('return throw after send first par not arr.', () => {
            expect(chooseYourCar.brandName.bind(chooseYourCar, '0', 0)).to.throw('Invalid Information!');
            // expect(chooseYourCar.brandName.bind(chooseYourCar, 0, 0)).to.throw('Invaluid Information!');
        });
        it('return throw after send first par correct and second not', () => {
            expect(chooseYourCar.brandName.bind(chooseYourCar, ['Mercedes'], '0')).to.throw('Invalid Information!');
            expect(chooseYourCar.brandName.bind(chooseYourCar, ['Mercedes'], -1)).to.throw('Invalid Information!');
            expect(chooseYourCar.brandName.bind(chooseYourCar, ['Mercedes'], 1)).to.throw('Invalid Information!');
        });
        if('return throw after send arr empty and param', () => {
            expect(chooseYourCar.brandName.bind(chooseYourCar, [], 0)).to.throw('Invalid Information!');
        })
        it('return correct', () => {
            expect(chooseYourCar.brandName(['Mercedes', 'BMW', 'Audi', 'Ford'], 1)).to.be.equal('Mercedes, Audi, Ford')
        })
    })

    describe('carFuelConsumption', () => {
        it('return throw after send first param not numner and second not number', () => { 
            expect(chooseYourCar.carFuelConsumption.bind(chooseYourCar, '0', 0)).to.throw('Invalid Information!');
            expect(chooseYourCar.carFuelConsumption.bind(chooseYourCar, 0, '0')).to.throw('Invalid Information!');
        });
        it('return trow after send first and second param negativ', () => {
            expect(chooseYourCar.carFuelConsumption.bind(chooseYourCar, -1, 0)).to.throw('Invalid Information!');
            expect(chooseYourCar.carFuelConsumption.bind(chooseYourCar, 0, -1)).to.throw('Invalid Information!');
        })

        it('return correct after send equal per 7 litter', () => {
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.be.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
        });
        it('return correct after send per 2.2 liier', () => {
            expect(chooseYourCar.carFuelConsumption(100, 2.2)).to.be.equal('The car is efficient enough, it burns 2.20 liters/100 km.')
        })
        it('return correct after send more per 7 liter', () => {
            expect(chooseYourCar.carFuelConsumption(100, 7.1)).to.be.equal('The car burns too much fuel - 7.10 liters!')
        })
    })
})
