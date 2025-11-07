
let fruits = ["apple", "coconut", "banana", "orange"];

// fruits[0] = "watermelon";
// fruits.push("strawberry");  // adds new element to the end of the array
// fruits.pop();  // removes last element
// fruits.unshift("mango"); // adds new element to the beggining of the array
// fruits.shift(); // removes first element


// console.log(fruits);
// console.log(fruits[0]);

// let numOfFruits = fruits.length;
// let index = fruits.indexOf("apple");

// console.log(numOfFruits);
// console.log(index);


// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// reverse:

// for (let i = fruits.length - 1; i >= 0; i--) {
//     console.log(fruits[i]);
// }


// the first for but quicker:  -  enhanced for loop

for (let fruit of fruits) {
    console.log(fruit);
}

fruits.sort(); // alphabetical
fruits.sort().reverse(); // reverse alphabetical
