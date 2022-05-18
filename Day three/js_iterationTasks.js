'use strict'
//while
let A = 100;
while (A < 200) {
    console.log(A);
    A++
}

A = 100;
while (A <= 200) {
    if (A % 2 == 0) {
        console.log("-");
    } else {
        console.log("*");
    }
    A++
}
//for
for (let i = 1; i <= 10; i++) {
    console.log(`Loop: ${i}`)
    for (let j = 1; j <= 10; j++) {
        console.log(j);
    }
}

for (let B = 100; B <= 200; B++) {
    console.log(B);
}

for (let C = 100; C <= 200; C++) {
    if (C % 2 == 0) {
        console.log("-");
    } else {
        console.log("*");
    }
}

//i did not know the date function til i looked at solution
//my first task answer just used let day = "Sunday" and the cases were Strings that corrosponded.
let now = new Date(); 
let day = now.getDay();
switch (day) {
    case 0:
        console.log(`It's Sunday`);
        break;
    case 1:
        console.log(`It's Monday`);
        break;
    case 2:
        console.log(`It's Tuesday`);
        break;
    case 3:
        console.log(`It's Wednesday My Dudes`);
        break;
    case 4:
        console.log(`It's Thursday`);
        break;
    case 5:
        console.log(`It's a Friday`);
        break;
    case 6:
        console.log(`It's Saturday`);
        break;
    default:
        console.log(`Well No`);
        break;
}