const { expect } = require(`chai`);
const isOddOrEven = require('./evenOrOdd');

describe('evenOrOdd', () => {
    it('return undefine after send number', () => {
        expect(isOddOrEven(5)).to.be.undefined;
    });

    it('return undefine after send array and Object', () => {
        expect(isOddOrEven([4, 5])).to.be.undefined;
        expect(isOddOrEven({name: 5})).to.be.undefined;
    });

    it('return even after given abab', () => {
        expect(isOddOrEven('abab')).to.be.equal('even');
    });

    it('return odd after given aba', () => {
        expect(isOddOrEven('aba')).to.be.equal('odd');
    });
});