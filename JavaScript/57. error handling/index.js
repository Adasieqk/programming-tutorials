// error = an object that is created to represent a problem that occurs
//         Occur often with user input or establishing a connection

// try { } = encloses code that might potentially cause an error
// catch { } = catch and handle any thrown Errors from try { }
// finally{ } = (optional) Always executes. Used mostly for clean up ex. close files, close connections, release closures


// try {
//     console.log("Hello");
//     // network errors, promise rejection, security errors
// }
// catch (error) {
//     console.error(error);
// }
// finally {
//     console.log("This always executes");
// }

// console.log("End");



try {
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if (divisor == 0) {
        throw new Error("You cant divide by zero1");
    }

    if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error("Values must be numbers");
    }

    const result = dividend / divisor;
    console.log(result);
}
catch (error) {
    console.error(error);
}

console.log("end");