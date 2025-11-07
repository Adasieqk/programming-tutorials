// object = a collection of related properties and/or methods
// can represent real world objects (people, products, places)

// object = {key: value; function()}


const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function () {
        console.log("Hi! I am spongebob")
    },
    eat: () => console.log("Im eating food1")
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => console.log("hey im patrick"),
    eat: () => console.log("Im eating food2")
}

console.log(person1.firstName, person1.lastName, person1.age, person1.isEmployed);
console.log(person2.firstName, person2.lastName, person2.age, person2.isEmployed);

person1.sayHello();
person2.sayHello();
person1.eat();
person2.eat();