// function happyBirthday(username, age) {
//     console.log("Happy birthday to you");
//     console.log("Happy birthday to you");
//     console.log(`Happy birthday dear ${username}`);
//     console.log("Happy birthday to you");
//     console.log(`You are ${age} years old`);
// }

// happyBirthday("Adam", 15);
// happyBirthday("Spongebob", 30);



// function add(x, y) {
//     let result = x + y;
//     return result;
//     //or return x + y;
// }

// let answer = add(2, 3);
// console.log(answer);

// //the same:
// console.log(add(2, 3));


// function add(x, y) {
//     return x + y;
// }
// function subtract(x, y) {
//     return x - y;
// }
// function multiply(x, y) {
//     return x * y;
// }
// function divide(x, y) {
//     return x / y;
// }

// console.log(add(2, 3));
// console.log(subtract(2, 3));
// console.log(multiply(2, 3));
// console.log(divide(2, 3));




// function isEven(number) {
//     if (number % 2 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// // the same 

// function isEven(number) {
//     return number % 2 === 0 ? true : false;
// }

// console.log(isEven(12));






function isValidEmail(email) {

    // if (email.includes("@")) {
    //     return true;
    // }
    // else {
    //     return false;
    // }

    return email.includes("@") ? true : false;
}

console.log(isValidEmail("name@gmail.com"));
console.log(isValidEmail("namegmail.com"));