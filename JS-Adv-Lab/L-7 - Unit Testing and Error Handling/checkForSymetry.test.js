const { expect } = require("chai");
const isSymmetric = require("./checkForSymetry");

describe('checking isSymmetric' , () => {
    it('chekc' , () => {
        expect(isSymmetric([1 , 2 , 2 , 1])).to.be.true;
    });

    it('check' , () => {
        expect(isSymmetric([1 , 2 , 1])).to.be.true;
    });

    it('check' , () => {
        expect(isSymmetric([1 , 2 , '1'])).to.be.false;
    });

    it('check' , () => {
        expect(isSymmetric([1 , 2 , 3])).to.be.false;
    });

    it('check' , () => {
        expect(isSymmetric(['a' , 'b' , 'b' , 'a'])).to.be.true;
    });

    it('chech' , () => {
        expect(isSymmetric(5)).to.be.false;
    });

    it('check' , () => {
        expect(isSymmetric('abba')).to.be.false;
    });
})
