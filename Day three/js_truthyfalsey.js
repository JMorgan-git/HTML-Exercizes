'use strict';

if ("hello") {
    console.log("TRUE");
} else {
    console.log("FALSE");
}

let age;
if (age >= 18 || age <= 65) {
    console.log("Satisfied");
} else if (age < 18) {
    console.log("underage");
} else {
    console.log("You Broke me")
}

age = 100;
let answer = age >= 50 ? "less than 50" : "more than 50";
console.log(answer);