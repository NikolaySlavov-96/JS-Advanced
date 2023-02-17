const { expect } = require(`chai`);
const mathEnforcer = require(`./mathEnforcer`);

describe('matchEnforce', () => {
    describe('addFive', () => {

        it('return sum after given tyme Number', () => {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
        });
        
        it('return sum after given negatim Number', () => {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });

        it('return undefine after given string', () => {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
            expect(mathEnforcer.addFive('5.5')).to.be.undefined;
        });

        it('return undefine after given array', () => {
            expect(mathEnforcer.addFive([10])).to.be.undefined;
        });

        it('return sum after given floating point Number', () => {
            expect(mathEnforcer.addFive(0.5)).to.be.closeTo(5.5, 0.1);
        });
    });

    describe('subtrackTen', () => {

        it('return sum after given tyme Number', () => {
            expect(mathEnforcer.subtractTen(20)).to.be.equal(10);
        })

        it('return undefine after given string', () => {
            expect(mathEnforcer.subtractTen('5')).to.be.undefined;
            expect(mathEnforcer.subtractTen('5.5')).to.be.undefined;
        })

        it('retrn undefine after given array', () => {
            expect(mathEnforcer.subtractTen([10])).to.be.undefined;
        })

        it('return value after given negativ number', () => {
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
        });

        it('return value after given float point Number', () => {
            expect(mathEnforcer.subtractTen(10.5)).to.be.closeTo(0.5, 0.1);
        });
    });

    describe('sum', () => {

        it('return result after given tyme Number', () => {
            expect(mathEnforcer.sum(10, 10)).to.be.equal(20);
        });

        it('return value after given negativ Number', () => {
            expect(mathEnforcer.sum(-10 , 10)).to.be.equal(0);
            expect(mathEnforcer.sum(-10 , -10)).to.be.equal(-20);
        });

        it('return undefine after given string', () => {
            expect(mathEnforcer.sum('5', 5)).to.be.undefined;
            expect(mathEnforcer.sum(5, '5')).to.be.undefined;
            expect(mathEnforcer.sum('5', '5')).to.be.undefined;
            expect(mathEnforcer.sum('5', '5.5')).to.be.undefined;
            expect(mathEnforcer.sum('5.5', '5')).to.be.undefined;
        });

        it('return undefine after given array', () => {
            expect(mathEnforcer.sum([5 , 5], 10)).to.be.undefined;
            expect(mathEnforcer.sum(10, [5 , 5])).to.be.undefined;
            expect(mathEnforcer.sum([5], [5])).to.be.undefined;
        });

        it('return value after given float point Number', () => {
            expect(mathEnforcer.sum(10.5, 5.2)).to.be.closeTo(15.7, 0.1)
        })
    });
});
