class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age;
        this.email = email
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }

    static cheer() {
        return 'Woo hoo!';
    }

    static compareTo(a,b) {
        return a.age - b.age;
    }
}





const person1 = new Person('John', 'Smith', 32, 'John@smith.com')
const person2 = new Person('Chocho', 'Petkov', 18, 'chocho@petkov.com')
const person3 = new Person('Mikel', 'Faraj', 40, 'Mikel@Faraj.com')


const people = [person1, person2, person3];
people.sort((a,b) => Person.compareTo(a,b));

console.log(people)