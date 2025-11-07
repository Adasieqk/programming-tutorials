// rest parameters = (...rest) allow a function work with a variable number of arguments by bundling them into an array

// spread = expands an array into seperate elements
// rest = bundles seperate elements into an array = opposite of spread

// function openFridge(...foods) {  // puts all given foods (1,2,3,4,5) into an array => no limit of foods
//     console.log(...foods);  // without ... displays it as an arrat, with ... displays as different 'values'
// }

// function getFood(...foods) {  //takes all seperate elements and puts it into an array
//     return foods;   // returns array
// }


// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";
// const food5 = "ramen";

// openFridge(food1, food2, food3, food4, food5);

// const foods = getFood(food1, food2, food3, food4, food5);
// console.log(foods);



// function sum(...numbers) {
//     let result = 0;
//     for (let number of numbers) {
//         result += number;
//     }
//     return result;
// }

// function getAvg(...numbers) {
//     let result = 0;
//     for (let number of numbers) {
//         result += number;
//     }
//     return result / numbers.length;
// }

// const total = sum(1, 2, 3, 4, 5, 6, 7);
// const avg = getAvg(75, 100, 85, 90, 50);
// console.log(`The avg is ${avg}, and the sum is ${total}`);


function combineStrings(...strings) {
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "SquarePants", "III");
console.log(fullName);