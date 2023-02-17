const { expect } = require('chai');
const {movieTheater} = require('./03. Movie Theater _Resources');

describe('movieTheater', () => {
    describe('ageRestrictions', () => {
        it('return All ages after given G', () => {
            expect(movieTheater.ageRestrictions('G')).to.be.equal('All ages admitted to watch the movie');
        })
        it('return Parental guidance after send PG', () => {
            expect(movieTheater.ageRestrictions('PG')).to.be.equal('Parental guidance suggested! Some material may not be suitable for pre-teenagers');
        })
        it('return Restriction! Under 17 after given R', () => {
            expect(movieTheater.ageRestrictions('R')).to.be.equal('Restricted! Under 17 requires accompanying parent or adult guardian')
        })
        it('return No one under 17 after given NC-17', () => {
            expect(movieTheater.ageRestrictions('NC-17')).to.be.equal('No one under 17 admitted to watch the movie')
        })
        it('return There are no age restriction after send out range', () => {
            expect(movieTheater.ageRestrictions('A')).to.be.equal('There are no age restrictions for this movie')
            expect(movieTheater.ageRestrictions('B')).to.be.equal('There are no age restrictions for this movie')
            expect(movieTheater.ageRestrictions('C')).to.be.equal('There are no age restrictions for this movie')
        })
    })

    describe('moneySpent', () => {
        it('return throw after given out type value', () => {
            expect(movieTheater.moneySpent.bind(movieTheater, '0', ['Nachos'], ['Soda'])).to.throw('Invalid input');
            expect(movieTheater.moneySpent.bind(movieTheater, 0, 'Nachos', ['Soda'])).to.throw('Invalid input');
            expect(movieTheater.moneySpent.bind(movieTheater, 0, ['Nachos'], 'Soda')).to.throw('Invalid input');
        })
        it('return total cost after send 1 ticket and array from food and drinks', () => {
            expect(movieTheater.moneySpent(1, ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.be.equal('The total cost for the purchase is 29.50');
            expect(movieTheater.moneySpent(1, ['Nachos', 'Popcorn', 'Nik'], ['Soda', 'Water', 'Nik'])).to.be.equal('The total cost for the purchase is 29.50');
        })
        it('return total costs and discount after send 2 ticket and array from food and drinks', () => {
            expect(movieTheater.moneySpent(2, ['Nachos', 'Popcorn', 'Nachos'], ['Soda', 'Water'])).to.be.equal('The total cost for the purchase with applied discount is 40.40')
        })

        it('return value after given one param ticket', () => {
            expect(movieTheater.moneySpent(1, [], [])).to.be.equal('The total cost for the purchase is 15.00')
        })

        it('expect after given 0 tickets and only food or drinks', () => {
            expect(movieTheater.moneySpent(0, ['Nachos', 'Popcorn'], [])).to.be.equal('The total cost for the purchase is 10.50');
            expect(movieTheater.moneySpent(0, [], ['Soda', 'Water'])).to.be.equal('The total cost for the purchase is 4.00');
        })
    })

    describe('reservation', () => {
        it('return throw after send first param not array and second correct', () => {
            expect(movieTheater.reservation.bind(movieTheater, '1', 1)).to.throw('Invalid input');
            expect(movieTheater.reservation.bind(movieTheater, 1, '1')).to.throw('Invalid input');
        })
        it('return throw after send first param empty array and second param string', () => {
            expect(movieTheater.reservation.bind(movieTheater, [{rowNumber: 1, freeSeats: 7}, {rowNumber: 2, freeSeats: 5}], '1')).to.throw('Invalid input')
        })

        it('return correct after send correct array and seat', () => { 
            expect(movieTheater.reservation([{rowNumber: 1, freeSeats: 7}, {rowNumber: 2, freeSeats: 5}], 7)).to.be.equal(1)
            expect(movieTheater.reservation([{rowNumber: 1, freeSeats: 7}, {rowNumber: 2, freeSeats: 5}], 5)).to.be.equal(2)
        })
        it('return correct after send big number', () => {
            expect(movieTheater.reservation([{rowNumber: 1, freeSeats: 1}, {rowNumber: 2, freeSeats: 1}, {rowNumber: 3, freeSeats: 5}], 4)).to.be.equal(3);
        })
        // it('return throw after send floatin point number ? ', () => {
        //     // expect(movieTheater.reservation.bind(movieTheater, [], 2.2)).to.throw('Invalid input')
        // })
    })
})