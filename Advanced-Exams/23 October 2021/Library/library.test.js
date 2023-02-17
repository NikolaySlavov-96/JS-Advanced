const { expect } = require('chai');
const { library } = require('./library');

describe('library', () => {
    describe('calcPriceOfBook', () => {
        it('throw after given incorrect first param', () => {
            expect(() => library.calcPriceOfBook(0, 1996)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook([], 1996)).to.throw('Invalid input');
        })
        it('throw after given incorrect second param', () => {
            expect(() => library.calcPriceOfBook('Equal', '1996')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('Equal', ['1996'])).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('Equal', 1996.5)).to.throw('Invalid input');
        })

        it('whole price', () => {
            expect(library.calcPriceOfBook('Equal', 1996)).to.be.equal('Price of Equal is 20.00');
            expect(library.calcPriceOfBook('Equal', 1981)).to.be.equal('Price of Equal is 20.00');
        });
        it('discount price', () => {
            expect(library.calcPriceOfBook('Equal', 1980)).to.be.equal('Price of Equal is 10.00');
            expect(library.calcPriceOfBook('Equal', 1979)).to.be.equal('Price of Equal is 10.00');
        })
    })

    describe('finBook', () => {
        it('return found search book', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "Troy")).to.be.equal('We found the book you want.')
        })
        it('return not found search book', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "Equal")).to.be.equal('The book you are looking for is not here!');
        })

        it('return throw after empty arr', () => {
            expect(() => library.findBook([], 'Equal')).to.throw('No books currently available');
        })
    })

    describe('arrangeBooks', () => {
        it('throw not integer or negativ number', () => {
            expect(() => library.arrangeTheBooks(0.5)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
        })

        it('return Great job', () => {
            expect(library.arrangeTheBooks(40)).to.be.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(39)).to.be.equal('Great job, the books are arranged.');
        });
        it('return not Enought space', () => {
            expect(library.arrangeTheBooks(41)).to.be.equal('Insufficient space, more shelves need to be purchased.');
        })
    })
})