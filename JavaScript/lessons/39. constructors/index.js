// constructor = special method for defining the properties and methods of objects

function Car(make, model, year, color) {  //the make, model ... can be named however you like
    this.make = make,
        this.model = model,
        this.year = year,
        this.color = color,
        this.drive = function () {
            console.log(`You drive the ${this.model}`)
        }
}

const car1 = new Car("Ford", "Mustang", 2024, "Red");
console.log(car1.make, car1.model, car1.year, car1.color);

const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
console.log(car2.make, car2.model, car2.year, car2.color);

const car3 = new Car("Dodge", "Charger", 2026, "silver");
console.log(car3.make, car3.model, car3.year, car3.color);

car1.drive();
car2.drive();
car3.drive();