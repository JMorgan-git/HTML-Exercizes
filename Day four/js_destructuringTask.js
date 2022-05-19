'use strict'

let user = {
    name: "John",
    years: 30
};

let { name, years, isAdmin = false } = user;

console.log(name); // John
console.log(years); // 30
console.log(isAdmin); // false

