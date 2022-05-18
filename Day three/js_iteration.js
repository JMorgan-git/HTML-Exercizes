'use strict'

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let boo = true;
let j = 0;
while (boo) {
    console.log("Spooky");
    j++;
    if (j > 10) {
        boo = false;
    }
}

let hello = true;
let k = 0;
do{
    console.log("So My Friend");
    k++;
    if (k > 10) {
        hello = false;
    }
}while (hello)

let expression = 1;
switch (expression) {
    case 0:
        console.log("Case 0");
        break;
    case 1:
        console.log("Case 1");
        break;
    case 2:
        console.log("Case 2");
        break;
    default:
        console.log("Default");
        break;
  }