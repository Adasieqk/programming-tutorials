// This function takes another function (called callback) as an argument
function executeCallback(cb) {
    let message = "message";   // We create a message string
    cb(message);              // We call the callback function and give it the message
}

// This is the callback function that receives the message and shows it in the console
function showMessage(text) {
    console.log(text);        // Print the message to the console
}

executeCallback(showMessage);  // Call executeCallback with showMessage as its callback

// Explanations(step-by-step):

// executeCallback is a function that expects another function as its argument. That function is called cb.
// Inside executeCallback, we create a message "Hello!".
// Then, executeCallback calls the cb function, passing it this message.
// showMessage is the function that gets passed as cb. It takes the message and prints it with console.log.
// When we run executeCallback(showMessage), the message "Hello!" is printed to the console.


hello(wait);

function hello(callback) {
    console.log("Hello");
    callback();
}

function wait() {
    console.log("Wait");
}

function leave() {
    console.log("Leave");
}

function goodbye() {
    console.log("Goodbye");
}




sum(displayConsole, 1, 2)

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function displayConsole(result) {
    console.log(result);
}