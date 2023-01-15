const { expect } = require('chai');
const {motorcycleRider} = require('./MotorcycleRider');


describe('motorcycleRider', () => {
    describe('licenseRestriction', () => {
        it('check return value after given AM', () => {
            expect(motorcycleRider.licenseRestriction('AM')).to.be.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
        })
        it('check return value after given A1', () => {
            expect(motorcycleRider.licenseRestriction('A1')).to.be.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
        })
        it('check return value after given A2', () => {
            expect(motorcycleRider.licenseRestriction('A2')).to.be.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.');
        })
        it('check return value after given A', () => {
            expect(motorcycleRider.licenseRestriction('A')).to.be.equal('No motorcycle restrictions, and the minimum age is 24.');
        })
        it('check after given other information and array', () => {
            expect(motorcycleRider.licenseRestriction.bind(motorcycleRider, 'A3')).to.throw(`Invalid Information!`);
            expect(motorcycleRider.licenseRestriction.bind(motorcycleRider, ['A1'])).to.throw("Invalid Information!")
            expect(motorcycleRider.licenseRestriction.bind(motorcycleRider, ['2'])).to.throw("Invalid Information!")
            expect(motorcycleRider.licenseRestriction.bind(motorcycleRider, 2)).to.throw("Invalid Information!")
        })
    });

    describe('motorcycleShowroom', () => {
        //Border case valid
        it('return result 2 after given first param [60, 120, 250] and second param 120', () => {
            expect(motorcycleRider.motorcycleShowroom([60, 120, 250], 120)).to.be.equal('There are 2 available motorcycles matching your criteria!');
        })
        it('return result 0 after given first param [60, 120, 250] and second param 50', () => {
            expect(motorcycleRider.motorcycleShowroom([60, 120, 250], 50)).to.be.equal('There are 0 available motorcycles matching your criteria!')
        })
        it("return result 2 after given first param [60, '120', 250] and secon 249", () => {
            expect(motorcycleRider.motorcycleShowroom([60, '120', 250], 249)).to.be.equal('There are 2 available motorcycles matching your criteria!')
        })

        //return Invalid Information
        it('return Invalid Information after given first string and second correct', () => {
            expect(motorcycleRider.motorcycleShowroom.bind(motorcycleRider, '2', 50)).to.throw('Invalid Information!');
        })
        it('returnt Invalid Information after given first emptu array and secon correct', () => {
            expect(motorcycleRider.motorcycleShowroom.bind(motorcycleRider, [], 50)).to.throw('Invalid Information!');
        })
        it('return Invalid Information after given first param Number and second correct', () => {
            expect(motorcycleRider.motorcycleShowroom.bind(motorcycleRider, 22, 50)).to.throw('Invalid Information');
        })
        it('returtn Invalid Information after given first correct and second string', () => {
            expect(motorcycleRider.motorcycleShowroom.bind(motorcycleRider, [120, 60, 240], '50')).to.throw('Invalid Information!');
        })
        it('return Invalid Information after given first correct and second Array', () => {
            expect(motorcycleRider.motorcycleShowroom.bind(motorcycleRider, [120, 60, 240], [50])).to.throw('Invalid Information');
        })
        it('return Invalid Information after given first correct and secodn under border', () => {
            expect(motorcycleRider.motorcycleShowroom.bind(motorcycleRider, [120, 60, 240], 49)).to.throw('Invalid Information!');
        })
    });

    describe('otherSpendings', () => {
        //Border case valid not discount
        it("return $600 after given ['helmet', 'jacked'], ['engine oil', 'oil filter'], false", () => {
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], false)).to.be.equal('You spend $600.00 for equipment and consumables!');
        })
        it("return $500.00 after given ['helmet', 'jacked'], [], false", () => {
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], [], false)).to.be.equal('You spend $500.00 for equipment and consumables!')
        })
        it("retunr $100.00 after given [], ['engine oil', 'oil filter'], false", () => {
            expect(motorcycleRider.otherSpendings([], ['engine oil', 'oil filter'], false)).to.be.equal('You spend $100.00 for equipment and consumables!')
        })
        it("return $0.00 afte given empty array and produc name out border", () => {
            expect(motorcycleRider.otherSpendings([], [], false)).to.be.equal('You spend $0.00 for equipment and consumables!')
            expect(motorcycleRider.otherSpendings(['helmet,'], ['engine oil,'], false)).to.be.equal('You spend $0.00 for equipment and consumables!')
        })

        //border case calid and Discount
        it("return $540.00 afte given ['helmet', 'jacked'], ['engine oil', 'oil filter'], true", () => {
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], true)).to.be.equal('You spend $540.00 for equipment and consumables with 10% discount!')
        })
        it("return $450 afte given ['helmet', 'jacked'], [], true", () => {
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], [], true)).to.be.equal('You spend $450.00 for equipment and consumables with 10% discount!')
        })    
        it("returm $90.00 after given [], ['engine oil', 'oil filter'], true", () => {
            expect(motorcycleRider.otherSpendings([], ['engine oil', 'oil filter'], true)).to.be.equal('You spend $90.00 for equipment and consumables with 10% discount!')
        })
        it("", () => {
            expect(motorcycleRider.otherSpendings(['helmet,'], ['engine oil,'], true)).to.be.equal('You spend $0.00 for equipment and consumables with 10% discount!')
        })

        //return Invalid Information
        it('return Invalid Infromation after given first param not array', () => {
            expect(motorcycleRider.otherSpendings.bind(motorcycleRider, 0, [], true)).to.throw('Invalid Information');
            expect(motorcycleRider.otherSpendings.bind(motorcycleRider, 0, [], false)).to.throw('Invalid Information');
        })
        it('return Invalid Information afgter given secon param not array', () => {
            expect(motorcycleRider.otherSpendings.bind(motorcycleRider, ['helmet'], 0, true)).to.throw('Invalid Information');
            expect(motorcycleRider.otherSpendings.bind(motorcycleRider, ['helmet'], 0, false)).to.throw('Invalid Information');
        })
        it('return Invalid Information after given last param not boolean', () => {
            expect(motorcycleRider.otherSpendings.bind(motorcycleRider, ['helmet'], ['engine'], 2)).to.throw('Invalid Information');
            expect(motorcycleRider.otherSpendings.bind(motorcycleRider, ['helmet'], ['engine'], 'true')).to.throw('Invalid Information');
            expect(motorcycleRider.otherSpendings.bind(motorcycleRider, ['helmet'], ['engine'], 'false')).to.throw('Invalid Information');
        })
    })
})
