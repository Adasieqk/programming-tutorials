// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property




// const Person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "NO",
//     get lang() {
//         return this.language;
//     },
//     set lang(value) {
//         this.language = value;
//     }
// };

// // Set an object property using a setter:
// Person.lang = "en";

// // Display data from the object using a getter:
// console.log(Person.lang);




// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth) {
//         if (newWidth > 0) {
//             this._width = newWidth;  // private property of width
//         }
//         else {
//             console.error("Width must be a positive number");
//         }
//     }

//     set height(newHeight) {
//         if (newHeight > 0) {
//             this._height = newHeight;  // private property of width
//         }
//         else {
//             console.error("Height must be a positive number");
//         }
//     }

//     get width() {
//         return this._width.toFixed(1);
//     }
//     get height() {
//         return this._height.toFixed(1);
//     }
//     get area() {
//         return `${(this._width * this._height).toFixed(1)} cm2`;
//     }
// }

// const rectangle = new Rectangle(3, 4);

// console.log(rectangle.width, rectangle.height);
// console.log(rectangle.area);




class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName) {
        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName;
        }
        else {
            console.error("First name must be a non-empty string");
        }
    }
    set lastName(newLastName) {
        if (typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName;
        }
        else {
            console.error("Last name must be a non-empty string");
        }
    }
    set age(newAge) {
        if (typeof newAge === "number" && newAge >= 0) {
            this._age = newAge;
        }
        else {
            console.error("Age must be a non-negative string");
        }
    }

    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get fullName() {
        return this._firstName + " " + this._lastName;
    }

    get age() {
        return this._age;
    }

}

const person = new Person("spongebob", "squarepants", 30);

console.log(person.firstName, person.lastName, person.fullName, person.age);