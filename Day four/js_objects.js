'use strict'

let person = {
    forname: "John",
    surname: "Doe",
    age: 40,
    job: "Binman"
}

let person2 = new Object();
person2["forname"] = "Jane";
person2["surname"] = "Doe";
person2["age"] = 38;
person2["job"] = "Binwoman";

let person3 = new Object();
person3.forname = "Jim";
person3.surname = "Doe";
person3.age = 18;
person3.job = "Binmans Apprentice";

console.log(`${person.forname}'s job is: ${person["job"]}`);
console.log(`${person2.forname}'s job is: ${person2["job"]}`);
console.log(`${person3.forname}'s job is: ${person3["job"]}`);

person.isAwesome = true;
console.log(person);

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

for (let value of Object.values(person)) {
    console.log(value);
}

let people = Array();
people.push(person);
people.push(person2);
people.push(person3);

for (let key in people){
    console.log(`Forname: ${people[key].forname}, Surname: ${people[key].surname}, Age: ${people[key].age}, Job: ${people[key].job}`);
}

// for (let key in people){
//     console.log(people[key]);
//     for(let value in people){
//         console.log(people[value]);
//     }
    
// }

//JSON object
// let myJSON = {
//     "name " : "John",
//     "age" : 20
// }
// console.log(myJSON["name "])
