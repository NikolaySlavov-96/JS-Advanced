const { expect } = require(`chai`);
const createCalculator = require("./addSubtract");


describe('Testing Calculator', () => {

    let call; 

    beforeEach(() => {
        call = createCalculator();
    })

    it('check value', () => {
        expect(call.get()).to.be.equal(0);
    })

    it('check 26 after add 24 and 2', () => {
        call.add(24);
        call.add(2);
        expect(call.get()).to.be.equal(26);
    });

    it('return -4 after substract -1 and 3', () => {
        call.subtract(1);
        call.subtract(3);
        expect(call.get()).to.be.equal(-4);
    });

    it('return NaN after add and subtract String letter', () => {
        call.add('Nikolay');
        expect(call.get()).to.be.NaN;
        call.subtract('Nikolay');
        expect(call.get()).to.be.NaN;
    });

    it('check return value after floatin 2.5 add 4.2', () => {
        call.add(2.5);
        call.add(4.2);
        expect(call.get()).to.be.equal(6.7);
    });

    it('check return value after floatin add 6.5 subtrackt 4.2 add 3.8', () => {
        call.add(6.4);
        call.subtract(4.2);
        call.add(3.8);
        expect(call.get()).to.be.equal(6);
    });

    it('check return after given string Number', () => {
        call.add('2');
        expect(call.get()).to.be.equal(2);
        call.subtract('2');
        expect(call.get()).to.be.equal(0);
    });

    it('check return valie after long add and subtrackt', () => {
        call.add(26);
        call.subtract(18);
        call.add(2);
        call.subtract(11);
        expect(call.get()).to.be.equal(-1);
    });
});