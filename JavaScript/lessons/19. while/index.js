// let username = "";

// while (username === "" || username === null) {
//     username = window.prompt("Enter your name");
// }

// console.log(`Hello ${username}`);

let loggedIn = false;
let username;
let password;

do {
    username = window.prompt("Enter username");
    password = window.prompt("Enter password");

    if (username === "1" && password === "2") {
        loggedIn = true;
        console.log("You are logged in");
    }
    else {
        console.log("Invalid credentials");
    }

} while (!loggedIn) //the same 