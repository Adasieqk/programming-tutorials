// nested objects = objects inside of other objects, allows to represent more complex data structures
// child object is enclosed by a parent object

// Person{Adress{}, ContactInfo{}}
// ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}


// const person = {
//     name: "Spongebob Squarepants",
//     age: 30,
//     isStudent: true,
//     hobbies: ["karate", "jellyfishing", "cooking"],
//     address: {
//         street: "124 Conch st.",
//         city: "bikini bottom",
//         country: "international waters"
//     }
// }

// // console.log(person.hobbies[2]);
// // console.log(person.address.city);

// for (const property in person.address) {
//     console.log(person.address[property]);
// }




class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "124 asdasd", "bikini bottom", "int wotas");
const person2 = new Person("patrick", 37, "128 adbs", "bikini bottom", "int wotas");
const person3 = new Person("squid", 45, "126 asdads", "bikini bottom", "int wotas");

console.log(person3.name, person3.age, person3.address.country);