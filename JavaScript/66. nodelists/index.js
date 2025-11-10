// NodeList = static collection of HTML elements by (id, class, element).
//            Can be created by using querySelectorAll()
//            Similar to an array, but no map, filter, reduce; have forEach
//            NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");

// ADD HTML/CSS PROPERTIES

// buttons.forEach(button => {
//     button.style.backgroundColor = "green";
//     button.textContent += "😀";
// });



// CLICK event listener

// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.style.backgroundColor = "tomato";
//     });
// });



// MOUSEOVER + MOUSEOUT event listener

// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
//     });
// });
// buttons.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
//     });
// });



// ADD AN ELEMENT TO NODELIST

// const newButton = document.createElement("button");

// newButton.textContent = "Button 5";
// newButton.classList = "myButtons";

// document.body.appendChild(newButton);

// // now if i do console.log(buttons); it will still say that theres 4 elements when theres 5
// // (NodeList won't update to automatically reflect changes)
// // to change that we have to write:   (thats why theres let buttons rather than CONST)

// buttons = document.querySelectorAll(".myButtons");
// console.log(buttons);     // now theres 5 elements



// REMOVE AN ELEMENT 

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        // console.log(buttons);   // they stay in the nodelist
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    });
});