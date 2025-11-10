// getElementById (element or null),
// getElementsClassName (html collection - can use for, cant use foreach,   can do Array.from(fruits).forEach() ),
// getElementsByTagName (html collection),
// querySelector (first element or null),
// querySelectorAll (nodelist - simillar to htmlcollection but has built in methods, is static while htmlcollections are live)



// const h1 = document.getElementById("h1");
// h1.style.backgroundColor = "yellow";
// h1.style.textAlign = "center";
// console.log(h1);



// const fruits = document.getElementsByClassName("fruits");
// console.log(fruits);
// Array.from(fruits).forEach(fruit => { fruit.style.backgroundColor = "yellow" });



// const h4 = document.getElementsByTagName("h4");
// console.log(h4);
// const li = document.getElementsByTagName("li");
// console.log(li);

// for (let h4element of h4) {
//     h4element.style.backgroundColor = "yellow";
// }

// Array.from(li).forEach(li => {
//     li.style.backgroundColor = "lightgreen";
// })



// const element = document.querySelector(".fruits");   // returns first match
// element.style.backgroundColor = "yellow";
// console.log(element);



const fruits = document.querySelectorAll(".fruits");

fruits.forEach(food => {
    food.style.backgroundColor = "yellow";
});

console.log(fruits);