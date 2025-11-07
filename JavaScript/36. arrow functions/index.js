// arrow functions = a concise way to write function expressions good for simple functions that you only see once
// (parameters) => some code

// function hello() {
//     console.log("hello");
// }
// hello();

// const helloArrow = (name, age) => {
//     console.log(`Hello ${name}`);
//     console.log(`You are ${age} years old`)
// }

// helloArrow("bro", 55);


// setTimeout(() => console.log("hello"), 3000);



const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((el) => Math.pow(el, 2));
console.log(squares);

const cubes = numbers.map((el) => Math.pow(el, 3));
console.log(cubes);

const evenNums = numbers.filter((el) => el % 2 === 0);   // if one line of function code then you dont need to write 'return'
console.log(evenNums);

const oddNums = numbers.filter((el) => el % 2 !== 0);
console.log(oddNums);

const total = numbers.reduce((acc, el) => acc + el);
console.log(total);

// map = all elements, filter (odd, even), reduce - one value (sum/total)