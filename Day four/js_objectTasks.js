'use strict'

let darthVader = {
    allegiance: "empire",
    weapon: "lightsabre ",
    sith: true
}

console.log(darthVader);

console.log(`Vaders Allegience: ${darthVader.allegiance}`);
console.log(`Vaders Weapon: ${darthVader.weapon}`);
console.log(`Vaders Sithness: ${darthVader.sith}`);
console.log(`Vaders Jediness: ${darthVader.sith ? "false" : "true"}`);

let myArray = ["hello ", "everyone "];
console.log(myArray.length);
myArray.push("now ");
myArray.push("piss ");
myArray.push("of!!!");
console.log(myArray.length);
myArray.shift();

for(let key in myArray){
    console.log(myArray[key]);
}
