const { expect } = require('chai');
const sum = require(`./sumNumbers`);

    describe('sumOfNumbers', () => {
        it('check work array' , () => {
            expect(sum([5 , 5])).to.equal(10 , "didn't work 5 to 5")
        });

        it('check 4 numbers' , () => {
            expect(sum([10 , 10 , 20, 30])).to.equal(70 , "don't work is 4 number in array")
        });

        it('check strcing in arr' , () => {
            expect(sum([10 , '4' , 8])).to.equal(22 , 'not work is sting');
        });
    })