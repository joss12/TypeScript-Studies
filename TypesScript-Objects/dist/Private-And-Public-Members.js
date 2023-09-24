"use strict";
class Book {
    constructor(title, author, ISBN, numCopies, verified) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
        this.verified = verified;
        this.title = title;
        ;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
        this.verified = verified;
    }
    getAvaibility() {
        return this.getBook();
    }
    getBook() {
        if (this.numCopies === 0) {
            return "Out of stock";
        }
        else if (this.numCopies < 10) {
            return "Low stock";
        }
        return "In stock";
    }
    sell(numCopiesSold = 1) {
        this.numCopies -= numCopiesSold;
    }
    stock(numCopiesStocked = 5) {
        this.numCopies += numCopiesStocked;
    }
    getVerification() {
        return this.verified;
    }
}
const JsBook = new Book("TypeScript", "Eddy Mouity", 123456, 5, true);
console.log(JsBook.getBook());
JsBook.stock(12);
console.log(JsBook.getBook());
JsBook.sell(17);
console.log(JsBook.getBook());
console.log(JsBook.getVerification());
