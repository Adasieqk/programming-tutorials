// function declaration = define a reusable block of code that performs a specific task
// function expressions = a way to define functions as values or variables

// 1. callbacks in asynchronous operations
// 2. high-order functions
// 3. closures
// 4. event listeners

// setTimeout(function () {
//     console.log("Hello");
// }, 3000);


const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function (el) {    // just putting in a function as a value/variable function doesnt need a name,   useful when using a function only once
    return Math.pow(el, 2);
});

const cubes = numbers.map(function cube(el) {
    return Math.pow(el, 3);
});

const evenNums = numbers.filter(function (el) {
    return el % 2 === 0;
});

const oddNums = numbers.filter(function (el) {
    return el % 2 !== 0;
});

const total = numbers.reduce(function (acc, el) {
    return acc + el;
});

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);