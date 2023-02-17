const { expect } = require('chai');
const lookupChar = require('./charLookup');

describe('Unit Char Lookup', () => {
    it('return undefine after given first papam number, array, obj', () => {
        expect(lookupChar(5)).to.be.undefined;
        expect(lookupChar([1 , 2 , 3])).to.be.undefined;
        expect(lookupChar([1 , '2' , 3])).to.be.undefined;
        expect(lookupChar({1: 4})).to.be.undefined;
    });

    it('test two param', () => {
        expect(lookupChar(0,0)).to.equal(undefined)
    });

    it('return undefine after given second papam string, array, obj', () => {
        expect(lookupChar(0, '0')).to.be.undefined;
        expect(lookupChar(0 ,[1 , 2 , 3])).to.be.undefined;
        expect(lookupChar(0, ['1' , '2' , '3'])).to.be.undefined;
        expect(lookupChar(0, {1: 4})).to.be.undefined;
        expect(lookupChar(0, {1: '4'})).to.be.undefined;
    });

    it('return undefine after given correct first type and floatin point second', () => {
        expect(lookupChar('abab' , 1.1)).to.be.undefined;
    });

    it('return Incorrect index after given 2 correct type or not correct index', () => {
        expect(lookupChar('ababab', 6)).to.be.equal('Incorrect index');
        expect(lookupChar('ababab', -1)).to.be.equal('Incorrect index');
    });

    it('return N after given correct sring Ni and index 0 and 1', () => {
        expect(lookupChar('Ni', 0)).to.be.equal('N');
        expect(lookupChar('Ni', 1)).to.be.equal('i');
    })
})