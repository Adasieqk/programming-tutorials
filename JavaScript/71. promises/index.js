// Promise = an object that manages asynchronous operations.
//           Wrap a promise object around {asynchronous code}
//           "I promise to return a value"
//           PENDING -> RESOLVED or REJECTED
//           new Promise((resolve, reject) => {asynchronous code})

// DO THESE IN ORDER
// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

// --------------CALLBACK HELL------------------

// function walkDog(callback) {
//     setTimeout(() => {
//         console.log("You walk the dog");
//         callback();
//     }, 1500);
// }

// function cleanKitchen(callback) {
//     setTimeout(() => {
//         console.log("You clean the kitchen");
//         callback();
//     }, 2500);
// }

// function takeOutTrash(callback) {
//     setTimeout(() => {
//         console.log("You take out the trash");
//         callback();
//     }, 500);
// }

// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => {
//             console.log("You finished all the chores")
//         });
//     });
// });





// ---------------PROMISE---------------

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogwalked = true;

            if (dogwalked) {
                resolve("You walk the dog");
            }
            else {
                reject("You didnt walk the dogS");
            }
        }, 1500);
    });
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = false;
            if (kitchenCleaned) {
                resolve("You clean the kitchen");
            }
            else {
                reject("You didnt clean the kitchen");
            }
        }, 2500);
    })
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;
            if (trashTakenOut) {
                resolve("You take out the trash");
            }
            else {
                reject("You didnt take out the trash");
            }
        }, 500);
    });
}

walkDog().then(value => { console.log(value); return cleanKitchen() })
    .then(value => { console.log(value); return takeOutTrash() })
    .then(value => { console.log(value); console.log("You finished all the chores") })
    .catch(error => console.error(error));