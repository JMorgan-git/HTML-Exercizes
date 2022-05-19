'use strict'
//global scope
let age = 10;
//function scope
let myFunction = () => {
    let adjustment;
    age += adjustment;
    return adjustment;
}

let adjustment = myFunction();
console.log(age);

//following out of scope
//console.log(adjustment);

//loop scope
for(let i =0; i<5;i++){
    let myVariable = 10;
}
//following out of scope
//console.log(myVariable);