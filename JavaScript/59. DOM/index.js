// DOM = Document Object Module
//       Object that represents the page that you see in the web browser and provides you with an API to interact with it.
//       Web browser constructs the DOM when it loads a HTML document, and structures all the elements in a tree-like representation.
//       JavaScript can access the DOM to dynamically change the content, structure, and style of a web page.

const username = " username";
const msg = document.getElementById("welcome");
msg.textContent += username === "" ? " Guest" : username;

console.dir(document);
console.log(document);