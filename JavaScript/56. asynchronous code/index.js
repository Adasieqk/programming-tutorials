// synchronous = executes line by line consecutively in a sequential manner
//               Code that waits for an operation to complete

// asynchronous = allows multiple operations to be performed concurrently without waiting
//                Doesn't block the execution flow and allows the program to continue
//                (I/O operations, network requests, fetching data)
//                Handled with: callbacks, promises, async/await


function function1(callback) {
    setTimeout(() => {
        console.log("Task 1");
        callback();
    }, 3000);
}

function function2() {
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

function1(function2);
// we pass function2 as "callback", then after 3000ms this callback (function2) is executed (where there is callback() => it means function2(), because we passed it to function1)