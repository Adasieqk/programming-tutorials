// eventListener events : click, mouseover, mouseout
// .addEventListener(event, callback / anonymous function / arrow function)

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", (event) => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "Clicked!";
});

myButton.addEventListener("mouseover", (event) => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Mouseover";
});

myButton.addEventListener("mouseout", (event) => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click me!";
});