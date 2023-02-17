const { expect } = require(`chai`);
const {companyAdministration} = require(`./companyAdministration`);

describe('companyAdministration', () => {
    describe('hiringEmployee', () => {
        it('throw after different from programe', () => {
            expect(() => companyAdministration.hiringEmployee('Nikolay', 'Engineer', 3)).to.throw(`We are not looking for workers for this position.`)
        })
        it('check output after correct position', () => {
            expect(companyAdministration.hiringEmployee('Nikolay', 'Programmer', 3)).to.be.equal('Nikolay was successfully hired for the position Programmer.')
            expect(companyAdministration.hiringEmployee('Nikolay', 'Programmer', '4')).to.be.equal('Nikolay was successfully hired for the position Programmer.')
        })
        it('check not approved', () => {
            expect(companyAdministration.hiringEmployee('Nikolay', 'Programmer', 2)).to.be.equal('Nikolay is not approved for this position.')
        })
    })
    describe('calculateSalary', () => {
        it('throw afte given strin and array', () => {
            expect(() => companyAdministration.calculateSalary('0')).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary([])).to.throw('Invalid hours');
        })
        it('check negatin hours', () => { 
            expect(() => companyAdministration.calculateSalary(-1)).to.throw('Invalid hours');
        })
        it('hours over 160 hours and includes bonus', () => {
            expect(companyAdministration.calculateSalary(161)).to.be.equal(3415);
        })
        it('hours 160 and not includuin bonus', () => {
            expect(companyAdministration.calculateSalary(160)).to.be.equal(2400);
        })
        it('hours 100', () => { 
            expect(companyAdministration.calculateSalary(100)).to.be.equal(1500);
        })
    })
    describe('firedEmployee', () => {
        it('check throw', () => {
            expect(() => companyAdministration.firedEmployee('', 0)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee('Nikolay', 0)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Nikolay'], '0')).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Nikolay'], 1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Nikolay'], -1)).to.throw('Invalid input');
        })

        it('given correct info', () => {
            expect(companyAdministration.firedEmployee(['Nikolay', 'Pesho', 'Maria'], 2)).to.be.equal(`Nikolay, Pesho`);
        })
        it('given array of Names and index in border', () => {
            expect(companyAdministration.firedEmployee(['Nikolay'], 0)).to.be.equal('')
        })
    })
})