// destructuring = extract values from arrays and objects, then assign them to variables in a convenient way
// [] = to perform ARRAY destructuring
// {} = to perform OBJECT destructuring
// 5 examples



// EXAMPLE 1 - swap the value of 2 variables

// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(`a: ${a}, b: ${b}`);


// EXAMPLE 2 - swap elements in an array

// const colors = ["red", "green", "blue", "black", "white"];
// [colors[0], colors[4]] = [colors[4], colors[0]];
// console.log(colors);


//EXAMPLE 3 - assign array elements to variables

// const colors = ["red", "green", "blue", "black", "white"];
// const [first, second, third, ...extra] = colors;
// console.log(first, second, third);
// console.log(extra);


//EXAMPLE 4 - extract values from objects

// const person1 = {
//     firstName: "Spongebob",
//     lastName: "Squarepants",
//     age: 30,
//     job: "Fry Cook"
// }

// const person2 = {
//     firstName: "Patrick",
//     lastName: "Star",
//     age: 34
// }

// const { firstName, lastName, age, job = "Unemployed" } = person2;   // = "..."   - default value if there isnt a job (if there is then the default wont show)

// console.log(firstName, lastName, age, job);


//EXAMPLE 5 - destructure in function parameters

function displayPerson({ firstName, lastName, age, job = "unemployed" }) {
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);

}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry Cook"
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34
}
displayPerson(person2);