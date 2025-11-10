// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON filse {key:values} OR [value1, value2, valeu3]

// JSON.stringify() = converts a JS object to a JSON string
// JSON.parse() = converts a JSON string to a JS object


// ---------------JSON.STRINGIFY--------------

// const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
// console.log(names);   // before stringifying them it will display an array of objects
// const jsonString = JSON.stringify(names);
// console.log(jsonString);    // one long string


// const person = {
//     "name": "Spongebob",
//     "age": 30,
//     "isEmployed": true,
//     "hobbies": ["Jellyfishing", "Karate", "Cooking"]
// }
// const jsonString = JSON.stringify(person);
// console.log(jsonString);




//-----------------JSON.PARSE------------------

// const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;

// const jsonPerson = `{ "name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing", "Karate", "Cooking"] }`

// const jsonPeople = `[{ "name": "Spongebob", "age": 30, "isEmployed": true },
// { "name": "Patrick", "age": 34, "isEmployed": false },
// { "name": "Squidward", "age": 50, "isEmployed": true },
// { "name": "Sandy", "age": 27, "isEmployed": false }]`

// const parsedData = JSON.parse(jsonPeople);
// console.log(jsonPeople);
// console.log(parsedData);



// -------------fetch("")---------------------

// fetch("people.json")
//     .then(response => response.json())
//     .then(value => console.log(value));

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.name)))
    .catch(error => console.error(error));