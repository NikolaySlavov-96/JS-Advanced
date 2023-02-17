const { expect } = require('chai');
const {bookSelection} = require('./bookSelection');

describe('bookSelection', () => {
    describe('isGenreSuitable', () => {
        it('return suitable for kids after given 12 age, and Thriller', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.be.equal('Books with Thriller genre are not suitable for kids at 12 age')
            expect(bookSelection.isGenreSuitable('Thriller', 6)).to.be.equal('Books with Thriller genre are not suitable for kids at 6 age')
        })
        it('return suitable for kids after given 12 age, and Horror', () => {
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.be.equal('Books with Horror genre are not suitable for kids at 12 age')
            expect(bookSelection.isGenreSuitable('Horror', 6)).to.be.equal('Books with Horror genre are not suitable for kids at 6 age')
        })
        it('return Those books are suitable', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 13)).to.be.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Horror', 13)).to.be.equal('Those books are suitable');
        })
    })

    describe('isItAffordable', () => {
        it('return throw after given first param string and array of number', () => {
            expect(bookSelection.isItAffordable.bind(bookSelection, '10', 10)).to.throw('Invalid input');
            expect(bookSelection.isItAffordable.bind(bookSelection, [10], 10)).to.throw('Invalid input');
        })
        it('return  throw afte given second param string and array of number', () => {
            expect(bookSelection.isItAffordable.bind(bookSelection, 10, '10')).to.throw('Invalid input');
            expect(bookSelection.isItAffordable.bind(bookSelection, 10, [10])).to.throw('Invalid input');
        })

        it('return enought money after given price 11 budget 10', () => {
            expect(bookSelection.isItAffordable(11, 10)).to.be.equal("You don't have enough money");
        })
        it('return Book bought afte given price 10 and budget 10', () => {
            expect(bookSelection.isItAffordable(10, 10)).to.be.equal("Book bought. You have 0$ left")
        })
        it('return Book bought afte given price 10 and budget 11', () => {
            expect(bookSelection.isItAffordable(10, 11)).to.be.equal("Book bought. You have 1$ left")
        })
    })

    describe('suitableTitles', () => {
        it('return throw afte given first param not array', () => {
            expect(bookSelection.suitableTitles.bind(bookSelection, 'Thriller', 'Thriller')).to.throw('Invalid input');
        })
        it('return throw afte given second param not string', () => {
            expect(bookSelection.suitableTitles.bind(bookSelection, [{ title: "The Da Vinci Code", genre: "Thriller" }]), ['Thriller']).to.throw('Invalid input');
        })

        it('return correct afte given', () => { 
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "The Wither", genre: "Thriller" }], 'Thriller')).to.deep.equal([ "The Da Vinci Code", "The Wither" ])
        })
        it('return correct afte given', () => { 
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 'Thriller')).to.deep.equal([ "The Da Vinci Code" ])
        })
    })
})