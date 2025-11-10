const fruits = [
    { name: "apple", color: "red", calories: 95 },
    { name: "orange", color: "orange", calories: 45 },
    { name: "banana", color: "yellow", calories: 105 },
    { name: "cocunut", color: "white", calories: 159 },
    { name: "pineapple", color: "yellow", calories: 37 }];

// console.log(fruits[2].calories);

// fruits.push({ name: "grapes", color: "purple", calories: 62 });

// fruits.pop();

// fruits.splice(1, 2);

// console.log(fruits);


// FOREACH ()
//fruits.forEach(fruit => console.log(fruit.name));

// MAP()
// const fruitNames = fruits.map(fruit => fruit.name);
// console.log(fruitNames);

// FILTER()
// const yellow = fruits.filter(fruit => fruit.color === "yellow");
// const lowCals = fruits.filter(fruit => fruit.calories < 100);
// const highCals = fruits.filter(fruit => fruit.calories >= 100);
// console.log(yellow);
// console.log(lowCals);
// console.log(highCals);

// REDUCE ()
const maxFruit = fruits.reduce((max, nextFruit) => nextFruit.calories > max.calories ? nextFruit : max);
const minFruit = fruits.reduce((min, nextFruit) => nextFruit.calories < min.calories ? nextFruit : min);
console.log(maxFruit);
console.log(minFruit);