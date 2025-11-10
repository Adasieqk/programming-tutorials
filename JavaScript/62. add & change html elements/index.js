// // ------------------EXAMPLE 1 <h1>-----------------

// // STEP 1 create element

// const newH1 = document.createElement("h1");


// // STEP 2 add attributes/properties

// newH1.textContent = "I like pizza!";
// newH1.id = "myH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center";


// // STEP 3 append element to DOM

// // document.body.append(newH1);
// // document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);
// // document.getElementById("box1").prepend(newH1);

// // const box2 = document.getElementById("box2");
// // document.body.insertBefore(newH1, box2);     // what element, before which element

// // const boxes = document.querySelectorAll(".box");
// // document.body.insertBefore(newH1, boxes[1]);


// // STEP 4 remove html element

// document.getElementById("box1").removeChild(newH1);




// --------------- EXAMPLE 2 <ol> ------------------------

// STEP 1 create element

const newListItem = document.createElement("li");

// STEP 2 add attributes/properties

newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// STEP 3 append element to DOM

// document.getElementById("fruits").prepend(newListItem);

// const banana = document.getElementById("banana");
// document.getElementById("fruits").insertBefore(newListItem, banana);

const listItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, listItems[1]);

// STEP 4 remove html element

document.getElementById("fruits").removeChild(newListItem);