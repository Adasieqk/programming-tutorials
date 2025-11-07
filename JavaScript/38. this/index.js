// this = reference to the object where THIS is used
// (the object depends on the immediate context)
// person.name = this.name

const person1 = {
    name: "name1",
    favFood: "hamburgers",
    sayHello: function () { console.log(`Hi im ${this.name}`) },  // doesnt work on arrow function !!!
    eat: function () { console.log(`${this.name} is eating ${this.favFood}`) }
}

const person2 = {
    name: "name2",
    favFood: "pizza",
    sayHello: function () { console.log(`Hi im ${this.name}`) },  // doesnt work on arrow function
    eat: function () { console.log(`${this.name} is eating ${this.favFood}`) }
}

person1.sayHello();
person1.eat();

person2.sayHello();
person2.eat();