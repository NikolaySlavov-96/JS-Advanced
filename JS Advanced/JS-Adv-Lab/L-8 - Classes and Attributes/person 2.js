class Person {
    constructor(firName, lasName, age, em) {
        this.firstName = firName,
        this.lastName = lasName,
        this.age = age,
        this.email = em
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');

console.log(person.toString());