// local vs global


let x = 3;  // must be unique, can have same names but in different scopes
//here it is global - it can be recognized everywhere in the code


function function1() {
    let x = 1;          // local -  makes variable only in this function
    console.log(x);     // 1 - if there is 2 variables of the same name the local one has priority
}

function function2() {
    let x = 2;
    console.log(x);
}

function1();
function2();
