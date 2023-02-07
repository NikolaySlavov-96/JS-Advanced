class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if((this.capacity - this.books.length) == 0) {
            throw new Error(`Not enough space in the collection.`);
        } 
        
        this.books.push({bookName, bookAuthor, payed: false});

        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName) {

        const book = this.books.find(b => b.bookName === bookName);

        if(!book) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if(book.payed === true) {
            throw new Error(`${bookName} has already been paid.`);
        }

        book.payed = true;
        return `${bookName} has been successfully paid.`
    }

    removeBook(bookName) {

        const bookIndex = this.books.findIndex(b => b.bookName === bookName);

        const book = this.books[bookIndex];

        if(!book) {
            throw new Error(`The book, you're looking for, is not found.`);
        }

        if(book.payed === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        this.books.splice(bookIndex, 1);
        return `${bookName} remove from the collection.`
    }

    getStatistics(bookAuthors) {

        if(bookAuthors === undefined) {

            const sort = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            const result = [];
            result.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`);

            for(const book of sort) {
                result.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid' }.`);
            }    
            return result.join(`\n`)
        } else {
            const authot = this.books.find(a => a.bookAuthor === bookAuthors);
    
            if(!authot) {
                throw new Error(`${bookAuthors} is not in the collection.`)
            }
            
            return `${authot.bookName} == ${authot.bookAuthor} - ${authot.payed ? 'Has Paid' : 'Not Paid'}.`
        }
    }
}

const library = new LibraryCollection(2)
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.getStatistics('Miguel de Cervantes'));