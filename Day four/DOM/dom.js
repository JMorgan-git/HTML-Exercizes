'use strict'

//Selectors
let mainDiv = document.querySelector("#addToMe");
let addBtn = document.querySelector("#addBtn");

//Functionality
let addToPage = () =>{
    let newDiv = document.createElement("div"); //<div></div>
    let newHeading = document.createElement("h1"); // <h1></h1>
    let newText = document.createTextNode("KMS"); //loose text

    newHeading.appendChild(newText); //<h1>KMS</h1>
    newDiv.appendChild(newHeading); //<div><h1>KMS</h1></div>
    mainDiv.appendChild(newDiv);// <div id="addToME"<div><h1>KMS</h1></div></div>
}
//Event listeners
addBtn.addEventListener("click", addToPage); //

let add = document.querySelector("#add");
let addBtn2 = document.querySelector("#addBtn2");
let num1 =0;
let math = () =>{
    num1 = num1 + 1;

    let newDiv = document.createElement("div"); //<div></div>
    let newHeading = document.createElement("h1"); // <h1></h1>
    let newText = document.createTextNode(num1); //loose text

    newHeading.appendChild(newText); //<h1>KMS</h1>
    newDiv.appendChild(newHeading); //<div><h1>KMS</h1></div>
    mainDiv.appendChild(newDiv);// <div id="addToME"<div><h1>KMS</h1></div></div>
}
//Event listeners
addBtn2.addEventListener("click", math); //