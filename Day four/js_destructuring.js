'use strict'

const myArray = ["a", "b", "c", "d"];

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2], myArray[3]);

//following is destrcturing, this allows each element to be considered as variables
const [ele1, ele2, ele3, ele4] = myArray;
console.log(ele1);
console.log(ele2);
console.log(ele3, ele4);

const myNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [a, b, c, ...remaining] = myNumArray;

console.log(a);
console.log(b);
console.log(c);
console.log(remaining);

const myNumArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [x, , , , y, z, ...remaining2] = myNumArray2;

console.log(x);
console.log(y);
console.log(z);
console.log(remaining2);

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

const person = {
    forname: "John",
    surname: "Doe",
    age: 34,
    job: "Binman",
    hobbies : {
        sport : "foot",
        game : "mario",
    }
}

let { forname, surname, age, job, hobbies, shoesize = 10} = person;
console.log(forname);
console.log(surname);
console.log(age);
console.log(job);
console.log(hobbies.sport);
console.log(hobbies.game);
console.log(shoesize);
