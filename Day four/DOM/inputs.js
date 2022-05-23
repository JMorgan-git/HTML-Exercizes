'use strict';

let inputOne = document.querySelector("#inputOne");
let inputTwo = document.querySelector("#inputTwo");

let additionBtn = document.querySelector("#additionBtn");
let subtractionBtn = document.querySelector("#subtractionBtn");
let multiplicationBtn = document.querySelector("#multiplicationBtn");
let divisionBtn = document.querySelector("#divisionBtn");
let clearBtn = document.querySelector("#clearBtn");

let theDiv = document.querySelector("#theDiv");

let addition = () => {
    let valueOne = parseInt(inputOne.value);
    let valueTwo = parseInt(inputTwo.value);

    let valueDiv = document.createElement("div");
    let myValue = document.createTextNode(`${valueOne} + ${valueTwo} = ${valueOne + valueTwo}`);

    valueDiv.appendChild(myValue);
    theDiv.appendChild(valueDiv);

}

let subtraction = () => {
    let valueOne = parseInt(inputOne.value);
    let valueTwo = parseInt(inputTwo.value);

    let valueDiv = document.createElement("div");
    let myValue = document.createTextNode(`${valueOne} - ${valueTwo} = ${valueOne - valueTwo}`);

    valueDiv.appendChild(myValue);
    theDiv.appendChild(valueDiv);

}
let multiplication = () => {
    let valueOne = parseInt(inputOne.value);
    let valueTwo = parseInt(inputTwo.value);

    let valueDiv = document.createElement("div");
    let myValue = document.createTextNode(`${valueOne} * ${valueTwo} = ${valueOne * valueTwo}`);

    valueDiv.appendChild(myValue);
    theDiv.appendChild(valueDiv);

}
let division = () => {
    let valueOne = parseInt(inputOne.value);
    let valueTwo = parseInt(inputTwo.value);

    let valueDiv = document.createElement("div");
    let myValue = document.createTextNode(`${valueOne} / ${valueTwo} = ${valueOne / valueTwo}`);

    valueDiv.appendChild(myValue);
    theDiv.appendChild(valueDiv);

}
let clearResults = () => {
    theDiv.innerHTML = "";
}

additionBtn.addEventListener("click", addition);
subtractionBtn.addEventListener("click", subtraction);
multiplicationBtn.addEventListener("click", multiplication);
divisionBtn.addEventListener("click", division);

clearBtn.addEventListener("click", clearResults);