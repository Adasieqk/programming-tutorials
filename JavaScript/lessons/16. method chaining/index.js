//program takes user input (username), makes first letter uppercase, and makes the rest lowercase

// NO METHOD CHAINING

// let username = window.prompt("Enter your username:");

// // username = username.trim();
// // let letter = username.charAt(0);
// // letter = letter.toUpperCase();

// // let extraChars = username.slice(1);
// // extraChars = extraChars.toLowerCase();

// // username = letter + extraChars;

// // window.alert("Your modified username is " + username);


// METHOD CHAINING

let username = window.prompt("Enter your username:");

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

window.alert("Your modified username is " + username); 