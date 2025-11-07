// .reduce() = reduce the elements of an array to a single value

// const prices = [5, 30, 10, 25, 15, 20];

// const total = prices.reduce(sum);

// console.log(`$${total.toFixed(2)}`);

// function sum(accumulator, element) {   // previousElement, nextElement   = can rename the names in the ()
//     return accumulator + element;
// }


const grades = [75, 50, 90, 80, 65, 95];

const max = grades.reduce(getMax);
const min = grades.reduce(getMin);

console.log(max);
console.log(min);

function getMax(accumulator, element) {
    return Math.max(accumulator, element);
}

function getMin(accumulator, element) {
    return Math.min(accumulator, element);
}