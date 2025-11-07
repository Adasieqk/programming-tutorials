// spread operator = ... allows an iterable such as an array or string to be expanded into seperate elements (unpacks the elements)

// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers);  // without spread => NaN => cant place array into max, it has to seperate all elements and find the max
// let minimum = Math.min(...numbers);

// console.log(maximum);
// console.log(minimum);

let username = "Name";

let letters = [...username];
let lettersjoin = [...username].join("-");

console.log(letters);
console.log(lettersjoin);


let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];

let newFruits = [...fruits];
let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(fruits);
console.log(newFruits);
console.log(foods);