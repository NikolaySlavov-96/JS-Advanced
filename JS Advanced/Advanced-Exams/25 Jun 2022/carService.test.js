const { expect } = require('chai');
const {carService} = require('./03. Car Service_Resources');

describe('carService', () => {
    describe('isItExpensive', () => {
        it('return more severe after send Engine or Transmission', () => {
            expect(carService.isItExpensive('Engine')).to.be.equal(`The issue with the car is more severe and it will cost more money`);
            expect(carService.isItExpensive('Transmission')).to.be.equal('The issue with the car is more severe and it will cost more money');
        })
        it('return overall price wiil be a bit cheaper after send other part', () => {
            expect(carService.isItExpensive('wheel')).to.be.equal('The overall price will be a bit cheaper');
        })
        it('return overall price wiil be a bit cheaper after send other part', () => {
            expect(carService.isItExpensive('door')).to.be.equal('The overall price will be a bit cheaper');
        })
    })
    
    describe('discount', () => {
        it('return "You cannot apply a discount" after given 1 and 2', () => {
            expect(carService.discount(1, 10)).to.be.equal("You cannot apply a discount");
            expect(carService.discount(2, 10)).to.be.equal("You cannot apply a discount");
        })

        it('return discoutn 15% after send parts 3 or 7', () => { 
            expect(carService.discount(3, 10)).to.be.equal(`Discount applied! You saved 1.5$`);
            expect(carService.discount(7, 10)).to.be.equal(`Discount applied! You saved 1.5$`);
        })

        it('return discount 30% after send parts more from 7', () => {
            expect(carService.discount(8, 10)).to.be.equal('Discount applied! You saved 3$')
        })

        it('return throw after given string and array first param', () => {
            expect(carService.discount.bind(carService, '0', 10)).to.throw('Invalid input');
            expect(carService.discount.bind(carService, [2], 10)).to.throw('Invalid input');
        })
        it('return throw after given array or strin second param', () => {
            expect(carService.discount.bind(carService, 3 , '10')).to.throw('Invalid input');
            expect(carService.discount.bind(carService, 3, [10])).to.throw('Invalid input');
        })
    })

    describe('partsToBuy', () => { 
        it('return 0 after send partsCatalog empty array', () => {
            expect(carService.partsToBuy([], ["blowoff valve", "injectors"])).to.be.equal(0);
        })
        it('return price after given one parts', () => {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "injectors"])).to.be.equal(145);
        })
        it('return 0 after given not correct string in array', () => {
            expect(carService.partsToBuy([{ part: "blowoffvalve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "injectors"])).to.be.equal(0);
        })
        it('return price after given two parts', () => {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "coil springs"])).to.be.equal(375);
        })
        it('return 0 afte given second array empyt', () => {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], [])).to.be.equal(0)
        })

        it('return throw after given first param not array', () => { 
            expect(carService.partsToBuy.bind(carService, '0', ["blowoff valve", "coil springs"])).to.throw('Invalid input');
            expect(carService.partsToBuy.bind(carService, {0: 0}, ["blowoff valve", "coil springs"]))
        })
        it('return throw afte given second param not array', () => {
            expect(carService.partsToBuy.bind(carService, [{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], '0')).to.throw('Invalid input');
            expect(carService.partsToBuy.bind(carService, [{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], 0)).to.throw('Invalid input');
        })
    })
})