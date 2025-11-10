// ES6 module = an external file that contains reusable code that can be imported into other JavaScript files.
// Write reusable code for many different apps.
// Can contain variables, classes, functions, ... and more
// Introduced as part of ECMAScript 2015 update

// INDEX.HTML JS LINK : type="module"
// see mathUtil.js comments



import { PI, getCircumference, getArea, getVolume } from './mathUtil.js';    // {} object destructuring

console.log(PI);

const circ = getCircumference(10).toFixed(2);
console.log(circ);

const area = getArea(10).toFixed(2);
console.log(area);

const volume = getVolume(10).toFixed(2);
console.log(volume);