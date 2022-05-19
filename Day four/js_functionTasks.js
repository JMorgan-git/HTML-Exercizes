'use strict'

function myNum(num1, num2) {
    console.log(num1 + num2);
}
myNum(10, 5);

let myString = function (name, age, gender) {
    console.log(`My name is ${name}, i am ${age} years old and of gender ${gender}`);
}

myString("Felix Cited","20","Male");

let powerUp = (n1, n2) => Math.pow(n1, n2);

console.log(powerUp(2, 3));
console.log(powerUp(3, 3));