'use strict'

//Function declaration we dont like declarations globalizing and hoisting no no no no
function myFunk(num1, num2, num3) {
    return (num1 + num2 + num3);
}

let result = myFunk(1, 2, 3);
console.log(result);

//function Expression prefferable to use must be before called
let myFunkEx = function (num1, num2, num3) {
    return (num1 + num2 + num3);
}

console.log(myFunkEx(1, 2, 3));

//Arrow Functions
let myArrowFunk = (num1, num2, num3) => {
    return (num1 + num2 + num3);
}

//Following is a shorted return statment
//let myArrowFunk = (num1, num2, num3) => num1 + num2 + num3;

console.log(myArrowFunk(1, 2, 3));

